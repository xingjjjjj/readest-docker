/**
 * 优化的书籍加载服务
 * 集成分块加载、缓存、预加载、后台同步
 * 提供快速的首次打开和流畅的阅读体验
 */

import { Book } from '@/types/book';
import { BookDoc } from '@/libs/document';
import { DocumentLoader } from '@/libs/document';
import { AppService } from '@/types/system';
import { ChunkedFileLoader } from './chunkedFileLoader';
import { chapterCache, ChapterCacheEntry } from './chapterCache';
import { getBookMetadataInfo } from './bookLoaderService';

export interface BookLoadingStrategy {
    // 是否启用分块加载
    useChunkedLoader: boolean;
    // 是否启用缓存
    useCache: boolean;
    // 预加载的章节数量
    preloadChaptersCount: number;
    // 是否在后台预加载
    enableBackgroundPreload: boolean;
    // 后台加载的优先级
    backgroundPriority: 'idle' | 'low' | 'normal';
}

const DEFAULT_STRATEGY: BookLoadingStrategy = {
    useChunkedLoader: true,
    useCache: true,
    preloadChaptersCount: 3,
    enableBackgroundPreload: true,
    backgroundPriority: 'idle',
};

/**
 * 优化的书籍加载器
 * 提供快速打开和流畅阅读体验
 */
export class OptimizedBookLoader {
    private book: Book;
    private chunkedLoader: ChunkedFileLoader | null = null;
    private appService: AppService;
    private strategy: BookLoadingStrategy;
    private loadedDocument: BookDoc | null = null;
    private preloadingChapters: Set<number> = new Set();
    private backgroundLoadController: AbortController | null = null;

    constructor(book: Book, appService: AppService, strategy: Partial<BookLoadingStrategy> = {}) {
        this.book = book;
        this.appService = appService;
        this.strategy = { ...DEFAULT_STRATEGY, ...strategy };
    }

    /**
     * 快速打开书籍（第1层）
     * 目标：<200ms内获取基本信息和目录
     */
    async quickOpen(): Promise<{
        metadata: any;
        spine: any[];
        toc: any[];
        loadingPercent: number;
    }> {
        try {
            // 优先获取预生成/缓存元数据，失败则返回基础信息
            const metadata = (await getBookMetadataInfo(this.book)) || {
                title: this.book.title,
                spine: [],
                toc: [],
            };

            console.log(`[OptimizedLoader] Quick open completed for: ${this.book.title}`);

            return {
                metadata,
                spine: (metadata as any).spine || [],
                toc: (metadata as any).toc || [],
                loadingPercent: 5,
            };
        } catch (error) {
            console.error('[OptimizedLoader] Error in quickOpen:', error);
            throw error;
        }
    }

    /**
     * 打开并渲染首页（第2层）
     * 目标：<500ms内可以开始阅读
     */
    async openForReading(startPosition?: { spineIndex: number; cfi?: string }): Promise<{
        document: BookDoc;
        spine: any[];
        toc: any[];
        loadingPercent: number;
    }> {
        try {
            // 1. 加载文件
            const { file, pdfRangeSource } = await this.loadFile();

            // 2. 解析文档
            const docLoader = new DocumentLoader(
                file ?? new File([], 'dummy.pdf'),
                pdfRangeSource ? { pdfRangeSource } : undefined
            );
            const { book: doc } = await docLoader.open();
            this.loadedDocument = doc;

            // 3. 定位到阅读位置
            if (startPosition) {
                console.log(
                    `[OptimizedLoader] Opening at spine ${startPosition.spineIndex}, CFI: ${startPosition.cfi}`
                );
            }

            // 4. 后台预加载相邻章节
            // 注意：PDF 流式加载时禁用预加载，因为 PDF.js 会按需请求
            if (this.strategy.enableBackgroundPreload && !pdfRangeSource) {
                this.startBackgroundPreload(startPosition?.spineIndex ?? 0);
            } else if (pdfRangeSource) {
                console.log('[OptimizedLoader] 🚫 Background preload disabled for PDF streaming');
            }

            console.log(`[OptimizedLoader] Document opened: ${this.book.title}`);

            return {
                document: doc,
                spine: doc.sections || [],
                toc: doc.toc || [],
                loadingPercent: 30,
            };
        } catch (error) {
            console.error('[OptimizedLoader] Error in openForReading:', error);
            throw error;
        }
    }

    /**
     * 加载指定章节
     * 优先从缓存读取，其次从已加载的文件读取
     */
    async loadChapter(spineIndex: number): Promise<ArrayBuffer> {
        try {
            // 1. 尝试从缓存获取
            if (this.strategy.useCache) {
                const cached = await chapterCache.getChapter(this.book.hash, spineIndex);
                if (cached) {
                    console.log(`[OptimizedLoader] Cache hit for chapter ${spineIndex}`);
                    return cached.content;
                }
            }

            // 2. 从文件中提取章节
            console.log(`[OptimizedLoader] Loading chapter ${spineIndex} from file`);

            const content = await this.extractChapterContent(spineIndex);

            // 3. 保存到缓存
            if (this.strategy.useCache && content.byteLength > 0) {
                await chapterCache.saveChapter({
                    bookHash: this.book.hash,
                    spineIndex,
                    href: `chapter-${spineIndex}`,
                    content,
                    mediaType: 'application/xhtml+xml',
                    size: content.byteLength,
                    hash: this.hashContent(content),
                });
            }

            return content;
        } catch (error) {
            console.error(`[OptimizedLoader] Error loading chapter ${spineIndex}:`, error);
            throw error;
        }
    }

