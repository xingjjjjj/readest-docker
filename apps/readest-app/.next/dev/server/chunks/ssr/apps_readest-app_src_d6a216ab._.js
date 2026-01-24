module.exports = [
"[project]/apps/readest-app/src/utils/nav.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "navigateToLibrary",
    ()=>navigateToLibrary,
    "navigateToLogin",
    ()=>navigateToLogin,
    "navigateToProfile",
    ()=>navigateToProfile,
    "navigateToReader",
    ()=>navigateToReader,
    "navigateToResetPassword",
    ()=>navigateToResetPassword,
    "navigateToUpdatePassword",
    ()=>navigateToUpdatePassword,
    "redirectToLibrary",
    ()=>redirectToLibrary,
    "showLibraryWindow",
    ()=>showLibraryWindow,
    "showReaderWindow",
    ()=>showReaderWindow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.28.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$window$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tauri-apps+api@2.9.1/node_modules/@tauri-apps/api/window.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$webviewWindow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tauri-apps+api@2.9.1/node_modules/@tauri-apps/api/webviewWindow.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/environment.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/constants.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
let readerWindowsCount = 0;
const createReaderWindow = (appService, url)=>{
    const currentWindow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$window$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getCurrentWindow"])();
    const label = currentWindow.label;
    const newLabelPrefix = label === 'main' ? 'reader' : label;
    const win = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$webviewWindow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebviewWindow"](`${newLabelPrefix}-${readerWindowsCount}`, {
        url,
        width: 800,
        height: 600,
        center: true,
        resizable: true,
        title: appService.isMacOSApp ? '' : 'Readest',
        decorations: appService.isMacOSApp ? true : false,
        transparent: appService.isMacOSApp ? false : true,
        shadow: appService.isMacOSApp ? undefined : true,
        titleBarStyle: appService.isMacOSApp ? 'overlay' : undefined
    });
    win.once('tauri://created', ()=>{
        console.log('new window created');
        readerWindowsCount += 1;
    });
    win.once('tauri://error', (e)=>{
        console.error('error creating window', e);
    });
    win.once('tauri://destroyed', ()=>{
        readerWindowsCount -= 1;
    });
};
const showReaderWindow = (appService, bookIds)=>{
    const ids = bookIds.join(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BOOK_IDS_SEPARATOR"]);
    const params = new URLSearchParams('');
    params.set('ids', ids);
    const url = `/reader?${params.toString()}`;
    createReaderWindow(appService, url);
};
const showLibraryWindow = (appService, filenames)=>{
    const params = new URLSearchParams();
    filenames.forEach((filename)=>params.append('file', filename));
    const url = `/library?${params.toString()}`;
    createReaderWindow(appService, url);
};
const navigateToReader = (router, bookIds, queryParams, navOptions)=>{
    const ids = bookIds.join(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BOOK_IDS_SEPARATOR"]);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isWebAppPlatform"])() && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPWA"])()) {
        router.push(`/reader/${ids}${queryParams ? `?${queryParams}` : ''}`, navOptions);
    } else {
        const params = new URLSearchParams(queryParams || '');
        params.set('ids', ids);
        router.push(`/reader?${params.toString()}`, navOptions);
    }
};
const navigateToLogin = (router)=>{
    const pathname = window.location.pathname;
    const search = window.location.search;
    const currentPath = pathname !== '/auth' ? pathname + search : '/';
    router.push(`/auth?redirect=${encodeURIComponent(currentPath)}`);
};
const navigateToProfile = (router)=>{
    router.push('/user');
};
const navigateToLibrary = (router, queryParams, navOptions, navBack)=>{
    const lastLibraryParams = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : null;
    if (navBack && lastLibraryParams) {
        queryParams = lastLibraryParams;
    }
    router.replace(`/library${queryParams ? `?${queryParams}` : ''}`, navOptions);
};
const redirectToLibrary = ()=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["redirect"])('/library');
};
const navigateToResetPassword = (router)=>{
    const pathname = window.location.pathname;
    const search = window.location.search;
    const currentPath = pathname !== '/auth' ? pathname + search : '/';
    router.push(`/auth/recovery?redirect=${encodeURIComponent(currentPath)}`);
};
const navigateToUpdatePassword = (router)=>{
    const pathname = window.location.pathname;
    const search = window.location.search;
    const currentPath = pathname !== '/auth' ? pathname + search : '/';
    router.push(`/auth/update?redirect=${encodeURIComponent(currentPath)}`);
};
}),
"[project]/apps/readest-app/src/utils/lang.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "code6392to6391",
    ()=>code6392to6391,
    "code6393to6391",
    ()=>code6393to6391,
    "detectLanguage",
    ()=>detectLanguage,
    "getLanguageInfo",
    ()=>getLanguageInfo,
    "getLanguageName",
    ()=>getLanguageName,
    "inferLangFromScript",
    ()=>inferLangFromScript,
    "isCJKLang",
    ()=>isCJKLang,
    "isCJKStr",
    ()=>isCJKStr,
    "isSameLang",
    ()=>isSameLang,
    "isValidLang",
    ()=>isValidLang,
    "normalizeToFullLang",
    ()=>normalizeToFullLang,
    "normalizeToShortLang",
    ()=>normalizeToShortLang,
    "normalizedLangCode",
    ()=>normalizedLangCode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$franc$2d$min$40$6$2e$2$2e$0$2f$node_modules$2f$franc$2d$min$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/franc-min@6.2.0/node_modules/franc-min/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$iso$2d$639$2d$2$40$3$2e$0$2e$2$2f$node_modules$2f$iso$2d$639$2d$2$2f$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/iso-639-2@3.0.2/node_modules/iso-639-2/2.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$iso$2d$639$2d$3$40$3$2e$0$2e$1$2f$node_modules$2f$iso$2d$639$2d$3$2f$iso6393$2d$to$2d$1$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/iso-639-3@3.0.1/node_modules/iso-639-3/iso6393-to-1.js [app-ssr] (ecmascript)");
;
;
;
const isCJKStr = (str)=>{
    return /[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Hangul}]/u.test(str ?? '');
};
const isCJKLang = (lang)=>{
    if (!lang) return false;
    const normalizedLang = normalizedLangCode(lang);
    return [
        'zh',
        'ja',
        'ko',
        'zho',
        'jpn',
        'kor'
    ].includes(normalizedLang);
};
const ZH_SCRIPTS_MAPPING = {
    zh: 'zh-Hans',
    'zh-cn': 'zh-Hans',
    'zh-hk': 'zh-Hant',
    'zh-tw': 'zh-Hant',
    'zh-mo': 'zh-Hant',
    'zh-hans': 'zh-Hans',
    'zh-hant': 'zh-Hant'
};
const normalizeToFullLang = (langCode)=>{
    try {
        const locale = new Intl.Locale(langCode.toLowerCase());
        const maximized = locale.maximize();
        if (maximized.language === 'zh') {
            return maximized.script === 'Hant' ? 'zh-Hant' : 'zh-Hans';
        }
        return maximized.region ? `${maximized.language}-${maximized.region}` : langCode;
    } catch  {
        return ZH_SCRIPTS_MAPPING[langCode.toLowerCase()] || langCode;
    }
};
const normalizeToShortLang = (langCode)=>{
    const lang = langCode.toLowerCase();
    if (lang.startsWith('zh')) {
        return ZH_SCRIPTS_MAPPING[lang] || 'zh-Hans';
    }
    return lang.split('-')[0];
};
const normalizedLangCode = (lang)=>{
    if (!lang) return '';
    return lang.split('-')[0].toLowerCase();
};
const isSameLang = (lang1, lang2)=>{
    if (!lang1 || !lang2) return false;
    const normalizedLang1 = normalizedLangCode(lang1);
    const normalizedLang2 = normalizedLangCode(lang2);
    return normalizedLang1 === normalizedLang2;
};
const isValidLang = (lang)=>{
    if (!lang) return false;
    if (typeof lang !== 'string') return false;
    if ([
        'und',
        'mul',
        'mis',
        'zxx'
    ].includes(lang)) return false;
    const code = normalizedLangCode(lang);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$iso$2d$639$2d$2$40$3$2e$0$2e$2$2f$node_modules$2f$iso$2d$639$2d$2$2f$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["iso6392"].some((l)=>l.iso6391 === code || l.iso6392B === code);
};
const code6392to6391 = (code)=>{
    const lang = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$iso$2d$639$2d$2$40$3$2e$0$2e$2$2f$node_modules$2f$iso$2d$639$2d$2$2f$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["iso6392"].find((l)=>l.iso6392B === code);
    return lang?.iso6391 || '';
};
const commonIndivToMacro = {
    cmn: 'zho',
    arb: 'ara',
    arz: 'ara',
    ind: 'msa',
    zsm: 'msa',
    nob: 'nor',
    nno: 'nor',
    pes: 'fas',
    quy: 'que'
};
const code6393to6391 = (code)=>{
    const macro = commonIndivToMacro[code] || code;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$iso$2d$639$2d$3$40$3$2e$0$2e$1$2f$node_modules$2f$iso$2d$639$2d$3$2f$iso6393$2d$to$2d$1$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["iso6393To1"][macro] || '';
};
const getLanguageName = (code)=>{
    const lang = normalizedLangCode(code);
    const language = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$iso$2d$639$2d$2$40$3$2e$0$2e$2$2f$node_modules$2f$iso$2d$639$2d$2$2f$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["iso6392"].find((l)=>l.iso6391 === lang || l.iso6392B === lang);
    return language ? language.name : lang;
};
const inferLangFromScript = (text, lang)=>{
    if (!lang || lang === 'en') {
        if (/[\p{Script=Hangul}]/u.test(text)) {
            return 'ko';
        } else if (/[\p{Script=Hiragana}\p{Script=Katakana}]/u.test(text)) {
            return 'ja';
        } else if (/[\p{Script=Han}]/u.test(text)) {
            return 'zh';
        }
    }
    return lang;
};
const detectLanguage = (content)=>{
    try {
        const iso6393Lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$franc$2d$min$40$6$2e$2$2e$0$2f$node_modules$2f$franc$2d$min$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["franc"])(content.substring(0, 1000));
        const iso6391Lang = code6393to6391(iso6393Lang) || 'en';
        return iso6391Lang;
    } catch  {
        console.warn('Language detection failed, defaulting to en.');
        return 'en';
    }
};
const getLanguageInfo = (lang)=>{
    if (!lang) return {};
    try {
        const canonical = Intl.getCanonicalLocales(lang)[0];
        const locale = new Intl.Locale(canonical);
        const isCJK = [
            'zh',
            'ja',
            'kr'
        ].includes(locale.language);
        const direction = (locale.getTextInfo?.() ?? locale.textInfo)?.direction;
        return {
            canonical,
            locale,
            isCJK,
            direction
        };
    } catch (e) {
        console.warn(e);
        return {};
    }
};
}),
"[project]/apps/readest-app/src/utils/book.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "INIT_BOOK_CONFIG",
    ()=>INIT_BOOK_CONFIG,
    "flattenContributors",
    ()=>flattenContributors,
    "formatAuthors",
    ()=>formatAuthors,
    "formatBytes",
    ()=>formatBytes,
    "formatDate",
    ()=>formatDate,
    "formatDescription",
    ()=>formatDescription,
    "formatLanguage",
    ()=>formatLanguage,
    "formatPublisher",
    ()=>formatPublisher,
    "formatTitle",
    ()=>formatTitle,
    "getBookDirFromLanguage",
    ()=>getBookDirFromLanguage,
    "getBookDirFromWritingMode",
    ()=>getBookDirFromWritingMode,
    "getBookLangCode",
    ()=>getBookLangCode,
    "getConfigFilename",
    ()=>getConfigFilename,
    "getCoverFilename",
    ()=>getCoverFilename,
    "getCurrentPage",
    ()=>getCurrentPage,
    "getDir",
    ()=>getDir,
    "getLibraryBackupFilename",
    ()=>getLibraryBackupFilename,
    "getLibraryFilename",
    ()=>getLibraryFilename,
    "getLocalBookFilename",
    ()=>getLocalBookFilename,
    "getMetadataHash",
    ()=>getMetadataHash,
    "getPrimaryLanguage",
    ()=>getPrimaryLanguage,
    "isBookFile",
    ()=>isBookFile,
    "listFormater",
    ()=>listFormater
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$libs$2f$document$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/libs/document.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/constants.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/misc.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$rtl$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/rtl.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$lang$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/lang.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$md5$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/md5.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$js$2d$md5$40$0$2e$8$2e$3$2f$node_modules$2f$js$2d$md5$2f$src$2f$md5$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/js-md5@0.8.3/node_modules/js-md5/src/md5.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
const getDir = (book)=>{
    // In local storage mode, return the folder name (same as book name without extension)
    if (!book.relativePath) {
        throw new Error(`Book ${book.title} (${book.hash}) is missing relativePath. Please re-import the book.`);
    }
    return book.relativePath.replace(/\.[^.]+$/, '');
};
const getLibraryFilename = ()=>{
    return 'library.json';
};
const getLibraryBackupFilename = ()=>{
    return 'library_backup.json';
};
const getLocalBookFilename = (book)=>{
    // In local storage mode, books are stored in their original relative paths
    if (!book.relativePath) {
        throw new Error(`Book ${book.title} (${book.hash}) is missing relativePath. Please re-import the book.`);
    }
    return book.relativePath;
};
const getCoverFilename = (book)=>{
    // In local storage mode, covers are stored in a folder next to the book with the same name
    if (!book.relativePath) {
        throw new Error(`Book ${book.title} (${book.hash}) is missing relativePath. Please re-import the book.`);
    }
    // Remove extension from book path to get folder name
    const pathWithoutExt = book.relativePath.replace(/\.[^.]+$/, '');
    const result = `${pathWithoutExt}/cover.png`;
    console.log('[getCoverFilename] ✓ Using relativePath:', book.relativePath);
    console.log('[getCoverFilename] ✓ Cover path result:', result);
    return result;
};
const getConfigFilename = (book)=>{
    // In local storage mode, configs are stored in a folder next to the book with the same name
    if (!book.relativePath) {
        throw new Error(`Book ${book.title} (${book.hash}) is missing relativePath. Please re-import the book.`);
    }
    // Remove extension from book path to get folder name
    const pathWithoutExt = book.relativePath.replace(/\.[^.]+$/, '');
    return `${pathWithoutExt}/config.json`;
};
const isBookFile = (filename)=>{
    return Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$libs$2f$document$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EXTS"]).includes(filename.split('.').pop());
};
const INIT_BOOK_CONFIG = {
    updatedAt: 0
};
const formatLanguageMap = (x, defaultLang = false)=>{
    const userLang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUserLang"])();
    if (!x) return '';
    if (typeof x === 'string') return x;
    const keys = Object.keys(x);
    return defaultLang ? x[keys[0]] : x[userLang] || x[keys[0]];
};
const listFormater = (narrow = false, lang = '')=>{
    lang = lang ? lang : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUserLang"])();
    if (narrow) {
        return new Intl.ListFormat('en', {
            style: 'narrow',
            type: 'unit'
        });
    } else {
        return new Intl.ListFormat(lang, {
            style: 'long',
            type: 'conjunction'
        });
    }
};
const getBookLangCode = (lang)=>{
    try {
        const bookLang = typeof lang === 'string' ? lang : lang?.[0];
        return bookLang ? bookLang.split('-')[0] : '';
    } catch  {
        return '';
    }
};
const flattenContributors = (contributors)=>{
    if (!contributors) return '';
    return Array.isArray(contributors) ? contributors.map((contributor)=>typeof contributor === 'string' ? contributor : formatLanguageMap(contributor?.name)).join(', ') : typeof contributors === 'string' ? contributors : formatLanguageMap(contributors?.name);
};
// prettier-ignore
const LASTNAME_AUTHOR_SORT_LANGS = [
    'ar',
    'bo',
    'de',
    'en',
    'es',
    'fr',
    'hi',
    'it',
    'nl',
    'pl',
    'pt',
    'ru',
    'th',
    'tr',
    'uk'
];
const formatAuthorName = (name, lastNameFirst)=>{
    if (!name) return '';
    const parts = name.split(' ');
    if (lastNameFirst && parts.length > 1) {
        return `${parts[parts.length - 1]}, ${parts.slice(0, -1).join(' ')}`;
    }
    return name;
};
const formatAuthors = (contributors, bookLang, sortAs)=>{
    const langCode = getBookLangCode(bookLang) || 'en';
    const lastNameFirst = !!sortAs && LASTNAME_AUTHOR_SORT_LANGS.includes(langCode);
    return Array.isArray(contributors) ? listFormater(langCode === 'zh', langCode).format(contributors.map((contributor)=>typeof contributor === 'string' ? formatAuthorName(contributor, lastNameFirst) : formatAuthorName(formatLanguageMap(contributor?.name), lastNameFirst))) : typeof contributors === 'string' ? formatAuthorName(contributors, lastNameFirst) : formatAuthorName(formatLanguageMap(contributors?.name), lastNameFirst);
};
const formatTitle = (title)=>{
    return typeof title === 'string' ? title : formatLanguageMap(title);
};
const formatDescription = (description)=>{
    if (!description) return '';
    const text = typeof description === 'string' ? description : formatLanguageMap(description);
    return text.replace(/<\/?[^>]+(>|$)/g, '').replace(/&#\d+;/g, '').trim();
};
const formatPublisher = (publisher)=>{
    return typeof publisher === 'string' ? publisher : formatLanguageMap(publisher);
};
const langCodeToLangName = (langCode)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SUPPORTED_LANGS"][langCode] || langCode.toUpperCase();
};
const formatLanguage = (lang)=>{
    return Array.isArray(lang) ? lang.map(langCodeToLangName).join(', ') : langCodeToLangName(lang || '');
};
const getPrimaryLanguage = (lang)=>{
    const primaryLang = Array.isArray(lang) ? lang[0] : lang;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$lang$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidLang"])(primaryLang)) {
        const normalizedLang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$lang$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizedLangCode"])(primaryLang);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$lang$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["code6392to6391"])(normalizedLang) || normalizedLang;
    }
    return 'en';
};
const formatDate = (date, isUTC = false)=>{
    if (!date) return;
    const userLang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUserLang"])();
    try {
        return new Date(date).toLocaleDateString(userLang, {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            timeZone: isUTC ? 'UTC' : undefined
        });
    } catch  {
        return;
    }
};
const formatBytes = (bytes, locale = 'en-US')=>{
    if (!bytes) return '';
    const units = [
        'byte',
        'kilobyte',
        'megabyte',
        'gigabyte',
        'terabyte'
    ];
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    const value = bytes / Math.pow(1024, i);
    const formatter = new Intl.NumberFormat(locale, {
        style: 'unit',
        unit: units[i],
        unitDisplay: 'short',
        maximumFractionDigits: 2
    });
    return formatter.format(value);
};
const getCurrentPage = (book, progress)=>{
    const bookFormat = book.format;
    const { section, pageinfo } = progress;
    return bookFormat === 'PDF' ? section ? section.current + 1 : 0 : pageinfo ? pageinfo.current + 1 : 0;
};
const getBookDirFromWritingMode = (writingMode)=>{
    switch(writingMode){
        case 'horizontal-tb':
            return 'ltr';
        case 'horizontal-rl':
        case 'vertical-rl':
            return 'rtl';
        default:
            return 'auto';
    }
};
const getBookDirFromLanguage = (language)=>{
    const lang = getPrimaryLanguage(language) || '';
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$rtl$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDirFromLanguage"])(lang);
};
const getTitleForHash = (title)=>{
    return typeof title === 'string' ? title : formatLanguageMap(title, true);
};
const getAuthorsList = (contributors)=>{
    if (!contributors) return [];
    return Array.isArray(contributors) ? contributors.map((contributor)=>typeof contributor === 'string' ? contributor : formatLanguageMap(contributor?.name, true)).filter(Boolean) : [
        typeof contributors === 'string' ? contributors : formatLanguageMap(contributors?.name, true)
    ];
};
const normalizeIdentifier = (identifier)=>{
    try {
        if (identifier.includes('urn:')) {
            // Slice after the last ':'
            return identifier.match(/[^:]+$/)?.[0] || '';
        } else if (identifier.includes(':')) {
            // Slice after the first ':'
            return identifier.match(/^[^:]+:(.+)$/)?.[1] || '';
        }
    } catch  {
        return identifier;
    }
    return identifier;
};
const getPreferredIdentifier = (identifiers)=>{
    for (const scheme of [
        'uuid',
        'calibre',
        'isbn'
    ]){
        const found = identifiers.find((identifier)=>typeof identifier === 'string' ? identifier.toLowerCase().includes(scheme) : identifier.scheme.toLowerCase() === scheme);
        if (found) {
            return typeof found === 'string' ? normalizeIdentifier(found) : found.value;
        }
    }
    return;
};
const getIdentifiersList = (identifiers)=>{
    if (!identifiers) return [];
    if (Array.isArray(identifiers)) {
        const preferred = getPreferredIdentifier(identifiers);
        if (preferred) {
            return [
                preferred
            ];
        }
    }
    return Array.isArray(identifiers) ? identifiers.map((identifier)=>typeof identifier === 'string' ? normalizeIdentifier(identifier) : identifier.value).filter(Boolean) : typeof identifiers === 'string' ? [
        normalizeIdentifier(identifiers)
    ] : [
        identifiers.value
    ];
};
const getMetadataHash = (metadata)=>{
    try {
        const title = getTitleForHash(metadata.title);
        const authors = getAuthorsList(metadata.author).join(',');
        const identifiers = getIdentifiersList(metadata.altIdentifier || metadata.identifier).join(',');
        const hashSource = `${title}|${authors}|${identifiers}`;
        const metaHash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$js$2d$md5$40$0$2e$8$2e$3$2f$node_modules$2f$js$2d$md5$2f$src$2f$md5$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["md5"])(hashSource.normalize('NFC'));
        return metaHash;
    } catch (error) {
        console.error('Error generating metadata hash:', error);
    }
    return;
};
}),
"[project]/apps/readest-app/src/utils/event.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "eventDispatcher",
    ()=>eventDispatcher
]);
class EventDispatcher {
    syncListeners;
    asyncListeners;
    constructor(){
        this.syncListeners = new Map();
        this.asyncListeners = new Map();
    }
    on(event, callback) {
        if (!this.asyncListeners.has(event)) {
            this.asyncListeners.set(event, new Set());
        }
        this.asyncListeners.get(event).add(callback);
    }
    off(event, callback) {
        this.asyncListeners.get(event)?.delete(callback);
    }
    async dispatch(event, detail) {
        const listeners = this.asyncListeners.get(event);
        if (listeners) {
            const customEvent = new CustomEvent(event, {
                detail
            });
            for (const listener of listeners){
                await listener(customEvent);
            }
        }
    }
    onSync(event, callback) {
        if (!this.syncListeners.has(event)) {
            this.syncListeners.set(event, []);
        }
        this.syncListeners.get(event).push(callback);
    }
    offSync(event, callback) {
        const listeners = this.syncListeners.get(event);
        if (listeners) {
            this.syncListeners.set(event, listeners.filter((listener)=>listener !== callback));
        }
    }
    dispatchSync(event, detail) {
        const listeners = this.syncListeners.get(event);
        if (listeners) {
            const customEvent = new CustomEvent(event, {
                detail
            });
            for (const listener of [
                ...listeners
            ].reverse()){
                const consumed = listener(customEvent);
                if (consumed) {
                    return true;
                }
            }
        }
        return false;
    }
}
const eventDispatcher = new EventDispatcher();
}),
"[project]/apps/readest-app/src/utils/throttle.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "throttle",
    ()=>throttle
]);
const throttle = (func, delay, options = {
    emitLast: true
})=>{
    let lastCall = 0;
    let timeout = null;
    let lastArgs = null;
    return (...args)=>{
        const now = Date.now();
        const remaining = delay - (now - lastCall);
        const callFunc = ()=>{
            lastCall = Date.now();
            timeout = null;
            func(...args);
        };
        if (remaining <= 0) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            callFunc();
        } else {
            lastArgs = args;
            if (!timeout) {
                timeout = setTimeout(()=>{
                    timeout = null;
                    if (lastArgs && options.emitLast) {
                        func(...lastArgs);
                        lastArgs = null;
                    }
                }, remaining);
            }
        }
    };
};
}),
"[project]/apps/readest-app/src/utils/jwt.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createJWT",
    ()=>createJWT,
    "extractToken",
    ()=>extractToken,
    "getCredentials",
    ()=>getCredentials,
    "validateCredentials",
    ()=>validateCredentials,
    "verifyJWT",
    ()=>verifyJWT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$10$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$jwt$2f$verify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/jose@5.10.0/node_modules/jose/dist/node/esm/jwt/verify.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$10$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$jwt$2f$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/jose@5.10.0/node_modules/jose/dist/node/esm/jwt/sign.js [app-ssr] (ecmascript)");
