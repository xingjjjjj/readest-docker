# 书籍加载性能优化方案

## 问题分析

当前架构在打开书籍时存在以下性能瓶颈：

1. **全量加载**：每次打开都要加载完整的电子书文件
2. **重复解析**：没有缓存元数据，每次都重新解析书籍结构
3. **阻塞加载**：按顺序加载，无法并发处理多本书

## 优化方案

### 1. 多层缓存策略

```
┌─────────────────────────────────┐
│   内存缓存 (useReaderStore)      │ ← 当前章节快速访问
└──────────────┬──────────────────┘
               │
┌──────────────▼──────────────────┐
│   IndexedDB 缓存 (本地数据库)     │ ← 书籍元数据持久化
│  - 目录结构                       │
│  - 章节列表                       │
│  - 已读进度                       │
└──────────────┬──────────────────┘
               │
┌──────────────▼──────────────────┐
│  后端预生成元数据 (metadata.json)│ ← scan-and-import 时生成
│  - 目录项数                       │
│  - 章节数估计                     │
│  - 语言信息                       │
└──────────────┬──────────────────┘
               │
┌──────────────▼──────────────────┐
│   完整文件 (EPUB/MOBI)           │ ← 必要时才加载
└─────────────────────────────────┘
```

### 2. 预生成元数据

在 `scan-and-import` 时自动提取和保存：

```
books/
├── my-book.epub
└── my-book/
    ├── cover.png              ← 已有
    ├── config.json            ← 已有
    └── metadata.json          ← 新增：预生成的元数据
        {
          "hash": "abc123...",
          "title": "书籍标题",
          "format": "EPUB",
          "estimatedChapters": 25,
          "tocItemCount": 18,
          "summary": {
            "hasSpine": true,
            "hasToc": true,
            "language": "zh"
          }
        }
```

### 3. IndexedDB 缓存

前端在首次加载时：
1. 检查 IndexedDB 中是否有缓存
2. 若没有，从后端 API 获取 `metadata.json`
3. 保存到 IndexedDB 供后续使用

```typescript
// 使用示例
const metadata = await getBookMetadataInfo(book);
console.log(`章节数: ${metadata.estimatedChapters}`);
```

### 4. API 端点

新增端点用于获取预生成的元数据：

```
GET /api/storage/book-metadata?relativePath=my-book.epub

返回:
{
  "hash": "abc123...",
  "title": "书籍标题",
  "estimatedChapters": 25,
  "tocItemCount": 18,
  "summary": {...}
}
```

### 5. 加载流程优化

**打开书籍时：**

```
用户点击打开书籍
    ↓
[快速] 读取元数据缓存/后端 API
    ↓
[快速] 显示书籍基本信息、目录预览
    ↓
[后台] 异步加载完整文件
    ↓
用户可立即开始阅读关键内容
```

### 6. 批量预加载

在图书馆列表加载时，后台批量预加载书籍信息：

```typescript
// 图书馆页面
useEffect(() => {
  preloadBooksInfo(libraryBooks);
}, [libraryBooks]);
```

## 性能提升预期

| 指标 | 优化前 | 优化后 | 提升 |
|------|-------|-------|------|
| 首次打开书籍 | 2-5s | 0.5-1s | **4-10x** |
| 再次打开同一本书 | 2-5s | <100ms | **20-50x** |
| 显示目录 | 2-5s | <100ms | **20-50x** |
| 内存占用 | 高 | 低 | 减少 50% |
| 网络请求 | 1个大文件 | 多个小请求 | 可并发 |

## 实现文件清单

### 后端
- `src/app/api/storage/_lib/bookMetadataExtractor.ts` ✅
- `src/app/api/storage/book-metadata/route.ts` ✅
- `src/app/api/storage/scan-and-import/route.ts` (修改) ✅

### 前端
- `src/utils/bookMetadataCache.ts` ✅
- `src/services/bookLoaderService.ts` ✅

### 下一步优化
- [ ] 修改 ReaderContent.tsx 集成新的加载服务
- [ ] 添加进度条显示加载进度
- [ ] 实现分章节加载（对于超大文件）
- [ ] 添加缓存管理 UI（清空缓存、查看大小）
- [ ] 实现离线支持（预加载常读书籍）

## 缓存清理

用户可在设置中清理缓存：

```typescript
import { clearBookCache, getBookCacheStats } from '@/services/bookLoaderService';

// 获取缓存统计
const stats = await getBookCacheStats();
console.log(`当前缓存: ${stats.cacheSize}`);

// 清空缓存
await clearBookCache();
```

## 兼容性

- Chrome 24+ ✅
- Firefox 16+ ✅
- Safari 10+ ✅
- Edge 12+ ✅

所有现代浏览器都支持 IndexedDB。
