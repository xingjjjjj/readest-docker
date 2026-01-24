(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/[root-of-the-server]__3b63b117._.js",
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[project]/apps/readest-app/src/middleware.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config,
    "middleware",
    ()=>middleware
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.28.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.28.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/esm/server/web/exports/index.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$10$2e$0$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$jwt$2f$verify$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/jose@5.10.0/node_modules/jose/dist/browser/jwt/verify.js [middleware-edge] (ecmascript)");
;
;
const allowedOrigins = [
    'https://web.readest.com',
    'http://localhost:3000',
    'http://localhost:3001',
    'https://tauri.localhost',
    'http://tauri.localhost',
    'tauri://localhost'
];
// 在中间件中动态检查 origin，允许所有 192.168.*.* 和 localhost
const isOriginAllowed = (origin)=>{
    if (!origin) return false;
    if (allowedOrigins.includes(origin)) return true;
    // 允许局域网 IP
    if (/^https?:\/\/(localhost|127\.0\.0\.1|192\.168\.\d+\.\d+|10\.\d+\.\d+\.\d+)(:\d+)?$/.test(origin)) {
        return true;
    }
    // 支持通过环境变量配置额外的允许域名（逗号分隔）
    const customOrigins = process.env['ALLOWED_ORIGINS'];
    if (customOrigins) {
        const customList = customOrigins.split(',').map((o)=>o.trim());
        if (customList.includes(origin)) {
            return true;
        }
    }
    return false;
};
const corsOptions = {
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Max-Age': '86400'
};
const isPublicPath = (pathname)=>{
    return pathname.startsWith('/auth') || pathname.startsWith('/_next') || pathname.startsWith('/public') || pathname === '/favicon.ico' || pathname === '/robots.txt' || pathname === '/sitemap.xml';
};
async function verifyToken(token) {
    if (!token) return false;
    const secret = new TextEncoder().encode(process.env['AUTH_SECRET'] || 'dev-secret');
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$10$2e$0$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$jwt$2f$verify$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["jwtVerify"])(token, secret);
        return true;
    } catch  {
        return false;
    }
}
async function middleware(request) {
    const origin = request.headers.get('origin') ?? '';
    const isAllowedOrigin = isOriginAllowed(origin);
    if (request.method === 'OPTIONS') {
        const preflightHeaders = new Headers({
            ...corsOptions,
            ...isAllowedOrigin && {
                'Access-Control-Allow-Origin': origin
            }
        });
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"](null, {
            status: 200,
            headers: preflightHeaders
        });
    }
    const { pathname } = request.nextUrl;
    // 认证 API（/api/auth/*）不需要登录检查，直接通过
    if (pathname.startsWith('/api/auth')) {
        const response = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
        if (isAllowedOrigin) {
            response.headers.set('Access-Control-Allow-Origin', origin);
        }
        Object.entries(corsOptions).forEach(([key, value])=>{
            response.headers.set(key, value);
        });
        return response;
    }
    // 页面保护（非 public 路径且非 API）
    if (!pathname.startsWith('/api') && !isPublicPath(pathname)) {
        const token = request.cookies.get('auth_token')?.value;
        const valid = await verifyToken(token);
        if (!valid) {
            const url = new URL('/auth', request.url);
            const fullPath = request.nextUrl.pathname + (request.nextUrl.search || '');
            url.searchParams.set('redirect', fullPath);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(url);
        }
    }
    const response = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
    if (isAllowedOrigin) {
        response.headers.set('Access-Control-Allow-Origin', origin);
    }
    Object.entries(corsOptions).forEach(([key, value])=>{
        response.headers.set(key, value);
    });
    return response;
}
const config = {
    // 保护所有页面路由；API 另匹配
    matcher: [
        // 排除所有 API 路由、public 路由、_next、auth 等
        '/((?!_next|public|auth|api|favicon.ico|robots.txt|sitemap.xml).*)',
        '/api/:path*'
    ]
};
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__3b63b117._.js.map