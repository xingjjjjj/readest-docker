#!/bin/bash

set -e

# ============================================================
# Readest Docker Entrypoint Script
# 从 .env.example 模板初始化环境配置
# ============================================================

echo "🚀 Readest Application Starting..."
echo "=========================================="

# =====================
# 0. 环境文件初始化
# =====================
echo "[Config] Initializing environment files..."

# 持久化配置文件路径（可以通过卷挂载持久化）
CONFIG_ROOT="${CONFIG_ROOT:=/app/config}"
ENV_FILE="${CONFIG_ROOT}/.readest.env"
ENV_EXAMPLE="/app/.env.example"

# 创建配置目录
mkdir -p "$CONFIG_ROOT"

# 如果 .readest.env 不存在，从 .env.example 复制
if [ ! -f "$ENV_FILE" ]; then
    echo "📋 Creating .readest.env from template..."
    if [ -f "$ENV_EXAMPLE" ]; then
        cp "$ENV_EXAMPLE" "$ENV_FILE"
        echo "✓ Created $ENV_FILE from $ENV_EXAMPLE"
    else
        echo "⚠️  Warning: $ENV_EXAMPLE not found, will create minimal config"
        touch "$ENV_FILE"
    fi
else
    echo "✓ Using existing $ENV_FILE"
fi

# 加载已保存的环境配置
if [ -f "$ENV_FILE" ]; then
    echo "📖 Loading environment from $ENV_FILE"
    set -a
    . "$ENV_FILE"
    set +a
fi

# =====================
# 1. 处理 Docker 传入的环境变量覆盖
# =====================
echo "[Config] Checking for docker-provided environment variables..."

# 定义需要处理的环境变量列表
ENV_VARS=(
    "AUTH_SECRET"
    "AUTH_PASSWORD"
    "STORAGE_MODE"
    "NEXT_PUBLIC_STORAGE_MODE"
    "LOCAL_STORAGE_ROOT"
    "NEXT_PUBLIC_APP_PLATFORM"
    "NEXT_PUBLIC_API_BASE_URL"
    "NEXT_PUBLIC_EXTERNAL_API_BASE_URL"
    "NEXT_PUBLIC_WEB_BASE_URL"
    "NEXT_PUBLIC_NODE_BASE_URL"
    "NEXT_PUBLIC_STORAGE_BASE_URL"
    "ALLOWED_ORIGINS"
    "NODE_ENV"
    "NEXT_PUBLIC_SUPABASE_URL"
    "NEXT_PUBLIC_SUPABASE_ANON_KEY"
)

# 检查并更新从 docker run -e 或 docker-compose 传入的变量
for var in "${ENV_VARS[@]}"; do
    # 获取当前变量值
    current_value=$(grep "^${var}=" "$ENV_FILE" 2>/dev/null | cut -d'=' -f2- | sed 's/^"//' | sed 's/"$//' || echo "")
    # 获取通过环境传入的值
    env_value="${!var}"
    
    if [ -n "$env_value" ] && [ "$env_value" != "$current_value" ]; then
        echo "  🔄 Updating $var from docker environment"
        # 删除旧值，添加新值
        sed -i "/^${var}=/d" "$ENV_FILE"
        # 需要转义特殊字符
        escaped_value=$(printf '%s\n' "$env_value" | sed 's/[&/\]/\\&/g')
        echo "${var}=${escaped_value}" >> "$ENV_FILE"
        export "${var}=${env_value}"
    fi
done

# =====================
# 2. 认证配置
# =====================
echo "[Config] Setting up authentication..."

# 重新加载更新后的环境文件
set -a
. "$ENV_FILE"
set +a

# 如果没有 AUTH_SECRET，生成并保存
if [ -z "$AUTH_SECRET" ]; then
    echo "⚠️  AUTH_SECRET not provided, generating new one..."
    AUTH_SECRET=$(openssl rand -hex 32)
    export AUTH_SECRET
    echo "✓ Generated AUTH_SECRET: $AUTH_SECRET"
    sed -i "/^AUTH_SECRET=/d" "$ENV_FILE"
    echo "AUTH_SECRET=$AUTH_SECRET" >> "$ENV_FILE"