;
// 单用户认证配置
// 为确保中间件与API一致，开发环境使用固定默认密钥
const SECRET_KEY = process.env['AUTH_SECRET'] || 'dev-secret';
const USER_PASSWORD = process.env['AUTH_PASSWORD'] || 'changeme-' + Math.random().toString(36).substring(2, 15);
const USERNAME = 'xingjjjjj';
// 认证信息已在 .env.web 中配置，无需在启动时打印（避免多进程重复打印）
// if (typeof window === 'undefined') {
//     console.log('\n========== READEST AUTHENTICATION ==========');
//     console.log(`Username: ${USERNAME}`);
//     console.log(`Password: ${USER_PASSWORD}`);
//     console.log(`Secret Key: ${SECRET_KEY}`);
//     console.log('==========================================\n');
// }
const key = new TextEncoder().encode(SECRET_KEY);
async function createJWT(username) {
    const token = await new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$10$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$jwt$2f$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SignJWT"]({
        username
    }).setProtectedHeader({
        alg: 'HS256'
    }).setIssuedAt().setExpirationTime('30d').sign(key);
    return token;
}
async function verifyJWT(token) {
    try {
        const verified = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$10$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$jwt$2f$verify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jwtVerify"])(token, key);
        return verified.payload;
    } catch  {
        return null;
    }
}
function validateCredentials(username, password) {
    return username === USERNAME && password === USER_PASSWORD;
}
function extractToken(authHeader) {
    if (!authHeader) return null;
    const parts = authHeader.split(' ');
    if (parts.length !== 2 || parts[0] !== 'Bearer') {
        return null;
    }
    return parts[1] ?? null;
}
function getCredentials() {
    return {
        username: USERNAME,
        password: USER_PASSWORD,
        secret: SECRET_KEY
    };
}
}),
"[project]/apps/readest-app/src/utils/access.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "STORAGE_QUOTA_GRACE_BYTES",
    ()=>STORAGE_QUOTA_GRACE_BYTES,
    "getAccessToken",
    ()=>getAccessToken,
    "getDailyTranslationPlanData",
    ()=>getDailyTranslationPlanData,
    "getStoragePlanData",
    ()=>getStoragePlanData,
    "getSubscriptionPlan",
    ()=>getSubscriptionPlan,
    "getTranslationPlanData",
    ()=>getTranslationPlanData,
    "getUserID",
    ()=>getUserID,
    "getUserProfilePlan",
    ()=>getUserProfilePlan,
    "validateUserAndToken",
    ()=>validateUserAndToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jwt$2d$decode$40$4$2e$0$2e$0$2f$node_modules$2f$jwt$2d$decode$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/jwt-decode@4.0.0/node_modules/jwt-decode/build/esm/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$jwt$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/jwt.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/constants.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/environment.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$translators$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/translators/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
