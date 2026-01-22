import fs from 'node:fs/promises';
import path from 'node:path';

/**
 * Create a hard link or fallback to copy if hard link fails
 */
export async function createHardLinkOrCopy(srcPath: string, destPath: string): Promise<void> {
    const destDir = path.dirname(destPath);
    await fs.mkdir(destDir, { recursive: true });

    try {
        // Try to remove existing link/file first
        try {
            await fs.unlink(destPath);
        } catch {
            // Ignore if doesn't exist
        }

        // Try to create hard link
        await fs.link(srcPath, destPath);
    } catch (error: any) {
        // If hard link fails (e.g., cross-device), fall back to copy
        if (error?.code === 'EXDEV' || error?.code === 'EPERM') {
            console.warn('[HardLink] Cross-device or permission issue, falling back to copy');
            await fs.copyFile(srcPath, destPath);
        } else {
            throw error;
        }
    }
}

/**
 * Get metadata link paths for a book file
 */
export function getMetadataLinkPaths(bookRelativePath: string, metadataDir: string) {
    const bookDir = path.dirname(bookRelativePath);
    const bookBaseName = path.basename(bookRelativePath, path.extname(bookRelativePath));

    return {
        coverLink: path.join(metadataDir, 'links', bookDir, `${bookBaseName}_cover.png`),
        configLink: path.join(metadataDir, 'links', bookDir, `${bookBaseName}_config.json`),
        linksDir: path.join(metadataDir, 'links', bookDir),
    };
}
