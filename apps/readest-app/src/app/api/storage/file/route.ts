import { NextRequest, NextResponse } from 'next/server';
import {
    ensureRoots,
    isLocalStorageEnabled,
    resolveLocalPath,
    readFileBuffer,
    writeFileBuffer,
    ensureParentDir,
} from '../_lib/localFs';
import { createReadStream, createWriteStream, openSync } from 'fs';
import { stat, open } from 'fs/promises';
import { createHash } from 'crypto';
import { Readable, Transform } from 'node:stream';
import { pipeline } from 'node:stream/promises';

// Force Node.js runtime to allow streaming writes and larger payloads
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const maxDuration = 300;

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

/**
 * Parse HTTP Range header
 * Examples: "bytes=0-1023", "bytes=1024-", "bytes=0-1023,2048-3071"
 */
function parseRangeHeader(rangeHeader: string, fileSize: number): Array<{ start: number; end: number }> | null {
    if (!rangeHeader.startsWith('bytes=')) return null;

    const ranges = rangeHeader.slice(6).split(',').map(r => r.trim());
    const parsedRanges: Array<{ start: number; end: number }> = [];

    for (const range of ranges) {
        const [startStr, endStr] = range.split('-');
        let start = parseInt(startStr || '0');
        let end = parseInt(endStr || String(fileSize - 1));

        // Handle suffix-byte-range like "bytes=-1024" (last 1024 bytes)
        if (startStr === '' && endStr !== '') {
            start = Math.max(0, fileSize - end);
            end = fileSize - 1;
        }
        // Handle open-ended range like "bytes=1024-"
        else if (endStr === '') {
            end = fileSize - 1;
        }

        // Validate range
        if (start >= 0 && start <= end && end < fileSize) {
            parsedRanges.push({ start, end });
        }
    }

    return parsedRanges.length > 0 ? parsedRanges : null;
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

        const filename = relPath.split('/').pop() || 'file';
        const encodedFilename = encodeURIComponent(filename);

        // 生成 ETag 用于缓存验证
        const etag = `"${stats.size}-${stats.mtimeMs}"`;

        // 根据文件类型决定缓存策略
        // 配置文件（.json）：较短缓存 + must-revalidate（每次都验证 ETag）
        // 静态资源（图片、书籍）：中期缓存 + immutable
        const isConfigFile = relPath.endsWith('.json') || relPath.includes('/.readest/');
        const cacheControl = isConfigFile
            ? 'public, max-age=60, must-revalidate'  // 配置文件：1分钟缓存，必须重新验证
            : 'public, max-age=604800, immutable';   // 静态资源：7天缓存，不可变 (7*24*60*60=604800)

        // 检查 If-None-Match 头，如果 ETag 匹配则返回 304
        const ifNoneMatch = req.headers.get('if-none-match');
        if (ifNoneMatch === etag) {
            console.log('[Storage File GET] ETag match, returning 304 Not Modified');
            return new NextResponse(null, {
                status: 304,
                headers: {
                    'ETag': etag,
                    'Cache-Control': cacheControl,
                },
            });
        }

        // Check for Range header (HTTP 206 Partial Content)
        const rangeHeader = req.headers.get('range');
        const ranges = rangeHeader ? parseRangeHeader(rangeHeader, stats.size) : null;

        if (ranges && ranges.length === 1 && ranges[0]) {
            // Single range request - stream 206 Partial Content
            const { start, end } = ranges[0];
            const contentLength = end - start + 1;
            const contentRangeMB = (contentLength / (1024 * 1024)).toFixed(2);
            console.log(`[Storage File GET] Range request: bytes ${start}-${end} (${contentRangeMB} MB out of ${fileSizeMB} MB total)`);

            const nodeStream = createReadStream(fullPath, { start, end });
            const webStream = new ReadableStream({
                start(controller) {
                    nodeStream.on('data', (chunk) => {
                        const uint8Array = Buffer.isBuffer(chunk)
                            ? new Uint8Array(chunk)
                            : new TextEncoder().encode(String(chunk));
                        controller.enqueue(uint8Array);
                    });
                    nodeStream.on('end', () => controller.close());
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
                status: 206,
                headers: {
                    'Content-Type': 'application/octet-stream',
                    'Content-Disposition': `attachment; filename*=UTF-8''${encodedFilename}`,
                    'Content-Length': contentLength.toString(),
                    'Content-Range': `bytes ${start}-${end}/${stats.size}`,
                    'Accept-Ranges': 'bytes',
                    'ETag': etag,
                    'Cache-Control': cacheControl,
                },
            });
        }

        // Full file request or unsupported multi-range request
        const USE_STREAMING_THRESHOLD = 50 * 1024 * 1024; // 50MB

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
                    'Accept-Ranges': 'bytes',
                    'ETag': etag,
                    'Cache-Control': cacheControl,
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
                    'Accept-Ranges': 'bytes',
                    'ETag': etag,
                    'Cache-Control': cacheControl,
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

        const contentLengthHeader = req.headers.get('content-length');
        const contentLength = contentLengthHeader ? Number(contentLengthHeader) : undefined;
        const MAX_IN_MEMORY = 20 * 1024 * 1024; // 20MB threshold for buffering

        // Stream to disk when payload is large or length unknown
        if (!req.body) {
            return NextResponse.json({ error: 'Request body is empty' }, { status: 400 });
        }

        if (contentLength !== undefined && contentLength === 0) {
            return NextResponse.json({ error: 'Content-Length is 0' }, { status: 400 });
        }

        let writtenBytes = 0;

        if (contentLength === undefined || contentLength > MAX_IN_MEMORY) {
            console.log('[Storage File PUT] 18a. Streaming upload. Content-Length:', contentLengthHeader);
            await ensureParentDir(fullPath);

            // Count bytes while streaming to detect truncated uploads
            const counter = new Transform({
                transform(chunk, _enc, cb) {
                    writtenBytes += chunk.length;
                    cb(null, chunk);
                },
            });

            await pipeline(Readable.fromWeb(req.body as any), counter, createWriteStream(fullPath));
            console.log('[Storage File PUT] 19a. ✓ Streamed to:', fullPath, 'size:', writtenBytes);
        } else {
            const buffer = Buffer.from(await req.arrayBuffer());
            writtenBytes = buffer.length;
            console.log('[Storage File PUT] 18b. Buffered upload size:', writtenBytes, 'bytes');
            await writeFileBuffer(fullPath, buffer);
            console.log('[Storage File PUT] 19b. ✓ Buffered write to:', fullPath);
        }

        if (contentLength !== undefined && writtenBytes !== contentLength) {
            console.error('[Storage File PUT] ✗ Size mismatch! expected:', contentLength, 'written:', writtenBytes);
            await writeFileBuffer(fullPath, Buffer.alloc(0));
            return NextResponse.json({ error: 'Size mismatch while writing file' }, { status: 500 });
        }

        if (writtenBytes === 0) {
            console.error('[Storage File PUT] ✗ Zero-byte upload detected for', fullPath);
            await writeFileBuffer(fullPath, Buffer.alloc(0));
            return NextResponse.json({ error: 'Zero-byte upload detected' }, { status: 400 });
        }

        return NextResponse.json({ ok: true, size: writtenBytes });
    } catch (error: any) {
        console.error('[Storage File PUT] Error:', error?.message);
        return NextResponse.json({ error: error?.message || 'Failed to write file' }, { status: 500 });
    }
}
