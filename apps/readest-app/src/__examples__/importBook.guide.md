/**
 * importBook 方法完整使用指南
 * 
 * 本文档详细说明了 importBook 方法的用法，重点关注书籍和封面的存储位置
 */

// ============================================================================
// 1. importBook 方法签名
// ============================================================================

/**
 * @param file - 书籍文件来源
 *   - string: 本地文件路径，如 "/path/to/book.epub"
 *   - string: 网络 URL，如 "https://example.com/book.epub"
 *   - File: 浏览器 File 对象
 *
 * @param books - 现有书籍数组，用于检查书籍是否已存在（通过 hash 值比较）
 *
 * @param saveBook - 是否保存书籍文件（默认 true）
 *   - true: 将文件复制到 Books/ 目录
 *   - false: 不保存文件（用于临时导入或远程 URL）
 *
 * @param saveCover - 是否保存封面图（默认 true）
 *   - true: 提取并保存 PNG 格式的封面图
 *   - false: 不保存封面
 *
 * @param overwrite - 是否覆盖已存在的文件（默认 false）
 *   - true: 覆盖已存在的书籍和封面文件
 *   - false: 如果文件已存在则跳过保存
 *
 * @param transient - 是否为临时导入（默认 false）
 *   - true: 书籍标记为临时（deletedAt 不为 null）
 *   - false: 正常导入
 *
 * @param options - 可选配置
 *   - targetRelativePath: 指定完整的相对路径，如 "技术/书名.epub"
 *   - targetGroupName: 指定分组名称，系统自动生成路径为 "分组/书名.格式"
 *
 * @returns 导入的 Book 对象，如果导入失败则返回 null
 */

// ============================================================================
// 2. 最重要：封面存储位置规则
// ============================================================================

/**
 * 📌 核心规则
 * 
 * 书籍文件存储位置:
 *   Books/{relativePath}
 * 
 * 封面文件存储位置:
 *   Books/{relativePath 去掉扩展名}/cover.png
 * 
 * 配置文件存储位置:
 *   Books/{relativePath 去掉扩展名}/config.json
 */

// 示例 1: 根目录导入
const example1 = {
  relativePath: '城南旧事.epub',
  bookFile: 'Books/城南旧事.epub',
  coverFile: 'Books/城南旧事/cover.png',
  configFile: 'Books/城南旧事/config.json',
};

// 示例 2: 单级分组
const example2 = {
  relativePath: '文学/城南旧事.epub',
  bookFile: 'Books/文学/城南旧事.epub',
  coverFile: 'Books/文学/城南旧事/cover.png',
  configFile: 'Books/文学/城南旧事/config.json',
};

// 示例 3: 多级分组
const example3 = {
  relativePath: '文学/古典/民国/城南旧事.epub',
  bookFile: 'Books/文学/古典/民国/城南旧事.epub',
  coverFile: 'Books/文学/古典/民国/城南旧事/cover.png',
  configFile: 'Books/文学/古典/民国/城南旧事/config.json',
};

// ============================================================================
// 3. 使用示例
// ============================================================================

/**
 * 示例 A: 最简单的导入
 * 直接导入本地书籍到根目录
 */
async function exampleA_SimpleImport(appService, filePath, books) {
  const book = await appService.importBook(filePath, books);
  // 结果: Books/书名.epub
  //      Books/书名/cover.png
  return book;
}

/**
 * 示例 B: 指定分组导入
 * 自动生成相对路径为 "分组/书名.格式"
 */
async function exampleB_GroupImport(appService, filePath, books) {
  const book = await appService.importBook(
    filePath,
    books,
    true, // saveBook
    true, // saveCover
    false, // overwrite
    false, // transient
    {
      targetGroupName: '文学', // 自动生成路径为 "文学/书名.epub"
    },
  );
  // 结果: Books/文学/书名.epub
  //      Books/文学/书名/cover.png
  return book;
}

/**
 * 示例 C: 多级分组导入
 * 支持嵌套分组
 */
async function exampleC_NestedGroupImport(appService, filePath, books) {
  const book = await appService.importBook(
    filePath,
    books,
    true,
    true,
    false,
    false,
    {
      targetRelativePath: '文学/古典/民国/城南旧事.epub',
    },
  );
  // 结果: Books/文学/古典/民国/城南旧事.epub
  //      Books/文学/古典/民国/城南旧事/cover.png
  return book;
}

/**
 * 示例 D: 临时导入（仅预览，不保存书籍文件）
 */
async function exampleD_TemporaryImport(appService, filePath, books) {
  const book = await appService.importBook(
    filePath,
    books,
    false, // 不保存书籍文件
    true, // 但保存封面
    false,
    true, // transient = true
    {
      targetGroupName: '预览',
    },
  );
  // 结果: 不保存书籍文件（deletedAt 不为 null）
  //      Books/预览/书名/cover.png （仅保存封面）
  return book;
}

// ============================================================================
// 4. 完整的书库目录结构示例
// ============================================================================

