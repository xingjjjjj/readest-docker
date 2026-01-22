import { NextRequest, NextResponse } from 'next/server';
import { STORAGE_ROOT, ensureRoots, isLocalStorageEnabled, walkFiles } from '../_lib/localFs';

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

    const allFiles = await walkFiles(STORAGE_ROOT);

    const mapped = allFiles
        .map((file) => {
            const bookHashMatch = file.fileKey.match(/Readest\/Books\/([^/]+)/);
            const bookHash = bookHashMatch ? bookHashMatch[1] : null;
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
