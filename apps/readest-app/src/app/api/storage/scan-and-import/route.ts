import { NextRequest, NextResponse } from 'next/server';
import fs from 'node:fs/promises';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { STORAGE_ROOT, ensureRoots, isLocalStorageEnabled } from '../_lib/localFs';
import { extractCover } from '../_lib/coverExtractor';

const SUPPORTED_EXTS = ['.epub', '.mobi', '.azw', '.azw3', '.fb2', '.cbz', '.pdf', '.txt'];
const METADATA_DIR = '.readest';
const LIBRARY_FILE = path.join(STORAGE_ROOT, METADATA_DIR, 'library.json');

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
 */
async function computeQuickHash(filePath: string): Promise<string> {
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
        return hash.digest('hex');
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

        // Step 1: 扫描文件系统
        const scannedBooks = await scanDirectory(STORAGE_ROOT, STORAGE_ROOT);
        console.log('[ScanAndImport] Found', scannedBooks.length, 'files in storage');

        // Step 2: 计算快速哈希
        console.log('[ScanAndImport] Computing hashes for deduplication...');
        for (const book of scannedBooks) {
            book.hash = await computeQuickHash(book.filePath);
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

        // Step 6a: 为新书籍创建同名文件夹并提取封面
        console.log('[ScanAndImport] Creating metadata folders and extracting covers for', newBooks.length, 'new books...');
        let coversExtracted = 0;
        let coversFailed = 0;

        for (const newBook of newBooks) {
            const bookFilePath = path.join(STORAGE_ROOT, newBook['relativePath']!);
            const metadataFolderPath = path.join(
                STORAGE_ROOT,
                newBook['relativePath']!.replace(/\.[^.]+$/, '')
            );

            try {
                // 创建元数据文件夹
                await fs.mkdir(metadataFolderPath, { recursive: true });
                console.log('[ScanAndImport] ✓ Created metadata folder:', path.basename(metadataFolderPath));

                // 创建初始 config.json
                const configPath = path.join(metadataFolderPath, 'config.json');
                const configExists = await fs.stat(configPath).then(() => true).catch(() => false);
                if (!configExists) {
                    const initConfig = { updatedAt: 0 };
                    await fs.writeFile(configPath, JSON.stringify(initConfig, null, 2), 'utf-8');
                    console.log('[ScanAndImport] ✓ Created config.json for:', newBook['title']);
                }

                // 提取并保存封面
                const coverBuffer = await extractCover(bookFilePath);
                if (coverBuffer) {
                    const coverPath = path.join(metadataFolderPath, 'cover.png');
                    await fs.writeFile(coverPath, coverBuffer);
                    console.log('[ScanAndImport] ✓ Extracted cover for:', newBook['title']);
                    coversExtracted++;
                } else {
                    console.warn('[ScanAndImport] ⚠️ No cover found for:', newBook['title']);
                    coversFailed++;
                }
            } catch (error) {
                console.error('[ScanAndImport] ✗ Failed to process metadata for:', newBook['title'], error);
                coversFailed++;
            }
        }

        if (newBooks.length > 0) {
            console.log(`[ScanAndImport] Cover extraction summary: ${coversExtracted} extracted, ${coversFailed} failed`);
        }

        // Step 6b: 更新库（移除删除的书，保留现有的，添加新书）
        const updatedLibrary = existingLibrary
            .filter(b => !deletedBooks.some(db => db.hash === b.hash))
            .concat(newBooks);

        // Step 6c: 检查所有书籍的元数据文件夹，确保存在
        console.log('[ScanAndImport] Checking metadata folders for all books...');
        let foldersCreated = 0;
        let configsCreated = 0;
        for (const book of updatedLibrary) {
            if (!book.relativePath) continue;

            const metadataFolderName = book.relativePath.replace(/\.[^.]+$/, '');
            const metadataFolderPath = path.join(STORAGE_ROOT, metadataFolderName);

            try {
                const folderExists = await fs.stat(metadataFolderPath).then(() => true).catch(() => false);
                if (!folderExists) {
                    await fs.mkdir(metadataFolderPath, { recursive: true });
                    console.log('[ScanAndImport] Created missing metadata folder:', metadataFolderName);
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
                console.warn('[ScanAndImport] Failed to create metadata folder for:', book['title'], error);
            }
        }
        if (foldersCreated > 0) {
            console.log('[ScanAndImport] ✓ Created', foldersCreated, 'missing metadata folders');
        }
        if (configsCreated > 0) {
            console.log('[ScanAndImport] ✓ Created', configsCreated, 'missing config.json files');
        }

        // Step 7: 直接保存更新的库到 library.json
        // 这是关键优化：后端直接更新，前端无需额外处理
        await saveLibraryJSON(updatedLibrary);

        console.log('[ScanAndImport] ✓ Scan completed');
        console.log('[ScanAndImport] Summary:', {
            totalScanned: scannedBooks.length,
            newCount: newBooks.length,
            movedCount: movedBooks.length,
            deletedCount: deletedBooks.length,
        });

        // Step 8: 返回增量数据（减少数据传输）
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
