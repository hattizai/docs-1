"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3894],{30984:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=n(85893),s=n(11151);const o={id:"registering-accounts",title:"Registering Accounts",sidebar_label:"Registering Accounts"},r=void 0,i={id:"tutorials/fts/registering-accounts",title:"Registering Accounts",description:"In the previous tutorial, you looked at how to mint an initial circulating supply of tokens and how you could log events as per the events standard. You then deployed the contract and saw the FTs in your wallet balance. In this tutorial, you'll learn about the storage management standard and how you can register accounts in your FT contract in order to prevent a malicious party from draining your contract of all its funds.",source:"@site/../docs/3.tutorials/fts/4.storage.md",sourceDirName:"3.tutorials/fts",slug:"/tutorials/fts/registering-accounts",permalink:"/ko/tutorials/fts/registering-accounts",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/fts/4.storage.md",tags:[],version:"current",lastUpdatedBy:"BenKurrek",lastUpdatedAt:1665409970,formattedLastUpdatedAt:"2022\ub144 10\uc6d4 10\uc77c",sidebarPosition:4,frontMatter:{id:"registering-accounts",title:"Registering Accounts",sidebar_label:"Registering Accounts"},sidebar:"contracts",previous:{title:"Circulating Supply",permalink:"/ko/tutorials/fts/circulating-supply"},next:{title:"Transferring FTs",permalink:"/ko/tutorials/fts/transfers"}},c={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Storage Management Standard",id:"storage-management-standard",level:3},{value:"Modifications to the Contract",id:"modifications-to-the-contract",level:2},{value:"Implementing Storage Standard",id:"implementing-storage-standard",level:3},{value:"Deploying the contract",id:"redeploying-contract",level:2},{value:"Creating a sub-account",id:"creating-a-sub-account",level:3},{value:"Initialization",id:"initialization",level:3},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["In the previous tutorial, you looked at how to mint an initial circulating supply of tokens and how you could log events as per the ",(0,a.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/FungibleToken/Event",children:"events standard"}),". You then deployed the contract and saw the FTs in your wallet balance. In this tutorial, you'll learn about the ",(0,a.jsx)(t.a,{href:"https://nomicon.io/Standards/StorageManagement",children:"storage management"})," standard and how you can register accounts in your FT contract in order to prevent a malicious party from draining your contract of all its funds."]}),"\n",(0,a.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,a.jsxs)(t.p,{children:["Whenever a new person receives any fungible tokens, they're added to the ",(0,a.jsx)(t.code,{children:"accounts"})," lookup map on the contract. By doing this, you're adding bytes to the contract. If you made it so any user could receive FTs for free, that system could easily be abused. Users could essentially \"drain\" the contract of all it's funds by sending small amounts of FTs to many accounts. For this reason, you'll want to charge users for the information they're storing and the bytes they're using on the contract. This way of charging users, however, should be standardized so it works across all contracts."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsxs)(t.em,{children:["Enter the ",(0,a.jsx)(t.a,{href:"https://nomicon.io/Standards/StorageManagement",children:"storage management"})," standard"]})}),"\n",(0,a.jsx)("img",{width:"65%",src:"/docs/assets/fts/storage-standard-meme.png"}),"\n",(0,a.jsx)(t.h3,{id:"storage-management-standard",children:"Storage Management Standard"}),"\n",(0,a.jsx)(t.p,{children:"The storage management standard is a set of rules that govern how a contract should charge users for storage. It outlines functions and behaviors such that all contracts implementing the standard are interoperable with each other. The 3 functions you'll need to implement are:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.code,{children:"storage_deposit"})})," - Allows a user to deposit some amount of storage to the contract. If the user over deposits, they're refunded for the excess $NEAR."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.code,{children:"storage_balance_of"})})," - Query for the storage paid by a given user"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.code,{children:"storage_balance_bounds"})})," - Query for the minimum and maximum amount of storage needed to interact with a given contract."]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"With these functions outlined, you could make a reasonable assumption that the flow would be:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"If a user doesn't exist on the contract, they need to deposit some storage to cover the bytes they use."}),"\n",(0,a.jsxs)(t.li,{children:["Once the user deposits $NEAR via the ",(0,a.jsx)(t.code,{children:"storage_deposit"})," function, they're free to interact with the contract."]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"You might be asking yourself what the deposit amount should be. There are two ways you can go about getting this information:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Dynamically calculate the bytes every individual user would take up in the ",(0,a.jsx)(t.code,{children:"storage_deposit"})," function by inserting them into ",(0,a.jsx)(t.code,{children:"accounts"})," map, measuring the bytes, and then removing them from the map after."]}),"\n",(0,a.jsx)(t.li,{children:"Calculate the bytes for inserting a largest possible account ID once upon initializing the contract and simply charge every user the same amount."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"For the purpose of simplicity, we'll assume the second method."}),"\n",(0,a.jsx)(t.h2,{id:"modifications-to-the-contract",children:"Modifications to the Contract"}),"\n",(0,a.jsxs)(t.p,{children:['This "bytes for longest account ID" should be stored in the contract\'s state such that we can pull the value during the ',(0,a.jsx)(t.code,{children:"storage_deposit"})," function and ensure the user attaches enough $NEAR. Open the ",(0,a.jsx)(t.code,{children:"src/lib.rs"})," file and add the following code to the ",(0,a.jsx)(t.code,{children:"Contract"})," struct. If you're just joining us now, you can find the skeleton code for this tutorial in the ",(0,a.jsx)(t.code,{children:"3.initial-supply"})," folder."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near-examples/ft-tutorial/blob/main/4.storage/src/lib.rs#L21-L35\n"})}),"\n",(0,a.jsxs)(t.p,{children:["You'll now need a way to calculate this amount which will be done in the initialization function. Move to the ",(0,a.jsx)(t.code,{children:"src/internal.rs"})," file and add the following private function ",(0,a.jsx)(t.code,{children:"measure_bytes_for_longest_account_id"})," which will add the longest possible account ID and remove it while measuring how many bytes the operation took. It will then set the ",(0,a.jsx)(t.code,{children:"bytes_for_longest_account_id"})," field to the result."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near-examples/ft-tutorial/blob/main/4.storage/src/internal.rs#L36-L45\n"})}),"\n",(0,a.jsxs)(t.p,{children:["You'll also want to create a function for \"registering\" an account after they've paid for storage. To do this, you can simply insert them into the ",(0,a.jsx)(t.code,{children:"accounts"}),' map with a balance of 0. This way, you know that any account currently in the map is considered "registered" and have paid for storage. Any account that attempts to receive FTs must be in the map with a balance of 0 or greater. If they aren\'t, the contract should throw.']}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near-examples/ft-tutorial/blob/main/4.storage/src/internal.rs#L29-L34\n"})}),"\n",(0,a.jsx)(t.p,{children:"Let's also create a function to panic with a custom message if the user doesn't exist yet."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near-examples/ft-tutorial/blob/main/4.storage/src/internal.rs#L5-L14\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Now when you call the ",(0,a.jsx)(t.code,{children:"internal_deposit"})," function, rather than defaulting the user's balance to ",(0,a.jsx)(t.code,{children:"0"})," if they don't exist yet via:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-rust",children:"let balance = self.accounts.get(&account_id).unwrap_or(0);\n"})}),"\n",(0,a.jsx)(t.p,{children:"You can replace it with the following:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near-examples/ft-tutorial/blob/main/4.storage/src/internal.rs#L16-L27\n"})}),"\n",(0,a.jsxs)(t.p,{children:["With this finished, your ",(0,a.jsx)(t.code,{children:"internal.rs"})," should look as follows:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-rust",children:"use near_sdk::{require};\n\nuse crate::*;\n\nimpl Contract {\n    pub(crate) fn internal_unwrap_balance_of(&self, account_id: &AccountId) -> Balance {\n      ...\n    }\n\n    pub(crate) fn internal_deposit(&mut self, account_id: &AccountId, amount: Balance) {\n      ...\n    }\n\n    pub(crate) fn internal_register_account(&mut self, account_id: &AccountId) {\n      ...\n    }\n\n    pub(crate) fn measure_bytes_for_longest_account_id(&mut self) {\n      ...\n    }\n}\n"})}),"\n",(0,a.jsxs)(t.p,{children:["There's only one problem you need to solve with this. When initializing the contract, the implementation will throw. This is because you call ",(0,a.jsx)(t.code,{children:"internal_deposit"})," and the owner doesn't have a balance yet. To fix this, let's modify the initialization function to register the owner before depositing the FTs in their account. In addition, you should measure the bytes for the registration in this function."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near-examples/ft-tutorial/blob/main/4.storage/src/lib.rs#L66-L106\n"})}),"\n",(0,a.jsx)(t.h3,{id:"implementing-storage-standard",children:"Implementing Storage Standard"}),"\n",(0,a.jsx)(t.p,{children:"With this finished, you're now ready to implement the storage management standard. If you remember, the three functions you'll be implementing, we can break each down into their core functionality and decide how to proceed."}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.code,{children:"storage_balance_bounds"})})," - Query for the minimum and maximum amount of storage needed to interact with a given contract."]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["Since you're creating a fungible token contract and the storage price won't change (unless the $NEAR cost per byte changes), the minimum and maximum storage costs should be the same. These values should be equal to the amount of bytes for the longest account ID you calculated in the ",(0,a.jsx)(t.code,{children:"measure_bytes_for_longest_account_id"})," function multiplied by the current $NEAR price per byte. Switch to the ",(0,a.jsx)(t.code,{children:"src/storage.rs"})," file to get started."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near-examples/ft-tutorial/blob/main/4.storage/src/storage.rs#L119-L129\n"})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.code,{children:"storage_balance_of"})})," - Query for the storage paid by a given user."]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["As we mentioned earlier, you can tell if somebody has paid for storage by checking if they're in the ",(0,a.jsx)(t.code,{children:"accounts"})," map. If they are, you know that they've paid the amount returned by ",(0,a.jsx)(t.code,{children:"storage_balance_bounds"}),"."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near-examples/ft-tutorial/blob/main/4.storage/src/storage.rs#L131-L138\n"})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.code,{children:"storage_deposit"})})," - Allows a user to deposit some amount of storage to the contract. If the user over deposits, they're refunded for the excess $NEAR."]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["In order to implement this logic, you first need to get the attached deposit. You'll also need to ensure that the user hasn't already paid for storage (i.e. they're in the ",(0,a.jsx)(t.code,{children:"accounts"})," map). If they are, simply refund the caller for the $NEAR they attached to the call."]}),"\n",(0,a.jsxs)(t.p,{children:["If the user isn't registered yet, you should get the storage cost by calling ",(0,a.jsx)(t.code,{children:"storage_balance_bounds"})," and make sure they've attached enough to cover that amount. Once this if finished, you can register them and refund any excess $NEAR."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near-examples/ft-tutorial/blob/main/4.storage/src/storage.rs#L78-L117\n"})}),"\n",(0,a.jsx)(t.p,{children:"With this finished, you're ready to build and deploy the contract!"}),"\n",(0,a.jsx)(t.h2,{id:"redeploying-contract",children:"Deploying the contract"}),"\n",(0,a.jsx)(t.p,{children:"Since the current contract you have is already initialized, let's create a sub-account and deploy to again."}),"\n",(0,a.jsx)(t.h3,{id:"creating-a-sub-account",children:"Creating a sub-account"}),"\n",(0,a.jsxs)(t.p,{children:["Run the following command to create a sub-account ",(0,a.jsx)(t.code,{children:"storage"})," of your main account with an initial balance of 25 NEAR which will be transferred from the original to your new account."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"near create-account storage.$FT_CONTRACT_ID --masterAccount $FT_CONTRACT_ID --initialBalance 25\n"})}),"\n",(0,a.jsx)(t.p,{children:"Next, you'll want to export an environment variable for ease of development:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"export STORAGE_FT_CONTRACT_ID=storage.$FT_CONTRACT_ID\n"})}),"\n",(0,a.jsx)(t.p,{children:"Using the build script, build the deploy the contract as you did in the previous tutorials:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"cd 1.skeleton && ./build.sh && cd .. && near deploy --wasmFile out/contract.wasm --accountId $STORAGE_FT_CONTRACT_ID\n"})}),"\n",(0,a.jsx)(t.h3,{id:"initialization",children:"Initialization"}),"\n",(0,a.jsxs)(t.p,{children:["Now that the contract is deployed, it's time to initialize it and mint the total supply. Let's once again create an initial supply of 1000 ",(0,a.jsx)(t.code,{children:"gtNEAR"}),"."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'near call $STORAGE_FT_CONTRACT_ID new_default_meta \'{"owner_id": "\'$STORAGE_FT_CONTRACT_ID\'", "total_supply": "1000000000000000000000000000"}\' --accountId $STORAGE_FT_CONTRACT_ID\n'})}),"\n",(0,a.jsx)(t.p,{children:"If you now query for the storage paid by the owner, you should see that they're registered!"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"near view $STORAGE_FT_CONTRACT_ID storage_balance_of '{\"account_id\": \"'$STORAGE_FT_CONTRACT_ID'\"}'\n"})}),"\n",(0,a.jsxs)(t.p,{children:["This should return a struct. The Total amount is roughly ",(0,a.jsx)(t.code,{children:"0.00125 $NEAR"})," to register and the user has 0 available $NEAR since it's all being used up to pay for registration."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"{ total: '1250000000000000000000', available: '0' }\n"})}),"\n",(0,a.jsx)(t.p,{children:"You can also query for the storage balance required to interact with the contract:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"near view $STORAGE_FT_CONTRACT_ID storage_balance_bounds\n"})}),"\n",(0,a.jsxs)(t.p,{children:["You'll see that it returns the same amount as the ",(0,a.jsx)(t.code,{children:"storage_balance_of"})," query above with the min equal to the max:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"{ min: '1250000000000000000000', max: '1250000000000000000000' }\n"})}),"\n",(0,a.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,a.jsxs)(t.p,{children:["Today you went through and created the logic for registering users on the contract. This logic adheres to the ",(0,a.jsx)(t.a,{href:"https://nomicon.io/Standards/StorageManagement",children:"storage management standard"})," and is customized to meet our needs when writing a FT contract. You then built, deployed, and tested those changes. In the ",(0,a.jsx)(t.a,{href:"/ko/tutorials/fts/transfers",children:"next tutorial"}),", you'll look at the basics of how to transfer FTs to other users."]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>r});var a=n(67294);const s={},o=a.createContext(s);function r(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);