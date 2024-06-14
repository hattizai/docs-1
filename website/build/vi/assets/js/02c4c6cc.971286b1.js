"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7918],{7691:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>c,metadata:()=>r,toc:()=>u});var o=e(85893),a=e(11151);const c={},i=void 0,r={id:"build/primitives/dex/smart-contract/swap",title:"swap",description:"",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/2.build/5.primitives/dex/smart-contract/swap.md",sourceDirName:"2.build/5.primitives/dex/smart-contract",slug:"/build/primitives/dex/smart-contract/swap",permalink:"/vi/build/primitives/dex/smart-contract/swap",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/5.primitives/dex/smart-contract/swap.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1712954223e3,frontMatter:{}},s={},u=[];function l(t){const n={code:"code",pre:"pre",...(0,a.a)(),...t.components};return(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-rust",children:'#[near(serializers = [json])]\npub struct SwapAction {\n    /// Pool which should be used for swapping.\n    pub pool_id: u64,\n    /// Token to swap from.\n    pub token_in: AccountId,\n    /// Amount to exchange.\n    /// If amount_in is None, it will take amount_out from previous step.\n    /// Will fail if amount_in is None on the first step.\n    pub amount_in: Option<U128>,\n    /// Token to swap into.\n    pub token_out: AccountId,\n    /// Required minimum amount of token_out.\n    pub min_amount_out: U128,\n}\n\n// Validator interface, for cross-contract calls\n#[ext_contract(ext_amm_contract)]\ntrait ExternalAmmContract {\n  fn swap(&self, actions: Vec<SwapAction>) -> Promise;\n}\n\n// Implement the contract structure\n#[near]\nimpl Contract {\n  #[private] // Public - but only callable by env::current_account_id()\n  pub fn external_call_callback(&self, #[callback_result] call_result: Result<String, PromiseError>) {\n    // Check if the promise succeeded\n    if call_result.is_err() {\n      log!("There was an error contacting external contract");\n    }\n  }\n\n  #[payable]\n  pub fn swap_tokens(&mut self, pool_id: u64, token_in: AccountId, token_out: AccountId, amount_in: U128, min_amount_out: U128) -> Promise {\n    assert_eq!(env::attached_deposit(), 1, "Requires attached deposit of exactly 1 yoctoNEAR");\n\n    let swap_action = SwapAction {\n      pool_id,\n      token_in,\n      token_out,\n      amount_in: Some(amount_in),\n      min_amount_out\n    };\n\n    let mut actions = Vec::new();\n    actions.push(swap_action);\n\n    let promise = ext_amm_contract::ext(self.amm_contract.clone())\n      .with_static_gas(Gas(150*TGAS))\n      .with_attached_deposit(YOCTO_NEAR)\n      .swap(actions);\n\n    return promise.then( // Create a promise to callback query_greeting_callback\n      Self::ext(env::current_account_id())\n      .with_static_gas(Gas(100*TGAS))\n      .external_call_callback()\n    )\n  }\n}\n'})})}function p(t={}){const{wrapper:n}={...(0,a.a)(),...t.components};return n?(0,o.jsx)(n,{...t,children:(0,o.jsx)(l,{...t})}):l(t)}},11151:(t,n,e)=>{e.d(n,{Z:()=>r,a:()=>i});var o=e(67294);const a={},c=o.createContext(a);function i(t){const n=o.useContext(c);return o.useMemo((function(){return"function"==typeof t?t(n):{...n,...t}}),[n,t])}function r(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(a):t.components||a:i(t.components),o.createElement(c.Provider,{value:n},t.children)}}}]);