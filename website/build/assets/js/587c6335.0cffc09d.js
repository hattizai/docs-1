"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6016],{52927:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var a=n(85893),r=n(11151),s=n(74866),c=n(85162),o=n(77229);const i={id:"escrow",title:"Escrow Contract"},l=void 0,u={id:"tutorials/examples/escrow",title:"Escrow Contract",description:"This example provides a simple implementation of an escrow contract, with a timeout callable function that concludes the transaction if the buyer has not provided approval within a given timeframe.",source:"@site/../docs/3.tutorials/examples/escrow.md",sourceDirName:"3.tutorials/examples",slug:"/tutorials/examples/escrow",permalink:"/tutorials/examples/escrow",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/examples/escrow.md",tags:[],version:"current",lastUpdatedBy:"gagdiez",lastUpdatedAt:1702155614,formattedLastUpdatedAt:"Dec 9, 2023",frontMatter:{id:"escrow",title:"Escrow Contract"}},h={},d=[{value:"Starting with the Project",id:"starting-with-the-project",level:2},{value:"Interacting With the Contract",id:"interacting-with-the-contract",level:3},{value:"1. Install Dependencies",id:"1-install-dependencies",level:4},{value:"1. Build the Contracts",id:"1-build-the-contracts",level:4},{value:"2. Deploy the Contracts",id:"2-deploy-the-contracts",level:4},{value:"3. Initialize the Assets Contract",id:"3-initialize-the-assets-contract",level:4},{value:"3. Perform a Purchase on Escrow",id:"3-perform-a-purchase-on-escrow",level:4},{value:"4. Check the Balance of the Buyer Account",id:"4-check-the-balance-of-the-buyer-account",level:4},{value:"5. Approve the Purchase",id:"5-approve-the-purchase",level:4},{value:"Contract",id:"contract",level:3},{value:"Testing",id:"testing",level:2},{value:"Moving Forward",id:"moving-forward",level:2}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"This example provides a simple implementation of an escrow contract, with a timeout callable function that concludes the transaction if the buyer has not provided approval within a given timeframe."}),"\n",(0,a.jsx)(t.p,{children:"The code also includes an example of how contracts can pass data to each other through cross contract calls, and how the caller contract can handle the result."}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsx)(t.p,{children:"This example does not have a frontend"})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"starting-with-the-project",children:"Starting with the Project"}),"\n",(0,a.jsx)(t.p,{children:"You have two options to start using the project:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"The first and recommended is to open the project through Gitpod, which will open a web-based interactive environment with all dependencies installed."}),"\n",(0,a.jsxs)(t.li,{children:["The second option is to clone the repository locally, for which you will need to install all the ",(0,a.jsx)(t.a,{href:"/develop/prerequisites",children:"Prerequisites"}),"."]}),"\n"]}),"\n",(0,a.jsx)(s.Z,{className:"language-tabs",groupId:"code-tabs",children:(0,a.jsx)(c.Z,{value:"\ud83c\udf10 JavaScript",children:(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Gitpod"}),(0,a.jsx)(t.th,{children:"Clone Locally"})]})}),(0,a.jsx)(t.tbody,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)("a",{href:"https://gitpod.io/#https://github.com/near-examples/escrow-js",children:(0,a.jsx)("img",{src:"https://gitpod.io/button/open-in-gitpod.svg",alt:"Open in Gitpod"})})}),(0,a.jsxs)(t.td,{children:["\ud83c\udf10 ",(0,a.jsx)(t.code,{children:"https://github.com/near-examples/escrow-js.git"})]})]})})]})})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h3,{id:"interacting-with-the-contract",children:"Interacting With the Contract"}),"\n",(0,a.jsxs)(t.p,{children:["Since this example does not have a frontend, we will interact with it using the ",(0,a.jsx)(t.a,{href:"/tools/near-cli",children:"NEAR CLI"})," or writing tests using ",(0,a.jsx)(t.a,{href:"/develop/testing/integration-test",children:(0,a.jsx)(t.code,{children:"workspaces-js"})}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["Check the project's ",(0,a.jsx)(t.a,{href:"https://github.com/near-examples/escrow-js/blob/master/README.md",children:"README.md"}),". Briefly, you will need to:"]}),"\n",(0,a.jsx)(t.h4,{id:"1-install-dependencies",children:"1. Install Dependencies"}),"\n",(0,a.jsx)(t.p,{children:"To install dependencies, run:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"npm i\n"})}),"\n",(0,a.jsx)(t.h4,{id:"1-build-the-contracts",children:"1. Build the Contracts"}),"\n",(0,a.jsxs)(t.p,{children:["You can build the contracts (creating the ",(0,a.jsx)(t.code,{children:".wasm"})," files that will be deployed to the network) by running:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"npm run build\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Once finished, check the ",(0,a.jsx)(t.code,{children:"build/"})," folder and you should see the ",(0,a.jsx)(t.code,{children:"escrow.wasm"})," file. This is the file that will be deployed to the network alongside the ",(0,a.jsx)(t.code,{children:"assets.wasm"})," file that is used to manage ownership for assets."]}),"\n",(0,a.jsx)(t.h4,{id:"2-deploy-the-contracts",children:"2. Deploy the Contracts"}),"\n",(0,a.jsx)(t.p,{children:"To deploy the escrow contract to testnet, run:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"near deploy --wasmFile build/escrow.wasm --accountId <your-escrow-testnet-account-id>\n"})}),"\n",(0,a.jsx)(t.p,{children:"To deploy the assets contract to testnet, run:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"near deploy --wasmFile build/assets.wasm --accountId <your-assets-testnet-account-id>\n"})}),"\n",(0,a.jsx)(t.h4,{id:"3-initialize-the-assets-contract",children:"3. Initialize the Assets Contract"}),"\n",(0,a.jsx)(t.p,{children:"To initialize the assets contract, run:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'near call <your-assets-testnet-account-id> init \'{"owner_id": "<your-asset-owner-account-id>", "total_supply": "1000", "escrow_contract_id": "<your-escrow-testnet-account-id>", "asset_price": "100000000000000000000000"}\' --accountId <your-assets-testnet-account-id>\n'})}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"asset_price"})," is the price of the asset in yoctoNEAR (10^-24 NEAR). In this example, the price is set to 0.1 NEAR."]}),"\n",(0,a.jsx)(t.h4,{id:"3-perform-a-purchase-on-escrow",children:"3. Perform a Purchase on Escrow"}),"\n",(0,a.jsx)(t.p,{children:"To perform a purchase on the escrow contract, run:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'near call <your-escrow-testnet-account-id> purchase_in_escrow \'{"seller_account_id": "<your-asset-owner-account-id>", "asset_contract_id ": "<your-assets-testnet-account-id>"}\' --accountId <your-account-id> --amount 0.11 --gas=300000000000000\n'})}),"\n",(0,a.jsx)(t.p,{children:"Since we set the price of the asset to 0.1 NEAR, we need to send 0.11 NEAR to the escrow contract to cover the price of the asset and gas costs."}),"\n",(0,a.jsx)(t.h4,{id:"4-check-the-balance-of-the-buyer-account",children:"4. Check the Balance of the Buyer Account"}),"\n",(0,a.jsx)(t.p,{children:"To check the asset balance of the buyer account after the escrow purchase, run:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'near view <your-assets-testnet-account-id> get_account_assets \'{"account_id": "<your-account-id>"}\'\n'})}),"\n",(0,a.jsx)(t.p,{children:"You may also check the NEAR balance of the seller account, making sure they have not received the payment yet:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"near state <your-asset-owner-account-id>\n"})}),"\n",(0,a.jsx)(t.h4,{id:"5-approve-the-purchase",children:"5. Approve the Purchase"}),"\n",(0,a.jsx)(t.p,{children:"To approve the purchase, run:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"near call <your-escrow-testnet-account-id> approve_purchase '{}' --accountId <your-account-id>\n"})}),"\n",(0,a.jsx)(t.p,{children:"Check the NEAR balance of the seller account again, and you should see that they have received the payment."}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h3,{id:"contract",children:"Contract"}),"\n",(0,a.jsx)(t.p,{children:"The contract exposes methods to purchase assets in escrow and approve or cancel the purchase by the buyer. Additionally, the contract exposes a method to check the creation time of the purchase, and if the purchase has been created a day or longer ago, the contract will approve the purchase without the buyer's input."}),"\n",(0,a.jsx)(o.O2,{children:(0,a.jsx)(o.SQ,{value:"\ud83c\udf10 JavaScript",language:"js",children:(0,a.jsx)(o.Ey,{fname:"contract.ts",url:"https://github.com/near-examples/escrow-js/blob/master/contracts/escrow.js",start:"41",end:"119"})})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"testing",children:"Testing"}),"\n",(0,a.jsxs)(t.p,{children:["When writing smart contracts it is critical to test all methods exhaustively. In this\nproject we test the contract methods using ",(0,a.jsx)(t.code,{children:"workspaces-js"}),". Before digging into the tests,\ngo ahead and perform the tests present in the dApp through the command ",(0,a.jsx)(t.code,{children:"npm test"}),". This will run the tests in ",(0,a.jsx)(t.code,{children:"tests/main.ava.js"}),". Test names and outcomes are printed to the console."]}),"\n",(0,a.jsx)(o.O2,{children:(0,a.jsx)(o.SQ,{value:"\ud83c\udf10 JavaScript",language:"js",children:(0,a.jsx)(o.Ey,{fname:"main.ava.js",url:"https://github.com/near-examples/escrow-js/blob/master/tests/main.ava.js",start:"4",end:"78"})})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"moving-forward",children:"Moving Forward"}),"\n",(0,a.jsxs)(t.p,{children:["A nice way to learn is by trying to expand a contract. Modify the ",(0,a.jsx)(t.code,{children:"escrow-js"})," example to use an ",(0,a.jsx)(t.a,{href:"/tutorials/nfts/introduction",children:"NFT"}),"\ncontract!. In this way, you can try to make functionality where a user purchases an NFT in escrow! Remember to correctly ",(0,a.jsx)(t.a,{href:"/develop/contracts/crosscontract#callback-method",children:"handle the callback"}),",\nand to return the money to the user in case of errors."]})]})}function m(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>c});n(67294);var a=n(36905);const r={tabItem:"tabItem_Ymn6"};var s=n(85893);function c(e){var t=e.children,n=e.hidden,c=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,c),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>y});var a=n(67294),r=n(36905),s=n(12466),c=n(16550),o=n(20469),i=n(91980),l=n(67392),u=n(50012);function h(e){var t,n;return null!=(t=null==(n=a.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,a.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function d(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:function(e){return h(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,l.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,s=(0,c.k6)(),o=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:r});return[(0,i._X)(o),(0,a.useCallback)((function(e){if(o){var t=new URLSearchParams(s.location.search);t.set(o,e),s.replace(Object.assign({},s.location,{search:t.toString()}))}}),[o,s])]}function f(e){var t,n,r,s,c=e.defaultValue,i=e.queryString,l=void 0!==i&&i,h=e.groupId,f=d(e),v=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:c,tabValues:f})})),j=v[0],x=v[1],b=m({queryString:l,groupId:h}),g=b[0],w=b[1],y=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:h}.groupId),n=(0,u.Nk)(t),r=n[0],s=n[1],[r,(0,a.useCallback)((function(e){t&&s.set(e)}),[t,s])]),k=y[0],I=y[1],T=function(){var e=null!=g?g:k;return p({value:e,tabValues:f})?e:null}();return(0,o.Z)((function(){T&&x(T)}),[T]),{selectedValue:j,selectValue:(0,a.useCallback)((function(e){if(!p({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);x(e),w(e),I(e)}),[w,I,f]),tabValues:f}}var v=n(72389);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(85893);function b(e){var t=e.className,n=e.block,a=e.selectedValue,c=e.selectValue,o=e.tabValues,i=[],l=(0,s.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var t=e.currentTarget,n=i.indexOf(t),r=o[n].value;r!==a&&(l(t),c(r))},h=function(e){var t,n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var a,r=i.indexOf(e.currentTarget)+1;n=null!=(a=i[r])?a:i[0];break;case"ArrowLeft":var s,c=i.indexOf(e.currentTarget)-1;n=null!=(s=i[c])?s:i[i.length-1]}null==(t=n)||t.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t),children:o.map((function(e){var t=e.value,n=e.label,s=e.attributes;return(0,x.jsx)("li",Object.assign({role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:function(e){return i.push(e)},onKeyDown:h,onClick:u},s,{className:(0,r.Z)("tabs__item",j.tabItem,null==s?void 0:s.className,{"tabs__item--active":a===t}),children:null!=n?n:t}),t)}))})}function g(e){var t=e.lazy,n=e.children,r=e.selectedValue,s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var c=s.find((function(e){return e.props.value===r}));return c?(0,a.cloneElement)(c,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})}))})}function w(e){var t=f(e);return(0,x.jsxs)("div",{className:(0,r.Z)("tabs-container",j.tabList),children:[(0,x.jsx)(b,Object.assign({},e,t)),(0,x.jsx)(g,Object.assign({},e,t))]})}function y(e){var t=(0,v.Z)();return(0,x.jsx)(w,Object.assign({},e,{children:h(e.children)}),String(t))}},77229:(e,t,n)=>{n.d(t,{Ey:()=>u,O2:()=>i,SQ:()=>l});n(67294);var a=n(74866),r=n(85162),s=n(95665),c=n.n(s),o=n(85893);function i(e){var t=e.children;return Array.isArray(t)||(t=[t]),(0,o.jsx)(a.Z,{className:"language-tabs",groupId:"code-tabs",children:t.map((function(e,t){return(0,o.jsx)(r.Z,{value:e.props.value,label:e.props.value,children:e})}))})}function l(e){var t=e.children,n=e.language;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var n=e.props,a=(n.children,n.url),r=n.start,s=n.end,c=n.fname;if(e.type===u)return u({url:a,start:r,end:s,language:t,fname:c});return e}(e,n)})),1==t.length?(0,o.jsx)(r.Z,{value:0,label:t[0].props.fname,children:t[0]}):(0,o.jsx)(a.Z,{className:"file-tabs",children:t.map((function(e,t){return(0,o.jsx)(r.Z,{value:t,label:e.props.fname,children:e})}))})}function u(e){var t=e.url,n=e.start,a=e.end,r=e.language,s=e.fname,i=t+"#";return n&&a&&(i+="L"+n+"-L"+a+"#"),(0,o.jsx)(c(),{language:r,fname:s,children:i})}}}]);