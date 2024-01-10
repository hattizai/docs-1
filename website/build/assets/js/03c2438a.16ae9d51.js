"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1703],{42508:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var a=n(85893),r=n(11151),s=n(74866),o=n(85162);const c={id:"prototyping",sidebar_label:"Rapid Prototyping",title:"Upgrading Contracts: Rapid Prototyping"},i="Rapid Prototyping",l={id:"sdk/js/building/prototyping",title:"Upgrading Contracts: Rapid Prototyping",description:"When you change the interface of a contract and re-deploy it, you may see this error:",source:"@site/../docs/sdk/js/building/prototyping.md",sourceDirName:"sdk/js/building",slug:"/sdk/js/building/prototyping",permalink:"/sdk/js/building/prototyping",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/sdk/js/building/prototyping.md",tags:[],version:"current",lastUpdatedBy:"gagdiez",lastUpdatedAt:1696019367,formattedLastUpdatedAt:"Sep 29, 2023",frontMatter:{id:"prototyping",sidebar_label:"Rapid Prototyping",title:"Upgrading Contracts: Rapid Prototyping"},sidebar:"tools",previous:{title:"Basic Instructions",permalink:"/sdk/js/building/basics"},next:{title:"Reproducible Builds",permalink:"/sdk/js/building/reproducible-builds"}},d={},u=[{value:"Why does this happen?",id:"why-does-this-happen",level:3},{value:"How can you avoid such errors?",id:"how-can-you-avoid-such-errors",level:3},{value:"Rapid Prototyping: Delete Everything All The Time",id:"rapid-prototyping-delete-everything-all-the-time",level:2},{value:"1. <code>rm -rf neardev &amp;&amp; near dev-deploy</code>",id:"1-rm--rf-neardev--near-dev-deploy",level:3},{value:"2. Deleting &amp; recreating contract account",id:"2-deleting--recreating-contract-account",level:3}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"rapid-prototyping",children:"Rapid Prototyping"}),"\n",(0,a.jsx)(t.p,{children:"When you change the interface of a contract and re-deploy it, you may see this error:"}),"\n",(0,a.jsx)(t.p,{children:"Cannot deserialize the contract state."}),"\n",(0,a.jsx)(t.h3,{id:"why-does-this-happen",children:"Why does this happen?"}),"\n",(0,a.jsx)(t.p,{children:"When your contract is executed, the NEAR Runtime reads the serialized state from disk and attempts to load it using current contract code. When your code changes but the serialized state stays the same, it can't figure out how to do this."}),"\n",(0,a.jsx)(t.h3,{id:"how-can-you-avoid-such-errors",children:"How can you avoid such errors?"}),"\n",(0,a.jsxs)(t.p,{children:["When you're still in the Research & Development phase, building a prototype and deploying it locally or on ",(0,a.jsx)(t.a,{href:"/concepts/basics/networks",children:"testnet"}),", you can just delete all previous contract state when you make a breaking change. See below for a couple ways to do this."]}),"\n",(0,a.jsxs)(t.p,{children:["When you're ready to deploy a more stable contract, there are a couple of ",(0,a.jsx)(t.a,{href:"/develop/upgrade#migrating-the-state",children:"production strategies"}),' that will help you update the contract state without deleting it all. And once your contract graduates from "trusted mode" (when maintainers control a ',(0,a.jsx)(t.a,{href:"/concepts/basics/accounts/access-keys",children:"Full Access key"}),") to community-governed mode (no more Full Access keys), you can set up your contract to ",(0,a.jsx)(t.a,{href:"/develop/upgrade#programmatic-update",children:"upgrade itself"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"rapid-prototyping-delete-everything-all-the-time",children:"Rapid Prototyping: Delete Everything All The Time"}),"\n",(0,a.jsx)(t.p,{children:"There are two ways to delete all account state:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.code,{children:"rm -rf neardev && near dev-deploy"})}),"\n",(0,a.jsx)(t.li,{children:"Deleting & recreating contract account"}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"For both cases, let's consider the following example."}),"\n",(0,a.jsxs)(t.p,{children:["Let's say you deploy ",(0,a.jsx)(t.a,{href:"https://github.com/near/near-sdk-js/blob/263c9695ab7bb853ced12886c4b3f8663070d900/examples/src/status-message-collections.js#L10-L42",children:"a JS status message contract"})," contract to testnet, then call it with:"]}),"\n",(0,a.jsxs)(s.Z,{className:"language-tabs",groupId:"code-tabs",children:[(0,a.jsx)(o.Z,{value:"near-cli",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'near call [contract] set_status \'{"message": "lol"}\' --accountId you.testnet\nnear view [contract] get_status \'{"account_id": "you.testnet"}\'\n'})})}),(0,a.jsx)(o.Z,{value:"near-cli-rs",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"near contract call-function as-transaction [contract] set_status json-args '{\"message\": \"lol\"}' prepaid-gas '30 TeraGas' attached-deposit '0 NEAR' sign-as you.testnet network-config testnet sign-with-keychain send\n\nnear contract call-function as-read-only [contract] get_status text-args '{\"account_id\": \"you.testnet\"}' network-config testnet now\n"})})})]}),"\n",(0,a.jsxs)(t.p,{children:["This will return the message that you set with the call to ",(0,a.jsx)(t.code,{children:"set_status"}),", in this case ",(0,a.jsx)(t.code,{children:'"lol"'}),"."]}),"\n",(0,a.jsx)(t.p,{children:"At this point the contract is deployed and has some state."}),"\n",(0,a.jsxs)(t.p,{children:["Now let's say you change the contract to store two kinds of data for each account, a status message and a tagline. You can add to the contract code a ",(0,a.jsx)(t.code,{children:"LookupMap"})," for both status message and another one for the tagline, both indexed by the account ID."]}),"\n",(0,a.jsxs)(t.p,{children:["You build & deploy the contract again, thinking that maybe because the new ",(0,a.jsx)(t.code,{children:"taglines"})," LookupMap has the same prefix as the old ",(0,a.jsx)(t.code,{children:"records"})," LookupMap (the prefix is ",(0,a.jsx)(t.code,{children:"a"}),", set by ",(0,a.jsx)(t.code,{children:'new LookupMap("a"'}),"), the tagline for ",(0,a.jsx)(t.code,{children:"you.testnet"})," should be ",(0,a.jsx)(t.code,{children:'"lol"'}),". But when you ",(0,a.jsx)(t.code,{children:"near view"}),' the contract, you get the "Cannot deserialize" message. What to do?']}),"\n",(0,a.jsxs)(t.h3,{id:"1-rm--rf-neardev--near-dev-deploy",children:["1. ",(0,a.jsx)(t.code,{children:"rm -rf neardev && near dev-deploy"})]}),"\n",(0,a.jsxs)(t.p,{children:["When first getting started with a new project, the fastest way to deploy a contract is ",(0,a.jsx)(t.a,{href:"/concepts/basics/accounts/creating-accounts",children:(0,a.jsx)(t.code,{children:"dev-deploy"})}),":"]}),"\n",(0,a.jsxs)(s.Z,{className:"language-tabs",groupId:"code-tabs",children:[(0,a.jsx)(o.Z,{value:"near-cli",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"near dev-deploy [--wasmFile ./path/to/compiled.wasm]\n"})})}),(0,a.jsx)(o.Z,{value:"near-cli-rs",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"near account create-account sponsor-by-faucet-service <my-new-dev-account>.testnet autogenerate-new-keypair save-to-keychain network-config testnet create\n\nnear contract deploy <my-new-dev-account>.testnet use-file <route_to_wasm> without-init-call network-config testnet sign-with-keychain\n\n"})})})]}),"\n",(0,a.jsx)(t.p,{children:"This does a few things:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["Creates a new testnet account with a name like ",(0,a.jsx)(t.code,{children:"dev-1626793583587-89195915741581"})]}),"\n",(0,a.jsxs)(t.li,{children:["Stores this account name in a ",(0,a.jsx)(t.code,{children:"neardev"})," folder within the project"]}),"\n",(0,a.jsxs)(t.li,{children:["Stores the private key for this account in the ",(0,a.jsx)(t.code,{children:"~/.near-credentials"})," folder"]}),"\n",(0,a.jsx)(t.li,{children:"Deploys your contract code to this account"}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["The next time you run ",(0,a.jsx)(t.code,{children:"dev-deploy"}),", it checks the ",(0,a.jsx)(t.code,{children:"neardev"})," folder and re-deploys to the same account rather than making a new one."]}),"\n",(0,a.jsx)(t.p,{children:"But in the example above, we want to delete the account state. How do we do that?"}),"\n",(0,a.jsxs)(t.p,{children:["The easiest way is just to delete the ",(0,a.jsx)(t.code,{children:"neardev"})," folder, then run ",(0,a.jsx)(t.code,{children:"near dev-deploy"})," again. This will create a brand new testnet account, with its own (empty) state, and deploy the updated contract to it."]}),"\n",(0,a.jsx)(t.h3,{id:"2-deleting--recreating-contract-account",children:"2. Deleting & recreating contract account"}),"\n",(0,a.jsxs)(t.p,{children:["If you want to have a predictable account name rather than an ever-changing ",(0,a.jsx)(t.code,{children:"dev-*"})," account, the best way is probably to create a sub-account:"]}),"\n",(0,a.jsxs)(s.Z,{className:"language-tabs",groupId:"code-tabs",children:[(0,a.jsx)(o.Z,{value:"near-cli",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",metastring:'title="Create sub-account"',children:"near create-account app-name.you.testnet --masterAccount you.testnet\n"})})}),(0,a.jsx)(o.Z,{value:"near-cli-rs",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",metastring:'title="Create sub-account"',children:"near account create-account fund-myself app-name.you.testnet '100 NEAR' autogenerate-new-keypair save-to-keychain sign-as you.testnet network-config testnet sign-with-keychain send\n"})})})]}),"\n",(0,a.jsx)(t.p,{children:"Then deploy your contract to it:"}),"\n",(0,a.jsxs)(s.Z,{className:"language-tabs",groupId:"code-tabs",children:[(0,a.jsx)(o.Z,{value:"near-cli",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",metastring:'title="Deploy to sub-account"',children:"near deploy --accountId app-name.you.testnet [--wasmFile ./path/to/compiled.wasm]\n"})})}),(0,a.jsx)(o.Z,{value:"near-cli-rs",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",metastring:'title="Deploy to sub-account"',children:"near contract deploy app-name.you.testnet use-file <./path/to/compiled.wasm> without-init-call network-config testnet sign-with-keychain send\n"})})})]}),"\n",(0,a.jsx)(t.p,{children:"In this case, how do you delete all contract state and start again? Delete the sub-account and recreate it."}),"\n",(0,a.jsxs)(s.Z,{className:"language-tabs",groupId:"code-tabs",children:[(0,a.jsx)(o.Z,{value:"near-cli",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",metastring:'title="Delete sub-account"',children:"near delete app-name.you.testnet you.testnet\n"})})}),(0,a.jsx)(o.Z,{value:"near-cli-rs",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",metastring:'title="Delete sub-account"',children:"near account delete-account app-name.you.testnet beneficiary you.testnet network-config testnet sign-with-keychain send\n"})})})]}),"\n",(0,a.jsxs)(t.p,{children:["This sends all funds still on the ",(0,a.jsx)(t.code,{children:"app-name.you.testnet"})," account to ",(0,a.jsx)(t.code,{children:"you.testnet"})," and deletes the contract that had been deployed to it, including all contract state."]}),"\n",(0,a.jsx)(t.p,{children:"Now you create the sub-account and deploy to it again using the commands above, and it will have empty state like it did the first time you deployed it."})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>o});n(67294);var a=n(36905);const r={tabItem:"tabItem_Ymn6"};var s=n(85893);function o(e){var t=e.children,n=e.hidden,o=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,o),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(67294),r=n(36905),s=n(12466),o=n(16550),c=n(20469),i=n(91980),l=n(67392),d=n(50012);function u(e){var t,n;return null!=(t=null==(n=a.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,a.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function h(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:function(e){return u(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,l.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function g(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,s=(0,o.k6)(),c=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:r});return[(0,i._X)(c),(0,a.useCallback)((function(e){if(c){var t=new URLSearchParams(s.location.search);t.set(c,e),s.replace(Object.assign({},s.location,{search:t.toString()}))}}),[c,s])]}function y(e){var t,n,r,s,o=e.defaultValue,i=e.queryString,l=void 0!==i&&i,u=e.groupId,y=h(e),m=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:o,tabValues:y})})),b=m[0],f=m[1],v=g({queryString:l,groupId:u}),j=v[0],x=v[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),n=(0,d.Nk)(t),r=n[0],s=n[1],[r,(0,a.useCallback)((function(e){t&&s.set(e)}),[t,s])]),k=w[0],N=w[1],I=function(){var e=null!=j?j:k;return p({value:e,tabValues:y})?e:null}();return(0,c.Z)((function(){I&&f(I)}),[I]),{selectedValue:b,selectValue:(0,a.useCallback)((function(e){if(!p({value:e,tabValues:y}))throw new Error("Can't select invalid tab value="+e);f(e),x(e),N(e)}),[x,N,y]),tabValues:y}}var m=n(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=n(85893);function v(e){var t=e.className,n=e.block,a=e.selectedValue,o=e.selectValue,c=e.tabValues,i=[],l=(0,s.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=i.indexOf(t),r=c[n].value;r!==a&&(l(t),o(r))},u=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var a,r=i.indexOf(e.currentTarget)+1;n=null!=(a=i[r])?a:i[0];break;case"ArrowLeft":var s,o=i.indexOf(e.currentTarget)-1;n=null!=(s=i[o])?s:i[i.length-1]}null==(t=n)||t.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t),children:c.map((function(e){var t=e.value,n=e.label,s=e.attributes;return(0,f.jsx)("li",Object.assign({role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:function(e){return i.push(e)},onKeyDown:u,onClick:d},s,{className:(0,r.Z)("tabs__item",b.tabItem,null==s?void 0:s.className,{"tabs__item--active":a===t}),children:null!=n?n:t}),t)}))})}function j(e){var t=e.lazy,n=e.children,r=e.selectedValue,s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var o=s.find((function(e){return e.props.value===r}));return o?(0,a.cloneElement)(o,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:s.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})}))})}function x(e){var t=y(e);return(0,f.jsxs)("div",{className:(0,r.Z)("tabs-container",b.tabList),children:[(0,f.jsx)(v,Object.assign({},e,t)),(0,f.jsx)(j,Object.assign({},e,t))]})}function w(e){var t=(0,m.Z)();return(0,f.jsx)(x,Object.assign({},e,{children:u(e.children)}),String(t))}},11151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>o});var a=n(67294);const r={},s=a.createContext(r);function o(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);