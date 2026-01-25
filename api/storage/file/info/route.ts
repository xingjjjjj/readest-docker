/**
 * 文件元数据API端点
 * 用于快速获取文件信息（大小、修改时间、etag等）
 * 
 * 路径: /app/api/storage/file/info/route.ts
 */

import { NextRequest, NextResponse } from 'next/server';
import { getFileStats } from '@/lib/storage';
import * as crypto from 'crypto';

/**
 * GET /api/storage/file/info
 * 获取文件元数据
 * 
 * 查询参数:
 *   - filePath: 相对于存储根目录的文件路径
 * 
 * 响应:
 *   {
 *     size: number          // 文件大小（字节）
 *     mtime: number         // 最后修改时间（时间戳）
 *     format: string        // 文件格式（从扩展名推断）
 *     etag: string          // 文件唯一标识，用于缓存验证
 *     supportsRange: boolean // 是否支持Range请求
 *   }
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

        // 安全检查
        if (filePath.includes('..') || filePath.startsWith('/')) {
            return NextResponse.json(
                { error: 'Invalid file path' },
                { status: 400 }
            );
        }

        // 获取文件统计信息
        const stats = await getFileStats(filePath);
        if (!stats) {
            return NextResponse.json(
                { error: 'File not found' },
                { status: 404 }
            );
        }

        // 推断文件格式（从扩展名）
        const ext = filePath.split('.').pop()?.toLowerCase() || 'unknown';
        const formatMap: Record<string, string> = {
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
        const format = formatMap[ext] || ext.toUpperCase();

        // 生成 ETag（基于文件大小和修改时间）
        // 这是一个简单的实现，生产环境可以计算实际的文件hash
        const etag = `"${stats.size}-${stats.mtime}"`;

        const response = {
            size: stats.size,
            mtime: stats.mtime,
            format,
            etag,
            supportsRange: true, // 我们的API始终支持Range请求
        };

        return NextResponse.json(response, {
            headers: {
                'Cache-Control': 'public, max-age=3600', // 缓存1小时
                'ETag': etag,
            },
        });
    } catch (error) {
        console.error('[API] Error in file info endpoint:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}

/**
 * HEAD /api/storage/file/info
 * 获取文件头信息
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

        const stats = await getFileStats(filePath);
        if (!stats) {
            return new NextResponse(null, { status: 404 });
        }

        const etag = `"${stats.size}-${stats.mtime}"`;

        return new NextResponse(null, {
            status: 200,
            headers: {
                'Cache-Control': 'public, max-age=3600',
                'ETag': etag,
            },
        });
    } catch (error) {
        console.error('[API] Error in file info HEAD endpoint:', error);
        return new NextResponse(null, { status: 500 });
    }
}
