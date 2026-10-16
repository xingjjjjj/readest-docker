import { NextRequest, NextResponse } from 'next/server';
import fs from 'node:fs/promises';
import path from 'node:path';
import { STORAGE_ROOT, isLocalStorageEnabled } from '../_lib/localFs';

/**
 * PUT /api/storage/library-book
 * 2026-10-12 P2：单书记录合并端点——阅读进度保存只上行变化的 book 记录，
 * 服务端合并进 library.json，替代每次全量上传整个库文件。
 *
 * 兼容性设计：
 * - 输出格式与全量 PUT 完全一致（JSON.stringify(books, null, 2)）
 * - 原子写（tmp + rename），任何时刻磁盘上都是完整有效的 library.json
 * - 客户端失败时自动回退旧的全量 PUT，两条路径长期共存
 *
 * 2026-10-16 并发修复（多选打开实测 500）：
 * - 两个 merge 并发时共享固定 tmp 名导致 ENOENT，且读-改-写互相覆盖。
 * - 双保险：进程内串行链（与客户端写队列同模式）+ 每请求随机 tmp 名。
 */
const METADATA_DIR = '.readest';
const LIBRARY_FILE = path.join(STORAGE_ROOT, METADATA_DIR, 'library.json');

// 串行链：所有 merge 排队执行；任务失败不阻塞后续
let mergeChain: Promise<unknown> = Promise.resolve();

async function doMerge(book: Record<string, unknown>): Promise<{ updated: boolean; count: number }> {
    await fs.mkdir(path.dirname(LIBRARY_FILE), { recursive: true });
    let library: Array<Record<string, unknown>> = [];
    try {
        library = JSON.parse(await fs.readFile(LIBRARY_FILE, 'utf-8')) || [];
        if (!Array.isArray(library)) library = [];
    } catch {
        // 库文件损坏时以空库起笔，避免整库丢失
        library = [];
    }

    const index = library.findIndex((b) => b && typeof b === 'object' && b['hash'] === book['hash']);
    if (index >= 0) {
        library[index] = book;
    } else {
        library.push(book);
    }

    const tmp = `${LIBRARY_FILE}.${process.pid}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}.tmp`;
    await fs.writeFile(tmp, JSON.stringify(library, null, 2), 'utf-8');
    await fs.rename(tmp, LIBRARY_FILE);
    return { updated: index >= 0, count: library.length };
}

export async function PUT(req: NextRequest) {
    if (!isLocalStorageEnabled()) {
        return NextResponse.json({ error: 'Local storage disabled' }, { status: 501 });
    }

    try {
        const body = await req.json();
        const book = body?.book;
        if (!book || typeof book.hash !== 'string' || !book.hash) {
            return NextResponse.json({ error: 'book with hash required' }, { status: 400 });
        }

        // 串行化读-改-写：无论前任务成败都继续
        const task = mergeChain.then(
            () => doMerge(book),
            () => doMerge(book)
        );
        mergeChain = task.catch(() => {});
        const result = await task;

        return NextResponse.json({ ok: true, ...result });
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : 'Failed to merge library book';
        console.error('[LibraryBook] Error:', message);
        return NextResponse.json({ error: message }, { status: 500 });
    }
}