;
const getSubscriptionPlan = (token)=>{
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jwt$2d$decode$40$4$2e$0$2e$0$2f$node_modules$2f$jwt$2d$decode$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jwtDecode"])(token) || {};
    return data['plan'] || 'free';
};
const getUserProfilePlan = (token)=>{
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jwt$2d$decode$40$4$2e$0$2e$0$2f$node_modules$2f$jwt$2d$decode$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jwtDecode"])(token) || {};
    let plan = data['plan'] || 'free';
    if (plan === 'free') {
        const purchasedQuota = data['storage_purchased_bytes'] || 0;
        if (purchasedQuota > 0) {
            plan = 'purchase';
        }
    }
    return plan;
};
const STORAGE_QUOTA_GRACE_BYTES = 10 * 1024 * 1024; // 10 MB grace
const getStoragePlanData = (token)=>{
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jwt$2d$decode$40$4$2e$0$2e$0$2f$node_modules$2f$jwt$2d$decode$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jwtDecode"])(token) || {};
    const plan = data['plan'] || 'free';
    const usage = data['storage_usage_bytes'] || 0;
    const purchasedQuota = data['storage_purchased_bytes'] || 0;
    const fixedQuota = parseInt(process.env['NEXT_PUBLIC_STORAGE_FIXED_QUOTA'] || '0');
    const planQuota = fixedQuota || __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_STORAGE_QUOTA"][plan] || __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_STORAGE_QUOTA"]['free'];
    const quota = planQuota + purchasedQuota;
    return {
        plan,
        usage,
        quota
    };
};
const getTranslationPlanData = (token)=>{
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jwt$2d$decode$40$4$2e$0$2e$0$2f$node_modules$2f$jwt$2d$decode$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jwtDecode"])(token) || {};
    const plan = data['plan'] || 'free';
    const usage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$translators$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDailyUsage"])() || 0;
    const quota = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_DAILY_TRANSLATION_QUOTA"][plan];
    return {
        plan,
        usage,
        quota
    };
};
const getDailyTranslationPlanData = (token)=>{
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jwt$2d$decode$40$4$2e$0$2e$0$2f$node_modules$2f$jwt$2d$decode$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jwtDecode"])(token) || {};
    const plan = data['plan'] || 'free';
    const fixedQuota = parseInt(process.env['NEXT_PUBLIC_TRANSLATION_FIXED_QUOTA'] || '0');
    const quota = fixedQuota || __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_DAILY_TRANSLATION_QUOTA"][plan] || __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_DAILY_TRANSLATION_QUOTA"]['free'];
    return {
        plan,
        quota
    };
};
const getAccessToken = async ()=>{
    // Get token from localStorage (client-side) or from request (server-side)
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isWebAppPlatform"])()) {
        return localStorage.getItem('token') ?? null;
    }
    return null;
};
const getUserID = async ()=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isWebAppPlatform"])()) {
        const user = localStorage.getItem('user') ?? '{}';
        return JSON.parse(user).id ?? null;
    }
    return null;
};
const validateUserAndToken = async (authHeader)=>{
    if (!authHeader) return {};
    const token = authHeader.replace('Bearer ', '');
    try {
        const payload = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$jwt$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verifyJWT"])(token);
        if (!payload) return {};
        return {
            user: {
                id: 'xingjjjjj',
                email: 'admin@local'
            },
            token
        };
    } catch (error) {
        return {};
    }
};
}),
"[project]/apps/readest-app/src/utils/transfer.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UploadFileError",
    ()=>UploadFileError,
    "tauriDownload",
    ()=>tauriDownload,
    "tauriUpload",
    ()=>tauriUpload,
    "webDownload",
    ()=>webDownload,
    "webUpload",
    ()=>webUpload
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tauri-apps+api@2.9.1/node_modules/@tauri-apps/api/core.js [app-ssr] (ecmascript)");
;
var UploadFileError = /*#__PURE__*/ function(UploadFileError) {
    UploadFileError["Unauthorized"] = "Unauthorized access";
    UploadFileError["DownloadFailed"] = "File download failed";
    return UploadFileError;
}({});
const webUpload = (file, uploadUrl, onProgress)=>{
    return new Promise((resolve, reject)=>{
        const startTime = Date.now();
        const xhr = new XMLHttpRequest();
        xhr.open('PUT', uploadUrl, true);
        xhr.upload.onprogress = (event)=>{
            if (onProgress && event.lengthComputable) {
                onProgress({
                    progress: event.loaded,
                    total: event.total,
                    transferSpeed: event.loaded / ((Date.now() - startTime) / 1000)
                });
            }
        };
        xhr.onload = ()=>{
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve();
            } else {
                reject(new Error(`Upload failed with status ${xhr.status}`));
            }
        };
        xhr.onerror = ()=>reject(new Error('Upload failed'));
        xhr.send(file);
    });
};
const webDownload = async (downloadUrl, onProgress, headers)=>{
    const response = await fetch(downloadUrl, {
        method: 'GET',
        headers: headers ? headers : undefined
    });
    if (!response.ok) {
        if (response.status === 401 || response.status === 403) {
            throw new Error("Unauthorized access");
        }
        throw new Error("File download failed");
    }
    const responseHeaders = Object.fromEntries(response.headers.entries());
    const contentLength = response.headers.get('Content-Length') || response.headers.get('X-Content-Length');
    if (!contentLength) throw new Error('Cannot track progress: Content-Length missing');
    const totalSize = parseInt(contentLength, 10);
    let receivedSize = 0;
    const reader = response.body.getReader();
    const chunks = [];
    const startTime = Date.now();
    while(true){
        const { done, value } = await reader.read();
        if (done) break;
        chunks.push(value);
        receivedSize += value.length;
        if (onProgress) {
            onProgress({
                progress: receivedSize,
                total: totalSize,
                transferSpeed: receivedSize / ((Date.now() - startTime) / 1000)
            });
        }
    }
    return {
        headers: responseHeaders,
        blob: new Blob(chunks)
    };
};
const tauriUpload = async (url, filePath, method, progressHandler, headers)=>{
    const ids = new Uint32Array(1);
    window.crypto.getRandomValues(ids);
    const id = ids[0];
    const onProgress = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Channel"]();
    if (progressHandler) {
        onProgress.onmessage = progressHandler;
    }
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invoke"])('upload_file', {
        id,
        url,
        filePath,
        method,
        headers: headers ?? {},
        onProgress
    });
};
const tauriDownload = async (url, filePath, progressHandler, headers, body, singleThreaded, skipSslVerification)=>{
    const ids = new Uint32Array(1);
    window.crypto.getRandomValues(ids);
    const id = ids[0];
    const onProgress = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Channel"]();
    if (progressHandler) {
        onProgress.onmessage = progressHandler;
    }
    const responseHeaders = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invoke"])('download_file', {
        id,
        url,
        filePath,
        headers: headers ?? {},
        onProgress,
        body,
        singleThreaded,
        skipSslVerification
    });
    return responseHeaders;
};
}),
"[project]/apps/readest-app/src/utils/ua.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseWebViewInfo",
    ()=>parseWebViewInfo,
    "parseWebViewVersion",
    ()=>parseWebViewVersion
]);
const parseWebViewInfo = (appService)=>{
    const ua = navigator.userAgent;
    if (appService?.isAndroidApp) {
        // Android WebView
        const chromeMatch = ua.match(/Chrome\/([0-9.]+)/);
        return chromeMatch ? `WebView ${chromeMatch[1]}` : 'Android WebView';
    } else if (appService?.isIOSApp) {
        // iOS WebView
        const webkitMatch = ua.match(/AppleWebKit\/([0-9.]+)/);
        return webkitMatch ? `WebView ${webkitMatch[1]}` : 'iOS WebView';
    } else if (appService?.isMacOSApp) {
        // macOS WebView
        const webkitMatch = ua.match(/AppleWebKit\/([0-9.]+)/);
        return webkitMatch ? `WebView ${webkitMatch[1]}` : 'macOS WebView';
    } else if (appService?.appPlatform === 'tauri' && appService?.osPlatform === 'windows') {
        // Windows WebView2
        const match = ua.match(/Edg\/([0-9.]+)/);
        return match ? `Edge ${match[1]}` : 'Edge WebView2';
    } else if (appService?.appPlatform === 'tauri' && appService?.osPlatform === 'linux') {
        // Linux WebView
        const match = ua.match(/AppleWebKit\/([0-9.]+)/);
        return match ? `WebView ${match[1]}` : 'Linux WebView';
    } else if (ua.includes('CriOS') && ua.includes('Mobile/') && ua.includes('Safari')) {
        // iOS Chrome WebView
        const match = ua.match(/CriOS\/([0-9.]+)/);
        return match ? `Chrome ${match[1]}` : 'iOS Chrome';
    } else if (ua.includes('FxiOS') && ua.includes('Mobile/') && ua.includes('Safari')) {
        // iOS Firefox WebView
        const match = ua.match(/FxiOS\/([0-9.]+)/);
        return match ? `Firefox ${match[1]}` : 'iOS Firefox';
    } else if (ua.includes('Chrome') && ua.includes('AppleWebKit') && ua.includes('Macintosh')) {
        // macOS Chrome
        const match = ua.match(/Chrome\/([0-9.]+)/);
        return match ? `Chrome ${match[1]}` : 'macOS Chrome';
    } else if (ua.includes('Safari') && ua.includes('AppleWebKit') && ua.includes('Macintosh')) {
        // macOS Safari
        const match = ua.match(/Safari\/([0-9.]+)/);
        return match ? `Safari ${match[1]}` : 'macOS Safari';
    } else if (ua.includes('Edg/')) {
        // Microsoft Edge
        const match = ua.match(/Edg\/([0-9.]+)/);
        return match ? `Edge ${match[1]}` : 'Edge WebView';
    } else if (ua.includes('Firefox/')) {
        // Firefox
        const match = ua.match(/Firefox\/([0-9.]+)/);
        return match ? `Firefox ${match[1]}` : 'Firefox Gecko';
    } else if (ua.includes('Chrome/') && !ua.includes('Chromium')) {
        // Chrome
        const match = ua.match(/Chrome\/([0-9.]+)/);
        return match ? `Chrome ${match[1]}` : 'Chrome';
    } else if (ua.includes('Chromium/')) {
        // Chromium
        const match = ua.match(/Chromium\/([0-9.]+)/);
        return match ? `Chromium ${match[1]}` : 'Chromium';
    } else if (ua.includes('MSIE ')) {
        // Internet Explorer
        const match = ua.match(/MSIE ([0-9.]+)/);
        return match ? `IE ${match[1]}` : 'Internet Explorer';
    } else {
        return 'Unknown';
    }
};
const parseWebViewVersion = (appService)=>{
    const webViewInfo = parseWebViewInfo(appService);
    const versionMatch = webViewInfo.match(/([0-9]+)\./);
    return versionMatch ? parseFloat(versionMatch[1]) : 0;
};
}),
"[project]/apps/readest-app/src/utils/simplecc.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "initSimpleCC",
    ()=>initSimpleCC,
    "runSimpleCC",
    ()=>runSimpleCC
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$public$2f$vendor$2f$simplecc$2f$simplecc_wasm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/public/vendor/simplecc/simplecc_wasm.js [app-ssr] (ecmascript)");
;
let initialized = false;
const initSimpleCC = async ()=>{
    if (initialized) return;
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$public$2f$vendor$2f$simplecc$2f$simplecc_wasm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])('/vendor/simplecc/simplecc_wasm_bg.wasm');
    initialized = true;
};
const convertReverseMap = {
    none: 'none',
    s2t: 't2s',
    t2s: 's2t',
    s2tw: 'tw2s',
    s2hk: 'hk2s',
    s2twp: 'tw2sp',
    tw2s: 's2tw',
    hk2s: 's2hk',
    tw2sp: 's2twp'
};
const runSimpleCC = (text, variant, reverse = false)=>{
    return reverse ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$public$2f$vendor$2f$simplecc$2f$simplecc_wasm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simplecc"])(text, convertReverseMap[variant]) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$public$2f$vendor$2f$simplecc$2f$simplecc_wasm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simplecc"])(text, variant);
};
;
}),
"[project]/apps/readest-app/src/utils/toc.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "findParentPath",
    ()=>findParentPath,
    "findTocItemBS",
    ()=>findTocItemBS,
    "updateToc",
    ()=>updateToc
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$libs$2f$document$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/libs/document.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$simplecc$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/simplecc.ts [app-ssr] (ecmascript)");
;
;
const findParentPath = (toc, href)=>{
    for (const item of toc){
        if (item.href === href) {
            return [
                item
            ];
        }
        if (item.subitems) {
            const path = findParentPath(item.subitems, href);
            if (path.length) {
                return [
                    item,
                    ...path
                ];
            }
        }
    }
    return [];
};
const findTocItemBS = (toc, cfi)=>{
    let left = 0;
    let right = toc.length - 1;
    let result = null;
    while(left <= right){
        const mid = Math.floor((left + right) / 2);
        const item = toc[mid];
        const currentCfi = toc[mid].cfi || '';
        const comparison = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$libs$2f$document$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CFI"].compare(currentCfi, cfi);
        if (comparison === 0) {
            return findInSubitems(item, cfi) ?? item;
        } else if (comparison < 0) {
            result = findInSubitems(item, cfi) ?? item;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return result;
};
const findInSubitems = (item, cfi)=>{
    if (!item.subitems?.length) return null;
    return findTocItemBS(item.subitems, cfi);
};
const updateToc = async (bookDoc, sortedTOC, convertChineseVariant)=>{
    const items = bookDoc?.toc || [];
    if (!items.length) return;
    if (convertChineseVariant && convertChineseVariant !== 'none') {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$simplecc$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initSimpleCC"])();
        convertTocLabels(items, convertChineseVariant);
    }
    const sections = bookDoc?.sections || [];
    if (!sections.length) return;
    const sizes = sections.map((s)=>s.linear != 'no' && s.size > 0 ? s.size : 0);
    let cumulativeSize = 0;
    const cumulativeSizes = sizes.reduce((acc, size)=>{
        acc.push(cumulativeSize);
        cumulativeSize += size;
        return acc;
    }, []);
    const totalSize = cumulativeSizes[cumulativeSizes.length - 1] || 0;
    const sizePerLoc = 1500;
    sections.forEach((section, index)=>{
        section.location = {
            current: Math.floor(cumulativeSizes[index] / sizePerLoc),
            next: Math.floor((cumulativeSizes[index] + sizes[index]) / sizePerLoc),
            total: Math.floor(totalSize / sizePerLoc)
        };
    });
    const sectionsMap = sections.reduce((map, section)=>{
        map[section.id] = section;
        return map;
    }, {});
    updateTocData(bookDoc, items, sections, sectionsMap);
    if (sortedTOC) {
        sortTocItems(items);
    }
};
const convertTocLabels = (items, convertChineseVariant)=>{
    items.forEach((item)=>{
        if (item.label) {
            item.label = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$simplecc$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["runSimpleCC"])(item.label, convertChineseVariant);
        }
        if (item.subitems) {
            convertTocLabels(item.subitems, convertChineseVariant);
        }
    });
};
const updateTocData = (bookDoc, items, sections, sectionsMap, index = 0)=>{
    items.forEach((item)=>{
        item.id ??= index++;
        if (item.href) {
            const id = bookDoc.splitTOCHref(item.href)[0];
            const section = sectionsMap[id];
            if (section) {
                item.cfi = section.cfi;
                // Add location only when toc item is at the same level as the section
                // otherwise the location will not be accurate
                if (id === item.href || items.length <= sections.length) {
                    item.location = section.location;
                }
            }
        }
        if (item.subitems) {
            index = updateTocData(bookDoc, item.subitems, sections, sectionsMap, index);
        }
    });
    return index;
};
const sortTocItems = (items)=>{
    items.sort((a, b)=>{
        if (a.location && b.location) {
            return a.location.current - b.location.current;
        }
        return 0;
    });
};
}),
"[project]/apps/readest-app/src/utils/sanitize.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sanitizeString",
    ()=>sanitizeString
]);
const sanitizeString = (str)=>{
    if (!str) return str;
    return str.replace(/\u0000/g, '');
};
}),
"[project]/apps/readest-app/src/utils/transform.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "transformBookConfigFromDB",
    ()=>transformBookConfigFromDB,
    "transformBookConfigToDB",
    ()=>transformBookConfigToDB,
    "transformBookFromDB",
    ()=>transformBookFromDB,
    "transformBookNoteFromDB",
    ()=>transformBookNoteFromDB,
    "transformBookNoteToDB",
    ()=>transformBookNoteToDB,
    "transformBookToDB",
    ()=>transformBookToDB
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$sanitize$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/sanitize.ts [app-ssr] (ecmascript)");
;
const transformBookConfigToDB = (bookConfig, userId)=>{
    const { bookHash, metaHash, progress, location, xpointer, searchConfig, viewSettings, updatedAt } = bookConfig;
    return {
        user_id: userId,
        book_hash: bookHash,
        meta_hash: metaHash,
        location: location,
        xpointer: xpointer,
        progress: progress && JSON.stringify(progress),
        search_config: searchConfig && JSON.stringify(searchConfig),
        view_settings: viewSettings && JSON.stringify(viewSettings),
        updated_at: new Date(updatedAt ?? Date.now()).toISOString()
    };
};
const transformBookConfigFromDB = (dbBookConfig)=>{
    const { book_hash, meta_hash, progress, location, xpointer, search_config, view_settings, updated_at } = dbBookConfig;
    return {
        bookHash: book_hash,
        metaHash: meta_hash,
        location,
        xpointer,
        progress: progress && JSON.parse(progress),
        searchConfig: search_config && JSON.parse(search_config),
        viewSettings: view_settings && JSON.parse(view_settings),
        updatedAt: new Date(updated_at).getTime()
    };
};
const transformBookToDB = (book, userId)=>{
    const { hash, metaHash, format, title, sourceTitle, author, groupId, groupName, tags, progress, metadata, createdAt, updatedAt, deletedAt, uploadedAt } = book;
    return {
        user_id: userId,
        book_hash: hash,
        meta_hash: metaHash,
        format,
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$sanitize$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sanitizeString"])(title),
        author: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$sanitize$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sanitizeString"])(author),
        group_id: groupId,
        group_name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$sanitize$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sanitizeString"])(groupName),
        tags: tags,
        progress: progress,
        source_title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$sanitize$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sanitizeString"])(sourceTitle),
        metadata: metadata ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$sanitize$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sanitizeString"])(JSON.stringify(metadata)) : null,
        created_at: new Date(createdAt ?? Date.now()).toISOString(),
        updated_at: new Date(updatedAt ?? Date.now()).toISOString(),
        deleted_at: deletedAt ? new Date(deletedAt).toISOString() : null,
        uploaded_at: uploadedAt ? new Date(uploadedAt).toISOString() : null
    };
};
const transformBookFromDB = (dbBook)=>{
    const { book_hash, meta_hash, format, title, author, group_id, group_name, tags, progress, source_title, metadata, created_at, updated_at, deleted_at, uploaded_at } = dbBook;
    return {
        hash: book_hash,
        metaHash: meta_hash,
        format: format,
        title,
        author,
        groupId: group_id,
        groupName: group_name,
        tags: tags,
        progress: progress,
        sourceTitle: source_title,
        metadata: metadata ? JSON.parse(metadata) : null,
        createdAt: new Date(created_at).getTime(),
        updatedAt: new Date(updated_at).getTime(),
        deletedAt: deleted_at ? new Date(deleted_at).getTime() : null,
        uploadedAt: uploaded_at ? new Date(uploaded_at).getTime() : null
    };
};
const transformBookNoteToDB = (bookNote, userId)=>{
    const { bookHash, metaHash, id, type, cfi, text, style, color, note, createdAt, updatedAt, deletedAt } = bookNote;
    return {
        user_id: userId,
        book_hash: bookHash,
        meta_hash: metaHash,
        id,
        type,
        cfi,
        text: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$sanitize$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sanitizeString"])(text),
        style,
        color,
        note,
        created_at: new Date(createdAt ?? Date.now()).toISOString(),
        updated_at: new Date(updatedAt ?? Date.now()).toISOString(),
        // note that only null deleted_at is updated to the database, undefined is not
        deleted_at: deletedAt ? new Date(deletedAt).toISOString() : null
    };
};
const transformBookNoteFromDB = (dbBookNote)=>{
    const { book_hash, meta_hash, id, type, cfi, text, style, color, note, created_at, updated_at, deleted_at } = dbBookNote;
    return {
        bookHash: book_hash,
        metaHash: meta_hash,
        id,
        type: type,
        cfi,
        text,
        style: style,
        color: color,
        note,
        createdAt: new Date(created_at).getTime(),
        updatedAt: new Date(updated_at).getTime(),
        deletedAt: deleted_at ? new Date(deleted_at).getTime() : null
    };
};
}),
"[project]/apps/readest-app/src/utils/permission.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "requestStoragePermission",
    ()=>requestStoragePermission
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tauri-apps+api@2.9.1/node_modules/@tauri-apps/api/core.js [app-ssr] (ecmascript)");
;
const requestStoragePermission = async ()=>{
    let permission = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invoke"])('plugin:native-bridge|checkPermissions');
    if (permission.manageStorage !== 'granted') {
        permission = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invoke"])('plugin:native-bridge|request_manage_storage_permission');
    }
    return permission.manageStorage === 'granted';
};
}),
"[project]/apps/readest-app/src/utils/window.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "tauriGetAlwaysOnTop",
    ()=>tauriGetAlwaysOnTop,
    "tauriGetWindowLogicalPosition",
    ()=>tauriGetWindowLogicalPosition,
    "tauriHandleClose",
    ()=>tauriHandleClose,
    "tauriHandleMinimize",
    ()=>tauriHandleMinimize,
    "tauriHandleOnCloseWindow",
    ()=>tauriHandleOnCloseWindow,
    "tauriHandleOnWindowFocus",
    ()=>tauriHandleOnWindowFocus,
    "tauriHandleSetAlwaysOnTop",
    ()=>tauriHandleSetAlwaysOnTop,
    "tauriHandleToggleFullScreen",
    ()=>tauriHandleToggleFullScreen,
    "tauriHandleToggleMaximize",
    ()=>tauriHandleToggleMaximize,
    "tauriQuitApp",
    ()=>tauriQuitApp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$window$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tauri-apps+api@2.9.1/node_modules/@tauri-apps/api/window.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$event$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tauri-apps+api@2.9.1/node_modules/@tauri-apps/api/event.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$plugin$2d$process$40$2$2e$3$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$plugin$2d$process$2f$dist$2d$js$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tauri-apps+plugin-process@2.3.1/node_modules/@tauri-apps/plugin-process/dist-js/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$plugin$2d$os$40$2$2e$3$2e$2$2f$node_modules$2f40$tauri$2d$apps$2f$plugin$2d$os$2f$dist$2d$js$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tauri-apps+plugin-os@2.3.2/node_modules/@tauri-apps/plugin-os/dist-js/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/event.ts [app-ssr] (ecmascript)");