else
    echo "✓ AUTH_SECRET provided/loaded"
fi

# 如果没有 AUTH_PASSWORD，生成并保存
if [ -z "$AUTH_PASSWORD" ]; then
    echo "⚠️  AUTH_PASSWORD not provided, generating new one..."
    AUTH_PASSWORD=$(openssl rand -hex 16)
    export AUTH_PASSWORD
    echo "✓ Generated AUTH_PASSWORD: $AUTH_PASSWORD"
    sed -i "/^AUTH_PASSWORD=/d" "$ENV_FILE"
    echo "AUTH_PASSWORD=$AUTH_PASSWORD" >> "$ENV_FILE"
else
    echo "✓ AUTH_PASSWORD provided/loaded"
fi

# =====================
# 3. 存储模式配置
# =====================
echo "[Config] Setting up storage mode..."

# 默认存储模式为 local (适合 Docker 部署)
if [ -z "$STORAGE_MODE" ]; then
    export STORAGE_MODE="local"
    sed -i "/^STORAGE_MODE=/d" "$ENV_FILE"
    echo "STORAGE_MODE=local" >> "$ENV_FILE"
    echo "✓ STORAGE_MODE set to: local (default)"
else
    echo "✓ STORAGE_MODE: $STORAGE_MODE"
fi

if [ -z "$NEXT_PUBLIC_STORAGE_MODE" ]; then
    export NEXT_PUBLIC_STORAGE_MODE="local"
    sed -i "/^NEXT_PUBLIC_STORAGE_MODE=/d" "$ENV_FILE"
    echo "NEXT_PUBLIC_STORAGE_MODE=local" >> "$ENV_FILE"
    echo "✓ NEXT_PUBLIC_STORAGE_MODE set to: local (default)"
else
    echo "✓ NEXT_PUBLIC_STORAGE_MODE: $NEXT_PUBLIC_STORAGE_MODE"
fi

# =====================
# 4. 本地存储根目录
# =====================
echo "[Config] Setting up storage root..."

if [ -z "$LOCAL_STORAGE_ROOT" ]; then
    export LOCAL_STORAGE_ROOT="${STORAGE_ROOT:=/app/books}"
    sed -i "/^LOCAL_STORAGE_ROOT=/d" "$ENV_FILE"
    echo "LOCAL_STORAGE_ROOT=$LOCAL_STORAGE_ROOT" >> "$ENV_FILE"
    echo "✓ LOCAL_STORAGE_ROOT set to: $LOCAL_STORAGE_ROOT (default)"
else
    echo "✓ LOCAL_STORAGE_ROOT: $LOCAL_STORAGE_ROOT"
fi

# 确保存储目录存在
mkdir -p "$LOCAL_STORAGE_ROOT"
mkdir -p "$LOCAL_STORAGE_ROOT/.readest"
echo "✓ Storage directories ready: $LOCAL_STORAGE_ROOT"

# =====================
# 4.5 初始化 note.json
# =====================
echo "[Config] Initializing note.json..."

NOTE_FILE="$LOCAL_STORAGE_ROOT/.readest/note.json"

# 如果 note.json 不存在，创建空的初始结构
if [ ! -f "$NOTE_FILE" ]; then
    echo "📝 Creating note.json with default structure..."
    mkdir -p "$(dirname "$NOTE_FILE")"
    cat > "$NOTE_FILE" << 'EOF'
{
  "books": {}
}
EOF
    echo "✓ Created $NOTE_FILE with default structure"
