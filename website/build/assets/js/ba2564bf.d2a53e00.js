"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[52815],{7574:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var t=s(85893),o=s(11151);const i={sidebar_position:1,sidebar_label:"Introduction",pagination_label:"Promises: Introduction"},r="Promises",a={id:"sdk/rust/promises/intro",title:"Promises",description:'Transactions can be sent asynchronously from a contract through a Promise. Like Promises in many programming languages, these will cause code to be executed in the future. In the case of NEAR, this "in the future" means a transaction to be executed in the next block_ (or thereabouts), rather than in the same block as the original function call.',source:"@site/../docs/sdk/rust/promises/intro.md",sourceDirName:"sdk/rust/promises",slug:"/sdk/rust/promises/intro",permalink:"/sdk/rust/promises/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/sdk/rust/promises/intro.md",tags:[],version:"current",lastUpdatedBy:"gagdiez",lastUpdatedAt:1702155614e3,sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Introduction",pagination_label:"Promises: Introduction"},sidebar:"tools",previous:{title:"Callbacks",permalink:"/sdk/rust/cross-contract/callbacks"},next:{title:"Sending $NEAR",permalink:"/sdk/rust/promises/token-tx"}},c={},l=[];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",li:"li",p:"p",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"promises",children:"Promises"}),"\n",(0,t.jsxs)(n.p,{children:["Transactions can be sent asynchronously from a contract through a ",(0,t.jsx)(n.a,{href:"https://docs.rs/near-sdk/latest/near_sdk/struct.Promise.html",children:(0,t.jsx)(n.code,{children:"Promise"})}),'. Like Promises in many programming languages, these will cause code to be executed in the future. In the case of NEAR, this "in the future" means a transaction to be executed ',(0,t.jsx)(n.em,{children:"in the next block"})," (or thereabouts), rather than in the same block as the original function call."]}),"\n",(0,t.jsxs)(n.p,{children:["You can implement any cross-contract workflow using Promises; they inhabit a middle-ground between the high-level and low-level approaches discussed in ",(0,t.jsx)(n.a,{href:"/sdk/rust/cross-contract/callbacks",children:"the last section"}),". See the full Promise docs, linked above, for details."]}),"\n",(0,t.jsx)(n.p,{children:"However, there are a few situations where Promises are uniquely capable, since these situations don't involve making function calls:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Sending $NEAR"}),"\n",(0,t.jsx)(n.li,{children:"Creating accounts"}),"\n",(0,t.jsx)(n.li,{children:"Deploying contracts"}),"\n"]}),"\n",(0,t.jsxs)(n.admonition,{title:"Why wait?",type:"info",children:[(0,t.jsxs)(n.p,{children:["Why not do these things synchronously, in the same block when the function is called? Why does NEAR require a ",(0,t.jsx)(n.code,{children:"Promise"})," for sending tokens, or creating an account, or deploying a contract?"]}),(0,t.jsxs)(n.p,{children:['They need to be scheduled in separate blocks since sender and receiver accounts can be on different shards, and cross-shard communication happens across blocks by passing receipts (you can think of receipts in NEAR as "internal transactions"). You can see these receipts being passed from block to block ',(0,t.jsx)(n.a,{href:"https://nearblocks.io/txns/36n3tBNiF497Tm9mijEpsCUvejL8mBYF1CEWthCnY8FV",children:"in NEAR Explorer"}),"."]})]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>r});var t=s(67294);const o={},i=t.createContext(o);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);