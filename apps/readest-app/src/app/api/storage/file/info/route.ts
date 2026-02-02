/**
 * 文件元数据查询
 * 位置：/api/storage/file/info
 */
import { NextRequest, NextResponse } from 'next/server';
import { stat } from 'node:fs/promises';
import path from 'node:path';
import {
    ensureRoots,
    isLocalStorageEnabled,
    resolveLocalPath,
} from '../../_lib/localFs';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const maxDuration = 300;

const EXT_FORMAT: Record<string, string> = {
    epub: 'EPUB',
    pdf: 'PDF',
    mobi: 'MOBI',
    azw: 'AZW',
    azw3: 'AZW3',
    cbz: 'CBZ',
    cbr: 'CBR',
    fb2: 'FB2',
    txt: 'TXT',
};

const toFormat = (filePath: string) => {
    const ext = path.extname(filePath).replace('.', '').toLowerCase();
    return EXT_FORMAT[ext] || ext.toUpperCase() || 'UNKNOWN';
};

export async function GET(req: NextRequest) {
    if (!isLocalStorageEnabled()) {
        return NextResponse.json({ error: 'Local storage disabled' }, { status: 501 });
    }

    await ensureRoots();

    const { searchParams } = new URL(req.url);
    const filePath = searchParams.get('filePath');
    const useTemp = searchParams.get('temp') === '1';

    if (!filePath) {
        return NextResponse.json({ error: 'filePath is required' }, { status: 400 });
    }

    try {
        const { fullPath, relPath } = resolveLocalPath(filePath, useTemp);
        console.log(`[storage/info] Checking file:`, {
            filePath,
            fullPath,
            relPath,
            useTemp,
        });

        const stats = await stat(fullPath);
        const format = toFormat(relPath);
        const etag = `"${stats.size}-${stats.mtimeMs}"`;

        return NextResponse.json(
            {
                size: stats.size,
                mtime: stats.mtimeMs,
                format,
                etag,
                supportsRange: true,
            },
            {
                headers: {
                    'Cache-Control': 'public, max-age=3600',
                    ETag: etag,
                },
            },
        );
    } catch (error: any) {
        console.error('[storage/info] Error:', {
            filePath,
            useTemp,
            error: error?.message || error,
            code: error?.code,
        });
        return NextResponse.json(
            {
                error: 'File not found',
                details: {
                    filePath,
                    message: error?.message,
                    code: error?.code,
                }
            },
            { status: 404 }
        );
    }
}

export async function HEAD(req: NextRequest) {
    if (!isLocalStorageEnabled()) {
        return new NextResponse(null, { status: 501 });
    }

    await ensureRoots();

    const { searchParams } = new URL(req.url);
    const filePath = searchParams.get('filePath');
    const useTemp = searchParams.get('temp') === '1';

    if (!filePath) {
        return new NextResponse(null, { status: 400 });
    }

    try {
        const { fullPath } = resolveLocalPath(filePath, useTemp);
        const stats = await stat(fullPath);
        const etag = `"${stats.size}-${stats.mtimeMs}"`;

        return new NextResponse(null, {
            status: 200,
            headers: {
                'Cache-Control': 'public, max-age=3600',
                ETag: etag,
                'Content-Length': stats.size.toString(),
                'Accept-Ranges': 'bytes',
            },
        });
    } catch (error) {
        console.error('[storage/info] HEAD error:', error);
        return new NextResponse(null, { status: 404 });
    }
}
