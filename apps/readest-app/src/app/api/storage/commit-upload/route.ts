import { NextRequest, NextResponse } from 'next/server';
import {
    ensureRoots,
    isLocalStorageEnabled,
    resolveLocalPath,
    ensureParentDir,
    TEMP_ROOT,
} from '../_lib/localFs';
import path from 'node:path';
import { stat, rename, copyFile, unlink } from 'node:fs/promises';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const maxDuration = 300;

/**
 * POST /api/storage/commit-upload?uploadId=...&filePath=...&expectedSize=...&overwrite=0|1
 * Moves temp file to final destination after verifying size.
 */
export async function POST(req: NextRequest) {
    if (!isLocalStorageEnabled()) {
        return NextResponse.json({ error: 'Local storage disabled' }, { status: 501 });
    }

    await ensureRoots();

    const { searchParams } = new URL(req.url);
    const uploadId = searchParams.get('uploadId');
    const filePath = searchParams.get('filePath');
    const expectedSize = searchParams.get('expectedSize');
    const overwrite = searchParams.get('overwrite') === '1';

    if (!uploadId || !filePath) {
        return NextResponse.json({ error: 'uploadId and filePath are required' }, { status: 400 });
    }

    const uploadsDir = path.join(TEMP_ROOT, 'uploads');
    const tempFilePath = path.join(uploadsDir, `${uploadId}.part`);

    try {
        const tempStat = await stat(tempFilePath);
        const tempSize = tempStat.size;
        if (expectedSize) {
            const expected = Number(expectedSize);
            if (Number.isFinite(expected) && expected > 0 && expected !== tempSize) {
                return NextResponse.json(
                    { error: `Size mismatch: expected ${expected}, got ${tempSize}` },
                    { status: 400 },
                );
            }
        }

        const { fullPath } = resolveLocalPath(filePath, false);
        await ensureParentDir(fullPath);

        // Prefer rename; if cross-device, fallback to copy
        try {
            if (!overwrite) {
                try {
                    const existing = await stat(fullPath);
                    if (existing && existing.size > 0) {
                        return NextResponse.json({ error: 'File exists' }, { status: 409 });
                    }
                } catch { }
            }
            await rename(tempFilePath, fullPath);
        } catch (e) {
            await copyFile(tempFilePath, fullPath);
            await unlink(tempFilePath);
        }

        return NextResponse.json({ ok: true, size: tempSize, filePath });
    } catch (error: any) {
        console.error('[CommitUpload] Error:', error?.message);
        return NextResponse.json({ error: error?.message || 'Failed to commit upload' }, { status: 500 });
    }
}
