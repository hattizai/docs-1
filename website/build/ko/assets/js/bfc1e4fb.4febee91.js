"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4009],{64618:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var a=t(85893),r=t(11151),i=t(74866),o=t(85162);const s={id:"deploy",title:"NEAR CLI - Basics",sidebar_label:"Deploying and Using"},c=void 0,l={id:"develop/deploy",title:"NEAR CLI - Basics",description:"After your contract is ready you can deploy it in the NEAR network for everyone to use it.",source:"@site/../docs/2.develop/deploy.md",sourceDirName:"2.develop",slug:"/develop/deploy",permalink:"/ko/develop/deploy",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.develop/deploy.md",tags:[],version:"current",lastUpdatedBy:"gagdiez",lastUpdatedAt:1696019367,formattedLastUpdatedAt:"2023\ub144 9\uc6d4 29\uc77c",frontMatter:{id:"deploy",title:"NEAR CLI - Basics",sidebar_label:"Deploying and Using"},sidebar:"contracts",previous:{title:"Workspaces Migration",permalink:"/ko/develop/testing/workspaces-migration"},next:{title:"Updating Contracts",permalink:"/ko/develop/upgrade"}},d={},u=[{value:"Deploying the Contract",id:"deploying-the-contract",level:2},{value:"Create an Account and Deploy",id:"create-an-account-and-deploy",level:4},{value:"Deploy in an Existing Account",id:"deploy-in-an-existing-account",level:4},{value:"Initializing the Contract",id:"initializing-the-contract",level:2},{value:"Calling the Contract",id:"calling-the-contract",level:2},{value:"View methods",id:"view-methods",level:3},{value:"Change methods",id:"change-methods",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"After your contract is ready you can deploy it in the NEAR network for everyone to use it."}),"\n",(0,a.jsxs)(n.p,{children:["Let us guide you on how to use the ",(0,a.jsx)(n.a,{href:"/ko/tools/near-cli",children:"NEAR CLI"})," to deploy your contract\nand call its methods."]}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["On this page, we will only cover the basics of NEAR CLI. For more information visit the\n",(0,a.jsx)(n.a,{href:"/ko/tools/near-cli",children:"NEAR CLI documentation page"}),"."]})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"deploying-the-contract",children:"Deploying the Contract"}),"\n",(0,a.jsxs)(n.p,{children:["Thanks to the ",(0,a.jsx)(n.code,{children:"NEAR CLI"})," deploying a contract is as simple as:"]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Compiling the contract to wasm (done automatically through ",(0,a.jsx)(n.code,{children:"yarn build"})," in our templates)."]}),"\n",(0,a.jsxs)(n.li,{children:["Deploy it into the desired account using the ",(0,a.jsx)(n.a,{href:"/ko/tools/near-cli#near-deploy",children:"NEAR CLI"}),":"]}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"create-an-account-and-deploy",children:"Create an Account and Deploy"}),"\n",(0,a.jsxs)(i.Z,{className:"language-tabs",groupId:"code-tabs",children:[(0,a.jsx)(o.Z,{value:"near-cli",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# Automatically deploy the wasm in a new account\nnear dev-deploy <route_to_wasm>\n\n# Get the account name\ncat ./neardev/dev-account\n"})})}),(0,a.jsx)(o.Z,{value:"near-cli-rs",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# Automatically deploy the wasm in a new account\nnear account create-account sponsor-by-faucet-service <my-new-dev-account>.testnet autogenerate-new-keypair save-to-keychain network-config testnet create\n\nnear contract deploy <my-new-dev-account>.testnet use-file <route_to_wasm> without-init-call network-config testnet sign-with-keychain\n"})})})]}),"\n",(0,a.jsx)(n.h4,{id:"deploy-in-an-existing-account",children:"Deploy in an Existing Account"}),"\n",(0,a.jsxs)(i.Z,{className:"language-tabs",groupId:"code-tabs",children:[(0,a.jsx)(o.Z,{value:"near-cli",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# login into your account\nnear login\n\n# deploy the contract\nnear deploy <accountId> <route_to_wasm>\n"})})}),(0,a.jsx)(o.Z,{value:"near-cli-rs",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# login into your account\nnear account import-account using-web-wallet network-config testnet\n\n# deploy the contract\nnear contract deploy <accountId> use-file <route_to_wasm> without-init-call network-config testnet sign-with-keychain send\n"})})})]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsx)(n.p,{children:"You can overwrite a contract by deploying another on top of it. In this case, the account's logic\nwill change, but the state will persist"})}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["By default ",(0,a.jsx)(n.code,{children:"near-cli"})," uses the ",(0,a.jsx)(n.code,{children:"testnet"})," network. Define ",(0,a.jsx)(n.code,{children:"NEAR_ENV=mainnet"})," to deploy into ",(0,a.jsx)(n.code,{children:"mainnet"}),"."]})}),"\n",(0,a.jsxs)(n.admonition,{title:"Naming Convention for Public-Facing Methods",type:"info",children:[(0,a.jsx)(n.p,{children:"Once the contract is deployed to the network, anyone and any other contract (i.e., any other account on NEAR) can interact with it by calling its methods. Furthermore, any transactions involving the contract will also be included in the network's data stream, which means its activity can also be visible to any who listens to particular events."}),(0,a.jsxs)(n.p,{children:["Considering this, we advise to name methods using ",(0,a.jsx)(n.code,{children:"snake_case"})," in all SDKs as this is compatible with the remainder of the NEAR ecosystem which is predominantly comprised of Rust contracts."]})]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"initializing-the-contract",children:"Initializing the Contract"}),"\n",(0,a.jsxs)(n.p,{children:["If your contract has an ",(0,a.jsx)(n.a,{href:"/ko/develop/contracts/anatomy#initialization-functions",children:"initialization method"})," you can call it to\ninitialize the state. This is not necessary if your contract implements ",(0,a.jsx)(n.code,{children:"default"})," values for the state."]}),"\n",(0,a.jsxs)(i.Z,{className:"language-tabs",groupId:"code-tabs",children:[(0,a.jsx)(o.Z,{value:"near-cli",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# Call the initialization method (`init` in our examples)\nnear call <contractId> <initMethod> [<args>] --accountId <accountId>\n"})})}),(0,a.jsx)(o.Z,{value:"near-cli-rs",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# Call the initialization method (`init` in our examples)\nnear contract call-function as-transaction <contractId> <initMethod> json-args [<args>] prepaid-gas '30 TeraGas' attached-deposit '0 NEAR' sign-as <accountId> network-config testnet sign-with-keychain send\n"})})})]}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["You can initialize your contract ",(0,a.jsx)(n.a,{href:"#deploying-the-contract",children:"during deployment"})," using the ",(0,a.jsx)(n.code,{children:"--initFunction"})," & ",(0,a.jsx)(n.code,{children:"--initArgs"})," arguments."]})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"calling-the-contract",children:"Calling the Contract"}),"\n",(0,a.jsxs)(n.p,{children:["Once your contract is deployed you can interact with it right away using ",(0,a.jsx)(n.a,{href:"/ko/tools/near-cli",children:"NEAR CLI"}),"."]}),"\n",(0,a.jsx)("hr",{class:"subsection"}),"\n",(0,a.jsx)(n.h3,{id:"view-methods",children:"View methods"}),"\n",(0,a.jsxs)(n.p,{children:["View methods are those that perform ",(0,a.jsx)(n.strong,{children:"read-only"})," operations. Calling these methods is free, and do not require to specify which account is being used to make the call:"]}),"\n",(0,a.jsxs)(i.Z,{className:"language-tabs",groupId:"code-tabs",children:[(0,a.jsx)(o.Z,{value:"near-cli",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"near view <contractId> <methodName>\n"})})}),(0,a.jsx)(o.Z,{value:"near-cli-rs",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"near contract call-function as-read-only <contractId> <methodName> text-args '' network-config testnet now\n"})})})]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsx)(n.p,{children:"View methods have by default 200 TGAS for execution"})}),"\n",(0,a.jsx)("hr",{class:"subsection"}),"\n",(0,a.jsx)(n.h3,{id:"change-methods",children:"Change methods"}),"\n",(0,a.jsx)(n.p,{children:"Change methods are those that perform both read and write operations. For these methods we do need to specify the account being used to make the call,\nsince that account will expend GAS in the call."}),"\n",(0,a.jsxs)(i.Z,{className:"language-tabs",groupId:"code-tabs",children:[(0,a.jsx)(o.Z,{value:"near-cli",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"near call <contractId> <methodName> <jsonArgs> --accountId <yourAccount> [--deposit <amount>] [--gas <GAS>]\n"})})}),(0,a.jsx)(o.Z,{value:"near-cli-rs",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"near contract call-function as-transaction <AccountId> <MethodName> json-args <JsonArgs> prepaid-gas <PrepaidGas> attached-deposit <AttachedDeposit> sign-as <AccountId>  network-config testnet sign-with-keychain send\n"})})})]})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>o});t(67294);var a=t(36905);const r={tabItem:"tabItem_Ymn6"};var i=t(85893);function o(e){var n=e.children,t=e.hidden,o=e.className;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,o),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>w});var a=t(67294),r=t(36905),i=t(12466),o=t(16550),s=t(20469),c=t(91980),l=t(67392),d=t(50012);function u(e){var n,t;return null!=(n=null==(t=a.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,a.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function h(e){var n=e.values,t=e.children;return(0,a.useMemo)((function(){var e=null!=n?n:function(e){return u(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,l.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function p(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function g(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId,i=(0,o.k6)(),s=function(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:t,groupId:r});return[(0,c._X)(s),(0,a.useCallback)((function(e){if(s){var n=new URLSearchParams(i.location.search);n.set(s,e),i.replace(Object.assign({},i.location,{search:n.toString()}))}}),[s,i])]}function m(e){var n,t,r,i,o=e.defaultValue,c=e.queryString,l=void 0!==c&&c,u=e.groupId,m=h(e),f=(0,a.useState)((function(){return function(e){var n,t=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var r=null!=(n=a.find((function(e){return e.default})))?n:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:o,tabValues:m})})),v=f[0],y=f[1],x=g({queryString:l,groupId:u}),b=x[0],j=x[1],w=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),t=(0,d.Nk)(n),r=t[0],i=t[1],[r,(0,a.useCallback)((function(e){n&&i.set(e)}),[n,i])]),k=w[0],I=w[1],N=function(){var e=null!=b?b:k;return p({value:e,tabValues:m})?e:null}();return(0,s.Z)((function(){N&&y(N)}),[N]),{selectedValue:v,selectValue:(0,a.useCallback)((function(e){if(!p({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);y(e),j(e),I(e)}),[j,I,m]),tabValues:m}}var f=t(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=t(85893);function x(e){var n=e.className,t=e.block,a=e.selectedValue,o=e.selectValue,s=e.tabValues,c=[],l=(0,i.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var n=e.currentTarget,t=c.indexOf(n),r=s[t].value;r!==a&&(l(n),o(r))},u=function(e){var n,t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var a,r=c.indexOf(e.currentTarget)+1;t=null!=(a=c[r])?a:c[0];break;case"ArrowLeft":var i,o=c.indexOf(e.currentTarget)-1;t=null!=(i=c[o])?i:c[c.length-1]}null==(n=t)||n.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:s.map((function(e){var n=e.value,t=e.label,i=e.attributes;return(0,y.jsx)("li",Object.assign({role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:function(e){return c.push(e)},onKeyDown:u,onClick:d},i,{className:(0,r.Z)("tabs__item",v.tabItem,null==i?void 0:i.className,{"tabs__item--active":a===n}),children:null!=t?t:n}),n)}))})}function b(e){var n=e.lazy,t=e.children,r=e.selectedValue,i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var o=i.find((function(e){return e.props.value===r}));return o?(0,a.cloneElement)(o,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:i.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})}))})}function j(e){var n=m(e);return(0,y.jsxs)("div",{className:(0,r.Z)("tabs-container",v.tabList),children:[(0,y.jsx)(x,Object.assign({},e,n)),(0,y.jsx)(b,Object.assign({},e,n))]})}function w(e){var n=(0,f.Z)();return(0,y.jsx)(j,Object.assign({},e,{children:u(e.children)}),String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>o});var a=t(67294);const r={},i=a.createContext(r);function o(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);