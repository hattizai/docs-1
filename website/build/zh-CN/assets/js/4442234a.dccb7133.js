"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2353],{47240:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=a(85893),s=a(11151);const o={id:"storage-staking",title:"Storage Staking",sidebar_label:"Storage Staking"},r=void 0,i={id:"concepts/storage/storage-staking",title:"Storage Staking",description:"When you deploy a smart contract to NEAR, you pay for the storage that this contract requires using a mechanism called storage staking.",source:"@site/../docs/1.concepts/storage/storage-staking.md",sourceDirName:"1.concepts/storage",slug:"/concepts/storage/storage-staking",permalink:"/zh-CN/concepts/storage/storage-staking",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/1.concepts/storage/storage-staking.md",tags:[],version:"current",lastUpdatedBy:"Damian Parrino",lastUpdatedAt:1702311741,formattedLastUpdatedAt:"2023\u5e7412\u670811\u65e5",frontMatter:{id:"storage-staking",title:"Storage Staking",sidebar_label:"Storage Staking"},sidebar:"concepts",previous:{title:"Storage on NEAR",permalink:"/zh-CN/concepts/storage/data-storage"},next:{title:"Alternative Solutions",permalink:"/zh-CN/concepts/storage/storage-solutions"}},c={},l=[{value:"How does NEAR&#39;s design align incentives?",id:"how-does-nears-design-align-incentives",level:2},{value:"When do tokens get staked?",id:"when-do-tokens-get-staked",level:2},{value:"The &quot;million cheap data additions&quot; attack",id:"the-million-cheap-data-additions-attack",level:2},{value:"btw, you can remove data to unstake some tokens",id:"btw-you-can-remove-data-to-unstake-some-tokens",level:2},{value:"How much does it cost?",id:"how-much-does-it-cost",level:2},{value:"Example cost breakdown",id:"example-cost-breakdown",level:2},{value:"Calculate costs for your own contract",id:"calculate-costs-for-your-own-contract",level:2},{value:"Other ways to keep costs down",id:"other-ways-to-keep-costs-down",level:2},{value:"Use a binary serialization format, rather than JSON",id:"use-a-binary-serialization-format-rather-than-json",level:3},{value:"Store data off-chain",id:"store-data-off-chain",level:3},{value:"Summary",id:"summary",level:2},{value:"Footnotes",id:"footnotes",level:2}];function h(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",section:"section",strong:"strong",sup:"sup",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"When you deploy a smart contract to NEAR, you pay for the storage that this contract requires using a mechanism called storage staking."}),"\n",(0,n.jsxs)(t.p,{children:["In storage staking (sometimes called ",(0,n.jsx)(t.em,{children:"state"})," staking), the account that owns a smart contract must stake (or lock) tokens according to the amount of data stored in that smart contract, effectively reducing the balance of the contract's account."]}),"\n"]}),"\n",(0,n.jsxs)("blockquote",{class:"info",children:[(0,n.jsx)("strong",{children:"Coming from Ethereum?"}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(t.p,{children:'If you\u2019re familiar with Ethereum\u2019s pricing model, you may know that, like NEAR, the protocol charges a fee (called "gas") for each transaction. Unlike NEAR, Ethereum\'s gas fee accounts for the amount of data stored via that transaction. This essentially means that anyone can pay once to store permanent data on-chain. This is a poor economic design for at least two reasons: 1. The people running the network (miners, in the case of Ethereum 1) are not appropriately incentivized to store large amounts of data, since a gas fee far charged in the distant past can increase storage costs forever, and 2. The users of a smart contract are charged for the data they send to store in it, rather than charging the owner of the smart contract.'})]}),"\n",(0,n.jsx)(t.h2,{id:"how-does-nears-design-align-incentives",children:"How does NEAR's design align incentives?"}),"\n",(0,n.jsxs)(t.p,{children:["Storage-staked tokens are unavailable for other uses, such as validation staking. This increases the yield that validators will receive. Learn more in ",(0,n.jsx)(t.a,{href:"https://near.org/papers/economics-in-sharded-blockchain/",children:"the economics whitepaper"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"when-do-tokens-get-staked",children:"When do tokens get staked?"}),"\n",(0,n.jsx)(t.p,{children:"On each incoming transaction that adds data."}),"\n",(0,n.jsx)(t.p,{children:"Let's walk through an example:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["You launch ",(0,n.jsx)(t.a,{href:"https://examples.near.org/guest-book",children:"a guest book app"}),", deploying your app's smart contract to the account ",(0,n.jsx)(t.code,{children:"example.near"})]}),"\n",(0,n.jsxs)(t.li,{children:["Visitors to your app can add messages to the guest book. This means your users will, ",(0,n.jsx)(t.a,{href:"/concepts/basics/transactions/gas#what-about-prepaid-gas",children:"by default"}),", pay a small gas fee to send their message to your contract."]}),"\n",(0,n.jsxs)(t.li,{children:["When such a call comes in, NEAR will check that ",(0,n.jsx)(t.code,{children:"example.near"})," has a large enough balance that it can stake an amount to cover the new storage needs. If it does not, the transaction will fail."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"the-million-cheap-data-additions-attack",children:'The "million cheap data additions" attack'}),"\n",(0,n.jsx)(t.p,{children:"Note that this can create an attack surface. To continue the example above, if sending data to your guest book costs users close to nothing while costing the contract owner significantly more, then a malicious user can exploit the imbalance to make maintaining the contract prohibitively expensive."}),"\n",(0,n.jsx)(t.p,{children:"Take care, then, when designing your smart contracts to ensure that such attacks cost potential attackers more than it would be worth."}),"\n",(0,n.jsx)(t.h2,{id:"btw-you-can-remove-data-to-unstake-some-tokens",children:"btw, you can remove data to unstake some tokens"}),"\n",(0,n.jsxs)(t.p,{children:['People familiar with the "immutable data" narrative about blockchains find this surprising. While it\'s true that an ',(0,n.jsx)(t.em,{children:"indexing node"})," will keep all data forever, ",(0,n.jsx)(t.em,{children:"validating nodes"})," (that is, the nodes run by most validators in the network) do not. Smart contracts can provide ways to delete data, and this data will be purged from most nodes in the network within a few ",(0,n.jsx)(t.a,{href:"/zh-CN/concepts/basics/epoch",children:"epochs"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"Note that a call to your smart contract to remove data has an associated gas fee. Given NEAR's gas limit, this creates an upper limit on how much data can be deleted in a single transaction."}),"\n",(0,n.jsx)(t.h2,{id:"how-much-does-it-cost",children:"How much does it cost?"}),"\n",(0,n.jsxs)(t.p,{children:["Storage staking is priced in an amount set by the network, which is set to ",(0,n.jsx)(t.strong,{children:"1E19 yoctoNEAR per byte"}),", or ",(0,n.jsx)(t.strong,{children:"100kb per NEAR token (\u24c3)"}),". ",(0,n.jsx)(t.sup,{children:(0,n.jsx)(t.a,{href:"#user-content-fn-1",id:"user-content-fnref-1","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})})," ",(0,n.jsx)(t.sup,{children:(0,n.jsx)(t.a,{href:"#user-content-fn-2",id:"user-content-fnref-2","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"2"})})]}),"\n",(0,n.jsxs)(t.p,{children:["NEAR's JSON RPC API provides ",(0,n.jsx)(t.a,{href:"/api/rpc/setup#genesis-config",children:"a way to query this initial setting"})," as well as a ",(0,n.jsx)(t.a,{href:"/api/rpc/setup#protocol-config",children:"a way to query the live config / recent blocks"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"example-cost-breakdown",children:"Example cost breakdown"}),"\n",(0,n.jsx)(t.p,{children:"Let's walk through an example."}),"\n",(0,n.jsxs)(t.p,{children:["A ",(0,n.jsx)(t.a,{href:"https://github.com/near/NEPs/pull/4",children:"non-fungible token"})," is unique, which means each token has its own ID. The contract must store a mapping from token IDs to owners' account ID."]}),"\n",(0,n.jsxs)(t.p,{children:["If such an NFT is used to track ",(0,n.jsx)(t.strong,{children:"1 million"})," tokens, how much storage will be required for the token-ID-to-owner mapping? And how many tokens will need to be staked for that storage?"]}),"\n",(0,n.jsxs)(t.p,{children:["Let's calculate the storage needs when using a ",(0,n.jsx)(t.code,{children:"PersistentMap"})," that stores data as UTF-8 strings."]}),"\n",(0,n.jsxs)(t.p,{children:["Here's our ",(0,n.jsx)(t.code,{children:"PersistentMap"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:'type AccountId = string;\ntype TokenId = u64;\nconst tokenToOwner = new PersistentMap<TokenId, AccountId>("t2o");\n'})}),"\n",(0,n.jsxs)(t.p,{children:["Behind the scenes, all data stored on the NEAR blockchain is saved in a key-value database. That ",(0,n.jsx)(t.code,{children:"'t2o'"})," variable that's passed to ",(0,n.jsx)(t.code,{children:"PersistentMap"})," helps it keep track of all its values. If your account ",(0,n.jsx)(t.code,{children:"example.near"})," owns token with ID ",(0,n.jsx)(t.code,{children:"0"}),", then at the time of writing, here's the data that would get saved to the key-value database:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["key: ",(0,n.jsx)(t.code,{children:"t2o::0"})]}),"\n",(0,n.jsxs)(t.li,{children:["value: ",(0,n.jsx)(t.code,{children:"example.near"})]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"So for 1 million tokens, here are all the things we need to add up and multiply by 1 million:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["The prefix, ",(0,n.jsx)(t.code,{children:"t2o"}),", will be serialized as three bytes in UTF-8, and the two colons will add another two. That's 5 bytes."]}),"\n",(0,n.jsxs)(t.li,{children:["For an implementation where ",(0,n.jsx)(t.code,{children:"TokenId"})," auto-increments, the values will be between ",(0,n.jsx)(t.code,{children:"0"})," and ",(0,n.jsx)(t.code,{children:"999999"}),", which makes the average length 5 bytes."]}),"\n",(0,n.jsxs)(t.li,{children:["Let's assume well-formed NEAR ",(0,n.jsx)(t.code,{children:"AccountId"}),"s, and let's guess that NEAR Account IDs follow the approximate pattern of domain names, which ",(0,n.jsx)(t.a,{href:"https://www.gaebler.com/Domain-Length-Research.htm",children:"average about 10 characters"}),", plus a top-level name like ",(0,n.jsx)(t.code,{children:".near"}),". So a reasonable average to expect might be about 15 characters; let's keep our estimate pessimistic and say 25. This will equal 25 bytes, since NEAR account IDs must use characters from the ASCII set."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"So:"}),"\n",(0,n.jsx)(t.p,{children:"1_000_000 * (5 + 5 + 25)"}),"\n",(0,n.jsxs)(t.p,{children:["35 million bytes. 350 times 100Kib, meaning \u24c3350. To do the exact math: Multiplying by 1e19 yoctoNEAR per byte, we find that the ",(0,n.jsx)(t.code,{children:"tokenToOwner"})," mapping with 35m bytes will require staking 3.5e26 yoctoNEAR, or \u24c3350"]}),"\n",(0,n.jsxs)(t.p,{children:["Note that you can get this down to \u24c3330 just by changing the prefix from ",(0,n.jsx)(t.code,{children:"t2o"})," to a single character. Or get rid of it entirely! You can have a zero-length prefix on one ",(0,n.jsx)(t.code,{children:"PersistentVector"})," in your smart contract. If you did that with this one, you could get it down to \u24c3250."]}),"\n",(0,n.jsx)(t.h2,{id:"calculate-costs-for-your-own-contract",children:"Calculate costs for your own contract"}),"\n",(0,n.jsx)(t.p,{children:"Doing manual byte math as shown above is difficult and error-prone. Good news: you don't have to!"}),"\n",(0,n.jsxs)(t.p,{children:["You can test the storage used using the ",(0,n.jsx)(t.a,{href:"/zh-CN/develop/contracts/environment/",children:"SDK environment"})," and checking ",(0,n.jsx)(t.code,{children:"env.storage_usage()"})]}),"\n",(0,n.jsx)(t.h2,{id:"other-ways-to-keep-costs-down",children:"Other ways to keep costs down"}),"\n",(0,n.jsx)(t.p,{children:"Storing data on-chain isn't cheap for the people running the network, and NEAR passes on this cost to developers. So, how do you, as a developer, keep your costs down? There are two popular approaches:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Use a binary serialization format, rather than JSON"}),"\n",(0,n.jsx)(t.li,{children:"Store data off-chain"}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"use-a-binary-serialization-format-rather-than-json",children:"Use a binary serialization format, rather than JSON"}),"\n",(0,n.jsxs)(t.p,{children:["The core NEAR team maintains a library called ",(0,n.jsx)(t.a,{href:"https://borsh.io/",children:"borsh"}),",\nwhich is used automatically when you use ",(0,n.jsx)(t.code,{children:"near-sdk-rs"}),". Someday, it will probably also be used by ",(0,n.jsx)(t.code,{children:"near-sdk-js"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["Imagine that you want to store an array like ",(0,n.jsx)(t.code,{children:"[0, 1, 2, 3]"}),". You could serialize it as a string and store it as UTF-8 bytes. This is what ",(0,n.jsx)(t.code,{children:"near-sdk-js"})," does today. Cutting out spaces, you end up using 9 bytes."]}),"\n",(0,n.jsx)(t.p,{children:"Using borsh, this same array gets saved as 8 bytes:"}),"\n",(0,n.jsx)(t.p,{children:"\\u0004\\u0000\\u0000\\u0000\\u0000\\u0001\\u0002\\u0003"}),"\n",(0,n.jsx)(t.p,{children:"At first glance, saving 1 byte might not seem significant. But let's look closer."}),"\n",(0,n.jsxs)(t.p,{children:["The first four bytes here, ",(0,n.jsx)(t.code,{children:"\\u0004\\u0000\\u0000\\u0000"}),", tell the serializer that this is a ",(0,n.jsx)(t.code,{children:"u32"})," array of length ",(0,n.jsx)(t.code,{children:"4"})," using little-endian encoding. The rest of the bytes are the literal numbers of the array \u2013 ",(0,n.jsx)(t.code,{children:"\\u0000\\u0001\\u0002\\u0003"}),". As you serialize more elements, each will add one byte to the data structure. With JSON, each new element requires adding two bytes, to represent both another comma and the number."]}),"\n",(0,n.jsx)(t.p,{children:"In general, Borsh is faster, uses less storage, and costs less gas. Use it if you can."}),"\n",(0,n.jsx)(t.h3,{id:"store-data-off-chain",children:"Store data off-chain"}),"\n",(0,n.jsx)(t.p,{children:"This is especially important if you are storing user-generated data!"}),"\n",(0,n.jsxs)(t.p,{children:["Let's use this ",(0,n.jsx)(t.a,{href:"https://github.com/near-examples/guest-book",children:"Guest Book"})," as an example. As implemented today, visitors to the app can sign in with NEAR and leave a message. Their message is stored on-chain."]}),"\n",(0,n.jsx)(t.p,{children:"Imagine this app got very popular, and that visitors started leaving unexpectedly long messages. The contract owner might run out of funding for storage very quickly!"}),"\n",(0,n.jsxs)(t.p,{children:["A better strategy could be to store data off-chain. If you want to keep the app decentralized, a popular off-chain data storage solution is ",(0,n.jsx)(t.a,{href:"https://ipfs.io/",children:"IPFS"}),". With this, you can represent any set of data with a predictable content address such as:"]}),"\n",(0,n.jsx)(t.p,{children:"QmYwAPJzv5CZsnA625s3Xf2nemtYgPpHdWEz79ojWnPbdG"}),"\n",(0,n.jsxs)(t.p,{children:["Such a content address could represent a JSON structure or an image or any other type of data. Where does this data get physically stored? You could use ",(0,n.jsx)(t.a,{href:"https://filecoin.io/",children:"Filecoin"})," or run your own IPFS server to pin your app's data."]}),"\n",(0,n.jsx)(t.p,{children:"With this approach, each record you add to your contract will be a predictable size."}),"\n",(0,n.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,n.jsx)(t.p,{children:"NEAR's structure incentivizes network operators while giving flexibility and predictability to contract developers. Managing storage is an important aspect of smart contract design, and NEAR's libraries make it easy to figure out how much storage will cost for your application."}),"\n",(0,n.jsx)(t.admonition,{title:"Got a question?",type:"tip",children:(0,n.jsx)("a",{href:"https://stackoverflow.com/questions/tagged/nearprotocol",children:(0,n.jsx)("h8",{children:"Ask it on StackOverflow!"})})}),"\n",(0,n.jsx)(t.h2,{id:"footnotes",children:"Footnotes"}),"\n",(0,n.jsxs)(t.section,{"data-footnotes":!0,className:"footnotes",children:[(0,n.jsx)(t.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{id:"user-content-fn-1",children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://gov.near.org/t/storage-staking-price/399",children:"Storage staking price"})," ",(0,n.jsx)(t.a,{href:"#user-content-fnref-1","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{id:"user-content-fn-2",children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://github.com/near/nearcore/pull/3881",children:"Lower storage cost 10x"})," ",(0,n.jsx)(t.a,{href:"#user-content-fnref-2","data-footnote-backref":"","aria-label":"Back to reference 2",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},11151:(e,t,a)=>{a.d(t,{Z:()=>i,a:()=>r});var n=a(67294);const s={},o=n.createContext(s);function r(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);