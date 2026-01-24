import { jwtVerify, SignJWT } from 'jose';

// 单用户认证配置
// 为确保中间件与API一致，开发环境使用固定默认密钥
const SECRET_KEY = process.env['AUTH_SECRET'] || 'dev-secret';
const USER_PASSWORD = process.env['AUTH_PASSWORD'] || 'changeme-' + Math.random().toString(36).substring(2, 15);
const USERNAME = 'xingjjjjj';

// 在服务器端启动时打印认证信息
if (typeof window === 'undefined' && process.env['NODE_ENV'] !== 'production') {
    console.log('\n========== READEST AUTHENTICATION (Development) ==========');
    console.log(`Username: ${USERNAME}`);
    console.log(`Password: ${USER_PASSWORD}`);
    console.log(`Secret Key: ${SECRET_KEY}`);
    console.log('==========================================================\n');
}

const key = new TextEncoder().encode(SECRET_KEY);

export interface AuthPayload {
    username: string;
    iat?: number;
    exp?: number;
}

/**
 * 创建 JWT 令牌
 */
export async function createJWT(username: string): Promise<string> {
    const token = await new SignJWT({ username })
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('30d')
        .sign(key);

    return token;
}

/**
 * 验证 JWT 令牌
 */
export async function verifyJWT(token: string): Promise<AuthPayload | null> {
    try {
        const verified = await jwtVerify(token, key);
        return verified.payload as unknown as AuthPayload;
    } catch {
        return null;
    }
}

/**
 * 验证用户名和密码
 */
export function validateCredentials(username: string, password: string): boolean {
    return username === USERNAME && password === USER_PASSWORD;
}

/**
 * 从 Authorization header 中提取令牌
 */
export function extractToken(authHeader: string | null): string | null {
    if (!authHeader) return null;

    const parts = authHeader.split(' ');
    if (parts.length !== 2 || parts[0] !== 'Bearer') {
        return null;
    }

    return parts[1] ?? null;
}

/**
 * 生成凭证字符串（用于调试）
 */
export function getCredentials(): { username: string; password: string; secret: string } {
    return {
        username: USERNAME,
        password: USER_PASSWORD,
        secret: SECRET_KEY,
    };
}
