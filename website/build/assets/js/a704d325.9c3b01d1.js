"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[56],{89221:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var r=t(85893),a=t(11151),o=t(74866),i=t(85162);const s={id:"web-app",title:"Web Application",hide_table_of_contents:!1},l=void 0,c={id:"primitives/linkdrop/interacting/web-app",title:"Web Application",description:"This section describes how to create different kinds of linkdrop directly from a web app.",source:"@site/../docs/7.primitives/linkdrop/interacting/web-app.md",sourceDirName:"7.primitives/linkdrop/interacting",slug:"/primitives/linkdrop/interacting/web-app",permalink:"/primitives/linkdrop/interacting/web-app",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/7.primitives/linkdrop/interacting/web-app.md",tags:[],version:"current",lastUpdatedBy:"Damian Parrino",lastUpdatedAt:1703272292,formattedLastUpdatedAt:"Dec 22, 2023",frontMatter:{id:"web-app",title:"Web Application",hide_table_of_contents:!1},sidebar:"primitives",previous:{title:"NEAR Component",permalink:"/primitives/linkdrop/interacting/bos"},next:{title:"NEAR CLI",permalink:"/primitives/linkdrop/interacting/near-cli"}},d={},u=[{value:"Getting key pairs",id:"getting-key-pairs",level:2},{value:"Simple Drop",id:"simple-drop",level:2},{value:"NFT Drop",id:"nft-drop",level:2},{value:"Creating a drop",id:"creating-a-drop",level:3},{value:"Getting drop id",id:"getting-drop-id",level:3},{value:"Transferring NFT",id:"transferring-nft",level:3},{value:"FT Drop",id:"ft-drop",level:2},{value:"Creating a drop",id:"creating-a-drop-1",level:3},{value:"Transferring FT",id:"transferring-ft",level:3},{value:"Function Call Drop",id:"function-call-drop",level:2},{value:"Building drop links",id:"building-drop-links",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",...(0,a.a)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"This section describes how to create different kinds of linkdrop directly from a web app."}),"\n",(0,r.jsx)(n.p,{children:"In order to create any kind of drop, you need to first generate key pairs."}),"\n",(0,r.jsxs)(n.p,{children:["You will need to create one key per drop you want to generate, and you will always pass the ",(0,r.jsx)(n.code,{children:"public"})," part of the key to create the drop, and give the ",(0,r.jsx)(n.code,{children:"private"})," part of the key to the user you want to receive the drop."]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["All the examples are using a ",(0,r.jsx)(n.code,{children:"Wallet"})," object, which comes from our ",(0,r.jsx)(n.a,{href:"https://github.com/near-examples/hello-near-js/blob/master/frontend/near-wallet.js",children:"basic template"})]})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"getting-key-pairs",children:"Getting key pairs"}),"\n",(0,r.jsxs)(o.Z,{children:[(0,r.jsx)(i.Z,{value:"near-api-js",label:"near-api-js",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import { KeyPair } from 'near-api-js';\n\nconst newKeyPair = KeyPair.fromRandom('ed25519');\nnewKeyPair.public_key = newKeyPair.publicKey.toString();\n"})})}),(0,r.jsx)(i.Z,{value:"Keypom API",label:"Keypom API",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'const state = {};\n\nconst dropsNumber = "2";\nconst keysGeneratorUrl = "https://keypom.sctuts.com/keypair/";\n\nfetch(keysGeneratorUrl + dropsNumber + "/rootEntrophy").then((res) => {\n  const keyPairs = JSON.parse(res.body);\n  const pubKeys = [];\n  const privKeys = [];\n\n  keyPairs.forEach((e) => {\n    pubKeys.push(e.pub);\n    privKeys.push(e.priv);\n  });\n\n  state.publicKeys = pubKeys;\n  state.privKeys = privKeys;\n});\n'})})})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"simple-drop",children:"Simple Drop"}),"\n",(0,r.jsx)(n.p,{children:"This snippet will enable you to create a simple $NEAR drop. A simple drop allows you to onboard both existing and new users."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'import { Wallet } from \'./near-wallet\';\n\nconst KEYPOM_CONTRACT_ADDRESS = "v2.keypom.near";\nconst DROP_AMOUNT = "10000000000000000000000"; // 0.1 NEAR\n\nconst wallet = new Wallet({ createAccessKeyFor: KEYPOM_CONTRACT_ADDRESS }); \n\nawait wallet.callMethod({\n  method: "create_drop",\n  contractId: KEYPOM_CONTRACT_ADDRESS,\n  args: {\n    public_keys: state.publicKeys,\n    deposit_per_use: DROP_AMOUNT,\n  },\n  deposit: "23000000000000000000000" // state.publicKeys.length * dropAmount + 3000000000000000000000,\n  gas: "100000000000000",\n});\n'})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"nft-drop",children:"NFT Drop"}),"\n",(0,r.jsx)(n.p,{children:"This snippet will enable you to create a NFT Drop."}),"\n",(0,r.jsxs)(n.p,{children:["First of all, you need to create a NFT. See you how to do it from a web app ",(0,r.jsx)(n.a,{href:"/primitives/nft/interacting/web-app#mint-a-nft",children:"here"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Then you need to create a drop. You can do it exactly the same way as for a simple drop, but pass extended object as ",(0,r.jsx)(n.code,{children:"args"}),":"]}),"\n",(0,r.jsx)("hr",{class:"subsection"}),"\n",(0,r.jsx)(n.h3,{id:"creating-a-drop",children:"Creating a drop"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'import { Wallet } from \'./near-wallet\';\n\nconst KEYPOM_CONTRACT_ADDRESS = "v2.keypom.near";\nconst NFT_CONTRACT_ADDRESS = "nft.primitives.near";\nconst DROP_AMOUNT = "10000000000000000000000";\n\nconst keypomConnectedWallet = new Wallet({ createAccessKeyFor: KEYPOM_CONTRACT_ADDRESS }); \nconst nftConnectedWallet = new Wallet({ createAccessKeyFor: NFT_CONTRACT_ADDRESS });\n\nawait wallet.callMethod({\n  method: "create_drop",\n  contractId: KEYPOM_CONTRACT_ADDRESS,\n  args: {\n    public_keys: state.publicKeys,\n    deposit_per_use: DROP_AMOUNT,\n    nft: {\n      // Who will be sending the NFTs to the Keypom contract\n      sender_id: accountId, // TODO How to get it\n      // NFT Contract Id that the tokens will come from\n      contract_id: NFT_CONTRACT_ADDRESS,\n    },\n  },\n  deposit: "23000000000000000000000" // state.publicKeys.length * dropAmount + 3000000000000000000000,\n  gas: "100000000000000",\n});\n'})}),"\n",(0,r.jsx)("hr",{class:"subsection"}),"\n",(0,r.jsx)(n.h3,{id:"getting-drop-id",children:"Getting drop id"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const dropSupplyForOwner = await wallet.viewMethod({\n  contractId: KEYPOM_CONTRACT_ADDRESS\n  method: 'get_drop_supply_for_owner',\n  args: { account_id: accountId },\n});\n\nconst dropsForOwner = await wallet.viewMethod({\n  contractId: KEYPOM_CONTRACT_ADDRESS\n  method: 'get_drops_for_owner',\n  args: { account_id: accountId, from_index: (dropSupplyForOwner - 1).toString() }\n});\n\nconst dropId = dropsForOwner[dropsForOwner.length - 1].drop_id;\n"})}),"\n",(0,r.jsx)("hr",{class:"subsection"}),"\n",(0,r.jsx)(n.h3,{id:"transferring-nft",children:"Transferring NFT"}),"\n",(0,r.jsx)(n.p,{children:"Then you should to transfer your NFT to KeyPom contract."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'import { Wallet } from \'./near-wallet\';\n\nconst KEYPOM_CONTRACT_ADDRESS = "v2.keypom.near";\nconst NFT_CONTRACT_ADDRESS = "nft.primitives.near";\nconst NFT_TOKEN_ID = "1";\nconst DROP_AMOUNT = "10000000000000000000000";\n\nconst nftConnectedWallet = new Wallet({ createAccessKeyFor: NFT_CONTRACT_ADDRESS }); \n\nawait wallet.callMethod({\n  method: "nft_transfer_call",\n  contractId: NFT_CONTRACT_ADDRESS,\n  args: {\n    receiver_id: keypomContract,\n    token_id: nftTokenId,\n    msg: dropId.toString()\n  },\n  deposit: 1,\n  gas: "100000000000000",\n});\n'})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"ft-drop",children:"FT Drop"}),"\n",(0,r.jsx)(n.p,{children:"This snippet will enable you to create a FT Drop."}),"\n",(0,r.jsxs)(n.p,{children:["The process is very similar to creating ",(0,r.jsx)(n.a,{href:"#nft-drop",children:"NFT drop"}),". You just need to transfer FTs to KeyPom contract instead of transferring NFT and pass another set of arguments during creating drop."]}),"\n",(0,r.jsx)("hr",{class:"subsection"}),"\n",(0,r.jsx)(n.h3,{id:"creating-a-drop-1",children:"Creating a drop"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'import { Wallet } from \'./near-wallet\';\n\nconst KEYPOM_CONTRACT_ADDRESS = "v2.keypom.near";\nconst FT_CONTRACT_ADDRESS = "ft.primitives.near";\nconst DROP_AMOUNT = "10000000000000000000000";\n\nconst wallet = new Wallet({ createAccessKeyFor: KEYPOM_CONTRACT_ADDRESS }); \n\nawait wallet.callMethod({\n  method: "create_drop",\n  contractId: KEYPOM_CONTRACT_ADDRESS,\n  args: {\n    public_keys: state.publicKeys,\n    deposit_per_use: DROP_AMOUNT,\n    ftData: {\n      contractId: FT_CONTRACT_ADDRESS,\n      senderId: accountId, // TODO How to get account id\n      // This balance per use is balance of human readable FTs per use. \n      amount: "1"\n      // Alternatively, you could use absoluteAmount, which is dependant on the decimals value of the FT\n      // ex. if decimals of an ft = 8, then 1 FT token would be absoluteAmount = 100000000\n    },\n  },\n  deposit: "23000000000000000000000" // state.publicKeys.length * dropAmount + 3000000000000000000000,\n  gas: "100000000000000",\n});\n'})}),"\n",(0,r.jsx)("hr",{class:"subsection"}),"\n",(0,r.jsx)(n.h3,{id:"transferring-ft",children:"Transferring FT"}),"\n",(0,r.jsx)(n.p,{children:"Then you should to transfer your FTs to KeyPom contract."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'import { Wallet } from \'./near-wallet\';\n\nconst KEYPOM_CONTRACT_ADDRESS = "v2.keypom.near";\nconst FT_CONTRACT_ADDRESS = "ft.primitives.near";\n\nconst wallet = new Wallet({ createAccessKeyFor: FT_CONTRACT_ADDRESS }); \n\nawait wallet.callMethod({\n  method: "ft_transfer",\n  contractId: FT_CONTRACT_ADDRESS,\n  args: {\n    receiver_id: KEYPOM_CONTRACT_ADDRESS,\n    amount: "1"\n  },\n  deposit: "1",\n  gas: "100000000000000"\n});\n'})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Keypom contract have to be registered at FT contract. How to register accounts at FT contracts you can find ",(0,r.jsx)(n.a,{href:"/primitives/ft/interacting/web-app#register-user",children:"here"}),"."]})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"function-call-drop",children:"Function Call Drop"}),"\n",(0,r.jsx)(n.p,{children:"This snippet will enable you to create a Function Call Drop."}),"\n",(0,r.jsxs)(n.p,{children:["The process is very similar to creating ",(0,r.jsx)(n.a,{href:"#nft-drop",children:"NFT drop"}),". You just need to  ass another set of arguments during creating drop."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'import { Wallet } from \'./near-wallet\';\n\nconst KEYPOM_CONTRACT_ADDRESS = "v2.keypom.near";\nconst NFT_CONTRACT_ADDRESS = "nft.primitives.near";\nconst NFT_TOKEN_ID = "1";\nconst DROP_AMOUNT = "10000000000000000000000";\n\nconst wallet = new Wallet({ createAccessKeyFor: DAO_CONTRACT_ADDRESS });\n\nawait wallet.callMethod({\n  method: "create_drop",\n  contractId: KEYPOM_CONTRACT_ADDRESS,\n  args: {\n    public_keys: state.publicKeys,\n    deposit_per_use: DROP_AMOUNT,\n    fcData: {\n      // 2D array of function calls. In this case, there is 1 function call to make for a key use\n      // By default, if only one array of methods is present, this array of function calls will be used for all key uses\n      methods: [\n        // Array of functions for Key use 1. \n          [{\n            receiverId: NFT_CONTRACT_ADDRESS,\n            methodName: "nft_mint",\n            args: JSON.stringify({\n            // Change this token_id if it already exists -> check explorer transaction\n                token_id: NFT_TOKEN_ID,\n                metadata: {\n                  title: "My NFT drop",\n                  description: "",\n                  media: "",\n                }\n            }),\n            accountIdField: "receiver_id",\n            // Attached deposit for when the receiver makes this function call\n            attachedDeposit: "10000000000000000000000"\n          }]\n      ]\n    }\n  },\n  deposit: "23000000000000000000000" // state.publicKeys.length * dropAmount + 3000000000000000000000,\n  gas: "100000000000000",\n});\n'})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"building-drop-links",children:"Building drop links"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'const getLinks = () => {\n  const links = [];\n\n  // It assumes that there is a array named privKeys which already contains private keys\n  privKeys.map((e, i) => {\n    const link =\n      "https://app.mynearwallet.com" + "/linkdrop/v2.keypom.near/" + e;\n    links.push(link);\n  });\n\n  return links;\n};\n'})}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Example response"}),(0,r.jsx)("p",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"[\n  'https://app.mynearwallet.com/linkdrop/v2.keypom.near/ed25519:2H32THYM8ob336yk81cZUxpidvKi34zLck6a97ypmCY8bbSAuEfrCTu9LWmWGiG9df2C6vkg2FGKGZzY9qE4aEcj',\n  'https://app.mynearwallet.com/linkdrop/v2.keypom.near/ed25519:3eoMcqKmmY9Q6qgBy3hZy65HisZ8NXQd9aGGYUGe6RRsmNpGJS5YN64MgZaBVVYJJhbFXhQ2ca3DRRBiKh1rYM48'\n]\n"})})})]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>i});t(67294);var r=t(36905);const a={tabItem:"tabItem_Ymn6"};var o=t(85893);function i(e){var n=e.children,t=e.hidden,i=e.className;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,i),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>j});var r=t(67294),a=t(36905),o=t(12466),i=t(16550),s=t(20469),l=t(91980),c=t(67392),d=t(50012);function u(e){var n,t;return null!=(n=null==(t=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function p(e){var n=e.values,t=e.children;return(0,r.useMemo)((function(){var e=null!=n?n:function(e){return u(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,c.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function h(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function m(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId,o=(0,i.k6)(),s=function(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:t,groupId:a});return[(0,l._X)(s),(0,r.useCallback)((function(e){if(s){var n=new URLSearchParams(o.location.search);n.set(s,e),o.replace(Object.assign({},o.location,{search:n.toString()}))}}),[s,o])]}function f(e){var n,t,a,o,i=e.defaultValue,l=e.queryString,c=void 0!==l&&l,u=e.groupId,f=p(e),g=(0,r.useState)((function(){return function(e){var n,t=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var a=null!=(n=r.find((function(e){return e.default})))?n:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:i,tabValues:f})})),y=g[0],v=g[1],b=m({queryString:c,groupId:u}),T=b[0],_=b[1],j=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),t=(0,d.Nk)(n),a=t[0],o=t[1],[a,(0,r.useCallback)((function(e){n&&o.set(e)}),[n,o])]),w=j[0],x=j[1],A=function(){var e=null!=T?T:w;return h({value:e,tabValues:f})?e:null}();return(0,s.Z)((function(){A&&v(A)}),[A]),{selectedValue:y,selectValue:(0,r.useCallback)((function(e){if(!h({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);v(e),_(e),x(e)}),[_,x,f]),tabValues:f}}var g=t(72389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(85893);function b(e){var n=e.className,t=e.block,r=e.selectedValue,i=e.selectValue,s=e.tabValues,l=[],c=(0,o.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var n=e.currentTarget,t=l.indexOf(n),a=s[t].value;a!==r&&(c(n),i(a))},u=function(e){var n,t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var r,a=l.indexOf(e.currentTarget)+1;t=null!=(r=l[a])?r:l[0];break;case"ArrowLeft":var o,i=l.indexOf(e.currentTarget)-1;t=null!=(o=l[i])?o:l[l.length-1]}null==(n=t)||n.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:s.map((function(e){var n=e.value,t=e.label,o=e.attributes;return(0,v.jsx)("li",Object.assign({role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:function(e){return l.push(e)},onKeyDown:u,onClick:d},o,{className:(0,a.Z)("tabs__item",y.tabItem,null==o?void 0:o.className,{"tabs__item--active":r===n}),children:null!=t?t:n}),n)}))})}function T(e){var n=e.lazy,t=e.children,a=e.selectedValue,o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var i=o.find((function(e){return e.props.value===a}));return i?(0,r.cloneElement)(i,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})}))})}function _(e){var n=f(e);return(0,v.jsxs)("div",{className:(0,a.Z)("tabs-container",y.tabList),children:[(0,v.jsx)(b,Object.assign({},e,n)),(0,v.jsx)(T,Object.assign({},e,n))]})}function j(e){var n=(0,g.Z)();return(0,v.jsx)(_,Object.assign({},e,{children:u(e.children)}),String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>i});var r=t(67294);const a={},o=r.createContext(a);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);