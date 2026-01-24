module.exports = [
"[project]/apps/readest-app/src/app/reader/components/sidebar/BookMenu.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/clsx [external] (clsx, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.28.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/image.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-icons@5.4.0_react@19.2.0/node_modules/react-icons/md/index.mjs [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.28.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/navigation.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/context/EnvContext.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/context/AuthContext.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/readerStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$libraryStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/libraryStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$sidebarStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/sidebarStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/hooks/useTranslation.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/settingsStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$parallelViewStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/parallelViewStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/environment.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/event.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$types$2f$book$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/types/book.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/constants.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$nav$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/nav.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$helpers$2f$settings$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/helpers/settings.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$KOSyncSettings$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/app/reader/components/KOSyncSettings.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$ProofreadRules$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/app/reader/components/ProofreadRules.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$AboutWindow$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/components/AboutWindow.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$hooks$2f$useBooksManager$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/app/reader/hooks/useBooksManager.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$MenuItem$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/components/MenuItem.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$Menu$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/components/Menu.tsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$libraryStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$sidebarStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$parallelViewStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$nav$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$helpers$2f$settings$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$KOSyncSettings$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$ProofreadRules$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$AboutWindow$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$hooks$2f$useBooksManager$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$MenuItem$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$Menu$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$libraryStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$sidebarStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$parallelViewStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$nav$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$helpers$2f$settings$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$KOSyncSettings$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$ProofreadRules$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$AboutWindow$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$hooks$2f$useBooksManager$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$MenuItem$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$Menu$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
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
const BookMenu = ({ menuClassName, setIsDropdownOpen })=>{
    const _ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useTranslation"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { envConfig, appService } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["useEnv"])();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const { settings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"])();
    const { bookKeys, recreateViewer, getViewSettings, setViewSettings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useReaderStore"])();
    const { getVisibleLibrary } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$libraryStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useLibraryStore"])();
    const { openParallelView } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$hooks$2f$useBooksManager$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])();
    const { sideBarBookKey } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$sidebarStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useSidebarStore"])();
    const { parallelViews, setParallel, unsetParallel } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$parallelViewStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useParallelViewStore"])();
    const viewSettings = getViewSettings(sideBarBookKey);
    const [isSortedTOC, setIsSortedTOC] = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].useState(viewSettings?.sortedTOC || false);
    const handleParallelView = (id)=>{
        openParallelView(id);
        setIsDropdownOpen?.(false);
    };
    const handleReloadPage = ()=>{
        window.location.reload();
        setIsDropdownOpen?.(false);
    };
    const showAboutReadest = ()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$AboutWindow$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["setAboutDialogVisible"])(true);
        setIsDropdownOpen?.(false);
    };
    const downloadReadest = ()=>{
        window.open(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["DOWNLOAD_READEST_URL"], '_blank');
        setIsDropdownOpen?.(false);
    };
    const handleExportAnnotations = ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["eventDispatcher"].dispatch('export-annotations', {
            bookKey: sideBarBookKey
        });
        setIsDropdownOpen?.(false);
    };
    const handleToggleSortTOC = ()=>{
        setIsSortedTOC((prev)=>!prev);
        setIsDropdownOpen?.(false);
        if (sideBarBookKey) {
            const viewSettings = getViewSettings(sideBarBookKey);
            viewSettings.sortedTOC = !isSortedTOC;
            setViewSettings(sideBarBookKey, viewSettings);
            recreateViewer(envConfig, sideBarBookKey);
        }
    };
    const handleSetParallel = ()=>{
        setParallel(bookKeys);
        setIsDropdownOpen?.(false);
    };
    const handleUnsetParallel = ()=>{
        unsetParallel(bookKeys);
        setIsDropdownOpen?.(false);
    };
    const showKoSyncSettingsWindow = ()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$KOSyncSettings$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["setKOSyncSettingsWindowVisible"])(true);
        setIsDropdownOpen?.(false);
    };
    const showProofreadRulesWindow = ()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$ProofreadRules$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["setProofreadRulesVisibility"])(true);
        setIsDropdownOpen?.(false);
    };
    const handlePullKOSync = ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["eventDispatcher"].dispatch('pull-kosync', {
            bookKey: sideBarBookKey
        });
        setIsDropdownOpen?.(false);
    };
    const handlePushKOSync = ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["eventDispatcher"].dispatch('push-kosync', {
            bookKey: sideBarBookKey
        });
        setIsDropdownOpen?.(false);
    };
    const toggleDiscordPresence = ()=>{
        const discordRichPresenceEnabled = !settings.discordRichPresenceEnabled;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$helpers$2f$settings$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["saveSysSettings"])(envConfig, 'discordRichPresenceEnabled', discordRichPresenceEnabled);
        setIsDropdownOpen?.(false);
        if (discordRichPresenceEnabled && !user) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$nav$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["navigateToLogin"])(router);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$Menu$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
        className: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__["default"])('book-menu dropdown-content z-20 shadow-2xl', menuClassName),
        onCancel: ()=>setIsDropdownOpen?.(false),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$MenuItem$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                label: _('Parallel Read'),
                buttonClass: bookKeys.length > 1 ? 'lg:tooltip lg:tooltip-bottom' : '',
                tooltip: parallelViews.length > 0 ? _('Disable') : bookKeys.length > 1 ? _('Enable') : '',
                Icon: parallelViews.length > 0 && bookKeys.length > 1 ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["MdCheck"] : undefined,
                onClick: parallelViews.length > 0 ? handleUnsetParallel : bookKeys.length > 1 ? handleSetParallel : undefined,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                    className: "max-h-60 overflow-y-auto",
                    children: getVisibleLibrary().filter((book)=>!__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$types$2f$book$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["FIXED_LAYOUT_FORMATS"].has(book.format)).filter((book)=>!!book.downloadedAt).slice(0, 20).map((book)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$MenuItem$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                            Icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: book.coverImageUrl,
                                alt: book.title,
                                width: 56,
                                height: 80,
                                className: "aspect-auto max-h-8 max-w-4 rounded-sm shadow-md",
                                onError: (e)=>{
                                    e.target.style.display = 'none';
                                }
                            }, void 0, false, {
                                fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/BookMenu.tsx",
                                lineNumber: 140,
                                columnNumber: 19
                            }, void 0),
                            label: book.title,
                            labelClass: "max-w-36",
                            onClick: ()=>handleParallelView(book.hash)
                        }, book.hash, false, {
                            fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/BookMenu.tsx",
                            lineNumber: 137,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/BookMenu.tsx",
                    lineNumber: 131,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/BookMenu.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            bookKeys.length > 1 && (parallelViews.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$MenuItem$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                label: _('Exit Parallel Read'),
                onClick: handleUnsetParallel
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/BookMenu.tsx",
                lineNumber: 160,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$MenuItem$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                label: _('Enter Parallel Read'),
                onClick: handleSetParallel
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/BookMenu.tsx",
                lineNumber: 162,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0))),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("hr", {
                className: "border-base-200 my-1"
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/BookMenu.tsx",
                lineNumber: 164,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$MenuItem$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                label: _('KOReader Sync'),
                onClick: showKoSyncSettingsWindow
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/BookMenu.tsx",
                lineNumber: 165,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            settings.kosync.enabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$MenuItem$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        label: _('Push Progress'),
                        onClick: handlePushKOSync
                    }, void 0, false, {
                        fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/BookMenu.tsx",
                        lineNumber: 168,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$MenuItem$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        label: _('Pull Progress'),
                        onClick: handlePullKOSync
                    }, void 0, false, {
                        fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/BookMenu.tsx",
                        lineNumber: 169,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true),
            appService?.isDesktopApp && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("hr", {
                        className: "border-base-200 my-1"
                    }, void 0, false, {
                        fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/BookMenu.tsx",
                        lineNumber: 174,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$MenuItem$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        label: _('Show on Discord'),
                        tooltip: _("Display what I'm reading on Discord"),
                        toggled: settings.discordRichPresenceEnabled,
                        onClick: toggleDiscordPresence
                    }, void 0, false, {
                        fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/BookMenu.tsx",
                        lineNumber: 175,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("hr", {
                className: "border-base-200 my-1"
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/BookMenu.tsx",
                lineNumber: 183,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$MenuItem$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                label: _('Proofread'),
                onClick: showProofreadRulesWindow
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/BookMenu.tsx",
                lineNumber: 184,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("hr", {
                className: "border-base-200 my-1"
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/BookMenu.tsx",
                lineNumber: 185,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$MenuItem$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                label: _('Export Annotations'),
                onClick: handleExportAnnotations
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/BookMenu.tsx",
                lineNumber: 186,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$MenuItem$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                label: _('Sort TOC by Page'),
                Icon: isSortedTOC ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["MdCheck"] : undefined,
                onClick: handleToggleSortTOC
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/BookMenu.tsx",
                lineNumber: 187,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$MenuItem$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                label: _('Reload Page'),
                shortcut: "Shift+R",
                onClick: handleReloadPage
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/BookMenu.tsx",
                lineNumber: 192,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("hr", {
                className: "border-base-200 my-1"
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/BookMenu.tsx",
                lineNumber: 193,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["isWebAppPlatform"])() && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$MenuItem$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                label: _('Download Readest'),
                onClick: downloadReadest
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/BookMenu.tsx",
                lineNumber: 194,
                columnNumber: 30
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$MenuItem$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                label: _('About Readest'),
                onClick: showAboutReadest
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/BookMenu.tsx",
                lineNumber: 195,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/BookMenu.tsx",
        lineNumber: 114,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = BookMenu;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/readest-app/src/app/reader/components/sidebar/Header.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/clsx [external] (clsx, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$gi$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-icons@5.4.0_react@19.2.0/node_modules/react-icons/gi/index.mjs [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-icons@5.4.0_react@19.2.0/node_modules/react-icons/fi/index.mjs [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-icons@5.4.0_react@19.2.0/node_modules/react-icons/md/index.mjs [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/hooks/useTranslation.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTrafficLight$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/hooks/useTrafficLight.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useResponsiveSize$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/hooks/useResponsiveSize.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$Dropdown$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/components/Dropdown.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$sidebar$2f$BookMenu$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/app/reader/components/sidebar/BookMenu.tsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTrafficLight$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$Dropdown$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$sidebar$2f$BookMenu$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTrafficLight$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$Dropdown$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$sidebar$2f$BookMenu$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
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
const SidebarHeader = ({ isPinned, isSearchBarVisible, onGoToLibrary, onClose, onTogglePin, onToggleSearchBar })=>{
    const _ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useTranslation"])();
    const { isTrafficLightVisible } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTrafficLight$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useTrafficLight"])();
    const iconSize14 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useResponsiveSize$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useResponsiveSize"])(14);
    const iconSize18 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useResponsiveSize$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useResponsiveSize"])(18);
    const iconSize22 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useResponsiveSize$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useResponsiveSize"])(22);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__["default"])('sidebar-header flex h-11 items-center justify-between pe-2', isTrafficLightVisible ? 'ps-1.5 sm:ps-20' : 'ps-1.5'),
        dir: "ltr",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-x-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        title: _('Close'),
                        onClick: onClose,
                        className: 'btn btn-ghost btn-circle flex h-6 min-h-6 w-6 hover:bg-transparent sm:hidden',
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["MdArrowBackIosNew"], {
                            size: iconSize22
                        }, void 0, false, {
                            fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/Header.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/Header.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        title: _('Go to Library'),
                        className: "btn btn-ghost hidden h-8 min-h-8 w-8 p-0 sm:flex",
                        onClick: onGoToLibrary,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$gi$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["GiBookshelf"], {
                            className: "fill-base-content"
                        }, void 0, false, {
                            fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/Header.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/Header.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/Header.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "flex min-w-24 max-w-32 items-center justify-between sm:size-[70%]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        title: isSearchBarVisible ? _('Hide Search Bar') : _('Show Search Bar'),
                        onClick: onToggleSearchBar,
                        className: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__["default"])('btn btn-ghost left-0 h-8 min-h-8 w-8 p-0', isSearchBarVisible ? 'bg-base-300' : ''),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["FiSearch"], {
                            size: iconSize18,
                            className: "text-base-content"
                        }, void 0, false, {
                            fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/Header.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/Header.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$Dropdown$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        label: _('Book Menu'),
                        className: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__["default"])(window.innerWidth < 640 && 'dropdown-end', 'dropdown-bottom flex justify-center'),
                        menuClassName: window.innerWidth < 640 ? 'no-triangle mt-1' : 'dropdown-center mt-1',
                        buttonClassName: "btn btn-ghost h-8 min-h-8 w-8 p-0",
                        toggleButton: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["MdOutlineMenu"], {
                            className: "fill-base-content"
                        }, void 0, false, {
                            fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/Header.tsx",
                            lineNumber: 70,
                            columnNumber: 25
                        }, void 0),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$sidebar$2f$BookMenu$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/Header.tsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/Header.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "right-0 hidden h-8 w-8 items-center justify-center sm:flex",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                            title: isPinned ? _('Unpin Sidebar') : _('Pin Sidebar'),
                            onClick: onTogglePin,
                            className: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__["default"])('sidebar-pin-btn btn btn-ghost btn-circle hidden h-6 min-h-6 w-6 sm:flex', isPinned ? 'bg-base-300' : 'bg-base-300/65'),
                            children: isPinned ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["MdPushPin"], {
                                size: iconSize14
                            }, void 0, false, {
                                fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/Header.tsx",
                                lineNumber: 83,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["MdOutlinePushPin"], {
                                size: iconSize14
                            }, void 0, false, {
                                fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/Header.tsx",
                                lineNumber: 83,
                                columnNumber: 59
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/Header.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/Header.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/Header.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/Header.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = SidebarHeader;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/readest-app/src/app/reader/components/sidebar/TOCItem.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "StaticListRow",
    ()=>StaticListRow,
    "VirtualListRow",
    ()=>VirtualListRow
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/clsx [external] (clsx, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/misc.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
'use client';
;
;
;
;
const createExpanderIcon = (isExpanded)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 8 10",
        width: "8",
        height: "10",
        className: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__["default"])('text-base-content transform transition-transform', isExpanded ? 'rotate-90' : 'rotate-0'),
        style: {
            transformOrigin: 'center'
        },
        fill: "currentColor",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("polygon", {
            points: "0 0, 8 5, 0 10"
        }, void 0, false, {
            fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/TOCItem.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/TOCItem.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const TOCItemView = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].memo(({ flatItem, itemSize, isActive, onToggleExpand, onItemClick })=>{
    const { item, depth } = flatItem;
    const handleToggleExpand = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])((event)=>{
        event.preventDefault();
        event.stopPropagation();
        onToggleExpand(item);
    }, [
        item,
        onToggleExpand
    ]);
    const handleClickItem = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])((event)=>{
        event.preventDefault();
        onItemClick(item);
    }, [
        item,
        onItemClick
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        tabIndex: 0,
        role: "treeitem",
        onClick: item.href ? handleClickItem : undefined,
        onKeyDown: item.href ? (e)=>e.key === 'Enter' && handleClickItem(e) : undefined,
        "aria-expanded": flatItem.isExpanded ? 'true' : 'false',
        "aria-selected": isActive ? 'true' : 'false',
        "data-href": item.href ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getContentMd5"])(item.href) : undefined,
        className: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__["default"])('flex w-full cursor-pointer items-center rounded-md py-4 sm:py-2', isActive ? 'text-bold-in-eink sm:bg-base-300/65 sm:hover:bg-base-300/75 sm:text-base-content text-blue-500' : 'sm:hover:bg-base-300/75'),
        style: {
            height: itemSize ? `${itemSize}px` : 'auto',
            paddingInlineStart: `${(depth + 1) * 12}px`
        },
        children: [
            item.subitems && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                onClick: handleToggleExpand,
                onKeyDown: (e)=>{
                    e.stopPropagation();
                },
                className: "inline-block cursor-pointer",
                style: {
                    padding: '12px',
                    margin: '-12px'
                },
                children: createExpanderIcon(flatItem.isExpanded || false)
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/TOCItem.tsx",
                lineNumber: 82,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "ms-2 truncate text-ellipsis",
                style: {
                    maxWidth: 'calc(100% - 24px)',
                    whiteSpace: 'nowrap',
                    textOverflow: 'ellipsis'
                },
                children: item.label
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/TOCItem.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            item.location && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "text-base-content/50 ms-auto ps-1 text-xs sm:pe-1",
                children: item.location.current + 1
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/TOCItem.tsx",
                lineNumber: 107,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/TOCItem.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
TOCItemView.displayName = 'TOCItemView';
const StaticListRow = ({ bookKey, flatItem, itemSize, activeHref, onToggleExpand, onItemClick })=>{
    const isActive = activeHref === flatItem.item.href;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__["default"])('border-base-300 w-full border-b sm:border-none', 'pe-4 ps-2 pt-[1px] sm:pe-2'),
        title: flatItem.item.label || '',
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(TOCItemView, {
            bookKey: bookKey,
            flatItem: flatItem,
            itemSize: itemSize,
            isActive: isActive,
            onToggleExpand: onToggleExpand,
            onItemClick: onItemClick
        }, void 0, false, {
            fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/TOCItem.tsx",
            lineNumber: 144,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/TOCItem.tsx",
        lineNumber: 137,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const VirtualListRow = ({ index, style, data })=>{
    const { flatItems, bookKey, activeHref, itemSize, onToggleExpand, onItemClick } = data;
    const flatItem = flatItems[index];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        style: style,
        title: flatItem.item.label || '',
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(StaticListRow, {
            bookKey: bookKey,
            flatItem: flatItem,
            itemSize: itemSize - 1,
            activeHref: activeHref,
            onToggleExpand: onToggleExpand,
            onItemClick: onItemClick
        }, void 0, false, {
            fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/TOCItem.tsx",
            lineNumber: 173,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/TOCItem.tsx",
        lineNumber: 172,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/readest-app/src/app/reader/components/sidebar/TOCView.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$window__$5b$external$5d$__$28$react$2d$window$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react-window [external] (react-window, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$overlayscrollbars$2d$react__$5b$external$5d$__$28$overlayscrollbars$2d$react$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/overlayscrollbars-react [external] (overlayscrollbars-react, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/context/EnvContext.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/readerStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$sidebarStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/sidebarStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$toc$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/toc.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/event.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/misc.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$hooks$2f$useTextTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/app/reader/hooks/useTextTranslation.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$sidebar$2f$TOCItem$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/app/reader/components/sidebar/TOCItem.tsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$overlayscrollbars$2d$react__$5b$external$5d$__$28$overlayscrollbars$2d$react$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$sidebarStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$hooks$2f$useTextTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$sidebar$2f$TOCItem$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$overlayscrollbars$2d$react__$5b$external$5d$__$28$overlayscrollbars$2d$react$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$sidebarStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$hooks$2f$useTextTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$sidebar$2f$TOCItem$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
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
const getItemIdentifier = (item)=>{
    const href = item.href || '';
    return `toc-item-${item.id}-${href}`;
};
const useFlattenedTOC = (toc, expandedItems)=>{
    return (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>{
        const flattenTOC = (items, depth = 0)=>{
            const result = [];
            items.forEach((item, index)=>{
                const isExpanded = expandedItems.has(getItemIdentifier(item));
                result.push({
                    item,
                    depth,
                    index,
                    isExpanded
                });
                if (item.subitems && isExpanded) {
                    result.push(...flattenTOC(item.subitems, depth + 1));
                }
            });
            return result;
        };
        return flattenTOC(toc);
    }, [
        toc,
        expandedItems
    ]);
};
const TOCView = ({ bookKey, toc, sections })=>{
    const { appService } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["useEnv"])();
    const { getView, getProgress, getViewSettings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useReaderStore"])();
    const { sideBarBookKey, isSideBarVisible } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$sidebarStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useSidebarStore"])();
    const viewSettings = getViewSettings(bookKey);
    const progress = getProgress(bookKey);
    const [expandedItems, setExpandedItems] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(new Set());
    const [containerHeight, setContainerHeight] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(400);
    const hasInteractedWithTOCRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(false);
    const lastInteractionTimeRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(0);
    const interactionCooldownMs = 10000;
    const containerRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const listOuterRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const vitualListRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const staticListRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const [initialize] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$overlayscrollbars$2d$react__$5b$external$5d$__$28$overlayscrollbars$2d$react$2c$__esm_import$29$__["useOverlayScrollbars"])({
        defer: true,
        options: {
            scrollbars: {
                autoHide: 'scroll'
            },
            showNativeOverlaidScrollbars: false
        },
        events: {
            initialized (osInstance) {
                const { viewport } = osInstance.elements();
                viewport.style.overflowX = `var(--os-viewport-overflow-x)`;
                viewport.style.overflowY = `var(--os-viewport-overflow-y)`;
            }
        }
    });
    const isInCooldown = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(()=>{
        if (!hasInteractedWithTOCRef.current) return false;
        const now = Date.now();
        const timeSinceInteraction = now - lastInteractionTimeRef.current;
        if (timeSinceInteraction >= interactionCooldownMs) {
            hasInteractedWithTOCRef.current = false;
            return false;
        }
        return true;
    }, []);
    const handleInteraction = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(()=>{
        setTimeout(()=>{
            hasInteractedWithTOCRef.current = true;
            lastInteractionTimeRef.current = Date.now();
        }, 500);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const { current: root } = containerRef;
        const { current: virtualOuter } = listOuterRef;
        if (root && virtualOuter) {
            initialize({
                target: root,
                elements: {
                    viewport: virtualOuter
                }
            });
            virtualOuter.addEventListener('scroll', handleInteraction);
            return ()=>{
                virtualOuter.removeEventListener('scroll', handleInteraction);
            };
        }
        return;
    }, [
        initialize,
        handleInteraction
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$hooks$2f$useTextTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useTextTranslation"])(bookKey, containerRef.current || staticListRef.current, false, 'translation-target-toc');
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const updateHeight = ()=>{
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                const parentContainer = containerRef.current.closest('.scroll-container');
                if (parentContainer) {
                    const parentRect = parentContainer.getBoundingClientRect();
                    const availableHeight = parentRect.height - (rect.top - parentRect.top);
                    setContainerHeight(Math.max(400, availableHeight));
                }
            }
        };
        updateHeight();
        window.addEventListener('resize', updateHeight);
        let resizeObserver = null;
        if (containerRef.current) {
            const parentContainer = containerRef.current.closest('.scroll-container');
            if (parentContainer) {
                resizeObserver = new ResizeObserver(updateHeight);
                resizeObserver.observe(parentContainer);
            }
        }
        const staticList = staticListRef.current;
        let scrollContainer = null;
        if (staticList) {
            scrollContainer = staticList.parentElement;
            if (scrollContainer) {
                scrollContainer.addEventListener('scroll', handleInteraction);
            }
        }
        return ()=>{
            window.removeEventListener('resize', updateHeight);
            if (resizeObserver) {
                resizeObserver.disconnect();
            }
            if (scrollContainer) {
                scrollContainer.removeEventListener('scroll', handleInteraction);
            }
        };
    }, [
        expandedItems,
        handleInteraction
    ]);
    const activeHref = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>progress?.sectionHref || null, [
        progress?.sectionHref
    ]);
    const flatItems = useFlattenedTOC(toc, expandedItems);
    const activeItemIndex = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>{
        return flatItems.findIndex((item)=>item.item.href === activeHref);
    }, [
        flatItems,
        activeHref
    ]);
    const handleToggleExpand = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])((item)=>{
        const itemId = getItemIdentifier(item);
        handleInteraction();
        setExpandedItems((prev)=>{
            const newSet = new Set(prev);
            if (newSet.has(itemId)) {
                newSet.delete(itemId);
            } else {
                newSet.add(itemId);
            }
            return newSet;
        });
    }, [
        handleInteraction
    ]);
    const handleItemClick = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])((item)=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["eventDispatcher"].dispatch('navigate', {
            bookKey,
            href: item.href
        });
        if (item.href) {
            getView(bookKey)?.goTo(item.href);
        }
    }, [
        bookKey,
        getView
    ]);
    const expandParents = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])((toc, href)=>{
        const parentItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$toc$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["findParentPath"])(toc, href).map((item)=>getItemIdentifier(item)).filter(Boolean);
        setExpandedItems(new Set(parentItems));
    }, []);
    const scrollToActiveItem = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(()=>{
        if (!activeHref) return;
        if (vitualListRef.current) {
            const activeIndex = flatItems.findIndex((flatItem)=>flatItem.item.href === activeHref);
            if (activeIndex !== -1) {
                vitualListRef.current.scrollToItem(activeIndex, 'center');
            }
        }
        if (staticListRef.current) {
            const hrefMd5 = activeHref ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getContentMd5"])(activeHref) : '';
            const activeItem = staticListRef.current?.querySelector(`[data-href="${hrefMd5}"]`);
            if (activeItem) {
                const container = staticListRef.current.parentElement;
                const containerRect = container.getBoundingClientRect();
                const itemRect = activeItem.getBoundingClientRect();
                const isVisible = itemRect.top >= containerRect.top && itemRect.bottom <= containerRect.bottom;
                if (!isVisible) {
                    activeItem.scrollIntoView({
                        behavior: 'instant',
                        block: 'center'
                    });
                }
                activeItem.setAttribute('aria-current', 'page');
            }
        }
    }, [
        flatItems,
        activeHref
    ]);
    const virtualItemSize = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>{
        return window.innerWidth >= 640 && !viewSettings?.translationEnabled ? 37 : 57;
    }, [
        viewSettings?.translationEnabled
    ]);
    const virtualListData = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>({
            flatItems,
            itemSize: virtualItemSize,
            bookKey,
            activeHref,
            onToggleExpand: handleToggleExpand,
            onItemClick: handleItemClick
        }), [
        flatItems,
        virtualItemSize,
        bookKey,
        activeHref,
        handleToggleExpand,
        handleItemClick
    ]);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (!progress) return;
        if (!isSideBarVisible) return;
        if (sideBarBookKey !== bookKey) return;
        if (isInCooldown()) return;
        const { sectionHref: currentHref } = progress;
        if (currentHref) {
            expandParents(toc, currentHref);
        }
    }, [
        toc,
        progress,
        sideBarBookKey,
        isSideBarVisible,
        bookKey,
        expandParents,
        isInCooldown
    ]);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (isInCooldown()) return;
        if (flatItems.length > 0) {
            setTimeout(scrollToActiveItem, appService?.isAndroidApp ? 300 : 100);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        progress,
        scrollToActiveItem,
        isInCooldown
    ]);
    return sections && sections.length > 256 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "virtual-list mt-2 rounded",
        "data-overlayscrollbars-initialize": "",
        ref: containerRef,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$window__$5b$external$5d$__$28$react$2d$window$2c$__cjs$29$__["FixedSizeList"], {
            ref: vitualListRef,
            outerRef: listOuterRef,
            width: "100%",
            height: containerHeight,
            itemCount: flatItems.length,
            itemSize: virtualItemSize,
            itemData: virtualListData,
            overscanCount: 20,
            initialScrollOffset: appService?.isAndroidApp && activeItemIndex >= 0 ? Math.max(0, activeItemIndex * virtualItemSize - containerHeight / 2) : undefined,
            children: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$sidebar$2f$TOCItem$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["VirtualListRow"]
        }, void 0, false, {
            fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/TOCView.tsx",
            lineNumber: 279,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/TOCView.tsx",
        lineNumber: 274,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "static-list mt-2 rounded",
        ref: staticListRef,
        children: flatItems.map((flatItem, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$sidebar$2f$TOCItem$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["StaticListRow"], {
                bookKey: bookKey,
                flatItem: flatItem,
                activeHref: activeHref,
                onToggleExpand: handleToggleExpand,
                onItemClick: handleItemClick
            }, `static-row-${index}`, false, {
                fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/TOCView.tsx",
                lineNumber: 300,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/TOCView.tsx",
        lineNumber: 298,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = TOCView;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/readest-app/src/app/reader/components/sidebar/BooknoteItem.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/clsx [external] (clsx, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$dayjs__$5b$external$5d$__$28$dayjs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/dayjs [external] (dayjs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$marked__$5b$external$5d$__$28$marked$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/marked [external] (marked, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/context/EnvContext.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/settingsStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/readerStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$notebookStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/notebookStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/bookDataStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/hooks/useTranslation.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useResponsiveSize$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/hooks/useResponsiveSize.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/event.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$types$2f$view$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/types/view.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$hooks$2f$useScrollToItem$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/app/reader/hooks/useScrollToItem.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$TextButton$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/components/TextButton.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$TextEditor$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/components/TextEditor.tsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$marked__$5b$external$5d$__$28$marked$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$notebookStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$TextButton$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$TextEditor$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$marked__$5b$external$5d$__$28$marked$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$notebookStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$TextButton$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$TextEditor$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
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
const BooknoteItem = ({ bookKey, item, onClick })=>{
    const _ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useTranslation"])();
    const { envConfig } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["useEnv"])();
    const { settings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"])();
    const { getConfig, saveConfig, updateBooknotes } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useBookDataStore"])();
    const { getProgress, getView, getViewsById } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useReaderStore"])();
    const { setNotebookEditAnnotation, setNotebookVisible } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$notebookStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useNotebookStore"])();
    const { text, cfi, note } = item;
    const editorRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const [editorDraft, setEditorDraft] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(text || '');
    const [inlineEditMode, setInlineEditMode] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const separatorWidth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useResponsiveSize$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useResponsiveSize"])(3);
    const progress = getProgress(bookKey);
    const { isCurrent, viewRef } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$hooks$2f$useScrollToItem$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(cfi, progress);
    const handleClickItem = (event)=>{
        event.preventDefault();
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["eventDispatcher"].dispatch('navigate', {
            bookKey,
            cfi
        });
        onClick?.();
        getView(bookKey)?.goTo(cfi);
        if (note) {
            setNotebookVisible(true);
        }
    };
    const deleteNote = (note)=>{
        if (!bookKey) return;
        const config = getConfig(bookKey);
        if (!config) return;
        const { booknotes = [] } = config;
        booknotes.forEach((item)=>{
            if (item.id === note.id) {
                item.deletedAt = Date.now();
                const views = getViewsById(bookKey.split('-')[0]);
                views.forEach((view)=>view?.addAnnotation({
                        ...item,
                        value: `${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$types$2f$view$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["NOTE_PREFIX"]}${item.cfi}`
                    }, true));
            }
        });
        const updatedConfig = updateBooknotes(bookKey, booknotes);
        if (updatedConfig) {
            saveConfig(envConfig, bookKey, updatedConfig, settings);
        }
    };
    const editNote = (note)=>{
        setNotebookVisible(true);
        setNotebookEditAnnotation(note);
    };
    const editBookmark = ()=>{
        setEditorDraft(text || '');
        setInlineEditMode(true);
    };
    const handleSaveBookmark = ()=>{
        setInlineEditMode(false);
        const config = getConfig(bookKey);
        if (!config || !editorDraft) return;
        const { booknotes: annotations = [] } = config;
        const existingIndex = annotations.findIndex((annotation)=>item.id === annotation.id);
        if (existingIndex === -1) return;
        annotations[existingIndex].updatedAt = Date.now();
        annotations[existingIndex].text = editorDraft;
        const updatedConfig = updateBooknotes(bookKey, annotations);
        if (updatedConfig) {
            saveConfig(envConfig, bookKey, updatedConfig, settings);
        }
    };
    if (inlineEditMode) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__["default"])('border-base-300 content group relative my-2 cursor-pointer rounded-lg p-2', isCurrent ? 'bg-base-300/85 hover:bg-base-300' : 'hover:bg-base-300/55 bg-base-100', 'transition-all duration-300 ease-in-out'),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "flex w-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$TextEditor$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        className: "!leading-normal",
                        ref: editorRef,
                        value: editorDraft,
                        onChange: setEditorDraft,
                        onSave: handleSaveBookmark,
                        onEscape: ()=>setInlineEditMode(false),
                        spellCheck: false
                    }, void 0, false, {
                        fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/BooknoteItem.tsx",
                        lineNumber: 112,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/BooknoteItem.tsx",
                    lineNumber: 111,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "flex justify-end space-x-3 p-2",
                    dir: "ltr",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$TextButton$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                            onClick: ()=>setInlineEditMode(false),
                            children: _('Cancel')
                        }, void 0, false, {
                            fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/BooknoteItem.tsx",
                            lineNumber: 123,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$TextButton$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                            onClick: handleSaveBookmark,
                            disabled: !editorDraft,
                            children: _('Save')
                        }, void 0, false, {
                            fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/BooknoteItem.tsx",
                            lineNumber: 124,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/BooknoteItem.tsx",
                    lineNumber: 122,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/BooknoteItem.tsx",
            lineNumber: 104,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
        // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
        role: "button",
        ref: viewRef,
        className: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__["default"])('booknote-item border-base-300 content group relative my-2 cursor-pointer rounded-lg p-2', isCurrent ? 'bg-base-300/85 hover:bg-base-300 focus:bg-base-300' : 'hover:bg-base-300/55 focus:bg-base-300/55 bg-base-100', 'transition-all duration-300 ease-in-out'),
        tabIndex: 0,
        onClick: handleClickItem,
        onKeyDown: (e)=>{
            if (e.key === 'Enter' || e.key === ' ') {
                handleClickItem(e);
            } else {
                e.stopPropagation();
            }
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__["default"])('min-h-4 p-0 transition-all duration-300 ease-in-out'),
                style: {
                    '--top-override': '0.7rem',
                    '--end-override': '0.3rem'
                },
                children: [
                    item.note && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "content prose prose-sm font-size-sm",
                        dir: "auto",
                        dangerouslySetInnerHTML: {
                            __html: __TURBOPACK__imported__module__$5b$externals$5d2f$marked__$5b$external$5d$__$28$marked$2c$__esm_import$29$__["marked"].parse(item.note)
                        }
                    }, void 0, false, {
                        fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/BooknoteItem.tsx",
                        lineNumber: 164,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "flex items-start",
                        children: [
                            item.note && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "me-2 mt-2.5 min-h-full self-stretch rounded-xl bg-gray-300",
                                style: {
                                    minWidth: `${separatorWidth}px`
                                }
                            }, void 0, false, {
                                fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/BooknoteItem.tsx",
                                lineNumber: 172,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__["default"])('content font-size-sm line-clamp-3', item.note && 'mt-2'),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                    className: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__["default"])('booknote-text inline leading-normal', item.note && 'content font-size-xs text-gray-500', (item.style === 'underline' || item.style === 'squiggly') && 'underline decoration-2', item.style === 'highlight' && `bg-${item.color}-500 bg-opacity-40`, item.style === 'underline' && `decoration-${item.color}-400`, item.style === 'squiggly' && `decoration-wavy decoration-${item.color}-400`),
                                    children: text || ''
                                }, void 0, false, {
                                    fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/BooknoteItem.tsx",
                                    lineNumber: 180,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/BooknoteItem.tsx",
                                lineNumber: 179,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/BooknoteItem.tsx",
                        lineNumber: 170,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/BooknoteItem.tsx",
                lineNumber: 154,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__["default"])('max-h-0 overflow-hidden p-0', 'transition-[max-height] duration-300 ease-in-out', 'group-hover:max-h-8 group-hover:overflow-visible', 'group-focus-within:max-h-8 group-focus-within:overflow-visible'),
                style: {
                    '--bottom-override': 0
                },
                // This is needed to prevent the parent onClick from being triggered
                onClick: (e)=>e.stopPropagation(),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "flex cursor-default items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "flex items-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                className: "text-sm text-gray-500 sm:text-xs",
                                children: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$dayjs__$5b$external$5d$__$28$dayjs$2c$__cjs$29$__["default"])(item.createdAt).fromNow()
                            }, void 0, false, {
                                fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/BooknoteItem.tsx",
                                lineNumber: 214,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/BooknoteItem.tsx",
                            lineNumber: 213,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-end space-x-3 p-2",
                            dir: "ltr",
                            children: [
                                (item.note || item.type === 'bookmark') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$TextButton$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    onClick: item.type === 'bookmark' ? editBookmark : editNote.bind(null, item),
                                    variant: "primary",
                                    className: "opacity-0 transition duration-300 ease-in-out group-focus-within:opacity-100 group-hover:opacity-100",
                                    children: _('Edit')
                                }, void 0, false, {
                                    fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/BooknoteItem.tsx",
                                    lineNumber: 220,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$TextButton$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    onClick: deleteNote.bind(null, item),
                                    variant: "danger",
                                    className: "opacity-0 transition duration-300 ease-in-out group-focus-within:opacity-100 group-hover:opacity-100",
                                    children: _('Delete')
                                }, void 0, false, {
                                    fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/BooknoteItem.tsx",
                                    lineNumber: 229,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/BooknoteItem.tsx",
                            lineNumber: 218,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/BooknoteItem.tsx",
                    lineNumber: 212,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/BooknoteItem.tsx",
                lineNumber: 197,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/BooknoteItem.tsx",
        lineNumber: 133,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = BooknoteItem;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/readest-app/src/app/reader/components/sidebar/BooknoteView.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$foliate$2d$js$2f$epubcfi$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/foliate-js/epubcfi.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/bookDataStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$sidebarStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/sidebarStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$toc$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/toc.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$sidebar$2f$BooknoteItem$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/app/reader/components/sidebar/BooknoteItem.tsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$sidebarStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$sidebar$2f$BooknoteItem$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$sidebarStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$sidebar$2f$BooknoteItem$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
const BooknoteView = ({ type, bookKey, toc })=>{
    const { getConfig } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useBookDataStore"])();
    const { setActiveBooknoteType, setBooknoteResults } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$sidebarStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useSidebarStore"])();
    const config = getConfig(bookKey);
    const { booknotes: allNotes = [] } = config;
    const booknotes = allNotes.filter((note)=>note.type === type && !note.deletedAt);
    const booknoteGroups = {};
    for (const booknote of booknotes){
        const tocItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$toc$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["findTocItemBS"])(toc ?? [], booknote.cfi);
        const href = tocItem?.href || '';
        const label = tocItem?.label || '';
        const id = tocItem?.id || 0;
        if (!booknoteGroups[href]) {
            booknoteGroups[href] = {
                id,
                href,
                label,
                booknotes: []
            };
        }
        booknoteGroups[href].booknotes.push(booknote);
    }
    Object.values(booknoteGroups).forEach((group)=>{
        group.booknotes.sort((a, b)=>{
            return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$foliate$2d$js$2f$epubcfi$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["compare"](a.cfi, b.cfi);
        });
    });
    const sortedGroups = Object.values(booknoteGroups).sort((a, b)=>{
        return a.id - b.id;
    });
    const handleBrowseBookNotes = ()=>{
        if (booknotes.length === 0) return;
        const sorted = [
            ...booknotes
        ].sort((a, b)=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$foliate$2d$js$2f$epubcfi$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["compare"](a.cfi, b.cfi));
        setActiveBooknoteType(bookKey, type);
        setBooknoteResults(bookKey, sorted);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "rounded pt-2",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
            role: "tree",
            className: "px-2",
            children: sortedGroups.map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                    className: "p-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                            className: "content font-size-base line-clamp-1 font-normal",
                            children: group.label
                        }, void 0, false, {
                            fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/BooknoteView.tsx",
                            lineNumber: 57,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                            children: group.booknotes.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$sidebar$2f$BooknoteItem$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    bookKey: bookKey,
                                    item: item,
                                    onClick: handleBrowseBookNotes
                                }, `${index}-${item.cfi}`, false, {
                                    fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/BooknoteView.tsx",
                                    lineNumber: 60,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/BooknoteView.tsx",
                            lineNumber: 58,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, group.href, true, {
                    fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/BooknoteView.tsx",
                    lineNumber: 56,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)))
        }, void 0, false, {
            fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/BooknoteView.tsx",
            lineNumber: 54,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/BooknoteView.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = BooknoteView;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/readest-app/src/app/reader/components/sidebar/TabNavigation.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/clsx [external] (clsx, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-icons@5.4.0_react@19.2.0/node_modules/react-icons/md/index.mjs [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-icons@5.4.0_react@19.2.0/node_modules/react-icons/io/index.mjs [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-icons@5.4.0_react@19.2.0/node_modules/react-icons/pi/index.mjs [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/context/EnvContext.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/hooks/useTranslation.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
const TabNavigation = ({ activeTab, onTabChange })=>{
    const _ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useTranslation"])();
    const { appService } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["useEnv"])();
    const tabs = [
        'toc',
        'annotations',
        'bookmarks'
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__["default"])('bottom-tab border-base-300/50 bg-base-200/20 relative flex w-full border-t', appService?.hasRoundedWindow && 'rounded-window-bottom-left'),
        dir: "ltr",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__["default"])('bg-base-300/85 absolute bottom-1.5 start-1 z-10 h-[calc(100%-12px)] w-[calc(33.3%-8px)] rounded-lg', 'transform transition-transform duration-300', activeTab === 'toc' && 'translate-x-0', activeTab === 'annotations' && 'translate-x-[calc(100%+8px)]', activeTab === 'bookmarks' && 'translate-x-[calc(200%+16px)]')
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/TabNavigation.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            tabs.map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    tabIndex: 0,
                    role: "button",
                    className: "z-[11] m-1.5 flex-1 cursor-pointer rounded-md p-2",
                    onClick: ()=>onTabChange(tab),
                    onKeyDown: (e)=>{
                        if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            onTabChange(tab);
                        }
                    },
                    title: tab === 'toc' ? _('TOC') : tab === 'annotations' ? _('Annotate') : _('Bookmark'),
                    "aria-label": tab === 'toc' ? _('TOC') : tab === 'annotations' ? _('Annotate') : _('Bookmark'),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__["default"])('m-0 flex h-6 items-center p-0'),
                        children: tab === 'toc' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["IoIosList"], {
                            className: "mx-auto"
                        }, void 0, false, {
                            fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/TabNavigation.tsx",
                            lineNumber: 56,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)) : tab === 'annotations' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["PiNotePencil"], {
                            className: "mx-auto"
                        }, void 0, false, {
                            fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/TabNavigation.tsx",
                            lineNumber: 58,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["MdBookmarkBorder"], {
                            className: "mx-auto"
                        }, void 0, false, {
                            fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/TabNavigation.tsx",
                            lineNumber: 60,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/TabNavigation.tsx",
                        lineNumber: 54,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, tab, false, {
                    fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/TabNavigation.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/TabNavigation.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = TabNavigation;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/readest-app/src/app/reader/components/sidebar/Content.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/clsx [external] (clsx, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$themeStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/themeStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/readerStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$sidebarStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/sidebarStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/bookDataStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$overlayscrollbars$2d$react__$5b$external$5d$__$28$overlayscrollbars$2d$react$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/overlayscrollbars-react [external] (overlayscrollbars-react, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$sidebar$2f$TOCView$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/app/reader/components/sidebar/TOCView.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$sidebar$2f$BooknoteView$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/app/reader/components/sidebar/BooknoteView.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$sidebar$2f$TabNavigation$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/app/reader/components/sidebar/TabNavigation.tsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$themeStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$sidebarStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$overlayscrollbars$2d$react__$5b$external$5d$__$28$overlayscrollbars$2d$react$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$sidebar$2f$TOCView$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$sidebar$2f$BooknoteView$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$sidebar$2f$TabNavigation$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$themeStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$sidebarStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$overlayscrollbars$2d$react__$5b$external$5d$__$28$overlayscrollbars$2d$react$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$sidebar$2f$TOCView$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$sidebar$2f$BooknoteView$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$sidebar$2f$TabNavigation$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
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
const SidebarContent = ({ bookDoc, sideBarBookKey })=>{
    const { safeAreaInsets } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$themeStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useThemeStore"])();
    const { setHoveredBookKey } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useReaderStore"])();
    const { setSideBarVisible } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$sidebarStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useSidebarStore"])();
    const { getConfig, setConfig } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useBookDataStore"])();
    const config = getConfig(sideBarBookKey);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(config?.viewSettings?.sideBarTab || 'toc');
    const [fade, setFade] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [targetTab, setTargetTab] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(activeTab);
    const isMobile = window.innerWidth < 640 || window.innerHeight < 640;
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (!sideBarBookKey) return;
        const config = getConfig(sideBarBookKey);
        setActiveTab(config.viewSettings.sideBarTab);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        sideBarBookKey
    ]);
    const handleTabChange = (tab)=>{
        setFade(true);
        const timeout = setTimeout(()=>{
            if (activeTab === tab && isMobile) {
                setHoveredBookKey(sideBarBookKey);
                setSideBarVisible(false);
                return;
            }
            setTargetTab(tab);
            setFade(false);
            setConfig(sideBarBookKey, config);
            clearTimeout(timeout);
        }, 300);
        setActiveTab(tab);
        const config = getConfig(sideBarBookKey);
        config.viewSettings.sideBarTab = tab;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__["default"])('sidebar-content flex h-full min-h-0 flex-grow flex-col shadow-inner', 'font-sans text-base font-normal sm:text-sm'),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$overlayscrollbars$2d$react__$5b$external$5d$__$28$overlayscrollbars$2d$react$2c$__esm_import$29$__["OverlayScrollbarsComponent"], {
                    className: "min-h-0 flex-1",
                    options: {
                        scrollbars: {
                            autoHide: 'scroll',
                            clickScroll: true
                        },
                        showNativeOverlaidScrollbars: false
                    },
                    defer: true,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__["default"])('scroll-container h-full transition-opacity duration-300 ease-in-out', {
                            'opacity-0': fade,
                            'opacity-100': !fade
                        }),
                        children: [
                            targetTab === 'toc' && bookDoc.toc && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$sidebar$2f$TOCView$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                toc: bookDoc.toc,
                                sections: bookDoc.sections,
                                bookKey: sideBarBookKey
                            }, void 0, false, {
                                fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/Content.tsx",
                                lineNumber: 81,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            targetTab === 'annotations' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$sidebar$2f$BooknoteView$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                type: "annotation",
                                toc: bookDoc.toc ?? [],
                                bookKey: sideBarBookKey
                            }, void 0, false, {
                                fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/Content.tsx",
                                lineNumber: 84,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            targetTab === 'bookmarks' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$sidebar$2f$BooknoteView$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                type: "bookmark",
                                toc: bookDoc.toc ?? [],
                                bookKey: sideBarBookKey
                            }, void 0, false, {
                                fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/Content.tsx",
                                lineNumber: 87,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/Content.tsx",
                        lineNumber: 74,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/Content.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/Content.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "flex-shrink-0",
                style: {
                    paddingBottom: `${(safeAreaInsets?.bottom || 0) / 2}px`
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$sidebar$2f$TabNavigation$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                    activeTab: activeTab,
                    onTabChange: handleTabChange
                }, void 0, false, {
                    fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/Content.tsx",
                    lineNumber: 98,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/Content.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = SidebarContent;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/readest-app/src/app/reader/components/sidebar/BookCard.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/clsx [external] (clsx, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-icons@5.4.0_react@19.2.0/node_modules/react-icons/md/index.mjs [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$themeStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/themeStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/hooks/useTranslation.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/event.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useResponsiveSize$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/hooks/useResponsiveSize.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$book$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/book.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$BookCover$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/components/BookCover.tsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$themeStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$book$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$BookCover$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$themeStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$book$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$BookCover$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
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
const BookCard = ({ book })=>{
    const { title, author } = book;
    const _ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useTranslation"])();
    const { isDarkMode } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$themeStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useThemeStore"])();
    const iconSize18 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useResponsiveSize$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useResponsiveSize"])(18);
    const bookCoverRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const showBookDetails = ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["eventDispatcher"].dispatchSync('show-book-details', book);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "flex h-20 w-full items-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                ref: bookCoverRef,
                className: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__["default"])('me-4 aspect-[28/41] max-h-16 w-[15%] max-w-12 overflow-hidden rounded-sm shadow-md', isDarkMode ? 'mix-blend-screen' : 'mix-blend-multiply'),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$BookCover$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                    book: book,
                    mode: "list",
                    coverFit: "crop",
                    imageClassName: "rounded-sm",
                    onImageError: ()=>bookCoverRef.current.style.display = 'none'
                }, void 0, false, {
                    fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/BookCard.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/BookCard.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "min-w-0 flex-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                        className: "line-clamp-2 w-[90%] text-sm font-semibold",
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$book$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["formatTitle"])(title).replace(/\u00A0/g, ' ')
                    }, void 0, false, {
                        fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/BookCard.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        className: "truncate text-xs opacity-75",
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$book$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["formatAuthors"])(author)
                    }, void 0, false, {
                        fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/BookCard.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/BookCard.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                className: "btn btn-ghost hover:bg-base-300 h-6 min-h-6 w-6 rounded-full p-0 transition-colors",
                "aria-label": _('More Info'),
                onClick: showBookDetails,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["MdInfoOutline"], {
                    size: iconSize18,
                    className: "fill-base-content"
                }, void 0, false, {
                    fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/BookCard.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/BookCard.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/BookCard.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = BookCard;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/readest-app/src/app/reader/components/sidebar/SearchOptions.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/clsx [external] (clsx, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-icons@5.4.0_react@19.2.0/node_modules/react-icons/md/index.mjs [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/hooks/useTranslation.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useResponsiveSize$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/hooks/useResponsiveSize.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
const Option = ({ label, isActive, onClick })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
        className: "hover:bg-base-300 flex w-full items-center justify-between rounded-md p-2",
        onClick: onClick,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "flex items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                    style: {
                        minWidth: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useResponsiveSize$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useDefaultIconSize"])()}px`
                    },
                    children: isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["MdCheck"], {
                        className: "text-base-content"
                    }, void 0, false, {
                        fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/SearchOptions.tsx",
                        lineNumber: 29,
                        columnNumber: 22
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/SearchOptions.tsx",
                    lineNumber: 28,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                    className: "ml-2",
                    children: label
                }, void 0, false, {
                    fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/SearchOptions.tsx",
                    lineNumber: 31,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/SearchOptions.tsx",
            lineNumber: 27,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/SearchOptions.tsx",
        lineNumber: 23,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const SearchOptions = ({ isEink, searchConfig, menuClassName, onSearchConfigChanged, setIsDropdownOpen })=>{
    const _ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useTranslation"])();
    const updateConfig = (key, value)=>{
        onSearchConfigChanged({
            ...searchConfig,
            [key]: value
        });
        setIsDropdownOpen?.(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__["default"])('search-options dropdown-content dropdown-center border-base-200 z-20 w-56 border shadow-2xl', isEink ? 'bordercolor-content border-base-content !bg-base-100 border' : '', menuClassName),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Option, {
                label: _('Book'),
                isActive: searchConfig.scope === 'book',
                onClick: ()=>updateConfig('scope', 'book')
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/SearchOptions.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Option, {
                label: _('Chapter'),
                isActive: searchConfig.scope === 'section',
                onClick: ()=>updateConfig('scope', 'section')
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/SearchOptions.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("hr", {
                className: "border-base-200 my-1"
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/SearchOptions.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Option, {
                label: _('Match Case'),
                isActive: searchConfig.matchCase,
                onClick: ()=>updateConfig('matchCase', !searchConfig.matchCase)
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/SearchOptions.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Option, {
                label: _('Match Whole Words'),
                isActive: searchConfig.matchWholeWords,
                onClick: ()=>updateConfig('matchWholeWords', !searchConfig.matchWholeWords)
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/SearchOptions.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Option, {
                label: _('Match Diacritics'),
                isActive: searchConfig.matchDiacritics,
                onClick: ()=>updateConfig('matchDiacritics', !searchConfig.matchDiacritics)
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/SearchOptions.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/SearchOptions.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = SearchOptions;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/readest-app/src/app/reader/components/sidebar/SearchBar.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/clsx [external] (clsx, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-icons@5.4.0_react@19.2.0/node_modules/react-icons/fa/index.mjs [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-icons@5.4.0_react@19.2.0/node_modules/react-icons/io/index.mjs [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-icons@5.4.0_react@19.2.0/node_modules/react-icons/md/index.mjs [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$js$2d$md5__$5b$external$5d$__$28$js$2d$md5$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/js-md5 [external] (js-md5, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/context/EnvContext.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/settingsStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/bookDataStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/readerStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$sidebarStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/sidebarStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/hooks/useTranslation.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useResponsiveSize$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/hooks/useResponsiveSize.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$debounce$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/debounce.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$lang$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/lang.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$node$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/node.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$Dropdown$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/components/Dropdown.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$sidebar$2f$SearchOptions$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/app/reader/components/sidebar/SearchOptions.tsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$sidebarStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$lang$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$Dropdown$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$sidebar$2f$SearchOptions$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$sidebarStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$lang$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$Dropdown$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$sidebar$2f$SearchOptions$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
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
const MINIMUM_SEARCH_TERM_LENGTH_DEFAULT = 2;
const MINIMUM_SEARCH_TERM_LENGTH_CJK = 1;
const SEARCH_HISTORY_KEY = 'search-history';
const SEARCH_CACHE_DIR = 'search';
const MAX_SEARCH_HISTORY = 10;
const SearchBar = ({ isVisible, bookKey, onHideSearchBar })=>{
    const _ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useTranslation"])();
    const { envConfig, appService } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["useEnv"])();
    const { settings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"])();
    const { getBookData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useBookDataStore"])();
    const { getConfig, setConfig, saveConfig } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useBookDataStore"])();
    const { getView, getProgress, getViewSettings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useReaderStore"])();
    const { setSearchTerm, setSearchResults, setSearchProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$sidebarStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useSidebarStore"])();
    const { getSearchNavState, getSearchStatus, setSearchStatus } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$sidebarStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useSidebarStore"])();
    const viewSettings = getViewSettings(bookKey);
    const searchNavState = getSearchNavState(bookKey);
    const { searchTerm } = searchNavState;
    const queuedSearchTerm = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])('');
    const inputRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const inputFocusedRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(false);
    const bookHash = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>bookKey.split('-')[0], [
        bookKey
    ]);
    const historyStorageKey = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>`${SEARCH_HISTORY_KEY}-${bookHash}`, [
        bookHash
    ]);
    const [searchHistory, setSearchHistory] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return [];
    });
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const saved = localStorage.getItem(historyStorageKey);
        setSearchHistory(saved ? JSON.parse(saved) : []);
    }, [
        historyStorageKey
    ]);
    const addToHistory = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])((term)=>{
        const filtered = searchHistory.filter((t)=>t !== term);
        const updated = [
            term,
            ...filtered
        ].slice(0, MAX_SEARCH_HISTORY);
        localStorage.setItem(historyStorageKey, JSON.stringify(updated));
        setSearchHistory(updated);
    }, [
        historyStorageKey,
        searchHistory
    ]);
    const handleHistoryClick = (term)=>{
        setSearchTerm(bookKey, term);
        handleSearchTermChange(term);
    };
    const handleClearInput = ()=>{
        setSearchTerm(bookKey, '');
        resetSearch();
        inputRef.current?.focus();
    };
    const handleClearHistory = async ()=>{
        setSearchHistory([]);
        localStorage.removeItem(historyStorageKey);
        await clearSearchCache();
    };
    const getSearchCacheKey = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])((term, config)=>{
        const configStr = JSON.stringify({
            scope: config.scope,
            matchCase: config.matchCase,
            matchWholeWords: config.matchWholeWords,
            matchDiacritics: config.matchDiacritics
        });
        return (0, __TURBOPACK__imported__module__$5b$externals$5d2f$js$2d$md5__$5b$external$5d$__$28$js$2d$md5$2c$__cjs$29$__["md5"])(`${term}-${configStr}`);
    }, []);
    const getSearchCache = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(async (term, config)=>{
        const cacheKey = getSearchCacheKey(term, config);
        const cachePath = `${SEARCH_CACHE_DIR}/${bookHash}/${cacheKey}.json`;
        try {
            if (await appService?.exists(cachePath, 'Cache')) {
                const content = await appService?.readFile(cachePath, 'Cache', 'text');
                if (content) return JSON.parse(content);
            }
        } catch (error) {
            console.error('Failed to read search cache:', error);
        }
        return null;
    }, [
        bookHash,
        appService,
        getSearchCacheKey
    ]);
    const saveSearchCache = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(async (term, config, results)=>{
        const cacheKey = getSearchCacheKey(term, config);
        const cacheDir = `${SEARCH_CACHE_DIR}/${bookHash}`;
        const cachePath = `${cacheDir}/${cacheKey}.json`;
        try {
            if (!await appService?.exists(cacheDir, 'Cache')) {
                await appService?.createDir(cacheDir, 'Cache', true);
            }
            await appService?.writeFile(cachePath, 'Cache', JSON.stringify(results));
        } catch (error) {
            console.error('Failed to save search cache:', error);
        }
    }, [
        bookHash,
        appService,
        getSearchCacheKey
    ]);
    const clearSearchCache = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(async ()=>{
        const cacheDir = `${SEARCH_CACHE_DIR}/${bookHash}`;
        try {
            if (await appService?.exists(cacheDir, 'Cache')) {
                await appService?.deleteDir(cacheDir, 'Cache', true);
            }
        } catch (error) {
            console.error('Failed to clear search cache:', error);
        }
    }, [
        bookHash,
        appService
    ]);
    const view = getView(bookKey);
    const config = getConfig(bookKey);
    const bookData = getBookData(bookKey);
    const progress = getProgress(bookKey);
    const primaryLang = bookData.book?.primaryLanguage || 'en';
    const iconSize12 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useResponsiveSize$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useResponsiveSize"])(12);
    const iconSize16 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useResponsiveSize$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useResponsiveSize"])(16);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        handleSearchTermChange(searchTerm);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        bookKey,
        searchTerm
    ]);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (isVisible && inputRef.current) {
            inputRef.current.onblur = ()=>{
                inputFocusedRef.current = false;
            };
            inputRef.current.onfocus = ()=>{
                inputFocusedRef.current = true;
            };
            if (!appService?.isMobile) {
                inputRef.current.focus();
            }
        }
        if (isVisible && searchTerm) {
            handleSearchTermChange(searchTerm);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        appService,
        isVisible
    ]);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const handleKeyDown = (e)=>{
            if (e.key === 'Escape') {
                if (inputRef.current && inputFocusedRef.current) {
                    inputRef.current.blur();
                } else {
                    onHideSearchBar();
                }
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return ()=>{
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [
        onHideSearchBar
    ]);
    const handleInputChange = (e)=>{
        const value = e.target.value;
        setSearchTerm(bookKey, value);
        handleSearchTermChange(value);
    };
    const handleSearchConfigChange = (searchConfig)=>{
        setConfig(bookKey, {
            searchConfig: {
                ...searchConfig
            }
        });
        saveConfig(envConfig, bookKey, config, settings);
        handleSearchTermChange(searchTerm);
    };
    const exceedMinSearchTermLength = (searchTerm)=>{
        const minLength = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$lang$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["isCJKStr"])(searchTerm) ? MINIMUM_SEARCH_TERM_LENGTH_CJK : MINIMUM_SEARCH_TERM_LENGTH_DEFAULT;
        return searchTerm.length >= minLength;
    };
    const handleSearch = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(async (term)=>{
        console.log('searching for:', term);
        const searchConfig = config.searchConfig;
        const cachedResults = await getSearchCache(term, searchConfig);
        if (cachedResults) {
            setSearchResults(bookKey, cachedResults);
            setSearchProgress(bookKey, 1);
            if (cachedResults.length > 0) {
                addToHistory(term);
            }
        }
        // Reset progress at start of search
        setSearchProgress(bookKey, 0);
        setSearchStatus(bookKey, 'searching');
        const { section } = progress;
        const index = searchConfig.scope === 'section' ? section.current : undefined;
        const generator = await view.search({
            ...searchConfig,
            index,
            query: term,
            acceptNode: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$node$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["createRejectFilter"])({
                tags: primaryLang.startsWith('ja') ? [
                    'rt'
                ] : []
            }),
            results: cachedResults
        });
        const results = [];
        let lastProgressLogTime = 0;
        const processResults = async ()=>{
            for await (const result of generator){
                if (getSearchStatus(bookKey) === 'terminated') {
                    console.log('search terminated');
                    return;
                }
                if (typeof result === 'string') {
                    if (result === 'done') {
                        setSearchStatus(bookKey, 'completed');
                        setSearchResults(bookKey, [
                            ...results
                        ]);
                        setSearchProgress(bookKey, 1);
                        if (results.length > 0) {
                            addToHistory(term);
                            await saveSearchCache(term, searchConfig, results);
                        }
                        console.log('search done');
                    }
                } else {
                    if (result.progress) {
                        setSearchProgress(bookKey, result.progress);
                        const now = Date.now();
                        if (now - lastProgressLogTime >= 1000) {
                            console.log('search progress:', result.progress);
                            lastProgressLogTime = now;
                        }
                        if (queuedSearchTerm.current !== term) {
                            console.log('search term changed, resetting search');
                            resetSearch();
                            return;
                        }
                    } else {
                        results.push(result);
                        setSearchResults(bookKey, [
                            ...results
                        ]);
                    }
                }
                await new Promise((resolve)=>setTimeout(resolve, 0));
            }
        };
        processResults();
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        progress,
        config.searchConfig,
        setSearchResults,
        setSearchProgress,
        addToHistory,
        getSearchCache,
        saveSearchCache
    ]);
    const resetSearch = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(()=>{
        setSearchResults(bookKey, []);
        view?.clearSearch();
    }, [
        bookKey,
        view,
        setSearchResults
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleSearchTermChange = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$debounce$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["debounce"])((term)=>{
        queuedSearchTerm.current = term;
        if (exceedMinSearchTermLength(term)) {
            handleSearch(term);
        } else {
            resetSearch();
        }
    }, 500), [
        handleSearch,
        resetSearch
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "relative flex flex-col gap-3 p-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "bg-base-100 flex h-8 items-center rounded-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "absolute ps-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["FaSearch"], {
                            size: iconSize16,
                            className: "text-base-content/50"
                        }, void 0, false, {
                            fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/SearchBar.tsx",
                            lineNumber: 334,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/SearchBar.tsx",
                        lineNumber: 333,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                        ref: inputRef,
                        type: "text",
                        value: searchTerm,
                        spellCheck: false,
                        onChange: handleInputChange,
                        placeholder: _('Search...'),
                        className: "search-input w-full bg-transparent p-2 pr-0 ps-10 font-sans text-sm font-light focus:outline-none"
                    }, void 0, false, {
                        fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/SearchBar.tsx",
                        lineNumber: 337,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    searchTerm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        onClick: handleClearInput,
                        className: "absolute end-8 flex h-8 w-8 items-center justify-center bg-transparent",
                        "aria-label": _('Clear search'),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["IoMdCloseCircle"], {
                            size: iconSize16,
                            className: "text-base-content/75"
                        }, void 0, false, {
                            fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/SearchBar.tsx",
                            lineNumber: 353,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/SearchBar.tsx",
                        lineNumber: 348,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__["default"])('absolute end-2 flex h-8 w-8 items-center rounded-r-lg', viewSettings?.isEink ? 'bg-transparent' : 'bg-base-300'),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$Dropdown$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                            label: _('Search Options'),
                            className: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__["default"])(window.innerWidth < 640 && 'dropdown-end', 'dropdown-bottom flex justify-center'),
                            menuClassName: window.innerWidth < 640 ? 'no-triangle mt-1' : 'dropdown-center mt-3.5',
                            buttonClassName: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__["default"])('btn btn-ghost h-8 min-h-8 w-8 p-0 rounded-none rounded-r-lg', viewSettings?.isEink ? '!bg-transparent hover:!bg-transparent' : ''),
                            toggleButton: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["FaChevronDown"], {
                                size: iconSize12,
                                className: "text-base-content/50"
                            }, void 0, false, {
                                fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/SearchBar.tsx",
                                lineNumber: 374,
                                columnNumber: 27
                            }, void 0),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$sidebar$2f$SearchOptions$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                isEink: !!viewSettings?.isEink,
                                searchConfig: config.searchConfig,
                                onSearchConfigChanged: handleSearchConfigChange
                            }, void 0, false, {
                                fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/SearchBar.tsx",
                                lineNumber: 376,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/SearchBar.tsx",
                            lineNumber: 363,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/SearchBar.tsx",
                        lineNumber: 357,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/SearchBar.tsx",
                lineNumber: 332,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            searchHistory.length > 0 && !searchTerm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "relative flex",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__["default"])('from-base-200 pointer-events-none absolute left-0 top-0 h-full w-3 bg-gradient-to-r to-transparent', viewSettings?.isEink ? 'hidden' : ''),
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/SearchBar.tsx",
                        lineNumber: 387,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "scrollbar-hidden flex flex-1 gap-1.5 overflow-x-auto",
                        style: {
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none'
                        },
                        children: searchHistory.map((term, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleHistoryClick(term),
                                className: "hover:bg-base-200/20 text-base-content/70 bg-base-100 max-w-[60%] flex-shrink-0 whitespace-nowrap rounded-full px-3 py-0.5 text-xs",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    className: "truncate",
                                    children: term
                                }, void 0, false, {
                                    fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/SearchBar.tsx",
                                    lineNumber: 404,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, index, false, {
                                fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/SearchBar.tsx",
                                lineNumber: 399,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/SearchBar.tsx",
                        lineNumber: 394,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__["default"])('from-base-200 pointer-events-none absolute right-6 top-0 h-full w-6 bg-gradient-to-l to-transparent', viewSettings?.isEink ? 'hidden' : ''),
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/SearchBar.tsx",
                        lineNumber: 408,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        onClick: handleClearHistory,
                        className: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__["default"])('text-base-content/50 hover:text-base-content/80 flex-shrink-0 items-center', 'flex h-6 min-h-6 w-8 min-w-8 items-center justify-center p-0'),
                        title: _('Clear search history'),
                        "aria-label": _('Clear search history'),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["MdDeleteOutline"], {
                            size: iconSize16
                        }, void 0, false, {
                            fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/SearchBar.tsx",
                            lineNumber: 424,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/SearchBar.tsx",
                        lineNumber: 415,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/SearchBar.tsx",
                lineNumber: 386,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/SearchBar.tsx",
        lineNumber: 331,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = SearchBar;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/readest-app/src/app/reader/components/sidebar/SearchResults.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/readerStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$hooks$2f$useScrollToItem$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/app/reader/hooks/useScrollToItem.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/clsx [external] (clsx, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
const SearchResultItem = ({ bookKey, cfi, excerpt, onSelectResult })=>{
    const { getProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useReaderStore"])();
    const progress = getProgress(bookKey);
    const { isCurrent, viewRef } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$hooks$2f$useScrollToItem$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(cfi, progress);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
        // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
        role: "button",
        ref: viewRef,
        className: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__["default"])('my-2 cursor-pointer rounded-lg p-2 text-sm', isCurrent ? 'bg-base-300 hover:bg-gray-300/70' : 'hover:bg-base-300 bg-base-100'),
        tabIndex: 0,
        onClick: ()=>onSelectResult(cfi),
        onKeyDown: (e)=>{
            if (e.key === 'Enter' || e.key === ' ') {
                onSelectResult(cfi);
            } else {
                e.stopPropagation();
            }
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "line-clamp-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                    className: "",
                    children: excerpt.pre
                }, void 0, false, {
                    fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/SearchResults.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                    className: "font-bold text-red-500",
                    children: excerpt.match
                }, void 0, false, {
                    fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/SearchResults.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                    className: "",
                    children: excerpt.post
                }, void 0, false, {
                    fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/SearchResults.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/SearchResults.tsx",
            lineNumber: 43,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/SearchResults.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const SearchResults = ({ bookKey, results, onSelectResult })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "search-results overflow-y-auto p-2 font-sans text-sm font-light",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
            className: "px-2",
            children: results.map((result, index)=>{
                if ('subitems' in result) {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                className: "line-clamp-1 font-normal",
                                children: result.label
                            }, void 0, false, {
                                fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/SearchResults.tsx",
                                lineNumber: 65,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                                children: result.subitems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(SearchResultItem, {
                                        bookKey: bookKey,
                                        cfi: item.cfi,
                                        excerpt: item.excerpt,
                                        onSelectResult: onSelectResult
                                    }, `${index}-${item.cfi}`, false, {
                                        fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/SearchResults.tsx",
                                        lineNumber: 68,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/SearchResults.tsx",
                                lineNumber: 66,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, `${index}-${result.label}`, true, {
                        fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/SearchResults.tsx",
                        lineNumber: 64,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0));
                } else {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(SearchResultItem, {
                        bookKey: bookKey,
                        cfi: result.cfi,
                        excerpt: result.excerpt,
                        onSelectResult: onSelectResult
                    }, `${index}-${result.cfi}`, false, {
                        fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/SearchResults.tsx",
                        lineNumber: 81,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0));
                }
            })
        }, void 0, false, {
            fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/SearchResults.tsx",
            lineNumber: 60,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/SearchResults.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = SearchResults;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/readest-app/src/app/reader/components/sidebar/SideBar.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/styled-jsx/style.js [external] (styled-jsx/style.js, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/clsx [external] (clsx, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$plugin$2d$haptics__$5b$external$5d$__$2840$tauri$2d$apps$2f$plugin$2d$haptics$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@tauri-apps/plugin-haptics [external] (@tauri-apps/plugin-haptics, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/settingsStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/bookDataStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/readerStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$sidebarStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/sidebarStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/hooks/useTranslation.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/event.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$book$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/book.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/context/EnvContext.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useDrag$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/hooks/useDrag.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$themeStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/themeStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$Overlay$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/components/Overlay.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useShortcuts$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/hooks/useShortcuts.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$sidebar$2f$Header$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/app/reader/components/sidebar/Header.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$sidebar$2f$Content$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/app/reader/components/sidebar/Content.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$sidebar$2f$BookCard$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/app/reader/components/sidebar/BookCard.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$hooks$2f$useSidebar$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/app/reader/hooks/useSidebar.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$sidebar$2f$SearchBar$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/app/reader/components/sidebar/SearchBar.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$sidebar$2f$SearchResults$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/app/reader/components/sidebar/SearchResults.tsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$plugin$2d$haptics__$5b$external$5d$__$2840$tauri$2d$apps$2f$plugin$2d$haptics$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$sidebarStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$book$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$themeStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$Overlay$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$sidebar$2f$Header$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$sidebar$2f$Content$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$sidebar$2f$BookCard$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$hooks$2f$useSidebar$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$sidebar$2f$SearchBar$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$sidebar$2f$SearchResults$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$plugin$2d$haptics__$5b$external$5d$__$2840$tauri$2d$apps$2f$plugin$2d$haptics$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$sidebarStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$book$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$themeStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$Overlay$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$sidebar$2f$Header$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$sidebar$2f$Content$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$sidebar$2f$BookCard$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$hooks$2f$useSidebar$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$sidebar$2f$SearchBar$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$sidebar$2f$SearchResults$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
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
const MIN_SIDEBAR_WIDTH = 0.05;
const MAX_SIDEBAR_WIDTH = 0.45;
const VELOCITY_THRESHOLD = 0.5;
const SideBar = ({ onGoToLibrary })=>{
    const _ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useTranslation"])();
    const { appService } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["useEnv"])();
    const { updateAppTheme, safeAreaInsets } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$themeStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useThemeStore"])();
    const { settings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"])();
    const { sideBarBookKey, setSideBarBookKey, getSearchNavState, setSearchTerm, clearSearch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$sidebarStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useSidebarStore"])();
    const searchNavState = sideBarBookKey ? getSearchNavState(sideBarBookKey) : null;
    const { searchTerm = '', searchResults = null } = searchNavState || {};
    const { getBookData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useBookDataStore"])();
    const { getView, getViewSettings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useReaderStore"])();
    const [isSearchBarVisible, setIsSearchBarVisible] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const searchTermRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(searchTerm);
    const sidebarHeight = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(1.0);
    const isMobile = window.innerWidth < 640;
    const { sideBarWidth, isSideBarPinned, isSideBarVisible, getSideBarWidth, setSideBarVisible, handleSideBarResize, handleSideBarTogglePin } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$hooks$2f$useSidebar$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(settings.globalReadSettings.sideBarWidth, isMobile ? false : settings.globalReadSettings.isSideBarPinned);
    const onSearchEvent = async (event)=>{
        const { term, bookKey } = event.detail;
        setSideBarVisible(true);
        setSideBarBookKey(bookKey);
        setIsSearchBarVisible(true);
        if (term !== undefined && term !== null) {
            setSearchTerm(bookKey, term);
        }
    };
    const onNavigateEvent = async ()=>{
        const pinButton = document.querySelector('.sidebar-pin-btn');
        const isPinButtonHidden = !pinButton || window.getComputedStyle(pinButton).display === 'none';
        if (isPinButtonHidden) {
            setSideBarVisible(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (isSideBarVisible) {
            updateAppTheme('base-200');
        } else {
            updateAppTheme('base-100');
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        isSideBarVisible
    ]);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        searchTermRef.current = searchTerm;
    }, [
        searchTerm
    ]);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["eventDispatcher"].on('search-term', onSearchEvent);
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["eventDispatcher"].on('navigate', onNavigateEvent);
        return ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["eventDispatcher"].off('search-term', onSearchEvent);
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["eventDispatcher"].off('navigate', onNavigateEvent);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const handleVerticalDragMove = (data)=>{
        if (!isMobile) return;
        const heightFraction = data.clientY / window.innerHeight;
        const newTop = Math.max(0.0, Math.min(1, heightFraction));
        sidebarHeight.current = newTop;
        const sidebar = document.querySelector('.sidebar-container');
        const overlay = document.querySelector('.overlay');
        if (sidebar && overlay) {
            sidebar.style.top = `${newTop * 100}%`;
            overlay.style.opacity = `${1 - heightFraction}`;
        }
    };
    const handleVerticalDragEnd = (data)=>{
        const sidebar = document.querySelector('.sidebar-container');
        const overlay = document.querySelector('.overlay');
        if (!sidebar || !overlay) return;
        if (data.velocity > VELOCITY_THRESHOLD || data.velocity >= 0 && data.clientY >= window.innerHeight * 0.5) {
            const transitionDuration = 0.15 / Math.max(data.velocity, 0.5);
            sidebar.style.transition = `top ${transitionDuration}s ease-out`;
            sidebar.style.top = '100%';
            overlay.style.transition = `opacity ${transitionDuration}s ease-out`;
            overlay.style.opacity = '0';
            setTimeout(()=>setSideBarVisible(false), 300);
            if (appService?.hasHaptics) {
                (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$plugin$2d$haptics__$5b$external$5d$__$2840$tauri$2d$apps$2f$plugin$2d$haptics$2c$__esm_import$29$__["impactFeedback"])('medium');
            }
        } else {
            sidebar.style.transition = 'top 0.3s ease-out';
            sidebar.style.top = '0%';
            overlay.style.transition = 'opacity 0.3s ease-out';
            overlay.style.opacity = '0.8';
            if (appService?.hasHaptics) {
                (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$plugin$2d$haptics__$5b$external$5d$__$2840$tauri$2d$apps$2f$plugin$2d$haptics$2c$__esm_import$29$__["impactFeedback"])('medium');
            }
        }
    };
    const handleHorizontalDragMove = (data)=>{
        const widthFraction = data.clientX / window.innerWidth;
        const newWidth = Math.max(MIN_SIDEBAR_WIDTH, Math.min(MAX_SIDEBAR_WIDTH, widthFraction));
        handleSideBarResize(`${Math.round(newWidth * 10000) / 100}%`);
    };
    const handleHorizontalDragKeyDown = (data)=>{
        const currentWidth = parseFloat(getSideBarWidth()) / 100;
        let newWidth = currentWidth;
        if (data.key === 'ArrowLeft') {
            newWidth = Math.max(MIN_SIDEBAR_WIDTH, currentWidth - data.step);
        } else if (data.key === 'ArrowRight') {
            newWidth = Math.min(MAX_SIDEBAR_WIDTH, currentWidth + data.step);
        }
        handleSideBarResize(`${Math.round(newWidth * 10000) / 100}%`);
    };
    const handleVerticalDragKeyDown = ()=>{};
    const { handleDragStart: handleVerticalDragStart } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useDrag$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useDrag"])(handleVerticalDragMove, handleVerticalDragKeyDown, handleVerticalDragEnd);
    const { handleDragStart: handleHorizontalDragStart, handleDragKeyDown } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useDrag$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useDrag"])(handleHorizontalDragMove, handleHorizontalDragKeyDown);
    const handleClickOverlay = ()=>{
        setSideBarVisible(false);
    };
    const handleToggleSearchBar = ()=>{
        setIsSearchBarVisible((prev)=>{
            if (prev) handleHideSearchBar();
            return !prev;
        });
    };
    const handleShowSearchBar = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(()=>{
        setTimeout(()=>{
            setSideBarVisible(true);
            setIsSearchBarVisible(true);
        }, 100);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const handleHideSearchBar = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(()=>{
        setIsSearchBarVisible(false);
        setTimeout(()=>{
            if (sideBarBookKey) clearSearch(sideBarBookKey);
        }, 100);
        getView(sideBarBookKey)?.clearSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        sideBarBookKey,
        clearSearch
    ]);
    const handleHideSideBar = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(()=>{
        if (searchTermRef.current) {
            handleHideSearchBar();
        } else if (!isSideBarPinned) {
            setSideBarVisible(false);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        sideBarBookKey,
        isSideBarPinned
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useShortcuts$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({
        onShowSearchBar: handleShowSearchBar,
        onEscape: handleHideSideBar
    }, [
        handleHideSideBar
    ]);
    const handleSearchResultClick = (cfi)=>{
        onNavigateEvent();
        getView(sideBarBookKey)?.goTo(cfi);
    };
    if (!sideBarBookKey) return null;
    const viewSettings = getViewSettings(sideBarBookKey);
    const bookData = getBookData(sideBarBookKey);
    if (!bookData || !bookData.book || !bookData.bookDoc) {
        return null;
    }
    const { book, bookDoc } = bookData;
    const languageDir = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$book$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getBookDirFromLanguage"])(bookDoc.metadata.language);
    return isSideBarVisible ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            !isSideBarPinned && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$Overlay$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["Overlay"], {
                className: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__["default"])('z-[45]', viewSettings?.isEink ? '' : 'bg-black/50 sm:bg-black/20'),
                onDismiss: handleClickOverlay
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/SideBar.tsx",
                lineNumber: 237,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                role: "group",
                "aria-label": _('Sidebar'),
                dir: viewSettings?.rtl && languageDir === 'rtl' ? 'rtl' : 'ltr',
                style: {
                    width: `${sideBarWidth}`,
                    maxWidth: `${MAX_SIDEBAR_WIDTH * 100}%`,
                    position: isSideBarPinned ? 'relative' : 'absolute',
                    paddingTop: `${safeAreaInsets?.top || 0}px`
                },
                className: "jsx-fbb074d65c8317d1" + " " + ((0, __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__["default"])('sidebar-container flex min-w-60 select-none flex-col', 'full-height transition-[padding-top] duration-300', viewSettings?.isEink ? 'bg-base-100' : 'bg-base-200', appService?.hasRoundedWindow && 'rounded-window-top-left rounded-window-bottom-left', isSideBarPinned ? 'z-20' : 'z-[45] shadow-2xl', !isSideBarPinned && viewSettings?.isEink && 'border-base-content border-e') || ""),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"], {
                        id: "fbb074d65c8317d1",
                        children: "@media (width<=640px){.sidebar-container.jsx-fbb074d65c8317d1{border-top-left-radius:16px;border-top-right-radius:16px;width:100%;min-width:100%}.sidebar-container.open.jsx-fbb074d65c8317d1{top:0%}.overlay.jsx-fbb074d65c8317d1{transition:opacity .3s ease-in-out}}"
                    }, void 0, false, void 0, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        role: "slider",
                        tabIndex: 0,
                        "aria-label": _('Resize Sidebar'),
                        "aria-orientation": "horizontal",
                        "aria-valuenow": parseFloat(sideBarWidth),
                        onMouseDown: handleHorizontalDragStart,
                        onTouchStart: handleHorizontalDragStart,
                        onKeyDown: handleDragKeyDown,
                        className: "jsx-fbb074d65c8317d1" + " " + ((0, __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__["default"])('drag-bar absolute -right-2 top-0 h-full w-0.5 cursor-col-resize bg-transparent p-1', isMobile && 'hidden') || "")
                    }, void 0, false, {
                        fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/SideBar.tsx",
                        lineNumber: 277,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "jsx-fbb074d65c8317d1" + " " + 'flex-shrink-0',
                        children: [
                            isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                role: "slider",
                                tabIndex: 0,
                                "aria-label": _('Resize Sidebar'),
                                "aria-orientation": "vertical",
                                "aria-valuenow": sidebarHeight.current,
                                onMouseDown: handleVerticalDragStart,
                                onTouchStart: handleVerticalDragStart,
                                className: "jsx-fbb074d65c8317d1" + " " + 'drag-handle flex h-10 w-full cursor-row-resize items-center justify-center',
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "jsx-fbb074d65c8317d1" + " " + 'bg-base-content/50 h-1 w-10 rounded-full'
                                }, void 0, false, {
                                    fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/SideBar.tsx",
                                    lineNumber: 303,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/SideBar.tsx",
                                lineNumber: 293,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$sidebar$2f$Header$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                isPinned: isSideBarPinned,
                                isSearchBarVisible: isSearchBarVisible,
                                onGoToLibrary: onGoToLibrary,
                                onClose: ()=>setSideBarVisible(false),
                                onTogglePin: handleSideBarTogglePin,
                                onToggleSearchBar: handleToggleSearchBar
                            }, void 0, false, {
                                fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/SideBar.tsx",
                                lineNumber: 306,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "jsx-fbb074d65c8317d1" + " " + ((0, __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__["default"])('search-bar', {
                                    'search-bar-visible': isSearchBarVisible
                                }) || ""),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$sidebar$2f$SearchBar$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    isVisible: isSearchBarVisible,
                                    bookKey: sideBarBookKey,
                                    onHideSearchBar: handleHideSearchBar
                                }, void 0, false, {
                                    fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/SideBar.tsx",
                                    lineNumber: 319,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/SideBar.tsx",
                                lineNumber: 314,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "jsx-fbb074d65c8317d1" + " " + 'border-base-300/50 border-b px-3',
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$sidebar$2f$BookCard$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    book: book
                                }, void 0, false, {
                                    fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/SideBar.tsx",
                                    lineNumber: 326,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/SideBar.tsx",
                                lineNumber: 325,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/SideBar.tsx",
                        lineNumber: 291,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    isSearchBarVisible && searchResults ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$sidebar$2f$SearchResults$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        bookKey: sideBarBookKey,
                        results: searchResults,
                        onSelectResult: handleSearchResultClick
                    }, void 0, false, {
                        fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/SideBar.tsx",
                        lineNumber: 330,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$sidebar$2f$Content$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        bookDoc: bookDoc,
                        sideBarBookKey: sideBarBookKey
                    }, void 0, false, {
                        fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/SideBar.tsx",
                        lineNumber: 336,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/SideBar.tsx",
                lineNumber: 242,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true) : null;
};
const __TURBOPACK__default__export__ = SideBar;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/readest-app/src/app/reader/components/sidebar/ContentNavBar.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/clsx [external] (clsx, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-icons@5.4.0_react@19.2.0/node_modules/react-icons/io/index.mjs [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-icons@5.4.0_react@19.2.0/node_modules/react-icons/hi2/index.mjs [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/context/EnvContext.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/hooks/useTranslation.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useResponsiveSize$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/hooks/useResponsiveSize.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/readerStore.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
const ContentNavBar = ({ bookKey, gridInsets, title, section, progress, showListButton = true, hasPrevious, hasNext, previousLabel, nextLabel, previousTitle, nextTitle, showResultsTitle, closeTitle, onShowResults, onClose, onPrevious, onNext })=>{
    const { appService } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["useEnv"])();
    const _ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useTranslation"])();
    const { getViewSettings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useReaderStore"])();
    const viewSettings = getViewSettings(bookKey);
    const iconSize16 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useResponsiveSize$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useResponsiveSize"])(16);
    const iconSize18 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useResponsiveSize$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useResponsiveSize"])(18);
    const iconSize20 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useResponsiveSize$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useResponsiveSize"])(20);
    const showSection = appService?.isMobile || !viewSettings?.showHeader;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "results-nav-bar pointer-events-none absolute inset-0 z-30 flex flex-col items-center justify-between px-4 py-1",
        style: {
            top: gridInsets.top,
            right: gridInsets.right,
            bottom: gridInsets.bottom / 4,
            left: gridInsets.left
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "bg-base-100 pointer-events-auto relative flex items-center justify-between overflow-hidden rounded-xl px-2 py-1 shadow-lg sm:gap-6",
                children: [
                    progress !== undefined && progress < 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "bg-base-200 absolute inset-y-0 left-0 transition-all duration-300",
                        style: {
                            width: `${progress * 100}%`
                        }
                    }, void 0, false, {
                        fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/ContentNavBar.tsx",
                        lineNumber: 76,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    progress === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "bg-base-200 absolute inset-0"
                    }, void 0, false, {
                        fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/ContentNavBar.tsx",
                        lineNumber: 81,
                        columnNumber: 28
                    }, ("TURBOPACK compile-time value", void 0)),
                    showListButton && onShowResults ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        title: showResultsTitle || _('Show Results'),
                        onClick: onShowResults,
                        className: "btn btn-ghost relative z-10 h-8 min-h-8 w-8 p-0 hover:bg-transparent",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["IoIosList"], {
                            size: iconSize20,
                            className: "text-base-content"
                        }, void 0, false, {
                            fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/ContentNavBar.tsx",
                            lineNumber: 88,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/ContentNavBar.tsx",
                        lineNumber: 83,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "relative z-10 w-8"
                    }, void 0, false, {
                        fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/ContentNavBar.tsx",
                        lineNumber: 91,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "relative z-10 flex flex-1 flex-col items-center px-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                className: "line-clamp-1 text-sm font-medium",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/ContentNavBar.tsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            section && showSection && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                className: "text-base-content/70 line-clamp-1 text-xs",
                                children: section
                            }, void 0, false, {
                                fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/ContentNavBar.tsx",
                                lineNumber: 97,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/ContentNavBar.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        title: closeTitle || _('Close'),
                        onClick: onClose,
                        className: "btn btn-ghost relative z-10 h-8 min-h-8 w-8 p-0 hover:bg-transparent",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["IoMdCloseCircle"], {
                            size: iconSize16
                        }, void 0, false, {
                            fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/ContentNavBar.tsx",
                            lineNumber: 106,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/ContentNavBar.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/ContentNavBar.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "bg-base-200 pointer-events-auto flex items-center justify-between gap-6 rounded-xl px-4 py-0 shadow-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        title: previousTitle || _('Previous'),
                        onClick: onPrevious,
                        disabled: !hasPrevious,
                        className: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__["default"])('btn btn-ghost flex h-auto min-h-0 flex-1 flex-col items-center gap-0 p-1 hover:bg-transparent', !hasPrevious && 'opacity-40 disabled:bg-transparent'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["HiArrowLongLeft"], {
                                size: iconSize18,
                                className: "text-base-content"
                            }, void 0, false, {
                                fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/ContentNavBar.tsx",
                                lineNumber: 121,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                className: "text-sm font-medium",
                                children: previousLabel || _('Previous')
                            }, void 0, false, {
                                fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/ContentNavBar.tsx",
                                lineNumber: 122,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/ContentNavBar.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        title: nextTitle || _('Next'),
                        onClick: onNext,
                        disabled: !hasNext,
                        className: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__["default"])('btn btn-ghost flex h-auto min-h-0 flex-1 flex-col items-center gap-0 p-1 hover:bg-transparent', !hasNext && 'opacity-40 disabled:bg-transparent'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["HiArrowLongRight"], {
                                size: iconSize18,
                                className: "text-base-content"
                            }, void 0, false, {
                                fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/ContentNavBar.tsx",
                                lineNumber: 134,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                className: "text-sm font-medium",
                                children: nextLabel || _('Next')
                            }, void 0, false, {
                                fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/ContentNavBar.tsx",
                                lineNumber: 135,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/ContentNavBar.tsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/ContentNavBar.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/ContentNavBar.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ContentNavBar;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/readest-app/src/app/reader/components/sidebar/SearchResultsNav.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "findCurrentResultIndex",
    ()=>findCurrentResultIndex,
    "flattenSearchResults",
    ()=>flattenSearchResults
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/hooks/useTranslation.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$hooks$2f$useSearchNav$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/app/reader/hooks/useSearchNav.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$sidebar$2f$ContentNavBar$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/app/reader/components/sidebar/ContentNavBar.tsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$hooks$2f$useSearchNav$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$sidebar$2f$ContentNavBar$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$hooks$2f$useSearchNav$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$sidebar$2f$ContentNavBar$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
const SearchResultsNav = ({ bookKey, gridInsets })=>{
    const { searchTerm, searchProgress, currentSection, showSearchNav, hasPreviousPage, hasNextPage, handleShowResults, handleCloseSearch, handlePreviousResult, handleNextResult } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$hooks$2f$useSearchNav$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useSearchNav"])(bookKey);
    const _ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useTranslation"])();
    if (!showSearchNav) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$sidebar$2f$ContentNavBar$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
        bookKey: bookKey,
        gridInsets: gridInsets,
        title: _("Search results for '{{term}}'", {
            term: searchTerm
        }),
        section: currentSection,
        progress: searchProgress,
        hasPrevious: hasPreviousPage,
        hasNext: hasNextPage,
        previousTitle: _('Previous Result'),
        nextTitle: _('Next Result'),
        showResultsTitle: _('Show Search Results'),
        closeTitle: _('Close Search'),
        onShowResults: handleShowResults,
        onClose: handleCloseSearch,
        onPrevious: handlePreviousResult,
        onNext: handleNextResult
    }, void 0, false, {
        fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/SearchResultsNav.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = SearchResultsNav;
function flattenSearchResults(results) {
    const flattened = [];
    for (const result of results){
        if ('subitems' in result) {
            // BookSearchResult with subitems
            for (const item of result.subitems){
                flattened.push({
                    cfi: item.cfi,
                    sectionLabel: result.label
                });
            }
        } else {
            // BookSearchMatch
            flattened.push({
                cfi: result.cfi,
                sectionLabel: ''
            });
        }
    }
    return flattened;
}
function findCurrentResultIndex(flattenedResults, currentLocation) {
    if (!currentLocation || flattenedResults.length === 0) return 0;
    // Try to find exact match or closest match
    for(let i = 0; i < flattenedResults.length; i++){
        if (flattenedResults[i].cfi === currentLocation) {
            return i;
        }
    }
    return 0;
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/readest-app/src/app/reader/components/sidebar/BooknotesNav.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/hooks/useTranslation.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$hooks$2f$useBooknotesNav$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/app/reader/hooks/useBooknotesNav.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$sidebar$2f$ContentNavBar$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/app/reader/components/sidebar/ContentNavBar.tsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$hooks$2f$useBooknotesNav$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$sidebar$2f$ContentNavBar$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$hooks$2f$useBooknotesNav$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$sidebar$2f$ContentNavBar$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
const BooknotesNav = ({ bookKey, gridInsets, toc })=>{
    const { activeBooknoteType, currentSection, showBooknotesNav, hasPreviousPage, hasNextPage, handleShowResults, handleClose, handlePrevious, handleNext } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$hooks$2f$useBooknotesNav$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useBooknotesNav"])(bookKey, toc);
    const _ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useTranslation"])();
    if (!showBooknotesNav) {
        return null;
    }
    const getShowResultsTitle = ()=>{
        switch(activeBooknoteType){
            case 'bookmark':
                return _('Bookmarks');
            case 'annotation':
                return _('Annotations');
            case 'excerpt':
                return _('Excerpts');
            default:
                return '';
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$sidebar$2f$ContentNavBar$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
        bookKey: bookKey,
        gridInsets: gridInsets,
        title: getShowResultsTitle(),
        section: currentSection,
        hasPrevious: hasPreviousPage,
        hasNext: hasNextPage,
        progress: 1,
        previousTitle: _('Previous'),
        nextTitle: _('Next'),
        showResultsTitle: getShowResultsTitle(),
        closeTitle: _('Close'),
        onShowResults: handleShowResults,
        onClose: handleClose,
        onPrevious: handlePrevious,
        onNext: handleNext
    }, void 0, false, {
        fileName: "[project]/apps/readest-app/src/app/reader/components/sidebar/BooknotesNav.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = BooknotesNav;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=apps_readest-app_src_app_reader_components_sidebar_be37cdb7._.js.map