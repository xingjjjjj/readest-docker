/**
 * 书籍元数据缓存系统
 * 使用 IndexedDB 缓存书籍信息，避免重复解析
 */

export interface CachedBookMetadata {
    hash: string;
    title: string;
    author?: string;
    format: string;
    // 书籍的 spine（章节列表）信息 - 用于快速导航
    spineItems?: Array<{
        href: string;
        mediaType: string;
        title?: string;
    }>;
    // 目录结构
    toc?: Array<{
        label: string;
        href: string;
        subitems?: any[];
    }>;
    // 书籍总 CFI 范围
    range?: {
        start: string;
        end: string;
    };
    // 缓存时间戳
    cachedAt: number;
    // 文件修改时间
    fileModifiedTime: number;
}

class BookMetadataCache {
    private dbName = 'readest-books';
    private storeName = 'metadata';
    private db: IDBDatabase | null = null;

    async init(): Promise<void> {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(this.dbName, 1);

            request.onerror = () => reject(request.error);
            request.onsuccess = () => {
                this.db = request.result;
                resolve();
            };

            request.onupgradeneeded = (event) => {
                const db = (event.target as IDBOpenDBRequest).result;
                if (!db.objectStoreNames.contains(this.storeName)) {
                    db.createObjectStore(this.storeName, { keyPath: 'hash' });
                }
            };
        });
    }

    /**
     * 获取缓存的书籍元数据
     * @param hash 书籍 hash
     * @param fileModifiedTime 文件修改时间，用于验证缓存有效性
     */
    async get(hash: string, fileModifiedTime: number): Promise<CachedBookMetadata | null> {
        if (!this.db) await this.init();

        return new Promise((resolve, reject) => {
            const transaction = this.db!.transaction([this.storeName], 'readonly');
            const store = transaction.objectStore(this.storeName);
            const request = store.get(hash);

            request.onerror = () => reject(request.error);
            request.onsuccess = () => {
                const cached = request.result as CachedBookMetadata | undefined;
                // 如果文件被修改过，缓存失效
                if (cached && cached.fileModifiedTime === fileModifiedTime) {
                    resolve(cached);
                } else {
                    resolve(null);
                }
            };
        });
    }

    /**
     * 保存书籍元数据到缓存
     */
    async set(metadata: CachedBookMetadata): Promise<void> {
        if (!this.db) await this.init();

        return new Promise((resolve, reject) => {
            const transaction = this.db!.transaction([this.storeName], 'readwrite');
            const store = transaction.objectStore(this.storeName);
            const request = store.put(metadata);

            request.onerror = () => reject(request.error);
            request.onsuccess = () => resolve();
        });
    }

    /**
     * 删除缓存
     */
    async delete(hash: string): Promise<void> {
        if (!this.db) await this.init();

        return new Promise((resolve, reject) => {
            const transaction = this.db!.transaction([this.storeName], 'readwrite');
            const store = transaction.objectStore(this.storeName);
            const request = store.delete(hash);

            request.onerror = () => reject(request.error);
            request.onsuccess = () => resolve();
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
            request.onsuccess = () => resolve();
        });
    }
}

export const bookMetadataCache = new BookMetadataCache();