;
;
;
;
;
const tauriGetWindowLogicalPosition = async ()=>{
    const currentWindow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$window$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getCurrentWindow"])();
    const factor = await currentWindow.scaleFactor();
    const physicalPos = await currentWindow.outerPosition();
    return {
        x: physicalPos.x / factor,
        y: physicalPos.y / factor
    };
};
const tauriHandleMinimize = async ()=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$window$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getCurrentWindow"])().minimize();
};
// workaround to reset transparent background when toggling fullscreen/maximize
const linuxWindowRestoreTransparentBg = async ()=>{
    const currentSize = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$window$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getCurrentWindow"])().innerSize();
    currentSize.width -= 1;
    currentSize.height -= 1;
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$window$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getCurrentWindow"])().setSize(currentSize);
    setTimeout(async ()=>{
        const currentSize = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$window$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getCurrentWindow"])().innerSize();
        currentSize.width += 1;
        currentSize.height += 1;
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$window$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getCurrentWindow"])().setSize(currentSize);
    }, 100);
};
const tauriHandleToggleMaximize = async ()=>{
    const currentWindow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$window$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getCurrentWindow"])();
    const isFullscreen = await currentWindow.isFullscreen();
    if (isFullscreen) {
        await currentWindow.setFullscreen(false);
        await currentWindow.unmaximize();
    } else {
        await currentWindow.toggleMaximize();
    }
    if (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$plugin$2d$os$40$2$2e$3$2e$2$2f$node_modules$2f40$tauri$2d$apps$2f$plugin$2d$os$2f$dist$2d$js$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["type"])() === 'linux') {
        linuxWindowRestoreTransparentBg();
    }
};
const tauriHandleClose = async ()=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$window$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getCurrentWindow"])().close();
};
const tauriHandleOnCloseWindow = async (callback)=>{
    const currentWindow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$window$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getCurrentWindow"])();
    return await currentWindow.onCloseRequested(async (event)=>{
        event.preventDefault();
        await callback();
        if (currentWindow.label.startsWith('reader')) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$event$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["emitTo"])('main', 'close-reader-window', {
                label: currentWindow.label
            });
            setTimeout(()=>currentWindow.destroy(), 300);
        } else if (currentWindow.label === 'main') {
            await currentWindow.destroy();
        }
    });
};
const tauriHandleToggleFullScreen = async ()=>{
    const currentWindow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$window$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getCurrentWindow"])();
    const isFullscreen = await currentWindow.isFullscreen();
    const isMaximized = await currentWindow.isMaximized();
    if (isMaximized) {
        await currentWindow.unmaximize();
    } else {
        await currentWindow.setFullscreen(!isFullscreen);
    }
    if (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$plugin$2d$os$40$2$2e$3$2e$2$2f$node_modules$2f40$tauri$2d$apps$2f$plugin$2d$os$2f$dist$2d$js$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["type"])() === 'linux') {
        linuxWindowRestoreTransparentBg();
    }
};
const tauriHandleSetAlwaysOnTop = async (isAlwaysOnTop)=>{
    const currentWindow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$window$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getCurrentWindow"])();
    await currentWindow.setAlwaysOnTop(isAlwaysOnTop);
};
const tauriGetAlwaysOnTop = async ()=>{
    const currentWindow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$window$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getCurrentWindow"])();
    return await currentWindow.isAlwaysOnTop();
};
const tauriHandleOnWindowFocus = async (callback)=>{
    const currentWindow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$window$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getCurrentWindow"])();
    return currentWindow.listen(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$event$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TauriEvent"].WINDOW_FOCUS, async ()=>{
        await callback();
    });
};
const tauriQuitApp = async ()=>{
    await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["eventDispatcher"].dispatch('quit-app');
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$plugin$2d$process$40$2$2e$3$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$plugin$2d$process$2f$dist$2d$js$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["exit"])(0);
};
}),
"[project]/apps/readest-app/src/utils/validation.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Validation utilities for metadata fields
 */ // ISO 639-1 language codes (2-letter codes)
// prettier-ignore
__turbopack_context__.s([
    "validateAndNormalizeDate",
    ()=>validateAndNormalizeDate,
    "validateAndNormalizeLanguage",
    ()=>validateAndNormalizeLanguage,
    "validateAndNormalizeSubjects",
    ()=>validateAndNormalizeSubjects,
    "validateISBN",
    ()=>validateISBN
]);
const ISO_639_1_CODES = new Set([
    'aa',
    'ab',
    'ae',
    'af',
    'ak',
    'am',
    'an',
    'ar',
    'as',
    'av',
    'ay',
    'az',
    'ba',
    'be',
    'bg',
    'bh',
    'bi',
    'bm',
    'bn',
    'bo',
    'br',
    'bs',
    'ca',
    'ce',
    'ch',
    'co',
    'cr',
    'cs',
    'cu',
    'cv',
    'cy',
    'da',
    'de',
    'dv',
    'dz',
    'ee',
    'el',
    'en',
    'eo',
    'es',
    'et',
    'eu',
    'fa',
    'ff',
    'fi',
    'fj',
    'fo',
    'fr',
    'fy',
    'ga',
    'gd',
    'gl',
    'gn',
    'gu',
    'gv',
    'ha',
    'he',
    'hi',
    'ho',
    'hr',
    'ht',
    'hu',
    'hy',
    'hz',
    'ia',
    'id',
    'ie',
    'ig',
    'ii',
    'ik',
    'io',
    'is',
    'it',
    'iu',
    'ja',
    'jv',
    'ka',
    'kg',
    'ki',
    'kj',
    'kk',
    'kl',
    'km',
    'kn',
    'ko',
    'kr',
    'ks',
    'ku',
    'kv',
    'kw',
    'ky',
    'la',
    'lb',
    'lg',
    'li',
    'ln',
    'lo',
    'lt',
    'lu',
    'lv',
    'mg',
    'mh',
    'mi',
    'mk',
    'ml',
    'mn',
    'mr',
    'ms',
    'mt',
    'my',
    'na',
    'nb',
    'nd',
    'ne',
    'ng',
    'nl',
    'nn',
    'no',
    'nr',
    'nv',
    'ny',
    'oc',
    'oj',
    'om',
    'or',
    'os',
    'pa',
    'pi',
    'pl',
    'ps',
    'pt',
    'qu',
    'rm',
    'rn',
    'ro',
    'ru',
    'rw',
    'sa',
    'sc',
    'sd',
    'se',
    'sg',
    'si',
    'sk',
    'sl',
    'sm',
    'sn',
    'so',
    'sq',
    'sr',
    'ss',
    'st',
    'su',
    'sv',
    'sw',
    'ta',
    'te',
    'tg',
    'th',
    'ti',
    'tk',
    'tl',
    'tn',
    'to',
    'tr',
    'ts',
    'tt',
    'tw',
    'ty',
    'ug',
    'uk',
    'ur',
    'uz',
    've',
    'vi',
    'vo',
    'wa',
    'wo',
    'xh',
    'yi',
    'yo',
    'za',
    'zh',
    'zu'
]);
const validateAndNormalizeDate = (dateInput)=>{
    if (!dateInput) {
        return {
            isValid: true,
            value: ''
        };
    }
    const cleaned = dateInput.trim();
    // Pattern for YYYY, YYYY-MM, or YYYY-MM-DD
    const datePatterns = [
        {
            pattern: /^\d{4}$/,
            format: 'YYYY'
        },
        {
            pattern: /^\d{4}-\d{2}$/,
            format: 'YYYY-MM'
        },
        {
            pattern: /^\d{4}-\d{2}-\d{2}$/,
            format: 'YYYY-MM-DD'
        }
    ];
    const matchingPattern = datePatterns.find(({ pattern })=>pattern.test(cleaned));
    if (!matchingPattern) {
        return {
            isValid: false,
            value: null,
            error: 'Invalid date format. Use YYYY, YYYY-MM, or YYYY-MM-DD'
        };
    }
    try {
        let date;
        if (cleaned.length === 4) {
            // YYYY format - set to January 1st
            date = new Date(`${cleaned}-01-01`);
        } else if (cleaned.length === 7) {
            // YYYY-MM format - set to 1st day of month
            date = new Date(`${cleaned}-01`);
        } else {
            // YYYY-MM-DD format
            date = new Date(cleaned);
        }
        // Check if date is valid
        if (isNaN(date.getTime())) {
            return {
                isValid: false,
                value: null,
                error: 'Invalid date'
            };
        }
        // Check if year is reasonable (between 1000 and current year + 10)
        const year = date.getFullYear();
        const currentYear = new Date().getFullYear();
        if (year < 1000 || year > currentYear + 10) {
            return {
                isValid: false,
                value: null,
                error: `Year must be between 1000 and ${currentYear + 10}`
            };
        }
        // Validate month and day if provided
        if (cleaned.length >= 7) {
            const month = parseInt(cleaned.substring(5, 7));
            if (month < 1 || month > 12) {
                return {
                    isValid: false,
                    value: null,
                    error: 'Month must be between 01 and 12'
                };
            }
        }
        if (cleaned.length === 10) {
            const day = parseInt(cleaned.substring(8, 10));
            if (day < 1 || day > 31) {
                return {
                    isValid: false,
                    value: null,
                    error: 'Day must be between 01 and 31'
                };
            }
        }
        return {
            isValid: true,
            value: date.toISOString()
        };
    } catch  {
        return {
            isValid: false,
            value: null,
            error: 'Failed to parse date'
        };
    }
};
const validateAndNormalizeLanguage = (languageInput)=>{
    if (!languageInput) {
        return {
            isValid: true,
            value: 'unknown'
        };
    }
    const cleaned = languageInput.trim().toLowerCase();
    // Pattern for language codes with optional country codes (e.g., en-US, zh-CN)
    const languagePattern = /^[a-z]{2}(-[a-z]{2,4})?$/i;
    if (!languagePattern.test(cleaned)) {
        return {
            isValid: false,
            value: null,
            error: 'Invalid language format. Use ISO 639-1 codes (e.g., en, zh-CN)'
        };
    }
    const languageCode = cleaned.substring(0, 2);
    if (!ISO_639_1_CODES.has(languageCode)) {
        return {
            isValid: false,
            value: null,
            error: `Invalid language code: ${languageCode}. Must be a valid ISO 639-1 code`
        };
    }
    return {
        isValid: true,
        value: cleaned
    };
};
const validateISBN = (isbn)=>{
    if (!isbn) {
        return {
            isValid: true,
            value: ''
        };
    }
    const cleaned = isbn.replace(/[-\s]/g, '');
    if (cleaned.length !== 10 && cleaned.length !== 13) {
        return {
            isValid: false,
            value: null,
            error: 'ISBN must be 10 or 13 digits'
        };
    }
    // Validate ISBN-10
    if (cleaned.length === 10) {
        const isValid = validateISBN10(cleaned);
        return {
            isValid,
            value: isValid ? cleaned : null,
            error: isValid ? undefined : 'Invalid ISBN-10 checksum'
        };
    }
    // Validate ISBN-13
    if (cleaned.length === 13) {
        const isValid = validateISBN13(cleaned);
        return {
            isValid,
            value: isValid ? cleaned : null,
            error: isValid ? undefined : 'Invalid ISBN-13 checksum'
        };
    }
    return {
        isValid: false,
        value: null,
        error: 'Invalid ISBN format'
    };
};
const validateISBN10 = (isbn)=>{
    let sum = 0;
    for(let i = 0; i < 9; i++){
        const digit = parseInt(isbn[i]);
        if (isNaN(digit)) return false;
        sum += digit * (10 - i);
    }
    const lastChar = isbn[9];
    const checkDigit = lastChar === 'X' ? 10 : parseInt(lastChar);
    if (isNaN(checkDigit)) return false;
    sum += checkDigit;
    return sum % 11 === 0;
};
const validateISBN13 = (isbn)=>{
    let sum = 0;
    for(let i = 0; i < 12; i++){
        const digit = parseInt(isbn[i]);
        if (isNaN(digit)) return false;
        sum += digit * (i % 2 === 0 ? 1 : 3);
    }
    const checkDigit = parseInt(isbn[12]);
    if (isNaN(checkDigit)) return false;
    const calculatedCheck = (10 - sum % 10) % 10;
    return checkDigit === calculatedCheck;
};
const validateAndNormalizeSubjects = (subjectsInput)=>{
    if (!subjectsInput) {
        return {
            isValid: true,
            value: []
        };
    }
    const subjects = subjectsInput.split(',').map((s)=>s.trim());
    const maxSubjects = 20;
    const maxSubjectLength = 100;
    if (subjects.length > maxSubjects) {
        return {
            isValid: false,
            value: null,
            error: `Too many subjects (max ${maxSubjects})`
        };
    }
    const tooLongSubject = subjects.find((s)=>s.length > maxSubjectLength);
    if (tooLongSubject) {
        return {
            isValid: false,
            value: null,
            error: `Subject too long (max ${maxSubjectLength} characters): ${tooLongSubject}`
        };
    }
    return {
        isValid: true,
        value: subjects
    };
};
}),
"[project]/apps/readest-app/src/utils/fetch.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchWithAuth",
    ()=>fetchWithAuth,
    "fetchWithTimeout",
    ()=>fetchWithTimeout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$access$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/access.ts [app-ssr] (ecmascript)");
;
const fetchWithTimeout = (url, options = {}, timeout = 10000)=>{
    const controller = new AbortController();
    const id = setTimeout(()=>controller.abort('Request timed out'), timeout);
    return fetch(url, {
        ...options,
        signal: controller.signal
    }).finally(()=>clearTimeout(id));
};
const fetchWithAuth = async (url, options)=>{
    const token = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$access$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAccessToken"])();
    if (!token) {
        throw new Error('Not authenticated');
    }
    const headers = {
        ...options.headers,
        Authorization: `Bearer ${token}`
    };
    const response = await fetch(url, {
        ...options,
        headers
    });
    if (!response.ok) {
        const errorData = await response.json();
        console.error('Error:', errorData.error || response.statusText);
        throw new Error(errorData.error || 'Request failed');
    }
    return response;
};
}),
"[project]/apps/readest-app/src/utils/network.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isLanAddress",
    ()=>isLanAddress
]);
const isLanAddress = (url)=>{
    try {
        const urlObj = new URL(url);
        const hostname = urlObj.hostname;
        if (hostname === 'localhost' || hostname === '127.0.0.1') {
            return true;
        }
        // Check for IPv4 private ranges
        const ipv4Regex = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/;
        const match = hostname.match(ipv4Regex);
        if (match) {
            const [, a, b, c, d] = match.map(Number);
            if (a === undefined || b === undefined || c === undefined || d === undefined) {
                return false;
            }
            // Validate IP format
            if (a > 255 || b > 255 || c > 255 || d > 255) {
                return false;
            }
            // Check private IP ranges:
            // 10.0.0.0/8 (10.0.0.0 to 10.255.255.255)
            if (a === 10) return true;
            // 172.16.0.0/12 (172.16.0.0 to 172.31.255.255)
            if (a === 172 && b >= 16 && b <= 31) return true;
            // 192.168.0.0/16 (192.168.0.0 to 192.168.255.255)
            if (a === 192 && b === 168) return true;
            // 169.254.0.0/16 (link-local addresses)
            if (a === 169 && b === 254) return true;
            // Tailscale IPv4 range: 100.64.0.0/10 (100.64.0.0 to 100.127.255.255)
            if (a === 100 && b >= 64 && b <= 127) return true;
        }
        // Check for IPv6 private addresses (simplified check)
        if (hostname.includes(':')) {
            if (hostname.startsWith('::1') || hostname.startsWith('fe80:') || hostname.startsWith('fc00:') || hostname.startsWith('fd00:')) {
                return true;
            }
        }
        return false;
    } catch  {
        return false;
    }
};
}),
"[project]/apps/readest-app/src/utils/os.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FILE_REVEAL_LABELS",
    ()=>FILE_REVEAL_LABELS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/misc.ts [app-ssr] (ecmascript)");
