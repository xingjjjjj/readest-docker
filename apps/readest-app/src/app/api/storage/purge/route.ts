import { NextRequest, NextResponse } from 'next/server';
import { deleteIfExists, ensureRoots, isLocalStorageEnabled, resolveLocalPath } from '../_lib/localFs';

export async function DELETE(req: NextRequest) {
    if (!isLocalStorageEnabled()) {
        return NextResponse.json({ error: 'Local storage disabled' }, { status: 501 });
    }

    await ensureRoots();

    const body = await req.json();
    const fileKeys: string[] = body?.fileKeys || [];
    const result = {
        success: [] as string[],
        failed: [] as { fileKey: string; error: string }[],
        deletedCount: 0,
        failedCount: 0,
    };

    for (const fileKey of fileKeys) {
        try {
            const { fullPath } = resolveLocalPath(fileKey);
            const deleted = await deleteIfExists(fullPath);
            if (deleted) {
                result.success.push(fileKey);
                result.deletedCount += 1;
            } else {
                result.failed.push({ fileKey, error: 'Not found' });
                result.failedCount += 1;
            }
        } catch (error: any) {
            result.failed.push({ fileKey, error: error?.message || 'Failed to delete' });
            result.failedCount += 1;
        }
    }

    return NextResponse.json(result);
}
