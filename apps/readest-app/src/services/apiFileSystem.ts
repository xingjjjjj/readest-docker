import { FileSystem, BaseDir, ResolvedPath, FileItem } from '@/types/system';
import { isValidURL } from '@/utils/misc';
import { RemoteFile } from '@/utils/file';
import { LOCAL_BOOKS_SUBDIR, LOCAL_FONTS_SUBDIR, LOCAL_IMAGES_SUBDIR, DATA_SUBDIR } from './constants';

const basePrefix = async () => '';

const resolvePath = (path: string, base: BaseDir): ResolvedPath => {
    // Check if we're in local storage mode
    const isLocalMode = (typeof process !== 'undefined' && process.env?.NEXT_PUBLIC_STORAGE_MODE === 'local') ||
        (typeof window !== 'undefined' && (window as any).__STORAGE_MODE__ === 'local');

    if (typeof window === 'undefined' && typeof process !== 'undefined') {
        console.log('[ResolvePath] Env Check - NEXT_PUBLIC_STORAGE_MODE:', process.env?.NEXT_PUBLIC_STORAGE_MODE, 'isLocalMode:', isLocalMode, 'base:', base, 'path:', path);
    }

    switch (base) {
        case 'Data':
            return { baseDir: 0, basePrefix, fp: `${DATA_SUBDIR}/${path}`, base };
        case 'Settings':
            // In local storage mode, settings.json stored in Settings directory
            // In remote mode, stored at root
            if ((typeof process !== 'undefined' && process.env?.NEXT_PUBLIC_STORAGE_MODE === 'local') ||
                (typeof window !== 'undefined' && (window as any).__STORAGE_MODE__ === 'local')) {
                return { baseDir: 0, basePrefix, fp: `Settings/${path}`, base };
            }
            return { baseDir: 0, basePrefix, fp: path, base };
        case 'Books':
            // Always use flat storage structure (no Readest/Books/ prefix)
            // Library metadata files go to Settings directory
            if (path === 'library.json' || path === 'library.json.bak' || path === 'library_backup.json') {
                console.log('[ResolvePath] Books/Library detected, routing to Settings');
                return { baseDir: 0, basePrefix, fp: `Settings/${path}`, base };
            }
            // All book files and metadata use flat structure (no Readest/Books/ prefix)
            console.log('[ResolvePath] Books flat path (no prefix):', path);
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
        return `/api/storage/file?filePath=${encodeURIComponent(path)}`;
    },
    async getBlobURL(path: string, base: BaseDir) {
        try {
            const content = await this.readFile(path, base, 'binary');
            return URL.createObjectURL(new Blob([content]));
        } catch {
            return path;
        }
    },
    async getImageURL(path: string) {
        return this.getURL(path);
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
        console.log('[APIFileSystem.writeFile] path:', path, 'base:', base, 'resolved fp:', fp);
        let buffer: Buffer;
        if (content instanceof File) {
            buffer = Buffer.from(await content.arrayBuffer());
        } else if (typeof content === 'string') {
            buffer = Buffer.from(content);
        } else {
            buffer = Buffer.from(content);
        }
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
