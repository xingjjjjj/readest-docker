(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/readest-app/src/context/AuthContext.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react@19.2.0/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react@19.2.0/node_modules/react/index.js [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const AuthProvider = ({ children })=>{
    _s();
    const [token, setToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({
        "AuthProvider.useState": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                return localStorage.getItem('token');
            }
            //TURBOPACK unreachable
            ;
        }
    }["AuthProvider.useState"]);
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({
        "AuthProvider.useState": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                const userJson = localStorage.getItem('user');
                return userJson ? JSON.parse(userJson) : null;
            }
            //TURBOPACK unreachable
            ;
        }
    }["AuthProvider.useState"]);
    // 验证已存储的令牌
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthProvider.useEffect": ()=>{
            const verifyToken = {
                "AuthProvider.useEffect.verifyToken": async ()=>{
                    if (token && !user) {
                        try {
                            const response = await fetch('/api/auth/verify', {
                                headers: {
                                    Authorization: `Bearer ${token}`
                                }
                            });
                            if (response.ok) {
                                const data = await response.json();
                                setUser(data.user);
                                localStorage.setItem('user', JSON.stringify(data.user));
                            } else {
                                // Token 无效，清除
                                localStorage.removeItem('token');
                                localStorage.removeItem('user');
                                setToken(null);
                                setUser(null);
                            }
                        } catch (error) {
                            console.error('Token verification failed:', error);
                            localStorage.removeItem('token');
                            localStorage.removeItem('user');
                            setToken(null);
                            setUser(null);
                        }
                    }
                }
            }["AuthProvider.useEffect.verifyToken"];
            verifyToken();
        }
    }["AuthProvider.useEffect"], [
        token,
        user
    ]);
    const login = (newToken, newUser)=>{
        console.log('Logging in as', newUser.username);
        setToken(newToken);
        setUser(newUser);
        localStorage.setItem('token', newToken);
        localStorage.setItem('user', JSON.stringify(newUser));
    };
    const logout = async ()=>{
        console.log('Logging out');
        try {
            await fetch('/api/auth/logout', {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
        } catch (error) {
            console.error('Logout request failed:', error);
        } finally{
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            setToken(null);
            setUser(null);
        }
    };
    const value = {
        token,
        user,
        login,
        logout,
        isLoggedIn: !!token && !!user
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/apps/readest-app/src/context/AuthContext.tsx",
        lineNumber: 112,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AuthProvider, "zOMl/k+Gotbm0SL3oYfkwpVRqc4=");
_c = AuthProvider;
const useAuth = ()=>{
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
_s1(useAuth, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "AuthProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/readest-app/src/context/EnvContext.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EnvProvider",
    ()=>EnvProvider,
    "useEnv",
    ()=>useEnv
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react@19.2.0/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react@19.2.0/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/environment.ts [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
const EnvContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const EnvProvider = ({ children })=>{
    _s();
    const [envConfig] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["default"]);
    const [appService, setAppService] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "EnvProvider.useEffect": ()=>{
            envConfig.getAppService().then({
                "EnvProvider.useEffect": (service)=>setAppService(service)
            }["EnvProvider.useEffect"]);
            window.addEventListener('error', {
                "EnvProvider.useEffect": (e)=>{
                    if (e.message === 'ResizeObserver loop limit exceeded') {
                        e.stopImmediatePropagation();
                        e.preventDefault();
                        return true;
                    }
                    return false;
                }
            }["EnvProvider.useEffect"]);
        }
    }["EnvProvider.useEffect"], [
        envConfig
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EnvContext.Provider, {
        value: {
            envConfig,
            appService
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/apps/readest-app/src/context/EnvContext.tsx",
        lineNumber: 31,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_s(EnvProvider, "Cz+4ZBLv/UALqhTxwVUPnjWIrdw=");
_c = EnvProvider;
const useEnv = ()=>{
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useContext"])(EnvContext);
    if (!context) throw new Error('useEnv must be used within EnvProvider');
    return context;
};
_s1(useEnv, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "EnvProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/readest-app/src/context/PHContext.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CSPostHogProvider",
    ()=>CSPostHogProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.28.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react@19.2.0/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$posthog$2d$js$40$1$2e$246$2e$0$2f$node_modules$2f$posthog$2d$js$2f$dist$2f$module$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/posthog-js@1.246.0/node_modules/posthog-js/dist/module.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react@19.2.0/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$posthog$2d$js$40$1$2e$246$2e$0$2f$node_modules$2f$posthog$2d$js$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/posthog-js@1.246.0/node_modules/posthog-js/react/dist/esm/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$telemetry$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/telemetry.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$version$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/version.ts [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const shouldDisablePostHog = ()=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return localStorage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$telemetry$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["TELEMETRY_OPT_OUT_KEY"]) === 'true';
};
const posthogUrl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env['NEXT_PUBLIC_POSTHOG_HOST'] || atob(("TURBOPACK compile-time value", "aHR0cHM6Ly91cy5pLnBvc3Rob2cuY29t"));
const posthogKey = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env['NEXT_PUBLIC_POSTHOG_KEY'] || atob(("TURBOPACK compile-time value", "cGhjX2ViNXowbVRxWm8yZm5YYnZGNmE3bFh5TThpTmRSNTNsR1A3VFM3VGh4S08="));
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const CSPostHogProvider = ({ children })=>{
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CSPostHogProvider.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$posthog$2d$js$40$1$2e$246$2e$0$2f$node_modules$2f$posthog$2d$js$2f$dist$2f$module$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].register_for_session({
                $app_version: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$version$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getAppVersion"])()
            });
        }
    }["CSPostHogProvider.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$posthog$2d$js$40$1$2e$246$2e$0$2f$node_modules$2f$posthog$2d$js$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["PostHogProvider"], {
        client: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$posthog$2d$js$40$1$2e$246$2e$0$2f$node_modules$2f$posthog$2d$js$2f$dist$2f$module$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"],
        children: children
    }, void 0, false, {
        fileName: "[project]/apps/readest-app/src/context/PHContext.tsx",
        lineNumber: 35,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_s(CSPostHogProvider, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = CSPostHogProvider;
var _c;
__turbopack_context__.k.register(_c, "CSPostHogProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/readest-app/src/context/SyncContext.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SyncProvider",
    ()=>SyncProvider,
    "useSyncContext",
    ()=>useSyncContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react@19.2.0/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react@19.2.0/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$libs$2f$sync$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/libs/sync.ts [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const syncClient = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$libs$2f$sync$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["SyncClient"]();
const SyncContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createContext"])({
    syncClient
});
const SyncProvider = ({ children })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SyncContext.Provider, {
        value: {
            syncClient
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/apps/readest-app/src/context/SyncContext.tsx",
        lineNumber: 15,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_c = SyncProvider;
const useSyncContext = ()=>{
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useContext"])(SyncContext);
};
_s(useSyncContext, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
var _c;
__turbopack_context__.k.register(_c, "SyncProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/readest-app/src/libs/sync.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SyncClient",
    ()=>SyncClient
]);
class SyncClient {
    /**
   * 禁用云同步 - 仅使用本地存储
   * 返回空同步结果
   */ async pullChanges(since, type, book, metaHash) {
        // 本地存储模式 - 不调用云 API，直接返回空结果
        console.log('[SyncClient] Cloud sync disabled (local storage mode)');
        return {
            books: null,
            configs: null,
            notes: null
        };
    }
    /**
   * 禁用云同步 - 仅使用本地存储
   * 返回空同步结果
   */ async pushChanges(payload) {
        // 本地存储模式 - 不调用云 API，直接返回空结果
        console.log('[SyncClient] Cloud sync disabled (local storage mode)');
        return {
            books: null,
            configs: null,
            notes: null
        };
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/readest-app/src/libs/document.ts [client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$foliate$2d$js$2f$epubcfi$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/foliate-js/epubcfi.js [client] (ecmascript)");
;
const CFI = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$foliate$2d$js$2f$epubcfi$2e$js__$5b$client$5d$__$28$ecmascript$29$__;
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
        const { configure, ZipReader, BlobReader, TextWriter, BlobWriter } = await __turbopack_context__.A("[project]/node_modules/.pnpm/@zip.js+zip.js@2.7.53/node_modules/@zip.js/zip.js/index.js [client] (ecmascript, async loader)");
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
                    const { makeComicBook } = await __turbopack_context__.A("[project]/packages/foliate-js/comic-book.js [client] (ecmascript, async loader)");
                    book = await makeComicBook(loader, this.file);
                    format = 'CBZ';
                } else if (this.isFBZ()) {
                    const entry = entries.find((entry)=>entry.filename.endsWith(`.${EXTS.FB2}`));
                    const blob = await loader.loadBlob((entry ?? entries[0]).filename);
                    const { makeFB2 } = await __turbopack_context__.A("[project]/packages/foliate-js/fb2.js [client] (ecmascript, async loader)");
                    book = await makeFB2(blob);
                    format = 'FBZ';
                } else {
                    const { EPUB } = await __turbopack_context__.A("[project]/packages/foliate-js/epub.js [client] (ecmascript, async loader)");
                    book = await new EPUB(loader).init();
                    format = 'EPUB';
                }
            } else if (await this.isPDF()) {
                const { makePDF } = await __turbopack_context__.A("[project]/packages/foliate-js/pdf.js [client] (ecmascript, async loader)");
                book = await makePDF(this.file);
                format = 'PDF';
            } else if (await (await __turbopack_context__.A("[project]/packages/foliate-js/mobi.js [client] (ecmascript, async loader)")).isMOBI(this.file)) {
                const fflate = await __turbopack_context__.A("[project]/packages/foliate-js/vendor/fflate.js [client] (ecmascript, async loader)");
                const { MOBI } = await __turbopack_context__.A("[project]/packages/foliate-js/mobi.js [client] (ecmascript, async loader)");
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
                const { makeFB2 } = await __turbopack_context__.A("[project]/packages/foliate-js/fb2.js [client] (ecmascript, async loader)");
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/readest-app/src/libs/metadata.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "searchMetadata",
    ()=>searchMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/environment.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$fetch$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/fetch.ts [client] (ecmascript)");
;
;
const API_ENDPOINT = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getAPIBaseUrl"])() + '/metadata/search';
const searchMetadata = async (request)=>{
    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$fetch$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["fetchWithAuth"])(API_ENDPOINT, {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/readest-app/src/libs/edgeTTS.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EdgeSpeechTTS",
    ()=>EdgeSpeechTTS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$js$2d$md5$40$0$2e$8$2e$3$2f$node_modules$2f$js$2d$md5$2f$src$2f$md5$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/js-md5@0.8.3/node_modules/js-md5/src/md5.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$isomorphic$2d$ws$40$5$2e$0$2e$0_ws$40$8$2e$18$2e$3$2f$node_modules$2f$isomorphic$2d$ws$2f$browser$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/isomorphic-ws@5.0.0_ws@8.18.3/node_modules/isomorphic-ws/browser.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$crypto$2d$browserify$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.28.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/crypto-browserify/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/misc.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$lru$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/lru.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$ssml$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/ssml.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$fetch$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/fetch.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/environment.ts [client] (ecmascript)");
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
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$crypto$2d$browserify$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createHash"])('sha256').update(strToHash, 'ascii').digest('hex').toUpperCase();
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
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$js$2d$md5$40$0$2e$8$2e$3$2f$node_modules$2f$js$2d$md5$2f$src$2f$md5$2e$js__$5b$client$5d$__$28$ecmascript$29$__["md5"])(base);
};
class EdgeSpeechTTS {
    static voices = genVoiceList(EDGE_TTS_VOICES);
    static audioCache = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$lru$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["LRUCache"](200);
    static audioUrlCache = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$lru$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["LRUCache"](200, (_, url)=>{
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
        const url = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getNodeAPIBaseUrl"])() + '/tts/edge';
        const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$fetch$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["fetchWithAuth"])(url, {
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
        const connectId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["randomMd5"])();
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
        const ssml = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$ssml$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["genSSML"])(lang, text, voice, rate);
        const content = genSendContent(contentHeaders, ssml);
        const config = genSendContent(configHeaders, configContent);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["isTauriAppPlatform"])()) {
            return new Promise(async (resolve, reject)=>{
                try {
                    const TauriWebSocket = (await __turbopack_context__.A("[project]/node_modules/.pnpm/@tauri-apps+plugin-websocket@2.4.2/node_modules/@tauri-apps/plugin-websocket/dist-js/index.js [client] (ecmascript, async loader)")).default;
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
                const ws = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$isomorphic$2d$ws$40$5$2e$0$2e$0_ws$40$8$2e$18$2e$3$2f$node_modules$2f$isomorphic$2d$ws$2f$browser$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"](url, {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/readest-app/src/libs/mediaSession.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TauriMediaSession",
    ()=>TauriMediaSession,
    "getMediaSession",
    ()=>getMediaSession
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/environment.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/misc.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$core$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tauri-apps+api@2.9.1/node_modules/@tauri-apps/api/core.js [client] (ecmascript)");
;
;
;
;
class TauriMediaSession {
    handlers = {};
    eventListenerInited = false;
    eventListeners = [];
    async requestPostNotificationPermission() {
        const permission = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$core$2e$js__$5b$client$5d$__$28$ecmascript$29$__["invoke"])('plugin:native-tts|checkPermissions');
        if (permission.postNotification.startsWith('prompt')) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$core$2e$js__$5b$client$5d$__$28$ecmascript$29$__["invoke"])('plugin:native-tts|requestPermissions', {
                permissions: [
                    'postNotification'
                ]
            });
        }
    }
    async initializeListeners() {
        if (this.eventListenerInited) return;
        this.eventListenerInited = true;
        const playListener = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$core$2e$js__$5b$client$5d$__$28$ecmascript$29$__["addPluginListener"])('native-tts', 'media-session-play', ()=>{
            if (this.handlers['play']) {
                this.handlers['play']();
            }
        });
        this.eventListeners.push(playListener);
        const pauseListener = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$core$2e$js__$5b$client$5d$__$28$ecmascript$29$__["addPluginListener"])('native-tts', 'media-session-pause', ()=>{
            if (this.handlers['pause']) {
                this.handlers['pause']();
            }
        });
        this.eventListeners.push(pauseListener);
        const nextListener = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$core$2e$js__$5b$client$5d$__$28$ecmascript$29$__["addPluginListener"])('native-tts', 'media-session-next', ()=>{
            if (this.handlers['nexttrack']) {
                this.handlers['nexttrack']();
            }
        });
        this.eventListeners.push(nextListener);
        const previousListener = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$core$2e$js__$5b$client$5d$__$28$ecmascript$29$__["addPluginListener"])('native-tts', 'media-session-previous', ()=>{
            if (this.handlers['previoustrack']) {
                this.handlers['previoustrack']();
            }
        });
        this.eventListeners.push(previousListener);
        const seekListener = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$core$2e$js__$5b$client$5d$__$28$ecmascript$29$__["addPluginListener"])('native-tts', 'media-session-seek', (event)=>{
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
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$core$2e$js__$5b$client$5d$__$28$ecmascript$29$__["invoke"])('plugin:native-tts|update_media_session_metadata', {
                payload: metadata
            });
        } catch (error) {
            console.error('Failed to update media metadata:', error);
        }
    }
    async updatePlaybackState(state) {
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$core$2e$js__$5b$client$5d$__$28$ecmascript$29$__["invoke"])('plugin:native-tts|update_media_session_state', {
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
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$core$2e$js__$5b$client$5d$__$28$ecmascript$29$__["invoke"])('plugin:native-tts|set_media_session_active', {
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
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getOSPlatform"])() === 'android' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["isTauriAppPlatform"])()) {
        return new TauriMediaSession();
    }
    return null;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/readest-app/src/styles/themes.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "applyCustomTheme",
    ()=>applyCustomTheme,
    "generateDarkPalette",
    ()=>generateDarkPalette,
    "generateLightPalette",
    ()=>generateLightPalette,
    "themes",
    ()=>themes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tinycolor2$40$1$2e$6$2e$0$2f$node_modules$2f$tinycolor2$2f$esm$2f$tinycolor$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tinycolor2@1.6.0/node_modules/tinycolor2/esm/tinycolor.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/misc.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$color$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/color.ts [client] (ecmascript)");
;
;
;
const generateLightPalette = ({ bg, fg, primary })=>{
    return {
        'base-100': bg,
        'base-200': (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tinycolor2$40$1$2e$6$2e$0$2f$node_modules$2f$tinycolor2$2f$esm$2f$tinycolor$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(bg).darken(5).toHexString(),
        'base-300': (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tinycolor2$40$1$2e$6$2e$0$2f$node_modules$2f$tinycolor2$2f$esm$2f$tinycolor$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(bg).darken(12).toHexString(),
        'base-content': fg,
        neutral: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tinycolor2$40$1$2e$6$2e$0$2f$node_modules$2f$tinycolor2$2f$esm$2f$tinycolor$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(bg).darken(15).desaturate(20).toHexString(),
        'neutral-content': (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tinycolor2$40$1$2e$6$2e$0$2f$node_modules$2f$tinycolor2$2f$esm$2f$tinycolor$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(fg).lighten(20).desaturate(20).toHexString(),
        primary: primary,
        secondary: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tinycolor2$40$1$2e$6$2e$0$2f$node_modules$2f$tinycolor2$2f$esm$2f$tinycolor$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(primary).lighten(20).toHexString(),
        accent: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tinycolor2$40$1$2e$6$2e$0$2f$node_modules$2f$tinycolor2$2f$esm$2f$tinycolor$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(primary).analogous()[1].toHexString()
    };
};
const generateDarkPalette = ({ bg, fg, primary })=>{
    return {
        'base-100': bg,
        'base-200': (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tinycolor2$40$1$2e$6$2e$0$2f$node_modules$2f$tinycolor2$2f$esm$2f$tinycolor$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(bg).lighten(5).toHexString(),
        'base-300': (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tinycolor2$40$1$2e$6$2e$0$2f$node_modules$2f$tinycolor2$2f$esm$2f$tinycolor$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(bg).lighten(12).toHexString(),
        'base-content': fg,
        neutral: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tinycolor2$40$1$2e$6$2e$0$2f$node_modules$2f$tinycolor2$2f$esm$2f$tinycolor$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(bg).lighten(15).desaturate(20).toHexString(),
        'neutral-content': (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tinycolor2$40$1$2e$6$2e$0$2f$node_modules$2f$tinycolor2$2f$esm$2f$tinycolor$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(fg).darken(20).desaturate(20).toHexString(),
        primary: primary,
        secondary: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tinycolor2$40$1$2e$6$2e$0$2f$node_modules$2f$tinycolor2$2f$esm$2f$tinycolor$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(primary).darken(20).toHexString(),
        accent: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tinycolor2$40$1$2e$6$2e$0$2f$node_modules$2f$tinycolor2$2f$esm$2f$tinycolor$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(primary).triad()[1].toHexString()
    };
};
const themes = [
    {
        name: 'default',
        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["stubTranslation"])('Default'),
        colors: {
            light: generateLightPalette({
                fg: '#171717',
                bg: '#ffffff',
                primary: '#0066cc'
            }),
            dark: generateDarkPalette({
                fg: '#e0e0e0',
                bg: '#222222',
                primary: '#77bbee'
            })
        }
    },
    {
        name: 'gray',
        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["stubTranslation"])('Gray'),
        colors: {
            light: generateLightPalette({
                fg: '#222222',
                bg: '#e0e0e0',
                primary: '#4488cc'
            }),
            dark: generateDarkPalette({
                fg: '#c6c6c6',
                bg: '#444444',
                primary: '#88ccee'
            })
        }
    },
    {
        name: 'sepia',
        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["stubTranslation"])('Sepia'),
        colors: {
            light: generateLightPalette({
                fg: '#5b4636',
                bg: '#f1e8d0',
                primary: '#008b8b'
            }),
            dark: generateDarkPalette({
                fg: '#ffd595',
                bg: '#342e25',
                primary: '#48d1cc'
            })
        }
    },
    {
        name: 'grass',
        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["stubTranslation"])('Grass'),
        colors: {
            light: generateLightPalette({
                fg: '#232c16',
                bg: '#d7dbbd',
                primary: '#177b4d'
            }),
            dark: generateDarkPalette({
                fg: '#d8deba',
                bg: '#333627',
                primary: '#a6d608'
            })
        }
    },
    {
        name: 'cherry',
        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["stubTranslation"])('Cherry'),
        colors: {
            light: generateLightPalette({
                fg: '#4e1609',
                bg: '#f0d1d5',
                primary: '#de3838'
            }),
            dark: generateDarkPalette({
                fg: '#e5c4c8',
                bg: '#462f32',
                primary: '#ff646e'
            })
        }
    },
    {
        name: 'sky',
        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["stubTranslation"])('Sky'),
        colors: {
            light: generateLightPalette({
                fg: '#262d48',
                bg: '#cedef5',
                primary: '#2d53e5'
            }),
            dark: generateDarkPalette({
                fg: '#babee1',
                bg: '#282e47',
                primary: '#ff646e'
            })
        }
    },
    {
        name: 'solarized',
        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["stubTranslation"])('Solarized'),
        colors: {
            light: generateLightPalette({
                fg: '#586e75',
                bg: '#fdf6e3',
                primary: '#268bd2'
            }),
            dark: generateDarkPalette({
                fg: '#93a1a1',
                bg: '#002b36',
                primary: '#268bd2'
            })
        }
    },
    {
        name: 'gruvbox',
        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["stubTranslation"])('Gruvbox'),
        colors: {
            light: generateLightPalette({
                fg: '#3c3836',
                bg: '#fbf1c7',
                primary: '#076678'
            }),
            dark: generateDarkPalette({
                fg: '#ebdbb2',
                bg: '#282828',
                primary: '#83a598'
            })
        }
    },
    {
        name: 'nord',
        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["stubTranslation"])('Nord'),
        colors: {
            light: generateLightPalette({
                fg: '#2e3440',
                bg: '#eceff4',
                primary: '#5e81ac'
            }),
            dark: generateDarkPalette({
                fg: '#d8dee9',
                bg: '#2e3440',
                primary: '#88c0d0'
            })
        }
    },
    {
        name: 'contrast',
        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["stubTranslation"])('Contrast'),
        colors: {
            light: generateLightPalette({
                fg: '#000000',
                bg: '#ffffff',
                primary: '#4488cc'
            }),
            dark: generateDarkPalette({
                fg: '#ffffff',
                bg: '#000000',
                primary: '#88ccee'
            })
        }
    },
    {
        name: 'sunset',
        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["stubTranslation"])('Sunset'),
        colors: {
            light: generateLightPalette({
                fg: '#423126',
                bg: '#fff7f0',
                primary: '#fe6b64'
            }),
            dark: generateDarkPalette({
                fg: '#f6e1d7',
                bg: '#3c2b25',
                primary: '#ff9c94'
            })
        }
    }
];
const generateCustomThemeVariables = (palette, fallbackIncluded = false)=>{
    const colors = `
    --b1: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$color$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["hexToOklch"])(palette['base-100'])};
    --b2: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$color$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["hexToOklch"])(palette['base-200'])};
    --b3: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$color$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["hexToOklch"])(palette['base-300'])};
    --bc: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$color$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["hexToOklch"])(palette['base-content'])};
    
    --p: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$color$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["hexToOklch"])(palette.primary)};
    --pc: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$color$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getContrastOklch"])(palette.primary)};
    
    --s: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$color$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["hexToOklch"])(palette.secondary)};
    --sc: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$color$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getContrastOklch"])(palette.secondary)};
    
    --a: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$color$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["hexToOklch"])(palette.accent)};
    --ac: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$color$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getContrastOklch"])(palette.accent)};
    
    --n: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$color$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["hexToOklch"])(palette.neutral)};
    --nc: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$color$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["hexToOklch"])(palette['neutral-content'])};
    
    --in: 69.37% 0.047 231deg;
    --inc: 100% 0 0deg;
    --su: 78.15% 0.12 160deg;
    --suc: 100% 0 0deg;
    --wa: 90.69% 0.123 84deg;
    --wac: 0% 0 0deg;
    --er: 70.9% 0.184 22deg;
    --erc: 100% 0 0deg;
  `;
    const fallbackColors = `
    --fallback-b1: ${palette['base-100']};
    --fallback-b2: ${palette['base-200']};
    --fallback-b3: ${palette['base-300']};
    --fallback-bc: ${palette['base-content']};

    --fallback-p: ${palette.primary};
    --fallback-pc: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$color$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getContrastHex"])(palette.primary)};

    --fallback-s: ${palette.secondary};
    --fallback-sc: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$color$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getContrastHex"])(palette.secondary)};

    --fallback-a: ${palette.accent};
    --fallback-ac: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$color$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getContrastHex"])(palette.accent)};

    --fallback-n: ${palette.neutral};
    --fallback-nc: ${palette['neutral-content']};

    --fallback-in: #ff0000;
    --fallback-inc: #ffffff;
    --fallback-su: #00ff00;
    --fallback-suc: #000000;
    --fallback-wa: #ffff00;
    --fallback-wac: #000000;
    --fallback-er: #ff8000;
    --fallback-erc: #000000;
  `;
    return colors + (fallbackIncluded ? fallbackColors : '');
};
const applyCustomTheme = (customTheme, themeName, fallbackIncluded = false)=>{
    if (!customTheme && !themeName) return;
    const lightThemeName = customTheme ? `${customTheme.name}-light` : `${themeName}-light`;
    const darkThemeName = customTheme ? `${customTheme.name}-dark` : `${themeName}-dark`;
    const lightPalette = customTheme ? generateLightPalette(customTheme.colors.light) : (themes.find((t)=>t.name === themeName) || themes[0]).colors.light;
    const darkPalette = customTheme ? generateDarkPalette(customTheme.colors.dark) : (themes.find((t)=>t.name === themeName) || themes[0]).colors.dark;
    const css = `
    [data-theme="${lightThemeName}"] {
      ${generateCustomThemeVariables(lightPalette, fallbackIncluded)}
    }
    
    [data-theme="${darkThemeName}"] {
      ${generateCustomThemeVariables(darkPalette, fallbackIncluded)}
    }
    
    :root {
      --${lightThemeName}: 1;
      --${darkThemeName}: 1;
    }
  `;
    const styleElement = document.createElement('style');
    styleElement.id = `theme-${customTheme ? customTheme.name : themeName}-styles`;
    styleElement.textContent = css;
    const existingStyle = document.getElementById(styleElement.id);
    if (existingStyle) {
        existingStyle.remove();
    }
    document.head.appendChild(styleElement);
    return {
        light: lightThemeName,
        dark: darkThemeName
    };
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/readest-app/src/styles/fonts.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

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
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/misc.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$path$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/path.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$md5$2e$ts__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/md5.ts [client] (ecmascript) <locals>");
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
    const mountCJKFonts = isCJK || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["isCJKEnv"])();
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
    const fileName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$path$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getFilename"])(path);
    return fileName.replace(/\.(ttf|otf|woff|woff2)$/i, '');
}
function getFontId(name) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$md5$2e$ts__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["md5Fingerprint"])(name);
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/readest-app/src/styles/textures.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PREDEFINED_TEXTURES",
    ()=>PREDEFINED_TEXTURES,
    "createCustomTexture",
    ()=>createCustomTexture,
    "getTextureId",
    ()=>getTextureId,
    "getTextureName",
    ()=>getTextureName,
    "mountBackgroundTexture",
    ()=>mountBackgroundTexture,
    "unmountBackgroundTexture",
    ()=>unmountBackgroundTexture
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$path$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/path.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$md5$2e$ts__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/md5.ts [client] (ecmascript) <locals>");
;
;
const PREDEFINED_TEXTURES = [
    {
        id: 'none',
        name: 'None',
        url: '',
        loaded: true
    },
    {
        id: 'concrete',
        name: 'Concrete',
        url: '/images/concrete-texture.png',
        loaded: true
    },
    {
        id: 'paper',
        name: 'Paper',
        url: '/images/paper-texture.png',
        loaded: true
    },
    {
        id: 'sand',
        name: 'Sand',
        url: '/images/sand-texture.jpg',
        loaded: true
    },
    {
        id: 'parchment',
        name: 'Parchment',
        url: '/images/parchment-paper.jpg',
        loaded: true
    },
    {
        id: 'scrapbook',
        name: 'Scrapbook',
        url: '/images/scrapbook-texture.jpg',
        loaded: true
    },
    {
        id: 'leaves',
        name: 'Leaves',
        url: '/images/leaves-pattern.jpg',
        loaded: true
    },
    {
        id: 'moon',
        name: 'Moon Sky',
        url: '/images/moon-sky.jpg',
        loaded: true
    },
    {
        id: 'night-sky',
        name: 'Night Sky',
        url: '/images/night-sky.jpg',
        loaded: true
    }
];
function getTextureName(path) {
    const fileName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$path$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getFilename"])(path);
    return fileName.replace(/\.(jpg|jpeg|png|gif|bmp|webp)$/i, '');
}
function getTextureId(name) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$md5$2e$ts__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["md5Fingerprint"])(name);
}
function createCustomTexture(path) {
    const name = getTextureName(path);
    return {
        id: getTextureId(name),
        name,
        path
    };
}
const createTextureCSS = (texture)=>{
    const css = `
    .sidebar-container, .notebook-container, .foliate-viewer {
      position: relative;
    }

    body::before, .sidebar-container::before, .notebook-container::before,
    .foliate-viewer::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      pointer-events: none;
      z-index: 0;
      background-image: url("${texture.blobUrl || texture.url}");
      background-repeat: repeat;
      background-size: var(--bg-texture-size, cover);
      mix-blend-mode: var(--bg-texture-blend-mode, multiply);
      opacity: var(--bg-texture-opacity, 0.6);
    }
    body::before {
      height: 100vh;
    }
    `;
    return css;
};
const textureStyleId = 'background-texture';
const mountBackgroundTexture = (document, texture)=>{
    const styleElement = document.getElementById(textureStyleId) || document.createElement('style');
    styleElement.id = textureStyleId;
    styleElement.textContent = createTextureCSS(texture);
    if (!styleElement.parentNode) {
        document.head.appendChild(styleElement);
    }
};
const unmountBackgroundTexture = (document)=>{
    const styleElement = document.getElementById(textureStyleId);
    if (styleElement && styleElement.parentNode) {
        styleElement.parentNode.removeChild(styleElement);
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/readest-app/src/store/themeStore.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "initSystemThemeListener",
    ()=>initSystemThemeListener,
    "loadDataTheme",
    ()=>loadDataTheme,
    "useThemeStore",
    ()=>useThemeStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$6_$40$types$2b$react$40$18$2e$3$2e$12_react$40$19$2e$2$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zustand@5.0.6_@types+react@18.3.12_react@19.2.0/node_modules/zustand/esm/react.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$style$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/style.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$bridge$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/bridge.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$window$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tauri-apps+api@2.9.1/node_modules/@tauri-apps/api/window.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/environment.ts [client] (ecmascript)");
;
;
;
;
;
const getInitialThemeMode = ()=>{
    if (("TURBOPACK compile-time value", "object") !== 'undefined' && localStorage) {
        return localStorage.getItem('themeMode') || 'auto';
    }
    return 'auto';
};
const getInitialThemeColor = ()=>{
    if (("TURBOPACK compile-time value", "object") !== 'undefined' && localStorage) {
        const defaultColor = window.__READEST_IS_EINK ? 'contrast' : 'default';
        return localStorage.getItem('themeColor') || defaultColor;
    }
    return 'default';
};
const useThemeStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$6_$40$types$2b$react$40$18$2e$3$2e$12_react$40$19$2e$2$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["create"])((set, get)=>{
    const initialThemeMode = getInitialThemeMode();
    const initialThemeColor = getInitialThemeColor();
    const systemIsDarkMode = ("TURBOPACK compile-time value", "object") !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDarkMode = initialThemeMode === 'dark' || initialThemeMode === 'auto' && systemIsDarkMode;
    const themeCode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$style$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getThemeCode"])();
    return {
        themeMode: initialThemeMode,
        themeColor: initialThemeColor,
        systemIsDarkMode,
        isDarkMode,
        isEinkMode: false,
        themeCode,
        systemUIVisible: false,
        statusBarHeight: 24,
        systemUIAlwaysHidden: false,
        safeAreaInsets: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        },
        isRoundedWindow: true,
        showSystemUI: ()=>set({
                systemUIVisible: true
            }),
        dismissSystemUI: ()=>set({
                systemUIVisible: false
            }),
        setStatusBarHeight: (height)=>set({
                statusBarHeight: height
            }),
        setSystemUIAlwaysHidden: (hidden)=>set({
                systemUIAlwaysHidden: hidden
            }),
        getIsDarkMode: ()=>get().isDarkMode,
        setIsEinkMode: (isEink)=>{
            set({
                isEinkMode: isEink
            });
        },
        setThemeMode: (mode)=>{
            if (("TURBOPACK compile-time value", "object") !== 'undefined' && localStorage) {
                localStorage.setItem('themeMode', mode);
            }
            const isDarkMode = mode === 'dark' || mode === 'auto' && get().systemIsDarkMode;
            document.documentElement.setAttribute('data-theme', `${get().themeColor}-${isDarkMode ? 'dark' : 'light'}`);
            set({
                themeMode: mode,
                isDarkMode
            });
            set({
                themeCode: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$style$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getThemeCode"])()
            });
        },
        setThemeColor: (color)=>{
            if (("TURBOPACK compile-time value", "object") !== 'undefined' && localStorage) {
                localStorage.setItem('themeColor', color);
            }
            document.documentElement.setAttribute('data-theme', `${color}-${get().isDarkMode ? 'dark' : 'light'}`);
            set({
                themeColor: color
            });
            set({
                themeCode: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$style$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getThemeCode"])()
            });
        },
        updateAppTheme: (color)=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["isWebAppPlatform"])()) {
                const { palette } = get().themeCode;
                document.querySelector('meta[name="theme-color"]')?.setAttribute('content', palette[color]);
            }
        },
        saveCustomTheme: async (envConfig, settings, theme, isDelete)=>{
            const customThemes = settings.globalReadSettings.customThemes || [];
            const index = customThemes.findIndex((t)=>t.name === theme.name);
            if (isDelete) {
                if (index > -1) {
                    customThemes.splice(index, 1);
                }
            } else {
                if (index > -1) {
                    customThemes[index] = theme;
                } else {
                    customThemes.push(theme);
                }
            }
            settings.globalReadSettings.customThemes = customThemes;
            localStorage.setItem('customThemes', JSON.stringify(customThemes));
            const appService = await envConfig.getAppService();
            await appService.saveSettings(settings);
        },
        handleSystemThemeChange: (systemIsDarkMode)=>{
            const mode = get().themeMode;
            const isDarkMode = mode === 'dark' || mode === 'auto' && systemIsDarkMode;
            set({
                systemIsDarkMode,
                isDarkMode
            });
        },
        updateSafeAreaInsets: (insets)=>{
            set({
                safeAreaInsets: insets
            });
        }
    };
});
const loadDataTheme = ()=>{
    if (typeof localStorage === 'undefined' || typeof document === 'undefined') return;
    const themeMode = localStorage.getItem('themeMode');
    const themeColor = localStorage.getItem('themeColor');
    if (themeMode && themeColor) {
        const systemIsDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const isDarkMode = themeMode === 'dark' || themeMode === 'auto' && systemIsDarkMode;
        document.documentElement.setAttribute('data-theme', `${themeColor}-${isDarkMode ? 'dark' : 'light'}`);
    }
};
const initSystemThemeListener = (appService)=>{
    if (("TURBOPACK compile-time value", "object") === 'undefined' || !appService) return;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const updateColorTheme = async ()=>{
        let systemIsDarkMode;
        if (appService.isIOSApp) {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$bridge$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getSystemColorScheme"])();
            systemIsDarkMode = res.colorScheme === 'dark';
        } else {
            systemIsDarkMode = mediaQuery.matches;
        }
        useThemeStore.getState().handleSystemThemeChange(systemIsDarkMode);
    };
    const updateWindowTheme = async ()=>{
        if (!appService.hasWindow || !appService.isLinuxApp) return;
        const currentWindow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$window$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getCurrentWindow"])();
        const isFullscreen = await currentWindow.isFullscreen();
        const isMaximized = await currentWindow.isMaximized();
        useThemeStore.setState({
            isRoundedWindow: !isMaximized && !isFullscreen
        });
    };
    mediaQuery?.addEventListener('change', updateColorTheme);
    document.addEventListener('visibilitychange', updateColorTheme);
    window.addEventListener('resize', updateWindowTheme);
    updateColorTheme();
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/readest-app/src/store/settingsStore.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSettingsStore",
    ()=>useSettingsStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$i18n$2f$i18n$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/i18n/i18n.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$6_$40$types$2b$react$40$18$2e$3$2e$12_react$40$19$2e$2$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zustand@5.0.6_@types+react@18.3.12_react@19.2.0/node_modules/zustand/esm/react.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$time$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/time.ts [client] (ecmascript)");
;
;
;
const useSettingsStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$6_$40$types$2b$react$40$18$2e$3$2e$12_react$40$19$2e$2$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["create"])((set)=>({
        settings: {},
        settingsDialogBookKey: '',
        isSettingsDialogOpen: false,
        isSettingsGlobal: true,
        fontPanelView: 'main-fonts',
        setSettings: (settings)=>set({
                settings
            }),
        saveSettings: async (envConfig, settings)=>{
            const appService = await envConfig.getAppService();
            await appService.saveSettings(settings);
        },
        setSettingsDialogBookKey: (bookKey)=>set({
                settingsDialogBookKey: bookKey
            }),
        setSettingsDialogOpen: (open)=>set({
                isSettingsDialogOpen: open
            }),
        setSettingsGlobal: (global)=>set({
                isSettingsGlobal: global
            }),
        setFontPanelView: (view)=>set({
                fontPanelView: view
            }),
        applyUILanguage: (uiLanguage)=>{
            const locale = uiLanguage ? uiLanguage : navigator.language;
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$i18n$2f$i18n$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["default"].changeLanguage(locale);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$time$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["initDayjs"])(locale);
        }
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/readest-app/src/store/libraryStore.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLibraryStore",
    ()=>useLibraryStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$6_$40$types$2b$react$40$18$2e$3$2e$12_react$40$19$2e$2$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zustand@5.0.6_@types+react@18.3.12_react@19.2.0/node_modules/zustand/esm/react.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/environment.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/constants.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$md5$2e$ts__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/md5.ts [client] (ecmascript) <locals>");
;
;
;
;
const useLibraryStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$6_$40$types$2b$react$40$18$2e$3$2e$12_react$40$19$2e$2$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
        library: [],
        isSyncing: false,
        syncProgress: 0,
        currentBookshelf: [],
        selectedBooks: new Set(),
        groups: {},
        checkOpenWithBooks: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["isTauriAppPlatform"])(),
        checkLastOpenBooks: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["isTauriAppPlatform"])(),
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
                if (book.groupName && book.groupName !== __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["BOOK_UNGROUPED_NAME"] && !book.deletedAt) {
                    groups[(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$md5$2e$ts__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["md5Fingerprint"])(book.groupName)] = book.groupName;
                    let nextSlashIndex = book.groupName.indexOf('/', 0);
                    while(nextSlashIndex > 0){
                        const groupName = book.groupName.substring(0, nextSlashIndex);
                        groups[(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$md5$2e$ts__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["md5Fingerprint"])(groupName)] = groupName;
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
            const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$md5$2e$ts__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["md5Fingerprint"])(trimmedName);
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
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$md5$2e$ts__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["md5Fingerprint"])(path);
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/readest-app/src/store/bookDataStore.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useBookDataStore",
    ()=>useBookDataStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$6_$40$types$2b$react$40$18$2e$3$2e$12_react$40$19$2e$2$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zustand@5.0.6_@types+react@18.3.12_react@19.2.0/node_modules/zustand/esm/react.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$libraryStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/libraryStore.ts [client] (ecmascript)");
