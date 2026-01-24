import { NextRequest, NextResponse } from 'next/server';
import fs from 'node:fs/promises';
import path from 'node:path';
import { STORAGE_ROOT, ensureRoots, isLocalStorageEnabled } from '../_lib/localFs';

export async function POST(req: NextRequest) {
    if (!isLocalStorageEnabled()) {
        return NextResponse.json({ error: 'Local storage disabled' }, { status: 501 });
    }

    await ensureRoots();

    try {
        const body = await req.json();
        const { relativePath, hash } = body;

        if (!relativePath || !hash) {
            return NextResponse.json(
                { error: 'relativePath and hash are required' },
                { status: 400 }
            );
        }

        const bookPath = path.join(STORAGE_ROOT, relativePath);

        // Verify book exists
        try {
            await fs.access(bookPath);
        } catch {
            return NextResponse.json({ error: 'Book file not found' }, { status: 404 });
        }

        return NextResponse.json({
            success: true,
            bookPath: relativePath,
            hash,
        });
    } catch (error: any) {
        console.error('[Storage Import] Error:', error?.message);
        return NextResponse.json(
            { error: error?.message || 'Import failed' },
            { status: 500 }
        );
    }
}
