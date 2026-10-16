import { FileSystem, BaseDir, ResolvedPath, FileItem } from '@/types/system';
import { isValidURL } from '@/utils/misc';
import { RemoteFile } from '@/utils/file';
import { LOCAL_BOOKS_SUBDIR, LOCAL_FONTS_SUBDIR, LOCAL_IMAGES_SUBDIR, DATA_SUBDIR } from './constants';

const basePrefix = async () => '';

const resolvePath = (path: string, base: BaseDir): ResolvedPath => {

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
                    return { baseDir: 0, basePrefix, fp: `.readest/${path}`, base };
            }
            // All book files and metadata use flat structure (no Readest/Books/ prefix)
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
        return result;
    },
    async getBlobURL(path: string, base: BaseDir) {
        try {
                  const content = await this.readFile(path, base, 'binary');
            const result = URL.createObjectURL(new Blob([content]));
                  return result;
        } catch (error) {
            console.error('[APIFileSystem.getBlobURL] ✗ Error creating blob URL:', error);
            return path;
        }
    },
    async getImageURL(path: string) {
        if (!path || path.trim() === '') {
            console.warn('[APIFileSystem.getImageURL] ⚠️ WARNING: Empty path provided');
            return '';
        }
        const result = this.getURL(path);
        return result;
    },
    async openFile(path: string, base: BaseDir, filename?: string) {
        if (isValidURL(path)) {
            return await new RemoteFile(path, filename).open();
        }
        const { fp } = this.resolvePath(path, base);
        // 使用浏览器默认缓存策略，后端的 ETag 会自动处理缓存验证
        const res = await fetch(`/api/storage/file?filePath=${encodeURIComponent(fp)}`);
        if (!res.ok) throw new Error('File not found');
        return new File([await res.arrayBuffer()], filename || path);
    },
    async copyFile(srcPath: string, dstPath: string, base: BaseDir) {
        console.log('[APIFileSystem.copyFile] 📋 Starting copy from:', srcPath);
        const file = await this.openFile(srcPath, base);
        console.log('[APIFileSystem.copyFile] 📋 File opened, size:', file.size, 'bytes');
        console.log('[APIFileSystem.copyFile] 📋 Now writing to:', dstPath);
        await this.writeFile(dstPath, base, file);
        console.log('[APIFileSystem.copyFile] ✅ Copy completed');
    },
    async readFile(path: string, base: BaseDir, mode: 'text' | 'binary') {
        const { fp } = this.resolvePath(path, base);
        // 使用浏览器默认缓存策略，后端的 ETag 会自动处理缓存验证
        const res = await fetch(`/api/storage/file?filePath=${encodeURIComponent(fp)}`);
        if (!res.ok) throw new Error(`File not found: ${fp}`);
        return mode === 'text' ? await res.text() : await res.arrayBuffer();
    },
    async writeFile(path: string, base: BaseDir, content: string | ArrayBuffer | File) {
        const { fp } = this.resolvePath(path, base);
        console.log('[APIFileSystem.writeFile] 11. Input path:', path);
        console.log('[APIFileSystem.writeFile] 12. Base:', base);
        console.log('[APIFileSystem.writeFile] 13. Resolved fp:', fp);
        console.log('[APIFileSystem.writeFile] 14. Content type:', content instanceof File ? `File (${content.size} bytes)` : typeof content);
        console.log('[APIFileSystem.writeFile] 15. Calling writeFile API...');

        const CHUNK_SIZE = 8 * 1024 * 1024; // 8MB
        const toBuffer = async (c: string | ArrayBuffer | File): Promise<Buffer> => {
            if (c instanceof File) return Buffer.from(await c.arrayBuffer());
            if (typeof c === 'string') return Buffer.from(c);
            return Buffer.from(c);
        };

        // If content is File and large, stream in chunks without reading all into memory
        if (content instanceof File && content.size > CHUNK_SIZE) {
            console.log('[APIFileSystem.writeFile] 📦 Large file detected, using chunked upload:', content.size, 'bytes');
            const uploadId = Math.random().toString(36).slice(2);
            const totalChunks = Math.ceil(content.size / CHUNK_SIZE);
            for (let i = 0; i < totalChunks; i++) {
                const start = i * CHUNK_SIZE;
                const end = Math.min(start + CHUNK_SIZE, content.size);
                const part = content.slice(start, end);
                const partBuf = Buffer.from(await part.arrayBuffer());
                console.log(`[APIFileSystem.writeFile] 📦 Uploading chunk ${i + 1}/${totalChunks} (${partBuf.length} bytes)`);
                const res = await fetch(`/api/storage/upload-chunk?uploadId=${encodeURIComponent(uploadId)}&index=${i}&total=${totalChunks}`, {
                    method: 'POST',
                    body: partBuf,
                    headers: {
                        'Content-Length': partBuf.length.toString(),
                    },
                });
                if (!res.ok) {
                    const msg = await res.text().catch(() => res.statusText);
                    throw new Error(`Failed to upload chunk ${i}/${totalChunks}: ${res.status} ${msg}`);
                }
            }
            console.log('[APIFileSystem.writeFile] ✅ All chunks uploaded, committing...');
            const commit = await fetch(`/api/storage/commit-upload?uploadId=${encodeURIComponent(uploadId)}&filePath=${encodeURIComponent(fp)}&expectedSize=${content.size}&overwrite=1`, {
                method: 'POST',
            });
            if (!commit.ok) {
                const msg = await commit.text().catch(() => commit.statusText);
                throw new Error(`Failed to commit upload: ${commit.status} ${msg}`);
            }
            const json = await commit.json().catch(() => ({} as any));
            if (json?.size !== undefined && json.size !== content.size) {
                console.error('[APIFileSystem.writeFile] ✗ Commit size mismatch: expected', content.size, 'got', json.size);
                throw new Error('Commit reported size mismatch');
            }
            return;
        }

        // For non-File or smaller content, use single PUT
        const buffer = await toBuffer(content);
        if (buffer.length > CHUNK_SIZE) {
            // Chunk large ArrayBuffer/string too
            const uploadId = Math.random().toString(36).slice(2);
            const totalChunks = Math.ceil(buffer.length / CHUNK_SIZE);
            for (let i = 0; i < totalChunks; i++) {
                const start = i * CHUNK_SIZE;
                const end = Math.min(start + CHUNK_SIZE, buffer.length);
                const partBuf = buffer.subarray(start, end);
                const res = await fetch(`/api/storage/upload-chunk?uploadId=${encodeURIComponent(uploadId)}&index=${i}&total=${totalChunks}`, {
                    method: 'POST',
                    body: partBuf,
                    headers: {
                        'Content-Length': partBuf.length.toString(),
                    },
                });
                if (!res.ok) {
                    const msg = await res.text().catch(() => res.statusText);
                    throw new Error(`Failed to upload chunk ${i}/${totalChunks}: ${res.status} ${msg}`);
                }
            }
            const commit = await fetch(`/api/storage/commit-upload?uploadId=${encodeURIComponent(uploadId)}&filePath=${encodeURIComponent(fp)}&expectedSize=${buffer.length}&overwrite=1`, {
                method: 'POST',
            });
            if (!commit.ok) {
                const msg = await commit.text().catch(() => commit.statusText);
                throw new Error(`Failed to commit upload: ${commit.status} ${msg}`);
            }
            const json = await commit.json().catch(() => ({} as any));
            if (json?.size !== undefined && json.size !== buffer.length) {
                console.error('[APIFileSystem.writeFile] ✗ Commit size mismatch: expected', buffer.length, 'got', json.size);
                throw new Error('Commit reported size mismatch');
            }
            console.log('[APIFileSystem.writeFile] ✅ Chunked write completed:', json?.size, 'bytes');
            return;
        }

        console.log('[APIFileSystem.writeFile] 14. Calling PUT /api/storage/file with filePath:', fp);
        const res = await fetch(`/api/storage/file?filePath=${encodeURIComponent(fp)}`, {
            method: 'PUT',
            body: buffer,
            headers: {
                'Content-Length': buffer.length.toString(),
            },
        });
        if (!res.ok) {
            const msg = await res.text().catch(() => res.statusText);
            // 2026-10-13 未登录阶段初始化写属预期失败(中间件401)：静默返回，登录后 init 会重跑
            if (res.status === 401) return;
            throw new Error(`Failed to write file: ${res.status} ${msg}`);
        }
        console.log('[APIFileSystem.writeFile] ✅ Single write completed:', buffer.length, 'bytes');
        try {
            const json = await res.json();
            if (json?.size !== undefined && json.size !== buffer.length) {
                console.error('[APIFileSystem.writeFile] ✗ Server size mismatch: expected', buffer.length, 'got', json.size);
                throw new Error('Server reported size mismatch');
            }
        } catch { }
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
        // 2026-10-15 轻量化:改走 /file/info 元数据端点判断存在性。
        // 旧实现 GET /api/storage/file 会把整个文件拉下来只为读 HTTP 状态码
        // (点书卡触发 exists+stats,111MB 的书一次点击即 220MB+ 流量并阻塞导航约 10s)
        const res = await fetch(`/api/storage/file/info?filePath=${encodeURIComponent(fp)}`);
        if (res.status === 501) {
            // 端点不可用(非本地存储部署):退回旧 GET 行为保持兼容
            const legacy = await fetch(`/api/storage/file?filePath=${encodeURIComponent(fp)}`);
            return legacy.ok;
        }
        return res.ok;
    },
    async stats(path: string, base: BaseDir) {
        const { fp } = this.resolvePath(path, base);
        // 2026-10-15 轻量化:stats 走 /file/info(服务端 node:fs stat),
        // 不再把整个文件 arrayBuffer 进内存只为量大小
        const res = await fetch(`/api/storage/file/info?filePath=${encodeURIComponent(fp)}`);
        if (!res.ok) throw new Error('File not found');
        const json = await res.json().catch(() => null);
        if (json && typeof json.size === 'number') {
            return {
                isFile: true,
                isDirectory: false,
                size: json.size,
                mtime: typeof json.mtime === 'number' ? new Date(json.mtime) : null,
                atime: null,
                birthtime: null,
            };
        }
        // 兜底:info 返回异常时用 HEAD 取 Content-Length
        const head = await fetch(`/api/storage/file?filePath=${encodeURIComponent(fp)}`, {
            method: 'HEAD',
        });
        if (!head.ok) throw new Error('File not found');
        return {
            isFile: true,
            isDirectory: false,
            size: parseInt(head.headers.get('content-length') || '0', 10) || 0,
            mtime: null,
            atime: null,
            birthtime: null,
        };
    },
};