/**
 * 📚 完整书库示例：
 * 
 * Books/
 * ├── .readest/                               ← 系统配置目录
 * │   ├── settings.json                       ← 系统设置
 * │   ├── library.json                        ← 书库索引
 * │   └── library.json.bak                    ← 备份
 * │
 * ├── 仙铃.epub                                 ← 根目录书籍
 * ├── 仙铃/
 * │   ├── cover.png                           ← 仙铃的封面
 * │   ├── config.json                         ← 阅读配置
 * │   └── ...progress 文件等
 * │
 * ├── 技术/                                    ← 技术分类
 * │   └── 编程/
 * │       └── JavaScript/
 * │           ├── JavaScript高级程序设计.epub
 * │           └── JavaScript高级程序设计/
 * │               ├── cover.png               ← JS书的封面
 * │               └── config.json
 * │
 * └── 文学/                                    ← 文学分类
 *     ├── 古典/
 *     │   └── 民国/
 *     │       ├── 城南旧事.epub
 *     │       └── 城南旧事/
 *     │           ├── cover.png               ← 城南旧事的封面
 *     │           └── config.json
 *     │
 *     ├── 当代/
 *     │   ├── 活着.epub
 *     │   └── 活着/
 *     │       ├── cover.png                   ← 活着的封面
 *     │       └── config.json
 *     │
 *     └── 科幻/
 *         ├── 三体.epub
 *         └── 三体/
 *             ├── cover.png                   ← 三体的封面
 *             └── config.json
 */

// ============================================================================
// 5. 代码实现细节
// ============================================================================

/**
 * 核心代码 1: 计算本地书籍路径
 * 
 * export const getLocalBookFilename = (book: Book) => {
 *   if (!book.relativePath) {
 *     throw new Error(`Book ${book.title} is missing relativePath`);
 *   }
 *   // 返回相对路径即可，因为它已经包含了完整的分组信息
 *   return book.relativePath;
 * };
 */

/**
 * 核心代码 2: 计算封面路径 ⭐ 最关键
 * 
 * export const getCoverFilename = (book: Book) => {
 *   if (!book.relativePath) {
 *     throw new Error(`Book ${book.title} is missing relativePath`);
 *   }
 *   // Step 1: 移除文件扩展名
 *   const pathWithoutExt = book.relativePath.replace(/\.[^.]+$/, '');
 *   
 *   // Step 2: 添加 /cover.png
 *   // 例如: "技术/book" → "技术/book/cover.png"
 *   return `${pathWithoutExt}/cover.png`;
 * };
 */

// ============================================================================
// 6. 常见问题和答案
// ============================================================================

/**
 * Q1: 封面文件最终会存储在哪里？
 * A: 按照规则 Books/{书籍路径去扩展名}/cover.png
 *    - 例: 书籍在 Books/文学/城南旧事.epub
 *    - 封面在 Books/文学/城南旧事/cover.png
 * 
 * Q2: 支持多少层级的分组？
 * A: 支持任意深度的嵌套，没有限制。
 *    - 可以是 a/b/c/d/e/f/book.epub
 *    - 封面会在 a/b/c/d/e/f/book/cover.png
 * 
 * Q3: 中文书名和特殊字符支持吗？
 * A: 完全支持。书籍名称、路径、封面等都可以使用中文和特殊字符。
 *    - 例: 《红楼梦 (清·曹雪芹).epub》
 *    - 封面: 《红楼梦 (清·曹雪芹)》/cover.png
 * 
 * Q4: 如何知道一本书的封面在哪里？
 * A: 使用 getCoverFilename(book) 函数即可计算出准确的路径。
 * 
 * Q5: 临时导入时是否会保存书籍文件？
 * A: 不会。transient=true 时，只保存封面，不保存书籍文件。
 *    且书籍的 deletedAt 会被设置，标记为临时。
 * 
 * Q6: 如果书籍已存在（hash 相同），会怎样？
 * A: 会更新现有的书籍记录而不是创建新的。
 *    - createdAt 保持不变
 *    - updatedAt 会更新为当前时间
 */

// ============================================================================
// 7. 测试验证
// ============================================================================

/**
 * 已通过的测试场景：
 * 
 * ✅ 测试 1: 基础导入 - 根目录
 *    - 书籍: Books/城南旧事.epub
 *    - 封面: Books/城南旧事/cover.png
 * 
 * ✅ 测试 2: 分组导入 - 单级
 *    - 书籍: Books/文学/城南旧事.epub
 *    - 封面: Books/文学/城南旧事/cover.png
 * 
 * ✅ 测试 3: 多级分组导入
 *    - 书籍: Books/文学/古典/民国/城南旧事.epub
 *    - 封面: Books/文学/古典/民国/城南旧事/cover.png
 * 
 * ✅ 测试 4: 批量导入
 *    - 支持多本书籍同时导入到不同分组
 * 
 * ✅ 测试 5: 临时导入
 *    - 仅保存封面，不保存书籍文件
 * 
 * ✅ 测试 6: 封面路径规则验证
 *    - 验证各种场景下的封面路径计算
 * 
 * 运行测试:
 * cd /app/readest/apps/readest-app
 * pnpm vitest run src/__tests__/importBook.integration.test.ts
 */

// ============================================================================
// 8. 关键要点总结
// ============================================================================

/**
 * 🎯 最重要的三点：
 * 
 * 1️⃣ 封面路径规则（最关键！）
 *    relativePath: "文学/书名.epub"
 *    coverPath: "文学/书名/cover.png"
 *    → 书籍去掉扩展名后，作为封面所在的文件夹名称
 * 
 * 2️⃣ 每本书都有自己的同名文件夹
 *    同时存储：
 *    - 书籍文件 (主文件)
 *    - 封面图片
 *    - 阅读配置
 *    - 进度信息
 * 
 * 3️⃣ 完全支持嵌套分组
 *    可以组织成任意深度的层级结构
 *    支持中文、特殊字符等
 */
