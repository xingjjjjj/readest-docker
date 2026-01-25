/**
 * 服务器端封面提取器
 * 从电子书文件中提取封面图片
 * 使用 Node.js 内置模块和系统 unzip 命令，无需额外依赖
 */

import fs from 'node:fs/promises';
import path from 'node:path';
import { exec } from 'node:child_process';
import { promisify } from 'node:util';

const execAsync = promisify(exec);

/**
 * 从 EPUB 文件中提取封面（使用系统 unzip 命令）
 */
async function extractEpubCover(filePath: string): Promise<Buffer | null> {
    const tempDir = path.join(path.dirname(filePath), '.temp_' + Date.now());

    try {
        // 创建临时目录
        await fs.mkdir(tempDir, { recursive: true });

        // 1. 解压 META-INF/container.xml
        try {
            await execAsync(`unzip -q "${filePath}" "META-INF/container.xml" -d "${tempDir}"`);
        } catch (e) {
            return null;
        }

        // 2. 读取 container.xml 找到 OPF 文件路径
        const containerPath = path.join(tempDir, 'META-INF', 'container.xml');
        const containerXml = await fs.readFile(containerPath, 'utf8');
        const opfMatch = containerXml.match(/full-path="([^"]+)"/);
        if (!opfMatch) return null;

        const opfPath = opfMatch[1];
        if (!opfPath) return null;

        // 3. 解压 OPF 文件
        try {
            await execAsync(`unzip -q "${filePath}" "${opfPath}" -d "${tempDir}"`);
        } catch (e) {
            return null;
        }

        // 4. 读取 OPF 文件查找封面
        const opfFullPath = path.join(tempDir, opfPath);
        const opfXml = await fs.readFile(opfFullPath, 'utf8');
        const opfDir = path.dirname(opfPath);

        let coverImagePath: string | null = null;

        // 方法 1: 查找 <meta name="cover" content="..."/>
        const coverMetaMatch = opfXml.match(/<meta[^>]*name=["']cover["'][^>]*content=["']([^"']+)["']/i);
        if (coverMetaMatch) {
            const coverId = coverMetaMatch[1];
            const itemMatch = opfXml.match(new RegExp(`<item[^>]*id=["']${coverId}["'][^>]*href=["']([^"']+)["']`, 'i'));
            if (itemMatch && itemMatch[1]) {
                coverImagePath = path.join(opfDir, decodeURIComponent(itemMatch[1])).replace(/\\/g, '/');
            }
        }

        // 方法 2: 查找 properties="cover-image"
        if (!coverImagePath) {
            const coverImageMatch = opfXml.match(/<item[^>]*properties=["']cover-image["'][^>]*href=["']([^"']+)["']/i);
            if (coverImageMatch && coverImageMatch[1]) {
                coverImagePath = path.join(opfDir, decodeURIComponent(coverImageMatch[1])).replace(/\\/g, '/');
            }
        }

        if (!coverImagePath) return null;

        // 5. 解压封面图片
        try {
            await execAsync(`unzip -q "${filePath}" "${coverImagePath}" -d "${tempDir}"`);
        } catch (e) {
            return null;
        }

        // 6. 读取封面文件
        const coverFullPath = path.join(tempDir, coverImagePath);
        const coverBuffer = await fs.readFile(coverFullPath);

        return coverBuffer;
    } catch (error) {
        console.error('[CoverExtractor] Failed to extract EPUB cover:', error);
        return null;
    } finally {
        // 清理临时目录
        try {
            await fs.rm(tempDir, { recursive: true, force: true });
        } catch (e) {
            // 忽略清理错误
        }
    }
}

/**
 * 从 MOBI/AZW 文件中提取封面
 * MOBI 格式需要专门的解析，暂不实现
 */
async function extractMobiCover(filePath: string): Promise<Buffer | null> {
    // MOBI 封面提取需要解析复杂的 MOBI 格式
    // 暂时返回 null，前端会从书籍内容中动态提取
    return null;
}

/**
 * 主函数：根据文件类型提取封面
 */
export async function extractCover(filePath: string): Promise<Buffer | null> {
    const ext = path.extname(filePath).toLowerCase();

    switch (ext) {
        case '.epub':
            return await extractEpubCover(filePath);
        case '.mobi':
        case '.azw':
        case '.azw3':
            return await extractMobiCover(filePath);
        default:
            return null;
    }
}
