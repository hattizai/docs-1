"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5405],{62523:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var o=n(85893),r=n(11151);const s={id:"core",title:"Core",sidebar_label:"Core"},i=void 0,a={id:"tutorials/nfts/core",title:"Core",description:"In this tutorial you'll learn how to implement the core standards into your smart contract. If you're joining us for the first time, feel free to clone this repo and checkout the 3.enumeration branch to follow along.",source:"@site/../docs/3.tutorials/nfts/4-core.md",sourceDirName:"3.tutorials/nfts",slug:"/tutorials/nfts/core",permalink:"/ko/tutorials/nfts/core",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/nfts/4-core.md",tags:[],version:"current",lastUpdatedBy:"Dami\xe1n Parrino",lastUpdatedAt:1674302473,formattedLastUpdatedAt:"2023\ub144 1\uc6d4 21\uc77c",sidebarPosition:4,frontMatter:{id:"core",title:"Core",sidebar_label:"Core"},sidebar:"contracts",previous:{title:"Enumeration",permalink:"/ko/tutorials/nfts/enumeration"},next:{title:"Approvals",permalink:"/ko/tutorials/nfts/approvals"}},c={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Modifications to the contract",id:"modifications-to-the-contract",level:2},{value:"Transfer function",id:"transfer-function",level:3},{value:"Internal helper functions",id:"internal-helper-functions",level:3},{value:"assert_one_yocto",id:"assert_one_yocto",level:4},{value:"internal_transfer",id:"internal_transfer",level:4},{value:"Transfer call function",id:"transfer-call-function",level:3},{value:"Redeploying the contract",id:"redeploying-contract",level:2},{value:"Testing the new changes",id:"testing-changes",level:2},{value:"Testing the transfer function",id:"testing-the-transfer-function",level:3},{value:"Testing the transfer call function",id:"testing-the-transfer-call-function",level:3},{value:"Conclusion",id:"conclusion",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["In this tutorial you'll learn how to implement the ",(0,o.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Core",children:"core standards"})," into your smart contract. If you're joining us for the first time, feel free to clone ",(0,o.jsx)(t.a,{href:"https://github.com/near-examples/nft-tutorial",children:"this repo"})," and checkout the ",(0,o.jsx)(t.code,{children:"3.enumeration"})," branch to follow along."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"git checkout 3.enumeration\n"})}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsxs)(t.p,{children:["If you wish to see the finished code for this ",(0,o.jsx)(t.em,{children:"Core"})," tutorial, you can find it on the ",(0,o.jsx)(t.code,{children:"4.core"})," branch."]})}),"\n",(0,o.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,o.jsxs)(t.p,{children:["Up until this point, you've created a simple NFT smart contract that allows users to mint tokens and view information using the ",(0,o.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Enumeration",children:"enumeration standards"}),". Today, you'll expand your smart contract to allow for users to not only mint tokens, but transfer them as well."]}),"\n",(0,o.jsxs)(t.p,{children:["As we did in the ",(0,o.jsx)(t.a,{href:"/tutorials/nfts/minting",children:"minting tutorial"}),", let's break down the problem into multiple subtasks to make our lives easier. When a token is minted, information is stored in 3 places:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"tokens_per_owner"}),": set of tokens for each account."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"tokens_by_id"}),": maps a token ID to a ",(0,o.jsx)(t.code,{children:"Token"})," object."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"token_metadata_by_id"}),": maps a token ID to its metadata."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Let's now consider the following scenario. If Benji owns token A and wants to transfer it to Mike as a birthday gift, what should happen? First of all, token A should be removed from Benji's set of tokens and added to Mike's set of tokens."}),"\n",(0,o.jsxs)(t.p,{children:["If that's the only logic you implement, you'll run into some problems. If you were to do a ",(0,o.jsx)(t.code,{children:"view"})," call to query for information about that token after it's been transferred to Mike, it would still say that Benji is the owner."]}),"\n",(0,o.jsxs)(t.p,{children:["This is because the contract is still mapping the token ID to the old ",(0,o.jsx)(t.code,{children:"Token"})," object that contains the ",(0,o.jsx)(t.code,{children:"owner_id"})," field set to Benji's account ID. You still have to change the ",(0,o.jsx)(t.code,{children:"tokens_by_id"})," data structure so that the token ID maps to a new ",(0,o.jsx)(t.code,{children:"Token"})," object which has Mike as the owner."]}),"\n",(0,o.jsx)(t.p,{children:"With that being said, the final process for when an owner transfers a token to a receiver should be the following:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Remove the token from the owner's set."}),"\n",(0,o.jsx)(t.li,{children:"Add the token to the receiver's set."}),"\n",(0,o.jsxs)(t.li,{children:["Map a token ID to a new ",(0,o.jsx)(t.code,{children:"Token"})," object containing the correct owner."]}),"\n"]}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsxs)(t.p,{children:["You might be curious as to why we don't edit the ",(0,o.jsx)(t.code,{children:"token_metadata_by_id"})," field. This is because no matter who owns the token, the token ID will always map to the same metadata. The metadata should never change and so we can just leave it alone."]})}),"\n",(0,o.jsx)(t.p,{children:"At this point, you're ready to move on and make the necessary modifications to your smart contract."}),"\n",(0,o.jsx)(t.h2,{id:"modifications-to-the-contract",children:"Modifications to the contract"}),"\n",(0,o.jsxs)(t.p,{children:["Let's start our journey in the ",(0,o.jsx)(t.code,{children:"nft-contract/src/nft_core.rs"})," file."]}),"\n",(0,o.jsx)(t.h3,{id:"transfer-function",children:"Transfer function"}),"\n",(0,o.jsxs)(t.p,{children:["You'll start by implementing the ",(0,o.jsx)(t.code,{children:"nft_transfer"})," logic. This function will transfer the specified ",(0,o.jsx)(t.code,{children:"token_id"})," to the ",(0,o.jsx)(t.code,{children:"receiver_id"})," with an optional ",(0,o.jsx)(t.code,{children:"memo"})," such as ",(0,o.jsx)(t.code,{children:'"Happy Birthday Mike!"'}),"."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near-examples/nft-tutorial/blob/4.core/nft-contract/src/nft_core.rs#L62-L82\n"})}),"\n",(0,o.jsxs)(t.p,{children:["There are a couple things to notice here. Firstly, we've introduced a new method called ",(0,o.jsx)(t.code,{children:"assert_one_yocto()"}),". This method will ensure that the user has attached exactly one yoctoNEAR to the call. If a function requires a deposit, you need a full access key to sign that transaction. By adding the one yoctoNEAR deposit requirement, you're essentially forcing the user to sign the transaction with a full access key."]}),"\n",(0,o.jsx)(t.p,{children:"Since the transfer function is potentially transferring very valuable assets, you'll want to make sure that whoever is calling the function has a full access key."}),"\n",(0,o.jsxs)(t.p,{children:["Secondly, we've introduced an ",(0,o.jsx)(t.code,{children:"internal_transfer"})," method. This will perform all the logic necessary to transfer an NFT."]}),"\n",(0,o.jsx)(t.h3,{id:"internal-helper-functions",children:"Internal helper functions"}),"\n",(0,o.jsxs)(t.p,{children:["Let's quickly move over to the ",(0,o.jsx)(t.code,{children:"nft-contract/src/internal.rs"})," file so that you can implement the ",(0,o.jsx)(t.code,{children:"assert_one_yocto()"})," and ",(0,o.jsx)(t.code,{children:"internal_transfer"})," methods."]}),"\n",(0,o.jsxs)(t.p,{children:["Let's start with the easier one, ",(0,o.jsx)(t.code,{children:"assert_one_yocto()"}),"."]}),"\n",(0,o.jsx)(t.h4,{id:"assert_one_yocto",children:"assert_one_yocto"}),"\n",(0,o.jsxs)(t.p,{children:["You can put this function anywhere in the ",(0,o.jsx)(t.code,{children:"internal.rs"})," file but in our case, we'll put it after the ",(0,o.jsx)(t.code,{children:"hash_account_id"})," function:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near-examples/nft-tutorial/blob/4.core/nft-contract/src/internal.rs#L14-L21\n"})}),"\n",(0,o.jsx)(t.h4,{id:"internal_transfer",children:"internal_transfer"}),"\n",(0,o.jsxs)(t.p,{children:["It's now time to implement the ",(0,o.jsx)(t.code,{children:"internal_transfer"})," function which is the core of this tutorial. This function will take the following parameters:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"sender_id"}),": the account that's attempting to transfer the token."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"receiver_id"}),": the account that's receiving the token."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"token_id"}),": the token ID being transferred."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"memo"}),": an optional memo to include."]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["The first thing you'll want to do is to make sure that the sender is authorized to transfer the token. In this case, you'll just make sure that the sender is the owner of the token. You'll do that by getting the ",(0,o.jsx)(t.code,{children:"Token"})," object using the ",(0,o.jsx)(t.code,{children:"token_id"})," and making sure that the sender is equal to the token's ",(0,o.jsx)(t.code,{children:"owner_id"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["Second, you'll remove the token ID from the sender's list and add the token ID to the receiver's list of tokens. Finally, you'll create a new ",(0,o.jsx)(t.code,{children:"Token"})," object with the receiver as the owner and remap the token ID to that newly created object."]}),"\n",(0,o.jsxs)(t.p,{children:["You'll want to create this function within the contract implementation (below the ",(0,o.jsx)(t.code,{children:"internal_add_token_to_owner"})," you created in the minting tutorial)."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near-examples/nft-tutorial/blob/4.core/nft-contract/src/internal.rs#L98-L138\n"})}),"\n",(0,o.jsxs)(t.p,{children:["You've previously implemented functionality for adding a token ID to an owner's set but you haven't created the functionality for removing a token ID from an owner's set. Let's do that now by created a new function called ",(0,o.jsx)(t.code,{children:"internal_remove_token_from_owner"})," which we'll place right above our ",(0,o.jsx)(t.code,{children:"internal_transfer"})," and below the ",(0,o.jsx)(t.code,{children:"internal_add_token_to_owner"})," function."]}),"\n",(0,o.jsxs)(t.p,{children:["In the remove function, you'll get the set of tokens for a given account ID and then remove the passed in token ID. If the account's set is empty after the removal, you'll simply remove the account from the ",(0,o.jsx)(t.code,{children:"tokens_per_owner"})," data structure."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near-examples/nft-tutorial/blob/4.core/nft-contract/src/internal.rs#L73-L96\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Your ",(0,o.jsx)(t.code,{children:"internal.rs"})," file should now have the following outline:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"internal.rs\n\u251c\u2500\u2500 hash_account_id\n\u251c\u2500\u2500 assert_one_yocto\n\u251c\u2500\u2500 refund_deposit\n\u2514\u2500\u2500 impl Contract\n    \u251c\u2500\u2500 internal_add_token_to_owner\n    \u251c\u2500\u2500 internal_remove_token_from_owner\n    \u2514\u2500\u2500 internal_transfer\n"})}),"\n",(0,o.jsxs)(t.p,{children:["With these internal functions complete, the logic for transferring NFTs is finished. It's now time to move on and implement ",(0,o.jsx)(t.code,{children:"nft_transfer_call"}),", one of the most integral yet complicated functions of the standard."]}),"\n",(0,o.jsx)(t.h3,{id:"transfer-call-function",children:"Transfer call function"}),"\n",(0,o.jsxs)(t.p,{children:["Let's consider the following scenario. An account wants to transfer an NFT to a smart contract for performing a service. The traditional approach would be to use an approval management system, where the receiving contract is granted the ability to transfer the NFT to themselves after completion. You'll learn more about the approval management system in the ",(0,o.jsx)(t.a,{href:"/tutorials/nfts/approvals",children:"approvals section"})," of the tutorial series."]}),"\n",(0,o.jsx)(t.p,{children:"This allowance workflow takes multiple transactions. If we introduce a \u201ctransfer and call\u201d workflow baked into a single transaction, the process can be greatly improved."}),"\n",(0,o.jsxs)(t.p,{children:["For this reason, we have a function ",(0,o.jsx)(t.code,{children:"nft_transfer_call"})," which will transfer an NFT to a receiver and also call a method on the receiver's contract all in the same transaction."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near-examples/nft-tutorial/blob/4.core/nft-contract/src/nft_core.rs#L84-L127\n"})}),"\n",(0,o.jsxs)(t.p,{children:["The function will first assert that the caller attached exactly 1 yocto for security purposes. It will then transfer the NFT using ",(0,o.jsx)(t.code,{children:"internal_transfer"})," and start the cross contract call. It will call the method ",(0,o.jsx)(t.code,{children:"nft_on_transfer"})," on the ",(0,o.jsx)(t.code,{children:"receiver_id"}),"'s contract which returns a promise. After the promise finishes executing, the function ",(0,o.jsx)(t.code,{children:"nft_resolve_transfer"})," is called. This is a very common workflow when dealing with cross contract calls. You first initiate the call and wait for it to finish executing. You then invoke a function that resolves the result of the promise and act accordingly."]}),"\n",(0,o.jsxs)(t.p,{children:["In our case, when calling ",(0,o.jsx)(t.code,{children:"nft_on_transfer"}),", that function will return whether or not you should return the NFT to it's original owner in the form of a boolean. This is logic will be executed in the ",(0,o.jsx)(t.code,{children:"nft_resolve_transfer"})," function."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near-examples/nft-tutorial/blob/4.core/nft-contract/src/nft_core.rs#L149-L201\n"})}),"\n",(0,o.jsxs)(t.p,{children:["If ",(0,o.jsx)(t.code,{children:"nft_on_transfer"})," returned true, you should send the token back to it's original owner. On the contrary, if false was returned, no extra logic is needed. As for the return value of ",(0,o.jsx)(t.code,{children:"nft_resolve_transfer"}),", the standard dictates that the function should return a boolean indicating whether or not the receiver successfully received the token or not."]}),"\n",(0,o.jsxs)(t.p,{children:["This means that if ",(0,o.jsx)(t.code,{children:"nft_on_transfer"})," returned true, you should return false. This is because if the token is being returned its original owner, the ",(0,o.jsx)(t.code,{children:"receiver_id"})," didn't successfully receive the token in the end. On the contrary, if ",(0,o.jsx)(t.code,{children:"nft_on_transfer"})," returned false, you should return true since we don't need to return the token and thus the ",(0,o.jsx)(t.code,{children:"receiver_id"})," successfully owns the token."]}),"\n",(0,o.jsx)(t.p,{children:"With that finished, you've now successfully added the necessary logic to allow users to transfer NFTs. It's now time to deploy and do some testing."}),"\n",(0,o.jsx)(t.h2,{id:"redeploying-contract",children:"Redeploying the contract"}),"\n",(0,o.jsx)(t.p,{children:"Using the build script, build and deploy the contract as you did in the previous tutorials:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"yarn build && near deploy --wasmFile out/main.wasm --accountId $NFT_CONTRACT_ID\n"})}),"\n",(0,o.jsxs)(t.p,{children:["This should output a warning saying that the account has a deployed contract and will ask if you'd like to proceed. Simply type ",(0,o.jsx)(t.code,{children:"y"})," and hit enter."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"This account already has a deployed contract [ AKJK7sCysrWrFZ976YVBnm6yzmJuKLzdAyssfzK9yLsa ]. Do you want to proceed? (y/n)\n"})}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsxs)(t.p,{children:["If you haven't completed the previous tutorials and are just following along with this one, simply create an account and login with your CLI using ",(0,o.jsx)(t.code,{children:"near login"}),". You can then export an environment variable ",(0,o.jsx)(t.code,{children:"export NFT_CONTRACT_ID=YOUR_ACCOUNT_ID_HERE"}),"."]})}),"\n",(0,o.jsx)(t.h2,{id:"testing-changes",children:"Testing the new changes"}),"\n",(0,o.jsxs)(t.p,{children:["Now that you've deployed a patch fix to the contract, it's time to move onto testing. Using the previous NFT contract where you had minted a token to yourself, you can test the ",(0,o.jsx)(t.code,{children:"nft_transfer"})," method. If you transfer the NFT, it should be removed from your account's collectibles displayed in the wallet. In addition, if you query any of the enumeration functions, it should show that you are no longer the owner."]}),"\n",(0,o.jsxs)(t.p,{children:["Let's test this out by transferring an NFT to the account ",(0,o.jsx)(t.code,{children:"benjiman.testnet"})," and seeing if the NFT is no longer owned by you."]}),"\n",(0,o.jsx)(t.h3,{id:"testing-the-transfer-function",children:"Testing the transfer function"}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsxs)(t.p,{children:["This means that the NFT won't be recoverable unless the account ",(0,o.jsx)(t.code,{children:"benjiman.testnet"})," transfers it back to you. If you don't want your NFT lost, make a new account and transfer the token to that account instead."]})}),"\n",(0,o.jsxs)(t.p,{children:["If you run the following command, it will transfer the token ",(0,o.jsx)(t.code,{children:'"token-1"'})," to the account ",(0,o.jsx)(t.code,{children:"benjiman.testnet"})," with the memo ",(0,o.jsx)(t.code,{children:'"Go Team :)"'}),". Take note that you're also attaching exactly 1 yoctoNEAR by using the ",(0,o.jsx)(t.code,{children:"--depositYocto"})," flag."]}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsxs)(t.p,{children:["If you used a different token ID in the previous tutorials, replace ",(0,o.jsx)(t.code,{children:"token-1"})," with your token ID."]})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:'near call $NFT_CONTRACT_ID nft_transfer \'{"receiver_id": "benjiman.testnet", "token_id": "token-1", "memo": "Go Team :)"}\' --accountId $NFT_CONTRACT_ID --depositYocto 1\n'})}),"\n",(0,o.jsxs)(t.p,{children:["If you now query for all the tokens owned by your account, that token should be missing. Similarly, if you query for the list of tokens owned by ",(0,o.jsx)(t.code,{children:"benjiman.testnet"}),", that account should now own your NFT."]}),"\n",(0,o.jsx)(t.h3,{id:"testing-the-transfer-call-function",children:"Testing the transfer call function"}),"\n",(0,o.jsxs)(t.p,{children:["Now that you've tested the ",(0,o.jsx)(t.code,{children:"nft_transfer"})," function, it's time to test the ",(0,o.jsx)(t.code,{children:"nft_transfer_call"})," function. If you try to transfer an NFT to a receiver that does ",(0,o.jsx)(t.strong,{children:"not"})," implement the ",(0,o.jsx)(t.code,{children:"nft_on_transfer"})," function, the contract will panic and the NFT will ",(0,o.jsx)(t.strong,{children:"not"})," be transferred. Let's test this functionality below."]}),"\n",(0,o.jsx)(t.p,{children:"First mint a new NFT that will be used to test the transfer call functionality."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:'near call $NFT_CONTRACT_ID nft_mint \'{"token_id": "token-2", "metadata": {"title": "NFT Tutorial Token", "description": "Testing the transfer call function", "media": "https://bafybeiftczwrtyr3k7a2k4vutd3amkwsmaqyhrdzlhvpt33dyjivufqusq.ipfs.dweb.link/goteam-gif.gif"}, "receiver_id": "\'$NFT_CONTRACT_ID\'"}\' --accountId $NFT_CONTRACT_ID --amount 0.1\n'})}),"\n",(0,o.jsxs)(t.p,{children:["Now that you've minted the token, you can try to transfer the NFT to the account ",(0,o.jsx)(t.code,{children:"no-contract.testnet"})," which as the name suggests, doesn't have a contract. This means that the receiver doesn't implement the ",(0,o.jsx)(t.code,{children:"nft_on_transfer"})," function and the NFT should remain yours after the transaction is complete."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:'near call $NFT_CONTRACT_ID nft_transfer_call \'{"receiver_id": "no-contract.testnet", "token_id": "token-2", "msg": "foo"}\' --accountId $NFT_CONTRACT_ID --depositYocto 1 --gas 200000000000000\n'})}),"\n",(0,o.jsxs)(t.p,{children:["If you query for your tokens, you should still have ",(0,o.jsx)(t.code,{children:"token-2"})," and at this point, you're finished!"]}),"\n",(0,o.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,o.jsxs)(t.p,{children:["In this tutorial, you learned how to expand an NFT contract past the minting functionality and you added ways for users to transfer NFTs. You ",(0,o.jsx)(t.a,{href:"#introduction",children:"broke down"})," the problem into smaller, more digestible subtasks and took that information and implemented both the ",(0,o.jsx)(t.a,{href:"#transfer-function",children:"NFT transfer"})," and ",(0,o.jsx)(t.a,{href:"#transfer-call-function",children:"NFT transfer call"})," functions. In addition, you deployed another ",(0,o.jsx)(t.a,{href:"#redeploying-contract",children:"patch fix"})," to your smart contract and ",(0,o.jsx)(t.a,{href:"#testing-changes",children:"tested"})," the transfer functionality."]}),"\n",(0,o.jsxs)(t.p,{children:["In the ",(0,o.jsx)(t.a,{href:"/tutorials/nfts/approvals",children:"next tutorial"}),", you'll learn about the approval management system and how you can approve others to transfer tokens on your behalf."]}),"\n",(0,o.jsxs)(t.admonition,{title:"Versioning for this article",type:"note",children:[(0,o.jsx)(t.p,{children:"At the time of this writing, this example works with the following versions:"}),(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["near-cli: ",(0,o.jsx)(t.code,{children:"3.0.0"})]}),"\n",(0,o.jsxs)(t.li,{children:["NFT standard: ",(0,o.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Core",children:"NEP171"}),", version ",(0,o.jsx)(t.code,{children:"1.0.0"})]}),"\n",(0,o.jsxs)(t.li,{children:["Enumeration standard: ",(0,o.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Enumeration",children:"NEP181"}),", version ",(0,o.jsx)(t.code,{children:"1.0.0"})]}),"\n"]})]})]})}function d(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>i});var o=n(67294);const r={},s=o.createContext(r);function i(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);