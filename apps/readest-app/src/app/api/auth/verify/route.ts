import { NextRequest, NextResponse } from 'next/server';
import { extractToken, verifyJWT } from '@/utils/jwt';

export async function GET(request: NextRequest) {
    try {
        const token = extractToken(request.headers.get('authorization'));

        if (!token) {
            return NextResponse.json(
                { error: 'No token provided' },
                { status: 401 }
            );
        }

        const payload = await verifyJWT(token);

        if (!payload) {
            return NextResponse.json(
                { error: 'Invalid token' },
                { status: 401 }
            );
        }

        return NextResponse.json(
            {
                valid: true,
                user: {
                    username: payload.username,
                    name: 'User',
                },
            },
            { status: 200 }
        );
    } catch (error) {
        console.error('Verify error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
