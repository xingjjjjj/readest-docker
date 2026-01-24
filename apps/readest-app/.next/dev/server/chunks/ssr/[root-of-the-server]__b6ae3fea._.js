module.exports = [
"[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react/jsx-dev-runtime", () => require("react/jsx-dev-runtime"));

module.exports = mod;
}),
"[project]/apps/readest-app/src/utils/config.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDefaultMaxBlockSize",
    ()=>getDefaultMaxBlockSize,
    "getDefaultMaxInlineSize",
    ()=>getDefaultMaxInlineSize,
    "getMaxInlineSize",
    ()=>getMaxInlineSize
]);
const getMaxInlineSize = (viewSettings)=>{
    const isVertical = viewSettings.vertical;
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const screenAspectRatio = isVertical ? screenHeight / screenWidth : screenWidth / screenHeight;
    const isUnfoldedScreen = screenAspectRatio < 1.3 && screenAspectRatio > 0.77 && screenWidth > 600;
    return isVertical ? Math.max(screenWidth, screenHeight, 720, viewSettings.maxInlineSize) : isUnfoldedScreen ? viewSettings.maxInlineSize * 0.8 : viewSettings.maxInlineSize;
};
const getDefaultMaxInlineSize = ()=>{
    if ("TURBOPACK compile-time truthy", 1) return 720;
    //TURBOPACK unreachable
    ;
    const screenWidth = undefined;
    const screenHeight = undefined;
};
const getDefaultMaxBlockSize = ()=>{
    if ("TURBOPACK compile-time truthy", 1) return 1440;
    //TURBOPACK unreachable
    ;
    const screenWidth = undefined;
    const screenHeight = undefined;
};
}),
"[externals]/js-md5 [external] (js-md5, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("js-md5", () => require("js-md5"));

