"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1016],{76078:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var o=a(85893),r=a(11151);const n={id:"validators",title:"Validators"},s=void 0,i={id:"concepts/basics/validators",title:"Validators",description:"The NEAR network is decentralized, meaning that multiple people collaborate in order to keep it safe. We call such people validators. We call such people validators.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/1.concepts/basics/validators.md",sourceDirName:"1.concepts/basics",slug:"/concepts/basics/validators",permalink:"/zh-CN/concepts/basics/validators",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/1.concepts/basics/validators.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1709152665e3,frontMatter:{id:"validators",title:"Validators"},sidebar:"concepts",previous:{title:"Alternative Solutions",permalink:"/zh-CN/concepts/storage/storage-solutions"},next:{title:"Networks",permalink:"/zh-CN/concepts/basics/networks"}},l={},c=[{value:"Securing the Network",id:"securing-the-network",level:3},{value:"Validator&#39;s Economy",id:"validators-economy",level:3},{value:"Intro to Validators",id:"intro-to-validators",level:2},{value:"Chunk-Only Validators",id:"chunk-only-validators",level:2},{value:"Dedicated Validator Documentation Site",id:"dedicated-validator-documentation-site",level:2}];function h(e){const t={a:"a",h2:"h2",h3:"h3",p:"p",strong:"strong",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["The NEAR network is decentralized, meaning that multiple people collaborate in order to keep it safe. We call such people ",(0,o.jsx)(t.strong,{children:"validators"}),". We call such people ",(0,o.jsx)(t.strong,{children:"validators"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"In order to make sure that all the transactions in the network are valid, i.e. that nobody is trying to steal money, the validators follow a specific consensus mechanism."}),"\n",(0,o.jsxs)(t.p,{children:["Currently, there are a few well-known consensus mechanisms to keep a blockchain working correctly and resistant to attacks. Currently, there are a few well-known consensus mechanisms to keep a blockchain working correctly and resistant to attacks. NEAR Protocol uses a version of ",(0,o.jsx)(t.strong,{children:"Proof-of-Stake"}),", particularly ",(0,o.jsx)(t.a,{href:"https://near.org/blog/thresholded-proof-of-stake/",children:"Thresholded Proof of Stake"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["In Proof-of-Stake, users show support to specific network validators by delegating NEAR tokens to them. This process is known as ",(0,o.jsx)(t.strong,{children:"staking"}),". The main idea is that, if a validator has a large amount of tokens delegated is because the community trusts them. This process is known as ",(0,o.jsx)(t.strong,{children:"staking"}),". The main idea is that, if a validator has a large amount of tokens delegated is because the community trusts them."]}),"\n",(0,o.jsx)(t.h3,{id:"securing-the-network",children:"Securing the Network"}),"\n",(0,o.jsx)(t.p,{children:"Validators have two main jobs. The first is to validate and execute transactions, aggregating them in the blocks that form the blockchain. Validators have two main jobs. The first is to validate and execute transactions, aggregating them in the blocks that form the blockchain. Their second job is to oversee other validators, making sure no one produces an invalid block or creates an alternative chain (eg. with the goal of creating a double spend)."}),"\n",(0,o.jsx)(t.p,{children:'If a validator is caught misbehaving, then they get "slashed", meaning that their stake (or part of it) is burned.'}),"\n",(0,o.jsx)(t.p,{children:"In the NEAR networks, an attempt to manipulate the chain would mean taking control over the majority of the validators at once, so that the malicious activity won't be flagged. However, this would require putting a huge sum of capital at risk, since an unsuccessful attack would mean slashing your staked tokens. However, this would require putting a huge sum of capital at risk, since an unsuccessful attack would mean slashing your staked tokens."}),"\n",(0,o.jsx)(t.h3,{id:"validators-economy",children:"Validator's Economy"}),"\n",(0,o.jsx)(t.p,{children:"In exchange for servicing the network, validators are rewarded with a target number of NEAR every epoch. In exchange for servicing the network, validators are rewarded with a target number of NEAR every epoch. The target value is computed in such a way that, on an annualized basis, it will be 4.5% of the total supply."}),"\n",(0,o.jsx)(t.p,{children:"All transaction fees (minus the part which is allocated as the rebate for contracts) which are collected within each epoch are burned by the system. The inflationary reward is paid out to validators at the same rate regardless of the number of fees collected or burned. The inflationary reward is paid out to validators at the same rate regardless of the number of fees collected or burned."}),"\n",(0,o.jsx)(t.h2,{id:"intro-to-validators",children:"Intro to Validators"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"https://pages.near.org/papers/the-official-near-white-paper/#economics",children:"Validators"})," are responsible for producing blocks and the security of the network."]}),"\n",(0,o.jsxs)(t.p,{children:["Since Validators validate all shards, high requirements are set for running them (an 8-Core CPU with 16GB of RAM and 1 TB SSD of storage). The cost of running a block-producing validator node is estimated to be $330 per month for hosting. Please see our ",(0,o.jsx)(t.a,{href:"https://near-nodes.io/validator/hardware",children:"hardware and cost estimates page"})," for more info."]}),"\n",(0,o.jsx)(t.p,{children:"The current active Validators are available on the Explorer. The minimum seat price to become a block-producing validator is based on the 300th proposal. (If more than 300 proposals are submitted, the threshold will simply be the stake of the 300th proposal, provided that it\u2019s larger than the minimum threshold of 25,500 $NEAR.) The current active Validators are available on the Explorer. The minimum seat price to become a block-producing validator is based on the 300th proposal. (If more than 300 proposals are submitted, the threshold will simply be the stake of the 300th proposal, provided that it\u2019s larger than the minimum threshold of 25,500 $NEAR.) The current seat price to become a block-producing validator is updated live on the Explorer. Any validator nodes with stakes higher than the seat price can join the active set of Validators. Any validator nodes with stakes higher than the seat price can join the active set of Validators."}),"\n",(0,o.jsxs)("blockquote",{className:"lesson",children:[(0,o.jsx)("strong",{children:"Is there a plan to support GPU compute if certain validator nodes can offer that or is it just CPU?"}),(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),(0,o.jsx)(t.p,{children:"We don't need GPU support as we are a POS chain and we require very little compute power."}),(0,o.jsxs)(t.p,{children:["You can read more about our consensus strategy on our ",(0,o.jsx)("a",{href:"https://github.com/near/wiki/blob/master/Archive/validators/about.md",children:"Validator Quickstart"})," and ",(0,o.jsx)("a",{href:"https://github.com/near/wiki/blob/master/Archive/validators/faq.md",children:"Staking FA"}),"."]}),(0,o.jsxs)(t.p,{children:["You can read more about our consensus strategy on our ",(0,o.jsx)("a",{href:"https://github.com/near/wiki/blob/master/Archive/validators/about.md",children:"Validator Quickstart"})," and ",(0,o.jsx)("a",{href:"https://github.com/near/wiki/blob/master/Archive/validators/faq.md",children:"Staking FA"}),"."]})]}),"\n",(0,o.jsx)(t.h2,{id:"chunk-only-validators",children:"Chunk-Only Validators"}),"\n",(0,o.jsx)(t.p,{children:"The Chunk-Only Producer is a more accessible role with lower hardware and token requirements. The Chunk-Only Producer is a more accessible role with lower hardware and token requirements. This new role will allow the network's validator number to grow, creating more opportunities to earn rewards and secure the NEAR Ecosystem."}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"https://pages.near.org/papers/the-official-near-white-paper/#economics",children:"Chunk-Only Producers"})," are solely responsible for ",(0,o.jsx)(t.a,{href:"https://pages.near.org/papers/nightshade/#nightshade",children:"producing chunks"})," (parts of the block from a shard, see ",(0,o.jsx)(t.a,{href:"https://near.org/papers/nightshade/",children:"Nightshade"})," for more detail) in one shard (a partition on the network). Because Chunk-Only Producers only need to validate one shard, they can run the validator node on a 8-Core CPU, with 16GB of RAM, and 500 GB SSD of storage."]}),"\n",(0,o.jsxs)(t.p,{children:["Like Validators, Chunk-Only Producers will receive, at minimum, 4.5% annual rewards. Like Validators, Chunk-Only Producers will receive, at minimum, 4.5% annual rewards. If less than 100% of the tokens on the network is staked, Chunk-Only Producers stand to earn even more annual rewards. For more details about the Validator\u2019s economics, please check out ",(0,o.jsx)(t.a,{href:"https://near.org/blog/near-protocol-economics/",children:"NEAR\u2019s Economics Explained"}),". For more details about the Validator\u2019s economics, please check out ",(0,o.jsx)(t.a,{href:"https://near.org/blog/near-protocol-economics/",children:"NEAR\u2019s Economics Explained"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"dedicated-validator-documentation-site",children:"Dedicated Validator Documentation Site"}),"\n",(0,o.jsxs)(t.p,{children:["If you'd like to further explore Validators and Nodes in general, you can visit the ",(0,o.jsx)(t.a,{href:"https://near-nodes.io/",children:"Dedicated Validator Documentation Site"}),"."]}),"\n",(0,o.jsxs)("blockquote",{className:"lesson",children:[(0,o.jsx)("strong",{children:"If a developer writes a vulnerable or malicious dApp, is a validator implicitly taking on risk?"}),(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),(0,o.jsx)(t.p,{children:"No. We have handled the potential damages to the network on the protocol level. For example, we have a lot of limiters that constrain how much data you can pass into a function call or how much compute you can do in one function call, etc."}),(0,o.jsx)(t.p,{children:"That said, smart contract developers will need to be responsible for their own dApps, as there is no stage gate or approval process. All vulnerability can only damage the smart contract itself. Luckily, updating smart contracts is very smooth on NEAR, so vulnerabilities can be updated/patched to an account in ways that cannot be done on other blockchains. We have handled the potential damages to the network on the protocol level. For example, we have a lot of limiters that constrain how much data you can pass into a function call or how much compute you can do in one function call, etc."}),(0,o.jsx)(t.p,{children:"That said, smart contract developers will need to be responsible for their own dApps, as there is no stage gate or approval process. All vulnerability can only damage the smart contract itself. Luckily, updating smart contracts is very smooth on NEAR, so vulnerabilities can be updated/patched to an account in ways that cannot be done on other blockchains."})]})]})}function d(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},11151:(e,t,a)=>{a.d(t,{Z:()=>i,a:()=>s});var o=a(67294);const r={},n=o.createContext(r);function s(e){const t=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(n.Provider,{value:t},e.children)}}}]);