"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[23324],{76562:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>h});var n=a(85893),s=a(11151),r=a(74866),c=a(85162),l=a(77229);const o={id:"advanced-xcc",title:"Complex Cross Contract Call"},i=void 0,u={id:"tutorials/examples/advanced-xcc",title:"Complex Cross Contract Call",description:"This example presents 3 instances of complex cross-contract calls. Particularly, it shows:",source:"@site/../docs/3.tutorials/examples/advanced-xcc.md",sourceDirName:"3.tutorials/examples",slug:"/tutorials/examples/advanced-xcc",permalink:"/tutorials/examples/advanced-xcc",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/examples/advanced-xcc.md",tags:[],version:"current",lastUpdatedBy:"Dami\xe1n Parrino",lastUpdatedAt:1712089238e3,frontMatter:{id:"advanced-xcc",title:"Complex Cross Contract Call"},sidebar:"tutorials",previous:{title:"Factory",permalink:"/tutorials/examples/factory"},next:{title:"Self Upgrade & State Migration",permalink:"/tutorials/examples/update-contract-migrate-state"}},d={},h=[{value:"Obtaining the Cross Contract Call Example",id:"obtaining-the-cross-contract-call-example",level:2},{value:"Structure of the Example",id:"structure-of-the-example",level:2},{value:"Smart Contract",id:"smart-contract",level:2},{value:"Batch Actions",id:"batch-actions",level:3},{value:"Getting the Last Response",id:"getting-the-last-response",level:4},{value:"Calling Multiple Contracts",id:"calling-multiple-contracts",level:3},{value:"Getting All Responses",id:"getting-all-responses",level:4},{value:"Multiple Calls - Same Result Type",id:"multiple-calls---same-result-type",level:3},{value:"Getting All Responses",id:"getting-all-responses-1",level:4},{value:"Testing the Contract",id:"testing-the-contract",level:3},{value:"Deploying the Contract to the NEAR network",id:"deploying-the-contract-to-the-near-network",level:3},{value:"CLI: Interacting with the Contract",id:"cli-interacting-with-the-contract",level:3}];function p(t){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.p,{children:"This example presents 3 instances of complex cross-contract calls. Particularly, it shows:"}),"\n",(0,n.jsxs)(e.ol,{children:["\n",(0,n.jsx)(e.li,{children:"How to batch multiple function calls to a same contract."}),"\n",(0,n.jsx)(e.li,{children:"How to call multiple contracts in parallel, each returning a different type."}),"\n",(0,n.jsx)(e.li,{children:"Different ways of handling the responses in the callback."}),"\n"]}),"\n",(0,n.jsx)(e.admonition,{title:"Simple Cross-Contract Calls",type:"info",children:(0,n.jsxs)(e.p,{children:["Check the tutorial on how to use ",(0,n.jsx)(e.a,{href:"/tutorials/examples/xcc",children:"simple cross-contract calls"})]})}),"\n",(0,n.jsx)(e.hr,{}),"\n",(0,n.jsx)(e.h2,{id:"obtaining-the-cross-contract-call-example",children:"Obtaining the Cross Contract Call Example"}),"\n",(0,n.jsx)(e.p,{children:"You have two options to start the Donation Example:"}),"\n",(0,n.jsxs)(e.ol,{children:["\n",(0,n.jsxs)(e.li,{children:["You can use the app through ",(0,n.jsx)(e.code,{children:"Github Codespaces"}),", which will open a web-based interactive environment."]}),"\n",(0,n.jsx)(e.li,{children:"Clone the repository locally and use it from your computer."}),"\n"]}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{children:"Codespaces"}),(0,n.jsx)(e.th,{children:"Clone locally"})]})}),(0,n.jsx)(e.tbody,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.a,{href:"https://codespaces.new/near-examples/cross-contract-calls?quickstart=1",children:(0,n.jsx)(e.img,{src:"https://github.com/codespaces/badge.svg",alt:"Open in GitHub Codespaces"})})}),(0,n.jsxs)(e.td,{children:["\ud83c\udf10 ",(0,n.jsx)(e.code,{children:"https://github.com/near-examples/cross-contract-calls"})]})]})})]}),"\n",(0,n.jsx)(e.hr,{}),"\n",(0,n.jsx)(e.h2,{id:"structure-of-the-example",children:"Structure of the Example"}),"\n",(0,n.jsx)(e.p,{children:"The smart contract is available in two flavors: Rust and JavaScript"}),"\n",(0,n.jsxs)(r.Z,{children:[(0,n.jsx)(c.Z,{value:"\ud83c\udf10 JavaScript",children:(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-bash",children:"\u250c\u2500\u2500 sandbox-ts # sandbox testing\n\u2502    \u251c\u2500\u2500 external-contracts\n\u2502    \u2502    \u251c\u2500\u2500 counter.wasm\n\u2502    \u2502    \u251c\u2500\u2500 guest-book.wasm\n\u2502    \u2502    \u2514\u2500\u2500 hello-near.wasm\n\u2502    \u2514\u2500\u2500 main.ava.ts\n\u251c\u2500\u2500 src # contract's code\n\u2502    \u251c\u2500\u2500 internal\n\u2502    \u2502    \u251c\u2500\u2500 batch_actions.ts\n\u2502    \u2502    \u251c\u2500\u2500 constants.ts\n\u2502    \u2502    \u251c\u2500\u2500 multiple_contracts.ts\n\u2502    \u2502    \u251c\u2500\u2500 similar_contracts.ts\n\u2502    \u2502    \u2514\u2500\u2500 utils.ts\n\u2502    \u2514\u2500\u2500 contract.ts\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 README.md\n\u2514\u2500\u2500 tsconfig.json\n"})})}),(0,n.jsx)(c.Z,{value:"\ud83e\udd80 Rust",children:(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-bash",children:"\u250c\u2500\u2500 tests # sandbox testing\n\u2502    \u251c\u2500\u2500 external-contracts\n\u2502    \u2502    \u251c\u2500\u2500 counter.wasm\n\u2502    \u2502    \u251c\u2500\u2500 guest-book.wasm\n\u2502    \u2502    \u2514\u2500\u2500 hello-near.wasm\n\u2502    \u2514\u2500\u2500 main.ava.ts\n\u251c\u2500\u2500 src # contract's code\n\u2502    \u251c\u2500\u2500 batch_actions.rs\n\u2502    \u251c\u2500\u2500 lib.rs\n\u2502    \u251c\u2500\u2500 multiple_contracts.rs\n\u2502    \u2514\u2500\u2500 similar_contracts.rs\n\u251c\u2500\u2500 Cargo.toml # package manager\n\u251c\u2500\u2500 README.md\n\u2514\u2500\u2500 rust-toolchain.toml\n"})})})]}),"\n",(0,n.jsx)(e.hr,{}),"\n",(0,n.jsx)(e.h2,{id:"smart-contract",children:"Smart Contract"}),"\n",(0,n.jsx)(e.h3,{id:"batch-actions",children:"Batch Actions"}),"\n",(0,n.jsxs)(e.p,{children:["You can aggregate multiple actions directed towards one same contract into a batched transaction.\nMethods called this way are executed sequentially, with the added benefit that, if one fails then\nthey ",(0,n.jsx)(e.strong,{children:"all get reverted"}),"."]}),"\n",(0,n.jsxs)(l.O2,{children:[(0,n.jsxs)(l.SQ,{value:"\ud83c\udf10 JavaScript",language:"js",children:[(0,n.jsx)(l.Ey,{fname:"contract.ts",url:"https://github.com/near-examples/cross-contract-calls/blob/main/contract-advanced-ts/src/contract.ts",start:"37",end:"40"}),(0,n.jsx)(l.Ey,{fname:"batch_actions.ts",url:"https://github.com/near-examples/cross-contract-calls/blob/main/contract-advanced-ts/src/internal/batch_actions.ts",start:"5",end:"17"})]}),(0,n.jsx)(l.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:(0,n.jsx)(l.Ey,{fname:"batch_actions.rs",url:"https://github.com/near-examples/cross-contract-calls/blob/main/contract-advanced-rs/src/batch_actions.rs",start:"7",end:"19"})})]}),"\n",(0,n.jsx)(e.h4,{id:"getting-the-last-response",children:"Getting the Last Response"}),"\n",(0,n.jsxs)(e.p,{children:["In this case, the callback has access to the value returned by the ",(0,n.jsx)(e.strong,{children:"last\naction"})," from the chain."]}),"\n",(0,n.jsxs)(l.O2,{children:[(0,n.jsxs)(l.SQ,{value:"\ud83c\udf10 JavaScript",language:"js",children:[(0,n.jsx)(l.Ey,{fname:"contract.ts",url:"https://github.com/near-examples/cross-contract-calls/blob/main/contract-advanced-ts/src/contract.ts",start:"42",end:"45"}),(0,n.jsx)(l.Ey,{fname:"batch_actions.ts",url:"https://github.com/near-examples/cross-contract-calls/blob/main/contract-advanced-ts/src/internal/batch_actions.ts",start:"19",end:"29"}),(0,n.jsx)(l.Ey,{fname:"utils.ts",url:"https://github.com/near-examples/cross-contract-calls/blob/main/contract-advanced-ts/src/internal/utils.ts",start:"3",end:"20"})]}),(0,n.jsx)(l.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:(0,n.jsx)(l.Ey,{fname:"batch_actions.rs",url:"https://github.com/near-examples/cross-contract-calls/blob/main/contract-advanced-rs/src/batch_actions.rs",start:"21",end:"34"})})]}),"\n",(0,n.jsx)(e.hr,{}),"\n",(0,n.jsx)(e.h3,{id:"calling-multiple-contracts",children:"Calling Multiple Contracts"}),"\n",(0,n.jsxs)(e.p,{children:["A contract can call multiple other contracts. This creates multiple transactions that execute\nall in parallel. If one of them fails the rest ",(0,n.jsx)(e.strong,{children:"ARE NOT REVERTED"}),"."]}),"\n",(0,n.jsxs)(l.O2,{children:[(0,n.jsxs)(l.SQ,{value:"\ud83c\udf10 JavaScript",language:"js",children:[(0,n.jsx)(l.Ey,{fname:"contract.ts",url:"https://github.com/near-examples/cross-contract-calls/blob/main/contract-advanced-ts/src/contract.ts",start:"47",end:"50"}),(0,n.jsx)(l.Ey,{fname:"multiple_contracts.ts",url:"https://github.com/near-examples/cross-contract-calls/blob/main/contract-advanced-ts/src/internal/multiple_contracts.ts",start:"6",end:"21"})]}),(0,n.jsx)(l.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:(0,n.jsx)(l.Ey,{fname:"multiple_contracts.rs",url:"https://github.com/near-examples/cross-contract-calls/blob/main/contract-advanced-rs/src/multiple_contracts.rs",start:"18",end:"56"})})]}),"\n",(0,n.jsx)(e.h4,{id:"getting-all-responses",children:"Getting All Responses"}),"\n",(0,n.jsxs)(e.p,{children:["In this case, the callback has access to an ",(0,n.jsx)(e.strong,{children:"array of responses"}),", which have either the\nvalue returned by each call, or an error message."]}),"\n",(0,n.jsxs)(l.O2,{children:[(0,n.jsxs)(l.SQ,{value:"\ud83c\udf10 JavaScript",language:"js",children:[(0,n.jsx)(l.Ey,{fname:"contract.ts",url:"https://github.com/near-examples/cross-contract-calls/blob/main/contract-advanced-ts/src/contract.ts",start:"52",end:"55"}),(0,n.jsx)(l.Ey,{fname:"multiple_contracts.ts",url:"https://github.com/near-examples/cross-contract-calls/blob/main/contract-advanced-ts/src/internal/multiple_contracts.ts",start:"24",end:"41"}),(0,n.jsx)(l.Ey,{fname:"utils.ts",url:"https://github.com/near-examples/cross-contract-calls/blob/main/contract-advanced-ts/src/internal/utils.ts",start:"3",end:"20"})]}),(0,n.jsx)(l.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:(0,n.jsx)(l.Ey,{fname:"multiple_contracts.rs",url:"https://github.com/near-examples/cross-contract-calls/blob/main/contract-advanced-rs/src/multiple_contracts.rs",start:"58",end:"92"})})]}),"\n",(0,n.jsx)(e.hr,{}),"\n",(0,n.jsx)(e.h3,{id:"multiple-calls---same-result-type",children:"Multiple Calls - Same Result Type"}),"\n",(0,n.jsxs)(e.p,{children:["This example is a particular case of the previous one (",(0,n.jsx)(e.a,{href:"#2-calling-multiple-contracts",children:"Calling Multiple Contracts"}),").\nIt simply showcases a different way to check the results by directly accessing the ",(0,n.jsx)(e.code,{children:"promise_result"})," array."]}),"\n",(0,n.jsx)(e.p,{children:"In this case, we call multiple contracts that will return the same type:"}),"\n",(0,n.jsxs)(l.O2,{children:[(0,n.jsxs)(l.SQ,{value:"\ud83c\udf10 JavaScript",language:"js",children:[(0,n.jsx)(l.Ey,{fname:"contract.ts",url:"https://github.com/near-examples/cross-contract-calls/blob/main/contract-advanced-ts/src/contract.ts",start:"57",end:"60"}),(0,n.jsx)(l.Ey,{fname:"similar_contracts.ts",url:"https://github.com/near-examples/cross-contract-calls/blob/main/contract-advanced-ts/src/internal/similar_contracts.ts",start:"6",end:"35"})]}),(0,n.jsx)(l.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:(0,n.jsx)(l.Ey,{fname:"similar_contracts.rs",url:"https://github.com/near-examples/cross-contract-calls/blob/main/contract-advanced-rs/src/similar_contracts.rs",start:"7",end:"30"})})]}),"\n",(0,n.jsx)(e.h4,{id:"getting-all-responses-1",children:"Getting All Responses"}),"\n",(0,n.jsxs)(e.p,{children:["In this case, the callback again has access to an ",(0,n.jsx)(e.strong,{children:"array of responses"}),", which we can iterate checking the\nresults."]}),"\n",(0,n.jsxs)(l.O2,{children:[(0,n.jsxs)(l.SQ,{value:"\ud83c\udf10 JavaScript",language:"js",children:[(0,n.jsx)(l.Ey,{fname:"contract.ts",url:"https://github.com/near-examples/cross-contract-calls/blob/main/contract-advanced-ts/src/contract.ts",start:"62",end:"65"}),(0,n.jsx)(l.Ey,{fname:"similar_contracts.ts",url:"https://github.com/near-examples/cross-contract-calls/blob/main/contract-advanced-ts/src/internal/similar_contracts.ts",start:"37",end:"54"}),(0,n.jsx)(l.Ey,{fname:"utils.ts",url:"https://github.com/near-examples/cross-contract-calls/blob/main/contract-advanced-ts/src/internal/utils.ts",start:"3",end:"20"})]}),(0,n.jsx)(l.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:(0,n.jsx)(l.Ey,{fname:"similar_contracts.rs",url:"https://github.com/near-examples/cross-contract-calls/blob/main/contract-advanced-rs/src/similar_contracts.rs",start:"32",end:"57"})})]}),"\n",(0,n.jsx)(e.hr,{}),"\n",(0,n.jsx)(e.h3,{id:"testing-the-contract",children:"Testing the Contract"}),"\n",(0,n.jsx)(e.p,{children:"The contract readily includes a set of unit and sandbox testing to validate its functionality. To execute the tests, run the following commands:"}),"\n",(0,n.jsxs)(r.Z,{children:[(0,n.jsx)(c.Z,{value:"\ud83c\udf10 JavaScript",children:(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-bash",children:"cd contract-advanced-ts\nyarn\nyarn test\n"})})}),(0,n.jsx)(c.Z,{value:"\ud83e\udd80 Rust",children:(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-bash",children:"cd contract-advanced-rs\ncargo test\n"})})})]}),"\n",(0,n.jsx)(e.admonition,{type:"tip",children:(0,n.jsxs)(e.p,{children:["The ",(0,n.jsx)(e.code,{children:"integration tests"})," use a sandbox to create NEAR users and simulate interactions with the contract."]})}),"\n",(0,n.jsx)("hr",{class:"subsection"}),"\n",(0,n.jsx)(e.h3,{id:"deploying-the-contract-to-the-near-network",children:"Deploying the Contract to the NEAR network"}),"\n",(0,n.jsxs)(e.p,{children:["In order to deploy the contract you will need to ",(0,n.jsx)(e.a,{href:"/develop/contracts/quickstart#create-a-testnet-account",children:"create a NEAR account"}),"."]}),"\n",(0,n.jsxs)(r.Z,{children:[(0,n.jsx)(c.Z,{value:"\ud83c\udf10 JavaScript",children:(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-bash",children:'# Optional - create an account\nnear create-account <accountId> --useFaucet\n\n# Deploy the contract\ncd contract-advanced-ts\nyarn build\nnear deploy <accountId> ./build/cross_contract.wasm --initFunction init --initArgs \'{"hello_account":"hello.near-example.testnet","guestbook_account":"guestbook_account.near-example.testnet","counter_account":"counter_account.near-example.testnet"}\'\n'})})}),(0,n.jsx)(c.Z,{value:"\ud83e\udd80 Rust",children:(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-bash",children:'# Optional - create an account\nnear create-account <accountId> --useFaucet\n\n# Deploy the contract\ncd contract-advanced-rs\ncargo near build\n\n# During deploying pass {"hello_account":"hello.near-example.testnet","guestbook_account":"guestbook_account.near-example.testnet","counter_account":"counter_account.near-example.testnet"} as init arguments\ncargo near deploy <accountId>\n'})})})]}),"\n",(0,n.jsx)("hr",{class:"subsection"}),"\n",(0,n.jsx)(e.h3,{id:"cli-interacting-with-the-contract",children:"CLI: Interacting with the Contract"}),"\n",(0,n.jsx)(e.p,{children:"To interact with the contract through the console, you can use the following commands:"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-bash",children:"# Execute contracts sequentially\n# Replace <accountId> with your account ID\nnear call <accountId> batch_actions --accountId <accountId> --gas 300000000000000   \n\n# Execute contracts in parallel\n# Replace <accountId> with your account ID\nnear call <accountId>  multiple_contracts --accountId <accountId> --gas 300000000000000   \n\n# Execute multiple instances of the same contract in parallel\n# Replace <accountId> with your account ID\nnear call <accountId> similar_contracts --accountId <accountId> --gas 300000000000000   \n"})}),"\n",(0,n.jsx)(e.admonition,{title:"Note",type:"info",children:(0,n.jsxs)(e.p,{children:["If the contract exceeds the execution time, additional gas must be provided. For further details ",(0,n.jsx)(e.a,{href:"/develop/contracts/environment/#gas",children:"click here"}),"."]})}),"\n",(0,n.jsxs)(e.admonition,{title:"Versioning for this article",type:"note",children:[(0,n.jsx)(e.p,{children:"At the time of this writing, this example works with the following versions:"}),(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:["near-cli: ",(0,n.jsx)(e.code,{children:"4.0.13"})]}),"\n",(0,n.jsxs)(e.li,{children:["node: ",(0,n.jsx)(e.code,{children:"18.19.1"})]}),"\n",(0,n.jsxs)(e.li,{children:["rustc: ",(0,n.jsx)(e.code,{children:"1.77.0"})]}),"\n"]})]})]})}function m(t={}){const{wrapper:e}={...(0,s.a)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(p,{...t})}):p(t)}},85162:(t,e,a)=>{a.d(e,{Z:()=>c});a(67294);var n=a(36905);const s={tabItem:"tabItem_Ymn6"};var r=a(85893);function c(t){var e=t.children,a=t.hidden,c=t.className;return(0,r.jsx)("div",{role:"tabpanel",className:(0,n.Z)(s.tabItem,c),hidden:a,children:e})}},74866:(t,e,a)=>{a.d(e,{Z:()=>w});var n=a(67294),s=a(36905),r=a(12466),c=a(16550),l=a(20469),o=a(91980),i=a(67392),u=a(50012);function d(t){var e,a;return null!=(e=null==(a=n.Children.toArray(t).filter((function(t){return"\n"!==t})).map((function(t){if(!t||(0,n.isValidElement)(t)&&((e=t.props)&&"object"==typeof e&&"value"in e))return t;var e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:a.filter(Boolean))?e:[]}function h(t){var e=t.values,a=t.children;return(0,n.useMemo)((function(){var t=null!=e?e:function(t){return d(t).map((function(t){var e=t.props;return{value:e.value,label:e.label,attributes:e.attributes,default:e.default}}))}(a);return function(t){var e=(0,i.l)(t,(function(t,e){return t.value===e.value}));if(e.length>0)throw new Error('Docusaurus error: Duplicate values "'+e.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(t),t}),[e,a])}function p(t){var e=t.value;return t.tabValues.some((function(t){return t.value===e}))}function m(t){var e=t.queryString,a=void 0!==e&&e,s=t.groupId,r=(0,c.k6)(),l=function(t){var e=t.queryString,a=void 0!==e&&e,n=t.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:a,groupId:s});return[(0,o._X)(l),(0,n.useCallback)((function(t){if(l){var e=new URLSearchParams(r.location.search);e.set(l,t),r.replace(Object.assign({},r.location,{search:e.toString()}))}}),[l,r])]}function x(t){var e,a,s,r,c=t.defaultValue,o=t.queryString,i=void 0!==o&&o,d=t.groupId,x=h(t),g=(0,n.useState)((function(){return function(t){var e,a=t.defaultValue,n=t.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!p({value:a,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+n.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var s=null!=(e=n.find((function(t){return t.default})))?e:n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:c,tabValues:x})})),b=g[0],v=g[1],j=m({queryString:i,groupId:d}),f=j[0],y=j[1],w=(e=function(t){return t?"docusaurus.tab."+t:null}({groupId:d}.groupId),a=(0,u.Nk)(e),s=a[0],r=a[1],[s,(0,n.useCallback)((function(t){e&&r.set(t)}),[e,r])]),C=w[0],E=w[1],_=function(){var t=null!=f?f:C;return p({value:t,tabValues:x})?t:null}();return(0,l.Z)((function(){_&&v(_)}),[_]),{selectedValue:b,selectValue:(0,n.useCallback)((function(t){if(!p({value:t,tabValues:x}))throw new Error("Can't select invalid tab value="+t);v(t),y(t),E(t)}),[y,E,x]),tabValues:x}}var g=a(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=a(85893);function j(t){var e=t.className,a=t.block,n=t.selectedValue,c=t.selectValue,l=t.tabValues,o=[],i=(0,r.o5)().blockElementScrollPositionUntilNextRender,u=function(t){var e=t.currentTarget,a=o.indexOf(e),s=l[a].value;s!==n&&(i(e),c(s))},d=function(t){var e,a=null;switch(t.key){case"Enter":u(t);break;case"ArrowRight":var n,s=o.indexOf(t.currentTarget)+1;a=null!=(n=o[s])?n:o[0];break;case"ArrowLeft":var r,c=o.indexOf(t.currentTarget)-1;a=null!=(r=o[c])?r:o[o.length-1]}null==(e=a)||e.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},e),children:l.map((function(t){var e=t.value,a=t.label,r=t.attributes;return(0,v.jsx)("li",Object.assign({role:"tab",tabIndex:n===e?0:-1,"aria-selected":n===e,ref:function(t){return o.push(t)},onKeyDown:d,onClick:u},r,{className:(0,s.Z)("tabs__item",b.tabItem,null==r?void 0:r.className,{"tabs__item--active":n===e}),children:null!=a?a:e}),e)}))})}function f(t){var e=t.lazy,a=t.children,s=t.selectedValue,r=(Array.isArray(a)?a:[a]).filter(Boolean);if(e){var c=r.find((function(t){return t.props.value===s}));return c?(0,n.cloneElement)(c,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:r.map((function(t,e){return(0,n.cloneElement)(t,{key:e,hidden:t.props.value!==s})}))})}function y(t){var e=x(t);return(0,v.jsxs)("div",{className:(0,s.Z)("tabs-container",b.tabList),children:[(0,v.jsx)(j,Object.assign({},t,e)),(0,v.jsx)(f,Object.assign({},t,e))]})}function w(t){var e=(0,g.Z)();return(0,v.jsx)(y,Object.assign({},t,{children:d(t.children)}),String(e))}},77229:(t,e,a)=>{a.d(e,{Ey:()=>u,O2:()=>o,SQ:()=>i});a(67294);var n=a(74866),s=a(85162),r=a(95665),c=a.n(r),l=a(85893);function o(t){var e=t.children;return Array.isArray(e)||(e=[e]),(0,l.jsx)(n.Z,{className:"language-tabs",groupId:"code-tabs",children:e.map((function(t,e){return(0,l.jsx)(s.Z,{value:t.props.value,label:t.props.value,children:t})}))})}function i(t){var e=t.children,a=t.language;return Array.isArray(e)||(e=[e]),e=e.map((function(t){return function(t,e){var a=t.props,n=(a.children,a.url),s=a.start,r=a.end,c=a.fname;if(t.type===u)return u({url:n,start:s,end:r,language:e,fname:c});return t}(t,a)})),1==e.length?(0,l.jsx)(s.Z,{value:0,label:e[0].props.fname,children:e[0]}):(0,l.jsx)(n.Z,{className:"file-tabs",children:e.map((function(t,e){return(0,l.jsx)(s.Z,{value:e,label:t.props.fname,children:t})}))})}function u(t){var e=t.url,a=t.start,n=t.end,s=t.language,r=t.fname,o=e+"#";return a&&n&&(o+="L"+a+"-L"+n+"#"),(0,l.jsx)(c(),{language:s,fname:r,children:o})}}}]);