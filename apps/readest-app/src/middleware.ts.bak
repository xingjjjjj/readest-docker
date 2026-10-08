import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const allowedOrigins = [
  'https://web.readest.com',
  'http://localhost:3000',
  'http://localhost:3001',
  'https://tauri.localhost',
  'http://tauri.localhost',
  'tauri://localhost',
];

// 在中间件中动态检查 origin，允许所有 192.168.*.* 和 localhost
const isOriginAllowed = (origin: string) => {
  if (!origin) return false;
  if (allowedOrigins.includes(origin)) return true;

  // 允许局域网 IP
  if (/^https?:\/\/(localhost|127\.0\.0\.1|192\.168\.\d+\.\d+|10\.\d+\.\d+\.\d+)(:\d+)?$/.test(origin)) {
    return true;
  }

  // 支持通过环境变量配置额外的允许域名（逗号分隔）
  const customOrigins = process.env['ALLOWED_ORIGINS'];
  if (customOrigins) {
    const customList = customOrigins.split(',').map(o => o.trim());
    if (customList.includes(origin)) {
      return true;
    }
  }

  return false;
};

const corsOptions = {
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': '*',
  'Access-Control-Max-Age': '86400',
};

const isPublicPath = (pathname: string) => {
  return (
    pathname.startsWith('/auth') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/public') ||
    pathname === '/favicon.ico' ||
    pathname === '/robots.txt' ||
    pathname === '/sitemap.xml'
  );
};

async function verifyToken(token: string | undefined) {
  if (!token) return false;
  const secret = new TextEncoder().encode(process.env['AUTH_SECRET'] || 'dev-secret');
  try {
    await jwtVerify(token, secret);
    return true;
  } catch {
    return false;
  }
}

export async function middleware(request: NextRequest) {
  const origin = request.headers.get('origin') ?? '';
  const isAllowedOrigin = isOriginAllowed(origin);

  if (request.method === 'OPTIONS') {
    const preflightHeaders = new Headers({
      ...corsOptions,
      ...(isAllowedOrigin && { 'Access-Control-Allow-Origin': origin }),
    });

    return new NextResponse(null, {
      status: 200,
      headers: preflightHeaders,
    });
  }

  const { pathname } = request.nextUrl;

  // 认证 API（/api/auth/*）不需要登录检查，直接通过
  if (pathname.startsWith('/api/auth')) {
    const response = NextResponse.next();
    if (isAllowedOrigin) {
      response.headers.set('Access-Control-Allow-Origin', origin);
    }
    Object.entries(corsOptions).forEach(([key, value]) => {
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
      return NextResponse.redirect(url);
    }
  }

  const response = NextResponse.next();

  if (isAllowedOrigin) {
    response.headers.set('Access-Control-Allow-Origin', origin);
  }

  Object.entries(corsOptions).forEach(([key, value]) => {
    response.headers.set(key, value);
  });

  return response;
}

export const config = {
  // 保护所有页面路由；API 另匹配
  matcher: [
    // 排除所有 API 路由、public 路由、_next、auth 等
    '/((?!_next|public|auth|api|favicon.ico|robots.txt|sitemap.xml).*)',
    '/api/:path*',
  ],
};
