"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6942],{36664:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var a=t(85893),o=t(11151),l=t(74866),r=t(85162);const c={id:"wallet",title:"Interacting with the Wallet",sidebar_label:"Wallet"},s=void 0,i={id:"tools/near-api-js/wallet",title:"Interacting with the Wallet",description:"Wallet interaction is possible only in the browser, because NEAR's Wallet is web-based.",source:"@site/../docs/4.tools/near-api-js/naj-wallet.md",sourceDirName:"4.tools/near-api-js",slug:"/tools/near-api-js/wallet",permalink:"/tools/near-api-js/wallet",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/4.tools/near-api-js/naj-wallet.md",tags:[],version:"current",lastUpdatedBy:"gagdiez",lastUpdatedAt:1701811626,formattedLastUpdatedAt:"Dec 5, 2023",frontMatter:{id:"wallet",title:"Interacting with the Wallet",sidebar_label:"Wallet"},sidebar:"tools",previous:{title:"Using JavaScript API",permalink:"/tools/near-api-js/quick-reference"},next:{title:"Account",permalink:"/tools/near-api-js/account"}},u={},d=[{value:"Creating Wallet Connection",id:"wallet-connection",level:3},{value:"Ask your user to Sign In",id:"sign-in",level:3},{value:"Sign Out your user",id:"sign-out",level:3},{value:"Check if Signed In",id:"check-if-signed-in",level:3},{value:"Get Wallet Account",id:"get-authorized-account",level:3},{value:"Get Account ID (as string)",id:"get-authorized-account-id",level:4},{value:"Get Account Object",id:"get-authorized-account-object",level:4}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Wallet interaction is possible only in the browser, because NEAR's Wallet is web-based."}),"\n",(0,a.jsx)(n.p,{children:"Most frequent action is Sign In. Your user is redirected to the Wallet page to authorize your application.\nOnce the user has Signed In, an access key is saved in browser's LocalStorage.\nAll following actions that require the access key will be allowed.\nIn case a user needs to authorize a transaction that has a deposit attached, your user will be automatically redirected to the Wallet again."}),"\n",(0,a.jsx)(n.h3,{id:"wallet-connection",children:"Creating Wallet Connection"}),"\n",(0,a.jsxs)(n.p,{children:["In Wallet connection you use a LocalStorage ",(0,a.jsx)(n.a,{href:"/tools/near-api-js/quick-reference#key-store",children:(0,a.jsx)(n.code,{children:"KeyStore"})}),"."]}),"\n",(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(r.Z,{value:"testnet",label:"TestNet",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'const { connect, keyStores, WalletConnection } = nearAPI;\n\nconst connectionConfig = {\n  networkId: "testnet",\n  keyStore: new keyStores.BrowserLocalStorageKeyStore(),\n  nodeUrl: "https://rpc.testnet.near.org",\n  walletUrl: "https://testnet.mynearwallet.com/",\n  helperUrl: "https://helper.testnet.near.org",\n  explorerUrl: "https://explorer.testnet.near.org",\n};\n\n// connect to NEAR\nconst nearConnection = await connect(connectionConfig);\n\n// create wallet connection\nconst walletConnection = new WalletConnection(nearConnection);\n'})})}),(0,a.jsx)(r.Z,{value:"mainnet",label:"MainNet",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'const { connect, keyStores, WalletConnection } = nearAPI;\n\nconst connectionConfig = {\n  networkId: "mainnet",\n  keyStore: new keyStores.BrowserLocalStorageKeyStore(),\n  nodeUrl: "https://rpc.mainnet.near.org",\n  walletUrl: "https://wallet.mainnet.near.org",\n  helperUrl: "https://helper.mainnet.near.org",\n  explorerUrl: "https://explorer.mainnet.near.org",\n};\n\n// connect to NEAR\nconst nearConnection = await connect(connectionConfig);\n\n// create wallet connection\nconst walletConnection = new WalletConnection(nearConnection);\n'})})})]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsxs)(n.a,{href:"https://near.github.io/near-api-js/modules/near_api_js.browserConnect.html",children:[(0,a.jsx)("span",{class:"typedoc-icon typedoc-icon-module"})," Module ",(0,a.jsx)(n.code,{children:"browserConnect"})]}),"\n\xa0\xa0\xa0\n",(0,a.jsxs)(n.a,{href:"https://near.github.io/near-api-js/classes/_near_js_wallet_account.walletAccount.WalletConnection.html",children:[(0,a.jsx)("span",{class:"typedoc-icon typedoc-icon-class"})," Class ",(0,a.jsx)(n.code,{children:"WalletConnection"})]})]}),"\n",(0,a.jsx)(n.h3,{id:"sign-in",children:"Ask your user to Sign In"}),"\n",(0,a.jsxs)(n.p,{children:["You first create a ",(0,a.jsx)(n.a,{href:"#wallet-connection",children:"WalletConnection"}),", and then call ",(0,a.jsx)(n.code,{children:"requestSignIn"}),".\nThis will redirect the current page to the Wallet authentication page.\nYou can configure success and failure redirect URLs."]}),"\n",(0,a.jsxs)(n.p,{children:["This action creates an access key that will be stored in the browser's local storage.\nYou can optionally list ",(0,a.jsx)(n.code,{children:"methodNames"})," you want to allow for the access key.\nIf you don't specify ",(0,a.jsx)(n.code,{children:"methodNames"})," or pass an empty array, then all methods are allowed to be called (the access key will be created with permissions to call all methods)."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'// const walletConnection = new WalletConnection(nearConnection);\nwalletConnection.requestSignIn({\n  contractId: "example-contract.testnet.REPLACE_ME",\n  methodNames: [], // optional\n  successUrl: "REPLACE_ME://.com/success", // optional redirect URL on success\n  failureUrl: "REPLACE_ME://.com/failure", // optional redirect URL on failure\n});\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsxs)(n.a,{href:"https://near.github.io/near-api-js/classes/_near_js_wallet_account.walletAccount.WalletConnection.html#requestSignIn",children:[(0,a.jsx)("span",{class:"typedoc-icon typedoc-icon-method"})," Method ",(0,a.jsx)(n.code,{children:"WalletConnection.requestSignIn"})]})}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["Sign In is ",(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.em,{children:"not required"})})," if you are using an alternative key store to local storage, or you are not signing transactions (meaning - you are only calling read-only ",(0,a.jsx)(n.em,{children:"view"})," methods on a contract)"]})}),"\n",(0,a.jsx)(n.h3,{id:"sign-out",children:"Sign Out your user"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"// const walletConnection = new WalletConnection(nearConnection);\nwalletConnection.signOut();\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsxs)(n.a,{href:"https://near.github.io/near-api-js/classes/_near_js_wallet_account.walletAccount.WalletConnection.html#signOut",children:[(0,a.jsx)("span",{class:"typedoc-icon typedoc-icon-method"})," Method ",(0,a.jsx)(n.code,{children:"WalletConnection.signOut"})]})}),"\n",(0,a.jsx)(n.h3,{id:"check-if-signed-in",children:"Check if Signed In"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"// const walletConnection = new WalletConnection(nearConnection);\nif (walletConnection.isSignedIn()) {\n  // user is signed in\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsxs)(n.a,{href:"https://near.github.io/near-api-js/classes/_near_js_wallet_account.walletAccount.WalletConnection.html#isSignedIn",children:[(0,a.jsx)("span",{class:"typedoc-icon typedoc-icon-method"})," Method ",(0,a.jsx)(n.code,{children:"WalletConnection.isSignedId"})]})}),"\n",(0,a.jsx)(n.h3,{id:"get-authorized-account",children:"Get Wallet Account"}),"\n",(0,a.jsxs)(n.p,{children:["Get the ",(0,a.jsx)(n.a,{href:"/tools/near-api-js/account",children:"Account"})," your user has signed in with in the Wallet."]}),"\n",(0,a.jsx)(n.h4,{id:"get-authorized-account-id",children:"Get Account ID (as string)"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"// const walletConnection = new WalletConnection(nearConnection);\nconst walletAccountId = walletConnection.getAccountId();\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsxs)(n.a,{href:"https://near.github.io/near-api-js/classes/_near_js_wallet_account.walletAccount.WalletConnection.html#getAccountId",children:[(0,a.jsx)("span",{class:"typedoc-icon typedoc-icon-method"})," Method ",(0,a.jsx)(n.code,{children:"WalletConnection.getAccountId"})]})}),"\n",(0,a.jsx)(n.h4,{id:"get-authorized-account-object",children:"Get Account Object"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"// const walletConnection = new WalletConnection(nearConnection);\nconst walletAccountObj = walletConnection.account();\n"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsxs)(n.a,{href:"https://near.github.io/near-api-js/classes/_near_js_wallet_account.walletAccount.WalletConnection.html#account",children:[(0,a.jsx)("span",{class:"typedoc-icon typedoc-icon-method"})," Method ",(0,a.jsx)(n.code,{children:"WalletConnection.account"})]}),"\n\xa0\xa0\xa0\n",(0,a.jsxs)(n.a,{href:"https://near.github.io/near-api-js/classes/_near_js_wallet_account.walletAccount.ConnectedWalletAccount.html",children:[(0,a.jsx)("span",{class:"typedoc-icon typedoc-icon-class"})," Class ",(0,a.jsx)(n.code,{children:"ConnectedWalletAccount"})]})]})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>r});t(67294);var a=t(36905);const o={tabItem:"tabItem_Ymn6"};var l=t(85893);function r(e){var n=e.children,t=e.hidden,r=e.className;return(0,l.jsx)("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,r),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>y});var a=t(67294),o=t(36905),l=t(12466),r=t(16550),c=t(20469),s=t(91980),i=t(67392),u=t(50012);function d(e){var n,t;return null!=(n=null==(t=a.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,a.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function h(e){var n=e.values,t=e.children;return(0,a.useMemo)((function(){var e=null!=n?n:function(e){return d(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,i.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function p(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function g(e){var n=e.queryString,t=void 0!==n&&n,o=e.groupId,l=(0,r.k6)(),c=function(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:t,groupId:o});return[(0,s._X)(c),(0,a.useCallback)((function(e){if(c){var n=new URLSearchParams(l.location.search);n.set(c,e),l.replace(Object.assign({},l.location,{search:n.toString()}))}}),[c,l])]}function j(e){var n,t,o,l,r=e.defaultValue,s=e.queryString,i=void 0!==s&&s,d=e.groupId,j=h(e),f=(0,a.useState)((function(){return function(e){var n,t=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var o=null!=(n=a.find((function(e){return e.default})))?n:a[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:r,tabValues:j})})),m=f[0],b=f[1],w=g({queryString:i,groupId:d}),x=w[0],v=w[1],y=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),t=(0,u.Nk)(n),o=t[0],l=t[1],[o,(0,a.useCallback)((function(e){n&&l.set(e)}),[n,l])]),C=y[0],I=y[1],_=function(){var e=null!=x?x:C;return p({value:e,tabValues:j})?e:null}();return(0,c.Z)((function(){_&&b(_)}),[_]),{selectedValue:m,selectValue:(0,a.useCallback)((function(e){if(!p({value:e,tabValues:j}))throw new Error("Can't select invalid tab value="+e);b(e),v(e),I(e)}),[v,I,j]),tabValues:j}}var f=t(72389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(85893);function w(e){var n=e.className,t=e.block,a=e.selectedValue,r=e.selectValue,c=e.tabValues,s=[],i=(0,l.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var n=e.currentTarget,t=s.indexOf(n),o=c[t].value;o!==a&&(i(n),r(o))},d=function(e){var n,t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var a,o=s.indexOf(e.currentTarget)+1;t=null!=(a=s[o])?a:s[0];break;case"ArrowLeft":var l,r=s.indexOf(e.currentTarget)-1;t=null!=(l=s[r])?l:s[s.length-1]}null==(n=t)||n.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n),children:c.map((function(e){var n=e.value,t=e.label,l=e.attributes;return(0,b.jsx)("li",Object.assign({role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:function(e){return s.push(e)},onKeyDown:d,onClick:u},l,{className:(0,o.Z)("tabs__item",m.tabItem,null==l?void 0:l.className,{"tabs__item--active":a===n}),children:null!=t?t:n}),n)}))})}function x(e){var n=e.lazy,t=e.children,o=e.selectedValue,l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var r=l.find((function(e){return e.props.value===o}));return r?(0,a.cloneElement)(r,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:l.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==o})}))})}function v(e){var n=j(e);return(0,b.jsxs)("div",{className:(0,o.Z)("tabs-container",m.tabList),children:[(0,b.jsx)(w,Object.assign({},e,n)),(0,b.jsx)(x,Object.assign({},e,n))]})}function y(e){var n=(0,f.Z)();return(0,b.jsx)(v,Object.assign({},e,{children:d(e.children)}),String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>r});var a=t(67294);const o={},l=a.createContext(o);function r(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);