"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3331],{1054:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>s,toc:()=>l});var a=n(85893),r=n(11151);const c={},o=void 0,s={id:"build/primitives/dao/smart-contract/create-dao",title:"create-dao",description:"",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/2.build/5.primitives/dao/smart-contract/create-dao.md",sourceDirName:"2.build/5.primitives/dao/smart-contract",slug:"/build/primitives/dao/smart-contract/create-dao",permalink:"/ko/build/primitives/dao/smart-contract/create-dao",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/5.primitives/dao/smart-contract/create-dao.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1712954223e3,frontMatter:{}},i={},l=[];function d(t){const e={code:"code",pre:"pre",...(0,r.a)(),...t.components};return(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-rust",children:'// Validator interface, for cross-contract calls\n#[ext_contract(ext_dao_factory_contract)]\ntrait ExternalDaoFactoryContract {\n  fn create(&mut self, name: AccountId, args: Base64VecU8) -> Promise;\n}\n\n// Implement the contract structure\n#[near]\nimpl Contract {\n  #[payable]\n  pub fn create_dao(&mut self, name: AccountId, args: Base64VecU8) -> Promise {\n    let promise = ext_dao_factory_contract::ext(self.dao_factory_contract.clone())\n      .with_attached_deposit(env::attached_deposit())\n      .with_static_gas(Gas(30*TGAS))\n      .create(name, args);\n\n    return promise.then( // Create a promise to callback query_greeting_callback\n      Self::ext(env::current_account_id())\n      .with_static_gas(Gas(50*TGAS))\n      .external_common_callback()\n    )\n  }\n\n  #[private] // Public - but only callable by env::current_account_id()\n  pub fn external_common_callback(&self, #[callback_result] call_result: Result<(), PromiseError>) {\n    // Check if the promise succeeded\n    if call_result.is_err() {\n      log!("There was an error contacting external contract")\n    }\n  }\n}\n'})})}function u(t={}){const{wrapper:e}={...(0,r.a)(),...t.components};return e?(0,a.jsx)(e,{...t,children:(0,a.jsx)(d,{...t})}):d(t)}},11151:(t,e,n)=>{n.d(e,{Z:()=>s,a:()=>o});var a=n(67294);const r={},c=a.createContext(r);function o(t){const e=a.useContext(c);return a.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function s(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:o(t.components),a.createElement(c.Provider,{value:e},t.children)}}}]);