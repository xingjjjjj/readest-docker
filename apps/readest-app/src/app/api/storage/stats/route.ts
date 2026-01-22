import { NextResponse } from 'next/server';
import { STORAGE_ROOT, ensureRoots, isLocalStorageEnabled, walkFiles } from '../_lib/localFs';

export async function GET() {
    if (!isLocalStorageEnabled()) {
        return NextResponse.json({ error: 'Local storage disabled' }, { status: 501 });
    }

    await ensureRoots();

    const files = await walkFiles(STORAGE_ROOT);
    const totalSize = files.reduce((sum, file) => sum + file.size, 0);
    const quotaEnv = process.env.LOCAL_STORAGE_QUOTA_BYTES || process.env.NEXT_PUBLIC_STORAGE_FIXED_QUOTA;
    const quota = quotaEnv ? Number(quotaEnv) : totalSize || 1;

    const byBook = new Map<string, { fileCount: number; totalSize: number }>();
    files.forEach((file) => {
        const match = file.fileKey.match(/Readest\/Books\/([^/]+)/);
        const bookHash = match ? match[1] : null;
        const key = bookHash || 'unknown';
        const current = byBook.get(key) || { fileCount: 0, totalSize: 0 };
        byBook.set(key, {
            fileCount: current.fileCount + 1,
            totalSize: current.totalSize + file.size,
        });
    });

    const byBookHash = Array.from(byBook.entries()).map(([bookHash, info]) => ({
        bookHash: bookHash === 'unknown' ? null : bookHash,
        fileCount: info.fileCount,
        totalSize: info.totalSize,
    }));

    const usage = totalSize;
    const usagePercentage = quota > 0 ? Math.min(100, (usage / quota) * 100) : 0;

    return NextResponse.json({
        totalFiles: files.length,
        totalSize,
        usage,
        quota,
        usagePercentage,
        byBookHash,
    });
}
