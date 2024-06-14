"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[691],{49533:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var s=n(85893),o=n(11151);const i={sidebar_position:1,sidebar_label:"Introduction",pagination_label:"Promises: Introduction",title:"Introduction"},r="Promises",a={id:"sdk/js/promises/intro",title:"Introduction",description:'Transactions can be sent asynchronously from a contract through a Promise. Like Promises in many programming languages, these will cause code to be executed in the future. In the case of NEAR, this "in the future" means a transaction to be executed in the next block (or thereabouts), rather than in the same block as the original function call. Like Promises in many programming languages, these will cause code to be executed in the future. In the case of NEAR, this "in the future" means a transaction to be executed in the next block_ (or thereabouts), rather than in the same block as the original function call.',source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sdk/js/promises/intro.md",sourceDirName:"sdk/js/promises",slug:"/sdk/js/promises/intro",permalink:"/zh-CN/sdk/js/promises/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/sdk/js/promises/intro.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1704996595e3,sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Introduction",pagination_label:"Promises: Introduction",title:"Introduction"},sidebar:"tools",previous:{title:"Callbacks",permalink:"/zh-CN/sdk/js/cross-contract/callbacks"},next:{title:"Sending Native Tokens",permalink:"/zh-CN/sdk/js/promises/token-tx"}},c={},l=[];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",p:"p",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"promises",children:"Promises"}),"\n",(0,s.jsxs)(t.p,{children:["Transactions can be sent asynchronously from a contract through a ",(0,s.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",children:(0,s.jsx)(t.code,{children:"Promise"})}),'. Like Promises in many programming languages, these will cause code to be executed in the future. In the case of NEAR, this "in the future" means a transaction to be executed ',(0,s.jsx)(t.em,{children:"in the next block"}),' (or thereabouts), rather than in the same block as the original function call. Like Promises in many programming languages, these will cause code to be executed in the future. In the case of NEAR, this "in the future" means a transaction to be executed ',(0,s.jsx)(t.em,{children:"in the next block"})," (or thereabouts), rather than in the same block as the original function call."]}),"\n",(0,s.jsxs)(t.admonition,{title:"Why wait?",type:"info",children:[(0,s.jsxs)(t.p,{children:["Why not do these things synchronously, in the same block when the function is called? Why does NEAR require a ",(0,s.jsx)(t.code,{children:"Promise"})," for sending tokens, or creating an account, or deploying a contract? Why does NEAR require a ",(0,s.jsx)(t.code,{children:"Promise"})," for sending tokens, or creating an account, or deploying a contract?"]}),(0,s.jsxs)(t.p,{children:['They need to be scheduled in separate blocks since sender and receiver accounts can be on different shards, and cross-shard communication happens across blocks by passing receipts (you can think of receipts in NEAR as "internal transactions"). You can see these receipts being passed from block to block ',(0,s.jsx)(t.a,{href:"https://nearblocks.io/txns/36n3tBNiF497Tm9mijEpsCUvejL8mBYF1CEWthCnY8FV",children:"in NEAR Explorer"}),". ::: You can see these receipts being passed from block to block ",(0,s.jsx)(t.a,{href:"https://nearblocks.io/txns/36n3tBNiF497Tm9mijEpsCUvejL8mBYF1CEWthCnY8FV",children:"in NEAR Explorer"}),"."]})]})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>r});var s=n(67294);const o={},i=s.createContext(o);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);