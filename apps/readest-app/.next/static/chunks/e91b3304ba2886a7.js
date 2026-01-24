(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,128818,e=>{"use strict";var t=e.i(917409);let a=e=>{let t,a=new Set,r=(e,r)=>{let n="function"==typeof e?e(t):e;if(!Object.is(n,t)){let e=t;t=(null!=r?r:"object"!=typeof n||null===n)?n:Object.assign({},t,n),a.forEach(a=>a(t,e))}},n=()=>t,i={setState:r,getState:n,getInitialState:()=>o,subscribe:e=>(a.add(e),()=>a.delete(e))},o=t=e(r,n,i);return i},r=e=>{let r=e?a(e):a,n=e=>(function(e,a=e=>e){let r=t.default.useSyncExternalStore(e.subscribe,()=>a(e.getState()),()=>a(e.getInitialState()));return t.default.useDebugValue(r),r})(r,e);return Object.assign(n,r),n},n=e=>e?r(e):r;e.s(["create",()=>n],128818)},981441,252494,415810,180718,e=>{"use strict";var t,a,r,n=e.i(128818),i=e.i(262504);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var s=/^\s+/,l=/\s+$/;function d(e,t){if(t=t||{},(e=e||"")instanceof d)return e;if(!(this instanceof d))return new d(e,t);var a,r,n,i,u,m,_,h,c,f,g,p,M,b,y,Y,k,v,L,S,$=(r={r:0,g:0,b:0},n=1,i=null,u=null,m=null,_=!1,h=!1,"string"==typeof(a=e)&&(a=function(e){e=e.replace(s,"").replace(l,"").toLowerCase();var t,a=!1;if(w[e])e=w[e],a=!0;else if("transparent"==e)return{r:0,g:0,b:0,a:0,format:"name"};return(t=F.rgb.exec(e))?{r:t[1],g:t[2],b:t[3]}:(t=F.rgba.exec(e))?{r:t[1],g:t[2],b:t[3],a:t[4]}:(t=F.hsl.exec(e))?{h:t[1],s:t[2],l:t[3]}:(t=F.hsla.exec(e))?{h:t[1],s:t[2],l:t[3],a:t[4]}:(t=F.hsv.exec(e))?{h:t[1],s:t[2],v:t[3]}:(t=F.hsva.exec(e))?{h:t[1],s:t[2],v:t[3],a:t[4]}:(t=F.hex8.exec(e))?{r:T(t[1]),g:T(t[2]),b:T(t[3]),a:T(t[4])/255,format:a?"name":"hex8"}:(t=F.hex6.exec(e))?{r:T(t[1]),g:T(t[2]),b:T(t[3]),format:a?"name":"hex"}:(t=F.hex4.exec(e))?{r:T(t[1]+""+t[1]),g:T(t[2]+""+t[2]),b:T(t[3]+""+t[3]),a:T(t[4]+""+t[4])/255,format:a?"name":"hex8"}:!!(t=F.hex3.exec(e))&&{r:T(t[1]+""+t[1]),g:T(t[2]+""+t[2]),b:T(t[3]+""+t[3]),format:a?"name":"hex"}}(a)),"object"==o(a)&&(C(a.r)&&C(a.g)&&C(a.b)?(c=a.r,f=a.g,g=a.b,r={r:255*D(c,255),g:255*D(f,255),b:255*D(g,255)},_=!0,h="%"===String(a.r).substr(-1)?"prgb":"rgb"):C(a.h)&&C(a.s)&&C(a.v)?(i=z(a.s),u=z(a.v),p=a.h,M=i,b=u,p=6*D(p,360),M=D(M,100),b=D(b,100),y=Math.floor(p),Y=p-y,k=b*(1-M),v=b*(1-Y*M),L=b*(1-(1-Y)*M),r={r:255*[b,v,k,k,L,b][S=y%6],g:255*[L,b,b,v,k,k][S],b:255*[k,k,L,b,b,v][S]},_=!0,h="hsv"):C(a.h)&&C(a.s)&&C(a.l)&&(i=z(a.s),m=z(a.l),r=function(e,t,a){var r,n,i;function o(e,t,a){return(a<0&&(a+=1),a>1&&(a-=1),a<1/6)?e+(t-e)*6*a:a<.5?t:a<2/3?e+(t-e)*(2/3-a)*6:e}if(e=D(e,360),t=D(t,100),a=D(a,100),0===t)r=n=i=a;else{var s=a<.5?a*(1+t):a+t-a*t,l=2*a-s;r=o(l,s,e+1/3),n=o(l,s,e),i=o(l,s,e-1/3)}return{r:255*r,g:255*n,b:255*i}}(a.h,i,m),_=!0,h="hsl"),a.hasOwnProperty("a")&&(n=a.a)),n=x(n),{ok:_,format:a.format||h,r:Math.min(255,Math.max(r.r,0)),g:Math.min(255,Math.max(r.g,0)),b:Math.min(255,Math.max(r.b,0)),a:n});this._originalInput=e,this._r=$.r,this._g=$.g,this._b=$.b,this._a=$.a,this._roundA=Math.round(100*this._a)/100,this._format=t.format||$.format,this._gradientType=t.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=$.ok}function u(e,t,a){e=D(e,255);var r,n,i=Math.max(e,t=D(t,255),a=D(a,255)),o=Math.min(e,t,a),s=(i+o)/2;if(i==o)r=n=0;else{var l=i-o;switch(n=s>.5?l/(2-i-o):l/(i+o),i){case e:r=(t-a)/l+6*(t<a);break;case t:r=(a-e)/l+2;break;case a:r=(e-t)/l+4}r/=6}return{h:r,s:n,l:s}}function m(e,t,a){e=D(e,255);var r,n=Math.max(e,t=D(t,255),a=D(a,255)),i=Math.min(e,t,a),o=n-i;if(n==i)r=0;else{switch(n){case e:r=(t-a)/o+6*(t<a);break;case t:r=(a-e)/o+2;break;case a:r=(e-t)/o+4}r/=6}return{h:r,s:0===n?0:o/n,v:n}}function _(e,t,a,r){var n=[A(Math.round(e).toString(16)),A(Math.round(t).toString(16)),A(Math.round(a).toString(16))];return r&&n[0].charAt(0)==n[0].charAt(1)&&n[1].charAt(0)==n[1].charAt(1)&&n[2].charAt(0)==n[2].charAt(1)?n[0].charAt(0)+n[1].charAt(0)+n[2].charAt(0):n.join("")}function h(e,t,a,r){return[A(j(r)),A(Math.round(e).toString(16)),A(Math.round(t).toString(16)),A(Math.round(a).toString(16))].join("")}function c(e,t){t=0===t?0:t||10;var a=d(e).toHsl();return a.s-=t/100,a.s=H(a.s),d(a)}function f(e,t){t=0===t?0:t||10;var a=d(e).toHsl();return a.s+=t/100,a.s=H(a.s),d(a)}function g(e){return d(e).desaturate(100)}function p(e,t){t=0===t?0:t||10;var a=d(e).toHsl();return a.l+=t/100,a.l=H(a.l),d(a)}function M(e,t){t=0===t?0:t||10;var a=d(e).toRgb();return a.r=Math.max(0,Math.min(255,a.r-Math.round(-(t/100*255)))),a.g=Math.max(0,Math.min(255,a.g-Math.round(-(t/100*255)))),a.b=Math.max(0,Math.min(255,a.b-Math.round(-(t/100*255)))),d(a)}function b(e,t){t=0===t?0:t||10;var a=d(e).toHsl();return a.l-=t/100,a.l=H(a.l),d(a)}function y(e,t){var a=d(e).toHsl(),r=(a.h+t)%360;return a.h=r<0?360+r:r,d(a)}function Y(e){var t=d(e).toHsl();return t.h=(t.h+180)%360,d(t)}function k(e,t){if(isNaN(t)||t<=0)throw Error("Argument to polyad must be a positive number");for(var a=d(e).toHsl(),r=[d(e)],n=360/t,i=1;i<t;i++)r.push(d({h:(a.h+i*n)%360,s:a.s,l:a.l}));return r}function v(e){var t=d(e).toHsl(),a=t.h;return[d(e),d({h:(a+72)%360,s:t.s,l:t.l}),d({h:(a+216)%360,s:t.s,l:t.l})]}function L(e,t,a){t=t||6,a=a||30;var r=d(e).toHsl(),n=360/a,i=[d(e)];for(r.h=(r.h-(n*t>>1)+720)%360;--t;)r.h=(r.h+n)%360,i.push(d(r));return i}function S(e,t){t=t||6;for(var a=d(e).toHsv(),r=a.h,n=a.s,i=a.v,o=[],s=1/t;t--;)o.push(d({h:r,s:n,v:i})),i=(i+s)%1;return o}d.prototype={isDark:function(){return 128>this.getBrightness()},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(299*e.r+587*e.g+114*e.b)/1e3},getLuminance:function(){var e,t,a,r=this.toRgb();return e=r.r/255,t=r.g/255,.2126*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))+.7152*(t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4))+.0722*((a=r.b/255)<=.03928?a/12.92:Math.pow((a+.055)/1.055,2.4))},setAlpha:function(e){return this._a=x(e),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var e=m(this._r,this._g,this._b);return{h:360*e.h,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=m(this._r,this._g,this._b),t=Math.round(360*e.h),a=Math.round(100*e.s),r=Math.round(100*e.v);return 1==this._a?"hsv("+t+", "+a+"%, "+r+"%)":"hsva("+t+", "+a+"%, "+r+"%, "+this._roundA+")"},toHsl:function(){var e=u(this._r,this._g,this._b);return{h:360*e.h,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=u(this._r,this._g,this._b),t=Math.round(360*e.h),a=Math.round(100*e.s),r=Math.round(100*e.l);return 1==this._a?"hsl("+t+", "+a+"%, "+r+"%)":"hsla("+t+", "+a+"%, "+r+"%, "+this._roundA+")"},toHex:function(e){return _(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(e){var t,a,r,n,i,o;return t=this._r,a=this._g,r=this._b,n=this._a,i=e,o=[A(Math.round(t).toString(16)),A(Math.round(a).toString(16)),A(Math.round(r).toString(16)),A(j(n))],i&&o[0].charAt(0)==o[0].charAt(1)&&o[1].charAt(0)==o[1].charAt(1)&&o[2].charAt(0)==o[2].charAt(1)&&o[3].charAt(0)==o[3].charAt(1)?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0)+o[3].charAt(0):o.join("")},toHex8String:function(e){return"#"+this.toHex8(e)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return 1==this._a?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*D(this._r,255))+"%",g:Math.round(100*D(this._g,255))+"%",b:Math.round(100*D(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return 1==this._a?"rgb("+Math.round(100*D(this._r,255))+"%, "+Math.round(100*D(this._g,255))+"%, "+Math.round(100*D(this._b,255))+"%)":"rgba("+Math.round(100*D(this._r,255))+"%, "+Math.round(100*D(this._g,255))+"%, "+Math.round(100*D(this._b,255))+"%, "+this._roundA+")"},toName:function(){return 0===this._a?"transparent":!(this._a<1)&&($[_(this._r,this._g,this._b,!0)]||!1)},toFilter:function(e){var t="#"+h(this._r,this._g,this._b,this._a),a=t,r=this._gradientType?"GradientType = 1, ":"";if(e){var n=d(e);a="#"+h(n._r,n._g,n._b,n._a)}return"progid:DXImageTransform.Microsoft.gradient("+r+"startColorstr="+t+",endColorstr="+a+")"},toString:function(e){var t=!!e;e=e||this._format;var a=!1,r=this._a<1&&this._a>=0;return!t&&r&&("hex"===e||"hex6"===e||"hex3"===e||"hex4"===e||"hex8"===e||"name"===e)?"name"===e&&0===this._a?this.toName():this.toRgbString():("rgb"===e&&(a=this.toRgbString()),"prgb"===e&&(a=this.toPercentageRgbString()),("hex"===e||"hex6"===e)&&(a=this.toHexString()),"hex3"===e&&(a=this.toHexString(!0)),"hex4"===e&&(a=this.toHex8String(!0)),"hex8"===e&&(a=this.toHex8String()),"name"===e&&(a=this.toName()),"hsl"===e&&(a=this.toHslString()),"hsv"===e&&(a=this.toHsvString()),a||this.toHexString())},clone:function(){return d(this.toString())},_applyModification:function(e,t){var a=e.apply(null,[this].concat([].slice.call(t)));return this._r=a._r,this._g=a._g,this._b=a._b,this.setAlpha(a._a),this},lighten:function(){return this._applyModification(p,arguments)},brighten:function(){return this._applyModification(M,arguments)},darken:function(){return this._applyModification(b,arguments)},desaturate:function(){return this._applyModification(c,arguments)},saturate:function(){return this._applyModification(f,arguments)},greyscale:function(){return this._applyModification(g,arguments)},spin:function(){return this._applyModification(y,arguments)},_applyCombination:function(e,t){return e.apply(null,[this].concat([].slice.call(t)))},analogous:function(){return this._applyCombination(L,arguments)},complement:function(){return this._applyCombination(Y,arguments)},monochromatic:function(){return this._applyCombination(S,arguments)},splitcomplement:function(){return this._applyCombination(v,arguments)},triad:function(){return this._applyCombination(k,[3])},tetrad:function(){return this._applyCombination(k,[4])}},d.fromRatio=function(e,t){if("object"==o(e)){var a={};for(var r in e)e.hasOwnProperty(r)&&("a"===r?a[r]=e[r]:a[r]=z(e[r]));e=a}return d(e,t)},d.equals=function(e,t){return!!e&&!!t&&d(e).toRgbString()==d(t).toRgbString()},d.random=function(){return d.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},d.mix=function(e,t,a){a=0===a?0:a||50;var r=d(e).toRgb(),n=d(t).toRgb(),i=a/100;return d({r:(n.r-r.r)*i+r.r,g:(n.g-r.g)*i+r.g,b:(n.b-r.b)*i+r.b,a:(n.a-r.a)*i+r.a})},d.readability=function(e,t){var a=d(e),r=d(t);return(Math.max(a.getLuminance(),r.getLuminance())+.05)/(Math.min(a.getLuminance(),r.getLuminance())+.05)},d.isReadable=function(e,t,a){var r,n,i,o,s,l=d.readability(e,t);switch(s=!1,(n=((r=(r=a)||{level:"AA",size:"small"}).level||"AA").toUpperCase(),i=(r.size||"small").toLowerCase(),"AA"!==n&&"AAA"!==n&&(n="AA"),"small"!==i&&"large"!==i&&(i="small"),o={level:n,size:i}).level+o.size){case"AAsmall":case"AAAlarge":s=l>=4.5;break;case"AAlarge":s=l>=3;break;case"AAAsmall":s=l>=7}return s},d.mostReadable=function(e,t,a){var r,n,i,o,s=null,l=0;n=(a=a||{}).includeFallbackColors,i=a.level,o=a.size;for(var u=0;u<t.length;u++)(r=d.readability(e,t[u]))>l&&(l=r,s=d(t[u]));return d.isReadable(e,s,{level:i,size:o})||!n?s:(a.includeFallbackColors=!1,d.mostReadable(e,["#fff","#000"],a))};var w=d.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},$=d.hexNames=function(e){var t={};for(var a in e)e.hasOwnProperty(a)&&(t[e[a]]=a);return t}(w);function x(e){return(isNaN(e=parseFloat(e))||e<0||e>1)&&(e=1),e}function D(e,t){"string"==typeof(a=e)&&-1!=a.indexOf(".")&&1===parseFloat(a)&&(e="100%");var a,r,n="string"==typeof(r=e)&&-1!=r.indexOf("%");return(e=Math.min(t,Math.max(0,parseFloat(e))),n&&(e=parseInt(e*t,10)/100),1e-6>Math.abs(e-t))?1:e%t/parseFloat(t)}function H(e){return Math.min(1,Math.max(0,e))}function T(e){return parseInt(e,16)}function A(e){return 1==e.length?"0"+e:""+e}function z(e){return e<=1&&(e=100*e+"%"),e}function j(e){return Math.round(255*parseFloat(e)).toString(16)}var F=(a="[\\s|\\(]+("+(t="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+t+")[,|\\s]+("+t+")\\s*\\)?",r="[\\s|\\(]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")\\s*\\)?",{CSS_UNIT:new RegExp(t),rgb:RegExp("rgb"+a),rgba:RegExp("rgba"+r),hsl:RegExp("hsl"+a),hsla:RegExp("hsla"+r),hsv:RegExp("hsv"+a),hsva:RegExp("hsva"+r),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function C(e){return!!F.CSS_UNIT.exec(e)}e.s(["default",()=>d],252494);var I=e.i(62725);function N(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function O(e){let{r:t,g:a,b:r}=d(e).toRgb(),n=N(t/255),i=N(a/255),o=N(r/255),s=Math.cbrt(.4122214708*n+.5363325363*i+.0514459929*o),l=Math.cbrt(.2119034982*n+.6806995451*i+.1073969566*o),u=Math.cbrt(.0883024619*n+.2817188376*i+.6299787005*o),m=1.9779984951*s-2.428592205*l+.4505937099*u,_=.0259040371*s+.7827717662*l-.808675766*u,h=Math.sqrt(m*m+_*_),c=180/Math.PI*Math.atan2(_,m);c<0&&(c+=360);let f=(100*(.2104542553*s+.793617785*l-.0040720468*u)).toFixed(4),g=Number(h.toFixed(6)),p=Number(c.toFixed(3));return 0===g?`${f}% 0 0deg`:`${f}% ${g} ${p}deg`}let E=e=>d(e).isDark()?"100% 0 0deg":"0% 0 0deg",R=e=>d(e).isDark()?"#FFFFFF":"#000000",q=({bg:e,fg:t,primary:a})=>({"base-100":e,"base-200":d(e).darken(5).toHexString(),"base-300":d(e).darken(12).toHexString(),"base-content":t,neutral:d(e).darken(15).desaturate(20).toHexString(),"neutral-content":d(t).lighten(20).desaturate(20).toHexString(),primary:a,secondary:d(a).lighten(20).toHexString(),accent:d(a).analogous()[1].toHexString()}),J=({bg:e,fg:t,primary:a})=>({"base-100":e,"base-200":d(e).lighten(5).toHexString(),"base-300":d(e).lighten(12).toHexString(),"base-content":t,neutral:d(e).lighten(15).desaturate(20).toHexString(),"neutral-content":d(t).darken(20).desaturate(20).toHexString(),primary:a,secondary:d(a).darken(20).toHexString(),accent:d(a).triad()[1].toHexString()}),P=[{name:"default",label:(0,I.stubTranslation)("Default"),colors:{light:q({fg:"#171717",bg:"#ffffff",primary:"#0066cc"}),dark:J({fg:"#e0e0e0",bg:"#222222",primary:"#77bbee"})}},{name:"gray",label:(0,I.stubTranslation)("Gray"),colors:{light:q({fg:"#222222",bg:"#e0e0e0",primary:"#4488cc"}),dark:J({fg:"#c6c6c6",bg:"#444444",primary:"#88ccee"})}},{name:"sepia",label:(0,I.stubTranslation)("Sepia"),colors:{light:q({fg:"#5b4636",bg:"#f1e8d0",primary:"#008b8b"}),dark:J({fg:"#ffd595",bg:"#342e25",primary:"#48d1cc"})}},{name:"grass",label:(0,I.stubTranslation)("Grass"),colors:{light:q({fg:"#232c16",bg:"#d7dbbd",primary:"#177b4d"}),dark:J({fg:"#d8deba",bg:"#333627",primary:"#a6d608"})}},{name:"cherry",label:(0,I.stubTranslation)("Cherry"),colors:{light:q({fg:"#4e1609",bg:"#f0d1d5",primary:"#de3838"}),dark:J({fg:"#e5c4c8",bg:"#462f32",primary:"#ff646e"})}},{name:"sky",label:(0,I.stubTranslation)("Sky"),colors:{light:q({fg:"#262d48",bg:"#cedef5",primary:"#2d53e5"}),dark:J({fg:"#babee1",bg:"#282e47",primary:"#ff646e"})}},{name:"solarized",label:(0,I.stubTranslation)("Solarized"),colors:{light:q({fg:"#586e75",bg:"#fdf6e3",primary:"#268bd2"}),dark:J({fg:"#93a1a1",bg:"#002b36",primary:"#268bd2"})}},{name:"gruvbox",label:(0,I.stubTranslation)("Gruvbox"),colors:{light:q({fg:"#3c3836",bg:"#fbf1c7",primary:"#076678"}),dark:J({fg:"#ebdbb2",bg:"#282828",primary:"#83a598"})}},{name:"nord",label:(0,I.stubTranslation)("Nord"),colors:{light:q({fg:"#2e3440",bg:"#eceff4",primary:"#5e81ac"}),dark:J({fg:"#d8dee9",bg:"#2e3440",primary:"#88c0d0"})}},{name:"contrast",label:(0,I.stubTranslation)("Contrast"),colors:{light:q({fg:"#000000",bg:"#ffffff",primary:"#4488cc"}),dark:J({fg:"#ffffff",bg:"#000000",primary:"#88ccee"})}},{name:"sunset",label:(0,I.stubTranslation)("Sunset"),colors:{light:q({fg:"#423126",bg:"#fff7f0",primary:"#fe6b64"}),dark:J({fg:"#f6e1d7",bg:"#3c2b25",primary:"#ff9c94"})}}],W=(e,t=!1)=>{let a=`
    --b1: ${O(e["base-100"])};
    --b2: ${O(e["base-200"])};
    --b3: ${O(e["base-300"])};
    --bc: ${O(e["base-content"])};
    
    --p: ${O(e.primary)};
    --pc: ${E(e.primary)};
    
    --s: ${O(e.secondary)};
    --sc: ${E(e.secondary)};
    
    --a: ${O(e.accent)};
    --ac: ${E(e.accent)};
    
    --n: ${O(e.neutral)};
    --nc: ${O(e["neutral-content"])};
    
    --in: 69.37% 0.047 231deg;
    --inc: 100% 0 0deg;
    --su: 78.15% 0.12 160deg;
    --suc: 100% 0 0deg;
    --wa: 90.69% 0.123 84deg;
    --wac: 0% 0 0deg;
    --er: 70.9% 0.184 22deg;
    --erc: 100% 0 0deg;
  `,r=`
    --fallback-b1: ${e["base-100"]};
    --fallback-b2: ${e["base-200"]};
    --fallback-b3: ${e["base-300"]};
    --fallback-bc: ${e["base-content"]};

    --fallback-p: ${e.primary};
    --fallback-pc: ${R(e.primary)};

    --fallback-s: ${e.secondary};
    --fallback-sc: ${R(e.secondary)};

    --fallback-a: ${e.accent};
    --fallback-ac: ${R(e.accent)};

    --fallback-n: ${e.neutral};
    --fallback-nc: ${e["neutral-content"]};

    --fallback-in: #ff0000;
    --fallback-inc: #ffffff;
    --fallback-su: #00ff00;
    --fallback-suc: #000000;
    --fallback-wa: #ffff00;
    --fallback-wac: #000000;
    --fallback-er: #ff8000;
    --fallback-erc: #000000;
  `;return a+(t?r:"")};e.s(["applyCustomTheme",0,(e,t,a=!1)=>{if(!e&&!t)return;let r=e?`${e.name}-light`:`${t}-light`,n=e?`${e.name}-dark`:`${t}-dark`,i=e?q(e.colors.light):(P.find(e=>e.name===t)||P[0]).colors.light,o=e?J(e.colors.dark):(P.find(e=>e.name===t)||P[0]).colors.dark,s=`
    [data-theme="${r}"] {
      ${W(i,a)}
    }
    
    [data-theme="${n}"] {
      ${W(o,a)}
    }
    
    :root {
      --${r}: 1;
      --${n}: 1;
    }
  `,l=document.createElement("style");l.id=`theme-${e?e.name:t}-styles`,l.textContent=s;let d=document.getElementById(l.id);return d&&d.remove(),document.head.appendChild(l),{light:r,dark:n}},"generateDarkPalette",0,J,"generateLightPalette",0,q,"themes",0,P],415810);let B=e=>`
  .translation-source {
  }
  .translation-target {
  }
  .translation-target.hidden {
    display: none !important;
  }
  .translation-target-block {
    display: block !important;
    ${e?"margin: 0.5em 0 !important;":""}
  }
  .translation-target-toc {
    display: block !important;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`,U=()=>{let e="auto",t="default",a=!1,r=[];t=localStorage.getItem("themeColor")||"default",e=localStorage.getItem("themeMode")||"auto",r=JSON.parse(localStorage.getItem("customThemes")||"[]"),a=window.matchMedia("(prefers-color-scheme: dark)").matches;let n="dark"===e||"auto"===e&&a,i=P.find(e=>e.name===t);if(!i){let e=r.find(e=>e.name===t);e&&(i={name:e.name,label:e.label,colors:{light:q(e.colors.light),dark:J(e.colors.dark)}})}i||(i=P[0]);let o=n?i.colors.dark:i.colors.light;return{bg:o["base-100"],fg:o["base-content"],primary:o.primary,palette:o,isDarkMode:n}};e.s(["applyFixedlayoutStyles",0,(e,t,a)=>{a||(a=U());let{bg:r,fg:n,primary:i,isDarkMode:o}=a,s=t.overrideColor,l=t.invertImgColorInDark,d="fixed-layout-styles",u=e.getElementById(d);u&&u.remove(),(u=e.createElement("style")).id=d,u.textContent=`
    html {
      --theme-bg-color: ${r};
      --theme-fg-color: ${n};
      --theme-primary-color: ${i};
      color-scheme: ${o?"dark":"light"};
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
      ${o&&l?"filter: invert(100%);":""}
      ${s?`mix-blend-mode: ${o?"#000000"===r?"luminosity":"overlay":"multiply"};`:""}
    }
    img.singlePage {
      position: relative;
    }
  `,e.head.appendChild(u)},"applyImageStyle",0,e=>{e.querySelectorAll("img").forEach(e=>{let t=e.getAttribute("width");if(t&&(t.endsWith("%")||t.endsWith("vw"))){let a=parseFloat(t);isNaN(a)||(e.style.width=`${a/100*window.innerWidth}px`,e.removeAttribute("width"))}let a=e.getAttribute("height");if(a&&(a.endsWith("%")||a.endsWith("vh"))){let t=parseFloat(a);isNaN(t)||(e.style.height=`${t/100*window.innerHeight}px`,e.removeAttribute("height"))}let r=e.parentNode;if(!r||r.nodeType!==Node.ELEMENT_NODE)return;let n=Array.from(r.childNodes).some(e=>e.nodeType===Node.TEXT_NODE&&e.textContent?.trim()),i=Array.from(r.childNodes).every(e=>e.nodeType!==Node.ELEMENT_NODE||"BR"!==e.tagName);n&&i&&e.classList.add("has-text-siblings")}),e.querySelectorAll("hr").forEach(e=>{let t=window.getComputedStyle(e);t.backgroundImage&&"none"!==t.backgroundImage&&e.classList.add("background-img")})},"applyScrollModeClass",0,(e,t)=>{e.body.classList.remove("scroll-mode","paginated-mode"),e.body.classList.add(t?"scroll-mode":"paginated-mode")},"applyTableStyle",0,e=>{e.querySelectorAll("table").forEach(e=>{let t=e.parentNode;if(!t||t.nodeType!==Node.ELEMENT_NODE)return;let a=0;for(let t of e.querySelectorAll("tr")){let e=t.querySelectorAll("td, th"),r=0;e.forEach(e=>{let t=e.getAttribute("width"),a=e.style.width,n=t||a;if(n){let e=parseFloat(n),t=n.replace(e.toString(),"").trim();"px"!==t&&t?"%"===t&&(r+=window.innerWidth*e/100):r+=e}}),r>a&&(a=r)}if(a>0){let t=`calc(min(1, var(--available-width) / ${a}))`;e.style.transformOrigin="left top",e.style.transform=`scale(${t})`}})},"applyThemeModeClass",0,(e,t)=>{e.body.classList.remove("theme-light","theme-dark"),e.body.classList.add(t?"theme-dark":"theme-light")},"applyTranslationStyle",0,e=>{let t="translation-style",a=document.getElementById(t);a&&a.remove();let r=document.createElement("style");r.id=t,r.textContent=B(e.showTranslateSource),document.head.appendChild(r)},"getFootnoteStyles",0,()=>`
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
`,"getStyles",0,(e,t)=>{var a,r,n,o,s,l,d,u,m,_,h,c,f,g,p,M,b,y,Y,k,v,L,S;let w,$,x,D,H;t||(t=U());let T=(a=e.overrideLayout,r=e.marginTopPx,n=e.marginRightPx,o=e.marginBottomPx,s=e.marginLeftPx,l=e.paragraphMargin,d=e.lineHeight,u=e.wordSpacing,m=e.letterSpacing,_=e.textIndent,h=e.fullJustification,c=e.hyphenation,f=e.writingMode,g=e.vertical,`
  @namespace epub "http://www.idpf.org/2007/ops";
  html {
    --default-text-align: ${h?"justify":"start"};
    --margin-top: ${r}px;
    --margin-right: ${n}px;
    --margin-bottom: ${o}px;
    --margin-left: ${s}px;
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
    ${"auto"===f?"":`writing-mode: ${f} !important;`}
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
    line-height: ${d} ${a?"!important":""};
    word-spacing: ${u}px ${a?"!important":""};
    letter-spacing: ${m}px ${a?"!important":""};
    text-indent: ${_}em ${a?"!important":""};
    -webkit-hyphens: ${c?"auto":"manual"};
    hyphens: ${c?"auto":"manual"};
    -webkit-hyphenate-limit-before: 3;
    -webkit-hyphenate-limit-after: 2;
    -webkit-hyphenate-limit-lines: 2;
    hanging-punctuation: allow-end last;
    widows: 2;
  }
  p.aligned-center, blockquote.aligned-center,
  dd.aligned-center, div.aligned-center {
    text-align: center ${a?"!important":""};
  }
  p.aligned-left, blockquote.aligned-left,
  dd.aligned-left, div.aligned-left {
    ${h&&a?"text-align: justify !important;":""}
  }
  p.aligned-right, blockquote.aligned-right,
  dd.aligned-right, div.aligned-right {
    text-align: right ${a?"!important":""};
  }
  p.aligned-justify, blockquote.aligned-justify,
  dd.aligned-justify, div.aligned-justify {
    ${!h&&a?"text-align: initial !important;":""};
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
    ${g?`margin-left: ${l}em ${a?"!important":""};`:""}
    ${g?`margin-right: ${l}em ${a?"!important":""};`:""}
    ${g?`margin-top: unset ${a?"!important":""};`:""}
    ${g?`margin-bottom: unset ${a?"!important":""};`:""}
    ${!g?`margin-top: ${l}em ${a?"!important":""};`:""}
    ${!g?`margin-bottom: ${l}em ${a?"!important":""};`:""}
    ${!g?`margin-left: unset ${a?"!important":""};`:""}
    ${!g?`margin-right: unset ${a?"!important":""};`:""}
  }
  div {
    ${g&&a?`margin-left: ${l}em !important;`:""}
    ${g&&a?`margin-right: ${l}em !important;`:""}
    ${!g&&a?`margin-top: ${l}em !important;`:""}
    ${!g&&a?`margin-bottom: ${l}em !important;`:""}
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
    ${g?"transform: rotate(90deg);":""}
    ${g?"transform-origin: center;":""}
    ${g?"height: 2em;":""}
    ${g?`width: ${d}em;`:""}
    ${g?"vertical-align: unset;":""}
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
    ${g?"width: 1em;":"height: 1em;"}
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
`),A=["ios","android"].includes((0,I.getOSPlatform)()),z=(e.zoomLevel||100)/100,j=(p=e.serifFont,M=e.sansSerifFont,b=e.monospaceFont,y=e.defaultFont,Y=e.defaultCJKFont,k=e.defaultFontSize*(A?1.25:1)*z,v=e.minimumFontSize,L=e.fontWeight,S=e.overrideFont,w=["Georgia","Times New Roman"],$=[p,...Y!==p?[Y]:[],...i.SERIF_FONTS.filter(e=>e!==p&&e!==Y&&!w.includes(e)),...i.CJK_SERIF_FONTS.filter(e=>e!==p&&e!==Y),...w.filter(e=>i.SERIF_FONTS.includes(e)&&!w.includes(Y)),...i.FALLBACK_FONTS],x=[M,...Y!==M?[Y]:[],...i.SANS_SERIF_FONTS.filter(e=>e!==M&&e!==Y),...i.CJK_SANS_SERIF_FONTS.filter(e=>e!==M&&e!==Y),...i.FALLBACK_FONTS],D=[b,...i.MONOSPACE_FONTS.filter(e=>e!==b)],H="serif"===y.toLowerCase()?"--serif":"--sans-serif",`
    html {
      --serif: ${$.map(e=>`"${e}"`).join(", ")}, serif;
      --sans-serif: ${x.map(e=>`"${e}"`).join(", ")}, sans-serif;
      --monospace: ${D.map(e=>`"${e}"`).join(", ")}, monospace;
      --font-size: ${k}px;
      --min-font-size: ${v}px;
      --font-weight: ${L};
    }
    html, body {
      font-size: ${k}px !important;
      font-weight: ${L};
      -webkit-text-size-adjust: none;
      text-size-adjust: none;
    }
    /* lower specificity than ebook built-in font styles */
    html {
      font-family: var(${H}) ${S?"!important":""};
    }
    /* higher specificity than ebook built-in font styles */
    html body {
      ${S?`font-family: var(${H}) !important;`:""}
    }
    font[size="1"] {
      font-size: ${v}px;
    }
    font[size="2"] {
      font-size: ${1.5*v}px;
    }
    font[size="3"] {
      font-size: ${k}px;
    }
    font[size="4"] {
      font-size: ${1.2*k}px;
    }
    font[size="5"] {
      font-size: ${1.5*k}px;
    }
    font[size="6"] {
      font-size: ${2*k}px;
    }
    font[size="7"] {
      font-size: ${3*k}px;
    }
    /* hardcoded inline font size */
    [style*="font-size: 16px"], [style*="font-size:16px"] {
      font-size: 1rem !important;
    }
    pre, code, kbd {
      font-family: var(--monospace);
    }
    body *:not(pre, code, kbd, .code):not(pre *, code *, kbd *, .code *) {
      ${S?"font-family: revert !important;":""}
    }
  `),F=((e,t,a,r,n)=>{let{bg:i,fg:o,primary:s,isDarkMode:l}=a;return`
    html {
      --bg-texture-id: ${r};
      --theme-bg-color: ${i};
      --theme-fg-color: ${o};
      --theme-primary-color: ${s};
      --override-color: ${e};
      color-scheme: ${l?"dark":"light"};
    }
    html, body {
      color: ${o};
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
      ${e?`background-color: ${i} !important;`:""}
      ${e?`color: ${o} !important;`:""}
      ${e?`border-color: ${o} !important;`:""}
    }
    pre, span { /* inline code blocks */
      ${e?`background-color: ${i} !important;`:""}
    }
    a:any-link {
      ${e?`color: ${s} !important;`:l?"color: lightblue;":""}
      text-decoration: ${n?"underline":"none"};
    }
    body.pbg {
      ${l?`background-color: ${i} !important;`:""}
    }
    img {
      ${l&&t?"filter: invert(100%);":""}
      ${!l&&e?"mix-blend-mode: multiply;":""}
    }
    /* horizontal rule #1649 */
    *:has(> hr.background-img):not(body) {
      background-color: ${i};
    }
    hr {
      mix-blend-mode: multiply;
    }
    /* inline images */
    p img, span img, sup img {
      mix-blend-mode: ${l?"screen":"multiply"};
    }
    table {
      max-width: calc(var(--available-width));
      overflow: auto;
      table-layout: fixed;
    }
    /* code */
    body.theme-dark code {
      ${l?`color: ${o}cc;`:""}
      ${l?`background: color-mix(in srgb, ${i} 90%, #000);`:""}
      ${l?`background-color: color-mix(in srgb, ${i} 90%, #000);`:""}
    }
    blockquote {
      ${l?`background: color-mix(in srgb, ${i} 80%, #000);`:""}
    }
    blockquote, table * {
      ${l&&e?`background: color-mix(in srgb, ${i} 80%, #000);`:""}
      ${l&&e?`background-color: color-mix(in srgb, ${i} 80%, #000);`:""}
    }
    /* override inline hardcoded text color */
    font[color="#000000"], font[color="#000"], font[color="black"],
    font[color="rgb(0,0,0)"], font[color="rgb(0, 0, 0)"],
    *[style*="color: rgb(0,0,0)"], *[style*="color: rgb(0, 0, 0)"],
    *[style*="color: #000"], *[style*="color: #000000"], *[style*="color: black"],
    *[style*="color:rgb(0,0,0)"], *[style*="color:rgb(0, 0, 0)"],
    *[style*="color:#000"], *[style*="color:#000000"], *[style*="color:black"] {
      color: ${o} !important;
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
      background-color: ${i} !important;
    }
  `})(e.overrideColor,e.invertImgColorInDark,t,e.backgroundTextureId,e.isEink),C=B(e.showTranslateSource),N=e.userStylesheet;return`${T}
${j}
${F}
${C}
${N}`},"getThemeCode",0,U,"keepTextAlignment",0,e=>{e.querySelectorAll("div, p, blockquote, dd").forEach(e=>{let t=window.getComputedStyle(e);"center"===t.textAlign?e.classList.add("aligned-center"):"left"===t.textAlign?e.classList.add("aligned-left"):"right"===t.textAlign?e.classList.add("aligned-right"):"justify"===t.textAlign&&e.classList.add("aligned-justify")})},"transformStylesheet",0,(e,t,a,r)=>{let n=["ios","android"].includes((0,I.getOSPlatform)())?1.25:1,i=!e.includes("{"),o=/([^{]+)({[^}]+})/g;return e=(e=e.replace(o,(e,t,a)=>{let r=/text-align\s*:\s*center\s*[;$]/.test(a),n=/text-indent\s*:\s*0(?:\.0+)?(?:px|em|rem|%)?\s*[;$]/.test(a);return r&&n?t+(a=(a=a.replace(/(text-align\s*:\s*center)(\s*;|\s*$)/g,"$1 !important$2")).replace(/(text-indent\s*:\s*0(?:\.0+)?(?:px|em|rem|%)?)(\s*;|\s*$)/g,"$1 !important$2")):e})).replace(o,(e,t,a)=>/white-space\s*:\s*nowrap\s*[;$]/.test(a)?(/overflow\s*:/.test(a)||(a=a.replace(/}$/," overflow: clip !important; }")),t+a):e),i?/page-break-after\s*:\s*always\s*[;]?/.test(e)&&!/margin-bottom\s*:/.test(e)&&(e=e.replace(/;?\s*$/,"")+"; margin-bottom: calc(var(--available-height) * 1px)"):e=e.replace(o,(e,t,a)=>/page-break-after\s*:\s*always\s*[;$]/.test(a)?(/margin-bottom\s*:/.test(a)||(a=a.replace(/}$/," margin-bottom: calc(var(--available-height) * 1px); }")),t+a):e),e=(e=e.replace(o,(e,t,a)=>{if(r)return t+a;let n=[],i=!1;for(let e of["top","bottom","left","right"]){let t=RegExp(`duokan-bleed\\s*:\\s*[^;]*${e}[^;]*;`),r=RegExp(`margin-${e}\\s*:`);t.test(a)&&!r.test(a)&&(i=!0,n.push(e),a=a.replace(/}$/,` margin-${e}: calc(-1 * var(--page-margin-${e})) !important; }`))}return i&&(/position\s*:/.test(a)||(a=a.replace(/}$/," position: relative !important; }")),/overflow\s*:/.test(a)||(a=a.replace(/}$/," overflow: hidden !important; }")),/display\s*:/.test(a)||(a=a.replace(/}$/," display: flow-root !important; }")),!/width\s*:/.test(a)&&n.includes("left")&&n.includes("right")&&(a=a.replace(/}$/," width: calc(var(--_max-width) + var(--page-margin-left) + var(--page-margin-right)) !important; }").replace(/}$/," max-width: 100vw !important; }")),!/height\s*:/.test(a)&&n.includes("top")&&n.includes("bottom")&&(a=a.replace(/}$/," height: calc(100% + var(--page-margin-top) + var(--page-margin-bottom)) !important; }").replace(/}$/," max-height: 100vh !important; }"))),t+a})).replace(/font-size\s*:\s*xx-small/gi,"font-size: 0.6rem").replace(/font-size\s*:\s*x-small/gi,"font-size: 0.75rem").replace(/font-size\s*:\s*small/gi,"font-size: 0.875rem").replace(/font-size\s*:\s*medium/gi,"font-size: 1rem").replace(/font-size\s*:\s*large/gi,"font-size: 1.2rem").replace(/font-size\s*:\s*x-large/gi,"font-size: 1.5rem").replace(/font-size\s*:\s*xx-large/gi,"font-size: 2rem").replace(/font-size\s*:\s*xxx-large/gi,"font-size: 3rem").replace(/font-size\s*:\s*(\d+(?:\.\d+)?)px/gi,(e,t)=>{let a=parseFloat(t)/n/16;return`font-size: ${a}rem`}).replace(/font-size\s*:\s*(\d+(?:\.\d+)?)pt/gi,(e,t)=>{let a=parseFloat(t)/n/12;return`font-size: ${a}rem`}).replace(/font-size\s*:\s*(\d*\.?\d+)(px|rem|em|%)?/gi,(e,t,a="px")=>`font-size: max(${t}${a}, var(--min-font-size, 8px))`).replace(/(\d*\.?\d+)vw/gi,(e,a)=>parseFloat(a)*t/100+"px").replace(/(\d*\.?\d+)vh/gi,(e,t)=>parseFloat(t)*a/100+"px").replace(/([\s;])font-family\s*:\s*monospace/gi,"$1font-family: var(--monospace)").replace(/([\s;])font-weight\s*:\s*normal/gi,"$1font-weight: var(--font-weight)").replace(/([\s;])color\s*:\s*black/gi,"$1color: var(--theme-fg-color)").replace(/([\s;])color\s*:\s*#000000/gi,"$1color: var(--theme-fg-color)").replace(/([\s;])color\s*:\s*#000/gi,"$1color: var(--theme-fg-color)").replace(/([\s;])color\s*:\s*rgb\(0,\s*0,\s*0\)/gi,"$1color: var(--theme-fg-color)")}],180718);var K=e.i(341537),V=e.i(503523),G=e.i(141886);let Z=(0,n.create)((e,t)=>{let a=localStorage&&localStorage.getItem("themeMode")||"auto",r=(()=>{if(localStorage){let e=window.__READEST_IS_EINK?"contrast":"default";return localStorage.getItem("themeColor")||e}return"default"})(),n=window.matchMedia("(prefers-color-scheme: dark)").matches;return{themeMode:a,themeColor:r,systemIsDarkMode:n,isDarkMode:"dark"===a||"auto"===a&&n,isEinkMode:!1,themeCode:U(),systemUIVisible:!1,statusBarHeight:24,systemUIAlwaysHidden:!1,safeAreaInsets:{top:0,right:0,bottom:0,left:0},isRoundedWindow:!0,showSystemUI:()=>e({systemUIVisible:!0}),dismissSystemUI:()=>e({systemUIVisible:!1}),setStatusBarHeight:t=>e({statusBarHeight:t}),setSystemUIAlwaysHidden:t=>e({systemUIAlwaysHidden:t}),getIsDarkMode:()=>t().isDarkMode,setIsEinkMode:t=>{e({isEinkMode:t})},setThemeMode:a=>{localStorage&&localStorage.setItem("themeMode",a);let r="dark"===a||"auto"===a&&t().systemIsDarkMode;document.documentElement.setAttribute("data-theme",`${t().themeColor}-${r?"dark":"light"}`),e({themeMode:a,isDarkMode:r}),e({themeCode:U()})},setThemeColor:a=>{localStorage&&localStorage.setItem("themeColor",a),document.documentElement.setAttribute("data-theme",`${a}-${t().isDarkMode?"dark":"light"}`),e({themeColor:a}),e({themeCode:U()})},updateAppTheme:e=>{if((0,G.isWebAppPlatform)()){let{palette:a}=t().themeCode;document.querySelector('meta[name="theme-color"]')?.setAttribute("content",a[e])}},saveCustomTheme:async(e,t,a,r)=>{let n=t.globalReadSettings.customThemes||[],i=n.findIndex(e=>e.name===a.name);r?i>-1&&n.splice(i,1):i>-1?n[i]=a:n.push(a),t.globalReadSettings.customThemes=n,localStorage.setItem("customThemes",JSON.stringify(n));let o=await e.getAppService();await o.saveSettings(t)},handleSystemThemeChange:a=>{let r=t().themeMode,n="dark"===r||"auto"===r&&a;e({systemIsDarkMode:a,isDarkMode:n})},updateSafeAreaInsets:t=>{e({safeAreaInsets:t})}}});e.s(["initSystemThemeListener",0,e=>{if(!e)return;let t=window.matchMedia("(prefers-color-scheme: dark)"),a=async()=>{let a;a=e.isIOSApp?"dark"===(await (0,K.getSystemColorScheme)()).colorScheme:t.matches,Z.getState().handleSystemThemeChange(a)},r=async()=>{if(!e.hasWindow||!e.isLinuxApp)return;let t=(0,V.getCurrentWindow)(),a=await t.isFullscreen(),r=await t.isMaximized();Z.setState({isRoundedWindow:!r&&!a})};t?.addEventListener("change",a),document.addEventListener("visibilitychange",a),window.addEventListener("resize",r),a()},"loadDataTheme",0,()=>{if("undefined"==typeof localStorage||"undefined"==typeof document)return;let e=localStorage.getItem("themeMode"),t=localStorage.getItem("themeColor");if(e&&t){let a=window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.setAttribute("data-theme",`${t}-${"dark"===e||"auto"===e&&a?"dark":"light"}`)}},"useThemeStore",0,Z],981441)},586295,(e,t,a)=>{e.e,t.exports=function(){"use strict";var e="millisecond",t="second",a="minute",r="hour",n="week",i="month",o="quarter",s="year",l="date",d="Invalid Date",u=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,_=function(e,t,a){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(a)+e},h="en",c={};c[h]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],a=e%100;return"["+e+(t[(a-20)%10]||t[a]||t[0])+"]"}};var f="$isDayjsObject",g=function(e){return e instanceof y||!(!e||!e[f])},p=function e(t,a,r){var n;if(!t)return h;if("string"==typeof t){var i=t.toLowerCase();c[i]&&(n=i),a&&(c[i]=a,n=i);var o=t.split("-");if(!n&&o.length>1)return e(o[0])}else{var s=t.name;c[s]=t,n=s}return!r&&n&&(h=n),n||!r&&h},M=function(e,t){if(g(e))return e.clone();var a="object"==typeof t?t:{};return a.date=e,a.args=arguments,new y(a)},b={s:_,z:function(e){var t=-e.utcOffset(),a=Math.abs(t);return(t<=0?"+":"-")+_(Math.floor(a/60),2,"0")+":"+_(a%60,2,"0")},m:function e(t,a){if(t.date()<a.date())return-e(a,t);var r=12*(a.year()-t.year())+(a.month()-t.month()),n=t.clone().add(r,i),o=a-n<0,s=t.clone().add(r+(o?-1:1),i);return+(-(r+(a-n)/(o?n-s:s-n))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(d){return({M:i,y:s,w:n,d:"day",D:l,h:r,m:a,s:t,ms:e,Q:o})[d]||String(d||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}};b.l=p,b.i=g,b.w=function(e,t){return M(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var y=function(){function _(e){this.$L=p(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[f]=!0}var h=_.prototype;return h.parse=function(e){this.$d=function(e){var t=e.date,a=e.utc;if(null===t)return new Date(NaN);if(b.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(u);if(r){var n=r[2]-1||0,i=(r[7]||"0").substring(0,3);return a?new Date(Date.UTC(r[1],n,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],n,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(t)}(e),this.init()},h.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},h.$utils=function(){return b},h.isValid=function(){return this.$d.toString()!==d},h.isSame=function(e,t){var a=M(e);return this.startOf(t)<=a&&a<=this.endOf(t)},h.isAfter=function(e,t){return M(e)<this.startOf(t)},h.isBefore=function(e,t){return this.endOf(t)<M(e)},h.$g=function(e,t,a){return b.u(e)?this[t]:this.set(a,e)},h.unix=function(){return Math.floor(this.valueOf()/1e3)},h.valueOf=function(){return this.$d.getTime()},h.startOf=function(e,o){var d=this,u=!!b.u(o)||o,m=b.p(e),_=function(e,t){var a=b.w(d.$u?Date.UTC(d.$y,t,e):new Date(d.$y,t,e),d);return u?a:a.endOf("day")},h=function(e,t){return b.w(d.toDate()[e].apply(d.toDate("s"),(u?[0,0,0,0]:[23,59,59,999]).slice(t)),d)},c=this.$W,f=this.$M,g=this.$D,p="set"+(this.$u?"UTC":"");switch(m){case s:return u?_(1,0):_(31,11);case i:return u?_(1,f):_(0,f+1);case n:var M=this.$locale().weekStart||0,y=(c<M?c+7:c)-M;return _(u?g-y:g+(6-y),f);case"day":case l:return h(p+"Hours",0);case r:return h(p+"Minutes",1);case a:return h(p+"Seconds",2);case t:return h(p+"Milliseconds",3);default:return this.clone()}},h.endOf=function(e){return this.startOf(e,!1)},h.$set=function(n,o){var d,u=b.p(n),m="set"+(this.$u?"UTC":""),_=((d={}).day=m+"Date",d[l]=m+"Date",d[i]=m+"Month",d[s]=m+"FullYear",d[r]=m+"Hours",d[a]=m+"Minutes",d[t]=m+"Seconds",d[e]=m+"Milliseconds",d)[u],h="day"===u?this.$D+(o-this.$W):o;if(u===i||u===s){var c=this.clone().set(l,1);c.$d[_](h),c.init(),this.$d=c.set(l,Math.min(this.$D,c.daysInMonth())).$d}else _&&this.$d[_](h);return this.init(),this},h.set=function(e,t){return this.clone().$set(e,t)},h.get=function(e){return this[b.p(e)]()},h.add=function(e,o){var l,d=this;e=Number(e);var u=b.p(o),m=function(t){var a=M(d);return b.w(a.date(a.date()+Math.round(t*e)),d)};if(u===i)return this.set(i,this.$M+e);if(u===s)return this.set(s,this.$y+e);if("day"===u)return m(1);if(u===n)return m(7);var _=((l={})[a]=6e4,l[r]=36e5,l[t]=1e3,l)[u]||1,h=this.$d.getTime()+e*_;return b.w(h,this)},h.subtract=function(e,t){return this.add(-1*e,t)},h.format=function(e){var t=this,a=this.$locale();if(!this.isValid())return a.invalidDate||d;var r=e||"YYYY-MM-DDTHH:mm:ssZ",n=b.z(this),i=this.$H,o=this.$m,s=this.$M,l=a.weekdays,u=a.months,_=a.meridiem,h=function(e,a,n,i){return e&&(e[a]||e(t,r))||n[a].slice(0,i)},c=function(e){return b.s(i%12||12,e,"0")},f=_||function(e,t,a){var r=e<12?"AM":"PM";return a?r.toLowerCase():r};return r.replace(m,function(e,r){return r||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return b.s(t.$y,4,"0");case"M":return s+1;case"MM":return b.s(s+1,2,"0");case"MMM":return h(a.monthsShort,s,u,3);case"MMMM":return h(u,s);case"D":return t.$D;case"DD":return b.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return h(a.weekdaysMin,t.$W,l,2);case"ddd":return h(a.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(i);case"HH":return b.s(i,2,"0");case"h":return c(1);case"hh":return c(2);case"a":return f(i,o,!0);case"A":return f(i,o,!1);case"m":return String(o);case"mm":return b.s(o,2,"0");case"s":return String(t.$s);case"ss":return b.s(t.$s,2,"0");case"SSS":return b.s(t.$ms,3,"0");case"Z":return n}return null}(e)||n.replace(":","")})},h.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},h.diff=function(e,l,d){var u,m=this,_=b.p(l),h=M(e),c=(h.utcOffset()-this.utcOffset())*6e4,f=this-h,g=function(){return b.m(m,h)};switch(_){case s:u=g()/12;break;case i:u=g();break;case o:u=g()/3;break;case n:u=(f-c)/6048e5;break;case"day":u=(f-c)/864e5;break;case r:u=f/36e5;break;case a:u=f/6e4;break;case t:u=f/1e3;break;default:u=f}return d?u:b.a(u)},h.daysInMonth=function(){return this.endOf(i).$D},h.$locale=function(){return c[this.$L]},h.locale=function(e,t){if(!e)return this.$L;var a=this.clone(),r=p(e,t,!0);return r&&(a.$L=r),a},h.clone=function(){return b.w(this.$d,this)},h.toDate=function(){return new Date(this.valueOf())},h.toJSON=function(){return this.isValid()?this.toISOString():null},h.toISOString=function(){return this.$d.toISOString()},h.toString=function(){return this.$d.toUTCString()},_}(),Y=y.prototype;return M.prototype=Y,[["$ms",e],["$s",t],["$m",a],["$H",r],["$W","day"],["$M",i],["$y",s],["$D",l]].forEach(function(e){Y[e[1]]=function(t){return this.$g(t,e[0],e[1])}}),M.extend=function(e,t){return e.$i||(e(t,y,M),e.$i=!0),M},M.locale=p,M.isDayjs=g,M.unix=function(e){return M(1e3*e)},M.en=c[h],M.Ls=c,M.p={},M}()},448036,(e,t,a)=>{e.e,t.exports=function(e,t,a){e=e||{};var r=t.prototype,n={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function i(e,t,a,n){return r.fromToBase(e,t,a,n)}a.en.relativeTime=n,r.fromToBase=function(t,r,i,o,s){for(var l,d,u,m=i.$locale().relativeTime||n,_=e.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],h=_.length,c=0;c<h;c+=1){var f=_[c];f.d&&(l=o?a(t).diff(i,f.d,!0):i.diff(t,f.d,!0));var g=(e.rounding||Math.round)(Math.abs(l));if(u=l>0,g<=f.r||!f.r){g<=1&&c>0&&(f=_[c-1]);var p=m[f.l];s&&(g=s(""+g)),d="string"==typeof p?p.replace("%d",g):p(g,r,f.l,u);break}}if(r)return d;var M=u?m.future:m.past;return"function"==typeof M?M(d):M.replace("%s",d)},r.to=function(e,t){return i(e,t,this,!0)},r.from=function(e,t){return i(e,t,this)};var o=function(e){return e.$u?a.utc():a()};r.toNow=function(e){return this.to(o(this),e)},r.fromNow=function(e){return this.from(o(this),e)}}},653462,(e,t,a)=>{e.e,t.exports={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],a=e%100;return"["+e+(t[(a-20)%10]||t[a]||t[0])+"]"}}},128518,(e,t,a)=>{e.e,t.exports=function(e){"use strict";var t={name:"zh",weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(e,t){return"W"===t?e+"周":e+"日"},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日Ah点mm分",LLLL:"YYYY年M月D日ddddAh点mm分",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},relativeTime:{future:"%s后",past:"%s前",s:"几秒",m:"1 分钟",mm:"%d 分钟",h:"1 小时",hh:"%d 小时",d:"1 天",dd:"%d 天",M:"1 个月",MM:"%d 个月",y:"1 年",yy:"%d 年"},meridiem:function(e,t){var a=100*e+t;return a<600?"凌晨":a<900?"早上":a<1100?"上午":a<1300?"中午":a<1800?"下午":"晚上"}};return(e&&"object"==typeof e&&"default"in e?e:{default:e}).default.locale(t,null,!0),t}(e.r(586295))},311115,(e,t,a)=>{e.e,t.exports=function(e){"use strict";var t={s:"ein paar Sekunden",m:["eine Minute","einer Minute"],mm:"%d Minuten",h:["eine Stunde","einer Stunde"],hh:"%d Stunden",d:["ein Tag","einem Tag"],dd:["%d Tage","%d Tagen"],M:["ein Monat","einem Monat"],MM:["%d Monate","%d Monaten"],y:["ein Jahr","einem Jahr"],yy:["%d Jahre","%d Jahren"]};function a(e,a,r){var n=t[r];return Array.isArray(n)&&(n=n[+!a]),n.replace("%d",e)}var r={name:"de",weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),months:"Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.".split("_"),ordinal:function(e){return e+"."},weekStart:1,yearStart:4,formats:{LTS:"HH:mm:ss",LT:"HH:mm",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},relativeTime:{future:"in %s",past:"vor %s",s:a,m:a,mm:a,h:a,hh:a,d:a,dd:a,M:a,MM:a,y:a,yy:a}};return(e&&"object"==typeof e&&"default"in e?e:{default:e}).default.locale(r,null,!0),r}(e.r(586295))},226542,(e,t,a)=>{e.e,t.exports=function(e){"use strict";var t={name:"ja",weekdays:"日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),weekdaysShort:"日_月_火_水_木_金_土".split("_"),weekdaysMin:"日_月_火_水_木_金_土".split("_"),months:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(e){return e+"日"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日 HH:mm",LLLL:"YYYY年M月D日 dddd HH:mm",l:"YYYY/MM/DD",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日(ddd) HH:mm"},meridiem:function(e){return e<12?"午前":"午後"},relativeTime:{future:"%s後",past:"%s前",s:"数秒",m:"1分",mm:"%d分",h:"1時間",hh:"%d時間",d:"1日",dd:"%d日",M:"1ヶ月",MM:"%dヶ月",y:"1年",yy:"%d年"}};return(e&&"object"==typeof e&&"default"in e?e:{default:e}).default.locale(t,null,!0),t}(e.r(586295))},657155,(e,t,a)=>{e.e,t.exports=function(e){"use strict";var t={name:"ko",weekdays:"일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),weekdaysShort:"일_월_화_수_목_금_토".split("_"),weekdaysMin:"일_월_화_수_목_금_토".split("_"),months:"1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),monthsShort:"1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),ordinal:function(e){return e+"일"},formats:{LT:"A h:mm",LTS:"A h:mm:ss",L:"YYYY.MM.DD.",LL:"YYYY년 MMMM D일",LLL:"YYYY년 MMMM D일 A h:mm",LLLL:"YYYY년 MMMM D일 dddd A h:mm",l:"YYYY.MM.DD.",ll:"YYYY년 MMMM D일",lll:"YYYY년 MMMM D일 A h:mm",llll:"YYYY년 MMMM D일 dddd A h:mm"},meridiem:function(e){return e<12?"오전":"오후"},relativeTime:{future:"%s 후",past:"%s 전",s:"몇 초",m:"1분",mm:"%d분",h:"한 시간",hh:"%d시간",d:"하루",dd:"%d일",M:"한 달",MM:"%d달",y:"일 년",yy:"%d년"}};return(e&&"object"==typeof e&&"default"in e?e:{default:e}).default.locale(t,null,!0),t}(e.r(586295))},53964,(e,t,a)=>{e.e,t.exports=function(e){"use strict";var t="января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),a="январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),r="янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),n="янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_"),i=/D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;function o(e,t,a){var r,n;return"m"===a?t?"минута":"минуту":e+" "+(r=+e,n=({mm:t?"минута_минуты_минут":"минуту_минуты_минут",hh:"час_часа_часов",dd:"день_дня_дней",MM:"месяц_месяца_месяцев",yy:"год_года_лет"})[a].split("_"),r%10==1&&r%100!=11?n[0]:r%10>=2&&r%10<=4&&(r%100<10||r%100>=20)?n[1]:n[2])}var s=function(e,r){return i.test(r)?t[e.month()]:a[e.month()]};s.s=a,s.f=t;var l=function(e,t){return i.test(t)?r[e.month()]:n[e.month()]};l.s=n,l.f=r;var d={name:"ru",weekdays:"воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),weekdaysShort:"вск_пнд_втр_срд_чтв_птн_сбт".split("_"),weekdaysMin:"вс_пн_вт_ср_чт_пт_сб".split("_"),months:s,monthsShort:l,weekStart:1,yearStart:4,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY г.",LLL:"D MMMM YYYY г., H:mm",LLLL:"dddd, D MMMM YYYY г., H:mm"},relativeTime:{future:"через %s",past:"%s назад",s:"несколько секунд",m:o,mm:o,h:"час",hh:o,d:"день",dd:o,M:"месяц",MM:o,y:"год",yy:o},ordinal:function(e){return e},meridiem:function(e){return e<4?"ночи":e<12?"утра":e<17?"дня":"вечера"}};return(e&&"object"==typeof e&&"default"in e?e:{default:e}).default.locale(d,null,!0),d}(e.r(586295))},779043,(e,t,a)=>{e.e,t.exports=function(e){"use strict";var t={name:"fr",weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin:"di_lu_ma_me_je_ve_sa".split("_"),months:"janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),monthsShort:"janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},ordinal:function(e){return""+e+(1===e?"er":"")}};return(e&&"object"==typeof e&&"default"in e?e:{default:e}).default.locale(t,null,!0),t}(e.r(586295))},531561,(e,t,a)=>{e.e,t.exports=function(e){"use strict";var t={name:"el",weekdays:"Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),weekdaysShort:"Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),weekdaysMin:"Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),months:"Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"),monthsShort:"Ιαν_Φεβ_Μαρ_Απρ_Μαι_Ιουν_Ιουλ_Αυγ_Σεπτ_Οκτ_Νοε_Δεκ".split("_"),ordinal:function(e){return e},weekStart:1,relativeTime:{future:"σε %s",past:"πριν %s",s:"μερικά δευτερόλεπτα",m:"ένα λεπτό",mm:"%d λεπτά",h:"μία ώρα",hh:"%d ώρες",d:"μία μέρα",dd:"%d μέρες",M:"ένα μήνα",MM:"%d μήνες",y:"ένα χρόνο",yy:"%d χρόνια"},formats:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"}};return(e&&"object"==typeof e&&"default"in e?e:{default:e}).default.locale(t,null,!0),t}(e.r(586295))},140428,(e,t,a)=>{e.e,t.exports=function(e){"use strict";var t={name:"es",monthsShort:"ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),weekStart:1,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},ordinal:function(e){return e+"º"}};return(e&&"object"==typeof e&&"default"in e?e:{default:e}).default.locale(t,null,!0),t}(e.r(586295))},58353,(e,t,a)=>{e.e,t.exports=function(e){"use strict";var t={name:"it",weekdays:"domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"),weekdaysShort:"dom_lun_mar_mer_gio_ven_sab".split("_"),weekdaysMin:"do_lu_ma_me_gi_ve_sa".split("_"),months:"gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),weekStart:1,monthsShort:"gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},relativeTime:{future:"tra %s",past:"%s fa",s:"qualche secondo",m:"un minuto",mm:"%d minuti",h:"un' ora",hh:"%d ore",d:"un giorno",dd:"%d giorni",M:"un mese",MM:"%d mesi",y:"un anno",yy:"%d anni"},ordinal:function(e){return e+"º"}};return(e&&"object"==typeof e&&"default"in e?e:{default:e}).default.locale(t,null,!0),t}(e.r(586295))},793218,(e,t,a)=>{e.e,t.exports=function(e){"use strict";var t={name:"pt",weekdays:"domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split("_"),weekdaysShort:"dom_seg_ter_qua_qui_sex_sab".split("_"),weekdaysMin:"Do_2ª_3ª_4ª_5ª_6ª_Sa".split("_"),months:"janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),monthsShort:"jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),ordinal:function(e){return e+"º"},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY [às] HH:mm",LLLL:"dddd, D [de] MMMM [de] YYYY [às] HH:mm"},relativeTime:{future:"em %s",past:"há %s",s:"alguns segundos",m:"um minuto",mm:"%d minutos",h:"uma hora",hh:"%d horas",d:"um dia",dd:"%d dias",M:"um mês",MM:"%d meses",y:"um ano",yy:"%d anos"}};return(e&&"object"==typeof e&&"default"in e?e:{default:e}).default.locale(t,null,!0),t}(e.r(586295))},212156,(e,t,a)=>{e.e,t.exports=function(e){"use strict";var t={name:"pt-br",weekdays:"domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split("_"),weekdaysShort:"dom_seg_ter_qua_qui_sex_sáb".split("_"),weekdaysMin:"Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),months:"janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),monthsShort:"jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),ordinal:function(e){return e+"º"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY [às] HH:mm",LLLL:"dddd, D [de] MMMM [de] YYYY [às] HH:mm"},relativeTime:{future:"em %s",past:"há %s",s:"poucos segundos",m:"um minuto",mm:"%d minutos",h:"uma hora",hh:"%d horas",d:"um dia",dd:"%d dias",M:"um mês",MM:"%d meses",y:"um ano",yy:"%d anos"}};return(e&&"object"==typeof e&&"default"in e?e:{default:e}).default.locale(t,null,!0),t}(e.r(586295))},22336,(e,t,a)=>{e.e,t.exports=function(e){"use strict";var t="يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),a={1:"١",2:"٢",3:"٣",4:"٤",5:"٥",6:"٦",7:"٧",8:"٨",9:"٩",0:"٠"},r={"١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","٠":"0"},n={name:"ar",weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),months:t,monthsShort:t,weekStart:6,meridiem:function(e){return e>12?"م":"ص"},relativeTime:{future:"بعد %s",past:"منذ %s",s:"ثانية واحدة",m:"دقيقة واحدة",mm:"%d دقائق",h:"ساعة واحدة",hh:"%d ساعات",d:"يوم واحد",dd:"%d أيام",M:"شهر واحد",MM:"%d أشهر",y:"عام واحد",yy:"%d أعوام"},preparse:function(e){return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g,function(e){return r[e]}).replace(/،/g,",")},postformat:function(e){return e.replace(/\d/g,function(e){return a[e]}).replace(/,/g,"،")},ordinal:function(e){return e},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"D/‏M/‏YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"}};return(e&&"object"==typeof e&&"default"in e?e:{default:e}).default.locale(n,null,!0),n}(e.r(586295))},232500,(e,t,a)=>{e.e,t.exports=function(e){"use strict";var t={name:"id",weekdays:"Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),months:"Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),weekdaysShort:"Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),monthsShort:"Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des".split("_"),weekdaysMin:"Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),weekStart:1,formats:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},relativeTime:{future:"dalam %s",past:"%s yang lalu",s:"beberapa detik",m:"semenit",mm:"%d menit",h:"sejam",hh:"%d jam",d:"sehari",dd:"%d hari",M:"sebulan",MM:"%d bulan",y:"setahun",yy:"%d tahun"},ordinal:function(e){return e+"."}};return(e&&"object"==typeof e&&"default"in e?e:{default:e}).default.locale(t,null,!0),t}(e.r(586295))},791140,(e,t,a)=>{e.e,t.exports=function(e){"use strict";var t={name:"hi",weekdays:"रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),months:"जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"),weekdaysShort:"रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),monthsShort:"जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"),weekdaysMin:"र_सो_मं_बु_गु_शु_श".split("_"),ordinal:function(e){return e},formats:{LT:"A h:mm बजे",LTS:"A h:mm:ss बजे",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm बजे",LLLL:"dddd, D MMMM YYYY, A h:mm बजे"},relativeTime:{future:"%s में",past:"%s पहले",s:"कुछ ही क्षण",m:"एक मिनट",mm:"%d मिनट",h:"एक घंटा",hh:"%d घंटे",d:"एक दिन",dd:"%d दिन",M:"एक महीने",MM:"%d महीने",y:"एक वर्ष",yy:"%d वर्ष"}};return(e&&"object"==typeof e&&"default"in e?e:{default:e}).default.locale(t,null,!0),t}(e.r(586295))},864496,(e,t,a)=>{e.e,t.exports=function(e){"use strict";var t={name:"th",weekdays:"อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),weekdaysShort:"อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),weekdaysMin:"อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),months:"มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),monthsShort:"ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split("_"),formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY เวลา H:mm",LLLL:"วันddddที่ D MMMM YYYY เวลา H:mm"},relativeTime:{future:"อีก %s",past:"%sที่แล้ว",s:"ไม่กี่วินาที",m:"1 นาที",mm:"%d นาที",h:"1 ชั่วโมง",hh:"%d ชั่วโมง",d:"1 วัน",dd:"%d วัน",M:"1 เดือน",MM:"%d เดือน",y:"1 ปี",yy:"%d ปี"},ordinal:function(e){return e+"."}};return(e&&"object"==typeof e&&"default"in e?e:{default:e}).default.locale(t,null,!0),t}(e.r(586295))},405993,(e,t,a)=>{e.e,t.exports=function(e){"use strict";var t={name:"tr",weekdays:"Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),weekdaysShort:"Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"),weekdaysMin:"Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),months:"Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),monthsShort:"Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),weekStart:1,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},relativeTime:{future:"%s sonra",past:"%s önce",s:"birkaç saniye",m:"bir dakika",mm:"%d dakika",h:"bir saat",hh:"%d saat",d:"bir gün",dd:"%d gün",M:"bir ay",MM:"%d ay",y:"bir yıl",yy:"%d yıl"},ordinal:function(e){return e+"."}};return(e&&"object"==typeof e&&"default"in e?e:{default:e}).default.locale(t,null,!0),t}(e.r(586295))},156889,(e,t,a)=>{e.e,t.exports=function(e){"use strict";var t={name:"vi",weekdays:"chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),months:"tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"),weekStart:1,weekdaysShort:"CN_T2_T3_T4_T5_T6_T7".split("_"),monthsShort:"Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),weekdaysMin:"CN_T2_T3_T4_T5_T6_T7".split("_"),ordinal:function(e){return e},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM [năm] YYYY",LLL:"D MMMM [năm] YYYY HH:mm",LLLL:"dddd, D MMMM [năm] YYYY HH:mm",l:"DD/M/YYYY",ll:"D MMM YYYY",lll:"D MMM YYYY HH:mm",llll:"ddd, D MMM YYYY HH:mm"},relativeTime:{future:"%s tới",past:"%s trước",s:"vài giây",m:"một phút",mm:"%d phút",h:"một giờ",hh:"%d giờ",d:"một ngày",dd:"%d ngày",M:"một tháng",MM:"%d tháng",y:"một năm",yy:"%d năm"}};return(e&&"object"==typeof e&&"default"in e?e:{default:e}).default.locale(t,null,!0),t}(e.r(586295))},927781,(e,t,a)=>{e.e,t.exports=function(e){"use strict";var t="січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"),a="січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_"),r=/D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;function n(e,t,a){var r,n;return"m"===a?t?"хвилина":"хвилину":"h"===a?t?"година":"годину":e+" "+(r=+e,n=({ss:t?"секунда_секунди_секунд":"секунду_секунди_секунд",mm:t?"хвилина_хвилини_хвилин":"хвилину_хвилини_хвилин",hh:t?"година_години_годин":"годину_години_годин",dd:"день_дні_днів",MM:"місяць_місяці_місяців",yy:"рік_роки_років"})[a].split("_"),r%10==1&&r%100!=11?n[0]:r%10>=2&&r%10<=4&&(r%100<10||r%100>=20)?n[1]:n[2])}var i=function(e,n){return r.test(n)?t[e.month()]:a[e.month()]};i.s=a,i.f=t;var o={name:"uk",weekdays:"неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),weekdaysShort:"ндл_пнд_втр_срд_чтв_птн_сбт".split("_"),weekdaysMin:"нд_пн_вт_ср_чт_пт_сб".split("_"),months:i,monthsShort:"січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),weekStart:1,relativeTime:{future:"за %s",past:"%s тому",s:"декілька секунд",m:n,mm:n,h:n,hh:n,d:"день",dd:n,M:"місяць",MM:n,y:"рік",yy:n},ordinal:function(e){return e},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY р.",LLL:"D MMMM YYYY р., HH:mm",LLLL:"dddd, D MMMM YYYY р., HH:mm"}};return(e&&"object"==typeof e&&"default"in e?e:{default:e}).default.locale(o,null,!0),o}(e.r(586295))},152157,(e,t,a)=>{e.e,t.exports=function(e){"use strict";function t(e){return e%10<5&&e%10>1&&~~(e/10)%10!=1}function a(e,a,r){var n=e+" ";switch(r){case"m":return a?"minuta":"minutę";case"mm":return n+(t(e)?"minuty":"minut");case"h":return a?"godzina":"godzinę";case"hh":return n+(t(e)?"godziny":"godzin");case"MM":return n+(t(e)?"miesiące":"miesięcy");case"yy":return n+(t(e)?"lata":"lat")}}var r="stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"),n="styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),i=/D MMMM/,o=function(e,t){return i.test(t)?r[e.month()]:n[e.month()]};o.s=n,o.f=r;var s={name:"pl",weekdays:"niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),weekdaysShort:"ndz_pon_wt_śr_czw_pt_sob".split("_"),weekdaysMin:"Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),months:o,monthsShort:"sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),ordinal:function(e){return e+"."},weekStart:1,yearStart:4,relativeTime:{future:"za %s",past:"%s temu",s:"kilka sekund",m:a,mm:a,h:a,hh:a,d:"1 dzień",dd:"%d dni",M:"miesiąc",MM:a,y:"rok",yy:a},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"}};return(e&&"object"==typeof e&&"default"in e?e:{default:e}).default.locale(s,null,!0),s}(e.r(586295))},384306,(e,t,a)=>{e.e,t.exports=function(e){"use strict";function t(e,t,a,r){var n=r&&!t?{s:"muutaman sekunnin",m:"minuutin",mm:"%d minuutin",h:"tunnin",hh:"%d tunnin",d:"päivän",dd:"%d päivän",M:"kuukauden",MM:"%d kuukauden",y:"vuoden",yy:"%d vuoden",numbers:"nollan_yhden_kahden_kolmen_neljän_viiden_kuuden_seitsemän_kahdeksan_yhdeksän".split("_")}:{s:"muutama sekunti",m:"minuutti",mm:"%d minuuttia",h:"tunti",hh:"%d tuntia",d:"päivä",dd:"%d päivää",M:"kuukausi",MM:"%d kuukautta",y:"vuosi",yy:"%d vuotta",numbers:"nolla_yksi_kaksi_kolme_neljä_viisi_kuusi_seitsemän_kahdeksan_yhdeksän".split("_")},i=n[a];return e<10?i.replace("%d",n.numbers[e]):i.replace("%d",e)}var a={name:"fi",weekdays:"sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),weekdaysShort:"su_ma_ti_ke_to_pe_la".split("_"),weekdaysMin:"su_ma_ti_ke_to_pe_la".split("_"),months:"tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),monthsShort:"tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),ordinal:function(e){return e+"."},weekStart:1,yearStart:4,relativeTime:{future:"%s päästä",past:"%s sitten",s:t,m:t,mm:t,h:t,hh:t,d:t,dd:t,M:t,MM:t,y:t,yy:t},formats:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD.MM.YYYY",LL:"D. MMMM[ta] YYYY",LLL:"D. MMMM[ta] YYYY, [klo] HH.mm",LLLL:"dddd, D. MMMM[ta] YYYY, [klo] HH.mm",l:"D.M.YYYY",ll:"D. MMM YYYY",lll:"D. MMM YYYY, [klo] HH.mm",llll:"ddd, D. MMM YYYY, [klo] HH.mm"}};return(e&&"object"==typeof e&&"default"in e?e:{default:e}).default.locale(a,null,!0),a}(e.r(586295))},534830,(e,t,a)=>{e.e,t.exports=function(e){"use strict";var t={name:"nl",weekdays:"zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),weekdaysShort:"zo._ma._di._wo._do._vr._za.".split("_"),weekdaysMin:"zo_ma_di_wo_do_vr_za".split("_"),months:"januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),monthsShort:"jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),ordinal:function(e){return"["+e+(1===e||8===e||e>=20?"ste":"de")+"]"},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},relativeTime:{future:"over %s",past:"%s geleden",s:"een paar seconden",m:"een minuut",mm:"%d minuten",h:"een uur",hh:"%d uur",d:"een dag",dd:"%d dagen",M:"een maand",MM:"%d maanden",y:"een jaar",yy:"%d jaar"}};return(e&&"object"==typeof e&&"default"in e?e:{default:e}).default.locale(t,null,!0),t}(e.r(586295))},334688,(e,t,a)=>{e.e,t.exports=function(e){"use strict";var t={name:"ro",weekdays:"Duminică_Luni_Marți_Miercuri_Joi_Vineri_Sâmbătă".split("_"),weekdaysShort:"Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),weekdaysMin:"Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),months:"Ianuarie_Februarie_Martie_Aprilie_Mai_Iunie_Iulie_August_Septembrie_Octombrie_Noiembrie_Decembrie".split("_"),monthsShort:"Ian._Febr._Mart._Apr._Mai_Iun._Iul._Aug._Sept._Oct._Nov._Dec.".split("_"),weekStart:1,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd, D MMMM YYYY H:mm"},relativeTime:{future:"peste %s",past:"acum %s",s:"câteva secunde",m:"un minut",mm:"%d minute",h:"o oră",hh:"%d ore",d:"o zi",dd:"%d zile",M:"o lună",MM:"%d luni",y:"un an",yy:"%d ani"},ordinal:function(e){return e}};return(e&&"object"==typeof e&&"default"in e?e:{default:e}).default.locale(t,null,!0),t}(e.r(586295))},458127,(e,t,a)=>{e.e,t.exports=function(e){"use strict";var t={name:"zh-tw",weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"週日_週一_週二_週三_週四_週五_週六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(e,t){return"W"===t?e+"週":e+"日"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日 HH:mm",LLLL:"YYYY年M月D日dddd HH:mm",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},relativeTime:{future:"%s內",past:"%s前",s:"幾秒",m:"1 分鐘",mm:"%d 分鐘",h:"1 小時",hh:"%d 小時",d:"1 天",dd:"%d 天",M:"1 個月",MM:"%d 個月",y:"1 年",yy:"%d 年"},meridiem:function(e,t){var a=100*e+t;return a<600?"凌晨":a<900?"早上":a<1100?"上午":a<1300?"中午":a<1800?"下午":"晚上"}};return(e&&"object"==typeof e&&"default"in e?e:{default:e}).default.locale(t,null,!0),t}(e.r(586295))},389113,(e,t,a)=>{e.e,t.exports=function(e){"use strict";var t={name:"zh-cn",weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(e,t){return"W"===t?e+"周":e+"日"},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日Ah点mm分",LLLL:"YYYY年M月D日ddddAh点mm分",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},relativeTime:{future:"%s内",past:"%s前",s:"几秒",m:"1 分钟",mm:"%d 分钟",h:"1 小时",hh:"%d 小时",d:"1 天",dd:"%d 天",M:"1 个月",MM:"%d 个月",y:"1 年",yy:"%d 年"},meridiem:function(e,t){var a=100*e+t;return a<600?"凌晨":a<900?"早上":a<1100?"上午":a<1300?"中午":a<1800?"下午":"晚上"}};return(e&&"object"==typeof e&&"default"in e?e:{default:e}).default.locale(t,null,!0),t}(e.r(586295))},424439,911446,e=>{"use strict";var t=e.i(875785),a=e.i(128818),r=e.i(586295),n=e.i(448036);e.i(653462),e.i(128518),e.i(311115),e.i(226542),e.i(657155),e.i(53964),e.i(779043),e.i(531561),e.i(140428),e.i(58353),e.i(793218),e.i(212156),e.i(22336),e.i(232500),e.i(791140),e.i(864496),e.i(405993),e.i(156889),e.i(927781),e.i(152157),e.i(384306),e.i(534830),e.i(334688),e.i(458127),e.i(389113);let i=e=>{r.default.locale(e),r.default.extend(n.default)};e.s(["initDayjs",0,i],911446);let o=(0,a.create)(e=>({settings:{},settingsDialogBookKey:"",isSettingsDialogOpen:!1,isSettingsGlobal:!0,fontPanelView:"main-fonts",setSettings:t=>e({settings:t}),saveSettings:async(e,t)=>{let a=await e.getAppService();await a.saveSettings(t)},setSettingsDialogBookKey:t=>e({settingsDialogBookKey:t}),setSettingsDialogOpen:t=>e({isSettingsDialogOpen:t}),setSettingsGlobal:t=>e({isSettingsGlobal:t}),setFontPanelView:t=>e({fontPanelView:t}),applyUILanguage:e=>{let a=e||navigator.language;t.default.changeLanguage(a),i(a)}}));e.s(["useSettingsStore",0,o],424439)}]);