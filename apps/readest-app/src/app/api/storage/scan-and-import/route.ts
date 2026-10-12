import { NextRequest, NextResponse } from 'next/server';
import fs from 'node:fs/promises';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { STORAGE_ROOT, TEMP_ROOT, ensureRoots, isLocalStorageEnabled, invalidateWalkFiles } from '../_lib/localFs';
import { extractCover } from '../_lib/coverExtractor';
import { extractBookMetadata, saveBookMetadataInfo } from '../_lib/bookMetadataExtractor';
import { generateCoverThumbWebp } from '../_lib/imageThumb';

const SUPPORTED_EXTS = ['.epub', '.mobi', '.azw', '.azw3', '.fb2', '.cbz', '.pdf', '.txt'];
const METADATA_DIR = '.readest';
const LIBRARY_FILE = path.join(STORAGE_ROOT, METADATA_DIR, 'library.json');

// 哈希缓存：使用文件路径+mtime作为key，避免重复计算
const hashCache = new Map<string, { hash: string; mtime: number }>();

// 2026-10-12 P1：哈希缓存持久化——服务重启后不再全库重读（每本可省 2MB IO）。
// 兼容：缓存文件不存在时静默降级为旧行为（首次运行为空）。
const HASH_CACHE_FILE = path.join(STORAGE_ROOT, METADATA_DIR, 'scan-cache.json');
let hashCacheLoaded = false;
async function loadHashCache(): Promise<void> {
    if (hashCacheLoaded) return;
    hashCacheLoaded = true;
    try {
        const raw = JSON.parse(await fs.readFile(HASH_CACHE_FILE, 'utf-8')) as Record<string, { hash: string; mtime: number }>;
        for (const [p, v] of Object.entries(raw)) hashCache.set(p, v);
    } catch {
        // 无缓存文件或损坏时静默降级
    }
}
async function saveHashCache(entries: Record<string, { hash: string; mtime: number }>): Promise<void> {
    try {
        await fs.mkdir(path.dirname(HASH_CACHE_FILE), { recursive: true });
        const tmp = HASH_CACHE_FILE + '.tmp';
        await fs.writeFile(tmp, JSON.stringify(entries, null, 2), 'utf-8');
        await fs.rename(tmp, HASH_CACHE_FILE);
    } catch {
        // 缓存写失败不影响扫描结果
    }
}

// 2026-10-12 P1：清理超过 7 天的临时上传残件与崩溃残留目录（只删 .part/.temp_*，不动任何正式数据）
async function cleanupTempFiles(): Promise<void> {
    const cutoff = Date.now() - 7 * 24 * 60 * 60 * 1000;
    try {
        const uploadsDir = path.join(TEMP_ROOT, 'uploads');
        const names = await fs.readdir(uploadsDir).catch(() => []);
        for (const name of names) {
            if (!name.endsWith('.part')) continue;
            const p = path.join(uploadsDir, name);
            try {
                const st = await fs.stat(p);
                if (st.mtimeMs < cutoff) await fs.rm(p, { force: true });
            } catch { /* 忽略单个文件错误 */ }
        }
    } catch { /* 忽略 */ }
    try {
        const groups = await fs.readdir(STORAGE_ROOT, { withFileTypes: true }).catch(() => []);
        for (const g of groups) {
            if (!g.isDirectory()) continue;
            const entries = await fs.readdir(path.join(STORAGE_ROOT, g.name), { withFileTypes: true }).catch(() => []);
            for (const e of entries) {
                if (!e.isDirectory() || !e.name.startsWith('.temp_')) continue;
                const p = path.join(STORAGE_ROOT, g.name, e.name);
                try {
                    const st = await fs.stat(p);
                    if (st.mtimeMs < cutoff) await fs.rm(p, { recursive: true, force: true });
                } catch { /* 忽略 */ }
            }
        }
    } catch { /* 忽略 */ }
}

