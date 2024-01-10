"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8157],{11398:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>h});var r=n(85893),a=n(11151),i=n(74866),s=n(85162),l=n(77229);const o={id:"coin-flip",title:"Coin Flip"},c=void 0,u={id:"tutorials/examples/coin-flip",title:"Coin Flip",description:"Coin Flip is a game where the player tries to guess the outcome of a coin flip. It is one of the simplest contracts implementing random numbers.",source:"@site/../docs/3.tutorials/examples/coin-flip.md",sourceDirName:"3.tutorials/examples",slug:"/tutorials/examples/coin-flip",permalink:"/tutorials/examples/coin-flip",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/examples/coin-flip.md",tags:[],version:"current",lastUpdatedBy:"gagdiez",lastUpdatedAt:1702155614,formattedLastUpdatedAt:"Dec 9, 2023",frontMatter:{id:"coin-flip",title:"Coin Flip"},sidebar:"contracts",previous:{title:"Cross Contract Call",permalink:"/tutorials/examples/xcc"},next:{title:"Factory",permalink:"/tutorials/examples/factory"}},d={},h=[{value:"Starting the Game",id:"starting-the-game",level:2},{value:"Interacting With the Counter",id:"interacting-with-the-counter",level:2},{value:"Structure of a dApp",id:"structure-of-a-dapp",level:2},{value:"Contract",id:"contract",level:3},{value:"Frontend",id:"frontend",level:3},{value:"Testing",id:"testing",level:2},{value:"Integration test",id:"integration-test",level:3},{value:"A Note On Randomness",id:"a-note-on-randomness",level:2}];function p(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Coin Flip is a game where the player tries to guess the outcome of a coin flip. It is one of the simplest contracts implementing random numbers."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"img",src:n(46104).Z+"",width:"960",height:"255"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"starting-the-game",children:"Starting the Game"}),"\n",(0,r.jsx)(t.p,{children:"You have two options to start the example:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Recommended:"})," use the app through Gitpod (a web-based interactive environment)"]}),"\n",(0,r.jsx)(t.li,{children:"Clone the project locally ."}),"\n"]}),"\n",(0,r.jsx)(i.Z,{className:"language-tabs",groupId:"code-tabs",children:(0,r.jsx)(s.Z,{value:"\ud83c\udf10 JavaScript",children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Gitpod"}),(0,r.jsx)(t.th,{children:"Clone locally"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)("a",{href:"https://gitpod.io/#https://github.com/near-examples/coin-flip-js.git",children:(0,r.jsx)("img",{src:"https://gitpod.io/button/open-in-gitpod.svg",alt:"Open in Gitpod"})})}),(0,r.jsxs)(t.td,{children:["\ud83c\udf10 ",(0,r.jsx)(t.code,{children:"https://github.com/near-examples/coin-flip-js.git"})]})]})})]})})}),"\n",(0,r.jsx)(t.p,{children:"If you choose Gitpod, a new browser window will open automatically with the code. Give it a minute, and the front-end will pop up (ensure the pop-up window is not blocked)."}),"\n",(0,r.jsxs)(t.p,{children:["If you are running the app locally, enter the directory where you cloned it and use ",(0,r.jsx)(t.code,{children:"yarn"})," to install dependencies, and ",(0,r.jsx)(t.code,{children:"yarn start"})," to start it."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"cd coin-flip-js\nyarn\nyarn deploy\nyarn start\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Your contract will then be ",(0,r.jsx)(t.strong,{children:"compiled"})," and ",(0,r.jsx)(t.strong,{children:"deployed"})," to an ",(0,r.jsx)(t.strong,{children:"account"})," in the ",(0,r.jsx)(t.code,{children:"testnet"})," network. When done, a browser window should open."]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"interacting-with-the-counter",children:"Interacting With the Counter"}),"\n",(0,r.jsxs)(t.p,{children:["Go ahead and log in with your NEAR account. If you don't have one, you can create one on the fly. Once logged in, use the ",(0,r.jsx)(t.code,{children:"tails"})," and ",(0,r.jsx)(t.code,{children:"heads"})," buttons to try to guess the next coin flip outcome."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.img,{alt:"img",src:n(46104).Z+"",width:"960",height:"255"}),"\n",(0,r.jsx)(t.em,{children:"Frontend of the Game"})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"structure-of-a-dapp",children:"Structure of a dApp"}),"\n",(0,r.jsx)(t.p,{children:"Now that you understand what the dApp does, let us take a closer look to its structure:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["The frontend code lives in the ",(0,r.jsx)(t.code,{children:"/frontend"})," folder."]}),"\n",(0,r.jsxs)(t.li,{children:["The smart contract code is in the ",(0,r.jsx)(t.code,{children:"/contract"})," folder."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"contract",children:"Contract"}),"\n",(0,r.jsxs)(t.p,{children:["The contract presents 2 methods: ",(0,r.jsx)(t.code,{children:"flip_coin"}),", and ",(0,r.jsx)(t.code,{children:"points_of"}),"."]}),"\n",(0,r.jsx)(l.O2,{children:(0,r.jsx)(l.SQ,{value:"\ud83c\udf10 JavaScript",language:"ts",children:(0,r.jsx)(l.Ey,{fname:"contract.ts",url:"https://github.com/near-examples/coin-flip-workshop-js/blob/main/contract/src/contract.ts",start:"23",end:"56"})})}),"\n",(0,r.jsx)(t.h3,{id:"frontend",children:"Frontend"}),"\n",(0,r.jsxs)(t.p,{children:["The frontend is composed by a single HTML file (",(0,r.jsx)(t.code,{children:"/index.html"}),"). This file defines the components displayed in the screen."]}),"\n",(0,r.jsxs)(t.p,{children:["The website's logic lives in ",(0,r.jsx)(t.code,{children:"/assets/js/index.js"}),", which communicates with the contract through a ",(0,r.jsx)(t.code,{children:"wallet"}),". You will notice in ",(0,r.jsx)(t.code,{children:"/assets/js/index.js"})," the following code:"]}),"\n",(0,r.jsx)(l.O2,{children:(0,r.jsx)(l.SQ,{value:"\ud83c\udf10 JavaScript",language:"ts",children:(0,r.jsx)(l.Ey,{fname:"index.js",url:"https://github.com/near-examples/coin-flip-workshop-js/blob/main/frontend/index.js",start:"10",end:"19"})})}),"\n",(0,r.jsxs)(t.p,{children:["It indicates our app, when it starts, to check if the user is already logged in and execute either ",(0,r.jsx)(t.code,{children:"signedInFlow()"})," or ",(0,r.jsx)(t.code,{children:"signedOutFlow()"}),"."]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"testing",children:"Testing"}),"\n",(0,r.jsxs)(t.p,{children:["When writing smart contracts, it is very important to test all methods exhaustively. In this\nproject, you have two types: unit and integration tests. Before digging into them,\ngo ahead and perform the tests present in the dApp through the command ",(0,r.jsx)(t.code,{children:"yarn test"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"integration-test",children:"Integration test"}),"\n",(0,r.jsxs)(t.p,{children:["Integration tests are generally written in JavaScript. They automatically deploy a new\ncontract and execute methods on it. In this way, integration tests simulate interactions\nfrom users in a realistic scenario. You will find the integration tests for the ",(0,r.jsx)(t.code,{children:"coin-flip"}),"\nin ",(0,r.jsx)(t.code,{children:"tests/integration-tests"}),"."]}),"\n",(0,r.jsx)(l.O2,{children:(0,r.jsx)(l.SQ,{value:"\ud83c\udf10 JavaScript",language:"ts",children:(0,r.jsx)(l.Ey,{fname:"main.test.js",url:"https://github.com/near-examples/coin-flip-workshop-js/blob/main/integration-tests/src/main.ava.ts",start:"32",end:"56"})})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"a-note-on-randomness",children:"A Note On Randomness"}),"\n",(0,r.jsxs)(t.p,{children:["Randomness in the blockchain is a complex subject. We recommend you to read and investigate about it.\nYou can start with our ",(0,r.jsx)(t.a,{href:"/develop/contracts/security/random",children:"security page on it"}),"."]})]})}function m(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>s});n(67294);var r=n(36905);const a={tabItem:"tabItem_Ymn6"};var i=n(85893);function s(e){var t=e.children,n=e.hidden,s=e.className;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,s),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(67294),a=n(36905),i=n(12466),s=n(16550),l=n(20469),o=n(91980),c=n(67392),u=n(50012);function d(e){var t,n;return null!=(t=null==(n=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function h(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:function(e){return d(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,i=(0,s.k6)(),l=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:a});return[(0,o._X)(l),(0,r.useCallback)((function(e){if(l){var t=new URLSearchParams(i.location.search);t.set(l,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[l,i])]}function f(e){var t,n,a,i,s=e.defaultValue,o=e.queryString,c=void 0!==o&&o,d=e.groupId,f=h(e),g=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:s,tabValues:f})})),x=g[0],j=g[1],v=m({queryString:c,groupId:d}),b=v[0],y=v[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),n=(0,u.Nk)(t),a=n[0],i=n[1],[a,(0,r.useCallback)((function(e){t&&i.set(e)}),[t,i])]),I=w[0],k=w[1],S=function(){var e=null!=b?b:I;return p({value:e,tabValues:f})?e:null}();return(0,l.Z)((function(){S&&j(S)}),[S]),{selectedValue:x,selectValue:(0,r.useCallback)((function(e){if(!p({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);j(e),y(e),k(e)}),[y,k,f]),tabValues:f}}var g=n(72389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=n(85893);function v(e){var t=e.className,n=e.block,r=e.selectedValue,s=e.selectValue,l=e.tabValues,o=[],c=(0,i.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var t=e.currentTarget,n=o.indexOf(t),a=l[n].value;a!==r&&(c(t),s(a))},d=function(e){var t,n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var r,a=o.indexOf(e.currentTarget)+1;n=null!=(r=o[a])?r:o[0];break;case"ArrowLeft":var i,s=o.indexOf(e.currentTarget)-1;n=null!=(i=o[s])?i:o[o.length-1]}null==(t=n)||t.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:l.map((function(e){var t=e.value,n=e.label,i=e.attributes;return(0,j.jsx)("li",Object.assign({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:function(e){return o.push(e)},onKeyDown:d,onClick:u},i,{className:(0,a.Z)("tabs__item",x.tabItem,null==i?void 0:i.className,{"tabs__item--active":r===t}),children:null!=n?n:t}),t)}))})}function b(e){var t=e.lazy,n=e.children,a=e.selectedValue,i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var s=i.find((function(e){return e.props.value===a}));return s?(0,r.cloneElement)(s,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:i.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})}))})}function y(e){var t=f(e);return(0,j.jsxs)("div",{className:(0,a.Z)("tabs-container",x.tabList),children:[(0,j.jsx)(v,Object.assign({},e,t)),(0,j.jsx)(b,Object.assign({},e,t))]})}function w(e){var t=(0,g.Z)();return(0,j.jsx)(y,Object.assign({},e,{children:d(e.children)}),String(t))}},77229:(e,t,n)=>{n.d(t,{Ey:()=>u,O2:()=>o,SQ:()=>c});n(67294);var r=n(74866),a=n(85162),i=n(95665),s=n.n(i),l=n(85893);function o(e){var t=e.children;return Array.isArray(t)||(t=[t]),(0,l.jsx)(r.Z,{className:"language-tabs",groupId:"code-tabs",children:t.map((function(e,t){return(0,l.jsx)(a.Z,{value:e.props.value,label:e.props.value,children:e})}))})}function c(e){var t=e.children,n=e.language;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var n=e.props,r=(n.children,n.url),a=n.start,i=n.end,s=n.fname;if(e.type===u)return u({url:r,start:a,end:i,language:t,fname:s});return e}(e,n)})),1==t.length?(0,l.jsx)(a.Z,{value:0,label:t[0].props.fname,children:t[0]}):(0,l.jsx)(r.Z,{className:"file-tabs",children:t.map((function(e,t){return(0,l.jsx)(a.Z,{value:t,label:e.props.fname,children:e})}))})}function u(e){var t=e.url,n=e.start,r=e.end,a=e.language,i=e.fname,o=t+"#";return n&&r&&(o+="L"+n+"-L"+r+"#"),(0,l.jsx)(s(),{language:a,fname:i,children:o})}},46104:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/coin-flip-54eec9769bd7c2c68778790d69fcd4ab.png"}}]);