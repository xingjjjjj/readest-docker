module.exports = [
"[project]/apps/readest-app/src/app/reader/components/footerbar/utils.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getNavigationHandler",
    ()=>getNavigationHandler,
    "getNavigationIcon",
    ()=>getNavigationIcon,
    "getNavigationLabel",
    ()=>getNavigationLabel
]);
const getNavigationIcon = (rtl, prevIcon, nextIcon)=>rtl ? nextIcon : prevIcon;
const getNavigationLabel = (rtl, prevLabel, nextLabel)=>rtl ? nextLabel : prevLabel;
const getNavigationHandler = (rtl, prevHandler, nextHandler)=>rtl ? nextHandler : prevHandler;
}),
"[project]/apps/readest-app/src/app/reader/components/footerbar/NavigationPanel.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "NavigationPanel",
    ()=>NavigationPanel
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/clsx [external] (clsx, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-icons@5.4.0_react@19.2.0/node_modules/react-icons/ri/index.mjs [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$footerbar$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/app/reader/components/footerbar/utils.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/readerStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/hooks/useTranslation.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$Button$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/components/Button.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$Slider$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/components/Slider.tsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$Button$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$Button$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
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
const NavigationPanel = ({ bookKey, actionTab, progressFraction, progressValid, navigationHandlers, viewSettings, bottomOffset: mobileBottomOffset, sliderHeight })=>{
    const _ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useTranslation"])();
    const { getView } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useReaderStore"])();
    const view = getView(bookKey);
    const [progressValue, setProgressValue] = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].useState(progressValid ? progressFraction * 100 : 0);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (progressValid) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setProgressValue(progressFraction * 100);
        }
    }, [
        progressValid,
        progressFraction
    ]);
    const handleProgressChange = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])((value)=>{
        setProgressValue(value);
        navigationHandlers.onProgressChange(value);
    }, [
        navigationHandlers
    ]);
    const classes = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__["default"])('footerbar-progress-mobile bg-base-200 absolute flex w-full flex-col items-center gap-y-8 px-4 transition-all sm:hidden', actionTab === 'progress' ? 'pointer-events-auto translate-y-0 pb-4 pt-8 ease-out' : 'pointer-events-none invisible translate-y-full overflow-hidden pb-0 pt-0 ease-in');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: classes,
        style: {
            bottom: mobileBottomOffset
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "flex w-full items-center justify-between gap-x-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$Slider$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                    label: _('Reading Progress'),
                    heightPx: sliderHeight,
                    bubbleLabel: `${Math.round(progressValue)}%`,
                    initialValue: progressValue,
                    onChange: handleProgressChange
                }, void 0, false, {
                    fileName: "[project]/apps/readest-app/src/app/reader/components/footerbar/NavigationPanel.tsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/reader/components/footerbar/NavigationPanel.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "flex w-full items-center justify-between gap-x-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$Button$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        icon: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$footerbar$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getNavigationIcon"])(viewSettings?.rtl, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["RiArrowLeftDoubleLine"], {}, void 0, false, {
                            fileName: "[project]/apps/readest-app/src/app/reader/components/footerbar/NavigationPanel.tsx",
                            lineNumber: 82,
                            columnNumber: 13
                        }, void 0), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["RiArrowRightDoubleLine"], {}, void 0, false, {
                            fileName: "[project]/apps/readest-app/src/app/reader/components/footerbar/NavigationPanel.tsx",
                            lineNumber: 83,
                            columnNumber: 13
                        }, void 0)),
                        onClick: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$footerbar$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getNavigationHandler"])(viewSettings?.rtl, navigationHandlers.onPrevSection, navigationHandlers.onNextSection),
                        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$footerbar$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getNavigationLabel"])(viewSettings?.rtl, _('Previous Section'), _('Next Section'))
                    }, void 0, false, {
                        fileName: "[project]/apps/readest-app/src/app/reader/components/footerbar/NavigationPanel.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$Button$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        icon: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$footerbar$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getNavigationIcon"])(viewSettings?.rtl, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["RiArrowLeftSLine"], {}, void 0, false, {
                            fileName: "[project]/apps/readest-app/src/app/reader/components/footerbar/NavigationPanel.tsx",
                            lineNumber: 93,
                            columnNumber: 54
                        }, void 0), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["RiArrowRightSLine"], {}, void 0, false, {
                            fileName: "[project]/apps/readest-app/src/app/reader/components/footerbar/NavigationPanel.tsx",
                            lineNumber: 93,
                            columnNumber: 76
                        }, void 0)),
                        onClick: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$footerbar$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getNavigationHandler"])(viewSettings?.rtl, navigationHandlers.onPrevPage, navigationHandlers.onNextPage),
                        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$footerbar$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getNavigationLabel"])(viewSettings?.rtl, _('Previous Page'), _('Next Page'))
                    }, void 0, false, {
                        fileName: "[project]/apps/readest-app/src/app/reader/components/footerbar/NavigationPanel.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$Button$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        icon: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$footerbar$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getNavigationIcon"])(viewSettings?.rtl, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["RiArrowGoBackLine"], {}, void 0, false, {
                            fileName: "[project]/apps/readest-app/src/app/reader/components/footerbar/NavigationPanel.tsx",
                            lineNumber: 104,
                            columnNumber: 13
                        }, void 0), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["RiArrowGoForwardLine"], {}, void 0, false, {
                            fileName: "[project]/apps/readest-app/src/app/reader/components/footerbar/NavigationPanel.tsx",
                            lineNumber: 105,
                            columnNumber: 13
                        }, void 0)),
                        onClick: navigationHandlers.onGoBack,
                        label: _('Go Back'),
                        disabled: !view?.history.canGoBack
                    }, void 0, false, {
                        fileName: "[project]/apps/readest-app/src/app/reader/components/footerbar/NavigationPanel.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$Button$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        icon: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$footerbar$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getNavigationIcon"])(viewSettings?.rtl, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["RiArrowGoForwardLine"], {}, void 0, false, {
                            fileName: "[project]/apps/readest-app/src/app/reader/components/footerbar/NavigationPanel.tsx",
                            lineNumber: 114,
                            columnNumber: 13
                        }, void 0), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["RiArrowGoBackLine"], {}, void 0, false, {
                            fileName: "[project]/apps/readest-app/src/app/reader/components/footerbar/NavigationPanel.tsx",
                            lineNumber: 115,
                            columnNumber: 13
                        }, void 0)),
                        onClick: navigationHandlers.onGoForward,
                        label: _('Go Forward'),
                        disabled: !view?.history.canGoForward
                    }, void 0, false, {
                        fileName: "[project]/apps/readest-app/src/app/reader/components/footerbar/NavigationPanel.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$Button$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        icon: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$footerbar$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getNavigationIcon"])(viewSettings?.rtl, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["RiArrowRightSLine"], {}, void 0, false, {
                            fileName: "[project]/apps/readest-app/src/app/reader/components/footerbar/NavigationPanel.tsx",
                            lineNumber: 122,
                            columnNumber: 54
                        }, void 0), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["RiArrowLeftSLine"], {}, void 0, false, {
                            fileName: "[project]/apps/readest-app/src/app/reader/components/footerbar/NavigationPanel.tsx",
                            lineNumber: 122,
                            columnNumber: 77
                        }, void 0)),
                        onClick: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$footerbar$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getNavigationHandler"])(viewSettings?.rtl, navigationHandlers.onNextPage, navigationHandlers.onPrevPage),
                        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$footerbar$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getNavigationLabel"])(viewSettings?.rtl, _('Next Page'), _('Previous Page'))
                    }, void 0, false, {
                        fileName: "[project]/apps/readest-app/src/app/reader/components/footerbar/NavigationPanel.tsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$Button$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        icon: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$footerbar$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getNavigationIcon"])(viewSettings?.rtl, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["RiArrowRightDoubleLine"], {}, void 0, false, {
                            fileName: "[project]/apps/readest-app/src/app/reader/components/footerbar/NavigationPanel.tsx",
                            lineNumber: 133,
                            columnNumber: 13
                        }, void 0), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["RiArrowLeftDoubleLine"], {}, void 0, false, {
                            fileName: "[project]/apps/readest-app/src/app/reader/components/footerbar/NavigationPanel.tsx",
                            lineNumber: 134,
                            columnNumber: 13
                        }, void 0)),
                        onClick: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$footerbar$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getNavigationHandler"])(viewSettings?.rtl, navigationHandlers.onNextSection, navigationHandlers.onPrevSection),
                        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$footerbar$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getNavigationLabel"])(viewSettings?.rtl, _('Next Section'), _('Previous Section'))
                    }, void 0, false, {
                        fileName: "[project]/apps/readest-app/src/app/reader/components/footerbar/NavigationPanel.tsx",
                        lineNumber: 130,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/readest-app/src/app/reader/components/footerbar/NavigationPanel.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/readest-app/src/app/reader/components/footerbar/NavigationPanel.tsx",
        lineNumber: 68,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/readest-app/src/app/reader/components/footerbar/FontLayoutPanel.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "FontLayoutPanel",
    ()=>FontLayoutPanel
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/clsx [external] (clsx, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$tb$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-icons@5.4.0_react@19.2.0/node_modules/react-icons/tb/index.mjs [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$rx$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-icons@5.4.0_react@19.2.0/node_modules/react-icons/rx/index.mjs [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/context/EnvContext.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/readerStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/hooks/useTranslation.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$helpers$2f$settings$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/helpers/settings.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$Slider$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/components/Slider.tsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$helpers$2f$settings$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$helpers$2f$settings$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
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
const FONT_SIZE_LIMITS = {
    MIN: 8,
    MAX: 30,
    DEFAULT: 16
};
const LINE_HEIGHT_LIMITS = {
    MIN: 8,
    MAX: 24,
    DEFAULT: 16,
    MULTIPLIER: 10
};
const MARGIN_CONSTANTS = {
    MAX_MARGIN_PX: 88,
    MAX_GAP_PERCENT: 10,
    MARGIN_RATIO: 50
};
const FontLayoutPanel = ({ bookKey, actionTab, bottomOffset, marginIconSize })=>{
    const _ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useTranslation"])();
    const { envConfig } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["useEnv"])();
    const { getView, getViewSettings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useReaderStore"])();
    const viewSettings = getViewSettings(bookKey);
    const view = getView(bookKey);
    const handleFontSizeChange = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])((value)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$helpers$2f$settings$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["saveViewSettings"])(envConfig, bookKey, 'defaultFontSize', value);
    }, [
        envConfig,
        bookKey
    ]);
    const handleMarginChange = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])((value)=>{
        const currentViewSettings = getViewSettings(bookKey);
        if (!currentViewSettings) return;
        const { MAX_MARGIN_PX, MAX_GAP_PERCENT } = MARGIN_CONSTANTS;
        const marginPx = Math.round(value / 100 * MAX_MARGIN_PX);
        const gapPercent = Math.round(value / 100 * MAX_GAP_PERCENT);
        currentViewSettings.marginTopPx = marginPx;
        currentViewSettings.marginBottomPx = marginPx / 2;
        currentViewSettings.marginLeftPx = marginPx / 2;
        currentViewSettings.marginRightPx = marginPx / 2;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$helpers$2f$settings$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["saveViewSettings"])(envConfig, bookKey, 'gapPercent', gapPercent, false, false);
        view?.renderer.setAttribute('margin', `${marginPx}px`);
        view?.renderer.setAttribute('gap', `${gapPercent}%`);
        if (currentViewSettings?.scrolled) {
            view?.renderer.setAttribute('flow', 'scrolled');
        }
    }, [
        envConfig,
        bookKey,
        view,
        getViewSettings
    ]);
    const handleLineHeightChange = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])((value)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$helpers$2f$settings$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["saveViewSettings"])(envConfig, bookKey, 'lineHeight', value / LINE_HEIGHT_LIMITS.MULTIPLIER);
    }, [
        envConfig,
        bookKey
    ]);
    const getMarginProgressValue = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])((marginPx, gapPercent)=>{
        const { MAX_MARGIN_PX, MAX_GAP_PERCENT, MARGIN_RATIO } = MARGIN_CONSTANTS;
        return (marginPx / MAX_MARGIN_PX + gapPercent / MAX_GAP_PERCENT) * MARGIN_RATIO;
    }, []);
    const classes = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__["default"])('footerbar-font-mobile bg-base-200 absolute flex w-full flex-col items-center gap-y-8 px-4 transition-all sm:hidden', actionTab === 'font' ? 'pointer-events-auto translate-y-0 pb-4 pt-8 ease-out' : 'pointer-events-none invisible translate-y-full overflow-hidden pb-0 pt-0 ease-in');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: classes,
        style: {
            bottom: bottomOffset
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$Slider$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                label: _('Font Size'),
                initialValue: viewSettings?.defaultFontSize ?? FONT_SIZE_LIMITS.DEFAULT,
                bubbleLabel: `${viewSettings?.defaultFontSize ?? FONT_SIZE_LIMITS.DEFAULT}`,
                minLabel: "A",
                maxLabel: "A",
                minClassName: "text-xs",
                maxClassName: "text-base",
                onChange: handleFontSizeChange,
                min: FONT_SIZE_LIMITS.MIN,
                max: FONT_SIZE_LIMITS.MAX
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/reader/components/footerbar/FontLayoutPanel.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "flex w-full items-center justify-between gap-x-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$Slider$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        label: _('Page Margin'),
                        initialValue: getMarginProgressValue(viewSettings?.marginTopPx ?? 44, viewSettings?.gapPercent ?? 5),
                        bubbleElement: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$tb$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["TbBoxMargin"], {
                            size: marginIconSize
                        }, void 0, false, {
                            fileName: "[project]/apps/readest-app/src/app/reader/components/footerbar/FontLayoutPanel.tsx",
                            lineNumber: 123,
                            columnNumber: 26
                        }, void 0),
                        minLabel: _('Small'),
                        maxLabel: _('Large'),
                        step: 10,
                        onChange: handleMarginChange
                    }, void 0, false, {
                        fileName: "[project]/apps/readest-app/src/app/reader/components/footerbar/FontLayoutPanel.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$Slider$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        label: _('Line Spacing'),
                        initialValue: (viewSettings?.lineHeight ?? 1.6) * LINE_HEIGHT_LIMITS.MULTIPLIER,
                        bubbleElement: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$rx$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["RxLineHeight"], {
                            size: marginIconSize
                        }, void 0, false, {
                            fileName: "[project]/apps/readest-app/src/app/reader/components/footerbar/FontLayoutPanel.tsx",
                            lineNumber: 132,
                            columnNumber: 26
                        }, void 0),
                        minLabel: _('Small'),
                        maxLabel: _('Large'),
                        min: LINE_HEIGHT_LIMITS.MIN,
                        max: LINE_HEIGHT_LIMITS.MAX,
                        onChange: handleLineHeightChange
                    }, void 0, false, {
                        fileName: "[project]/apps/readest-app/src/app/reader/components/footerbar/FontLayoutPanel.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/readest-app/src/app/reader/components/footerbar/FontLayoutPanel.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/readest-app/src/app/reader/components/footerbar/FontLayoutPanel.tsx",
        lineNumber: 103,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/readest-app/src/app/reader/components/footerbar/ColorPanel.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "ColorPanel",
    ()=>ColorPanel
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/clsx [external] (clsx, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-icons@5.4.0_react@19.2.0/node_modules/react-icons/pi/index.mjs [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$tb$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-icons@5.4.0_react@19.2.0/node_modules/react-icons/tb/index.mjs [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/context/EnvContext.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$themeStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/themeStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/hooks/useTranslation.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/settingsStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$deviceStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/deviceStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$helpers$2f$settings$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/helpers/settings.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$styles$2f$themes$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/styles/themes.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$debounce$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/debounce.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$Slider$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/components/Slider.tsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$themeStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$deviceStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$helpers$2f$settings$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$styles$2f$themes$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$themeStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$deviceStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$helpers$2f$settings$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$styles$2f$themes$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
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
const SCREEN_BRIGHTNESS_LIMITS = {
    MIN: 0,
    MAX: 100,
    DEFAULT: 50
};
const ColorPanel = ({ actionTab, bottomOffset })=>{
    const _ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useTranslation"])();
    const { envConfig, appService } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["useEnv"])();
    const { settings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"])();
    const { getScreenBrightness, setScreenBrightness } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$deviceStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useDeviceControlStore"])();
    const { themeMode, themeColor, isDarkMode, setThemeMode, setThemeColor } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$themeStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useThemeStore"])();
    const [screenBrightnessValue, setScreenBrightnessValue] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(settings.screenBrightness >= 0 ? settings.screenBrightness : SCREEN_BRIGHTNESS_LIMITS.DEFAULT);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (!appService?.isMobileApp) return;
        if (actionTab !== 'color') return;
        getScreenBrightness().then((brightness)=>{
            if (brightness >= 0.0 && brightness <= 1.0) {
                const screenBrightness = Math.round(brightness * 100);
                setScreenBrightnessValue(screenBrightness);
            }
        });
    }, [
        actionTab,
        appService,
        getScreenBrightness
    ]);
    const debouncedSetScreenBrightness = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$debounce$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["debounce"])(async (value)=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$helpers$2f$settings$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["saveSysSettings"])(envConfig, 'screenBrightness', value);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$helpers$2f$settings$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["saveSysSettings"])(envConfig, 'autoScreenBrightness', false);
            await setScreenBrightness(value / 100);
        }, 100), [
        envConfig,
        setScreenBrightness
    ]);
    const handleScreenBrightnessChange = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(async (value)=>{
        if (!appService?.isMobileApp) return;
        setScreenBrightnessValue(value);
        debouncedSetScreenBrightness(value);
    }, [
        appService,
        debouncedSetScreenBrightness
    ]);
    const cycleThemeMode = ()=>{
        const nextMode = themeMode === 'auto' ? 'light' : themeMode === 'light' ? 'dark' : 'auto';
        setThemeMode(nextMode);
    };
    const classes = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__["default"])('footerbar-color-mobile bg-base-200 absolute flex w-full flex-col items-center gap-y-8 px-4 transition-all sm:hidden', actionTab === 'color' ? 'pointer-events-auto translate-y-0 pb-4 pt-8 ease-out' : 'pointer-events-none invisible translate-y-full overflow-hidden pb-0 pt-0 ease-in');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: classes,
        style: {
            bottom: bottomOffset
        },
        children: [
            appService?.hasScreenBrightness && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$Slider$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                label: _('Screen Brightness'),
                initialValue: screenBrightnessValue,
                bubbleLabel: `${screenBrightnessValue}`,
                minIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["PiSun"], {
                    size: 16
                }, void 0, false, {
                    fileName: "[project]/apps/readest-app/src/app/reader/components/footerbar/ColorPanel.tsx",
                    lineNumber: 90,
                    columnNumber: 20
                }, void 0),
                maxIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["PiSun"], {
                    size: 24
                }, void 0, false, {
                    fileName: "[project]/apps/readest-app/src/app/reader/components/footerbar/ColorPanel.tsx",
                    lineNumber: 91,
                    columnNumber: 20
                }, void 0),
                onChange: handleScreenBrightnessChange,
                min: SCREEN_BRIGHTNESS_LIMITS.MIN,
                max: SCREEN_BRIGHTNESS_LIMITS.MAX,
                valueToPosition: (value, min, max)=>{
                    if (value <= min) return 0;
                    if (value >= max) return 100;
                    // Use exponential mapping: position = 100 * ((value/max)^0.5)
                    const normalized = value / max;
                    const position = Math.pow(normalized, 0.5) * 100;
                    return position;
                },
                positionToValue: (position, min, max)=>{
                    if (position <= 0) return min;
                    if (position >= 100) return max;
                    // Inverse of the above: value = max * (position/100)^2
                    const normalized = position / 100;
                    const value = Math.pow(normalized, 2) * max;
                    return Math.max(min, Math.min(max, value));
                }
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/reader/components/footerbar/ColorPanel.tsx",
                lineNumber: 86,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between p-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                            className: "text-sm font-medium",
                            children: _('Color')
                        }, void 0, false, {
                            fileName: "[project]/apps/readest-app/src/app/reader/components/footerbar/ColorPanel.tsx",
                            lineNumber: 116,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/apps/readest-app/src/app/reader/components/footerbar/ColorPanel.tsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "flex gap-3 overflow-x-auto p-2",
                        style: {
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none'
                        },
                        children: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$styles$2f$themes$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["themes"].map(({ name, label, colors })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setThemeColor(name),
                                    className: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__["default"])('flex flex-shrink-0 flex-col items-center justify-center rounded-lg p-3 transition-all', 'h-[40px] min-w-[80px]', themeColor === name ? 'ring-primary ring-offset-base-200 ring-2 ring-offset-2' : 'hover:opacity-80'),
                                    style: {
                                        backgroundColor: isDarkMode ? colors.dark['base-100'] : colors.light['base-100'],
                                        color: isDarkMode ? colors.dark['base-content'] : colors.light['base-content']
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-medium",
                                        children: _(label)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/readest-app/src/app/reader/components/footerbar/ColorPanel.tsx",
                                        lineNumber: 138,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, name, false, {
                                    fileName: "[project]/apps/readest-app/src/app/reader/components/footerbar/ColorPanel.tsx",
                                    lineNumber: 123,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                onClick: ()=>cycleThemeMode(),
                                className: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__["default"])('flex flex-shrink-0 flex-col items-center justify-center rounded-lg p-3 transition-all', 'h-[40px] min-w-[80px]', themeMode === 'dark' ? 'ring-primary ring-offset-base-200 ring-2 ring-offset-2' : 'hover:opacity-80'),
                                style: {
                                    backgroundColor: (__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$styles$2f$themes$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["themes"].find((t)=>t.name === themeColor) || __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$styles$2f$themes$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["themes"][0]).colors.dark['base-100'],
                                    color: (__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$styles$2f$themes$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["themes"].find((t)=>t.name === themeColor) || __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$styles$2f$themes$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["themes"][0]).colors.dark['base-content']
                                },
                                children: themeMode === 'light' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["PiSun"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/apps/readest-app/src/app/reader/components/footerbar/ColorPanel.tsx",
                                    lineNumber: 159,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)) : themeMode === 'dark' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["PiMoon"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/apps/readest-app/src/app/reader/components/footerbar/ColorPanel.tsx",
                                    lineNumber: 161,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$tb$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["TbSunMoon"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/apps/readest-app/src/app/reader/components/footerbar/ColorPanel.tsx",
                                    lineNumber: 163,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/apps/readest-app/src/app/reader/components/footerbar/ColorPanel.tsx",
                                lineNumber: 141,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/readest-app/src/app/reader/components/footerbar/ColorPanel.tsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/readest-app/src/app/reader/components/footerbar/ColorPanel.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/readest-app/src/app/reader/components/footerbar/ColorPanel.tsx",
        lineNumber: 84,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/readest-app/src/app/reader/components/footerbar/NavigationBar.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "NavigationBar",
    ()=>NavigationBar
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/clsx [external] (clsx, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-icons@5.4.0_react@19.2.0/node_modules/react-icons/io/index.mjs [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$rx$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-icons@5.4.0_react@19.2.0/node_modules/react-icons/rx/index.mjs [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-icons@5.4.0_react@19.2.0/node_modules/react-icons/ri/index.mjs [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-icons@5.4.0_react@19.2.0/node_modules/react-icons/pi/index.mjs [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-icons@5.4.0_react@19.2.0/node_modules/react-icons/md/index.mjs [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/readerStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/hooks/useTranslation.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useResponsiveSize$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/hooks/useResponsiveSize.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$Button$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/components/Button.tsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$Button$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$Button$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
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
const NavigationBar = ({ bookKey, actionTab, navPadding: mobileNavPadding, onSetActionTab })=>{
    const _ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useTranslation"])();
    const { getViewState } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useReaderStore"])();
    const viewState = getViewState(bookKey);
    const tocIconSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useResponsiveSize$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useResponsiveSize"])(23);
    const fontIconSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useResponsiveSize$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useResponsiveSize"])(18);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__["default"])('bg-base-200 z-30 mt-auto flex w-full justify-between px-8 py-4 sm:hidden'),
        style: {
            paddingBottom: mobileNavPadding
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$Button$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                label: _('Table of Contents'),
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["IoIosList"], {
                    size: tocIconSize
                }, void 0, false, {
                    fileName: "[project]/apps/readest-app/src/app/reader/components/footerbar/NavigationBar.tsx",
                    lineNumber: 39,
                    columnNumber: 15
                }, void 0),
                onClick: ()=>onSetActionTab('toc')
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/reader/components/footerbar/NavigationBar.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$Button$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                label: _('Color'),
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["PiSun"], {
                    className: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__["default"])(actionTab === 'color' && 'text-blue-500')
                }, void 0, false, {
                    fileName: "[project]/apps/readest-app/src/app/reader/components/footerbar/NavigationBar.tsx",
                    lineNumber: 44,
                    columnNumber: 15
                }, void 0),
                onClick: ()=>onSetActionTab('color')
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/reader/components/footerbar/NavigationBar.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$Button$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                label: _('Reading Progress'),
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$rx$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["RxSlider"], {
                    className: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__["default"])(actionTab === 'progress' && 'text-blue-500')
                }, void 0, false, {
                    fileName: "[project]/apps/readest-app/src/app/reader/components/footerbar/NavigationBar.tsx",
                    lineNumber: 49,
                    columnNumber: 15
                }, void 0),
                onClick: ()=>onSetActionTab('progress')
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/reader/components/footerbar/NavigationBar.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$Button$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                label: _('Font & Layout'),
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["RiFontFamily"], {
                    size: fontIconSize,
                    className: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__["default"])(actionTab === 'font' && 'text-blue-500')
                }, void 0, false, {
                    fileName: "[project]/apps/readest-app/src/app/reader/components/footerbar/NavigationBar.tsx",
                    lineNumber: 55,
                    columnNumber: 11
                }, void 0),
                onClick: ()=>onSetActionTab('font')
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/reader/components/footerbar/NavigationBar.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$Button$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                label: _('Speak'),
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["MdOutlineHeadphones"], {
                    className: viewState?.ttsEnabled ? 'text-blue-500' : ''
                }, void 0, false, {
                    fileName: "[project]/apps/readest-app/src/app/reader/components/footerbar/NavigationBar.tsx",
                    lineNumber: 61,
                    columnNumber: 15
                }, void 0),
                onClick: ()=>onSetActionTab('tts')
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/reader/components/footerbar/NavigationBar.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/readest-app/src/app/reader/components/footerbar/NavigationBar.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/readest-app/src/app/reader/components/footerbar/MobileFooterBar.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useResponsiveSize$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/hooks/useResponsiveSize.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$footerbar$2f$NavigationPanel$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/app/reader/components/footerbar/NavigationPanel.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$footerbar$2f$FontLayoutPanel$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/app/reader/components/footerbar/FontLayoutPanel.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$footerbar$2f$ColorPanel$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/app/reader/components/footerbar/ColorPanel.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$footerbar$2f$NavigationBar$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/app/reader/components/footerbar/NavigationBar.tsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$footerbar$2f$NavigationPanel$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$footerbar$2f$FontLayoutPanel$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$footerbar$2f$ColorPanel$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$footerbar$2f$NavigationBar$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$footerbar$2f$NavigationPanel$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$footerbar$2f$FontLayoutPanel$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$footerbar$2f$ColorPanel$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$footerbar$2f$NavigationBar$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
const MobileFooterBar = ({ bookKey, gridInsets, actionTab, progressValid, progressFraction, navigationHandlers, onSetActionTab })=>{
    const isMobile = window.innerWidth < 640 || window.innerHeight < 640;
    const sliderHeight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useResponsiveSize$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useResponsiveSize"])(28);
    const marginIconSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useResponsiveSize$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useResponsiveSize"])(20);
    const bottomOffset = isMobile ? `${gridInsets.bottom * 0.33 + 64}px` : '64px';
    const navPadding = isMobile ? `${gridInsets.bottom * 0.33 + 16}px` : '0px';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$footerbar$2f$ColorPanel$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["ColorPanel"], {
                actionTab: actionTab,
                bottomOffset: bottomOffset
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/reader/components/footerbar/MobileFooterBar.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$footerbar$2f$NavigationPanel$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["NavigationPanel"], {
                bookKey: bookKey,
                actionTab: actionTab,
                progressFraction: progressFraction,
                progressValid: progressValid,
                navigationHandlers: navigationHandlers,
                bottomOffset: bottomOffset,
                sliderHeight: sliderHeight
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/reader/components/footerbar/MobileFooterBar.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$footerbar$2f$FontLayoutPanel$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["FontLayoutPanel"], {
                bookKey: bookKey,
                actionTab: actionTab,
                bottomOffset: bottomOffset,
                marginIconSize: marginIconSize
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/reader/components/footerbar/MobileFooterBar.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$footerbar$2f$NavigationBar$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["NavigationBar"], {
                bookKey: bookKey,
                actionTab: actionTab,
                navPadding: navPadding,
                onSetActionTab: onSetActionTab
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/reader/components/footerbar/MobileFooterBar.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = MobileFooterBar;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/readest-app/src/app/reader/components/footerbar/DesktopFooterBar.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-icons@5.4.0_react@19.2.0/node_modules/react-icons/fa6/index.mjs [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-icons@5.4.0_react@19.2.0/node_modules/react-icons/ri/index.mjs [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$footerbar$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/app/reader/components/footerbar/utils.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/readerStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/hooks/useTranslation.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/bookDataStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$progress$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/progress.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$Button$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/components/Button.tsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$Button$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$Button$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
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
const DesktopFooterBar = ({ bookKey, gridInsets, progressValid, progressFraction, navigationHandlers, onSpeakText })=>{
    const _ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useTranslation"])();
    const { hoveredBookKey, getView, getViewState, getProgress, getViewSettings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useReaderStore"])();
    const { getBookData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useBookDataStore"])();
    const view = getView(bookKey);
    const bookData = getBookData(bookKey);
    const progress = getProgress(bookKey);
    const viewState = getViewState(bookKey);
    const viewSettings = getViewSettings(bookKey);
    const progressStyle = viewSettings?.progressStyle || 'percentage';
    const [progressValue, setProgressValue] = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].useState(progressValid ? progressFraction * 100 : 0);
    const { section, pageinfo } = progress || {};
    const template = progressStyle === 'fraction' ? '{current} / {total}' : '{percent}%';
    const pageInfo = bookData?.isFixedLayout ? section : pageinfo;
    const progressInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$progress$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["formatProgress"])(pageInfo?.current, pageInfo?.total, template, false, 'en', 0);
    const rangeInputRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (hoveredBookKey !== bookKey) {
            if (rangeInputRef.current && document.activeElement === rangeInputRef.current) {
                rangeInputRef.current.blur();
            }
        }
    }, [
        hoveredBookKey,
        bookKey
    ]);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (progressValid) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setProgressValue(progressFraction * 100);
        }
    }, [
        progressValid,
        progressFraction
    ]);
    const handleProgressChange = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])((value)=>{
        setProgressValue(value);
        navigationHandlers.onProgressChange(value);
    }, [
        navigationHandlers
    ]);
    const isMobile = window.innerWidth < 640 || window.innerHeight < 640;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "absolute hidden h-8 w-full items-center gap-x-4 px-4 sm:flex",
        style: {
            bottom: isMobile ? `${gridInsets.bottom * 0.33}px` : '0px'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$Button$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                icon: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$footerbar$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getNavigationIcon"])(viewSettings?.rtl, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["RiArrowLeftDoubleLine"], {}, void 0, false, {
                    fileName: "[project]/apps/readest-app/src/app/reader/components/footerbar/DesktopFooterBar.tsx",
                    lineNumber: 78,
                    columnNumber: 11
                }, void 0), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["RiArrowRightDoubleLine"], {}, void 0, false, {
                    fileName: "[project]/apps/readest-app/src/app/reader/components/footerbar/DesktopFooterBar.tsx",
                    lineNumber: 79,
                    columnNumber: 11
                }, void 0)),
                onClick: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$footerbar$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getNavigationHandler"])(viewSettings?.rtl, navigationHandlers.onPrevSection, navigationHandlers.onNextSection),
                label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$footerbar$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getNavigationLabel"])(viewSettings?.rtl, _('Previous Section'), _('Next Section'))
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/reader/components/footerbar/DesktopFooterBar.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$Button$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                icon: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$footerbar$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getNavigationIcon"])(viewSettings?.rtl, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["RiArrowLeftSLine"], {}, void 0, false, {
                    fileName: "[project]/apps/readest-app/src/app/reader/components/footerbar/DesktopFooterBar.tsx",
                    lineNumber: 89,
                    columnNumber: 52
                }, void 0), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["RiArrowRightSLine"], {}, void 0, false, {
                    fileName: "[project]/apps/readest-app/src/app/reader/components/footerbar/DesktopFooterBar.tsx",
                    lineNumber: 89,
                    columnNumber: 74
                }, void 0)),
                onClick: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$footerbar$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getNavigationHandler"])(viewSettings?.rtl, navigationHandlers.onPrevPage, navigationHandlers.onNextPage),
                label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$footerbar$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getNavigationLabel"])(viewSettings?.rtl, _('Previous Page'), _('Next Page'))
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/reader/components/footerbar/DesktopFooterBar.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$Button$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                icon: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$footerbar$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getNavigationIcon"])(viewSettings?.rtl, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["RiArrowGoBackLine"], {}, void 0, false, {
                    fileName: "[project]/apps/readest-app/src/app/reader/components/footerbar/DesktopFooterBar.tsx",
                    lineNumber: 98,
                    columnNumber: 52
                }, void 0), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["RiArrowGoForwardLine"], {}, void 0, false, {
                    fileName: "[project]/apps/readest-app/src/app/reader/components/footerbar/DesktopFooterBar.tsx",
                    lineNumber: 98,
                    columnNumber: 75
                }, void 0)),
                onClick: navigationHandlers.onGoBack,
                label: _('Go Back'),
                disabled: !view?.history.canGoBack
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/reader/components/footerbar/DesktopFooterBar.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$Button$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                icon: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$footerbar$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getNavigationIcon"])(viewSettings?.rtl, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["RiArrowGoForwardLine"], {}, void 0, false, {
                    fileName: "[project]/apps/readest-app/src/app/reader/components/footerbar/DesktopFooterBar.tsx",
                    lineNumber: 104,
                    columnNumber: 52
                }, void 0), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["RiArrowGoBackLine"], {}, void 0, false, {
                    fileName: "[project]/apps/readest-app/src/app/reader/components/footerbar/DesktopFooterBar.tsx",
                    lineNumber: 104,
                    columnNumber: 78
                }, void 0)),
                onClick: navigationHandlers.onGoForward,
                label: _('Go Forward'),
                disabled: !view?.history.canGoForward
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/reader/components/footerbar/DesktopFooterBar.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            progressValid && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                title: _('Reading Progress'),
                "aria-label": `${_('Reading Progress')}: ${Math.round(progressFraction * 100)}%`,
                className: "mx-2 text-center text-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                    "aria-hidden": "true",
                    children: progressInfo
                }, void 0, false, {
                    fileName: "[project]/apps/readest-app/src/app/reader/components/footerbar/DesktopFooterBar.tsx",
                    lineNumber: 115,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/reader/components/footerbar/DesktopFooterBar.tsx",
                lineNumber: 110,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                ref: rangeInputRef,
                type: "range",
                className: "text-base-content mx-2 min-w-0 flex-1",
                min: 0,
                max: 100,
                "aria-label": _('Jump to Location'),
                value: progressValue,
                onChange: (e)=>handleProgressChange(parseInt(e.target.value, 10))
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/reader/components/footerbar/DesktopFooterBar.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$Button$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["FaHeadphones"], {
                    className: viewState?.ttsEnabled ? 'text-blue-500' : ''
                }, void 0, false, {
                    fileName: "[project]/apps/readest-app/src/app/reader/components/footerbar/DesktopFooterBar.tsx",
                    lineNumber: 129,
                    columnNumber: 15
                }, void 0),
                onClick: onSpeakText,
                label: _('Speak')
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/reader/components/footerbar/DesktopFooterBar.tsx",
                lineNumber: 128,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$Button$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                icon: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$footerbar$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getNavigationIcon"])(viewSettings?.rtl, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["RiArrowRightSLine"], {}, void 0, false, {
                    fileName: "[project]/apps/readest-app/src/app/reader/components/footerbar/DesktopFooterBar.tsx",
                    lineNumber: 134,
                    columnNumber: 52
                }, void 0), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["RiArrowLeftSLine"], {}, void 0, false, {
                    fileName: "[project]/apps/readest-app/src/app/reader/components/footerbar/DesktopFooterBar.tsx",
                    lineNumber: 134,
                    columnNumber: 75
                }, void 0)),
                onClick: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$footerbar$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getNavigationHandler"])(viewSettings?.rtl, navigationHandlers.onNextPage, navigationHandlers.onPrevPage),
                label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$footerbar$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getNavigationLabel"])(viewSettings?.rtl, _('Next Page'), _('Previous Page'))
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/reader/components/footerbar/DesktopFooterBar.tsx",
                lineNumber: 133,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$Button$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                icon: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$footerbar$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getNavigationIcon"])(viewSettings?.rtl, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["RiArrowRightDoubleLine"], {}, void 0, false, {
                    fileName: "[project]/apps/readest-app/src/app/reader/components/footerbar/DesktopFooterBar.tsx",
                    lineNumber: 145,
                    columnNumber: 11
                }, void 0), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["RiArrowLeftDoubleLine"], {}, void 0, false, {
                    fileName: "[project]/apps/readest-app/src/app/reader/components/footerbar/DesktopFooterBar.tsx",
                    lineNumber: 146,
                    columnNumber: 11
                }, void 0)),
                onClick: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$footerbar$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getNavigationHandler"])(viewSettings?.rtl, navigationHandlers.onNextSection, navigationHandlers.onPrevSection),
                label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$footerbar$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getNavigationLabel"])(viewSettings?.rtl, _('Next Section'), _('Previous Section'))
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/reader/components/footerbar/DesktopFooterBar.tsx",
                lineNumber: 142,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/readest-app/src/app/reader/components/footerbar/DesktopFooterBar.tsx",
        lineNumber: 71,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = DesktopFooterBar;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/readest-app/src/app/reader/components/footerbar/FooterBar.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/clsx [external] (clsx, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/context/EnvContext.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/readerStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$sidebarStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/sidebarStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/bookDataStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/hooks/useTranslation.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$deviceStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/deviceStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/event.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$debounce$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/debounce.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$hooks$2f$usePagination$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/app/reader/hooks/usePagination.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$footerbar$2f$MobileFooterBar$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/app/reader/components/footerbar/MobileFooterBar.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$footerbar$2f$DesktopFooterBar$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/app/reader/components/footerbar/DesktopFooterBar.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$tts$2f$TTSControl$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/app/reader/components/tts/TTSControl.tsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$sidebarStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$deviceStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$hooks$2f$usePagination$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$footerbar$2f$MobileFooterBar$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$footerbar$2f$DesktopFooterBar$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$tts$2f$TTSControl$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$sidebarStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$deviceStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$hooks$2f$usePagination$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$footerbar$2f$MobileFooterBar$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$footerbar$2f$DesktopFooterBar$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$tts$2f$TTSControl$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
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
const FooterBar = ({ bookKey, bookFormat, section, pageinfo, isHoveredAnim, gridInsets })=>{
    const _ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useTranslation"])();
    const { appService } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["useEnv"])();
    const { getConfig, setConfig, getBookData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useBookDataStore"])();
    const { hoveredBookKey, setHoveredBookKey } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useReaderStore"])();
    const { getView, getViewState, getProgress, getViewSettings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useReaderStore"])();
    const { isSideBarVisible, setSideBarVisible } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$sidebarStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useSidebarStore"])();
    const { acquireBackKeyInterception, releaseBackKeyInterception } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$deviceStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useDeviceControlStore"])();
    const view = getView(bookKey);
    const config = getConfig(bookKey);
    const bookData = getBookData(bookKey);
    const viewState = getViewState(bookKey);
    const progress = getProgress(bookKey);
    const viewSettings = getViewSettings(bookKey);
    const [userSelectedTab, setUserSelectedTab] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('');
    const actionTab = hoveredBookKey === bookKey ? userSelectedTab : '';
    const isVisible = hoveredBookKey === bookKey;
    const docs = view?.renderer.getContents() ?? [];
    const pointerInDoc = docs.some(({ doc })=>doc?.body?.style.cursor === 'pointer');
    const progressInfo = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>bookFormat === 'PDF' ? section : pageinfo, [
        bookFormat,
        section,
        pageinfo
    ]);
    const progressValid = !!progressInfo && progressInfo.total > 0 && progressInfo.current >= 0;
    const progressFraction = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>{
        if (progressValid && progressInfo.total > 0 && progressInfo.current >= 0) {
            return (progressInfo.current + 1) / progressInfo.total;
        }
        return 0;
    }, [
        progressValid,
        progressInfo
    ]);
    const handleProgressChange = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$debounce$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["debounce"])((value)=>{
            view?.goToFraction(value / 100.0);
        }, 100), [
        view
    ]);
    const handleGoPrevPage = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$hooks$2f$usePagination$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["viewPagination"])(view, viewSettings, 'left', 'page');
    }, [
        view,
        viewSettings
    ]);
    const handleGoNextPage = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$hooks$2f$usePagination$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["viewPagination"])(view, viewSettings, 'right', 'page');
    }, [
        view,
        viewSettings
    ]);
    const handleGoPrevSection = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(()=>{
        view?.renderer.prevSection?.();
    }, [
        view
    ]);
    const handleGoNextSection = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(()=>{
        view?.renderer.nextSection?.();
    }, [
        view
    ]);
    const handleGoBack = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(()=>{
        view?.history.back();
    }, [
        view
    ]);
    const handleGoForward = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(()=>{
        view?.history.forward();
    }, [
        view
    ]);
    const handleSpeakText = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(async ()=>{
        if (!view || !progress || !viewState) return;
        const eventType = viewState.ttsEnabled ? 'tts-stop' : 'tts-speak';
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["eventDispatcher"].dispatch(eventType, {
            bookKey
        });
    }, [
        view,
        progress,
        viewState,
        bookKey
    ]);
    const handleSetActionTab = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])((tab)=>{
        setUserSelectedTab((prevTab)=>prevTab === tab ? '' : tab);
        if (tab === 'tts') {
            if (viewState?.ttsEnabled) {
                setHoveredBookKey('');
            }
            handleSpeakText();
        } else if (tab === 'toc') {
            setHoveredBookKey('');
            if (config?.viewSettings) {
                setConfig(bookKey, {
                    viewSettings: {
                        ...config.viewSettings,
                        sideBarTab: 'toc'
                    }
                });
            }
            setSideBarVisible(true);
        } else if (tab === 'note') {
            setHoveredBookKey('');
            setSideBarVisible(true);
            if (config?.viewSettings) {
                setConfig(bookKey, {
                    viewSettings: {
                        ...config.viewSettings,
                        sideBarTab: 'annotations'
                    }
                });
            }
        }
    }, [
        config,
        bookKey,
        viewState?.ttsEnabled,
        setConfig,
        setSideBarVisible,
        setHoveredBookKey,
        handleSpeakText
    ]);
    const navigationHandlers = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>({
            onPrevPage: handleGoPrevPage,
            onNextPage: handleGoNextPage,
            onPrevSection: handleGoPrevSection,
            onNextSection: handleGoNextSection,
            onGoBack: handleGoBack,
            onGoForward: handleGoForward,
            onProgressChange: handleProgressChange
        }), [
        handleGoPrevPage,
        handleGoNextPage,
        handleGoPrevSection,
        handleGoNextSection,
        handleGoBack,
        handleGoForward,
        handleProgressChange
    ]);
    const handleKeyDown = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])((event)=>{
        if (event instanceof CustomEvent) {
            if (event.detail.keyName === 'Back') {
                setHoveredBookKey('');
                return true;
            }
        } else {
            if (event.key === 'Escape') {
                setHoveredBookKey('');
            }
            event.stopPropagation();
        }
        return false;
    }, [
        setHoveredBookKey
    ]);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (!appService?.isAndroidApp) return;
        if (hoveredBookKey) {
            acquireBackKeyInterception();
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["eventDispatcher"].onSync('native-key-down', handleKeyDown);
        }
        return ()=>{
            if (hoveredBookKey) {
                releaseBackKeyInterception();
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["eventDispatcher"].offSync('native-key-down', handleKeyDown);
            }
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        hoveredBookKey
    ]);
    const commonProps = {
        bookKey,
        gridInsets,
        actionTab,
        progressValid,
        progressFraction,
        navigationHandlers,
        onSetActionTab: handleSetActionTab,
        onSpeakText: handleSpeakText
    };
    const needHorizontalScroll = viewSettings?.vertical && viewSettings?.scrolled || bookData?.isFixedLayout && viewSettings?.zoomLevel && viewSettings.zoomLevel > 100;
    const containerClasses = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__["default"])('footer-bar shadow-xs bottom-0 z-10 flex w-full flex-col', 'sm:h-[52px] sm:justify-center', 'sm:bg-base-100 border-base-300/50 border-t sm:border-none', 'transition-[opacity,transform] duration-300', window.innerWidth < 640 ? 'fixed' : 'absolute', appService?.hasRoundedWindow && 'rounded-window-bottom-right', !isSideBarVisible && appService?.hasRoundedWindow && 'rounded-window-bottom-left', isHoveredAnim && 'hover-bar-anim', needHorizontalScroll && 'sm:!bottom-3 sm:!h-10 sm:justify-end', isVisible ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none translate-y-full opacity-0 sm:translate-y-0');
    const isMobile = appService?.isMobile || window.innerWidth < 640;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                role: "none",
                className: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__["default"])('absolute bottom-0 left-0 z-10 flex h-[52px] w-full', needHorizontalScroll && 'sm:!bottom-3 sm:!h-7', isMobile || pointerInDoc ? 'pointer-events-none' : ''),
                onMouseEnter: ()=>!isMobile && setHoveredBookKey(bookKey),
                onTouchStart: ()=>!isMobile && setHoveredBookKey(bookKey)
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/reader/components/footerbar/FooterBar.tsx",
                lineNumber: 227,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                role: "group",
                "aria-label": _('Footer Bar'),
                className: containerClasses,
                dir: viewSettings?.rtl ? 'rtl' : 'ltr',
                onFocus: ()=>!appService?.isMobile && setHoveredBookKey(bookKey),
                onMouseLeave: ()=>window.innerWidth >= 640 && setHoveredBookKey(''),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$footerbar$2f$MobileFooterBar$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        ...commonProps
                    }, void 0, false, {
                        fileName: "[project]/apps/readest-app/src/app/reader/components/footerbar/FooterBar.tsx",
                        lineNumber: 247,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$footerbar$2f$DesktopFooterBar$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        ...commonProps
                    }, void 0, false, {
                        fileName: "[project]/apps/readest-app/src/app/reader/components/footerbar/FooterBar.tsx",
                        lineNumber: 248,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/readest-app/src/app/reader/components/footerbar/FooterBar.tsx",
                lineNumber: 239,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            isVisible && needHorizontalScroll && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "bg-base-100 pointer-events-none absolute bottom-0 left-0 hidden h-3 w-full sm:block"
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/reader/components/footerbar/FooterBar.tsx",
                lineNumber: 251,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$tts$2f$TTSControl$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                bookKey: bookKey,
                gridInsets: gridInsets
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/reader/components/footerbar/FooterBar.tsx",
                lineNumber: 254,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = FooterBar;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=apps_readest-app_src_app_reader_components_footerbar_591bf4ae._.js.map