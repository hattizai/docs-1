"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4081],{73934:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var i=t(85893),s=t(11151);const a={id:"storage-solutions",title:"Decentralized Storage Solutions",sidebar_label:"Alternative Solutions"},r=void 0,o={id:"concepts/storage/storage-solutions",title:"Decentralized Storage Solutions",description:"In this article you'll find a brief overview of different decentralized storage solutions that can be integrated into your decentralized applications (dApps). This will allow you to store large amounts of data using a more economical alternative to native NEAR storage.",source:"@site/../docs/1.concepts/storage/decentralized-storage.md",sourceDirName:"1.concepts/storage",slug:"/concepts/storage/storage-solutions",permalink:"/zh-CN/concepts/storage/storage-solutions",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/1.concepts/storage/decentralized-storage.md",tags:[],version:"current",lastUpdatedBy:"Jessie Mongeon",lastUpdatedAt:1676414212,formattedLastUpdatedAt:"2023\u5e742\u670814\u65e5",frontMatter:{id:"storage-solutions",title:"Decentralized Storage Solutions",sidebar_label:"Alternative Solutions"},sidebar:"concepts",previous:{title:"Storage Staking",permalink:"/zh-CN/concepts/storage/storage-staking"},next:{title:"Validators",permalink:"/zh-CN/concepts/basics/validators"}},l={},d=[{value:"On-Chain Storage Constraints",id:"on-chain-storage-constraints",level:2},{value:"Arweave",id:"arweave",level:2},{value:"Example implementation",id:"example-implementation",level:3},{value:"Arlocal setup",id:"arlocal-setup",level:3},{value:"NEAR-Arweave frontend",id:"near-arweave-frontend",level:3},{value:"Mining your transaction",id:"mining-your-transaction",level:3},{value:"Retrieve the image",id:"retrieve-the-image",level:3},{value:"Crust",id:"crust",level:2},{value:"Integration example",id:"integration-example",level:3},{value:"1. Upload the file to IPFS",id:"1-upload-the-file-to-ipfs",level:4},{value:"2. Place an storage order",id:"2-place-an-storage-order",level:4},{value:"3. Query order status",id:"3-query-order-status",level:4},{value:"4. Add file prepaid",id:"4-add-file-prepaid",level:4},{value:"IPFS",id:"ipfs",level:2},{value:"Content identifier",id:"content-identifier",level:3},{value:"Look-up",id:"look-up",level:3},{value:"Pinned content",id:"pinned-content",level:3},{value:"File versions",id:"file-versions",level:3},{value:"Naming system",id:"naming-system",level:3},{value:"IPFS providers",id:"ipfs-providers",level:3},{value:"Example",id:"example",level:3}];function c(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"In this article you'll find a brief overview of different decentralized storage solutions that can be integrated into your decentralized applications (dApps). This will allow you to store large amounts of data using a more economical alternative to native NEAR storage."}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#arweave",children:"Arweave"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#crust",children:"Crust"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#ipfs",children:"IPFS"})}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"on-chain-storage-constraints",children:"On-Chain Storage Constraints"}),"\n",(0,i.jsx)(n.p,{children:"For storing data on-chain it's important to keep in mind the following:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"You can store an unlimited amount of files, but will cost you 1N per 100KB"}),"\n",(0,i.jsx)(n.li,{children:"There is a 4 MB limit on how much you can upload at once"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["For example, if you want to store an NFT purely on-chain (rather than using IPFS or some other decentralized storage solution as mentioned below) you'll have almost an unlimited amount of storage but will have to pay 1 $NEAR per 100 KB of storage used (see ",(0,i.jsx)(n.a,{href:"https://docs.near.org/concepts/storage/storage-staking",children:"Storage Staking"}),")"]}),"\n",(0,i.jsxs)(n.p,{children:["Users will be limited to 4MB per contract call upload due to ",(0,i.jsx)(n.code,{children:"MAX_GAS"})," constraints. The maximum amount of gas one can attach to a given ",(0,i.jsx)(n.code,{children:"functionCall"})," is 300TGas."]}),"\n",(0,i.jsx)(n.h2,{id:"arweave",children:"Arweave"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://www.arweave.org/",children:"Arweave"})," is a new type of storage that backs data with sustainable and perpetual endowments\n(tokens held within the protocol that benefit from inflation and the decrease in the cost of storage over long periods of time). This allows users and developers to store data forever.\nArweave acts as a collectively owned hard drive, and allows their users to preserve valuable information, apps, and history indefinitely."]}),"\n",(0,i.jsxs)(n.p,{children:["The Arweave protocol matches a torrent-like swarm of incentivised miners with massive collective hard drive space with those individuals and organizations that need to store data or host content permanently. This is achieved in a decentralized network, and all data stored is backed by block mining rewards and a ",(0,i.jsx)(n.a,{href:"https://arwiki.wiki/#/en/storage-endowment",children:"sustainable endowment"})," ensuring it is available in perpetuity."]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["To learn more about Arweave, check its ",(0,i.jsx)(n.a,{href:"https://arwiki.wiki/#/en/arweave-mining",children:"mining mechanism"})," and its ",(0,i.jsx)(n.a,{href:"https://arwiki.wiki/#/en/karma",children:"bandwidth-sharing system"}),"."]})}),"\n",(0,i.jsx)(n.h3,{id:"example-implementation",children:"Example implementation"}),"\n",(0,i.jsx)(n.p,{children:"Let's see how to store some files on Arweave, by running a local Arweave gateway-like server."}),"\n",(0,i.jsx)(n.h3,{id:"arlocal-setup",children:"Arlocal setup"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/textury/arlocal",children:"Arlocal"})," essentially creates a simulated version of Arweave. Think of it like a local node that runs on your computer to store information."]}),"\n",(0,i.jsxs)(n.p,{children:["In this example you'll need to run ",(0,i.jsx)(n.strong,{children:"two terminals"}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Open your first terminal and run:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npx arlocal\n"})}),"\n",(0,i.jsxs)(n.p,{children:["You should see the response: ",(0,i.jsx)(n.code,{children:"arlocal started on port 1984"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["You can specify the port by using ",(0,i.jsx)(n.code,{children:"npx arlocal <desired port number>"}),"."]})}),"\n",(0,i.jsx)(n.h3,{id:"near-arweave-frontend",children:"NEAR-Arweave frontend"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.a,{href:"https://github.com/near-examples/NEAR-Arweave-Tutorial",children:"NEAR-Arweave repository"})," has a simple frontend that allows you to store ",(0,i.jsx)(n.code,{children:".png"})," files using arlocal."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Now open your second terminal and clone the frontend by running the following command:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/near-examples/NEAR-Arweave-Tutorial.git\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Install dependencies by running the following in the project folder:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd NEAR-Arweave-Tutorial\nyarn\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Next, start the application by running:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"yarn start \n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Now you're ready to upload an image by selecting the ",(0,i.jsx)("kbd",{children:"Choose File"})," button:"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Arweave step 1",src:t(7086).Z+"",width:"1670",height:"569"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["You should see the transaction ID window become populated after hitting the ",(0,i.jsx)("kbd",{children:"Submit"})," button:"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Arweave step 2",src:t(15988).Z+"",width:"1670",height:"573"})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["If you get an error, make sure your arlocal node is running in a ",(0,i.jsx)(n.strong,{children:"separate terminal."})]})}),"\n",(0,i.jsx)(n.h3,{id:"mining-your-transaction",children:"Mining your transaction"}),"\n",(0,i.jsx)(n.p,{children:"On Arweave your transaction goes through two stages; a pending stage and a confirmed stage. For the transaction to be complete and for you to be able to retrieve your data, your transaction must be confirmed."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Visit ",(0,i.jsx)(n.code,{children:"http://localhost:1984/mine"})," in your browser to send a mine request to your local node."]}),"\n"]}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsx)(n.mdxAdmonitionTitle,{}),(0,i.jsx)(n.p,{children:"you may find that you are still able to retrieve your data without this step, but that's because you are running a local node.\nWhen dealing with a real Arweave node you will have to wait until your transaction has been mined and confirmed."})]}),"\n",(0,i.jsx)(n.h3,{id:"retrieve-the-image",children:"Retrieve the image"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Now you can copy and paste any of your listed arweave transaction IDs in step 5 on the frontend to retrieve your file from your local node:"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Arweave step 3",src:t(91501).Z+"",width:"2884",height:"1786"})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["Using Arweave's live network will require purchasing artokens to pay for storage. You can find out more at ",(0,i.jsx)(n.a,{href:"https://www.arweave.org/",children:"arweave.org"}),"."]})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.a,{href:"https://github.com/near/near-api-js",children:"near-api-js"})," and ",(0,i.jsx)(n.a,{href:"https://github.com/ArweaveTeam/arweave-js",children:"arweave-js"})," JavaScript libraries allow you to automate most of these steps."]})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"crust",children:"Crust"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://crust.network",children:"Crust"})," provides a Web3.0 decentralized storage network for the Metaverse.\nIt is designed to realize core values of decentralization, privacy and assurance.\nCrust supports multiple storage-layer protocols such as IPFS and exposes instant accessible on-chain storage functions to users.\nCrust\u02bcs technical stack is also capable of supporting data manipulation and computing."]}),"\n",(0,i.jsxs)(n.p,{children:["The Crust protocol is 100% compatible with the ",(0,i.jsx)(n.a,{href:"https://ipfs.io",children:"IPFS"})," protocol, and it matches people who have hard drive space to spare with those who need to store data or host content.\nCrust is based on the Polkadot ecosystem and supports most contract platforms, including NEAR/Solana/Ethereum/Elrond/etc. with its cross-chain solution."]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["To learn more about Crust, check its ",(0,i.jsx)(n.a,{href:"https://wiki.crust.network/docs/en/DSM",children:"Decentralized Storage Market"})," and ",(0,i.jsx)(n.a,{href:"https://wiki.crust.network/docs/en/GPoS",children:"Guaranteed Proof of Stake"}),".\nAlso, you can start with ",(0,i.jsx)(n.a,{href:"https://wiki.crust.network/docs/en/build101",children:"Build-101"}),"."]})}),"\n",(0,i.jsx)(n.h3,{id:"integration-example",children:"Integration example"}),"\n",(0,i.jsx)(n.p,{children:"Here's a simple integration example to store a file with Crust and NEAR."}),"\n",(0,i.jsx)(n.h4,{id:"1-upload-the-file-to-ipfs",children:"1. Upload the file to IPFS"}),"\n",(0,i.jsx)(n.p,{children:"First, you need to put your files into IPFS."}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["If you want to learn how to upload ",(0,i.jsx)(n.strong,{children:"files and folders"})," into IPFS, please refer to ",(0,i.jsx)(n.a,{href:"https://wiki.crust.network/docs/en/buildFileStoringWithGWDemo#1-upload-files-to-ipfs-gateway",children:"this section"}),"."]})}),"\n",(0,i.jsx)(n.p,{children:"There are 2 ways to upload a file to IPFS:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"using a local IPFS node"}),"\n",(0,i.jsxs)(n.li,{children:["using a remote ",(0,i.jsx)(n.a,{href:"https://docs.ipfs.io/concepts/ipfs-gateway/#authenticated-gateways",children:"IPFS W3Authed Gateway"})]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["You can find more details about ",(0,i.jsx)(n.code,{children:"ipfsW3GW"})," endpoints on ",(0,i.jsx)(n.a,{href:"https://github.com/crustio/ipfsscan/blob/main/lib/constans.ts#L29",children:"this link"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["You can also find a code example on how to upload a file to IPFS on ",(0,i.jsx)(n.a,{href:"https://github.com/crustio/crust-demo/blob/main/near/src/index.ts#L20-L51",children:"this link"}),"."]}),"\n"]})}),"\n",(0,i.jsx)(n.h4,{id:"2-place-an-storage-order",children:"2. Place an storage order"}),"\n",(0,i.jsxs)(n.p,{children:["Next, you need to send a transaction named ",(0,i.jsx)(n.code,{children:"Place Storage Order"})," on Crust chain.\nThis transaction will dispatch your storage requirement to each Crust IPFS nodes through the blockchain.\nThen the IPFS nodes will start pulling your file using the IPFS protocol."]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["You can find more information about ",(0,i.jsx)(n.code,{children:"crustChainEndpoint"})," on ",(0,i.jsx)(n.a,{href:"https://github.com/crustio/crust-apps/blob/master/packages/apps-config/src/endpoints/production.ts#L9",children:"this link"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["You can create your own account (",(0,i.jsx)(n.code,{children:"seeds"}),") following ",(0,i.jsx)(n.a,{href:"https://wiki.crust.network/docs/en/crustAccount#create-an-account-1",children:"these instructions"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Check ",(0,i.jsx)(n.a,{href:"https://github.com/crustio/crust-demo/blob/main/near/src/index.ts#L82-L112",children:"this link"})," for a code example about placing a storage order on Crust."]}),"\n"]})}),"\n",(0,i.jsx)(n.h4,{id:"3-query-order-status",children:"3. Query order status"}),"\n",(0,i.jsxs)(n.p,{children:["Then, you can query the storage order by calling on-chain status (",(0,i.jsx)(n.code,{children:"status{replica_count, storage_duration, ...}"}),").\nThis call will return:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    "file_size": 23710,\n    "spower": 24895,\n    "expired_at": 2594488, // Storage duration\n    "calculated_at": 2488,\n    "amount": "545.3730 nCRU",\n    "prepaid": 0,\n    "reported_replica_count": 1, // Replica count\n    "replicas": [{\n        "who": "cTHATJrSgZM2haKfn5e47NSP5Y5sqSCCToxrShtVifD2Nfxv5",\n        "valid_at": 2140,\n        "anchor": "0xd9aa29dda8ade9718b38681adaf6f84126531246b40a56c02eff8950bb9a78b7c459721ce976c5c0c9cd4c743cae107e25adc3a85ed7f401c8dde509d96dcba0",\n        "is_reported": true,\n        "created_at": 2140\n    }] // Who stores the file\n}\n'})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["Find a code example about quering storage status on ",(0,i.jsx)(n.a,{href:"https://github.com/crustio/crust-demo/blob/main/near/src/index.ts#L144-L147",children:"this link"}),"."]})}),"\n",(0,i.jsx)(n.h4,{id:"4-add-file-prepaid",children:"4. Add file prepaid"}),"\n",(0,i.jsx)(n.p,{children:"The default storage time for a single transaction (order) is 6 months.\nIf you want to extend the storage duration, Crust provides a prepaid pool so you can customize the file's storage time.\nThis pool allows you to put some tokens and will automatically extend the file's storage time."}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["Follow ",(0,i.jsx)(n.a,{href:"https://github.com/crustio/crust-demo/blob/main/near/src/index.ts#L114-L142",children:"this link"})," for a code snippet on how to add prepaid tokens to your files."]})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"ipfs",children:"IPFS"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.a,{href:"https://ipfs.io/",children:"InterPlanetary File System"})," (IPFS) is a protocol and peer-to-peer network for storing and sharing data in a distributed file system. IPFS uses content-addressing to uniquely identify each file in a global namespace connecting all computing devices."]}),"\n",(0,i.jsx)(n.h3,{id:"content-identifier",children:"Content identifier"}),"\n",(0,i.jsx)(n.p,{children:"When you add a file to IPFS it is split into cryptographically hashed smaller chunks and then given a unique fingerprint called a content identifier (CID)."}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsx)(n.mdxAdmonitionTitle,{}),(0,i.jsx)(n.p,{children:"The CID acts as an permanent record of a file as it exists at that point in time."})]}),"\n",(0,i.jsx)(n.h3,{id:"look-up",children:"Look-up"}),"\n",(0,i.jsx)(n.p,{children:"When a node looks up for a file, it ask the peer nodes for the content referenced by the file's CID. When a node views or downloads a file, it caches a copy and become another provider until the cache is cleared."}),"\n",(0,i.jsx)(n.h3,{id:"pinned-content",children:"Pinned content"}),"\n",(0,i.jsx)(n.p,{children:"On the IPFS network, each node stores only content it is interested in.\nA node can pin content in order to keep it forever, or discard content it hasn't used to save space."}),"\n",(0,i.jsx)(n.h3,{id:"file-versions",children:"File versions"}),"\n",(0,i.jsx)(n.p,{children:"When you add a new version of your file to IPFS it will get a new CID since the cryptographic hash is different.\nThis means that any changes to a file will not overwrite the original and common chunks across files can be reused in order to minimize storage costs."}),"\n",(0,i.jsx)(n.h3,{id:"naming-system",children:"Naming system"}),"\n",(0,i.jsx)(n.p,{children:"IPFS offers a decentralized naming system so you don't need to remember a long string of CIDs.\nIPFS can find the latest version of your file using the IPNS decentralized naming system and you can use DNSLink to map CIDs to human-readable DNS names."}),"\n",(0,i.jsx)(n.h3,{id:"ipfs-providers",children:"IPFS providers"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://web3.storage/",children:"Web3.Storage"}),": it's a free service that simplifies building on top of IPFS and Filecoin. Web3.Storage is backed by Filecoin and makes content available via IPFS, leveraging the unique properties of each network."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://nft.storage/",children:"NFT.Storage"}),": this free service is built specifically for storing off-chain NFT data. Data is stored decentralized on IPFS and Filecoin. The data is referenced using content-addressed IPFS URIs that can be used in your smart contracts."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://filebase.com/",children:"Filebase"}),": a geo-redundant IPFS pinning provider that pins all IPFS files with automatic 3x redundancy across diverse, geographic locations for additional performance, redundancy, and reliability."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,i.jsxs)(n.p,{children:["Let's try a simple IPFS integration using the ",(0,i.jsx)(n.a,{href:"https://nft.storage/api-docs/",children:"NFT.Storage API"}),":"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://nft.storage/login/",children:"Register an account on nft.storage"})," so you can create API access keys."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://nft.storage/manage/",children:"Create an API access key"})," and write it down."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Submit an ",(0,i.jsx)(n.code,{children:"HTTP POST"})," request to ",(0,i.jsx)(n.code,{children:"api.nft.storage/upload"}),", passing the API key and the file data in the request body:"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"curl -X POST --data-binary @/path/to/file/art.png -H 'Authorization: Bearer YOUR_API_KEY' https://api.nft.storage/upload\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["If you want to use a different HTTP client, don't forget to configure and set the Authorization header: ",(0,i.jsx)(n.code,{children:'"Authorization": "Bearer YOUR_API_KEY"'})]})}),"\n",(0,i.jsxs)(n.p,{children:["Successful requests will receive a ",(0,i.jsx)(n.code,{children:"HTTP 200"})," status and ",(0,i.jsx)(n.code,{children:"application/json"})," response like:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "ok": true,\n  "value": { "cid": "bafy..." }\n}\n'})}),"\n",(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsxs)(n.li,{children:["Using the ",(0,i.jsx)(n.code,{children:"cid"}),", write down the image's URL: ",(0,i.jsx)(n.code,{children:"https://<cid>.ipfs.dweb.link/"})]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"https://bafyreiabag3ztnhe5pg7js4bj6sxuvkz3sdf76cjvcuqjoidvnfjz7vwrq.ipfs.dweb.link/\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Now that your file has been uploaded to IPFS, it can be retrieved using the ",(0,i.jsx)(n.code,{children:"cid"})," link."]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["Check the ",(0,i.jsx)(n.a,{href:"https://nft.storage/api-docs/",children:"NFT.Storage Docs"})," for information on uploading multiple files and other available endpoints."]})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},7086:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/arweave-1-8d8a832512a652d912a1eae28447e428.png"},15988:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/arweave-2-edbce3ed8fc9acd1b8b412020a85f206.png"},91501:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/arweave-3-7c5d4ca87afd640a988a081b8df7f4c6.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>r});var i=t(67294);const s={},a=i.createContext(s);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);