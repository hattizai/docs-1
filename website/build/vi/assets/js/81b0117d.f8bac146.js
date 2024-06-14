"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[274],{42509:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=t(85893),i=t(11151),r=t(71183);const o={id:"defining-a-token",title:"Defining a Fungible Token",sidebar_label:"Defining Your Token"},s=void 0,l={id:"tutorials/fts/defining-a-token",title:"Defining a Fungible Token",description:"This is the first of many tutorials in a series where you'll be creating a complete FT smart contract from scratch that conforms with all the NEAR FT standards. Today you'll learn what a Fungible Token is and how you can define one on the NEAR blockchain. You will be modifying a bare-bones skeleton smart contract by filling in the necessary code snippets needed to add this functionality.",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/3.tutorials/fts/2-define-a-token.md",sourceDirName:"3.tutorials/fts",slug:"/tutorials/fts/defining-a-token",permalink:"/vi/tutorials/fts/defining-a-token",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/fts/2-define-a-token.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1711465748e3,sidebarPosition:2,frontMatter:{id:"defining-a-token",title:"Defining a Fungible Token",sidebar_label:"Defining Your Token"},sidebar:"tutorials",previous:{title:"Ki\u1ebfn tr\xfac c\u1ee7a Contract",permalink:"/vi/tutorials/fts/skeleton"},next:{title:"Circulating Supply",permalink:"/vi/tutorials/fts/circulating-supply"}},c={},u=[{value:"Gi\u1edbi thi\u1ec7u",id:"gi\u1edbi-thi\u1ec7u",level:2},{value:"C\xe1c s\u1eeda \u0111\u1ed5i \u0111\u1ed1i v\u1edbi skeleton contract",id:"modifications",level:2},{value:"Defining a fungible token",id:"defining-a-fungible-token",level:3},{value:"C\xe1c Initialization Function",id:"c\xe1c-initialization-function",level:4},{value:"T\u01b0\u01a1ng t\xe1c v\u1edbi on-chain contract",id:"t\u01b0\u01a1ng-t\xe1c-v\u1edbi-on-chain-contract",level:2},{value:"Deploying and initializing the contract",id:"deploy-the-contract",level:3},{value:"Xem metadata c\u1ee7a contract",id:"xem-metadata-c\u1ee7a-contract",level:3},{value:"T\u1ed5ng k\u1ebft",id:"t\u1ed5ng-k\u1ebft",level:2},{value:"C\xe1c b\u01b0\u1edbc ti\u1ebfp theo",id:"c\xe1c-b\u01b0\u1edbc-ti\u1ebfp-theo",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["This is the first of many tutorials in a series where you'll be creating a complete FT smart contract from scratch that conforms with all the NEAR ",(0,a.jsx)(n.a,{href:"https://nomicon.io/Standards/Tokens/FungibleToken/Core",children:"FT standards"}),". Today you'll learn what a Fungible Token is and how you can define one on the NEAR blockchain. You will be modifying a bare-bones ",(0,a.jsx)(n.a,{href:"/tutorials/fts/skeleton",children:"skeleton smart contract"})," by filling in the necessary code snippets needed to add this functionality."]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"gi\u1edbi-thi\u1ec7u",children:"Gi\u1edbi thi\u1ec7u"}),"\n",(0,a.jsxs)(n.p,{children:["To get started, switch to the ",(0,a.jsx)(n.code,{children:"1.skeleton"})," folder in our repo. N\u1ebfu b\u1ea1n ch\u01b0a clone repository, h\xe3y tham kh\u1ea3o ",(0,a.jsx)(n.a,{href:"/tutorials/fts/skeleton",children:"Ki\u1ebfn tr\xfac c\u1ee7a Contract"})," \u0111\u1ec3 b\u1eaft \u0111\u1ea7u."]}),"\n",(0,a.jsxs)(n.p,{children:["If you wish to see the finished code for this portion of the tutorial, that can be found on the ",(0,a.jsx)(n.code,{children:"2.defining-a-token"})," folder."]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"modifications",children:"C\xe1c s\u1eeda \u0111\u1ed5i \u0111\u1ed1i v\u1edbi skeleton contract"}),"\n",(0,a.jsxs)(n.p,{children:["At its very core, a fungible token is an exchangeable asset that ",(0,a.jsx)(n.strong,{children:"is divisible"})," but is ",(0,a.jsx)(n.strong,{children:"not unique"}),". For example, if Benji had 1 Canadian dollar, it would be worth the exact same as Matt's Canadian dollar. Both their dollars are fungible and exchangeable. In this case, the fungible token is the canadian dollar. All fiat currencies are fungible and exchangeable."]}),"\n",(0,a.jsxs)(n.p,{children:["Non-fungible tokens, on the other hand, are ",(0,a.jsx)(n.strong,{children:"unique"})," and ",(0,a.jsx)(n.strong,{children:"indivisible"})," such as a house or a car. You ",(0,a.jsx)(n.strong,{children:"cannot"})," have another asset that is exactly the same. Even if you had a specific car model, such as a Corvette 1963 C2 Stingray, each car would have a separate serial number with a different number of kilometers driven etc..."]}),"\n",(0,a.jsx)(n.p,{children:"Now that you understand what a fungible token is, let's look at how you can define one in the contract itself."}),"\n",(0,a.jsx)("hr",{className:"subsection"}),"\n",(0,a.jsx)(n.h3,{id:"defining-a-fungible-token",children:"Defining a fungible token"}),"\n",(0,a.jsxs)(n.p,{children:["Start by navigating to the ",(0,a.jsx)(n.code,{children:"1.skeleton/src/metadata.rs"})," file. This is where you'll define the metadata for the fungible token itself. There are several ways NEAR allows you to customize your token, all of which are found in the ",(0,a.jsx)(n.a,{href:"https://nomicon.io/Standards/Tokens/FungibleToken/Core#metadata",children:"metadata"})," standard. Let's break them up into the optional and non-optional portions."]}),"\n",(0,a.jsx)(n.p,{children:"Required:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"spec"}),": Indicates the version of the standard the contract is using. This should be set to ",(0,a.jsx)(n.code,{children:"ft-1.0.0"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"name"}),': The human readable name of the token such as "Wrapped NEAR" or "TEAM Tokens".']}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"symbol"}),": The abbreviation of the token such as ",(0,a.jsx)(n.code,{children:"wNEAR"})," or ",(0,a.jsx)(n.code,{children:"gtNEAR"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"decimals"}),": used in frontends to show the proper significant digits of a token. This concept is explained well in this ",(0,a.jsx)(n.a,{href:"https://docs.openzeppelin.com/contracts/3.x/erc20#a-note-on-decimals",children:"OpenZeppelin post"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Optional:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"icon"}),": The image for the token (must be a ",(0,a.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URLs",children:"data URL"}),")."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"reference"}),": A link to any supplementary JSON details for the token stored off-chain."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"reference_hash"}),": A hash of the referenced JSON."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"With this finished, you can now add these fields to the metadata in the contract."}),"\n",(0,a.jsx)(r.Ey,{language:"rust",start:"8",end:"19",url:"https://github.com/near-examples/ft-tutorial/blob/main/2.define-a-token/src/metadata.rs"}),"\n",(0,a.jsxs)(n.p,{children:["Now that you've defined what the metadata will look like, you need someway to store it on the contract. Switch to the ",(0,a.jsx)(n.code,{children:"1.skeleton/src/lib.rs"})," file and add the following to the ",(0,a.jsx)(n.code,{children:"Contract"})," struct. You'll want to store the metadata on the contract under the ",(0,a.jsx)(n.code,{children:"metadata"})," field."]}),"\n",(0,a.jsx)(r.Ey,{language:"rust",start:"18",end:"24",url:"https://github.com/near-examples/ft-tutorial/blob/main/2.define-a-token/src/lib.rs"}),"\n",(0,a.jsxs)(n.p,{children:["You've now defined ",(0,a.jsx)(n.em,{children:"where"})," the metadata will live but you'll also need someway to pass in the metadata itself. This is where the initialization function comes into play."]}),"\n",(0,a.jsx)("hr",{className:"subsection"}),"\n",(0,a.jsx)(n.h4,{id:"c\xe1c-initialization-function",children:"C\xe1c Initialization Function"}),"\n",(0,a.jsxs)(n.p,{children:["You'll now create what's called an initialization function; you can name it ",(0,a.jsx)(n.code,{children:"new"}),". This function needs to be invoked when you first deploy the contract. It will initialize all the contract's fields that you've defined with default values. It's important to note that you ",(0,a.jsx)(n.strong,{children:"cannot"})," call these methods more than once."]}),"\n",(0,a.jsx)(r.Ey,{language:"rust",start:"58",end:"74",url:"https://github.com/near-examples/ft-tutorial/blob/main/2.define-a-token/src/lib.rs"}),"\n",(0,a.jsxs)(n.p,{children:["More often than not when doing development, you'll need to deploy contracts several times. You can imagine that it might get tedious to have to pass in metadata every single time you want to initialize the contract. For this reason, let's create a function that can initialize the contract with a set of default ",(0,a.jsx)(n.code,{children:"metadata"}),". You can call it ",(0,a.jsx)(n.code,{children:"new_default_meta"}),"."]}),"\n",(0,a.jsx)(r.Ey,{language:"rust",start:"38",end:"54",url:"https://github.com/near-examples/ft-tutorial/blob/main/2.define-a-token/src/lib.rs"}),"\n",(0,a.jsxs)(n.p,{children:["This function is simply calling the previous ",(0,a.jsx)(n.code,{children:"new"})," function and passing in some default metadata behind the scenes."]}),"\n",(0,a.jsxs)(n.p,{children:["At this point, you've defined the metadata for your fungible tokens and you've created a way to store this information on the contract. The last step is to introduce a getter that will query for and return the metadata. Switch to the ",(0,a.jsx)(n.code,{children:"1.skeleton/src/metadata.rs"})," file and add the following code to the ",(0,a.jsx)(n.code,{children:"ft_metadata"})," function."]}),"\n",(0,a.jsx)(r.Ey,{language:"rust",start:"21",end:"31",url:"https://github.com/near-examples/ft-tutorial/blob/main/2.define-a-token/src/metadata.rs"}),"\n",(0,a.jsxs)(n.p,{children:["This function will get the ",(0,a.jsx)(n.code,{children:"metadata"})," object from the contract which is of type ",(0,a.jsx)(n.code,{children:"FungibleTokenMetadata"})," and will return it."]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"t\u01b0\u01a1ng-t\xe1c-v\u1edbi-on-chain-contract",children:"T\u01b0\u01a1ng t\xe1c v\u1edbi on-chain contract"}),"\n",(0,a.jsx)(n.p,{children:"Now that the logic for defining a custom fungible token is complete and you've added a way to query for the metadata, it's time to build and deploy your contract to the blockchain."}),"\n",(0,a.jsx)(n.h3,{id:"deploy-the-contract",children:"Deploying and initializing the contract"}),"\n",(0,a.jsx)(n.p,{children:"You can build a contract using the following command:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"cd 1.skeleton && cargo near build\n"})}),"\n",(0,a.jsx)(n.p,{children:"S\u1ebd c\xf3 m\u1ed9t danh s\xe1ch c\xe1c c\u1ea3nh b\xe1o tr\xean console c\u1ee7a b\u1ea1n, nh\u01b0ng khi h\u01b0\u1edbng d\u1eabn ti\u1ebfp t\u1ee5c, nh\u1eefng c\u1ea3nh b\xe1o n\xe0y s\u1ebd bi\u1ebfn m\u1ea5t."}),"\n",(0,a.jsxs)(n.p,{children:["\u0110\u1ec3 deploy, b\u1ea1n c\u1ea7n m\u1ed9t account NEAR v\u1edbi c\xe1c key ch\u1ee9a s\u1eb5n trong local machine c\u1ee7a b\u1ea1n. Navigate to the ",(0,a.jsx)(n.a,{href:"https://testnet.mynearwallet.com//",children:"NEAR wallet"})," site and create an account."]}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsx)(n.p,{children:"Please ensure that you deploy the contract to an account with no pre-existing contracts. C\xe1ch \u0111\u01a1n gi\u1ea3n nh\u1ea5t l\xe0 ch\u1ec9 c\u1ea7n t\u1ea1o m\u1ed9t account m\u1edbi ho\u1eb7c t\u1ea1o m\u1ed9t account ph\u1ee5 cho h\u01b0\u1edbng d\u1eabn n\xe0y."})}),"\n",(0,a.jsxs)(n.p,{children:["\u0110\u0103ng nh\u1eadp v\xe0o account v\u1eeba m\u1edbi t\u1ea1o v\u1edbi ",(0,a.jsx)(n.code,{children:"near-cli"})," b\u1eb1ng c\xe1ch ch\u1ea1y c\xe2u l\u1ec7nh sau trong terminal c\u1ee7a b\u1ea1n."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"near login\n"})}),"\n",(0,a.jsxs)(n.p,{children:["\u0110\u1ec3 l\xe0m cho h\u01b0\u1edbng d\u1eabn n\xe0y d\u1ec5 d\xe0ng h\u01a1n v\u1edbi copy/paste, ch\xfang t\xf4i \u0111\xe3 set m\u1ed9t bi\u1ebfn m\xf4i tr\u01b0\u1eddng cho account ID c\u1ee7a b\u1ea1n. Trong command d\u01b0\u1edbi \u0111\xe2y, thay ",(0,a.jsx)(n.code,{children:"YOUR_ACCOUNT_NAME"})," v\u1edbi account name b\u1ea1n v\u1eeba \u0111\u0103ng nh\u1eadp, bao g\u1ed3m ph\u1ea7n ",(0,a.jsx)(n.code,{children:".testnet"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'export FT_CONTRACT_ID="YOUR_ACCOUNT_NAME"\n'})}),"\n",(0,a.jsx)(n.p,{children:"Ki\u1ec3m tra bi\u1ebfn m\xf4i tr\u01b0\u1eddng \u0111\u01b0\u1ee3c c\xe0i \u0111\u1eb7t \u0111\xfang hay ch\u01b0a b\u1eb1ng c\xe1ch ch\u1ea1y:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"echo $FT_CONTRACT_ID\n"})}),"\n",(0,a.jsx)(n.p,{children:"H\xe3y x\xe1c nh\u1eadn r\u1eb1ng account \u0111\u01b0\u1ee3c in ra trong terminal l\xe0 ch\xednh x\xe1c. N\u1ebfu m\u1ecdi th\u1ee9 \u0111\u1ec1u \u0111\xfang, th\xec b\xe2y gi\u1edd b\u1ea1n c\xf3 th\u1ec3 deploy contract c\u1ee7a b\u1ea1n. \u0110\u1ec3 \u0111\u01a1n gi\u1ea3n h\u01a1n, h\xe3y g\u1ecdi h\xe0m init metadata m\u1eb7c \u0111\u1ecbnh m\xe0 b\u1ea1n \u0111\xe3 vi\u1ebft tr\u01b0\u1edbc \u0111\xf3, \u0111\u1ec3 kh\xf4ng c\u1ea7n ph\u1ea3i nh\u1eadp metadata theo c\xe1ch th\u1ee7 c\xf4ng trong CLI. In the root of your FT project run the following command to deploy your smart contract."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"cargo near deploy $FT_CONTRACT_ID with-init-call new_default_meta json-args '{\"owner_id\": \"'$FT_CONTRACT_ID'\", \"total_supply\": \"0\"}' prepaid-gas '100.0 Tgas' attached-deposit '0 NEAR' network-config testnet sign-with-keychain send\n"})}),"\n",(0,a.jsx)(n.p,{children:"At this point, the contract should have been deployed to your account and initialized."}),"\n",(0,a.jsx)("hr",{className:"subsection"}),"\n",(0,a.jsx)(n.h3,{id:"xem-metadata-c\u1ee7a-contract",children:"Xem metadata c\u1ee7a contract"}),"\n",(0,a.jsx)(n.p,{children:"Now that the contract has been initialized, you can query for the metadata by calling the function you wrote earlier."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"near view $FT_CONTRACT_ID ft_metadata\n"})}),"\n",(0,a.jsx)(n.p,{children:"N\xf3 s\u1ebd tr\u1ea3 v\u1ec1 m\u1ed9t output trong gi\u1ed1ng nh\u01b0 sau:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"{\n  spec: 'ft-1.0.0',\n  name: 'Team Token FT Tutorial',\n  symbol: 'gtNEAR',\n  icon: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/\n        /*\n        ...lots of base64 data...\n        */\n        j4Mvhy9H9NlnieJ4iwoo9ZlyLGx4pnrPWeB4CVGRZZcJ7Vohwhi0z5MJY4cVL4MdP/Z',\n  reference: null,\n  reference_hash: null,\n  decimals: 24\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Go team!"})," You've now verified that everything works correctly and you've defined your own fungible token!"]}),"\n",(0,a.jsx)(n.p,{children:"In the next tutorial, you'll learn about how to create a total supply and view the tokens in the wallet."}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"t\u1ed5ng-k\u1ebft",children:"T\u1ed5ng k\u1ebft"}),"\n",(0,a.jsx)(n.p,{children:"In this tutorial, you went through the basics of setting up and understanding the logic behind creating a fungible token on the blockchain using a skeleton contract."}),"\n",(0,a.jsxs)(n.p,{children:["You first looked at ",(0,a.jsx)(n.a,{href:"#modifications",children:"what a fungible token is"})," and how it differs from a non-fungible token. You then learned how to customize and create your own fungible tokens and how you could modify the skeleton contract to achieve this. Finally you built and deployed the contract and interacted with it using the NEAR CLI."]}),"\n",(0,a.jsx)(n.h2,{id:"c\xe1c-b\u01b0\u1edbc-ti\u1ebfp-theo",children:"C\xe1c b\u01b0\u1edbc ti\u1ebfp theo"}),"\n",(0,a.jsxs)(n.p,{children:["In the ",(0,a.jsx)(n.a,{href:"/tutorials/fts/circulating-supply",children:"next tutorial"}),", you'll find out how to create an initial supply of tokens and have them show up in the NEAR wallet."]})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>o});t(67294);var a=t(36905);const i={tabItem:"tabItem_Ymn6"};var r=t(85893);function o(e){var n=e.children,t=e.hidden,o=e.className;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.Z)(i.tabItem,o),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>w});var a=t(67294),i=t(36905),r=t(12466),o=t(16550),s=t(20469),l=t(91980),c=t(67392),u=t(50012);function h(e){var n,t;return null!=(n=null==(t=a.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,a.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function d(e){var n=e.values,t=e.children;return(0,a.useMemo)((function(){var e=null!=n?n:function(e){return h(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,c.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function f(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function g(e){var n=e.queryString,t=void 0!==n&&n,i=e.groupId,r=(0,o.k6)(),s=function(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:t,groupId:i});return[(0,l._X)(s),(0,a.useCallback)((function(e){if(s){var n=new URLSearchParams(r.location.search);n.set(s,e),r.replace(Object.assign({},r.location,{search:n.toString()}))}}),[s,r])]}function p(e){var n,t,i,r,o=e.defaultValue,l=e.queryString,c=void 0!==l&&l,h=e.groupId,p=d(e),m=(0,a.useState)((function(){return function(e){var n,t=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var i=null!=(n=a.find((function(e){return e.default})))?n:a[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:o,tabValues:p})})),b=m[0],x=m[1],v=g({queryString:c,groupId:h}),j=v[0],y=v[1],w=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:h}.groupId),t=(0,u.Nk)(n),i=t[0],r=t[1],[i,(0,a.useCallback)((function(e){n&&r.set(e)}),[n,r])]),k=w[0],T=w[1],N=function(){var e=null!=j?j:k;return f({value:e,tabValues:p})?e:null}();return(0,s.Z)((function(){N&&x(N)}),[N]),{selectedValue:b,selectValue:(0,a.useCallback)((function(e){if(!f({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);x(e),y(e),T(e)}),[y,T,p]),tabValues:p}}var m=t(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(85893);function v(e){var n=e.className,t=e.block,a=e.selectedValue,o=e.selectValue,s=e.tabValues,l=[],c=(0,r.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var n=e.currentTarget,t=l.indexOf(n),i=s[t].value;i!==a&&(c(n),o(i))},h=function(e){var n,t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var a,i=l.indexOf(e.currentTarget)+1;t=null!=(a=l[i])?a:l[0];break;case"ArrowLeft":var r,o=l.indexOf(e.currentTarget)-1;t=null!=(r=l[o])?r:l[l.length-1]}null==(n=t)||n.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},n),children:s.map((function(e){var n=e.value,t=e.label,r=e.attributes;return(0,x.jsx)("li",Object.assign({role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:function(e){return l.push(e)},onKeyDown:h,onClick:u},r,{className:(0,i.Z)("tabs__item",b.tabItem,null==r?void 0:r.className,{"tabs__item--active":a===n}),children:null!=t?t:n}),n)}))})}function j(e){var n=e.lazy,t=e.children,i=e.selectedValue,r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var o=r.find((function(e){return e.props.value===i}));return o?(0,a.cloneElement)(o,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:r.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==i})}))})}function y(e){var n=p(e);return(0,x.jsxs)("div",{className:(0,i.Z)("tabs-container",b.tabList),children:[(0,x.jsx)(v,Object.assign({},n,e)),(0,x.jsx)(j,Object.assign({},n,e))]})}function w(e){var n=(0,m.Z)();return(0,x.jsx)(y,Object.assign({},e,{children:h(e.children)}),String(n))}},71183:(e,n,t)=>{t.d(n,{O2:()=>g,Ey:()=>m,SQ:()=>p});var a=t(67294),i=t(74866),r=t(85162),o=t(74165),s=t(15861),l=t(1841),c=t.n(l),u=t(85893);function h(){return(h=(0,s.Z)((0,o.Z)().mark((function e(n,t,a){var i,r,s,l;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((r=localStorage.getItem(n+"-until"))&&r>Date.now())){e.next=5;break}i=localStorage.getItem(n),e.next=18;break;case 5:return e.prev=5,e.next=8,fetch(n);case 8:return e.next=10,e.sent.text();case 10:i=e.sent,localStorage.setItem(n,i),localStorage.setItem(n+"-until",Date.now()+6e4),e.next=18;break;case 15:return e.prev=15,e.t0=e.catch(5),e.abrupt("return","Error fetching code, please try reloading");case 18:return s=i.split("\n"),t=t?Number(t)-1:0,a=a?Number(a):s.length,s=s.slice(t,a),l=s.reduce((function(e,n){if(0===n.length)return e;var t=n.match(/^\s+/);return t?Math.min(e,t[0].length):0}),1/0),e.abrupt("return",s.map((function(e){return e.slice(l)})).join("\n"));case 24:case"end":return e.stop()}}),e,null,[[5,15]])})))).apply(this,arguments)}const d=function(e){var n=e.url,t=e.start,i=e.end,r=e.language,o=e.fname,s=e.metastring,l=(0,a.useState)("Loading..."),d=l[0],f=l[1];return(0,a.useEffect)((function(){var e=function(e){var n=e.slice(e.indexOf("https")).split("#"),t=n[0],a=(n[1],new URL(t).pathname.split("/").slice(1)),i=a[0],r=a[1];return a[2],"https://raw.githubusercontent.com/"+i+"/"+r+"/"+a[3]+"/"+a.slice(4).join("/")}(n),a=function(e,n,t){return h.apply(this,arguments)}(e,t,i);a.then((function(e){return f(e)}))})),(0,u.jsxs)("div",{fname:o,children:[(0,u.jsx)(c(),{language:r,metastring:s+" showLineNumbers",children:d}),(0,u.jsx)("div",{style:{fontSize:"0.9em",fontWeight:600,color:"rgb(14, 117, 221)",textAlign:"center",paddingBottom:"13px",textDecoration:"underline"},children:(0,u.jsx)("a",{href:n,target:"_blank",rel:"noreferrer noopener",children:"See full example on GitHub"})})]})};var f={rust:"\ud83e\udd80 Rust",js:"\ud83c\udf10 Javascript",ts:"\ud83c\udf10 Typescript"};function g(e){var n=e.children;return Array.isArray(n)||(n=[n]),(0,u.jsx)(i.Z,{className:"language-tabs",groupId:"code-tabs",children:n.map((function(e,n){return(0,u.jsx)(r.Z,{value:e.props.value,label:f[e.props.value],children:e})}))})}function p(e){var n=e.children,t=e.language;return Array.isArray(n)||(n=[n]),n=n.map((function(e){return function(e,n){var t=e.props,a=(t.children,t.url),i=t.start,r=t.end,o=t.fname;if(e.type===m)return m({url:a,start:i,end:r,language:n,fname:o});return e}(e,t)})),1==n.length?(0,u.jsx)(r.Z,{value:0,label:n[0].props.fname,children:n[0]}):(0,u.jsx)(i.Z,{className:"file-tabs",children:n.map((function(e,n){return(0,u.jsx)(r.Z,{value:n,label:e.props.fname,children:e})}))})}function m(e){var n=e.url,t=e.start,a=e.end,i=e.language,r=e.fname,o=e.metastring;return d({url:n,start:t,end:a,language:i,fname:r,metastring:o})}}}]);