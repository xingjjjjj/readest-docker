# Scan Books 按钮流程分析

## 执行日期
2026-01-24

## 概述
本文档分析了 "Scan Books" 按钮的整体流程逻辑，包括数据流、缓存机制和存在的问题，并提出理想的架构设计。

---

## 第一部分：当前流程分析

### 1. 用户点击 "Scan Books" 按钮后的完整流程

```
┌─────────────────────────────────────────────────────────────────┐
│                    前端：ScanBooksButton.tsx                     │
└─────────────────────────────────────────────────────────────────┘

[1] 用户点击按钮
    ↓
[2] 前端调用 scanBooks() → POST /api/storage/scan
    ↓
┌─────────────────────────────────────────────────────────────────┐
│                   后端：storage/scan/route.ts                    │
└─────────────────────────────────────────────────────────────────┘
[3] 后端扫描目录
    - 递归遍历 /app/readest/books/ 目录
    - 跳过 .readest 元数据目录
    - 识别支持的文件类型 (.epub, .pdf, .mobi, 等)
    - 对每个文件计算快速哈希（仅读取前1MB + 文件大小）
    ↓
[4] 后端返回扫描结果
    {
      success: true,
      count: N,
      books: [
        {
          filePath: "/app/readest/books/novel/book.epub",
          relativePath: "novel/book.epub",
          fileName: "book.epub",
          directory: "novel",
          size: 1000000,
          mtime: 1674192000000,
          ext: "epub",
          hash: "abc123def456"  ← 快速哈希，仅用于去重
        },
        ...
      ]
    }
    ↓
┌─────────────────────────────────────────────────────────────────┐
│                  前端：哈希去重逻辑                              │
└─────────────────────────────────────────────────────────────────┘
[5] 前端接收扫描结果
    ↓
[6] 创建本地库映射：existingBooks = Map<hash, Book>
    - 遍历内存中的现有库
    - 建立哈希值 → 书籍对象的映射
    ↓
[7] 两轮处理循环：
    
    第一轮：利用哈希快速去重
    ──────────────────────
    for each scannedBook in result.books:
        if (scannedBook.hash in existingBooks):
            ✓ 书籍已存在，跳过下载
            if (路径有变化):
                移动附属文件（封面、配置）
        else:
            → booksToImport.push(scannedBook)
    
    第二轮：导入新书籍
    ──────────────────
    for each newBook in booksToImport (并发限制=3):
        调用 appService.importBook()
            ↓
        [内部流程 - 见下节]
    ↓
[8] 前端更新库
    - 调用 libraryStore.updateBooks()
    - 内存中的库增加新书籍
    - 调用 appService.saveLibraryBooks()
    - 将更新的库序列化为 JSON
    - 写入 /api/storage/file (PUT)
      → .readest/library.json
    ↓
[9] 显示结果
    - Toast 通知用户
    - 若有新书籍，显示书籍名称
    - 若有书籍被移动，显示移动数量
    - 若导入失败，显示失败信息
```

---

### 2. importBook 的内部流程（关键步骤）

当前设计中，对于每一本新书籍，都会执行以下操作：

```
importBook(sourcePath, library, saveBook=false, saveCover=true, ...)
    ↓
[A] 打开文件：fs.openFile(sourcePath)
    → 调用 /api/storage/file?filePath=... (GET)
    → 浏览器完整下载文件内容 ⚠️
    ↓
[B] 计算完整哈希：partialMD5(fileobj)
    → 计算文件的详细哈希
    ↓
[C] 加载文档元数据：DocumentLoader(fileobj).open()
    → 解析 EPUB/PDF/MOBI 结构
    → 提取标题、作者、封面等元数据
    ↓
[D] 生成 Book 对象
    {
      hash: "...",
      title: "...",
      author: "...",
      cover: Blob,
      relativePath: "...",
      ...
    }
    ↓
[E] 保存封面（如果启用 saveCover=true）
    → 调用 appService.writeFile()
    → 写入 GET_COVER_FILENAME(book) 文件
    → 例如：novels/book_name/cover.png
    ↓
[F] 保存配置（可选）
    → 写入 GET_CONFIG_FILENAME(book) 文件
    → 存储阅读进度、书签等
    ↓
[G] 返回 Book 对象
```

