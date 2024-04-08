"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[21068],{20914:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var t=i(85893),a=i(11151);const s={id:"wallet",title:"Wallet Chain Key Rules"},r=void 0,o={id:"abstraction/chain-signatures/wallet",title:"Wallet Chain Key Rules",description:"Overview",source:"@site/../docs/8.abstraction/chain-signatures/wallet.md",sourceDirName:"8.abstraction/chain-signatures",slug:"/abstraction/chain-signatures/wallet",permalink:"/abstraction/chain-signatures/wallet",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/8.abstraction/chain-signatures/wallet.md",tags:[],version:"current",lastUpdatedBy:"gagdiez",lastUpdatedAt:1712093018e3,frontMatter:{id:"wallet",title:"Wallet Chain Key Rules"},sidebar:"build",previous:{title:"Chain Signatures",permalink:"/abstraction/chain-signatures"},next:{title:"Multichain Relayer Server",permalink:"/develop/relayers/multichain-server"}},c={},d=[{value:"Overview",id:"overview",level:2},{value:"Key derivation",id:"key-derivation",level:3},{value:"Ambiguous signatures",id:"ambiguous-signatures",level:3},{value:"Serialization format",id:"serialization-format",level:2},{value:"User-defined fields",id:"user-defined-fields",level:3},{value:"Examples",id:"examples",level:3},{value:"Example user flows",id:"example-user-flows",level:2},{value:"Using a domains bitcoin key",id:"using-a-domains-bitcoin-key",level:3},{value:"Using a personal Bitcoin key",id:"using-a-personal-bitcoin-key",level:3},{value:"Using a personal EVM key to sign a Binance transaction",id:"using-a-personal-evm-key-to-sign-a-binance-transaction",level:3},{value:"Using an untyped domain key",id:"using-an-untyped-domain-key",level:3},{value:"Using another domains Bitcoin key",id:"using-another-domains-bitcoin-key",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(n.p,{children:"In this article you'll find details on how to parse and present multichain transactions to the user so they can take an informed decision about their wallet's assets, while minimizing the number of times the user has to consent.\nYou'll also learn how to ensure that a signature on one chain is not used to take a meaningful action on another chain."}),"\n",(0,t.jsx)(n.h3,{id:"key-derivation",children:"Key derivation"}),"\n",(0,t.jsxs)(n.p,{children:["When signing using ",(0,t.jsx)(n.a,{href:"/abstraction/chain-signatures",children:"chain signatures"})," each account has an unlimited number of keys. Each key's public key is derived from the account name and the key extension which is an arbitrary string."]}),"\n",(0,t.jsx)(n.p,{children:"User's keys can be described as follow:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'"david.near,"              A key with no extension\n"david.near, "             A key with an extension of " "\n"david.near,cold_wallet"   A key with an extension of "cold_wallet"\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"If the keys aren't identical they have no relationship."})}),"\n",(0,t.jsx)(n.h3,{id:"ambiguous-signatures",children:"Ambiguous signatures"}),"\n",(0,t.jsxs)(n.p,{children:["You're going to be potentially storing keys for users who hold assets on many chains. Different chains have different ways of serializing and signing transactions. Many chains take steps to ensure that their signatures are not valid signatures on other chains. EVM chains use ",(0,t.jsx)(n.code,{children:"ChainID"})," to disambiguate signatures between different EVM chains. Dfinity uses a unique salt on the hash of the transaction."]}),"\n",(0,t.jsx)(n.p,{children:"Unfortunately, while this is a best practice, you can't guarantee that all chains do this. As such, a user could receive an innocent looking transaction on one chain that could be used to take a destructive action on another chain."}),"\n",(0,t.jsx)(n.p,{children:"An apocryphal example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'Transaction: "7b73656e643a2022313030222c206e6f74652022227d"\nParsed SOL: claim free NFT\nParsed BTC: send 100 BTC to Attacker\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The user would approve the ",(0,t.jsx)(n.code,{children:"SOL"})," transaction but the attacker would also get the ",(0,t.jsx)(n.code,{children:"BTC"})," transaction."]}),"\n",(0,t.jsx)(n.p,{children:"This can be solved by having different keys for any chains that you can't prove could have ambiguous transactions. This means that while an attacker may create ambiguous transactions, it will only be for wallets without assets on the target chain."}),"\n",(0,t.jsx)(n.h2,{id:"serialization-format",children:"Serialization format"}),"\n",(0,t.jsx)(n.p,{children:"We're using the following format for our derivations paths."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"{\n   chain: number, // SLIP-44 coin type unsigned integer\n   domain: String, // The domain that owns this key\n   meta: any, // Catch all data structure\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This is encoded in canonical ",(0,t.jsx)(n.a,{href:"https://www.rfc-editor.org/rfc/rfc8785",children:"JSON RFC 8785"}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["If you are not using a field don't make it ",(0,t.jsx)(n.code,{children:"null"}),", don't include the key instead."]})}),"\n",(0,t.jsx)(n.h3,{id:"user-defined-fields",children:"User-defined fields"}),"\n",(0,t.jsxs)(n.p,{children:["For user-defined fields, the ",(0,t.jsx)(n.code,{children:"meta"})," field can include any data you like."]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["Do not add any extra fields at the top level, as that may clash with future versions of this specification. If needed, put them in the ",(0,t.jsx)(n.code,{children:"meta"})," field instead."]})}),"\n",(0,t.jsxs)(n.p,{children:["For example, a simple way of selecting alternate keys will be using an object with an ",(0,t.jsx)(n.code,{children:"ID"})," field:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"{\n    meta: {id: 10}, // Pick the tenth bitcoin key\n    chain: 0,\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Key"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:'{chain: 0, domain: "near.org"}'})}),(0,t.jsxs)(n.td,{children:["A bitcoin key used on ",(0,t.jsx)(n.code,{children:"near.org"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"{chain: 0, meta: {id: 3}}"})}),(0,t.jsx)(n.td,{children:"Use the third bitcoin key"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"example-user-flows",children:"Example user flows"}),"\n",(0,t.jsx)(n.p,{children:"In the following examples, the messages are coming from the user's wallet frontend."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#using-a-domains-bitcoin-key",children:"Using a domains bitcoin key"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#using-a-personal-bitcoin-key",children:"Using a personal Bitcoin key"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#using-a-personal-evm-key-to-sign-a-binance-transaction",children:"Using a personal EVM key to sign a Binance transaction"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#using-an-untyped-domain-key",children:"Using an untyped domain key"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#using-another-domains-bitcoin-key",children:"Using another domains Bitcoin key"})}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"Wallet developers should follow this user flow format."})}),"\n",(0,t.jsx)(n.h3,{id:"using-a-domains-bitcoin-key",children:"Using a domains bitcoin key"}),"\n",(0,t.jsxs)(n.p,{children:["An application at ",(0,t.jsx)(n.code,{children:"near.org"})," wants to sign the Bitcoin transaction ",(0,t.jsx)(n.code,{children:"Send 100 BTC"})," using the key ",(0,t.jsx)(n.code,{children:"david.near,bitcoin,near.org,"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Signed \u2705\n"})}),"\n",(0,t.jsxs)(n.p,{children:["We sign the transaction without confirmation because the key is owned by ",(0,t.jsx)(n.code,{children:"near.org"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"using-a-personal-bitcoin-key",children:"Using a personal Bitcoin key"}),"\n",(0,t.jsxs)(n.p,{children:["An application at ",(0,t.jsx)(n.code,{children:"near.org"})," wants to sign the Bitcoin transaction ",(0,t.jsx)(n.code,{children:"Send 100 BTC"})," using the key ",(0,t.jsx)(n.code,{children:"david.near,bitcoin,"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"near.org would like to run the following Bitcoin transaction:\n\nSend 100 BTC\n[Accept] [Reject]\n"})}),"\n",(0,t.jsx)(n.p,{children:"The user must make an informed decision about whether this is an action they would like to take."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Signed \u2705\n"})}),"\n",(0,t.jsx)(n.h3,{id:"using-a-personal-evm-key-to-sign-a-binance-transaction",children:"Using a personal EVM key to sign a Binance transaction"}),"\n",(0,t.jsxs)(n.p,{children:["An application at ",(0,t.jsx)(n.code,{children:"near.org"})," wants to sign the Binance Smart Chain transaction ",(0,t.jsx)(n.code,{children:"Send 100 BNB, ChainID 56"})," using the key ",(0,t.jsx)(n.code,{children:"david.near,evm,"}),". The wallet knows this is a BSC transaction because of the corresponding ",(0,t.jsx)(n.code,{children:"ChainID"})," (56) and because the ",(0,t.jsx)(n.code,{children:"evm"})," key is being used."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"near.org would like to run the following Binance Smart Chain transaction:\n\nSend 100 BNB\n[Accept] [Reject]\n"})}),"\n",(0,t.jsx)(n.p,{children:"The user must make an informed decision about whether this is an action they would like to take."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Signed \u2705\n"})}),"\n",(0,t.jsx)(n.h3,{id:"using-an-untyped-domain-key",children:"Using an untyped domain key"}),"\n",(0,t.jsxs)(n.p,{children:["An application at ",(0,t.jsx)(n.code,{children:"near.org"})," wants to sign the Bitcoin transaction ",(0,t.jsx)(n.code,{children:"Send 100 BTC"})," using the key ",(0,t.jsx)(n.code,{children:"david.near,,near.org,"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Signed \u2705\n"})}),"\n",(0,t.jsx)(n.p,{children:"While this is ill advised, it's still the domains key so the domain can still choose whether to sign something using it."}),"\n",(0,t.jsx)(n.h3,{id:"using-another-domains-bitcoin-key",children:"Using another domains Bitcoin key"}),"\n",(0,t.jsxs)(n.p,{children:["An application at ",(0,t.jsx)(n.code,{children:"attacker.com"})," wants to sign the Bitcoin transaction ",(0,t.jsx)(n.code,{children:"Send 100 BTC"})," using the key ",(0,t.jsx)(n.code,{children:"david.near,bitcoin,near.org,"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Attacker.com would like to sign a transaction using your credentials from near.org\n\nSend 100 BTC\n\nThis is a suspicious transaction and likely not one you should accept\n[Reject] [Accept (Are you sure!)]\n"})}),"\n",(0,t.jsx)(n.p,{children:"The user must make an explicit decision to do something that is ill advised."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Signed \u2705\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The correct way for ",(0,t.jsx)(n.code,{children:"attacker.com"})," to make this request is to somehow redirect the user to ",(0,t.jsx)(n.code,{children:"near.org"})," and get the user to make a decision there."]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>r});var t=i(67294);const a={},s=t.createContext(a);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);