"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3853],{93674:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var s=t(85893),a=t(11151);const i={sidebar_position:3,sidebar_label:"Setup",title:"RPC Setup"},o=void 0,r={id:"pagoda/rpc/setup",title:"RPC Setup",description:"Please be advised that these tools and services will be discontinued soon.",source:"@site/../docs/pagoda/rpc/setup.md",sourceDirName:"pagoda/rpc",slug:"/pagoda/rpc/setup",permalink:"/ko/pagoda/rpc/setup",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/pagoda/rpc/setup.md",tags:[],version:"current",lastUpdatedBy:"Dami\xe1n Parrino",lastUpdatedAt:1712614736e3,sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Setup",title:"RPC Setup"},sidebar:"pagoda",previous:{title:"Get API Keys",permalink:"/ko/pagoda/rpc/get-keys"},next:{title:"Statistics Dashboard",permalink:"/ko/pagoda/rpc/stats"}},c={},d=[{value:"API Keys",id:"api-keys",level:2},{value:"Test your API keys",id:"test-your-api-keys",level:3},{value:"Postman Setup",id:"postman-setup",level:2},{value:"Command-line Setup",id:"command-line-setup",level:2},{value:"NEAR CLI",id:"near-cli",level:3},{value:"HTTPie Setup",id:"httpie-setup",level:3},{value:"JavaScript Setup",id:"javascript-setup",level:2},{value:"Rust Setup",id:"rust-setup",level:2},{value:"Using <code>block_id</code> param",id:"using-block_id-param",level:2},{value:"Using <code>finality</code> param",id:"using-finality-param",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsx)(n.p,{children:"Please be advised that these tools and services will be discontinued soon."})}),"\n",(0,s.jsx)(n.p,{children:"In order to use the RPC API you will need to setup the correct RPC endpoints:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"POST"})," for all RPC methods"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"JSON RPC 2.0"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:'id: "dontcare"'})}),"\n",(0,s.jsxs)(n.li,{children:["Endpoint URL varies by network","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["testnet: ",(0,s.jsx)(n.code,{children:"https://near-testnet.api.pagoda.co/rpc/v1/"})]}),"\n",(0,s.jsxs)(n.li,{children:["mainnet: ",(0,s.jsx)(n.code,{children:"https://near-mainnet.api.pagoda.co/rpc/v1/"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"We are working on supporting historical data access in the next phase."})}),"\n",(0,s.jsx)(n.h2,{id:"api-keys",children:"API Keys"}),"\n",(0,s.jsx)(n.p,{children:"When accessing the NEAR network via a node provider, API services like Pagoda require an API key, which allows developers to monitor personal apps and access usage metrics."}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["For the best development experience, we recommend that you ",(0,s.jsx)(n.a,{href:"/ko/pagoda/rpc/get-keys",children:"sign up for a free API key"}),"."]})}),"\n",(0,s.jsx)(n.p,{children:"With a dedicated API key, developers are able to:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Access higher request throughput and increased concurrent requests"}),"\n",(0,s.jsxs)(n.li,{children:["Query data from ",(0,s.jsx)(n.a,{href:"/ko/pagoda/rpc/api",children:"Enhanced APIs"}),", gaining access to free processed data for NFT, FT and NEAR balances, ownership, and metadata"]}),"\n",(0,s.jsx)(n.li,{children:"Utlize dedicated, individualized usage metrics"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"test-your-api-keys",children:"Test your API keys"}),"\n",(0,s.jsx)(n.p,{children:"To quickly test your API keys and connection, try a simple request from your command line:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:'curl -X POST -H \'x-api-key:<YOUR-API-KEY>\' -H \'Content-Type: application/json\' -d \'{"jsonrpc": "2.0", "id":"dontcare","method":"status","params":[] }\' https://near-testnet.api.pagoda.co/rpc/v1/\n'})}),"\n",(0,s.jsx)(n.h2,{id:"postman-setup",children:"Postman Setup"}),"\n",(0,s.jsxs)(n.p,{children:["An easy way to test the queries in this documentation page is to use an API request tool such as ",(0,s.jsx)(n.a,{href:"https://www.postman.com/",children:"Postman"}),".\nYou only need to configure two things:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Make sure you add a header with a key of ",(0,s.jsx)(n.code,{children:"Content-Type"})," and value of ",(0,s.jsx)(n.code,{children:"application/json"}),".\n",(0,s.jsx)(n.img,{alt:"postman-setup-header",src:t(99916).Z+"",width:"1064",height:"299"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Then select the ",(0,s.jsx)(n.code,{children:"Body"})," tab and choose the ",(0,s.jsx)(n.code,{children:"raw"})," radio button and ensure ",(0,s.jsx)(n.code,{children:"JSON"})," is the selected format.\n",(0,s.jsx)(n.img,{alt:"postman-setup-header",src:t(2121).Z+"",width:"1052",height:"324"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["After that is set up, just copy/paste the ",(0,s.jsx)(n.code,{children:"JSON object"})," example snippets below into the ",(0,s.jsx)(n.code,{children:"body"})," of your request, on Postman, and click ",(0,s.jsx)(n.code,{children:"send"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"command-line-setup",children:"Command-line Setup"}),"\n",(0,s.jsx)(n.h3,{id:"near-cli",children:"NEAR CLI"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["If you don\u2019t yet have ",(0,s.jsx)(n.code,{children:"near-cli"})," installed on your machine, follow the ",(0,s.jsx)(n.a,{href:"https://docs.near.org/tools/near-cli#setup",children:"near-cli installation instructions"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Set your RPC URL:","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"export NEAR_CLI_TESTNET_RPC_SERVER_URL=https://near-testnet.api.pagoda.co/rpc/v1/\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Configure your API key:","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"near set-api-key $NEAR_CLI_TESTNET_RPC_SERVER_URL <your API Key>\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"httpie-setup",children:"HTTPie Setup"}),"\n",(0,s.jsxs)(n.p,{children:["If you prefer to use a command line interface, we have provided RPC examples you can use with ",(0,s.jsx)(n.a,{href:"https://httpie.org/",children:"HTTPie"}),".\nPlease note that params take either an object or array passed as a string."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"http post https://near-testnet.api.pagoda.co/rpc/v1/ jsonrpc=2.0 id=dontcare method=network_info params:='[]'\n"})}),"\n",(0,s.jsx)(n.h2,{id:"javascript-setup",children:"JavaScript Setup"}),"\n",(0,s.jsxs)(n.p,{children:["All of the queries listed in this documentation page can be called using ",(0,s.jsx)(n.a,{href:"https://github.com/near/near-api-js",children:(0,s.jsx)(n.code,{children:"near-api-js"})}),"."]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["For ",(0,s.jsx)(n.code,{children:"near-api-js"})," installation and setup please refer to ",(0,s.jsx)(n.code,{children:"near-api-js"})," ",(0,s.jsx)(n.a,{href:"https://docs.near.org/tools/near-api-js/quick-reference#install",children:"quick reference documentation"}),"."]})}),"\n",(0,s.jsx)(n.p,{children:"Add the following code to get started:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const { connect, keyStores } = require(\"near-api-js\");\n\n// Can be an empty object if not signing transactions\n\nconst keyStore = new keyStores.BrowserLocalStorageKeyStore();\n\nconst RPC_API_ENDPOINT = 'https://near-testnet.api.pagoda.co/rpc/v1/';\nconst API_KEY = '<YOUR-API-KEY>';\n\nconst ACCOUNT_ID = 'account.near';\n\nconst config = {\n    networkId: 'testnet',\n    keyStore,\n    nodeUrl: RPC_API_ENDPOINT,\n    headers: { 'x-api-key': API_KEY },\n};\n\n// Example: Fetching account status\n\nasync function getState(accountId) {\n    const near = await connect(config);\n    const account = await near.account(accountId);\n    const state = await account.state();\n    console.log(state);\n}\n\ngetState(ACCOUNT_ID);\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["All JavaScript code snippets require a ",(0,s.jsx)(n.code,{children:"near"})," object. For examples of how to instantiate, ",(0,s.jsx)(n.a,{href:"https://docs.near.org/tools/near-api-js/quick-reference#connect",children:"click here"}),"."]})}),"\n",(0,s.jsx)(n.h2,{id:"rust-setup",children:"Rust Setup"}),"\n",(0,s.jsxs)(n.p,{children:["You can use the ",(0,s.jsx)(n.a,{href:"https://github.com/near/near-jsonrpc-client-rs",children:"near-jsonrpc-client-rs"})," library to communicate with the Pagoda RPC endpoints via JSONRPC."]}),"\n",(0,s.jsxs)(n.p,{children:["Example of asynchronously fetching the latest block using ",(0,s.jsx)(n.code,{children:"tokio"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:'use near_jsonrpc_client::{auth, methods, JsonRpcClient};\nuse near_primitives::types::{BlockReference, Finality};\n\n#[tokio::main]\nasync fn main() -> Result<(), Box<dyn std::error::Error>> {\n    let client = JsonRpcClient::connect("https://near-testnet.api.pagoda.co/rpc/v1/")\n        .header(auth::ApiKey::new("<YOUR-API-KEY>")?);\n\n    let request = methods::block::RpcBlockRequest {\n        block_reference: BlockReference::Finality(Finality::Final),\n    };\n\n    let response = client.call(request).await?;\n\n    println!("{:?}", response);\n\n    Ok(())\n}\n'})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.h2,{id:"using-block_id-param",children:["Using ",(0,s.jsx)(n.code,{children:"block_id"})," param"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"block_id"})," param can take either the block number (e.g. ",(0,s.jsx)(n.code,{children:"27912554"}),") or the block hash (e.g. ",(0,s.jsx)(n.code,{children:"'3Xz2wM9rigMXzA2c5vgCP8wTgFBaePucgUmVYPkMqhRL'"})," ) as an argument."]}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsxs)(n.p,{children:["The block IDs of transactions shown in ",(0,s.jsx)(n.a,{href:"https://explorer.testnet.near.org",children:"NEAR Explorer"})," are not necessarily the block ID of the executed transaction. Transactions may execute a block or two after its recorded, and in some cases, can take place over several blocks. Due to this, it is important to to check subsequent blocks to be sure all results related to the queried transaction are discovered."]})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.h2,{id:"using-finality-param",children:["Using ",(0,s.jsx)(n.code,{children:"finality"})," param"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"finality"})," param has two options: ",(0,s.jsx)(n.code,{children:"optimistic"})," and ",(0,s.jsx)(n.code,{children:"final"}),"."]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"optimistic"})," uses the latest block recorded on the node that responded to your query ",(0,s.jsx)(n.em,{children:"(<1 second delay after the transaction is submitted)"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"final"})," is for a block that has been validated on at least 66% of the nodes in the network ",(0,s.jsx)(n.em,{children:"(usually takes 2 blocks / approx. 2 second delay)"})]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},2121:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/postman-setup-body-93fd45785b0fee57caa83bc9ee772d45.png"},99916:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/postman-setup-headers-54e021bfa8af3fb5992db0f4281ae948.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>o});var s=t(67294);const a={},i=s.createContext(a);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);