---

### 3. 缓存机制分析

#### 3.1 内存缓存
- **libraryStore.library**: Zustand 全局状态
  - 存储当前用户库中的所有书籍
  - 是否持久化：通过 localStorage 保存（可选）
  - 更新触发：加载库、导入书籍、删除书籍等操作

#### 3.2 磁盘缓存
- **library.json** (.readest/library.json)
  - 位置：/app/readest/books/.readest/library.json
  - 内容：所有书籍的元数据（JSON 序列化）
  - 更新时机：
    - 导入新书籍后
    - 更新书籍信息后
    - 删除书籍后
  - 同步机制：`appService.saveLibraryBooks()` 将内存库写入磁盘

#### 3.3 文件系统缓存
- **封面文件**: `books/[group]/[bookname]/cover.png`
  - 保存于磁盘
  - 首次导入时生成
  
- **配置文件**: `books/[group]/[bookname]/config.json`
  - 保存于磁盘
  - 包含阅读位置、书签等状态信息

---

### 4. 数据流量分析（问题所在）

#### 当前问题：文件重复传输

假设有 300 本书，其中 290 本已存在于库中，仅 10 本为新书籍：

```
场景：scan books，结果为 300 本书

【问题的根源】
第一遍扫描：后端计算快速哈希（无网络传输）✓
第二遍导入：
  - 对 290 本已存在的书
    → 每一本都调用 fs.openFile() 下载完整文件 ✗
    → 下载文件内容用于计算"正式"哈希
    → 实际上完全没必要
  
  - 仅对 10 本新书
    → 这里的下载是必须的
  
总数据传输：290 本已存在的书 × 平均文件大小（0.9MB）
           + 10 本新书 × 平均文件大小（0.9MB）
         ≈ 270MB + 9MB = 279MB

理想情况：仅下载 10 本新书
         ≈ 9MB
```

#### 修复后的改进

修复后的流程已改为：

```
第一轮：利用扫描时的快速哈希去重
  - 290 本已存在 → 跳过，仅移动文件（如果位置变化）
  - 无网络传输 ✓

第二轮：导入新书籍
  - 10 本新书 → 下载并导入
  - 数据传输 ≈ 9MB ✓

总改进：从 279MB → 9MB，减少 96% 的数据传输
```

---

## 第二部分：理想架构设计

### 1. 问题陈述

**理想中的流程应该是：**
> 调用后端的文件能力扫描书籍 → 后端更新完元数据文件 → 将更新后的元数据回传到前端页面；而完整的书籍文件没必要在此按钮中全部上传

### 2. 理想架构对比

#### 当前架构（修复后）
```
前端 ────→ 后端扫描
         ┌─────────────────┐
         │ 计算哈希        │
         │ 返回文件清单    │
         └─────────────────┘
前端 ←──── 接收清单
前端做：哈希去重
     │
     └──→ 对新书调用 importBook
         ├─ 下载文件
         ├─ 提取元数据
         ├─ 保存封面
         └─ 返回 Book 对象
前端 ←──── Book 对象
前端做：updateBooks()
     ├─ 内存中合并
     └─ 保存到 library.json
```

#### 理想架构（提议）
```
前端 ────→ 后端扫描并生成元数据
         ┌───────────────────────────────┐
         │ [后端完全处理]                │
         │ ✓ 计算哈希                    │
         │ ✓ 去重（对比 library.json）   │
         │ ✓ 提取新书元数据              │
         │ ✓ 保存封面到磁盘              │
         │ ✓ 更新 library.json           │
         │ ✓ 准备增量数据                │
         └───────────────────────────────┘
前端 ←──── 增量数据
         {
           newBooks: [...],    // 新书籍的元数据
           movedBooks: [...],  // 移动的书籍
           deletedBooks: [...],// 删除的书籍
           summary: {...}
         }
前端做：updateBooks()
     ├─ 内存中合并
     └─ UI 更新（无需再次下载文件）
```

