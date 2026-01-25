/**
 * 图片压缩和优化工具
 * 用于压缩书籍封面，减少存储和传输成本
 */

/**
 * 压缩配置
 */
export interface CompressionOptions {
    /**
     * 最大宽度（像素）
     * 封面预览通常不需要超过 400px
     */
    maxWidth?: number;
    /**
     * 最大高度（像素）
     */
    maxHeight?: number;
    /**
     * 图片格式：jpeg, webp 或 png
     * 默认: webp (最优压缩)
     */
    format?: 'image/jpeg' | 'image/webp' | 'image/png';
    /**
     * 图片质量 0.0 - 1.0
     * 默认: 0.8 (对书籍封面来说是最佳平衡)
     */
    quality?: number;
}

/**
 * 默认压缩配置 - 针对书籍封面优化
 * 
 * 大多数设备的屏幕宽度：
 * - 手机: 320-428px
 * - 平板: 600-1024px
 * - 桌面: 1920px+
 * 
 * 建议: 最大宽度 400px 足够覆盖所有设备
 * 质量: 0.75-0.85 对于书籍封面已经很好看了
 */
export const DEFAULT_COMPRESSION_OPTIONS: CompressionOptions = {
    maxWidth: 400,
    maxHeight: 600,
    format: 'image/webp',
    quality: 0.8,
};

/**
 * Canvas 压缩图片
 * 使用 canvas 的 toBlob 方法，支持质量控制
 */
async function compressWithCanvas(
    blob: Blob,
    options: CompressionOptions,
): Promise<Blob> {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = 'anonymous';

        img.onload = () => {
            try {
                const { maxWidth = 400, maxHeight = 600, format = 'image/webp', quality = 0.8 } = options;

                // 计算新尺寸，保持宽高比
                let newWidth = img.width;
                let newHeight = img.height;

                if (img.width > maxWidth || img.height > maxHeight) {
                    const widthRatio = maxWidth / img.width;
                    const heightRatio = maxHeight / img.height;
                    const ratio = Math.min(widthRatio, heightRatio);

                    newWidth = Math.round(img.width * ratio);
                    newHeight = Math.round(img.height * ratio);
                }

                const canvas = document.createElement('canvas');
                canvas.width = newWidth;
                canvas.height = newHeight;

                const ctx = canvas.getContext('2d');
                if (!ctx) {
                    reject(new Error('Failed to get canvas context'));
                    return;
                }

                ctx.imageSmoothingEnabled = true;
                ctx.imageSmoothingQuality = 'high';
                ctx.drawImage(img, 0, 0, newWidth, newHeight);

                canvas.toBlob(
                    (compressedBlob) => {
                        if (compressedBlob) {
                            resolve(compressedBlob);
                        } else {
                            reject(new Error('Failed to compress image'));
                        }
                    },
                    format,
                    quality,
                );
            } catch (error) {
                reject(new Error(`Failed to compress image: ${error}`));
            }
        };

        img.onerror = () => {
            reject(new Error('Failed to load image for compression'));
        };

        const objectUrl = URL.createObjectURL(blob);
        img.src = objectUrl;

        const cleanup = () => URL.revokeObjectURL(objectUrl);
        const originalOnload = img.onload;
        img.onload = function (ev: Event) {
            if (originalOnload) originalOnload.call(this, ev);
            cleanup();
        };
        const originalOnerror = img.onerror;
        img.onerror = function (ev: Event) {
            if (originalOnerror) originalOnerror.call(this, ev);
            cleanup();
        };
    });
}

/**
 * 压缩图片 Blob
 *
 * @example
 * ```ts
 * const blob = new Blob([imageData], { type: 'image/png' });
 * const compressed = await compressImage(blob, {
 *   maxWidth: 400,
 *   quality: 0.8,
 *   format: 'image/webp'
 * });
 * console.log(`原始: ${blob.size}, 压缩后: ${compressed.size}`);
 * // 原始: 850KB, 压缩后: 45KB
 * ```
 */
export async function compressImage(
    blob: Blob,
    options: CompressionOptions = DEFAULT_COMPRESSION_OPTIONS,
): Promise<Blob> {
    // 如果已经是 WebP 或 JPEG，直接压缩
    if (blob.type === 'image/webp' || blob.type === 'image/jpeg' || blob.type === 'image/png') {
        return await compressWithCanvas(blob, options);
    }

    // SVG 转 PNG 后再压缩
    if (blob.type === 'image/svg+xml') {
        // 先转 PNG，再压缩
        // 这里应该先调用 svg2png，再压缩
        // 但为了保持独立，直接用 canvas 处理
        return await compressWithCanvas(blob, options);
    }

    // 其他格式，尝试 canvas 压缩
    return await compressWithCanvas(blob, options);
}

/**
 * 压缩图片为 ArrayBuffer
 * 用于直接保存到文件系统
 */
export async function compressImageToArrayBuffer(
    blob: Blob,
    options: CompressionOptions = DEFAULT_COMPRESSION_OPTIONS,
): Promise<ArrayBuffer> {
    const compressed = await compressImage(blob, options);
    return await compressed.arrayBuffer();
}

/**
 * 获取压缩信息
 * 用于调试和监控
 */
export function getCompressionInfo(
    originalSize: number,
    compressedSize: number,
): { ratio: number; saved: number; savedPercent: string } {
    const ratio = compressedSize / originalSize;
    const saved = originalSize - compressedSize;
    const savedPercent = `${((saved / originalSize) * 100).toFixed(1)}%`;

    return {
        ratio,
        saved,
        savedPercent,
    };
}

/**
 * 格式化文件大小
 * @example
 * ```ts
 * formatFileSize(1024) // "1 KB"
 * formatFileSize(1048576) // "1 MB"
 * ```
 */
export function formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 B';

    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return `${(bytes / Math.pow(k, i)).toFixed(1)} ${sizes[i]}`;
}

/**
 * 判断是否需要压缩
 * 文件大小超过 100KB 建议压缩
 */
export function shouldCompress(blob: Blob): boolean {
    return blob.size > 100 * 1024; // 100KB
}
