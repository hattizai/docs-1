"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5661],{26562:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var r=n(85893),a=n(11151);n(74866),n(85162),n(71183);const s={id:"what-is",title:"What is Chain Abstraction?"},i=void 0,o={id:"build/chain-abstraction/what-is",title:"What is Chain Abstraction?",description:"The idea behind chain abstraction is quite simple: blockchain technology should be abstracted away from the user experience. In other words, people should not realize when they are using a blockchain, nor which blockchain they are using.",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/2.build/1.chain-abstraction/what-is.md",sourceDirName:"2.build/1.chain-abstraction",slug:"/build/chain-abstraction/what-is",permalink:"/vi/build/chain-abstraction/what-is",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/1.chain-abstraction/what-is.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1712954223e3,frontMatter:{id:"what-is",title:"What is Chain Abstraction?"},sidebar:"build",previous:{title:"Home",permalink:"/vi/build/welcome"},next:{title:"Meta Transaction Relayers",permalink:"/vi/build/chain-abstraction/meta-transactions"}},l={},u=[{value:"Fast-Auth: Email onboarding",id:"fast-auth-email-onboarding",level:2},{value:"Relayers: Cover gas fees",id:"relayers-cover-gas-fees",level:2},{value:"Multi-chain signatures: One account, multiple chains",id:"multi-chain-signatures-one-account-multiple-chains",level:2}];function c(e){const t={admonition:"admonition",code:"code",h2:"h2",hr:"hr",img:"img",p:"p",strong:"strong",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["The idea behind ",(0,r.jsx)(t.code,{children:"chain abstraction"})," is quite simple: ",(0,r.jsx)(t.strong,{children:"blockchain"})," technology should be ",(0,r.jsx)(t.strong,{children:"abstracted away"})," from the user experience. In other words, people should ",(0,r.jsx)(t.strong,{children:"not realize"})," when they are ",(0,r.jsx)(t.strong,{children:"using a blockchain"}),", nor ",(0,r.jsx)(t.strong,{children:"which blockchain"})," they are using."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"img",src:n(63325).Z+"",width:"1282",height:"470"})}),"\n",(0,r.jsxs)(t.p,{children:["To help on this task, NEAR Protocol provides services that allow to ",(0,r.jsx)(t.strong,{children:"create"})," and ",(0,r.jsx)(t.strong,{children:"recover accounts"})," using ",(0,r.jsx)(t.strong,{children:"email addresses"}),", use the account ",(0,r.jsx)(t.strong,{children:"without acquiring funds"}),", and ",(0,r.jsx)(t.strong,{children:"control accounts"})," in ",(0,r.jsx)(t.strong,{children:"other chains"}),". All in the most ",(0,r.jsx)(t.strong,{children:"seamless"})," way possible."]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"fast-auth-email-onboarding",children:"Fast-Auth: Email onboarding"}),"\n",(0,r.jsx)(t.p,{children:"One of the first barriers that new users face when entering the world of Web3 is the need to create a crypto wallet. This generally implies the need to choose a wallet, create and store a recovery phrase, and obtain deposit funds to start using the account."}),"\n",(0,r.jsx)(t.p,{children:"With FastAuth, users only need to provide an email address to create a NEAR account. Using the same email address the user will be able to use their account across applications and devices."}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsx)(t.p,{children:"FastAuth accounts are kept safe through multi-party computation (MPC) on a decentralized network. This means that the user's private key is never stored in a single location, and thus it is never exposed to any single party."})}),"\n",(0,r.jsx)("hr",{subclass:"subsection"}),"\n",(0,r.jsx)(t.h2,{id:"relayers-cover-gas-fees",children:"Relayers: Cover gas fees"}),"\n",(0,r.jsx)(t.p,{children:"Allowing users to start using a dApp without having to acquire funds is a powerful tool to increase user adoption. NEAR Protocol provides a service that allows developers to subsidize gas fees for their users."}),"\n",(0,r.jsxs)(t.p,{children:['This concept, known as "Account Abstraction" in other chains, is a ',(0,r.jsx)(t.strong,{children:"built-in feature"})," in NEAR. User can wrap transactions in messages known as ",(0,r.jsx)(t.strong,{children:"meta-transaction"}),", that any other account can relay to the network."]}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["In NEAR the relayers simply attach NEAR to cover gas fees, and pass the transaction to the network. There, the transaction is executed as if the ",(0,r.jsx)(t.strong,{children:"user had sent it"}),"."]})}),"\n",(0,r.jsx)("hr",{subclass:"subsection"}),"\n",(0,r.jsx)(t.h2,{id:"multi-chain-signatures-one-account-multiple-chains",children:"Multi-chain signatures: One account, multiple chains"}),"\n",(0,r.jsx)(t.p,{children:"Currently, users and applications are siloed in different chains. This means that a user needs to create a new account for each chain they want to use. This is not only cumbersome for the user, but also for the developer who needs to maintain different codebases for each chain."}),"\n",(0,r.jsxs)(t.p,{children:["NEAR Protocol provides a multi-chain signature service that allows users to use their NEAR Account to sign transactions in ",(0,r.jsx)(t.strong,{children:"other chains"}),". This means that a user can use the same account to interact with ",(0,r.jsx)(t.strong,{children:"Ethereum"}),", ",(0,r.jsx)(t.strong,{children:"Binance Smart Chain"}),", ",(0,r.jsx)(t.strong,{children:"Avalanche"}),", and ",(0,r.jsx)(t.strong,{children:"NEAR"}),"."]}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:["Multi-chain signatures work by combining ",(0,r.jsx)(t.strong,{children:"smart contracts"})," that produce signatures, with indexers that listen for these signatures, and relayers that submit the transactions to other networks. This allows users to hold assets and use applications in ",(0,r.jsx)(t.strong,{children:"any"})," network, only needing to have a single NEAR account."]})})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>i});n(67294);var r=n(36905);const a={tabItem:"tabItem_Ymn6"};var s=n(85893);function i(e){var t=e.children,n=e.hidden,i=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,i),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>y});var r=n(67294),a=n(36905),s=n(12466),i=n(16550),o=n(20469),l=n(91980),u=n(67392),c=n(50012);function h(e){var t,n;return null!=(t=null==(n=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function d(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:function(e){return h(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,s=(0,i.k6)(),o=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:a});return[(0,l._X)(o),(0,r.useCallback)((function(e){if(o){var t=new URLSearchParams(s.location.search);t.set(o,e),s.replace(Object.assign({},s.location,{search:t.toString()}))}}),[o,s])]}function g(e){var t,n,a,s,i=e.defaultValue,l=e.queryString,u=void 0!==l&&l,h=e.groupId,g=d(e),b=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:i,tabValues:g})})),m=b[0],v=b[1],x=f({queryString:u,groupId:h}),w=x[0],j=x[1],y=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:h}.groupId),n=(0,c.Nk)(t),a=n[0],s=n[1],[a,(0,r.useCallback)((function(e){t&&s.set(e)}),[t,s])]),k=y[0],A=y[1],E=function(){var e=null!=w?w:k;return p({value:e,tabValues:g})?e:null}();return(0,o.Z)((function(){E&&v(E)}),[E]),{selectedValue:m,selectValue:(0,r.useCallback)((function(e){if(!p({value:e,tabValues:g}))throw new Error("Can't select invalid tab value="+e);v(e),j(e),A(e)}),[j,A,g]),tabValues:g}}var b=n(72389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(85893);function x(e){var t=e.className,n=e.block,r=e.selectedValue,i=e.selectValue,o=e.tabValues,l=[],u=(0,s.o5)().blockElementScrollPositionUntilNextRender,c=function(e){var t=e.currentTarget,n=l.indexOf(t),a=o[n].value;a!==r&&(u(t),i(a))},h=function(e){var t,n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var r,a=l.indexOf(e.currentTarget)+1;n=null!=(r=l[a])?r:l[0];break;case"ArrowLeft":var s,i=l.indexOf(e.currentTarget)-1;n=null!=(s=l[i])?s:l[l.length-1]}null==(t=n)||t.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:o.map((function(e){var t=e.value,n=e.label,s=e.attributes;return(0,v.jsx)("li",Object.assign({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:function(e){return l.push(e)},onKeyDown:h,onClick:c},s,{className:(0,a.Z)("tabs__item",m.tabItem,null==s?void 0:s.className,{"tabs__item--active":r===t}),children:null!=n?n:t}),t)}))})}function w(e){var t=e.lazy,n=e.children,a=e.selectedValue,s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var i=s.find((function(e){return e.props.value===a}));return i?(0,r.cloneElement)(i,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})}))})}function j(e){var t=g(e);return(0,v.jsxs)("div",{className:(0,a.Z)("tabs-container",m.tabList),children:[(0,v.jsx)(x,Object.assign({},t,e)),(0,v.jsx)(w,Object.assign({},t,e))]})}function y(e){var t=(0,b.Z)();return(0,v.jsx)(j,Object.assign({},e,{children:h(e.children)}),String(t))}},71183:(e,t,n)=>{n.d(t,{O2:()=>f,Ey:()=>b,SQ:()=>g});var r=n(67294),a=n(74866),s=n(85162),i=n(74165),o=n(15861),l=n(1841),u=n.n(l),c=n(85893);function h(){return(h=(0,o.Z)((0,i.Z)().mark((function e(t,n,r){var a,s,o,l;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((s=localStorage.getItem(t+"-until"))&&s>Date.now())){e.next=5;break}a=localStorage.getItem(t),e.next=18;break;case 5:return e.prev=5,e.next=8,fetch(t);case 8:return e.next=10,e.sent.text();case 10:a=e.sent,localStorage.setItem(t,a),localStorage.setItem(t+"-until",Date.now()+6e4),e.next=18;break;case 15:return e.prev=15,e.t0=e.catch(5),e.abrupt("return","Error fetching code, please try reloading");case 18:return o=a.split("\n"),n=n?Number(n)-1:0,r=r?Number(r):o.length,o=o.slice(n,r),l=o.reduce((function(e,t){if(0===t.length)return e;var n=t.match(/^\s+/);return n?Math.min(e,n[0].length):0}),1/0),e.abrupt("return",o.map((function(e){return e.slice(l)})).join("\n"));case 24:case"end":return e.stop()}}),e,null,[[5,15]])})))).apply(this,arguments)}const d=function(e){var t=e.url,n=e.start,a=e.end,s=e.language,i=e.fname,o=e.metastring,l=(0,r.useState)("Loading..."),d=l[0],p=l[1];return(0,r.useEffect)((function(){var e=function(e){var t=e.slice(e.indexOf("https")).split("#"),n=t[0],r=(t[1],new URL(n).pathname.split("/").slice(1)),a=r[0],s=r[1];return r[2],"https://raw.githubusercontent.com/"+a+"/"+s+"/"+r[3]+"/"+r.slice(4).join("/")}(t),r=function(e,t,n){return h.apply(this,arguments)}(e,n,a);r.then((function(e){return p(e)}))})),(0,c.jsxs)("div",{fname:i,children:[(0,c.jsx)(u(),{language:s,metastring:o+" showLineNumbers",children:d}),(0,c.jsx)("div",{style:{fontSize:"0.9em",fontWeight:600,color:"rgb(14, 117, 221)",textAlign:"center",paddingBottom:"13px",textDecoration:"underline"},children:(0,c.jsx)("a",{href:t,target:"_blank",rel:"noreferrer noopener",children:"See full example on GitHub"})})]})};var p={rust:"\ud83e\udd80 Rust",js:"\ud83c\udf10 Javascript",ts:"\ud83c\udf10 Typescript"};function f(e){var t=e.children;return Array.isArray(t)||(t=[t]),(0,c.jsx)(a.Z,{className:"language-tabs",groupId:"code-tabs",children:t.map((function(e,t){return(0,c.jsx)(s.Z,{value:e.props.value,label:p[e.props.value],children:e})}))})}function g(e){var t=e.children,n=e.language;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var n=e.props,r=(n.children,n.url),a=n.start,s=n.end,i=n.fname;if(e.type===b)return b({url:r,start:a,end:s,language:t,fname:i});return e}(e,n)})),1==t.length?(0,c.jsx)(s.Z,{value:0,label:t[0].props.fname,children:t[0]}):(0,c.jsx)(a.Z,{className:"file-tabs",children:t.map((function(e,t){return(0,c.jsx)(s.Z,{value:t,label:e.props.fname,children:e})}))})}function b(e){var t=e.url,n=e.start,r=e.end,a=e.language,s=e.fname,i=e.metastring;return d({url:t,start:n,end:r,language:a,fname:s,metastring:i})}},63325:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/chain-abstraction-landing-6d4641c84ace816727acb447e6880e70.png"}}]);