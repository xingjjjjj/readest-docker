(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/packages/foliate-js/progress.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// assign a unique ID for each TOC item
__turbopack_context__.s([
    "SectionProgress",
    ()=>SectionProgress,
    "TOCProgress",
    ()=>TOCProgress
]);
const assignIDs = (toc)=>{
    let id = 0;
    const assignID = (item)=>{
        item.id = id++;
        if (item.subitems) for (const subitem of item.subitems)assignID(subitem);
    };
    for (const item of toc)assignID(item);
    return toc;
};
const flatten = (items)=>items.map((item)=>item.subitems?.length ? [
            item,
            flatten(item.subitems)
        ].flat() : item).flat();
class TOCProgress {
    async init({ toc, ids, splitHref, getFragment }) {
        assignIDs(toc);
        const items = flatten(toc);
        const grouped = new Map();
        for (const [i, item] of items.entries()){
            const [id, fragment] = await splitHref(item?.href) ?? [];
            const value = {
                fragment,
                item
            };
            if (grouped.has(id)) grouped.get(id).items.push(value);
            else grouped.set(id, {
                prev: items[i - 1],
                items: [
                    value
                ]
            });
        }
        const map = new Map();
        for (const [i, id] of ids.entries()){
            if (grouped.has(id)) map.set(id, grouped.get(id));
            else map.set(id, map.get(ids[i - 1]));
        }
        this.ids = ids;
        this.map = map;
        this.getFragment = getFragment;
    }
    getProgress(index, range) {
        if (!this.ids) return;
        const id = this.ids[index];
        const obj = this.map.get(id);
        if (!obj) return null;
        const { prev, items } = obj;
        if (!items) return prev;
        if (!range || items.length === 1 && !items[0].fragment) return items[0].item;
        const doc = range.startContainer.getRootNode();
        for (const [i, { fragment }] of items.entries()){
            const el = this.getFragment(doc, fragment);
            if (!el) continue;
            if (range.comparePoint(el, 0) > 0) return items[i - 1]?.item ?? prev;
        }
        return items[items.length - 1].item;
    }
}
class SectionProgress {
    constructor(sections, sizePerLoc, sizePerTimeUnit){
        this.sizes = sections.map((s)=>s.linear != 'no' && s.size > 0 ? s.size : 0);
        this.sizePerLoc = sizePerLoc;
        this.sizePerTimeUnit = sizePerTimeUnit;
        this.sizeTotal = this.sizes.reduce((a, b)=>a + b, 0);
        this.sectionFractions = this.#getSectionFractions();
    }
    #getSectionFractions() {
        const { sizeTotal } = this;
        const results = [
            0
        ];
        let sum = 0;
        for (const size of this.sizes)results.push((sum += size) / sizeTotal);
        return results;
    }
    // get progress given index of and fractions within a section
    getProgress(index, fractionInSection, pageFraction = 0) {
        const { sizes, sizePerLoc, sizePerTimeUnit, sizeTotal } = this;
        const sizeInSection = sizes[index] ?? 0;
        const sizeBefore = sizes.slice(0, index).reduce((a, b)=>a + b, 0);
        const size = sizeBefore + fractionInSection * sizeInSection;
        const nextSize = size + pageFraction * sizeInSection;
        const remainingTotal = sizeTotal - size;
        const remainingSection = (1 - fractionInSection) * sizeInSection;
        return {
            fraction: nextSize / sizeTotal,
            section: {
                current: index,
                total: sizes.length
            },
            location: {
                current: Math.floor(size / sizePerLoc),
                next: Math.floor(nextSize / sizePerLoc),
                total: Math.ceil(sizeTotal / sizePerLoc)
            },
            time: {
                section: remainingSection / sizePerTimeUnit,
                total: remainingTotal / sizePerTimeUnit
            }
        };
    }
    // the inverse of `getProgress`
    // get index of and fraction in section based on total fraction
    getSection(fraction) {
        if (fraction <= 0) return [
            0,
            0
        ];
        if (fraction >= 1) return [
            this.sizes.length - 1,
            1
        ];
        fraction = fraction + Number.EPSILON;
        const { sizeTotal } = this;
        let index = this.sectionFractions.findIndex((x)=>x > fraction) - 1;
        if (index < 0) return [
            0,
            0
        ];
        while(!this.sizes[index])index++;
        const fractionInSection = (fraction - this.sectionFractions[index]) / (this.sizes[index] / sizeTotal);
        return [
            index,
            fractionInSection
        ];
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/foliate-js/text-walker.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "textWalker",
    ()=>textWalker
]);
const walkRange = (range, walker)=>{
    const nodes = [];
    for(let node = walker.currentNode; node; node = walker.nextNode()){
        const compare = range.comparePoint(node, 0);
        if (compare === 0) nodes.push(node);
        else if (compare > 0) break;
    }
    return nodes;
};
const walkDocument = (_, walker)=>{
    const nodes = [];
    for(let node = walker.nextNode(); node; node = walker.nextNode())nodes.push(node);
    return nodes;
};
const filter = NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT | NodeFilter.SHOW_CDATA_SECTION;
const acceptNode = (node)=>{
    if (node.nodeType === 1) {
        const name = node.tagName.toLowerCase();
        if (name === 'script' || name === 'style') return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_SKIP;
    }
    return NodeFilter.FILTER_ACCEPT;
};
const textWalker = function*(x, func, filterFunc) {
    const root = x.commonAncestorContainer ?? x.body ?? x;
    const walker = document.createTreeWalker(root, filter, {
        acceptNode: filterFunc || acceptNode
    });
    const walk = x.commonAncestorContainer ? walkRange : walkDocument;
    const nodes = walk(x, walker);
    const strs = nodes.map((node)=>node.nodeValue ?? '');
    const makeRange = (startIndex, startOffset, endIndex, endOffset)=>{
        const range = document.createRange();
        range.setStart(nodes[startIndex], startOffset);
        range.setEnd(nodes[endIndex], endOffset);
        return range;
    };
    for (const match of func(strs, makeRange))yield match;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/foliate-js/view.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NotFoundError",
    ()=>NotFoundError,
    "ResponseError",
    ()=>ResponseError,
    "UnsupportedTypeError",
    ()=>UnsupportedTypeError,
    "View",
    ()=>View,
    "makeBook",
    ()=>makeBook
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$foliate$2d$js$2f$epubcfi$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/foliate-js/epubcfi.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$foliate$2d$js$2f$progress$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/foliate-js/progress.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$foliate$2d$js$2f$overlayer$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/foliate-js/overlayer.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$foliate$2d$js$2f$text$2d$walker$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/foliate-js/text-walker.js [client] (ecmascript)");
;
;
;
;
const SEARCH_PREFIX = 'foliate-search:';
const NOTE_PREFIX = 'foliate-note:';
const isZip = async (file)=>{
    const arr = new Uint8Array(await file.slice(0, 4).arrayBuffer());
    return arr[0] === 0x50 && arr[1] === 0x4b && arr[2] === 0x03 && arr[3] === 0x04;
};
const isPDF = async (file)=>{
    const arr = new Uint8Array(await file.slice(0, 5).arrayBuffer());
    return arr[0] === 0x25 && arr[1] === 0x50 && arr[2] === 0x44 && arr[3] === 0x46 && arr[4] === 0x2d;
};
const isCBZ = ({ name, type })=>type === 'application/vnd.comicbook+zip' || name.endsWith('.cbz');
const isFB2 = ({ name, type })=>type === 'application/x-fictionbook+xml' || name.endsWith('.fb2');
const isFBZ = ({ name, type })=>type === 'application/x-zip-compressed-fb2' || name.endsWith('.fb2.zip') || name.endsWith('.fbz');
const makeZipLoader = async (file)=>{
    const { configure, ZipReader, BlobReader, TextWriter, BlobWriter } = await __turbopack_context__.A("[project]/packages/foliate-js/vendor/zip.js [client] (ecmascript, async loader)");
    configure({
        useWebWorkers: false
    });
    const reader = new ZipReader(new BlobReader(file));
    const entries = await reader.getEntries();
    const map = new Map(entries.map((entry)=>[
            entry.filename,
            entry
        ]));
    const load = (f)=>(name, ...args)=>map.has(name) ? f(map.get(name), ...args) : null;
    const loadText = load((entry)=>entry.getData(new TextWriter()));
    const loadBlob = load((entry, type)=>entry.getData(new BlobWriter(type)));
    const getSize = (name)=>map.get(name)?.uncompressedSize ?? 0;
    return {
        entries,
        loadText,
        loadBlob,
        getSize
    };
};
const getFileEntries = async (entry)=>entry.isFile ? entry : (await Promise.all(Array.from(await new Promise((resolve, reject)=>entry.createReader().readEntries((entries)=>resolve(entries), (error)=>reject(error))), getFileEntries))).flat();
const makeDirectoryLoader = async (entry)=>{
    const entries = await getFileEntries(entry);
    const files = await Promise.all(entries.map((entry)=>new Promise((resolve, reject)=>entry.file((file)=>resolve([
                    file,
                    entry.fullPath
                ]), (error)=>reject(error)))));
    const map = new Map(files.map(([file, path])=>[
            path.replace(entry.fullPath + '/', ''),
            file
        ]));
    const decoder = new TextDecoder();
    const decode = (x)=>x ? decoder.decode(x) : null;
    const getBuffer = (name)=>map.get(name)?.arrayBuffer() ?? null;
    const loadText = async (name)=>decode(await getBuffer(name));
    const loadBlob = (name)=>map.get(name);
    const getSize = (name)=>map.get(name)?.size ?? 0;
    return {
        loadText,
        loadBlob,
        getSize
    };
};
class ResponseError extends Error {
}
class NotFoundError extends Error {
}
class UnsupportedTypeError extends Error {
}
const fetchFile = async (url)=>{
    const res = await fetch(url);
    if (!res.ok) throw new ResponseError(`${res.status} ${res.statusText}`, {
        cause: res
    });
    return new File([
        await res.blob()
    ], new URL(res.url).pathname);
};
const makeBook = async (file)=>{
    if (typeof file === 'string') file = await fetchFile(file);
    let book;
    if (file.isDirectory) {
        const loader = await makeDirectoryLoader(file);
        const { EPUB } = await __turbopack_context__.A("[project]/packages/foliate-js/epub.js [client] (ecmascript, async loader)");
        book = await new EPUB(loader).init();
    } else if (!file.size) throw new NotFoundError('File not found');
    else if (await isZip(file)) {
        const loader = await makeZipLoader(file);
        if (isCBZ(file)) {
            const { makeComicBook } = await __turbopack_context__.A("[project]/packages/foliate-js/comic-book.js [client] (ecmascript, async loader)");
            book = makeComicBook(loader, file);
        } else if (isFBZ(file)) {
            const { makeFB2 } = await __turbopack_context__.A("[project]/packages/foliate-js/fb2.js [client] (ecmascript, async loader)");
            const { entries } = loader;
            const entry = entries.find((entry)=>entry.filename.endsWith('.fb2'));
            const blob = await loader.loadBlob((entry ?? entries[0]).filename);
            book = await makeFB2(blob);
        } else {
            const { EPUB } = await __turbopack_context__.A("[project]/packages/foliate-js/epub.js [client] (ecmascript, async loader)");
            book = await new EPUB(loader).init();
        }
    } else if (await isPDF(file)) {
        const { makePDF } = await __turbopack_context__.A("[project]/packages/foliate-js/pdf.js [client] (ecmascript, async loader)");
        book = await makePDF(file);
    } else {
        const { isMOBI, MOBI } = await __turbopack_context__.A("[project]/packages/foliate-js/mobi.js [client] (ecmascript, async loader)");
        if (await isMOBI(file)) {
            const fflate = await __turbopack_context__.A("[project]/packages/foliate-js/vendor/fflate.js [client] (ecmascript, async loader)");
            book = await new MOBI({
                unzlib: fflate.unzlibSync
            }).open(file);
        } else if (isFB2(file)) {
            const { makeFB2 } = await __turbopack_context__.A("[project]/packages/foliate-js/fb2.js [client] (ecmascript, async loader)");
            book = await makeFB2(file);
        }
    }
    if (!book) throw new UnsupportedTypeError('File type not supported');
    return book;
};
class CursorAutohider {
    #timeout;
    #el;
    #check;
    #state;
    constructor(el, check, state = {}){
        this.#el = el;
        this.#check = check;
        this.#state = state;
        if (this.#state.hidden) this.hide();
        this.#el.addEventListener('mousemove', ({ screenX, screenY })=>{
            // check if it actually moved
            if (screenX === this.#state.x && screenY === this.#state.y) return;
            this.#state.x = screenX, this.#state.y = screenY;
            this.show();
            if (this.#timeout) clearTimeout(this.#timeout);
            if (check()) this.#timeout = setTimeout(this.hide.bind(this), 1000);
        }, false);
    }
    cloneFor(el) {
        return new CursorAutohider(el, this.#check, this.#state);
    }
    hide() {
        this.#el.style.cursor = 'none';
        this.#state.hidden = true;
    }
    show() {
        this.#el.style.removeProperty('cursor');
        this.#state.hidden = false;
    }
}
class History extends EventTarget {
    #arr = [];
    #index = -1;
    pushState(x) {
        const last = this.#arr[this.#index];
        if (last === x || last?.fraction && last.fraction === x.fraction) return;
        this.#arr[++this.#index] = x;
        this.#arr.length = this.#index + 1;
        this.dispatchEvent(new Event('index-change'));
    }
    replaceState(x) {
        const index = this.#index;
        this.#arr[index] = x;
    }
    back() {
        const index = this.#index;
        if (index <= 0) return;
        const detail = {
            state: this.#arr[index - 1]
        };
        this.#index = index - 1;
        this.dispatchEvent(new CustomEvent('popstate', {
            detail
        }));
        this.dispatchEvent(new Event('index-change'));
    }
    forward() {
        const index = this.#index;
        if (index >= this.#arr.length - 1) return;
        const detail = {
            state: this.#arr[index + 1]
        };
        this.#index = index + 1;
        this.dispatchEvent(new CustomEvent('popstate', {
            detail
        }));
        this.dispatchEvent(new Event('index-change'));
    }
    get canGoBack() {
        return this.#index > 0;
    }
    get canGoForward() {
        return this.#index < this.#arr.length - 1;
    }
    clear() {
        this.#arr = [];
        this.#index = -1;
    }
}
const languageInfo = (lang)=>{
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
class View extends HTMLElement {
    #root = this.attachShadow({
        mode: 'open'
    });
    #sectionProgress;
    #tocProgress;
    #pageProgress;
    #searchResults = new Map();
    #cursorAutohider = new CursorAutohider(this, ()=>this.hasAttribute('autohide-cursor'));
    isFixedLayout = false;
    lastLocation;
    history = new History();
    constructor(){
        super();
        this.history.addEventListener('popstate', ({ detail })=>{
            const resolved = this.resolveNavigation(detail.state);
            this.renderer.goTo(resolved);
        });
    }
    async open(book) {
        if (typeof book === 'string' || typeof book.arrayBuffer === 'function' || book.isDirectory) book = await makeBook(book);
        this.book = book;
        this.language = languageInfo(book.metadata?.language);
        if (book.splitTOCHref && book.getTOCFragment) {
            const ids = book.sections.map((s)=>s.id);
            this.#sectionProgress = new __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$foliate$2d$js$2f$progress$2e$js__$5b$client$5d$__$28$ecmascript$29$__["SectionProgress"](book.sections, 1500, 1600);
            const splitHref = book.splitTOCHref.bind(book);
            const getFragment = book.getTOCFragment.bind(book);
            this.#tocProgress = new __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$foliate$2d$js$2f$progress$2e$js__$5b$client$5d$__$28$ecmascript$29$__["TOCProgress"]();
            await this.#tocProgress.init({
                toc: book.toc ?? [],
                ids,
                splitHref,
                getFragment
            });
            this.#pageProgress = new __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$foliate$2d$js$2f$progress$2e$js__$5b$client$5d$__$28$ecmascript$29$__["TOCProgress"]();
            await this.#pageProgress.init({
                toc: book.pageList ?? [],
                ids,
                splitHref,
                getFragment
            });
        }
        this.isFixedLayout = this.book.rendition?.layout === 'pre-paginated';
        if (this.isFixedLayout) {
            await __turbopack_context__.A("[project]/packages/foliate-js/fixed-layout.js [client] (ecmascript, async loader)");
            this.renderer = document.createElement('foliate-fxl');
        } else {
            await __turbopack_context__.A("[project]/packages/foliate-js/paginator.js [client] (ecmascript, async loader)");
            this.renderer = document.createElement('foliate-paginator');
        }
        this.renderer.setAttribute('exportparts', 'head,foot,filter,container');
        this.renderer.addEventListener('load', (e)=>this.#onLoad(e.detail));
        this.renderer.addEventListener('relocate', (e)=>this.#onRelocate(e.detail));
        this.renderer.addEventListener('create-overlayer', (e)=>e.detail.attach(this.#createOverlayer(e.detail)));
        this.renderer.open(book);
        this.#root.append(this.renderer);
        if (book.sections.some((section)=>section.mediaOverlay)) {
            const activeClass = book.media.activeClass;
            const playbackActiveClass = book.media.playbackActiveClass;
            this.mediaOverlay = book.getMediaOverlay();
            let lastActive;
            this.mediaOverlay.addEventListener('highlight', (e)=>{
                const resolved = this.resolveNavigation(e.detail.text);
                this.renderer.goTo(resolved).then(()=>{
                    const { doc } = this.renderer.getContents().find((x)=>x.index = resolved.index);
                    const el = resolved.anchor(doc);
                    el.classList.add(activeClass);
                    if (playbackActiveClass) el.ownerDocument.documentElement.classList.add(playbackActiveClass);
                    lastActive = new WeakRef(el);
                });
            });
            this.mediaOverlay.addEventListener('unhighlight', ()=>{
                const el = lastActive?.deref();
                if (el) {
                    el.classList.remove(activeClass);
                    if (playbackActiveClass) el.ownerDocument.documentElement.classList.remove(playbackActiveClass);
                }
            });
        }
    }
    close() {
        this.renderer?.destroy();
        this.renderer?.remove();
        this.#sectionProgress = null;
        this.#tocProgress = null;
        this.#pageProgress = null;
        this.#searchResults = new Map();
        this.lastLocation = null;
        this.history.clear();
        this.tts = null;
        this.mediaOverlay = null;
    }
    goToTextStart() {
        return this.goTo(this.book.landmarks?.find((m)=>m.type.includes('bodymatter') || m.type.includes('text'))?.href ?? this.book.sections.findIndex((s)=>s.linear !== 'no'));
    }
    async init({ lastLocation, showTextStart }) {
        const resolved = lastLocation ? this.resolveNavigation(lastLocation) : null;
        if (resolved) {
            await this.renderer.goTo(resolved);
            this.history.pushState(lastLocation);
        } else if (showTextStart) await this.goToTextStart();
        else {
            this.history.pushState(0);
            await this.next();
        }
    }
    #emit(name, detail, cancelable) {
        return this.dispatchEvent(new CustomEvent(name, {
            detail,
            cancelable
        }));
    }
    #onRelocate({ reason, range, index, fraction, size }) {
        const progress = this.#sectionProgress?.getProgress(index, fraction, size) ?? {};
        const tocItem = this.#tocProgress?.getProgress(index, range);
        const pageItem = this.#pageProgress?.getProgress(index, range);
        const cfi = this.getCFI(index, range);
        this.lastLocation = {
            ...progress,
            tocItem,
            pageItem,
            cfi,
            range
        };
        if (reason === 'snap' || reason === 'page' || reason === 'scroll') this.history.replaceState(cfi);
        this.#emit('relocate', this.lastLocation);
    }
    #onLoad({ doc, index }) {
        // set language and dir if not already set
        doc.documentElement.lang ||= this.language.canonical ?? '';
        if (!this.language.isCJK) doc.documentElement.dir ||= this.language.direction ?? '';
        this.#handleLinks(doc, index);
        this.#cursorAutohider.cloneFor(doc.documentElement);
        this.#emit('load', {
            doc,
            index
        });
    }
    #handleLinks(doc, index) {
        const { book } = this;
        const section = book.sections[index];
        doc.addEventListener('click', (e)=>{
            const a = e.target.closest('a[href]');
            if (!a) return;
            e.preventDefault();
            const href_ = a.getAttribute('href');
            const href = section?.resolveHref?.(href_) ?? href_;
            if (book?.isExternal?.(href)) Promise.resolve(this.#emit('external-link', {
                a,
                href
            }, true)).then((x)=>x ? globalThis.open(href, '_blank') : null).catch((e)=>console.error(e));
            else {
                let internalHref = href;
                if (!book.resolveHref(href)) {
                    const hashIndex = href_.indexOf('#');
                    if (hashIndex >= 0) {
                        const hash = href_.slice(hashIndex);
                        internalHref = section?.resolveHref?.(hash) ?? href;
                    }
                }
                Promise.resolve(this.#emit('link', {
                    a,
                    href: internalHref
                }, true)).then((x)=>x ? this.goTo(internalHref) : null).catch((e)=>console.error(e));
            }
        });
    }
    async addAnnotation(annotation, remove) {
        const { value } = annotation;
        if (value.startsWith(SEARCH_PREFIX)) {
            const cfi = value.replace(SEARCH_PREFIX, '');
            const { index, anchor } = await this.resolveNavigation(cfi);
            const obj = this.#getOverlayer(index);
            if (obj) {
                const { overlayer, doc } = obj;
                if (remove) {
                    overlayer.remove(value);
                    return;
                }
                const range = doc ? anchor(doc) : anchor;
                overlayer.add(value, range, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$foliate$2d$js$2f$overlayer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Overlayer"].outline);
            }
            return;
        } else if (value.startsWith(NOTE_PREFIX)) {
            const cfi = value.replace(NOTE_PREFIX, '');
            const { index, anchor } = await this.resolveNavigation(cfi);
            const obj = this.#getOverlayer(index);
            if (obj) {
                const { overlayer, doc } = obj;
                if (remove) {
                    overlayer.remove(value);
                    return;
                }
                const range = doc ? anchor(doc) : anchor;
                const draw = (func, opts)=>overlayer.add(value, range, func, opts);
                this.#emit('draw-annotation', {
                    draw,
                    annotation,
                    doc,
                    range
                });
            }
            return;
        }
        const { index, anchor } = await this.resolveNavigation(value);
        const obj = this.#getOverlayer(index);
        if (obj) {
            const { overlayer, doc } = obj;
            overlayer.remove(value);
            if (!remove) {
                const range = doc ? anchor(doc) : anchor;
                const draw = (func, opts)=>overlayer.add(value, range, func, opts);
                this.#emit('draw-annotation', {
                    draw,
                    annotation,
                    doc,
                    range
                });
            }
        }
        const label = this.#tocProgress.getProgress(index)?.label ?? '';
        return {
            index,
            label
        };
    }
    deleteAnnotation(annotation) {
        return this.addAnnotation(annotation, true);
    }
    #getOverlayer(index) {
        return this.renderer.getContents().find((x)=>x.index === index && x.overlayer);
    }
    #createOverlayer({ doc, index }) {
        const overlayer = new __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$foliate$2d$js$2f$overlayer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Overlayer"](doc);
        doc.addEventListener('click', (e)=>{
            const [value, range, rect] = overlayer.hitTest(e);
            if (value && !value.startsWith(SEARCH_PREFIX)) {
                this.#emit('show-annotation', {
                    value,
                    index,
                    range,
                    rect
                });
            }
        }, false);
        let lastHitTestTime = 0;
        const THROTTLE_MS = 200;
        const isAndroid = /Android/i.test(navigator.userAgent);
        doc.addEventListener('mousemove', (e)=>{
            if (isAndroid) return;
            const now = performance.now();
            if (now - lastHitTestTime < THROTTLE_MS) return;
            lastHitTestTime = now;
            const [value] = overlayer.hitTest(e);
            if (value && !value.startsWith(SEARCH_PREFIX)) {
                doc.body.style.cursor = 'pointer';
            } else {
                doc.body.style.cursor = '';
            }
        });
        const list = this.#searchResults.get(index);
        if (list) for (const item of list)this.addAnnotation(item);
        this.#emit('create-overlay', {
            index
        });
        return overlayer;
    }
    async showAnnotation(annotation) {
        const { value } = annotation;
        const resolved = await this.goTo(value);
        if (resolved) {
            const { index, anchor } = resolved;
            const { doc } = this.#getOverlayer(index);
            const range = anchor(doc);
            this.#emit('show-annotation', {
                value,
                index,
                range
            });
        }
    }
    getCFI(index, range) {
        const baseCFI = this.book.sections[index].cfi ?? __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$foliate$2d$js$2f$epubcfi$2e$js__$5b$client$5d$__$28$ecmascript$29$__["fake"].fromIndex(index);
        if (!range) return baseCFI;
        return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$foliate$2d$js$2f$epubcfi$2e$js__$5b$client$5d$__$28$ecmascript$29$__["joinIndir"](baseCFI, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$foliate$2d$js$2f$epubcfi$2e$js__$5b$client$5d$__$28$ecmascript$29$__["fromRange"](range));
    }
    resolveCFI(cfi) {
        if (this.book.resolveCFI) return this.book.resolveCFI(cfi);
        else {
            const parts = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$foliate$2d$js$2f$epubcfi$2e$js__$5b$client$5d$__$28$ecmascript$29$__["parse"](cfi);
            const index = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$foliate$2d$js$2f$epubcfi$2e$js__$5b$client$5d$__$28$ecmascript$29$__["fake"].toIndex((parts.parent ?? parts).shift());
            const anchor = (doc)=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$foliate$2d$js$2f$epubcfi$2e$js__$5b$client$5d$__$28$ecmascript$29$__["toRange"](doc, parts);
            return {
                index,
                anchor
            };
        }
    }
    resolveNavigation(target) {
        try {
            if (typeof target === 'number') return {
                index: target
            };
            if (typeof target.fraction === 'number') {
                const [index, anchor] = this.#sectionProgress.getSection(target.fraction);
                return {
                    index,
                    anchor
                };
            }
            if (__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$foliate$2d$js$2f$epubcfi$2e$js__$5b$client$5d$__$28$ecmascript$29$__["isCFI"].test(target)) return this.resolveCFI(target);
            return this.book.resolveHref(target);
        } catch (e) {
            console.error(e);
            console.error(`Could not resolve target ${target}`);
        }
    }
    async goTo(target) {
        const resolved = this.resolveNavigation(target);
        try {
            await this.renderer.goTo(resolved);
            this.history.pushState(target);
            return resolved;
        } catch (e) {
            console.error(e);
            console.error(`Could not go to ${target}`);
        }
    }
    async goToFraction(frac) {
        const [index, anchor] = this.#sectionProgress.getSection(frac);
        await this.renderer.goTo({
            index,
            anchor
        });
        this.history.pushState({
            fraction: frac
        });
    }
    async select(target) {
        try {
            const obj = await this.resolveNavigation(target);
            await this.renderer.goTo({
                ...obj,
                select: true
            });
            this.history.pushState(target);
        } catch (e) {
            console.error(e);
            console.error(`Could not go to ${target}`);
        }
    }
    deselect() {
        for (const { doc } of this.renderer.getContents())doc.defaultView.getSelection().removeAllRanges();
    }
    getSectionFractions() {
        return (this.#sectionProgress?.sectionFractions ?? []).map((x)=>x + Number.EPSILON);
    }
    getProgressOf(index, range) {
        const tocItem = this.#tocProgress?.getProgress(index, range);
        const pageItem = this.#pageProgress?.getProgress(index, range);
        return {
            tocItem,
            pageItem
        };
    }
    async getTOCItemOf(target) {
        try {
            const { index, anchor } = await this.resolveNavigation(target);
            const doc = await this.book.sections[index].createDocument();
            const frag = anchor(doc);
            const isRange = frag instanceof Range;
            const range = isRange ? frag : doc.createRange();
            if (!isRange) range.selectNodeContents(frag);
            return this.#tocProgress.getProgress(index, range);
        } catch (e) {
            console.error(e);
            console.error(`Could not get ${target}`);
        }
    }
    async prev(distance) {
        await this.renderer.prev(distance);
    }
    async next(distance) {
        await this.renderer.next(distance);
    }
    async pan(dx, dy) {
        await this.renderer.pan(dx, dy);
    }
    isOverflowX() {
        return this.renderer.isOverflowX;
    }
    isOverflowY() {
        return this.renderer.isOverflowY;
    }
    goLeft() {
        return this.book.dir === 'rtl' ? this.next() : this.prev();
    }
    goRight() {
        return this.book.dir === 'rtl' ? this.prev() : this.next();
    }
    async *#searchSection(matcher, query, index) {
        const doc = await this.book.sections[index].createDocument();
        for (const { range, excerpt } of matcher(doc, query))yield {
            cfi: this.getCFI(index, range),
            excerpt
        };
    }
    async *#searchBook(matcher, query) {
        const { sections } = this.book;
        for (const [index, { createDocument }] of sections.entries()){
            if (!createDocument) continue;
            const doc = await createDocument();
            const subitems = Array.from(matcher(doc, query), ({ range, excerpt })=>({
                    cfi: this.getCFI(index, range),
                    excerpt
                }));
            const progress = (index + 1) / sections.length;
            yield {
                progress
            };
            if (subitems.length) yield {
                index,
                subitems
            };
        }
    }
    async *search(opts) {
        this.clearSearch();
        const { searchMatcher } = await __turbopack_context__.A("[project]/packages/foliate-js/search.js [client] (ecmascript, async loader)");
        const { sections } = this.book;
        const { query, index, results } = opts;
        const matcher = searchMatcher(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$foliate$2d$js$2f$text$2d$walker$2e$js__$5b$client$5d$__$28$ecmascript$29$__["textWalker"], {
            defaultLocale: this.language,
            ...opts
        });
        const iter = results?.length ? async function*() {
            for (const result of results){
                if (result.subitems) {
                    const progress = (result.index + 1) / sections.length;
                    yield {
                        progress
                    };
                    yield {
                        index: result.index,
                        subitems: result.subitems
                    };
                } else {
                    yield {
                        cfi: result.cfi,
                        excerpt: result.excerpt
                    };
                }
            }
        }() : index != null ? this.#searchSection(matcher, query, index) : this.#searchBook(matcher, query);
        const list = [];
        this.#searchResults.set(index, list);
        for await (const result of iter){
            if (result.subitems) {
                const list = result.subitems.map(({ cfi })=>({
                        value: SEARCH_PREFIX + cfi
                    }));
                this.#searchResults.set(result.index, list);
                for (const item of list)this.addAnnotation(item);
                yield {
                    index: result.index,
                    label: this.#tocProgress.getProgress(result.index)?.label ?? '',
                    subitems: result.subitems
                };
            } else {
                if (result.cfi) {
                    const item = {
                        value: SEARCH_PREFIX + result.cfi
                    };
                    list.push(item);
                    this.addAnnotation(item);
                }
                yield result;
            }
        }
        yield 'done';
    }
    clearSearch() {
        for (const list of this.#searchResults.values())for (const item of list)this.deleteAnnotation(item);
        this.#searchResults.clear();
    }
    async initTTS(granularity = 'word', nodeFilter, highlighter) {
        const doc = this.renderer.getContents()[0].doc;
        if (this.tts && this.tts.doc === doc) return;
        const { TTS } = await __turbopack_context__.A("[project]/packages/foliate-js/tts.js [client] (ecmascript, async loader)");
        this.tts = new TTS(doc, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$foliate$2d$js$2f$text$2d$walker$2e$js__$5b$client$5d$__$28$ecmascript$29$__["textWalker"], nodeFilter, highlighter || ((range)=>this.renderer.scrollToAnchor(range, true)), granularity);
    }
    startMediaOverlay() {
        const { index } = this.renderer.getContents()[0];
        return this.mediaOverlay.start(index);
    }
}
customElements.define('foliate-view', View);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=packages_foliate-js_fa2849b2._.js.map