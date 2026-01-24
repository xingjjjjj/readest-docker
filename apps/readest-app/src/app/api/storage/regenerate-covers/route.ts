import { NextRequest, NextResponse } from 'next/server';

/**
 * POST /api/storage/regenerate-covers
 * 手动触发浏览器端封面生成
 */
export async function POST(req: NextRequest) {
    try {
        return NextResponse.json({
            success: false,
            error: 'This endpoint must be called from the browser (client-side)',
            message: 'Please use the browser console to call appService.regenerateMissingCovers(books)',
        });
    } catch (error) {
        console.error('[RegenerateCoversAPI] Error:', error);
        return NextResponse.json(
            {
                success: false,
                error: error instanceof Error ? error.message : 'Unknown error',
            },
            { status: 500 },
        );
    }
}
