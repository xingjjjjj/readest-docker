module.exports = [
"[project]/apps/readest-app/src/hooks/useTheme.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "useTheme",
    ()=>useTheme
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/context/EnvContext.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$themeStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/themeStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/settingsStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$styles$2f$themes$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/styles/themes.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$bridge$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/bridge.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/misc.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$ua$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/ua.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$themeStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$styles$2f$themes$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$bridge$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$themeStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$styles$2f$themes$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$bridge$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
'use client';
;
;
;
;
;
;
;
;
const useTheme = ({ systemUIVisible = true, appThemeColor = 'base-100' } = {})=>{
    const { appService } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["useEnv"])();
    const { settings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"])();
    const { themeColor, isDarkMode, isEinkMode, showSystemUI, dismissSystemUI, updateAppTheme, setStatusBarHeight, systemUIAlwaysHidden, setSystemUIAlwaysHidden } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$themeStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useThemeStore"])();
    const useFallbackColors = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        updateAppTheme(appThemeColor);
        if (appService?.isAndroidApp) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$bridge$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getStatusBarHeight"])().then((res)=>{
                if (res.height && res.height > 0) {
                    setStatusBarHeight(res.height / window.devicePixelRatio);
                }
            });
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        appService?.isAndroidApp
    ]);
    const handleSystemUIVisibility = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(()=>{
        if (!appService?.isMobileApp) return;
        const visible = !!(systemUIVisible && !systemUIAlwaysHidden);
        if (visible) {
            showSystemUI();
        } else {
            dismissSystemUI();
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$bridge$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["setSystemUIVisibility"])({
            visible,
            darkMode: isDarkMode
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        appService,
        isDarkMode,
        systemUIVisible
    ]);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (appService?.isMobileApp) {
            handleSystemUIVisibility();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        handleSystemUIVisibility
    ]);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (!appService?.isMobileApp) return;
        handleSystemUIVisibility();
        const handleVisibilityChange = ()=>{
            if (document.visibilityState === 'visible') {
                handleSystemUIVisibility();
            }
        };
        const handleOrientationChange = ()=>{
            if (appService?.isIOSApp && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getOSPlatform"])() === 'ios') {
                // FIXME: This is a workaround for iPhone apps where the system UI is not visible in landscape mode
                // when the app is in fullscreen mode until we find a better solution to override the prefersStatusBarHidden
                // in the ViewController. Note that screen.orientation.type is not abailable in iOS before 16.4.
                const systemUIAlwaysHidden = screen.orientation?.type.includes('landscape');
                setSystemUIAlwaysHidden(systemUIAlwaysHidden);
                handleSystemUIVisibility();
            }
        };
        document.addEventListener('visibilitychange', handleVisibilityChange);
        screen.orientation?.addEventListener('change', handleOrientationChange);
        return ()=>{
            document.removeEventListener('visibilitychange', handleVisibilityChange);
            screen.orientation?.removeEventListener('change', handleOrientationChange);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        handleSystemUIVisibility
    ]);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (!appService?.isAndroidApp) return;
        const webViewVersion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$ua$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["parseWebViewVersion"])(appService);
        // OKLCH color model is supported in Chromium 111+
        useFallbackColors.current = webViewVersion < 111;
    }, [
        appService
    ]);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (!themeColor || !__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$styles$2f$themes$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["themes"].find((t)=>t.name === themeColor)) return;
        if (useFallbackColors.current) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$styles$2f$themes$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["applyCustomTheme"])(undefined, themeColor, true);
        }
    }, [
        themeColor
    ]);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const customThemes = settings.globalReadSettings?.customThemes ?? [];
        customThemes.forEach((customTheme)=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$styles$2f$themes$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["applyCustomTheme"])(customTheme, undefined, useFallbackColors.current);
        });
        localStorage.setItem('customThemes', JSON.stringify(customThemes));
    }, [
        settings.globalReadSettings?.customThemes
    ]);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const colorScheme = isDarkMode ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', `${themeColor}-${colorScheme}`);
        document.documentElement.style.setProperty('color-scheme', colorScheme);
        document.documentElement.style.setProperty('--overlayer-highlight-opacity', isEinkMode ? '1.0' : '0.3');
        document.documentElement.style.setProperty('--overlayer-highlight-blend-mode', isEinkMode ? 'difference' : isDarkMode ? 'lighten' : 'normal');
        document.documentElement.style.setProperty('--bg-texture-blend-mode', isDarkMode ? 'lighten' : 'multiply');
    }, [
        themeColor,
        isDarkMode,
        isEinkMode
    ]);
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/readest-app/src/hooks/useLibrary.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "useLibrary",
    ()=>useLibrary
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/context/EnvContext.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$libraryStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/libraryStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/settingsStore.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$libraryStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$libraryStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
'use client';
;
;
;
;
const useLibrary = ()=>{
    const { envConfig } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["useEnv"])();
    const { setLibrary } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$libraryStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useLibraryStore"])();
    const { setSettings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"])();
    const [libraryLoaded, setLibraryLoaded] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const isInitiating = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (isInitiating.current) return;
        isInitiating.current = true;
        const initLibrary = async ()=>{
            const appService = await envConfig.getAppService();
            const settings = await appService.loadSettings();
            setSettings(settings);
            setLibrary(await appService.loadLibraryBooks());
            setLibraryLoaded(true);
        };
        initLibrary();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return {
        libraryLoaded
    };
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/readest-app/src/hooks/useScreenWakeLock.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "useScreenWakeLock",
    ()=>useScreenWakeLock
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$api$2f$window__$5b$external$5d$__$2840$tauri$2d$apps$2f$api$2f$window$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@tauri-apps/api/window [external] (@tauri-apps/api/window, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/environment.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$api$2f$window__$5b$external$5d$__$2840$tauri$2d$apps$2f$api$2f$window$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$api$2f$window__$5b$external$5d$__$2840$tauri$2d$apps$2f$api$2f$window$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
'use client';
;
;
;
const useScreenWakeLock = (lock)=>{
    const wakeLockRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const unlistenOnFocusChangedRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const requestWakeLock = async ()=>{
            try {
                if ('wakeLock' in navigator) {
                    wakeLockRef.current = await navigator.wakeLock.request('screen');
                    wakeLockRef.current.addEventListener('release', ()=>{
                        wakeLockRef.current = null;
                    });
                    console.log('Wake lock acquired');
                }
            } catch (err) {
                console.info('Failed to acquire wake lock:', err);
            }
        };
        const releaseWakeLock = ()=>{
            if (wakeLockRef.current) {
                wakeLockRef.current.release();
                wakeLockRef.current = null;
                console.log('Wake lock released');
            }
        };
        const handleVisibilityChange = ()=>{
            if (document.hidden) {
                releaseWakeLock();
            } else {
                requestWakeLock();
            }
        };
        if (lock) {
            requestWakeLock();
        } else if (wakeLockRef.current) {
            releaseWakeLock();
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["isWebAppPlatform"])() && lock) {
            document.addEventListener('visibilitychange', handleVisibilityChange);
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["isTauriAppPlatform"])() && lock) {
            unlistenOnFocusChangedRef.current = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$api$2f$window__$5b$external$5d$__$2840$tauri$2d$apps$2f$api$2f$window$2c$__esm_import$29$__["getCurrentWindow"])().onFocusChanged(({ payload: focused })=>{
                if (focused) {
                    requestWakeLock();
                } else {
                    releaseWakeLock();
                }
            });
        }
        return ()=>{
            releaseWakeLock();
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["isWebAppPlatform"])() && lock) {
                document.removeEventListener('visibilitychange', handleVisibilityChange);
            }
            if (unlistenOnFocusChangedRef.current) {
                unlistenOnFocusChangedRef.current.then((f)=>f());
            }
        };
    }, [
        lock
    ]);
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/readest-app/src/hooks/useTranslation.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "useTranslation",
    ()=>useTranslation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$i18n$2f$i18n$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/i18n/i18n.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$i18next__$5b$external$5d$__$28$react$2d$i18next$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/react-i18next [external] (react-i18next, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$i18n$2f$i18n$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$i18next__$5b$external$5d$__$28$react$2d$i18next$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$i18n$2f$i18n$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$i18next__$5b$external$5d$__$28$react$2d$i18next$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
'use client';
;
;
;
const useTranslation = (namespace = 'translation')=>{
    const { t } = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$i18next__$5b$external$5d$__$28$react$2d$i18next$2c$__esm_import$29$__["useTranslation"])(namespace);
    return (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])((key, options = {})=>t(key, {
            defaultValue: key,
            ...options
        }), [
        t
    ]);
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/readest-app/src/hooks/useTransferQueue.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "useTransferQueue",
    ()=>useTransferQueue
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/context/EnvContext.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/hooks/useTranslation.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$libraryStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/libraryStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$transferStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/transferStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$transferManager$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/transferManager.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$libraryStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$transferStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$transferManager$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$libraryStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$transferStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$transferManager$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
'use client';
;
;
;
;
;
;
function useTransferQueue(libraryLoaded = true, delayInit = 0) {
    const { envConfig, appService } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["useEnv"])();
    const _ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useTranslation"])();
    const transfers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$transferStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useTransferStore"])((state)=>state.transfers);
    const isQueuePaused = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$transferStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useTransferStore"])((state)=>state.isQueuePaused);
    const setIsTransferQueueOpen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$transferStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useTransferStore"])((state)=>state.setIsTransferQueueOpen);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const initManager = async ()=>{
            if (appService && envConfig) {
                const getLibrary = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$libraryStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useLibraryStore"].getState().library;
                const updateBookFn = async (book)=>{
                    await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$libraryStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useLibraryStore"].getState().updateBook(envConfig, book);
                };
                const translationFn = _;
                await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$transferManager$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["transferManager"].initialize(appService, getLibrary, updateBookFn, translationFn);
            }
        };
        // Initialize transfer manager only when library is loaded
        if (libraryLoaded) {
            setTimeout(()=>{
                initManager();
            }, delayInit);
        }
    }, [
        appService,
        envConfig,
        libraryLoaded,
        delayInit,
        _
    ]);
    const queueUpload = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])((book, priority)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$transferManager$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["transferManager"].queueUpload(book, priority);
    }, []);
    const queueDownload = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])((book, priority)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$transferManager$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["transferManager"].queueDownload(book, priority);
    }, []);
    const queueBatchUploads = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])((books, priority)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$transferManager$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["transferManager"].queueBatchUploads(books, priority);
    }, []);
    const cancelTransfer = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])((transferId)=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$transferManager$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["transferManager"].cancelTransfer(transferId);
    }, []);
    const retryTransfer = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])((transferId)=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$transferManager$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["transferManager"].retryTransfer(transferId);
    }, []);
    const retryAllFailed = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$transferManager$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["transferManager"].retryAllFailed();
    }, []);
    const pauseQueue = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$transferManager$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["transferManager"].pauseQueue();
    }, []);
    const resumeQueue = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$transferManager$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["transferManager"].resumeQueue();
    }, []);
    const clearCompleted = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$transferStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useTransferStore"].getState().clearCompleted();
    }, []);
    const clearFailed = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$transferStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useTransferStore"].getState().clearFailed();
    }, []);
    const clearAll = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$transferStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useTransferStore"].getState().clearAll();
    }, []);
    const getTransferProgress = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])((bookHash, type)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$transferStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useTransferStore"].getState().getTransferByBookHash(bookHash, type);
    }, []);
    const stats = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>{
        const transferList = Object.values(transfers);
        return {
            pending: transferList.filter((t)=>t.status === 'pending').length,
            active: transferList.filter((t)=>t.status === 'in_progress').length,
            completed: transferList.filter((t)=>t.status === 'completed').length,
            failed: transferList.filter((t)=>t.status === 'failed' || t.status === 'cancelled').length,
            total: transferList.length
        };
    }, [
        transfers
    ]);
    const pendingTransfers = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>{
        return Object.values(transfers).filter((t)=>t.status === 'pending');
    }, [
        transfers
    ]);
    const activeTransfers = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>{
        return Object.values(transfers).filter((t)=>t.status === 'in_progress');
    }, [
        transfers
    ]);
    const failedTransfers = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>{
        return Object.values(transfers).filter((t)=>t.status === 'failed' || t.status === 'cancelled');
    }, [
        transfers
    ]);
    const completedTransfers = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>{
        return Object.values(transfers).filter((t)=>t.status === 'completed');
    }, [
        transfers
    ]);
    const hasActiveTransfers = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>{
        return pendingTransfers.length > 0 || activeTransfers.length > 0;
    }, [
        pendingTransfers,
        activeTransfers
    ]);
    return {
        transfers: Object.values(transfers),
        isQueuePaused,
        stats,
        pendingTransfers,
        activeTransfers,
        failedTransfers,
        completedTransfers,
        hasActiveTransfers,
        setIsTransferQueueOpen,
        queueUpload,
        queueDownload,
        queueBatchUploads,
        cancelTransfer,
        retryTransfer,
        retryAllFailed,
        pauseQueue,
        resumeQueue,
        clearCompleted,
        clearFailed,
        clearAll,
        getTransferProgress
    };
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/readest-app/src/hooks/useTranslator.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "useTranslator",
    ()=>useTranslator
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/context/AuthContext.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$translators$2f$index$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/translators/index.ts [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$translators$2f$types$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/translators/types.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$translators$2f$providers$2f$index$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/translators/providers/index.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$translators$2f$cache$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/translators/cache.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$translators$2f$polish$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/translators/polish.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$translators$2f$preprocess$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/translators/preprocess.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/event.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/misc.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/hooks/useTranslation.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$translators$2f$index$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$translators$2f$providers$2f$index$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$translators$2f$index$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$translators$2f$providers$2f$index$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
'use client';
;
;
;
;
;
;
;
;
function useTranslator({ provider = 'deepl', sourceLang = 'AUTO', targetLang = 'EN', enablePolishing = true, enablePreprocessing = true } = {}) {
    const _ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useTranslation"])();
    const { token } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [selectedProvider, setSelectedProvider] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(provider);
    const [translator, setTransltor] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$translators$2f$providers$2f$index$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getTranslator"])(provider));
    const [translators] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$translators$2f$providers$2f$index$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getTranslators"])());
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        setLoading(false);
    }, [
        provider,
        sourceLang,
        targetLang
    ]);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const availableTranslators = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$translators$2f$providers$2f$index$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getTranslators"])().filter((t)=>(t.authRequired ? !!token : true) && !t.quotaExceeded);
        const selectedTranslator = availableTranslators.find((t)=>t.name === provider) || availableTranslators[0];
        const selectedProviderName = selectedTranslator.name;
        setTransltor((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$translators$2f$providers$2f$index$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getTranslator"])(selectedProviderName));
        setSelectedProvider(selectedProviderName);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        provider
    ]);
    const translate = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(async (input, options)=>{
        const sourceLanguage = options?.source || sourceLang;
        const targetLanguage = options?.target || targetLang || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getLocale"])();
        const useCache = options?.useCache ?? false;
        const textsToTranslate = enablePreprocessing ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$translators$2f$preprocess$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["preprocess"])(input) : input;
        if (textsToTranslate.length === 0 || textsToTranslate.every((t)=>!t?.trim())) {
            return textsToTranslate;
        }
        const textsNeedingTranslation = [];
        const indicesNeedingTranslation = [];
        await Promise.all(textsToTranslate.map(async (text, index)=>{
            if (!text?.trim()) return;
            const cachedTranslation = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$translators$2f$cache$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getFromCache"])(text, sourceLanguage, targetLanguage, selectedProvider);
            if (cachedTranslation) return;
            textsNeedingTranslation.push(text);
            indicesNeedingTranslation.push(index);
        }));
        if (textsNeedingTranslation.length === 0) {
            const results = await Promise.all(textsToTranslate.map((text)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$translators$2f$cache$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getFromCache"])(text, sourceLanguage, targetLanguage, selectedProvider).then((cached)=>cached || text)));
            return enablePolishing ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$translators$2f$polish$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["polish"])(results, targetLanguage) : results;
        }
        setLoading(true);
        try {
            const translator = translators.find((t)=>t.name === selectedProvider);
            if (!translator) {
                throw new Error(`No translator found for provider: ${selectedProvider}`);
            }
            const translatedTexts = await translator.translate(textsNeedingTranslation, sourceLanguage, targetLanguage, token, useCache);
            await Promise.all(textsNeedingTranslation.map(async (text, index)=>{
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$translators$2f$cache$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["storeInCache"])(text, translatedTexts[index] || '', sourceLanguage, targetLanguage, selectedProvider);
            }));
            const results = [
                ...textsToTranslate
            ];
            indicesNeedingTranslation.forEach((originalIndex, translationIndex)=>{
                results[originalIndex] = translatedTexts[translationIndex] || '';
            });
            await Promise.all(results.map(async (_, index)=>{
                if (!indicesNeedingTranslation.includes(index)) {
                    const originalText = textsToTranslate[index];
                    if (!originalText?.trim()) return;
                    const cachedTranslation = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$translators$2f$cache$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getFromCache"])(originalText, sourceLanguage, targetLanguage, selectedProvider);
                    if (cachedTranslation) {
                        results[index] = cachedTranslation;
                    }
                }
            }));
            setLoading(false);
            return enablePolishing ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$translators$2f$polish$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["polish"])(results, targetLanguage) : results;
        } catch (err) {
            if (err instanceof Error && err.message.includes(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$translators$2f$types$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["ErrorCodes"].DAILY_QUOTA_EXCEEDED)) {
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["eventDispatcher"].dispatch('toast', {
                    timeout: 5000,
                    message: _('Daily translation quota reached. Upgrade your plan to continue using AI translations.'),
                    type: 'error'
                });
                setSelectedProvider('azure');
            }
            setLoading(false);
            throw err instanceof Error ? err : new Error(String(err));
        }
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        selectedProvider,
        sourceLang,
        targetLang,
        translator,
        token
    ]);
    return {
        translate,
        translator,
        translators,
        loading
    };
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/readest-app/src/hooks/useDrag.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDrag",
    ()=>useDrag
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
'use client';
;
const useDrag = (onDragMove, onDragKeyDown, onDragEnd)=>{
    const isDragging = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(false);
    const startX = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(0);
    const startY = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(0);
    const lastX = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(0);
    const lastY = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(0);
    const startTime = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(0);
    const handleDragStart = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])((e)=>{
        isDragging.current = true;
        if ('touches' in e) {
            startY.current = e.touches[0].clientY;
            startX.current = e.touches[0].clientX;
        } else {
            startY.current = e.clientY;
            startX.current = e.clientX;
        }
        startTime.current = performance.now();
        document.body.style.pointerEvents = 'none';
        document.body.style.userSelect = 'none';
        document.documentElement.style.cursor = 'col-resize';
        const handleMove = (event)=>{
            if (isDragging.current) {
                let deltaX = 0;
                let deltaY = 0;
                let clientX = 0;
                let clientY = 0;
                if ('touches' in event && event.touches.length > 0) {
                    const currentTouch = event.touches[0];
                    clientX = currentTouch.clientX;
                    clientY = currentTouch.clientY;
                } else {
                    const evt = event;
                    clientX = evt.clientX;
                    clientY = evt.clientY;
                }
                deltaX = clientX - lastX.current;
                deltaY = clientY - lastY.current;
                lastX.current = clientX;
                lastY.current = clientY;
                onDragMove({
                    clientX,
                    clientY,
                    deltaX,
                    deltaY
                });
            }
        };
        const handleEnd = (event)=>{
            isDragging.current = false;
            document.body.style.pointerEvents = '';
            document.body.style.userSelect = '';
            document.documentElement.style.cursor = '';
            let deltaX = 0;
            let deltaY = 0;
            let clientX = 0;
            let clientY = 0;
            const endTime = performance.now();
            const deltaT = endTime - startTime.current;
            if ('touches' in event) {
                const currentTouch = event.changedTouches[0];
                clientX = currentTouch.clientX;
                clientY = currentTouch.clientY;
            } else {
                const evt = event;
                clientX = evt.clientX;
                clientY = evt.clientY;
            }
            deltaX = clientX - startX.current;
            deltaY = clientY - startY.current;
            const velocity = deltaY / deltaT;
            if (onDragEnd) {
                onDragEnd({
                    velocity,
                    deltaT,
                    clientX,
                    clientY,
                    deltaX,
                    deltaY
                });
            }
            window.removeEventListener('mousemove', handleMove);
            window.removeEventListener('mouseup', handleEnd);
            window.removeEventListener('touchmove', handleMove);
            window.removeEventListener('touchend', handleEnd);
        };
        window.addEventListener('mousemove', handleMove, {
            passive: true
        });
        window.addEventListener('mouseup', handleEnd);
        window.addEventListener('touchmove', handleMove, {
            passive: true
        });
        window.addEventListener('touchend', handleEnd);
    }, [
        onDragMove,
        onDragEnd
    ]);
    const handleDragKeyDown = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])((e)=>{
        const step = 0.02;
        switch(e.key){
            case 'ArrowUp':
            case 'ArrowDown':
            case 'ArrowLeft':
            case 'ArrowRight':
                onDragKeyDown({
                    key: e.key,
                    step
                });
                break;
            default:
                return;
        }
        e.preventDefault();
        e.stopPropagation();
    }, [
        onDragKeyDown
    ]);
    return {
        handleDragStart,
        handleDragKeyDown
    };
};
}),
"[project]/apps/readest-app/src/hooks/useKeyDownActions.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "useKeyDownActions",
    ()=>useKeyDownActions
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/context/EnvContext.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$deviceStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/deviceStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/event.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$deviceStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$deviceStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
'use client';
;
;
;
;
const useKeyDownActions = ({ onCancel, onConfirm, enabled = true, elementRef: providedRef })=>{
    const { appService } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["useEnv"])();
    const { acquireBackKeyInterception, releaseBackKeyInterception } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$deviceStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useDeviceControlStore"])();
    const internalRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const elementRef = providedRef || internalRef;
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (!enabled) return;
        const handleKeyDown = (event)=>{
            if (event instanceof CustomEvent) {
                if (event.detail.keyName === 'Back') {
                    onCancel?.();
                    return true;
                }
            } else {
                if (event.key === 'Escape') {
                    onCancel?.();
                } else if (event.key === 'Enter') {
                    onConfirm?.();
                }
                event.stopPropagation();
            }
            return false;
        };
        window.addEventListener('keydown', handleKeyDown);
        if (elementRef.current) {
            elementRef.current.addEventListener('keydown', handleKeyDown);
        }
        if (appService?.isAndroidApp) {
            acquireBackKeyInterception?.();
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["eventDispatcher"].onSync('native-key-down', handleKeyDown);
        }
        return ()=>{
            window.removeEventListener('keydown', handleKeyDown);
            if (appService?.isAndroidApp) {
                releaseBackKeyInterception?.();
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["eventDispatcher"].offSync('native-key-down', handleKeyDown);
            }
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        enabled,
        appService?.isAndroidApp
    ]);
    return internalRef;
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/readest-app/src/hooks/useFileSelector.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "FILE_SELECTION_PRESETS",
    ()=>FILE_SELECTION_PRESETS,
    "useFileSelector",
    ()=>useFileSelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/environment.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$api$2f$path__$5b$external$5d$__$2840$tauri$2d$apps$2f$api$2f$path$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@tauri-apps/api/path [external] (@tauri-apps/api/path, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/misc.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/constants.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$api$2f$path__$5b$external$5d$__$2840$tauri$2d$apps$2f$api$2f$path$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$api$2f$path__$5b$external$5d$__$2840$tauri$2d$apps$2f$api$2f$path$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
const selectFileWeb = (options)=>{
    return new Promise((resolve)=>{
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = options.accept || '*/*';
        fileInput.multiple = options.multiple || false;
        fileInput.click();
        fileInput.onchange = ()=>{
            resolve(Array.from(fileInput.files || []));
        };
    });
};
const selectFileTauri = async (options, appService, _)=>{
    const noFilter = appService?.isIOSApp || appService?.isAndroidApp && options.type === 'books';
    const exts = noFilter ? [] : options.extensions || [];
    const title = options.dialogTitle || _('Select Files');
    let files = await appService?.selectFiles(_(title), exts) || [];
    if (noFilter && options.extensions) {
        files = await Promise.all(files.map(async (file)=>{
            let processedFile = file;
            if (appService?.isAndroidApp && file.startsWith('content://')) {
                processedFile = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$api$2f$path__$5b$external$5d$__$2840$tauri$2d$apps$2f$api$2f$path$2c$__esm_import$29$__["basename"])(file);
            }
            const fileExt = processedFile.split('.').pop()?.toLowerCase() || 'unknown';
            const extensions = options.extensions;
            const shouldInclude = extensions.includes(fileExt) || extensions.includes('*');
            return shouldInclude ? file : null;
        })).then((results)=>results.filter((file)=>file !== null));
    }
    return files;
};
const processWebFiles = (files)=>{
    return files.map((file)=>({
            file
        }));
};
const processTauriFiles = (files)=>{
    return files.map((path)=>({
            path
        }));
};
const useFileSelector = (appService, _)=>{
    const selectFiles = async (options = {
        type: 'generic'
    })=>{
        options = {
            ...FILE_SELECTION_PRESETS[options.type],
            ...options
        };
        if (!appService) {
            return {
                files: [],
                error: 'App service is not available'
            };
        }
        try {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["isTauriAppPlatform"])()) {
                const filePaths = await selectFileTauri(options, appService, _);
                const files = await processTauriFiles(filePaths);
                return {
                    files
                };
            } else {
                const webFiles = await selectFileWeb(options);
                const files = processWebFiles(webFiles);
                return {
                    files
                };
            }
        } catch (error) {
            return {
                files: [],
                error: error instanceof Error ? error.message : 'Unknown error occurred'
            };
        }
    };
    return {
        selectFiles
    };
};
const FILE_SELECTION_PRESETS = {
    generic: {
        accept: '*/*',
        extensions: [
            '*'
        ],
        dialogTitle: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["stubTranslation"])('Select Files')
    },
    images: {
        accept: 'image/*',
        extensions: [
            'jpg',
            'jpeg',
            'png',
            'gif',
            'webp',
            'svg'
        ],
        dialogTitle: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["stubTranslation"])('Select Image')
    },
    videos: {
        accept: 'video/*',
        extensions: [
            'mp4',
            'avi',
            'mov',
            'wmv',
            'flv',
            'webm'
        ],
        dialogTitle: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["stubTranslation"])('Select Video')
    },
    audio: {
        accept: 'audio/*',
        extensions: [
            'mp3',
            'wav',
            'ogg',
            'flac',
            'm4a'
        ],
        dialogTitle: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["stubTranslation"])('Select Audio')
    },
    books: {
        accept: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["BOOK_ACCEPT_FORMATS"],
        extensions: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["SUPPORTED_BOOK_EXTS"],
        dialogTitle: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["stubTranslation"])('Select Books')
    },
    fonts: {
        accept: '.ttf, .otf, .woff, .woff2',
        extensions: [
            'ttf',
            'otf',
            'woff',
            'woff2'
        ],
        dialogTitle: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["stubTranslation"])('Select Fonts')
    },
    covers: {
        accept: '.png, .jpg, .jpeg, .gif',
        extensions: [
            'png',
            'jpg',
            'jpeg',
            'gif'
        ],
        dialogTitle: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["stubTranslation"])('Select Image')
    }
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/readest-app/src/hooks/useShortcuts.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$helpers$2f$shortcuts$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/helpers/shortcuts.ts [ssr] (ecmascript)");
'use client';
;
;
const useShortcuts = (actions, dependencies = [])=>{
    const [shortcuts, setShortcuts] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$helpers$2f$shortcuts$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["loadShortcuts"]);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const handleShortcutUpdate = ()=>{
            setShortcuts((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$helpers$2f$shortcuts$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["loadShortcuts"])());
        };
        window.addEventListener('shortcutUpdate', handleShortcutUpdate);
        return ()=>window.removeEventListener('shortcutUpdate', handleShortcutUpdate);
    }, []);
    const parseShortcut = (shortcut)=>{
        const keys = shortcut.toLowerCase().split('+');
        return {
            ctrlKey: keys.includes('ctrl'),
            altKey: keys.includes('alt') || keys.includes('opt'),
            metaKey: keys.includes('meta') || keys.includes('cmd'),
            shiftKey: keys.includes('shift'),
            key: keys.find((k)=>![
                    'ctrl',
                    'alt',
                    'opt',
                    'meta',
                    'cmd',
                    'shift'
                ].includes(k))
        };
    };
    const isShortcutMatch = (shortcut, key, ctrlKey, altKey, metaKey, shiftKey)=>{
        const parsedShortcut = parseShortcut(shortcut);
        return parsedShortcut.key === key.toLowerCase() && parsedShortcut.ctrlKey === ctrlKey && parsedShortcut.altKey === altKey && parsedShortcut.metaKey === metaKey && parsedShortcut.shiftKey === shiftKey;
    };
    const processKeyEvent = (key, ctrlKey, altKey, metaKey, shiftKey, event)=>{
        // FIXME: This is a temporary fix to disable Back button navigation
        if (key === 'backspace') return true;
        for (const [actionName, actionHandler] of Object.entries(actions)){
            const shortcutKey = actionName;
            const handler = actionHandler;
            const shortcutList = shortcuts[shortcutKey];
            // console.log('Checking action:', shortcutKey);
            if (handler && shortcutList?.some((shortcut)=>isShortcutMatch(shortcut, key, ctrlKey, altKey, metaKey, shiftKey))) {
                if (handler(event)) {
                    return true;
                }
            }
        }
        return false;
    };
    const unifiedHandleKeyDown = (event)=>{
        // Check if the focus is on an input, textarea, or contenteditable element
        const activeElement = document.activeElement;
        const isInteractiveElement = activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA' || activeElement.isContentEditable;
        const isNoteEditor = activeElement.tagName === 'TEXTAREA' && activeElement.classList.contains('note-editor');
        if (isInteractiveElement && !isNoteEditor) {
            return; // Skip handling if the user is typing in an input, textarea, or contenteditable
        }
        if (event instanceof KeyboardEvent) {
            const { key, ctrlKey, altKey, metaKey, shiftKey } = event;
            if (isNoteEditor && !(key === 'Enter' && ctrlKey || key == 'Escape')) {
                return;
            }
            const handled = processKeyEvent(key.toLowerCase(), ctrlKey, altKey, metaKey, shiftKey, event);
            // console.log('Key event handled:', key, handled);
            if (handled) event.preventDefault();
        } else if (event instanceof MessageEvent && event.data && event.data.type === 'iframe-keydown') {
            const { key, ctrlKey, altKey, metaKey, shiftKey } = event.data;
            processKeyEvent(key.toLowerCase(), ctrlKey, altKey, metaKey, shiftKey, event);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        window.addEventListener('keydown', unifiedHandleKeyDown);
        window.addEventListener('message', unifiedHandleKeyDown);
        return ()=>{
            window.removeEventListener('keydown', unifiedHandleKeyDown);
            window.removeEventListener('message', unifiedHandleKeyDown);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        shortcuts,
        ...dependencies
    ]);
};
const __TURBOPACK__default__export__ = useShortcuts;
}),
"[project]/apps/readest-app/src/hooks/useTrafficLight.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "useTrafficLight",
    ()=>useTrafficLight
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/context/EnvContext.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$trafficLightStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/trafficLightStore.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$trafficLightStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$trafficLightStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
'use client';
;
;
;
const useTrafficLight = ()=>{
    const { appService } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["useEnv"])();
    const { isTrafficLightVisible, initializeTrafficLightStore, initializeTrafficLightListeners, setTrafficLightVisibility, cleanupTrafficLightListeners } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$trafficLightStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useTrafficLightStore"])();
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (!appService?.hasTrafficLight) return;
        initializeTrafficLightStore(appService);
        initializeTrafficLightListeners();
        setTrafficLightVisibility(true);
        return ()=>{
            cleanupTrafficLightListeners();
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        appService?.hasTrafficLight
    ]);
    return {
        isTrafficLightVisible
    };
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/readest-app/src/hooks/useSync.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "useSync",
    ()=>useSync
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.28.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/navigation.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$SyncContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/context/SyncContext.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/settingsStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/bookDataStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$transform$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/transform.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$nav$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/nav.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/readerStore.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$nav$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$nav$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
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
const transformsFromDB = {
    books: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$transform$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["transformBookFromDB"],
    notes: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$transform$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["transformBookNoteFromDB"],
    configs: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$transform$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["transformBookConfigFromDB"]
};
const computeMaxTimestamp = (records)=>{
    let maxTime = 0;
    for (const rec of records){
        if (rec.updated_at) {
            const updatedTime = new Date(rec.updated_at).getTime();
            maxTime = Math.max(maxTime, updatedTime);
        }
        if (rec.deleted_at) {
            const deletedTime = new Date(rec.deleted_at).getTime();
            maxTime = Math.max(maxTime, deletedTime);
        }
    }
    return maxTime;
};
const ONE_DAY_IN_MS = 24 * 60 * 60 * 1000;
function useSync(bookKey) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { settings, setSettings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"])();
    const { getConfig, setConfig } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useBookDataStore"])();
    const { setIsSyncing } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useReaderStore"])();
    const config = bookKey ? getConfig(bookKey) : null;
    const [syncingBooks, setSyncingBooks] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [syncingConfigs, setSyncingConfigs] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [syncingNotes, setSyncingNotes] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [syncError, setSyncError] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [lastSyncedAtBooks, setLastSyncedAtBooks] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(0);
    const [lastSyncedAtConfigs, setLastSyncedAtConfigs] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(0);
    const [lastSyncedAtNotes, setLastSyncedAtNotes] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(0);
    const [lastSyncedAtInited, setLastSyncedAtInited] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [syncing, setSyncing] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    // null means unsynced, empty array means synced no changes
    const [syncResult, setSyncResult] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])({
        books: null,
        configs: null,
        notes: null
    });
    const [syncedBooks, setSyncedBooks] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [syncedConfigs, setSyncedConfigs] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [syncedNotes, setSyncedNotes] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const { syncClient } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$SyncContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["useSyncContext"])();
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (!bookKey) return;
        setIsSyncing(bookKey, syncing);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        bookKey,
        syncing
    ]);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (!settings.version) return;
        if (bookKey && !config?.location) return;
        if (lastSyncedAtInited) return;
        const lastSyncedBooksAt = settings.lastSyncedAtBooks ?? 0;
        const lastSyncedConfigsAt = config?.lastSyncedAtConfig ?? settings.lastSyncedAtConfigs ?? 0;
        const lastSyncedNotesAt = config?.lastSyncedAtNotes ?? settings.lastSyncedAtNotes ?? 0;
        const now = Date.now();
        setLastSyncedAtBooks(now - lastSyncedBooksAt > 3 * ONE_DAY_IN_MS ? 0 : lastSyncedBooksAt - ONE_DAY_IN_MS);
        setLastSyncedAtConfigs(now - lastSyncedConfigsAt > 3 * ONE_DAY_IN_MS ? 0 : lastSyncedConfigsAt - ONE_DAY_IN_MS);
        setLastSyncedAtNotes(now - lastSyncedNotesAt > 3 * ONE_DAY_IN_MS ? 0 : lastSyncedNotesAt - ONE_DAY_IN_MS);
        setLastSyncedAtInited(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        bookKey,
        settings,
        config
    ]);
    // bookId is for configs and notes only, if bookId is provided, only pull changes for that book
    // and update the lastSyncedAt for that book in the book config
    const pullChanges = async (type, since, setLastSyncedAt, setSyncing, bookId, metaHash)=>{
        setSyncing(true);
        setSyncError(null);
        try {
            const result = await syncClient.pullChanges(since, type, bookId, metaHash);
            setSyncResult({
                ...syncResult,
                [type]: result[type]
            });
            const records = result[type];
            if (since > 0 && !records?.length) return;
            // For since = 0, we set lastSyncedAt to now if no records returned
            const maxTime = records?.length ? computeMaxTimestamp(records) : Date.now();
            setLastSyncedAt(maxTime);
            // due to closures in React hooks the settings might be stale
            // we need to fetch the latest settings from store
            const settings = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"].getState().settings;
            switch(type){
                case 'books':
                    settings.lastSyncedAtBooks = maxTime;
                    setSettings(settings);
                    break;
                case 'configs':
                    if (!bookId) {
                        settings.lastSyncedAtConfigs = maxTime;
                        setSettings(settings);
                    } else if (bookKey) {
                        setConfig(bookKey, {
                            lastSyncedAtConfig: maxTime
                        });
                    }
                    break;
                case 'notes':
                    if (!bookId) {
                        settings.lastSyncedAtNotes = maxTime;
                        setSettings(settings);
                    } else if (bookKey) {
                        setConfig(bookKey, {
                            lastSyncedAtNotes: maxTime
                        });
                    }
                    break;
            }
        } catch (err) {
            console.error(err);
            if (err instanceof Error) {
                if (err.message.includes('Not authenticated') && settings.keepLogin) {
                    settings.keepLogin = false;
                    setSettings(settings);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$nav$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["navigateToLogin"])(router);
                }
                setSyncError(err.message || `Error pulling ${type}`);
            } else {
                setSyncError(`Error pulling ${type}`);
            }
        } finally{
            setSyncing(false);
        }
    };
    const pushChanges = async (payload)=>{
        setSyncing(true);
        setSyncError(null);
        try {
            const result = await syncClient.pushChanges(payload);
            setSyncResult(result);
        } catch (err) {
            console.error(err);
            if (err instanceof Error) {
                setSyncError(err.message || 'Error pushing changes');
            } else {
                setSyncError('Error pushing changes');
            }
        } finally{
            setSyncing(false);
        }
    };
    const syncBooks = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(async (books, op = 'both')=>{
        if (!lastSyncedAtInited) return;
        if ((op === 'push' || op === 'both') && books?.length) {
            await pushChanges({
                books
            });
        }
        if (op === 'pull' || op === 'both') {
            await pullChanges('books', lastSyncedAtBooks + 1, setLastSyncedAtBooks, setSyncingBooks);
        }
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        lastSyncedAtInited,
        lastSyncedAtBooks
    ]);
    const syncConfigs = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(async (bookConfigs, bookId, metaHash, op = 'both')=>{
        if (!bookId && !lastSyncedAtInited) return;
        if ((op === 'push' || op === 'both') && bookConfigs?.length) {
            await pushChanges({
                configs: bookConfigs
            });
        }
        if (op === 'pull' || op === 'both') {
            await pullChanges('configs', lastSyncedAtConfigs, setLastSyncedAtConfigs, setSyncingConfigs, bookId, metaHash);
        }
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        lastSyncedAtInited,
        lastSyncedAtConfigs
    ]);
    const syncNotes = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(async (bookNotes, bookId, metaHash, op = 'both')=>{
        if (!lastSyncedAtInited) return;
        if ((op === 'push' || op === 'both') && bookNotes?.length) {
            await pushChanges({
                notes: bookNotes
            });
        }
        if (op === 'pull' || op === 'both') {
            await pullChanges('notes', lastSyncedAtNotes, setLastSyncedAtNotes, setSyncingNotes, bookId, metaHash);
        }
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        lastSyncedAtInited,
        lastSyncedAtNotes
    ]);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (!syncing && syncResult) {
            const { books: dbBooks, configs: dbBookConfigs, notes: dbBookNotes } = syncResult;
            const books = dbBooks?.map((dbBook)=>transformsFromDB['books'](dbBook));
            const configs = dbBookConfigs?.map((dbBookConfig)=>transformsFromDB['configs'](dbBookConfig));
            const notes = dbBookNotes?.map((dbBookNote)=>transformsFromDB['notes'](dbBookNote));
            if (books) setSyncedBooks(books);
            if (configs) setSyncedConfigs(configs);
            if (notes) setSyncedNotes(notes);
        }
    }, [
        syncResult,
        syncing
    ]);
    return {
        syncing: syncingBooks || syncingConfigs || syncingNotes,
        syncError,
        syncResult,
        syncedBooks,
        syncedConfigs,
        syncedNotes,
        lastSyncedAtBooks,
        lastSyncedAtNotes,
        lastSyncedAtConfigs,
        useSyncInited: lastSyncedAtInited,
        pullChanges,
        pushChanges,
        syncBooks,
        syncConfigs,
        syncNotes
    };
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/readest-app/src/hooks/useAutoFocus.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAutoFocus",
    ()=>useAutoFocus
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
'use client';
;
const useAutoFocus = (options = {})=>{
    const { delay = 0, condition = true, preventScroll = false, ref } = options;
    const localRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const focusRef = ref || localRef;
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (condition && focusRef.current) {
            const focusElement = ()=>{
                focusRef.current?.focus({
                    preventScroll
                });
            };
            if (delay > 0) {
                const timer = setTimeout(focusElement, delay);
                return ()=>clearTimeout(timer);
            } else {
                focusElement();
            }
        }
        return;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        condition,
        delay,
        preventScroll
    ]);
    return focusRef;
};
}),
"[project]/apps/readest-app/src/hooks/useUICSS.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "useUICSS",
    ()=>useUICSS
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/readerStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/settingsStore.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
'use client';
;
;
;
const useUICSS = (bookKey)=>{
    const { settings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"])();
    const { getViewSettings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useReaderStore"])();
    const viewSettings = getViewSettings(bookKey || '');
    const [styleElement, setStyleElement] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (styleElement) {
            styleElement.remove();
        }
        const rawCSS = viewSettings?.userUIStylesheet || settings?.globalViewSettings?.userUIStylesheet || '';
        const newStyleEl = document.createElement('style');
        newStyleEl.textContent = rawCSS.replace('foliate-view', `#foliate-view-${bookKey}`);
        document.head.appendChild(newStyleEl);
        setStyleElement(newStyleEl);
        return ()=>{
            newStyleEl.remove();
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        viewSettings?.userUIStylesheet,
        settings?.globalViewSettings?.userUIStylesheet,
        bookKey
    ]);
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/readest-app/src/hooks/useDiscordPresence.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "useDiscordPresence",
    ()=>useDiscordPresence
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/context/EnvContext.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$discord$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/discord.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$discord$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$discord$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
'use client';
;
;
;
const useDiscordPresence = (book, isPrimary, enabled)=>{
    const { appService } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["useEnv"])();
    const sessionStartRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(Date.now());
    const updateIntervalRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const currentBookHashRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const isUpdatingRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (!isPrimary || !book) return;
        if (!appService?.isDesktopApp) return;
        const stopUpdates = ()=>{
            if (updateIntervalRef.current) {
                clearInterval(updateIntervalRef.current);
                updateIntervalRef.current = null;
            }
            isUpdatingRef.current = false;
        };
        if (!enabled) {
            stopUpdates();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$discord$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["clearDiscordPresence"])(appService);
            currentBookHashRef.current = null;
            return;
        }
        if (currentBookHashRef.current !== book.hash) {
            sessionStartRef.current = Date.now();
            currentBookHashRef.current = book.hash;
        }
        const safeUpdate = async ()=>{
            if (isUpdatingRef.current) return;
            isUpdatingRef.current = true;
            try {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$discord$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["updateDiscordPresence"])(book, sessionStartRef.current, appService);
            } catch (err) {
                console.error('Discord presence update failed:', err);
            } finally{
                isUpdatingRef.current = false;
            }
        };
        void safeUpdate();
        updateIntervalRef.current = setInterval(()=>{
            void safeUpdate();
        }, 15000);
        return ()=>{
            stopUpdates();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$discord$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["clearDiscordPresence"])(appService);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        book?.hash,
        isPrimary,
        enabled,
        appService
    ]);
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/readest-app/src/hooks/useResetSettings.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useResetViewSettings",
    ()=>useResetViewSettings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/context/EnvContext.tsx [ssr] (ecmascript)");