else
    echo "✓ Using existing $NOTE_FILE"
    # 验证 note.json 是否有效的 JSON
    if ! grep -q '^\s*{' "$NOTE_FILE" 2>/dev/null; then
        echo "⚠️  Warning: $NOTE_FILE may be invalid, backing up and reinitializing..."
        cp "$NOTE_FILE" "$NOTE_FILE.bak.$(date +%s)"
        cat > "$NOTE_FILE" << 'EOF'
{
  "books": {}
}
EOF
        echo "✓ Reinitialized $NOTE_FILE (backup saved)"
    fi
fi

# =====================
# 5. 应用平台配置
# =====================
echo "[Config] Setting up app platform..."

if [ -z "$NEXT_PUBLIC_APP_PLATFORM" ]; then
    export NEXT_PUBLIC_APP_PLATFORM="web"
    sed -i "/^NEXT_PUBLIC_APP_PLATFORM=/d" "$ENV_FILE"
    echo "NEXT_PUBLIC_APP_PLATFORM=web" >> "$ENV_FILE"
    echo "✓ NEXT_PUBLIC_APP_PLATFORM set to: web (default)"
else
    echo "✓ NEXT_PUBLIC_APP_PLATFORM: $NEXT_PUBLIC_APP_PLATFORM"
fi

# =====================
# 6. API URLs 配置
# =====================
echo "[Config] Validating API URLs..."

API_URL_VARS=(
    "NEXT_PUBLIC_API_BASE_URL"
    "NEXT_PUBLIC_EXTERNAL_API_BASE_URL"
    "NEXT_PUBLIC_WEB_BASE_URL"
    "NEXT_PUBLIC_NODE_BASE_URL"
    "NEXT_PUBLIC_STORAGE_BASE_URL"
)

for url_var in "${API_URL_VARS[@]}"; do
    url_value="${!url_var}"
    if [ -z "$url_value" ]; then
        echo "ℹ️  $url_var not set (will be auto-detected at runtime)"
    else
        echo "✓ $url_var: $url_value"
    fi
done

# =====================
# 7. Node.js 环境
# =====================
echo "[Config] Setting up Node environment..."

if [ -z "$NODE_ENV" ]; then
    export NODE_ENV="production"
    sed -i "/^NODE_ENV=/d" "$ENV_FILE"
    echo "NODE_ENV=production" >> "$ENV_FILE"
    echo "✓ NODE_ENV set to: production (default)"
else
    echo "✓ NODE_ENV: $NODE_ENV"
fi

# =====================
# 8. 打印配置摘要
# =====================
echo ""
echo "=========================================="
echo "✅ Configuration Summary:"
echo "=========================================="
echo "  Config File: $ENV_FILE"
echo ""
echo "  Authentication:"
echo "    Username: xingjjjjj"
echo "    Password: $AUTH_PASSWORD"
echo "    Secret:   ${AUTH_SECRET:0:16}... (truncated)"
echo ""
echo "  Storage:"
echo "    Mode:     $STORAGE_MODE / $NEXT_PUBLIC_STORAGE_MODE"
echo "    Root:     $LOCAL_STORAGE_ROOT"
echo ""
echo "  API URLs:"
echo "    Web Base:     ${NEXT_PUBLIC_WEB_BASE_URL:-https://web.readest.com}"
echo "    Node Base:    ${NEXT_PUBLIC_NODE_BASE_URL:-https://node.readest.com}"
echo "    Storage Base: ${NEXT_PUBLIC_STORAGE_BASE_URL:-https://storage.readest.com}"
echo "    API Base:     ${NEXT_PUBLIC_API_BASE_URL:-http://localhost:3000}"
echo ""
echo "  CORS:"
echo "    Additional Origins: ${ALLOWED_ORIGINS:-(none, auto-allow local IPs)}"
echo ""
echo "  Application:"
echo "    Platform: $NEXT_PUBLIC_APP_PLATFORM"
echo "    Env:      $NODE_ENV"
echo "=========================================="
echo ""

# =====================
# 9. 启动应用
# =====================
echo "🎯 Starting application..."
cd /app/apps/readest-app

# 直接启动 Next.js（env 已通过 entrypoint 设置）
exec node_modules/.bin/next start
