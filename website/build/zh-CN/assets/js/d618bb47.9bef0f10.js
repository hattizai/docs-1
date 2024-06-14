"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6490],{85422:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>h});var a=n(85893),s=n(11151),r=n(71183);const o={id:"marketplace",title:"Marketplace",sidebar_label:"Marketplace"},i=void 0,l={id:"tutorials/nfts/js/marketplace",title:"Marketplace",description:"In this tutorial, you'll learn the basics of an NFT marketplace contract where you can buy and sell non-fungible tokens for $NEAR. In the previous tutorials, you went through and created a fully fledged NFT contract that incorporates all the standards found in the NFT standard. In the previous tutorials, you went through and created a fully fledged NFT contract that incorporates all the standards found in the NFT standard.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/3.tutorials/nfts/js/8-marketplace.md",sourceDirName:"3.tutorials/nfts/js",slug:"/tutorials/nfts/js/marketplace",permalink:"/zh-CN/tutorials/nfts/js/marketplace",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/nfts/js/8-marketplace.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1712567569e3,sidebarPosition:8,frontMatter:{id:"marketplace",title:"Marketplace",sidebar_label:"Marketplace"},sidebar:"tutorials",previous:{title:"Events",permalink:"/zh-CN/tutorials/nfts/js/events"},next:{title:"Introduction",permalink:"/zh-CN/tutorials/nfts/introduction"}},c={},h=[{value:"Introduction",id:"introduction",level:2},{value:"File structure",id:"file-structure",level:2},{value:"Understanding the contract",id:"understanding-the-contract",level:2},{value:"index.ts",id:"index-ts",level:2},{value:"Constructor logic",id:"constructor-logic",level:3},{value:"Storage management model",id:"storage-management-model",level:3},{value:"nft_callbacks.ts",id:"nft_callbacks-ts",level:2},{value:"Listing logic",id:"listing-logic",level:3},{value:"sale.ts",id:"sale-ts",level:2},{value:"Sale object",id:"sale-object",level:3},{value:"Removing sales",id:"removing-sales",level:3},{value:"Updating price",id:"updating-price",level:3},{value:"Purchasing NFTs",id:"purchasing-nfts",level:3},{value:"sale_view.ts",id:"sale_view-ts",level:2},{value:"Total supply",id:"total-supply",level:3},{value:"Total supply by owner",id:"total-supply-by-owner",level:3},{value:"Total supply by contract",id:"total-supply-by-contract",level:3},{value:"Query for listing information",id:"query-listing-information",level:3},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["In this tutorial, you'll learn the basics of an NFT marketplace contract where you can buy and sell non-fungible tokens for $NEAR. In the previous tutorials, you went through and created a fully fledged NFT contract that incorporates all the standards found in the ",(0,a.jsx)(t.a,{href:"https://nomicon.io/Standards/NonFungibleToken",children:"NFT standard"}),". In the previous tutorials, you went through and created a fully fledged NFT contract that incorporates all the standards found in the ",(0,a.jsx)(t.a,{href:"https://nomicon.io/Standards/NonFungibleToken",children:"NFT standard"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,a.jsx)(t.p,{children:"Throughout this tutorial, you'll learn how a marketplace contract could work on NEAR. This is meant to be an example and there is no canonical implementation. Feel free to branch off and modify this contract to meet your specific needs. This is meant to be an example and there is no canonical implementation. Feel free to branch off and modify this contract to meet your specific needs."}),"\n",(0,a.jsxs)(t.p,{children:["Using the same repository as the previous tutorials, if you checkout the ",(0,a.jsx)(t.code,{children:"8.marketplace"})," branch, you should have the necessary files to complete the tutorial."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"git checkout 8.marketplace\n"})}),"\n",(0,a.jsx)(t.h2,{id:"file-structure",children:"File structure"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"market-contract\n\u2514\u2500\u2500 src\n    \u251c\u2500\u2500 internal.ts\n    \u251c\u2500\u2500 index.ts\n    \u251c\u2500\u2500 nft_callbacks.ts\n    \u251c\u2500\u2500 sale.ts\n    \u2514\u2500\u2500 sale_views.ts\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Usually, when doing work on multiple smart contracts that all pertain to the same repository, it's a good idea to structure them in their own folders as done in this tutorial. Usually, when doing work on multiple smart contracts that all pertain to the same repository, it's a good idea to structure them in their own folders as done in this tutorial. To make your work easier when building the smart contracts, we've also modified the repository's ",(0,a.jsx)(t.code,{children:"package.json"})," file so that building both smart contracts can be easily done by running the following command."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"yarn build\n"})}),"\n",(0,a.jsxs)(t.p,{children:["This will install the dependencies for both contracts and compile them to ",(0,a.jsx)(t.code,{children:"wasm"})," files that are stored in the following directory."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"nft-tutorial-js\n\u2514\u2500\u2500 build\n    \u251c\u2500\u2500 nft.wasm\n    \u2514\u2500\u2500 market.wasm\n"})}),"\n",(0,a.jsx)(t.h2,{id:"understanding-the-contract",children:"Understanding the contract"}),"\n",(0,a.jsx)(t.p,{children:"At first, the contract can be quite overwhelming but if you strip away all the fluff and dig into the core functionalities, it's actually quite simple. At first, the contract can be quite overwhelming but if you strip away all the fluff and dig into the core functionalities, it's actually quite simple. This contract was designed for only one thing - to allow people to buy and sell NFTs for NEAR. This includes the support for paying royalties, updating the price of your sales, removing sales and paying for storage. This includes the support for paying royalties, updating the price of your sales, removing sales and paying for storage."}),"\n",(0,a.jsx)(t.p,{children:"Let's go through the files and take note of some of the important functions and what they do."}),"\n",(0,a.jsx)(t.h2,{id:"index-ts",children:"index.ts"}),"\n",(0,a.jsx)(t.p,{children:"This file outlines what information is stored on the contract as well as some other crucial functions that you'll learn about below."}),"\n",(0,a.jsx)(t.h3,{id:"constructor-logic",children:"Constructor logic"}),"\n",(0,a.jsxs)(t.p,{children:["The first function you'll look at is the constructor function. The first function you'll look at is the constructor function. This takes an ",(0,a.jsx)(t.code,{children:"owner_id"})," as the only parameter and will default all the storage collections to their default values."]}),"\n",(0,a.jsx)(r.Ey,{language:"js",start:"40",end:"52",url:"https://github.com/near-examples/nft-tutorial-js/blob/8.marketplace/src/market-contract/index.ts"}),"\n",(0,a.jsx)(t.h3,{id:"storage-management-model",children:"Storage management model"}),"\n",(0,a.jsxs)(t.p,{children:["Next, let's talk about the storage management model chosen for this contract. On the NFT contract, users attached $NEAR to the calls that needed storage paid for. Next, let's talk about the storage management model chosen for this contract. On the NFT contract, users attached $NEAR to the calls that needed storage paid for. For example, if someone was minting an NFT, they would need to attach ",(0,a.jsx)(t.code,{children:"x"})," amount of NEAR to cover the cost of storing the data on the contract."]}),"\n",(0,a.jsx)(t.p,{children:"On this marketplace contract, however, the storage model is a bit different. Users will need to deposit $NEAR onto the marketplace to cover the storage costs. On this marketplace contract, however, the storage model is a bit different. Users will need to deposit $NEAR onto the marketplace to cover the storage costs. Whenever someone puts an NFT for sale, the marketplace needs to store that information which costs $NEAR. Users can either deposit as much NEAR as they want so that they never have to worry about storage again or they can deposit the minimum amount to cover 1 sale on an as-needed basis. Users can either deposit as much NEAR as they want so that they never have to worry about storage again or they can deposit the minimum amount to cover 1 sale on an as-needed basis."}),"\n",(0,a.jsx)(t.p,{children:"You might be thinking about the scenario when a sale is purchased. What happens to the storage that is now being released on the contract? This is why we've introduced a storage withdrawal function. This allows users to withdraw any excess storage that is not being used. Let's go through some scenarios to understand the logic. The required storage for 1 sale is 0.01 NEAR on the marketplace contract."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Scenario A"})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Benji wants to list his NFT on the marketplace but has never paid for storage."}),"\n",(0,a.jsxs)(t.li,{children:["He deposits exactly 0.01 NEAR using the ",(0,a.jsx)(t.code,{children:"storage_deposit"})," method. This will cover 1 sale. This will cover 1 sale."]}),"\n",(0,a.jsxs)(t.li,{children:["He lists his NFT on the marketplace and is now using up 1 out of his prepaid 1 sales and has no more storage left. If he were to call ",(0,a.jsx)(t.code,{children:"storage_withdraw"}),", nothing would happen. If he were to call ",(0,a.jsx)(t.code,{children:"storage_withdraw"}),", nothing would happen."]}),"\n",(0,a.jsx)(t.li,{children:"Dorian loves his NFT and quickly purchases it before anybody else can. Dorian loves his NFT and quickly purchases it before anybody else can. This means that Benji's sale has now been taken down (since it was purchased) and Benji is using up 0 out of his prepaid 1 sales. In other words, he has an excess of 1 sale or 0.01 NEAR. In other words, he has an excess of 1 sale or 0.01 NEAR."}),"\n",(0,a.jsxs)(t.li,{children:["Benji can now call ",(0,a.jsx)(t.code,{children:"storage_withdraw"})," and will be transferred his 0.01 NEAR back. Benji can now call ",(0,a.jsx)(t.code,{children:"storage_withdraw"})," and will be transferred his 0.01 NEAR back. On the contract's side, after withdrawing, he will have 0 sales paid for and will need to deposit storage before trying to list anymore NFTs."]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Scenario B"})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Dorian owns one hundred beautiful NFTs and knows that he wants to list all of them."}),"\n",(0,a.jsxs)(t.li,{children:["To avoid having to call ",(0,a.jsx)(t.code,{children:"storage_deposit"})," everytime he wants to list an NFT, he calls it once. Since Dorian is a baller, he attaches 10 NEAR which is enough to cover 1000 sales. He now has an excess of 9 NEAR or 900 sales. Since Dorian is a baller, he attaches 10 NEAR which is enough to cover 1000 sales. He now has an excess of 9 NEAR or 900 sales."]}),"\n",(0,a.jsxs)(t.li,{children:["Dorian needs the 9 NEAR for something else but doesn't want to take down his 100 listings. Since he has an excess of 9 NEAR, he can easily withdraw and still have his 100 listings. After calling ",(0,a.jsx)(t.code,{children:"storage_withdraw"})," and being transferred 9 NEAR, he will have an excess of 0 sales. Since he has an excess of 9 NEAR, he can easily withdraw and still have his 100 listings. After calling ",(0,a.jsx)(t.code,{children:"storage_withdraw"})," and being transferred 9 NEAR, he will have an excess of 0 sales."]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"With this behavior in mind, the following two functions outline the logic."}),"\n",(0,a.jsx)(r.Ey,{language:"js",start:"58",end:"121",url:"https://github.com/near-examples/nft-tutorial-js/blob/8.marketplace/src/market-contract/index.ts"}),"\n",(0,a.jsxs)(t.p,{children:["In this contract, the storage required for each sale is 0.01 NEAR but you can query that information using the ",(0,a.jsx)(t.code,{children:"storage_minimum_balance"})," function. In addition, if you wanted to check how much storage a given account has paid, you can query the ",(0,a.jsx)(t.code,{children:"storage_balance_of"})," function. In addition, if you wanted to check how much storage a given account has paid, you can query the ",(0,a.jsx)(t.code,{children:"storage_balance_of"})," function."]}),"\n",(0,a.jsxs)(t.p,{children:["With that out of the way, it's time to move onto the ",(0,a.jsx)(t.code,{children:"nft_callbacks.ts"})," file where you'll look at how NFTs are put for sale."]}),"\n",(0,a.jsx)(t.h2,{id:"nft_callbacks-ts",children:"nft_callbacks.ts"}),"\n",(0,a.jsxs)(t.p,{children:["This file is responsible for the logic used to put NFTs for sale. This file is responsible for the logic used to put NFTs for sale. If you remember from the ",(0,a.jsx)(t.a,{href:"/tutorials/nfts/js/approvals#marketplace-integrations",children:"marketplaces section"})," of the approvals tutorial, when users call ",(0,a.jsx)(t.code,{children:"nft_approve"})," and pass in a message, it will perform a cross-contract call to the ",(0,a.jsx)(t.code,{children:"receiver_id"}),"'s contract and call the method ",(0,a.jsx)(t.code,{children:"nft_on_approve"}),". This ",(0,a.jsx)(t.code,{children:"nft_callbacks.ts"})," file will implement that function. This ",(0,a.jsx)(t.code,{children:"nft_callbacks.ts"})," file will implement that function."]}),"\n",(0,a.jsx)(t.h3,{id:"listing-logic",children:"Listing logic"}),"\n",(0,a.jsxs)(t.p,{children:["The market contract is expecting the message that the user passes into ",(0,a.jsx)(t.code,{children:"nft_approve"})," on the NFT contract to be JSON stringified sale arguments. This outlines the sale price in yoctoNEAR for the NFT that is listed. This outlines the sale price in yoctoNEAR for the NFT that is listed."]}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"nft_on_approve"})," function is called via a cross-contract call by the NFT contract. It will make sure that the signer has enough storage to cover adding another sale. It will then attempt to get the sale conditions from the message and create the listing."]}),"\n",(0,a.jsx)(r.Ey,{language:"js",start:"6",end:"73",url:"https://github.com/near-examples/nft-tutorial-js/blob/8.marketplace/src/market-contract/nft_callbacks.ts"}),"\n",(0,a.jsx)(t.h2,{id:"sale-ts",children:"sale.ts"}),"\n",(0,a.jsxs)(t.p,{children:["Now that you're familiar with the process of both adding storage and listing NFTs on the marketplace, let's go through what you can do once a sale has been listed. The ",(0,a.jsx)(t.code,{children:"sale.ts"})," file outlines the functions for updating the price, removing, and purchasing NFTs. The ",(0,a.jsx)(t.code,{children:"sale.ts"})," file outlines the functions for updating the price, removing, and purchasing NFTs."]}),"\n",(0,a.jsx)(t.h3,{id:"sale-object",children:"Sale object"}),"\n",(0,a.jsx)(t.p,{children:"It's important to understand what information the contract is storing for each sale object. It's important to understand what information the contract is storing for each sale object. Since the marketplace has many NFTs listed that come from different NFT contracts, simply storing the token ID would not be enough to distinguish between different NFTs. This is why you need to keep track of both the token ID and the contract by which the NFT came from. In addition, for each listing, the contract must keep track of the approval ID it was given to transfer the NFT. Finally, the owner and sale conditions are needed. This is why you need to keep track of both the token ID and the contract by which the NFT came from. In addition, for each listing, the contract must keep track of the approval ID it was given to transfer the NFT. Finally, the owner and sale conditions are needed."}),"\n",(0,a.jsx)(r.Ey,{language:"js",start:"9",end:"42",url:"https://github.com/near-examples/nft-tutorial-js/blob/8.marketplace/src/market-contract/sale.ts"}),"\n",(0,a.jsx)(t.h3,{id:"removing-sales",children:"Removing sales"}),"\n",(0,a.jsxs)(t.p,{children:["In order to remove a listing, the owner must call the ",(0,a.jsx)(t.code,{children:"remove_sale"})," function and pass the NFT contract and token ID. Behind the scenes, this calls the ",(0,a.jsx)(t.code,{children:"internallyRemoveSale"})," function which you can find in the ",(0,a.jsx)(t.code,{children:"internal.ts"})," file. This will assert one yoctoNEAR for security reasons. Behind the scenes, this calls the ",(0,a.jsx)(t.code,{children:"internallyRemoveSale"})," function which you can find in the ",(0,a.jsx)(t.code,{children:"internal.ts"})," file. This will assert one yoctoNEAR for security reasons."]}),"\n",(0,a.jsx)(r.Ey,{language:"js",start:"44",end:"65",url:"https://github.com/near-examples/nft-tutorial-js/blob/8.marketplace/src/market-contract/sale.ts"}),"\n",(0,a.jsx)(t.h3,{id:"updating-price",children:"Updating price"}),"\n",(0,a.jsxs)(t.p,{children:["In order to update the list price of a token, the owner must call the ",(0,a.jsx)(t.code,{children:"update_price"})," function and pass in the contract, token ID, and desired price. This will get the sale object, change the sale conditions, and insert it back. For security reasons, this function will assert one yoctoNEAR. This will get the sale object, change the sale conditions, and insert it back. For security reasons, this function will assert one yoctoNEAR."]}),"\n",(0,a.jsx)(r.Ey,{language:"js",start:"67",end:"96",url:"https://github.com/near-examples/nft-tutorial-js/blob/8.marketplace/src/market-contract/sale.ts"}),"\n",(0,a.jsx)(t.h3,{id:"purchasing-nfts",children:"Purchasing NFTs"}),"\n",(0,a.jsxs)(t.p,{children:["For purchasing NFTs, you must call the ",(0,a.jsx)(t.code,{children:"offer"})," function. It takes an ",(0,a.jsx)(t.code,{children:"nft_contract_id"})," and ",(0,a.jsx)(t.code,{children:"token_id"})," as parameters. You must attach the correct amount of NEAR to the call in order to purchase. For purchasing NFTs, you must call the ",(0,a.jsx)(t.code,{children:"offer"})," function. It takes an ",(0,a.jsx)(t.code,{children:"nft_contract_id"})," and ",(0,a.jsx)(t.code,{children:"token_id"})," as parameters. You must attach the correct amount of NEAR to the call in order to purchase. Behind the scenes, this will make sure your deposit is greater than the list price and call a private method ",(0,a.jsx)(t.code,{children:"processPurchase"})," which will perform a cross-contract call to the NFT contract to invoke the ",(0,a.jsx)(t.code,{children:"nft_transfer_payout"})," function. This will transfer the NFT using the ",(0,a.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/ApprovalManagement",children:"approval management"})," standard that you learned about and it will return the ",(0,a.jsx)(t.code,{children:"Payout"})," object which includes royalties. This will transfer the NFT using the ",(0,a.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/ApprovalManagement",children:"approval management"})," standard that you learned about and it will return the ",(0,a.jsx)(t.code,{children:"Payout"})," object which includes royalties."]}),"\n",(0,a.jsxs)(t.p,{children:["The marketplace will then call ",(0,a.jsx)(t.code,{children:"resolve_purchase"})," where it will check for malicious payout objects and then if everything went well, it will pay the correct accounts."]}),"\n",(0,a.jsx)(r.Ey,{language:"js",start:"98",end:"131",url:"https://github.com/near-examples/nft-tutorial-js/blob/8.marketplace/src/market-contract/sale.ts"}),"\n",(0,a.jsx)(t.h2,{id:"sale_view-ts",children:"sale_view.ts"}),"\n",(0,a.jsxs)(t.p,{children:["The final file we'll go through is the ",(0,a.jsx)(t.code,{children:"sale_view.ts"})," file. This is where some of the enumeration methods are outlined. It allows users to query for important information regarding sales. This is where some of the enumeration methods are outlined. It allows users to query for important information regarding sales."]}),"\n",(0,a.jsx)(t.h3,{id:"total-supply",children:"Total supply"}),"\n",(0,a.jsxs)(t.p,{children:["To query for the total supply of NFTs listed on the marketplace, you can call the ",(0,a.jsx)(t.code,{children:"get_supply_sales"})," function. An example can be seen below. An example can be seen below."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"near view $MARKETPLACE_CONTRACT_ID get_supply_sales\n"})}),"\n",(0,a.jsx)(t.h3,{id:"total-supply-by-owner",children:"Total supply by owner"}),"\n",(0,a.jsxs)(t.p,{children:["To query for the total supply of NFTs listed by a specific owner on the marketplace, you can call the ",(0,a.jsx)(t.code,{children:"get_supply_by_owner_id"})," function. An example can be seen below. An example can be seen below."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'near view $MARKETPLACE_CONTRACT_ID get_supply_by_owner_id \'{"account_id": "benji.testnet"}\'\n'})}),"\n",(0,a.jsx)(t.h3,{id:"total-supply-by-contract",children:"Total supply by contract"}),"\n",(0,a.jsxs)(t.p,{children:["To query for the total supply of NFTs that belong to a specific contract, you can call the ",(0,a.jsx)(t.code,{children:"get_supply_by_nft_contract_id"})," function. An example can be seen below. An example can be seen below."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'near view $MARKETPLACE_CONTRACT_ID get_supply_by_nft_contract_id \'{"nft_contract_id": "fayyr-nft.testnet"}\'\n'})}),"\n",(0,a.jsx)(t.h3,{id:"query-listing-information",children:"Query for listing information"}),"\n",(0,a.jsxs)(t.p,{children:["To query for important information for a specific listing, you can call the ",(0,a.jsx)(t.code,{children:"get_sale"})," function. This requires that you pass in the ",(0,a.jsx)(t.code,{children:"nft_contract_token"}),". This is essentially the unique identifier for sales on the market contract as explained earlier. It consists of the NFT contract followed by a ",(0,a.jsx)(t.code,{children:"DELIMITER"})," followed by the token ID. In this contract, the ",(0,a.jsx)(t.code,{children:"DELIMITER"})," is simply a period: ",(0,a.jsx)(t.code,{children:"."}),".  An example of this query can be seen below. This requires that you pass in the ",(0,a.jsx)(t.code,{children:"nft_contract_token"}),". This is essentially the unique identifier for sales on the market contract as explained earlier. It consists of the NFT contract followed by a ",(0,a.jsx)(t.code,{children:"DELIMITER"})," followed by the token ID. In this contract, the ",(0,a.jsx)(t.code,{children:"DELIMITER"})," is simply a period: ",(0,a.jsx)(t.code,{children:"."}),".  An example of this query can be seen below."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'near view $MARKETPLACE_CONTRACT_ID get_sale \'{"nft_contract_token": "fayyr-nft.testnet.token-42"}\'\n'})}),"\n",(0,a.jsxs)(t.p,{children:["In addition, you can query for paginated information about the listings for a given owner by calling the ",(0,a.jsx)(t.code,{children:"get_sales_by_owner_id"})," function."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'near view $MARKETPLACE_CONTRACT_ID get_sales_by_owner_id \'{"account_id": "benji.testnet", "from_index": "5", "limit": 10}\'\n'})}),"\n",(0,a.jsxs)(t.p,{children:["Finally, you can query for paginated information about the listings that originate from a given NFT contract by calling the ",(0,a.jsx)(t.code,{children:"get_sales_by_nft_contract_id"})," function."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'near view $MARKETPLACE_CONTRACT_ID get_sales_by_nft_contract_id \'{"nft_contract_id": "fayyr-nft.testnet, "from_index": "5", "limit": 10}\'\n'})}),"\n",(0,a.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,a.jsxs)(t.p,{children:["In this tutorial, you learned about the basics of a marketplace contract and how it works. In this tutorial, you learned about the basics of a marketplace contract and how it works. You went through the ",(0,a.jsx)(t.a,{href:"#index-ts",children:"index.ts"})," file and learned about the ",(0,a.jsx)(t.a,{href:"#initialization-function",children:"initialization function"})," in addition to the ",(0,a.jsx)(t.a,{href:"#storage-management-model",children:"storage management"})," model."]}),"\n",(0,a.jsxs)(t.p,{children:["You then went through the ",(0,a.jsx)(t.a,{href:"#nft_callbacks-ts",children:"nft_callbacks"})," file to understand how to ",(0,a.jsx)(t.a,{href:"#listing-logic",children:"list NFTs"}),". In addition, you went through some important functions needed for after you've listed an NFT. This includes ",(0,a.jsx)(t.a,{href:"#removing-sales",children:"removing sales"}),", ",(0,a.jsx)(t.a,{href:"#updating-price",children:"updating the price"}),", and ",(0,a.jsx)(t.a,{href:"#purchasing-nfts",children:"purchasing NFTs"}),". In addition, you went through some important functions needed for after you've listed an NFT. This includes ",(0,a.jsx)(t.a,{href:"#removing-sales",children:"removing sales"}),", ",(0,a.jsx)(t.a,{href:"#updating-price",children:"updating the price"}),", and ",(0,a.jsx)(t.a,{href:"#purchasing-nfts",children:"purchasing NFTs"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["Finally, you went through the enumeration methods found in the ",(0,a.jsx)(t.a,{href:"#sale_view-ts",children:(0,a.jsx)(t.code,{children:"sale_view"})})," file. These allow you to query for important information found on the marketplace contract. These allow you to query for important information found on the marketplace contract."]}),"\n",(0,a.jsxs)(t.p,{children:["You should now have a solid understanding of NFTs and marketplaces on NEAR. Feel free to branch off and expand on these contracts to create whatever cool applications you'd like. The world is your oyster! Thanks for joining on this journey and don't forget, ",(0,a.jsx)(t.strong,{children:"Go Team!"})," Feel free to branch off and expand on these contracts to create whatever cool applications you'd like. The world is your oyster! Thanks for joining on this journey and don't forget, ",(0,a.jsx)(t.strong,{children:"Go Team!"})]}),"\n",(0,a.jsxs)(t.admonition,{title:"Versioning for this article",type:"note",children:[(0,a.jsx)(t.p,{children:"At the time of this writing, this example works with the following versions:"}),(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["near-cli: ",(0,a.jsx)(t.code,{children:"3.0.0"})]}),"\n",(0,a.jsxs)(t.li,{children:["NFT standard: ",(0,a.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Core",children:"NEP171"}),", version ",(0,a.jsx)(t.code,{children:"1.0.0"})]}),"\n"]})]})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>o});n(67294);var a=n(36905);const s={tabItem:"tabItem_Ymn6"};var r=n(85893);function o(e){var t=e.children,n=e.hidden,o=e.className;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.Z)(s.tabItem,o),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(67294),s=n(36905),r=n(12466),o=n(16550),i=n(20469),l=n(91980),c=n(67392),h=n(50012);function d(e){var t,n;return null!=(t=null==(n=a.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,a.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function u(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:function(e){return d(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function f(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function p(e){var t=e.queryString,n=void 0!==t&&t,s=e.groupId,r=(0,o.k6)(),i=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:s});return[(0,l._X)(i),(0,a.useCallback)((function(e){if(i){var t=new URLSearchParams(r.location.search);t.set(i,e),r.replace(Object.assign({},r.location,{search:t.toString()}))}}),[i,r])]}function m(e){var t,n,s,r,o=e.defaultValue,l=e.queryString,c=void 0!==l&&l,d=e.groupId,m=u(e),g=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var s=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:o,tabValues:m})})),b=g[0],x=g[1],y=p({queryString:c,groupId:d}),j=y[0],w=y[1],v=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),n=(0,h.Nk)(t),s=n[0],r=n[1],[s,(0,a.useCallback)((function(e){t&&r.set(e)}),[t,r])]),T=v[0],k=v[1],N=function(){var e=null!=j?j:T;return f({value:e,tabValues:m})?e:null}();return(0,i.Z)((function(){N&&x(N)}),[N]),{selectedValue:b,selectValue:(0,a.useCallback)((function(e){if(!f({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);x(e),w(e),k(e)}),[w,k,m]),tabValues:m}}var g=n(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(85893);function y(e){var t=e.className,n=e.block,a=e.selectedValue,o=e.selectValue,i=e.tabValues,l=[],c=(0,r.o5)().blockElementScrollPositionUntilNextRender,h=function(e){var t=e.currentTarget,n=l.indexOf(t),s=i[n].value;s!==a&&(c(t),o(s))},d=function(e){var t,n=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":var a,s=l.indexOf(e.currentTarget)+1;n=null!=(a=l[s])?a:l[0];break;case"ArrowLeft":var r,o=l.indexOf(e.currentTarget)-1;n=null!=(r=l[o])?r:l[l.length-1]}null==(t=n)||t.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t),children:i.map((function(e){var t=e.value,n=e.label,r=e.attributes;return(0,x.jsx)("li",Object.assign({role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:function(e){return l.push(e)},onKeyDown:d,onClick:h},r,{className:(0,s.Z)("tabs__item",b.tabItem,null==r?void 0:r.className,{"tabs__item--active":a===t}),children:null!=n?n:t}),t)}))})}function j(e){var t=e.lazy,n=e.children,s=e.selectedValue,r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var o=r.find((function(e){return e.props.value===s}));return o?(0,a.cloneElement)(o,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:r.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==s})}))})}function w(e){var t=m(e);return(0,x.jsxs)("div",{className:(0,s.Z)("tabs-container",b.tabList),children:[(0,x.jsx)(y,Object.assign({},t,e)),(0,x.jsx)(j,Object.assign({},t,e))]})}function v(e){var t=(0,g.Z)();return(0,x.jsx)(w,Object.assign({},e,{children:d(e.children)}),String(t))}},71183:(e,t,n)=>{n.d(t,{O2:()=>p,Ey:()=>g,SQ:()=>m});var a=n(67294),s=n(74866),r=n(85162),o=n(74165),i=n(15861),l=n(1841),c=n.n(l),h=n(85893);function d(){return(d=(0,i.Z)((0,o.Z)().mark((function e(t,n,a){var s,r,i,l;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((r=localStorage.getItem(t+"-until"))&&r>Date.now())){e.next=5;break}s=localStorage.getItem(t),e.next=18;break;case 5:return e.prev=5,e.next=8,fetch(t);case 8:return e.next=10,e.sent.text();case 10:s=e.sent,localStorage.setItem(t,s),localStorage.setItem(t+"-until",Date.now()+6e4),e.next=18;break;case 15:return e.prev=15,e.t0=e.catch(5),e.abrupt("return","Error fetching code, please try reloading");case 18:return i=s.split("\n"),n=n?Number(n)-1:0,a=a?Number(a):i.length,i=i.slice(n,a),l=i.reduce((function(e,t){if(0===t.length)return e;var n=t.match(/^\s+/);return n?Math.min(e,n[0].length):0}),1/0),e.abrupt("return",i.map((function(e){return e.slice(l)})).join("\n"));case 24:case"end":return e.stop()}}),e,null,[[5,15]])})))).apply(this,arguments)}const u=function(e){var t=e.url,n=e.start,s=e.end,r=e.language,o=e.fname,i=e.metastring,l=(0,a.useState)("Loading..."),u=l[0],f=l[1];return(0,a.useEffect)((function(){var e=function(e){var t=e.slice(e.indexOf("https")).split("#"),n=t[0],a=(t[1],new URL(n).pathname.split("/").slice(1)),s=a[0],r=a[1];return a[2],"https://raw.githubusercontent.com/"+s+"/"+r+"/"+a[3]+"/"+a.slice(4).join("/")}(t),a=function(e,t,n){return d.apply(this,arguments)}(e,n,s);a.then((function(e){return f(e)}))})),(0,h.jsxs)("div",{fname:o,children:[(0,h.jsx)(c(),{language:r,metastring:i+" showLineNumbers",children:u}),(0,h.jsx)("div",{style:{fontSize:"0.9em",fontWeight:600,color:"rgb(14, 117, 221)",textAlign:"center",paddingBottom:"13px",textDecoration:"underline"},children:(0,h.jsx)("a",{href:t,target:"_blank",rel:"noreferrer noopener",children:"See full example on GitHub"})})]})};var f={rust:"\ud83e\udd80 Rust",js:"\ud83c\udf10 Javascript",ts:"\ud83c\udf10 Typescript"};function p(e){var t=e.children;return Array.isArray(t)||(t=[t]),(0,h.jsx)(s.Z,{className:"language-tabs",groupId:"code-tabs",children:t.map((function(e,t){return(0,h.jsx)(r.Z,{value:e.props.value,label:f[e.props.value],children:e})}))})}function m(e){var t=e.children,n=e.language;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var n=e.props,a=(n.children,n.url),s=n.start,r=n.end,o=n.fname;if(e.type===g)return g({url:a,start:s,end:r,language:t,fname:o});return e}(e,n)})),1==t.length?(0,h.jsx)(r.Z,{value:0,label:t[0].props.fname,children:t[0]}):(0,h.jsx)(s.Z,{className:"file-tabs",children:t.map((function(e,t){return(0,h.jsx)(r.Z,{value:t,label:e.props.fname,children:e})}))})}function g(e){var t=e.url,n=e.start,a=e.end,s=e.language,r=e.fname,o=e.metastring;return u({url:t,start:n,end:a,language:s,fname:r,metastring:o})}}}]);