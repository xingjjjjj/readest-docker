module.exports=[522298,(a,b,c)=>{"use strict";function d(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(d=function(a){return a?c:b})(a)}c._=function(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var c=d(b);if(c&&c.has(a))return c.get(a);var e={__proto__:null},f=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var g in a)if("default"!==g&&Object.prototype.hasOwnProperty.call(a,g)){var h=f?Object.getOwnPropertyDescriptor(a,g):null;h&&(h.get||h.set)?Object.defineProperty(e,g,h):e[g]=a[g]}return e.default=a,c&&c.set(a,e),e}},841857,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"default",{enumerable:!0,get:function(){return f}});let d=a.r(127669),e=()=>{};function f(a){let{headManager:b,reduceComponentsToState:c}=a;function f(){if(b&&b.mountedInstances){let a=d.Children.toArray(Array.from(b.mountedInstances).filter(Boolean));b.updateHead(c(a))}}return b?.mountedInstances?.add(a.children),f(),e(()=>(b?.mountedInstances?.add(a.children),()=>{b?.mountedInstances?.delete(a.children)})),e(()=>(b&&(b._pendingUpdate=f),()=>{b&&(b._pendingUpdate=f)})),null}},577087,(a,b,c)=>{"use strict";b.exports=a.r(772984).vendored.contexts.HeadManagerContext},734068,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"warnOnce",{enumerable:!0,get:function(){return d}});let d=a=>{}},572285,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={default:function(){return p},defaultHead:function(){return l}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f=a.r(5218),g=a.r(522298),h=a.r(508171),i=g._(a.r(127669)),j=f._(a.r(841857)),k=a.r(577087);function l(){return[(0,h.jsx)("meta",{charSet:"utf-8"},"charset"),(0,h.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")]}function m(a,b){return"string"==typeof b||"number"==typeof b?a:b.type===i.default.Fragment?a.concat(i.default.Children.toArray(b.props.children).reduce((a,b)=>"string"==typeof b||"number"==typeof b?a:a.concat(b),[])):a.concat(b)}a.r(734068);let n=["name","httpEquiv","charSet","itemProp"];function o(a){let b,c,d,e;return a.reduce(m,[]).reverse().concat(l().reverse()).filter((b=new Set,c=new Set,d=new Set,e={},a=>{let f=!0,g=!1;if(a.key&&"number"!=typeof a.key&&a.key.indexOf("$")>0){g=!0;let c=a.key.slice(a.key.indexOf("$")+1);b.has(c)?f=!1:b.add(c)}switch(a.type){case"title":case"base":c.has(a.type)?f=!1:c.add(a.type);break;case"meta":for(let b=0,c=n.length;b<c;b++){let c=n[b];if(a.props.hasOwnProperty(c))if("charSet"===c)d.has(c)?f=!1:d.add(c);else{let b=a.props[c],d=e[c]||new Set;("name"!==c||!g)&&d.has(b)?f=!1:(d.add(b),e[c]=d)}}}return f})).reverse().map((a,b)=>{let c=a.key||b;return i.default.cloneElement(a,{key:c})})}let p=function({children:a}){let b=(0,i.useContext)(k.HeadManagerContext);return(0,h.jsx)(j.default,{reduceComponentsToState:o,headManager:b,children:a})};("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},748040,(a,b,c)=>{b.exports=a.r(572285)},178552,a=>{"use strict";var b=a.i(508171),c=a.i(127669),d=a.i(557469);let e=(0,c.createContext)(void 0);a.s(["EnvProvider",0,({children:a})=>{let[f]=(0,c.useState)(d.default),[g,h]=(0,c.useState)(null);return c.default.useEffect(()=>{f.getAppService().then(a=>h(a)),window.addEventListener("error",a=>"ResizeObserver loop limit exceeded"===a.message&&(a.stopImmediatePropagation(),a.preventDefault(),!0))},[f]),(0,b.jsx)(e.Provider,{value:{envConfig:f,appService:g},children:a})},"useEnv",0,()=>{let a=(0,c.useContext)(e);if(!a)throw Error("useEnv must be used within EnvProvider");return a}])},330900,(a,b,c)=>{Object.groupBy??=(a,b)=>{let c=Object.create(null),d=0;for(let e of a){let a=b(e,d++);a in c?c[a].push(e):c[a]=[e]}return c},Map.groupBy??=(a,b)=>{let c=new Map,d=0;for(let e of a){let a=b(e,d++),f=c.get(a);f?f.push(e):c.set(a,[e])}return c}},197608,(a,b,c)=>{b.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}},663182,(a,b,c)=>{b.exports={input:["src/**/*.{js,jsx,ts,tsx}","!src/**/*.test.{js,jsx,ts,tsx}"],output:".",options:{debug:!1,sort:!1,func:{list:["_"],extensions:[".js",".jsx",".ts",".tsx"]},lngs:["de","ja","es","fa","fr","it","el","ko","uk","nl","sv","pl","pt","ru","tr","hi","id","vi","ms","ar","th","bo","bn","ta","si","zh-CN","zh-TW"],ns:["translation"],defaultNs:"translation",defaultValue:"__STRING_NOT_TRANSLATED__",resource:{loadPath:"./public/locales/{{lng}}/{{ns}}.json",savePath:"./public/locales/{{lng}}/{{ns}}.json",jsonIndent:2,lineEnding:"\n"},keySeparator:!1,nsSeparator:!1,interpolation:{prefix:"{{",suffix:"}}"},metadata:{},allowDynamicKeys:!0,removeUnusedKeys:!0}}},70521,959805,247637,a=>{"use strict";let b,c=a=>"string"==typeof a,d=()=>{let a,b,c=new Promise((c,d)=>{a=c,b=d});return c.resolve=a,c.reject=b,c},e=a=>null==a?"":""+a,f=/###/g,g=a=>a&&a.indexOf("###")>-1?a.replace(f,"."):a,h=a=>!a||c(a),i=(a,b,d)=>{let e=c(b)?b.split("."):b,f=0;for(;f<e.length-1;){if(h(a))return{};let b=g(e[f]);!a[b]&&d&&(a[b]=new d),a=Object.prototype.hasOwnProperty.call(a,b)?a[b]:{},++f}return h(a)?{}:{obj:a,k:g(e[f])}},j=(a,b,c)=>{let{obj:d,k:e}=i(a,b,Object);if(void 0!==d||1===b.length){d[e]=c;return}let f=b[b.length-1],g=b.slice(0,b.length-1),h=i(a,g,Object);for(;void 0===h.obj&&g.length;)f=`${g[g.length-1]}.${f}`,h=i(a,g=g.slice(0,g.length-1),Object),h?.obj&&void 0!==h.obj[`${h.k}.${f}`]&&(h.obj=void 0);h.obj[`${h.k}.${f}`]=c},k=(a,b)=>{let{obj:c,k:d}=i(a,b);if(c&&Object.prototype.hasOwnProperty.call(c,d))return c[d]},l=(a,b,d)=>{for(let e in b)"__proto__"!==e&&"constructor"!==e&&(e in a?c(a[e])||a[e]instanceof String||c(b[e])||b[e]instanceof String?d&&(a[e]=b[e]):l(a[e],b[e],d):a[e]=b[e]);return a};var m={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};let n=a=>c(a)?a.replace(/[&<>"'\/]/g,a=>m[a]):a,o=[" ",",","?","!",";"],p=new class{constructor(a){this.capacity=a,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(a){let b=this.regExpMap.get(a);if(void 0!==b)return b;let c=new RegExp(a);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(a,c),this.regExpQueue.push(a),c}}(20),q=function(a,b){let c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:".";if(!a)return;if(a[b]){if(!Object.prototype.hasOwnProperty.call(a,b))return;return a[b]}let d=b.split(c),e=a;for(let a=0;a<d.length;){let b;if(!e||"object"!=typeof e)return;let f="";for(let g=a;g<d.length;++g)if(g!==a&&(f+=c),f+=d[g],void 0!==(b=e[f])){if(["string","number","boolean"].indexOf(typeof b)>-1&&g<d.length-1)continue;a+=g-a+1;break}e=b}return e},r=a=>a?.replace("_","-"),s={type:"logger",log(a){this.output("log",a)},warn(a){this.output("warn",a)},error(a){this.output("error",a)},output(a,b){console?.[a]?.apply?.(console,b)}};class t{constructor(a){let b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.init(a,b)}init(a){let b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.prefix=b.prefix||"i18next:",this.logger=a||s,this.options=b,this.debug=b.debug}log(){for(var a=arguments.length,b=Array(a),c=0;c<a;c++)b[c]=arguments[c];return this.forward(b,"log","",!0)}warn(){for(var a=arguments.length,b=Array(a),c=0;c<a;c++)b[c]=arguments[c];return this.forward(b,"warn","",!0)}error(){for(var a=arguments.length,b=Array(a),c=0;c<a;c++)b[c]=arguments[c];return this.forward(b,"error","")}deprecate(){for(var a=arguments.length,b=Array(a),c=0;c<a;c++)b[c]=arguments[c];return this.forward(b,"warn","WARNING DEPRECATED: ",!0)}forward(a,b,d,e){return e&&!this.debug?null:(c(a[0])&&(a[0]=`${d}${this.prefix} ${a[0]}`),this.logger[b](a))}create(a){return new t(this.logger,{...{prefix:`${this.prefix}:${a}:`},...this.options})}clone(a){return(a=a||this.options).prefix=a.prefix||this.prefix,new t(this.logger,a)}}var u=new t;class v{constructor(){this.observers={}}on(a,b){return a.split(" ").forEach(a=>{this.observers[a]||(this.observers[a]=new Map);let c=this.observers[a].get(b)||0;this.observers[a].set(b,c+1)}),this}off(a,b){if(this.observers[a]){if(!b)return void delete this.observers[a];this.observers[a].delete(b)}}emit(a){for(var b=arguments.length,c=Array(b>1?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];this.observers[a]&&Array.from(this.observers[a].entries()).forEach(a=>{let[b,d]=a;for(let a=0;a<d;a++)b(...c)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(b=>{let[d,e]=b;for(let b=0;b<e;b++)d.apply(d,[a,...c])})}}class w extends v{constructor(a){let b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=a||{},this.options=b,void 0===this.options.keySeparator&&(this.options.keySeparator="."),void 0===this.options.ignoreJSONStructure&&(this.options.ignoreJSONStructure=!0)}addNamespaces(a){0>this.options.ns.indexOf(a)&&this.options.ns.push(a)}removeNamespaces(a){let b=this.options.ns.indexOf(a);b>-1&&this.options.ns.splice(b,1)}getResource(a,b,d){let e,f=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},g=void 0!==f.keySeparator?f.keySeparator:this.options.keySeparator,h=void 0!==f.ignoreJSONStructure?f.ignoreJSONStructure:this.options.ignoreJSONStructure;a.indexOf(".")>-1?e=a.split("."):(e=[a,b],d&&(Array.isArray(d)?e.push(...d):c(d)&&g?e.push(...d.split(g)):e.push(d)));let i=k(this.data,e);return(!i&&!b&&!d&&a.indexOf(".")>-1&&(a=e[0],b=e[1],d=e.slice(2).join(".")),!i&&h&&c(d))?q(this.data?.[a]?.[b],d,g):i}addResource(a,b,c,d){let e=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{silent:!1},f=void 0!==e.keySeparator?e.keySeparator:this.options.keySeparator,g=[a,b];c&&(g=g.concat(f?c.split(f):c)),a.indexOf(".")>-1&&(g=a.split("."),d=b,b=g[1]),this.addNamespaces(b),j(this.data,g,d),e.silent||this.emit("added",a,b,c,d)}addResources(a,b,d){let e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{silent:!1};for(let e in d)(c(d[e])||Array.isArray(d[e]))&&this.addResource(a,b,e,d[e],{silent:!0});e.silent||this.emit("added",a,b,d)}addResourceBundle(a,b,c,d,e){let f=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{silent:!1,skipCopy:!1},g=[a,b];a.indexOf(".")>-1&&(g=a.split("."),d=c,c=b,b=g[1]),this.addNamespaces(b);let h=k(this.data,g)||{};f.skipCopy||(c=JSON.parse(JSON.stringify(c))),d?l(h,c,e):h={...h,...c},j(this.data,g,h),f.silent||this.emit("added",a,b,c)}removeResourceBundle(a,b){this.hasResourceBundle(a,b)&&delete this.data[a][b],this.removeNamespaces(b),this.emit("removed",a,b)}hasResourceBundle(a,b){return void 0!==this.getResource(a,b)}getResourceBundle(a,b){return b||(b=this.options.defaultNS),this.getResource(a,b)}getDataByLanguage(a){return this.data[a]}hasLanguageSomeTranslations(a){let b=this.getDataByLanguage(a);return!!(b&&Object.keys(b)||[]).find(a=>b[a]&&Object.keys(b[a]).length>0)}toJSON(){return this.data}}var x={processors:{},addPostProcessor(a){this.processors[a.name]=a},handle(a,b,c,d,e){return a.forEach(a=>{b=this.processors[a]?.process(b,c,d,e)??b}),b}};let y={};class z extends v{constructor(a){let b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};super(),((a,b,c)=>{a.forEach(a=>{b[a]&&(c[a]=b[a])})})(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],a,this),this.options=b,void 0===this.options.keySeparator&&(this.options.keySeparator="."),this.logger=u.create("translator")}changeLanguage(a){a&&(this.language=a)}exists(a){let b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{interpolation:{}};if(null==a)return!1;let c=this.resolve(a,b);return c?.res!==void 0}extractFromKey(a,b){let d=void 0!==b.nsSeparator?b.nsSeparator:this.options.nsSeparator;void 0===d&&(d=":");let e=void 0!==b.keySeparator?b.keySeparator:this.options.keySeparator,f=b.ns||this.options.defaultNS||[],g=d&&a.indexOf(d)>-1,h=!this.options.userDefinedKeySeparator&&!b.keySeparator&&!this.options.userDefinedNsSeparator&&!b.nsSeparator&&!((a,b,c)=>{b=b||"",c=c||"";let d=o.filter(a=>0>b.indexOf(a)&&0>c.indexOf(a));if(0===d.length)return!0;let e=p.getRegExp(`(${d.map(a=>"?"===a?"\\?":a).join("|")})`),f=!e.test(a);if(!f){let b=a.indexOf(c);b>0&&!e.test(a.substring(0,b))&&(f=!0)}return f})(a,d,e);if(g&&!h){let b=a.match(this.interpolator.nestingRegexp);if(b&&b.length>0)return{key:a,namespaces:c(f)?[f]:f};let g=a.split(d);(d!==e||d===e&&this.options.ns.indexOf(g[0])>-1)&&(f=g.shift()),a=g.join(e)}return{key:a,namespaces:c(f)?[f]:f}}translate(a,b,d){if("object"!=typeof b&&this.options.overloadTranslationOptionHandler&&(b=this.options.overloadTranslationOptionHandler(arguments)),"object"==typeof b&&(b={...b}),b||(b={}),null==a)return"";Array.isArray(a)||(a=[String(a)]);let e=void 0!==b.returnDetails?b.returnDetails:this.options.returnDetails,f=void 0!==b.keySeparator?b.keySeparator:this.options.keySeparator,{key:g,namespaces:h}=this.extractFromKey(a[a.length-1],b),i=h[h.length-1],j=b.lng||this.language,k=b.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(j?.toLowerCase()==="cimode"){if(k){let a=b.nsSeparator||this.options.nsSeparator;return e?{res:`${i}${a}${g}`,usedKey:g,exactUsedKey:g,usedLng:j,usedNS:i,usedParams:this.getUsedParamsDetails(b)}:`${i}${a}${g}`}return e?{res:g,usedKey:g,exactUsedKey:g,usedLng:j,usedNS:i,usedParams:this.getUsedParamsDetails(b)}:g}let l=this.resolve(a,b),m=l?.res,n=l?.usedKey||g,o=l?.exactUsedKey||g,p=Object.prototype.toString.apply(m),q=void 0!==b.joinArrays?b.joinArrays:this.options.joinArrays,r=!this.i18nFormat||this.i18nFormat.handleAsObject,s=!c(m)&&"boolean"!=typeof m&&"number"!=typeof m;if(r&&m&&s&&0>["[object Number]","[object Function]","[object RegExp]"].indexOf(p)&&!(c(q)&&Array.isArray(m))){if(!b.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");let a=this.options.returnedObjectHandler?this.options.returnedObjectHandler(n,m,{...b,ns:h}):`key '${g} (${this.language})' returned an object instead of string.`;return e?(l.res=a,l.usedParams=this.getUsedParamsDetails(b),l):a}if(f){let a=Array.isArray(m),c=a?[]:{},d=a?o:n;for(let a in m)if(Object.prototype.hasOwnProperty.call(m,a)){let e=`${d}${f}${a}`;c[a]=this.translate(e,{...b,joinArrays:!1,ns:h}),c[a]===e&&(c[a]=m[a])}m=c}}else if(r&&c(q)&&Array.isArray(m))(m=m.join(q))&&(m=this.extendTranslation(m,a,b,d));else{let e=!1,h=!1,k=void 0!==b.count&&!c(b.count),n=z.hasDefaultValue(b),o=k?this.pluralResolver.getSuffix(j,b.count,b):"",p=b.ordinal&&k?this.pluralResolver.getSuffix(j,b.count,{ordinal:!1}):"",q=k&&!b.ordinal&&0===b.count,r=q&&b[`defaultValue${this.options.pluralSeparator}zero`]||b[`defaultValue${o}`]||b[`defaultValue${p}`]||b.defaultValue;!this.isValidLookup(m)&&n&&(e=!0,m=r),this.isValidLookup(m)||(h=!0,m=g);let s=(b.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&h?void 0:m,t=n&&r!==m&&this.options.updateMissing;if(h||e||t){if(this.logger.log(t?"updateKey":"missingKey",j,i,g,t?r:m),f){let a=this.resolve(g,{...b,keySeparator:!1});a&&a.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let a=[],c=this.languageUtils.getFallbackCodes(this.options.fallbackLng,b.lng||this.language);if("fallback"===this.options.saveMissingTo&&c&&c[0])for(let b=0;b<c.length;b++)a.push(c[b]);else"all"===this.options.saveMissingTo?a=this.languageUtils.toResolveHierarchy(b.lng||this.language):a.push(b.lng||this.language);let d=(a,c,d)=>{let e=n&&d!==m?d:s;this.options.missingKeyHandler?this.options.missingKeyHandler(a,i,c,e,t,b):this.backendConnector?.saveMissing&&this.backendConnector.saveMissing(a,i,c,e,t,b),this.emit("missingKey",a,i,c,m)};this.options.saveMissing&&(this.options.saveMissingPlurals&&k?a.forEach(a=>{let c=this.pluralResolver.getSuffixes(a,b);q&&b[`defaultValue${this.options.pluralSeparator}zero`]&&0>c.indexOf(`${this.options.pluralSeparator}zero`)&&c.push(`${this.options.pluralSeparator}zero`),c.forEach(c=>{d([a],g+c,b[`defaultValue${c}`]||r)})}):d(a,g,r))}m=this.extendTranslation(m,a,b,l,d),h&&m===g&&this.options.appendNamespaceToMissingKey&&(m=`${i}:${g}`),(h||e)&&this.options.parseMissingKeyHandler&&(m=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${i}:${g}`:g,e?m:void 0))}return e?(l.res=m,l.usedParams=this.getUsedParamsDetails(b),l):m}extendTranslation(a,b,d,e,f){var g=this;if(this.i18nFormat?.parse)a=this.i18nFormat.parse(a,{...this.options.interpolation.defaultVariables,...d},d.lng||this.language||e.usedLng,e.usedNS,e.usedKey,{resolved:e});else if(!d.skipInterpolation){let h;d.interpolation&&this.interpolator.init({...d,...{interpolation:{...this.options.interpolation,...d.interpolation}}});let i=c(a)&&(d?.interpolation?.skipOnVariables!==void 0?d.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);if(i){let b=a.match(this.interpolator.nestingRegexp);h=b&&b.length}let j=d.replace&&!c(d.replace)?d.replace:d;if(this.options.interpolation.defaultVariables&&(j={...this.options.interpolation.defaultVariables,...j}),a=this.interpolator.interpolate(a,j,d.lng||this.language||e.usedLng,d),i){let b=a.match(this.interpolator.nestingRegexp);h<(b&&b.length)&&(d.nest=!1)}!d.lng&&e&&e.res&&(d.lng=this.language||e.usedLng),!1!==d.nest&&(a=this.interpolator.nest(a,function(){for(var a=arguments.length,c=Array(a),e=0;e<a;e++)c[e]=arguments[e];return f?.[0]!==c[0]||d.context?g.translate(...c,b):(g.logger.warn(`It seems you are nesting recursively key: ${c[0]} in key: ${b[0]}`),null)},d)),d.interpolation&&this.interpolator.reset()}let h=d.postProcess||this.options.postProcess,i=c(h)?[h]:h;return null!=a&&i?.length&&!1!==d.applyPostProcessor&&(a=x.handle(i,a,b,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...e,usedParams:this.getUsedParamsDetails(d)},...d}:d,this)),a}resolve(a){let b,d,e,f,g,h=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return c(a)&&(a=[a]),a.forEach(a=>{if(this.isValidLookup(b))return;let i=this.extractFromKey(a,h),j=i.key;d=j;let k=i.namespaces;this.options.fallbackNS&&(k=k.concat(this.options.fallbackNS));let l=void 0!==h.count&&!c(h.count),m=l&&!h.ordinal&&0===h.count,n=void 0!==h.context&&(c(h.context)||"number"==typeof h.context)&&""!==h.context,o=h.lngs?h.lngs:this.languageUtils.toResolveHierarchy(h.lng||this.language,h.fallbackLng);k.forEach(a=>{this.isValidLookup(b)||(g=a,!y[`${o[0]}-${a}`]&&this.utils?.hasLoadedNamespace&&!this.utils?.hasLoadedNamespace(g)&&(y[`${o[0]}-${a}`]=!0,this.logger.warn(`key "${d}" for languages "${o.join(", ")}" won't get resolved as namespace "${g}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),o.forEach(c=>{let d;if(this.isValidLookup(b))return;f=c;let g=[j];if(this.i18nFormat?.addLookupKeys)this.i18nFormat.addLookupKeys(g,j,c,a,h);else{let a;l&&(a=this.pluralResolver.getSuffix(c,h.count,h));let b=`${this.options.pluralSeparator}zero`,d=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(l&&(g.push(j+a),h.ordinal&&0===a.indexOf(d)&&g.push(j+a.replace(d,this.options.pluralSeparator)),m&&g.push(j+b)),n){let c=`${j}${this.options.contextSeparator}${h.context}`;g.push(c),l&&(g.push(c+a),h.ordinal&&0===a.indexOf(d)&&g.push(c+a.replace(d,this.options.pluralSeparator)),m&&g.push(c+b))}}for(;d=g.pop();)this.isValidLookup(b)||(e=d,b=this.getResource(c,a,d,h))}))})}),{res:b,usedKey:d,exactUsedKey:e,usedLng:f,usedNS:g}}isValidLookup(a){return void 0!==a&&!(!this.options.returnNull&&null===a)&&!(!this.options.returnEmptyString&&""===a)}getResource(a,b,c){let d=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return this.i18nFormat?.getResource?this.i18nFormat.getResource(a,b,c,d):this.resourceStore.getResource(a,b,c,d)}getUsedParamsDetails(){let a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},b=a.replace&&!c(a.replace),d=b?a.replace:a;if(b&&void 0!==a.count&&(d.count=a.count),this.options.interpolation.defaultVariables&&(d={...this.options.interpolation.defaultVariables,...d}),!b)for(let a of(d={...d},["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"]))delete d[a];return d}static hasDefaultValue(a){let b="defaultValue";for(let c in a)if(Object.prototype.hasOwnProperty.call(a,c)&&b===c.substring(0,b.length)&&void 0!==a[c])return!0;return!1}}class A{constructor(a){this.options=a,this.supportedLngs=this.options.supportedLngs||!1,this.logger=u.create("languageUtils")}getScriptPartFromCode(a){if(!(a=r(a))||0>a.indexOf("-"))return null;let b=a.split("-");return 2===b.length||(b.pop(),"x"===b[b.length-1].toLowerCase())?null:this.formatLanguageCode(b.join("-"))}getLanguagePartFromCode(a){if(!(a=r(a))||0>a.indexOf("-"))return a;let b=a.split("-");return this.formatLanguageCode(b[0])}formatLanguageCode(a){if(c(a)&&a.indexOf("-")>-1){let b;try{b=Intl.getCanonicalLocales(a)[0]}catch(a){}return(b&&this.options.lowerCaseLng&&(b=b.toLowerCase()),b)?b:this.options.lowerCaseLng?a.toLowerCase():a}return this.options.cleanCode||this.options.lowerCaseLng?a.toLowerCase():a}isSupportedCode(a){return("languageOnly"===this.options.load||this.options.nonExplicitSupportedLngs)&&(a=this.getLanguagePartFromCode(a)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(a)>-1}getBestMatchFromCodes(a){let b;return a?(a.forEach(a=>{if(b)return;let c=this.formatLanguageCode(a);(!this.options.supportedLngs||this.isSupportedCode(c))&&(b=c)}),!b&&this.options.supportedLngs&&a.forEach(a=>{if(b)return;let c=this.getLanguagePartFromCode(a);if(this.isSupportedCode(c))return b=c;b=this.options.supportedLngs.find(a=>{if(a===c||!(0>a.indexOf("-")&&0>c.indexOf("-"))&&(a.indexOf("-")>0&&0>c.indexOf("-")&&a.substring(0,a.indexOf("-"))===c||0===a.indexOf(c)&&c.length>1))return a})}),b||(b=this.getFallbackCodes(this.options.fallbackLng)[0]),b):null}getFallbackCodes(a,b){if(!a)return[];if("function"==typeof a&&(a=a(b)),c(a)&&(a=[a]),Array.isArray(a))return a;if(!b)return a.default||[];let d=a[b];return d||(d=a[this.getScriptPartFromCode(b)]),d||(d=a[this.formatLanguageCode(b)]),d||(d=a[this.getLanguagePartFromCode(b)]),d||(d=a.default),d||[]}toResolveHierarchy(a,b){let d=this.getFallbackCodes(b||this.options.fallbackLng||[],a),e=[],f=a=>{a&&(this.isSupportedCode(a)?e.push(a):this.logger.warn(`rejecting language code not found in supportedLngs: ${a}`))};return c(a)&&(a.indexOf("-")>-1||a.indexOf("_")>-1)?("languageOnly"!==this.options.load&&f(this.formatLanguageCode(a)),"languageOnly"!==this.options.load&&"currentOnly"!==this.options.load&&f(this.getScriptPartFromCode(a)),"currentOnly"!==this.options.load&&f(this.getLanguagePartFromCode(a))):c(a)&&f(this.formatLanguageCode(a)),d.forEach(a=>{0>e.indexOf(a)&&f(this.formatLanguageCode(a))}),e}}let B={zero:0,one:1,two:2,few:3,many:4,other:5},C={select:a=>1===a?"one":"other",resolvedOptions:()=>({pluralCategories:["one","other"]})};class D{constructor(a){let b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.languageUtils=a,this.options=b,this.logger=u.create("pluralResolver"),this.pluralRulesCache={}}addRule(a,b){this.rules[a]=b}clearCache(){this.pluralRulesCache={}}getRule(a){let b,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},d=r("dev"===a?"en":a),e=c.ordinal?"ordinal":"cardinal",f=JSON.stringify({cleanedCode:d,type:e});if(f in this.pluralRulesCache)return this.pluralRulesCache[f];try{b=new Intl.PluralRules(d,{type:e})}catch(e){if(!Intl)return this.logger.error("No Intl support, please use an Intl polyfill!"),C;if(!a.match(/-|_/))return C;let d=this.languageUtils.getLanguagePartFromCode(a);b=this.getRule(d,c)}return this.pluralRulesCache[f]=b,b}needsPlural(a){let b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},c=this.getRule(a,b);return c||(c=this.getRule("dev",b)),c?.resolvedOptions().pluralCategories.length>1}getPluralFormsOfKey(a,b){let c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.getSuffixes(a,c).map(a=>`${b}${a}`)}getSuffixes(a){let b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},c=this.getRule(a,b);return(c||(c=this.getRule("dev",b)),c)?c.resolvedOptions().pluralCategories.sort((a,b)=>B[a]-B[b]).map(a=>`${this.options.prepend}${b.ordinal?`ordinal${this.options.prepend}`:""}${a}`):[]}getSuffix(a,b){let c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},d=this.getRule(a,c);return d?`${this.options.prepend}${c.ordinal?`ordinal${this.options.prepend}`:""}${d.select(b)}`:(this.logger.warn(`no plural rule found for: ${a}`),this.getSuffix("dev",b,c))}}let E=function(a,b,d){let e,f=arguments.length>3&&void 0!==arguments[3]?arguments[3]:".",g=!(arguments.length>4)||void 0===arguments[4]||arguments[4],h=void 0!==(e=k(a,d))?e:k(b,d);return!h&&g&&c(d)&&void 0===(h=q(a,d,f))&&(h=q(b,d,f)),h};class F{constructor(){let a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.logger=u.create("interpolator"),this.options=a,this.format=a?.interpolation?.format||(a=>a),this.init(a)}init(){let a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a.interpolation||(a.interpolation={escapeValue:!0});let{escape:b,escapeValue:c,useRawValueToEscape:d,prefix:e,prefixEscaped:f,suffix:g,suffixEscaped:h,formatSeparator:i,unescapeSuffix:j,unescapePrefix:k,nestingPrefix:l,nestingPrefixEscaped:m,nestingSuffix:o,nestingSuffixEscaped:p,nestingOptionsSeparator:q,maxReplaces:r,alwaysFormat:s}=a.interpolation;this.escape=void 0!==b?b:n,this.escapeValue=void 0===c||c,this.useRawValueToEscape=void 0!==d&&d,this.prefix=e?e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&"):f||"{{",this.suffix=g?g.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&"):h||"}}",this.formatSeparator=i||",",this.unescapePrefix=j?"":k||"-",this.unescapeSuffix=this.unescapePrefix?"":j||"",this.nestingPrefix=l?l.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&"):m||"$t(".replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&"),this.nestingSuffix=o?o.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&"):p||")".replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&"),this.nestingOptionsSeparator=q||",",this.maxReplaces=r||1e3,this.alwaysFormat=void 0!==s&&s,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){let a=(a,b)=>a?.source===b?(a.lastIndex=0,a):RegExp(b,"g");this.regexp=a(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=a(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=a(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(a,b,d,f){let g,h,i,j=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},k=a=>{if(0>a.indexOf(this.formatSeparator)){let c=E(b,j,a,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(c,void 0,d,{...f,...b,interpolationkey:a}):c}let c=a.split(this.formatSeparator),e=c.shift().trim(),g=c.join(this.formatSeparator).trim();return this.format(E(b,j,e,this.options.keySeparator,this.options.ignoreJSONStructure),g,d,{...f,...b,interpolationkey:e})};this.resetRegExp();let l=f?.missingInterpolationHandler||this.options.missingInterpolationHandler,m=f?.interpolation?.skipOnVariables!==void 0?f.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:a=>a.replace(/\$/g,"$$$$")},{regex:this.regexp,safeValue:a=>this.escapeValue?this.escape(a).replace(/\$/g,"$$$$"):a.replace(/\$/g,"$$$$")}].forEach(b=>{for(i=0;g=b.regex.exec(a);){let d=g[1].trim();if(void 0===(h=k(d)))if("function"==typeof l){let b=l(a,g,f);h=c(b)?b:""}else if(f&&Object.prototype.hasOwnProperty.call(f,d))h="";else if(m){h=g[0];continue}else this.logger.warn(`missed to pass in variable ${d} for interpolating ${a}`),h="";else c(h)||this.useRawValueToEscape||(h=e(h));let j=b.safeValue(h);if(a=a.replace(g[0],j),m?(b.regex.lastIndex+=h.length,b.regex.lastIndex-=g[0].length):b.regex.lastIndex=0,++i>=this.maxReplaces)break}}),a}nest(a,b){let d,f,g,h=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=(a,b)=>{let c=this.nestingOptionsSeparator;if(0>a.indexOf(c))return a;let d=a.split(RegExp(`${c}[ ]*{`)),e=`{${d[1]}`;a=d[0];let f=(e=this.interpolate(e,g)).match(/'/g),h=e.match(/"/g);((f?.length??0)%2!=0||h)&&h.length%2==0||(e=e.replace(/'/g,'"'));try{g=JSON.parse(e),b&&(g={...b,...g})}catch(b){return this.logger.warn(`failed parsing options string in nesting for key ${a}`,b),`${a}${c}${e}`}return g.defaultValue&&g.defaultValue.indexOf(this.prefix)>-1&&delete g.defaultValue,a};for(;d=this.nestingRegexp.exec(a);){let j=[];(g=(g={...h}).replace&&!c(g.replace)?g.replace:g).applyPostProcessor=!1,delete g.defaultValue;let k=!1;if(-1!==d[0].indexOf(this.formatSeparator)&&!/{.*}/.test(d[1])){let a=d[1].split(this.formatSeparator).map(a=>a.trim());d[1]=a.shift(),j=a,k=!0}if((f=b(i.call(this,d[1].trim(),g),g))&&d[0]===a&&!c(f))return f;c(f)||(f=e(f)),f||(this.logger.warn(`missed to resolve ${d[1]} for nesting ${a}`),f=""),k&&(f=j.reduce((a,b)=>this.format(a,b,h.lng,{...h,interpolationkey:d[1].trim()}),f.trim())),a=a.replace(d[0],f),this.regexp.lastIndex=0}return a}}let G=a=>{let b={};return(c,d,e)=>{let f=e;e&&e.interpolationkey&&e.formatParams&&e.formatParams[e.interpolationkey]&&e[e.interpolationkey]&&(f={...f,[e.interpolationkey]:void 0});let g=d+JSON.stringify(f),h=b[g];return h||(h=a(r(d),e),b[g]=h),h(c)}};class H{constructor(){let a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.logger=u.create("formatter"),this.options=a,this.formats={number:G((a,b)=>{let c=new Intl.NumberFormat(a,{...b});return a=>c.format(a)}),currency:G((a,b)=>{let c=new Intl.NumberFormat(a,{...b,style:"currency"});return a=>c.format(a)}),datetime:G((a,b)=>{let c=new Intl.DateTimeFormat(a,{...b});return a=>c.format(a)}),relativetime:G((a,b)=>{let c=new Intl.RelativeTimeFormat(a,{...b});return a=>c.format(a,b.range||"day")}),list:G((a,b)=>{let c=new Intl.ListFormat(a,{...b});return a=>c.format(a)})},this.init(a)}init(a){let b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{interpolation:{}};this.formatSeparator=b.interpolation.formatSeparator||","}add(a,b){this.formats[a.toLowerCase().trim()]=b}addCached(a,b){this.formats[a.toLowerCase().trim()]=G(b)}format(a,b,c){let d=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},e=b.split(this.formatSeparator);if(e.length>1&&e[0].indexOf("(")>1&&0>e[0].indexOf(")")&&e.find(a=>a.indexOf(")")>-1)){let a=e.findIndex(a=>a.indexOf(")")>-1);e[0]=[e[0],...e.splice(1,a)].join(this.formatSeparator)}return e.reduce((a,b)=>{let{formatName:e,formatOptions:f}=(a=>{let b=a.toLowerCase().trim(),c={};if(a.indexOf("(")>-1){let d=a.split("(");b=d[0].toLowerCase().trim();let e=d[1].substring(0,d[1].length-1);"currency"===b&&0>e.indexOf(":")?c.currency||(c.currency=e.trim()):"relativetime"===b&&0>e.indexOf(":")?c.range||(c.range=e.trim()):e.split(";").forEach(a=>{if(a){let[b,...d]=a.split(":"),e=d.join(":").trim().replace(/^'+|'+$/g,""),f=b.trim();c[f]||(c[f]=e),"false"===e&&(c[f]=!1),"true"===e&&(c[f]=!0),isNaN(e)||(c[f]=parseInt(e,10))}})}return{formatName:b,formatOptions:c}})(b);if(this.formats[e]){let b=a;try{let g=d?.formatParams?.[d.interpolationkey]||{},h=g.locale||g.lng||d.locale||d.lng||c;b=this.formats[e](a,h,{...f,...d,...g})}catch(a){this.logger.warn(a)}return b}return this.logger.warn(`there was no format function for ${e}`),a},a)}}class I extends v{constructor(a,b,c){let d=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};super(),this.backend=a,this.store=b,this.services=c,this.languageUtils=c.languageUtils,this.options=d,this.logger=u.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=d.maxParallelReads||10,this.readingCalls=0,this.maxRetries=d.maxRetries>=0?d.maxRetries:5,this.retryTimeout=d.retryTimeout>=1?d.retryTimeout:350,this.state={},this.queue=[],this.backend?.init?.(c,d.backend,d)}queueLoad(a,b,c,d){let e={},f={},g={},h={};return a.forEach(a=>{let d=!0;b.forEach(b=>{let g=`${a}|${b}`;!c.reload&&this.store.hasResourceBundle(a,b)?this.state[g]=2:this.state[g]<0||(1===this.state[g]?void 0===f[g]&&(f[g]=!0):(this.state[g]=1,d=!1,void 0===f[g]&&(f[g]=!0),void 0===e[g]&&(e[g]=!0),void 0===h[b]&&(h[b]=!0)))}),d||(g[a]=!0)}),(Object.keys(e).length||Object.keys(f).length)&&this.queue.push({pending:f,pendingCount:Object.keys(f).length,loaded:{},errors:[],callback:d}),{toLoad:Object.keys(e),pending:Object.keys(f),toLoadLanguages:Object.keys(g),toLoadNamespaces:Object.keys(h)}}loaded(a,b,c){let d=a.split("|"),e=d[0],f=d[1];b&&this.emit("failedLoading",e,f,b),!b&&c&&this.store.addResourceBundle(e,f,c,void 0,void 0,{skipCopy:!0}),this.state[a]=b?-1:2,b&&c&&(this.state[a]=0);let g={};this.queue.forEach(c=>{((a,b,c,d)=>{let{obj:e,k:f}=i(a,b,Object);e[f]=e[f]||[],e[f].push(c)})(c.loaded,[e],f),void 0!==c.pending[a]&&(delete c.pending[a],c.pendingCount--),b&&c.errors.push(b),0!==c.pendingCount||c.done||(Object.keys(c.loaded).forEach(a=>{g[a]||(g[a]={});let b=c.loaded[a];b.length&&b.forEach(b=>{void 0===g[a][b]&&(g[a][b]=!0)})}),c.done=!0,c.errors.length?c.callback(c.errors):c.callback())}),this.emit("loaded",g),this.queue=this.queue.filter(a=>!a.done)}read(a,b,c){let d=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,e=arguments.length>4&&void 0!==arguments[4]?arguments[4]:this.retryTimeout,f=arguments.length>5?arguments[5]:void 0;if(!a.length)return f(null,{});if(this.readingCalls>=this.maxParallelReads)return void this.waitingReads.push({lng:a,ns:b,fcName:c,tried:d,wait:e,callback:f});this.readingCalls++;let g=(g,h)=>{if(this.readingCalls--,this.waitingReads.length>0){let a=this.waitingReads.shift();this.read(a.lng,a.ns,a.fcName,a.tried,a.wait,a.callback)}g&&h&&d<this.maxRetries?setTimeout(()=>{this.read.call(this,a,b,c,d+1,2*e,f)},e):f(g,h)},h=this.backend[c].bind(this.backend);if(2===h.length){try{let c=h(a,b);c&&"function"==typeof c.then?c.then(a=>g(null,a)).catch(g):g(null,c)}catch(a){g(a)}return}return h(a,b,g)}prepareLoading(a,b){let d=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},e=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),e&&e();c(a)&&(a=this.languageUtils.toResolveHierarchy(a)),c(b)&&(b=[b]);let f=this.queueLoad(a,b,d,e);if(!f.toLoad.length)return f.pending.length||e(),null;f.toLoad.forEach(a=>{this.loadOne(a)})}load(a,b,c){this.prepareLoading(a,b,{},c)}reload(a,b,c){this.prepareLoading(a,b,{reload:!0},c)}loadOne(a){let b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",c=a.split("|"),d=c[0],e=c[1];this.read(d,e,"read",void 0,void 0,(c,f)=>{c&&this.logger.warn(`${b}loading namespace ${e} for language ${d} failed`,c),!c&&f&&this.logger.log(`${b}loaded namespace ${e} for language ${d}`,f),this.loaded(a,c,f)})}saveMissing(a,b,c,d,e){let f=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},g=arguments.length>6&&void 0!==arguments[6]?arguments[6]:()=>{};if(this.services?.utils?.hasLoadedNamespace&&!this.services?.utils?.hasLoadedNamespace(b))return void this.logger.warn(`did not save key "${c}" as the namespace "${b}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");if(null!=c&&""!==c){if(this.backend?.create){let h={...f,isUpdate:e},i=this.backend.create.bind(this.backend);if(i.length<6)try{let e;(e=5===i.length?i(a,b,c,d,h):i(a,b,c,d))&&"function"==typeof e.then?e.then(a=>g(null,a)).catch(g):g(null,e)}catch(a){g(a)}else i(a,b,c,d,g,h)}a&&a[0]&&this.store.addResource(a[0],b,c,d)}}}let J=()=>({debug:!1,initAsync:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:a=>{let b={};if("object"==typeof a[1]&&(b=a[1]),c(a[1])&&(b.defaultValue=a[1]),c(a[2])&&(b.tDescription=a[2]),"object"==typeof a[2]||"object"==typeof a[3]){let c=a[3]||a[2];Object.keys(c).forEach(a=>{b[a]=c[a]})}return b},interpolation:{escapeValue:!0,format:a=>a,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),K=a=>(c(a.ns)&&(a.ns=[a.ns]),c(a.fallbackLng)&&(a.fallbackLng=[a.fallbackLng]),c(a.fallbackNS)&&(a.fallbackNS=[a.fallbackNS]),a.supportedLngs?.indexOf?.("cimode")<0&&(a.supportedLngs=a.supportedLngs.concat(["cimode"])),"boolean"==typeof a.initImmediate&&(a.initAsync=a.initImmediate),a),L=()=>{};class M extends v{constructor(){let a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},b=arguments.length>1?arguments[1]:void 0;if(super(),this.options=K(a),this.services={},this.logger=u,this.modules={external:[]},(a=>{Object.getOwnPropertyNames(Object.getPrototypeOf(a)).forEach(b=>{"function"==typeof a[b]&&(a[b]=a[b].bind(a))})})(this),b&&!this.isInitialized&&!a.isClone){if(!this.options.initAsync)return this.init(a,b),this;setTimeout(()=>{this.init(a,b)},0)}}init(){var a=this;let b=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,"function"==typeof b&&(e=b,b={}),!b.defaultNS&&!1!==b.defaultNS&&b.ns&&(c(b.ns)?b.defaultNS=b.ns:0>b.ns.indexOf("translation")&&(b.defaultNS=b.ns[0]));let f=J();this.options={...f,...this.options,...K(b)},this.options.interpolation={...f.interpolation,...this.options.interpolation},void 0!==b.keySeparator&&(this.options.userDefinedKeySeparator=b.keySeparator),void 0!==b.nsSeparator&&(this.options.userDefinedNsSeparator=b.nsSeparator);let g=a=>a?"function"==typeof a?new a:a:null;if(!this.options.isClone){let b;this.modules.logger?u.init(g(this.modules.logger),this.options):u.init(null,this.options),b=this.modules.formatter?this.modules.formatter:H;let c=new A(this.options);this.store=new w(this.options.resources,this.options);let d=this.services;d.logger=u,d.resourceStore=this.store,d.languageUtils=c,d.pluralResolver=new D(c,{prepend:this.options.pluralSeparator,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),b&&(!this.options.interpolation.format||this.options.interpolation.format===f.interpolation.format)&&(d.formatter=g(b),d.formatter.init(d,this.options),this.options.interpolation.format=d.formatter.format.bind(d.formatter)),d.interpolator=new F(this.options),d.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},d.backendConnector=new I(g(this.modules.backend),d.resourceStore,d,this.options),d.backendConnector.on("*",function(b){for(var c=arguments.length,d=Array(c>1?c-1:0),e=1;e<c;e++)d[e-1]=arguments[e];a.emit(b,...d)}),this.modules.languageDetector&&(d.languageDetector=g(this.modules.languageDetector),d.languageDetector.init&&d.languageDetector.init(d,this.options.detection,this.options)),this.modules.i18nFormat&&(d.i18nFormat=g(this.modules.i18nFormat),d.i18nFormat.init&&d.i18nFormat.init(this)),this.translator=new z(this.services,this.options),this.translator.on("*",function(b){for(var c=arguments.length,d=Array(c>1?c-1:0),e=1;e<c;e++)d[e-1]=arguments[e];a.emit(b,...d)}),this.modules.external.forEach(a=>{a.init&&a.init(this)})}if(this.format=this.options.interpolation.format,e||(e=L),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){let a=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);a.length>0&&"dev"!==a[0]&&(this.options.lng=a[0])}this.services.languageDetector||this.options.lng||this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(b=>{this[b]=function(){return a.store[b](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(b=>{this[b]=function(){return a.store[b](...arguments),a}});let h=d(),i=()=>{let a=(a,b)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),h.resolve(b),e(a,b)};if(this.languages&&!this.isInitialized)return a(null,this.t.bind(this));this.changeLanguage(this.options.lng,a)};return this.options.resources||!this.options.initAsync?i():setTimeout(i,0),h}loadResources(a){let b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:L,d=b,e=c(a)?a:this.language;if("function"==typeof a&&(d=a),!this.options.resources||this.options.partialBundledLanguages){if(e?.toLowerCase()==="cimode"&&(!this.options.preload||0===this.options.preload.length))return d();let a=[],b=b=>{b&&"cimode"!==b&&this.services.languageUtils.toResolveHierarchy(b).forEach(b=>{"cimode"!==b&&0>a.indexOf(b)&&a.push(b)})};e?b(e):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(a=>b(a)),this.options.preload?.forEach?.(a=>b(a)),this.services.backendConnector.load(a,this.options.ns,a=>{a||this.resolvedLanguage||!this.language||this.setResolvedLanguage(this.language),d(a)})}else d(null)}reloadResources(a,b,c){let e=d();return"function"==typeof a&&(c=a,a=void 0),"function"==typeof b&&(c=b,b=void 0),a||(a=this.languages),b||(b=this.options.ns),c||(c=L),this.services.backendConnector.reload(a,b,a=>{e.resolve(),c(a)}),e}use(a){if(!a)throw Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!a.type)throw Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return"backend"===a.type&&(this.modules.backend=a),("logger"===a.type||a.log&&a.warn&&a.error)&&(this.modules.logger=a),"languageDetector"===a.type&&(this.modules.languageDetector=a),"i18nFormat"===a.type&&(this.modules.i18nFormat=a),"postProcessor"===a.type&&x.addPostProcessor(a),"formatter"===a.type&&(this.modules.formatter=a),"3rdParty"===a.type&&this.modules.external.push(a),this}setResolvedLanguage(a){if(a&&this.languages&&!(["cimode","dev"].indexOf(a)>-1))for(let a=0;a<this.languages.length;a++){let b=this.languages[a];if(!(["cimode","dev"].indexOf(b)>-1)&&this.store.hasLanguageSomeTranslations(b)){this.resolvedLanguage=b;break}}}changeLanguage(a,b){var e=this;this.isLanguageChangingTo=a;let f=d();this.emit("languageChanging",a);let g=a=>{this.language=a,this.languages=this.services.languageUtils.toResolveHierarchy(a),this.resolvedLanguage=void 0,this.setResolvedLanguage(a)},h=(a,c)=>{c?(g(c),this.translator.changeLanguage(c),this.isLanguageChangingTo=void 0,this.emit("languageChanged",c),this.logger.log("languageChanged",c)):this.isLanguageChangingTo=void 0,f.resolve(function(){return e.t(...arguments)}),b&&b(a,function(){return e.t(...arguments)})},i=b=>{a||b||!this.services.languageDetector||(b=[]);let d=c(b)?b:this.services.languageUtils.getBestMatchFromCodes(b);d&&(this.language||g(d),this.translator.language||this.translator.changeLanguage(d),this.services.languageDetector?.cacheUserLanguage?.(d)),this.loadResources(d,a=>{h(a,d)})};return a||!this.services.languageDetector||this.services.languageDetector.async?!a&&this.services.languageDetector&&this.services.languageDetector.async?0===this.services.languageDetector.detect.length?this.services.languageDetector.detect().then(i):this.services.languageDetector.detect(i):i(a):i(this.services.languageDetector.detect()),f}getFixedT(a,b,d){var e=this;let f=function(a,b){let c,g;if("object"!=typeof b){for(var h=arguments.length,i=Array(h>2?h-2:0),j=2;j<h;j++)i[j-2]=arguments[j];c=e.options.overloadTranslationOptionHandler([a,b].concat(i))}else c={...b};c.lng=c.lng||f.lng,c.lngs=c.lngs||f.lngs,c.ns=c.ns||f.ns,""!==c.keyPrefix&&(c.keyPrefix=c.keyPrefix||d||f.keyPrefix);let k=e.options.keySeparator||".";return g=c.keyPrefix&&Array.isArray(a)?a.map(a=>`${c.keyPrefix}${k}${a}`):c.keyPrefix?`${c.keyPrefix}${k}${a}`:a,e.t(g,c)};return c(a)?f.lng=a:f.lngs=a,f.ns=b,f.keyPrefix=d,f}t(){for(var a=arguments.length,b=Array(a),c=0;c<a;c++)b[c]=arguments[c];return this.translator?.translate(...b)}exists(){for(var a=arguments.length,b=Array(a),c=0;c<a;c++)b[c]=arguments[c];return this.translator?.exists(...b)}setDefaultNamespace(a){this.options.defaultNS=a}hasLoadedNamespace(a){let b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;let c=b.lng||this.resolvedLanguage||this.languages[0],d=!!this.options&&this.options.fallbackLng,e=this.languages[this.languages.length-1];if("cimode"===c.toLowerCase())return!0;let f=(a,b)=>{let c=this.services.backendConnector.state[`${a}|${b}`];return -1===c||0===c||2===c};if(b.precheck){let a=b.precheck(this,f);if(void 0!==a)return a}return!!(this.hasResourceBundle(c,a)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||f(c,a)&&(!d||f(e,a)))}loadNamespaces(a,b){let e=d();return this.options.ns?(c(a)&&(a=[a]),a.forEach(a=>{0>this.options.ns.indexOf(a)&&this.options.ns.push(a)}),this.loadResources(a=>{e.resolve(),b&&b(a)}),e):(b&&b(),Promise.resolve())}loadLanguages(a,b){let e=d();c(a)&&(a=[a]);let f=this.options.preload||[],g=a.filter(a=>0>f.indexOf(a)&&this.services.languageUtils.isSupportedCode(a));return g.length?(this.options.preload=f.concat(g),this.loadResources(a=>{e.resolve(),b&&b(a)}),e):(b&&b(),Promise.resolve())}dir(a){return(a||(a=this.resolvedLanguage||(this.languages?.length>0?this.languages[0]:this.language)),a)?["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"].indexOf((this.services?.languageUtils||new A(J())).getLanguagePartFromCode(a))>-1||a.toLowerCase().indexOf("-arab")>1?"rtl":"ltr":"rtl"}static createInstance(){let a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},b=arguments.length>1?arguments[1]:void 0;return new M(a,b)}cloneInstance(){let a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:L,c=a.forkResourceStore;c&&delete a.forkResourceStore;let d={...this.options,...a,isClone:!0},e=new M(d);return(void 0!==a.debug||void 0!==a.prefix)&&(e.logger=e.logger.clone(a)),["store","services","language"].forEach(a=>{e[a]=this[a]}),e.services={...this.services},e.services.utils={hasLoadedNamespace:e.hasLoadedNamespace.bind(e)},c&&(e.store=new w(Object.keys(this.store.data).reduce((a,b)=>(a[b]={...this.store.data[b]},Object.keys(a[b]).reduce((c,d)=>(c[d]={...a[b][d]},c),{})),{}),d),e.services.resourceStore=e.store),e.translator=new z(e.services,d),e.translator.on("*",function(a){for(var b=arguments.length,c=Array(b>1?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];e.emit(a,...c)}),e.init(d,b),e.translator.options=d,e.translator.backendConnector.services.utils={hasLoadedNamespace:e.hasLoadedNamespace.bind(e)},e}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}let N=M.createInstance();N.createInstance=M.createInstance,N.createInstance,N.dir,N.init,N.loadResources,N.reloadResources,N.use,N.changeLanguage,N.getFixedT,N.t,N.exists,N.setDefaultNamespace,N.hasLoadedNamespace,N.loadNamespaces,N.loadLanguages;let{slice:O,forEach:P}=[],Q=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,R=function(a,b){let c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{path:"/"},d=encodeURIComponent(b),e=`${a}=${d}`;if(c.maxAge>0){let a=c.maxAge-0;if(Number.isNaN(a))throw Error("maxAge should be a Number");e+=`; Max-Age=${Math.floor(a)}`}if(c.domain){if(!Q.test(c.domain))throw TypeError("option domain is invalid");e+=`; Domain=${c.domain}`}if(c.path){if(!Q.test(c.path))throw TypeError("option path is invalid");e+=`; Path=${c.path}`}if(c.expires){if("function"!=typeof c.expires.toUTCString)throw TypeError("option expires is invalid");e+=`; Expires=${c.expires.toUTCString()}`}if(c.httpOnly&&(e+="; HttpOnly"),c.secure&&(e+="; Secure"),c.sameSite)switch("string"==typeof c.sameSite?c.sameSite.toLowerCase():c.sameSite){case!0:case"strict":e+="; SameSite=Strict";break;case"lax":e+="; SameSite=Lax";break;case"none":e+="; SameSite=None";break;default:throw TypeError("option sameSite is invalid")}return e},S={create(a,b,c,d){let e=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{path:"/",sameSite:"strict"};c&&(e.expires=new Date,e.expires.setTime(e.expires.getTime()+60*c*1e3)),d&&(e.domain=d),document.cookie=R(a,encodeURIComponent(b),e)},read(a){let b=`${a}=`,c=document.cookie.split(";");for(let a=0;a<c.length;a++){let d=c[a];for(;" "===d.charAt(0);)d=d.substring(1,d.length);if(0===d.indexOf(b))return d.substring(b.length,d.length)}return null},remove(a){this.create(a,"",-1)}};var T={name:"cookie",lookup(a){let{lookupCookie:b}=a;if(b&&"undefined"!=typeof document)return S.read(b)||void 0},cacheUserLanguage(a,b){let{lookupCookie:c,cookieMinutes:d,cookieDomain:e,cookieOptions:f}=b;c&&"undefined"!=typeof document&&S.create(c,a,d,e,f)}},U={name:"querystring",lookup(a){let{lookupQuerystring:b}=a}};let V=null,W=()=>{if(null!==V)return V;try{V="undefined"!==window&&null!==window.localStorage;let a="i18next.translate.boo";window.localStorage.setItem(a,"foo"),window.localStorage.removeItem(a)}catch(a){V=!1}return V};var X={name:"localStorage",lookup(a){let{lookupLocalStorage:b}=a;if(b&&W())return window.localStorage.getItem(b)||void 0},cacheUserLanguage(a,b){let{lookupLocalStorage:c}=b;c&&W()&&window.localStorage.setItem(c,a)}};let Y=null,Z=()=>{if(null!==Y)return Y;try{Y="undefined"!==window&&null!==window.sessionStorage;let a="i18next.translate.boo";window.sessionStorage.setItem(a,"foo"),window.sessionStorage.removeItem(a)}catch(a){Y=!1}return Y};var $={name:"sessionStorage",lookup(a){let{lookupSessionStorage:b}=a;if(b&&Z())return window.sessionStorage.getItem(b)||void 0},cacheUserLanguage(a,b){let{lookupSessionStorage:c}=b;c&&Z()&&window.sessionStorage.setItem(c,a)}},_={name:"navigator",lookup(a){let b=[];if("undefined"!=typeof navigator){let{languages:a,userLanguage:c,language:d}=navigator;if(a)for(let c=0;c<a.length;c++)b.push(a[c]);c&&b.push(c),d&&b.push(d)}return b.length>0?b:void 0}},aa={name:"htmlTag",lookup(a){let b,{htmlTag:c}=a,d=c||("undefined"!=typeof document?document.documentElement:null);return d&&"function"==typeof d.getAttribute&&(b=d.getAttribute("lang")),b}},ab={name:"path",lookup(a){let{lookupFromPathIndex:b}=a}},ac={name:"subdomain",lookup(a){let{lookupFromSubdomainIndex:b}=a}};let ad=!1;try{document.cookie,ad=!0}catch(a){}let ae=["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"];ad||ae.splice(1,1);class af{constructor(a){let b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.type="languageDetector",this.detectors={},this.init(a,b)}init(){let a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{languageUtils:{}},b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.services=a,this.options=function(a){return P.call(O.call(arguments,1),b=>{if(b)for(let c in b)void 0===a[c]&&(a[c]=b[c])}),a}(b,this.options||{},{order:ae,lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"],convertDetectedLanguage:a=>a}),"string"==typeof this.options.convertDetectedLanguage&&this.options.convertDetectedLanguage.indexOf("15897")>-1&&(this.options.convertDetectedLanguage=a=>a.replace("-","_")),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=c,this.addDetector(T),this.addDetector(U),this.addDetector(X),this.addDetector($),this.addDetector(_),this.addDetector(aa),this.addDetector(ab),this.addDetector(ac)}addDetector(a){return this.detectors[a.name]=a,this}detect(){let a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.options.order,b=[];return(a.forEach(a=>{if(this.detectors[a]){let c=this.detectors[a].lookup(this.options);c&&"string"==typeof c&&(c=[c]),c&&(b=b.concat(c))}}),b=b.map(a=>this.options.convertDetectedLanguage(a)),this.services&&this.services.languageUtils&&this.services.languageUtils.getBestMatchFromCodes)?b:b.length>0?b[0]:null}cacheUserLanguage(a){let b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.options.caches;!b||this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(a)>-1||b.forEach(b=>{this.detectors[b]&&this.detectors[b].cacheUserLanguage(a,this.options)})}}af.type="languageDetector";var ag=a.i(127669);a.i(197608),Object.create(null);let ah={},ai=(...a)=>{am(a[0])&&ah[a[0]]||(am(a[0])&&(ah[a[0]]=new Date),((...a)=>{console?.warn&&(am(a[0])&&(a[0]=`react-i18next:: ${a[0]}`),console.warn(...a))})(...a))},aj=(a,b)=>()=>{if(a.isInitialized)b();else{let c=()=>{setTimeout(()=>{a.off("initialized",c)},0),b()};a.on("initialized",c)}},ak=(a,b,c)=>{a.loadNamespaces(b,aj(a,c))},al=(a,b,c,d)=>{if(am(c)&&(c=[c]),a.options.preload&&a.options.preload.indexOf(b)>-1)return ak(a,c,d);c.forEach(b=>{0>a.options.ns.indexOf(b)&&a.options.ns.push(b)}),a.loadLanguages(b,aj(a,d))},am=a=>"string"==typeof a,an=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,ao={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},ap=a=>ao[a],aq={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:a=>a.replace(an,ap)},ar={type:"3rdParty",init(a){((a={})=>{aq={...aq,...a}})(a.options.react),b=a}},as=(0,ag.createContext)();class at{constructor(){this.usedNamespaces={}}addUsedNamespaces(a){a.forEach(a=>{this.usedNamespaces[a]||(this.usedNamespaces[a]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}a.s(["useTranslation",0,(a,c={})=>{var d,e,f,g;let h,{i18n:i}=c,{i18n:j,defaultNS:k}=(0,ag.useContext)(as)||{},l=i||j||b;if(l&&!l.reportNamespaces&&(l.reportNamespaces=new at),!l){ai("You will need to pass in an i18next instance by using initReactI18next");let a=(a,b)=>{let c;return am(b)?b:"object"==typeof(c=b)&&null!==c&&am(b.defaultValue)?b.defaultValue:Array.isArray(a)?a[a.length-1]:a},b=[a,{},!1];return b.t=a,b.i18n={},b.ready=!1,b}l.options.react?.wait&&ai("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");let m={...aq,...l.options.react,...c},{useSuspense:n,keyPrefix:o}=m,p=a||k||l.options?.defaultNS;p=am(p)?[p]:p||["translation"],l.reportNamespaces.addUsedNamespaces?.(p);let q=(l.isInitialized||l.initializedStoreOnce)&&p.every(a=>((a,b,c={})=>b.languages&&b.languages.length?b.hasLoadedNamespace(a,{lng:c.lng,precheck:(b,d)=>{if(c.bindI18n?.indexOf("languageChanging")>-1&&b.services.backendConnector.backend&&b.isLanguageChangingTo&&!d(b.isLanguageChangingTo,a))return!1}}):(ai("i18n.languages were undefined or empty",b.languages),!0))(a,l,m)),r=(d=c.lng||null,e="fallback"===m.nsMode?p:p[0],(0,ag.useCallback)(l.getFixedT(d,e,o),[l,d,e,o])),s=()=>r,t=()=>{let a,b;return a=c.lng||null,b="fallback"===m.nsMode?p:p[0],l.getFixedT(a,b,o)},[u,v]=(0,ag.useState)(s),w=p.join();c.lng&&(w=`${c.lng}${w}`);let x=(f=w,h=(0,ag.useRef)(),(0,ag.useEffect)(()=>{h.current=g?h.current:f},[f,g]),h.current),y=(0,ag.useRef)(!0);(0,ag.useEffect)(()=>{let{bindI18n:a,bindI18nStore:b}=m;y.current=!0,q||n||(c.lng?al(l,c.lng,p,()=>{y.current&&v(t)}):ak(l,p,()=>{y.current&&v(t)})),q&&x&&x!==w&&y.current&&v(t);let d=()=>{y.current&&v(t)};return a&&l?.on(a,d),b&&l?.store.on(b,d),()=>{y.current=!1,l&&a?.split(" ").forEach(a=>l.off(a,d)),b&&l&&b.split(" ").forEach(a=>l.store.off(a,d))}},[l,w]),(0,ag.useEffect)(()=>{y.current&&q&&v(s)},[l,o,q]);let z=[u,l,q];if(z.t=u,z.i18n=l,z.ready=q,q||!q&&!n)return z;throw new Promise(a=>{c.lng?al(l,c.lng,p,()=>a()):ak(l,p,()=>a())})}],959805),a.s([],247637);var au=a.i(663182);(async()=>{N.use(af).use(ar).init({supportedLngs:["en",...au.options.lngs],fallbackLng:{"zh-HK":["zh-TW","zh-CN","en"],kk:["ru","en"],ky:["ru","en"],tk:["ru","en"],uz:["ru","en"],ug:["ru","en"],tt:["ru","en"],default:["zh-CN","en"]},ns:au.options.ns,defaultNS:au.options.defaultNs,...!1,detection:{order:["querystring","localStorage","navigator"],caches:["localStorage"]},keySeparator:!1,nsSeparator:!1,interpolation:{escapeValue:!1},react:{useSuspense:!1}}),N.on("languageChanged",a=>{console.log("Language changed to",a)})})(),a.s(["default",0,N],70521)},392994,a=>a.a(async(b,c)=>{try{let b=await a.y("react-icons");a.n(b),c()}catch(a){c(a)}},!0),77946,a=>{"use strict";var b=a.i(508171),c=a.i(127669);let d=(0,c.createContext)(void 0);a.s(["AuthProvider",0,({children:a})=>{let[e,f]=(0,c.useState)(()=>null),[g,h]=(0,c.useState)(()=>null);(0,c.useEffect)(()=>{(async()=>{if(e&&!g)try{let a=await fetch("/api/auth/verify",{headers:{Authorization:`Bearer ${e}`}});if(a.ok){let b=await a.json();h(b.user),localStorage.setItem("user",JSON.stringify(b.user))}else localStorage.removeItem("token"),localStorage.removeItem("user"),f(null),h(null)}catch(a){console.error("Token verification failed:",a),localStorage.removeItem("token"),localStorage.removeItem("user"),f(null),h(null)}})()},[e,g]);let i=async()=>{console.log("Logging out");try{await fetch("/api/auth/logout",{method:"POST",headers:{Authorization:`Bearer ${e}`}})}catch(a){console.error("Logout request failed:",a)}finally{localStorage.removeItem("token"),localStorage.removeItem("user"),f(null),h(null)}};return(0,b.jsx)(d.Provider,{value:{token:e,user:g,login:(a,b)=>{console.log("Logging in as",b.username),f(a),h(b),localStorage.setItem("token",a),localStorage.setItem("user",JSON.stringify(b))},logout:i,isLoggedIn:!!e&&!!g},children:a})},"useAuth",0,()=>{let a=(0,c.useContext)(d);if(!a)throw Error("useAuth must be used within an AuthProvider");return a}])},840292,(a,b,c)=>{b.exports=a.x("posthog-js",()=>require("posthog-js"))},6596,(a,b,c)=>{b.exports=a.x("posthog-js/react",()=>require("posthog-js/react"))},704977,a=>{"use strict";var b=a.i(680472);a.s(["getAppVersion",0,()=>b.default.version])},210997,a=>{"use strict";var b=a.i(508171),c=a.i(840292),d=a.i(127669),e=a.i(6596),f=a.i(704977);process.env.NEXT_PUBLIC_POSTHOG_HOST||atob("aHR0cHM6Ly91cy5pLnBvc3Rob2cuY29t"),process.env.NEXT_PUBLIC_POSTHOG_KEY||atob("cGhjX2ViNXowbVRxWm8yZm5YYnZGNmE3bFh5TThpTmRSNTNsR1A3VFM3VGh4S08="),a.s(["CSPostHogProvider",0,({children:a})=>((0,d.useEffect)(()=>{c.default.register_for_session({$app_version:(0,f.getAppVersion)()})},[]),(0,b.jsx)(e.PostHogProvider,{client:c.default,children:a}))],210997)},107625,a=>{"use strict";var b=a.i(508171),c=a.i(127669);let d=new class{async pullChanges(a,b,c,d){return console.log("[SyncClient] Cloud sync disabled (local storage mode)"),{books:null,configs:null,notes:null}}async pushChanges(a){return console.log("[SyncClient] Cloud sync disabled (local storage mode)"),{books:null,configs:null,notes:null}}},e=(0,c.createContext)({syncClient:d});a.s(["SyncProvider",0,({children:a})=>(0,b.jsx)(e.Provider,{value:{syncClient:d},children:a}),"useSyncContext",0,()=>(0,c.useContext)(e)],107625)},662677,a=>a.a(async(b,c)=>{try{let b=await a.y("zustand");a.n(b),c()}catch(a){c(a)}},!0),107315,a=>a.a(async(b,c)=>{try{let b=await a.y("tinycolor2");a.n(b),c()}catch(a){c(a)}},!0),823517,a=>a.a(async(b,c)=>{try{var d=a.i(107315),e=b([d]);function f(a){return a<=.04045?a/12.92:Math.pow((a+.055)/1.055,2.4)}function g(a){let{r:b,g:c,b:e}=(0,d.default)(a).toRgb(),g=f(b/255),h=f(c/255),i=f(e/255),j=Math.cbrt(.4122214708*g+.5363325363*h+.0514459929*i),k=Math.cbrt(.2119034982*g+.6806995451*h+.1073969566*i),l=Math.cbrt(.0883024619*g+.2817188376*h+.6299787005*i),m=1.9779984951*j-2.428592205*k+.4505937099*l,n=.0259040371*j+.7827717662*k-.808675766*l,o=Math.sqrt(m*m+n*n),p=180/Math.PI*Math.atan2(n,m);p<0&&(p+=360);let q=(100*(.2104542553*j+.793617785*k-.0040720468*l)).toFixed(4),r=Number(o.toFixed(6)),s=Number(p.toFixed(3));return 0===r?`${q}% 0 0deg`:`${q}% ${r} ${s}deg`}[d]=e.then?(await e)():e,a.s(["getContrastHex",0,a=>(0,d.default)(a).isDark()?"#FFFFFF":"#000000","getContrastOklch",0,a=>(0,d.default)(a).isDark()?"100% 0 0deg":"0% 0 0deg","hexToOklch",()=>g]),c()}catch(a){c(a)}},!1),713551,a=>a.a(async(b,c)=>{try{var d=a.i(107315),e=a.i(465863),f=a.i(823517),g=b([d,f]);[d,f]=g.then?(await g)():g;let h=({bg:a,fg:b,primary:c})=>({"base-100":a,"base-200":(0,d.default)(a).darken(5).toHexString(),"base-300":(0,d.default)(a).darken(12).toHexString(),"base-content":b,neutral:(0,d.default)(a).darken(15).desaturate(20).toHexString(),"neutral-content":(0,d.default)(b).lighten(20).desaturate(20).toHexString(),primary:c,secondary:(0,d.default)(c).lighten(20).toHexString(),accent:(0,d.default)(c).analogous()[1].toHexString()}),i=({bg:a,fg:b,primary:c})=>({"base-100":a,"base-200":(0,d.default)(a).lighten(5).toHexString(),"base-300":(0,d.default)(a).lighten(12).toHexString(),"base-content":b,neutral:(0,d.default)(a).lighten(15).desaturate(20).toHexString(),"neutral-content":(0,d.default)(b).darken(20).desaturate(20).toHexString(),primary:c,secondary:(0,d.default)(c).darken(20).toHexString(),accent:(0,d.default)(c).triad()[1].toHexString()}),j=[{name:"default",label:(0,e.stubTranslation)("Default"),colors:{light:h({fg:"#171717",bg:"#ffffff",primary:"#0066cc"}),dark:i({fg:"#e0e0e0",bg:"#222222",primary:"#77bbee"})}},{name:"gray",label:(0,e.stubTranslation)("Gray"),colors:{light:h({fg:"#222222",bg:"#e0e0e0",primary:"#4488cc"}),dark:i({fg:"#c6c6c6",bg:"#444444",primary:"#88ccee"})}},{name:"sepia",label:(0,e.stubTranslation)("Sepia"),colors:{light:h({fg:"#5b4636",bg:"#f1e8d0",primary:"#008b8b"}),dark:i({fg:"#ffd595",bg:"#342e25",primary:"#48d1cc"})}},{name:"grass",label:(0,e.stubTranslation)("Grass"),colors:{light:h({fg:"#232c16",bg:"#d7dbbd",primary:"#177b4d"}),dark:i({fg:"#d8deba",bg:"#333627",primary:"#a6d608"})}},{name:"cherry",label:(0,e.stubTranslation)("Cherry"),colors:{light:h({fg:"#4e1609",bg:"#f0d1d5",primary:"#de3838"}),dark:i({fg:"#e5c4c8",bg:"#462f32",primary:"#ff646e"})}},{name:"sky",label:(0,e.stubTranslation)("Sky"),colors:{light:h({fg:"#262d48",bg:"#cedef5",primary:"#2d53e5"}),dark:i({fg:"#babee1",bg:"#282e47",primary:"#ff646e"})}},{name:"solarized",label:(0,e.stubTranslation)("Solarized"),colors:{light:h({fg:"#586e75",bg:"#fdf6e3",primary:"#268bd2"}),dark:i({fg:"#93a1a1",bg:"#002b36",primary:"#268bd2"})}},{name:"gruvbox",label:(0,e.stubTranslation)("Gruvbox"),colors:{light:h({fg:"#3c3836",bg:"#fbf1c7",primary:"#076678"}),dark:i({fg:"#ebdbb2",bg:"#282828",primary:"#83a598"})}},{name:"nord",label:(0,e.stubTranslation)("Nord"),colors:{light:h({fg:"#2e3440",bg:"#eceff4",primary:"#5e81ac"}),dark:i({fg:"#d8dee9",bg:"#2e3440",primary:"#88c0d0"})}},{name:"contrast",label:(0,e.stubTranslation)("Contrast"),colors:{light:h({fg:"#000000",bg:"#ffffff",primary:"#4488cc"}),dark:i({fg:"#ffffff",bg:"#000000",primary:"#88ccee"})}},{name:"sunset",label:(0,e.stubTranslation)("Sunset"),colors:{light:h({fg:"#423126",bg:"#fff7f0",primary:"#fe6b64"}),dark:i({fg:"#f6e1d7",bg:"#3c2b25",primary:"#ff9c94"})}}],k=(a,b=!1)=>{let c=`
    --b1: ${(0,f.hexToOklch)(a["base-100"])};
    --b2: ${(0,f.hexToOklch)(a["base-200"])};
    --b3: ${(0,f.hexToOklch)(a["base-300"])};
    --bc: ${(0,f.hexToOklch)(a["base-content"])};
    
    --p: ${(0,f.hexToOklch)(a.primary)};
    --pc: ${(0,f.getContrastOklch)(a.primary)};
    
    --s: ${(0,f.hexToOklch)(a.secondary)};
    --sc: ${(0,f.getContrastOklch)(a.secondary)};
    
    --a: ${(0,f.hexToOklch)(a.accent)};
    --ac: ${(0,f.getContrastOklch)(a.accent)};
    
    --n: ${(0,f.hexToOklch)(a.neutral)};
    --nc: ${(0,f.hexToOklch)(a["neutral-content"])};
    
    --in: 69.37% 0.047 231deg;
    --inc: 100% 0 0deg;
    --su: 78.15% 0.12 160deg;
    --suc: 100% 0 0deg;
    --wa: 90.69% 0.123 84deg;
    --wac: 0% 0 0deg;
    --er: 70.9% 0.184 22deg;
    --erc: 100% 0 0deg;
  `,d=`
    --fallback-b1: ${a["base-100"]};
    --fallback-b2: ${a["base-200"]};
    --fallback-b3: ${a["base-300"]};
    --fallback-bc: ${a["base-content"]};

    --fallback-p: ${a.primary};
    --fallback-pc: ${(0,f.getContrastHex)(a.primary)};

    --fallback-s: ${a.secondary};
    --fallback-sc: ${(0,f.getContrastHex)(a.secondary)};

    --fallback-a: ${a.accent};
    --fallback-ac: ${(0,f.getContrastHex)(a.accent)};

    --fallback-n: ${a.neutral};
    --fallback-nc: ${a["neutral-content"]};

    --fallback-in: #ff0000;
    --fallback-inc: #ffffff;
    --fallback-su: #00ff00;
    --fallback-suc: #000000;
    --fallback-wa: #ffff00;
    --fallback-wac: #000000;
    --fallback-er: #ff8000;
    --fallback-erc: #000000;
  `;return c+(b?d:"")};a.s(["applyCustomTheme",0,(a,b,c=!1)=>{if(!a&&!b)return;let d=a?`${a.name}-light`:`${b}-light`,e=a?`${a.name}-dark`:`${b}-dark`,f=a?h(a.colors.light):(j.find(a=>a.name===b)||j[0]).colors.light,g=a?i(a.colors.dark):(j.find(a=>a.name===b)||j[0]).colors.dark,l=`
    [data-theme="${d}"] {
      ${k(f,c)}
    }
    
    [data-theme="${e}"] {
      ${k(g,c)}
    }
    
    :root {
      --${d}: 1;
      --${e}: 1;
    }
  `,m=document.createElement("style");m.id=`theme-${a?a.name:b}-styles`,m.textContent=l;let n=document.getElementById(m.id);return n&&n.remove(),document.head.appendChild(m),{light:d,dark:e}},"generateDarkPalette",0,i,"generateLightPalette",0,h,"themes",0,j]),c()}catch(a){c(a)}},!1),173947,a=>a.a(async(b,c)=>{try{var d=a.i(654617),e=a.i(713551),f=a.i(465863),g=b([e]);[e]=g.then?(await g)():g;let h=a=>`
  .translation-source {
  }
  .translation-target {
  }
  .translation-target.hidden {
    display: none !important;
  }
  .translation-target-block {
    display: block !important;
    ${a?"margin: 0.5em 0 !important;":""}
  }
  .translation-target-toc {
    display: block !important;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`,i=()=>{let a="default",b=e.themes.find(b=>b.name===a);if(!b){let c=[].find(b=>b.name===a);c&&(b={name:c.name,label:c.label,colors:{light:(0,e.generateLightPalette)(c.colors.light),dark:(0,e.generateDarkPalette)(c.colors.dark)}})}b||(b=e.themes[0]);let c=(0,b.colors.light);return{bg:c["base-100"],fg:c["base-content"],primary:c.primary,palette:c,isDarkMode:!1}};a.s(["applyFixedlayoutStyles",0,(a,b,c)=>{c||(c=i());let{bg:d,fg:e,primary:f,isDarkMode:g}=c,h=b.overrideColor,j=b.invertImgColorInDark,k="fixed-layout-styles",l=a.getElementById(k);l&&l.remove(),(l=a.createElement("style")).id=k,l.textContent=`
    html {
      --theme-bg-color: ${d};
      --theme-fg-color: ${e};
      --theme-primary-color: ${f};
      color-scheme: ${g?"dark":"light"};
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
      ${g&&j?"filter: invert(100%);":""}
      ${h?`mix-blend-mode: ${g?"#000000"===d?"luminosity":"overlay":"multiply"};`:""}
    }
    img.singlePage {
      position: relative;
    }
  `,a.head.appendChild(l)},"applyImageStyle",0,a=>{a.querySelectorAll("img").forEach(a=>{let b=a.getAttribute("width");if(b&&(b.endsWith("%")||b.endsWith("vw"))){let c=parseFloat(b);isNaN(c)||(a.style.width=`${c/100*window.innerWidth}px`,a.removeAttribute("width"))}let c=a.getAttribute("height");if(c&&(c.endsWith("%")||c.endsWith("vh"))){let b=parseFloat(c);isNaN(b)||(a.style.height=`${b/100*window.innerHeight}px`,a.removeAttribute("height"))}let d=a.parentNode;if(!d||d.nodeType!==Node.ELEMENT_NODE)return;let e=Array.from(d.childNodes).some(a=>a.nodeType===Node.TEXT_NODE&&a.textContent?.trim()),f=Array.from(d.childNodes).every(a=>a.nodeType!==Node.ELEMENT_NODE||"BR"!==a.tagName);e&&f&&a.classList.add("has-text-siblings")}),a.querySelectorAll("hr").forEach(a=>{let b=window.getComputedStyle(a);b.backgroundImage&&"none"!==b.backgroundImage&&a.classList.add("background-img")})},"applyScrollModeClass",0,(a,b)=>{a.body.classList.remove("scroll-mode","paginated-mode"),a.body.classList.add(b?"scroll-mode":"paginated-mode")},"applyTableStyle",0,a=>{a.querySelectorAll("table").forEach(a=>{let b=a.parentNode;if(!b||b.nodeType!==Node.ELEMENT_NODE)return;let c=0;for(let b of a.querySelectorAll("tr")){let a=b.querySelectorAll("td, th"),d=0;a.forEach(a=>{let b=a.getAttribute("width"),c=a.style.width,e=b||c;if(e){let a=parseFloat(e),b=e.replace(a.toString(),"").trim();"px"!==b&&b?"%"===b&&(d+=window.innerWidth*a/100):d+=a}}),d>c&&(c=d)}if(c>0){let b=`calc(min(1, var(--available-width) / ${c}))`;a.style.transformOrigin="left top",a.style.transform=`scale(${b})`}})},"applyThemeModeClass",0,(a,b)=>{a.body.classList.remove("theme-light","theme-dark"),a.body.classList.add(b?"theme-dark":"theme-light")},"applyTranslationStyle",0,a=>{let b="translation-style",c=document.getElementById(b);c&&c.remove();let d=document.createElement("style");d.id=b,d.textContent=h(a.showTranslateSource),document.head.appendChild(d)},"getFootnoteStyles",0,()=>`
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
`,"getStyles",0,(a,b)=>{var c,e,g,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C;let D,E,F,G,H;b||(b=i());let I=(c=a.overrideLayout,e=a.marginTopPx,g=a.marginRightPx,j=a.marginBottomPx,k=a.marginLeftPx,l=a.paragraphMargin,m=a.lineHeight,n=a.wordSpacing,o=a.letterSpacing,p=a.textIndent,q=a.fullJustification,r=a.hyphenation,s=a.writingMode,t=a.vertical,`
  @namespace epub "http://www.idpf.org/2007/ops";
  html {
    --default-text-align: ${q?"justify":"start"};
    --margin-top: ${e}px;
    --margin-right: ${g}px;
    --margin-bottom: ${j}px;
    --margin-left: ${k}px;
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
    ${"auto"===s?"":`writing-mode: ${s} !important;`}
    text-align: var(--default-text-align);
    max-height: unset;
    -webkit-touch-callout: none;
    -webkit-user-select: text;
  }
  body {
    overflow: unset;
    zoom: 1;
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
    line-height: ${m} ${c?"!important":""};
    word-spacing: ${n}px ${c?"!important":""};
    letter-spacing: ${o}px ${c?"!important":""};
    text-indent: ${p}em ${c?"!important":""};
    -webkit-hyphens: ${r?"auto":"manual"};
    hyphens: ${r?"auto":"manual"};
    -webkit-hyphenate-limit-before: 3;
    -webkit-hyphenate-limit-after: 2;
    -webkit-hyphenate-limit-lines: 2;
    hanging-punctuation: allow-end last;
    widows: 2;
  }
  p.aligned-center, blockquote.aligned-center,
  dd.aligned-center, div.aligned-center {
    text-align: center ${c?"!important":""};
  }
  p.aligned-left, blockquote.aligned-left,
  dd.aligned-left, div.aligned-left {
    ${q&&c?"text-align: justify !important;":""}
  }
  p.aligned-right, blockquote.aligned-right,
  dd.aligned-right, div.aligned-right {
    text-align: right ${c?"!important":""};
  }
  p.aligned-justify, blockquote.aligned-justify,
  dd.aligned-justify, div.aligned-justify {
    ${!q&&c?"text-align: initial !important;":""};
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
    ${t?`margin-left: ${l}em ${c?"!important":""};`:""}
    ${t?`margin-right: ${l}em ${c?"!important":""};`:""}
    ${t?`margin-top: unset ${c?"!important":""};`:""}
    ${t?`margin-bottom: unset ${c?"!important":""};`:""}
    ${!t?`margin-top: ${l}em ${c?"!important":""};`:""}
    ${!t?`margin-bottom: ${l}em ${c?"!important":""};`:""}
    ${!t?`margin-left: unset ${c?"!important":""};`:""}
    ${!t?`margin-right: unset ${c?"!important":""};`:""}
  }
  div {
    ${t&&c?`margin-left: ${l}em !important;`:""}
    ${t&&c?`margin-right: ${l}em !important;`:""}
    ${!t&&c?`margin-top: ${l}em !important;`:""}
    ${!t&&c?`margin-bottom: ${l}em !important;`:""}
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
    ${t?"transform: rotate(90deg);":""}
    ${t?"transform-origin: center;":""}
    ${t?"height: 2em;":""}
    ${t?`width: ${m}em;`:""}
    ${t?"vertical-align: unset;":""}
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
    ${t?"width: 1em;":"height: 1em;"}
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
`),J=["ios","android"].includes((0,f.getOSPlatform)()),K=(a.zoomLevel||100)/100,L=(u=a.serifFont,v=a.sansSerifFont,w=a.monospaceFont,x=a.defaultFont,y=a.defaultCJKFont,z=a.defaultFontSize*(J?1.25:1)*K,A=a.minimumFontSize,B=a.fontWeight,C=a.overrideFont,D=["Georgia","Times New Roman"],E=[u,...y!==u?[y]:[],...d.SERIF_FONTS.filter(a=>a!==u&&a!==y&&!D.includes(a)),...d.CJK_SERIF_FONTS.filter(a=>a!==u&&a!==y),...D.filter(a=>d.SERIF_FONTS.includes(a)&&!D.includes(y)),...d.FALLBACK_FONTS],F=[v,...y!==v?[y]:[],...d.SANS_SERIF_FONTS.filter(a=>a!==v&&a!==y),...d.CJK_SANS_SERIF_FONTS.filter(a=>a!==v&&a!==y),...d.FALLBACK_FONTS],G=[w,...d.MONOSPACE_FONTS.filter(a=>a!==w)],H="serif"===x.toLowerCase()?"--serif":"--sans-serif",`
    html {
      --serif: ${E.map(a=>`"${a}"`).join(", ")}, serif;
      --sans-serif: ${F.map(a=>`"${a}"`).join(", ")}, sans-serif;
      --monospace: ${G.map(a=>`"${a}"`).join(", ")}, monospace;
      --font-size: ${z}px;
      --min-font-size: ${A}px;
      --font-weight: ${B};
    }
    html, body {
      font-size: ${z}px !important;
      font-weight: ${B};
      -webkit-text-size-adjust: none;
      text-size-adjust: none;
    }
    /* lower specificity than ebook built-in font styles */
    html {
      font-family: var(${H}) ${C?"!important":""};
    }
    /* higher specificity than ebook built-in font styles */
    html body {
      ${C?`font-family: var(${H}) !important;`:""}
    }
    font[size="1"] {
      font-size: ${A}px;
    }
    font[size="2"] {
      font-size: ${1.5*A}px;
    }
    font[size="3"] {
      font-size: ${z}px;
    }
    font[size="4"] {
      font-size: ${1.2*z}px;
    }
    font[size="5"] {
      font-size: ${1.5*z}px;
    }
    font[size="6"] {
      font-size: ${2*z}px;
    }
    font[size="7"] {
      font-size: ${3*z}px;
    }
    /* hardcoded inline font size */
    [style*="font-size: 16px"], [style*="font-size:16px"] {
      font-size: 1rem !important;
    }
    pre, code, kbd {
      font-family: var(--monospace);
    }
    body *:not(pre, code, kbd, .code):not(pre *, code *, kbd *, .code *) {
      ${C?"font-family: revert !important;":""}
    }
  `),M=((a,b,c,d,e)=>{let{bg:f,fg:g,primary:h,isDarkMode:i}=c;return`
    html {
      --bg-texture-id: ${d};
      --theme-bg-color: ${f};
      --theme-fg-color: ${g};
      --theme-primary-color: ${h};
      --override-color: ${a};
      color-scheme: ${i?"dark":"light"};
    }
    html, body {
      color: ${g};
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
      ${a?`background-color: ${f} !important;`:""}
      ${a?`color: ${g} !important;`:""}
      ${a?`border-color: ${g} !important;`:""}
    }
    pre, span { /* inline code blocks */
      ${a?`background-color: ${f} !important;`:""}
    }
    a:any-link {
      ${a?`color: ${h} !important;`:i?"color: lightblue;":""}
      text-decoration: ${e?"underline":"none"};
    }
    body.pbg {
      ${i?`background-color: ${f} !important;`:""}
    }
    img {
      ${i&&b?"filter: invert(100%);":""}
      ${!i&&a?"mix-blend-mode: multiply;":""}
    }
    /* horizontal rule #1649 */
    *:has(> hr.background-img):not(body) {
      background-color: ${f};
    }
    hr {
      mix-blend-mode: multiply;
    }
    /* inline images */
    p img, span img, sup img {
      mix-blend-mode: ${i?"screen":"multiply"};
    }
    table {
      max-width: calc(var(--available-width));
      overflow: auto;
      table-layout: fixed;
    }
    /* code */
    body.theme-dark code {
      ${i?`color: ${g}cc;`:""}
      ${i?`background: color-mix(in srgb, ${f} 90%, #000);`:""}
      ${i?`background-color: color-mix(in srgb, ${f} 90%, #000);`:""}
    }
    blockquote {
      ${i?`background: color-mix(in srgb, ${f} 80%, #000);`:""}
    }
    blockquote, table * {
      ${i&&a?`background: color-mix(in srgb, ${f} 80%, #000);`:""}
      ${i&&a?`background-color: color-mix(in srgb, ${f} 80%, #000);`:""}
    }
    /* override inline hardcoded text color */
    font[color="#000000"], font[color="#000"], font[color="black"],
    font[color="rgb(0,0,0)"], font[color="rgb(0, 0, 0)"],
    *[style*="color: rgb(0,0,0)"], *[style*="color: rgb(0, 0, 0)"],
    *[style*="color: #000"], *[style*="color: #000000"], *[style*="color: black"],
    *[style*="color:rgb(0,0,0)"], *[style*="color:rgb(0, 0, 0)"],
    *[style*="color:#000"], *[style*="color:#000000"], *[style*="color:black"] {
      color: ${g} !important;
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
      background-color: ${f} !important;
    }
  `})(a.overrideColor,a.invertImgColorInDark,b,a.backgroundTextureId,a.isEink),N=h(a.showTranslateSource),O=a.userStylesheet;return`${I}
${L}
${M}
${N}
${O}`},"getThemeCode",0,i,"keepTextAlignment",0,a=>{a.querySelectorAll("div, p, blockquote, dd").forEach(a=>{let b=window.getComputedStyle(a);"center"===b.textAlign?a.classList.add("aligned-center"):"left"===b.textAlign?a.classList.add("aligned-left"):"right"===b.textAlign?a.classList.add("aligned-right"):"justify"===b.textAlign&&a.classList.add("aligned-justify")})},"transformStylesheet",0,(a,b,c,d)=>{let e=["ios","android"].includes((0,f.getOSPlatform)())?1.25:1,g=!a.includes("{"),h=/([^{]+)({[^}]+})/g;return a=(a=a.replace(h,(a,b,c)=>{let d=/text-align\s*:\s*center\s*[;$]/.test(c),e=/text-indent\s*:\s*0(?:\.0+)?(?:px|em|rem|%)?\s*[;$]/.test(c);return d&&e?(c=(c=c.replace(/(text-align\s*:\s*center)(\s*;|\s*$)/g,"$1 !important$2")).replace(/(text-indent\s*:\s*0(?:\.0+)?(?:px|em|rem|%)?)(\s*;|\s*$)/g,"$1 !important$2"),b+c):a})).replace(h,(a,b,c)=>/white-space\s*:\s*nowrap\s*[;$]/.test(c)?(/overflow\s*:/.test(c)||(c=c.replace(/}$/," overflow: clip !important; }")),b+c):a),g?/page-break-after\s*:\s*always\s*[;]?/.test(a)&&!/margin-bottom\s*:/.test(a)&&(a=a.replace(/;?\s*$/,"")+"; margin-bottom: calc(var(--available-height) * 1px)"):a=a.replace(h,(a,b,c)=>/page-break-after\s*:\s*always\s*[;$]/.test(c)?(/margin-bottom\s*:/.test(c)||(c=c.replace(/}$/," margin-bottom: calc(var(--available-height) * 1px); }")),b+c):a),a=(a=a.replace(h,(a,b,c)=>{if(d)return b+c;let e=[],f=!1;for(let a of["top","bottom","left","right"]){let b=RegExp(`duokan-bleed\\s*:\\s*[^;]*${a}[^;]*;`),d=RegExp(`margin-${a}\\s*:`);b.test(c)&&!d.test(c)&&(f=!0,e.push(a),c=c.replace(/}$/,` margin-${a}: calc(-1 * var(--page-margin-${a})) !important; }`))}return f&&(/position\s*:/.test(c)||(c=c.replace(/}$/," position: relative !important; }")),/overflow\s*:/.test(c)||(c=c.replace(/}$/," overflow: hidden !important; }")),/display\s*:/.test(c)||(c=c.replace(/}$/," display: flow-root !important; }")),!/width\s*:/.test(c)&&e.includes("left")&&e.includes("right")&&(c=c.replace(/}$/," width: calc(var(--_max-width) + var(--page-margin-left) + var(--page-margin-right)) !important; }").replace(/}$/," max-width: 100vw !important; }")),!/height\s*:/.test(c)&&e.includes("top")&&e.includes("bottom")&&(c=c.replace(/}$/," height: calc(100% + var(--page-margin-top) + var(--page-margin-bottom)) !important; }").replace(/}$/," max-height: 100vh !important; }"))),b+c})).replace(/font-size\s*:\s*xx-small/gi,"font-size: 0.6rem").replace(/font-size\s*:\s*x-small/gi,"font-size: 0.75rem").replace(/font-size\s*:\s*small/gi,"font-size: 0.875rem").replace(/font-size\s*:\s*medium/gi,"font-size: 1rem").replace(/font-size\s*:\s*large/gi,"font-size: 1.2rem").replace(/font-size\s*:\s*x-large/gi,"font-size: 1.5rem").replace(/font-size\s*:\s*xx-large/gi,"font-size: 2rem").replace(/font-size\s*:\s*xxx-large/gi,"font-size: 3rem").replace(/font-size\s*:\s*(\d+(?:\.\d+)?)px/gi,(a,b)=>{let c=parseFloat(b)/e/16;return`font-size: ${c}rem`}).replace(/font-size\s*:\s*(\d+(?:\.\d+)?)pt/gi,(a,b)=>{let c=parseFloat(b)/e/12;return`font-size: ${c}rem`}).replace(/font-size\s*:\s*(\d*\.?\d+)(px|rem|em|%)?/gi,(a,b,c="px")=>`font-size: max(${b}${c}, var(--min-font-size, 8px))`).replace(/(\d*\.?\d+)vw/gi,(a,c)=>parseFloat(c)*b/100+"px").replace(/(\d*\.?\d+)vh/gi,(a,b)=>parseFloat(b)*c/100+"px").replace(/([\s;])font-family\s*:\s*monospace/gi,"$1font-family: var(--monospace)").replace(/([\s;])font-weight\s*:\s*normal/gi,"$1font-weight: var(--font-weight)").replace(/([\s;])color\s*:\s*black/gi,"$1color: var(--theme-fg-color)").replace(/([\s;])color\s*:\s*#000000/gi,"$1color: var(--theme-fg-color)").replace(/([\s;])color\s*:\s*#000/gi,"$1color: var(--theme-fg-color)").replace(/([\s;])color\s*:\s*rgb\(0,\s*0,\s*0\)/gi,"$1color: var(--theme-fg-color)")}]),c()}catch(a){c(a)}},!1),162650,a=>a.a(async(b,c)=>{try{var d=a.i(662677),e=a.i(173947);a.i(545251),a.i(662210);var f=a.i(557469),g=b([d,e]);[d,e]=g.then?(await g)():g;let h=(0,d.create)((a,b)=>{let c=(0,e.getThemeCode)();return{themeMode:"auto",themeColor:"default",systemIsDarkMode:!1,isDarkMode:!1,isEinkMode:!1,themeCode:c,systemUIVisible:!1,statusBarHeight:24,systemUIAlwaysHidden:!1,safeAreaInsets:{top:0,right:0,bottom:0,left:0},isRoundedWindow:!0,showSystemUI:()=>a({systemUIVisible:!0}),dismissSystemUI:()=>a({systemUIVisible:!1}),setStatusBarHeight:b=>a({statusBarHeight:b}),setSystemUIAlwaysHidden:b=>a({systemUIAlwaysHidden:b}),getIsDarkMode:()=>b().isDarkMode,setIsEinkMode:b=>{a({isEinkMode:b})},setThemeMode:c=>{let d="dark"===c||"auto"===c&&b().systemIsDarkMode;document.documentElement.setAttribute("data-theme",`${b().themeColor}-${d?"dark":"light"}`),a({themeMode:c,isDarkMode:d}),a({themeCode:(0,e.getThemeCode)()})},setThemeColor:c=>{document.documentElement.setAttribute("data-theme",`${c}-${b().isDarkMode?"dark":"light"}`),a({themeColor:c}),a({themeCode:(0,e.getThemeCode)()})},updateAppTheme:a=>{if((0,f.isWebAppPlatform)()){let{palette:c}=b().themeCode;document.querySelector('meta[name="theme-color"]')?.setAttribute("content",c[a])}},saveCustomTheme:async(a,b,c,d)=>{let e=b.globalReadSettings.customThemes||[],f=e.findIndex(a=>a.name===c.name);d?f>-1&&e.splice(f,1):f>-1?e[f]=c:e.push(c),b.globalReadSettings.customThemes=e,localStorage.setItem("customThemes",JSON.stringify(e));let g=await a.getAppService();await g.saveSettings(b)},handleSystemThemeChange:c=>{let d=b().themeMode,e="dark"===d||"auto"===d&&c;a({systemIsDarkMode:c,isDarkMode:e})},updateSafeAreaInsets:b=>{a({safeAreaInsets:b})}}});a.s(["initSystemThemeListener",0,a=>{},"loadDataTheme",0,()=>{if("undefined"==typeof localStorage||"undefined"==typeof document)return;let a=localStorage.getItem("themeMode"),b=localStorage.getItem("themeColor");if(a&&b){let c=window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.setAttribute("data-theme",`${b}-${"dark"===a||"auto"===a&&c?"dark":"light"}`)}},"useThemeStore",0,h]),c()}catch(a){c(a)}},!1),800587,(a,b,c)=>{b.exports=a.x("dayjs",()=>require("dayjs"))},292907,(a,b,c)=>{b.exports=a.x("dayjs/plugin/relativeTime.js",()=>require("dayjs/plugin/relativeTime.js"))},630812,(a,b,c)=>{b.exports=a.x("dayjs/locale/en.js",()=>require("dayjs/locale/en.js"))},572563,(a,b,c)=>{b.exports=a.x("dayjs/locale/zh.js",()=>require("dayjs/locale/zh.js"))},939407,(a,b,c)=>{b.exports=a.x("dayjs/locale/de.js",()=>require("dayjs/locale/de.js"))},996899,(a,b,c)=>{b.exports=a.x("dayjs/locale/ja.js",()=>require("dayjs/locale/ja.js"))},998238,(a,b,c)=>{b.exports=a.x("dayjs/locale/ko.js",()=>require("dayjs/locale/ko.js"))},470834,(a,b,c)=>{b.exports=a.x("dayjs/locale/ru.js",()=>require("dayjs/locale/ru.js"))},710565,(a,b,c)=>{b.exports=a.x("dayjs/locale/fr.js",()=>require("dayjs/locale/fr.js"))},559303,(a,b,c)=>{b.exports=a.x("dayjs/locale/el.js",()=>require("dayjs/locale/el.js"))},924003,(a,b,c)=>{b.exports=a.x("dayjs/locale/es.js",()=>require("dayjs/locale/es.js"))},538438,(a,b,c)=>{b.exports=a.x("dayjs/locale/it.js",()=>require("dayjs/locale/it.js"))},12981,(a,b,c)=>{b.exports=a.x("dayjs/locale/pt.js",()=>require("dayjs/locale/pt.js"))},670959,(a,b,c)=>{b.exports=a.x("dayjs/locale/pt-br.js",()=>require("dayjs/locale/pt-br.js"))},132358,(a,b,c)=>{b.exports=a.x("dayjs/locale/ar.js",()=>require("dayjs/locale/ar.js"))},220588,(a,b,c)=>{b.exports=a.x("dayjs/locale/id.js",()=>require("dayjs/locale/id.js"))},353080,(a,b,c)=>{b.exports=a.x("dayjs/locale/hi.js",()=>require("dayjs/locale/hi.js"))},998303,(a,b,c)=>{b.exports=a.x("dayjs/locale/th.js",()=>require("dayjs/locale/th.js"))},143136,(a,b,c)=>{b.exports=a.x("dayjs/locale/tr.js",()=>require("dayjs/locale/tr.js"))},995094,(a,b,c)=>{b.exports=a.x("dayjs/locale/vi.js",()=>require("dayjs/locale/vi.js"))},785304,(a,b,c)=>{b.exports=a.x("dayjs/locale/uk.js",()=>require("dayjs/locale/uk.js"))},497384,(a,b,c)=>{b.exports=a.x("dayjs/locale/pl.js",()=>require("dayjs/locale/pl.js"))},135338,(a,b,c)=>{b.exports=a.x("dayjs/locale/fi.js",()=>require("dayjs/locale/fi.js"))},166386,(a,b,c)=>{b.exports=a.x("dayjs/locale/nl.js",()=>require("dayjs/locale/nl.js"))},625885,(a,b,c)=>{b.exports=a.x("dayjs/locale/ro.js",()=>require("dayjs/locale/ro.js"))},978432,(a,b,c)=>{b.exports=a.x("dayjs/locale/zh-tw.js",()=>require("dayjs/locale/zh-tw.js"))},228723,(a,b,c)=>{b.exports=a.x("dayjs/locale/zh-cn.js",()=>require("dayjs/locale/zh-cn.js"))},695901,a=>{"use strict";var b=a.i(800587),c=a.i(292907);a.i(630812),a.i(572563),a.i(939407),a.i(996899),a.i(998238),a.i(470834),a.i(710565),a.i(559303),a.i(924003),a.i(538438),a.i(12981),a.i(670959),a.i(132358),a.i(220588),a.i(353080),a.i(998303),a.i(143136),a.i(995094),a.i(785304),a.i(497384),a.i(135338),a.i(166386),a.i(625885),a.i(978432),a.i(228723),a.s(["initDayjs",0,a=>{b.default.locale(a),b.default.extend(c.default)}])},866736,a=>a.a(async(b,c)=>{try{var d=a.i(70521),e=a.i(662677),f=a.i(695901),g=b([e]);[e]=g.then?(await g)():g;let h=(0,e.create)(a=>({settings:{},settingsDialogBookKey:"",isSettingsDialogOpen:!1,isSettingsGlobal:!0,fontPanelView:"main-fonts",setSettings:b=>a({settings:b}),saveSettings:async(a,b)=>{let c=await a.getAppService();await c.saveSettings(b)},setSettingsDialogBookKey:b=>a({settingsDialogBookKey:b}),setSettingsDialogOpen:b=>a({isSettingsDialogOpen:b}),setSettingsGlobal:b=>a({isSettingsGlobal:b}),setFontPanelView:b=>a({fontPanelView:b}),applyUILanguage:a=>{let b=a||navigator.language;d.default.changeLanguage(b),(0,f.initDayjs)(b)}}));a.s(["useSettingsStore",0,h]),c()}catch(a){c(a)}},!1),664999,a=>a.a(async(b,c)=>{try{var d=a.i(127669),e=a.i(178552),f=a.i(162650),g=a.i(545251),h=b([f]);[f]=h.then?(await h)():h,a.s(["useSafeAreaInsets",0,()=>{let{appService:a}=(0,e.useEnv)(),b=(0,d.useRef)({top:0,right:0,bottom:0,left:0}),{updateSafeAreaInsets:c}=(0,f.useThemeStore)(),h=a=>{let{top:d,right:e,bottom:f,left:g}=b.current;(a.top!==d||a.right!==e||a.bottom!==f||a.left!==g)&&(b.current=a,c(a))},i=(0,d.useCallback)(()=>{if(!a)return;if(!a.hasSafeAreaInset)return void h(b.current);let c=getComputedStyle(document.documentElement),d=c.getPropertyValue("--safe-area-inset-top"),e=/Chrome\/139/.test(navigator.userAgent);if(a.isAndroidApp&&e)(0,g.getSafeAreaInsets)().then(a=>{if(a.error)console.error("Error getting safe area insets from native bridge:",a.error);else{let b={top:Math.round(a.top),right:Math.round(a.right),bottom:Math.round(a.bottom),left:Math.round(a.left)};h(b)}});else if(d){let a=parseFloat(c.getPropertyValue("--safe-area-inset-top"))||0,b=parseFloat(c.getPropertyValue("--safe-area-inset-right"))||0,d=parseFloat(c.getPropertyValue("--safe-area-inset-bottom"))||0,e=parseFloat(c.getPropertyValue("--safe-area-inset-left"))||0;h({top:Math.round(a),right:Math.round(b),bottom:Math.round(d),left:Math.round(e)})}},[a]);(0,d.useEffect)(()=>(i(),window.screen?.orientation?window.screen.orientation.addEventListener("change",i):window.addEventListener("orientationchange",i),()=>{window.screen?.orientation?window.screen.orientation.removeEventListener("change",i):window.removeEventListener("orientationchange",i)}),[i])}]),c()}catch(a){c(a)}},!1),233036,(a,b,c)=>{b.exports=a.x("react-responsive",()=>require("react-responsive"))},106865,a=>{"use strict";var b=a.i(233036);let c=a=>{let c=(0,b.useMediaQuery)({maxWidth:480}),d=(0,b.useMediaQuery)({minWidth:481,maxWidth:1024});return c||d?1.25*a:a};a.s(["useDefaultIconSize",0,()=>c(20),"useResponsiveSize",0,c])},265150,a=>{"use strict";var b=a.i(589911),c=a.i(907105);function d(a){let d=(0,b.getFilename)(a).replace(/\.(jpg|jpeg|png|gif|bmp|webp)$/i,"");return{id:(0,c.md5Fingerprint)(d),name:d,path:a}}let e="background-texture";a.s(["PREDEFINED_TEXTURES",0,[{id:"none",name:"None",url:"",loaded:!0},{id:"concrete",name:"Concrete",url:"/images/concrete-texture.png",loaded:!0},{id:"paper",name:"Paper",url:"/images/paper-texture.png",loaded:!0},{id:"sand",name:"Sand",url:"/images/sand-texture.jpg",loaded:!0},{id:"parchment",name:"Parchment",url:"/images/parchment-paper.jpg",loaded:!0},{id:"scrapbook",name:"Scrapbook",url:"/images/scrapbook-texture.jpg",loaded:!0},{id:"leaves",name:"Leaves",url:"/images/leaves-pattern.jpg",loaded:!0},{id:"moon",name:"Moon Sky",url:"/images/moon-sky.jpg",loaded:!0},{id:"night-sky",name:"Night Sky",url:"/images/night-sky.jpg",loaded:!0}],"createCustomTexture",()=>d,"mountBackgroundTexture",0,(a,b)=>{let c=a.getElementById(e)||a.createElement("style");c.id=e,c.textContent=`
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
      background-image: url("${b.blobUrl||b.url}");
      background-repeat: repeat;
      background-size: var(--bg-texture-size, cover);
      mix-blend-mode: var(--bg-texture-blend-mode, multiply);
      opacity: var(--bg-texture-opacity, 0.6);
    }
    body::before {
      height: 100vh;
    }
    `,c.parentNode||a.head.appendChild(c)},"unmountBackgroundTexture",0,a=>{let b=a.getElementById(e);b&&b.parentNode&&b.parentNode.removeChild(b)}])},170427,a=>a.a(async(b,c)=>{try{var d=a.i(662677),e=a.i(265150),f=a.i(866736),g=b([d,f]);function h(a){let{blobUrl:b,loaded:c,error:d,...e}=a;return e}[d,f]=g.then?(await g)():g;let i=(0,d.create)((a,b)=>({textures:[],loading:!1,setTextures:b=>a({textures:b}),addTexture:c=>{let d=(0,e.createCustomTexture)(c),f=b().textures.find(a=>a.id===d.id);if(f)return b().updateTexture(d.id,{...d,path:d.path,downloadedAt:Date.now(),deletedAt:void 0,loaded:!1,blobUrl:void 0,error:void 0}),a(a=>({textures:[...a.textures]})),f;let g={...d,downloadedAt:Date.now()};return a(a=>({textures:[...a.textures,g]})),g},removeTexture:c=>{let d=b().getTexture(c);if(!d)return!1;d.blobUrl&&URL.revokeObjectURL(d.blobUrl);let e=b().updateTexture(c,{deletedAt:Date.now(),blobUrl:void 0,loaded:!1,error:void 0});return a(a=>({textures:[...a.textures]})),e},updateTexture:(c,d)=>{let e=b().textures.findIndex(a=>a.id===c);return -1!==e&&(a(a=>({textures:a.textures.map((a,b)=>b===e?{...a,...d}:a)})),!0)},getTexture:a=>b().textures.find(b=>b.id===a),getAllTextures:()=>b().textures,getAvailableTextures:()=>b().textures.filter(a=>!a.deletedAt),clearAllTextures:()=>{let{textures:c}=b();c.forEach(a=>{a.blobUrl&&URL.revokeObjectURL(a.blobUrl)}),a({textures:[]})},loadTexture:async(a,c)=>{let d=b().getTexture(c);if(!d)throw Error(`Texture with id "${c}" not found`);if(d.deletedAt)throw Error(`Texture "${d.name}" has been deleted`);if(d.loaded&&d.blobUrl&&!d.error)return d;try{b().updateTexture(c,{loaded:!1,error:void 0});let e=await a.getAppService(),f=await e.openFile(d.path,"Images"),g=d.path.split(".").pop()?.toLowerCase(),h=new Blob([await f.arrayBuffer()],{type:{jpg:"image/jpeg",jpeg:"image/jpeg",png:"image/png",gif:"image/gif",webp:"image/webp",bmp:"image/bmp"}[g||""]||"image/jpeg"}),i=URL.createObjectURL(h);return b().updateTexture(c,{blobUrl:i,loaded:!0,error:void 0}),b().getTexture(c)}catch(d){let a=d instanceof Error?d.message:"Unknown error";throw b().updateTexture(c,{loaded:!1,error:a,blobUrl:void 0}),d}},loadTextures:async(c,d)=>{a({loading:!0});try{return(await Promise.allSettled(d.map(a=>b().loadTexture(c,a)))).filter(a=>"fulfilled"===a.status).map(a=>a.value)}finally{a({loading:!1})}},loadAllTextures:async a=>{let c=b().getAvailableTextures().map(a=>a.id);return await b().loadTextures(a,c)},unloadTexture:a=>{let c=b().getTexture(a);return c?.blobUrl&&URL.revokeObjectURL(c.blobUrl),b().updateTexture(a,{blobUrl:void 0,loaded:!1,error:void 0})},unloadAllTextures:()=>{let a=b().getAllTextures();a.forEach(a=>{a.blobUrl&&URL.revokeObjectURL(a.blobUrl)}),a.forEach(a=>{b().updateTexture(a.id,{blobUrl:void 0,loaded:!1,error:void 0})})},getLoadedTextures:()=>b().getAvailableTextures().filter(a=>a.loaded&&!a.error),isTextureLoaded:a=>{let c=b().getTexture(a);return c?.loaded===!0&&!c.error&&!c.deletedAt},applyTexture:async(a,c)=>{let d=b().getAvailableTextures(),f=[...e.PREDEFINED_TEXTURES,...d].find(a=>a.id===c);f&&"none"!==f.id?(d.find(a=>a.id===c)&&!b().isTextureLoaded(c)&&(f=await b().loadTexture(a,c)),(0,e.mountBackgroundTexture)(document,f)):(0,e.unmountBackgroundTexture)(document)},loadCustomTextures:async c=>{try{let{settings:d}=f.useSettingsStore.getState(),e=b().textures;if(d?.customTextures){let f=d.customTextures.map(a=>{let b=e.find(b=>b.id===a.id);return{...a,loaded:b?.loaded||!1,error:b?.error,blobUrl:b?.blobUrl}});a({textures:f}),await b().loadAllTextures(c)}}catch(a){console.error("Failed to load custom textures settings:",a)}},saveCustomTextures:async a=>{try{let{settings:c,setSettings:d,saveSettings:e}=f.useSettingsStore.getState(),{textures:g}=b();c.customTextures=g.map(h),d(c),e(a,c)}catch(a){throw console.error("Failed to save custom textures settings:",a),a}}}));a.s(["useCustomTextureStore",0,i]),c()}catch(a){c(a)}},!1),699522,a=>a.a(async(b,c)=>{try{var d=a.i(127669),e=a.i(170427),f=a.i(866736),g=b([e,f]);[e,f]=g.then?(await g)():g,a.s(["useBackgroundTexture",0,()=>({applyBackgroundTexture:(0,d.useCallback)((a,b)=>{let c=b.backgroundTextureId,d=b.backgroundOpacity,g=b.backgroundSize;if(!c||"none"===c)return;document.documentElement.style.setProperty("--bg-texture-opacity",`${d}`),document.documentElement.style.setProperty("--bg-texture-size",g);let h=f.useSettingsStore.getState().settings,i=h.customTextures?.find(a=>a.id===c);i&&e.useCustomTextureStore.getState().addTexture(i.path),e.useCustomTextureStore.getState().applyTexture(a,c)},[])})]),c()}catch(a){c(a)}},!1),428956,a=>a.a(async(b,c)=>{try{var d=a.i(162650),e=a.i(127669),f=b([d]);[d]=f.then?(await f)():f,a.s(["useEinkMode",0,()=>{let{setIsEinkMode:a}=(0,d.useThemeStore)();return{applyEinkMode:(0,e.useCallback)(b=>{a(b),b?document.body.classList.add("no-transitions"):document.body.classList.remove("no-transitions"),document.documentElement.setAttribute("data-eink",b.toString())},[a])}}]),c()}catch(a){c(a)}},!1),36448,a=>a.a(async(b,c)=>{try{var d=a.i(508171);a.i(330900);var e=a.i(70521),f=a.i(127669),g=a.i(392994),h=a.i(77946),i=a.i(178552),j=a.i(210997),k=a.i(107625),l=a.i(162650),m=a.i(866736),n=a.i(664999),o=a.i(106865),p=a.i(699522),q=a.i(428956),r=a.i(465863),s=a.i(773288),t=b([g,l,m,n,p,q]);[g,l,m,n,p,q]=t.then?(await t)():t,a.s(["default",0,({children:a})=>{let{envConfig:b,appService:c}=(0,i.useEnv)(),{applyUILanguage:t}=(0,m.useSettingsStore)(),{applyBackgroundTexture:u}=(0,p.useBackgroundTexture)(),{applyEinkMode:v}=(0,q.useEinkMode)(),w=(0,o.useDefaultIconSize)();if((0,n.useSafeAreaInsets)(),(0,f.useEffect)(()=>{window.__STORAGE_MODE__||(window.__STORAGE_MODE__="local"),console.log("[Providers] useEffect: window.__STORAGE_MODE__ =",window.__STORAGE_MODE__);let a=a=>{document.documentElement.lang=a;let b=(0,s.getDirFromUILanguage)();"rtl"===b?document.documentElement.classList.add("ui-rtl"):document.documentElement.classList.remove("ui-rtl")},b=(0,r.getLocale)();return a(b),e.default.on("languageChanged",a),()=>{e.default.off("languageChanged",a)}},[]),(0,f.useEffect)(()=>{(0,l.loadDataTheme)(),c&&((0,l.initSystemThemeListener)(c),c.loadSettings().then(a=>{let c=a.globalViewSettings;t(c.uiLanguage),u(b,c),c.isEink&&v(!0)}))},[b,c,t,u,v]),c)return(0,d.jsx)(j.CSPostHogProvider,{children:(0,d.jsx)(h.AuthProvider,{children:(0,d.jsx)(g.IconContext.Provider,{value:{size:`${w}px`},children:(0,d.jsx)(k.SyncProvider,{children:a})})})})}]),c()}catch(a){c(a)}},!1),929388,a=>a.a(async(b,c)=>{try{var d=a.i(508171),e=a.i(748040),f=a.i(178552),g=a.i(36448),h=b([g]);[g]=h.then?(await h)():h,a.s(["default",0,function({Component:a,pageProps:b}){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(e.default,{children:[(0,d.jsx)("meta",{name:"viewport",content:"minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"}),(0,d.jsx)("meta",{name:"application-name",content:"Readest"}),(0,d.jsx)("meta",{name:"apple-mobile-web-app-capable",content:"yes"}),(0,d.jsx)("meta",{name:"apple-mobile-web-app-status-bar-style",content:"default"}),(0,d.jsx)("meta",{name:"apple-mobile-web-app-title",content:"Readest"}),(0,d.jsx)("meta",{name:"description",content:"Readest is an open-source eBook reader supporting EPUB, PDF, and sync across devices."}),(0,d.jsx)("meta",{name:"format-detection",content:"telephone=no"}),(0,d.jsx)("meta",{name:"mobile-web-app-capable",content:"yes"}),(0,d.jsx)("meta",{name:"theme-color",content:"white"}),(0,d.jsx)("link",{rel:"manifest",href:"/manifest.json"})]}),(0,d.jsx)(f.EnvProvider,{children:(0,d.jsx)(g.default,{children:(0,d.jsx)(a,{...b})})})]})}]),c()}catch(a){c(a)}},!1)];

//# sourceMappingURL=%5Broot-of-the-server%5D__8848db9d._.js.map