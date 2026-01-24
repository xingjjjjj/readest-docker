module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/node:fs/promises [external] (node:fs/promises, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:fs/promises", () => require("node:fs/promises"));

module.exports = mod;
}),
"[externals]/node:path [external] (node:path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:path", () => require("node:path"));

module.exports = mod;
}),
"[project]/apps/readest-app/src/app/api/storage/_lib/localFs.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "STORAGE_ROOT",
    ()=>STORAGE_ROOT,
    "TEMP_ROOT",
    ()=>TEMP_ROOT,
    "deleteIfExists",
    ()=>deleteIfExists,
    "ensureParentDir",
    ()=>ensureParentDir,
    "ensureRoots",
    ()=>ensureRoots,
    "isLocalStorageEnabled",
    ()=>isLocalStorageEnabled,
    "readFileBuffer",
    ()=>readFileBuffer,
    "resolveLocalPath",
    ()=>resolveLocalPath,
    "walkFiles",
    ()=>walkFiles,
    "writeFileBuffer",
    ()=>writeFileBuffer
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:fs/promises [external] (node:fs/promises, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
;
;
const isLocalStorageEnabled = ()=>(process.env['STORAGE_MODE'] || ("TURBOPACK compile-time value", "local") || 'remote') === 'local';
const STORAGE_ROOT = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].resolve(process.env['LOCAL_STORAGE_ROOT'] || __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(process.cwd(), 'data', 'storage'));
const TEMP_ROOT = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].resolve(process.env['LOCAL_STORAGE_TEMP_ROOT'] || __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(STORAGE_ROOT, 'temp'));
const ensureRoots = async ()=>{
    await __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["default"].mkdir(STORAGE_ROOT, {
        recursive: true
    });
    await __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["default"].mkdir(TEMP_ROOT, {
        recursive: true
    });
};
// Keep user-provided relative paths intact; only trim leading slashes.
const stripUserPrefix = (fileKey)=>fileKey.replace(/^\/+/, '');
const resolveLocalPath = (fileKey, useTemp = false)=>{
    const base = useTemp ? TEMP_ROOT : STORAGE_ROOT;
    // Allow absolute paths inside the storage root without re-prefixing.
    if (__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].isAbsolute(fileKey)) {
        const fullPath = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].resolve(fileKey);
        if (!fullPath.startsWith(base)) {
            throw new Error('Invalid file path');
        }
        const relPath = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].posix.normalize(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].relative(base, fullPath));
        return {
            fullPath,
            relPath,
            basePath: base
        };
    }
    const cleanKey = stripUserPrefix(fileKey);
    // In local storage mode, route certain files to .readest directory
    if (isLocalStorageEnabled()) {
        // Settings files go to .readest/ directory
        if (cleanKey === 'settings.json' || cleanKey === 'settings.json.bak') {
            const settingsRelPath = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].posix.normalize(`.readest/${cleanKey}`);
            const settingsFullPath = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(base, settingsRelPath);
            if (!settingsFullPath.startsWith(base)) {
                throw new Error('Invalid file path');
            }
            console.log('[LocalFS] Settings file routed:', cleanKey, '->', settingsRelPath);
            return {
                fullPath: settingsFullPath,
                relPath: settingsRelPath,
                basePath: base
            };
        }
        // Library files also go to .readest/ directory
        if (cleanKey === 'library.json' || cleanKey === 'library.json.bak' || cleanKey === 'library_backup.json') {
            const libraryRelPath = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].posix.normalize(`.readest/${cleanKey}`);
            const libraryFullPath = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(base, libraryRelPath);
            if (!libraryFullPath.startsWith(base)) {
                throw new Error('Invalid file path');
            }
            console.log('[LocalFS] Library file routed:', cleanKey, '->', libraryRelPath);
            return {
                fullPath: libraryFullPath,
                relPath: libraryRelPath,
                basePath: base
            };
        }
        // All other files use flat structure
        console.log('[LocalFS] ✓ Using flat storage, cleanKey:', cleanKey);
    }
    const relPath = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].posix.normalize(cleanKey);
    if (relPath.startsWith('..')) {
        throw new Error('Invalid file path');
    }
    const fullPath = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(base, relPath);
    if (!fullPath.startsWith(base)) {
        throw new Error('Invalid file path');
    }
    console.log('[LocalFS] ✓ Final paths - Full:', fullPath, ', Relative:', relPath);
    return {
        fullPath,
        relPath,
        basePath: base
    };
};
const ensureParentDir = async (fullPath)=>{
    const dir = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].dirname(fullPath);
    await __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["default"].mkdir(dir, {
        recursive: true
    });
};
const readFileBuffer = async (fullPath)=>{
    try {
        const stats = await __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["default"].stat(fullPath);
        const fileSizeMB = stats.size / (1024 * 1024);
        console.log(`[readFileBuffer] Reading file: ${fullPath}, size: ${fileSizeMB.toFixed(2)} MB`);
        // 警告：文件超过 100MB
        if (stats.size > 100 * 1024 * 1024) {
            console.warn(`[readFileBuffer] ⚠️ Large file detected: ${fileSizeMB.toFixed(2)} MB`);
        }
        // 限制：文件超过 500MB 时抛出错误
        if (stats.size > 500 * 1024 * 1024) {
            throw new Error(`File too large: ${fileSizeMB.toFixed(2)} MB. Maximum size is 500 MB.`);
        }
        const buffer = Buffer.from(await __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["default"].readFile(fullPath));
        console.log(`[readFileBuffer] ✓ Successfully read ${fileSizeMB.toFixed(2)} MB`);
        return buffer;
    } catch (error) {
        console.error(`[readFileBuffer] ✗ Error reading file ${fullPath}:`, error.message);
        if (error.code === 'ENOMEM' || error.message?.includes('memory')) {
            throw new Error(`Out of memory while reading file. File may be too large.`);
        }
        throw error;
    }
};
const writeFileBuffer = async (fullPath, buffer)=>{
    await ensureParentDir(fullPath);
    await __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["default"].writeFile(fullPath, buffer);
};
const deleteIfExists = async (fullPath)=>{
    try {
        await __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["default"].unlink(fullPath);
        return true;
    } catch (error) {
        if (error?.code === 'ENOENT') return false;
        throw error;
    }
};
const walkFiles = async (root, prefix = '')=>{
    let entries = [];
    try {
        entries = await __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["default"].readdir(root, {
            withFileTypes: true
        });
    } catch (error) {
        if (error?.code === 'ENOENT') return [];
        throw error;
    }
    const files = [];
    for (const entry of entries){
        const relKey = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].posix.join(prefix, entry.name);
        const fullPath = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(root, entry.name);
        if (entry.isDirectory()) {
            files.push(...await walkFiles(fullPath, relKey));
        } else if (entry.isFile()) {
            const stat = await __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["default"].stat(fullPath);
            files.push({
                fileKey: relKey,
                size: stat.size,
                mtime: stat.mtimeMs
            });
        }
    }
    return files;
};
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/apps/readest-app/src/app/api/storage/scan/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.28.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:fs/promises [external] (node:fs/promises, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$api$2f$storage$2f$_lib$2f$localFs$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/app/api/storage/_lib/localFs.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
;
;
;
;
;
const SUPPORTED_EXTS = [
    '.epub',
    '.mobi',
    '.azw',
    '.azw3',
    '.fb2',
    '.cbz',
    '.pdf',
    '.txt'
];
const METADATA_DIR = '.readest';
/**
 * Calculate a lightweight hash for deduplication without reading the full file.
 * Uses the first 1MB plus the file size for stability.
 */ async function calculatePartialHash(filePath, fileSize) {
    const SAMPLE_SIZE = 1024 * 1024; // 1MB
    try {
        const hash = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["createHash"])('md5');
        const handle = await __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["default"].open(filePath, 'r');
        const buffer = Buffer.alloc(Math.min(SAMPLE_SIZE, fileSize));
        const { bytesRead } = await handle.read(buffer, 0, buffer.length);
        await handle.close();
        hash.update(buffer.slice(0, bytesRead));
        hash.update(fileSize.toString());
        return hash.digest('hex').slice(0, 16);
    } catch (error) {
        console.error('[Storage Scan] Hash calculation failed for', filePath, error);
        return (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["createHash"])('md5').update(`${filePath}-${fileSize}`).digest('hex').slice(0, 16);
    }
}
async function scanDirectory(dir, baseDir) {
    const books = [];
    try {
        const entries = await __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["default"].readdir(dir, {
            withFileTypes: true
        });
        for (const entry of entries){
            const fullPath = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(dir, entry.name);
            // Skip metadata directory
            if (entry.name === METADATA_DIR) continue;
            if (entry.isDirectory()) {
                const subBooks = await scanDirectory(fullPath, baseDir);
                books.push(...subBooks);
            } else if (entry.isFile()) {
                const ext = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].extname(entry.name).toLowerCase();
                if (SUPPORTED_EXTS.includes(ext)) {
                    const stat = await __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["default"].stat(fullPath);
                    const relativePath = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].relative(baseDir, fullPath);
                    const directory = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].dirname(relativePath);
                    const hash = await calculatePartialHash(fullPath, stat.size);
                    books.push({
                        filePath: fullPath,
                        relativePath,
                        fileName: entry.name,
                        directory: directory === '.' ? '' : directory,
                        size: stat.size,
                        mtime: stat.mtimeMs,
                        ext: ext.slice(1),
                        hash
                    });
                }
            }
        }
    } catch (error) {
        console.error('Error scanning directory:', dir, error);
    }
    return books;
}
async function POST(_req) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$api$2f$storage$2f$_lib$2f$localFs$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isLocalStorageEnabled"])()) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Local storage disabled'
        }, {
            status: 501
        });
    }
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$api$2f$storage$2f$_lib$2f$localFs$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ensureRoots"])();
    try {
        console.log('[Storage Scan] Starting scan of:', __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$api$2f$storage$2f$_lib$2f$localFs$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["STORAGE_ROOT"]);
        const books = await scanDirectory(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$api$2f$storage$2f$_lib$2f$localFs$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["STORAGE_ROOT"], __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$api$2f$storage$2f$_lib$2f$localFs$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["STORAGE_ROOT"]);
        console.log('[Storage Scan] Found', books.length, 'books');
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            count: books.length,
            books
        });
    } catch (error) {
        console.error('[Storage Scan] Error:', error?.message);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: error?.message || 'Scan failed'
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__80b8657f._.js.map