;
const FILE_REVEAL_LABELS = {
    macos: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stubTranslation"])('Reveal in Finder'),
    windows: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stubTranslation"])('Reveal in File Explorer'),
    linux: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stubTranslation"])('Reveal in Folder'),
    default: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stubTranslation"])('Reveal in Folder')
};
}),
"[project]/apps/readest-app/src/utils/highlightjs.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CODE_LANGUAGES",
    ()=>CODE_LANGUAGES,
    "manageSyntaxHighlighting",
    ()=>manageSyntaxHighlighting
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$highlight$2e$js$40$11$2e$11$2e$1$2f$node_modules$2f$highlight$2e$js$2f$es$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/highlight.js@11.11.1/node_modules/highlight.js/es/common.js [app-ssr] (ecmascript) <locals>");
;
const CODE_LANGUAGES = [
    'auto-detect',
    'bash',
    'c',
    'cpp',
    'csharp',
    'css',
    'diff',
    'go',
    'graphql',
    'ini',
    'java',
    'javascript',
    'json',
    'kotlin',
    'less',
    'lua',
    'makefile',
    'markdown',
    'objectivec',
    'perl',
    'php',
    'php-t',
    'python',
    'python-r',
    'r',
    'ruby',
    'rust',
    'scss',
    'shell',
    'sql',
    'swift',
    'typescript',
    'vbnet',
    'wasm',
    'xml',
    'yaml'
];
const manageSyntaxHighlighting = (doc, viewSettings)=>{
    const styleId = 'highlight-js-theme-style'; // arbitrary css id
    const { codeHighlighting, codeLanguage } = viewSettings;
    const existingStyleElement = doc.getElementById(styleId);
    if (existingStyleElement) {
        existingStyleElement.remove();
    }
    if (!codeHighlighting) {
        // If disabling, remove the stylesheet and applied classes
        const styleElement = doc.getElementById(styleId);
        if (styleElement) styleElement.remove();
        doc.querySelectorAll('pre').forEach((block)=>{
            if (block.dataset['highlighted']) {
                block.innerHTML = block.textContent || '';
            }
        });
        return;
    }
    const style = doc.createElement('style');
    style.id = styleId;
    style.textContent = getHighlightJsStyles();
    doc.head.appendChild(style);
    // Find all <pre> elements in available content
    const codeBlocks = doc.querySelectorAll('pre');
    // https://github.com/highlightjs/highlight.js/wiki/security
    // I believe this is valid in this use case to ignore this warning.
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$highlight$2e$js$40$11$2e$11$2e$1$2f$node_modules$2f$highlight$2e$js$2f$es$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].configure({
        ignoreUnescapedHTML: true
    });
    codeBlocks.forEach((block)=>{
        // remove any previously applied classes by hljs
        block.innerHTML = block.textContent || '';
        block.className = block.className.replace(/language-\S+/g, '');
        block.classList.remove('hljs');
        block.removeAttribute('data-highlighted');
        if (codeLanguage && codeLanguage !== 'auto-detect') {
            block.classList.add(`language-${codeLanguage}`);
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$highlight$2e$js$40$11$2e$11$2e$1$2f$node_modules$2f$highlight$2e$js$2f$es$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].highlightElement(block);
    });
};
/** Return either github light or dark theme */ const getHighlightJsStyles = ()=>{
    // Potential improvement: add more themes following this pattern.
    const githubLightTheme = `
  pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}/*!
  Theme: GitHub
  Description: Light theme as seen on github.com
  Author: github.com
  Maintainer: @Hirse
  Updated: 2021-05-15

  Outdated base version: https://github.com/primer/github-syntax-light
  Current colors taken from GitHub's CSS
  */.hljs{color:#24292e;background:#fff}.hljs-doctag,.hljs-keyword,.hljs-meta .hljs-keyword,.hljs-template-tag,.hljs-template-variable,.hljs-type,.hljs-variable.language_{color:#d73a49}.hljs-title,.hljs-title.class_,.hljs-title.class_.inherited__,.hljs-title.function_{color:#6f42c1}.hljs-attr,.hljs-attribute,.hljs-literal,.hljs-meta,.hljs-number,.hljs-operator,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-id,.hljs-variable{color:#005cc5}.hljs-meta .hljs-string,.hljs-regexp,.hljs-string{color:#032f62}.hljs-built_in,.hljs-symbol{color:#e36209}.hljs-code,.hljs-comment,.hljs-formula{color:#6a737d}.hljs-name,.hljs-quote,.hljs-selector-pseudo,.hljs-selector-tag{color:#22863a}.hljs-subst{color:#24292e}.hljs-section{color:#005cc5;font-weight:700}.hljs-bullet{color:#735c0f}.hljs-emphasis{color:#24292e;font-style:italic}.hljs-strong{color:#24292e;font-weight:700}.hljs-addition{color:#22863a;background-color:#f0fff4}.hljs-deletion{color:#b31d28;background-color:#ffeef0}
  `;
    const githubDarkTheme = `
  @media (prefers-color-scheme: dark) {
    pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}/*!
    Theme: GitHub Dark
    Description: Dark theme as seen on github.com
    Author: github.com
    Maintainer: @Hirse
    Updated: 2021-05-15
    
    Outdated base version: https://github.com/primer/github-syntax-dark
    Current colors taken from GitHub's CSS
    */.hljs{color:#c9d1d9;background:#0d1117}.hljs-doctag,.hljs-keyword,.hljs-meta .hljs-keyword,.hljs-template-tag,.hljs-template-variable,.hljs-type,.hljs-variable.language_{color:#ff7b72}.hljs-title,.hljs-title.class_,.hljs-title.class_.inherited__,.hljs-title.function_{color:#d2a8ff}.hljs-attr,.hljs-attribute,.hljs-literal,.hljs-meta,.hljs-number,.hljs-operator,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-id,.hljs-variable{color:#79c0ff}.hljs-meta .hljs-string,.hljs-regexp,.hljs-string{color:#a5d6ff}.hljs-built_in,.hljs-symbol{color:#ffa657}.hljs-code,.hljs-comment,.hljs-formula{color:#8b949e}.hljs-name,.hljs-quote,.hljs-selector-pseudo,.hljs-selector-tag{color:#7ee787}.hljs-subst{color:#c9d1d9}.hljs-section{color:#1f6feb;font-weight:700}.hljs-bullet{color:#f2cc60}.hljs-emphasis{color:#c9d1d9;font-style:italic}.hljs-strong{color:#c9d1d9;font-weight:700}.hljs-addition{color:#aff5b4;background-color:#033a16}.hljs-deletion{color:#ffdcd7;background-color:#67060c}
  }`;
    const githubTheme = `${githubLightTheme}\n${githubDarkTheme}`;
    return githubTheme;
};
}),
"[project]/apps/readest-app/src/utils/css.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatCSS",
    ()=>formatCSS,
    "validateCSS",
    ()=>validateCSS
]);
const validateCSS = (css)=>{
    // Remove comments and normalize whitespace
    css = css.replace(/\/\*[\s\S]*?\*\//g, '').trim();
    // CSS property pattern (validate both property name and value)
    const propertyPattern = /^[\s\n]*[-\w]+\s*:\s*[^;]+;?$/;
    // Check if empty
    if (!css) return {
        isValid: false,
        error: 'Empty CSS'
    };
    // Ensure balanced curly braces
    const openBraces = (css.match(/{/g) || []).length;
    const closeBraces = (css.match(/}/g) || []).length;
    if (openBraces !== closeBraces) {
        return {
            isValid: false,
            error: 'Unbalanced curly braces'
        };
    }
    const atRulePattern = /@[\w-]+[^{]*\{/g;
    let result;
    let processedCss = '';
    let lastIndex = 0;
    while((result = atRulePattern.exec(css)) !== null){
        const start = result.index;
        const head = css.slice(lastIndex, start).trim();
        if (head) processedCss += head + '\n';
        let i = atRulePattern.lastIndex;
        let depth = 1;
        while(i < css.length && depth > 0){
            if (css[i] === '{') depth++;
            else if (css[i] === '}') depth--;
            i++;
        }
        if (depth !== 0) return {
            isValid: false,
            error: 'Unbalanced curly braces in at-rule'
        };
        const inner = css.slice(atRulePattern.lastIndex, i - 1).trim();
        const innerResult = validateCSS(inner);
        if (!innerResult.isValid) return innerResult;
        lastIndex = i;
    }
    processedCss += css.slice(lastIndex).trim();
    css = processedCss;
    // Split into rule blocks
    const blocks = css.split('}').map((block)=>block.trim()).filter(Boolean);
    for (const block of blocks){
        // Ensure the block has a selector and declarations
        const parts = block.split('{').map((part)=>part.trim());
        if (parts.length !== 2) {
            return {
                isValid: false,
                error: 'Invalid CSS structure'
            };
        }
        const [selector, decls] = parts;
        // Ensure selector is not empty
        if (!selector) {
            return {
                isValid: false,
                error: 'Missing selector'
            };
        }
        // Ensure declarations are not empty
        if (!decls) {
            return {
                isValid: false,
                error: `Missing declarations for selector: ${selector}`
            };
        }
        // Validate declarations
        const props = decls.split(';').map((prop)=>prop.trim()).filter(Boolean);
        if (props.length === 0) {
            return {
                isValid: false,
                error: `No valid properties for selector: ${selector}`
            };
        }
        for (const prop of props){
            // Check if property is missing a name or value
            if (!prop.includes(':')) {
                return {
                    isValid: false,
                    error: `Missing property or value: ${prop}`
                };
            }
            const [name, value] = prop.split(':').map((part)=>part.trim());
            if (!name) {
                return {
                    isValid: false,
                    error: `Missing property name: ${prop}`
                };
            }
            if (!value) {
                return {
                    isValid: false,
                    error: `Missing property value: ${prop}`
                };
            }
            // Validate full property format
            if (!propertyPattern.test(prop.endsWith(';') ? prop : prop + ';')) {
                return {
                    isValid: false,
                    error: `Invalid property: ${prop}`
                };
            }
        }
    }
    return {
        isValid: true,
        error: null
    };
};
const formatCSS = (css)=>{
    // Simple formatter: adds indentation and line breaks
    const indent = '\t';
    let formatted = '';
    let depth = 0;
    let inComment = false;
    css = css.replace(/\s*\n\s*/g, '');
    css = css.replace(/\s{2,}/g, ' ').trim();
    css = css.replace(/([^\s{};][^{};]*:[^{};]+)\s*}/g, '$1;}');
    for(let i = 0; i < css.length; i++){
        const char = css[i];
        const nextTwoChars = css.slice(i, i + 2);
        if (nextTwoChars === '/*') {
            inComment = true;
            formatted += '\n' + indent.repeat(depth) + '/*';
            i++;
            continue;
        } else if (nextTwoChars === '*/' && inComment) {
            inComment = false;
            formatted += '*/\n' + indent.repeat(depth);
            i++;
            continue;
        }
        if (inComment) {
            formatted += char;
            continue;
        }
        if (char === '{') {
            depth++;
            formatted += ' {\n' + indent.repeat(depth);
        } else if (char === '}') {
            depth--;
            formatted += '\n' + indent.repeat(depth) + '}\n' + indent.repeat(depth);
        } else if (char === ';') {
            formatted += ';\n' + indent.repeat(depth);
            while(css[i + 1] === ' ' || css[i + 1] === ';')i++;
        } else {
            formatted += char;
        }
    }
    return formatted.replace(/\n([ \t]*\n)+/g, '\n').replace(/[ ]{2,}/g, ' ').trim();
};
}),
"[project]/apps/readest-app/src/libs/document.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$foliate$2d$js$2f$epubcfi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/foliate-js/epubcfi.js [app-ssr] (ecmascript)");
;
const CFI = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$foliate$2d$js$2f$epubcfi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__;
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
        const { configure, ZipReader, BlobReader, TextWriter, BlobWriter } = await __turbopack_context__.A("[project]/node_modules/.pnpm/@zip.js+zip.js@2.7.53/node_modules/@zip.js/zip.js/index.js [app-ssr] (ecmascript, async loader)");
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
                    const { makeComicBook } = await __turbopack_context__.A("[project]/packages/foliate-js/comic-book.js [app-ssr] (ecmascript, async loader)");
                    book = await makeComicBook(loader, this.file);
                    format = 'CBZ';
                } else if (this.isFBZ()) {
                    const entry = entries.find((entry)=>entry.filename.endsWith(`.${EXTS.FB2}`));
                    const blob = await loader.loadBlob((entry ?? entries[0]).filename);
                    const { makeFB2 } = await __turbopack_context__.A("[project]/packages/foliate-js/fb2.js [app-ssr] (ecmascript, async loader)");
                    book = await makeFB2(blob);
                    format = 'FBZ';
                } else {
                    const { EPUB } = await __turbopack_context__.A("[project]/packages/foliate-js/epub.js [app-ssr] (ecmascript, async loader)");
                    book = await new EPUB(loader).init();
                    format = 'EPUB';
                }
            } else if (await this.isPDF()) {
                const { makePDF } = await __turbopack_context__.A("[project]/packages/foliate-js/pdf.js [app-ssr] (ecmascript, async loader)");
                book = await makePDF(this.file);
                format = 'PDF';
            } else if (await (await __turbopack_context__.A("[project]/packages/foliate-js/mobi.js [app-ssr] (ecmascript, async loader)")).isMOBI(this.file)) {
                const fflate = await __turbopack_context__.A("[project]/packages/foliate-js/vendor/fflate.js [app-ssr] (ecmascript, async loader)");
                const { MOBI } = await __turbopack_context__.A("[project]/packages/foliate-js/mobi.js [app-ssr] (ecmascript, async loader)");
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
                const { makeFB2 } = await __turbopack_context__.A("[project]/packages/foliate-js/fb2.js [app-ssr] (ecmascript, async loader)");
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
"[project]/apps/readest-app/src/libs/metadata.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "searchMetadata",
    ()=>searchMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/environment.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$fetch$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/fetch.ts [app-ssr] (ecmascript)");
;
;
const API_ENDPOINT = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAPIBaseUrl"])() + '/metadata/search';
const searchMetadata = async (request)=>{
    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$fetch$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchWithAuth"])(API_ENDPOINT, {
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
}),
"[project]/apps/readest-app/src/store/transferStore.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTransferStore",
    ()=>useTransferStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$6_$40$types$2b$react$40$18$2e$3$2e$12_react$40$19$2e$2$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zustand@5.0.6_@types+react@18.3.12_react@19.2.0/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
;
const generateTransferId = ()=>{
    return `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
};
const useTransferStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$6_$40$types$2b$react$40$18$2e$3$2e$12_react$40$19$2e$2$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
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
}),
"[project]/apps/readest-app/src/store/deviceStore.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDeviceControlStore",
    ()=>useDeviceControlStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$6_$40$types$2b$react$40$18$2e$3$2e$12_react$40$19$2e$2$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zustand@5.0.6_@types+react@18.3.12_react@19.2.0/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$bridge$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/bridge.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/event.ts [app-ssr] (ecmascript)");
;
;
;
const handleNativeKeyDown = (keyName)=>{
    if (keyName === 'VolumeUp' || keyName === 'VolumeDown') {
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["eventDispatcher"].dispatch('native-key-down', {
            keyName
        });
    }
    if (keyName === 'Back') {
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["eventDispatcher"].dispatchSync('native-key-down', {
            keyName
        });
    }
    return false;
};
const useDeviceControlStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$6_$40$types$2b$react$40$18$2e$3$2e$12_react$40$19$2e$2$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
        volumeKeysIntercepted: false,
        backKeyIntercepted: false,
        volumeKeysInterceptionCount: 0,
        backKeyInterceptionCount: 0,
        acquireVolumeKeyInterception: ()=>{
            const { volumeKeysInterceptionCount } = get();
            if (volumeKeysInterceptionCount == 0) {
                window.onNativeKeyDown = handleNativeKeyDown;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$bridge$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interceptKeys"])({
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
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$bridge$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interceptKeys"])({
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
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$bridge$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interceptKeys"])({
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
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$bridge$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interceptKeys"])({
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
                return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["eventDispatcher"].dispatch('native-touch', event);
            };
        },
        getScreenBrightness: async ()=>{
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$bridge$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getScreenBrightness"])();
            return res.brightness;
        },
        setScreenBrightness: async (brightness)=>{
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$bridge$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setScreenBrightness"])({
                brightness
            });
        }
    }));
}),
"[project]/apps/readest-app/src/store/libraryStore.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLibraryStore",
    ()=>useLibraryStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$6_$40$types$2b$react$40$18$2e$3$2e$12_react$40$19$2e$2$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zustand@5.0.6_@types+react@18.3.12_react@19.2.0/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/environment.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/constants.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$md5$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/md5.ts [app-ssr] (ecmascript) <locals>");
;
;
;
;
const useLibraryStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$6_$40$types$2b$react$40$18$2e$3$2e$12_react$40$19$2e$2$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
        library: [],
        isSyncing: false,
        syncProgress: 0,
        currentBookshelf: [],
        selectedBooks: new Set(),
        groups: {},
        checkOpenWithBooks: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTauriAppPlatform"])(),
        checkLastOpenBooks: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTauriAppPlatform"])(),
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
                if (book.groupName && book.groupName !== __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BOOK_UNGROUPED_NAME"] && !book.deletedAt) {
                    groups[(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$md5$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["md5Fingerprint"])(book.groupName)] = book.groupName;
                    let nextSlashIndex = book.groupName.indexOf('/', 0);
                    while(nextSlashIndex > 0){
                        const groupName = book.groupName.substring(0, nextSlashIndex);
                        groups[(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$md5$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["md5Fingerprint"])(groupName)] = groupName;
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
            const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$md5$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["md5Fingerprint"])(trimmedName);
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
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$md5$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["md5Fingerprint"])(path);
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
}),
"[project]/apps/readest-app/src/store/bookDataStore.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useBookDataStore",
    ()=>useBookDataStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$6_$40$types$2b$react$40$18$2e$3$2e$12_react$40$19$2e$2$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zustand@5.0.6_@types+react@18.3.12_react@19.2.0/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$libraryStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/libraryStore.ts [app-ssr] (ecmascript)");
;
;
const useBookDataStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$6_$40$types$2b$react$40$18$2e$3$2e$12_react$40$19$2e$2$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
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
            const { library, setLibrary } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$libraryStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLibraryStore"].getState();
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
}),
"[project]/apps/readest-app/src/store/readerStore.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useReaderStore",
    ()=>useReaderStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$6_$40$types$2b$react$40$18$2e$3$2e$12_react$40$19$2e$2$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zustand@5.0.6_@types+react@18.3.12_react@19.2.0/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$types$2f$book$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/types/book.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$libs$2f$document$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/libs/document.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$toc$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/toc.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$book$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/book.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$path$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/path.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/constants.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/settingsStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/bookDataStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$libraryStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/libraryStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/misc.ts [app-ssr] (ecmascript)");
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
const useReaderStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$6_$40$types$2b$react$40$18$2e$3$2e$12_react$40$19$2e$2$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
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
            const booksData = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBookDataStore"].getState().booksData;
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
                const { settings } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"].getState();
                const { library } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$libraryStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLibraryStore"].getState();
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
                    const doc = await new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$libs$2f$document$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DocumentLoader"](file).open();
                    bookDoc = doc.book;
                }
                const config = await appService.loadBookConfig(book, settings);
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$toc$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateToc"])(bookDoc, config.viewSettings?.sortedTOC ?? false, config.viewSettings?.convertChineseVariant ?? 'none');
                if (!bookDoc.metadata.title) {
                    bookDoc.metadata.title = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$path$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBaseFilename"])(file.name);
                }
                book.sourceTitle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$book$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatTitle"])(bookDoc.metadata.title);
                // Correct language codes mistakenly set with language names
                if (typeof bookDoc.metadata?.language === 'string') {
                    if (bookDoc.metadata.language in __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SUPPORTED_LANGNAMES"]) {
                        bookDoc.metadata.language = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SUPPORTED_LANGNAMES"][bookDoc.metadata.language];
                    }
                }
                // Set the book's language for formerly imported books, newly imported books have this field set
                const primaryLanguage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$book$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrimaryLanguage"])(bookDoc.metadata.language);
                book.primaryLanguage = book.primaryLanguage ?? primaryLanguage;
                book.metadata = book.metadata ?? bookDoc.metadata;
                // TODO: uncomment this when we can ensure metaHash is correctly generated for all books
                // book.metaHash = book.metaHash ?? getMetadataHash(bookDoc.metadata);
                book.metaHash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$book$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMetadataHash"])(bookDoc.metadata);
                const isFixedLayout = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$types$2f$book$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FIXED_LAYOUT_FORMATS"].has(book.format);
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBookDataStore"].setState((state)=>({
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
                                viewerKey: `${key}-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uniqueId"])()}`,
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
            const bookData = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBookDataStore"].getState().booksData[id];
            const viewState = get().viewStates[key];
            if (!viewState || !bookData) return;
            if (viewState.isPrimary) {
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBookDataStore"].setState((state)=>({
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
                const bookData = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBookDataStore"].getState().booksData[id];
                const viewState = state.viewStates[key];
                if (!viewState || !bookData) return state;
                const pagePressInfo = bookData.isFixedLayout ? section : pageinfo;
                const progress = [
                    pagePressInfo.current + 1,
                    pagePressInfo.total
                ];
                // Update library book progress
                const { library, setLibrary } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$libraryStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLibraryStore"].getState();
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
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBookDataStore"].setState((state)=>({
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
                                viewerKey: `${key}-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uniqueId"])()}`
                            }
                        }
                    }));
            });
        }
    }));
}),
"[project]/apps/readest-app/src/store/customFontStore.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCustomFontStore",
    ()=>useCustomFontStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$6_$40$types$2b$react$40$18$2e$3$2e$12_react$40$19$2e$2$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zustand@5.0.6_@types+react@18.3.12_react@19.2.0/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$styles$2f$fonts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/styles/fonts.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/settingsStore.ts [app-ssr] (ecmascript)");
