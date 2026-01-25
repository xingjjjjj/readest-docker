/**
 * 优化的书籍加载服务
 * 支持缓存和分块加载
 */

import { Book } from '@/types/book';
import { bookMetadataCache, CachedBookMetadata } from '@/utils/bookMetadataCache';
import { apiFileSystem } from './apiFileSystem';

interface BookLoadOptions {
    useCache?: boolean;
    skipMetadata?: boolean;
}

/**
 * 获取书籍的缓存元数据（从后端预生成的信息）
 */
export async function getBookMetadataInfo(book: Book): Promise<CachedBookMetadata | null> {
    try {
        // 尝试从 IndexedDB 缓存获取
        const cached = await bookMetadataCache.get(book.hash, book.updatedAt);
        if (cached) {
            console.log('[BookLoader] Using cached metadata for:', book.title);
            return cached;
        }

        // 从后端 API 获取预生成的元数据
        const response = await fetch(
            `/api/storage/book-metadata?relativePath=${encodeURIComponent(book.relativePath || '')}`,
            {
                cache: 'no-store',
            }
        );

        if (!response.ok) {
            console.warn('[BookLoader] Metadata not found for:', book.title);
            return null;
        }

        const metadata = (await response.json()) as CachedBookMetadata;

        // 保存到 IndexedDB 缓存
        const cacheEntry: CachedBookMetadata = {
            ...metadata,
            hash: book.hash,
            cachedAt: Date.now(),
            fileModifiedTime: book.updatedAt,
        };
        await bookMetadataCache.set(cacheEntry);

        console.log('[BookLoader] Cached metadata for:', book.title);
        return cacheEntry;
    } catch (error) {
        console.warn('[BookLoader] Error getting metadata:', error);
        return null;
    }
}

/**
 * 预加载书籍信息
 * 用于列表页面快速显示书籍摘要，无需完整解析
 */
export async function preloadBookInfo(book: Book): Promise<void> {
    try {
        // 仅在必要时加载
        if (!book.metadata) {
            const metadata = await getBookMetadataInfo(book);
            if (metadata) {
                const chaptersCount = metadata.spineItems?.length || 0;
                console.log(`[BookLoader] Preloaded: ${book.title} - ${chaptersCount} chapters`);
            }
        }
    } catch (error) {
        console.warn('[BookLoader] Error preloading book:', error);
    }
}

/**
 * 批量预加载多本书籍的信息
 */
export async function preloadBooksInfo(books: Book[]): Promise<void> {
    // 并发但有限流
    const batchSize = 3;
    for (let i = 0; i < books.length; i += batchSize) {
        const batch = books.slice(i, i + batchSize);
        await Promise.all(batch.map((book) => preloadBookInfo(book)));
    }
}

/**
 * 清空本地缓存
 */
export async function clearBookCache(): Promise<void> {
    try {
        await bookMetadataCache.clear();
        console.log('[BookLoader] Cleared all book caches');
    } catch (error) {
        console.warn('[BookLoader] Error clearing cache:', error);
    }
}

/**
 * 获取缓存统计
 */
export async function getBookCacheStats(): Promise<{
    cacheSize: string;
    itemCount: number;
}> {
    try {
        // 获取 IndexedDB 存储大小估计
        if ('storage' in navigator && 'estimate' in navigator.storage) {
            const estimate = await navigator.storage.estimate();
            return {
                cacheSize: `${(estimate.usage! / 1024 / 1024).toFixed(2)} MB`,
                itemCount: estimate.usage! > 0 ? 1 : 0,
            };
        }
        return { cacheSize: 'Unknown', itemCount: 0 };
    } catch (error) {
        console.warn('[BookLoader] Error getting cache stats:', error);
        return { cacheSize: 'Unknown', itemCount: 0 };
    }
}
