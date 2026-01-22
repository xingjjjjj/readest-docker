# 本地存储模式 - 快速参考卡片

## 环境变量配置

```bash
# .env.local 或 docker-compose.yml

NEXT_PUBLIC_STORAGE_MODE=local              # 启用本地模式
STORAGE_MODE=local                          # 服务器配置
LOCAL_STORAGE_ROOT=/app/readest/books       # 存储根目录（绝对路径）
NEXT_PUBLIC_APP_PLATFORM=web                # Web 平台标识
NEXT_PUBLIC_SUPABASE_URL=http://localhost:3000      # 占位符
NEXT_PUBLIC_SUPABASE_ANON_KEY=dummy-key    # 占位符
```

## 存储路径映射

| 元素 | 路径模式 | 示例 |
|------|---------|------|
| 书籍文件 | `{category}/{filename}` | `小说/仙铃.epub` |
| 封面图片 | `{category}/{filename_no_ext}/cover.png` | `小说/仙铃/cover.png` |
| 配置文件 | `{category}/{filename_no_ext}/config.json` | `小说/仙铃/config.json` |

## 常用 API 调用

### 上传文件
```typescript
const response = await fetch('/api/storage/upload', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    relativePath: '小说/我的书.epub',
    temp: false
  })
});
const { uploadUrl } = await response.json();

// 然后上传到 uploadUrl
await fetch(uploadUrl, {
  method: 'PUT',
  body: file
});
```

### 扫描书籍
```bash
curl http://localhost:3000/api/storage/scan | jq .
```

### 列出文件
```typescript
const response = await fetch('/api/storage/list', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    dirPath: '小说',
    recursive: false,
    limit: 50
  })
});
const { files } = await response.json();
```

## 迁移命令

```bash
# 备份
cd /app/readest/books && cp -r Readest Readest.backup

# 迁移
export LOCAL_STORAGE_ROOT=/app/readest/books
node /app/readest/scripts/migrate-storage.js

# 验证
cat library.json | jq '.[] | {title, relativePath}'

# 清理
rm -rf Readest Readest.bak
```

## 文件系统目录结构

```
/app/readest/books/
├── 小说/
│   ├── 仙铃.epub
│   ├── 仙铃/
│   │   ├── cover.png
│   │   └── config.json
│   └── 我真是大明星.epub
├── 技术/
│   ├── TypeScript.pdf
│   ├── TypeScript/
│   │   ├── cover.png
│   │   └── config.json
│   └── ...
├── library.json          # 书籍库元数据
├── settings.json         # 全局设置
└── temp/                 # 上传临时文件
```

## Docker 快速部署

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

启动：`docker-compose up -d`

## 故障排除

| 问题 | 原因 | 解决方案 |
|------|------|--------|
| 上传失败 | 目录不可写 | `chmod 755 /app/readest/books` |
| 扫描无结果 | 存储目录为空 | 上传文件或使用迁移脚本 |
| 无法打开书籍 | 文件格式不支持 | 验证 .epub/.pdf 等格式 |
| 封面不显示 | 文件未创建 | 检查 `{书籍名}/cover.png` |
| 阅读进度未保存 | 配置文件权限问题 | 检查 `{书籍名}/config.json` |

## 关键文件位置

| 用途 | 路径 |
|------|------|
| 迁移脚本 | `scripts/migrate-storage.js` |
| 完整文档 | `docs/LOCAL_STORAGE.md` |
| 快速开始 | `docs/LOCAL_STORAGE_QUICKSTART.md` |
| API 参考 | `docs/API_LOCAL_STORAGE.md` |
| 路径生成 | `apps/readest-app/src/utils/book.ts` |
| API 端点 | `apps/readest-app/src/app/api/storage/` |

## 性能提示

1. **使用 SSD** - 文件 I/O 性能提升 10 倍
2. **避免网络共享** - NFS/SMB 会显著降低速度
3. **批量操作** - 使用 `/api/storage/purge` 而非单个删除
4. **定期扫描** - 而不是实时监控

## 常见问题

**Q: 如何添加新书籍？**
A: 上传或将文件放在 `/app/readest/books/{category}/` 然后扫描

**Q: 如何备份？**
A: `tar -czf books_backup.tar.gz /app/readest/books`

**Q: 如何恢复备份？**
A: `tar -xzf books_backup.tar.gz -C /`

**Q: 支持多用户吗？**
A: 本地模式是单用户，所有文件共享

**Q: 能否与云存储混用？**
A: 可以，通过 `NEXT_PUBLIC_STORAGE_MODE` 切换

---

版本：0.9.x | 最后更新：2026-01-21
