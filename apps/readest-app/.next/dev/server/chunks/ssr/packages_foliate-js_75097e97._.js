module.exports = [
"[project]/packages/foliate-js/epubcfi.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "collapse",
    ()=>collapse,
    "compare",
    ()=>compare,
    "fake",
    ()=>fake,
    "fromCalibreHighlight",
    ()=>fromCalibreHighlight,
    "fromCalibrePos",
    ()=>fromCalibrePos,
    "fromElements",
    ()=>fromElements,
    "fromRange",
    ()=>fromRange,
    "isCFI",
    ()=>isCFI,
    "joinIndir",
    ()=>joinIndir,
    "parse",
    ()=>parse,
    "toElement",
    ()=>toElement,
    "toRange",
    ()=>toRange
]);
const findIndices = (arr, f)=>arr.map((x, i, a)=>f(x, i, a) ? i : null).filter((x)=>x != null);
const splitAt = (arr, is)=>[
        -1,
        ...is,
        arr.length
    ].reduce(({ xs, a }, b)=>({
            xs: xs?.concat([
                arr.slice(a + 1, b)
            ]) ?? [],
            a: b
        }), {}).xs;
const concatArrays = (a, b)=>a.slice(0, -1).concat([
        a[a.length - 1].concat(b[0])
    ]).concat(b.slice(1));
const isNumber = /\d/;
const isCFI = /^epubcfi\((.*)\)$/;
const escapeCFI = (str)=>str.replace(/[\^[\](),;=]/g, '^$&');
const wrap = (x)=>isCFI.test(x) ? x : `epubcfi(${x})`;
const unwrap = (x)=>x.match(isCFI)?.[1] ?? x;
const lift = (f)=>(...xs)=>`epubcfi(${f(...xs.map((x)=>x.match(isCFI)?.[1] ?? x))})`;
const joinIndir = lift((...xs)=>xs.join('!'));
const tokenizer = (str)=>{
    const tokens = [];
    let state, escape, value = '';
    const push = (x)=>(tokens.push(x), state = null, value = '');
    const cat = (x)=>(value += x, escape = false);
    for (const char of Array.from(str.trim()).concat('')){
        if (char === '^' && !escape) {
            escape = true;
            continue;
        }
        if (state === '!') push([
            '!'
        ]);
        else if (state === ',') push([
            ','
        ]);
        else if (state === '/' || state === ':') {
            if (isNumber.test(char)) {
                cat(char);
                continue;
            } else push([
                state,
                parseInt(value)
            ]);
        } else if (state === '~') {
            if (isNumber.test(char) || char === '.') {
                cat(char);
                continue;
            } else push([
                '~',
                parseFloat(value)
            ]);
        } else if (state === '@') {
            if (char === ':') {
                push([
                    '@',
                    parseFloat(value)
                ]);
                state = '@';
                continue;
            }
            if (isNumber.test(char) || char === '.') {
                cat(char);
                continue;
            } else push([
                '@',
                parseFloat(value)
            ]);
        } else if (state === '[') {
            if (char === ';' && !escape) {
                push([
                    '[',
                    value
                ]);
                state = ';';
            } else if (char === ',' && !escape) {
                push([
                    '[',
                    value
                ]);
                state = '[';
            } else if (char === ']' && !escape) push([
                '[',
                value
            ]);
            else cat(char);
            continue;
        } else if (state?.startsWith(';')) {
            if (char === '=' && !escape) {
                state = `;${value}`;
                value = '';
            } else if (char === ';' && !escape) {
                push([
                    state,
                    value
                ]);
                state = ';';
            } else if (char === ']' && !escape) push([
                state,
                value
            ]);
            else cat(char);
            continue;
        }
        if (char === '/' || char === ':' || char === '~' || char === '@' || char === '[' || char === '!' || char === ',') state = char;
    }
    return tokens;
};
const findTokens = (tokens, x)=>findIndices(tokens, ([t])=>t === x);
const parser = (tokens)=>{
    const parts = [];
    let state;
    for (const [type, val] of tokens){
        if (type === '/') parts.push({
            index: val
        });
        else {
            const last = parts[parts.length - 1];
            if (type === ':') last.offset = val;
            else if (type === '~') last.temporal = val;
            else if (type === '@') last.spatial = (last.spatial ?? []).concat(val);
            else if (type === ';s') last.side = val;
            else if (type === '[') {
                if (state === '/' && val) last.id = val;
                else {
                    last.text = (last.text ?? []).concat(val);
                    continue;
                }
            }
        }
        state = type;
    }
    return parts;
};
// split at step indirections, then parse each part
const parserIndir = (tokens)=>splitAt(tokens, findTokens(tokens, '!')).map(parser);
const parse = (cfi)=>{
    const tokens = tokenizer(unwrap(cfi));
    const commas = findTokens(tokens, ',');
    if (!commas.length) return parserIndir(tokens);
    const [parent, start, end] = splitAt(tokens, commas).map(parserIndir);
    return {
        parent,
        start,
        end
    };
};
const partToString = ({ index, id, offset, temporal, spatial, text, side })=>{
    const param = side ? `;s=${side}` : '';
    return `/${index}` + (id ? `[${escapeCFI(id)}${param}]` : '') + (offset != null && index % 2 ? `:${offset}` : '') + (temporal ? `~${temporal}` : '') + (spatial ? `@${spatial.join(':')}` : '') + (text || !id && side ? '[' + (text?.map(escapeCFI)?.join(',') ?? '') + param + ']' : '');
};
const toInnerString = (parsed)=>parsed.parent ? [
        parsed.parent,
        parsed.start,
        parsed.end
    ].map(toInnerString).join(',') : parsed.map((parts)=>parts.map(partToString).join('')).join('!');
