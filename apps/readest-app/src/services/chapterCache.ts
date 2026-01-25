/**
 * 书籍章节缓存系统
 * 使用IndexedDB持久化存储章节内容，支持快速离线阅读
 */

export interface ChapterCacheEntry {
    bookHash: string;
    spineIndex: number;
    href: string;
    content: ArrayBuffer; // 原始章节内容
    mediaType: string;
    size: number;
    hash: string; // 内容hash，用于验证有效性
    cachedAt: number;
    accessedAt: number;
    etag?: string; // 服务器 etag，用于缓存验证
}

export interface CacheStats {
    bookHash: string;
    chapterCount: number;
    totalSize: number;
    percent: number;
}

/**
 * 章节缓存管理器
 * 负责：
 * - 保存/读取章节内容到IndexedDB
 * - 缓存大小管理（LRU清理）
 * - 缓存有效性验证
 */
export class ChapterCacheManager {
    private dbName = 'readest-chapter-cache';
    private storeName = 'chapters';
    private db: IDBDatabase | null = null;
    private readonly MAX_CACHE_SIZE = 500 * 1024 * 1024; // 500MB
    private readonly MAX_PER_BOOK = 100 * 1024 * 1024; // 100MB per book
    private readonly CLEANUP_THRESHOLD = 0.9; // 清理阈值 90%