module.exports = mod;
}),
"[project]/apps/readest-app/src/utils/misc.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getContentMd5",
    ()=>getContentMd5,
    "getLocale",
    ()=>getLocale,
    "getOSPlatform",
    ()=>getOSPlatform,
    "getTargetLang",
    ()=>getTargetLang,
    "getUserLang",
    ()=>getUserLang,
    "getUserLocale",
    ()=>getUserLocale,
    "isCJKEnv",
    ()=>isCJKEnv,
    "isContentURI",
    ()=>isContentURI,
    "isFileURI",
    ()=>isFileURI,
    "isValidURL",
    ()=>isValidURL,
    "makeSafeFilename",
    ()=>makeSafeFilename,
    "randomMd5",
    ()=>randomMd5,
    "stubTranslation",
    ()=>stubTranslation,
    "uniqueId",
    ()=>uniqueId
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$js$2d$md5__$5b$external$5d$__$28$js$2d$md5$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/js-md5 [external] (js-md5, cjs)");
;
const uniqueId = ()=>Math.random().toString(36).substring(2, 9);
const randomMd5 = ()=>(0, __TURBOPACK__imported__module__$5b$externals$5d2f$js$2d$md5__$5b$external$5d$__$28$js$2d$md5$2c$__cjs$29$__["md5"])(Math.random().toString());
const getContentMd5 = (content)=>(0, __TURBOPACK__imported__module__$5b$externals$5d2f$js$2d$md5__$5b$external$5d$__$28$js$2d$md5$2c$__cjs$29$__["md5"])(JSON.stringify(content));
const makeSafeFilename = (filename, replacement = '_')=>{
    // Windows restricted characters + control characters and reserved names
    const unsafeCharacters = /[<>:%"\/\\|?*\x00-\x1F]/g;
    const reservedFilenames = /^(con|prn|aux|nul|com[1-9]|lpt[1-9])$/i;
    // Unsafe to use filename including file extensions over 255 bytes on Android
    const maxFilenameBytes = 250;
    let safeName = filename.replace(unsafeCharacters, replacement);
    if (reservedFilenames.test(safeName)) {
        safeName = `${safeName}${replacement}`;
    }
    const encoder = new TextEncoder();
    let utf8Bytes = encoder.encode(safeName);
    while(utf8Bytes.length > maxFilenameBytes){
        safeName = safeName.slice(0, -1);
        utf8Bytes = encoder.encode(safeName);
    }
    return safeName.trim();
};
const getLocale = ()=>{
    return localStorage?.getItem('i18nextLng') || navigator?.language || '';
};
const getUserLang = ()=>{
    const locale = getLocale();
    return locale.split('-')[0] || 'en';
};
const getTargetLang = ()=>{
    const locale = getLocale();
    if (locale.startsWith('zh')) {
        return locale === 'zh-Hant' || locale === 'zh-HK' || locale === 'zh-TW' ? 'zh-Hant' : 'zh-Hans';
    }
    return locale.split('-')[0] || 'en';
};
const isCJKEnv = ()=>{
    const browserLanguage = navigator.language || '';
    const uiLanguage = localStorage?.getItem('i18nextLng') || '';
    const isCJKUI = [
        'zh',
        'ja',
        'ko'
    ].some((lang)=>uiLanguage.startsWith(lang));
    const isCJKLocale = [
        'zh',
        'ja',
        'ko'
    ].some((lang)=>browserLanguage.startsWith(lang));
    return isCJKLocale || isCJKUI;
};
const getUserLocale = (lang)=>{
    const languages = navigator.languages && navigator.languages.length > 0 ? navigator.languages : [
        navigator.language
    ];
    const filteredLocales = languages.filter((locale)=>locale.startsWith(lang));
    return filteredLocales.length > 0 ? filteredLocales[0] : undefined;
};
const getOSPlatform = ()=>{
    const userAgent = navigator.userAgent.toLowerCase();
    if (/iphone|ipad|ipod/.test(userAgent)) return 'ios';
    if (userAgent.includes('android')) return 'android';
    if (userAgent.includes('macintosh') || userAgent.includes('mac os x')) return 'macos';
    if (userAgent.includes('windows nt')) return 'windows';
    if (userAgent.includes('linux')) return 'linux';
    return 'unknown';
};
const isContentURI = (uri)=>{
    return uri.startsWith('content://');
};
const isFileURI = (uri)=>{
    return uri.startsWith('file://');
};
const isValidURL = (url, allowedSchemes = [
    'http',
    'https'
])=>{
    try {
        const { protocol } = new URL(url);
        return allowedSchemes.some((scheme)=>`${scheme}:` === protocol);
    } catch  {
        return false;
    }
};
const stubTranslation = (stubKey)=>{
    return stubKey;
};
}),
"[project]/apps/readest-app/src/services/constants.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ANDROID_FONTS",
    ()=>ANDROID_FONTS,
    "BOOK_ACCEPT_FORMATS",
    ()=>BOOK_ACCEPT_FORMATS,
    "BOOK_IDS_SEPARATOR",
    ()=>BOOK_IDS_SEPARATOR,
    "BOOK_UNGROUPED_ID",
    ()=>BOOK_UNGROUPED_ID,
    "BOOK_UNGROUPED_NAME",
    ()=>BOOK_UNGROUPED_NAME,
    "CHECK_UPDATE_INTERVAL_SEC",
    ()=>CHECK_UPDATE_INTERVAL_SEC,
    "CJK_EXCLUDE_PATTENS",
    ()=>CJK_EXCLUDE_PATTENS,
    "CJK_FONTS_PATTENS",
    ()=>CJK_FONTS_PATTENS,
    "CJK_SANS_SERIF_FONTS",
    ()=>CJK_SANS_SERIF_FONTS,
    "CJK_SERIF_FONTS",
    ()=>CJK_SERIF_FONTS,
    "CUSTOM_THEME_TEMPLATES",
    ()=>CUSTOM_THEME_TEMPLATES,
    "DATA_SUBDIR",
    ()=>DATA_SUBDIR,
    "DEFAULT_ANNOTATOR_CONFIG",
    ()=>DEFAULT_ANNOTATOR_CONFIG,
    "DEFAULT_BOOK_FONT",
    ()=>DEFAULT_BOOK_FONT,
    "DEFAULT_BOOK_LANGUAGE",
    ()=>DEFAULT_BOOK_LANGUAGE,
    "DEFAULT_BOOK_LAYOUT",
    ()=>DEFAULT_BOOK_LAYOUT,
    "DEFAULT_BOOK_SEARCH_CONFIG",
    ()=>DEFAULT_BOOK_SEARCH_CONFIG,
    "DEFAULT_BOOK_STYLE",
    ()=>DEFAULT_BOOK_STYLE,
    "DEFAULT_CJK_VIEW_SETTINGS",
    ()=>DEFAULT_CJK_VIEW_SETTINGS,
    "DEFAULT_DAILY_TRANSLATION_QUOTA",
    ()=>DEFAULT_DAILY_TRANSLATION_QUOTA,
    "DEFAULT_EINK_VIEW_SETTINGS",
    ()=>DEFAULT_EINK_VIEW_SETTINGS,
    "DEFAULT_FIXED_LAYOUT_VIEW_SETTINGS",
    ()=>DEFAULT_FIXED_LAYOUT_VIEW_SETTINGS,
    "DEFAULT_KOSYNC_SETTINGS",
    ()=>DEFAULT_KOSYNC_SETTINGS,
    "DEFAULT_MOBILE_READSETTINGS",
    ()=>DEFAULT_MOBILE_READSETTINGS,
    "DEFAULT_MOBILE_SYSTEM_SETTINGS",
    ()=>DEFAULT_MOBILE_SYSTEM_SETTINGS,
    "DEFAULT_MOBILE_VIEW_SETTINGS",
    ()=>DEFAULT_MOBILE_VIEW_SETTINGS,
    "DEFAULT_NOTE_EXPORT_CONFIG",
    ()=>DEFAULT_NOTE_EXPORT_CONFIG,
    "DEFAULT_READSETTINGS",
    ()=>DEFAULT_READSETTINGS,
    "DEFAULT_SCREEN_CONFIG",
    ()=>DEFAULT_SCREEN_CONFIG,
    "DEFAULT_STORAGE_QUOTA",
    ()=>DEFAULT_STORAGE_QUOTA,
    "DEFAULT_SYSTEM_SETTINGS",
    ()=>DEFAULT_SYSTEM_SETTINGS,
    "DEFAULT_TRANSLATOR_CONFIG",
    ()=>DEFAULT_TRANSLATOR_CONFIG,
    "DEFAULT_TTS_CONFIG",
    ()=>DEFAULT_TTS_CONFIG,
    "DEFAULT_VIEW_CONFIG",
    ()=>DEFAULT_VIEW_CONFIG,
    "DISABLE_DOUBLE_CLICK_ON_MOBILE",
    ()=>DISABLE_DOUBLE_CLICK_ON_MOBILE,
    "DOUBLE_CLICK_INTERVAL_THRESHOLD_MS",
    ()=>DOUBLE_CLICK_INTERVAL_THRESHOLD_MS,
    "DOWNLOAD_READEST_URL",
    ()=>DOWNLOAD_READEST_URL,
    "FALLBACK_FONTS",
    ()=>FALLBACK_FONTS,
    "HIGHLIGHT_COLOR_HEX",
    ()=>HIGHLIGHT_COLOR_HEX,
    "IMAGE_ACCEPT_FORMATS",
    ()=>IMAGE_ACCEPT_FORMATS,
    "IOS_FONTS",
    ()=>IOS_FONTS,
    "LINUX_FONTS",
    ()=>LINUX_FONTS,
    "LOCAL_BOOKS_SUBDIR",
    ()=>LOCAL_BOOKS_SUBDIR,
    "LOCAL_FONTS_SUBDIR",
    ()=>LOCAL_FONTS_SUBDIR,
    "LOCAL_IMAGES_SUBDIR",
    ()=>LOCAL_IMAGES_SUBDIR,
    "LONG_HOLD_THRESHOLD",
    ()=>LONG_HOLD_THRESHOLD,
    "MACOS_FONTS",
    ()=>MACOS_FONTS,
    "MAX_ZOOM_LEVEL",
    ()=>MAX_ZOOM_LEVEL,
    "MIGHT_BE_RTL_LANGS",
    ()=>MIGHT_BE_RTL_LANGS,
    "MIN_ZOOM_LEVEL",
    ()=>MIN_ZOOM_LEVEL,
    "MONOSPACE_FONTS",
    ()=>MONOSPACE_FONTS,
    "NON_FREE_FONTS",
    ()=>NON_FREE_FONTS,
    "READEST_CHANGELOG_FILE",
    ()=>READEST_CHANGELOG_FILE,
    "READEST_NODE_BASE_URL",
    ()=>READEST_NODE_BASE_URL,
    "READEST_OPDS_USER_AGENT",
    ()=>READEST_OPDS_USER_AGENT,
    "READEST_PUBLIC_STORAGE_BASE_URL",
    ()=>READEST_PUBLIC_STORAGE_BASE_URL,
    "READEST_UPDATER_FILE",
    ()=>READEST_UPDATER_FILE,
    "READEST_WEB_BASE_URL",
    ()=>READEST_WEB_BASE_URL,
    "SANS_SERIF_FONTS",
    ()=>SANS_SERIF_FONTS,
    "SERIF_FONTS",
    ()=>SERIF_FONTS,
    "SETTINGS_FILENAME",
    ()=>SETTINGS_FILENAME,
    "SUPPORTED_BOOK_EXTS",
    ()=>SUPPORTED_BOOK_EXTS,
    "SUPPORTED_IMAGE_EXTS",
    ()=>SUPPORTED_IMAGE_EXTS,
    "SUPPORTED_LANGNAMES",
    ()=>SUPPORTED_LANGNAMES,
    "SUPPORTED_LANGS",
    ()=>SUPPORTED_LANGS,
    "SYNC_BOOKS_INTERVAL_SEC",
    ()=>SYNC_BOOKS_INTERVAL_SEC,
    "SYNC_NOTES_INTERVAL_SEC",
    ()=>SYNC_NOTES_INTERVAL_SEC,
    "SYNC_PROGRESS_INTERVAL_SEC",
    ()=>SYNC_PROGRESS_INTERVAL_SEC,
    "SYSTEM_SETTINGS_VERSION",
    ()=>SYSTEM_SETTINGS_VERSION,
    "TRANSLATED_LANGS",
    ()=>TRANSLATED_LANGS,
    "TRANSLATOR_LANGS",
    ()=>TRANSLATOR_LANGS,
    "WINDOWS_FONTS",
    ()=>WINDOWS_FONTS,
    "ZOOM_STEP",
    ()=>ZOOM_STEP
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$config$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/config.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/misc.ts [ssr] (ecmascript)");
;
;
const DATA_SUBDIR = 'Readest';
const LOCAL_BOOKS_SUBDIR = `${DATA_SUBDIR}/Books`;
const LOCAL_FONTS_SUBDIR = `${DATA_SUBDIR}/Fonts`;
const LOCAL_IMAGES_SUBDIR = `${DATA_SUBDIR}/Images`;
const SETTINGS_FILENAME = 'settings.json';
const SUPPORTED_BOOK_EXTS = [
    'epub',
    'mobi',
    'azw',
    'azw3',
    'fb2',
    'zip',
    'cbz',
    'pdf',
    'txt'
];
const BOOK_ACCEPT_FORMATS = SUPPORTED_BOOK_EXTS.map((ext)=>`.${ext}`).join(', ');
const BOOK_UNGROUPED_NAME = '';
const BOOK_UNGROUPED_ID = '';
const SUPPORTED_IMAGE_EXTS = [
    'png',
    'jpg',
    'jpeg'
];
const IMAGE_ACCEPT_FORMATS = SUPPORTED_IMAGE_EXTS.map((ext)=>`.${ext}`).join(', ');
const DEFAULT_KOSYNC_SETTINGS = {
    serverUrl: 'https://sync.koreader.rocks/',
    username: '',
    userkey: '',
    deviceId: '',
    deviceName: '',
    checksumMethod: 'binary',
    strategy: 'prompt',
    enabled: false
};
const DEFAULT_SYSTEM_SETTINGS = {
    keepLogin: false,
    autoUpload: true,
    alwaysOnTop: false,
    openBookInNewWindow: true,
    alwaysShowStatusBar: false,
    alwaysInForeground: false,
    autoCheckUpdates: true,
    screenWakeLock: false,
    screenBrightness: -1,
    autoScreenBrightness: true,
    openLastBooks: false,
    lastOpenBooks: [],
    autoImportBooksOnOpen: false,
    telemetryEnabled: true,
    discordRichPresenceEnabled: false,
    libraryViewMode: 'grid',
    librarySortBy: 'updated',
    librarySortAscending: false,
    libraryCoverFit: 'crop',
    libraryAutoColumns: true,
    libraryColumns: 6,
    kosync: DEFAULT_KOSYNC_SETTINGS,
    lastSyncedAtBooks: 0,
    lastSyncedAtConfigs: 0,
    lastSyncedAtNotes: 0
};
const DEFAULT_MOBILE_SYSTEM_SETTINGS = {
    libraryColumns: 3
};
const HIGHLIGHT_COLOR_HEX = {
    red: '#f87171',
    yellow: '#facc15',
    green: '#4ade80',
    blue: '#60a5fa',
    violet: '#a78bfa'
};
const DEFAULT_READSETTINGS = {
    sideBarWidth: '15%',
    isSideBarPinned: true,
    notebookWidth: '25%',
    isNotebookPinned: false,
    autohideCursor: true,
    translationProvider: 'deepl',
    translateTargetLang: 'EN',
    customThemes: [],
    highlightStyle: 'highlight',
    highlightStyles: {
        highlight: 'yellow',
        underline: 'green',
        squiggly: 'blue'
    },
    customHighlightColors: HIGHLIGHT_COLOR_HEX,
    customTtsHighlightColors: []
};
const DEFAULT_MOBILE_READSETTINGS = {
    sideBarWidth: '25%',
    isSideBarPinned: false
};
const DEFAULT_BOOK_FONT = {
    serifFont: 'Bitter',
    sansSerifFont: 'Roboto',
    monospaceFont: 'Consolas',
    defaultFont: 'Serif',
    defaultCJKFont: 'LXGW WenKai GB Screen',
    defaultFontSize: 16,
    minimumFontSize: 8,
    fontWeight: 400
};
const DEFAULT_BOOK_LAYOUT = {
    marginTopPx: 44,
    marginBottomPx: 44,
    marginLeftPx: 16,
    marginRightPx: 16,
    compactMarginTopPx: 16,
    compactMarginBottomPx: 16,
    compactMarginLeftPx: 16,
    compactMarginRightPx: 16,
    gapPercent: 5,
    scrolled: false,
    disableClick: false,
    fullscreenClickArea: false,
    swapClickArea: false,
    disableDoubleClick: false,
    volumeKeysToFlip: false,
    continuousScroll: false,
    maxColumnCount: 2,
    maxInlineSize: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$config$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getDefaultMaxInlineSize"])(),
    maxBlockSize: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$config$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getDefaultMaxBlockSize"])(),
    animated: false,
    isEink: false,
    writingMode: 'auto',
    vertical: false,
    rtl: false,
    scrollingOverlap: 0,
    allowScript: false
};
const DEFAULT_BOOK_LANGUAGE = {
    replaceQuotationMarks: true,
    convertChineseVariant: 'none'
};
const DEFAULT_BOOK_STYLE = {
    zoomLevel: 100,
    paragraphMargin: 0.6,
    lineHeight: 1.4,
    wordSpacing: 0,
    letterSpacing: 0,
    textIndent: 0,
    fullJustification: true,
    hyphenation: true,
    invertImgColorInDark: false,
    theme: 'light',
    overrideFont: false,
    overrideLayout: false,
    overrideColor: false,
    backgroundTextureId: 'none',
    backgroundOpacity: 0.6,
    backgroundSize: 'cover',
    codeHighlighting: false,
    codeLanguage: 'auto-detect',
    userStylesheet: '',
    userUIStylesheet: '',
    zoomMode: 'fit-page',
    spreadMode: 'auto',
    keepCoverSpread: true
};
const DEFAULT_MOBILE_VIEW_SETTINGS = {
    fullJustification: false,
    animated: true,
    defaultFont: 'Sans-serif',
    marginBottomPx: 16,
    disableDoubleClick: true,
    spreadMode: 'none'
};
const DEFAULT_CJK_VIEW_SETTINGS = {
    fullJustification: true,
    textIndent: 2,
    paragraphMargin: 1,
    lineHeight: 1.6
};
const DEFAULT_FIXED_LAYOUT_VIEW_SETTINGS = {
    overrideColor: false
};
const DEFAULT_EINK_VIEW_SETTINGS = {
    isEink: true,
    animated: false,
    volumeKeysToFlip: true
};
const DEFAULT_VIEW_CONFIG = {
    sideBarTab: 'toc',
    uiLanguage: '',
    sortedTOC: false,
    doubleBorder: false,
    borderColor: 'red',
    showHeader: true,
    showFooter: true,
    showBarsOnScroll: false,
    showRemainingTime: false,
    showRemainingPages: false,
    showProgressInfo: true,
    tapToToggleFooter: false,
    showMarginsOnScroll: false,
    progressStyle: 'fraction',
    progressInfoMode: 'all'
};
const DEFAULT_TTS_CONFIG = {
    ttsRate: 1.3,
    ttsVoice: '',
    ttsLocation: '',
    showTTSBar: false,
    ttsHighlightOptions: {
        style: 'highlight',
        color: '#808080'
    }
};
const DEFAULT_TRANSLATOR_CONFIG = {
    translationEnabled: false,
    translationProvider: 'deepl',
    translateTargetLang: '',
    showTranslateSource: true,
    ttsReadAloudText: 'both'
};
const DEFAULT_NOTE_EXPORT_CONFIG = {
    includeTitle: true,
    includeAuthor: true,
    includeDate: true,
    includeChapterTitles: true,
    includeQuotes: true,
    includeNotes: true,
    includeTimestamp: false,
    includeChapterSeparator: false,
    noteSeparator: '\n\n',
    useCustomTemplate: false,
    customTemplate: ''
};
const DEFAULT_ANNOTATOR_CONFIG = {
    enableAnnotationQuickActions: true,
    annotationQuickAction: null,
    copyToNotebook: false,
    noteExportConfig: DEFAULT_NOTE_EXPORT_CONFIG
};
const DEFAULT_SCREEN_CONFIG = {
    screenOrientation: 'auto'
};
const DEFAULT_BOOK_SEARCH_CONFIG = {
    scope: 'book',
    matchCase: false,
    matchWholeWords: false,
    matchDiacritics: false
};
const SYSTEM_SETTINGS_VERSION = 1;
const SERIF_FONTS = [
    'Bitter',
    'Literata',
    'Merriweather',
    'Roboto Slab',
    'Vollkorn',
    'PT Serif',
    'Georgia',
    'Times New Roman'
];
const NON_FREE_FONTS = [
    'Georgia',
    'Times New Roman'
];
const CJK_SERIF_FONTS = [
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["stubTranslation"])('LXGW WenKai GB Screen'),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["stubTranslation"])('LXGW WenKai TC'),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["stubTranslation"])('GuanKiapTsingKhai-T'),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["stubTranslation"])('Source Han Serif CN VF'),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["stubTranslation"])('Huiwen-mincho'),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["stubTranslation"])('KingHwa_OldSong')
];
const CJK_SANS_SERIF_FONTS = [
    'Noto Sans SC',
    'Noto Sans TC'
];
const SANS_SERIF_FONTS = [
    'Roboto',
    'Noto Sans',
    'Open Sans',
    'PT Sans',
    'Helvetica'
];
const MONOSPACE_FONTS = [
    'Fira Code',
    'Consolas',
    'Courier New',
    'Lucida Console',
    'PT Mono'
];
const FALLBACK_FONTS = [
    'MiSans L3'
];
const WINDOWS_FONTS = [
    'Arial',
    'Arial Black',
    'Bahnschrift',
    'Calibri',
    'Cambria',
    'Cambria Math',
    'Candara',
    'Comic Sans MS',
    'Consolas',
    'Constantia',
    'Corbel',
    'Courier New',
    'Ebrima',
    'FangSong',
    'Franklin Gothic Medium',
    'Gabriola',
    'Gadugi',
    'Georgia',
    'Heiti',
    'HoloLens MDL2 Assets',
    'Impact',
    'Ink Free',
    'Javanese Text',
    'KaiTi',
    'Leelawadee UI',
    'Lucida Console',
    'Lucida Sans Unicode',
    'LXGW WenKai GB Screen',
    'LXGW WenKai TC',
    'Malgun Gothic',
    'Marlett',
    'Microsoft Himalaya',
    'Microsoft JhengHei',
    'Microsoft New Tai Lue',
    'Microsoft PhagsPa',
    'Microsoft Sans Serif',
    'Microsoft Tai Le',
    'Microsoft YaHei',
    'Microsoft Yi Baiti',
    'MingLiU',
    'MingLiU-ExtB',
    'Mongolian Baiti',
    'MS Gothic',
    'MS Mincho',
    'MV Boli',
    'Myanmar Text',
    'Nirmala UI',
    'Noto Serif JP',
    'NSimSun',
    'Palatino Linotype',
    'PMingLiU',
    'Segoe MDL2 Assets',
    'Segoe Print',
    'Segoe Script',
    'Segoe UI',
    'Segoe UI Historic',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'SimHei',
    'SimSun',
    'SimSun-ExtB',
    'Sitka',
    'Sylfaen',
    'Tahoma',
    'Times New Roman',
    'Trebuchet MS',
    'Verdana',
    'XiHeiti',
    'Yu Gothic',
    'Yu Mincho'
];
const MACOS_FONTS = [
    'American Typewriter',
    'Andale Mono',
    'Arial',
    'Arial Black',
    'Arial Narrow',
    'Arial Rounded MT Bold',
    'Arial Unicode MS',
    'Avenir',
    'Avenir Next',
    'Avenir Next Condensed',
    'Baskerville',
    'BiauKai',
    'Big Caslon',
    'Bodoni 72',
    'Bodoni 72 Oldstyle',
    'Bodoni 72 Smallcaps',
    'Bradley Hand',
    'Brush Script MT',
    'Chalkboard',
    'Chalkboard SE',
    'Chalkduster',
    'Charter',
    'Cochin',
    'Comic Sans MS',
    'Copperplate',
    'Courier',
    'Courier New',
    'Didot',
    'DIN Alternate',
    'DIN Condensed',
    'FangSong',
    'Futura',
    'Geneva',
    'Georgia',
    'Gill Sans',
    'Heiti SC',
    'Heiti TC',
    'Helvetica',
    'Helvetica Neue',
    'Herculanum',
    'Hiragino Sans',
    'Hiragino Mincho',
    'Hoefler Text',
    'Impact',
    'Kaiti SC',
    'Kaiti TC',
    'Kozuka Gothic Pro',
    'Kozuka Mincho Pro',
    'Lucida Grande',
    'Luminari',
    'LXGW WenKai GB Screen',
    'LXGW WenKai TC',
    'Marker Felt',
    'Menlo',
    'Microsoft Sans Serif',
    'Monaco',
    'Noteworthy',
    'Noto Serif JP',
    'Optima',
    'Palatino',
    'Papyrus',
    'PingFang HK',
    'PingFang SC',
    'PingFang TC',
    'Phosphate',
    'Rockwell',
    'Savoye LET',
    'SignPainter',
    'Skia',
    'Snell Roundhand',
    'Songti SC',
    'Songti TC',
    'STFangsong',
    'STKaiti',
    'STSong',
    'STXihei',
    'Tahoma',
    'Times',
    'Times New Roman',
    'Trattatello',
    'Trebuchet MS',
    'Verdana',
    'XiHeiti',
    'Yu Mincho',
    'Zapfino'
];
const LINUX_FONTS = [
    'Arial',
    'Cantarell',
    'Comic Sans MS',
    'Courier New',
    'DejaVu Sans',
    'DejaVu Sans Mono',
    'DejaVu Serif',
    'Droid Sans',
    'Droid Sans Mono',
    'FangSong',
    'FreeMono',
    'FreeSans',
    'FreeSerif',
    'Georgia',
    'Heiti',
    'Impact',
    'Kaiti',
    'Liberation Mono',
    'Liberation Sans',
    'Liberation Serif',
    'LXGW WenKai GB Screen',
    'LXGW WenKai TC',
    'Noto Mono',
    'Noto Sans',
    'Noto Sans JP',
    'Noto Sans CJK SC',
    'Noto Sans CJK TC',
    'Noto Serif',
    'Noto Serif JP',
    'Noto Serif CJK SC',
    'Noto Serif CJK TC',
    'Open Sans',
    'Poppins',
    'Sazanami Gothic',
    'Sazanami Mincho',
    'Source Han Sans',
    'Source Han Serif',
    'Times New Roman',
    'Ubuntu',
    'Ubuntu Mono',
    'WenQuanYi Micro Hei',
    'WenQuanYi Zen Hei',
    'XiHeiti'
];
const IOS_FONTS = [
    'Avenir',
    'Avenir Next',
    'Courier',
    'Courier New',
    'FangSong',
    'Georgia',
    'Heiti',
    'Helvetica',
    'Helvetica Neue',
    'Hiragino Mincho',
    'Hiragino Sans',
    'Kaiti',
    'LXGW WenKai GB Screen',
    'LXGW WenKai TC',
    'Palatino',
    'PingFang SC',
    'PingFang TC',
    'San Francisco',
    'SF Pro Display',
    'SF Pro Rounded',
    'SF Pro Text',
    'Songti',
    'Times New Roman',
    'Verdana',
    'XiHeiti'
];
const ANDROID_FONTS = [
    'Arial',
    'Droid Sans',
    'Droid Serif',
    'FangSong',
    'FZLanTingHei',
    'Georgia',
    'Heiti',
    'Kaiti',
    'LXGW WenKai GB Screen',
    'LXGW WenKai TC',
    'Noto Sans',
    'Noto Sans CJK',
    'Noto Sans JP',
    'Noto Serif',
    'Noto Serif CJK',
    'Noto Serif JP',
    'PingFang SC',
    'Roboto',
    'Source Han Sans',
    'Source Han Serif',
    'STHeiti',
    'STSong',
    'Tahoma',
    'Verdana',
    'XiHeiti'
];
const CJK_EXCLUDE_PATTENS = new RegExp([
    'AlBayan',
    'STIX',
    'Kailasa',
    'ITCTT',
    'Luminari',
    'Myanmar'
].join('|'), 'i');
const CJK_FONTS_PATTENS = new RegExp([
    'CJK',
    'TC$',
    'SC$',
    'HK',
    'JP',
    'TW',
    'Sim',
    'Kai',
    'Hei',
    'Yan',
    'Min',
    'Khai',
    'Yuan',
    'Song',
    'Ming',
    'FZ',
    'Huiwen',
    'KingHwa',
    'FangZheng',
    'WenQuanYi',
    'PingFang',
    'Hiragino',
    'Meiryo',
    'Source\\s?Han',
    'Yu\\s?Gothic',
    'Yu\\s?Mincho',
    'Mincho',
    'Nanum',
    'Malgun',
    'Gulim',
    'Dotum',
    'Batang',
    'Gungsuh',
    'OPPO sans',
    'MiSans',
    'Fallback'
].join('|'), 'i');
const BOOK_IDS_SEPARATOR = '+';
const DOWNLOAD_READEST_URL = 'https://readest.com?utm_source=readest_web';
const READEST_WEB_BASE_URL = ("TURBOPACK compile-time value", "http://localhost:3000") || 'https://web.readest.com';
const READEST_NODE_BASE_URL = ("TURBOPACK compile-time value", "http://localhost:3000") || 'https://node.readest.com';
const LATEST_DOWNLOAD_BASE_URL = 'https://download.readest.com/releases';
const READEST_UPDATER_FILE = `${LATEST_DOWNLOAD_BASE_URL}/latest.json`;
const READEST_CHANGELOG_FILE = `${LATEST_DOWNLOAD_BASE_URL}/release-notes.json`;
const READEST_PUBLIC_STORAGE_BASE_URL = ("TURBOPACK compile-time value", "http://localhost:3000") || 'https://storage.readest.com';
const READEST_OPDS_USER_AGENT = 'Readest/1.0 (OPDS Browser)';
const SYNC_PROGRESS_INTERVAL_SEC = 3;
const SYNC_NOTES_INTERVAL_SEC = 5;
const SYNC_BOOKS_INTERVAL_SEC = 5;
const CHECK_UPDATE_INTERVAL_SEC = 24 * 60 * 60;
const MAX_ZOOM_LEVEL = 500;
const MIN_ZOOM_LEVEL = 50;
const ZOOM_STEP = 10;
const DEFAULT_STORAGE_QUOTA = {
    free: 500 * 1024 * 1024,
    plus: 5 * 1024 * 1024 * 1024,
    pro: 20 * 1024 * 1024 * 1024,
    purchase: 0
};
const DEFAULT_DAILY_TRANSLATION_QUOTA = {
    free: 10 * 1024,
    plus: 100 * 1024,
    pro: 500 * 1024,
    purchase: 0
};
const DOUBLE_CLICK_INTERVAL_THRESHOLD_MS = 250;
const DISABLE_DOUBLE_CLICK_ON_MOBILE = true;
const LONG_HOLD_THRESHOLD = 500;
const CUSTOM_THEME_TEMPLATES = [
    {
        light: {
            fg: '#2b2b2b',
            bg: '#f3f3f3',
            primary: '#3c5a72'
        },
        dark: {
            fg: '#d0d0d0',
            bg: '#1a1c1f',
            primary: '#486e8a'
        }
    },
    {
        light: {
            fg: '#3f2f3c',
            bg: '#f5ecf8',
            primary: '#7b5291'
        },
        dark: {
            fg: '#d6cadd',
            bg: '#3a2c3d',
            primary: '#bda0cc'
        }
    },
    {
        light: {
            fg: '#2b2b2b',
            bg: '#defcd9',
            primary: '#00796b'
        },
        dark: {
            fg: '#c8e6c9',
            bg: '#273c33',
            primary: '#26a69a'
        }
    }
];
const MIGHT_BE_RTL_LANGS = [
    'zh',
    'ja',
    'ko',
    'ar',
    'he',
    'fa',
    'ur',
    'dv',
    'ps',
    'sd',
    'yi',
    ''
];
const TRANSLATED_LANGS = {
    en: 'English',
    fr: 'Français',
    de: 'Deutsch',
    nl: 'Nederlands',
    it: 'Italiano',
    ja: '日本語',
    ko: '한국어',
    es: 'Español',
    pt: 'Português',
    ru: 'Русский',
    ar: 'العربية',
    fa: 'فارسی',
    el: 'Ελληνικά',
    uk: 'Українська',
    pl: 'Polski',
    tr: 'Türkçe',
    hi: 'हिन्दी',
    id: 'Indonesia',
    vi: 'Tiếng Việt',
    th: 'ภาษาไทย',
    ms: 'Melayu',
    bo: 'བོད་སྐད་',
    bn: 'বাংলা',
    ta: 'தமிழ்',
    si: 'සිංහල',
    'zh-CN': '简体中文',
    'zh-TW': '正體中文'
};
const TRANSLATOR_LANGS = {
    ...TRANSLATED_LANGS,
    nb: 'Bokmål',
    sv: 'Svenska',
    fi: 'Suomi',
    da: 'Dansk',
    cs: 'Čeština',
    hu: 'Magyar',
    ro: 'Română',
    bg: 'Български',
    hr: 'Hrvatski',
    lt: 'Lietuvių',
    sl: 'Slovenščina',
    sk: 'Slovenčina',
    fa: 'فارسی'
};
const SUPPORTED_LANGS = {
    ...TRANSLATED_LANGS,
    zh: '中文'
};
const SUPPORTED_LANGNAMES = Object.fromEntries(Object.entries(SUPPORTED_LANGS).map(([code, name])=>[
        name,
        code
    ]));
}),
"[project]/apps/readest-app/src/services/environment.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getAPIBaseUrl",
    ()=>getAPIBaseUrl,
    "getBaseUrl",
    ()=>getBaseUrl,
    "getNodeAPIBaseUrl",
    ()=>getNodeAPIBaseUrl,
    "getNodeBaseUrl",
    ()=>getNodeBaseUrl,
    "hasCli",
    ()=>hasCli,
    "isPWA",
    ()=>isPWA,
    "isTauriAppPlatform",
    ()=>isTauriAppPlatform,
    "isWebAppPlatform",
    ()=>isWebAppPlatform
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/constants.ts [ssr] (ecmascript)");
;
const appPlatform = ("TURBOPACK compile-time value", "web") || 'web';
const isTauriAppPlatform = ()=>appPlatform === 'tauri';
const isWebAppPlatform = ()=>appPlatform === 'web';
const hasCli = ()=>window.__READEST_CLI_ACCESS === true;
const isPWA = ()=>window.matchMedia('(display-mode: standalone)').matches;
const getBaseUrl = ()=>("TURBOPACK compile-time value", "http://localhost:3000") ?? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["READEST_WEB_BASE_URL"];
const getNodeBaseUrl = ()=>("TURBOPACK compile-time value", "http://localhost:3000") ?? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["READEST_NODE_BASE_URL"];
const isWebDevMode = ()=>("TURBOPACK compile-time value", "development") === 'development' && isWebAppPlatform();
const getAPIBaseUrl = ()=>isWebDevMode() ? '/api' : "TURBOPACK unreachable";
const getNodeAPIBaseUrl = ()=>isWebDevMode() ? '/api' : "TURBOPACK unreachable";
let nativeAppService = null;
const getNativeAppService = async ()=>{
    if (!nativeAppService) {
        const { NativeAppService } = await __turbopack_context__.A("[project]/apps/readest-app/src/services/nativeAppService.ts [ssr] (ecmascript, async loader)");
        nativeAppService = new NativeAppService();
        await nativeAppService.init();
    }
    return nativeAppService;
};
let webAppService = null;
const getWebAppService = async ()=>{
    if (!webAppService) {
        const { WebAppService } = await __turbopack_context__.A("[project]/apps/readest-app/src/services/webAppService.ts [ssr] (ecmascript, async loader)");
        webAppService = new WebAppService();
        await webAppService.init();
    }
    return webAppService;
};
const environmentConfig = {
    getAppService: async ()=>{
        // Check if actually running in Tauri environment (runtime check)
        const isTauriRuntime = ("TURBOPACK compile-time value", "undefined") !== 'undefined' && window.__TAURI__;
        if (isTauriAppPlatform() && isTauriRuntime) //TURBOPACK unreachable
        ;
        else {
            return getWebAppService();
        }
    }
};
const __TURBOPACK__default__export__ = environmentConfig;
}),
"[project]/apps/readest-app/src/context/EnvContext.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EnvProvider",
    ()=>EnvProvider,
    "useEnv",
    ()=>useEnv
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/environment.ts [ssr] (ecmascript)");
'use client';
;
;
;
const EnvContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createContext"])(undefined);
const EnvProvider = ({ children })=>{
    const [envConfig] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"]);
    const [appService, setAppService] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].useEffect(()=>{
        envConfig.getAppService().then((service)=>setAppService(service));
        window.addEventListener('error', (e)=>{
            if (e.message === 'ResizeObserver loop limit exceeded') {
                e.stopImmediatePropagation();
                e.preventDefault();
                return true;
            }
            return false;
        });
    }, [
        envConfig
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(EnvContext.Provider, {
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
const useEnv = ()=>{
    const context = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useContext"])(EnvContext);
    if (!context) throw new Error('useEnv must be used within EnvProvider');
    return context;
};
}),
"[project]/apps/readest-app/src/utils/polyfill.ts [ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

// A groupBy polyfill for foliate-js
Object.groupBy ??= (iterable, callbackfn)=>{
    const obj = Object.create(null);
    let i = 0;
    for (const value of iterable){
        const key = callbackfn(value, i++);
        if (key in obj) {
            obj[key].push(value);
        } else {
            obj[key] = [
                value
            ];
        }
    }
    return obj;
};
Map.groupBy ??= (iterable, callbackfn)=>{
    const map = new Map();
    let i = 0;
    for (const value of iterable){
        const key = callbackfn(value, i++), list = map.get(key);
        if (list) {
            list.push(value);
        } else {
            map.set(key, [
                value
            ]);
        }
    }
    return map;
};
}),
"[externals]/i18next [external] (i18next, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("i18next");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/i18next-browser-languagedetector [external] (i18next-browser-languagedetector, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("i18next-browser-languagedetector");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/react-i18next [external] (react-i18next, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("react-i18next");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/apps/readest-app/i18next-scanner.config.js [ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    input: [
        'src/**/*.{js,jsx,ts,tsx}',
        '!src/**/*.test.{js,jsx,ts,tsx}'
    ],
    output: '.',
    options: {
        debug: false,
        sort: false,
        func: {
            list: [
                '_'
            ],
            extensions: [
                '.js',
                '.jsx',
                '.ts',
                '.tsx'
            ]
        },
        lngs: [
            'de',
            'ja',
            'es',
            'fa',
            'fr',
            'it',
            'el',
            'ko',
            'uk',
            'nl',
            'sv',
            'pl',
            'pt',
            'ru',
            'tr',
            'hi',
            'id',
            'vi',
            'ms',
            'ar',
            'th',
            'bo',
            'bn',
            'ta',
            'si',
            'zh-CN',
            'zh-TW'
        ],
        ns: [
            'translation'
        ],
        defaultNs: 'translation',
        defaultValue: '__STRING_NOT_TRANSLATED__',
        resource: {
            loadPath: './public/locales/{{lng}}/{{ns}}.json',
            savePath: './public/locales/{{lng}}/{{ns}}.json',
            jsonIndent: 2,
            lineEnding: '\n'
        },
        keySeparator: false,
        nsSeparator: false,
        interpolation: {
            prefix: '{{',
            suffix: '}}'
        },
        metadata: {},
        allowDynamicKeys: true,
        removeUnusedKeys: true
    }
};
}),
"[project]/apps/readest-app/src/i18n/i18n.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$i18next__$5b$external$5d$__$28$i18next$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/i18next [external] (i18next, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$i18next$2d$browser$2d$languagedetector__$5b$external$5d$__$28$i18next$2d$browser$2d$languagedetector$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/i18next-browser-languagedetector [external] (i18next-browser-languagedetector, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$i18next__$5b$external$5d$__$28$react$2d$i18next$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/react-i18next [external] (react-i18next, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$i18next$2d$scanner$2e$config$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/i18next-scanner.config.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$i18next__$5b$external$5d$__$28$i18next$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$i18next$2d$browser$2d$languagedetector__$5b$external$5d$__$28$i18next$2d$browser$2d$languagedetector$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$i18next__$5b$external$5d$__$28$react$2d$i18next$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$i18next__$5b$external$5d$__$28$i18next$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$i18next$2d$browser$2d$languagedetector__$5b$external$5d$__$28$i18next$2d$browser$2d$languagedetector$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$i18next__$5b$external$5d$__$28$react$2d$i18next$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
const isBrowser = ("TURBOPACK compile-time value", "undefined") !== 'undefined';
const initI18n = async ()=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    __TURBOPACK__imported__module__$5b$externals$5d2f$i18next__$5b$external$5d$__$28$i18next$2c$__esm_import$29$__["default"].use(__TURBOPACK__imported__module__$5b$externals$5d2f$i18next$2d$browser$2d$languagedetector__$5b$external$5d$__$28$i18next$2d$browser$2d$languagedetector$2c$__esm_import$29$__["default"]).use(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$i18next__$5b$external$5d$__$28$react$2d$i18next$2c$__esm_import$29$__["initReactI18next"]).init({
        supportedLngs: [
            'en',
            ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$i18next$2d$scanner$2e$config$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["options"].lngs
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
        ns: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$i18next$2d$scanner$2e$config$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["options"].ns,
        defaultNS: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$i18next$2d$scanner$2e$config$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["options"].defaultNs,
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
    __TURBOPACK__imported__module__$5b$externals$5d2f$i18next__$5b$external$5d$__$28$i18next$2c$__esm_import$29$__["default"].on('languageChanged', (lng)=>{
        console.log('Language changed to', lng);
    });
};
initI18n();
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$externals$5d2f$i18next__$5b$external$5d$__$28$i18next$2c$__esm_import$29$__["default"];
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/react-icons [external] (react-icons, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("react-icons");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/apps/readest-app/src/context/AuthContext.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
'use client';
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createContext"])(undefined);
const AuthProvider = ({ children })=>{
    const [token, setToken] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return null;
    });
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return null;
    });
    // 验证已存储的令牌
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const verifyToken = async ()=>{
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
        };
        verifyToken();
    }, [
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(AuthContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/apps/readest-app/src/context/AuthContext.tsx",
        lineNumber: 112,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
const useAuth = ()=>{
    const context = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useContext"])(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
}),
"[externals]/posthog-js [external] (posthog-js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("posthog-js", () => require("posthog-js"));

module.exports = mod;
}),
"[externals]/posthog-js/react [external] (posthog-js/react, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("posthog-js/react", () => require("posthog-js/react"));

