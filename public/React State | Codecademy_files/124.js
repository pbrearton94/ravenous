(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[124],{J6xm:function(n,t,o){"use strict";o.d(t,"d",(function(){return shuffle})),o.d(t,"a",(function(){return deriveWorkspaceSlug})),o.d(t,"c",(function(){return getDefaultFileNames})),o.d(t,"b",(function(){return getDefaultFileName}));const shuffle=n=>{for(let o=n.length-1;o>0;o-=1){const r=Math.floor(Math.random()*(o+1));var t=[n[r],n[o]];n[o]=t[0],n[r]=t[1]}return n},deriveWorkspaceSlug=n=>`assessment-${n.id}`,getDefaultFileNames=n=>{const t=n.find((n=>"PersistentCodeEditor"===n.type||"ExpoCodeEditor"===n.type));return null==t?void 0:t.files},getDefaultFileName=n=>{const t=getDefaultFileNames(n);return(null==t?void 0:t.length)>0?t[0]:""}}}]);
//# sourceMappingURL=124.c03f7b552f4d1f3d3494.chunk.js.map