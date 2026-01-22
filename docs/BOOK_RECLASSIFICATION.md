# 书籍分类同步功能说明

## 问题背景

在本地存储模式下，当用户在前端对书籍进行分类时，存在以下问题：

### 旧行为（有问题）
1. 用户在 UI 中改变书籍分类（修改 `groupName`）
2. 系统更新 `library.json` 中的元数据
3. **但文件系统中的书籍文件位置不变**
4. 导致元数据与文件位置不同步

例如：
```
UI中:           library.json:
书籍分类: 技术书籍  → groupName: "技术书籍"

文件系统中（未改变）:
/books/小说/仙铃.epub
/books/小说/仙铃/cover.png
/books/小说/仙铃/config.json
```

这会导致以下问题：
- 📂 文件系统中看不到新分类的结构
- 🔄 不同平台/设备间同步困难
- ⚠️ 直接访问文件系统时产生混淆

## 解决方案

### 核心实现

#### 1. **新增 API 端点** - `/api/storage/reclassify`

```typescript
POST /api/storage/reclassify
{
  "oldPath": "小说/仙铃.epub",
  "newPath": "技术书籍/仙铃.epub"
}
```

**功能：**
- ✅ 移动书籍文件
- ✅ 移动关联的元数据文件夹
- ✅ 清理空目录
- ✅ 原子化操作（要么全部成功，要么全部失败）

#### 2. **新增服务方法** - `appService.reclassifyBook()`

```typescript
async reclassifyBook(
  book: Book, 
  newGroupName: string, 
  oldGroupName?: string
): Promise<void>
```

**职责：**
- 检查是否为本地存储模式
- 验证书籍是否使用新的存储结构
- 调用 API 移动文件
- 处理错误

#### 3. **UI 集成** - GroupingModal 组件

在分类操作时自动调用 `reclassifyBook`：

**分类修改时：**
```typescript
const oldGroupName = book.groupName;
book.groupName = selectedGroup.name;

// 自动移动文件
await appService.reclassifyBook(book, selectedGroup.name, oldGroupName);
```

**分类重命名时：**
```typescript
// 旧分类名: "技术"
// 新分类名: "技术书籍"

await appService.reclassifyBook(book, newGroupName, oldGroupName);
```

## 工作流程

### 场景 1：移动书籍到新分类

```
前端操作:
  选择书籍 "仙铃" → 分配到 "技术书籍"

系统流程:
  1. 保存旧分类名: "小说"
  2. 更新 book.groupName = "技术书籍"
  3. 调用 appService.reclassifyBook(book, "技术书籍", "小说")
  4. API 执行文件移动:
     - /books/小说/仙铃.epub 
       → /books/技术书籍/仙铃.epub
     - /books/小说/仙铃/ 
       → /books/技术书籍/仙铃/
  5. 保存 library.json
  6. 清理旧的空目录 /books/小说/

文件系统结果:
  /books/技术书籍/
  ├── 仙铃.epub          ✓ 已移动
  └── 仙铃/
      ├── cover.png      ✓ 已移动
      └── config.json    ✓ 已移动
```

### 场景 2：重命名分类

```
前端操作:
  分类 "小说" 重命名为 "文学作品"

系统流程:
  1. 遍历该分类中的所有书籍
  2. 对每本书调用 reclassifyBook:
     - oldGroupName: "小说"
     - newGroupName: "文学作品"
  3. 文件被依次移动
  4. 所有书籍的 groupName 更新
  5. library.json 保存更新

文件系统结果:
  /books/文学作品/
  ├── 仙铃.epub
  ├── 仙铃/
  ├── 我真是大明星.epub
  ├── 我真是大明星/
  └── ...（所有原 "小说" 分类的书籍）
  
  /books/小说/ (已删除空目录)
```

## API 详情

### 请求

```bash
POST /api/storage/reclassify
Content-Type: application/json

{
  "oldPath": "小说/仙铃.epub",
  "newPath": "技术书籍/仙铃.epub"
}
```

### 成功响应 (200)

```json
{
  "success": true,
  "message": "Book files successfully moved",
  "bookPath": "技术书籍/仙铃.epub",
  "metadataPath": "/app/readest/books/技术书籍/仙铃"
}
```

### 错误响应

```json
{
  "error": "Source file not found: 小说/仙铃.epub"
}
```

## 实现细节

### 文件移动步骤

1. **验证源文件**
   - 确认书籍文件存在
   - 验证路径安全性