module.exports = mod;
}),
"[project]/apps/readest-app/src/utils/telemetry.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TELEMETRY_OPT_OUT_KEY",
    ()=>TELEMETRY_OPT_OUT_KEY,
    "captureEvent",
    ()=>captureEvent,
    "hasOptedOutTelemetry",
    ()=>hasOptedOutTelemetry,
    "optInTelemetry",
    ()=>optInTelemetry,
    "optOutTelemetry",
    ()=>optOutTelemetry
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$posthog$2d$js__$5b$external$5d$__$28$posthog$2d$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/posthog-js [external] (posthog-js, cjs)");
;
const TELEMETRY_OPT_OUT_KEY = 'readest-telemetry-opt-out';
const hasOptedOutTelemetry = ()=>{
    return localStorage.getItem(TELEMETRY_OPT_OUT_KEY) === 'true';
};
const captureEvent = (event, properties)=>{
    if (!hasOptedOutTelemetry()) {
        __TURBOPACK__imported__module__$5b$externals$5d2f$posthog$2d$js__$5b$external$5d$__$28$posthog$2d$js$2c$__cjs$29$__["default"].capture(event, properties);
    }
};
const optInTelemetry = ()=>{
    localStorage.setItem(TELEMETRY_OPT_OUT_KEY, 'false');
    __TURBOPACK__imported__module__$5b$externals$5d2f$posthog$2d$js__$5b$external$5d$__$28$posthog$2d$js$2c$__cjs$29$__["default"].opt_in_capturing();
};
const optOutTelemetry = ()=>{
    localStorage.setItem(TELEMETRY_OPT_OUT_KEY, 'true');
    __TURBOPACK__imported__module__$5b$externals$5d2f$posthog$2d$js__$5b$external$5d$__$28$posthog$2d$js$2c$__cjs$29$__["default"].opt_out_capturing();
};
}),
"[project]/apps/readest-app/package.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"name":"@readest/readest-app","version":"0.9.97","private":true,"scripts":{"dev":"dotenv -e .env.tauri -- next dev","build":"dotenv -e .env.tauri -- next build","start":"dotenv -e .env.tauri -- next start","dev-web":"dotenv -e .env.web -- next dev","build-web":"dotenv -e .env.web -- next build","start-web":"dotenv -e .env.web -- next start","build-tauri":"dotenv -e .env.tauri -- next build","i18n:extract":"i18next-scanner","lint":"eslint .","test":"dotenv -e .env -e .env.test.local vitest","tauri":"tauri","clippy":"cargo clippy -p Readest --no-deps -- -D warnings","prepare-public-vendor":"mkdirp ./public/vendor/pdfjs ./public/vendor/simplecc","copy-pdfjs-js":"cpx \"../../packages/foliate-js/node_modules/pdfjs-dist/legacy/build/{pdf.worker.min.mjs,pdf.min.mjs,pdf.d.mts}\" ./public/vendor/pdfjs","copy-pdfjs-wasm":"cpx \"../../packages/foliate-js/node_modules/pdfjs-dist/wasm/{openjpeg.wasm,qcms_bg.wasm}\" ./public/vendor/pdfjs","copy-pdfjs-fonts":"cpx \"../../packages/foliate-js/node_modules/pdfjs-dist/{cmaps,standard_fonts}/*\" ./public/vendor/pdfjs","copy-flatten-pdfjs-annotation-layer-css":"npx postcss \"../../packages/foliate-js/vendor/pdfjs/annotation_layer_builder.css\" --no-map -u postcss-nested > ./public/vendor/pdfjs/annotation_layer_builder.css","copy-flatten-pdfjs-text-layer-css":"npx postcss \"../../packages/foliate-js/vendor/pdfjs/text_layer_builder.css\" --no-map -u postcss-nested > ./public/vendor/pdfjs/text_layer_builder.css","copy-flatten-pdfjs-css":"pnpm copy-flatten-pdfjs-annotation-layer-css && pnpm copy-flatten-pdfjs-text-layer-css","copy-pdfjs":"pnpm copy-pdfjs-js && pnpm copy-pdfjs-wasm && pnpm copy-pdfjs-fonts && pnpm copy-flatten-pdfjs-css","copy-simplecc":"cpx \"../../packages/simplecc-wasm/dist/web/*\" ./public/vendor/simplecc","setup-pdfjs":"pnpm prepare-public-vendor && pnpm copy-pdfjs","setup-simplecc":"pnpm prepare-public-vendor && pnpm copy-simplecc","setup-vendors":"pnpm setup-pdfjs && pnpm setup-simplecc","build-win-x64":"dotenv -e .env.tauri.local -- tauri build --target i686-pc-windows-msvc --bundles nsis","build-win-arm64":"dotenv -e .env.tauri.local -- tauri build --target aarch64-pc-windows-msvc --bundles nsis","build-linux-x64":"dotenv -e .env.tauri.local -- tauri build --target x86_64-unknown-linux-gnu --bundles appimage","build-macos-universial":"dotenv -e .env.tauri.local -e .env.apple-nonstore.local -- tauri build -t universal-apple-darwin --bundles dmg","build-macos-universial-appstore":"dotenv -e .env.tauri.local -e .env.apple-appstore.local -- tauri build -t universal-apple-darwin --bundles app --config src-tauri/tauri.appstore.conf.json","build-macos-universial-appstore-dev":"dotenv -e .env.tauri.local -e .env.apple-appstore-dev.local -- tauri build -t universal-apple-darwin --bundles app --config src-tauri/tauri.appstore-dev.conf.json","build-ios":"dotenv -e .env.ios-appstore-dev.local -- tauri ios build","build-ios-appstore":"dotenv -e .env.ios-appstore.local -- tauri ios build --export-method app-store-connect","release-macos-universial-appstore":"dotenv -e .env.tauri.local -e .env.apple-appstore.local -- bash scripts/release-mac-appstore.sh","release-ios-appstore":"dotenv -e .env.ios-appstore.local -- bash scripts/release-ios-appstore.sh","release-google-play":"dotenv -e .env.google-play.local -- bash scripts/release-google-play.sh","config-wrangler":"sed -i \"s/\\${TRANSLATIONS_KV_ID}/$TRANSLATIONS_KV_ID/g\" wrangler.toml","preview":"pnpm patch-build-webpack && NEXT_PUBLIC_APP_PLATFORM=web opennextjs-cloudflare build && pnpm restore-build-original && opennextjs-cloudflare preview --ip 0.0.0.0 --port 3001","deploy":"pnpm patch-build-webpack && NEXT_PUBLIC_APP_PLATFORM=web opennextjs-cloudflare build && pnpm restore-build-original && opennextjs-cloudflare deploy","upload":"pnpm patch-build-webpack && NEXT_PUBLIC_APP_PLATFORM=web opennextjs-cloudflare build && pnpm restore-build-original && opennextjs-cloudflare upload","cf-typegen":"wrangler types --env-interface CloudflareEnv cloudflare-env.d.ts","patch-build-webpack":"if [ \"$(uname)\" = \"Darwin\" ]; then sed -i '' 's/next build\"/next build --webpack\"/' package.json; else sed -i 's/next build\"/next build --webpack\"/' package.json; fi","restore-build-original":"if [ \"$(uname)\" = \"Darwin\" ]; then sed -i '' 's/next build --webpack\"/next build\"/' package.json; else sed -i 's/next build --webpack\"/next build\"/' package.json; fi","update-metadata":"bash ./scripts/sync-release-notes.sh release-notes.json ../../data/metainfo/appdata.xml","check:optional-chaining":"count=$(grep -rno '\\?\\.[a-zA-Z_$]' .next/static/chunks/* out/_next/static/chunks/* | wc -l); if [ \"$count\" -gt 0 ]; then echo '❌ Optional chaining found in output!'; exit 1; else echo '✅ No optional chaining found.'; fi","check:translations":"count=$(grep -rno '__STRING_NOT_TRANSLATED__' public/locales/* | wc -l); if [ \"$count\" -gt 0 ]; then echo '❌ Untranslated strings found!'; exit 1; else echo '✅ All strings translated.'; fi","check:lookbehind-regex":"count=$(grep -rnoE '\\(\\?<[!=]' .next/static/chunks/* out/_next/static/chunks/* | wc -l); if [ \"$count\" -gt 0 ]; then echo '❌ Lookbehind regex found in output!'; exit 1; else echo '✅ No lookbehind regex found.'; fi","check:all":"pnpm check:translations && pnpm check:lookbehind-regex","build-check":"pnpm build && pnpm build-web && pnpm check:all"},"dependencies":{"@choochmeque/tauri-plugin-sharekit-api":"^0.3.0","@fabianlars/tauri-plugin-oauth":"2","@opennextjs/cloudflare":"^1.14.7","@serwist/next":"^9.4.2","jose":"^5.9.6","@tauri-apps/api":"2.9.1","@tauri-apps/plugin-cli":"^2.4.1","@tauri-apps/plugin-deep-link":"^2.4.6","@tauri-apps/plugin-dialog":"^2.6.0","@tauri-apps/plugin-fs":"^2.4.5","@tauri-apps/plugin-haptics":"^2.3.2","@tauri-apps/plugin-http":"^2.5.6","@tauri-apps/plugin-log":"^2.8.0","@tauri-apps/plugin-opener":"^2.5.3","@tauri-apps/plugin-os":"^2.3.2","@tauri-apps/plugin-process":"^2.3.1","@tauri-apps/plugin-shell":"~2.3.4","@tauri-apps/plugin-updater":"^2.9.0","@tauri-apps/plugin-websocket":"~2.4.2","@zip.js/zip.js":"^2.7.53","abortcontroller-polyfill":"^1.7.8","clsx":"^2.1.1","cors":"^2.8.5","dayjs":"^1.11.13","dompurify":"^3.3.0","foliate-js":"workspace:*","franc-min":"^6.2.0","highlight.js":"^11.11.1","i18next":"^24.2.0","i18next-browser-languagedetector":"^8.0.2","i18next-http-backend":"^3.0.1","iso-639-2":"^3.0.2","iso-639-3":"^3.0.1","isomorphic-ws":"^5.0.0","js-md5":"^0.8.3","jwt-decode":"^4.0.0","marked":"^15.0.12","next":"16.0.10","overlayscrollbars":"^2.11.4","overlayscrollbars-react":"^0.5.6","posthog-js":"^1.246.0","react":"19.2.0","react-color":"^2.19.3","react-dom":"19.2.0","react-i18next":"^15.2.0","react-icons":"^5.4.0","react-responsive":"^10.0.0","react-virtuoso":"^4.17.0","react-window":"^1.8.11","semver":"^7.7.1","styled-jsx":"^5.1.7","tinycolor2":"^1.6.0","uuid":"^11.1.0","ws":"^8.18.3","zod":"^4.0.8","zustand":"5.0.6"},"devDependencies":{"@next/bundle-analyzer":"^15.4.2","@tailwindcss/typography":"^0.5.16","@tauri-apps/cli":"2.9.6","@testing-library/dom":"^10.4.0","@testing-library/react":"^16.3.0","@types/cors":"^2.8.17","@types/cssbeautify":"^0.3.5","@types/node":"^22.15.31","@types/react":"18.3.12","@types/react-color":"^3.0.13","@types/react-dom":"18.3.1","@types/react-window":"^1.8.8","@types/semver":"^7.7.0","@types/tinycolor2":"^1.4.6","@types/uuid":"^10.0.0","@types/ws":"^8.18.1","@typescript-eslint/eslint-plugin":"^8.48.0","@typescript-eslint/parser":"^8.48.0","@vitejs/plugin-react":"^5.1.1","autoprefixer":"^10.4.20","caniuse-lite":"^1.0.30001746","cpx2":"^8.0.0","daisyui":"^4.12.24","dotenv-cli":"^7.4.4","eslint":"^9.16.0","eslint-config-next":"16.0.0","eslint-plugin-jsx-a11y":"^6.10.2","i18next-scanner":"^4.6.0","jsdom":"^26.1.0","mkdirp":"^3.0.1","node-env-run":"^4.0.2","postcss":"^8.4.49","postcss-cli":"^11.0.0","postcss-nested":"^7.0.2","raw-loader":"^4.0.2","serwist":"^9.3.0","tailwindcss":"^3.4.18","typescript":"^5.7.2","vite-tsconfig-paths":"^5.1.4","vitest":"^4.0.15","wrangler":"^4.56.0"}});}),
"[project]/apps/readest-app/src/utils/version.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAppVersion",
    ()=>getAppVersion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$package$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/apps/readest-app/package.json (json)");