    /**
     * 预加载相邻章节
     */
    async preloadChapters(currentIndex: number, count: number = this.strategy.preloadChaptersCount): Promise<void> {
        try {
            const indices: number[] = [];

            // 预加载前后各 count/2 章
            const before = Math.floor(count / 2);
            const after = count - before;

            for (let i = Math.max(0, currentIndex - before); i < currentIndex + after; i++) {
                if (!this.preloadingChapters.has(i) && i !== currentIndex) {
                    indices.push(i);
                }
            }

            console.log(`[OptimizedLoader] Preloading ${indices.length} chapters: ${indices.join(', ')}`);

            // 并行加载，限制并发
            const batchSize = 2;
            for (let i = 0; i < indices.length; i += batchSize) {
                const batch = indices.slice(i, i + batchSize);
                batch.forEach((idx) => this.preloadingChapters.add(idx));

                await Promise.all(
                    batch.map((idx) =>
                        this.loadChapter(idx).catch((error) => {
                            console.warn(`[OptimizedLoader] Failed to preload chapter ${idx}:`, error);
                        })
                    )
                );
            }

            console.log(`[OptimizedLoader] Preloading completed`);
        } catch (error) {
            console.error('[OptimizedLoader] Error in preloadChapters:', error);
        }
    }

    /**
     * 启动后台预加载（第3层）
     * 在浏览器空闲时加载剩余章节
     */
    private startBackgroundPreload(startIndex: number): void {
        if (this.backgroundLoadController) {
            this.backgroundLoadController.abort();
        }

        this.backgroundLoadController = new AbortController();

        // 使用 requestIdleCallback，不阻塞主线程
        if ('requestIdleCallback' in window) {
            (window.requestIdleCallback as any)(
                () => this.backgroundLoadAllChapters(startIndex, this.backgroundLoadController!),
                { timeout: 30000 }
            );
        } else {
            // Fallback：延迟加载
            setTimeout(
                () => this.backgroundLoadAllChapters(startIndex, this.backgroundLoadController!),
                2000
            );
        }
    }

    /**
     * 后台加载所有章节
     */
    private async backgroundLoadAllChapters(startIndex: number, controller: AbortController): Promise<void> {
        try {
            if (!this.loadedDocument) {
                console.log('[OptimizedLoader] Document not loaded, skipping background preload');
                return;
            }

            const spineCount = this.loadedDocument.sections?.length || 0;
            console.log(
                `[OptimizedLoader] Starting background load of ${spineCount} chapters from index ${startIndex}`
            );

            // 按优先级加载：
            // 1. 当前之后的章节（优先级高）
            // 2. 当前之前的章节（优先级低）

            const afterIndices = Array.from({ length: spineCount - startIndex - 1 }, (_, i) => startIndex + i + 1);
            const beforeIndices = Array.from({ length: startIndex }, (_, i) => i);
            const allIndices = [...afterIndices, ...beforeIndices];

            for (const index of allIndices) {
                if (controller.signal.aborted) {
                    console.log('[OptimizedLoader] Background preload cancelled');
                    break;
                }

                // 检查是否已缓存
                if (this.strategy.useCache) {
                    const cached = await chapterCache.getChapter(this.book.hash, index);
                    if (cached) {
                        console.log(`[OptimizedLoader] Chapter ${index} already cached, skipping`);
                        continue;
                    }
                }

                try {
                    console.log(`[OptimizedLoader] Background loading chapter ${index}`);
                    await this.loadChapter(index);
                } catch (error) {
                    console.warn(`[OptimizedLoader] Failed to load chapter ${index} in background:`, error);
                }

                // 让出CPU，避免阻塞UI
                await new Promise(resolve => setTimeout(resolve, 100));
            }

            console.log('[OptimizedLoader] Background preload completed');
        } catch (error) {
            console.error('[OptimizedLoader] Error in backgroundLoadAllChapters:', error);
        }
    }

