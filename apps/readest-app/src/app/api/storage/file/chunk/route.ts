/**
 * 文件分块下载（支持 HTTP Range）
 * 位置：/api/storage/file/chunk
 */
import { NextRequest, NextResponse } from 'next/server';
import { stat } from 'node:fs/promises';
import { createReadStream } from 'node:fs';
import { Readable } from 'node:stream';
import {
    ensureRoots,
    isLocalStorageEnabled,
    resolveLocalPath,
} from '../../_lib/localFs';

// 本路由需要 Node 运行时以使用文件流
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const maxDuration = 300;

/**
 * 将 Node ReadableStream 转为 Web ReadableStream
 */
const toWebStream = (nodeStream: NodeJS.ReadableStream) => {
    if (typeof (Readable as any).toWeb === 'function') {
        return (Readable as any).toWeb(nodeStream) as ReadableStream;
    }
    return new ReadableStream({
        start(controller) {
            nodeStream.on('data', (chunk) => controller.enqueue(new Uint8Array(chunk)));
            nodeStream.on('end', () => controller.close());
            nodeStream.on('error', (err) => controller.error(err));
        },
        cancel() {
            if (typeof (nodeStream as any).destroy === 'function') {
                (nodeStream as any).destroy();
            }
        },
    });
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
        const stats = await stat(fullPath);
        const size = stats.size;

        const rangeHeader = req.headers.get('range');
        if (!rangeHeader) {
            const stream = createReadStream(fullPath);
            return new NextResponse(toWebStream(stream), {
                status: 200,
                headers: {
                    'Content-Type': 'application/octet-stream',
                    'Content-Length': size.toString(),
                    'Accept-Ranges': 'bytes',
                    'Content-Disposition': `attachment; filename*=UTF-8''${encodeURIComponent(relPath.split('/').pop() || 'file')}`,
                    'Cache-Control': 'no-cache, no-store, must-revalidate',
                    Pragma: 'no-cache',
                    Expires: '0',
                },
            });
        }

        const match = rangeHeader.match(/bytes=(\d+)-(\d*)/);
        if (!match || !match[1]) {
            return NextResponse.json({ error: 'Invalid Range header' }, { status: 400 });
        }

        const start = parseInt(match[1], 10);
        let end = match[2] ? parseInt(match[2], 10) : size - 1;

        // 限制 end 不超过文件大小
        if (end >= size) {
            end = size - 1;
        }

        if (start > end || start >= size) {
            return NextResponse.json(
                { error: 'Range not satisfiable' },
                { status: 416, headers: { 'Content-Range': `bytes */${size}` } }
            );
        }

        const contentLength = end - start + 1;
        const stream = createReadStream(fullPath, { start, end });

        return new NextResponse(toWebStream(stream), {
            status: 206,
            headers: {
                'Content-Type': 'application/octet-stream',
                'Content-Length': contentLength.toString(),
                'Content-Range': `bytes ${start}-${end}/${size}`,
                'Accept-Ranges': 'bytes',
                'Content-Disposition': `attachment; filename*=UTF-8''${encodeURIComponent(relPath.split('/').pop() || 'file')}`,
                'Cache-Control': 'no-cache, no-store, must-revalidate',
                Pragma: 'no-cache',
                Expires: '0',
            },
        });
    } catch (error: any) {
        console.error('[storage/chunk] Error:', error?.message || error);
        return NextResponse.json({ error: 'File not found' }, { status: 404 });
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
        return new NextResponse(null, {
            status: 200,
            headers: {
                'Content-Length': stats.size.toString(),
                'Accept-Ranges': 'bytes',
            },
        });
    } catch (error) {
        console.error('[storage/chunk] HEAD error:', error);
        return new NextResponse(null, { status: 404 });
    }
}
