(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[265],{Fwbx:function(e,n,t){"use strict";let r;t.d(n,"a",(function(){return r})),function(e){e.dark="dark",e.highContrast="hc-black"}(r||(r={}))},N0NO:function(e,n,t){"use strict";t.d(n,"a",(function(){return LanguageServices}));var r=t("rePB");class LanguageServices{constructor(e){Object(r.a)(this,"services",new Map),this.creators=e}async use(e,n){const t=this.creators.get(e);if(!t)return{};const r=this.services.get(e);if(r)return r;const c=(await t()).default(n);return this.services.set(e,c),c}}},NnNw:function(e,n,t){"use strict";t.d(n,"b",(function(){return getLanguageForName})),t.d(n,"a",(function(){return getLanguageForFile}));var r=t("uGWv");const c=new Map([["cpp",r.b],["csharp",r.a],["css",r.c],["go",r.e],["html",r.f],["java",r.g],["javascript",r.h],["js",r.h],["kotlin",r.i],["php",r.j],["python",r.k],["scss",r.o],["swift",r.q],["r",r.l],["razor",r.m],["ruby",r.n],["sql",r.p]]),u=new Map([[".rmd",".r"],[".sqlite",".sql"]]),getLanguageForExtension=(e,n)=>{var t;return null===(t=e.languages.getLanguages().find((e=>{var t;return null===(t=e.extensions)||void 0===t?void 0:t.includes(n.toLowerCase())})))||void 0===t?void 0:t.id},getLanguageForName=(e,n)=>{var t;const u=n.toLowerCase(),a=e.languages.getLanguages().find((e=>e.id===u))?u:getLanguageForExtension(e,`.${n.toLowerCase()}`);return a?null!==(t=c.get(a))&&void 0!==t?t:a:r.d},getLanguageForFile=(e,n)=>{var t;if(null!=n&&n.match(/\.min\./))return r.d;const a=(e=>{var n;const t=null==e?void 0:e.substring(e.lastIndexOf(".")).toLowerCase();return null!==(n=u.get(t))&&void 0!==n?n:t})(n);if(!a)return r.d;const o=getLanguageForExtension(e,a);return o?null!==(t=c.get(o))&&void 0!==t?t:o:r.d}},qUKc:function(e,n,t){"use strict";t.r(n);var r=t("wsa1"),c=t("q1tI"),u=t.n(c),a=t("Uga2"),o=t("hHSK"),d=t("NnNw");n.default=({children:e,filename:n,language:t})=>{let s;s=n?Object(d.a)(r,n):t?Object(d.b)(r,t):"plaintext";const i=Object(c.useRef)(null);return Object(c.useEffect)((()=>{e&&i.current&&Object(a.a)(i,s,e).then((e=>{i.current&&(i.current.innerHTML=e)}))}),[i,e,s]),u.a.createElement("pre",null,u.a.createElement("code",null,u.a.createElement(o.a,{"data-lang":s,ref:i},e)))}},uGWv:function(e,n,t){"use strict";t.d(n,"c",(function(){return r})),t.d(n,"d",(function(){return c})),t.d(n,"e",(function(){return u})),t.d(n,"f",(function(){return a})),t.d(n,"g",(function(){return o})),t.d(n,"h",(function(){return d})),t.d(n,"j",(function(){return s})),t.d(n,"k",(function(){return i})),t.d(n,"l",(function(){return l})),t.d(n,"n",(function(){return f})),t.d(n,"o",(function(){return g})),t.d(n,"p",(function(){return m})),t.d(n,"q",(function(){return v})),t.d(n,"a",(function(){return h})),t.d(n,"b",(function(){return p})),t.d(n,"i",(function(){return y})),t.d(n,"m",(function(){return w}));const r="codecademy-css",c="plaintext",u="codecademy-go",a="codecademy-html",o="codecademy-java",d="codecademy-js",s="codecademy-php",i="codecademy-python",l="codecademy-r",f="codecademy-ruby",g="codecademy-scss",m="codecademy-sql",v="codecademy-swift",h="codecademy-cs",p="codecademy-cpp",y="codecademy-kotlin",w="codecademy-razor"}}]);
//# sourceMappingURL=components-CodeBlock-Base~1c049ac7.c909b68cf81926af8622.chunk.js.map