;
;
;
function toSettingsFont(font) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { blobUrl, loaded, error, ...settingsFont } = font;
    return settingsFont;
}
const useCustomFontStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$6_$40$types$2b$react$40$18$2e$3$2e$12_react$40$19$2e$2$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
        fonts: [],
        loading: false,
        setFonts: (fonts)=>set({
                fonts
            }),
        addFont: (path, options)=>{
            const font = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$styles$2f$fonts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCustomFont"])(path, options);
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
                const format = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$styles$2f$fonts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFontFormat"])(font.path);
                const mimeType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$styles$2f$fonts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMimeType"])(format);
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
                const { settings } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"].getState();
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
                const { settings, setSettings, saveSettings } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"].getState();
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
}),
"[project]/apps/readest-app/src/services/transferManager.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "transferManager",
    ()=>transferManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$transferStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/transferStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/event.ts [app-ssr] (ecmascript)");
;
;
const TRANSFER_QUEUE_KEY = 'readest_transfer_queue';
const RETRY_DELAY_BASE_MS = 2000;
class TransferManager {
    static instance;
    appService = null;
    isProcessing = false;
    abortControllers = new Map();
    isInitialized = false;
    getLibrary = null;
    updateBook = null;
    _ = null;
    constructor(){}
    static getInstance() {
        if (!TransferManager.instance) {
            TransferManager.instance = new TransferManager();
        }
        return TransferManager.instance;
    }
    async initialize(appService, getLibrary, updateBook, translationFn) {
        if (this.isInitialized) return;
        this.appService = appService;
        this.getLibrary = getLibrary;
        this.updateBook = updateBook;
        this._ = translationFn;
        await this.loadPersistedQueue();
        this.isInitialized = true;
        // Start processing queue
        this.processQueue();
    }
    isReady() {
        return this.isInitialized && this.appService !== null;
    }
    queueUpload(book, priority = 10) {
        if (!this.isReady()) {
            console.warn('TransferManager not initialized');
            return null;
        }
        const store = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$transferStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransferStore"].getState();
        // Check if already queued or in progress
        const existing = store.getTransferByBookHash(book.hash, 'upload');
        if (existing) {
            return existing.id;
        }
        const transferId = store.addTransfer(book.hash, book.title, 'upload', priority);
        this.persistQueue();
        this.processQueue();
        return transferId;
    }
    queueDownload(book, priority = 10) {
        if (!this.isReady()) {
            console.warn('TransferManager not initialized');
            return null;
        }
        const store = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$transferStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransferStore"].getState();
        const existing = store.getTransferByBookHash(book.hash, 'download');
        if (existing) {
            return existing.id;
        }
        const transferId = store.addTransfer(book.hash, book.title, 'download', priority);
        this.persistQueue();
        this.processQueue();
        return transferId;
    }
    queueDelete(book, priority = 10, isBackground = false) {
        if (!this.isReady()) {
            console.warn('TransferManager not initialized');
            return null;
        }
        const store = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$transferStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransferStore"].getState();
        const existing = store.getTransferByBookHash(book.hash, 'delete');
        if (existing) {
            return existing.id;
        }
        const transferId = store.addTransfer(book.hash, book.title, 'delete', priority, isBackground);
        this.persistQueue();
        this.processQueue();
        return transferId;
    }
    queueBatchUploads(books, priority = 10) {
        return books.map((book)=>this.queueUpload(book, priority)).filter((id)=>id !== null);
    }
    cancelTransfer(transferId) {
        const controller = this.abortControllers.get(transferId);
        if (controller) {
            controller.abort();
            this.abortControllers.delete(transferId);
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$transferStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransferStore"].getState().setTransferStatus(transferId, 'cancelled');
        this.persistQueue();
    }
    retryTransfer(transferId) {
        const store = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$transferStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransferStore"].getState();
        store.retryTransfer(transferId);
        this.persistQueue();
        this.processQueue();
    }
    retryAllFailed() {
        const store = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$transferStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransferStore"].getState();
        const failed = store.getFailedTransfers();
        failed.forEach((transfer)=>{
            store.retryTransfer(transfer.id);
        });
        this.persistQueue();
        this.processQueue();
    }
    pauseQueue() {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$transferStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransferStore"].getState().pauseQueue();
        this.persistQueue();
    }
    resumeQueue() {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$transferStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransferStore"].getState().resumeQueue();
        this.processQueue();
        this.persistQueue();
    }
    async processQueue() {
        if (this.isProcessing) return;
        this.isProcessing = true;
        try {
            await this._processQueueInternal();
        } finally{
            this.isProcessing = false;
        }
    }
    async _processQueueInternal() {
        const store = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$transferStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransferStore"].getState();
        if (store.isQueuePaused) return;
        const pending = store.getPendingTransfers();
        const activeCount = store.getActiveTransfers().length;
        const maxConcurrent = store.maxConcurrent;
        const availableSlots = maxConcurrent - activeCount;
        if (availableSlots <= 0 || pending.length === 0) return;
        // Sort by priority (lower = higher priority) then by createdAt
        const sortedPending = [
            ...pending
        ].sort((a, b)=>{
            if (a.priority !== b.priority) return a.priority - b.priority;
            return a.createdAt - b.createdAt;
        });
        const toProcess = sortedPending.slice(0, availableSlots);
        await Promise.all(toProcess.map((transfer)=>this.executeTransfer(transfer)));
        // Check if more items to process
        const newStore = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$transferStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransferStore"].getState();
        if (newStore.getPendingTransfers().length > 0 && !newStore.isQueuePaused) {
            setTimeout(()=>this.processQueue(), 100);
        }
    }
    async executeTransfer(transfer) {
        if (!this.appService || !this.getLibrary || !this.updateBook) {
            console.error('TransferManager not properly initialized');
            return;
        }
        const _ = this._;
        const store = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$transferStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransferStore"].getState();
        const abortController = new AbortController();
        this.abortControllers.set(transfer.id, abortController);
        store.setTransferStatus(transfer.id, 'in_progress');
        store.setActiveCount(store.getActiveTransfers().length + 1);
        const progressHandler = (progress)=>{
            if (abortController.signal.aborted) return;
            const percentage = progress.total > 0 ? progress.progress / progress.total * 100 : 0;
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$transferStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransferStore"].getState().updateTransferProgress(transfer.id, percentage, progress.progress, progress.total, progress.transferSpeed);
        };
        try {
            const library = this.getLibrary();
            const book = library.find((b)=>b.hash === transfer.bookHash);
            if (!book) {
                throw new Error(_('Book not found in library'));
            }
            if (transfer.type === 'upload') {
                // Cloud upload functionality removed - using local server storage only
                throw new Error(_('Upload functionality has been removed'));
            } else if (transfer.type === 'download') {
                // Cloud download functionality removed - using local server storage only
                throw new Error(_('Download functionality has been removed'));
            } else if (transfer.type === 'delete') {
                await this.appService.deleteBook(book, 'cloud');
                await this.updateBook(book);
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$transferStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransferStore"].getState().setTransferStatus(transfer.id, 'completed');
            const successMessages = {
                upload: _('Book uploaded: {{title}}', {
                    title: transfer.bookTitle
                }),
                download: _('Book downloaded: {{title}}', {
                    title: transfer.bookTitle
                }),
                delete: _('Deleted cloud backup of the book: {{title}}', {
                    title: transfer.bookTitle
                })
            };
            if (!transfer.isBackground) {
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["eventDispatcher"].dispatch('toast', {
                    type: 'info',
                    timeout: 2000,
                    message: successMessages[transfer.type]
                });
            }
        } catch (error) {
            if (abortController.signal.aborted) {
                // Already cancelled, don't update status
                return;
            }
            const errorMessage = error instanceof Error ? error.message : _('Unknown error');
            const currentStore = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$transferStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransferStore"].getState();
            const currentTransfer = currentStore.transfers[transfer.id];
            if (currentTransfer && currentTransfer.retryCount < currentTransfer.maxRetries) {
                // Schedule retry with exponential backoff
                const delay = RETRY_DELAY_BASE_MS * Math.pow(2, currentTransfer.retryCount);
                currentStore.incrementRetryCount(transfer.id);
                currentStore.setTransferStatus(transfer.id, 'pending', `Retry ${currentTransfer.retryCount + 1}/${currentTransfer.maxRetries}`);
                setTimeout(()=>{
                    this.processQueue();
                }, delay);
            } else {
                if (errorMessage.includes('Not authenticated')) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["eventDispatcher"].dispatch('toast', {
                        type: 'error',
                        message: _('Please log in to continue')
                    });
                } else if (errorMessage.includes('Insufficient storage quota')) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["eventDispatcher"].dispatch('toast', {
                        type: 'error',
                        message: _('Insufficient storage quota')
                    });
                } else {
                    const errorMessages = {
                        upload: _('Failed to upload book: {{title}}', {
                            title: transfer.bookTitle
                        }),
                        download: _('Failed to download book: {{title}}', {
                            title: transfer.bookTitle
                        }),
                        delete: _('Failed to delete cloud backup of the book: {{title}}', {
                            title: transfer.bookTitle
                        })
                    };
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["eventDispatcher"].dispatch('toast', {
                        type: 'error',
                        message: errorMessages[transfer.type]
                    });
                }
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$transferStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransferStore"].getState().setTransferStatus(transfer.id, 'failed', errorMessage);
            }
        } finally{
            this.abortControllers.delete(transfer.id);
            const currentStore = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$transferStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransferStore"].getState();
            currentStore.setActiveCount(Math.max(0, currentStore.getActiveTransfers().length));
            this.persistQueue();
            // Continue processing
            setTimeout(()=>this.processQueue(), 100);
        }
    }
    async loadPersistedQueue() {
        try {
            if (typeof localStorage === 'undefined') return;
            const stored = localStorage.getItem(TRANSFER_QUEUE_KEY);
            if (!stored) return;
            const data = JSON.parse(stored);
            const store = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$transferStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransferStore"].getState();
            // Restore all transfers using the store's restore method
            // This preserves the original IDs and handles in_progress -> pending conversion
            store.restoreTransfers(data.transfers, data.isQueuePaused);
        } catch (error) {
            console.error('Failed to load transfer queue:', error);
        }
    }
    persistQueue() {
        try {
            if (typeof localStorage === 'undefined') return;
            const store = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$transferStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransferStore"].getState();
            // Persist all transfers including completed (for history)
            const data = {
                transfers: store.transfers,
                isQueuePaused: store.isQueuePaused
            };
            localStorage.setItem(TRANSFER_QUEUE_KEY, JSON.stringify(data));
        } catch (error) {
            console.error('Failed to persist transfer queue:', error);
        }
    }
}
const transferManager = TransferManager.getInstance();
}),
"[project]/apps/readest-app/src/services/translators/types.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ErrorCodes",
    ()=>ErrorCodes
]);
const ErrorCodes = {
    UNAUTHORIZED: 'Unauthorized',
    DEEPL_API_ERROR: 'DeepL API Error',
    DAILY_QUOTA_EXCEEDED: 'Daily Quota Exceeded',
    INTERNAL_SERVER_ERROR: 'Internal Server Error'
};
}),
"[project]/apps/readest-app/src/services/translators/cache.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearCache",
    ()=>clearCache,
    "getCacheKey",
    ()=>getCacheKey,
    "getCacheStats",
    ()=>getCacheStats,
    "getFromCache",
    ()=>getFromCache,
    "initCache",
    ()=>initCache,
    "loadCacheFromDB",
    ()=>loadCacheFromDB,
    "pruneCache",
    ()=>pruneCache,
    "storeInCache",
    ()=>storeInCache
]);
const DB_NAME = 'TranslationCache';
const DB_VERSION = 1;
const STORE_NAME = 'translations';
const memoryCache = {};
const memoryTimestamps = {};
const openDatabase = ()=>{
    return new Promise((resolve, reject)=>{
        if (!window.indexedDB) {
            console.warn('IndexedDB not supported. Using in-memory cache only.');
            reject(new Error('IndexedDB not supported'));
            return;
        }
        const request = indexedDB.open(DB_NAME, DB_VERSION);
        request.onerror = (event)=>{
            console.error('IndexedDB error:', event);
            reject(new Error('Could not open IndexedDB'));
        };
        request.onsuccess = (event)=>{
            const db = event.target.result;
            resolve(db);
        };
        request.onupgradeneeded = (event)=>{
            const db = event.target.result;
            if (!db.objectStoreNames.contains(STORE_NAME)) {
                const store = db.createObjectStore(STORE_NAME, {
                    keyPath: 'key'
                });
                store.createIndex('provider', 'provider', {
                    unique: false
                });
                store.createIndex('timestamp', 'timestamp', {
                    unique: false
                });
            }
        };
    });
};
const loadCacheFromDB = async (options = {})=>{
    try {
        const db = await openDatabase();
        const transaction = db.transaction(STORE_NAME, 'readonly');
        const store = transaction.objectStore(STORE_NAME);
        let request;
        if (options.onlyLoadProviders && options.onlyLoadProviders.length > 0) {
            const providerPromises = options.onlyLoadProviders.map((provider)=>{
                return new Promise((resolve)=>{
                    const providerIndex = store.index('provider');
                    const request = providerIndex.getAll(provider);
                    request.onsuccess = ()=>{
                        resolve(request.result);
                    };
                    request.onerror = ()=>{
                        resolve([]);
                    };
                });
            });
            const allEntries = (await Promise.all(providerPromises)).flat();
            processLoadedEntries(allEntries, options);
        } else {
            request = store.getAll();
            request.onsuccess = ()=>{
                const entries = request.result;
                processLoadedEntries(entries, options);
            };
            request.onerror = (event)=>{
                console.error('Error loading cache from IndexedDB:', event);
            };
        }
        transaction.oncomplete = ()=>{
            db.close();
        };
    } catch (error) {
        console.error('Failed to load cache from IndexedDB:', error);
    }
};
const processLoadedEntries = (entries, options)=>{
    let filteredEntries = entries;
    if (options.maxAge) {
        const cutoff = Date.now() - options.maxAge;
        filteredEntries = filteredEntries.filter((entry)=>entry.timestamp >= cutoff);
    }
    if (options.onlyLoadLanguages) {
        if (options.onlyLoadLanguages.source && options.onlyLoadLanguages.source.length > 0) {
            filteredEntries = filteredEntries.filter((entry)=>options.onlyLoadLanguages.source.includes(entry.sourceLang));
        }
        if (options.onlyLoadLanguages.target && options.onlyLoadLanguages.target.length > 0) {
            filteredEntries = filteredEntries.filter((entry)=>options.onlyLoadLanguages.target.includes(entry.targetLang));
        }
    }
    if (options.maxEntries && filteredEntries.length > options.maxEntries) {
        filteredEntries.sort((a, b)=>b.timestamp - a.timestamp);
        filteredEntries = filteredEntries.slice(0, options.maxEntries);
    }
    filteredEntries.forEach((entry)=>{
        memoryCache[entry.key] = entry.translation;
        memoryTimestamps[entry.key] = entry.timestamp;
    });
// console.log(`Loaded ${filteredEntries.length} translations into memory cache`);
};
const getCacheKey = (text, sourceLang, targetLang, provider)=>{
    return `${provider}:${sourceLang}:${targetLang}:${text}`;
};
const getFromCache = async (text, sourceLang, targetLang, provider)=>{
    if (!text?.trim()) return null;
    const key = getCacheKey(text, sourceLang, targetLang, provider);
    if (memoryCache[key]) {
        return memoryCache[key];
    }
    try {
        const db = await openDatabase();
        const transaction = db.transaction(STORE_NAME, 'readonly');
        const store = transaction.objectStore(STORE_NAME);
        const request = store.get(key);
        return new Promise((resolve)=>{
            request.onsuccess = ()=>{
                const entry = request.result;
                if (entry) {
                    memoryCache[key] = entry.translation;
                    memoryTimestamps[key] = entry.timestamp;
                    resolve(entry.translation);
                } else {
                    resolve(null);
                }
            };
            request.onerror = ()=>{
                resolve(null);
            };
            transaction.oncomplete = ()=>{
                db.close();
            };
        });
    } catch (error) {
        console.error('Error accessing IndexedDB:', error);
        return null;
    }
};
const storeInCache = async (text, translation, sourceLang, targetLang, provider)=>{
    if (!text?.trim() || !translation) return;
    const key = getCacheKey(text, sourceLang, targetLang, provider);
    const timestamp = Date.now();
    memoryCache[key] = translation;
    memoryTimestamps[key] = timestamp;
    try {
        const db = await openDatabase();
        const transaction = db.transaction(STORE_NAME, 'readwrite');
        const store = transaction.objectStore(STORE_NAME);
        const entry = {
            key,
            translation,
            timestamp,
            provider,
            sourceLang,
            targetLang,
            originalText: text
        };
        store.put(entry);
        return new Promise((resolve, reject)=>{
            transaction.oncomplete = ()=>{
                db.close();
                resolve();
            };
            transaction.onerror = (event)=>{
                console.error('Error storing in IndexedDB:', event);
                reject(new Error('Failed to store in IndexedDB'));
            };
        });
    } catch (error) {
        console.error('Error accessing IndexedDB:', error);
    }
};
const clearCache = async (filter)=>{
    let deletedCount = 0;
    if (!filter) {
        const count = Object.keys(memoryCache).length;
        Object.keys(memoryCache).forEach((key)=>{
            delete memoryCache[key];
            delete memoryTimestamps[key];
        });
        deletedCount = count;
    } else {
        const keysToDelete = [];
        Object.keys(memoryCache).forEach((key)=>{
            let shouldDelete = true;
            if (filter.provider) {
                const parts = key.split(':');
                const provider = parts[0];
                if (filter.provider && provider !== filter.provider) {
                    shouldDelete = false;
                }
            }
            if (shouldDelete && filter.maxAge && memoryTimestamps[key]) {
                const timestamp = memoryTimestamps[key];
                if (Date.now() - timestamp < filter.maxAge) {
                    shouldDelete = false;
                }
            }
            if (shouldDelete) {
                keysToDelete.push(key);
            }
        });
        keysToDelete.forEach((key)=>{
            delete memoryCache[key];
            delete memoryTimestamps[key];
        });
        deletedCount = keysToDelete.length;
    }
    try {
        const db = await openDatabase();
        const transaction = db.transaction(STORE_NAME, 'readwrite');
        const store = transaction.objectStore(STORE_NAME);
        if (!filter) {
            store.clear();
        } else {
            const request = store.getAll();
            request.onsuccess = ()=>{
                const entries = request.result;
                const filteredEntries = entries.filter((entry)=>{
                    if (filter.provider && entry.provider !== filter.provider) {
                        return false;
                    }
                    if (filter.maxAge && Date.now() - entry.timestamp >= filter.maxAge) {
                        return true;
                    }
                    return true;
                });
                filteredEntries.forEach((entry)=>{
                    store.delete(entry.key);
                });
            };
        }
        return new Promise((resolve)=>{
            transaction.oncomplete = ()=>{
                db.close();
                resolve(deletedCount);
            };
            transaction.onerror = ()=>{
                db.close();
                resolve(deletedCount);
            };
        });
    } catch (error) {
        console.error('Error clearing IndexedDB cache:', error);
        return deletedCount;
    }
};
const getCacheStats = async (includeDB = false)=>{
    const memoryCacheEntries = Object.keys(memoryCache).length;
    let memoryCacheSizeInBytes = 0;
    for(const key in memoryCache){
        memoryCacheSizeInBytes += key.length;
        const value = memoryCache[key] || '';
        memoryCacheSizeInBytes += value.length;
    }
    if (!includeDB) {
        return {
            memoryCacheEntries,
            memoryCacheSizeInBytes
        };
    }
    try {
        const db = await openDatabase();
        const transaction = db.transaction(STORE_NAME, 'readonly');
        const store = transaction.objectStore(STORE_NAME);
        const countRequest = store.count();
        return new Promise((resolve)=>{
            countRequest.onsuccess = ()=>{
                const dbCacheEntries = countRequest.result;
                const getAllRequest = store.getAll();
                getAllRequest.onsuccess = ()=>{
                    const entries = getAllRequest.result;
                    let dbCacheSizeInBytes = 0;
                    entries.forEach((entry)=>{
                        const entryString = JSON.stringify(entry);
                        dbCacheSizeInBytes += entryString.length;
                    });
                    const totalEntries = memoryCacheEntries + dbCacheEntries - Math.min(memoryCacheEntries, dbCacheEntries);
                    const totalSizeInBytes = memoryCacheSizeInBytes + dbCacheSizeInBytes;
                    resolve({
                        memoryCacheEntries,
                        memoryCacheSizeInBytes,
                        dbCacheEntries,
                        dbCacheSizeInBytes,
                        totalEntries,
                        totalSizeInBytes
                    });
                };
            };
            transaction.oncomplete = ()=>{
                db.close();
            };
            transaction.onerror = ()=>{
                db.close();
                resolve({
                    memoryCacheEntries,
                    memoryCacheSizeInBytes
                });
            };
        });
    } catch (error) {
        console.error('Error getting IndexedDB stats:', error);
        return {
            memoryCacheEntries,
            memoryCacheSizeInBytes
        };
    }
};
const pruneCache = async (options = {})=>{
    const { maxAge, maxEntries, maxSizeInBytes, dryRun = false } = options;
    if (!maxAge && !maxEntries && !maxSizeInBytes) {
        return 0;
    }
    try {
        const db = await openDatabase();
        const transaction = db.transaction(STORE_NAME, dryRun ? 'readonly' : 'readwrite');
        const store = transaction.objectStore(STORE_NAME);
        const getAllRequest = store.getAll();
        return new Promise((resolve)=>{
            getAllRequest.onsuccess = ()=>{
                const entries = getAllRequest.result;
                const entriesToPrune = [];
                if (maxAge) {
                    const cutoffTime = Date.now() - maxAge;
                    const agedEntries = entries.filter((entry)=>entry.timestamp < cutoffTime);
                    entriesToPrune.push(...agedEntries);
                }
                if (maxEntries && entries.length > maxEntries) {
                    const sortedEntries = [
                        ...entries
                    ].sort((a, b)=>a.timestamp - b.timestamp);
                    const excessEntries = sortedEntries.slice(0, entries.length - maxEntries);
                    const prunedKeys = new Set(entriesToPrune.map((e)=>e.key));
                    excessEntries.forEach((entry)=>{
                        if (!prunedKeys.has(entry.key)) {
                            entriesToPrune.push(entry);
                        }
                    });
                }
                if (maxSizeInBytes) {
                    let currentSize = 0;
                    entries.forEach((entry)=>{
                        const entryString = JSON.stringify(entry);
                        currentSize += entryString.length;
                    });
                    if (currentSize > maxSizeInBytes) {
                        const remainingEntries = entries.filter((entry)=>!entriesToPrune.some((e)=>e.key === entry.key)).sort((a, b)=>a.timestamp - b.timestamp);
                        let sizeToRemove = currentSize - maxSizeInBytes;
                        const prunedKeys = new Set(entriesToPrune.map((e)=>e.key));
                        for (const entry of remainingEntries){
                            if (sizeToRemove <= 0) break;
                            if (!prunedKeys.has(entry.key)) {
                                const entryString = JSON.stringify(entry);
                                const entrySize = entryString.length * 2;
                                entriesToPrune.push(entry);
                                prunedKeys.add(entry.key);
                                sizeToRemove -= entrySize;
                            }
                        }
                    }
                }
                const pruneCount = entriesToPrune.length;
                if (!dryRun && pruneCount > 0) {
                    entriesToPrune.forEach((entry)=>{
                        store.delete(entry.key);
                        delete memoryCache[entry.key];
                        delete memoryTimestamps[entry.key];
                    });
                }
                resolve(pruneCount);
            };
            getAllRequest.onerror = ()=>{
                resolve(0);
            };
            transaction.oncomplete = ()=>{
                db.close();
            };
        });
    } catch (error) {
        console.error('Error pruning cache:', error);
        return 0;
    }
};
const initCache = async (options = {})=>{
    const { preload = true, preloadOptions = {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        maxEntries: 10000
    }, autoPrune = true, pruneInterval = 60 * 60 * 1000, pruneOptions = {
        maxAge: 90 * 24 * 60 * 60 * 1000,
        maxEntries: 100000,
        maxSizeInBytes: 10 * 1024 * 1024
    } } = options;
    if (preload) {
        await loadCacheFromDB(preloadOptions);
    }
    let intervalId = null;
    if (autoPrune) {
        await pruneCache(pruneOptions);
        intervalId = window.setInterval(async ()=>{
            await pruneCache(pruneOptions);
        }, pruneInterval);
    }
    return ()=>{
        if (intervalId !== null) {
            clearInterval(intervalId);
        }
    };
};
let cleanupFunction = null;
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
}),
"[project]/apps/readest-app/src/services/translators/polish.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "basicPolish",
    ()=>basicPolish,
    "getPolisher",
    ()=>getPolisher,
    "polish",
    ()=>polish
]);
const languagePolishers = {
    // Chinese - fix punctuation spacing
    zh: (text)=>text.replace(/--/g, '⸺').replace(/\s+([。、！？])/g, '$1').replace(/([。、！？])\s+/g, '$1'),
    // Spanish - fix punctuation spacing
    es: (text)=>text.replace(/\?([A-ZÁÉÍÓÚÑÜ])/g, '? $1').replace(/\!([A-ZÁÉÍÓÚÑÜ])/g, '! $1'),
    // French - fix punctuation spacing
    fr: (text)=>text.replace(/\s+([!?:;])/g, ' $1').replace(/([!?:;])\s+/g, '$1 '),
    // Japanese - fix punctuation spacing
    ja: (text)=>text.replace(/\s+([。、！？])/g, '$1').replace(/([。、！？])\s+/g, '$1')
};
const basicPolish = (text)=>{
    return text.replace(/\s+/g, ' ') // Multiple spaces to single space
    .replace(/\s+([.,!?;:])/g, '$1') // Remove space before punctuation
    .trim();
};
function getPolisher(targetLang) {
    const langCode = targetLang.split('-')[0].toLowerCase();
    const languagePolisher = languagePolishers[langCode];
    if (languagePolisher) {
        return (text)=>{
            const basicPolished = basicPolish(text);
            const polished = languagePolisher(basicPolished);
            return polished;
        };
    }
    return basicPolish;
}
function polish(texts, targetLang) {
    const polisher = getPolisher(targetLang);
    return texts.map(polisher);
}
}),
"[project]/apps/readest-app/src/services/translators/preprocess.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "basicSubstitute",
    ()=>basicSubstitute,
    "createPreprocessor",
    ()=>createPreprocessor,
    "preprocess",
    ()=>preprocess
]);
const defaultSubstitutions = {
    Cover: 'The Cover',
    Dedication: 'Dedication Page',
    Acknowledgements: 'The Acknowledgements'
};
const basicSubstitute = (text, substitutions)=>{
    const allSubstitutions = {
        ...defaultSubstitutions,
        ...substitutions
    };
    if (Object.keys(allSubstitutions).length === 0) {
        return text;
    }
    if (allSubstitutions[text]) {
        return allSubstitutions[text];
    }
    return text;
};
function createPreprocessor(substitutions = {}) {
    return (text)=>basicSubstitute(text, substitutions);
}
function preprocess(texts, substitutions = {}) {
    const preprocessor = createPreprocessor(substitutions);
    return texts.map(preprocessor);
}
}),
"[project]/apps/readest-app/src/services/translators/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDailyUsage",
    ()=>getDailyUsage,
    "isTranslationAvailable",
    ()=>isTranslationAvailable,
    "saveDailyUsage",
    ()=>saveDailyUsage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$lang$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/lang.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/misc.ts [app-ssr] (ecmascript)");