;
const getAppVersion = ()=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$package$2e$json__$28$json$29$__["default"].version;
};
}),
"[project]/apps/readest-app/src/context/PHContext.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CSPostHogProvider",
    ()=>CSPostHogProvider
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$posthog$2d$js__$5b$external$5d$__$28$posthog$2d$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/posthog-js [external] (posthog-js, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$posthog$2d$js$2f$react__$5b$external$5d$__$28$posthog$2d$js$2f$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/posthog-js/react [external] (posthog-js/react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$telemetry$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/telemetry.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$version$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/version.ts [ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
const shouldDisablePostHog = ()=>{
    if ("TURBOPACK compile-time truthy", 1) return false;
    //TURBOPACK unreachable
    ;
};
const posthogUrl = process.env['NEXT_PUBLIC_POSTHOG_HOST'] || atob(("TURBOPACK compile-time value", "aHR0cHM6Ly91cy5pLnBvc3Rob2cuY29t"));
const posthogKey = process.env['NEXT_PUBLIC_POSTHOG_KEY'] || atob(("TURBOPACK compile-time value", "cGhjX2ViNXowbVRxWm8yZm5YYnZGNmE3bFh5TThpTmRSNTNsR1A3VFM3VGh4S08="));
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const CSPostHogProvider = ({ children })=>{
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        __TURBOPACK__imported__module__$5b$externals$5d2f$posthog$2d$js__$5b$external$5d$__$28$posthog$2d$js$2c$__cjs$29$__["default"].register_for_session({
            $app_version: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$version$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getAppVersion"])()
        });
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$posthog$2d$js$2f$react__$5b$external$5d$__$28$posthog$2d$js$2f$react$2c$__cjs$29$__["PostHogProvider"], {
        client: __TURBOPACK__imported__module__$5b$externals$5d2f$posthog$2d$js__$5b$external$5d$__$28$posthog$2d$js$2c$__cjs$29$__["default"],
        children: children
    }, void 0, false, {
        fileName: "[project]/apps/readest-app/src/context/PHContext.tsx",
        lineNumber: 35,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/apps/readest-app/src/libs/sync.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/apps/readest-app/src/context/SyncContext.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SyncProvider",
    ()=>SyncProvider,
    "useSyncContext",
    ()=>useSyncContext
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$libs$2f$sync$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/libs/sync.ts [ssr] (ecmascript)");
'use client';
;
;
;
const syncClient = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$libs$2f$sync$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["SyncClient"]();
const SyncContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createContext"])({
    syncClient
});
const SyncProvider = ({ children })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(SyncContext.Provider, {
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
const useSyncContext = ()=>(0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useContext"])(SyncContext);
}),
"[externals]/zustand [external] (zustand, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("zustand");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/tinycolor2 [external] (tinycolor2, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("tinycolor2");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/apps/readest-app/src/utils/color.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "getContrastHex",
    ()=>getContrastHex,
    "getContrastOklch",
    ()=>getContrastOklch,
    "hexToOklch",
    ()=>hexToOklch
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$tinycolor2__$5b$external$5d$__$28$tinycolor2$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/tinycolor2 [external] (tinycolor2, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$tinycolor2__$5b$external$5d$__$28$tinycolor2$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$tinycolor2__$5b$external$5d$__$28$tinycolor2$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
function srgbToLinear(v) {
    // Standard formula for gamma decoding of sRGB
    return v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
}
function hexToOklch(hexColor) {
    // 1) Convert from hex → sRGB (0..255) → [0..1]
    const { r, g, b } = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$tinycolor2__$5b$external$5d$__$28$tinycolor2$2c$__esm_import$29$__["default"])(hexColor).toRgb();
    const R = srgbToLinear(r / 255);
    const G = srgbToLinear(g / 255);
    const B = srgbToLinear(b / 255);
    // 2) Convert linear sRGB → L'M'S'  (the Oklab-specific "LMS" space)
    const l_ = Math.cbrt(0.4122214708 * R + 0.5363325363 * G + 0.0514459929 * B);
    const m_ = Math.cbrt(0.2119034982 * R + 0.6806995451 * G + 0.1073969566 * B);
    const s_ = Math.cbrt(0.0883024619 * R + 0.2817188376 * G + 0.6299787005 * B);
    // 3) Convert L'M'S' → Oklab
    const L = 0.2104542553 * l_ + 0.793617785 * m_ - 0.0040720468 * s_;
    const a = 1.9779984951 * l_ - 2.428592205 * m_ + 0.4505937099 * s_;
    const b_ = 0.0259040371 * l_ + 0.7827717662 * m_ - 0.808675766 * s_;
    // 4) Convert Oklab → Oklch
    const C = Math.sqrt(a * a + b_ * b_);
    let h = Math.atan2(b_, a) * (180 / Math.PI);
    if (h < 0) h += 360;
    // 5) Format as l% c h, with a bit of rounding
    const lPercent = (L * 100).toFixed(4);
    const cValue = Number(C.toFixed(6));
    const hValue = Number(h.toFixed(3));
    if (cValue === 0) {
        return `${lPercent}% 0 0deg`;
    }
    return `${lPercent}% ${cValue} ${hValue}deg`;
}
const getContrastOklch = (hexColor)=>{
    return (0, __TURBOPACK__imported__module__$5b$externals$5d2f$tinycolor2__$5b$external$5d$__$28$tinycolor2$2c$__esm_import$29$__["default"])(hexColor).isDark() ? '100% 0 0deg' : '0% 0 0deg';
};
const getContrastHex = (hexColor)=>{
    return (0, __TURBOPACK__imported__module__$5b$externals$5d2f$tinycolor2__$5b$external$5d$__$28$tinycolor2$2c$__esm_import$29$__["default"])(hexColor).isDark() ? '#FFFFFF' : '#000000';
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/readest-app/src/styles/themes.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

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
var __TURBOPACK__imported__module__$5b$externals$5d2f$tinycolor2__$5b$external$5d$__$28$tinycolor2$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/tinycolor2 [external] (tinycolor2, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/misc.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$color$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/color.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$tinycolor2__$5b$external$5d$__$28$tinycolor2$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$color$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$tinycolor2__$5b$external$5d$__$28$tinycolor2$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$color$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
const generateLightPalette = ({ bg, fg, primary })=>{
    return {
        'base-100': bg,
        'base-200': (0, __TURBOPACK__imported__module__$5b$externals$5d2f$tinycolor2__$5b$external$5d$__$28$tinycolor2$2c$__esm_import$29$__["default"])(bg).darken(5).toHexString(),
        'base-300': (0, __TURBOPACK__imported__module__$5b$externals$5d2f$tinycolor2__$5b$external$5d$__$28$tinycolor2$2c$__esm_import$29$__["default"])(bg).darken(12).toHexString(),
        'base-content': fg,
        neutral: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$tinycolor2__$5b$external$5d$__$28$tinycolor2$2c$__esm_import$29$__["default"])(bg).darken(15).desaturate(20).toHexString(),
        'neutral-content': (0, __TURBOPACK__imported__module__$5b$externals$5d2f$tinycolor2__$5b$external$5d$__$28$tinycolor2$2c$__esm_import$29$__["default"])(fg).lighten(20).desaturate(20).toHexString(),
        primary: primary,
        secondary: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$tinycolor2__$5b$external$5d$__$28$tinycolor2$2c$__esm_import$29$__["default"])(primary).lighten(20).toHexString(),
        accent: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$tinycolor2__$5b$external$5d$__$28$tinycolor2$2c$__esm_import$29$__["default"])(primary).analogous()[1].toHexString()
    };
};
const generateDarkPalette = ({ bg, fg, primary })=>{
    return {
        'base-100': bg,
        'base-200': (0, __TURBOPACK__imported__module__$5b$externals$5d2f$tinycolor2__$5b$external$5d$__$28$tinycolor2$2c$__esm_import$29$__["default"])(bg).lighten(5).toHexString(),
        'base-300': (0, __TURBOPACK__imported__module__$5b$externals$5d2f$tinycolor2__$5b$external$5d$__$28$tinycolor2$2c$__esm_import$29$__["default"])(bg).lighten(12).toHexString(),
        'base-content': fg,
        neutral: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$tinycolor2__$5b$external$5d$__$28$tinycolor2$2c$__esm_import$29$__["default"])(bg).lighten(15).desaturate(20).toHexString(),
        'neutral-content': (0, __TURBOPACK__imported__module__$5b$externals$5d2f$tinycolor2__$5b$external$5d$__$28$tinycolor2$2c$__esm_import$29$__["default"])(fg).darken(20).desaturate(20).toHexString(),
        primary: primary,
        secondary: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$tinycolor2__$5b$external$5d$__$28$tinycolor2$2c$__esm_import$29$__["default"])(primary).darken(20).toHexString(),
        accent: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$tinycolor2__$5b$external$5d$__$28$tinycolor2$2c$__esm_import$29$__["default"])(primary).triad()[1].toHexString()
    };
};
const themes = [
    {
        name: 'default',
        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["stubTranslation"])('Default'),
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
        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["stubTranslation"])('Gray'),
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
        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["stubTranslation"])('Sepia'),
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
        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["stubTranslation"])('Grass'),
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
        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["stubTranslation"])('Cherry'),
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
        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["stubTranslation"])('Sky'),
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
        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["stubTranslation"])('Solarized'),
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
        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["stubTranslation"])('Gruvbox'),
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
        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["stubTranslation"])('Nord'),
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
        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["stubTranslation"])('Contrast'),
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
        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["stubTranslation"])('Sunset'),
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
    --b1: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$color$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["hexToOklch"])(palette['base-100'])};
    --b2: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$color$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["hexToOklch"])(palette['base-200'])};
    --b3: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$color$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["hexToOklch"])(palette['base-300'])};
    --bc: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$color$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["hexToOklch"])(palette['base-content'])};
    
    --p: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$color$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["hexToOklch"])(palette.primary)};
    --pc: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$color$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getContrastOklch"])(palette.primary)};
    
    --s: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$color$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["hexToOklch"])(palette.secondary)};
    --sc: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$color$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getContrastOklch"])(palette.secondary)};
    
    --a: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$color$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["hexToOklch"])(palette.accent)};
    --ac: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$color$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getContrastOklch"])(palette.accent)};
    
    --n: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$color$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["hexToOklch"])(palette.neutral)};
    --nc: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$color$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["hexToOklch"])(palette['neutral-content'])};
    
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
    --fallback-pc: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$color$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getContrastHex"])(palette.primary)};

    --fallback-s: ${palette.secondary};
    --fallback-sc: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$color$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getContrastHex"])(palette.secondary)};

    --fallback-a: ${palette.accent};
    --fallback-ac: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$color$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getContrastHex"])(palette.accent)};

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
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/readest-app/src/utils/style.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "applyFixedlayoutStyles",
    ()=>applyFixedlayoutStyles,
    "applyImageStyle",
    ()=>applyImageStyle,
    "applyScrollModeClass",
    ()=>applyScrollModeClass,
    "applyTableStyle",
    ()=>applyTableStyle,
    "applyThemeModeClass",
    ()=>applyThemeModeClass,
    "applyTranslationStyle",
    ()=>applyTranslationStyle,
    "getFootnoteStyles",
    ()=>getFootnoteStyles,
    "getStyles",
    ()=>getStyles,
    "getThemeCode",
    ()=>getThemeCode,
    "keepTextAlignment",
    ()=>keepTextAlignment,
    "transformStylesheet",
    ()=>transformStylesheet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/constants.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$styles$2f$themes$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/styles/themes.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/misc.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$styles$2f$themes$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$styles$2f$themes$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
