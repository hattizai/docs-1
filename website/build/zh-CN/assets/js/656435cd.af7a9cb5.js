"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2634],{52313:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(85893),r=n(11151),s=n(71183);const o={id:"registering-accounts",title:"Registering Accounts",sidebar_label:"Registering Accounts"},i=void 0,l={id:"tutorials/fts/registering-accounts",title:"Registering Accounts",description:"In the previous tutorial, you looked at how to mint an initial circulating supply of tokens and how you could log events as per the events standard. You then deployed the contract and saw the FTs in your wallet balance. In this tutorial, you'll learn about the storage management standard and how you can register accounts in your FT contract in order to prevent a malicious party from draining your contract of all its funds. You then deployed the contract and saw the FTs in your wallet balance. In this tutorial, you'll learn about the storage management standard and how you can register accounts in your FT contract in order to prevent a malicious party from draining your contract of all its funds.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/3.tutorials/fts/4.storage.md",sourceDirName:"3.tutorials/fts",slug:"/tutorials/fts/registering-accounts",permalink:"/zh-CN/tutorials/fts/registering-accounts",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/fts/4.storage.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1711465748e3,sidebarPosition:4,frontMatter:{id:"registering-accounts",title:"Registering Accounts",sidebar_label:"Registering Accounts"},sidebar:"tutorials",previous:{title:"Circulating Supply",permalink:"/zh-CN/tutorials/fts/circulating-supply"},next:{title:"Transferring FTs",permalink:"/zh-CN/tutorials/fts/transfers"}},c={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Storage Management Standard",id:"storage-management-standard",level:3},{value:"Modifications to the Contract",id:"modifications-to-the-contract",level:2},{value:"Implementing Storage Standard",id:"implementing-storage-standard",level:3},{value:"Deploying the contract",id:"redeploying-contract",level:2},{value:"Creating a sub-account",id:"creating-a-sub-account",level:3},{value:"Deploying and Initialization",id:"deploying-initialization",level:3},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["In the previous tutorial, you looked at how to mint an initial circulating supply of tokens and how you could log events as per the ",(0,a.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/FungibleToken/Event",children:"events standard"}),". You then deployed the contract and saw the FTs in your wallet balance. In this tutorial, you'll learn about the ",(0,a.jsx)(t.a,{href:"https://nomicon.io/Standards/StorageManagement",children:"storage management"})," standard and how you can register accounts in your FT contract in order to prevent a malicious party from draining your contract of all its funds. You then deployed the contract and saw the FTs in your wallet balance. In this tutorial, you'll learn about the ",(0,a.jsx)(t.a,{href:"https://nomicon.io/Standards/StorageManagement",children:"storage management"})," standard and how you can register accounts in your FT contract in order to prevent a malicious party from draining your contract of all its funds."]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,a.jsxs)(t.p,{children:["Whenever a new person receives any fungible tokens, they're added to the ",(0,a.jsx)(t.code,{children:"accounts"})," lookup map on the contract. By doing this, you're adding bytes to the contract. If you made it so any user could receive FTs for free, that system could easily be abused. Users could essentially \"drain\" the contract of all it's funds by sending small amounts of FTs to many accounts. For this reason, you'll want to charge users for the information they're storing and the bytes they're using on the contract. This way of charging users, however, should be standardized so it works across all contracts."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsxs)(t.em,{children:["Enter the ",(0,a.jsx)(t.a,{href:"https://nomicon.io/Standards/StorageManagement",children:"storage management"})," standard"]})}),"\n",(0,a.jsx)("img",{width:"65%",src:"/docs/assets/fts/storage-standard-meme.png"}),"\n",(0,a.jsx)("hr",{className:"subsection"}),"\n",(0,a.jsx)(t.h3,{id:"storage-management-standard",children:"Storage Management Standard"}),"\n",(0,a.jsx)(t.p,{children:"The storage management standard is a set of rules that govern how a contract should charge users for storage. It outlines functions and behaviors such that all contracts implementing the standard are interoperable with each other. The 3 functions you'll need to implement are:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.code,{children:"storage_deposit"})})," - Allows a user to deposit some amount of storage to the contract. If the user over deposits, they're refunded for the excess $NEAR. If the user over deposits, they're refunded for the excess $NEAR."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.code,{children:"storage_balance_of"})})," - Query for the storage paid by a given user"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.code,{children:"storage_balance_bounds"})})," - Query for the minimum and maximum amount of storage needed to interact with a given contract."]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"With these functions outlined, you could make a reasonable assumption that the flow would be:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"If a user doesn't exist on the contract, they need to deposit some storage to cover the bytes they use."}),"\n",(0,a.jsxs)(t.li,{children:["Once the user deposits $NEAR via the ",(0,a.jsx)(t.code,{children:"storage_deposit"})," function, they're free to interact with the contract."]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"You might be asking yourself what the deposit amount should be. There are two ways you can go about getting this information:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Dynamically calculate the bytes every individual user would take up in the ",(0,a.jsx)(t.code,{children:"storage_deposit"})," function by inserting them into ",(0,a.jsx)(t.code,{children:"accounts"})," map, measuring the bytes, and then removing them from the map after."]}),"\n",(0,a.jsx)(t.li,{children:"Calculate the bytes for inserting a largest possible account ID once upon initializing the contract and simply charge every user the same amount."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"For the purpose of simplicity, we'll assume the second method."}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"modifications-to-the-contract",children:"Modifications to the Contract"}),"\n",(0,a.jsxs)(t.p,{children:['This "bytes for longest account ID" should be stored in the contract\'s state such that we can pull the value during the ',(0,a.jsx)(t.code,{children:"storage_deposit"})," function and ensure the user attaches enough $NEAR. Open the ",(0,a.jsx)(t.code,{children:"src/lib.rs"})," file and add the following code to the ",(0,a.jsx)(t.code,{children:"Contract"})," struct. If you're just joining us now, you can find the skeleton code for this tutorial in the ",(0,a.jsx)(t.code,{children:"3.initial-supply"})," folder."]}),"\n",(0,a.jsx)(s.Ey,{language:"rust",start:"20",end:"35",url:"https://github.com/near-examples/ft-tutorial/blob/main/4.storage/src/lib.rs"}),"\n",(0,a.jsxs)(t.p,{children:["You'll now need a way to calculate this amount which will be done in the initialization function. Move to the ",(0,a.jsx)(t.code,{children:"src/internal.rs"})," file and add the following private function ",(0,a.jsx)(t.code,{children:"measure_bytes_for_longest_account_id"})," which will add the longest possible account ID and remove it while measuring how many bytes the operation took. It will then set the ",(0,a.jsx)(t.code,{children:"bytes_for_longest_account_id"})," field to the result."]}),"\n",(0,a.jsx)(s.Ey,{language:"rust",start:"38",end:"46",url:"https://github.com/near-examples/ft-tutorial/blob/main/4.storage/src/internal.rs"}),"\n",(0,a.jsxs)(t.p,{children:["You'll also want to create a function for \"registering\" an account after they've paid for storage. To do this, you can simply insert them into the ",(0,a.jsx)(t.code,{children:"accounts"}),' map with a balance of 0. This way, you know that any account currently in the map is considered "registered" and have paid for storage. Any account that attempts to receive FTs must be in the map with a balance of 0 or greater. If they aren\'t, the contract should throw.']}),"\n",(0,a.jsx)(s.Ey,{language:"rust",start:"31",end:"36",url:"https://github.com/near-examples/ft-tutorial/blob/main/4.storage/src/internal.rs"}),"\n",(0,a.jsx)(t.p,{children:"Let's also create a function to panic with a custom message if the user doesn't exist yet."}),"\n",(0,a.jsx)(s.Ey,{language:"rust",start:"8",end:"16",url:"https://github.com/near-examples/ft-tutorial/blob/main/4.storage/src/internal.rs"}),"\n",(0,a.jsxs)(t.p,{children:["Now when you call the ",(0,a.jsx)(t.code,{children:"internal_deposit"})," function, rather than defaulting the user's balance to ",(0,a.jsx)(t.code,{children:"0"})," if they don't exist yet via:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-rust",children:"let balance = self.accounts.get(&account_id).unwrap_or(0);\n"})}),"\n",(0,a.jsx)(t.p,{children:"You can replace it with the following:"}),"\n",(0,a.jsx)(s.Ey,{language:"rust",start:"18",end:"29",url:"https://github.com/near-examples/ft-tutorial/blob/main/4.storage/src/internal.rs#L16-L27"}),"\n",(0,a.jsxs)(t.p,{children:["With this finished, your ",(0,a.jsx)(t.code,{children:"internal.rs"})," should look as follows:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-rust",children:"use near_sdk::{require};\n\nuse crate::*;\n\nimpl Contract {\n    pub(crate) fn internal_unwrap_balance_of(&self, account_id: &AccountId) -> Balance {\n      ...\n    }\n\n    pub(crate) fn internal_deposit(&mut self, account_id: &AccountId, amount: Balance) {\n      ...\n    }\n\n    pub(crate) fn internal_register_account(&mut self, account_id: &AccountId) {\n      ...\n    }\n\n    pub(crate) fn measure_bytes_for_longest_account_id(&mut self) {\n      ...\n    }\n}\n    }\n\n    pub(crate) fn internal_deposit(&mut self, account_id: &AccountId, amount: Balance) {\n      ...\n    }\n\n    pub(crate) fn internal_register_account(&mut self, account_id: &AccountId) {\n      ...\n    }\n\n    pub(crate) fn measure_bytes_for_longest_account_id(&mut self) {\n      ...\n    }\n}\n"})}),"\n",(0,a.jsxs)(t.p,{children:["There's only one problem you need to solve with this. When initializing the contract, the implementation will throw. This is because you call ",(0,a.jsx)(t.code,{children:"internal_deposit"})," and the owner doesn't have a balance yet. To fix this, let's modify the initialization function to register the owner before depositing the FTs in their account. In addition, you should measure the bytes for the registration in this function."]}),"\n",(0,a.jsx)(s.Ey,{language:"rust",start:"67",end:"106",url:"https://github.com/near-examples/ft-tutorial/blob/main/4.storage/src/lib.rs"}),"\n",(0,a.jsx)("hr",{className:"subsection"}),"\n",(0,a.jsx)(t.h3,{id:"implementing-storage-standard",children:"Implementing Storage Standard"}),"\n",(0,a.jsx)(t.p,{children:"With this finished, you're now ready to implement the storage management standard. If you remember, the three functions you'll be implementing, we can break each down into their core functionality and decide how to proceed."}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.code,{children:"storage_balance_bounds"})})," - Query for the minimum and maximum amount of storage needed to interact with a given contract."]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["Since you're creating a fungible token contract and the storage price won't change (unless the $NEAR cost per byte changes), the minimum and maximum storage costs should be the same. These values should be equal to the amount of bytes for the longest account ID you calculated in the ",(0,a.jsx)(t.code,{children:"measure_bytes_for_longest_account_id"})," function multiplied by the current $NEAR price per byte. Switch to the ",(0,a.jsx)(t.code,{children:"src/storage.rs"})," file to get started."]}),"\n",(0,a.jsx)(s.Ey,{language:"rust",start:"120",end:"130",url:"https://github.com/near-examples/ft-tutorial/blob/main/4.storage/src/storage.rs"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.code,{children:"storage_balance_of"})})," - Query for the storage paid by a given user."]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["As we mentioned earlier, you can tell if somebody has paid for storage by checking if they're in the ",(0,a.jsx)(t.code,{children:"accounts"})," map. If they are, you know that they've paid the amount returned by ",(0,a.jsx)(t.code,{children:"storage_balance_bounds"}),"."]}),"\n",(0,a.jsx)(s.Ey,{language:"rust",start:"132",end:"139",url:"https://github.com/near-examples/ft-tutorial/blob/main/4.storage/src/storage.rs"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.code,{children:"storage_deposit"})})," - Allows a user to deposit some amount of storage to the contract. If the user over deposits, they're refunded for the excess $NEAR. If the user over deposits, they're refunded for the excess $NEAR."]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["In order to implement this logic, you first need to get the attached deposit. You'll also need to ensure that the user hasn't already paid for storage (i.e. they're in the ",(0,a.jsx)(t.code,{children:"accounts"})," map). If they are, simply refund the caller for the $NEAR they attached to the call."]}),"\n",(0,a.jsxs)(t.p,{children:["If the user isn't registered yet, you should get the storage cost by calling ",(0,a.jsx)(t.code,{children:"storage_balance_bounds"})," and make sure they've attached enough to cover that amount. Once this if finished, you can register them and refund any excess $NEAR."]}),"\n",(0,a.jsx)(s.Ey,{language:"rust",start:"81",end:"118",url:"https://github.com/near-examples/ft-tutorial/blob/main/4.storage/src/storage.rs"}),"\n",(0,a.jsx)(t.p,{children:"With this finished, you're ready to build and deploy the contract!"}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"redeploying-contract",children:"Deploying the contract"}),"\n",(0,a.jsx)(t.p,{children:"Since the current contract you have is already initialized, let's create a sub-account and deploy to again."}),"\n",(0,a.jsx)(t.h3,{id:"creating-a-sub-account",children:"Creating a sub-account"}),"\n",(0,a.jsxs)(t.p,{children:["Run the following command to create a sub-account ",(0,a.jsx)(t.code,{children:"storage"})," of your main account with an initial balance of 3 NEAR which will be transferred from the original to your new account."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"near create-account storage.$FT_CONTRACT_ID --masterAccount $FT_CONTRACT_ID --initialBalance 3\n"})}),"\n",(0,a.jsx)(t.p,{children:"Next, you'll want to export an environment variable for ease of development:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"export STORAGE_FT_CONTRACT_ID=storage.$FT_CONTRACT_ID\n"})}),"\n",(0,a.jsx)(t.p,{children:"Build the contract as you did in the previous tutorials:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"cd 3.initial-supply && cargo near build\n"})}),"\n",(0,a.jsx)("hr",{className:"subsection"}),"\n",(0,a.jsx)(t.h3,{id:"deploying-initialization",children:"Deploying and Initialization"}),"\n",(0,a.jsxs)(t.p,{children:["It's time to deploy the contract, initialize it and mint the total supply. Now that the contract is deployed, it's time to initialize it and mint the total supply. Let's once again create an initial supply of 1000 ",(0,a.jsx)(t.code,{children:"gtNEAR"}),"."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"cargo near deploy $STORAGE_FT_CONTRACT_ID with-init-call new_default_meta json-args '{\"owner_id\": \"'$STORAGE_FT_CONTRACT_ID'\", \"total_supply\": \"1000000000000000000000000000\"}' prepaid-gas '100.0 Tgas' attached-deposit '0 NEAR' network-config testnet sign-with-keychain send\n"})}),"\n",(0,a.jsx)(t.p,{children:"If you now query for the storage paid by the owner, you should see that they're registered!"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"near view $STORAGE_FT_CONTRACT_ID storage_balance_of '{\"account_id\": \"'$STORAGE_FT_CONTRACT_ID'\"}'\n"})}),"\n",(0,a.jsxs)(t.p,{children:["This should return a struct. This should return a struct. The Total amount is roughly ",(0,a.jsx)(t.code,{children:"0.00125 $NEAR"})," to register and the user has 0 available $NEAR since it's all being used up to pay for registration."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"{ total: '1250000000000000000000', available: '0' }\n"})}),"\n",(0,a.jsx)(t.p,{children:"You can also query for the storage balance required to interact with the contract:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"near view $STORAGE_FT_CONTRACT_ID storage_balance_bounds\n"})}),"\n",(0,a.jsxs)(t.p,{children:["You'll see that it returns the same amount as the ",(0,a.jsx)(t.code,{children:"storage_balance_of"})," query above with the min equal to the max:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"{ min: '1250000000000000000000', max: '1250000000000000000000' }\n"})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,a.jsxs)(t.p,{children:["Today you went through and created the logic for registering users on the contract. Today you went through and created the logic for registering users on the contract. This logic adheres to the ",(0,a.jsx)(t.a,{href:"https://nomicon.io/Standards/StorageManagement",children:"storage management standard"})," and is customized to meet our needs when writing a FT contract. You then built, deployed, and tested those changes. In the ",(0,a.jsx)(t.a,{href:"/zh-CN/tutorials/fts/transfers",children:"next tutorial"}),", you'll look at the basics of how to transfer FTs to other users. You then built, deployed, and tested those changes. In the ",(0,a.jsx)(t.a,{href:"/zh-CN/tutorials/fts/transfers",children:"next tutorial"}),", you'll look at the basics of how to transfer FTs to other users."]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>o});n(67294);var a=n(36905);const r={tabItem:"tabItem_Ymn6"};var s=n(85893);function o(e){var t=e.children,n=e.hidden,o=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,o),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(67294),r=n(36905),s=n(12466),o=n(16550),i=n(20469),l=n(91980),c=n(67392),u=n(50012);function d(e){var t,n;return null!=(t=null==(n=a.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,a.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function h(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:function(e){return d(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function g(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,s=(0,o.k6)(),i=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:r});return[(0,l._X)(i),(0,a.useCallback)((function(e){if(i){var t=new URLSearchParams(s.location.search);t.set(i,e),s.replace(Object.assign({},s.location,{search:t.toString()}))}}),[i,s])]}function p(e){var t,n,r,s,o=e.defaultValue,l=e.queryString,c=void 0!==l&&l,d=e.groupId,p=h(e),m=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!g({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:o,tabValues:p})})),b=m[0],y=m[1],x=f({queryString:c,groupId:d}),j=x[0],v=x[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),n=(0,u.Nk)(t),r=n[0],s=n[1],[r,(0,a.useCallback)((function(e){t&&s.set(e)}),[t,s])]),_=w[0],T=w[1],I=function(){var e=null!=j?j:_;return g({value:e,tabValues:p})?e:null}();return(0,i.Z)((function(){I&&y(I)}),[I]),{selectedValue:b,selectValue:(0,a.useCallback)((function(e){if(!g({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);y(e),v(e),T(e)}),[v,T,p]),tabValues:p}}var m=n(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=n(85893);function x(e){var t=e.className,n=e.block,a=e.selectedValue,o=e.selectValue,i=e.tabValues,l=[],c=(0,s.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var t=e.currentTarget,n=l.indexOf(t),r=i[n].value;r!==a&&(c(t),o(r))},d=function(e){var t,n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var a,r=l.indexOf(e.currentTarget)+1;n=null!=(a=l[r])?a:l[0];break;case"ArrowLeft":var s,o=l.indexOf(e.currentTarget)-1;n=null!=(s=l[o])?s:l[l.length-1]}null==(t=n)||t.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t),children:i.map((function(e){var t=e.value,n=e.label,s=e.attributes;return(0,y.jsx)("li",Object.assign({role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:function(e){return l.push(e)},onKeyDown:d,onClick:u},s,{className:(0,r.Z)("tabs__item",b.tabItem,null==s?void 0:s.className,{"tabs__item--active":a===t}),children:null!=n?n:t}),t)}))})}function j(e){var t=e.lazy,n=e.children,r=e.selectedValue,s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var o=s.find((function(e){return e.props.value===r}));return o?(0,a.cloneElement)(o,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:s.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})}))})}function v(e){var t=p(e);return(0,y.jsxs)("div",{className:(0,r.Z)("tabs-container",b.tabList),children:[(0,y.jsx)(x,Object.assign({},t,e)),(0,y.jsx)(j,Object.assign({},t,e))]})}function w(e){var t=(0,m.Z)();return(0,y.jsx)(v,Object.assign({},e,{children:d(e.children)}),String(t))}},71183:(e,t,n)=>{n.d(t,{O2:()=>f,Ey:()=>m,SQ:()=>p});var a=n(67294),r=n(74866),s=n(85162),o=n(74165),i=n(15861),l=n(1841),c=n.n(l),u=n(85893);function d(){return(d=(0,i.Z)((0,o.Z)().mark((function e(t,n,a){var r,s,i,l;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((s=localStorage.getItem(t+"-until"))&&s>Date.now())){e.next=5;break}r=localStorage.getItem(t),e.next=18;break;case 5:return e.prev=5,e.next=8,fetch(t);case 8:return e.next=10,e.sent.text();case 10:r=e.sent,localStorage.setItem(t,r),localStorage.setItem(t+"-until",Date.now()+6e4),e.next=18;break;case 15:return e.prev=15,e.t0=e.catch(5),e.abrupt("return","Error fetching code, please try reloading");case 18:return i=r.split("\n"),n=n?Number(n)-1:0,a=a?Number(a):i.length,i=i.slice(n,a),l=i.reduce((function(e,t){if(0===t.length)return e;var n=t.match(/^\s+/);return n?Math.min(e,n[0].length):0}),1/0),e.abrupt("return",i.map((function(e){return e.slice(l)})).join("\n"));case 24:case"end":return e.stop()}}),e,null,[[5,15]])})))).apply(this,arguments)}const h=function(e){var t=e.url,n=e.start,r=e.end,s=e.language,o=e.fname,i=e.metastring,l=(0,a.useState)("Loading..."),h=l[0],g=l[1];return(0,a.useEffect)((function(){var e=function(e){var t=e.slice(e.indexOf("https")).split("#"),n=t[0],a=(t[1],new URL(n).pathname.split("/").slice(1)),r=a[0],s=a[1];return a[2],"https://raw.githubusercontent.com/"+r+"/"+s+"/"+a[3]+"/"+a.slice(4).join("/")}(t),a=function(e,t,n){return d.apply(this,arguments)}(e,n,r);a.then((function(e){return g(e)}))})),(0,u.jsxs)("div",{fname:o,children:[(0,u.jsx)(c(),{language:s,metastring:i+" showLineNumbers",children:h}),(0,u.jsx)("div",{style:{fontSize:"0.9em",fontWeight:600,color:"rgb(14, 117, 221)",textAlign:"center",paddingBottom:"13px",textDecoration:"underline"},children:(0,u.jsx)("a",{href:t,target:"_blank",rel:"noreferrer noopener",children:"See full example on GitHub"})})]})};var g={rust:"\ud83e\udd80 Rust",js:"\ud83c\udf10 Javascript",ts:"\ud83c\udf10 Typescript"};function f(e){var t=e.children;return Array.isArray(t)||(t=[t]),(0,u.jsx)(r.Z,{className:"language-tabs",groupId:"code-tabs",children:t.map((function(e,t){return(0,u.jsx)(s.Z,{value:e.props.value,label:g[e.props.value],children:e})}))})}function p(e){var t=e.children,n=e.language;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var n=e.props,a=(n.children,n.url),r=n.start,s=n.end,o=n.fname;if(e.type===m)return m({url:a,start:r,end:s,language:t,fname:o});return e}(e,n)})),1==t.length?(0,u.jsx)(s.Z,{value:0,label:t[0].props.fname,children:t[0]}):(0,u.jsx)(r.Z,{className:"file-tabs",children:t.map((function(e,t){return(0,u.jsx)(s.Z,{value:t,label:e.props.fname,children:e})}))})}function m(e){var t=e.url,n=e.start,a=e.end,r=e.language,s=e.fname,o=e.metastring;return h({url:t,start:n,end:a,language:r,fname:s,metastring:o})}}}]);