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

        // 验证凭证
        if (!validateCredentials(username, password)) {
            return NextResponse.json(
                { error: 'Invalid username or password' },
                { status: 401 }
            );
        }

        // 生成令牌
        const token = await createJWT(username);

        const response = NextResponse.json(
            {
                success: true,
                token,
                user: {
                    username,
                    name: 'User',
                    id: 'xingjjjjj',
                    email: 'admin@local',
                },
            },
            { status: 200 }
        );

        // 设置 httpOnly cookie，供中间件校验
        // HTTP 环境下必须使用 secure: false，否则浏览器会拒绝设置 cookie
        const isProduction = process.env['NODE_ENV'] === 'production';
        const protocol = request.headers.get('x-forwarded-proto') ||
            (request.url.startsWith('https') ? 'https' : 'http');

        response.cookies.set('auth_token', token, {
            httpOnly: true,
            secure: protocol === 'https', // 仅在 HTTPS 时启用 secure
            sameSite: 'lax',
            path: '/',
            maxAge: 60 * 60 * 24 * 30, // 30 天
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
