"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[316],{48030:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=n(85893),s=n(11151);const o={sidebar_position:4},r="Payable Methods",i={id:"sdk/rust/contract-interface/payable-methods",title:"Payable Methods",description:"We can allow methods to accept token transfer together with the function call. This is done so that contracts can define a fee in tokens that needs to be paid when they are used. By default the methods are not payable and they will panic if someone will attempt to transfer tokens to them during the invocation. This is done for safety reason, in case someone accidentally transfers tokens during the function call.",source:"@site/../docs/sdk/rust/contract-interface/payable-methods.md",sourceDirName:"sdk/rust/contract-interface",slug:"/sdk/rust/contract-interface/payable-methods",permalink:"/ko/sdk/rust/contract-interface/payable-methods",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/sdk/rust/contract-interface/payable-methods.md",tags:[],version:"current",lastUpdatedBy:"Dami\xe1n Parrino",lastUpdatedAt:1661352815,formattedLastUpdatedAt:"2022\ub144 8\uc6d4 24\uc77c",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tools",previous:{title:"Private Methods",permalink:"/ko/sdk/rust/contract-interface/private-methods"},next:{title:"Serialization Protocols",permalink:"/ko/sdk/rust/contract-interface/serialization-interface"}},c={},d=[];function l(e){const t={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"payable-methods",children:"Payable Methods"}),"\n",(0,a.jsx)(t.p,{children:"We can allow methods to accept token transfer together with the function call. This is done so that contracts can define a fee in tokens that needs to be paid when they are used. By default the methods are not payable and they will panic if someone will attempt to transfer tokens to them during the invocation. This is done for safety reason, in case someone accidentally transfers tokens during the function call."}),"\n",(0,a.jsxs)(t.p,{children:["To declare a method as payable, use the ",(0,a.jsx)(t.code,{children:"#[payable]"})," annotation within the ",(0,a.jsxs)(t.a,{href:"/ko/sdk/rust/contract-structure/near-bindgen",children:[(0,a.jsx)(t.code,{children:"near_bindgen"})," macro"]})," as follows:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-rust",children:"#[payable]\npub fn my_method(&mut self) {\n...\n}\n"})}),"\n",(0,a.jsxs)(t.p,{children:["This will allow the ",(0,a.jsx)(t.code,{children:"my_method"})," function to be called and transfer balance to the contract."]}),"\n",(0,a.jsx)(t.p,{children:"Example:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-rust",children:'#[near_bindgen]\nimpl Contract {\n    #[payable]\n    pub fn take_my_money(&mut self) {\n        near_sdk::env::log_str("Thanks!");\n    }\n    pub fn do_not_take_my_money(&mut self) {\n        near_sdk::env::log_str("Thanks!");\n    }\n}\n'})}),"\n",(0,a.jsx)(t.p,{children:"is equivalent to:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-rust",children:'#[near_bindgen]\nimpl Contract {\n    pub fn take_my_money(&mut self) {\n        near_sdk::env::log_str("Thanks!");\n    }\n    pub fn do_not_take_my_money(&mut self) {\n        if near_sdk::env::attached_deposit() != 0 {\n            near_sdk::env::panic_str("Method do_not_take_my_money doesn\'t accept deposit");\n        }\n        near_sdk::env::log_str("Thanks!");\n    }\n}\n'})})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>r});var a=n(67294);const s={},o=a.createContext(s);function r(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);