const toString = (parsed)=>wrap(toInnerString(parsed));
const collapse = (x, toEnd)=>typeof x === 'string' ? toString(collapse(parse(x), toEnd)) : x.parent ? concatArrays(x.parent, x[toEnd ? 'end' : 'start']) : x;
// create range CFI from two CFIs
const buildRange = (from, to)=>{
    if (typeof from === 'string') from = parse(from);
    if (typeof to === 'string') to = parse(to);
    from = collapse(from);
    to = collapse(to, true);
    // ranges across multiple documents are not allowed; handle local paths only
    const localFrom = from[from.length - 1], localTo = to[to.length - 1];
    const localParent = [], localStart = [], localEnd = [];
    let pushToParent = true;
    const len = Math.max(localFrom.length, localTo.length);
    for(let i = 0; i < len; i++){
        const a = localFrom[i], b = localTo[i];
        pushToParent &&= a?.index === b?.index && !a?.offset && !b?.offset;
        if (pushToParent) localParent.push(a);
        else {
            if (a) localStart.push(a);
            if (b) localEnd.push(b);
        }
    }
    // copy non-local paths from `from`
    const parent = from.slice(0, -1).concat([
        localParent
    ]);
    return toString({
        parent,
        start: [
            localStart
        ],
        end: [
            localEnd
        ]
    });
};
const compare = (a, b)=>{
    if (typeof a === 'string') a = parse(a);
    if (typeof b === 'string') b = parse(b);
    if (a.start || b.start) return compare(collapse(a), collapse(b)) || compare(collapse(a, true), collapse(b, true));
    for(let i = 0; i < Math.max(a.length, b.length); i++){
        const p = a[i] ?? [], q = b[i] ?? [];
        const maxIndex = Math.max(p.length, q.length) - 1;
        for(let i = 0; i <= maxIndex; i++){
            const x = p[i], y = q[i];
            if (!x) return -1;
            if (!y) return 1;
            if (x.index > y.index) return 1;
            if (x.index < y.index) return -1;
            if (i === maxIndex) {
                // TODO: compare temporal & spatial offsets
                if (x.offset > y.offset) return 1;
                if (x.offset < y.offset) return -1;
            }
        }
    }
    return 0;
};
const isTextNode = ({ nodeType })=>nodeType === 3 || nodeType === 4;
const isElementNode = ({ nodeType })=>nodeType === 1;
const getChildNodes = (node, filter)=>{
    const nodes = Array.from(node.childNodes)// "content other than element and character data is ignored"
    .filter((node)=>isTextNode(node) || isElementNode(node));
    return filter ? nodes.map((node)=>{
        const accept = filter(node);
        if (accept === NodeFilter.FILTER_REJECT) return null;
        else if (accept === NodeFilter.FILTER_SKIP) return getChildNodes(node, filter);
        else return node;
    }).flat().filter((x)=>x) : nodes;
};
// child nodes are organized such that the result is always
//     [element, text, element, text, ..., element],
// regardless of the actual structure in the document;
// so multiple text nodes need to be combined, and nonexistent ones counted;
// see "Step Reference to Child Element or Character Data (/)" in EPUB CFI spec
const indexChildNodes = (node, filter)=>{
    const nodes = getChildNodes(node, filter).reduce((arr, node)=>{
        let last = arr[arr.length - 1];
        if (!last) arr.push(node);
        else if (isTextNode(node)) {
            if (Array.isArray(last)) last.push(node);
            else if (isTextNode(last)) arr[arr.length - 1] = [
                last,
                node
            ];
            else arr.push(node);
        } else {
            if (isElementNode(last)) arr.push(null, node);
            else arr.push(node);
        }
        return arr;
    }, []);
    // "the first chunk is located before the first child element"
    if (isElementNode(nodes[0])) nodes.unshift('first');
    // "the last chunk is located after the last child element"
    if (isElementNode(nodes[nodes.length - 1])) nodes.push('last');
    // "'virtual' elements"
    nodes.unshift('before'); // "0 is a valid index"
    nodes.push('after'); // "n+2 is a valid index"
    return nodes;
};
const partsToNode = (node, parts, filter)=>{
    const { id } = parts[parts.length - 1];
    if (id) {
        const el = node.ownerDocument.getElementById(id);
        if (el) return {
            node: el,
            offset: 0
        };
    }
    for (const { index } of parts){
        const newNode = node ? indexChildNodes(node, filter)[index] : null;
        // handle non-existent nodes
        if (newNode === 'first') return {
            node: node.firstChild ?? node
        };
        if (newNode === 'last') return {
            node: node.lastChild ?? node
        };
        if (newNode === 'before') return {
            node,
            before: true
        };
        if (newNode === 'after') return {
            node,
            after: true
        };
        node = newNode;
    }
    const { offset } = parts[parts.length - 1];
    if (!Array.isArray(node)) return {
        node,
        offset
    };
    // get underlying text node and offset from the chunk
    let sum = 0;
    for (const n of node){
        const { length } = n.nodeValue;
        if (sum + length >= offset) return {
            node: n,
            offset: offset - sum
        };
        sum += length;
    }
};
const nodeToParts = (node, offset, filter)=>{
    const { parentNode, id } = node;
    const indexed = indexChildNodes(parentNode, filter);
    const index = indexed.findIndex((x)=>Array.isArray(x) ? x.some((x)=>x === node) : x === node);
    // adjust offset as if merging the text nodes in the chunk
    const chunk = indexed[index];
    if (Array.isArray(chunk)) {
        let sum = 0;
        for (const x of chunk){
            if (x === node) {
                sum += offset;
                break;
            } else sum += x.nodeValue.length;
        }
        offset = sum;
    }
    const part = {
        id,
        index,
        offset
    };
    return (parentNode !== node.ownerDocument.documentElement ? nodeToParts(parentNode, null, filter).concat(part) : [
        part
    ])// remove ignored nodes
    .filter((x)=>x.index !== -1);
};
const fromRange = (range, filter)=>{
    const { startContainer, startOffset, endContainer, endOffset } = range;
    const start = nodeToParts(startContainer, startOffset, filter);
    if (range.collapsed) return toString([
        start
    ]);
    const end = nodeToParts(endContainer, endOffset, filter);
    return buildRange([
        start
    ], [
        end
    ]);
};
const toRange = (doc, parts, filter)=>{
    const startParts = collapse(parts);
    const endParts = collapse(parts, true);
    const root = doc.documentElement;
    const start = partsToNode(root, startParts[0], filter);
    const end = partsToNode(root, endParts[0], filter);
    const range = doc.createRange();
    if (start.before) range.setStartBefore(start.node);
    else if (start.after) range.setStartAfter(start.node);
    else range.setStart(start.node, start.offset);
    if (end.before) range.setEndBefore(end.node);
    else if (end.after) range.setEndAfter(end.node);
    else range.setEnd(end.node, end.offset);
    return range;
};
const fromElements = (elements)=>{
    const results = [];
    const { parentNode } = elements[0];
    const parts = nodeToParts(parentNode);
    for (const [index, node] of indexChildNodes(parentNode).entries()){
        const el = elements[results.length];
        if (node === el) results.push(toString([
            parts.concat({
                id: el.id,
                index
            })
        ]));
    }
    return results;
};
const toElement = (doc, parts)=>partsToNode(doc.documentElement, collapse(parts)).node;
const fake = {
    fromIndex: (index)=>wrap(`/6/${(index + 1) * 2}`),
    toIndex: (parts)=>parts?.at(-1).index / 2 - 1
};
const fromCalibrePos = (pos)=>{
    const [parts] = parse(pos);
    const item = parts.shift();
    parts.shift();
    return toString([
        [
            {
                index: 6
            },
            item
        ],
        parts
    ]);
};
const fromCalibreHighlight = ({ spine_index, start_cfi, end_cfi })=>{
    const pre = fake.fromIndex(spine_index) + '!';
    return buildRange(pre + start_cfi.slice(2), pre + end_cfi.slice(2));
};
}),
"[project]/packages/foliate-js/overlayer.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Overlayer",
    ()=>Overlayer
]);
const createSVGElement = (tag)=>document.createElementNS('http://www.w3.org/2000/svg', tag);
class Overlayer {
    #svg = createSVGElement('svg');
    #map = new Map();
    #doc = null;
    constructor(doc){
        this.#doc = doc;
        Object.assign(this.#svg.style, {
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            pointerEvents: 'none'
        });
    }
    get element() {
        return this.#svg;
    }
    get #zoom() {
        // Safari does not zoom the client rects, while Chrome, Edge and Firefox does
        if (/^((?!chrome|android).)*AppleWebKit/i.test(navigator.userAgent) && !window.chrome) {
            return window.getComputedStyle(this.#doc.body).zoom || 1.0;
        }
        return 1.0;
    }
    #splitRangeByParagraph(range) {
        const ancestor = range.commonAncestorContainer;
        const paragraphs = Array.from(ancestor.querySelectorAll?.('p, h1, h2, h3, h4') || []);
        const splitRanges = [];
        paragraphs.forEach((p)=>{
            const pRange = document.createRange();
            if (range.intersectsNode(p)) {
                pRange.selectNodeContents(p);
                if (pRange.compareBoundaryPoints(Range.START_TO_START, range) < 0) {
                    pRange.setStart(range.startContainer, range.startOffset);
                }
                if (pRange.compareBoundaryPoints(Range.END_TO_END, range) > 0) {
                    pRange.setEnd(range.endContainer, range.endOffset);
                }
                splitRanges.push(pRange);
            }
        });
        return splitRanges.length === 0 ? [
            range
        ] : splitRanges;
    }
    add(key, range, draw, options) {
        if (this.#map.has(key)) this.remove(key);
        if (typeof range === 'function') range = range(this.#svg.getRootNode());
        const zoom = this.#zoom;
        let rects = [];
        this.#splitRangeByParagraph(range).forEach((pRange)=>{
            const pRects = Array.from(pRange.getClientRects()).map((rect)=>({
                    left: rect.left * zoom,
                    top: rect.top * zoom,
                    right: rect.right * zoom,
                    bottom: rect.bottom * zoom,
                    width: rect.width * zoom,
                    height: rect.height * zoom
                }));
            rects = rects.concat(pRects);
        });
        const element = draw(rects, options);
        this.#svg.append(element);
        this.#map.set(key, {
            range,
            draw,
            options,
            element,
            rects
        });
    }
    remove(key) {
        if (!this.#map.has(key)) return;
        this.#svg.removeChild(this.#map.get(key).element);
        this.#map.delete(key);
    }
    redraw() {
        for (const obj of this.#map.values()){
            const { range, draw, options, element } = obj;
            this.#svg.removeChild(element);
            const zoom = this.#zoom;
            let rects = [];
            this.#splitRangeByParagraph(range).forEach((pRange)=>{
                const pRects = Array.from(pRange.getClientRects()).map((rect)=>({
                        left: rect.left * zoom,
                        top: rect.top * zoom,
                        right: rect.right * zoom,
                        bottom: rect.bottom * zoom,
                        width: rect.width * zoom,
                        height: rect.height * zoom
                    }));
                rects = rects.concat(pRects);
            });
            const el = draw(rects, options);
            this.#svg.append(el);
            obj.element = el;
            obj.rects = rects;
        }
    }
    hitTest({ x, y }) {
        const arr = Array.from(this.#map.entries());
        // loop in reverse to hit more recently added items first
        for(let i = arr.length - 1; i >= 0; i--){
            const tolerance = 5;
            const [key, obj] = arr[i];
            for (const { left, top, right, bottom } of obj.rects){
                if (top <= y + tolerance && left <= x + tolerance && bottom > y - tolerance && right > x - tolerance) {
                    return [
                        key,
                        obj.range,
                        {
                            left,
                            top,
                            right,
                            bottom
                        }
                    ];
                }
            }
        }
        return [];
    }
    static underline(rects, options = {}) {
        const { color = 'red', width: strokeWidth = 2, padding = 0, writingMode } = options;
        const g = createSVGElement('g');
        g.setAttribute('fill', color);
        if (writingMode === 'vertical-rl' || writingMode === 'vertical-lr') for (const { right, top, height } of rects){
            const el = createSVGElement('rect');
            el.setAttribute('x', right - strokeWidth / 2 + padding);
            el.setAttribute('y', top);
            el.setAttribute('height', height);
            el.setAttribute('width', strokeWidth);
            g.append(el);
        }
        else for (const { left, bottom, width } of rects){
            const el = createSVGElement('rect');
            el.setAttribute('x', left);
            el.setAttribute('y', bottom - strokeWidth / 2 + padding);
            el.setAttribute('height', strokeWidth);
            el.setAttribute('width', width);
            g.append(el);
        }
        return g;
    }
    static strikethrough(rects, options = {}) {
        const { color = 'red', width: strokeWidth = 2, writingMode } = options;
        const g = createSVGElement('g');
        g.setAttribute('fill', color);
        if (writingMode === 'vertical-rl' || writingMode === 'vertical-lr') for (const { right, left, top, height } of rects){
            const el = createSVGElement('rect');
            el.setAttribute('x', (right + left) / 2);
            el.setAttribute('y', top);
            el.setAttribute('height', height);
            el.setAttribute('width', strokeWidth);
            g.append(el);
        }
        else for (const { left, top, bottom, width } of rects){
            const el = createSVGElement('rect');
            el.setAttribute('x', left);
            el.setAttribute('y', (top + bottom) / 2);
            el.setAttribute('height', strokeWidth);
            el.setAttribute('width', width);
            g.append(el);
        }
        return g;
    }
    static squiggly(rects, options = {}) {
        const { color = 'red', width: strokeWidth = 2, padding = 0, writingMode } = options;
        const g = createSVGElement('g');
        g.setAttribute('fill', 'none');
        g.setAttribute('stroke', color);
        g.setAttribute('stroke-width', strokeWidth);
        const block = strokeWidth * 1.5;
        if (writingMode === 'vertical-rl' || writingMode === 'vertical-lr') for (const { right, top, height } of rects){
            const el = createSVGElement('path');
            const n = Math.round(height / block / 1.5);
            const inline = height / n;
            const ls = Array.from({
                length: n
            }, (_, i)=>`l${i % 2 ? -block : block} ${inline}`).join('');
            el.setAttribute('d', `M${right - strokeWidth / 2 + padding} ${top}${ls}`);
            g.append(el);
        }
        else for (const { left, bottom, width } of rects){
            const el = createSVGElement('path');
            const n = Math.round(width / block / 1.5);
            const inline = width / n;
            const ls = Array.from({
                length: n
            }, (_, i)=>`l${inline} ${i % 2 ? block : -block}`).join('');
            el.setAttribute('d', `M${left} ${bottom + strokeWidth / 2 + padding}${ls}`);
            g.append(el);
        }
        return g;
    }
    static highlight(rects, options = {}) {
        const { color = 'red', padding = 0 } = options;
        const g = createSVGElement('g');
        g.setAttribute('fill', color);
        g.style.opacity = 'var(--overlayer-highlight-opacity, .3)';
        g.style.mixBlendMode = 'var(--overlayer-highlight-blend-mode, normal)';
        for (const { left, top, height, width } of rects){
            const el = createSVGElement('rect');
            el.setAttribute('x', left - padding);
            el.setAttribute('y', top - padding);
            el.setAttribute('height', height + padding * 2);
            el.setAttribute('width', width + padding * 2);
            g.append(el);
        }
        return g;
    }
    static outline(rects, options = {}) {
        const { color = 'red', width: strokeWidth = 3, padding = 0, radius = 3 } = options;
        const g = createSVGElement('g');
        g.setAttribute('fill', 'none');
        g.setAttribute('stroke', color);
        g.setAttribute('stroke-width', strokeWidth);
        for (const { left, top, height, width } of rects){
            const el = createSVGElement('rect');
            el.setAttribute('x', left - padding);
            el.setAttribute('y', top - padding);
            el.setAttribute('height', height + padding * 2);
            el.setAttribute('width', width + padding * 2);
            el.setAttribute('rx', radius);
            g.append(el);
        }
        return g;
    }
    static bubble(rects, options = {}) {
        const { color = '#fbbf24', writingMode, opacity = 0.85, size = 20, padding = 10 } = options;
        const isVertical = writingMode === 'vertical-rl' || writingMode === 'vertical-lr';
        const g = createSVGElement('g');
        g.style.opacity = opacity;
        if (rects.length === 0) return g;
        rects.splice(1);
        const firstRect = rects[0];
        const x = isVertical ? firstRect.right - size + padding : firstRect.right - size + padding;
        const y = isVertical ? firstRect.bottom - size + padding : firstRect.top - size + padding;
        firstRect.top = y - padding;
        firstRect.right = x + size + padding;
        firstRect.bottom = y + size + padding;
        firstRect.left = x - padding;
        const bubble = createSVGElement('path');
        const s = size;
        const r = s * 0.15;
        // Speech bubble shape with a small tail
        // Main rounded rectangle body
        const d = `
            M ${x + r} ${y}
            h ${s - 2 * r}
            a ${r} ${r} 0 0 1 ${r} ${r}
            v ${s * 0.65 - 2 * r}
            a ${r} ${r} 0 0 1 ${-r} ${r}
            h ${-s * 0.3}
            l ${-s * 0.15} ${s * 0.2}
            l ${s * 0.05} ${-s * 0.2}
            h ${-s * 0.6 + 2 * r}
            a ${r} ${r} 0 0 1 ${-r} ${-r}
            v ${-s * 0.65 + 2 * r}
            a ${r} ${r} 0 0 1 ${r} ${-r}
            z
        `.replace(/\s+/g, ' ').trim();
        bubble.setAttribute('d', d);
        bubble.setAttribute('fill', color);
        bubble.setAttribute('stroke', 'rgba(0, 0, 0, 0.2)');
        bubble.setAttribute('stroke-width', '1');
        // Add horizontal lines inside to represent text
        const lineGroup = createSVGElement('g');
        lineGroup.setAttribute('stroke', 'rgba(0, 0, 0, 0.3)');
        lineGroup.setAttribute('stroke-width', '1.5');
        lineGroup.setAttribute('stroke-linecap', 'round');
        const lineY1 = y + s * 0.18;
        const lineY2 = y + s * 0.33;
        const lineY3 = y + s * 0.48;
        const lineX1 = x + s * 0.2;
        const lineX2 = x + s * 0.8;
        const line1 = createSVGElement('line');
        line1.setAttribute('x1', lineX1);
        line1.setAttribute('y1', lineY1);
        line1.setAttribute('x2', lineX2);
        line1.setAttribute('y2', lineY1);
        const line2 = createSVGElement('line');
        line2.setAttribute('x1', lineX1);
        line2.setAttribute('y1', lineY2);
        line2.setAttribute('x2', lineX2);
        line2.setAttribute('y2', lineY2);
        const line3 = createSVGElement('line');
        line3.setAttribute('x1', lineX1);
        line3.setAttribute('y1', lineY3);
        line3.setAttribute('x2', x + s * 0.6);
        line3.setAttribute('y2', lineY3);
        lineGroup.append(line1, line2, line3);
        if (isVertical) {
            const centerX = x + s / 2;
            const centerY = y + s / 2;
            bubble.setAttribute('transform', `rotate(90 ${centerX} ${centerY})`);
            lineGroup.setAttribute('transform', `rotate(90 ${centerX} ${centerY})`);
        }
        g.append(bubble);
        g.append(lineGroup);
        return g;
    }
    // make an exact copy of an image in the overlay
    // one can then apply filters to the entire element, without affecting them;
    // it's a bit silly and probably better to just invert images twice
    // (though the color will be off in that case if you do heu-rotate)
    static copyImage([rect], options = {}) {
        const { src } = options;
        const image = createSVGElement('image');
        const { left, top, height, width } = rect;
        image.setAttribute('href', src);
        image.setAttribute('x', left);
        image.setAttribute('y', top);
        image.setAttribute('height', height);
        image.setAttribute('width', width);
        return image;
    }
}
}),
"[project]/packages/foliate-js/footnotes.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FootnoteHandler",
    ()=>FootnoteHandler
]);
const getTypes = (el)=>new Set([
        ...el?.getAttributeNS?.('http://www.idpf.org/2007/ops', 'type')?.split(' ') ?? [],
        ...el?.attributes?.getNamedItem?.('epub:type')?.value?.split(' ') ?? []
    ]);
