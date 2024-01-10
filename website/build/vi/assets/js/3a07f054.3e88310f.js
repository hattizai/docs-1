"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6654],{8396:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var a=t(85893),o=t(11151);const s={id:"tech",title:"Technical Documentation"},i=void 0,r={id:"social/tech",title:"Technical Documentation",description:"This document goes into technical details of the Near Social.",source:"@site/../docs/social/tech.md",sourceDirName:"social",slug:"/social/tech",permalink:"/vi/social/tech",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/social/tech.md",tags:[],version:"current",lastUpdatedBy:"gagdiez",lastUpdatedAt:1702155614,formattedLastUpdatedAt:"9 thg 12, 2023",frontMatter:{id:"tech",title:"Technical Documentation"}},l={},c=[{value:"SocialDB",id:"socialdb",level:2},{value:"Data organization",id:"data-organization",level:3},{value:"An empty string key case",id:"an-empty-string-key-case",level:4},{value:"Accounts and storage",id:"accounts-and-storage",level:3},{value:"Permissions",id:"permissions",level:3},{value:"SocialDB API",id:"socialdb-api",level:3},{value:"Storing data",id:"storing-data",level:4},{value:"Reading data",id:"reading-data",level:4},{value:"Reading keys",id:"reading-keys",level:4},{value:"Near Social",id:"near-social",level:2},{value:"Near Social VM",id:"near-social-vm",level:3},{value:"Preparing input",id:"preparing-input",level:4},{value:"Fetching data",id:"fetching-data",level:4},{value:"Processing data",id:"processing-data",level:4},{value:"Rendering",id:"rendering",level:4},{value:"Component&#39;s state",id:"components-state",level:3},{value:"Controlled components",id:"controlled-components",level:4},{value:"Caching data processing",id:"caching-data-processing",level:4},{value:"Committing data",id:"committing-data",level:3}];function d(e){const n={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["This document goes into technical details of the Near Social.",(0,a.jsx)(n.br,{}),"\n","I recommend reading ",(0,a.jsx)(n.a,{href:"https://thewiki.near.page/PastPresentAndFutureOfNearSocial",children:"The Past, Present, and Future of Near Social"})," first."]}),"\n",(0,a.jsx)(n.h2,{id:"socialdb",children:"SocialDB"}),"\n",(0,a.jsx)(n.p,{children:"The contract is deployed at the following accounts:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["NEAR mainnet: ",(0,a.jsx)(n.code,{children:"social.near"})]}),"\n",(0,a.jsxs)(n.li,{children:["NEAR testnet: ",(0,a.jsx)(n.code,{children:"v1.social08.testnet"})]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Source code: ",(0,a.jsx)(n.a,{href:"https://github.com/NearSocial/social-db",children:"social-db"})]}),"\n",(0,a.jsx)(n.h3,{id:"data-organization",children:"Data organization"}),"\n",(0,a.jsxs)(n.p,{children:["Internally, the contract organizes the data using a tree structure.\nEach node in a tree is represented as a ",(0,a.jsx)(n.code,{children:"VNode"})," structure (upgradable ",(0,a.jsx)(n.code,{children:"Node"}),").\nNodes are stored in a ",(0,a.jsx)(n.code,{children:"LookupMap"})," with the key being a ",(0,a.jsx)(n.code,{children:"NodeId (u32)"}),".\nThe root node has the index ",(0,a.jsx)(n.code,{children:"0"})," and stored separately in the contract state."]}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"Node"})," structure contains the following fields:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"block_height"})," - the block height when the node was last modified"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"children"})," - an unordered iterable key-value map."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Keys in the ",(0,a.jsx)(n.code,{children:"children"})," map are strings, with the following restrictions:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["only the following characters are allowed: ",(0,a.jsx)(n.code,{children:"a-z"}),", ",(0,a.jsx)(n.code,{children:"A-Z"}),", ",(0,a.jsx)(n.code,{children:"0-9"}),", ",(0,a.jsx)(n.code,{children:"-"}),", ",(0,a.jsx)(n.code,{children:"_"}),", ",(0,a.jsx)(n.code,{children:"."})]}),"\n",(0,a.jsx)(n.li,{children:"the key must be at most 256 character long"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"The value is a node index, a string value, or deleted value.\nBoth string value and deleted values additionally store the block height when the value was last modified.\nThe value for an empty string key can't be a node index. It's a special case which will be described later."}),"\n",(0,a.jsx)(n.p,{children:"Children of the root node are the account IDs of the users, the values are always a node index."}),"\n",(0,a.jsx)(n.h4,{id:"an-empty-string-key-case",children:"An empty string key case"}),"\n",(0,a.jsx)(n.p,{children:"When data object is being added by a user, new non-existing nodes are added to the tree.\nBut what if a leaf value was originally string? For example, we have the following data:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "alex.near": {\n    "profile": {\n      "name": "Alex"\n    }\n  }\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["User calls ",(0,a.jsx)(n.code,{children:"set"})," method and wants to add the following data:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "alex.near": {\n    "profile": {\n      "name": {\n        "foo": "bar"\n      }\n    }\n  }\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["In this case the value for the key ",(0,a.jsx)(n.code,{children:"name"})," will be transformed to a node, and the previous value will be moved to an empty key under this node:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "alex.near": {\n    "profile": {\n      "name": {\n        "": "Alex",\n        "foo": "bar"\n      }\n    }\n  }\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"This creates extra complexity in the implementation, but it allows the contract to maintain data without deletion of old values.\nBut more importantly it allows users to store values for keys that are already a node without losing the node index. For example, a user stores image as an object:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "alex.near": {\n    "profile": {\n      "image": {\n        "url": "foo://bar",\n        "nft": {\n          "contract": "nft.near",\n          "token_id": "1"\n        }\n      }\n    }\n  }\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Then the user wants to store image as a serialized value, they call ",(0,a.jsx)(n.code,{children:"set"})," method with the following data:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "alex.near": {\n    "profile": {\n      "image": "{ \\"url\\": \\"foo://bar\\" }"\n    }\n  }\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Since the value for the key ",(0,a.jsx)(n.code,{children:"image"})," is already a node, the value will be stored under the empty string key:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "alex.near": {\n    "profile": {\n      "image": {\n        "": "{ \\"url\\": \\"foo://bar\\" }",\n        "url": "foo://bar",\n        "nft": {\n          "contract": "nft.near",\n          "token_id": "1"\n        }\n      }\n    }\n  }\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"If we wouldn't store the values under the empty string key, the contract would have to delete the index to a node or fail the transaction.\nBoth situations are undesirable."}),"\n",(0,a.jsx)(n.h3,{id:"accounts-and-storage",children:"Accounts and storage"}),"\n",(0,a.jsxs)(n.p,{children:["The contract stores account information separately from the data.\nEach account is represented as a ",(0,a.jsx)(n.code,{children:"VAccount"})," structure (upgradable ",(0,a.jsx)(n.code,{children:"Account"}),").\nAccounts are stored in a ",(0,a.jsx)(n.code,{children:"LookupMap"})," with the key being a ",(0,a.jsx)(n.code,{children:"NodeId (u32)"})," matching the node index from the Root node."]}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"Account"})," structure contains the following fields:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"storage_balance"})," - the amount of storage tokens attached to the account"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"used_bytes"})," - the number of bytes used by the account for storing data and account information"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"permissions"})," - an iterable map of permissions for the account"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Users have to cover the storage costs for the data they store.\nIf they override the data, they only have to pay for the extra bytes that were added.\nWhen they delete the data, they get the storage deposit back for the amount of released bytes.\nAnd users then can reuse that deposit for new data or withdraw it from the contract."}),"\n",(0,a.jsx)(n.h3,{id:"permissions",children:"Permissions"}),"\n",(0,a.jsx)(n.p,{children:"SocialDB contract allows users to grant permissions to other accounts or other public keys to write into their data.\nThe permissions are stored in the contract state, and they are used to validate the write access.\nBy default, the SocialDB contract requires a payment of at least one yoctoNEAR to write into the data.\nIt prevents simple user's mistakes for adding an access key to the SocialDB contract by a random application, which would allow an application to write into any field of the user's data.\nSo instead the application should either request a permission from the user to whitelist their limited access key for a particular sub-tree of the user's data, or request a confirmation from the user to sign a transaction through the wallet every time."}),"\n",(0,a.jsx)(n.p,{children:"Another type permission is to give write access to another account.\nThis should be used to give permission to other smart contracts to write into the user's data.\nFor example, a NFT marketplace smart contract that allows users to post an update on a newly minted NFT.\nOr a social network smart contract that allows users to create a new edge in their social graph."}),"\n",(0,a.jsx)(n.h3,{id:"socialdb-api",children:"SocialDB API"}),"\n",(0,a.jsxs)(n.p,{children:["The SocialDB contract implements three data methods: ",(0,a.jsx)(n.code,{children:"get"}),", ",(0,a.jsx)(n.code,{children:"set"})," and ",(0,a.jsx)(n.code,{children:"keys"}),".\nIt also has methods for working with permissions, see ",(0,a.jsx)(n.a,{href:"https://github.com/NearSocial/social-db#permissions",children:"SocialDB README"})," for details."]}),"\n",(0,a.jsx)(n.h4,{id:"storing-data",children:"Storing data"}),"\n",(0,a.jsx)(n.p,{children:"The top level keys of the objects should be account IDs under which the data is stored. Those accounts are covering storage for the underlying data."}),"\n",(0,a.jsx)(n.p,{children:"The predecessor_id or the signer public key should have permission to write under those keys.\nIf the predecessor_id matches the top level key, then it can write any data under that key, as long as it has a permission or at least 1 yoctoNEAR is attached."}),"\n",(0,a.jsx)(n.p,{children:"The attached deposit will be transferred to the first key. If the account doesn't exist, it will be created (the predecessor_id should match)."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-rust",children:"#[payable]\npub fn set(&mut self, data: Value);\n"})}),"\n",(0,a.jsx)(n.p,{children:"Arguments:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"data"})," is an object to store. The leaf values should be strings or null values. String values will be added, while null values will be deleted."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Examples:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'set({\n  data: {\n    "alex.near": {\n      "profile": {\n        "name": "Alex",\n        "image": {\n          "url": "https://gkfjklgdfjkldfg"\n        }\n      },\n    }\n  }\n})\n\nset({\n  data: {\n    "alex.near": {\n      "graph": {\n        "follow": {\n          "root.near": "",\n          "bob.near": "",\n        }\n      }\n    }\n  }\n})\n'})}),"\n",(0,a.jsx)(n.h4,{id:"reading-data",children:"Reading data"}),"\n",(0,a.jsx)(n.p,{children:"Returns the data for a list of given key patterns.\nIt takes one or more path patterns as arguments, and returns the matching data.\nThe path pattern is a string that can contain wildcards.\nFor example:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"alice.near/profile/**"})," will match the entire profile data of account ",(0,a.jsx)(n.code,{children:"alice.near"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"alice.near/profile/*"})," will match all the fields of the profile, but not the nested objects."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"alice.near/profile/name"})," will match only the name field of the profile."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"*/widget/*"})," will match all the components of all the accounts."]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-rust",children:"pub struct GetOptions {\n    pub with_block_height: Option<bool>,\n    pub with_node_id: Option<bool>,\n    pub return_deleted: Option<bool>,\n}\n\npub fn get(self, keys: Vec<String>, options: Option<GetOptions>) -> Value;\n"})}),"\n",(0,a.jsx)(n.p,{children:"Arguments:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"keys"})," - an array of key patterns to return."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"options"})," - optional argument to specify options."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Options:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"with_block_height"})," - if true, for every value and a node will add the block height of the data with the key ",(0,a.jsx)(n.code,{children:":block"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"with_node_id"})," - if true, for every node will add the node index with the key ",(0,a.jsx)(n.code,{children:":node"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"return_deleted"})," - if true, will include deleted keys with the value ",(0,a.jsx)(n.code,{children:"null"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Returns the aggregated JSON object."}),"\n",(0,a.jsx)(n.p,{children:"Examples:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'get({keys: ["alex.near/profile/name"]})\n\nget({keys: ["alex.near/profile/name", "root.near/profile/name"]})\n\nget({keys: ["alex.near/profile/name", "alex.near/profile/description"]})\n\nget({keys: ["alex.near/profile/tags/*"]})\n\nget({keys: ["alex.near/profile/**"]})\n\nget({keys: ["*/widget/*"]})\n\nget({keys: ["alex.near/profile/tags/*"], options: {return_deleted: true}})\n'})}),"\n",(0,a.jsx)(n.h4,{id:"reading-keys",children:"Reading keys"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"keys"})," method allows to get the list of keys that match the path pattern.\nIt's useful for querying the data without reading values.\nIt also has an additional ",(0,a.jsx)(n.code,{children:"options"})," field that can be used to specify the return type and whether to return deleted keys.\nFor example:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"alice.near/profile/*"})," will return the list of all the fields of the profile, but not the nested objects."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"*/profile/image/nft"})," will return the list of all the accounts that have an NFT image in their profile."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"alice.near/widget/*"})," with ",(0,a.jsx)(n.code,{children:"return_deleted"})," option will return the list of all the component names of the account, including the deleted ones."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"alice.near/widget/*"})," with ",(0,a.jsx)(n.code,{children:"return_type"})," equal to ",(0,a.jsx)(n.code,{children:"BlockHeight"})," will return the list of all the component names of the account and the value will be the block height when the widget was last updated."]}),"\n",(0,a.jsxs)(n.li,{children:["Note ",(0,a.jsx)(n.code,{children:"**"})," is not supported by the ",(0,a.jsx)(n.code,{children:"keys"})," method."]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-rust",children:"pub enum KeysReturnType {\n    True,\n    BlockHeight,\n    NodeId,\n}\n\npub struct KeysOptions {\n    pub return_type: Option<KeysReturnType>,\n    pub return_deleted: Option<bool>,\n}\n\npub fn keys(self, keys: Vec<String>, options: Option<KeysOptions>) -> Value;\n"})}),"\n",(0,a.jsx)(n.p,{children:"Arguments:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"keys"})," - an array of key patterns to return."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"options"})," - optional argument to specify options."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Options:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"return_type"})," - if ",(0,a.jsx)(n.code,{children:"BlockHeight"}),", will return the block height of the key instead of ",(0,a.jsx)(n.code,{children:"true"}),", if ",(0,a.jsx)(n.code,{children:"NodeId"}),", will return the node index of the key instead of ",(0,a.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"return_deleted"})," - if true, will include deleted keys."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Returns the aggregated JSON object."}),"\n",(0,a.jsx)(n.p,{children:"Examples:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'keys({keys: ["alex.near/profile/*"]})\n\nkeys({keys: ["*/profile/image/nft"]})\n\nkeys({keys: ["alex.near/widget/*"], options: {return_deleted: true}})\n\nkeys({keys: ["alex.near/widget/*"], options: {return_type: "BlockHeight"}})\n'})}),"\n",(0,a.jsx)(n.h2,{id:"near-social",children:"Near Social"}),"\n",(0,a.jsxs)(n.p,{children:["Now as you are familiar with the SocialDB contract, let's dive into ",(0,a.jsx)(n.a,{href:"https://near.social",children:"near.social"})]}),"\n",(0,a.jsx)(n.h3,{id:"near-social-vm",children:"Near Social VM"}),"\n",(0,a.jsx)(n.p,{children:"The Near Social VM is a virtual machine that executes the components' code.\nIt's a sandboxed environment that allows to render components in a secure way."}),"\n",(0,a.jsxs)(n.p,{children:["I highly recommend getting yourself familiar with ",(0,a.jsx)(n.a,{href:"https://reactjs.org/",children:"ReactJS"})," and go through the ",(0,a.jsx)(n.a,{href:"https://reactjs.org/tutorial/tutorial.html",children:"React tutorial"}),".\nIt will help you to understand how to use components better."]}),"\n",(0,a.jsx)(n.p,{children:"Components are like a React functional components, but with omitted function declaration.\nFor example, in a React you would write:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"function MyComponent(props) {\n  return <div>Hello, {props.username}!</div>;\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"But in the Near Social VM you only need to write the body of the function:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"return <div>Hello, {props.username}!</div>;\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Note, components are executed in a synchronous way, and the VM doesn't support await/async operations.\nInstead, async operations like ",(0,a.jsx)(n.code,{children:"fetch"})," or ",(0,a.jsx)(n.code,{children:"Social.get"})," are internally handled by the VM, and the VM updates the component's state when the operation is finished.\nIt's similar to use React's ",(0,a.jsx)(n.code,{children:"useEffect"})," combined with ",(0,a.jsx)(n.code,{children:"useState"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"A common read-only component consists of the following parts:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Preparing input"}),". E.g. taking data from passed in properties or getting it from the context (e.g. the signed in account ID)."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Fetching data"}),". E.g. fetching the data from the SocialDB contract."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Processing data"}),". E.g. filtering the data, sorting it, etc."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Rendering"}),". E.g. rendering the data using React components."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Not all components have to fetch data from the SocialDB contract. Some components can be completely static. Let's dive into each part."}),"\n",(0,a.jsx)(n.h4,{id:"preparing-input",children:"Preparing input"}),"\n",(0,a.jsxs)(n.p,{children:["Similar to a React component, the component receives the input in the object ",(0,a.jsx)(n.code,{children:"props"}),".\nIf the component is a child of another component, the parent component can pass the data to the child component.\nThe props can contain: data, functions or React components.\nThe data will be a copy of the data passed to the component, so if the component changes the data, it won't affect the parent component."]}),"\n",(0,a.jsxs)(n.p,{children:["Another object that is available to the component is ",(0,a.jsx)(n.code,{children:"context"}),".\nCurrently, it only contains a single field ",(0,a.jsx)(n.code,{children:"accountId"})," that contains the account ID of the signed-in user or ",(0,a.jsx)(n.code,{children:"undefined"})," otherwise."]}),"\n",(0,a.jsx)(n.p,{children:"A common example preparing the input is the following:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"const accountId = props.accountId ?? context.accountId;\n"})}),"\n",(0,a.jsx)(n.h4,{id:"fetching-data",children:"Fetching data"}),"\n",(0,a.jsx)(n.p,{children:"See Near Social VM APIs section for the list of available APIs."}),"\n",(0,a.jsx)(n.p,{children:"Since the VM is synchronous, you should schedule all data that you need to fetch before processing it.\nThis will issue all promises in parallel and will update rerender the component whenever any of the promises is resolved."}),"\n",(0,a.jsxs)(n.p,{children:["You can build a component that either fetches the data or renders the given data.\nFor example, we want to fetch the profile for the ",(0,a.jsx)(n.code,{children:"accountId"})," or use the given ",(0,a.jsx)(n.code,{children:"profile"})," if it's passed in the props."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'const profile = props.profile ?? Social.getr(`${accountId}/profile`);\n\nif (profile === null) {\n  return "Loading...";\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Comparing to the React components, ",(0,a.jsx)(n.code,{children:"Social.getr"})," is not a hook, so you can return the value from the component at any time.\nEven if you have more fetches after this."]}),"\n",(0,a.jsxs)(n.p,{children:["The value returned by ",(0,a.jsx)(n.code,{children:"Social.getr"})," will be globally cached for the duration of the web session, and it's also cached by the component's VM.\nSo if you call ",(0,a.jsx)(n.code,{children:"Social.getr"})," multiple times with the same key, it will return the same value immediately."]}),"\n",(0,a.jsx)(n.h4,{id:"processing-data",children:"Processing data"}),"\n",(0,a.jsxs)(n.p,{children:["Now you have the ",(0,a.jsx)(n.code,{children:"profile"})," object fetched. Sometimes you need to process the data or just extract some data."]}),"\n",(0,a.jsx)(n.p,{children:"For example, we want to get the name and extract the list of tags from the profile:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'const name = profile.name || "No-name profile";\nconst tags = Object.keys(profile.tags ?? {});\n'})}),"\n",(0,a.jsxs)(n.p,{children:["If the data processing is expensive, you can wrap it in a function and call it only when the data is changed or cache it in the ",(0,a.jsx)(n.code,{children:"state"}),". We'll discuss it later."]}),"\n",(0,a.jsx)(n.h4,{id:"rendering",children:"Rendering"}),"\n",(0,a.jsxs)(n.p,{children:["Now you have the data ready to be rendered.\nYou can use most React components to render the data.\nBut also you can embed other components.\n",(0,a.jsx)(n.a,{href:"https://near.social",children:"near.social"})," doesn't allow specifying custom CSS classes, but provides a standard ",(0,a.jsx)(n.a,{href:"https://getbootstrap.com/docs/5.2/getting-started/introduction/",children:"Bootstrap 5"})," CSS classes."]}),"\n",(0,a.jsx)(n.p,{children:"We can render the profile object and also include a list of tags:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'return (\n  <div className="d-inline-block">\n    <a\n      href={`#/mob.near/widget/ProfilePage?accountId=${accountId}`}\n      className="text-decoration-none link-dark"\n    >\n      <Widget\n        src="mob.near/widget/ProfileImage"\n        props={{\n          profile,\n          accountId,\n          className: "float-start d-inline-block me-2",\n        }}\n      />\n      <div className="d-inline-block" style={{ maxWidth: "16em" }}>\n        <div className="text-truncate">\n          {name}\n        </div>\n        <div className="d-flex">\n          <div className="d-inline-block text-secondary text-truncate">\n            @{accountId}\n          </div>\n        </div>\n        {tags.length > 0 && (\n          <div className="text-truncate">\n            {tags.map((tag) => (\n              <span className="me-1 mb-1 badge bg-secondary">#{tag}</span>\n            ))}\n          </div>\n        )}\n      </div>\n    </a>\n  </div>\n);\n'})}),"\n",(0,a.jsxs)(n.p,{children:["You can notice that we use the ",(0,a.jsx)(n.code,{children:"Widget"})," component to embed another component:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'<Widget\n  src="mob.near/widget/ProfileImage"\n  props={{\n    profile,\n    accountId,\n    className: "float-start d-inline-block me-2",\n  }}\n/>\n'})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"Widget"})," component takes the ",(0,a.jsx)(n.code,{children:"src"})," and ",(0,a.jsx)(n.code,{children:"props"})," parameters."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"src"})," is the component's name. It should be full path to the component, e.g. ",(0,a.jsx)(n.code,{children:"mob.near/widget/ProfileImage"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"props"})," is the object with the props that will be passed to the component."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["In our case we use ",(0,a.jsx)(n.code,{children:"mob.near/widget/ProfileImage"})," component to render the profile image, and we pass the ",(0,a.jsx)(n.code,{children:"profile"})," object, so that component doesn't need to fetch it again."]}),"\n",(0,a.jsxs)(n.p,{children:["The full source is available in ",(0,a.jsx)(n.a,{href:"https://near.social/#/mob.near/widget/WidgetSource?src=mob.near/widget/ProfileDocsExample",children:"mob.near/widget/ProfileDocsExample"})]}),"\n",(0,a.jsx)(n.h3,{id:"components-state",children:"Component's state"}),"\n",(0,a.jsxs)(n.p,{children:["Similar to React components, components have the state.\nBut instead of multiple state object that can be created using ",(0,a.jsx)(n.code,{children:"useState"})," hooks, the component has a single state object called ",(0,a.jsx)(n.code,{children:"state"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["By default, the ",(0,a.jsx)(n.code,{children:"state"})," equals to ",(0,a.jsx)(n.code,{children:"undefined"})," and needs to be initialized either with ",(0,a.jsx)(n.code,{children:"State.init"})," or ",(0,a.jsx)(n.code,{children:"State.update"})," functions."]}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"State.init"})," function takes the initial state object, and will be no-op if the state is already initialized."]}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"State.update"})," function will trigger the state update, and the component will be re-rendered.\nIt also has an optional argument, the object that will be added to the ",(0,a.jsx)(n.code,{children:"state"})," object using ",(0,a.jsx)(n.code,{children:"Object.assign"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["When state is initialized, you can change properties of the ",(0,a.jsx)(n.code,{children:"state"})," object directly and then call ",(0,a.jsx)(n.code,{children:"State.update()"})," to trigger re-rendering with the new values."]}),"\n",(0,a.jsx)(n.h4,{id:"controlled-components",children:"Controlled components"}),"\n",(0,a.jsx)(n.p,{children:"One of the reasons why you need the state is to have controlled input components.\nFor example, you want to have an input to enter an account ID.\nThe account ID can only contain certain characters (e.g. no uppercase), so when a user enters an uppercase character, you want to convert it to lowercase and remove all non-valid ones."}),"\n",(0,a.jsx)(n.p,{children:"So you can create the following component:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'State.init({ accountId: "" });\n\nreturn (\n  <input\n    type="text"\n    className="form-control"\n    value={state.accountId}\n    onChange={(e) => {\n      const accountId = e.target.value.toLowerCase().replace(/[^a-z0-9_.-]/g, "");\n      State.update({ accountId });\n    }}\n  />\n);\n'})}),"\n",(0,a.jsx)(n.h4,{id:"caching-data-processing",children:"Caching data processing"}),"\n",(0,a.jsx)(n.p,{children:"Another reason why you need the state is to cache the data. For example, you want to fetch an expansive data, the process it, but don't do it on every re-render.\nYou can do it like this:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"if (!state) {\n  // Fetch the data and process it.\n  const tags = fetchAndComputeTags();\n  \n  if (tags !== null) {\n    State.init({ tags });\n  }\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["You can see a more complicated data processing example in ",(0,a.jsx)(n.a,{href:"https://near.social/#/mob.near/widget/WidgetSource?src=mob.near/widget/TagsEditor",children:"mob.near/widget/TagsEditor"})]}),"\n",(0,a.jsx)(n.h3,{id:"committing-data",children:"Committing data"}),"\n",(0,a.jsxs)(n.p,{children:["The components can commit data to SocialDB. To simplify the process a custom component ",(0,a.jsx)(n.code,{children:"CommitButton"})," is provided."]}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"CommitButton"})," component has three custom props:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"data"})," - the data to commit. It can be any valid JSON-serializable object. The data doesn't have to start with the ",(0,a.jsx)(n.code,{children:"accountId"})," prefix, it will be added automatically."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"onClick"})," - the callback that will be called when the user clicks the button, but before the commit dialog is shown."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"onCommit"})," - the callback that will be called when the user commits the data."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["For example, we can create a notepad component. It will load the note from the ",(0,a.jsx)(n.code,{children:"experimental/note"})," key, and will allow to edit it and then save it."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'const accountId = context.accountId;\n\nif (!accountId) {\n  return "Please sign in with NEAR wallet";\n}\n\nconst note = Social.get(`${accountId}/experimental/note`);\n\nif (note === null) {\n  return "Loading";\n}\n\nState.init({ note: note || "" });\n\nreturn (\n  <div>\n    <div className="mb-2">\n      <h4>Notepad</h4>\n      <textarea\n        type="text"\n        rows={10}\n        className="form-control"\n        value={state.note}\n        onChange={(e) => State.update({ note: e.target.value })}\n      />\n    </div>\n    <CommitButton data={{ experimental: { note: state.note } }}>\n      Save note\n    </CommitButton>\n  </div>\n);\n'})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"CommitButton"})," component just takes the ",(0,a.jsx)(n.code,{children:"data"})," object and prompts the user to commit it to the SocialDB."]}),"\n",(0,a.jsx)(n.p,{children:"Notes:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["In the future a commit action will be available, so a user doesn't have to click on the ",(0,a.jsx)(n.code,{children:"CommitButton"})," and the data can be committed automatically."]}),"\n",(0,a.jsx)(n.li,{children:"Previously the commit action was always redirecting to the wallet for signing, so the cache was completely refreshed. But currently, the commit button doesn't always redirect to the wallet, so the cache is not always refreshed. We're working on the solution to automatically invalidate the affected cache, but it's not yet implemented."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>i});var a=t(67294);const o={},s=a.createContext(o);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);