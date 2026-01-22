import path from 'node:path';
import { NextRequest, NextResponse } from 'next/server';
import { ensureRoots, isLocalStorageEnabled, resolveLocalPath } from '../_lib/localFs';

export async function POST(req: NextRequest) {
    if (!isLocalStorageEnabled()) {
        console.log('[Storage] Local storage disabled, mode:', process.env.STORAGE_MODE);
        return NextResponse.json({ error: 'Local storage disabled' }, { status: 501 });
    }

    console.log('[Storage] Local mode enabled, root:', process.env.LOCAL_STORAGE_ROOT);
    await ensureRoots();

    const body = await req.json();
    const fileName: string = body?.fileName;
    const bookHash: string | undefined = body?.bookHash;
    const temp: boolean = !!body?.temp;
    const cloudPath: string | undefined = body?.cloudPath;
    const relativePath: string | undefined = body?.relativePath;

    console.log('[Storage Upload] fileName:', fileName, 'bookHash:', bookHash, 'temp:', temp, 'cloudPath:', cloudPath, 'relativePath:', relativePath);

    if (!fileName && !cloudPath) {
        return NextResponse.json({ error: 'fileName or cloudPath is required' }, { status: 400 });
    }

    // Use relativePath if provided (for direct storage), otherwise use hash-based path (legacy)
    const targetPath = cloudPath || relativePath ||
        path.posix.join('.readest', 'legacy', bookHash || 'misc', fileName);

    try {
        // Validate path
        const resolved = resolveLocalPath(targetPath, temp);
        console.log('[Storage Upload] Resolved path:', resolved.fullPath);
    } catch (error: any) {
        console.error('[Storage Upload] Path validation error:', error?.message);
        return NextResponse.json({ error: error?.message || 'Invalid path' }, { status: 400 });
    }

    const query = new URLSearchParams({ filePath: targetPath });
    if (temp) query.set('temp', '1');
    const uploadUrl = `/api/storage/file?${query.toString()}`;
    const downloadUrl = temp ? uploadUrl : undefined;

    console.log('[Storage Upload] Upload URL:', uploadUrl);
    return NextResponse.json({ uploadUrl, downloadUrl });
}
