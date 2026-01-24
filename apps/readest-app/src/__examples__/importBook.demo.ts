/**
 * importBook 方法使用演示脚本
 * 
 * 本脚本展示如何使用 importBook 方法导入书籍
 * 重点关注最终的封面存储位置
 */

import { Book } from '@/types/book';
import { getCoverFilename, getLocalBookFilename } from '@/utils/book';

/**
 * 演示 1: 基础导入 - 根目录
 */
export function demo1_BasicImport() {
    console.log('\n' + '='.repeat(80));
    console.log('演示 1: 基础导入 - 书籍存储在根目录');
    console.log('='.repeat(80));

    const book: Book = {
        hash: 'abc123',
        format: 'epub',
        title: '城南旧事',
        sourceTitle: '城南旧事',
        author: '林海音',
        relativePath: '城南旧事.epub',
        createdAt: Date.now(),
        updatedAt: Date.now(),
        downloadedAt: Date.now(),
    };

    console.log('\n📖 导入书籍:');
    console.log('  标题:', book.title);
    console.log('  作者:', book.author);
    console.log('  格式:', book.format);

    const bookPath = getLocalBookFilename(book);
    const coverPath = getCoverFilename(book);

    console.log('\n📁 最终存储位置:');
    console.log('  ✓ 书籍文件:');
    console.log('    Books/' + bookPath);
    console.log('\n  ✓ 封面文件:');
    console.log('    Books/' + coverPath);

    console.log('\n📊 目录结构:');
    console.log(`
Books/
├── 城南旧事.epub              ← 书籍主文件
└── 城南旧事/                  ← 同名文件夹
    ├── cover.png              ← 封面（本演示的关键！）
    ├── config.json            ← 阅读配置
    └── ...metadata
  `);

    return { book, bookPath, coverPath };
}

/**
 * 演示 2: 分组导入 - 文学分类
 */
export function demo2_GroupedImport() {
    console.log('\n' + '='.repeat(80));
    console.log('演示 2: 分组导入 - 书籍存储在分类文件夹中');
    console.log('='.repeat(80));

    const book: Book = {
        hash: 'def456',
        format: 'epub',
        title: '深入浅出TypeScript',
        sourceTitle: '深入浅出TypeScript',
        author: 'John Doe',
        relativePath: '技术/深入浅出TypeScript.epub',
        groupName: '技术',
        createdAt: Date.now(),
        updatedAt: Date.now(),
        downloadedAt: Date.now(),
    };

    console.log('\n📖 导入书籍:');
    console.log('  标题:', book.title);
    console.log('  作者:', book.author);
    console.log('  分组:', book.groupName);

    const bookPath = getLocalBookFilename(book);
    const coverPath = getCoverFilename(book);

    console.log('\n📁 最终存储位置:');
    console.log('  ✓ 书籍文件:');
    console.log('    Books/' + bookPath);
    console.log('\n  ✓ 封面文件:');
    console.log('    Books/' + coverPath);

    console.log('\n📊 目录结构:');
    console.log(`
Books/
└── 技术/                           ← 分类文件夹
    ├── 深入浅出TypeScript.epub      ← 书籍主文件
    └── 深入浅出TypeScript/         ← 同名文件夹
        ├── cover.png               ← 封面（注意这里！）
        ├── config.json
        └── ...metadata
  `);

    return { book, bookPath, coverPath };
}

/**
 * 演示 3: 多级分组导入
 */
export function demo3_NestedGroupImport() {
    console.log('\n' + '='.repeat(80));
    console.log('演示 3: 多级分组导入 - 支持嵌套分类');
    console.log('='.repeat(80));

    const books: Book[] = [
        {
            hash: 'ghi789',
            format: 'epub',
            title: '红楼梦',
            sourceTitle: '红楼梦',
            author: '曹雪芹',
            relativePath: '文学/古典/清/红楼梦.epub',
            groupName: '文学/古典/清',
            createdAt: Date.now(),
            updatedAt: Date.now(),
            downloadedAt: Date.now(),
        },
        {
            hash: 'jkl012',
            format: 'epub',
            title: '三体',
            sourceTitle: '三体',
            author: '刘慈欣',
            relativePath: '文学/科幻/当代/三体.epub',
            groupName: '文学/科幻/当代',
            createdAt: Date.now(),
            updatedAt: Date.now(),
            downloadedAt: Date.now(),
        },
    ];

    console.log('\n📖 导入书籍列表:');
    books.forEach((book, index) => {
        console.log(`\n  ${index + 1}. ${book.title}`);
        console.log(`     作者: ${book.author}`);
        console.log(`     分组: ${book.groupName}`);
    });

    console.log('\n📁 最终存储位置:');
    books.forEach((book) => {
        const bookPath = getLocalBookFilename(book);
        const coverPath = getCoverFilename(book);
        console.log(`\n  ${book.title}:`);
        console.log('    书籍: Books/' + bookPath);
        console.log('    封面: Books/' + coverPath);
    });

    console.log('\n📊 完整目录结构:');
    console.log(`
Books/
└── 文学/
    ├── 古典/
    │   └── 清/
    │       ├── 红楼梦.epub
    │       └── 红楼梦/
    │           ├── cover.png      ← 红楼梦的封面
    │           └── config.json
    └── 科幻/
        └── 当代/
            ├── 三体.epub
            └── 三体/
                ├── cover.png       ← 三体的封面
                └── config.json
  `);

    return { books };
}

