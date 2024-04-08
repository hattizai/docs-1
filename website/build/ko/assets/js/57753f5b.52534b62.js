"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7266],{94113:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>l,frontMatter:()=>r,metadata:()=>c,toc:()=>p});var s=n(85893),o=n(11151);const r={},a=void 0,c={id:"primitives/dex/web-app/get-deposit-balances",title:"get-deposit-balances",description:"The Wallet object comes from our quickstart template",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/7.primitives/dex/web-app/get-deposit-balances.md",sourceDirName:"7.primitives/dex/web-app",slug:"/primitives/dex/web-app/get-deposit-balances",permalink:"/ko/primitives/dex/web-app/get-deposit-balances",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/7.primitives/dex/web-app/get-deposit-balances.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1709152665e3,frontMatter:{}},i={},p=[];function d(e){const t={a:"a",code:"code",em:"em",p:"p",pre:"pre",...(0,o.a)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:'const AMM_CONTRACT_ADDRESS = "v2.ref-finance.near";\nconst wallet = new Wallet({ createAccessKeyFor: AMM_CONTRACT_ADDRESS });\n \nawait wallet.viewMethod({\n  method: \'get_deposits\',\n  args: {\n   account_id: "bob.near"\n  },\n  contractId: AMM_CONTRACT_ADDRESS,\n});\n'})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsxs)(t.em,{children:["The ",(0,s.jsx)(t.code,{children:"Wallet"})," object comes from our ",(0,s.jsx)(t.a,{href:"https://github.com/near-examples/hello-near-examples/blob/main/frontend/near-wallet.js",children:"quickstart template"})]})}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"Example response"}),(0,s.jsx)("p",{children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "token.v2.ref-finance.near": "0",\n  "wrap.near": "0"\n}\n'})})})]})]})}function l(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>a});var s=n(67294);const o={},r=s.createContext(o);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);