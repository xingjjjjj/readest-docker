FROM node:20-alpine AS builder

WORKDIR /app

# 复制 package 文件和 workspace 配置
COPY pnpm-lock.yaml pnpm-workspace.yaml package.json ./
COPY apps/readest-app/package.json ./apps/readest-app/
COPY packages/foliate-js/package.json ./packages/foliate-js/
COPY packages/simplecc-wasm/package.json ./packages/simplecc-wasm/

# 安装 pnpm 并安装依赖
RUN npm install -g pnpm && pnpm install --frozen-lockfile

# 复制源代码
COPY . .

# 构建应用
WORKDIR /app/apps/readest-app
RUN NEXT_PUBLIC_APP_PLATFORM=web NEXT_PUBLIC_STORAGE_MODE=local STORAGE_MODE=local LOCAL_STORAGE_ROOT=/app/books NEXT_PUBLIC_API_BASE_URL=http://localhost:3000 NEXT_PUBLIC_WEB_BASE_URL=http://localhost:3000 NEXT_PUBLIC_NODE_BASE_URL=http://localhost:3000 NEXT_PUBLIC_STORAGE_BASE_URL=http://localhost:3000 NODE_OPTIONS="--max-old-space-size=3072" pnpm build-web && \
    # 删除开发模式构建产物，节省 ~491 MB
    rm -rf .next/dev && \
    # 删除 source maps
    find .next -name "*.map" -delete && \
    # 删除构建缓存
    rm -rf .next/cache

# ========== 运行时镜像 ==========
FROM node:20-alpine

WORKDIR /app

# 安装 pnpm 和必需工具
RUN npm install -g pnpm && apk add --no-cache openssl bash

# 仅复制必要的文件
COPY --from=builder /app/pnpm-lock.yaml /app/pnpm-workspace.yaml /app/package.json ./
COPY --from=builder /app/apps/readest-app ./apps/readest-app
COPY --from=builder /app/packages ./packages

# 复制环境变量模板
COPY .env.example /app/.env.example

# 安装生产依赖并清理缓存
RUN cd apps/readest-app && \
    pnpm install --prod --frozen-lockfile && \
    # 清理 pnpm 缓存进一步节省空间
    pnpm store prune

# 复制入口脚本
COPY entrypoint.sh /app/entrypoint.sh
RUN chmod +x /app/entrypoint.sh

# 设置工作目录
WORKDIR /app

# 暴露端口
EXPOSE 3000

# 使用入口脚本启动
ENTRYPOINT ["/app/entrypoint.sh"]