2. **创建目标目录**
   - 递归创建目标目录
   - 必要时创建父目录

3. **移动书籍文件**
   - 使用 `fs.rename()` 原子化移动
   - 在同一文件系统上保证原子性

4. **移动元数据文件夹**
   - 移动 `{书籍名}/` 目录
   - 保留所有内部文件（cover, config）

5. **清理空目录**
   - 尝试删除旧的空目录
   - 删除失败时继续（可能有其他文件）

### 错误处理

- **源文件不存在**：返回 404
- **权限错误**：返回 500（可能需要提高权限）
- **跨文件系统移动**：在 Windows/某些 Linux 上不支持硬链接，但 `fs.rename()` 会自动处理
- **空间不足**：返回 500

## 限制与注意事项

### ✅ 支持的场景

- 同一文件系统内的移动
- 创建新目录
- 删除空目录
- 本地存储模式

### ❌ 不支持

- 云端存储模式（自动跳过）
- 旧的 hash-based 存储（无 relativePath，自动跳过）
- 跨设备/网络存储移动（可能很慢或失败）

### 注意

1. **性能**
   - 大文件移动可能需要几秒
   - 建议一次性移动多个文件而不是逐个操作

2. **并发操作**
   - 不建议同时修改多个分类
   - 可能导致数据不一致

3. **网络存储**
   - 避免在 NFS/SMB 上使用
   - 可能导致移动失败

## 使用示例

### JavaScript/TypeScript

```typescript
import { useEnv } from '@/context/EnvContext';

const { appService } = useEnv();

// 移动单本书籍
const book = {
  hash: 'abc123...',
  title: '仙铃',
  relativePath: '小说/仙铃.epub',
  groupName: '小说'
};

try {
  // 将书籍从 "小说" 分类移动到 "技术书籍"
  await appService.reclassifyBook(book, '技术书籍', '小说');
  book.groupName = '技术书籍';
  book.relativePath = '技术书籍/仙铃.epub';
  console.log('书籍已重新分类');
} catch (error) {
  console.error('重新分类失败:', error);
}
```

### API 直接调用

```bash
curl -X POST http://localhost:3000/api/storage/reclassify \
  -H "Content-Type: application/json" \
  -d '{
    "oldPath": "小说/仙铃.epub",
    "newPath": "技术书籍/仙铃.epub"
  }'
```

## 故障排除

### 问题：书籍仍在旧位置

**原因：**
- 非本地存储模式
- 书籍使用旧的 hash-based 存储

**解决：**
1. 验证 `NEXT_PUBLIC_STORAGE_MODE=local`
2. 检查书籍是否有 `relativePath` 字段
3. 使用迁移脚本将旧书籍转换为新格式

### 问题：权限错误

**原因：**
- 文件/目录权限不足

**解决：**
```bash
chmod -R 755 /app/readest/books
```

### 问题：移动失败（跨文件系统）

**原因：**
- 源和目标在不同文件系统上

**解决：**
1. 检查存储配置
2. 确保 `LOCAL_STORAGE_ROOT` 在同一文件系统
3. 使用 `df` 命令检查挂载点

## 最佳实践

1. **批量操作**
   ```typescript
   // ✓ 好的做法
   for (const book of books) {
     await appService.reclassifyBook(book, newGroup, oldGroup);
   }
   ```

2. **错误恢复**
   ```typescript
   // ✓ 好的做法
   try {
     await appService.reclassifyBook(book, newGroup, oldGroup);
   } catch (error) {
     console.warn('Failed to move files, metadata updated anyway');
     // 继续执行，因为元数据已更新
   }
   ```

3. **进度反馈**
   ```typescript
   // ✓ 好的做法
   let processed = 0;
   for (const book of books) {
     await appService.reclassifyBook(book, newGroup, oldGroup);
     processed++;
     updateProgressUI(processed, books.length);
   }
   ```

## 技术细节

### 文件系统操作

```javascript
// 原子化移动
fs.rename(oldPath, newPath)

// 递归创建目录
fs.mkdir(dirPath, { recursive: true })

// 删除空目录
fs.rmdir(dirPath)
```

### 路径验证

```typescript
// 防止目录遍历
resolveLocalPath(path, isTemp) 
  // 检查 path 是否在 LOCAL_STORAGE_ROOT 内
  // 防止类似 "../../../etc/passwd" 的攻击
```

---

**更新时间：** 2026-01-21  
**版本：** 0.9.x  
**维护者：** Readest 团队
