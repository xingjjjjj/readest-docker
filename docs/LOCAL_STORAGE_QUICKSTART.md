# 本地存储模式快速开始

## 5 分钟快速设置

### 第一步：配置环境变量

创建或编辑 `/app/readest/apps/readest-app/.env.local`：

```bash
# 启用本地存储模式
NEXT_PUBLIC_STORAGE_MODE=local
STORAGE_MODE=local

# 指定存储位置（使用绝对路径）
LOCAL_STORAGE_ROOT=/app/readest/books

# Web 应用设置
NEXT_PUBLIC_APP_PLATFORM=web

# 占位符 Supabase 配置（本地模式下无需真实值）
NEXT_PUBLIC_SUPABASE_URL=http://localhost:3000
NEXT_PUBLIC_SUPABASE_ANON_KEY=dummy-key
```

### 第二步：创建存储目录

```bash
mkdir -p /app/readest/books
chmod 755 /app/readest/books
```

### 第三步：启动应用

```bash
cd /app/readest
pnpm dev-web
```

访问 http://localhost:3000

### 第四步：验证设置

打开开发者控制台检查：

```javascript
// 检查是否启用本地模式
console.log(process.env.NEXT_PUBLIC_STORAGE_MODE);  // 应显示 "local"
console.log(process.env.LOCAL_STORAGE_ROOT);         // 应显示 "/app/readest/books"
```

## 使用场景

### 场景 1：上传书籍

1. 点击"+"按钮或"上传书籍"
2. 选择 EPUB、PDF 等格式的书籍文件
3. 等待上传完成
4. 系统自动生成目录结构：
   ```
   /app/readest/books/
   └── 书籍分类（根据文件位置）/
       ├── 书籍名.epub
       └── 书籍名/
           ├── cover.png
           └── config.json
   ```

### 场景 2：扫描现有书籍

1. 手动将 `.epub` 文件放入 `/app/readest/books/`
   ```bash
   mkdir -p /app/readest/books/我的书籍
   cp ~/Downloads/*.epub /app/readest/books/我的书籍/
   ```

2. 在书库页面点击"扫描书籍"按钮
3. 系统会自动识别并导入书籍
4. 书籍会根据目录结构自动分组

### 场景 3：迁移现有书籍

如果有旧的 hash-based 存储：

```bash
cd /app/readest/books

# 备份原数据
cp -r Readest Readest.backup

# 运行迁移脚本
export LOCAL_STORAGE_ROOT=/app/readest/books
node /app/readest/scripts/migrate-storage.js

# 验证迁移成功后删除旧数据
rm -rf Readest
```

## Docker 部署

### 使用 Docker Compose

```yaml
version: '3'
services:
  readest:
    image: readest:latest
    ports:
      - "3000:3000"
    volumes:
      - ./books:/app/readest/books
    environment:
      NEXT_PUBLIC_STORAGE_MODE: local
      STORAGE_MODE: local
      LOCAL_STORAGE_ROOT: /app/readest/books
      NEXT_PUBLIC_APP_PLATFORM: web
      NEXT_PUBLIC_SUPABASE_URL: http://localhost:3000
      NEXT_PUBLIC_SUPABASE_ANON_KEY: dummy-key
```

启动：
```bash
docker-compose up -d
```

## 常见命令

### 检查存储使用情况

```bash
du -sh /app/readest/books/*
```

### 查看书籍库

```bash
cat /app/readest/books/library.json | jq '.'
```

### 手动添加书籍

```bash
# 创建分类目录
mkdir -p "/app/readest/books/科幻小说"

# 复制书籍文件
cp ~/Downloads/三体.epub "/app/readest/books/科幻小说/"

# 在应用中扫描以导入
```

### 备份书籍

```bash
# 完整备份
tar -czf books_backup.tar.gz /app/readest/books

# 恢复备份
tar -xzf books_backup.tar.gz -C /
```

## 目录映射参考

| 操作 | 本地路径 | 网络路径 |
|------|--------|--------|
| 存储根目录 | `/app/readest/books` | `/api/storage/file` |
| 上传文件 | `POST /api/storage/file` | - |
| 下载文件 | `GET /api/storage/file?filePath=...` | - |
| 扫描书籍 | `GET /api/storage/scan` | - |
| 列出文件 | `POST /api/storage/list` | - |

## 性能优化建议

### 1. 存储位置

- 使用 SSD 以获得更好的性能
- 避免网络共享存储（可能导致延迟）

### 2. 扫描优化

- 扫描大量书籍时可能需要几秒钟
- 建议定期扫描而不是连续扫描

### 3. 备份策略

```bash
# 定期备份（每周一次）
0 2 * * 1 tar -czf /backup/books_$(date +\%Y\%m\%d).tar.gz /app/readest/books
```

## 故障排除

### 症状：上传后找不到书籍

**检查步骤：**
```bash
# 1. 验证存储目录
ls -la /app/readest/books/

# 2. 查看环境变量
echo $LOCAL_STORAGE_ROOT

# 3. 检查文件权限
chmod 755 /app/readest/books
```

### 症状：扫描按钮未出现

**检查步骤：**
```javascript
// 在浏览器控制台执行
console.log(window.NEXT_PUBLIC_STORAGE_MODE);  // 应为 "local"
```

### 症状：书籍无法打开

**检查步骤：**
```bash
# 1. 验证文件格式
file /app/readest/books/*/book.epub

# 2. 检查权限
ls -la /app/readest/books/*/*

# 3. 查看服务器日志中的错误信息
```

## 下一步

- 📖 查看 [完整文档](./LOCAL_STORAGE.md)
- 🔧 了解 [API 参考](./API.md)
- 🐳 参考 [Docker 部署指南](./DOCKER.md)

---

更新时间：2026-01-21
