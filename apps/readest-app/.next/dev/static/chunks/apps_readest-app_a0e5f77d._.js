(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/readest-app/package.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"name":"@readest/readest-app","version":"0.9.97","private":true,"scripts":{"dev":"dotenv -e .env.tauri -- next dev","build":"dotenv -e .env.tauri -- next build","start":"dotenv -e .env.tauri -- next start","dev-web":"dotenv -e .env.web -- next dev","build-web":"dotenv -e .env.web -- next build","start-web":"dotenv -e .env.web -- next start","build-tauri":"dotenv -e .env.tauri -- next build","i18n:extract":"i18next-scanner","lint":"eslint .","test":"dotenv -e .env -e .env.test.local vitest","tauri":"tauri","clippy":"cargo clippy -p Readest --no-deps -- -D warnings","prepare-public-vendor":"mkdirp ./public/vendor/pdfjs ./public/vendor/simplecc","copy-pdfjs-js":"cpx \"../../packages/foliate-js/node_modules/pdfjs-dist/legacy/build/{pdf.worker.min.mjs,pdf.min.mjs,pdf.d.mts}\" ./public/vendor/pdfjs","copy-pdfjs-wasm":"cpx \"../../packages/foliate-js/node_modules/pdfjs-dist/wasm/{openjpeg.wasm,qcms_bg.wasm}\" ./public/vendor/pdfjs","copy-pdfjs-fonts":"cpx \"../../packages/foliate-js/node_modules/pdfjs-dist/{cmaps,standard_fonts}/*\" ./public/vendor/pdfjs","copy-flatten-pdfjs-annotation-layer-css":"npx postcss \"../../packages/foliate-js/vendor/pdfjs/annotation_layer_builder.css\" --no-map -u postcss-nested > ./public/vendor/pdfjs/annotation_layer_builder.css","copy-flatten-pdfjs-text-layer-css":"npx postcss \"../../packages/foliate-js/vendor/pdfjs/text_layer_builder.css\" --no-map -u postcss-nested > ./public/vendor/pdfjs/text_layer_builder.css","copy-flatten-pdfjs-css":"pnpm copy-flatten-pdfjs-annotation-layer-css && pnpm copy-flatten-pdfjs-text-layer-css","copy-pdfjs":"pnpm copy-pdfjs-js && pnpm copy-pdfjs-wasm && pnpm copy-pdfjs-fonts && pnpm copy-flatten-pdfjs-css","copy-simplecc":"cpx \"../../packages/simplecc-wasm/dist/web/*\" ./public/vendor/simplecc","setup-pdfjs":"pnpm prepare-public-vendor && pnpm copy-pdfjs","setup-simplecc":"pnpm prepare-public-vendor && pnpm copy-simplecc","setup-vendors":"pnpm setup-pdfjs && pnpm setup-simplecc","build-win-x64":"dotenv -e .env.tauri.local -- tauri build --target i686-pc-windows-msvc --bundles nsis","build-win-arm64":"dotenv -e .env.tauri.local -- tauri build --target aarch64-pc-windows-msvc --bundles nsis","build-linux-x64":"dotenv -e .env.tauri.local -- tauri build --target x86_64-unknown-linux-gnu --bundles appimage","build-macos-universial":"dotenv -e .env.tauri.local -e .env.apple-nonstore.local -- tauri build -t universal-apple-darwin --bundles dmg","build-macos-universial-appstore":"dotenv -e .env.tauri.local -e .env.apple-appstore.local -- tauri build -t universal-apple-darwin --bundles app --config src-tauri/tauri.appstore.conf.json","build-macos-universial-appstore-dev":"dotenv -e .env.tauri.local -e .env.apple-appstore-dev.local -- tauri build -t universal-apple-darwin --bundles app --config src-tauri/tauri.appstore-dev.conf.json","build-ios":"dotenv -e .env.ios-appstore-dev.local -- tauri ios build","build-ios-appstore":"dotenv -e .env.ios-appstore.local -- tauri ios build --export-method app-store-connect","release-macos-universial-appstore":"dotenv -e .env.tauri.local -e .env.apple-appstore.local -- bash scripts/release-mac-appstore.sh","release-ios-appstore":"dotenv -e .env.ios-appstore.local -- bash scripts/release-ios-appstore.sh","release-google-play":"dotenv -e .env.google-play.local -- bash scripts/release-google-play.sh","config-wrangler":"sed -i \"s/\\${TRANSLATIONS_KV_ID}/$TRANSLATIONS_KV_ID/g\" wrangler.toml","preview":"pnpm patch-build-webpack && NEXT_PUBLIC_APP_PLATFORM=web opennextjs-cloudflare build && pnpm restore-build-original && opennextjs-cloudflare preview --ip 0.0.0.0 --port 3001","deploy":"pnpm patch-build-webpack && NEXT_PUBLIC_APP_PLATFORM=web opennextjs-cloudflare build && pnpm restore-build-original && opennextjs-cloudflare deploy","upload":"pnpm patch-build-webpack && NEXT_PUBLIC_APP_PLATFORM=web opennextjs-cloudflare build && pnpm restore-build-original && opennextjs-cloudflare upload","cf-typegen":"wrangler types --env-interface CloudflareEnv cloudflare-env.d.ts","patch-build-webpack":"if [ \"$(uname)\" = \"Darwin\" ]; then sed -i '' 's/next build\"/next build --webpack\"/' package.json; else sed -i 's/next build\"/next build --webpack\"/' package.json; fi","restore-build-original":"if [ \"$(uname)\" = \"Darwin\" ]; then sed -i '' 's/next build --webpack\"/next build\"/' package.json; else sed -i 's/next build --webpack\"/next build\"/' package.json; fi","update-metadata":"bash ./scripts/sync-release-notes.sh release-notes.json ../../data/metainfo/appdata.xml","check:optional-chaining":"count=$(grep -rno '\\?\\.[a-zA-Z_$]' .next/static/chunks/* out/_next/static/chunks/* | wc -l); if [ \"$count\" -gt 0 ]; then echo '❌ Optional chaining found in output!'; exit 1; else echo '✅ No optional chaining found.'; fi","check:translations":"count=$(grep -rno '__STRING_NOT_TRANSLATED__' public/locales/* | wc -l); if [ \"$count\" -gt 0 ]; then echo '❌ Untranslated strings found!'; exit 1; else echo '✅ All strings translated.'; fi","check:lookbehind-regex":"count=$(grep -rnoE '\\(\\?<[!=]' .next/static/chunks/* out/_next/static/chunks/* | wc -l); if [ \"$count\" -gt 0 ]; then echo '❌ Lookbehind regex found in output!'; exit 1; else echo '✅ No lookbehind regex found.'; fi","check:all":"pnpm check:translations && pnpm check:lookbehind-regex","build-check":"pnpm build && pnpm build-web && pnpm check:all"},"dependencies":{"@choochmeque/tauri-plugin-sharekit-api":"^0.3.0","@fabianlars/tauri-plugin-oauth":"2","@opennextjs/cloudflare":"^1.14.7","@serwist/next":"^9.4.2","jose":"^5.9.6","@tauri-apps/api":"2.9.1","@tauri-apps/plugin-cli":"^2.4.1","@tauri-apps/plugin-deep-link":"^2.4.6","@tauri-apps/plugin-dialog":"^2.6.0","@tauri-apps/plugin-fs":"^2.4.5","@tauri-apps/plugin-haptics":"^2.3.2","@tauri-apps/plugin-http":"^2.5.6","@tauri-apps/plugin-log":"^2.8.0","@tauri-apps/plugin-opener":"^2.5.3","@tauri-apps/plugin-os":"^2.3.2","@tauri-apps/plugin-process":"^2.3.1","@tauri-apps/plugin-shell":"~2.3.4","@tauri-apps/plugin-updater":"^2.9.0","@tauri-apps/plugin-websocket":"~2.4.2","@zip.js/zip.js":"^2.7.53","abortcontroller-polyfill":"^1.7.8","clsx":"^2.1.1","cors":"^2.8.5","dayjs":"^1.11.13","dompurify":"^3.3.0","foliate-js":"workspace:*","franc-min":"^6.2.0","highlight.js":"^11.11.1","i18next":"^24.2.0","i18next-browser-languagedetector":"^8.0.2","i18next-http-backend":"^3.0.1","iso-639-2":"^3.0.2","iso-639-3":"^3.0.1","isomorphic-ws":"^5.0.0","js-md5":"^0.8.3","jwt-decode":"^4.0.0","marked":"^15.0.12","next":"16.0.10","overlayscrollbars":"^2.11.4","overlayscrollbars-react":"^0.5.6","posthog-js":"^1.246.0","react":"19.2.0","react-color":"^2.19.3","react-dom":"19.2.0","react-i18next":"^15.2.0","react-icons":"^5.4.0","react-responsive":"^10.0.0","react-virtuoso":"^4.17.0","react-window":"^1.8.11","semver":"^7.7.1","styled-jsx":"^5.1.7","tinycolor2":"^1.6.0","uuid":"^11.1.0","ws":"^8.18.3","zod":"^4.0.8","zustand":"5.0.6"},"devDependencies":{"@next/bundle-analyzer":"^15.4.2","@tailwindcss/typography":"^0.5.16","@tauri-apps/cli":"2.9.6","@testing-library/dom":"^10.4.0","@testing-library/react":"^16.3.0","@types/cors":"^2.8.17","@types/cssbeautify":"^0.3.5","@types/node":"^22.15.31","@types/react":"18.3.12","@types/react-color":"^3.0.13","@types/react-dom":"18.3.1","@types/react-window":"^1.8.8","@types/semver":"^7.7.0","@types/tinycolor2":"^1.4.6","@types/uuid":"^10.0.0","@types/ws":"^8.18.1","@typescript-eslint/eslint-plugin":"^8.48.0","@typescript-eslint/parser":"^8.48.0","@vitejs/plugin-react":"^5.1.1","autoprefixer":"^10.4.20","caniuse-lite":"^1.0.30001746","cpx2":"^8.0.0","daisyui":"^4.12.24","dotenv-cli":"^7.4.4","eslint":"^9.16.0","eslint-config-next":"16.0.0","eslint-plugin-jsx-a11y":"^6.10.2","i18next-scanner":"^4.6.0","jsdom":"^26.1.0","mkdirp":"^3.0.1","node-env-run":"^4.0.2","postcss":"^8.4.49","postcss-cli":"^11.0.0","postcss-nested":"^7.0.2","raw-loader":"^4.0.2","serwist":"^9.3.0","tailwindcss":"^3.4.18","typescript":"^5.7.2","vite-tsconfig-paths":"^5.1.4","vitest":"^4.0.15","wrangler":"^4.56.0"}});}),
"[project]/apps/readest-app/i18next-scanner.config.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {

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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/readest-app/public/vendor/simplecc/simplecc_wasm_bg.wasm (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/simplecc_wasm_bg.d9cca8fc.wasm");}),
"[project]/apps/readest-app/public/vendor/simplecc/simplecc_wasm.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "initSync",
    ()=>initSync,
    "simplecc",
    ()=>simplecc
]);
const __TURBOPACK__import$2e$meta__ = {
    get url () {
        return `file://${__turbopack_context__.P("apps/readest-app/public/vendor/simplecc/simplecc_wasm.js")}`;
    }
};
let wasm;
let cachedUint8ArrayMemory0 = null;
function getUint8ArrayMemory0() {
    if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
        cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8ArrayMemory0;
}
let cachedTextDecoder = new TextDecoder('utf-8', {
    ignoreBOM: true,
    fatal: true
});
cachedTextDecoder.decode();
const MAX_SAFARI_DECODE_BYTES = 2146435072;
let numBytesDecoded = 0;
function decodeText(ptr, len) {
    numBytesDecoded += len;
    if (numBytesDecoded >= MAX_SAFARI_DECODE_BYTES) {
        cachedTextDecoder = new TextDecoder('utf-8', {
            ignoreBOM: true,
            fatal: true
        });
        cachedTextDecoder.decode();
        numBytesDecoded = len;
    }
    return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));
}
function getStringFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return decodeText(ptr, len);
}
let WASM_VECTOR_LEN = 0;
const cachedTextEncoder = new TextEncoder();
if (!('encodeInto' in cachedTextEncoder)) {
    cachedTextEncoder.encodeInto = function(arg, view) {
        const buf = cachedTextEncoder.encode(arg);
        view.set(buf);
        return {
            read: arg.length,
            written: buf.length
        };
    };
}
function passStringToWasm0(arg, malloc, realloc) {
    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length, 1) >>> 0;
        getUint8ArrayMemory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }
    let len = arg.length;
    let ptr = malloc(len, 1) >>> 0;
    const mem = getUint8ArrayMemory0();
    let offset = 0;
    for(; offset < len; offset++){
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }
    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
        const view = getUint8ArrayMemory0().subarray(ptr + offset, ptr + len);
        const ret = cachedTextEncoder.encodeInto(arg, view);
        offset += ret.written;
        ptr = realloc(ptr, len, offset, 1) >>> 0;
    }
    WASM_VECTOR_LEN = offset;
    return ptr;
}
function takeFromExternrefTable0(idx) {
    const value = wasm.__wbindgen_externrefs.get(idx);
    wasm.__externref_table_dealloc(idx);
    return value;
}
function simplecc(text, name) {
    let deferred4_0;
    let deferred4_1;
    try {
        const ptr0 = passStringToWasm0(text, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        const ret = wasm.simplecc(ptr0, len0, ptr1, len1);
        var ptr3 = ret[0];
        var len3 = ret[1];
        if (ret[3]) {
            ptr3 = 0;
            len3 = 0;
            throw takeFromExternrefTable0(ret[2]);
        }
        deferred4_0 = ptr3;
        deferred4_1 = len3;
        return getStringFromWasm0(ptr3, len3);
    } finally{
        wasm.__wbindgen_free(deferred4_0, deferred4_1, 1);
    }
}
const EXPECTED_RESPONSE_TYPES = new Set([
    'basic',
    'cors',
    'default'
]);
async function __wbg_load(module, imports) {
    if (typeof Response === 'function' && module instanceof Response) {
        if (typeof WebAssembly.instantiateStreaming === 'function') {
            try {
                return await WebAssembly.instantiateStreaming(module, imports);
            } catch (e) {
                const validResponse = module.ok && EXPECTED_RESPONSE_TYPES.has(module.type);
                if (validResponse && module.headers.get('Content-Type') !== 'application/wasm') {
                    console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);
                } else {
                    throw e;
                }
            }
        }
        const bytes = await module.arrayBuffer();
        return await WebAssembly.instantiate(bytes, imports);
    } else {
        const instance = await WebAssembly.instantiate(module, imports);
        if (instance instanceof WebAssembly.Instance) {
            return {
                instance,
                module
            };
        } else {
            return instance;
        }
    }
}
function __wbg_get_imports() {
    const imports = {};
    imports.wbg = {};
    imports.wbg.__wbindgen_cast_2241b6af4c4b2941 = function(arg0, arg1) {
        // Cast intrinsic for `Ref(String) -> Externref`.
        const ret = getStringFromWasm0(arg0, arg1);
        return ret;
    };
    imports.wbg.__wbindgen_init_externref_table = function() {
        const table = wasm.__wbindgen_externrefs;
        const offset = table.grow(4);
        table.set(0, undefined);
        table.set(offset + 0, undefined);
        table.set(offset + 1, null);
        table.set(offset + 2, true);
        table.set(offset + 3, false);
        ;
    };
    return imports;
}
function __wbg_finalize_init(instance, module) {
    wasm = instance.exports;
    __wbg_init.__wbindgen_wasm_module = module;
    cachedUint8ArrayMemory0 = null;
    wasm.__wbindgen_start();
    return wasm;
}
function initSync(module) {
    if (wasm !== undefined) return wasm;
    if (typeof module !== 'undefined') {
        if (Object.getPrototypeOf(module) === Object.prototype) {
            ({ module } = module);
        } else {
            console.warn('using deprecated parameters for `initSync()`; pass a single object instead');
        }
    }
    const imports = __wbg_get_imports();
    if (!(module instanceof WebAssembly.Module)) {
        module = new WebAssembly.Module(module);
    }
    const instance = new WebAssembly.Instance(module, imports);
    return __wbg_finalize_init(instance, module);
}
async function __wbg_init(module_or_path) {
    if (wasm !== undefined) return wasm;
    if (typeof module_or_path !== 'undefined') {
        if (Object.getPrototypeOf(module_or_path) === Object.prototype) {
            ({ module_or_path } = module_or_path);
        } else {
            console.warn('using deprecated parameters for the initialization function; pass a single object instead');
        }
    }
    if (typeof module_or_path === 'undefined') {
        module_or_path = new __turbopack_context__.U(__turbopack_context__.r("[project]/apps/readest-app/public/vendor/simplecc/simplecc_wasm_bg.wasm (static in ecmascript)"));
    }
    const imports = __wbg_get_imports();
    if (typeof module_or_path === 'string' || typeof Request === 'function' && module_or_path instanceof Request || typeof URL === 'function' && module_or_path instanceof URL) {
        module_or_path = fetch(module_or_path);
    }
    const { instance, module } = await __wbg_load(await module_or_path, imports);
    return __wbg_finalize_init(instance, module);
}
;
const __TURBOPACK__default__export__ = __wbg_init;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=apps_readest-app_a0e5f77d._.js.map