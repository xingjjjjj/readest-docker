module.exports = [
"[project]/apps/readest-app/src/app/reader/hooks/useBooksManager.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.28.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/navigation.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/context/EnvContext.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/readerStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$sidebarStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/sidebarStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/misc.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$parallelViewStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/parallelViewStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$nav$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/nav.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$sidebarStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$parallelViewStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$nav$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$sidebarStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$parallelViewStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$nav$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
'use client';
;
;
;
;
;
;
;
;
const useBooksManager = ()=>{
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const { envConfig } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["useEnv"])();
    const { bookKeys } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useReaderStore"])();
    const { setBookKeys, initViewState } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useReaderStore"])();
    const { sideBarBookKey, setSideBarBookKey } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$sidebarStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useSidebarStore"])();
    const [shouldUpdateSearchParams, setShouldUpdateSearchParams] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const { setParallel } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$parallelViewStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useParallelViewStore"])();
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (shouldUpdateSearchParams) {
            const ids = bookKeys.map((key)=>key.split('-')[0]);
            if (ids) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$nav$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["navigateToReader"])(router, ids, searchParams?.toString() || '', {
                    scroll: false
                });
            }
            setShouldUpdateSearchParams(false);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        bookKeys,
        shouldUpdateSearchParams
    ]);
    // Append a new book and sync with bookKeys and URL
    const appendBook = (id, isPrimary, isParallel)=>{
        const newKey = `${id}-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["uniqueId"])()}`;
        initViewState(envConfig, id, newKey, isPrimary);
        if (!bookKeys.includes(newKey)) {
            const updatedKeys = [
                ...bookKeys,
                newKey
            ];
            setBookKeys(updatedKeys);
        }
        if (isParallel) setParallel([
            sideBarBookKey,
            newKey
        ]);
        setSideBarBookKey(newKey);
        setShouldUpdateSearchParams(true);
    };
    // Close a book and sync with bookKeys and URL
    const dismissBook = (bookKey)=>{
        const updatedKeys = bookKeys.filter((key)=>key !== bookKey);
        setBookKeys(updatedKeys);
        setShouldUpdateSearchParams(true);
    };
    const getNextBookKey = (bookKey)=>{
        const index = bookKeys.findIndex((key)=>key === bookKey);
        const nextIndex = (index + 1) % bookKeys.length;
        return bookKeys[nextIndex];
    };
    const openParallelView = (id)=>{
        const sideBarBookId = sideBarBookKey?.split('-')[0];
        appendBook(id, sideBarBookId != id, true);
    };
    return {
        bookKeys,
        appendBook,
        dismissBook,
        getNextBookKey,
        openParallelView
    };
};
const __TURBOPACK__default__export__ = useBooksManager;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/readest-app/src/app/reader/hooks/usePagination.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "usePagination",
    ()=>usePagination,
    "viewPagination",
    ()=>viewPagination
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/context/EnvContext.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/readerStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/bookDataStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$deviceStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/deviceStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/event.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/environment.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$window$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/window.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$deviceStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$window$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$deviceStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$window$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
'use client';
;
;
;
;
;
;
;
;
const swapLeftRight = (side)=>{
    if (side === 'left') return 'right';
    if (side === 'right') return 'left';
    return side;
};
const isPanningView = (view, viewSettings)=>{
    if (!view || !viewSettings) return false;
    return view.book.rendition?.layout === 'pre-paginated' && (viewSettings.zoomLevel > 100 || viewSettings.zoomMode !== 'fit-page');
};
const hasHorizontalPanning = (view, viewSettings)=>{
    if (!view || !viewSettings) return false;
    return isPanningView(view, viewSettings) && view.isOverflowX();
};
const hasVerticalPanning = (view, viewSettings)=>{
    if (!view || !viewSettings) return false;
    return isPanningView(view, viewSettings) && view.isOverflowY();
};
const viewPagination = (view, viewSettings, side, mode = 'page', panDistance = 50)=>{
    if (!view || !viewSettings) return;
    const renderer = view.renderer;
    if (view.book.dir === 'rtl') {
        side = swapLeftRight(side);
    }
    if (renderer.scrolled) {
        const { size } = renderer;
        const showHeader = viewSettings.showHeader && viewSettings.showBarsOnScroll;
        const showFooter = viewSettings.showFooter && viewSettings.showBarsOnScroll;
        const scrollingOverlap = viewSettings.scrollingOverlap;
        const distance = size - scrollingOverlap - (showHeader ? 44 : 0) - (showFooter ? 44 : 0);
        switch(mode){
            case 'section':
                if (side === 'left' || side === 'up') {
                    return view.renderer.prevSection?.();
                } else {
                    return view.renderer.nextSection?.();
                }
            case 'pan':
            case 'page':
            default:
                return side === 'left' || side === 'up' ? view.prev(distance) : view.next(distance);
        }
    } else if (mode === 'pan' && isPanningView(view, viewSettings)) {
        if (hasHorizontalPanning(view, viewSettings) && (side === 'left' || side === 'right')) {
            return view.pan(side === 'left' ? -panDistance : panDistance, 0);
        } else if (hasVerticalPanning(view, viewSettings) && (side === 'up' || side === 'down')) {
            return view.pan(0, side === 'up' ? -panDistance : panDistance);
        } else {
            return side === 'left' || side === 'up' ? view.prev() : view.next();
        }
    } else {
        switch(mode){
            case 'section':
                if (side === 'left' || side === 'up') {
                    return view.renderer.prevSection?.();
                } else {
                    return view.renderer.nextSection?.();
                }
            case 'pan':
            case 'page':
            default:
                return side === 'left' || side === 'up' ? view.prev() : view.next();
        }
    }
};
const usePagination = (bookKey, viewRef, containerRef)=>{
    const { appService } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["useEnv"])();
    const { getBookData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useBookDataStore"])();
    const { getViewSettings, getViewState } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useReaderStore"])();
    const { hoveredBookKey, setHoveredBookKey } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useReaderStore"])();
    const { acquireVolumeKeyInterception, releaseVolumeKeyInterception } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$deviceStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useDeviceControlStore"])();
    const handlePageFlip = async (msg)=>{
        const viewState = getViewState(bookKey);
        const bookData = getBookData(bookKey);
        if (!viewState?.inited || !bookData) return;
        if (msg instanceof MessageEvent) {
            if (msg.data && msg.data.bookKey === bookKey) {
                const viewSettings = getViewSettings(bookKey);
                if (msg.data.type === 'iframe-single-click') {
                    const viewElement = containerRef.current;
                    if (viewElement) {
                        const { screenX } = msg.data;
                        const viewRect = viewElement.getBoundingClientRect();
                        let windowStartX;
                        // Currently for tauri APP the window.screenX is always 0
                        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["isTauriAppPlatform"])()) {
                            if (appService?.isMobile) {
                                windowStartX = 0;
                            } else {
                                const windowPosition = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$window$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["tauriGetWindowLogicalPosition"])();
                                windowStartX = windowPosition.x;
                            }
                        } else {
                            windowStartX = window.screenX;
                        }
                        const viewStartX = windowStartX + viewRect.left;
                        const viewCenterX = viewStartX + viewRect.width / 2;
                        const consumed = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["eventDispatcher"].dispatchSync('iframe-single-click');
                        if (!consumed) {
                            const centerStartX = viewStartX + viewRect.width * 0.375;
                            const centerEndX = viewStartX + viewRect.width * 0.625;
                            if (viewSettings.disableClick || screenX >= centerStartX && screenX <= centerEndX) {
                                // toggle visibility of the header bar and the footer bar
                                setHoveredBookKey(hoveredBookKey ? null : bookKey);
                            } else {
                                if (hoveredBookKey) {
                                    setHoveredBookKey(null);
                                    return;
                                }
                                if (!viewSettings.disableClick && screenX >= viewCenterX) {
                                    if (viewSettings.fullscreenClickArea) {
                                        viewPagination(viewRef.current, viewSettings, 'down');
                                    } else if (viewSettings.swapClickArea) {
                                        viewPagination(viewRef.current, viewSettings, 'left');
                                    } else {
                                        viewPagination(viewRef.current, viewSettings, 'right');
                                    }
                                } else if (!viewSettings.disableClick && screenX < viewCenterX) {
                                    if (viewSettings.fullscreenClickArea) {
                                        viewPagination(viewRef.current, viewSettings, 'down');
                                    } else if (viewSettings.swapClickArea) {
                                        viewPagination(viewRef.current, viewSettings, 'right');
                                    } else {
                                        viewPagination(viewRef.current, viewSettings, 'left');
                                    }
                                }
                            }
                        }
                    }
                } else if (msg.data.type === 'iframe-wheel' && !viewSettings.scrolled && !isPanningView(viewRef.current, viewSettings)) {
                    // The wheel event is handled by the iframe itself in scrolled mode.
                    const { deltaY } = msg.data;
                    if (deltaY > 0) {
                        viewRef.current?.next(1);
                    } else if (deltaY < 0) {
                        viewRef.current?.prev(1);
                    }
                } else if (msg.data.type === 'iframe-mouseup') {
                    if (msg.data.button === 3) {
                        viewRef.current?.history.back();
                    } else if (msg.data.button === 4) {
                        viewRef.current?.history.forward();
                    }
                }
            }
        } else if (msg instanceof CustomEvent) {
            const viewSettings = getViewSettings(bookKey);
            if (msg.type === 'native-key-down' && viewSettings?.volumeKeysToFlip) {
                const { keyName } = msg.detail;
                setHoveredBookKey('');
                if (keyName === 'VolumeUp') {
                    viewPagination(viewRef.current, viewSettings, 'up');
                } else if (keyName === 'VolumeDown') {
                    viewPagination(viewRef.current, viewSettings, 'down');
                }
            } else if (msg.type === 'touch-swipe' && bookData.isFixedLayout && !isPanningView(viewRef.current, viewSettings)) {
                const { deltaX, deltaY, deltaT } = msg.detail;
                const vx = Math.abs(deltaX / deltaT);
                if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 30 && vx > 0.2) {
                    if (deltaX > 0) {
                        viewPagination(viewRef.current, viewSettings, 'left');
                    } else {
                        viewPagination(viewRef.current, viewSettings, 'right');
                    }
                }
            }
        } else {
            if (msg.type === 'click') {
                const { clientX } = msg;
                const width = window.innerWidth;
                const leftThreshold = width * 0.5;
                const rightThreshold = width * 0.5;
                const viewSettings = getViewSettings(bookKey);
                if (clientX < leftThreshold) {
                    viewPagination(viewRef.current, viewSettings, 'left');
                } else if (clientX > rightThreshold) {
                    viewPagination(viewRef.current, viewSettings, 'right');
                }
            }
        }
    };
    const handleContinuousScroll = (mode, scrollDelta, threshold)=>{
        const renderer = viewRef.current?.renderer;
        const viewSettings = getViewSettings(bookKey);
        const bookData = getBookData(bookKey);
        // Currently continuous scroll is not supported in pre-paginated layout
        if (bookData.bookDoc?.rendition?.layout === 'pre-paginated') return;
        if (renderer && viewSettings.scrolled && viewSettings.continuousScroll) {
            const doScroll = ()=>{
                // may have overscroll where the start is greater than 0
                if (renderer.start <= scrollDelta && scrollDelta > threshold) {
                    setTimeout(()=>{
                        viewRef.current?.prev(renderer.start + 1);
                    }, 100);
                // sometimes viewSize has subpixel value that the end never reaches
                } else if (Math.ceil(renderer.end) - scrollDelta >= renderer.viewSize && scrollDelta < -threshold) {
                    setTimeout(()=>{
                        viewRef.current?.next(renderer.viewSize - Math.floor(renderer.end) + 1);
                    }, 100);
                }
            };
            if (mode === 'mouse') {
                // we can always get mouse wheel events
                doScroll();
            } else if (mode === 'touch') {
                // when the document height is less than the viewport height, we can't get the relocate event
                if (renderer.size >= renderer.viewSize) {
                    doScroll();
                } else {
                    // scroll after the relocate event
                    renderer.addEventListener('relocate', ()=>doScroll(), {
                        once: true
                    });
                }
            }
        }
    };
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (!appService?.isMobileApp) return;
        const viewSettings = getViewSettings(bookKey);
        if (viewSettings?.volumeKeysToFlip) {
            acquireVolumeKeyInterception();
        } else {
            releaseVolumeKeyInterception();
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["eventDispatcher"].on('native-key-down', handlePageFlip);
        return ()=>{
            releaseVolumeKeyInterception();
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["eventDispatcher"].off('native-key-down', handlePageFlip);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return {
        handlePageFlip,
        handleContinuousScroll
    };
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/readest-app/src/app/reader/hooks/useBookShortcuts.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/readerStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$notebookStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/notebookStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/environment.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$sidebarStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/sidebarStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/settingsStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/bookDataStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$style$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/style.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$window$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/window.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/event.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/constants.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$hooks$2f$usePagination$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/app/reader/hooks/usePagination.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useShortcuts$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/hooks/useShortcuts.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$hooks$2f$useBooksManager$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/app/reader/hooks/useBooksManager.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$notebookStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$sidebarStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$style$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$window$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$hooks$2f$usePagination$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$hooks$2f$useBooksManager$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$notebookStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$sidebarStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$style$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$window$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$hooks$2f$usePagination$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$hooks$2f$useBooksManager$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
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
const useBookShortcuts = ({ sideBarBookKey, bookKeys })=>{
    const { getView, getViewState, getViewSettings, setViewSettings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useReaderStore"])();
    const { toggleSideBar, setSideBarBookKey } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$sidebarStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useSidebarStore"])();
    const { setSettingsDialogOpen } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"])();
    const { getBookData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useBookDataStore"])();
    const { toggleNotebook } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$notebookStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useNotebookStore"])();
    const { getNextBookKey } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$hooks$2f$useBooksManager$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])();
    const viewSettings = getViewSettings(sideBarBookKey ?? '');
    const fontSize = viewSettings?.defaultFontSize ?? 16;
    const lineHeight = viewSettings?.lineHeight ?? 1.6;
    const distance = fontSize * lineHeight * 3;
    const toggleScrollMode = ()=>{
        const viewSettings = getViewSettings(sideBarBookKey ?? '');
        if (viewSettings && sideBarBookKey) {
            viewSettings.scrolled = !viewSettings.scrolled;
            setViewSettings(sideBarBookKey, viewSettings);
            const flowMode = viewSettings.scrolled ? 'scrolled' : 'paginated';
            getView(sideBarBookKey)?.renderer.setAttribute('flow', flowMode);
        }
    };
    const switchSideBar = ()=>{
        if (sideBarBookKey) setSideBarBookKey(getNextBookKey(sideBarBookKey));
    };
    const goLeft = ()=>{
        const viewSettings = getViewSettings(sideBarBookKey ?? '');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$hooks$2f$usePagination$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["viewPagination"])(getView(sideBarBookKey), viewSettings, 'left', 'pan', distance);
    };
    const goRight = ()=>{
        const viewSettings = getViewSettings(sideBarBookKey ?? '');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$hooks$2f$usePagination$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["viewPagination"])(getView(sideBarBookKey), viewSettings, 'right', 'pan', distance);
    };
    const goUp = (event)=>{
        const view = getView(sideBarBookKey);
        const viewSettings = getViewSettings(sideBarBookKey ?? '');
        if (view?.renderer.scrolled && event instanceof MessageEvent) return;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$hooks$2f$usePagination$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["viewPagination"])(view, viewSettings, 'up', 'pan', distance);
    };
    const goDown = (event)=>{
        const view = getView(sideBarBookKey);
        const viewSettings = getViewSettings(sideBarBookKey ?? '');
        if (view?.renderer.scrolled && event instanceof MessageEvent) return;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$hooks$2f$usePagination$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["viewPagination"])(view, viewSettings, 'down', 'pan', distance);
    };
    const goPrevSection = ()=>{
        const viewSettings = getViewSettings(sideBarBookKey ?? '');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$hooks$2f$usePagination$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["viewPagination"])(getView(sideBarBookKey), viewSettings, 'up', 'section');
    };
    const goNextSection = ()=>{
        const viewSettings = getViewSettings(sideBarBookKey ?? '');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$hooks$2f$usePagination$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["viewPagination"])(getView(sideBarBookKey), viewSettings, 'down', 'section');
    };
    const goLeftSection = ()=>{
        const viewSettings = getViewSettings(sideBarBookKey ?? '');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$hooks$2f$usePagination$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["viewPagination"])(getView(sideBarBookKey), viewSettings, 'left', 'section');
    };
    const goRightSection = ()=>{
        const viewSettings = getViewSettings(sideBarBookKey ?? '');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$hooks$2f$usePagination$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["viewPagination"])(getView(sideBarBookKey), viewSettings, 'right', 'section');
    };
    const goPrev = ()=>{
        getView(sideBarBookKey)?.prev(distance);
    };
    const goNext = ()=>{
        getView(sideBarBookKey)?.next(distance);
    };
    const goBack = ()=>{
        getView(sideBarBookKey)?.history.back();
    };
    const goHalfPageDown = ()=>{
        const view = getView(sideBarBookKey);
        const viewSettings = getViewSettings(sideBarBookKey ?? '');
        if (view && viewSettings && viewSettings.scrolled) {
            view.next(view.renderer.size / 2);
        }
    };
    const goHalfPageUp = ()=>{
        const view = getView(sideBarBookKey);
        const viewSettings = getViewSettings(sideBarBookKey ?? '');
        if (view && viewSettings && viewSettings.scrolled) {
            view.prev(view.renderer.size / 2);
        }
    };
    const goForward = ()=>{
        getView(sideBarBookKey)?.history.forward();
    };
    const reloadPage = ()=>{
        window.location.reload();
    };
    const toggleFullscreen = async ()=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["isTauriAppPlatform"])()) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$window$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["tauriHandleToggleFullScreen"])();
        }
    };
    const closeWindow = async ()=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["isTauriAppPlatform"])()) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$window$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["tauriHandleClose"])();
        }
    };
    const quitApp = async ()=>{
        // on web platform use browser's default shortcut to close the tab
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["isTauriAppPlatform"])()) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$window$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["tauriQuitApp"])();
        }
    };
    const showSearchBar = ()=>{
        setTimeout(()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["eventDispatcher"].dispatch('search-term', {
                term: null,
                bookKey: sideBarBookKey
            });
        }, 100);
    };
    const applyZoomLevel = (zoomLevel)=>{
        if (!sideBarBookKey) return;
        const view = getView(sideBarBookKey);
        const bookData = getBookData(sideBarBookKey);
        const viewSettings = getViewSettings(sideBarBookKey);
        viewSettings.zoomLevel = zoomLevel;
        setViewSettings(sideBarBookKey, viewSettings);
        view?.renderer.setStyles?.((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$style$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getStyles"])(viewSettings));
        if (bookData?.bookDoc?.rendition?.layout === 'pre-paginated') {
            view?.renderer.setAttribute('scale-factor', zoomLevel);
        }
    };
    const zoomInFactor = (factor = 1.0)=>{
        if (!sideBarBookKey) return;
        const viewSettings = getViewSettings(sideBarBookKey);
        const zoomLevel = viewSettings.zoomLevel + __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["ZOOM_STEP"] * factor;
        applyZoomLevel(Math.min(zoomLevel, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["MAX_ZOOM_LEVEL"]));
    };
    const zoomOutFactor = (factor = 1.0)=>{
        if (!sideBarBookKey) return;
        const viewSettings = getViewSettings(sideBarBookKey);
        const zoomLevel = viewSettings.zoomLevel - __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["ZOOM_STEP"] * factor;
        applyZoomLevel(Math.max(zoomLevel, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["MIN_ZOOM_LEVEL"]));
    };
    const zoomIn = ()=>{
        zoomInFactor();
    };
    const zoomOut = ()=>{
        zoomOutFactor();
    };
    const handleZoomIn = (event)=>{
        const factor = event.detail?.factor || 1.0;
        zoomInFactor(factor);
    };
    const handleZoomOut = (event)=>{
        const factor = event.detail?.factor || 1.0;
        zoomOutFactor(factor);
    };
    const resetZoom = ()=>{
        if (!sideBarBookKey) return;
        applyZoomLevel(100);
    };
    const toggleTTS = ()=>{
        if (!sideBarBookKey) return;
        const bookKey = sideBarBookKey;
        const viewState = getViewState(bookKey);
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["eventDispatcher"].dispatch(viewState?.ttsEnabled ? 'tts-stop' : 'tts-speak', {
            bookKey
        });
    };
    const toggleBookmark = ()=>{
        if (!sideBarBookKey) return;
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["eventDispatcher"].dispatch('toggle-bookmark', {
            bookKey: sideBarBookKey
        });
    };
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["eventDispatcher"].on('zoom-in', handleZoomIn);
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["eventDispatcher"].on('zoom-out', handleZoomOut);
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["eventDispatcher"].on('reset-zoom', resetZoom);
        return ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["eventDispatcher"].off('zoom-in', handleZoomIn);
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["eventDispatcher"].off('zoom-out', handleZoomOut);
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["eventDispatcher"].off('reset-zoom', resetZoom);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        sideBarBookKey
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useShortcuts$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({
        onSwitchSideBar: switchSideBar,
        onToggleSideBar: toggleSideBar,
        onToggleNotebook: toggleNotebook,
        onToggleScrollMode: toggleScrollMode,
        onToggleBookmark: toggleBookmark,
        onOpenFontLayoutSettings: ()=>setSettingsDialogOpen(true),
        onShowSearchBar: showSearchBar,
        onToggleFullscreen: toggleFullscreen,
        onToggleTTS: toggleTTS,
        onReloadPage: reloadPage,
        onCloseWindow: closeWindow,
        onQuitApp: quitApp,
        onGoLeft: goLeft,
        onGoRight: goRight,
        onGoUp: goUp,
        onGoDown: goDown,
        onGoPrev: goPrev,
        onGoNext: goNext,
        onGoHalfPageDown: goHalfPageDown,
        onGoHalfPageUp: goHalfPageUp,
        onGoPrevSection: goPrevSection,
        onGoNextSection: goNextSection,
        onGoLeftSection: goLeftSection,
        onGoRightSection: goRightSection,
        onGoBack: goBack,
        onGoForward: goForward,
        onZoomIn: zoomIn,
        onZoomOut: zoomOut,
        onResetZoom: resetZoom
    }, [
        sideBarBookKey,
        bookKeys
    ]);
};
const __TURBOPACK__default__export__ = useBookShortcuts;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/readest-app/src/app/reader/hooks/useTextTranslation.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "useTextTranslation",
    ()=>useTextTranslation
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/readerStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslator$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/hooks/useTranslator.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$walk$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/walk.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$debounce$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/debounce.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/misc.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslator$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslator$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
'use client';
;
;
;
;
;
;
function useTextTranslation(bookKey, view, widthLineBreak = false, targetBlockClassName = 'translation-target-block') {
    const { getViewSettings, getProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useReaderStore"])();
    const viewSettings = getViewSettings(bookKey);
    const progress = getProgress(bookKey);
    const enabled = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(viewSettings?.translationEnabled);
    const [provider, setProvider] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(viewSettings?.translationProvider);
    const [targetLang, setTargetLang] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(viewSettings?.translateTargetLang);
    const showTranslateSourceRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(viewSettings?.showTranslateSource);
    const { translate } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslator$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useTranslator"])({
        provider,
        targetLang: targetLang || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getLocale"])()
    });
    const translateRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(translate);
    const observerRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const translatedElements = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])([]);
    const allTextNodes = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])([]);
    const toggleTranslationVisibility = (visible)=>{
        translatedElements.current.forEach((element)=>{
            const translationTargets = element.querySelectorAll('.translation-target');
            translationTargets.forEach((target)=>{
                if (visible) {
                    target.classList.remove('hidden');
                } else {
                    target.classList.add('hidden');
                }
            });
        });
    };
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        translateRef.current = translate;
    }, [
        translate
    ]);
    const observeTextNodes = ()=>{
        if (!view || !enabled.current) return;
        const observer = createTranslationObserver();
        observerRef.current = observer;
        const nodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$walk$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["walkTextNodes"])(view, [
            'pre',
            'code',
            'math'
        ]);
        console.log('Observing text nodes for translation:', nodes.length);
        allTextNodes.current = nodes;
        nodes.forEach((el)=>observer.observe(el));
    };
    const updateTranslation = ()=>{
        translatedElements.current.forEach((element)=>{
            const translationTargets = element.querySelectorAll('.translation-target');
            translationTargets.forEach((target)=>target.remove());
        });
        translatedElements.current = [];
        if (viewSettings?.translationEnabled && view) {
            recreateTranslationObserver();
        }
    };
    const createTranslationObserver = ()=>{
        return new IntersectionObserver((entries)=>{
            let beforeIntersectedElement = null;
            let lastIntersectedElement = null;
            for (const entry of entries){
                if (!entry.isIntersecting) {
                    if (!lastIntersectedElement) {
                        beforeIntersectedElement = entry.target;
                    }
                    continue;
                }
                const currentElement = entry.target;
                translateElement(currentElement);
                lastIntersectedElement = currentElement;
            }
            if (beforeIntersectedElement) {
                translateElement(beforeIntersectedElement);
            }
            if (lastIntersectedElement) {
                preTranslateNextElements(lastIntersectedElement, 2);
            }
        }, {
            rootMargin: '1280px',
            threshold: 0
        });
    };
    const preTranslateNextElements = (currentElement, count)=>{
        if (!allTextNodes.current || count <= 0) return;
        const currentIndex = allTextNodes.current.indexOf(currentElement);
        if (currentIndex === -1) {
            return;
        }
        const nextElements = allTextNodes.current.slice(currentIndex + 1, currentIndex + 1 + count);
        nextElements.forEach((element, index)=>{
            setTimeout(()=>{
                translateElement(element);
            }, index * 500);
        });
    };
    const recreateTranslationObserver = ()=>{
        const observer = createTranslationObserver();
        observerRef.current?.disconnect();
        observerRef.current = observer;
        allTextNodes.current.forEach((el)=>observer.observe(el));
    };
    const translateElement = async (el)=>{
        if (!enabled.current) return;
        const text = el.textContent?.replaceAll('\n', '').trim();
        if (!text) return;
        if (el.classList.contains('translation-target')) {
            return;
        }
        const updateSourceNodes = (element)=>{
            const hasDirectText = Array.from(element.childNodes).some((node)=>node.nodeType === Node.TEXT_NODE && node.textContent?.trim() !== '');
            if (hasDirectText) {
                element.classList.add('translation-source');
                const textNodes = Array.from(element.childNodes).filter((node)=>node.nodeType === Node.TEXT_NODE && node.textContent?.trim() !== '');
                if (!element.hasAttribute('original-text-stored')) {
                    element.setAttribute('original-text-nodes', JSON.stringify(textNodes.map((node)=>node.textContent)));
                    element.setAttribute('original-text-stored', 'true');
                }
            }
            const isSource = element.classList.contains('translation-source');
            if (isSource) {
                const textNodes = Array.from(element.childNodes).filter((node)=>node.nodeType === Node.TEXT_NODE);
                if (showTranslateSourceRef.current) {
                    const originalTexts = JSON.parse(element.getAttribute('original-text-nodes') || '[]');
                    textNodes.forEach((textNode, index)=>{
                        if (originalTexts[index] !== undefined) {
                            textNode.textContent = originalTexts[index];
                        }
                    });
                } else {
                    textNodes.forEach((textNode)=>{
                        textNode.textContent = '';
                    });
                }
            }
            for (const child of Array.from(element.childNodes)){
                if (child.nodeType !== Node.ELEMENT_NODE) continue;
                const node = child;
                if (!node.classList.contains('translation-target')) {
                    updateSourceNodes(node);
                }
            }
        };
        updateSourceNodes(el);
        try {
            const translated = await translateRef.current([
                text
            ]);
            const translatedText = translated[0];
            if (!translatedText || text === translatedText) return;
            const wrapper = document.createElement('font');
            wrapper.className = `translation-target ${!enabled.current ? 'hidden' : ''}`;
            wrapper.setAttribute('translation-element-mark', '1');
            wrapper.setAttribute('lang', targetLang || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getLocale"])());
            if (widthLineBreak) {
                wrapper.appendChild(document.createElement('br'));
            }
            const blockWrapper = document.createElement('font');
            blockWrapper.className = `translation-target ${targetBlockClassName}`;
            const inner = document.createElement('font');
            inner.className = 'translation-target target-inner target-inner-theme-none';
            inner.textContent = translatedText;
            blockWrapper.appendChild(inner);
            wrapper.appendChild(blockWrapper);
            if (el.querySelector('.translation-target')) {
                return;
            }
            el.appendChild(wrapper);
            translatedElements.current.push(el);
        } catch (err) {
            console.warn('Translation failed:', err);
        }
    };
    const findNodeIndicesInRange = (range, nodes)=>{
        const startContainer = range.startContainer;
        const endContainer = range.endContainer;
        let startIndex = -1;
        let endIndex = -1;
        for(let i = 0; i < nodes.length; i++){
            const node = nodes[i];
            if (node === startContainer || node.contains(startContainer)) {
                if (startIndex === -1) startIndex = i;
            }
            if (node === endContainer || node.contains(endContainer)) {
                endIndex = i;
            }
        }
        if (startIndex !== -1 && endIndex === -1) {
            endIndex = startIndex;
        }
        return {
            startIndex,
            endIndex
        };
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const translateInRange = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$debounce$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["debounce"])((range)=>{
        const nodes = allTextNodes.current;
        if (nodes.length === 0) {
            console.warn('No text nodes available for translation.');
            return;
        }
        const { startIndex, endIndex } = findNodeIndicesInRange(range, nodes);
        if (startIndex === -1) {
            console.log('Range not found in text nodes');
            return;
        }
        const beforeContext = 2;
        const afterContext = 5;
        const beforeStart = Math.max(0, startIndex - beforeContext);
        const afterEnd = Math.min(nodes.length - 1, endIndex + afterContext);
        for(let i = beforeStart; i <= afterEnd; i++){
            const node = nodes[i];
            if (node) {
                translateElement(node);
            }
        }
    }, 500), [
        translateElement
    ]);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (enabled.current && progress) {
            const { range } = progress;
            translateInRange(range);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        progress
    ]);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (!viewSettings) return;
        const enabledChanged = enabled.current !== viewSettings.translationEnabled;
        const providerChanged = provider !== viewSettings.translationProvider;
        const targetLangChanged = targetLang !== viewSettings.translateTargetLang;
        const showTranslateSourceChanged = showTranslateSourceRef.current !== viewSettings.showTranslateSource;
        if (enabledChanged) {
            enabled.current = viewSettings.translationEnabled;
        }
        if (providerChanged) {
            setProvider(viewSettings.translationProvider);
        }
        if (targetLangChanged) {
            setTargetLang(viewSettings.translateTargetLang);
        }
        if (showTranslateSourceChanged) {
            showTranslateSourceRef.current = viewSettings.showTranslateSource;
        }
        if (enabledChanged) {
            toggleTranslationVisibility(viewSettings.translationEnabled);
            if (enabled.current) {
                observeTextNodes();
            }
        } else if (providerChanged || targetLangChanged || showTranslateSourceChanged) {
            updateTranslation();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        bookKey,
        viewSettings,
        provider,
        targetLang
    ]);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (!view || !enabled.current) return;
        if ('renderer' in view) {
            view.addEventListener('load', observeTextNodes);
        } else {
            observeTextNodes();
        }
        return ()=>{
            if ('renderer' in view) {
                view.removeEventListener('load', observeTextNodes);
            }
            observerRef.current?.disconnect();
            translatedElements.current = [];
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        view
    ]);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/readest-app/src/app/reader/hooks/useScrollToItem.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$cfi$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/cfi.ts [ssr] (ecmascript)");
