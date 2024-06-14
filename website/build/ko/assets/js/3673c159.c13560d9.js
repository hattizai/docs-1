"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2],{98149:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>g,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var r=t(85893),a=t(11151),i=t(74866),s=t(85162),o=t(71183);const l={id:"meta-transactions",title:"Building a Meta Transaction Relayer",sidebar_label:"Meta Transaction Relayers"},c=void 0,d={id:"build/chain-abstraction/meta-transactions",title:"Building a Meta Transaction Relayer",description:"Relayers serve to delegate gas fees to a web service, allowing users to transact on NEAR without the need to acquire the token themselves while still retaining the security of signing their own transactions. This guide will lead you through the components necessary to construct a relayer capable of handling meta transactions.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/2.build/1.chain-abstraction/meta-transactions.md",sourceDirName:"2.build/1.chain-abstraction",slug:"/build/chain-abstraction/meta-transactions",permalink:"/ko/build/chain-abstraction/meta-transactions",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/1.chain-abstraction/meta-transactions.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1712954223e3,frontMatter:{id:"meta-transactions",title:"Building a Meta Transaction Relayer",sidebar_label:"Meta Transaction Relayers"},sidebar:"build",previous:{title:"What is Chain Abstraction?",permalink:"/ko/build/chain-abstraction/what-is"},next:{title:"FastAuth (Email Login)",permalink:"/ko/build/chain-abstraction/fastauth-sdk"}},h={},u=[{value:"How it works",id:"how-it-works",level:2},{value:"Relayer (server)",id:"relayer-server",level:2},{value:"Client",id:"client",level:2},{value:"Gating the relayer",id:"gating-the-relayer",level:3},{value:"Rust Relayer Server",id:"rust-relayer-server",level:2},{value:"Basic Setup",id:"basic-setup",level:3},{value:"Redis Setup",id:"redis-setup",level:3},{value:"Advanced setup",id:"advanced-setup",level:3},{value:"API Specifications",id:"api-specifications",level:3},{value:"Use cases",id:"use-cases",level:3},{value:"No filters",id:"no-filters",level:4},{value:"Basic whitelist",id:"basic-whitelist",level:4},{value:"Redis",id:"redis",level:4},{value:"FastAuth",id:"fastauth",level:4},{value:"Pay with fungible tokens",id:"pay-with-fungible-tokens",level:4},{value:"Whitelist senders",id:"whitelist-senders",level:4},{value:"Shared storage",id:"shared-storage",level:4},{value:"Exchange withdraw",id:"exchange-withdraw",level:4}];function p(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components},{Details:l}=n;return l||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Relayers serve to delegate gas fees to a web service, allowing users to transact on NEAR without the need to acquire the token themselves while still retaining the security of signing their own transactions. This guide will lead you through the components necessary to construct a relayer capable of handling meta transactions."}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["If you're already acquainted with the technology, you can fast track to a ",(0,r.jsx)(n.a,{href:"https://github.com/SurgeCode/near-relay-example",children:"working open source example"})]})}),"\n",(0,r.jsx)(n.h2,{id:"how-it-works",children:"How it works"}),"\n",(0,r.jsxs)(n.p,{children:["A basic relayer consists of a web server housing a funded NEAR account. This account receives an encoded signed transaction, which can subsequently be decoded into a ",(0,r.jsx)(n.code,{children:"SignedDelegate"})," format and transmitted on-chain."]}),"\n",(0,r.jsxs)(n.p,{children:["The client can then generate a ",(0,r.jsx)(n.code,{children:"SignedDelegateAction"})," (a signed message that hasn't yet been sent), encode it, and transmit it to this server, where it will be relayed onto the blockchain."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"relayer-overview-technical",src:t(20899).Z+"",width:"1024",height:"768"})}),"\n",(0,r.jsx)(n.h2,{id:"relayer-server",children:"Relayer (server)"}),"\n",(0,r.jsxs)(i.Z,{groupId:"code-tabs",children:[(0,r.jsxs)(s.Z,{value:"near-api-js",children:[(0,r.jsx)(n.p,{children:"Here's a simple express endpoint deserializes the body, instantiates the relayer account and then sends the transaction."}),(0,r.jsx)(o.Ey,{language:"typescript",url:"https://github.com/SurgeCode/near-relay-example/blob/main/server.ts",start:"16",end:"27"}),(0,r.jsx)(n.p,{children:"You can easily get the account object used to send the transactions from its private key using this snippet"}),(0,r.jsx)(o.Ey,{language:"typescript",url:"https://github.com/SurgeCode/near-relay-example/blob/main/util.ts",start:"5",end:"17"}),(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsx)(n.p,{children:"The code in the example only works from the following versions onwards"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'"near-api-js": "3.0.4"\n"@near-js/transactions": "1.1.2",\n"@near-js/accounts": "1.0.4"\n'})})]})]}),(0,r.jsxs)(s.Z,{value:"@near-relay/server",children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"@near-relay"})," simplifies meta transactions making it easier to get started for a beginner."]}),(0,r.jsx)(n.p,{children:"To start, call the relay method inside an endpoint to automatically deserialize the transaction and send it with the account defined in the environment variables."}),(0,r.jsx)(o.Ey,{language:"typescript",url:"https://github.com/SurgeCode/near-relay/blob/main/server/server.ts",start:"8",end:"12"}),(0,r.jsx)(n.p,{children:"If you're interested in relaying account creation as well, it's quite straightforward. Simply create another endpoint and directly call the createAccount method with the accountId and publicKey. These parameters are automatically included in the body when using the corresponding client library."}),(0,r.jsx)(o.Ey,{language:"typescript",url:"https://github.com/SurgeCode/near-relay/blob/main/server/server.ts",start:"14",end:"18"})]})]}),"\n",(0,r.jsx)(n.h2,{id:"client",children:"Client"}),"\n",(0,r.jsxs)(i.Z,{groupId:"code-tabs",children:[(0,r.jsxs)(s.Z,{value:"near-api-js",children:[(0,r.jsx)(n.p,{children:"In this method we are creating an arbitrary smart contract call, instantiating an account and using it to sign but not send the transaction. We can then serialize it and send it to the relayer where it will be delegated via the previously created endpoint."}),(0,r.jsx)(o.Ey,{language:"typescript",url:"https://github.com/SurgeCode/near-relay-example/blob/main/client.ts",start:"10",end:"30"})]}),(0,r.jsxs)(s.Z,{value:"@near-relay/client",children:[(0,r.jsx)(n.p,{children:"As mentioned in the above note in order to be able to relay on the client side it's necessary to have access to signing transactions directly on the client. Luckily leveraging the near biometric library it's possible to do so in a non custodial way."}),(0,r.jsxs)(n.p,{children:["By calling this method and passing in the URL for the account creation endpoint (mentioned in the server section) as well as the ",(0,r.jsx)(n.code,{children:"accoundId"})," everything is handled under the hood to successfully create an account."]}),(0,r.jsx)(o.Ey,{language:"typescript",url:"https://github.com/SurgeCode/near-relay/blob/main/example/src/app/page.tsx",start:"17",end:"23"}),(0,r.jsxs)(n.p,{children:["On the client side, you just need to create an ",(0,r.jsx)(n.code,{children:"Action"})," and pass it into the ",(0,r.jsx)(n.code,{children:"relayTransaction"})," method along with the URL of the relayer endpoint discussed in the server section and the id of the ",(0,r.jsx)(n.code,{children:"receiverId"}),"."]}),(0,r.jsx)(o.Ey,{language:"typescript",url:"https://github.com/SurgeCode/near-relay/blob/main/example/src/app/page.tsx",start:"25",end:"36"})]})]}),"\n",(0,r.jsxs)(l,{children:[(0,r.jsx)("summary",{children:" Relaying with wallets "}),(0,r.jsx)(n.p,{children:"At the moment, wallet selector standard doesn't support signing transactions without immediately sending them. This functionality is essential for routing transactions to a relayer. Therefore, to smoothly integrate relaying on the client side, it's necessary to be able to sign transactions without relying on wallets.\nProgress is being made to make this possible in the future."})]}),"\n",(0,r.jsx)(n.h3,{id:"gating-the-relayer",children:"Gating the relayer"}),"\n",(0,r.jsxs)(n.p,{children:["In most production applications it's expected that you want to be able to gate the relayer to only be used in certain cases.\nThis can be easily accomplished by specifying constraints inside the ",(0,r.jsx)(n.code,{children:"SignedDelegate.delegateAction"})," object."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"export declare class DelegateAction extends Assignable {\n    senderId: string;\n    receiverId: string;\n    actions: Array<Action>;\n    nonce: BN;\n    maxBlockHeight: BN;\n    publicKey: PublicKey;\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"You can, for example, gate by some particular user or contract:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"  const serializedTx: Buffer = req.body;\n  const deserializedTx: SignedDelegate = deserialize(SCHEMA.SignedDelegate, Buffer.from(serializedTx)) as SignedDelegate;\n  const relayerAccount: Account = await getAccount(NETWORK_ID, RELAYER_ID, RELAYER_PRIVATE_KEY);\n  const delegateAction = deserializedTx?.delegateAction\n\n  if(delegateAction.senderId == 'someUserId' || delegateAction.receiverId == 'someContractId' ){\n       const receipt = await relayerAccount.signAndSendTransaction({\n       actions: [actionCreators.signedDelegate(deserializedTx)],\n       receiverId: deserializedTx.delegateAction.senderId\n  });\n  }\n"})}),"\n",(0,r.jsx)(n.p,{children:"Other examples could be looking into the actions and seeing if there is deposit or gas and limiting them, gating by particular smart contract methods or even args."}),"\n",(0,r.jsx)(n.p,{children:"You can decode the args using:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'JSON.parse(Buffer.from(args_base64 || "", "base64").toString())\n'})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"rust-relayer-server",children:"Rust Relayer Server"}),"\n",(0,r.jsxs)(n.p,{children:["Building a Relayer For other languages you can check out ",(0,r.jsx)(n.a,{href:"https://github.com/here-wallet/near-relay",children:"Python"}),", ",(0,r.jsx)(n.a,{href:"https://github.com/near/pagoda-relayer-rs",children:"Rust"})]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"Features can be combined as needed. Use of one feature does not preclude the use of any other feature unless specified."})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Sign and send Meta Transactions to the RPC to cover the gas costs of end users while allowing them to maintain custody of their funds and approve transactions (",(0,r.jsx)(n.code,{children:"/relay"}),", ",(0,r.jsx)(n.code,{children:"/send_meta_tx"}),", ",(0,r.jsx)(n.code,{children:"/send_meta_tx_async"}),", ",(0,r.jsx)(n.code,{children:"/send_meta_tx_nopoll"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:["Sign Meta Transactions returning a Signed Meta Transaction to be sent to the RPC later - (",(0,r.jsx)(n.code,{children:"/sign_meta_tx"}),", ",(0,r.jsx)(n.code,{children:"/sign_meta_tx_no_filter"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:["Only pay for users interacting with certain contracts by whitelisting contracts addresses (",(0,r.jsx)(n.code,{children:"whitelisted_contracts"})," in ",(0,r.jsx)(n.code,{children:"config.toml"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:["Specify gas cost allowances for all accounts (",(0,r.jsx)(n.code,{children:"/update_all_allowances"}),") or on a per-user account basis (",(0,r.jsx)(n.code,{children:"/create_account_atomic"}),", ",(0,r.jsx)(n.code,{children:"/register_account"}),", ",(0,r.jsx)(n.code,{children:"/update_allowance"}),") and keep track of allowances (",(0,r.jsx)(n.code,{children:"/get_allowance"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:["Specify the accounts for which the relayer will cover gas fees (",(0,r.jsx)(n.code,{children:"whitelisted_delegate_action_receiver_ids"})," in ",(0,r.jsx)(n.code,{children:"config.toml"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:["Only allow users to register if they have a unique Oauth Token (",(0,r.jsx)(n.code,{children:"/create_account_atomic"}),", ",(0,r.jsx)(n.code,{children:"/register_account"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:["Relayer Key Rotation: ",(0,r.jsx)(n.code,{children:"keys_filenames"})," in ",(0,r.jsx)(n.code,{children:"config.toml"})]}),"\n",(0,r.jsxs)(n.li,{children:["Integrate with ",(0,r.jsx)(n.a,{href:"/ko/build/chain-abstraction/fastauth-sdk",children:"FastAuth SDK"})]}),"\n",(0,r.jsx)(n.li,{children:"Mix and Match configuration options"}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["Check the ",(0,r.jsx)(n.a,{href:"#use-cases",children:"Use cases section"})," for example configuration files corresponding to different usage scenarios."]})}),"\n",(0,r.jsx)(n.h3,{id:"basic-setup",children:"Basic Setup"}),"\n",(0,r.jsx)(n.p,{children:"You can follow these steps to set up your local Relayer server development environment:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/ko/sdk/rust/get-started",children:"Install Rust for NEAR Development"})}),"\n",(0,r.jsxs)(n.li,{children:["If you don't have a NEAR account, ",(0,r.jsx)(n.a,{href:"/ko/concepts/protocol/account-model",children:"create one"})]}),"\n",(0,r.jsxs)(n.li,{children:["With the account from step 2, create a JSON file in this directory in the format","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'[{"account_id":"example.testnet","public_key":"ed25519:98GtfFzez3opomVpwa7i4m3nptHtc7Ha514XHMWszLtQ","private_key":"ed25519:YWuyKVQHE3rJQYRC3pRGV56o1qEtA1PnMYPDEtroc5kX4A4mWrJwF7XkzGe7JWNMABbtY4XFDBJEzgLyfPkwpzC"}]\n'})}),"\n","using a ",(0,r.jsx)(n.a,{href:"/ko/concepts/protocol/access-keys#full-access-keys",children:"Full Access Key"})," from an account that has enough NEAR to cover the gas costs of transactions your server will be relaying. Usually, this will be a copy of the json file found in the ",(0,r.jsx)(n.code,{children:".near-credentials"})," directory."]}),"\n",(0,r.jsxs)(n.li,{children:["Update values in ",(0,r.jsx)(n.code,{children:"config.toml"})]}),"\n",(0,r.jsxs)(n.li,{children:["Open up the ",(0,r.jsx)(n.code,{children:"port"})," from ",(0,r.jsx)(n.code,{children:"config.toml"})," in your machine's network settings"]}),"\n",(0,r.jsxs)(n.li,{children:["Run the server using ",(0,r.jsx)(n.code,{children:"cargo run"}),".","\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"(OPTIONAL)"})," To run with logs (tracing) enabled run ",(0,r.jsx)(n.code,{children:"RUST_LOG=tower_http=debug cargo run"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.admonition,{title:"Optional setup",type:"info",children:[(0,r.jsxs)(n.p,{children:["If you're integrating with ",(0,r.jsx)(n.a,{href:"/ko/build/chain-abstraction/fastauth-sdk",children:"FastAuth"})," make sure to enable feature flags:"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"cargo build --features fastauth_features,shared_storage\n"})}),(0,r.jsx)(n.p,{children:"If you're using shared storage, make sure to enable feature flags:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"cargo build --features shared_storage\n"})})]}),"\n",(0,r.jsx)(n.h3,{id:"redis-setup",children:"Redis Setup"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"This is only needed if you intend to use whitelisting, allowances, and OAuth functionality."})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://redis.io/docs/latest/get-started/",children:"Install Redis"}),".","\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Steps 2 & 3 assume Redis was installed on machine instead of a Docker setup. If you're connecting to a Redis instance running in GCP, follow the above steps to connect to a VM that will forward requests from your local relayer server to ",(0,r.jsx)(n.a,{href:"https://cloud.google.com/memorystore/docs/redis/connect-redis-instance#connecting_from_a_local_machine_with_port_forwarding",children:"Redis running in GCP"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Run ",(0,r.jsx)(n.code,{children:"redis-server --bind 127.0.0.1 --port 6379"})," - make sure the port matches the ",(0,r.jsx)(n.code,{children:"redis_url"})," in the ",(0,r.jsx)(n.code,{children:"config.toml"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Run ",(0,r.jsx)(n.code,{children:"redis-cli -h 127.0.0.1 -p 6379"})]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"advanced-setup",children:"Advanced setup"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/near/pagoda-relayer-rs/tree/main?tab=readme-ov-file#multiple-key-generation---optional-but-recommended-for-high-throughput-to-prevent-nonce-race-conditions",children:"Multiple Key Generation"}),": this is optional, but recommended for high throughput to prevent nonce race conditions. Check"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/near/pagoda-relayer-rs/tree/main?tab=readme-ov-file#docker-deployment",children:"Docker Deployment"}),": instructions to deploy with Docker"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/near/pagoda-relayer-rs/tree/main?tab=readme-ov-file#cloud-deployment",children:"Cloud Deployment"}),": instructions to deploy on Cloud providers"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"api-specifications",children:"API Specifications"}),"\n",(0,r.jsxs)(n.p,{children:["You can find the complete Relayer server API specification on the ",(0,r.jsx)(n.a,{href:"https://github.com/near/pagoda-relayer-rs/tree/main?tab=readme-ov-file#api-spec-",children:"GitHub repository"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"use-cases",children:"Use cases"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.a,{href:"https://github.com/near/pagoda-relayer-rs/tree/main/examples",children:"examples folder"})," on the GitHub repository contains example configuration files corresponding to different use cases."]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["These files are for reference only and you should update the ",(0,r.jsx)(n.code,{children:"config.toml"})," values before using it on your development environment."]})}),"\n",(0,r.jsx)(n.h4,{id:"no-filters",children:"No filters"}),"\n",(0,r.jsx)(n.p,{children:"This is a config for a relayer that covers gas for all user transactions to all contracts with no filters. To prevent abuse, this should only be used if there's only a secure backend calling the relayer"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/near/pagoda-relayer-rs/blob/main/examples/configs/no_filters.toml",children:(0,r.jsx)(n.code,{children:"no_filters.toml"})})}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"basic-whitelist",children:"Basic whitelist"}),"\n",(0,r.jsx)(n.p,{children:"This is a configuration for a basic relayer that covers gas for user transactions to interact with a whitelisted set of contracts"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/near/pagoda-relayer-rs/blob/main/examples/configs/basic_whitelist.toml",children:(0,r.jsx)(n.code,{children:"basic_whitelist.toml"})})}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"redis",children:"Redis"}),"\n",(0,r.jsx)(n.p,{children:"This is a configuration for a relayer that covers gas for user transactions up to a allowance specified in Redis to interact with a whitelisted set of contracts."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Allowances are on a per-account id basis and on signup (account creation in Redis and on-chain) an OAuth token is required to help with sybil resistance"}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/near/pagoda-relayer-rs/blob/main/examples/configs/redis.toml",children:(0,r.jsx)(n.code,{children:"redis.toml"})})}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"fastauth",children:"FastAuth"}),"\n",(0,r.jsxs)(n.p,{children:["This is a configuration for use if you intend to integrate with ",(0,r.jsx)(n.a,{href:"/ko/build/chain-abstraction/fastauth-sdk",children:"FastAuth SDK"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"It covers gas for user transactions up to a allowance specified in Redis to interact with a whitelisted set of contracts."}),"\n",(0,r.jsx)(n.li,{children:"Allowances are on a per-account id basis and on signup (account creation in Redis and on-chain) an OAuth token is required to help with sybil resistance"}),"\n",(0,r.jsx)(n.li,{children:"This also makes use of a shared storage functionality on the Near Social DB contract"}),"\n",(0,r.jsxs)(n.li,{children:["and a whitelisted sender (",(0,r.jsx)(n.code,{children:"whitelisted_delegate_action_receiver_ids"}),")"]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/near/pagoda-relayer-rs/blob/main/examples/configs/fastauth.toml",children:(0,r.jsx)(n.code,{children:"fastauth.toml"})})}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"pay-with-fungible-tokens",children:"Pay with fungible tokens"}),"\n",(0,r.jsx)(n.p,{children:"This is a configuration for a relayer that ensures there's FTs sent to a burn address used to cover the equivalent amount of gas for user transactions to interact with a whitelisted set of contracts"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/near/pagoda-relayer-rs/blob/main/examples/configs/pay_with_ft.toml",children:(0,r.jsx)(n.code,{children:"pay_with_ft.toml"})})}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"whitelist-senders",children:"Whitelist senders"}),"\n",(0,r.jsx)(n.p,{children:"This is a config for a relayer that covers gas for a whitelisted set of users' transactions to interact with a whitelisted set of contracts"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/near/pagoda-relayer-rs/blob/main/examples/configs/whitelist_senders.toml",children:(0,r.jsx)(n.code,{children:"whitelist_senders.toml"})})," (",(0,r.jsx)(n.code,{children:"whitelisted_delegate_action_receiver_ids"}),")"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"shared-storage",children:"Shared storage"}),"\n",(0,r.jsx)(n.p,{children:"This is a configuration for a relayer that covers BOTH gas AND storage fees for user transactions to interact with a whitelisted set of contracts"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["be sure to include shared storage logic based on ",(0,r.jsx)(n.a,{href:"https://github.com/NearSocial/social-db/blob/master/contract/src/shared_storage.rs",children:(0,r.jsx)(n.code,{children:"shared_storage.rs"})})," in your contract that is being whitelisted"]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/near/pagoda-relayer-rs/blob/main/examples/configs/shared_storage.toml",children:(0,r.jsx)(n.code,{children:"shared_storage.toml"})})}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"exchange-withdraw",children:"Exchange withdraw"}),"\n",(0,r.jsxs)(n.p,{children:["This is a configuration for a relayer where an exchange running the relayer covers user withdraw fees when they are withdrawing stablecoins on NEAR (e.g., ",(0,r.jsx)(n.code,{children:"USDT"})," or ",(0,r.jsx)(n.code,{children:"USDC"}),")"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/near/pagoda-relayer-rs/blob/main/examples/configs/exchange_withdraw.toml",children:(0,r.jsx)(n.code,{children:"exchange_withdraw.toml"})})}),"\n"]})]})}function g(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>s});t(67294);var r=t(36905);const a={tabItem:"tabItem_Ymn6"};var i=t(85893);function s(e){var n=e.children,t=e.hidden,s=e.className;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,s),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>w});var r=t(67294),a=t(36905),i=t(12466),s=t(16550),o=t(20469),l=t(91980),c=t(67392),d=t(50012);function h(e){var n,t;return null!=(n=null==(t=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function u(e){var n=e.values,t=e.children;return(0,r.useMemo)((function(){var e=null!=n?n:function(e){return h(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,c.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function p(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function g(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId,i=(0,s.k6)(),o=function(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:t,groupId:a});return[(0,l._X)(o),(0,r.useCallback)((function(e){if(o){var n=new URLSearchParams(i.location.search);n.set(o,e),i.replace(Object.assign({},i.location,{search:n.toString()}))}}),[o,i])]}function f(e){var n,t,a,i,s=e.defaultValue,l=e.queryString,c=void 0!==l&&l,h=e.groupId,f=u(e),m=(0,r.useState)((function(){return function(e){var n,t=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var a=null!=(n=r.find((function(e){return e.default})))?n:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:s,tabValues:f})})),x=m[0],b=m[1],j=g({queryString:c,groupId:h}),y=j[0],v=j[1],w=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:h}.groupId),t=(0,d.Nk)(n),a=t[0],i=t[1],[a,(0,r.useCallback)((function(e){n&&i.set(e)}),[n,i])]),k=w[0],_=w[1],A=function(){var e=null!=y?y:k;return p({value:e,tabValues:f})?e:null}();return(0,o.Z)((function(){A&&b(A)}),[A]),{selectedValue:x,selectValue:(0,r.useCallback)((function(e){if(!p({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);b(e),v(e),_(e)}),[v,_,f]),tabValues:f}}var m=t(72389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(85893);function j(e){var n=e.className,t=e.block,r=e.selectedValue,s=e.selectValue,o=e.tabValues,l=[],c=(0,i.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var n=e.currentTarget,t=l.indexOf(n),a=o[t].value;a!==r&&(c(n),s(a))},h=function(e){var n,t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var r,a=l.indexOf(e.currentTarget)+1;t=null!=(r=l[a])?r:l[0];break;case"ArrowLeft":var i,s=l.indexOf(e.currentTarget)-1;t=null!=(i=l[s])?i:l[l.length-1]}null==(n=t)||n.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:o.map((function(e){var n=e.value,t=e.label,i=e.attributes;return(0,b.jsx)("li",Object.assign({role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:function(e){return l.push(e)},onKeyDown:h,onClick:d},i,{className:(0,a.Z)("tabs__item",x.tabItem,null==i?void 0:i.className,{"tabs__item--active":r===n}),children:null!=t?t:n}),n)}))})}function y(e){var n=e.lazy,t=e.children,a=e.selectedValue,i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var s=i.find((function(e){return e.props.value===a}));return s?(0,r.cloneElement)(s,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})}))})}function v(e){var n=f(e);return(0,b.jsxs)("div",{className:(0,a.Z)("tabs-container",x.tabList),children:[(0,b.jsx)(j,Object.assign({},n,e)),(0,b.jsx)(y,Object.assign({},n,e))]})}function w(e){var n=(0,m.Z)();return(0,b.jsx)(v,Object.assign({},e,{children:h(e.children)}),String(n))}},71183:(e,n,t)=>{t.d(n,{O2:()=>g,Ey:()=>m,SQ:()=>f});var r=t(67294),a=t(74866),i=t(85162),s=t(74165),o=t(15861),l=t(1841),c=t.n(l),d=t(85893);function h(){return(h=(0,o.Z)((0,s.Z)().mark((function e(n,t,r){var a,i,o,l;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((i=localStorage.getItem(n+"-until"))&&i>Date.now())){e.next=5;break}a=localStorage.getItem(n),e.next=18;break;case 5:return e.prev=5,e.next=8,fetch(n);case 8:return e.next=10,e.sent.text();case 10:a=e.sent,localStorage.setItem(n,a),localStorage.setItem(n+"-until",Date.now()+6e4),e.next=18;break;case 15:return e.prev=15,e.t0=e.catch(5),e.abrupt("return","Error fetching code, please try reloading");case 18:return o=a.split("\n"),t=t?Number(t)-1:0,r=r?Number(r):o.length,o=o.slice(t,r),l=o.reduce((function(e,n){if(0===n.length)return e;var t=n.match(/^\s+/);return t?Math.min(e,t[0].length):0}),1/0),e.abrupt("return",o.map((function(e){return e.slice(l)})).join("\n"));case 24:case"end":return e.stop()}}),e,null,[[5,15]])})))).apply(this,arguments)}const u=function(e){var n=e.url,t=e.start,a=e.end,i=e.language,s=e.fname,o=e.metastring,l=(0,r.useState)("Loading..."),u=l[0],p=l[1];return(0,r.useEffect)((function(){var e=function(e){var n=e.slice(e.indexOf("https")).split("#"),t=n[0],r=(n[1],new URL(t).pathname.split("/").slice(1)),a=r[0],i=r[1];return r[2],"https://raw.githubusercontent.com/"+a+"/"+i+"/"+r[3]+"/"+r.slice(4).join("/")}(n),r=function(e,n,t){return h.apply(this,arguments)}(e,t,a);r.then((function(e){return p(e)}))})),(0,d.jsxs)("div",{fname:s,children:[(0,d.jsx)(c(),{language:i,metastring:o+" showLineNumbers",children:u}),(0,d.jsx)("div",{style:{fontSize:"0.9em",fontWeight:600,color:"rgb(14, 117, 221)",textAlign:"center",paddingBottom:"13px",textDecoration:"underline"},children:(0,d.jsx)("a",{href:n,target:"_blank",rel:"noreferrer noopener",children:"See full example on GitHub"})})]})};var p={rust:"\ud83e\udd80 Rust",js:"\ud83c\udf10 Javascript",ts:"\ud83c\udf10 Typescript"};function g(e){var n=e.children;return Array.isArray(n)||(n=[n]),(0,d.jsx)(a.Z,{className:"language-tabs",groupId:"code-tabs",children:n.map((function(e,n){return(0,d.jsx)(i.Z,{value:e.props.value,label:p[e.props.value],children:e})}))})}function f(e){var n=e.children,t=e.language;return Array.isArray(n)||(n=[n]),n=n.map((function(e){return function(e,n){var t=e.props,r=(t.children,t.url),a=t.start,i=t.end,s=t.fname;if(e.type===m)return m({url:r,start:a,end:i,language:n,fname:s});return e}(e,t)})),1==n.length?(0,d.jsx)(i.Z,{value:0,label:n[0].props.fname,children:n[0]}):(0,d.jsx)(a.Z,{className:"file-tabs",children:n.map((function(e,n){return(0,d.jsx)(i.Z,{value:n,label:e.props.fname,children:e})}))})}function m(e){var n=e.url,t=e.start,r=e.end,a=e.language,i=e.fname,s=e.metastring;return u({url:n,start:t,end:r,language:a,fname:i,metastring:s})}},20899:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/relayer-overview-technical-33422610bd3401f2e8e8241e0f81f74f.png"}}]);