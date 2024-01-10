"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9645],{16879:(e,c,n)=>{n.r(c),n.d(c,{assets:()=>r,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var t=n(85893),a=n(11151);const s={id:"creating-accounts",title:"Creating Accounts"},o=void 0,i={id:"concepts/basics/accounts/creating-accounts",title:"Creating Accounts",description:"The simplest way to create NEAR accounts is through the NEAR Wallet, however, you can also create",source:"@site/../docs/1.concepts/basics/accounts/creating-accounts.md",sourceDirName:"1.concepts/basics/accounts",slug:"/concepts/basics/accounts/creating-accounts",permalink:"/concepts/basics/accounts/creating-accounts",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/1.concepts/basics/accounts/creating-accounts.md",tags:[],version:"current",lastUpdatedBy:"Masoud Ghorbanzadeh",lastUpdatedAt:1687204754,formattedLastUpdatedAt:"Jun 19, 2023",frontMatter:{id:"creating-accounts",title:"Creating Accounts"},sidebar:"concepts",previous:{title:"State",permalink:"/concepts/basics/accounts/state"},next:{title:"Overview",permalink:"/concepts/basics/transactions/overview"}},r={},l=[{value:"The NEAR Wallet",id:"the-near-wallet",level:2},{value:"Testnet",id:"testnet",level:4},{value:"Mainnet",id:"mainnet",level:4},{value:"Local Implicit Account",id:"local-implicit-account",level:2},{value:"1. Create a ED25519 key-pair locally using near cli",id:"1-create-a-ed25519-key-pair-locally-using-near-cli",level:4},{value:"2. Convert the public_key to an account ID.",id:"converting-a-public-key-to-an-account-id",level:4},{value:"Local Named Account",id:"local-named-account",level:2}];function d(e){const c={a:"a",admonition:"admonition",code:"code",h2:"h2",h4:"h4",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(c.p,{children:["The simplest way to create NEAR accounts is through the ",(0,t.jsx)(c.a,{href:"https://mynearwallet.com/",children:"NEAR Wallet"}),", however, you can also create\naccounts using local tools."]}),"\n",(0,t.jsx)(c.hr,{}),"\n",(0,t.jsx)(c.h2,{id:"the-near-wallet",children:"The NEAR Wallet"}),"\n",(0,t.jsx)(c.p,{children:"The NEAR wallet is our web-based user-friendly wallet. You can readily use it without installing software or add-ons."}),"\n",(0,t.jsx)(c.h4,{id:"testnet",children:"Testnet"}),"\n",(0,t.jsxs)(c.p,{children:["In ",(0,t.jsx)(c.strong,{children:"testnet"})," you can directly create ",(0,t.jsx)(c.a,{href:"/concepts/basics/accounts/account-id#named-accounts",children:"named accounts"}),". Simply go to the ",(0,t.jsx)(c.a,{href:"https://testnet.mynearwallet.com/create",children:"wallet"}),",\npick a name, and you are ready to go. Remember to save somewhere safe the mnemonic phrase."]}),"\n",(0,t.jsx)(c.h4,{id:"mainnet",children:"Mainnet"}),"\n",(0,t.jsxs)(c.p,{children:["In the ",(0,t.jsx)(c.strong,{children:"mainnet"})," ",(0,t.jsx)(c.a,{href:"https://mynearwallet.com/",children:"wallet"})," you will be first given an ",(0,t.jsx)(c.a,{href:"/concepts/basics/accounts/account-id#implicit-accounts-implicit-accounts",children:"implicit account"}),", which you need to fund. After\nthat, you can use your ",(0,t.jsx)(c.a,{href:"/concepts/basics/accounts/account-id#implicit-accounts-implicit-accounts",children:"implicit account"})," to create a ",(0,t.jsx)(c.a,{href:"/concepts/basics/accounts/account-id#named-accounts",children:"named one"}),"."]}),"\n",(0,t.jsx)(c.hr,{}),"\n",(0,t.jsx)(c.h2,{id:"local-implicit-account",children:"Local Implicit Account"}),"\n",(0,t.jsx)(c.p,{children:"Create an implicit account locally takes two steps: first you create a key-pair locally, and then you derive its address."}),"\n",(0,t.jsxs)(c.h4,{id:"1-create-a-ed25519-key-pair-locally-using-near-cli",children:["1. Create a ED25519 key-pair locally using ",(0,t.jsx)(c.a,{href:"/tools/near-cli",children:"near cli"})]}),"\n",(0,t.jsx)(c.pre,{children:(0,t.jsx)(c.code,{className:"language-bash",children:"# 1. Generate key pair\nnear generate-key my-new-account\n"})}),"\n",(0,t.jsxs)(c.p,{children:["A new key-pair will be stored at ",(0,t.jsx)(c.code,{children:"~/.near-credentials/testnet/my-new-account.json"}),"."]}),"\n",(0,t.jsx)(c.h4,{id:"converting-a-public-key-to-an-account-id",children:"2. Convert the public_key to an account ID."}),"\n",(0,t.jsxs)(c.p,{children:["Use ",(0,t.jsx)(c.a,{href:"/tools/near-cli",children:(0,t.jsx)(c.code,{children:"near-cli"})})," once more to convert the ",(0,t.jsx)(c.code,{children:"public_key"})," from the ",(0,t.jsx)(c.code,{children:".json"})," file to its related NEAR account address."]}),"\n",(0,t.jsx)(c.pre,{children:(0,t.jsx)(c.code,{className:"language-bash",children:"# Open the javascript console of near-cli\nnear repl\n"})}),"\n",(0,t.jsx)(c.pre,{children:(0,t.jsx)(c.code,{className:"language-javascript",children:"// Paste this code in the javascript console\nconst pk58 = 'ed25519:<data>'\nnearAPI.utils.PublicKey.fromString(pk58).data.hexSlice()\n"})}),"\n",(0,t.jsxs)(c.p,{children:["The output string will be the account ID in hex (without ",(0,t.jsx)(c.code,{children:"'"}),"), for example ",(0,t.jsx)(c.code,{children:"98793cd91a3f870fb126f66285808c7e094afcfc4eda8a970f6648cdf0dbd6de"}),"."]}),"\n",(0,t.jsxs)(c.p,{children:["You can now share this id with someone and ask them to transfer tokens. At least ",(0,t.jsx)(c.strong,{children:"0.001\u24c3"})," is needed to start using the account."]}),"\n",(0,t.jsx)(c.admonition,{type:"tip",children:(0,t.jsxs)(c.p,{children:["You can also use ",(0,t.jsx)(c.strong,{children:"other languages"})," to infer the implicit address, for example, in python you can use the ",(0,t.jsx)(c.code,{children:"base58"})," package: ",(0,t.jsx)(c.code,{children:"base58.b58decode(<data>).hex()"})]})}),"\n",(0,t.jsx)(c.hr,{}),"\n",(0,t.jsx)(c.h2,{id:"local-named-account",children:"Local Named Account"}),"\n",(0,t.jsxs)(c.p,{children:["In order to create a named account you have to ask the relevant smart contract to create a sub-account for you: ",(0,t.jsx)(c.code,{children:"near"})," in mainnet, and ",(0,t.jsx)(c.code,{children:"testnet"})," in testnet."]}),"\n",(0,t.jsxs)(c.p,{children:["You can use ",(0,t.jsx)(c.code,{children:"near-cli"})," for this:"]}),"\n",(0,t.jsx)(c.pre,{children:(0,t.jsx)(c.code,{className:"language-bash",children:'near call testnet create_account \'{"new_account_id": "<account-name>.testnet", "new_public_key": "ed25519:<data>"}\' --deposit 0.00182 --accountId <account-with-funds>\n'})}),"\n",(0,t.jsxs)(c.p,{children:["Notice that you need an ",(0,t.jsx)(c.strong,{children:"already funded"})," account, since you are making a contract call."]}),"\n",(0,t.jsx)(c.admonition,{type:"tip",children:(0,t.jsxs)(c.p,{children:["The public key that you pass will become the ",(0,t.jsx)(c.a,{href:"/concepts/basics/accounts/access-keys#full-access-keys-full-access-keys",children:"Full Access key"})," of the account."]})}),"\n",(0,t.jsx)(c.admonition,{type:"info",children:(0,t.jsxs)(c.p,{children:["For ",(0,t.jsx)(c.strong,{children:"sub-accounts"})," check the ",(0,t.jsx)(c.a,{href:"/tools/near-cli#near-create-account",children:"near-cli create-account"})," docs."]})})]})}function u(e={}){const{wrapper:c}={...(0,a.a)(),...e.components};return c?(0,t.jsx)(c,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,c,n)=>{n.d(c,{Z:()=>i,a:()=>o});var t=n(67294);const a={},s=t.createContext(a);function o(e){const c=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(c):{...c,...e}}),[c,e])}function i(e){let c;return c=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(s.Provider,{value:c},e.children)}}}]);