---

### 3. 理想架构的优势

| 指标 | 当前 | 理想 | 改进 |
|-----|------|------|------|
| 数据传输量 | 9MB | <100KB | 99% ↓ |
| 前端处理 | 中等 | 最少 | 简化 |
| 后端处理 | 最少 | 完整 | 集中 |
| 服务端缓存 | 无 | library.json | 加强 |
| 容错能力 | 中等 | 高 | 改善 |
| API 调用次数 | 多（每书1次下载） | 1（单一扫描） | 简化 |

---

### 4. 实现理想架构的建议步骤

#### 4.1 后端新增端点：POST /api/storage/scan-and-import

```typescript
// 路由：/app/api/storage/scan-and-import/route.ts

export async function POST(req: NextRequest) {
  try {
    // [第1步] 扫描文件系统
    const scannedBooks = await scanDirectory(STORAGE_ROOT);
    
    // [第2步] 读取现有库元数据
    const existingLibrary = await loadLibraryJSON();
    const existingByHash = new Map(existingLibrary.map(b => [b.hash, b]));
    
    // [第3步] 去重和分类
    const newBooks: ScannedBook[] = [];
    const movedBooks: { oldPath: string; newPath: string; book: Book }[] = [];
    const deletedBooks: Book[] = [];
    
    for (const scanned of scannedBooks) {
      const existing = existingByHash.get(scanned.hash);
      if (!existing) {
        newBooks.push(scanned);
      } else if (existing.relativePath !== scanned.relativePath) {
        movedBooks.push({ oldPath: existing.relativePath, newPath: scanned.relativePath, book: existing });
      }
    }
    
    // 检测已删除的书籍
    for (const book of existingLibrary) {
      if (!scannedBooks.find(s => s.hash === book.hash)) {
        deletedBooks.push(book);
      }
    }
    
    // [第4步] 处理新书籍（提取元数据）
    const processedNewBooks: Book[] = [];
    for (const scanned of newBooks) {
      try {
        const book = await extractBookMetadata(scanned.filePath);
        book.relativePath = scanned.relativePath;
        book.hash = scanned.hash;
        
        // 保存封面
        if (book.cover) {
          const coverPath = getCoverPath(book);
          await saveFile(coverPath, book.cover);
        }
        
        processedNewBooks.push(book);
      } catch (error) {
        console.error('Failed to process book:', scanned.relativePath, error);
      }
    }
    
    // [第5步] 处理已移动的书籍
    for (const { oldPath, newPath, book } of movedBooks) {
      // 移动附属文件（封面、配置）
      await moveBookFiles(oldPath, newPath);
      book.relativePath = newPath;
    }
    
    // [第6步] 处理已删除的书籍
    for (const book of deletedBooks) {
      book.deletedAt = Date.now();
    }
    
    // [第7步] 更新 library.json
    const updatedLibrary = [
      ...existingLibrary.filter(b => !deletedBooks.find(db => db.hash === b.hash)),
      ...processedNewBooks,
      ...movedBooks.map(m => m.book)
    ];
    await saveLibraryJSON(updatedLibrary);
    
    // [第8步] 返回增量数据
    return NextResponse.json({
      success: true,
      summary: {
        scanned: scannedBooks.length,
        new: processedNewBooks.length,
        moved: movedBooks.length,
        deleted: deletedBooks.length
      },
      newBooks: processedNewBooks,
      movedBooks: movedBooks.map(m => ({
        hash: m.book.hash,
        oldPath: m.oldPath,
        newPath: m.newPath
      })),
      deletedBooks: deletedBooks.map(b => b.hash)
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
```

#### 4.2 前端新增调用流程

