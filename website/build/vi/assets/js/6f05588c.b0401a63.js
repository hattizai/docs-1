"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5393],{26392:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var i=n(85893),s=n(11151);const l={id:"simple-fts",title:"Minting Fungible Tokens"},o=void 0,a={id:"tutorials/fts/simple-fts",title:"Minting Fungible Tokens",description:"In this tutorial, you'll learn how to easily create your own Fungible Tokens (FT) without doing any software development by using a readily-available smart contract.",source:"@site/../docs/3.tutorials/fts/simple-fts.md",sourceDirName:"3.tutorials/fts",slug:"/tutorials/fts/simple-fts",permalink:"/vi/tutorials/fts/simple-fts",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/fts/simple-fts.md",tags:[],version:"current",lastUpdatedBy:"gagdiez",lastUpdatedAt:1701811626,formattedLastUpdatedAt:"5 thg 12, 2023",frontMatter:{id:"simple-fts",title:"Minting Fungible Tokens"},sidebar:"contracts",previous:{title:"Self Upgrade & State Migration",permalink:"/vi/tutorials/examples/update-contract-migrate-state"},next:{title:"Minting NFTs",permalink:"/vi/tutorials/nfts/minting-nfts"}},r={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Wallet",id:"wallet",level:3},{value:"Using the FT contract",id:"using-the-ft-contract",level:2},{value:"Minting your FTs",id:"minting-your-fts",level:3},{value:"Checking your Wallet",id:"checking-your-wallet",level:3},{value:"Final remarks",id:"final-remarks",level:2},{value:"Versioning for this article",id:"versioning-for-this-article",level:2}];function h(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components},{Details:l}=t;return l||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["In this tutorial, you'll learn how to easily create your own Fungible Tokens (FT) without doing any software development by using a readily-available smart contract.\nThis article will show you how to use an existing ",(0,i.jsx)(t.a,{href:"/vi/tutorials/fts/predeployed-contract",children:"FT smart contract"}),", and you'll learn ",(0,i.jsx)(t.a,{href:"#minting-your-fts",children:"how to mint"})," fungible tokens and ",(0,i.jsx)(t.a,{href:"#checking-your-wallet",children:"view them"})," in your Wallet."]}),"\n",(0,i.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsx)(t.p,{children:"To complete this tutorial successfully, you'll need:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#wallet",children:"A NEAR account"})}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/tools/near-cli#setup",children:"NEAR command-line interface"})," (",(0,i.jsx)(t.code,{children:"near-cli"}),")"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"wallet",children:"Wallet"}),"\n",(0,i.jsxs)(t.p,{children:["To store your fungible tokens you'll need a ",(0,i.jsx)(t.a,{href:"https://testnet.mynearwallet.com//",children:"NEAR Wallet"}),".\nIf you don't have one yet, you can create one easily by following ",(0,i.jsx)(t.a,{href:"https://testnet.mynearwallet.com/create",children:"these instructions"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["Once you have your Wallet account, you can click on the ",(0,i.jsx)(t.a,{href:"https://testnet.mynearwallet.com//?tab=balances",children:"Balances Tab"})," where all your Fungible Tokens will be listed:"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Wallet",src:n(28872).Z+"",width:"1344",height:"1228"})}),"\n",(0,i.jsx)(t.h2,{id:"using-the-ft-contract",children:"Using the FT contract"}),"\n",(0,i.jsxs)(t.p,{children:["Now that you have all the tools in place, you're ready to start using the FT smart contract to ",(0,i.jsx)(t.a,{href:"#minting-your-fts",children:"mint your FTs"}),"."]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["If you don't have the command line interface, please ",(0,i.jsx)(t.a,{href:"/tools/near-cli#setup",children:"follow these steps"}),"."]})}),"\n",(0,i.jsxs)(t.p,{children:["Ensure you have credentials stored locally for the ",(0,i.jsx)(t.code,{children:"testnet"})," account you will be using to mint tokens with by running the following ",(0,i.jsx)(t.code,{children:"near-cli"})," command in your terminal:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"near login\n"})}),"\n",(0,i.jsxs)(t.p,{children:["To make this tutorial easier to copy/paste, we're going to set an environment variable for your account ID. In the command below, replace ",(0,i.jsx)(t.code,{children:"YOUR_ACCOUNT_NAME"})," with the account name you just logged in with including the ",(0,i.jsx)(t.code,{children:".testnet"}),"):"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"export ID=YOUR_ACCOUNT_NAME\n"})}),"\n",(0,i.jsx)(t.p,{children:"Test that the environment variable is set correctly by running:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"echo $ID\n"})}),"\n",(0,i.jsx)(t.h3,{id:"minting-your-fts",children:"Minting your FTs"}),"\n",(0,i.jsxs)(t.p,{children:["NEAR has already deployed a contract to the account ",(0,i.jsx)(t.code,{children:"ft.examples.testnet"})," which allows anyone to freely mint ",(0,i.jsx)(t.code,{children:"TeamTokens"}),". This is the account you'll be interacting with to mint your fungible tokens."]}),"\n",(0,i.jsxs)(t.p,{children:["Now let's mint some tokens! The command below will mint ",(0,i.jsx)(t.code,{children:"25"})," TeamTokens to your account.\nIf you look carefully, the ",(0,i.jsx)(t.code,{children:"receiver_id"})," defines the new owner of the tokens you are minting, while ",(0,i.jsx)(t.code,{children:"--accountId"})," specifies which accounted will be used to sign and pay for this transaction.\nAlso, there is a ",(0,i.jsx)(t.code,{children:"--deposit"})," flag which attaches ",(0,i.jsx)(t.code,{children:".001"})," $NEAR to the call to ",(0,i.jsx)(t.a,{href:"/concepts/storage/storage-staking",children:"pay for storage"})," on the fungible token contract. The amount is slightly less than this but you will be refunded the difference. (See the transaction in your wallet) The amount of tokens to be minted is set to 25 but you can increase this value up to 1000."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:'near call ft.examples.testnet ft_mint \'{"receiver_id": "\'$ID\'", "amount": "25"}\' --deposit 0.1 --accountId $ID\n'})}),"\n",(0,i.jsxs)(t.p,{children:["After minting your tokens you can query the contract to view the balance of any accountId passed. This is done by performing a contract ",(0,i.jsx)(t.code,{children:"view"})," call and using the ",(0,i.jsx)(t.code,{children:"ft_balance_of"})," endpoint on the fungible token contract. Run the following in your terminal to view the balance:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"near view ft.examples.testnet ft_balance_of '{\"account_id\": \"'$ID'\"}'\n"})}),"\n",(0,i.jsxs)(l,{children:[(0,i.jsx)("summary",{children:"Example response: "}),(0,i.jsx)("p",{children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'View call: ft.examples.testnet.ft_balance_of({"account_id": "benji_test.testnet"})\n\'25\'\n'})})})]}),"\n",(0,i.jsx)(t.h3,{id:"checking-your-wallet",children:"Checking your Wallet"}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:["After you mint your fungible token you can ",(0,i.jsx)(t.a,{href:"https://testnet.mynearwallet.com/",children:"view it in your NEAR Wallet"}),"!"]})}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Wallet with token",src:n(21242).Z+"",width:"675",height:"703"})}),"\n",(0,i.jsx)("br",{}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.em,{children:"Congratulations! You just minted your first Fungible Token on the NEAR blockchain!"})})," \ud83c\udf89"]}),"\n",(0,i.jsx)(t.h2,{id:"final-remarks",children:"Final remarks"}),"\n",(0,i.jsx)(t.p,{children:"This basic example illustrates all the required steps to call a FT smart contract on NEAR and start minting your own fungible tokens."}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.em,{children:"Happy minting!"})})," \ud83e\ude99"]}),"\n",(0,i.jsx)(t.h2,{id:"versioning-for-this-article",children:"Versioning for this article"}),"\n",(0,i.jsx)(t.p,{children:"At the time of this writing, this example works with the following versions:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["near-cli: ",(0,i.jsx)(t.code,{children:"2.1.1"})]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28872:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/empty-wallet-ft-tab-584f71775a4272f699eaed7d0d441c10.png"},21242:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/teamtoken-c5302057132cb55093a695e70690b34d.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>o});var i=n(67294);const s={},l=i.createContext(s);function o(e){const t=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(l.Provider,{value:t},e.children)}}}]);