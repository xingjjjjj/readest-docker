import { NextRequest, NextResponse } from 'next/server';
import fs from 'node:fs/promises';
import path from 'node:path';
import { STORAGE_ROOT, ensureRoots, isLocalStorageEnabled } from '../_lib/localFs';
import { BOOK_UNGROUPED_NAME } from '@/services/constants';

const SUPPORTED_EXTS = ['.epub', '.mobi', '.azw', '.azw3', '.fb2', '.cbz', '.pdf', '.txt'];
const METADATA_DIR = '.readest';

interface ReconcileResult {
    hash: string;
    status: 'matched' | 'moved' | 'missing' | 'duplicated';
    oldRelativePath?: string;
    newRelativePath?: string;
    absolutePath?: string;
    suggestedGroupName?: string;
    message?: string;
}

interface LibraryBook {
    hash: string;
    relativePath?: string;
    absolutePath?: string;
    title: string;
    groupName?: string;
}

/**
 * 书籍路径校准 API
 * 
 * 功能：
 * 1. 扫描文件系统中的所有书籍文件
 * 2. 与 library.json 中的记录进行对比
 * 3. 检测路径不一致、文件移动、文件丢失等情况
 * 4. 根据文件实际位置推断分组信息
 * 5. 返回需要调整的书籍列表
 */
export async function POST(req: NextRequest) {
    if (!isLocalStorageEnabled()) {
        return NextResponse.json({ error: 'Local storage disabled' }, { status: 501 });
    }

    await ensureRoots();

    try {
        const { library } = await req.json();

        if (!Array.isArray(library)) {
            return NextResponse.json(
                { error: 'Invalid library data: expected an array' },
                { status: 400 }
            );
        }

        console.log('[Reconcile] Starting reconciliation with', library.length, 'books');

        // Step 1: 扫描文件系统中的所有书籍文件
        const filesInStorage = await scanAllBooks(STORAGE_ROOT);
        console.log('[Reconcile] Found', filesInStorage.size, 'files in storage');

        // Step 2: 对比 library 中的每一本书
        const results: ReconcileResult[] = [];
        const processedFiles = new Set<string>();

        for (const book of library as LibraryBook[]) {
            if (!book.hash) continue;

            const result = await reconcileBook(book, filesInStorage, processedFiles);
            results.push(result);
        }

        // Step 3: 检查未匹配的文件（可能是新增的书籍）
        const unmatchedFiles: string[] = [];
        for (const filePath of filesInStorage.keys()) {
            if (!processedFiles.has(filePath)) {
                unmatchedFiles.push(filePath);
            }
        }

        const summary = {
            total: library.length,
            matched: results.filter(r => r.status === 'matched').length,
            moved: results.filter(r => r.status === 'moved').length,
            missing: results.filter(r => r.status === 'missing').length,
            duplicated: results.filter(r => r.status === 'duplicated').length,
            unmatched: unmatchedFiles.length,
        };

        console.log('[Reconcile] Summary:', summary);

        return NextResponse.json({
            success: true,
            summary,
            results,
            unmatchedFiles,
        });
    } catch (error: any) {
        console.error('[Reconcile] Error:', error?.message);
        return NextResponse.json(
            { error: error?.message || 'Reconciliation failed' },
            { status: 500 }
        );
    }
}

/**
 * 扫描所有书籍文件，返回 Map<relativePath, absolutePath>
 */
async function scanAllBooks(baseDir: string): Promise<Map<string, string>> {
    const books = new Map<string, string>();

    async function scanDir(dir: string) {
        try {
            const entries = await fs.readdir(dir, { withFileTypes: true });

            for (const entry of entries) {
                const fullPath = path.join(dir, entry.name);

                // 跳过元数据目录
                if (entry.name === METADATA_DIR) continue;

                if (entry.isDirectory()) {
                    await scanDir(fullPath);
                } else if (entry.isFile()) {
                    const ext = path.extname(entry.name).toLowerCase();
                    if (SUPPORTED_EXTS.includes(ext)) {
                        const relativePath = path.relative(baseDir, fullPath);
                        books.set(relativePath, fullPath);
                    }
                }
            }
        } catch (error) {
            console.error('[Reconcile] Error scanning directory:', dir, error);
        }
    }

    await scanDir(baseDir);
    return books;
}

