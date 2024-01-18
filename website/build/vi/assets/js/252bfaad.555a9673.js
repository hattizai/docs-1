"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5720],{27655:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var c=e(85893),i=e(11151);const o={id:"enumeration",title:"Enumeration",sidebar_label:"Enumeration"},r=void 0,s={id:"tutorials/nfts/js/enumeration",title:"Enumeration",description:"Trong c\xe1c h\u01b0\u1edbng d\u1eabn tr\u01b0\u1edbc, b\u1ea1n \u0111\xe3 xem x\xe9t c\xe1c c\xe1ch t\xedch h\u1ee3p ch\u1ee9c n\u0103ng mint v\xe0o m\u1ed9t skeleton smart contract. \u0110\u1ec3 NFT c\u1ee7a b\u1ea1n hi\u1ec3n th\u1ecb trong v\xed, b\u1ea1n c\u0169ng ph\u1ea3i deploy m\u1ed9t b\u1ea3n v\xe1 l\u1ed7i \u0111\xe3 \u0111\u01b0\u1ee3c implement m\u1ed9t trong c\xe1c enumeration method. In this tutorial, you'll expand on and finish the rest of the enumeration methods as per the standard Now you'll extend the NFT smart contract and add a couple of enumeration methods that can be used to return the contract's state.",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/3.tutorials/nfts/js/3-enumeration.md",sourceDirName:"3.tutorials/nfts/js",slug:"/tutorials/nfts/js/enumeration",permalink:"/vi/tutorials/nfts/js/enumeration",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/nfts/js/3-enumeration.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1704996595,formattedLastUpdatedAt:"11 thg 1, 2024",sidebarPosition:3,frontMatter:{id:"enumeration",title:"Enumeration",sidebar_label:"Enumeration"},sidebar:"contracts",previous:{title:"Upgrade m\u1ed9t Contract",permalink:"/vi/tutorials/nfts/js/upgrade-contract"},next:{title:"Core",permalink:"/vi/tutorials/nfts/js/core"}},a={},l=[{value:"Gi\u1edbi thi\u1ec7u",id:"gi\u1edbi-thi\u1ec7u",level:2},{value:"C\xe1c s\u1eeda \u0111\u1ed5i v\u1edbi contract",id:"c\xe1c-s\u1eeda-\u0111\u1ed5i-v\u1edbi-contract",level:2},{value:"NFT Total Supply",id:"nft-total-supply",level:3},{value:"NFT Tokens",id:"nft-tokens",level:3},{value:"NFT Supply For Owner",id:"nft-supply-for-owner",level:3},{value:"Redeploy contract",id:"redeploying-contract",level:2},{value:"C\xe1c token enumerating",id:"c\xe1c-token-enumerating",level:2},{value:"C\xe1c token NFT",id:"c\xe1c-token-nft",level:3},{value:"C\xe1c token theo owner",id:"c\xe1c-token-theo-owner",level:3},{value:"T\u1ed5ng k\u1ebft",id:"t\u1ed5ng-k\u1ebft",level:2}];function h(n){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...n.components},{Details:e}=t;return e||function(n,t){throw new Error("Expected "+(t?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(t.p,{children:["Trong c\xe1c h\u01b0\u1edbng d\u1eabn tr\u01b0\u1edbc, b\u1ea1n \u0111\xe3 xem x\xe9t c\xe1c c\xe1ch t\xedch h\u1ee3p ch\u1ee9c n\u0103ng mint v\xe0o m\u1ed9t skeleton smart contract. \u0110\u1ec3 NFT c\u1ee7a b\u1ea1n hi\u1ec3n th\u1ecb trong v\xed, b\u1ea1n c\u0169ng ph\u1ea3i deploy m\u1ed9t b\u1ea3n v\xe1 l\u1ed7i \u0111\xe3 \u0111\u01b0\u1ee3c implement m\u1ed9t trong c\xe1c enumeration method. In this tutorial, you'll expand on and finish the rest of the enumeration methods as per the ",(0,c.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Enumeration",children:"standard"})," Now you'll extend the NFT smart contract and add a couple of enumeration methods that can be used to return the contract's state."]}),"\n",(0,c.jsx)(t.admonition,{type:"caution",children:(0,c.jsxs)(t.p,{children:["The JS-SDK is currently in ",(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.a,{href:"https://github.com/near/near-sdk-js/releases/",children:(0,c.jsx)(t.code,{children:"Alpha"})})}),"."]})}),"\n",(0,c.jsx)(t.h2,{id:"gi\u1edbi-thi\u1ec7u",children:"Gi\u1edbi thi\u1ec7u"}),"\n",(0,c.jsxs)(t.p,{children:["Nh\u01b0 \u0111\xe3 \u0111\u1ec1 c\u1eadp trong h\u01b0\u1edbng d\u1eabn ",(0,c.jsx)(t.a,{href:"/tutorials/nfts/js/upgrade-contract/",children:"Upgrade m\u1ed9t Contract"}),", b\u1ea1n c\xf3 th\u1ec3 deploy c\xe1c b\u1ea3n v\xe1 v\xe0 s\u1eeda l\u1ed7i cho c\xe1c smart contract. L\u1ea7n n\xe0y, b\u1ea1n s\u1ebd d\xf9ng ki\u1ebfn th\u1ee9c \u0111\xf3 \u0111\u1ec3 implement c\xe1c enumeration function ",(0,c.jsx)(t.code,{children:"nft_total_supply"}),", ",(0,c.jsx)(t.code,{children:"nft_tokens"})," v\xe0 ",(0,c.jsx)(t.code,{children:"nft_supply_for_owner"}),"."]}),"\n",(0,c.jsxs)(t.p,{children:["\u0110\u1ec3 b\u1eaft \u0111\u1ea7u, b\u1ea1n c\xf3 th\u1ec3 switch sang branch ",(0,c.jsx)(t.code,{children:"2.minting"})," t\u1eeb ",(0,c.jsx)(t.a,{href:"https://github.com/near-examples/nft-tutorial/",children:"GitHub repository"})," c\u1ee7a ch\xfang t\xf4i, ho\u1eb7c ti\u1ebfp t\u1ee5c v\u1edbi ph\u1ea7n h\u01b0\u1edbng d\u1eabn b\xean tr\xean. N\u1ebfu b\u1ea1n ch\u01b0a clone, h\xe3y tham kh\u1ea3o ",(0,c.jsx)(t.a,{href:"/tutorials/nfts/js/skeleton#building-the-skeleton",children:"Ki\u1ebfn tr\xfac c\u1ee7a Contract"})," \u0111\u1ec3 check out repository."]}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-bash",children:"git checkout 2.minting\n"})}),"\n",(0,c.jsxs)(t.admonition,{type:"tip",children:[(0,c.jsxs)(t.mdxAdmonitionTitle,{children:["N\u1ebfu b\u1ea1n mu\u1ed1n xem code ho\xe0n ch\u1ec9nh c\u1ee7a ph\u1ea7n h\u01b0\u1edbng d\u1eabn ",(0,c.jsx)(t.em,{children:"Enumeration"})," n\xe0y, b\u1ea1n c\xf3 th\u1ec3 \u0111\u1ebfn branch ",(0,c.jsx)(t.code,{children:"3.enumeration"}),". :::"]}),(0,c.jsx)(t.h2,{id:"c\xe1c-s\u1eeda-\u0111\u1ed5i-v\u1edbi-contract",children:"C\xe1c s\u1eeda \u0111\u1ed5i v\u1edbi contract"}),(0,c.jsxs)(t.p,{children:["Let's start by opening the  ",(0,c.jsx)(t.code,{children:"src/enumeration.ts"})," file and locating the empty ",(0,c.jsx)(t.code,{children:"internalNftTotalSupply"})," function."]}),(0,c.jsx)(t.h3,{id:"nft-total-supply",children:"NFT Total Supply"}),(0,c.jsxs)(t.p,{children:["Function n\xe0y s\u1ebd tr\u1ea3 v\u1ec1 t\u1ed5ng s\u1ed1 c\xe1c NFT \u0111\u01b0\u1ee3c l\u01b0u tr\u1eef tr\xean contract. You can easily achieve this functionality by simply returning the length of the ",(0,c.jsx)(t.code,{children:"nftMetadataById"})," data structure."]}),(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-js",metastring:"reference",children:"https://github.com/near-examples/nft-tutorial-js/blob/3.enumeration/src/nft-contract/enumeration.ts#L8-L16\n"})}),(0,c.jsx)(t.h3,{id:"nft-tokens",children:"NFT Tokens"}),(0,c.jsxs)(t.p,{children:["Function n\xe0y s\u1ebd tr\u1ea3 v\u1ec1 m\u1ed9t danh s\xe1ch \u0111\u01b0\u1ee3c ph\xe2n trang c\xe1c ",(0,c.jsx)(t.code,{children:"JsonTokens"})," l\u01b0u tr\u1eef tr\xean contract b\u1ea5t k\u1ec3 c\xe1c owner l\xe0 ai. N\u1ebfu user cung c\u1ea5p m\u1ed9t tham s\u1ed1 ",(0,c.jsx)(t.code,{children:"from_index"}),", b\u1ea1n n\xean d\xf9ng n\xf3 nh\u01b0 \u0111i\u1ec3m b\u1eaft \u0111\u1ea7u \u0111\u1ec3 l\u1eb7p qua c\xe1c token; c\xf2n n\u1ebfu kh\xf4ng th\xec c\u1ea7n b\u1eaft \u0111\u1ea7u l\u1ea1i t\u1eeb \u0111\u1ea7u. T\u01b0\u01a1ng t\u1ef1 nh\u01b0 v\u1eady, n\u1ebfu user cung c\u1ea5p tham s\u1ed1 ",(0,c.jsx)(t.code,{children:"limit"}),", th\xec function s\u1ebd d\u1eebng sau khi \u0111\u1ea1t \u0111\u1ebfn limit ho\u1eb7c khi k\u1ebft th\xfac danh s\xe1ch."]}),(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-js",metastring:"reference",children:"https://github.com/near-examples/nft-tutorial-js/blob/3.enumeration/src/nft-contract/enumeration.ts#L18-L43\n"})}),(0,c.jsx)(t.h3,{id:"nft-supply-for-owner",children:"NFT Supply For Owner"}),(0,c.jsxs)(t.p,{children:["Function n\xe0y s\u1ebd t\xecm ki\u1ebfm t\u1ea5t c\u1ea3 c\xe1c non-fungible token c\u1ee7a owner do ng\u01b0\u1eddi d\xf9ng x\xe1c \u0111\u1ecbnh v\xe0 tr\u1ea3 v\u1ec1 \u0111\u1ed9 d\xe0i c\u1ee7a t\u1eadp h\u1ee3p k\u1ebft qu\u1ea3. If there isn't a set of tokens for the provided Account ID, then the function shall return ",(0,c.jsx)(t.code,{children:"0"}),"."]}),(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-js",metastring:"reference",children:"https://github.com/near-examples/nft-tutorial-js/blob/3.enumeration/src/nft-contract/enumeration.ts#L45-L62\n"})}),(0,c.jsx)(t.p,{children:"Ti\u1ebfp theo, b\u1ea1n c\xf3 th\u1ec3 s\u1eed d\u1ee5ng CLI \u0111\u1ec3 truy v\u1ea5n c\xe1c method m\u1edbi n\xe0y v\xe0 x\xe1c nh\u1eadn r\u1eb1ng ch\xfang ho\u1ea1t \u0111\u1ed9ng ch\xednh x\xe1c."}),(0,c.jsx)(t.h2,{id:"redeploying-contract",children:"Redeploy contract"}),(0,c.jsxs)(t.p,{children:["Gi\u1edd \u0111\xe2y b\u1ea1n \u0111\xe3 implement xong ph\u1ea7n logic c\u1ea7n thi\u1ebft cho ",(0,c.jsx)(t.code,{children:"nft_tokens_for_owner"}),", gi\u1edd l\xe0 l\xfac build v\xe0 deploy l\u1ea1i contract cho account c\u1ee7a b\u1ea1n. D\xf9ng build script, deploy contract theo c\xe1ch b\u1ea1n \u0111\xe3 l\xe0m trong c\xe1c ph\u1ea7n h\u01b0\u1edbng d\u1eabn tr\u01b0\u1edbc:"]}),(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-bash",children:"yarn build && near deploy --wasmFile build/nft.wasm --accountId $NFT_CONTRACT_ID\n"})}),(0,c.jsxs)(t.p,{children:["L\xfac n\xe0y s\u1ebd c\xf3 m\u1ed9t c\u1ea3nh b\xe1o n\xf3i r\u1eb1ng t\xe0i kho\u1ea3n \u0111\xe3 c\xf3 m\u1ed9t contract \u0111\xe3 \u0111\u01b0\u1ee3c deploy v\xe0 s\u1ebd h\u1ecfi b\u1ea1n c\xf3 mu\u1ed1n ti\u1ebfp t\u1ee5c hay kh\xf4ng. \u0110\u01a1n gi\u1ea3n h\xe3y g\xf5 ",(0,c.jsx)(t.code,{children:"y"})," v\xe0 \u1ea5n enter."]}),(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{children:"This account already has a deployed contract [ AKJK7sCysrWrFZ976YVBnm6yzmJuKLzdAyssfzK9yLsa ]. Do you want to proceed? (y/n)\n"})}),(0,c.jsx)(t.h2,{id:"c\xe1c-token-enumerating",children:"C\xe1c token enumerating"}),(0,c.jsx)(t.p,{children:"Khi contract c\u1eadp nh\u1eadt \u0111\xe3 \u0111\u01b0\u1ee3c deploy l\u1ea1i, b\u1ea1n c\xf3 th\u1ec3 ki\u1ec3m tra v\xe0 xem li\u1ec7u c\xe1c function m\u1edbi n\xe0y c\xf3 ho\u1ea1t \u0111\u1ed9ng nh\u01b0 mong \u0111\u1ee3i hay kh\xf4ng."}),(0,c.jsx)(t.h3,{id:"c\xe1c-token-nft",children:"C\xe1c token NFT"}),(0,c.jsx)(t.p,{children:"H\xe3y query m\u1ed9t list c\u1ee7a non-fungible token tr\xean contract. S\u1eed d\u1ee5ng l\u1ec7nh sau \u0111\u1ec3 truy v\u1ea5n th\xf4ng tin c\u1ee7a t\u1ed1i \u0111a 50 NFT b\u1eaft \u0111\u1ea7u t\u1eeb item th\u1ee9 10:"}),(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-bash",children:'near view $NFT_CONTRACT_ID nft_tokens \'{"from_index": "10", "limit": 50}\'\n'})}),(0,c.jsx)(t.p,{children:"C\xe2u l\u1ec7nh n\xe0y s\u1ebd tr\u1ea3 v\u1ec1 m\u1ed9t ouput ki\u1ec3u nh\u01b0 sau:"}),(0,c.jsxs)(e,{children:[(0,c.jsx)("summary",{children:"V\xed d\u1ee5 v\u1ec1 response nh\u1eadn \u0111\u01b0\u1ee3c: "}),(0,c.jsx)("p",{children:(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-json",children:"[]\n"})})})]}),(0,c.jsx)(t.h3,{id:"c\xe1c-token-theo-owner",children:"C\xe1c token theo owner"}),(0,c.jsxs)(t.p,{children:["\u0110\u1ec3 l\u1ea5y t\u1ed5ng s\u1ed1 l\u01b0\u1ee3ng NFT s\u1edf h\u1eefu b\u1edfi account ",(0,c.jsx)(t.code,{children:"goteam.testnet"}),", h\xe3y call function ",(0,c.jsx)(t.code,{children:"nft_supply_for_owner"})," v\xe0 set parameter ",(0,c.jsx)(t.code,{children:"account_id"}),":"]}),(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-bash",children:'near view $NFT_CONTRACT_ID nft_supply_for_owner \'{"account_id": "goteam.testnet"}\'\n'})}),(0,c.jsx)(t.p,{children:"N\xf3 s\u1ebd tr\u1ea3 v\u1ec1 m\u1ed9t output trong gi\u1ed1ng nh\u01b0 sau:"}),(0,c.jsxs)(e,{children:[(0,c.jsx)("summary",{children:"V\xed d\u1ee5 v\u1ec1 response nh\u1eadn \u0111\u01b0\u1ee3c: "}),(0,c.jsx)("p",{children:(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-json",children:"0\n"})})})]}),(0,c.jsx)(t.h2,{id:"t\u1ed5ng-k\u1ebft",children:"T\u1ed5ng k\u1ebft"}),(0,c.jsxs)(t.p,{children:["Trong h\u01b0\u1edbng d\u1eabn n\xe0y, b\u1ea1n \u0111\xe3 th\xeam hai ",(0,c.jsx)(t.a,{href:"/tutorials/nfts/js/enumeration#modifications-to-the-contract",children:"enumeration function m\u1edbi"}),", v\xe0 b\xe2y gi\u1edd b\u1ea1n \u0111\xe3 c\xf3 NFT smart contract c\u01a1 b\u1ea3n v\u1edbi mint v\xe0 enumeration method. Sau khi implement c\xe1c s\u1eeda \u0111\u1ed5i n\xe0y, b\u1ea1n deploy l\u1ea1i smart contract v\xe0 test c\xe1c function b\u1eb1ng CLI."]}),(0,c.jsxs)(t.p,{children:["Trong ",(0,c.jsx)(t.a,{href:"/tutorials/nfts/js/core",children:"h\u01b0\u1edbng d\u1eabn k\u1ebf ti\u1ebfp"}),", b\u1ea1n s\u1ebd implement c\xe1c core function c\u1ea7n thi\u1ebft \u0111\u1ec3 cho ph\xe9p c\xe1c user c\xf3 th\u1ec3 transfer c\xe1c token \u0111\xe3 \u0111\u01b0\u1ee3c mint ra."]}),(0,c.jsxs)(t.admonition,{type:"info",children:[(0,c.jsxs)(t.mdxAdmonitionTitle,{children:["H\xe3y nh\u1edb N\u1ebfu b\u1ea1n mu\u1ed1n xem code ho\xe0n ch\u1ec9nh c\u1ee7a h\u01b0\u1edbng d\u1eabn n\xe0y, b\u1ea1n c\xf3 th\u1ec3 checkout branch ",(0,c.jsx)(t.code,{children:"3.enumeration"}),". :::"]}),(0,c.jsxs)(t.admonition,{title:"Versioning for this article",type:"note",children:[(0,c.jsx)(t.p,{children:"At the time of this writing, this example works with the following versions:"}),(0,c.jsxs)(t.ul,{children:["\n",(0,c.jsxs)(t.li,{children:["near-cli: ",(0,c.jsx)(t.code,{children:"3.0.0"})]}),"\n",(0,c.jsxs)(t.li,{children:["NFT standard: ",(0,c.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Core",children:"NEP171"}),", version ",(0,c.jsx)(t.code,{children:"1.0.0"})]}),"\n",(0,c.jsxs)(t.li,{children:["Enumeration standard: ",(0,c.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Enumeration",children:"NEP181"}),", version ",(0,c.jsx)(t.code,{children:"1.0.0"})]}),"\n"]})]})]})]})]})}function d(n={}){const{wrapper:t}={...(0,i.a)(),...n.components};return t?(0,c.jsx)(t,{...n,children:(0,c.jsx)(h,{...n})}):h(n)}},11151:(n,t,e)=>{e.d(t,{Z:()=>s,a:()=>r});var c=e(67294);const i={},o=c.createContext(i);function r(n){const t=c.useContext(o);return c.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function s(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),c.createElement(o.Provider,{value:t},n.children)}}}]);