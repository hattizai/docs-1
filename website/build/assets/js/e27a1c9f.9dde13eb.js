"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[96079],{68188:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var a=r(85893),n=r(11151);r(74866),r(85162);const s={id:"cookbook",title:"Common Use Cases",sidebar_label:"Cookbook"},o=void 0,c={id:"tools/near-api-js/cookbook",title:"Common Use Cases",description:"The repository contains many recipes that you can readily use to solve common case scenarios.",source:"@site/../docs/4.tools/near-api-js/cookbook.md",sourceDirName:"4.tools/near-api-js",slug:"/tools/near-api-js/cookbook",permalink:"/tools/near-api-js/cookbook",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/4.tools/near-api-js/cookbook.md",tags:[],version:"current",lastUpdatedBy:"gagdiez",lastUpdatedAt:1711375194e3,frontMatter:{id:"cookbook",title:"Common Use Cases",sidebar_label:"Cookbook"}},i={},l=[];function u(e){const t={a:"a",code:"code",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["The repository contains ",(0,a.jsx)(t.a,{href:"https://github.com/near/near-api-js/blob/master/packages/cookbook",children:"many recipes"})," that you can readily use to solve common case scenarios."]}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Name"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.strong,{children:"ACCOUNTS"})}),(0,a.jsx)(t.td,{})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"https://github.com/near/near-api-js/blob/master/packages/cookbook/accounts/create-testnet-account.js",children:"Create Account"})}),(0,a.jsxs)(t.td,{children:["Create ",(0,a.jsx)(t.a,{href:"/concepts/protocol/account-model",children:"NEAR accounts"})," without using NEAR Wallet."]})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"https://github.com/near/near-api-js/tree/master/packages/cookbook/accounts/access-keys",children:"Access Key Rotation"})}),(0,a.jsxs)(t.td,{children:["Create and delete ",(0,a.jsx)(t.a,{href:"/concepts/protocol/access-keys",children:"access keys"})," for added security."]})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.strong,{children:"TRANSACTIONS"})}),(0,a.jsx)(t.td,{})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"https://github.com/near/near-api-js/blob/master/packages/cookbook/transactions/get-tx-status.js",children:"Get Transaction Status"})}),(0,a.jsx)(t.td,{children:"Gets transaction status using a tx hash and associated account/contract ID."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"https://github.com/near/near-api-js/blob/master/packages/cookbook/transactions/get-tx-detail.js",children:"Recent Transaction Details"})}),(0,a.jsxs)(t.td,{children:["Get recent transaction details without using an ",(0,a.jsx)(t.a,{href:"https://near-indexers.io/docs/projects/near-indexer-framework",children:"indexing"})," service."]})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"https://github.com/near/near-api-js/blob/master/packages/cookbook/transactions/batch-transactions.js",children:"Batch Transactions"})}),(0,a.jsxs)(t.td,{children:["Sign and send multiple ",(0,a.jsx)(t.a,{href:"/concepts/protocol/transactions",children:"transactions"}),"."]})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.strong,{children:"UTILS"})}),(0,a.jsx)(t.td,{})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"https://github.com/near/near-api-js/blob/master/packages/cookbook/utils/deploy-contract.js",children:"Deploy Contract"})}),(0,a.jsx)(t.td,{children:"Deploys a smart contract using a pre-compiled WASM file."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"https://github.com/near/near-api-js/blob/master/packages/cookbook/utils/calculate-gas.js",children:"Calculate Gas"})}),(0,a.jsxs)(t.td,{children:["Calculate ",(0,a.jsx)(t.a,{href:"/concepts/protocol/gas",children:"gas burnt"})," from any contract call."]})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"https://github.com/near/near-api-js/blob/master/packages/cookbook/utils/get-state.js",children:"Read State w/o Account"})}),(0,a.jsx)(t.td,{children:"Read state of a contract without instantiating an account."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsxs)(t.td,{children:[(0,a.jsx)(t.a,{href:"https://github.com/near/near-api-js/blob/master/packages/cookbook/utils/wrap-near.js",children:"Wrap"})," & ",(0,a.jsx)(t.a,{href:"https://github.com/near/near-api-js/blob/master/packages/cookbook/utils/unwrap-near.js",children:"Unwrap"}),"  NEAR"]}),(0,a.jsxs)(t.td,{children:["Wrap and unwrap NEAR using the ",(0,a.jsx)(t.code,{children:"wrap.near"})," smart contract."]})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"https://github.com/near/near-api-js/blob/master/packages/cookbook/utils/verify-signature.js",children:"Verify Signature"})}),(0,a.jsx)(t.td,{children:"Verify a key pair signature."})]})]})]})]})}function d(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},85162:(e,t,r)=>{r.d(t,{Z:()=>o});r(67294);var a=r(36905);const n={tabItem:"tabItem_Ymn6"};var s=r(85893);function o(e){var t=e.children,r=e.hidden,o=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.Z)(n.tabItem,o),hidden:r,children:t})}},74866:(e,t,r)=>{r.d(t,{Z:()=>y});var a=r(67294),n=r(36905),s=r(12466),o=r(16550),c=r(20469),i=r(91980),l=r(67392),u=r(50012);function d(e){var t,r;return null!=(t=null==(r=a.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,a.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?t:[]}function h(e){var t=e.values,r=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:function(e){return d(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(r);return function(e){var t=(0,l.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,r])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function b(e){var t=e.queryString,r=void 0!==t&&t,n=e.groupId,s=(0,o.k6)(),c=function(e){var t=e.queryString,r=void 0!==t&&t,a=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:r,groupId:n});return[(0,i._X)(c),(0,a.useCallback)((function(e){if(c){var t=new URLSearchParams(s.location.search);t.set(c,e),s.replace(Object.assign({},s.location,{search:t.toString()}))}}),[c,s])]}function f(e){var t,r,n,s,o=e.defaultValue,i=e.queryString,l=void 0!==i&&i,d=e.groupId,f=h(e),j=(0,a.useState)((function(){return function(e){var t,r=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var n=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:o,tabValues:f})})),m=j[0],x=j[1],g=b({queryString:l,groupId:d}),v=g[0],k=g[1],y=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),r=(0,u.Nk)(t),n=r[0],s=r[1],[n,(0,a.useCallback)((function(e){t&&s.set(e)}),[t,s])]),w=y[0],C=y[1],T=function(){var e=null!=v?v:w;return p({value:e,tabValues:f})?e:null}();return(0,c.Z)((function(){T&&x(T)}),[T]),{selectedValue:m,selectValue:(0,a.useCallback)((function(e){if(!p({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);x(e),k(e),C(e)}),[k,C,f]),tabValues:f}}var j=r(72389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=r(85893);function g(e){var t=e.className,r=e.block,a=e.selectedValue,o=e.selectValue,c=e.tabValues,i=[],l=(0,s.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var t=e.currentTarget,r=i.indexOf(t),n=c[r].value;n!==a&&(l(t),o(n))},d=function(e){var t,r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var a,n=i.indexOf(e.currentTarget)+1;r=null!=(a=i[n])?a:i[0];break;case"ArrowLeft":var s,o=i.indexOf(e.currentTarget)-1;r=null!=(s=i[o])?s:i[i.length-1]}null==(t=r)||t.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":r},t),children:c.map((function(e){var t=e.value,r=e.label,s=e.attributes;return(0,x.jsx)("li",Object.assign({role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:function(e){return i.push(e)},onKeyDown:d,onClick:u},s,{className:(0,n.Z)("tabs__item",m.tabItem,null==s?void 0:s.className,{"tabs__item--active":a===t}),children:null!=r?r:t}),t)}))})}function v(e){var t=e.lazy,r=e.children,n=e.selectedValue,s=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){var o=s.find((function(e){return e.props.value===n}));return o?(0,a.cloneElement)(o,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n})}))})}function k(e){var t=f(e);return(0,x.jsxs)("div",{className:(0,n.Z)("tabs-container",m.tabList),children:[(0,x.jsx)(g,Object.assign({},e,t)),(0,x.jsx)(v,Object.assign({},e,t))]})}function y(e){var t=(0,j.Z)();return(0,x.jsx)(k,Object.assign({},e,{children:d(e.children)}),String(t))}},11151:(e,t,r)=>{r.d(t,{Z:()=>c,a:()=>o});var a=r(67294);const n={},s=a.createContext(n);function o(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);