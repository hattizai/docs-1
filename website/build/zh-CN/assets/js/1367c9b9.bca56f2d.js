"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6914],{94850:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>l,frontMatter:()=>o,metadata:()=>r,toc:()=>u});var a=n(85893),s=n(11151);const o={sidebar_position:3},c="Creating Accounts",r={id:"sdk/js/promises/create-account",title:"Creating Accounts",description:"You might want to create an account from a contract for many reasons. You might want to create an account from a contract for many reasons. One example: You want to progressively onboard users, hiding the whole concept of NEAR from them at the beginning, and automatically create accounts for them (these could be sub-accounts of your main contract, such as user123.some-cool-game.near).",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sdk/js/promises/create-account.md",sourceDirName:"sdk/js/promises",slug:"/sdk/js/promises/create-account",permalink:"/zh-CN/sdk/js/promises/create-account",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/sdk/js/promises/create-account.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1704996595e3,sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tools",previous:{title:"Sending Native Tokens",permalink:"/zh-CN/sdk/js/promises/token-tx"},next:{title:"Deploying Contracts",permalink:"/zh-CN/sdk/js/promises/deploy-contract"}},i={},u=[];function d(e){const t={a:"a",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"creating-accounts",children:"Creating Accounts"}),"\n",(0,a.jsxs)(t.p,{children:["You might want to create an account from a contract for many reasons. You might want to create an account from a contract for many reasons. One example: You want to ",(0,a.jsx)(t.a,{href:"https://www.youtube.com/watch?v=7mO4yN1zjbs&t=2s",children:"progressively onboard"})," users, hiding the whole concept of NEAR from them at the beginning, and automatically create accounts for them (these could be sub-accounts of your main contract, such as ",(0,a.jsx)(t.code,{children:"user123.some-cool-game.near"}),")."]}),"\n",(0,a.jsxs)(t.p,{children:["Since an account with no balance is almost unusable, you probably want to combine this with the token transfer from ",(0,a.jsx)(t.a,{href:"/zh-CN/sdk/js/promises/token-tx",children:"the last page"}),". You will also need to give the account an access key. Here's a way do it: You will also need to give the account an access key. Here's a way do it:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'NearPromise.new("subaccount.example.near").createAccount().addFullAccessKey(near.signerAccountPk()).transfer(BigInt(250_000_000_000_000_000_000_000)); // 2.5e23yN, 0.25N\n'})}),"\n",(0,a.jsx)(t.p,{children:"In the context of a full contract:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'import { NearPromise, near } from "near-sdk-js";\n\n@NearBindgen({})\nexport class Contract {\n  @call({ privateFunction: true })\n  createSubaccount({ prefix }) {\n    const subaccountId = `${prefix}.${near.currentAccountId()}`;\n    return NearPromise.new(subaccount_id).createAccount().addFullAccessKey(near.signerAccountPk()).transfer(BigInt(250_000_000_000_000_000_000_000)); // 2.5e23yN, 0.25N\n  }\n}\n'})}),"\n",(0,a.jsx)(t.p,{children:"Things to note:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"addFullAccessKey"})," \u2013\xa0This example passes in the public key of the human or app that signed the original transaction that resulted in this function call (",(0,a.jsx)(t.a,{href:"https://github.com/near/near-sdk-js/blob/d1ca261feac5c38768ab30e0b24cf7263d80aaf2/packages/near-sdk-js/src/api.ts#L187-L194",children:(0,a.jsx)(t.code,{children:"signerAccountPk"})}),"). You could also use ",(0,a.jsx)(t.a,{href:"https://github.com/near/near-sdk-js/blob/d1ca261feac5c38768ab30e0b24cf7263d80aaf2/packages/near-sdk-js/src/promise.ts#L526-L548",children:(0,a.jsx)(t.code,{children:"addAccessKey"})})," to add a Function Call access key that only permits the account to make calls to a predefined set of contract functions. You could also use ",(0,a.jsx)(t.a,{href:"https://github.com/near/near-sdk-js/blob/d1ca261feac5c38768ab30e0b24cf7263d80aaf2/packages/near-sdk-js/src/promise.ts#L526-L548",children:(0,a.jsx)(t.code,{children:"addAccessKey"})})," to add a Function Call access key that only permits the account to make calls to a predefined set of contract functions."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"{ privateFunction: true }"})," \u2013 if you have a function that spends your contract's funds, you probably want to protect it in some way. ",(0,a.jsx)(t.code,{children:"{ privateFunction: true }"})," \u2013 if you have a function that spends your contract's funds, you probably want to protect it in some way. This example does so with a perhaps-too-simple ",(0,a.jsx)(t.a,{href:"/zh-CN/sdk/js/contract-interface/private-methods",children:(0,a.jsx)(t.code,{children:"{ privateFunction: true }"})})," decorator parameter."]}),"\n"]})]})}function l(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>c});var a=n(67294);const s={},o=a.createContext(s);function c(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);