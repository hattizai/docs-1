"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[83836],{53985:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=t(85893),i=t(11151);const o={id:"data-storage",sidebar_label:"Data on the Blockchain"},r="Data on the Blockchain",s={id:"concepts/data-flow/data-storage",title:"Data on the Blockchain",description:"This article will cover a high-level overview of Blockchain concepts and tools which facilitate reading and writing Blockchain data.",source:"@site/../docs/1.concepts/data-flow/data-storage.md",sourceDirName:"1.concepts/data-flow",slug:"/concepts/data-flow/data-storage",permalink:"/concepts/data-flow/data-storage",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/1.concepts/data-flow/data-storage.md",tags:[],version:"current",lastUpdatedBy:"s-n-park",lastUpdatedAt:170733018e4,frontMatter:{id:"data-storage",sidebar_label:"Data on the Blockchain"},sidebar:"concepts",previous:{title:"Use cases",permalink:"/concepts/abstraction/signatures/use-cases"},next:{title:"Intro to Indexers",permalink:"/concepts/advanced/indexers"}},c={},l=[{value:"Writing data",id:"writing-data",level:2},{value:"Reading data",id:"reading-data",level:2},{value:"Information Availability",id:"information-availability",level:2},{value:"Data tools",id:"data-tools",level:2}];function d(e){const a={a:"a",admonition:"admonition",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components},{Details:t}=a;return t||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"data-on-the-blockchain",children:"Data on the Blockchain"}),"\n",(0,n.jsx)(a.p,{children:"This article will cover a high-level overview of Blockchain concepts and tools which facilitate reading and writing Blockchain data."}),"\n",(0,n.jsx)(a.h2,{id:"writing-data",children:"Writing data"}),"\n",(0,n.jsx)(a.p,{children:"By design, a Blockchain is a distributed database, and blockchain data is optimized to be stored in serialized blocks, writing one block at a time as the chain is being created. These serialized blocks store information about primitive components like transactions, accounts, and contracts."}),"\n",(0,n.jsx)(a.p,{children:"Blockchain\u2019s writing process provides a great way to apply the requested changes to the state in a decentralized manner. However, to observe the changes, you need to actively pull the information from the network. As a result, traversing several blocks and aggregating data is necessary when trying to get data across multiple contracts or a longer time range."}),"\n",(0,n.jsx)(a.h2,{id:"reading-data",children:"Reading data"}),"\n",(0,n.jsx)(a.p,{children:'Querying the Blockchain for data about a specific block or account is fairly straightforward and can be considered a "narrow" query. However, querying data across many blocks can be cumbersome because you must aggregate results from multiple single-block queries. Therefore, these can be considered "wide" queries.'}),"\n",(0,n.jsx)(a.admonition,{type:"info",children:(0,n.jsx)(a.p,{children:"The nature of a blockchain is that it must be deterministic. A critical feature of a blockchain is that it knows the state at a given block (or time unit). Think of them as snapshots \u2013  a blockchain does snapshots of its state on every block."})}),"\n",(0,n.jsx)(a.p,{children:"For example, a user can call a smart contract for a specific block, and the blockchain guarantees that the execution will always produce the same result for the same block any time you call it."}),"\n",(0,n.jsx)(a.admonition,{type:"note",children:(0,n.jsx)(a.p,{children:"The deterministic nature of a blockchain isolates it from off-chain (external) variables. It is impossible to call an external API to read data from within a smart contract. Therefore, blockchains and smart contracts are closed-off from the outer (off-chain) world."})}),"\n",(0,n.jsx)(a.h2,{id:"information-availability",children:"Information Availability"}),"\n",(0,n.jsx)(a.p,{children:"As mentioned, the essential information you can acquire from the Blockchain\u2019s state is related to the transactions, accounts, and contracts taking place at a given block."}),"\n",(0,n.jsxs)(a.p,{children:["A simple way to get such information from the blockchain is using RPC. NEAR implements a ",(0,n.jsx)(a.a,{href:"/api/rpc/introduction",children:"JSON-RPC endpoint"})," for everyone to interact with the blockchain. Through the JSON-RPC API, users can call smart contracts and view the data from the blockchain.\nKeep in mind that not all the data is available through the JSON-RPC. For example, local Receipts are unavailable through the JSON-RPC because they are not stored in the NEAR node's internal database."]}),"\n",(0,n.jsx)(a.admonition,{type:"tip",children:(0,n.jsx)(a.p,{children:"The JSON-RPC endpoint  approach is the so-called pull model of getting the data. There is nothing wrong with this approach, but it is sometimes not the most comfortable or reliable alternative."})}),"\n",(0,n.jsx)(a.p,{children:"As you can imagine, this basic block information might not be enough for a complex project. For example, in an NFT marketplace, basic read operations via RPC calls could help get the status of a purchase or get the NEAR balance of an NFT creator account, but for information like getting the owner of a certain NFT, getting the metadata of an NFT based on its ID, or the total supply for a certain type of NFT, dApp developers would need to do additional parsing and processing after calling the RPC primitive methods."}),"\n",(0,n.jsx)(a.p,{children:"More advanced real-world queries and operations like aggregation, search, relationships, and non-trivial filtering are simply not possible using RPC calls alone. An example of this is showing a leaderboard of the most popular NFT collections in the last 7 days. It would not be possible to get that information by interacting directly with the contract itself or via RPC. Getting this data would require processing every single transaction that ever happened, aggregating them in terms of collection, filtering them by timestamps calculation, and ordering them in terms of total transacted value."}),"\n",(0,n.jsx)(a.p,{children:'One option to solve these complex data requirements is to build a server using an indexing framework. A blockchain indexer is an implementation of the push model of getting the data. Instead of actively pulling the data from the source, indexers listen to the stream of data from the blockchain, and the data can be immediately filtered and processed according to defined requirements. Indexers can also be used to simplify the "wide" query execution. For example, a data stream can be written to a permanent database for later data analysis using a convenient query language like SQL.'}),"\n",(0,n.jsx)(a.h2,{id:"data-tools",children:"Data tools"}),"\n",(0,n.jsx)(a.p,{children:"Building a server and indexing blockchain data on your own is not an easy task. The index server will be responsible for processing all the transactions and saving them to a database. Then you\u2019ll need to build a set of APIs to get the data for your dApp. This option is resource intensive, requires maintenance, presents a single point of failure, and breaks important security properties required for decentralization.\nAlso, specific Blockchain properties like finality, chain reorganizations, or empty blocks complicate this process further and make it not just time-consuming but conceptually hard to retrieve correct query results from blockchain data."}),"\n",(0,n.jsxs)(a.p,{children:["As an alternative, you can try one of the many available indexing services on the NEAR blockchain, and here is a ",(0,n.jsx)(a.a,{href:"https://docs.pagoda.co/decision-tree-lt",children:"suggestive decision tree"})," of which tool to use for your data needs presented by Pagoda:"]}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{children:(0,n.jsx)("b",{children:"Data Platform Decision Tree"})}),(0,n.jsx)("a",{href:"/docs/assets/data-decision-tree.png",target:"_blank",children:(0,n.jsx)("img",{src:"/docs/assets/data-decision-tree.png"})})]}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.a,{href:"/concepts/advanced/near-indexer-framework",children:"NEAR Indexer Framework"}),': a micro-framework providing you with a "live" stream of blocks. Useful to handle on-chain real-time "events".']}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.a,{href:"/tools/indexer-for-explorer",children:"NEAR Indexer for Explorer"}),": leverages the indexer micro-framework to watch and store all of the blockchain's events/data into a transactional PostgreSQL database. You can clone the ",(0,n.jsx)(a.a,{href:"https://github.com/near/near-indexer-for-explorer",children:"GitHub repository"})," and customize your own indexer solution."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.a,{href:"/concepts/advanced/near-lake-framework",children:"NEAR Lake Framework"}),": a companion library to NEAR Lake. It allows you to build your own indexer that watches a stream of blocks from a NEAR Lake data source and allows you to create your own logic to process that data. Keep in mind this is probably the one you want to use for future projects, instead of the Indexer Framework. Read ",(0,n.jsx)(a.a,{href:"/concepts/advanced/near-indexer-framework#why-is-it-better-than-near-indexer-framework",children:"why is better"}),"."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.a,{href:"/concepts/advanced/near-lake-framework",children:"NEAR Lake Indexer"}),": leverages the indexer micro-framework to watch and store all of the blockchain's events/data as JSON files on a user-specified AWS S3 or S3-compatible storage."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.a,{href:"https://near.org/dataplatform.near/widget/QueryApi.App",children:"Near Query API"}),": Query API allows you to seamlessly create, manage, and discover indexers on NEAR. Developers can deploy their indexers to aggregate historical data in a matter of minutes, while accessing the data via custom GraphQL queries."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.a,{href:"https://thegraph.com/docs/en/cookbook/near/",children:"The Graph"}),": The Graph gives developers tools to process blockchain events and make the resulting data easily available via a GraphQL API, known individually as a subgraph. ",(0,n.jsx)(a.a,{href:"https://github.com/graphprotocol/graph-node",children:"Graph Node"})," is now able to process NEAR events, which means that NEAR developers can now build subgraphs to index their smart contracts."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.a,{href:"https://pagoda.co",children:"Pagoda API"})," is a hosted service managed by Pagoda that solves the complex data problem by indexing the blockchain into datamarts and is accessible via standard RESTful APIs for you to directly use in any part of your application. The API enables performant and efficient querying of blockchain data without having to build and manage your own indexer infrastructure. Pagoda also offers the Indexer framework as a decentralized solution to indexing on-chain data, and a centralized Data Lake source that can be used to build your own indexers and servers for such data query needs."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.a,{href:"https://pikespeak.ai",children:"PIKESPEAK API"}),": an enterprise-grade API where you can fetch blockchain events and aggregated analytics on wallets, validators, delegators, money transfers, dapps activity and more. ",(0,n.jsx)(a.a,{href:"https://doc.pikespeak.ai/",children:"Documentation"})]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.a,{href:"https://mintbase.xyz/",children:"Mintbase Indexer"})," A highly efficient and adaptable indexing solution developed to capture, process, and store NFT events throughout the NEAR ecosystem. This indexer provides developers with a streamlined and well-structured data stream, making it an optimal choice for constructing data-centric applications in the NFT space. By systematically monitoring and indexing a wide array of NFT-related events across various platforms and projects on NEAR, the Mintbase Indexer offers developers the necessary tools and data access to build innovative and practical applications. Furthermore, the indexed data can be conveniently queried using GraphQL, allowing for flexible and efficient data retrieval tailored to specific developer needs. ",(0,n.jsx)(a.a,{href:"https://docs.mintbase.xyz/dev/mintbase-graph",children:"Documentation"})]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.a,{href:"https://academy.subquery.network/quickstart/quickstart_chains/near.html",children:"SubQuery"}),": SubQuery is a fast, flexible, and reliable open-source data indexer that provides you with custom APIs for your web3 project across NEAR and many other chains. NEAR developers will benefit from the superior SubQuery experience, including the open-source SDK, tools, ",(0,n.jsx)(a.a,{href:"https://academy.subquery.network",children:"documentation"}),", and developer support that the SubQuery ecosystem provides. Additionally, NEAR is accommodated by ",(0,n.jsx)(a.a,{href:"http://managedservice.subquery.network/",children:"SubQuery\u2019s Managed Service"}),", which provides enterprise-level infrastructure hosting."]}),"\n"]})]})}function h(e={}){const{wrapper:a}={...(0,i.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:(e,a,t)=>{t.d(a,{Z:()=>s,a:()=>r});var n=t(67294);const i={},o=n.createContext(i);function r(e){const a=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(o.Provider,{value:a},e.children)}}}]);