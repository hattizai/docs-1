"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1250],{44644:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>l,frontMatter:()=>a,metadata:()=>r,toc:()=>u});var s=n(85893),c=n(11151);const a={sidebar_position:3},o="T\u1ea1o m\u1ed9t NEAR Account",r={id:"sdk/rust/promises/create-account",title:"T\u1ea1o m\u1ed9t NEAR Account",description:"You might want to create an account from a contract for many reasons. One example: You want to progressively onboard users, hiding the whole concept of NEAR from them at the beginning, and automatically create accounts for them (these could be sub-accounts of your main contract, such as user123.some-cool-game.near).",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/sdk/rust/promises/create-account.md",sourceDirName:"sdk/rust/promises",slug:"/sdk/rust/promises/create-account",permalink:"/vi/sdk/rust/promises/create-account",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/sdk/rust/promises/create-account.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1704996595e3,sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tools",previous:{title:"Sending $NEAR",permalink:"/vi/sdk/rust/promises/token-tx"},next:{title:"Deploying Contract",permalink:"/vi/sdk/rust/promises/deploy-contract"}},i={},u=[];function d(e){const t={a:"a",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"t\u1ea1o-m\u1ed9t-near-account",children:"T\u1ea1o m\u1ed9t NEAR Account"}),"\n",(0,s.jsxs)(t.p,{children:["You might want to create an account from a contract for many reasons. One example: You want to ",(0,s.jsx)(t.a,{href:"https://www.youtube.com/watch?v=7mO4yN1zjbs&t=2s",children:"progressively onboard"})," users, hiding the whole concept of NEAR from them at the beginning, and automatically create accounts for them (these could be sub-accounts of your main contract, such as ",(0,s.jsx)(t.code,{children:"user123.some-cool-game.near"}),")."]}),"\n",(0,s.jsxs)(t.p,{children:["Since an account with no balance is almost unusable, you probably want to combine this with the token transfer from ",(0,s.jsx)(t.a,{href:"/vi/sdk/rust/promises/token-tx",children:"the last page"}),". You will also need to give the account an access key. Here's a way do it:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:'Promise::new("subaccount.example.near".parse().unwrap())\n    .create_account()\n    .add_full_access_key(env::signer_account_pk())\n    .transfer(250_000_000_000_000_000_000_000); // 2.5e23yN, 0.25N\n'})}),"\n",(0,s.jsx)(t.p,{children:"In the context of a full contract:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:'use near_sdk::{env, near, AccountId, Balance, Promise};\n\nconst INITIAL_BALANCE: Balance = 250_000_000_000_000_000_000_000; // 2.5e23yN, 0.25N\n\n#[near(contract_state)]\npub struct Contract {}\n\n#[near]\nimpl Contract {\n    #[private]\n    pub fn create_subaccount(prefix: AccountId) -> Promise {\n        let subaccount_id = AccountId::new_unchecked(\n          format!("{}.{}", prefix, env::current_account_id())\n        );\n        Promise::new(subaccount_id)\n            .create_account()\n            .add_full_access_key(env::signer_account_pk())\n            .transfer(INITIAL_BALANCE)\n    }\n}\n'})}),"\n",(0,s.jsx)(t.p,{children:"Things to note:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"add_full_access_key"})," \u2013\xa0This example passes in the public key of the human or app that signed the original transaction that resulted in this function call (",(0,s.jsx)(t.a,{href:"https://docs.rs/near-sdk/3.1.0/near_sdk/env/fn.signer_account_id.html",children:(0,s.jsx)(t.code,{children:"signer_account_pk"})}),"). You could also use ",(0,s.jsx)(t.a,{href:"https://docs.rs/near-sdk/latest/near_sdk/struct.Promise.html#method.add_access_key",children:(0,s.jsx)(t.code,{children:"add_access_key"})})," to add a Function Call access key that only permits the account to make calls to a predefined set of contract functions."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"#[private]"})," \u2013 if you have a function that spends your contract's funds, you probably want to protect it in some way. This example does so with a perhaps-too-simple ",(0,s.jsx)(t.a,{href:"/vi/sdk/rust/contract-interface/private-methods",children:(0,s.jsx)(t.code,{children:"#[private]"})})," macro."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"INITIAL_BALANCE"})," uses the ",(0,s.jsx)(t.a,{href:"https://docs.rs/near-sdk/3.1.0/near_sdk/type.Balance.html",children:(0,s.jsx)(t.code,{children:"Balance"})})," type from near-sdk-rs. Today this is a simple alias for ",(0,s.jsx)(t.code,{children:"u128"}),", but in the future may be expanded to have additional functionality, similar to recent ",(0,s.jsxs)(t.a,{href:"https://github.com/near/near-sdk-rs/pull/471",children:["changes to the ",(0,s.jsx)(t.code,{children:"Gas"})," type"]}),"."]}),"\n"]})]})}function l(e={}){const{wrapper:t}={...(0,c.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>o});var s=n(67294);const c={},a=s.createContext(c);function o(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);