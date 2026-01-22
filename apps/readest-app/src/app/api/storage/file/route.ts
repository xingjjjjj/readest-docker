import { NextRequest, NextResponse } from 'next/server';
import {
    ensureRoots,
    isLocalStorageEnabled,
    resolveLocalPath,
    readFileBuffer,
    writeFileBuffer,
} from '../_lib/localFs';

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
        const buffer = await readFileBuffer(fullPath);
        console.log('[Storage File GET] File size:', buffer.length, 'bytes');
        const filename = relPath.split('/').pop() || 'file';
        // Encode filename for Content-Disposition header
        const encodedFilename = encodeURIComponent(filename);
        return new NextResponse(buffer, {
            status: 200,
            headers: {
                'Content-Type': 'application/octet-stream',
                'Content-Disposition': `attachment; filename*=UTF-8''${encodedFilename}`,
                'Content-Length': buffer.length.toString(),
            },
        });
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
        const { fullPath } = resolveLocalPath(filePath, searchParams.get('temp') === '1');
        console.log('[Storage File PUT] Writing to:', fullPath);
        const buffer = Buffer.from(await req.arrayBuffer());
        console.log('[Storage File PUT] File size:', buffer.length, 'bytes');
        await writeFileBuffer(fullPath, buffer);
        console.log('[Storage File PUT] File written successfully');
        return NextResponse.json({ ok: true });
    } catch (error: any) {
        console.error('[Storage File PUT] Error:', error?.message);
        return NextResponse.json({ error: error?.message || 'Failed to write file' }, { status: 500 });
    }
}