;
const useResetViewSettings = ()=>{
    const { appService } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["useEnv"])();
    const resetToDefaults = (setters)=>{
        if (!appService) return;
        const defaultSettings = appService.getDefaultViewSettings();
        Object.entries(setters).forEach(([settingKey, setter])=>{
            const freshValue = defaultSettings[settingKey];
            if (freshValue !== undefined) {
                setter(freshValue);
            }
        });
    };
    return resetToDefaults;
};
}),
"[project]/apps/readest-app/src/store/libraryStore.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "useLibraryStore",
    ()=>useLibraryStore
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$zustand__$5b$external$5d$__$28$zustand$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/zustand [external] (zustand, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/environment.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/constants.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$md5$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/md5.ts [ssr] (ecmascript) <locals>");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$zustand__$5b$external$5d$__$28$zustand$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$zustand__$5b$external$5d$__$28$zustand$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
const useLibraryStore = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$zustand__$5b$external$5d$__$28$zustand$2c$__esm_import$29$__["create"])((set, get)=>({
        library: [],
        isSyncing: false,
        syncProgress: 0,
        currentBookshelf: [],
        selectedBooks: new Set(),
        groups: {},
        checkOpenWithBooks: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["isTauriAppPlatform"])(),
        checkLastOpenBooks: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["isTauriAppPlatform"])(),
        setIsSyncing: (syncing)=>set({
                isSyncing: syncing
            }),
        setSyncProgress: (progress)=>set({
                syncProgress: progress
            }),
        getVisibleLibrary: ()=>get().library.filter((book)=>!book.deletedAt),
        setCurrentBookshelf: (bookshelf)=>{
            set({
                currentBookshelf: bookshelf
            });
        },
        setCheckOpenWithBooks: (check)=>set({
                checkOpenWithBooks: check
            }),
        setCheckLastOpenBooks: (check)=>set({
                checkLastOpenBooks: check
            }),
        setLibrary: (books)=>{
            const { refreshGroups } = get();
            set({
                library: books
            });
            refreshGroups();
        },
        updateBook: async (envConfig, book)=>{
            const appService = await envConfig.getAppService();
            const { library } = get();
            const bookIndex = library.findIndex((b)=>b.hash === book.hash);
            if (bookIndex !== -1) {
                library[bookIndex] = book;
            }
            set({
                library: [
                    ...library
                ]
            });
            await appService.saveLibraryBooks(library);
        },
        updateBooks: async (envConfig, books)=>{
            if (!books?.length) return;
            const appService = await envConfig.getAppService();
            const { library, refreshGroups } = get();
            const newLibrary = Array.from(new Map([
                ...library,
                ...books
            ].map((b)=>[
                    b.hash,
                    b
                ])).values());
            set({
                library: newLibrary
            });
            refreshGroups();
            await appService.saveLibraryBooks(newLibrary);
        },
        setSelectedBooks: (ids)=>{
            set({
                selectedBooks: new Set(ids)
            });
        },
        getSelectedBooks: ()=>{
            return Array.from(get().selectedBooks);
        },
        toggleSelectedBook: (id)=>{
            set((state)=>{
                const newSelection = new Set(state.selectedBooks);
                if (newSelection.has(id)) {
                    newSelection.delete(id);
                } else {
                    newSelection.add(id);
                }
                return {
                    selectedBooks: newSelection
                };
            });
        },
        refreshGroups: ()=>{
            const { library } = get();
            const groups = {};
            library.forEach((book)=>{
                if (book.groupName && book.groupName !== __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["BOOK_UNGROUPED_NAME"] && !book.deletedAt) {
                    groups[(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$md5$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["md5Fingerprint"])(book.groupName)] = book.groupName;
                    let nextSlashIndex = book.groupName.indexOf('/', 0);
                    while(nextSlashIndex > 0){
                        const groupName = book.groupName.substring(0, nextSlashIndex);
                        groups[(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$md5$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["md5Fingerprint"])(groupName)] = groupName;
                        nextSlashIndex = book.groupName.indexOf('/', nextSlashIndex + 1);
                    }
                }
            });
            set({
                groups
            });
        },
        addGroup: (name)=>{
            const trimmedName = name.trim();
            if (!trimmedName) {
                throw new Error('Group name cannot be empty');
            }
            const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$md5$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["md5Fingerprint"])(trimmedName);
            const { groups } = get();
            set({
                groups: {
                    ...groups,
                    [id]: trimmedName
                }
            });
            return {
                id,
                name: trimmedName
            };
        },
        getGroups: ()=>{
            const { groups } = get();
            return Object.entries(groups).map(([id, name])=>({
                    id,
                    name
                })).sort((a, b)=>a.name.localeCompare(b.name));
        },
        getGroupId: (path)=>{
            const { groups } = get();
            const directId = Object.entries(groups).find(([_, name])=>name === path)?.[0];
            if (directId) {
                return directId;
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$md5$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["md5Fingerprint"])(path);
        },
        getGroupName: (id)=>{
            return get().groups[id];
        },
        getParentPath: (path)=>{
            const lastSlashIndex = path.lastIndexOf('/');
            if (lastSlashIndex === -1) return '';
            return path.slice(0, lastSlashIndex);
        },
        getGroupsByParent: (parentPath)=>{
            const { groups } = get();
            const result = [];
            Object.entries(groups).forEach(([id, name])=>{
                const groupParentPath = get().getParentPath(name);
                if (groupParentPath === (parentPath || '')) {
                    result.push({
                        id,
                        name
                    });
                }
            });
            return result;
        }
    }));
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/readest-app/src/store/bookDataStore.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "useBookDataStore",
    ()=>useBookDataStore
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$zustand__$5b$external$5d$__$28$zustand$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/zustand [external] (zustand, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$libraryStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/libraryStore.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$zustand__$5b$external$5d$__$28$zustand$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$libraryStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$zustand__$5b$external$5d$__$28$zustand$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$libraryStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
const useBookDataStore = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$zustand__$5b$external$5d$__$28$zustand$2c$__esm_import$29$__["create"])((set, get)=>({
        booksData: {},
        getBookData: (keyOrId)=>{
            const id = keyOrId.split('-')[0];
            return get().booksData[id] || null;
        },
        clearBookData: (keyOrId)=>{
            const id = keyOrId.split('-')[0];
            set((state)=>{
                const newBooksData = {
                    ...state.booksData
                };
                delete newBooksData[id];
                return {
                    booksData: newBooksData
                };
            });
        },
        getConfig: (key)=>{
            if (!key) return null;
            const id = key.split('-')[0];
            return get().booksData[id]?.config || null;
        },
        setConfig: (key, partialConfig)=>{
            set((state)=>{
                const id = key.split('-')[0];
                const config = state.booksData[id]?.config || null;
                if (!config) {
                    console.warn('No config found for book', id);
                    return state;
                }
                Object.assign(config, partialConfig);
                return {
                    booksData: {
                        ...state.booksData,
                        [id]: {
                            ...state.booksData[id],
                            config
                        }
                    }
                };
            });
        },
        saveConfig: async (envConfig, bookKey, config, settings)=>{
            const appService = await envConfig.getAppService();
            const { library, setLibrary } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$libraryStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useLibraryStore"].getState();
            const bookIndex = library.findIndex((b)=>b.hash === bookKey.split('-')[0]);
            if (bookIndex == -1) return;
            const book = library.splice(bookIndex, 1)[0];
            book.progress = config.progress;
            book.updatedAt = Date.now();
            book.downloadedAt = book.downloadedAt || Date.now();
            library.unshift(book);
            setLibrary([
                ...library
            ]);
            config.updatedAt = Date.now();
            await appService.saveBookConfig(book, config, settings);
            await appService.saveLibraryBooks(library);
        },
        updateBooknotes: (key, booknotes)=>{
            let updatedConfig;
            set((state)=>{
                const id = key.split('-')[0];
                const book = state.booksData[id];
                if (!book) return state;
                const dedupedBooknotes = Array.from(new Map(booknotes.map((item)=>[
                        `${item.id}-${item.type}-${item.cfi}`,
                        item
                    ])).values());
                updatedConfig = {
                    ...book.config,
                    updatedAt: Date.now(),
                    booknotes: dedupedBooknotes
                };
                return {
                    booksData: {
                        ...state.booksData,
                        [id]: {
                            ...book,
                            config: {
                                ...book.config,
                                updatedAt: Date.now(),
                                booknotes: dedupedBooknotes
                            }
                        }
                    }
                };
            });
            return updatedConfig;
        }
    }));
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/readest-app/src/store/readerStore.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "useReaderStore",
    ()=>useReaderStore
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$zustand__$5b$external$5d$__$28$zustand$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/zustand [external] (zustand, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$types$2f$book$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/types/book.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$libs$2f$document$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/libs/document.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$toc$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/toc.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$book$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/book.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$path$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/path.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/constants.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/settingsStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/bookDataStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$libraryStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/libraryStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/misc.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$zustand__$5b$external$5d$__$28$zustand$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$book$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$path$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$libraryStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$zustand__$5b$external$5d$__$28$zustand$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$book$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$path$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$libraryStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
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
const useReaderStore = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$zustand__$5b$external$5d$__$28$zustand$2c$__esm_import$29$__["create"])((set, get)=>({
        viewStates: {},
        bookKeys: [],
        hoveredBookKey: null,
        setBookKeys: (keys)=>set({
                bookKeys: keys
            }),
        setHoveredBookKey: (key)=>set({
                hoveredBookKey: key
            }),
        getView: (key)=>key && get().viewStates[key]?.view || null,
        setView: (key, view)=>set((state)=>({
                    viewStates: {
                        ...state.viewStates,
                        [key]: {
                            ...state.viewStates[key],
                            view
                        }
                    }
                })),
        getViews: ()=>Object.values(get().viewStates).map((state)=>state.view),
        getViewsById: (id)=>{
            const { viewStates } = get();
            return Object.values(viewStates).filter((state)=>state.key && state.key.startsWith(id)).map((state)=>state.view);
        },
        clearViewState: (key)=>{
            set((state)=>{
                const viewStates = {
                    ...state.viewStates
                };
                delete viewStates[key];
                return {
                    viewStates
                };
            });
        },
        getViewState: (key)=>get().viewStates[key] || null,
        initViewState: async (envConfig, id, key, isPrimary = true, reload = false)=>{
            const booksData = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useBookDataStore"].getState().booksData;
            const bookData = booksData[id];
            set((state)=>({
                    viewStates: {
                        ...state.viewStates,
                        [key]: {
                            key: '',
                            view: null,
                            viewerKey: '',
                            isPrimary: false,
                            loading: true,
                            inited: false,
                            error: null,
                            progress: null,
                            ribbonVisible: false,
                            ttsEnabled: false,
                            syncing: false,
                            gridInsets: null,
                            viewSettings: null
                        }
                    }
                }));
            try {
                const appService = await envConfig.getAppService();
                const { settings } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"].getState();
                const { library } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$libraryStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useLibraryStore"].getState();
                const book = library.find((b)=>b.hash === id);
                if (!book) {
                    throw new Error('Book not found');
                }
                let bookDoc = bookData?.bookDoc;
                let file = bookData?.file;
                if (!bookDoc || !file || reload) {
                    const content = await appService.loadBookContent(book);
                    file = content.file;
                    console.log('Loading book', key);
                    const doc = await new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$libs$2f$document$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["DocumentLoader"](file).open();
                    bookDoc = doc.book;
                }
                const config = await appService.loadBookConfig(book, settings);
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$toc$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["updateToc"])(bookDoc, config.viewSettings?.sortedTOC ?? false, config.viewSettings?.convertChineseVariant ?? 'none');
                if (!bookDoc.metadata.title) {
                    bookDoc.metadata.title = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$path$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getBaseFilename"])(file.name);
                }
                book.sourceTitle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$book$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["formatTitle"])(bookDoc.metadata.title);
                // Correct language codes mistakenly set with language names
                if (typeof bookDoc.metadata?.language === 'string') {
                    if (bookDoc.metadata.language in __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["SUPPORTED_LANGNAMES"]) {
                        bookDoc.metadata.language = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["SUPPORTED_LANGNAMES"][bookDoc.metadata.language];
                    }
                }
                // Set the book's language for formerly imported books, newly imported books have this field set
                const primaryLanguage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$book$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getPrimaryLanguage"])(bookDoc.metadata.language);
                book.primaryLanguage = book.primaryLanguage ?? primaryLanguage;
                book.metadata = book.metadata ?? bookDoc.metadata;
                // TODO: uncomment this when we can ensure metaHash is correctly generated for all books
                // book.metaHash = book.metaHash ?? getMetadataHash(bookDoc.metadata);
                book.metaHash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$book$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getMetadataHash"])(bookDoc.metadata);
                const isFixedLayout = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$types$2f$book$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["FIXED_LAYOUT_FORMATS"].has(book.format);
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useBookDataStore"].setState((state)=>({
                        booksData: {
                            ...state.booksData,
                            [id]: {
                                id,
                                book,
                                file,
                                config,
                                bookDoc,
                                isFixedLayout
                            }
                        }
                    }));
                const configViewSettings = config.viewSettings;
                const globalViewSettings = settings.globalViewSettings;
                set((state)=>({
                        viewStates: {
                            ...state.viewStates,
                            [key]: {
                                ...state.viewStates[key],
                                key,
                                view: null,
                                viewerKey: `${key}-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["uniqueId"])()}`,
                                isPrimary,
                                loading: false,
                                inited: false,
                                error: null,
                                progress: null,
                                ribbonVisible: false,
                                ttsEnabled: false,
                                syncing: false,
                                gridInsets: null,
                                viewSettings: {
                                    ...globalViewSettings,
                                    ...configViewSettings
                                }
                            }
                        }
                    }));
            } catch (error) {
                console.error(error);
                set((state)=>({
                        viewStates: {
                            ...state.viewStates,
                            [key]: {
                                ...state.viewStates[key],
                                key: '',
                                view: null,
                                viewerKey: '',
                                isPrimary: false,
                                loading: false,
                                inited: false,
                                error: 'Failed to load book.',
                                progress: null,
                                ribbonVisible: false,
                                ttsEnabled: false,
                                syncing: false,
                                gridInsets: null,
                                viewSettings: null
                            }
                        }
                    }));
                throw error;
            }
        },
        getViewSettings: (key)=>get().viewStates[key]?.viewSettings || null,
        setViewSettings: (key, viewSettings)=>{
            if (!key) return;
            const id = key.split('-')[0];
            const bookData = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useBookDataStore"].getState().booksData[id];
            const viewState = get().viewStates[key];
            if (!viewState || !bookData) return;
            if (viewState.isPrimary) {
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useBookDataStore"].setState((state)=>({
                        booksData: {
                            ...state.booksData,
                            [id]: {
                                ...bookData,
                                config: {
                                    ...bookData.config,
                                    updatedAt: Date.now(),
                                    viewSettings
                                }
                            }
                        }
                    }));
            }
            set((state)=>({
                    viewStates: {
                        ...state.viewStates,
                        [key]: {
                            ...state.viewStates[key],
                            viewSettings
                        }
                    }
                }));
        },
        getProgress: (key)=>get().viewStates[key]?.progress || null,
        setProgress: (key, location, tocItem, section, pageinfo, timeinfo, range)=>set((state)=>{
                const id = key.split('-')[0];
                const bookData = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useBookDataStore"].getState().booksData[id];
                const viewState = state.viewStates[key];
                if (!viewState || !bookData) return state;
                const pagePressInfo = bookData.isFixedLayout ? section : pageinfo;
                const progress = [
                    pagePressInfo.current + 1,
                    pagePressInfo.total
                ];
                // Update library book progress
                const { library, setLibrary } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$libraryStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useLibraryStore"].getState();
                const bookIndex = library.findIndex((b)=>b.hash === id);
                if (bookIndex !== -1) {
                    const updatedLibrary = [
                        ...library
                    ];
                    const existingBook = updatedLibrary[bookIndex];
                    updatedLibrary[bookIndex] = {
                        ...existingBook,
                        progress,
                        updatedAt: Date.now()
                    };
                    setLibrary(updatedLibrary);
                }
                const oldConfig = bookData.config;
                const newConfig = {
                    ...bookData.config,
                    progress,
                    location
                };
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useBookDataStore"].setState((state)=>({
                        booksData: {
                            ...state.booksData,
                            [id]: {
                                ...bookData,
                                config: viewState.isPrimary ? newConfig : oldConfig
                            }
                        }
                    }));
                return {
                    viewStates: {
                        ...state.viewStates,
                        [key]: {
                            ...viewState,
                            progress: {
                                ...viewState.progress,
                                location,
                                sectionHref: tocItem?.href,
                                sectionLabel: tocItem?.label,
                                sectionId: tocItem?.id,
                                section,
                                pageinfo,
                                timeinfo,
                                range
                            }
                        }
                    }
                };
            }),
        setBookmarkRibbonVisibility: (key, visible)=>set((state)=>({
                    viewStates: {
                        ...state.viewStates,
                        [key]: {
                            ...state.viewStates[key],
                            ribbonVisible: visible
                        }
                    }
                })),
        setTTSEnabled: (key, enabled)=>set((state)=>({
                    viewStates: {
                        ...state.viewStates,
                        [key]: {
                            ...state.viewStates[key],
                            ttsEnabled: enabled
                        }
                    }
                })),
        setIsSyncing: (key, syncing)=>set((state)=>({
                    viewStates: {
                        ...state.viewStates,
                        [key]: {
                            ...state.viewStates[key],
                            syncing
                        }
                    }
                })),
        getGridInsets: (key)=>get().viewStates[key]?.gridInsets || {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
        setGridInsets: (key, insets)=>set((state)=>({
                    viewStates: {
                        ...state.viewStates,
                        [key]: {
                            ...state.viewStates[key],
                            gridInsets: insets
                        }
                    }
                })),
        setViewInited: (key, inited)=>set((state)=>({
                    viewStates: {
                        ...state.viewStates,
                        [key]: {
                            ...state.viewStates[key],
                            inited
                        }
                    }
                })),
        recreateViewer: (envConfig, key)=>{
            const id = key.split('-')[0];
            get().initViewState(envConfig, id, key, true, true).then(()=>{
                set((state)=>({
                        viewStates: {
                            ...state.viewStates,
                            [key]: {
                                ...state.viewStates[key],
                                viewerKey: `${key}-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["uniqueId"])()}`
                            }
                        }
                    }));
            });
        }
    }));
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/readest-app/src/store/sidebarStore.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "useSidebarStore",
    ()=>useSidebarStore
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$zustand__$5b$external$5d$__$28$zustand$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/zustand [external] (zustand, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$zustand__$5b$external$5d$__$28$zustand$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$zustand__$5b$external$5d$__$28$zustand$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
const defaultSearchNavState = {
    searchTerm: '',
    searchResults: null,
    searchResultIndex: 0,
    searchProgress: 1
};
const defaultBooknotesNavState = {
    activeBooknoteType: null,
    booknoteResults: null,
    booknoteIndex: 0
};
const useSidebarStore = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$zustand__$5b$external$5d$__$28$zustand$2c$__esm_import$29$__["create"])((set, get)=>({
        sideBarBookKey: null,
        sideBarWidth: '',
        isSideBarVisible: false,
        isSideBarPinned: false,
        // Per-book navigation states
        searchNavStates: {},
        booknotesNavStates: {},
        searchStatuses: {},
        getIsSideBarVisible: ()=>get().isSideBarVisible,
        getSideBarWidth: ()=>get().sideBarWidth,
        setSideBarBookKey: (key)=>set({
                sideBarBookKey: key
            }),
        setSideBarWidth: (width)=>set({
                sideBarWidth: width
            }),
        toggleSideBar: ()=>set((state)=>({
                    isSideBarVisible: !state.isSideBarVisible
                })),
        toggleSideBarPin: ()=>set((state)=>({
                    isSideBarPinned: !state.isSideBarPinned
                })),
        setSideBarVisible: (visible)=>set({
                isSideBarVisible: visible
            }),
        setSideBarPin: (pinned)=>set({
                isSideBarPinned: pinned
            }),
        // Search actions
        getSearchStatus: (bookKey)=>{
            return get().searchStatuses[bookKey] || null;
        },
        getSearchNavState: (bookKey)=>{
            return get().searchNavStates[bookKey] || defaultSearchNavState;
        },
        setSearchTerm: (bookKey, term)=>set((state)=>({
                    searchNavStates: {
                        ...state.searchNavStates,
                        [bookKey]: {
                            ...state.searchNavStates[bookKey] || defaultSearchNavState,
                            searchTerm: term
                        }
                    }
                })),
        setSearchResults: (bookKey, results)=>set((state)=>({
                    searchNavStates: {
                        ...state.searchNavStates,
                        [bookKey]: {
                            ...state.searchNavStates[bookKey] || defaultSearchNavState,
                            searchResults: results
                        }
                    }
                })),
        setSearchResultIndex: (bookKey, index)=>set((state)=>({
                    searchNavStates: {
                        ...state.searchNavStates,
                        [bookKey]: {
                            ...state.searchNavStates[bookKey] || defaultSearchNavState,
                            searchResultIndex: index
                        }
                    }
                })),
        setSearchProgress: (bookKey, progress)=>set((state)=>({
                    searchNavStates: {
                        ...state.searchNavStates,
                        [bookKey]: {
                            ...state.searchNavStates[bookKey] || defaultSearchNavState,
                            searchProgress: progress
                        }
                    }
                })),
        clearSearch: (bookKey)=>set((state)=>({
                    searchNavStates: {
                        ...state.searchNavStates,
                        [bookKey]: {
                            ...defaultSearchNavState
                        }
                    },
                    searchStatuses: {
                        ...state.searchStatuses,
                        [bookKey]: 'terminated'
                    }
                })),
        setSearchStatus: (bookKey, status)=>set((state)=>({
                    searchStatuses: {
                        ...state.searchStatuses,
                        [bookKey]: status
                    }
                })),
        // Booknotes navigation actions
        getBooknotesNavState: (bookKey)=>{
            return get().booknotesNavStates[bookKey] || defaultBooknotesNavState;
        },
        setActiveBooknoteType: (bookKey, type)=>set((state)=>({
                    booknotesNavStates: {
                        ...state.booknotesNavStates,
                        [bookKey]: {
                            ...state.booknotesNavStates[bookKey] || defaultBooknotesNavState,
                            activeBooknoteType: type
                        }
                    }
                })),
        setBooknoteResults: (bookKey, results)=>set((state)=>({
                    booknotesNavStates: {
                        ...state.booknotesNavStates,
                        [bookKey]: {
                            ...state.booknotesNavStates[bookKey] || defaultBooknotesNavState,
                            booknoteResults: results
                        }
                    }
                })),
        setBooknoteIndex: (bookKey, index)=>set((state)=>({
                    booknotesNavStates: {
                        ...state.booknotesNavStates,
                        [bookKey]: {
                            ...state.booknotesNavStates[bookKey] || defaultBooknotesNavState,
                            booknoteIndex: index
                        }
                    }
                })),
        clearBooknotesNav: (bookKey)=>set((state)=>({
                    booknotesNavStates: {
                        ...state.booknotesNavStates,
                        [bookKey]: {
                            ...defaultBooknotesNavState
                        }
                    }
                }))
    }));
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/readest-app/src/store/notebookStore.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "useNotebookStore",
    ()=>useNotebookStore
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$zustand__$5b$external$5d$__$28$zustand$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/zustand [external] (zustand, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$zustand__$5b$external$5d$__$28$zustand$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$zustand__$5b$external$5d$__$28$zustand$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
const useNotebookStore = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$zustand__$5b$external$5d$__$28$zustand$2c$__esm_import$29$__["create"])((set, get)=>({
        notebookWidth: '',
        isNotebookVisible: false,
        isNotebookPinned: false,
        notebookNewAnnotation: null,
        notebookEditAnnotation: null,
        notebookAnnotationDrafts: {},
        getIsNotebookVisible: ()=>get().isNotebookVisible,
        getNotebookWidth: ()=>get().notebookWidth,
        setNotebookWidth: (width)=>set({
                notebookWidth: width
            }),
        toggleNotebook: ()=>set((state)=>({
                    isNotebookVisible: !state.isNotebookVisible
                })),
        toggleNotebookPin: ()=>set((state)=>({
                    isNotebookPinned: !state.isNotebookPinned
                })),
        setNotebookVisible: (visible)=>set({
                isNotebookVisible: visible
            }),
        setNotebookPin: (pinned)=>set({
                isNotebookPinned: pinned
            }),
        setNotebookNewAnnotation: (selection)=>set({
                notebookNewAnnotation: selection
            }),
        setNotebookEditAnnotation: (note)=>set({
                notebookEditAnnotation: note
            }),
        saveNotebookAnnotationDraft: (key, note)=>set((state)=>({
                    notebookAnnotationDrafts: {
                        ...state.notebookAnnotationDrafts,
                        [key]: note
                    }
                })),
        getNotebookAnnotationDraft: (key)=>get().notebookAnnotationDrafts[key]
    }));
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/readest-app/src/store/deviceStore.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "useDeviceControlStore",
    ()=>useDeviceControlStore
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$zustand__$5b$external$5d$__$28$zustand$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/zustand [external] (zustand, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$bridge$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/bridge.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/event.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$zustand__$5b$external$5d$__$28$zustand$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$bridge$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$zustand__$5b$external$5d$__$28$zustand$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$bridge$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
const handleNativeKeyDown = (keyName)=>{
    if (keyName === 'VolumeUp' || keyName === 'VolumeDown') {
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["eventDispatcher"].dispatch('native-key-down', {
            keyName
        });
    }
    if (keyName === 'Back') {
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["eventDispatcher"].dispatchSync('native-key-down', {
            keyName
        });
    }
    return false;
};
const useDeviceControlStore = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$zustand__$5b$external$5d$__$28$zustand$2c$__esm_import$29$__["create"])((set, get)=>({
        volumeKeysIntercepted: false,
        backKeyIntercepted: false,
        volumeKeysInterceptionCount: 0,
        backKeyInterceptionCount: 0,
        acquireVolumeKeyInterception: ()=>{
            const { volumeKeysInterceptionCount } = get();
            if (volumeKeysInterceptionCount == 0) {
                window.onNativeKeyDown = handleNativeKeyDown;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$bridge$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["interceptKeys"])({
                    volumeKeys: true
                });
                set({
                    volumeKeysIntercepted: true
                });
            }
            set({
                volumeKeysInterceptionCount: volumeKeysInterceptionCount + 1
            });
        },
        releaseVolumeKeyInterception: ()=>{
            const { volumeKeysInterceptionCount } = get();
            if (volumeKeysInterceptionCount <= 1) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$bridge$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["interceptKeys"])({
                    volumeKeys: false
                });
                set({
                    volumeKeysIntercepted: false,
                    volumeKeysInterceptionCount: 0
                });
            } else {
                set({
                    volumeKeysInterceptionCount: volumeKeysInterceptionCount - 1
                });
            }
        },
        acquireBackKeyInterception: ()=>{
            const { backKeyInterceptionCount } = get();
            if (backKeyInterceptionCount == 0) {
                window.onNativeKeyDown = handleNativeKeyDown;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$bridge$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["interceptKeys"])({
                    backKey: true
                });
                set({
                    backKeyIntercepted: true
                });
            }
            set({
                backKeyInterceptionCount: backKeyInterceptionCount + 1
            });
        },
        releaseBackKeyInterception: ()=>{
            const { backKeyInterceptionCount } = get();
            if (backKeyInterceptionCount <= 1) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$bridge$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["interceptKeys"])({
                    backKey: false
                });
                set({
                    backKeyIntercepted: false,
                    backKeyInterceptionCount: 0
                });
            } else {
                set({
                    backKeyInterceptionCount: backKeyInterceptionCount - 1
                });
            }
        },
        listenToNativeTouchEvents: ()=>{
            window.onNativeTouch = (event)=>{
                return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["eventDispatcher"].dispatch('native-touch', event);
            };
        },
        getScreenBrightness: async ()=>{
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$bridge$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getScreenBrightness"])();
            return res.brightness;
        },
        setScreenBrightness: async (brightness)=>{
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$bridge$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["setScreenBrightness"])({
                brightness
            });
        }
    }));
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/readest-app/src/store/transferStore.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "useTransferStore",
    ()=>useTransferStore
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$zustand__$5b$external$5d$__$28$zustand$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/zustand [external] (zustand, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$zustand__$5b$external$5d$__$28$zustand$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$zustand__$5b$external$5d$__$28$zustand$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
const generateTransferId = ()=>{
    return `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
};
const useTransferStore = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$zustand__$5b$external$5d$__$28$zustand$2c$__esm_import$29$__["create"])((set, get)=>({
        transfers: {},
        isQueuePaused: false,
        isTransferQueueOpen: false,
        maxConcurrent: 2,
        activeCount: 0,
        setIsTransferQueueOpen: (isOpen)=>set({
                isTransferQueueOpen: isOpen
            }),
        addTransfer: (bookHash, bookTitle, type, priority = 10, isBackground = false)=>{
            const id = generateTransferId();
            const transfer = {
                id,
                bookHash,
                bookTitle,
                type,
                status: 'pending',
                progress: 0,
                totalBytes: 0,
                transferredBytes: 0,
                transferSpeed: 0,
                retryCount: 0,
                maxRetries: 3,
                createdAt: Date.now(),
                priority,
                isBackground
            };
            set((state)=>({
                    transfers: {
                        ...state.transfers,
                        [id]: transfer
                    }
                }));
            return id;
        },
        removeTransfer: (transferId)=>{
            set((state)=>{
                const { [transferId]: _, ...remaining } = state.transfers;
                return {
                    transfers: remaining
                };
            });
        },
        updateTransferProgress: (transferId, progress, transferred, total, speed)=>{
            set((state)=>{
                const transfer = state.transfers[transferId];
                if (!transfer) return state;
                return {
                    transfers: {
                        ...state.transfers,
                        [transferId]: {
                            ...transfer,
                            progress,
                            transferredBytes: transferred,
                            totalBytes: total,
                            transferSpeed: speed
                        }
                    }
                };
            });
        },
        setTransferStatus: (transferId, status, error)=>{
            set((state)=>{
                const transfer = state.transfers[transferId];
                if (!transfer) return state;
                const updates = {
                    status,
                    error
                };
                if (status === 'in_progress' && !transfer.startedAt) {
                    updates.startedAt = Date.now();
                }
                if (status === 'completed' || status === 'failed' || status === 'cancelled') {
                    updates.completedAt = Date.now();
                }
                return {
                    transfers: {
                        ...state.transfers,
                        [transferId]: {
                            ...transfer,
                            ...updates
                        }
                    }
                };
            });
        },
        retryTransfer: (transferId)=>{
            set((state)=>{
                const transfer = state.transfers[transferId];
                if (!transfer) return state;
                return {
                    transfers: {
                        ...state.transfers,
                        [transferId]: {
                            ...transfer,
                            status: 'pending',
                            progress: 0,
                            transferredBytes: 0,
                            transferSpeed: 0,
                            error: undefined,
                            startedAt: undefined,
                            completedAt: undefined
                        }
                    }
                };
            });
        },
        incrementRetryCount: (transferId)=>{
            set((state)=>{
                const transfer = state.transfers[transferId];
                if (!transfer) return state;
                return {
                    transfers: {
                        ...state.transfers,
                        [transferId]: {
                            ...transfer,
                            retryCount: transfer.retryCount + 1
                        }
                    }
                };
            });
        },
        pauseQueue: ()=>set({
                isQueuePaused: true
            }),
        resumeQueue: ()=>set({
                isQueuePaused: false
            }),
        clearCompleted: ()=>{
            set((state)=>{
                const remaining = {};
                Object.entries(state.transfers).forEach(([id, transfer])=>{
                    if (transfer.status !== 'completed') {
                        remaining[id] = transfer;
                    }
                });
                return {
                    transfers: remaining
                };
            });
        },
        clearFailed: ()=>{
            set((state)=>{
                const remaining = {};
                Object.entries(state.transfers).forEach(([id, transfer])=>{
                    if (transfer.status !== 'failed' && transfer.status !== 'cancelled') {
                        remaining[id] = transfer;
                    }
                });
                return {
                    transfers: remaining
                };
            });
        },
        clearAll: ()=>set({
                transfers: {}
            }),
        getPendingTransfers: ()=>{
            return Object.values(get().transfers).filter((t)=>t.status === 'pending');
        },
        getActiveTransfers: ()=>{
            return Object.values(get().transfers).filter((t)=>t.status === 'in_progress');
        },
        getFailedTransfers: ()=>{
            return Object.values(get().transfers).filter((t)=>t.status === 'failed' || t.status === 'cancelled');
        },
        getCompletedTransfers: ()=>{
            return Object.values(get().transfers).filter((t)=>t.status === 'completed');
        },
        getTransferByBookHash: (bookHash, type)=>{
            return Object.values(get().transfers).find((t)=>t.bookHash === bookHash && t.type === type && [
                    'pending',
                    'in_progress'
                ].includes(t.status));
        },
        getQueueStats: ()=>{
            const transfers = Object.values(get().transfers);
            return {
                pending: transfers.filter((t)=>t.status === 'pending').length,
                active: transfers.filter((t)=>t.status === 'in_progress').length,
                completed: transfers.filter((t)=>t.status === 'completed').length,
                failed: transfers.filter((t)=>t.status === 'failed' || t.status === 'cancelled').length,
                total: transfers.length
            };
        },
        setActiveCount: (count)=>set({
                activeCount: count
            }),
        restoreTransfers: (transfers, isQueuePaused)=>{
            // Reset in_progress transfers to pending when restoring
            const restoredTransfers = {};
            Object.entries(transfers).forEach(([id, transfer])=>{
                if (transfer.status === 'in_progress') {
                    restoredTransfers[id] = {
                        ...transfer,
                        status: 'pending',
                        progress: 0,
                        transferredBytes: 0,
                        transferSpeed: 0
                    };
                } else {
                    restoredTransfers[id] = transfer;
                }
            });
            set({
                transfers: restoredTransfers,
                isQueuePaused
            });
        }
    }));
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/readest-app/src/store/proofreadStore.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "useProofreadStore",
    ()=>useProofreadStore,
    "validateReplacementRulePattern",
    ()=>validateReplacementRulePattern
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$zustand__$5b$external$5d$__$28$zustand$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/zustand [external] (zustand, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/readerStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/settingsStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/bookDataStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/misc.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$zustand__$5b$external$5d$__$28$zustand$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$zustand__$5b$external$5d$__$28$zustand$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
function createProofreadRule(opts) {
    return {
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["uniqueId"])(),
        scope: opts.scope,
        pattern: opts.pattern,
        replacement: opts.replacement,
        cfi: opts.cfi,
        sectionHref: opts.sectionHref,
        isRegex: opts.isRegex ?? false,
        enabled: opts.enabled ?? true,
        caseSensitive: opts.caseSensitive ?? true,
        order: opts.order ?? 1000,
        wholeWord: opts.wholeWord ?? true,
        onlyForTTS: opts.onlyForTTS ?? false
    };
}
function mergeRules(globalRules, bookRules) {
    const map = new Map();
    (globalRules ?? []).forEach((r)=>map.set(r.id, r));
    (bookRules ?? []).forEach((r)=>map.set(r.id, r));
    return [
        ...map.values()
    ].sort((a, b)=>(a.order ?? 0) - (b.order ?? 0));
}
const useProofreadStore = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$zustand__$5b$external$5d$__$28$zustand$2c$__esm_import$29$__["create"])(()=>({
        getBookRules: (bookKey)=>{
            const { getViewSettings } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useReaderStore"].getState();
            const viewSettings = getViewSettings(bookKey);
            return viewSettings?.proofreadRules || [];
        },
        getGlobalRules: ()=>{
            const { settings } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"].getState();
            return settings.globalViewSettings.proofreadRules || [];
        },
        getMergedRules: (bookKey)=>{
            const { settings } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"].getState();
            const { getViewSettings } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useReaderStore"].getState();
            const viewSettings = getViewSettings(bookKey);
            return mergeRules(settings.globalViewSettings.proofreadRules, viewSettings?.proofreadRules);
        },
        addRule: async (envConfig, bookKey, options)=>{
            const rule = createProofreadRule(options);
            if (options.scope === 'library') {
                await addGlobalRule(envConfig, rule);
            } else {
                await addBookRule(envConfig, bookKey, rule, options.scope);
            }
            return rule;
        },
        updateRule: async (envConfig, bookKey, ruleId, updates)=>{
            if (updates.scope === 'library') {
                await updateGlobalRule(envConfig, ruleId, updates);
            } else {
                await updateBookRule(envConfig, bookKey, ruleId, updates);
            }
        },
        removeRule: async (envConfig, bookKey, ruleId, scope)=>{
            if (scope === 'library') {
                await removeGlobalRule(envConfig, ruleId);
            } else {
                await removeBookRule(envConfig, bookKey, ruleId);
            }
        },
        toggleRule: async (envConfig, bookKey, ruleId)=>{
            const { getMergedRules } = useProofreadStore.getState();
            const mergedRules = getMergedRules(bookKey);
            const rule = mergedRules.find((r)=>r.id === ruleId);
            if (!rule) {
                throw new Error(`Rule not found: ${ruleId}`);
            }
            const { updateRule } = useProofreadStore.getState();
            await updateRule(envConfig, bookKey, ruleId, {
                enabled: !rule.enabled
            });
        }
    }));
async function addBookRule(envConfig, bookKey, rule, scope) {
    const { getViewSettings } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useReaderStore"].getState();
    const viewSettings = getViewSettings(bookKey);
    if (!viewSettings) return;
    const existingRules = viewSettings.proofreadRules || [];
    if (scope === 'selection') {
        // Always add new single-instance rules (each has unique ID)
        existingRules.push(rule);
    } else {
        // Check for duplicates in book scope
        const existing = existingRules.find((r)=>r.pattern === rule.pattern && r.isRegex === rule.isRegex && r.scope !== 'selection');
        if (existing) {
            Object.assign(existing, {
                replacement: rule.replacement,
                enabled: rule.enabled,
                order: rule.order
            });
        } else {
            existingRules.push(rule);
        }
    }
    await updateBookViewSettings(envConfig, bookKey, existingRules);
}
async function updateBookRule(envConfig, bookKey, ruleId, updates) {
    const { getViewSettings } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useReaderStore"].getState();
    const viewSettings = getViewSettings(bookKey);
    if (!viewSettings) {
        throw new Error(`No viewSettings found for book: ${bookKey}`);
    }
    const existingRules = viewSettings.proofreadRules || [];
    const updatedRules = existingRules.map((r)=>r.id === ruleId ? {
            ...r,
            ...updates
        } : r);
    await updateBookViewSettings(envConfig, bookKey, updatedRules);
}
async function removeBookRule(envConfig, bookKey, ruleId) {
    const { getViewSettings } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useReaderStore"].getState();
    const viewSettings = getViewSettings(bookKey);
    if (!viewSettings) {
        throw new Error(`No viewSettings found for book: ${bookKey}`);
    }
    const existingRules = viewSettings.proofreadRules || [];
    const filteredRules = existingRules.filter((r)=>r.id !== ruleId);
    await updateBookViewSettings(envConfig, bookKey, filteredRules);
}
async function updateBookViewSettings(envConfig, bookKey, rules) {
    const { getViewSettings, setViewSettings } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useReaderStore"].getState();
    const { getConfig, saveConfig } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useBookDataStore"].getState();
    const { settings } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"].getState();
    const viewSettings = getViewSettings(bookKey);
    if (!viewSettings) {
        throw new Error(`No viewSettings found for book: ${bookKey}`);
    }
    const updatedViewSettings = {
        ...viewSettings,
        proofreadRules: rules
    };
    setViewSettings(bookKey, updatedViewSettings);
    const config = getConfig(bookKey);
    if (config) {
        await saveConfig(envConfig, bookKey, {
            ...config,
            viewSettings: updatedViewSettings,
            updatedAt: Date.now()
        }, settings);
    }
}
async function addGlobalRule(envConfig, rule) {
    const { settings } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"].getState();
    if (!settings || !settings.globalViewSettings) return;
    const globalRules = settings.globalViewSettings.proofreadRules || [];
    const existing = globalRules.find((r)=>r.pattern === rule.pattern && r.isRegex === rule.isRegex);
    if (existing) {
        Object.assign(existing, {
            replacement: rule.replacement,
            enabled: rule.enabled,
            order: rule.order
        });
        await updateGlobalSettings(envConfig, globalRules);
    } else {
        await updateGlobalSettings(envConfig, [
            ...globalRules,
            rule
        ]);
    }
}
async function updateGlobalRule(envConfig, ruleId, updates) {
    const { settings } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"].getState();
    const globalRules = settings.globalViewSettings.proofreadRules || [];
    const updatedRules = globalRules.map((r)=>r.id === ruleId ? {
            ...r,
            ...updates
        } : r);
    await updateGlobalSettings(envConfig, updatedRules);
}
async function removeGlobalRule(envConfig, ruleId) {
    const { settings } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"].getState();
    const globalRules = settings.globalViewSettings.proofreadRules || [];
    const filteredRules = globalRules.filter((r)=>r.id !== ruleId);
    await updateGlobalSettings(envConfig, filteredRules);
}
async function updateGlobalSettings(envConfig, rules) {
    const { settings, setSettings, saveSettings } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"].getState();
    const updatedSettings = {
        ...settings,
        globalViewSettings: {
            ...settings.globalViewSettings,
            proofreadRules: rules
        }
    };
    setSettings(updatedSettings);
    await saveSettings(envConfig, updatedSettings);
}
function validateReplacementRulePattern(pattern, isRegex) {
    if (!pattern?.trim()) {
        return {
            valid: false,
            error: 'Pattern cannot be empty'
        };
    }
    if (isRegex) {
        try {
            new RegExp(pattern);
            return {
                valid: true
            };
        } catch (error) {
            return {
                valid: false,
                error: error instanceof Error ? error.message : 'Invalid regex pattern'
            };
        }
    }
    return {
        valid: true
    };
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/readest-app/src/store/parallelViewStore.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "useParallelViewStore",
    ()=>useParallelViewStore
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$zustand__$5b$external$5d$__$28$zustand$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/zustand [external] (zustand, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$zustand__$5b$external$5d$__$28$zustand$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$zustand__$5b$external$5d$__$28$zustand$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
const useParallelViewStore = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$zustand__$5b$external$5d$__$28$zustand$2c$__esm_import$29$__["create"])((set, get)=>({
        parallelViews: [],
        setParallel: (bookKeys)=>{
            set((state)=>{
                const uniqueKeys = [
                    ...new Set(bookKeys.filter((key)=>key.trim() !== ''))
                ];
                if (uniqueKeys.length < 2) {
                    return state;
                }
                const newGroups = [
                    ...state.parallelViews
                ];
                const existingGroups = newGroups.filter((group)=>uniqueKeys.some((key)=>group.has(key)));
                let targetGroup;
                if (existingGroups.length === 0) {
                    targetGroup = new Set(uniqueKeys);
                    newGroups.push(targetGroup);
                } else if (existingGroups.length === 1) {
                    targetGroup = existingGroups[0];
                    uniqueKeys.forEach((key)=>targetGroup.add(key));
                } else {
                    targetGroup = existingGroups[0];
                    existingGroups.slice(1).forEach((group)=>{
                        group.forEach((key)=>targetGroup.add(key));
                        const index = newGroups.indexOf(group);
                        if (index > -1) {
                            newGroups.splice(index, 1);
                        }
                    });
                    uniqueKeys.forEach((key)=>targetGroup.add(key));
                }
                console.log('Set parallel groups:', newGroups);
                return {
                    parallelViews: newGroups
                };
            });
        },
        unsetParallel: (bookKeys)=>{
            set((state)=>{
                const uniqueKeys = [
                    ...new Set(bookKeys.filter((key)=>key.trim() !== ''))
                ];
                if (uniqueKeys.length === 0) {
                    return state;
                }
                const newGroups = [
                    ...state.parallelViews
                ];
                const affectedGroups = newGroups.filter((group)=>uniqueKeys.some((key)=>group.has(key)));
                affectedGroups.forEach((group)=>{
                    uniqueKeys.forEach((key)=>group.delete(key));
                    if (group.size <= 1) {
                        const index = newGroups.indexOf(group);
                        if (index > -1) {
                            newGroups.splice(index, 1);
                        }
                    }
                });
                console.log('Unset parallel groups:', newGroups);
                return {
                    parallelViews: newGroups
                };
            });
        },
        areParallels (bookKey1, bookKey2) {
            const { parallelViews } = get();
            return parallelViews.some((group)=>group.has(bookKey1) && group.has(bookKey2));
        },
        getParallels (bookKey) {
            const { parallelViews } = get();
            return parallelViews.find((group)=>group.has(bookKey)) || null;
        }
    }));
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/readest-app/src/store/trafficLightStore.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "useTrafficLightStore",
    ()=>useTrafficLightStore
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$zustand__$5b$external$5d$__$28$zustand$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/zustand [external] (zustand, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$api$2f$core__$5b$external$5d$__$2840$tauri$2d$apps$2f$api$2f$core$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@tauri-apps/api/core [external] (@tauri-apps/api/core, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$zustand__$5b$external$5d$__$28$zustand$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$api$2f$core__$5b$external$5d$__$2840$tauri$2d$apps$2f$api$2f$core$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$zustand__$5b$external$5d$__$28$zustand$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$api$2f$core__$5b$external$5d$__$2840$tauri$2d$apps$2f$api$2f$core$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
const WINDOW_CONTROL_PAD_X = 10.0;
const WINDOW_CONTROL_PAD_Y = 22.0;
const useTrafficLightStore = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$zustand__$5b$external$5d$__$28$zustand$2c$__esm_import$29$__["create"])((set, get)=>{
    return {
        appService: undefined,
        isTrafficLightVisible: false,
        shouldShowTrafficLight: false,
        trafficLightInFullscreen: false,
        initializeTrafficLightStore: (appService)=>{
            set({
                appService,
                isTrafficLightVisible: appService.hasTrafficLight,
                shouldShowTrafficLight: appService.hasTrafficLight
            });
        },
        setTrafficLightVisibility: async (visible, position)=>{
            const { getCurrentWindow } = await __turbopack_context__.A("[externals]/@tauri-apps/api/window [external] (@tauri-apps/api/window, esm_import, async loader)");
            const currentWindow = getCurrentWindow();
            const isFullscreen = await currentWindow.isFullscreen();
            set({
                isTrafficLightVisible: !isFullscreen && visible,
                shouldShowTrafficLight: visible,
                trafficLightInFullscreen: isFullscreen
            });
            (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$api$2f$core__$5b$external$5d$__$2840$tauri$2d$apps$2f$api$2f$core$2c$__esm_import$29$__["invoke"])('set_traffic_lights', {
                visible: visible,
                x: position?.x ?? WINDOW_CONTROL_PAD_X,
                y: position?.y ?? WINDOW_CONTROL_PAD_Y
            });
        },
        initializeTrafficLightListeners: async ()=>{
            const { getCurrentWindow } = await __turbopack_context__.A("[externals]/@tauri-apps/api/window [external] (@tauri-apps/api/window, esm_import, async loader)");
            const currentWindow = getCurrentWindow();
            const unlistenEnterFullScreen = await currentWindow.listen('will-enter-fullscreen', ()=>{
                set({
                    isTrafficLightVisible: false,
                    trafficLightInFullscreen: true
                });
            });
            const unlistenExitFullScreen = await currentWindow.listen('will-exit-fullscreen', ()=>{
                const { shouldShowTrafficLight } = get();
                set({
                    isTrafficLightVisible: shouldShowTrafficLight,
                    trafficLightInFullscreen: false
                });
            });
            set({
                unlistenEnterFullScreen,
                unlistenExitFullScreen
            });
        },
        cleanupTrafficLightListeners: ()=>{
            const { unlistenEnterFullScreen, unlistenExitFullScreen } = get();
            if (unlistenEnterFullScreen) unlistenEnterFullScreen();
            if (unlistenExitFullScreen) unlistenExitFullScreen();
            set({
                unlistenEnterFullScreen: undefined,
                unlistenExitFullScreen: undefined
            });
        }
    };
});
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/readest-app/src/store/customFontStore.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "useCustomFontStore",
    ()=>useCustomFontStore
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$zustand__$5b$external$5d$__$28$zustand$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/zustand [external] (zustand, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$styles$2f$fonts$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/styles/fonts.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/settingsStore.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$zustand__$5b$external$5d$__$28$zustand$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$styles$2f$fonts$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$zustand__$5b$external$5d$__$28$zustand$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$styles$2f$fonts$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
function toSettingsFont(font) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { blobUrl, loaded, error, ...settingsFont } = font;
    return settingsFont;
}
const useCustomFontStore = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$zustand__$5b$external$5d$__$28$zustand$2c$__esm_import$29$__["create"])((set, get)=>({
        fonts: [],
        loading: false,
        setFonts: (fonts)=>set({
                fonts
            }),
        addFont: (path, options)=>{
            const font = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$styles$2f$fonts$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["createCustomFont"])(path, options);
            const existingFont = get().fonts.find((f)=>f.id === font.id);
            if (existingFont) {
                get().updateFont(font.id, {
                    ...font,
                    path: font.path,
                    downloadedAt: Date.now(),
                    deletedAt: undefined,
                    loaded: false,
                    blobUrl: undefined,
                    error: undefined
                });
                set((state)=>({
                        fonts: [
                            ...state.fonts
                        ]
                    }));
                return existingFont;
            }
            const newFont = {
                ...font,
                downloadedAt: Date.now()
            };
            set((state)=>({
                    fonts: [
                        ...state.fonts,
                        newFont
                    ]
                }));
            return newFont;
        },
        removeFont: (id)=>{
            const font = get().getFont(id);
            if (!font) return false;
            if (font.blobUrl) {
                URL.revokeObjectURL(font.blobUrl);
            }
            const result = get().updateFont(id, {
                deletedAt: Date.now(),
                blobUrl: undefined,
                loaded: false,
                error: undefined
            });
            set((state)=>({
                    fonts: [
                        ...state.fonts
                    ]
                }));
            return result;
        },
        updateFont: (id, updates)=>{
            const state = get();
            const fontIndex = state.fonts.findIndex((font)=>font.id === id);
            if (fontIndex === -1) return false;
            set((state)=>({
                    fonts: state.fonts.map((font, index)=>index === fontIndex ? {
                            ...font,
                            ...updates
                        } : font)
                }));
            return true;
        },
        getFont: (id)=>{
            return get().fonts.find((font)=>font.id === id);
        },
        getAllFonts: ()=>{
            return get().fonts;
        },
        getAvailableFonts: ()=>{
            return get().fonts.filter((font)=>!font.deletedAt);
        },
        clearAllFonts: ()=>{
            const { fonts } = get();
            fonts.forEach((font)=>{
                if (font.blobUrl) {
                    URL.revokeObjectURL(font.blobUrl);
                }
            });
            set({
                fonts: []
            });
        },
        loadFont: async (envConfig, fontId)=>{
            const font = get().getFont(fontId);
            if (!font) {
                throw new Error(`Font with id "${fontId}" not found`);
            }
            if (font.deletedAt) {
                throw new Error(`Font "${font.name}" has been deleted`);
            }
            if (font.loaded && font.blobUrl && !font.error) {
                return font;
            }
            try {
                get().updateFont(fontId, {
                    loaded: false,
                    error: undefined
                });
                const appService = await envConfig.getAppService();
                const fontFile = await appService.openFile(font.path, 'Fonts');
                const format = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$styles$2f$fonts$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getFontFormat"])(font.path);
                const mimeType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$styles$2f$fonts$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getMimeType"])(format);
                const blob = new Blob([
                    await fontFile.arrayBuffer()
                ], {
                    type: mimeType
                });
                const blobUrl = URL.createObjectURL(blob);
                get().updateFont(fontId, {
                    blobUrl,
                    loaded: true,
                    error: undefined
                });
                const updatedFont = get().getFont(fontId);
                return updatedFont;
            } catch (error) {
                const errorMessage = error instanceof Error ? error.message : 'Unknown error';
                get().updateFont(fontId, {
                    loaded: false,
                    error: errorMessage,
                    blobUrl: undefined
                });
                throw error;
            }
        },
        loadFonts: async (envConfig, fontIds)=>{
            set({
                loading: true
            });
            try {
                const results = await Promise.allSettled(fontIds.map((id)=>get().loadFont(envConfig, id)));
                return results.filter((result)=>result.status === 'fulfilled').map((result)=>result.value);
            } finally{
                set({
                    loading: false
                });
            }
        },
        loadAllFonts: async (envConfig)=>{
            const fontIds = get().getAvailableFonts().map((font)=>font.id);
            return await get().loadFonts(envConfig, fontIds);
        },
        unloadFont: (fontId)=>{
            const font = get().getFont(fontId);
            if (font?.blobUrl) {
                URL.revokeObjectURL(font.blobUrl);
            }
            return get().updateFont(fontId, {
                blobUrl: undefined,
                loaded: false,
                error: undefined
            });
        },
        unloadAllFonts: ()=>{
            const fonts = get().getAllFonts();
            fonts.forEach((font)=>{
                if (font.blobUrl) {
                    URL.revokeObjectURL(font.blobUrl);
                }
            });
            fonts.forEach((font)=>{
                get().updateFont(font.id, {
                    blobUrl: undefined,
                    loaded: false,
                    error: undefined
                });
            });
        },
        getFontFamilies: ()=>{
            return get().getAvailableFonts().filter((font)=>font.loaded && !font.error).map((font)=>font.family || font.name).filter((value, index, self)=>self.indexOf(value) === index).sort((a, b)=>a.localeCompare(b));
        },
        getLoadedFonts: ()=>{
            return get().getAvailableFonts().filter((font)=>font.loaded && !font.error);
        },
        isFontLoaded: (fontId)=>{
            const font = get().getFont(fontId);
            return font?.loaded === true && !font.error && !font.deletedAt;
        },
        loadCustomFonts: async (envConfig)=>{
            try {
                const { settings } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"].getState();
                const currentFonts = get().fonts;
                if (settings?.customFonts) {
                    const fonts = settings.customFonts.map((font)=>{
                        const existingFont = currentFonts.find((f)=>f.id === font.id);
                        return {
                            ...font,
                            loaded: existingFont?.loaded || false,
                            error: existingFont?.error,
                            blobUrl: existingFont?.blobUrl
                        };
                    });
                    set({
                        fonts
                    });
                    await get().loadAllFonts(envConfig);
                }
            } catch (error) {
                console.error('Failed to load custom fonts settings:', error);
            }
        },
        saveCustomFonts: async (envConfig)=>{
            try {
                const { settings, setSettings, saveSettings } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"].getState();
                const { fonts } = get();
                settings.customFonts = fonts.map(toSettingsFont);
                setSettings(settings);
                saveSettings(envConfig, settings);
            } catch (error) {
                console.error('Failed to save custom fonts settings:', error);
                throw error;
            }
        }
    }));
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/readest-app/src/types/book.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FIXED_LAYOUT_FORMATS",
    ()=>FIXED_LAYOUT_FORMATS
]);
const FIXED_LAYOUT_FORMATS = new Set([
    'PDF',
    'CBZ'
]);
}),
"[project]/apps/readest-app/src/types/view.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NOTE_PREFIX",
    ()=>NOTE_PREFIX,
    "wrappedFoliateView",
    ()=>wrappedFoliateView
]);
const NOTE_PREFIX = 'foliate-note:';
const wrappedFoliateView = (originalView)=>{
    const originalAddAnnotation = originalView.addAnnotation.bind(originalView);
    originalView.addAnnotation = (note, remove = false)=>{
        // transform BookNote to foliate annotation
        const annotation = {
            value: note.cfi,
            ...note
        };
        return originalAddAnnotation(annotation, remove);
    };
    return originalView;
};
}),
"[project]/apps/readest-app/src/libs/document.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CFI",
    ()=>CFI,
    "DocumentLoader",
    ()=>DocumentLoader,
    "EXTS",
    ()=>EXTS,
    "MIMETYPES",
    ()=>MIMETYPES,
    "getDirection",
    ()=>getDirection,
    "getFileExtFromMimeType",
    ()=>getFileExtFromMimeType,
    "getMimeTypeFromFileExt",
    ()=>getMimeTypeFromFileExt
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$foliate$2d$js$2f$epubcfi$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/foliate-js/epubcfi.js [ssr] (ecmascript)");
;
const CFI = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$foliate$2d$js$2f$epubcfi$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__;
const EXTS = {
    EPUB: 'epub',
    PDF: 'pdf',
    MOBI: 'mobi',
    AZW: 'azw',
    AZW3: 'azw3',
    CBZ: 'cbz',
    FB2: 'fb2',
    FBZ: 'fbz',
    TXT: 'txt',
    MD: 'md'
};
const MIMETYPES = {
    EPUB: [
        'application/epub+zip'
    ],
    PDF: [
        'application/pdf'
    ],
    MOBI: [
        'application/x-mobipocket-ebook'
    ],
    AZW: [
        'application/vnd.amazon.ebook'
    ],
    AZW3: [
        'application/vnd.amazon.mobi8-ebook',
        'application/x-mobi8-ebook'
    ],
    CBZ: [
        'application/vnd.comicbook+zip',
        'application/zip',
        'application/x-cbz'
    ],
    FB2: [
        'application/x-fictionbook+xml',
        'text/xml',
        'application/xml'
    ],
    FBZ: [
        'application/x-zip-compressed-fb2',
        'application/zip'
    ],
    TXT: [
        'text/plain'
    ],
    MD: [
        'text/markdown',
        'text/x-markdown'
    ]
};
class DocumentLoader {
    file;
    constructor(file){
        this.file = file;
    }
    async isZip() {
        const arr = new Uint8Array(await this.file.slice(0, 4).arrayBuffer());
        return arr[0] === 0x50 && arr[1] === 0x4b && arr[2] === 0x03 && arr[3] === 0x04;
    }
    async isPDF() {
        const arr = new Uint8Array(await this.file.slice(0, 5).arrayBuffer());
        return arr[0] === 0x25 && arr[1] === 0x50 && arr[2] === 0x44 && arr[3] === 0x46 && arr[4] === 0x2d;
    }
    async makeZipLoader() {
        const getComment = async ()=>{
            const EOCD_SIGNATURE = [
                0x50,
                0x4b,
                0x05,
                0x06
            ];
            const maxEOCDSearch = 1024 * 64;
            const sliceSize = Math.min(maxEOCDSearch, this.file.size);
            const tail = await this.file.slice(this.file.size - sliceSize, this.file.size).arrayBuffer();
            const bytes = new Uint8Array(tail);
            for(let i = bytes.length - 22; i >= 0; i--){
                if (bytes[i] === EOCD_SIGNATURE[0] && bytes[i + 1] === EOCD_SIGNATURE[1] && bytes[i + 2] === EOCD_SIGNATURE[2] && bytes[i + 3] === EOCD_SIGNATURE[3]) {
                    const commentLength = bytes[i + 20] + (bytes[i + 21] << 8);
                    const commentStart = i + 22;
                    const commentBytes = bytes.slice(commentStart, commentStart + commentLength);
                    return new TextDecoder().decode(commentBytes);
                }
            }
            return null;
        };
        const { configure, ZipReader, BlobReader, TextWriter, BlobWriter } = await __turbopack_context__.A("[externals]/@zip.js/zip.js [external] (@zip.js/zip.js, esm_import, async loader)");
        configure({
            useWebWorkers: false
        });
        const reader = new ZipReader(new BlobReader(this.file));
        const entries = await reader.getEntries();
        const map = new Map(entries.map((entry)=>[
                entry.filename,
                entry
            ]));
        const load = (f)=>(name, ...args)=>map.has(name) ? f(map.get(name), ...args) : null;
        const loadText = load((entry)=>entry.getData ? entry.getData(new TextWriter()) : null);
        const loadBlob = load((entry, type)=>entry.getData ? entry.getData(new BlobWriter(type)) : null);
        const getSize = (name)=>map.get(name)?.uncompressedSize ?? 0;
        return {
            entries,
            loadText,
            loadBlob,
            getSize,
            getComment,
            sha1: undefined
        };
    }
    isCBZ() {
        return this.file.type === 'application/vnd.comicbook+zip' || this.file.name.endsWith(`.${EXTS.CBZ}`);
    }
    isFB2() {
        return this.file.type === 'application/x-fictionbook+xml' || this.file.name.endsWith(`.${EXTS.FB2}`);
    }
    isFBZ() {
        return this.file.type === 'application/x-zip-compressed-fb2' || this.file.name.endsWith('.fb.zip') || this.file.name.endsWith('.fb2.zip') || this.file.name.endsWith(`.${EXTS.FBZ}`);
    }
    async open() {
        let book = null;
        let format = 'EPUB';
        if (!this.file.size) {
            throw new Error('File is empty');
        }
        try {
            if (await this.isZip()) {
                const loader = await this.makeZipLoader();
                const { entries } = loader;
                if (this.isCBZ()) {
                    const { makeComicBook } = await __turbopack_context__.A("[project]/packages/foliate-js/comic-book.js [ssr] (ecmascript, async loader)");
                    book = await makeComicBook(loader, this.file);
                    format = 'CBZ';
                } else if (this.isFBZ()) {
                    const entry = entries.find((entry)=>entry.filename.endsWith(`.${EXTS.FB2}`));
                    const blob = await loader.loadBlob((entry ?? entries[0]).filename);
                    const { makeFB2 } = await __turbopack_context__.A("[project]/packages/foliate-js/fb2.js [ssr] (ecmascript, async loader)");
                    book = await makeFB2(blob);
                    format = 'FBZ';
                } else {
                    const { EPUB } = await __turbopack_context__.A("[project]/packages/foliate-js/epub.js [ssr] (ecmascript, async loader)");
                    book = await new EPUB(loader).init();
                    format = 'EPUB';
                }
            } else if (await this.isPDF()) {
                const { makePDF } = await __turbopack_context__.A("[project]/packages/foliate-js/pdf.js [ssr] (ecmascript, async loader)");
                book = await makePDF(this.file);
                format = 'PDF';
            } else if (await (await __turbopack_context__.A("[project]/packages/foliate-js/mobi.js [ssr] (ecmascript, async loader)")).isMOBI(this.file)) {
                const fflate = await __turbopack_context__.A("[project]/packages/foliate-js/vendor/fflate.js [ssr] (ecmascript, async loader)");
                const { MOBI } = await __turbopack_context__.A("[project]/packages/foliate-js/mobi.js [ssr] (ecmascript, async loader)");
                book = await new MOBI({
                    unzlib: fflate.unzlibSync
                }).open(this.file);
                const ext = this.file.name.split('.').pop()?.toLowerCase();
                switch(ext){
                    case 'azw':
                        format = 'AZW';
                        break;
                    case 'azw3':
                        format = 'AZW3';
                        break;
                    default:
                        format = 'MOBI';
                }
            } else if (this.isFB2()) {
                const { makeFB2 } = await __turbopack_context__.A("[project]/packages/foliate-js/fb2.js [ssr] (ecmascript, async loader)");
                book = await makeFB2(this.file);
                format = 'FB2';
            }
        } catch (e) {
            console.error('Failed to open document:', e);
            if (e instanceof Error && e.message?.includes('not a valid zip')) {
                throw new Error('Unsupported or corrupted book file');
            }
            throw e;
        }
        return {
            book,
            format
        };
    }
}
const getDirection = (doc)=>{
    const { defaultView } = doc;
    const { writingMode, direction } = defaultView.getComputedStyle(doc.body);
    const vertical = writingMode === 'vertical-rl' || writingMode === 'vertical-lr';
    const rtl = doc.body.dir === 'rtl' || direction === 'rtl' || doc.documentElement.dir === 'rtl';
    return {
        vertical,
        rtl
    };
};
const getFileExtFromMimeType = (mimeType)=>{
    if (!mimeType) return '';
    for(const format in MIMETYPES){
        const list = MIMETYPES[format];
        if (list.includes(mimeType)) {
            return EXTS[format];
        }
    }
    return '';
};
const getMimeTypeFromFileExt = (ext)=>{
    ext = ext.toLowerCase();
    for(const format in EXTS){
        if (EXTS[format] === ext) {
            const mimeTypes = MIMETYPES[format];
            return mimeTypes[0] || 'application/octet-stream';
        }
    }
    return 'application/octet-stream';
};
}),
"[project]/apps/readest-app/src/libs/metadata.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "searchMetadata",
    ()=>searchMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/environment.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$fetch$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/fetch.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$fetch$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$fetch$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
const API_ENDPOINT = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getAPIBaseUrl"])() + '/metadata/search';
const searchMetadata = async (request)=>{
    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$fetch$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["fetchWithAuth"])(API_ENDPOINT, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(request)
    });
    const result = await response.json();
    if (!result.success) {
        throw new Error(result.error || 'Search failed');
    }
    return result.data || [];
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/readest-app/src/libs/edgeTTS.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "EdgeSpeechTTS",
    ()=>EdgeSpeechTTS
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$js$2d$md5__$5b$external$5d$__$28$js$2d$md5$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/js-md5 [external] (js-md5, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$isomorphic$2d$ws__$5b$external$5d$__$28$isomorphic$2d$ws$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/isomorphic-ws [external] (isomorphic-ws, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/misc.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$lru$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/lru.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$ssml$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/ssml.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$fetch$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/fetch.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/environment.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$ssml$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$fetch$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$ssml$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$fetch$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
const EDGE_SPEECH_URL = 'wss://speech.platform.bing.com/consumer/speech/synthesize/readaloud/edge/v1';
const EDGE_API_TOKEN = '6A5AA1D4EAFF4E9FB37E23D68491D6F4';
const CHROMIUM_FULL_VERSION = '143.0.3650.75';
const CHROMIUM_MAJOR_VERSION = CHROMIUM_FULL_VERSION.split('.')[0];
const EDGE_TTS_VOICES = {
    'af-ZA': [
        'af-ZA-AdriNeural',
        'af-ZA-WillemNeural'
    ],
    'am-ET': [
        'am-ET-AmehaNeural',
        'am-ET-MekdesNeural'
    ],
    'ar-AE': [
        'ar-AE-FatimaNeural',
        'ar-AE-HamdanNeural'
    ],
    'ar-BH': [
        'ar-BH-AliNeural',
        'ar-BH-LailaNeural'
    ],
    'ar-DZ': [
        'ar-DZ-AminaNeural',
        'ar-DZ-IsmaelNeural'
    ],
    'ar-EG': [
        'ar-EG-SalmaNeural',
        'ar-EG-ShakirNeural'
    ],
    'ar-IQ': [
        'ar-IQ-BasselNeural',
        'ar-IQ-RanaNeural'
    ],
    'ar-JO': [
        'ar-JO-SanaNeural',
        'ar-JO-TaimNeural'
    ],
    'ar-KW': [
        'ar-KW-FahedNeural',
        'ar-KW-NouraNeural'
    ],
    'ar-LB': [
        'ar-LB-LaylaNeural',
        'ar-LB-RamiNeural'
    ],
    'ar-LY': [
        'ar-LY-ImanNeural',
        'ar-LY-OmarNeural'
    ],
    'ar-MA': [
        'ar-MA-JamalNeural',
        'ar-MA-MounaNeural'
    ],
    'ar-OM': [
        'ar-OM-AbdullahNeural',
        'ar-OM-AyshaNeural'
    ],
    'ar-QA': [
        'ar-QA-AmalNeural',
        'ar-QA-MoazNeural'
    ],
    'ar-SA': [
        'ar-SA-HamedNeural',
        'ar-SA-ZariyahNeural'
    ],
    'ar-SY': [
        'ar-SY-AmanyNeural',
        'ar-SY-LaithNeural'
    ],
    'ar-TN': [
        'ar-TN-HediNeural',
        'ar-TN-ReemNeural'
    ],
    'ar-YE': [
        'ar-YE-MaryamNeural',
        'ar-YE-SalehNeural'
    ],
    'az-AZ': [
        'az-AZ-BabekNeural',
        'az-AZ-BanuNeural'
    ],
    'bg-BG': [
        'bg-BG-BorislavNeural',
        'bg-BG-KalinaNeural'
    ],
    'bn-BD': [
        'bn-BD-NabanitaNeural',
        'bn-BD-PradeepNeural'
    ],
    'bn-IN': [
        'bn-IN-BashkarNeural',
        'bn-IN-TanishaaNeural'
    ],
    'bs-BA': [
        'bs-BA-GoranNeural',
        'bs-BA-VesnaNeural'
    ],
    'ca-ES': [
        'ca-ES-EnricNeural',
        'ca-ES-JoanaNeural'
    ],
    'cs-CZ': [
        'cs-CZ-AntoninNeural',
        'cs-CZ-VlastaNeural'
    ],
    'cy-GB': [
        'cy-GB-AledNeural',
        'cy-GB-NiaNeural'
    ],
    'da-DK': [
        'da-DK-ChristelNeural',
        'da-DK-JeppeNeural'
    ],
    'de-AT': [
        'de-AT-IngridNeural',
        'de-AT-JonasNeural'
    ],
    'de-CH': [
        'de-CH-JanNeural',
        'de-CH-LeniNeural'
    ],
    'de-DE': [
        'de-DE-AmalaNeural',
        'de-DE-ConradNeural',
        'de-DE-FlorianMultilingualNeural',
        'de-DE-KatjaNeural',
        'de-DE-KillianNeural',
        'de-DE-SeraphinaMultilingualNeural'
    ],
    'el-GR': [
        'el-GR-AthinaNeural',
        'el-GR-NestorasNeural'
    ],
    'en-AU': [
        'en-AU-NatashaNeural',
        'en-AU-WilliamNeural'
    ],
    'en-CA': [
        'en-CA-ClaraNeural',
        'en-CA-LiamNeural'
    ],
    'en-GB': [
        'en-GB-LibbyNeural',
        'en-GB-MaisieNeural',
        'en-GB-RyanNeural',
        'en-GB-SoniaNeural',
        'en-GB-ThomasNeural'
    ],
    'en-HK': [
        'en-HK-SamNeural',
        'en-HK-YanNeural'
    ],
    'en-IE': [
        'en-IE-ConnorNeural',
        'en-IE-EmilyNeural'
    ],
    'en-IN': [
        'en-IN-NeerjaExpressiveNeural',
        'en-IN-NeerjaNeural',
        'en-IN-PrabhatNeural'
    ],
    'en-KE': [
        'en-KE-AsiliaNeural',
        'en-KE-ChilembaNeural'
    ],
    'en-NG': [
        'en-NG-AbeoNeural',
        'en-NG-EzinneNeural'
    ],
    'en-NZ': [
        'en-NZ-MitchellNeural',
        'en-NZ-MollyNeural'
    ],
    'en-PH': [
        'en-PH-JamesNeural',
        'en-PH-RosaNeural'
    ],
    'en-SG': [
        'en-SG-LunaNeural',
        'en-SG-WayneNeural'
    ],
    'en-TZ': [
        'en-TZ-ElimuNeural',
        'en-TZ-ImaniNeural'
    ],
    'en-US': [
        'en-US-AnaNeural',
        'en-US-AndrewMultilingualNeural',
        'en-US-AndrewNeural',
        'en-US-AriaNeural',
        'en-US-AvaMultilingualNeural',
        'en-US-AvaNeural',
        'en-US-BrianMultilingualNeural',
        'en-US-BrianNeural',
        'en-US-ChristopherNeural',
        'en-US-EmmaMultilingualNeural',
        'en-US-EmmaNeural',
        'en-US-EricNeural',
        'en-US-GuyNeural',
        'en-US-JennyNeural',
        'en-US-MichelleNeural',
        'en-US-RogerNeural',
        'en-US-SteffanNeural'
    ],
    'es-AR': [
        'es-AR-ElenaNeural',
        'es-AR-TomasNeural'
    ],
    'es-BO': [
        'es-BO-MarceloNeural',
        'es-BO-SofiaNeural'
    ],
    'es-CL': [
        'es-CL-CatalinaNeural',
        'es-CL-LorenzoNeural'
    ],
    'es-CO': [
        'es-CO-GonzaloNeural',
        'es-CO-SalomeNeural'
    ],
    'es-CR': [
        'es-CR-JuanNeural',
        'es-CR-MariaNeural'
    ],
    'es-CU': [
        'es-CU-BelkysNeural',
        'es-CU-ManuelNeural'
    ],
    'es-DO': [
        'es-DO-EmilioNeural',
        'es-DO-RamonaNeural'
    ],
    'es-EC': [
        'es-EC-AndreaNeural',
        'es-EC-LuisNeural'
    ],
    'es-ES': [
        'es-ES-AlvaroNeural',
        'es-ES-ElviraNeural',
        'es-ES-XimenaNeural'
    ],
    'es-US': [
        'es-US-AlonsoNeural',
        'es-US-PalomaNeural'
    ],
    'et-EE': [
        'et-EE-AnuNeural',
        'et-EE-KertNeural'
    ],
    'fa-IR': [
        'fa-IR-DilaraNeural',
        'fa-IR-FaridNeural'
    ],
    'fi-FI': [
        'fi-FI-HarriNeural',
        'fi-FI-NooraNeural'
    ],
    'fil-PH': [
        'fil-PH-AngeloNeural',
        'fil-PH-BlessicaNeural'
    ],
    'fr-BE': [
        'fr-BE-CharlineNeural',
        'fr-BE-GerardNeural'
    ],
    'fr-CA': [
        'fr-CA-AntoineNeural',
        'fr-CA-JeanNeural',
        'fr-CA-SylvieNeural',
        'fr-CA-ThierryNeural'
    ],
    'fr-CH': [
        'fr-CH-ArianeNeural',
        'fr-CH-FabriceNeural'
    ],
    'fr-FR': [
        'fr-FR-DeniseNeural',
        'fr-FR-EloiseNeural',
        'fr-FR-HenriNeural',
        'fr-FR-RemyMultilingualNeural',
        'fr-FR-VivienneMultilingualNeural'
    ],
    'ga-IE': [
        'ga-IE-ColmNeural',
        'ga-IE-OrlaNeural'
    ],
    'gl-ES': [
        'gl-ES-RoiNeural',
        'gl-ES-SabelaNeural'
    ],
    'gu-IN': [
        'gu-IN-DhwaniNeural',
        'gu-IN-NiranjanNeural'
    ],
    'he-IL': [
        'he-IL-AvriNeural',
        'he-IL-HilaNeural'
    ],
    'hi-IN': [
        'hi-IN-MadhurNeural',
        'hi-IN-SwaraNeural'
    ],
    'hr-HR': [
        'hr-HR-GabrijelaNeural',
        'hr-HR-SreckoNeural'
    ],
    'hu-HU': [
        'hu-HU-NoemiNeural',
        'hu-HU-TamasNeural'
    ],
    'id-ID': [
        'id-ID-ArdiNeural',
        'id-ID-GadisNeural'
    ],
    'is-IS': [
        'is-IS-GudrunNeural',
        'is-IS-GunnarNeural'
    ],
    'it-IT': [
        'it-IT-DiegoNeural',
        'it-IT-ElsaNeural',
        'it-IT-GiuseppeMultilingualNeural',
        'it-IT-IsabellaNeural'
    ],
    'iu-Cans-CA': [
        'iu-Cans-CA-SiqiniqNeural',
        'iu-Cans-CA-TaqqiqNeural'
    ],
    'iu-Latn-CA': [
        'iu-Latn-CA-SiqiniqNeural',
        'iu-Latn-CA-TaqqiqNeural'
    ],
    'ja-JP': [
        'ja-JP-KeitaNeural',
        'ja-JP-NanamiNeural'
    ],
    'jv-ID': [
        'jv-ID-DimasNeural',
        'jv-ID-SitiNeural'
    ],
    'ka-GE': [
        'ka-GE-EkaNeural',
        'ka-GE-GiorgiNeural'
    ],
    'kk-KZ': [
        'kk-KZ-AigulNeural',
        'kk-KZ-DauletNeural'
    ],
    'km-KH': [
        'km-KH-PisethNeural',
        'km-KH-SreymomNeural'
    ],
    'kn-IN': [
        'kn-IN-GaganNeural',
        'kn-IN-SapnaNeural'
    ],
    'ko-KR': [
        'ko-KR-HyunsuMultilingualNeural',
        'ko-KR-InJoonNeural',
        'ko-KR-SunHiNeural'
    ],
    'lo-LA': [
        'lo-LA-ChanthavongNeural',
        'lo-LA-KeomanyNeural'
    ],
    'lt-LT': [
        'lt-LT-LeonasNeural',
        'lt-LT-OnaNeural'
    ],
    'lv-LV': [
        'lv-LV-EveritaNeural',
        'lv-LV-NilsNeural'
    ],
    'mk-MK': [
        'mk-MK-AleksandarNeural',
        'mk-MK-MarijaNeural'
    ],
    'ml-IN': [
        'ml-IN-MidhunNeural',
        'ml-IN-SobhanaNeural'
    ],
    'mn-MN': [
        'mn-MN-BataaNeural',
        'mn-MN-YesuiNeural'
    ],
    'mr-IN': [
        'mr-IN-AarohiNeural',
        'mr-IN-ManoharNeural'
    ],
    'ms-MY': [
        'ms-MY-OsmanNeural',
        'ms-MY-YasminNeural'
    ],
    'mt-MT': [
        'mt-MT-GraceNeural',
        'mt-MT-JosephNeural'
    ],
    'my-MM': [
        'my-MM-NilarNeural',
        'my-MM-ThihaNeural'
    ],
    'nb-NO': [
        'nb-NO-FinnNeural',
        'nb-NO-PernilleNeural'
    ],
    'ne-NP': [
        'ne-NP-HemkalaNeural',
        'ne-NP-SagarNeural'
    ],
    'nl-BE': [
        'nl-BE-ArnaudNeural',
        'nl-BE-DenaNeural'
    ],
    'nl-NL': [
        'nl-NL-ColetteNeural',
        'nl-NL-FennaNeural',
        'nl-NL-MaartenNeural'
    ],
    'pl-PL': [
        'pl-PL-MarekNeural',
        'pl-PL-ZofiaNeural'
    ],
    'ps-AF': [
        'ps-AF-GulNawazNeural',
        'ps-AF-LatifaNeural'
    ],
    'pt-BR': [
        'pt-BR-AntonioNeural',
        'pt-BR-FranciscaNeural',
        'pt-BR-ThalitaMultilingualNeural'
    ],
    'pt-PT': [
        'pt-PT-DuarteNeural',
        'pt-PT-RaquelNeural'
    ],
    'ro-RO': [
        'ro-RO-AlinaNeural',
        'ro-RO-EmilNeural'
    ],
    'ru-RU': [
        'ru-RU-DmitryNeural',
        'ru-RU-SvetlanaNeural'
    ],
    'si-LK': [
        'si-LK-SameeraNeural',
        'si-LK-ThiliniNeural'
    ],
    'sk-SK': [
        'sk-SK-LukasNeural',
        'sk-SK-ViktoriaNeural'
    ],
    'sl-SI': [
        'sl-SI-PetraNeural',
        'sl-SI-RokNeural'
    ],
    'so-SO': [
        'so-SO-MuuseNeural',
        'so-SO-UbaxNeural'
    ],
    'sq-AL': [
        'sq-AL-AnilaNeural',
        'sq-AL-IlirNeural'
    ],
    'sr-RS': [
        'sr-RS-NicholasNeural',
        'sr-RS-SophieNeural'
    ],
    'su-ID': [
        'su-ID-JajangNeural',
        'su-ID-TutiNeural'
    ],
    'sv-SE': [
        'sv-SE-MattiasNeural',
        'sv-SE-SofieNeural'
    ],
    'sw-KE': [
        'sw-KE-RafikiNeural',
        'sw-KE-ZuriNeural'
    ],
    'sw-TZ': [
        'sw-TZ-DaudiNeural',
        'sw-TZ-RehemaNeural'
    ],
    'ta-IN': [
        'ta-IN-PallaviNeural',
        'ta-IN-ValluvarNeural'
    ],
    'ta-LK': [
        'ta-LK-KumarNeural',
        'ta-LK-SaranyaNeural'
    ],
    'ta-MY': [
        'ta-MY-KaniNeural',
        'ta-MY-SuryaNeural'
    ],
    'ta-SG': [
        'ta-SG-AnbuNeural',
        'ta-SG-VenbaNeural'
    ],
    'te-IN': [
        'te-IN-MohanNeural',
        'te-IN-ShrutiNeural'
    ],
    'th-TH': [
        'th-TH-NiwatNeural',
        'th-TH-PremwadeeNeural'
    ],
    'tr-TR': [
        'tr-TR-AhmetNeural',
        'tr-TR-EmelNeural'
    ],
    'uk-UA': [
        'uk-UA-OstapNeural',
        'uk-UA-PolinaNeural'
    ],
    'ur-IN': [
        'ur-IN-GulNeural',
        'ur-IN-SalmanNeural'
    ],
    'ur-PK': [
        'ur-PK-AsadNeural',
        'ur-PK-UzmaNeural'
    ],
    'uz-UZ': [
        'uz-UZ-MadinaNeural',
        'uz-UZ-SardorNeural'
    ],
    'vi-VN': [
        'vi-VN-HoaiMyNeural',
        'vi-VN-NamMinhNeural'
    ],
    'zh-CN': [
        'zh-CN-XiaoxiaoNeural',
        'zh-CN-XiaoyiNeural',
        'zh-CN-YunjianNeural',
        'zh-CN-YunxiNeural',
        'zh-CN-YunxiaNeural',
        'zh-CN-YunyangNeural',
        'zh-CN-liaoning-XiaobeiNeural',
        'zh-CN-shaanxi-XiaoniNeural'
    ],
    'zh-HK': [
        'zh-HK-HiuGaaiNeural',
        'zh-HK-HiuMaanNeural',
        'zh-HK-WanLungNeural'
    ],
    'zh-TW': [
        'zh-TW-HsiaoChenNeural',
        'zh-TW-HsiaoYuNeural',
        'zh-TW-YunJheNeural'
    ],
    'zu-ZA': [
        'zu-ZA-ThandoNeural',
        'zu-ZA-ThembaNeural'
    ]
};
/**
 * Generates the Sec-MS-GEC token value.
 * This function generates a token value based on the current time in Windows file time format
 * adjusted for clock skew, and rounded down to the nearest 5 minutes. The token is then hashed
 * using SHA256 and returned as an uppercased hex digest.
 *
 * @returns The generated Sec-MS-GEC token value.
 * @see https://github.com/rany2/edge-tts/issues/290#issuecomment-2464956570
 */ const WIN_EPOCH_OFFSET = 11644473600; // Windows epoch offset in seconds (1601 to 1970)
const S_TO_NS = 1000000000; // Seconds to nanoseconds conversion
const generateSecMsGec = ()=>{
    let ticks = Math.floor(Date.now() / 1000);
    // Switch to Windows file time epoch (1601-01-01 00:00:00 UTC)
    ticks += WIN_EPOCH_OFFSET;
    // Round down to the nearest 5 minutes (300 seconds)
    ticks -= ticks % 300;
    // Convert the ticks to 100-nanosecond intervals (Windows file time format)
    ticks *= S_TO_NS / 100;
    // Create the string to hash by concatenating the ticks and the trusted client token
    const strToHash = `${ticks.toFixed(0)}${EDGE_API_TOKEN}`;
    // Compute the SHA256 hash and return the uppercased hex digest
    return (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["createHash"])('sha256').update(strToHash, 'ascii').digest('hex').toUpperCase();
};
const generateMuid = ()=>{
    // Generate 16 random bytes (32 hex characters)
    const array = new Uint8Array(16);
    crypto.getRandomValues(array);
    return Array.from(array).map((b)=>b.toString(16).padStart(2, '0')).join('').toUpperCase();
};
const genVoiceList = (voices)=>{
    return Object.entries(voices).flatMap(([lang, voices])=>{
        return voices.map((id)=>{
            const name = id.replace(`${lang}-`, '').replace('Neural', '');
            return {
                name,
                id,
                lang
            };
        });
    });
};
const hashPayload = (payload)=>{
    const base = JSON.stringify(payload);
    return (0, __TURBOPACK__imported__module__$5b$externals$5d2f$js$2d$md5__$5b$external$5d$__$28$js$2d$md5$2c$__cjs$29$__["md5"])(base);
};
class EdgeSpeechTTS {
    static voices = genVoiceList(EDGE_TTS_VOICES);
    static audioCache = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$lru$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["LRUCache"](200);
    static audioUrlCache = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$lru$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["LRUCache"](200, (_, url)=>{
        if (url.startsWith('blob:')) {
            URL.revokeObjectURL(url);
        }
    });
    protocol = 'wss';
    constructor(protocol){
        if (protocol) {
            this.protocol = protocol;
        }
    }
    async #fetchEdgeSpeechHttp({ lang, text, voice, rate }) {
        const url = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getNodeAPIBaseUrl"])() + '/tts/edge';
        const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$fetch$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["fetchWithAuth"])(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                input: text,
                voice,
                rate,
                lang
            })
        });
        if (!response.ok) {
            throw new Error(`Edge TTS HTTP request failed: ${response.status} ${response.statusText}`);
        }
        return response;
    }
    async #fetchEdgeSpeechWs({ lang, text, voice, rate }) {
        const connectId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["randomMd5"])();
        const params = new URLSearchParams({
            ConnectionId: connectId,
            TrustedClientToken: EDGE_API_TOKEN,
            'Sec-MS-GEC': generateSecMsGec(),
            'Sec-MS-GEC-Version': `1-${CHROMIUM_FULL_VERSION}`
        });
        const url = `${EDGE_SPEECH_URL}?${params.toString()}`;
        const date = new Date().toString();
        const baseHeaders = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' + ` (KHTML, like Gecko) Chrome/${CHROMIUM_MAJOR_VERSION}.0.0.0 Safari/537.36` + ` Edg/${CHROMIUM_MAJOR_VERSION}.0.0.0`,
            'Accept-Encoding': 'gzip, deflate, br, zstd',
            'Accept-Language': 'en-US,en;q=0.9',
            Pragma: 'no-cache',
            'Cache-Control': 'no-cache',
            Origin: 'chrome-extension://jdiccldimpdaibmpdkjnbmckianbfold',
            'Sec-WebSocket-Version': '13',
            Cookie: `muid=${generateMuid()};`
        };
        const configHeaders = {
            'Content-Type': 'application/json; charset=utf-8',
            Path: 'speech.config',
            'X-Timestamp': date
        };
        const contentHeaders = {
            'Content-Type': 'application/ssml+xml',
            Path: 'ssml',
            'X-RequestId': connectId,
            'X-Timestamp': date
        };
        const configContent = JSON.stringify({
            context: {
                synthesis: {
                    audio: {
                        metadataoptions: {
                            sentenceBoundaryEnabled: false,
                            wordBoundaryEnabled: true
                        },
                        outputFormat: 'audio-24khz-48kbitrate-mono-mp3'
                    }
                }
            }
        });
        const genSendContent = (headerObj, content)=>{
            let header = '';
            for (const key of Object.keys(headerObj)){
                header += `${key}: ${headerObj[key]}\r\n`;
            }
            return `${header}\r\n${content}`;
        };
        const getHeadersAndData = (message)=>{
            const lines = message.split('\n');
            const headers = {};
            let body = '';
            let lineIdx = 0;
            for(lineIdx = 0; lineIdx < lines.length; lineIdx++){
                const line = lines[lineIdx].trim();
                if (!line) break;
                const separatorIndex = line.indexOf(':');
                if (separatorIndex === -1) continue;
                const key = line.slice(0, separatorIndex).trim();
                const value = line.slice(separatorIndex + 1).trim();
                headers[key] = value;
            }
            for(lineIdx = lineIdx + 1; lineIdx < lines.length; lineIdx++){
                body += lines[lineIdx] + '\n';
            }
            return {
                headers,
                body
            };
        };
        const ssml = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$ssml$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["genSSML"])(lang, text, voice, rate);
        const content = genSendContent(contentHeaders, ssml);
        const config = genSendContent(configHeaders, configContent);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["isTauriAppPlatform"])()) {
            return new Promise(async (resolve, reject)=>{
                try {
                    const TauriWebSocket = (await __turbopack_context__.A("[externals]/@tauri-apps/plugin-websocket [external] (@tauri-apps/plugin-websocket, esm_import, async loader)")).default;
                    const ws = await TauriWebSocket.connect(url, {
                        headers: baseHeaders
                    });
                    let audioData = new ArrayBuffer(0);
                    const messageUnlisten = await ws.addListener((msg)=>{
                        if (msg.type === 'Text') {
                            const { headers } = getHeadersAndData(msg.data);
                            if (headers['Path'] === 'turn.end') {
                                ws.disconnect();
                                messageUnlisten();
                                if (!audioData.byteLength) {
                                    return reject(new Error('No audio data received.'));
                                }
                                const res = new Response(audioData);
                                resolve(res);
                            }
                        } else if (msg.type === 'Binary') {
                            let buffer;
                            if (msg.data instanceof Uint8Array) {
                                buffer = msg.data.buffer;
                            } else {
                                buffer = new Uint8Array(msg.data).buffer;
                            }
                            const dataView = new DataView(buffer);
                            const headerLength = dataView.getInt16(0);
                            if (buffer.byteLength > headerLength + 2) {
                                const newBody = buffer.slice(2 + headerLength);
                                const merged = new Uint8Array(audioData.byteLength + newBody.byteLength);
                                merged.set(new Uint8Array(audioData), 0);
                                merged.set(new Uint8Array(newBody), audioData.byteLength);
                                audioData = merged.buffer;
                            }
                        }
                    });
                    await ws.send(config);
                    await ws.send(content);
                } catch (error) {
                    reject(new Error(`WebSocket error occurred: ${error}`));
                }
            });
        } else {
            return new Promise((resolve, reject)=>{
                const ws = new __TURBOPACK__imported__module__$5b$externals$5d2f$isomorphic$2d$ws__$5b$external$5d$__$28$isomorphic$2d$ws$2c$__cjs$29$__["default"](url, {
                    headers: baseHeaders
                });
                ws.binaryType = 'arraybuffer';
                let audioData = new ArrayBuffer(0);
                ws.addEventListener('open', ()=>{
                    ws.send(config);
                    ws.send(content);
                });
                ws.addEventListener('message', (event)=>{
                    if (typeof event.data === 'string') {
                        const { headers } = getHeadersAndData(event.data);
                        if (headers['Path'] === 'turn.end') {
                            ws.close();
                            if (!audioData.byteLength) {
                                return reject(new Error('No audio data received.'));
                            }
                            const res = new Response(audioData);
                            resolve(res);
                        }
                    } else if (event.data instanceof ArrayBuffer) {
                        const dataView = new DataView(event.data);
                        const headerLength = dataView.getInt16(0);
                        if (event.data.byteLength > headerLength + 2) {
                            const newBody = event.data.slice(2 + headerLength);
                            const merged = new Uint8Array(audioData.byteLength + newBody.byteLength);
                            merged.set(new Uint8Array(audioData), 0);
                            merged.set(new Uint8Array(newBody), audioData.byteLength);
                            audioData = merged.buffer;
                        }
                    }
                });
                ws.addEventListener('close', ()=>{
                    if (!audioData.byteLength) {
                        reject(new Error('No audio data received.'));
                    }
                });
                ws.addEventListener('error', ()=>{
                    reject(new Error('WebSocket error occurred.'));
                });
            });
        }
    }
    async create(payload) {
        if (this.protocol === 'https') {
            return this.#fetchEdgeSpeechHttp(payload);
        } else {
            return this.#fetchEdgeSpeechWs(payload);
        }
    }
    async createAudioUrl(payload) {
        const cacheKey = hashPayload(payload);
        if (EdgeSpeechTTS.audioUrlCache.has(cacheKey)) {
            return EdgeSpeechTTS.audioUrlCache.get(cacheKey);
        }
        try {
            const res = await this.create(payload);
            const arrayBuffer = await res.arrayBuffer();
            const blob = new Blob([
                arrayBuffer
            ], {
                type: 'audio/mpeg'
            });
            const objectUrl = URL.createObjectURL(blob);
            EdgeSpeechTTS.audioCache.set(cacheKey, blob);
            EdgeSpeechTTS.audioUrlCache.set(cacheKey, objectUrl);
            return objectUrl;
        } catch (error) {
            throw error;
        }
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/readest-app/src/libs/mediaSession.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "TauriMediaSession",
    ()=>TauriMediaSession,
    "getMediaSession",
    ()=>getMediaSession
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/environment.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/misc.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$api$2f$core__$5b$external$5d$__$2840$tauri$2d$apps$2f$api$2f$core$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@tauri-apps/api/core [external] (@tauri-apps/api/core, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$api$2f$core__$5b$external$5d$__$2840$tauri$2d$apps$2f$api$2f$core$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$api$2f$core__$5b$external$5d$__$2840$tauri$2d$apps$2f$api$2f$core$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
class TauriMediaSession {
    handlers = {};
    eventListenerInited = false;
    eventListeners = [];
    async requestPostNotificationPermission() {
        const permission = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$api$2f$core__$5b$external$5d$__$2840$tauri$2d$apps$2f$api$2f$core$2c$__esm_import$29$__["invoke"])('plugin:native-tts|checkPermissions');
        if (permission.postNotification.startsWith('prompt')) {
            await (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$api$2f$core__$5b$external$5d$__$2840$tauri$2d$apps$2f$api$2f$core$2c$__esm_import$29$__["invoke"])('plugin:native-tts|requestPermissions', {
                permissions: [
                    'postNotification'
                ]
            });
        }
    }
    async initializeListeners() {
        if (this.eventListenerInited) return;
        this.eventListenerInited = true;
        const playListener = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$api$2f$core__$5b$external$5d$__$2840$tauri$2d$apps$2f$api$2f$core$2c$__esm_import$29$__["addPluginListener"])('native-tts', 'media-session-play', ()=>{
            if (this.handlers['play']) {
                this.handlers['play']();
            }
        });
        this.eventListeners.push(playListener);
        const pauseListener = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$api$2f$core__$5b$external$5d$__$2840$tauri$2d$apps$2f$api$2f$core$2c$__esm_import$29$__["addPluginListener"])('native-tts', 'media-session-pause', ()=>{
            if (this.handlers['pause']) {
                this.handlers['pause']();
            }
        });
        this.eventListeners.push(pauseListener);
        const nextListener = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$api$2f$core__$5b$external$5d$__$2840$tauri$2d$apps$2f$api$2f$core$2c$__esm_import$29$__["addPluginListener"])('native-tts', 'media-session-next', ()=>{
            if (this.handlers['nexttrack']) {
                this.handlers['nexttrack']();
            }
        });
        this.eventListeners.push(nextListener);
        const previousListener = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$api$2f$core__$5b$external$5d$__$2840$tauri$2d$apps$2f$api$2f$core$2c$__esm_import$29$__["addPluginListener"])('native-tts', 'media-session-previous', ()=>{
            if (this.handlers['previoustrack']) {
                this.handlers['previoustrack']();
            }
        });
        this.eventListeners.push(previousListener);
        const seekListener = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$api$2f$core__$5b$external$5d$__$2840$tauri$2d$apps$2f$api$2f$core$2c$__esm_import$29$__["addPluginListener"])('native-tts', 'media-session-seek', (event)=>{
            const position = event.payload.position;
            if (this.handlers['seekto']) {
                this.handlers['seekto'](position);
            }
        });
        this.eventListeners.push(seekListener);
    }
    async cleanupListeners() {
        for (const listener of this.eventListeners){
            await listener.unregister();
        }
        this.eventListeners = [];
        this.eventListenerInited = false;
    }
    async updateMetadata(metadata) {
        try {
            await (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$api$2f$core__$5b$external$5d$__$2840$tauri$2d$apps$2f$api$2f$core$2c$__esm_import$29$__["invoke"])('plugin:native-tts|update_media_session_metadata', {
                payload: metadata
            });
        } catch (error) {
            console.error('Failed to update media metadata:', error);
        }
    }
    async updatePlaybackState(state) {
        try {
            await (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$api$2f$core__$5b$external$5d$__$2840$tauri$2d$apps$2f$api$2f$core$2c$__esm_import$29$__["invoke"])('plugin:native-tts|update_media_session_state', {
                payload: state
            });
        } catch (error) {
            console.error('Failed to update playback state:', error);
        }
    }
    async setActive(sessionState) {
        try {
            if (sessionState.active) {
                if (sessionState.keepAppInForeground) {
                    await this.requestPostNotificationPermission();
                }
                await this.initializeListeners();
            } else {
                await this.cleanupListeners();
            }
            await (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$api$2f$core__$5b$external$5d$__$2840$tauri$2d$apps$2f$api$2f$core$2c$__esm_import$29$__["invoke"])('plugin:native-tts|set_media_session_active', {
                payload: sessionState
            });
        } catch (error) {
            console.error('Failed to set media session active state:', error);
        }
    }
    setActionHandler(action, handler) {
        if (handler) {
            this.handlers[action] = handler;
        } else {
            delete this.handlers[action];
        }
    }
}
function getMediaSession() {
    if ('mediaSession' in navigator) {
        return navigator.mediaSession;
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getOSPlatform"])() === 'android' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["isTauriAppPlatform"])()) {
        return new TauriMediaSession();
    }
    return null;
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/readest-app/src/styles/fonts.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "createCustomFont",
    ()=>createCustomFont,
    "createFontCSS",
    ()=>createFontCSS,
    "createFontFamily",
    ()=>createFontFamily,
    "getCSSFormatString",
    ()=>getCSSFormatString,
    "getFontFormat",
    ()=>getFontFormat,
    "getFontId",
    ()=>getFontId,
    "getFontName",
    ()=>getFontName,
    "getMimeType",
    ()=>getMimeType,
    "mountAdditionalFonts",
    ()=>mountAdditionalFonts,
    "mountCustomFont",
    ()=>mountCustomFont
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/misc.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$path$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/path.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$md5$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/md5.ts [ssr] (ecmascript) <locals>");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$path$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$path$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
const basicGoogleFonts = [
    {
        family: 'Bitter',
        weights: 'ital,wght@0,100..900;1,100..900'
    },
    {
        family: 'Fira Code',
        weights: 'wght@300..700'
    },
    {
        family: 'Literata',
        weights: 'ital,opsz,wght@0,7..72,200..900;1,7..72,200..900'
    },
    {
        family: 'Merriweather',
        weights: 'ital,opsz,wght@0,18..144,300..900;1,18..144,300..900'
    },
    {
        family: 'Noto Sans',
        weights: 'ital,wght@0,100..900;1,100..900'
    },
    {
        family: 'Open Sans',
        weights: 'ital,wght@0,300..800;1,300..800'
    },
    {
        family: 'Roboto',
        weights: 'ital,wght@0,100..900;1,100..900'
    },
    {
        family: 'Roboto Slab',
        weights: 'ital,wght@0,100..900;1,100..900'
    },
    {
        family: 'Vollkorn',
        weights: 'ital,wght@0,400..900;1,400..900'
    },
    {
        family: 'PT Sans',
        weights: 'ital,wght@0,400;0,700;1,400;1,700'
    },
    {
        family: 'PT Serif',
        weights: 'ital,wght@0,400;0,700;1,400;1,700'
    },
    {
        family: 'PT Mono',
        weights: ''
    }
];
const cjkGoogleFonts = [
    {
        family: 'LXGW WenKai TC',
        weights: ''
    },
    {
        family: 'Noto Sans SC',
        weights: ''
    },
    {
        family: 'Noto Sans TC',
        weights: ''
    },
    {
        family: 'Noto Serif JP',
        weights: ''
    }
];
// Resource hints for faster font loading
const getResourceHints = (includeCJK = false)=>{
    const basicHints = `
  <!-- Preconnect to Google Fonts for faster DNS resolution and connection -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="dns-prefetch" href="https://fonts.googleapis.com">
  <link rel="dns-prefetch" href="https://fonts.gstatic.com">
`;
    const cjkHints = `
  <!-- Preconnect to CJK font CDNs -->
  <link rel="preconnect" href="https://cdn.jsdelivr.net">
  <link rel="preconnect" href="https://cdnjs.cloudflare.com">
  <link rel="preconnect" href="https://ik.imagekit.io">
  <link rel="preconnect" href="https://db.onlinewebfonts.com">
  <link rel="dns-prefetch" href="https://cdn.jsdelivr.net">
  <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com">
  <link rel="dns-prefetch" href="https://ik.imagekit.io">
  <link rel="dns-prefetch" href="https://db.onlinewebfonts.com">
`;
    return includeCJK ? basicHints + cjkHints : basicHints;
};
const getAdditionalBasicFontLinks = ()=>`
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?${basicGoogleFonts.map(({ family, weights })=>`family=${encodeURIComponent(family)}${weights ? `:${weights}` : ''}`).join('&')}&display=swap" crossorigin="anonymous">
`;
const getAdditionalCJKFontLinks = ()=>`
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/misans-webfont@1.0.4/misans-l3/misans-l3/result.min.css" crossorigin="anonymous" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/lxgw-wenkai-screen-web/1.520.0/lxgwwenkaigbscreen/result.css" crossorigin="anonymous" />
  <link rel='stylesheet' href='https://ik.imagekit.io/fonts131/packages/hwmct/dist/%E6%B1%87%E6%96%87%E6%98%8E%E6%9C%9D%E4%BD%93/result.css' crossorigin="anonymous" />
  <link rel='stylesheet' href='https://ik.imagekit.io/fonts131/packages/jhlst/dist/%E4%BA%AC%E8%8F%AF%E8%80%81%E5%AE%8B%E4%BD%93v2_002/result.css' crossorigin="anonymous" />
  <link rel='stylesheet' href='https://ik.imagekit.io/fonts131/packages/syst/dist/SourceHanSerifCN/result.css' crossorigin="anonymous" />
  <link rel='stylesheet' href='https://ik.imagekit.io/fonts131/packages/GuanKiapTsingKhai/dist/GuanKiapTsingKhai-T/result.css' crossorigin="anonymous" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?${cjkGoogleFonts.map(({ family, weights })=>`family=${encodeURIComponent(family)}${weights ? `:${weights}` : ''}`).join('&')}&display=swap" crossorigin="anonymous" />
`;
const getAdditionalCJKFontFaces = ()=>`
  @font-face {
    font-family: "FangSong";
    font-display: swap;
    src: local("Fang Song"), local("FangSong"), local("Noto Serif CJK"), local("Source Han Serif SC VF"), url("https://db.onlinewebfonts.com/t/2ecbfe1d9bfc191c6f15c0ccc23cbd43.eot");
    src: url("https://db.onlinewebfonts.com/t/2ecbfe1d9bfc191c6f15c0ccc23cbd43.eot?#iefix") format("embedded-opentype"),
    url("https://db.onlinewebfonts.com/t/2ecbfe1d9bfc191c6f15c0ccc23cbd43.woff2") format("woff2"),
    url("https://db.onlinewebfonts.com/t/2ecbfe1d9bfc191c6f15c0ccc23cbd43.woff") format("woff"),
    url("https://db.onlinewebfonts.com/t/2ecbfe1d9bfc191c6f15c0ccc23cbd43.ttf") format("truetype"),
    url("https://db.onlinewebfonts.com/t/2ecbfe1d9bfc191c6f15c0ccc23cbd43.svg#FangSong") format("svg");
  }
  @font-face {
    font-family: "Kaiti";
    font-display: swap;
    src: local("Kai"), local("KaiTi"), local("AR PL UKai"), local("LXGW WenKai GB Screen"), url("https://db.onlinewebfonts.com/t/1ee9941f1b8c128110ca4307dda59917.eot");
    src: url("https://db.onlinewebfonts.com/t/1ee9941f1b8c128110ca4307dda59917.eot?#iefix")format("embedded-opentype"),
    url("https://db.onlinewebfonts.com/t/1ee9941f1b8c128110ca4307dda59917.woff2")format("woff2"),
    url("https://db.onlinewebfonts.com/t/1ee9941f1b8c128110ca4307dda59917.woff")format("woff"),
    url("https://db.onlinewebfonts.com/t/1ee9941f1b8c128110ca4307dda59917.ttf")format("truetype"),
    url("https://db.onlinewebfonts.com/t/1ee9941f1b8c128110ca4307dda59917.svg#STKaiti")format("svg");
  }
  @font-face {
    font-family: "Heiti";
    font-display: swap;
    src: local("Hei"), local("SimHei"), local("WenQuanYi Zen Hei"), local("Source Han Sans SC VF"), url("https://db.onlinewebfonts.com/t/a4948b9d43a91468825a5251df1ec58d.eot");
    src: url("https://db.onlinewebfonts.com/t/a4948b9d43a91468825a5251df1ec58d.eot?#iefix")format("embedded-opentype"),
    url("https://db.onlinewebfonts.com/t/a4948b9d43a91468825a5251df1ec58d.woff2")format("woff2"),
    url("https://db.onlinewebfonts.com/t/a4948b9d43a91468825a5251df1ec58d.woff")format("woff"),
    url("https://db.onlinewebfonts.com/t/a4948b9d43a91468825a5251df1ec58d.ttf")format("truetype"),
    url("https://db.onlinewebfonts.com/t/a4948b9d43a91468825a5251df1ec58d.svg#WenQuanYi Micro Hei")format("svg");
  }
  @font-face {
    font-family: "XiHeiti";
    font-display: swap;
    src: local("PingFang SC"), local("Microsoft YaHei"), local("WenQuanYi Micro Hei"), local("FZHei-B01"), url("https://db.onlinewebfonts.com/t/4f0b783ba4a1b381fc7e7af81ecab481.eot");
    src: url("https://db.onlinewebfonts.com/t/4f0b783ba4a1b381fc7e7af81ecab481.eot?#iefix")format("embedded-opentype"),
    url("https://db.onlinewebfonts.com/t/4f0b783ba4a1b381fc7e7af81ecab481.woff2")format("woff2"),
    url("https://db.onlinewebfonts.com/t/4f0b783ba4a1b381fc7e7af81ecab481.woff")format("woff"),
    url("https://db.onlinewebfonts.com/t/4f0b783ba4a1b381fc7e7af81ecab481.ttf")format("truetype"),
    url("https://db.onlinewebfonts.com/t/4f0b783ba4a1b381fc7e7af81ecab481.svg#STHeiti J Light")format("svg");
}
`;
const mountAdditionalFonts = async (document, isCJK = false)=>{
    const mountCJKFonts = isCJK || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["isCJKEnv"])();
    const hints = getResourceHints(mountCJKFonts);
    const hintsParser = new DOMParser();
    const hintsDocument = hintsParser.parseFromString(hints, 'text/html');
    // Mount resource hints at the beginning of head for priority
    Array.from(hintsDocument.head.children).forEach((child)=>{
        if (child.tagName === 'LINK') {
            const link = document.createElement('link');
            link.rel = child.getAttribute('rel') || '';
            link.href = child.getAttribute('href') || '';
            const crossorigin = child.getAttribute('crossorigin');
            if (crossorigin) {
                link.crossOrigin = crossorigin;
            }
            // Insert at the beginning of head for maximum priority
            if (document.head.firstChild) {
                document.head.insertBefore(link, document.head.firstChild);
            } else {
                document.head.appendChild(link);
            }
        }
    });
    // Mount font stylesheets and @font-face rules
    let links = getAdditionalBasicFontLinks();
    let fontFaces = '';
    if (mountCJKFonts) {
        fontFaces = getAdditionalCJKFontFaces();
        links = `${links}\n${getAdditionalCJKFontLinks()}`;
    }
    if (fontFaces) {
        const style = document.createElement('style');
        style.textContent = fontFaces;
        document.head.appendChild(style);
    }
    const parser = new DOMParser();
    const linksDocument = parser.parseFromString(links, 'text/html');
    Array.from(linksDocument.head.children).forEach((child)=>{
        if (child.tagName === 'LINK') {
            const link = document.createElement('link');
            link.rel = child.getAttribute('rel') || '';
            link.href = child.getAttribute('href') || '';
            link.crossOrigin = child.getAttribute('crossorigin') || '';
            document.head.appendChild(link);
        }
    });
};
function getFontName(path) {
    const fileName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$path$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getFilename"])(path);
    return fileName.replace(/\.(ttf|otf|woff|woff2)$/i, '');
}
function getFontId(name) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$md5$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["md5Fingerprint"])(name);
}
function getFontFormat(path) {
    const extension = path.toLowerCase().split('.').pop();
    switch(extension){
        case 'ttf':
            return 'ttf';
        case 'otf':
            return 'otf';
        case 'woff':
            return 'woff';
        case 'woff2':
            return 'woff2';
        default:
            return 'ttf';
    }
}
function getMimeType(format) {
    const types = {
        ttf: 'font/ttf',
        otf: 'font/otf',
        woff: 'font/woff',
        woff2: 'font/woff2'
    };
    return types[format] || 'font/ttf';
}
function getCSSFormatString(format) {
    const formats = {
        ttf: 'truetype',
        otf: 'opentype',
        woff: 'woff',
        woff2: 'woff2'
    };
    return formats[format] || 'truetype';
}
function createFontFamily(name) {
    return name.replace(/\s+/g, ' ').trim();
}
function createFontCSS(font) {
    const format = getFontFormat(font.path);
    const cssFormat = getCSSFormatString(format);
    const fontFamily = createFontFamily(font.family || font.name);
    const fontStyle = font.style || 'normal';
    const fontWeight = font.weight || 400;
    const variable = font.variable || false;
    if (!font.blobUrl) {
        throw new Error(`Blob URL not available for font: ${font.name}`);
    }
    const css = `
    @font-face {
      font-family: "${fontFamily}";
      ${variable ? '' : `font-style: ${fontStyle};`}
      ${variable ? '' : `font-weight: ${fontWeight};`}
      src: url("${font.blobUrl}") format("${cssFormat}");
      font-display: swap;
    }
  `;
    return css;
}
function createCustomFont(path, options) {
    const name = options?.name || getFontName(path);
    return {
        id: getFontId(name),
        name,
        family: options?.family,
        style: options?.style,
        weight: options?.weight,
        variable: options?.variable,
        path
    };
}
const mountCustomFont = (document, font)=>{
    const fontStyleId = `custom-font-${font.id}`;
    const styleElement = document.getElementById(fontStyleId) || document.createElement('style');
    styleElement.id = fontStyleId;
    styleElement.textContent = createFontCSS(font);
    if (!styleElement.parentNode) {
        document.head.appendChild(styleElement);
    }
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/readest-app/src/helpers/updater.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "checkAppReleaseNotes",
    ()=>checkAppReleaseNotes,
    "checkForAppUpdates",
    ()=>checkForAppUpdates,
    "getLastShownReleaseNotesVersion",
    ()=>getLastShownReleaseNotesVersion,
    "setLastShownReleaseNotesVersion",
    ()=>setLastShownReleaseNotesVersion
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$semver__$5b$external$5d$__$28$semver$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/semver [external] (semver, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$plugin$2d$updater__$5b$external$5d$__$2840$tauri$2d$apps$2f$plugin$2d$updater$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@tauri-apps/plugin-updater [external] (@tauri-apps/plugin-updater, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$plugin$2d$os__$5b$external$5d$__$2840$tauri$2d$apps$2f$plugin$2d$os$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@tauri-apps/plugin-os [external] (@tauri-apps/plugin-os, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$plugin$2d$http__$5b$external$5d$__$2840$tauri$2d$apps$2f$plugin$2d$http$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@tauri-apps/plugin-http [external] (@tauri-apps/plugin-http, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$api$2f$webviewWindow__$5b$external$5d$__$2840$tauri$2d$apps$2f$api$2f$webviewWindow$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@tauri-apps/api/webviewWindow [external] (@tauri-apps/api/webviewWindow, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$UpdaterWindow$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/components/UpdaterWindow.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/environment.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$version$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/version.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/constants.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$plugin$2d$updater__$5b$external$5d$__$2840$tauri$2d$apps$2f$plugin$2d$updater$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$plugin$2d$os__$5b$external$5d$__$2840$tauri$2d$apps$2f$plugin$2d$os$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$plugin$2d$http__$5b$external$5d$__$2840$tauri$2d$apps$2f$plugin$2d$http$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$api$2f$webviewWindow__$5b$external$5d$__$2840$tauri$2d$apps$2f$api$2f$webviewWindow$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$UpdaterWindow$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$plugin$2d$updater__$5b$external$5d$__$2840$tauri$2d$apps$2f$plugin$2d$updater$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$plugin$2d$os__$5b$external$5d$__$2840$tauri$2d$apps$2f$plugin$2d$os$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$plugin$2d$http__$5b$external$5d$__$2840$tauri$2d$apps$2f$plugin$2d$http$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$api$2f$webviewWindow__$5b$external$5d$__$2840$tauri$2d$apps$2f$api$2f$webviewWindow$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$UpdaterWindow$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
;
const LAST_CHECK_KEY = 'lastAppUpdateCheck';
const showUpdateWindow = (latestVersion)=>{
    const win = new __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$api$2f$webviewWindow__$5b$external$5d$__$2840$tauri$2d$apps$2f$api$2f$webviewWindow$2c$__esm_import$29$__["WebviewWindow"]('updater', {
        url: `/updater?latestVersion=${latestVersion}`,
        title: 'Software Update',
        width: 626,
        height: 406,
        center: true,
        resizable: true
    });
    win.once('tauri://created', ()=>{
        console.log('new window created');
    });
    win.once('tauri://error', (e)=>{
        console.error('error creating window', e);
    });
};
const checkForAppUpdates = async (_, isAutoCheck = true)=>{
    const lastCheck = localStorage.getItem(LAST_CHECK_KEY);
    const now = Date.now();
    if (isAutoCheck && lastCheck && now - parseInt(lastCheck, 10) < __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["CHECK_UPDATE_INTERVAL_SEC"] * 1000) return false;
    localStorage.setItem(LAST_CHECK_KEY, now.toString());
    console.log('Checking for updates');
    const OS_TYPE = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$plugin$2d$os__$5b$external$5d$__$2840$tauri$2d$apps$2f$plugin$2d$os$2c$__esm_import$29$__["type"])();
    if ([
        'macos',
        'windows',
        'linux'
    ].includes(OS_TYPE)) {
        const update = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$plugin$2d$updater__$5b$external$5d$__$2840$tauri$2d$apps$2f$plugin$2d$updater$2c$__esm_import$29$__["check"])();
        if (update) {
            showUpdateWindow(update.version);
        }
        return !!update;
    } else if (OS_TYPE === 'android') {
        try {
            const response = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$plugin$2d$http__$5b$external$5d$__$2840$tauri$2d$apps$2f$plugin$2d$http$2c$__esm_import$29$__["fetch"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["READEST_UPDATER_FILE"], {
                connectTimeout: 5000
            });
            const data = await response.json();
            const isNewer = __TURBOPACK__imported__module__$5b$externals$5d2f$semver__$5b$external$5d$__$28$semver$2c$__cjs$29$__["default"].gt(data.version, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$version$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getAppVersion"])());
            if (isNewer && ('android-arm64' in data.platforms || 'android-universal' in data.platforms)) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$UpdaterWindow$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["setUpdaterWindowVisible"])(true, data.version, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$version$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getAppVersion"])());
            }
            return isNewer;
        } catch (err) {
            console.warn('Failed to fetch Android update info', err);
            throw new Error('Failed to fetch Android update info');
        }
    }
    return false;
};
const LAST_SHOWN_RELEASE_NOTES_KEY = 'lastShownReleaseNotesVersion';
const setLastShownReleaseNotesVersion = (version)=>{
    localStorage.setItem(LAST_SHOWN_RELEASE_NOTES_KEY, version);
};
const getLastShownReleaseNotesVersion = ()=>{
    return localStorage.getItem(LAST_SHOWN_RELEASE_NOTES_KEY) || '';
};
const checkAppReleaseNotes = async (isAutoCheck = true)=>{
    const currentVersion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$version$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getAppVersion"])();
    const lastShownVersion = getLastShownReleaseNotesVersion();
    if (lastShownVersion && __TURBOPACK__imported__module__$5b$externals$5d2f$semver__$5b$external$5d$__$28$semver$2c$__cjs$29$__["default"].gt(currentVersion, lastShownVersion) || !isAutoCheck) {
        try {
            const fetchFunc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["isTauriAppPlatform"])() ? __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$plugin$2d$http__$5b$external$5d$__$2840$tauri$2d$apps$2f$plugin$2d$http$2c$__esm_import$29$__["fetch"] : window.fetch;
            const res = await fetchFunc(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["READEST_CHANGELOG_FILE"]);
            if (res.ok) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$UpdaterWindow$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["setUpdaterWindowVisible"])(true, currentVersion, lastShownVersion, false);
                return true;
            }
        } catch (err) {
            console.warn('Failed to fetch release notes', err);
        }
    } else if (!lastShownVersion) {
        setLastShownReleaseNotesVersion(currentVersion);
    }
    return false;
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/readest-app/src/helpers/openWith.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "parseOpenWithFiles",
    ()=>parseOpenWithFiles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/environment.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$plugin$2d$deep$2d$link__$5b$external$5d$__$2840$tauri$2d$apps$2f$plugin$2d$deep$2d$link$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@tauri-apps/plugin-deep-link [external] (@tauri-apps/plugin-deep-link, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$plugin$2d$deep$2d$link__$5b$external$5d$__$2840$tauri$2d$apps$2f$plugin$2d$deep$2d$link$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$plugin$2d$deep$2d$link__$5b$external$5d$__$2840$tauri$2d$apps$2f$plugin$2d$deep$2d$link$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
const parseWindowOpenWithFiles = ()=>{
    const params = new URLSearchParams(window.location.search);
    const files = params.getAll('file');
    return files.length > 0 ? files : window.OPEN_WITH_FILES;
};
const parseCLIOpenWithFiles = async ()=>{
    const { getMatches } = await __turbopack_context__.A("[externals]/@tauri-apps/plugin-cli [external] (@tauri-apps/plugin-cli, esm_import, async loader)");
    const matches = await getMatches();
    const args = matches?.args;
    const files = [];
    if (args) {
        for (const name of [
            'file1',
            'file2',
            'file3',
            'file4'
        ]){
            const arg = args[name];
            if (arg && arg.occurrences > 0) {
                files.push(arg.value);
            }
        }
    }
    return files;
};
const parseIntentOpenWithFiles = async (appService)=>{
    const urls = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$plugin$2d$deep$2d$link__$5b$external$5d$__$2840$tauri$2d$apps$2f$plugin$2d$deep$2d$link$2c$__esm_import$29$__["getCurrent"])();
    if (urls && urls.length > 0) {
        console.log('Intent Open with URL:', urls);
        return urls.map((url)=>{
            if (url.startsWith('file://')) {
                if (appService?.isIOSApp) {
                    return decodeURI(url);
                } else {
                    return decodeURI(url.replace('file://', ''));
                }
            } else if (url.startsWith('content://')) {
                return url;
            } else {
                console.info('Skip non-file URL:', url);
                return null;
            }
        }).filter((url)=>url !== null);
    }
    return null;
};
const parseOpenWithFiles = async (appService)=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["isWebAppPlatform"])()) return [];
    let files = parseWindowOpenWithFiles();
    if ((!files || files.length === 0) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["hasCli"])()) {
        files = await parseCLIOpenWithFiles();
    }
    if (!files || files.length === 0) {
        files = await parseIntentOpenWithFiles(appService);
    }
    return files;
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/readest-app/src/helpers/shortcuts.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "loadShortcuts",
    ()=>loadShortcuts,
    "saveShortcuts",
    ()=>saveShortcuts
]);
const DEFAULT_SHORTCUTS = {
    onSwitchSideBar: [
        'ctrl+Tab',
        'opt+Tab',
        'alt+Tab'
    ],
    onToggleSideBar: [
        's'
    ],
    onToggleNotebook: [
        'n'
    ],
    onShowSearchBar: [
        'ctrl+f',
        'cmd+f'
    ],
    onToggleScrollMode: [
        'shift+j'
    ],
    onToggleSelectMode: [
        'shift+s'
    ],
    onToggleBookmark: [
        'ctrl+d',
        'cmd+d'
    ],
    onToggleTTS: [
        't'
    ],
    onHighlightSelection: [
        'ctrl+h',
        'cmd+h'
    ],
    onUnderlineSelection: [
        'ctrl+u',
        'cmd+u'
    ],
    onAnnotateSelection: [
        'ctrl+n',
        'cmd+n'
    ],
    onSearchSelection: [
        'ctrl+f',
        'cmd+f'
    ],
    onCopySelection: [
        'ctrl+c',
        'cmd+c'
    ],
    onTranslateSelection: [
        'ctrl+t',
        'cmd+t'
    ],
    onDictionarySelection: [
        'ctrl+d',
        'cmd+d'
    ],
    onWikipediaSelection: [
        'ctrl+w',
        'cmd+w'
    ],
    onReadAloudSelection: [
        'ctrl+r',
        'cmd+r'
    ],
    onProofreadSelection: [
        'ctrl+p',
        'cmd+p'
    ],
    onOpenFontLayoutSettings: [
        'shift+f',
        'ctrl+,',
        'cmd+,'
    ],
    onOpenBooks: [
        'ctrl+o'
    ],
    onReloadPage: [
        'shift+r'
    ],
    onToggleFullscreen: [
        'F11'
    ],
    onCloseWindow: [
        'ctrl+w',
        'cmd+w'
    ],
    onQuitApp: [
        'ctrl+q',
        'cmd+q'
    ],
    onGoLeft: [
        'ArrowLeft',
        'h',
        'shift+ '
    ],
    onGoRight: [
        'ArrowRight',
        'l',
        ' '
    ],
    onGoUp: [
        'ArrowUp',
        'k'
    ],
    onGoDown: [
        'ArrowDown',
        'j'
    ],
    onGoNext: [
        'shift+j',
        'shift+ArrowRight',
        'shift+ArrowDown',
        'PageDown'
    ],
    onGoPrev: [
        'shift+k',
        'shift+ArrowLeft',
        'shift+ArrowUp',
        'PageUp'
    ],
    onGoLeftSection: [
        'opt+ArrowLeft',
        'alt+ArrowLeft'
    ],
    onGoRightSection: [
        'opt+ArrowRight',
        'alt+ArrowRight'
    ],
    onGoPrevSection: [
        'opt+ArrowUp',
        'alt+ArrowUp'
    ],
    onGoNextSection: [
        'opt+ArrowDown',
        'alt+ArrowDown'
    ],
    onGoHalfPageDown: [
        'shift+ArrowDown',
        'd'
    ],
    onGoHalfPageUp: [
        'shift+ArrowUp',
        'u'
    ],
    onGoBack: [
        'shift+ArrowLeft',
        'shift+h',
        'alt+ArrowLeft'
    ],
    onGoForward: [
        'shift+ArrowRight',
        'shift+l',
        'alt+ArrowRight'
    ],
    onZoomIn: [
        'ctrl+=',
        'cmd+=',
        'shift+='
    ],
    onZoomOut: [
        'ctrl+-',
        'cmd+-',
        'shift+-'
    ],
    onResetZoom: [
        'ctrl+0',
        'cmd+0'
    ],
    onSaveNote: [
        'ctrl+Enter'
    ],
    onEscape: [
        'Escape'
    ]
};
const loadShortcuts = ()=>{
    if (typeof localStorage === 'undefined') return DEFAULT_SHORTCUTS;
    const customShortcuts = JSON.parse(localStorage.getItem('customShortcuts') || '{}');
    return {
        ...DEFAULT_SHORTCUTS,
        ...customShortcuts
    };
};
const saveShortcuts = (shortcuts)=>{
    localStorage.setItem('customShortcuts', JSON.stringify(shortcuts));
};
}),
"[project]/apps/readest-app/src/helpers/settings.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "saveSysSettings",
    ()=>saveSysSettings,
    "saveViewSettings",
    ()=>saveViewSettings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/bookDataStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/readerStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/settingsStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$style$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/style.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$style$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$style$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
const saveViewSettings = async (envConfig, bookKey, key, value, skipGlobal = false, applyStyles = true)=>{
    const { settings, isSettingsGlobal, setSettings, saveSettings } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"].getState();
    const { bookKeys, getView, getViewState, getViewSettings, setViewSettings } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useReaderStore"].getState();
    const { getConfig, saveConfig } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useBookDataStore"].getState();
    const applyViewSettings = async (bookKey)=>{
        const viewSettings = getViewSettings(bookKey);
        const viewState = getViewState(bookKey);
        if (bookKey && viewSettings && viewSettings[key] !== value) {
            viewSettings[key] = value;
            setViewSettings(bookKey, viewSettings);
            if (applyStyles) {
                const view = getView(bookKey);
                view?.renderer.setStyles?.((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$style$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getStyles"])(viewSettings));
            }
            const config = getConfig(bookKey);
            if (viewState?.isPrimary && config) {
                await saveConfig(envConfig, bookKey, config, settings);
            }
        }
    };
    if (isSettingsGlobal && !skipGlobal) {
        settings.globalViewSettings[key] = value;
        setSettings(settings);
        for (const bookKey of bookKeys){
            await applyViewSettings(bookKey);
        }
        await saveSettings(envConfig, settings);
    } else if (bookKey) {
        await applyViewSettings(bookKey);
    }
};
const saveSysSettings = async (envConfig, key, value)=>{
    const { settings, setSettings, saveSettings } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"].getState();
    if (settings[key] !== value) {
        settings[key] = value;
        setSettings(settings);
        await saveSettings(envConfig, settings);
    }
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/readest-app/src/pages/reader/[ids].tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.28.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/router.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/context/AuthContext.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/context/EnvContext.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$PHContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/context/PHContext.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$SyncContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/context/SyncContext.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$Reader$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/app/reader/components/Reader.tsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$Reader$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$Reader$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
'use client';
;
;
;
;
;
;
;
function Page() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const ids = router.query['ids'];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$PHContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["CSPostHogProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["EnvProvider"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["AuthProvider"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$SyncContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["SyncProvider"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$Reader$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        ids: ids
                    }, void 0, false, {
                        fileName: "[project]/apps/readest-app/src/pages/reader/[ids].tsx",
                        lineNumber: 18,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/readest-app/src/pages/reader/[ids].tsx",
                    lineNumber: 17,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/pages/reader/[ids].tsx",
                lineNumber: 16,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/readest-app/src/pages/reader/[ids].tsx",
            lineNumber: 15,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/readest-app/src/pages/reader/[ids].tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=apps_readest-app_src_fd989f6e._.js.map