    async init(): Promise<void> {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(this.dbName, 2);

            request.onerror = () => {
                console.error('[ChapterCache] Error opening database:', request.error);
                reject(request.error);
            };

            request.onsuccess = () => {
                this.db = request.result;
                console.log('[ChapterCache] Database initialized');
                resolve();
            };

            request.onupgradeneeded = (event) => {
                const db = (event.target as IDBOpenDBRequest).result;

                // 创建章节存储
                if (!db.objectStoreNames.contains(this.storeName)) {
                    const store = db.createObjectStore(this.storeName, {
                        keyPath: ['bookHash', 'spineIndex'],
                    });
                    // 添加索引以支持快速查询
                    store.createIndex('bookHash', 'bookHash', { unique: false });
                    store.createIndex('accessedAt', 'accessedAt', { unique: false });
                    store.createIndex('cachedAt', 'cachedAt', { unique: false });
                    console.log('[ChapterCache] Object store created');
                }
            };
        });
    }

    /**
     * 保存章节内容到缓存
     */
    async saveChapter(entry: Omit<ChapterCacheEntry, 'cachedAt' | 'accessedAt'>): Promise<void> {
        if (!this.db) await this.init();

        const now = Date.now();
        const cacheEntry: ChapterCacheEntry = {
            ...entry,
            cachedAt: now,
            accessedAt: now,
        };

        return new Promise((resolve, reject) => {
            const transaction = this.db!.transaction([this.storeName], 'readwrite');
            const store = transaction.objectStore(this.storeName);
            const request = store.put(cacheEntry);

            request.onerror = () => {
                console.error('[ChapterCache] Error saving chapter:', request.error);
                reject(request.error);
            };

            request.onsuccess = () => {
                console.log(
                    `[ChapterCache] Saved chapter: ${entry.bookHash}/${entry.spineIndex} (${(entry.size / 1024).toFixed(2)}KB)`
                );
                resolve();
            };
        });
    }

    /**
     * 从缓存获取章节
     */
    async getChapter(bookHash: string, spineIndex: number): Promise<ChapterCacheEntry | null> {
        if (!this.db) await this.init();

        return new Promise((resolve, reject) => {
            const transaction = this.db!.transaction([this.storeName], 'readwrite');
            const store = transaction.objectStore(this.storeName);
            const request = store.get([bookHash, spineIndex]);

            request.onerror = () => {
                console.error('[ChapterCache] Error getting chapter:', request.error);
                reject(request.error);
            };

            request.onsuccess = () => {
                const entry = request.result as ChapterCacheEntry | undefined;
                if (entry) {
                    // 更新访问时间（用于LRU）
                    const updateRequest = store.put({
                        ...entry,
                        accessedAt: Date.now(),
                    });

                    updateRequest.onerror = () => {
                        console.warn('[ChapterCache] Error updating access time:', updateRequest.error);
                    };

                    console.log(`[ChapterCache] Hit: ${bookHash}/${spineIndex}`);
                } else {
                    console.log(`[ChapterCache] Miss: ${bookHash}/${spineIndex}`);
                }
                resolve(entry ?? null);
            };
        });
    }

    /**
     * 删除特定章节
     */
    async deleteChapter(bookHash: string, spineIndex: number): Promise<void> {
        if (!this.db) await this.init();

        return new Promise((resolve, reject) => {
            const transaction = this.db!.transaction([this.storeName], 'readwrite');
            const store = transaction.objectStore(this.storeName);
            const request = store.delete([bookHash, spineIndex]);

            request.onerror = () => reject(request.error);
            request.onsuccess = () => {
                console.log(`[ChapterCache] Deleted: ${bookHash}/${spineIndex}`);
                resolve();
            };
        });
    }

    /**
     * 删除书籍的所有章节缓存
     */
    async deleteBook(bookHash: string): Promise<number> {
        if (!this.db) await this.init();

        return new Promise((resolve, reject) => {
            const transaction = this.db!.transaction([this.storeName], 'readwrite');
            const store = transaction.objectStore(this.storeName);
            const index = store.index('bookHash');
            const request = index.openCursor(IDBKeyRange.only(bookHash));

            let deleted = 0;

            request.onerror = () => reject(request.error);
            request.onsuccess = () => {
                const cursor = request.result;
                if (cursor) {
                    cursor.delete();
                    deleted++;
                    cursor.continue();
                } else {
                    console.log(`[ChapterCache] Deleted ${deleted} chapters for book: ${bookHash}`);
                    resolve(deleted);
                }
            };
        });
    }

    /**
     * 获取书籍的缓存统计
     */
    async getBookStats(bookHash: string): Promise<CacheStats> {
        if (!this.db) await this.init();

        return new Promise((resolve, reject) => {
            const transaction = this.db!.transaction([this.storeName], 'readonly');
            const store = transaction.objectStore(this.storeName);
            const index = store.index('bookHash');
            const request = index.openCursor(IDBKeyRange.only(bookHash));

            let chapterCount = 0;
            let totalSize = 0;

            request.onerror = () => reject(request.error);
            request.onsuccess = () => {
                const cursor = request.result;
                if (cursor) {
                    const entry = cursor.value as ChapterCacheEntry;
                    chapterCount++;
                    totalSize += entry.size;
                    cursor.continue();
                } else {
                    resolve({
                        bookHash,
                        chapterCount,
                        totalSize,
                        percent: (totalSize / this.MAX_PER_BOOK) * 100,
                    });
                }
            };
        });
    }

    /**
     * 获取所有缓存的统计
     */
    async getTotalStats(): Promise<{
        totalChapters: number;
        totalSize: number;
        percent: number;
        books: CacheStats[];
    }> {
        if (!this.db) await this.init();

        return new Promise((resolve, reject) => {
            const transaction = this.db!.transaction([this.storeName], 'readonly');
            const store = transaction.objectStore(this.storeName);
            const request = store.openCursor();

            let totalChapters = 0;
            let totalSize = 0;
            const bookStats = new Map<string, CacheStats>();

            request.onerror = () => reject(request.error);
            request.onsuccess = () => {
                const cursor = request.result;
                if (cursor) {
                    const entry = cursor.value as ChapterCacheEntry;
                    totalChapters++;
                    totalSize += entry.size;

                    if (!bookStats.has(entry.bookHash)) {
                        bookStats.set(entry.bookHash, {
                            bookHash: entry.bookHash,
                            chapterCount: 0,
                            totalSize: 0,
                            percent: 0,
                        });
                    }

                    const stats = bookStats.get(entry.bookHash)!;
                    stats.chapterCount++;
                    stats.totalSize += entry.size;
                    stats.percent = (stats.totalSize / this.MAX_PER_BOOK) * 100;

                    cursor.continue();
                } else {
                    resolve({
                        totalChapters,
                        totalSize,
                        percent: (totalSize / this.MAX_CACHE_SIZE) * 100,
                        books: Array.from(bookStats.values()),
                    });
                }
            };
        });
    }

    /**
     * 自动清理缓存（LRU策略）
     * 当缓存超过阈值时触发
     */
    async cleanup(): Promise<void> {
        const stats = await this.getTotalStats();

        if (stats.percent < this.CLEANUP_THRESHOLD * 100) {
            console.log(
                `[ChapterCache] Cache at ${stats.percent.toFixed(1)}%, no cleanup needed`
            );
            return;
        }

        console.log(
            `[ChapterCache] Cache at ${stats.percent.toFixed(1)}%, starting cleanup...`
        );

        if (!this.db) await this.init();

        return new Promise((resolve, reject) => {
            const transaction = this.db!.transaction([this.storeName], 'readwrite');
            const store = transaction.objectStore(this.storeName);
            const index = store.index('accessedAt');
            const request = index.openCursor();

            let deleted = 0;
            const targetSize = this.MAX_CACHE_SIZE * 0.7; // 清理到 70%

            request.onerror = () => reject(request.error);
            request.onsuccess = () => {
                const cursor = request.result;
                if (cursor && stats.totalSize > targetSize) {
                    cursor.delete();
                    stats.totalSize -= (cursor.value as ChapterCacheEntry).size;
                    deleted++;
                    cursor.continue();
                } else {
                    console.log(
                        `[ChapterCache] Cleaned ${deleted} chapters, size reduced to ${(stats.totalSize / 1024 / 1024).toFixed(2)}MB`
                    );
                    resolve();
                }
            };
        });
    }

    /**
     * 清空所有缓存
     */
    async clear(): Promise<void> {
        if (!this.db) await this.init();

        return new Promise((resolve, reject) => {
            const transaction = this.db!.transaction([this.storeName], 'readwrite');
            const store = transaction.objectStore(this.storeName);
            const request = store.clear();

            request.onerror = () => reject(request.error);
            request.onsuccess = () => {
                console.log('[ChapterCache] All caches cleared');
                resolve();
            };
        });
    }
}

// 全局单例实例
export const chapterCache = new ChapterCacheManager();
