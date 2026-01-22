# 本地存储 API 参考

## 概述

本地存储 API 提供了 RESTful 接口用于本地文件系统操作，替代云端存储 API。所有端点均位于 `/api/storage/` 路径下。

## 认证

本地存储模式下所有 API 调用**无需身份认证**。请确保 `NEXT_PUBLIC_STORAGE_MODE=local`。

## 端点列表

### 1. 上传初始化

**端点：** `POST /api/storage/upload`

获取上传 URL 和相关信息。

**请求体：**
```json
{
  "fileName": "string",           // 文件名（可选）
  "bookHash": "string",           // 书籍哈希值（可选，用于分组）
  "temp": boolean,                // 是否为临时文件
  "relativePath": "string",       // 相对路径（本地模式推荐）
  "cloudPath": "string"           // 云端路径（向后兼容）
}
```

**响应：**
```json
{
  "uploadUrl": "/api/storage/file?filePath=...",
  "downloadUrl": "/api/storage/file?filePath=..."
}
```

**示例：**
```bash
curl -X POST http://localhost:3000/api/storage/upload \
  -H "Content-Type: application/json" \
  -d '{
    "relativePath": "小说/我的书.epub",
    "temp": false
  }'
```

---

### 2. 文件上传/下载

**端点：** `PUT /api/storage/file?filePath=...`

上传文件到指定路径。

**请求参数：**
- `filePath` (string, required) - 目标文件路径（相对于存储根目录）
- `temp` (boolean, optional) - 是否为临时文件

**请求体：** 文件二进制内容

**响应：**
```json
{
  "success": true,
  "path": "/app/readest/books/小说/我的书.epub"
}
```

**示例：**
```bash
curl -X PUT 'http://localhost:3000/api/storage/file?filePath=小说/我的书.epub' \
  --data-binary '@./book.epub'
```

---

**端点：** `GET /api/storage/file?filePath=...`

下载文件。

**请求参数：**
- `filePath` (string, required) - 文件路径（相对于存储根目录）

**响应：** 文件二进制内容

**示例：**
```bash
curl 'http://localhost:3000/api/storage/file?filePath=小说/我的书.epub' \
  -o book.epub
```

---

### 3. 下载 URL

**端点：** `GET /api/storage/download`

获取单个文件的下载 URL。

**请求参数：**
- `filePath` (string, required) - 文件路径

**响应：**
```json
{
  "downloadUrl": "/api/storage/file?filePath=..."
}
```

---

**端点：** `POST /api/storage/download`

获取多个文件的下载 URL（批量操作）。

**请求体：**
```json
{
  "filePaths": ["path1", "path2", ...]
}
```

**响应：**
```json
{
  "downloadUrls": [
    { "lfp": "path1", "downloadUrl": "..." },
    { "lfp": "path2", "downloadUrl": "..." }
  ]
}
```

---

### 4. 删除文件

**端点：** `POST /api/storage/delete`

删除单个文件。

**请求体：**
```json
{
  "filePath": "string"            // 文件路径
}
```

**响应：**
```json
{
  "success": true,
  "deletedPath": "..."
}
```

**示例：**
```bash
curl -X POST http://localhost:3000/api/storage/delete \
  -H "Content-Type: application/json" \
  -d '{"filePath": "小说/我的书.epub"}'
```

---

### 5. 批量删除

**端点：** `POST /api/storage/purge`

删除多个文件。

**请求体：**
```json
{
  "filePaths": ["path1", "path2", ...]
}
```

**响应：**
```json
{
  "deleted": 2,
  "failed": 0,
  "results": [
    { "path": "path1", "success": true },
    { "path": "path2", "success": true }
  ]
}
```

---

### 6. 列出文件

**端点：** `POST /api/storage/list`

列出指定目录中的文件。

**请求体：**
```json
{
  "dirPath": "string",            // 目录路径（默认：根目录）
  "filter": "string",             // 文件名过滤器（可选）
  "recursive": boolean,           // 是否递归（默认：false）
  "limit": number,                // 结果数量限制（默认：100）
  "offset": number                // 偏移量（默认：0）
}
```

**响应：**
```json
{
  "files": [
    {
      "name": "我的书.epub",
      "path": "小说/我的书.epub",
      "size": 3000000,
      "mtime": 1674192000000,
      "isDirectory": false
    }
  ],
  "total": 42,
  "limit": 100,
  "offset": 0
}
```

**示例：**
```bash
curl -X POST http://localhost:3000/api/storage/list \
  -H "Content-Type: application/json" \
  -d '{
    "dirPath": "小说",
    "recursive": false,
    "limit": 20
  }'
```

---

### 7. 统计信息

**端点：** `GET /api/storage/stats`

获取存储使用统计。

**请求参数：** 无

