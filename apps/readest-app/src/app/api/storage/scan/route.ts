import { NextRequest, NextResponse } from 'next/server';
import fs from 'node:fs/promises';
import path from 'node:path';
import { STORAGE_ROOT, ensureRoots, isLocalStorageEnabled } from '../_lib/localFs';

const SUPPORTED_EXTS = ['.epub', '.mobi', '.azw', '.azw3', '.fb2', '.cbz', '.pdf', '.txt'];
const METADATA_DIR = '.readest';

interface ScannedBook {
    filePath: string;
    relativePath: string;
    fileName: string;
    directory: string;
    size: number;
    mtime: number;
    ext: string;
}

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
                        relativePath,
                        fileName: entry.name,
                        directory: directory === '.' ? '' : directory,
                        size: stat.size,
                        mtime: stat.mtimeMs,
                        ext: ext.slice(1), // Remove leading dot
                    });
                }
            }
        }
    } catch (error) {
        console.error('Error scanning directory:', dir, error);
    }

    return books;
}

export async function POST(req: NextRequest) {
    if (!isLocalStorageEnabled()) {
        return NextResponse.json({ error: 'Local storage disabled' }, { status: 501 });
    }

    await ensureRoots();

    try {
        console.log('[Storage Scan] Starting scan of:', STORAGE_ROOT);
        const books = await scanDirectory(STORAGE_ROOT, STORAGE_ROOT);
        console.log('[Storage Scan] Found', books.length, 'books');

        return NextResponse.json({
            success: true,
            count: books.length,
            books,
        });
    } catch (error: any) {
        console.error('[Storage Scan] Error:', error?.message);
        return NextResponse.json(
            { error: error?.message || 'Scan failed' },
            { status: 500 }
        );
    }
}