;
;
const DAILY_USAGE_KEY = 'translationDailyUsage';
const saveDailyUsage = (usage, date)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
};
const getDailyUsage = (date)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return null;
};
const isTranslationAvailable = (book, targetLanguage)=>{
    if (!book || book.format === 'PDF') {
        return false;
    }
    const primaryLanguage = book.primaryLanguage || '';
    if (!primaryLanguage || primaryLanguage.toLowerCase() === 'und') {
        return false;
    }
    if (targetLanguage && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$lang$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSameLang"])(primaryLanguage, targetLanguage)) {
        return false;
    }
    if (!targetLanguage && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$lang$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSameLang"])(primaryLanguage, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLocale"])())) {
        return false;
    }
    return true;
};
}),
"[project]/apps/readest-app/src/services/translators/providers/deepl.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deeplProvider",
    ()=>deeplProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/environment.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/misc.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$translators$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/translators/types.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$access$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/access.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$lang$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/lang.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/constants.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$translators$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/translators/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
const DEEPL_API_ENDPOINT = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAPIBaseUrl"])() + '/deepl/translate';
const deeplProvider = {
    name: 'deepl',
    label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stubTranslation"])('DeepL'),
    authRequired: true,
    quotaExceeded: false,
    translate: async (text, sourceLang, targetLang, token, useCache = false)=>{
        const authRequired = deeplProvider.authRequired;
        const headers = {
            'Content-Type': 'application/json'
        };
        let userPlan = 'free';
        if (token) {
            userPlan = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$access$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSubscriptionPlan"])(token);
            headers['Authorization'] = `Bearer ${token}`;
        }
        if (authRequired && !token) {
            throw new Error('Authentication token is required for DeepL translation');
        }
        const body = JSON.stringify({
            text: text,
            source_lang: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$lang$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeToShortLang"])(sourceLang).toUpperCase(),
            target_lang: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$lang$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeToShortLang"])(targetLang).toUpperCase(),
            use_cache: useCache
        });
        const quota = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_DAILY_TRANSLATION_QUOTA"][userPlan];
        try {
            const response = await fetch(DEEPL_API_ENDPOINT, {
                method: 'POST',
                headers,
                body
            });
            if (!response.ok) {
                const data = await response.json();
                if (data && data.error && data.error === __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$translators$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ErrorCodes"].DAILY_QUOTA_EXCEEDED) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$translators$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveDailyUsage"])(quota);
                    deeplProvider.quotaExceeded = true;
                    throw new Error(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$translators$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ErrorCodes"].DAILY_QUOTA_EXCEEDED);
                }
                throw new Error(`Translation failed with status ${response.status}`);
            }
            const data = await response.json();
            if (!data || !data.translations) {
                throw new Error('Invalid response from translation service');
            }
            return text.map((line, i)=>{
                if (!line?.trim().length) {
                    return line;
                }
                const translation = data.translations?.[i];
                if (translation?.daily_usage) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$translators$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveDailyUsage"])(translation.daily_usage);
                    deeplProvider.quotaExceeded = data.daily_usage >= quota;
                }
                return translation?.text || line;
            });
        } catch (error) {
            throw error;
        }
    }
};
}),
"[project]/apps/readest-app/src/services/translators/providers/azure.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "azureProvider",
    ()=>azureProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/misc.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$plugin$2d$http$40$2$2e$5$2e$6$2f$node_modules$2f40$tauri$2d$apps$2f$plugin$2d$http$2f$dist$2d$js$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tauri-apps+plugin-http@2.5.6/node_modules/@tauri-apps/plugin-http/dist-js/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/environment.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$lang$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/lang.ts [app-ssr] (ecmascript)");
