/**
 * 分块文件加载器 - 支持HTTP Range请求的流式加载
 * 用于快速打开大型书籍文件而无需等待完整下载
 */

export interface FileInfo {
    size: number;
    mtime: number;
    etag: string;
    format: string;
}

export interface LoadProgress {
    loaded: number;
    total: number;
    percent: number;
}

export type ProgressCallback = (progress: LoadProgress) => void;

/**
 * 分块文件加载器
 * 支持：
 * - HTTP Range 请求分块下载
 * - 智能缓存管理
 * - 进度回调
 * - 断点续传
 */
export class ChunkedFileLoader {
    private filePath: string;
    private fileInfo: FileInfo | null = null;
    private chunks: Map<number, ArrayBuffer> = new Map();
    private chunkSize: number = 1024 * 1024; // 1MB chunks
    private loadingChunks: Map<number, Promise<ArrayBuffer>> = new Map();
    private progressCallbacks: Set<ProgressCallback> = new Set();
    private totalLoaded: number = 0;

    constructor(filePath: string, chunkSize: number = 1024 * 1024) {
        this.filePath = filePath;
        this.chunkSize = chunkSize;
    }

    /**
     * 获取文件信息（元数据）
     * 用于确定文件大小、修改时间等
     */
    async getFileInfo(): Promise<FileInfo> {
        if (this.fileInfo) {
            return this.fileInfo;
        }

        try {
            const url = `/api/storage/file/info?filePath=${encodeURIComponent(this.filePath)}`;
            console.log(`[ChunkedFileLoader] Fetching file info for: ${this.filePath}`);
            console.log(`[ChunkedFileLoader] Request URL: ${url}`);

            const response = await fetch(url, { cache: 'no-store' });

            if (!response.ok) {
                const errorText = await response.text().catch(() => 'Unable to read error response');
                console.error(`[ChunkedFileLoader] Failed to get file info:`, {
                    filePath: this.filePath,
                    status: response.status,
                    statusText: response.statusText,
                    error: errorText,
                });
                throw new Error(`Failed to get file info: ${response.status} - ${errorText}`);
            }

            const fileInfo: FileInfo | null = await response.json();
            if (!fileInfo) {
                throw new Error('Invalid file info response');
            }
            this.fileInfo = fileInfo;
            console.log(`[ChunkedFileLoader] File info loaded: ${this.filePath}`, this.fileInfo);
            return this.fileInfo;
        } catch (error) {
            console.error('[ChunkedFileLoader] Error getting file info:', error);
            throw error;
        }
    }

    /**
     * 获取指定字节范围的数据
     * 利用 HTTP Range 请求，支持断点续传
     */
    async getRange(start: number, end: number): Promise<ArrayBuffer> {
        try {
            const response = await fetch(
                `/api/storage/file/chunk?filePath=${encodeURIComponent(this.filePath)}`,
                {
                    headers: {
                        Range: `bytes=${start}-${end}`,
                    },
                    cache: 'no-store',
                }
            );

            // 只在非预期响应时打印日志
            if (response.status === 200) {
                console.warn(`[ChunkedFileLoader] ⚠️ Got 200 instead of 206 - server may not support Range!`);
            }

            if (!response.ok && response.status !== 206) {
                throw new Error(`Failed to fetch range: ${response.status}`);
            }

            const buffer = await response.arrayBuffer();
            this.totalLoaded += buffer.byteLength;
            this.emitProgress();

            return buffer;
        } catch (error) {
            console.error(`[ChunkedFileLoader] Error getting range [${start}-${end}]:`, error);
            throw error;
        }
    }

    /**
     * 加载指定块（使用缓存避免重复下载）
     */
    async loadChunk(chunkIndex: number): Promise<ArrayBuffer> {
        // 检查缓存
        if (this.chunks.has(chunkIndex)) {
            return this.chunks.get(chunkIndex)!;
        }

        // 检查是否正在加载中，避免重复请求
        if (this.loadingChunks.has(chunkIndex)) {
            return this.loadingChunks.get(chunkIndex)!;
        }

        // 创建加载Promise
        const loadPromise = (async () => {
            const fileInfo = await this.getFileInfo();
            const start = chunkIndex * this.chunkSize;
            const end = Math.min(start + this.chunkSize - 1, fileInfo.size - 1);

            if (start >= fileInfo.size) {
                throw new Error(`Chunk ${chunkIndex} beyond file size`);
            }

            const buffer = await this.getRange(start, end);
            this.chunks.set(chunkIndex, buffer);
            this.loadingChunks.delete(chunkIndex);

            // 只在加载前10个chunk时打印日志
            if (chunkIndex < 10) {
                console.log(
                    `[ChunkedFileLoader] Loaded chunk ${chunkIndex}: ${buffer.byteLength} bytes`
                );
            }

            return buffer;
        })();

        this.loadingChunks.set(chunkIndex, loadPromise);
        return loadPromise;
    }