;
;
const useBookDataStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$6_$40$types$2b$react$40$18$2e$3$2e$12_react$40$19$2e$2$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
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
            const { library, setLibrary } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$libraryStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useLibraryStore"].getState();
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/readest-app/src/store/readerStore.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useReaderStore",
    ()=>useReaderStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$6_$40$types$2b$react$40$18$2e$3$2e$12_react$40$19$2e$2$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zustand@5.0.6_@types+react@18.3.12_react@19.2.0/node_modules/zustand/esm/react.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$types$2f$book$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/types/book.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$libs$2f$document$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/libs/document.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$toc$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/toc.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$book$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/book.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$path$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/path.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/constants.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/settingsStore.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/bookDataStore.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$libraryStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/libraryStore.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/misc.ts [client] (ecmascript)");
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
const useReaderStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$6_$40$types$2b$react$40$18$2e$3$2e$12_react$40$19$2e$2$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
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
            const booksData = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useBookDataStore"].getState().booksData;
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
                const { settings } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useSettingsStore"].getState();
                const { library } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$libraryStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useLibraryStore"].getState();
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
                    const doc = await new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$libs$2f$document$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["DocumentLoader"](file).open();
                    bookDoc = doc.book;
                }
                const config = await appService.loadBookConfig(book, settings);
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$toc$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["updateToc"])(bookDoc, config.viewSettings?.sortedTOC ?? false, config.viewSettings?.convertChineseVariant ?? 'none');
                if (!bookDoc.metadata.title) {
                    bookDoc.metadata.title = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$path$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getBaseFilename"])(file.name);
                }
                book.sourceTitle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$book$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["formatTitle"])(bookDoc.metadata.title);
                // Correct language codes mistakenly set with language names
                if (typeof bookDoc.metadata?.language === 'string') {
                    if (bookDoc.metadata.language in __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["SUPPORTED_LANGNAMES"]) {
                        bookDoc.metadata.language = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["SUPPORTED_LANGNAMES"][bookDoc.metadata.language];
                    }
                }
                // Set the book's language for formerly imported books, newly imported books have this field set
                const primaryLanguage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$book$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getPrimaryLanguage"])(bookDoc.metadata.language);
                book.primaryLanguage = book.primaryLanguage ?? primaryLanguage;
                book.metadata = book.metadata ?? bookDoc.metadata;
                // TODO: uncomment this when we can ensure metaHash is correctly generated for all books
                // book.metaHash = book.metaHash ?? getMetadataHash(bookDoc.metadata);
                book.metaHash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$book$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getMetadataHash"])(bookDoc.metadata);
                const isFixedLayout = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$types$2f$book$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["FIXED_LAYOUT_FORMATS"].has(book.format);
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useBookDataStore"].setState((state)=>({
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
                                viewerKey: `${key}-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["uniqueId"])()}`,
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
            const bookData = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useBookDataStore"].getState().booksData[id];
            const viewState = get().viewStates[key];
            if (!viewState || !bookData) return;
            if (viewState.isPrimary) {
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useBookDataStore"].setState((state)=>({
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
                const bookData = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useBookDataStore"].getState().booksData[id];
                const viewState = state.viewStates[key];
                if (!viewState || !bookData) return state;
                const pagePressInfo = bookData.isFixedLayout ? section : pageinfo;
                const progress = [
                    pagePressInfo.current + 1,
                    pagePressInfo.total
                ];
                // Update library book progress
                const { library, setLibrary } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$libraryStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useLibraryStore"].getState();
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
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useBookDataStore"].setState((state)=>({
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
                                viewerKey: `${key}-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["uniqueId"])()}`
                            }
                        }
                    }));
            });
        }
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/readest-app/src/store/sidebarStore.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSidebarStore",
    ()=>useSidebarStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$6_$40$types$2b$react$40$18$2e$3$2e$12_react$40$19$2e$2$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zustand@5.0.6_@types+react@18.3.12_react@19.2.0/node_modules/zustand/esm/react.mjs [client] (ecmascript)");
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
const useSidebarStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$6_$40$types$2b$react$40$18$2e$3$2e$12_react$40$19$2e$2$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/readest-app/src/store/notebookStore.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useNotebookStore",
    ()=>useNotebookStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$6_$40$types$2b$react$40$18$2e$3$2e$12_react$40$19$2e$2$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zustand@5.0.6_@types+react@18.3.12_react@19.2.0/node_modules/zustand/esm/react.mjs [client] (ecmascript)");
