"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1114],{97927:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>g,frontMatter:()=>c,metadata:()=>u,toc:()=>h});var a=n(85893),r=n(11151),s=n(77229),o=n(74866),i=n(85162);const c={id:"prototyping",sidebar_label:"Rapid Prototyping",title:"Upgrading Contracts: Rapid Prototyping"},l="Rapid Prototyping",u={id:"sdk/rust/building/prototyping",title:"Upgrading Contracts: Rapid Prototyping",description:"When you change the interface of a contract and re-deploy it, you may see this error:",source:"@site/../docs/sdk/rust/building/prototyping.md",sourceDirName:"sdk/rust/building",slug:"/sdk/rust/building/prototyping",permalink:"/ko/sdk/rust/building/prototyping",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/sdk/rust/building/prototyping.md",tags:[],version:"current",lastUpdatedBy:"gagdiez",lastUpdatedAt:1702155614,formattedLastUpdatedAt:"2023\ub144 12\uc6d4 9\uc77c",frontMatter:{id:"prototyping",sidebar_label:"Rapid Prototyping",title:"Upgrading Contracts: Rapid Prototyping"},sidebar:"tools",previous:{title:"Basic Instructions",permalink:"/ko/sdk/rust/building/basics"},next:{title:"Post Processing Tools",permalink:"/ko/sdk/rust/building/post-processing"}},d={},h=[{value:"Why does this happen?",id:"why-does-this-happen",level:3},{value:"How can you avoid such errors?",id:"how-can-you-avoid-such-errors",level:3},{value:"Rapid Prototyping: Delete Everything All The Time",id:"rapid-prototyping-delete-everything-all-the-time",level:2},{value:"1. <code>rm -rf neardev &amp;&amp; near dev-deploy</code>",id:"1-rm--rf-neardev--near-dev-deploy",level:3},{value:"2. Deleting &amp; recreating contract account",id:"2-deleting--recreating-contract-account",level:3}];function p(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"rapid-prototyping",children:"Rapid Prototyping"}),"\n",(0,a.jsx)(t.p,{children:"When you change the interface of a contract and re-deploy it, you may see this error:"}),"\n",(0,a.jsx)(t.p,{children:"Cannot deserialize the contract state."}),"\n",(0,a.jsx)(t.h3,{id:"why-does-this-happen",children:"Why does this happen?"}),"\n",(0,a.jsx)(t.p,{children:"When your contract is executed, the NEAR Runtime reads the serialized state from disk and attempts to load it using current contract code. When your code changes but the serialized state stays the same, it can't figure out how to do this."}),"\n",(0,a.jsx)(t.h3,{id:"how-can-you-avoid-such-errors",children:"How can you avoid such errors?"}),"\n",(0,a.jsxs)(t.p,{children:["When you're still in the Research & Development phase, building a prototype and deploying it locally or on ",(0,a.jsx)(t.a,{href:"/concepts/basics/networks",children:"testnet"}),", you can just delete all previous contract state when you make a breaking change. See below for a couple ways to do this."]}),"\n",(0,a.jsxs)(t.p,{children:["When you're ready to deploy a more stable contract, there are a couple of ",(0,a.jsx)(t.a,{href:"/ko/develop/upgrade#migrating-the-state",children:"production strategies"}),' that will help you update the contract state without deleting it all. And once your contract graduates from "trusted mode" (when maintainers control a ',(0,a.jsx)(t.a,{href:"/concepts/basics/accounts/access-keys",children:"Full Access key"}),") to community-governed mode (no more Full Access keys), you can set up your contract to ",(0,a.jsx)(t.a,{href:"/ko/develop/upgrade#programmatic-update",children:"upgrade itself"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"rapid-prototyping-delete-everything-all-the-time",children:"Rapid Prototyping: Delete Everything All The Time"}),"\n",(0,a.jsx)(t.p,{children:"There are two ways to delete all account state:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.code,{children:"rm -rf neardev && near dev-deploy"})}),"\n",(0,a.jsx)(t.li,{children:"Deleting & recreating contract account"}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"For both cases, let's consider the following example."}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.a,{href:"https://github.com/near-examples/rust-status-message",children:"rust-status-message"})," example contract has the following structure:"]}),"\n",(0,a.jsx)(s.O2,{children:(0,a.jsx)(s.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:(0,a.jsx)(s.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/rust-status-message/blob/b5fa6f2a30559d56a3a3ea52da8c26c5d3907606/src/lib.rs",start:"5",end:"29"})})}),"\n",(0,a.jsx)(t.p,{children:"Let's say you deploy this contract to testnet, then call it with:"}),"\n",(0,a.jsxs)(o.Z,{className:"language-tabs",groupId:"code-tabs",children:[(0,a.jsx)(i.Z,{value:"near-cli",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'near call [contract] set_status \'{"message": "lol"}\' --accountId you.testnet\nnear view [contract] get_status \'{"account_id": "you.testnet"}\'\n'})})}),(0,a.jsx)(i.Z,{value:"near-cli-rs",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"near contract call-function as-transaction [contract] set_status json-args '{\"message\": \"lol\"}' prepaid-gas '30 TeraGas' attached-deposit '0 NEAR' sign-as you.testnet network-config testnet sign-with-keychain send\n\nnear contract call-function as-read-only [contract] get_status text-args '{\"account_id\": \"you.testnet\"}' network-config testnet now\n"})})})]}),"\n",(0,a.jsxs)(t.p,{children:["This will return the message that you set with the call to ",(0,a.jsx)(t.code,{children:"set_status"}),", in this case ",(0,a.jsx)(t.code,{children:'"lol"'}),"."]}),"\n",(0,a.jsx)(t.p,{children:"At this point the contract is deployed and has some state."}),"\n",(0,a.jsx)(t.p,{children:"Now let's say you change the contract to store two kinds of data for each account:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-rust",children:'#[near_bindgen]\n#[derive(BorshDeserialize, BorshSerialize)]\npub struct StatusMessage {\n    taglines: LookupMap<AccountId, String>,\n    bios: LookupMap<AccountId, String>,\n}\n\nimpl Default for StatusMessage {\n    fn default() -> Self {\n        Self {\n            taglines: LookupMap::new(b"r"),\n            bios: LookupMap::new(b"b"),\n        }\n    }\n}\n\n#[near_bindgen]\nimpl StatusMessage {\n    pub fn set_tagline(&mut self, message: String) {\n        let account_id = env::signer_account_id();\n        self.taglines.insert(&account_id, &message);\n    }\n\n    pub fn get_tagline(&self, account_id: AccountId) -> Option<String> {\n        return self.taglines.get(&account_id);\n    }\n\n    pub fn set_bio(&mut self, message: String) {\n        let account_id = env::signer_account_id();\n        self.bios.insert(&account_id, &message);\n    }\n\n    pub fn get_bio(&self, account_id: AccountId) -> Option<String> {\n        return self.bios.get(&account_id);\n    }\n}\n'})}),"\n",(0,a.jsxs)(t.p,{children:["You build & deploy the contract again, thinking that maybe because the new ",(0,a.jsx)(t.code,{children:"taglines"})," LookupMap has the same prefix as the old ",(0,a.jsx)(t.code,{children:"records"})," LookupMap (the prefix is ",(0,a.jsx)(t.code,{children:"r"}),", set by ",(0,a.jsx)(t.code,{children:'LookupMap::new(b"r".to_vec())'}),"), the tagline for ",(0,a.jsx)(t.code,{children:"you.testnet"})," should be ",(0,a.jsx)(t.code,{children:'"lol"'}),". But when you ",(0,a.jsx)(t.code,{children:"near view"}),' the contract, you get the "Cannot deserialize" message. What to do?']}),"\n",(0,a.jsxs)(t.h3,{id:"1-rm--rf-neardev--near-dev-deploy",children:["1. ",(0,a.jsx)(t.code,{children:"rm -rf neardev && near dev-deploy"})]}),"\n",(0,a.jsxs)(t.p,{children:["When first getting started with a new project, the fastest way to deploy a contract is ",(0,a.jsx)(t.a,{href:"/concepts/basics/accounts/creating-accounts",children:(0,a.jsx)(t.code,{children:"dev-deploy"})}),":"]}),"\n",(0,a.jsxs)(o.Z,{className:"language-tabs",groupId:"code-tabs",children:[(0,a.jsx)(i.Z,{value:"near-cli",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"near dev-deploy [--wasmFile ./path/to/compiled.wasm]\n"})})}),(0,a.jsx)(i.Z,{value:"near-cli-rs",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"near account create-account sponsor-by-faucet-service <my-new-dev-account>.testnet autogenerate-new-keypair save-to-keychain network-config testnet create\n\nnear contract deploy <my-new-dev-account>.testnet use-file <route_to_wasm> without-init-call network-config testnet sign-with-keychain\n\n"})})})]}),"\n",(0,a.jsx)(t.p,{children:"This does a few things:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["Creates a new testnet account with a name like ",(0,a.jsx)(t.code,{children:"dev-1626793583587-89195915741581"})]}),"\n",(0,a.jsxs)(t.li,{children:["Stores this account name in a ",(0,a.jsx)(t.code,{children:"neardev"})," folder within the project"]}),"\n",(0,a.jsxs)(t.li,{children:["Stores the private key for this account in the ",(0,a.jsx)(t.code,{children:"~/.near-credentials"})," folder"]}),"\n",(0,a.jsx)(t.li,{children:"Deploys your contract code to this account"}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["The next time you run ",(0,a.jsx)(t.code,{children:"dev-deploy"}),", it checks the ",(0,a.jsx)(t.code,{children:"neardev"})," folder and re-deploys to the same account rather than making a new one."]}),"\n",(0,a.jsx)(t.p,{children:"But in the example above, we want to delete the account state. How do we do that?"}),"\n",(0,a.jsxs)(t.p,{children:["The easiest way is just to delete the ",(0,a.jsx)(t.code,{children:"neardev"})," folder, then run ",(0,a.jsx)(t.code,{children:"near dev-deploy"})," again. This will create a brand new testnet account, with its own (empty) state, and deploy the updated contract to it."]}),"\n",(0,a.jsx)(t.h3,{id:"2-deleting--recreating-contract-account",children:"2. Deleting & recreating contract account"}),"\n",(0,a.jsxs)(t.p,{children:["If you want to have a predictable account name rather than an ever-changing ",(0,a.jsx)(t.code,{children:"dev-*"})," account, the best way is probably to create a sub-account:"]}),"\n",(0,a.jsxs)(o.Z,{className:"language-tabs",groupId:"code-tabs",children:[(0,a.jsx)(i.Z,{value:"near-cli",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",metastring:'title="Create sub-account"',children:"near create-account app-name.you.testnet --masterAccount you.testnet\n"})})}),(0,a.jsx)(i.Z,{value:"near-cli-rs",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",metastring:'title="Create sub-account"',children:"near account create-account fund-myself app-name.you.testnet '100 NEAR' autogenerate-new-keypair save-to-keychain sign-as you.testnet network-config testnet sign-with-keychain send\n"})})})]}),"\n",(0,a.jsx)(t.p,{children:"Then deploy your contract to it:"}),"\n",(0,a.jsxs)(o.Z,{className:"language-tabs",groupId:"code-tabs",children:[(0,a.jsx)(i.Z,{value:"near-cli",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",metastring:'title="Deploy to sub-account"',children:"near deploy --accountId app-name.you.testnet [--wasmFile ./path/to/compiled.wasm]\n"})})}),(0,a.jsx)(i.Z,{value:"near-cli-rs",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",metastring:'title="Deploy to sub-account"',children:"near contract deploy app-name.you.testnet use-file <./path/to/compiled.wasm> without-init-call network-config testnet sign-with-keychain send\n"})})})]}),"\n",(0,a.jsx)(t.p,{children:"In this case, how do you delete all contract state and start again? Delete the sub-account and recreate it."}),"\n",(0,a.jsxs)(o.Z,{className:"language-tabs",groupId:"code-tabs",children:[(0,a.jsx)(i.Z,{value:"near-cli",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",metastring:'title="Delete sub-account"',children:"near delete app-name.you.testnet you.testnet\n"})})}),(0,a.jsx)(i.Z,{value:"near-cli-rs",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",metastring:'title="Delete sub-account"',children:"near account delete-account app-name.you.testnet beneficiary you.testnet network-config testnet sign-with-keychain send\n"})})})]}),"\n",(0,a.jsxs)(t.p,{children:["This sends all funds still on the ",(0,a.jsx)(t.code,{children:"app-name.you.testnet"})," account to ",(0,a.jsx)(t.code,{children:"you.testnet"})," and deletes the contract that had been deployed to it, including all contract state."]}),"\n",(0,a.jsx)(t.p,{children:"Now you create the sub-account and deploy to it again using the commands above, and it will have empty state like it did the first time you deployed it."})]})}function g(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>o});n(67294);var a=n(36905);const r={tabItem:"tabItem_Ymn6"};var s=n(85893);function o(e){var t=e.children,n=e.hidden,o=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,o),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(67294),r=n(36905),s=n(12466),o=n(16550),i=n(20469),c=n(91980),l=n(67392),u=n(50012);function d(e){var t,n;return null!=(t=null==(n=a.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,a.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function h(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:function(e){return d(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,l.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function g(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,s=(0,o.k6)(),i=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:r});return[(0,c._X)(i),(0,a.useCallback)((function(e){if(i){var t=new URLSearchParams(s.location.search);t.set(i,e),s.replace(Object.assign({},s.location,{search:t.toString()}))}}),[i,s])]}function m(e){var t,n,r,s,o=e.defaultValue,c=e.queryString,l=void 0!==c&&c,d=e.groupId,m=h(e),f=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:o,tabValues:m})})),y=f[0],b=f[1],v=g({queryString:l,groupId:d}),x=v[0],j=v[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),n=(0,u.Nk)(t),r=n[0],s=n[1],[r,(0,a.useCallback)((function(e){t&&s.set(e)}),[t,s])]),k=w[0],_=w[1],N=function(){var e=null!=x?x:k;return p({value:e,tabValues:m})?e:null}();return(0,i.Z)((function(){N&&b(N)}),[N]),{selectedValue:y,selectValue:(0,a.useCallback)((function(e){if(!p({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);b(e),j(e),_(e)}),[j,_,m]),tabValues:m}}var f=n(72389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(85893);function v(e){var t=e.className,n=e.block,a=e.selectedValue,o=e.selectValue,i=e.tabValues,c=[],l=(0,s.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var t=e.currentTarget,n=c.indexOf(t),r=i[n].value;r!==a&&(l(t),o(r))},d=function(e){var t,n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var a,r=c.indexOf(e.currentTarget)+1;n=null!=(a=c[r])?a:c[0];break;case"ArrowLeft":var s,o=c.indexOf(e.currentTarget)-1;n=null!=(s=c[o])?s:c[c.length-1]}null==(t=n)||t.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t),children:i.map((function(e){var t=e.value,n=e.label,s=e.attributes;return(0,b.jsx)("li",Object.assign({role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:function(e){return c.push(e)},onKeyDown:d,onClick:u},s,{className:(0,r.Z)("tabs__item",y.tabItem,null==s?void 0:s.className,{"tabs__item--active":a===t}),children:null!=n?n:t}),t)}))})}function x(e){var t=e.lazy,n=e.children,r=e.selectedValue,s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var o=s.find((function(e){return e.props.value===r}));return o?(0,a.cloneElement)(o,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:s.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})}))})}function j(e){var t=m(e);return(0,b.jsxs)("div",{className:(0,r.Z)("tabs-container",y.tabList),children:[(0,b.jsx)(v,Object.assign({},e,t)),(0,b.jsx)(x,Object.assign({},e,t))]})}function w(e){var t=(0,f.Z)();return(0,b.jsx)(j,Object.assign({},e,{children:d(e.children)}),String(t))}},77229:(e,t,n)=>{n.d(t,{Ey:()=>u,O2:()=>c,SQ:()=>l});n(67294);var a=n(74866),r=n(85162),s=n(95665),o=n.n(s),i=n(85893);function c(e){var t=e.children;return Array.isArray(t)||(t=[t]),(0,i.jsx)(a.Z,{className:"language-tabs",groupId:"code-tabs",children:t.map((function(e,t){return(0,i.jsx)(r.Z,{value:e.props.value,label:e.props.value,children:e})}))})}function l(e){var t=e.children,n=e.language;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var n=e.props,a=(n.children,n.url),r=n.start,s=n.end,o=n.fname;if(e.type===u)return u({url:a,start:r,end:s,language:t,fname:o});return e}(e,n)})),1==t.length?(0,i.jsx)(r.Z,{value:0,label:t[0].props.fname,children:t[0]}):(0,i.jsx)(a.Z,{className:"file-tabs",children:t.map((function(e,t){return(0,i.jsx)(r.Z,{value:t,label:e.props.fname,children:e})}))})}function u(e){var t=e.url,n=e.start,a=e.end,r=e.language,s=e.fname,c=t+"#";return n&&a&&(c+="L"+n+"-L"+a+"#"),(0,i.jsx)(o(),{language:r,fname:s,children:c})}}}]);