(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/readest-app/src/hooks/useTheme.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTheme",
    ()=>useTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react@19.2.0/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/context/EnvContext.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$themeStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/themeStore.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/settingsStore.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$styles$2f$themes$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/styles/themes.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$bridge$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/bridge.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/misc.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$ua$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/ua.ts [client] (ecmascript)");
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
const useTheme = ({ systemUIVisible = true, appThemeColor = 'base-100' } = {})=>{
    _s();
    const { appService } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["useEnv"])();
    const { settings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useSettingsStore"])();
    const { themeColor, isDarkMode, isEinkMode, showSystemUI, dismissSystemUI, updateAppTheme, setStatusBarHeight, systemUIAlwaysHidden, setSystemUIAlwaysHidden } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$themeStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useThemeStore"])();
    const useFallbackColors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTheme.useEffect": ()=>{
            updateAppTheme(appThemeColor);
            if (appService?.isAndroidApp) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$bridge$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getStatusBarHeight"])().then({
                    "useTheme.useEffect": (res)=>{
                        if (res.height && res.height > 0) {
                            setStatusBarHeight(res.height / window.devicePixelRatio);
                        }
                    }
                }["useTheme.useEffect"]);
            }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["useTheme.useEffect"], [
        appService?.isAndroidApp
    ]);
    const handleSystemUIVisibility = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTheme.useCallback[handleSystemUIVisibility]": ()=>{
            if (!appService?.isMobileApp) return;
            const visible = !!(systemUIVisible && !systemUIAlwaysHidden);
            if (visible) {
                showSystemUI();
            } else {
                dismissSystemUI();
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$bridge$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["setSystemUIVisibility"])({
                visible,
                darkMode: isDarkMode
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["useTheme.useCallback[handleSystemUIVisibility]"], [
        appService,
        isDarkMode,
        systemUIVisible
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTheme.useEffect": ()=>{
            if (appService?.isMobileApp) {
                handleSystemUIVisibility();
            }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["useTheme.useEffect"], [
        handleSystemUIVisibility
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTheme.useEffect": ()=>{
            if (!appService?.isMobileApp) return;
            handleSystemUIVisibility();
            const handleVisibilityChange = {
                "useTheme.useEffect.handleVisibilityChange": ()=>{
                    if (document.visibilityState === 'visible') {
                        handleSystemUIVisibility();
                    }
                }
            }["useTheme.useEffect.handleVisibilityChange"];
            const handleOrientationChange = {
                "useTheme.useEffect.handleOrientationChange": ()=>{
                    if (appService?.isIOSApp && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getOSPlatform"])() === 'ios') {
                        // FIXME: This is a workaround for iPhone apps where the system UI is not visible in landscape mode
                        // when the app is in fullscreen mode until we find a better solution to override the prefersStatusBarHidden
                        // in the ViewController. Note that screen.orientation.type is not abailable in iOS before 16.4.
                        const systemUIAlwaysHidden = screen.orientation?.type.includes('landscape');
                        setSystemUIAlwaysHidden(systemUIAlwaysHidden);
                        handleSystemUIVisibility();
                    }
                }
            }["useTheme.useEffect.handleOrientationChange"];
            document.addEventListener('visibilitychange', handleVisibilityChange);
            screen.orientation?.addEventListener('change', handleOrientationChange);
            return ({
                "useTheme.useEffect": ()=>{
                    document.removeEventListener('visibilitychange', handleVisibilityChange);
                    screen.orientation?.removeEventListener('change', handleOrientationChange);
                }
            })["useTheme.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["useTheme.useEffect"], [
        handleSystemUIVisibility
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTheme.useEffect": ()=>{
            if (!appService?.isAndroidApp) return;
            const webViewVersion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$ua$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["parseWebViewVersion"])(appService);
            // OKLCH color model is supported in Chromium 111+
            useFallbackColors.current = webViewVersion < 111;
        }
    }["useTheme.useEffect"], [
        appService
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTheme.useEffect": ()=>{
            if (!themeColor || !__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$styles$2f$themes$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["themes"].find({
                "useTheme.useEffect": (t)=>t.name === themeColor
            }["useTheme.useEffect"])) return;
            if (useFallbackColors.current) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$styles$2f$themes$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["applyCustomTheme"])(undefined, themeColor, true);
            }
        }
    }["useTheme.useEffect"], [
        themeColor
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTheme.useEffect": ()=>{
            const customThemes = settings.globalReadSettings?.customThemes ?? [];
            customThemes.forEach({
                "useTheme.useEffect": (customTheme)=>{
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$styles$2f$themes$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["applyCustomTheme"])(customTheme, undefined, useFallbackColors.current);
                }
            }["useTheme.useEffect"]);
            localStorage.setItem('customThemes', JSON.stringify(customThemes));
        }
    }["useTheme.useEffect"], [
        settings.globalReadSettings?.customThemes
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTheme.useEffect": ()=>{
            const colorScheme = isDarkMode ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', `${themeColor}-${colorScheme}`);
            document.documentElement.style.setProperty('color-scheme', colorScheme);
            document.documentElement.style.setProperty('--overlayer-highlight-opacity', isEinkMode ? '1.0' : '0.3');
            document.documentElement.style.setProperty('--overlayer-highlight-blend-mode', isEinkMode ? 'difference' : isDarkMode ? 'lighten' : 'normal');
            document.documentElement.style.setProperty('--bg-texture-blend-mode', isDarkMode ? 'lighten' : 'multiply');
        }
    }["useTheme.useEffect"], [
        themeColor,
        isDarkMode,
        isEinkMode
    ]);
};
_s(useTheme, "RI/dncitN9E3D5R51TCkUfNMDZk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["useEnv"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useSettingsStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$themeStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useThemeStore"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/readest-app/src/hooks/useLibrary.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLibrary",
    ()=>useLibrary
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react@19.2.0/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/context/EnvContext.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$libraryStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/libraryStore.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/settingsStore.ts [client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const useLibrary = ()=>{
    _s();
    const { envConfig } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["useEnv"])();
    const { setLibrary } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$libraryStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useLibraryStore"])();
    const { setSettings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useSettingsStore"])();
    const [libraryLoaded, setLibraryLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const isInitiating = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useLibrary.useEffect": ()=>{
            if (isInitiating.current) return;
            isInitiating.current = true;
            const initLibrary = {
                "useLibrary.useEffect.initLibrary": async ()=>{
                    const appService = await envConfig.getAppService();
                    const settings = await appService.loadSettings();
                    setSettings(settings);
                    setLibrary(await appService.loadLibraryBooks());
                    setLibraryLoaded(true);
                }
            }["useLibrary.useEffect.initLibrary"];
            initLibrary();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["useLibrary.useEffect"], []);
    return {
        libraryLoaded
    };
};
_s(useLibrary, "nFswrUCjRBcPeZKf9aFvIossv8c=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["useEnv"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$libraryStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useLibraryStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useSettingsStore"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/readest-app/src/hooks/useScreenWakeLock.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useScreenWakeLock",
    ()=>useScreenWakeLock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react@19.2.0/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$window$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tauri-apps+api@2.9.1/node_modules/@tauri-apps/api/window.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/environment.ts [client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const useScreenWakeLock = (lock)=>{
    _s();
    const wakeLockRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const unlistenOnFocusChangedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useScreenWakeLock.useEffect": ()=>{
            const requestWakeLock = {
                "useScreenWakeLock.useEffect.requestWakeLock": async ()=>{
                    try {
                        if ('wakeLock' in navigator) {
                            wakeLockRef.current = await navigator.wakeLock.request('screen');
                            wakeLockRef.current.addEventListener('release', {
                                "useScreenWakeLock.useEffect.requestWakeLock": ()=>{
                                    wakeLockRef.current = null;
                                }
                            }["useScreenWakeLock.useEffect.requestWakeLock"]);
                            console.log('Wake lock acquired');
                        }
                    } catch (err) {
                        console.info('Failed to acquire wake lock:', err);
                    }
                }
            }["useScreenWakeLock.useEffect.requestWakeLock"];
            const releaseWakeLock = {
                "useScreenWakeLock.useEffect.releaseWakeLock": ()=>{
                    if (wakeLockRef.current) {
                        wakeLockRef.current.release();
                        wakeLockRef.current = null;
                        console.log('Wake lock released');
                    }
                }
            }["useScreenWakeLock.useEffect.releaseWakeLock"];
            const handleVisibilityChange = {
                "useScreenWakeLock.useEffect.handleVisibilityChange": ()=>{
                    if (document.hidden) {
                        releaseWakeLock();
                    } else {
                        requestWakeLock();
                    }
                }
            }["useScreenWakeLock.useEffect.handleVisibilityChange"];
            if (lock) {
                requestWakeLock();
            } else if (wakeLockRef.current) {
                releaseWakeLock();
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["isWebAppPlatform"])() && lock) {
                document.addEventListener('visibilitychange', handleVisibilityChange);
            } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["isTauriAppPlatform"])() && lock) {
                unlistenOnFocusChangedRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$window$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getCurrentWindow"])().onFocusChanged({
                    "useScreenWakeLock.useEffect": ({ payload: focused })=>{
                        if (focused) {
                            requestWakeLock();
                        } else {
                            releaseWakeLock();
                        }
                    }
                }["useScreenWakeLock.useEffect"]);
            }
            return ({
                "useScreenWakeLock.useEffect": ()=>{
                    releaseWakeLock();
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["isWebAppPlatform"])() && lock) {
                        document.removeEventListener('visibilitychange', handleVisibilityChange);
                    }
                    if (unlistenOnFocusChangedRef.current) {
                        unlistenOnFocusChangedRef.current.then({
                            "useScreenWakeLock.useEffect": (f)=>f()
                        }["useScreenWakeLock.useEffect"]);
                    }
                }
            })["useScreenWakeLock.useEffect"];
        }
    }["useScreenWakeLock.useEffect"], [
        lock
    ]);
};
_s(useScreenWakeLock, "8CBJg4ZKShkyNpMQh6OCLXBeGrA=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/readest-app/src/hooks/useTranslation.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTranslation",
    ()=>useTranslation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$i18n$2f$i18n$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/i18n/i18n.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react@19.2.0/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$i18next$40$15$2e$2$2e$0_i18next$40$24$2e$2$2e$0_typescript$40$5$2e$7$2e$2_$5f$react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-i18next@15.2.0_i18next@24.2.0_typescript@5.7.2__react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/react-i18next/dist/es/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$i18next$40$15$2e$2$2e$0_i18next$40$24$2e$2$2e$0_typescript$40$5$2e$7$2e$2_$5f$react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-i18next@15.2.0_i18next@24.2.0_typescript@5.7.2__react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/react-i18next/dist/es/useTranslation.js [client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const useTranslation = (namespace = 'translation')=>{
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$i18next$40$15$2e$2$2e$0_i18next$40$24$2e$2$2e$0_typescript$40$5$2e$7$2e$2_$5f$react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useTranslation"])(namespace);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTranslation.useCallback": (key, options = {})=>t(key, {
                defaultValue: key,
                ...options
            })
    }["useTranslation.useCallback"], [
        t
    ]);
};
_s(useTranslation, "epj4qY15NHsef74wNqHIp5fdZmg=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/readest-app/src/hooks/useTransferQueue.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTransferQueue",
    ()=>useTransferQueue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react@19.2.0/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/context/EnvContext.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/hooks/useTranslation.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$libraryStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/libraryStore.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$transferStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/transferStore.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$transferManager$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/transferManager.ts [client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function useTransferQueue(libraryLoaded = true, delayInit = 0) {
    _s();
    const { envConfig, appService } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["useEnv"])();
    const _ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const transfers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$transferStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useTransferStore"])({
        "useTransferQueue.useTransferStore[transfers]": (state)=>state.transfers
    }["useTransferQueue.useTransferStore[transfers]"]);
    const isQueuePaused = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$transferStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useTransferStore"])({
        "useTransferQueue.useTransferStore[isQueuePaused]": (state)=>state.isQueuePaused
    }["useTransferQueue.useTransferStore[isQueuePaused]"]);
    const setIsTransferQueueOpen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$transferStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useTransferStore"])({
        "useTransferQueue.useTransferStore[setIsTransferQueueOpen]": (state)=>state.setIsTransferQueueOpen
    }["useTransferQueue.useTransferStore[setIsTransferQueueOpen]"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTransferQueue.useEffect": ()=>{
            const initManager = {
                "useTransferQueue.useEffect.initManager": async ()=>{
                    if (appService && envConfig) {
                        const getLibrary = {
                            "useTransferQueue.useEffect.initManager.getLibrary": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$libraryStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useLibraryStore"].getState().library
                        }["useTransferQueue.useEffect.initManager.getLibrary"];
                        const updateBookFn = {
                            "useTransferQueue.useEffect.initManager.updateBookFn": async (book)=>{
                                await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$libraryStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useLibraryStore"].getState().updateBook(envConfig, book);
                            }
                        }["useTransferQueue.useEffect.initManager.updateBookFn"];
                        const translationFn = _;
                        await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$transferManager$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["transferManager"].initialize(appService, getLibrary, updateBookFn, translationFn);
                    }
                }
            }["useTransferQueue.useEffect.initManager"];
            // Initialize transfer manager only when library is loaded
            if (libraryLoaded) {
                setTimeout({
                    "useTransferQueue.useEffect": ()=>{
                        initManager();
                    }
                }["useTransferQueue.useEffect"], delayInit);
            }
        }
    }["useTransferQueue.useEffect"], [
        appService,
        envConfig,
        libraryLoaded,
        delayInit,
        _
    ]);
    const queueUpload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTransferQueue.useCallback[queueUpload]": (book, priority)=>{
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$transferManager$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["transferManager"].queueUpload(book, priority);
        }
    }["useTransferQueue.useCallback[queueUpload]"], []);
    const queueDownload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTransferQueue.useCallback[queueDownload]": (book, priority)=>{
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$transferManager$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["transferManager"].queueDownload(book, priority);
        }
    }["useTransferQueue.useCallback[queueDownload]"], []);
    const queueBatchUploads = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTransferQueue.useCallback[queueBatchUploads]": (books, priority)=>{
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$transferManager$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["transferManager"].queueBatchUploads(books, priority);
        }
    }["useTransferQueue.useCallback[queueBatchUploads]"], []);
    const cancelTransfer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTransferQueue.useCallback[cancelTransfer]": (transferId)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$transferManager$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["transferManager"].cancelTransfer(transferId);
        }
    }["useTransferQueue.useCallback[cancelTransfer]"], []);
    const retryTransfer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTransferQueue.useCallback[retryTransfer]": (transferId)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$transferManager$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["transferManager"].retryTransfer(transferId);
        }
    }["useTransferQueue.useCallback[retryTransfer]"], []);
    const retryAllFailed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTransferQueue.useCallback[retryAllFailed]": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$transferManager$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["transferManager"].retryAllFailed();
        }
    }["useTransferQueue.useCallback[retryAllFailed]"], []);
    const pauseQueue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTransferQueue.useCallback[pauseQueue]": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$transferManager$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["transferManager"].pauseQueue();
        }
    }["useTransferQueue.useCallback[pauseQueue]"], []);
    const resumeQueue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTransferQueue.useCallback[resumeQueue]": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$transferManager$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["transferManager"].resumeQueue();
        }
    }["useTransferQueue.useCallback[resumeQueue]"], []);
    const clearCompleted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTransferQueue.useCallback[clearCompleted]": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$transferStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useTransferStore"].getState().clearCompleted();
        }
    }["useTransferQueue.useCallback[clearCompleted]"], []);
    const clearFailed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTransferQueue.useCallback[clearFailed]": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$transferStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useTransferStore"].getState().clearFailed();
        }
    }["useTransferQueue.useCallback[clearFailed]"], []);
    const clearAll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTransferQueue.useCallback[clearAll]": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$transferStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useTransferStore"].getState().clearAll();
        }
    }["useTransferQueue.useCallback[clearAll]"], []);
    const getTransferProgress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTransferQueue.useCallback[getTransferProgress]": (bookHash, type)=>{
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$transferStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useTransferStore"].getState().getTransferByBookHash(bookHash, type);
        }
    }["useTransferQueue.useCallback[getTransferProgress]"], []);
    const stats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useTransferQueue.useMemo[stats]": ()=>{
            const transferList = Object.values(transfers);
            return {
                pending: transferList.filter({
                    "useTransferQueue.useMemo[stats]": (t)=>t.status === 'pending'
                }["useTransferQueue.useMemo[stats]"]).length,
                active: transferList.filter({
                    "useTransferQueue.useMemo[stats]": (t)=>t.status === 'in_progress'
                }["useTransferQueue.useMemo[stats]"]).length,
                completed: transferList.filter({
                    "useTransferQueue.useMemo[stats]": (t)=>t.status === 'completed'
                }["useTransferQueue.useMemo[stats]"]).length,
                failed: transferList.filter({
                    "useTransferQueue.useMemo[stats]": (t)=>t.status === 'failed' || t.status === 'cancelled'
                }["useTransferQueue.useMemo[stats]"]).length,
                total: transferList.length
            };
        }
    }["useTransferQueue.useMemo[stats]"], [
        transfers
    ]);
    const pendingTransfers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useTransferQueue.useMemo[pendingTransfers]": ()=>{
            return Object.values(transfers).filter({
                "useTransferQueue.useMemo[pendingTransfers]": (t)=>t.status === 'pending'
            }["useTransferQueue.useMemo[pendingTransfers]"]);
        }
    }["useTransferQueue.useMemo[pendingTransfers]"], [
        transfers
    ]);
    const activeTransfers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useTransferQueue.useMemo[activeTransfers]": ()=>{
            return Object.values(transfers).filter({
                "useTransferQueue.useMemo[activeTransfers]": (t)=>t.status === 'in_progress'
            }["useTransferQueue.useMemo[activeTransfers]"]);
        }
    }["useTransferQueue.useMemo[activeTransfers]"], [
        transfers
    ]);
    const failedTransfers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useTransferQueue.useMemo[failedTransfers]": ()=>{
            return Object.values(transfers).filter({
                "useTransferQueue.useMemo[failedTransfers]": (t)=>t.status === 'failed' || t.status === 'cancelled'
            }["useTransferQueue.useMemo[failedTransfers]"]);
        }
    }["useTransferQueue.useMemo[failedTransfers]"], [
        transfers
    ]);
    const completedTransfers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useTransferQueue.useMemo[completedTransfers]": ()=>{
            return Object.values(transfers).filter({
                "useTransferQueue.useMemo[completedTransfers]": (t)=>t.status === 'completed'
            }["useTransferQueue.useMemo[completedTransfers]"]);
        }
    }["useTransferQueue.useMemo[completedTransfers]"], [
        transfers
    ]);
    const hasActiveTransfers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useTransferQueue.useMemo[hasActiveTransfers]": ()=>{
            return pendingTransfers.length > 0 || activeTransfers.length > 0;
        }
    }["useTransferQueue.useMemo[hasActiveTransfers]"], [
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
_s(useTransferQueue, "5oGD4RPNQFb2EzJmybok1NIHPwk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["useEnv"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$transferStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useTransferStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$transferStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useTransferStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$transferStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useTransferStore"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/readest-app/src/hooks/useTranslator.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTranslator",
    ()=>useTranslator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react@19.2.0/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/context/AuthContext.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$translators$2f$index$2e$ts__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/translators/index.ts [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$translators$2f$types$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/translators/types.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$translators$2f$providers$2f$index$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/translators/providers/index.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$translators$2f$cache$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/translators/cache.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$translators$2f$polish$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/translators/polish.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$translators$2f$preprocess$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/translators/preprocess.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/event.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/misc.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/hooks/useTranslation.ts [client] (ecmascript)");
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
function useTranslator({ provider = 'deepl', sourceLang = 'AUTO', targetLang = 'EN', enablePolishing = true, enablePreprocessing = true } = {}) {
    _s();
    const _ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const { token } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedProvider, setSelectedProvider] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(provider);
    const [translator, setTransltor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({
        "useTranslator.useState": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$translators$2f$providers$2f$index$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getTranslator"])(provider)
    }["useTranslator.useState"]);
    const [translators] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({
        "useTranslator.useState": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$translators$2f$providers$2f$index$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getTranslators"])()
    }["useTranslator.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTranslator.useEffect": ()=>{
            setLoading(false);
        }
    }["useTranslator.useEffect"], [
        provider,
        sourceLang,
        targetLang
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTranslator.useEffect": ()=>{
            const availableTranslators = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$translators$2f$providers$2f$index$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getTranslators"])().filter({
                "useTranslator.useEffect.availableTranslators": (t)=>(t.authRequired ? !!token : true) && !t.quotaExceeded
            }["useTranslator.useEffect.availableTranslators"]);
            const selectedTranslator = availableTranslators.find({
                "useTranslator.useEffect": (t)=>t.name === provider
            }["useTranslator.useEffect"]) || availableTranslators[0];
            const selectedProviderName = selectedTranslator.name;
            setTransltor((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$translators$2f$providers$2f$index$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getTranslator"])(selectedProviderName));
            setSelectedProvider(selectedProviderName);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["useTranslator.useEffect"], [
        provider
    ]);
    const translate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTranslator.useCallback[translate]": async (input, options)=>{
            const sourceLanguage = options?.source || sourceLang;
            const targetLanguage = options?.target || targetLang || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getLocale"])();
            const useCache = options?.useCache ?? false;
            const textsToTranslate = enablePreprocessing ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$translators$2f$preprocess$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["preprocess"])(input) : input;
            if (textsToTranslate.length === 0 || textsToTranslate.every({
                "useTranslator.useCallback[translate]": (t)=>!t?.trim()
            }["useTranslator.useCallback[translate]"])) {
                return textsToTranslate;
            }
            const textsNeedingTranslation = [];
            const indicesNeedingTranslation = [];
            await Promise.all(textsToTranslate.map({
                "useTranslator.useCallback[translate]": async (text, index)=>{
                    if (!text?.trim()) return;
                    const cachedTranslation = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$translators$2f$cache$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getFromCache"])(text, sourceLanguage, targetLanguage, selectedProvider);
                    if (cachedTranslation) return;
                    textsNeedingTranslation.push(text);
                    indicesNeedingTranslation.push(index);
                }
            }["useTranslator.useCallback[translate]"]));
            if (textsNeedingTranslation.length === 0) {
                const results = await Promise.all(textsToTranslate.map({
                    "useTranslator.useCallback[translate]": (text)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$translators$2f$cache$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getFromCache"])(text, sourceLanguage, targetLanguage, selectedProvider).then({
                            "useTranslator.useCallback[translate]": (cached)=>cached || text
                        }["useTranslator.useCallback[translate]"])
                }["useTranslator.useCallback[translate]"]));
                return enablePolishing ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$translators$2f$polish$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["polish"])(results, targetLanguage) : results;
            }
            setLoading(true);
            try {
                const translator = translators.find({
                    "useTranslator.useCallback[translate].translator": (t)=>t.name === selectedProvider
                }["useTranslator.useCallback[translate].translator"]);
                if (!translator) {
                    throw new Error(`No translator found for provider: ${selectedProvider}`);
                }
                const translatedTexts = await translator.translate(textsNeedingTranslation, sourceLanguage, targetLanguage, token, useCache);
                await Promise.all(textsNeedingTranslation.map({
                    "useTranslator.useCallback[translate]": async (text, index)=>{
                        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$translators$2f$cache$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["storeInCache"])(text, translatedTexts[index] || '', sourceLanguage, targetLanguage, selectedProvider);
                    }
                }["useTranslator.useCallback[translate]"]));
                const results = [
                    ...textsToTranslate
                ];
                indicesNeedingTranslation.forEach({
                    "useTranslator.useCallback[translate]": (originalIndex, translationIndex)=>{
                        results[originalIndex] = translatedTexts[translationIndex] || '';
                    }
                }["useTranslator.useCallback[translate]"]);
                await Promise.all(results.map({
                    "useTranslator.useCallback[translate]": async (_, index)=>{
                        if (!indicesNeedingTranslation.includes(index)) {
                            const originalText = textsToTranslate[index];
                            if (!originalText?.trim()) return;
                            const cachedTranslation = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$translators$2f$cache$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getFromCache"])(originalText, sourceLanguage, targetLanguage, selectedProvider);
                            if (cachedTranslation) {
                                results[index] = cachedTranslation;
                            }
                        }
                    }
                }["useTranslator.useCallback[translate]"]));
                setLoading(false);
                return enablePolishing ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$translators$2f$polish$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["polish"])(results, targetLanguage) : results;
            } catch (err) {
                if (err instanceof Error && err.message.includes(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$translators$2f$types$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["ErrorCodes"].DAILY_QUOTA_EXCEEDED)) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["eventDispatcher"].dispatch('toast', {
                        timeout: 5000,
                        message: _('Daily translation quota reached. Upgrade your plan to continue using AI translations.'),
                        type: 'error'
                    });
                    setSelectedProvider('azure');
                }
                setLoading(false);
                throw err instanceof Error ? err : new Error(String(err));
            }
        }
    }["useTranslator.useCallback[translate]"], // eslint-disable-next-line react-hooks/exhaustive-deps
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
_s(useTranslator, "YB6mnT+rSfWjEjNIkxE90zoLncw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/readest-app/src/hooks/useDrag.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDrag",
    ()=>useDrag
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react@19.2.0/node_modules/react/index.js [client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
const useDrag = (onDragMove, onDragKeyDown, onDragEnd)=>{
    _s();
    const isDragging = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const startX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const startY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const lastX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const lastY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const startTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const handleDragStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDrag.useCallback[handleDragStart]": (e)=>{
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
            const handleMove = {
                "useDrag.useCallback[handleDragStart].handleMove": (event)=>{
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
                }
            }["useDrag.useCallback[handleDragStart].handleMove"];
            const handleEnd = {
                "useDrag.useCallback[handleDragStart].handleEnd": (event)=>{
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
                }
            }["useDrag.useCallback[handleDragStart].handleEnd"];
            window.addEventListener('mousemove', handleMove, {
                passive: true
            });
            window.addEventListener('mouseup', handleEnd);
            window.addEventListener('touchmove', handleMove, {
                passive: true
            });
            window.addEventListener('touchend', handleEnd);
        }
    }["useDrag.useCallback[handleDragStart]"], [
        onDragMove,
        onDragEnd
    ]);
    const handleDragKeyDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDrag.useCallback[handleDragKeyDown]": (e)=>{
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
        }
    }["useDrag.useCallback[handleDragKeyDown]"], [
        onDragKeyDown
    ]);
    return {
        handleDragStart,
        handleDragKeyDown
    };
};
_s(useDrag, "z+YoHFbhXmjwBy/3hY5+jK1HhDw=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/readest-app/src/hooks/useResponsiveSize.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDefaultIconSize",
    ()=>useDefaultIconSize,
    "useResponsiveSize",
    ()=>useResponsiveSize
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$responsive$40$10$2e$0$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$responsive$2f$dist$2f$esm$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-responsive@10.0.0_react@19.2.0/node_modules/react-responsive/dist/esm/index.js [client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
;
const useResponsiveSize = (baseSize)=>{
    _s();
    const isPhone = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$responsive$40$10$2e$0$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$responsive$2f$dist$2f$esm$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMediaQuery"])({
        maxWidth: 480
    });
    const isTablet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$responsive$40$10$2e$0$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$responsive$2f$dist$2f$esm$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMediaQuery"])({
        minWidth: 481,
        maxWidth: 1024
    });
    if (isPhone) return baseSize * 1.25;
    if (isTablet) return baseSize * 1.25;
    return baseSize;
};
_s(useResponsiveSize, "MtFw344R/TzD6oBb3B8N31XGolk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$responsive$40$10$2e$0$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$responsive$2f$dist$2f$esm$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMediaQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$responsive$40$10$2e$0$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$responsive$2f$dist$2f$esm$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMediaQuery"]
    ];
});
const useDefaultIconSize = ()=>{
    _s1();
    return useResponsiveSize(20);
};
_s1(useDefaultIconSize, "BSY+zbCWaoBNRh5O7hrQhGoObxg=", false, function() {
    return [
        useResponsiveSize
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/readest-app/src/hooks/useKeyDownActions.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useKeyDownActions",
    ()=>useKeyDownActions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react@19.2.0/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/context/EnvContext.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$deviceStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/deviceStore.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/event.ts [client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const useKeyDownActions = ({ onCancel, onConfirm, enabled = true, elementRef: providedRef })=>{
    _s();
    const { appService } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["useEnv"])();
    const { acquireBackKeyInterception, releaseBackKeyInterception } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$deviceStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useDeviceControlStore"])();
    const internalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const elementRef = providedRef || internalRef;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useKeyDownActions.useEffect": ()=>{
            if (!enabled) return;
            const handleKeyDown = {
                "useKeyDownActions.useEffect.handleKeyDown": (event)=>{
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
                }
            }["useKeyDownActions.useEffect.handleKeyDown"];
            window.addEventListener('keydown', handleKeyDown);
            if (elementRef.current) {
                elementRef.current.addEventListener('keydown', handleKeyDown);
            }
            if (appService?.isAndroidApp) {
                acquireBackKeyInterception?.();
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["eventDispatcher"].onSync('native-key-down', handleKeyDown);
            }
            return ({
                "useKeyDownActions.useEffect": ()=>{
                    window.removeEventListener('keydown', handleKeyDown);
                    if (appService?.isAndroidApp) {
                        releaseBackKeyInterception?.();
                        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["eventDispatcher"].offSync('native-key-down', handleKeyDown);
                    }
                }
            })["useKeyDownActions.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["useKeyDownActions.useEffect"], [
        enabled,
        appService?.isAndroidApp
    ]);
    return internalRef;
};
_s(useKeyDownActions, "BWXFIIMjPDzy4x5WSr4CJ7NuAw0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["useEnv"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$deviceStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useDeviceControlStore"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/readest-app/src/hooks/useFileSelector.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FILE_SELECTION_PRESETS",
    ()=>FILE_SELECTION_PRESETS,
    "useFileSelector",
    ()=>useFileSelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/environment.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$path$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tauri-apps+api@2.9.1/node_modules/@tauri-apps/api/path.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/misc.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/constants.ts [client] (ecmascript)");
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
                processedFile = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$path$2e$js__$5b$client$5d$__$28$ecmascript$29$__["basename"])(file);
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
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["isTauriAppPlatform"])()) {
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
        dialogTitle: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["stubTranslation"])('Select Files')
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
        dialogTitle: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["stubTranslation"])('Select Image')
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
        dialogTitle: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["stubTranslation"])('Select Video')
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
        dialogTitle: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["stubTranslation"])('Select Audio')
    },
    books: {
        accept: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["BOOK_ACCEPT_FORMATS"],
        extensions: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["SUPPORTED_BOOK_EXTS"],
        dialogTitle: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["stubTranslation"])('Select Books')
    },
    fonts: {
        accept: '.ttf, .otf, .woff, .woff2',
        extensions: [
            'ttf',
            'otf',
            'woff',
            'woff2'
        ],
        dialogTitle: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["stubTranslation"])('Select Fonts')
    },
    covers: {
        accept: '.png, .jpg, .jpeg, .gif',
        extensions: [
            'png',
            'jpg',
            'jpeg',
            'gif'
        ],
        dialogTitle: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["stubTranslation"])('Select Image')
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/readest-app/src/hooks/useShortcuts.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react@19.2.0/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$helpers$2f$shortcuts$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/helpers/shortcuts.ts [client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const useShortcuts = (actions, dependencies = [])=>{
    _s();
    const [shortcuts, setShortcuts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$helpers$2f$shortcuts$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["loadShortcuts"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useShortcuts.useEffect": ()=>{
            const handleShortcutUpdate = {
                "useShortcuts.useEffect.handleShortcutUpdate": ()=>{
                    setShortcuts((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$helpers$2f$shortcuts$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["loadShortcuts"])());
                }
            }["useShortcuts.useEffect.handleShortcutUpdate"];
            window.addEventListener('shortcutUpdate', handleShortcutUpdate);
            return ({
                "useShortcuts.useEffect": ()=>window.removeEventListener('shortcutUpdate', handleShortcutUpdate)
            })["useShortcuts.useEffect"];
        }
    }["useShortcuts.useEffect"], []);
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useShortcuts.useEffect": ()=>{
            window.addEventListener('keydown', unifiedHandleKeyDown);
            window.addEventListener('message', unifiedHandleKeyDown);
            return ({
                "useShortcuts.useEffect": ()=>{
                    window.removeEventListener('keydown', unifiedHandleKeyDown);
                    window.removeEventListener('message', unifiedHandleKeyDown);
                }
            })["useShortcuts.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["useShortcuts.useEffect"], [
        shortcuts,
        ...dependencies
    ]);
};
_s(useShortcuts, "MmfSUZl5adajSORXp+QJ0QW0Zz8=");
const __TURBOPACK__default__export__ = useShortcuts;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/readest-app/src/hooks/useTrafficLight.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTrafficLight",
    ()=>useTrafficLight
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react@19.2.0/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/context/EnvContext.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$trafficLightStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/trafficLightStore.ts [client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const useTrafficLight = ()=>{
    _s();
    const { appService } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["useEnv"])();
    const { isTrafficLightVisible, initializeTrafficLightStore, initializeTrafficLightListeners, setTrafficLightVisibility, cleanupTrafficLightListeners } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$trafficLightStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useTrafficLightStore"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTrafficLight.useEffect": ()=>{
            if (!appService?.hasTrafficLight) return;
            initializeTrafficLightStore(appService);
            initializeTrafficLightListeners();
            setTrafficLightVisibility(true);
            return ({
                "useTrafficLight.useEffect": ()=>{
                    cleanupTrafficLightListeners();
                }
            })["useTrafficLight.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["useTrafficLight.useEffect"], [
        appService?.hasTrafficLight
    ]);
    return {
        isTrafficLightVisible
    };
};
_s(useTrafficLight, "EYwbo4Qz8LVtIz/MBVcHEr3Gruw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["useEnv"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$trafficLightStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useTrafficLightStore"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/readest-app/src/hooks/useSync.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSync",
    ()=>useSync
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react@19.2.0/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.28.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/navigation.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$SyncContext$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/context/SyncContext.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/settingsStore.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/bookDataStore.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$transform$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/transform.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$nav$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/nav.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/readerStore.ts [client] (ecmascript)");
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
const transformsFromDB = {
    books: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$transform$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["transformBookFromDB"],
    notes: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$transform$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["transformBookNoteFromDB"],
    configs: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$transform$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["transformBookConfigFromDB"]
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
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { settings, setSettings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useSettingsStore"])();
    const { getConfig, setConfig } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useBookDataStore"])();
    const { setIsSyncing } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useReaderStore"])();
    const config = bookKey ? getConfig(bookKey) : null;
    const [syncingBooks, setSyncingBooks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [syncingConfigs, setSyncingConfigs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [syncingNotes, setSyncingNotes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [syncError, setSyncError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [lastSyncedAtBooks, setLastSyncedAtBooks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [lastSyncedAtConfigs, setLastSyncedAtConfigs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [lastSyncedAtNotes, setLastSyncedAtNotes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [lastSyncedAtInited, setLastSyncedAtInited] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [syncing, setSyncing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // null means unsynced, empty array means synced no changes
    const [syncResult, setSyncResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({
        books: null,
        configs: null,
        notes: null
    });
    const [syncedBooks, setSyncedBooks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [syncedConfigs, setSyncedConfigs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [syncedNotes, setSyncedNotes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const { syncClient } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$SyncContext$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["useSyncContext"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useSync.useEffect": ()=>{
            if (!bookKey) return;
            setIsSyncing(bookKey, syncing);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["useSync.useEffect"], [
        bookKey,
        syncing
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useSync.useEffect": ()=>{
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
        }
    }["useSync.useEffect"], [
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
            const settings = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useSettingsStore"].getState().settings;
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
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$nav$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["navigateToLogin"])(router);
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
    const syncBooks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSync.useCallback[syncBooks]": async (books, op = 'both')=>{
            if (!lastSyncedAtInited) return;
            if ((op === 'push' || op === 'both') && books?.length) {
                await pushChanges({
                    books
                });
            }
            if (op === 'pull' || op === 'both') {
                await pullChanges('books', lastSyncedAtBooks + 1, setLastSyncedAtBooks, setSyncingBooks);
            }
        }
    }["useSync.useCallback[syncBooks]"], // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        lastSyncedAtInited,
        lastSyncedAtBooks
    ]);
    const syncConfigs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSync.useCallback[syncConfigs]": async (bookConfigs, bookId, metaHash, op = 'both')=>{
            if (!bookId && !lastSyncedAtInited) return;
            if ((op === 'push' || op === 'both') && bookConfigs?.length) {
                await pushChanges({
                    configs: bookConfigs
                });
            }
            if (op === 'pull' || op === 'both') {
                await pullChanges('configs', lastSyncedAtConfigs, setLastSyncedAtConfigs, setSyncingConfigs, bookId, metaHash);
            }
        }
    }["useSync.useCallback[syncConfigs]"], // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        lastSyncedAtInited,
        lastSyncedAtConfigs
    ]);
    const syncNotes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSync.useCallback[syncNotes]": async (bookNotes, bookId, metaHash, op = 'both')=>{
            if (!lastSyncedAtInited) return;
            if ((op === 'push' || op === 'both') && bookNotes?.length) {
                await pushChanges({
                    notes: bookNotes
                });
            }
            if (op === 'pull' || op === 'both') {
                await pullChanges('notes', lastSyncedAtNotes, setLastSyncedAtNotes, setSyncingNotes, bookId, metaHash);
            }
        }
    }["useSync.useCallback[syncNotes]"], // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        lastSyncedAtInited,
        lastSyncedAtNotes
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useSync.useEffect": ()=>{
            if (!syncing && syncResult) {
                const { books: dbBooks, configs: dbBookConfigs, notes: dbBookNotes } = syncResult;
                const books = dbBooks?.map({
                    "useSync.useEffect": (dbBook)=>transformsFromDB['books'](dbBook)
                }["useSync.useEffect"]);
                const configs = dbBookConfigs?.map({
                    "useSync.useEffect": (dbBookConfig)=>transformsFromDB['configs'](dbBookConfig)
                }["useSync.useEffect"]);
                const notes = dbBookNotes?.map({
                    "useSync.useEffect": (dbBookNote)=>transformsFromDB['notes'](dbBookNote)
                }["useSync.useEffect"]);
                if (books) setSyncedBooks(books);
                if (configs) setSyncedConfigs(configs);
                if (notes) setSyncedNotes(notes);
            }
        }
    }["useSync.useEffect"], [
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
_s(useSync, "gL7Q6lq8uur/ouN0tveTCzfWP/w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useSettingsStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useBookDataStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useReaderStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$SyncContext$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["useSyncContext"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/readest-app/src/hooks/useBackgroundTexture.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useBackgroundTexture",
    ()=>useBackgroundTexture
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react@19.2.0/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$customTextureStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/customTextureStore.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/settingsStore.ts [client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const useBackgroundTexture = ()=>{
    _s();
    const applyBackgroundTexture = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useBackgroundTexture.useCallback[applyBackgroundTexture]": (envConfig, viewSettings)=>{
            const textureId = viewSettings.backgroundTextureId;
            const textureOpacity = viewSettings.backgroundOpacity;
            const textureSize = viewSettings.backgroundSize;
            if (!textureId || textureId === 'none') return;
            document.documentElement.style.setProperty('--bg-texture-opacity', `${textureOpacity}`);
            document.documentElement.style.setProperty('--bg-texture-size', textureSize);
            const settings = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useSettingsStore"].getState().settings;
            const customTexture = settings.customTextures?.find({
                "useBackgroundTexture.useCallback[applyBackgroundTexture]": (t)=>t.id === textureId
            }["useBackgroundTexture.useCallback[applyBackgroundTexture]"]);
            if (customTexture) {
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$customTextureStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useCustomTextureStore"].getState().addTexture(customTexture.path);
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$customTextureStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useCustomTextureStore"].getState().applyTexture(envConfig, textureId);
        }
    }["useBackgroundTexture.useCallback[applyBackgroundTexture]"], []);
    return {
        applyBackgroundTexture
    };
};
_s(useBackgroundTexture, "2774keGlz65Y7X8fPD0ljVCbsAc=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/readest-app/src/hooks/useAutoFocus.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAutoFocus",
    ()=>useAutoFocus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react@19.2.0/node_modules/react/index.js [client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
const useAutoFocus = (options = {})=>{
    _s();
    const { delay = 0, condition = true, preventScroll = false, ref } = options;
    const localRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const focusRef = ref || localRef;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAutoFocus.useEffect": ()=>{
            if (condition && focusRef.current) {
                const focusElement = {
                    "useAutoFocus.useEffect.focusElement": ()=>{
                        focusRef.current?.focus({
                            preventScroll
                        });
                    }
                }["useAutoFocus.useEffect.focusElement"];
                if (delay > 0) {
                    const timer = setTimeout(focusElement, delay);
                    return ({
                        "useAutoFocus.useEffect": ()=>clearTimeout(timer)
                    })["useAutoFocus.useEffect"];
                } else {
                    focusElement();
                }
            }
            return;
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["useAutoFocus.useEffect"], [
        condition,
        delay,
        preventScroll
    ]);
    return focusRef;
};
_s(useAutoFocus, "28K6HmXVpFGf/iqhT8LTjwTKC6E=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/readest-app/src/hooks/useEinkMode.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useEinkMode",
    ()=>useEinkMode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$themeStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/themeStore.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react@19.2.0/node_modules/react/index.js [client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const useEinkMode = ()=>{
    _s();
    const { setIsEinkMode } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$themeStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useThemeStore"])();
    const applyEinkMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useEinkMode.useCallback[applyEinkMode]": (isEink)=>{
            setIsEinkMode(isEink);
            if (isEink) {
                document.body.classList.add('no-transitions');
            } else {
                document.body.classList.remove('no-transitions');
            }
            document.documentElement.setAttribute('data-eink', isEink.toString());
        }
    }["useEinkMode.useCallback[applyEinkMode]"], [
        setIsEinkMode
    ]);
    return {
        applyEinkMode
    };
};
_s(useEinkMode, "T9cnMZnnl43ANae5fgu4MgrZv3Q=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$themeStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useThemeStore"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/readest-app/src/hooks/useUICSS.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useUICSS",
    ()=>useUICSS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react@19.2.0/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/readerStore.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/settingsStore.ts [client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const useUICSS = (bookKey)=>{
    _s();
    const { settings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useSettingsStore"])();
    const { getViewSettings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useReaderStore"])();
    const viewSettings = getViewSettings(bookKey || '');
    const [styleElement, setStyleElement] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useUICSS.useEffect": ()=>{
            if (styleElement) {
                styleElement.remove();
            }
            const rawCSS = viewSettings?.userUIStylesheet || settings?.globalViewSettings?.userUIStylesheet || '';
            const newStyleEl = document.createElement('style');
            newStyleEl.textContent = rawCSS.replace('foliate-view', `#foliate-view-${bookKey}`);
            document.head.appendChild(newStyleEl);
            setStyleElement(newStyleEl);
            return ({
                "useUICSS.useEffect": ()=>{
                    newStyleEl.remove();
                }
            })["useUICSS.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["useUICSS.useEffect"], [
        viewSettings?.userUIStylesheet,
        settings?.globalViewSettings?.userUIStylesheet,
        bookKey
    ]);
};
_s(useUICSS, "6jkdk7lMmhefA76CjGJGvRZ5sV4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useSettingsStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useReaderStore"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/readest-app/src/hooks/useDiscordPresence.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDiscordPresence",
    ()=>useDiscordPresence
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react@19.2.0/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/context/EnvContext.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$discord$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/discord.ts [client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const useDiscordPresence = (book, isPrimary, enabled)=>{
    _s();
    const { appService } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["useEnv"])();
    const sessionStartRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(Date.now());
    const updateIntervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const currentBookHashRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isUpdatingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useDiscordPresence.useEffect": ()=>{
            if (!isPrimary || !book) return;
            if (!appService?.isDesktopApp) return;
            const stopUpdates = {
                "useDiscordPresence.useEffect.stopUpdates": ()=>{
                    if (updateIntervalRef.current) {
                        clearInterval(updateIntervalRef.current);
                        updateIntervalRef.current = null;
                    }
                    isUpdatingRef.current = false;
                }
            }["useDiscordPresence.useEffect.stopUpdates"];
            if (!enabled) {
                stopUpdates();
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$discord$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["clearDiscordPresence"])(appService);
                currentBookHashRef.current = null;
                return;
            }
            if (currentBookHashRef.current !== book.hash) {
                sessionStartRef.current = Date.now();
                currentBookHashRef.current = book.hash;
            }
            const safeUpdate = {
                "useDiscordPresence.useEffect.safeUpdate": async ()=>{
                    if (isUpdatingRef.current) return;
                    isUpdatingRef.current = true;
                    try {
                        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$discord$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["updateDiscordPresence"])(book, sessionStartRef.current, appService);
                    } catch (err) {
                        console.error('Discord presence update failed:', err);
                    } finally{
                        isUpdatingRef.current = false;
                    }
                }
            }["useDiscordPresence.useEffect.safeUpdate"];
            void safeUpdate();
            updateIntervalRef.current = setInterval({
                "useDiscordPresence.useEffect": ()=>{
                    void safeUpdate();
                }
            }["useDiscordPresence.useEffect"], 15000);
            return ({
                "useDiscordPresence.useEffect": ()=>{
                    stopUpdates();
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$discord$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["clearDiscordPresence"])(appService);
                }
            })["useDiscordPresence.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["useDiscordPresence.useEffect"], [
        book?.hash,
        isPrimary,
        enabled,
        appService
    ]);
};
_s(useDiscordPresence, "1LReG0xMeCfWMNU4qh8YZmcIoN0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["useEnv"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/readest-app/src/hooks/useResetSettings.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useResetViewSettings",
    ()=>useResetViewSettings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/context/EnvContext.tsx [client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const useResetViewSettings = ()=>{
    _s();
    const { appService } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["useEnv"])();
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
_s(useResetViewSettings, "U0G+8ckOKdj9K1hR5kGZ3TUW2LU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["useEnv"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=apps_readest-app_src_hooks_55b9f1f9._.js.map