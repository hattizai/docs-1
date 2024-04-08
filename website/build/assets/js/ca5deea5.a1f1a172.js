"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[69577],{85851:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=e(85893),c=e(11151);const i={},a=void 0,o={id:"primitives/nft/smart-contract/mint",title:"mint",description:"",source:"@site/../docs/7.primitives/nft/smart-contract/mint.md",sourceDirName:"7.primitives/nft/smart-contract",slug:"/primitives/nft/smart-contract/mint",permalink:"/primitives/nft/smart-contract/mint",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/7.primitives/nft/smart-contract/mint.md",tags:[],version:"current",lastUpdatedBy:"garikbesson",lastUpdatedAt:1706635251e3,frontMatter:{}},s={},l=[];function d(t){const n={code:"code",pre:"pre",...(0,c.a)(),...t.components};return(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'// Validator interface, for cross-contract calls\n#[ext_contract(ext_nft_contract)]\ntrait ExternalNftContract {\n  fn nft_mint(&self, token_series_id: String, receiver_id: AccountId) -> Promise;\n}\n\n// Implement the contract structure\n#[near_bindgen]\nimpl Contract {\n  #[payable]\n  pub fn nft_mint(&mut self, token_series_id: String, receiver_id: AccountId) -> Promise {\n    let promise = ext_nft_contract::ext(self.nft_contract.clone())\n      .with_static_gas(Gas(30*TGAS))\n      .with_attached_deposit(env::attached_deposit())\n      .nft_mint(token_series_id, receiver_id);\n\n    return promise.then( // Create a promise to callback query_greeting_callback\n      Self::ext(env::current_account_id())\n      .with_static_gas(Gas(30*TGAS))\n      .nft_mint_callback()\n    )\n  }\n\n  #[private] // Public - but only callable by env::current_account_id()\n  pub fn nft_mint_callback(&self, #[callback_result] call_result: Result<TokenId, PromiseError>) -> Option<TokenId> {\n    // Check if the promise succeeded\n    if call_result.is_err() {\n      log!("There was an error contacting NFT contract");\n      return None;\n    }\n\n    // Return the token data\n    let token_id: TokenId = call_result.unwrap();\n    return Some(token_id);\n  }\n}\n'})})}function u(t={}){const{wrapper:n}={...(0,c.a)(),...t.components};return n?(0,r.jsx)(n,{...t,children:(0,r.jsx)(d,{...t})}):d(t)}},11151:(t,n,e)=>{e.d(n,{Z:()=>o,a:()=>a});var r=e(67294);const c={},i=r.createContext(c);function a(t){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof t?t(n):{...n,...t}}),[n,t])}function o(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(c):t.components||c:a(t.components),r.createElement(i.Provider,{value:n},t.children)}}}]);