    /**
     * 获取指定范围的完整数据
     * 自动处理跨多个块的范围
     */
    async getCompleteRange(start: number, end: number): Promise<ArrayBuffer> {
        const fileInfo = await this.getFileInfo();

        if (start < 0 || end >= fileInfo.size) {
            throw new Error(`Invalid range: [${start}-${end}], file size: ${fileInfo.size}`);
        }

        const startChunk = Math.floor(start / this.chunkSize);
        const endChunk = Math.floor(end / this.chunkSize);
        const chunks: ArrayBuffer[] = [];

        // 加载所有相关的块
        for (let i = startChunk; i <= endChunk; i++) {
            chunks.push(await this.loadChunk(i));
        }

        // 合并块
        const combined = new Uint8Array(end - start + 1);
        let offset = 0;
        let chunkOffset = start % this.chunkSize;

        for (let i = startChunk; i <= endChunk; i++) {
            const chunk = chunks[i - startChunk];
            if (!chunk) {
                throw new Error(`Failed to load chunk ${i}`);
            }
            const chunkArray = new Uint8Array(chunk);
            const size = Math.min(
                chunkArray.length - chunkOffset,
                combined.length - offset
            );

            combined.set(chunkArray.slice(chunkOffset, chunkOffset + size), offset);
            offset += size;
            chunkOffset = 0;
        }

        return combined.buffer;
    }

    /**
     * 预加载相邻块（优化用户体验）
     */
    async preloadAdjacentChunks(
        chunkIndex: number,
        rangeSize: number = 3
    ): Promise<void> {
        const indices: number[] = [];

        for (let i = Math.max(0, chunkIndex - rangeSize); i <= chunkIndex + rangeSize; i++) {
            if (!this.chunks.has(i) && !this.loadingChunks.has(i)) {
                indices.push(i);
            }
        }

        // 并行加载，但限制并发数量
        const batchSize = 2;
        for (let i = 0; i < indices.length; i += batchSize) {
            const batch = indices.slice(i, i + batchSize);
            await Promise.all(batch.map((idx) => this.loadChunk(idx))).catch((error) => {
                console.warn('[ChunkedFileLoader] Error preloading chunks:', error);
            });
        }

        console.log(`[ChunkedFileLoader] Preloaded ${indices.length} adjacent chunks`);
    }

    /**
     * 获取文件的完整副本（作为单个File对象）
     * 用于与现有的BookDoc系统兼容
     */
    async getCompleteFile(filename?: string): Promise<File> {
        const fileInfo = await this.getFileInfo();
        const buffer = await this.getCompleteRange(0, fileInfo.size - 1);
        return new File([buffer], filename || this.filePath.split('/').pop() || 'book');
    }

    /**
     * 注册进度回调
     */
    onProgress(callback: ProgressCallback): () => void {
        this.progressCallbacks.add(callback);
        return () => {
            this.progressCallbacks.delete(callback);
        };
    }

    /**
     * 触发进度事件
     */
    private emitProgress(): void {
        const progress: LoadProgress = {
            loaded: this.totalLoaded,
            total: this.fileInfo?.size || 0,
            percent: this.fileInfo ? (this.totalLoaded / this.fileInfo.size) * 100 : 0,
        };

        this.progressCallbacks.forEach((callback) => {
            try {
                callback(progress);
            } catch (error) {
                console.error('[ChunkedFileLoader] Error in progress callback:', error);
            }
        });
    }

    /**
     * 清空缓存
     */
    clearCache(): void {
        this.chunks.clear();
        this.totalLoaded = 0;
        console.log('[ChunkedFileLoader] Cache cleared');
    }

    /**
     * 获取缓存统计信息
     */
    getCacheStats(): {
        cachedChunks: number;
        cachedSize: number;
        fileSize: number;
        percent: number;
    } {
        let cachedSize = 0;
        this.chunks.forEach((buffer) => {
            cachedSize += buffer.byteLength;
        });

        return {
            cachedChunks: this.chunks.size,
            cachedSize,
            fileSize: this.fileInfo?.size || 0,
            percent: this.fileInfo ? (cachedSize / this.fileInfo.size) * 100 : 0,
        };
    }
}

/**
 * 全局缓存管理器
 * 管理多个ChunkedFileLoader的缓存，防止内存溢出
 */
export class LoaderCacheManager {
    private loaders: Map<string, ChunkedFileLoader> = new Map();
    private maxTotalSize: number = 500 * 1024 * 1024; // 500MB
    private currentSize: number = 0;

    /**
     * 获取或创建加载器
     */
    getLoader(filePath: string, chunkSize?: number): ChunkedFileLoader {
        if (!this.loaders.has(filePath)) {
            const loader = new ChunkedFileLoader(filePath, chunkSize);
            this.loaders.set(filePath, loader);
        }
        return this.loaders.get(filePath)!;
    }

    /**
     * 移除加载器并释放缓存
     */
    removeLoader(filePath: string): void {
        const loader = this.loaders.get(filePath);
        if (loader) {
            const stats = loader.getCacheStats();
            this.currentSize -= stats.cachedSize;
            loader.clearCache();
            this.loaders.delete(filePath);
            console.log(`[LoaderCacheManager] Removed loader: ${filePath}`);
        }
    }

    /**
     * 清空所有缓存
     */
    clearAll(): void {
        this.loaders.forEach((loader) => {
            loader.clearCache();
        });
        this.loaders.clear();
        this.currentSize = 0;
        console.log('[LoaderCacheManager] Cleared all loaders');
    }

    /**
     * 获取总缓存统计
     */
    getStats(): {
        loaderCount: number;
        totalSize: number;
        maxSize: number;
        percent: number;
    } {
        return {
            loaderCount: this.loaders.size,
            totalSize: this.currentSize,
            maxSize: this.maxTotalSize,
            percent: (this.currentSize / this.maxTotalSize) * 100,
        };
    }
}

// 全局缓存管理实例
export const globalLoaderCache = new LoaderCacheManager();
