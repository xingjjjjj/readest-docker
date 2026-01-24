(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/readest-app/src/utils/file.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NativeFile",
    ()=>NativeFile,
    "RemoteFile",
    ()=>RemoteFile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$plugin$2d$fs$40$2$2e$4$2e$5$2f$node_modules$2f40$tauri$2d$apps$2f$plugin$2d$fs$2f$dist$2d$js$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tauri-apps+plugin-fs@2.4.5/node_modules/@tauri-apps/plugin-fs/dist-js/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/misc.ts [client] (ecmascript)");
;
;
class DeferredBlob extends Blob {
    #dataPromise;
    #type;
    constructor(dataPromise, type){
        super();
        this.#dataPromise = dataPromise;
        this.#type = type;
    }
    async arrayBuffer() {
        const data = await this.#dataPromise;
        return data;
    }
    async text() {
        const data = await this.#dataPromise;
        return new TextDecoder().decode(data);
    }
    stream() {
        return new ReadableStream({
            start: async (controller)=>{
                const data = await this.#dataPromise;
                const reader = new ReadableStream({
                    start (controller) {
                        controller.enqueue(new Uint8Array(data));
                        controller.close();
                    }
                }).getReader();
                const pump = ()=>reader.read().then(({ done, value })=>{
                        if (done) {
                            controller.close();
                            return Promise.resolve();
                        }
                        controller.enqueue(value);
                        return pump();
                    });
                return pump();
            }
        });
    }
    get type() {
        return this.#type;
    }
}
class NativeFile extends File {
    #handle = null;
    #fp;
    #name;
    #baseDir;
    #lastModified = 0;
    #size = -1;
    #type = '';
    static MAX_CACHE_CHUNK_SIZE = 1024 * 1024;
    static MAX_CACHE_ITEMS_SIZE = 50;
    #order = [];
    #cache = new Map();
    #pendingReads = new Map();
    constructor(fp, name, baseDir = null, type = ''){
        super([], name || fp, {
            type
        });
        this.#fp = fp;
        this.#baseDir = baseDir;
        this.#name = name || fp;
    }
    async open() {
        this.#handle = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$plugin$2d$fs$40$2$2e$4$2e$5$2f$node_modules$2f40$tauri$2d$apps$2f$plugin$2d$fs$2f$dist$2d$js$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["open"])(this.#fp, this.#baseDir ? {
            baseDir: this.#baseDir
        } : undefined);
        const stats = await this.#handle.stat();
        this.#size = stats.size;
        this.#lastModified = stats.mtime ? stats.mtime.getTime() : Date.now();
        return this;
    }
    async close() {
        if (this.#handle) {
            await this.#handle.close();
            this.#handle = null;
        }
        this.#cache.clear();
        this.#order = [];
    }
    get name() {
        return this.#name;
    }
    get type() {
        return this.#type;
    }
    get size() {
        return this.#size;
    }
    get lastModified() {
        return this.#lastModified;
    }
    async stat() {
        return this.#handle?.stat();
    }
    async seek(offset, whence) {
        if (!this.#handle) {
            throw new Error('File handle is not open');
        }
        return this.#handle.seek(offset, whence);
    }
    // exclusive reading of the end: [start, end)
    async readData(start, end) {
        start = Math.max(0, start);
        end = Math.max(start, Math.min(this.size, end));
        const size = end - start;
        if (size > NativeFile.MAX_CACHE_CHUNK_SIZE) {
            const handle = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$plugin$2d$fs$40$2$2e$4$2e$5$2f$node_modules$2f40$tauri$2d$apps$2f$plugin$2d$fs$2f$dist$2d$js$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["open"])(this.#fp, this.#baseDir ? {
                baseDir: this.#baseDir
            } : undefined);
            try {
                await handle.seek(start, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$plugin$2d$fs$40$2$2e$4$2e$5$2f$node_modules$2f40$tauri$2d$apps$2f$plugin$2d$fs$2f$dist$2d$js$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["SeekMode"].Start);
                const buffer = new Uint8Array(size);
                await handle.read(buffer);
                return buffer.buffer;
            } finally{
                await handle.close();
            }
        }
        const cachedChunkStart = Array.from(this.#cache.keys()).find((chunkStart)=>{
            const buffer = this.#cache.get(chunkStart);
            return start >= chunkStart && end <= chunkStart + buffer.byteLength;
        });
        if (cachedChunkStart !== undefined) {
            this.#updateAccessOrder(cachedChunkStart);
            const buffer = this.#cache.get(cachedChunkStart);
            const offset = start - cachedChunkStart;
            return buffer.slice(offset, offset + size);
        }
        const readKey = `${start}-${end}`;
        const pendingRead = this.#pendingReads.get(readKey);
        if (pendingRead) {
            return pendingRead;
        }
        const readPromise = this.#readAndCacheChunkSafe(start, size);
        this.#pendingReads.set(readKey, readPromise);
        try {
            return await readPromise;
        } finally{
            this.#pendingReads.delete(readKey);
        }
    }
    async #readAndCacheChunkSafe(start, size) {
        const handle = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$plugin$2d$fs$40$2$2e$4$2e$5$2f$node_modules$2f40$tauri$2d$apps$2f$plugin$2d$fs$2f$dist$2d$js$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["open"])(this.#fp, this.#baseDir ? {
            baseDir: this.#baseDir
        } : undefined);
        try {
            const chunkStart = Math.max(0, start - 1024);
            const chunkEnd = Math.min(this.size, start + NativeFile.MAX_CACHE_CHUNK_SIZE);
            const chunkSize = chunkEnd - chunkStart;
            await handle.seek(chunkStart, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$plugin$2d$fs$40$2$2e$4$2e$5$2f$node_modules$2f40$tauri$2d$apps$2f$plugin$2d$fs$2f$dist$2d$js$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["SeekMode"].Start);
            const buffer = new Uint8Array(chunkSize);
            await handle.read(buffer);
            // Only one thread reaches here per unique range
            this.#cache.set(chunkStart, buffer.buffer);
            this.#updateAccessOrder(chunkStart);
            this.#ensureCacheSize();
            const offset = start - chunkStart;
            return buffer.buffer.slice(offset, offset + size);
        } finally{
            await handle.close();
        }
    }
    #updateAccessOrder(chunkStart) {
        const index = this.#order.indexOf(chunkStart);
        if (index > -1) {
            this.#order.splice(index, 1);
        }
        this.#order.unshift(chunkStart);
    }
    #ensureCacheSize() {
        while(this.#cache.size > NativeFile.MAX_CACHE_ITEMS_SIZE){
            const oldestKey = this.#order.pop();
            if (oldestKey !== undefined) {
                this.#cache.delete(oldestKey);
            }
        }
    }
    slice(start = 0, end = this.size, contentType = this.type) {
        // console.log(`Slicing: ${start}-${end}, size: ${end - start}`);
        const dataPromise = this.readData(start, end);
        return new DeferredBlob(dataPromise, contentType);
    }
    stream() {
        const CHUNK_SIZE = 1024 * 1024;
        let offset = 0;
        return new ReadableStream({
            pull: async (controller)=>{
                if (!this.#handle) {
                    controller.error(new Error('File handle is not open'));
                    return;
                }
                if (offset >= this.size) {
                    controller.close();
                    return;
                }
                const end = Math.min(offset + CHUNK_SIZE, this.size);
                const buffer = new Uint8Array(end - offset);
                await this.#handle.seek(offset, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$plugin$2d$fs$40$2$2e$4$2e$5$2f$node_modules$2f40$tauri$2d$apps$2f$plugin$2d$fs$2f$dist$2d$js$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["SeekMode"].Start);
                const bytesRead = await this.#handle.read(buffer);
                if (bytesRead === null || bytesRead === 0) {
                    controller.close();
                    return;
                }
                controller.enqueue(buffer.subarray(0, bytesRead));
                offset += bytesRead;
            },
            cancel: async ()=>{
                await this.#handle?.close();
            }
        });
    }
    async text() {
        const blob = this.slice(0, this.size);
        return blob.text();
    }
    async arrayBuffer() {
        const blob = this.slice(0, this.size);
        return blob.arrayBuffer();
    }
}
class RemoteFile extends File {
    url;
    #name;
    #lastModified;
    #size = -1;
    #type = '';
    #order = [];
    #cache = new Map();
    #pendingFetches = new Map();
    static MAX_CACHE_CHUNK_SIZE = 1024 * 128;
    static MAX_CACHE_ITEMS_SIZE = 128;
    constructor(url, name, type = '', lastModified = Date.now()){
        const basename = url.split('/').pop() || 'remote-file';
        super([], name || basename, {
            type,
            lastModified
        });
        this.url = url;
        this.#name = name || basename;
        this.#type = type;
        this.#lastModified = lastModified;
    }
    get name() {
        return this.#name;
    }
    get type() {
        return this.#type;
    }
    get size() {
        return this.#size;
    }
    get lastModified() {
        return this.#lastModified;
    }
    async _open_with_head() {
        const response = await fetch(this.url, {
            method: 'HEAD'
        });
        if (!response.ok) {
            throw new Error(`Failed to fetch file size: ${response.status}`);
        }
        this.#size = Number(response.headers.get('content-length'));
        this.#type = response.headers.get('content-type') || '';
        return this;
    }
    async _open_with_range() {
        const response = await fetch(this.url, {
            headers: {
                Range: `bytes=${0}-${1023}`
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to fetch file size: ${response.status}`);
        }
        this.#size = Number(response.headers.get('content-range')?.split('/')[1]);
        this.#type = response.headers.get('content-type') || '';
        return this;
    }
    async open() {
        // FIXME: currently HEAD request in asset protocol is not supported on Android
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getOSPlatform"])() === 'android') {
            return this._open_with_range();
        } else {
            return this._open_with_head();
        }
    }
    async close() {
        this.#cache.clear();
        this.#order = [];
    }
    async fetchRangePart(start, end) {
        start = Math.max(0, start);
        end = Math.min(this.size - 1, end);
        // console.log(`Fetching range: ${start}-${end}, size: ${end - start + 1}`);
        const response = await fetch(this.url, {
            headers: {
                Range: `bytes=${start}-${end}`
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to fetch range: ${response.status}`);
        }
        return response.arrayBuffer();
    }
    // inclusive reading of the end: [start, end]
    async fetchRange(start, end) {
        const rangeSize = end - start + 1;
        const MAX_RANGE_LEN = 1024 * 1000;
        if (rangeSize > MAX_RANGE_LEN) {
            const buffers = [];
            for(let currentStart = start; currentStart <= end; currentStart += MAX_RANGE_LEN){
                const currentEnd = Math.min(currentStart + MAX_RANGE_LEN - 1, end);
                buffers.push(await this.fetchRangePart(currentStart, currentEnd));
            }
            const totalSize = buffers.reduce((sum, buffer)=>sum + buffer.byteLength, 0);
            const combinedBuffer = new Uint8Array(totalSize);
            let offset = 0;
            for (const buffer of buffers){
                combinedBuffer.set(new Uint8Array(buffer), offset);
                offset += buffer.byteLength;
            }
            return combinedBuffer.buffer;
        } else if (rangeSize > RemoteFile.MAX_CACHE_CHUNK_SIZE) {
            return this.fetchRangePart(start, end);
        } else {
            const cachedChunkStart = Array.from(this.#cache.keys()).find((chunkStart)=>{
                const buffer = this.#cache.get(chunkStart);
                const bufferSize = buffer.byteLength;
                return start >= chunkStart && end <= chunkStart + bufferSize;
            });
            if (cachedChunkStart !== undefined) {
                this.#updateAccessOrder(cachedChunkStart);
                const buffer = this.#cache.get(cachedChunkStart);
                const offset = start - cachedChunkStart;
                return buffer.slice(offset, offset + rangeSize);
            }
            const fetchKey = `${start}-${end}`;
            const pendingFetch = this.#pendingFetches.get(fetchKey);
            if (pendingFetch) {
                return pendingFetch;
            }
            const fetchPromise = this.#fetchAndCacheChunkSafe(start, end, rangeSize);
            this.#pendingFetches.set(fetchKey, fetchPromise);
            try {
                return await fetchPromise;
            } finally{
                this.#pendingFetches.delete(fetchKey);
            }
        }
    }
    async #fetchAndCacheChunkSafe(start, end, rangeSize) {
        const chunkStart = Math.max(0, start - 1024);
        const chunkEnd = Math.max(end, start + RemoteFile.MAX_CACHE_CHUNK_SIZE - 1024 - 1);
        const buffer = await this.fetchRangePart(chunkStart, chunkEnd);
        // Only one thread reaches here per unique range
        this.#cache.set(chunkStart, buffer);
        this.#updateAccessOrder(chunkStart);
        this.#ensureCacheSize();
        const offset = start - chunkStart;
        return buffer.slice(offset, offset + rangeSize);
    }
    #updateAccessOrder(chunkStart) {
        const index = this.#order.indexOf(chunkStart);
        if (index > -1) {
            this.#order.splice(index, 1);
        }
        this.#order.unshift(chunkStart);
    }
    #ensureCacheSize() {
        while(this.#cache.size > RemoteFile.MAX_CACHE_ITEMS_SIZE){
            const oldestKey = this.#order.pop();
            if (oldestKey !== undefined) {
                this.#cache.delete(oldestKey);
            }
        }
    }
    slice(start = 0, end = this.size, contentType = this.type) {
        // console.log(`Slicing: ${start}-${end}, size: ${end - start}`);
        const dataPromise = this.fetchRange(start, end - 1);
        return new DeferredBlob(dataPromise, contentType);
    }
    async text() {
        const blob = this.slice(0, this.size);
        return blob.text();
    }
    async arrayBuffer() {
        const blob = this.slice(0, this.size);
        return blob.arrayBuffer();
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/readest-app/src/utils/files.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "copyFiles",
    ()=>copyFiles
]);
const copyFiles = async (appService, srcDir, dstDir)=>{
    let filesToCopy = [];
    try {
        filesToCopy = await appService.readDirectory(srcDir, 'None');
    } catch  {
        throw new Error(`Dir ${srcDir} failed to read.`);
    }
    for(let i = 0; i < filesToCopy.length; i++){
        const file = filesToCopy[i];
        const srcPath = `${srcDir}/${file.path}`;
        const destPath = `${dstDir}/${file.path}`;
        await appService.copyFile(srcPath, destPath, 'None');
    }
    const filesCopied = await appService.readDirectory(dstDir, 'None');
    for (const file of filesToCopy){
        if (!filesCopied.find((f)=>f.path === file.path && f.size === file.size)) {
            throw new Error(`File ${file.path} failed to copy.`);
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/readest-app/src/utils/indexedDBCache.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * IndexedDB 缓存管理器
 * 用于缓存书籍内容和封面图片，支持离线访问
 */ __turbopack_context__.s([
    "indexedDBCache",
    ()=>indexedDBCache
]);
const DB_NAME = 'readest-cache';
const DB_VERSION = 1;
const STORE_NAME = 'files';
class IndexedDBCache {
    db = null;
    initPromise = null;
    async init() {
        if (this.db) return;
        if (this.initPromise) return this.initPromise;
        this.initPromise = new Promise((resolve, reject)=>{
            const request = indexedDB.open(DB_NAME, DB_VERSION);
            request.onerror = ()=>{
                console.error('[IndexedDBCache] Failed to open database:', request.error);
                reject(request.error);
            };
            request.onsuccess = ()=>{
                this.db = request.result;
                console.log('[IndexedDBCache] ✓ Database opened successfully');
                resolve();
            };
            request.onupgradeneeded = (event)=>{
                const db = event.target.result;
                if (!db.objectStoreNames.contains(STORE_NAME)) {
                    const store = db.createObjectStore(STORE_NAME, {
                        keyPath: 'key'
                    });
                    store.createIndex('expiresAt', 'expiresAt', {
                        unique: false
                    });
                    console.log('[IndexedDBCache] ✓ Object store created');
                }
            };
        });
        return this.initPromise;
    }
    /**
     * 获取缓存的文件
     */ async get(key) {
        await this.init();
        if (!this.db) return null;
        return new Promise((resolve, reject)=>{
            const transaction = this.db.transaction(STORE_NAME, 'readonly');
            const store = transaction.objectStore(STORE_NAME);
            const request = store.get(key);
            request.onerror = ()=>reject(request.error);
            request.onsuccess = ()=>{
                const entry = request.result;
                // 检查是否过期
                if (entry && entry.expiresAt && Date.now() > entry.expiresAt) {
                    console.log('[IndexedDBCache] Cache expired for:', key);
                    // 异步删除过期项
                    this.delete(key).catch((e)=>console.error('Failed to delete expired cache:', e));
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
     */ async set(key, data, mimeType, options) {
        await this.init();
        if (!this.db) return;
        const entry = {
            key,
            data,
            mimeType,
            etag: options?.etag,
            timestamp: Date.now(),
            expiresAt: options?.ttl ? Date.now() + options.ttl : undefined
        };
        return new Promise((resolve, reject)=>{
            const transaction = this.db.transaction(STORE_NAME, 'readwrite');
            const store = transaction.objectStore(STORE_NAME);
            const request = store.put(entry);
            request.onerror = ()=>reject(request.error);
            request.onsuccess = ()=>{
                console.log('[IndexedDBCache] ✓ Cache saved for:', key);
                resolve();
            };
        });
    }
    /**
     * 删除缓存
     */ async delete(key) {
        await this.init();
        if (!this.db) return;
        return new Promise((resolve, reject)=>{
            const transaction = this.db.transaction(STORE_NAME, 'readwrite');
            const store = transaction.objectStore(STORE_NAME);
            const request = store.delete(key);
            request.onerror = ()=>reject(request.error);
            request.onsuccess = ()=>{
                console.log('[IndexedDBCache] ✓ Cache deleted for:', key);
                resolve();
            };
        });
    }
    /**
     * 清除所有缓存
     */ async clear() {
        await this.init();
        if (!this.db) return;
        return new Promise((resolve, reject)=>{
            const transaction = this.db.transaction(STORE_NAME, 'readwrite');
            const store = transaction.objectStore(STORE_NAME);
            const request = store.clear();
            request.onerror = ()=>reject(request.error);
            request.onsuccess = ()=>{
                console.log('[IndexedDBCache] ✓ All caches cleared');
                resolve();
            };
        });
    }
    /**
     * 清除过期缓存
     */ async clearExpired() {
        await this.init();
        if (!this.db) return 0;
        return new Promise((resolve, reject)=>{
            const transaction = this.db.transaction(STORE_NAME, 'readwrite');
            const store = transaction.objectStore(STORE_NAME);
            const index = store.index('expiresAt');
            const range = IDBKeyRange.upperBound(Date.now());
            const request = index.openCursor(range);
            let deletedCount = 0;
            request.onerror = ()=>reject(request.error);
            request.onsuccess = (event)=>{
                const cursor = event.target.result;
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
     */ async getStats() {
        await this.init();
        if (!this.db) {
            return {
                totalEntries: 0,
                totalSize: 0
            };
        }
        return new Promise((resolve, reject)=>{
            const transaction = this.db.transaction(STORE_NAME, 'readonly');
            const store = transaction.objectStore(STORE_NAME);
            const request = store.getAll();
            request.onerror = ()=>reject(request.error);
            request.onsuccess = ()=>{
                const entries = request.result;
                let totalSize = 0;
                let oldestEntry;
                let newestEntry;
                entries.forEach((entry)=>{
                    totalSize += entry.data.byteLength;
                    if (!oldestEntry || entry.timestamp < oldestEntry.timestamp) {
                        oldestEntry = {
                            key: entry.key,
                            timestamp: entry.timestamp
                        };
                    }
                    if (!newestEntry || entry.timestamp > newestEntry.timestamp) {
                        newestEntry = {
                            key: entry.key,
                            timestamp: entry.timestamp
                        };
                    }
                });
                console.log('[IndexedDBCache] Stats:', {
                    entries: entries.length,
                    size: (totalSize / 1024 / 1024).toFixed(2) + ' MB'
                });
                resolve({
                    totalEntries: entries.length,
                    totalSize,
                    oldestEntry,
                    newestEntry
                });
            };
        });
    }
}
const indexedDBCache = new IndexedDBCache();
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/readest-app/src/utils/cachedFetch.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 缓存感知的文件获取管理器
 * 支持多层缓存策略：HTTP 缓存 → IndexedDB → 网络请求
 */ __turbopack_context__.s([
    "cachedFetch",
    ()=>cachedFetch,
    "cachedFetchAsBase64",
    ()=>cachedFetchAsBase64,
    "cachedFetchAsUrl",
    ()=>cachedFetchAsUrl,
    "clearExpiredFileCache",
    ()=>clearExpiredFileCache,
    "clearFileCache",
    ()=>clearFileCache,
    "getFileCacheStats",
    ()=>getFileCacheStats
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$indexedDBCache$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/indexedDBCache.ts [client] (ecmascript)");
;
const DEFAULT_OPTIONS = {
    cacheStrategy: 'cache-first',
    cacheTTL: 30 * 24 * 60 * 60 * 1000
};
/**
 * 生成缓存键
 */ function generateCacheKey(url) {
    return `file_${url}`;
}
async function cachedFetch(url, options = {}) {
    const finalOptions = {
        ...DEFAULT_OPTIONS,
        ...options
    };
    const cacheKey = generateCacheKey(url);
    console.log(`[cachedFetch] Fetching: ${url}, strategy: ${finalOptions.cacheStrategy}`);
    try {
        // 策略 1: cache-first - 优先使用缓存
        if (finalOptions.cacheStrategy === 'cache-first' && !finalOptions.bypassCache) {
            const cached = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$indexedDBCache$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["indexedDBCache"].get(cacheKey);
            if (cached) {
                console.log(`[cachedFetch] ✓ Using cached data for: ${url}`);
                // 创建虚拟响应头
                const headers = new Headers({
                    'Content-Type': cached.mimeType,
                    'Content-Length': cached.data.byteLength.toString(),
                    ...cached.etag && {
                        'ETag': cached.etag
                    }
                });
                return {
                    data: cached.data,
                    headers,
                    fromCache: true
                };
            }
        }
        // 发起网络请求
        const fetchHeaders = new Headers(finalOptions.headers || {});
        const response = await fetch(url, {
            method: 'GET',
            headers: fetchHeaders,
            signal: AbortSignal.timeout(30000)
        });
        // 处理 304 Not Modified
        if (response.status === 304) {
            console.log(`[cachedFetch] 304 Not Modified for: ${url}`);
            const cached = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$indexedDBCache$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["indexedDBCache"].get(cacheKey);
            if (cached) {
                const headers = new Headers({
                    'Content-Type': cached.mimeType,
                    'Content-Length': cached.data.byteLength.toString(),
                    'ETag': response.headers.get('ETag') || cached.etag || ''
                });
                return {
                    data: cached.data,
                    headers,
                    fromCache: true
                };
            }
        }
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        // 流式下载并记录进度
        const contentLength = parseInt(response.headers.get('Content-Length') || '0', 10);
        const reader = response.body?.getReader();
        const chunks = [];
        let receivedLength = 0;
        if (reader) {
            while(true){
                const { done, value } = await reader.read();
                if (done) break;
                chunks.push(value);
                receivedLength += value.length;
                // 触发进度回调
                if (contentLength > 0 && finalOptions.onProgress) {
                    const progress = Math.round(receivedLength / contentLength * 100);
                    finalOptions.onProgress(progress);
                }
            }
        } else {
            // Fallback 如果没有 ReadableStream 支持
            chunks.push(new Uint8Array(await response.arrayBuffer()));
        }
        // 合并分块数据
        const data = new ArrayBuffer(receivedLength);
        const dataView = new Uint8Array(data);
        let offset = 0;
        for (const chunk of chunks){
            dataView.set(chunk, offset);
            offset += chunk.length;
        }
        // 获取响应头信息
        const mimeType = response.headers.get('Content-Type') || 'application/octet-stream';
        const etag = response.headers.get('ETag');
        // 缓存数据（异步，不阻塞返回）
        if (!finalOptions.bypassCache && response.status === 200) {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$indexedDBCache$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["indexedDBCache"].set(cacheKey, data, mimeType, {
                etag: etag || undefined,
                ttl: finalOptions.cacheTTL
            }).catch((error)=>{
                console.warn(`[cachedFetch] Failed to cache ${url}:`, error);
            });
        }
        console.log(`[cachedFetch] ✓ Fetched ${(data.byteLength / 1024 / 1024).toFixed(2)} MB from network`);
        return {
            data,
            headers: response.headers,
            fromCache: false
        };
    } catch (error) {
        // 网络错误时尝试使用缓存（即使使用 network-first 策略）
        console.warn(`[cachedFetch] Network error for ${url}:`, error);
        const cached = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$indexedDBCache$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["indexedDBCache"].get(cacheKey);
        if (cached) {
            console.log(`[cachedFetch] ℹ Using stale cache due to network error: ${url}`);
            const headers = new Headers({
                'Content-Type': cached.mimeType,
                'Content-Length': cached.data.byteLength.toString(),
                'Warning': '199 - "Stale cache used due to network error"'
            });
            return {
                data: cached.data,
                headers,
                fromCache: true
            };
        }
        throw error;
    }
}
async function cachedFetchAsUrl(url, options = {}) {
    const { data, headers } = await cachedFetch(url, options);
    const mimeType = headers.get('Content-Type') || 'application/octet-stream';
    const blob = new Blob([
        data
    ], {
        type: mimeType
    });
    return URL.createObjectURL(blob);
}
async function cachedFetchAsBase64(url, options = {}) {
    const { data } = await cachedFetch(url, options);
    const bytes = new Uint8Array(data);
    let binary = '';
    for(let i = 0; i < bytes.byteLength; i++){
        binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
}
async function clearFileCache(url) {
    if (url) {
        const cacheKey = generateCacheKey(url);
        await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$indexedDBCache$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["indexedDBCache"].delete(cacheKey);
        console.log(`[cachedFetch] Cleared cache for: ${url}`);
    } else {
        await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$indexedDBCache$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["indexedDBCache"].clear();
        console.log('[cachedFetch] Cleared all file caches');
    }
}
async function clearExpiredFileCache() {
    return await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$indexedDBCache$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["indexedDBCache"].clearExpired();
}
async function getFileCacheStats() {
    return await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$indexedDBCache$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["indexedDBCache"].getStats();
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/readest-app/src/utils/txt.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TxtToEpubConverter",
    ()=>TxtToEpubConverter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$md5$2e$ts__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/md5.ts [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$path$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/path.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$lang$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/lang.ts [client] (ecmascript)");
;
;
;
const zipWriteOptions = {
    lastAccessDate: new Date(0),
    lastModDate: new Date(0)
};
const escapeXml = (str)=>{
    if (!str) return '';
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
};
class TxtToEpubConverter {
    async convert(options) {
        const { file: txtFile, author: providedAuthor, language: providedLanguage } = options;
        const fileContent = await txtFile.arrayBuffer();
        const detectedEncoding = this.detectEncoding(fileContent) || 'utf-8';
        console.log(`Detected encoding: ${detectedEncoding}`);
        const decoder = new TextDecoder(detectedEncoding);
        const txtContent = decoder.decode(fileContent).trim();
        const bookTitle = this.extractBookTitle((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$path$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getBaseFilename"])(txtFile.name));
        const fileName = `${bookTitle}.epub`;
        const fileHeader = txtContent.slice(0, 1024);
        const authorMatch = fileHeader.match(/[【\[]?作者[】\]]?[:：\s]\s*(.+)\r?\n/) || fileHeader.match(/[【\[]?\s*(.+)\s+著\s*[】\]]?\r?\n/);
        let matchedAuthor = authorMatch ? authorMatch[1].trim() : providedAuthor || '';
        try {
            matchedAuthor = matchedAuthor.replace(/^[\p{P}\p{S}]+|[\p{P}\p{S}]+$/gu, '');
        } catch  {}
        const author = matchedAuthor || providedAuthor || '';
        const language = providedLanguage || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$lang$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["detectLanguage"])(fileHeader);
        console.log(`Detected language: ${language}`);
        const identifier = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$md5$2e$ts__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["partialMD5"])(txtFile);
        const metadata = {
            bookTitle,
            author,
            language,
            identifier
        };
        let chapters = [];
        for(let i = 8; i >= 6; i--){
            chapters = this.extractChapters(txtContent, metadata, {
                linesBetweenSegments: i,
                fallbackParagraphsPerChapter: 100
            });
            if (chapters.length === 0) {
                throw new Error('No chapters detected.');
            } else if (chapters.length > 1) {
                break;
            }
        }
        const blob = await this.createEpub(chapters, metadata);
        return {
            file: new File([
                blob
            ], fileName),
            bookTitle,
            chapterCount: chapters.length,
            language
        };
    }
    extractChapters(txtContent, metadata, option) {
        const { language } = metadata;
        const { linesBetweenSegments, fallbackParagraphsPerChapter } = option;
        const segmentRegex = new RegExp(`(?:\\r?\\n){${linesBetweenSegments},}|-{8,}\r?\n`);
        const chapterRegexps = [];
        if (language === 'zh') {
            chapterRegexps.push(new RegExp(String.raw`(?:^|\n)\s*` + '(' + [
                String.raw`第[零〇一二三四五六七八九十0-9][零〇一二三四五六七八九十百千万0-9]*(?:[章卷节回讲篇封本册部话])(?:[：:、 　\(\)0-9]*[^\n-]{0,24})(?!\S)`,
                String.raw`(?:楔子|前言|简介|引言|序言|序章|总论|概论|后记)(?:[：: 　][^\n-]{0,24})?(?!\S)`,
                String.raw`chapter[\s.]*[0-9]+(?:[：:. 　]+[^\n-]{0,50})?(?!\S)`
            ].join('|') + ')', 'gui'));
            chapterRegexps.push(new RegExp(String.raw`(?:^|\n)\s*` + '(' + [
                String.raw`[一二三四五六七八九十][零〇一二三四五六七八九十百千万]?[：:、 　][^\n-]{0,24}(?=\n|$)`,
                String.raw`[0-9]+[^\n]{0,16}(?=\n|$)`
            ].join('|') + ')', 'gu'));
        } else {
            const chapterKeywords = [
                'Chapter',
                'Part',
                'Section',
                'Book',
                'Volume',
                'Act'
            ];
            const prefaceKeywords = [
                'Prologue',
                'Epilogue',
                'Introduction',
                'Foreword',
                'Preface',
                'Afterword'
            ];
            const numberPattern = String.raw`(\d+|(?:[IVXLCDM]{2,}|V|X|L|C|D|M)\b)`;
            const dotNumberPattern = String.raw`\.\d{1,4}`;
            const titlePattern = String.raw`[^\n]{0,50}`;
            const normalChapterPattern = chapterKeywords.map((k)=>String.raw`${k}\s*(?:${numberPattern}|${dotNumberPattern})(?:[:.\-–—]?\s*${titlePattern})?`).join('|');
            const prefacePattern = prefaceKeywords.map((k)=>String.raw`${k}(?:[:.\-–—]?\s*${titlePattern})?`).join('|');
            const combinedPattern = String.raw`(?:^|\n|\s)(?:${normalChapterPattern}|${prefacePattern})(?=\s|$)`;
            chapterRegexps.push(new RegExp(combinedPattern, 'gi'));
        }
        const formatSegment = (segment)=>{
            segment = escapeXml(segment);
            return segment.replace(/-{8,}|_{8,}/g, '\n').split(/\n+/).map((line)=>line.trim()).filter((line)=>line).join('</p><p>');
        };
        const joinAroundUndefined = (arr)=>arr.reduce((acc, curr, i, src)=>{
                if (curr === undefined && i > 0 && i < src.length - 1 && src[i - 1] !== undefined && src[i + 1] !== undefined) {
                    acc[acc.length - 1] += src[i + 1];
                    return acc;
                }
                if (curr !== undefined && (i === 0 || src[i - 1] !== undefined)) {
                    acc.push(curr);
                }
                return acc;
            }, []);
        const isGoodMatches = (matches, maxLength = 100000)=>{
            const meaningfulParts = matches.filter((part)=>part && part.trim().length > 0);
            if (meaningfulParts.length <= 1) return false;
            const hasLongParts = meaningfulParts.some((part)=>part.length > maxLength);
            return !hasLongParts;
        };
        const chapters = [];
        const segments = txtContent.split(segmentRegex);
        for (const segment of segments){
            const trimmedSegment = segment.replace(/<!--.*?-->/g, '').trim();
            if (!trimmedSegment) continue;
            const segmentChapters = [];
            let matches = [];
            for (const chapterRegex of chapterRegexps){
                const tryMatches = trimmedSegment.split(chapterRegex);
                if (isGoodMatches(tryMatches)) {
                    matches = joinAroundUndefined(tryMatches);
                    break;
                }
            }
            if (matches.length === 0 && fallbackParagraphsPerChapter > 0) {
                const paragraphs = trimmedSegment.split(/\n+/);
                const totalParagraphs = paragraphs.length;
                for(let i = 0; i < totalParagraphs; i += fallbackParagraphsPerChapter){
                    const chunks = paragraphs.slice(i, i + fallbackParagraphsPerChapter);
                    const formattedSegment = formatSegment(chunks.join('\n'));
                    const title = `${chapters.length + 1}`;
                    const content = `<h2>${title}</h2><p>${formattedSegment}</p>`;
                    chapters.push({
                        title,
                        content,
                        text: chunks.join('\n'),
                        isVolume: false
                    });
                }
                continue;
            }
            for(let j = 1; j < matches.length; j += 2){
                const title = matches[j]?.trim() || '';
                const content = matches[j + 1]?.trim() || '';
                let isVolume = false;
                if (language === 'zh') {
                    isVolume = /第[零〇一二三四五六七八九十百千万0-9]+(卷|本|册|部)/.test(title);
                } else {
                    isVolume = /\b(Part|Volume|Book)\b/i.test(title);
                }
                const headTitle = isVolume ? `<h1>${title}</h1>` : `<h2>${title}</h2>`;
                const formattedSegment = formatSegment(content);
                segmentChapters.push({
                    title: escapeXml(title),
                    content: `${headTitle}<p>${formattedSegment}</p>`,
                    text: content,
                    isVolume: isVolume
                });
            }
            if (matches[0] && matches[0].trim()) {
                const initialContent = matches[0].trim();
                const firstLine = initialContent.split('\n')[0].trim();
                const segmentTitle = (firstLine.length > 16 ? initialContent.split(/[\n\s\p{P}]/u)[0].trim() : firstLine) || initialContent.slice(0, 16);
                const formattedSegment = formatSegment(initialContent);
                segmentChapters.unshift({
                    title: escapeXml(segmentTitle),
                    content: `<h3></h3><p>${formattedSegment}</p>`,
                    text: initialContent,
                    isVolume: false
                });
            }
            chapters.push(...segmentChapters);
        }
        return chapters;
    }
    async createEpub(chapters, metadata) {
        const { BlobWriter, TextReader, ZipWriter } = await __turbopack_context__.A("[project]/node_modules/.pnpm/@zip.js+zip.js@2.7.53/node_modules/@zip.js/zip.js/index.js [client] (ecmascript, async loader)");
        const { bookTitle, author, language, identifier } = metadata;
        const zipWriter = new ZipWriter(new BlobWriter('application/epub+zip'), {
            extendedTimestamp: false
        });
        await zipWriter.add('mimetype', new TextReader('application/epub+zip'), zipWriteOptions);
        // Add META-INF/container.xml
        const containerXml = `<?xml version="1.0" encoding="UTF-8"?>
    <container xmlns="urn:oasis:names:tc:opendocument:xmlns:container" version="1.0">
      <rootfiles>
        <rootfile full-path="content.opf" media-type="application/oebps-package+xml"/>
      </rootfiles>
    </container>`.trim();
        await zipWriter.add('META-INF/container.xml', new TextReader(containerXml), zipWriteOptions);
        // Create navigation points for TOC
        let isNested = false;
        let navPoints = ``;
        for(let i = 0; i < chapters.length; i++){
            const id = `chapter${i + 1}`;
            const playOrder = i + 1;
            if (chapters[i].isVolume && isNested) {
                navPoints += `</navPoint>\n`;
                isNested = !isNested;
            }
            navPoints += `<navPoint id="navPoint-${id}" playOrder="${playOrder}">\n` + `<navLabel><text>${chapters[i].title}</text></navLabel>\n` + `<content src="./OEBPS/${id}.xhtml" />\n`;
            if (chapters[i].isVolume && !isNested) {
                isNested = !isNested;
            } else {
                navPoints += `</navPoint>\n`;
            }
        }
        if (isNested) {
            navPoints += `</navPoint>`;
        }
        // Add NCX file (table of contents)
        const tocNcx = `<?xml version="1.0" encoding="UTF-8"?>
    <ncx xmlns="http://www.daisy.org/z3986/2005/ncx/" version="2005-1">
      <head>
        <meta name="dtb:uid" content="book-id" />
        <meta name="dtb:depth" content="1" />
        <meta name="dtb:totalPageCount" content="0" />
        <meta name="dtb:maxPageNumber" content="0" />
      </head>
      <docTitle>
        <text>${escapeXml(bookTitle)}</text>
      </docTitle>
      <docAuthor>
        <text>${escapeXml(author)}</text>
      </docAuthor>
      <navMap>
        ${navPoints}
      </navMap>
    </ncx>`.trim();
        await zipWriter.add('toc.ncx', new TextReader(tocNcx), zipWriteOptions);
        // Create manifest and spine items
        const manifest = chapters.map((_, index)=>`
      <item id="chap${index + 1}" href="OEBPS/chapter${index + 1}.xhtml" media-type="application/xhtml+xml"/>
    `).join('\n').trim();
        const spine = chapters.map((_, index)=>`
      <itemref idref="chap${index + 1}"/>`).join('\n').trim();
        // Add CSS stylesheet
        const css = `
      body { line-height: 1.6; font-size: 1em; font-family: 'Arial', sans-serif; text-align: justify; }
      p { text-indent: 2em; margin: 0; }
    `;
        await zipWriter.add('style.css', new TextReader(css), zipWriteOptions);
        // Add chapter files
        for(let i = 0; i < chapters.length; i++){
            const chapter = chapters[i];
            const lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$lang$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["detectLanguage"])(chapter.text);
            const chapterContent = `<?xml version="1.0" encoding="UTF-8"?>
        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
        <html xmlns="http://www.w3.org/1999/xhtml" lang="${lang}" xml:lang="${lang}">
          <head>
            <title>${chapter.title}</title>
            <link rel="stylesheet" type="text/css" href="../style.css"/>
          </head>
          <body>${chapter.content}</body>
        </html>`.trim();
            await zipWriter.add(`OEBPS/chapter${i + 1}.xhtml`, new TextReader(chapterContent), zipWriteOptions);
        }
        const tocManifest = `<item id="ncx" href="toc.ncx" media-type="application/x-dtbncx+xml"/>`;
        const styleManifest = `<item id="css" href="style.css" media-type="text/css"/>`;
        // Add content.opf file
        const contentOpf = `<?xml version="1.0" encoding="UTF-8"?>
      <package xmlns="http://www.idpf.org/2007/opf" unique-identifier="book-id" version="2.0">
        <metadata xmlns:dc="http://purl.org/dc/elements/1.1/">
          <dc:title>${escapeXml(bookTitle)}</dc:title>
          <dc:language>${language}</dc:language>
          <dc:creator>${escapeXml(author)}</dc:creator>
          <dc:identifier id="book-id">${identifier}</dc:identifier>
        </metadata>
        <manifest>
          ${manifest}
          ${tocManifest}
          ${styleManifest}
        </manifest>
        <spine toc="ncx">
          ${spine}
        </spine>
      </package>`.trim();
        await zipWriter.add('content.opf', new TextReader(contentOpf), zipWriteOptions);
        return await zipWriter.close();
    }
    detectEncoding(buffer) {
        try {
            new TextDecoder('utf-8', {
                fatal: true
            }).decode(buffer);
            return 'utf-8';
        } catch  {
            const uint8Array = new Uint8Array(buffer);
            // Try tolerant UTF-8 detection - check if most of it is valid UTF-8
            let validBytes = 0;
            let checkedBytes = 0;
            const sampleSize = Math.min(uint8Array.length, 10000);
            for(let i = 0; i < sampleSize; i++){
                try {
                    new TextDecoder('utf-8', {
                        fatal: true
                    }).decode(uint8Array.slice(i, i + 100));
                    validBytes += 100;
                    checkedBytes += 100;
                    i += 99;
                } catch  {
                    checkedBytes++;
                }
            }
            const validPercentage = validBytes / checkedBytes * 100;
            console.log(`UTF-8 validity: ${validPercentage.toFixed(2)}%`);
            // If more than 80% is valid UTF-8, consider it UTF-8 with some corruption
            if (validPercentage > 80) {
                console.log('Treating as UTF-8 despite some invalid sequences');
                return 'utf-8';
            }
        // If UTF-8 decoding fails, try to detect other encodings
        }
        const headerBytes = new Uint8Array(buffer.slice(0, 4));
        if (headerBytes[0] === 0xff && headerBytes[1] === 0xfe) {
            return 'utf-16le';
        }
        if (headerBytes[0] === 0xfe && headerBytes[1] === 0xff) {
            return 'utf-16be';
        }
        if (headerBytes[0] === 0xef && headerBytes[1] === 0xbb && headerBytes[2] === 0xbf) {
            return 'utf-8';
        }
        // Analyze a sample of the content to guess between common East Asian encodings
        // If the content has a high ratio of bytes in the 0x80-0xFF range, it's likely GBK/GB18030
        const sample = new Uint8Array(buffer.slice(0, Math.min(1024, buffer.byteLength)));
        let highByteCount = 0;
        for(let i = 0; i < sample.length; i++){
            if (sample[i] >= 0x80) {
                highByteCount++;
            }
        }
        const highByteRatio = highByteCount / sample.length;
        if (highByteRatio > 0.3) {
            return 'gbk';
        }
        if (highByteRatio > 0.1) {
            let sjisPattern = false;
            for(let i = 0; i < sample.length - 1; i++){
                const b1 = sample[i];
                const b2 = sample[i + 1];
                if ((b1 >= 0x81 && b1 <= 0x9f || b1 >= 0xe0 && b1 <= 0xfc) && (b2 >= 0x40 && b2 <= 0x7e || b2 >= 0x80 && b2 <= 0xfc)) {
                    sjisPattern = true;
                    break;
                }
            }
            if (sjisPattern) {
                return 'shift-jis';
            }
            return 'gb18030';
        }
        return 'utf-8';
    }
    extractBookTitle(filename) {
        const match = filename.match(/《([^》]+)》/);
        return match ? match[1] : filename.split('.')[0];
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/readest-app/src/services/errors.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BOOK_FILE_NOT_FOUND_ERROR",
    ()=>BOOK_FILE_NOT_FOUND_ERROR
]);
const BOOK_FILE_NOT_FOUND_ERROR = 'Book file not found';
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/readest-app/src/utils/font.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseFontInfo",
    ()=>parseFontInfo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/misc.ts [client] (ecmascript)");
;
function parseUnicodeString(dataView, offset, length) {
    const chars = [];
    for(let i = 0; i < length; i += 2){
        const charCode = dataView.getUint16(offset + i, false);
        if (charCode !== 0) {
            chars.push(String.fromCharCode(charCode));
        }
    }
    return chars.join('');
}
function parseMacintoshString(dataView, offset, length) {
    const chars = [];
    for(let i = 0; i < length; i++){
        const charCode = dataView.getUint8(offset + i);
        chars.push(String.fromCharCode(charCode));
    }
    return chars.join('');
}
const NO_STYLE_LANGUAGE_IDS = new Set([
    0x0404,
    0x0804,
    0x0c04,
    0x1004,
    19,
    33
]);
function getLanguagePriority(platformID, languageID, userLanguage) {
    let priority = 0;
    // Base priority by platform (Unicode/Microsoft preferred)
    if (platformID === 0) priority += 100; // Unicode
    else if (platformID === 3) priority += 90; // Microsoft
    else if (platformID === 1) priority += 50; // Macintosh
    // Language-specific priorities
    const userLang = userLanguage.toLowerCase();
    if (platformID === 0 || platformID === 3) {
        if (userLang.startsWith('zh')) {
            if (languageID === 0x0804) priority += 50; // Simplified Chinese
            else if (languageID === 0x0404) priority += 45; // Traditional Chinese
            else if (languageID === 0x0c04) priority += 40; // Traditional Chinese
            else if (languageID === 0x1004) priority += 35; // Simplified Chinese
        } else if (userLang.startsWith('ja')) {
            if (languageID === 0x0411) priority += 50; // Japanese
        } else if (userLang.startsWith('ko')) {
            if (languageID === 0x0412) priority += 50; // Korean
        } else if (userLang.startsWith('en')) {
            if (languageID === 0x0409) priority += 50; // English (US)
            else if (languageID === 0x0809) priority += 45; // English (UK)
        }
        // Fallback: English
        if (languageID === 0x0409) priority += 10; // English fallback
    } else if (platformID === 1) {
        // Macintosh platform language codes
        if (userLang.startsWith('zh')) {
            if (languageID === 33) priority += 50; // Chinese (Simplified)
            else if (languageID === 19) priority += 45; // Chinese (Traditional)
        } else if (userLang.startsWith('ja')) {
            if (languageID === 11) priority += 50; // Japanese
        } else if (userLang.startsWith('ko')) {
            if (languageID === 23) priority += 50; // Korean
        } else if (userLang.startsWith('en')) {
            if (languageID === 0) priority += 50; // English
        }
        // Fallback: English
        if (languageID === 0) priority += 10; // English fallback
    }
    return priority;
}
function parseOS2Weight(dataView, os2TableOffset) {
    // OS/2 table usWeightClass is at offset 4
    return dataView.getUint16(os2TableOffset + 4, false);
}
function parseOS2Selection(dataView, os2TableOffset) {
    // OS/2 table fsSelection is at offset 62
    return dataView.getUint16(os2TableOffset + 62, false);
}
function parseVariableFontAxes(dataView, fvarTableOffset) {
    try {
        // fvar table structure:
        // version (4 bytes) + axisCount (2 bytes) + axisSize (2 bytes) + instanceCount (2 bytes) + instanceSize (2 bytes)
        const axisCount = dataView.getUint16(fvarTableOffset + 4, false);
        const axisSize = dataView.getUint16(fvarTableOffset + 6, false);
        const axes = [];
        // Each axis record starts at offset 16 from table start
        let axisOffset = fvarTableOffset + 16;
        for(let i = 0; i < axisCount; i++){
            // Axis record structure:
            // axisTag (4 bytes) + minValue (4 bytes) + defaultValue (4 bytes) + maxValue (4 bytes) + flags (2 bytes) + axisNameID (2 bytes)
            const tag = String.fromCharCode(dataView.getUint8(axisOffset), dataView.getUint8(axisOffset + 1), dataView.getUint8(axisOffset + 2), dataView.getUint8(axisOffset + 3));
            // Fixed-point values (16.16 format)
            const minValue = dataView.getInt32(axisOffset + 4, false) / 65536;
            const defaultValue = dataView.getInt32(axisOffset + 8, false) / 65536;
            const maxValue = dataView.getInt32(axisOffset + 12, false) / 65536;
            axes.push({
                tag,
                minValue,
                defaultValue,
                maxValue
            });
            axisOffset += axisSize;
        }
        return axes;
    } catch (error) {
        console.warn('Failed to parse fvar table:', error);
        return [];
    }
}
function weightClassToCSSWeight(weightClass) {
    // Map OpenType weight class to CSS weight
    if (weightClass >= 1 && weightClass <= 100) return 100;
    if (weightClass >= 101 && weightClass <= 200) return 200;
    if (weightClass >= 201 && weightClass <= 300) return 300;
    if (weightClass >= 301 && weightClass <= 400) return 400;
    if (weightClass >= 401 && weightClass <= 500) return 500;
    if (weightClass >= 501 && weightClass <= 600) return 600;
    if (weightClass >= 601 && weightClass <= 700) return 700;
    if (weightClass >= 701 && weightClass <= 800) return 800;
    if (weightClass >= 801 && weightClass <= 900) return 900;
    return 400; // Default to normal weight
}
function inferWeightFromStyleName(styleName) {
    const lowerStyle = styleName.toLowerCase();
    // Check for specific weight keywords
    if (lowerStyle.includes('thin') || lowerStyle.includes('hairline')) return 100;
    if (lowerStyle.includes('extralight') || lowerStyle.includes('ultralight')) return 200;
    if (lowerStyle.includes('light') && !lowerStyle.includes('extralight') && !lowerStyle.includes('ultralight')) return 300;
    if (lowerStyle.includes('medium')) return 500;
    if (lowerStyle.includes('semibold') || lowerStyle.includes('demibold')) return 600;
    if (lowerStyle.includes('extrabold') || lowerStyle.includes('ultrabold')) return 800;
    if (lowerStyle.includes('black') || lowerStyle.includes('heavy')) return 900;
    if (lowerStyle.includes('bold') && !lowerStyle.includes('semibold') && !lowerStyle.includes('extrabold') && !lowerStyle.includes('ultrabold')) return 700;
    return 400; // Default to normal weight
}
function inferStyleFromName(styleName, fsSelection) {
    const lowerStyle = styleName.toLowerCase();
    // Check fsSelection flags first (bit 0 = italic, bit 9 = oblique)
    if (fsSelection & 0x200) return 'oblique'; // Bit 9
    if (fsSelection & 0x1) return 'italic'; // Bit 0
    // Fallback to style name analysis
    if (lowerStyle.includes('oblique')) return 'oblique';
    if (lowerStyle.includes('italic') || lowerStyle.includes('slant')) return 'italic';
    return 'normal';
}
const parseFontInfo = (fontData, filename)=>{
    const fallbackName = filename.replace(/\.[^/.]+$/, '');
    try {
        const dataView = new DataView(fontData);
        const signature = dataView.getUint32(0, false);
        if (signature !== 0x00010000 && signature !== 0x74727565 && signature !== 0x4f54544f) {
            throw new Error('Unsupported font format');
        }
        const numTables = dataView.getUint16(4, false);
        let nameTableOffset = 0;
        let os2TableOffset = 0;
        let fvarTableOffset = 0;
        for(let i = 0; i < numTables; i++){
            const tableOffset = 12 + i * 16;
            const tag = String.fromCharCode(dataView.getUint8(tableOffset), dataView.getUint8(tableOffset + 1), dataView.getUint8(tableOffset + 2), dataView.getUint8(tableOffset + 3));
            if (tag === 'name') {
                nameTableOffset = dataView.getUint32(tableOffset + 8, false);
            } else if (tag === 'OS/2') {
                os2TableOffset = dataView.getUint32(tableOffset + 8, false);
            } else if (tag === 'fvar') {
                fvarTableOffset = dataView.getUint32(tableOffset + 8, false);
            }
        }
        if (nameTableOffset === 0) {
            throw new Error('Name table not found');
        }
        const count = dataView.getUint16(nameTableOffset + 2, false);
        const stringOffset = dataView.getUint16(nameTableOffset + 4, false);
        const userLanguage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getUserLang"])();
        const fontFamilyNames = [];
        const fontStyleNames = [];
        const preferredFamilyNames = [];
        const preferredStyleNames = [];
        for(let i = 0; i < count; i++){
            const recordOffset = nameTableOffset + 6 + i * 12;
            const platformID = dataView.getUint16(recordOffset, false);
            const languageID = dataView.getUint16(recordOffset + 4, false);
            const nameID = dataView.getUint16(recordOffset + 6, false);
            const nameLength = dataView.getUint16(recordOffset + 8, false);
            const nameOffsetInTable = dataView.getUint16(recordOffset + 10, false);
            // nameID 1 = Font Family name, nameID 2 = Font Subfamily name (style)
            // nameID 16 = Typographic Family name, nameID 17 = Typographic Subfamily name
            if (nameID === 1 || nameID === 2 || nameID === 16 || nameID === 17) {
                const stringStart = nameTableOffset + stringOffset + nameOffsetInTable;
                let fontName = '';
                if (platformID === 0 || platformID === 3) {
                    // Unicode/Microsoft platform
                    fontName = parseUnicodeString(dataView, stringStart, nameLength);
                } else if (platformID === 1) {
                    // Macintosh platform
                    fontName = parseMacintoshString(dataView, stringStart, nameLength);
                }
                if (fontName && fontName.trim()) {
                    const priority = getLanguagePriority(platformID, languageID, userLanguage);
                    const nameEntry = {
                        name: fontName.trim(),
                        platformID,
                        languageID,
                        priority
                    };
                    if (nameID === 1) {
                        fontFamilyNames.push(nameEntry);
                    } else if (nameID === 2) {
                        fontStyleNames.push(nameEntry);
                    } else if (nameID === 16) {
                        preferredFamilyNames.push(nameEntry);
                    } else if (nameID === 17) {
                        preferredStyleNames.push(nameEntry);
                    }
                }
            }
        }
        if (fontFamilyNames.length === 0) {
            throw new Error('Font family name not found');
        }
        fontFamilyNames.sort((a, b)=>b.priority - a.priority);
        fontStyleNames.sort((a, b)=>b.priority - a.priority);
        preferredFamilyNames.sort((a, b)=>b.priority - a.priority);
        preferredStyleNames.sort((a, b)=>b.priority - a.priority);
        // Prefer typographic names if available
        const familyName = (preferredFamilyNames[0] || fontFamilyNames[0]).name;
        const fontStyleName = preferredStyleNames[0] || fontStyleNames[0];
        const styleName = fontStyleName?.name || '';
        // Parse weight and style information
        let fontWeight = 400;
        let fontStyle = 'normal';
        let fsSelection = 0;
        if (os2TableOffset > 0) {
            try {
                const weightClass = parseOS2Weight(dataView, os2TableOffset);
                fontWeight = weightClassToCSSWeight(weightClass);
                fsSelection = parseOS2Selection(dataView, os2TableOffset);
            } catch  {
                console.warn('Failed to parse OS/2 table, falling back to style name analysis');
            }
        }
        let isVariable = false;
        if (fvarTableOffset > 0) {
            const axes = parseVariableFontAxes(dataView, fvarTableOffset);
            if (axes && axes.length > 0) {
                isVariable = true;
            }
        }
        // If OS/2 table weight is default (400) or unavailable, try to infer from style name
        if (fontWeight === 400 && styleName) {
            const inferredWeight = inferWeightFromStyleName(styleName);
            if (inferredWeight !== 400) {
                fontWeight = inferredWeight;
            }
        }
        fontStyle = inferStyleFromName(styleName, fsSelection);
        return {
            name: fontStyleName && !NO_STYLE_LANGUAGE_IDS.has(fontStyleName.languageID) ? `${familyName} ${styleName}` : familyName,
            family: familyName,
            weight: fontWeight,
            style: fontStyle,
            variable: isVariable
        };
    } catch (error) {
        console.warn(`Failed to parse font: ${error}`);
        return {
            name: fallbackName,
            family: fallbackName,
            weight: 400,
            style: 'normal',
            variable: false
        };
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/readest-app/src/utils/svg.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "svg2png",
    ()=>svg2png
]);
function parseSvgLength(value) {
    const n = parseFloat(value);
    if (!isNaN(n)) return n;
    return undefined;
}
async function getSvgSize(svgBlob, defaultWidth = 700, defaultHeight = 1050) {
    const text = await svgBlob.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, 'image/svg+xml');
    const svg = doc.documentElement;
    const widthAttr = svg.getAttribute('width');
    const heightAttr = svg.getAttribute('height');
    if (widthAttr && heightAttr) {
        return {
            width: parseSvgLength(widthAttr) || defaultWidth,
            height: parseSvgLength(heightAttr) || defaultHeight
        };
    }
    const viewBox = svg.getAttribute('viewBox');
    if (viewBox) {
        const parts = viewBox.split(/\s+/).map(Number);
        if (parts.length === 4 && !parts.some(isNaN)) {
            const [, , vbWidth, vbHeight] = parts;
            return {
                width: vbWidth || defaultWidth,
                height: vbHeight || defaultHeight
            };
        }
    }
    return {
        width: defaultWidth,
        height: defaultHeight
    };
}
async function svg2png(svgBlob, quality = 0.9) {
    const svgText = await svgBlob.text();
    const svgUrl = URL.createObjectURL(new Blob([
        svgText
    ], {
        type: 'image/svg+xml'
    }));
    const img = new Image();
    img.crossOrigin = 'anonymous';
    await new Promise((resolve, reject)=>{
        img.onload = ()=>resolve();
        img.onerror = ()=>reject(new Error('Failed to load SVG'));
        img.src = svgUrl;
    });
    await new Promise((resolve)=>requestAnimationFrame(resolve));
    await new Promise((resolve)=>requestAnimationFrame(resolve));
    const canvas = document.createElement('canvas');
    const { width, height } = await getSvgSize(svgBlob);
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);
    URL.revokeObjectURL(svgUrl);
    return new Promise((resolve)=>{
        canvas.toBlob((blob)=>resolve(blob), 'image/png', quality);
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/readest-app/src/services/appService.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BaseAppService",
    ()=>BaseAppService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.28.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$11$2e$1$2e$0$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$v4$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/uuid@11.1.0/node_modules/uuid/dist/esm-browser/v4.js [client] (ecmascript) <export default as v4>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$types$2f$book$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/types/book.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$book$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/book.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$md5$2e$ts__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/md5.ts [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$js$2d$md5$40$0$2e$8$2e$3$2f$node_modules$2f$js$2d$md5$2f$src$2f$md5$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/js-md5@0.8.3/node_modules/js-md5/src/md5.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$path$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/path.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$libs$2f$document$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/libs/document.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/constants.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$cachedFetch$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/cachedFetch.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$plugin$2d$http$40$2$2e$5$2e$6$2f$node_modules$2f40$tauri$2d$apps$2f$plugin$2d$http$2f$dist$2d$js$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tauri-apps+plugin-http@2.5.6/node_modules/@tauri-apps/plugin-http/dist-js/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/misc.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$serializer$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/serializer.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$txt$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/txt.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$errors$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/errors.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$font$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/font.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$svg$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/svg.ts [client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
class BaseAppService {
    osPlatform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getOSPlatform"])();
    appPlatform = 'tauri';
    localBooksDir = '';
    isMobile = false;
    isMacOSApp = false;
    isLinuxApp = false;
    isAppDataSandbox = false;
    isAndroidApp = false;
    isIOSApp = false;
    isMobileApp = false;
    isPortableApp = false;
    isDesktopApp = false;
    isEink = false;
    hasTrafficLight = false;
    hasWindow = false;
    hasWindowBar = false;
    hasContextMenu = false;
    hasRoundedWindow = false;
    hasSafeAreaInset = false;
    hasHaptics = false;
    hasUpdater = false;
    hasOrientationLock = false;
    hasScreenBrightness = false;
    hasIAP = false;
    canCustomizeRootDir = false;
    canReadExternalDir = false;
    distChannel = 'readest';
    CURRENT_MIGRATION_VERSION = 20260121;
    async runMigrations(lastMigrationVersion) {
        if (lastMigrationVersion < 20251124) {
            try {
                await this.migrate20251124();
            } catch (error) {
                console.error('Error migrating to version 20251124:', error);
            }
        }
        if (lastMigrationVersion < 20260121) {
            try {
                await this.migrate20260121();
            } catch (error) {
                console.error('Error migrating to version 20260121:', error);
            }
        }
    }
    async prepareBooksDir() {
        this.localBooksDir = await this.fs.getPrefix('Books');
        // Initialize configuration files in .readest directory
        await this.ensureConfigFilesExist();
    }
    /**
   * Ensure settings.json and library.json exist in .readest directory
   * If they don't exist, create them with default values
   */ async ensureConfigFilesExist() {
        try {
            // Check and create settings.json if needed
            const settingsExists = await this.fs.exists(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["SETTINGS_FILENAME"], 'Settings');
            if (!settingsExists) {
                console.log('[Init] settings.json not found, creating with defaults...');
                const defaultSettings = {
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["DEFAULT_SYSTEM_SETTINGS"],
                    ...this.isMobile ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["DEFAULT_MOBILE_SYSTEM_SETTINGS"] : {},
                    version: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["SYSTEM_SETTINGS_VERSION"],
                    localBooksDir: await this.fs.getPrefix('Books'),
                    globalReadSettings: {
                        ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["DEFAULT_READSETTINGS"],
                        ...this.isMobile ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["DEFAULT_MOBILE_READSETTINGS"] : {}
                    },
                    globalViewSettings: this.getDefaultViewSettings()
                };
                await this.safeSaveJSON(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["SETTINGS_FILENAME"], 'Settings', defaultSettings);
                console.log('[Init] ✓ settings.json created successfully');
            }
            // Check and create library.json if needed
            const libraryFilename = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$book$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getLibraryFilename"])();
            const libraryExists = await this.fs.exists(libraryFilename, 'Books');
            if (!libraryExists) {
                console.log('[Init] library.json not found, creating with defaults...');
                await this.safeSaveJSON(libraryFilename, 'Books', []);
                console.log('[Init] ✓ library.json created successfully');
            }
            console.log('[Init] ✓ All configuration files are ready');
        } catch (error) {
            console.error('[Init] Error ensuring config files exist:', error);
        // Don't throw, continue with defaults
        }
    }
    async openFile(path, base) {
        return await this.fs.openFile(path, base);
    }
    async copyFile(srcPath, dstPath, base) {
        return await this.fs.copyFile(srcPath, dstPath, base);
    }
    async readFile(path, base, mode) {
        return await this.fs.readFile(path, base, mode);
    }
    async writeFile(path, base, content) {
        return await this.fs.writeFile(path, base, content);
    }
    async createDir(path, base, recursive = true) {
        return await this.fs.createDir(path, base, recursive);
    }
    async deleteFile(path, base) {
        return await this.fs.removeFile(path, base);
    }
    async deleteDir(path, base, recursive = true) {
        return await this.fs.removeDir(path, base, recursive);
    }
    async resolveFilePath(path, base) {
        const prefix = await this.fs.getPrefix(base);
        return path ? `${prefix}/${path}` : prefix;
    }
    async readDirectory(path, base) {
        return await this.fs.readDir(path, base);
    }
    async exists(path, base) {
        return await this.fs.exists(path, base);
    }
    async getImageURL(path) {
        return await this.fs.getImageURL(path);
    }
    getCoverImageUrl = (book)=>{
        // Use the resolved path from 'Books' base instead of manually prefixing with localBooksDir
        // This correctly handles both flat (relativePath) and legacy (hash-based) paths
        const coverPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$book$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getCoverFilename"])(book);
        const resolvedPath = this.fs.resolvePath(coverPath, 'Books');
        return this.fs.getURL(resolvedPath.fp) || `${this.localBooksDir}/${coverPath}`;
    };
    getCoverImageBlobUrl = async (book)=>{
        // Use the resolved path from 'Books' base instead of manually prefixing with localBooksDir
        // This correctly handles both flat (relativePath) and legacy (hash-based) paths
        const coverPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$book$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getCoverFilename"])(book);
        // 在 web 平台使用缓存的 Blob URL
        if (this.appPlatform === 'web') {
            try {
                const coverUrl = this.fs.getURL(this.fs.resolvePath(coverPath, 'Books').fp) || `${this.localBooksDir}/${coverPath}`;
                // 使用缓存获取 Blob URL，缓存 30 天
                return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$cachedFetch$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["cachedFetchAsUrl"])(coverUrl, {
                    cacheStrategy: 'cache-first',
                    cacheTTL: 30 * 24 * 60 * 60 * 1000
                }).catch(()=>{
                    // 如果缓存失败，回退到原始方式
                    return `${this.localBooksDir}/${coverPath}`;
                });
            } catch  {
                return `${this.localBooksDir}/${coverPath}`;
            }
        } else {
            try {
                return await this.fs.getBlobURL(coverPath, 'Books');
            } catch  {
                // Fallback to old path if the new path doesn't exist
                return `${this.localBooksDir}/${coverPath}`;
            }
        }
    };
    async getCachedImageUrl(pathOrUrl) {
        const cachedKey = `img_${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$js$2d$md5$40$0$2e$8$2e$3$2f$node_modules$2f$js$2d$md5$2f$src$2f$md5$2e$js__$5b$client$5d$__$28$ecmascript$29$__["md5"])(pathOrUrl)}`;
        const cachePrefix = await this.fs.getPrefix('Cache');
        const cachedPath = `${cachePrefix}/${cachedKey}`;
        if (await this.fs.exists(cachedPath, 'None')) {
            return await this.fs.getImageURL(cachedPath);
        } else {
            const file = await this.fs.openFile(pathOrUrl, 'None');
            await this.fs.writeFile(cachedKey, 'Cache', await file.arrayBuffer());
            return await this.fs.getImageURL(cachedPath);
        }
    }
    getDefaultViewSettings() {
        return {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["DEFAULT_BOOK_LAYOUT"],
            ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["DEFAULT_BOOK_STYLE"],
            ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["DEFAULT_BOOK_FONT"],
            ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["DEFAULT_BOOK_LANGUAGE"],
            ...this.isMobile ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["DEFAULT_MOBILE_VIEW_SETTINGS"] : {},
            ...this.isEink ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["DEFAULT_EINK_VIEW_SETTINGS"] : {},
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["isCJKEnv"])() ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["DEFAULT_CJK_VIEW_SETTINGS"] : {},
            ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["DEFAULT_VIEW_CONFIG"],
            ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["DEFAULT_TTS_CONFIG"],
            ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["DEFAULT_SCREEN_CONFIG"],
            ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["DEFAULT_ANNOTATOR_CONFIG"],
            ...{
                ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["DEFAULT_TRANSLATOR_CONFIG"],
                translateTargetLang: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getTargetLang"])()
            }
        };
    }
    async loadSettings() {
        const defaultSettings = {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["DEFAULT_SYSTEM_SETTINGS"],
            ...this.isMobile ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["DEFAULT_MOBILE_SYSTEM_SETTINGS"] : {},
            version: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["SYSTEM_SETTINGS_VERSION"],
            localBooksDir: await this.fs.getPrefix('Books'),
            koreaderSyncDeviceId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$11$2e$1$2e$0$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$v4$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
            globalReadSettings: {
                ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["DEFAULT_READSETTINGS"],
                ...this.isMobile ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["DEFAULT_MOBILE_READSETTINGS"] : {}
            },
            globalViewSettings: this.getDefaultViewSettings()
        };
        let settings = await this.safeLoadJSON(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["SETTINGS_FILENAME"], 'Settings', defaultSettings);
        const version = settings.version ?? 0;
        if (this.isAppDataSandbox || version < __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["SYSTEM_SETTINGS_VERSION"]) {
            settings.version = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["SYSTEM_SETTINGS_VERSION"];
        }
        settings = {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["DEFAULT_SYSTEM_SETTINGS"],
            ...this.isMobile ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["DEFAULT_MOBILE_SYSTEM_SETTINGS"] : {},
            ...settings
        };
        settings.globalReadSettings = {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["DEFAULT_READSETTINGS"],
            ...this.isMobile ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["DEFAULT_MOBILE_READSETTINGS"] : {},
            ...settings.globalReadSettings
        };
        settings.globalViewSettings = {
            ...this.getDefaultViewSettings(),
            ...settings.globalViewSettings
        };
        settings.localBooksDir = await this.fs.getPrefix('Books');
        if (!settings.kosync.deviceId) {
            settings.kosync.deviceId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$11$2e$1$2e$0$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$v4$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
            await this.saveSettings(settings);
        }
        this.localBooksDir = settings.localBooksDir;
        return settings;
    }
    async saveSettings(settings) {
        await this.safeSaveJSON(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["SETTINGS_FILENAME"], 'Settings', settings);
    }
    async importFont(file) {
        let fontPath;
        let fontFile;
        if (typeof file === 'string') {
            const filePath = file;
            const fileobj = await this.fs.openFile(filePath, 'None');
            fontPath = fileobj.name || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$path$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getFilename"])(filePath);
            await this.fs.copyFile(filePath, fontPath, 'Fonts');
            fontFile = await this.fs.openFile(fontPath, 'Fonts');
        } else if (file) {
            fontPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$path$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getFilename"])(file.name);
            await this.fs.writeFile(fontPath, 'Fonts', file);
            fontFile = file;
        } else {
            return null;
        }
        return {
            path: fontPath,
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$font$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["parseFontInfo"])(await fontFile.arrayBuffer(), fontPath)
        };
    }
    async deleteFont(font) {
        await this.fs.removeFile(font.path, 'Fonts');
    }
    async importImage(file) {
        let imagePath;
        if (typeof file === 'string') {
            const filePath = file;
            const fileobj = await this.fs.openFile(filePath, 'None');
            imagePath = fileobj.name || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$path$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getFilename"])(filePath);
            await this.fs.copyFile(filePath, imagePath, 'Images');
        } else if (file) {
            imagePath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$path$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getFilename"])(file.name);
            await this.fs.writeFile(imagePath, 'Images', file);
        } else {
            return null;
        }
        return {
            name: imagePath.replace(/\.[^/.]+$/, ''),
            path: imagePath
        };
    }
    async deleteImage(texture) {
        await this.fs.removeFile(texture.path, 'Images');
    }
    async importBook(// file might be:
    // 1.1 absolute path for local file on Desktop
    // 1.2 /private/var inbox file path on iOS
    // 2. remote url
    // 3. content provider uri
    // 4. File object from browsers
    file, books, saveBook = true, saveCover = true, overwrite = false, transient = false, options) {
        const startTime = Date.now();
        let filename = '';
        try {
            let loadedBook;
            let format;
            let fileobj;
            if (transient && typeof file !== 'string') {
                throw new Error('Transient import is only supported for file paths');
            }
            try {
                if (typeof file === 'string') {
                    fileobj = await this.fs.openFile(file, 'None');
                    filename = fileobj.name || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$path$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getFilename"])(file);
                } else {
                    fileobj = file;
                    filename = file.name;
                }
                // 记录文件大小
                const fileSizeMB = fileobj.size / (1024 * 1024);
                console.log(`[importBook] Processing: ${filename}, size: ${fileSizeMB.toFixed(2)} MB`);
                // 检查文件大小
                if (fileobj.size === 0) {
                    throw new Error('Invalid or empty book file');
                }
                // 警告大文件
                if (fileobj.size > 100 * 1024 * 1024) {
                    console.warn(`[importBook] ⚠️ Large file: ${fileSizeMB.toFixed(2)} MB, processing may take longer`);
                }
                if (/\.txt$/i.test(filename)) {
                    const txt2epub = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$txt$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["TxtToEpubConverter"]();
                    ({ file: fileobj } = await txt2epub.convert({
                        file: fileobj
                    }));
                }
                console.log(`[importBook] Opening document: ${filename}`);
                ({ book: loadedBook, format } = await new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$libs$2f$document$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["DocumentLoader"](fileobj).open());
                if (!loadedBook) {
                    throw new Error('Unsupported or corrupted book file');
                }
                const metadataTitle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$book$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["formatTitle"])(loadedBook.metadata.title);
                if (!metadataTitle || !metadataTitle.trim() || metadataTitle === filename) {
                    loadedBook.metadata.title = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$path$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getBaseFilename"])(filename);
                }
                console.log(`[importBook] ✓ Document opened successfully: ${filename}`);
            } catch (error) {
                const errorMsg = error.message || String(error);
                console.error(`[importBook] ✗ Failed to open book: ${filename}`, errorMsg);
                throw new Error(`Failed to open the book: ${errorMsg}`);
            }
            console.log(`[importBook] Computing hash for: ${filename}`);
            const hash = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$md5$2e$ts__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["partialMD5"])(fileobj);
            const existingBook = books.filter((b)=>b.hash === hash)[0];
            const now = Date.now();
            if (existingBook) {
                if (!transient) {
                    existingBook.deletedAt = null;
                }
                existingBook.createdAt = now;
                existingBook.updatedAt = now;
            }
            const primaryLanguage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$book$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getPrimaryLanguage"])(loadedBook.metadata.language);
            const book = {
                hash,
                format,
                title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$book$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["formatTitle"])(loadedBook.metadata.title),
                sourceTitle: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$book$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["formatTitle"])(loadedBook.metadata.title),
                primaryLanguage,
                author: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$book$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["formatAuthors"])(loadedBook.metadata.author, primaryLanguage),
                createdAt: existingBook ? existingBook.createdAt : now,
                uploadedAt: existingBook ? existingBook.uploadedAt : transient ? null : now,
                deletedAt: transient ? now : null,
                downloadedAt: now,
                updatedAt: now
            };
            // update book metadata when reimporting the same book
            if (existingBook) {
                existingBook.format = book.format;
                existingBook.title = existingBook.title.trim() ? existingBook.title.trim() : book.title;
                existingBook.sourceTitle = existingBook.sourceTitle ?? book.sourceTitle;
                existingBook.author = existingBook.author ?? book.author;
                existingBook.primaryLanguage = existingBook.primaryLanguage ?? book.primaryLanguage;
                existingBook.downloadedAt = Date.now();
            }
            // Decide whether to use new flat local storage path
            // Check runtime window.__STORAGE_MODE__ first (set by Providers), then fallback to compile-time env var
            const isLocalStorageMode = ("TURBOPACK compile-time value", "object") !== 'undefined' && window.__STORAGE_MODE__ === 'local' || ("TURBOPACK compile-time value", "local") === 'local';
            const shouldUseLocalFlatStorage = this.appPlatform === 'web' && isLocalStorageMode;
            console.log('[ImportBook] appPlatform:', this.appPlatform, 'STORAGE_MODE (runtime):', ("TURBOPACK compile-time value", "object") !== 'undefined' && window.__STORAGE_MODE__, 'STORAGE_MODE (env):', ("TURBOPACK compile-time value", "local"), 'shouldUseLocalFlatStorage:', shouldUseLocalFlatStorage);
            const fileExt = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$libs$2f$document$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["EXTS"][format] || format.toLowerCase?.() || 'book';
            const safeBaseName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["makeSafeFilename"])(book.sourceTitle || book.title);
            const targetGroupName = options?.targetGroupName?.trim();
            // Compute target relative path for local mode
            if (shouldUseLocalFlatStorage) {
                const derivedRelativePath = options?.targetRelativePath ? options.targetRelativePath : `${targetGroupName ? `${targetGroupName}/` : ''}${safeBaseName}.${fileExt}`;
                if (!derivedRelativePath) {
                    throw new Error('targetRelativePath is required for local storage mode. Please provide a valid relative path.');
                }
                book.relativePath = derivedRelativePath;
                console.log('[ImportBook] 5. Setting book.relativePath to:', derivedRelativePath);
                console.log('[ImportBook] 6. Book hash:', book.hash);
                if (existingBook) {
                    existingBook.relativePath = derivedRelativePath;
                }
                if (targetGroupName && !book.groupName) {
                    book.groupName = targetGroupName;
                    if (existingBook && !existingBook.groupName) {
                        existingBook.groupName = targetGroupName;
                    }
                }
            } else if (this.appPlatform === 'web') {
                // For web platform in remote mode, still require relativePath for consistency
                const derivedRelativePath = options?.targetRelativePath ? options.targetRelativePath : `${targetGroupName ? `${targetGroupName}/` : ''}${safeBaseName}.${fileExt}`;
                book.relativePath = derivedRelativePath;
                if (existingBook) {
                    existingBook.relativePath = derivedRelativePath;
                }
            }
            // Ensure destination directories exist (new flat structure or legacy hash-based)
            await this.ensureLocalBookDirs(book);
            const bookFilename = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$book$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getLocalBookFilename"])(book);
            if (saveBook && !transient && (!await this.fs.exists(bookFilename, 'Books') || overwrite)) {
                if (/\.txt$/i.test(filename)) {
                    await this.fs.writeFile(bookFilename, 'Books', fileobj);
                } else if (typeof file === 'string' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["isContentURI"])(file)) {
                    await this.fs.copyFile(file, bookFilename, 'Books');
                } else if (typeof file === 'string' && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["isValidURL"])(file)) {
                    try {
                        // try to copy the file directly first in case of large files to avoid memory issues
                        // on desktop when reading recursively from selected directory the direct copy will fail
                        // due to permission issues, then fallback to read and write files
                        await this.fs.copyFile(file, bookFilename, 'Books');
                    } catch  {
                        await this.fs.writeFile(bookFilename, 'Books', await fileobj.arrayBuffer());
                    }
                } else {
                    await this.fs.writeFile(bookFilename, 'Books', fileobj);
                }
            }
            if (saveCover && (!await this.fs.exists((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$book$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getCoverFilename"])(book), 'Books') || overwrite)) {
                console.log('[ImportBook] 7. Preparing to save cover');
                let cover = await loadedBook.getCover();
                if (cover?.type === 'image/svg+xml') {
                    try {
                        console.log('[ImportBook] Converting SVG cover to PNG...');
                        cover = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$svg$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["svg2png"])(cover);
                    } catch  {}
                }
                if (cover) {
                    const coverFilename = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$book$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getCoverFilename"])(book);
                    console.log('[ImportBook] 8. Saving cover with filename:', coverFilename);
                    console.log('[ImportBook] 9. Cover size:', cover.size, 'bytes');
                    await this.fs.writeFile(coverFilename, 'Books', await cover.arrayBuffer());
                    console.log('[ImportBook] 10. Cover saved successfully');
                }
            }
            // Never overwrite the config file only when it's not existed
            if (!existingBook) {
                await this.saveBookConfig(book, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$book$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["INIT_BOOK_CONFIG"]);
                books.splice(0, 0, book);
            }
            // update file links with url or path or content uri
            if (typeof file === 'string') {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["isValidURL"])(file)) {
                    book.url = file;
                    if (existingBook) existingBook.url = file;
                }
                if (transient) {
                    book.filePath = file;
                    if (existingBook) existingBook.filePath = file;
                }
            }
            book.coverImageUrl = await this.generateCoverImageUrl(book);
            const f = file;
            if (f && f.close) {
                await f.close();
            }
            const elapsed = Date.now() - startTime;
            console.log(`[importBook] ✓ Import completed in ${elapsed}ms: ${filename}`);
            return existingBook || book;
        } catch (error) {
            const elapsed = Date.now() - startTime;
            const errorMsg = error.message || String(error);
            const errorStack = error.stack;
            console.error(`[importBook] ✗ Import failed after ${elapsed}ms`);
            console.error(`[importBook] File: ${filename || (typeof file === 'string' ? file : 'unknown')}`);
            console.error(`[importBook] Error: ${errorMsg}`);
            if (errorStack) {
                console.error(`[importBook] Stack trace:`, errorStack);
            }
            // 如果是内存错误，提供更明确的提示
            if (errorMsg.includes('memory') || errorMsg.includes('ENOMEM')) {
                throw new Error(`内存不足：文件可能过大。请尝试导入较小的文件或关闭其他程序。原始错误：${errorMsg}`);
            }
            // 如果是文件大小限制错误，直接抛出
            if (errorMsg.includes('too large') || errorMsg.includes('Maximum size')) {
                throw error;
            }
            throw error;
        }
    }
    async importBookFromPath(filePath, relativePath, books) {
        try {
            // Extract directory structure for grouping
            const directory = relativePath.split('/').slice(0, -1).join('/');
            const groupName = directory || '';
            // Import the book as transient (don't copy, just reference)
            const book = await this.importBook(filePath, books, false, true, false, true, {
                targetRelativePath: relativePath,
                targetGroupName: groupName
            });
            return book;
        } catch (error) {
            console.error('Error importing book from path:', filePath, error);
            return null;
        }
    }
    /**
   * 重新分类书籍 - 在本地存储模式下移动文件
   * 在前端修改书籍分组时，需要同步文件系统中的文件位置
   */ async reclassifyBook(book, newGroupName, oldGroupName) {
        // 仅在本地存储模式下执行文件移动
        // @ts-ignore - NEXT_PUBLIC_STORAGE_MODE is set at build time
        if (this.appPlatform !== 'web' || (("TURBOPACK compile-time value", "local") || 'local') !== 'local') {
            console.log('[Reclassify] 非本地存储模式，跳过文件移动');
            return;
        }
        // 如果没有 relativePath，说明是旧的 hash-based 存储，不执行文件移动
        if (!book.relativePath) {
            console.log('[Reclassify] 书籍未使用新存储结构，跳过文件移动:', book.title);
            return;
        }
        try {
            // 获取当前设置，读取分组目录配置
            const settings = await this.loadSettings();
            const groupDirectories = settings.groupDirectories || {};
            // 当前的 relativePath 就是旧路径
            const oldRelativePath = book.relativePath;
            // 提取文件名（不包含分组路径）
            let filename;
            if (oldGroupName && oldRelativePath.startsWith(`${oldGroupName}/`)) {
                // 如果旧路径包含分组，提取文件名
                filename = oldRelativePath.substring(oldGroupName.length + 1);
            } else {
                // 否则，relativePath 本身就是文件名（或已经是正确的相对路径）
                // 提取最后的文件名部分
                const parts = oldRelativePath.split('/');
                filename = parts[parts.length - 1] || '';
            }
            // 计算新路径：
            // 1. 如果新分组在 groupDirectories 中有配置，使用配置的目录
            // 2. 否则使用分组名称作为目录
            let targetDirectory;
            if (newGroupName && groupDirectories[newGroupName]) {
                targetDirectory = groupDirectories[newGroupName];
            } else if (newGroupName) {
                targetDirectory = newGroupName;
            } else {
                targetDirectory = '';
            }
            const newRelativePath = targetDirectory ? `${targetDirectory}/${filename}` : filename;
            // 如果新旧路径相同，无需移动
            if (oldRelativePath === newRelativePath) {
                console.log('[Reclassify] 书籍分组未改变，无需移动文件');
                return;
            }
            console.log('[Reclassify] 准备移动书籍文件');
            console.log('  旧路径:', oldRelativePath);
            console.log('  新路径:', newRelativePath);
            console.log('  文件名:', filename);
            console.log('  新分组:', newGroupName);
            console.log('  目标目录:', targetDirectory);
            // 调用 API 移动文件
            const response = await fetch('/api/storage/reclassify', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    oldPath: oldRelativePath,
                    newPath: newRelativePath
                })
            });
            if (!response.ok) {
                const error = await response.text();
                console.error('[Reclassify] 文件移动失败:', error);
                throw new Error(`Failed to move book files: ${error}`);
            }
            const result = await response.json();
            // 更新 book 的路径信息
            book.relativePath = newRelativePath;
            book.groupName = newGroupName || undefined;
            // 如果 API 返回了绝对路径，也更新它
            if (result.absolutePath) {
                book.absolutePath = result.absolutePath;
            }
            console.log('[Reclassify] 文件移动成功:', result);
        } catch (error) {
            console.error('[Reclassify] 重新分类书籍时出错:', error);
            throw error;
        }
    }
    async deleteBook(book, deleteAction) {
        console.log('Deleting book with action:', deleteAction, book.title);
        if (deleteAction === 'local' || deleteAction === 'both') {
            const localDeleteFps = deleteAction === 'local' ? [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$book$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getLocalBookFilename"])(book)
            ] : [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$book$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getLocalBookFilename"])(book),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$book$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getCoverFilename"])(book)
            ];
            for (const fp of localDeleteFps){
                console.log('Deleting local file:', fp);
                await this.fs.removeFile(fp, 'Books');
            }
            if (deleteAction === 'local') {
                book.downloadedAt = null;
            } else {
                book.deletedAt = Date.now();
                book.downloadedAt = null;
                book.coverDownloadedAt = null;
            }
        }
        // Cloud storage delete functionality removed - using local server storage only
        if ((deleteAction === 'cloud' || deleteAction === 'both') && book.uploadedAt) {
            console.log('Cloud delete operation skipped - cloud storage removed');
            book.uploadedAt = null;
        }
    }
    // Cloud storage methods removed - using local server storage only
    async exportBook(book) {
        const { file } = await this.loadBookContent(book);
        const content = await file.arrayBuffer();
        const filename = `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["makeSafeFilename"])(book.title)}.${book.format.toLowerCase()}`;
        const filepath = await this.resolveFilePath((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$book$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getLocalBookFilename"])(book), 'Books');
        const fileType = file.type || 'application/octet-stream';
        return await this.saveFile(filename, content, filepath, fileType);
    }
    async isBookAvailable(book) {
        const fp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$book$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getLocalBookFilename"])(book);
        if (await this.fs.exists(fp, 'Books')) {
            return true;
        }
        if (book.filePath) {
            return await this.fs.exists(book.filePath, 'None');
        }
        if (book.url) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["isValidURL"])(book.url);
        }
        return false;
    }
    async getBookFileSize(book) {
        const fp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$book$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getLocalBookFilename"])(book);
        if (await this.fs.exists(fp, 'Books')) {
            const file = await this.fs.openFile(fp, 'Books');
            const size = file.size;
            const f = file;
            if (f && f.close) {
                await f.close();
            }
            return size;
        }
        return null;
    }
    async loadBookContent(book) {
        let file;
        const fp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$book$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getLocalBookFilename"])(book);
        if (await this.fs.exists(fp, 'Books')) {
            file = await this.fs.openFile(fp, 'Books');
        } else if (book.filePath) {
            file = await this.fs.openFile(book.filePath, 'None');
        } else if (book.url) {
            file = await this.fs.openFile(book.url, 'None');
        } else {
            // 0.9.64 has a bug that book.title might be modified but the filename is not updated
            const bookDir = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$book$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getDir"])(book);
            const files = await this.fs.readDir((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$book$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getDir"])(book), 'Books');
            if (files.length > 0) {
                const bookFile = files.find((f)=>f.path.endsWith(`.${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$libs$2f$document$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["EXTS"][book.format]}`));
                if (bookFile) {
                    file = await this.fs.openFile(`${bookDir}/${bookFile.path}`, 'Books');
                } else {
                    throw new Error(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$errors$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["BOOK_FILE_NOT_FOUND_ERROR"]);
                }
            } else {
                throw new Error(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$errors$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["BOOK_FILE_NOT_FOUND_ERROR"]);
            }
        }
        return {
            book,
            file
        };
    }
    async loadBookConfig(book, settings) {
        const globalViewSettings = {
            ...settings.globalViewSettings,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$types$2f$book$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["FIXED_LAYOUT_FORMATS"].has(book.format) ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["DEFAULT_FIXED_LAYOUT_VIEW_SETTINGS"] : {}
        };
        try {
            let str = '{}';
            if (await this.fs.exists((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$book$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getConfigFilename"])(book), 'Books')) {
                str = await this.fs.readFile((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$book$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getConfigFilename"])(book), 'Books', 'text');
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$serializer$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["deserializeConfig"])(str, globalViewSettings, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["DEFAULT_BOOK_SEARCH_CONFIG"]);
        } catch  {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$serializer$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["deserializeConfig"])('{}', globalViewSettings, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["DEFAULT_BOOK_SEARCH_CONFIG"]);
        }
    }
    async fetchBookDetails(book) {
        const fp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$book$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getLocalBookFilename"])(book);
        if (!await this.fs.exists(fp, 'Books') && book.uploadedAt) {
            // Cloud download functionality removed - books should already be stored locally
            console.warn('Book file not found locally and cloud download is disabled:', book.title);
            throw new Error('Book file not found locally');
        }
        const { file } = await this.loadBookContent(book);
        const bookDoc = (await new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$libs$2f$document$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["DocumentLoader"](file).open()).book;
        const f = file;
        if (f && f.close) {
            await f.close();
        }
        return bookDoc.metadata;
    }
    async saveBookConfig(book, config, settings) {
        let serializedConfig;
        if (settings) {
            const globalViewSettings = {
                ...settings.globalViewSettings,
                ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$types$2f$book$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["FIXED_LAYOUT_FORMATS"].has(book.format) ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["DEFAULT_FIXED_LAYOUT_VIEW_SETTINGS"] : {}
            };
            serializedConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$serializer$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["serializeConfig"])(config, globalViewSettings, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["DEFAULT_BOOK_SEARCH_CONFIG"]);
        } else {
            serializedConfig = JSON.stringify(config);
        }
        await this.fs.writeFile((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$book$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getConfigFilename"])(book), 'Books', serializedConfig);
    }
    async generateCoverImageUrl(book) {
        return this.appPlatform === 'web' ? await this.getCoverImageBlobUrl(book) : this.getCoverImageUrl(book);
    }
    async loadLibraryBooks() {
        console.log('Loading library books...');
        const libraryFilename = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$book$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getLibraryFilename"])();
        if (!await this.fs.exists('', 'Books')) {
            await this.fs.createDir('', 'Books', true);
        }
        const books = await this.safeLoadJSON(libraryFilename, 'Books', []);
        await Promise.all(books.map(async (book)=>{
            book.coverImageUrl = await this.generateCoverImageUrl(book);
            book.updatedAt ??= book.lastUpdated || Date.now();
            return book;
        }));
        return books;
    }
    async saveLibraryBooks(books) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const libraryBooks = books.map(({ coverImageUrl, ...rest })=>rest);
        await this.safeSaveJSON((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$book$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getLibraryFilename"])(), 'Books', libraryBooks);
    }
    /**
   * 校准书籍路径
   * 扫描文件系统与 library.json 进行对比，找出路径不一致的书籍
   */ async reconcileBookPaths(books) {
        // 仅在本地存储模式下执行
        // @ts-ignore - NEXT_PUBLIC_STORAGE_MODE is set at build time
        if (this.appPlatform !== 'web' || (("TURBOPACK compile-time value", "local") || 'local') !== 'local') {
            console.log('[Reconcile] 非本地存储模式，跳过路径校准');
            return {
                success: false,
                error: 'Not in local storage mode'
            };
        }
        try {
            console.log('[Reconcile] 开始校准书籍路径，共', books.length, '本书');
            // 准备需要发送的书籍数据（只发送必要字段）
            const libraryData = books.filter((book)=>!book.deletedAt).map((book)=>({
                    hash: book.hash,
                    relativePath: book.relativePath,
                    absolutePath: book.absolutePath,
                    title: book.title,
                    groupName: book.groupName
                }));
            const response = await fetch('/api/storage/reconcile', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    library: libraryData
                })
            });
            if (!response.ok) {
                const error = await response.text();
                console.error('[Reconcile] 路径校准失败:', error);
                throw new Error(`Failed to reconcile paths: ${error}`);
            }
            const result = await response.json();
            console.log('[Reconcile] 路径校准完成:', result.summary);
            return result;
        } catch (error) {
            console.error('[Reconcile] 路径校准出错:', error);
            throw error;
        }
    }
    /**
   * 应用路径校准结果
   * 根据校准结果更新 library.json 中的书籍信息
   */ async applyReconciliation(books, reconcileResults) {
        const updatedBooks = [
            ...books
        ];
        for (const result of reconcileResults){
            if (result.status === 'moved') {
                // 找到对应的书籍并更新路径信息
                const bookIndex = updatedBooks.findIndex((b)=>b.hash === result.hash);
                if (bookIndex !== -1) {
                    const book = updatedBooks[bookIndex];
                    if (book) {
                        book.relativePath = result.newRelativePath;
                        book.absolutePath = result.absolutePath;
                        if (result.suggestedGroupName !== undefined) {
                            book.groupName = result.suggestedGroupName;
                            // 更新 groupId
                            book.groupId = result.suggestedGroupName ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$md5$2e$ts__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["md5Fingerprint"])(result.suggestedGroupName) : '';
                        }
                        book.updatedAt = Date.now();
                        console.log('[Reconcile] 更新书籍:', book.title, '新路径:', book.relativePath);
                    }
                }
            }
        }
        await this.saveLibraryBooks(updatedBooks);
        return updatedBooks;
    }
    imageToArrayBuffer(imageUrl, imageFile) {
        return new Promise((resolve, reject)=>{
            if (!imageUrl && !imageFile) {
                reject(new Error('No image URL or file provided'));
                return;
            }
            if (this.appPlatform === 'web' && imageUrl && imageUrl.startsWith('blob:')) {
                fetch(imageUrl).then((response)=>response.arrayBuffer()).then((buffer)=>resolve(buffer)).catch((error)=>reject(error));
            } else if (this.appPlatform === 'tauri' && imageFile) {
                this.fs.openFile(imageFile, 'None').then((file)=>file.arrayBuffer()).then((buffer)=>resolve(buffer)).catch((error)=>reject(error));
            } else if (this.appPlatform === 'tauri' && imageUrl) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$plugin$2d$http$40$2$2e$5$2e$6$2f$node_modules$2f40$tauri$2d$apps$2f$plugin$2d$http$2f$dist$2d$js$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["fetch"])(imageUrl, {
                    method: 'GET'
                }).then((response)=>response.arrayBuffer()).then((buffer)=>resolve(buffer)).catch((error)=>reject(error));
            } else {
                reject(new Error('Unsupported platform or missing image data'));
            }
        });
    }
    async updateCoverImage(book, imageUrl, imageFile) {
        if (imageUrl === '_blank') {
            await this.fs.removeFile((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$book$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getCoverFilename"])(book), 'Books');
        } else if (imageUrl || imageFile) {
            const arrayBuffer = await this.imageToArrayBuffer(imageUrl, imageFile);
            await this.fs.writeFile((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$book$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getCoverFilename"])(book), 'Books', arrayBuffer);
        }
    }
    async loadJSONFile(path, base) {
        try {
            const txt = await this.fs.readFile(path, base, 'text');
            if (!txt || typeof txt !== 'string' || txt.trim().length === 0) {
                return {
                    success: false,
                    error: 'File is empty or invalid'
                };
            }
            try {
                const data = JSON.parse(txt);
                return {
                    success: true,
                    data
                };
            } catch (parseError) {
                return {
                    success: false,
                    error: `JSON parse error: ${parseError}`
                };
            }
        } catch (error) {
            return {
                success: false,
                error
            };
        }
    }
    /**
   * Safely loads a JSON file with automatic backup fallback.
   * If the main file is corrupted, attempts to load from backup.
   * @param filename - The name of the file to load (without .bak extension)
   * @param base - The base directory
   * @param defaultValue - Default value to return if both files fail
   */ async safeLoadJSON(filename, base, defaultValue) {
        const backupFilename = `${filename}.bak`;
        // Try loading main file
        const mainResult = await this.loadJSONFile(filename, base);
        if (mainResult.success) {
            return mainResult.data;
        }
        console.warn(`Failed to load ${filename}, attempting backup...`, mainResult.error);
        // Try loading backup file
        const backupResult = await this.loadJSONFile(backupFilename, base);
        if (backupResult.success) {
            console.warn(`Loaded from backup: ${backupFilename}`);
            // Restore the main file from backup
            try {
                const backupData = JSON.stringify(backupResult.data, null, 2);
                await this.fs.writeFile(filename, base, backupData);
                console.log(`Restored ${filename} from backup`);
            } catch (error) {
                console.error(`Failed to restore ${filename} from backup:`, error);
            }
            return backupResult.data;
        }
        console.error(`Both ${filename} and ${backupFilename} failed to load`);
        return defaultValue;
    }
    /**
   * Safely saves a JSON file with atomic write using backup strategy.
   * Strategy: write to backup first, then to main file.
   * This ensures at least one valid copy exists at all times.
   * @param filename - The name of the file to save (without .bak extension)
   * @param base - The base directory
   * @param data - The data to save
   */ async safeSaveJSON(filename, base, data) {
        const backupFilename = `${filename}.bak`;
        const jsonData = JSON.stringify(data, null, 2);
        // Strategy: Always write to backup first, then to main file
        // This ensures we always have at least one valid copy
        try {
            // Step 1: Write to backup file
            await this.fs.writeFile(backupFilename, base, jsonData);
            // Step 2: Write to main file
            await this.fs.writeFile(filename, base, jsonData);
        } catch (error) {
            console.error(`Failed to save ${filename}:`, error);
            throw new Error(`Failed to save ${filename}: ${error}`);
        }
    }
    /** Ensure necessary directories exist for a book (both legacy hash-based and new flat local paths). */ async ensureLocalBookDirs(book) {
        if (book.relativePath) {
            const segments = book.relativePath.split('/');
            const fileDir = segments.slice(0, -1).join('/');
            const metadataDir = book.relativePath.replace(/\.[^.]+$/, '');
            if (fileDir) {
                await this.fs.createDir(fileDir, 'Books', true);
            }
            await this.fs.createDir(metadataDir, 'Books', true);
            return;
        }
        // Legacy hash-based storage
        if (!await this.fs.exists((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$book$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getDir"])(book), 'Books')) {
            await this.fs.createDir((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$book$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getDir"])(book), 'Books');
        }
    }
    async migrate20251124() {
        console.log('Running migration for version 20251124 to rename the backup library file...');
        const oldBackupFilename = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$book$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getLibraryBackupFilename"])();
        const newBackupFilename = `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$book$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getLibraryFilename"])()}.bak`;
        if (await this.fs.exists(oldBackupFilename, 'Books')) {
            try {
                const content = await this.fs.readFile(oldBackupFilename, 'Books', 'text');
                await this.fs.writeFile(newBackupFilename, 'Books', content);
                await this.fs.removeFile(oldBackupFilename, 'Books');
                console.log('Migration to rename backup library file completed successfully.');
            } catch (error) {
                console.error('Error during migration to rename backup library file:', error);
            }
        }
    }
    /**
   * Migration 20260121: move legacy hash-based local books to flat relativePath layout in local mode.
   * - Applies only when appPlatform === 'web' and STORAGE_MODE is local
   * - For any book without relativePath, derive a flat path and move files + metadata
   */ async migrate20260121() {
        // @ts-ignore - NEXT_PUBLIC_STORAGE_MODE is set at build time
        const isLocalMode = (("TURBOPACK compile-time value", "local") || 'local') === 'local';
        if (this.appPlatform !== 'web' || !isLocalMode) {
            console.log('[Migration 20260121] Skip (not web/local mode)');
            return;
        }
        console.log('[Migration 20260121] Start migrating legacy hash-based books to flat layout');
        const books = await this.loadLibraryBooks();
        let migrated = 0;
        for (const book of books){
            if (book.relativePath) continue;
            const ext = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$libs$2f$document$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["EXTS"][book.format] || book.format?.toLowerCase?.() || 'book';
            const safeBaseName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["makeSafeFilename"])(book.sourceTitle || book.title || book.hash);
            const newRelativePath = `${book.groupName ? `${book.groupName}/` : ''}${safeBaseName}.${ext}`;
            // Legacy paths
            const legacyBookPath = `${book.hash}/${safeBaseName}.${ext}`;
            const legacyCoverPath = `${book.hash}/cover.png`;
            const legacyConfigPath = `${book.hash}/config.json`;
            // New paths
            const newBookPath = newRelativePath;
            const newCoverPath = newRelativePath.replace(/\.[^.]+$/, '') + '/cover.png';
            const newConfigPath = newRelativePath.replace(/\.[^.]+$/, '') + '/config.json';
            try {
                // Move book file if present
                if (await this.fs.exists(legacyBookPath, 'Books')) {
                    await this.ensureLocalBookDirs({
                        ...book,
                        relativePath: newRelativePath
                    });
                    const file = await this.fs.openFile(legacyBookPath, 'Books');
                    await this.fs.writeFile(newBookPath, 'Books', file);
                    await this.fs.removeFile(legacyBookPath, 'Books');
                }
                // Move cover
                if (await this.fs.exists(legacyCoverPath, 'Books')) {
                    const coverFile = await this.fs.openFile(legacyCoverPath, 'Books');
                    await this.fs.writeFile(newCoverPath, 'Books', coverFile);
                    await this.fs.removeFile(legacyCoverPath, 'Books');
                }
                // Move config
                if (await this.fs.exists(legacyConfigPath, 'Books')) {
                    const configContent = await this.fs.readFile(legacyConfigPath, 'Books', 'text');
                    await this.fs.writeFile(newConfigPath, 'Books', configContent);
                    await this.fs.removeFile(legacyConfigPath, 'Books');
                }
                // Update in-memory book
                book.relativePath = newRelativePath;
                migrated++;
            } catch (error) {
                console.error('[Migration 20260121] Failed to migrate book:', book.title, error);
            }
        }
        if (migrated > 0) {
            await this.saveLibraryBooks(books);
            console.log(`[Migration 20260121] Migrated ${migrated} book(s) to flat layout`);
        } else {
            console.log('[Migration 20260121] No legacy books to migrate');
        }
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/readest-app/src/services/nativeAppService.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NativeAppService",
    ()=>NativeAppService,
    "nativeFileSystem",
    ()=>nativeFileSystem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.28.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$plugin$2d$fs$40$2$2e$4$2e$5$2f$node_modules$2f40$tauri$2d$apps$2f$plugin$2d$fs$2f$dist$2d$js$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tauri-apps+plugin-fs@2.4.5/node_modules/@tauri-apps/plugin-fs/dist-js/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$path$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tauri-apps+api@2.9.1/node_modules/@tauri-apps/api/path.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$core$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tauri-apps+api@2.9.1/node_modules/@tauri-apps/api/core.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$plugin$2d$dialog$40$2$2e$6$2e$0$2f$node_modules$2f40$tauri$2d$apps$2f$plugin$2d$dialog$2f$dist$2d$js$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tauri-apps+plugin-dialog@2.6.0/node_modules/@tauri-apps/plugin-dialog/dist-js/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$plugin$2d$os$40$2$2e$3$2e$2$2f$node_modules$2f40$tauri$2d$apps$2f$plugin$2d$os$2f$dist$2d$js$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tauri-apps+plugin-os@2.3.2/node_modules/@tauri-apps/plugin-os/dist-js/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$choochmeque$2b$tauri$2d$plugin$2d$sharekit$2d$api$40$0$2e$3$2e$0$2f$node_modules$2f40$choochmeque$2f$tauri$2d$plugin$2d$sharekit$2d$api$2f$dist$2d$js$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@choochmeque+tauri-plugin-sharekit-api@0.3.0/node_modules/@choochmeque/tauri-plugin-sharekit-api/dist-js/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/misc.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$path$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/path.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$file$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/file.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$bridge$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/bridge.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$files$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/files.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$appService$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/appService.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/constants.ts [client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
// Lazy evaluation to avoid calling osType() at module load time
// This prevents errors when the module is imported in non-Tauri environments
let OS_TYPE = null;
const getOSType = ()=>{
    if (OS_TYPE === null) {
        OS_TYPE = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$plugin$2d$os$40$2$2e$3$2e$2$2f$node_modules$2f40$tauri$2d$apps$2f$plugin$2d$os$2f$dist$2d$js$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["type"])();
    }
    return OS_TYPE;
};
// Helper function to create a path resolver based on custom root directory and portable mode
// 0. If no custom root dir and not portable mode, use default Tauri BaseDirectory
// 1. If custom root dir is set, use it as base dir (baseDir = 0)
// 2. If portable mode is detected (Settings.json in executable dir), use executable dir as base dir (baseDir = 0)
// 3. If both custom root dir and portable mode are set, use custom root dir as base dir (baseDir = 0)
// Path Resolver Usage:
//  - appService.resolvePath and use returned baseDir + fp, when baseDir is 0, fp will be absolute path
//  - fileSystem.getPrefix and use prefix + path
const getPathResolver = ({ customRootDir, isPortable, execDir } = {})=>{
    const customBaseDir = customRootDir ? 0 : undefined;
    const isCustomBaseDir = Boolean(customRootDir);
    const getCustomBasePrefixSync = isCustomBaseDir ? (baseDir)=>{
        return ()=>{
            const dataDirs = [
                'Settings',
                'Data',
                'Books',
                'Fonts',
                'Images'
            ];
            const leafDir = dataDirs.includes(baseDir) ? '' : baseDir;
            return leafDir ? `${customRootDir}/${leafDir}` : customRootDir;
        };
    } : undefined;
    const getCustomBasePrefix = getCustomBasePrefixSync ? (baseDir)=>async ()=>getCustomBasePrefixSync(baseDir)() : undefined;
    return (path, base)=>{
        const customBasePrefixSync = getCustomBasePrefixSync?.(base);
        const customBasePrefix = getCustomBasePrefix?.(base);
        switch(base){
            case 'Settings':
                return {
                    baseDir: isPortable ? 0 : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$path$2e$js__$5b$client$5d$__$28$ecmascript$29$__["BaseDirectory"].AppConfig,
                    basePrefix: isPortable && execDir ? async ()=>execDir : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$path$2e$js__$5b$client$5d$__$28$ecmascript$29$__["appConfigDir"],
                    fp: isPortable && execDir ? `${execDir}${path ? `/${path}` : ''}` : path,
                    base
                };
            case 'Cache':
                return {
                    baseDir: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$path$2e$js__$5b$client$5d$__$28$ecmascript$29$__["BaseDirectory"].AppCache,
                    basePrefix: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$path$2e$js__$5b$client$5d$__$28$ecmascript$29$__["appCacheDir"],
                    fp: path,
                    base
                };
            case 'Log':
                return {
                    baseDir: isCustomBaseDir ? 0 : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$path$2e$js__$5b$client$5d$__$28$ecmascript$29$__["BaseDirectory"].AppLog,
                    basePrefix: customBasePrefix ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$path$2e$js__$5b$client$5d$__$28$ecmascript$29$__["appLogDir"],
                    fp: customBasePrefixSync ? `${customBasePrefixSync()}${path ? `/${path}` : ''}` : path,
                    base
                };
            case 'Data':
                return {
                    baseDir: customBaseDir ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$path$2e$js__$5b$client$5d$__$28$ecmascript$29$__["BaseDirectory"].AppData,
                    basePrefix: customBasePrefix ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$path$2e$js__$5b$client$5d$__$28$ecmascript$29$__["appDataDir"],
                    fp: customBasePrefixSync ? `${customBasePrefixSync()}/${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["DATA_SUBDIR"]}${path ? `/${path}` : ''}` : `${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["DATA_SUBDIR"]}${path ? `/${path}` : ''}`,
                    base
                };
            case 'Books':
                return {
                    baseDir: customBaseDir ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$path$2e$js__$5b$client$5d$__$28$ecmascript$29$__["BaseDirectory"].AppData,
                    basePrefix: customBasePrefix || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$path$2e$js__$5b$client$5d$__$28$ecmascript$29$__["appDataDir"],
                    fp: customBasePrefixSync ? `${customBasePrefixSync()}/${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["LOCAL_BOOKS_SUBDIR"]}${path ? `/${path}` : ''}` : `${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["LOCAL_BOOKS_SUBDIR"]}${path ? `/${path}` : ''}`,
                    base
                };
            case 'Fonts':
                return {
                    baseDir: customBaseDir ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$path$2e$js__$5b$client$5d$__$28$ecmascript$29$__["BaseDirectory"].AppData,
                    basePrefix: customBasePrefix || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$path$2e$js__$5b$client$5d$__$28$ecmascript$29$__["appDataDir"],
                    fp: customBasePrefixSync ? `${customBasePrefixSync()}/${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["LOCAL_FONTS_SUBDIR"]}${path ? `/${path}` : ''}` : `${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["LOCAL_FONTS_SUBDIR"]}${path ? `/${path}` : ''}`,
                    base
                };
            case 'Images':
                return {
                    baseDir: customBaseDir ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$path$2e$js__$5b$client$5d$__$28$ecmascript$29$__["BaseDirectory"].AppData,
                    basePrefix: customBasePrefix || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$path$2e$js__$5b$client$5d$__$28$ecmascript$29$__["appDataDir"],
                    fp: customBasePrefixSync ? `${customBasePrefixSync()}/${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["LOCAL_IMAGES_SUBDIR"]}${path ? `/${path}` : ''}` : `${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["LOCAL_IMAGES_SUBDIR"]}${path ? `/${path}` : ''}`,
                    base
                };
            case 'None':
                return {
                    baseDir: 0,
                    basePrefix: async ()=>'',
                    fp: path,
                    base
                };
            case 'Temp':
            default:
                return {
                    baseDir: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$path$2e$js__$5b$client$5d$__$28$ecmascript$29$__["BaseDirectory"].Temp,
                    basePrefix: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$path$2e$js__$5b$client$5d$__$28$ecmascript$29$__["tempDir"],
                    fp: path,
                    base
                };
        }
    };
};
const nativeFileSystem = {
    resolvePath: getPathResolver(),
    async getPrefix (base) {
        const { basePrefix, fp, baseDir } = this.resolvePath('', base);
        let basePath = await basePrefix();
        basePath = basePath.replace(/\/+$/, '');
        return fp ? baseDir === 0 ? fp : await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$path$2e$js__$5b$client$5d$__$28$ecmascript$29$__["join"])(basePath, fp) : basePath;
    },
    getURL (path) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["isValidURL"])(path) ? path : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$core$2e$js__$5b$client$5d$__$28$ecmascript$29$__["convertFileSrc"])(path);
    },
    async getBlobURL (path, base) {
        const content = await this.readFile(path, base, 'binary');
        return URL.createObjectURL(new Blob([
            content
        ]));
    },
    async getImageURL (path) {
        return this.getURL(path);
    },
    async openFile (path, base, name) {
        const { fp, baseDir } = this.resolvePath(path, base);
        let fname = name || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$path$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getFilename"])(fp);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["isValidURL"])(path)) {
            return await new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$file$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["RemoteFile"](path, fname).open();
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["isContentURI"])(path) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["isFileURI"])(path) && getOSType() === 'ios') {
            fname = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$path$2e$js__$5b$client$5d$__$28$ecmascript$29$__["basename"])(path);
            if (path.includes('com.android.externalstorage')) {
                // If the URI is from shared internal storage (like /storage/emulated/0),
                // we can access it directly using the path — no need to copy.
                return await new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$file$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["NativeFile"](fp, fname, baseDir ? baseDir : null).open();
            } else {
                // Otherwise, for content:// URIs (e.g. from MediaStore, Drive, or third-party apps),
                // or file:// URIs is security scoped resource in iOS (e.g. from Files app),
                // we cannot access the file directly — so we copy it to a temporary cache location.
                const prefix = await this.getPrefix('Cache');
                const dst = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$path$2e$js__$5b$client$5d$__$28$ecmascript$29$__["join"])(prefix, decodeURIComponent(fname));
                const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$bridge$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["copyURIToPath"])({
                    uri: path,
                    dst
                });
                if (!res.success) {
                    console.error('Failed to open file:', res);
                    throw new Error('Failed to open file');
                }
                return await new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$file$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["NativeFile"](dst, fname, baseDir ? baseDir : null).open();
            }
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["isFileURI"])(path)) {
            return await new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$file$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["NativeFile"](fp, fname, baseDir ? baseDir : null).open();
        } else {
            if (getOSType() === 'android') {
                // NOTE: RemoteFile is not usable on Android due to a known issue of range request in Android WebView.
                // see https://issues.chromium.org/issues/40739128
                return await new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$file$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["NativeFile"](fp, fname, baseDir ? baseDir : null).open();
            } else {
                // NOTE: RemoteFile currently performs about 2× faster than NativeFile
                // due to an unresolved performance issue in Tauri (see tauri-apps/tauri#9190).
                // Once the bug is resolved, we should switch back to using NativeFile.
                const prefix = await this.getPrefix(base);
                const absolutePath = prefix ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$path$2e$js__$5b$client$5d$__$28$ecmascript$29$__["join"])(prefix, path) : path;
                return await new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$file$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["RemoteFile"](this.getURL(absolutePath), fname).open();
            }
        }
    },
    async copyFile (srcPath, dstPath, base) {
        try {
            if (!await this.exists((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$path$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getDirPath"])(dstPath), base)) {
                await this.createDir((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$path$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getDirPath"])(dstPath), base, true);
            }
        } catch (error) {
            console.log('Failed to create directory for copying file:', error);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["isContentURI"])(srcPath)) {
            const prefix = await this.getPrefix(base);
            if (!prefix) {
                throw new Error('Invalid base directory');
            }
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$bridge$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["copyURIToPath"])({
                uri: srcPath,
                dst: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$path$2e$js__$5b$client$5d$__$28$ecmascript$29$__["join"])(prefix, dstPath)
            });
            if (!res.success) {
                console.error('Failed to copy file:', res);
                throw new Error('Failed to copy file');
            }
        } else {
            const { fp, baseDir } = this.resolvePath(dstPath, base);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$plugin$2d$fs$40$2$2e$4$2e$5$2f$node_modules$2f40$tauri$2d$apps$2f$plugin$2d$fs$2f$dist$2d$js$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["copyFile"])(srcPath, fp, baseDir ? {
                toPathBaseDir: baseDir
            } : undefined);
        }
    },
    async readFile (path, base, mode) {
        const { fp, baseDir } = this.resolvePath(path, base);
        return mode === 'text' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$plugin$2d$fs$40$2$2e$4$2e$5$2f$node_modules$2f40$tauri$2d$apps$2f$plugin$2d$fs$2f$dist$2d$js$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["readTextFile"])(fp, baseDir ? {
            baseDir
        } : undefined) : (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$plugin$2d$fs$40$2$2e$4$2e$5$2f$node_modules$2f40$tauri$2d$apps$2f$plugin$2d$fs$2f$dist$2d$js$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["readFile"])(fp, baseDir ? {
            baseDir
        } : undefined)).buffer;
    },
    async writeFile (path, base, content) {
        // NOTE: this could be very slow for large files and might block the UI thread
        // so do not use this for large files
        const { fp, baseDir } = this.resolvePath(path, base);
        if (!await this.exists((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$path$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getDirPath"])(path), base)) {
            await this.createDir((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$path$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getDirPath"])(path), base, true);
        }
        if (typeof content === 'string') {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$plugin$2d$fs$40$2$2e$4$2e$5$2f$node_modules$2f40$tauri$2d$apps$2f$plugin$2d$fs$2f$dist$2d$js$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["writeTextFile"])(fp, content, baseDir ? {
                baseDir
            } : undefined);
        } else if (content instanceof File) {
            const writeOptions = {
                write: true,
                create: true,
                baseDir: baseDir ? baseDir : undefined
            };
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$plugin$2d$fs$40$2$2e$4$2e$5$2f$node_modules$2f40$tauri$2d$apps$2f$plugin$2d$fs$2f$dist$2d$js$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["writeFile"])(fp, content.stream(), writeOptions);
        } else {
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$plugin$2d$fs$40$2$2e$4$2e$5$2f$node_modules$2f40$tauri$2d$apps$2f$plugin$2d$fs$2f$dist$2d$js$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["writeFile"])(fp, new Uint8Array(content), baseDir ? {
                baseDir
            } : undefined);
        }
    },
    async removeFile (path, base) {
        const { fp, baseDir } = this.resolvePath(path, base);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$plugin$2d$fs$40$2$2e$4$2e$5$2f$node_modules$2f40$tauri$2d$apps$2f$plugin$2d$fs$2f$dist$2d$js$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["remove"])(fp, baseDir ? {
            baseDir
        } : undefined);
    },
    async createDir (path, base, recursive = false) {
        const { fp, baseDir } = this.resolvePath(path, base);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$plugin$2d$fs$40$2$2e$4$2e$5$2f$node_modules$2f40$tauri$2d$apps$2f$plugin$2d$fs$2f$dist$2d$js$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["mkdir"])(fp, {
            baseDir: baseDir ? baseDir : undefined,
            recursive
        });
    },
    async removeDir (path, base, recursive = false) {
        const { fp, baseDir } = this.resolvePath(path, base);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$plugin$2d$fs$40$2$2e$4$2e$5$2f$node_modules$2f40$tauri$2d$apps$2f$plugin$2d$fs$2f$dist$2d$js$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["remove"])(fp, {
            baseDir: baseDir ? baseDir : undefined,
            recursive
        });
    },
    async readDir (path, base) {
        const { fp, baseDir } = this.resolvePath(path, base);
        const getRelativePath = (filePath, basePath)=>{
            let relativePath = filePath;
            if (filePath.toLowerCase().startsWith(basePath.toLowerCase())) {
                relativePath = filePath.substring(basePath.length);
            }
            if (relativePath.startsWith('\\') || relativePath.startsWith('/')) {
                relativePath = relativePath.substring(1);
            }
            return relativePath;
        };
        // Use Rust WalkDir for massive performance gain on absolute paths
        if (!baseDir || baseDir === 0) {
            try {
                const files = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$core$2e$js__$5b$client$5d$__$28$ecmascript$29$__["invoke"])('read_dir', {
                    path: fp,
                    recursive: true,
                    extensions: [
                        '*'
                    ]
                });
                return files.map((file)=>({
                        path: getRelativePath(file.path, fp),
                        size: file.size
                    }));
            } catch (e) {
                console.error('Rust read_dir failed, falling back to JS recursion', e);
            }
        }
        // Fallback to readDir for non-absolute paths or on error
        const entries = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$plugin$2d$fs$40$2$2e$4$2e$5$2f$node_modules$2f40$tauri$2d$apps$2f$plugin$2d$fs$2f$dist$2d$js$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["readDir"])(fp, baseDir ? {
            baseDir
        } : undefined);
        const fileList = [];
        const readDirRecursively = async (parent, relative, entries, fileList)=>{
            for (const entry of entries){
                if (entry.isDirectory) {
                    const dir = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$path$2e$js__$5b$client$5d$__$28$ecmascript$29$__["join"])(parent, entry.name);
                    const relativeDir = relative ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$path$2e$js__$5b$client$5d$__$28$ecmascript$29$__["join"])(relative, entry.name) : entry.name;
                    try {
                        const entries = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$plugin$2d$fs$40$2$2e$4$2e$5$2f$node_modules$2f40$tauri$2d$apps$2f$plugin$2d$fs$2f$dist$2d$js$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["readDir"])(dir, baseDir ? {
                            baseDir
                        } : undefined);
                        await readDirRecursively(dir, relativeDir, entries, fileList);
                    } catch  {
                        console.warn(`Skipping unreadable dir: ${dir}`);
                    }
                } else {
                    const filePath = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$path$2e$js__$5b$client$5d$__$28$ecmascript$29$__["join"])(parent, entry.name);
                    const relativePath = relative ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$path$2e$js__$5b$client$5d$__$28$ecmascript$29$__["join"])(relative, entry.name) : entry.name;
                    const opts = baseDir ? {
                        baseDir
                    } : undefined;
                    const fileSize = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$plugin$2d$fs$40$2$2e$4$2e$5$2f$node_modules$2f40$tauri$2d$apps$2f$plugin$2d$fs$2f$dist$2d$js$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["stat"])(filePath, opts).then((info)=>info.size).catch(()=>0);
                    fileList.push({
                        path: relativePath,
                        size: fileSize
                    });
                }
            }
        };
        await readDirRecursively(fp, '', entries, fileList);
        return fileList;
    },
    async exists (path, base) {
        const { fp, baseDir } = this.resolvePath(path, base);
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$plugin$2d$fs$40$2$2e$4$2e$5$2f$node_modules$2f40$tauri$2d$apps$2f$plugin$2d$fs$2f$dist$2d$js$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["exists"])(fp, baseDir ? {
                baseDir
            } : undefined);
            return res;
        } catch  {
            return false;
        }
    },
    async stats (path, base) {
        const { fp, baseDir } = this.resolvePath(path, base);
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$plugin$2d$fs$40$2$2e$4$2e$5$2f$node_modules$2f40$tauri$2d$apps$2f$plugin$2d$fs$2f$dist$2d$js$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["stat"])(fp, baseDir ? {
            baseDir
        } : undefined);
    }
};
const DIST_CHANNEL = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env['NEXT_PUBLIC_DIST_CHANNEL'] || 'readest';
class NativeAppService extends __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$appService$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["BaseAppService"] {
    fs = nativeFileSystem;
    appPlatform = 'tauri';
    isAppDataSandbox = false;
    isMobile = false;
    isAndroidApp = false;
    isIOSApp = false;
    isMacOSApp = false;
    isLinuxApp = false;
    isMobileApp = false;
    isDesktopApp = false;
    isEink = Boolean(window.__READEST_IS_EINK);
    hasTrafficLight = false;
    hasWindow = false;
    hasWindowBar = false;
    hasContextMenu = false;
    hasRoundedWindow = false;
    hasSafeAreaInset = false;
    hasHaptics = false;
    hasUpdater = false;
    hasOrientationLock = false;
    hasScreenBrightness = false;
    hasIAP = false;
    // CustomizeRootDir has a blocker on macOS App Store builds due to Security Scoped Resource restrictions.
    // See: https://github.com/tauri-apps/tauri/issues/3716
    canCustomizeRootDir = DIST_CHANNEL !== 'appstore';
    canReadExternalDir = DIST_CHANNEL !== 'appstore' && DIST_CHANNEL !== 'playstore';
    distChannel = DIST_CHANNEL;
    execDir = undefined;
    async init() {
        // Check if running in Tauri environment
        if (("TURBOPACK compile-time value", "object") !== 'undefined' && !window.__TAURI__) {
            throw new Error('NativeAppService can only be initialized in Tauri environment');
        }
        // Initialize platform-specific properties based on OS type
        const osType = getOSType();
        this.isAppDataSandbox = [
            'android',
            'ios'
        ].includes(osType);
        this.isMobile = [
            'android',
            'ios'
        ].includes(osType);
        this.isAndroidApp = osType === 'android';
        this.isIOSApp = osType === 'ios';
        this.isMacOSApp = osType === 'macos';
        this.isLinuxApp = osType === 'linux';
        this.isMobileApp = [
            'android',
            'ios'
        ].includes(osType);
        this.isDesktopApp = [
            'macos',
            'windows',
            'linux'
        ].includes(osType);
        this.hasTrafficLight = osType === 'macos';
        this.hasWindow = !(osType === 'ios' || osType === 'android');
        this.hasWindowBar = !(osType === 'ios' || osType === 'android');
        this.hasContextMenu = !(osType === 'ios' || osType === 'android');
        this.hasRoundedWindow = osType === 'linux';
        this.hasSafeAreaInset = osType === 'ios' || osType === 'android';
        this.hasHaptics = osType === 'ios' || osType === 'android';
        this.hasUpdater = osType !== 'ios' && !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env['NEXT_PUBLIC_DISABLE_UPDATER'] && !window.__READEST_UPDATER_DISABLED;
        this.hasOrientationLock = osType === 'ios' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getOSPlatform"])() === 'ios' || osType === 'android';
        this.hasScreenBrightness = osType === 'ios' || osType === 'android';
        this.hasIAP = osType === 'ios' || osType === 'android' && DIST_CHANNEL === 'playstore';
        const execDir = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$core$2e$js__$5b$client$5d$__$28$ecmascript$29$__["invoke"])('get_executable_dir');
        this.execDir = execDir;
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env['NEXT_PUBLIC_PORTABLE_APP'] || await this.fs.exists(`${execDir}/${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["SETTINGS_FILENAME"]}`, 'None')) {
            this.isPortableApp = true;
            this.fs.resolvePath = getPathResolver({
                customRootDir: execDir,
                isPortable: this.isPortableApp,
                execDir
            });
        }
        const settings = await this.loadSettings();
        if (settings.customRootDir) {
            this.fs.resolvePath = getPathResolver({
                customRootDir: settings.customRootDir,
                isPortable: this.isPortableApp,
                execDir
            });
        }
        await this.prepareBooksDir();
        await this.runMigrations();
    }
    async runMigrations() {
        try {
            const settings = await this.loadSettings();
            const lastMigrationVersion = settings.migrationVersion || 0;
            await super.runMigrations(lastMigrationVersion);
            if (lastMigrationVersion < 20251029) {
                try {
                    await this.migrate20251029();
                } catch (error) {
                    console.error('Error migrating to version 20251029:', error);
                }
            }
            if (lastMigrationVersion < this.CURRENT_MIGRATION_VERSION) {
                await this.saveSettings({
                    ...settings,
                    migrationVersion: this.CURRENT_MIGRATION_VERSION
                });
            }
        } catch (error) {
            console.error('Failed to run migrations:', error);
        }
    }
    resolvePath(fp, base) {
        return this.fs.resolvePath(fp, base);
    }
    async setCustomRootDir(customRootDir) {
        this.fs.resolvePath = getPathResolver({
            customRootDir,
            isPortable: this.isPortableApp,
            execDir: this.execDir
        });
        await this.prepareBooksDir();
    }
    async selectDirectory() {
        const selected = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$plugin$2d$dialog$40$2$2e$6$2e$0$2f$node_modules$2f40$tauri$2d$apps$2f$plugin$2d$dialog$2f$dist$2d$js$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["open"])({
            directory: true,
            multiple: false,
            recursive: true
        });
        return selected;
    }
    async selectFiles(name, extensions) {
        const selected = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$plugin$2d$dialog$40$2$2e$6$2e$0$2f$node_modules$2f40$tauri$2d$apps$2f$plugin$2d$dialog$2f$dist$2d$js$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["open"])({
            multiple: true,
            filters: [
                {
                    name,
                    extensions
                }
            ]
        });
        return Array.isArray(selected) ? selected : selected ? [
            selected
        ] : [];
    }
    async saveFile(filename, content, filepath, mimeType) {
        try {
            const ext = filename.split('.').pop() || '';
            if (this.isIOSApp) {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$choochmeque$2b$tauri$2d$plugin$2d$sharekit$2d$api$40$0$2e$3$2e$0$2f$node_modules$2f40$choochmeque$2f$tauri$2d$plugin$2d$sharekit$2d$api$2f$dist$2d$js$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["shareFile"])(filepath, {
                    mimeType: mimeType || 'application/octet-stream'
                });
            } else {
                const filePath = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$plugin$2d$dialog$40$2$2e$6$2e$0$2f$node_modules$2f40$tauri$2d$apps$2f$plugin$2d$dialog$2f$dist$2d$js$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["save"])({
                    defaultPath: filename,
                    filters: [
                        {
                            name: ext.toUpperCase(),
                            extensions: [
                                ext
                            ]
                        }
                    ]
                });
                if (!filePath) return false;
                if (typeof content === 'string') {
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$plugin$2d$fs$40$2$2e$4$2e$5$2f$node_modules$2f40$tauri$2d$apps$2f$plugin$2d$fs$2f$dist$2d$js$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["writeTextFile"])(filePath, content);
                } else {
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$plugin$2d$fs$40$2$2e$4$2e$5$2f$node_modules$2f40$tauri$2d$apps$2f$plugin$2d$fs$2f$dist$2d$js$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["writeFile"])(filePath, new Uint8Array(content));
                }
            }
            return true;
        } catch (error) {
            console.error('Failed to save file:', error);
            return false;
        }
    }
    async migrate20251029() {
        console.log('Running migration 20251029 to update paths in Images dir...');
        const rootPath = await this.resolveFilePath('..', 'Data');
        const newDir = await this.fs.getPrefix('Images');
        const oldDir = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$path$2e$js__$5b$client$5d$__$28$ecmascript$29$__["join"])(rootPath, 'Images', 'Readest', 'Images');
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$files$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["copyFiles"])(this, oldDir, newDir);
        const dirToDelete = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$path$2e$js__$5b$client$5d$__$28$ecmascript$29$__["join"])(rootPath, 'Images', 'Readest');
        await this.deleteDir(dirToDelete, 'None', true);
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=apps_readest-app_src_e2a3cfbb._.js.map