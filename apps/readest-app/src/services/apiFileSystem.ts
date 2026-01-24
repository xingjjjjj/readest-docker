import { FileSystem, BaseDir, ResolvedPath, FileItem } from '@/types/system';
import { isValidURL } from '@/utils/misc';
import { RemoteFile } from '@/utils/file';
import { LOCAL_BOOKS_SUBDIR, LOCAL_FONTS_SUBDIR, LOCAL_IMAGES_SUBDIR, DATA_SUBDIR } from './constants';

const basePrefix = async () => '';

const resolvePath = (path: string, base: BaseDir): ResolvedPath => {
    // Check if we're in local storage mode
    const isLocalMode = (typeof process !== 'undefined' && process.env?.['NEXT_PUBLIC_STORAGE_MODE'] === 'local') ||
        (typeof window !== 'undefined' && (window as any).__STORAGE_MODE__ === 'local');

    if (typeof window === 'undefined' && typeof process !== 'undefined') {
        console.log('[ResolvePath] Env Check - NEXT_PUBLIC_STORAGE_MODE:', process.env?.['NEXT_PUBLIC_STORAGE_MODE'], 'isLocalMode:', isLocalMode, 'base:', base, 'path:', path);
    }

    switch (base) {
        case 'Data':
            return { baseDir: 0, basePrefix, fp: `${DATA_SUBDIR}/${path}`, base };
        case 'Settings':
            // Settings files now stored in .readest directory
            return { baseDir: 0, basePrefix, fp: `.readest/${path}`, base };
        case 'Books':
            // Always use flat storage structure (no Readest/Books/ prefix)
            // Library metadata files now go to .readest directory
            if (path === 'library.json' || path === 'library.json.bak' || path === 'library_backup.json') {
                console.log('[ResolvePath] Books/Library detected, routing to .readest');
                return { baseDir: 0, basePrefix, fp: `.readest/${path}`, base };
            }
            // All book files and metadata use flat structure (no Readest/Books/ prefix)
            console.log('[ResolvePath] ✓ Books base, flat path (no prefix):', path);
            console.log('[ResolvePath] ✓ Returning fp:', path);
            return { baseDir: 0, basePrefix, fp: path, base };
        case 'Fonts':
            return { baseDir: 0, basePrefix, fp: `${LOCAL_FONTS_SUBDIR}/${path}`, base };
        case 'Images':
            return { baseDir: 0, basePrefix, fp: `${LOCAL_IMAGES_SUBDIR}/${path}`, base };
        case 'None':
            return { baseDir: 0, basePrefix, fp: path, base };
        default:
            return { baseDir: 0, basePrefix, fp: `${base}/${path}`, base };
    }
};