/**
 * 校准单本书籍
 */
async function reconcileBook(
    book: LibraryBook,
    filesInStorage: Map<string, string>,
    processedFiles: Set<string>
): Promise<ReconcileResult> {
    const { hash, relativePath, absolutePath, title } = book;

    // Case 1: 书籍有 relativePath，检查是否在文件系统中
    if (relativePath) {
        const absolutePathInStorage = filesInStorage.get(relativePath);

        if (absolutePathInStorage) {
            // 文件在预期位置
            processedFiles.add(relativePath);
            return {
                hash,
                status: 'matched',
                oldRelativePath: relativePath,
                newRelativePath: relativePath,
                absolutePath: absolutePathInStorage,
                message: 'Book file found at expected location',
            };
        } else {
            // 文件不在预期位置，尝试根据文件名查找
            const fileName = path.basename(relativePath);
            const matchedPath = findFileByName(fileName, filesInStorage);

            if (matchedPath) {
                // 文件被移动了
                const [newRelativePath, newAbsolutePath] = matchedPath;
                const suggestedGroupName = inferGroupFromPath(newRelativePath);
                processedFiles.add(newRelativePath);

                return {
                    hash,
                    status: 'moved',
                    oldRelativePath: relativePath,
                    newRelativePath,
                    absolutePath: newAbsolutePath,
                    suggestedGroupName,
                    message: `Book file moved from ${relativePath} to ${newRelativePath}`,
                };
            } else {
                // 文件丢失
                return {
                    hash,
                    status: 'missing',
                    oldRelativePath: relativePath,
                    message: `Book file not found: ${relativePath}`,
                };
            }
        }
    }

    // Case 2: 书籍有 absolutePath，尝试匹配
    if (absolutePath) {
        for (const [relPath, absPath] of filesInStorage.entries()) {
            if (absPath === absolutePath) {
                processedFiles.add(relPath);
                return {
                    hash,
                    status: 'matched',
                    oldRelativePath: relativePath,
                    newRelativePath: relPath,
                    absolutePath: absPath,
                    message: 'Book file found via absolutePath',
                };
            }
        }
    }

    // Case 3: 尝试根据标题匹配
    const fileName = `${title}.epub`; // 简化处理，实际可能需要更复杂的匹配逻辑
    const matchedPath = findFileByName(fileName, filesInStorage);

    if (matchedPath) {
        const [newRelativePath, newAbsolutePath] = matchedPath;
        const suggestedGroupName = inferGroupFromPath(newRelativePath);
        processedFiles.add(newRelativePath);

        return {
            hash,
            status: 'moved',
            oldRelativePath: relativePath,
            newRelativePath,
            absolutePath: newAbsolutePath,
            suggestedGroupName,
            message: `Book file found by title: ${newRelativePath}`,
        };
    }

    // 文件丢失
    return {
        hash,
        status: 'missing',
        oldRelativePath: relativePath,
        message: 'Book file not found in storage',
    };
}

/**
 * 根据文件名查找文件
 */
function findFileByName(
    fileName: string,
    filesInStorage: Map<string, string>
): [string, string] | null {
    for (const [relPath, absPath] of filesInStorage.entries()) {
        if (path.basename(relPath) === fileName) {
            return [relPath, absPath];
        }
    }
    return null;
}

/**
 * 从路径推断分组名称
 * 例如：fiction/scifi/book.epub -> fiction/scifi
 */
function inferGroupFromPath(relativePath: string): string {
    const dir = path.dirname(relativePath);
    return dir === '.' ? BOOK_UNGROUPED_NAME : dir.replace(/\\/g, '/');
}
