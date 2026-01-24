module.exports = [
"[project]/packages/foliate-js/epubcfi.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/packages/foliate-js/opds.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "REL",
    ()=>REL,
    "SYMBOL",
    ()=>SYMBOL,
    "getFeed",
    ()=>getFeed,
    "getOpenSearch",
    ()=>getOpenSearch,
    "getPublication",
    ()=>getPublication,
    "getSearch",
    ()=>getSearch,
    "isOPDSCatalog",
    ()=>isOPDSCatalog,
    "isOPDSSearch",
    ()=>isOPDSSearch
]);
const NS = {
    ATOM: 'http://www.w3.org/2005/Atom',
    OPDS: 'http://opds-spec.org/2010/catalog',
    THR: 'http://purl.org/syndication/thread/1.0',
    DC: 'http://purl.org/dc/elements/1.1/',
    DCTERMS: 'http://purl.org/dc/terms/'
};
const MIME = {
    ATOM: 'application/atom+xml',
    OPDS2: 'application/opds+json'
};
const REL = {
    ACQ: 'http://opds-spec.org/acquisition',
    FACET: 'http://opds-spec.org/facet',
    GROUP: 'http://opds-spec.org/group',
    COVER: [
        'http://opds-spec.org/image',
        'http://opds-spec.org/cover'
    ],
    THUMBNAIL: [
        'http://opds-spec.org/image/thumbnail',
        'http://opds-spec.org/thumbnail'
    ]
};
const SYMBOL = {
    SUMMARY: Symbol('summary'),
    CONTENT: Symbol('content')
};
const FACET_GROUP = Symbol('facetGroup');
const groupByArray = (arr, f)=>{
    const map = new Map();
    if (arr) for (const el of arr){
        const keys = f(el);
        for (const key of [
            keys
        ].flat()){
            const group = map.get(key);
            if (group) group.push(el);
            else map.set(key, [
                el
            ]);
        }
    }
    return map;
};
// https://www.rfc-editor.org/rfc/rfc7231#section-3.1.1
const parseMediaType = (str)=>{
    if (!str) return null;
    const [mediaType, ...ps] = str.split(/ *; */);
    return {
        mediaType: mediaType.toLowerCase(),
        parameters: Object.fromEntries(ps.map((p)=>{
            const [name, val] = p.split('=');
            return [
                name.toLowerCase(),
                val?.replace(/(^"|"$)/g, '')
            ];
        }))
    };
};
const isOPDSCatalog = (str)=>{
    const parsed = parseMediaType(str);
    if (!parsed) return false;
    const { mediaType, parameters } = parsed;
    if (mediaType === MIME.OPDS2) return true;
    return mediaType === MIME.ATOM && parameters.profile?.toLowerCase() === 'opds-catalog';
};
const isOPDSSearch = (str)=>{
    const parsed = parseMediaType(str);
    if (!parsed) return false;
    const { mediaType } = parsed;
    return mediaType === MIME.ATOM;
};
// ignore the namespace if it doesn't appear in document at all
const useNS = (doc, ns)=>doc.lookupNamespaceURI(null) === ns || doc.lookupPrefix(ns) ? ns : null;
const filterNS = (ns)=>ns ? (name)=>(el)=>el.namespaceURI === ns && el.localName === name : (name)=>(el)=>el.localName === name;
const getContent = (el)=>{
    if (!el) return;
    const type = el.getAttribute('type') ?? 'text';
    const value = type === 'xhtml' ? el.innerHTML : type === 'html' ? el.textContent.replaceAll('&lt;', '<').replaceAll('&gt;', '>').replaceAll('&amp;', '&') : el.textContent;
    return {
        value,
        type
    };
};
const getTextContent = (el)=>{
    const content = getContent(el);
    if (content?.type === 'text') return content?.value;
};
const getSummary = (a, b)=>getTextContent(a) ?? getTextContent(b);
const getPrice = (link)=>{
    const price = link.getElementsByTagNameNS(NS.OPDS, 'price')[0];
    return price ? {
        currency: price.getAttribute('currencycode'),
        value: price.textContent
    } : null;
};
const getIndirectAcquisition = (el)=>{
    const ia = el.getElementsByTagNameNS(NS.OPDS, 'indirectAcquisition')[0];
    if (!ia) return [];
    return [
        {
            type: ia.getAttribute('type')
        },
        ...getIndirectAcquisition(ia)
    ];
};
const getLink = (link)=>{
    const obj = {
        rel: link.getAttribute('rel')?.split(/ +/),
        href: link.getAttribute('href'),
        type: link.getAttribute('type'),
        title: link.getAttribute('title'),
        properties: {
            price: getPrice(link),
            indirectAcquisition: getIndirectAcquisition(link),
            numberOfItems: link.getAttributeNS(NS.THR, 'count')
        },
        [FACET_GROUP]: link.getAttributeNS(NS.OPDS, 'facetGroup')
    };
    if (link.getAttributeNS(NS.OPDS, 'activeFacet') === 'true') obj.rel = [
        obj.rel ?? []
    ].flat().concat('self');
    return obj;
};
const getPerson = (person)=>{
    const NS = person.namespaceURI;
    const uri = person.getElementsByTagNameNS(NS, 'uri')[0]?.textContent;
    return {
        name: person.getElementsByTagNameNS(NS, 'name')[0]?.textContent ?? '',
        links: uri ? [
            {
                href: uri
            }
        ] : []
    };
};
const getPublication = (entry)=>{
    const filter = filterNS(useNS(entry.ownerDocument, NS.ATOM));
    const children = Array.from(entry.children);
    const filterDCEL = filterNS(NS.DC);
    const filterDCTERMS = filterNS(NS.DCTERMS);
    const filterDC = (x)=>{
        const a = filterDCEL(x), b = filterDCTERMS(x);
        return (y)=>a(y) || b(y);
    };
    const links = children.filter(filter('link')).map(getLink);
    const linksByRel = groupByArray(links, (link)=>link.rel);
    return {
        metadata: {
            title: children.find(filter('title'))?.textContent ?? '',
            author: children.filter(filter('author')).map(getPerson),
            contributor: children.filter(filter('contributor')).map(getPerson),
            publisher: children.find(filterDC('publisher'))?.textContent,
            published: (children.find(filterDCTERMS('issued')) ?? children.find(filterDC('date')))?.textContent,
            language: children.find(filterDC('language'))?.textContent,
            identifier: children.find(filterDC('identifier'))?.textContent,
            subject: children.filter(filter('category')).map((category)=>({
                    name: category.getAttribute('label'),
                    code: category.getAttribute('term'),
                    scheme: category.getAttribute('scheme')
                })),
            rights: children.find(filter('rights'))?.textContent ?? '',
            [SYMBOL.CONTENT]: getContent(children.find(filter('content')) ?? children.find(filter('summary')))
        },
        links,
        images: REL.COVER.concat(REL.THUMBNAIL).map((R)=>linksByRel.get(R)?.[0]).filter((x)=>x)
    };
};
const getFeed = (doc)=>{
    const ns = useNS(doc, NS.ATOM);
    const filter = filterNS(ns);
    const children = Array.from(doc.documentElement.children);
    const entries = children.filter(filter('entry'));
    const links = children.filter(filter('link')).map(getLink);
    const linksByRel = groupByArray(links, (link)=>link.rel);
    const groupedItems = new Map([
        [
            null,
            []
        ]
    ]);
    const groupLinkMap = new Map();
    for (const entry of entries){
        const children = Array.from(entry.children);
        const links = children.filter(filter('link')).map(getLink);
        const linksByRel = groupByArray(links, (link)=>link.rel);
        const isPub = [
            ...linksByRel.keys()
        ].some((rel)=>rel?.startsWith(REL.ACQ) || rel === 'preview');
        const groupLinks = linksByRel.get(REL.GROUP) ?? linksByRel.get('collection');
        const groupLink = groupLinks?.length ? groupLinks.find((link)=>groupedItems.has(link.href)) ?? groupLinks[0] : null;
        if (groupLink && !groupLinkMap.has(groupLink.href)) groupLinkMap.set(groupLink.href, groupLink);
        const item = isPub ? getPublication(entry) : Object.assign(links.find((link)=>isOPDSCatalog(link.type)) ?? links[0] ?? {}, {
            title: children.find(filter('title'))?.textContent,
            [SYMBOL.SUMMARY]: getSummary(children.find(filter('summary')), children.find(filter('content')))
        });
        const arr = groupedItems.get(groupLink?.href ?? null);
        if (arr) arr.push(item);
        else groupedItems.set(groupLink.href, [
            item
        ]);
    }
    const [items, ...groups] = Array.from(groupedItems, ([key, items])=>{
        const itemsKey = items[0]?.metadata ? 'publications' : 'navigation';
        if (key == null) return {
            [itemsKey]: items
        };
        const link = groupLinkMap.get(key);
        return {
            metadata: {
                title: link.title,
                numberOfItems: link.properties.numberOfItems
            },
            links: [
                {
                    rel: 'self',
                    href: link.href,
                    type: link.type
                }
            ],
            [itemsKey]: items
        };
    });
    return {
        metadata: {
            title: children.find(filter('title'))?.textContent,
            subtitle: children.find(filter('subtitle'))?.textContent
        },
        links,
        ...items,
        groups,
        facets: Array.from(groupByArray(linksByRel.get(REL.FACET) ?? [], (link)=>link[FACET_GROUP]), ([facet, links])=>({
                metadata: {
                    title: facet
                },
                links
            }))
    };
};
const getSearch = async (link)=>{
    const { replace, getVariables } = await __turbopack_context__.A("[project]/packages/foliate-js/uri-template.js [app-ssr] (ecmascript, async loader)");
    return {
        metadata: {
            title: link.title
        },
        search: (map)=>replace(link.href, map.get(null)),
        params: Array.from(getVariables(link.href), (name)=>({
                name
            }))
    };
};
const getOpenSearch = (doc)=>{
    const defaultNS = doc.documentElement.namespaceURI;
    const filter = filterNS(defaultNS);
    const children = Array.from(doc.documentElement.children);
    const $$urls = children.filter(filter('Url'));
    const $url = $$urls.find((url)=>isOPDSCatalog(url.getAttribute('type'))) ?? $$urls.find((url)=>isOPDSSearch(url.getAttribute('type'))) ?? $$urls[0];
    if (!$url) throw new Error('document must contain at least one Url element');
    const regex = /{(?:([^}]+?):)?(.+?)(\?)?}/g;
    const defaultMap = new Map([
        [
            'count',
            '100'
        ],
        [
            'startIndex',
            $url.getAttribute('indexOffset') ?? '0'
        ],
        [
            'startPage',
            $url.getAttribute('pageOffset') ?? '0'
        ],
        [
            'language',
            '*'
        ],
        [
            'inputEncoding',
            'UTF-8'
        ],
        [
            'outputEncoding',
            'UTF-8'
        ]
    ]);
    const template = $url.getAttribute('template');
    return {
        metadata: {
            title: (children.find(filter('LongName')) ?? children.find(filter('ShortName')))?.textContent,
            description: children.find(filter('Description'))?.textContent
        },
        search: (map)=>template.replace(regex, (_, prefix, param)=>{
                const namespace = prefix ? $url.lookupNamespaceURI(prefix) : null;
                const ns = namespace === defaultNS ? null : namespace;
                const val = map.get(ns)?.get(param);
                return encodeURIComponent(val ? val : !ns ? defaultMap.get(param) ?? '' : '');
            }),
        params: Array.from(template.matchAll(regex), ([, prefix, param, optional])=>{
            const namespace = prefix ? $url.lookupNamespaceURI(prefix) : null;
            const ns = namespace === defaultNS ? null : namespace;
            return {
                ns,
                name: param,
                required: !optional,
                value: ns && ns !== defaultNS ? '' : defaultMap.get(param) ?? ''
            };
        })
    };
};
}),
];

//# sourceMappingURL=packages_foliate-js_e64ea3c9._.js.map