"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1011],{51273:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var r=t(85893),s=t(11151);const o={sidebar_position:3},i="Collections Nesting",a={id:"sdk/rust/contract-structure/nesting",title:"Collections Nesting",description:"Traditional approach for unique prefixes",source:"@site/../docs/sdk/rust/contract-structure/nesting.md",sourceDirName:"sdk/rust/contract-structure",slug:"/sdk/rust/contract-structure/nesting",permalink:"/zh-CN/sdk/rust/contract-structure/nesting",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/sdk/rust/contract-structure/nesting.md",tags:[],version:"current",lastUpdatedBy:"cornflower",lastUpdatedAt:1691074131,formattedLastUpdatedAt:"2023\u5e748\u67083\u65e5",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tools",previous:{title:"Collections",permalink:"/zh-CN/sdk/rust/contract-structure/collections"},next:{title:"Public Method Types",permalink:"/zh-CN/sdk/rust/contract-interface/public-methods"}},c={},l=[{value:"Traditional approach for unique prefixes",id:"traditional-approach-for-unique-prefixes",level:2},{value:"Generating unique prefixes for persistent collections",id:"generating-unique-prefixes-for-persistent-collections",level:2},{value:"Error prone patterns",id:"error-prone-patterns",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"collections-nesting",children:"Collections Nesting"}),"\n",(0,r.jsx)(n.h2,{id:"traditional-approach-for-unique-prefixes",children:"Traditional approach for unique prefixes"}),"\n",(0,r.jsx)(n.p,{children:"Hardcoded prefixes in the constructor using a short one letter prefix that was converted to a vector of bytes.\nWhen using nested collection, the prefix must be constructed manually."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};\nuse near_sdk::collections::{UnorderedMap, UnorderedSet};\nuse near_sdk::{near_bindgen, AccountId};\n\n#[near_bindgen]\n#[derive(BorshDeserialize, BorshSerialize)]\npub struct Contract {\n    pub accounts: UnorderedMap<AccountId, UnorderedSet<String>>,\n}\n\nimpl Default for Contract {\n    fn default() -> Self {\n        Self {\n            accounts: UnorderedMap::new(b"t"),\n        }\n    }\n}\n\n#[near_bindgen]\nimpl Contract {\n    pub fn get_tokens(&self, account_id: &AccountId) -> Vec<String> {\n        let tokens = self.accounts.get(account_id).unwrap_or_else(|| {\n            // Constructing a unique prefix for a nested UnorderedSet from a concatenation\n            // of a prefix and a hash of the account id.\n            let prefix: Vec<u8> = [\n                b"s".as_slice(),\n                &near_sdk::env::sha256_array(account_id.as_bytes()),\n            ]\n            .concat();\n            UnorderedSet::new(prefix)\n        });\n        tokens.to_vec()\n    }\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"generating-unique-prefixes-for-persistent-collections",children:"Generating unique prefixes for persistent collections"}),"\n",(0,r.jsxs)(n.p,{children:["Read more about persistent collections ",(0,r.jsx)(n.a,{href:"/zh-CN/sdk/rust/contract-structure/collections",children:"from this documentation"})," or from ",(0,r.jsx)(n.a,{href:"https://docs.rs/near-sdk/latest/near_sdk/collections",children:"the Rust docs"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Every instance of a persistent collection requires a unique storage prefix.\nThe prefix is used to generate internal keys to store data in persistent storage.\nThese internal keys need to be unique to avoid collisions (including collisions with key ",(0,r.jsx)(n.code,{children:"STATE"}),")."]}),"\n",(0,r.jsx)(n.p,{children:"When a contract gets complicated, there may be multiple different\ncollections that are not all part of the main structure, but instead part of a sub-structure or nested collections.\nThey all need to have unique prefixes."}),"\n",(0,r.jsxs)(n.p,{children:["We can introduce an ",(0,r.jsx)(n.code,{children:"enum"})," for tracking storage prefixes and keys.\nAnd then use borsh serialization to construct a unique prefix for every collection.\nIt's as efficient as manually constructing them, because with Borsh serialization, an enum only takes one byte."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};\nuse near_sdk::collections::{UnorderedMap, UnorderedSet};\nuse near_sdk::{env, near_bindgen, AccountId, BorshStorageKey, CryptoHash};\n\n#[near_bindgen]\n#[derive(BorshDeserialize, BorshSerialize)]\npub struct Contract {\n    pub accounts: UnorderedMap<AccountId, UnorderedSet<String>>,\n}\n\nimpl Default for Contract {\n    fn default() -> Self {\n        Self {\n            accounts: UnorderedMap::new(StorageKeys::Accounts),\n        }\n    }\n}\n\n#[derive(BorshStorageKey, BorshSerialize)]\npub enum StorageKeys {\n    Accounts,\n    SubAccount { account_hash: CryptoHash },\n}\n\n#[near_bindgen]\nimpl Contract {\n    pub fn get_tokens(&self, account_id: &AccountId) -> Vec<String> {\n        let tokens = self.accounts.get(account_id).unwrap_or_else(|| {\n            UnorderedSet::new(StorageKeys::SubAccount {\n                account_hash: env::sha256_array(account_id.as_bytes()),\n            })\n        });\n        tokens.to_vec()\n    }\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"error-prone-patterns",children:"Error prone patterns"}),"\n",(0,r.jsxs)(n.p,{children:["By extension of the error-prone patterns to avoid mentioned in the ",(0,r.jsx)(n.a,{href:"/zh-CN/sdk/rust/contract-structure/collections#error-prone-patterns",children:"collections section"}),", it is important to keep in mind how these bugs can easily be introduced into a contract when using nested collections."]}),"\n",(0,r.jsx)(n.p,{children:"Some issues for more context:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/near/near-sdk-rs/issues/560",children:"https://github.com/near/near-sdk-rs/issues/560"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/near/near-sdk-rs/issues/703",children:"https://github.com/near/near-sdk-rs/issues/703"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The following cases are the most commonly encountered bugs that cannot be restricted at the type level:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'use near_sdk::borsh::{self, BorshSerialize};\nuse near_sdk::collections::{LookupMap, UnorderedSet};\nuse near_sdk::BorshStorageKey;\n\n#[derive(BorshStorageKey, BorshSerialize)]\npub enum StorageKey {\n    Root,\n    Nested(u8),\n}\n\n// Bug 1: Nested collection is removed without clearing it\'s own state.\nlet mut root: LookupMap<u8, UnorderedSet<String>> = LookupMap::new(StorageKey::Root);\nlet mut nested = UnorderedSet::new(StorageKey::Nested(1));\nnested.insert(&"test".to_string());\nroot.insert(&1, &nested);\n\n// Remove inserted collection without clearing it\'s sub-state.\nlet mut _removed = root.remove(&1).unwrap();\n\n// This line would fix the bug:\n// _removed.clear();\n\n// This collection will now be in an inconsistent state if an empty UnorderedSet is put\n// in the same entry of `root`.\nroot.insert(&1, &UnorderedSet::new(StorageKey::Nested(1)));\nlet n = root.get(&1).unwrap();\nassert!(n.is_empty());\nassert!(n.contains(&"test".to_string()));\n\n// Bug 2 (only relevant for `near_sdk::collections`, not `near_sdk::store`): Nested\n// collection is modified without updating the collection itself in the outer collection.\n//\n// This is fixed at the type level in `near_sdk::store` because the values are modified\n// in-place and guarded by regular Rust borrow-checker rules.\nroot.insert(&2, &UnorderedSet::new(StorageKey::Nested(2)));\n\nlet mut nested = root.get(&2).unwrap();\nnested.insert(&"some value".to_string());\n\n// This line would fix the bug:\n// root.insert(&2, &nested);\n\nlet n = root.get(&2).unwrap();\nassert!(n.is_empty());\nassert!(n.contains(&"some value".to_string()));\n'})})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>i});var r=t(67294);const s={},o=r.createContext(s);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);