"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8902],{95221:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var a=n(85893),r=n(11151),i=n(71183);const s={id:"circulating-supply",title:"Creating a Circulating Supply",sidebar_label:"Circulating Supply"},o=void 0,l={id:"tutorials/fts/circulating-supply",title:"Creating a Circulating Supply",description:"In the previous tutorial, you looked at what a fungible token was and how you could define one in your smart contract. In this tutorial, you'll learn how to create a circulating supply belonging to the contract owner and view all the tokens, with their metadata, in the NEAR wallet.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/3.tutorials/fts/3-circulating-supply.md",sourceDirName:"3.tutorials/fts",slug:"/tutorials/fts/circulating-supply",permalink:"/zh-CN/tutorials/fts/circulating-supply",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/fts/3-circulating-supply.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1711465748e3,sidebarPosition:3,frontMatter:{id:"circulating-supply",title:"Creating a Circulating Supply",sidebar_label:"Circulating Supply"},sidebar:"tutorials",previous:{title:"Defining Your Token",permalink:"/zh-CN/tutorials/fts/defining-a-token"},next:{title:"Registering Accounts",permalink:"/zh-CN/tutorials/fts/registering-accounts"}},c={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Modifications to contract",id:"modifications-to-contract",level:2},{value:"Setting the supply",id:"setting-the-supply",level:3},{value:"Getting the supply",id:"getting-the-supply",level:3},{value:"Events",id:"events",level:2},{value:"The problem",id:"the-problem",level:3},{value:"The solution",id:"the-solution",level:3},{value:"Examples",id:"examples",level:3},{value:"Scenario A - simple mint",id:"scenario-a---simple-mint",level:4},{value:"Scenario B - batch transfer",id:"scenario-b---batch-transfer",level:4},{value:"Modifications to the contract",id:"modifications-to-the-contract",level:2},{value:"Creating the events file",id:"events-rs",level:3},{value:"Adding modules and constants",id:"lib-rs",level:3},{value:"Logging the total supply minted",id:"logging-the-total-supply-minted",level:3},{value:"Deploying the contract",id:"redeploying-contract",level:2},{value:"Creating a sub-account",id:"creating-a-sub-account",level:3},{value:"Deploying and Initialization",id:"deploying-initialization",level:3},{value:"Querying Supply Information",id:"testing",level:3},{value:"Viewing FTs in the wallet",id:"viewing-fts-in-wallet",level:2},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"In the previous tutorial, you looked at what a fungible token was and how you could define one in your smart contract. In this tutorial, you'll learn how to create a circulating supply belonging to the contract owner and view all the tokens, with their metadata, in the NEAR wallet."}),"\n",(0,a.jsxs)(t.p,{children:["To get started, either work off the code you wrote in the previous tutorial or switch to the ",(0,a.jsx)(t.code,{children:"2.define-a-token"})," folder in our repo. If you haven't cloned the repository, refer to the ",(0,a.jsx)(t.a,{href:"/zh-CN/tutorials/fts/skeleton",children:"Contract Architecture"})," to start."]}),"\n",(0,a.jsxs)(t.p,{children:["If you wish to see the finished code for this tutorial, you can find it in the ",(0,a.jsx)(t.code,{children:"3.initial-supply"})," folder."]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,a.jsx)(t.p,{children:"Every fungible token contract on NEAR has what's known as a circulating supply. This is the number of tokens that exist on the contract and are actively available to trade."}),"\n",(0,a.jsx)(t.p,{children:"When creating your contract, there are many different ways you could implement this to start. A few examples could be:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Specify a starting total supply and distribute it based on a set of parameters (Benji gets 20%, Josh gets 2.5%, and the rest goes to Mike)."}),"\n",(0,a.jsx)(t.li,{children:"Have a first come first serve pool where everybody claims up to X amount of tokens."}),"\n",(0,a.jsx)(t.li,{children:"Create tokens on demand resulting in a steady increase of the circulating supply overtime up to a specified cap."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"The simplest approach, however, is to specify a total supply when initializing the contract. The entire circulating supply is then created and sent to the owner of the contract. The owner would then be able to transfer or sell the tokens as they wish. Once the initial supply is created, no more FTs could be minted. This means that the circulating supply will always be equal to the total supply."}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"modifications-to-contract",children:"Modifications to contract"}),"\n",(0,a.jsx)(t.p,{children:"In order to implement this logic, you'll need to keep track of two things in your smart contract:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"A mapping of an account to the number of tokens they own."}),"\n",(0,a.jsx)(t.li,{children:"The total supply of tokens."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"The mapping is so that you can easily check or modify the tokens owned by any given account at anytime within your contract. You'll also need to keep track of the total supply since it's required by the standard that you have a function to query for the supply of tokens on the contract."}),"\n",(0,a.jsx)("hr",{className:"subsection"}),"\n",(0,a.jsx)(t.h3,{id:"setting-the-supply",children:"Setting the supply"}),"\n",(0,a.jsxs)(t.p,{children:["Head over to the ",(0,a.jsx)(t.code,{children:"src/lib.rs"})," file and add the following code to the ",(0,a.jsx)(t.code,{children:"Contract"})," struct."]}),"\n",(0,a.jsx)(i.Ey,{language:"rust",start:"21",end:"33",url:"https://github.com/near-examples/ft-tutorial/blob/main/3.initial-supply/src/lib.rs"}),"\n",(0,a.jsxs)(t.p,{children:["You'll now want to add the functionality for depositing the tokens into the owner's account. Do this by creating a helper function that takes an amount and an account ID and performs the deposit logic for you. First create a new file ",(0,a.jsx)(t.code,{children:"src/internal.rs"})," such that your file structure now looks as follows."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"src\n  \u251c\u2500\u2500 ft_core.rs\n  \u251c\u2500\u2500 internal.rs\n  \u251c\u2500\u2500 lib.rs\n  \u251c\u2500\u2500 metadata.rs\n  \u2514\u2500\u2500 storage.rs\n"})}),"\n",(0,a.jsxs)(t.p,{children:["In the ",(0,a.jsx)(t.code,{children:"internal.rs"})," file, add the following code to create a function called ",(0,a.jsx)(t.code,{children:"internal_deposit"})," which takes an ",(0,a.jsx)(t.code,{children:"AccountId"})," and an ",(0,a.jsx)(t.code,{children:"u128"})," as a balance and adds the amount to the account's current supply of FTs."]}),"\n",(0,a.jsx)(i.Ey,{language:"rust",start:"1",end:"18",url:"https://github.com/near-examples/ft-tutorial/blob/main/3.initial-supply/src/internal.rs"}),"\n",(0,a.jsxs)(t.p,{children:["Now that the functionality for depositing FTs is in place, switch back to the ",(0,a.jsx)(t.code,{children:"src/lib.rs"})," file and add the ",(0,a.jsx)(t.code,{children:"internal"})," module:"]}),"\n",(0,a.jsx)(i.Ey,{language:"rust",start:"8",end:"10",url:"https://github.com/near-examples/ft-tutorial/blob/main/3.initial-supply/src/lib.rs"}),"\n",(0,a.jsxs)(t.p,{children:["In addition, add the following code to the ",(0,a.jsx)(t.code,{children:"new"})," initialization function."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-rust",children:"#[init]\npub fn new(\n    owner_id: AccountId,\n    total_supply: u128,\n    metadata: FungibleTokenMetadata,\n) -> Self {\n    // Create a variable of type Self with all the fields initialized. \n    let mut this = Self {\n        // Set the total supply\n        total_supply,\n        // Storage keys are simply the prefixes used for the collections. This helps avoid data collision\n        accounts: LookupMap::new(StorageKey::Accounts),\n        metadata: LazyOption::new(\n            StorageKey::Metadata,\n            Some(&metadata),\n        ),\n    };\n\n    // Set the owner's balance to the total supply.\n    this.internal_deposit(&owner_id, total_supply.into());\n\n    // Return the Contract object\n    this\n}\n"})}),"\n",(0,a.jsxs)(t.p,{children:["This will initialize the total supply to what you passed in and will call the ",(0,a.jsx)(t.code,{children:"internal_deposit"})," function to add the total supply to the owner's account."]}),"\n",(0,a.jsx)("hr",{className:"subsection"}),"\n",(0,a.jsx)(t.h3,{id:"getting-the-supply",children:"Getting the supply"}),"\n",(0,a.jsxs)(t.p,{children:["Now that you've created a way to set the total supply, you'll also want a way to query for it as well as the balance for a specific user. The ",(0,a.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/FungibleToken/Core",children:"standard"})," dictates that you should have two methods on your smart contract for doing these operations:"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.code,{children:"ft_total_supply"})})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.code,{children:"ft_balance_of"})})}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["Head on over to the ",(0,a.jsx)(t.code,{children:"src/ft_core.rs"})," file and add the following code to these functions."]}),"\n",(0,a.jsx)(i.Ey,{language:"rust",start:"83",end:"91",url:"https://github.com/near-examples/ft-tutorial/blob/main/3.initial-supply/src/ft_core.rs"}),"\n",(0,a.jsx)(t.p,{children:"At this point, you have everything you need to create an initial supply of tokens and query for the balance of a given account. There is, however, a problem that we need to solve. How will the wallet know that the total supply was created and is owned by the contract owner? How would it even know that our contract is a fungible token contract? If you were to deploy the contract and run through the setup process, you would be able to query for the information from the contract but you wouldn't see any FTs in the owner's NEAR wallet."}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"events",children:"Events"}),"\n",(0,a.jsxs)(t.p,{children:["Have you ever wondered how the wallet knows which FTs you own and how it can display them in the ",(0,a.jsx)(t.a,{href:"https://testnet.mynearwallet.com/",children:"balances tab"}),"? Originally, an ",(0,a.jsx)(t.a,{href:"/tools/indexer-for-explorer",children:"indexer"})," was used and it listened for any functions starting with ",(0,a.jsx)(t.code,{children:"ft_"})," on your account. These contracts were then flagged on your account as likely FT contracts."]}),"\n",(0,a.jsxs)(t.p,{children:["When you navigated to your balances tab, the wallet would then query all those contracts for the number of FTs you owned using the ",(0,a.jsx)(t.code,{children:"ft_balance_of"})," function you just wrote."]}),"\n",(0,a.jsx)("hr",{className:"subsection"}),"\n",(0,a.jsx)(t.h3,{id:"the-problem",children:"The problem"}),"\n",(0,a.jsx)(t.p,{children:"This method of flagging contracts was not reliable as each FT-driven application might have its own way of minting or transferring FTs. In addition, it's common for apps to transfer or mint many tokens at a time using batch functions."}),"\n",(0,a.jsx)("hr",{className:"subsection"}),"\n",(0,a.jsx)(t.h3,{id:"the-solution",children:"The solution"}),"\n",(0,a.jsx)(t.p,{children:"A standard was introduced so that smart contracts could emit an event anytime FTs were transferred, minted, or burnt. This event was in the form of a log. No matter how a contract implemented the functionality, an indexer could now listen for those standardized logs."}),"\n",(0,a.jsx)(t.p,{children:"As per the standard, you need to implement a logging functionality that gets fired when FTs are transferred or minted. In this case, the contract doesn't support burning so you don't need to worry about that for now."}),"\n",(0,a.jsxs)(t.p,{children:["It's important to note the standard dictates that the log should begin with ",(0,a.jsx)(t.code,{children:'"EVENT_JSON:"'}),". The structure of your log should, however, always contain the 3 following things:"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"standard"}),": the current name of the standard (e.g. nep141)"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"version"}),": the version of the standard you're using (e.g. 1.0.0)"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"event"}),": a list of events you're emitting."]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"The event interface differs based on whether you're recording transfers or mints. The interface for both events is outlined below."}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Transfer events"}),":"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"old_owner_id"}),": the old owner of the FTs."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"new_owner_id"}),": the new owner that the FTs are being transferred to."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"amount"}),": the number of tokens transferred."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.em,{children:"Optional"})," - ",(0,a.jsx)(t.strong,{children:"memo"}),": an optional message to include with the event."]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Minting events"}),":"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"owner_id"}),": the owner that the FTs are being minted to."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"amount"}),": the amount of FTs being minted."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.em,{children:"Optional"})," - ",(0,a.jsx)(t.strong,{children:"memo"}),": an optional message to include with the event."]}),"\n"]}),"\n",(0,a.jsx)("hr",{className:"subsection"}),"\n",(0,a.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(t.p,{children:"In order to solidify your understanding of the standard, let's walk through two scenarios and see what the logs should look like."}),"\n",(0,a.jsx)(t.h4,{id:"scenario-a---simple-mint",children:"Scenario A - simple mint"}),"\n",(0,a.jsx)(t.p,{children:"In this scenario, the Benji mints 50 FTs to himself and doesn't include a message. The log should look as follows."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-json",children:'EVENT_JSON:{\n  "standard": "nep141",\n  "version": "1.0.0",\n  "event": "ft_mint",\n  "data": [\n    {"owner_id": "benji.testnet", "amount": "50"}\n  ]\n}\n'})}),"\n",(0,a.jsx)("hr",{className:"subsection"}),"\n",(0,a.jsx)(t.h4,{id:"scenario-b---batch-transfer",children:"Scenario B - batch transfer"}),"\n",(0,a.jsx)(t.p,{children:"In this scenario, Benji wants to perform a batch transfer. He will send FTs to Jada, Mike, Josh, and Maria. The log is as follows."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-json",children:'EVENT_JSON:{\n    "standard": "nep141",\n    "version": "1.0.0",\n    "event": "ft_transfer",\n    "data": [\n        {"old_owner_id": "benji.near", "new_owner_id": "josh.near", "amount": "1", "memo": "go team"},\n        {"old_owner_id": "benji.near", "new_owner_id": "mike.near", "amount": "9000"},\n        {"old_owner_id": "benji.near", "new_owner_id": "jada.near", "amount": "500"},\n        {"old_owner_id": "benji.near", "new_owner_id": "maria.near", "amount": "500"}\n    ]\n}\n'})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"modifications-to-the-contract",children:"Modifications to the contract"}),"\n",(0,a.jsxs)(t.p,{children:["At this point, you should have a good understanding of what the end goal should be so let's get to work! Open the ",(0,a.jsx)(t.code,{children:"src"})," directory and create a new file called ",(0,a.jsx)(t.code,{children:"events.rs"}),". This is where your log structs will live."]}),"\n",(0,a.jsx)(t.h3,{id:"events-rs",children:"Creating the events file"}),"\n",(0,a.jsxs)(t.p,{children:["Copy the following into your file. This will outline the structs for your ",(0,a.jsx)(t.code,{children:"EventLog"}),", ",(0,a.jsx)(t.code,{children:"FtMintLog"}),", and ",(0,a.jsx)(t.code,{children:"FtTransferLog"}),". In addition, we've added a way for ",(0,a.jsx)(t.code,{children:"EVENT_JSON:"})," to be prefixed whenever you log the ",(0,a.jsx)(t.code,{children:"EventLog"}),"."]}),"\n",(0,a.jsx)(i.Ey,{language:"rust",start:"1",end:"121",url:"https://github.com/near-examples/ft-tutorial/blob/main/3.initial-supply/src/events.rs"}),"\n",(0,a.jsx)("hr",{className:"subsection"}),"\n",(0,a.jsx)(t.h3,{id:"lib-rs",children:"Adding modules and constants"}),"\n",(0,a.jsxs)(t.p,{children:["Now that you've created a new file, you need to add the module to the ",(0,a.jsx)(t.code,{children:"lib.rs"})," file."]}),"\n",(0,a.jsx)(i.Ey,{language:"rust",start:"1",end:"13",url:"https://github.com/near-examples/ft-tutorial/blob/main/3.initial-supply/src/lib.rs"}),"\n",(0,a.jsx)("hr",{className:"subsection"}),"\n",(0,a.jsx)(t.h3,{id:"logging-the-total-supply-minted",children:"Logging the total supply minted"}),"\n",(0,a.jsxs)(t.p,{children:["Now that all the tools are set in place, you can implement the actual logging functionality. Since the contract will only be minting tokens at the very start when it's initialized, it's trivial where you should place the log. Open the ",(0,a.jsx)(t.code,{children:"src/lib.rs"})," file and navigate to the bottom of the ",(0,a.jsx)(t.code,{children:"new"})," initialization function. This is where you'll construct the log for minting."]}),"\n",(0,a.jsx)(i.Ey,{language:"rust",start:"67",end:"98",url:"https://github.com/near-examples/ft-tutorial/blob/main/3.initial-supply/src/lib.rs"}),"\n",(0,a.jsx)(t.p,{children:"With that finished, you've successfully implemented the backbone of the events standard and it's time to start testing."}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"redeploying-contract",children:"Deploying the contract"}),"\n",(0,a.jsx)(t.p,{children:"Since the current contract you have is already initialized, let's create a sub-account and deploy to that instead."}),"\n",(0,a.jsx)(t.h3,{id:"creating-a-sub-account",children:"Creating a sub-account"}),"\n",(0,a.jsxs)(t.p,{children:["Run the following command to create a sub-account ",(0,a.jsx)(t.code,{children:"events"})," of your main account with an initial balance of 3 NEAR which will be transferred from the original to your new account."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"near create-account events.$FT_CONTRACT_ID --masterAccount $FT_CONTRACT_ID --initialBalance 3\n"})}),"\n",(0,a.jsx)(t.p,{children:"Next, you'll want to export an environment variable for ease of development:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"export EVENTS_FT_CONTRACT_ID=events.$FT_CONTRACT_ID\n"})}),"\n",(0,a.jsx)(t.p,{children:"Build the contract as you did in the previous tutorials:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"cd 2.define-a-token && cargo near build\n"})}),"\n",(0,a.jsx)("hr",{className:"subsection"}),"\n",(0,a.jsx)(t.h3,{id:"deploying-initialization",children:"Deploying and Initialization"}),"\n",(0,a.jsxs)(t.p,{children:["It's time to deploy the contract, initialize it and mint the total supply. Let's create an initial supply of 1000 ",(0,a.jsx)(t.code,{children:"gtNEAR"}),". Since it has 24 decimal places, you should put ",(0,a.jsx)(t.code,{children:"1000"})," followed by 24 zeros in the total supply field."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"cargo near deploy $EVENTS_FT_CONTRACT_ID with-init-call new_default_meta json-args '{\"owner_id\": \"'$EVENTS_FT_CONTRACT_ID'\", \"total_supply\": \"1000000000000000000000000000\"}' prepaid-gas '100.0 Tgas' attached-deposit '0 NEAR' network-config testnet sign-with-keychain send\n"})}),"\n",(0,a.jsx)(t.p,{children:"You can check to see if everything went through properly by looking at the output in your CLI:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'...\nTransaction sent ...\n--- Logs ---------------------------\nLogs [events.aha_3.testnet]:\n  EVENT_JSON:{"standard":"nep141","version":"1.0.0","event":"ft_mint","data":[{"owner_id":"events.goteam.testnet","amount":"1000000000000000000000000000","memo":"Initial token supply is minted"}]}\n--- Result -------------------------\nEmpty result\n------------------------------------\n\nContract code has been successfully deployed.\nThe "new_default_meta" call to <events.goteam.testnet> on behalf of <events.goteam.testnet> succeeded.\n...\n'})}),"\n",(0,a.jsx)(t.p,{children:"You can see that the event was properly logged!"}),"\n",(0,a.jsx)("hr",{className:"subsection"}),"\n",(0,a.jsx)(t.h3,{id:"testing",children:"Querying Supply Information"}),"\n",(0,a.jsx)(t.p,{children:"You can now test if your view functions work properly. First, try to query for the total supply."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"near view $EVENTS_FT_CONTRACT_ID ft_total_supply\n"})}),"\n",(0,a.jsx)(t.p,{children:"This should return an output similar to the following:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"'1000000000000000000000000000'\n"})}),"\n",(0,a.jsx)(t.p,{children:"Hurray! Now you can check if the balance of the owner account works properly. If you call the following function, it should return the same number as the total supply."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"near view $EVENTS_FT_CONTRACT_ID ft_balance_of '{\"account_id\": \"'$EVENTS_FT_CONTRACT_ID'\"}'\n"})}),"\n",(0,a.jsx)(t.p,{children:"Returns:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"'1000000000000000000000000000'\n"})}),"\n",(0,a.jsxs)(t.p,{children:["If you query for the balance of some other account, it should return ",(0,a.jsx)(t.code,{children:"0"}),"."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'near view $EVENTS_FT_CONTRACT_ID ft_balance_of \'{"account_id": "benjiman.testnet"}\'\n'})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"viewing-fts-in-wallet",children:"Viewing FTs in the wallet"}),"\n",(0,a.jsxs)(t.p,{children:["Now that your contract implements the necessary functions that the wallet uses to pickup your contract and display the FTs, you should be able to see your tokens on display in the ",(0,a.jsx)(t.a,{href:"https://testnet.mynearwallet.com/",children:"balances tab"}),"."]}),"\n",(0,a.jsx)("img",{width:"65%",src:"/docs/assets/fts/filled-fts-in-wallet.png"}),"\n",(0,a.jsxs)(t.p,{children:["\ud83c\udf89\ud83c\udf89\ud83c\udf89 ",(0,a.jsx)(t.strong,{children:"This is awesome! Go team!"})," \ud83c\udf89\ud83c\udf89\ud83c\udf89 You can now see your very first fungible tokens in the wallet!"]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,a.jsxs)(t.p,{children:["Today you went through and created the logic for minting a total supply. You then implemented some of the core standard logic and the ",(0,a.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/FungibleToken/Event",children:"events standard"}),". You created events for ",(0,a.jsx)(t.a,{href:"#modifications-to-the-contract",children:"minting"})," FTs on initialization. You then deployed and ",(0,a.jsx)(t.a,{href:"#testing",children:"tested"})," your changes and saw your very first FTs in the wallet!"]}),"\n",(0,a.jsx)(t.p,{children:"In the next tutorial, you'll look at the basics of registering accounts so that they can transfer and receive FTs."})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>s});n(67294);var a=n(36905);const r={tabItem:"tabItem_Ymn6"};var i=n(85893);function s(e){var t=e.children,n=e.hidden,s=e.className;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,s),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(67294),r=n(36905),i=n(12466),s=n(16550),o=n(20469),l=n(91980),c=n(67392),u=n(50012);function d(e){var t,n;return null!=(t=null==(n=a.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,a.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function h(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:function(e){return d(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,i=(0,s.k6)(),o=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:r});return[(0,l._X)(o),(0,a.useCallback)((function(e){if(o){var t=new URLSearchParams(i.location.search);t.set(o,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[o,i])]}function g(e){var t,n,r,i,s=e.defaultValue,l=e.queryString,c=void 0!==l&&l,d=e.groupId,g=h(e),m=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:s,tabValues:g})})),y=m[0],x=m[1],j=f({queryString:c,groupId:d}),b=j[0],w=j[1],v=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),n=(0,u.Nk)(t),r=n[0],i=n[1],[r,(0,a.useCallback)((function(e){t&&i.set(e)}),[t,i])]),T=v[0],_=v[1],k=function(){var e=null!=b?b:T;return p({value:e,tabValues:g})?e:null}();return(0,o.Z)((function(){k&&x(k)}),[k]),{selectedValue:y,selectValue:(0,a.useCallback)((function(e){if(!p({value:e,tabValues:g}))throw new Error("Can't select invalid tab value="+e);x(e),w(e),_(e)}),[w,_,g]),tabValues:g}}var m=n(72389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(85893);function j(e){var t=e.className,n=e.block,a=e.selectedValue,s=e.selectValue,o=e.tabValues,l=[],c=(0,i.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var t=e.currentTarget,n=l.indexOf(t),r=o[n].value;r!==a&&(c(t),s(r))},d=function(e){var t,n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var a,r=l.indexOf(e.currentTarget)+1;n=null!=(a=l[r])?a:l[0];break;case"ArrowLeft":var i,s=l.indexOf(e.currentTarget)-1;n=null!=(i=l[s])?i:l[l.length-1]}null==(t=n)||t.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t),children:o.map((function(e){var t=e.value,n=e.label,i=e.attributes;return(0,x.jsx)("li",Object.assign({role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:function(e){return l.push(e)},onKeyDown:d,onClick:u},i,{className:(0,r.Z)("tabs__item",y.tabItem,null==i?void 0:i.className,{"tabs__item--active":a===t}),children:null!=n?n:t}),t)}))})}function b(e){var t=e.lazy,n=e.children,r=e.selectedValue,i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var s=i.find((function(e){return e.props.value===r}));return s?(0,a.cloneElement)(s,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:i.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})}))})}function w(e){var t=g(e);return(0,x.jsxs)("div",{className:(0,r.Z)("tabs-container",y.tabList),children:[(0,x.jsx)(j,Object.assign({},t,e)),(0,x.jsx)(b,Object.assign({},t,e))]})}function v(e){var t=(0,m.Z)();return(0,x.jsx)(w,Object.assign({},e,{children:d(e.children)}),String(t))}},71183:(e,t,n)=>{n.d(t,{O2:()=>f,Ey:()=>m,SQ:()=>g});var a=n(67294),r=n(74866),i=n(85162),s=n(74165),o=n(15861),l=n(1841),c=n.n(l),u=n(85893);function d(){return(d=(0,o.Z)((0,s.Z)().mark((function e(t,n,a){var r,i,o,l;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((i=localStorage.getItem(t+"-until"))&&i>Date.now())){e.next=5;break}r=localStorage.getItem(t),e.next=18;break;case 5:return e.prev=5,e.next=8,fetch(t);case 8:return e.next=10,e.sent.text();case 10:r=e.sent,localStorage.setItem(t,r),localStorage.setItem(t+"-until",Date.now()+6e4),e.next=18;break;case 15:return e.prev=15,e.t0=e.catch(5),e.abrupt("return","Error fetching code, please try reloading");case 18:return o=r.split("\n"),n=n?Number(n)-1:0,a=a?Number(a):o.length,o=o.slice(n,a),l=o.reduce((function(e,t){if(0===t.length)return e;var n=t.match(/^\s+/);return n?Math.min(e,n[0].length):0}),1/0),e.abrupt("return",o.map((function(e){return e.slice(l)})).join("\n"));case 24:case"end":return e.stop()}}),e,null,[[5,15]])})))).apply(this,arguments)}const h=function(e){var t=e.url,n=e.start,r=e.end,i=e.language,s=e.fname,o=e.metastring,l=(0,a.useState)("Loading..."),h=l[0],p=l[1];return(0,a.useEffect)((function(){var e=function(e){var t=e.slice(e.indexOf("https")).split("#"),n=t[0],a=(t[1],new URL(n).pathname.split("/").slice(1)),r=a[0],i=a[1];return a[2],"https://raw.githubusercontent.com/"+r+"/"+i+"/"+a[3]+"/"+a.slice(4).join("/")}(t),a=function(e,t,n){return d.apply(this,arguments)}(e,n,r);a.then((function(e){return p(e)}))})),(0,u.jsxs)("div",{fname:s,children:[(0,u.jsx)(c(),{language:i,metastring:o+" showLineNumbers",children:h}),(0,u.jsx)("div",{style:{fontSize:"0.9em",fontWeight:600,color:"rgb(14, 117, 221)",textAlign:"center",paddingBottom:"13px",textDecoration:"underline"},children:(0,u.jsx)("a",{href:t,target:"_blank",rel:"noreferrer noopener",children:"See full example on GitHub"})})]})};var p={rust:"\ud83e\udd80 Rust",js:"\ud83c\udf10 Javascript",ts:"\ud83c\udf10 Typescript"};function f(e){var t=e.children;return Array.isArray(t)||(t=[t]),(0,u.jsx)(r.Z,{className:"language-tabs",groupId:"code-tabs",children:t.map((function(e,t){return(0,u.jsx)(i.Z,{value:e.props.value,label:p[e.props.value],children:e})}))})}function g(e){var t=e.children,n=e.language;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var n=e.props,a=(n.children,n.url),r=n.start,i=n.end,s=n.fname;if(e.type===m)return m({url:a,start:r,end:i,language:t,fname:s});return e}(e,n)})),1==t.length?(0,u.jsx)(i.Z,{value:0,label:t[0].props.fname,children:t[0]}):(0,u.jsx)(r.Z,{className:"file-tabs",children:t.map((function(e,t){return(0,u.jsx)(i.Z,{value:t,label:e.props.fname,children:e})}))})}function m(e){var t=e.url,n=e.start,a=e.end,r=e.language,i=e.fname,s=e.metastring;return h({url:t,start:n,end:a,language:r,fname:i,metastring:s})}}}]);