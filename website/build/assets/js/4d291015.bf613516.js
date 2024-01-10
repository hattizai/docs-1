"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8448],{42817:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=n(85893),s=n(11151);const r={id:"serialization",title:"Notes on Serialization"},a=void 0,l={id:"develop/contracts/serialization",title:"Notes on Serialization",description:"Smart contracts need to be able to communicate complex data in a simple way, while",source:"@site/../docs/2.develop/contracts/serialization.md",sourceDirName:"2.develop/contracts",slug:"/develop/contracts/serialization",permalink:"/develop/contracts/serialization",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.develop/contracts/serialization.md",tags:[],version:"current",lastUpdatedBy:"Zion",lastUpdatedAt:1668682832,formattedLastUpdatedAt:"Nov 17, 2022",frontMatter:{id:"serialization",title:"Notes on Serialization"},sidebar:"contracts",previous:{title:"\u2705 Checklist",permalink:"/develop/contracts/security/checklist"},next:{title:"Introduction",permalink:"/develop/testing/introduction"}},o={},c=[{value:"Overview of Serialization Formats",id:"overview-of-serialization-formats",level:2},{value:"JSON: Objects to Strings",id:"json-objects-to-strings",level:3},{value:"Features",id:"features",level:4},{value:"Example",id:"example",level:4},{value:"Borsh: Objects to Bytes",id:"borsh-objects-to-bytes",level:3},{value:"Features",id:"features-1",level:4},{value:"Example",id:"example-1",level:4},{value:"Serializing Input &amp; Output",id:"serializing-input--output",level:2},{value:"Example",id:"example-2",level:4},{value:"Receiving Data",id:"receiving-data",level:4},{value:"Returning Data",id:"returning-data",level:4},{value:"Borsh: State Serialization",id:"borsh-state-serialization",level:2},{value:"Example",id:"example-3",level:4},{value:"Empty State On Deploy",id:"empty-state-on-deploy",level:4},{value:"Initializing the State",id:"initializing-the-state",level:4},{value:"Modifying the State",id:"modifying-the-state",level:4},{value:"Deserialization Error",id:"deserialization-error",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["Smart contracts need to be able to ",(0,i.jsx)(t.strong,{children:"communicate complex data"})," in a simple way, while\nalso ",(0,i.jsx)(t.strong,{children:"reading and storing"})," such data into their states efficiently."]}),"\n",(0,i.jsx)(t.p,{children:"To achieve such simple communication and efficient storage, smart contracts morph the data\nfrom their complex representation into simpler ones."}),"\n",(0,i.jsxs)(t.p,{children:["This process of translating ",(0,i.jsx)(t.strong,{children:"complex objects into simpler single-value"})," representations is called\n",(0,i.jsx)(t.strong,{children:"serialization"}),". NEAR uses two serialization formats: ",(0,i.jsx)(t.a,{href:"https://www.json.org/json-en.html",children:"JSON"})," and\n",(0,i.jsx)(t.a,{href:"https://borsh.io/",children:"Borsh"}),"."]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://www.json.org/json-en.html",children:"JSON"})," is used to serialize the contract's input/output during a method call"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://borsh.io/",children:"Borsh"})," is used to serialize the contract's state."]}),"\n"]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"overview-of-serialization-formats",children:"Overview of Serialization Formats"}),"\n",(0,i.jsx)(t.p,{children:"Lets give a quick overview of both serialization formats, including their pros and cons, as well as\nan example on how their serializations look like."}),"\n",(0,i.jsx)("hr",{class:"subsection"}),"\n",(0,i.jsxs)(t.h3,{id:"json-objects-to-strings",children:[(0,i.jsx)(t.a,{href:"https://www.json.org/json-en.html",children:"JSON"}),": Objects to Strings"]}),"\n",(0,i.jsx)(t.h4,{id:"features",children:"Features"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Self-describing format"}),"\n",(0,i.jsx)(t.li,{children:"Easy interoperability with JavaScript"}),"\n",(0,i.jsx)(t.li,{children:"Multiple implementations readily available"}),"\n",(0,i.jsx)(t.li,{children:"But... it is not efficient both in computational times and resulting size"}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"example",children:"Example"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:'Example{\n  number: i32 = 2;\n  arr: Vector<i32> = [0, 1];\n}\n\n// serializes to\n"{\\"number\\": 2, \\"arr\\": [0, 1]}"\n'})}),"\n",(0,i.jsx)("hr",{class:"subsection"}),"\n",(0,i.jsxs)(t.h3,{id:"borsh-objects-to-bytes",children:[(0,i.jsx)(t.a,{href:"https://borsh.io/",children:"Borsh"}),": Objects to Bytes"]}),"\n",(0,i.jsx)(t.h4,{id:"features-1",children:"Features"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Compact, binary format built to be efficiently (de)serialized"}),"\n",(0,i.jsx)(t.li,{children:"Strict and canonical binary representation"}),"\n",(0,i.jsx)(t.li,{children:"Less overhead: it does not need to store attributes names"}),"\n",(0,i.jsx)(t.li,{children:"But... it is necessary to know the schema to (de)serialize the data"}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"example-1",children:"Example"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"Example{\n  number: i32 = 2;\n  arr: Vector<i32> = [0, 1];\n}\n\n// serializes into\n[2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0]\n"})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"serializing-input--output",children:"Serializing Input & Output"}),"\n",(0,i.jsx)(t.p,{children:"NEAR contracts can implement methods that both take and return complex objects.\nIn order to handle this data in a simple way, JSON serialization is used."}),"\n",(0,i.jsx)(t.p,{children:"Using JSON makes it easier for everyone to talk with the contracts, since most\nlanguages readily implement a JSON (de)serializer."}),"\n",(0,i.jsx)(t.h4,{id:"example-2",children:"Example"}),"\n",(0,i.jsx)(t.p,{children:"Let's look at this example, written only for educational purposes:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust",children:'#[derive(Serialize)]\n#[serde(crate = "near_sdk::serde")]\npub struct A {\n  pub a_number: i32,\n  pub b_number: u128\n}\n\n#[derive(Serialize)]\n#[serde(crate = "near_sdk::serde")]\npub struct B {\n  pub success: bool,\n  pub other_number: i32\n}\n\npub fn method(&self, struct_a: A): B {\n  return B{true, 0}\n}\n'})}),"\n",(0,i.jsx)(t.h4,{id:"receiving-data",children:"Receiving Data"}),"\n",(0,i.jsxs)(t.p,{children:["When a user calls the ",(0,i.jsx)(t.code,{children:"method"}),", the contract receives the arguments encoded as a JSON string\n(e.g. ",(0,i.jsx)(t.code,{children:'"{\\"a_number\\":0, \\"b_number\\":\\"100\\"}"'}),"), and proceed to (de)serialize them into\nthe correct object (",(0,i.jsx)(t.code,{children:"A{0, 100}"}),") ."]}),"\n",(0,i.jsx)(t.h4,{id:"returning-data",children:"Returning Data"}),"\n",(0,i.jsxs)(t.p,{children:["When returning the result, the contract will automatically encode the object ",(0,i.jsx)(t.code,{children:"B{true, 0}"}),"\ninto its JSON serialized value: ",(0,i.jsx)(t.code,{children:'"{\\"success\\":true, \\"other_number\\":0}"'})," and return this\nstring."]}),"\n",(0,i.jsxs)(t.admonition,{title:"JSON Limitations",type:"caution",children:[(0,i.jsxs)(t.p,{children:["Since JSON is limited to ",(0,i.jsx)(t.code,{children:"52 bytes"})," numbers, you cannot use ",(0,i.jsx)(t.code,{children:"u64"}),"/",(0,i.jsx)(t.code,{children:"u128"})," as input\nor output. JSON simply cannot serialize them. Instead, you must use ",(0,i.jsx)(t.code,{children:"Strings"}),"."]}),(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"NEAR SDK RS"})," currently implements the ",(0,i.jsx)(t.code,{children:"near_sdk::json_types::{U64, I64, U128, I128}"}),"\nthat you can use for input / output of data."]})]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"borsh-state-serialization",children:"Borsh: State Serialization"}),"\n",(0,i.jsxs)(t.p,{children:["Under the hood smart contracts store data using simple ",(0,i.jsx)(t.strong,{children:"key/value pairs"}),". This means that\nthe contract needs to translate complex states into simple key-value pairs."]}),"\n",(0,i.jsxs)(t.p,{children:["For this, NEAR contracts use ",(0,i.jsx)(t.a,{href:"https://borsh.io",children:"borsh"})," which is optimized for (de)serializing\ncomplex objects into smaller streams of bytes."]}),"\n",(0,i.jsx)(t.admonition,{title:"SDK-JS still uses json",type:"tip",children:(0,i.jsx)(t.p,{children:"The JavaScript SDK uses JSON to serialize objects in the state, but the borsh implementation\nshould arrive soon"})}),"\n",(0,i.jsx)(t.h4,{id:"example-3",children:"Example"}),"\n",(0,i.jsx)(t.p,{children:"Let's look at this example, written only for educational purposes:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust",children:'#[near_bindgen]\n#[derive(BorshDeserialize, BorshSerialize, PanicOnDefault)]\npub struct Contract {\n  string: String,\n  vector: Vector<u8>\n}\n\n#[near_bindgen]\nimpl Contract {\n  #[init]\n  pub fn init(string: String, first_u8: u8) -> Self {\n    let mut vector: Vector<u8> = Vector::new("prefix".as_bytes());\n    vector.push(&first_u8);\n\n    Self { string, vector }\n  }\n\n  pub fn change_state(&mut self, string: String, number: u8) {\n    self.string = string;\n    self.vector.push(&number);\n  }\n}\n'})}),"\n",(0,i.jsx)(t.h4,{id:"empty-state-on-deploy",children:"Empty State On Deploy"}),"\n",(0,i.jsx)(t.p,{children:"If we deploy the contract into a new account and immediately ask for the state we will see\nit is empty:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"near view-state $CONTRACT --finality optimistic\n\n# Result is: []\n"})}),"\n",(0,i.jsx)(t.h4,{id:"initializing-the-state",children:"Initializing the State"}),"\n",(0,i.jsx)(t.p,{children:"If we initialize the state we can see how Borsh is used to serialize the state"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"# initialize with the string \"hi\" and 0\nnear call $CONTRACT init '{\"string\":\"hi\", \"first_u8\":0}' --accountId $CONTRACT\n\n# check the state\nnear view-state $CONTRACT --utf8 --finality optimistic\n\n# Result is:\n# [\n#   {\n#     key: 'STATE',\n#     value: '\\x02\\x00\\x00\\x00hi\\x01\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x06\\x00\\x00\\x00prefix'\n#   },\n#   { key: 'prefix\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00', value: '\\x00' }\n# ]\n"})}),"\n",(0,i.jsx)(t.p,{children:"The first key-value is:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"key: 'STATE'\nvalue: '\\x02\\x00\\x00\\x00hi\\x01\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x06\\x00\\x00\\x00prefix'\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Since the ",(0,i.jsx)(t.code,{children:"Contract"})," has a structure ",(0,i.jsx)(t.code,{children:"string, Vector<u8>"})," the value is interpreted as:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:'[2, 0, 0, 0, "h", "i"] -> The `string` has 2 elements: "h" and "i".\n[1, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, "prefix"] -> The Vector has 1 element, and to see the values search for keys that start with (the 6 bytes prefix): "prefix"\n'})}),"\n",(0,i.jsxs)(t.p,{children:["Then, the second key-value shows the entries of the ",(0,i.jsx)(t.code,{children:"Vector"})," denoted by the ",(0,i.jsx)(t.code,{children:'"prefix"'})," string:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"key: 'prefix\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00'\nvalue: '\\x00'\n"})}),"\n",(0,i.jsx)(t.h4,{id:"modifying-the-state",children:"Modifying the State"}),"\n",(0,i.jsx)(t.p,{children:"If we modify the stored string and add a new number, the state changes accordingly:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"near call $CONTRACT change_state '{\"string\":\"bye\", \"number\":1}' --accountId $CONTRACT\n\n# Result is\n# [\n#   {\n#     key: 'STATE',\n#     value: '\\x03\\x00\\x00\\x00bye\\x02\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x06\\x00\\x00\\x00prefix'\n#   },\n#   { key: 'prefix\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00', value: '\\x00' },\n#   { key: 'prefix\\x01\\x00\\x00\\x00\\x00\\x00\\x00\\x00', value: '\\x01' }\n# ]\n"})}),"\n",(0,i.jsxs)(t.p,{children:["We can see that the ",(0,i.jsx)(t.code,{children:"STATE"})," key changes to reflect the storage of the new string (",(0,i.jsx)(t.code,{children:"bye"}),"), and that\nthe vector now has 2 elements."]}),"\n",(0,i.jsxs)(t.p,{children:["At the same time, a new key-value was added adding the new vector entry: the ",(0,i.jsx)(t.code,{children:"1u8"})," we just added."]}),"\n",(0,i.jsx)("hr",{class:"subsection"}),"\n",(0,i.jsx)(t.h3,{id:"deserialization-error",children:"Deserialization Error"}),"\n",(0,i.jsx)(t.p,{children:"When somebody invokes a smart contract method, the first step for the contract is to deserialize\nits own state."}),"\n",(0,i.jsxs)(t.p,{children:["In the example used above, the contract will start by reading the ",(0,i.jsx)(t.code,{children:"STATE"})," key and\ntry to deserialize its value into an object ",(0,i.jsx)(t.code,{children:"Contract{string: String, vector: Vector<u8>}"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["If you deploy a contract into the account with a different Contract structure, then the\ncontract will fail to deserialize the ",(0,i.jsx)(t.code,{children:"STATE"})," key and panic ",(0,i.jsx)(t.code,{children:"Cannot deserialize the contract state"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"To solve this, you can either:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Rollback to the previous contract code"}),"\n",(0,i.jsxs)(t.li,{children:["Implement a method to ",(0,i.jsx)(t.a,{href:"/develop/upgrade",children:"migrate the contract's state"})]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>a});var i=n(67294);const s={},r=i.createContext(s);function a(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);