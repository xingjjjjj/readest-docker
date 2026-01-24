/**
 * IndexedDB 缓存管理器
 * 用于缓存书籍内容和封面图片，支持离线访问
 */

const DB_NAME = 'readest-cache';
const DB_VERSION = 1;
const STORE_NAME = 'files';

export interface CacheEntry {
    key: string; // 文件路径或 URL
    data: ArrayBuffer;
    etag?: string;
    mimeType: string;
    timestamp: number;
    expiresAt?: number; // 过期时间戳
}

class IndexedDBCache {
    private db: IDBDatabase | null = null;
    private initPromise: Promise<void> | null = null;

    async init(): Promise<void> {
        if (this.db) return;
        if (this.initPromise) return this.initPromise;

        this.initPromise = new Promise((resolve, reject) => {
            const request = indexedDB.open(DB_NAME, DB_VERSION);

            request.onerror = () => {
                console.error('[IndexedDBCache] Failed to open database:', request.error);
                reject(request.error);
            };

            request.onsuccess = () => {
                this.db = request.result;
                console.log('[IndexedDBCache] ✓ Database opened successfully');
                resolve();
            };

            request.onupgradeneeded = (event) => {
                const db = (event.target as IDBOpenDBRequest).result;
                if (!db.objectStoreNames.contains(STORE_NAME)) {
                    const store = db.createObjectStore(STORE_NAME, { keyPath: 'key' });
                    store.createIndex('expiresAt', 'expiresAt', { unique: false });
                    console.log('[IndexedDBCache] ✓ Object store created');
                }
            };
        });

        return this.initPromise;
    }

    /**
     * 获取缓存的文件
     */
    async get(key: string): Promise<CacheEntry | null> {
        await this.init();
        if (!this.db) return null;

        return new Promise((resolve, reject) => {
            const transaction = this.db!.transaction(STORE_NAME, 'readonly');
            const store = transaction.objectStore(STORE_NAME);
            const request = store.get(key);

            request.onerror = () => reject(request.error);
            request.onsuccess = () => {
                const entry = request.result as CacheEntry | undefined;

                // 检查是否过期
                if (entry && entry.expiresAt && Date.now() > entry.expiresAt) {
                    console.log('[IndexedDBCache] Cache expired for:', key);
                    // 异步删除过期项
                    this.delete(key).catch(e => console.error('Failed to delete expired cache:', e));
                    resolve(null);
                } else {
                    if (entry) {
                        console.log('[IndexedDBCache] ✓ Cache hit for:', key);
                    }
                    resolve(entry || null);
                }
            };
        });
    }

    /**
     * 存储文件到缓存
     */
    async set(
        key: string,
        data: ArrayBuffer,
        mimeType: string,
        options?: {
            etag?: string;
            ttl?: number; // 生存时间（毫秒）
        },
    ): Promise<void> {
        await this.init();
        if (!this.db) return;

        const entry: CacheEntry = {
            key,
            data,
            mimeType,
            etag: options?.etag,
            timestamp: Date.now(),
            expiresAt: options?.ttl ? Date.now() + options.ttl : undefined,
        };

        return new Promise((resolve, reject) => {
            const transaction = this.db!.transaction(STORE_NAME, 'readwrite');
            const store = transaction.objectStore(STORE_NAME);
            const request = store.put(entry);

            request.onerror = () => reject(request.error);
            request.onsuccess = () => {
                console.log('[IndexedDBCache] ✓ Cache saved for:', key);
                resolve();
            };
        });
    }

    /**
     * 删除缓存
     */
    async delete(key: string): Promise<void> {
        await this.init();
        if (!this.db) return;

        return new Promise((resolve, reject) => {
            const transaction = this.db!.transaction(STORE_NAME, 'readwrite');
            const store = transaction.objectStore(STORE_NAME);
            const request = store.delete(key);

            request.onerror = () => reject(request.error);
            request.onsuccess = () => {
                console.log('[IndexedDBCache] ✓ Cache deleted for:', key);
                resolve();
            };
        });
    }

    /**
     * 清除所有缓存
     */
    async clear(): Promise<void> {
        await this.init();
        if (!this.db) return;

        return new Promise((resolve, reject) => {
            const transaction = this.db!.transaction(STORE_NAME, 'readwrite');
            const store = transaction.objectStore(STORE_NAME);
            const request = store.clear();

            request.onerror = () => reject(request.error);
            request.onsuccess = () => {
                console.log('[IndexedDBCache] ✓ All caches cleared');
                resolve();
            };
        });
    }

    /**
     * 清除过期缓存
     */
    async clearExpired(): Promise<number> {
        await this.init();
        if (!this.db) return 0;

        return new Promise((resolve, reject) => {
            const transaction = this.db!.transaction(STORE_NAME, 'readwrite');
            const store = transaction.objectStore(STORE_NAME);
            const index = store.index('expiresAt');
            const range = IDBKeyRange.upperBound(Date.now());
            const request = index.openCursor(range);

            let deletedCount = 0;

            request.onerror = () => reject(request.error);
            request.onsuccess = (event) => {
                const cursor = (event.target as IDBRequest).result;
                if (cursor) {
                    console.log('[IndexedDBCache] Deleting expired cache:', cursor.key);
                    store.delete(cursor.primaryKey);
                    deletedCount++;
                    cursor.continue();
                } else {
                    console.log('[IndexedDBCache] ✓ Cleared', deletedCount, 'expired caches');
                    resolve(deletedCount);
                }
            };
        });
    }

    /**
     * 获取缓存统计信息
     */
    async getStats(): Promise<{
        totalEntries: number;
        totalSize: number; // 字节
        oldestEntry?: { key: string; timestamp: number };
        newestEntry?: { key: string; timestamp: number };
    }> {
        await this.init();
        if (!this.db) {
            return { totalEntries: 0, totalSize: 0 };
        }

        return new Promise((resolve, reject) => {
            const transaction = this.db!.transaction(STORE_NAME, 'readonly');
            const store = transaction.objectStore(STORE_NAME);
            const request = store.getAll();

            request.onerror = () => reject(request.error);
            request.onsuccess = () => {
                const entries = request.result as CacheEntry[];
                let totalSize = 0;
                let oldestEntry: { key: string; timestamp: number } | undefined;
                let newestEntry: { key: string; timestamp: number } | undefined;

                entries.forEach((entry) => {
                    totalSize += entry.data.byteLength;
                    if (!oldestEntry || entry.timestamp < oldestEntry.timestamp) {
                        oldestEntry = { key: entry.key, timestamp: entry.timestamp };
                    }
                    if (!newestEntry || entry.timestamp > newestEntry.timestamp) {
                        newestEntry = { key: entry.key, timestamp: entry.timestamp };
                    }
                });

                console.log('[IndexedDBCache] Stats:', {
                    entries: entries.length,
                    size: (totalSize / 1024 / 1024).toFixed(2) + ' MB',
                });

                resolve({
                    totalEntries: entries.length,
                    totalSize,
                    oldestEntry,
                    newestEntry,
                });
            };
        });
    }
}

export const indexedDBCache = new IndexedDBCache();
