module.exports = [
"[project]/apps/readest-app/src/utils/ua.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/apps/readest-app/src/utils/simplecc.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "initSimpleCC",
    ()=>initSimpleCC,
    "runSimpleCC",
    ()=>runSimpleCC
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$public$2f$vendor$2f$simplecc$2f$simplecc_wasm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/public/vendor/simplecc/simplecc_wasm.js [ssr] (ecmascript)");
;
let initialized = false;
const initSimpleCC = async ()=>{
    if (initialized) return;
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$public$2f$vendor$2f$simplecc$2f$simplecc_wasm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])('/vendor/simplecc/simplecc_wasm_bg.wasm');
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
    return reverse ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$public$2f$vendor$2f$simplecc$2f$simplecc_wasm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["simplecc"])(text, convertReverseMap[variant]) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$public$2f$vendor$2f$simplecc$2f$simplecc_wasm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["simplecc"])(text, variant);
};
;
}),
"[project]/apps/readest-app/src/utils/toc.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "findParentPath",
    ()=>findParentPath,
    "findTocItemBS",
    ()=>findTocItemBS,
    "updateToc",
    ()=>updateToc
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$libs$2f$document$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/libs/document.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$simplecc$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/simplecc.ts [ssr] (ecmascript)");
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
        const comparison = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$libs$2f$document$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["CFI"].compare(currentCfi, cfi);
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
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$simplecc$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["initSimpleCC"])();
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
            item.label = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$simplecc$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["runSimpleCC"])(item.label, convertChineseVariant);
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
"[project]/apps/readest-app/src/utils/lang.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

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
var __TURBOPACK__imported__module__$5b$externals$5d2f$franc$2d$min__$5b$external$5d$__$28$franc$2d$min$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/franc-min [external] (franc-min, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$iso$2d$639$2d$2__$5b$external$5d$__$28$iso$2d$639$2d$2$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/iso-639-2 [external] (iso-639-2, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$iso$2d$639$2d$3__$5b$external$5d$__$28$iso$2d$639$2d$3$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/iso-639-3 [external] (iso-639-3, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$franc$2d$min__$5b$external$5d$__$28$franc$2d$min$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$iso$2d$639$2d$2__$5b$external$5d$__$28$iso$2d$639$2d$2$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$iso$2d$639$2d$3__$5b$external$5d$__$28$iso$2d$639$2d$3$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$franc$2d$min__$5b$external$5d$__$28$franc$2d$min$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$iso$2d$639$2d$2__$5b$external$5d$__$28$iso$2d$639$2d$2$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$iso$2d$639$2d$3__$5b$external$5d$__$28$iso$2d$639$2d$3$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
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
    return __TURBOPACK__imported__module__$5b$externals$5d2f$iso$2d$639$2d$2__$5b$external$5d$__$28$iso$2d$639$2d$2$2c$__esm_import$29$__["iso6392"].some((l)=>l.iso6391 === code || l.iso6392B === code);
};
const code6392to6391 = (code)=>{
    const lang = __TURBOPACK__imported__module__$5b$externals$5d2f$iso$2d$639$2d$2__$5b$external$5d$__$28$iso$2d$639$2d$2$2c$__esm_import$29$__["iso6392"].find((l)=>l.iso6392B === code);
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
    return __TURBOPACK__imported__module__$5b$externals$5d2f$iso$2d$639$2d$3__$5b$external$5d$__$28$iso$2d$639$2d$3$2c$__esm_import$29$__["iso6393To1"][macro] || '';
};
const getLanguageName = (code)=>{
    const lang = normalizedLangCode(code);
    const language = __TURBOPACK__imported__module__$5b$externals$5d2f$iso$2d$639$2d$2__$5b$external$5d$__$28$iso$2d$639$2d$2$2c$__esm_import$29$__["iso6392"].find((l)=>l.iso6391 === lang || l.iso6392B === lang);
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
        const iso6393Lang = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$franc$2d$min__$5b$external$5d$__$28$franc$2d$min$2c$__esm_import$29$__["franc"])(content.substring(0, 1000));
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
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/readest-app/src/utils/book.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

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
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$libs$2f$document$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/libs/document.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/constants.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/misc.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$rtl$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/rtl.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$lang$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/lang.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$md5$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/md5.ts [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$js$2d$md5__$5b$external$5d$__$28$js$2d$md5$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/js-md5 [external] (js-md5, cjs)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$lang$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$lang$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
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
    return Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$libs$2f$document$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["EXTS"]).includes(filename.split('.').pop());
};
const INIT_BOOK_CONFIG = {
    updatedAt: 0
};
const formatLanguageMap = (x, defaultLang = false)=>{
    const userLang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getUserLang"])();
    if (!x) return '';
    if (typeof x === 'string') return x;
    const keys = Object.keys(x);
    return defaultLang ? x[keys[0]] : x[userLang] || x[keys[0]];
};
const listFormater = (narrow = false, lang = '')=>{
    lang = lang ? lang : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getUserLang"])();
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
    return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["SUPPORTED_LANGS"][langCode] || langCode.toUpperCase();
};
const formatLanguage = (lang)=>{
    return Array.isArray(lang) ? lang.map(langCodeToLangName).join(', ') : langCodeToLangName(lang || '');
};
const getPrimaryLanguage = (lang)=>{
    const primaryLang = Array.isArray(lang) ? lang[0] : lang;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$lang$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["isValidLang"])(primaryLang)) {
        const normalizedLang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$lang$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["normalizedLangCode"])(primaryLang);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$lang$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["code6392to6391"])(normalizedLang) || normalizedLang;
    }
    return 'en';
};
const formatDate = (date, isUTC = false)=>{
    if (!date) return;
    const userLang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getUserLang"])();
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
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$rtl$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getDirFromLanguage"])(lang);
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
        const metaHash = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$js$2d$md5__$5b$external$5d$__$28$js$2d$md5$2c$__cjs$29$__["md5"])(hashSource.normalize('NFC'));
        return metaHash;
    } catch (error) {
        console.error('Error generating metadata hash:', error);
    }
    return;
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/readest-app/src/utils/event.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/apps/readest-app/src/utils/open.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "interceptWindowOpen",
    ()=>interceptWindowOpen
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$plugin$2d$opener__$5b$external$5d$__$2840$tauri$2d$apps$2f$plugin$2d$opener$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@tauri-apps/plugin-opener [external] (@tauri-apps/plugin-opener, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/environment.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$plugin$2d$opener__$5b$external$5d$__$2840$tauri$2d$apps$2f$plugin$2d$opener$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$plugin$2d$opener__$5b$external$5d$__$2840$tauri$2d$apps$2f$plugin$2d$opener$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
const interceptWindowOpen = ()=>{
    const windowOpen = window.open;
    globalThis.open = function(url, target, features) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["isTauriAppPlatform"])()) {
            (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$plugin$2d$opener__$5b$external$5d$__$2840$tauri$2d$apps$2f$plugin$2d$opener$2c$__esm_import$29$__["openUrl"])(url?.toString() || '');
            return null;
        } else {
            return windowOpen(url, target, features);
        }
    };
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/readest-app/src/utils/jwt.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

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
var __TURBOPACK__imported__module__$5b$externals$5d2f$jose__$5b$external$5d$__$28$jose$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/jose [external] (jose, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$jose__$5b$external$5d$__$28$jose$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$jose__$5b$external$5d$__$28$jose$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
// 单用户认证配置
// 为确保中间件与API一致，开发环境使用固定默认密钥
const SECRET_KEY = process.env['AUTH_SECRET'] || 'dev-secret';
const USER_PASSWORD = process.env['AUTH_PASSWORD'] || 'changeme-' + Math.random().toString(36).substring(2, 15);
const USERNAME = 'xingjjjjj';
// 在服务器端启动时打印认证信息
if ("TURBOPACK compile-time truthy", 1) {
    console.log('\n========== READEST AUTHENTICATION (Development) ==========');
    console.log(`Username: ${USERNAME}`);
    console.log(`Password: ${USER_PASSWORD}`);
    console.log(`Secret Key: ${SECRET_KEY}`);
    console.log('==========================================================\n');
}
const key = new TextEncoder().encode(SECRET_KEY);
async function createJWT(username) {
    const token = await new __TURBOPACK__imported__module__$5b$externals$5d2f$jose__$5b$external$5d$__$28$jose$2c$__esm_import$29$__["SignJWT"]({
        username
    }).setProtectedHeader({
        alg: 'HS256'
    }).setIssuedAt().setExpirationTime('30d').sign(key);
    return token;
}
async function verifyJWT(token) {
    try {
        const verified = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$jose__$5b$external$5d$__$28$jose$2c$__esm_import$29$__["jwtVerify"])(token, key);
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
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/readest-app/src/utils/access.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

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
var __TURBOPACK__imported__module__$5b$externals$5d2f$jwt$2d$decode__$5b$external$5d$__$28$jwt$2d$decode$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/jwt-decode [external] (jwt-decode, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$jwt$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/jwt.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/constants.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/environment.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$translators$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/translators/utils.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$jwt$2d$decode__$5b$external$5d$__$28$jwt$2d$decode$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$jwt$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$translators$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$jwt$2d$decode__$5b$external$5d$__$28$jwt$2d$decode$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$jwt$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$translators$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
const getSubscriptionPlan = (token)=>{
    const data = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$jwt$2d$decode__$5b$external$5d$__$28$jwt$2d$decode$2c$__esm_import$29$__["jwtDecode"])(token) || {};
    return data['plan'] || 'free';
};
const getUserProfilePlan = (token)=>{
    const data = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$jwt$2d$decode__$5b$external$5d$__$28$jwt$2d$decode$2c$__esm_import$29$__["jwtDecode"])(token) || {};
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
    const data = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$jwt$2d$decode__$5b$external$5d$__$28$jwt$2d$decode$2c$__esm_import$29$__["jwtDecode"])(token) || {};
    const plan = data['plan'] || 'free';
    const usage = data['storage_usage_bytes'] || 0;
    const purchasedQuota = data['storage_purchased_bytes'] || 0;
    const fixedQuota = parseInt(process.env['NEXT_PUBLIC_STORAGE_FIXED_QUOTA'] || '0');
    const planQuota = fixedQuota || __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["DEFAULT_STORAGE_QUOTA"][plan] || __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["DEFAULT_STORAGE_QUOTA"]['free'];
    const quota = planQuota + purchasedQuota;
    return {
        plan,
        usage,
        quota
    };
};
const getTranslationPlanData = (token)=>{
    const data = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$jwt$2d$decode__$5b$external$5d$__$28$jwt$2d$decode$2c$__esm_import$29$__["jwtDecode"])(token) || {};
    const plan = data['plan'] || 'free';
    const usage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$translators$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getDailyUsage"])() || 0;
    const quota = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["DEFAULT_DAILY_TRANSLATION_QUOTA"][plan];
    return {
        plan,
        usage,
        quota
    };
};
const getDailyTranslationPlanData = (token)=>{
    const data = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$jwt$2d$decode__$5b$external$5d$__$28$jwt$2d$decode$2c$__esm_import$29$__["jwtDecode"])(token) || {};
    const plan = data['plan'] || 'free';
    const fixedQuota = parseInt(process.env['NEXT_PUBLIC_TRANSLATION_FIXED_QUOTA'] || '0');
    const quota = fixedQuota || __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["DEFAULT_DAILY_TRANSLATION_QUOTA"][plan] || __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["DEFAULT_DAILY_TRANSLATION_QUOTA"]['free'];
    return {
        plan,
        quota
    };
};
const getAccessToken = async ()=>{
    // Get token from localStorage (client-side) or from request (server-side)
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["isWebAppPlatform"])()) {
        return localStorage.getItem('token') ?? null;
    }
    return null;
};
const getUserID = async ()=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["isWebAppPlatform"])()) {
        const user = localStorage.getItem('user') ?? '{}';
        return JSON.parse(user).id ?? null;
    }
    return null;
};
const validateUserAndToken = async (authHeader)=>{
    if (!authHeader) return {};
    const token = authHeader.replace('Bearer ', '');
    try {
        const payload = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$jwt$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["verifyJWT"])(token);
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
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/readest-app/src/utils/transfer.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

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
var __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$api$2f$core__$5b$external$5d$__$2840$tauri$2d$apps$2f$api$2f$core$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@tauri-apps/api/core [external] (@tauri-apps/api/core, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$api$2f$core__$5b$external$5d$__$2840$tauri$2d$apps$2f$api$2f$core$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$api$2f$core__$5b$external$5d$__$2840$tauri$2d$apps$2f$api$2f$core$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
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
    const onProgress = new __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$api$2f$core__$5b$external$5d$__$2840$tauri$2d$apps$2f$api$2f$core$2c$__esm_import$29$__["Channel"]();
    if (progressHandler) {
        onProgress.onmessage = progressHandler;
    }
    return await (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$api$2f$core__$5b$external$5d$__$2840$tauri$2d$apps$2f$api$2f$core$2c$__esm_import$29$__["invoke"])('upload_file', {
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
    const onProgress = new __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$api$2f$core__$5b$external$5d$__$2840$tauri$2d$apps$2f$api$2f$core$2c$__esm_import$29$__["Channel"]();
    if (progressHandler) {
        onProgress.onmessage = progressHandler;
    }
    const responseHeaders = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$api$2f$core__$5b$external$5d$__$2840$tauri$2d$apps$2f$api$2f$core$2c$__esm_import$29$__["invoke"])('download_file', {
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
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/readest-app/src/utils/network.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/apps/readest-app/src/utils/debounce.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "debounce",
    ()=>debounce
]);
const debounce = (func, delay, options = {
    emitLast: true
})=>{
    let timeout = null;
    let lastArgs = null;
    const debounced = (...args)=>{
        lastArgs = args;
        if (timeout) {
            clearTimeout(timeout);
        }
        if (options.emitLast) {
            timeout = setTimeout(()=>{
                if (lastArgs) {
                    func(...lastArgs);
                    lastArgs = null;
                }
                timeout = null;
            }, delay);
        } else {
            timeout = setTimeout(()=>{
                func(...args);
                timeout = null;
            }, delay);
        }
    };
    /**
   * Immediately executes the last pending debounced function call.
   */ debounced.flush = ()=>{
        if (timeout) {
            clearTimeout(timeout);
            timeout = null;
            if (lastArgs) {
                func(...lastArgs);
                lastArgs = null;
            }
        }
    };
    /**
   * Cancels the pending debounced function call.
   */ debounced.cancel = ()=>{
        if (timeout) {
            clearTimeout(timeout);
            timeout = null;
            lastArgs = null;
        }
    };
    return debounced;
};
}),
"[project]/apps/readest-app/src/utils/window.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

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
var __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$api$2f$window__$5b$external$5d$__$2840$tauri$2d$apps$2f$api$2f$window$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@tauri-apps/api/window [external] (@tauri-apps/api/window, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$api$2f$event__$5b$external$5d$__$2840$tauri$2d$apps$2f$api$2f$event$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@tauri-apps/api/event [external] (@tauri-apps/api/event, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$plugin$2d$process__$5b$external$5d$__$2840$tauri$2d$apps$2f$plugin$2d$process$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@tauri-apps/plugin-process [external] (@tauri-apps/plugin-process, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$plugin$2d$os__$5b$external$5d$__$2840$tauri$2d$apps$2f$plugin$2d$os$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@tauri-apps/plugin-os [external] (@tauri-apps/plugin-os, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/event.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$api$2f$window__$5b$external$5d$__$2840$tauri$2d$apps$2f$api$2f$window$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$api$2f$event__$5b$external$5d$__$2840$tauri$2d$apps$2f$api$2f$event$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$plugin$2d$process__$5b$external$5d$__$2840$tauri$2d$apps$2f$plugin$2d$process$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$plugin$2d$os__$5b$external$5d$__$2840$tauri$2d$apps$2f$plugin$2d$os$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$api$2f$window__$5b$external$5d$__$2840$tauri$2d$apps$2f$api$2f$window$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$api$2f$event__$5b$external$5d$__$2840$tauri$2d$apps$2f$api$2f$event$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$plugin$2d$process__$5b$external$5d$__$2840$tauri$2d$apps$2f$plugin$2d$process$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$plugin$2d$os__$5b$external$5d$__$2840$tauri$2d$apps$2f$plugin$2d$os$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
const tauriGetWindowLogicalPosition = async ()=>{
    const currentWindow = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$api$2f$window__$5b$external$5d$__$2840$tauri$2d$apps$2f$api$2f$window$2c$__esm_import$29$__["getCurrentWindow"])();
    const factor = await currentWindow.scaleFactor();
    const physicalPos = await currentWindow.outerPosition();
    return {
        x: physicalPos.x / factor,
        y: physicalPos.y / factor
    };
};
const tauriHandleMinimize = async ()=>{
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$api$2f$window__$5b$external$5d$__$2840$tauri$2d$apps$2f$api$2f$window$2c$__esm_import$29$__["getCurrentWindow"])().minimize();
};
// workaround to reset transparent background when toggling fullscreen/maximize
const linuxWindowRestoreTransparentBg = async ()=>{
    const currentSize = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$api$2f$window__$5b$external$5d$__$2840$tauri$2d$apps$2f$api$2f$window$2c$__esm_import$29$__["getCurrentWindow"])().innerSize();
    currentSize.width -= 1;
    currentSize.height -= 1;
    await (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$api$2f$window__$5b$external$5d$__$2840$tauri$2d$apps$2f$api$2f$window$2c$__esm_import$29$__["getCurrentWindow"])().setSize(currentSize);
    setTimeout(async ()=>{
        const currentSize = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$api$2f$window__$5b$external$5d$__$2840$tauri$2d$apps$2f$api$2f$window$2c$__esm_import$29$__["getCurrentWindow"])().innerSize();
        currentSize.width += 1;
        currentSize.height += 1;
        await (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$api$2f$window__$5b$external$5d$__$2840$tauri$2d$apps$2f$api$2f$window$2c$__esm_import$29$__["getCurrentWindow"])().setSize(currentSize);
    }, 100);
};
const tauriHandleToggleMaximize = async ()=>{
    const currentWindow = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$api$2f$window__$5b$external$5d$__$2840$tauri$2d$apps$2f$api$2f$window$2c$__esm_import$29$__["getCurrentWindow"])();
    const isFullscreen = await currentWindow.isFullscreen();
    if (isFullscreen) {
        await currentWindow.setFullscreen(false);
        await currentWindow.unmaximize();
    } else {
        await currentWindow.toggleMaximize();
    }
    if (await (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$plugin$2d$os__$5b$external$5d$__$2840$tauri$2d$apps$2f$plugin$2d$os$2c$__esm_import$29$__["type"])() === 'linux') {
        linuxWindowRestoreTransparentBg();
    }
};
const tauriHandleClose = async ()=>{
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$api$2f$window__$5b$external$5d$__$2840$tauri$2d$apps$2f$api$2f$window$2c$__esm_import$29$__["getCurrentWindow"])().close();
};
const tauriHandleOnCloseWindow = async (callback)=>{
    const currentWindow = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$api$2f$window__$5b$external$5d$__$2840$tauri$2d$apps$2f$api$2f$window$2c$__esm_import$29$__["getCurrentWindow"])();
    return await currentWindow.onCloseRequested(async (event)=>{
        event.preventDefault();
        await callback();
        if (currentWindow.label.startsWith('reader')) {
            await (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$api$2f$event__$5b$external$5d$__$2840$tauri$2d$apps$2f$api$2f$event$2c$__esm_import$29$__["emitTo"])('main', 'close-reader-window', {
                label: currentWindow.label
            });
            setTimeout(()=>currentWindow.destroy(), 300);
        } else if (currentWindow.label === 'main') {
            await currentWindow.destroy();
        }
    });
};
const tauriHandleToggleFullScreen = async ()=>{
    const currentWindow = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$api$2f$window__$5b$external$5d$__$2840$tauri$2d$apps$2f$api$2f$window$2c$__esm_import$29$__["getCurrentWindow"])();
    const isFullscreen = await currentWindow.isFullscreen();
    const isMaximized = await currentWindow.isMaximized();
    if (isMaximized) {
        await currentWindow.unmaximize();
    } else {
        await currentWindow.setFullscreen(!isFullscreen);
    }
    if (await (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$plugin$2d$os__$5b$external$5d$__$2840$tauri$2d$apps$2f$plugin$2d$os$2c$__esm_import$29$__["type"])() === 'linux') {
        linuxWindowRestoreTransparentBg();
    }
};
const tauriHandleSetAlwaysOnTop = async (isAlwaysOnTop)=>{
    const currentWindow = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$api$2f$window__$5b$external$5d$__$2840$tauri$2d$apps$2f$api$2f$window$2c$__esm_import$29$__["getCurrentWindow"])();
    await currentWindow.setAlwaysOnTop(isAlwaysOnTop);
};
const tauriGetAlwaysOnTop = async ()=>{
    const currentWindow = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$api$2f$window__$5b$external$5d$__$2840$tauri$2d$apps$2f$api$2f$window$2c$__esm_import$29$__["getCurrentWindow"])();
    return await currentWindow.isAlwaysOnTop();
};
const tauriHandleOnWindowFocus = async (callback)=>{
    const currentWindow = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$api$2f$window__$5b$external$5d$__$2840$tauri$2d$apps$2f$api$2f$window$2c$__esm_import$29$__["getCurrentWindow"])();
    return currentWindow.listen(__TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$api$2f$event__$5b$external$5d$__$2840$tauri$2d$apps$2f$api$2f$event$2c$__esm_import$29$__["TauriEvent"].WINDOW_FOCUS, async ()=>{
        await callback();
    });
};
const tauriQuitApp = async ()=>{
    await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$event$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["eventDispatcher"].dispatch('quit-app');
    await (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$plugin$2d$process__$5b$external$5d$__$2840$tauri$2d$apps$2f$plugin$2d$process$2c$__esm_import$29$__["exit"])(0);
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/readest-app/src/utils/throttle.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/apps/readest-app/src/utils/nav.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.28.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/navigation.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$api$2f$window__$5b$external$5d$__$2840$tauri$2d$apps$2f$api$2f$window$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@tauri-apps/api/window [external] (@tauri-apps/api/window, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$api$2f$webviewWindow__$5b$external$5d$__$2840$tauri$2d$apps$2f$api$2f$webviewWindow$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@tauri-apps/api/webviewWindow [external] (@tauri-apps/api/webviewWindow, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/environment.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/constants.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$api$2f$window__$5b$external$5d$__$2840$tauri$2d$apps$2f$api$2f$window$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$api$2f$webviewWindow__$5b$external$5d$__$2840$tauri$2d$apps$2f$api$2f$webviewWindow$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$api$2f$window__$5b$external$5d$__$2840$tauri$2d$apps$2f$api$2f$window$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$api$2f$webviewWindow__$5b$external$5d$__$2840$tauri$2d$apps$2f$api$2f$webviewWindow$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
'use client';
;
;
;
;
;
let readerWindowsCount = 0;
const createReaderWindow = (appService, url)=>{
    const currentWindow = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$api$2f$window__$5b$external$5d$__$2840$tauri$2d$apps$2f$api$2f$window$2c$__esm_import$29$__["getCurrentWindow"])();
    const label = currentWindow.label;
    const newLabelPrefix = label === 'main' ? 'reader' : label;
    const win = new __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$api$2f$webviewWindow__$5b$external$5d$__$2840$tauri$2d$apps$2f$api$2f$webviewWindow$2c$__esm_import$29$__["WebviewWindow"](`${newLabelPrefix}-${readerWindowsCount}`, {
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
    const ids = bookIds.join(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["BOOK_IDS_SEPARATOR"]);
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
    const ids = bookIds.join(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["BOOK_IDS_SEPARATOR"]);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["isWebAppPlatform"])() && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["isPWA"])()) {
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["redirect"])('/library');
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
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/readest-app/src/utils/image.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Process book cover for Discord Rich Presence:
 * - Fit to 512x512 with transparent background
 * - Add Readest icon overlay at bottom right (10px padding)
 * - Return as JPEG blob
 */ __turbopack_context__.s([
    "fetchImageAsBase64",
    ()=>fetchImageAsBase64,
    "processDiscordCover",
    ()=>processDiscordCover
]);
async function processDiscordCover(coverUrl, iconUrl) {
    const SIZE = 512;
    const ICON_WIDTH = 224;
    const ICON_HEIGHT = 182;
    const PADDING = 10;
    try {
        const coverResponse = await fetch(coverUrl);
        const coverBlob = await coverResponse.blob();
        const coverImg = new Image();
        coverImg.crossOrigin = 'anonymous';
        const iconResponse = await fetch(iconUrl);
        const iconBlob = await iconResponse.blob();
        const iconImg = new Image();
        iconImg.crossOrigin = 'anonymous';
        return new Promise((resolve, reject)=>{
            let coverLoaded = false;
            let iconLoaded = false;
            const checkBothLoaded = ()=>{
                if (!coverLoaded || !iconLoaded) return;
                try {
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');
                    if (!ctx) {
                        reject(new Error('Failed to get canvas context'));
                        return;
                    }
                    canvas.width = SIZE;
                    canvas.height = SIZE;
                    // Calculate cover dimensions to fit in 512x512
                    const aspectRatio = coverImg.width / coverImg.height;
                    let drawWidth, drawHeight, offsetX, offsetY;
                    if (aspectRatio > 1) {
                        // Wider than tall
                        drawWidth = SIZE;
                        drawHeight = SIZE / aspectRatio;
                        offsetX = 0;
                        offsetY = (SIZE - drawHeight) / 2;
                    } else {
                        // Taller than wide
                        drawHeight = SIZE;
                        drawWidth = SIZE * aspectRatio;
                        offsetX = (SIZE - drawWidth) / 2;
                        offsetY = 0;
                    }
                    // Draw cover image centered
                    ctx.imageSmoothingEnabled = true;
                    ctx.imageSmoothingQuality = 'high';
                    ctx.drawImage(coverImg, offsetX, offsetY, drawWidth, drawHeight);
                    // Draw icon at bottom right
                    ctx.drawImage(iconImg, SIZE - ICON_WIDTH - PADDING, SIZE - ICON_HEIGHT - PADDING, ICON_WIDTH, ICON_HEIGHT);
                    // Convert to JPEG blob
                    canvas.toBlob((blob)=>{
                        if (blob) {
                            resolve(blob);
                        } else {
                            reject(new Error('Failed to create blob'));
                        }
                    }, 'image/jpeg', 0.9);
                } catch (error) {
                    reject(new Error(`Failed to process cover: ${error}`));
                }
            };
            coverImg.onload = ()=>{
                coverLoaded = true;
                checkBothLoaded();
            };
            iconImg.onload = ()=>{
                iconLoaded = true;
                checkBothLoaded();
            };
            coverImg.onerror = ()=>reject(new Error('Failed to load cover image'));
            iconImg.onerror = ()=>reject(new Error('Failed to load icon image'));
            const coverObjectUrl = URL.createObjectURL(coverBlob);
            const iconObjectUrl = URL.createObjectURL(iconBlob);
            coverImg.src = coverObjectUrl;
            iconImg.src = iconObjectUrl;
            coverImg.onload = function() {
                URL.revokeObjectURL(coverObjectUrl);
                coverLoaded = true;
                checkBothLoaded();
            };
            iconImg.onload = function() {
                URL.revokeObjectURL(iconObjectUrl);
                iconLoaded = true;
                checkBothLoaded();
            };
        });
    } catch (error) {
        console.error('Error processing Discord cover:', error);
        throw error;
    }
}
async function fetchImageAsBase64(url, options = {}) {
    const { targetWidth = 256, format = 'image/jpeg', quality = 0.85 } = options;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch image: ${response.status} ${response.statusText}`);
        }
        const blob = await response.blob();
        const img = new Image();
        img.crossOrigin = 'anonymous';
        return new Promise((resolve, reject)=>{
            img.onload = ()=>{
                try {
                    const aspectRatio = img.height / img.width;
                    const newWidth = targetWidth;
                    const newHeight = Math.round(newWidth * aspectRatio);
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');
                    if (!ctx) {
                        reject(new Error('Failed to get canvas context'));
                        return;
                    }
                    canvas.width = newWidth;
                    canvas.height = newHeight;
                    ctx.imageSmoothingEnabled = true;
                    ctx.imageSmoothingQuality = 'high';
                    ctx.drawImage(img, 0, 0, newWidth, newHeight);
                    const base64 = canvas.toDataURL(format, quality);
                    resolve(base64);
                } catch (error) {
                    reject(new Error(`Failed to scale image: ${error}`));
                }
            };
            img.onerror = ()=>reject(new Error('Failed to load image for scaling'));
            const objectUrl = URL.createObjectURL(blob);
            img.src = objectUrl;
            const cleanup = ()=>URL.revokeObjectURL(objectUrl);
            const originalOnload = img.onload;
            const originalOnerror = img.onerror;
            img.onload = function(ev) {
                cleanup();
                if (originalOnload) originalOnload.call(this, ev);
            };
            img.onerror = function(ev) {
                cleanup();
                if (originalOnerror) originalOnerror.call(this, ev);
            };
        });
    } catch (error) {
        console.error('Error fetching and encoding image:', error);
        throw error;
    }
}
}),
"[project]/apps/readest-app/src/utils/discord.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "clearDiscordPresence",
    ()=>clearDiscordPresence,
    "updateDiscordPresence",
    ()=>updateDiscordPresence
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$api$2f$core__$5b$external$5d$__$2840$tauri$2d$apps$2f$api$2f$core$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@tauri-apps/api/core [external] (@tauri-apps/api/core, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$book$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/book.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$image$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/image.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$api$2f$core__$5b$external$5d$__$2840$tauri$2d$apps$2f$api$2f$core$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$book$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$api$2f$core__$5b$external$5d$__$2840$tauri$2d$apps$2f$api$2f$core$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$book$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
const coverUrlCache = new Map();
const CACHE_DURATION = 60 * 60 * 1000; // 1 hour in milliseconds
/**
 * Get an HTTPS cover URL suitable for Discord Rich Presence
 * - Caches successful uploads for session
 * - Caches failures (undefined) for 1 hour to avoid retries
 * - Processes cover with Readest icon overlay
 */ const getCoverUrlForDiscord = async (book, appService)=>{
    const cached = coverUrlCache.get(book.hash);
    if (cached) {
        const isExpired = Date.now() - cached.timestamp > CACHE_DURATION;
        if (!isExpired) {
            return cached.url ?? undefined;
        }
        if (!cached.url) {
            coverUrlCache.delete(book.hash);
        }
    }
    try {
        const fp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$book$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getCoverFilename"])(book);
        const exists = await appService.exists(fp, 'Books');
        if (!exists) {
            coverUrlCache.set(book.hash, {
                url: null,
                timestamp: Date.now()
            });
            return undefined;
        }
        // Process cover for Discord without cloud upload
        const fullPath = await appService.resolveFilePath(fp, 'Books');
        const coverUrl = await appService.getImageURL(fullPath);
        const iconUrl = '/icon-tiny.png';
        const processedBlob = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$image$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["processDiscordCover"])(coverUrl, iconUrl);
        console.log('Processed Discord cover for book:', book.title);
        // Note: Discord Rich Presence doesn't support local file URLs
        // This would require an external URL accessible by Discord's servers
        coverUrlCache.set(book.hash, {
            url: null,
            timestamp: Date.now()
        });
        return undefined;
    } catch (error) {
        console.warn('Failed to process cover for Discord:', error);
        coverUrlCache.set(book.hash, {
            url: null,
            timestamp: Date.now()
        });
        return undefined;
    }
};
const updateDiscordPresence = async (book, sessionStart, appService)=>{
    if (!appService?.isDesktopApp) return;
    try {
        const coverUrl = await getCoverUrlForDiscord(book, appService);
        const bookPresence = {
            bookHash: book.hash,
            title: book.title,
            author: book.author || null,
            coverUrl: coverUrl || null,
            sessionStart
        };
        await (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$api$2f$core__$5b$external$5d$__$2840$tauri$2d$apps$2f$api$2f$core$2c$__esm_import$29$__["invoke"])('update_book_presence', {
            presence: bookPresence
        });
    } catch (error) {
        console.warn('Failed to update Discord presence:', error);
    }
};
const clearDiscordPresence = async (appService)=>{
    if (!appService?.isDesktopApp) return;
    try {
        await (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$api$2f$core__$5b$external$5d$__$2840$tauri$2d$apps$2f$api$2f$core$2c$__esm_import$29$__["invoke"])('clear_book_presence');
    } catch (error) {
        console.warn('Failed to clear Discord presence:', error);
    }
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/readest-app/src/utils/validation.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/apps/readest-app/src/utils/fetch.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "fetchWithAuth",
    ()=>fetchWithAuth,
    "fetchWithTimeout",
    ()=>fetchWithTimeout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$access$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/access.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$access$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$access$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
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
    const token = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$access$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getAccessToken"])();
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
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/readest-app/src/utils/walk.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "walkTextNodes",
    ()=>walkTextNodes
]);
const walkTextNodes = (root, rejectTags = [])=>{
    const elements = [];
    const walk = (node, depth = 0)=>{
        if (depth > 15) return;
        if (node instanceof HTMLElement && node.shadowRoot) {
            walk(node.shadowRoot, depth + 1);
        }
        const children = 'children' in node ? Array.from(node.children) : [];
        for (const child of children){
            if (child.tagName === 'STYLE' || child.tagName === 'LINK' || rejectTags.includes(child.tagName.toLowerCase())) {
                continue;
            }
            if (child.shadowRoot) {
                walk(child.shadowRoot, depth + 1);
            }
            if (child.tagName === 'IFRAME') {
                const iframe = child;
                const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
                if (iframeDoc && iframeDoc.body) {
                    walk(iframeDoc.body, depth + 1);
                }
            }
            const hasDirectText = child.childNodes && Array.from(child.childNodes).some((node)=>{
                if (node.nodeType === Node.TEXT_NODE && node.textContent?.trim()) {
                    return true;
                }
                if (node.nodeType === Node.ELEMENT_NODE && node.tagName === 'SPAN' && node.textContent?.trim()) {
                    return true;
                }
                return false;
            });
            if (child.children.length === 0 && child.textContent?.trim()) {
                elements.push(child);
            } else if (hasDirectText) {
                elements.push(child);
            } else if (child.children.length > 0) {
                walk(child, depth + 1);
            }
        }
    };
    walk(root);
    return elements;
};
}),
"[project]/apps/readest-app/src/utils/cfi.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isCfiInLocation",
    ()=>isCfiInLocation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$foliate$2d$js$2f$epubcfi$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/foliate-js/epubcfi.js [ssr] (ecmascript)");
;
function isCfiInLocation(cfi, location) {
    if (!location) return false;
    const start = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$foliate$2d$js$2f$epubcfi$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["collapse"](location);
    const end = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$foliate$2d$js$2f$epubcfi$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["collapse"](location, true);
    return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$foliate$2d$js$2f$epubcfi$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["compare"](cfi, start) >= 0 && __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$foliate$2d$js$2f$epubcfi$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["compare"](cfi, end) <= 0;
}
}),
"[project]/apps/readest-app/src/utils/node.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createRejectFilter",
    ()=>createRejectFilter
]);
const createRejectFilter = ({ tags = [], classes = [], attributes = [], contents = [] })=>{
    return (node)=>{
        if (node.nodeType === Node.ELEMENT_NODE) {
            const name = node.tagName.toLowerCase();
            if (name === 'script' || name === 'style') {
                return NodeFilter.FILTER_REJECT;
            }
            if (tags.includes(name)) {
                return NodeFilter.FILTER_REJECT;
            }
            if (classes.some((cls)=>node.classList.contains(cls))) {
                return NodeFilter.FILTER_REJECT;
            }
            if (attributes.some((attr)=>node.hasAttribute(attr))) {
                return NodeFilter.FILTER_REJECT;
            }
            if (contents.some(({ tag, content })=>{
                return name === tag && content.test(node.textContent || '');
            })) {
                return NodeFilter.FILTER_REJECT;
            }
            return NodeFilter.FILTER_SKIP;
        }
        return NodeFilter.FILTER_ACCEPT;
    };
};
}),
"[project]/apps/readest-app/src/utils/grid.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getGridTemplate",
    ()=>getGridTemplate,
    "getInsetEdges",
    ()=>getInsetEdges
]);
const getGridTemplate = (count, aspectRatio)=>{
    if (count <= 1) {
        return {
            columns: '1fr',
            rows: '1fr'
        };
    } else if (count === 2) {
        return aspectRatio < 1 ? {
            columns: '1fr',
            rows: '1fr 1fr'
        } : {
            columns: '1fr 1fr',
            rows: '1fr'
        };
    } else if (count === 3 || count === 4) {
        return {
            columns: '1fr 1fr',
            rows: '1fr 1fr'
        };
    } else {
        return {
            columns: '1fr 1fr 1fr',
            rows: '1fr 1fr 1fr'
        };
    }
};
const getInsetEdges = (index, count, aspectRatio)=>{
    const gridTemplate = getGridTemplate(count, aspectRatio);
    const cols = gridTemplate.columns.split(' ').length;
    const rows = gridTemplate.rows.split(' ').length;
    const row = Math.floor(index / cols);
    const col = index % cols;
    return {
        top: row === 0,
        right: col === cols - 1,
        bottom: row === rows - 1,
        left: col === 0
    };
};
}),
"[project]/apps/readest-app/src/utils/insets.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getViewInsets",
    ()=>getViewInsets
]);
const getViewInsets = (viewSettings)=>{
    const showHeader = viewSettings.showHeader;
    const showFooter = viewSettings.showFooter;
    const isVertical = viewSettings.vertical || viewSettings.writingMode.includes('vertical');
    const fullMarginTopPx = viewSettings.marginPx || viewSettings.marginTopPx;
    const compactMarginTopPx = viewSettings.compactMarginPx || viewSettings.compactMarginTopPx;
    const fullMarginBottomPx = viewSettings.marginBottomPx;
    const compactMarginBottomPx = viewSettings.compactMarginBottomPx;
    const fullMarginLeftPx = viewSettings.marginLeftPx;
    const fullMarginRightPx = viewSettings.marginRightPx;
    const compactMarginLeftPx = viewSettings.compactMarginLeftPx;
    const compactMarginRightPx = viewSettings.compactMarginRightPx;
    return {
        top: showHeader && !isVertical ? fullMarginTopPx : compactMarginTopPx,
        right: showHeader && isVertical ? fullMarginRightPx : compactMarginRightPx,
        bottom: showFooter && !isVertical ? fullMarginBottomPx : compactMarginBottomPx,
        left: showFooter && isVertical ? fullMarginLeftPx : compactMarginLeftPx
    };
};
}),
"[project]/apps/readest-app/src/utils/sanitize.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/apps/readest-app/src/utils/transform.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$sanitize$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/sanitize.ts [ssr] (ecmascript)");
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
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$sanitize$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["sanitizeString"])(title),
        author: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$sanitize$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["sanitizeString"])(author),
        group_id: groupId,
        group_name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$sanitize$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["sanitizeString"])(groupName),
        tags: tags,
        progress: progress,
        source_title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$sanitize$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["sanitizeString"])(sourceTitle),
        metadata: metadata ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$sanitize$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["sanitizeString"])(JSON.stringify(metadata)) : null,
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
        text: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$sanitize$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["sanitizeString"])(text),
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
"[project]/apps/readest-app/src/utils/serializer.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "compressConfig",
    ()=>compressConfig,
    "deserializeConfig",
    ()=>deserializeConfig,
    "serializeConfig",
    ()=>serializeConfig
]);
const serializeConfig = (config, globalViewSettings, defaultSearchConfig)=>{
    config = JSON.parse(JSON.stringify(config));
    const viewSettings = config.viewSettings;
    const searchConfig = config.searchConfig;
    config.viewSettings = Object.entries(viewSettings).reduce((acc, [key, value])=>{
        if (globalViewSettings[key] !== value) {
            acc[key] = value;
        }
        return acc;
    }, {});
    config.searchConfig = Object.entries(searchConfig).reduce((acc, [key, value])=>{
        if (defaultSearchConfig[key] !== value) {
            acc[key] = value;
        }
        return acc;
    }, {});
    return JSON.stringify(config);
};
const deserializeConfig = (str, globalViewSettings, defaultSearchConfig)=>{
    const config = JSON.parse(str);
    const { viewSettings, searchConfig } = config;
    config.viewSettings = {
        ...globalViewSettings,
        ...viewSettings
    };
    config.searchConfig = {
        ...defaultSearchConfig,
        ...searchConfig
    };
    config.updatedAt ??= Date.now();
    return config;
};
const compressConfig = (config, globalViewSettings, defaultSearchConfig)=>{
    return JSON.parse(serializeConfig(config, globalViewSettings, defaultSearchConfig));
};
}),
"[project]/apps/readest-app/src/utils/xcfi.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Converter between EPUB CFI and CREngine XPointer
 * Converts between Readest (foliate-js) CFI format and KOReader CREngine XPointer format
 */ __turbopack_context__.s([
    "XCFI",
    ()=>XCFI,
    "getCFIFromXPointer",
    ()=>getCFIFromXPointer,
    "getXPointerFromCFI",
    ()=>getXPointerFromCFI,
    "normalizeProgressXPointer",
    ()=>normalizeProgressXPointer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$foliate$2d$js$2f$epubcfi$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/foliate-js/epubcfi.js [ssr] (ecmascript)");
;
class XCFI {
    document;
    spineItemIndex;
    constructor(htmlDocument, spineIndex = 0){
        this.document = htmlDocument;
        this.spineItemIndex = spineIndex;
    }
    static extractSpineIndex(cfiOrXPath) {
        try {
            if (cfiOrXPath.startsWith('epubcfi(')) {
                const collapsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$foliate$2d$js$2f$epubcfi$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["collapse"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$foliate$2d$js$2f$epubcfi$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["parse"])(cfiOrXPath));
                const spineStep = collapsed[0]?.[1]?.index;
                if (spineStep === undefined) {
                    throw new Error('Cannot extract spine index from CFI');
                }
                // Convert CFI spine step to 0-based index
                // CFI uses even numbers starting from 2: 2, 4, 6, 8, ...
                // Convert to 0-based: (step - 2) / 2 = 0, 1, 2, 3, ...
                return Math.floor((spineStep - 2) / 2);
            } else if (cfiOrXPath.startsWith('/body/DocFragment[')) {
                // Note that all indices in XPointer/XPath are 1-based
                // but the text() offsets are 0-based
                const match = cfiOrXPath.match(/DocFragment\[(\d+)\]/);
                if (match) {
                    return parseInt(match[1], 10) - 1;
                }
                throw new Error('Cannot extract spine index from XPath');
            } else {
                throw new Error('Unsupported format for spine index extraction');
            }
        } catch (error) {
            throw new Error(`Cannot extract spine index from CFI/XPointer: ${cfiOrXPath} - ${error}`);
        }
    }
    xPointerToCFI(startXPointer, endXPointer) {
        try {
            if (endXPointer) {
                return this.convertRangeXPointerToCFI(startXPointer, endXPointer);
            }
            return this.convertPointXPointerToCFI(startXPointer);
        } catch (error) {
            throw new Error(`Failed to convert XPointer ${startXPointer}: ${error}`);
        }
    }
    cfiToXPointer(cfi) {
        try {
            const parts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$foliate$2d$js$2f$epubcfi$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["parse"])(cfi);
            if (parts.parent) {
                const index = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$foliate$2d$js$2f$epubcfi$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["fake"].toIndex(parts.parent.shift()); // Remove the spine step
                if (index !== this.spineItemIndex) {
                    throw new Error(`CFI spine index ${index} does not match converter spine index ${this.spineItemIndex}`);
                }
                const range = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$foliate$2d$js$2f$epubcfi$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["toRange"])(this.document, parts);
                const startXPointer = this.rangePointToXPointer(range.startContainer, range.startOffset);
                const endXPointer = this.rangePointToXPointer(range.endContainer, range.endOffset);
                return {
                    xpointer: startXPointer,
                    pos0: startXPointer,
                    pos1: endXPointer
                };
            }
            const collapsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$foliate$2d$js$2f$epubcfi$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["collapse"])(parts);
            const index = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$foliate$2d$js$2f$epubcfi$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["fake"].toIndex(parts.shift());
            if (index !== this.spineItemIndex) {
                throw new Error(`CFI spine index ${index} does not match converter spine index ${this.spineItemIndex}`);
            }
            const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$foliate$2d$js$2f$epubcfi$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["toElement"])(this.document, parts[0]);
            if (!element) {
                throw new Error(`Element not found for CFI: ${cfi}`);
            }
            const lastPart = collapsed[collapsed.length - 1]?.[collapsed[collapsed.length - 1].length - 1];
            const textOffset = lastPart?.offset;
            const xpointer = textOffset !== undefined ? this.handleTextOffset(element, textOffset) : this.buildXPointerPath(element);
            return {
                xpointer
            };
        } catch (error) {
            throw new Error(`Failed to convert CFI ${cfi}: ${error}`);
        }
    }
    validateCFI(cfi) {
        try {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$foliate$2d$js$2f$epubcfi$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["parse"])(cfi);
            this.cfiToXPointer(cfi);
            return true;
        } catch  {
            return false;
        }
    }
    validateXPointer(xpointer, pos1) {
        try {
            this.xPointerToCFI(xpointer, pos1);
            return true;
        } catch  {
            return false;
        }
    }
    /**
   * Convert a single point XPointer to CFI
   */ convertPointXPointerToCFI(xpointer) {
        const { element, textOffset } = this.parseXPointer(xpointer);
        const range = this.document.createRange();
        if (textOffset !== undefined) {
            const textNode = this.findTextNodeAtOffset(element, textOffset);
            if (textNode) {
                range.setStart(textNode.node, textNode.offset);
                range.setEnd(textNode.node, textNode.offset);
            } else {
                // Fallback to element positioning
                range.setStart(element, 0);
                range.setEnd(element, 0);
            }
        } else {
            range.setStart(element, 0);
            range.setEnd(element, 0);
        }
        const cfi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$foliate$2d$js$2f$epubcfi$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["fromRange"])(range);
        return this.adjustSpineIndex(cfi);
    }
    convertRangeXPointerToCFI(startXPointer, endXPointer) {
        const startInfo = this.parseXPointer(startXPointer);
        const endInfo = this.parseXPointer(endXPointer);
        const range = this.document.createRange();
        if (startInfo.textOffset !== undefined) {
            const startTextNode = this.findTextNodeAtOffset(startInfo.element, startInfo.textOffset);
            if (startTextNode) {
                range.setStart(startTextNode.node, startTextNode.offset);
            } else {
                range.setStart(startInfo.element, 0);
            }
        } else {
            range.setStart(startInfo.element, 0);
        }
        if (endInfo.textOffset !== undefined) {
            const endTextNode = this.findTextNodeAtOffset(endInfo.element, endInfo.textOffset);
            if (endTextNode) {
                range.setEnd(endTextNode.node, endTextNode.offset);
            } else {
                range.setEnd(endInfo.element, 0);
            }
        } else {
            range.setEnd(endInfo.element, 0);
        }
        const cfi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$foliate$2d$js$2f$epubcfi$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["fromRange"])(range);
        return this.adjustSpineIndex(cfi);
    }
    /**
   * Parse XPointer string to extract element and text offset
   */ parseXPointer(xpointer) {
        const textOffsetMatch = xpointer.match(/\/text\(\)\.(\d+)$/);
        const textOffset = textOffsetMatch ? parseInt(textOffsetMatch[1], 10) : undefined;
        const elementPath = textOffset !== undefined ? xpointer.replace(/\/text\(\)\.\d+$/, '') : xpointer;
        const element = this.resolveXPointerPath(elementPath);
        if (!element) {
            throw new Error(`Cannot resolve XPointer path: ${elementPath}`);
        }
        return {
            element,
            textOffset
        };
    }
    resolveXPointerPath(path) {
        const pathMatch = path.match(/^\/body\/DocFragment\[\d+\]\/body(.*)$/);
        if (!pathMatch) {
            throw new Error(`Invalid XPointer format: ${path}`);
        }
        const elementPath = pathMatch[1];
        let current = this.document.body;
        if (!elementPath || elementPath === '') {
            return current;
        }
        const segments = elementPath.split('/').filter(Boolean);
        for (const segment of segments){
            // Match both formats: tag[index] or just tag
            const segmentWithIndexMatch = segment.match(/^(\w+)\[(\d+)\]$/);
            const segmentWithoutIndexMatch = segment.match(/^(\w+)$/);
            let tagName;
            let index;
            if (segmentWithIndexMatch) {
                // Format: tag[index] (1-based index)
                const [, tag, indexStr] = segmentWithIndexMatch;
                tagName = tag;
                index = Math.max(0, parseInt(indexStr, 10) - 1);
            } else if (segmentWithoutIndexMatch) {
                // Format: tag (implicit index 0)
                const [, tag] = segmentWithoutIndexMatch;
                tagName = tag;
                index = 0;
            } else {
                throw new Error(`Invalid XPointer segment: ${segment}`);
            }
            // Find child elements with matching tag name
            const children = Array.from(current.children).filter((child)=>child.tagName.toLowerCase() === tagName?.toLowerCase());
            if (index >= children.length) {
                throw new Error(`Element index ${index} out of bounds for tag ${tagName}`);
            }
            current = children[index];
        }
        return current;
    }
    /**
   * Find text node and offset within element based on cumulative character offset
   */ findTextNodeAtOffset(element, offset) {
        const textNodes = [];
        this.collectTextNodes(element, textNodes);
        let currentOffset = 0;
        for (const textNode of textNodes){
            const nodeText = textNode.textContent || '';
            const nodeLength = nodeText.length;
            if (currentOffset + nodeLength >= offset) {
                return {
                    node: textNode,
                    offset: offset - currentOffset
                };
            }
            currentOffset += nodeLength;
        }
        // If offset is beyond all text, return the last text node at its end
        if (textNodes.length > 0) {
            const lastNode = textNodes[textNodes.length - 1];
            return {
                node: lastNode,
                offset: (lastNode.textContent || '').length
            };
        }
        return null;
    }
    adjustSpineIndex(cfi) {
        const cfiMatch = cfi.match(/^epubcfi\((.+)\)$/);
        if (!cfiMatch) {
            throw new Error(`Invalid CFI format: ${cfi}`);
        }
        const innerCfi = cfiMatch[1];
        const spineStep = (this.spineItemIndex + 1) * 2; // Convert 0-based to CFI format
        if (innerCfi.match(/^\/6\/\d+!/)) {
            const adjustedInner = innerCfi.replace(/^\/6\/\d+!/, `/6/${spineStep}!`);
            return `epubcfi(${adjustedInner})`;
        } else {
            const adjustedInner = `/6/${spineStep}!${innerCfi}`;
            return `epubcfi(${adjustedInner})`;
        }
    }
    /**
   * Convert a range point (container + offset) to XPointer
   */ rangePointToXPointer(container, offset) {
        if (container.nodeType === Node.TEXT_NODE) {
            // For text nodes, find the containing element
            const element = container.parentElement || this.document.documentElement;
            return this.handleTextOffsetInElement(element, container, offset);
        } else if (container.nodeType === Node.ELEMENT_NODE) {
            const element = container;
            if (offset === 0) {
                if (element.childNodes.length > 0) {
                    const firstChild = element.childNodes[0];
                    if (firstChild.nodeType === Node.ELEMENT_NODE) {
                        return this.buildXPointerPath(element.childNodes[0]);
                    }
                }
                return this.buildXPointerPath(element);
            } else {
                // Offset points to a child node
                const childNodes = Array.from(element.childNodes);
                const targetChild = childNodes[offset - 1] || childNodes[childNodes.length - 1];
                if (targetChild?.nodeType === Node.ELEMENT_NODE) {
                    return this.buildXPointerPath(targetChild);
                } else if (targetChild?.nodeType === Node.TEXT_NODE) {
                    return this.handleTextOffsetInElement(element, targetChild, targetChild.textContent?.length || 0);
                } else {
                    return this.buildXPointerPath(element);
                }
            }
        } else {
            // Fallback to document element
            return this.buildXPointerPath(this.document.documentElement);
        }
    }
    /**
   * Build XPointer path from DOM element
   */ buildXPointerPath(targetElement) {
        const pathParts = [];
        let current = targetElement;
        // Build path from target back to root
        while(current && current !== this.document.documentElement){
            const parent = current.parentElement;
            if (!parent) break;
            const tagName = current.tagName.toLowerCase();
            // Count preceding siblings with same tag name (0-based for CREngine)
            let siblingIndex = 0;
            let totalSameTagSiblings = 0;
            for (const sibling of Array.from(parent.children)){
                if (sibling.tagName.toLowerCase() === tagName) {
                    if (sibling === current) {
                        siblingIndex = totalSameTagSiblings;
                    }
                    totalSameTagSiblings++;
                }
            }
            // Format as tag[index] (0-based for CREngine)
            // Omit [0] if there's only one element with this tag name
            if (totalSameTagSiblings === 1) {
                pathParts.unshift(tagName);
            } else {
                pathParts.unshift(`${tagName}[${siblingIndex + 1}]`); // Convert to 1-based index for XPointer
            }
            current = parent;
        }
        let xpointer = `/body/DocFragment[${this.spineItemIndex + 1}]`;
        if (pathParts.length > 0 && pathParts[0].startsWith('body')) {
            pathParts.shift();
        }
        xpointer += '/body';
        if (pathParts.length > 0) {
            xpointer += '/' + pathParts.join('/');
        }
        return xpointer;
    }
    /**
   * Handle text offset within an element by finding character position
   */ handleTextOffset(element, cfiOffset) {
        const textNodes = [];
        this.collectTextNodes(element, textNodes);
        let totalChars = 0;
        let targetTextNode = null;
        let offsetInNode = 0;
        for (const textNode of textNodes){
            const nodeText = textNode.textContent || '';
            const nodeLength = nodeText.length;
            if (totalChars + nodeLength >= cfiOffset) {
                targetTextNode = textNode;
                offsetInNode = cfiOffset - totalChars;
                break;
            }
            totalChars += nodeLength;
        }
        if (!targetTextNode) {
            // Offset beyond text content, use element end
            return this.buildXPointerPath(element);
        }
        // Find the containing element for this text node
        let textParent = targetTextNode.parentElement;
        while(textParent && !this.isSignificantElement(textParent)){
            textParent = textParent.parentElement;
        }
        if (!textParent) {
            textParent = element;
        }
        const basePath = this.buildXPointerPath(textParent);
        return `${basePath}/text().${offsetInNode}`;
    }
    /**
   * Handle text offset for a specific text node within an element
   */ handleTextOffsetInElement(element, textNode, offset) {
        // Find all text nodes in the element to calculate cumulative offset
        const textNodes = [];
        this.collectTextNodes(element, textNodes);
        let cumulativeOffset = 0;
        for (const node of textNodes){
            if (node === textNode) {
                cumulativeOffset += offset;
                break;
            }
            cumulativeOffset += (node.textContent || '').length;
        }
        return this.handleTextOffset(element, cumulativeOffset);
    }
    /**
   * Collect all text nodes in document order
   */ collectTextNodes(element, textNodes) {
        for (const child of Array.from(element.childNodes)){
            if (child.nodeType === Node.TEXT_NODE) {
                const text = child.textContent || '';
                if (text.length > 0) {
                    textNodes.push(child);
                }
            } else if (child.nodeType === Node.ELEMENT_NODE) {
                this.collectTextNodes(child, textNodes);
            }
        }
    }
    /**
   * Check if an element is significant for XPointer path building
   */ isSignificantElement(element) {
        const tagName = element.tagName.toLowerCase();
        // Skip inline formatting elements that don't affect structure
        const inlineElements = new Set([
            'span',
            'em',
            'strong',
            'i',
            'b',
            'u',
            'small',
            'mark',
            'sup',
            'sub'
        ]);
        return !inlineElements.has(tagName);
    }
}
const getCFIFromXPointer = async (xpointer, doc, index, bookDoc)=>{
    const xSpineIndex = XCFI.extractSpineIndex(xpointer);
    let converter;
    if (index === xSpineIndex && doc) {
        converter = new XCFI(doc, index || 0);
    } else {
        const doc = await bookDoc?.sections?.[xSpineIndex]?.createDocument();
        if (!doc) throw new Error('Failed to load document for XPointer conversion.');
        converter = new XCFI(doc, xSpineIndex || 0);
    }
    const cfi = converter.xPointerToCFI(xpointer);
    return cfi;
};
const getXPointerFromCFI = async (cfi, doc, index, bookDoc)=>{
    const xSpineIndex = XCFI.extractSpineIndex(cfi);
    let converter;
    if (index === xSpineIndex && doc) {
        converter = new XCFI(doc, index || 0);
    } else {
        const doc = await bookDoc?.sections?.[xSpineIndex]?.createDocument();
        if (!doc) throw new Error('Failed to load document for CFI conversion.');
        converter = new XCFI(doc, xSpineIndex || 0);
    }
    const xpointer = converter.cfiToXPointer(cfi);
    return xpointer;
};
const normalizeProgressXPointer = (xpointer)=>{
    const tailingTextOffset = /\/text\(\).*$/;
    if (xpointer.match(tailingTextOffset)) {
        xpointer = xpointer.replace(tailingTextOffset, '');
    }
    const suffixNodeOffset = /\.\d+$/;
    if (xpointer.match(suffixNodeOffset)) {
        xpointer = xpointer.replace(suffixNodeOffset, '');
    }
    return xpointer;
};
}),
"[project]/apps/readest-app/src/utils/highlightjs.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "CODE_LANGUAGES",
    ()=>CODE_LANGUAGES,
    "manageSyntaxHighlighting",
    ()=>manageSyntaxHighlighting
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$highlight$2e$js$2f$lib$2f$common__$5b$external$5d$__$28$highlight$2e$js$2f$lib$2f$common$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/highlight.js/lib/common [external] (highlight.js/lib/common, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$highlight$2e$js$2f$lib$2f$common__$5b$external$5d$__$28$highlight$2e$js$2f$lib$2f$common$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$highlight$2e$js$2f$lib$2f$common__$5b$external$5d$__$28$highlight$2e$js$2f$lib$2f$common$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
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
    __TURBOPACK__imported__module__$5b$externals$5d2f$highlight$2e$js$2f$lib$2f$common__$5b$external$5d$__$28$highlight$2e$js$2f$lib$2f$common$2c$__esm_import$29$__["default"].configure({
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
        __TURBOPACK__imported__module__$5b$externals$5d2f$highlight$2e$js$2f$lib$2f$common__$5b$external$5d$__$28$highlight$2e$js$2f$lib$2f$common$2c$__esm_import$29$__["default"].highlightElement(block);
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
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/readest-app/src/utils/a11y.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "removeTabIndex",
    ()=>removeTabIndex
]);
const removeTabIndex = (document)=>{
    document.querySelectorAll('a').forEach((a)=>{
        a.setAttribute('tabindex', '-1');
    });
};
}),
"[project]/apps/readest-app/src/utils/number.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "localizeNumber",
    ()=>localizeNumber
]);
const localizeNumber = (num, language, isIndex = false)=>{
    const lang = language.toLowerCase();
    const isChinese = lang.startsWith('zh');
    if (!isChinese) {
        return num.toString();
    }
    const isTraditional = lang.includes('tw') || lang.includes('hk');
    const baseDigits = isTraditional ? '零壹貳叁肆伍陸柒捌玖' : '零一二三四五六七八九';
    const zeroChar = isIndex ? '〇' : '零';
    const digits = baseDigits.replace('零', zeroChar);
    const units = isTraditional ? [
        '',
        '拾',
        '佰',
        '仟',
        '萬',
        '億'
    ] : [
        '',
        '十',
        '百',
        '千',
        '万',
        '亿'
    ];
    const str = String(num);
    const len = str.length;
    let result = '';
    for(let i = 0; i < len; i++){
        const n = Number(str[i]);
        const pos = len - i - 1;
        if (n !== 0) {
            result += digits[n] + units[pos % 4];
        } else if (!result.endsWith(zeroChar) && i < len - 1) {
            result += zeroChar;
        }
        if (pos === 4) result += units[4];
        if (pos === 8) result += units[5];
    }
    result = result.replace(new RegExp(`${zeroChar}+$`), '').replace(`${zeroChar}萬`, '萬').replace(`${zeroChar}万`, '万').replace(new RegExp(`${zeroChar}+`, 'g'), zeroChar);
    if (!isIndex) {
        if (isTraditional) {
            result = result.replace(/^貳$/, '兩').replace(/(^|[^壹貳叁肆伍陸柒捌玖])貳([^佰仟萬億壹貳叁肆伍陸柒捌玖]|$)/g, '$1兩$2');
        } else {
            result = result.replace(/^二$/, '两').replace(/(^|[^一二三四五六七八九])二([^百千万亿一二三四五六七八九]|$)/g, '$1两$2');
        }
    }
    return result;
};
}),
"[project]/apps/readest-app/src/utils/progress.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatNumber",
    ()=>formatNumber,
    "formatProgress",
    ()=>formatProgress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$number$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/number.ts [ssr] (ecmascript)");
;
function formatProgress(current, total, template, localize = false, language = 'en', fractionDigits = 1) {
    if (current !== undefined && total !== undefined && total > 0 && current >= 0) {
        const currentStr = localize ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$number$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["localizeNumber"])(current + 1, language, true) : String(current + 1);
        const totalStr = localize ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$number$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["localizeNumber"])(total, language, true) : String(total);
        return template.replace('{current}', currentStr).replace('{total}', totalStr).replace('{percent}', ((current + 1) / total * 100).toFixed(fractionDigits));
    } else {
        return '';
    }
}
function formatNumber(number, localize = false, language = 'en') {
    if (number === undefined || number < 0) {
        return '';
    }
    return localize ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$number$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["localizeNumber"])(number, language) : String(number);
}
}),
"[project]/apps/readest-app/src/utils/ssml.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "filterSSMLWithLang",
    ()=>filterSSMLWithLang,
    "findSSMLMark",
    ()=>findSSMLMark,
    "genSSML",
    ()=>genSSML,
    "parseSSMLLang",
    ()=>parseSSMLLang,
    "parseSSMLMarks",
    ()=>parseSSMLMarks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$lang$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/lang.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$lang$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$lang$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
const cleanTextContent = (text)=>text.replace(/\r\n/g, '  ').replace(/\r/g, ' ').replace(/\n/g, ' ').trimStart();
const genSSML = (lang, text, voice, rate)=>{
    const cleanedText = text.replace(/^<break\b[^>]*>/i, '');
    return `
    <speak version="1.0" xml:lang="${lang}">
      <voice name="${voice}">
        <prosody rate="${rate}" >
            ${cleanedText}
        </prosody>
      </voice>
    </speak>
  `;
};
const parseSSMLLang = (ssml, primaryLang)=>{
    let lang = 'en';
    const match = ssml.match(/xml:lang\s*=\s*"([^"]+)"/);
    if (match && match[1]) {
        const parts = match[1].split('-');
        lang = parts.length > 1 ? `${parts[0].toLowerCase()}-${parts[1].toUpperCase()}` : parts[0].toLowerCase();
        lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$lang$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["code6392to6391"])(lang) || lang;
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$lang$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["isValidLang"])(lang)) {
            lang = 'en';
        }
    }
    primaryLang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$lang$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["code6392to6391"])(primaryLang?.toLowerCase() || '') || primaryLang;
    if (lang === 'en' && primaryLang && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$lang$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["isSameLang"])(lang, primaryLang)) {
        lang = primaryLang.split('-')[0].toLowerCase();
    }
    const textWithoutLangTags = ssml.replace(/<lang[^>]*>.*?<\/lang>/gs, '');
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$lang$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["inferLangFromScript"])(textWithoutLangTags, lang);
};
const parseSSMLMarks = (ssml, primaryLang)=>{
    const defaultLang = parseSSMLLang(ssml, primaryLang) || 'en';
    ssml = ssml.replace(/<speak[^>]*>/i, '').replace(/<\/speak>/i, '');
    let plainText = '';
    const marks = [];
    let activeMark = null;
    let currentLang = defaultLang;
    const langStack = [];
    const tagRegex = /<(\/?)(\w+)([^>]*)>|([^<]+)/g;
    let match;
    while((match = tagRegex.exec(ssml)) !== null){
        if (match[4]) {
            const rawText = match[4];
            const text = cleanTextContent(rawText);
            if (text && activeMark) {
                const offset = plainText.length;
                plainText += text;
                marks.push({
                    offset,
                    name: activeMark,
                    text,
                    language: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$lang$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["inferLangFromScript"])(text, currentLang) || currentLang
                });
            } else {
                plainText += cleanTextContent(rawText);
            }
        } else {
            const isEnd = match[1] === '/';
            const tagName = match[2];
            const attr = match[3];
            if (tagName === 'mark' && !isEnd) {
                const nameMatch = attr?.match(/name="([^"]+)"/);
                if (nameMatch) {
                    activeMark = nameMatch[1];
                }
            } else if (tagName === 'lang') {
                if (!isEnd) {
                    langStack.push(currentLang);
                    const langMatch = attr?.match(/xml:lang="([^"]+)"/);
                    if (langMatch) {
                        currentLang = langMatch[1];
                    }
                } else {
                    currentLang = langStack.pop() ?? defaultLang;
                }
            }
        }
    }
    return {
        plainText,
        marks
    };
};
const findSSMLMark = (charIndex, marks)=>{
    let left = 0;
    let right = marks.length - 1;
    let result = null;
    while(left <= right){
        const mid = Math.floor((left + right) / 2);
        const mark = marks[mid];
        if (mark.offset <= charIndex) {
            result = mark;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return result;
};
const filterSSMLWithLang = (ssml, targetLang, primaryLang)=>{
    const mainLang = parseSSMLLang(ssml, primaryLang);
    // Normalize target language
    const normalizedTarget = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$lang$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["code6392to6391"])(targetLang.toLowerCase()) || targetLang.toLowerCase();
    // Check if target matches main language
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$lang$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["isSameLang"])(normalizedTarget, mainLang)) {
        // Remove all <lang> blocks that don't match the main language
        return ssml.replace(/<lang\s+xml:lang="([^"]+)"[^>]*>.*?<\/lang>/gs, (match, langAttr)=>{
            const blockLang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$lang$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["code6392to6391"])(langAttr.toLowerCase()) || langAttr.toLowerCase();
            // If the lang block matches the main language, keep it as is
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$lang$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["isSameLang"])(blockLang, mainLang)) {
                return match;
            }
            // Otherwise remove the entire block
            return '';
        });
    }
    // Check if target matches any <lang> block
    const langBlocks = [];
    const langBlockRegex = /<lang\s+xml:lang="([^"]+)"[^>]*>(.*?)<\/lang>/gs;
    let match;
    const tempRegex = new RegExp(langBlockRegex.source, langBlockRegex.flags);
    while((match = tempRegex.exec(ssml)) !== null){
        const blockLang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$lang$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["code6392to6391"])(match[1].toLowerCase()) || match[1].toLowerCase();
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$lang$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["isSameLang"])(blockLang, normalizedTarget)) {
            langBlocks.push({
                match: match[0],
                lang: match[1],
                content: match[2]
            });
        }
    }
    if (langBlocks.length > 0) {
        const speakOpenMatch = ssml.match(/<speak[^>]*>/i);
        const speakCloseMatch = ssml.match(/<\/speak>/i);
        if (!speakOpenMatch || !speakCloseMatch) {
            return ssml;
        }
        const combinedContent = langBlocks.map((block)=>block.match).join('');
        return `${speakOpenMatch[0]}${combinedContent}${speakCloseMatch[0]}`;
    }
    return ssml;
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/readest-app/src/utils/lru.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LRUCache",
    ()=>LRUCache
]);
class LRUCache {
    capacity;
    map;
    onEvict;
    constructor(capacity, onEvict){
        if (capacity <= 0) {
            throw new Error('LRUCache capacity must be greater than 0');
        }
        this.capacity = capacity;
        this.map = new Map();
        this.onEvict = onEvict;
    }
    get(key) {
        if (!this.map.has(key)) {
            return undefined;
        }
        const value = this.map.get(key);
        this.map.delete(key);
        this.map.set(key, value);
        return value;
    }
    set(key, value) {
        if (this.map.has(key)) {
            const oldValue = this.map.get(key);
            this.map.delete(key);
            if (this.onEvict) {
                this.onEvict(key, oldValue);
            }
        } else if (this.map.size === this.capacity) {
            const oldestKey = this.map.keys().next().value;
            if (oldestKey) {
                const oldestValue = this.map.get(oldestKey);
                this.map.delete(oldestKey);
                if (this.onEvict) {
                    this.onEvict(oldestKey, oldestValue);
                }
            }
        }
        this.map.set(key, value);
    }
    has(key) {
        return this.map.has(key);
    }
    delete(key) {
        if (this.map.has(key)) {
            const value = this.map.get(key);
            const deleted = this.map.delete(key);
            if (deleted && this.onEvict) {
                this.onEvict(key, value);
            }
            return deleted;
        }
        return false;
    }
    clear() {
        if (this.onEvict) {
            for (const [key, value] of this.map){
                this.onEvict(key, value);
            }
        }
        this.map.clear();
    }
    size() {
        return this.map.size;
    }
    entries() {
        return Array.from(this.map).reverse();
    }
}
}),
"[project]/apps/readest-app/src/utils/sel.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getPopupPosition",
    ()=>getPopupPosition,
    "getPosition",
    ()=>getPosition,
    "getTextFromRange",
    ()=>getTextFromRange,
    "isPointerInsideSelection",
    ()=>isPointerInsideSelection
]);
const frameRect = (frame, rect, sx = 1, sy = 1)=>{
    if (!rect) return {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    };
    const left = sx * rect.left + frame.left;
    const right = sx * rect.right + frame.left;
    const top = sy * rect.top + frame.top;
    const bottom = sy * rect.bottom + frame.top;
    return {
        left,
        right,
        top,
        bottom
    };
};
const pointIsInView = ({ x, y })=>x > 0 && y > 0 && x < window.innerWidth && y < window.innerHeight;
const getIframeElement = (nodeElement)=>{
    let node;
    if (nodeElement && typeof nodeElement === 'object' && 'tagName' in nodeElement) {
        node = nodeElement;
    } else if (nodeElement && typeof nodeElement === 'object' && 'collapse' in nodeElement) {
        node = nodeElement.commonAncestorContainer;
    } else {
        node = nodeElement;
    }
    while(node){
        if (node.nodeType === Node.DOCUMENT_NODE) {
            const doc = node;
            if (doc.defaultView && doc.defaultView.frameElement) {
                return doc.defaultView.frameElement;
            }
        }
        node = node.parentNode;
    }
    return null;
};
const constrainPointWithinRect = (point, rect, padding)=>{
    return {
        x: Math.max(padding, Math.min(point.x, rect.right - rect.left - padding)),
        y: Math.max(padding, Math.min(point.y, rect.bottom - rect.top - padding))
    };
};
const isPointerInsideSelection = (selection, ev)=>{
    if (selection.rangeCount === 0) return false;
    const range = selection.getRangeAt(0);
    const rects = range.getClientRects();
    const padding = 80;
    for(let i = 0; i < rects.length; i++){
        const rect = rects[i];
        if (ev.clientX >= rect.left - padding && ev.clientX <= rect.right + padding && ev.clientY >= rect.top - padding && ev.clientY <= rect.bottom + padding) {
            return true;
        }
    }
    return false;
};
const getPosition = (targetElement, rect, paddingPx, isVertical = false)=>{
    const { range: target, rect: targetRect } = targetElement && 'range' in targetElement ? targetElement : {
        range: targetElement,
        rect: undefined
    };
    const frameElement = getIframeElement(target);
    const transform = frameElement ? getComputedStyle(frameElement).transform : '';
    const match = transform.match(/matrix\((.+)\)/);
    const [sx, , , sy] = match?.[1]?.split(/\s*,\s*/)?.map((x)=>parseFloat(x)) ?? [];
    const frame = frameElement?.getBoundingClientRect() ?? {
        top: 0,
        left: 0
    };
    let padding = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    };
    if ('nodeType' in target && target.nodeType === 1) {
        const computedStyle = window.getComputedStyle(target);
        padding = {
            top: parseInt(computedStyle.paddingTop, 10) || 0,
            right: parseInt(computedStyle.paddingRight, 10) || 0,
            bottom: parseInt(computedStyle.paddingBottom, 10) || 0,
            left: parseInt(computedStyle.paddingLeft, 10) || 0
        };
    }
    const rects = Array.from(target.getClientRects()).map((rect)=>{
        return {
            top: rect.top + padding.top,
            right: rect.right - padding.right,
            bottom: rect.bottom - padding.bottom,
            left: rect.left + padding.left
        };
    });
    const first = targetRect ? frameRect(frame, targetRect, sx, sy) : frameRect(frame, rects[0], sx, sy);
    const last = targetRect ? frameRect(frame, targetRect, sx, sy) : frameRect(frame, rects.at(-1), sx, sy);
    if (isVertical) {
        const leftSpace = first.left - rect.left;
        const rightSpace = rect.right - first.right;
        const dir = leftSpace > rightSpace ? 'left' : 'right';
        const position = {
            point: constrainPointWithinRect({
                x: dir === 'left' ? first.left - rect.left - 6 : first.right - rect.left + 6,
                y: (first.top + first.bottom) / 2 - rect.top
            }, rect, paddingPx),
            dir
        };
        const inView = pointIsInView(position.point);
        return inView ? position : {
            point: {
                x: 0,
                y: 0
            },
            dir
        };
    }
    const start = {
        point: constrainPointWithinRect({
            x: (first.left + first.right) / 2 - rect.left,
            y: first.top - rect.top - 12
        }, rect, paddingPx),
        dir: 'up'
    };
    const end = {
        point: constrainPointWithinRect({
            x: (last.left + last.right) / 2 - rect.left,
            y: last.bottom - rect.top + 6
        }, rect, paddingPx),
        dir: 'down'
    };
    const startInView = pointIsInView(start.point);
    const endInView = pointIsInView(end.point);
    if (!startInView && !endInView) return {
        point: {
            x: 0,
            y: 0
        }
    };
    if (!startInView) return end;
    if (!endInView) return start;
    return start.point.y > window.innerHeight - end.point.y ? start : end;
};
const getPopupPosition = (position, boundingReact, popupWidthPx, popupHeightPx, popupPaddingPx)=>{
    const popupPoint = {
        x: 0,
        y: 0
    };
    if (position.dir === 'up') {
        popupPoint.x = position.point.x - popupWidthPx / 2;
        popupPoint.y = position.point.y - popupHeightPx;
    } else if (position.dir === 'down') {
        popupPoint.x = position.point.x - popupWidthPx / 2;
        popupPoint.y = position.point.y + 6;
    } else if (position.dir === 'left') {
        popupPoint.x = position.point.x - popupWidthPx;
        popupPoint.y = position.point.y - popupHeightPx / 2;
    } else if (position.dir === 'right') {
        popupPoint.x = position.point.x + 6;
        popupPoint.y = position.point.y - popupHeightPx / 2;
    }
    if (popupPoint.x < popupPaddingPx) {
        popupPoint.x = popupPaddingPx;
    }
    if (popupPoint.y < popupPaddingPx) {
        popupPoint.y = popupPaddingPx;
    }
    if (popupPoint.x + popupWidthPx > boundingReact.right - boundingReact.left - popupPaddingPx) {
        popupPoint.x = boundingReact.right - boundingReact.left - popupPaddingPx - popupWidthPx;
    }
    if (popupPoint.y + popupHeightPx > boundingReact.bottom - boundingReact.top - popupPaddingPx) {
        popupPoint.y = boundingReact.bottom - boundingReact.top - popupPaddingPx - popupHeightPx;
    }
    return {
        point: popupPoint,
        dir: position.dir
    };
};
const getTextFromRange = (range, rejectTags = [])=>{
    const clonedRange = range.cloneRange();
    const fragment = clonedRange.cloneContents();
    const walker = document.createTreeWalker(fragment, NodeFilter.SHOW_TEXT, {
        acceptNode: (node)=>{
            const parent = node.parentElement;
            if (rejectTags.includes(parent?.tagName.toLowerCase() || '')) {
                return NodeFilter.FILTER_REJECT;
            }
            return NodeFilter.FILTER_ACCEPT;
        }
    });
    let text = '';
    let node;
    while(node = walker.nextNode()){
        text += node.nodeValue ?? '';
    }
    return text;
};
}),
"[project]/apps/readest-app/src/utils/word.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Helper to check if selected text is a whole word (has word boundaries on both sides)
// Note: Word boundary checks only apply to space-separated languages (English, etc.)
// CJK languages (Chinese, Japanese, Korean) don't require boundary checks
__turbopack_context__.s([
    "getWordCount",
    ()=>getWordCount,
    "isPunctuationOnly",
    ()=>isPunctuationOnly,
    "isWholeWord",
    ()=>isWholeWord
]);
const isWholeWord = (range, selectedText)=>{
    try {
        const trimmed = selectedText.trim();
        if (!trimmed) return false;
        // Unicode-aware patterns
        const wordCharPattern = /[\p{L}\p{N}\p{M}_]/u;
        const cjkPattern = /[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Hangul}]/u;
        // Must contain at least one word character
        if (!wordCharPattern.test(trimmed)) return false;
        // CJK text doesn't need boundary checks (no spaces between words)
        if (cjkPattern.test(trimmed)) return true;
        // Phrases (with spaces/punctuation) are always valid
        if (/[\s\p{P}\p{S}]/u.test(trimmed)) return true;
        // For single words in space-separated languages, check boundaries
        const { charBefore, charAfter } = getBoundaryChars(range);
        const isWordChar = (char)=>wordCharPattern.test(char);
        return (!charBefore || !isWordChar(charBefore)) && (!charAfter || !isWordChar(charAfter));
    } catch (e) {
        console.warn('Failed to check whole word:', e);
        return /[\p{L}\p{N}\p{M}_]/u.test(selectedText);
    }
};
const isPunctuationOnly = (text)=>{
    const punctuationPattern = /^[\p{P}\p{S}\s]+$/u;
    return punctuationPattern.test(text);
};
// Helper to get characters before and after the selection
const getBoundaryChars = (range)=>{
    let charBefore = '';
    let charAfter = '';
    try {
        // Get character before
        const startNode = range.startContainer;
        if (startNode.nodeType === Node.TEXT_NODE) {
            const textNode = startNode;
            if (range.startOffset > 0) {
                charBefore = textNode.textContent?.charAt(range.startOffset - 1) || '';
            } else {
                // Check previous sibling
                let prev = startNode.previousSibling;
                while(prev && prev.nodeType !== Node.TEXT_NODE){
                    prev = prev.previousSibling;
                }
                if (prev?.nodeType === Node.TEXT_NODE) {
                    const prevText = prev.textContent || '';
                    charBefore = prevText.charAt(prevText.length - 1);
                }
            }
        }
        // Get character after
        const endNode = range.endContainer;
        if (endNode.nodeType === Node.TEXT_NODE) {
            const textNode = endNode;
            const textContent = textNode.textContent || '';
            if (range.endOffset < textContent.length) {
                charAfter = textContent.charAt(range.endOffset);
            } else {
                // Check next sibling
                let next = textNode.nextSibling;
                while(next && next.nodeType !== Node.TEXT_NODE){
                    next = next.nextSibling;
                }
                if (next?.nodeType === Node.TEXT_NODE) {
                    charAfter = (next.textContent || '').charAt(0);
                }
            }
        }
    } catch (e) {
        console.warn('[getBoundaryChars] Error:', e);
    }
    return {
        charBefore,
        charAfter
    };
};
const getWordCount = (text)=>{
    if (!text) return 0;
    return text.trim().split(/\s+/).filter(Boolean).length;
};
}),
"[project]/apps/readest-app/src/utils/css.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
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
];

//# sourceMappingURL=apps_readest-app_src_utils_6c708002._.js.map