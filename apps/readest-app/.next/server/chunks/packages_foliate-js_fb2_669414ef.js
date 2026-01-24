module.exports=[906533,e=>{"use strict";let t=e=>e?e.replace(/[\t\n\f\r ]+/g," ").replace(/^[\t\n\f\r ]+/,"").replace(/[\t\n\f\r ]+$/,""):"",r=e=>t(e?.textContent),n={XLINK:"http://www.w3.org/1999/xlink",EPUB:"http://www.idpf.org/2007/ops"},i="application/xml",o="application/xhtml+xml",l={strong:["strong","self"],emphasis:["em","self"],style:["span","self"],a:"anchor",strikethrough:["s","self"],sub:["sub","self"],sup:["sup","self"],code:["code","self"],image:"image"},a={epigraph:["blockquote"],subtitle:["h2",l],"text-author":["p",l],date:["p",l],stanza:["div","self"],v:["div",l]},s={title:["header",{p:["h1",l],"empty-line":["br"]}],epigraph:["blockquote","self"],image:"image",annotation:["aside"],section:["section","self"],p:["p",l],poem:["blockquote",a],subtitle:["h2",l],cite:["blockquote","self"],"empty-line":["br"],table:["table",{tr:["tr",{th:["th",l,["colspan","rowspan","align","valign"]],td:["td",l,["colspan","rowspan","align","valign"]]},["align"]]}],"text-author":["p",l]};a.epigraph.push(s);let c={image:"image",title:["section",{p:["h1",l],"empty-line":["br"]}],epigraph:["section",s],section:["section",s]};class u{constructor(e){this.fb2=e,this.doc=document.implementation.createDocument(n.XHTML,"html"),this.bins=new Map(Array.from(this.fb2.getElementsByTagName("binary"),e=>[e.id,e]))}getImageSrc(e){let t=e.getAttributeNS(n.XLINK,"href");if(!t)return"data:,";let[,r]=t.split("#");if(!r)return t;let i=this.bins.get(r);return i?`data:${i.getAttribute("content-type")};base64,${i.textContent}`:t}image(e){let t=this.doc.createElement("img");return t.alt=e.getAttribute("alt"),t.title=e.getAttribute("title"),t.setAttribute("src",this.getImageSrc(e)),t}anchor(e){let t=this.convert(e,{a:["a",l]});return t.setAttribute("href",e.getAttributeNS(n.XLINK,"href")),"note"===e.getAttribute("type")&&t.setAttributeNS(n.EPUB,"epub:type","noteref"),t}convert(e,t){if(3===e.nodeType)return this.doc.createTextNode(e.textContent);if(4===e.nodeType)return this.doc.createCDATASection(e.textContent);if(8===e.nodeType)return this.doc.createComment(e.textContent);let r=t?.[e.nodeName];if(!r)return null;if("string"==typeof r)return this[r](e);let[n,i,o]=r,l=this.doc.createElement(n);if(e.id&&(l.id=e.id),l.classList.add(e.nodeName),Array.isArray(o))for(let t of o){let r=e.getAttribute(t);r&&l.setAttribute(t,r)}let a="self"===i?t:i,s=e.firstChild;for(;s;){let e=this.convert(s,a);e&&l.append(e),s=s.nextSibling}return l}}let p=async e=>{let t=await e.arrayBuffer(),r=new TextDecoder("utf-8").decode(t),n=new DOMParser,o=n.parseFromString(r,i),l=o.xmlEncoding||r.match(/^<\?xml\s+version\s*=\s*["']1.\d+"\s+encoding\s*=\s*["']([A-Za-z0-9._-]*)["']/)?.[1];if(l&&"utf-8"!==l.toLowerCase()){let e=new TextDecoder(l).decode(t);return n.parseFromString(e,i)}return o},d=URL.createObjectURL(new Blob([`
@namespace epub "http://www.idpf.org/2007/ops";
body > img, section > img {
    display: block;
    margin: auto;
}
.title h1 {
    text-align: center;
}
body > section > .title, body.notesBodyType > .title {
    margin: 3em 0;
}
body.notesBodyType > section .title h1 {
    text-align: start;
}
body.notesBodyType > section .title {
    margin: 1em 0;
}
p {
    text-indent: 1em;
    margin: 0;
}
:not(p) + p, p:first-child {
    text-indent: 0;
}
.stanza {
    text-indent: 0;
    margin: 1em 0;
}
.text-author, .date {
    text-align: end;
}
.text-author:before {
    content: "—";
}
table {
    border-collapse: collapse;
}
td, th {
    padding: .25em;
}
a[epub|type~="noteref"] {
    font-size: .75em;
    vertical-align: super;
}
body:not(.notesBodyType) > .title, body:not(.notesBodyType) > .epigraph {
    margin: 3em 0;
}
`],{type:"text/css"})),m="data-foliate-id",g=async e=>{let n={},i=await p(e),l=new u(i),a=e=>[...i.querySelectorAll(e)],g=e=>{let t=r(e.querySelector("nickname"));if(t)return t;let n=r(e.querySelector("first-name")),i=r(e.querySelector("middle-name")),o=r(e.querySelector("last-name"));return{name:[n,i,o].filter(e=>e).join(" "),sortAs:o?[o,[n,i].filter(e=>e).join(" ")].join(", "):null}},f=e=>e?.getAttribute("value")??r(e),y=i.querySelector("title-info annotation");if(n.metadata={title:r(i.querySelector("title-info book-title")),identifier:r(i.querySelector("document-info id")),language:r(i.querySelector("title-info lang")),author:a("title-info author").map(g),translator:a("title-info translator").map(g),contributor:a("document-info author").map(g).concat(a("document-info program-used").map(r)).map(e=>Object.assign("string"==typeof e?{name:e}:e,{role:"bkp"})),publisher:r(i.querySelector("publish-info publisher")),published:f(i.querySelector("title-info date")),modified:f(i.querySelector("document-info date")),description:y?l.convert(y,{annotation:["div",s]}).innerHTML:null,subject:a("title-info genre").map(r)},i.querySelector("coverpage image")){let e=l.getImageSrc(i.querySelector("coverpage image"));n.getCover=()=>fetch(e).then(e=>e.blob())}else n.getCover=()=>null;let b=Array.from(i.querySelectorAll("body"),e=>{let t=l.convert(e,{body:["body",c]});return[Array.from(t.children,e=>{let t=[e,...e.querySelectorAll("[id]")].map(e=>e.id);return{el:e,ids:t}}),t]}),h=[],x=b[0][0].map(({el:e,ids:t})=>({ids:t,titles:Array.from(e.querySelectorAll(":scope > section > .title"),(e,t)=>(e.setAttribute(m,t),{title:r(e),index:t})),el:e})).concat(b.slice(1).map(([e,t])=>{let r=e.map(e=>e.ids).flat();return t.classList.add("notesBodyType"),{ids:r,el:t,linear:"no"}})).map(({ids:e,titles:r,el:n,linear:i})=>{let l,a=(l=n.outerHTML,`<?xml version="1.0" encoding="utf-8"?>
<html xmlns="http://www.w3.org/1999/xhtml">
    <head><link href="${d}" rel="stylesheet" type="text/css"/></head>
    <body>${l}</body>
</html>`),s=new Blob([a],{type:o}),c=URL.createObjectURL(s);return h.push(c),{ids:e,title:t(n.querySelector(".title, .subtitle, p")?.textContent??(n.classList.contains("title")?n.textContent:"")),titles:r,load:()=>c,createDocument:()=>new DOMParser().parseFromString(a,o),size:s.size-Array.from(n.querySelectorAll("[src]"),e=>e.getAttribute("src")?.length??0).reduce((e,t)=>e+t,0),linear:i}}),S=new Map;return n.sections=x.map((e,t)=>{let{ids:r,load:n,createDocument:i,size:o,linear:l}=e;for(let e of r)e&&S.set(e,t);return{id:t,load:n,createDocument:i,size:o,linear:l}}),n.toc=x.map(({title:e,titles:t},r)=>{let n=r.toString();return{label:e,href:n,subitems:t?.length?t.map(({title:e,index:t})=>({label:e,href:`${n}#${t}`})):null}}).filter(e=>e),n.resolveHref=e=>{let[t,r]=e.split("#");return t?{index:Number(t),anchor:e=>e.querySelector(`[${m}="${r}"]`)}:{index:S.get(r),anchor:e=>e.getElementById(r)}},n.splitTOCHref=e=>e?.split("#")?.map(e=>Number(e))??[],n.getTOCFragment=(e,t)=>e.querySelector(`[${m}="${t}"]`),n.destroy=()=>{for(let e of h)URL.revokeObjectURL(e)},n};e.s(["makeFB2",0,g])}];

//# sourceMappingURL=packages_foliate-js_fb2_669414ef.js.map