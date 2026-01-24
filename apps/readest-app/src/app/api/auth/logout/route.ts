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
            secure: process.env['NODE_ENV'] === 'production',
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
