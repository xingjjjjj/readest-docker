import { NextRequest, NextResponse } from 'next/server';
import fs from 'node:fs/promises';
import path from 'node:path';
import { STORAGE_ROOT, isLocalStorageEnabled } from '../_lib/localFs';
import { loadBookMetadataInfo } from '../_lib/bookMetadataExtractor';

/**
 * GET /api/storage/book-metadata
 * 获取预生成的书籍元数据
 * 
 * 查询参数:
 * - relativePath: 书籍相对路径（必需）
 * 
 * 返回:
 * - 200: 元数据对象
 * - 404: 元数据不存在
 */
export async function GET(req: NextRequest) {
    if (!isLocalStorageEnabled()) {
        return NextResponse.json({ error: 'Local storage disabled' }, { status: 501 });
    }

    try {
        const { searchParams } = new URL(req.url);
        const relativePath = searchParams.get('relativePath');

        if (!relativePath) {
            return NextResponse.json(
                { error: 'relativePath is required' },
                { status: 400 }
            );
        }

        // 获取书籍文件夹路径（去掉扩展名）
        const metadataFolderPath = path.join(
            STORAGE_ROOT,
            relativePath.replace(/\.[^.]+$/, '')
        );

        // 读取元数据
        const metadata = await loadBookMetadataInfo(metadataFolderPath);

        if (!metadata) {
            return NextResponse.json(
                { error: 'Metadata not found' },
                { status: 404 }
            );
        }

        // 添加缓存控制头
        return NextResponse.json(metadata, {
            headers: {
                'Cache-Control': 'public, max-age=86400, immutable',
            },
        });
    } catch (error: any) {
        console.error('[BookMetadataAPI] Error:', error?.message);
        return NextResponse.json(
            { error: error?.message || 'Failed to get metadata' },
            { status: 500 }
        );
    }
}
