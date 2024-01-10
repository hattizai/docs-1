(self.webpackChunk=self.webpackChunk||[]).push([[5154],{95665:function(e,t,n){"use strict";var o=this&&this.__createBinding||(Object.create?function(e,t,n,o){void 0===o&&(o=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,o,r)}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),c=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&o(t,e,n);return r(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.codeReducer=t.parseCustomization=t.parseReference=void 0;const s=c(n(67294)),i=a(n(9286)),l="See full example on GitHub",u={code:"loading...",error:null,loading:null},d={fontSize:".9em",fontWeight:600,color:"#0E75DD",textAlign:"center",paddingBottom:"13px",textDecoration:"underline"};function f(e){const t=e.slice(e.indexOf("https"),-1),[n,o]=t.split("#"),r=globalThis||{};r.URL||(r.URL=URL);const[c,a,s,i,...l]=new r.URL(n).pathname.split("/").slice(1),[u,d]=o?o.split("-").map((e=>parseInt(e.slice(1),10)-1)):[0,1/0];return{url:`https://raw.githubusercontent.com/${c}/${a}/${i}/${l.join("/")}`,fromLine:u,toLine:d,title:l.join("/")}}function m(e){var t,n,o,r;const c=null===(n=null===(t=null==e?void 0:e.match(/title="(?<title>.*?)"/))||void 0===t?void 0:t.groups)||void 0===n?void 0:n.title,a=null==e?void 0:e.match(/referenceLinkText="(?<referenceLinkText>.*?)"/),s=null!==(r=null===(o=null==a?void 0:a.groups)||void 0===o?void 0:o.referenceLinkText)&&void 0!==r?r:l,i=null==e?void 0:e.match(/customStyling/),u=1===(null==i?void 0:i.length);return{title:c,linkText:s,noteStyling:1===(null==i?void 0:i.length)?{}:d,useCustomStyling:u}}function p(e,{type:t,value:n}){switch(t){case"reset":return u;case"loading":return{...e,loading:!0};case"loaded":return{...e,code:n,loading:!1};case"error":return{...e,error:n,loading:!1};default:return e}}t.parseReference=f,t.parseCustomization=m,t.codeReducer=p,t.default=function(e){const[t,n]=(0,s.useReducer)(p,u),o=f(e.children);!1!==t.loading&&async function({url:e,fromLine:t,toLine:n},o){let r;try{r=await fetch(e)}catch(s){return o({type:"error",value:s})}if(200!==r.status)return o({type:"error",value:await r.text()});const c=(await r.text()).split("\n").slice(t,(n||t)+1),a=c.reduce(((e,t)=>{if(0===t.length)return e;const n=t.match(/^\s+/);return n?Math.min(e,n[0].length):0}),1/0);o({type:"loaded",value:c.map((e=>e.slice(a))).join("\n")})}(o,n);const r=m(e.metastring),c={...e,metastring:r.title?` title="${r.title}"`:` title="${o.title}"`,children:u.code};return s.default.createElement("div",null,s.default.createElement(i.default,{...c},t.code),s.default.createElement("div",{style:r.noteStyling,className:r.useCustomStyling?"github-codeblock-reference-link":""},s.default.createElement("a",{href:e.children,target:"_blank"},r.linkText)))}},9286:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>V});var o=n(63366),r=n(67294),c=n(72389),a=n(36905),s=n(92949),i=n(86668);function l(){var e=(0,i.L)().prism,t=(0,s.I)().colorMode,n=e.theme,o=e.darkTheme||n;return"dark"===t?o:n}var u=n(35281),d=n(70804),f=n(87594),m=n.n(f),p=(0,d.Z)(/title=(["'])(.*?)\1/,{quote:1,title:2}),h=(0,d.Z)(/\{([\d,-]+)\}/,{range:1}),g={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"},lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""}};function b(e,t){var n=e.map((function(e){var n=g[e],o=n.start,r=n.end;return"(?:"+o+"\\s*("+t.flatMap((function(e){var t,n;return[e.line,null==(t=e.block)?void 0:t.start,null==(n=e.block)?void 0:n.end].filter(Boolean)})).join("|")+")\\s*"+r+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")}function v(e,t){var n=e.replace(/\n$/,""),o=t.language,r=t.magicComments,c=t.metastring;if(c&&h.test(c)){var a=c.match(h).groups.range;if(0===r.length)throw new Error("A highlight range has been given in code block's metastring (``` "+c+"), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.");var s=r[0].className,i=m()(a).filter((function(e){return e>0})).map((function(e){return[e-1,[s]]}));return{lineClassNames:Object.fromEntries(i),code:n}}if(void 0===o)return{lineClassNames:{},code:n};for(var l=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return b(["js","jsBlock"],t);case"jsx":case"tsx":return b(["js","jsBlock","jsx"],t);case"html":return b(["js","jsBlock","html"],t);case"python":case"py":case"bash":return b(["bash"],t);case"markdown":case"md":return b(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return b(["tex"],t);case"lua":case"haskell":case"sql":return b(["lua"],t);case"wasm":return b(["wasm"],t);default:return b(Object.keys(g).filter((function(e){return!["lua","wasm","tex","latex","matlab"].includes(e)})),t)}}(o,r),u=n.split("\n"),d=Object.fromEntries(r.map((function(e){return[e.className,{start:0,range:""}]}))),f=Object.fromEntries(r.filter((function(e){return e.line})).map((function(e){var t=e.className;return[e.line,t]}))),p=Object.fromEntries(r.filter((function(e){return e.block})).map((function(e){var t=e.className;return[e.block.start,t]}))),v=Object.fromEntries(r.filter((function(e){return e.block})).map((function(e){var t=e.className;return[e.block.end,t]}))),k=0;k<u.length;){var j=u[k].match(l);if(j){var y=j.slice(1).find((function(e){return void 0!==e}));f[y]?d[f[y]].range+=k+",":p[y]?d[p[y]].start=k:v[y]&&(d[v[y]].range+=d[v[y]].start+"-"+(k-1)+","),u.splice(k,1)}else k+=1}n=u.join("\n");var x={};return Object.entries(d).forEach((function(e){var t=e[0],n=e[1].range;m()(n).forEach((function(e){null!=x[e]||(x[e]=[]),x[e].push(t)}))})),{lineClassNames:x,code:n}}const k={codeBlockContainer:"codeBlockContainer_Ckt0"};var j=n(85893),y=["as"];function x(e){var t=e.as,n=(0,o.Z)(e,y),r=function(e){var t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((function(e){var o=e[0],r=e[1],c=t[o];c&&"string"==typeof r&&(n[c]=r)})),n}(l());return(0,j.jsx)(t,Object.assign({},n,{style:r,className:(0,a.Z)(n.className,k.codeBlockContainer,u.k.common.codeBlock)}))}const B={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function w(e){var t=e.children,n=e.className;return(0,j.jsx)(x,{as:"pre",tabIndex:0,className:(0,a.Z)(B.codeBlockStandalone,"thin-scrollbar",n),children:(0,j.jsx)("code",{className:B.codeBlockLines,children:t})})}var C=n(4077),N={attributes:!0,characterData:!0,childList:!0,subtree:!0};function L(e,t){var n=(0,r.useState)(),o=n[0],c=n[1],a=(0,r.useCallback)((function(){var t;c(null==(t=e.current)?void 0:t.closest("[role=tabpanel][hidden]"))}),[e,c]);(0,r.useEffect)((function(){a()}),[a]),function(e,t,n){void 0===n&&(n=N);var o=(0,C.zX)(t),c=(0,C.Ql)(n);(0,r.useEffect)((function(){var t=new MutationObserver(o);return e&&t.observe(e,c),function(){return t.disconnect()}}),[e,o,c])}(o,(function(e){e.forEach((function(e){"attributes"===e.type&&"hidden"===e.attributeName&&(t(),a())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}var E=n(14965);const _={codeLine:"codeLine_lJS_",codeLineNumber:"codeLineNumber_Tfdd",codeLineContent:"codeLineContent_feaV"};function S(e){var t=e.line,n=e.classNames,o=e.showLineNumbers,r=e.getLineProps,c=e.getTokenProps;1===t.length&&"\n"===t[0].content&&(t[0].content="");var s=r({line:t,className:(0,a.Z)(n,o&&_.codeLine)}),i=t.map((function(e,t){return(0,j.jsx)("span",Object.assign({},c({token:e,key:t})),t)}));return(0,j.jsxs)("span",Object.assign({},s,{children:[o?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("span",{className:_.codeLineNumber}),(0,j.jsx)("span",{className:_.codeLineContent,children:i})]}):i,(0,j.jsx)("br",{})]}))}var O=n(95999);function I(e){return(0,j.jsx)("svg",Object.assign({viewBox:"0 0 24 24"},e,{children:(0,j.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})}))}function T(e){return(0,j.jsx)("svg",Object.assign({viewBox:"0 0 24 24"},e,{children:(0,j.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})}))}const A={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function M(e){var t=e.code,n=e.className,o=(0,r.useState)(!1),c=o[0],s=o[1],i=(0,r.useRef)(void 0),l=(0,r.useCallback)((function(){!function(e,t){var n=(void 0===t?{}:t).target,o=void 0===n?document.body:n;if("string"!=typeof e)throw new TypeError("Expected parameter `text` to be a `string`, got `"+typeof e+"`.");var r=document.createElement("textarea"),c=document.activeElement;r.value=e,r.setAttribute("readonly",""),r.style.contain="strict",r.style.position="absolute",r.style.left="-9999px",r.style.fontSize="12pt";var a=document.getSelection(),s=a.rangeCount>0&&a.getRangeAt(0);o.append(r),r.select(),r.selectionStart=0,r.selectionEnd=e.length;var i=!1;try{i=document.execCommand("copy")}catch(l){}r.remove(),s&&(a.removeAllRanges(),a.addRange(s)),c&&c.focus()}(t),s(!0),i.current=window.setTimeout((function(){s(!1)}),1e3)}),[t]);return(0,r.useEffect)((function(){return function(){return window.clearTimeout(i.current)}}),[]),(0,j.jsx)("button",{type:"button","aria-label":c?(0,O.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,O.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,O.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,a.Z)("clean-btn",n,A.copyButton,c&&A.copyButtonCopied),onClick:l,children:(0,j.jsxs)("span",{className:A.copyButtonIcons,"aria-hidden":"true",children:[(0,j.jsx)(I,{className:A.copyButtonIcon}),(0,j.jsx)(T,{className:A.copyButtonSuccessIcon})]})})}function R(e){return(0,j.jsx)("svg",Object.assign({viewBox:"0 0 24 24"},e,{children:(0,j.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})}))}const Z={wordWrapButtonIcon:"wordWrapButtonIcon_Bwma",wordWrapButtonEnabled:"wordWrapButtonEnabled_EoeP"};function P(e){var t=e.className,n=e.onClick,o=e.isEnabled,r=(0,O.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,j.jsx)("button",{type:"button",onClick:n,className:(0,a.Z)("clean-btn",t,o&&Z.wordWrapButtonEnabled),"aria-label":r,title:r,children:(0,j.jsx)(R,{className:Z.wordWrapButtonIcon,"aria-hidden":"true"})})}function W(e){var t,n,o,c,s,u,d,f,m,h,g,b=e.children,k=e.className,y=void 0===k?"":k,w=e.metastring,C=e.title,N=e.showLineNumbers,_=e.language,O=(0,i.L)().prism,I=O.defaultLanguage,T=O.magicComments,A=function(e){return null==e?void 0:e.toLowerCase()}(null!=(t=null!=_?_:null==(n=y.split(" ").find((function(e){return e.startsWith("language-")})))?void 0:n.replace(/language-/,""))?t:I),R=l(),Z=(o=(0,r.useState)(!1),c=o[0],s=o[1],u=(0,r.useState)(!1),d=u[0],f=u[1],m=(0,r.useRef)(null),h=(0,r.useCallback)((function(){var e=m.current.querySelector("code");c?e.removeAttribute("style"):(e.style.whiteSpace="pre-wrap",e.style.overflowWrap="anywhere"),s((function(e){return!e}))}),[m,c]),g=(0,r.useCallback)((function(){var e=m.current,t=e.scrollWidth>e.clientWidth||m.current.querySelector("code").hasAttribute("style");f(t)}),[m]),L(m,g),(0,r.useEffect)((function(){g()}),[c,g]),(0,r.useEffect)((function(){return window.addEventListener("resize",g,{passive:!0}),function(){window.removeEventListener("resize",g)}}),[g]),{codeBlockRef:m,isEnabled:c,isCodeScrollable:d,toggle:h}),W=function(e){var t,n;return null!=(t=null==e||null==(n=e.match(p))?void 0:n.groups.title)?t:""}(w)||C,H=v(b,{metastring:w,language:A,magicComments:T}),V=H.lineClassNames,$=H.code,z=null!=N?N:function(e){return Boolean(null==e?void 0:e.includes("showLineNumbers"))}(w);return(0,j.jsxs)(x,{as:"div",className:(0,a.Z)(y,A&&!y.includes("language-"+A)&&"language-"+A),children:[W&&(0,j.jsx)("div",{className:B.codeBlockTitle,children:W}),(0,j.jsxs)("div",{className:B.codeBlockContent,children:[(0,j.jsx)(E.y$,{theme:R,code:$,language:null!=A?A:"text",children:function(e){var t=e.className,n=e.style,o=e.tokens,r=e.getLineProps,c=e.getTokenProps;return(0,j.jsx)("pre",{tabIndex:0,ref:Z.codeBlockRef,className:(0,a.Z)(t,B.codeBlock,"thin-scrollbar"),style:n,children:(0,j.jsx)("code",{className:(0,a.Z)(B.codeBlockLines,z&&B.codeBlockLinesWithNumbering),children:o.map((function(e,t){return(0,j.jsx)(S,{line:e,getLineProps:r,getTokenProps:c,classNames:V[t],showLineNumbers:z},t)}))})})}}),(0,j.jsxs)("div",{className:B.buttonGroup,children:[(Z.isEnabled||Z.isCodeScrollable)&&(0,j.jsx)(P,{className:B.codeButton,onClick:function(){return Z.toggle()},isEnabled:Z.isEnabled}),(0,j.jsx)(M,{className:B.codeButton,code:$})]})]})]})}var H=["children"];function V(e){var t=e.children,n=(0,o.Z)(e,H),a=(0,c.Z)(),s=function(e){return r.Children.toArray(e).some((function(e){return(0,r.isValidElement)(e)}))?e:Array.isArray(e)?e.join(""):e}(t),i="string"==typeof s?W:w;return(0,j.jsx)(i,Object.assign({},n,{children:s}),String(a))}},87594:(e,t)=>{function n(e){let t,n=[];for(let o of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(o))n.push(parseInt(o,10));else if(t=o.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,o,r,c]=t;if(o&&c){o=parseInt(o),c=parseInt(c);const e=o<c?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(c+=e);for(let t=o;t!==c;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},11151:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s,a:()=>a});var o=n(67294);const r={},c=o.createContext(r);function a(e){const t=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(c.Provider,{value:t},e.children)}}}]);