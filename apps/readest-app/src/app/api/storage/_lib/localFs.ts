import fs from 'node:fs/promises';
import type { Dirent } from 'node:fs';
import path from 'node:path';

export const isLocalStorageEnabled = () =>
    (process.env['STORAGE_MODE'] || process.env['NEXT_PUBLIC_STORAGE_MODE'] || 'remote') === 'local';

export const STORAGE_ROOT = path.resolve(
    process.env['LOCAL_STORAGE_ROOT'] || path.join(process.cwd(), 'data', 'storage'),
);
export const TEMP_ROOT = path.resolve(
    process.env['LOCAL_STORAGE_TEMP_ROOT'] || path.join(STORAGE_ROOT, 'temp'),
);

export const ensureRoots = async () => {
    await fs.mkdir(STORAGE_ROOT, { recursive: true });
    await fs.mkdir(TEMP_ROOT, { recursive: true });
};

// Keep user-provided relative paths intact; only trim leading slashes.
const stripUserPrefix = (fileKey: string) => fileKey.replace(/^\/+/, '');

// 2026-10-12 安全修复：startsWith 前缀判断存在 /baseX 绕过 /base 的边界问题
const isInsideBase = (p: string, base: string) => p === base || p.startsWith(base + path.sep);

export const resolveLocalPath = (fileKey: string, useTemp = false) => {
    const base = useTemp ? TEMP_ROOT : STORAGE_ROOT;

    // Allow absolute paths inside the storage root without re-prefixing.
    if (path.isAbsolute(fileKey)) {
        const fullPath = path.resolve(fileKey);
        if (!isInsideBase(fullPath, base)) {
            throw new Error('Invalid file path');
        }
        const relPath = path.posix.normalize(path.relative(base, fullPath));
        return { fullPath, relPath, basePath: base };
    }

    const cleanKey = stripUserPrefix(fileKey);

    // In local storage mode, route certain files to .readest directory
    if (isLocalStorageEnabled()) {
        // Settings files go to .readest/ directory
        if (cleanKey === 'settings.json' || cleanKey === 'settings.json.bak') {
            const settingsRelPath = path.posix.normalize(`.readest/${cleanKey}`);
            const settingsFullPath = path.join(base, settingsRelPath);
            if (!isInsideBase(settingsFullPath, base)) {
                throw new Error('Invalid file path');
            }
            return { fullPath: settingsFullPath, relPath: settingsRelPath, basePath: base };
        }

        // Library files also go to .readest/ directory
        if (cleanKey === 'library.json' || cleanKey === 'library.json.bak' || cleanKey === 'library_backup.json') {
            const libraryRelPath = path.posix.normalize(`.readest/${cleanKey}`);
            const libraryFullPath = path.join(base, libraryRelPath);
            if (!isInsideBase(libraryFullPath, base)) {
                throw new Error('Invalid file path');
            }
            return { fullPath: libraryFullPath, relPath: libraryRelPath, basePath: base };
        }

        // All other files use flat structure
    }

    const relPath = path.posix.normalize(cleanKey);
    if (relPath.startsWith('..')) {
        throw new Error('Invalid file path');
    }
    const fullPath = path.join(base, relPath);
    if (!isInsideBase(fullPath, base)) {
        throw new Error('Invalid file path');
    }
    return { fullPath, relPath, basePath: base };
};

export const ensureParentDir = async (fullPath: string) => {
    const dir = path.dirname(fullPath);
    await fs.mkdir(dir, { recursive: true });
};

export const readFileBuffer = async (fullPath: string) => {
    try {
        const stats = await fs.stat(fullPath);
        const fileSizeMB = stats.size / (1024 * 1024);


        // 警告：文件超过 100MB
        if (stats.size > 100 * 1024 * 1024) {
            console.warn(`[readFileBuffer] ⚠️ Large file detected: ${fileSizeMB.toFixed(2)} MB`);
        }

        // 限制：文件超过 500MB 时抛出错误
        if (stats.size > 500 * 1024 * 1024) {
            throw new Error(`File too large: ${fileSizeMB.toFixed(2)} MB. Maximum size is 500 MB.`);
        }

        const buffer = Buffer.from(await fs.readFile(fullPath));
        return buffer;
    } catch (error: any) {
        console.error(`[readFileBuffer] ✗ Error reading file ${fullPath}:`, error.message);
        if (error.code === 'ENOMEM' || error.message?.includes('memory')) {
            throw new Error(`Out of memory while reading file. File may be too large.`);
        }
        throw error;
    }
};

export const writeFileBuffer = async (fullPath: string, buffer: Buffer) => {
    await ensureParentDir(fullPath);
    await fs.writeFile(fullPath, buffer);
};

export const deleteIfExists = async (fullPath: string) => {
    try {
        await fs.unlink(fullPath);
        return true;
    } catch (error: any) {
        if (error?.code === 'ENOENT') return false;
        throw error;
    }
};

export type LocalFileInfo = {
    fileKey: string;
    size: number;
    mtime: number;
};

export const walkFiles = async (root: string, prefix = ''): Promise<LocalFileInfo[]> => {
    let entries: Dirent[] = [];
    try {
        entries = await fs.readdir(root, { withFileTypes: true });
    } catch (error: any) {
        if (error?.code === 'ENOENT') return [];
        throw error;
    }
    const files: LocalFileInfo[] = [];

    for (const entry of entries) {
        const relKey = path.posix.join(prefix, entry.name);
        const fullPath = path.join(root, entry.name);
        if (entry.isDirectory()) {
            files.push(...(await walkFiles(fullPath, relKey)));
        } else if (entry.isFile()) {
            const stat = await fs.stat(fullPath);
            files.push({ fileKey: relKey, size: stat.size, mtime: stat.mtimeMs });
        }
    }

    return files;
};

// 2026-10-12 性能优化：目录树快照缓存——list/stats 高频全树遍历改为 15 秒快照，写操作主动失效
let walkSnapshot: { root: string; files: LocalFileInfo[]; ts: number } | null = null;
const WALK_SNAPSHOT_TTL_MS = 15_000;

export const invalidateWalkFiles = () => {
    walkSnapshot = null;
};

export const walkFilesCached = async (root: string): Promise<LocalFileInfo[]> => {
    if (walkSnapshot && walkSnapshot.root === root && Date.now() - walkSnapshot.ts < WALK_SNAPSHOT_TTL_MS) {
        return walkSnapshot.files;
    }
    const files = await walkFiles(root);
    walkSnapshot = { root, files, ts: Date.now() };
    return files;
};
