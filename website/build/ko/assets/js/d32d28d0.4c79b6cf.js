"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9191],{66301:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>l,toc:()=>a});var s=n(85893),r=n(11151);const c={id:"checklist",title:"\u2705 Checklist"},o=void 0,l={id:"develop/contracts/security/checklist",title:"\u2705 Checklist",description:"Once you finished developing your smart contract please go through the following list in order to ensure everything is safe for the end user.",source:"@site/../docs/2.develop/contracts/security/checklist.md",sourceDirName:"2.develop/contracts/security",slug:"/develop/contracts/security/checklist",permalink:"/ko/develop/contracts/security/checklist",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.develop/contracts/security/checklist.md",tags:[],version:"current",lastUpdatedBy:"gagdiez",lastUpdatedAt:1673445665,formattedLastUpdatedAt:"2023\ub144 1\uc6d4 11\uc77c",frontMatter:{id:"checklist",title:"\u2705 Checklist"},sidebar:"contracts",previous:{title:"Cross-Contract Calls",permalink:"/ko/develop/contracts/crosscontract"},next:{title:"Notes on Serialization",permalink:"/ko/develop/contracts/serialization"}},i={},a=[{value:"Anatomy",id:"anatomy",level:3},{value:"Environment",id:"environment",level:3},{value:"Storage",id:"storage",level:3},{value:"Actions",id:"actions",level:3},{value:"Callbacks",id:"callbacks",level:3}];function d(e){const t={code:"code",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Once you finished developing your smart contract please go through the following list in order to ensure everything is safe for the end user."}),"\n",(0,s.jsx)(t.h3,{id:"anatomy",children:"Anatomy"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["All private methods are decorated as",(0,s.jsx)(t.code,{children:"private"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"environment",children:"Environment"}),"\n",(0,s.jsxs)(t.ol,{start:"2",children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"predecessor"})," and ",(0,s.jsx)(t.code,{children:"signer"})," are used correctly through the entire contract."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"storage",children:"Storage"}),"\n",(0,s.jsxs)(t.ol,{start:"3",children:["\n",(0,s.jsx)(t.li,{children:"Each time the state grows it is ensured that there is enough balance to cover it"}),"\n",(0,s.jsx)(t.li,{children:"All collections (i.e. Vector, Map, Tree, etc) have an unique id"}),"\n",(0,s.jsxs)(t.li,{children:["Check for underflow and overflow!. In rust, you can do this by simply adding the ",(0,s.jsx)(t.code,{children:"overflow-checks = true"})," flag in your ",(0,s.jsx)(t.code,{children:"Cargo.toml"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"actions",children:"Actions"}),"\n",(0,s.jsxs)(t.ol,{start:"6",children:["\n",(0,s.jsx)(t.li,{children:"When sending money, you leave enough in the contract to cover the storage cost"}),"\n",(0,s.jsxs)(t.li,{children:["If you are tracking user's fund, you ",(0,s.jsx)(t.strong,{children:"deduct them before"})," sending them back to the user."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"callbacks",children:"Callbacks"}),"\n",(0,s.jsxs)(t.ol,{start:"8",children:["\n",(0,s.jsxs)(t.li,{children:["All private callbacks are marked as ",(0,s.jsx)(t.code,{children:"private"})]}),"\n",(0,s.jsx)(t.li,{children:"All cross-contract calls have a callback that checks for errors and rolls back the state if necessary"}),"\n",(0,s.jsxs)(t.li,{children:["All cross-contract calls have a callback that checks for errors and returns money to the ",(0,s.jsx)(t.code,{children:"predecessor"})," if necessary"]}),"\n",(0,s.jsx)(t.li,{children:"All the callbacks are given enough GAS to execute entirely"}),"\n",(0,s.jsx)(t.li,{children:"The contract is not left in a exploitable state between a cross-contract call and its callback"}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>o});var s=n(67294);const r={},c=s.createContext(r);function o(e){const t=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(c.Provider,{value:t},e.children)}}}]);