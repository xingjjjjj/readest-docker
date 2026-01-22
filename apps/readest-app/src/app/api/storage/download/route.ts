import fs from 'node:fs/promises';
import { NextRequest, NextResponse } from 'next/server';
import { ensureRoots, isLocalStorageEnabled, resolveLocalPath } from '../_lib/localFs';

const buildDownloadUrl = (fileKey: string) =>
    `/api/storage/file?filePath=${encodeURIComponent(fileKey)}`;

export async function GET(req: NextRequest) {
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
        await fs.access(fullPath);
        return NextResponse.json({ downloadUrl: buildDownloadUrl(fileKey) });
    } catch (error: any) {
        return NextResponse.json({ error: error?.message || 'Invalid fileKey' }, { status: 404 });
    }
}

export async function POST(req: NextRequest) {
    if (!isLocalStorageEnabled()) {
        return NextResponse.json({ error: 'Local storage disabled' }, { status: 501 });
    }

    await ensureRoots();

    const body = await req.json();
    const fileKeys: string[] = body?.fileKeys || [];
    const downloadUrls: Record<string, string | null> = {};

    await Promise.all(
        fileKeys.map(async (fileKey) => {
            try {
                const { fullPath } = resolveLocalPath(fileKey);
                await fs.access(fullPath);
                downloadUrls[fileKey] = buildDownloadUrl(fileKey);
            } catch {
                downloadUrls[fileKey] = null;
            }
        }),
    );

    return NextResponse.json({ downloadUrls });
}