/**
 * 演示 4: 混合导入场景 - 展示完整的书库结构
 */
export function demo4_CompleteBookLibrary() {
    console.log('\n' + '='.repeat(80));
    console.log('演示 4: 完整书库结构 - 混合多种导入方式');
    console.log('='.repeat(80));

    const allBooks: Book[] = [
        // 根目录书籍
        {
            hash: 'root1',
            format: 'epub',
            title: '仙铃',
            sourceTitle: '仙铃',
            author: '网络作者',
            relativePath: '仙铃.epub',
            createdAt: Date.now(),
            updatedAt: Date.now(),
            downloadedAt: Date.now(),
        },
        // 技术分类
        {
            hash: 'tech1',
            format: 'epub',
            title: 'JavaScript高级程序设计',
            sourceTitle: 'JavaScript高级程序设计',
            author: 'Nicholas C. Zakas',
            relativePath: '技术/编程/JavaScript/JavaScript高级程序设计.epub',
            groupName: '技术/编程/JavaScript',
            createdAt: Date.now(),
            updatedAt: Date.now(),
            downloadedAt: Date.now(),
        },
        // 文学分类
        {
            hash: 'lit1',
            format: 'epub',
            title: '城南旧事',
            sourceTitle: '城南旧事',
            author: '林海音',
            relativePath: '文学/古典/民国/城南旧事.epub',
            groupName: '文学/古典/民国',
            createdAt: Date.now(),
            updatedAt: Date.now(),
            downloadedAt: Date.now(),
        },
        {
            hash: 'lit2',
            format: 'epub',
            title: '活着',
            sourceTitle: '活着',
            author: '余华',
            relativePath: '文学/当代/活着.epub',
            groupName: '文学/当代',
            createdAt: Date.now(),
            updatedAt: Date.now(),
            downloadedAt: Date.now(),
        },
    ];

    console.log('\n📚 书库统计:');
    console.log(`  总书籍数: ${allBooks.length}`);
    console.log(`  根目录: 1 本`);
    console.log(`  技术分类: 1 本`);
    console.log(`  文学分类: 2 本`);

    console.log('\n📊 完整书库目录结构:');
    console.log(`
Books/                                          ← 书籍根目录
├── .readest/                                   ← 配置目录
│   ├── settings.json                           ← 系统设置
│   ├── library.json                            ← 书库索引
│   └── library.json.bak
│
├── 仙铃.epub                                    ← 根目录书籍
├── 仙铃/
│   ├── cover.png                               ← 仙铃的封面
│   └── config.json
│
├── 技术/                                        ← 技术分类
│   └── 编程/
│       └── JavaScript/
│           ├── JavaScript高级程序设计.epub
│           └── JavaScript高级程序设计/
│               ├── cover.png                   ← JS书的封面
│               └── config.json
│
└── 文学/                                        ← 文学分类
    ├── 古典/
    │   └── 民国/
    │       ├── 城南旧事.epub
    │       └── 城南旧事/
    │           ├── cover.png                   ← 城南旧事的封面
    │           └── config.json
    └── 当代/
        ├── 活着.epub
        └── 活着/
            ├── cover.png                       ← 活着的封面
            └── config.json
  `);

    console.log('\n📋 各书籍的封面路径:');
    allBooks.forEach((book) => {
        const coverPath = getCoverFilename(book);
        console.log(`  ✓ ${book.title}`);
        console.log(`    Books/${coverPath}`);
    });

    console.log('\n🎯 关键发现:');
    console.log('  1. 每本书都有自己的同名文件夹');
    console.log('  2. 封面文件名固定为 cover.png');
    console.log('  3. 封面路径遵循: Books/{书籍相对路径去扩展名}/cover.png');
    console.log('  4. 支持任意深度的嵌套分组');
    console.log('  5. 配置文件存储在 .readest 目录');

    return { allBooks };
}