;
const useNotebookStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$6_$40$types$2b$react$40$18$2e$3$2e$12_react$40$19$2e$2$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/readest-app/src/store/deviceStore.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDeviceControlStore",
    ()=>useDeviceControlStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$6_$40$types$2b$react$40$18$2e$3$2e$12_react$40$19$2e$2$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zustand@5.0.6_@types+react@18.3.12_react@19.2.0/node_modules/zustand/esm/react.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$bridge$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/bridge.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/event.ts [client] (ecmascript)");
;
;
;
const handleNativeKeyDown = (keyName)=>{
    if (keyName === 'VolumeUp' || keyName === 'VolumeDown') {
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["eventDispatcher"].dispatch('native-key-down', {
            keyName
        });
    }
    if (keyName === 'Back') {
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["eventDispatcher"].dispatchSync('native-key-down', {
            keyName
        });
    }
    return false;
};
const useDeviceControlStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$6_$40$types$2b$react$40$18$2e$3$2e$12_react$40$19$2e$2$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
        volumeKeysIntercepted: false,
        backKeyIntercepted: false,
        volumeKeysInterceptionCount: 0,
        backKeyInterceptionCount: 0,
        acquireVolumeKeyInterception: ()=>{
            const { volumeKeysInterceptionCount } = get();
            if (volumeKeysInterceptionCount == 0) {
                window.onNativeKeyDown = handleNativeKeyDown;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$bridge$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["interceptKeys"])({
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
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$bridge$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["interceptKeys"])({
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
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$bridge$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["interceptKeys"])({
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
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$bridge$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["interceptKeys"])({
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
                return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["eventDispatcher"].dispatch('native-touch', event);
            };
        },
        getScreenBrightness: async ()=>{
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$bridge$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getScreenBrightness"])();
            return res.brightness;
        },
        setScreenBrightness: async (brightness)=>{
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$bridge$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["setScreenBrightness"])({
                brightness
            });
        }
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/readest-app/src/store/transferStore.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTransferStore",
    ()=>useTransferStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$6_$40$types$2b$react$40$18$2e$3$2e$12_react$40$19$2e$2$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zustand@5.0.6_@types+react@18.3.12_react@19.2.0/node_modules/zustand/esm/react.mjs [client] (ecmascript)");
;
const generateTransferId = ()=>{
    return `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
};
const useTransferStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$6_$40$types$2b$react$40$18$2e$3$2e$12_react$40$19$2e$2$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/readest-app/src/store/proofreadStore.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useProofreadStore",
    ()=>useProofreadStore,
    "validateReplacementRulePattern",
    ()=>validateReplacementRulePattern
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$6_$40$types$2b$react$40$18$2e$3$2e$12_react$40$19$2e$2$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zustand@5.0.6_@types+react@18.3.12_react@19.2.0/node_modules/zustand/esm/react.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/readerStore.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/settingsStore.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/bookDataStore.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/misc.ts [client] (ecmascript)");
;
;
;
;
;
function createProofreadRule(opts) {
    return {
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["uniqueId"])(),
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
const useProofreadStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$6_$40$types$2b$react$40$18$2e$3$2e$12_react$40$19$2e$2$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["create"])(()=>({
        getBookRules: (bookKey)=>{
            const { getViewSettings } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useReaderStore"].getState();
            const viewSettings = getViewSettings(bookKey);
            return viewSettings?.proofreadRules || [];
        },
        getGlobalRules: ()=>{
            const { settings } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useSettingsStore"].getState();
            return settings.globalViewSettings.proofreadRules || [];
        },
        getMergedRules: (bookKey)=>{
            const { settings } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useSettingsStore"].getState();
            const { getViewSettings } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useReaderStore"].getState();
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
    const { getViewSettings } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useReaderStore"].getState();
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
    const { getViewSettings } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useReaderStore"].getState();
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
    const { getViewSettings } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useReaderStore"].getState();
    const viewSettings = getViewSettings(bookKey);
    if (!viewSettings) {
        throw new Error(`No viewSettings found for book: ${bookKey}`);
    }
    const existingRules = viewSettings.proofreadRules || [];
    const filteredRules = existingRules.filter((r)=>r.id !== ruleId);
    await updateBookViewSettings(envConfig, bookKey, filteredRules);
}
async function updateBookViewSettings(envConfig, bookKey, rules) {
    const { getViewSettings, setViewSettings } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useReaderStore"].getState();
    const { getConfig, saveConfig } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useBookDataStore"].getState();
    const { settings } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useSettingsStore"].getState();
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
    const { settings } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useSettingsStore"].getState();
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
    const { settings } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useSettingsStore"].getState();
    const globalRules = settings.globalViewSettings.proofreadRules || [];
    const updatedRules = globalRules.map((r)=>r.id === ruleId ? {
            ...r,
            ...updates
        } : r);
    await updateGlobalSettings(envConfig, updatedRules);
}
async function removeGlobalRule(envConfig, ruleId) {
    const { settings } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useSettingsStore"].getState();
    const globalRules = settings.globalViewSettings.proofreadRules || [];
    const filteredRules = globalRules.filter((r)=>r.id !== ruleId);
    await updateGlobalSettings(envConfig, filteredRules);
}
async function updateGlobalSettings(envConfig, rules) {
    const { settings, setSettings, saveSettings } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useSettingsStore"].getState();
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/readest-app/src/store/parallelViewStore.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useParallelViewStore",
    ()=>useParallelViewStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$6_$40$types$2b$react$40$18$2e$3$2e$12_react$40$19$2e$2$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zustand@5.0.6_@types+react@18.3.12_react@19.2.0/node_modules/zustand/esm/react.mjs [client] (ecmascript)");
;
const useParallelViewStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$6_$40$types$2b$react$40$18$2e$3$2e$12_react$40$19$2e$2$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/readest-app/src/store/trafficLightStore.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTrafficLightStore",
    ()=>useTrafficLightStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$6_$40$types$2b$react$40$18$2e$3$2e$12_react$40$19$2e$2$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zustand@5.0.6_@types+react@18.3.12_react@19.2.0/node_modules/zustand/esm/react.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$core$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tauri-apps+api@2.9.1/node_modules/@tauri-apps/api/core.js [client] (ecmascript)");
;
;
const WINDOW_CONTROL_PAD_X = 10.0;
const WINDOW_CONTROL_PAD_Y = 22.0;
const useTrafficLightStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$6_$40$types$2b$react$40$18$2e$3$2e$12_react$40$19$2e$2$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["create"])((set, get)=>{
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
            const { getCurrentWindow } = await __turbopack_context__.A("[project]/node_modules/.pnpm/@tauri-apps+api@2.9.1/node_modules/@tauri-apps/api/window.js [client] (ecmascript, async loader)");
            const currentWindow = getCurrentWindow();
            const isFullscreen = await currentWindow.isFullscreen();
            set({
                isTrafficLightVisible: !isFullscreen && visible,
                shouldShowTrafficLight: visible,
                trafficLightInFullscreen: isFullscreen
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$core$2e$js__$5b$client$5d$__$28$ecmascript$29$__["invoke"])('set_traffic_lights', {
                visible: visible,
                x: position?.x ?? WINDOW_CONTROL_PAD_X,
                y: position?.y ?? WINDOW_CONTROL_PAD_Y
            });
        },
        initializeTrafficLightListeners: async ()=>{
            const { getCurrentWindow } = await __turbopack_context__.A("[project]/node_modules/.pnpm/@tauri-apps+api@2.9.1/node_modules/@tauri-apps/api/window.js [client] (ecmascript, async loader)");
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/readest-app/src/store/customFontStore.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCustomFontStore",
    ()=>useCustomFontStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$6_$40$types$2b$react$40$18$2e$3$2e$12_react$40$19$2e$2$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zustand@5.0.6_@types+react@18.3.12_react@19.2.0/node_modules/zustand/esm/react.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$styles$2f$fonts$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/styles/fonts.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/settingsStore.ts [client] (ecmascript)");
;
;
;
function toSettingsFont(font) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { blobUrl, loaded, error, ...settingsFont } = font;
    return settingsFont;
}
const useCustomFontStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$6_$40$types$2b$react$40$18$2e$3$2e$12_react$40$19$2e$2$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
        fonts: [],
        loading: false,
        setFonts: (fonts)=>set({
                fonts
            }),
        addFont: (path, options)=>{
            const font = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$styles$2f$fonts$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["createCustomFont"])(path, options);
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
                const format = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$styles$2f$fonts$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getFontFormat"])(font.path);
                const mimeType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$styles$2f$fonts$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getMimeType"])(format);
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
                const { settings } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useSettingsStore"].getState();
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
                const { settings, setSettings, saveSettings } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useSettingsStore"].getState();
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
if ("TURBOPACK compile-time truthy", 1) {
    window.addEventListener('beforeunload', ()=>{
        const store = useCustomFontStore.getState();
        const fonts = store.getAllFonts();
        fonts.forEach((font)=>{
            if (font.blobUrl) {
                URL.revokeObjectURL(font.blobUrl);
            }
        });
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/readest-app/src/store/customTextureStore.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCustomTextureStore",
    ()=>useCustomTextureStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$6_$40$types$2b$react$40$18$2e$3$2e$12_react$40$19$2e$2$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zustand@5.0.6_@types+react@18.3.12_react@19.2.0/node_modules/zustand/esm/react.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$styles$2f$textures$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/styles/textures.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/settingsStore.ts [client] (ecmascript)");
;
;
;
function toSettingsTexture(texture) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { blobUrl, loaded, error, ...settingsTexture } = texture;
    return settingsTexture;
}
const useCustomTextureStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$6_$40$types$2b$react$40$18$2e$3$2e$12_react$40$19$2e$2$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
        textures: [],
        loading: false,
        setTextures: (textures)=>set({
                textures
            }),
        addTexture: (path)=>{
            const texture = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$styles$2f$textures$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["createCustomTexture"])(path);
            const existingTexture = get().textures.find((t)=>t.id === texture.id);
            if (existingTexture) {
                get().updateTexture(texture.id, {
                    ...texture,
                    path: texture.path,
                    downloadedAt: Date.now(),
                    deletedAt: undefined,
                    loaded: false,
                    blobUrl: undefined,
                    error: undefined
                });
                set((state)=>({
                        textures: [
                            ...state.textures
                        ]
                    }));
                return existingTexture;
            }
            const newTexture = {
                ...texture,
                downloadedAt: Date.now()
            };
            set((state)=>({
                    textures: [
                        ...state.textures,
                        newTexture
                    ]
                }));
            return newTexture;
        },
        removeTexture: (id)=>{
            const texture = get().getTexture(id);
            if (!texture) return false;
            if (texture.blobUrl) {
                URL.revokeObjectURL(texture.blobUrl);
            }
            const result = get().updateTexture(id, {
                deletedAt: Date.now(),
                blobUrl: undefined,
                loaded: false,
                error: undefined
            });
            set((state)=>({
                    textures: [
                        ...state.textures
                    ]
                }));
            return result;
        },
        updateTexture: (id, updates)=>{
            const state = get();
            const textureIndex = state.textures.findIndex((texture)=>texture.id === id);
            if (textureIndex === -1) return false;
            set((state)=>({
                    textures: state.textures.map((texture, index)=>index === textureIndex ? {
                            ...texture,
                            ...updates
                        } : texture)
                }));
            return true;
        },
        getTexture: (id)=>{
            return get().textures.find((texture)=>texture.id === id);
        },
        getAllTextures: ()=>{
            return get().textures;
        },
        getAvailableTextures: ()=>{
            return get().textures.filter((texture)=>!texture.deletedAt);
        },
        clearAllTextures: ()=>{
            const { textures } = get();
            textures.forEach((texture)=>{
                if (texture.blobUrl) {
                    URL.revokeObjectURL(texture.blobUrl);
                }
            });
            set({
                textures: []
            });
        },
        loadTexture: async (envConfig, textureId)=>{
            const texture = get().getTexture(textureId);
            if (!texture) {
                throw new Error(`Texture with id "${textureId}" not found`);
            }
            if (texture.deletedAt) {
                throw new Error(`Texture "${texture.name}" has been deleted`);
            }
            if (texture.loaded && texture.blobUrl && !texture.error) {
                return texture;
            }
            try {
                get().updateTexture(textureId, {
                    loaded: false,
                    error: undefined
                });
                const appService = await envConfig.getAppService();
                const textureFile = await appService.openFile(texture.path, 'Images');
                const ext = texture.path.split('.').pop()?.toLowerCase();
                const mimeTypes = {
                    jpg: 'image/jpeg',
                    jpeg: 'image/jpeg',
                    png: 'image/png',
                    gif: 'image/gif',
                    webp: 'image/webp',
                    bmp: 'image/bmp'
                };
                const mimeType = mimeTypes[ext || ''] || 'image/jpeg';
                const blob = new Blob([
                    await textureFile.arrayBuffer()
                ], {
                    type: mimeType
                });
                const blobUrl = URL.createObjectURL(blob);
                get().updateTexture(textureId, {
                    blobUrl,
                    loaded: true,
                    error: undefined
                });
                const updatedTexture = get().getTexture(textureId);
                return updatedTexture;
            } catch (error) {
                const errorMessage = error instanceof Error ? error.message : 'Unknown error';
                get().updateTexture(textureId, {
                    loaded: false,
                    error: errorMessage,
                    blobUrl: undefined
                });
                throw error;
            }
        },
        loadTextures: async (envConfig, textureIds)=>{
            set({
                loading: true
            });
            try {
                const results = await Promise.allSettled(textureIds.map((id)=>get().loadTexture(envConfig, id)));
                return results.filter((result)=>result.status === 'fulfilled').map((result)=>result.value);
            } finally{
                set({
                    loading: false
                });
            }
        },
        loadAllTextures: async (envConfig)=>{
            const textureIds = get().getAvailableTextures().map((texture)=>texture.id);
            return await get().loadTextures(envConfig, textureIds);
        },
        unloadTexture: (textureId)=>{
            const texture = get().getTexture(textureId);
            if (texture?.blobUrl) {
                URL.revokeObjectURL(texture.blobUrl);
            }
            return get().updateTexture(textureId, {
                blobUrl: undefined,
                loaded: false,
                error: undefined
            });
        },
        unloadAllTextures: ()=>{
            const textures = get().getAllTextures();
            textures.forEach((texture)=>{
                if (texture.blobUrl) {
                    URL.revokeObjectURL(texture.blobUrl);
                }
            });
            textures.forEach((texture)=>{
                get().updateTexture(texture.id, {
                    blobUrl: undefined,
                    loaded: false,
                    error: undefined
                });
            });
        },
        getLoadedTextures: ()=>{
            return get().getAvailableTextures().filter((texture)=>texture.loaded && !texture.error);
        },
        isTextureLoaded: (textureId)=>{
            const texture = get().getTexture(textureId);
            return texture?.loaded === true && !texture.error && !texture.deletedAt;
        },
        applyTexture: async (envConfig, textureId)=>{
            const customTextures = get().getAvailableTextures();
            const allTextures = [
                ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$styles$2f$textures$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["PREDEFINED_TEXTURES"],
                ...customTextures
            ];
            let selectedTexture = allTextures.find((t)=>t.id === textureId);
            if (!selectedTexture || selectedTexture.id === 'none') {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$styles$2f$textures$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["unmountBackgroundTexture"])(document);
                return;
            }
            if (customTextures.find((t)=>t.id === textureId) && !get().isTextureLoaded(textureId)) {
                selectedTexture = await get().loadTexture(envConfig, textureId);
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$styles$2f$textures$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["mountBackgroundTexture"])(document, selectedTexture);
        },
        loadCustomTextures: async (envConfig)=>{
            try {
                const { settings } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useSettingsStore"].getState();
                const currentTextures = get().textures;
                if (settings?.customTextures) {
                    const textures = settings.customTextures.map((texture)=>{
                        const existingTexture = currentTextures.find((t)=>t.id === texture.id);
                        return {
                            ...texture,
                            loaded: existingTexture?.loaded || false,
                            error: existingTexture?.error,
                            blobUrl: existingTexture?.blobUrl
                        };
                    });
                    set({
                        textures
                    });
                    await get().loadAllTextures(envConfig);
                }
            } catch (error) {
                console.error('Failed to load custom textures settings:', error);
            }
        },
        saveCustomTextures: async (envConfig)=>{
            try {
                const { settings, setSettings, saveSettings } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useSettingsStore"].getState();
                const { textures } = get();
                settings.customTextures = textures.map(toSettingsTexture);
                setSettings(settings);
                saveSettings(envConfig, settings);
            } catch (error) {
                console.error('Failed to save custom textures settings:', error);
                throw error;
            }
        }
    }));
// Cleanup blob URLs before page unload
if ("TURBOPACK compile-time truthy", 1) {
    window.addEventListener('beforeunload', ()=>{
        const store = useCustomTextureStore.getState();
        const textures = store.getAllTextures();
        textures.forEach((texture)=>{
            if (texture.blobUrl) {
                URL.revokeObjectURL(texture.blobUrl);
            }
        });
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/readest-app/src/i18n/i18n.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$i18next$40$24$2e$2$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$i18next$2f$dist$2f$esm$2f$i18next$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/i18next@24.2.0_typescript@5.7.2/node_modules/i18next/dist/esm/i18next.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$i18next$2d$browser$2d$languagedetector$40$8$2e$0$2e$2$2f$node_modules$2f$i18next$2d$browser$2d$languagedetector$2f$dist$2f$esm$2f$i18nextBrowserLanguageDetector$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/i18next-browser-languagedetector@8.0.2/node_modules/i18next-browser-languagedetector/dist/esm/i18nextBrowserLanguageDetector.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$i18next$40$15$2e$2$2e$0_i18next$40$24$2e$2$2e$0_typescript$40$5$2e$7$2e$2_$5f$react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-i18next@15.2.0_i18next@24.2.0_typescript@5.7.2__react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/react-i18next/dist/es/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$i18next$40$15$2e$2$2e$0_i18next$40$24$2e$2$2e$0_typescript$40$5$2e$7$2e$2_$5f$react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$initReactI18next$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-i18next@15.2.0_i18next@24.2.0_typescript@5.7.2__react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/react-i18next/dist/es/initReactI18next.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$i18next$2d$scanner$2e$config$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/i18next-scanner.config.js [client] (ecmascript)");
;
;
;
;
const isBrowser = ("TURBOPACK compile-time value", "object") !== 'undefined';
const initI18n = async ()=>{
    if ("TURBOPACK compile-time truthy", 1) {
        const HttpApi = (await __turbopack_context__.A("[project]/node_modules/.pnpm/i18next-http-backend@3.0.1/node_modules/i18next-http-backend/esm/index.js [client] (ecmascript, async loader)")).default;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$i18next$40$24$2e$2$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$i18next$2f$dist$2f$esm$2f$i18next$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].use(HttpApi);
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$i18next$40$24$2e$2$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$i18next$2f$dist$2f$esm$2f$i18next$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].use(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$i18next$2d$browser$2d$languagedetector$40$8$2e$0$2e$2$2f$node_modules$2f$i18next$2d$browser$2d$languagedetector$2f$dist$2f$esm$2f$i18nextBrowserLanguageDetector$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]).use(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$i18next$40$15$2e$2$2e$0_i18next$40$24$2e$2$2e$0_typescript$40$5$2e$7$2e$2_$5f$react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$initReactI18next$2e$js__$5b$client$5d$__$28$ecmascript$29$__["initReactI18next"]).init({
        supportedLngs: [
            'en',
            ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$i18next$2d$scanner$2e$config$2e$js__$5b$client$5d$__$28$ecmascript$29$__["options"].lngs
        ],
        fallbackLng: {
            'zh-HK': [
                'zh-TW',
                'zh-CN',
                'en'
            ],
            kk: [
                'ru',
                'en'
            ],
            ky: [
                'ru',
                'en'
            ],
            tk: [
                'ru',
                'en'
            ],
            uz: [
                'ru',
                'en'
            ],
            ug: [
                'ru',
                'en'
            ],
            tt: [
                'ru',
                'en'
            ],
            default: [
                'zh-CN',
                'en'
            ]
        },
        ns: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$i18next$2d$scanner$2e$config$2e$js__$5b$client$5d$__$28$ecmascript$29$__["options"].ns,
        defaultNS: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$i18next$2d$scanner$2e$config$2e$js__$5b$client$5d$__$28$ecmascript$29$__["options"].defaultNs,
        ...isBrowser && {
            backend: {
                loadPath: '/locales/{{lng}}/{{ns}}.json'
            }
        },
        detection: {
            order: [
                'querystring',
                'localStorage',
                'navigator'
            ],
            caches: [
                'localStorage'
            ]
        },
        keySeparator: false,
        nsSeparator: false,
        interpolation: {
            escapeValue: false
        },
        react: {
            useSuspense: false
        }
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$i18next$40$24$2e$2$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$i18next$2f$dist$2f$esm$2f$i18next$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].on('languageChanged', (lng)=>{
        console.log('Language changed to', lng);
    });
};
initI18n();
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$i18next$40$24$2e$2$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$i18next$2f$dist$2f$esm$2f$i18next$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/readest-app/src/types/book.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FIXED_LAYOUT_FORMATS",
    ()=>FIXED_LAYOUT_FORMATS
]);
const FIXED_LAYOUT_FORMATS = new Set([
    'PDF',
    'CBZ'
]);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/readest-app/src/types/view.ts [client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/readest-app/src/helpers/updater.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$semver$40$7$2e$7$2e$2$2f$node_modules$2f$semver$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/semver@7.7.2/node_modules/semver/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$plugin$2d$updater$40$2$2e$9$2e$0$2f$node_modules$2f40$tauri$2d$apps$2f$plugin$2d$updater$2f$dist$2d$js$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tauri-apps+plugin-updater@2.9.0/node_modules/@tauri-apps/plugin-updater/dist-js/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$plugin$2d$os$40$2$2e$3$2e$2$2f$node_modules$2f40$tauri$2d$apps$2f$plugin$2d$os$2f$dist$2d$js$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tauri-apps+plugin-os@2.3.2/node_modules/@tauri-apps/plugin-os/dist-js/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$plugin$2d$http$40$2$2e$5$2e$6$2f$node_modules$2f40$tauri$2d$apps$2f$plugin$2d$http$2f$dist$2d$js$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tauri-apps+plugin-http@2.5.6/node_modules/@tauri-apps/plugin-http/dist-js/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$webviewWindow$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tauri-apps+api@2.9.1/node_modules/@tauri-apps/api/webviewWindow.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$UpdaterWindow$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/components/UpdaterWindow.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/environment.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$version$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/version.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/constants.ts [client] (ecmascript)");
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
    const win = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$webviewWindow$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WebviewWindow"]('updater', {
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
    if (isAutoCheck && lastCheck && now - parseInt(lastCheck, 10) < __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["CHECK_UPDATE_INTERVAL_SEC"] * 1000) return false;
    localStorage.setItem(LAST_CHECK_KEY, now.toString());
    console.log('Checking for updates');
    const OS_TYPE = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$plugin$2d$os$40$2$2e$3$2e$2$2f$node_modules$2f40$tauri$2d$apps$2f$plugin$2d$os$2f$dist$2d$js$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["type"])();
    if ([
        'macos',
        'windows',
        'linux'
    ].includes(OS_TYPE)) {
        const update = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$plugin$2d$updater$40$2$2e$9$2e$0$2f$node_modules$2f40$tauri$2d$apps$2f$plugin$2d$updater$2f$dist$2d$js$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["check"])();
        if (update) {
            showUpdateWindow(update.version);
        }
        return !!update;
    } else if (OS_TYPE === 'android') {
        try {
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$plugin$2d$http$40$2$2e$5$2e$6$2f$node_modules$2f40$tauri$2d$apps$2f$plugin$2d$http$2f$dist$2d$js$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["fetch"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["READEST_UPDATER_FILE"], {
                connectTimeout: 5000
            });
            const data = await response.json();
            const isNewer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$semver$40$7$2e$7$2e$2$2f$node_modules$2f$semver$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].gt(data.version, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$version$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getAppVersion"])());
            if (isNewer && ('android-arm64' in data.platforms || 'android-universal' in data.platforms)) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$UpdaterWindow$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["setUpdaterWindowVisible"])(true, data.version, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$version$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getAppVersion"])());
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
    const currentVersion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$version$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getAppVersion"])();
    const lastShownVersion = getLastShownReleaseNotesVersion();
    if (lastShownVersion && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$semver$40$7$2e$7$2e$2$2f$node_modules$2f$semver$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].gt(currentVersion, lastShownVersion) || !isAutoCheck) {
        try {
            const fetchFunc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["isTauriAppPlatform"])() ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$plugin$2d$http$40$2$2e$5$2e$6$2f$node_modules$2f40$tauri$2d$apps$2f$plugin$2d$http$2f$dist$2d$js$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["fetch"] : window.fetch;
            const res = await fetchFunc(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["READEST_CHANGELOG_FILE"]);
            if (res.ok) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$UpdaterWindow$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["setUpdaterWindowVisible"])(true, currentVersion, lastShownVersion, false);
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/readest-app/src/helpers/openWith.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseOpenWithFiles",
    ()=>parseOpenWithFiles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/environment.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$plugin$2d$deep$2d$link$40$2$2e$4$2e$6$2f$node_modules$2f40$tauri$2d$apps$2f$plugin$2d$deep$2d$link$2f$dist$2d$js$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tauri-apps+plugin-deep-link@2.4.6/node_modules/@tauri-apps/plugin-deep-link/dist-js/index.js [client] (ecmascript)");
;
;
const parseWindowOpenWithFiles = ()=>{
    const params = new URLSearchParams(window.location.search);
    const files = params.getAll('file');
    return files.length > 0 ? files : window.OPEN_WITH_FILES;
};
const parseCLIOpenWithFiles = async ()=>{
    const { getMatches } = await __turbopack_context__.A("[project]/node_modules/.pnpm/@tauri-apps+plugin-cli@2.4.1/node_modules/@tauri-apps/plugin-cli/dist-js/index.js [client] (ecmascript, async loader)");
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
    const urls = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$plugin$2d$deep$2d$link$40$2$2e$4$2e$6$2f$node_modules$2f40$tauri$2d$apps$2f$plugin$2d$deep$2d$link$2f$dist$2d$js$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getCurrent"])();
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
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["isWebAppPlatform"])()) return [];
    let files = parseWindowOpenWithFiles();
    if ((!files || files.length === 0) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["hasCli"])()) {
        files = await parseCLIOpenWithFiles();
    }
    if (!files || files.length === 0) {
        files = await parseIntentOpenWithFiles(appService);
    }
    return files;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/readest-app/src/helpers/shortcuts.ts [client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/readest-app/src/helpers/settings.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "saveSysSettings",
    ()=>saveSysSettings,
    "saveViewSettings",
    ()=>saveViewSettings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/bookDataStore.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/readerStore.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/settingsStore.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$style$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/style.ts [client] (ecmascript)");
;
;
;
;
const saveViewSettings = async (envConfig, bookKey, key, value, skipGlobal = false, applyStyles = true)=>{
    const { settings, isSettingsGlobal, setSettings, saveSettings } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useSettingsStore"].getState();
    const { bookKeys, getView, getViewState, getViewSettings, setViewSettings } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useReaderStore"].getState();
    const { getConfig, saveConfig } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useBookDataStore"].getState();
    const applyViewSettings = async (bookKey)=>{
        const viewSettings = getViewSettings(bookKey);
        const viewState = getViewState(bookKey);
        if (bookKey && viewSettings && viewSettings[key] !== value) {
            viewSettings[key] = value;
            setViewSettings(bookKey, viewSettings);
            if (applyStyles) {
                const view = getView(bookKey);
                view?.renderer.setStyles?.((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$style$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getStyles"])(viewSettings));
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
    const { settings, setSettings, saveSettings } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useSettingsStore"].getState();
    if (settings[key] !== value) {
        settings[key] = value;
        setSettings(settings);
        await saveSettings(envConfig, settings);
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/readest-app/src/pages/reader/[ids].tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react@19.2.0/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.28.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/router.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/context/AuthContext.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/context/EnvContext.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$PHContext$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/context/PHContext.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$SyncContext$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/context/SyncContext.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$Reader$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/app/reader/components/Reader.tsx [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function Page() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const ids = router.query['ids'];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$PHContext$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["CSPostHogProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["EnvProvider"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["AuthProvider"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$SyncContext$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["SyncProvider"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$Reader$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
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
_s(Page, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Page;
var _c;
__turbopack_context__.k.register(_c, "Page");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=apps_readest-app_src_cc906060._.js.map