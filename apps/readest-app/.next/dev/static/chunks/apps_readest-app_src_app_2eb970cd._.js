(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/readest-app/src/app/library/hooks/useDemoBooks.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDemoBooks",
    ()=>useDemoBooks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.28.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/context/EnvContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/misc.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/environment.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$data$2f$demo$2f$library$2e$en$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/data/demo/library.en.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$data$2f$demo$2f$library$2e$zh$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/data/demo/library.zh.json (json)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const libraries = {
    en: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$data$2f$demo$2f$library$2e$en$2e$json__$28$json$29$__["default"],
    zh: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$data$2f$demo$2f$library$2e$zh$2e$json__$28$json$29$__["default"]
};
const useDemoBooks = ()=>{
    _s();
    const { envConfig } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEnv"])();
    const [books, setBooks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const isLoading = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useDemoBooks.useEffect": ()=>{
            if (isLoading.current) return;
            isLoading.current = true;
            const userLang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUserLang"])();
            const fetchDemoBooks = {
                "useDemoBooks.useEffect.fetchDemoBooks": async ()=>{
                    try {
                        const appService = await envConfig.getAppService();
                        const demoBooks = libraries[userLang] || libraries.en;
                        const books = await Promise.all(demoBooks.library.map({
                            "useDemoBooks.useEffect.fetchDemoBooks": (url)=>appService.importBook(url, [], false, true)
                        }["useDemoBooks.useEffect.fetchDemoBooks"]));
                        setBooks(books.filter({
                            "useDemoBooks.useEffect.fetchDemoBooks": (book)=>book !== null
                        }["useDemoBooks.useEffect.fetchDemoBooks"]));
                    } catch (error) {
                        console.error('Failed to import demo books:', error);
                    }
                }
            }["useDemoBooks.useEffect.fetchDemoBooks"];
            const demoBooksFetchedFlag = localStorage.getItem('demoBooksFetched');
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWebAppPlatform"])() && !demoBooksFetchedFlag) {
                fetchDemoBooks();
                localStorage.setItem('demoBooksFetched', 'true');
            }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["useDemoBooks.useEffect"], []);
    return books;
};
_s(useDemoBooks, "pLztTZwC7KcY1pdBGufg88ocjLo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEnv"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/readest-app/src/app/library/hooks/useBooksSync.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useBooksSync",
    ()=>useBooksSync
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.28.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useSync$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/hooks/useSync.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/context/EnvContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/context/AuthContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$libraryStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/libraryStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$throttle$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/throttle.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
const useBooksSync = ()=>{
    _s();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const { appService } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEnv"])();
    const { library, isSyncing, setLibrary, setIsSyncing, setSyncProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$libraryStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLibraryStore"])();
    const { useSyncInited, syncedBooks, syncBooks, lastSyncedAtBooks } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useSync$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSync"])();
    const isPullingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const getNewBooks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useBooksSync.useCallback[getNewBooks]": ()=>{
            if (!user) return {};
            const library = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$libraryStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLibraryStore"].getState().library;
            const newBooks = library.filter({
                "useBooksSync.useCallback[getNewBooks].newBooks": (book)=>!book.syncedAt || lastSyncedAtBooks < book.updatedAt || lastSyncedAtBooks < (book.deletedAt ?? 0)
            }["useBooksSync.useCallback[getNewBooks].newBooks"]);
            return {
                books: newBooks,
                lastSyncedAt: lastSyncedAtBooks
            };
        }
    }["useBooksSync.useCallback[getNewBooks]"], [
        user,
        lastSyncedAtBooks
    ]);
    const pullLibrary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useBooksSync.useCallback[pullLibrary]": async ()=>{
            if (!user) return;
            if (isPullingRef.current) {
                console.log('Pull already in progress, skipping...');
                return;
            }
            try {
                isPullingRef.current = true;
                await syncBooks([], 'pull');
            } finally{
                isPullingRef.current = false;
            }
        }
    }["useBooksSync.useCallback[pullLibrary]"], [
        user,
        syncBooks
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleAutoSync = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$throttle$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["throttle"])({
        "useBooksSync.useCallback[handleAutoSync]": ()=>{
            const newBooks = getNewBooks();
            if (newBooks.lastSyncedAt) {
                syncBooks(newBooks.books, 'both');
            }
        }
    }["useBooksSync.useCallback[handleAutoSync]"], __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SYNC_BOOKS_INTERVAL_SEC"] * 1000, {
        emitLast: true
    }), [
        syncBooks
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useBooksSync.useEffect": ()=>{
            if (!user) return;
            if (isPullingRef.current) {
                return;
            }
            handleAutoSync();
        }
    }["useBooksSync.useEffect"], [
        user,
        library,
        handleAutoSync
    ]);
    const pushLibrary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useBooksSync.useCallback[pushLibrary]": async ()=>{
            if (!user) return;
            const newBooks = getNewBooks();
            if (newBooks.lastSyncedAt) {
                await syncBooks(newBooks?.books, 'push');
            }
        }
    }["useBooksSync.useCallback[pushLibrary]"], [
        user,
        syncBooks,
        getNewBooks
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useBooksSync.useEffect": ()=>{
            if (!user || !useSyncInited) return;
            pullLibrary();
        }
    }["useBooksSync.useEffect"], [
        user,
        useSyncInited,
        pullLibrary
    ]);
    const updateLibrary = async ()=>{
        if (isSyncing) return;
        if (!syncedBooks?.length) return;
        // Process old books first so that when we update the library the order is preserved
        syncedBooks.sort((a, b)=>a.updatedAt - b.updatedAt);
        const bookHashesInSynced = new Set(syncedBooks.map((book)=>book.hash));
        const oldBooks = library.filter((book)=>bookHashesInSynced.has(book.hash));
        const oldBooksNeedsDownload = oldBooks.filter((book)=>{
            return !book.deletedAt && book.uploadedAt && !book.coverDownloadedAt;
        });
        const processOldBook = async (oldBook)=>{
            const matchingBook = syncedBooks.find((newBook)=>newBook.hash === oldBook.hash);
            if (matchingBook) {
                if (!matchingBook.deletedAt && matchingBook.uploadedAt && !oldBook.coverDownloadedAt) {
                    oldBook.coverImageUrl = await appService?.generateCoverImageUrl(oldBook);
                }
                const mergedBook = matchingBook.updatedAt >= oldBook.updatedAt ? {
                    ...oldBook,
                    ...matchingBook,
                    syncedAt: Date.now()
                } : {
                    ...matchingBook,
                    ...oldBook,
                    syncedAt: Date.now()
                };
                return mergedBook;
            }
            return oldBook;
        };
        const oldBooksBatchSize = 100;
        for(let i = 0; i < oldBooksNeedsDownload.length; i += oldBooksBatchSize){
            const batch = oldBooksNeedsDownload.slice(i, i + oldBooksBatchSize);
            // Cloud download covers functionality removed - covers are stored locally on server
            console.log('Skipping cloud cover download for', batch.length, 'books');
        }
        const updatedLibrary = await Promise.all(library.map(processOldBook));
        setLibrary(updatedLibrary);
        appService?.saveLibraryBooks(updatedLibrary);
        const bookHashesInLibrary = new Set(updatedLibrary.map((book)=>book.hash));
        const newBooks = syncedBooks.filter((newBook)=>!bookHashesInLibrary.has(newBook.hash) && newBook.uploadedAt && !newBook.deletedAt);
        const processNewBook = async (newBook)=>{
            newBook.coverImageUrl = await appService?.generateCoverImageUrl(newBook);
            newBook.syncedAt = Date.now();
            updatedLibrary.push(newBook);
        };
        if (newBooks.length > 0) {
            setIsSyncing(true);
        }
        try {
            const batchSize = 10;
            for(let i = 0; i < newBooks.length; i += batchSize){
                const batch = newBooks.slice(i, i + batchSize);
                // Cloud download covers functionality removed - covers are stored locally on server
                console.log('Skipping cloud cover download for', batch.length, 'books');
                await Promise.all(batch.map(processNewBook));
                const progress = Math.min((i + batchSize) / newBooks.length, 1);
                setSyncProgress(progress);
                setLibrary([
                    ...updatedLibrary
                ]);
                appService?.saveLibraryBooks(updatedLibrary);
            }
        } catch (err) {
            console.error('Error updating new books:', err);
        } finally{
            if (newBooks.length > 0) {
                setIsSyncing(false);
            }
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useBooksSync.useEffect": ()=>{
            updateLibrary();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["useBooksSync.useEffect"], [
        syncedBooks
    ]);
    return {
        pullLibrary,
        pushLibrary
    };
};
_s(useBooksSync, "8SDyEnDpmCkkQXRqePkUmLxtLpk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEnv"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$libraryStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLibraryStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useSync$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSync"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/readest-app/src/app/opds/utils/opdsReq.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createBasicAuth",
    ()=>createBasicAuth,
    "createDigestAuth",
    ()=>createDigestAuth,
    "fetchWithAuth",
    ()=>fetchWithAuth,
    "getProxiedURL",
    ()=>getProxiedURL,
    "needsProxy",
    ()=>needsProxy,
    "probeAuth",
    ()=>probeAuth,
    "probeFilename",
    ()=>probeFilename
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$js$2d$md5$40$0$2e$8$2e$3$2f$node_modules$2f$js$2d$md5$2f$src$2f$md5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/js-md5@0.8.3/node_modules/js-md5/src/md5.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/environment.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$plugin$2d$http$40$2$2e$5$2e$6$2f$node_modules$2f40$tauri$2d$apps$2f$plugin$2d$http$2f$dist$2d$js$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tauri-apps+plugin-http@2.5.6/node_modules/@tauri-apps/plugin-http/dist-js/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/constants.ts [app-client] (ecmascript)");
;
;
;
;
const OPDS_PROXY_URL = `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAPIBaseUrl"])()}/opds/proxy`;
const NODE_OPDS_PROXY_URL = `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeAPIBaseUrl"])()}/opds/proxy`;
/**
 * Extract username and password from URL credentials
 */ const extractCredentialsFromURL = (url)=>{
    try {
        const urlObj = new URL(url);
        const username = decodeURIComponent(urlObj.username) || undefined;
        const password = decodeURIComponent(urlObj.password) || undefined;
        if (username || password) {
            urlObj.username = '';
            urlObj.password = '';
            return {
                url: urlObj.toString(),
                username,
                password
            };
        }
    } catch (e) {
        console.warn('Failed to parse URL:', e);
    }
    return {
        url
    };
};
const needsProxy = (url)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWebAppPlatform"])() && url.startsWith('http');
};
const PROXY_OVERRIDES = {
    standardebooks: NODE_OPDS_PROXY_URL
};
const getProxyBaseUrl = (url)=>{
    for (const [domain, proxyUrl] of Object.entries(PROXY_OVERRIDES)){
        if (url.includes(domain)) {
            return proxyUrl;
        }
    }
    return OPDS_PROXY_URL;
};
const getProxiedURL = (url, auth = '', stream = false)=>{
    if (url.startsWith('http')) {
        const { url: cleanUrl } = extractCredentialsFromURL(url);
        const params = new URLSearchParams();
        params.append('url', cleanUrl);
        params.append('stream', `${stream}`);
        if (auth) {
            params.append('auth', auth);
        }
        const baseUrl = getProxyBaseUrl(url);
        const proxyUrl = `${baseUrl}?${params.toString()}`;
        return proxyUrl;
    }
    return url;
};
/**
 * Parse Digest authentication challenge from WWW-Authenticate header
 */ const parseDigestChallenge = (challenge)=>{
    const params = {};
    const regex = /(\w+)=["']?([^"',]+)["']?/g;
    let match;
    while((match = regex.exec(challenge)) !== null){
        params[match[1]] = match[2];
    }
    return params;
};
/**
 * Generate Digest authentication response hash
 */ const generateDigestResponse = (username, password, params, method, uri, nc, cnonce)=>{
    const realm = params['realm'];
    const nonce = params['nonce'];
    const qop = params['qop'];
    const algorithm = params['algorithm'];
    let ha1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$js$2d$md5$40$0$2e$8$2e$3$2f$node_modules$2f$js$2d$md5$2f$src$2f$md5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["md5"])(`${username}:${realm}:${password}`);
    if (algorithm && algorithm.toLowerCase() === 'md5-sess') {
        ha1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$js$2d$md5$40$0$2e$8$2e$3$2f$node_modules$2f$js$2d$md5$2f$src$2f$md5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["md5"])(`${ha1}:${nonce}:${cnonce}`);
    }
    const ha2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$js$2d$md5$40$0$2e$8$2e$3$2f$node_modules$2f$js$2d$md5$2f$src$2f$md5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["md5"])(`${method}:${uri}`);
    let response;
    if (qop) {
        response = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$js$2d$md5$40$0$2e$8$2e$3$2f$node_modules$2f$js$2d$md5$2f$src$2f$md5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["md5"])(`${ha1}:${nonce}:${nc}:${cnonce}:${qop}:${ha2}`);
    } else {
        response = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$js$2d$md5$40$0$2e$8$2e$3$2f$node_modules$2f$js$2d$md5$2f$src$2f$md5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["md5"])(`${ha1}:${nonce}:${ha2}`);
    }
    return response;
};
const createDigestAuth = async (username, password, wwwAuthenticate, method, uri)=>{
    const params = parseDigestChallenge(wwwAuthenticate);
    const cnonce = Math.random().toString(36).slice(2);
    const nc = '00000001';
    const response = await generateDigestResponse(username, password, params, method, uri, nc, cnonce);
    const parts = [
        `username="${username}"`,
        `realm="${params['realm']}"`,
        `nonce="${params['nonce']}"`,
        `uri="${uri}"`,
        `response="${response}"`
    ];
    if (params['algorithm']) {
        parts.push(`algorithm="${params['algorithm']}"`);
    }
    if (params['opaque']) {
        parts.push(`opaque="${params['opaque']}"`);
    }
    if (params['qop']) {
        parts.push(`qop="auth"`);
        parts.push(`nc=${nc}`);
        parts.push(`cnonce="${cnonce}"`);
    }
    return `Digest ${parts.join(', ')}`;
};
const createBasicAuth = (username, password)=>{
    const credentials = btoa(`${username}:${password}`);
    return `Basic ${credentials}`;
};
const probeAuth = async (url, username, password, useProxy = false)=>{
    const { url: cleanUrl, username: urlUsername, password: urlPassword } = extractCredentialsFromURL(url);
    const finalUsername = username || urlUsername;
    const finalPassword = password || urlPassword;
    // No credentials provided, can't generate auth header
    if (!finalUsername || !finalPassword) {
        return null;
    }
    const fetchURL = useProxy ? getProxiedURL(cleanUrl) : cleanUrl;
    const headers = {
        'User-Agent': __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["READEST_OPDS_USER_AGENT"],
        Accept: 'application/atom+xml, application/xml, text/xml, */*'
    };
    // Probe with HEAD request
    const fetch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTauriAppPlatform"])() ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$plugin$2d$http$40$2$2e$5$2e$6$2f$node_modules$2f40$tauri$2d$apps$2f$plugin$2d$http$2f$dist$2d$js$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetch"] : window.fetch;
    const res = await fetch(fetchURL, {
        method: 'HEAD',
        headers,
        danger: {
            acceptInvalidCerts: true,
            acceptInvalidHostnames: true
        }
    });
    // Check if authentication is required
    if (res.status === 401 || res.status === 403) {
        const wwwAuthenticate = res.headers.get('WWW-Authenticate');
        if (wwwAuthenticate) {
            if (wwwAuthenticate.toLowerCase().startsWith('digest')) {
                const urlObj = new URL(cleanUrl);
                return await createDigestAuth(finalUsername, finalPassword, wwwAuthenticate, 'GET', urlObj.pathname + urlObj.search);
            } else if (wwwAuthenticate.toLowerCase().startsWith('basic')) {
                return createBasicAuth(finalUsername, finalPassword);
            }
        } else {
            // Fallback to Basic auth if no WWW-Authenticate header
            // some older Calibre-Web versions behave this way, see issue #2656
            return createBasicAuth(finalUsername, finalPassword);
        }
    }
    // Komga returns 200 even if requires auth, so we return Basic auth header in this case
    return createBasicAuth(finalUsername, finalPassword);
};
const probeFilename = async (headers)=>{
    const contentDisposition = headers['content-disposition'];
    if (contentDisposition) {
        const extendedMatch = contentDisposition.match(/filename\*\s*=\s*(?:utf-8|UTF-8)'[^']*'([^;\s]+)/i);
        if (extendedMatch?.[1]) {
            return decodeURIComponent(extendedMatch[1]);
        }
        const plainMatch = contentDisposition.match(/filename\s*=\s*["']?([^"';\s]+)["']?/i);
        if (plainMatch?.[1]) {
            return decodeURIComponent(plainMatch[1]);
        }
    }
    return '';
};
const fetchWithAuth = async (url, username, password, useProxy = false, options = {})=>{
    const { url: cleanUrl, username: urlUsername, password: urlPassword } = extractCredentialsFromURL(url);
    const finalUsername = username || urlUsername;
    const finalPassword = password || urlPassword;
    const fetchURL = useProxy ? getProxiedURL(cleanUrl) : cleanUrl;
    const headers = {
        'User-Agent': __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["READEST_OPDS_USER_AGENT"],
        Accept: 'application/atom+xml, application/xml, text/xml, */*',
        ...options.headers
    };
    const fetch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTauriAppPlatform"])() ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$plugin$2d$http$40$2$2e$5$2e$6$2f$node_modules$2f40$tauri$2d$apps$2f$plugin$2d$http$2f$dist$2d$js$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetch"] : window.fetch;
    let res = await fetch(fetchURL, {
        ...options,
        method: options.method || 'GET',
        headers,
        danger: {
            acceptInvalidCerts: true,
            acceptInvalidHostnames: true
        }
    });
    // Handle authentication if needed
    if (!res.ok && (res.status === 401 || res.status === 403) && finalUsername && finalPassword) {
        const wwwAuthenticate = res.headers.get('WWW-Authenticate');
        if (wwwAuthenticate) {
            let authHeader = null;
            if (wwwAuthenticate.toLowerCase().startsWith('digest')) {
                const urlObj = new URL(cleanUrl);
                authHeader = await createDigestAuth(finalUsername, finalPassword, wwwAuthenticate, options.method || 'GET', urlObj.pathname + urlObj.search);
            } else if (wwwAuthenticate.toLowerCase().startsWith('basic')) {
                authHeader = createBasicAuth(finalUsername, finalPassword);
            }
            if (authHeader) {
                const finalUrl = useProxy ? `${fetchURL}&auth=${encodeURIComponent(authHeader)}` : fetchURL;
                res = await fetch(finalUrl, {
                    ...options,
                    method: options.method || 'GET',
                    headers: useProxy ? headers : {
                        ...headers,
                        Authorization: authHeader
                    },
                    danger: {
                        acceptInvalidCerts: true,
                        acceptInvalidHostnames: true
                    }
                });
            }
        }
    }
    return res;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/readest-app/src/app/opds/utils/opdsUtils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MIME",
    ()=>MIME,
    "VALIDATION_ERROR",
    ()=>VALIDATION_ERROR,
    "getFileExtFromPath",
    ()=>getFileExtFromPath,
    "groupByArray",
    ()=>groupByArray,
    "isSearchLink",
    ()=>isSearchLink,
    "parseMediaType",
    ()=>parseMediaType,
    "resolveURL",
    ()=>resolveURL,
    "validateOPDSURL",
    ()=>validateOPDSURL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$foliate$2d$js$2f$opds$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/foliate-js/opds.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$libs$2f$document$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/libs/document.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$opds$2f$utils$2f$opdsReq$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/app/opds/utils/opdsReq.ts [app-client] (ecmascript)");
;
;
;
const groupByArray = (arr, f)=>{
    const map = new Map();
    if (arr) {
        for (const el of arr){
            const keys = f(el);
            for (const key of [
                keys
            ].flat()){
                const group = map.get(key);
                if (group) group.push(el);
                else map.set(key, [
                    el
                ]);
            }
        }
    }
    return map;
};
const MIME = {
    XML: 'application/xml',
    ATOM: 'application/atom+xml',
    XHTML: 'application/xhtml+xml',
    HTML: 'text/html',
    EPUB: 'application/epub+zip',
    PDF: 'application/pdf',
    OPENSEARCH: 'application/opensearchdescription+xml'
};
var VALIDATION_ERROR = /*#__PURE__*/ function(VALIDATION_ERROR) {
    VALIDATION_ERROR["INVALID_URL"] = "Invalid URL format";
    VALIDATION_ERROR["LOAD_FAILED"] = "Failed to load OPDS feed";
    VALIDATION_ERROR["NOT_OPDS"] = "Invalid OPDS feed URL";
    VALIDATION_ERROR["NO_OPDS_LINK"] = "Document has no link to OPDS feeds";
    VALIDATION_ERROR["NO_HREF"] = "OPDS link has no href attribute";
    VALIDATION_ERROR["INVALID_HTML"] = "Invalid HTML document";
    VALIDATION_ERROR["INVALID_CONTENT"] = "Content is neither valid XML nor JSON";
    return VALIDATION_ERROR;
}({});
const parseMediaType = (str)=>{
    if (!str) return null;
    const [mediaType, ...ps] = str.split(/ *; */);
    if (!mediaType) return null;
    return {
        mediaType: mediaType.toLowerCase(),
        parameters: Object.fromEntries(ps.map((p)=>{
            const [name, val] = p.split('=');
            if (!name) return null;
            return [
                name.toLowerCase(),
                val?.replace(/(^"|"$)/g, '')
            ];
        }).filter((entry)=>entry !== null))
    };
};
const isSearchLink = (link)=>{
    const rels = Array.isArray(link.rel) ? link.rel : [
        link.rel || ''
    ];
    return rels.includes('search') && (link.type === MIME.OPENSEARCH || link.type === MIME.ATOM);
};
const resolveURL = (url, relativeTo)=>{
    if (!url) return '';
    if (relativeTo.includes('/api/opds/proxy?url=')) {
        const params = new URLSearchParams(relativeTo.split('?')[1]);
        const proxiedURL = params.get('url') || '';
        return resolveURL(url, proxiedURL);
    }
    try {
        if (relativeTo.includes(':')) return new URL(url, relativeTo).toString();
        const root = 'https://invalid.invalid/';
        const obj = new URL(url, root + relativeTo);
        obj.search = '';
        return decodeURI(obj.href.replace(root, ''));
    } catch (e) {
        console.warn(e);
        return url;
    }
};
const validateOPDSURL = async (url, username, password, useProxy = false)=>{
    try {
        const controller = new AbortController();
        const timeout = setTimeout(()=>controller.abort(), 10000);
        const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$opds$2f$utils$2f$opdsReq$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchWithAuth"])(url, username, password, useProxy, {
            signal: controller.signal
        });
        clearTimeout(timeout);
        if (!res.ok) {
            if (res.status === 401) {
                return {
                    isValid: false,
                    error: 'Authentication required. Please check your username and password.'
                };
            }
            return {
                isValid: false,
                error: `Failed to load OPDS feed: ${res.status} ${res.statusText}`
            };
        }
        const responseURL = res.url;
        const text = await res.text();
        // Check if it's XML-based OPDS
        if (text.startsWith('<')) {
            const doc = new DOMParser().parseFromString(text, MIME.XML);
            const { documentElement: { localName } } = doc;
            if (localName === 'feed') {
                return {
                    isValid: true,
                    data: {
                        type: 'feed',
                        doc,
                        text,
                        responseURL
                    }
                };
            } else if (localName === 'entry') {
                return {
                    isValid: true,
                    data: {
                        type: 'entry',
                        doc,
                        text,
                        responseURL
                    }
                };
            } else if (localName === 'OpenSearchDescription') {
                return {
                    isValid: true,
                    data: {
                        type: 'opensearch',
                        doc,
                        text,
                        responseURL
                    }
                };
            } else {
                // Check for HTML with OPDS link
                const contentType = res.headers.get('Content-Type') ?? MIME.HTML;
                const type = parseMediaType(contentType)?.mediaType ?? MIME.HTML;
                const htmlDoc = new DOMParser().parseFromString(text, type);
                if (!htmlDoc.head) {
                    return {
                        isValid: false,
                        error: "Invalid OPDS feed URL"
                    };
                }
                const link = Array.from(htmlDoc.head.querySelectorAll('link')).find((link)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$foliate$2d$js$2f$opds$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isOPDSCatalog"])(link.getAttribute('type') ?? ''));
                if (!link) {
                    return {
                        isValid: false,
                        error: "Invalid OPDS feed URL"
                    };
                }
                const href = link.getAttribute('href');
                if (!href) {
                    return {
                        isValid: false,
                        error: 'OPDS link has no href attribute'
                    };
                }
                return {
                    isValid: true,
                    data: {
                        type: 'html',
                        doc: htmlDoc,
                        text,
                        responseURL
                    }
                };
            }
        } else {
            // Check if it's JSON-based OPDS
            try {
                const feed = JSON.parse(text);
                // Basic validation for OPDS JSON feed
                if (!feed.metadata && !feed.links && !feed.publications && !feed.navigation) {
                    return {
                        isValid: false,
                        error: "Invalid OPDS feed URL"
                    };
                }
                return {
                    isValid: true,
                    data: {
                        type: 'feed',
                        doc: new Document(),
                        text,
                        responseURL
                    }
                };
            } catch  {
                return {
                    isValid: false,
                    error: "Invalid OPDS feed URL"
                };
            }
        }
    } catch (e) {
        console.error('OPDS validation error:', e);
        return {
            isValid: false,
            error: e instanceof Error ? e.message : "Invalid OPDS feed URL"
        };
    }
};
const getFileExtFromPath = (pathname, delimiter = '/')=>{
    const parts = pathname.split(delimiter);
    for (const ext of Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$libs$2f$document$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EXTS"])){
        if (parts.includes(ext)) {
            return ext;
        }
    }
    return '';
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/readest-app/src/app/opds/components/CatelogManager.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CatalogManager",
    ()=>CatalogManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.28.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.28.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.28.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-icons@5.4.0_react@19.2.0/node_modules/react-icons/io5/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.28.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/context/EnvContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/hooks/useTranslation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/settingsStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/environment.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$helpers$2f$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/helpers/settings.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$network$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/network.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$opds$2f$utils$2f$opdsUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/app/opds/utils/opdsUtils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$ModalPortal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/components/ModalPortal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
const POPULAR_CATALOGS = [
    {
        id: 'gutenberg',
        name: 'Project Gutenberg',
        url: 'https://m.gutenberg.org/ebooks.opds/',
        description: "World's largest collection of free ebooks",
        icon: '🏛️'
    },
    {
        id: 'standardebooks',
        name: 'Standard Ebooks',
        url: 'https://standardebooks.org/feeds/opds',
        description: 'Free and liberated ebooks, carefully produced for the true book lover',
        icon: '📚'
    },
    {
        id: 'manybooks',
        name: 'ManyBooks',
        url: 'https://manybooks.net/opds/index.php',
        description: 'Over 50,000 free ebooks',
        icon: '📖'
    },
    {
        id: 'unglue.it',
        name: 'Unglue.it',
        url: 'https://unglue.it/api/opds/',
        description: 'Free ebooks from authors who have "unglued" their books',
        icon: '🔓'
    }
];
async function validateOPDSCatalog(url, username, password) {
    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$opds$2f$utils$2f$opdsUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateOPDSURL"])(url, username, password, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWebAppPlatform"])());
    return {
        valid: result.isValid,
        error: result.error
    };
}
function CatalogManager() {
    _s();
    const _ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { envConfig } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEnv"])();
    const { settings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSettingsStore"])();
    const [catalogs, setCatalogs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "CatalogManager.useState": ()=>settings.opdsCatalogs || []
    }["CatalogManager.useState"]);
    const [showAddDialog, setShowAddDialog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [newCatalog, setNewCatalog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        url: '',
        description: '',
        username: '',
        password: ''
    });
    const [showPassword, setShowPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [urlError, setUrlError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isValidating, setIsValidating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const saveCatalogs = (updatedCatalogs)=>{
        setCatalogs(updatedCatalogs);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$helpers$2f$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveSysSettings"])(envConfig, 'opdsCatalogs', updatedCatalogs);
    };
    const handleAddCatalog = async ()=>{
        if (!newCatalog.name || !newCatalog.url) return;
        const urlLower = newCatalog.url.trim().toLowerCase();
        if (!urlLower.startsWith('http://') && !urlLower.startsWith('https://')) {
            setUrlError(_('URL must start with http:// or https://'));
            return;
        }
        if (("TURBOPACK compile-time value", "development") === 'production' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWebAppPlatform"])() && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$network$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLanAddress"])(newCatalog.url)) //TURBOPACK unreachable
        ;
        setIsValidating(true);
        setUrlError('');
        const validation = await validateOPDSCatalog(newCatalog.url, newCatalog.username || undefined, newCatalog.password || undefined);
        if (!validation.valid) {
            setUrlError(validation.error || _('Invalid OPDS catalog. Please check the URL.'));
            setIsValidating(false);
            return;
        }
        const catalog = {
            id: Date.now().toString(),
            name: newCatalog.name,
            url: newCatalog.url,
            description: newCatalog.description,
            username: newCatalog.username || undefined,
            password: newCatalog.password || undefined
        };
        saveCatalogs([
            catalog,
            ...catalogs
        ]);
        setNewCatalog({
            name: '',
            url: '',
            description: '',
            username: '',
            password: ''
        });
        setUrlError('');
        setIsValidating(false);
        setShowAddDialog(false);
    };
    const handleAddPopularCatalog = (popularCatalog)=>{
        if (catalogs.some((c)=>c.url === popularCatalog.url)) {
            return;
        }
        saveCatalogs([
            ...catalogs,
            {
                ...popularCatalog
            }
        ]);
    };
    const handleRemoveCatalog = (id)=>{
        saveCatalogs(catalogs.filter((c)=>c.id !== id));
    };
    const handleOpenCatalog = (catalog)=>{
        const params = new URLSearchParams({
            url: catalog.url
        });
        if (catalog.username) params.set('id', catalog.id);
        router.push(`/opds?${params.toString()}`);
    };
    const handleCloseDialog = ()=>{
        setShowAddDialog(false);
        setNewCatalog({
            name: '',
            url: '',
            description: '',
            username: '',
            password: ''
        });
        setUrlError('');
        setShowPassword(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container max-w-2xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "mb-2 text-base font-bold",
                        children: _('OPDS Catalogs')
                    }, void 0, false, {
                        fileName: "[project]/apps/readest-app/src/app/opds/components/CatelogManager.tsx",
                        lineNumber: 156,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-base-content/70 text-xs",
                        children: _('Browse and download books from online catalogs')
                    }, void 0, false, {
                        fileName: "[project]/apps/readest-app/src/app/opds/components/CatelogManager.tsx",
                        lineNumber: 157,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/readest-app/src/app/opds/components/CatelogManager.tsx",
                lineNumber: 155,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mb-12 text-base",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4 flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-semibold",
                                children: _('My Catalogs')
                            }, void 0, false, {
                                fileName: "[project]/apps/readest-app/src/app/opds/components/CatelogManager.tsx",
                                lineNumber: 165,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowAddDialog(true),
                                className: "btn btn-primary btn-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoAdd"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/readest-app/src/app/opds/components/CatelogManager.tsx",
                                        lineNumber: 167,
                                        columnNumber: 13
                                    }, this),
                                    _('Add Catalog')
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/readest-app/src/app/opds/components/CatelogManager.tsx",
                                lineNumber: 166,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/readest-app/src/app/opds/components/CatelogManager.tsx",
                        lineNumber: 164,
                        columnNumber: 9
                    }, this),
                    catalogs.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-base-300 rounded-lg border-2 border-dashed p-12 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoBook"], {
                                className: "text-base-content/30 mx-auto mb-4 h-12 w-12"
                            }, void 0, false, {
                                fileName: "[project]/apps/readest-app/src/app/opds/components/CatelogManager.tsx",
                                lineNumber: 174,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "mb-2 font-semibold",
                                children: _('No catalogs yet')
                            }, void 0, false, {
                                fileName: "[project]/apps/readest-app/src/app/opds/components/CatelogManager.tsx",
                                lineNumber: 175,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-base-content/70 mb-4 text-sm",
                                children: _('Add your first OPDS catalog to start browsing books')
                            }, void 0, false, {
                                fileName: "[project]/apps/readest-app/src/app/opds/components/CatelogManager.tsx",
                                lineNumber: 176,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowAddDialog(true),
                                className: "btn btn-primary btn-sm",
                                children: _('Add Your First Catalog')
                            }, void 0, false, {
                                fileName: "[project]/apps/readest-app/src/app/opds/components/CatelogManager.tsx",
                                lineNumber: 179,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/readest-app/src/app/opds/components/CatelogManager.tsx",
                        lineNumber: 173,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-4 sm:grid-cols-2",
                        children: catalogs.map((catalog)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "card bg-base-100 border-base-300 h-full border shadow-sm transition-shadow hover:shadow-md",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "card-body h-full justify-between p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "min-w-0 flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mb-1 flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "card-title line-clamp-1 text-sm",
                                                                children: [
                                                                    catalog.icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "",
                                                                        children: catalog.icon
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/readest-app/src/app/opds/components/CatelogManager.tsx",
                                                                        lineNumber: 195,
                                                                        columnNumber: 44
                                                                    }, this),
                                                                    catalog.name
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/apps/readest-app/src/app/opds/components/CatelogManager.tsx",
                                                                lineNumber: 194,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleRemoveCatalog(catalog.id),
                                                                className: "btn btn-ghost btn-xs btn-square",
                                                                title: "Remove",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoTrash"], {
                                                                    className: "h-4 w-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/readest-app/src/app/opds/components/CatelogManager.tsx",
                                                                    lineNumber: 203,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/readest-app/src/app/opds/components/CatelogManager.tsx",
                                                                lineNumber: 198,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/readest-app/src/app/opds/components/CatelogManager.tsx",
                                                        lineNumber: 193,
                                                        columnNumber: 23
                                                    }, this),
                                                    catalog.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-base-content/70 mb-2 line-clamp-1 h-6 text-sm sm:line-clamp-2 sm:h-10",
                                                        children: catalog.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/readest-app/src/app/opds/components/CatelogManager.tsx",
                                                        lineNumber: 207,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-base-content/50 line-clamp-1 text-xs",
                                                        children: catalog.url
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/readest-app/src/app/opds/components/CatelogManager.tsx",
                                                        lineNumber: 211,
                                                        columnNumber: 23
                                                    }, this),
                                                    catalog.username && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-base-content/50 mt-1 text-xs",
                                                        children: [
                                                            _('Username'),
                                                            ": ",
                                                            catalog.username
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/readest-app/src/app/opds/components/CatelogManager.tsx",
                                                        lineNumber: 213,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/readest-app/src/app/opds/components/CatelogManager.tsx",
                                                lineNumber: 192,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/readest-app/src/app/opds/components/CatelogManager.tsx",
                                            lineNumber: 191,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "card-actions mt-4 justify-end",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleOpenCatalog(catalog),
                                                className: "btn btn-sm btn-primary",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoOpenOutline"], {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/readest-app/src/app/opds/components/CatelogManager.tsx",
                                                        lineNumber: 224,
                                                        columnNumber: 23
                                                    }, this),
                                                    _('Browse')
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/readest-app/src/app/opds/components/CatelogManager.tsx",
                                                lineNumber: 220,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/readest-app/src/app/opds/components/CatelogManager.tsx",
                                            lineNumber: 219,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/readest-app/src/app/opds/components/CatelogManager.tsx",
                                    lineNumber: 190,
                                    columnNumber: 17
                                }, this)
                            }, catalog.id, false, {
                                fileName: "[project]/apps/readest-app/src/app/opds/components/CatelogManager.tsx",
                                lineNumber: 186,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/apps/readest-app/src/app/opds/components/CatelogManager.tsx",
                        lineNumber: 184,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/readest-app/src/app/opds/components/CatelogManager.tsx",
                lineNumber: 163,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "text-base",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "mb-4 font-semibold",
                        children: _('Popular Catalogs')
                    }, void 0, false, {
                        fileName: "[project]/apps/readest-app/src/app/opds/components/CatelogManager.tsx",
                        lineNumber: 237,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-4 sm:grid-cols-2",
                        children: POPULAR_CATALOGS.filter((catalog)=>!catalog.disabled).map((catalog)=>{
                            const isAdded = catalogs.some((c)=>c.url === catalog.url);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "card bg-base-100 border-base-300 border shadow-sm transition-shadow hover:shadow-md",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "card-body p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "card-title mb-1 text-sm",
                                            children: [
                                                catalog.icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "",
                                                    children: catalog.icon
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/readest-app/src/app/opds/components/CatelogManager.tsx",
                                                    lineNumber: 248,
                                                    columnNumber: 38
                                                }, this),
                                                catalog.name
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/readest-app/src/app/opds/components/CatelogManager.tsx",
                                            lineNumber: 247,
                                            columnNumber: 19
                                        }, this),
                                        catalog.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-base-content/70 line-clamp-2 text-sm",
                                            children: catalog.description
                                        }, void 0, false, {
                                            fileName: "[project]/apps/readest-app/src/app/opds/components/CatelogManager.tsx",
                                            lineNumber: 252,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "card-actions mt-4 justify-end gap-2",
                                            children: [
                                                !isAdded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleAddPopularCatalog(catalog),
                                                    className: "btn btn-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoAdd"], {
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/readest-app/src/app/opds/components/CatelogManager.tsx",
                                                            lineNumber: 262,
                                                            columnNumber: 25
                                                        }, this),
                                                        _('Add')
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/readest-app/src/app/opds/components/CatelogManager.tsx",
                                                    lineNumber: 258,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleOpenCatalog(catalog),
                                                    className: "btn btn-sm btn-primary",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoOpenOutline"], {
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/readest-app/src/app/opds/components/CatelogManager.tsx",
                                                            lineNumber: 270,
                                                            columnNumber: 23
                                                        }, this),
                                                        _('Browse')
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/readest-app/src/app/opds/components/CatelogManager.tsx",
                                                    lineNumber: 266,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/readest-app/src/app/opds/components/CatelogManager.tsx",
                                            lineNumber: 256,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/readest-app/src/app/opds/components/CatelogManager.tsx",
                                    lineNumber: 246,
                                    columnNumber: 17
                                }, this)
                            }, catalog.id, false, {
                                fileName: "[project]/apps/readest-app/src/app/opds/components/CatelogManager.tsx",
                                lineNumber: 242,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/apps/readest-app/src/app/opds/components/CatelogManager.tsx",
                        lineNumber: 238,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/readest-app/src/app/opds/components/CatelogManager.tsx",
                lineNumber: 236,
                columnNumber: 7
            }, this),
            showAddDialog && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$ModalPortal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dialog", {
                    className: "modal modal-open",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "modal-box",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "mb-4 text-lg font-bold",
                                children: _('Add OPDS Catalog')
                            }, void 0, false, {
                                fileName: "[project]/apps/readest-app/src/app/opds/components/CatelogManager.tsx",
                                lineNumber: 286,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: (e)=>{
                                    e.preventDefault();
                                    handleAddCatalog();
                                },
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-control",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "label",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "label-text",
                                                    children: [
                                                        _('Catalog Name'),
                                                        " *"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/readest-app/src/app/opds/components/CatelogManager.tsx",
                                                    lineNumber: 296,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/readest-app/src/app/opds/components/CatelogManager.tsx",
                                                lineNumber: 295,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: newCatalog.name,
                                                onChange: (e)=>setNewCatalog({
                                                        ...newCatalog,
                                                        name: e.target.value
                                                    }),
                                                placeholder: _('My Calibre Library'),
                                                className: "input input-bordered placeholder:text-sm",
                                                disabled: isValidating,
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/apps/readest-app/src/app/opds/components/CatelogManager.tsx",
                                                lineNumber: 298,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/readest-app/src/app/opds/components/CatelogManager.tsx",
                                        lineNumber: 294,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-control",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "label",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "label-text",
                                                    children: [
                                                        _('OPDS URL'),
                                                        " *"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/readest-app/src/app/opds/components/CatelogManager.tsx",
                                                    lineNumber: 311,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/readest-app/src/app/opds/components/CatelogManager.tsx",
                                                lineNumber: 310,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "url",
                                                value: newCatalog.url,
                                                onChange: (e)=>setNewCatalog({
                                                        ...newCatalog,
                                                        url: e.target.value
                                                    }),
                                                placeholder: "https://example.com/opds",
                                                className: "input input-bordered placeholder:text-sm",
                                                disabled: isValidating,
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/apps/readest-app/src/app/opds/components/CatelogManager.tsx",
                                                lineNumber: 313,
                                                columnNumber: 19
                                            }, this),
                                            urlError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "label",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "label-text-alt text-error",
                                                    children: urlError
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/readest-app/src/app/opds/components/CatelogManager.tsx",
                                                    lineNumber: 324,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/readest-app/src/app/opds/components/CatelogManager.tsx",
                                                lineNumber: 323,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/readest-app/src/app/opds/components/CatelogManager.tsx",
                                        lineNumber: 309,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-control",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "label",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "label-text",
                                                    children: _('Username (optional)')
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/readest-app/src/app/opds/components/CatelogManager.tsx",
                                                    lineNumber: 331,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/readest-app/src/app/opds/components/CatelogManager.tsx",
                                                lineNumber: 330,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: newCatalog.username,
                                                onChange: (e)=>setNewCatalog({
                                                        ...newCatalog,
                                                        username: e.target.value
                                                    }),
                                                placeholder: _('Username'),
                                                className: "input input-bordered placeholder:text-sm",
                                                disabled: isValidating,
                                                autoComplete: "username"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/readest-app/src/app/opds/components/CatelogManager.tsx",
                                                lineNumber: 333,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/readest-app/src/app/opds/components/CatelogManager.tsx",
                                        lineNumber: 329,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-control",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "label",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "label-text",
                                                    children: _('Password (optional)')
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/readest-app/src/app/opds/components/CatelogManager.tsx",
                                                    lineNumber: 346,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/readest-app/src/app/opds/components/CatelogManager.tsx",
                                                lineNumber: 345,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: showPassword ? 'text' : 'password',
                                                        value: newCatalog.password,
                                                        onChange: (e)=>setNewCatalog({
                                                                ...newCatalog,
                                                                password: e.target.value
                                                            }),
                                                        placeholder: _('Password'),
                                                        className: "input input-bordered w-full pr-10 placeholder:text-sm",
                                                        disabled: isValidating,
                                                        autoComplete: "current-password"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/readest-app/src/app/opds/components/CatelogManager.tsx",
                                                        lineNumber: 349,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setShowPassword(!showPassword),
                                                        className: "btn btn-ghost btn-sm btn-square absolute right-1 top-1/2 -translate-y-1/2",
                                                        tabIndex: -1,
                                                        children: showPassword ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoEyeOff"], {
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/readest-app/src/app/opds/components/CatelogManager.tsx",
                                                            lineNumber: 365,
                                                            columnNumber: 25
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoEye"], {
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/readest-app/src/app/opds/components/CatelogManager.tsx",
                                                            lineNumber: 367,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/readest-app/src/app/opds/components/CatelogManager.tsx",
                                                        lineNumber: 358,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/readest-app/src/app/opds/components/CatelogManager.tsx",
                                                lineNumber: 348,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/readest-app/src/app/opds/components/CatelogManager.tsx",
                                        lineNumber: 344,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-control",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "label",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "label-text",
                                                    children: _('Description (optional)')
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/readest-app/src/app/opds/components/CatelogManager.tsx",
                                                    lineNumber: 375,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/readest-app/src/app/opds/components/CatelogManager.tsx",
                                                lineNumber: 374,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                value: newCatalog.description,
                                                onChange: (e)=>setNewCatalog({
                                                        ...newCatalog,
                                                        description: e.target.value
                                                    }),
                                                placeholder: _('A brief description of this catalog'),
                                                className: "textarea textarea-bordered text-sm placeholder:text-sm",
                                                rows: 2,
                                                disabled: isValidating
                                            }, void 0, false, {
                                                fileName: "[project]/apps/readest-app/src/app/opds/components/CatelogManager.tsx",
                                                lineNumber: 377,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/readest-app/src/app/opds/components/CatelogManager.tsx",
                                        lineNumber: 373,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "modal-action",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: handleCloseDialog,
                                                className: "btn",
                                                disabled: isValidating,
                                                children: _('Cancel')
                                            }, void 0, false, {
                                                fileName: "[project]/apps/readest-app/src/app/opds/components/CatelogManager.tsx",
                                                lineNumber: 388,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "submit",
                                                className: "btn btn-primary",
                                                disabled: isValidating,
                                                children: isValidating ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "loading loading-spinner loading-sm"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/readest-app/src/app/opds/components/CatelogManager.tsx",
                                                            lineNumber: 399,
                                                            columnNumber: 25
                                                        }, this),
                                                        _('Validating...')
                                                    ]
                                                }, void 0, true) : _('Add Catalog')
                                            }, void 0, false, {
                                                fileName: "[project]/apps/readest-app/src/app/opds/components/CatelogManager.tsx",
                                                lineNumber: 396,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/readest-app/src/app/opds/components/CatelogManager.tsx",
                                        lineNumber: 387,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/readest-app/src/app/opds/components/CatelogManager.tsx",
                                lineNumber: 287,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/readest-app/src/app/opds/components/CatelogManager.tsx",
                        lineNumber: 285,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/readest-app/src/app/opds/components/CatelogManager.tsx",
                    lineNumber: 284,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/opds/components/CatelogManager.tsx",
                lineNumber: 283,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/readest-app/src/app/opds/components/CatelogManager.tsx",
        lineNumber: 154,
        columnNumber: 5
    }, this);
}
_s(CatalogManager, "QQGRf7Aun3CqTukXPYUT3jX4DRU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEnv"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSettingsStore"]
    ];
});
_c = CatalogManager;
var _c;
__turbopack_context__.k.register(_c, "CatalogManager");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/readest-app/src/app/library/components/OPDSDialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CatalogDialog",
    ()=>CatalogDialog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.28.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$opds$2f$components$2f$CatelogManager$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/app/opds/components/CatelogManager.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/hooks/useTranslation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$Dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/components/Dialog.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
