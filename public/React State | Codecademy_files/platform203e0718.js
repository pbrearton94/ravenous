/*! For license information please see platform~203e0718.afe86c4e5995c33ce03d.chunk.js.LICENSE.txt */
(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[591],{aHqM:function(e,t,n){"use strict";n.d(t,"a",(function(){return fromEvent}));var r=n("mrSG"),o=new Map([["avi","video/avi"],["gif","image/gif"],["ico","image/x-icon"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["mkv","video/x-matroska"],["mov","video/quicktime"],["mp4","video/mp4"],["pdf","application/pdf"],["png","image/png"],["zip","application/zip"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]]);function toFileWithPath(e,t){var n=function withMimeType(e){var t=e.name;if(t&&-1!==t.lastIndexOf(".")&&!e.type){var n=t.split(".").pop().toLowerCase(),r=o.get(n);r&&Object.defineProperty(e,"type",{value:r,writable:!1,configurable:!1,enumerable:!0})}return e}(e);if("string"!=typeof n.path){var r=e.webkitRelativePath;Object.defineProperty(n,"path",{value:"string"==typeof t?t:"string"==typeof r&&r.length>0?r:e.name,writable:!1,configurable:!1,enumerable:!0})}return n}var i=[".DS_Store","Thumbs.db"];function fromEvent(e){return Object(r.b)(this,void 0,void 0,(function(){return Object(r.d)(this,(function(t){return[2,isDragEvt(e)&&e.dataTransfer?getDataTransferFiles(e.dataTransfer,e.type):getInputFiles(e)]}))}))}function isDragEvt(e){return!!e.dataTransfer}function getInputFiles(e){return(function isInput(e){return null!==e}(e.target)&&e.target.files?fromList(e.target.files):[]).map((function(e){return toFileWithPath(e)}))}function getDataTransferFiles(e,t){return Object(r.b)(this,void 0,void 0,(function(){var n;return Object(r.d)(this,(function(r){switch(r.label){case 0:return e.items?(n=fromList(e.items).filter((function(e){return"file"===e.kind})),"drop"!==t?[2,n]:[4,Promise.all(n.map(toFilePromises))]):[3,2];case 1:return[2,noIgnoredFiles(flatten(r.sent()))];case 2:return[2,noIgnoredFiles(fromList(e.files).map((function(e){return toFileWithPath(e)})))]}}))}))}function noIgnoredFiles(e){return e.filter((function(e){return-1===i.indexOf(e.name)}))}function fromList(e){for(var t=[],n=0;n<e.length;n++){var r=e[n];t.push(r)}return t}function toFilePromises(e){if("function"!=typeof e.webkitGetAsEntry)return fromDataTransferItem(e);var t=e.webkitGetAsEntry();return t&&t.isDirectory?fromDirEntry(t):fromDataTransferItem(e)}function flatten(e){return e.reduce((function(e,t){return Object(r.g)(e,Array.isArray(t)?flatten(t):[t])}),[])}function fromDataTransferItem(e){var t=e.getAsFile();if(!t)return Promise.reject(e+" is not a File");var n=toFileWithPath(t);return Promise.resolve(n)}function fromEntry(e){return Object(r.b)(this,void 0,void 0,(function(){return Object(r.d)(this,(function(t){return[2,e.isDirectory?fromDirEntry(e):fromFileEntry(e)]}))}))}function fromDirEntry(e){var t=e.createReader();return new Promise((function(e,n){var o=[];!function readEntries(){var i=this;t.readEntries((function(t){return Object(r.b)(i,void 0,void 0,(function(){var i,a,s;return Object(r.d)(this,(function(r){switch(r.label){case 0:if(t.length)return[3,5];r.label=1;case 1:return r.trys.push([1,3,,4]),[4,Promise.all(o)];case 2:return i=r.sent(),e(i),[3,4];case 3:return a=r.sent(),n(a),[3,4];case 4:return[3,6];case 5:s=Promise.all(t.map(fromEntry)),o.push(s),readEntries(),r.label=6;case 6:return[2]}}))}))}),(function(e){n(e)}))}()}))}function fromFileEntry(e){return Object(r.b)(this,void 0,void 0,(function(){return Object(r.d)(this,(function(t){return[2,new Promise((function(t,n){e.file((function(n){var r=toFileWithPath(n,e.fullPath);t(r)}),(function(e){n(e)}))}))]}))}))}},m2rO:function(e,t,n){"use strict";var r="undefined"!=typeof navigator&&navigator.userAgent.toLowerCase().indexOf("firefox")>0;function addEvent(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent&&e.attachEvent("on".concat(t),(function(){n(window.event)}))}function getMods(e,t){for(var n=t.slice(0,t.length-1),r=0;r<n.length;r++)n[r]=e[n[r].toLowerCase()];return n}function getKeys(e){"string"!=typeof e&&(e="");for(var t=(e=e.replace(/\s/g,"")).split(","),n=t.lastIndexOf("");n>=0;)t[n-1]+=",",t.splice(n,1),n=t.lastIndexOf("");return t}for(var o={backspace:8,tab:9,clear:12,enter:13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,"⇪":20,",":188,".":190,"/":191,"`":192,"-":r?173:189,"=":r?61:187,";":r?59:186,"'":222,"[":219,"]":221,"\\":220},i={"⇧":16,shift:16,"⌥":18,alt:18,option:18,"⌃":17,ctrl:17,control:17,"⌘":91,cmd:91,command:91},a={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},s={16:!1,18:!1,17:!1,91:!1},c={},f=1;f<20;f++)o["f".concat(f)]=111+f;var u=[],l="all",p=[],d=function code(e){return o[e.toLowerCase()]||i[e.toLowerCase()]||e.toUpperCase().charCodeAt(0)};function setScope(e){l=e||"all"}function getScope(){return l||"all"}var y=function eachUnbind(e){var t=e.key,n=e.scope,r=e.method,o=e.splitKey,a=void 0===o?"+":o;getKeys(t).forEach((function(e){var t=e.split(a),o=t.length,s=t[o-1],f="*"===s?"*":d(s);if(c[f]){n||(n=getScope());var u=o>1?getMods(i,t):[];c[f]=c[f].map((function(e){return(!r||e.method===r)&&e.scope===n&&function compareArray(e,t){for(var n=e.length>=t.length?e:t,r=e.length>=t.length?t:e,o=!0,i=0;i<n.length;i++)-1===r.indexOf(n[i])&&(o=!1);return o}(e.mods,u)?{}:e}))}}))};function eventHandler(e,t,n){var r;if(t.scope===n||"all"===t.scope){for(var o in r=t.mods.length>0,s)Object.prototype.hasOwnProperty.call(s,o)&&(!s[o]&&t.mods.indexOf(+o)>-1||s[o]&&-1===t.mods.indexOf(+o))&&(r=!1);(0!==t.mods.length||s[16]||s[18]||s[17]||s[91])&&!r&&"*"!==t.shortcut||!1===t.method(e,t)&&(e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation&&e.stopPropagation(),e.cancelBubble&&(e.cancelBubble=!0))}}function dispatch(e){var t=c["*"],n=e.keyCode||e.which||e.charCode;if(hotkeys.filter.call(this,e)){if(93!==n&&224!==n||(n=91),-1===u.indexOf(n)&&229!==n&&u.push(n),["ctrlKey","altKey","shiftKey","metaKey"].forEach((function(t){var n=a[t];e[t]&&-1===u.indexOf(n)?u.push(n):!e[t]&&u.indexOf(n)>-1?u.splice(u.indexOf(n),1):"metaKey"===t&&e[t]&&3===u.length&&(e.ctrlKey||e.shiftKey||e.altKey||(u=u.slice(u.indexOf(n))))})),n in s){for(var r in s[n]=!0,i)i[r]===n&&(hotkeys[r]=!0);if(!t)return}for(var o in s)Object.prototype.hasOwnProperty.call(s,o)&&(s[o]=e[a[o]]);e.getModifierState&&(!e.altKey||e.ctrlKey)&&e.getModifierState("AltGraph")&&(-1===u.indexOf(17)&&u.push(17),-1===u.indexOf(18)&&u.push(18),s[17]=!0,s[18]=!0);var f=getScope();if(t)for(var l=0;l<t.length;l++)t[l].scope===f&&("keydown"===e.type&&t[l].keydown||"keyup"===e.type&&t[l].keyup)&&eventHandler(e,t[l],f);if(n in c)for(var p=0;p<c[n].length;p++)if(("keydown"===e.type&&c[n][p].keydown||"keyup"===e.type&&c[n][p].keyup)&&c[n][p].key){for(var y=c[n][p],h=y.splitKey,v=y.key.split(h),g=[],m=0;m<v.length;m++)g.push(d(v[m]));g.sort().join("")===u.sort().join("")&&eventHandler(e,y,f)}}}function hotkeys(e,t,n){u=[];var r=getKeys(e),o=[],a="all",f=document,l=0,y=!1,h=!0,v="+";for(void 0===n&&"function"==typeof t&&(n=t),"[object Object]"===Object.prototype.toString.call(t)&&(t.scope&&(a=t.scope),t.element&&(f=t.element),t.keyup&&(y=t.keyup),void 0!==t.keydown&&(h=t.keydown),"string"==typeof t.splitKey&&(v=t.splitKey)),"string"==typeof t&&(a=t);l<r.length;l++)o=[],(e=r[l].split(v)).length>1&&(o=getMods(i,e)),(e="*"===(e=e[e.length-1])?"*":d(e))in c||(c[e]=[]),c[e].push({keyup:y,keydown:h,scope:a,mods:o,shortcut:r[l],method:n,key:r[l],splitKey:v});void 0!==f&&!function isElementBind(e){return p.indexOf(e)>-1}(f)&&window&&(p.push(f),addEvent(f,"keydown",(function(e){dispatch(e)})),addEvent(window,"focus",(function(){u=[]})),addEvent(f,"keyup",(function(e){dispatch(e),function clearModifier(e){var t=e.keyCode||e.which||e.charCode,n=u.indexOf(t);if(n>=0&&u.splice(n,1),e.key&&"meta"===e.key.toLowerCase()&&u.splice(0,u.length),93!==t&&224!==t||(t=91),t in s)for(var r in s[t]=!1,i)i[r]===t&&(hotkeys[r]=!1)}(e)})))}var h={setScope:setScope,getScope:getScope,deleteScope:function deleteScope(e,t){var n,r;for(var o in e||(e=getScope()),c)if(Object.prototype.hasOwnProperty.call(c,o))for(n=c[o],r=0;r<n.length;)n[r].scope===e?n.splice(r,1):r++;getScope()===e&&setScope(t||"all")},getPressedKeyCodes:function getPressedKeyCodes(){return u.slice(0)},isPressed:function isPressed(e){return"string"==typeof e&&(e=d(e)),-1!==u.indexOf(e)},filter:function filter(e){var t=e.target||e.srcElement,n=t.tagName,r=!0;return!t.isContentEditable&&("INPUT"!==n&&"TEXTAREA"!==n&&"SELECT"!==n||t.readOnly)||(r=!1),r},unbind:function unbind(e){if(e){if(Array.isArray(e))e.forEach((function(e){e.key&&y(e)}));else if("object"==typeof e)e.key&&y(e);else if("string"==typeof e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=n[0],i=n[1];"function"==typeof o&&(i=o,o=""),y({key:e,scope:o,method:i,splitKey:"+"})}}else Object.keys(c).forEach((function(e){return delete c[e]}))}};for(var v in h)Object.prototype.hasOwnProperty.call(h,v)&&(hotkeys[v]=h[v]);if("undefined"!=typeof window){var g=window.hotkeys;hotkeys.noConflict=function(e){return e&&window.hotkeys===hotkeys&&(window.hotkeys=g),hotkeys},window.hotkeys=hotkeys}t.a=hotkeys}}]);
//# sourceMappingURL=platform~203e0718.afe86c4e5995c33ce03d.chunk.js.map