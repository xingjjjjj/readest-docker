module.exports = [
"[project]/packages/foliate-js/fixed-layout.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FixedLayout",
    ()=>FixedLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$construct$2d$style$2d$sheets$2d$polyfill$40$3$2e$1$2e$0$2f$node_modules$2f$construct$2d$style$2d$sheets$2d$polyfill$2f$dist$2f$adoptedStyleSheets$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/construct-style-sheets-polyfill@3.1.0/node_modules/construct-style-sheets-polyfill/dist/adoptedStyleSheets.js [ssr] (ecmascript)");
;
const parseViewport = (str)=>str?.split(/[,;\s]/) // NOTE: technically, only the comma is valid
    ?.filter((x)=>x)?.map((x)=>x.split('=').map((x)=>x.trim()));
const getViewport = (doc, viewport)=>{
    // use `viewBox` for SVG
    if (doc.documentElement.localName === 'svg') {
        const [, , width, height] = doc.documentElement.getAttribute('viewBox')?.split(/\s/) ?? [];
        return {
            width,
            height
        };
    }
    // get `viewport` `meta` element
    const meta = parseViewport(doc.querySelector('meta[name="viewport"]')?.getAttribute('content'));
    if (meta) return Object.fromEntries(meta);
    // fallback to book's viewport
    if (typeof viewport === 'string') return parseViewport(viewport);
    if (viewport?.width && viewport.height) return viewport;
    // if no viewport (possibly with image directly in spine), get image size
    const img = doc.querySelector('img');
    if (img) return {
        width: img.naturalWidth,
        height: img.naturalHeight
    };
    // just show *something*, i guess...
    console.warn(new Error('Missing viewport properties'));
    return {
        width: 1000,
        height: 2000
    };
};
class FixedLayout extends HTMLElement {
    static observedAttributes = [
        'zoom',
        'scale-factor',
        'spread'
    ];
    #root = this.attachShadow({
        mode: 'open'
    });
    #observer = new ResizeObserver(()=>this.#render());
    #spreads;
    #index = -1;
    defaultViewport;
    spread;
    #portrait = false;
    #left;
    #right;
    #center;
    #side;
    #zoom;
    #scaleFactor = 1.0;
    #totalScaleFactor = 1.0;
    #scrollLocked = false;
    #isOverflowX = false;
    #isOverflowY = false;
    #preloadCache = new Map();
    #prerenderedSpreads = new Map();
    #spreadAccessTime = new Map();
    #maxConcurrentPreloads = 1;
    #numPrerenderedSpreads = 1;
    #maxCachedSpreads = 2;
    #preloadQueue = [];
    #activePreloads = 0;
    constructor(){
        super();
        const sheet = new CSSStyleSheet();
        this.#root.adoptedStyleSheets = [
            sheet
        ];
        sheet.replaceSync(`:host {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            overflow: auto;
        }
        @supports (justify-content: safe center) {
          :host {
            justify-content: safe center;
          }
        }`);
        this.#observer.observe(this);
    }
    attributeChangedCallback(name, _, value) {
        switch(name){
            case 'zoom':
                this.#zoom = value !== 'fit-width' && value !== 'fit-page' ? parseFloat(value) : value;
                this.#render();
                break;
            case 'scale-factor':
                this.#scaleFactor = parseFloat(value) / 100;
                this.#render();
                break;
            case 'spread':
                this.#respread(value);
                break;
        }
    }
    async #createFrame({ index, src: srcOption, detached = false }) {
        const srcOptionIsString = typeof srcOption === 'string';
        const src = srcOptionIsString ? srcOption : srcOption?.src;
        const data = srcOptionIsString ? null : srcOption?.data;
        const onZoom = srcOptionIsString ? null : srcOption?.onZoom;
        const element = document.createElement('div');
        element.setAttribute('dir', 'ltr');
        const iframe = document.createElement('iframe');
        element.append(iframe);
        Object.assign(iframe.style, {
            border: '0',
            display: 'none',
            overflow: 'hidden'
        });
        // `allow-scripts` is needed for events because of WebKit bug
        // https://bugs.webkit.org/show_bug.cgi?id=218086
        iframe.setAttribute('sandbox', 'allow-same-origin allow-scripts');
        iframe.setAttribute('scrolling', 'no');
        iframe.setAttribute('part', 'filter');
        this.#root.append(element);
        if (detached) {
            Object.assign(element.style, {
                position: 'absolute',
                visibility: 'hidden',
                pointerEvents: 'none'
            });
        }
        if (!src) return {
            blank: true,
            element,
            iframe
        };
        return new Promise((resolve)=>{
            iframe.addEventListener('load', ()=>{
                const doc = iframe.contentDocument;
                this.dispatchEvent(new CustomEvent('load', {
                    detail: {
                        doc,
                        index
                    }
                }));
                const { width, height } = getViewport(doc, this.defaultViewport);
                resolve({
                    element,
                    iframe,
                    width: parseFloat(width),
                    height: parseFloat(height),
                    onZoom,
                    detached
                });
            }, {
                once: true
            });
            if (data) {
                iframe.srcdoc = data;
            } else {
                iframe.src = src;
            }
        });
    }
    #render(side = this.#side) {
        if (!side) return;
        const left = this.#left ?? {};
        const right = this.#center ?? this.#right ?? {};
        const target = side === 'left' ? left : right;
        const { width, height } = this.getBoundingClientRect();
        // for unfolded devices with slightly taller height than width also use landscape layout
        const portrait = this.spread !== 'both' && this.spread !== 'portrait' && height > width * 1.2;
        this.#portrait = portrait;
        const blankWidth = left.width ?? right.width ?? 0;
        const blankHeight = left.height ?? right.height ?? 0;
        let scale = typeof this.#zoom === 'number' && !isNaN(this.#zoom) ? this.#zoom : (this.#zoom === 'fit-width' ? portrait || this.#center ? width / (target.width ?? blankWidth) : width / ((left.width ?? blankWidth) + (right.width ?? blankWidth)) : portrait || this.#center ? Math.min(width / (target.width ?? blankWidth), height / (target.height ?? blankHeight)) : Math.min(width / ((left.width ?? blankWidth) + (right.width ?? blankWidth)), height / Math.max(left.height ?? blankHeight, right.height ?? blankHeight))) || 1;
        scale *= this.#scaleFactor;
        this.#totalScaleFactor = scale;
        const transform = ({ frame, styles })=>{
            let { element, iframe, width, height, blank, onZoom } = frame;
            if (!iframe) return;
            if (onZoom) onZoom({
                doc: frame.iframe.contentDocument,
                scale
            });
            const iframeScale = onZoom ? scale : 1;
            const zoomedOut = this.#scaleFactor < 1.0;
            Object.assign(iframe.style, {
                width: `${width * iframeScale}px`,
                height: `${height * iframeScale}px`,
                transform: onZoom ? 'none' : `scale(${scale})`,
                transformOrigin: 'top left',
                display: blank ? 'none' : 'block'
            });
            Object.assign(element.style, {
                width: `${(width ?? blankWidth) * scale}px`,
                height: `${(height ?? blankHeight) * scale}px`,
                flexShrink: '0',
                display: zoomedOut ? 'flex' : 'block',
                marginBlock: zoomedOut ? undefined : 'auto',
                alignItems: zoomedOut ? 'center' : undefined,
                justifyContent: zoomedOut ? 'center' : undefined,
                ...styles
            });
            if (portrait && frame !== target) {
                element.style.display = 'none';
            }
            const container = element.parentNode.host;
            const containerWidth = container.clientWidth;
            const containerHeight = container.clientHeight;
            container.scrollLeft = (element.clientWidth - containerWidth) / 2;
            return {
                width: element.clientWidth,
                height: element.clientHeight,
                containerWidth,
                containerHeight
            };
        };
        if (this.#center) {
            const dimensions = transform({
                frame: this.#center,
                styles: {
                    marginInline: 'auto'
                }
            });
            const { width, height, containerWidth, containerHeight } = dimensions;
            this.#isOverflowX = width > containerWidth;
            this.#isOverflowY = height > containerHeight;
        } else {
            const leftDimensions = transform({
                frame: left,
                styles: {
                    marginInlineStart: 'auto'
                }
            });
            const rightDimensions = transform({
                frame: right,
                styles: {
                    marginInlineEnd: 'auto'
                }
            });
            const { width: leftWidth, height: leftHeight, containerWidth, containerHeight } = leftDimensions;
            const { width: rightWidth, height: rightHeight } = rightDimensions;
            this.#isOverflowX = leftWidth + rightWidth > containerWidth;
            this.#isOverflowY = Math.max(leftHeight, rightHeight) > containerHeight;
        }
    }
    async #showSpread({ left, right, center, side, spreadIndex }) {
        this.#left = null;
        this.#right = null;
        this.#center = null;
        const cacheKey = spreadIndex !== undefined ? `spread-${spreadIndex}` : null;
        const prerendered = cacheKey ? this.#prerenderedSpreads.get(cacheKey) : null;
        if (prerendered) {
            this.#spreadAccessTime.set(cacheKey, Date.now());
            if (prerendered.center) {
                this.#center = prerendered.center;
            } else {
                this.#left = prerendered.left;
                this.#right = prerendered.right;
            }
        } else {
            if (center) {
                this.#center = await this.#createFrame(center);
                if (cacheKey) {
                    this.#prerenderedSpreads.set(cacheKey, {
                        center: this.#center
                    });
                    this.#spreadAccessTime.set(cacheKey, Date.now());
                }
            } else {
                this.#left = await this.#createFrame(left);
                this.#right = await this.#createFrame(right);
                if (cacheKey) {
                    this.#prerenderedSpreads.set(cacheKey, {
                        left: this.#left,
                        right: this.#right
                    });
                    this.#spreadAccessTime.set(cacheKey, Date.now());
                }
            }
        }
        this.#side = center ? 'center' : this.#left.blank ? 'right' : this.#right.blank ? 'left' : side;
        const visibleFrames = center ? [
            this.#center?.element
        ] : [
            this.#left?.element,
            this.#right?.element
        ];
        Array.from(this.#root.children).forEach((child)=>{
            const isVisible = visibleFrames.includes(child);
            Object.assign(child.style, {
                position: isVisible ? 'relative' : 'absolute',
                visibility: isVisible ? 'visible' : 'hidden',
                pointerEvents: isVisible ? 'auto' : 'none'
            });
        });
        this.#render();
    }
    #goLeft() {
        if (this.#center || this.#left?.blank) return;
        if (this.#portrait && this.#left?.element?.style?.display === 'none') {
            this.#side = 'left';
            this.#render();
            this.#reportLocation('page');
            return true;
        }
    }
    #goRight() {
        if (this.#center || this.#right?.blank) return;
        if (this.#portrait && this.#right?.element?.style?.display === 'none') {
            this.#side = 'right';
            this.#render();
            this.#reportLocation('page');
            return true;
        }
    }
    open(book) {
        this.book = book;
        this.defaultViewport = book.rendition?.viewport;
        this.rtl = book.dir === 'rtl';
        this.#spread();
    }
    #spread(mode) {
        const book = this.book;
        const { rendition } = book;
        const rtl = this.rtl;
        const ltr = !rtl;
        this.spread = mode || rendition?.spread;
        if (this.spread === 'none') this.#spreads = book.sections.map((section)=>({
                center: section
            }));
        else this.#spreads = book.sections.reduce((arr, section, i)=>{
            const last = arr[arr.length - 1];
            const { pageSpread } = section;
            const newSpread = ()=>{
                const spread = {};
                arr.push(spread);
                return spread;
            };
            if (pageSpread === 'center') {
                const spread = last.left || last.right ? newSpread() : last;
                spread.center = section;
            } else if (pageSpread === 'left') {
                const spread = last.center || last.left || ltr && i ? newSpread() : last;
                spread.left = section;
            } else if (pageSpread === 'right') {
                const spread = last.center || last.right || rtl && i ? newSpread() : last;
                spread.right = section;
            } else if (ltr) {
                if (last.center || last.right) newSpread().left = section;
                else if (last.left || !i) last.right = section;
                else last.left = section;
            } else {
                if (last.center || last.left) newSpread().right = section;
                else if (last.right || !i) last.left = section;
                else last.right = section;
            }
            return arr;
        }, [
            {}
        ]);
    }
    #respread(spreadMode) {
        if (this.#index === -1) return;
        const section = this.book.sections[this.index];
        this.#spread(spreadMode);
        const { index } = this.getSpreadOf(section);
        this.#index = -1;
        this.#preloadCache.clear();
        for (const frames of this.#prerenderedSpreads.values()){
            if (frames.center) {
                frames.center.element?.remove();
            } else {
                frames.left?.element?.remove();
                frames.right?.element?.remove();
            }
        }
        this.#prerenderedSpreads.clear();
        this.#spreadAccessTime.clear();
        this.goToSpread(index, this.rtl ? 'right' : 'left', 'page');
    }
    get index() {
        const spread = this.#spreads[this.#index];
        const section = spread?.center ?? (this.#side === 'left' ? spread.left ?? spread.right : spread.right ?? spread.left);
        return this.book.sections.indexOf(section);
    }
    get scrollLocked() {
        return this.#scrollLocked;
    }
    set scrollLocked(value) {
        this.#scrollLocked = value;
    }
    get isOverflowX() {
        return this.#isOverflowX;
    }
    get isOverflowY() {
        return this.#isOverflowY;
    }
    #reportLocation(reason) {
        this.dispatchEvent(new CustomEvent('relocate', {
            detail: {
                reason,
                range: null,
                index: this.index,
                fraction: 0,
                size: 1
            }
        }));
    }
    getSpreadOf(section) {
        const spreads = this.#spreads;
        for(let index = 0; index < spreads.length; index++){
            const { left, right, center } = spreads[index];
            if (left === section) return {
                index,
                side: 'left'
            };
            if (right === section) return {
                index,
                side: 'right'
            };
            if (center === section) return {
                index,
                side: 'center'
            };
        }
    }
    async goToSpread(index, side, reason) {
        if (index < 0 || index > this.#spreads.length - 1) return;
        if (index === this.#index) {
            this.#render(side);
            return;
        }
        this.#index = index;
        const spread = this.#spreads[index];
        const cacheKey = `spread-${index}`;
        const cached = this.#preloadCache.get(cacheKey);
        if (cached && cached !== 'loading') {
            if (cached.center) {
                const sectionIndex = this.book.sections.indexOf(spread.center);
                await this.#showSpread({
                    center: {
                        index: sectionIndex,
                        src: cached.center
                    },
                    spreadIndex: index,
                    side
                });
            } else {
                const indexL = this.book.sections.indexOf(spread.left);
                const indexR = this.book.sections.indexOf(spread.right);
                const left = {
                    index: indexL,
                    src: cached.left
                };
                const right = {
                    index: indexR,
                    src: cached.right
                };
                await this.#showSpread({
                    left,
                    right,
                    side,
                    spreadIndex: index
                });
            }
        } else {
            if (spread.center) {
                const sectionIndex = this.book.sections.indexOf(spread.center);
                const src = await spread.center?.load?.();
                await this.#showSpread({
                    center: {
                        index: sectionIndex,
                        src
                    },
                    spreadIndex: index,
                    side
                });
            } else {
                const indexL = this.book.sections.indexOf(spread.left);
                const indexR = this.book.sections.indexOf(spread.right);
                const srcL = await spread.left?.load?.();
                const srcR = await spread.right?.load?.();
                const left = {
                    index: indexL,
                    src: srcL
                };
                const right = {
                    index: indexR,
                    src: srcR
                };
                await this.#showSpread({
                    left,
                    right,
                    side,
                    spreadIndex: index
                });
            }
        }
        this.#reportLocation(reason);
        this.#preloadNextSpreads();
    }
    #preloadNextSpreads() {
        this.#cleanupPreloadCache();
        if (this.#numPrerenderedSpreads <= 0) return;
        const toPreload = [];
        const forwardPreloadCount = Math.max(1, this.#numPrerenderedSpreads - 1);
        const backwardPreloadCount = Math.max(0, this.#numPrerenderedSpreads - forwardPreloadCount);
        for(let distance = 1; distance <= forwardPreloadCount; distance++){
            const forwardIndex = this.#index + distance;
            if (forwardIndex >= 0 && forwardIndex < this.#spreads.length) {
                toPreload.push({
                    index: forwardIndex,
                    direction: 'forward',
                    distance
                });
            }
        }
        for(let distance = 1; distance <= backwardPreloadCount; distance++){
            const backwardIndex = this.#index - distance;
            if (backwardIndex >= 0 && backwardIndex < this.#spreads.length) {
                toPreload.push({
                    index: backwardIndex,
                    direction: 'backward',
                    distance
                });
            }
        }
        for (const { index: targetIndex, direction } of toPreload){
            const cacheKey = `spread-${targetIndex}`;
            if (this.#prerenderedSpreads.has(cacheKey)) continue;
            const spread = this.#spreads[targetIndex];
            if (!spread) continue;
            this.#preloadQueue.push({
                targetIndex,
                direction,
                spread,
                cacheKey
            });
        }
        this.#processPreloadQueue();
    }
    async #processPreloadQueue() {
        while(this.#preloadQueue.length > 0 && this.#activePreloads < this.#maxConcurrentPreloads){
            const task = this.#preloadQueue.shift();
            if (!task) break;
            const { spread, cacheKey } = task;
            this.#preloadCache.set(cacheKey, 'loading');
            this.#activePreloads++;
            Promise.resolve().then(async ()=>{
                try {
                    if (spread.center) {
                        const src = await spread.center?.load?.();
                        this.#preloadCache.set(cacheKey, {
                            center: src
                        });
                        const sectionIndex = this.book.sections.indexOf(spread.center);
                        const frame = await this.#createFrame({
                            index: sectionIndex,
                            src,
                            detached: true
                        });
                        this.#prerenderedSpreads.set(cacheKey, {
                            center: frame
                        });
                        this.#spreadAccessTime.set(cacheKey, Date.now());
                        if (frame.onZoom) {
                            const doc = frame.iframe.contentDocument;
                            frame.onZoom({
                                doc,
                                scale: this.#totalScaleFactor
                            });
                        }
                    } else {
                        const srcL = await spread.left?.load?.();
                        const srcR = await spread.right?.load?.();
                        this.#preloadCache.set(cacheKey, {
                            left: srcL,
                            right: srcR
                        });
                        const indexL = this.book.sections.indexOf(spread.left);
                        const indexR = this.book.sections.indexOf(spread.right);
                        const leftFrame = await this.#createFrame({
                            index: indexL,
                            src: srcL,
                            detached: true
                        });
                        const rightFrame = await this.#createFrame({
                            index: indexR,
                            src: srcR,
                            detached: true
                        });
                        this.#prerenderedSpreads.set(cacheKey, {
                            left: leftFrame,
                            right: rightFrame
                        });
                        this.#spreadAccessTime.set(cacheKey, Date.now());
                        if (leftFrame.onZoom) {
                            const docL = leftFrame.iframe.contentDocument;
                            leftFrame.onZoom({
                                doc: docL,
                                scale: this.#totalScaleFactor
                            });
                        }
                        if (rightFrame.onZoom) {
                            const docR = rightFrame.iframe.contentDocument;
                            rightFrame.onZoom({
                                doc: docR,
                                scale: this.#totalScaleFactor
                            });
                        }
                    }
                } catch  {
                    this.#preloadCache.delete(cacheKey);
                    this.#prerenderedSpreads.delete(cacheKey);
                } finally{
                    this.#activePreloads--;
                    this.#processPreloadQueue();
                }
            });
        }
    }
    #cleanupPreloadCache() {
        const maxSpreads = this.#maxCachedSpreads;
        if (this.#prerenderedSpreads.size <= maxSpreads) {
            return;
        }
        const framesByAge = Array.from(this.#prerenderedSpreads.keys()).map((key)=>({
                key,
                accessTime: this.#spreadAccessTime.get(key) || 0
            })).sort((a, b)=>a.accessTime - b.accessTime);
        const numToRemove = this.#prerenderedSpreads.size - maxSpreads;
        const framesToDelete = framesByAge.slice(0, numToRemove).map((item)=>item.key);
        if (framesToDelete.length > 0) {
            framesToDelete.forEach((key)=>{
                const frames = this.#prerenderedSpreads.get(key);
                if (frames) {
                    if (frames.center) {
                        frames.center.element?.remove();
                    } else {
                        frames.left?.element?.remove();
                        frames.right?.element?.remove();
                    }
                }
                this.#prerenderedSpreads.delete(key);
                this.#spreadAccessTime.delete(key);
                this.#preloadCache.delete(key);
            });
        }
    }
    async select(target) {
        await this.goTo(target);
    // TODO
    }
    async goTo(target) {
        const { book } = this;
        const resolved = await target;
        const section = book.sections[resolved.index];
        if (!section) return;
        const { index, side } = this.getSpreadOf(section);
        await this.goToSpread(index, side);
    }
    async next() {
        const s = this.rtl ? this.#goLeft() : this.#goRight();
        if (!s) return this.goToSpread(this.#index + 1, this.rtl ? 'right' : 'left', 'page');
    }
    async prev() {
        const s = this.rtl ? this.#goRight() : this.#goLeft();
        if (!s) return this.goToSpread(this.#index - 1, this.rtl ? 'left' : 'right', 'page');
    }
    async pan(dx, dy) {
        if (this.#scrollLocked) return;
        this.#scrollLocked = true;
        const transform = (frame)=>{
            let { element, iframe } = frame;
            if (!iframe || !element) return;
            const scrollableContainer = element.parentNode.host;
            scrollableContainer.scrollLeft += dx;
            scrollableContainer.scrollTop += dy;
        };
        transform(this.#center ?? this.#right ?? {});
        this.#scrollLocked = false;
    }
    getContents() {
        return Array.from(this.#root.querySelectorAll('iframe'), (frame)=>({
                doc: frame.contentDocument
            }));
    }
    destroy() {
        this.#observer.unobserve(this);
        for (const frames of this.#prerenderedSpreads.values()){
            if (frames.center) {
                frames.center.element?.remove();
            } else {
                frames.left?.element?.remove();
                frames.right?.element?.remove();
            }
        }
        this.#prerenderedSpreads.clear();
        this.#preloadCache.clear();
        this.#spreadAccessTime.clear();
    }
}
customElements.define('foliate-fxl', FixedLayout);
}),
"[project]/node_modules/.pnpm/construct-style-sheets-polyfill@3.1.0/node_modules/construct-style-sheets-polyfill/dist/adoptedStyleSheets.js [ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