function CatalogDialog({ onClose }) {
    _s();
    const _ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$Dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        isOpen: true,
        title: _('Online Library'),
        onClose: onClose,
        bgClassName: 'sm:!bg-black/75',
        boxClassName: "sm:min-w-[520px] sm:w-3/4 sm:h-[85%] sm:!max-w-screen-sm",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])('bg-base-100 relative flex flex-col overflow-y-auto pb-4'),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$opds$2f$components$2f$CatelogManager$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CatalogManager"], {}, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/library/components/OPDSDialog.tsx",
                lineNumber: 21,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/readest-app/src/app/library/components/OPDSDialog.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/readest-app/src/app/library/components/OPDSDialog.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_s(CatalogDialog, "/1wxBjgIhZiLx4/tsSGZM/dW09g=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = CatalogDialog;
var _c;
__turbopack_context__.k.register(_c, "CatalogDialog");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/readest-app/src/app/library/components/MigrateDataWindow.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MigrateDataWindow",
    ()=>MigrateDataWindow,
    "setMigrateDataDirDialogVisible",
    ()=>setMigrateDataDirDialogVisible
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.28.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.28.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-icons@5.4.0_react@19.2.0/node_modules/react-icons/ri/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$path$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tauri-apps+api@2.9.1/node_modules/@tauri-apps/api/path.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$plugin$2d$process$40$2$2e$3$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$plugin$2d$process$2f$dist$2d$js$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tauri-apps+plugin-process@2.3.1/node_modules/@tauri-apps/plugin-process/dist-js/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/context/EnvContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/hooks/useTranslation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/settingsStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$plugin$2d$opener$40$2$2e$5$2e$3$2f$node_modules$2f40$tauri$2d$apps$2f$plugin$2d$opener$2f$dist$2d$js$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tauri-apps+plugin-opener@2.5.3/node_modules/@tauri-apps/plugin-opener/dist-js/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$path$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/path.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$book$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/book.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/misc.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$bridge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/bridge.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$os$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/os.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$permission$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/permission.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$Dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/components/Dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$Dropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/components/Dropdown.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$MenuItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/components/MenuItem.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const setMigrateDataDirDialogVisible = (visible)=>{
    const dialog = document.getElementById('migrate_data_dir_window');
    if (dialog) {
        const event = new CustomEvent('setDialogVisibility', {
            detail: {
                visible
            }
        });
        dialog.dispatchEvent(event);
    }
};
const MigrateDataWindow = ()=>{
    _s();
    const _ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const { appService, envConfig } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEnv"])();
    const { settings, setSettings, saveSettings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSettingsStore"])();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentDataDir, setCurrentDataDir] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [newDataDir, setNewDataDir] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [migrationStatus, setMigrationStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('idle');
    const [migrationProgress, setMigrationProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        current: 0,
        total: 0
    });
    const [errorMessage, setErrorMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [filesToMigrate, setFilesToMigrate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currentDirFileCount, setCurrentDirFileCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [currentDirFileSize, setCurrentDirFileSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [androidNewDirs, setAndroidNewDirs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MigrateDataWindow.useEffect": ()=>{
            const handleCustomEvent = {
                "MigrateDataWindow.useEffect.handleCustomEvent": (event)=>{
                    setIsOpen(event.detail.visible);
                    if (event.detail.visible) {
                        loadCurrentDataDir();
                        loadAndroidDirs();
                    }
                }
            }["MigrateDataWindow.useEffect.handleCustomEvent"];
            const el = document.getElementById('migrate_data_dir_window');
            if (el) {
                el.addEventListener('setDialogVisibility', handleCustomEvent);
            }
            return ({
                "MigrateDataWindow.useEffect": ()=>{
                    if (el) {
                        el.removeEventListener('setDialogVisibility', handleCustomEvent);
                    }
                }
            })["MigrateDataWindow.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["MigrateDataWindow.useEffect"], []);
    const loadCurrentDataDir = async ()=>{
        try {
            if (!appService) return;
            const dataDir = await appService.resolveFilePath('', 'Data');
            setCurrentDataDir(dataDir);
            const files = await appService.readDirectory(dataDir, 'None');
            setFilesToMigrate(files);
            setCurrentDirFileCount(files.length.toLocaleString());
            setCurrentDirFileSize(files.reduce((acc, file)=>acc + file.size, 0));
        } catch (error) {
            console.error('Error loading current data directory:', error);
        }
    };
    const loadAndroidDirs = async ()=>{
        try {
            if (appService?.isAndroidApp) {
                const sdCardPathResponse = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$bridge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExternalSDCardPath"])();
                let sdcardDirs = [
                    {
                        path: '/storage/emulated/0',
                        label: '/sdcard/0'
                    },
                    {
                        path: '/storage/emulated/0/Books',
                        label: '/sdcard/0/Books'
                    },
                    {
                        path: '/storage/emulated/0/Documents',
                        label: '/sdcard/0/Documents'
                    },
                    {
                        path: '/storage/emulated/0/Download',
                        label: '/sdcard/0/Download'
                    }
                ];
                if (sdCardPathResponse.path) {
                    const externalSdCardPath = sdCardPathResponse.path;
                    sdcardDirs = [
                        ...sdcardDirs,
                        {
                            path: externalSdCardPath,
                            label: '/sdcard/1'
                        },
                        {
                            path: `${externalSdCardPath}/Books`,
                            label: '/sdcard/1/Books'
                        },
                        {
                            path: `${externalSdCardPath}/Documents`,
                            label: '/sdcard/1/Documents'
                        },
                        {
                            path: `${externalSdCardPath}/Download`,
                            label: '/sdcard/1/Download'
                        }
                    ];
                }
                const localDocumentDir = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$path$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["documentDir"])();
                setAndroidNewDirs([
                    // For Google Play version we won't request permission to access root of /sdcard
                    ...appService?.distChannel === 'playstore' ? [] : sdcardDirs,
                    {
                        path: localDocumentDir,
                        label: '/sdcard/APPDATA/Documents'
                    }
                ]);
            }
        } catch (error) {
            console.error('Error loading app local data directory:', error);
        }
    };
    const handleSelectNewDir = async ()=>{
        setMigrationStatus('selecting');
        setErrorMessage('');
        try {
            const selectedDir = await appService?.selectDirectory?.('write');
            if (selectedDir) {
                const newDataDir = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$path$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["join"])(selectedDir, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DATA_SUBDIR"]);
                await appService?.createDir(newDataDir, 'None', true);
                setNewDataDir(newDataDir);
                setMigrationStatus('idle');
            } else {
                setMigrationStatus('idle');
            }
        } catch (error) {
            console.error('Error selecting directory:', error);
            setErrorMessage(_('Failed to select directory'));
            setMigrationStatus('error');
        }
    };
    const handleSelectedNewDir = async (dir)=>{
        setErrorMessage('');
        if (!dir.includes('Android/data')) {
            if (!await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$permission$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["requestStoragePermission"])()) return;
        }
        try {
            const newDataDir = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$path$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["join"])(dir, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DATA_SUBDIR"]);
            await appService?.createDir(newDataDir, 'None', true);
            setNewDataDir(newDataDir);
            setMigrationStatus('idle');
        } catch (error) {
            console.error('Error selecting directory:', error);
            setErrorMessage(_('Failed to select directory'));
            setMigrationStatus('error');
        }
    };
    const handleStartMigration = async ()=>{
        if (!appService || !currentDataDir || !newDataDir || !filesToMigrate.length) return;
        setMigrationStatus('migrating');
        setErrorMessage('');
        setMigrationProgress({
            current: 0,
            total: 0
        });
        try {
            if (newDataDir === currentDataDir) {
                throw new Error(_('The new data directory must be different from the current one.'));
            }
            // Copy all files to new location
            for(let i = 0; i < filesToMigrate.length; i++){
                const file = filesToMigrate[i];
                setMigrationProgress({
                    current: i + 1,
                    total: filesToMigrate.length,
                    currentFile: file.path
                });
                const srcPath = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$path$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["join"])(currentDataDir, file.path);
                const destPath = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$path$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["join"])(newDataDir, file.path);
                await appService.copyFile(srcPath, destPath, 'None');
            }
            // Verify all files copied
            const filesMigrated = await appService.readDirectory(newDataDir, 'None');
            for (const file of filesToMigrate){
                if (!filesMigrated.find((f)=>f.path === file.path && f.size === file.size)) {
                    throw new Error(`File ${file.path} failed to copy.`);
                }
            }
            // Delete old data directory
            await appService.deleteDir(currentDataDir, 'None', true);
            // Update settings for new data directory
            const customRootDir = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$path$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDirPath"])(newDataDir);
            await appService.setCustomRootDir(customRootDir);
            settings.customRootDir = customRootDir;
            settings.localBooksDir = await appService.resolveFilePath('', 'Books');
            setSettings({
                ...settings
            });
            await saveSettings(envConfig, settings);
            // Finalize migration
            setMigrationStatus('completed');
            setCurrentDataDir(newDataDir);
            setFilesToMigrate([]);
            setCurrentDirFileCount('');
            setCurrentDirFileSize(0);
            loadCurrentDataDir();
        } catch (error) {
            console.error('Error migrating data:', error);
            setErrorMessage(_('Migration failed: {{error}}', {
                error: error || 'Unknown error'
            }));
            setMigrationStatus('error');
        }
    };
    const handleClose = ()=>{
        if (migrationStatus === 'migrating') {
            return;
        }
        setIsOpen(false);
        setNewDataDir('');
        setMigrationStatus('idle');
        setErrorMessage('');
        setMigrationProgress({
            current: 0,
            total: 0
        });
    };
    const handleRestartApp = ()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$plugin$2d$process$40$2$2e$3$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$plugin$2d$process$2f$dist$2d$js$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["relaunch"])();
    };
    const handleRevealDir = (dataDir)=>{
        if (dataDir && appService?.isDesktopApp) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$plugin$2d$opener$40$2$2e$5$2e$3$2f$node_modules$2f40$tauri$2d$apps$2f$plugin$2d$opener$2f$dist$2d$js$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["revealItemInDir"])(dataDir);
        }
    };
    const progressPercentage = migrationProgress.total > 0 ? Math.round(migrationProgress.current / migrationProgress.total * 100) : 0;
    const canStartMigration = newDataDir && newDataDir !== currentDataDir && migrationStatus === 'idle';
    const osPlatform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOSPlatform"])();
    const fileRevealLabel = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$os$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FILE_REVEAL_LABELS"][osPlatform] || __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$os$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FILE_REVEAL_LABELS"].default;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$Dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        id: "migrate_data_dir_window",
        isOpen: isOpen,
        title: _('Change Data Location'),
        onClose: handleClose,
        boxClassName: "sm:!w-[520px] sm:!max-w-screen-sm sm:h-auto",
        children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "migrate-data-dir-content flex flex-col gap-6 px-6 py-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-base-content text-sm font-semibold",
                            children: _('Current Data Location')
                        }, void 0, false, {
                            fileName: "[project]/apps/readest-app/src/app/library/components/MigrateDataWindow.tsx",
                            lineNumber: 278,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            title: _(fileRevealLabel),
                            className: "bg-base-200 flex w-full items-center gap-2 rounded-lg p-3",
                            onClick: ()=>handleRevealDir(currentDataDir),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiFolderOpenLine"], {
                                    className: "text-base-content/70 h-4 w-4 flex-shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/apps/readest-app/src/app/library/components/MigrateDataWindow.tsx",
                                    lineNumber: 286,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-base-content/80 break-all text-start font-mono text-sm",
                                    children: currentDataDir || _('Loading...')
                                }, void 0, false, {
                                    fileName: "[project]/apps/readest-app/src/app/library/components/MigrateDataWindow.tsx",
                                    lineNumber: 287,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/readest-app/src/app/library/components/MigrateDataWindow.tsx",
                            lineNumber: 281,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        currentDirFileCount ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex space-x-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-base-content/60 text-xs",
                                    children: _('File count: {{size}}', {
                                        size: currentDirFileCount
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/apps/readest-app/src/app/library/components/MigrateDataWindow.tsx",
                                    lineNumber: 293,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-base-content/60 text-xs",
                                    children: _('Total size: {{size}}', {
                                        size: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$book$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBytes"])(currentDirFileSize)
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/apps/readest-app/src/app/library/components/MigrateDataWindow.tsx",
                                    lineNumber: 296,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/readest-app/src/app/library/components/MigrateDataWindow.tsx",
                            lineNumber: 292,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-base-content/60 text-xs",
                            children: _('Calculating file info...')
                        }, void 0, false, {
                            fileName: "[project]/apps/readest-app/src/app/library/components/MigrateDataWindow.tsx",
                            lineNumber: 301,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/readest-app/src/app/library/components/MigrateDataWindow.tsx",
                    lineNumber: 277,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-base-content text-sm font-semibold",
                            children: _('New Data Location')
                        }, void 0, false, {
                            fileName: "[project]/apps/readest-app/src/app/library/components/MigrateDataWindow.tsx",
                            lineNumber: 307,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        newDataDir && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            title: _(fileRevealLabel),
                            className: "bg-primary/10 border-primary/20 flex w-full items-center gap-2 rounded-lg border p-3",
                            onClick: ()=>handleRevealDir(newDataDir),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiFolderOpenLine"], {
                                    className: "text-primary h-4 w-4 flex-shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/apps/readest-app/src/app/library/components/MigrateDataWindow.tsx",
                                    lineNumber: 315,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-primary break-all text-start font-mono text-sm",
                                    children: newDataDir
                                }, void 0, false, {
                                    fileName: "[project]/apps/readest-app/src/app/library/components/MigrateDataWindow.tsx",
                                    lineNumber: 316,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/readest-app/src/app/library/components/MigrateDataWindow.tsx",
                            lineNumber: 310,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        appService?.isAndroidApp ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$Dropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            label: _('Choose New Folder'),
                            className: "dropdown-bottom flex w-full justify-center",
                            buttonClassName: "btn btn-ghost btn-outline w-full",
                            toggleButton: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: newDataDir ? _('Choose Different Folder') : _('Choose New Folder')
                            }, void 0, false, {
                                fileName: "[project]/apps/readest-app/src/app/library/components/MigrateDataWindow.tsx",
                                lineNumber: 327,
                                columnNumber: 19
                            }, void 0),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('folder-menu dropdown-content dropdown-center no-triangle', 'border-base-300 !bg-base-200 z-20 mt-1 max-w-[90vw] shadow-2xl'),
                                children: androidNewDirs.map((dir)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$MenuItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        toggled: newDataDir.split(`/${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DATA_SUBDIR"]}`)[0] === dir.path,
                                        transient: true,
                                        label: dir.label,
                                        onClick: ()=>handleSelectedNewDir(dir.path)
                                    }, dir.path, false, {
                                        fileName: "[project]/apps/readest-app/src/app/library/components/MigrateDataWindow.tsx",
                                        lineNumber: 337,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/apps/readest-app/src/app/library/components/MigrateDataWindow.tsx",
                                lineNumber: 330,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/apps/readest-app/src/app/library/components/MigrateDataWindow.tsx",
                            lineNumber: 322,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btn btn-outline btn-sm w-full",
                            onClick: handleSelectNewDir,
                            disabled: migrationStatus === 'migrating' || migrationStatus === 'selecting',
                            children: [
                                migrationStatus === 'selecting' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiLoader2Line"], {
                                    className: "h-4 w-4 animate-spin"
                                }, void 0, false, {
                                    fileName: "[project]/apps/readest-app/src/app/library/components/MigrateDataWindow.tsx",
                                    lineNumber: 354,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0)),
                                newDataDir ? _('Choose Different Folder') : _('Choose New Folder')
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/readest-app/src/app/library/components/MigrateDataWindow.tsx",
                            lineNumber: 348,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/readest-app/src/app/library/components/MigrateDataWindow.tsx",
                    lineNumber: 306,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                migrationStatus === 'migrating' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiLoader2Line"], {
                                    className: "text-primary h-4 w-4 animate-spin"
                                }, void 0, false, {
                                    fileName: "[project]/apps/readest-app/src/app/library/components/MigrateDataWindow.tsx",
                                    lineNumber: 365,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-base-content text-sm font-medium",
                                    children: _('Migrating data...')
                                }, void 0, false, {
                                    fileName: "[project]/apps/readest-app/src/app/library/components/MigrateDataWindow.tsx",
                                    lineNumber: 366,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-base-content/70 text-sm",
                                    children: [
                                        progressPercentage,
                                        "%"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/readest-app/src/app/library/components/MigrateDataWindow.tsx",
                                    lineNumber: 369,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/readest-app/src/app/library/components/MigrateDataWindow.tsx",
                            lineNumber: 364,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-base-200 h-2 w-full rounded-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-primary h-2 rounded-full transition-all duration-300",
                                style: {
                                    width: `${progressPercentage}%`
                                }
                            }, void 0, false, {
                                fileName: "[project]/apps/readest-app/src/app/library/components/MigrateDataWindow.tsx",
                                lineNumber: 373,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/apps/readest-app/src/app/library/components/MigrateDataWindow.tsx",
                            lineNumber: 372,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        migrationProgress.currentFile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-base-content/60 overflow-hidden font-mono text-xs",
                            style: {
                                direction: 'rtl',
                                textAlign: 'left',
                                whiteSpace: 'nowrap',
                                textOverflow: 'ellipsis'
                            },
                            children: _('Copying: {{file}}', {
                                file: migrationProgress.currentFile
                            })
                        }, void 0, false, {
                            fileName: "[project]/apps/readest-app/src/app/library/components/MigrateDataWindow.tsx",
                            lineNumber: 380,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-base-content/60 text-xs",
                            children: _('{{current}} of {{total}} files', {
                                current: migrationProgress.current.toLocaleString(),
                                total: migrationProgress.total.toLocaleString()
                            })
                        }, void 0, false, {
                            fileName: "[project]/apps/readest-app/src/app/library/components/MigrateDataWindow.tsx",
                            lineNumber: 393,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/readest-app/src/app/library/components/MigrateDataWindow.tsx",
                    lineNumber: 363,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)),
                migrationStatus === 'completed' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-success flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiCheckboxCircleFill"], {
                                    className: "h-5 w-5"
                                }, void 0, false, {
                                    fileName: "[project]/apps/readest-app/src/app/library/components/MigrateDataWindow.tsx",
                                    lineNumber: 406,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-medium",
                                    children: _('Migration completed successfully!')
                                }, void 0, false, {
                                    fileName: "[project]/apps/readest-app/src/app/library/components/MigrateDataWindow.tsx",
                                    lineNumber: 407,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/readest-app/src/app/library/components/MigrateDataWindow.tsx",
                            lineNumber: 405,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-success/10 border-success/20 rounded-lg border p-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-success/80 text-sm",
                                children: _('Your data has been moved to the new location. Please restart the application to complete the process.')
                            }, void 0, false, {
                                fileName: "[project]/apps/readest-app/src/app/library/components/MigrateDataWindow.tsx",
                                lineNumber: 410,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/apps/readest-app/src/app/library/components/MigrateDataWindow.tsx",
                            lineNumber: 409,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/readest-app/src/app/library/components/MigrateDataWindow.tsx",
                    lineNumber: 404,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)),
                migrationStatus === 'error' && errorMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-error flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiErrorWarningFill"], {
                                    className: "h-5 w-5"
                                }, void 0, false, {
                                    fileName: "[project]/apps/readest-app/src/app/library/components/MigrateDataWindow.tsx",
                                    lineNumber: 423,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-medium",
                                    children: _('Migration failed')
                                }, void 0, false, {
                                    fileName: "[project]/apps/readest-app/src/app/library/components/MigrateDataWindow.tsx",
                                    lineNumber: 424,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/readest-app/src/app/library/components/MigrateDataWindow.tsx",
                            lineNumber: 422,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-error/10 border-error/20 rounded-lg border p-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-error/80 break-all text-sm",
                                children: errorMessage
                            }, void 0, false, {
                                fileName: "[project]/apps/readest-app/src/app/library/components/MigrateDataWindow.tsx",
                                lineNumber: 427,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/apps/readest-app/src/app/library/components/MigrateDataWindow.tsx",
                            lineNumber: 426,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/readest-app/src/app/library/components/MigrateDataWindow.tsx",
                    lineNumber: 421,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)),
                canStartMigration && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-warning/10 border-warning/20 rounded-lg border p-3",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiErrorWarningFill"], {
                                className: "text-warning mt-0.5 h-4 w-4 flex-shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/apps/readest-app/src/app/library/components/MigrateDataWindow.tsx",
                                lineNumber: 436,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-base-content text-sm font-medium",
                                        children: _('Important Notice')
                                    }, void 0, false, {
                                        fileName: "[project]/apps/readest-app/src/app/library/components/MigrateDataWindow.tsx",
                                        lineNumber: 438,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-base-content/80 text-sm",
                                        children: _('This will move all your app data to the new location. Make sure the destination has enough free space.')
                                    }, void 0, false, {
                                        fileName: "[project]/apps/readest-app/src/app/library/components/MigrateDataWindow.tsx",
                                        lineNumber: 439,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/readest-app/src/app/library/components/MigrateDataWindow.tsx",
                                lineNumber: 437,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/readest-app/src/app/library/components/MigrateDataWindow.tsx",
                        lineNumber: 435,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/apps/readest-app/src/app/library/components/MigrateDataWindow.tsx",
                    lineNumber: 434,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-3 pt-2",
                    children: migrationStatus === 'completed' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn btn-outline flex-1",
                                onClick: handleClose,
                                children: _('Close')
                            }, void 0, false, {
                                fileName: "[project]/apps/readest-app/src/app/library/components/MigrateDataWindow.tsx",
                                lineNumber: 453,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn btn-primary flex-1",
                                onClick: handleRestartApp,
                                children: _('Restart App')
                            }, void 0, false, {
                                fileName: "[project]/apps/readest-app/src/app/library/components/MigrateDataWindow.tsx",
                                lineNumber: 456,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn btn-outline flex-1",
                                onClick: handleClose,
                                disabled: migrationStatus === 'migrating',
                                children: _('Cancel')
                            }, void 0, false, {
                                fileName: "[project]/apps/readest-app/src/app/library/components/MigrateDataWindow.tsx",
                                lineNumber: 462,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn btn-primary flex-1",
                                onClick: handleStartMigration,
                                disabled: !canStartMigration || migrationStatus !== 'idle',
                                children: [
                                    migrationStatus === 'migrating' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiLoader2Line"], {
                                        className: "h-4 w-4 animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/readest-app/src/app/library/components/MigrateDataWindow.tsx",
                                        lineNumber: 475,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    _('Start Migration')
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/readest-app/src/app/library/components/MigrateDataWindow.tsx",
                                lineNumber: 469,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true)
                }, void 0, false, {
                    fileName: "[project]/apps/readest-app/src/app/library/components/MigrateDataWindow.tsx",
                    lineNumber: 450,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/apps/readest-app/src/app/library/components/MigrateDataWindow.tsx",
            lineNumber: 275,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/readest-app/src/app/library/components/MigrateDataWindow.tsx",
        lineNumber: 267,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(MigrateDataWindow, "LDM2I+L2a6A9PEyQRkJ1XkCnlHk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEnv"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSettingsStore"]
    ];
});
_c = MigrateDataWindow;
var _c;
__turbopack_context__.k.register(_c, "MigrateDataWindow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/readest-app/src/app/library/hooks/useDragDropImport.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDragDropImport",
    ()=>useDragDropImport
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.28.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/context/EnvContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$plugin$2d$haptics$40$2$2e$3$2e$2$2f$node_modules$2f40$tauri$2d$apps$2f$plugin$2d$haptics$2f$dist$2d$js$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tauri-apps+plugin-haptics@2.3.2/node_modules/@tauri-apps/plugin-haptics/dist-js/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/event.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/environment.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$webview$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tauri-apps+api@2.9.1/node_modules/@tauri-apps/api/webview.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/hooks/useTranslation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.28.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/navigation.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
const useDragDropImport = ()=>{
    _s();
    const _ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const group = searchParams?.get('group') || '';
    const { appService } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEnv"])();
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleDroppedFiles = async (files)=>{
        if (files.length === 0) return;
        const supportedFiles = files.filter((file)=>{
            let fileExt;
            if (typeof file === 'string') {
                fileExt = file.split('.').pop()?.toLowerCase();
            } else {
                fileExt = file.name.split('.').pop()?.toLowerCase();
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BOOK_ACCEPT_FORMATS"].includes(`.${fileExt}`);
        });
        if (supportedFiles.length === 0) {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eventDispatcher"].dispatch('toast', {
                message: _('No supported files found. Supported formats: {{formats}}', {
                    formats: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BOOK_ACCEPT_FORMATS"]
                }),
                type: 'error'
            });
            return;
        }
        if (appService?.hasHaptics) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$plugin$2d$haptics$40$2$2e$3$2e$2$2f$node_modules$2f40$tauri$2d$apps$2f$plugin$2d$haptics$2f$dist$2d$js$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["impactFeedback"])('medium');
        }
        const selectedFiles = supportedFiles.map((file)=>({
                file: typeof file === 'string' ? undefined : file,
                path: typeof file === 'string' ? file : undefined
            }));
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eventDispatcher"].dispatch('import-book-files', {
            files: selectedFiles,
            groupId: group
        });
    };
    const handleDragOver = (event)=>{
        event.preventDefault();
        event.stopPropagation();
        setIsDragging(true);
    };
    const handleDragLeave = (event)=>{
        event.preventDefault();
        event.stopPropagation();
        setIsDragging(false);
    };
    const handleDrop = async (event)=>{
        event.preventDefault();
        event.stopPropagation();
        setIsDragging(false);
        if (event.dataTransfer?.files && event.dataTransfer.files.length > 0) {
            const files = Array.from(event.dataTransfer.files);
            handleDroppedFiles(files);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useDragDropImport.useEffect": ()=>{
            const libraryPage = document.querySelector('.library-page');
            if (!appService?.isMobile) {
                libraryPage?.addEventListener('dragover', handleDragOver);
                libraryPage?.addEventListener('dragleave', handleDragLeave);
                libraryPage?.addEventListener('drop', handleDrop);
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTauriAppPlatform"])()) {
                const unlisten = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$webview$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentWebview"])().onDragDropEvent({
                    "useDragDropImport.useEffect.unlisten": (event)=>{
                        if (event.payload.type === 'over') {
                            setIsDragging(true);
                        } else if (event.payload.type === 'drop') {
                            setIsDragging(false);
                            handleDroppedFiles(event.payload.paths);
                        } else {
                            setIsDragging(false);
                        }
                    }
                }["useDragDropImport.useEffect.unlisten"]);
                return ({
                    "useDragDropImport.useEffect": ()=>{
                        unlisten.then({
                            "useDragDropImport.useEffect": (fn)=>fn()
                        }["useDragDropImport.useEffect"]);
                    }
                })["useDragDropImport.useEffect"];
            }
            return ({
                "useDragDropImport.useEffect": ()=>{
                    if (!appService?.isMobile) {
                        libraryPage?.removeEventListener('dragover', handleDragOver);
                        libraryPage?.removeEventListener('dragleave', handleDragLeave);
                        libraryPage?.removeEventListener('drop', handleDrop);
                    }
                }
            })["useDragDropImport.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["useDragDropImport.useEffect"], [
        group
    ]);
    return {
        isDragging
    };
};
_s(useDragDropImport, "E1o/18ysb7E6xZGjkeL76A/VOZU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEnv"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/readest-app/src/app/library/utils/libraryUtils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createBookFilter",
    ()=>createBookFilter,
    "createBookSorter",
    ()=>createBookSorter,
    "getBreadcrumbs",
    ()=>getBreadcrumbs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$book$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/book.ts [app-client] (ecmascript)");
;
const createBookFilter = (queryTerm)=>(item)=>{
        if (!queryTerm) return true;
        if (item.deletedAt) return false;
        let searchTerm;
        try {
            searchTerm = new RegExp(queryTerm, 'i');
        } catch  {
            const lowerQuery = queryTerm.toLowerCase();
            const title = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$book$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTitle"])(item.title).toLowerCase();
            const authors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$book$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatAuthors"])(item.author).toLowerCase();
            return title.includes(lowerQuery) || authors.includes(lowerQuery) || item.format.toLowerCase().includes(lowerQuery) || item.groupName && item.groupName.toLowerCase().includes(lowerQuery) || item.metadata?.description && item.metadata.description.toLowerCase().includes(lowerQuery);
        }
        const title = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$book$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTitle"])(item.title);
        const authors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$book$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatAuthors"])(item.author);
        return searchTerm.test(title) || searchTerm.test(authors) || searchTerm.test(item.format) || item.groupName && searchTerm.test(item.groupName) || item.metadata?.description && searchTerm.test(item.metadata?.description);
    };
const createBookSorter = (sortBy, uiLanguage)=>(a, b)=>{
        switch(sortBy){
            case 'title':
                const aTitle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$book$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTitle"])(a.title);
                const bTitle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$book$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTitle"])(b.title);
                return aTitle.localeCompare(bTitle, uiLanguage || navigator.language);
            case 'author':
                const aAuthors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$book$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatAuthors"])(a.author, a?.primaryLanguage || 'en', true);
                const bAuthors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$book$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatAuthors"])(b.author, b?.primaryLanguage || 'en', true);
                return aAuthors.localeCompare(bAuthors, uiLanguage || navigator.language);
            case 'updated':
                return new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime();
            case 'created':
                return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
            case 'format':
                return a.format.localeCompare(b.format, uiLanguage || navigator.language);
            case 'published':
                const aPublished = a.metadata?.published || '0001-01-01';
                const bPublished = b.metadata?.published || '0001-01-01';
                // Handle cases where published date might not exist
                if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                ;
                if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                ;
                 // Books without published date go to the end
                if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                ;
                // Try to parse dates - handle various date formats
                const aDate = new Date(aPublished).getTime();
                const bDate = new Date(bPublished).getTime();
                // If dates are invalid (NaN), fall back to string comparison
                if (isNaN(aDate) && isNaN(bDate)) {
                    return aPublished.localeCompare(bPublished, uiLanguage || navigator.language);
                }
                if (isNaN(aDate)) return 1;
                if (isNaN(bDate)) return -1;
                return aDate - bDate;
            default:
                return new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime();
        }
    };
const getBreadcrumbs = (currentPath)=>{
    if (!currentPath) return [];
    const segments = currentPath.split('/');
    return segments.map((segment, index)=>({
            name: segment,
            path: segments.slice(0, index + 1).join('/')
        }));
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/readest-app/src/app/library/components/SettingsMenu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.28.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.28.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.28.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-icons@5.4.0_react@19.2.0/node_modules/react-icons/pi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$tb$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-icons@5.4.0_react@19.2.0/node_modules/react-icons/tb/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-icons@5.4.0_react@19.2.0/node_modules/react-icons/md/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tauri-apps+api@2.9.1/node_modules/@tauri-apps/api/core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/environment.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/context/AuthContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/context/EnvContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$themeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/themeStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useQuotaStats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/hooks/useQuotaStats.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/settingsStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/hooks/useTranslation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useResponsiveSize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/hooks/useResponsiveSize.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTransferQueue$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/hooks/useTransferQueue.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$nav$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/nav.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$window$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/window.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$telemetry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/telemetry.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$AboutWindow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/components/AboutWindow.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$library$2f$components$2f$MigrateDataWindow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/app/library/components/MigrateDataWindow.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$permission$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/permission.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$helpers$2f$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/helpers/settings.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$bridge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/bridge.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$UserAvatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/components/UserAvatar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$MenuItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/components/MenuItem.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$Quota$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/components/Quota.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$Menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/components/Menu.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const SettingsMenu = ({ setIsDropdownOpen })=>{
    _s();
    const _ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { envConfig, appService } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEnv"])();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const { userProfilePlan, quotas } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useQuotaStats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuotaStats"])(true);
    const { themeMode, setThemeMode } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$themeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeStore"])();
    const { settings, setSettingsDialogOpen } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSettingsStore"])();
    const [isAutoUpload, setIsAutoUpload] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(settings.autoUpload);
    const [isAutoCheckUpdates, setIsAutoCheckUpdates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(settings.autoCheckUpdates);
    const [isAlwaysOnTop, setIsAlwaysOnTop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(settings.alwaysOnTop);
    const [isAlwaysShowStatusBar, setIsAlwaysShowStatusBar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(settings.alwaysShowStatusBar);
    const [isScreenWakeLock, setIsScreenWakeLock] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(settings.screenWakeLock);
    const [isOpenLastBooks, setIsOpenLastBooks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(settings.openLastBooks);
    const [isAutoImportBooksOnOpen, setIsAutoImportBooksOnOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(settings.autoImportBooksOnOpen);
    const [isTelemetryEnabled, setIsTelemetryEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(settings.telemetryEnabled);
    const [alwaysInForeground, setAlwaysInForeground] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(settings.alwaysInForeground);
    const [savedBookCoverForLockScreen, setSavedBookCoverForLockScreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(settings.savedBookCoverForLockScreen || '');
    const iconSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useResponsiveSize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResponsiveSize"])(16);
    const { stats, hasActiveTransfers, setIsTransferQueueOpen } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTransferQueue$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransferQueue"])();
    const openTransferQueue = ()=>{
        setIsTransferQueueOpen(true);
        setIsDropdownOpen?.(false);
    };
    const showAboutReadest = ()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$AboutWindow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setAboutDialogVisible"])(true);
        setIsDropdownOpen?.(false);
    };
    const downloadReadest = ()=>{
        window.open(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DOWNLOAD_READEST_URL"], '_blank');
        setIsDropdownOpen?.(false);
    };
    const handleUserLogin = ()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$nav$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navigateToLogin"])(router);
        setIsDropdownOpen?.(false);
    };
    const handleUserProfile = ()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$nav$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navigateToProfile"])(router);
        setIsDropdownOpen?.(false);
    };
    const cycleThemeMode = ()=>{
        const nextMode = themeMode === 'auto' ? 'light' : themeMode === 'light' ? 'dark' : 'auto';
        setThemeMode(nextMode);
    };
    const handleReloadPage = ()=>{
        window.location.reload();
        setIsDropdownOpen?.(false);
    };
    const handleFullScreen = ()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$window$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tauriHandleToggleFullScreen"])();
        setIsDropdownOpen?.(false);
    };
    const toggleOpenInNewWindow = ()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$helpers$2f$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveSysSettings"])(envConfig, 'openBookInNewWindow', !settings.openBookInNewWindow);
        setIsDropdownOpen?.(false);
    };
    const toggleAlwaysOnTop = ()=>{
        const newValue = !settings.alwaysOnTop;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$helpers$2f$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveSysSettings"])(envConfig, 'alwaysOnTop', newValue);
        setIsAlwaysOnTop(newValue);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$window$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tauriHandleSetAlwaysOnTop"])(newValue);
        setIsDropdownOpen?.(false);
    };
    const toggleAlwaysShowStatusBar = ()=>{
        const newValue = !settings.alwaysShowStatusBar;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$helpers$2f$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveSysSettings"])(envConfig, 'alwaysShowStatusBar', newValue);
        setIsAlwaysShowStatusBar(newValue);
    };
    const toggleAutoUploadBooks = ()=>{
        const newValue = !settings.autoUpload;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$helpers$2f$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveSysSettings"])(envConfig, 'autoUpload', newValue);
        setIsAutoUpload(newValue);
        if (newValue && !user) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$nav$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navigateToLogin"])(router);
        }
    };
    const toggleAutoImportBooksOnOpen = ()=>{
        const newValue = !settings.autoImportBooksOnOpen;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$helpers$2f$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveSysSettings"])(envConfig, 'autoImportBooksOnOpen', newValue);
        setIsAutoImportBooksOnOpen(newValue);
    };
    const toggleAutoCheckUpdates = ()=>{
        const newValue = !settings.autoCheckUpdates;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$helpers$2f$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveSysSettings"])(envConfig, 'autoCheckUpdates', newValue);
        setIsAutoCheckUpdates(newValue);
    };
    const toggleScreenWakeLock = ()=>{
        const newValue = !settings.screenWakeLock;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$helpers$2f$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveSysSettings"])(envConfig, 'screenWakeLock', newValue);
        setIsScreenWakeLock(newValue);
    };
    const toggleOpenLastBooks = ()=>{
        const newValue = !settings.openLastBooks;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$helpers$2f$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveSysSettings"])(envConfig, 'openLastBooks', newValue);
        setIsOpenLastBooks(newValue);
    };
    const toggleTelemetry = ()=>{
        const newValue = !settings.telemetryEnabled;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$helpers$2f$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveSysSettings"])(envConfig, 'telemetryEnabled', newValue);
        setIsTelemetryEnabled(newValue);
        if (newValue) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$telemetry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optInTelemetry"])();
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$telemetry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optOutTelemetry"])();
        }
    };
    const handleUpgrade = ()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$nav$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navigateToProfile"])(router);
        setIsDropdownOpen?.(false);
    };
    const handleSetRootDir = ()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$library$2f$components$2f$MigrateDataWindow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setMigrateDataDirDialogVisible"])(true);
        setIsDropdownOpen?.(false);
    };
    const openSettingsDialog = ()=>{
        setIsDropdownOpen?.(false);
        setSettingsDialogOpen(true);
    };
    const handleSetSavedBookCoverForLockScreen = async ()=>{
        if (!await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$permission$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["requestStoragePermission"])() && appService?.distChannel === 'readest') return;
        const newValue = settings.savedBookCoverForLockScreen ? '' : 'default';
        if (newValue) {
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$bridge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectDirectory"])();
            if (response.path) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$helpers$2f$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveSysSettings"])(envConfig, 'savedBookCoverForLockScreenPath', response.path);
            }
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$helpers$2f$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveSysSettings"])(envConfig, 'savedBookCoverForLockScreen', newValue);
        setSavedBookCoverForLockScreen(newValue);
    };
    const toggleAlwaysInForeground = async ()=>{
        const requestAlwaysInForeground = !settings.alwaysInForeground;
        if (requestAlwaysInForeground) {
            let permission = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invoke"])('plugin:native-tts|checkPermissions');
            if (permission.postNotification !== 'granted') {
                permission = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invoke"])('plugin:native-tts|requestPermissions', {
                    permissions: [
                        'postNotification'
                    ]
                });
            }
            if (permission.postNotification !== 'granted') return;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$helpers$2f$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveSysSettings"])(envConfig, 'alwaysInForeground', requestAlwaysInForeground);
        setAlwaysInForeground(requestAlwaysInForeground);
    };
    const avatarUrl = user?.user_metadata?.['picture'] || user?.user_metadata?.['avatar_url'];
    const userFullName = user?.user_metadata?.['full_name'];
    const userDisplayName = userFullName ? userFullName.split(' ')[0] : null;
    const themeModeLabel = themeMode === 'dark' ? _('Dark Mode') : themeMode === 'light' ? _('Light Mode') : _('Auto Mode');
    const savedBookCoverPath = settings.savedBookCoverForLockScreenPath;
    const coverDir = savedBookCoverPath ? savedBookCoverPath.split('/').pop() : 'Images';
    const savedBookCoverDescription = `💾 ${coverDir}/last-book-cover.png`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$Menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('settings-menu dropdown-content no-triangle', 'z-20 mt-2 max-w-[90vw] shadow-2xl'),
        onCancel: ()=>setIsDropdownOpen?.(false),
        children: [
            user ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$MenuItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                label: userDisplayName ? _('Logged in as {{userDisplayName}}', {
                    userDisplayName
                }) : _('Logged in'),
                labelClass: "!max-w-40",
                "aria-label": _('View account details and quota'),
                Icon: avatarUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$UserAvatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    url: avatarUrl,
                    size: iconSize,
                    DefaultIcon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiUserCircleCheck"]
                }, void 0, false, {
                    fileName: "[project]/apps/readest-app/src/app/library/components/SettingsMenu.tsx",
                    lineNumber: 253,
                    columnNumber: 15
                }, void 0) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiUserCircleCheck"],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "flex flex-col",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleUserProfile,
                            className: "w-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$Quota$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                quotas: quotas,
                                labelClassName: "h-10 pl-3 pr-2"
                            }, void 0, false, {
                                fileName: "[project]/apps/readest-app/src/app/library/components/SettingsMenu.tsx",
                                lineNumber: 261,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/apps/readest-app/src/app/library/components/SettingsMenu.tsx",
                            lineNumber: 260,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$MenuItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            label: _('Account'),
                            noIcon: true,
                            onClick: handleUserProfile
                        }, void 0, false, {
                            fileName: "[project]/apps/readest-app/src/app/library/components/SettingsMenu.tsx",
                            lineNumber: 263,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/readest-app/src/app/library/components/SettingsMenu.tsx",
                    lineNumber: 259,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/library/components/SettingsMenu.tsx",
                lineNumber: 243,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$MenuItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                label: _('Sign In'),
                Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiUserCircle"],
                onClick: handleUserLogin
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/library/components/SettingsMenu.tsx",
                lineNumber: 267,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            user && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$MenuItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                label: _('Cloud File Transfers'),
                Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdCloudSync"],
                description: hasActiveTransfers ? _('{{activeCount}} active, {{pendingCount}} pending', {
                    activeCount: stats.active,
                    pendingCount: stats.pending
                }) : stats.failed > 0 ? _('{{failedCount}} failed', {
                    failedCount: stats.failed
                }) : '',
                onClick: openTransferQueue
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/library/components/SettingsMenu.tsx",
                lineNumber: 270,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTauriAppPlatform"])() && !appService?.isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$MenuItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                label: _('Auto Import on File Open'),
                toggled: isAutoImportBooksOnOpen,
                onClick: toggleAutoImportBooksOnOpen
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/library/components/SettingsMenu.tsx",
                lineNumber: 294,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTauriAppPlatform"])() && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$MenuItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                label: _('Open Last Book on Start'),
                toggled: isOpenLastBooks,
                onClick: toggleOpenLastBooks
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/library/components/SettingsMenu.tsx",
                lineNumber: 301,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            appService?.hasUpdater && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$MenuItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                label: _('Check Updates on Start'),
                toggled: isAutoCheckUpdates,
                onClick: toggleAutoCheckUpdates
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/library/components/SettingsMenu.tsx",
                lineNumber: 308,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                "aria-hidden": "true",
                className: "border-base-200 my-1"
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/library/components/SettingsMenu.tsx",
                lineNumber: 314,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            appService?.hasWindow && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$MenuItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                label: _('Open Book in New Window'),
                toggled: settings.openBookInNewWindow,
                onClick: toggleOpenInNewWindow
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/library/components/SettingsMenu.tsx",
                lineNumber: 316,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            appService?.hasWindow && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$MenuItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                label: _('Fullscreen'),
                onClick: handleFullScreen
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/library/components/SettingsMenu.tsx",
                lineNumber: 322,
                columnNumber: 33
            }, ("TURBOPACK compile-time value", void 0)),
            appService?.hasWindow && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$MenuItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                label: _('Always on Top'),
                toggled: isAlwaysOnTop,
                onClick: toggleAlwaysOnTop
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/library/components/SettingsMenu.tsx",
                lineNumber: 324,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            appService?.isMobileApp && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$MenuItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                label: _('Always Show Status Bar'),
                toggled: isAlwaysShowStatusBar,
                onClick: toggleAlwaysShowStatusBar
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/library/components/SettingsMenu.tsx",
                lineNumber: 327,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$MenuItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                label: _('Keep Screen Awake'),
                toggled: isScreenWakeLock,
                onClick: toggleScreenWakeLock
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/library/components/SettingsMenu.tsx",
                lineNumber: 333,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            appService?.isAndroidApp && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$MenuItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                label: _(_('Background Read Aloud')),
                toggled: alwaysInForeground,
                onClick: toggleAlwaysInForeground
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/library/components/SettingsMenu.tsx",
                lineNumber: 339,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$MenuItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                label: _('Reload Page'),
                onClick: handleReloadPage
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/library/components/SettingsMenu.tsx",
                lineNumber: 345,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$MenuItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                label: themeModeLabel,
                Icon: themeMode === 'dark' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiMoon"] : themeMode === 'light' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiSun"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$tb$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TbSunMoon"],
                onClick: cycleThemeMode
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/library/components/SettingsMenu.tsx",
                lineNumber: 346,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$MenuItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                label: _('Settings'),
                Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiGear"],
                onClick: openSettingsDialog
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/library/components/SettingsMenu.tsx",
                lineNumber: 351,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            appService?.canCustomizeRootDir && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                        "aria-hidden": "true",
                        className: "border-base-200 my-1"
                    }, void 0, false, {
                        fileName: "[project]/apps/readest-app/src/app/library/components/SettingsMenu.tsx",
                        lineNumber: 354,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$MenuItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        label: _('Advanced Settings'),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "flex flex-col",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$MenuItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    label: _('Change Data Location'),
                                    noIcon: !appService?.isAndroidApp,
                                    onClick: handleSetRootDir
                                }, void 0, false, {
                                    fileName: "[project]/apps/readest-app/src/app/library/components/SettingsMenu.tsx",
                                    lineNumber: 357,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                appService?.isAndroidApp && appService?.distChannel !== 'playstore' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$MenuItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    label: _('Save Book Cover'),
                                    tooltip: _('Auto-save last book cover'),
                                    description: savedBookCoverForLockScreen ? savedBookCoverDescription : '',
                                    toggled: !!savedBookCoverForLockScreen,
                                    onClick: handleSetSavedBookCoverForLockScreen
                                }, void 0, false, {
                                    fileName: "[project]/apps/readest-app/src/app/library/components/SettingsMenu.tsx",
                                    lineNumber: 363,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/readest-app/src/app/library/components/SettingsMenu.tsx",
                            lineNumber: 356,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/apps/readest-app/src/app/library/components/SettingsMenu.tsx",
                        lineNumber: 355,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                "aria-hidden": "true",
                className: "border-base-200 my-1"
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/library/components/SettingsMenu.tsx",
                lineNumber: 375,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            user && userProfilePlan === 'free' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$MenuItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                label: _('Upgrade to Readest Premium'),
                onClick: handleUpgrade
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/library/components/SettingsMenu.tsx",
                lineNumber: 377,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWebAppPlatform"])() && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$MenuItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                label: _('Download Readest'),
                onClick: downloadReadest
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/library/components/SettingsMenu.tsx",
                lineNumber: 379,
                columnNumber: 30
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$MenuItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                label: _('About Readest'),
                onClick: showAboutReadest
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/library/components/SettingsMenu.tsx",
                lineNumber: 380,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$MenuItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                label: _('Help improve Readest'),
                description: isTelemetryEnabled ? _('Sharing anonymized statistics') : '',
                toggled: isTelemetryEnabled,
                onClick: toggleTelemetry
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/library/components/SettingsMenu.tsx",
                lineNumber: 381,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/readest-app/src/app/library/components/SettingsMenu.tsx",
        lineNumber: 235,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(SettingsMenu, "8AeHd81/kzbV30nikOFFlDDRz3w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEnv"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useQuotaStats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuotaStats"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$themeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSettingsStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useResponsiveSize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResponsiveSize"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTransferQueue$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransferQueue"]
    ];
});
_c = SettingsMenu;
const __TURBOPACK__default__export__ = SettingsMenu;
var _c;
__turbopack_context__.k.register(_c, "SettingsMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/readest-app/src/app/library/components/ImportMenu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.28.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/hooks/useTranslation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-icons@5.4.0_react@19.2.0/node_modules/react-icons/io5/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-icons@5.4.0_react@19.2.0/node_modules/react-icons/md/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$MenuItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/components/MenuItem.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$Menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/components/Menu.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
const ImportMenu = ({ setIsDropdownOpen, onImportBooksFromFiles, onImportBooksFromDirectory, onOpenCatalogManager })=>{
    _s();
    const _ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const handleImportFromFiles = ()=>{
        onImportBooksFromFiles();
        setIsDropdownOpen?.(false);
    };
    const handleImportFromDirectory = ()=>{
        onImportBooksFromDirectory?.();
        setIsDropdownOpen?.(false);
    };
    const handleOpenCatalogManager = ()=>{
        onOpenCatalogManager();
        setIsDropdownOpen?.(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$Menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('dropdown-content bg-base-100 rounded-box z-[1] mt-3 p-2 shadow'),
        onCancel: ()=>setIsDropdownOpen?.(false),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$MenuItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                label: _('From Local File'),
                Icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoFileTray"], {
                    className: "h-5 w-5"
                }, void 0, false, {
                    fileName: "[project]/apps/readest-app/src/app/library/components/ImportMenu.tsx",
                    lineNumber: 46,
                    columnNumber: 15
                }, void 0),
                onClick: handleImportFromFiles
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/library/components/ImportMenu.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            onImportBooksFromDirectory && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$MenuItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                label: _('From Directory'),
                Icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoFileTray"], {
                    className: "h-5 w-5"
                }, void 0, false, {
                    fileName: "[project]/apps/readest-app/src/app/library/components/ImportMenu.tsx",
                    lineNumber: 52,
                    columnNumber: 17
                }, void 0),
                onClick: handleImportFromDirectory
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/library/components/ImportMenu.tsx",
                lineNumber: 50,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$MenuItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                label: _('Online Library'),
                Icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdRssFeed"], {
                    className: "h-5 w-5"
                }, void 0, false, {
                    fileName: "[project]/apps/readest-app/src/app/library/components/ImportMenu.tsx",
                    lineNumber: 58,
                    columnNumber: 15
                }, void 0),
                onClick: handleOpenCatalogManager
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/library/components/ImportMenu.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/readest-app/src/app/library/components/ImportMenu.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ImportMenu, "/1wxBjgIhZiLx4/tsSGZM/dW09g=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = ImportMenu;
const __TURBOPACK__default__export__ = ImportMenu;
var _c;
__turbopack_context__.k.register(_c, "ImportMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/readest-app/src/app/library/components/ViewMenu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.28.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.28.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/context/EnvContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/settingsStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/hooks/useTranslation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$helpers$2f$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/helpers/settings.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$nav$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/nav.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$settings$2f$NumberInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/components/settings/NumberInput.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$MenuItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/components/MenuItem.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$Menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/components/Menu.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
const ViewMenu = ({ setIsDropdownOpen })=>{
    _s();
    const _ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const { envConfig } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEnv"])();
    const { settings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSettingsStore"])();
    const viewMode = settings.libraryViewMode;
    const sortBy = settings.librarySortBy;
    const isAscending = settings.librarySortAscending;
    const coverFit = settings.libraryCoverFit;
    const autoColumns = settings.libraryAutoColumns;
    const columns = settings.libraryColumns;
    const viewOptions = [
        {
            label: _('List'),
            value: 'list'
        },
        {
            label: _('Grid'),
            value: 'grid'
        }
    ];
    const coverFitOptions = [
        {
            label: _('Crop'),
            value: 'crop'
        },
        {
            label: _('Fit'),
            value: 'fit'
        }
    ];
    const sortByOptions = [
        {
            label: _('Title'),
            value: 'title'
        },
        {
            label: _('Author'),
            value: 'author'
        },
        {
            label: _('Format'),
            value: 'format'
        },
        {
            label: _('Date Read'),
            value: 'updated'
        },
        {
            label: _('Date Added'),
            value: 'created'
        },
        {
            label: _('Date Published'),
            value: 'published'
        }
    ];
    const sortingOptions = [
        {
            label: _('Ascending'),
            value: true
        },
        {
            label: _('Descending'),
            value: false
        }
    ];
    const handleSetViewMode = async (value)=>{
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$helpers$2f$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveSysSettings"])(envConfig, 'libraryViewMode', value);
        setIsDropdownOpen?.(false);
        const params = new URLSearchParams(searchParams?.toString());
        params.set('view', value);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$nav$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navigateToLibrary"])(router, `${params.toString()}`);
    };
    const handleToggleCropCovers = async (value)=>{
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$helpers$2f$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveSysSettings"])(envConfig, 'libraryCoverFit', value);
        setIsDropdownOpen?.(false);
        const params = new URLSearchParams(searchParams?.toString());
        params.set('cover', value);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$nav$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navigateToLibrary"])(router, `${params.toString()}`);
    };
    const handleToggleAutoColumns = async ()=>{
        const newValue = !settings.libraryAutoColumns;
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$helpers$2f$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveSysSettings"])(envConfig, 'libraryAutoColumns', newValue);
    };
    const handleSetColumns = async (value)=>{
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$helpers$2f$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveSysSettings"])(envConfig, 'libraryColumns', value);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$helpers$2f$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveSysSettings"])(envConfig, 'libraryAutoColumns', false);
    };
    const handleSetSortBy = async (value)=>{
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$helpers$2f$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveSysSettings"])(envConfig, 'librarySortBy', value);
        setIsDropdownOpen?.(false);
        const params = new URLSearchParams(searchParams?.toString());
        params.set('sort', value);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$nav$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navigateToLibrary"])(router, `${params.toString()}`);
    };
    const handleSetSortAscending = async (value)=>{
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$helpers$2f$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveSysSettings"])(envConfig, 'librarySortAscending', value);
        setIsDropdownOpen?.(false);
        const params = new URLSearchParams(searchParams?.toString());
        params.set('order', value ? 'asc' : 'desc');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$nav$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navigateToLibrary"])(router, `${params.toString()}`);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$Menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        className: "view-menu dropdown-content no-triangle z-20 mt-2 shadow-2xl",
        onCancel: ()=>setIsDropdownOpen?.(false),
        children: [
            viewOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$MenuItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    label: option.label,
                    buttonClass: "h-8",
                    toggled: viewMode === option.value,
                    onClick: ()=>handleSetViewMode(option.value)
                }, option.value, false, {
                    fileName: "[project]/apps/readest-app/src/app/library/components/ViewMenu.tsx",
                    lineNumber: 109,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                "aria-hidden": "true",
                className: "border-base-200 my-1"
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/library/components/ViewMenu.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$MenuItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                label: _('Columns'),
                buttonClass: "h-8",
                labelClass: "text-sm sm:text-xs",
                disabled: true
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/library/components/ViewMenu.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$MenuItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                label: _('Auto'),
                buttonClass: "h-10",
                toggled: autoColumns,
                disabled: viewMode === 'list',
                siblings: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$settings$2f$NumberInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: "!h-10 !p-0 !pe-1 !ps-0",
                    inputClassName: `!p-0 text-center text-base sm:text-sm !w-10 !h-6 !pe-0 ${autoColumns ? 'opacity-50' : ''}`,
                    label: '',
                    value: columns,
                    disabled: viewMode === 'list',
                    onChange: handleSetColumns,
                    min: window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3,
                    max: window.innerWidth < 640 ? 4 : window.innerWidth < 1024 ? 6 : 12
                }, void 0, false, {
                    fileName: "[project]/apps/readest-app/src/app/library/components/ViewMenu.tsx",
                    lineNumber: 125,
                    columnNumber: 11
                }, void 0),
                onClick: ()=>handleToggleAutoColumns()
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/library/components/ViewMenu.tsx",
                lineNumber: 119,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                "aria-hidden": "true",
                className: "border-base-200 my-1"
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/library/components/ViewMenu.tsx",
                lineNumber: 138,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$MenuItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                label: _('Book Covers'),
                buttonClass: "h-8",
                labelClass: "text-sm sm:text-xs",
                disabled: true
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/library/components/ViewMenu.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            coverFitOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$MenuItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    label: option.label,
                    buttonClass: "h-8",
                    toggled: coverFit === option.value,
                    onClick: ()=>handleToggleCropCovers(option.value)
                }, option.value, false, {
                    fileName: "[project]/apps/readest-app/src/app/library/components/ViewMenu.tsx",
                    lineNumber: 146,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                "aria-hidden": "true",
                className: "border-base-200 my-1"
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/library/components/ViewMenu.tsx",
                lineNumber: 154,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$MenuItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                label: _('Sort by...'),
                buttonClass: "h-8",
                labelClass: "text-sm sm:text-xs",
                disabled: true
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/library/components/ViewMenu.tsx",
                lineNumber: 155,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            sortByOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$MenuItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    label: option.label,
                    buttonClass: "h-8",
                    toggled: sortBy === option.value,
                    onClick: ()=>handleSetSortBy(option.value)
                }, option.value, false, {
                    fileName: "[project]/apps/readest-app/src/app/library/components/ViewMenu.tsx",
                    lineNumber: 162,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                "aria-hidden": "true",
                className: "border-base-200 my-1"
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/library/components/ViewMenu.tsx",
                lineNumber: 170,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            sortingOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$MenuItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    label: option.label,
                    buttonClass: "h-8",
                    toggled: isAscending === option.value,
                    onClick: ()=>handleSetSortAscending(option.value)
                }, option.value.toString(), false, {
                    fileName: "[project]/apps/readest-app/src/app/library/components/ViewMenu.tsx",
                    lineNumber: 172,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/readest-app/src/app/library/components/ViewMenu.tsx",
        lineNumber: 104,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ViewMenu, "21LZjm+XUVSHuOdIqnQ3ane3dic=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEnv"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSettingsStore"]
    ];
});
_c = ViewMenu;
const __TURBOPACK__default__export__ = ViewMenu;
var _c;
__turbopack_context__.k.register(_c, "ViewMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/readest-app/src/app/library/components/ScanBooksButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScanBooksButton",
    ()=>ScanBooksButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.28.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.28.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$bi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-icons@5.4.0_react@19.2.0/node_modules/react-icons/bi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/context/EnvContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$libraryStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/libraryStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/hooks/useTranslation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$libs$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/libs/storage.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/event.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$book$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/book.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$path$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/path.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
const ScanBooksButton = ()=>{
    _s();
    const _ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const { envConfig } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEnv"])();
    const { library, setLibrary } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$libraryStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLibraryStore"])();
    const [isScanning, setIsScanning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const extToFormat = (ext)=>{
        switch((ext || '').toLowerCase()){
            case 'epub':
                return 'EPUB';
            case 'pdf':
                return 'PDF';
            case 'mobi':
                return 'MOBI';
            case 'azw':
                return 'AZW';
            case 'azw3':
                return 'AZW3';
            case 'cbz':
                return 'CBZ';
            case 'fb2':
                return 'FB2';
            case 'fbz':
                return 'FBZ';
            case 'txt':
                return 'TXT';
            case 'md':
                return 'MD';
            default:
                return 'EPUB';
        }
    };
    const handleScanBooks = async ()=>{
        if (isScanning) return;
        setIsScanning(true);
        await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eventDispatcher"].dispatch('toast', {
            type: 'info',
            timeout: 0,
            message: _('Scanning books directory...')
        });
        try {
            console.log('[ScanBooks] 1. Starting scan books process');
            const appService = await envConfig.getAppService();
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$libs$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scanBooks"])();
            console.log('[ScanBooks] 2. Scan completed, found', result.count, 'books:', result.books?.map((b)=>b.relativePath));
            if (result.count === 0) {
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eventDispatcher"].dispatch('toast', {
                    type: 'success',
                    timeout: 3000,
                    message: _('No new books found')
                });
                return;
            }
            // Import scanned books
            const importedBooks = [];
            const newBooks = [];
            const existingBooks = new Map(library.map((b)=>[
                    b.hash,
                    b
                ]));
            console.log('[ScanBooks] 3. Current library has', library.length, 'books');
            console.log('[ScanBooks] 4. Found', result.books.length, 'books to process');
            let failedBooks = [];
            // Identify missing files: present in library but not on disk
            const scannedHashes = new Set(result.books.map((b)=>b.hash || b.relativePath));
            const missingBooks = library.filter((b)=>!scannedHashes.has(b.hash));
            // First pass: Identify books using backend-calculated hash
            // Skip downloading files for books that already exist in library
            const booksToImport = [];
            const alreadyExists = [];
            for (const scannedBook of result.books){
                if (scannedBook.hash && existingBooks.has(scannedBook.hash)) {
                    // Book already exists - check if moved
                    const existingBook = existingBooks.get(scannedBook.hash);
                    if (existingBook.relativePath !== scannedBook.relativePath) {
                        alreadyExists.push({
                            scannedBook,
                            existingBook
                        });
                    }
                    console.log('[ScanBooks] 5a. Book exists (hash match):', scannedBook.relativePath);
                } else {
                    // New book or hash unavailable - need to import
                    booksToImport.push(scannedBook);
                    console.log('[ScanBooks] 5b. New book to import:', scannedBook.relativePath);
                }
            }
            console.log('[ScanBooks] 5. Books to import:', booksToImport.length, ', already existing:', alreadyExists.length, ', missing:', missingBooks.length);
            // Handle already-existing books that may have moved
            for (const { scannedBook, existingBook } of alreadyExists){
                try {
                    console.log('[ScanBooks] Book moved: from', existingBook.relativePath, 'to', scannedBook.relativePath);
                    // 移动封面文件
                    const oldCoverPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$book$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCoverFilename"])(existingBook);
                    const newCoverPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$book$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCoverFilename"])({
                        ...existingBook,
                        relativePath: scannedBook.relativePath
                    });
                    if (oldCoverPath !== newCoverPath && await appService.exists(oldCoverPath, 'Books')) {
                        console.log('[ScanBooks] Moving cover from:', oldCoverPath, 'to:', newCoverPath);
                        const coverFile = await appService.openFile(oldCoverPath, 'Books');
                        await appService.writeFile(newCoverPath, 'Books', coverFile);
                        await appService.deleteFile(oldCoverPath, 'Books');
                        console.log('[ScanBooks] ✓ Cover moved successfully');
                    }
                    // 移动配置文件
                    const oldConfigPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$book$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConfigFilename"])(existingBook);
                    const newConfigPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$book$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConfigFilename"])({
                        ...existingBook,
                        relativePath: scannedBook.relativePath
                    });
                    if (oldConfigPath !== newConfigPath && await appService.exists(oldConfigPath, 'Books')) {
                        console.log('[ScanBooks] Moving config from:', oldConfigPath, 'to:', newConfigPath);
                        const configContent = await appService.readFile(oldConfigPath, 'Books', 'text');
                        await appService.writeFile(newConfigPath, 'Books', configContent);
                        await appService.deleteFile(oldConfigPath, 'Books');
                        console.log('[ScanBooks] ✓ Config moved successfully');
                    }
                    // 更新 relativePath
                    existingBook.relativePath = scannedBook.relativePath;
                } catch (moveError) {
                    console.warn('[ScanBooks] Failed to move metadata files:', moveError);
                }
            }
            // Second pass: create metadata-only records for new books (no file download here)
            const now = Date.now();
            for (const scannedBook of booksToImport){
                try {
                    console.log('[ScanBooks] 6. Adding metadata-only book:', scannedBook.relativePath);
                    const directory = scannedBook.relativePath.split('/').slice(0, -1).join('/');
                    const groupName = directory || '';
                    const title = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$path$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBaseFilename"])(scannedBook.fileName);
                    const book = {
                        hash: scannedBook.hash || scannedBook.relativePath,
                        format: extToFormat(scannedBook.ext),
                        title,
                        sourceTitle: title,
                        author: _('Unknown Author'),
                        groupName,
                        relativePath: scannedBook.relativePath,
                        filePath: scannedBook.filePath,
                        createdAt: now,
                        updatedAt: now,
                        deletedAt: null
                    };
                    const coverPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$book$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCoverFilename"])(book);
                    book.coverImageUrl = `/api/storage/file?filePath=${encodeURIComponent(coverPath)}`;
                    importedBooks.push(book);
                    newBooks.push(book);
                    console.log('[ScanBooks] 7. Metadata entry created, hash:', book.hash);
                } catch (error) {
                    const errorMsg = error?.message || 'Unknown error';
                    console.error('[ScanBooks] Error creating metadata for book:', scannedBook.relativePath, error);
                    failedBooks.push({
                        name: scannedBook.fileName,
                        error: errorMsg
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eventDispatcher"].dispatch('toast', {
                        type: 'error',
                        timeout: 4000,
                        message: _('Failed to add "{{name}}": {{error}}', {
                            name: scannedBook.fileName,
                            error: errorMsg
                        })
                    });
                }
            }
            // Build final library: remove missing, apply moves, add new
            const movedMap = new Map(alreadyExists.map(({ scannedBook })=>[
                    scannedBook.hash || scannedBook.relativePath,
                    scannedBook.relativePath
                ]));
            const missingHashes = new Set(missingBooks.map((b)=>b.hash));
            const updatedExisting = library.filter((b)=>!missingHashes.has(b.hash)).map((b)=>{
                const newPath = movedMap.get(b.hash);
                return newPath ? {
                    ...b,
                    relativePath: newPath
                } : b;
            });
            const finalLibrary = Array.from(new Map([
                ...updatedExisting,
                ...importedBooks
            ].map((b)=>[
                    b.hash,
                    b
                ])).values());
            setLibrary(finalLibrary);
            await appService.saveLibraryBooks(finalLibrary);
            console.log('[ScanBooks] 9. Imported', importedBooks.length, 'books,', newBooks.length, 'are new,', missingBooks.length, 'missing removed,', failedBooks.length, 'failed');
            if (importedBooks.length > 0 || alreadyExists.length > 0 || missingBooks.length > 0) {
                let message = '';
                if (newBooks.length > 0) {
                    const bookTitles = newBooks.map((b)=>b.title).join(', ');
                    message = newBooks.length === 1 ? _('Found 1 new book: {{title}}', {
                        title: bookTitles
                    }) : _('Found {{count}} new books: {{titles}}', {
                        count: newBooks.length,
                        titles: bookTitles
                    });
                }
                if (alreadyExists.length > 0) {
                    const msg2 = _('{{count}} book(s) detected as moved', {
                        count: alreadyExists.length
                    });
                    message = message ? message + '\n' + msg2 : msg2;
                }
                if (missingBooks.length > 0) {
                    const msg3 = _('{{count}} book file(s) missing and removed from cache', {
                        count: missingBooks.length
                    });
                    message = message ? message + '\n' + msg3 : msg3;
                }
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eventDispatcher"].dispatch('toast', {
                    type: 'success',
                    timeout: 5000,
                    message: message || _('Scan completed')
                });
                // 显示失败的书籍摘要
                if (failedBooks.length > 0 && failedBooks.length <= 3) {
                    const failedNames = failedBooks.map((f)=>f.name).join(', ');
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eventDispatcher"].dispatch('toast', {
                        type: 'warning',
                        timeout: 6000,
                        message: _('Failed to import {{count}} book(s): {{names}}', {
                            count: failedBooks.length,
                            names: failedNames
                        })
                    });
                } else if (failedBooks.length > 3) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eventDispatcher"].dispatch('toast', {
                        type: 'warning',
                        timeout: 6000,
                        message: _('Failed to import {{count}} books. Check console for details.', {
                            count: failedBooks.length
                        })
                    });
                }
            } else {
                if (failedBooks.length > 0) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eventDispatcher"].dispatch('toast', {
                        type: 'error',
                        timeout: 5000,
                        message: _('All {{count}} book(s) failed to import. Check console for details.', {
                            count: failedBooks.length
                        })
                    });
                } else {
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eventDispatcher"].dispatch('toast', {
                        type: 'info',
                        timeout: 3000,
                        message: _('No new books found, library has {{count}} book(s)', {
                            count: library.length
                        })
                    });
                }
            }
        } catch (error) {
            console.error('[Scan] Error:', error);
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eventDispatcher"].dispatch('toast', {
                type: 'error',
                timeout: 5000,
                message: _('Failed to scan books: {{error}}', {
                    error: error?.message || 'Unknown error'
                })
            });
        } finally{
            setIsScanning(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: handleScanBooks,
        disabled: isScanning,
        className: "btn btn-ghost btn-sm gap-2",
        "aria-label": _('Scan books directory'),
        title: _('Scan books directory for new files'),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$bi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BiScan"], {
                className: isScanning ? 'animate-spin' : '',
                size: 18
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/library/components/ScanBooksButton.tsx",
                lineNumber: 295,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            _('Scan Books')
        ]
    }, void 0, true, {
        fileName: "[project]/apps/readest-app/src/app/library/components/ScanBooksButton.tsx",
        lineNumber: 288,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ScanBooksButton, "GmfIbu8y5LjcqLp04CoxVgK32Kc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEnv"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$libraryStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLibraryStore"]
    ];
});
_c = ScanBooksButton;
var _c;
__turbopack_context__.k.register(_c, "ScanBooksButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/readest-app/src/app/library/components/LibraryHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.28.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.28.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.28.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.28.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-icons@5.4.0_react@19.2.0/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-icons@5.4.0_react@19.2.0/node_modules/react-icons/pi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-icons@5.4.0_react@19.2.0/node_modules/react-icons/md/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-icons@5.4.0_react@19.2.0/node_modules/react-icons/io/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/context/EnvContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$themeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/themeStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/hooks/useTranslation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$libraryStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/libraryStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTrafficLight$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/hooks/useTrafficLight.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useResponsiveSize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/hooks/useResponsiveSize.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$debounce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/debounce.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useShortcuts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/hooks/useShortcuts.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$WindowButtons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/components/WindowButtons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$Dropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/components/Dropdown.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$library$2f$components$2f$SettingsMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/app/library/components/SettingsMenu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$library$2f$components$2f$ImportMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/app/library/components/ImportMenu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$library$2f$components$2f$ViewMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/app/library/components/ViewMenu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$library$2f$components$2f$ScanBooksButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/app/library/components/ScanBooksButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/environment.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const LibraryHeader = ({ isSelectMode, isSelectAll, onImportBooksFromFiles, onImportBooksFromDirectory, onOpenCatalogManager, onToggleSelectMode, onSelectAll, onDeselectAll, onReconcilePaths })=>{
    _s();
    const _ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const { appService } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEnv"])();
    const { systemUIVisible, statusBarHeight } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$themeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeStore"])();
    const { currentBookshelf } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$libraryStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLibraryStore"])();
    const { isTrafficLightVisible } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTrafficLight$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTrafficLight"])();
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(searchParams?.get('q') ?? '');
    const headerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const iconSize18 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useResponsiveSize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResponsiveSize"])(18);
    const { safeAreaInsets: insets } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$themeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeStore"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useShortcuts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        onToggleSelectMode
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const debouncedUpdateQueryParam = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$debounce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["debounce"])({
        "LibraryHeader.useCallback[debouncedUpdateQueryParam]": (value)=>{
            const params = new URLSearchParams(searchParams?.toString());
            if (value) {
                params.set('q', value);
            } else {
                params.delete('q');
            }
            router.push(`?${params.toString()}`);
        }
    }["LibraryHeader.useCallback[debouncedUpdateQueryParam]"], 500), [
        searchParams
    ]);
    const handleSearchChange = (e)=>{
        const newQuery = e.target.value;
        setSearchQuery(newQuery);
        debouncedUpdateQueryParam(newQuery);
    };
    const windowButtonVisible = appService?.hasWindowBar && !isTrafficLightVisible;
    const currentBooksCount = currentBookshelf.reduce((acc, item)=>acc + ('books' in item ? item.books.length : 1), 0);
    if (!insets) return null;
    const isMobile = appService?.isMobile || window.innerWidth <= 640;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: headerRef,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('titlebar z-10 flex h-[52px] w-full items-center py-2 pr-4 sm:h-[48px]', windowButtonVisible ? 'sm:pr-4' : 'sm:pr-6', isTrafficLightVisible ? 'pl-16' : 'pl-0 sm:pl-2'),
        style: {
            marginTop: appService?.hasSafeAreaInset ? `max(${insets.top}px, ${systemUIVisible ? statusBarHeight : 0}px)` : '0px'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex w-full items-center justify-between space-x-6 sm:space-x-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "exclude-title-bar-mousedown relative flex w-full items-center pl-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative flex h-9 w-full items-center sm:h-7",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-base-content/50 absolute ps-3",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaSearch"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/readest-app/src/app/library/components/LibraryHeader.tsx",
                                        lineNumber: 117,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/apps/readest-app/src/app/library/components/LibraryHeader.tsx",
                                    lineNumber: 116,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: searchQuery,
                                    placeholder: currentBooksCount > 1 ? _('Search in {{count}} Book(s)...', {
                                        count: currentBooksCount
                                    }) : _('Search Books...'),
                                    onChange: handleSearchChange,
                                    spellCheck: "false",
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('search-input input h-9 w-full rounded-full pr-[30%] ps-10 sm:h-7', 'bg-base-300/45 border-0', 'font-sans text-sm font-light', 'placeholder:text-base-content/50 truncate', 'focus:outline-none focus:ring-0')
                                }, void 0, false, {
                                    fileName: "[project]/apps/readest-app/src/app/library/components/LibraryHeader.tsx",
                                    lineNumber: 119,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/readest-app/src/app/library/components/LibraryHeader.tsx",
                            lineNumber: 115,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-base-content/50 absolute right-4 flex items-center space-x-2 sm:space-x-4",
                            children: [
                                searchQuery && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>{
                                        setSearchQuery('');
                                        debouncedUpdateQueryParam('');
                                    },
                                    className: "text-base-content/40 hover:text-base-content/60 pe-1",
                                    "aria-label": _('Clear Search'),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoMdCloseCircle"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/readest-app/src/app/library/components/LibraryHeader.tsx",
                                        lineNumber: 151,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/apps/readest-app/src/app/library/components/LibraryHeader.tsx",
                                    lineNumber: 142,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "bg-base-content/50 mx-2 h-4 w-[0.5px]"
                                }, void 0, false, {
                                    fileName: "[project]/apps/readest-app/src/app/library/components/LibraryHeader.tsx",
                                    lineNumber: 154,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$Dropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    label: _('Import Books'),
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('exclude-title-bar-mousedown dropdown-bottom dropdown-center flex h-6 cursor-pointer justify-center'),
                                    buttonClassName: "p-0 h-6 min-h-6 w-6 flex touch-target items-center justify-center !bg-transparent",
                                    toggleButton: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiPlus"], {
                                        role: "none",
                                        className: "m-0.5 h-5 w-5"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/readest-app/src/app/library/components/LibraryHeader.tsx",
                                        lineNumber: 161,
                                        columnNumber: 29
                                    }, void 0),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$library$2f$components$2f$ImportMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        onImportBooksFromFiles: onImportBooksFromFiles,
                                        onImportBooksFromDirectory: onImportBooksFromDirectory,
                                        onOpenCatalogManager: onOpenCatalogManager
                                    }, void 0, false, {
                                        fileName: "[project]/apps/readest-app/src/app/library/components/LibraryHeader.tsx",
                                        lineNumber: 163,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/apps/readest-app/src/app/library/components/LibraryHeader.tsx",
                                    lineNumber: 155,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                isMobile ? null : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onToggleSelectMode,
                                    "aria-label": _('Select Books'),
                                    title: _('Select Books'),
                                    className: "h-6",
                                    children: isSelectMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiSelectionAllFill"], {
                                        role: "button",
                                        className: "text-base-content/60 h-6 w-6"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/readest-app/src/app/library/components/LibraryHeader.tsx",
                                        lineNumber: 177,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiSelectionAll"], {
                                        role: "button",
                                        className: "text-base-content/60 h-6 w-6"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/readest-app/src/app/library/components/LibraryHeader.tsx",
                                        lineNumber: 179,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/apps/readest-app/src/app/library/components/LibraryHeader.tsx",
                                    lineNumber: 170,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/readest-app/src/app/library/components/LibraryHeader.tsx",
                            lineNumber: 140,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/readest-app/src/app/library/components/LibraryHeader.tsx",
                    lineNumber: 114,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                isSelectMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('flex h-full items-center', 'w-max-[72px] w-min-[72px] sm:w-max-[80px] sm:w-min-[80px]'),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: isSelectAll ? onDeselectAll : onSelectAll,
                        className: "btn btn-ghost text-base-content/85 h-8 min-h-8 w-[72px] p-0 sm:w-[80px]",
                        "aria-label": isSelectAll ? _('Deselect') : _('Select All'),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-sans text-base font-normal sm:text-sm",
                            children: isSelectAll ? _('Deselect') : _('Select All')
                        }, void 0, false, {
                            fileName: "[project]/apps/readest-app/src/app/library/components/LibraryHeader.tsx",
                            lineNumber: 197,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/apps/readest-app/src/app/library/components/LibraryHeader.tsx",
                        lineNumber: 192,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/apps/readest-app/src/app/library/components/LibraryHeader.tsx",
                    lineNumber: 186,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex h-full items-center gap-x-2 sm:gap-x-4",
                    children: [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWebAppPlatform"])() && ("TURBOPACK compile-time value", "local") === 'local' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$library$2f$components$2f$ScanBooksButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScanBooksButton"], {}, void 0, false, {
                            fileName: "[project]/apps/readest-app/src/app/library/components/LibraryHeader.tsx",
                            lineNumber: 205,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$Dropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            label: _('View Menu'),
                            className: "exclude-title-bar-mousedown dropdown-bottom dropdown-end",
                            buttonClassName: "btn btn-ghost h-8 min-h-8 w-8 p-0",
                            toggleButton: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiDotsThreeCircle"], {
                                role: "none",
                                size: iconSize18
                            }, void 0, false, {
                                fileName: "[project]/apps/readest-app/src/app/library/components/LibraryHeader.tsx",
                                lineNumber: 211,
                                columnNumber: 29
                            }, void 0),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$library$2f$components$2f$ViewMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/apps/readest-app/src/app/library/components/LibraryHeader.tsx",
                                lineNumber: 213,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/apps/readest-app/src/app/library/components/LibraryHeader.tsx",
                            lineNumber: 207,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$Dropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            label: _('Settings Menu'),
                            className: "exclude-title-bar-mousedown dropdown-bottom dropdown-end",
                            buttonClassName: "btn btn-ghost h-8 min-h-8 w-8 p-0",
                            toggleButton: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdOutlineMenu"], {
                                role: "none",
                                size: iconSize18
                            }, void 0, false, {
                                fileName: "[project]/apps/readest-app/src/app/library/components/LibraryHeader.tsx",
                                lineNumber: 219,
                                columnNumber: 29
                            }, void 0),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$library$2f$components$2f$SettingsMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/apps/readest-app/src/app/library/components/LibraryHeader.tsx",
                                lineNumber: 221,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/apps/readest-app/src/app/library/components/LibraryHeader.tsx",
                            lineNumber: 215,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        appService?.hasWindowBar && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$WindowButtons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            headerRef: headerRef,
                            showMinimize: windowButtonVisible,
                            showMaximize: windowButtonVisible,
                            showClose: windowButtonVisible
                        }, void 0, false, {
                            fileName: "[project]/apps/readest-app/src/app/library/components/LibraryHeader.tsx",
                            lineNumber: 224,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/readest-app/src/app/library/components/LibraryHeader.tsx",
                    lineNumber: 203,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/apps/readest-app/src/app/library/components/LibraryHeader.tsx",
            lineNumber: 113,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/readest-app/src/app/library/components/LibraryHeader.tsx",
        lineNumber: 100,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(LibraryHeader, "JzHuEghjVpbOEvvhYxsWXCUOTVU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEnv"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$themeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$libraryStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLibraryStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTrafficLight$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTrafficLight"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useResponsiveSize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResponsiveSize"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$themeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useShortcuts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = LibraryHeader;
const __TURBOPACK__default__export__ = LibraryHeader;
var _c;
__turbopack_context__.k.register(_c, "LibraryHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/readest-app/src/app/library/components/ReadingProgress.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.28.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.28.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const getProgressPercentage = (book)=>{
    if (!book.progress || !book.progress[1]) {
        return null;
    }
    if (book.progress && book.progress[1] === 1) {
        return 100;
    }
    const percentage = Math.round(book.progress[0] / book.progress[1] * 100);
    return Math.max(0, Math.min(100, percentage));
};
const ReadingProgress = /*#__PURE__*/ _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_c = _s(({ book })=>{
    _s();
    const progressPercentage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ReadingProgress.useMemo[progressPercentage]": ()=>getProgressPercentage(book)
    }["ReadingProgress.useMemo[progressPercentage]"], [
        book
    ]);
    if (progressPercentage === null || Number.isNaN(progressPercentage)) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "text-neutral-content/70 flex justify-between text-xs",
        role: "status",
        "aria-label": `${progressPercentage}%`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: [
                progressPercentage,
                "%"
            ]
        }, void 0, true, {
            fileName: "[project]/apps/readest-app/src/app/library/components/ReadingProgress.tsx",
            lineNumber: 36,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/readest-app/src/app/library/components/ReadingProgress.tsx",
        lineNumber: 31,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
}, "oACHvurgYR2DiVJwvoEV7hy9yH4="), (prevProps, nextProps)=>{
    return prevProps.book.hash === nextProps.book.hash && prevProps.book.updatedAt === nextProps.book.updatedAt;
}), "oACHvurgYR2DiVJwvoEV7hy9yH4=");
_c1 = ReadingProgress;
ReadingProgress.displayName = 'ReadingProgress';
const __TURBOPACK__default__export__ = ReadingProgress;
var _c, _c1;
__turbopack_context__.k.register(_c, "ReadingProgress$memo");
__turbopack_context__.k.register(_c1, "ReadingProgress");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/readest-app/src/app/library/components/BookItem.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.28.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-icons@5.4.0_react@19.2.0/node_modules/react-icons/md/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$lia$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-icons@5.4.0_react@19.2.0/node_modules/react-icons/lia/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/context/EnvContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/context/AuthContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.28.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/hooks/useTranslation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useResponsiveSize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/hooks/useResponsiveSize.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$nav$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/nav.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$book$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/book.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$library$2f$components$2f$ReadingProgress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/app/library/components/ReadingProgress.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$BookCover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/components/BookCover.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
const BookItem = ({ book, mode, coverFit, isSelectMode, bookSelected, transferProgress, handleBookUpload, handleBookDownload, showBookDetailsModal })=>{
    _s();
    const _ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const { appService } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEnv"])();
    const iconSize15 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useResponsiveSize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResponsiveSize"])(15);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        role: "none",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('book-item flex', mode === 'grid' && 'h-full flex-col justify-end', mode === 'list' && 'h-28 flex-row gap-4 overflow-hidden', mode === 'list' ? 'library-list-item' : 'library-grid-item', appService?.hasContextMenu ? 'cursor-pointer' : ''),
        onClick: (e)=>e.stopPropagation(),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('bookitem-main relative flex aspect-[28/41] justify-center rounded', coverFit === 'crop' && 'overflow-hidden shadow-md', mode === 'grid' && 'items-end', mode === 'list' && 'min-w-20 items-center'),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$BookCover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        mode: mode,
                        book: book,
                        coverFit: coverFit,
                        showSpine: false,
                        imageClassName: "rounded shadow-md"
                    }, void 0, false, {
                        fileName: "[project]/apps/readest-app/src/app/library/components/BookItem.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    bookSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-black opacity-30 transition-opacity duration-300"
                    }, void 0, false, {
                        fileName: "[project]/apps/readest-app/src/app/library/components/BookItem.tsx",
                        lineNumber: 80,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    isSelectMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-1 right-1",
                        children: bookSelected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdCheckCircle"], {
                            className: "fill-blue-500"
                        }, void 0, false, {
                            fileName: "[project]/apps/readest-app/src/app/library/components/BookItem.tsx",
                            lineNumber: 85,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdCheckCircleOutline"], {
                            className: "fill-gray-300 drop-shadow-sm"
                        }, void 0, false, {
                            fileName: "[project]/apps/readest-app/src/app/library/components/BookItem.tsx",
                            lineNumber: 87,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/apps/readest-app/src/app/library/components/BookItem.tsx",
                        lineNumber: 83,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/readest-app/src/app/library/components/BookItem.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('flex w-full flex-col p-0', mode === 'grid' && 'pt-2', mode === 'list' && 'gap-2 py-0'),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('min-w-0 flex-1', mode === 'list' && 'flex flex-col gap-2'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('overflow-hidden text-ellipsis font-semibold', mode === 'grid' && 'block whitespace-nowrap text-[0.6em] text-xs', mode === 'list' && 'line-clamp-2 text-base'),
                                children: book.title
                            }, void 0, false, {
                                fileName: "[project]/apps/readest-app/src/app/library/components/BookItem.tsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            mode === 'list' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-neutral-content line-clamp-1 text-sm",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$book$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatAuthors"])(book.author, book.primaryLanguage) || ''
                            }, void 0, false, {
                                fileName: "[project]/apps/readest-app/src/app/library/components/BookItem.tsx",
                                lineNumber: 110,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/readest-app/src/app/library/components/BookItem.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    mode === 'list' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "text-neutral-content line-clamp-1 text-sm",
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$book$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDescription"])(book.metadata?.description)
                    }, void 0, false, {
                        fileName: "[project]/apps/readest-app/src/app/library/components/BookItem.tsx",
                        lineNumber: 116,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('flex items-center', book.progress ? 'justify-between' : 'justify-end'),
                        style: {
                            height: `${iconSize15}px`,
                            minHeight: `${iconSize15}px`
                        },
                        children: [
                            book.progress && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$library$2f$components$2f$ReadingProgress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                book: book
                            }, void 0, false, {
                                fileName: "[project]/apps/readest-app/src/app/library/components/BookItem.tsx",
                                lineNumber: 127,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-center gap-x-2",
                                children: [
                                    !appService?.isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        "aria-label": _('Show Book Details'),
                                        className: "show-detail-button -m-2 p-2 sm:opacity-0 sm:group-hover:opacity-100",
                                        onPointerDown: (e)=>e.stopPropagation(),
                                        onClick: ()=>{
                                            showBookDetailsModal(book);
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pt-[2px] sm:pt-[1px]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$lia$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LiaInfoCircleSolid"], {
                                                size: iconSize15
                                            }, void 0, false, {
                                                fileName: "[project]/apps/readest-app/src/app/library/components/BookItem.tsx",
                                                lineNumber: 139,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/apps/readest-app/src/app/library/components/BookItem.tsx",
                                            lineNumber: 138,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/apps/readest-app/src/app/library/components/BookItem.tsx",
                                        lineNumber: 130,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    transferProgress !== null ? transferProgress === 100 ? null : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "radial-progress",
                                        style: {
                                            '--value': transferProgress,
                                            '--size': `${iconSize15}px`,
                                            '--thickness': '2px'
                                        },
                                        role: "progressbar"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/readest-app/src/app/library/components/BookItem.tsx",
                                        lineNumber: 145,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)) : (!book.uploadedAt || book.uploadedAt && !book.downloadedAt) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "show-cloud-button -m-2 p-2",
                                        onPointerDown: (e)=>e.stopPropagation(),
                                        onClick: ()=>{
                                            if (!user) {
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$nav$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navigateToLogin"])(router);
                                                return;
                                            }
                                            if (!book.uploadedAt) {
                                                handleBookUpload(book);
                                            } else if (!book.downloadedAt) {
                                                handleBookDownload(book, {
                                                    queued: true
                                                });
                                            }
                                        },
                                        children: [
                                            !book.uploadedAt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$lia$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LiaCloudUploadAltSolid"], {
                                                size: iconSize15
                                            }, void 0, false, {
                                                fileName: "[project]/apps/readest-app/src/app/library/components/BookItem.tsx",
                                                lineNumber: 174,
                                                columnNumber: 40
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            book.uploadedAt && !book.downloadedAt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$lia$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LiaCloudDownloadAltSolid"], {
                                                size: iconSize15
                                            }, void 0, false, {
                                                fileName: "[project]/apps/readest-app/src/app/library/components/BookItem.tsx",
                                                lineNumber: 176,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/readest-app/src/app/library/components/BookItem.tsx",
                                        lineNumber: 159,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/readest-app/src/app/library/components/BookItem.tsx",
                                lineNumber: 128,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/readest-app/src/app/library/components/BookItem.tsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/readest-app/src/app/library/components/BookItem.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/readest-app/src/app/library/components/BookItem.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(BookItem, "HudK5qV9OaYhB4i1R9NKv20iag4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEnv"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useResponsiveSize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResponsiveSize"]
    ];
});
_c = BookItem;
const __TURBOPACK__default__export__ = BookItem;
var _c;
__turbopack_context__.k.register(_c, "BookItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/readest-app/src/app/library/components/GroupItem.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.28.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.28.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-icons@5.4.0_react@19.2.0/node_modules/react-icons/md/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/context/EnvContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useResponsiveSize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/hooks/useResponsiveSize.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$BookCover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/components/BookCover.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const GroupItem = ({ mode, group, isSelectMode, groupSelected })=>{
    _s();
    const { appService } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEnv"])();
    const iconSize15 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useResponsiveSize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResponsiveSize"])(15);
    const scrollContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [showLeftArrow, setShowLeftArrow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showRightArrow, setShowRightArrow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const checkScrollArrows = ()=>{
        if (mode === 'list' && scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const hasOverflow = container.scrollWidth > container.clientWidth;
            if (hasOverflow) {
                const isAtStart = container.scrollLeft <= 5;
                const isAtEnd = container.scrollLeft >= container.scrollWidth - container.clientWidth - 5;
                setShowLeftArrow(!isAtStart);
                setShowRightArrow(!isAtEnd);
            } else {
                setShowLeftArrow(false);
                setShowRightArrow(false);
            }
        } else {
            setShowLeftArrow(false);
            setShowRightArrow(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GroupItem.useEffect": ()=>{
            checkScrollArrows();
            if (mode === 'list' && scrollContainerRef.current) {
                const container = scrollContainerRef.current;
                setTimeout({
                    "GroupItem.useEffect": ()=>{
                        container.style.transform = 'translateZ(0)';
                        container.scrollLeft = 0;
                    }
                }["GroupItem.useEffect"], 0);
            }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["GroupItem.useEffect"], [
        mode,
        group.books.length,
        scrollContainerRef.current
    ]);
    const handleScroll = ()=>{
        checkScrollArrows();
    };
    const scrollLeft = ()=>{
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const scrollAmount = container.clientWidth * 0.5;
            const currentScroll = container.scrollLeft;
            const targetScroll = Math.max(0, currentScroll - scrollAmount);
            container.scrollTo({
                left: targetScroll,
                behavior: 'smooth'
            });
        }
    };
    const scrollRight = ()=>{
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const scrollAmount = container.clientWidth * 0.5;
            const currentScroll = container.scrollLeft;
            const maxScroll = container.scrollWidth - container.clientWidth;
            const targetScroll = Math.min(maxScroll, currentScroll + scrollAmount);
            container.scrollTo({
                left: targetScroll,
                behavior: 'smooth'
            });
        }
    };
    const stopEvent = (e)=>{
        e.preventDefault();
        e.stopPropagation();
    };
    const handleLeftArrowClick = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        scrollLeft();
    };
    const handleRightArrowClick = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        scrollRight();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('group-item', appService?.hasContextMenu ? 'cursor-pointer' : ''),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('groupitem-main relative flex overflow-hidden rounded', mode === 'grid' && 'bg-base-100 aspect-[28/41] items-center justify-center shadow-md', mode === 'list' && 'items-center justify-start gap-4 py-2'),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(mode === 'grid' && 'flex h-full w-full p-2', mode === 'list' && 'relative min-w-0 max-w-[85%]'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: mode === 'list' ? scrollContainerRef : undefined,
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(mode === 'grid' && 'grid w-full grid-cols-2 grid-rows-2 gap-1 overflow-hidden', mode === 'list' && 'flex h-28 gap-2 overflow-x-auto overflow-y-hidden', mode === 'list' ? 'library-list-item' : 'library-grid-item'),
                                style: mode === 'list' ? {
                                    scrollbarWidth: 'none',
                                    msOverflowStyle: 'none',
                                    WebkitOverflowScrolling: 'touch',
                                    transform: 'translateZ(0)',
                                    willChange: 'scroll-position'
                                } : undefined,
                                onScroll: mode === 'list' ? handleScroll : undefined,
                                children: group.books.slice(0, mode === 'grid' ? 4 : undefined).map((book)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('relative aspect-[28/41] h-full', mode === 'grid' && 'w-full', mode === 'list' && 'flex-shrink-0'),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$BookCover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            book: book,
                                            isPreview: true,
                                            imageClassName: "rounded-[2px]"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/readest-app/src/app/library/components/GroupItem.tsx",
                                            lineNumber: 144,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, book.hash, false, {
                                        fileName: "[project]/apps/readest-app/src/app/library/components/GroupItem.tsx",
                                        lineNumber: 136,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/apps/readest-app/src/app/library/components/GroupItem.tsx",
                                lineNumber: 115,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            mode === 'list' && showLeftArrow && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute left-[-0.5px] top-0 h-full w-12",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "from-base-200/85 via-base-200/20 absolute inset-0 bg-gradient-to-r to-transparent"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/readest-app/src/app/library/components/GroupItem.tsx",
                                        lineNumber: 150,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleLeftArrowClick,
                                        onPointerDown: (e)=>stopEvent(e),
                                        onPointerUp: (e)=>stopEvent(e),
                                        onPointerMove: (e)=>stopEvent(e),
                                        onPointerCancel: (e)=>stopEvent(e),
                                        onPointerLeave: (e)=>stopEvent(e),
                                        className: "absolute left-2 top-1/2 -translate-y-1/2 transition-all duration-200 hover:scale-110",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-base-100 border-base-content/10 hover:border-base-content/30 rounded-full border p-1 shadow-sm transition-colors duration-200",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdChevronLeft"], {
                                                size: 16,
                                                className: "text-base-content/50 hover:text-base-content/70"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/readest-app/src/app/library/components/GroupItem.tsx",
                                                lineNumber: 161,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/apps/readest-app/src/app/library/components/GroupItem.tsx",
                                            lineNumber: 160,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/apps/readest-app/src/app/library/components/GroupItem.tsx",
                                        lineNumber: 151,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/readest-app/src/app/library/components/GroupItem.tsx",
                                lineNumber: 149,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            mode === 'list' && showRightArrow && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute right-[-0.5px] top-0 h-full w-12",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "from-base-200/85 via-base-200/20 absolute inset-0 bg-gradient-to-l to-transparent"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/readest-app/src/app/library/components/GroupItem.tsx",
                                        lineNumber: 171,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleRightArrowClick,
                                        onPointerDown: (e)=>stopEvent(e),
                                        onPointerUp: (e)=>stopEvent(e),
                                        onPointerMove: (e)=>stopEvent(e),
                                        onPointerCancel: (e)=>stopEvent(e),
                                        onPointerLeave: (e)=>stopEvent(e),
                                        className: "absolute right-2 top-1/2 -translate-y-1/2 transition-all duration-200 hover:scale-110",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-base-100 border-base-content/10 hover:border-base-content/30 rounded-full border p-1 shadow-sm transition-colors duration-200",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdChevronRight"], {
                                                size: 16,
                                                className: "text-base-content/50 hover:text-base-content/70"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/readest-app/src/app/library/components/GroupItem.tsx",
                                                lineNumber: 182,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/apps/readest-app/src/app/library/components/GroupItem.tsx",
                                            lineNumber: 181,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/apps/readest-app/src/app/library/components/GroupItem.tsx",
                                        lineNumber: 172,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/readest-app/src/app/library/components/GroupItem.tsx",
                                lineNumber: 170,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/readest-app/src/app/library/components/GroupItem.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    mode === 'list' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-base-content/75 w-28 min-w-24 max-w-40 overflow-hidden text-ellipsis text-base font-semibold",
                        children: group.displayName
                    }, void 0, false, {
                        fileName: "[project]/apps/readest-app/src/app/library/components/GroupItem.tsx",
                        lineNumber: 192,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    groupSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-black opacity-30 transition-opacity duration-300"
                    }, void 0, false, {
                        fileName: "[project]/apps/readest-app/src/app/library/components/GroupItem.tsx",
                        lineNumber: 197,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    isSelectMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-1 right-1",
                        children: groupSelected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdCheckCircle"], {
                            className: "fill-blue-500"
                        }, void 0, false, {
                            fileName: "[project]/apps/readest-app/src/app/library/components/GroupItem.tsx",
                            lineNumber: 202,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdCheckCircleOutline"], {
                            className: "fill-gray-300 drop-shadow-sm"
                        }, void 0, false, {
                            fileName: "[project]/apps/readest-app/src/app/library/components/GroupItem.tsx",
                            lineNumber: 204,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/apps/readest-app/src/app/library/components/GroupItem.tsx",
                        lineNumber: 200,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/readest-app/src/app/library/components/GroupItem.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            mode === 'grid' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('flex w-full flex-col pt-2'),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-w-0 flex-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            className: "block overflow-hidden text-ellipsis whitespace-nowrap text-xs font-semibold",
                            children: group.displayName
                        }, void 0, false, {
                            fileName: "[project]/apps/readest-app/src/app/library/components/GroupItem.tsx",
                            lineNumber: 212,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/apps/readest-app/src/app/library/components/GroupItem.tsx",
                        lineNumber: 211,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "placeholder",
                        style: {
                            height: `${iconSize15}px`
                        }
                    }, void 0, false, {
                        fileName: "[project]/apps/readest-app/src/app/library/components/GroupItem.tsx",
                        lineNumber: 216,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/readest-app/src/app/library/components/GroupItem.tsx",
                lineNumber: 210,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/readest-app/src/app/library/components/GroupItem.tsx",
        lineNumber: 101,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(GroupItem, "6zUqA+y9zob+qDFWDa2XqGr+OR8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEnv"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useResponsiveSize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResponsiveSize"]
    ];
});
_c = GroupItem;
const __TURBOPACK__default__export__ = GroupItem;
var _c;
__turbopack_context__.k.register(_c, "GroupItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/readest-app/src/app/library/components/BookshelfItem.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "generateBookshelfItems",
    ()=>generateBookshelfItems
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.28.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.28.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.28.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$nav$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/nav.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/context/EnvContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$libraryStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/libraryStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/settingsStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/hooks/useTranslation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useLongPress$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/hooks/useLongPress.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tauri-apps+api@2.9.1/node_modules/@tauri-apps/api/menu.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$menu$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tauri-apps+api@2.9.1/node_modules/@tauri-apps/api/menu/menu.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$menu$2f$menuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tauri-apps+api@2.9.1/node_modules/@tauri-apps/api/menu/menuItem.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$plugin$2d$opener$40$2$2e$5$2e$3$2f$node_modules$2f40$tauri$2d$apps$2f$plugin$2d$opener$2f$dist$2d$js$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tauri-apps+plugin-opener@2.5.3/node_modules/@tauri-apps/plugin-opener/dist-js/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/event.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/misc.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$throttle$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/throttle.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$os$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/os.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$md5$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/md5.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$library$2f$components$2f$BookItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/app/library/components/BookItem.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$library$2f$components$2f$GroupItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/app/library/components/GroupItem.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const generateBookshelfItems = (books, parentGroupName)=>{
    const groups = books.reduce((acc, book)=>{
        if (book.deletedAt) return acc;
        if (parentGroupName && (!book.groupName || !book.groupName.startsWith(parentGroupName))) return acc;
        book.groupId = book.groupId || __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BOOK_UNGROUPED_ID"];
        book.groupName = book.groupName || __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BOOK_UNGROUPED_NAME"];
        const slashIndex = book.groupName.indexOf('/', parentGroupName.length + 1);
        const leafGroupName = book.groupName.substring(parentGroupName ? parentGroupName.length + 1 : 0, slashIndex > 0 ? slashIndex : undefined);
        const fullGroupName = parentGroupName ? `${parentGroupName}${leafGroupName ? `/${leafGroupName}` : ''}` : leafGroupName;
        const groupIndex = acc.findIndex((group)=>group.name === fullGroupName || parentGroupName && group.name === parentGroupName || leafGroupName === __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BOOK_UNGROUPED_NAME"] && group.name === __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BOOK_UNGROUPED_NAME"]);
        const booksGroup = acc[groupIndex];
        if (booksGroup) {
            booksGroup.books.push(book);
            booksGroup.updatedAt = Math.max(booksGroup.updatedAt, book.updatedAt);
        } else {
            const groupName = fullGroupName;
            acc.push({
                id: groupName === parentGroupName ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BOOK_UNGROUPED_ID"] : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$md5$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["md5Fingerprint"])(groupName),
                name: groupName === parentGroupName ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BOOK_UNGROUPED_NAME"] : groupName,
                displayName: leafGroupName,
                books: [
                    book
                ],
                updatedAt: book.updatedAt
            });
        }
        return acc;
    }, []);
    groups.forEach((group)=>{
        group.books.sort((a, b)=>b.updatedAt - a.updatedAt);
    });
    const ungroupedBooks = groups.find((group)=>group.name === __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BOOK_UNGROUPED_NAME"] || group.name === parentGroupName)?.books || [];
    const groupedBooks = groups.filter((group)=>group.name !== __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BOOK_UNGROUPED_NAME"] && group.name !== parentGroupName);
    return [
        ...ungroupedBooks,
        ...groupedBooks
    ].sort((a, b)=>b.updatedAt - a.updatedAt);
};
const BookshelfItem = ({ mode, item, coverFit, isSelectMode, itemSelected, transferProgress, setLoading, toggleSelection, handleGroupBooks, handleBookUpload, handleBookDownload, handleSetSelectMode, handleShowDetailsBook })=>{
    _s();
    const _ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const { envConfig, appService } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEnv"])();
    const { settings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSettingsStore"])();
    const { updateBook } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$libraryStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLibraryStore"])();
    const showBookDetailsModal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BookshelfItem.useCallback[showBookDetailsModal]": async (book)=>{
            handleShowDetailsBook(book);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["BookshelfItem.useCallback[showBookDetailsModal]"], []);
    const makeBookAvailable = async (book)=>{
        if (book.uploadedAt && !book.downloadedAt) {
            if (await appService?.isBookAvailable(book)) {
                if (!book.downloadedAt || !book.coverDownloadedAt) {
                    book.downloadedAt = Date.now();
                    book.coverDownloadedAt = Date.now();
                    await updateBook(envConfig, book);
                }
                return true;
            }
            let available = false;
            const loadingTimeout = setTimeout(()=>setLoading(true), 200);
            try {
                available = await handleBookDownload(book, {
                    queued: false
                });
                await updateBook(envConfig, book);
            } finally{
                if (loadingTimeout) clearTimeout(loadingTimeout);
                setLoading(false);
                return available;
            }
        }
        return true;
    };
    const handleBookClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BookshelfItem.useCallback[handleBookClick]": async (book)=>{
            if (isSelectMode) {
                toggleSelection(book.hash);
            } else {
                const available = await makeBookAvailable(book);
                if (!available) return;
                if (appService?.hasWindow && settings.openBookInNewWindow) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$nav$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showReaderWindow"])(appService, [
                        book.hash
                    ]);
                } else {
                    setTimeout({
                        "BookshelfItem.useCallback[handleBookClick]": ()=>{
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$nav$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navigateToReader"])(router, [
                                book.hash
                            ]);
                        }
                    }["BookshelfItem.useCallback[handleBookClick]"], 0);
                }
            }
        }
    }["BookshelfItem.useCallback[handleBookClick]"], // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        isSelectMode,
        settings.openBookInNewWindow,
        appService
    ]);
    const handleGroupClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BookshelfItem.useCallback[handleGroupClick]": (group)=>{
            if (isSelectMode) {
                toggleSelection(group.id);
            } else {
                const params = new URLSearchParams(searchParams?.toString());
                params.set('group', group.id);
                setTimeout({
                    "BookshelfItem.useCallback[handleGroupClick]": ()=>{
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$nav$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navigateToLibrary"])(router, `${params.toString()}`);
                    }
                }["BookshelfItem.useCallback[handleGroupClick]"], 0);
            }
        }
    }["BookshelfItem.useCallback[handleGroupClick]"], // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        isSelectMode,
        searchParams
    ]);
    const bookContextMenuHandler = async (book)=>{
        if (!appService?.hasContextMenu) return;
        const osPlatform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOSPlatform"])();
        const fileRevealLabel = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$os$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FILE_REVEAL_LABELS"][osPlatform] || __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$os$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FILE_REVEAL_LABELS"].default;
        const selectBookMenuItem = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$menu$2f$menuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuItem"].new({
            text: itemSelected ? _('Deselect Book') : _('Select Book'),
            action: async ()=>{
                if (!isSelectMode) handleSetSelectMode(true);
                toggleSelection(book.hash);
            }
        });
        const groupBooksMenuItem = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$menu$2f$menuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuItem"].new({
            text: _('Group Books'),
            action: async ()=>{
                if (!isSelectMode) handleSetSelectMode(true);
                if (!itemSelected) {
                    toggleSelection(book.hash);
                }
                handleGroupBooks();
            }
        });
        const showBookInFinderMenuItem = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$menu$2f$menuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuItem"].new({
            text: _(fileRevealLabel),
            action: async ()=>{
                // Use relativePath for flat structure, fallback to directory of the book file
                const folder = book.relativePath ? `${settings.localBooksDir}/${book.relativePath.replace(/\/[^/]+$/, '')}` : settings.localBooksDir;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$plugin$2d$opener$40$2$2e$5$2e$3$2f$node_modules$2f40$tauri$2d$apps$2f$plugin$2d$opener$2f$dist$2d$js$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["revealItemInDir"])(folder);
            }
        });
        const showBookDetailsMenuItem = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$menu$2f$menuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuItem"].new({
            text: _('Show Book Details'),
            action: async ()=>{
                showBookDetailsModal(book);
            }
        });
        // Cloud upload/download functionality removed - using local server storage only
        // const downloadBookMenuItem = await MenuItem.new({
        //   text: _('Download Book'),
        //   action: async () => {
        //     handleBookDownload(book, { queued: true });
        //   },
        // });
        // const uploadBookMenuItem = await MenuItem.new({
        //   text: _('Upload Book'),
        //   action: async () => {
        //     handleBookUpload(book);
        //   },
        // });
        const deleteBookMenuItem = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$menu$2f$menuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuItem"].new({
            text: _('Delete'),
            action: async ()=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eventDispatcher"].dispatch('delete-books', {
                    ids: [
                        book.hash
                    ]
                });
            }
        });
        const menu = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$menu$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Menu"].new();
        menu.append(selectBookMenuItem);
        menu.append(groupBooksMenuItem);
        menu.append(showBookDetailsMenuItem);
        menu.append(showBookInFinderMenuItem);
        // Cloud storage menu items removed
        // if (book.uploadedAt && !book.downloadedAt) {
        //   menu.append(downloadBookMenuItem);
        // }
        // if (!book.uploadedAt && book.downloadedAt) {
        //   menu.append(uploadBookMenuItem);
        // }
        menu.append(deleteBookMenuItem);
        menu.popup();
    };
    const groupContextMenuHandler = async (group)=>{
        if (!appService?.hasContextMenu) return;
        const selectGroupMenuItem = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$menu$2f$menuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuItem"].new({
            text: itemSelected ? _('Deselect Group') : _('Select Group'),
            action: async ()=>{
                if (!isSelectMode) handleSetSelectMode(true);
                toggleSelection(group.id);
            }
        });
        const groupBooksMenuItem = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$menu$2f$menuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuItem"].new({
            text: _('Group Books'),
            action: async ()=>{
                if (!isSelectMode) handleSetSelectMode(true);
                if (!itemSelected) {
                    toggleSelection(group.id);
                }
                handleGroupBooks();
            }
        });
        const deleteGroupMenuItem = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$menu$2f$menuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuItem"].new({
            text: _('Delete'),
            action: async ()=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eventDispatcher"].dispatch('delete-books', {
                    ids: [
                        group.id
                    ]
                });
            }
        });
        const menu = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$menu$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Menu"].new();
        menu.append(selectGroupMenuItem);
        menu.append(groupBooksMenuItem);
        menu.append(deleteGroupMenuItem);
        menu.popup();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleSelectItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$throttle$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["throttle"])({
        "BookshelfItem.useCallback[handleSelectItem]": ()=>{
            if (!isSelectMode) {
                handleSetSelectMode(true);
            }
            if ('format' in item) {
                toggleSelection(item.hash);
            } else {
                toggleSelection(item.id);
            }
        }
    }["BookshelfItem.useCallback[handleSelectItem]"], 100), [
        isSelectMode
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleOpenItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$throttle$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["throttle"])({
        "BookshelfItem.useCallback[handleOpenItem]": ()=>{
            if (isSelectMode) {
                handleSelectItem();
                return;
            }
            if ('format' in item) {
                handleBookClick(item);
            } else {
                handleGroupClick(item);
            }
        }
    }["BookshelfItem.useCallback[handleOpenItem]"], 100), [
        handleSelectItem,
        handleBookClick,
        handleGroupClick
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleContextMenu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$throttle$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["throttle"])({
        "BookshelfItem.useCallback[handleContextMenu]": ()=>{
            if ('format' in item) {
                bookContextMenuHandler(item);
            } else {
                groupContextMenuHandler(item);
            }
        }
    }["BookshelfItem.useCallback[handleContextMenu]"], 100), [
        itemSelected,
        settings.localBooksDir
    ]);
    const { pressing, handlers } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useLongPress$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLongPress"])({
        onLongPress: {
            "BookshelfItem.useLongPress": ()=>{
                handleSelectItem();
            }
        }["BookshelfItem.useLongPress"],
        onTap: {
            "BookshelfItem.useLongPress": ()=>{
                handleOpenItem();
            }
        }["BookshelfItem.useLongPress"],
        onContextMenu: {
            "BookshelfItem.useLongPress": ()=>{
                if (appService?.hasContextMenu) {
                    handleContextMenu();
                } else if (appService?.isAndroidApp) {
                    handleSelectItem();
                }
            }
        }["BookshelfItem.useLongPress"]
    }, [
        isSelectMode,
        handleSelectItem,
        handleOpenItem,
        handleContextMenu
    ]);
    const handleKeyDown = (e)=>{
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleOpenItem();
        }
        if (e.key === 'ContextMenu' || e.shiftKey && e.key === 'F10') {
            e.preventDefault();
            handleContextMenu();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(mode === 'list' && 'sm:hover:bg-base-300/50 px-4 sm:px-6'),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('visible-focus-inset-2 group', mode === 'grid' && 'sm:hover:bg-base-300/50 flex h-full flex-col px-0 py-2 sm:px-4 sm:py-4', mode === 'list' && 'border-base-300 flex flex-col border-b py-2', appService?.isMobileApp && 'no-context-menu', pressing && mode === 'grid' ? 'not-eink:scale-95' : 'scale-100'),
            role: "button",
            tabIndex: 0,
            "aria-label": 'format' in item ? item.title : item.name,
            style: {
                transition: 'transform 0.2s'
            },
            onKeyDown: handleKeyDown,
            ...handlers,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-full flex-col justify-end",
                children: 'format' in item ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$library$2f$components$2f$BookItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    mode: mode,
                    book: item,
                    coverFit: coverFit,
                    isSelectMode: isSelectMode,
                    bookSelected: itemSelected,
                    transferProgress: transferProgress,
                    handleBookUpload: handleBookUpload,
                    handleBookDownload: handleBookDownload,
                    showBookDetailsModal: showBookDetailsModal
                }, void 0, false, {
                    fileName: "[project]/apps/readest-app/src/app/library/components/BookshelfItem.tsx",
                    lineNumber: 384,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$library$2f$components$2f$GroupItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    mode: mode,
                    group: item,
                    isSelectMode: isSelectMode,
                    groupSelected: itemSelected
                }, void 0, false, {
                    fileName: "[project]/apps/readest-app/src/app/library/components/BookshelfItem.tsx",
                    lineNumber: 396,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/library/components/BookshelfItem.tsx",
                lineNumber: 382,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/apps/readest-app/src/app/library/components/BookshelfItem.tsx",
            lineNumber: 364,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/readest-app/src/app/library/components/BookshelfItem.tsx",
        lineNumber: 363,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(BookshelfItem, "WWE215S3VoDHTIVKV5d3dGpcdSo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEnv"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSettingsStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$libraryStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLibraryStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useLongPress$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLongPress"]
    ];
});
_c = BookshelfItem;
const __TURBOPACK__default__export__ = BookshelfItem;
var _c;
__turbopack_context__.k.register(_c, "BookshelfItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/readest-app/src/app/library/components/SelectModeActions.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.28.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-icons@5.4.0_react@19.2.0/node_modules/react-icons/md/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$lu$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-icons@5.4.0_react@19.2.0/node_modules/react-icons/lu/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useKeyDownActions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/hooks/useKeyDownActions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/hooks/useTranslation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$md5$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/md5.ts [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
const SelectModeActions = ({ selectedBooks, safeAreaBottom, onOpen, onGroup, onDetails, onDelete, onCancel })=>{
    _s();
    const _ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const hasSelection = selectedBooks.length > 0;
    const hasValidBooks = selectedBooks.every((id)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$md5$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isMd5"])(id));
    const hasSingleSelection = selectedBooks.length === 1;
    const divRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useKeyDownActions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKeyDownActions"])({
        onCancel
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: divRef,
        className: "fixed bottom-0 left-0 right-0 z-40",
        style: {
            paddingBottom: `${safeAreaBottom + 16}px`
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('text-base-content flex items-center justify-center text-xs shadow-lg', 'not-eink:bg-base-300 eink:bg-base-100 eink:border eink:border-base-content', 'mx-auto w-fit space-x-6 rounded-lg p-4'),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onOpen,
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('flex flex-col items-center justify-center gap-1', (!hasSelection || !hasValidBooks) && 'btn-disabled opacity-50'),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdOpenInNew"], {}, void 0, false, {
                            fileName: "[project]/apps/readest-app/src/app/library/components/SelectModeActions.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: _('Open')
                        }, void 0, false, {
                            fileName: "[project]/apps/readest-app/src/app/library/components/SelectModeActions.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/readest-app/src/app/library/components/SelectModeActions.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onGroup,
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('flex flex-col items-center justify-center gap-1', !hasSelection && 'btn-disabled opacity-50'),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$lu$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LuFolderPlus"], {}, void 0, false, {
                            fileName: "[project]/apps/readest-app/src/app/library/components/SelectModeActions.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: _('Group')
                        }, void 0, false, {
                            fileName: "[project]/apps/readest-app/src/app/library/components/SelectModeActions.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/readest-app/src/app/library/components/SelectModeActions.tsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onDetails,
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('flex flex-col items-center justify-center gap-1', (!hasSingleSelection || !hasValidBooks) && 'btn-disabled opacity-50'),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdInfoOutline"], {}, void 0, false, {
                            fileName: "[project]/apps/readest-app/src/app/library/components/SelectModeActions.tsx",
                            lineNumber: 76,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: _('Details')
                        }, void 0, false, {
                            fileName: "[project]/apps/readest-app/src/app/library/components/SelectModeActions.tsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/readest-app/src/app/library/components/SelectModeActions.tsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onDelete,
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('flex flex-col items-center justify-center gap-1', !hasSelection && 'btn-disabled opacity-50'),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdDelete"], {
                            className: "text-red-500"
                        }, void 0, false, {
                            fileName: "[project]/apps/readest-app/src/app/library/components/SelectModeActions.tsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-red-500",
                            children: _('Delete')
                        }, void 0, false, {
                            fileName: "[project]/apps/readest-app/src/app/library/components/SelectModeActions.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/readest-app/src/app/library/components/SelectModeActions.tsx",
                    lineNumber: 79,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onCancel,
                    className: "flex flex-col items-center justify-center gap-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdOutlineCancel"], {}, void 0, false, {
                            fileName: "[project]/apps/readest-app/src/app/library/components/SelectModeActions.tsx",
                            lineNumber: 90,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: _('Cancel')
                        }, void 0, false, {
                            fileName: "[project]/apps/readest-app/src/app/library/components/SelectModeActions.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/readest-app/src/app/library/components/SelectModeActions.tsx",
                    lineNumber: 89,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/apps/readest-app/src/app/library/components/SelectModeActions.tsx",
            lineNumber: 42,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/readest-app/src/app/library/components/SelectModeActions.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(SelectModeActions, "vgmBXXkkw6UNq9peSkNaO3hJJvo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useKeyDownActions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKeyDownActions"]
    ];
});
_c = SelectModeActions;
const __TURBOPACK__default__export__ = SelectModeActions;
var _c;
__turbopack_context__.k.register(_c, "SelectModeActions");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/readest-app/src/app/library/components/GroupingModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.28.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.28.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-icons@5.4.0_react@19.2.0/node_modules/react-icons/md/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-icons@5.4.0_react@19.2.0/node_modules/react-icons/hi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-icons@5.4.0_react@19.2.0/node_modules/react-icons/io/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$md5$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/md5.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/context/EnvContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/hooks/useTranslation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$libraryStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/libraryStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useResponsiveSize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/hooks/useResponsiveSize.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useKeyDownActions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/hooks/useKeyDownActions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$library$2f$utils$2f$libraryUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/app/library/utils/libraryUtils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
const GroupingModal = ({ libraryBooks, selectedBooks, parentGroupName, onCancel, onConfirm })=>{
    _s();
    const _ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const { appService } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEnv"])();
    const { setLibrary, addGroup, getGroups, getGroupId, getGroupsByParent, getParentPath, refreshGroups } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$libraryStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLibraryStore"])();
    const [currentPath, setCurrentPath] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const [showInput, setShowInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editGroupName, setEditGroupName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedGroup, setSelectedGroup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [newGroup, setNewGroup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isRenaming, setIsRenaming] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [originalGroupName, setOriginalGroupName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const divRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useKeyDownActions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKeyDownActions"])({
        onCancel,
        onConfirm
    });
    const editorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const iconSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useResponsiveSize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResponsiveSize"])(16);
    const allGroups = getGroups();
    const currentGroups = getGroupsByParent(currentPath);
    const currentGroupsList = newGroup && !currentGroups.some((g)=>g.id === newGroup.id) && !currentGroups.some((g)=>newGroup.name.startsWith(g.name)) ? [
        newGroup,
        ...currentGroups
    ] : currentGroups;
    const isSelectedBooksHasGroup = selectedBooks.some((hash)=>!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$md5$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isMd5"])(hash)) || selectedBooks.map((hash)=>libraryBooks.find((book)=>book.hash === hash)?.groupId).some((group)=>group && group !== __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BOOK_UNGROUPED_NAME"]);
    const canRenameGroup = selectedBooks.length === 1 && selectedBooks.every((id)=>!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$md5$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isMd5"])(id));
    const currentGroupForRename = canRenameGroup ? allGroups.find((group)=>group.id === selectedBooks[0]) : null;
    const generateNextUntitledGroupName = ()=>{
        const baseName = _('Untitled Group');
        const basePattern = parentGroupName ? `${parentGroupName}/${baseName}` : currentPath ? `${currentPath}/${baseName}` : baseName;
        const escapedPattern = basePattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const untitledGroupPattern = new RegExp(`^${escapedPattern}\\s*(\\d+)?$`);
        const untitledGroupNumbers = allGroups.map((group)=>{
            const match = group.name.match(untitledGroupPattern);
            return match ? parseInt(match[1] || '1', 10) : null;
        }).filter((num)=>num !== null);
        const nextNumber = untitledGroupNumbers.length > 0 ? Math.max(...untitledGroupNumbers) + 1 : 1;
        return `${basePattern} ${nextNumber}`;
    };
    const handleCreateGroup = ()=>{
        const nextName = generateNextUntitledGroupName();
        setEditGroupName(nextName);
        setShowInput(true);
        setIsRenaming(false);
        setOriginalGroupName(null);
        setSelectedGroup(null);
    };
    const handleRenameGroup = ()=>{
        if (!currentGroupForRename) return;
        setEditGroupName(currentGroupForRename.name);
        setOriginalGroupName(currentGroupForRename.name);
        setShowInput(true);
        setIsRenaming(true);
    };
    const handleRemoveFromGroup = ()=>{
        selectedBooks.forEach((id)=>{
            for (const book of libraryBooks.filter((book)=>book.hash === id || book.groupId === id)){
                if (book && book.groupId && book.groupName && book.groupId !== __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BOOK_UNGROUPED_ID"] && book.groupName !== __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BOOK_UNGROUPED_NAME"]) {
                    book.groupId = undefined;
                    book.groupName = undefined;
                    book.updatedAt = Date.now();
                }
            }
        });
        setLibrary([
            ...libraryBooks
        ]);
        appService?.saveLibraryBooks(libraryBooks);
        onConfirm();
    };
    const handleConfirmCreateGroup = ()=>{
        let groupName = editGroupName.trim();
        if (groupName) {
            if (isRenaming && originalGroupName) {
                // Renaming existing group
                const oldGroupName = originalGroupName;
                // Update the group name for all books in this group and nested groups
                libraryBooks.forEach((book)=>{
                    if (book.groupName === oldGroupName) {
                        const newGroupName = groupName;
                        // 在本地存储模式下，移动文件以匹配新的分组名
                        if (book.relativePath && appService?.reclassifyBook) {
                            appService.reclassifyBook(book, newGroupName, oldGroupName).catch((error)=>{
                                console.error('Failed to reclassify book files during rename:', error);
                            });
                        }
                        book.groupName = newGroupName;
                        book.groupId = getGroupId(book.groupName);
                        book.updatedAt = Date.now();
                    } else if (book.groupName?.startsWith(oldGroupName + '/')) {
                        const newGroupName = book.groupName.replace(oldGroupName, groupName);
                        // 在本地存储模式下，移动文件以匹配新的分组
                        if (book.relativePath && appService?.reclassifyBook) {
                            appService.reclassifyBook(book, newGroupName, book.groupName).catch((error)=>{
                                console.error('Failed to reclassify book files during rename:', error);
                            });
                        }
                        book.groupName = newGroupName;
                        book.groupId = getGroupId(book.groupName);
                        book.updatedAt = Date.now();
                    }
                });
                setLibrary([
                    ...libraryBooks
                ]);
                appService?.saveLibraryBooks(libraryBooks);
                refreshGroups();
                setShowInput(false);
                setIsRenaming(false);
                setOriginalGroupName(null);
            } else {
                // Creating new group
                if (currentPath && !groupName.startsWith(currentPath + '/')) {
                    groupName = `${currentPath}/${groupName}`;
                }
                const newGroup = addGroup(groupName);
                setNewGroup(newGroup);
                setSelectedGroup(newGroup);
                setShowInput(false);
                const parentGroup = getParentPath(groupName);
                if (parentGroup) {
                    setCurrentPath(parentGroup);
                }
            }
        }
    };
    const handleToggleSelectGroup = (group)=>{
        setSelectedGroup((prevGroup)=>prevGroup?.id === group.id ? null : group);
    };
    const handleNavigateToGroup = (group)=>{
        setCurrentPath(group.name);
    };
    const handleNavigateBack = ()=>{
        const parent = currentPath ? getParentPath(currentPath) : undefined;
        setCurrentPath(parent);
    };
    const handleNavigateToPath = (path)=>{
        setCurrentPath(path);
    };
    const handleConfirmGrouping = async ()=>{
        selectedBooks.forEach((id)=>{
            for (const book of libraryBooks.filter((book)=>book.hash === id || book.groupId === id)){
                if (book && selectedGroup) {
                    const oldGroupName = book.groupName;
                    book.groupId = selectedGroup.id;
                    book.groupName = selectedGroup.name;
                    book.updatedAt = Date.now();
                    // 在本地存储模式下，移动文件以匹配新的分组
                    if (book.relativePath && appService?.reclassifyBook) {
                        appService.reclassifyBook(book, selectedGroup.name, oldGroupName).catch((error)=>{
                            console.error('Failed to reclassify book files:', error);
                        // 不中断流程，继续保存元数据
                        });
                    }
                }
            }
        });
        setLibrary([
            ...libraryBooks
        ]);
        appService?.saveLibraryBooks(libraryBooks);
        onConfirm();
    };
    const getDisplayName = (fullPath)=>{
        const segments = fullPath.split('/');
        return segments[segments.length - 1];
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GroupingModal.useEffect": ()=>{
            if (editorRef.current) {
                editorRef.current.select();
            }
        }
    }["GroupingModal.useEffect"], [
        showInput
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GroupingModal.useEffect": ()=>{
            refreshGroups();
        }
    }["GroupingModal.useEffect"], [
        refreshGroups
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GroupingModal.useEffect": ()=>{
            const groupIds = selectedBooks.map({
                "GroupingModal.useEffect.groupIds": (id)=>libraryBooks.find({
                        "GroupingModal.useEffect.groupIds": (book)=>book.hash === id || book.groupId === id
                    }["GroupingModal.useEffect.groupIds"])?.groupId
            }["GroupingModal.useEffect.groupIds"]).filter({
                "GroupingModal.useEffect.groupIds": (groupId)=>groupId
            }["GroupingModal.useEffect.groupIds"]);
            if (Array.from(new Set(groupIds)).length === 1) {
                setTimeout({
                    "GroupingModal.useEffect": ()=>{
                        const allGroups = getGroups();
                        const group = allGroups.find({
                            "GroupingModal.useEffect.group": (group)=>group.id === groupIds[0]
                        }["GroupingModal.useEffect.group"]);
                        setSelectedGroup(group || null);
                        if (group && !currentPath) {
                            const parent = getParentPath(group.name);
                            setCurrentPath(parent);
                        }
                    }
                }["GroupingModal.useEffect"], 0);
            }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["GroupingModal.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 flex items-center justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: divRef,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('modal-box bg-base-100 overflow-y-auto rounded-2xl shadow-xl', 'max-h-[85%] w-[95%] min-w-64 max-w-[440px] p-6 sm:w-[70%]'),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-center text-lg font-bold",
                    children: _('Group Books')
                }, void 0, false, {
                    fileName: "[project]/apps/readest-app/src/app/library/components/GroupingModal.tsx",
                    lineNumber: 286,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('mt-4 grid grid-cols-1 gap-2 text-base md:grid-cols-2'),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleRemoveFromGroup,
                            className: "flex items-center space-x-2 p-2 text-blue-500 disabled:text-gray-400",
                            disabled: !isSelectedBooksHasGroup,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiOutlineFolderRemove"], {
                                    size: iconSize
                                }, void 0, false, {
                                    fileName: "[project]/apps/readest-app/src/app/library/components/GroupingModal.tsx",
                                    lineNumber: 295,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "truncate",
                                    children: _('Remove From Group')
                                }, void 0, false, {
                                    fileName: "[project]/apps/readest-app/src/app/library/components/GroupingModal.tsx",
                                    lineNumber: 296,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/readest-app/src/app/library/components/GroupingModal.tsx",
                            lineNumber: 290,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleCreateGroup,
                            className: "flex items-center space-x-2 p-2 text-blue-500 disabled:text-gray-400",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiOutlineFolderAdd"], {
                                    size: iconSize
                                }, void 0, false, {
                                    fileName: "[project]/apps/readest-app/src/app/library/components/GroupingModal.tsx",
                                    lineNumber: 302,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "truncate",
                                    children: _('Create New Group')
                                }, void 0, false, {
                                    fileName: "[project]/apps/readest-app/src/app/library/components/GroupingModal.tsx",
                                    lineNumber: 303,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/readest-app/src/app/library/components/GroupingModal.tsx",
                            lineNumber: 298,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleRenameGroup,
                            className: "flex items-center space-x-2 p-2 text-blue-500 disabled:text-gray-400",
                            disabled: !canRenameGroup,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdEdit"], {
                                    size: iconSize
                                }, void 0, false, {
                                    fileName: "[project]/apps/readest-app/src/app/library/components/GroupingModal.tsx",
                                    lineNumber: 310,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "truncate",
                                    children: _('Rename Group')
                                }, void 0, false, {
                                    fileName: "[project]/apps/readest-app/src/app/library/components/GroupingModal.tsx",
                                    lineNumber: 311,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/readest-app/src/app/library/components/GroupingModal.tsx",
                            lineNumber: 305,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/readest-app/src/app/library/components/GroupingModal.tsx",
                    lineNumber: 289,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                showInput && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 space-y-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                ref: editorRef,
                                value: editGroupName,
                                onChange: (e)=>setEditGroupName(e.target.value),
                                onKeyDown: (e)=>{
                                    if (e.key === 'Enter') handleConfirmCreateGroup();
                                    if (e.key === 'Escape') {
                                        setShowInput(false);
                                        setIsRenaming(false);
                                        setOriginalGroupName(null);
                                    }
                                    e.stopPropagation();
                                },
                                className: "input input-ghost w-full border-0 px-2 text-base !outline-none sm:text-sm"
                            }, void 0, false, {
                                fileName: "[project]/apps/readest-app/src/app/library/components/GroupingModal.tsx",
                                lineNumber: 319,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('btn btn-ghost settings-content hover:bg-transparent', 'flex h-[1.3em] min-h-[1.3em] items-end p-0', editGroupName ? '' : 'btn-disabled !bg-opacity-0'),
                                onClick: ()=>handleConfirmCreateGroup(),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pr-1 align-bottom text-base text-blue-500 sm:text-sm",
                                    children: _('Save')
                                }, void 0, false, {
                                    fileName: "[project]/apps/readest-app/src/app/library/components/GroupingModal.tsx",
                                    lineNumber: 343,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/apps/readest-app/src/app/library/components/GroupingModal.tsx",
                                lineNumber: 335,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/readest-app/src/app/library/components/GroupingModal.tsx",
                        lineNumber: 318,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/apps/readest-app/src/app/library/components/GroupingModal.tsx",
                    lineNumber: 317,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                currentPath && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 flex flex-wrap items-center gap-2 text-base",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleNavigateBack,
                            className: "hover:bg-base-300 flex items-center gap-1 rounded px-2 py-1",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoMdArrowBack"], {
                                size: iconSize
                            }, void 0, false, {
                                fileName: "[project]/apps/readest-app/src/app/library/components/GroupingModal.tsx",
                                lineNumber: 358,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/apps/readest-app/src/app/library/components/GroupingModal.tsx",
                            lineNumber: 354,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>handleNavigateToPath(undefined),
                            className: "hover:bg-base-300 rounded px-2 py-1",
                            children: _('All')
                        }, void 0, false, {
                            fileName: "[project]/apps/readest-app/src/app/library/components/GroupingModal.tsx",
                            lineNumber: 360,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$library$2f$utils$2f$libraryUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBreadcrumbs"])(currentPath).map((crumb, index, array)=>{
                            const isLast = index === array.length - 1;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdChevronRight"], {
                                        size: iconSize,
                                        className: "text-neutral-content"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/readest-app/src/app/library/components/GroupingModal.tsx",
                                        lineNumber: 370,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    isLast ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "truncate rounded px-2 py-1",
                                        children: crumb.name
                                    }, void 0, false, {
                                        fileName: "[project]/apps/readest-app/src/app/library/components/GroupingModal.tsx",
                                        lineNumber: 372,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleNavigateToPath(crumb.path),
                                        className: "hover:bg-base-300 truncate rounded px-2 py-1",
                                        children: crumb.name
                                    }, void 0, false, {
                                        fileName: "[project]/apps/readest-app/src/app/library/components/GroupingModal.tsx",
                                        lineNumber: 374,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, index, true, {
                                fileName: "[project]/apps/readest-app/src/app/library/components/GroupingModal.tsx",
                                lineNumber: 369,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0));
                        })
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/readest-app/src/app/library/components/GroupingModal.tsx",
                    lineNumber: 353,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "groups-list mt-4 grid grid-cols-2 gap-2 overflow-x-hidden",
                    children: currentGroupsList.map((group, index)=>{
                        const displayName = getDisplayName(group.name);
                        const hasChildren = allGroups.some((g)=>g.name.startsWith(group.name + '/'));
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex min-w-0 gap-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('hover:bg-base-300 text-base-content flex min-w-0 max-w-[90%] flex-1', 'items-center justify-between gap-2 rounded-md px-2 py-2'),
                                    onClick: ()=>handleToggleSelectGroup(group),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex min-w-0 flex-1 items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "shrink-0",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiOutlineFolder"], {
                                                        size: iconSize
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/readest-app/src/app/library/components/GroupingModal.tsx",
                                                        lineNumber: 403,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/readest-app/src/app/library/components/GroupingModal.tsx",
                                                    lineNumber: 402,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "min-w-0 truncate text-base sm:text-sm",
                                                    children: displayName
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/readest-app/src/app/library/components/GroupingModal.tsx",
                                                    lineNumber: 405,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/readest-app/src/app/library/components/GroupingModal.tsx",
                                            lineNumber: 401,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-neutral-content flex shrink-0 text-sm",
                                            children: selectedGroup && selectedGroup.id === group.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdCheck"], {
                                                className: "fill-blue-500",
                                                size: iconSize
                                            }, void 0, false, {
                                                fileName: "[project]/apps/readest-app/src/app/library/components/GroupingModal.tsx",
                                                lineNumber: 409,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/apps/readest-app/src/app/library/components/GroupingModal.tsx",
                                            lineNumber: 407,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/readest-app/src/app/library/components/GroupingModal.tsx",
                                    lineNumber: 394,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                hasChildren && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleNavigateToGroup(group),
                                    className: "hover:bg-base-300 flex shrink-0 items-center rounded-md px-1",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdChevronRight"], {
                                        size: iconSize
                                    }, void 0, false, {
                                        fileName: "[project]/apps/readest-app/src/app/library/components/GroupingModal.tsx",
                                        lineNumber: 418,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/apps/readest-app/src/app/library/components/GroupingModal.tsx",
                                    lineNumber: 414,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, index, true, {
                            fileName: "[project]/apps/readest-app/src/app/library/components/GroupingModal.tsx",
                            lineNumber: 393,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0));
                    })
                }, void 0, false, {
                    fileName: "[project]/apps/readest-app/src/app/library/components/GroupingModal.tsx",
                    lineNumber: 388,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6 flex justify-end gap-x-8 p-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onCancel,
                            className: "flex items-center",
                            children: _('Cancel')
                        }, void 0, false, {
                            fileName: "[project]/apps/readest-app/src/app/library/components/GroupingModal.tsx",
                            lineNumber: 428,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleConfirmGrouping,
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('flex items-center text-blue-500', !selectedGroup && 'btn-disabled opacity-50'),
                            children: _('Confirm')
                        }, void 0, false, {
                            fileName: "[project]/apps/readest-app/src/app/library/components/GroupingModal.tsx",
                            lineNumber: 431,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/readest-app/src/app/library/components/GroupingModal.tsx",
                    lineNumber: 427,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/apps/readest-app/src/app/library/components/GroupingModal.tsx",
            lineNumber: 279,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/readest-app/src/app/library/components/GroupingModal.tsx",
        lineNumber: 278,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(GroupingModal, "uEvvkVwOCiuU0ISQq03QjQSlJtc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEnv"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$libraryStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLibraryStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useKeyDownActions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKeyDownActions"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useResponsiveSize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResponsiveSize"]
    ];
});
_c = GroupingModal;
const __TURBOPACK__default__export__ = GroupingModal;
var _c;
__turbopack_context__.k.register(_c, "GroupingModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/readest-app/src/app/library/components/Bookshelf.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.28.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.28.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.28.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-icons@5.4.0_react@19.2.0/node_modules/react-icons/pi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/context/EnvContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$themeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/themeStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useAutoFocus$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/hooks/useAutoFocus.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/settingsStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$libraryStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/libraryStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/hooks/useTranslation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useResponsiveSize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/hooks/useResponsiveSize.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$nav$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/nav.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$library$2f$utils$2f$libraryUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/app/library/utils/libraryUtils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$book$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/book.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/event.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$Alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/components/Alert.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$Spinner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/components/Spinner.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$ModalPortal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/components/ModalPortal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$library$2f$components$2f$BookshelfItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/app/library/components/BookshelfItem.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$library$2f$components$2f$SelectModeActions$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/app/library/components/SelectModeActions.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$library$2f$components$2f$GroupingModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/app/library/components/GroupingModal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const Bookshelf = ({ libraryBooks, isSelectMode, isSelectAll, isSelectNone, handleImportBooks, handleBookUpload, handleBookDownload, handleBookDelete, handleSetSelectMode, handleShowDetailsBook, handlePushLibrary, booksTransferProgress })=>{
    _s();
    const _ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const { appService } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEnv"])();
    const { settings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSettingsStore"])();
    const { safeAreaInsets } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$themeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeStore"])();
    const groupId = searchParams?.get('group') || '';
    const queryTerm = searchParams?.get('q') || null;
    const viewMode = searchParams?.get('view') || settings.libraryViewMode;
    const sortBy = searchParams?.get('sort') || settings.librarySortBy;
    const sortOrder = searchParams?.get('order') || (settings.librarySortAscending ? 'asc' : 'desc');
    const coverFit = searchParams?.get('cover') || settings.libraryCoverFit;
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showSelectModeActions, setShowSelectModeActions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [bookIdsToDelete, setBookIdsToDelete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showDeleteAlert, setShowDeleteAlert] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showGroupingModal, setShowGroupingModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [importBookUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(searchParams?.get('url') || '');
    const abortDeletionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const isImportingBook = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const iconSize15 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useResponsiveSize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResponsiveSize"])(15);
    const autofocusRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useAutoFocus$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAutoFocus"])();
    const { setCurrentBookshelf, setLibrary } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$libraryStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLibraryStore"])();
    const { setSelectedBooks, getSelectedBooks, toggleSelectedBook } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$libraryStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLibraryStore"])();
    const { getGroupName } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$libraryStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLibraryStore"])();
    const uiLanguage = localStorage?.getItem('i18nextLng') || '';
    const updateUrlParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Bookshelf.useCallback[updateUrlParams]": (updates)=>{
            const params = new URLSearchParams(searchParams?.toString());
            Object.entries(updates).forEach({
                "Bookshelf.useCallback[updateUrlParams]": ([key, value])=>{
                    if (value === null || value === '') {
                        params.delete(key);
                    } else {
                        params.set(key, value);
                    }
                }
            }["Bookshelf.useCallback[updateUrlParams]"]);
            if (params.get('sort') === 'updated') params.delete('sort');
            if (params.get('order') === 'desc') params.delete('order');
            if (params.get('cover') === 'crop') params.delete('cover');
            if (params.get('view') === 'grid') params.delete('view');
            const newParamString = params.toString();
            const currentParamString = searchParams?.toString() || '';
            if (newParamString !== currentParamString) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$nav$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navigateToLibrary"])(router, newParamString);
            }
        }
    }["Bookshelf.useCallback[updateUrlParams]"], [
        router,
        searchParams
    ]);
    const filteredBooks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Bookshelf.useMemo[filteredBooks]": ()=>{
            const bookFilter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$library$2f$utils$2f$libraryUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBookFilter"])(queryTerm);
            return queryTerm ? libraryBooks.filter({
                "Bookshelf.useMemo[filteredBooks]": (book)=>bookFilter(book)
            }["Bookshelf.useMemo[filteredBooks]"]) : libraryBooks;
        }
    }["Bookshelf.useMemo[filteredBooks]"], [
        libraryBooks,
        queryTerm
    ]);
    const currentBookshelfItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Bookshelf.useMemo[currentBookshelfItems]": ()=>{
            const groupName = getGroupName(groupId) || '';
            if (groupId && !groupName) {
                return [];
            }
            const items = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$library$2f$components$2f$BookshelfItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateBookshelfItems"])(filteredBooks, groupName);
            return items;
        }
    }["Bookshelf.useMemo[currentBookshelfItems]"], [
        filteredBooks,
        groupId,
        getGroupName
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Bookshelf.useEffect": ()=>{
            if (groupId && currentBookshelfItems.length === 0) {
                updateUrlParams({
                    group: null
                });
            } else {
                updateUrlParams({});
            }
        }
    }["Bookshelf.useEffect"], [
        searchParams,
        groupId,
        currentBookshelfItems.length,
        updateUrlParams
    ]);
    const sortedBookshelfItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Bookshelf.useMemo[sortedBookshelfItems]": ()=>{
            const bookSorter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$library$2f$utils$2f$libraryUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBookSorter"])(sortBy, uiLanguage);
            const sortOrderMultiplier = sortOrder === 'asc' ? 1 : -1;
            return currentBookshelfItems.sort({
                "Bookshelf.useMemo[sortedBookshelfItems]": (a, b)=>{
                    if (sortBy === 'updated') {
                        return (new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime()) * sortOrderMultiplier;
                    } else if ('name' in a || 'name' in b) {
                        const aName = 'name' in a ? a.name : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$book$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTitle"])(a.title);
                        const bName = 'name' in b ? b.name : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$book$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTitle"])(b.title);
                        return aName.localeCompare(bName, uiLanguage || navigator.language) * sortOrderMultiplier;
                    } else if (!('name' in a || 'name' in b)) {
                        return bookSorter(a, b) * sortOrderMultiplier;
                    } else {
                        return 0;
                    }
                }
            }["Bookshelf.useMemo[sortedBookshelfItems]"]);
        }
    }["Bookshelf.useMemo[sortedBookshelfItems]"], [
        sortOrder,
        sortBy,
        uiLanguage,
        currentBookshelfItems
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Bookshelf.useEffect": ()=>{
            if (isImportingBook.current) return;
            isImportingBook.current = true;
            if (importBookUrl && appService) {
                const importBook = {
                    "Bookshelf.useEffect.importBook": async ()=>{
                        console.log('Importing book from URL:', importBookUrl);
                        const book = await appService.importBook(importBookUrl, libraryBooks);
                        if (book) {
                            setLibrary(libraryBooks);
                            appService.saveLibraryBooks(libraryBooks);
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$nav$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navigateToReader"])(router, [
                                book.hash
                            ]);
                        }
                    }
                }["Bookshelf.useEffect.importBook"];
                importBook();
            }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["Bookshelf.useEffect"], [
        importBookUrl,
        appService
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Bookshelf.useEffect": ()=>{
            setCurrentBookshelf(currentBookshelfItems);
        }
    }["Bookshelf.useEffect"], [
        currentBookshelfItems,
        setCurrentBookshelf
    ]);
    const toggleSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Bookshelf.useCallback[toggleSelection]": (id)=>{
            toggleSelectedBook(id);
        }
    }["Bookshelf.useCallback[toggleSelection]"], [
        toggleSelectedBook
    ]);
    const openSelectedBooks = ()=>{
        handleSetSelectMode(false);
        if (appService?.hasWindow && settings.openBookInNewWindow) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$nav$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showReaderWindow"])(appService, getSelectedBooks());
        } else {
            setTimeout(()=>setLoading(true), 200);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$nav$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navigateToReader"])(router, getSelectedBooks());
        }
    };
    const openBookDetails = ()=>{
        handleSetSelectMode(false);
        const selectedBooks = getSelectedBooks();
        const book = libraryBooks.find((book)=>book.hash === selectedBooks[0]);
        if (book) {
            handleShowDetailsBook(book);
        }
    };
    const getBooksToDelete = ()=>{
        const booksToDelete = [];
        bookIdsToDelete.forEach((id)=>{
            for (const book of filteredBooks.filter((book)=>book.hash === id || book.groupId === id)){
                if (book && !book.deletedAt) {
                    booksToDelete.push(book);
                }
            }
        });
        return booksToDelete;
    };
    const confirmDelete = async ()=>{
        const books = getBooksToDelete();
        const concurrency = 20;
        for(let i = 0; i < books.length; i += concurrency){
            if (abortDeletionRef.current) {
                abortDeletionRef.current = false;
                break;
            }
            const batch = books.slice(i, i + concurrency);
            await Promise.all(batch.map((book)=>handleBookDelete(book, false)));
        }
        handlePushLibrary();
        setSelectedBooks([]);
        setShowDeleteAlert(false);
        setShowSelectModeActions(true);
    };
    const deleteSelectedBooks = ()=>{
        setBookIdsToDelete(getSelectedBooks());
        setShowSelectModeActions(false);
        setShowDeleteAlert(true);
    };
    const groupSelectedBooks = ()=>{
        setShowSelectModeActions(false);
        setShowGroupingModal(true);
    };
    const handleDeleteBooksIntent = (event)=>{
        const { ids } = event.detail;
        setBookIdsToDelete(ids);
        setShowSelectModeActions(false);
        setShowDeleteAlert(true);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Bookshelf.useEffect": ()=>{
            if (isSelectMode) {
                setShowSelectModeActions(true);
                if (isSelectAll) {
                    setSelectedBooks(currentBookshelfItems.map({
                        "Bookshelf.useEffect": (item)=>'hash' in item ? item.hash : item.id
                    }["Bookshelf.useEffect"]));
                } else if (isSelectNone) {
                    setSelectedBooks([]);
                }
            } else {
                setSelectedBooks([]);
                setShowSelectModeActions(false);
            }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["Bookshelf.useEffect"], [
        isSelectMode,
        isSelectAll,
        isSelectNone,
        currentBookshelfItems
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Bookshelf.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eventDispatcher"].on('delete-books', handleDeleteBooksIntent);
            return ({
                "Bookshelf.useEffect": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eventDispatcher"].off('delete-books', handleDeleteBooksIntent);
                }
            })["Bookshelf.useEffect"];
        }
    }["Bookshelf.useEffect"], []);
    const selectedBooks = getSelectedBooks();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bookshelf",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: autofocusRef,
                tabIndex: -1,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('bookshelf-items transform-wrapper focus:outline-none', viewMode === 'grid' && 'grid flex-1 grid-cols-3 gap-x-4 px-4 sm:gap-x-0 sm:px-2', viewMode === 'grid' && 'sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-12', viewMode === 'list' && 'flex flex-col'),
                style: {
                    gridTemplateColumns: viewMode === 'grid' && !settings.libraryAutoColumns ? `repeat(${settings.libraryColumns}, minmax(0, 1fr))` : undefined
                },
                role: "main",
                "aria-label": _('Bookshelf'),
                children: [
                    sortedBookshelfItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$library$2f$components$2f$BookshelfItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            item: item,
                            mode: viewMode,
                            coverFit: coverFit,
                            isSelectMode: isSelectMode,
                            itemSelected: 'hash' in item ? selectedBooks.includes(item.hash) : selectedBooks.includes(item.id),
                            setLoading: setLoading,
                            toggleSelection: toggleSelection,
                            handleGroupBooks: groupSelectedBooks,
                            handleBookUpload: handleBookUpload,
                            handleBookDownload: handleBookDownload,
                            handleBookDelete: handleBookDelete,
                            handleSetSelectMode: handleSetSelectMode,
                            handleShowDetailsBook: handleShowDetailsBook,
                            transferProgress: 'hash' in item ? booksTransferProgress[item.hash] || null : null
                        }, `library-item-${'hash' in item ? item.hash : item.id}`, false, {
                            fileName: "[project]/apps/readest-app/src/app/library/components/Bookshelf.tsx",
                            lineNumber: 306,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))),
                    viewMode === 'grid' && currentBookshelfItems.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('mx-0 my-2 sm:mx-4 sm:my-4'),
                        style: coverFit === 'fit' && viewMode === 'grid' ? {
                            display: 'flex',
                            paddingBottom: `${iconSize15 + 24}px`
                        } : undefined,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            "aria-label": _('Import Books'),
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('bookitem-main bg-base-100 hover:bg-base-300/50', 'flex items-center justify-center', 'aspect-[28/41] w-full'),
                            onClick: handleImportBooks,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiPlus"], {
                                    className: "size-10",
                                    color: "gray"
                                }, void 0, false, {
                                    fileName: "[project]/apps/readest-app/src/app/library/components/Bookshelf.tsx",
                                    lineNumber: 350,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/apps/readest-app/src/app/library/components/Bookshelf.tsx",
                                lineNumber: 349,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/apps/readest-app/src/app/library/components/Bookshelf.tsx",
                            lineNumber: 340,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/apps/readest-app/src/app/library/components/Bookshelf.tsx",
                        lineNumber: 329,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/readest-app/src/app/library/components/Bookshelf.tsx",
                lineNumber: 287,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$Spinner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    loading: true
                }, void 0, false, {
                    fileName: "[project]/apps/readest-app/src/app/library/components/Bookshelf.tsx",
                    lineNumber: 358,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/library/components/Bookshelf.tsx",
                lineNumber: 357,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            !showGroupingModal && isSelectMode && showSelectModeActions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$library$2f$components$2f$SelectModeActions$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                selectedBooks: selectedBooks,
                safeAreaBottom: safeAreaInsets?.bottom || 0,
                onOpen: openSelectedBooks,
                onGroup: groupSelectedBooks,
                onDetails: openBookDetails,
                onDelete: deleteSelectedBooks,
                onCancel: ()=>handleSetSelectMode(false)
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/library/components/Bookshelf.tsx",
                lineNumber: 362,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            showGroupingModal && selectedBooks.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$ModalPortal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$library$2f$components$2f$GroupingModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    libraryBooks: libraryBooks,
                    selectedBooks: selectedBooks,
                    parentGroupName: getGroupName(groupId) || '',
                    onCancel: ()=>{
                        setShowGroupingModal(false);
                        setShowSelectModeActions(true);
                    },
                    onConfirm: ()=>{
                        setShowGroupingModal(false);
                        handleSetSelectMode(false);
                    }
                }, void 0, false, {
                    fileName: "[project]/apps/readest-app/src/app/library/components/Bookshelf.tsx",
                    lineNumber: 374,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/library/components/Bookshelf.tsx",
                lineNumber: 373,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            showDeleteAlert && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('delete-alert fixed bottom-0 left-0 right-0 z-50 flex justify-center'),
                style: {
                    paddingBottom: `${(safeAreaInsets?.bottom || 0) + 16}px`
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$Alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    title: _('Confirm Deletion'),
                    message: _('Are you sure to delete {{count}} selected book(s)?', {
                        count: getBooksToDelete().length
                    }),
                    onCancel: ()=>{
                        abortDeletionRef.current = true;
                        setShowDeleteAlert(false);
                        setShowSelectModeActions(true);
                    },
                    onConfirm: confirmDelete
                }, void 0, false, {
                    fileName: "[project]/apps/readest-app/src/app/library/components/Bookshelf.tsx",
                    lineNumber: 396,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/library/components/Bookshelf.tsx",
                lineNumber: 390,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/readest-app/src/app/library/components/Bookshelf.tsx",
        lineNumber: 286,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Bookshelf, "VvnqFQDAGAk1IuEPBFsffdnxRDI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEnv"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSettingsStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$themeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useResponsiveSize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResponsiveSize"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useAutoFocus$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAutoFocus"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$libraryStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLibraryStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$libraryStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLibraryStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$libraryStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLibraryStore"]
    ];
});
_c = Bookshelf;
const __TURBOPACK__default__export__ = Bookshelf;
var _c;
__turbopack_context__.k.register(_c, "Bookshelf");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/readest-app/src/app/reader/components/annotator/AnnotationTools.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "annotationToolButtons",
    ()=>annotationToolButtons,
    "annotationToolQuickActions",
    ()=>annotationToolQuickActions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-icons@5.4.0_react@19.2.0/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-icons@5.4.0_react@19.2.0/node_modules/react-icons/pi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-icons@5.4.0_react@19.2.0/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$bs$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-icons@5.4.0_react@19.2.0/node_modules/react-icons/bs/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$tb$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-icons@5.4.0_react@19.2.0/node_modules/react-icons/tb/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-icons@5.4.0_react@19.2.0/node_modules/react-icons/fa6/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-icons@5.4.0_react@19.2.0/node_modules/react-icons/io/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/misc.ts [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
function createAnnotationToolButtons(buttons) {
    return buttons;
}
const annotationToolButtons = createAnnotationToolButtons([
    {
        type: 'copy',
        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stubTranslation"])('Copy'),
        tooltip: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stubTranslation"])('Copy text after selection'),
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiCopy"]
    },
    {
        type: 'highlight',
        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stubTranslation"])('Highlight'),
        tooltip: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stubTranslation"])('Highlight text after selection'),
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiHighlighterFill"],
        quickAction: true
    },
    {
        type: 'annotate',
        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stubTranslation"])('Annotate'),
        tooltip: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stubTranslation"])('Annotate text after selection'),
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$bs$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BsPencilSquare"]
    },
    {
        type: 'search',
        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stubTranslation"])('Search'),
        tooltip: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stubTranslation"])('Search text after selection'),
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiSearch"],
        quickAction: true
    },
    {
        type: 'dictionary',
        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stubTranslation"])('Dictionary'),
        tooltip: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stubTranslation"])('Look up text in dictionary after selection'),
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$tb$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TbHexagonLetterD"],
        quickAction: true
    },
    {
        type: 'wikipedia',
        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stubTranslation"])('Wikipedia'),
        tooltip: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stubTranslation"])('Look up text in Wikipedia after selection'),
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaWikipediaW"],
        quickAction: true
    },
    {
        type: 'translate',
        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stubTranslation"])('Translate'),
        tooltip: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stubTranslation"])('Translate text after selection'),
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$bs$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BsTranslate"],
        quickAction: true
    },
    {
        type: 'tts',
        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stubTranslation"])('Speak'),
        tooltip: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stubTranslation"])('Read text aloud after selection'),
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaHeadphones"],
        quickAction: true
    },
    {
        type: 'proofread',
        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stubTranslation"])('Proofread'),
        tooltip: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stubTranslation"])('Proofread text after selection'),
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoIosBuild"]
    }
]);
const annotationToolQuickActions = annotationToolButtons.filter((button)=>button.quickAction);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/readest-app/src/app/library/components/TransferQueuePanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.28.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.28.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-icons@5.4.0_react@19.2.0/node_modules/react-icons/md/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTransferQueue$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/hooks/useTransferQueue.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/hooks/useTranslation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useResponsiveSize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/hooks/useResponsiveSize.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useKeyDownActions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/hooks/useKeyDownActions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$libraryStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/libraryStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$transferStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/transferStore.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
const formatBytes = (bytes)=>{
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = [
        'B',
        'KB',
        'MB',
        'GB'
    ];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(1))} ${sizes[i]}`;
};
const formatSpeed = (bytesPerSec)=>{
    return `${formatBytes(bytesPerSec)}/s`;
};
const formatDateTime = (timestamp)=>{
    const date = new Date(timestamp);
    const now = new Date();
    const isToday = date.toDateString() === now.toDateString();
    const yesterday = new Date(now);
    yesterday.setDate(yesterday.getDate() - 1);
    const isYesterday = date.toDateString() === yesterday.toDateString();
    const timeStr = date.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
    });
    if (isToday) {
        return timeStr;
    } else if (isYesterday) {
        return `Yesterday ${timeStr}`;
    } else {
        return date.toLocaleDateString([], {
            month: 'short',
            day: 'numeric'
        }) + ' ' + timeStr;
    }
};
const StatusIcon = ({ status, type, size })=>{
    switch(status){
        case 'completed':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdCheckCircle"], {
                className: "text-success",
                size: size
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/library/components/TransferQueuePanel.tsx",
                lineNumber: 62,
                columnNumber: 14
            }, ("TURBOPACK compile-time value", void 0));
        case 'failed':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdError"], {
                className: "text-error",
                size: size
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/library/components/TransferQueuePanel.tsx",
                lineNumber: 64,
                columnNumber: 14
            }, ("TURBOPACK compile-time value", void 0));
        case 'cancelled':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdCancel"], {
                className: "text-warning",
                size: size
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/library/components/TransferQueuePanel.tsx",
                lineNumber: 66,
                columnNumber: 14
            }, ("TURBOPACK compile-time value", void 0));
        case 'in_progress':
        case 'pending':
        default:
            return type === 'upload' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdCloudUpload"], {
                className: "text-primary",
                size: size
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/library/components/TransferQueuePanel.tsx",
                lineNumber: 71,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)) : type === 'delete' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdDeleteSweep"], {
                className: "text-primary",
                size: size
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/library/components/TransferQueuePanel.tsx",
                lineNumber: 73,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdCloudDownload"], {
                className: "text-primary",
                size: size
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/library/components/TransferQueuePanel.tsx",
                lineNumber: 75,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
    }
};
_c = StatusIcon;
const TransferItemRow = ({ transfer, onCancel, onRetry, iconSize })=>{
    _s();
    const _ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const completedLabel = {
        upload: _('Uploaded'),
        download: _('Downloaded'),
        delete: _('Deleted')
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "hover:bg-base-200 flex items-center gap-3 rounded-lg p-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusIcon, {
                status: transfer.status,
                type: transfer.type,
                size: iconSize
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/library/components/TransferQueuePanel.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-w-0 flex-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "truncate font-medium",
                        children: transfer.bookTitle
                    }, void 0, false, {
                        fileName: "[project]/apps/readest-app/src/app/library/components/TransferQueuePanel.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-base-content/60 text-xs",
                        children: [
                            transfer.status === 'in_progress' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    Math.round(transfer.progress),
                                    "% - ",
                                    formatSpeed(transfer.transferSpeed)
                                ]
                            }, void 0, true),
                            transfer.status === 'pending' && transfer.error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-warning",
                                children: transfer.error
                            }, void 0, false, {
                                fileName: "[project]/apps/readest-app/src/app/library/components/TransferQueuePanel.tsx",
                                lineNumber: 107,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            transfer.status === 'pending' && !transfer.error && _('Waiting...'),
                            transfer.status === 'failed' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-error",
                                children: transfer.error || _('Failed')
                            }, void 0, false, {
                                fileName: "[project]/apps/readest-app/src/app/library/components/TransferQueuePanel.tsx",
                                lineNumber: 111,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            transfer.status === 'completed' && (completedLabel[transfer.type] || _('Completed')),
                            transfer.status === 'cancelled' && _('Cancelled'),
                            ' · ',
                            formatDateTime(transfer.completedAt || transfer.startedAt || transfer.createdAt)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/readest-app/src/app/library/components/TransferQueuePanel.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    transfer.status === 'in_progress' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-base-300 mt-1 h-1.5 w-full overflow-hidden rounded-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-primary h-full transition-all",
                            style: {
                                width: `${transfer.progress}%`
                            }
                        }, void 0, false, {
                            fileName: "[project]/apps/readest-app/src/app/library/components/TransferQueuePanel.tsx",
                            lineNumber: 121,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/apps/readest-app/src/app/library/components/TransferQueuePanel.tsx",
                        lineNumber: 120,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/readest-app/src/app/library/components/TransferQueuePanel.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-1",
                children: [
                    (transfer.status === 'failed' || transfer.status === 'cancelled') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onRetry(transfer.id),
                        className: "btn btn-ghost btn-sm btn-circle",
                        "aria-label": _('Retry'),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdRefresh"], {
                            size: iconSize
                        }, void 0, false, {
                            fileName: "[project]/apps/readest-app/src/app/library/components/TransferQueuePanel.tsx",
                            lineNumber: 136,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/apps/readest-app/src/app/library/components/TransferQueuePanel.tsx",
                        lineNumber: 131,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    [
                        'pending',
                        'in_progress'
                    ].includes(transfer.status) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onCancel(transfer.id),
                        className: "btn btn-ghost btn-sm btn-circle",
                        "aria-label": _('Cancel'),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdClose"], {
                            size: iconSize
                        }, void 0, false, {
                            fileName: "[project]/apps/readest-app/src/app/library/components/TransferQueuePanel.tsx",
                            lineNumber: 145,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/apps/readest-app/src/app/library/components/TransferQueuePanel.tsx",
                        lineNumber: 140,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/readest-app/src/app/library/components/TransferQueuePanel.tsx",
                lineNumber: 129,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/readest-app/src/app/library/components/TransferQueuePanel.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(TransferItemRow, "/1wxBjgIhZiLx4/tsSGZM/dW09g=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c1 = TransferItemRow;
const TransferQueuePanel = ()=>{
    _s1();
    const _ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const iconSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useResponsiveSize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResponsiveSize"])(18);
    const setIsOpen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$transferStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransferStore"])({
        "TransferQueuePanel.useTransferStore[setIsOpen]": (state)=>state.setIsTransferQueueOpen
    }["TransferQueuePanel.useTransferStore[setIsOpen]"]);
    const getVisibleLibrary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$libraryStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLibraryStore"])({
        "TransferQueuePanel.useLibraryStore[getVisibleLibrary]": (state)=>state.getVisibleLibrary
    }["TransferQueuePanel.useLibraryStore[getVisibleLibrary]"]);
    const { transfers, stats, isQueuePaused, cancelTransfer, retryTransfer, retryAllFailed, pauseQueue, resumeQueue, clearCompleted, clearFailed, queueUpload, queueDownload } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTransferQueue$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransferQueue"])();
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const onClose = ()=>setIsOpen(false);
    const divRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useKeyDownActions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKeyDownActions"])({
        onCancel: onClose,
        onConfirm: onClose
    });
    const booksToUpload = getVisibleLibrary().filter((book)=>book.downloadedAt && !book.uploadedAt);
    const booksToDownload = getVisibleLibrary().filter((book)=>book.uploadedAt && !book.downloadedAt);
    const handleUploadAll = ()=>{
        booksToUpload.forEach((book)=>queueUpload(book));
    };
    const handleDownloadAll = ()=>{
        booksToDownload.forEach((book)=>queueDownload(book));
    };
    const filteredTransfers = transfers.filter((t)=>{
        switch(filter){
            case 'active':
                return [
                    'pending',
                    'in_progress'
                ].includes(t.status);
            case 'completed':
                return t.status === 'completed';
            case 'failed':
                return t.status === 'failed' || t.status === 'cancelled';
            default:
                return true;
        }
    }).sort((a, b)=>{
        // Sort by status priority then by createdAt
        const statusOrder = {
            in_progress: 0,
            pending: 1,
            failed: 2,
            cancelled: 3,
            completed: 4
        };
        const statusDiff = statusOrder[a.status] - statusOrder[b.status];
        if (statusDiff !== 0) return statusDiff;
        return b.createdAt - a.createdAt;
    });
    const filterLabels = {
        all: _('All'),
        active: _('Active'),
        completed: _('Completed'),
        failed: _('Failed')
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black/50",
                onClick: onClose
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/library/components/TransferQueuePanel.tsx",
                lineNumber: 230,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: divRef,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('modal-box bg-base-100 relative flex max-h-[85%] min-h-[65%] w-[95%] flex-col rounded-2xl p-0 shadow-xl', 'min-w-64 max-w-lg overflow-hidden'),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-base-300 flex items-center justify-between border-b p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-semibold",
                                children: _('Transfer Queue')
                            }, void 0, false, {
                                fileName: "[project]/apps/readest-app/src/app/library/components/TransferQueuePanel.tsx",
                                lineNumber: 240,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    booksToUpload.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleUploadAll,
                                        className: "btn btn-ghost btn-sm gap-1",
                                        title: _('Upload All'),
                                        "aria-label": _('Upload All'),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdCloudUpload"], {
                                                size: iconSize
                                            }, void 0, false, {
                                                fileName: "[project]/apps/readest-app/src/app/library/components/TransferQueuePanel.tsx",
                                                lineNumber: 249,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs",
                                                children: booksToUpload.length
                                            }, void 0, false, {
                                                fileName: "[project]/apps/readest-app/src/app/library/components/TransferQueuePanel.tsx",
                                                lineNumber: 250,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/readest-app/src/app/library/components/TransferQueuePanel.tsx",
                                        lineNumber: 243,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    booksToDownload.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleDownloadAll,
                                        className: "btn btn-ghost btn-sm gap-1",
                                        title: _('Download All'),
                                        "aria-label": _('Download All'),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdCloudDownload"], {
                                                size: iconSize
                                            }, void 0, false, {
                                                fileName: "[project]/apps/readest-app/src/app/library/components/TransferQueuePanel.tsx",
                                                lineNumber: 260,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs",
                                                children: booksToDownload.length
                                            }, void 0, false, {
                                                fileName: "[project]/apps/readest-app/src/app/library/components/TransferQueuePanel.tsx",
                                                lineNumber: 261,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/readest-app/src/app/library/components/TransferQueuePanel.tsx",
                                        lineNumber: 254,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: isQueuePaused ? resumeQueue : pauseQueue,
                                        className: "btn btn-ghost btn-sm btn-circle",
                                        title: isQueuePaused ? _('Resume Transfers') : _('Pause Transfers'),
                                        "aria-label": isQueuePaused ? _('Resume Transfers') : _('Pause Transfers'),
                                        children: isQueuePaused ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdPlayArrow"], {
                                            size: iconSize
                                        }, void 0, false, {
                                            fileName: "[project]/apps/readest-app/src/app/library/components/TransferQueuePanel.tsx",
                                            lineNumber: 270,
                                            columnNumber: 32
                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdPause"], {
                                            size: iconSize
                                        }, void 0, false, {
                                            fileName: "[project]/apps/readest-app/src/app/library/components/TransferQueuePanel.tsx",
                                            lineNumber: 270,
                                            columnNumber: 66
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/apps/readest-app/src/app/library/components/TransferQueuePanel.tsx",
                                        lineNumber: 264,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: onClose,
                                        className: "btn btn-ghost btn-sm btn-circle",
                                        title: _('Close'),
                                        "aria-label": _('Close'),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdClose"], {
                                            size: iconSize
                                        }, void 0, false, {
                                            fileName: "[project]/apps/readest-app/src/app/library/components/TransferQueuePanel.tsx",
                                            lineNumber: 278,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/apps/readest-app/src/app/library/components/TransferQueuePanel.tsx",
                                        lineNumber: 272,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/readest-app/src/app/library/components/TransferQueuePanel.tsx",
                                lineNumber: 241,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/readest-app/src/app/library/components/TransferQueuePanel.tsx",
                        lineNumber: 239,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-base-200 flex items-center gap-4 px-4 py-2 text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    _('Active'),
                                    ": ",
                                    stats.active
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/readest-app/src/app/library/components/TransferQueuePanel.tsx",
                                lineNumber: 285,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    _('Pending'),
                                    ": ",
                                    stats.pending
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/readest-app/src/app/library/components/TransferQueuePanel.tsx",
                                lineNumber: 288,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    _('Completed'),
                                    ": ",
                                    stats.completed
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/readest-app/src/app/library/components/TransferQueuePanel.tsx",
                                lineNumber: 291,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    _('Failed'),
                                    ": ",
                                    stats.failed
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/readest-app/src/app/library/components/TransferQueuePanel.tsx",
                                lineNumber: 294,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/readest-app/src/app/library/components/TransferQueuePanel.tsx",
                        lineNumber: 284,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-base-300 flex gap-2 border-b p-4",
                        children: [
                            'all',
                            'active',
                            'completed',
                            'failed'
                        ].map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setFilter(f),
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('rounded-lg px-3 py-1 text-sm transition-colors', filter === f ? 'bg-primary text-primary-content' : 'bg-base-200 hover:bg-base-300'),
                                children: filterLabels[f]
                            }, f, false, {
                                fileName: "[project]/apps/readest-app/src/app/library/components/TransferQueuePanel.tsx",
                                lineNumber: 302,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/apps/readest-app/src/app/library/components/TransferQueuePanel.tsx",
                        lineNumber: 300,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto p-2",
                        children: filteredTransfers.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-base-content/60 py-8 text-center",
                            children: _('No transfers')
                        }, void 0, false, {
                            fileName: "[project]/apps/readest-app/src/app/library/components/TransferQueuePanel.tsx",
                            lineNumber: 318,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)) : filteredTransfers.map((transfer)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TransferItemRow, {
                                transfer: transfer,
                                onCancel: cancelTransfer,
                                onRetry: retryTransfer,
                                iconSize: iconSize
                            }, transfer.id, false, {
                                fileName: "[project]/apps/readest-app/src/app/library/components/TransferQueuePanel.tsx",
                                lineNumber: 321,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/apps/readest-app/src/app/library/components/TransferQueuePanel.tsx",
                        lineNumber: 316,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-base-300 flex items-center justify-between border-t p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: stats.failed > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: retryAllFailed,
                                    className: "btn btn-ghost btn-sm gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdRefresh"], {
                                            size: iconSize - 2
                                        }, void 0, false, {
                                            fileName: "[project]/apps/readest-app/src/app/library/components/TransferQueuePanel.tsx",
                                            lineNumber: 337,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        _('Retry All')
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/readest-app/src/app/library/components/TransferQueuePanel.tsx",
                                    lineNumber: 336,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/apps/readest-app/src/app/library/components/TransferQueuePanel.tsx",
                                lineNumber: 334,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    stats.completed > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: clearCompleted,
                                        className: "btn btn-ghost btn-sm gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdDeleteSweep"], {
                                                size: iconSize - 2
                                            }, void 0, false, {
                                                fileName: "[project]/apps/readest-app/src/app/library/components/TransferQueuePanel.tsx",
                                                lineNumber: 345,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            _('Clear Completed')
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/readest-app/src/app/library/components/TransferQueuePanel.tsx",
                                        lineNumber: 344,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    stats.failed > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: clearFailed,
                                        className: "btn btn-ghost btn-sm gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdDeleteSweep"], {
                                                size: iconSize - 2
                                            }, void 0, false, {
                                                fileName: "[project]/apps/readest-app/src/app/library/components/TransferQueuePanel.tsx",
                                                lineNumber: 351,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            _('Clear Failed')
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/readest-app/src/app/library/components/TransferQueuePanel.tsx",
                                        lineNumber: 350,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/readest-app/src/app/library/components/TransferQueuePanel.tsx",
                                lineNumber: 342,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/readest-app/src/app/library/components/TransferQueuePanel.tsx",
                        lineNumber: 333,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/readest-app/src/app/library/components/TransferQueuePanel.tsx",
                lineNumber: 231,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/readest-app/src/app/library/components/TransferQueuePanel.tsx",
        lineNumber: 228,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(TransferQueuePanel, "JGUyoyOPD4vUCg2qQVvwML/ec0g=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useResponsiveSize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResponsiveSize"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$transferStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransferStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$libraryStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLibraryStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTransferQueue$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransferQueue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useKeyDownActions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKeyDownActions"]
    ];
});
_c2 = TransferQueuePanel;
const __TURBOPACK__default__export__ = TransferQueuePanel;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "StatusIcon");
__turbopack_context__.k.register(_c1, "TransferItemRow");
__turbopack_context__.k.register(_c2, "TransferQueuePanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/readest-app/src/app/library/components/ReconcileModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.28.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.28.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-icons@5.4.0_react@19.2.0/node_modules/react-icons/md/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const ReconcileModal = ({ isOpen, onClose, onConfirm, reconcileBookPaths, applyReconciliation, books })=>{
    _s();
    const [isScanning, setIsScanning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scanComplete, setScanComplete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [reconcileData, setReconcileData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedResults, setSelectedResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    if (!isOpen) return null;
    const handleScan = async ()=>{
        setIsScanning(true);
        setScanComplete(false);
        try {
            const result = await reconcileBookPaths(books);
            setReconcileData(result);
            setScanComplete(true);
            // 默认选中所有需要调整的书籍
            if (result.results) {
                const movedBooks = result.results.filter((r)=>r.status === 'moved').map((r)=>r.hash);
                setSelectedResults(new Set(movedBooks));
            }
        } catch (error) {
            console.error('路径校准失败:', error);
            alert('路径校准失败，请查看控制台日志');
        } finally{
            setIsScanning(false);
        }
    };
    const handleApply = async ()=>{
        if (!reconcileData || !reconcileData.results) return;
        const selectedItems = reconcileData.results.filter((r)=>selectedResults.has(r.hash));
        try {
            await applyReconciliation(books, selectedItems);
            onConfirm(selectedItems);
            onClose();
        } catch (error) {
            console.error('应用校准结果失败:', error);
            alert('应用校准结果失败，请查看控制台日志');
        }
    };
    const toggleSelection = (hash)=>{
        const newSelection = new Set(selectedResults);
        if (newSelection.has(hash)) {
            newSelection.delete(hash);
        } else {
            newSelection.add(hash);
        }
        setSelectedResults(newSelection);
    };
    const getStatusIcon = (status)=>{
        switch(status){
            case 'matched':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdCheckCircle"], {
                    className: "text-success",
                    size: 20
                }, void 0, false, {
                    fileName: "[project]/apps/readest-app/src/app/library/components/ReconcileModal.tsx",
                    lineNumber: 94,
                    columnNumber: 24
                }, ("TURBOPACK compile-time value", void 0));
            case 'moved':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdWarning"], {
                    className: "text-warning",
                    size: 20
                }, void 0, false, {
                    fileName: "[project]/apps/readest-app/src/app/library/components/ReconcileModal.tsx",
                    lineNumber: 96,
                    columnNumber: 24
                }, ("TURBOPACK compile-time value", void 0));
            case 'missing':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdError"], {
                    className: "text-error",
                    size: 20
                }, void 0, false, {
                    fileName: "[project]/apps/readest-app/src/app/library/components/ReconcileModal.tsx",
                    lineNumber: 98,
                    columnNumber: 24
                }, ("TURBOPACK compile-time value", void 0));
            default:
                return null;
        }
    };
    const getStatusText = (status)=>{
        switch(status){
            case 'matched':
                return '路径匹配';
            case 'moved':
                return '文件已移动';
            case 'missing':
                return '文件丢失';
            default:
                return status;
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-base-100 rounded-2xl shadow-xl w-full max-w-4xl max-h-[80vh] overflow-hidden flex flex-col",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-6 py-4 border-b border-base-300",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-bold flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdSync"], {
                                    size: 24
                                }, void 0, false, {
                                    fileName: "[project]/apps/readest-app/src/app/library/components/ReconcileModal.tsx",
                                    lineNumber: 123,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                "书籍路径校准"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/readest-app/src/app/library/components/ReconcileModal.tsx",
                            lineNumber: 122,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-base-content/70 mt-2",
                            children: "扫描文件系统，检测书籍文件位置变化并同步到书库"
                        }, void 0, false, {
                            fileName: "[project]/apps/readest-app/src/app/library/components/ReconcileModal.tsx",
                            lineNumber: 126,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/readest-app/src/app/library/components/ReconcileModal.tsx",
                    lineNumber: 121,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 overflow-y-auto px-6 py-4",
                    children: !scanComplete ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleScan,
                                disabled: isScanning,
                                className: "btn btn-primary btn-lg",
                                children: isScanning ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "loading loading-spinner"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/readest-app/src/app/library/components/ReconcileModal.tsx",
                                            lineNumber: 142,
                                            columnNumber: 41
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        "扫描中..."
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdSync"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/apps/readest-app/src/app/library/components/ReconcileModal.tsx",
                                            lineNumber: 147,
                                            columnNumber: 41
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        "开始扫描"
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/apps/readest-app/src/app/library/components/ReconcileModal.tsx",
                                lineNumber: 135,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-base-content/60 mt-4",
                                children: "点击开始扫描文件系统，查找路径不一致的书籍"
                            }, void 0, false, {
                                fileName: "[project]/apps/readest-app/src/app/library/components/ReconcileModal.tsx",
                                lineNumber: 152,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/readest-app/src/app/library/components/ReconcileModal.tsx",
                        lineNumber: 134,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            reconcileData?.summary && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "stats stats-horizontal shadow w-full mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "stat",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "stat-title",
                                                children: "总计"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/readest-app/src/app/library/components/ReconcileModal.tsx",
                                                lineNumber: 162,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "stat-value text-2xl",
                                                children: reconcileData.summary.total
                                            }, void 0, false, {
                                                fileName: "[project]/apps/readest-app/src/app/library/components/ReconcileModal.tsx",
                                                lineNumber: 163,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/readest-app/src/app/library/components/ReconcileModal.tsx",
                                        lineNumber: 161,
                                        columnNumber: 37
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "stat",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "stat-title",
                                                children: "匹配"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/readest-app/src/app/library/components/ReconcileModal.tsx",
                                                lineNumber: 166,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "stat-value text-2xl text-success",
                                                children: reconcileData.summary.matched
                                            }, void 0, false, {
                                                fileName: "[project]/apps/readest-app/src/app/library/components/ReconcileModal.tsx",
                                                lineNumber: 167,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/readest-app/src/app/library/components/ReconcileModal.tsx",
                                        lineNumber: 165,
                                        columnNumber: 37
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "stat",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "stat-title",
                                                children: "已移动"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/readest-app/src/app/library/components/ReconcileModal.tsx",
                                                lineNumber: 172,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "stat-value text-2xl text-warning",
                                                children: reconcileData.summary.moved
                                            }, void 0, false, {
                                                fileName: "[project]/apps/readest-app/src/app/library/components/ReconcileModal.tsx",
                                                lineNumber: 173,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/readest-app/src/app/library/components/ReconcileModal.tsx",
                                        lineNumber: 171,
                                        columnNumber: 37
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "stat",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "stat-title",
                                                children: "丢失"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/readest-app/src/app/library/components/ReconcileModal.tsx",
                                                lineNumber: 178,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "stat-value text-2xl text-error",
                                                children: reconcileData.summary.missing
                                            }, void 0, false, {
                                                fileName: "[project]/apps/readest-app/src/app/library/components/ReconcileModal.tsx",
                                                lineNumber: 179,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/readest-app/src/app/library/components/ReconcileModal.tsx",
                                        lineNumber: 177,
                                        columnNumber: 37
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/readest-app/src/app/library/components/ReconcileModal.tsx",
                                lineNumber: 160,
                                columnNumber: 33
                            }, ("TURBOPACK compile-time value", void 0)),
                            reconcileData?.results && reconcileData.results.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-semibold mb-2",
                                        children: "详细结果"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/readest-app/src/app/library/components/ReconcileModal.tsx",
                                        lineNumber: 189,
                                        columnNumber: 37
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    reconcileData.results.filter((r)=>r.status !== 'matched').map((result)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "card bg-base-200 shadow-sm hover:shadow-md transition-shadow",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "card-body p-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-start gap-3",
                                                    children: [
                                                        result.status === 'moved' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "checkbox",
                                                            className: "checkbox checkbox-primary mt-1",
                                                            checked: selectedResults.has(result.hash),
                                                            onChange: ()=>toggleSelection(result.hash)
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/readest-app/src/app/library/components/ReconcileModal.tsx",
                                                            lineNumber: 200,
                                                            columnNumber: 61
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-2 mb-2",
                                                                    children: [
                                                                        getStatusIcon(result.status),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-semibold",
                                                                            children: getStatusText(result.status)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/readest-app/src/app/library/components/ReconcileModal.tsx",
                                                                            lineNumber: 210,
                                                                            columnNumber: 65
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/apps/readest-app/src/app/library/components/ReconcileModal.tsx",
                                                                    lineNumber: 208,
                                                                    columnNumber: 61
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                result.oldRelativePath && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-base-content/60",
                                                                            children: "原路径: "
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/readest-app/src/app/library/components/ReconcileModal.tsx",
                                                                            lineNumber: 214,
                                                                            columnNumber: 69
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-mono",
                                                                            children: result.oldRelativePath
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/readest-app/src/app/library/components/ReconcileModal.tsx",
                                                                            lineNumber: 215,
                                                                            columnNumber: 69
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/apps/readest-app/src/app/library/components/ReconcileModal.tsx",
                                                                    lineNumber: 213,
                                                                    columnNumber: 65
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                result.newRelativePath && result.status === 'moved' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-base-content/60",
                                                                            children: "新路径: "
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/readest-app/src/app/library/components/ReconcileModal.tsx",
                                                                            lineNumber: 220,
                                                                            columnNumber: 69
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-mono text-success",
                                                                            children: result.newRelativePath
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/readest-app/src/app/library/components/ReconcileModal.tsx",
                                                                            lineNumber: 221,
                                                                            columnNumber: 69
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/apps/readest-app/src/app/library/components/ReconcileModal.tsx",
                                                                    lineNumber: 219,
                                                                    columnNumber: 65
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                result.suggestedGroupName !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-base-content/60",
                                                                            children: "建议分组: "
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/readest-app/src/app/library/components/ReconcileModal.tsx",
                                                                            lineNumber: 228,
                                                                            columnNumber: 69
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "badge badge-primary badge-sm",
                                                                            children: result.suggestedGroupName || '未分组'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/readest-app/src/app/library/components/ReconcileModal.tsx",
                                                                            lineNumber: 229,
                                                                            columnNumber: 69
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/apps/readest-app/src/app/library/components/ReconcileModal.tsx",
                                                                    lineNumber: 227,
                                                                    columnNumber: 65
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                result.message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs text-base-content/50 mt-1",
                                                                    children: result.message
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/readest-app/src/app/library/components/ReconcileModal.tsx",
                                                                    lineNumber: 235,
                                                                    columnNumber: 65
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/readest-app/src/app/library/components/ReconcileModal.tsx",
                                                            lineNumber: 207,
                                                            columnNumber: 57
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/readest-app/src/app/library/components/ReconcileModal.tsx",
                                                    lineNumber: 198,
                                                    columnNumber: 53
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/apps/readest-app/src/app/library/components/ReconcileModal.tsx",
                                                lineNumber: 197,
                                                columnNumber: 49
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, result.hash, false, {
                                            fileName: "[project]/apps/readest-app/src/app/library/components/ReconcileModal.tsx",
                                            lineNumber: 193,
                                            columnNumber: 45
                                        }, ("TURBOPACK compile-time value", void 0)))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/readest-app/src/app/library/components/ReconcileModal.tsx",
                                lineNumber: 188,
                                columnNumber: 33
                            }, ("TURBOPACK compile-time value", void 0)),
                            reconcileData?.unmatchedFiles && reconcileData.unmatchedFiles.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-semibold mb-2",
                                        children: "未匹配的文件"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/readest-app/src/app/library/components/ReconcileModal.tsx",
                                        lineNumber: 249,
                                        columnNumber: 37
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-base-content/60 mb-2",
                                        children: "这些文件存在于文件系统中，但不在书库记录中"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/readest-app/src/app/library/components/ReconcileModal.tsx",
                                        lineNumber: 250,
                                        columnNumber: 37
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1 max-h-40 overflow-y-auto",
                                        children: reconcileData.unmatchedFiles.map((file)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm font-mono bg-base-300 px-3 py-2 rounded",
                                                children: file
                                            }, file, false, {
                                                fileName: "[project]/apps/readest-app/src/app/library/components/ReconcileModal.tsx",
                                                lineNumber: 255,
                                                columnNumber: 45
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/apps/readest-app/src/app/library/components/ReconcileModal.tsx",
                                        lineNumber: 253,
                                        columnNumber: 37
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/readest-app/src/app/library/components/ReconcileModal.tsx",
                                lineNumber: 248,
                                columnNumber: 33
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/readest-app/src/app/library/components/ReconcileModal.tsx",
                        lineNumber: 157,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/apps/readest-app/src/app/library/components/ReconcileModal.tsx",
                    lineNumber: 132,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-6 py-4 border-t border-base-300 flex justify-end gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "btn btn-ghost",
                            children: "取消"
                        }, void 0, false, {
                            fileName: "[project]/apps/readest-app/src/app/library/components/ReconcileModal.tsx",
                            lineNumber: 268,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        scanComplete && reconcileData?.summary?.moved > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleScan,
                                    className: "btn btn-ghost",
                                    children: "重新扫描"
                                }, void 0, false, {
                                    fileName: "[project]/apps/readest-app/src/app/library/components/ReconcileModal.tsx",
                                    lineNumber: 273,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleApply,
                                    className: "btn btn-primary",
                                    disabled: selectedResults.size === 0,
                                    children: [
                                        "应用选中的调整 (",
                                        selectedResults.size,
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/readest-app/src/app/library/components/ReconcileModal.tsx",
                                    lineNumber: 276,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/readest-app/src/app/library/components/ReconcileModal.tsx",
                    lineNumber: 267,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/apps/readest-app/src/app/library/components/ReconcileModal.tsx",
            lineNumber: 119,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/readest-app/src/app/library/components/ReconcileModal.tsx",
        lineNumber: 118,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ReconcileModal, "Q/dmGqrapqaOj43dI/hmAMj7Y10=");
_c = ReconcileModal;
const __TURBOPACK__default__export__ = ReconcileModal;
var _c;
__turbopack_context__.k.register(_c, "ReconcileModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/readest-app/src/app/library/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.28.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.28.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-icons@5.4.0_react@19.2.0/node_modules/react-icons/md/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.28.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$overlayscrollbars$2d$react$40$0$2e$5$2e$6_overlayscrollbars$40$2$2e$11$2e$4_react$40$19$2e$2$2e$0$2f$node_modules$2f$overlayscrollbars$2d$react$2f$overlayscrollbars$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/overlayscrollbars-react@0.5.6_overlayscrollbars@2.11.4_react@19.2.0/node_modules/overlayscrollbars-react/overlayscrollbars-react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$nav$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/nav.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$book$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/book.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/event.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$throttle$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/throttle.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$transferManager$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/transferManager.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$path$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/path.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$helpers$2f$openWith$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/helpers/openWith.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/environment.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$helpers$2f$updater$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/helpers/updater.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$plugin$2d$haptics$40$2$2e$3$2e$2$2f$node_modules$2f40$tauri$2d$apps$2f$plugin$2d$haptics$2f$dist$2d$js$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tauri-apps+plugin-haptics@2.3.2/node_modules/@tauri-apps/plugin-haptics/dist-js/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$webview$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tauri-apps+api@2.9.1/node_modules/@tauri-apps/api/webview.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/context/EnvContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/context/AuthContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$themeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/themeStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/hooks/useTranslation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$libraryStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/libraryStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/settingsStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useResponsiveSize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/hooks/useResponsiveSize.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$usePullToRefresh$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/hooks/usePullToRefresh.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/hooks/useTheme.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useUICSS$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/hooks/useUICSS.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$library$2f$hooks$2f$useDemoBooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/app/library/hooks/useDemoBooks.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$library$2f$hooks$2f$useBooksSync$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/app/library/hooks/useBooksSync.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/bookDataStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$transferStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/transferStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useScreenWakeLock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/hooks/useScreenWakeLock.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useOpenWithBooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/hooks/useOpenWithBooks.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useFileSelector$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/hooks/useFileSelector.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$bridge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/bridge.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$permission$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/permission.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$window$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/window.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$AboutWindow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/components/AboutWindow.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$metadata$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/readest-app/src/components/metadata/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$metadata$2f$BookDetailModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookDetailModal$3e$__ = __turbopack_context__.i("[project]/apps/readest-app/src/components/metadata/BookDetailModal.tsx [app-client] (ecmascript) <export default as BookDetailModal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$UpdaterWindow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/components/UpdaterWindow.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$library$2f$components$2f$OPDSDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/app/library/components/OPDSDialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$library$2f$components$2f$MigrateDataWindow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/app/library/components/MigrateDataWindow.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$library$2f$hooks$2f$useDragDropImport$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/app/library/hooks/useDragDropImport.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTransferQueue$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/hooks/useTransferQueue.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/components/Toast.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$library$2f$utils$2f$libraryUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/app/library/utils/libraryUtils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$Spinner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/components/Spinner.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$library$2f$components$2f$LibraryHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/app/library/components/LibraryHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$library$2f$components$2f$Bookshelf$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/app/library/components/Bookshelf.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useShortcuts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/hooks/useShortcuts.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$DropIndicator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/components/DropIndicator.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$settings$2f$SettingsDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/components/settings/SettingsDialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$ModalPortal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/components/ModalPortal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$library$2f$components$2f$TransferQueuePanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/app/library/components/TransferQueuePanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$library$2f$components$2f$ReconcileModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/app/library/components/ReconcileModal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const LibraryPageWithSearchParams = ()=>{
    _s();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LibraryPageContent, {
        searchParams: searchParams
    }, void 0, false, {
        fileName: "[project]/apps/readest-app/src/app/library/page.tsx",
        lineNumber: 75,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_s(LibraryPageWithSearchParams, "a+DZx9DY26Zf8FVy1bxe3vp9l1w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = LibraryPageWithSearchParams;
const LibraryPageContent = ({ searchParams })=>{
    _s1();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { envConfig, appService } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEnv"])();
    const { token, user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const { library: libraryBooks, isSyncing, syncProgress, updateBook, updateBooks, setLibrary, getGroupId, getGroupName, refreshGroups, checkOpenWithBooks, checkLastOpenBooks, setCheckOpenWithBooks, setCheckLastOpenBooks } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$libraryStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLibraryStore"])();
    const _ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const { selectFiles } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useFileSelector$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFileSelector"])(appService, _);
    const { safeAreaInsets: insets, isRoundedWindow } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$themeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeStore"])();
    const { clearBookData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBookDataStore"])();
    const { settings, setSettings, saveSettings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSettingsStore"])();
    const { isSettingsDialogOpen, setSettingsDialogOpen } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSettingsStore"])();
    const { isTransferQueueOpen } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$transferStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransferStore"])();
    const [showCatalogManager, setShowCatalogManager] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(searchParams?.get('opds') === 'true');
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [libraryLoaded, setLibraryLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSelectMode, setIsSelectMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSelectAll, setIsSelectAll] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSelectNone, setIsSelectNone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showDetailsBook, setShowDetailsBook] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showReconcileModal, setShowReconcileModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentGroupPath, setCurrentGroupPath] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const [booksTransferProgress, setBooksTransferProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [pendingNavigationBookIds, setPendingNavigationBookIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const isInitiating = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const iconSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useResponsiveSize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResponsiveSize"])(18);
    const viewSettings = settings.globalViewSettings;
    const demoBooks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$library$2f$hooks$2f$useDemoBooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDemoBooks"])();
    const osRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])({
        systemUIVisible: true,
        appThemeColor: 'base-200'
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useUICSS$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUICSS"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useOpenWithBooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOpenWithBooks"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTransferQueue$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransferQueue"])(libraryLoaded);
    const { pullLibrary, pushLibrary } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$library$2f$hooks$2f$useBooksSync$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBooksSync"])();
    const { isDragging } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$library$2f$hooks$2f$useDragDropImport$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDragDropImport"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$usePullToRefresh$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePullToRefresh"])(containerRef, pullLibrary);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useScreenWakeLock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScreenWakeLock"])(settings.screenWakeLock);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useShortcuts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        onToggleFullscreen: {
            "LibraryPageContent.useShortcuts": async ()=>{
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTauriAppPlatform"])()) {
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$window$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tauriHandleToggleFullScreen"])();
                }
            }
        }["LibraryPageContent.useShortcuts"],
        onCloseWindow: {
            "LibraryPageContent.useShortcuts": async ()=>{
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTauriAppPlatform"])()) {
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$window$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tauriHandleClose"])();
                }
            }
        }["LibraryPageContent.useShortcuts"],
        onQuitApp: {
            "LibraryPageContent.useShortcuts": async ()=>{
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTauriAppPlatform"])()) {
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$window$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tauriQuitApp"])();
                }
            }
        }["LibraryPageContent.useShortcuts"],
        onOpenFontLayoutSettings: {
            "LibraryPageContent.useShortcuts": ()=>{
                setSettingsDialogOpen(true);
            }
        }["LibraryPageContent.useShortcuts"],
        onOpenBooks: {
            "LibraryPageContent.useShortcuts": ()=>{
                handleImportBooksFromFiles();
            }
        }["LibraryPageContent.useShortcuts"]
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LibraryPageContent.useEffect": ()=>{
            sessionStorage.setItem('lastLibraryParams', searchParams?.toString() || '');
        }
    }["LibraryPageContent.useEffect"], [
        searchParams
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LibraryPageContent.useEffect": ()=>{
            const doCheckAppUpdates = {
                "LibraryPageContent.useEffect.doCheckAppUpdates": async ()=>{
                    if (appService?.hasUpdater && settings.autoCheckUpdates) {
                        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$helpers$2f$updater$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkForAppUpdates"])(_);
                    } else if (appService?.hasUpdater === false) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$helpers$2f$updater$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkAppReleaseNotes"])();
                    }
                }
            }["LibraryPageContent.useEffect.doCheckAppUpdates"];
            if (settings.alwaysOnTop) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$window$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tauriHandleSetAlwaysOnTop"])(settings.alwaysOnTop);
            }
            doCheckAppUpdates();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["LibraryPageContent.useEffect"], [
        appService?.hasUpdater,
        settings
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LibraryPageContent.useEffect": ()=>{
            if (appService?.isMobileApp) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$bridge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lockScreenOrientation"])({
                    orientation: 'auto'
                });
            }
        }
    }["LibraryPageContent.useEffect"], [
        appService
    ]);
    const handleRefreshLibrary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LibraryPageContent.useCallback[handleRefreshLibrary]": async ()=>{
            const appService = await envConfig.getAppService();
            const settings = await appService.loadSettings();
            const library = await appService.loadLibraryBooks();
            setSettings(settings);
            setLibrary(library);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["LibraryPageContent.useCallback[handleRefreshLibrary]"], [
        envConfig,
        appService
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LibraryPageContent.useEffect": ()=>{
            if (appService?.hasWindow) {
                const currentWebview = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$webview$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentWebview"])();
                const unlisten = currentWebview.listen('close-reader-window', {
                    "LibraryPageContent.useEffect.unlisten": async ()=>{
                        handleRefreshLibrary();
                    }
                }["LibraryPageContent.useEffect.unlisten"]);
                return ({
                    "LibraryPageContent.useEffect": ()=>{
                        unlisten.then({
                            "LibraryPageContent.useEffect": (fn)=>fn()
                        }["LibraryPageContent.useEffect"]);
                    }
                })["LibraryPageContent.useEffect"];
            }
            return;
        }
    }["LibraryPageContent.useEffect"], [
        appService,
        handleRefreshLibrary
    ]);
    const handleImportBookFiles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LibraryPageContent.useCallback[handleImportBookFiles]": async (event)=>{
            const selectedFiles = event.detail.files;
            const groupId = event.detail.groupId || '';
            if (selectedFiles.length === 0) return;
            await importBooks(selectedFiles, groupId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["LibraryPageContent.useCallback[handleImportBookFiles]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LibraryPageContent.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eventDispatcher"].on('import-book-files', handleImportBookFiles);
            return ({
                "LibraryPageContent.useEffect": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eventDispatcher"].off('import-book-files', handleImportBookFiles);
                }
            })["LibraryPageContent.useEffect"];
        }
    }["LibraryPageContent.useEffect"], [
        handleImportBookFiles
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LibraryPageContent.useEffect": ()=>{
            refreshGroups();
            if (!libraryBooks.some({
                "LibraryPageContent.useEffect": (book)=>!book.deletedAt
            }["LibraryPageContent.useEffect"])) {
                handleSetSelectMode(false);
            }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["LibraryPageContent.useEffect"], [
        libraryBooks
    ]);
    const processOpenWithFiles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LibraryPageContent.useCallback[processOpenWithFiles]": async (appService, openWithFiles, libraryBooks)=>{
            const settings = await appService.loadSettings();
            const bookIds = [];
            for (const file of openWithFiles){
                console.log('Open with book:', file);
                try {
                    const temp = appService.isMobile ? false : !settings.autoImportBooksOnOpen;
                    const book = await appService.importBook(file, libraryBooks, true, true, false, temp);
                    if (book) {
                        bookIds.push(book.hash);
                    }
                    if (user && book && !temp && !book.uploadedAt && settings.autoUpload) {
                        setTimeout({
                            "LibraryPageContent.useCallback[processOpenWithFiles]": ()=>{
                                console.log('Queueing upload for book:', book.title);
                                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$transferManager$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transferManager"].queueUpload(book);
                            // wait for the initialization of the transfer manager and opening of the book
                            }
                        }["LibraryPageContent.useCallback[processOpenWithFiles]"], 3000);
                    }
                } catch (error) {
                    console.log('Failed to import book:', file, error);
                }
            }
            setLibrary(libraryBooks);
            appService.saveLibraryBooks(libraryBooks);
            console.log('Opening books:', bookIds);
            if (bookIds.length > 0) {
                setPendingNavigationBookIds(bookIds);
                return true;
            }
            return false;
        }
    }["LibraryPageContent.useCallback[processOpenWithFiles]"], // eslint-disable-next-line react-hooks/exhaustive-deps
    []);
    const handleOpenLastBooks = async (appService, lastBookIds, libraryBooks)=>{
        if (lastBookIds.length === 0) return false;
        const bookIds = [];
        for (const bookId of lastBookIds){
            const book = libraryBooks.find((b)=>b.hash === bookId);
            if (book && await appService.isBookAvailable(book)) {
                bookIds.push(book.hash);
            }
        }
        console.log('Opening last books:', bookIds);
        if (bookIds.length > 0) {
            setPendingNavigationBookIds(bookIds);
            return true;
        }
        return false;
    };
    const handleShowOPDSDialog = ()=>{
        setShowCatalogManager(true);
    };
    const handleDismissOPDSDialog = ()=>{
        setShowCatalogManager(false);
        const params = new URLSearchParams(searchParams?.toString());
        params.delete('opds');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$nav$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navigateToLibrary"])(router, `${params.toString()}`);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LibraryPageContent.useEffect": ()=>{
            if (pendingNavigationBookIds) {
                const bookIds = pendingNavigationBookIds;
                setPendingNavigationBookIds(null);
                if (bookIds.length > 0) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$nav$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navigateToReader"])(router, bookIds);
                }
            }
        }
    }["LibraryPageContent.useEffect"], [
        pendingNavigationBookIds,
        appService,
        router
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LibraryPageContent.useEffect": ()=>{
            if (isInitiating.current) return;
            isInitiating.current = true;
            const initLogin = {
                "LibraryPageContent.useEffect.initLogin": async ()=>{
                    const appService = await envConfig.getAppService();
                    const settings = await appService.loadSettings();
                    if (token && user) {
                        if (!settings.keepLogin) {
                            settings.keepLogin = true;
                            setSettings(settings);
                            saveSettings(envConfig, settings);
                        }
                    } else if (settings.keepLogin) {
                        router.push('/auth');
                    }
                }
            }["LibraryPageContent.useEffect.initLogin"];
            const loadingTimeout = setTimeout({
                "LibraryPageContent.useEffect.loadingTimeout": ()=>setLoading(true)
            }["LibraryPageContent.useEffect.loadingTimeout"], 300);
            const initLibrary = {
                "LibraryPageContent.useEffect.initLibrary": async ()=>{
                    const appService = await envConfig.getAppService();
                    const settings = await appService.loadSettings();
                    setSettings(settings);
                    // Reuse the library from the store when we return from the reader
                    const library = libraryBooks.length > 0 ? libraryBooks : await appService.loadLibraryBooks();
                    let opened = false;
                    if (checkOpenWithBooks) {
                        opened = await handleOpenWithBooks(appService, library);
                    }
                    setCheckOpenWithBooks(opened);
                    if (!opened && checkLastOpenBooks && settings.openLastBooks) {
                        opened = await handleOpenLastBooks(appService, settings.lastOpenBooks, library);
                    }
                    setCheckLastOpenBooks(opened);
                    setLibrary(library);
                    setLibraryLoaded(true);
                    if (loadingTimeout) clearTimeout(loadingTimeout);
                    setLoading(false);
                }
            }["LibraryPageContent.useEffect.initLibrary"];
            const handleOpenWithBooks = {
                "LibraryPageContent.useEffect.handleOpenWithBooks": async (appService, library)=>{
                    const openWithFiles = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$helpers$2f$openWith$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseOpenWithFiles"])(appService) || [];
                    if (openWithFiles.length > 0) {
                        return await processOpenWithFiles(appService, openWithFiles, library);
                    }
                    return false;
                }
            }["LibraryPageContent.useEffect.handleOpenWithBooks"];
            initLogin();
            initLibrary();
            return ({
                "LibraryPageContent.useEffect": ()=>{
                    setCheckOpenWithBooks(false);
                    setCheckLastOpenBooks(false);
                    isInitiating.current = false;
                }
            })["LibraryPageContent.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["LibraryPageContent.useEffect"], [
        searchParams
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LibraryPageContent.useEffect": ()=>{
            const group = searchParams?.get('group') || '';
            const groupName = getGroupName(group);
            setCurrentGroupPath(groupName);
        }
    }["LibraryPageContent.useEffect"], [
        libraryBooks,
        searchParams,
        getGroupName
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LibraryPageContent.useEffect": ()=>{
            if (demoBooks.length > 0 && libraryLoaded) {
                const newLibrary = [
                    ...libraryBooks
                ];
                for (const book of demoBooks){
                    const idx = newLibrary.findIndex({
                        "LibraryPageContent.useEffect.idx": (b)=>b.hash === book.hash
                    }["LibraryPageContent.useEffect.idx"]);
                    if (idx === -1) {
                        newLibrary.push(book);
                    } else {
                        newLibrary[idx] = book;
                    }
                }
                setLibrary(newLibrary);
                appService?.saveLibraryBooks(newLibrary);
            }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["LibraryPageContent.useEffect"], [
        demoBooks,
        libraryLoaded
    ]);
    const importBooks = async (files, groupId)=>{
        setLoading(true);
        const { library } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$libraryStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLibraryStore"].getState();
        const failedImports = [];
        const successfulImports = [];
        const errorMap = [
            [
                'No chapters detected',
                _('No chapters detected')
            ],
            [
                'Failed to parse EPUB',
                _('Failed to parse the EPUB file')
            ],
            [
                'Unsupported format',
                _('This book format is not supported')
            ],
            [
                'Failed to open file',
                _('Failed to open the book file')
            ],
            [
                'Invalid or empty book file',
                _('The book file is empty')
            ],
            [
                'Unsupported or corrupted book file',
                _('The book file is corrupted')
            ]
        ];
        const processFile = async (selectedFile)=>{
            const file = selectedFile.file || selectedFile.path;
            if (!file) return null;
            try {
                const { path, basePath } = selectedFile;
                let inferredGroupName = '';
                if (groupId) {
                    inferredGroupName = getGroupName(groupId) || '';
                } else if (path && basePath) {
                    const rootPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$path$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDirPath"])(basePath);
                    inferredGroupName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$path$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDirPath"])(path).replace(rootPath, '').replace(/^\//, '');
                }
                const book = await appService?.importBook(file, library, true, true, false, false, {
                    targetGroupName: inferredGroupName
                });
                if (!book) return null;
                if (groupId) {
                    book.groupId = groupId;
                    book.groupName = inferredGroupName;
                } else if (inferredGroupName) {
                    book.groupName = inferredGroupName;
                    book.groupId = getGroupId(inferredGroupName);
                }
                if (user && !book.uploadedAt && settings.autoUpload) {
                    console.log('Queueing upload for book:', book.title);
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$transferManager$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transferManager"].queueUpload(book);
                }
                successfulImports.push(book.title);
                return book;
            } catch (error) {
                const filename = typeof file === 'string' ? file : file.name;
                const baseFilename = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$path$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFilename"])(filename);
                const errorMessage = error instanceof Error ? errorMap.find(([str])=>error.message.includes(str))?.[1] || error.message : '';
                failedImports.push({
                    filename: baseFilename,
                    errorMessage
                });
                console.error('Failed to import book:', filename, error);
                return null;
            }
        };
        const concurrency = 4;
        for(let i = 0; i < files.length; i += concurrency){
            const batch = files.slice(i, i + concurrency);
            const importedBooks = (await Promise.all(batch.map(processFile))).filter((book)=>!!book);
            await updateBooks(envConfig, importedBooks);
        }
        pushLibrary();
        if (failedImports.length > 0) {
            const filenames = failedImports.map((f)=>f.filename);
            const errorMessage = failedImports.find((f)=>f.errorMessage)?.errorMessage || '';
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eventDispatcher"].dispatch('toast', {
                message: _('Failed to import book(s): {{filenames}}', {
                    filenames: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$book$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listFormater"])(false).format(filenames)
                }) + (errorMessage ? `\n${errorMessage}` : ''),
                timeout: 5000,
                type: 'error'
            });
        } else if (successfulImports.length > 0) {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eventDispatcher"].dispatch('toast', {
                message: _('Successfully imported {{count}} book(s)', {
                    count: successfulImports.length
                }),
                timeout: 2000,
                type: 'success'
            });
        }
        setLoading(false);
    };
    const updateBookTransferProgress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$throttle$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["throttle"])((bookHash, progress)=>{
        if (progress.total === 0) return;
        const progressPct = progress.progress / progress.total * 100;
        setBooksTransferProgress((prev)=>({
                ...prev,
                [bookHash]: progressPct
            }));
    }, 500);
    const handleBookUpload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LibraryPageContent.useCallback[handleBookUpload]": async (book, _syncBooks = true)=>{
            // Use transfer queue for uploads - priority 1 for manual uploads (higher priority)
            const transferId = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$transferManager$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transferManager"].queueUpload(book, 1);
            if (transferId) {
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eventDispatcher"].dispatch('toast', {
                    type: 'info',
                    timeout: 2000,
                    message: _('Upload queued: {{title}}', {
                        title: book.title
                    })
                });
                return true;
            }
            return false;
        }
    }["LibraryPageContent.useCallback[handleBookUpload]"], // eslint-disable-next-line react-hooks/exhaustive-deps
    []);
    const handleBookDownload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LibraryPageContent.useCallback[handleBookDownload]": async (book, downloadOptions = {})=>{
            // Cloud download functionality removed - using local server storage only
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eventDispatcher"].dispatch('toast', {
                message: _('Cloud download has been removed. All books are stored locally on the server.'),
                type: 'info'
            });
            return false;
        }
    }["LibraryPageContent.useCallback[handleBookDownload]"], // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        appService
    ]);
    const handleBookDelete = (deleteAction)=>{
        return async (book, syncBooks = true)=>{
            const deletionMessages = {
                both: _('Book deleted: {{title}}', {
                    title: book.title
                }),
                cloud: _('Deleted cloud backup of the book: {{title}}', {
                    title: book.title
                }),
                local: _('Deleted local copy of the book: {{title}}', {
                    title: book.title
                })
            };
            const deletionFailMessages = {
                both: _('Failed to delete book: {{title}}', {
                    title: book.title
                }),
                cloud: _('Failed to delete cloud backup of the book: {{title}}', {
                    title: book.title
                }),
                local: _('Failed to delete local copy of the book: {{title}}', {
                    title: book.title
                })
            };
            try {
                // Handle local deletion immediately
                if (deleteAction === 'local' || deleteAction === 'both') {
                    await appService?.deleteBook(book, 'local');
                    if (deleteAction === 'both') {
                        book.deletedAt = Date.now();
                        book.downloadedAt = null;
                        book.coverDownloadedAt = null;
                    }
                    await updateBook(envConfig, book);
                    clearBookData(book.hash);
                    if (syncBooks) pushLibrary();
                }
                // Queue cloud deletion
                if (deleteAction === 'cloud' || deleteAction === 'both') {
                    const transferId = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$transferManager$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transferManager"].queueDelete(book, 1, true);
                    if (!transferId) {
                        throw new Error('Failed to queue cloud deletion');
                    }
                }
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eventDispatcher"].dispatch('toast', {
                    type: 'info',
                    timeout: 1000,
                    message: deletionMessages[deleteAction]
                });
                return true;
            } catch  {
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eventDispatcher"].dispatch('toast', {
                    message: deletionFailMessages[deleteAction],
                    type: 'error'
                });
                return false;
            }
        };
    };
    const handleUpdateMetadata = async (book, metadata)=>{
        book.metadata = metadata;
        book.title = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$book$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTitle"])(metadata.title);
        book.author = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$book$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatAuthors"])(metadata.author);
        book.primaryLanguage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$book$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrimaryLanguage"])(metadata.language);
        book.updatedAt = Date.now();
        if (metadata.coverImageBlobUrl || metadata.coverImageUrl || metadata.coverImageFile) {
            book.coverImageUrl = metadata.coverImageBlobUrl || metadata.coverImageUrl;
            try {
                await appService?.updateCoverImage(book, metadata.coverImageBlobUrl || metadata.coverImageUrl, metadata.coverImageFile);
            } catch (error) {
                console.warn('Failed to update cover image:', error);
            }
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWebAppPlatform"])()) {
            // Clear HTTP cover image URL if cover is updated with a local file
            if (metadata.coverImageBlobUrl) {
                metadata.coverImageUrl = undefined;
            }
        } else {
            metadata.coverImageUrl = undefined;
        }
        metadata.coverImageBlobUrl = undefined;
        metadata.coverImageFile = undefined;
        await updateBook(envConfig, book);
    };
    const handleImportBooksFromFiles = async ()=>{
        setIsSelectMode(false);
        console.log('Importing books from files...');
        selectFiles({
            type: 'books',
            multiple: true
        }).then((result)=>{
            if (result.files.length === 0 || result.error) return;
            const groupId = searchParams?.get('group') || '';
            importBooks(result.files, groupId);
        });
    };
    const handleImportBooksFromDirectory = async ()=>{
        if (!appService || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTauriAppPlatform"])()) return;
        setIsSelectMode(false);
        console.log('Importing books from directory...');
        let importDirectory = '';
        if (appService.isAndroidApp) {
            if (!await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$permission$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["requestStoragePermission"])()) return;
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$bridge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectDirectory"])();
            importDirectory = response.path;
        } else {
            const selectedDir = await appService.selectDirectory?.('read');
            importDirectory = selectedDir;
        }
        if (!importDirectory) {
            console.log('No directory selected');
            return;
        }
        const files = await appService.readDirectory(importDirectory, 'None');
        const supportedFiles = files.filter((file)=>{
            const ext = file.path.split('.').pop()?.toLowerCase() || '';
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SUPPORTED_BOOK_EXTS"].includes(ext);
        });
        const toImportFiles = await Promise.all(supportedFiles.map(async (file)=>{
            return {
                path: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$path$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinPaths"])(importDirectory, file.path),
                basePath: importDirectory
            };
        }));
        importBooks(toImportFiles, undefined);
    };
    const handleSetSelectMode = (selectMode)=>{
        if (selectMode && appService?.hasHaptics) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$plugin$2d$haptics$40$2$2e$3$2e$2$2f$node_modules$2f40$tauri$2d$apps$2f$plugin$2d$haptics$2f$dist$2d$js$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["impactFeedback"])('medium');
        }
        setIsSelectMode(selectMode);
        setIsSelectAll(false);
        setIsSelectNone(false);
    };
    const handleSelectAll = ()=>{
        setIsSelectAll(true);
        setIsSelectNone(false);
    };
    const handleDeselectAll = ()=>{
        setIsSelectNone(true);
        setIsSelectAll(false);
    };
    const handleShowDetailsBook = (book)=>{
        setShowDetailsBook(book);
    };
    const handleNavigateToPath = (path)=>{
        const group = path ? getGroupId(path) : '';
        const params = new URLSearchParams(searchParams?.toString());
        if (group) {
            params.set('group', group);
        } else {
            params.delete('group');
        }
        setIsSelectAll(false);
        setIsSelectNone(false);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$nav$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navigateToLibrary"])(router, `${params.toString()}`);
        setTimeout(()=>{
            setCurrentGroupPath(path);
        }, 300);
    };
    if (!appService || !insets || checkOpenWithBooks || checkLastOpenBooks) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('full-height', !appService?.isLinuxApp && 'bg-base-200')
        }, void 0, false, {
            fileName: "[project]/apps/readest-app/src/app/library/page.tsx",
            lineNumber: 699,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
    }
    const showBookshelf = libraryLoaded || libraryBooks.length > 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: pageRef,
        "aria-label": "Your Library",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('library-page text-base-content full-height flex select-none flex-col overflow-hidden', viewSettings?.isEink ? 'bg-base-100' : 'bg-base-200', appService?.hasRoundedWindow && isRoundedWindow && 'window-border rounded-window'),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative top-0 z-40 w-full",
                role: "banner",
                tabIndex: -1,
                "aria-label": _('Library Header'),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$library$2f$components$2f$LibraryHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        isSelectMode: isSelectMode,
                        isSelectAll: isSelectAll,
                        onImportBooksFromFiles: handleImportBooksFromFiles,
                        onImportBooksFromDirectory: appService?.canReadExternalDir ? handleImportBooksFromDirectory : undefined,
                        onOpenCatalogManager: handleShowOPDSDialog,
                        onToggleSelectMode: ()=>handleSetSelectMode(!isSelectMode),
                        onSelectAll: handleSelectAll,
                        onDeselectAll: handleDeselectAll,
                        onReconcilePaths: ()=>setShowReconcileModal(true)
                    }, void 0, false, {
                        fileName: "[project]/apps/readest-app/src/app/library/page.tsx",
                        lineNumber: 720,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("progress", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('progress progress-success absolute bottom-0 left-0 right-0 h-1 translate-y-[2px] transition-opacity duration-200 sm:translate-y-[4px]', isSyncing ? 'opacity-100' : 'opacity-0'),
                        value: syncProgress * 100,
                        max: "100"
                    }, void 0, false, {
                        fileName: "[project]/apps/readest-app/src/app/library/page.tsx",
                        lineNumber: 733,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/readest-app/src/app/library/page.tsx",
                lineNumber: 714,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            (loading || isSyncing) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$Spinner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    loading: true
                }, void 0, false, {
                    fileName: "[project]/apps/readest-app/src/app/library/page.tsx",
                    lineNumber: 744,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/library/page.tsx",
                lineNumber: 743,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            currentGroupPath && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `transition-all duration-300 ease-in-out ${currentGroupPath ? 'opacity-100' : 'max-h-0 opacity-0'}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap items-center gap-y-1 px-4 text-base",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>handleNavigateToPath(undefined),
                            className: "hover:bg-base-300 text-base-content/85 rounded px-2 py-1",
                            children: _('All')
                        }, void 0, false, {
                            fileName: "[project]/apps/readest-app/src/app/library/page.tsx",
                            lineNumber: 753,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$library$2f$utils$2f$libraryUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBreadcrumbs"])(currentGroupPath).map((crumb, index, array)=>{
                            const isLast = index === array.length - 1;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdChevronRight"], {
                                        size: iconSize,
                                        className: "text-neutral-content"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/readest-app/src/app/library/page.tsx",
                                        lineNumber: 763,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    isLast ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "truncate rounded px-2 py-1",
                                        children: crumb.name
                                    }, void 0, false, {
                                        fileName: "[project]/apps/readest-app/src/app/library/page.tsx",
                                        lineNumber: 765,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleNavigateToPath(crumb.path),
                                        className: "hover:bg-base-300 text-base-content/85 truncate rounded px-2 py-1",
                                        children: crumb.name
                                    }, void 0, false, {
                                        fileName: "[project]/apps/readest-app/src/app/library/page.tsx",
                                        lineNumber: 767,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, index, true, {
                                fileName: "[project]/apps/readest-app/src/app/library/page.tsx",
                                lineNumber: 762,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0));
                        })
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/readest-app/src/app/library/page.tsx",
                    lineNumber: 752,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/library/page.tsx",
                lineNumber: 748,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            showBookshelf && (libraryBooks.some((book)=>!book.deletedAt) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$overlayscrollbars$2d$react$40$0$2e$5$2e$6_overlayscrollbars$40$2$2e$11$2e$4_react$40$19$2e$2$2e$0$2f$node_modules$2f$overlayscrollbars$2d$react$2f$overlayscrollbars$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OverlayScrollbarsComponent"], {
                defer: true,
                "aria-label": "",
                ref: osRef,
                className: "flex-grow",
                options: {
                    scrollbars: {
                        autoHide: 'scroll'
                    }
                },
                events: {
                    initialized: (instance)=>{
                        const { content } = instance.elements();
                        if (content) {
                            containerRef.current = content;
                        }
                    }
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('scroll-container drop-zone flex-grow', isDragging && 'drag-over'),
                    style: {
                        paddingTop: '0px',
                        paddingRight: `${insets.right}px`,
                        paddingBottom: `${insets.bottom}px`,
                        paddingLeft: `${insets.left}px`
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$DropIndicator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/apps/readest-app/src/app/library/page.tsx",
                            lineNumber: 806,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$library$2f$components$2f$Bookshelf$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            libraryBooks: libraryBooks,
                            isSelectMode: isSelectMode,
                            isSelectAll: isSelectAll,
                            isSelectNone: isSelectNone,
                            handleImportBooks: handleImportBooksFromFiles,
                            handleBookUpload: handleBookUpload,
                            handleBookDownload: handleBookDownload,
                            handleBookDelete: handleBookDelete('both'),
                            handleSetSelectMode: handleSetSelectMode,
                            handleShowDetailsBook: handleShowDetailsBook,
                            booksTransferProgress: booksTransferProgress,
                            handlePushLibrary: pushLibrary
                        }, void 0, false, {
                            fileName: "[project]/apps/readest-app/src/app/library/page.tsx",
                            lineNumber: 807,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/readest-app/src/app/library/page.tsx",
                    lineNumber: 797,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/library/page.tsx",
                lineNumber: 782,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hero drop-zone h-screen items-center justify-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$DropIndicator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/apps/readest-app/src/app/library/page.tsx",
                        lineNumber: 825,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hero-content text-neutral-content text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-md",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "mb-5 text-5xl font-bold",
                                    children: _('Your Library')
                                }, void 0, false, {
                                    fileName: "[project]/apps/readest-app/src/app/library/page.tsx",
                                    lineNumber: 828,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mb-5",
                                    children: _('Welcome to your library. You can import your books here and read them anytime.')
                                }, void 0, false, {
                                    fileName: "[project]/apps/readest-app/src/app/library/page.tsx",
                                    lineNumber: 829,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "btn btn-primary rounded-xl",
                                    onClick: handleImportBooksFromFiles,
                                    children: _('Import Books')
                                }, void 0, false, {
                                    fileName: "[project]/apps/readest-app/src/app/library/page.tsx",
                                    lineNumber: 834,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/readest-app/src/app/library/page.tsx",
                            lineNumber: 827,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/apps/readest-app/src/app/library/page.tsx",
                        lineNumber: 826,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/readest-app/src/app/library/page.tsx",
                lineNumber: 824,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0))),
            showDetailsBook && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$metadata$2f$BookDetailModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookDetailModal$3e$__["BookDetailModal"], {
                isOpen: !!showDetailsBook,
                book: showDetailsBook,
                onClose: ()=>setShowDetailsBook(null),
                handleBookUpload: handleBookUpload,
                handleBookDownload: handleBookDownload,
                handleBookDelete: handleBookDelete('both'),
                handleBookDeleteCloudBackup: handleBookDelete('cloud'),
                handleBookDeleteLocalCopy: handleBookDelete('local'),
                handleBookMetadataUpdate: handleUpdateMetadata
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/library/page.tsx",
                lineNumber: 842,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            isTransferQueueOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$ModalPortal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$library$2f$components$2f$TransferQueuePanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/apps/readest-app/src/app/library/page.tsx",
                    lineNumber: 856,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/library/page.tsx",
                lineNumber: 855,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$AboutWindow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AboutWindow"], {}, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/library/page.tsx",
                lineNumber: 859,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$UpdaterWindow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UpdaterWindow"], {}, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/library/page.tsx",
                lineNumber: 860,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$library$2f$components$2f$MigrateDataWindow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MigrateDataWindow"], {}, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/library/page.tsx",
                lineNumber: 861,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            isSettingsDialogOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$settings$2f$SettingsDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                bookKey: ''
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/library/page.tsx",
                lineNumber: 862,
                columnNumber: 32
            }, ("TURBOPACK compile-time value", void 0)),
            showCatalogManager && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$library$2f$components$2f$OPDSDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CatalogDialog"], {
                onClose: handleDismissOPDSDialog
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/library/page.tsx",
                lineNumber: 863,
                columnNumber: 30
            }, ("TURBOPACK compile-time value", void 0)),
            showReconcileModal && appService && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$library$2f$components$2f$ReconcileModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: showReconcileModal,
                onClose: ()=>setShowReconcileModal(false),
                onConfirm: (results)=>{
                    console.log('校准完成，更新了', results.length, '本书');
                    setShowReconcileModal(false);
                    handleRefreshLibrary();
                },
                reconcileBookPaths: appService.reconcileBookPaths.bind(appService),
                applyReconciliation: appService.applyReconciliation.bind(appService),
                books: libraryBooks
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/library/page.tsx",
                lineNumber: 865,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toast"], {}, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/library/page.tsx",
                lineNumber: 878,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/readest-app/src/app/library/page.tsx",
        lineNumber: 705,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(LibraryPageContent, "ITihP/S3qjpGkVv4BWmnJ6igz40=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEnv"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$libraryStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLibraryStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useFileSelector$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFileSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$themeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBookDataStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSettingsStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSettingsStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$transferStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransferStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useResponsiveSize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResponsiveSize"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$library$2f$hooks$2f$useDemoBooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDemoBooks"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useUICSS$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUICSS"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useOpenWithBooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOpenWithBooks"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTransferQueue$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransferQueue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$library$2f$hooks$2f$useBooksSync$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBooksSync"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$library$2f$hooks$2f$useDragDropImport$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDragDropImport"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$usePullToRefresh$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePullToRefresh"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useScreenWakeLock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScreenWakeLock"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useShortcuts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c1 = LibraryPageContent;
const LibraryPage = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "full-height"
        }, void 0, false, {
            fileName: "[project]/apps/readest-app/src/app/library/page.tsx",
            lineNumber: 885,
            columnNumber: 25
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LibraryPageWithSearchParams, {}, void 0, false, {
            fileName: "[project]/apps/readest-app/src/app/library/page.tsx",
            lineNumber: 886,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/readest-app/src/app/library/page.tsx",
        lineNumber: 885,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c2 = LibraryPage;
const __TURBOPACK__default__export__ = LibraryPage;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "LibraryPageWithSearchParams");
__turbopack_context__.k.register(_c1, "LibraryPageContent");
__turbopack_context__.k.register(_c2, "LibraryPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=apps_readest-app_src_app_2eb970cd._.js.map