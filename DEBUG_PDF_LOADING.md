# PDF 流式加载调试指南

## 🎯 目的

帮助你诊断为什么打开200MB的PDF时需要全部加载完才能阅读。

## 🔧 已添加的诊断工具

### 1. 服务端日志（已添加到代码中）

我已经在以下文件中添加了详细的日志：

- ✅ `/apps/readest-app/src/services/optimizedBookLoader.ts` - 主加载逻辑
- ✅ `/apps/readest-app/src/services/chunkedFileLoader.ts` - HTTP Range 请求
- ✅ `/apps/readest-app/src/store/readerStore.ts` - Fallback 路径

### 2. 浏览器诊断脚本

文件：`/scripts/diagnose-pdf-loading.js`

## 📝 使用步骤

### 步骤 1：重新构建应用

```bash
cd /app/readest
pnpm install
pnpm build
```

### 步骤 2：启动应用

```bash
# 开发模式
pnpm dev

# 或生产模式
pnpm start
```

### 步骤 3：打开浏览器控制台

1. 打开浏览器
2. 按 F12 打开开发者工具
3. 切换到 "Console" 标签

### 步骤 4：（可选）加载诊断脚本

在控制台中粘贴并运行 `/scripts/diagnose-pdf-loading.js` 的内容。

### 步骤 5：打开PDF文件

打开你的大型PDF文件（例如那个271MB的MySQL技术精粹）。

### 步骤 6：观察日志输出

你应该看到类似这样的日志：

#### ✅ 理想情况（流式加载）：

```
[OptimizedLoader] 📖 loadFile started
[OptimizedLoader] File path: MySQL技术精粹...pdf
[OptimizedLoader] Is PDF: true
[OptimizedLoader] Strategy.useChunkedLoader: true
[OptimizedLoader] ✅ Using chunked loader
[OptimizedLoader] 📄 PDF detected - using rangeFetcher for STREAMING
[OptimizedLoader] PDF size: 271.23 MB
[OptimizedLoader] 🚀 Returning pdfRangeSource (STREAMING MODE ENABLED)

[PDF RangeFetcher] 📥 Request: [0-65536) size: 0.06 MB
[ChunkedFileLoader] 📡 Requesting range [0-65535] (0.06 MB)
[ChunkedFileLoader] Response status: 206
[ChunkedFileLoader] Content-Length: 0.06 MB
[ChunkedFileLoader] Content-Range: bytes 0-65535/284424435
[ChunkedFileLoader] ✅ Received: 0.06 MB
[PDF RangeFetcher] ✅ Fetched: 0.06 MB

[PDF RangeFetcher] 📥 Request: [284358400-284424435) size: 0.06 MB
[ChunkedFileLoader] 📡 Requesting range [284358400-284424434] (0.06 MB)
...
```

**关键指标：**
- ✅ 看到 "STREAMING MODE ENABLED"
- ✅ 响应状态是 206 (Partial Content)
- ✅ 有 Content-Range 头
- ✅ 每次请求只有几KB到几MB

#### ❌ 问题情况（完整下载）：

```
[OptimizedLoader] 📖 loadFile started
[OptimizedLoader] File path: MySQL技术精粹...pdf
[OptimizedLoader] Is PDF: true
[OptimizedLoader] Strategy.useChunkedLoader: true
[OptimizedLoader] ✅ Using chunked loader
[OptimizedLoader] 📄 PDF detected - using rangeFetcher for STREAMING
[OptimizedLoader] PDF size: 271.23 MB
❌ [Reader] Optimized load FAILED: Error: ...
[Reader] Error message: ...
⚠️ [Reader] Falling back to legacy load
⚠️ [Reader] THIS WILL DOWNLOAD THE COMPLETE FILE!
[Reader] Legacy load: downloaded complete file (271.23 MB)
```

**或者：**

```
[ChunkedFileLoader] Response status: 200
[ChunkedFileLoader] Content-Length: 271.23 MB
⚠️ Got 200 instead of 206 - server may not support Range!
```

**关键问题：**
- ❌ 看到 "Falling back to legacy load"
- ❌ 响应状态是 200 而不是 206
- ❌ 没有 Content-Range 头
- ❌ 一次性下载整个文件

