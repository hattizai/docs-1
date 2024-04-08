"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[32799],{64136:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(85893),o=n(11151),a=n(77229);const i={id:"enumeration",title:"Enumeration",sidebar_label:"Enumeration"},s=void 0,l={id:"tutorials/nfts/enumeration",title:"Enumeration",description:"In the previous tutorials, you looked at ways to integrate the minting functionality into a skeleton smart contract. In order to get your NFTs to show in the wallet, you also had to deploy a patch fix that implemented one of the enumeration methods. In this tutorial, you'll expand on and finish the rest of the enumeration methods as per the standard",source:"@site/../docs/3.tutorials/nfts/3-enumeration.md",sourceDirName:"3.tutorials/nfts",slug:"/tutorials/nfts/enumeration",permalink:"/tutorials/nfts/enumeration",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/nfts/3-enumeration.md",tags:[],version:"current",lastUpdatedBy:"garikbesson",lastUpdatedAt:1708095721e3,sidebarPosition:3,frontMatter:{id:"enumeration",title:"Enumeration",sidebar_label:"Enumeration"},sidebar:"tutorials",previous:{title:"Upgrade a Contract",permalink:"/tutorials/nfts/upgrade-contract"},next:{title:"Core",permalink:"/tutorials/nfts/core"}},u={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Modifications to the contract",id:"modifications-to-the-contract",level:2},{value:"Redeploying the contract",id:"redeploying-contract",level:2},{value:"Enumerating tokens",id:"enumerating-tokens",level:2},{value:"NFT tokens",id:"nft-tokens",level:3},{value:"Tokens by owner",id:"tokens-by-owner",level:3},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["In the previous tutorials, you looked at ways to integrate the minting functionality into a skeleton smart contract. In order to get your NFTs to show in the wallet, you also had to deploy a patch fix that implemented one of the enumeration methods. In this tutorial, you'll expand on and finish the rest of the enumeration methods as per the ",(0,r.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Enumeration",children:"standard"}),"\nNow you'll extend the NFT smart contract and add a couple of enumeration methods that can be used to return the contract's state."]}),"\n",(0,r.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsxs)(t.p,{children:["As mentioned in the ",(0,r.jsx)(t.a,{href:"/tutorials/nfts/upgrade-contract/",children:"Upgrade a Contract"})," tutorial, you can deploy patches and fixes to smart contracts. This time, you'll use that knowledge to implement the ",(0,r.jsx)(t.code,{children:"nft_total_supply"}),", ",(0,r.jsx)(t.code,{children:"nft_tokens"})," and ",(0,r.jsx)(t.code,{children:"nft_supply_for_owner"})," enumeration functions."]}),"\n",(0,r.jsxs)(t.p,{children:["To get started, either switch to the ",(0,r.jsx)(t.code,{children:"2.minting"})," branch from our ",(0,r.jsx)(t.a,{href:"https://github.com/near-examples/nft-tutorial/",children:"GitHub repository"}),", or continue your work from the previous tutorials.\nIf you haven't cloned it yet, refer to the ",(0,r.jsx)(t.a,{href:"/tutorials/nfts/skeleton#building-the-skeleton",children:"Contract Architecture"})," to check out the repository."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"git checkout 2.minting\n"})}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["If you wish to see the finished code for this ",(0,r.jsx)(t.em,{children:"Enumeration"})," tutorial, you can find it on the ",(0,r.jsx)(t.code,{children:"3.enumeration"})," branch."]})}),"\n",(0,r.jsx)(t.h2,{id:"modifications-to-the-contract",children:"Modifications to the contract"}),"\n",(0,r.jsxs)(t.p,{children:["Let's start by opening the  ",(0,r.jsx)(t.code,{children:"src/enumeration.rs"})," file and locating the empty ",(0,r.jsx)(t.code,{children:"nft_total_supply"})," function."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"nft_total_supply"})}),"\n",(0,r.jsxs)(t.p,{children:["This function should return the total number of NFTs stored on the contract. You can easily achieve this functionality by simply returning the length of the ",(0,r.jsx)(t.code,{children:"nft_metadata_by_id"})," data structure."]}),"\n",(0,r.jsx)(a.Ey,{language:"rust",start:"5",end:"9",url:"https://github.com/near-examples/nft-tutorial/blob/3.enumeration/nft-contract/src/enumeration.rs"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"nft_token"})}),"\n",(0,r.jsxs)(t.p,{children:["This function should return a paginated list of ",(0,r.jsx)(t.code,{children:"JsonTokens"})," that are stored on the contract regardless of their owners.\nIf the user provides a ",(0,r.jsx)(t.code,{children:"from_index"})," parameter, you should use that as the starting point for which to start iterating through tokens; otherwise it should start from the beginning. Likewise, if the user provides a ",(0,r.jsx)(t.code,{children:"limit"})," parameter, the function shall stop after reaching either the limit or the end of the list."]}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["Rust has useful methods for pagination, allowing you to skip to a starting index and taking the first ",(0,r.jsx)(t.code,{children:"n"})," elements of an iterator."]})}),"\n",(0,r.jsx)(a.Ey,{language:"rust",start:"11",end:"27",url:"https://github.com/near-examples/nft-tutorial/blob/3.enumeration/nft-contract/src/enumeration.rs"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"nft_supply_for_owner"})}),"\n",(0,r.jsxs)(t.p,{children:["This function should look for all the non-fungible tokens for a user-defined owner, and return the length of the resulting set.\nIf there isn't a set of tokens for the provided ",(0,r.jsx)(t.code,{children:"AccountID"}),", then the function shall return ",(0,r.jsx)(t.code,{children:"0"}),"."]}),"\n",(0,r.jsx)(a.Ey,{language:"rust",start:"28",end:"43",url:"https://github.com/near-examples/nft-tutorial/blob/3.enumeration/nft-contract/src/enumeration.rs"}),"\n",(0,r.jsx)(t.p,{children:"Next, you can use the CLI to query these new methods and validate that they work correctly."}),"\n",(0,r.jsx)(t.h2,{id:"redeploying-contract",children:"Redeploying the contract"}),"\n",(0,r.jsxs)(t.p,{children:["Now that you've implemented the necessary logic for ",(0,r.jsx)(t.code,{children:"nft_tokens_for_owner"}),", it's time to build and re-deploy the contract to your account. Using the build script, deploy the contract as you did in the previous tutorials:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"yarn build && near deploy $NFT_CONTRACT_ID out/main.wasm\n"})}),"\n",(0,r.jsxs)(t.p,{children:["This should output a warning saying that the account has a deployed contract and will ask if you'd like to proceed. Simply type ",(0,r.jsx)(t.code,{children:"y"})," and hit enter."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"This account already has a deployed contract [ AKJK7sCysrWrFZ976YVBnm6yzmJuKLzdAyssfzK9yLsa ]. Do you want to proceed? (y/n)\n"})}),"\n",(0,r.jsx)(t.h2,{id:"enumerating-tokens",children:"Enumerating tokens"}),"\n",(0,r.jsx)(t.p,{children:"Once the updated contract has been redeployed, you can test and see if these new functions work as expected."}),"\n",(0,r.jsx)(t.h3,{id:"nft-tokens",children:"NFT tokens"}),"\n",(0,r.jsx)(t.p,{children:"Let's query for a list of non-fungible tokens on the contract. Use the following command to query for the information of up to 50 NFTs starting from the 10th item:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'near view $NFT_CONTRACT_ID nft_tokens \'{"from_index": "10", "limit": 50}\'\n'})}),"\n",(0,r.jsx)(t.p,{children:"This command should return an output similar to the following:"}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"Example response: "}),(0,r.jsx)("p",{children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:"[]\n"})})})]}),"\n",(0,r.jsx)(t.h3,{id:"tokens-by-owner",children:"Tokens by owner"}),"\n",(0,r.jsxs)(t.p,{children:["To get the total supply of NFTs owned by the ",(0,r.jsx)(t.code,{children:"goteam.testnet"})," account, call the ",(0,r.jsx)(t.code,{children:"nft_supply_for_owner"})," function and set the ",(0,r.jsx)(t.code,{children:"account_id"})," parameter:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'near view $NFT_CONTRACT_ID nft_supply_for_owner \'{"account_id": "goteam.testnet"}\'\n'})}),"\n",(0,r.jsx)(t.p,{children:"This should return an output similar to the following:"}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"Example response: "}),(0,r.jsx)("p",{children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:"0\n"})})})]}),"\n",(0,r.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,r.jsxs)(t.p,{children:["In this tutorial, you have added two ",(0,r.jsx)(t.a,{href:"/tutorials/nfts/enumeration#modifications-to-the-contract",children:"new enumeration functions"}),", and now you have a basic NFT smart contract with minting and enumeration methods in place. After implementing these modifications, you redeployed the smart contract and tested the functions using the CLI."]}),"\n",(0,r.jsxs)(t.p,{children:["In the ",(0,r.jsx)(t.a,{href:"/tutorials/nfts/core",children:"next tutorial"}),", you'll implement the core functions needed to allow users to transfer the minted tokens."]}),"\n",(0,r.jsx)(t.admonition,{title:"Remember",type:"info",children:(0,r.jsxs)(t.p,{children:["If you want to see the finished code from this tutorial, you can checkout the ",(0,r.jsx)(t.code,{children:"3.enumeration"})," branch."]})}),"\n",(0,r.jsxs)(t.admonition,{title:"Versioning for this article",type:"note",children:[(0,r.jsx)(t.p,{children:"At the time of this writing, this example works with the following versions:"}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["near-cli: ",(0,r.jsx)(t.code,{children:"4.0.4"})]}),"\n",(0,r.jsxs)(t.li,{children:["NFT standard: ",(0,r.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Core",children:"NEP171"}),", version ",(0,r.jsx)(t.code,{children:"1.1.0"})]}),"\n",(0,r.jsxs)(t.li,{children:["Enumeration standard: ",(0,r.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Enumeration",children:"NEP181"}),", version ",(0,r.jsx)(t.code,{children:"1.0.0"})]}),"\n"]})]})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>i});n(67294);var r=n(36905);const o={tabItem:"tabItem_Ymn6"};var a=n(85893);function i(e){var t=e.children,n=e.hidden,i=e.className;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(67294),o=n(36905),a=n(12466),i=n(16550),s=n(20469),l=n(91980),u=n(67392),c=n(50012);function d(e){var t,n;return null!=(t=null==(n=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function h(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:function(e){return d(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function f(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function p(e){var t=e.queryString,n=void 0!==t&&t,o=e.groupId,a=(0,i.k6)(),s=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:o});return[(0,l._X)(s),(0,r.useCallback)((function(e){if(s){var t=new URLSearchParams(a.location.search);t.set(s,e),a.replace(Object.assign({},a.location,{search:t.toString()}))}}),[s,a])]}function m(e){var t,n,o,a,i=e.defaultValue,l=e.queryString,u=void 0!==l&&l,d=e.groupId,m=h(e),g=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var o=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:i,tabValues:m})})),x=g[0],y=g[1],j=p({queryString:u,groupId:d}),b=j[0],v=j[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),n=(0,c.Nk)(t),o=n[0],a=n[1],[o,(0,r.useCallback)((function(e){t&&a.set(e)}),[t,a])]),k=w[0],T=w[1],_=function(){var e=null!=b?b:k;return f({value:e,tabValues:m})?e:null}();return(0,s.Z)((function(){_&&y(_)}),[_]),{selectedValue:x,selectValue:(0,r.useCallback)((function(e){if(!f({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);y(e),v(e),T(e)}),[v,T,m]),tabValues:m}}var g=n(72389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=n(85893);function j(e){var t=e.className,n=e.block,r=e.selectedValue,i=e.selectValue,s=e.tabValues,l=[],u=(0,a.o5)().blockElementScrollPositionUntilNextRender,c=function(e){var t=e.currentTarget,n=l.indexOf(t),o=s[n].value;o!==r&&(u(t),i(o))},d=function(e){var t,n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var r,o=l.indexOf(e.currentTarget)+1;n=null!=(r=l[o])?r:l[0];break;case"ArrowLeft":var a,i=l.indexOf(e.currentTarget)-1;n=null!=(a=l[i])?a:l[l.length-1]}null==(t=n)||t.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t),children:s.map((function(e){var t=e.value,n=e.label,a=e.attributes;return(0,y.jsx)("li",Object.assign({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:function(e){return l.push(e)},onKeyDown:d,onClick:c},a,{className:(0,o.Z)("tabs__item",x.tabItem,null==a?void 0:a.className,{"tabs__item--active":r===t}),children:null!=n?n:t}),t)}))})}function b(e){var t=e.lazy,n=e.children,o=e.selectedValue,a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var i=a.find((function(e){return e.props.value===o}));return i?(0,r.cloneElement)(i,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:a.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==o})}))})}function v(e){var t=m(e);return(0,y.jsxs)("div",{className:(0,o.Z)("tabs-container",x.tabList),children:[(0,y.jsx)(j,Object.assign({},e,t)),(0,y.jsx)(b,Object.assign({},e,t))]})}function w(e){var t=(0,g.Z)();return(0,y.jsx)(v,Object.assign({},e,{children:d(e.children)}),String(t))}},77229:(e,t,n)=>{n.d(t,{Ey:()=>c,O2:()=>l,SQ:()=>u});n(67294);var r=n(74866),o=n(85162),a=n(95665),i=n.n(a),s=n(85893);function l(e){var t=e.children;return Array.isArray(t)||(t=[t]),(0,s.jsx)(r.Z,{className:"language-tabs",groupId:"code-tabs",children:t.map((function(e,t){return(0,s.jsx)(o.Z,{value:e.props.value,label:e.props.value,children:e})}))})}function u(e){var t=e.children,n=e.language;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var n=e.props,r=(n.children,n.url),o=n.start,a=n.end,i=n.fname;if(e.type===c)return c({url:r,start:o,end:a,language:t,fname:i});return e}(e,n)})),1==t.length?(0,s.jsx)(o.Z,{value:0,label:t[0].props.fname,children:t[0]}):(0,s.jsx)(r.Z,{className:"file-tabs",children:t.map((function(e,t){return(0,s.jsx)(o.Z,{value:t,label:e.props.fname,children:e})}))})}function c(e){var t=e.url,n=e.start,r=e.end,o=e.language,a=e.fname,l=t+"#";return n&&r&&(l+="L"+n+"-L"+r+"#"),(0,s.jsx)(i(),{language:o,fname:a,children:l})}}}]);