const getFontStyles = (serif, sansSerif, monospace, defaultFont, defaultCJKFont, fontSize, minFontSize, fontWeight, overrideFont)=>{
    const lastSerifFonts = [
        'Georgia',
        'Times New Roman'
    ];
    const serifFonts = [
        serif,
        ...defaultCJKFont !== serif ? [
            defaultCJKFont
        ] : [],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["SERIF_FONTS"].filter((font)=>font !== serif && font !== defaultCJKFont && !lastSerifFonts.includes(font)),
        ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["CJK_SERIF_FONTS"].filter((font)=>font !== serif && font !== defaultCJKFont),
        ...lastSerifFonts.filter((font)=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["SERIF_FONTS"].includes(font) && !lastSerifFonts.includes(defaultCJKFont)),
        ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["FALLBACK_FONTS"]
    ];
    const sansSerifFonts = [
        sansSerif,
        ...defaultCJKFont !== sansSerif ? [
            defaultCJKFont
        ] : [],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["SANS_SERIF_FONTS"].filter((font)=>font !== sansSerif && font !== defaultCJKFont),
        ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["CJK_SANS_SERIF_FONTS"].filter((font)=>font !== sansSerif && font !== defaultCJKFont),
        ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["FALLBACK_FONTS"]
    ];
    const monospaceFonts = [
        monospace,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$constants$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["MONOSPACE_FONTS"].filter((font)=>font !== monospace)
    ];
    const defaultFontFamily = defaultFont.toLowerCase() === 'serif' ? '--serif' : '--sans-serif';
    const fontStyles = `
    html {
      --serif: ${serifFonts.map((font)=>`"${font}"`).join(', ')}, serif;
      --sans-serif: ${sansSerifFonts.map((font)=>`"${font}"`).join(', ')}, sans-serif;
      --monospace: ${monospaceFonts.map((font)=>`"${font}"`).join(', ')}, monospace;
      --font-size: ${fontSize}px;
      --min-font-size: ${minFontSize}px;
      --font-weight: ${fontWeight};
    }
    html, body {
      font-size: ${fontSize}px !important;
      font-weight: ${fontWeight};
      -webkit-text-size-adjust: none;
      text-size-adjust: none;
    }
    /* lower specificity than ebook built-in font styles */
    html {
      font-family: var(${defaultFontFamily}) ${overrideFont ? '!important' : ''};
    }
    /* higher specificity than ebook built-in font styles */
    html body {
      ${overrideFont ? `font-family: var(${defaultFontFamily}) !important;` : ''}
    }
    font[size="1"] {
      font-size: ${minFontSize}px;
    }
    font[size="2"] {
      font-size: ${minFontSize * 1.5}px;
    }
    font[size="3"] {
      font-size: ${fontSize}px;
    }
    font[size="4"] {
      font-size: ${fontSize * 1.2}px;
    }
    font[size="5"] {
      font-size: ${fontSize * 1.5}px;
    }
    font[size="6"] {
      font-size: ${fontSize * 2}px;
    }
    font[size="7"] {
      font-size: ${fontSize * 3}px;
    }
    /* hardcoded inline font size */
    [style*="font-size: 16px"], [style*="font-size:16px"] {
      font-size: 1rem !important;
    }
    pre, code, kbd {
      font-family: var(--monospace);
    }
    body *:not(pre, code, kbd, .code):not(pre *, code *, kbd *, .code *) {
      ${overrideFont ? 'font-family: revert !important;' : ''}
    }
  `;
    return fontStyles;
};
const getColorStyles = (overrideColor, invertImgColorInDark, themeCode, backgroundTextureId, isEink)=>{
    const { bg, fg, primary, isDarkMode } = themeCode;
    const colorStyles = `
    html {
      --bg-texture-id: ${backgroundTextureId};
      --theme-bg-color: ${bg};
      --theme-fg-color: ${fg};
      --theme-primary-color: ${primary};
      --override-color: ${overrideColor};
      color-scheme: ${isDarkMode ? 'dark' : 'light'};
    }
    html, body {
      color: ${fg};
    }
    html[has-background], body[has-background] {
      --background-set: var(--theme-bg-color);
    }
    html {
      background-color: var(--theme-bg-color, transparent);
      background: var(--background-set, none);
    }
    section, aside, blockquote, article, nav, header, footer, main, figure,
    div, p, font, h1, h2, h3, h4, h5, h6, li, span {
      ${overrideColor ? `background-color: ${bg} !important;` : ''}
      ${overrideColor ? `color: ${fg} !important;` : ''}
      ${overrideColor ? `border-color: ${fg} !important;` : ''}
    }
    pre, span { /* inline code blocks */
      ${overrideColor ? `background-color: ${bg} !important;` : ''}
    }
    a:any-link {
      ${overrideColor ? `color: ${primary} !important;` : isDarkMode ? `color: lightblue;` : ''}
      text-decoration: ${isEink ? 'underline' : 'none'};
    }
    body.pbg {
      ${isDarkMode ? `background-color: ${bg} !important;` : ''}
    }
    img {
      ${isDarkMode && invertImgColorInDark ? 'filter: invert(100%);' : ''}
      ${!isDarkMode && overrideColor ? 'mix-blend-mode: multiply;' : ''}
    }
    /* horizontal rule #1649 */
    *:has(> hr.background-img):not(body) {
      background-color: ${bg};
    }
    hr {
      mix-blend-mode: multiply;
    }
    /* inline images */
    p img, span img, sup img {
      mix-blend-mode: ${isDarkMode ? 'screen' : 'multiply'};
    }
    table {
      max-width: calc(var(--available-width));
      overflow: auto;
      table-layout: fixed;
    }
    /* code */
    body.theme-dark code {
      ${isDarkMode ? `color: ${fg}cc;` : ''}
      ${isDarkMode ? `background: color-mix(in srgb, ${bg} 90%, #000);` : ''}
      ${isDarkMode ? `background-color: color-mix(in srgb, ${bg} 90%, #000);` : ''}
    }
    blockquote {
      ${isDarkMode ? `background: color-mix(in srgb, ${bg} 80%, #000);` : ''}
    }
    blockquote, table * {
      ${isDarkMode && overrideColor ? `background: color-mix(in srgb, ${bg} 80%, #000);` : ''}
      ${isDarkMode && overrideColor ? `background-color: color-mix(in srgb, ${bg} 80%, #000);` : ''}
    }
    /* override inline hardcoded text color */
    font[color="#000000"], font[color="#000"], font[color="black"],
    font[color="rgb(0,0,0)"], font[color="rgb(0, 0, 0)"],
    *[style*="color: rgb(0,0,0)"], *[style*="color: rgb(0, 0, 0)"],
    *[style*="color: #000"], *[style*="color: #000000"], *[style*="color: black"],
    *[style*="color:rgb(0,0,0)"], *[style*="color:rgb(0, 0, 0)"],
    *[style*="color:#000"], *[style*="color:#000000"], *[style*="color:black"] {
      color: ${fg} !important;
    }
    /* for the Gutenberg eBooks */
    #pg-header * {
      color: inherit !important;
    }
    .x-ebookmaker, .x-ebookmaker-cover, .x-ebookmaker-coverpage {
      background-color: unset !important;
    }
    /* for the Feedbooks eBooks */
    .chapterHeader, .chapterHeader * {
      border-color: unset;
      background-color: ${bg} !important;
    }
  `;
    return colorStyles;
};
const getLayoutStyles = (overrideLayout, marginTop, marginRight, marginBottom, marginLeft, paragraphMargin, lineSpacing, wordSpacing, letterSpacing, textIndent, justify, hyphenate, zoomLevel, writingMode, vertical)=>{
    const layoutStyle = `
  @namespace epub "http://www.idpf.org/2007/ops";
  html {
    --default-text-align: ${justify ? 'justify' : 'start'};
    --margin-top: ${marginTop}px;
    --margin-right: ${marginRight}px;
    --margin-bottom: ${marginBottom}px;
    --margin-left: ${marginLeft}px;
    hanging-punctuation: allow-end last;
    orphans: 2;
    widows: 2;
  }
  [align="left"] { text-align: left; }
  [align="right"] { text-align: right; }
  [align="center"] { text-align: center; }
  [align="justify"] { text-align: justify; }
  :is(hgroup, header) p {
      text-align: unset;
      hyphens: unset;
  }
  html, body {
    ${writingMode === 'auto' ? '' : `writing-mode: ${writingMode} !important;`}
    text-align: var(--default-text-align);
    max-height: unset;
    -webkit-touch-callout: none;
    -webkit-user-select: text;
  }
  body {
    overflow: unset;
    zoom: ${zoomLevel};
  }
  svg, img {
    height: auto;
    width: auto;
    background-color: transparent !important;
  }
  figure > div:has(img) {
    height: auto !important;
  }
  /* enlarge the clickable area of links */
  a {
    position: relative !important;
  }
  a::before {
    content: '';
    position: absolute;
    inset: -10px;
  }
  p, blockquote, dd, div:not(:has(*:not(b, a, em, i, strong, u, span))) {
    line-height: ${lineSpacing} ${overrideLayout ? '!important' : ''};
    word-spacing: ${wordSpacing}px ${overrideLayout ? '!important' : ''};
    letter-spacing: ${letterSpacing}px ${overrideLayout ? '!important' : ''};
    text-indent: ${textIndent}em ${overrideLayout ? '!important' : ''};
    -webkit-hyphens: ${hyphenate ? 'auto' : 'manual'};
    hyphens: ${hyphenate ? 'auto' : 'manual'};
    -webkit-hyphenate-limit-before: 3;
    -webkit-hyphenate-limit-after: 2;
    -webkit-hyphenate-limit-lines: 2;
    hanging-punctuation: allow-end last;
    widows: 2;
  }
  p.aligned-center, blockquote.aligned-center,
  dd.aligned-center, div.aligned-center {
    text-align: center ${overrideLayout ? '!important' : ''};
  }
  p.aligned-left, blockquote.aligned-left,
  dd.aligned-left, div.aligned-left {
    ${justify && overrideLayout ? 'text-align: justify !important;' : ''}
  }
  p.aligned-right, blockquote.aligned-right,
  dd.aligned-right, div.aligned-right {
    text-align: right ${overrideLayout ? '!important' : ''};
  }
  p.aligned-justify, blockquote.aligned-justify,
  dd.aligned-justify, div.aligned-justify {
    ${!justify && overrideLayout ? 'text-align: initial !important;' : ''};
  }
  p:has(> img:only-child), p:has(> span:only-child > img:only-child),
  p:has(> img:not(.has-text-siblings)),
  p:has(> a:first-child + img:last-child) {
    text-indent: initial !important;
  }
  blockquote[align="center"], div[align="center"],
  p[align="center"], dd[align="center"],
  p.aligned-center, blockquote.aligned-center,
  dd.aligned-center, div.aligned-center,
  li p, ol p, ul p, td p {
    text-indent: initial !important;
  }
  p {
    ${vertical ? `margin-left: ${paragraphMargin}em ${overrideLayout ? '!important' : ''};` : ''}
    ${vertical ? `margin-right: ${paragraphMargin}em ${overrideLayout ? '!important' : ''};` : ''}
    ${vertical ? `margin-top: unset ${overrideLayout ? '!important' : ''};` : ''}
    ${vertical ? `margin-bottom: unset ${overrideLayout ? '!important' : ''};` : ''}
    ${!vertical ? `margin-top: ${paragraphMargin}em ${overrideLayout ? '!important' : ''};` : ''}
    ${!vertical ? `margin-bottom: ${paragraphMargin}em ${overrideLayout ? '!important' : ''};` : ''}
    ${!vertical ? `margin-left: unset ${overrideLayout ? '!important' : ''};` : ''}
    ${!vertical ? `margin-right: unset ${overrideLayout ? '!important' : ''};` : ''}
  }
  div {
    ${vertical && overrideLayout ? `margin-left: ${paragraphMargin}em !important;` : ''}
    ${vertical && overrideLayout ? `margin-right: ${paragraphMargin}em !important;` : ''}
    ${!vertical && overrideLayout ? `margin-top: ${paragraphMargin}em !important;` : ''}
    ${!vertical && overrideLayout ? `margin-bottom: ${paragraphMargin}em !important;` : ''}
  }

  :lang(zh), :lang(ja), :lang(ko) {
    widows: 1;
    orphans: 1;
  }

  pre {
    white-space: pre-wrap !important;
  }

  .epubtype-footnote,
  aside[epub|type~="endnote"],
  aside[epub|type~="footnote"],
  aside[epub|type~="note"],
  aside[epub|type~="rearnote"] {
    display: none;
  }

  /* Now begins really dirty hacks to fix some badly designed epubs */
  body {
    line-height: unset;
  }

  img.pi {
    ${vertical ? 'transform: rotate(90deg);' : ''}
    ${vertical ? 'transform-origin: center;' : ''}
    ${vertical ? 'height: 2em;' : ''}
    ${vertical ? `width: ${lineSpacing}em;` : ''}
    ${vertical ? `vertical-align: unset;` : ''}
  }

  .duokan-footnote-content,
  .duokan-footnote-item {
    display: none;
  }

  .calibre {
    color: unset;
  }

  div:has(> img, > svg) {
    max-width: 100% !important;
  }

  body.paginated-mode td:has(img), body.paginated-mode td :has(img) {
    max-height: calc(var(--available-height) * 0.8 * 1px);
  }

  /* some epubs set insane inline-block for p */
  p {
    display: block;
  }

  /* inline images without dimension */
  .ie6 img {
    width: unset;
    height: unset;
  }
  sup img {
    height: 1em;
  }
  img.has-text-siblings {
    ${vertical ? 'width: 1em;' : 'height: 1em;'}
    vertical-align: baseline;
  }
  :is(div) > img.has-text-siblings[style*="object-fit"] {
    display: block;
    height: auto;
    vertical-align: unset;
  }
  .duokan-footnote img:not([class]) {
    width: 0.8em;
    height: 0.8em;
  }
  div:has(img.singlepage) {
    position: relative;
    width: auto;
    height: auto;
  }

  /* page break */
  body.paginated-mode div[style*="page-break-after: always"],
  body.paginated-mode div[style*="page-break-after:always"],
  body.paginated-mode p[style*="page-break-after: always"],
  body.paginated-mode p[style*="page-break-after:always"] {
    margin-bottom: calc(var(--available-height) * 1px);
  }

  /* workaround for some badly designed epubs */
  div.left *, p.left * { text-align: left; }
  div.right *, p.right * { text-align: right; }
  div.center *, p.center * { text-align: center; }
  div.justify *, p.justify * { text-align: justify; }

  .br {
    display: flow-root;
  }

  .h5_mainbody {
    overflow: unset !important;
  }

  .nonindent, .noindent {
    text-indent: unset !important;
  }
`;
    return layoutStyle;
};
const getFootnoteStyles = ()=>`
  .duokan-footnote-content,
  .duokan-footnote-item {
    display: block !important;
  }

  body {
    padding: 1em !important;
  }

  a:any-link {
    cursor: default;
    pointer-events: none;
    text-decoration: none;
    padding: unset;
    margin: unset;
  }

  ol {
    margin: 0;
    padding: 0;
  }

  p, li, blockquote, dd {
    margin: unset !important;
    text-indent: unset !important;
  }

  div {
    margin: unset !important;
    padding: unset !important;
  }

  dt {
    font-weight: bold;
    line-height: 1.6;
  }

  .epubtype-footnote,
  aside[epub|type~="endnote"],
  aside[epub|type~="footnote"],
  aside[epub|type~="note"],
  aside[epub|type~="rearnote"] {
    display: block;
  }