const getRoles = (el)=>new Set(el?.getAttribute?.('role')?.split(' '));
const isSuper = (el)=>{
    if (el.matches('sup')) return true;
    const { verticalAlign } = getComputedStyle(el);
    return verticalAlign === 'super' || verticalAlign === 'top' || verticalAlign === 'text-top' || /^\d/.test(verticalAlign);
};
const refTypes = [
    'biblioref',
    'glossref',
    'noteref'
];
const refRoles = [
    'doc-biblioref',
    'doc-glossref',
    'doc-noteref'
];
const isFootnoteReference = (a)=>{
    const types = getTypes(a);
    const roles = getRoles(a);
    return {
        yes: refRoles.some((r)=>roles.has(r)) || refTypes.some((t)=>types.has(t)),
        maybe: ()=>!types.has('backlink') && !roles.has('doc-backlink') && (isSuper(a) || a.children.length === 1 && isSuper(a.children[0]) || isSuper(a.parentElement))
    };
};
const getReferencedType = (el)=>{
    const types = getTypes(el);
    const roles = getRoles(el);
    return roles.has('doc-biblioentry') || types.has('biblioentry') ? 'biblioentry' : roles.has('definition') || types.has('glossdef') ? 'definition' : roles.has('doc-endnote') || types.has('endnote') || types.has('rearnote') ? 'endnote' : roles.has('doc-footnote') || types.has('footnote') ? 'footnote' : roles.has('note') || types.has('note') ? 'note' : null;
};
const isInline = 'a, span, sup, sub, em, strong, i, b, small, big';
const extractFootnote = (doc, anchor)=>{
    let el = anchor(doc);
    const target = el;
    while(el.matches(isInline)){
        const parent = el.parentElement;
        if (!parent) break;
        el = parent;
    }
    if (el === doc.body) {
        const sibling = target.nextElementSibling;
        if (sibling && !sibling.matches(isInline)) return sibling;
        throw new Error('Failed to extract footnote');
    }
    return el;
};
class FootnoteHandler extends EventTarget {
    detectFootnotes = true;
    #showFragment(book, { index, anchor }, href) {
        const view = document.createElement('foliate-view');
        return new Promise((resolve, reject)=>{
            view.addEventListener('load', (e)=>{
                try {
                    const { doc } = e.detail;
                    const el = anchor(doc);
                    const type = getReferencedType(el);
                    const hidden = el?.matches?.('aside') && type === 'footnote';
                    if (el) {
                        let range;
                        if (el.startContainer) {
                            range = el;
                        } else if (el.matches('li, aside')) {
                            range = doc.createRange();
                            range.selectNodeContents(el);
                        } else if (el.matches('dt')) {
                            range = doc.createRange();
                            range.setStartBefore(el);
                            let sibling = el.nextElementSibling;
                            let lastDD = null;
                            while(sibling && sibling.matches('dd')){
                                lastDD = sibling;
                                sibling = sibling.nextElementSibling;
                            }
                            range.setEndAfter(lastDD || el);
                        } else if (el.closest('li')) {
                            range = doc.createRange();
                            range.selectNodeContents(el.closest('li'));
                        } else if (el.closest('.note')) {
                            range = doc.createRange();
                            range.selectNodeContents(el.closest('.note'));
                        } else if (el.querySelector('a')) {
                            range = doc.createRange();
                            range.setStartBefore(el);
                            let next = el.nextElementSibling;
                            while(next){
                                if (next.querySelector('a')) break;
                                next = next.nextElementSibling;
                            }
                            if (next) {
                                range.setEndBefore(next);
                            } else {
                                range.setEndAfter(el.parentNode.lastChild);
                            }
                        } else {
                            range = doc.createRange();
                            const hasContent = el.textContent?.trim() || el.children.length > 0;
                            if (!hasContent && el.parentElement) {
                                range.selectNodeContents(el.parentElement);
                            } else {
                                range.selectNode(el);
                            }
                        }
                        const frag = range.extractContents();
                        doc.body.replaceChildren();
                        doc.body.appendChild(frag);
                    }
                    const detail = {
                        view,
                        href,
                        type,
                        hidden,
                        target: el
                    };
                    this.dispatchEvent(new CustomEvent('render', {
                        detail
                    }));
                    resolve();
                } catch (e) {
                    reject(e);
                }
            });
            view.open(book).then(()=>this.dispatchEvent(new CustomEvent('before-render', {
                    detail: {
                        view
                    }
                }))).then(()=>view.goTo(index)).catch(reject);
        });
    }
    handle(book, e) {
        const { a, href, follow } = e.detail;
        const { yes, maybe } = isFootnoteReference(a);
        if (yes || follow) {
            e.preventDefault();
            return Promise.resolve(book.resolveHref(href)).then((target)=>this.#showFragment(book, target, href));
        } else if (this.detectFootnotes && maybe()) {
            e.preventDefault();
            return Promise.resolve(book.resolveHref(href)).then(({ index, anchor })=>{
                const target = {
                    index,
                    anchor: (doc)=>extractFootnote(doc, anchor)
                };
                return this.#showFragment(book, target, href);
            });
        }
    }
}
}),
];

//# sourceMappingURL=packages_foliate-js_75097e97._.js.map