"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[44792],{59244:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>l,frontMatter:()=>c,metadata:()=>r,toc:()=>d});var s=n(85893),a=n(11151);const c={sidebar_position:3},o="Creating Accounts",r={id:"sdk/js/promises/create-account",title:"Creating Accounts",description:"You might want to create an account from a contract for many reasons. One example:",source:"@site/../docs/sdk/js/promises/create-account.md",sourceDirName:"sdk/js/promises",slug:"/sdk/js/promises/create-account",permalink:"/sdk/js/promises/create-account",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/sdk/js/promises/create-account.md",tags:[],version:"current",lastUpdatedBy:"Dennis",lastUpdatedAt:1674222229e3,sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tools",previous:{title:"Sending Native Tokens",permalink:"/sdk/js/promises/token-tx"},next:{title:"Deploying Contracts",permalink:"/sdk/js/promises/deploy-contract"}},i={},d=[];function u(e){const t={a:"a",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"creating-accounts",children:"Creating Accounts"}),"\n",(0,s.jsxs)(t.p,{children:["You might want to create an account from a contract for many reasons. One example:\nYou want to ",(0,s.jsx)(t.a,{href:"https://www.youtube.com/watch?v=7mO4yN1zjbs&t=2s",children:"progressively onboard"})," users, hiding the whole concept of NEAR from them at the beginning, and automatically create accounts for them (these could be sub-accounts of your main contract, such as ",(0,s.jsx)(t.code,{children:"user123.some-cool-game.near"}),")."]}),"\n",(0,s.jsxs)(t.p,{children:["Since an account with no balance is almost unusable, you probably want to combine this with the token transfer from ",(0,s.jsx)(t.a,{href:"/sdk/js/promises/token-tx",children:"the last page"}),". You will also need to give the account an access key. Here's a way do it:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:'NearPromise.new("subaccount.example.near").createAccount().addFullAccessKey(near.signerAccountPk()).transfer(BigInt(250_000_000_000_000_000_000_000)); // 2.5e23yN, 0.25N\n'})}),"\n",(0,s.jsx)(t.p,{children:"In the context of a full contract:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:'import { NearPromise, near } from "near-sdk-js";\n\n@NearBindgen({})\nexport class Contract {\n  @call({ privateFunction: true })\n  createSubaccount({ prefix }) {\n    const subaccountId = `${prefix}.${near.currentAccountId()}`;\n    return NearPromise.new(subaccount_id).createAccount().addFullAccessKey(near.signerAccountPk()).transfer(BigInt(250_000_000_000_000_000_000_000)); // 2.5e23yN, 0.25N\n  }\n}\n'})}),"\n",(0,s.jsx)(t.p,{children:"Things to note:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"addFullAccessKey"})," \u2013\xa0This example passes in the public key of the human or app that signed the original transaction that resulted in this function call (",(0,s.jsx)(t.a,{href:"https://github.com/near/near-sdk-js/blob/d1ca261feac5c38768ab30e0b24cf7263d80aaf2/packages/near-sdk-js/src/api.ts#L187-L194",children:(0,s.jsx)(t.code,{children:"signerAccountPk"})}),"). You could also use ",(0,s.jsx)(t.a,{href:"https://github.com/near/near-sdk-js/blob/d1ca261feac5c38768ab30e0b24cf7263d80aaf2/packages/near-sdk-js/src/promise.ts#L526-L548",children:(0,s.jsx)(t.code,{children:"addAccessKey"})})," to add a Function Call access key that only permits the account to make calls to a predefined set of contract functions."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"{ privateFunction: true }"})," \u2013 if you have a function that spends your contract's funds, you probably want to protect it in some way. This example does so with a perhaps-too-simple ",(0,s.jsx)(t.a,{href:"/sdk/js/contract-interface/private-methods",children:(0,s.jsx)(t.code,{children:"{ privateFunction: true }"})})," decorator parameter."]}),"\n"]})]})}function l(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>o});var s=n(67294);const a={},c=s.createContext(a);function o(e){const t=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(c.Provider,{value:t},e.children)}}}]);