**响应：**
```json
{
  "totalSize": 50000000,          // 总大小（字节）
  "totalFiles": 42,              // 文件总数
  "directories": [
    {
      "path": "小说",
      "size": 30000000,
      "files": 25
    },
    {
      "path": "技术书籍",
      "size": 20000000,
      "files": 17
    }
  ]
}
```

**示例：**
```bash
curl http://localhost:3000/api/storage/stats
```

---

### 8. 扫描书籍

**端点：** `GET /api/storage/scan`

扫描存储目录中的所有书籍文件。

**请求参数：** 无

**响应：**
```json
{
  "books": [
    {
      "path": "小说/我的书.epub",
      "fileName": "我的书.epub",
      "directory": "小说",
      "ext": "epub",
      "size": 3000000,
      "mtime": 1674192000000
    }
  ],
  "total": 42,
  "scannedAt": 1674192000000
}
```

**示例：**
```bash
curl http://localhost:3000/api/storage/scan
```

---

### 9. 导入书籍

**端点：** `POST /api/storage/import`

导入扫描到的书籍。

**请求体：**
```json
{
  "bookPath": "string"            // 书籍文件路径
}
```

**响应：**
```json
{
  "success": true,
  "book": {
    "hash": "abc123...",
    "title": "我的书",
    "relativePath": "小说/我的书.epub",
    "groupName": "小说"
  }
}
```

---

## 错误处理

### 常见错误响应

**404 - 文件不存在**
```json
{
  "error": "File not found: path/to/file"
}
```

**400 - 请求参数无效**
```json
{
  "error": "Invalid request: missing required parameter"
}
```

**500 - 服务器错误**
```json
{
  "error": "Internal server error: operation failed"
}
```

**501 - 本地存储未启用**
```json
{
  "error": "Local storage disabled"
}
```

---

## 使用示例

### JavaScript/TypeScript 示例

```typescript
// 上传文件
async function uploadBook(file: File, relativePath: string) {
  // 1. 获取上传 URL
  const uploadRes = await fetch('/api/storage/upload', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ relativePath, temp: false })
  });
  const { uploadUrl } = await uploadRes.json();

  // 2. 上传文件
  const uploadResponse = await fetch(uploadUrl, {
    method: 'PUT',
    body: file
  });
  
  return await uploadResponse.json();
}

// 下载文件
async function downloadBook(filePath: string) {
  const response = await fetch(
    `/api/storage/file?filePath=${encodeURIComponent(filePath)}`
  );
  return await response.blob();
}

// 扫描书籍
async function scanBooks() {
  const response = await fetch('/api/storage/scan');
  return await response.json();
}

// 列出文件
async function listBooks(category: string) {
  const response = await fetch('/api/storage/list', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      dirPath: category,
      recursive: false,
      limit: 50
    })
  });
  return await response.json();
}
```

### cURL 示例

```bash
# 上传文件
curl -X PUT 'http://localhost:3000/api/storage/file?filePath=小说/test.epub' \
  --data-binary '@./test.epub'

# 下载文件
curl -o downloaded.epub \
  'http://localhost:3000/api/storage/file?filePath=小说/test.epub'

# 扫描书籍
curl http://localhost:3000/api/storage/scan | jq .

# 获取统计信息
curl http://localhost:3000/api/storage/stats | jq .

# 删除文件
curl -X POST http://localhost:3000/api/storage/delete \
  -H 'Content-Type: application/json' \
  -d '{"filePath": "小说/test.epub"}'
```

---

## 限制和注意事项

1. **路径安全**
   - 所有路径都经过验证，防止目录遍历
   - 相对路径必须位于 `LOCAL_STORAGE_ROOT` 内

2. **文件大小**
   - 默认最大上传大小：100MB
   - 可通过环境变量配置

3. **并发操作**
   - 支持并发读取
   - 写入操作具有排序保证

4. **性能**
   - 大量小文件操作可能较慢
   - 建议合并小文件或使用存档格式

---

## 迁移指南

从云端 API 迁移到本地 API 时的关键变化：

| 操作 | 云端 API | 本地 API |
|------|---------|--------|
| 认证 | 需要 token | 无需认证 |
| 上传路径 | `Readest/Books/{hash}/` | `{category}/file` |
| 下载 URL | S3/R2 | `/api/storage/file` |
| 错误处理 | 网络错误 | 文件系统错误 |

---

## 故障排除

### 上传失败

检查：
1. `LOCAL_STORAGE_ROOT` 是否可写
2. 磁盘空间是否充足
3. 文件路径中是否包含非法字符

### 扫描无结果

检查：
1. 存储目录是否为空
2. 文件格式是否支持
3. 文件权限是否允许读取

### 性能缓慢

优化：
1. 使用 SSD 存储
2. 减少目录深度
3. 避免实时扫描大量文件

---

更新时间：2026-01-21
维护者：Readest 团队
