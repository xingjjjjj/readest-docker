import { NextRequest, NextResponse } from 'next/server';
import {
    ensureRoots,
    isLocalStorageEnabled,
    resolveLocalPath,
    readFileBuffer,
    writeFileBuffer,
} from '../_lib/localFs';
import { createReadStream } from 'fs';
import { stat } from 'fs/promises';
import { createHash } from 'crypto';

/**
 * Generate ETag from file stats
 */
function generateETag(size: number, mtime: number): string {
    const hash = createHash('md5')
        .update(`${size}-${mtime}`)
        .digest('hex')
        .slice(0, 8);
    return `"${hash}"`;
}

export async function GET(req: NextRequest) {
    if (!isLocalStorageEnabled()) {
        return NextResponse.json({ error: 'Local storage disabled' }, { status: 501 });
    }

    await ensureRoots();

    const { searchParams } = new URL(req.url);
    const filePath = searchParams.get('filePath');
    if (!filePath) {
        return NextResponse.json({ error: 'filePath is required' }, { status: 400 });
    }

    try {
        const { fullPath, relPath } = resolveLocalPath(filePath, searchParams.get('temp') === '1');
        console.log('[Storage File GET] Reading from:', fullPath);

        // 获取文件信息
        const stats = await stat(fullPath);
        const fileSizeMB = stats.size / (1024 * 1024);
        console.log('[Storage File GET] File size:', fileSizeMB.toFixed(2), 'MB');

        // 对于大文件（> 50MB），使用流式传输
        const USE_STREAMING_THRESHOLD = 50 * 1024 * 1024; // 50MB

        const filename = relPath.split('/').pop() || 'file';
        const encodedFilename = encodeURIComponent(filename);

        // 生成 ETag
        const etag = generateETag(stats.size, stats.mtimeMs || 0);
        const ifNoneMatch = req.headers.get('if-none-match');

        // 检查客户端缓存
        if (ifNoneMatch === etag) {
            console.log('[Storage File GET] 304 Not Modified for:', filename);
            return new NextResponse(null, {
                status: 304,
                headers: {
                    'ETag': etag,
                    'Cache-Control': 'public, max-age=86400, immutable',
                },
            });
        }

        if (stats.size > USE_STREAMING_THRESHOLD) {
            console.log('[Storage File GET] Using streaming for large file');

            // 使用 Node.js ReadableStream 转换为 Web ReadableStream
            const nodeStream = createReadStream(fullPath);
            const webStream = new ReadableStream({
                start(controller) {
                    nodeStream.on('data', (chunk) => {
                        const uint8Array = Buffer.isBuffer(chunk)
                            ? new Uint8Array(chunk)
                            : new TextEncoder().encode(String(chunk));
                        controller.enqueue(uint8Array);
                    });
                    nodeStream.on('end', () => {
                        controller.close();
                    });
                    nodeStream.on('error', (error) => {
                        console.error('[Storage File GET] Stream error:', error);
                        controller.error(error);
                    });
                },
                cancel() {
                    nodeStream.destroy();
                }
            });

            return new NextResponse(webStream, {
                status: 200,
                headers: {
                    'Content-Type': 'application/octet-stream',
                    'Content-Disposition': `attachment; filename*=UTF-8''${encodedFilename}`,
                    'Content-Length': stats.size.toString(),
                    'ETag': etag,
                    'Cache-Control': 'public, max-age=86400, immutable',
                },
            });
        } else {
            // 小文件继续使用原来的方式
            const buffer = await readFileBuffer(fullPath);
            return new NextResponse(buffer, {
                status: 200,
                headers: {
                    'Content-Type': 'application/octet-stream',
                    'Content-Disposition': `attachment; filename*=UTF-8''${encodedFilename}`,
                    'Content-Length': buffer.length.toString(),
                    'ETag': etag,
                    'Cache-Control': 'public, max-age=86400, immutable',
                },
            });
        }
    } catch (error: any) {
        console.error('[Storage File GET] Error:', error?.message);
        return NextResponse.json({ error: error?.message || 'File not found' }, { status: 404 });
    }
}

export async function PUT(req: NextRequest) {
    if (!isLocalStorageEnabled()) {
        return NextResponse.json({ error: 'Local storage disabled' }, { status: 501 });
    }

    await ensureRoots();

    const { searchParams } = new URL(req.url);
    const filePath = searchParams.get('filePath');
    if (!filePath) {
        return NextResponse.json({ error: 'filePath is required' }, { status: 400 });
    }

    try {
        const { fullPath, relPath } = resolveLocalPath(filePath, searchParams.get('temp') === '1');
        console.log('[Storage File PUT] 15. Input filePath:', filePath);
        console.log('[Storage File PUT] 16. Resolved fullPath:', fullPath);
        console.log('[Storage File PUT] 17. Relative path:', relPath);
        const buffer = Buffer.from(await req.arrayBuffer());
        console.log('[Storage File PUT] 18. File size:', buffer.length, 'bytes');
        await writeFileBuffer(fullPath, buffer);
        console.log('[Storage File PUT] 19. ✓ File written successfully to:', fullPath);
        return NextResponse.json({ ok: true });
    } catch (error: any) {
        console.error('[Storage File PUT] Error:', error?.message);
        return NextResponse.json({ error: error?.message || 'Failed to write file' }, { status: 500 });
    }
}