### 步骤 7：检查 Network 标签

1. 切换到 "Network" 标签
2. 清除之前的记录
3. 再次打开PDF
4. 查看请求：

#### ✅ 正常情况：

```
/api/storage/file/chunk?filePath=...  206  65.5 KB
/api/storage/file/chunk?filePath=...  206  65.5 KB
/api/storage/file/chunk?filePath=...  206  128 KB
...
```

#### ❌ 异常情况：

```
/api/storage/file?filePath=...  200  271 MB
```

### 步骤 8：生成报告（如果使用了诊断脚本）

在控制台运行：

```javascript
generateLoadingReport()
```

查看详细报告。

## 🔍 常见问题和解决方案

### 问题 1：看到 "Falling back to legacy load"

**原因：** 优化加载器抛出了异常

**解决方案：**
1. 查看错误消息和堆栈
2. 检查文件路径是否正确
3. 检查 `/api/storage/file/chunk` 端点是否可访问

### 问题 2：响应状态是 200 而不是 206

**原因：** 服务器没有正确处理 Range 请求

**解决方案：**
1. 检查 `/apps/readest-app/src/app/api/storage/file/chunk/route.ts`
2. 确保服务器返回 206 状态码
3. 检查是否有反向代理或CDN干扰了 Range 请求

### 问题 3：第一次请求就下载整个文件

**原因：** 可能走的是 `/api/storage/file` 而不是 `/api/storage/file/chunk`

**解决方案：**
1. 确认 `useChunkedLoader` 策略已启用
2. 检查 PDF 检测逻辑是否正确
3. 查看是否有其他代码路径绕过了优化加载器

### 问题 4：PDF.js 报错

**原因：** Range 响应格式不正确

**解决方案：**
1. 确保 Content-Range 头格式正确：`bytes start-end/total`
2. 确保返回的数据大小与 Content-Length 匹配
3. 检查是否有数据损坏

## 📊 性能基准

### 预期性能（流式加载）

| 操作 | 时间 | 数据量 |
|------|------|--------|
| 打开首页 | <3秒 | <5MB |
| 翻页 | <0.5秒 | <1MB |
| 跳转到中间页 | <2秒 | <2MB |

### 当前性能（如果完整下载）

| 操作 | 时间 | 数据量 |
|------|------|--------|
| 打开首页 | 20-30秒 | 271MB |
| 翻页 | 即时 | 0 |
| 跳转到中间页 | 即时 | 0 |

## 🐛 提交 Bug 报告

如果发现问题，请提供：

1. **控制台日志截图**
2. **Network 标签截图**
3. **PDF 文件信息**（大小、格式）
4. **浏览器版本**
5. **服务器环境**（Node.js版本、OS）

## 📚 相关文档

- `/PDF_STREAMING_ANALYSIS.md` - 详细的技术分析
- `/scripts/diagnose-pdf-loading.js` - 诊断脚本
- `/docs/OPTIMIZE_BOOK_LOADING.md` - 优化方案文档

## 💡 快速测试命令

测试 Range 请求是否正常工作：

```bash
# 测试服务器是否支持 Range
curl -I -H "Range: bytes=0-1023" \
  "http://192.168.1.191:3000/api/storage/file/chunk?filePath=test.pdf"

# 应该返回：
# HTTP/1.1 206 Partial Content
# Content-Range: bytes 0-1023/xxxxx
# Content-Length: 1024
```

如果返回 `200 OK` 而不是 `206 Partial Content`，说明服务器端的 Range 支持有问题。

## 🎉 成功标志

当你看到以下情况时，说明流式加载正常工作：

- ✅ 控制台显示 "STREAMING MODE ENABLED"
- ✅ Network 显示多个小的 206 请求
- ✅ PDF 在 2-3秒内打开（不管文件多大）
- ✅ 只加载了几MB而不是整个文件
- ✅ 翻页时有短暂的加载延迟（这是正常的）

## 📞 需要帮助？

如果按照这个指南操作后仍有问题，请：

1. 收集上述所有日志和截图
2. 说明具体的错误现象
3. 描述你的测试环境