    /**
     * 加载文件（支持分块加载）
     */
    private async loadFile(): Promise<{ file?: File; pdfRangeSource?: { size: number; rangeFetcher: (begin: number, end: number) => Promise<ArrayBuffer> } }> {
        try {
            // 获取文件路径
            const fp = this.getBookFilePath();
            const isPDF = this.book.format?.toUpperCase?.() === 'PDF' || fp.toLowerCase().endsWith('.pdf');

            if (this.strategy.useChunkedLoader) {
                // 使用分块加载器
                if (!this.chunkedLoader) {
                    this.chunkedLoader = new ChunkedFileLoader(fp);
                }

                if (isPDF) {
                    const info = await this.chunkedLoader.getFileInfo();
                    console.log(`[OptimizedLoader] 📄 PDF streaming enabled: ${(info.size / 1024 / 1024).toFixed(1)} MB`);

                    const rangeFetcher = async (begin: number, end: number) => {
                        // 注意：PDF.js 的 end 为"右开区间"(exclusive)
                        // 验证范围
                        if (begin < 0 || begin >= info.size || end <= begin) {
                            console.warn(`[OptimizedLoader] Invalid range: [${begin}, ${end})`);
                            return new ArrayBuffer(0);
                        }

                        // 调整 end 到文件大小内，getRange 需要 inclusive end
                        const actualEndExclusive = Math.min(end, info.size);
                        return await this.chunkedLoader!.getRange(begin, actualEndExclusive - 1);
                    };

                    return { pdfRangeSource: { size: info.size, rangeFetcher } };
                }

                const file = await this.chunkedLoader.getCompleteFile(this.book.title);
                return { file };
            } else {
                const file = await this.appService.openFile(fp, 'Books');
                return { file };
            }
        } catch (error) {
            console.error('[OptimizedLoader] Error loading file:', error);
            throw error;
        }
    }

    /**
     * 从加载的文档中提取章节内容
     * 这是一个占位符实现，实际需要与BookDoc的章节结构集成
     */
    private async extractChapterContent(spineIndex: number): Promise<ArrayBuffer> {
        try {
            if (!this.loadedDocument) {
                throw new Error('Document not loaded');
            }

            const section = this.loadedDocument.sections?.[spineIndex];
            if (!section) {
                throw new Error(`Section ${spineIndex} not found`);
            }

            // foliate section.load() 通常返回字符串或 Document
            const loaded = await (section as any).load?.();
            let html = '';
            if (typeof loaded === 'string') {
                html = loaded;
            } else if (loaded instanceof Document) {
                html = loaded.documentElement.outerHTML;
            } else if (loaded?.documentElement) {
                html = loaded.documentElement.outerHTML;
            } else {
                html = String(loaded ?? '');
            }

            return new TextEncoder().encode(html).buffer as ArrayBuffer;
        } catch (error) {
            console.error(`[OptimizedLoader] Error extracting chapter ${spineIndex}:`, error);
            throw error;
        }
    }

    /**
     * 简单的内容hash函数
     */
    private hashContent(content: ArrayBuffer): string {
        const arr = new Uint8Array(content);
        let hash = 0;
        for (let i = 0; i < Math.min(arr.length, 10000); i++) {
            hash = ((hash << 5) - hash) + (arr[i] ?? 0);
            hash = hash & hash; // Convert to 32bit integer
        }
        return hash.toString(36);
    }

    /**
     * 获取书籍文件路径
     */
    private getBookFilePath(): string {
        // 优先使用 filePath，其次使用 title.format，最后使用 hash/book.format
        if (this.book.filePath) {
            return this.book.filePath;
        }

        // 如果有 title，使用 title + 扩展名
        if (this.book.title) {
            return `${this.book.title}.${this.book.format.toLowerCase()}`;
        }

        // 兜底方案：hash/book.format
        return `${this.book.hash}/book.${this.book.format.toLowerCase()}`;
    }

    /**
     * 清空加载器的资源
     */
    async dispose(): Promise<void> {
        if (this.backgroundLoadController) {
            this.backgroundLoadController.abort();
        }

        if (this.chunkedLoader) {
            this.chunkedLoader.clearCache();
        }

        console.log(`[OptimizedLoader] Disposed: ${this.book.title}`);
    }

    /**
     * 获取加载统计信息
     */
    async getStats(): Promise<{
        cacheHitRate: number;
        loadedSize: number;
        totalSize: number;
        cachedChapters: number;
    }> {
        const bookStats = await chapterCache.getBookStats(this.book.hash);
        return {
            cacheHitRate: 0, // TODO: 实现统计
            loadedSize: bookStats.totalSize,
            totalSize: this.chunkedLoader?.getCacheStats().fileSize || 0,
            cachedChapters: bookStats.chapterCount,
        };
    }
}

/**
 * 便利函数：创建并快速打开书籍
 */
export async function openBookOptimized(
    book: Book,
    appService: AppService,
    position?: { spineIndex: number; cfi?: string },
    strategy?: Partial<BookLoadingStrategy>
): Promise<{
    document: BookDoc;
    loader: OptimizedBookLoader;
    loadingPercent: number;
}> {
    const loader = new OptimizedBookLoader(book, appService, strategy);

    try {
        // 快速打开第1层
        await loader.quickOpen();

        // 打开并渲染首页（第2层）
        const result = await loader.openForReading(position);

        return {
            document: result.document,
            loader,
            loadingPercent: result.loadingPercent,
        };
    } catch (error) {
        await loader.dispose();
        throw error;
    }
}
