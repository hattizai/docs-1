"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[41915],{10718:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var o=t(85893),c=t(11151);const s={id:"transaction-anatomy",title:"Anatomy of a Transaction"},i=void 0,a={id:"concepts/protocol/transaction-anatomy",title:"Anatomy of a Transaction",description:"A transaction is a request from a user to the network to perform a set of actions. To create a transaction, the user must specify the following fields:",source:"@site/../docs/1.concepts/protocol/transaction-anatomy.md",sourceDirName:"1.concepts/protocol",slug:"/concepts/protocol/transaction-anatomy",permalink:"/concepts/protocol/transaction-anatomy",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/1.concepts/protocol/transaction-anatomy.md",tags:[],version:"current",lastUpdatedBy:"gagdiez",lastUpdatedAt:1711375194e3,frontMatter:{id:"transaction-anatomy",title:"Anatomy of a Transaction"},sidebar:"concepts",previous:{title:"Transactions",permalink:"/concepts/protocol/transactions"},next:{title:"Gas (Execution Fees)",permalink:"/concepts/protocol/gas"}},r={},l=[{value:"Actions",id:"actions",level:2}];function d(e){const n={admonition:"admonition",code:"code",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,c.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"A transaction is a request from a user to the network to perform a set of actions. To create a transaction, the user must specify the following fields:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Signer"}),": the account that signs the transaction"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Actions"}),": the set of actions to be performed (see bellow)"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Receiver"}),": the account on which to perform the actions"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"In addition, a transaction has the following fields to ensure its integrity and validity:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"PublicKey"}),": the public key used to sign the Transaction (so the network can verify the signature)"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Nonce"}),": a number that is incremented for each transaction sent by the ",(0,o.jsx)(n.code,{children:"Signer"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"BlockHash"}),": the hash of a recent block, to limit the time-validity of the transaction"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Users create transactions and sign them with their private keys. Then, the ",(0,o.jsx)(n.strong,{children:"transaction and its signature"})," are broadcasted together to the network, where they are validated and processed."]}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["Each transaction has exactly one ",(0,o.jsx)(n.code,{children:"Signer"})," and ",(0,o.jsx)(n.code,{children:"Receiver"}),", but can have multiple ",(0,o.jsx)(n.code,{children:"Actions"})]})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"actions",children:"Actions"}),"\n",(0,o.jsxs)(n.p,{children:["Each transaction can have ",(0,o.jsx)(n.strong,{children:"one or multiple"})," ",(0,o.jsx)(n.code,{children:"Actions"}),", which are the actual operations to be performed on the ",(0,o.jsx)(n.code,{children:"Receiver"})," account. There are 9 types of actions that can be performed:"]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"FunctionCall"}),": to invoke a function on a contract (optionally attaching NEAR to the call)"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Transfer"}),": to transfer tokens to another accounts"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"DeployContract"}),": to deploy a contract in the account"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"CreateAccount"}),": to create a new sub-account (e.g. ",(0,o.jsx)(n.code,{children:"ana.near"})," can create ",(0,o.jsx)(n.code,{children:"sub.ana.near"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"DeleteAccount"}),": to delete the account (transferring the remaining balance to a beneficiary)"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"AddKey"}),": to add a new key to the account (either ",(0,o.jsx)(n.code,{children:"FullAccess"})," or ",(0,o.jsx)(n.code,{children:"FunctionCall"})," access)"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"DeleteKey"}),": to delete an existing key from the account"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"DelegateActions"}),": to create a meta-transaction"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Stake"}),": special action to express interest in becoming a network validator"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["For example, ",(0,o.jsx)(n.code,{children:"bob.near"})," can bundle the following actions in a single transaction:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Create the account ",(0,o.jsx)(n.code,{children:"contract.bob.near"})]}),"\n",(0,o.jsxs)(n.li,{children:["Transfer 5 NEAR to ",(0,o.jsx)(n.code,{children:"contract.bob.near"})]}),"\n",(0,o.jsxs)(n.li,{children:["Deploy a contract in ",(0,o.jsx)(n.code,{children:"contract.bob.near"})]}),"\n",(0,o.jsxs)(n.li,{children:["Call the function ",(0,o.jsx)(n.code,{children:"init"})," in ",(0,o.jsx)(n.code,{children:"contract.bob.near"})]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"Actions"})," are executed in the ",(0,o.jsx)(n.strong,{children:"order they are specified in the transaction"}),". If any of the ",(0,o.jsx)(n.strong,{children:"actions fails"}),", the transaction is discarded and none of the actions take effect."]}),"\n",(0,o.jsx)(n.admonition,{title:"One Receiver",type:"warning",children:(0,o.jsxs)(n.p,{children:["Notice that all actions are performed on the same account. It is ",(0,o.jsx)(n.strong,{children:"not possible"})," to perform actions on multiple accounts in a single transaction, because transactions can have ",(0,o.jsx)(n.strong,{children:"only one receiver"})]})})]})}function h(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>i});var o=t(67294);const c={},s=o.createContext(c);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);