interface ScannedBook {
    filePath: string;
    relativePath: string;
    fileName: string;
    directory: string;
    size: number;
    mtime: number;
    ext: string;
    hash?: string;
}

interface LibraryBook {
    hash: string;
    relativePath?: string;
    [key: string]: any;
}

/**
 * 计算文件的快速哈希（用于去重）
 * 仅读取前1MB + 最后1MB + 文件大小
 * 使用缓存避免重复计算
 */
async function computeQuickHash(filePath: string, mtime: number): Promise<string> {
    // 检查缓存
    const cacheKey = filePath;
    const cached = hashCache.get(cacheKey);
    if (cached && cached.mtime === mtime) {
        return cached.hash;
    }

    try {
        const stat = await fs.stat(filePath);
        const hash = createHash('md5');
        const fileSize = stat.size;

        // 添加文件大小
        hash.update(fileSize.toString());

        // 读取前1MB
        const firstChunkSize = Math.min(1024 * 1024, fileSize);
        const firstBuffer = Buffer.alloc(firstChunkSize);
        const fd = await fs.open(filePath, 'r');
        await fd.read(firstBuffer, 0, firstChunkSize, 0);
        hash.update(firstBuffer);

        // 如果文件大于2MB，读取最后1MB
        if (fileSize > 2 * 1024 * 1024) {
            const lastChunkSize = Math.min(1024 * 1024, fileSize);
            const lastBuffer = Buffer.alloc(lastChunkSize);
            await fd.read(lastBuffer, 0, lastChunkSize, fileSize - lastChunkSize);
            hash.update(lastBuffer);
        }

        await fd.close();
        const result = hash.digest('hex');

        // 缓存结果
        hashCache.set(cacheKey, { hash: result, mtime });

        return result;
    } catch (error) {
        console.error('[QuickHash] Error computing hash for:', filePath, error);
        // 如果计算失败，使用相对路径作为备用
        return path.relative(STORAGE_ROOT, filePath);
    }
}

/**
 * 递归扫描目录中的所有书籍文件
 */
async function scanDirectory(dir: string, baseDir: string): Promise<ScannedBook[]> {
    const books: ScannedBook[] = [];

    try {
        const entries = await fs.readdir(dir, { withFileTypes: true });

        for (const entry of entries) {
            const fullPath = path.join(dir, entry.name);

            // Skip metadata directory
            if (entry.name === METADATA_DIR) continue;

            if (entry.isDirectory()) {
                const subBooks = await scanDirectory(fullPath, baseDir);
                books.push(...subBooks);
            } else if (entry.isFile()) {
                const ext = path.extname(entry.name).toLowerCase();
                if (SUPPORTED_EXTS.includes(ext)) {
                    const stat = await fs.stat(fullPath);
                    const relativePath = path.relative(baseDir, fullPath);
                    const directory = path.dirname(relativePath);

                    books.push({
                        filePath: fullPath,
                        relativePath: relativePath.replace(/\\/g, '/'),
                        fileName: entry.name,
                        directory: directory === '.' ? '' : directory.replace(/\\/g, '/'),
                        size: stat.size,
                        mtime: stat.mtimeMs,
                        ext: ext.slice(1),
                    });
                }
            }
        }
    } catch (error) {
        console.error('[ScanDir] Error scanning directory:', dir, error);
    }

    return books;
}

/**
 * 加载现有的library.json
 */
async function loadLibraryJSON(): Promise<LibraryBook[]> {
    try {
        const content = await fs.readFile(LIBRARY_FILE, 'utf-8');
        return JSON.parse(content) || [];
    } catch (error) {
        console.log('[LibraryJSON] No existing library.json found');
        return [];
    }
}

/**
 * 保存library.json到磁盘
 */