`;
const getTranslationStyles = (showSource)=>`
  .translation-source {
  }
  .translation-target {
  }
  .translation-target.hidden {
    display: none !important;
  }
  .translation-target-block {
    display: block !important;
    ${showSource ? 'margin: 0.5em 0 !important;' : ''}
  }
  .translation-target-toc {
    display: block !important;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
const getThemeCode = ()=>{
    let themeMode = 'auto';
    let themeColor = 'default';
    let systemIsDarkMode = false;
    let customThemes = [];
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const isDarkMode = themeMode === 'dark' || themeMode === 'auto' && systemIsDarkMode;
    let currentTheme = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$styles$2f$themes$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["themes"].find((theme)=>theme.name === themeColor);
    if (!currentTheme) {
        const customTheme = customThemes.find((theme)=>theme.name === themeColor);
        if (customTheme) {
            currentTheme = {
                name: customTheme.name,
                label: customTheme.label,
                colors: {
                    light: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$styles$2f$themes$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["generateLightPalette"])(customTheme.colors.light),
                    dark: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$styles$2f$themes$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["generateDarkPalette"])(customTheme.colors.dark)
                }
            };
        }
    }
    if (!currentTheme) currentTheme = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$styles$2f$themes$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["themes"][0];
    const defaultPalette = isDarkMode ? currentTheme.colors.dark : currentTheme.colors.light;
    return {
        bg: defaultPalette['base-100'],
        fg: defaultPalette['base-content'],
        primary: defaultPalette.primary,
        palette: defaultPalette,
        isDarkMode
    };
};
const getStyles = (viewSettings, themeCode)=>{
    if (!themeCode) {
        themeCode = getThemeCode();
    }
    const layoutStyles = getLayoutStyles(viewSettings.overrideLayout, viewSettings.marginTopPx, viewSettings.marginRightPx, viewSettings.marginBottomPx, viewSettings.marginLeftPx, viewSettings.paragraphMargin, viewSettings.lineHeight, viewSettings.wordSpacing, viewSettings.letterSpacing, viewSettings.textIndent, viewSettings.fullJustification, viewSettings.hyphenation, 1.0, viewSettings.writingMode, viewSettings.vertical);
    // scale the font size on-the-fly so that we can sync the same font size on different devices
    const isMobile = [
        'ios',
        'android'
    ].includes((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getOSPlatform"])());
    const fontScale = isMobile ? 1.25 : 1;
    // Only for backward compatibility, new viewSettings.zoomLevel will always be 100 for EPUBs
    const zoomScale = (viewSettings.zoomLevel || 100) / 100.0;
    const fontStyles = getFontStyles(viewSettings.serifFont, viewSettings.sansSerifFont, viewSettings.monospaceFont, viewSettings.defaultFont, viewSettings.defaultCJKFont, viewSettings.defaultFontSize * fontScale * zoomScale, viewSettings.minimumFontSize, viewSettings.fontWeight, viewSettings.overrideFont);
    const colorStyles = getColorStyles(viewSettings.overrideColor, viewSettings.invertImgColorInDark, themeCode, viewSettings.backgroundTextureId, viewSettings.isEink);
    const translationStyles = getTranslationStyles(viewSettings.showTranslateSource);
    const userStylesheet = viewSettings.userStylesheet;
    return `${layoutStyles}\n${fontStyles}\n${colorStyles}\n${translationStyles}\n${userStylesheet}`;
};
const applyTranslationStyle = (viewSettings)=>{
    const styleId = 'translation-style';
    const existingStyle = document.getElementById(styleId);
    if (existingStyle) {
        existingStyle.remove();
    }
    const styleElement = document.createElement('style');
    styleElement.id = styleId;
    styleElement.textContent = getTranslationStyles(viewSettings.showTranslateSource);
    document.head.appendChild(styleElement);
};
const transformStylesheet = (css, vw, vh, vertical)=>{
    const isMobile = [
        'ios',
        'android'
    ].includes((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getOSPlatform"])());
    const fontScale = isMobile ? 1.25 : 1;
    const isInlineStyle = !css.includes('{');
    const ruleRegex = /([^{]+)({[^}]+})/g;
    css = css.replace(ruleRegex, (match, selector, block)=>{
        const hasTextAlignCenter = /text-align\s*:\s*center\s*[;$]/.test(block);
        const hasTextIndentZero = /text-indent\s*:\s*0(?:\.0+)?(?:px|em|rem|%)?\s*[;$]/.test(block);
        if (hasTextAlignCenter && hasTextIndentZero) {
            block = block.replace(/(text-align\s*:\s*center)(\s*;|\s*$)/g, '$1 !important$2');
            block = block.replace(/(text-indent\s*:\s*0(?:\.0+)?(?:px|em|rem|%)?)(\s*;|\s*$)/g, '$1 !important$2');
            return selector + block;
        }
        return match;
    });
    // clip nowrapped elements
    css = css.replace(ruleRegex, (match, selector, block)=>{
        const hasWhiteSpaceNowrap = /white-space\s*:\s*nowrap\s*[;$]/.test(block);
        if (hasWhiteSpaceNowrap) {
            if (!/overflow\s*:/.test(block)) {
                block = block.replace(/}$/, ' overflow: clip !important; }');
            }
            return selector + block;
        }
        return match;
    });
    if (isInlineStyle) {
        const hasPageBreakAfterAlways = /page-break-after\s*:\s*always\s*[;]?/.test(css);
        if (hasPageBreakAfterAlways && !/margin-bottom\s*:/.test(css)) {
            css = css.replace(/;?\s*$/, '') + '; margin-bottom: calc(var(--available-height) * 1px)';
        }
    } else {
        css = css.replace(ruleRegex, (match, selector, block)=>{
            const hasPageBreakAfterAlways = /page-break-after\s*:\s*always\s*[;$]/.test(block);
            if (hasPageBreakAfterAlways) {
                if (!/margin-bottom\s*:/.test(block)) {
                    block = block.replace(/}$/, ' margin-bottom: calc(var(--available-height) * 1px); }');
                }
                return selector + block;
            }
            return match;
        });
    }
    // Process duokan-bleed
    css = css.replace(ruleRegex, (_, selector, block)=>{
        if (vertical) return selector + block;
        const directions = [];
        let hasBleed = false;
        for (const dir of [
            'top',
            'bottom',
            'left',
            'right'
        ]){
            const bleedRegex = new RegExp(`duokan-bleed\\s*:\\s*[^;]*${dir}[^;]*;`);
            const marginRegex = new RegExp(`margin-${dir}\\s*:`);
            if (bleedRegex.test(block) && !marginRegex.test(block)) {
                hasBleed = true;
                directions.push(dir);
                block = block.replace(/}$/, ` margin-${dir}: calc(-1 * var(--page-margin-${dir})) !important; }`);
            }
        }
        if (hasBleed) {
            if (!/position\s*:/.test(block)) {
                block = block.replace(/}$/, ' position: relative !important; }');
            }
            if (!/overflow\s*:/.test(block)) {
                block = block.replace(/}$/, ' overflow: hidden !important; }');
            }
            if (!/display\s*:/.test(block)) {
                block = block.replace(/}$/, ' display: flow-root !important; }');
            }
            if (!/width\s*:/.test(block) && directions.includes('left') && directions.includes('right')) {
                block = block.replace(/}$/, ' width: calc(var(--_max-width) + var(--page-margin-left) + var(--page-margin-right)) !important; }').replace(/}$/, ' max-width: 100vw !important; }');
            }
            if (!/height\s*:/.test(block) && directions.includes('top') && directions.includes('bottom')) {
                block = block.replace(/}$/, ' height: calc(100% + var(--page-margin-top) + var(--page-margin-bottom)) !important; }').replace(/}$/, ' max-height: 100vh !important; }');
            }
        }
        return selector + block;
    });
    // replace absolute font sizes with rem units
    // replace vw and vh as they cause problems with layout
    // replace hardcoded colors
    css = css.replace(/font-size\s*:\s*xx-small/gi, 'font-size: 0.6rem').replace(/font-size\s*:\s*x-small/gi, 'font-size: 0.75rem').replace(/font-size\s*:\s*small/gi, 'font-size: 0.875rem').replace(/font-size\s*:\s*medium/gi, 'font-size: 1rem').replace(/font-size\s*:\s*large/gi, 'font-size: 1.2rem').replace(/font-size\s*:\s*x-large/gi, 'font-size: 1.5rem').replace(/font-size\s*:\s*xx-large/gi, 'font-size: 2rem').replace(/font-size\s*:\s*xxx-large/gi, 'font-size: 3rem').replace(/font-size\s*:\s*(\d+(?:\.\d+)?)px/gi, (_, px)=>{
        const rem = parseFloat(px) / fontScale / 16;
        return `font-size: ${rem}rem`;
    }).replace(/font-size\s*:\s*(\d+(?:\.\d+)?)pt/gi, (_, pt)=>{
        const rem = parseFloat(pt) / fontScale / 12;
        return `font-size: ${rem}rem`;
    }).replace(/font-size\s*:\s*(\d*\.?\d+)(px|rem|em|%)?/gi, (_, size, unit = 'px')=>{
        return `font-size: max(${size}${unit}, var(--min-font-size, 8px))`;
    }).replace(/(\d*\.?\d+)vw/gi, (_, d)=>parseFloat(d) * vw / 100 + 'px').replace(/(\d*\.?\d+)vh/gi, (_, d)=>parseFloat(d) * vh / 100 + 'px').replace(/([\s;])font-family\s*:\s*monospace/gi, '$1font-family: var(--monospace)').replace(/([\s;])font-weight\s*:\s*normal/gi, '$1font-weight: var(--font-weight)').replace(/([\s;])color\s*:\s*black/gi, '$1color: var(--theme-fg-color)').replace(/([\s;])color\s*:\s*#000000/gi, '$1color: var(--theme-fg-color)').replace(/([\s;])color\s*:\s*#000/gi, '$1color: var(--theme-fg-color)').replace(/([\s;])color\s*:\s*rgb\(0,\s*0,\s*0\)/gi, '$1color: var(--theme-fg-color)');
    return css;
};
const applyThemeModeClass = (document1, isDarkMode)=>{
    document1.body.classList.remove('theme-light', 'theme-dark');
    document1.body.classList.add(isDarkMode ? 'theme-dark' : 'theme-light');
};
const applyScrollModeClass = (document1, isScrollMode)=>{
    document1.body.classList.remove('scroll-mode', 'paginated-mode');
    document1.body.classList.add(isScrollMode ? 'scroll-mode' : 'paginated-mode');
};
const applyImageStyle = (document1)=>{
    document1.querySelectorAll('img').forEach((img)=>{
        const widthAttr = img.getAttribute('width');
        if (widthAttr && (widthAttr.endsWith('%') || widthAttr.endsWith('vw'))) {
            const percentage = parseFloat(widthAttr);
            if (!isNaN(percentage)) {
                img.style.width = `${percentage / 100 * window.innerWidth}px`;
                img.removeAttribute('width');
            }
        }
        const heightAttr = img.getAttribute('height');
        if (heightAttr && (heightAttr.endsWith('%') || heightAttr.endsWith('vh'))) {
            const percentage = parseFloat(heightAttr);
            if (!isNaN(percentage)) {
                img.style.height = `${percentage / 100 * window.innerHeight}px`;
                img.removeAttribute('height');
            }
        }
        const parent = img.parentNode;
        if (!parent || parent.nodeType !== Node.ELEMENT_NODE) return;
        const hasTextSiblings = Array.from(parent.childNodes).some((node)=>node.nodeType === Node.TEXT_NODE && node.textContent?.trim());
        const isInline = Array.from(parent.childNodes).every((node)=>node.nodeType !== Node.ELEMENT_NODE || node.tagName !== 'BR');
        if (hasTextSiblings && isInline) {
            img.classList.add('has-text-siblings');
        }
    });
    document1.querySelectorAll('hr').forEach((hr)=>{
        const computedStyle = window.getComputedStyle(hr);
        if (computedStyle.backgroundImage && computedStyle.backgroundImage !== 'none') {
            hr.classList.add('background-img');
        }
    });
};
const applyTableStyle = (document1)=>{
    document1.querySelectorAll('table').forEach((table)=>{
        const parent = table.parentNode;
        if (!parent || parent.nodeType !== Node.ELEMENT_NODE) return;
        // Calculate total width from td elements with width attribute or inline style
        let totalTableWidth = 0;
        const rows = table.querySelectorAll('tr');
        // Check all rows and use the widest one
        for (const row of rows){
            const cells = row.querySelectorAll('td, th');
            let rowWidth = 0;
            cells.forEach((cell)=>{
                const cellElement = cell;
                const widthAttr = cellElement.getAttribute('width');
                const styleWidth = cellElement.style.width;
                const widthStr = widthAttr || styleWidth;
                if (widthStr) {
                    const widthValue = parseFloat(widthStr);
                    const widthUnit = widthStr.replace(widthValue.toString(), '').trim();
                    if (widthUnit === 'px' || !widthUnit) {
                        rowWidth += widthValue;
                    } else if (widthUnit === '%') {
                        rowWidth += window.innerWidth * widthValue / 100;
                    }
                }
            });
            if (rowWidth > totalTableWidth) {
                totalTableWidth = rowWidth;
            }
        }
        if (totalTableWidth > 0) {
            const scale = `calc(min(1, var(--available-width) / ${totalTableWidth}))`;
            table.style.transformOrigin = 'left top';
            table.style.transform = `scale(${scale})`;
        }
    });
};
const keepTextAlignment = (document1)=>{
    document1.querySelectorAll('div, p, blockquote, dd').forEach((el)=>{
        const computedStyle = window.getComputedStyle(el);
        if (computedStyle.textAlign === 'center') {
            el.classList.add('aligned-center');
        } else if (computedStyle.textAlign === 'left') {
            el.classList.add('aligned-left');
        } else if (computedStyle.textAlign === 'right') {
            el.classList.add('aligned-right');
        } else if (computedStyle.textAlign === 'justify') {
            el.classList.add('aligned-justify');
        }
    });
};
const applyFixedlayoutStyles = (document1, viewSettings, themeCode)=>{
    if (!themeCode) {
        themeCode = getThemeCode();
    }
    const { bg, fg, primary, isDarkMode } = themeCode;
    const overrideColor = viewSettings.overrideColor;
    const invertImgColorInDark = viewSettings.invertImgColorInDark;
    const darkMixBlendMode = bg === '#000000' ? 'luminosity' : 'overlay';
    const existingStyleId = 'fixed-layout-styles';
    let style = document1.getElementById(existingStyleId);
    if (style) {
        style.remove();
    }
    style = document1.createElement('style');
    style.id = existingStyleId;
    style.textContent = `
    html {
      --theme-bg-color: ${bg};
      --theme-fg-color: ${fg};
      --theme-primary-color: ${primary};
      color-scheme: ${isDarkMode ? 'dark' : 'light'};
    }
    body {
      position: relative;
      background-color: var(--theme-bg-color);
    }
    #canvas {
      display: inline-block;
      width: fit-content;
      height: fit-content;
      background-color: var(--theme-bg-color);
    }
    img, canvas {
      ${isDarkMode && invertImgColorInDark ? 'filter: invert(100%);' : ''}
      ${overrideColor ? `mix-blend-mode: ${isDarkMode ? darkMixBlendMode : 'multiply'};` : ''}
    }
    img.singlePage {
      position: relative;
    }
  `;
    document1.head.appendChild(style);
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/@tauri-apps/api/core [external] (@tauri-apps/api/core, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("@tauri-apps/api/core");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/apps/readest-app/src/utils/bridge.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "copyURIToPath",
    ()=>copyURIToPath,
    "getExternalSDCardPath",
    ()=>getExternalSDCardPath,
    "getSafeAreaInsets",
    ()=>getSafeAreaInsets,
    "getScreenBrightness",
    ()=>getScreenBrightness,
    "getStatusBarHeight",
    ()=>getStatusBarHeight,
    "getSysFontsList",
    ()=>getSysFontsList,
    "getSystemColorScheme",
    ()=>getSystemColorScheme,
    "installPackage",
    ()=>installPackage,
    "interceptKeys",
    ()=>interceptKeys,
    "invokeUseBackgroundAudio",
    ()=>invokeUseBackgroundAudio,
    "lockScreenOrientation",
    ()=>lockScreenOrientation,
    "selectDirectory",
    ()=>selectDirectory,
    "setScreenBrightness",
    ()=>setScreenBrightness,
    "setSystemUIVisibility",
    ()=>setSystemUIVisibility
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$api$2f$core__$5b$external$5d$__$2840$tauri$2d$apps$2f$api$2f$core$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@tauri-apps/api/core [external] (@tauri-apps/api/core, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$api$2f$core__$5b$external$5d$__$2840$tauri$2d$apps$2f$api$2f$core$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$api$2f$core__$5b$external$5d$__$2840$tauri$2d$apps$2f$api$2f$core$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
async function copyURIToPath(request) {
    const result = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$api$2f$core__$5b$external$5d$__$2840$tauri$2d$apps$2f$api$2f$core$2c$__esm_import$29$__["invoke"])('plugin:native-bridge|copy_uri_to_path', {
        payload: request
    });
    return result;
}
async function invokeUseBackgroundAudio(request) {
    await (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$api$2f$core__$5b$external$5d$__$2840$tauri$2d$apps$2f$api$2f$core$2c$__esm_import$29$__["invoke"])('plugin:native-bridge|use_background_audio', {
        payload: request
    });
}
async function installPackage(request) {
    const result = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$api$2f$core__$5b$external$5d$__$2840$tauri$2d$apps$2f$api$2f$core$2c$__esm_import$29$__["invoke"])('plugin:native-bridge|install_package', {
        payload: request
    });
    return result;
}
async function setSystemUIVisibility(request) {
    const result = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$api$2f$core__$5b$external$5d$__$2840$tauri$2d$apps$2f$api$2f$core$2c$__esm_import$29$__["invoke"])('plugin:native-bridge|set_system_ui_visibility', {
        payload: request
    });
    return result;
}
async function getStatusBarHeight() {
    const result = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$api$2f$core__$5b$external$5d$__$2840$tauri$2d$apps$2f$api$2f$core$2c$__esm_import$29$__["invoke"])('plugin:native-bridge|get_status_bar_height');
    return result;
}
let cachedSysFontsResult = null;
async function getSysFontsList() {
    if (cachedSysFontsResult) {
        return cachedSysFontsResult;
    }
    const result = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$api$2f$core__$5b$external$5d$__$2840$tauri$2d$apps$2f$api$2f$core$2c$__esm_import$29$__["invoke"])('plugin:native-bridge|get_sys_fonts_list');
    cachedSysFontsResult = result;
    return result;
}
async function interceptKeys(request) {
    await (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$api$2f$core__$5b$external$5d$__$2840$tauri$2d$apps$2f$api$2f$core$2c$__esm_import$29$__["invoke"])('plugin:native-bridge|intercept_keys', {
        payload: request
    });
}
async function lockScreenOrientation(request) {
    await (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$api$2f$core__$5b$external$5d$__$2840$tauri$2d$apps$2f$api$2f$core$2c$__esm_import$29$__["invoke"])('plugin:native-bridge|lock_screen_orientation', {
        payload: request
    });
}
async function getSystemColorScheme() {
    const result = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$api$2f$core__$5b$external$5d$__$2840$tauri$2d$apps$2f$api$2f$core$2c$__esm_import$29$__["invoke"])('plugin:native-bridge|get_system_color_scheme');
    return result;
}
async function getSafeAreaInsets() {
    const result = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$api$2f$core__$5b$external$5d$__$2840$tauri$2d$apps$2f$api$2f$core$2c$__esm_import$29$__["invoke"])('plugin:native-bridge|get_safe_area_insets');
    return result;
}
async function getScreenBrightness() {
    const result = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$api$2f$core__$5b$external$5d$__$2840$tauri$2d$apps$2f$api$2f$core$2c$__esm_import$29$__["invoke"])('plugin:native-bridge|get_screen_brightness');
    return result;
}
async function setScreenBrightness(request) {
    const result = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$api$2f$core__$5b$external$5d$__$2840$tauri$2d$apps$2f$api$2f$core$2c$__esm_import$29$__["invoke"])('plugin:native-bridge|set_screen_brightness', {
        payload: request
    });
    return result;
}
async function getExternalSDCardPath() {
    const result = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$api$2f$core__$5b$external$5d$__$2840$tauri$2d$apps$2f$api$2f$core$2c$__esm_import$29$__["invoke"])('plugin:native-bridge|get_external_sdcard_path');
    return result;
}
async function selectDirectory() {
    const result = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$api$2f$core__$5b$external$5d$__$2840$tauri$2d$apps$2f$api$2f$core$2c$__esm_import$29$__["invoke"])('plugin:native-bridge|select_directory');
    return result;
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/@tauri-apps/api/window [external] (@tauri-apps/api/window, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("@tauri-apps/api/window");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/apps/readest-app/src/store/themeStore.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "initSystemThemeListener",
    ()=>initSystemThemeListener,
    "loadDataTheme",
    ()=>loadDataTheme,
    "useThemeStore",
    ()=>useThemeStore
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$zustand__$5b$external$5d$__$28$zustand$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/zustand [external] (zustand, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$style$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/style.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$bridge$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/bridge.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$api$2f$window__$5b$external$5d$__$2840$tauri$2d$apps$2f$api$2f$window$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@tauri-apps/api/window [external] (@tauri-apps/api/window, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/services/environment.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$zustand__$5b$external$5d$__$28$zustand$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$style$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$bridge$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$api$2f$window__$5b$external$5d$__$2840$tauri$2d$apps$2f$api$2f$window$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$zustand__$5b$external$5d$__$28$zustand$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$style$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$bridge$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$api$2f$window__$5b$external$5d$__$2840$tauri$2d$apps$2f$api$2f$window$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
const getInitialThemeMode = ()=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return 'auto';
};
const getInitialThemeColor = ()=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return 'default';
};
const useThemeStore = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$zustand__$5b$external$5d$__$28$zustand$2c$__esm_import$29$__["create"])((set, get)=>{
    const initialThemeMode = getInitialThemeMode();
    const initialThemeColor = getInitialThemeColor();
    const systemIsDarkMode = ("TURBOPACK compile-time value", "undefined") !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDarkMode = initialThemeMode === 'dark' || initialThemeMode === 'auto' && systemIsDarkMode;
    const themeCode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$style$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getThemeCode"])();
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
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const isDarkMode = mode === 'dark' || mode === 'auto' && get().systemIsDarkMode;
            document.documentElement.setAttribute('data-theme', `${get().themeColor}-${isDarkMode ? 'dark' : 'light'}`);
            set({
                themeMode: mode,
                isDarkMode
            });
            set({
                themeCode: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$style$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getThemeCode"])()
            });
        },
        setThemeColor: (color)=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            document.documentElement.setAttribute('data-theme', `${color}-${get().isDarkMode ? 'dark' : 'light'}`);
            set({
                themeColor: color
            });
            set({
                themeCode: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$style$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getThemeCode"])()
            });
        },
        updateAppTheme: (color)=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$services$2f$environment$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["isWebAppPlatform"])()) {
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
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
    const mediaQuery = undefined;
    const updateColorTheme = undefined;
    const updateWindowTheme = undefined;
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/dayjs [external] (dayjs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("dayjs", () => require("dayjs"));

module.exports = mod;
}),
"[externals]/dayjs/plugin/relativeTime.js [external] (dayjs/plugin/relativeTime.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("dayjs/plugin/relativeTime.js", () => require("dayjs/plugin/relativeTime.js"));

