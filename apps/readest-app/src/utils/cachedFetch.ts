/**
 * 缓存感知的文件获取管理器
 * 支持多层缓存策略：HTTP 缓存 → IndexedDB → 网络请求
 */

import { indexedDBCache } from './indexedDBCache';

export type FetchOptions = {
    /** 缓存策略 */
    cacheStrategy?: 'network-first' | 'cache-first' | 'stale-while-revalidate';
    /** 缓存过期时间（毫秒），0 表示不过期 */
    cacheTTL?: number;
    /** 是否跳过缓存 */
    bypassCache?: boolean;
    /** 自定义 HTTP 头 */
    headers?: Record<string, string>;
    /** 进度回调 */
    onProgress?: (progress: number) => void;
};

const DEFAULT_OPTIONS: FetchOptions = {
    cacheStrategy: 'cache-first',
    cacheTTL: 30 * 24 * 60 * 60 * 1000, // 30 天
};

/**
 * 生成缓存键
 */
function generateCacheKey(url: string): string {
    return `file_${url}`;
}

/**
 * 缓存感知的 fetch 实现
 */
export async function cachedFetch(
    url: string,
    options: FetchOptions = {},
): Promise<{ data: ArrayBuffer; headers: Headers; fromCache: boolean }> {
    const finalOptions = { ...DEFAULT_OPTIONS, ...options };
    const cacheKey = generateCacheKey(url);

    console.log(`[cachedFetch] Fetching: ${url}, strategy: ${finalOptions.cacheStrategy}`);

    try {
        // 策略 1: cache-first - 优先使用缓存
        if (
            finalOptions.cacheStrategy === 'cache-first' &&
            !finalOptions.bypassCache
        ) {
            const cached = await indexedDBCache.get(cacheKey);
            if (cached) {
                console.log(`[cachedFetch] ✓ Using cached data for: ${url}`);
                // 创建虚拟响应头
                const headers = new Headers({
                    'Content-Type': cached.mimeType,
                    'Content-Length': cached.data.byteLength.toString(),
                    ...(cached.etag && { 'ETag': cached.etag }),
                });
                return { data: cached.data, headers, fromCache: true };
            }
        }

        // 发起网络请求
        const fetchHeaders = new Headers(finalOptions.headers || {});
        const response = await fetch(url, {
            method: 'GET',
            headers: fetchHeaders,
            signal: AbortSignal.timeout(30000), // 30秒超时
        });

        // 处理 304 Not Modified
        if (response.status === 304) {
            console.log(`[cachedFetch] 304 Not Modified for: ${url}`);
            const cached = await indexedDBCache.get(cacheKey);
            if (cached) {
                const headers = new Headers({
                    'Content-Type': cached.mimeType,
                    'Content-Length': cached.data.byteLength.toString(),
                    'ETag': response.headers.get('ETag') || cached.etag || '',
                });
                return { data: cached.data, headers, fromCache: true };
            }
        }

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        // 流式下载并记录进度
        const contentLength = parseInt(response.headers.get('Content-Length') || '0', 10);
        const reader = response.body?.getReader();
        const chunks: Uint8Array[] = [];
        let receivedLength = 0;

        if (reader) {
            while (true) {
                const { done, value } = await reader.read();
                if (done) break;

                chunks.push(value);
                receivedLength += value.length;

                // 触发进度回调
                if (contentLength > 0 && finalOptions.onProgress) {
                    const progress = Math.round((receivedLength / contentLength) * 100);
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
        for (const chunk of chunks) {
            dataView.set(chunk, offset);
            offset += chunk.length;
        }

        // 获取响应头信息
        const mimeType = response.headers.get('Content-Type') || 'application/octet-stream';
        const etag = response.headers.get('ETag');

        // 缓存数据（异步，不阻塞返回）
        if (!finalOptions.bypassCache && response.status === 200) {
            indexedDBCache
                .set(cacheKey, data, mimeType, {
                    etag: etag || undefined,
                    ttl: finalOptions.cacheTTL,
                })
                .catch((error) => {
                    console.warn(`[cachedFetch] Failed to cache ${url}:`, error);
                });
        }

        console.log(`[cachedFetch] ✓ Fetched ${(data.byteLength / 1024 / 1024).toFixed(2)} MB from network`);

        return { data, headers: response.headers, fromCache: false };
    } catch (error) {
        // 网络错误时尝试使用缓存（即使使用 network-first 策略）
        console.warn(`[cachedFetch] Network error for ${url}:`, error);
        const cached = await indexedDBCache.get(cacheKey);
        if (cached) {
            console.log(`[cachedFetch] ℹ Using stale cache due to network error: ${url}`);
            const headers = new Headers({
                'Content-Type': cached.mimeType,
                'Content-Length': cached.data.byteLength.toString(),
                'Warning': '199 - "Stale cache used due to network error"',
            });
            return { data: cached.data, headers, fromCache: true };
        }

        throw error;
    }
}

/**
 * 获取文件并自动转换为 Blob URL
 */
export async function cachedFetchAsUrl(
    url: string,
    options: FetchOptions = {},
): Promise<string> {
    const { data, headers } = await cachedFetch(url, options);
    const mimeType = headers.get('Content-Type') || 'application/octet-stream';
    const blob = new Blob([data], { type: mimeType });
    return URL.createObjectURL(blob);
}

/**
 * 获取文件并自动转换为 Base64
 */
export async function cachedFetchAsBase64(
    url: string,
    options: FetchOptions = {},
): Promise<string> {
    const { data } = await cachedFetch(url, options);
    const bytes = new Uint8Array(data);
    let binary = '';
    for (let i = 0; i < bytes.byteLength; i++) {
        binary += String.fromCharCode(bytes[i]!);
    }
    return btoa(binary);
}

/**
 * 清除缓存
 */
export async function clearFileCache(url?: string): Promise<void> {
    if (url) {
        const cacheKey = generateCacheKey(url);
        await indexedDBCache.delete(cacheKey);
        console.log(`[cachedFetch] Cleared cache for: ${url}`);
    } else {
        await indexedDBCache.clear();
        console.log('[cachedFetch] Cleared all file caches');
    }
}

/**
 * 清除过期缓存
 */
export async function clearExpiredFileCache(): Promise<number> {
    return await indexedDBCache.clearExpired();
}

/**
 * 获取缓存统计
 */
export async function getFileCacheStats() {
    return await indexedDBCache.getStats();
}
