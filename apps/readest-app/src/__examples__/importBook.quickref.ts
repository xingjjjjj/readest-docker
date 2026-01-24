/**
 * importBook 方法 - 快速参考卡片
 * 
 * 用于快速查阅和复制使用
 */

// ============================================================================
// 快速参考 - 复制即用
// ============================================================================

// 1️⃣ 最简单的导入 (根目录)
const book1 = await appService.importBook(filePath, books);
// 结果: Books/书名.epub 和 Books/书名/cover.png

// 2️⃣ 分组导入 (自动生成路径)
const book2 = await appService.importBook(
    filePath,
    books,
    true,
    true,
    false,
    false,
    { targetGroupName: '文学' },
);
// 结果: Books/文学/书名.epub 和 Books/文学/书名/cover.png

// 3️⃣ 指定完整路径
const book3 = await appService.importBook(
    filePath,
    books,
    true,
    true,
    false,
    false,
    { targetRelativePath: '文学/古典/民国/城南旧事.epub' },
);
// 结果: Books/文学/古典/民国/城南旧事.epub 和 Books/文学/古典/民国/城南旧事/cover.png

// 4️⃣ 覆盖模式 (重新导入)
const book4 = await appService.importBook(
    filePath,
    books,
    true,
    true,
    true, // overwrite = true
    false,
    { targetGroupName: '技术' },
);
// 覆盖已存在的文件

// 5️⃣ 临时导入 (不保存书籍)
const book5 = await appService.importBook(
    filePath,
    books,
    false, // 不保存书籍文件
    true, // 保存封面
    false,
    true, // transient = true
    { targetGroupName: '预览' },
);
// 结果: 仅保存封面，书籍标记为临时

// ============================================================================
// 📊 封面路径快速查表
// ============================================================================

const pathExamples = [
    {
        bookPath: 'book.epub',
        coverPath: 'book/cover.png',
    },
    {
        bookPath: '文学/book.epub',
        coverPath: '文学/book/cover.png',
    },
    {
        bookPath: '文学/古典/民国/book.epub',
        coverPath: '文学/古典/民国/book/cover.png',
    },
    {
        bookPath: '《红楼梦》.epub',
        coverPath: '《红楼梦》/cover.png',
    },
];

// ============================================================================
// 🔍 如何获取书籍的封面路径
// ============================================================================

import { getCoverFilename } from '@/utils/book';

const book = await appService.importBook(filePath, books);
const coverPath = getCoverFilename(book); // 获取计算后的封面路径
// 完整路径: Books/{coverPath}

// ============================================================================
// 📋 参数说明速查
// ============================================================================

/**
 * importBook(
 *   file: string | File,              // 文件路径或 File 对象
 *   books: Book[],                    // 现有书籍数组
 *   saveBook: boolean = true,         // 是否保存书籍文件
 *   saveCover: boolean = true,        // 是否保存封面
 *   overwrite: boolean = false,       // 是否覆盖
 *   transient: boolean = false,       // 是否为临时导入
 *   options?: {                       // 选项
 *     targetRelativePath?: string,    // 指定完整相对路径
 *     targetGroupName?: string,       // 指定分组名称
 *   },
 * ): Promise<Book | null>
 */

// ============================================================================
// 🎯 核心概念
// ============================================================================

/**
 * relativePath 与封面存储位置的关系：
 * 
 * Book.relativePath = "文学/城南旧事.epub"
 *                          ↓
 * getLocalBookFilename() → "文学/城南旧事.epub"
 *                          ↓
 * getCoverFilename()     → "文学/城南旧事/cover.png"
 *                          ↓
 * 完整路径              → Books/文学/城南旧事/cover.png
 * 
 * 📌 规则：去掉扩展名后作为文件夹，cover.png 放在里面
 */

// ============================================================================
// ✅ 常见用途
// ============================================================================

// 用途 1: 扫描本地书籍目录
async function scanLocalLibrary(appService, bookPaths) {
    const books = [];
    for (const path of bookPaths) {
        const book = await appService.importBook(path, books);
        if (book) books.push(book);
    }
    return books;
}

// 用途 2: 按分类导入书籍
async function importByCategory(appService, categoryBooks) {
    const books = [];
    for (const [category, paths] of Object.entries(categoryBooks)) {
        for (const path of paths) {
            const book = await appService.importBook(
                path,
                books,
                true,
                true,
                false,
                false,
                { targetGroupName: category },
            );
            if (book) books.push(book);
        }
    }
    return books;
}

// 用途 3: 获取书籍的封面位置
async function getBookCoverLocation(appService, filePath, books) {
    const book = await appService.importBook(filePath, books);
    if (!book) return null;

    const { getCoverFilename } = await import('@/utils/book');
    const relativeCoverPath = getCoverFilename(book);
    const absoluteCoverPath = `Books/${relativeCoverPath}`;

    return {
        book,
        coverPath: relativeCoverPath,
        absolutePath: absoluteCoverPath,
    };
}

// ============================================================================
// 🔗 相关函数
// ============================================================================

// 获取本地书籍文件名
import { getLocalBookFilename } from '@/utils/book';
const bookPath = getLocalBookFilename(book);

// 获取封面文件名
import { getCoverFilename } from '@/utils/book';
const coverPath = getCoverFilename(book);

// 获取配置文件名
import { getConfigFilename } from '@/utils/book';
const configPath = getConfigFilename(book);

// ============================================================================
// 🧪 测试命令
// ============================================================================

// 运行集成测试
// cd /app/readest/apps/readest-app
// pnpm vitest run src/__tests__/importBook.integration.test.ts

// 查看详细输出
// pnpm vitest run src/__tests__/importBook.integration.test.ts --reporter=verbose

// ============================================================================
// 📚 文档链接
// ============================================================================

// 完整指南: src/__examples__/importBook.guide.md
// 演示代码: src/__examples__/importBook.demo.ts
// 集成测试: src/__tests__/importBook.integration.test.ts
// 应用代码: src/services/appService.ts 第 386-760 行