module.exports = mod;
}),
"[externals]/dayjs/locale/en.js [external] (dayjs/locale/en.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("dayjs/locale/en.js", () => require("dayjs/locale/en.js"));

module.exports = mod;
}),
"[externals]/dayjs/locale/zh.js [external] (dayjs/locale/zh.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("dayjs/locale/zh.js", () => require("dayjs/locale/zh.js"));

module.exports = mod;
}),
"[externals]/dayjs/locale/de.js [external] (dayjs/locale/de.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("dayjs/locale/de.js", () => require("dayjs/locale/de.js"));

module.exports = mod;
}),
"[externals]/dayjs/locale/ja.js [external] (dayjs/locale/ja.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("dayjs/locale/ja.js", () => require("dayjs/locale/ja.js"));

module.exports = mod;
}),
"[externals]/dayjs/locale/ko.js [external] (dayjs/locale/ko.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("dayjs/locale/ko.js", () => require("dayjs/locale/ko.js"));

module.exports = mod;
}),
"[externals]/dayjs/locale/ru.js [external] (dayjs/locale/ru.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("dayjs/locale/ru.js", () => require("dayjs/locale/ru.js"));

module.exports = mod;
}),
"[externals]/dayjs/locale/fr.js [external] (dayjs/locale/fr.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("dayjs/locale/fr.js", () => require("dayjs/locale/fr.js"));

module.exports = mod;
}),
"[externals]/dayjs/locale/el.js [external] (dayjs/locale/el.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("dayjs/locale/el.js", () => require("dayjs/locale/el.js"));

module.exports = mod;
}),
"[externals]/dayjs/locale/es.js [external] (dayjs/locale/es.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("dayjs/locale/es.js", () => require("dayjs/locale/es.js"));

module.exports = mod;
}),
"[externals]/dayjs/locale/it.js [external] (dayjs/locale/it.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("dayjs/locale/it.js", () => require("dayjs/locale/it.js"));

module.exports = mod;
}),
"[externals]/dayjs/locale/pt.js [external] (dayjs/locale/pt.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("dayjs/locale/pt.js", () => require("dayjs/locale/pt.js"));

module.exports = mod;
}),
"[externals]/dayjs/locale/pt-br.js [external] (dayjs/locale/pt-br.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("dayjs/locale/pt-br.js", () => require("dayjs/locale/pt-br.js"));

module.exports = mod;
}),
"[externals]/dayjs/locale/ar.js [external] (dayjs/locale/ar.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("dayjs/locale/ar.js", () => require("dayjs/locale/ar.js"));

module.exports = mod;
}),
"[externals]/dayjs/locale/id.js [external] (dayjs/locale/id.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("dayjs/locale/id.js", () => require("dayjs/locale/id.js"));

module.exports = mod;
}),
"[externals]/dayjs/locale/hi.js [external] (dayjs/locale/hi.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("dayjs/locale/hi.js", () => require("dayjs/locale/hi.js"));

module.exports = mod;
}),
"[externals]/dayjs/locale/th.js [external] (dayjs/locale/th.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("dayjs/locale/th.js", () => require("dayjs/locale/th.js"));

module.exports = mod;
}),
"[externals]/dayjs/locale/tr.js [external] (dayjs/locale/tr.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("dayjs/locale/tr.js", () => require("dayjs/locale/tr.js"));

module.exports = mod;
}),
"[externals]/dayjs/locale/vi.js [external] (dayjs/locale/vi.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("dayjs/locale/vi.js", () => require("dayjs/locale/vi.js"));

module.exports = mod;
}),
"[externals]/dayjs/locale/uk.js [external] (dayjs/locale/uk.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("dayjs/locale/uk.js", () => require("dayjs/locale/uk.js"));

module.exports = mod;
}),
"[externals]/dayjs/locale/pl.js [external] (dayjs/locale/pl.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("dayjs/locale/pl.js", () => require("dayjs/locale/pl.js"));

module.exports = mod;
}),
"[externals]/dayjs/locale/fi.js [external] (dayjs/locale/fi.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("dayjs/locale/fi.js", () => require("dayjs/locale/fi.js"));

module.exports = mod;
}),
"[externals]/dayjs/locale/nl.js [external] (dayjs/locale/nl.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("dayjs/locale/nl.js", () => require("dayjs/locale/nl.js"));

module.exports = mod;
}),
"[externals]/dayjs/locale/ro.js [external] (dayjs/locale/ro.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("dayjs/locale/ro.js", () => require("dayjs/locale/ro.js"));

module.exports = mod;
}),
"[externals]/dayjs/locale/zh-tw.js [external] (dayjs/locale/zh-tw.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("dayjs/locale/zh-tw.js", () => require("dayjs/locale/zh-tw.js"));

module.exports = mod;
}),
"[externals]/dayjs/locale/zh-cn.js [external] (dayjs/locale/zh-cn.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("dayjs/locale/zh-cn.js", () => require("dayjs/locale/zh-cn.js"));

