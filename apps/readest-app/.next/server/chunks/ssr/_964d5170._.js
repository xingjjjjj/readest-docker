module.exports=[968366,a=>{"use strict";var b=a.i(649970);let c=a=>{let b,c=new Set,d=(a,d)=>{let e="function"==typeof a?a(b):a;if(!Object.is(e,b)){let a=b;b=(null!=d?d:"object"!=typeof e||null===e)?e:Object.assign({},b,e),c.forEach(c=>c(b,a))}},e=()=>b,f={setState:d,getState:e,getInitialState:()=>g,subscribe:a=>(c.add(a),()=>c.delete(a))},g=b=a(d,e,f);return f},d=a=>{let d=a?c(a):c,e=a=>(function(a,c=a=>a){let d=b.default.useSyncExternalStore(a.subscribe,()=>c(a.getState()),()=>c(a.getInitialState()));return b.default.useDebugValue(d),d})(d,a);return Object.assign(e,d),e},e=a=>a?d(a):d;a.s(["create",()=>e],968366)},407027,574872,667954,224499,a=>{"use strict";var b,c,d,e=a.i(968366),f=a.i(657123);function g(a){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a})(a)}var h=/^\s+/,i=/\s+$/;function j(a,b){if(b=b||{},(a=a||"")instanceof j)return a;if(!(this instanceof j))return new j(a,b);var c,d,e,f,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,B=(d={r:0,g:0,b:0},e=1,f=null,k=null,l=null,m=!1,n=!1,"string"==typeof(c=a)&&(c=function(a){a=a.replace(h,"").replace(i,"").toLowerCase();var b,c=!1;if(A[a])a=A[a],c=!0;else if("transparent"==a)return{r:0,g:0,b:0,a:0,format:"name"};return(b=J.rgb.exec(a))?{r:b[1],g:b[2],b:b[3]}:(b=J.rgba.exec(a))?{r:b[1],g:b[2],b:b[3],a:b[4]}:(b=J.hsl.exec(a))?{h:b[1],s:b[2],l:b[3]}:(b=J.hsla.exec(a))?{h:b[1],s:b[2],l:b[3],a:b[4]}:(b=J.hsv.exec(a))?{h:b[1],s:b[2],v:b[3]}:(b=J.hsva.exec(a))?{h:b[1],s:b[2],v:b[3],a:b[4]}:(b=J.hex8.exec(a))?{r:F(b[1]),g:F(b[2]),b:F(b[3]),a:F(b[4])/255,format:c?"name":"hex8"}:(b=J.hex6.exec(a))?{r:F(b[1]),g:F(b[2]),b:F(b[3]),format:c?"name":"hex"}:(b=J.hex4.exec(a))?{r:F(b[1]+""+b[1]),g:F(b[2]+""+b[2]),b:F(b[3]+""+b[3]),a:F(b[4]+""+b[4])/255,format:c?"name":"hex8"}:!!(b=J.hex3.exec(a))&&{r:F(b[1]+""+b[1]),g:F(b[2]+""+b[2]),b:F(b[3]+""+b[3]),format:c?"name":"hex"}}(c)),"object"==g(c)&&(K(c.r)&&K(c.g)&&K(c.b)?(o=c.r,p=c.g,q=c.b,d={r:255*D(o,255),g:255*D(p,255),b:255*D(q,255)},m=!0,n="%"===String(c.r).substr(-1)?"prgb":"rgb"):K(c.h)&&K(c.s)&&K(c.v)?(f=H(c.s),k=H(c.v),r=c.h,s=f,t=k,r=6*D(r,360),s=D(s,100),t=D(t,100),u=Math.floor(r),v=r-u,w=t*(1-s),x=t*(1-v*s),y=t*(1-(1-v)*s),d={r:255*[t,x,w,w,y,t][z=u%6],g:255*[y,t,t,x,w,w][z],b:255*[w,w,y,t,t,x][z]},m=!0,n="hsv"):K(c.h)&&K(c.s)&&K(c.l)&&(f=H(c.s),l=H(c.l),d=function(a,b,c){var d,e,f;function g(a,b,c){return(c<0&&(c+=1),c>1&&(c-=1),c<1/6)?a+(b-a)*6*c:c<.5?b:c<2/3?a+(b-a)*(2/3-c)*6:a}if(a=D(a,360),b=D(b,100),c=D(c,100),0===b)d=e=f=c;else{var h=c<.5?c*(1+b):c+b-c*b,i=2*c-h;d=g(i,h,a+1/3),e=g(i,h,a),f=g(i,h,a-1/3)}return{r:255*d,g:255*e,b:255*f}}(c.h,f,l),m=!0,n="hsl"),c.hasOwnProperty("a")&&(e=c.a)),e=C(e),{ok:m,format:c.format||n,r:Math.min(255,Math.max(d.r,0)),g:Math.min(255,Math.max(d.g,0)),b:Math.min(255,Math.max(d.b,0)),a:e});this._originalInput=a,this._r=B.r,this._g=B.g,this._b=B.b,this._a=B.a,this._roundA=Math.round(100*this._a)/100,this._format=b.format||B.format,this._gradientType=b.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=B.ok}function k(a,b,c){a=D(a,255);var d,e,f=Math.max(a,b=D(b,255),c=D(c,255)),g=Math.min(a,b,c),h=(f+g)/2;if(f==g)d=e=0;else{var i=f-g;switch(e=h>.5?i/(2-f-g):i/(f+g),f){case a:d=(b-c)/i+6*(b<c);break;case b:d=(c-a)/i+2;break;case c:d=(a-b)/i+4}d/=6}return{h:d,s:e,l:h}}function l(a,b,c){a=D(a,255);var d,e=Math.max(a,b=D(b,255),c=D(c,255)),f=Math.min(a,b,c),g=e-f;if(e==f)d=0;else{switch(e){case a:d=(b-c)/g+6*(b<c);break;case b:d=(c-a)/g+2;break;case c:d=(a-b)/g+4}d/=6}return{h:d,s:0===e?0:g/e,v:e}}function m(a,b,c,d){var e=[G(Math.round(a).toString(16)),G(Math.round(b).toString(16)),G(Math.round(c).toString(16))];return d&&e[0].charAt(0)==e[0].charAt(1)&&e[1].charAt(0)==e[1].charAt(1)&&e[2].charAt(0)==e[2].charAt(1)?e[0].charAt(0)+e[1].charAt(0)+e[2].charAt(0):e.join("")}function n(a,b,c,d){return[G(I(d)),G(Math.round(a).toString(16)),G(Math.round(b).toString(16)),G(Math.round(c).toString(16))].join("")}function o(a,b){b=0===b?0:b||10;var c=j(a).toHsl();return c.s-=b/100,c.s=E(c.s),j(c)}function p(a,b){b=0===b?0:b||10;var c=j(a).toHsl();return c.s+=b/100,c.s=E(c.s),j(c)}function q(a){return j(a).desaturate(100)}function r(a,b){b=0===b?0:b||10;var c=j(a).toHsl();return c.l+=b/100,c.l=E(c.l),j(c)}function s(a,b){b=0===b?0:b||10;var c=j(a).toRgb();return c.r=Math.max(0,Math.min(255,c.r-Math.round(-(b/100*255)))),c.g=Math.max(0,Math.min(255,c.g-Math.round(-(b/100*255)))),c.b=Math.max(0,Math.min(255,c.b-Math.round(-(b/100*255)))),j(c)}function t(a,b){b=0===b?0:b||10;var c=j(a).toHsl();return c.l-=b/100,c.l=E(c.l),j(c)}function u(a,b){var c=j(a).toHsl(),d=(c.h+b)%360;return c.h=d<0?360+d:d,j(c)}function v(a){var b=j(a).toHsl();return b.h=(b.h+180)%360,j(b)}function w(a,b){if(isNaN(b)||b<=0)throw Error("Argument to polyad must be a positive number");for(var c=j(a).toHsl(),d=[j(a)],e=360/b,f=1;f<b;f++)d.push(j({h:(c.h+f*e)%360,s:c.s,l:c.l}));return d}function x(a){var b=j(a).toHsl(),c=b.h;return[j(a),j({h:(c+72)%360,s:b.s,l:b.l}),j({h:(c+216)%360,s:b.s,l:b.l})]}function y(a,b,c){b=b||6,c=c||30;var d=j(a).toHsl(),e=360/c,f=[j(a)];for(d.h=(d.h-(e*b>>1)+720)%360;--b;)d.h=(d.h+e)%360,f.push(j(d));return f}function z(a,b){b=b||6;for(var c=j(a).toHsv(),d=c.h,e=c.s,f=c.v,g=[],h=1/b;b--;)g.push(j({h:d,s:e,v:f})),f=(f+h)%1;return g}j.prototype={isDark:function(){return 128>this.getBrightness()},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var a=this.toRgb();return(299*a.r+587*a.g+114*a.b)/1e3},getLuminance:function(){var a,b,c,d=this.toRgb();return a=d.r/255,b=d.g/255,.2126*(a<=.03928?a/12.92:Math.pow((a+.055)/1.055,2.4))+.7152*(b<=.03928?b/12.92:Math.pow((b+.055)/1.055,2.4))+.0722*((c=d.b/255)<=.03928?c/12.92:Math.pow((c+.055)/1.055,2.4))},setAlpha:function(a){return this._a=C(a),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var a=l(this._r,this._g,this._b);return{h:360*a.h,s:a.s,v:a.v,a:this._a}},toHsvString:function(){var a=l(this._r,this._g,this._b),b=Math.round(360*a.h),c=Math.round(100*a.s),d=Math.round(100*a.v);return 1==this._a?"hsv("+b+", "+c+"%, "+d+"%)":"hsva("+b+", "+c+"%, "+d+"%, "+this._roundA+")"},toHsl:function(){var a=k(this._r,this._g,this._b);return{h:360*a.h,s:a.s,l:a.l,a:this._a}},toHslString:function(){var a=k(this._r,this._g,this._b),b=Math.round(360*a.h),c=Math.round(100*a.s),d=Math.round(100*a.l);return 1==this._a?"hsl("+b+", "+c+"%, "+d+"%)":"hsla("+b+", "+c+"%, "+d+"%, "+this._roundA+")"},toHex:function(a){return m(this._r,this._g,this._b,a)},toHexString:function(a){return"#"+this.toHex(a)},toHex8:function(a){var b,c,d,e,f,g;return b=this._r,c=this._g,d=this._b,e=this._a,f=a,g=[G(Math.round(b).toString(16)),G(Math.round(c).toString(16)),G(Math.round(d).toString(16)),G(I(e))],f&&g[0].charAt(0)==g[0].charAt(1)&&g[1].charAt(0)==g[1].charAt(1)&&g[2].charAt(0)==g[2].charAt(1)&&g[3].charAt(0)==g[3].charAt(1)?g[0].charAt(0)+g[1].charAt(0)+g[2].charAt(0)+g[3].charAt(0):g.join("")},toHex8String:function(a){return"#"+this.toHex8(a)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return 1==this._a?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*D(this._r,255))+"%",g:Math.round(100*D(this._g,255))+"%",b:Math.round(100*D(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return 1==this._a?"rgb("+Math.round(100*D(this._r,255))+"%, "+Math.round(100*D(this._g,255))+"%, "+Math.round(100*D(this._b,255))+"%)":"rgba("+Math.round(100*D(this._r,255))+"%, "+Math.round(100*D(this._g,255))+"%, "+Math.round(100*D(this._b,255))+"%, "+this._roundA+")"},toName:function(){return 0===this._a?"transparent":!(this._a<1)&&(B[m(this._r,this._g,this._b,!0)]||!1)},toFilter:function(a){var b="#"+n(this._r,this._g,this._b,this._a),c=b,d=this._gradientType?"GradientType = 1, ":"";if(a){var e=j(a);c="#"+n(e._r,e._g,e._b,e._a)}return"progid:DXImageTransform.Microsoft.gradient("+d+"startColorstr="+b+",endColorstr="+c+")"},toString:function(a){var b=!!a;a=a||this._format;var c=!1,d=this._a<1&&this._a>=0;return!b&&d&&("hex"===a||"hex6"===a||"hex3"===a||"hex4"===a||"hex8"===a||"name"===a)?"name"===a&&0===this._a?this.toName():this.toRgbString():("rgb"===a&&(c=this.toRgbString()),"prgb"===a&&(c=this.toPercentageRgbString()),("hex"===a||"hex6"===a)&&(c=this.toHexString()),"hex3"===a&&(c=this.toHexString(!0)),"hex4"===a&&(c=this.toHex8String(!0)),"hex8"===a&&(c=this.toHex8String()),"name"===a&&(c=this.toName()),"hsl"===a&&(c=this.toHslString()),"hsv"===a&&(c=this.toHsvString()),c||this.toHexString())},clone:function(){return j(this.toString())},_applyModification:function(a,b){var c=a.apply(null,[this].concat([].slice.call(b)));return this._r=c._r,this._g=c._g,this._b=c._b,this.setAlpha(c._a),this},lighten:function(){return this._applyModification(r,arguments)},brighten:function(){return this._applyModification(s,arguments)},darken:function(){return this._applyModification(t,arguments)},desaturate:function(){return this._applyModification(o,arguments)},saturate:function(){return this._applyModification(p,arguments)},greyscale:function(){return this._applyModification(q,arguments)},spin:function(){return this._applyModification(u,arguments)},_applyCombination:function(a,b){return a.apply(null,[this].concat([].slice.call(b)))},analogous:function(){return this._applyCombination(y,arguments)},complement:function(){return this._applyCombination(v,arguments)},monochromatic:function(){return this._applyCombination(z,arguments)},splitcomplement:function(){return this._applyCombination(x,arguments)},triad:function(){return this._applyCombination(w,[3])},tetrad:function(){return this._applyCombination(w,[4])}},j.fromRatio=function(a,b){if("object"==g(a)){var c={};for(var d in a)a.hasOwnProperty(d)&&("a"===d?c[d]=a[d]:c[d]=H(a[d]));a=c}return j(a,b)},j.equals=function(a,b){return!!a&&!!b&&j(a).toRgbString()==j(b).toRgbString()},j.random=function(){return j.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},j.mix=function(a,b,c){c=0===c?0:c||50;var d=j(a).toRgb(),e=j(b).toRgb(),f=c/100;return j({r:(e.r-d.r)*f+d.r,g:(e.g-d.g)*f+d.g,b:(e.b-d.b)*f+d.b,a:(e.a-d.a)*f+d.a})},j.readability=function(a,b){var c=j(a),d=j(b);return(Math.max(c.getLuminance(),d.getLuminance())+.05)/(Math.min(c.getLuminance(),d.getLuminance())+.05)},j.isReadable=function(a,b,c){var d,e,f,g,h,i=j.readability(a,b);switch(h=!1,(e=((d=(d=c)||{level:"AA",size:"small"}).level||"AA").toUpperCase(),f=(d.size||"small").toLowerCase(),"AA"!==e&&"AAA"!==e&&(e="AA"),"small"!==f&&"large"!==f&&(f="small"),g={level:e,size:f}).level+g.size){case"AAsmall":case"AAAlarge":h=i>=4.5;break;case"AAlarge":h=i>=3;break;case"AAAsmall":h=i>=7}return h},j.mostReadable=function(a,b,c){var d,e,f,g,h=null,i=0;e=(c=c||{}).includeFallbackColors,f=c.level,g=c.size;for(var k=0;k<b.length;k++)(d=j.readability(a,b[k]))>i&&(i=d,h=j(b[k]));return j.isReadable(a,h,{level:f,size:g})||!e?h:(c.includeFallbackColors=!1,j.mostReadable(a,["#fff","#000"],c))};var A=j.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},B=j.hexNames=function(a){var b={};for(var c in a)a.hasOwnProperty(c)&&(b[a[c]]=c);return b}(A);function C(a){return(isNaN(a=parseFloat(a))||a<0||a>1)&&(a=1),a}function D(a,b){"string"==typeof(c=a)&&-1!=c.indexOf(".")&&1===parseFloat(c)&&(a="100%");var c,d,e="string"==typeof(d=a)&&-1!=d.indexOf("%");return(a=Math.min(b,Math.max(0,parseFloat(a))),e&&(a=parseInt(a*b,10)/100),1e-6>Math.abs(a-b))?1:a%b/parseFloat(b)}function E(a){return Math.min(1,Math.max(0,a))}function F(a){return parseInt(a,16)}function G(a){return 1==a.length?"0"+a:""+a}function H(a){return a<=1&&(a=100*a+"%"),a}function I(a){return Math.round(255*parseFloat(a)).toString(16)}var J=(c="[\\s|\\(]+("+(b="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+b+")[,|\\s]+("+b+")\\s*\\)?",d="[\\s|\\(]+("+b+")[,|\\s]+("+b+")[,|\\s]+("+b+")[,|\\s]+("+b+")\\s*\\)?",{CSS_UNIT:new RegExp(b),rgb:RegExp("rgb"+c),rgba:RegExp("rgba"+d),hsl:RegExp("hsl"+c),hsla:RegExp("hsla"+d),hsv:RegExp("hsv"+c),hsva:RegExp("hsva"+d),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function K(a){return!!J.CSS_UNIT.exec(a)}a.s(["default",()=>j],574872);var L=a.i(73552);function M(a){return a<=.04045?a/12.92:Math.pow((a+.055)/1.055,2.4)}function N(a){let{r:b,g:c,b:d}=j(a).toRgb(),e=M(b/255),f=M(c/255),g=M(d/255),h=Math.cbrt(.4122214708*e+.5363325363*f+.0514459929*g),i=Math.cbrt(.2119034982*e+.6806995451*f+.1073969566*g),k=Math.cbrt(.0883024619*e+.2817188376*f+.6299787005*g),l=1.9779984951*h-2.428592205*i+.4505937099*k,m=.0259040371*h+.7827717662*i-.808675766*k,n=Math.sqrt(l*l+m*m),o=180/Math.PI*Math.atan2(m,l);o<0&&(o+=360);let p=(100*(.2104542553*h+.793617785*i-.0040720468*k)).toFixed(4),q=Number(n.toFixed(6)),r=Number(o.toFixed(3));return 0===q?`${p}% 0 0deg`:`${p}% ${q} ${r}deg`}let O=a=>j(a).isDark()?"100% 0 0deg":"0% 0 0deg",P=a=>j(a).isDark()?"#FFFFFF":"#000000",Q=({bg:a,fg:b,primary:c})=>({"base-100":a,"base-200":j(a).darken(5).toHexString(),"base-300":j(a).darken(12).toHexString(),"base-content":b,neutral:j(a).darken(15).desaturate(20).toHexString(),"neutral-content":j(b).lighten(20).desaturate(20).toHexString(),primary:c,secondary:j(c).lighten(20).toHexString(),accent:j(c).analogous()[1].toHexString()}),R=({bg:a,fg:b,primary:c})=>({"base-100":a,"base-200":j(a).lighten(5).toHexString(),"base-300":j(a).lighten(12).toHexString(),"base-content":b,neutral:j(a).lighten(15).desaturate(20).toHexString(),"neutral-content":j(b).darken(20).desaturate(20).toHexString(),primary:c,secondary:j(c).darken(20).toHexString(),accent:j(c).triad()[1].toHexString()}),S=[{name:"default",label:(0,L.stubTranslation)("Default"),colors:{light:Q({fg:"#171717",bg:"#ffffff",primary:"#0066cc"}),dark:R({fg:"#e0e0e0",bg:"#222222",primary:"#77bbee"})}},{name:"gray",label:(0,L.stubTranslation)("Gray"),colors:{light:Q({fg:"#222222",bg:"#e0e0e0",primary:"#4488cc"}),dark:R({fg:"#c6c6c6",bg:"#444444",primary:"#88ccee"})}},{name:"sepia",label:(0,L.stubTranslation)("Sepia"),colors:{light:Q({fg:"#5b4636",bg:"#f1e8d0",primary:"#008b8b"}),dark:R({fg:"#ffd595",bg:"#342e25",primary:"#48d1cc"})}},{name:"grass",label:(0,L.stubTranslation)("Grass"),colors:{light:Q({fg:"#232c16",bg:"#d7dbbd",primary:"#177b4d"}),dark:R({fg:"#d8deba",bg:"#333627",primary:"#a6d608"})}},{name:"cherry",label:(0,L.stubTranslation)("Cherry"),colors:{light:Q({fg:"#4e1609",bg:"#f0d1d5",primary:"#de3838"}),dark:R({fg:"#e5c4c8",bg:"#462f32",primary:"#ff646e"})}},{name:"sky",label:(0,L.stubTranslation)("Sky"),colors:{light:Q({fg:"#262d48",bg:"#cedef5",primary:"#2d53e5"}),dark:R({fg:"#babee1",bg:"#282e47",primary:"#ff646e"})}},{name:"solarized",label:(0,L.stubTranslation)("Solarized"),colors:{light:Q({fg:"#586e75",bg:"#fdf6e3",primary:"#268bd2"}),dark:R({fg:"#93a1a1",bg:"#002b36",primary:"#268bd2"})}},{name:"gruvbox",label:(0,L.stubTranslation)("Gruvbox"),colors:{light:Q({fg:"#3c3836",bg:"#fbf1c7",primary:"#076678"}),dark:R({fg:"#ebdbb2",bg:"#282828",primary:"#83a598"})}},{name:"nord",label:(0,L.stubTranslation)("Nord"),colors:{light:Q({fg:"#2e3440",bg:"#eceff4",primary:"#5e81ac"}),dark:R({fg:"#d8dee9",bg:"#2e3440",primary:"#88c0d0"})}},{name:"contrast",label:(0,L.stubTranslation)("Contrast"),colors:{light:Q({fg:"#000000",bg:"#ffffff",primary:"#4488cc"}),dark:R({fg:"#ffffff",bg:"#000000",primary:"#88ccee"})}},{name:"sunset",label:(0,L.stubTranslation)("Sunset"),colors:{light:Q({fg:"#423126",bg:"#fff7f0",primary:"#fe6b64"}),dark:R({fg:"#f6e1d7",bg:"#3c2b25",primary:"#ff9c94"})}}],T=(a,b=!1)=>{let c=`
    --b1: ${N(a["base-100"])};
    --b2: ${N(a["base-200"])};
    --b3: ${N(a["base-300"])};
    --bc: ${N(a["base-content"])};
    
    --p: ${N(a.primary)};
    --pc: ${O(a.primary)};
    
    --s: ${N(a.secondary)};
    --sc: ${O(a.secondary)};
    
    --a: ${N(a.accent)};
    --ac: ${O(a.accent)};
    
    --n: ${N(a.neutral)};
    --nc: ${N(a["neutral-content"])};
    
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
    --fallback-pc: ${P(a.primary)};

    --fallback-s: ${a.secondary};
    --fallback-sc: ${P(a.secondary)};

    --fallback-a: ${a.accent};
    --fallback-ac: ${P(a.accent)};

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
  `;return c+(b?d:"")};a.s(["applyCustomTheme",0,(a,b,c=!1)=>{if(!a&&!b)return;let d=a?`${a.name}-light`:`${b}-light`,e=a?`${a.name}-dark`:`${b}-dark`,f=a?Q(a.colors.light):(S.find(a=>a.name===b)||S[0]).colors.light,g=a?R(a.colors.dark):(S.find(a=>a.name===b)||S[0]).colors.dark,h=`
    [data-theme="${d}"] {
      ${T(f,c)}
    }
    
    [data-theme="${e}"] {
      ${T(g,c)}
    }
    
    :root {
      --${d}: 1;
      --${e}: 1;
    }
  `,i=document.createElement("style");i.id=`theme-${a?a.name:b}-styles`,i.textContent=h;let j=document.getElementById(i.id);return j&&j.remove(),document.head.appendChild(i),{light:d,dark:e}},"generateDarkPalette",0,R,"generateLightPalette",0,Q,"themes",0,S],667954);let U=a=>`
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
`,V=()=>{let a="default",b=S.find(b=>b.name===a);if(!b){let c=[].find(b=>b.name===a);c&&(b={name:c.name,label:c.label,colors:{light:Q(c.colors.light),dark:R(c.colors.dark)}})}b||(b=S[0]);let c=(0,b.colors.light);return{bg:c["base-100"],fg:c["base-content"],primary:c.primary,palette:c,isDarkMode:!1}};a.s(["applyFixedlayoutStyles",0,(a,b,c)=>{c||(c=V());let{bg:d,fg:e,primary:f,isDarkMode:g}=c,h=b.overrideColor,i=b.invertImgColorInDark,j="fixed-layout-styles",k=a.getElementById(j);k&&k.remove(),(k=a.createElement("style")).id=j,k.textContent=`
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
      ${g&&i?"filter: invert(100%);":""}
      ${h?`mix-blend-mode: ${g?"#000000"===d?"luminosity":"overlay":"multiply"};`:""}
    }
    img.singlePage {
      position: relative;
    }
  `,a.head.appendChild(k)},"applyImageStyle",0,a=>{a.querySelectorAll("img").forEach(a=>{let b=a.getAttribute("width");if(b&&(b.endsWith("%")||b.endsWith("vw"))){let c=parseFloat(b);isNaN(c)||(a.style.width=`${c/100*window.innerWidth}px`,a.removeAttribute("width"))}let c=a.getAttribute("height");if(c&&(c.endsWith("%")||c.endsWith("vh"))){let b=parseFloat(c);isNaN(b)||(a.style.height=`${b/100*window.innerHeight}px`,a.removeAttribute("height"))}let d=a.parentNode;if(!d||d.nodeType!==Node.ELEMENT_NODE)return;let e=Array.from(d.childNodes).some(a=>a.nodeType===Node.TEXT_NODE&&a.textContent?.trim()),f=Array.from(d.childNodes).every(a=>a.nodeType!==Node.ELEMENT_NODE||"BR"!==a.tagName);e&&f&&a.classList.add("has-text-siblings")}),a.querySelectorAll("hr").forEach(a=>{let b=window.getComputedStyle(a);b.backgroundImage&&"none"!==b.backgroundImage&&a.classList.add("background-img")})},"applyScrollModeClass",0,(a,b)=>{a.body.classList.remove("scroll-mode","paginated-mode"),a.body.classList.add(b?"scroll-mode":"paginated-mode")},"applyTableStyle",0,a=>{a.querySelectorAll("table").forEach(a=>{let b=a.parentNode;if(!b||b.nodeType!==Node.ELEMENT_NODE)return;let c=0;for(let b of a.querySelectorAll("tr")){let a=b.querySelectorAll("td, th"),d=0;a.forEach(a=>{let b=a.getAttribute("width"),c=a.style.width,e=b||c;if(e){let a=parseFloat(e),b=e.replace(a.toString(),"").trim();"px"!==b&&b?"%"===b&&(d+=window.innerWidth*a/100):d+=a}}),d>c&&(c=d)}if(c>0){let b=`calc(min(1, var(--available-width) / ${c}))`;a.style.transformOrigin="left top",a.style.transform=`scale(${b})`}})},"applyThemeModeClass",0,(a,b)=>{a.body.classList.remove("theme-light","theme-dark"),a.body.classList.add(b?"theme-dark":"theme-light")},"applyTranslationStyle",0,a=>{let b="translation-style",c=document.getElementById(b);c&&c.remove();let d=document.createElement("style");d.id=b,d.textContent=U(a.showTranslateSource),document.head.appendChild(d)},"getFootnoteStyles",0,()=>`
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
`,"getStyles",0,(a,b)=>{var c,d,e,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;let A,B,C,D,E;b||(b=V());let F=(c=a.overrideLayout,d=a.marginTopPx,e=a.marginRightPx,g=a.marginBottomPx,h=a.marginLeftPx,i=a.paragraphMargin,j=a.lineHeight,k=a.wordSpacing,l=a.letterSpacing,m=a.textIndent,n=a.fullJustification,o=a.hyphenation,p=a.writingMode,q=a.vertical,`
  @namespace epub "http://www.idpf.org/2007/ops";
  html {
    --default-text-align: ${n?"justify":"start"};
    --margin-top: ${d}px;
    --margin-right: ${e}px;
    --margin-bottom: ${g}px;
    --margin-left: ${h}px;
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
    ${"auto"===p?"":`writing-mode: ${p} !important;`}
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
    line-height: ${j} ${c?"!important":""};
    word-spacing: ${k}px ${c?"!important":""};
    letter-spacing: ${l}px ${c?"!important":""};
    text-indent: ${m}em ${c?"!important":""};
    -webkit-hyphens: ${o?"auto":"manual"};
    hyphens: ${o?"auto":"manual"};
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
    ${n&&c?"text-align: justify !important;":""}
  }
  p.aligned-right, blockquote.aligned-right,
  dd.aligned-right, div.aligned-right {
    text-align: right ${c?"!important":""};
  }
  p.aligned-justify, blockquote.aligned-justify,
  dd.aligned-justify, div.aligned-justify {
    ${!n&&c?"text-align: initial !important;":""};
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
    ${q?`margin-left: ${i}em ${c?"!important":""};`:""}
    ${q?`margin-right: ${i}em ${c?"!important":""};`:""}
    ${q?`margin-top: unset ${c?"!important":""};`:""}
    ${q?`margin-bottom: unset ${c?"!important":""};`:""}
    ${!q?`margin-top: ${i}em ${c?"!important":""};`:""}
    ${!q?`margin-bottom: ${i}em ${c?"!important":""};`:""}
    ${!q?`margin-left: unset ${c?"!important":""};`:""}
    ${!q?`margin-right: unset ${c?"!important":""};`:""}
  }
  div {
    ${q&&c?`margin-left: ${i}em !important;`:""}
    ${q&&c?`margin-right: ${i}em !important;`:""}
    ${!q&&c?`margin-top: ${i}em !important;`:""}
    ${!q&&c?`margin-bottom: ${i}em !important;`:""}
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
    ${q?"transform: rotate(90deg);":""}
    ${q?"transform-origin: center;":""}
    ${q?"height: 2em;":""}
    ${q?`width: ${j}em;`:""}
    ${q?"vertical-align: unset;":""}
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
    ${q?"width: 1em;":"height: 1em;"}
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
`),G=["ios","android"].includes((0,L.getOSPlatform)()),H=(a.zoomLevel||100)/100,I=(r=a.serifFont,s=a.sansSerifFont,t=a.monospaceFont,u=a.defaultFont,v=a.defaultCJKFont,w=a.defaultFontSize*(G?1.25:1)*H,x=a.minimumFontSize,y=a.fontWeight,z=a.overrideFont,A=["Georgia","Times New Roman"],B=[r,...v!==r?[v]:[],...f.SERIF_FONTS.filter(a=>a!==r&&a!==v&&!A.includes(a)),...f.CJK_SERIF_FONTS.filter(a=>a!==r&&a!==v),...A.filter(a=>f.SERIF_FONTS.includes(a)&&!A.includes(v)),...f.FALLBACK_FONTS],C=[s,...v!==s?[v]:[],...f.SANS_SERIF_FONTS.filter(a=>a!==s&&a!==v),...f.CJK_SANS_SERIF_FONTS.filter(a=>a!==s&&a!==v),...f.FALLBACK_FONTS],D=[t,...f.MONOSPACE_FONTS.filter(a=>a!==t)],E="serif"===u.toLowerCase()?"--serif":"--sans-serif",`
    html {
      --serif: ${B.map(a=>`"${a}"`).join(", ")}, serif;
      --sans-serif: ${C.map(a=>`"${a}"`).join(", ")}, sans-serif;
      --monospace: ${D.map(a=>`"${a}"`).join(", ")}, monospace;
      --font-size: ${w}px;
      --min-font-size: ${x}px;
      --font-weight: ${y};
    }
    html, body {
      font-size: ${w}px !important;
      font-weight: ${y};
      -webkit-text-size-adjust: none;
      text-size-adjust: none;
    }
    /* lower specificity than ebook built-in font styles */
    html {
      font-family: var(${E}) ${z?"!important":""};
    }
    /* higher specificity than ebook built-in font styles */
    html body {
      ${z?`font-family: var(${E}) !important;`:""}
    }
    font[size="1"] {
      font-size: ${x}px;
    }
    font[size="2"] {
      font-size: ${1.5*x}px;
    }
    font[size="3"] {
      font-size: ${w}px;
    }
    font[size="4"] {
      font-size: ${1.2*w}px;
    }
    font[size="5"] {
      font-size: ${1.5*w}px;
    }
    font[size="6"] {
      font-size: ${2*w}px;
    }
    font[size="7"] {
      font-size: ${3*w}px;
    }
    /* hardcoded inline font size */
    [style*="font-size: 16px"], [style*="font-size:16px"] {
      font-size: 1rem !important;
    }
    pre, code, kbd {
      font-family: var(--monospace);
    }
    body *:not(pre, code, kbd, .code):not(pre *, code *, kbd *, .code *) {
      ${z?"font-family: revert !important;":""}
    }
  `),J=((a,b,c,d,e)=>{let{bg:f,fg:g,primary:h,isDarkMode:i}=c;return`
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
  `})(a.overrideColor,a.invertImgColorInDark,b,a.backgroundTextureId,a.isEink),K=U(a.showTranslateSource),M=a.userStylesheet;return`${F}
${I}
${J}
${K}
${M}`},"getThemeCode",0,V,"keepTextAlignment",0,a=>{a.querySelectorAll("div, p, blockquote, dd").forEach(a=>{let b=window.getComputedStyle(a);"center"===b.textAlign?a.classList.add("aligned-center"):"left"===b.textAlign?a.classList.add("aligned-left"):"right"===b.textAlign?a.classList.add("aligned-right"):"justify"===b.textAlign&&a.classList.add("aligned-justify")})},"transformStylesheet",0,(a,b,c,d)=>{let e=["ios","android"].includes((0,L.getOSPlatform)())?1.25:1,f=!a.includes("{"),g=/([^{]+)({[^}]+})/g;return a=(a=a.replace(g,(a,b,c)=>{let d=/text-align\s*:\s*center\s*[;$]/.test(c),e=/text-indent\s*:\s*0(?:\.0+)?(?:px|em|rem|%)?\s*[;$]/.test(c);return d&&e?b+(c=(c=c.replace(/(text-align\s*:\s*center)(\s*;|\s*$)/g,"$1 !important$2")).replace(/(text-indent\s*:\s*0(?:\.0+)?(?:px|em|rem|%)?)(\s*;|\s*$)/g,"$1 !important$2")):a})).replace(g,(a,b,c)=>/white-space\s*:\s*nowrap\s*[;$]/.test(c)?(/overflow\s*:/.test(c)||(c=c.replace(/}$/," overflow: clip !important; }")),b+c):a),f?/page-break-after\s*:\s*always\s*[;]?/.test(a)&&!/margin-bottom\s*:/.test(a)&&(a=a.replace(/;?\s*$/,"")+"; margin-bottom: calc(var(--available-height) * 1px)"):a=a.replace(g,(a,b,c)=>/page-break-after\s*:\s*always\s*[;$]/.test(c)?(/margin-bottom\s*:/.test(c)||(c=c.replace(/}$/," margin-bottom: calc(var(--available-height) * 1px); }")),b+c):a),a=(a=a.replace(g,(a,b,c)=>{if(d)return b+c;let e=[],f=!1;for(let a of["top","bottom","left","right"]){let b=RegExp(`duokan-bleed\\s*:\\s*[^;]*${a}[^;]*;`),d=RegExp(`margin-${a}\\s*:`);b.test(c)&&!d.test(c)&&(f=!0,e.push(a),c=c.replace(/}$/,` margin-${a}: calc(-1 * var(--page-margin-${a})) !important; }`))}return f&&(/position\s*:/.test(c)||(c=c.replace(/}$/," position: relative !important; }")),/overflow\s*:/.test(c)||(c=c.replace(/}$/," overflow: hidden !important; }")),/display\s*:/.test(c)||(c=c.replace(/}$/," display: flow-root !important; }")),!/width\s*:/.test(c)&&e.includes("left")&&e.includes("right")&&(c=c.replace(/}$/," width: calc(var(--_max-width) + var(--page-margin-left) + var(--page-margin-right)) !important; }").replace(/}$/," max-width: 100vw !important; }")),!/height\s*:/.test(c)&&e.includes("top")&&e.includes("bottom")&&(c=c.replace(/}$/," height: calc(100% + var(--page-margin-top) + var(--page-margin-bottom)) !important; }").replace(/}$/," max-height: 100vh !important; }"))),b+c})).replace(/font-size\s*:\s*xx-small/gi,"font-size: 0.6rem").replace(/font-size\s*:\s*x-small/gi,"font-size: 0.75rem").replace(/font-size\s*:\s*small/gi,"font-size: 0.875rem").replace(/font-size\s*:\s*medium/gi,"font-size: 1rem").replace(/font-size\s*:\s*large/gi,"font-size: 1.2rem").replace(/font-size\s*:\s*x-large/gi,"font-size: 1.5rem").replace(/font-size\s*:\s*xx-large/gi,"font-size: 2rem").replace(/font-size\s*:\s*xxx-large/gi,"font-size: 3rem").replace(/font-size\s*:\s*(\d+(?:\.\d+)?)px/gi,(a,b)=>{let c=parseFloat(b)/e/16;return`font-size: ${c}rem`}).replace(/font-size\s*:\s*(\d+(?:\.\d+)?)pt/gi,(a,b)=>{let c=parseFloat(b)/e/12;return`font-size: ${c}rem`}).replace(/font-size\s*:\s*(\d*\.?\d+)(px|rem|em|%)?/gi,(a,b,c="px")=>`font-size: max(${b}${c}, var(--min-font-size, 8px))`).replace(/(\d*\.?\d+)vw/gi,(a,c)=>parseFloat(c)*b/100+"px").replace(/(\d*\.?\d+)vh/gi,(a,b)=>parseFloat(b)*c/100+"px").replace(/([\s;])font-family\s*:\s*monospace/gi,"$1font-family: var(--monospace)").replace(/([\s;])font-weight\s*:\s*normal/gi,"$1font-weight: var(--font-weight)").replace(/([\s;])color\s*:\s*black/gi,"$1color: var(--theme-fg-color)").replace(/([\s;])color\s*:\s*#000000/gi,"$1color: var(--theme-fg-color)").replace(/([\s;])color\s*:\s*#000/gi,"$1color: var(--theme-fg-color)").replace(/([\s;])color\s*:\s*rgb\(0,\s*0,\s*0\)/gi,"$1color: var(--theme-fg-color)")}],224499),a.i(649661),a.i(936630);var W=a.i(833047);let X=(0,e.create)((a,b)=>({themeMode:"auto",themeColor:"default",systemIsDarkMode:!1,isDarkMode:!1,isEinkMode:!1,themeCode:V(),systemUIVisible:!1,statusBarHeight:24,systemUIAlwaysHidden:!1,safeAreaInsets:{top:0,right:0,bottom:0,left:0},isRoundedWindow:!0,showSystemUI:()=>a({systemUIVisible:!0}),dismissSystemUI:()=>a({systemUIVisible:!1}),setStatusBarHeight:b=>a({statusBarHeight:b}),setSystemUIAlwaysHidden:b=>a({systemUIAlwaysHidden:b}),getIsDarkMode:()=>b().isDarkMode,setIsEinkMode:b=>{a({isEinkMode:b})},setThemeMode:c=>{let d="dark"===c||"auto"===c&&b().systemIsDarkMode;document.documentElement.setAttribute("data-theme",`${b().themeColor}-${d?"dark":"light"}`),a({themeMode:c,isDarkMode:d}),a({themeCode:V()})},setThemeColor:c=>{document.documentElement.setAttribute("data-theme",`${c}-${b().isDarkMode?"dark":"light"}`),a({themeColor:c}),a({themeCode:V()})},updateAppTheme:a=>{if((0,W.isWebAppPlatform)()){let{palette:c}=b().themeCode;document.querySelector('meta[name="theme-color"]')?.setAttribute("content",c[a])}},saveCustomTheme:async(a,b,c,d)=>{let e=b.globalReadSettings.customThemes||[],f=e.findIndex(a=>a.name===c.name);d?f>-1&&e.splice(f,1):f>-1?e[f]=c:e.push(c),b.globalReadSettings.customThemes=e,localStorage.setItem("customThemes",JSON.stringify(e));let g=await a.getAppService();await g.saveSettings(b)},handleSystemThemeChange:c=>{let d=b().themeMode,e="dark"===d||"auto"===d&&c;a({systemIsDarkMode:c,isDarkMode:e})},updateSafeAreaInsets:b=>{a({safeAreaInsets:b})}}));a.s(["initSystemThemeListener",0,a=>{},"loadDataTheme",0,()=>{if("undefined"==typeof localStorage||"undefined"==typeof document)return;let a=localStorage.getItem("themeMode"),b=localStorage.getItem("themeColor");if(a&&b){let c=window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.setAttribute("data-theme",`${b}-${"dark"===a||"auto"===a&&c?"dark":"light"}`)}},"useThemeStore",0,X],407027)},235724,(a,b,c)=>{a.e,b.exports=function(){"use strict";var a="millisecond",b="second",c="minute",d="hour",e="week",f="month",g="quarter",h="year",i="date",j="Invalid Date",k=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,l=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m=function(a,b,c){var d=String(a);return!d||d.length>=b?a:""+Array(b+1-d.length).join(c)+a},n="en",o={};o[n]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(a){var b=["th","st","nd","rd"],c=a%100;return"["+a+(b[(c-20)%10]||b[c]||b[0])+"]"}};var p="$isDayjsObject",q=function(a){return a instanceof u||!(!a||!a[p])},r=function a(b,c,d){var e;if(!b)return n;if("string"==typeof b){var f=b.toLowerCase();o[f]&&(e=f),c&&(o[f]=c,e=f);var g=b.split("-");if(!e&&g.length>1)return a(g[0])}else{var h=b.name;o[h]=b,e=h}return!d&&e&&(n=e),e||!d&&n},s=function(a,b){if(q(a))return a.clone();var c="object"==typeof b?b:{};return c.date=a,c.args=arguments,new u(c)},t={s:m,z:function(a){var b=-a.utcOffset(),c=Math.abs(b);return(b<=0?"+":"-")+m(Math.floor(c/60),2,"0")+":"+m(c%60,2,"0")},m:function a(b,c){if(b.date()<c.date())return-a(c,b);var d=12*(c.year()-b.year())+(c.month()-b.month()),e=b.clone().add(d,f),g=c-e<0,h=b.clone().add(d+(g?-1:1),f);return+(-(d+(c-e)/(g?e-h:h-e))||0)},a:function(a){return a<0?Math.ceil(a)||0:Math.floor(a)},p:function(j){return({M:f,y:h,w:e,d:"day",D:i,h:d,m:c,s:b,ms:a,Q:g})[j]||String(j||"").toLowerCase().replace(/s$/,"")},u:function(a){return void 0===a}};t.l=r,t.i=q,t.w=function(a,b){return s(a,{locale:b.$L,utc:b.$u,x:b.$x,$offset:b.$offset})};var u=function(){function m(a){this.$L=r(a.locale,null,!0),this.parse(a),this.$x=this.$x||a.x||{},this[p]=!0}var n=m.prototype;return n.parse=function(a){this.$d=function(a){var b=a.date,c=a.utc;if(null===b)return new Date(NaN);if(t.u(b))return new Date;if(b instanceof Date)return new Date(b);if("string"==typeof b&&!/Z$/i.test(b)){var d=b.match(k);if(d){var e=d[2]-1||0,f=(d[7]||"0").substring(0,3);return c?new Date(Date.UTC(d[1],e,d[3]||1,d[4]||0,d[5]||0,d[6]||0,f)):new Date(d[1],e,d[3]||1,d[4]||0,d[5]||0,d[6]||0,f)}}return new Date(b)}(a),this.init()},n.init=function(){var a=this.$d;this.$y=a.getFullYear(),this.$M=a.getMonth(),this.$D=a.getDate(),this.$W=a.getDay(),this.$H=a.getHours(),this.$m=a.getMinutes(),this.$s=a.getSeconds(),this.$ms=a.getMilliseconds()},n.$utils=function(){return t},n.isValid=function(){return this.$d.toString()!==j},n.isSame=function(a,b){var c=s(a);return this.startOf(b)<=c&&c<=this.endOf(b)},n.isAfter=function(a,b){return s(a)<this.startOf(b)},n.isBefore=function(a,b){return this.endOf(b)<s(a)},n.$g=function(a,b,c){return t.u(a)?this[b]:this.set(c,a)},n.unix=function(){return Math.floor(this.valueOf()/1e3)},n.valueOf=function(){return this.$d.getTime()},n.startOf=function(a,g){var j=this,k=!!t.u(g)||g,l=t.p(a),m=function(a,b){var c=t.w(j.$u?Date.UTC(j.$y,b,a):new Date(j.$y,b,a),j);return k?c:c.endOf("day")},n=function(a,b){return t.w(j.toDate()[a].apply(j.toDate("s"),(k?[0,0,0,0]:[23,59,59,999]).slice(b)),j)},o=this.$W,p=this.$M,q=this.$D,r="set"+(this.$u?"UTC":"");switch(l){case h:return k?m(1,0):m(31,11);case f:return k?m(1,p):m(0,p+1);case e:var s=this.$locale().weekStart||0,u=(o<s?o+7:o)-s;return m(k?q-u:q+(6-u),p);case"day":case i:return n(r+"Hours",0);case d:return n(r+"Minutes",1);case c:return n(r+"Seconds",2);case b:return n(r+"Milliseconds",3);default:return this.clone()}},n.endOf=function(a){return this.startOf(a,!1)},n.$set=function(e,g){var j,k=t.p(e),l="set"+(this.$u?"UTC":""),m=((j={}).day=l+"Date",j[i]=l+"Date",j[f]=l+"Month",j[h]=l+"FullYear",j[d]=l+"Hours",j[c]=l+"Minutes",j[b]=l+"Seconds",j[a]=l+"Milliseconds",j)[k],n="day"===k?this.$D+(g-this.$W):g;if(k===f||k===h){var o=this.clone().set(i,1);o.$d[m](n),o.init(),this.$d=o.set(i,Math.min(this.$D,o.daysInMonth())).$d}else m&&this.$d[m](n);return this.init(),this},n.set=function(a,b){return this.clone().$set(a,b)},n.get=function(a){return this[t.p(a)]()},n.add=function(a,g){var i,j=this;a=Number(a);var k=t.p(g),l=function(b){var c=s(j);return t.w(c.date(c.date()+Math.round(b*a)),j)};if(k===f)return this.set(f,this.$M+a);if(k===h)return this.set(h,this.$y+a);if("day"===k)return l(1);if(k===e)return l(7);var m=((i={})[c]=6e4,i[d]=36e5,i[b]=1e3,i)[k]||1,n=this.$d.getTime()+a*m;return t.w(n,this)},n.subtract=function(a,b){return this.add(-1*a,b)},n.format=function(a){var b=this,c=this.$locale();if(!this.isValid())return c.invalidDate||j;var d=a||"YYYY-MM-DDTHH:mm:ssZ",e=t.z(this),f=this.$H,g=this.$m,h=this.$M,i=c.weekdays,k=c.months,m=c.meridiem,n=function(a,c,e,f){return a&&(a[c]||a(b,d))||e[c].slice(0,f)},o=function(a){return t.s(f%12||12,a,"0")},p=m||function(a,b,c){var d=a<12?"AM":"PM";return c?d.toLowerCase():d};return d.replace(l,function(a,d){return d||function(a){switch(a){case"YY":return String(b.$y).slice(-2);case"YYYY":return t.s(b.$y,4,"0");case"M":return h+1;case"MM":return t.s(h+1,2,"0");case"MMM":return n(c.monthsShort,h,k,3);case"MMMM":return n(k,h);case"D":return b.$D;case"DD":return t.s(b.$D,2,"0");case"d":return String(b.$W);case"dd":return n(c.weekdaysMin,b.$W,i,2);case"ddd":return n(c.weekdaysShort,b.$W,i,3);case"dddd":return i[b.$W];case"H":return String(f);case"HH":return t.s(f,2,"0");case"h":return o(1);case"hh":return o(2);case"a":return p(f,g,!0);case"A":return p(f,g,!1);case"m":return String(g);case"mm":return t.s(g,2,"0");case"s":return String(b.$s);case"ss":return t.s(b.$s,2,"0");case"SSS":return t.s(b.$ms,3,"0");case"Z":return e}return null}(a)||e.replace(":","")})},n.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},n.diff=function(a,i,j){var k,l=this,m=t.p(i),n=s(a),o=(n.utcOffset()-this.utcOffset())*6e4,p=this-n,q=function(){return t.m(l,n)};switch(m){case h:k=q()/12;break;case f:k=q();break;case g:k=q()/3;break;case e:k=(p-o)/6048e5;break;case"day":k=(p-o)/864e5;break;case d:k=p/36e5;break;case c:k=p/6e4;break;case b:k=p/1e3;break;default:k=p}return j?k:t.a(k)},n.daysInMonth=function(){return this.endOf(f).$D},n.$locale=function(){return o[this.$L]},n.locale=function(a,b){if(!a)return this.$L;var c=this.clone(),d=r(a,b,!0);return d&&(c.$L=d),c},n.clone=function(){return t.w(this.$d,this)},n.toDate=function(){return new Date(this.valueOf())},n.toJSON=function(){return this.isValid()?this.toISOString():null},n.toISOString=function(){return this.$d.toISOString()},n.toString=function(){return this.$d.toUTCString()},m}(),v=u.prototype;return s.prototype=v,[["$ms",a],["$s",b],["$m",c],["$H",d],["$W","day"],["$M",f],["$y",h],["$D",i]].forEach(function(a){v[a[1]]=function(b){return this.$g(b,a[0],a[1])}}),s.extend=function(a,b){return a.$i||(a(b,u,s),a.$i=!0),s},s.locale=r,s.isDayjs=q,s.unix=function(a){return s(1e3*a)},s.en=o[n],s.Ls=o,s.p={},s}()},627861,(a,b,c)=>{a.e,b.exports=function(a,b,c){a=a||{};var d=b.prototype,e={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function f(a,b,c,e){return d.fromToBase(a,b,c,e)}c.en.relativeTime=e,d.fromToBase=function(b,d,f,g,h){for(var i,j,k,l=f.$locale().relativeTime||e,m=a.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],n=m.length,o=0;o<n;o+=1){var p=m[o];p.d&&(i=g?c(b).diff(f,p.d,!0):f.diff(b,p.d,!0));var q=(a.rounding||Math.round)(Math.abs(i));if(k=i>0,q<=p.r||!p.r){q<=1&&o>0&&(p=m[o-1]);var r=l[p.l];h&&(q=h(""+q)),j="string"==typeof r?r.replace("%d",q):r(q,d,p.l,k);break}}if(d)return j;var s=k?l.future:l.past;return"function"==typeof s?s(j):s.replace("%s",j)},d.to=function(a,b){return f(a,b,this,!0)},d.from=function(a,b){return f(a,b,this)};var g=function(a){return a.$u?c.utc():c()};d.toNow=function(a){return this.to(g(this),a)},d.fromNow=function(a){return this.from(g(this),a)}}},833295,(a,b,c)=>{a.e,b.exports={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(a){var b=["th","st","nd","rd"],c=a%100;return"["+a+(b[(c-20)%10]||b[c]||b[0])+"]"}}},42577,(a,b,c)=>{a.e,b.exports=function(a){"use strict";var b={name:"zh",weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(a,b){return"W"===b?a+"周":a+"日"},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日Ah点mm分",LLLL:"YYYY年M月D日ddddAh点mm分",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},relativeTime:{future:"%s后",past:"%s前",s:"几秒",m:"1 分钟",mm:"%d 分钟",h:"1 小时",hh:"%d 小时",d:"1 天",dd:"%d 天",M:"1 个月",MM:"%d 个月",y:"1 年",yy:"%d 年"},meridiem:function(a,b){var c=100*a+b;return c<600?"凌晨":c<900?"早上":c<1100?"上午":c<1300?"中午":c<1800?"下午":"晚上"}};return(a&&"object"==typeof a&&"default"in a?a:{default:a}).default.locale(b,null,!0),b}(a.r(235724))},882076,(a,b,c)=>{a.e,b.exports=function(a){"use strict";var b={s:"ein paar Sekunden",m:["eine Minute","einer Minute"],mm:"%d Minuten",h:["eine Stunde","einer Stunde"],hh:"%d Stunden",d:["ein Tag","einem Tag"],dd:["%d Tage","%d Tagen"],M:["ein Monat","einem Monat"],MM:["%d Monate","%d Monaten"],y:["ein Jahr","einem Jahr"],yy:["%d Jahre","%d Jahren"]};function c(a,c,d){var e=b[d];return Array.isArray(e)&&(e=e[+!c]),e.replace("%d",a)}var d={name:"de",weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),months:"Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.".split("_"),ordinal:function(a){return a+"."},weekStart:1,yearStart:4,formats:{LTS:"HH:mm:ss",LT:"HH:mm",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},relativeTime:{future:"in %s",past:"vor %s",s:c,m:c,mm:c,h:c,hh:c,d:c,dd:c,M:c,MM:c,y:c,yy:c}};return(a&&"object"==typeof a&&"default"in a?a:{default:a}).default.locale(d,null,!0),d}(a.r(235724))},417733,(a,b,c)=>{a.e,b.exports=function(a){"use strict";var b={name:"ja",weekdays:"日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),weekdaysShort:"日_月_火_水_木_金_土".split("_"),weekdaysMin:"日_月_火_水_木_金_土".split("_"),months:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(a){return a+"日"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日 HH:mm",LLLL:"YYYY年M月D日 dddd HH:mm",l:"YYYY/MM/DD",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日(ddd) HH:mm"},meridiem:function(a){return a<12?"午前":"午後"},relativeTime:{future:"%s後",past:"%s前",s:"数秒",m:"1分",mm:"%d分",h:"1時間",hh:"%d時間",d:"1日",dd:"%d日",M:"1ヶ月",MM:"%dヶ月",y:"1年",yy:"%d年"}};return(a&&"object"==typeof a&&"default"in a?a:{default:a}).default.locale(b,null,!0),b}(a.r(235724))},829639,(a,b,c)=>{a.e,b.exports=function(a){"use strict";var b={name:"ko",weekdays:"일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),weekdaysShort:"일_월_화_수_목_금_토".split("_"),weekdaysMin:"일_월_화_수_목_금_토".split("_"),months:"1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),monthsShort:"1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),ordinal:function(a){return a+"일"},formats:{LT:"A h:mm",LTS:"A h:mm:ss",L:"YYYY.MM.DD.",LL:"YYYY년 MMMM D일",LLL:"YYYY년 MMMM D일 A h:mm",LLLL:"YYYY년 MMMM D일 dddd A h:mm",l:"YYYY.MM.DD.",ll:"YYYY년 MMMM D일",lll:"YYYY년 MMMM D일 A h:mm",llll:"YYYY년 MMMM D일 dddd A h:mm"},meridiem:function(a){return a<12?"오전":"오후"},relativeTime:{future:"%s 후",past:"%s 전",s:"몇 초",m:"1분",mm:"%d분",h:"한 시간",hh:"%d시간",d:"하루",dd:"%d일",M:"한 달",MM:"%d달",y:"일 년",yy:"%d년"}};return(a&&"object"==typeof a&&"default"in a?a:{default:a}).default.locale(b,null,!0),b}(a.r(235724))},613877,(a,b,c)=>{a.e,b.exports=function(a){"use strict";var b="января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),c="январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),d="янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),e="янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_"),f=/D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;function g(a,b,c){var d,e;return"m"===c?b?"минута":"минуту":a+" "+(d=+a,e=({mm:b?"минута_минуты_минут":"минуту_минуты_минут",hh:"час_часа_часов",dd:"день_дня_дней",MM:"месяц_месяца_месяцев",yy:"год_года_лет"})[c].split("_"),d%10==1&&d%100!=11?e[0]:d%10>=2&&d%10<=4&&(d%100<10||d%100>=20)?e[1]:e[2])}var h=function(a,d){return f.test(d)?b[a.month()]:c[a.month()]};h.s=c,h.f=b;var i=function(a,b){return f.test(b)?d[a.month()]:e[a.month()]};i.s=e,i.f=d;var j={name:"ru",weekdays:"воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),weekdaysShort:"вск_пнд_втр_срд_чтв_птн_сбт".split("_"),weekdaysMin:"вс_пн_вт_ср_чт_пт_сб".split("_"),months:h,monthsShort:i,weekStart:1,yearStart:4,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY г.",LLL:"D MMMM YYYY г., H:mm",LLLL:"dddd, D MMMM YYYY г., H:mm"},relativeTime:{future:"через %s",past:"%s назад",s:"несколько секунд",m:g,mm:g,h:"час",hh:g,d:"день",dd:g,M:"месяц",MM:g,y:"год",yy:g},ordinal:function(a){return a},meridiem:function(a){return a<4?"ночи":a<12?"утра":a<17?"дня":"вечера"}};return(a&&"object"==typeof a&&"default"in a?a:{default:a}).default.locale(j,null,!0),j}(a.r(235724))},919999,(a,b,c)=>{a.e,b.exports=function(a){"use strict";var b={name:"fr",weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin:"di_lu_ma_me_je_ve_sa".split("_"),months:"janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),monthsShort:"janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},ordinal:function(a){return""+a+(1===a?"er":"")}};return(a&&"object"==typeof a&&"default"in a?a:{default:a}).default.locale(b,null,!0),b}(a.r(235724))},823579,(a,b,c)=>{a.e,b.exports=function(a){"use strict";var b={name:"el",weekdays:"Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),weekdaysShort:"Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),weekdaysMin:"Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),months:"Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"),monthsShort:"Ιαν_Φεβ_Μαρ_Απρ_Μαι_Ιουν_Ιουλ_Αυγ_Σεπτ_Οκτ_Νοε_Δεκ".split("_"),ordinal:function(a){return a},weekStart:1,relativeTime:{future:"σε %s",past:"πριν %s",s:"μερικά δευτερόλεπτα",m:"ένα λεπτό",mm:"%d λεπτά",h:"μία ώρα",hh:"%d ώρες",d:"μία μέρα",dd:"%d μέρες",M:"ένα μήνα",MM:"%d μήνες",y:"ένα χρόνο",yy:"%d χρόνια"},formats:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"}};return(a&&"object"==typeof a&&"default"in a?a:{default:a}).default.locale(b,null,!0),b}(a.r(235724))},269069,(a,b,c)=>{a.e,b.exports=function(a){"use strict";var b={name:"es",monthsShort:"ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),weekStart:1,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},ordinal:function(a){return a+"º"}};return(a&&"object"==typeof a&&"default"in a?a:{default:a}).default.locale(b,null,!0),b}(a.r(235724))},57101,(a,b,c)=>{a.e,b.exports=function(a){"use strict";var b={name:"it",weekdays:"domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"),weekdaysShort:"dom_lun_mar_mer_gio_ven_sab".split("_"),weekdaysMin:"do_lu_ma_me_gi_ve_sa".split("_"),months:"gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),weekStart:1,monthsShort:"gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},relativeTime:{future:"tra %s",past:"%s fa",s:"qualche secondo",m:"un minuto",mm:"%d minuti",h:"un' ora",hh:"%d ore",d:"un giorno",dd:"%d giorni",M:"un mese",MM:"%d mesi",y:"un anno",yy:"%d anni"},ordinal:function(a){return a+"º"}};return(a&&"object"==typeof a&&"default"in a?a:{default:a}).default.locale(b,null,!0),b}(a.r(235724))},230401,(a,b,c)=>{a.e,b.exports=function(a){"use strict";var b={name:"pt",weekdays:"domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split("_"),weekdaysShort:"dom_seg_ter_qua_qui_sex_sab".split("_"),weekdaysMin:"Do_2ª_3ª_4ª_5ª_6ª_Sa".split("_"),months:"janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),monthsShort:"jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),ordinal:function(a){return a+"º"},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY [às] HH:mm",LLLL:"dddd, D [de] MMMM [de] YYYY [às] HH:mm"},relativeTime:{future:"em %s",past:"há %s",s:"alguns segundos",m:"um minuto",mm:"%d minutos",h:"uma hora",hh:"%d horas",d:"um dia",dd:"%d dias",M:"um mês",MM:"%d meses",y:"um ano",yy:"%d anos"}};return(a&&"object"==typeof a&&"default"in a?a:{default:a}).default.locale(b,null,!0),b}(a.r(235724))},698555,(a,b,c)=>{a.e,b.exports=function(a){"use strict";var b={name:"pt-br",weekdays:"domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split("_"),weekdaysShort:"dom_seg_ter_qua_qui_sex_sáb".split("_"),weekdaysMin:"Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),months:"janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),monthsShort:"jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),ordinal:function(a){return a+"º"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY [às] HH:mm",LLLL:"dddd, D [de] MMMM [de] YYYY [às] HH:mm"},relativeTime:{future:"em %s",past:"há %s",s:"poucos segundos",m:"um minuto",mm:"%d minutos",h:"uma hora",hh:"%d horas",d:"um dia",dd:"%d dias",M:"um mês",MM:"%d meses",y:"um ano",yy:"%d anos"}};return(a&&"object"==typeof a&&"default"in a?a:{default:a}).default.locale(b,null,!0),b}(a.r(235724))},960522,(a,b,c)=>{a.e,b.exports=function(a){"use strict";var b="يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),c={1:"١",2:"٢",3:"٣",4:"٤",5:"٥",6:"٦",7:"٧",8:"٨",9:"٩",0:"٠"},d={"١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","٠":"0"},e={name:"ar",weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),months:b,monthsShort:b,weekStart:6,meridiem:function(a){return a>12?"م":"ص"},relativeTime:{future:"بعد %s",past:"منذ %s",s:"ثانية واحدة",m:"دقيقة واحدة",mm:"%d دقائق",h:"ساعة واحدة",hh:"%d ساعات",d:"يوم واحد",dd:"%d أيام",M:"شهر واحد",MM:"%d أشهر",y:"عام واحد",yy:"%d أعوام"},preparse:function(a){return a.replace(/[١٢٣٤٥٦٧٨٩٠]/g,function(a){return d[a]}).replace(/،/g,",")},postformat:function(a){return a.replace(/\d/g,function(a){return c[a]}).replace(/,/g,"،")},ordinal:function(a){return a},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"D/‏M/‏YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"}};return(a&&"object"==typeof a&&"default"in a?a:{default:a}).default.locale(e,null,!0),e}(a.r(235724))},102104,(a,b,c)=>{a.e,b.exports=function(a){"use strict";var b={name:"id",weekdays:"Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),months:"Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),weekdaysShort:"Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),monthsShort:"Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des".split("_"),weekdaysMin:"Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),weekStart:1,formats:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},relativeTime:{future:"dalam %s",past:"%s yang lalu",s:"beberapa detik",m:"semenit",mm:"%d menit",h:"sejam",hh:"%d jam",d:"sehari",dd:"%d hari",M:"sebulan",MM:"%d bulan",y:"setahun",yy:"%d tahun"},ordinal:function(a){return a+"."}};return(a&&"object"==typeof a&&"default"in a?a:{default:a}).default.locale(b,null,!0),b}(a.r(235724))},792335,(a,b,c)=>{a.e,b.exports=function(a){"use strict";var b={name:"hi",weekdays:"रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),months:"जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"),weekdaysShort:"रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),monthsShort:"जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"),weekdaysMin:"र_सो_मं_बु_गु_शु_श".split("_"),ordinal:function(a){return a},formats:{LT:"A h:mm बजे",LTS:"A h:mm:ss बजे",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm बजे",LLLL:"dddd, D MMMM YYYY, A h:mm बजे"},relativeTime:{future:"%s में",past:"%s पहले",s:"कुछ ही क्षण",m:"एक मिनट",mm:"%d मिनट",h:"एक घंटा",hh:"%d घंटे",d:"एक दिन",dd:"%d दिन",M:"एक महीने",MM:"%d महीने",y:"एक वर्ष",yy:"%d वर्ष"}};return(a&&"object"==typeof a&&"default"in a?a:{default:a}).default.locale(b,null,!0),b}(a.r(235724))},686609,(a,b,c)=>{a.e,b.exports=function(a){"use strict";var b={name:"th",weekdays:"อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),weekdaysShort:"อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),weekdaysMin:"อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),months:"มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),monthsShort:"ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split("_"),formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY เวลา H:mm",LLLL:"วันddddที่ D MMMM YYYY เวลา H:mm"},relativeTime:{future:"อีก %s",past:"%sที่แล้ว",s:"ไม่กี่วินาที",m:"1 นาที",mm:"%d นาที",h:"1 ชั่วโมง",hh:"%d ชั่วโมง",d:"1 วัน",dd:"%d วัน",M:"1 เดือน",MM:"%d เดือน",y:"1 ปี",yy:"%d ปี"},ordinal:function(a){return a+"."}};return(a&&"object"==typeof a&&"default"in a?a:{default:a}).default.locale(b,null,!0),b}(a.r(235724))},130790,(a,b,c)=>{a.e,b.exports=function(a){"use strict";var b={name:"tr",weekdays:"Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),weekdaysShort:"Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"),weekdaysMin:"Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),months:"Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),monthsShort:"Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),weekStart:1,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},relativeTime:{future:"%s sonra",past:"%s önce",s:"birkaç saniye",m:"bir dakika",mm:"%d dakika",h:"bir saat",hh:"%d saat",d:"bir gün",dd:"%d gün",M:"bir ay",MM:"%d ay",y:"bir yıl",yy:"%d yıl"},ordinal:function(a){return a+"."}};return(a&&"object"==typeof a&&"default"in a?a:{default:a}).default.locale(b,null,!0),b}(a.r(235724))},525813,(a,b,c)=>{a.e,b.exports=function(a){"use strict";var b={name:"vi",weekdays:"chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),months:"tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"),weekStart:1,weekdaysShort:"CN_T2_T3_T4_T5_T6_T7".split("_"),monthsShort:"Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),weekdaysMin:"CN_T2_T3_T4_T5_T6_T7".split("_"),ordinal:function(a){return a},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM [năm] YYYY",LLL:"D MMMM [năm] YYYY HH:mm",LLLL:"dddd, D MMMM [năm] YYYY HH:mm",l:"DD/M/YYYY",ll:"D MMM YYYY",lll:"D MMM YYYY HH:mm",llll:"ddd, D MMM YYYY HH:mm"},relativeTime:{future:"%s tới",past:"%s trước",s:"vài giây",m:"một phút",mm:"%d phút",h:"một giờ",hh:"%d giờ",d:"một ngày",dd:"%d ngày",M:"một tháng",MM:"%d tháng",y:"một năm",yy:"%d năm"}};return(a&&"object"==typeof a&&"default"in a?a:{default:a}).default.locale(b,null,!0),b}(a.r(235724))},458515,(a,b,c)=>{a.e,b.exports=function(a){"use strict";var b="січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"),c="січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_"),d=/D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;function e(a,b,c){var d,e;return"m"===c?b?"хвилина":"хвилину":"h"===c?b?"година":"годину":a+" "+(d=+a,e=({ss:b?"секунда_секунди_секунд":"секунду_секунди_секунд",mm:b?"хвилина_хвилини_хвилин":"хвилину_хвилини_хвилин",hh:b?"година_години_годин":"годину_години_годин",dd:"день_дні_днів",MM:"місяць_місяці_місяців",yy:"рік_роки_років"})[c].split("_"),d%10==1&&d%100!=11?e[0]:d%10>=2&&d%10<=4&&(d%100<10||d%100>=20)?e[1]:e[2])}var f=function(a,e){return d.test(e)?b[a.month()]:c[a.month()]};f.s=c,f.f=b;var g={name:"uk",weekdays:"неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),weekdaysShort:"ндл_пнд_втр_срд_чтв_птн_сбт".split("_"),weekdaysMin:"нд_пн_вт_ср_чт_пт_сб".split("_"),months:f,monthsShort:"січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),weekStart:1,relativeTime:{future:"за %s",past:"%s тому",s:"декілька секунд",m:e,mm:e,h:e,hh:e,d:"день",dd:e,M:"місяць",MM:e,y:"рік",yy:e},ordinal:function(a){return a},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY р.",LLL:"D MMMM YYYY р., HH:mm",LLLL:"dddd, D MMMM YYYY р., HH:mm"}};return(a&&"object"==typeof a&&"default"in a?a:{default:a}).default.locale(g,null,!0),g}(a.r(235724))},104850,(a,b,c)=>{a.e,b.exports=function(a){"use strict";function b(a){return a%10<5&&a%10>1&&~~(a/10)%10!=1}function c(a,c,d){var e=a+" ";switch(d){case"m":return c?"minuta":"minutę";case"mm":return e+(b(a)?"minuty":"minut");case"h":return c?"godzina":"godzinę";case"hh":return e+(b(a)?"godziny":"godzin");case"MM":return e+(b(a)?"miesiące":"miesięcy");case"yy":return e+(b(a)?"lata":"lat")}}var d="stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"),e="styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),f=/D MMMM/,g=function(a,b){return f.test(b)?d[a.month()]:e[a.month()]};g.s=e,g.f=d;var h={name:"pl",weekdays:"niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),weekdaysShort:"ndz_pon_wt_śr_czw_pt_sob".split("_"),weekdaysMin:"Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),months:g,monthsShort:"sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),ordinal:function(a){return a+"."},weekStart:1,yearStart:4,relativeTime:{future:"za %s",past:"%s temu",s:"kilka sekund",m:c,mm:c,h:c,hh:c,d:"1 dzień",dd:"%d dni",M:"miesiąc",MM:c,y:"rok",yy:c},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"}};return(a&&"object"==typeof a&&"default"in a?a:{default:a}).default.locale(h,null,!0),h}(a.r(235724))},872405,(a,b,c)=>{a.e,b.exports=function(a){"use strict";function b(a,b,c,d){var e=d&&!b?{s:"muutaman sekunnin",m:"minuutin",mm:"%d minuutin",h:"tunnin",hh:"%d tunnin",d:"päivän",dd:"%d päivän",M:"kuukauden",MM:"%d kuukauden",y:"vuoden",yy:"%d vuoden",numbers:"nollan_yhden_kahden_kolmen_neljän_viiden_kuuden_seitsemän_kahdeksan_yhdeksän".split("_")}:{s:"muutama sekunti",m:"minuutti",mm:"%d minuuttia",h:"tunti",hh:"%d tuntia",d:"päivä",dd:"%d päivää",M:"kuukausi",MM:"%d kuukautta",y:"vuosi",yy:"%d vuotta",numbers:"nolla_yksi_kaksi_kolme_neljä_viisi_kuusi_seitsemän_kahdeksan_yhdeksän".split("_")},f=e[c];return a<10?f.replace("%d",e.numbers[a]):f.replace("%d",a)}var c={name:"fi",weekdays:"sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),weekdaysShort:"su_ma_ti_ke_to_pe_la".split("_"),weekdaysMin:"su_ma_ti_ke_to_pe_la".split("_"),months:"tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),monthsShort:"tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),ordinal:function(a){return a+"."},weekStart:1,yearStart:4,relativeTime:{future:"%s päästä",past:"%s sitten",s:b,m:b,mm:b,h:b,hh:b,d:b,dd:b,M:b,MM:b,y:b,yy:b},formats:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD.MM.YYYY",LL:"D. MMMM[ta] YYYY",LLL:"D. MMMM[ta] YYYY, [klo] HH.mm",LLLL:"dddd, D. MMMM[ta] YYYY, [klo] HH.mm",l:"D.M.YYYY",ll:"D. MMM YYYY",lll:"D. MMM YYYY, [klo] HH.mm",llll:"ddd, D. MMM YYYY, [klo] HH.mm"}};return(a&&"object"==typeof a&&"default"in a?a:{default:a}).default.locale(c,null,!0),c}(a.r(235724))},692821,(a,b,c)=>{a.e,b.exports=function(a){"use strict";var b={name:"nl",weekdays:"zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),weekdaysShort:"zo._ma._di._wo._do._vr._za.".split("_"),weekdaysMin:"zo_ma_di_wo_do_vr_za".split("_"),months:"januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),monthsShort:"jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),ordinal:function(a){return"["+a+(1===a||8===a||a>=20?"ste":"de")+"]"},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},relativeTime:{future:"over %s",past:"%s geleden",s:"een paar seconden",m:"een minuut",mm:"%d minuten",h:"een uur",hh:"%d uur",d:"een dag",dd:"%d dagen",M:"een maand",MM:"%d maanden",y:"een jaar",yy:"%d jaar"}};return(a&&"object"==typeof a&&"default"in a?a:{default:a}).default.locale(b,null,!0),b}(a.r(235724))},756957,(a,b,c)=>{a.e,b.exports=function(a){"use strict";var b={name:"ro",weekdays:"Duminică_Luni_Marți_Miercuri_Joi_Vineri_Sâmbătă".split("_"),weekdaysShort:"Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),weekdaysMin:"Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),months:"Ianuarie_Februarie_Martie_Aprilie_Mai_Iunie_Iulie_August_Septembrie_Octombrie_Noiembrie_Decembrie".split("_"),monthsShort:"Ian._Febr._Mart._Apr._Mai_Iun._Iul._Aug._Sept._Oct._Nov._Dec.".split("_"),weekStart:1,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd, D MMMM YYYY H:mm"},relativeTime:{future:"peste %s",past:"acum %s",s:"câteva secunde",m:"un minut",mm:"%d minute",h:"o oră",hh:"%d ore",d:"o zi",dd:"%d zile",M:"o lună",MM:"%d luni",y:"un an",yy:"%d ani"},ordinal:function(a){return a}};return(a&&"object"==typeof a&&"default"in a?a:{default:a}).default.locale(b,null,!0),b}(a.r(235724))},580565,(a,b,c)=>{a.e,b.exports=function(a){"use strict";var b={name:"zh-tw",weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"週日_週一_週二_週三_週四_週五_週六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(a,b){return"W"===b?a+"週":a+"日"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日 HH:mm",LLLL:"YYYY年M月D日dddd HH:mm",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},relativeTime:{future:"%s內",past:"%s前",s:"幾秒",m:"1 分鐘",mm:"%d 分鐘",h:"1 小時",hh:"%d 小時",d:"1 天",dd:"%d 天",M:"1 個月",MM:"%d 個月",y:"1 年",yy:"%d 年"},meridiem:function(a,b){var c=100*a+b;return c<600?"凌晨":c<900?"早上":c<1100?"上午":c<1300?"中午":c<1800?"下午":"晚上"}};return(a&&"object"==typeof a&&"default"in a?a:{default:a}).default.locale(b,null,!0),b}(a.r(235724))},219719,(a,b,c)=>{a.e,b.exports=function(a){"use strict";var b={name:"zh-cn",weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(a,b){return"W"===b?a+"周":a+"日"},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日Ah点mm分",LLLL:"YYYY年M月D日ddddAh点mm分",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},relativeTime:{future:"%s内",past:"%s前",s:"几秒",m:"1 分钟",mm:"%d 分钟",h:"1 小时",hh:"%d 小时",d:"1 天",dd:"%d 天",M:"1 个月",MM:"%d 个月",y:"1 年",yy:"%d 年"},meridiem:function(a,b){var c=100*a+b;return c<600?"凌晨":c<900?"早上":c<1100?"上午":c<1300?"中午":c<1800?"下午":"晚上"}};return(a&&"object"==typeof a&&"default"in a?a:{default:a}).default.locale(b,null,!0),b}(a.r(235724))},947218,199096,a=>{"use strict";var b=a.i(802161),c=a.i(968366),d=a.i(235724),e=a.i(627861);a.i(833295),a.i(42577),a.i(882076),a.i(417733),a.i(829639),a.i(613877),a.i(919999),a.i(823579),a.i(269069),a.i(57101),a.i(230401),a.i(698555),a.i(960522),a.i(102104),a.i(792335),a.i(686609),a.i(130790),a.i(525813),a.i(458515),a.i(104850),a.i(872405),a.i(692821),a.i(756957),a.i(580565),a.i(219719);let f=a=>{d.default.locale(a),d.default.extend(e.default)};a.s(["initDayjs",0,f],199096);let g=(0,c.create)(a=>({settings:{},settingsDialogBookKey:"",isSettingsDialogOpen:!1,isSettingsGlobal:!0,fontPanelView:"main-fonts",setSettings:b=>a({settings:b}),saveSettings:async(a,b)=>{let c=await a.getAppService();await c.saveSettings(b)},setSettingsDialogBookKey:b=>a({settingsDialogBookKey:b}),setSettingsDialogOpen:b=>a({isSettingsDialogOpen:b}),setSettingsGlobal:b=>a({isSettingsGlobal:b}),setFontPanelView:b=>a({fontPanelView:b}),applyUILanguage:a=>{let c=a||navigator.language;b.default.changeLanguage(c),f(c)}}));a.s(["useSettingsStore",0,g],947218)}];

//# sourceMappingURL=_964d5170._.js.map