async function saveLibraryJSON(books: LibraryBook[]): Promise<void> {
    try {
        const dir = path.dirname(LIBRARY_FILE);
        await fs.mkdir(dir, { recursive: true });

        // 创建备份
        try {
            const backupPath = path.join(dir, 'library.json.bak');
            if (await fs.stat(LIBRARY_FILE).then(() => true).catch(() => false)) {
                await fs.copyFile(LIBRARY_FILE, backupPath);
            }
        } catch (error) {
            console.warn('[LibraryJSON] Could not create backup:', error);
        }

        await fs.writeFile(LIBRARY_FILE, JSON.stringify(books, null, 2), 'utf-8');
        console.log('[ScanAndImport] ✓ library.json updated');
    } catch (error) {
        console.error('[LibraryJSON] Error saving library:', error);
        throw error;
    }
}

/**
 * 移动书籍的附属文件夹（cover 和 config）
 * 文件夹命名规则：去掉文件扩展名后作为文件夹名
 * 例如：book1.epub → book1/
 */
async function moveBookMetadataFolder(oldRelativePath: string, newRelativePath: string): Promise<void> {
    try {
        // 提取文件夹名称（去掉扩展名）
        const oldFolderName = oldRelativePath.replace(/\.[^.]+$/, '');
        const newFolderName = newRelativePath.replace(/\.[^.]+$/, '');

        const oldFolderPath = path.join(STORAGE_ROOT, oldFolderName);
        const newFolderPath = path.join(STORAGE_ROOT, newFolderName);

        // 检查旧文件夹是否存在
        const oldFolderExists = await fs.stat(oldFolderPath).then(() => true).catch(() => false);

        if (!oldFolderExists) {
            console.log('[MoveMetadata] Old folder does not exist:', oldFolderName);
            return;
        }

        // 确保新文件夹的父目录存在
        const newFolderDir = path.dirname(newFolderPath);
        await fs.mkdir(newFolderDir, { recursive: true });

        // 移动文件夹
        await fs.rename(oldFolderPath, newFolderPath);
        console.log('[MoveMetadata] ✓ Folder moved from', oldFolderName, 'to', newFolderName);
    } catch (error) {
        console.warn('[MoveMetadata] Warning: Could not move metadata folder:', error);
        // 不抛出异常，仅记录警告，继续处理其他书籍
    }
}

/**
 * 后端扫描和导入合一端点
 * 
 * 功能：
 * 1. 扫描文件系统中的所有书籍文件
 * 2. 计算快速哈希进行去重
 * 3. 与 library.json 比对，识别：
 *    - 新书籍（文件存在但不在库中）
 *    - 移动的书籍（哈希匹配但路径不同）
 *    - 删除的书籍（在库中但文件不存在）
 * 4. 直接更新 library.json（减少数据传输）
 * 5. 返回增量数据摘要
 */