/**
 * 演示 5: 封面路径规则总结
 */
export function demo5_CoverPathRules() {
    console.log('\n' + '='.repeat(80));
    console.log('演示 5: 封面路径规则总结');
    console.log('='.repeat(80));

    const rules = [
        {
            title: '规则 1: 基础转换',
            input: '书籍相对路径',
            output: '封面相对路径',
            formula: 'relativePath 去除扩展名 + /cover.png',
            example: {
                input: 'book.epub',
                output: 'book/cover.png',
            },
        },
        {
            title: '规则 2: 分组保留',
            formula: '分组前缀保持不变，只处理文件名部分',
            example: {
                input: '分类/book.epub',
                output: '分类/book/cover.png',
            },
        },
        {
            title: '规则 3: 多级分组',
            formula: '所有目录级别都保留',
            example: {
                input: '分类1/分类2/分类3/book.epub',
                output: '分类1/分类2/分类3/book/cover.png',
            },
        },
        {
            title: '规则 4: 特殊字符支持',
            formula: '中文、括号等特殊字符都被保留',
            example: {
                input: '文学/古书 (清).epub',
                output: '文学/古书 (清)/cover.png',
            },
        },
    ];

    rules.forEach((rule) => {
        console.log(`\n${rule.title}`);
        console.log(`  公式: ${rule.formula}`);
        console.log(`  示例:`);
        console.log(`    输入:  ${rule.example.input}`);
        console.log(`    输出:  ${rule.example.output}`);
    });

    console.log('\n🔍 验证规则 - 代码实现:');
    console.log(`
export const getCoverFilename = (book: Book) => {
  // Step 1: 检查 relativePath 是否存在
  if (!book.relativePath) {
    throw new Error('Missing relativePath');
  }

  // Step 2: 移除文件扩展名
  // 例如: "技术/book.epub" → "技术/book"
  const pathWithoutExt = book.relativePath.replace(/\\.[^.]+$/, '');

  // Step 3: 添加 /cover.png
  // 例如: "技术/book" → "技术/book/cover.png"
  return \`\${pathWithoutExt}/cover.png\`;
};
  `);

    console.log('\n✅ 规则验证测试:');
    const testCases = [
        'book.epub',
        '文学/book.epub',
        '文学/古典/book.epub',
        '文学/古典/民国/book.epub',
        'Book (Author).epub',
        '中文书名 (作者名).epub',
    ];

    testCases.forEach((testCase) => {
        const book: Book = {
            hash: 'test',
            format: 'epub',
            title: 'Test',
            sourceTitle: 'Test',
            author: 'Test',
            relativePath: testCase,
            createdAt: Date.now(),
            updatedAt: Date.now(),
            downloadedAt: Date.now(),
        };

        const coverPath = getCoverFilename(book);
        console.log(`  ✓ ${testCase} → ${coverPath}`);
    });
}

/**
 * 运行所有演示
 */
export function runAllDemos() {
    console.clear();
    console.log('╔' + '═'.repeat(78) + '╗');
    console.log('║' + ' importBook 方法使用示范 - 封面存储位置追踪'.padEnd(79) + '║');
    console.log('╚' + '═'.repeat(78) + '╝');

    demo1_BasicImport();
    demo2_GroupedImport();
    demo3_NestedGroupImport();
    demo4_CompleteBookLibrary();
    demo5_CoverPathRules();

    console.log('\n' + '='.repeat(80));
    console.log('📝 总结');
    console.log('='.repeat(80));
    console.log(`
✅ 核心要点:

1. 书籍存储:
   - 文件存储在 Books/ 目录下
   - 遵循 relativePath 指定的路径
   - 支持任意深度的嵌套分组

2. 封面存储 (最重要):
   - 路径规则: {书籍路径去扩展名}/cover.png
   - 例如: Books/文学/古典/民国/红楼梦/cover.png
   - 每本书的封面存储在同名文件夹中

3. 完整文件结构:
   - 书籍文件: Books/{relativePath}
   - 配置文件: Books/{去扩展名}/config.json
   - 封面文件: Books/{去扩展名}/cover.png
   - 系统配置: Books/.readest/settings.json
   - 书库索引: Books/.readest/library.json

4. 路径计算代码:
   // getCoverFilename 函数实现
   const pathWithoutExt = book.relativePath.replace(/\\.[^.]+$/, '');
   return \`\${pathWithoutExt}/cover.png\`;
  `);

    console.log('='.repeat(80));
    console.log('\n✨ 演示完成！\n');
}

// 如果直接运行此文件，执行所有演示
if (typeof require !== 'undefined' && require.main === module) {
    runAllDemos();
}
