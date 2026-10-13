import { NextRequest, NextResponse } from 'next/server';

export async function POST(_request: NextRequest) {
    try {
        const response = NextResponse.json(
            { success: true, message: 'Logged out successfully' },
            { status: 200 }
        );
        // 清除 auth_token Cookie
        response.cookies.set('auth_token', '', {
            httpOnly: true,
            // 2026-10-12 修复：NODE_ENV=production 时一律 Secure，HTTP 部署浏览器拒收 cookie 导致无法登录
            // 对齐 v0205 行为：按请求协议判断（HTTPS 才 Secure）
            secure: false, // logout 清 cookie 场景：Secure 无意义，恒 false
            sameSite: 'lax',
            path: '/',
            maxAge: 0,
        });
        return response;
    } catch (error) {
        console.error('Logout error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
