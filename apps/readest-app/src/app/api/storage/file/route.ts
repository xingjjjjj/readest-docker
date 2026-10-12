import { NextRequest, NextResponse } from 'next/server';
import {
    ensureRoots,
    isLocalStorageEnabled,
    resolveLocalPath,
    readFileBuffer,
    writeFileBuffer,
    ensureParentDir,
    invalidateWalkFiles,
} from '../_lib/localFs';
import { createReadStream, createWriteStream } from 'fs';
import { stat } from 'fs/promises';
import { Readable, Transform } from 'node:stream';
import { pipeline } from 'node:stream/promises';

import path from 'node:path';

// 2026-10-12 MIME 修正：原先一律 octet-stream + attachment，浏览器无法内联渲染封面/字体
const MIME_MAP: Record<string, string> = {
    '.epub': 'application/epub+zip',
    '.mobi': 'application/x-mobipocket-ebook',
    '.azw': 'application/vnd.amazon.ebook',
    '.azw3': 'application/vnd.amazon.ebook',
    '.fb2': 'application/x-fictionbook+xml',
    '.cbz': 'application/vnd.comicbook+zip',
    '.pdf': 'application/pdf',
    '.txt': 'text/plain; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.js': 'text/javascript; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.html': 'text/html; charset=utf-8',
    '.xml': 'application/xml; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.webp': 'image/webp',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.avif': 'image/avif',
    '.ico': 'image/x-icon',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.ttf': 'font/ttf',
    '.otf': 'font/otf',
    '.mp3': 'audio/mpeg',
    '.m4a': 'audio/mp4',
    '.ogg': 'audio/ogg',
    '.mp4': 'video/mp4',
    '.webm': 'video/webm',
    '.wasm': 'application/wasm',
};
const BOOK_FILE_EXTS = new Set(['.epub', '.mobi', '.azw', '.azw3', '.fb2', '.cbz', '.pdf']);

const getContentTypeFor = (relPath: string): string => {
    const dot = relPath.lastIndexOf('.');
    const ext = dot >= 0 ? relPath.slice(dot).toLowerCase() : '';
    return MIME_MAP[ext] || 'application/octet-stream';
};

const getContentDispositionFor = (relPath: string, encodedFilename: string): string => {
    const dot = relPath.lastIndexOf('.');
    const ext = dot >= 0 ? relPath.slice(dot).toLowerCase() : '';
    return BOOK_FILE_EXTS.has(ext)
        ? `attachment; filename*=UTF-8''${encodedFilename}`
        : 'inline';
};

// Force Node.js runtime to allow streaming writes and larger payloads
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const maxDuration = 300;

/**
 * P13：简易 LRU 内存缓存——封面等小文件命中后不再读盘。
 * 以 stat 的 size+mtime 为有效性凭据（文件被覆盖/删除自动失效）；容量上限 64MB，超出按插入序淘汰。
 * Range/大文件（流式）不入缓存；PUT 写入后主动失效。
 */
const memoryCache = new Map<string, { buffer: Buffer; size: number; mtime: number }>();
const MAX_CACHE_BYTES = 64 * 1024 * 1024;
let memoryCacheBytes = 0;

function cacheGet(key: string, size: number, mtime: number): Buffer | null {
    const hit = memoryCache.get(key);
    if (!hit || hit.size !== size || hit.mtime !== mtime) return null;
    // LRU touch：重插到尾部
    memoryCache.delete(key);
    memoryCache.set(key, hit);
    return hit.buffer;
}

function cacheSet(key: string, buffer: Buffer, size: number, mtime: number) {
    const old = memoryCache.get(key);
    if (old) {
        memoryCacheBytes -= old.size;
        memoryCache.delete(key);
    }
    memoryCache.set(key, { buffer, size, mtime });
    memoryCacheBytes += size;
    while (memoryCacheBytes > MAX_CACHE_BYTES && memoryCache.size > 1) {
        const oldestKey = memoryCache.keys().next().value as string;
        const oldest = memoryCache.get(oldestKey);
        if (oldest) memoryCacheBytes -= oldest.size;
        memoryCache.delete(oldestKey);
    }
}

function cacheInvalidate(key: string) {
    const hit = memoryCache.get(key);
    if (hit) {
        memoryCacheBytes -= hit.size;
        memoryCache.delete(key);
    }
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

        // 获取文件信息
        const stats = await stat(fullPath);

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

            // P13：Readable.toWeb 一行替代原手工封装（原实现含永不触发的 TextEncoder 死分支）
            const webStream = Readable.toWeb(
                createReadStream(fullPath, { start, end })
            ) as unknown as ReadableStream;

            return new NextResponse(webStream, {
                status: 206,
                headers: {
                    'Content-Type': getContentTypeFor(relPath),
                    'Content-Disposition': getContentDispositionFor(relPath, encodedFilename),
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
            // P13：Readable.toWeb 替代手工封装
            const webStream = Readable.toWeb(
                createReadStream(fullPath)
            ) as unknown as ReadableStream;

            return new NextResponse(webStream, {
                status: 200,
                headers: {
                    'Content-Type': getContentTypeFor(relPath),
                    'Content-Disposition': getContentDispositionFor(relPath, encodedFilename),
                    'Content-Length': stats.size.toString(),
                    'Accept-Ranges': 'bytes',
                    'ETag': etag,
                    'Cache-Control': cacheControl,
                },
            });
        } else {
            // 小文件：优先内存缓存（P13），未命中才读盘
            const cached = cacheGet(fullPath, stats.size, stats.mtimeMs);
            const buffer = cached ?? (await readFileBuffer(fullPath));
            if (!cached) cacheSet(fullPath, buffer, stats.size, stats.mtimeMs);
            return new NextResponse(buffer, {
                status: 200,
                headers: {
                    'Content-Type': getContentTypeFor(relPath),
                    'Content-Disposition': getContentDispositionFor(relPath, encodedFilename),
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
            await ensureParentDir(fullPath);

            // Count bytes while streaming to detect truncated uploads
            const counter = new Transform({
                transform(chunk, _enc, cb) {
                    writtenBytes += chunk.length;
                    cb(null, chunk);
                },
            });

            await pipeline(Readable.fromWeb(req.body as any), counter, createWriteStream(fullPath));
        } else {
            const buffer = Buffer.from(await req.arrayBuffer());
            writtenBytes = buffer.length;
            await writeFileBuffer(fullPath, buffer);
        }

        // P13：任何写入（含后续校验失败的截断）都使内存缓存失效，避免读到陈旧内容
        cacheInvalidate(fullPath);
        invalidateWalkFiles();

        if (contentLength !== undefined && writtenBytes !== contentLength) {
            console.error('[Storage File PUT] Size mismatch! expected:', contentLength, 'written:', writtenBytes);
            await writeFileBuffer(fullPath, Buffer.alloc(0));
            return NextResponse.json({ error: 'Size mismatch while writing file' }, { status: 500 });
        }

        if (writtenBytes === 0) {
            console.error('[Storage File PUT] Zero-byte upload detected for', fullPath);
            await writeFileBuffer(fullPath, Buffer.alloc(0));
            return NextResponse.json({ error: 'Zero-byte upload detected' }, { status: 400 });
        }

        return NextResponse.json({ ok: true, size: writtenBytes });
    } catch (error: any) {
        console.error('[Storage File PUT] Error:', error?.message);
        return NextResponse.json({ error: error?.message || 'Failed to write file' }, { status: 500 });
    }
}