module.exports = mod;
}),
"[project]/apps/readest-app/src/utils/time.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "initDayjs",
    ()=>initDayjs
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$dayjs__$5b$external$5d$__$28$dayjs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/dayjs [external] (dayjs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$dayjs$2f$plugin$2f$relativeTime$2e$js__$5b$external$5d$__$28$dayjs$2f$plugin$2f$relativeTime$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/dayjs/plugin/relativeTime.js [external] (dayjs/plugin/relativeTime.js, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$dayjs$2f$locale$2f$en$2e$js__$5b$external$5d$__$28$dayjs$2f$locale$2f$en$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/dayjs/locale/en.js [external] (dayjs/locale/en.js, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$dayjs$2f$locale$2f$zh$2e$js__$5b$external$5d$__$28$dayjs$2f$locale$2f$zh$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/dayjs/locale/zh.js [external] (dayjs/locale/zh.js, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$dayjs$2f$locale$2f$de$2e$js__$5b$external$5d$__$28$dayjs$2f$locale$2f$de$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/dayjs/locale/de.js [external] (dayjs/locale/de.js, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$dayjs$2f$locale$2f$ja$2e$js__$5b$external$5d$__$28$dayjs$2f$locale$2f$ja$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/dayjs/locale/ja.js [external] (dayjs/locale/ja.js, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$dayjs$2f$locale$2f$ko$2e$js__$5b$external$5d$__$28$dayjs$2f$locale$2f$ko$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/dayjs/locale/ko.js [external] (dayjs/locale/ko.js, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$dayjs$2f$locale$2f$ru$2e$js__$5b$external$5d$__$28$dayjs$2f$locale$2f$ru$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/dayjs/locale/ru.js [external] (dayjs/locale/ru.js, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$dayjs$2f$locale$2f$fr$2e$js__$5b$external$5d$__$28$dayjs$2f$locale$2f$fr$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/dayjs/locale/fr.js [external] (dayjs/locale/fr.js, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$dayjs$2f$locale$2f$el$2e$js__$5b$external$5d$__$28$dayjs$2f$locale$2f$el$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/dayjs/locale/el.js [external] (dayjs/locale/el.js, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$dayjs$2f$locale$2f$es$2e$js__$5b$external$5d$__$28$dayjs$2f$locale$2f$es$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/dayjs/locale/es.js [external] (dayjs/locale/es.js, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$dayjs$2f$locale$2f$it$2e$js__$5b$external$5d$__$28$dayjs$2f$locale$2f$it$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/dayjs/locale/it.js [external] (dayjs/locale/it.js, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$dayjs$2f$locale$2f$pt$2e$js__$5b$external$5d$__$28$dayjs$2f$locale$2f$pt$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/dayjs/locale/pt.js [external] (dayjs/locale/pt.js, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$dayjs$2f$locale$2f$pt$2d$br$2e$js__$5b$external$5d$__$28$dayjs$2f$locale$2f$pt$2d$br$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/dayjs/locale/pt-br.js [external] (dayjs/locale/pt-br.js, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$dayjs$2f$locale$2f$ar$2e$js__$5b$external$5d$__$28$dayjs$2f$locale$2f$ar$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/dayjs/locale/ar.js [external] (dayjs/locale/ar.js, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$dayjs$2f$locale$2f$id$2e$js__$5b$external$5d$__$28$dayjs$2f$locale$2f$id$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/dayjs/locale/id.js [external] (dayjs/locale/id.js, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$dayjs$2f$locale$2f$hi$2e$js__$5b$external$5d$__$28$dayjs$2f$locale$2f$hi$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/dayjs/locale/hi.js [external] (dayjs/locale/hi.js, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$dayjs$2f$locale$2f$th$2e$js__$5b$external$5d$__$28$dayjs$2f$locale$2f$th$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/dayjs/locale/th.js [external] (dayjs/locale/th.js, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$dayjs$2f$locale$2f$tr$2e$js__$5b$external$5d$__$28$dayjs$2f$locale$2f$tr$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/dayjs/locale/tr.js [external] (dayjs/locale/tr.js, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$dayjs$2f$locale$2f$vi$2e$js__$5b$external$5d$__$28$dayjs$2f$locale$2f$vi$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/dayjs/locale/vi.js [external] (dayjs/locale/vi.js, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$dayjs$2f$locale$2f$uk$2e$js__$5b$external$5d$__$28$dayjs$2f$locale$2f$uk$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/dayjs/locale/uk.js [external] (dayjs/locale/uk.js, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$dayjs$2f$locale$2f$pl$2e$js__$5b$external$5d$__$28$dayjs$2f$locale$2f$pl$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/dayjs/locale/pl.js [external] (dayjs/locale/pl.js, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$dayjs$2f$locale$2f$fi$2e$js__$5b$external$5d$__$28$dayjs$2f$locale$2f$fi$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/dayjs/locale/fi.js [external] (dayjs/locale/fi.js, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$dayjs$2f$locale$2f$nl$2e$js__$5b$external$5d$__$28$dayjs$2f$locale$2f$nl$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/dayjs/locale/nl.js [external] (dayjs/locale/nl.js, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$dayjs$2f$locale$2f$ro$2e$js__$5b$external$5d$__$28$dayjs$2f$locale$2f$ro$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/dayjs/locale/ro.js [external] (dayjs/locale/ro.js, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$dayjs$2f$locale$2f$zh$2d$tw$2e$js__$5b$external$5d$__$28$dayjs$2f$locale$2f$zh$2d$tw$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/dayjs/locale/zh-tw.js [external] (dayjs/locale/zh-tw.js, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$dayjs$2f$locale$2f$zh$2d$cn$2e$js__$5b$external$5d$__$28$dayjs$2f$locale$2f$zh$2d$cn$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/dayjs/locale/zh-cn.js [external] (dayjs/locale/zh-cn.js, cjs)");
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
const initDayjs = (locale)=>{
    __TURBOPACK__imported__module__$5b$externals$5d2f$dayjs__$5b$external$5d$__$28$dayjs$2c$__cjs$29$__["default"].locale(locale);
    __TURBOPACK__imported__module__$5b$externals$5d2f$dayjs__$5b$external$5d$__$28$dayjs$2c$__cjs$29$__["default"].extend(__TURBOPACK__imported__module__$5b$externals$5d2f$dayjs$2f$plugin$2f$relativeTime$2e$js__$5b$external$5d$__$28$dayjs$2f$plugin$2f$relativeTime$2e$js$2c$__cjs$29$__["default"]);
};
}),
"[project]/apps/readest-app/src/store/settingsStore.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "useSettingsStore",
    ()=>useSettingsStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$i18n$2f$i18n$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/i18n/i18n.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$zustand__$5b$external$5d$__$28$zustand$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/zustand [external] (zustand, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$time$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/time.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$i18n$2f$i18n$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$zustand__$5b$external$5d$__$28$zustand$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$i18n$2f$i18n$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$zustand__$5b$external$5d$__$28$zustand$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
const useSettingsStore = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$zustand__$5b$external$5d$__$28$zustand$2c$__esm_import$29$__["create"])((set)=>({
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
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$i18n$2f$i18n$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"].changeLanguage(locale);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$time$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["initDayjs"])(locale);
        }
    }));
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/readest-app/src/hooks/useSafeAreaInsets.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "useSafeAreaInsets",
    ()=>useSafeAreaInsets
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/context/EnvContext.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$themeStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/themeStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$bridge$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/bridge.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$themeStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$bridge$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$themeStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$bridge$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
'use client';
;
;
;
;
const useSafeAreaInsets = ()=>{
    const { appService } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["useEnv"])();
    const currentInsets = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])({
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    });
    const { updateSafeAreaInsets } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$themeStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useThemeStore"])();
    const updateInsets = (insets)=>{
        const { top, right, bottom, left } = currentInsets.current;
        if (insets.top !== top || insets.right !== right || insets.bottom !== bottom || insets.left !== left) {
            currentInsets.current = insets;
            updateSafeAreaInsets(insets);
        }
    };
    const onUpdateInsets = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(()=>{
        if (!appService) return;
        if (!appService.hasSafeAreaInset) {
            updateInsets(currentInsets.current);
            return;
        }
        const rootStyles = getComputedStyle(document.documentElement);
        const hasCustomProperties = rootStyles.getPropertyValue('--safe-area-inset-top');
        const isWebView139 = /Chrome\/139/.test(navigator.userAgent);
        // safe-area-inset-* values in css are always 0px in some versions of webview 139
        // due to https://issues.chromium.org/issues/40699457
        if (appService.isAndroidApp && isWebView139) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$bridge$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getSafeAreaInsets"])().then((response)=>{
                if (response.error) {
                    console.error('Error getting safe area insets from native bridge:', response.error);
                } else {
                    const insets = {
                        top: Math.round(response.top),
                        right: Math.round(response.right),
                        bottom: Math.round(response.bottom),
                        left: Math.round(response.left)
                    };
                    updateInsets(insets);
                }
            });
        } else if (hasCustomProperties) {
            const top = parseFloat(rootStyles.getPropertyValue('--safe-area-inset-top')) || 0;
            const right = parseFloat(rootStyles.getPropertyValue('--safe-area-inset-right')) || 0;
            const bottom = parseFloat(rootStyles.getPropertyValue('--safe-area-inset-bottom')) || 0;
            const left = parseFloat(rootStyles.getPropertyValue('--safe-area-inset-left')) || 0;
            const insets = {
                top: Math.round(top),
                right: Math.round(right),
                bottom: Math.round(bottom),
                left: Math.round(left)
            };
            updateInsets(insets);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        appService
    ]);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        onUpdateInsets();
        if (window.screen?.orientation) {
            window.screen.orientation.addEventListener('change', onUpdateInsets);
        } else {
            window.addEventListener('orientationchange', onUpdateInsets);
        }
        return ()=>{
            if (window.screen?.orientation) {
                window.screen.orientation.removeEventListener('change', onUpdateInsets);
            } else {
                window.removeEventListener('orientationchange', onUpdateInsets);
            }
        };
    }, [
        onUpdateInsets
    ]);
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/react-responsive [external] (react-responsive, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react-responsive", () => require("react-responsive"));

module.exports = mod;
}),
"[project]/apps/readest-app/src/hooks/useResponsiveSize.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDefaultIconSize",
    ()=>useDefaultIconSize,
    "useResponsiveSize",
    ()=>useResponsiveSize
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$responsive__$5b$external$5d$__$28$react$2d$responsive$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react-responsive [external] (react-responsive, cjs)");
;
const useResponsiveSize = (baseSize)=>{
    const isPhone = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$responsive__$5b$external$5d$__$28$react$2d$responsive$2c$__cjs$29$__["useMediaQuery"])({
        maxWidth: 480
    });
    const isTablet = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$responsive__$5b$external$5d$__$28$react$2d$responsive$2c$__cjs$29$__["useMediaQuery"])({
        minWidth: 481,
        maxWidth: 1024
    });
    if (isPhone) return baseSize * 1.25;
    if (isTablet) return baseSize * 1.25;
    return baseSize;
};
const useDefaultIconSize = ()=>{
    return useResponsiveSize(20);
};
}),
"[externals]/@tauri-apps/api/path [external] (@tauri-apps/api/path, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("@tauri-apps/api/path");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/apps/readest-app/src/utils/path.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "getBaseFilename",
    ()=>getBaseFilename,
    "getDirPath",
    ()=>getDirPath,
    "getFilename",
    ()=>getFilename,
    "joinPaths",
    ()=>joinPaths
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$api$2f$path__$5b$external$5d$__$2840$tauri$2d$apps$2f$api$2f$path$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@tauri-apps/api/path [external] (@tauri-apps/api/path, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/misc.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$api$2f$path__$5b$external$5d$__$2840$tauri$2d$apps$2f$api$2f$path$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$api$2f$path__$5b$external$5d$__$2840$tauri$2d$apps$2f$api$2f$path$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
const getFilename = (fileOrUri)=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["isValidURL"])(fileOrUri) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["isContentURI"])(fileOrUri) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["isFileURI"])(fileOrUri)) {
        fileOrUri = decodeURI(fileOrUri);
    }
    const normalizedPath = fileOrUri.replace(/\\/g, '/');
    const parts = normalizedPath.split('/');
    const lastPart = parts.pop();
    return lastPart.split('?')[0];
};
const getBaseFilename = (filename)=>{
    const normalizedPath = filename.replace(/\\/g, '/');
    const name = normalizedPath.split('/').pop() || '';
    const parts = name.split('.');
    if (parts.length <= 1) {
        return name;
    }
    return parts.slice(0, -1).join('.');
};
const getDirPath = (filePath)=>{
    const normalizedPath = filePath.replace(/\\/g, '/');
    const parts = normalizedPath.split('/');
    parts.pop();
    return parts.join('/');
};
const joinPaths = async (...paths)=>{
    return await (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$tauri$2d$apps$2f$api$2f$path__$5b$external$5d$__$2840$tauri$2d$apps$2f$api$2f$path$2c$__esm_import$29$__["join"])(...paths);
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/readest-app/src/utils/md5.ts [ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isMd5",
    ()=>isMd5,
    "md5Fingerprint",
    ()=>md5Fingerprint,
    "partialMD5",
    ()=>partialMD5
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$js$2d$md5__$5b$external$5d$__$28$js$2d$md5$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/js-md5 [external] (js-md5, cjs)");
;
function isMd5(value) {
    return /^[0-9a-f]{32}$/.test(value);
}
function md5Fingerprint(value) {
    return (0, __TURBOPACK__imported__module__$5b$externals$5d2f$js$2d$md5__$5b$external$5d$__$28$js$2d$md5$2c$__cjs$29$__["md5"])(value).slice(0, 7);
}
async function partialMD5(file) {
    const step = 1024;
    const size = 1024;
    const hasher = __TURBOPACK__imported__module__$5b$externals$5d2f$js$2d$md5__$5b$external$5d$__$28$js$2d$md5$2c$__cjs$29$__["md5"].create();
    for(let i = -1; i <= 10; i++){
        const start = Math.min(file.size, step << 2 * i);
        const end = Math.min(start + size, file.size);
        if (start >= file.size) break;
        const blobSlice = file.slice(start, end);
        const arrayBuffer = await blobSlice.arrayBuffer();
        const uint8Array = new Uint8Array(arrayBuffer);
        hasher.update(uint8Array);
    }
    return hasher.hex();
}
;
}),
"[project]/apps/readest-app/src/styles/textures.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

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
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$path$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/path.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$md5$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/md5.ts [ssr] (ecmascript) <locals>");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$path$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$path$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
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
    const fileName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$path$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getFilename"])(path);
    return fileName.replace(/\.(jpg|jpeg|png|gif|bmp|webp)$/i, '');
}
function getTextureId(name) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$md5$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["md5Fingerprint"])(name);
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
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/readest-app/src/store/customTextureStore.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "useCustomTextureStore",
    ()=>useCustomTextureStore
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$zustand__$5b$external$5d$__$28$zustand$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/zustand [external] (zustand, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$styles$2f$textures$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/styles/textures.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/settingsStore.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$zustand__$5b$external$5d$__$28$zustand$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$styles$2f$textures$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$zustand__$5b$external$5d$__$28$zustand$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$styles$2f$textures$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
function toSettingsTexture(texture) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { blobUrl, loaded, error, ...settingsTexture } = texture;
    return settingsTexture;
}
const useCustomTextureStore = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$zustand__$5b$external$5d$__$28$zustand$2c$__esm_import$29$__["create"])((set, get)=>({
        textures: [],
        loading: false,
        setTextures: (textures)=>set({
                textures
            }),
        addTexture: (path)=>{
            const texture = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$styles$2f$textures$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["createCustomTexture"])(path);
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
                ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$styles$2f$textures$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["PREDEFINED_TEXTURES"],
                ...customTextures
            ];
            let selectedTexture = allTextures.find((t)=>t.id === textureId);
            if (!selectedTexture || selectedTexture.id === 'none') {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$styles$2f$textures$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["unmountBackgroundTexture"])(document);
                return;
            }
            if (customTextures.find((t)=>t.id === textureId) && !get().isTextureLoaded(textureId)) {
                selectedTexture = await get().loadTexture(envConfig, textureId);
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$styles$2f$textures$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["mountBackgroundTexture"])(document, selectedTexture);
        },
        loadCustomTextures: async (envConfig)=>{
            try {
                const { settings } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"].getState();
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
                const { settings, setSettings, saveSettings } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"].getState();
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
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/readest-app/src/hooks/useBackgroundTexture.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "useBackgroundTexture",
    ()=>useBackgroundTexture
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$customTextureStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/customTextureStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/settingsStore.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$customTextureStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$customTextureStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
'use client';
;
;
;
const useBackgroundTexture = ()=>{
    const applyBackgroundTexture = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])((envConfig, viewSettings)=>{
        const textureId = viewSettings.backgroundTextureId;
        const textureOpacity = viewSettings.backgroundOpacity;
        const textureSize = viewSettings.backgroundSize;
        if (!textureId || textureId === 'none') return;
        document.documentElement.style.setProperty('--bg-texture-opacity', `${textureOpacity}`);
        document.documentElement.style.setProperty('--bg-texture-size', textureSize);
        const settings = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"].getState().settings;
        const customTexture = settings.customTextures?.find((t)=>t.id === textureId);
        if (customTexture) {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$customTextureStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useCustomTextureStore"].getState().addTexture(customTexture.path);
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$customTextureStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useCustomTextureStore"].getState().applyTexture(envConfig, textureId);
    }, []);
    return {
        applyBackgroundTexture
    };
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/readest-app/src/hooks/useEinkMode.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "useEinkMode",
    ()=>useEinkMode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$themeStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/themeStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$themeStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$themeStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
'use client';
;
;
const useEinkMode = ()=>{
    const { setIsEinkMode } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$themeStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useThemeStore"])();
    const applyEinkMode = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])((isEink)=>{
        setIsEinkMode(isEink);
        if (isEink) {
            document.body.classList.add('no-transitions');
        } else {
            document.body.classList.remove('no-transitions');
        }
        document.documentElement.setAttribute('data-eink', isEink.toString());
    }, [
        setIsEinkMode
    ]);
    return {
        applyEinkMode
    };
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/readest-app/src/utils/rtl.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDirFromLanguage",
    ()=>getDirFromLanguage,
    "getDirFromUILanguage",
    ()=>getDirFromUILanguage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/misc.ts [ssr] (ecmascript)");
;
const getDirFromLanguage = (lang)=>{
    if (!lang) return 'auto';
    const rtlLanguages = new Set([
        'ar',
        'he',
        'fa',
        'ur',
        'dv',
        'ps',
        'sd',
        'yi'
    ]);
    const primaryLang = lang.split('-')[0].toLowerCase();
    return rtlLanguages.has(primaryLang) ? 'rtl' : 'auto';
};
const getDirFromUILanguage = ()=>{
    const lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getUserLang"])();
    return getDirFromLanguage(lang);
};
}),
"[project]/apps/readest-app/src/components/Providers.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$polyfill$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/polyfill.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$i18n$2f$i18n$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/i18n/i18n.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$icons__$5b$external$5d$__$28$react$2d$icons$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/react-icons [external] (react-icons, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/context/AuthContext.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/context/EnvContext.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$PHContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/context/PHContext.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$SyncContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/context/SyncContext.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$themeStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/themeStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/store/settingsStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useSafeAreaInsets$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/hooks/useSafeAreaInsets.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useResponsiveSize$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/hooks/useResponsiveSize.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useBackgroundTexture$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/hooks/useBackgroundTexture.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useEinkMode$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/hooks/useEinkMode.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/misc.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$rtl$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/utils/rtl.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$i18n$2f$i18n$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$icons__$5b$external$5d$__$28$react$2d$icons$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$themeStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useSafeAreaInsets$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useBackgroundTexture$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useEinkMode$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$i18n$2f$i18n$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$icons__$5b$external$5d$__$28$react$2d$icons$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$themeStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useSafeAreaInsets$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useBackgroundTexture$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useEinkMode$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
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
// Set storage mode globally before any other code runs
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const Providers = ({ children })=>{
    const { envConfig, appService } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["useEnv"])();
    const { applyUILanguage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$settingsStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"])();
    const { applyBackgroundTexture } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useBackgroundTexture$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useBackgroundTexture"])();
    const { applyEinkMode } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useEinkMode$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useEinkMode"])();
    const iconSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useResponsiveSize$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useDefaultIconSize"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$hooks$2f$useSafeAreaInsets$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useSafeAreaInsets"])(); // Initialize safe area insets
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        // Verify storage mode is set (redundant safety check)
        const storageMode = ("TURBOPACK compile-time value", "local") || 'local';
        if (!window.__STORAGE_MODE__) {
            window.__STORAGE_MODE__ = storageMode;
        }
        console.log('[Providers] useEffect: window.__STORAGE_MODE__ =', window.__STORAGE_MODE__);
        const handlerLanguageChanged = (lng)=>{
            document.documentElement.lang = lng;
            // Set RTL class on document for targeted styling without affecting layout
            const dir = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$rtl$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getDirFromUILanguage"])();
            if (dir === 'rtl') {
                document.documentElement.classList.add('ui-rtl');
            } else {
                document.documentElement.classList.remove('ui-rtl');
            }
        };
        const locale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$utils$2f$misc$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getLocale"])();
        handlerLanguageChanged(locale);
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$i18n$2f$i18n$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"].on('languageChanged', handlerLanguageChanged);
        return ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$i18n$2f$i18n$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"].off('languageChanged', handlerLanguageChanged);
        };
    }, []);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$themeStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["loadDataTheme"])();
        if (appService) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$store$2f$themeStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["initSystemThemeListener"])(appService);
            appService.loadSettings().then((settings)=>{
                const globalViewSettings = settings.globalViewSettings;
                applyUILanguage(globalViewSettings.uiLanguage);
                applyBackgroundTexture(envConfig, globalViewSettings);
                if (globalViewSettings.isEink) {
                    applyEinkMode(true);
                }
            });
        }
    }, [
        envConfig,
        appService,
        applyUILanguage,
        applyBackgroundTexture,
        applyEinkMode
    ]);
    // Make sure appService is available in all children components
    if (!appService) return;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$PHContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["CSPostHogProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["AuthProvider"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$icons__$5b$external$5d$__$28$react$2d$icons$2c$__esm_import$29$__["IconContext"].Provider, {
                value: {
                    size: `${iconSize}px`
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$SyncContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["SyncProvider"], {
                    children: children
                }, void 0, false, {
                    fileName: "[project]/apps/readest-app/src/components/Providers.tsx",
                    lineNumber: 85,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/components/Providers.tsx",
                lineNumber: 84,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/apps/readest-app/src/components/Providers.tsx",
            lineNumber: 83,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/readest-app/src/components/Providers.tsx",
        lineNumber: 82,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Providers;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/readest-app/src/pages/_app.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.28.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/head.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/context/EnvContext.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$Providers$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/readest-app/src/components/Providers.tsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$Providers$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$Providers$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
function MyApp({ Component, pageProps }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                        name: "viewport",
                        content: "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
                    }, void 0, false, {
                        fileName: "[project]/apps/readest-app/src/pages/_app.tsx",
                        lineNumber: 12,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                        name: "application-name",
                        content: "Readest"
                    }, void 0, false, {
                        fileName: "[project]/apps/readest-app/src/pages/_app.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                        name: "apple-mobile-web-app-capable",
                        content: "yes"
                    }, void 0, false, {
                        fileName: "[project]/apps/readest-app/src/pages/_app.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                        name: "apple-mobile-web-app-status-bar-style",
                        content: "default"
                    }, void 0, false, {
                        fileName: "[project]/apps/readest-app/src/pages/_app.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                        name: "apple-mobile-web-app-title",
                        content: "Readest"
                    }, void 0, false, {
                        fileName: "[project]/apps/readest-app/src/pages/_app.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                        name: "description",
                        content: "Readest is an open-source eBook reader supporting EPUB, PDF, and sync across devices."
                    }, void 0, false, {
                        fileName: "[project]/apps/readest-app/src/pages/_app.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                        name: "format-detection",
                        content: "telephone=no"
                    }, void 0, false, {
                        fileName: "[project]/apps/readest-app/src/pages/_app.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                        name: "mobile-web-app-capable",
                        content: "yes"
                    }, void 0, false, {
                        fileName: "[project]/apps/readest-app/src/pages/_app.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                        name: "theme-color",
                        content: "white"
                    }, void 0, false, {
                        fileName: "[project]/apps/readest-app/src/pages/_app.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("link", {
                        rel: "manifest",
                        href: "/manifest.json"
                    }, void 0, false, {
                        fileName: "[project]/apps/readest-app/src/pages/_app.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/readest-app/src/pages/_app.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$context$2f$EnvContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["EnvProvider"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$readest$2d$app$2f$src$2f$components$2f$Providers$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Component, {
                        ...pageProps
                    }, void 0, false, {
                        fileName: "[project]/apps/readest-app/src/pages/_app.tsx",
                        lineNumber: 31,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/readest-app/src/pages/_app.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/readest-app/src/pages/_app.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
const __TURBOPACK__default__export__ = MyApp;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__b6ae3fea._.js.map