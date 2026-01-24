module.exports=[95448,a=>{"use strict";let b=a=>a?a.replace(/[\t\n\f\r ]+/g," ").replace(/^[\t\n\f\r ]+/,"").replace(/[\t\n\f\r ]+$/,""):"",c=a=>b(a?.textContent),d={XLINK:"http://www.w3.org/1999/xlink",EPUB:"http://www.idpf.org/2007/ops"},e="application/xml",f="application/xhtml+xml",g={strong:["strong","self"],emphasis:["em","self"],style:["span","self"],a:"anchor",strikethrough:["s","self"],sub:["sub","self"],sup:["sup","self"],code:["code","self"],image:"image"},h={epigraph:["blockquote"],subtitle:["h2",g],"text-author":["p",g],date:["p",g],stanza:["div","self"],v:["div",g]},i={title:["header",{p:["h1",g],"empty-line":["br"]}],epigraph:["blockquote","self"],image:"image",annotation:["aside"],section:["section","self"],p:["p",g],poem:["blockquote",h],subtitle:["h2",g],cite:["blockquote","self"],"empty-line":["br"],table:["table",{tr:["tr",{th:["th",g,["colspan","rowspan","align","valign"]],td:["td",g,["colspan","rowspan","align","valign"]]},["align"]]}],"text-author":["p",g]};h.epigraph.push(i);let j={image:"image",title:["section",{p:["h1",g],"empty-line":["br"]}],epigraph:["section",i],section:["section",i]};class k{constructor(a){this.fb2=a,this.doc=document.implementation.createDocument(d.XHTML,"html"),this.bins=new Map(Array.from(this.fb2.getElementsByTagName("binary"),a=>[a.id,a]))}getImageSrc(a){let b=a.getAttributeNS(d.XLINK,"href");if(!b)return"data:,";let[,c]=b.split("#");if(!c)return b;let e=this.bins.get(c);return e?`data:${e.getAttribute("content-type")};base64,${e.textContent}`:b}image(a){let b=this.doc.createElement("img");return b.alt=a.getAttribute("alt"),b.title=a.getAttribute("title"),b.setAttribute("src",this.getImageSrc(a)),b}anchor(a){let b=this.convert(a,{a:["a",g]});return b.setAttribute("href",a.getAttributeNS(d.XLINK,"href")),"note"===a.getAttribute("type")&&b.setAttributeNS(d.EPUB,"epub:type","noteref"),b}convert(a,b){if(3===a.nodeType)return this.doc.createTextNode(a.textContent);if(4===a.nodeType)return this.doc.createCDATASection(a.textContent);if(8===a.nodeType)return this.doc.createComment(a.textContent);let c=b?.[a.nodeName];if(!c)return null;if("string"==typeof c)return this[c](a);let[d,e,f]=c,g=this.doc.createElement(d);if(a.id&&(g.id=a.id),g.classList.add(a.nodeName),Array.isArray(f))for(let b of f){let c=a.getAttribute(b);c&&g.setAttribute(b,c)}let h="self"===e?b:e,i=a.firstChild;for(;i;){let a=this.convert(i,h);a&&g.append(a),i=i.nextSibling}return g}}let l=async a=>{let b=await a.arrayBuffer(),c=new TextDecoder("utf-8").decode(b),d=new DOMParser,f=d.parseFromString(c,e),g=f.xmlEncoding||c.match(/^<\?xml\s+version\s*=\s*["']1.\d+"\s+encoding\s*=\s*["']([A-Za-z0-9._-]*)["']/)?.[1];if(g&&"utf-8"!==g.toLowerCase()){let a=new TextDecoder(g).decode(b);return d.parseFromString(a,e)}return f},m=URL.createObjectURL(new Blob([`
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
`],{type:"text/css"})),n="data-foliate-id",o=async a=>{let d={},e=await l(a),g=new k(e),h=a=>[...e.querySelectorAll(a)],o=a=>{let b=c(a.querySelector("nickname"));if(b)return b;let d=c(a.querySelector("first-name")),e=c(a.querySelector("middle-name")),f=c(a.querySelector("last-name"));return{name:[d,e,f].filter(a=>a).join(" "),sortAs:f?[f,[d,e].filter(a=>a).join(" ")].join(", "):null}},p=a=>a?.getAttribute("value")??c(a),q=e.querySelector("title-info annotation");if(d.metadata={title:c(e.querySelector("title-info book-title")),identifier:c(e.querySelector("document-info id")),language:c(e.querySelector("title-info lang")),author:h("title-info author").map(o),translator:h("title-info translator").map(o),contributor:h("document-info author").map(o).concat(h("document-info program-used").map(c)).map(a=>Object.assign("string"==typeof a?{name:a}:a,{role:"bkp"})),publisher:c(e.querySelector("publish-info publisher")),published:p(e.querySelector("title-info date")),modified:p(e.querySelector("document-info date")),description:q?g.convert(q,{annotation:["div",i]}).innerHTML:null,subject:h("title-info genre").map(c)},e.querySelector("coverpage image")){let a=g.getImageSrc(e.querySelector("coverpage image"));d.getCover=()=>fetch(a).then(a=>a.blob())}else d.getCover=()=>null;let r=Array.from(e.querySelectorAll("body"),a=>{let b=g.convert(a,{body:["body",j]});return[Array.from(b.children,a=>{let b=[a,...a.querySelectorAll("[id]")].map(a=>a.id);return{el:a,ids:b}}),b]}),s=[],t=r[0][0].map(({el:a,ids:b})=>({ids:b,titles:Array.from(a.querySelectorAll(":scope > section > .title"),(a,b)=>(a.setAttribute(n,b),{title:c(a),index:b})),el:a})).concat(r.slice(1).map(([a,b])=>{let c=a.map(a=>a.ids).flat();return b.classList.add("notesBodyType"),{ids:c,el:b,linear:"no"}})).map(({ids:a,titles:c,el:d,linear:e})=>{let g,h=(g=d.outerHTML,`<?xml version="1.0" encoding="utf-8"?>
<html xmlns="http://www.w3.org/1999/xhtml">
    <head><link href="${m}" rel="stylesheet" type="text/css"/></head>
    <body>${g}</body>
</html>`),i=new Blob([h],{type:f}),j=URL.createObjectURL(i);return s.push(j),{ids:a,title:b(d.querySelector(".title, .subtitle, p")?.textContent??(d.classList.contains("title")?d.textContent:"")),titles:c,load:()=>j,createDocument:()=>new DOMParser().parseFromString(h,f),size:i.size-Array.from(d.querySelectorAll("[src]"),a=>a.getAttribute("src")?.length??0).reduce((a,b)=>a+b,0),linear:e}}),u=new Map;return d.sections=t.map((a,b)=>{let{ids:c,load:d,createDocument:e,size:f,linear:g}=a;for(let a of c)a&&u.set(a,b);return{id:b,load:d,createDocument:e,size:f,linear:g}}),d.toc=t.map(({title:a,titles:b},c)=>{let d=c.toString();return{label:a,href:d,subitems:b?.length?b.map(({title:a,index:b})=>({label:a,href:`${d}#${b}`})):null}}).filter(a=>a),d.resolveHref=a=>{let[b,c]=a.split("#");return b?{index:Number(b),anchor:a=>a.querySelector(`[${n}="${c}"]`)}:{index:u.get(c),anchor:a=>a.getElementById(c)}},d.splitTOCHref=a=>a?.split("#")?.map(a=>Number(a))??[],d.getTOCFragment=(a,b)=>a.querySelector(`[${n}="${b}"]`),d.destroy=()=>{for(let a of s)URL.revokeObjectURL(a)},d};a.s(["makeFB2",0,o])}];

//# sourceMappingURL=packages_foliate-js_fb2_00c60b6c.js.map