(function() {
    'use strict';
    if (typeof document === 'undefined' || 'adoptedStyleSheets' in document) {
        return;
    }
    var hasShadyCss = 'ShadyCSS' in window && !ShadyCSS.nativeShadow;
    var bootstrapper = document.implementation.createHTMLDocument('');
    var closedShadowRootRegistry = new WeakMap();
    var _DOMException = typeof DOMException === 'object' ? Error : DOMException;
    var defineProperty = Object.defineProperty;
    var forEach = Array.prototype.forEach;
    var importPattern = /@import.+?;?$/gm;
    function rejectImports(contents) {
        var _contents = contents.replace(importPattern, '');
        if (_contents !== contents) {
            console.warn('@import rules are not allowed here. See https://github.com/WICG/construct-stylesheets/issues/119#issuecomment-588352418');
        }
        return _contents.trim();
    }
    function isElementConnected(element) {
        return 'isConnected' in element ? element.isConnected : document.contains(element);
    }
    function unique(arr) {
        return arr.filter(function(value, index) {
            return arr.indexOf(value) === index;
        });
    }
    function diff(arr1, arr2) {
        return arr1.filter(function(value) {
            return arr2.indexOf(value) === -1;
        });
    }
    function removeNode(node) {
        node.parentNode.removeChild(node);
    }
    function getShadowRoot(element) {
        return element.shadowRoot || closedShadowRootRegistry.get(element);
    }
    var cssStyleSheetMethods = [
        'addRule',
        'deleteRule',
        'insertRule',
        'removeRule'
    ];
    var NonConstructedStyleSheet = CSSStyleSheet;
    var nonConstructedProto = NonConstructedStyleSheet.prototype;
    nonConstructedProto.replace = function() {
        return Promise.reject(new _DOMException("Can't call replace on non-constructed CSSStyleSheets."));
    };
    nonConstructedProto.replaceSync = function() {
        throw new _DOMException("Failed to execute 'replaceSync' on 'CSSStyleSheet': Can't call replaceSync on non-constructed CSSStyleSheets.");
    };
    function isCSSStyleSheetInstance(instance) {
        return typeof instance === 'object' ? proto$1.isPrototypeOf(instance) || nonConstructedProto.isPrototypeOf(instance) : false;
    }
    function isNonConstructedStyleSheetInstance(instance) {
        return typeof instance === 'object' ? nonConstructedProto.isPrototypeOf(instance) : false;
    }
    var $basicStyleElement = new WeakMap();
    var $locations = new WeakMap();
    var $adoptersByLocation = new WeakMap();
    var $appliedMethods = new WeakMap();
    function addAdopterLocation(sheet, location) {
        var adopter = document.createElement('style');
        $adoptersByLocation.get(sheet).set(location, adopter);
        $locations.get(sheet).push(location);
        return adopter;
    }
    function getAdopterByLocation(sheet, location) {
        return $adoptersByLocation.get(sheet).get(location);
    }
    function removeAdopterLocation(sheet, location) {
        $adoptersByLocation.get(sheet).delete(location);
        $locations.set(sheet, $locations.get(sheet).filter(function(_location) {
            return _location !== location;
        }));
    }
    function restyleAdopter(sheet, adopter) {
        requestAnimationFrame(function() {
            adopter.textContent = $basicStyleElement.get(sheet).textContent;
            $appliedMethods.get(sheet).forEach(function(command) {
                return adopter.sheet[command.method].apply(adopter.sheet, command.args);
            });
        });
    }
    function checkInvocationCorrectness(self) {
        if (!$basicStyleElement.has(self)) {
            throw new TypeError('Illegal invocation');
        }
    }
    function ConstructedStyleSheet() {
        var self = this;
        var style = document.createElement('style');
        bootstrapper.body.appendChild(style);
        $basicStyleElement.set(self, style);
        $locations.set(self, []);
        $adoptersByLocation.set(self, new WeakMap());
        $appliedMethods.set(self, []);
    }
    var proto$1 = ConstructedStyleSheet.prototype;
    proto$1.replace = function replace(contents) {
        try {
            this.replaceSync(contents);
            return Promise.resolve(this);
        } catch (e) {
            return Promise.reject(e);
        }
    };
    proto$1.replaceSync = function replaceSync(contents) {
        checkInvocationCorrectness(this);
        if (typeof contents === 'string') {
            var self_1 = this;
            $basicStyleElement.get(self_1).textContent = rejectImports(contents);
            $appliedMethods.set(self_1, []);
            $locations.get(self_1).forEach(function(location) {
                if (location.isConnected()) {
                    restyleAdopter(self_1, getAdopterByLocation(self_1, location));
                }
            });
        }
    };
    defineProperty(proto$1, 'cssRules', {
        configurable: true,
        enumerable: true,
        get: function cssRules() {
            checkInvocationCorrectness(this);
            return $basicStyleElement.get(this).sheet.cssRules;
        }
    });
    defineProperty(proto$1, 'media', {
        configurable: true,
        enumerable: true,
        get: function media() {
            checkInvocationCorrectness(this);
            return $basicStyleElement.get(this).sheet.media;
        }
    });
    cssStyleSheetMethods.forEach(function(method) {
        proto$1[method] = function() {
            var self = this;
            checkInvocationCorrectness(self);
            var args = arguments;
            $appliedMethods.get(self).push({
                method: method,
                args: args
            });
            $locations.get(self).forEach(function(location) {
                if (location.isConnected()) {
                    var sheet = getAdopterByLocation(self, location).sheet;
                    sheet[method].apply(sheet, args);
                }
            });
            var basicSheet = $basicStyleElement.get(self).sheet;
            return basicSheet[method].apply(basicSheet, args);
        };
    });
    defineProperty(ConstructedStyleSheet, Symbol.hasInstance, {
        configurable: true,
        value: isCSSStyleSheetInstance
    });
    var defaultObserverOptions = {
        childList: true,
        subtree: true
    };
    var locations = new WeakMap();
    function getAssociatedLocation(element) {
        var location = locations.get(element);
        if (!location) {
            location = new Location(element);
            locations.set(element, location);
        }
        return location;
    }
    function attachAdoptedStyleSheetProperty(constructor) {
        defineProperty(constructor.prototype, 'adoptedStyleSheets', {
            configurable: true,
            enumerable: true,
            get: function() {
                return getAssociatedLocation(this).sheets;
            },
            set: function(sheets) {
                getAssociatedLocation(this).update(sheets);
            }
        });
    }
    function traverseWebComponents(node, callback) {
        var iter = document.createNodeIterator(node, NodeFilter.SHOW_ELEMENT, function(foundNode) {
            return getShadowRoot(foundNode) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
        }, null, false);
        for(var next = void 0; next = iter.nextNode();){
            callback(getShadowRoot(next));
        }
    }
    var $element = new WeakMap();
    var $uniqueSheets = new WeakMap();
    var $observer = new WeakMap();
    function isExistingAdopter(self, element) {
        return element instanceof HTMLStyleElement && $uniqueSheets.get(self).some(function(sheet) {
            return getAdopterByLocation(sheet, self);
        });
    }
    function getAdopterContainer(self) {
        var element = $element.get(self);
        return element instanceof Document ? element.body : element;
    }
    function adopt(self) {
        var styleList = document.createDocumentFragment();
        var sheets = $uniqueSheets.get(self);
        var observer = $observer.get(self);
        var container = getAdopterContainer(self);
        observer.disconnect();
        sheets.forEach(function(sheet) {
            styleList.appendChild(getAdopterByLocation(sheet, self) || addAdopterLocation(sheet, self));
        });
        container.insertBefore(styleList, null);
        observer.observe(container, defaultObserverOptions);
        sheets.forEach(function(sheet) {
            restyleAdopter(sheet, getAdopterByLocation(sheet, self));
        });
    }
    function Location(element) {
        var self = this;
        self.sheets = [];
        $element.set(self, element);
        $uniqueSheets.set(self, []);
        $observer.set(self, new MutationObserver(function(mutations, observer) {
            if (!document) {
                observer.disconnect();
                return;
            }
            mutations.forEach(function(mutation) {
                if (!hasShadyCss) {
                    forEach.call(mutation.addedNodes, function(node) {
                        if (!(node instanceof Element)) {
                            return;
                        }
                        traverseWebComponents(node, function(root) {
                            getAssociatedLocation(root).connect();
                        });
                    });
                }
                forEach.call(mutation.removedNodes, function(node) {
                    if (!(node instanceof Element)) {
                        return;
                    }
                    if (isExistingAdopter(self, node)) {
                        adopt(self);
                    }
                    if (!hasShadyCss) {
                        traverseWebComponents(node, function(root) {
                            getAssociatedLocation(root).disconnect();
                        });
                    }
                });
            });
        }));
    }
    Location.prototype = {
        isConnected: function() {
            var element = $element.get(this);
            return element instanceof Document ? element.readyState !== 'loading' : isElementConnected(element.host);
        },
        connect: function() {
            var container = getAdopterContainer(this);
            $observer.get(this).observe(container, defaultObserverOptions);
            if ($uniqueSheets.get(this).length > 0) {
                adopt(this);
            }
            traverseWebComponents(container, function(root) {
                getAssociatedLocation(root).connect();
            });
        },
        disconnect: function() {
            $observer.get(this).disconnect();
        },
        update: function(sheets) {
            var self = this;
            var locationType = $element.get(self) === document ? 'Document' : 'ShadowRoot';
            if (!Array.isArray(sheets)) {
                throw new TypeError("Failed to set the 'adoptedStyleSheets' property on " + locationType + ": Iterator getter is not callable.");
            }
            if (!sheets.every(isCSSStyleSheetInstance)) {
                throw new TypeError("Failed to set the 'adoptedStyleSheets' property on " + locationType + ": Failed to convert value to 'CSSStyleSheet'");
            }
            if (sheets.some(isNonConstructedStyleSheetInstance)) {
                throw new TypeError("Failed to set the 'adoptedStyleSheets' property on " + locationType + ": Can't adopt non-constructed stylesheets");
            }
            self.sheets = sheets;
            var oldUniqueSheets = $uniqueSheets.get(self);
            var uniqueSheets = unique(sheets);
            var removedSheets = diff(oldUniqueSheets, uniqueSheets);
            removedSheets.forEach(function(sheet) {
                removeNode(getAdopterByLocation(sheet, self));
                removeAdopterLocation(sheet, self);
            });
            $uniqueSheets.set(self, uniqueSheets);
            if (self.isConnected() && uniqueSheets.length > 0) {
                adopt(self);
            }
        }
    };
    window.CSSStyleSheet = ConstructedStyleSheet;
    attachAdoptedStyleSheetProperty(Document);
    if ('ShadowRoot' in window) {
        attachAdoptedStyleSheetProperty(ShadowRoot);
        var proto = Element.prototype;
        var attach_1 = proto.attachShadow;
        proto.attachShadow = function attachShadow(init) {
            var root = attach_1.call(this, init);
            if (init.mode === 'closed') {
                closedShadowRootRegistry.set(this, root);
            }
            return root;
        };
    }
    var documentLocation = getAssociatedLocation(document);
    if (documentLocation.isConnected()) {
        documentLocation.connect();
    } else {
        document.addEventListener('DOMContentLoaded', documentLocation.connect.bind(documentLocation));
    }
})();
}),
];

//# sourceMappingURL=_5e37b352._.js.map