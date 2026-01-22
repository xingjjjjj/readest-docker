import { NextRequest, NextResponse } from 'next/server';
import { deleteIfExists, ensureRoots, isLocalStorageEnabled, resolveLocalPath } from '../_lib/localFs';

export async function DELETE(req: NextRequest) {
    if (!isLocalStorageEnabled()) {
        return NextResponse.json({ error: 'Local storage disabled' }, { status: 501 });
    }

    await ensureRoots();

    const { searchParams } = new URL(req.url);
    const fileKey = searchParams.get('fileKey');
    if (!fileKey) {
        return NextResponse.json({ error: 'fileKey is required' }, { status: 400 });
    }

    try {
        const { fullPath } = resolveLocalPath(fileKey);
        const deleted = await deleteIfExists(fullPath);
        return NextResponse.json({ deleted });
    } catch (error: any) {
        return NextResponse.json({ error: error?.message || 'Failed to delete file' }, { status: 500 });
    }
}
