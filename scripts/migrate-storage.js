#!/usr/bin/env node

/**
 * 迁移脚本：将旧的 hash-based 存储结构迁移到新的平面存储结构
 *
 * 旧结构：
 *   /app/readest/books/Readest/Books/{hash}/
 *   ├── book.epub
 *   ├── cover.png
 *   └── config.json
 *
 * 新结构：
 *   /app/readest/books/{category}/
 *   ├── book.epub
 *   └── book/
 *       ├── cover.png
 *       └── config.json
 */

const fs = require('fs');
const path = require('path');

const STORAGE_ROOT = process.env.LOCAL_STORAGE_ROOT || '/app/readest/books';
const OLD_STRUCTURE_ROOT = path.join(STORAGE_ROOT, 'Readest', 'Books');
const LIBRARY_FILE = path.join(STORAGE_ROOT, 'library.json');

console.log('📚 书籍存储迁移脚本');
console.log('========================');
console.log('存储根目录:', STORAGE_ROOT);
console.log('旧结构根目录:', OLD_STRUCTURE_ROOT);
console.log('');

// 检查旧结构是否存在
if (!fs.existsSync(OLD_STRUCTURE_ROOT)) {
  console.log('✅ 未找到旧的存储结构，无需迁移');
  process.exit(0);
}

// 读取书籍库
let books = [];
if (fs.existsSync(LIBRARY_FILE)) {
  try {
    const libraryContent = fs.readFileSync(LIBRARY_FILE, 'utf8');
    books = JSON.parse(libraryContent);
    console.log(`📖 找到 ${books.length} 本书籍`);
  } catch (error) {
    console.error('❌ 无法读取书籍库:', error.message);
    process.exit(1);
  }
}

// 迁移计数器
let migratedCount = 0;
let errorCount = 0;

// 遍历旧的hash目录
const hashDirs = fs.readdirSync(OLD_STRUCTURE_ROOT);

console.log(`🔄 扫描到 ${hashDirs.length} 个hash目录`);
console.log('');

hashDirs.forEach((hashDir) => {
  const oldPath = path.join(OLD_STRUCTURE_ROOT, hashDir);
  const stat = fs.statSync(oldPath);

  if (!stat.isDirectory()) {
    return;
  }

  try {
    // 找到对应的书籍记录
    const book = books.find(b => b.hash === hashDir);
    if (!book) {
      console.log(`⚠️  跳过未知的hash目录: ${hashDir}`);
      return;
    }

    // 查找书籍文件
    const files = fs.readdirSync(oldPath);
    const bookFiles = files.filter(f => 
      /\.(epub|mobi|azw3|pdf|txt)$/i.test(f)
    );

    if (bookFiles.length === 0) {
      console.log(`⚠️  ${book.title}: 未找到书籍文件`);
      return;
    }

    const bookFile = bookFiles[0];
    const bookExt = path.extname(bookFile);
    const bookBaseName = path.basename(bookFile, bookExt);
    
    // 确定新的目录结构
    // 如果书籍已有 relativePath，使用它；否则使用书名作为目录
    let newRelativePath = book.relativePath;
    if (!newRelativePath) {
      // 从旧的存储中恢复书名，作为存储路径
      const safeTitle = sanitizeFilename(book.sourceTitle || book.title);
      newRelativePath = `${safeTitle}${bookExt}`;
      book.relativePath = newRelativePath;
    }

    const newDir = path.dirname(newRelativePath);
    const newFileName = path.basename(newRelativePath);
    const newFileWithoutExt = path.basename(newRelativePath, bookExt);

    // 创建新的目录结构
    const newBookDir = path.join(STORAGE_ROOT, newDir);
    const newMetadataDir = path.join(STORAGE_ROOT, newDir, newFileWithoutExt);

    if (!fs.existsSync(newBookDir)) {
      fs.mkdirSync(newBookDir, { recursive: true });
    }
    if (!fs.existsSync(newMetadataDir)) {
      fs.mkdirSync(newMetadataDir, { recursive: true });
    }

    // 迁移书籍文件
    const oldBookPath = path.join(oldPath, bookFile);
    const newBookPath = path.join(newBookDir, newFileName);

    if (!fs.existsSync(newBookPath)) {
      fs.copyFileSync(oldBookPath, newBookPath);
      console.log(`✅ 迁移书籍: ${book.title}`);
      console.log(`   旧路径: ${path.relative(STORAGE_ROOT, oldBookPath)}`);
      console.log(`   新路径: ${path.relative(STORAGE_ROOT, newBookPath)}`);
    } else {
      console.log(`⏭️  书籍已存在，跳过: ${book.title}`);
    }

    // 迁移封面
    const coverFiles = files.filter(f => 
      /^cover\.(png|jpg|jpeg|gif)$/i.test(f)
    );
    if (coverFiles.length > 0) {
      const oldCoverPath = path.join(oldPath, coverFiles[0]);
      const newCoverPath = path.join(newMetadataDir, 'cover.png');
      if (!fs.existsSync(newCoverPath)) {
        fs.copyFileSync(oldCoverPath, newCoverPath);
        console.log(`   ✓ 封面: ${path.relative(STORAGE_ROOT, newCoverPath)}`);
      }
    }

    // 迁移配置文件
    const oldConfigPath = path.join(oldPath, 'config.json');
    if (fs.existsSync(oldConfigPath)) {
      const newConfigPath = path.join(newMetadataDir, 'config.json');
      if (!fs.existsSync(newConfigPath)) {
        fs.copyFileSync(oldConfigPath, newConfigPath);
        console.log(`   ✓ 配置: ${path.relative(STORAGE_ROOT, newConfigPath)}`);
      }
    }

    migratedCount++;
    console.log('');
  } catch (error) {
    console.error(`❌ 迁移失败 ${hashDir}:`, error.message);
    errorCount++;
  }
});

// 更新并保存书籍库
if (migratedCount > 0) {
  try {
    const updatedLibrary = JSON.stringify(books, null, 2);
    fs.writeFileSync(LIBRARY_FILE, updatedLibrary);
    fs.writeFileSync(LIBRARY_FILE + '.bak', updatedLibrary);
    console.log('✅ 已更新书籍库');
  } catch (error) {
    console.error('❌ 无法保存书籍库:', error.message);
    errorCount++;
  }
}

// 打印总结
console.log('');
console.log('========================');
console.log(`迁移完成: ${migratedCount} 本书成功迁移，${errorCount} 个错误`);

if (migratedCount > 0) {
  console.log('');
  console.log('📋 后续建议：');
  console.log('1. 备份旧的存储结构: mv Readest Readest.bak');
  console.log('2. 验证所有书籍是否正确迁移');
  console.log('3. 确认后删除旧的存储结构: rm -rf Readest.bak');
}

process.exit(errorCount > 0 ? 1 : 0);

/**
 * 清理文件名，移除非法字符
 */
function sanitizeFilename(filename) {
  return filename
    .replace(/[<>:"/\\|?*]+/g, '') // 移除非法字符
    .replace(/\s+/g, ' ')           // 规范化空格
    .trim();
}
