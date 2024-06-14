"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9742],{36807:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>u});var r=n(85893),a=n(11151),s=(n(74866),n(85162),n(71183));const c={id:"factory",title:"Factory"},o=void 0,i={id:"tutorials/examples/factory",title:"Factory",description:"A factory is a smart contract that stores a compiled contract on itself, and automatizes deploying it into sub-accounts.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/3.tutorials/examples/factory.md",sourceDirName:"3.tutorials/examples",slug:"/tutorials/examples/factory",permalink:"/zh-CN/tutorials/examples/factory",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/examples/factory.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1712567569e3,frontMatter:{id:"factory",title:"Factory"},sidebar:"tutorials",previous:{title:"Coin Flip",permalink:"/zh-CN/tutorials/examples/coin-flip"},next:{title:"Complex Cross Contract Call",permalink:"/zh-CN/tutorials/examples/advanced-xcc"}},l={},u=[{value:"Generic Factory",id:"generic-factory",level:2},{value:"Quickstart",id:"quickstart",level:2},{value:"Build and Deploy the Factory",id:"build-and-deploy-the-factory",level:3},{value:"Deploy the Stored Contract Into a Sub-Account",id:"deploy-the-stored-contract-into-a-sub-account",level:3},{value:"Update the Stored Contract",id:"update-the-stored-contract",level:3},{value:"Factories - Concepts &amp; Limitations",id:"factories---concepts--limitations",level:2},{value:"Automatically Creating Accounts",id:"automatically-creating-accounts",level:3},{value:"The Update Method",id:"the-update-method",level:3}];function d(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"A factory is a smart contract that stores a compiled contract on itself, and automatizes deploying it into sub-accounts."}),"\n",(0,r.jsx)(t.p,{children:"We have two factory examples:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://github.com/near-examples/token-factory",children:(0,r.jsx)(t.strong,{children:"Token Factory"})}),": A factory that creates ",(0,r.jsx)(t.a,{href:"/zh-CN/tutorials/fts/introduction",children:"fungible tokens"})," contracts."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://github.com/near-examples/factory-rust",children:(0,r.jsx)(t.strong,{children:"A Generic Factory"})}),": A factory that creates ",(0,r.jsx)(t.a,{href:"/zh-CN/tutorials/examples/donation",children:"donation contracts"}),", but allows to change the contract it deploys."]}),"\n"]}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsx)(t.p,{children:"In this page we will focus on the Donation factory, to learn more about the token factory visit its repository."})}),"\n",(0,r.jsx)(t.p,{children:":::"}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"generic-factory",children:"Generic Factory"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.a,{href:"https://github.com/near-examples/factory-rust/",children:"Generic Factory"})," presents a contract factory that:"]}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Creates sub-accounts of itself and deploys its contract on them (",(0,r.jsx)(t.code,{children:"create_factory_subaccount_and_deploy"}),")."]}),"\n",(0,r.jsxs)(t.li,{children:["Can change the stored contract using the ",(0,r.jsx)(t.code,{children:"update_stored_contract"})," method."]}),"\n"]}),"\n",(0,r.jsx)(s.O2,{children:(0,r.jsxs)(s.SQ,{value:"rust",language:"rust",children:[(0,r.jsx)(s.Ey,{fname:"deploy.rs",url:"https://github.com/near-examples/factory-rust/blob/main/src/deploy.rs",start:"14",end:"66"}),(0,r.jsx)(s.Ey,{fname:"manager.rs",url:"https://github.com/near-examples/factory-rust/blob/main/src/manager.rs",start:"5",end:"19"})]})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"quickstart",children:"Quickstart"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Make sure you have installed ",(0,r.jsx)(t.a,{href:"https://www.rust-lang.org/",children:"rust"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["Install the ",(0,r.jsx)(t.a,{href:"https://github.com/near/near-cli#setup",children:(0,r.jsx)(t.code,{children:"NEAR CLI"})})]}),"\n"]}),"\n",(0,r.jsx)("hr",{className:"subsection"}),"\n",(0,r.jsx)(t.h3,{id:"build-and-deploy-the-factory",children:"Build and Deploy the Factory"}),"\n",(0,r.jsx)(t.p,{children:"You can automatically compile and deploy the contract in the NEAR testnet by running:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"./deploy.sh\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Once finished, check the ",(0,r.jsx)(t.code,{children:"neardev/dev-account"})," file to find the address in which the contract was deployed:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"cat ./neardev/dev-account\n# e.g. dev-1659899566943-21539992274727\n"})}),"\n",(0,r.jsx)("hr",{className:"subsection"}),"\n",(0,r.jsx)(t.h3,{id:"deploy-the-stored-contract-into-a-sub-account",children:"Deploy the Stored Contract Into a Sub-Account"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"create_factory_subaccount_and_deploy"})," will create a sub-account of the factory and deploy the stored contract on it."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'near call <factory-account> create_factory_subaccount_and_deploy \'{ "name": "sub", "beneficiary": "<account-to-be-beneficiary>"}\' --deposit 1.24 --accountId <account-id> --gas 300000000000000\n'})}),"\n",(0,r.jsxs)(t.p,{children:["This will create the ",(0,r.jsx)(t.code,{children:"sub.<factory-account>"}),", which will have a ",(0,r.jsx)(t.code,{children:"donation"})," contract deployed on it:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"near view sub.<factory-account> get_beneficiary\n# expected response is: <account-to-be-beneficiary>\n"})}),"\n",(0,r.jsx)("hr",{className:"subsection"}),"\n",(0,r.jsx)(t.h3,{id:"update-the-stored-contract",children:"Update the Stored Contract"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"update_stored_contract"})," enables to change the compiled contract that the factory stores."]}),"\n",(0,r.jsx)(t.p,{children:"The method is interesting because it has no declared parameters, and yet it takes an input: the new contract to store as a stream of bytes."}),"\n",(0,r.jsxs)(t.p,{children:["To use it, we need to transform the contract we want to store into its ",(0,r.jsx)(t.code,{children:"base64"})," representation, and pass the result as input to the method:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'# Use near-cli to update stored contract\nexport BYTES=`cat ./src/to/new-contract/contract.wasm | base64`\nnear call <factory-account> update_stored_contract "$BYTES" --base64 --accountId <factory-account> --gas 30000000000000\n'})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["This works because the arguments of a call can be either a ",(0,r.jsx)(t.code,{children:"JSON"})," object or a ",(0,r.jsx)(t.code,{children:"String Buffer"})]}),"\n"]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"factories---concepts--limitations",children:"Factories - Concepts & Limitations"}),"\n",(0,r.jsx)(t.p,{children:"Factories are an interesting concept, here we further explain some of their implementation aspects, as well as their limitations."}),"\n",(0,r.jsx)("hr",{className:"subsection"}),"\n",(0,r.jsx)(t.h3,{id:"automatically-creating-accounts",children:"Automatically Creating Accounts"}),"\n",(0,r.jsxs)(t.p,{children:["NEAR accounts can only create sub-accounts of itself, therefore, the ",(0,r.jsx)(t.code,{children:"factory"})," can only create and deploy contracts on its own sub-accounts."]}),"\n",(0,r.jsx)(t.p,{children:"This means that the factory:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Can"})," create ",(0,r.jsx)(t.code,{children:"sub.factory.testnet"})," and deploy a contract on it."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Cannot"})," create sub-accounts of the ",(0,r.jsx)(t.code,{children:"predecessor"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Can"})," create new accounts (e.g. ",(0,r.jsx)(t.code,{children:"account.testnet"}),"), but ",(0,r.jsx)(t.strong,{children:"cannot"})," deploy contracts on them."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["It is important to remember that, while ",(0,r.jsx)(t.code,{children:"factory.testnet"})," can create ",(0,r.jsx)(t.code,{children:"sub.factory.testnet"}),", it has no control over it after its creation."]}),"\n",(0,r.jsx)("hr",{className:"subsection"}),"\n",(0,r.jsx)(t.h3,{id:"the-update-method",children:"The Update Method"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"update_stored_contracts"})," has a very short implementation:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rust",children:'#[private]\npub fn update_stored_contract(&mut self) {\n  self.code = env::input().expect("Error: No input").to_vec();\n}\n'})}),"\n",(0,r.jsxs)(t.p,{children:["On first sight it looks like the method takes no input parameters, but we can see that its only line of code reads from ",(0,r.jsx)(t.code,{children:"env::input()"}),". On first sight it looks like the method takes no input parameters, but we can see that its only line of code reads from ",(0,r.jsx)(t.code,{children:"env::input()"}),". What is happening here is that ",(0,r.jsx)(t.code,{children:"update_stored_contract"})," ",(0,r.jsx)(t.strong,{children:"bypasses"})," the step of ",(0,r.jsx)(t.strong,{children:"deserializing the input"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["You could implement ",(0,r.jsx)(t.code,{children:"update_stored_contract(&mut self, new_code: Vec<u8>)"}),", which takes the compiled code to store as a ",(0,r.jsx)(t.code,{children:"Vec<u8>"}),", but that would trigger the contract to:"]}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Deserialize the ",(0,r.jsx)(t.code,{children:"new_code"})," variable from the input."]}),"\n",(0,r.jsx)(t.li,{children:"Sanitize it, making sure it is correctly built."}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["When dealing with big streams of input data (as is the compiled ",(0,r.jsx)(t.code,{children:"wasm"})," file to be stored), this process of deserializing/checking the input ends up ",(0,r.jsx)(t.strong,{children:"consuming the whole GAS"})," for the transaction."]}),"\n",(0,r.jsxs)(t.admonition,{title:"Versioning for this article",type:"note",children:[(0,r.jsx)(t.p,{children:"At the time of this writing, this example works with the following versions:"}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["near-cli: ",(0,r.jsx)(t.code,{children:"4.0.13"})]}),"\n",(0,r.jsxs)(t.li,{children:["node: ",(0,r.jsx)(t.code,{children:"18.19.1"})]}),"\n",(0,r.jsxs)(t.li,{children:["rustc: ",(0,r.jsx)(t.code,{children:"1.77.0"})]}),"\n"]})]})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>c});n(67294);var r=n(36905);const a={tabItem:"tabItem_Ymn6"};var s=n(85893);function c(e){var t=e.children,n=e.hidden,c=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,c),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(67294),a=n(36905),s=n(12466),c=n(16550),o=n(20469),i=n(91980),l=n(67392),u=n(50012);function d(e){var t,n;return null!=(t=null==(n=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function h(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:function(e){return d(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,l.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,s=(0,c.k6)(),o=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:a});return[(0,i._X)(o),(0,r.useCallback)((function(e){if(o){var t=new URLSearchParams(s.location.search);t.set(o,e),s.replace(Object.assign({},s.location,{search:t.toString()}))}}),[o,s])]}function m(e){var t,n,a,s,c=e.defaultValue,i=e.queryString,l=void 0!==i&&i,d=e.groupId,m=h(e),x=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:c,tabValues:m})})),b=x[0],j=x[1],g=f({queryString:l,groupId:d}),y=g[0],v=g[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),n=(0,u.Nk)(t),a=n[0],s=n[1],[a,(0,r.useCallback)((function(e){t&&s.set(e)}),[t,s])]),k=w[0],N=w[1],_=function(){var e=null!=y?y:k;return p({value:e,tabValues:m})?e:null}();return(0,o.Z)((function(){_&&j(_)}),[_]),{selectedValue:b,selectValue:(0,r.useCallback)((function(e){if(!p({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);j(e),v(e),N(e)}),[v,N,m]),tabValues:m}}var x=n(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=n(85893);function g(e){var t=e.className,n=e.block,r=e.selectedValue,c=e.selectValue,o=e.tabValues,i=[],l=(0,s.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var t=e.currentTarget,n=i.indexOf(t),a=o[n].value;a!==r&&(l(t),c(a))},d=function(e){var t,n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var r,a=i.indexOf(e.currentTarget)+1;n=null!=(r=i[a])?r:i[0];break;case"ArrowLeft":var s,c=i.indexOf(e.currentTarget)-1;n=null!=(s=i[c])?s:i[i.length-1]}null==(t=n)||t.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:o.map((function(e){var t=e.value,n=e.label,s=e.attributes;return(0,j.jsx)("li",Object.assign({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:function(e){return i.push(e)},onKeyDown:d,onClick:u},s,{className:(0,a.Z)("tabs__item",b.tabItem,null==s?void 0:s.className,{"tabs__item--active":r===t}),children:null!=n?n:t}),t)}))})}function y(e){var t=e.lazy,n=e.children,a=e.selectedValue,s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var c=s.find((function(e){return e.props.value===a}));return c?(0,r.cloneElement)(c,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:s.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})}))})}function v(e){var t=m(e);return(0,j.jsxs)("div",{className:(0,a.Z)("tabs-container",b.tabList),children:[(0,j.jsx)(g,Object.assign({},t,e)),(0,j.jsx)(y,Object.assign({},t,e))]})}function w(e){var t=(0,x.Z)();return(0,j.jsx)(v,Object.assign({},e,{children:d(e.children)}),String(t))}},71183:(e,t,n)=>{n.d(t,{O2:()=>f,Ey:()=>x,SQ:()=>m});var r=n(67294),a=n(74866),s=n(85162),c=n(74165),o=n(15861),i=n(1841),l=n.n(i),u=n(85893);function d(){return(d=(0,o.Z)((0,c.Z)().mark((function e(t,n,r){var a,s,o,i;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((s=localStorage.getItem(t+"-until"))&&s>Date.now())){e.next=5;break}a=localStorage.getItem(t),e.next=18;break;case 5:return e.prev=5,e.next=8,fetch(t);case 8:return e.next=10,e.sent.text();case 10:a=e.sent,localStorage.setItem(t,a),localStorage.setItem(t+"-until",Date.now()+6e4),e.next=18;break;case 15:return e.prev=15,e.t0=e.catch(5),e.abrupt("return","Error fetching code, please try reloading");case 18:return o=a.split("\n"),n=n?Number(n)-1:0,r=r?Number(r):o.length,o=o.slice(n,r),i=o.reduce((function(e,t){if(0===t.length)return e;var n=t.match(/^\s+/);return n?Math.min(e,n[0].length):0}),1/0),e.abrupt("return",o.map((function(e){return e.slice(i)})).join("\n"));case 24:case"end":return e.stop()}}),e,null,[[5,15]])})))).apply(this,arguments)}const h=function(e){var t=e.url,n=e.start,a=e.end,s=e.language,c=e.fname,o=e.metastring,i=(0,r.useState)("Loading..."),h=i[0],p=i[1];return(0,r.useEffect)((function(){var e=function(e){var t=e.slice(e.indexOf("https")).split("#"),n=t[0],r=(t[1],new URL(n).pathname.split("/").slice(1)),a=r[0],s=r[1];return r[2],"https://raw.githubusercontent.com/"+a+"/"+s+"/"+r[3]+"/"+r.slice(4).join("/")}(t),r=function(e,t,n){return d.apply(this,arguments)}(e,n,a);r.then((function(e){return p(e)}))})),(0,u.jsxs)("div",{fname:c,children:[(0,u.jsx)(l(),{language:s,metastring:o+" showLineNumbers",children:h}),(0,u.jsx)("div",{style:{fontSize:"0.9em",fontWeight:600,color:"rgb(14, 117, 221)",textAlign:"center",paddingBottom:"13px",textDecoration:"underline"},children:(0,u.jsx)("a",{href:t,target:"_blank",rel:"noreferrer noopener",children:"See full example on GitHub"})})]})};var p={rust:"\ud83e\udd80 Rust",js:"\ud83c\udf10 Javascript",ts:"\ud83c\udf10 Typescript"};function f(e){var t=e.children;return Array.isArray(t)||(t=[t]),(0,u.jsx)(a.Z,{className:"language-tabs",groupId:"code-tabs",children:t.map((function(e,t){return(0,u.jsx)(s.Z,{value:e.props.value,label:p[e.props.value],children:e})}))})}function m(e){var t=e.children,n=e.language;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var n=e.props,r=(n.children,n.url),a=n.start,s=n.end,c=n.fname;if(e.type===x)return x({url:r,start:a,end:s,language:t,fname:c});return e}(e,n)})),1==t.length?(0,u.jsx)(s.Z,{value:0,label:t[0].props.fname,children:t[0]}):(0,u.jsx)(a.Z,{className:"file-tabs",children:t.map((function(e,t){return(0,u.jsx)(s.Z,{value:t,label:e.props.fname,children:e})}))})}function x(e){var t=e.url,n=e.start,r=e.end,a=e.language,s=e.fname,c=e.metastring;return h({url:t,start:n,end:r,language:a,fname:s,metastring:c})}}}]);