'use client';
;
;
const useScrollToItem = (cfi, progress)=>{
    const viewRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const isCurrent = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$cfi$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["isCfiInLocation"])(cfi, progress?.location), [
        cfi,
        progress
    ]);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (!viewRef.current || !isCurrent) return;
        // Scroll to the item if it's the current one and not visible
        const element = viewRef.current;
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
        if (!isVisible) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }
        element.setAttribute('aria-current', 'page');
    }, [
        isCurrent
    ]);
    return {
        isCurrent,
        viewRef
    };
};
const __TURBOPACK__default__export__ = useScrollToItem;
}),
"[project]/apps/readest-app/src/app/reader/hooks/useSidebar.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/context/EnvContext.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/settingsStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$sidebarStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/sidebarStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$helpers$2f$settings$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/helpers/settings.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$sidebarStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$helpers$2f$settings$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$sidebarStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$helpers$2f$settings$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
'use client';
;
;
;
;
;
const useSidebar = (initialWidth, isPinned)=>{
    const { envConfig } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["useEnv"])();
    const { settings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"])();
    const { sideBarWidth, isSideBarVisible, isSideBarPinned, getSideBarWidth, setSideBarWidth, setSideBarVisible, setSideBarPin, toggleSideBar, toggleSideBarPin } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$sidebarStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useSidebarStore"])();
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        setSideBarWidth(initialWidth);
        setSideBarPin(isPinned);
        setSideBarVisible(isPinned);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const handleSideBarResize = (newWidth)=>{
        setSideBarWidth(newWidth);
        settings.globalReadSettings.sideBarWidth = newWidth;
    };
    const handleSideBarTogglePin = ()=>{
        toggleSideBarPin();
        if (isSideBarPinned && isSideBarVisible) setSideBarVisible(false);
        const globalReadSettings = settings.globalReadSettings;
        const newGlobalReadSettings = {
            ...globalReadSettings,
            isSideBarPinned: !isSideBarPinned
        };
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$helpers$2f$settings$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["saveSysSettings"])(envConfig, 'globalReadSettings', newGlobalReadSettings);
    };
    return {
        sideBarWidth,
        isSideBarPinned,
        isSideBarVisible,
        getSideBarWidth,
        handleSideBarResize,
        handleSideBarTogglePin,
        setSideBarVisible,
        toggleSideBar
    };
};
const __TURBOPACK__default__export__ = useSidebar;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/readest-app/src/app/reader/hooks/useSearchNav.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "useSearchNav",
    ()=>useSearchNav
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$sidebarStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/sidebarStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/readerStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$cfi$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/cfi.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$sidebar$2f$SearchResultsNav$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/app/reader/components/sidebar/SearchResultsNav.tsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$sidebarStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$sidebar$2f$SearchResultsNav$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$sidebarStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$sidebar$2f$SearchResultsNav$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
'use client';
;
;
;
;
;
function useSearchNav(bookKey) {
    const { getView, getProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useReaderStore"])();
    const { setSideBarVisible } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$sidebarStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useSidebarStore"])();
    const { getSearchNavState, setSearchResultIndex, clearSearch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$sidebarStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useSidebarStore"])();
    const searchNavState = getSearchNavState(bookKey);
    const { searchTerm, searchResults, searchResultIndex, searchProgress } = searchNavState;
    const progress = getProgress(bookKey);
    const currentLocation = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>{
        return progress?.location;
    }, [
        progress
    ]);
    // Flatten search results for navigation
    const flattenedResults = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>{
        if (!searchResults) return [];
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$sidebar$2f$SearchResultsNav$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["flattenSearchResults"])(searchResults);
    }, [
        searchResults
    ]);
    const totalResults = flattenedResults.length;
    const hasSearchResults = searchResults && totalResults > 0;
    const showSearchNav = hasSearchResults;
    // Get current section label
    const currentSection = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>{
        if (!flattenedResults.length || searchResultIndex >= flattenedResults.length) return '';
        return flattenedResults[searchResultIndex]?.sectionLabel || '';
    }, [
        flattenedResults,
        searchResultIndex
    ]);
    // Find results on the current page
    const currentPageResults = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>{
        if (!flattenedResults.length || !currentLocation) return {
            firstIndex: -1,
            lastIndex: -1
        };
        let firstIndex = -1;
        let lastIndex = -1;
        for(let i = 0; i < flattenedResults.length; i++){
            const result = flattenedResults[i];
            if (result && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$cfi$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["isCfiInLocation"])(result.cfi, currentLocation)) {
                if (firstIndex === -1) firstIndex = i;
                lastIndex = i;
            }
        }
        if (firstIndex !== -1) {
            setTimeout(()=>setSearchResultIndex(bookKey, firstIndex), 0);
        }
        return {
            firstIndex,
            lastIndex
        };
    }, [
        flattenedResults,
        currentLocation,
        bookKey,
        setSearchResultIndex
    ]);
    // Navigate to a specific search result
    const navigateToResult = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])((index)=>{
        if (!flattenedResults.length) return;
        if (index < 0 || index >= flattenedResults.length) return;
        const result = flattenedResults[index];
        if (result) {
            setSearchResultIndex(bookKey, index);
            getView(bookKey)?.goTo(result.cfi);
        }
    }, [
        bookKey,
        flattenedResults,
        setSearchResultIndex,
        getView
    ]);
    const handleShowResults = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(()=>{
        setSideBarVisible(true);
    }, [
        setSideBarVisible
    ]);
    const handleCloseSearch = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(()=>{
        clearSearch(bookKey);
        getView(bookKey)?.clearSearch();
    }, [
        clearSearch,
        bookKey,
        getView
    ]);
    // Navigate to the previous page with results (last result before current page)
    const handlePreviousResult = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(()=>{
        const { firstIndex } = currentPageResults;
        if (firstIndex > 0) {
            // Navigate to the result just before the first result on current page
            navigateToResult(firstIndex - 1);
        } else if (firstIndex === -1 && searchResultIndex > 0) {
            // No results on current page, just go to previous result
            navigateToResult(searchResultIndex - 1);
        }
    }, [
        currentPageResults,
        searchResultIndex,
        navigateToResult
    ]);
    // Navigate to the next page with results (first result after current page)
    const handleNextResult = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(()=>{
        const { lastIndex } = currentPageResults;
        if (lastIndex >= 0 && lastIndex < totalResults - 1) {
            // Navigate to the result just after the last result on current page
            navigateToResult(lastIndex + 1);
        } else if (lastIndex === -1 && searchResultIndex < totalResults - 1) {
            // No results on current page, just go to next result
            navigateToResult(searchResultIndex + 1);
        }
    }, [
        currentPageResults,
        totalResults,
        searchResultIndex,
        navigateToResult
    ]);
    // Check if there are results before/after the current page
    const hasPreviousPage = currentPageResults.firstIndex > 0 || currentPageResults.firstIndex === -1 && searchResultIndex > 0;
    const hasNextPage = currentPageResults.lastIndex >= 0 && currentPageResults.lastIndex < totalResults - 1 || currentPageResults.lastIndex === -1 && searchResultIndex < totalResults - 1;
    return {
        searchTerm,
        searchProgress,
        currentSection,
        searchResultIndex,
        totalResults,
        showSearchNav,
        hasPreviousPage,
        hasNextPage,
        handleShowResults,
        handleCloseSearch,
        handlePreviousResult,
        handleNextResult
    };
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/readest-app/src/app/reader/hooks/useBooknotesNav.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "useBooknotesNav",
    ()=>useBooknotesNav
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$foliate$2d$js$2f$epubcfi$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/foliate-js/epubcfi.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$sidebarStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/sidebarStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/readerStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/bookDataStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$cfi$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/cfi.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$toc$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/toc.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$sidebarStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$sidebarStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
'use client';
;
;
;
;
;
;
;
function useBooknotesNav(bookKey, toc) {
    const { getView, getProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useReaderStore"])();
    const { getConfig } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useBookDataStore"])();
    const { setSideBarVisible, getBooknotesNavState, setActiveBooknoteType, setBooknoteResults, setBooknoteIndex, clearBooknotesNav } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$sidebarStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useSidebarStore"])();
    const booknotesNavState = getBooknotesNavState(bookKey);
    const { activeBooknoteType, booknoteResults, booknoteIndex } = booknotesNavState;
    const progress = getProgress(bookKey);
    const currentLocation = progress?.location;
    // Get booknotes from config and filter by type
    const allBooknotes = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>{
        const config = getConfig(bookKey);
        return config?.booknotes?.filter((note)=>!note.deletedAt) || [];
    }, [
        bookKey,
        getConfig
    ]);
    // Sort booknotes by CFI order
    const sortedBooknotes = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>{
        if (!booknoteResults) return [];
        return [
            ...booknoteResults
        ].sort((a, b)=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$foliate$2d$js$2f$epubcfi$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["compare"](a.cfi, b.cfi));
    }, [
        booknoteResults
    ]);
    const totalResults = sortedBooknotes.length;
    const hasBooknotes = booknoteResults && totalResults > 0;
    const showBooknotesNav = hasBooknotes && activeBooknoteType !== null;
    // Get current section label
    const currentSection = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>{
        if (!sortedBooknotes.length || booknoteIndex >= sortedBooknotes.length) return '';
        const currentNote = sortedBooknotes[booknoteIndex];
        if (!currentNote) return '';
        const tocItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$toc$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["findTocItemBS"])(toc, currentNote.cfi);
        return tocItem?.label || '';
    }, [
        sortedBooknotes,
        booknoteIndex,
        toc
    ]);
    // Find booknotes on the current page
    const currentPageResults = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>{
        if (!sortedBooknotes.length || !currentLocation) return {
            firstIndex: -1,
            lastIndex: -1
        };
        let firstIndex = -1;
        let lastIndex = -1;
        for(let i = 0; i < sortedBooknotes.length; i++){
            const note = sortedBooknotes[i];
            if (note && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$cfi$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["isCfiInLocation"])(note.cfi, currentLocation)) {
                if (firstIndex === -1) firstIndex = i;
                lastIndex = i;
            }
        }
        if (firstIndex !== -1) {
            setTimeout(()=>setBooknoteIndex(bookKey, firstIndex), 0);
        }
        return {
            firstIndex,
            lastIndex
        };
    }, [
        sortedBooknotes,
        currentLocation,
        bookKey,
        setBooknoteIndex
    ]);
    // Navigate to a specific booknote
    const navigateToBooknote = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])((index)=>{
        if (!sortedBooknotes.length) return;
        if (index < 0 || index >= sortedBooknotes.length) return;
        const note = sortedBooknotes[index];
        if (note) {
            setBooknoteIndex(bookKey, index);
            getView(bookKey)?.goTo(note.cfi);
        }
    }, [
        bookKey,
        sortedBooknotes,
        setBooknoteIndex,
        getView
    ]);
    // Start navigation for a specific booknote type
    const startNavigation = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])((type)=>{
        const filtered = allBooknotes.filter((note)=>note.type === type);
        if (filtered.length === 0) return;
        const sorted = [
            ...filtered
        ].sort((a, b)=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$foliate$2d$js$2f$epubcfi$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["compare"](a.cfi, b.cfi));
        setActiveBooknoteType(bookKey, type);
        setBooknoteResults(bookKey, sorted);
        setBooknoteIndex(bookKey, 0);
        // Navigate to first booknote
        if (sorted.length > 0) {
            getView(bookKey)?.goTo(sorted[0].cfi);
        }
    }, [
        allBooknotes,
        bookKey,
        setActiveBooknoteType,
        setBooknoteResults,
        setBooknoteIndex,
        getView
    ]);
    const handleShowResults = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(()=>{
        setSideBarVisible(true);
    }, [
        setSideBarVisible
    ]);
    const handleClose = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(()=>{
        clearBooknotesNav(bookKey);
    }, [
        clearBooknotesNav,
        bookKey
    ]);
    // Navigate to the previous page with booknotes
    const handlePrevious = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(()=>{
        const { firstIndex } = currentPageResults;
        if (firstIndex > 0) {
            navigateToBooknote(firstIndex - 1);
        } else if (firstIndex === -1 && booknoteIndex > 0) {
            navigateToBooknote(booknoteIndex - 1);
        }
    }, [
        currentPageResults,
        booknoteIndex,
        navigateToBooknote
    ]);
    // Navigate to the next page with booknotes
    const handleNext = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(()=>{
        const { lastIndex } = currentPageResults;
        if (lastIndex >= 0 && lastIndex < totalResults - 1) {
            navigateToBooknote(lastIndex + 1);
        } else if (lastIndex === -1 && booknoteIndex < totalResults - 1) {
            navigateToBooknote(booknoteIndex + 1);
        }
    }, [
        currentPageResults,
        totalResults,
        booknoteIndex,
        navigateToBooknote
    ]);
    // Check if there are booknotes before/after the current page
    const hasPreviousPage = currentPageResults.firstIndex > 0 || currentPageResults.firstIndex === -1 && booknoteIndex > 0;
    const hasNextPage = currentPageResults.lastIndex >= 0 && currentPageResults.lastIndex < totalResults - 1 || currentPageResults.lastIndex === -1 && booknoteIndex < totalResults - 1;
    // Get counts for each booknote type
    const bookmarkCount = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>allBooknotes.filter((n)=>n.type === 'bookmark').length, [
        allBooknotes
    ]);
    const annotationCount = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>allBooknotes.filter((n)=>n.type === 'annotation').length, [
        allBooknotes
    ]);
    const excerptCount = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>allBooknotes.filter((n)=>n.type === 'excerpt').length, [
        allBooknotes
    ]);
    return {
        activeBooknoteType,
        currentSection,
        booknoteIndex,
        totalResults,
        showBooknotesNav,
        hasPreviousPage,
        hasNextPage,
        bookmarkCount,
        annotationCount,
        excerptCount,
        startNavigation,
        handleShowResults,
        handleClose,
        handlePrevious,
        handleNext
    };
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/readest-app/src/app/reader/hooks/useIframeEvents.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "useMouseEvent",
    ()=>useMouseEvent,
    "useTouchEvent",
    ()=>useTouchEvent
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/readerStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/bookDataStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$debounce$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/debounce.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/event.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
'use client';
;
;
;
;
;
const useMouseEvent = (bookKey, handlePageFlip, handleContinuousScroll)=>{
    const { hoveredBookKey } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useReaderStore"])();
    const debounceScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$debounce$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["debounce"])(handleContinuousScroll, 500);
    const debounceFlip = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$debounce$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["debounce"])(handlePageFlip, 100);
    const handleMouseEvent = (msg)=>{
        if (msg instanceof MessageEvent) {
            if (msg.data && msg.data.bookKey === bookKey) {
                if (msg.data.type === 'iframe-wheel') {
                    debounceScroll('mouse', -msg.data.deltaY, 0);
                }
                if (msg.data.type === 'iframe-wheel') {
                    if (msg.data.ctrlKey) {
                        if (msg.data.deltaY > 0) {
                            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["eventDispatcher"].dispatch('zoom-out', {
                                factor: Math.abs(msg.data.deltaY) / 100
                            });
                        } else if (msg.data.deltaY < 0) {
                            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["eventDispatcher"].dispatch('zoom-in', {
                                factor: Math.abs(msg.data.deltaY) / 100
                            });
                        }
                    } else {
                        debounceFlip(msg);
                    }
                } else {
                    handlePageFlip(msg);
                }
            }
        } else if (msg.type === 'wheel') {
            const event = msg;
            debounceScroll('mouse', -event.deltaY, 0);
        } else {
            handlePageFlip(msg);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        window.addEventListener('message', handleMouseEvent);
        return ()=>{
            window.removeEventListener('message', handleMouseEvent);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        bookKey,
        hoveredBookKey
    ]);
    return {
        onClick: handlePageFlip,
        onWheel: handleMouseEvent
    };
};
const useTouchEvent = (bookKey, handlePageFlip, handleContinuousScroll)=>{
    const { getBookData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useBookDataStore"])();
    const { hoveredBookKey, setHoveredBookKey, getViewSettings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useReaderStore"])();
    const touchStartRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const touchEndRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const touchStartTimeRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const touchEndTimeRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const onTouchStart = (e)=>{
        const touch = e.targetTouches[0];
        if (!touch) return;
        touchStartRef.current = touch;
        touchStartTimeRef.current = 'timeStamp' in e ? e.timeStamp : Date.now();
    };
    const onTouchMove = (e)=>{
        if (!touchStartRef.current) return;
        const touch = e.targetTouches[0];
        if (touch) {
            touchEndRef.current = touch;
            touchEndTimeRef.current = 'timeStamp' in e ? e.timeStamp : Date.now();
        }
        const { current: touchStart } = touchStartRef;
        const { current: touchEnd } = touchEndRef;
        if (hoveredBookKey && touchEnd) {
            const viewSettings = getViewSettings(bookKey);
            const deltaY = touchEnd.screenY - touchStart.screenY;
            const deltaX = touchEnd.screenX - touchStart.screenX;
            if (!viewSettings.scrolled && !viewSettings.vertical) {
                if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 10) {
                    setHoveredBookKey(null);
                }
            } else {
                setHoveredBookKey(null);
            }
        }
    };
    const onTouchEnd = (e)=>{
        if (!touchStartRef.current) return;
        const touch = e.targetTouches[0];
        if (touch) {
            touchEndRef.current = touch;
            touchEndTimeRef.current = 'timeStamp' in e ? e.timeStamp : Date.now();
        }
        const windowWidth = window.innerWidth;
        const { current: touchStart } = touchStartRef;
        const { current: touchEnd } = touchEndRef;
        const { current: touchStartTime } = touchStartTimeRef;
        const { current: touchEndTime } = touchEndTimeRef;
        if (touchEnd) {
            const viewSettings = getViewSettings(bookKey);
            const bookData = getBookData(bookKey);
            const deltaY = touchEnd.screenY - touchStart.screenY;
            const deltaX = touchEnd.screenX - touchStart.screenX;
            const deltaT = touchEndTime && touchStartTime ? touchEndTime - touchStartTime : 0;
            // also check for deltaX to prevent swipe page turn from triggering the toggle
            if (deltaY < -10 && Math.abs(deltaY) > Math.abs(deltaX) * 2 && Math.abs(deltaX) < windowWidth * 0.3) {
                // swipe up to toggle the header bar and the footer bar, only for horizontal page mode
                if (!viewSettings.scrolled && // not scrolled
                !viewSettings.vertical && // not vertical
                (!bookData.isFixedLayout || viewSettings.zoomLevel <= 100) // for fixed layout, not when zoomed in
                ) {
                    setHoveredBookKey(hoveredBookKey ? null : bookKey);
                }
            } else {
                if (hoveredBookKey) {
                    setHoveredBookKey(null);
                }
            }
            handlePageFlip(new CustomEvent('touch-swipe', {
                detail: {
                    deltaX,
                    deltaY,
                    deltaT,
                    startX: touchStart.screenX,
                    startY: touchStart.screenY,
                    endX: touchEnd.screenX,
                    endY: touchEnd.screenY
                }
            }));
            handleContinuousScroll('touch', deltaY, 30);
        }
        touchStartRef.current = null;
        touchEndRef.current = null;
    };
    const handleTouch = (msg)=>{
        if (msg.data && msg.data.bookKey === bookKey) {
            if (msg.data.type === 'iframe-touchstart') {
                onTouchStart(msg.data);
            } else if (msg.data.type === 'iframe-touchmove') {
                onTouchMove(msg.data);
            } else if (msg.data.type === 'iframe-touchend') {
                onTouchEnd(msg.data);
            }
        }
    };
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        window.addEventListener('message', handleTouch);
        return ()=>{
            window.removeEventListener('message', handleTouch);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        hoveredBookKey
    ]);
    return {
        onTouchStart,
        onTouchMove,
        onTouchEnd
    };
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/readest-app/src/app/reader/hooks/useFoliateEvents.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFoliateEvents",
    ()=>useFoliateEvents
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
'use client';
;
const useFoliateEvents = (view, handlers)=>{
    const onLoad = handlers?.onLoad;
    const onRelocate = handlers?.onRelocate;
    const onLinkClick = handlers?.onLinkClick;
    const onRendererRelocate = handlers?.onRendererRelocate;
    const onDrawAnnotation = handlers?.onDrawAnnotation;
    const onShowAnnotation = handlers?.onShowAnnotation;
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (!view) return;
        if (onLoad) view.addEventListener('load', onLoad);
        if (onRelocate) view.addEventListener('relocate', onRelocate);
        if (onLinkClick) view.addEventListener('link', onLinkClick);
        if (onRendererRelocate) view.renderer.addEventListener('relocate', onRendererRelocate);
        if (onDrawAnnotation) view.addEventListener('draw-annotation', onDrawAnnotation);
        if (onShowAnnotation) view.addEventListener('show-annotation', onShowAnnotation);
        return ()=>{
            if (onLoad) view.removeEventListener('load', onLoad);
            if (onRelocate) view.removeEventListener('relocate', onRelocate);
            if (onLinkClick) view.removeEventListener('link', onLinkClick);
            if (onRendererRelocate) view.renderer.removeEventListener('relocate', onRendererRelocate);
            if (onDrawAnnotation) view.removeEventListener('draw-annotation', onDrawAnnotation);
            if (onShowAnnotation) view.removeEventListener('show-annotation', onShowAnnotation);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        view
    ]);
};
}),
"[project]/apps/readest-app/src/app/reader/hooks/useProgressSync.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "useProgressSync",
    ()=>useProgressSync
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/context/AuthContext.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useSync$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/hooks/useSync.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$types$2f$book$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/types/book.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/bookDataStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/readerStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/settingsStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/hooks/useTranslation.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$serializer$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/serializer.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$libs$2f$document$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/libs/document.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$debounce$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/debounce.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/event.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/constants.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$xcfi$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/xcfi.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useSync$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useSync$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
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
const useProgressSync = (bookKey)=>{
    const _ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useTranslation"])();
    const { getConfig, setConfig, getBookData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useBookDataStore"])();
    const { getView, getProgress, setHoveredBookKey } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useReaderStore"])();
    const { settings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"])();
    const { syncedConfigs, syncConfigs } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useSync$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useSync"])(bookKey);
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const progress = getProgress(bookKey);
    const configPulled = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(false);
    const hasPulledConfigOnce = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(false);
    const pushConfig = async (bookKey, config)=>{
        const book = getBookData(bookKey)?.book;
        if (!config || !book || !user) return;
        const bookHash = bookKey.split('-')[0];
        const metaHash = book.metaHash;
        const newConfig = {
            ...config,
            bookHash,
            metaHash
        };
        const compressedConfig = JSON.parse((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$serializer$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["serializeConfig"])(newConfig, settings.globalViewSettings, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["DEFAULT_BOOK_SEARCH_CONFIG"]));
        delete compressedConfig.booknotes;
        await syncConfigs([
            compressedConfig
        ], bookHash, metaHash, 'push');
    };
    const pullConfig = async (bookKey)=>{
        const book = getBookData(bookKey)?.book;
        if (!user || !book) return;
        const bookHash = bookKey.split('-')[0];
        const metaHash = book.metaHash;
        await syncConfigs([], bookHash, metaHash, 'pull');
    };
    const syncConfig = async ()=>{
        if (!configPulled.current) {
            pullConfig(bookKey);
        } else {
            const config = getConfig(bookKey);
            const view = getView(bookKey);
            const book = getBookData(bookKey)?.book;
            if (config && view && book && config.progress && config.progress[0] > 0) {
                try {
                    const content = view.renderer.getContents()[0];
                    if (content && !__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$types$2f$book$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["FIXED_LAYOUT_FORMATS"].has(book.format)) {
                        const { doc, index } = content;
                        const xpointerResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$xcfi$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getXPointerFromCFI"])(config.location, doc, index || 0);
                        config.xpointer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$xcfi$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["normalizeProgressXPointer"])(xpointerResult.xpointer);
                    }
                } catch (error) {
                    console.warn('Failed to convert CFI to XPointer', error);
                }
                pushConfig(bookKey, config);
            }
        }
    };
    const handleSyncBookProgress = async (event)=>{
        const { bookKey: syncBookKey } = event.detail;
        if (syncBookKey === bookKey) {
            configPulled.current = false;
            await pullConfig(bookKey);
        }
    };
    // Push: ad-hoc push when the book is closed
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["eventDispatcher"].on('sync-book-progress', handleSyncBookProgress);
        return ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["eventDispatcher"].off('sync-book-progress', handleSyncBookProgress);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        bookKey
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleAutoSync = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$debounce$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["debounce"])(()=>{
        syncConfig();
    }, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["SYNC_PROGRESS_INTERVAL_SEC"] * 1000), []);
    // Push: auto-push progress when progress changes with a debounce
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (!progress?.location || !user) return;
        handleAutoSync();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        progress?.location
    ]);
    // Pull: pull progress once when the book is opened
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (!progress || hasPulledConfigOnce.current) return;
        hasPulledConfigOnce.current = true;
        pullConfig(bookKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        progress
    ]);
    const applyRemoteProgress = async (syncedConfigs)=>{
        const config = getConfig(bookKey);
        const book = getBookData(bookKey)?.book;
        if (!syncedConfigs || syncedConfigs.length === 0 || !config || !book) return;
        const bookHash = bookKey.split('-')[0];
        const metaHash = book.metaHash;
        const syncedConfig = syncedConfigs.filter((c)=>c.bookHash === bookHash || c.metaHash === metaHash)[0];
        if (syncedConfig) {
            const configCFI = config?.location;
            let remoteCFILocation = syncedConfig.location;
            const xPointer = syncedConfig.xpointer;
            const bookData = getBookData(bookKey);
            const view = getView(bookKey);
            if (xPointer && view && bookData && bookData.bookDoc) {
                const content = view.renderer.getContents()[0];
                const koProgress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$xcfi$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["normalizeProgressXPointer"])(xPointer);
                const candidateCFI = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$xcfi$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getCFIFromXPointer"])(koProgress, content?.doc, content?.index, bookData.bookDoc);
                if (!remoteCFILocation || __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$libs$2f$document$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["CFI"].compare(remoteCFILocation, candidateCFI) < 0) {
                    remoteCFILocation = candidateCFI;
                }
            }
            const filteredSyncedConfig = Object.fromEntries(Object.entries(syncedConfig).filter(([_, value])=>value !== null && value !== undefined));
            if (syncedConfig.updatedAt >= config.updatedAt) {
                setConfig(bookKey, {
                    ...config,
                    ...filteredSyncedConfig
                });
            } else {
                setConfig(bookKey, {
                    ...filteredSyncedConfig,
                    ...config
                });
            }
            if (remoteCFILocation && configCFI) {
                if (__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$libs$2f$document$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["CFI"].compare(configCFI, remoteCFILocation) < 0) {
                    if (view) {
                        view.goTo(remoteCFILocation);
                        setHoveredBookKey(null);
                        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["eventDispatcher"].dispatch('hint', {
                            bookKey,
                            message: _('Reading Progress Synced')
                        });
                    }
                }
            }
        }
    };
    // Pull: proccess the pulled progress
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (!configPulled.current && syncedConfigs) {
            configPulled.current = true;
            applyRemoteProgress(syncedConfigs).catch((error)=>{
                console.error('Failed to apply remote progress', error);
            });
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        syncedConfigs
    ]);
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/readest-app/src/app/reader/hooks/useProgressAutoSave.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "useProgressAutoSave",
    ()=>useProgressAutoSave
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/context/EnvContext.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/bookDataStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/readerStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/settingsStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$throttle$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/throttle.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
'use client';
;
;
;
;
;
;
const useProgressAutoSave = (bookKey)=>{
    const { envConfig } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["useEnv"])();
    const { getConfig, saveConfig } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useBookDataStore"])();
    const { getProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useReaderStore"])();
    const progress = getProgress(bookKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const saveBookConfig = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$throttle$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["throttle"])(()=>{
        setTimeout(async ()=>{
            const config = getConfig(bookKey);
            const settings = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"].getState().settings;
            await saveConfig(envConfig, bookKey, config, settings);
        }, 5000);
    }, 10000), []);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        saveBookConfig();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        progress,
        bookKey
    ]);
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/readest-app/src/app/reader/hooks/useKOSync.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "useKOSync",
    ()=>useKOSync
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/context/EnvContext.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/settingsStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/readerStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/bookDataStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/hooks/useTranslation.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$sync$2f$KOSyncClient$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/sync/KOSyncClient.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$types$2f$book$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/types/book.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$debounce$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/debounce.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/event.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$xcfi$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/xcfi.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$sync$2f$KOSyncClient$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$sync$2f$KOSyncClient$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
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
const useKOSync = (bookKey)=>{
    const _ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useTranslation"])();
    const { appService } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["useEnv"])();
    const { settings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"])();
    const { getProgress, getView } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useReaderStore"])();
    const { getBookData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useBookDataStore"])();
    const [kosyncClient, setKOSyncClient] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [syncState, setSyncState] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('idle');
    const [conflictDetails, setConflictDetails] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [errorMessage] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const hasPulledOnce = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(false);
    const progress = getProgress(bookKey);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (!settings.kosync.username || !settings.kosync.userkey) {
            setKOSyncClient(null);
            return;
        }
        const client = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$sync$2f$KOSyncClient$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["KOSyncClient"](settings.kosync);
        setKOSyncClient(client);
    }, [
        settings
    ]);
    const generateKOProgress = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(()=>{
        const progress = getProgress(bookKey);
        const book = getBookData(bookKey)?.book;
        if (!progress || !book) return null;
        let koProgress = '';
        let percentage;
        if (__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$types$2f$book$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["FIXED_LAYOUT_FORMATS"].has(book.format)) {
            const page = progress.section?.current ?? 0;
            const totalPages = progress.section?.total ?? 0;
            koProgress = page.toString();
            percentage = totalPages > 0 ? (page + 1) / totalPages : 0;
        } else {
            const view = getView(bookKey);
            const cfi = progress.location;
            if (!view || !cfi) return null;
            try {
                const content = view.renderer.getContents()[0];
                if (content) {
                    const { doc, index: spineIndex } = content;
                    const converter = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$xcfi$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["XCFI"](doc, spineIndex || 0);
                    const xpointerResult = converter.cfiToXPointer(cfi);
                    koProgress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$xcfi$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["normalizeProgressXPointer"])(xpointerResult.xpointer);
                }
            } catch (error) {
                console.error('Failed to convert CFI to XPointer', error);
            }
            const page = progress.pageinfo?.current ?? 0;
            const totalPages = progress.pageinfo?.total ?? 0;
            percentage = totalPages > 0 ? (page + 1) / totalPages : 0;
        }
        return {
            koProgress,
            percentage
        };
    }, [
        bookKey,
        getProgress,
        getBookData,
        getView
    ]);
    const applyRemoteProgress = async (book, bookDoc, remote)=>{
        const view = getView(bookKey);
        if (__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$types$2f$book$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["FIXED_LAYOUT_FORMATS"].has(book.format)) {
            const pageToGo = parseInt(remote.progress, 10);
            if (isNaN(pageToGo)) return;
            view?.select(pageToGo - 1);
        } else {
            if (!remote.progress?.startsWith('/body')) return;
            try {
                const content = view?.renderer.getContents()[0];
                const koProgress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$xcfi$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["normalizeProgressXPointer"])(remote.progress);
                const cfi = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$xcfi$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getCFIFromXPointer"])(koProgress, content?.doc, content?.index, bookDoc);
                view?.goTo(cfi);
            } catch (error) {
                console.error('Failed to convert XPointer to CFI', error);
                return;
            }
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["eventDispatcher"].dispatch('toast', {
            message: _('Reading Progress Synced'),
            type: 'info'
        });
    };
    const promptedSync = async (book, bookDoc, local, remote)=>{
        let localPreview = '';
        let remotePreview = '';
        const remotePercentage = remote.percentage || 0;
        if (__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$types$2f$book$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["FIXED_LAYOUT_FORMATS"].has(book.format)) {
            const localPageInfo = local.section;
            const localPercentage = localPageInfo && localPageInfo.total > 0 ? Math.round((localPageInfo.current + 1) / localPageInfo.total * 100) : 0;
            localPreview = localPageInfo ? _('Page {{page}} of {{total}} ({{percentage}}%)', {
                page: localPageInfo.current + 1,
                total: localPageInfo.total,
                percentage: localPercentage
            }) : _('Current position');
            const remotePage = parseInt(remote.progress, 10);
            if (!isNaN(remotePage) && remotePercentage > 0) {
                const localTotalPages = localPageInfo?.total ?? 0;
                const remoteTotalPages = Math.round(remotePage / remotePercentage);
                const pagesMatch = Math.abs(localTotalPages - remoteTotalPages) <= 1;
                if (pagesMatch) {
                    remotePreview = _('Page {{page}} of {{total}} ({{percentage}}%)', {
                        page: remotePage,
                        total: remoteTotalPages,
                        percentage: Math.round(remotePercentage * 100)
                    });
                } else {
                    remotePreview = _('Approximately page {{page}} of {{total}} ({{percentage}}%)', {
                        page: remotePage,
                        total: remoteTotalPages,
                        percentage: Math.round(remotePercentage * 100)
                    });
                }
            } else {
                remotePreview = _('Approximately {{percentage}}%', {
                    percentage: Math.round(remotePercentage * 100)
                });
            }
        } else {
            const localPageInfo = local.pageinfo;
            const localPercentage = localPageInfo && localPageInfo.total > 0 ? Math.round((localPageInfo.current + 1) / localPageInfo.total * 100) : 0;
            localPreview = `${local.sectionLabel} (${localPercentage}%)`;
            remotePreview = _('Approximately {{percentage}}%', {
                percentage: Math.round(remotePercentage * 100)
            });
        }
        setConflictDetails({
            book,
            bookDoc,
            local: {
                cfi: local.location,
                preview: localPreview
            },
            remote: {
                ...remote,
                preview: remotePreview
            }
        });
    };
    const pushProgress = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$debounce$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["debounce"])(async ()=>{
            if (!bookKey || !appService || !kosyncClient || !hasPulledOnce.current) return;
            const { settings } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"].getState();
            if ([
                'receive',
                'disable'
            ].includes(settings.kosync.strategy)) return;
            const currentBook = getBookData(bookKey)?.book;
            const progress = generateKOProgress();
            if (!currentBook || !progress || !progress.koProgress) return;
            await kosyncClient.updateProgress(currentBook, progress.koProgress, progress.percentage);
        }, 5000), // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        bookKey,
        appService,
        kosyncClient
    ]);
    const pullProgress = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(async ()=>{
        if (!progress?.location || !appService || !kosyncClient) return;
        const bookData = getBookData(bookKey);
        const book = bookData?.book;
        const bookDoc = bookData?.bookDoc;
        if (!book || !bookDoc) return;
        const { strategy, enabled } = settings.kosync;
        if (!enabled) return;
        hasPulledOnce.current = true;
        if (strategy === 'send') {
            setSyncState('synced');
            return;
        }
        setSyncState('checking');
        const remoteProgress = await kosyncClient.getProgress(book);
        if (!remoteProgress || !remoteProgress.progress) {
            setSyncState('synced');
            return;
        }
        const localTimestamp = bookData?.config?.updatedAt || book.updatedAt;
        const remoteTimestamp = remoteProgress.timestamp ? remoteProgress.timestamp * 1000 : Date.now();
        const remoteIsNewer = remoteTimestamp > localTimestamp;
        if (strategy === 'receive' || strategy === 'silent' && remoteIsNewer) {
            applyRemoteProgress(book, bookDoc, remoteProgress);
            setSyncState('synced');
        } else if (strategy === 'prompt') {
            promptedSync(book, bookDoc, progress, remoteProgress);
            setSyncState('conflict');
        } else {
            setSyncState('synced');
        }
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        bookKey,
        appService,
        kosyncClient,
        settings.kosync,
        progress
    ]);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const handlePushProgress = (event)=>{
            if (event.detail.bookKey !== bookKey) return;
            pushProgress();
            pushProgress.flush();
        };
        const handleFlush = (event)=>{
            if (event.detail.bookKey !== bookKey) return;
            pushProgress.flush();
        };
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["eventDispatcher"].on('push-kosync', handlePushProgress);
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["eventDispatcher"].on('flush-kosync', handleFlush);
        return ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["eventDispatcher"].off('push-kosync', handlePushProgress);
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["eventDispatcher"].off('flush-kosync', handleFlush);
            pushProgress.flush();
        };
    }, [
        bookKey,
        pushProgress
    ]);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const handlePullProgress = (event)=>{
            if (event.detail.bookKey !== bookKey) return;
            pullProgress();
        };
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["eventDispatcher"].on('pull-kosync', handlePullProgress);
        return ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["eventDispatcher"].off('pull-kosync', handlePullProgress);
        };
    }, [
        bookKey,
        pullProgress
    ]);
    // Pull: pull progress once when the book is opened
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (!appService || !kosyncClient || !progress?.location) return;
        if (hasPulledOnce.current) return;
        pullProgress();
    }, [
        appService,
        kosyncClient,
        progress?.location,
        pushProgress,
        pullProgress
    ]);
    // Push: auto-push progress when progress changes with a debounce
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (syncState === 'synced' && progress) {
            const { strategy, enabled } = settings.kosync;
            if (strategy !== 'receive' && enabled) {
                pushProgress();
            }
        }
    }, [
        progress,
        syncState,
        settings.kosync,
        pushProgress
    ]);
    const resolveWithLocal = ()=>{
        pushProgress();
        pushProgress.flush();
        setSyncState('synced');
        setConflictDetails(null);
    };
    const resolveWithRemote = async ()=>{
        const view = getView(bookKey);
        const remote = conflictDetails?.remote;
        const book = conflictDetails?.book;
        const bookDoc = conflictDetails?.bookDoc;
        if (!book || !bookDoc || !remote || !remote.progress || !view) return;
        applyRemoteProgress(book, bookDoc, remote);
        setSyncState('synced');
        setConflictDetails(null);
    };
    return {
        syncState,
        conflictDetails,
        errorMessage,
        pushProgress,
        pullProgress,
        resolveWithLocal,
        resolveWithRemote
    };
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/readest-app/src/app/reader/hooks/useAutoSaveBookCover.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "useBookCoverAutoSave",
    ()=>useBookCoverAutoSave
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/context/EnvContext.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/hooks/useTranslation.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/bookDataStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/settingsStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$throttle$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/throttle.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$book$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/book.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/event.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$book$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$book$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
'use client';
;
;
;
;
;
;
;
;
const useBookCoverAutoSave = (bookKey)=>{
    const _ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useTranslation"])();
    const { envConfig, appService } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["useEnv"])();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const saveBookCover = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$throttle$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["throttle"])(()=>{
        setTimeout(async ()=>{
            const settings = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"].getState().settings;
            const bookData = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useBookDataStore"].getState().getBookData(bookKey);
            const book = bookData?.book;
            const savedBookHash = settings.savedBookCoverForLockScreen;
            const savedCoverPath = settings.savedBookCoverForLockScreenPath;
            if (appService && book && savedBookHash && savedBookHash !== book?.hash) {
                const coverPath = await appService.resolveFilePath((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$book$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getCoverFilename"])(book), 'Books');
                try {
                    const lastCoverFilename = 'last-book-cover.png';
                    const builtinImagesPath = await appService.resolveFilePath('', 'Images');
                    if (!savedCoverPath || savedCoverPath === builtinImagesPath) {
                        await appService.copyFile(coverPath, lastCoverFilename, 'Images');
                    } else {
                        await appService.copyFile(coverPath, `${savedCoverPath}/${lastCoverFilename}`, 'None');
                    }
                    settings.savedBookCoverForLockScreen = book.hash;
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"].getState().setSettings(settings);
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"].getState().saveSettings(envConfig, settings);
                } catch (error) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["eventDispatcher"].dispatch('toast', {
                        type: 'error',
                        message: _('Failed to auto-save book cover for lock screen: {{error}}', {
                            error: error instanceof Error ? error.message : String(error)
                        })
                    });
                }
            }
        }, 5000);
    }, 5000, {
        emitLast: false
    }), []);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        saveBookCover();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/readest-app/src/app/reader/hooks/useNotesSync.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "useNotesSync",
    ()=>useNotesSync
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/context/AuthContext.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useSync$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/hooks/useSync.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/bookDataStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/constants.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$throttle$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/throttle.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useSync$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useSync$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
'use client';
;
;
;
;
;
;
const useNotesSync = (bookKey)=>{
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const { syncedNotes, syncNotes, lastSyncedAtNotes } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useSync$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useSync"])(bookKey);
    const { getConfig, setConfig, getBookData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useBookDataStore"])();
    const config = getConfig(bookKey);
    const getNewNotes = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(()=>{
        const config = getConfig(bookKey);
        const book = getBookData(bookKey)?.book;
        if (!config?.location || !book || !user) return {};
        const bookNotes = config.booknotes ?? [];
        const newNotes = bookNotes.filter((note)=>lastSyncedAtNotes < note.updatedAt || lastSyncedAtNotes < (note.deletedAt ?? 0));
        newNotes.forEach((note)=>{
            note.bookHash = book.hash;
            note.metaHash = book.metaHash;
        });
        return {
            notes: newNotes,
            lastSyncedAt: lastSyncedAtNotes
        };
    }, [
        user,
        bookKey,
        lastSyncedAtNotes,
        getConfig,
        getBookData
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleAutoSync = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$throttle$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["throttle"])(()=>{
        const book = getBookData(bookKey)?.book;
        const newNotes = getNewNotes();
        syncNotes(newNotes.notes, book?.hash, book?.metaHash, 'both');
    }, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["SYNC_NOTES_INTERVAL_SEC"] * 1000, {
        emitLast: false
    }), [
        syncNotes
    ]);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (!config?.location || !user) return;
        handleAutoSync();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        config?.booknotes,
        handleAutoSync
    ]);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const processNewNote = (note)=>{
            const config = getConfig(bookKey);
            const oldNotes = config?.booknotes ?? [];
            const existingNote = oldNotes.find((oldNote)=>oldNote.id === note.id);
            if (existingNote) {
                if (existingNote.updatedAt < note.updatedAt || (existingNote.deletedAt ?? 0) < (note.deletedAt ?? 0)) {
                    return {
                        ...existingNote,
                        ...note
                    };
                } else {
                    return {
                        ...note,
                        ...existingNote
                    };
                }
            }
            return note;
        };
        if (syncedNotes?.length && config) {
            const book = getBookData(bookKey)?.book;
            const newNotes = syncedNotes.filter((note)=>note.bookHash === book?.hash || note.metaHash === book?.metaHash);
            if (!newNotes.length) return;
            const oldNotes = config.booknotes ?? [];
            const mergedNotes = [
                ...oldNotes.filter((oldNote)=>!newNotes.some((newNote)=>newNote.id === oldNote.id)),
                ...newNotes.map(processNewNote)
            ];
            setConfig(bookKey, {
                booknotes: mergedNotes
            });
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        syncedNotes
    ]);
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/readest-app/src/app/reader/hooks/useInstantAnnotation.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "useInstantAnnotation",
    ()=>useInstantAnnotation
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/context/EnvContext.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/settingsStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/bookDataStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/readerStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/misc.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
'use client';
;
;
;
;
;
;
const useInstantAnnotation = ({ bookKey, getAnnotationText })=>{
    const { envConfig } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["useEnv"])();
    const { settings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"])();
    const { getConfig, saveConfig, updateBooknotes } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useBookDataStore"])();
    const { getView, getViewsById, getViewSettings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useReaderStore"])();
    const startPointRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const startDocRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const startIndexRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(0);
    const previewAnnotationRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const annotationIdRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["uniqueId"])());
    const isInstantAnnotationEnabled = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(()=>{
        const viewSettings = getViewSettings(bookKey);
        return viewSettings?.enableAnnotationQuickActions && viewSettings?.annotationQuickAction === 'highlight';
    }, [
        bookKey,
        getViewSettings
    ]);
    const clearPreviewAnnotation = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(()=>{
        if (previewAnnotationRef.current) {
            const views = getViewsById(bookKey.split('-')[0]);
            views.forEach((v)=>v?.addAnnotation(previewAnnotationRef.current, true));
            previewAnnotationRef.current = null;
        }
    }, [
        bookKey,
        getViewsById
    ]);
    const findPositionAtPoint = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])((doc, x, y)=>{
        if (doc.caretPositionFromPoint) {
            const pos = doc.caretPositionFromPoint(x, y);
            if (pos) return {
                node: pos.offsetNode,
                offset: pos.offset
            };
        }
        if (doc.caretRangeFromPoint) {
            const range = doc.caretRangeFromPoint(x, y);
            if (range) return {
                node: range.startContainer,
                offset: range.startOffset
            };
        }
        return null;
    }, []);
    const isSelectableContent = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])((doc, x, y)=>{
        const pos = findPositionAtPoint(doc, x, y);
        if (!pos) return false;
        // Must be a text node
        if (pos.node.nodeType !== Node.TEXT_NODE) return false;
        const textNode = pos.node;
        const textLength = textNode.length;
        if (textLength === 0) return false;
        // Create a range around the caret position to get the character bounds
        const range = doc.createRange();
        try {
            // Get bounds of character at or after the caret position
            const startOffset = Math.min(pos.offset, textLength - 1);
            const endOffset = Math.min(pos.offset + 1, textLength);
            range.setStart(textNode, startOffset);
            range.setEnd(textNode, endOffset);
            const rects = range.getClientRects();
            for (const rect of rects){
                const tolerance = 20;
                if (x >= rect.left - tolerance && x <= rect.right + tolerance && y >= rect.top - tolerance && y <= rect.bottom + tolerance) {
                    return true;
                }
            }
        } catch  {
            return false;
        }
        return false;
    }, [
        findPositionAtPoint
    ]);
    const createRangeFromPoints = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])((doc, startPoint, endPoint)=>{
        const startPos = findPositionAtPoint(doc, startPoint.x, startPoint.y);
        const endPos = findPositionAtPoint(doc, endPoint.x, endPoint.y);
        if (!startPos || !endPos) return null;
        const newRange = doc.createRange();
        try {
            const positionComparison = startPos.node.compareDocumentPosition(endPos.node);
            const needsSwap = positionComparison & Node.DOCUMENT_POSITION_PRECEDING || startPos.node === endPos.node && startPos.offset > endPos.offset;
            if (needsSwap) {
                newRange.setStart(endPos.node, endPos.offset);
                newRange.setEnd(startPos.node, startPos.offset);
            } else {
                newRange.setStart(startPos.node, startPos.offset);
                newRange.setEnd(endPos.node, endPos.offset);
            }
            if (newRange.collapsed) {
                return null;
            }
            return newRange;
        } catch (e) {
            console.warn('Failed to create range:', e);
            return null;
        }
    }, [
        findPositionAtPoint
    ]);
    const createAnnotation = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])((cfi, text)=>{
        const style = settings.globalReadSettings.highlightStyle;
        const color = settings.globalReadSettings.highlightStyles[style];
        const annotation = {
            id: annotationIdRef.current,
            type: 'annotation',
            cfi,
            style,
            color,
            text: text ?? '',
            note: '',
            createdAt: Date.now(),
            updatedAt: Date.now()
        };
        return annotation;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const handleInstantAnnotationPointerDown = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])((doc, index, ev)=>{
        if (!isInstantAnnotationEnabled()) return false;
        // Only handle primary button (left click / touch / stylus)
        if (ev.button !== 0) return false;
        if (!isSelectableContent(doc, ev.clientX, ev.clientY)) return false;
        startPointRef.current = {
            x: ev.clientX,
            y: ev.clientY
        };
        startDocRef.current = doc;
        startIndexRef.current = index;
        previewAnnotationRef.current = null;
        annotationIdRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["uniqueId"])();
        return true;
    }, [
        isInstantAnnotationEnabled,
        isSelectableContent
    ]);
    const handleInstantAnnotationPointerMove = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])((doc, index, ev)=>{
        if (!isInstantAnnotationEnabled()) return false;
        const view = getView(bookKey);
        if (!startPointRef.current || !startDocRef.current || !view) {
            return false;
        }
        const endPoint = {
            x: ev.clientX,
            y: ev.clientY
        };
        const startPoint = startPointRef.current;
        const deltaX = Math.abs(endPoint.x - startPoint.x);
        const deltaY = Math.abs(endPoint.y - startPoint.y);
        const distance = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
        // need a longer horizontal or vertical drag to avoid accidental selections
        if (distance < 20 || deltaX / deltaY < 5 && deltaY / deltaX < 5 && distance < 30) {
            return false;
        }
        const newRange = createRangeFromPoints(doc, startPoint, endPoint);
        if (!newRange) return false;
        const cfi = view.getCFI(index, newRange);
        if (!cfi) return false;
        clearPreviewAnnotation();
        const annotation = createAnnotation(cfi);
        const views = getViewsById(bookKey.split('-')[0]);
        views.forEach((v)=>v?.addAnnotation(annotation));
        previewAnnotationRef.current = annotation;
        return true;
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        isInstantAnnotationEnabled,
        createRangeFromPoints
    ]);
    const handleInstantAnnotationPointerCancel = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(()=>{
        if (!isInstantAnnotationEnabled()) return false;
        startPointRef.current = null;
        startDocRef.current = null;
        clearPreviewAnnotation();
        return true;
    }, [
        isInstantAnnotationEnabled,
        clearPreviewAnnotation
    ]);
    const handleInstantAnnotationPointerUp = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(async (doc, index, ev)=>{
        if (!isInstantAnnotationEnabled()) return false;
        const view = getView(bookKey);
        if (!startPointRef.current || !view) {
            startPointRef.current = null;
            startDocRef.current = null;
            clearPreviewAnnotation();
            return false;
        }
        const endPoint = {
            x: ev.clientX,
            y: ev.clientY
        };
        const startPoint = startPointRef.current;
        startPointRef.current = null;
        startDocRef.current = null;
        const distance = Math.sqrt(Math.pow(endPoint.x - startPoint.x, 2) + Math.pow(endPoint.y - startPoint.y, 2));
        if (distance < 10) {
            clearPreviewAnnotation();
            return false;
        }
        const newRange = createRangeFromPoints(doc, startPoint, endPoint);
        if (!newRange) {
            clearPreviewAnnotation();
            return false;
        }
        const text = await getAnnotationText(newRange);
        const cfi = view.getCFI(index, newRange);
        if (!text || !cfi || text.trim().length === 0) {
            clearPreviewAnnotation();
            return false;
        }
        clearPreviewAnnotation();
        const annotation = createAnnotation(cfi, text);
        const views = getViewsById(bookKey.split('-')[0]);
        views.forEach((v)=>v?.addAnnotation(annotation));
        const config = getConfig(bookKey);
        const { booknotes: annotations = [] } = config;
        const existingIndex = annotations.findIndex((a)=>a.cfi === cfi && a.type === 'annotation' && a.style && !a.deletedAt);
        if (existingIndex !== -1) {
            annotations[existingIndex] = {
                ...annotations[existingIndex],
                ...annotation,
                id: annotations[existingIndex].id
            };
        } else {
            annotations.push(annotation);
        }
        const updatedConfig = updateBooknotes(bookKey, annotations);
        if (updatedConfig) {
            saveConfig(envConfig, bookKey, updatedConfig, settings);
        }
        return true;
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        isInstantAnnotationEnabled,
        createRangeFromPoints,
        getAnnotationText,
        clearPreviewAnnotation
    ]);
    const cancelInstantAnnotation = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(()=>{
        startPointRef.current = null;
        startDocRef.current = null;
        clearPreviewAnnotation();
    }, [
        clearPreviewAnnotation
    ]);
    return {
        isInstantAnnotationEnabled,
        handleInstantAnnotationPointerDown,
        handleInstantAnnotationPointerMove,
        handleInstantAnnotationPointerCancel,
        handleInstantAnnotationPointerUp,
        cancelInstantAnnotation
    };
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/readest-app/src/app/reader/hooks/useTextSelector.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "useTextSelector",
    ()=>useTextSelector
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/context/EnvContext.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/readerStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/misc.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/event.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$sel$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/sel.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$hooks$2f$useInstantAnnotation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/app/reader/hooks/useInstantAnnotation.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$hooks$2f$useInstantAnnotation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$hooks$2f$useInstantAnnotation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
'use client';
;
;
;
;
;
;
;
const useTextSelector = (bookKey, setSelection, getAnnotationText, handleDismissPopup)=>{
    const { appService } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["useEnv"])();
    const { getView, getViewSettings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useReaderStore"])();
    const view = getView(bookKey);
    const osPlatform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getOSPlatform"])();
    const isPopuped = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(false);
    const isUpToPopup = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(false);
    const isTextSelected = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(false);
    const isTouchStarted = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(false);
    const selectionPosition = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const lastPointerType = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])('mouse');
    const isInstantAnnotating = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(false);
    const isInstantAnnotated = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(false);
    const { isInstantAnnotationEnabled, handleInstantAnnotationPointerDown, handleInstantAnnotationPointerMove, handleInstantAnnotationPointerCancel, handleInstantAnnotationPointerUp } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$hooks$2f$useInstantAnnotation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useInstantAnnotation"])({
        bookKey,
        getAnnotationText,
        setSelection
    });
    const isValidSelection = (sel)=>{
        return sel && sel.toString().trim().length > 0 && sel.rangeCount > 0;
    };
    const makeSelection = async (sel, index, rebuildRange = false)=>{
        isTextSelected.current = true;
        const range = sel.getRangeAt(0);
        if (rebuildRange) {
            sel.removeAllRanges();
            sel.addRange(range);
        }
        setSelection({
            key: bookKey,
            text: await getAnnotationText(range),
            cfi: view?.getCFI(index, range),
            range,
            index
        });
    };
    // FIXME: extremely hacky way to dismiss system selection tools on iOS
    const makeSelectionOnIOS = async (sel, index)=>{
        isTextSelected.current = true;
        const range = sel.getRangeAt(0);
        setTimeout(()=>{
            sel.removeAllRanges();
            setTimeout(async ()=>{
                if (!isTextSelected.current) return;
                sel.addRange(range);
                setSelection({
                    key: bookKey,
                    text: await getAnnotationText(range),
                    cfi: view?.getCFI(index, range),
                    range,
                    index
                });
            }, 30);
        }, 30);
    };
    const startInstantAnnotating = (ev)=>{
        isInstantAnnotating.current = true;
        isInstantAnnotated.current = false;
        if (view) view.renderer.scrollLocked = true;
        ev.target.style.userSelect = 'none';
    };
    const stopInstantAnnotating = (ev)=>{
        isInstantAnnotating.current = false;
        isInstantAnnotated.current = false;
        if (view) view.renderer.scrollLocked = false;
        ev.target.style.userSelect = '';
    };
    const handlePointerDown = (doc, index, ev)=>{
        lastPointerType.current = ev.pointerType;
        if (isInstantAnnotationEnabled()) {
            const handled = handleInstantAnnotationPointerDown(doc, index, ev);
            if (handled) {
                ev.preventDefault();
                startInstantAnnotating(ev);
            }
        }
    };
    const handlePointerMove = (doc, index, ev)=>{
        if (isInstantAnnotating.current) {
            ev.preventDefault();
            isInstantAnnotated.current = handleInstantAnnotationPointerMove(doc, index, ev);
        }
    };
    const handlePointerCancel = (_doc, _index, ev)=>{
        if (isInstantAnnotating.current) {
            stopInstantAnnotating(ev);
            handleInstantAnnotationPointerCancel();
        }
    };
    const handlePointerUp = async (doc, index, ev)=>{
        if (isInstantAnnotating.current && ev) {
            stopInstantAnnotating(ev);
            const handled = await handleInstantAnnotationPointerUp(doc, index, ev);
            if (handled) {
                isTextSelected.current = true;
                return;
            } else {
                // If instant annotation was not created, we let the event propagate
                // as an iframe click event which relies on a mousedown event
                ev.target?.dispatchEvent(new MouseEvent('mousedown', {
                    ...ev,
                    bubbles: true,
                    cancelable: true
                }));
            }
        }
        // Available on iOS and Desktop, fired at touchend or mouseup
        // Note that on Android, we mock pointer events with native touch events
        const sel = doc.getSelection();
        if (isValidSelection(sel)) {
            const isPointerInside = ev && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$sel$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["isPointerInsideSelection"])(sel, ev);
            const isIOS = osPlatform === 'ios' || appService?.isIOSApp;
            if (isPointerInside && isIOS) {
                makeSelectionOnIOS(sel, index);
            } else if (isPointerInside) {
                isUpToPopup.current = true;
                makeSelection(sel, index, true);
            }
        }
    };
    const handleTouchStart = ()=>{
        isTouchStarted.current = true;
    };
    const handleTouchMove = (ev)=>{
        if (isInstantAnnotating.current && isInstantAnnotated.current) {
            ev.preventDefault();
        }
    };
    const handleTouchEnd = ()=>{
        isTouchStarted.current = false;
    };
    const handleSelectionchange = (doc, index)=>{
        // Available on iOS, Android and Desktop, fired when the selection is changed
        if (osPlatform !== 'android' || !appService?.isAndroidApp) return;
        const sel = doc.getSelection();
        if (isValidSelection(sel)) {
            if (!selectionPosition.current) {
                selectionPosition.current = view?.renderer?.start || null;
            }
            makeSelection(sel, index, false);
        } else {
            selectionPosition.current = null;
        }
    };
    const handleScroll = ()=>{
        // Prevent the container from scrolling when text is selected in paginated mode
        // FIXME: this is a workaround for issue #873
        // TODO: support text selection across pages
        if (osPlatform !== 'android' || !appService?.isAndroidApp) return;
        const viewSettings = getViewSettings(bookKey);
        if (viewSettings?.scrolled) return;
        if (isTextSelected.current && view?.renderer?.containerPosition && selectionPosition.current) {
            console.warn('Keep container position', selectionPosition.current);
            view.renderer.containerPosition = selectionPosition.current;
        }
    };
    const handleShowPopup = (showPopup)=>{
        setTimeout(()=>{
            if (showPopup && !isPopuped.current) {
                isUpToPopup.current = false;
            }
            isPopuped.current = showPopup;
        }, 500);
    };
    const handleUpToPopup = ()=>{
        isUpToPopup.current = true;
    };
    const handleContextmenu = (event)=>{
        if (appService?.isMobile) {
            event.preventDefault();
            event.stopPropagation();
            return false;
        } else if (lastPointerType.current === 'touch' || lastPointerType.current === 'pen') {
            event.preventDefault();
            event.stopPropagation();
            return false;
        }
        return;
    };
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const handleSingleClick = ()=>{
            if (isUpToPopup.current) {
                isUpToPopup.current = false;
                return true;
            }
            if (isTextSelected.current) {
                handleDismissPopup();
                isTextSelected.current = false;
                view?.deselect();
                return true;
            }
            if (isPopuped.current) {
                handleDismissPopup();
                return true;
            }
            return false;
        };
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["eventDispatcher"].onSync('iframe-single-click', handleSingleClick);
        return ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["eventDispatcher"].offSync('iframe-single-click', handleSingleClick);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return {
        isTextSelected,
        handleScroll,
        handleTouchStart,
        handleTouchMove,
        handleTouchEnd,
        handlePointerDown,
        handlePointerMove,
        handlePointerCancel,
        handlePointerUp,
        handleSelectionchange,
        handleShowPopup,
        handleUpToPopup,
        handleContextmenu
    };
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/readest-app/src/app/reader/hooks/useAnnotationEditor.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "useAnnotationEditor",
    ()=>useAnnotationEditor
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/context/EnvContext.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/readerStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/settingsStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/bookDataStore.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
'use client';
;
;
;
;
;
const useAnnotationEditor = ({ bookKey, annotation, getAnnotationText, setSelection })=>{
    const { envConfig } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["useEnv"])();
    const { settings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"])();
    const { getConfig, saveConfig, updateBooknotes } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useBookDataStore"])();
    const { getView, getViewsById } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useReaderStore"])();
    const view = getView(bookKey);
    const editingAnnotationRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(annotation);
    const [handlePositions, setHandlePositions] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const getHandlePositionsFromRange = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])((range, isVertical)=>{
        const gridFrame = document.querySelector(`#gridcell-${bookKey}`);
        if (!gridFrame) return null;
        const rects = Array.from(range.getClientRects());
        if (rects.length === 0) return null;
        const firstRect = rects[0];
        const lastRect = rects[rects.length - 1];
        const frameElement = range.commonAncestorContainer.ownerDocument?.defaultView?.frameElement;
        const frameRect = frameElement?.getBoundingClientRect() ?? {
            top: 0,
            left: 0
        };
        return {
            start: {
                x: frameRect.left + (isVertical ? firstRect.right : firstRect.left),
                y: frameRect.top + firstRect.top
            },
            end: {
                x: frameRect.left + (isVertical ? lastRect.left : lastRect.right),
                y: frameRect.top + lastRect.bottom
            }
        };
    }, [
        bookKey
    ]);
    const handleAnnotationRangeChange = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(async (startPoint, endPoint, isVertical, isDragging)=>{
        if (!editingAnnotationRef.current || !view) return;
        const contents = view.renderer.getContents();
        if (!contents || contents.length === 0) return;
        // the point is from viewport, need to adjust to each content's coordinate
        const findPositionAtPoint = (doc, x, y)=>{
            const frameElement = doc.defaultView?.frameElement;
            const frameRect = frameElement?.getBoundingClientRect() ?? {
                top: 0,
                left: 0
            };
            const adjustedX = x - frameRect.left;
            const adjustedY = y - frameRect.top;
            if (doc.caretPositionFromPoint) {
                const pos = doc.caretPositionFromPoint(adjustedX, adjustedY);
                if (pos) return {
                    node: pos.offsetNode,
                    offset: pos.offset
                };
            }
            if (doc.caretRangeFromPoint) {
                const range = doc.caretRangeFromPoint(adjustedX, adjustedY);
                if (range) return {
                    node: range.startContainer,
                    offset: range.startOffset
                };
            }
            return null;
        };
        let startPos = null;
        let endPos = null;
        let targetDoc = null;
        let targetIndex = 0;
        for (const content of contents){
            const { doc, index } = content;
            if (!doc) continue;
            const sp = findPositionAtPoint(doc, startPoint.x, startPoint.y);
            const ep = findPositionAtPoint(doc, endPoint.x, endPoint.y);
            if (sp && ep) {
                startPos = sp;
                endPos = ep;
                targetDoc = doc;
                targetIndex = index ?? 0;
                break;
            }
        }
        if (!startPos || !endPos || !targetDoc) return;
        const newRange = targetDoc.createRange();
        try {
            const positionComparison = startPos.node.compareDocumentPosition(endPos.node);
            const needsSwap = positionComparison & Node.DOCUMENT_POSITION_PRECEDING || startPos.node === endPos.node && startPos.offset > endPos.offset;
            if (needsSwap) {
                newRange.setStart(endPos.node, endPos.offset);
                newRange.setEnd(startPos.node, startPos.offset);
            } else {
                newRange.setStart(startPos.node, startPos.offset);
                newRange.setEnd(endPos.node, endPos.offset);
            }
            if (newRange.collapsed) {
                console.warn('Range is collapsed');
                return;
            }
        } catch (e) {
            console.warn('Failed to create range:', e);
            return;
        }
        const newPositions = getHandlePositionsFromRange(newRange, isVertical);
        if (newPositions) {
            setHandlePositions(newPositions);
        }
        const newCfi = view.getCFI(targetIndex, newRange);
        const newText = await getAnnotationText(newRange);
        if (newCfi && newText) {
            const config = getConfig(bookKey);
            const { booknotes: annotations = [] } = config;
            const existingIndex = annotations.findIndex((a)=>a.id === editingAnnotationRef.current.id && !a.deletedAt);
            if (existingIndex !== -1) {
                const updatedAnnotation = {
                    ...annotations[existingIndex],
                    cfi: newCfi,
                    text: newText,
                    updatedAt: Date.now()
                };
                const views = getViewsById(bookKey.split('-')[0]);
                views.forEach((v)=>v?.addAnnotation(editingAnnotationRef.current, true));
                views.forEach((v)=>v?.addAnnotation(updatedAnnotation));
                editingAnnotationRef.current = updatedAnnotation;
                if (!isDragging) {
                    annotations[existingIndex] = updatedAnnotation;
                    const updatedConfig = updateBooknotes(bookKey, annotations);
                    if (updatedConfig) {
                        saveConfig(envConfig, bookKey, updatedConfig, settings);
                    }
                    setSelection({
                        key: bookKey,
                        annotated: true,
                        text: newText,
                        cfi: newCfi,
                        range: newRange,
                        index: targetIndex
                    });
                }
            }
        }
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        bookKey,
        getHandlePositionsFromRange,
        getAnnotationText,
        setSelection
    ]);
    return {
        handlePositions,
        setHandlePositions,
        getHandlePositionsFromRange,
        handleAnnotationRangeChange
    };
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=apps_readest-app_src_app_reader_hooks_81e207be._.js.map