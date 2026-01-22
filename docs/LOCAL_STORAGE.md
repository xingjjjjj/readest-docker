# 本地存储架构文档

## 概述

Readest 现已支持本地文件存储模式，无需依赖云端服务。本地存储采用扁平目录结构，与书籍相关的所有文件（封面、配置）存储在书籍同名文件夹中。

## 存储结构

### 启用本地存储模式

在 `.env.local` 中设置以下环境变量：

```bash
# 启用本地存储模式
NEXT_PUBLIC_STORAGE_MODE=local
STORAGE_MODE=local

# 指定存储根目录（绝对路径）
LOCAL_STORAGE_ROOT=/app/readest/books

# 可选：设置平台为 web
NEXT_PUBLIC_APP_PLATFORM=web
```

### 存储目录布局

```
/app/readest/books/
├── 小说分类/
│   ├── 仙铃.epub                    # 书籍文件
│   ├── 仙铃/                        # 同名文件夹
│   │   ├── cover.png               # 封面图像
│   │   └── config.json             # 书籍配置（阅读位置、设置等）
│   └── 其他书籍.epub
│
├── 技术书籍/
│   ├── TypeScript 完全指南.pdf
│   ├── TypeScript 完全指南/
│   │   ├── cover.png
│   │   └── config.json
│   └── ...
│
├── 我真是大明星.epub                # 根目录书籍
├── 我真是大明星/
│   ├── cover.png
│   └── config.json
│
├── settings.json                   # 全局设置
├── library.json                    # 书籍库（元数据）
├── Readest/                        # 旧的 hash-based 存储（迁移后可删除）
│   └── Books/
│       └── {hash}/
│           ├── book.epub
│           ├── cover.png
│           └── config.json
│
└── temp/                           # 上传临时文件
```

## 路径生成逻辑

对于每本书籍，系统使用以下规则生成存储路径：

| 文件类型 | 路径生成 | 示例 |
|---------|--------|------|
| **书籍文件** | `relativePath` | `小说/仙铃.epub` |
| **封面** | `relativePath去扩展名/cover.png` | `小说/仙铃/cover.png` |
| **配置** | `relativePath去扩展名/config.json` | `小说/仙铃/config.json` |

书籍对象结构：

```typescript
interface Book {
  hash: string;                        // 文件哈希（唯一标识）
  title: string;                       // 显示标题
  relativePath?: string;               // 相对于存储根目录的路径
  groupName?: string;                  // 所属分组（从目录结构推导）
  // ... 其他字段
}
```

## 特性

### ✅ 优势

1. **清晰的文件组织**
   - 所有相关文件（书籍、封面、配置）存储在一起
   - 易于手动管理和备份

2. **目录结构自动分组**
   - 扫描书籍时自动根据目录结构设置 `groupName`
   - 在 UI 中按分组显示书籍

3. **向后兼容**
   - 仍支持旧的 hash-based 存储结构
   - 可以通过迁移脚本逐步升级

4. **灵活的存储位置**
   - 支持任意本地存储路径
   - 可在 Docker 中挂载外部卷

### ⚙️ 工作流程

1. **上传书籍**
   - 用户上传书籍文件
   - 系统生成 `relativePath`（如 `小说/仙铃.epub`）
   - 从书籍元数据提取封面和配置
   - 创建 `小说/仙铃/` 文件夹并保存相关文件

2. **扫描书籍**
   - 递归扫描 `/app/readest/books/` 目录
   - 识别所有书籍文件（.epub, .pdf 等）
   - 根据文件路径自动设置 `groupName`
   - 导入到书籍库

3. **读取书籍**
   - 加载书籍文件并显示封面
   - 读取配置文件恢复阅读进度
   - 更新配置时写入同名文件夹中的 config.json

## API 端点

### 本地存储 API

所有 API 端点均位于 `/api/storage/` 下：

| 端点 | 方法 | 描述 |
|------|------|------|
| `/api/storage/upload` | POST | 获取上传 URL |
| `/api/storage/download` | GET/POST | 获取下载 URL |
| `/api/storage/file` | GET/PUT | 获取/上传文件 |
| `/api/storage/delete` | POST | 删除文件 |
| `/api/storage/list` | POST | 列出文件 |
| `/api/storage/scan` | GET | 扫描书籍 |
| `/api/storage/import` | POST | 导入书籍 |
| `/api/storage/stats` | GET | 获取存储统计 |

## 迁移指南

### 从 Hash-Based 结构迁移

如果已有使用旧 hash-based 结构存储的书籍，可使用迁移脚本：

