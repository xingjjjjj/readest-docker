import { NextRequest, NextResponse } from 'next/server';
import {
    ensureRoots,
    isLocalStorageEnabled,
    TEMP_ROOT,
    ensureParentDir,
} from '../_lib/localFs';
import path from 'node:path';
import { createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import { Readable } from 'node:stream';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const maxDuration = 300;

/**
 * POST /api/storage/upload-chunk?uploadId=...&index=...&total=...
 * Body: chunk bytes
 * - Sequential append by index order; client must send chunks in order.
 */
export async function POST(req: NextRequest) {
    if (!isLocalStorageEnabled()) {
        return NextResponse.json({ error: 'Local storage disabled' }, { status: 501 });
    }

    await ensureRoots();

    const { searchParams } = new URL(req.url);
    const uploadId = searchParams.get('uploadId');
    const index = Number(searchParams.get('index') || '0');
    const total = Number(searchParams.get('total') || '0');

    if (!uploadId || Number.isNaN(index) || Number.isNaN(total)) {
        return NextResponse.json({ error: 'uploadId, index, total are required' }, { status: 400 });
    }

    if (!req.body) {
        return NextResponse.json({ error: 'Request body is empty' }, { status: 400 });
    }

    const uploadsDir = path.join(TEMP_ROOT, 'uploads');
    const tempFilePath = path.join(uploadsDir, `${uploadId}.part`);

    try {
        await ensureParentDir(tempFilePath);
        let written = 0;
        await pipeline(
            Readable.fromWeb(req.body as any).on('data', (chunk: any) => {
                written += Buffer.isBuffer(chunk) ? chunk.length : Buffer.byteLength(chunk);
            }),
            createWriteStream(tempFilePath, { flags: 'a' }),
        );
        return NextResponse.json({ ok: true, uploadId, index, total, size: written });
    } catch (error: any) {
        console.error('[UploadChunk] Error:', error?.message);
        return NextResponse.json({ error: error?.message || 'Failed to write chunk' }, { status: 500 });
    }
}