```typescript
// 前端调用

const handleScanBooks = async () => {
  try {
    // 仅调用单一后端接口
    const result = await fetch('/api/storage/scan-and-import', {
      method: 'POST'
    }).then(r => r.json());
    
    // 后端已完成所有处理，包括：
    // ✓ 扫描文件
    // ✓ 去重
    // ✓ 提取元数据
    // ✓ 保存文件
    // ✓ 更新库
    
    // 前端仅需：
    // 1. 接收结果
    const { newBooks, movedBooks, deletedBooks } = result;
    
    // 2. 合并到内存库
    const appService = await envConfig.getAppService();
    
    const newLibrary = [
      ...library.filter(b => !deletedBooks.includes(b.hash)),
      ...newBooks,
      ...library.map(b => {
        const moved = movedBooks.find(m => m.hash === b.hash);
        return moved ? { ...b, relativePath: moved.newPath } : b;
      })
    ];
    
    await libraryStore.setLibrary(newLibrary);
    
    // 3. UI 显示结果
    showResults({
      new: newBooks.length,
      moved: movedBooks.length,
      deleted: deletedBooks.length
    });
    
  } catch (error) {
    handleError(error);
  }
};
```

#### 4.3 优势体现

```
数据传输对比：

当前流程（修复后）：
POST /api/storage/scan           (10KB)
  ↓ 返回 300 本书的清单
GET /api/storage/file × 10       (90MB)
  ↓ 下载 10 本新书文件
返回 10 本书的元数据             (50KB)
总计：约 90MB

理想流程：
POST /api/storage/scan-and-import (10KB)
  ↓ 后端完整处理（本地操作，无网络）
返回增量数据和元数据             (50KB)
总计：约 50KB

改进：从 90MB → 50KB，减少 99.94% 的数据传输 ✓
```

---

## 第三部分：当前实现总结

### 实现状态

| 组件 | 状态 | 说明 |
|-----|------|------|
| 快速哈希计算（后端） | ✅ 已实现 | `calculatePartialHash()` 仅读前1MB |
| 前端哈希去重 | ✅ 已实现 | 利用扫描结果中的哈希快速判断 |
| 并发导入限制 | ✅ 已实现 | CONCURRENT_IMPORTS = 3 |
| 文件移动检测 | ✅ 已实现 | 移动附属文件（封面、配置） |
| 增量 API | ❌ 未实现 | 需按上述步骤实现 |

### 当前瓶颈

1. **前端仍需下载新书文件**
   - 原因：需要解析文件获取元数据（标题、作者、封面）
   - 可优化：后端统一处理

2. **library.json 更新时机**
   - 当前：前端导入完成后更新
   - 理想：后端在扫描时就完成更新

3. **缺少增量 API**
   - 当前：前端需要复杂的去重逻辑
   - 理想：后端直接返回增量数据

---

## 第四部分：推荐改进方案

### 分阶段实施

#### 阶段 1（已完成 ✅）
- 后端计算快速哈希
- 前端实现哈希去重
- 减少 96% 的不必要文件下载

#### 阶段 2（推荐下一步）
- 新增 `/api/storage/scan-and-import` 后端端点
- 后端完全接管文件处理
- 前端仅合并增量数据

#### 阶段 3（可选优化）
- 实现增量更新（仅传输变化部分）
- 添加进度回调接口
- 支持取消操作

---

## 结论

当前修复（快速哈希 + 前端去重）已显著改善了性能：
- **数据传输：** 从 284MB → 9MB（新书籍）
- **响应时间：** 大幅缩短
- **用户体验：** 显著提升

理想架构（后端统一处理）可进一步优化：
- **数据传输：** 从 9MB → <50KB
- **前端复杂度：** 大幅降低
- **容错能力：** 显著增强
- **维护性：** 更易维护

**建议：** 
1. 先充分验证当前修复的稳定性
2. 根据用户反馈，逐步实施后端统一处理方案
3. 最终目标：完全后端驱动的扫描流程

