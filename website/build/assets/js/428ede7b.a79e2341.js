"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[58287],{3859:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var s=n(85893),o=n(11151);const r={},i=void 0,a={id:"primitives/dex/bos/get-deposit-balances",title:"get-deposit-balances",description:"Example response",source:"@site/../docs/7.primitives/dex/bos/get-deposit-balances.md",sourceDirName:"7.primitives/dex/bos",slug:"/primitives/dex/bos/get-deposit-balances",permalink:"/primitives/dex/bos/get-deposit-balances",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/7.primitives/dex/bos/get-deposit-balances.md",tags:[],version:"current",lastUpdatedBy:"garikbesson",lastUpdatedAt:1706635251e3,frontMatter:{}},c={},d=[];function p(e){const t={code:"code",pre:"pre",...(0,o.a)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:'const ammContract = "v2.ref-finance.near";\nconst depositBalances = Near.view(\n  ammContract,\n  "get_deposits",\n  {\n    account_id: "bob.near"\n  }\n);\n'})}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"Example response"}),(0,s.jsx)("p",{children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "token.v2.ref-finance.near": "0",\n  "wrap.near": "0"\n}\n'})})})]})]})}function l(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>i});var s=n(67294);const o={},r=s.createContext(o);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);