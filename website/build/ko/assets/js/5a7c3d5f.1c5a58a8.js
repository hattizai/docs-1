"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7555],{9229:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var o=n(85893),r=n(11151);const s={},c=void 0,i={id:"build/primitives/ft/bos/attach-to-call",title:"attach-to-call",description:"Example response",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/2.build/5.primitives/ft/bos/attach-to-call.md",sourceDirName:"2.build/5.primitives/ft/bos",slug:"/build/primitives/ft/bos/attach-to-call",permalink:"/ko/build/primitives/ft/bos/attach-to-call",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/5.primitives/ft/bos/attach-to-call.md",tags:[],version:"current",frontMatter:{}},a={},l=[];function d(t){const e={code:"code",pre:"pre",...(0,r.a)(),...t.components},{Details:n}=e;return n||function(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-js",children:'const tokenContract = "token.v2.ref-finance.near";\nconst result = Near.call(\n  tokenContract,\n  "ft_transfer_call",\n  {\n    receiver_id: "v2.ref-finance.near",\n    amount: "100000000000000000",\n    msg: "",\n  },\n  300000000000000,\n  1\n);\n'})}),"\n",(0,o.jsxs)(n,{children:[(0,o.jsx)("summary",{children:"Example response"}),(0,o.jsx)("p",{children:(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-json",children:"'100000000000000000'\n"})})})]})]})}function u(t={}){const{wrapper:e}={...(0,r.a)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(d,{...t})}):d(t)}},11151:(t,e,n)=>{n.d(e,{Z:()=>i,a:()=>c});var o=n(67294);const r={},s=o.createContext(r);function c(t){const e=o.useContext(s);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function i(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:c(t.components),o.createElement(s.Provider,{value:e},t.children)}}}]);