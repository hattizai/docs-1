"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4755],{34842:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var n=a(85893),s=a(11151);const o={id:"standards",title:"Standards"},r=void 0,c={id:"social/standards",title:"Standards",description:"The data in SocialDB is organized as a simple JSON tree.",source:"@site/../docs/social/standards.md",sourceDirName:"social",slug:"/social/standards",permalink:"/social/standards",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/social/standards.md",tags:[],version:"current",lastUpdatedBy:"Dami\xe1n Parrino",lastUpdatedAt:1678382303,formattedLastUpdatedAt:"Mar 9, 2023",frontMatter:{id:"standards",title:"Standards"}},i={},d=[{value:"Schema description",id:"schema-description",level:3},{value:"Root schema",id:"root-schema",level:3}];function l(e){const t={a:"a",code:"code",em:"em",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"The data in SocialDB is organized as a simple JSON tree.\nThe only enforced rule is that the keys in the root are the account IDs that store the data.\nThis is done on purpose, so the SocialDB contract is not enforcing any structure or a schema.\nOtherwise, the contract has to be modified for every schema change.\nThe control of the contract schemas can lead to the centralization and restrictions.\nInstead, Near Social Standards live outside the SocialDB contract."}),"\n",(0,n.jsxs)(t.p,{children:["Currently, ",(0,n.jsx)(t.a,{href:"https://github.com/NearSocial/standards",children:"Standards on Github"})," is the default place for the standards, but this may change in the future."]}),"\n",(0,n.jsx)(t.h3,{id:"schema-description",children:"Schema description"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"bold"})})," means the key is required."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.em,{children:(0,n.jsx)(t.code,{children:"italic"})})," means the key is optional."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"[account_id]"})," means the dynamic key is an account ID. For example, ",(0,n.jsx)(t.code,{children:"alex.near"})," as a key. It usually used to create some edge towards that account."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"root-schema",children:"Root schema"}),"\n",(0,n.jsxs)(t.p,{children:["Each account should follow the ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:"https://github.com/NearSocial/standards/blob/main/types/Root.md#root",children:"Root schema"})})]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},11151:(e,t,a)=>{a.d(t,{Z:()=>c,a:()=>r});var n=a(67294);const s={},o=n.createContext(s);function r(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);