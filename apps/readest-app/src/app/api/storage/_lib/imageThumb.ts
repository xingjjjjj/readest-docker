/**
 * 封面缩略图生成（P1 网络/首屏优化）
 * 生成 600px WebP；兼容原则：只新增 cover.webp，永不修改/删除 cover.png；
 * 失败静默返回 false，旧路径不受影响。写入用 tmp+rename，读方永远只见完整文件。
 */
import fs from 'node:fs/promises';
import sharp from 'sharp';

export async function generateCoverThumbWebp(
  srcPath: string,
  destPath: string,
  width = 600,
): Promise<boolean> {
  const tempOut = destPath + '.tmp';
  try {
    await sharp(srcPath)
      .rotate()
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(tempOut);
    await fs.rename(tempOut, destPath);
    return true;
  } catch (error) {
    console.warn('[ImageThumb] Failed to generate cover thumbnail:', (error as Error).message);
    try {
      await fs.rm(tempOut, { force: true });
    } catch {
      // 忽略清理错误
    }
    return false;
  }
}
