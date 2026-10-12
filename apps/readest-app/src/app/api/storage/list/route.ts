import { NextRequest, NextResponse } from 'next/server';
import fs from 'node:fs/promises';
import path from 'node:path';
import { STORAGE_ROOT, ensureRoots, isLocalStorageEnabled, walkFilesCached } from '../_lib/localFs';

// 2026-10-12 修复：旧 Readest/Books/ 正则在扁平结构下永远不命中，book_hash 恒为 null
// 改为从 library.json 建立 路径→hash 映射，恢复 StorageManager 分组/按书删除能力
async function buildBookIndex(): Promise<Map<string, { hash: string; title: string }>> {
    const index = new Map<string, { hash: string; title: string }>();
    try {
        const libPath = path.join(STORAGE_ROOT, '.readest', 'library.json');
        const library = JSON.parse(await fs.readFile(libPath, 'utf-8')) as Array<{
            hash?: string; title?: string; relativePath?: string; deletedAt?: number | null;
        }>;
        for (const book of library) {
            if (!book.hash || book.deletedAt || !book.relativePath) continue;
            const folder = book.relativePath.replace(/\.[^.]+$/, '');
            const entry = { hash: book.hash, title: book.title || '' };
            index.set(book.relativePath, entry);
            index.set(folder, entry);
        }
    } catch {
        // library.json 不可读时退化为旧行为（book_hash 为 null）
    }
    return index;
}

const parseNumber = (value: string | null, fallback: number) => {
    const num = Number(value);
    return Number.isFinite(num) && num > 0 ? num : fallback;
};

export async function GET(req: NextRequest) {
    if (!isLocalStorageEnabled()) {
        return NextResponse.json({ error: 'Local storage disabled' }, { status: 501 });
    }

    await ensureRoots();

    const { searchParams } = new URL(req.url);
    const page = parseNumber(searchParams.get('page'), 1);
    const pageSize = parseNumber(searchParams.get('pageSize'), 50);
    const sortBy = (searchParams.get('sortBy') || 'created_at') as
        | 'created_at'
        | 'updated_at'
        | 'file_size'
        | 'file_key';
    const sortOrder = (searchParams.get('sortOrder') || 'desc') as 'asc' | 'desc';
    const bookHashFilter = searchParams.get('bookHash');
    const search = searchParams.get('search');

    const bookIndex = await buildBookIndex();
    const allFiles = await walkFilesCached(STORAGE_ROOT);

    const mapped = allFiles
        .map((file) => {
            const direct = bookIndex.get(file.fileKey);
            const slashIdx = file.fileKey.lastIndexOf('/');
            const parent = slashIdx > 0 ? file.fileKey.slice(0, slashIdx) : '';
            const parentHit = direct ? undefined : bookIndex.get(parent);
            const bookHash = direct?.hash ?? parentHit?.hash ?? null;
            return {
                file_key: file.fileKey,
                file_size: file.size,
                book_hash: bookHash,
                created_at: new Date(file.mtime).toISOString(),
                updated_at: new Date(file.mtime).toISOString(),
            };
        })
        .filter((file) => !bookHashFilter || file.book_hash === bookHashFilter)
        .filter((file) => !search || file.file_key.toLowerCase().includes(search.toLowerCase()));

    const sorted = mapped.sort((a, b) => {
        switch (sortBy) {
            case 'file_size':
                return (a.file_size - b.file_size) * (sortOrder === 'asc' ? 1 : -1);
            case 'file_key':
                return a.file_key.localeCompare(b.file_key) * (sortOrder === 'asc' ? 1 : -1);
            case 'updated_at':
            case 'created_at':
            default:
                return (
                    (new Date(a.updated_at).getTime() - new Date(b.updated_at).getTime()) *
                    (sortOrder === 'asc' ? 1 : -1)
                );
        }
    });

    const total = sorted.length;
    const totalPages = Math.max(1, Math.ceil(total / pageSize));
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    const files = sorted.slice(start, end);

    return NextResponse.json({ files, total, page, pageSize, totalPages });
}