```bash
# 运行迁移脚本
node /app/readest/scripts/migrate-storage.js

# 脚本会：
# 1. 读取 library.json 获取书籍元数据
# 2. 遍历每本书籍的旧存储位置
# 3. 复制文件到新的目录结构
# 4. 更新书籍库中的 relativePath
# 5. 保存更新的 library.json
```

迁移后的文件结构：

```
旧结构：
  Readest/Books/{hash}/book.epub
           /book.epub

新结构：
  {category}/book.epub
  {category}/book/cover.png
  {category}/book/config.json
```

### 迁移步骤

1. **备份数据**
   ```bash
   cd /app/readest/books
   cp -r Readest Readest.backup
   ```

2. **运行迁移脚本**
   ```bash
   export LOCAL_STORAGE_ROOT=/app/readest/books
   node /app/readest/scripts/migrate-storage.js
   ```

3. **验证迁移**
   - 检查 library.json 是否已更新
   - 验证所有书籍文件是否正确复制
   - 在 Web UI 中测试书籍是否能正常打开

4. **清理旧数据**（可选）
   ```bash
   cd /app/readest/books
   rm -rf Readest Readest.bak
   ```

## 环境变量参考

### 本地存储模式相关

```bash
# 启用本地存储
NEXT_PUBLIC_STORAGE_MODE=local           # 必需
STORAGE_MODE=local                       # 必需

# 存储路径
LOCAL_STORAGE_ROOT=/app/readest/books    # 必需，绝对路径

# 平台设置
NEXT_PUBLIC_APP_PLATFORM=web             # 可选，默认自动检测

# Supabase 占位符（本地模式下不使用）
NEXT_PUBLIC_SUPABASE_URL=http://localhost:3000
NEXT_PUBLIC_SUPABASE_ANON_KEY=dummy-key
```

### 云端存储相关（仅在未启用本地模式时使用）

```bash
NEXT_PUBLIC_STORAGE_MODE=remote          # 使用云端存储
NEXT_PUBLIC_SUPABASE_URL=https://...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
```

## 故障排除

### 问题：书籍扫描后无法打开

**可能原因：**
- 书籍文件格式不支持
- 路径编码问题

**解决方案：**
1. 检查服务器日志查看详细错误信息
2. 验证文件格式是否支持（.epub, .pdf, .mobi 等）
3. 确保文件名和路径没有特殊字符导致的编码问题

### 问题：封面或配置无法加载

**可能原因：**
- 相关文件未被创建
- 权限问题

**解决方案：**
1. 检查 `{书籍名}/cover.png` 和 `config.json` 是否存在
2. 验证文件权限是否允许读取
3. 检查服务器日志中是否有文件系统错误

### 问题：迁移脚本失败

**可能原因：**
- 权限不足
- 存储路径不存在

**解决方案：**
1. 确保以 root 或正确的用户身份运行脚本
2. 验证 `LOCAL_STORAGE_ROOT` 路径存在且可写
3. 检查脚本输出的详细错误信息

## 开发说明

### 关键代码位置

- **路径生成**: `src/utils/book.ts`
  - `getLocalBookFilename()` - 书籍文件路径
  - `getCoverFilename()` - 封面路径
  - `getConfigFilename()` - 配置路径

- **本地存储检测**: `src/libs/storage.ts`
  - `isLocalStorageMode` - 检查是否启用本地模式

- **文件系统 API**: `src/app/api/storage/*/route.ts`
  - 8 个 API 端点处理本地文件操作

- **书籍导入**: `src/services/appService.ts`
  - `importBook()` - 导入单个书籍
  - `importBookFromPath()` - 从路径导入并设置分组

### 添加新特性

当添加与存储相关的新特性时：

1. 检查 `isLocalStorageMode` 以确定是否需要特殊处理
2. 在本地模式下避免使用云端 API（R2, S3）
3. 更新相应的测试用例

## 常见问题

**Q: 能否在两种存储模式之间切换？**
A: 是的，但需要重启应用。确保两种模式都有有效的配置。

**Q: 本地存储模式下是否支持多设备同步？**
A: 本地模式下没有云端同步。可以通过共享网络存储或定期备份来实现同步。

**Q: Docker 容器中如何使用本地存储？**
A: 将主机目录挂载到容器中：
   ```bash
   docker run -v /host/books:/app/readest/books ...
   ```

**Q: 能否完全删除旧的 hash-based 存储？**
A: 是的，迁移后可以安全删除 `Readest` 目录。建议先备份。

## 更新日志

### v0.9.x

- ✨ 添加本地存储模式
- ✨ 实现书籍扫描和自动分组
- ✨ 创建迁移脚本
- ✨ 更新 API 端点支持本地文件操作
- 🔄 重构文件系统抽象层

---

更新时间：2026-01-21  
维护者：Readest 团队