export async function POST(_req: NextRequest) {
    if (!isLocalStorageEnabled()) {
        return NextResponse.json({ error: 'Local storage disabled' }, { status: 501 });
    }

    await ensureRoots();

    try {
        console.log('[ScanAndImport] Starting scan and import process');
        await loadHashCache();
        await cleanupTempFiles();

        // Step 1: 扫描文件系统
        const scannedBooks = await scanDirectory(STORAGE_ROOT, STORAGE_ROOT);
        console.log('[ScanAndImport] Found', scannedBooks.length, 'files in storage');

        // Step 2: 计算快速哈希（并发处理，限制并发数）
        console.log('[ScanAndImport] Computing hashes for deduplication...');
        const HASH_CONCURRENCY = 5; // 限制同时计算哈希的数量
        for (let i = 0; i < scannedBooks.length; i += HASH_CONCURRENCY) {
            const batch = scannedBooks.slice(i, i + HASH_CONCURRENCY);
            await Promise.all(batch.map(async (book) => {
                book.hash = await computeQuickHash(book.filePath, book.mtime);
            }));
        }
        // 2026-10-12 P1：收集本轮哈希结果用于持久化（顺带自动清理已删书籍的陈旧缓存项）
        const persistedHashEntries: Record<string, { hash: string; mtime: number }> = {};
        for (const b of scannedBooks) {
            if (b.hash) persistedHashEntries[b.filePath] = { hash: b.hash, mtime: b.mtime };
        }

        // Step 3: 读取现有库
        const existingLibrary = await loadLibraryJSON();
        console.log('[ScanAndImport] Current library has', existingLibrary.length, 'books');

        // Step 4: 创建映射关系
        const existingByHash = new Map(existingLibrary.map(b => [b.hash, b]));
        const scannedByHash = new Map(scannedBooks.map(b => [b.hash!, b]));

        // Step 5: 分类处理
        const newBooks: LibraryBook[] = [];
        const movedBooks: Array<{ oldPath: string; newPath: string; hash: string }> = [];
        const deletedBooks: LibraryBook[] = [];

        // 检查新书和移动的书
        for (const scannedBook of scannedBooks) {
            if (existingByHash.has(scannedBook.hash!)) {
                // 书籍已存在
                const existingBook = existingByHash.get(scannedBook.hash!)!;

                // 检查是否被移动
                if (existingBook.relativePath && existingBook.relativePath !== scannedBook.relativePath) {
                    movedBooks.push({
                        oldPath: existingBook.relativePath,
                        newPath: scannedBook.relativePath,
                        hash: scannedBook.hash!,
                    });

                    // 移动附属文件夹（cover 和 config）
                    await moveBookMetadataFolder(existingBook.relativePath, scannedBook.relativePath);

                    // 直接在内存中更新现有书籍的路径
                    existingBook.relativePath = scannedBook.relativePath;
                    console.log('[ScanAndImport] Book moved:', existingBook.relativePath);
                }
            } else {
                // 新书籍 - 创建基本元数据
                const book: LibraryBook = {
                    hash: scannedBook.hash!,
                    format: scannedBook.ext.toUpperCase(),
                    title: scannedBook.fileName.replace(/\.[^.]+$/, ''),
                    sourceTitle: scannedBook.fileName.replace(/\.[^.]+$/, ''),
                    author: 'Unknown Author',
                    groupName: scannedBook.directory || '',
                    relativePath: scannedBook.relativePath,
                    filePath: scannedBook.filePath,
                    createdAt: Date.now(),
                    updatedAt: Date.now(),
                    deletedAt: null,
                };
                newBooks.push(book);
                console.log('[ScanAndImport] New book found:', book['title']);
            }
        }

        // 检查删除的书（在库中但不在文件系统中）
        for (const existingBook of existingLibrary) {
            if (!scannedByHash.has(existingBook.hash)) {
                deletedBooks.push(existingBook);
                console.log('[ScanAndImport] Book deleted:', existingBook['title']);
            }
        }

        // Step 6a: 为新书籍创建同名文件夹并提取封面（批量并发处理）
        console.log('[ScanAndImport] Creating metadata folders and extracting covers for', newBooks.length, 'new books...');
        let coversExtracted = 0;
        let coversFailed = 0;

        // 批量处理新书，限制并发数避免资源耗尽
        const COVER_CONCURRENCY = 3; // 同时处理3本书的封面提取
        const processBook = async (newBook: LibraryBook) => {
            const bookFilePath = path.join(STORAGE_ROOT, newBook['relativePath']!);
            const metadataFolderPath = path.join(
                STORAGE_ROOT,
                newBook['relativePath']!.replace(/\.[^.]+$/, '')
            );

            try {
                // 创建元数据文件夹
                await fs.mkdir(metadataFolderPath, { recursive: true });

                // 并行创建 config.json 和提取封面
                const [configResult, coverBuffer] = await Promise.allSettled([
                    // 创建初始 config.json
                    (async () => {
                        const configPath = path.join(metadataFolderPath, 'config.json');
                        const configExists = await fs.stat(configPath).then(() => true).catch(() => false);
                        if (!configExists) {
                            const initConfig = { updatedAt: 0 };
                            await fs.writeFile(configPath, JSON.stringify(initConfig, null, 2), 'utf-8');
                        }
                    })(),
                    // 提取封面
                    extractCover(bookFilePath)
                ]);

                // 保存封面
                if (coverBuffer.status === 'fulfilled' && coverBuffer.value) {
                    const coverPath = path.join(metadataFolderPath, 'cover.png');
                    await fs.writeFile(coverPath, coverBuffer.value);
                    // 2026-10-12 P1：同步生成 600px WebP 缩略图（cover.png 保留不动，完全兼容）
                    await generateCoverThumbWebp(coverPath, path.join(metadataFolderPath, 'cover.webp'));
                    coversExtracted++;
                } else {
                    coversFailed++;
                }

                // 提取并保存书籍元数据（用于快速加载）
                try {
                    const metadata = await extractBookMetadata(
                        bookFilePath,
                        newBook['hash'] as string,
                        newBook['format'] as string,
                    );
                    await saveBookMetadataInfo(metadataFolderPath, metadata);
                } catch (error) {
                    // 不影响整体流程
                }
            } catch (error) {
                console.error('[ScanAndImport] ✗ Failed to process:', newBook['title']);
                coversFailed++;
            }
        };

        // 批量处理，每批COVER_CONCURRENCY本书
        for (let i = 0; i < newBooks.length; i += COVER_CONCURRENCY) {
            const batch = newBooks.slice(i, i + COVER_CONCURRENCY);
            await Promise.all(batch.map(processBook));
        }

        if (newBooks.length > 0) {
            console.log(`[ScanAndImport] Cover extraction summary: ${coversExtracted} extracted, ${coversFailed} failed`);
        }

        // Step 6b: 更新库（移除删除的书，保留现有的，添加新书）
        const updatedLibrary = existingLibrary
            .filter(b => !deletedBooks.some(db => db.hash === b.hash))
            .concat(newBooks);

        // Step 6c: 检查所有书籍的元数据文件夹，确保存在（批量检查）
        console.log('[ScanAndImport] Checking metadata folders for all books...');
        let foldersCreated = 0;
        let configsCreated = 0;

        // 批量检查，避免串行处理
        const CHECK_CONCURRENCY = 10;
        const checkBook = async (book: LibraryBook) => {
            if (!book.relativePath) return;

            const metadataFolderName = book.relativePath.replace(/\.[^.]+$/, '');
            const metadataFolderPath = path.join(STORAGE_ROOT, metadataFolderName);

            try {
                const folderExists = await fs.stat(metadataFolderPath).then(() => true).catch(() => false);
                if (!folderExists) {
                    await fs.mkdir(metadataFolderPath, { recursive: true });
                    foldersCreated++;
                }

                // 确保 config.json 存在
                const configPath = path.join(metadataFolderPath, 'config.json');
                const configExists = await fs.stat(configPath).then(() => true).catch(() => false);
                if (!configExists) {
                    const initConfig = { updatedAt: 0 };
                    await fs.writeFile(configPath, JSON.stringify(initConfig, null, 2), 'utf-8');
                    configsCreated++;
                }
            } catch (error) {
                // 忽略错误
            }
        };

        for (let i = 0; i < updatedLibrary.length; i += CHECK_CONCURRENCY) {
            const batch = updatedLibrary.slice(i, i + CHECK_CONCURRENCY);
            await Promise.all(batch.map(checkBook));
        }

        if (foldersCreated > 0) {
            console.log('[ScanAndImport] ✓ Created', foldersCreated, 'missing metadata folders');
        }
        if (configsCreated > 0) {
            console.log('[ScanAndImport] ✓ Created', configsCreated, 'missing config.json files');
        }

        // Step 6d: 为已有书籍补全缺失封面（批量并发处理）
        console.log('[ScanAndImport] Checking missing covers for all books...');
        let coversRecovered = 0;
        let coversStillMissing = 0;

        // 批量检查并提取缺失封面
        const recoverCover = async (book: LibraryBook) => {
            if (!book.relativePath) return;

            const metadataFolderName = book.relativePath.replace(/\.[^.]+$/, '');
            const metadataFolderPath = path.join(STORAGE_ROOT, metadataFolderName);
            const coverPath = path.join(metadataFolderPath, 'cover.png');

            const coverExists = await fs.stat(coverPath).then(() => true).catch(() => false);
            if (coverExists) return;

            try {
                const bookFilePath = path.join(STORAGE_ROOT, book.relativePath);
                const coverBuffer = await extractCover(bookFilePath);
                if (coverBuffer) {
                    await fs.writeFile(coverPath, coverBuffer);
                    coversRecovered++;
                } else {
                    coversStillMissing++;
                }
            } catch (error) {
                coversStillMissing++;
            }
        };

        // 限制并发数
        const RECOVER_CONCURRENCY = 2;
        for (let i = 0; i < updatedLibrary.length; i += RECOVER_CONCURRENCY) {
            const batch = updatedLibrary.slice(i, i + RECOVER_CONCURRENCY);
            await Promise.all(batch.map(recoverCover));
        }

        if (coversRecovered > 0 || coversStillMissing > 0) {
            console.log('[ScanAndImport] Missing cover recovery summary:', {
                recovered: coversRecovered,
                stillMissing: coversStillMissing,
            });
        }

        // 2026-10-12 P1 封面缩略图迁移：为已有 cover.png 但缺 cover.webp 的存量书补生成
        // （幂等：每次扫描只处理缺失的，首次迁移后零开销；只新增文件，永不修改旧数据）
        console.log('[ScanAndImport] Generating missing cover.webp thumbnails...');
        const thumbBook = async (book: LibraryBook) => {
            if (!book.relativePath) return;
            const metadataFolderPath = path.join(
                STORAGE_ROOT,
                book.relativePath.replace(/\.[^.]+$/, '')
            );
            const pngPath = path.join(metadataFolderPath, 'cover.png');
            const webpPath = path.join(metadataFolderPath, 'cover.webp');
            const hasWebp = await fs.stat(webpPath).then(() => true).catch(() => false);
            if (hasWebp) return;
            const hasPng = await fs.stat(pngPath).then(() => true).catch(() => false);
            if (!hasPng) return;
            await generateCoverThumbWebp(pngPath, webpPath);
        };
        for (let i = 0; i < updatedLibrary.length; i += 3) {
            const batch = updatedLibrary.slice(i, i + 3);
            await Promise.all(batch.map(thumbBook));
        }

        // Step 7: 直接保存更新的库到 library.json
        // 这是关键优化：后端直接更新，前端无需额外处理
        await saveLibraryJSON(updatedLibrary);
        await saveHashCache(persistedHashEntries);

        console.log('[ScanAndImport] ✓ Scan completed');
        console.log('[ScanAndImport] Summary:', {
            totalScanned: scannedBooks.length,
            newCount: newBooks.length,
            movedCount: movedBooks.length,
            deletedCount: deletedBooks.length,
        });

        // Step 8: 返回增量数据（减少数据传输）
        invalidateWalkFiles();
        return NextResponse.json({
            success: true,
            summary: {
                totalScanned: scannedBooks.length,
                newCount: newBooks.length,
                movedCount: movedBooks.length,
                deletedCount: deletedBooks.length,
            },
            newBooks: newBooks.map(b => ({
                hash: b['hash'],
                title: b['title'],
                relativePath: b['relativePath'],
                format: b['format'],
            })),
            movedBooks,
            deletedBooks: deletedBooks.map(b => ({
                hash: b['hash'],
                title: b['title'],
                relativePath: b['relativePath'],
            })),
        });
    } catch (error: any) {
        console.error('[ScanAndImport] Error:', error?.message);
        return NextResponse.json(
            { error: error?.message || 'Scan and import failed' },
            { status: 500 }
        );
    }
}
