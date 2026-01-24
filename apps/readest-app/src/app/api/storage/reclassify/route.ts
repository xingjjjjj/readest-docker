import path from 'node:path';
import fs from 'node:fs/promises';
import { NextRequest, NextResponse } from 'next/server';
import { isLocalStorageEnabled, resolveLocalPath } from '../_lib/localFs';

export async function POST(req: NextRequest) {
    if (!isLocalStorageEnabled()) {
        return NextResponse.json({ error: 'Local storage disabled' }, { status: 501 });
    }

    try {
        const { oldPath, newPath } = await req.json();

        if (!oldPath || !newPath) {
            return NextResponse.json(
                { error: 'oldPath and newPath are required' },
                { status: 400 }
            );
        }

        if (oldPath === newPath) {
            return NextResponse.json({ success: true, message: 'Paths are identical, no action taken' });
        }

        console.log('[Reclassify] Moving files from old path to new path');
        console.log('  Old:', oldPath);
        console.log('  New:', newPath);

        // 解析旧路径
        const oldResolved = resolveLocalPath(oldPath, false);
        const newResolved = resolveLocalPath(newPath, false);

        // 确保旧文件存在
        const oldStats = await fs.stat(oldResolved.fullPath).catch(() => null);
        if (!oldStats || !oldStats.isFile()) {
            return NextResponse.json(
                { error: `Source file not found: ${oldPath}` },
                { status: 404 }
            );
        }

        // 确保目标目录存在
        const newDir = path.dirname(newResolved.fullPath);
        await fs.mkdir(newDir, { recursive: true });

        // 移动书籍文件
        await fs.rename(oldResolved.fullPath, newResolved.fullPath);
        console.log('[Reclassify] ✓ 书籍文件已移动');

        // 移动元数据文件夹（如果存在）
        const oldWithoutExt = oldPath.replace(/\.[^.]+$/, '');
        const newWithoutExt = newPath.replace(/\.[^.]+$/, '');

        const oldMetadataDir = resolveLocalPath(`${oldWithoutExt}/`, false).fullPath;
        const newMetadataDir = resolveLocalPath(`${newWithoutExt}/`, false).fullPath;

        const metadataStats = await fs.stat(oldMetadataDir).catch(() => null);
        if (metadataStats && metadataStats.isDirectory()) {
            // 确保新元数据目录的父目录存在
            const newMetadataDirParent = path.dirname(newMetadataDir);
            await fs.mkdir(newMetadataDirParent, { recursive: true });

            // 移动元数据目录
            await fs.rename(oldMetadataDir, newMetadataDir);
            console.log('[Reclassify] ✓ 元数据文件夹已移动');

            // 尝试删除旧的空目录
            try {
                const oldDirParent = path.dirname(oldMetadataDir);
                const oldDirContents = await fs.readdir(oldDirParent);
                if (oldDirContents.length === 0) {
                    await fs.rmdir(oldDirParent);
                    console.log('[Reclassify] ✓ 旧的空目录已删除');
                }
            } catch (error) {
                console.log('[Reclassify] ℹ 无法删除旧目录，可能仍有其他文件');
            }
        }

        return NextResponse.json({
            success: true,
            message: 'Book files successfully moved',
            bookPath: newPath,
            metadataPath: newMetadataDir,
            absolutePath: newResolved.fullPath,
        });
    } catch (error: any) {
        console.error('[Reclassify] Error:', error);
        return NextResponse.json(
            { error: error?.message || 'Failed to reclassify book' },
            { status: 500 }
        );
    }
}