;
;
;
;
let tokenCache = null;
const getAuthToken = async ()=>{
    const now = Date.now();
    if (tokenCache && tokenCache.expiresAt > now) {
        return tokenCache.token;
    }
    try {
        const fetch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTauriAppPlatform"])() ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$plugin$2d$http$40$2$2e$5$2e$6$2f$node_modules$2f40$tauri$2d$apps$2f$plugin$2d$http$2f$dist$2d$js$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetch"] : window.fetch;
        const tokenResponse = await fetch('https://edge.microsoft.com/translate/auth', {
            method: 'GET',
            headers: {
                'User-Agent': 'Mozilla/5.0'
            }
        });
        if (!tokenResponse.ok) {
            throw new Error(`Failed to get auth token: ${tokenResponse.status}`);
        }
        const token = await tokenResponse.text();
        const expiresAt = now + 8 * 60 * 1000;
        tokenCache = {
            token,
            expiresAt
        };
        return token;
    } catch (error) {
        console.error('Error getting Microsoft translation auth token:', error);
        throw error;
    }
};
const azureProvider = {
    name: 'azure',
    label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stubTranslation"])('Azure Translator'),
    translate: async (text, sourceLang, targetLang)=>{
        if (!text.length) return [];
        const results = [];
        const msSourceLang = sourceLang ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$lang$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeToFullLang"])(sourceLang) : '';
        const msTargetLang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$lang$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeToFullLang"])(targetLang);
        const translationPromises = text.map(async (line, index)=>{
            if (!line?.trim().length) {
                results[index] = line;
                return;
            }
            const url = 'https://api-edge.cognitive.microsofttranslator.com/translate';
            const params = new URLSearchParams({
                to: msTargetLang,
                'api-version': '3.0'
            });
            if (msSourceLang && msSourceLang.toLowerCase() !== 'auto') {
                params.append('from', msSourceLang);
            }
            const token = await getAuthToken();
            const fetch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTauriAppPlatform"])() ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$plugin$2d$http$40$2$2e$5$2e$6$2f$node_modules$2f40$tauri$2d$apps$2f$plugin$2d$http$2f$dist$2d$js$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetch"] : window.fetch;
            const response = await fetch(`${url}?${params.toString()}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify([
                    {
                        Text: line
                    }
                ])
            });
            if (!response.ok) {
                throw new Error(`Translation failed with status ${response.status}`);
            }
            const data = await response.json();
            if (Array.isArray(data) && data.length > 0 && data[0].translations) {
                results[index] = data[0].translations[0].text || line;
            } else {
                results[index] = line;
            }
        });
        await Promise.all(translationPromises);
        return results;
    }
};
}),
"[project]/apps/readest-app/src/services/translators/providers/google.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "googleProvider",
    ()=>googleProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/misc.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$plugin$2d$http$40$2$2e$5$2e$6$2f$node_modules$2f40$tauri$2d$apps$2f$plugin$2d$http$2f$dist$2d$js$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tauri-apps+plugin-http@2.5.6/node_modules/@tauri-apps/plugin-http/dist-js/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/environment.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$lang$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/lang.ts [app-ssr] (ecmascript)");
;
;
;
;
const googleProvider = {
    name: 'google',
    label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stubTranslation"])('Google Translate'),
    translate: async (text, sourceLang, targetLang)=>{
        if (!text.length) return [];
        const results = [];
        const translationPromises = text.map(async (line, index)=>{
            if (!line?.trim().length) {
                results[index] = line;
                return;
            }
            const url = new URL('https://translate.googleapis.com/translate_a/single');
            url.searchParams.append('client', 'gtx');
            url.searchParams.append('dt', 't');
            url.searchParams.append('sl', (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$lang$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeToShortLang"])(sourceLang).toLowerCase() || 'auto');
            url.searchParams.append('tl', (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$lang$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeToShortLang"])(targetLang).toLowerCase());
            url.searchParams.append('q', line);
            const fetch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTauriAppPlatform"])() ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$plugin$2d$http$40$2$2e$5$2e$6$2f$node_modules$2f40$tauri$2d$apps$2f$plugin$2d$http$2f$dist$2d$js$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetch"] : window.fetch;
            const response = await fetch(url.toString());
            if (!response.ok) {
                throw new Error(`Translation failed with status ${response.status}`);
            }
            const data = await response.json();
            if (Array.isArray(data) && Array.isArray(data[0])) {
                const translatedText = data[0].filter((segment)=>Array.isArray(segment) && segment[0]).map((segment)=>segment[0]).join('');
                results[index] = translatedText || line;
            } else {
                results[index] = line;
            }
        });
        await Promise.all(translationPromises);
        return results;
    }
};
}),
"[project]/apps/readest-app/src/services/translators/providers/yandex.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "yandexProvider",
    ()=>yandexProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/misc.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$plugin$2d$http$40$2$2e$5$2e$6$2f$node_modules$2f40$tauri$2d$apps$2f$plugin$2d$http$2f$dist$2d$js$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tauri-apps+plugin-http@2.5.6/node_modules/@tauri-apps/plugin-http/dist-js/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/environment.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$lang$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/lang.ts [app-ssr] (ecmascript)");
;
;
;
;
/**
 * Based on https://translate.toil.cc/v2/docs API specification
 */ async function translateSingleTextForService(text, lang, service) {
    const fetchImpl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTauriAppPlatform"])() ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$plugin$2d$http$40$2$2e$5$2e$6$2f$node_modules$2f40$tauri$2d$apps$2f$plugin$2d$http$2f$dist$2d$js$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetch"] : window.fetch;
    const url = 'https://translate.toil.cc/v2/translate/';
    const request = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            lang: lang,
            service: service,
            text: text
        })
    };
    const response = await fetchImpl(url, request);
    if (!response.ok) {
        const response_json = JSON.stringify(await response.json());
        throw new Error(`${service} failed with status ${response.status}\n${text.length}\n${JSON.stringify(request)}\n${response_json}`);
    }
    const data = await response.json();
    if (data && Array.isArray(data.translations)) {
        return data.translations;
    } else {
        // fallback: return original texts if translation failed
        return [
            text
        ];
    }
}
const yandexProvider = {
    name: 'yandex',
    label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stubTranslation"])('Yandex Translate'),
    authRequired: false,
    translate: async (texts, sourceLang, targetLang)=>{
        if (!texts.length) return [];
        /**
      Possible options:
      - yandexcloud: often returns 500: {"error":"The text couldn't be translated, because Forbidden"}
      - yandexgpt: often better than others
      - yandextranslate
      - yandexbrowser
    */ const service = "yandexgpt";
        // Yandex does not accept "auto" language
        const source_lang = sourceLang == "AUTO" ? "en" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$lang$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeToShortLang"])(sourceLang).toLowerCase();
        const target_lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$lang$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeToShortLang"])(targetLang).toLowerCase();
        const lang = `${source_lang}-${target_lang}`;
        const responses = await Promise.all(texts.map(async (text)=>{
            return await translateSingleTextForService(text, lang, service);
        }));
        const translatedTexts = responses.flat();
        return translatedTexts;
    }
};
}),
"[project]/apps/readest-app/src/services/translators/providers/index.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getTranslator",
    ()=>getTranslator,
    "getTranslators",
    ()=>getTranslators
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$translators$2f$providers$2f$deepl$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/translators/providers/deepl.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$translators$2f$providers$2f$azure$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/translators/providers/azure.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$translators$2f$providers$2f$google$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/translators/providers/google.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$translators$2f$providers$2f$yandex$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/translators/providers/yandex.ts [app-ssr] (ecmascript)");
;
;
;
;
function createTranslator(name, implementation) {
    if (name !== implementation.name) {
        throw Error(`Translator name "${name}" does not match implementation name "${implementation.name}"`);
    }
    return implementation;
}
const deeplTranslator = createTranslator('deepl', __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$translators$2f$providers$2f$deepl$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deeplProvider"]);
const azureTranslator = createTranslator('azure', __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$translators$2f$providers$2f$azure$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["azureProvider"]);
const googleTranslator = createTranslator('google', __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$translators$2f$providers$2f$google$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["googleProvider"]);
const yandexTranslator = createTranslator('yandex', __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$translators$2f$providers$2f$yandex$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["yandexProvider"]);
const availableTranslators = [
    deeplTranslator,
    azureTranslator,
    googleTranslator,
    yandexTranslator
];
const getTranslator = (name)=>{
    return availableTranslators.find((translator)=>translator.name === name);
};
const getTranslators = ()=>{
    return availableTranslators;
};
}),
"[project]/apps/readest-app/src/services/translators/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$translators$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/translators/types.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$translators$2f$cache$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/translators/cache.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$translators$2f$polish$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/translators/polish.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$translators$2f$preprocess$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/translators/preprocess.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$translators$2f$providers$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/translators/providers/index.ts [app-ssr] (ecmascript)");
;
;
;
;
;
}),
"[project]/apps/readest-app/src/helpers/openWith.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseOpenWithFiles",
    ()=>parseOpenWithFiles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/environment.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$plugin$2d$deep$2d$link$40$2$2e$4$2e$6$2f$node_modules$2f40$tauri$2d$apps$2f$plugin$2d$deep$2d$link$2f$dist$2d$js$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tauri-apps+plugin-deep-link@2.4.6/node_modules/@tauri-apps/plugin-deep-link/dist-js/index.js [app-ssr] (ecmascript)");
;
;
const parseWindowOpenWithFiles = ()=>{
    const params = new URLSearchParams(window.location.search);
    const files = params.getAll('file');
    return files.length > 0 ? files : window.OPEN_WITH_FILES;
};
const parseCLIOpenWithFiles = async ()=>{
    const { getMatches } = await __turbopack_context__.A("[project]/node_modules/.pnpm/@tauri-apps+plugin-cli@2.4.1/node_modules/@tauri-apps/plugin-cli/dist-js/index.js [app-ssr] (ecmascript, async loader)");
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
    const urls = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$plugin$2d$deep$2d$link$40$2$2e$4$2e$6$2f$node_modules$2f40$tauri$2d$apps$2f$plugin$2d$deep$2d$link$2f$dist$2d$js$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCurrent"])();
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
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isWebAppPlatform"])()) return [];
    let files = parseWindowOpenWithFiles();
    if ((!files || files.length === 0) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasCli"])()) {
        files = await parseCLIOpenWithFiles();
    }
    if (!files || files.length === 0) {
        files = await parseIntentOpenWithFiles(appService);
    }
    return files;
};
}),
"[project]/apps/readest-app/src/helpers/updater.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$semver$40$7$2e$7$2e$2$2f$node_modules$2f$semver$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/semver@7.7.2/node_modules/semver/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$plugin$2d$updater$40$2$2e$9$2e$0$2f$node_modules$2f40$tauri$2d$apps$2f$plugin$2d$updater$2f$dist$2d$js$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tauri-apps+plugin-updater@2.9.0/node_modules/@tauri-apps/plugin-updater/dist-js/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$plugin$2d$os$40$2$2e$3$2e$2$2f$node_modules$2f40$tauri$2d$apps$2f$plugin$2d$os$2f$dist$2d$js$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tauri-apps+plugin-os@2.3.2/node_modules/@tauri-apps/plugin-os/dist-js/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$plugin$2d$http$40$2$2e$5$2e$6$2f$node_modules$2f40$tauri$2d$apps$2f$plugin$2d$http$2f$dist$2d$js$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tauri-apps+plugin-http@2.5.6/node_modules/@tauri-apps/plugin-http/dist-js/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$webviewWindow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tauri-apps+api@2.9.1/node_modules/@tauri-apps/api/webviewWindow.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$UpdaterWindow$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/components/UpdaterWindow.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/environment.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$version$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/version.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/constants.ts [app-ssr] (ecmascript)");
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
    const win = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$webviewWindow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebviewWindow"]('updater', {
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
    if (isAutoCheck && lastCheck && now - parseInt(lastCheck, 10) < __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CHECK_UPDATE_INTERVAL_SEC"] * 1000) return false;
    localStorage.setItem(LAST_CHECK_KEY, now.toString());
    console.log('Checking for updates');
    const OS_TYPE = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$plugin$2d$os$40$2$2e$3$2e$2$2f$node_modules$2f40$tauri$2d$apps$2f$plugin$2d$os$2f$dist$2d$js$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["type"])();
    if ([
        'macos',
        'windows',
        'linux'
    ].includes(OS_TYPE)) {
        const update = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$plugin$2d$updater$40$2$2e$9$2e$0$2f$node_modules$2f40$tauri$2d$apps$2f$plugin$2d$updater$2f$dist$2d$js$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["check"])();
        if (update) {
            showUpdateWindow(update.version);
        }
        return !!update;
    } else if (OS_TYPE === 'android') {
        try {
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$plugin$2d$http$40$2$2e$5$2e$6$2f$node_modules$2f40$tauri$2d$apps$2f$plugin$2d$http$2f$dist$2d$js$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetch"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["READEST_UPDATER_FILE"], {
                connectTimeout: 5000
            });
            const data = await response.json();
            const isNewer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$semver$40$7$2e$7$2e$2$2f$node_modules$2f$semver$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].gt(data.version, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$version$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAppVersion"])());
            if (isNewer && ('android-arm64' in data.platforms || 'android-universal' in data.platforms)) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$UpdaterWindow$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setUpdaterWindowVisible"])(true, data.version, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$version$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAppVersion"])());
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
    const currentVersion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$version$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAppVersion"])();
    const lastShownVersion = getLastShownReleaseNotesVersion();
    if (lastShownVersion && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$semver$40$7$2e$7$2e$2$2f$node_modules$2f$semver$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].gt(currentVersion, lastShownVersion) || !isAutoCheck) {
        try {
            const fetchFunc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTauriAppPlatform"])() ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$plugin$2d$http$40$2$2e$5$2e$6$2f$node_modules$2f40$tauri$2d$apps$2f$plugin$2d$http$2f$dist$2d$js$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetch"] : window.fetch;
            const res = await fetchFunc(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["READEST_CHANGELOG_FILE"]);
            if (res.ok) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$UpdaterWindow$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setUpdaterWindowVisible"])(true, currentVersion, lastShownVersion, false);
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
}),
"[project]/apps/readest-app/src/helpers/settings.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "saveSysSettings",
    ()=>saveSysSettings,
    "saveViewSettings",
    ()=>saveViewSettings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/bookDataStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/readerStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/settingsStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$style$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/style.ts [app-ssr] (ecmascript)");
;
;
;
;
const saveViewSettings = async (envConfig, bookKey, key, value, skipGlobal = false, applyStyles = true)=>{
    const { settings, isSettingsGlobal, setSettings, saveSettings } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"].getState();
    const { bookKeys, getView, getViewState, getViewSettings, setViewSettings } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$readerStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReaderStore"].getState();
    const { getConfig, saveConfig } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$bookDataStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBookDataStore"].getState();
    const applyViewSettings = async (bookKey)=>{
        const viewSettings = getViewSettings(bookKey);
        const viewState = getViewState(bookKey);
        if (bookKey && viewSettings && viewSettings[key] !== value) {
            viewSettings[key] = value;
            setViewSettings(bookKey, viewSettings);
            if (applyStyles) {
                const view = getView(bookKey);
                view?.renderer.setStyles?.((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$style$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStyles"])(viewSettings));
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
    const { settings, setSettings, saveSettings } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"].getState();
    if (settings[key] !== value) {
        settings[key] = value;
        setSettings(settings);
        await saveSettings(envConfig, settings);
    }
};
}),
"[project]/apps/readest-app/src/helpers/shortcuts.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/apps/readest-app/src/types/book.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/apps/readest-app/src/data/demo/library.en.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"library":["https://cdn.readest.com/books/a-room-of-one-s-own.epub","https://cdn.readest.com/books/hamlet.epub","https://cdn.readest.com/books/meditations.epub","https://cdn.readest.com/books/the-great-gatsby.epub","https://cdn.readest.com/books/the-scarlet-letter.epub","https://cdn.readest.com/books/this-side-of-paradise.epub"]});}),
"[project]/apps/readest-app/src/data/demo/library.zh.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"library":[]});}),
"[project]/apps/readest-app/src/styles/fonts.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/misc.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$path$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/path.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$md5$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/md5.ts [app-ssr] (ecmascript) <locals>");
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
    const mountCJKFonts = isCJK || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isCJKEnv"])();
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
    const fileName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$path$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFilename"])(path);
    return fileName.replace(/\.(ttf|otf|woff|woff2)$/i, '');
}
function getFontId(name) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$md5$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["md5Fingerprint"])(name);
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
}),
];

//# sourceMappingURL=apps_readest-app_src_d6a216ab._.js.map