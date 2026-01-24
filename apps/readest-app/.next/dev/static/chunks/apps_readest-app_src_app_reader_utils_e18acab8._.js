(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/readest-app/src/app/reader/utils/iframeEventHandlers.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "handleClick",
    ()=>handleClick,
    "handleKeydown",
    ()=>handleKeydown,
    "handleKeyup",
    ()=>handleKeyup,
    "handleMousedown",
    ()=>handleMousedown,
    "handleMouseup",
    ()=>handleMouseup,
    "handleTouchEnd",
    ()=>handleTouchEnd,
    "handleTouchMove",
    ()=>handleTouchMove,
    "handleTouchStart",
    ()=>handleTouchStart,
    "handleWheel",
    ()=>handleWheel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/constants.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/event.ts [client] (ecmascript)");
;
;
let lastClickTime = 0;
let longHoldTimeout = null;
let keyboardState = {
    key: '',
    code: '',
    ctrlKey: false,
    shiftKey: false,
    altKey: false,
    metaKey: false
};
const getKeyStatus = (event)=>{
    if (event && 'ctrlKey' in event) {
        return {
            key: keyboardState.key,
            code: keyboardState.code,
            ctrlKey: event.ctrlKey,
            shiftKey: event.shiftKey,
            altKey: event.altKey,
            metaKey: event.metaKey
        };
    }
    return {
        ...keyboardState
    };
};
const handleKeydown = (bookKey, event)=>{
    keyboardState = {
        key: event.key,
        code: event.code,
        ctrlKey: event.ctrlKey,
        shiftKey: event.shiftKey,
        altKey: event.altKey,
        metaKey: event.metaKey
    };
    if ([
        'Backspace'
    ].includes(event.key)) {
        event.preventDefault();
    }
    window.postMessage({
        type: 'iframe-keydown',
        bookKey,
        key: event.key,
        code: event.code,
        ctrlKey: event.ctrlKey,
        shiftKey: event.shiftKey,
        altKey: event.altKey,
        metaKey: event.metaKey
    }, '*');
};
const handleKeyup = (bookKey, event)=>{
    keyboardState = {
        key: '',
        code: '',
        ctrlKey: event.ctrlKey,
        shiftKey: event.shiftKey,
        altKey: event.altKey,
        metaKey: event.metaKey
    };
    window.postMessage({
        type: 'iframe-keyup',
        bookKey,
        key: event.key,
        code: event.code,
        ctrlKey: event.ctrlKey,
        shiftKey: event.shiftKey,
        altKey: event.altKey,
        metaKey: event.metaKey
    }, '*');
};
const handleMousedown = (bookKey, event)=>{
    longHoldTimeout = setTimeout(()=>{
        longHoldTimeout = null;
    }, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["LONG_HOLD_THRESHOLD"]);
    window.postMessage({
        type: 'iframe-mousedown',
        bookKey,
        button: event.button,
        screenX: event.screenX,
        screenY: event.screenY,
        clientX: event.clientX,
        clientY: event.clientY,
        offsetX: event.offsetX,
        offsetY: event.offsetY,
        ...getKeyStatus(event)
    }, '*');
};
const handleMouseup = (bookKey, event)=>{
    // we will handle mouse back and forward buttons ourselves
    if ([
        3,
        4
    ].includes(event.button)) {
        event.preventDefault();
    }
    window.postMessage({
        type: 'iframe-mouseup',
        bookKey,
        button: event.button,
        screenX: event.screenX,
        screenY: event.screenY,
        clientX: event.clientX,
        clientY: event.clientY,
        offsetX: event.offsetX,
        offsetY: event.offsetY,
        ...getKeyStatus(event)
    }, '*');
};
const handleWheel = (bookKey, event)=>{
    window.postMessage({
        type: 'iframe-wheel',
        bookKey,
        deltaMode: event.deltaMode,
        deltaX: event.deltaX,
        deltaY: event.deltaY,
        deltaZ: event.deltaZ,
        screenX: event.screenX,
        screenY: event.screenY,
        clientX: event.clientX,
        clientY: event.clientY,
        offsetX: event.offsetX,
        offsetY: event.offsetY,
        ...getKeyStatus(event)
    }, '*');
};
const handleClick = (bookKey, doubleClickDisabled, event)=>{
    const now = Date.now();
    if (!doubleClickDisabled.current && now - lastClickTime < __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["DOUBLE_CLICK_INTERVAL_THRESHOLD_MS"]) {
        lastClickTime = now;
        window.postMessage({
            type: 'iframe-double-click',
            bookKey,
            screenX: event.screenX,
            screenY: event.screenY,
            clientX: event.clientX,
            clientY: event.clientY,
            offsetX: event.offsetX,
            offsetY: event.offsetY,
            ...getKeyStatus(event)
        }, '*');
        return;
    }
    lastClickTime = now;
    const postSingleClick = ()=>{
        const element = event.target;
        if (element?.closest('sup, a, audio, video') && !element?.closest('a.duokan-footnote:not([href])')) {
            return;
        }
        const footnote = element?.closest('.js_readerFooterNote, .zhangyue-footnote, .duokan-footnote');
        if (footnote) {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["eventDispatcher"].dispatch('footnote-popup', {
                bookKey,
                element: footnote,
                footnote: footnote.getAttribute('data-wr-footernote') || footnote.getAttribute('zy-footnote') || footnote.getAttribute('alt') || element?.getAttribute('alt') || ''
            });
            return;
        }
        // if long hold is detected, we don't want to send single click event
        if (!longHoldTimeout) {
            return;
        }
        window.postMessage({
            type: 'iframe-single-click',
            bookKey,
            screenX: event.screenX,
            screenY: event.screenY,
            clientX: event.clientX,
            clientY: event.clientY,
            offsetX: event.offsetX,
            offsetY: event.offsetY,
            ...getKeyStatus(event)
        }, '*');
    };
    if (!doubleClickDisabled.current) {
        setTimeout(()=>{
            if (Date.now() - lastClickTime >= __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["DOUBLE_CLICK_INTERVAL_THRESHOLD_MS"]) {
                postSingleClick();
            }
        }, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["DOUBLE_CLICK_INTERVAL_THRESHOLD_MS"]);
    } else {
        postSingleClick();
    }
};
const handleTouchEv = (bookKey, event, type)=>{
    const touch = event.targetTouches[0];
    const touches = [];
    if (touch) {
        touches.push({
            clientX: touch.clientX,
            clientY: touch.clientY,
            screenX: touch.screenX,
            screenY: touch.screenY
        });
    }
    window.postMessage({
        type: type,
        bookKey,
        timeStamp: Date.now(),
        targetTouches: touches,
        ...getKeyStatus(event)
    }, '*');
};
const handleTouchStart = (bookKey, event)=>{
    handleTouchEv(bookKey, event, 'iframe-touchstart');
};
const handleTouchMove = (bookKey, event)=>{
    handleTouchEv(bookKey, event, 'iframe-touchmove');
};
const handleTouchEnd = (bookKey, event)=>{
    handleTouchEv(bookKey, event, 'iframe-touchend');
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/readest-app/src/app/reader/utils/annotatorUtil.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getHighlightColorHex",
    ()=>getHighlightColorHex
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/constants.ts [client] (ecmascript)");
;
const getHighlightColorHex = (settings, color)=>{
    if (!color) return color;
    const customColors = settings.globalReadSettings.customHighlightColors;
    return customColors?.[color] ?? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["HIGHLIGHT_COLOR_HEX"][color];
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=apps_readest-app_src_app_reader_utils_e18acab8._.js.map