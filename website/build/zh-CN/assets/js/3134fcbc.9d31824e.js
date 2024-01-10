"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9960],{7979:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var i=n(85893),o=n(11151);const a={id:"circulating-supply",title:"Creating a Circulating Supply",sidebar_label:"Circulating Supply"},s=void 0,r={id:"tutorials/fts/circulating-supply",title:"Creating a Circulating Supply",description:"In the previous tutorial, you looked at what a fungible token was and how you could define one in your smart contract. In this tutorial, you'll learn how to create a circulating supply belonging to the contract owner and view all the tokens, with their metadata, in the NEAR wallet.",source:"@site/../docs/3.tutorials/fts/3-circulating-supply.md",sourceDirName:"3.tutorials/fts",slug:"/tutorials/fts/circulating-supply",permalink:"/zh-CN/tutorials/fts/circulating-supply",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/fts/3-circulating-supply.md",tags:[],version:"current",lastUpdatedBy:"gagdiez",lastUpdatedAt:1701811626,formattedLastUpdatedAt:"2023\u5e7412\u67085\u65e5",sidebarPosition:3,frontMatter:{id:"circulating-supply",title:"Creating a Circulating Supply",sidebar_label:"Circulating Supply"},sidebar:"contracts",previous:{title:"Defining Your Token",permalink:"/zh-CN/tutorials/fts/defining-a-token"},next:{title:"Registering Accounts",permalink:"/zh-CN/tutorials/fts/registering-accounts"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Modifications to contract",id:"modifications-to-contract",level:2},{value:"Setting the supply",id:"setting-the-supply",level:3},{value:"Getting the supply",id:"getting-the-supply",level:3},{value:"Events",id:"events",level:2},{value:"The problem",id:"the-problem",level:3},{value:"The solution",id:"the-solution",level:3},{value:"Examples",id:"examples",level:3},{value:"Scenario A - simple mint",id:"scenario-a---simple-mint",level:4},{value:"Scenario B - batch transfer",id:"scenario-b---batch-transfer",level:4},{value:"Modifications to the contract",id:"modifications-to-the-contract",level:2},{value:"Creating the events file",id:"events-rs",level:3},{value:"Adding modules and constants",id:"lib-rs",level:3},{value:"Logging the total supply minted",id:"logging-the-total-supply-minted",level:3},{value:"Deploying the contract",id:"redeploying-contract",level:2},{value:"Creating a sub-account",id:"creating-a-sub-account",level:3},{value:"Initialization",id:"initialization",level:3},{value:"Querying Supply Information",id:"testing",level:3},{value:"Viewing FTs in the wallet",id:"viewing-fts-in-wallet",level:2},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"In the previous tutorial, you looked at what a fungible token was and how you could define one in your smart contract. In this tutorial, you'll learn how to create a circulating supply belonging to the contract owner and view all the tokens, with their metadata, in the NEAR wallet."}),"\n",(0,i.jsxs)(t.p,{children:["To get started, either work off the code you wrote in the previous tutorial or switch to the ",(0,i.jsx)(t.code,{children:"2.define-a-token"})," folder in our repo. If you haven't cloned the repository, refer to the ",(0,i.jsx)(t.a,{href:"/zh-CN/tutorials/fts/skeleton",children:"Contract Architecture"})," to start."]}),"\n",(0,i.jsxs)(t.p,{children:["If you wish to see the finished code for this tutorial, you can find it in the ",(0,i.jsx)(t.code,{children:"3.initial-supply"})," folder."]}),"\n",(0,i.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(t.p,{children:"Every fungible token contract on NEAR has what's known as a circulating supply. This is the number of tokens that exist on the contract and are actively available to trade."}),"\n",(0,i.jsx)(t.p,{children:"When creating your contract, there are many different ways you could implement this to start. A few examples could be:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Specify a starting total supply and distribute it based on a set of parameters (Benji gets 20%, Josh gets 2.5%, and the rest goes to Mike)."}),"\n",(0,i.jsx)(t.li,{children:"Have a first come first serve pool where everybody claims up to X amount of tokens."}),"\n",(0,i.jsx)(t.li,{children:"Create tokens on demand resulting in a steady increase of the circulating supply overtime up to a specified cap."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"The simplest approach, however, is to specify a total supply when initializing the contract. The entire circulating supply is then created and sent to the owner of the contract. The owner would then be able to transfer or sell the tokens as they wish. Once the initial supply is created, no more FTs could be minted. This means that the circulating supply will always be equal to the total supply."}),"\n",(0,i.jsx)(t.h2,{id:"modifications-to-contract",children:"Modifications to contract"}),"\n",(0,i.jsx)(t.p,{children:"In order to implement this logic, you'll need to keep track of two things in your smart contract:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"A mapping of an account to the number of tokens they own."}),"\n",(0,i.jsx)(t.li,{children:"The total supply of tokens."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"The mapping is so that you can easily check or modify the tokens owned by any given account at anytime within your contract. You'll also need to keep track of the total supply since it's required by the standard that you have a function to query for the supply of tokens on the contract."}),"\n",(0,i.jsx)(t.h3,{id:"setting-the-supply",children:"Setting the supply"}),"\n",(0,i.jsxs)(t.p,{children:["Head over to the ",(0,i.jsx)(t.code,{children:"src/lib.rs"})," file and add the following code to the ",(0,i.jsx)(t.code,{children:"Contract"})," struct."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near-examples/ft-tutorial/blob/main/3.initial-supply/src/lib.rs#L21-L32\n"})}),"\n",(0,i.jsxs)(t.p,{children:["You'll now want to add the functionality for depositing the tokens into the owner's account. Do this by creating a helper function that takes an amount and an account ID and performs the deposit logic for you. First create a new file ",(0,i.jsx)(t.code,{children:"src/internal.rs"})," such that your file structure now looks as follows."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"src\n  \u251c\u2500\u2500 ft_core.rs\n  \u251c\u2500\u2500 internal.rs\n  \u251c\u2500\u2500 lib.rs\n  \u251c\u2500\u2500 metadata.rs\n  \u2514\u2500\u2500 storage.rs\n"})}),"\n",(0,i.jsxs)(t.p,{children:["In the ",(0,i.jsx)(t.code,{children:"internal.rs"})," file, add the following code to create a method called ",(0,i.jsx)(t.code,{children:"internal_deposit"})," which takes an ",(0,i.jsx)(t.code,{children:"AccountId"})," and a ",(0,i.jsx)(t.code,{children:"Balance"})," and adds the amount to the account's current supply of FTs."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near-examples/ft-tutorial/blob/main/3.initial-supply/src/internal.rs#L1-L18\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Now that the functionality for depositing FTs is in place, switch back to the ",(0,i.jsx)(t.code,{children:"src/lib.rs"})," file and add the ",(0,i.jsx)(t.code,{children:"internal"})," module:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near-examples/ft-tutorial/blob/main/3.initial-supply/src/lib.rs#L8-L10\n"})}),"\n",(0,i.jsxs)(t.p,{children:["In addition, add the following code to the ",(0,i.jsx)(t.code,{children:"new"})," initialization function."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust",children:"#[init]\npub fn new(\n    owner_id: AccountId,\n    total_supply: U128,\n    metadata: FungibleTokenMetadata,\n) -> Self {\n    // Create a variable of type Self with all the fields initialized. \n    let mut this = Self {\n        // Set the total supply\n        total_supply: total_supply.0,\n        // Storage keys are simply the prefixes used for the collections. This helps avoid data collision\n        accounts: LookupMap::new(StorageKey::Accounts.try_to_vec().unwrap()),\n        metadata: LazyOption::new(\n            StorageKey::Metadata.try_to_vec().unwrap(),\n            Some(&metadata),\n        ),\n    };\n\n    // Set the owner's balance to the total supply.\n    this.internal_deposit(&owner_id, total_supply.into());\n\n    // Return the Contract object\n    this\n}\n"})}),"\n",(0,i.jsxs)(t.p,{children:["This will initialize the total supply to what you passed in and will call the ",(0,i.jsx)(t.code,{children:"internal_deposit"})," function to add the total supply to the owner's account."]}),"\n",(0,i.jsx)(t.h3,{id:"getting-the-supply",children:"Getting the supply"}),"\n",(0,i.jsxs)(t.p,{children:["Now that you've created a way to set the total supply, you'll also want a way to query for it as well as the balance for a specific user. The ",(0,i.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/FungibleToken/Core",children:"standard"})," dictates that you should have two methods on your smart contract for doing these operations:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"ft_total_supply"})})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"ft_balance_of"})})}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Head on over to the ",(0,i.jsx)(t.code,{children:"src/ft_core.rs"})," file and add the following code to these functions."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near-examples/ft-tutorial/blob/main/3.initial-supply/src/ft_core.rs#L83-L91\n"})}),"\n",(0,i.jsx)(t.p,{children:"At this point, you have everything you need to create an initial supply of tokens and query for the balance of a given account. There is, however, a problem that we need to solve. How will the wallet know that the total supply was created and is owned by the contract owner? How would it even know that our contract is a fungible token contract? If you were to deploy the contract and run through the setup process, you would be able to query for the information from the contract but you wouldn't see any FTs in the owner's NEAR wallet."}),"\n",(0,i.jsx)(t.h2,{id:"events",children:"Events"}),"\n",(0,i.jsxs)(t.p,{children:["Have you ever wondered how the wallet knows which FTs you own and how it can display them in the ",(0,i.jsx)(t.a,{href:"https://testnet.mynearwallet.com/",children:"balances tab"}),"? Originally, an ",(0,i.jsx)(t.a,{href:"/tools/indexer-for-explorer",children:"indexer"})," was used and it listened for any functions starting with ",(0,i.jsx)(t.code,{children:"ft_"})," on your account. These contracts were then flagged on your account as likely FT contracts."]}),"\n",(0,i.jsxs)(t.p,{children:["When you navigated to your balances tab, the wallet would then query all those contracts for the number of FTs you owned using the ",(0,i.jsx)(t.code,{children:"ft_balance_of"})," function you just wrote."]}),"\n",(0,i.jsx)(t.h3,{id:"the-problem",children:"The problem"}),"\n",(0,i.jsx)(t.p,{children:"This method of flagging contracts was not reliable as each FT-driven application might have its own way of minting or transferring FTs. In addition, it's common for apps to transfer or mint many tokens at a time using batch functions."}),"\n",(0,i.jsx)(t.h3,{id:"the-solution",children:"The solution"}),"\n",(0,i.jsx)(t.p,{children:"A standard was introduced so that smart contracts could emit an event anytime FTs were transferred, minted, or burnt. This event was in the form of a log. No matter how a contract implemented the functionality, an indexer could now listen for those standardized logs."}),"\n",(0,i.jsx)(t.p,{children:"As per the standard, you need to implement a logging functionality that gets fired when FTs are transferred or minted. In this case, the contract doesn't support burning so you don't need to worry about that for now."}),"\n",(0,i.jsxs)(t.p,{children:["It's important to note the standard dictates that the log should begin with ",(0,i.jsx)(t.code,{children:'"EVENT_JSON:"'}),". The structure of your log should, however, always contain the 3 following things:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"standard"}),": the current name of the standard (e.g. nep141)"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"version"}),": the version of the standard you're using (e.g. 1.0.0)"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"event"}),": a list of events you're emitting."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"The event interface differs based on whether you're recording transfers or mints. The interface for both events is outlined below."}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Transfer events"}),":"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"old_owner_id"}),": the old owner of the FTs."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"new_owner_id"}),": the new owner that the FTs are being transferred to."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"amount"}),": the number of tokens transferred."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.em,{children:"Optional"})," - ",(0,i.jsx)(t.strong,{children:"memo"}),": an optional message to include with the event."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Minting events"}),":"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"owner_id"}),": the owner that the FTs are being minted to."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"amount"}),": the amount of FTs being minted."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.em,{children:"Optional"})," - ",(0,i.jsx)(t.strong,{children:"memo"}),": an optional message to include with the event."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.p,{children:"In order to solidify your understanding of the standard, let's walk through two scenarios and see what the logs should look like."}),"\n",(0,i.jsx)(t.h4,{id:"scenario-a---simple-mint",children:"Scenario A - simple mint"}),"\n",(0,i.jsx)(t.p,{children:"In this scenario, the Benji mints 50 FTs to himself and doesn't include a message. The log should look as follows."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'EVENT_JSON:{\n  "standard": "nep141",\n  "version": "1.0.0",\n  "event": "ft_mint",\n  "data": [\n    {"owner_id": "benji.testnet", "amount": "50"}\n  ]\n}\n'})}),"\n",(0,i.jsx)(t.h4,{id:"scenario-b---batch-transfer",children:"Scenario B - batch transfer"}),"\n",(0,i.jsx)(t.p,{children:"In this scenario, Benji wants to perform a batch transfer. He will send FTs to Jada, Mike, Josh, and Maria. The log is as follows."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'EVENT_JSON:{\n    "standard": "nep141",\n    "version": "1.0.0",\n    "event": "ft_transfer",\n    "data": [\n        {"old_owner_id": "benji.near", "new_owner_id": "josh.near", "amount": "1", "memo": "go team"},\n        {"old_owner_id": "benji.near", "new_owner_id": "mike.near", "amount": "9000"},\n        {"old_owner_id": "benji.near", "new_owner_id": "jada.near", "amount": "500"},\n        {"old_owner_id": "benji.near", "new_owner_id": "maria.near", "amount": "500"}\n    ]\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"modifications-to-the-contract",children:"Modifications to the contract"}),"\n",(0,i.jsxs)(t.p,{children:["At this point, you should have a good understanding of what the end goal should be so let's get to work! Open the ",(0,i.jsx)(t.code,{children:"src"})," directory and create a new file called ",(0,i.jsx)(t.code,{children:"events.rs"}),". This is where your log structs will live."]}),"\n",(0,i.jsx)(t.h3,{id:"events-rs",children:"Creating the events file"}),"\n",(0,i.jsxs)(t.p,{children:["Copy the following into your file. This will outline the structs for your ",(0,i.jsx)(t.code,{children:"EventLog"}),", ",(0,i.jsx)(t.code,{children:"FtMintLog"}),", and ",(0,i.jsx)(t.code,{children:"FtTransferLog"}),". In addition, we've added a way for ",(0,i.jsx)(t.code,{children:"EVENT_JSON:"})," to be prefixed whenever you log the ",(0,i.jsx)(t.code,{children:"EventLog"}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near-examples/ft-tutorial/blob/main/3.initial-supply/src/events.rs#L1-L121\n"})}),"\n",(0,i.jsx)(t.h3,{id:"lib-rs",children:"Adding modules and constants"}),"\n",(0,i.jsxs)(t.p,{children:["Now that you've created a new file, you need to add the module to the ",(0,i.jsx)(t.code,{children:"lib.rs"})," file."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near-examples/ft-tutorial/blob/main/3.initial-supply/src/lib.rs#L1-L13\n"})}),"\n",(0,i.jsx)(t.h3,{id:"logging-the-total-supply-minted",children:"Logging the total supply minted"}),"\n",(0,i.jsxs)(t.p,{children:["Now that all the tools are set in place, you can implement the actual logging functionality. Since the contract will only be minting tokens at the very start when it's initialized, it's trivial where you should place the log. Open the ",(0,i.jsx)(t.code,{children:"src/lib.rs"})," file and navigate to the bottom of the ",(0,i.jsx)(t.code,{children:"new"})," initialization function. This is where you'll construct the log for minting."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near-examples/ft-tutorial/blob/main/3.initial-supply/src/lib.rs#L63-L97\n"})}),"\n",(0,i.jsx)(t.p,{children:"With that finished, you've successfully implemented the backbone of the events standard and it's time to start testing."}),"\n",(0,i.jsx)(t.h2,{id:"redeploying-contract",children:"Deploying the contract"}),"\n",(0,i.jsx)(t.p,{children:"Since the current contract you have is already initialized, let's create a sub-account and deploy to that instead."}),"\n",(0,i.jsx)(t.h3,{id:"creating-a-sub-account",children:"Creating a sub-account"}),"\n",(0,i.jsxs)(t.p,{children:["Run the following command to create a sub-account ",(0,i.jsx)(t.code,{children:"events"})," of your main account with an initial balance of 25 NEAR which will be transferred from the original to your new account."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"near create-account events.$FT_CONTRACT_ID --masterAccount $FT_CONTRACT_ID --initialBalance 25\n"})}),"\n",(0,i.jsx)(t.p,{children:"Next, you'll want to export an environment variable for ease of development:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"export EVENTS_FT_CONTRACT_ID=events.$FT_CONTRACT_ID\n"})}),"\n",(0,i.jsx)(t.p,{children:"Using the build script, build the deploy the contract as you did in the previous tutorials:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"cd 1.skeleton && ./build.sh && cd .. && near deploy --wasmFile out/contract.wasm --accountId $EVENTS_FT_CONTRACT_ID\n"})}),"\n",(0,i.jsx)(t.h3,{id:"initialization",children:"Initialization"}),"\n",(0,i.jsxs)(t.p,{children:["Now that the contract is deployed, it's time to initialize it and mint the total supply. Let's create an initial supply of 1000 ",(0,i.jsx)(t.code,{children:"gtNEAR"}),". Since it has 24 decimal places, you should put ",(0,i.jsx)(t.code,{children:"1000"})," followed by 24 zeros in the total supply field."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:'near call $EVENTS_FT_CONTRACT_ID new_default_meta \'{"owner_id": "\'$EVENTS_FT_CONTRACT_ID\'", "total_supply": "1000000000000000000000000000"}\' --accountId $EVENTS_FT_CONTRACT_ID\n'})}),"\n",(0,i.jsx)(t.p,{children:"You can check to see if everything went through properly by looking at the output in your CLI:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:'Scheduling a call: events.goteam.testnet.new_default_meta({"owner_id": "events.goteam.testnet", "total_supply": "1000000000000000000000000000"})\nDoing account.functionCall()\nReceipt: BmD2hQJCUEMmvaUd45qrt7S55cewUXQSTPWT21Um3gXd\n\tLog [events.goteam.testnet]: EVENT_JSON:{"standard":"nep141","version":"1.0.0","event":"ft_mint","data":[{"owner_id":"events.goteam.testnet","amount":"1000000000000000000000000000","memo":"Initial token supply is minted"}]}\nTransaction Id BrEBqE9S3tTBcgDUU6ZyszjAbaR4wkPyEN1viYKaXpgh\nTo see the transaction in the transaction explorer, please open this url in your browser\nhttps://explorer.testnet.near.org/transactions/BrEBqE9S3tTBcgDUU6ZyszjAbaR4wkPyEN1viYKaXpgh\n\'\'\n'})}),"\n",(0,i.jsx)(t.p,{children:"You can see that the event was properly logged!"}),"\n",(0,i.jsx)(t.h3,{id:"testing",children:"Querying Supply Information"}),"\n",(0,i.jsx)(t.p,{children:"You can now test if your view functions work properly. First, try to query for the total supply."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"near view $EVENTS_FT_CONTRACT_ID ft_total_supply\n"})}),"\n",(0,i.jsx)(t.p,{children:"This should return an output similar to the following:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"'1000000000000000000000000000'\n"})}),"\n",(0,i.jsx)(t.p,{children:"Hurray! Now you can check if the balance of the owner account works properly. If you call the following function, it should return the same number as the total supply."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"near view $EVENTS_FT_CONTRACT_ID ft_balance_of '{\"account_id\": \"'$EVENTS_FT_CONTRACT_ID'\"}'\n"})}),"\n",(0,i.jsx)(t.p,{children:"Returns:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"'1000000000000000000000000000'\n"})}),"\n",(0,i.jsxs)(t.p,{children:["If you query for the balance of some other account, it should return ",(0,i.jsx)(t.code,{children:"0"}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:'near view $EVENTS_FT_CONTRACT_ID ft_balance_of \'{"account_id": "benjiman.testnet"}\'\n'})}),"\n",(0,i.jsx)(t.h2,{id:"viewing-fts-in-wallet",children:"Viewing FTs in the wallet"}),"\n",(0,i.jsxs)(t.p,{children:["Now that your contract implements the necessary functions that the wallet uses to pickup your contract and display the FTs, you should be able to see your tokens on display in the ",(0,i.jsx)(t.a,{href:"https://testnet.mynearwallet.com/",children:"balances tab"}),"."]}),"\n",(0,i.jsx)("img",{width:"65%",src:"/docs/assets/fts/filled-fts-in-wallet.png"}),"\n",(0,i.jsxs)(t.p,{children:["\ud83c\udf89\ud83c\udf89\ud83c\udf89 ",(0,i.jsx)(t.strong,{children:"This is awesome! Go team!"})," \ud83c\udf89\ud83c\udf89\ud83c\udf89 You can now see your very first fungible tokens in the wallet!"]}),"\n",(0,i.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsxs)(t.p,{children:["Today you went through and created the logic for minting a total supply. You then implemented some of the core standard logic and the ",(0,i.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/FungibleToken/Event",children:"events standard"}),". You created events for ",(0,i.jsx)(t.a,{href:"#modifications-to-the-contract",children:"minting"})," FTs on initialization. You then deployed and ",(0,i.jsx)(t.a,{href:"#testing",children:"tested"})," your changes and saw your very first FTs in the wallet!"]}),"\n",(0,i.jsx)(t.p,{children:"In the next tutorial, you'll look at the basics of registering accounts so that they can transfer and receive FTs."})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>s});var i=n(67294);const o={},a=i.createContext(o);function s(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);