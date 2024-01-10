"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7489],{1660:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var a=t(85893),o=t(11151);const s={id:"faq",title:"FAQ for NEAR JavaScript API",sidebar_label:"FAQ"},r=void 0,i={id:"tools/near-api-js/faq",title:"FAQ for NEAR JavaScript API",description:"A collection of Frequently Asked Questions by the community.",source:"@site/../docs/4.tools/near-api-js/faq.md",sourceDirName:"4.tools/near-api-js",slug:"/tools/near-api-js/faq",permalink:"/vi/tools/near-api-js/faq",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/4.tools/near-api-js/faq.md",tags:[],version:"current",lastUpdatedBy:"gagdiez",lastUpdatedAt:1702155614,formattedLastUpdatedAt:"9 thg 12, 2023",frontMatter:{id:"faq",title:"FAQ for NEAR JavaScript API",sidebar_label:"FAQ"},sidebar:"tools",previous:{title:"Utilities",permalink:"/vi/tools/near-api-js/utils"},next:{title:"NEAR SDKs",permalink:"/vi/sdk/welcome"}},c={},d=[{value:"General",id:"general",level:2},{value:"Can I use <code>near-api-js</code> on a static html page?",id:"can-i-use-near-api-js-on-a-static-html-page",level:3},{value:"What front-end frameworks can I use the JavaScript API with?",id:"what-front-end-frameworks-can-i-use-the-javascript-api-with",level:3},{value:"Can I use the JavaScript API with mobile JavaScript frameworks such as React Native?",id:"can-i-use-the-javascript-api-with-mobile-javascript-frameworks-such-as-react-native",level:3},{value:"Transactions",id:"transactions",level:2},{value:"How to check the status of transaction",id:"how-to-check-the-status-of-transaction",level:3},{value:"How transactions are signed and sent by near-api-js",id:"how-transactions-are-signed-and-sent-by-near-api-js",level:3},{value:"How to send batch transactions",id:"how-to-send-batch-transactions",level:3},{value:"Accounts",id:"accounts",level:2},{value:"What\u2019s the difference between <code>Account</code> and <code>ConnectedWalletAccount</code>?",id:"whats-the-difference-between-account-and-connectedwalletaccount",level:3},{value:"How to create implicit accounts?",id:"how-to-create-implicit-accounts",level:3},{value:"Contracts",id:"contracts",level:2},{value:"How do I attach gas / a deposit?",id:"how-do-i-attach-gas--a-deposit",level:3},{value:"Common Errors",id:"common-errors",level:2},{value:"RPC Errors",id:"rpc-errors",level:3},{value:"Missing contract methods",id:"missing-contract-method",level:3},{value:"Client-side errors for missing methods",id:"client-side-errors-for-missing-methods",level:4},{value:"<code>TypeError: contract.METHOD_NAME is not a function</code>",id:"typeerror-contractmethod_name-is-not-a-function",level:5},{value:"RPC errors for missing methods",id:"rpc-errors-for-missing-methods",level:4},{value:"<code>wasm execution failed with error: FunctionCallError(MethodResolveError(MethodNotFound))</code>",id:"wasm-execution-failed-with-error-functioncallerrormethodresolveerrormethodnotfound",level:5},{value:"<code>wasm execution failed with error: FunctionCallError(HostError(ProhibitedInView { method_name: &quot;storage_write&quot; }))</code>",id:"wasm-execution-failed-with-error-functioncallerrorhosterrorprohibitedinview--method_name-storage_write-",level:5},{value:"Class <code>{X}</code> is missing in schema: publicKey",id:"class-x-is-missing-in-schema-publickey",level:3},{value:"<code>regeneratorRuntime</code> is not defined",id:"regeneratorruntime-is-not-defined",level:3},{value:"Window error using <code>Node.js</code>",id:"window-error-using-nodejs",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"A collection of Frequently Asked Questions by the community."}),"\n",(0,a.jsx)(n.h2,{id:"general",children:"General"}),"\n",(0,a.jsxs)(n.h3,{id:"can-i-use-near-api-js-on-a-static-html-page",children:["Can I use ",(0,a.jsx)(n.code,{children:"near-api-js"})," on a static html page?"]}),"\n",(0,a.jsx)(n.p,{children:"You can load the script from a CDN."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:'<script src="https://cdn.jsdelivr.net/npm/near-api-js@0.45.1/dist/near-api-js.min.js"><\/script>\n'})}),"\n",(0,a.jsxs)(n.admonition,{type:"note",children:[(0,a.jsx)(n.p,{children:"Make sure you load the latest version."}),(0,a.jsxs)(n.p,{children:["Versions list is on ",(0,a.jsx)(n.a,{href:"https://www.npmjs.com/package/near-api-js",children:"npmjs.com"})]})]}),"\n",(0,a.jsxs)(t,{children:[(0,a.jsx)("summary",{children:"Example Implementation"}),(0,a.jsx)("p",{children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:"<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <meta charset=\"UTF-8\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Document</title>\n</head>\n\n<body>\n  <ul id=\"messages\"></ul>\n  <textarea id=\"text\" placeholder=\"Add Message\"></textarea>\n  <button id=\"add-text\">Add Text</button>\n  <script src=\"https://cdn.jsdelivr.net/npm/near-api-js@0.45.1/dist/near-api-js.min.js\"><\/script>\n  <script>\n    // connect to NEAR\n    const near = new nearApi.Near({\n      keyStore: new nearApi.keyStores.BrowserLocalStorageKeyStore(),\n      networkId: 'testnet',\n      nodeUrl: 'https://rpc.testnet.near.org',\n      walletUrl: 'https://testnet.mynearwallet.com/'\n    });\n    \n    // connect to the NEAR Wallet\n    const wallet = new nearApi.WalletConnection(near, 'my-app');\n\n    // connect to a NEAR smart contract\n    const contract = new nearApi.Contract(wallet.account(), 'guest-book.testnet', {\n      viewMethods: ['getMessages'],\n      changeMethods: ['addMessage']\n    });\n\n    const button = document.getElementById('add-text');\n    if (!wallet.isSignedIn()) {\n      button.textContent = 'SignIn with NEAR'\n    }\n\n    // call the getMessages view method\n    contract.getMessages()\n      .then(messages => {\n        const ul = document.getElementById('messages');\n        messages.forEach(message => {\n          const li = document.createElement('li');\n          li.textContent = `${message.sender} - ${message.text}`;\n          ul.appendChild(li);\n        })\n      });\n\n    // Either sign in or call the addMessage change method on button click\n    document.getElementById('add-text').addEventListener('click', () => {\n      if (wallet.isSignedIn()) {\n        contract.addMessage({\n          args: { text: document.getElementById('text').value },\n          amount: nearApi.utils.format.parseNearAmount('1')\n        })\n      } else {\n        wallet.requestSignIn({\n          contractId: 'guest-book.testnet',\n          methodNames: ['getMessages', 'addMessage']\n        });\n      }\n    });\n  <\/script>\n</body>\n\n</html>\n"})})})]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"what-front-end-frameworks-can-i-use-the-javascript-api-with",children:"What front-end frameworks can I use the JavaScript API with?"}),"\n",(0,a.jsx)(n.p,{children:"The JavaScript API is framework-agnostic. You can include it in any front-end framework, such as React, Vue, Angular, and others."}),"\n",(0,a.jsxs)(n.p,{children:["You can use ",(0,a.jsx)(n.a,{href:"https://github.com/near/create-near-app",children:(0,a.jsx)(n.code,{children:"create-near-app"})})," to quickly bootstrap projects with different templates:"]}),"\n",(0,a.jsx)(n.p,{children:"npx create-near-app"}),"\n",(0,a.jsx)(n.h3,{id:"can-i-use-the-javascript-api-with-mobile-javascript-frameworks-such-as-react-native",children:"Can I use the JavaScript API with mobile JavaScript frameworks such as React Native?"}),"\n",(0,a.jsxs)(n.p,{children:["The JavaScript API can be used in most JavaScript runtimes, and under the hood, it\u2019s an abstraction over NEAR\u2019s ",(0,a.jsx)(n.a,{href:"/api/rpc/introduction",children:"RPC API"}),". However, notice that the Wallet can\u2019t be used everywhere. For example, in React Native apps you\u2019ll be able to use the Wallet in web versions of the apps, but it won\u2019t work in the native app deployments."]}),"\n",(0,a.jsxs)(n.p,{children:["You can use the Wallet in ",(0,a.jsx)(n.code,{children:"WebView"})," components in iOS or Android, however be aware that it uses ",(0,a.jsx)(n.code,{children:"LocalStorage"})," for ",(0,a.jsx)(n.code,{children:"KeyStore"}),", and it\u2019s your responsibility to persist the storage when you manage loading of ",(0,a.jsx)(n.code,{children:"WebView"})," components."]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"transactions",children:"Transactions"}),"\n",(0,a.jsx)(n.h3,{id:"how-to-check-the-status-of-transaction",children:"How to check the status of transaction"}),"\n",(0,a.jsxs)(n.p,{children:["Please refer to examples about transactions in the ",(0,a.jsx)(n.a,{href:"/tools/near-api-js/cookbook",children:"Cookbook"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"how-transactions-are-signed-and-sent-by-near-api-js",children:"How transactions are signed and sent by near-api-js"}),"\n",(0,a.jsx)(n.p,{children:"There are a few steps involved before transaction data is communicated to the network and eventually included in a block. The following steps are taken when creating, signing and ultimately a transaction from a user's account:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["The user creates a transaction object using the ",(0,a.jsxs)(n.a,{href:"https://github.com/near/near-api-js/blob/f78616480ba84c73f681211fe6266bd2ed2b9da1/packages/near-api-js/src/account.ts#L200",children:[(0,a.jsx)(n.code,{children:"account.signAndSendTransaction"})," method"]}),". This method accepts an array of actions and returns an object for the outcome of the transaction."]}),"\n",(0,a.jsxs)(n.li,{children:["The transaction is signed using the ",(0,a.jsxs)(n.a,{href:"https://github.com/near/near-api-js/blob/f78616480ba84c73f681211fe6266bd2ed2b9da1/packages/near-api-js/src/account.ts#L204",children:[(0,a.jsx)(n.code,{children:"account.signTransaction"})," method"]}),". This method accepts an array of actions and returns a signed transaction object."]}),"\n",(0,a.jsxs)(n.li,{children:["The signed transaction object is sent to the network using the ",(0,a.jsxs)(n.a,{href:"https://github.com/near/near-api-js/blob/f78616480ba84c73f681211fe6266bd2ed2b9da1/packages/near-api-js/src/account.ts#L208",children:[(0,a.jsx)(n.code,{children:"account.connection.provider.sendTransaction"})," method"]}),". This method accepts a signed transaction object and returns a transaction hash. This step ",(0,a.jsx)(n.a,{href:"https://github.com/near/near-api-js/blob/f78616480ba84c73f681211fe6266bd2ed2b9da1/packages/near-api-js/src/providers/json-rpc-provider.ts#L80",children:"performs the borsh serialization of the transaction object"})," and calls the ",(0,a.jsxs)(n.a,{href:"https://github.com/near/near-api-js/blob/f78616480ba84c73f681211fe6266bd2ed2b9da1/packages/near-api-js/src/providers/json-rpc-provider.ts#L81",children:[(0,a.jsx)(n.code,{children:"broadcast_tx_commit"})," JSON RPC method with the serialized transaction object encoded in base64"]}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"how-to-send-batch-transactions",children:"How to send batch transactions"}),"\n",(0,a.jsxs)(n.p,{children:["You may batch send transactions by using the ",(0,a.jsx)(n.code,{children:"signAndSendTransaction({})"})," method from ",(0,a.jsx)(n.code,{children:"account"}),". This method takes an array of transaction actions, and if one fails, the entire operation will fail. Here's a simple example:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'const { connect, transactions, keyStores } = require("near-api-js");\nconst fs = require("fs");\nconst path = require("path");\nconst homedir = require("os").homedir();\n\nconst CREDENTIALS_DIR = ".near-credentials";\nconst CONTRACT_NAME = "spf.idea404.testnet";\nconst WASM_PATH = path.join(__dirname, "../build/uninitialized_nft.wasm");\n\nconst credentialsPath = path.join(homedir, CREDENTIALS_DIR);\nconst keyStore = new keyStores.UnencryptedFileSystemKeyStore(credentialsPath);\n\nconst config = {\n  keyStore,\n  networkId: "testnet",\n  nodeUrl: "https://rpc.testnet.near.org",\n};\n\nsendTransactions();\n\nasync function sendTransactions() {\n  const near = await connect({ ...config, keyStore });\n  const account = await near.account(CONTRACT_NAME);\n  const args = { some_field: 1, another_field: "hello" };\n\n  const balanceBefore = await account.getAccountBalance();\n  console.log("Balance before:", balanceBefore);\n\n  try {\n    const result = await account.signAndSendTransaction({\n      receiverId: CONTRACT_NAME,\n      actions: [\n        transactions.deployContract(fs.readFileSync(WASM_PATH)),  // Contract does not get deployed\n        transactions.functionCall("new", Buffer.from(JSON.stringify(args)), 10000000000000, "0"),  // this call fails\n        transactions.transfer("1" + "0".repeat(24)), // 1 NEAR is not transferred either\n      ],\n    });\n    console.log(result);\n  } catch (e) {\n    console.log("Error:", e);\n  }\n\n  const balanceAfter = await account.getAccountBalance();\n  console.log("Balance after:", balanceAfter);\n}\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"Balance before: {\n  total: '49987878054959838200000000',\n  stateStaked: '4555390000000000000000000',\n  staked: '0',\n  available: '45432488054959838200000000'\n}\nReceipts: 2PPueY6gnA4YmmQUzc8DytNBp4PUpgTDhmEjRSHHVHBd, 3isLCW9SBH1MrPjeEPAmG9saHLj9Z2g7HxzfBdHmaSaG\n\tFailure [spf.idea404.testnet]: Error: {\"index\":1,\"kind\":{\"ExecutionError\":\"Smart contract panicked: panicked at 'Failed to deserialize input from JSON.: Error(\\\"missing field `owner_id`\\\", line: 1, column: 40)', nft/src/lib.rs:47:1\"}}\nError: ServerTransactionError: {\"index\":1,\"kind\":{\"ExecutionError\":\"Smart contract panicked: panicked at 'Failed to deserialize input from JSON.: Error(\\\"missing field `owner_id`\\\", line: 1, column: 40)', nft/src/lib.rs:47:1\"}}\n    at parseResultError (/Users/dennis/Code/naj-test/node_modules/near-api-js/lib/utils/rpc_errors.js:31:29)\n    at Account.<anonymous> (/Users/dennis/Code/naj-test/node_modules/near-api-js/lib/account.js:156:61)\n    at Generator.next (<anonymous>)\n    at fulfilled (/Users/dennis/Code/naj-test/node_modules/near-api-js/lib/account.js:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:96:5) {\n  type: 'FunctionCallError',\n  context: undefined,\n  index: 1,\n  kind: {\n    ExecutionError: 'Smart contract panicked: panicked at \\'Failed to deserialize input from JSON.: Error(\"missing field `owner_id`\", line: 1, column: 40)\\', nft/src/lib.rs:47:1'\n  },\n  transaction_outcome: {\n    block_hash: '5SUhYcXjXR1svCxL5BhCuw88XNdEjKXqWgA9X4XZW1dW',\n    id: 'SKQqAgnSN27fyHpncaX3fCUxWknBrMtxxytWLRDQfT3',\n    outcome: {\n      executor_id: 'spf.idea404.testnet',\n      gas_burnt: 4839199843770,\n      logs: [],\n      metadata: [Object],\n      receipt_ids: [Array],\n      status: [Object],\n      tokens_burnt: '483919984377000000000'\n    },\n    proof: [ [Object], [Object], [Object], [Object], [Object] ]\n  }\n}\nBalance after: {\n  total: '49985119959346682700000000',\n  stateStaked: '4555390000000000000000000',\n  staked: '0',\n  available: '45429729959346682700000000'\n}\n\n"})}),"\n",(0,a.jsxs)(n.p,{children:["You may also find an example of batch transactions in the ",(0,a.jsx)(n.a,{href:"/tools/near-api-js/cookbook",children:"Cookbook"}),"."]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"accounts",children:"Accounts"}),"\n",(0,a.jsxs)(n.h3,{id:"whats-the-difference-between-account-and-connectedwalletaccount",children:["What\u2019s the difference between ",(0,a.jsx)(n.code,{children:"Account"})," and ",(0,a.jsx)(n.code,{children:"ConnectedWalletAccount"}),"?"]}),"\n",(0,a.jsxs)(n.p,{children:["Interaction with the wallet is only possible in a web-browser environment because NEAR\u2019s Wallet is web-based.\nThe difference between ",(0,a.jsx)(n.code,{children:"Account"})," and ",(0,a.jsx)(n.code,{children:"ConnectedWalletAccount"})," is mostly about the way it signs transactions. The ",(0,a.jsx)(n.code,{children:"ConnectedWalletAccount"})," uses the wallet to approve transactions.\nUnder the hood the ",(0,a.jsx)(n.code,{children:"ConnectedWalletAccount"})," inherits and overrides some methods of ",(0,a.jsx)(n.code,{children:"Account"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"how-to-create-implicit-accounts",children:"How to create implicit accounts?"}),"\n",(0,a.jsxs)(n.p,{children:["You can read about it in the article about ",(0,a.jsx)(n.a,{href:"https://docs.near.org/integrator/implicit-accounts",children:"Implicit Accounts"}),"."]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"contracts",children:"Contracts"}),"\n",(0,a.jsx)(n.h3,{id:"how-do-i-attach-gas--a-deposit",children:"How do I attach gas / a deposit?"}),"\n",(0,a.jsxs)(n.p,{children:["After ",(0,a.jsx)(n.a,{href:"/tools/near-api-js/quick-reference#load-contract",children:"contract is instantiated"})," you can then call the contract and specify the amount of attached gas."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'await contract.method_name(\n  {\n    arg_name: "value", // argument name and value - pass empty object if no args required\n  },\n  "300000000000000", // attached GAS (optional)\n  "1000000000000000000000000" // attached deposit in yoctoNEAR (optional)\n);\n'})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"common-errors",children:"Common Errors"}),"\n",(0,a.jsx)(n.h3,{id:"rpc-errors",children:"RPC Errors"}),"\n",(0,a.jsxs)(n.p,{children:["Refer to the exhaustive ",(0,a.jsx)(n.a,{href:"https://github.com/near/near-api-js/blob/16ba17251ff7d9c8454261001cd6b87e9a994789/packages/near-api-js/src/res/error_messages.json",children:"list of error messages"}),"\nthat RPC endpoints throws and JavaScript API propagates."]}),"\n",(0,a.jsx)(n.h3,{id:"missing-contract-method",children:"Missing contract methods"}),"\n",(0,a.jsxs)(n.p,{children:["When constructing a ",(0,a.jsx)(n.code,{children:"Contract"})," instance on the client-side, you need to specify\nthe contract's methods. If you misspell, mismatch, or miss method names - you'll\nreceive errors about missing methods."]}),"\n",(0,a.jsx)(n.p,{children:"There are a few cases of missing or wrong methods:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"When you call a method you didn't specify in the constructor."}),"\n",(0,a.jsx)(n.li,{children:"When you call a method that doesn't exist on the blockchain's contract (but you did specify it in the client-side constructor)."}),"\n",(0,a.jsxs)(n.li,{children:["When you mismatch between ",(0,a.jsx)(n.code,{children:"viewMethods"})," and ",(0,a.jsx)(n.code,{children:"changeMethods"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["For example, let's look at the following contract code.\nIt contains one ",(0,a.jsx)(n.code,{children:"view"})," and one ",(0,a.jsx)(n.code,{children:"call"})," method:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"@NearBindgen\nclass MyContract extends NearContract {\n  constructor() { super(); }\n\n  @view\n  method_A_view(): string {\n    return 'Hi';\n  }\n\n  @call\n  method_B_call(): void {}\n}\n"})}),"\n",(0,a.jsx)(n.h4,{id:"client-side-errors-for-missing-methods",children:"Client-side errors for missing methods"}),"\n",(0,a.jsx)(n.h5,{id:"typeerror-contractmethod_name-is-not-a-function",children:(0,a.jsx)(n.code,{children:"TypeError: contract.METHOD_NAME is not a function"})}),"\n",(0,a.jsxs)(n.p,{children:["The following contract constructor declares only ",(0,a.jsx)(n.code,{children:"method_A_view"}),", it doesn't declare ",(0,a.jsx)(n.code,{children:"method_B_call"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"const contract = await new nearAPI.Contract(\n  walletConnection.account(), 'guest-book.testnet',\n  {\n    viewMethods: ['method_A_view'], // <=== Notice this\n    changeMethods: [], // <=== Notice this\n    sender: walletConnection.getAccountId(),\n  }\n);\n\n// This will work because we declared `method_A_view` in constructor\nawait contract.method_A_view();\n\n// This will throw `TypeError: contract.method_B_call is not a function` \n// because we didn't declare `method_B_call` in constructor, \n// even if it exists in the real contract.\nawait contract.method_B_call();\n\n// This will also throw `TypeError: contract.method_C is not a function`,\n// not because `method_C` doesn't exist on the contract, but because we didn't declare it\n// in the client-side constructor.\nawait contract.method_C();\n"})}),"\n",(0,a.jsx)(n.h4,{id:"rpc-errors-for-missing-methods",children:"RPC errors for missing methods"}),"\n",(0,a.jsx)(n.h5,{id:"wasm-execution-failed-with-error-functioncallerrormethodresolveerrormethodnotfound",children:(0,a.jsx)(n.code,{children:"wasm execution failed with error: FunctionCallError(MethodResolveError(MethodNotFound))"})}),"\n",(0,a.jsx)(n.p,{children:"In this example we specify and call a method, but this method doesn't exist on the blockchain:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"const contract = await new nearAPI.Contract(\n  // ...\n  {\n    viewMethods: [\"method_C\"], // <=== method_C doesn't exist on the contract above\n    changeMethods: [],\n    // ...\n  }\n);\n// We did specify `method_C` name in constructor, so this function exists on client-side `contract` instance,\n// but a method with this name does not exist on the actual contract on the blockchain.\n// This will return an error from RPC call `FunctionCallError(MethodResolveError(MethodNotFound))`\n// and will throw it on the client-side\nawait contract.method_C();\n\n// Notice: if we call `method_A_view` we get `TypeError: contract.method_A_view is not a function`.\n// Even though the method exists on the actual blockchain contract,\n// we didn't specify `method_A_view` in the contract's client-side constructor.\nawait contract.method_A_view();\n"})}),"\n",(0,a.jsx)(n.h5,{id:"wasm-execution-failed-with-error-functioncallerrorhosterrorprohibitedinview--method_name-storage_write-",children:(0,a.jsx)(n.code,{children:'wasm execution failed with error: FunctionCallError(HostError(ProhibitedInView { method_name: "storage_write" }))'})}),"\n",(0,a.jsxs)(n.p,{children:["Last case is when you mismatch ",(0,a.jsx)(n.code,{children:"viewMethods"})," and ",(0,a.jsx)(n.code,{children:"changeMethods"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"In the contract above we declared:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["A ",(0,a.jsx)(n.code,{children:"@view"})," method named ",(0,a.jsx)(n.code,{children:"method_A_view"})]}),"\n",(0,a.jsxs)(n.li,{children:["A ",(0,a.jsx)(n.code,{children:"@call"})," method named ",(0,a.jsx)(n.code,{children:"method_B_call"})]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["In a client-side constructor, the contract's ",(0,a.jsx)(n.code,{children:"@view"})," method names must be specified under ",(0,a.jsx)(n.code,{children:"viewMethods"}),",\nand the contract's ",(0,a.jsx)(n.code,{children:"@call"})," method names must be specified under ",(0,a.jsx)(n.code,{children:"changeMethods"}),".\nIf we mismatch between the types we will receive errors."]}),"\n",(0,a.jsx)(n.p,{children:"For example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"const contract = await new nearAPI.Contract(\n  // ...\n  {\n    viewMethods: ['method_B_call'], // <=== here should be `method_A_view`\n    changeMethods: ['method_A_view'], // <=== and here should be `method_B_call`\n    // ...\n  }\n);\n\n// This will return an error from RPC call and throw:\n// `wasm execution failed with error: FunctionCallError(HostError(ProhibitedInView { method_name: \"storage_write\" }))`\n// This error indicates that we are trying to call a state-changing method but declare it as a read-only method in client-side.\nawait contract.method_B_call();\n\n// The following behavior is undefined and might not work as expected.\n// `method_A_veiw` should be declared under `viewMethods` and in our example here we declare it under `changeMethods`.\nawait contract.method_A_view();\n"})}),"\n",(0,a.jsxs)(n.h3,{id:"class-x-is-missing-in-schema-publickey",children:["Class ",(0,a.jsx)(n.code,{children:"{X}"})," is missing in schema: publicKey"]}),"\n",(0,a.jsxs)(n.p,{children:["There is currently a known issue with the JavaScript API library, when you ",(0,a.jsx)(n.code,{children:"import"})," it more than once\nit might cause a namespace collision."]}),"\n",(0,a.jsx)(n.p,{children:"A temporary workaround: make sure you don't re-import it, for example when running tests."}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsxs)(n.h3,{id:"regeneratorruntime-is-not-defined",children:[(0,a.jsx)(n.code,{children:"regeneratorRuntime"})," is not defined"]}),"\n",(0,a.jsxs)(n.p,{children:["You are probably using ",(0,a.jsx)(n.a,{href:"https://parceljs.org/",children:"Parcel"})," like we do in ",(0,a.jsx)(n.a,{href:"https://github.com/near-examples",children:"other examples"}),". Please make sure you have this line at the top of your main JS file. (Most likely ",(0,a.jsx)(n.code,{children:"index.js"}),"):"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'import "regenerator-runtime/runtime";\n'})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Also, ensure the dependencies for this are added to the project by checking the dev dependencies in your ",(0,a.jsx)(n.code,{children:"package.json"}),". If not found you can install this by running the following in your terminal:"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm install regenerator-runtime --save-dev\n"})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsxs)(n.h3,{id:"window-error-using-nodejs",children:["Window error using ",(0,a.jsx)(n.code,{children:"Node.js"})]}),"\n",(0,a.jsxs)(n.p,{children:["You're maybe using a KeyStore that's for the browser. Instead, use a ",(0,a.jsx)(n.a,{href:"/tools/near-api-js/quick-reference#key-store",children:"filesystem key"})," or private key string."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Browser KeyStore:"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'const { keyStores } = require("near-api-js");\nconst keyStore = new keyStores.BrowserLocalStorageKeyStore();\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"FileSystem KeyStore:"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'const { keyStores } = require("near-api-js");\nconst KEY_PATH = "~./near-credentials/testnet/example-account.json";\nconst keyStore = new keyStores.UnencryptedFileSystemKeyStore(KEY_PATH);\n'})})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>r});var a=t(67294);const o={},s=a.createContext(o);function r(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);