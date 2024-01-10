"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1544],{30640:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=s(85893),t=s(11151);const i={id:"create-transactions",title:"Create Transactions",sidebar_label:"Create a Transaction"},c=void 0,a={id:"integrator/create-transactions",title:"Create Transactions",description:"To construct & process transactions you will need our API JavaScript library: near-api-js. There are many ways to create transactions but for this example we'll show you two ways to create a simple token transfer transaction.",source:"@site/../docs/6.integrator/create-transactions.md",sourceDirName:"6.integrator",slug:"/integrator/create-transactions",permalink:"/integrator/create-transactions",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/6.integrator/create-transactions.md",tags:[],version:"current",lastUpdatedBy:"Damian Parrino",lastUpdatedAt:1702311741,formattedLastUpdatedAt:"Dec 11, 2023",frontMatter:{id:"create-transactions",title:"Create Transactions",sidebar_label:"Create a Transaction"},sidebar:"exchanges",previous:{title:"Accounts",permalink:"/integrator/accounts"},next:{title:"Fungible Tokens",permalink:"/integrator/fungible-tokens"}},o={},l=[{value:"HIGH LEVEL -- Create a transaction",id:"high-level----create-a-transaction",level:2},{value:"Setup",id:"setup",level:3},{value:"Imports",id:"imports",level:3},{value:"Accounts &amp; Network",id:"accounts--network",level:3},{value:"Formatting Token Amounts",id:"formatting-token-amounts",level:3},{value:"Create a Key Store",id:"create-a-key-store",level:3},{value:"Setting up a connection to NEAR",id:"setting-up-a-connection-to-near",level:3},{value:"Create, Sign, &amp; Send Transaction",id:"create-sign--send-transaction",level:3},{value:"LOW LEVEL -- Create a Transaction",id:"low-level----create-a-transaction",level:2},{value:"Setup",id:"setup-1",level:3},{value:"Imports",id:"imports-1",level:3},{value:"Accounts &amp; Network",id:"accounts--network-1",level:3},{value:"Formatting Token Amounts",id:"formatting-token-amounts-1",level:3},{value:"Setting up a connection to NEAR",id:"setting-up-a-connection-to-near-1",level:3},{value:"Access Keys",id:"access-keys",level:3},{value:"Transaction Requirements",id:"transaction-requirements",level:3},{value:"1 <code>signerId</code>",id:"1-signerid",level:3},{value:"2 <code>signerPublicKey</code>",id:"2-signerpublickey",level:3},{value:"3 <code>receiverId</code>",id:"3-receiverid",level:3},{value:"4 <code>nonceForPublicKey</code>",id:"4-nonceforpublickey",level:3},{value:"5 <code>actions</code>",id:"5-actions",level:3},{value:"6 <code>blockHash</code>",id:"6-blockhash",level:3},{value:"Constructing the Transaction",id:"constructing-the-transaction",level:3},{value:"Sign Transaction",id:"sign-transaction",level:3},{value:"Send Transaction",id:"send-transaction",level:3},{value:"Transaction Results",id:"transaction-results",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["To construct & process transactions you will need our API JavaScript library: ",(0,r.jsx)(n.a,{href:"/develop/integrate/frontend",children:(0,r.jsx)(n.code,{children:"near-api-js"})}),". There are many ways to create transactions but for this example we'll show you two ways to create a simple token transfer transaction."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#high-level----create-a-transaction",children:"HIGH LEVEL"})," - ",(0,r.jsx)(n.em,{children:"easiest way to create a transaction"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#low-level----create-a-transaction",children:"LOW LEVEL"})," - ",(0,r.jsx)(n.em,{children:"performs the exact same transaction as above, but deconstructs the entire process for those curious about each step"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"At the core, all transactions require the following:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"signerId"})," ",(0,r.jsx)(n.em,{children:"(account ID of the transaction originator)"})]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"signerPublicKey"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"receiverId"})," ",(0,r.jsx)(n.em,{children:"(account ID of the transaction recipient)"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"nonceForPublicKey"})," ",(0,r.jsx)(n.em,{children:"(each time a key is used the nonce value should be incremented by 1)"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"actions"})," ",(0,r.jsxs)(n.em,{children:["( ",(0,r.jsx)(n.a,{href:"/concepts/basics/transactions/overview#action",children:"[click here]"})," for supported arguments)"]})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"blockHash"})," ",(0,r.jsx)(n.em,{children:"(a current block hash (within 24hrs) to prove the transaction was recently created)"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"https://near.github.io/near-api-js/classes/near_api_js.transaction.Transaction.html",children:"Transaction Class"})," for a more in depth outline."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"high-level----create-a-transaction",children:"HIGH LEVEL -- Create a transaction"}),"\n",(0,r.jsx)(n.h3,{id:"setup",children:"Setup"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Clone the ",(0,r.jsx)(n.a,{href:"https://github.com/near-examples/transaction-examples",children:"transaction-examples"})," repository by running:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/near-examples/transaction-examples.git\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsxs)(n.li,{children:["Follow ",(0,r.jsx)(n.a,{href:"https://github.com/near-examples/transaction-examples/blob/master/README.md#prerequisites",children:"setup instructions"})]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"imports",children:"Imports"}),"\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.a,{href:"https://github.com/near-examples/transaction-examples/blob/9e999253aafa2c3e3b537810a0b8ce7596c3506c/send-tokens-easy.js#L1-L5",children:(0,r.jsx)(n.code,{children:"send-tokens-easy.js"})})," we use two dependencies:"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/near/near-api-js",children:"NEAR API JavaScript library"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://www.npmjs.com/package/dotenv",children:(0,r.jsx)(n.code,{children:"dotenv"})})," (used to load environment variables for private key)"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'const nearAPI = require("near-api-js");\nconst { connect, KeyPair, keyStores, utils } = nearAPI;\nrequire("dotenv").config();\n'})}),"\n",(0,r.jsx)(n.p,{children:"The second line above deconstructs several utilities from nearAPI that you will use to interact with the blockchain."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"connect"})," - create a connection to NEAR passing configuration variables"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"KeyPair"})," - creates a keyPair from the private key you'll provide in an ",(0,r.jsx)(n.code,{children:".env"})," file"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"keyStores"})," - stores the keyPair that you will create from the private key and used to sign Transactions"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"utils"})," - used to format NEAR amounts"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"accounts--network",children:"Accounts & Network"}),"\n",(0,r.jsxs)(n.p,{children:["Next, you'll need to enter the ",(0,r.jsx)(n.code,{children:"accountId"})," of the ",(0,r.jsx)(n.code,{children:"sender"})," and ",(0,r.jsx)(n.code,{children:"receiver"}),", as well as the ",(0,r.jsx)(n.code,{children:"networkId"})," (",(0,r.jsx)(n.code,{children:"betanet"}),", ",(0,r.jsx)(n.code,{children:"testnet"}),", or ",(0,r.jsx)(n.code,{children:"mainnet"}),")."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'const sender = "sender.testnet";\nconst receiver = "receiver.testnet";\nconst networkId = "testnet";\n'})}),"\n",(0,r.jsx)(n.h3,{id:"formatting-token-amounts",children:"Formatting Token Amounts"}),"\n",(0,r.jsxs)(n.p,{children:["When sending NEAR tokens (\u24c3) during a transaction, the amount needs to be converted into ",(0,r.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Yocto-",children:"Yocto"})," \u24c3 or (10^-24)."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["To perform this you will use the ",(0,r.jsx)(n.a,{href:"https://github.com/near/near-api-js",children:(0,r.jsx)(n.code,{children:"near-api-js"})})," method ",(0,r.jsx)(n.a,{href:"https://github.com/near/near-api-js/blob/d4d4cf1ac3182fa998b1e004e6782219325a641b/src/utils/format.ts#L53-L63",children:(0,r.jsx)(n.code,{children:"parseNearAmount()"})})," (located in ",(0,r.jsx)(n.code,{children:"utils/format"}),")"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'const amount = nearAPI.utils.format.parseNearAmount("1.5");\n'})}),"\n",(0,r.jsx)(n.h3,{id:"create-a-key-store",children:"Create a Key Store"}),"\n",(0,r.jsxs)(n.p,{children:['In order to sign transactions you will need to create a "Key Store" that will hold a ',(0,r.jsx)(n.a,{href:"/concepts/basics/accounts/access-keys#full-access-keys",children:"full access key"})," to sign your transactions. There are several ways to accomplish this, but for this example we will use a private key stored in either an ",(0,r.jsx)(n.code,{children:".env"})," file in your project or an environment variable exported globally."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["If you created the account using ",(0,r.jsx)(n.a,{href:"/tools/near-cli",children:(0,r.jsx)(n.code,{children:"near-cli"})})," or ran ",(0,r.jsx)(n.a,{href:"/tools/near-cli#for-accounts",children:(0,r.jsx)(n.code,{children:"near login"})})," in your terminal, your private key can be found in a ",(0,r.jsx)(n.code,{children:".json"})," file located in ",(0,r.jsx)(n.code,{children:"/HOME/.near-credentials"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["If you created an account using ",(0,r.jsx)(n.a,{href:"https://testnet.mynearwallet.com/",children:"NEAR Wallet"}),", your key will be found in your browser's ",(0,r.jsx)(n.code,{children:"Local Storage"}),".","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["In your browser's dev tools... ",(0,r.jsx)(n.code,{children:"Application"})," >> ",(0,r.jsx)(n.code,{children:"Storage"})," >> ",(0,r.jsx)(n.code,{children:"Local Storage"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"// sets up an empty keyStore object in memory using near-api-js\nconst keyStore = new keyStores.InMemoryKeyStore();\n// creates a keyPair from the private key provided in your .env file\nconst keyPair = KeyPair.fromString(process.env.SENDER_PRIVATE_KEY);\n// adds the key you just created to your keyStore which can hold multiple keys (must be inside an async function)\nawait keyStore.setKey(networkId, sender, keyPair);\n"})}),"\n",(0,r.jsx)(n.h3,{id:"setting-up-a-connection-to-near",children:"Setting up a connection to NEAR"}),"\n",(0,r.jsxs)(n.p,{children:["Now create a connection to NEAR using a configuration object that will contain your ",(0,r.jsx)(n.code,{children:"networkId"})," setup earlier as well as your ",(0,r.jsx)(n.code,{children:"keyStore"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"// configuration used to connect to NEAR\nconst config = {\n  networkId,\n  keyStore,\n  nodeUrl: `https://rpc.${networkId}.near.org`,\n  walletUrl: `https://wallet.${networkId}.near.org`,\n  helperUrl: `https://helper.${networkId}.near.org`,\n  explorerUrl: `https://explorer.${networkId}.near.org`,\n};\n\n// connect to NEAR! :)\nconst near = await connect(config);\n// create a NEAR account object\nconst senderAccount = await near.account(sender);\n"})}),"\n",(0,r.jsxs)(n.p,{children:["You'll notice the last line uses your NEAR connection to create a ",(0,r.jsx)(n.code,{children:"senderAccount"})," object that you'll use to perform the transaction."]}),"\n",(0,r.jsx)(n.h3,{id:"create-sign--send-transaction",children:"Create, Sign, & Send Transaction"}),"\n",(0,r.jsx)(n.p,{children:"Now that everything is setup, creating the transaction is a single line of code."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const result = await senderAccount.sendMoney(receiver, amount);\n"})}),"\n",(0,r.jsxs)(n.p,{children:["This simple command constructs, signs, and sends a token transfer transaction on the NEAR blockchain. There is no need to create a ",(0,r.jsx)(n.code,{children:"result"})," variable aside from inspecting the response details from your transaction and even create a link to ",(0,r.jsx)(n.a,{href:"https://explorer.testnet.near.org/",children:"NEAR Explorer"})," to view a GUI version of the transaction details."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"low-level----create-a-transaction",children:"LOW LEVEL -- Create a Transaction"}),"\n",(0,r.jsx)(n.h3,{id:"setup-1",children:"Setup"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Clone the ",(0,r.jsx)(n.a,{href:"https://github.com/near-examples/transaction-examples",children:"transaction-examples"})," repository by running:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/near-examples/transaction-examples.git\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsxs)(n.li,{children:["Follow ",(0,r.jsx)(n.a,{href:"https://github.com/near-examples/transaction-examples/blob/master/README.md#prerequisites",children:"setup instructions"})]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"imports-1",children:"Imports"}),"\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.a,{href:"https://github.com/near-examples/transaction-examples/blob/master/send-tokens-deconstructed.js#L1-L4",children:(0,r.jsx)(n.code,{children:"send-tokens-deconstructed.js"})})," we use three dependencies:"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/near/near-api-js",children:"NEAR API JavaScript library"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://www.npmjs.com/package/js-sha256",children:(0,r.jsx)(n.code,{children:"js-sha256"})})," (cryptographic hashing algorithm)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://www.npmjs.com/package/dotenv",children:(0,r.jsx)(n.code,{children:"dotenv"})})," (used to load environment variables)"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'const nearAPI = require("near-api-js");\nconst sha256 = require("js-sha256");\nrequire("dotenv").config();\n'})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"accounts--network-1",children:"Accounts & Network"}),"\n",(0,r.jsxs)(n.p,{children:["Next, you'll need to enter the ",(0,r.jsx)(n.code,{children:"accountId"})," of the ",(0,r.jsx)(n.code,{children:"sender"})," and ",(0,r.jsx)(n.code,{children:"receiver"}),", as well as the ",(0,r.jsx)(n.code,{children:"networkId"})," (",(0,r.jsx)(n.code,{children:"betanet"}),", ",(0,r.jsx)(n.code,{children:"testnet"}),", or ",(0,r.jsx)(n.code,{children:"mainnet"}),")."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'const sender = "sender.testnet";\nconst receiver = "receiver.testnet";\nconst networkId = "testnet";\n'})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"formatting-token-amounts-1",children:"Formatting Token Amounts"}),"\n",(0,r.jsxs)(n.p,{children:["When sending NEAR tokens (\u24c3) during a transaction, the amount needs to be converted into ",(0,r.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Yocto-",children:"Yocto"})," \u24c3 or (10^-24)."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["To perform this you will use the ",(0,r.jsx)(n.a,{href:"https://github.com/near/near-api-js",children:(0,r.jsx)(n.code,{children:"near-api-js"})})," method ",(0,r.jsx)(n.a,{href:"https://github.com/near/near-api-js/blob/d4d4cf1ac3182fa998b1e004e6782219325a641b/src/utils/format.ts#L53-L63",children:(0,r.jsx)(n.code,{children:"parseNearAmount()"})})," (located in ",(0,r.jsx)(n.code,{children:"utils/format"}),")"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'const amount = nearAPI.utils.format.parseNearAmount("1.5");\n'})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"setting-up-a-connection-to-near-1",children:"Setting up a connection to NEAR"}),"\n",(0,r.jsxs)(n.p,{children:["In this example, we will create a NEAR RPC ",(0,r.jsx)(n.code,{children:"provider"})," that allows us to interact with the chain via ",(0,r.jsx)(n.a,{href:"/api/rpc/introduction",children:"RPC endpoints"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const provider = new nearAPI.providers.JsonRpcProvider(\n  `https://rpc.${networkId}.near.org`\n);\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"access-keys",children:"Access Keys"}),"\n",(0,r.jsxs)(n.p,{children:["To sign a transaction to send NEAR \u24c3, we will need a ",(0,r.jsx)(n.code,{children:"FullAccess"})," key to the sender's account."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["If you created the account using ",(0,r.jsx)(n.a,{href:"/tools/near-cli",children:(0,r.jsx)(n.code,{children:"near-cli"})})," or ran ",(0,r.jsx)(n.a,{href:"/tools/near-cli#for-accounts",children:(0,r.jsx)(n.code,{children:"near login"})})," in your terminal, your private key can be found in a ",(0,r.jsx)(n.code,{children:".json"})," file located in ",(0,r.jsx)(n.code,{children:"/HOME/.near-credentials"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["If you created an account using ",(0,r.jsx)(n.a,{href:"https://testnet.mynearwallet.com/",children:"NEAR Wallet"}),", your key will be found in your browser's ",(0,r.jsx)(n.code,{children:"Local Storage"}),".","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["In your browser's dev tools... ",(0,r.jsx)(n.code,{children:"Application"})," >> ",(0,r.jsx)(n.code,{children:"Storage"})," >> ",(0,r.jsx)(n.code,{children:"Local Storage"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Once you have access to the private key of the sender's account, create an environment variable ",(0,r.jsx)(n.code,{children:"SENDER_PRIVATE_KEY"})," or hard code it as a string on ",(0,r.jsx)(n.a,{href:"https://github.com/near-examples/transaction-examples/blob/master/send-tokens-deconstructed.js#L18",children:"line 18"})," of ",(0,r.jsx)(n.code,{children:"send-tokens.js"}),"."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["With this ",(0,r.jsx)(n.code,{children:"privateKey"}),", we can now construct a ",(0,r.jsx)(n.code,{children:"keyPair"})," object to sign transactions."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const privateKey = process.env.SENDER_PRIVATE_KEY;\nconst keyPair = nearAPI.utils.key_pair.KeyPairEd25519.fromString(privateKey);\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"transaction-requirements",children:"Transaction Requirements"}),"\n",(0,r.jsx)(n.p,{children:"As stated before, all transactions require six parts:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#1-signerid",children:(0,r.jsx)(n.code,{children:"signerId"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#2-signerpublickey",children:(0,r.jsx)(n.code,{children:"signerPublicKey"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#3-receiverid",children:(0,r.jsx)(n.code,{children:"receiverId"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#4-nonceforpublickey",children:(0,r.jsx)(n.code,{children:"nonceForPublicKey"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/concepts/basics/transactions/overview#action",children:(0,r.jsx)(n.code,{children:"actions"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#6-blockhash",children:(0,r.jsx)(n.code,{children:"blockHash"})})}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"1-signerid",children:["1 ",(0,r.jsx)(n.code,{children:"signerId"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.code,{children:"signerId"})," is the account ID of the transaction originator."]}),"\n",(0,r.jsxs)(n.li,{children:["This value is passed as a string (ex. ",(0,r.jsx)(n.code,{children:"'example.testnet'"})," or ",(0,r.jsx)(n.code,{children:"'bob.near'"}),")"]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"2-signerpublickey",children:["2 ",(0,r.jsx)(n.code,{children:"signerPublicKey"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.code,{children:"signerPublicKey"})," is required to be an object with two key value pairs: ",(0,r.jsx)(n.code,{children:"keyType"})," and ",(0,r.jsx)(n.code,{children:"data"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"PublicKey = {\n  keyType: 0,\n  data: Uint8Array(32)[\n    (190,\n    150,\n    152,\n    145,\n    232,\n    248,\n    128,\n    151,\n    167,\n    165,\n    128,\n    46,\n    20,\n    231,\n    103,\n    142,\n    39,\n    56,\n    152,\n    46,\n    135,\n    1,\n    161,\n    180,\n    94,\n    212,\n    195,\n    201,\n    73,\n    190,\n    70,\n    242)\n  ],\n};\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["This can be constructed by calling ",(0,r.jsx)(n.code,{children:"getPublicKey()"})," using the ",(0,r.jsx)(n.code,{children:"keyPair"})," we ",(0,r.jsx)(n.a,{href:"#access-keys",children:"setup earlier"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const publicKey = keyPair.getPublicKey();\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"3-receiverid",children:["3 ",(0,r.jsx)(n.code,{children:"receiverId"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.code,{children:"receiverId"})," is the account ID of the transaction recipient."]}),"\n",(0,r.jsxs)(n.li,{children:["This value is passed as a string (ex. ",(0,r.jsx)(n.code,{children:"'example.testnet'"})," or ",(0,r.jsx)(n.code,{children:"'bob.near'"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:["The certain cases, the ",(0,r.jsx)(n.code,{children:"signerId"})," and the ",(0,r.jsx)(n.code,{children:"receiverId"})," can be the same account."]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"4-nonceforpublickey",children:["4 ",(0,r.jsx)(n.code,{children:"nonceForPublicKey"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["A unique number or ",(0,r.jsx)(n.code,{children:"nonce"})," is required for each transaction signed with an access key."]}),"\n",(0,r.jsxs)(n.li,{children:["To ensure a unique number is created for each transaction, the current ",(0,r.jsx)(n.code,{children:"nonce"})," should be queried and then incremented by 1."]}),"\n",(0,r.jsxs)(n.li,{children:["Current nonce can be retrieved using the ",(0,r.jsx)(n.code,{children:"provider"})," we ",(0,r.jsx)(n.a,{href:"#setting-up-a-connection-to-near",children:"created earlier"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'const accessKey = await provider.query(\n  `access_key/${sender}/${publicKey.toString()}`,\n  ""\n);\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["now we can create a unique number for our transaction by incrementing the current ",(0,r.jsx)(n.code,{children:"nonce"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const nonce = ++accessKey.nonce;\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"5-actions",children:["5 ",(0,r.jsx)(n.code,{children:"actions"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["There are currently eight supported ",(0,r.jsx)(n.code,{children:"Action"})," types. ",(0,r.jsx)(n.a,{href:"/concepts/basics/transactions/overview#action",children:"[see here]"})]}),"\n",(0,r.jsxs)(n.li,{children:["For this example, we are using ",(0,r.jsx)(n.code,{children:"Transfer"})]}),"\n",(0,r.jsxs)(n.li,{children:["This transfer action can be created using the ",(0,r.jsxs)(n.a,{href:"#imports",children:["imported ",(0,r.jsx)(n.code,{children:"nearAPI"})," object"]})," and the ",(0,r.jsx)(n.a,{href:"#formatting-token-amounts",children:"formatted \u24c3 amount"})," created earlier."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const actions = [nearAPI.transactions.transfer(amount)];\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://github.com/near/near-api-js/blob/d4d4cf1ac3182fa998b1e004e6782219325a641b/src/transaction.ts#L70-L72",children:"[click here]"})," to view source for ",(0,r.jsx)(n.code,{children:"transfer()"}),"."]}),"\n",(0,r.jsxs)(n.h3,{id:"6-blockhash",children:["6 ",(0,r.jsx)(n.code,{children:"blockHash"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Each transaction requires a current block hash (within 24hrs) to prove that the transaction was created recently."}),"\n",(0,r.jsxs)(n.li,{children:["Hash must be converted to an array of bytes using the ",(0,r.jsx)(n.code,{children:"base_decode"})," method found in ",(0,r.jsx)(n.a,{href:"#imports",children:(0,r.jsx)(n.code,{children:"nearAPI"})}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const recentBlockHash = nearAPI.utils.serialize.base_decode(\n  accessKey.block_hash\n);\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://github.com/near/near-api-js/blob/d4d4cf1ac3182fa998b1e004e6782219325a641b/src/utils/serialize.ts#L16-L17",children:"[click here]"})," to view source for ",(0,r.jsx)(n.code,{children:"base_decode()"}),"."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"constructing-the-transaction",children:"Constructing the Transaction"}),"\n",(0,r.jsxs)(n.p,{children:["With all of our ",(0,r.jsx)(n.a,{href:"#transaction-requirements",children:"required arguments"}),", we can construct the transaction."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Using ",(0,r.jsx)(n.a,{href:"#imports",children:(0,r.jsx)(n.code,{children:"nearAPI"})}),", we call on ",(0,r.jsx)(n.code,{children:"createTransaction()"})," to perform this task."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const transaction = nearAPI.transactions.createTransaction(\n  sender,\n  publicKey,\n  receiver,\n  nonce,\n  actions,\n  recentBlockHash\n);\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://github.com/near/near-api-js/blob/d4d4cf1ac3182fa998b1e004e6782219325a641b/src/transaction.ts#L95-L110",children:"[click here]"})," to view source code for the Transaction class"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"sign-transaction",children:"Sign Transaction"}),"\n",(0,r.jsx)(n.p,{children:"Now that the transaction is created, we sign it before sending it to the NEAR blockchain. At the lowest level, there are four steps to this process."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Using ",(0,r.jsx)(n.a,{href:"#imports",children:(0,r.jsx)(n.code,{children:"nearAPI"})}),", we call on ",(0,r.jsx)(n.code,{children:"serialize()"})," to serialize the transaction in ",(0,r.jsx)(n.a,{href:"https://borsh.io/",children:"Borsh"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const serializedTx = nearAPI.utils.serialize.serialize(\n  nearAPI.transactions.SCHEMA,\n  transaction\n);\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsxs)(n.li,{children:["Hash the serialized transaction using a ",(0,r.jsx)(n.code,{children:"sha256"})," cryptographic hashing algorithm."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const serializedTxHash = new Uint8Array(sha256.sha256.array(serializedTx));\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsxs)(n.li,{children:["Create a signature with the ",(0,r.jsx)(n.code,{children:"keyPair"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const signature = keyPair.sign(serializedTxHash);\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"4",children:["\n",(0,r.jsxs)(n.li,{children:["Construct the signed transaction using ",(0,r.jsx)(n.code,{children:"near-api-js"})," ",(0,r.jsx)(n.a,{href:"https://github.com/near/near-api-js/blob/d4d4cf1ac3182fa998b1e004e6782219325a641b/src/transaction.ts#L112-L123",children:"SignedTransaction class"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const signedTransaction = new nearAPI.transactions.SignedTransaction({\n  transaction,\n  signature: new nearAPI.transactions.Signature({\n    keyType: transaction.publicKey.keyType,\n    data: signature.signature,\n  }),\n});\n"})}),"\n",(0,r.jsx)(n.h3,{id:"send-transaction",children:"Send Transaction"}),"\n",(0,r.jsx)(n.p,{children:"Final step is to encode and send the transaction."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["First we serialize transaction into ",(0,r.jsx)(n.a,{href:"https://borsh.io/",children:"Borsh"}),", and store the result as ",(0,r.jsx)(n.code,{children:"signedSerializedTx"}),". ",(0,r.jsx)(n.em,{children:"(required for all transactions)"})]}),"\n",(0,r.jsxs)(n.li,{children:["Then we send the transaction via ",(0,r.jsx)(n.a,{href:"/api/rpc/introduction",children:"RPC call"})," using the ",(0,r.jsx)(n.code,{children:"sendJsonRpc()"})," method nested inside ",(0,r.jsx)(n.a,{href:"#setting-up-connection-to-near",children:(0,r.jsx)(n.code,{children:"near"})}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'// encodes transaction to serialized Borsh (required for all transactions)\nconst signedSerializedTx = signedTransaction.encode();\n// sends transaction to NEAR blockchain via JSON RPC call and records the result\nconst result = await provider.sendJsonRpc("broadcast_tx_commit", [\n  Buffer.from(signedSerializedTx).toString("base64"),\n]);\n'})}),"\n",(0,r.jsx)(n.h3,{id:"transaction-results",children:"Transaction Results"}),"\n",(0,r.jsx)(n.p,{children:"Detailed transaction results of the transaction are returned in the following format:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"{\n  status: { SuccessValue: '' },\n  transaction: {\n    signer_id: 'sender.testnet',\n    public_key: 'ed25519:8RazSLHvzj4TBSKGUo5appP7wVeqZNQYjP9hvhF4ZKS2',\n    nonce: 57,\n    receiver_id: 'receiver.testnet',\n    actions: [ [Object] ],\n    signature: 'ed25519:2sK53w6hybSxX7qWShXz6xKnjnYRUW7Co3evEaaggNW6pGSCNPvx7urY4akwnzAbxZGwsKjx8dcVm73qbitntJjz',\n    hash: 'EgGzB73eFxCwZRGcEyCKedLjvvgxhDXcUtq21SqAh79j'\n  },\n  transaction_outcome: {\n    proof: [ [Object] ],\n    block_hash: 'J6cFDzAFkuknHMCEYW2uPQXDvCfSndkJmADVEWJbtTwV',\n    id: 'EgGzB73eFxCwZRGcEyCKedLjvvgxhDXcUtq21SqAh79j',\n    outcome: {\n      logs: [],\n      receipt_ids: [Array],\n      gas_burnt: 223182562500,\n      tokens_burnt: '22318256250000000000',\n      executor_id: 'sender.testnet',\n      status: [Object]\n    }\n  },\n  receipts_outcome: [\n    {\n      proof: [Array],\n      block_hash: 'FSS7UzTpMr4mUm6aw8MmzP6Q7wnQs35VS8vYm1R461dM',\n      id: '3LjBxe2jq1s7XEPrYxihp4rPVdyHAbYfkcdJjUEVijhJ',\n      outcome: [Object]\n    },\n    {\n      proof: [Array],\n      block_hash: '4XBio5dM5UGYjJgzZjgckfVgMZ9uKGbTkt8zZi5webxw',\n      id: 'AXFA4kwiYfruKQ4LkD1qZA8P7HoAvtFwGqwQYdWtWNaW',\n      outcome: [Object]\n    }\n  ]\n}\nTransaction Results:  {\n  signer_id: 'sender.testnet',\n  public_key: 'ed25519:8RazSLHvzj4TBSKGUo5appP7wVeqZNQYjP9hvhF4ZKS2',\n  nonce: 57,\n  receiver_id: 'receiver.testnet',\n  actions: [ { Transfer: [Object] } ],\n  signature: 'ed25519:2sK53w6hybSxX7qWShXz6xKnjnYRUW7Co3evEaaggNW6pGSCNPvx7urY4akwnzAbxZGwsKjx8dcVm73qbitntJjz',\n  hash: 'EgGzB73eFxCwZRGcEyCKedLjvvgxhDXcUtq21SqAh79j'\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["For detailed information on transaction receipts ",(0,r.jsx)(n.a,{href:"https://nomicon.io/RuntimeSpec/Receipts.html",children:"[click here]"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["To view the transaction in ",(0,r.jsx)(n.a,{href:"https://explorer.testnet.near.org/",children:"NEAR Explorer"}),", enter the ",(0,r.jsx)(n.code,{children:"hash"})," located under ",(0,r.jsx)(n.code,{children:"transaction"})," / ",(0,r.jsx)(n.code,{children:"Transaction Results"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["In addition, you can create a link in JS using the ",(0,r.jsx)(n.code,{children:"networkId"})," and ",(0,r.jsx)(n.code,{children:"result.transaction.hash"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const transactionLink = `https://explorer.${networkId}.near.org/transactions/${result.transaction.hash}`;\n"})}),"\n",(0,r.jsx)(n.admonition,{title:"Got a question?",type:"tip",children:(0,r.jsx)("a",{href:"https://stackoverflow.com/questions/tagged/nearprotocol",children:(0,r.jsx)("h8",{children:"Ask it on StackOverflow!"})})}),"\n",(0,r.jsx)(n.p,{children:"Happy Coding! \ud83d\ude80"})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>c});var r=s(67294);const t={},i=r.createContext(t);function c(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);