export const apiFileSystem: FileSystem = {
    resolvePath,
    async getPrefix(base: BaseDir) {
        const { basePrefix, fp } = this.resolvePath('', base);
        const basePath = await basePrefix();
        const prefix = fp ? (basePath ? `${basePath}/${fp}` : fp) : basePath;
        return prefix.replace(/\/+$/, '');
    },
    getURL(path: string) {
        if (isValidURL(path)) {
            return path;
        }
        // Guard against empty or invalid paths
        if (!path || typeof path !== 'string' || path.trim() === '') {
            console.warn('[APIFileSystem.getURL] ⚠️ WARNING: Called with empty or invalid path:', path);
            console.warn('[APIFileSystem.getURL] Stack trace:', new Error().stack);
            return '';
        }
        const result = `/api/storage/file?filePath=${encodeURIComponent(path)}`;
        console.debug('[APIFileSystem.getURL] ✓ Generated URL for path:', path, '-> Result:', result);
        return result;
    },
    async getBlobURL(path: string, base: BaseDir) {
        try {
            console.log('[APIFileSystem.getBlobURL] Getting blob URL for path:', path, 'base:', base);
            const content = await this.readFile(path, base, 'binary');
            const result = URL.createObjectURL(new Blob([content]));
            console.log('[APIFileSystem.getBlobURL] ✓ Created blob URL:', result);
            return result;
        } catch (error) {
            console.error('[APIFileSystem.getBlobURL] ✗ Error creating blob URL:', error);
            return path;
        }
    },
    async getImageURL(path: string) {
        console.log('[APIFileSystem.getImageURL] Getting image URL for path:', path);
        if (!path || path.trim() === '') {
            console.warn('[APIFileSystem.getImageURL] ⚠️ WARNING: Empty path provided');
            return '';
        }
        const result = this.getURL(path);
        console.log('[APIFileSystem.getImageURL] ✓ Result:', result);
        return result;
    },
    async openFile(path: string, base: BaseDir, filename?: string) {
        if (isValidURL(path)) {
            return await new RemoteFile(path, filename).open();
        }
        const { fp } = this.resolvePath(path, base);
        const res = await fetch(`/api/storage/file?filePath=${encodeURIComponent(fp)}`);
        if (!res.ok) throw new Error('File not found');
        return new File([await res.arrayBuffer()], filename || path);
    },
    async copyFile(srcPath: string, dstPath: string, base: BaseDir) {
        const file = await this.openFile(srcPath, base);
        await this.writeFile(dstPath, base, file);
    },
    async readFile(path: string, base: BaseDir, mode: 'text' | 'binary') {
        const { fp } = this.resolvePath(path, base);
        const res = await fetch(`/api/storage/file?filePath=${encodeURIComponent(fp)}`);
        if (!res.ok) throw new Error(`File not found: ${fp}`);
        return mode === 'text' ? await res.text() : await res.arrayBuffer();
    },
    async writeFile(path: string, base: BaseDir, content: string | ArrayBuffer | File) {
        const { fp } = this.resolvePath(path, base);
        console.log('[APIFileSystem.writeFile] 11. Input path:', path);
        console.log('[APIFileSystem.writeFile] 12. Base:', base);
        console.log('[APIFileSystem.writeFile] 13. Resolved fp:', fp);
        let buffer: Buffer;
        if (content instanceof File) {
            buffer = Buffer.from(await content.arrayBuffer());
        } else if (typeof content === 'string') {
            buffer = Buffer.from(content);
        } else {
            buffer = Buffer.from(content);
        }
        console.log('[APIFileSystem.writeFile] 14. Calling PUT /api/storage/file with filePath:', fp);
        const res = await fetch(`/api/storage/file?filePath=${encodeURIComponent(fp)}`, {
            method: 'PUT',
            body: buffer,
        });
        if (!res.ok) throw new Error('Failed to write file');
    },
    async removeFile(path: string, base: BaseDir) {
        const { fp } = this.resolvePath(path, base);
        const res = await fetch(`/api/storage/delete?fileKey=${encodeURIComponent(fp)}`, {
            method: 'DELETE',
        });
        if (!res.ok) throw new Error('Failed to delete file');
    },
    async createDir(path: string, base: BaseDir) {
        // No-op for API-based file system
    },
    async removeDir(path: string, base: BaseDir) {
        // No-op for API-based file system
    },
    async readDir(path: string, base: BaseDir): Promise<FileItem[]> {
        return [];
    },
    async exists(path: string, base: BaseDir) {
        const { fp } = this.resolvePath(path, base);
        // Avoid hitting API with an empty filePath (e.g. checking root dir "")
        if (!fp || fp.trim() === '') {
            console.warn('[APIFileSystem.exists] WARNING: empty resolved path for', { path, base });
            // Treat empty path as existing to prevent spurious 400s against /api/storage/file
            return true;
        }
        const res = await fetch(`/api/storage/file?filePath=${encodeURIComponent(fp)}`);
        return res.ok;
    },
    async stats(path: string, base: BaseDir) {
        const { fp } = this.resolvePath(path, base);
        const res = await fetch(`/api/storage/file?filePath=${encodeURIComponent(fp)}`);
        if (!res.ok) throw new Error('File not found');
        const buffer = await res.arrayBuffer();
        return {
            isFile: true,
            isDirectory: false,
            size: buffer.byteLength,
            mtime: null,
            atime: null,
            birthtime: null,
        };
    },
};
