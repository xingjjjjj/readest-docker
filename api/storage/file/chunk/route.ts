/**
 * 文件分块下载API端点
 * 支持HTTP Range请求，用于实现分块加载
 * 
 * 路径: /app/api/storage/file/chunk/route.ts
 */

import { NextRequest, NextResponse } from 'next/server';
import { readFileStream, getFileSize } from '@/lib/storage';

/**
 * GET /api/storage/file/chunk
 * 获取文件的指定字节范围（支持HTTP 206 Partial Content）
 * 
 * 查询参数:
 *   - filePath: 相对于存储根目录的文件路径
 *   
 * 请求头:
 *   - Range: bytes=start-end (可选，HTTP Range格式)
 * 
 * 响应:
 *   - 200: 完整文件
 *   - 206: 部分文件内容（当使用Range请求时）
 *   - 400: 无效的Range格式
 *   - 404: 文件不存在
 */
export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const filePath = searchParams.get('filePath');

        if (!filePath) {
            return NextResponse.json(
                { error: 'Missing filePath parameter' },
                { status: 400 }
            );
        }

        // 安全检查：防止路径遍历
        if (filePath.includes('..') || filePath.startsWith('/')) {
            return NextResponse.json(
                { error: 'Invalid file path' },
                { status: 400 }
            );
        }

        // 获取文件大小
        const fileSize = await getFileSize(filePath);
        if (fileSize === null) {
            return NextResponse.json(
                { error: 'File not found' },
                { status: 404 }
            );
        }

        // 解析Range头
        const rangeHeader = req.headers.get('range');
        if (!rangeHeader) {
            // 没有Range请求，返回完整文件
            const stream = await readFileStream(filePath);
            return new NextResponse(stream, {
                headers: {
                    'Content-Type': 'application/octet-stream',
                    'Content-Length': fileSize.toString(),
                    'Accept-Ranges': 'bytes',
                    'Cache-Control': 'public, max-age=31536000, immutable',
                },
            });
        }

        // 解析 Range 头格式: "bytes=start-end"
        const rangeMatch = rangeHeader.match(/bytes=(\d+)-(\d*)/);
        if (!rangeMatch) {
            return NextResponse.json(
                { error: 'Invalid Range header format' },
                { status: 400 }
            );
        }

        const start = parseInt(rangeMatch[1], 10);
        const end = rangeMatch[2] ? parseInt(rangeMatch[2], 10) : fileSize - 1;

        // 验证范围有效性
        if (start > end || start >= fileSize || end >= fileSize) {
            return NextResponse.json(
                { error: 'Range not satisfiable' },
                { status: 416, headers: { 'Content-Range': `bytes */${fileSize}` } }
            );
        }

        const contentLength = end - start + 1;

        // 返回部分内容（HTTP 206）
        const stream = await readFileStream(filePath, start, end);
        return new NextResponse(stream, {
            status: 206,
            headers: {
                'Content-Type': 'application/octet-stream',
                'Content-Length': contentLength.toString(),
                'Content-Range': `bytes ${start}-${end}/${fileSize}`,
                'Accept-Ranges': 'bytes',
                'Cache-Control': 'public, max-age=31536000, immutable',
            },
        });
    } catch (error) {
        console.error('[API] Error in file chunk endpoint:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}

/**
 * HEAD /api/storage/file/chunk
 * 获取文件元数据（不返回文件内容）
 * 用于确定是否支持Range请求
 */
export async function HEAD(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const filePath = searchParams.get('filePath');

        if (!filePath) {
            return new NextResponse(null, { status: 400 });
        }

        if (filePath.includes('..') || filePath.startsWith('/')) {
            return new NextResponse(null, { status: 400 });
        }

        const fileSize = await getFileSize(filePath);
        if (fileSize === null) {
            return new NextResponse(null, { status: 404 });
        }

        return new NextResponse(null, {
            status: 200,
            headers: {
                'Content-Length': fileSize.toString(),
                'Accept-Ranges': 'bytes',
                'Content-Type': 'application/octet-stream',
                'Cache-Control': 'public, max-age=31536000, immutable',
            },
        });
    } catch (error) {
        console.error('[API] Error in file chunk HEAD endpoint:', error);
        return new NextResponse(null, { status: 500 });
    }
}
