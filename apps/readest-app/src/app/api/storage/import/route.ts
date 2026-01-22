import { NextRequest, NextResponse } from 'next/server';
import fs from 'node:fs/promises';
import path from 'node:path';
import { STORAGE_ROOT, ensureRoots, isLocalStorageEnabled } from '../_lib/localFs';

const METADATA_DIR = path.join(STORAGE_ROOT, '.readest');
const LINKS_DIR = path.join(METADATA_DIR, 'links');

async function ensureMetadataDirs() {
    await fs.mkdir(METADATA_DIR, { recursive: true });
    await fs.mkdir(LINKS_DIR, { recursive: true });
}

async function createHardLink(srcPath: string, relativePath: string, fileName: string) {
    const linkDir = path.join(LINKS_DIR, path.dirname(relativePath));
    await fs.mkdir(linkDir, { recursive: true });

    const linkPath = path.join(linkDir, fileName);

    try {
        // Check if link already exists
        await fs.access(linkPath);
        // If exists, remove it first
        await fs.unlink(linkPath);
    } catch {
        // Link doesn't exist, that's fine
    }

    try {
        await fs.link(srcPath, linkPath);
        return linkPath;
    } catch (error: any) {
        console.warn('Hard link failed, using copy instead:', error?.message);
        await fs.copyFile(srcPath, linkPath);
        return linkPath;
    }
}

export async function POST(req: NextRequest) {
    if (!isLocalStorageEnabled()) {
        return NextResponse.json({ error: 'Local storage disabled' }, { status: 501 });
    }

    await ensureRoots();
    await ensureMetadataDirs();

    try {
        const body = await req.json();
        const { relativePath, hash, createLinks } = body;

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

        const result: any = {
            bookPath: relativePath,
            hash,
        };

        // Create hard links for cover and config if requested
        if (createLinks) {
            const linkDir = path.join(LINKS_DIR, path.dirname(relativePath));

            result.coverLink = path.join(
                path.dirname(relativePath),
                `${path.basename(relativePath, path.extname(relativePath))}_cover.png`
            );
            result.configLink = path.join(
                path.dirname(relativePath),
                `${path.basename(relativePath, path.extname(relativePath))}_config.json`
            );
        }

        return NextResponse.json({
            success: true,
            ...result,
        });
    } catch (error: any) {
        console.error('[Storage Import] Error:', error?.message);
        return NextResponse.json(
            { error: error?.message || 'Import failed' },
            { status: 500 }
        );
    }
}
