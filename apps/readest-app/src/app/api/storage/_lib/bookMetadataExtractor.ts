/**
 * 服务端书籍元数据提取器
 * 在 scan-and-import 时提前解析书籍元数据，供前端快速加载使用
 */

import fs from 'node:fs/promises';
import path from 'node:path';
import { execSync } from 'node:child_process';

export interface BookMetadataInfo {
    hash: string;
    title: string;
    author?: string;
    format: string;
    // 目录项数量
    tocItemCount?: number;
    // 大致的章节数（对于 EPUB）
    estimatedChapters?: number;
    // 预生成的摘要
    summary?: {
        hasSpine: boolean;
        hasToc: boolean;
        language?: string;
    };
}

/**
 * 从 EPUB 文件提取元数据
 */
async function extractEpubMetadata(filePath: string, hash: string): Promise<Partial<BookMetadataInfo>> {
    try {
        // 使用 unzip 提取 content.opf 文件来获取元数据
        const tempDir = path.join('/tmp', `epub_meta_${hash}_${Date.now()}`);
        await fs.mkdir(tempDir, { recursive: true });

        try {
            execSync(`unzip -q "${filePath}" -d "${tempDir}"`, { stdio: 'pipe' });
        } catch {
            // unzip 可能失败，继续处理
        }

        const opfPath = path.join(tempDir, 'content.opf');
        const opfContent = await fs.readFile(opfPath, 'utf-8').catch(() => '');

        // 解析 OPF 获取基本信息
        const titleMatch = opfContent.match(/<dc:title[^>]*>([^<]+)<\/dc:title>/);
        const authorMatch = opfContent.match(/<dc:creator[^>]*>([^<]+)<\/dc:creator>/);
        const languageMatch = opfContent.match(/<dc:language[^>]*>([^<]+)<\/dc:language>/);

        // 计算 spine 项数（章节数）
        const spineMatch = opfContent.match(/<spine[^>]*>([\s\S]*?)<\/spine>/);
        const estimatedChapters = spineMatch && spineMatch[1]
            ? (spineMatch[1].match(/<itemref/g) || []).length
            : undefined;

        // 计算目录项数
        const tocMatch = opfContent.match(/<nav[^>]*label="toc"[^>]*>([\s\S]*?)<\/nav>/);
        const tocItemCount = tocMatch && tocMatch[1]
            ? (tocMatch[1].match(/<a/g) || []).length
            : undefined;

        // 清理临时文件
        try {
            execSync(`rm -rf "${tempDir}"`, { stdio: 'pipe' });
        } catch {
            // 忽略清理错误
        }

        return {
            hash,
            title: titleMatch ? titleMatch[1] : 'Unknown',
            author: authorMatch ? authorMatch[1] : undefined,
            format: 'EPUB',
            estimatedChapters,
            tocItemCount,
            summary: {
                hasSpine: !!spineMatch,
                hasToc: !!tocMatch,
                language: languageMatch ? languageMatch[1] : undefined,
            },
        };
    } catch (error) {
        console.warn(`[BookMetadataExtractor] Failed to extract EPUB metadata for ${hash}:`, error);
        return { hash, format: 'EPUB' };
    }
}

/**
 * 从 MOBI 文件提取基本元数据
 */
async function extractMobiMetadata(filePath: string, hash: string): Promise<Partial<BookMetadataInfo>> {
    try {
        // MOBI 元数据提取较复杂，暂时仅返回基本信息
        return {
            hash,
            format: 'MOBI',
        };
    } catch (error) {
        console.warn(`[BookMetadataExtractor] Failed to extract MOBI metadata for ${hash}:`, error);
        return { hash, format: 'MOBI' };
    }
}

/**
 * 从 PDF 文件提取基本元数据
 */
async function extractPdfMetadata(filePath: string, hash: string): Promise<Partial<BookMetadataInfo>> {
    try {
        // PDF 元数据提取需要专门的库，这里仅返回基本信息
        return {
            hash,
            format: 'PDF',
        };
    } catch (error) {
        console.warn(`[BookMetadataExtractor] Failed to extract PDF metadata for ${hash}:`, error);
        return { hash, format: 'PDF' };
    }
}

/**
 * 主提取函数
 */
export async function extractBookMetadata(
    filePath: string,
    hash: string,
    format: string,
): Promise<BookMetadataInfo> {
    const ext = path.extname(filePath).toLowerCase();

    let metadata: Partial<BookMetadataInfo> = { hash, format };

    try {
        if (ext === '.epub') {
            metadata = await extractEpubMetadata(filePath, hash);
        } else if (ext === '.mobi' || ext === '.azw' || ext === '.azw3') {
            metadata = await extractMobiMetadata(filePath, hash);
        } else if (ext === '.pdf') {
            metadata = await extractPdfMetadata(filePath, hash);
        }
    } catch (error) {
        console.error(`[BookMetadataExtractor] Error extracting metadata for ${hash}:`, error);
    }

    return metadata as BookMetadataInfo;
}

/**
 * 保存提取的元数据到文件
 */
export async function saveBookMetadataInfo(
    metadataDir: string,
    metadata: BookMetadataInfo,
): Promise<void> {
    try {
        const metadataFile = path.join(metadataDir, 'metadata.json');
        await fs.writeFile(metadataFile, JSON.stringify(metadata, null, 2), 'utf-8');
        console.log(`[BookMetadataExtractor] ✓ Saved metadata for ${metadata.hash}`);
    } catch (error) {
        console.warn(`[BookMetadataExtractor] Failed to save metadata:`, error);
    }
}

/**
 * 从文件读取已保存的元数据
 */
export async function loadBookMetadataInfo(metadataDir: string): Promise<BookMetadataInfo | null> {
    try {
        const metadataFile = path.join(metadataDir, 'metadata.json');
        const content = await fs.readFile(metadataFile, 'utf-8');
        return JSON.parse(content) as BookMetadataInfo;
    } catch {
        return null;
    }
}
