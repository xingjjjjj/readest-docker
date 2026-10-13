import { NextRequest, NextResponse } from 'next/server';
import { createJWT, validateCredentials } from '@/utils/jwt';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { username, password } = body;

        if (!username || !password) {
            return NextResponse.json(
                { error: 'Username and password are required' },
                { status: 400 }
            );
        }

        if (!validateCredentials(username, password)) {
            return NextResponse.json(
                { error: 'Invalid username or password' },
                { status: 401 }
            );
        }

        const token = await createJWT(username);

        const response = NextResponse.json(
            {
                success: true,
                token,
                user: {
                    username,
                    name: 'User',
                    id: username,
                    email: 'admin@local',
                },
            },
            { status: 200 }
        );

        response.cookies.set('auth_token', token, {
            httpOnly: true,
            // 2026-10-12 修复：NODE_ENV=production 时一律 Secure，HTTP 部署浏览器拒收 cookie 导致无法登录
            // 对齐 v0205 行为：按请求协议判断（HTTPS 才 Secure）
            secure: (request.headers.get('x-forwarded-proto') || request.nextUrl.protocol) === 'https:',
            sameSite: 'lax',
            path: '/',
            maxAge: 30 * 24 * 60 * 60,
        });

        return response;
    } catch (error) {
        console.error('Login error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
