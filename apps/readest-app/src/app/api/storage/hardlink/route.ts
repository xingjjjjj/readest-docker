import { NextRequest, NextResponse } from 'next/server';
import { isLocalStorageEnabled, resolveLocalPath } from '../_lib/localFs';
import { createHardLinkOrCopy, getMetadataLinkPaths } from '../_lib/hardlink';
import path from 'node:path';
import fs from 'node:fs/promises';

export async function POST(req: NextRequest) {
    if (!isLocalStorageEnabled()) {
        return NextResponse.json({ error: 'Local storage disabled' }, { status: 501 });
    }

    try {
        const { bookPath, createCover, createConfig } = await req.json();

        if (!bookPath) {
            return NextResponse.json({ error: 'bookPath is required' }, { status: 400 });
        }

        console.log('[Hardlink] Creating links for book:', bookPath);

        const results: { cover?: boolean; config?: boolean; errors?: string[] } = {};
        const errors: string[] = [];

        // Resolve book file path
        const bookResolved = resolveLocalPath(bookPath, false);

        // Create hard link for cover if requested
        if (createCover) {
            try {
                const { linkPath } = getMetadataLinkPaths(bookPath, '_cover.png');
                console.log('[Hardlink] Creating cover link:', { source: bookResolved.fullPath, link: linkPath });

                // Ensure link directory exists
                await fs.mkdir(path.dirname(linkPath), { recursive: true });

                // For cover, we need to check if source exists first
                // (it should have been written by importBook)
                try {
                    await fs.access(bookResolved.fullPath);
                    const success = await createHardLinkOrCopy(bookResolved.fullPath, linkPath);
                    results.cover = success;
                    if (!success) {
                        errors.push('Failed to create cover link');
                    }
                } catch {
                    // Source doesn't exist yet, that's ok for cover
                    console.log('[Hardlink] Cover source not found, will be created later');
                    results.cover = false;
                }
            } catch (error: any) {
                console.error('[Hardlink] Cover link error:', error);
                errors.push(`Cover: ${error?.message || error}`);
            }
        }

        // Create directory for config link if requested
        if (createConfig) {
            try {
                const { linkPath } = getMetadataLinkPaths(bookPath, '_config.json');
                console.log('[Hardlink] Preparing config link directory:', path.dirname(linkPath));

                // Just ensure directory exists, config will be created when saved
                await fs.mkdir(path.dirname(linkPath), { recursive: true });
                results.config = true;
            } catch (error: any) {
                console.error('[Hardlink] Config directory error:', error);
                errors.push(`Config: ${error?.message || error}`);
            }
        }

        if (errors.length > 0) {
            results.errors = errors;
        }

        console.log('[Hardlink] Results:', results);
        return NextResponse.json(results);
    } catch (error: any) {
        console.error('[Hardlink] Error:', error);
        return NextResponse.json(
            { error: error?.message || 'Failed to create hard links' },
            { status: 500 }
        );
    }
}
