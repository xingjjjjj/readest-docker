(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/readest-app/src/app/reader/components/tts/TTSPanel.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react@19.2.0/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react@19.2.0/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-icons@5.4.0_react@19.2.0/node_modules/react-icons/md/index.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$tb$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-icons@5.4.0_react@19.2.0/node_modules/react-icons/tb/index.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-icons@5.4.0_react@19.2.0/node_modules/react-icons/ri/index.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/context/EnvContext.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/readerStore.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/hooks/useTranslation.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/settingsStore.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useResponsiveSize$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/hooks/useResponsiveSize.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$lang$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/lang.ts [client] (ecmascript)");
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
const getTTSTimeoutOptions = (_)=>{
    return [
        {
            label: _('No Timeout'),
            value: 0
        },
        {
            label: _('{{value}} minute', {
                value: 1
            }),
            value: 60
        },
        {
            label: _('{{value}} minutes', {
                value: 3
            }),
            value: 180
        },
        {
            label: _('{{value}} minutes', {
                value: 5
            }),
            value: 300
        },
        {
            label: _('{{value}} minutes', {
                value: 10
            }),
            value: 600
        },
        {
            label: _('{{value}} minutes', {
                value: 20
            }),
            value: 1200
        },
        {
            label: _('{{value}} minutes', {
                value: 30
            }),
            value: 1800
        },
        {
            label: _('{{value}} minutes', {
                value: 45
            }),
            value: 2700
        },
        {
            label: _('{{value}} hour', {
                value: 1
            }),
            value: 3600
        },
        {
            label: _('{{value}} hours', {
                value: 2
            }),
            value: 7200
        },
        {
            label: _('{{value}} hours', {
                value: 3
            }),
            value: 10800
        },
        {
            label: _('{{value}} hours', {
                value: 4
            }),
            value: 14400
        },
        {
            label: _('{{value}} hours', {
                value: 6
            }),
            value: 21600
        },
        {
            label: _('{{value}} hours', {
                value: 8
            }),
            value: 28800
        }
    ];
};
const getCountdownTime = (timeout)=>{
    const now = Date.now();
    if (timeout > now) {
        const remainingTime = Math.floor((timeout - now) / 1000);
        const minutes = Math.floor(remainingTime / 3600) * 60 + Math.floor(remainingTime % 3600 / 60);
        const seconds = remainingTime % 60;
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }
    return '';
};
const TTSPanel = ({ bookKey, ttsLang, isPlaying, timeoutOption, timeoutTimestamp, onTogglePlay, onBackward, onForward, onSetRate, onGetVoices, onSetVoice, onGetVoiceId, onSelectTimeout, onToogleTTSBar })=>{
    _s();
    const _ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const { envConfig } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["useEnv"])();
    const { getViewSettings, setViewSettings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useReaderStore"])();
    const { settings, setSettings, saveSettings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useSettingsStore"])();
    const viewSettings = getViewSettings(bookKey);
    const [voiceGroups, setVoiceGroups] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [rate, setRate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(viewSettings?.ttsRate ?? 1.0);
    const [selectedVoice, setSelectedVoice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(viewSettings?.ttsVoice ?? '');
    const [timeoutCountdown, setTimeoutCountdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({
        "TTSPanel.useState": ()=>{
            return getCountdownTime(timeoutTimestamp);
        }
    }["TTSPanel.useState"]);
    const defaultIconSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useResponsiveSize$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useDefaultIconSize"])();
    const iconSize32 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useResponsiveSize$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useResponsiveSize"])(32);
    const iconSize48 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useResponsiveSize$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useResponsiveSize"])(48);
    const handleSetRate = (e)=>{
        let newRate = parseFloat(e.target.value);
        newRate = Math.max(0.2, Math.min(3.0, newRate));
        setRate(newRate);
        onSetRate(newRate);
        const viewSettings = getViewSettings(bookKey);
        viewSettings.ttsRate = newRate;
        settings.globalViewSettings.ttsRate = newRate;
        setViewSettings(bookKey, viewSettings);
        setSettings(settings);
        saveSettings(envConfig, settings);
    };
    const handleSelectVoice = (voice, lang)=>{
        onSetVoice(voice, lang);
        setSelectedVoice(voice);
        const viewSettings = getViewSettings(bookKey);
        viewSettings.ttsVoice = voice;
        setViewSettings(bookKey, viewSettings);
    };
    const updateTimeout = (timeout)=>{
        const now = Date.now();
        if (timeout > 0 && timeout < now) {
            onSelectTimeout(bookKey, 0);
            setTimeoutCountdown('');
        } else if (timeout > 0) {
            setTimeoutCountdown(getCountdownTime(timeout));
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TTSPanel.useEffect": ()=>{
            setTimeout({
                "TTSPanel.useEffect": ()=>{
                    updateTimeout(timeoutTimestamp);
                }
            }["TTSPanel.useEffect"], 1000);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["TTSPanel.useEffect"], [
        timeoutTimestamp,
        timeoutCountdown
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TTSPanel.useEffect": ()=>{
            const voiceId = onGetVoiceId();
            setSelectedVoice(voiceId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["TTSPanel.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TTSPanel.useEffect": ()=>{
            const fetchVoices = {
                "TTSPanel.useEffect.fetchVoices": async ()=>{
                    const voiceGroups = await onGetVoices(ttsLang);
                    const voicesCount = voiceGroups.reduce({
                        "TTSPanel.useEffect.fetchVoices.voicesCount": (acc, group)=>acc + group.voices.length
                    }["TTSPanel.useEffect.fetchVoices.voicesCount"], 0);
                    if (!voiceGroups || voicesCount === 0) {
                        console.warn('No voices found for TTSPanel');
                        setVoiceGroups([
                            {
                                id: 'no-voices',
                                name: _('Voices for {{lang}}', {
                                    lang: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$lang$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getLanguageName"])(ttsLang)
                                }),
                                voices: []
                            }
                        ]);
                    } else {
                        setVoiceGroups(voiceGroups);
                    }
                }
            }["TTSPanel.useEffect.fetchVoices"];
            fetchVoices();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["TTSPanel.useEffect"], [
        ttsLang
    ]);
    const timeoutOptions = getTTSTimeoutOptions(_);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex w-full flex-col items-center justify-center gap-2 rounded-2xl px-4 pt-4 sm:gap-1",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex w-full flex-col items-center gap-0.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        className: "range",
                        type: "range",
                        min: 0.0,
                        max: 3.0,
                        step: "0.1",
                        value: rate,
                        onChange: handleSetRate
                    }, void 0, false, {
                        fileName: "[project]/apps/readest-app/src/app/reader/components/tts/TTSPanel.tsx",
                        lineNumber: 210,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid w-full grid-cols-7 text-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-center",
                                children: "|"
                            }, void 0, false, {
                                fileName: "[project]/apps/readest-app/src/app/reader/components/tts/TTSPanel.tsx",
                                lineNumber: 220,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-center",
                                children: "|"
                            }, void 0, false, {
                                fileName: "[project]/apps/readest-app/src/app/reader/components/tts/TTSPanel.tsx",
                                lineNumber: 221,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-center",
                                children: "|"
                            }, void 0, false, {
                                fileName: "[project]/apps/readest-app/src/app/reader/components/tts/TTSPanel.tsx",
                                lineNumber: 222,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-center",
                                children: "|"
                            }, void 0, false, {
                                fileName: "[project]/apps/readest-app/src/app/reader/components/tts/TTSPanel.tsx",
                                lineNumber: 223,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-center",
                                children: "|"
                            }, void 0, false, {
                                fileName: "[project]/apps/readest-app/src/app/reader/components/tts/TTSPanel.tsx",
                                lineNumber: 224,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-center",
                                children: "|"
                            }, void 0, false, {
                                fileName: "[project]/apps/readest-app/src/app/reader/components/tts/TTSPanel.tsx",
                                lineNumber: 225,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-center",
                                children: "|"
                            }, void 0, false, {
                                fileName: "[project]/apps/readest-app/src/app/reader/components/tts/TTSPanel.tsx",
                                lineNumber: 226,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/readest-app/src/app/reader/components/tts/TTSPanel.tsx",
                        lineNumber: 219,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid w-full grid-cols-7 text-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-center",
                                children: _('Slow')
                            }, void 0, false, {
                                fileName: "[project]/apps/readest-app/src/app/reader/components/tts/TTSPanel.tsx",
                                lineNumber: 229,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-center"
                            }, void 0, false, {
                                fileName: "[project]/apps/readest-app/src/app/reader/components/tts/TTSPanel.tsx",
                                lineNumber: 230,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-center",
                                children: "1.0"
                            }, void 0, false, {
                                fileName: "[project]/apps/readest-app/src/app/reader/components/tts/TTSPanel.tsx",
                                lineNumber: 231,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-center",
                                children: "1.5"
                            }, void 0, false, {
                                fileName: "[project]/apps/readest-app/src/app/reader/components/tts/TTSPanel.tsx",
                                lineNumber: 232,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-center",
                                children: "2.0"
                            }, void 0, false, {
                                fileName: "[project]/apps/readest-app/src/app/reader/components/tts/TTSPanel.tsx",
                                lineNumber: 233,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-center"
                            }, void 0, false, {
                                fileName: "[project]/apps/readest-app/src/app/reader/components/tts/TTSPanel.tsx",
                                lineNumber: 234,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-center",
                                children: _('Fast')
                            }, void 0, false, {
                                fileName: "[project]/apps/readest-app/src/app/reader/components/tts/TTSPanel.tsx",
                                lineNumber: 235,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/readest-app/src/app/reader/components/tts/TTSPanel.tsx",
                        lineNumber: 228,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/readest-app/src/app/reader/components/tts/TTSPanel.tsx",
                lineNumber: 209,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between space-x-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onBackward(),
                        className: "rounded-full p-1 transition-transform duration-200 hover:scale-105",
                        title: _('Previous Paragraph'),
                        "aria-label": _('Previous Paragraph'),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["MdFastRewind"], {
                            size: iconSize32
                        }, void 0, false, {
                            fileName: "[project]/apps/readest-app/src/app/reader/components/tts/TTSPanel.tsx",
                            lineNumber: 245,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/apps/readest-app/src/app/reader/components/tts/TTSPanel.tsx",
                        lineNumber: 239,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onTogglePlay,
                        className: "rounded-full p-1 transition-transform duration-200 hover:scale-105",
                        title: isPlaying ? _('Pause') : _('Play'),
                        "aria-label": isPlaying ? _('Pause') : _('Play'),
                        children: isPlaying ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["MdPauseCircle"], {
                            size: iconSize48,
                            className: "fill-primary"
                        }, void 0, false, {
                            fileName: "[project]/apps/readest-app/src/app/reader/components/tts/TTSPanel.tsx",
                            lineNumber: 254,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["MdPlayCircle"], {
                            size: iconSize48,
                            className: "fill-primary"
                        }, void 0, false, {
                            fileName: "[project]/apps/readest-app/src/app/reader/components/tts/TTSPanel.tsx",
                            lineNumber: 256,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/apps/readest-app/src/app/reader/components/tts/TTSPanel.tsx",
                        lineNumber: 247,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onForward(),
                        className: "rounded-full p-1 transition-transform duration-200 hover:scale-105",
                        title: _('Next Paragraph'),
                        "aria-label": _('Next Paragraph'),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["MdFastForward"], {
                            size: iconSize32
                        }, void 0, false, {
                            fileName: "[project]/apps/readest-app/src/app/reader/components/tts/TTSPanel.tsx",
                            lineNumber: 265,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/apps/readest-app/src/app/reader/components/tts/TTSPanel.tsx",
                        lineNumber: 259,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "dropdown dropdown-top",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                tabIndex: 0,
                                className: "flex flex-col items-center justify-center rounded-full p-1 transition-transform duration-200 hover:scale-105",
                                onClick: (e)=>e.currentTarget.focus(),
                                title: _('Set Timeout'),
                                "aria-label": _('Set Timeout'),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["MdAlarm"], {
                                        size: iconSize32
                                    }, void 0, false, {
                                        fileName: "[project]/apps/readest-app/src/app/reader/components/tts/TTSPanel.tsx",
                                        lineNumber: 275,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    timeoutCountdown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"])('absolute bottom-0 left-1/2 w-12 translate-x-[-50%] translate-y-[80%] px-1', 'bg-primary/80 text-base-100 rounded-full text-center text-xs'),
                                        children: timeoutCountdown
                                    }, void 0, false, {
                                        fileName: "[project]/apps/readest-app/src/app/reader/components/tts/TTSPanel.tsx",
                                        lineNumber: 277,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/readest-app/src/app/reader/components/tts/TTSPanel.tsx",
                                lineNumber: 268,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
                                tabIndex: 0,
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"])('dropdown-content bgcolor-base-200 no-triangle menu menu-vertical rounded-box absolute right-0 z-[1] shadow', 'mt-4 inline max-h-96 w-[200px] overflow-y-scroll'),
                                children: timeoutOptions.map((option, index)=>// eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        onClick: ()=>onSelectTimeout(bookKey, option.value),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center px-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        width: `${defaultIconSize}px`,
                                                        height: `${defaultIconSize}px`
                                                    },
                                                    children: timeoutOption === option.value && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["MdCheck"], {
                                                        className: "text-base-content"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/readest-app/src/app/reader/components/tts/TTSPanel.tsx",
                                                        lineNumber: 308,
                                                        columnNumber: 56
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/readest-app/src/app/reader/components/tts/TTSPanel.tsx",
                                                    lineNumber: 302,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"])('text-base sm:text-sm'),
                                                    children: option.label
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/readest-app/src/app/reader/components/tts/TTSPanel.tsx",
                                                    lineNumber: 310,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/readest-app/src/app/reader/components/tts/TTSPanel.tsx",
                                            lineNumber: 301,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, `${index}-${option.value}`, false, {
                                        fileName: "[project]/apps/readest-app/src/app/reader/components/tts/TTSPanel.tsx",
                                        lineNumber: 297,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/apps/readest-app/src/app/reader/components/tts/TTSPanel.tsx",
                                lineNumber: 287,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/readest-app/src/app/reader/components/tts/TTSPanel.tsx",
                        lineNumber: 267,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "dropdown dropdown-top",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                tabIndex: 0,
                                className: "rounded-full p-1 transition-transform duration-200 hover:scale-105",
                                onClick: (e)=>e.currentTarget.focus(),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["RiVoiceAiFill"], {
                                    size: iconSize32
                                }, void 0, false, {
                                    fileName: "[project]/apps/readest-app/src/app/reader/components/tts/TTSPanel.tsx",
                                    lineNumber: 323,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/apps/readest-app/src/app/reader/components/tts/TTSPanel.tsx",
                                lineNumber: 318,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
                                tabIndex: 0,
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"])('dropdown-content bgcolor-base-200 no-triangle menu menu-vertical rounded-box absolute right-0 z-[1] shadow', 'mt-4 inline max-h-96 w-[250px] overflow-y-scroll'),
                                title: _('Select Voice'),
                                "aria-label": _('Select Voice'),
                                children: voiceGroups.map((voiceGroup, index)=>{
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 px-2 py-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            width: `${defaultIconSize}px`,
                                                            height: `${defaultIconSize}px`
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/readest-app/src/app/reader/components/tts/TTSPanel.tsx",
                                                        lineNumber: 339,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-gray-400 sm:text-xs",
                                                        children: _('{{engine}}: {{count}} voices', {
                                                            engine: _(voiceGroup.name),
                                                            count: voiceGroup.voices.length
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/readest-app/src/app/reader/components/tts/TTSPanel.tsx",
                                                        lineNumber: 342,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/readest-app/src/app/reader/components/tts/TTSPanel.tsx",
                                                lineNumber: 338,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            voiceGroup.voices.map((voice, voiceIndex)=>// eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    onClick: ()=>!voice.disabled && handleSelectVoice(voice.id, voice.lang),
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center px-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    width: `${defaultIconSize}px`,
                                                                    height: `${defaultIconSize}px`
                                                                },
                                                                children: selectedVoice === voice.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["MdCheck"], {
                                                                    className: "text-base-content"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/readest-app/src/app/reader/components/tts/TTSPanel.tsx",
                                                                    lineNumber: 362,
                                                                    columnNumber: 58
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/readest-app/src/app/reader/components/tts/TTSPanel.tsx",
                                                                lineNumber: 356,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"])('max-w-[180px] overflow-hidden text-ellipsis text-base sm:text-sm', voice.disabled && 'text-gray-400'),
                                                                children: _(voice.name)
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/readest-app/src/app/reader/components/tts/TTSPanel.tsx",
                                                                lineNumber: 364,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/readest-app/src/app/reader/components/tts/TTSPanel.tsx",
                                                        lineNumber: 355,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, `${index}-${voiceGroup.id}-${voiceIndex}`, false, {
                                                    fileName: "[project]/apps/readest-app/src/app/reader/components/tts/TTSPanel.tsx",
                                                    lineNumber: 351,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        ]
                                    }, voiceGroup.id, true, {
                                        fileName: "[project]/apps/readest-app/src/app/reader/components/tts/TTSPanel.tsx",
                                        lineNumber: 337,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0));
                                })
                            }, void 0, false, {
                                fileName: "[project]/apps/readest-app/src/app/reader/components/tts/TTSPanel.tsx",
                                lineNumber: 325,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/readest-app/src/app/reader/components/tts/TTSPanel.tsx",
                        lineNumber: 317,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/readest-app/src/app/reader/components/tts/TTSPanel.tsx",
                lineNumber: 238,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-4 items-center justify-center opacity-60 transition-transform duration-200 hover:scale-105 hover:opacity-100",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onToogleTTSBar,
                    className: "p-0",
                    title: _('Toggle Sticky Bottom TTS Bar'),
                    "aria-label": _('Toggle Sticky Bottom TTS Bar'),
                    children: viewSettings?.showTTSBar ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$tb$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["TbChevronCompactUp"], {
                        size: iconSize48,
                        style: {
                            transform: 'scaleY(0.85)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/apps/readest-app/src/app/reader/components/tts/TTSPanel.tsx",
                        lineNumber: 389,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$tb$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["TbChevronCompactDown"], {
                        size: iconSize48,
                        style: {
                            transform: 'scaleY(0.85)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/apps/readest-app/src/app/reader/components/tts/TTSPanel.tsx",
                        lineNumber: 391,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/apps/readest-app/src/app/reader/components/tts/TTSPanel.tsx",
                    lineNumber: 382,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/reader/components/tts/TTSPanel.tsx",
                lineNumber: 381,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/readest-app/src/app/reader/components/tts/TTSPanel.tsx",
        lineNumber: 208,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(TTSPanel, "c8P7n1z1gIo8nDCO/Q9mhMFvFOo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["useEnv"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useReaderStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useSettingsStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useResponsiveSize$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useDefaultIconSize"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useResponsiveSize$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useResponsiveSize"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useResponsiveSize$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useResponsiveSize"]
    ];
});
_c = TTSPanel;
const __TURBOPACK__default__export__ = TTSPanel;
var _c;
__turbopack_context__.k.register(_c, "TTSPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/readest-app/src/app/reader/components/tts/TTSIcon.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react@19.2.0/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [client] (ecmascript)");
;
;
const TTSIcon = ({ isPlaying, ttsInited, onClick })=>{
    const bars = [
        1,
        2,
        3,
        4
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"])('relative h-full w-full rounded-full', ttsInited ? 'cursor-pointer' : 'cursor-not-allowed'),
        style: {
            maskImage: 'radial-gradient(circle, white 100%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(circle, white 100%, transparent 100%)'
        },
        onClick: onClick,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 overflow-hidden rounded-full bg-gradient-to-r from-blue-500 via-emerald-500 to-violet-500",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute -inset-full rounded-full bg-gradient-to-r from-blue-500 via-emerald-500 to-violet-500",
                    style: {
                        animation: isPlaying && ttsInited ? 'moveGradient 2s alternate infinite' : 'none'
                    }
                }, void 0, false, {
                    fileName: "[project]/apps/readest-app/src/app/reader/components/tts/TTSIcon.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/reader/components/tts/TTSIcon.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex items-center justify-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                        children: `
          @keyframes moveGradient {
            0% { transform: translate(0, 0); }
            100% { transform: translate(25%, 25%); }
          }
          @keyframes bounce {
            0%, 100% { transform: scaleY(1); }
            50% { transform: scaleY(0.6); }
          }
        `
                    }, void 0, false, {
                        fileName: "[project]/apps/readest-app/src/app/reader/components/tts/TTSIcon.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-end space-x-1",
                        children: bars.map((bar)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-1 rounded-t bg-white",
                                style: {
                                    height: '16px',
                                    animationName: isPlaying ? 'bounce' : 'none',
                                    animationDuration: isPlaying ? `${1 + bar * 0.1}s` : '0s',
                                    animationTimingFunction: 'ease-in-out',
                                    animationIterationCount: 'infinite',
                                    animationDelay: `${bar * 0.1}s`
                                }
                            }, bar, false, {
                                fileName: "[project]/apps/readest-app/src/app/reader/components/tts/TTSIcon.tsx",
                                lineNumber: 47,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/apps/readest-app/src/app/reader/components/tts/TTSIcon.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/readest-app/src/app/reader/components/tts/TTSIcon.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/readest-app/src/app/reader/components/tts/TTSIcon.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = TTSIcon;
const __TURBOPACK__default__export__ = TTSIcon;
var _c;
__turbopack_context__.k.register(_c, "TTSIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/readest-app/src/app/reader/components/tts/TTSBar.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react@19.2.0/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-icons@5.4.0_react@19.2.0/node_modules/react-icons/md/index.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/context/EnvContext.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/readerStore.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useResponsiveSize$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/hooks/useResponsiveSize.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/hooks/useTranslation.ts [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
const TTSBar = ({ bookKey, isPlaying, onTogglePlay, onBackward, onForward, gridInsets })=>{
    _s();
    const _ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const { appService } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["useEnv"])();
    const { hoveredBookKey, setHoveredBookKey } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useReaderStore"])();
    const iconSize32 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useResponsiveSize$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useResponsiveSize"])(30);
    const iconSize48 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useResponsiveSize$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useResponsiveSize"])(36);
    const isVisible = hoveredBookKey !== bookKey;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"])('bg-base-100 absolute bottom-0 z-40', 'inset-x-0 mx-auto flex w-full justify-center sm:w-fit', 'transition-opacity duration-300', isVisible ? `pointer-events-auto opacity-100` : `pointer-events-none opacity-0`),
        style: {
            paddingBottom: appService?.hasSafeAreaInset ? `${gridInsets.bottom * 0.33}px` : 0
        },
        onMouseEnter: ()=>!appService?.isMobile && setHoveredBookKey(''),
        onTouchStart: ()=>!appService?.isMobile && setHoveredBookKey(''),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-base-content flex h-[52px] items-center space-x-2 px-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onBackward.bind(null, false),
                    className: "rounded-full p-1 transition-transform duration-200 hover:scale-105",
                    title: _('Previous Paragraph'),
                    "aria-label": _('Previous Paragraph'),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["MdFastRewind"], {
                        size: iconSize32
                    }, void 0, false, {
                        fileName: "[project]/apps/readest-app/src/app/reader/components/tts/TTSBar.tsx",
                        lineNumber: 61,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/apps/readest-app/src/app/reader/components/tts/TTSBar.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onBackward.bind(null, true),
                    className: "rounded-full p-1 transition-transform duration-200 hover:scale-105",
                    title: _('Previous Sentence'),
                    "aria-label": _('Previous Sentence'),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["MdSkipPrevious"], {
                        size: iconSize32
                    }, void 0, false, {
                        fileName: "[project]/apps/readest-app/src/app/reader/components/tts/TTSBar.tsx",
                        lineNumber: 69,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/apps/readest-app/src/app/reader/components/tts/TTSBar.tsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onTogglePlay,
                    className: "rounded-full p-1 transition-transform duration-200 hover:scale-105",
                    title: isPlaying ? _('Pause') : _('Play'),
                    "aria-label": isPlaying ? _('Pause') : _('Play'),
                    children: isPlaying ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["MdOutlinePause"], {
                        size: iconSize48
                    }, void 0, false, {
                        fileName: "[project]/apps/readest-app/src/app/reader/components/tts/TTSBar.tsx",
                        lineNumber: 77,
                        columnNumber: 24
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["MdPlayArrow"], {
                        size: iconSize48
                    }, void 0, false, {
                        fileName: "[project]/apps/readest-app/src/app/reader/components/tts/TTSBar.tsx",
                        lineNumber: 77,
                        columnNumber: 63
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/apps/readest-app/src/app/reader/components/tts/TTSBar.tsx",
                    lineNumber: 71,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onForward.bind(null, true),
                    className: "rounded-full p-1 transition-transform duration-200 hover:scale-105",
                    title: _('Next Sentence'),
                    "aria-label": _('Next Sentence'),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["MdSkipNext"], {
                        size: iconSize32
                    }, void 0, false, {
                        fileName: "[project]/apps/readest-app/src/app/reader/components/tts/TTSBar.tsx",
                        lineNumber: 85,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/apps/readest-app/src/app/reader/components/tts/TTSBar.tsx",
                    lineNumber: 79,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onForward.bind(null, false),
                    className: "rounded-full p-1 transition-transform duration-200 hover:scale-105",
                    title: _('Next Paragraph'),
                    "aria-label": _('Next Paragraph'),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["MdFastForward"], {
                        size: iconSize32
                    }, void 0, false, {
                        fileName: "[project]/apps/readest-app/src/app/reader/components/tts/TTSBar.tsx",
                        lineNumber: 93,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/apps/readest-app/src/app/reader/components/tts/TTSBar.tsx",
                    lineNumber: 87,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/apps/readest-app/src/app/reader/components/tts/TTSBar.tsx",
            lineNumber: 54,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/readest-app/src/app/reader/components/tts/TTSBar.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(TTSBar, "9i9hFMld92Jimq9+nRGTn7DcYkA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["useEnv"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useReaderStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useResponsiveSize$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useResponsiveSize"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useResponsiveSize$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useResponsiveSize"]
    ];
});
_c = TTSBar;
const __TURBOPACK__default__export__ = TTSBar;
var _c;
__turbopack_context__.k.register(_c, "TTSBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/readest-app/src/app/reader/components/tts/TTSControl.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react@19.2.0/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react@19.2.0/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/context/EnvContext.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/context/AuthContext.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$themeStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/themeStore.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/settingsStore.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/bookDataStore.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/readerStore.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$proofreadStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/proofreadStore.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$transformers$2f$proofread$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/transformers/proofread.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/hooks/useTranslation.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useResponsiveSize$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/hooks/useResponsiveSize.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$tts$2f$index$2e$ts__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/tts/index.ts [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$tts$2f$TTSController$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/tts/TTSController.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$tts$2f$TTSData$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/tts/TTSData.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$libs$2f$mediaSession$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/libs/mediaSession.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$sel$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/sel.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/event.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$ssml$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/ssml.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$throttle$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/throttle.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$Overlay$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/components/Overlay.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$image$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/image.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$bridge$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/bridge.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$cfi$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/cfi.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/misc.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$Popup$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/components/Popup.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$tts$2f$TTSPanel$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/app/reader/components/tts/TTSPanel.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$tts$2f$TTSIcon$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/app/reader/components/tts/TTSIcon.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$tts$2f$TTSBar$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/app/reader/components/tts/TTSBar.tsx [client] (ecmascript)");
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
const POPUP_WIDTH = 282;
const POPUP_HEIGHT = 160;
const POPUP_PADDING = 10;
const TTSControl = ({ bookKey, gridInsets })=>{
    _s();
    const _ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const { appService } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["useEnv"])();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const { safeAreaInsets, isDarkMode } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$themeStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useThemeStore"])();
    const { settings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useSettingsStore"])();
    const { getBookData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useBookDataStore"])();
    const { hoveredBookKey, getView, getProgress, getViewSettings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useReaderStore"])();
    const { setViewSettings, setTTSEnabled } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useReaderStore"])();
    const { getMergedRules } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$proofreadStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useProofreadStore"])();
    const viewSettings = getViewSettings(bookKey);
    const [ttsLang, setTtsLang] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])('en');
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isPaused, setIsPaused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showIndicator, setShowIndicator] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showPanel, setShowPanel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showTTSBar, setShowTTSBar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({
        "TTSControl.useState": ()=>!!viewSettings?.showTTSBar
    }["TTSControl.useState"]);
    const [panelPosition, setPanelPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])();
    const [trianglePosition, setTrianglePosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])();
    const [timeoutOption, setTimeoutOption] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [timeoutTimestamp, setTimeoutTimestamp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [timeoutFunc, setTimeoutFunc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const hoverTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [showIndicatorWithinTimeout, setShowIndicatorWithinTimeout] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const popupPadding = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useResponsiveSize$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useResponsiveSize"])(POPUP_PADDING);
    const maxWidth = window.innerWidth - 2 * popupPadding;
    const popupWidth = Math.min(maxWidth, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useResponsiveSize$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useResponsiveSize"])(POPUP_WIDTH));
    const popupHeight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useResponsiveSize$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useResponsiveSize"])(POPUP_HEIGHT);
    const iconRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const unblockerAudioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const ttsControllerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mediaSessionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [ttsController, setTtsController] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [ttsClientsInited, setTtsClientsInitialized] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // this enables WebAudio to play even when the mute toggle switch is ON
    const unblockAudio = ()=>{
        if (unblockerAudioRef.current) return;
        unblockerAudioRef.current = document.createElement('audio');
        unblockerAudioRef.current.setAttribute('x-webkit-airplay', 'deny');
        unblockerAudioRef.current.addEventListener('play', ()=>{
            if ('mediaSession' in navigator) {
                navigator.mediaSession.metadata = null;
            }
        });
        unblockerAudioRef.current.preload = 'auto';
        unblockerAudioRef.current.loop = true;
        unblockerAudioRef.current.src = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$tts$2f$TTSData$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["SILENCE_DATA"];
        unblockerAudioRef.current.play();
    };
    const releaseUnblockAudio = ()=>{
        if (!unblockerAudioRef.current) return;
        try {
            unblockerAudioRef.current.pause();
            unblockerAudioRef.current.currentTime = 0;
            unblockerAudioRef.current.removeAttribute('src');
            unblockerAudioRef.current.src = '';
            unblockerAudioRef.current.load();
            unblockerAudioRef.current = null;
            console.log('Unblock audio released');
        } catch (err) {
            console.warn('Error releasing unblock audio:', err);
        }
    };
    const initMediaSession = async ()=>{
        const mediaSession = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$libs$2f$mediaSession$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getMediaSession"])();
        if (!mediaSession) return;
        mediaSessionRef.current = mediaSession;
        if (mediaSession instanceof __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$libs$2f$mediaSession$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["TauriMediaSession"]) {
            const bookData = getBookData(bookKey);
            const progress = getProgress(bookKey);
            if (!bookData || !bookData.book) return;
            const { title, author, coverImageUrl } = bookData.book;
            const { sectionLabel } = progress || {};
            let artworkImage = '/icon.png';
            try {
                artworkImage = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$image$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["fetchImageAsBase64"])(coverImageUrl || '/icon.png');
            } catch  {
                artworkImage = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$image$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["fetchImageAsBase64"])('/icon.png');
            }
            await mediaSession.setActive({
                active: true,
                keepAppInForeground: settings.alwaysInForeground,
                notificationTitle: _('Read Aloud'),
                notificationText: _('Ready to read aloud'),
                foregroundServiceTitle: _('Read Aloud'),
                foregroundServiceText: _('Ready to read aloud')
            });
            mediaSession.updateMetadata({
                title: title,
                artist: sectionLabel || title,
                album: author,
                artwork: artworkImage
            });
        }
    };
    const deinitMediaSession = async ()=>{
        if (mediaSessionRef.current && mediaSessionRef.current instanceof __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$libs$2f$mediaSession$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["TauriMediaSession"]) {
            await mediaSessionRef.current.setActive({
                active: false,
                keepAppInForeground: settings.alwaysInForeground
            });
        }
        mediaSessionRef.current = null;
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TTSControl.useEffect": ()=>{
            return ({
                "TTSControl.useEffect": ()=>{
                    if (ttsControllerRef.current) {
                        ttsControllerRef.current.shutdown();
                        ttsControllerRef.current = null;
                    }
                }
            })["TTSControl.useEffect"];
        }
    }["TTSControl.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TTSControl.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["eventDispatcher"].on('tts-speak', handleTTSSpeak);
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["eventDispatcher"].on('tts-stop', handleTTSStop);
            return ({
                "TTSControl.useEffect": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["eventDispatcher"].off('tts-speak', handleTTSSpeak);
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["eventDispatcher"].off('tts-stop', handleTTSStop);
                }
            })["TTSControl.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["TTSControl.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TTSControl.useEffect": ()=>{
            if (!ttsController || !bookKey) return;
            const bookData = getBookData(bookKey);
            if (!bookData || !bookData.book) return;
            const { title, author, coverImageUrl } = bookData.book;
            const handleNeedAuth = {
                "TTSControl.useEffect.handleNeedAuth": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["eventDispatcher"].dispatch('toast', {
                        message: _('Please log in to use advanced TTS features'),
                        type: 'error',
                        timeout: 5000
                    });
                }
            }["TTSControl.useEffect.handleNeedAuth"];
            const handleSpeakMark = {
                "TTSControl.useEffect.handleSpeakMark": (e)=>{
                    const progress = getProgress(bookKey);
                    const { sectionLabel } = progress || {};
                    const mark = e.detail;
                    if (mediaSessionRef.current) {
                        const mediaSession = mediaSessionRef.current;
                        if (mediaSession instanceof __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$libs$2f$mediaSession$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["TauriMediaSession"]) {
                            mediaSession.updateMetadata({
                                title: mark?.text || '',
                                artist: sectionLabel || title,
                                album: author,
                                artwork: ''
                            });
                        } else {
                            mediaSession.metadata = new MediaMetadata({
                                title: mark?.text || '',
                                artist: sectionLabel || title,
                                album: author,
                                artwork: [
                                    {
                                        src: coverImageUrl || '/icon.png',
                                        sizes: '512x512',
                                        type: 'image/png'
                                    }
                                ]
                            });
                        }
                    }
                }
            }["TTSControl.useEffect.handleSpeakMark"];
            const handleHighlightMark = {
                "TTSControl.useEffect.handleHighlightMark": (e)=>{
                    const range = e.detail;
                    const view = getView(bookKey);
                    const progress = getProgress(bookKey);
                    const viewSettings = getViewSettings(bookKey);
                    if (!range || !view || !progress || !viewSettings) return;
                    const { location } = progress;
                    const { index } = view.resolveCFI(location);
                    const cfi = view?.getCFI(index, range);
                    if (cfi) {
                        viewSettings.ttsLocation = cfi || '';
                        setViewSettings(bookKey, viewSettings);
                    }
                    const docs = view.renderer.getContents();
                    if (docs.some({
                        "TTSControl.useEffect.handleHighlightMark": ({ doc })=>(doc.getSelection()?.toString().length ?? 0) > 0
                    }["TTSControl.useEffect.handleHighlightMark"])) {
                        return;
                    }
                    if (!view.renderer.scrolled) {
                        view.renderer.scrollToAnchor(range);
                    } else {
                        const rect = range.getBoundingClientRect();
                        const { start, size, viewSize, sideProp } = view.renderer;
                        const positionStart = rect[sideProp === 'height' ? 'y' : 'x'] + viewSettings.marginTopPx;
                        const positionEnd = rect[sideProp === 'height' ? 'height' : 'width'] + positionStart;
                        const offsetStart = view.book.dir === 'rtl' ? viewSize - positionStart : positionStart;
                        const offsetEnd = view.book.dir === 'rtl' ? viewSize - positionEnd : positionEnd;
                        const showHeader = viewSettings.showHeader;
                        const showFooter = viewSettings.showFooter;
                        const showBarsOnScroll = viewSettings.showBarsOnScroll;
                        const headerScrollOverlap = showHeader && showBarsOnScroll ? 44 : 0;
                        const footerScrollOverlap = showFooter && showBarsOnScroll ? 44 : 0;
                        const scrollingOverlap = viewSettings.scrollingOverlap;
                        const endInNextView = offsetEnd > start + size - footerScrollOverlap - scrollingOverlap;
                        const startInPrevView = offsetStart < start + headerScrollOverlap + scrollingOverlap;
                        if (endInNextView || startInPrevView) {
                            const scrollTo = offsetStart - headerScrollOverlap - scrollingOverlap;
                            view.renderer.scrollToAnchor(scrollTo / viewSize);
                        }
                    }
                }
            }["TTSControl.useEffect.handleHighlightMark"];
            ttsController.addEventListener('tts-need-auth', handleNeedAuth);
            ttsController.addEventListener('tts-speak-mark', handleSpeakMark);
            ttsController.addEventListener('tts-highlight-mark', handleHighlightMark);
            return ({
                "TTSControl.useEffect": ()=>{
                    ttsController.removeEventListener('tts-need-auth', handleNeedAuth);
                    ttsController.removeEventListener('tts-speak-mark', handleSpeakMark);
                    ttsController.removeEventListener('tts-highlight-mark', handleHighlightMark);
                }
            })["TTSControl.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["TTSControl.useEffect"], [
        ttsController,
        bookKey
    ]);
    const getTTSTargetLang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TTSControl.useCallback[getTTSTargetLang]": ()=>{
            const ttsReadAloudText = viewSettings?.ttsReadAloudText;
            if (viewSettings?.translationEnabled && ttsReadAloudText === 'translated') {
                return viewSettings?.translateTargetLang || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getLocale"])();
            } else if (viewSettings?.translationEnabled && ttsReadAloudText === 'source') {
                const bookData = getBookData(bookKey);
                return bookData?.book?.primaryLanguage || '';
            }
            return null;
        }
    }["TTSControl.useCallback[getTTSTargetLang]"], [
        bookKey,
        getBookData,
        viewSettings?.translationEnabled,
        viewSettings?.ttsReadAloudText,
        viewSettings?.translateTargetLang
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TTSControl.useEffect": ()=>{
            ttsControllerRef.current?.setTargetLang(getTTSTargetLang() || '');
        }
    }["TTSControl.useEffect"], [
        getTTSTargetLang
    ]);
    const transformCtx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TTSControl.useMemo[transformCtx]": ()=>({
                bookKey,
                viewSettings: getViewSettings(bookKey),
                userLocale: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getLocale"])(),
                content: '',
                transformers: [],
                reversePunctuationTransform: true
            })
    }["TTSControl.useMemo[transformCtx]"], // eslint-disable-next-line react-hooks/exhaustive-deps
    []);
    const preprocessSSMLForTTS = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TTSControl.useCallback[preprocessSSMLForTTS]": async (ssml)=>{
            const rules = getMergedRules(bookKey);
            const viewSettings = getViewSettings(bookKey);
            const ttsOnlyRules = rules.filter({
                "TTSControl.useCallback[preprocessSSMLForTTS].ttsOnlyRules": (rule)=>rule.enabled && rule.onlyForTTS && (rule.scope === 'book' || rule.scope === 'library')
            }["TTSControl.useCallback[preprocessSSMLForTTS].ttsOnlyRules"]);
            if (ttsOnlyRules.length === 0) return ssml;
            transformCtx['content'] = ssml;
            transformCtx['viewSettings'] = viewSettings;
            ssml = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$transformers$2f$proofread$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["proofreadTransformer"].transform(transformCtx, {
                docType: 'text/xml',
                onlyForTTS: true
            });
            return ssml;
        }
    }["TTSControl.useCallback[preprocessSSMLForTTS]"], [
        bookKey,
        getMergedRules,
        getViewSettings,
        transformCtx
    ]);
    const getTTSHighlightOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TTSControl.useCallback[getTTSHighlightOptions]": (ttsHighlightOptions, isEink)=>{
            const einkBgColor = isDarkMode ? '#000000' : '#ffffff';
            const color = isEink ? einkBgColor : ttsHighlightOptions.color;
            return {
                ...ttsHighlightOptions,
                color
            };
        }
    }["TTSControl.useCallback[getTTSHighlightOptions]"], [
        isDarkMode
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TTSControl.useEffect": ()=>{
            const ttsHighlightOptions = viewSettings?.ttsHighlightOptions;
            if (ttsControllerRef.current && ttsHighlightOptions) {
                ttsControllerRef.current.initViewTTS(getTTSHighlightOptions(ttsHighlightOptions, viewSettings.isEink));
            }
        }
    }["TTSControl.useEffect"], [
        viewSettings?.ttsHighlightOptions,
        viewSettings?.isEink,
        getTTSHighlightOptions
    ]);
    const handleTTSSpeak = async (event)=>{
        const { bookKey: ttsBookKey, range, oneTime = false } = event.detail;
        if (bookKey !== ttsBookKey) return;
        const view = getView(bookKey);
        const progress = getProgress(bookKey);
        const viewSettings = getViewSettings(bookKey);
        const bookData = getBookData(bookKey);
        if (!view || !progress || !viewSettings || !bookData || !bookData.book) return;
        if (bookData.book?.format === 'PDF') {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["eventDispatcher"].dispatch('toast', {
                message: _('TTS not supported for PDF'),
                type: 'warning'
            });
            return;
        }
        let ttsFromRange = range;
        if (!ttsFromRange && viewSettings.ttsLocation) {
            const { location } = progress;
            const ttsCfi = viewSettings.ttsLocation;
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$cfi$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["isCfiInLocation"])(ttsCfi, location)) {
                const { index, anchor } = view.resolveCFI(ttsCfi);
                const { doc } = view.renderer.getContents().find((x)=>x.index === index) || {};
                if (doc) {
                    ttsFromRange = anchor(doc);
                }
            }
        }
        if (!ttsFromRange) {
            ttsFromRange = progress.range;
        }
        const primaryLang = bookData.book.primaryLanguage;
        if (ttsControllerRef.current) {
            ttsControllerRef.current.stop();
            ttsControllerRef.current = null;
        }
        try {
            if (appService?.isIOSApp) {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$bridge$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["invokeUseBackgroundAudio"])({
                    enabled: true
                });
            }
            if (appService?.isMobile) {
                unblockAudio();
            }
            await initMediaSession();
            setTtsClientsInitialized(false);
            if (!oneTime) {
                setShowIndicator(true);
            }
            const ttsController = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$tts$2f$TTSController$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["TTSController"](appService, view, !!user?.id, preprocessSSMLForTTS);
            ttsControllerRef.current = ttsController;
            setTtsController(ttsController);
            await ttsController.init();
            await ttsController.initViewTTS(getTTSHighlightOptions(viewSettings.ttsHighlightOptions, viewSettings.isEink));
            const ssml = view.tts?.from(ttsFromRange);
            if (ssml) {
                const lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$ssml$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["parseSSMLLang"])(ssml, primaryLang) || 'en';
                setIsPlaying(true);
                setTtsLang(lang);
                ttsController.setLang(lang);
                ttsController.setRate(viewSettings.ttsRate);
                ttsController.speak(ssml, oneTime);
                ttsController.setTargetLang(getTTSTargetLang() || '');
            }
            setTtsClientsInitialized(true);
            setTTSEnabled(bookKey, true);
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["eventDispatcher"].dispatch('toast', {
                message: _('TTS not supported for this document'),
                type: 'error'
            });
            console.error(error);
        }
    };
    const handleTTSStop = async (event)=>{
        const { bookKey: ttsBookKey } = event.detail;
        if (ttsControllerRef.current && bookKey === ttsBookKey) {
            handleStop(bookKey);
        }
    };
    const handleTogglePlay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TTSControl.useCallback[handleTogglePlay]": async ()=>{
            const ttsController = ttsControllerRef.current;
            if (!ttsController) return;
            if (isPlaying) {
                setIsPlaying(false);
                setIsPaused(true);
                await ttsController.pause();
            } else if (isPaused) {
                setIsPlaying(true);
                setIsPaused(false);
                // start for forward/backward/setvoice-paused
                // set rate don't pause the tts
                if (ttsController.state === 'paused') {
                    await ttsController.resume();
                } else {
                    await ttsController.start();
                }
            }
            if (mediaSessionRef.current) {
                const mediaSession = mediaSessionRef.current;
                if (mediaSession instanceof __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$libs$2f$mediaSession$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["TauriMediaSession"]) {
                    await mediaSession.updatePlaybackState({
                        playing: !isPlaying
                    });
                } else {
                    mediaSession.playbackState = isPlaying ? 'paused' : 'playing';
                }
            }
        }
    }["TTSControl.useCallback[handleTogglePlay]"], [
        isPlaying,
        isPaused
    ]);
    const handleBackward = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TTSControl.useCallback[handleBackward]": async (byMark = false)=>{
            const ttsController = ttsControllerRef.current;
            if (ttsController) {
                await ttsController.backward(byMark);
            }
        }
    }["TTSControl.useCallback[handleBackward]"], []);
    const handleForward = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TTSControl.useCallback[handleForward]": async (byMark = false)=>{
            const ttsController = ttsControllerRef.current;
            if (ttsController) {
                await ttsController.forward(byMark);
            }
        }
    }["TTSControl.useCallback[handleForward]"], []);
    const handlePause = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TTSControl.useCallback[handlePause]": async ()=>{
            const ttsController = ttsControllerRef.current;
            if (ttsController) {
                setIsPlaying(false);
                setIsPaused(true);
                await ttsController.pause();
            }
        }
    }["TTSControl.useCallback[handlePause]"], []);
    const handleStop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TTSControl.useCallback[handleStop]": async (bookKey)=>{
            const ttsController = ttsControllerRef.current;
            if (ttsController) {
                await ttsController.shutdown();
                ttsControllerRef.current = null;
                setTtsController(null);
                getView(bookKey)?.deselect();
                setIsPlaying(false);
                setShowPanel(false);
                setShowIndicator(false);
            }
            if (appService?.isIOSApp) {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$bridge$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["invokeUseBackgroundAudio"])({
                    enabled: false
                });
            }
            if (appService?.isMobile) {
                releaseUnblockAudio();
            }
            await deinitMediaSession();
            setTTSEnabled(bookKey, false);
        }
    }["TTSControl.useCallback[handleStop]"], // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        appService
    ]);
    // rate range: 0.5 - 3, 1.0 is normal speed
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleSetRate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$throttle$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["throttle"])({
        "TTSControl.useCallback[handleSetRate]": async (rate)=>{
            const ttsController = ttsControllerRef.current;
            if (ttsController) {
                if (ttsController.state === 'playing') {
                    await ttsController.stop();
                    await ttsController.setRate(rate);
                    await ttsController.start();
                } else {
                    await ttsController.setRate(rate);
                }
            }
        }
    }["TTSControl.useCallback[handleSetRate]"], 3000), []);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleSetVoice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$throttle$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["throttle"])({
        "TTSControl.useCallback[handleSetVoice]": async (voice, lang)=>{
            const ttsController = ttsControllerRef.current;
            if (ttsController) {
                if (ttsController.state === 'playing') {
                    await ttsController.stop();
                    await ttsController.setVoice(voice, lang);
                    await ttsController.start();
                } else {
                    await ttsController.setVoice(voice, lang);
                }
            }
        }
    }["TTSControl.useCallback[handleSetVoice]"], 3000), []);
    const handleGetVoices = async (lang)=>{
        const ttsController = ttsControllerRef.current;
        if (ttsController) {
            return ttsController.getVoices(lang);
        }
        return [];
    };
    const handleGetVoiceId = ()=>{
        const ttsController = ttsControllerRef.current;
        if (ttsController) {
            return ttsController.getVoiceId();
        }
        return '';
    };
    const handleSelectTimeout = (bookKey, value)=>{
        setTimeoutOption(value);
        if (timeoutFunc) {
            clearTimeout(timeoutFunc);
        }
        if (value > 0) {
            setTimeoutFunc(setTimeout(()=>{
                handleStop(bookKey);
            }, value * 1000));
            setTimeoutTimestamp(Date.now() + value * 1000);
        } else {
            setTimeoutTimestamp(0);
        }
    };
    const handleToggleTTSBar = ()=>{
        const viewSettings = getViewSettings(bookKey);
        viewSettings.showTTSBar = !viewSettings.showTTSBar;
        setShowTTSBar(viewSettings.showTTSBar);
        if (viewSettings.showTTSBar) {
            setShowPanel(false);
        }
        setViewSettings(bookKey, viewSettings);
    };
    const updatePanelPosition = ()=>{
        if (iconRef.current) {
            const rect = iconRef.current.getBoundingClientRect();
            const parentRect = iconRef.current.parentElement?.getBoundingClientRect() || document.documentElement.getBoundingClientRect();
            const trianglePos = {
                dir: 'up',
                point: {
                    x: rect.left + rect.width / 2 - parentRect.left,
                    y: rect.top - 12
                }
            };
            const popupPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$sel$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getPopupPosition"])(trianglePos, parentRect, popupWidth, popupHeight, popupPadding);
            setPanelPosition(popupPos);
            setTrianglePosition(trianglePos);
        }
    };
    const togglePopup = ()=>{
        updatePanelPosition();
        if (!showPanel && ttsControllerRef.current) {
            const speakingLang = ttsControllerRef.current.getSpeakingLang() || ttsLang;
            setTtsLang(speakingLang);
        }
        setShowPanel((prev)=>!prev);
    };
    const handleDismissPopup = ()=>{
        setShowPanel(false);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TTSControl.useEffect": ()=>{
            const { current: mediaSession } = mediaSessionRef;
            if (mediaSession) {
                mediaSession.setActionHandler('play', {
                    "TTSControl.useEffect": ()=>{
                        handleTogglePlay();
                    }
                }["TTSControl.useEffect"]);
                mediaSession.setActionHandler('pause', {
                    "TTSControl.useEffect": ()=>{
                        handleTogglePlay();
                    }
                }["TTSControl.useEffect"]);
                mediaSession.setActionHandler('stop', {
                    "TTSControl.useEffect": ()=>{
                        handlePause();
                    }
                }["TTSControl.useEffect"]);
                mediaSession.setActionHandler('seekforward', {
                    "TTSControl.useEffect": ()=>{
                        handleForward(true);
                    }
                }["TTSControl.useEffect"]);
                mediaSession.setActionHandler('seekbackward', {
                    "TTSControl.useEffect": ()=>{
                        handleBackward(true);
                    }
                }["TTSControl.useEffect"]);
                mediaSession.setActionHandler('nexttrack', {
                    "TTSControl.useEffect": ()=>{
                        handleForward();
                    }
                }["TTSControl.useEffect"]);
                mediaSession.setActionHandler('previoustrack', {
                    "TTSControl.useEffect": ()=>{
                        handleBackward();
                    }
                }["TTSControl.useEffect"]);
            }
        }
    }["TTSControl.useEffect"], [
        handleTogglePlay,
        handlePause,
        handleForward,
        handleBackward
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TTSControl.useEffect": ()=>{
            if (!iconRef.current || !showPanel) return;
            const parentElement = iconRef.current.parentElement;
            if (!parentElement) return;
            const resizeObserver = new ResizeObserver({
                "TTSControl.useEffect": ()=>{
                    updatePanelPosition();
                }
            }["TTSControl.useEffect"]);
            resizeObserver.observe(parentElement);
            return ({
                "TTSControl.useEffect": ()=>{
                    resizeObserver.disconnect();
                }
            })["TTSControl.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["TTSControl.useEffect"], [
        showPanel
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TTSControl.useEffect": ()=>{
            if (hoveredBookKey) {
                if (hoverTimeoutRef.current) {
                    clearTimeout(hoverTimeoutRef.current);
                    hoverTimeoutRef.current = null;
                }
                const showTimeout = setTimeout({
                    "TTSControl.useEffect.showTimeout": ()=>{
                        setShowIndicatorWithinTimeout(true);
                    }
                }["TTSControl.useEffect.showTimeout"], 100);
                hoverTimeoutRef.current = showTimeout;
            } else {
                if (hoverTimeoutRef.current) {
                    clearTimeout(hoverTimeoutRef.current);
                    hoverTimeoutRef.current = null;
                }
                const hideTimeout = setTimeout({
                    "TTSControl.useEffect.hideTimeout": ()=>{
                        setShowIndicatorWithinTimeout(false);
                    }
                }["TTSControl.useEffect.hideTimeout"], 5000);
                hoverTimeoutRef.current = hideTimeout;
            }
            return ({
                "TTSControl.useEffect": ()=>{
                    if (hoverTimeoutRef.current) {
                        clearTimeout(hoverTimeoutRef.current);
                    }
                }
            })["TTSControl.useEffect"];
        }
    }["TTSControl.useEffect"], [
        hoveredBookKey
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            showPanel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$Overlay$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["Overlay"], {
                onDismiss: handleDismissPopup
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/reader/components/tts/TTSControl.tsx",
                lineNumber: 711,
                columnNumber: 21
            }, ("TURBOPACK compile-time value", void 0)),
            (showPanel || showIndicator && showIndicatorWithinTimeout) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: iconRef,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"])('absolute h-12 w-12', 'transition-transform duration-300', viewSettings?.rtl ? 'left-8' : 'right-6', !appService?.hasSafeAreaInset && 'bottom-[70px] sm:bottom-14'),
                style: {
                    bottom: appService?.hasSafeAreaInset ? `${(safeAreaInsets?.bottom || 0) * 0.33 + (hoveredBookKey ? 70 : 52)}px` : undefined
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$tts$2f$TTSIcon$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                    isPlaying: isPlaying,
                    ttsInited: ttsClientsInited,
                    onClick: togglePopup
                }, void 0, false, {
                    fileName: "[project]/apps/readest-app/src/app/reader/components/tts/TTSControl.tsx",
                    lineNumber: 727,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/reader/components/tts/TTSControl.tsx",
                lineNumber: 713,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            showPanel && panelPosition && trianglePosition && ttsClientsInited && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$Popup$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                width: popupWidth,
                height: popupHeight,
                position: panelPosition,
                trianglePosition: trianglePosition,
                className: "bg-base-200 flex shadow-lg",
                onDismiss: handleDismissPopup,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$tts$2f$TTSPanel$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                    bookKey: bookKey,
                    ttsLang: ttsLang,
                    isPlaying: isPlaying,
                    timeoutOption: timeoutOption,
                    timeoutTimestamp: timeoutTimestamp,
                    onTogglePlay: handleTogglePlay,
                    onBackward: handleBackward,
                    onForward: handleForward,
                    onSetRate: handleSetRate,
                    onGetVoices: handleGetVoices,
                    onSetVoice: handleSetVoice,
                    onGetVoiceId: handleGetVoiceId,
                    onSelectTimeout: handleSelectTimeout,
                    onToogleTTSBar: handleToggleTTSBar
                }, void 0, false, {
                    fileName: "[project]/apps/readest-app/src/app/reader/components/tts/TTSControl.tsx",
                    lineNumber: 739,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/reader/components/tts/TTSControl.tsx",
                lineNumber: 731,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            showIndicator && showTTSBar && ttsClientsInited && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$app$2f$reader$2f$components$2f$tts$2f$TTSBar$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                bookKey: bookKey,
                isPlaying: isPlaying,
                onBackward: handleBackward,
                onTogglePlay: handleTogglePlay,
                onForward: handleForward,
                gridInsets: gridInsets
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/app/reader/components/tts/TTSControl.tsx",
                lineNumber: 758,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(TTSControl, "PHwRzE33FuoWKvgYzyzc5f1yf2A=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useTranslation$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["useEnv"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$themeStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useThemeStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useSettingsStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useBookDataStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useReaderStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useReaderStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$proofreadStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useProofreadStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useResponsiveSize$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useResponsiveSize"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useResponsiveSize$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useResponsiveSize"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useResponsiveSize$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useResponsiveSize"]
    ];
});
_c = TTSControl;
const __TURBOPACK__default__export__ = TTSControl;
var _c;
__turbopack_context__.k.register(_c, "TTSControl");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=apps_readest-app_src_app_reader_components_tts_de608684._.js.map