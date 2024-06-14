"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1342],{98172:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var r=t(85893),a=t(11151),l=(t(74866),t(85162),t(71183));const s={id:"frontend-multiple-contracts",title:"Frontend Interacting with Multiple Contracts",sidebar_label:"Frontend & Multiple Contracts"},i=void 0,u={id:"tutorials/examples/frontend-multiple-contracts",title:"Frontend Interacting with Multiple Contracts",description:"\uc774 \uc608\uc81c\ub294 \ud558\ub098\uc758 \ud504\ub860\ud2b8\uc5d4\ub4dc\uc5d0\uc11c \uc5ec\ub7ec \ucee8\ud2b8\ub799\ud2b8\uc640 \uc0c1\ud638 \uc791\uc6a9\ud558\ub294 \ubc29\ubc95\uc744 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/3.tutorials/examples/frontend-multiple-contracts.md",sourceDirName:"3.tutorials/examples",slug:"/tutorials/examples/frontend-multiple-contracts",permalink:"/ko/tutorials/examples/frontend-multiple-contracts",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/examples/frontend-multiple-contracts.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1712954223e3,frontMatter:{id:"frontend-multiple-contracts",title:"Frontend Interacting with Multiple Contracts",sidebar_label:"Frontend & Multiple Contracts"},sidebar:"tutorials",previous:{title:"\uc790\uccb4 \uc5c5\uadf8\ub808\uc774\ub4dc \ubc0f \uc0c1\ud0dc \ub9c8\uc774\uadf8\ub808\uc774\uc158",permalink:"/ko/tutorials/examples/update-contract-migrate-state"},next:{title:"NFT minter",permalink:"/ko/tutorials/templates/minter"}},o={},c=[{value:"\uc5ec\ub7ec \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c \ub370\uc774\ud130 \ucffc\ub9ac",id:"\uc5ec\ub7ec-\ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c-\ub370\uc774\ud130-\ucffc\ub9ac",level:2},{value:"\uc5ec\ub7ec \ud2b8\ub79c\uc7ad\uc158 \uc804\uc1a1",id:"\uc5ec\ub7ec-\ud2b8\ub79c\uc7ad\uc158-\uc804\uc1a1",level:2},{value:"\uc77c\uad04 Action",id:"\uc77c\uad04-action",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"\uc774 \uc608\uc81c\ub294 \ud558\ub098\uc758 \ud504\ub860\ud2b8\uc5d4\ub4dc\uc5d0\uc11c \uc5ec\ub7ec \ucee8\ud2b8\ub799\ud2b8\uc640 \uc0c1\ud638 \uc791\uc6a9\ud558\ub294 \ubc29\ubc95\uc744 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.p,{children:"\ud2b9\ud788 \uc774 \uc608\uc5d0\uc11c\ub294 \ub2e4\uc74c\uc744 \uc218\ud589\ud558\ub294 \uba54\uc11c\ub4dc\ub97c \ubcf4\uc5ec\uc90d\ub2c8\ub2e4."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\uc5ec\ub7ec \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c \ub370\uc774\ud130 \ucffc\ub9ac"}),"\n",(0,r.jsx)(n.li,{children:"\uc5ec\ub7ec \ucee8\ud2b8\ub799\ud2b8 \uba54\uc11c\ub4dc\ub97c \ub3d9\uc2dc\uc5d0 \ud638\ucd9c"}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"\uc5ec\ub7ec-\ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c-\ub370\uc774\ud130-\ucffc\ub9ac",children:"\uc5ec\ub7ec \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c \ub370\uc774\ud130 \ucffc\ub9ac"}),"\n",(0,r.jsxs)(n.p,{children:["\uc5ec\ub7ec \ucee8\ud2b8\ub799\ud2b8\ub97c \ucffc\ub9ac\ud558\ub824\uba74 \uac04\ub2e8\ud788 \uc5ec\ub7ec \uac1c\uc758 ",(0,r.jsx)(n.code,{children:"view"})," \ud638\ucd9c\uc744 \uc218\ud589\ud558\uc138\uc694."]}),"\n",(0,r.jsx)(l.SQ,{value:"js",language:"ts",children:(0,r.jsx)(l.Ey,{fname:"index.js",url:"https://github.com/near-examples/frontend-multiple-contracts/blob/main/frontend/index.js",start:"70",end:"76"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"\uc5ec\ub7ec-\ud2b8\ub79c\uc7ad\uc158-\uc804\uc1a1",children:"\uc5ec\ub7ec \ud2b8\ub79c\uc7ad\uc158 \uc804\uc1a1"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"wallet"})," \uac1d\uccb4\ub97c \uc0ac\uc6a9\ud558\uba74 \uc5ec\ub7ec \ud2b8\ub79c\uc7ad\uc158\uc744 \ub3d9\uc2dc\uc5d0 \uc804\uc1a1\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub7ec\ub098 \ud2b8\ub79c\uc7ad\uc158\uc740 \ub3c5\ub9bd\uc801\uc73c\ub85c \uc2e4\ud589\ub429\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(n.p,{children:"\ud55c \ubc88\uc5d0 \uc5ec\ub7ec \ud2b8\ub79c\uc7ad\uc158\uc744 \uc804\ub2ec\ud558\ub294 \uac83\uc740 \uc0ac\uc6a9\uc790\uac00 \uc9c0\uac11\uacfc \ud55c \ubc88\ub9cc \uc0c1\ud638 \uc791\uc6a9\ud558\uae30 \ub54c\ubb38\uc5d0, UX\ub97c \uac1c\uc120\ud558\ub294 \uc88b\uc740 \ubc29\ubc95\uc785\ub2c8\ub2e4."}),"\n",(0,r.jsx)(l.SQ,{value:"js",language:"ts",children:(0,r.jsx)(l.Ey,{fname:"index.js",url:"https://github.com/near-examples/frontend-multiple-contracts/blob/main/frontend/index.js",start:"35",end:"62"})}),"\n",(0,r.jsx)(n.p,{children:"\uc774 \uc608\uc5d0\uc11c \uc0ac\uc6a9\uc790\ub294 \ub450 \uac1c\uc758 \ub3c5\ub9bd\uc801\uc778 \ud2b8\ub79c\uc7ad\uc158\uc5d0 \uc11c\uba85\ud569\ub2c8\ub2e4."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["A transaction to call ",(0,r.jsx)(n.code,{children:"set_greeting"})," in our ",(0,r.jsx)(n.a,{href:"https://github.com/near-examples/hello-near-examples",children:"Hello NEAR example"})]}),"\n",(0,r.jsxs)(n.li,{children:["A transaction to call ",(0,r.jsx)(n.code,{children:"add_message"})," in our ",(0,r.jsx)(n.a,{href:"https://github.com/near-examples/guest-book-examples",children:"GuestBook example"})]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsxs)(n.p,{children:["\uc0ac\uc6a9\uc790\uac00 \ud2b8\ub79c\uc7ad\uc158 \uc11c\uba85\uc744 \ub3d9\uc2dc\uc5d0 \uc218\ub77d\ud558\ub354\ub77c\ub3c4 \ud2b8\ub79c\uc7ad\uc158\uc740 ",(0,r.jsx)(n.strong,{children:"\ub3c5\ub9bd\uc801"}),"\uc73c\ub85c \uc720\uc9c0\ub429\ub2c8\ub2e4. \uc989, \ud558\ub098\uac00 \uc2e4\ud328\ud558\ub354\ub77c\ub3c4 \ub2e4\ub978 \ud558\ub098\ub294 \ub864\ubc31 \ub418\uc9c0 ",(0,r.jsx)(n.strong,{children:"\uc54a\uc2b5\ub2c8\ub2e4"}),"."]})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"\uc77c\uad04-action",children:"\uc77c\uad04 Action"}),"\n",(0,r.jsxs)(n.p,{children:["You can aggregate multiple ",(0,r.jsx)(n.a,{href:"/ko/build/smart-contracts/anatomy/actions",children:"actions"})," directed towards a same contract into a single transaction. \uc77c\uad04 Action\uc740 ",(0,r.jsx)(n.strong,{children:"\uc21c\ucc28\uc801\uc73c\ub85c"})," \uc2e4\ud589\ub418\uba70, \ud558\ub098\uac00 \uc2e4\ud328 \ud558\uba74 ",(0,r.jsx)(n.strong,{children:"\ubaa8\ub450"})," \ub418\ub3cc\ub824\uc9c4\ub2e4\ub294 \ucd94\uac00 \uc774\uc810\uc774 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"  // Register a user and transfer them FT on a single take\n  const REGISTER_DEPOSIT = \"1250000000000000000000\";\n\n  const ftTx = {\n    receiverId: FT_ADDRESS,\n    actions: [\n      {\n        type: 'FunctionCall',\n        params: {\n          methodName: 'storage_deposit',\n          args: { account_id: \"<receiver-account>\" },\n          gas: THIRTY_TGAS, deposit: REGISTER_DEPOSIT\n        }\n      },\n      {\n        type: 'FunctionCall',\n        params: {\n          methodName: 'ft_transfer',\n          args: { receiver_id: \"<receiver-account>\", amount: amount_in_yocto },\n          gas: THIRTY_TGAS, deposit: 1 }\n      }\n    ]\n  }\n\n  // Ask the wallet to sign and send the transaction\n  await wallet.signAndSendTransactions({ transactions: [ ftTx ] })\n"})})]})}function p(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>s});t(67294);var r=t(36905);const a={tabItem:"tabItem_Ymn6"};var l=t(85893);function s(e){var n=e.children,t=e.hidden,s=e.className;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,s),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>w});var r=t(67294),a=t(36905),l=t(12466),s=t(16550),i=t(20469),u=t(91980),o=t(67392),c=t(50012);function d(e){var n,t;return null!=(n=null==(t=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function p(e){var n=e.values,t=e.children;return(0,r.useMemo)((function(){var e=null!=n?n:function(e){return d(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,o.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function h(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function m(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId,l=(0,s.k6)(),i=function(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:t,groupId:a});return[(0,u._X)(i),(0,r.useCallback)((function(e){if(i){var n=new URLSearchParams(l.location.search);n.set(i,e),l.replace(Object.assign({},l.location,{search:n.toString()}))}}),[i,l])]}function f(e){var n,t,a,l,s=e.defaultValue,u=e.queryString,o=void 0!==u&&u,d=e.groupId,f=p(e),g=(0,r.useState)((function(){return function(e){var n,t=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var a=null!=(n=r.find((function(e){return e.default})))?n:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:s,tabValues:f})})),v=g[0],b=g[1],x=m({queryString:o,groupId:d}),j=x[0],y=x[1],w=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),t=(0,c.Nk)(n),a=t[0],l=t[1],[a,(0,r.useCallback)((function(e){n&&l.set(e)}),[n,l])]),k=w[0],I=w[1],T=function(){var e=null!=j?j:k;return h({value:e,tabValues:f})?e:null}();return(0,i.Z)((function(){T&&b(T)}),[T]),{selectedValue:v,selectValue:(0,r.useCallback)((function(e){if(!h({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);b(e),y(e),I(e)}),[y,I,f]),tabValues:f}}var g=t(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(85893);function x(e){var n=e.className,t=e.block,r=e.selectedValue,s=e.selectValue,i=e.tabValues,u=[],o=(0,l.o5)().blockElementScrollPositionUntilNextRender,c=function(e){var n=e.currentTarget,t=u.indexOf(n),a=i[t].value;a!==r&&(o(n),s(a))},d=function(e){var n,t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var r,a=u.indexOf(e.currentTarget)+1;t=null!=(r=u[a])?r:u[0];break;case"ArrowLeft":var l,s=u.indexOf(e.currentTarget)-1;t=null!=(l=u[s])?l:u[u.length-1]}null==(n=t)||n.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:i.map((function(e){var n=e.value,t=e.label,l=e.attributes;return(0,b.jsx)("li",Object.assign({role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:function(e){return u.push(e)},onKeyDown:d,onClick:c},l,{className:(0,a.Z)("tabs__item",v.tabItem,null==l?void 0:l.className,{"tabs__item--active":r===n}),children:null!=t?t:n}),n)}))})}function j(e){var n=e.lazy,t=e.children,a=e.selectedValue,l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var s=l.find((function(e){return e.props.value===a}));return s?(0,r.cloneElement)(s,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:l.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})}))})}function y(e){var n=f(e);return(0,b.jsxs)("div",{className:(0,a.Z)("tabs-container",v.tabList),children:[(0,b.jsx)(x,Object.assign({},n,e)),(0,b.jsx)(j,Object.assign({},n,e))]})}function w(e){var n=(0,g.Z)();return(0,b.jsx)(y,Object.assign({},e,{children:d(e.children)}),String(n))}},71183:(e,n,t)=>{t.d(n,{O2:()=>m,Ey:()=>g,SQ:()=>f});var r=t(67294),a=t(74866),l=t(85162),s=t(74165),i=t(15861),u=t(1841),o=t.n(u),c=t(85893);function d(){return(d=(0,i.Z)((0,s.Z)().mark((function e(n,t,r){var a,l,i,u;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((l=localStorage.getItem(n+"-until"))&&l>Date.now())){e.next=5;break}a=localStorage.getItem(n),e.next=18;break;case 5:return e.prev=5,e.next=8,fetch(n);case 8:return e.next=10,e.sent.text();case 10:a=e.sent,localStorage.setItem(n,a),localStorage.setItem(n+"-until",Date.now()+6e4),e.next=18;break;case 15:return e.prev=15,e.t0=e.catch(5),e.abrupt("return","Error fetching code, please try reloading");case 18:return i=a.split("\n"),t=t?Number(t)-1:0,r=r?Number(r):i.length,i=i.slice(t,r),u=i.reduce((function(e,n){if(0===n.length)return e;var t=n.match(/^\s+/);return t?Math.min(e,t[0].length):0}),1/0),e.abrupt("return",i.map((function(e){return e.slice(u)})).join("\n"));case 24:case"end":return e.stop()}}),e,null,[[5,15]])})))).apply(this,arguments)}const p=function(e){var n=e.url,t=e.start,a=e.end,l=e.language,s=e.fname,i=e.metastring,u=(0,r.useState)("Loading..."),p=u[0],h=u[1];return(0,r.useEffect)((function(){var e=function(e){var n=e.slice(e.indexOf("https")).split("#"),t=n[0],r=(n[1],new URL(t).pathname.split("/").slice(1)),a=r[0],l=r[1];return r[2],"https://raw.githubusercontent.com/"+a+"/"+l+"/"+r[3]+"/"+r.slice(4).join("/")}(n),r=function(e,n,t){return d.apply(this,arguments)}(e,t,a);r.then((function(e){return h(e)}))})),(0,c.jsxs)("div",{fname:s,children:[(0,c.jsx)(o(),{language:l,metastring:i+" showLineNumbers",children:p}),(0,c.jsx)("div",{style:{fontSize:"0.9em",fontWeight:600,color:"rgb(14, 117, 221)",textAlign:"center",paddingBottom:"13px",textDecoration:"underline"},children:(0,c.jsx)("a",{href:n,target:"_blank",rel:"noreferrer noopener",children:"See full example on GitHub"})})]})};var h={rust:"\ud83e\udd80 Rust",js:"\ud83c\udf10 Javascript",ts:"\ud83c\udf10 Typescript"};function m(e){var n=e.children;return Array.isArray(n)||(n=[n]),(0,c.jsx)(a.Z,{className:"language-tabs",groupId:"code-tabs",children:n.map((function(e,n){return(0,c.jsx)(l.Z,{value:e.props.value,label:h[e.props.value],children:e})}))})}function f(e){var n=e.children,t=e.language;return Array.isArray(n)||(n=[n]),n=n.map((function(e){return function(e,n){var t=e.props,r=(t.children,t.url),a=t.start,l=t.end,s=t.fname;if(e.type===g)return g({url:r,start:a,end:l,language:n,fname:s});return e}(e,t)})),1==n.length?(0,c.jsx)(l.Z,{value:0,label:n[0].props.fname,children:n[0]}):(0,c.jsx)(a.Z,{className:"file-tabs",children:n.map((function(e,n){return(0,c.jsx)(l.Z,{value:n,label:e.props.fname,children:e})}))})}function g(e){var n=e.url,t=e.start,r=e.end,a=e.language,l=e.fname,s=e.metastring;return p({url:n,start:t,end:r,language:a,fname:l,metastring:s})}}}]);