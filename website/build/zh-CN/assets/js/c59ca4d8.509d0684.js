"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5666],{62858:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>g,frontMatter:()=>c,metadata:()=>d,toc:()=>h});var r=n(85893),a=n(11151),s=n(74866),l=n(85162),i=n(77229);const c={id:"xcc",title:"Cross Contract Call"},o=void 0,d={id:"tutorials/examples/xcc",title:"Cross Contract Call",description:"This example performs the simplest cross-contract call possible: it calls our Hello NEAR example to set and retrieve a greeting.",source:"@site/../docs/3.tutorials/examples/xcc.md",sourceDirName:"3.tutorials/examples",slug:"/tutorials/examples/xcc",permalink:"/zh-CN/tutorials/examples/xcc",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/examples/xcc.md",tags:[],version:"current",lastUpdatedBy:"Dami\xe1n Parrino",lastUpdatedAt:1702472424,formattedLastUpdatedAt:"2023\u5e7412\u670813\u65e5",frontMatter:{id:"xcc",title:"Cross Contract Call"},sidebar:"contracts",previous:{title:"Guest Book",permalink:"/zh-CN/tutorials/examples/guest-book"},next:{title:"Coin Flip",permalink:"/zh-CN/tutorials/examples/coin-flip"}},u={},h=[{value:"Starting with the Project",id:"starting-with-the-project",level:2},{value:"Interacting With the Contract",id:"interacting-with-the-contract",level:3},{value:"1. Build and Deploy the Contract",id:"1-build-and-deploy-the-contract",level:4},{value:"2. Get the Greeting",id:"2-get-the-greeting",level:4},{value:"Contract",id:"contract",level:3},{value:"Testing",id:"testing",level:2},{value:"Unit test",id:"unit-test",level:3},{value:"Integration test",id:"integration-test",level:3},{value:"Moving Forward",id:"moving-forward",level:2},{value:"Advanced Cross Contract Calls",id:"advanced-cross-contract-calls",level:3}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["This example performs the simplest cross-contract call possible: it calls our ",(0,r.jsx)(t.a,{href:"/zh-CN/tutorials/examples/hello-near",children:"Hello NEAR"})," example to set and retrieve a greeting.\nIt is one of the simplest examples on making a cross-contract call, and the perfect gateway to the world of interoperative contracts."]}),"\n",(0,r.jsx)(t.admonition,{title:"Advanced Cross-Contract Calls",type:"info",children:(0,r.jsxs)(t.p,{children:["Check the tutorial on how to perform cross-contract calls ",(0,r.jsx)(t.a,{href:"./advanced-xcc",children:"in batches and in parallel"})]})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"starting-with-the-project",children:"Starting with the Project"}),"\n",(0,r.jsxs)(t.p,{children:["You have two options to start using the project. The first and recommended is to use the app through Gitpod, which will open a web-based interactive environment. The second option is to clone the repository locally, for which you will need to install all the ",(0,r.jsx)(t.a,{href:"/zh-CN/develop/prerequisites",children:"Prerequisites"}),"."]}),"\n",(0,r.jsxs)(s.Z,{className:"language-tabs",groupId:"code-tabs",children:[(0,r.jsx)(l.Z,{value:"\ud83c\udf10 JavaScript",children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Gitpod"}),(0,r.jsx)(t.th,{children:"Clone locally"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)("a",{href:"https://gitpod.io/#https://github.com/near-examples/cross-contract-hello-js",children:(0,r.jsx)("img",{src:"https://gitpod.io/button/open-in-gitpod.svg",alt:"Open in Gitpod"})})}),(0,r.jsxs)(t.td,{children:["\ud83c\udf10 ",(0,r.jsx)(t.code,{children:"https://github.com/near-examples/cross-contract-hello-js.git"})]})]})})]})}),(0,r.jsx)(l.Z,{value:"\ud83e\udd80 Rust",children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Gitpod"}),(0,r.jsx)(t.th,{children:"Clone locally"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)("a",{href:"https://gitpod.io/#https://github.com/near-examples/cross-contract-hello-rust",children:(0,r.jsx)("img",{src:"https://gitpod.io/button/open-in-gitpod.svg",alt:"Open in Gitpod"})})}),(0,r.jsxs)(t.td,{children:["\ud83e\udd80 ",(0,r.jsx)(t.code,{children:"https://github.com/near-examples/cross-contract-hello-rust.git"})]})]})})]})})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h3,{id:"interacting-with-the-contract",children:"Interacting With the Contract"}),"\n",(0,r.jsxs)(t.p,{children:["Since this example does not have a frontend, we will interact with it through the ",(0,r.jsx)(t.a,{href:"/zh-CN/tools/near-cli",children:"NEAR CLI"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"Check the README.md. Briefly, you will need to:"}),"\n",(0,r.jsx)(t.h4,{id:"1-build-and-deploy-the-contract",children:"1. Build and Deploy the Contract"}),"\n",(0,r.jsx)(t.p,{children:"You can automatically compile and deploy the contract in the NEAR testnet by running:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"./contract/deploy.sh\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Once finished, check the ",(0,r.jsx)(t.code,{children:"neardev/dev-account"})," file to find the address in which the contract was deployed:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"cat ./contract/neardev/dev-account # e.g. dev-1659899566943-21539992274727\n"})}),"\n",(0,r.jsx)(t.h4,{id:"2-get-the-greeting",children:"2. Get the Greeting"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"query_greeting"})," performs a cross-contract call, calling the ",(0,r.jsx)(t.code,{children:"get_greeting()"})," method from ",(0,r.jsx)(t.code,{children:"hello-nearverse.testnet"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Call"})," methods can only be invoked using a NEAR account, since the account needs to pay GAS for the transaction."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"# Use near-cli to ask the contract to query the greeting\nnear call <dev-account> query_greeting --accountId <dev-account>\n"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h3,{id:"contract",children:"Contract"}),"\n",(0,r.jsxs)(t.p,{children:["The contract exposes methods to query the greeting and change it. These methods do nothing but calling ",(0,r.jsx)(t.code,{children:"get_greeting"})," and\n",(0,r.jsx)(t.code,{children:"set_greeting"})," in the ",(0,r.jsx)(t.code,{children:"hello-near"})," example."]}),"\n",(0,r.jsxs)(i.O2,{children:[(0,r.jsx)(i.SQ,{value:"\ud83c\udf10 JavaScript",language:"ts",children:(0,r.jsx)(i.Ey,{fname:"contract.ts",url:"https://github.com/near-examples/cross-contract-hello-js/blob/master/contract/src/contract.ts",start:"17",end:"39"})}),(0,r.jsx)(i.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:(0,r.jsx)(i.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/cross-contract-hello-rust/blob/main/contract/src/lib.rs",start:"24",end:"49"})})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"testing",children:"Testing"}),"\n",(0,r.jsxs)(t.p,{children:["When writing smart contracts it is very important to test all methods exhaustively. In this\nproject you have two types of tests: unit and integration. Before digging in them,\ngo ahead and perform the tests present in the dApp through the command ",(0,r.jsx)(t.code,{children:"yarn test"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"unit-test",children:"Unit test"}),"\n",(0,r.jsx)(t.p,{children:"Unit tests check individual functions in the smart contract. They are written in the\nsame language as the smart contract is."}),"\n",(0,r.jsxs)(t.p,{children:["Since this example handles Cross-contract calls, in the unit tests we only test the ",(0,r.jsx)(t.code,{children:"initialize"}),"\nmethod works. This is because unit tests are ",(0,r.jsx)(t.strong,{children:"cannot test"})," cross-contract calls."]}),"\n",(0,r.jsx)(t.h3,{id:"integration-test",children:"Integration test"}),"\n",(0,r.jsxs)(t.p,{children:["In this project in particular, the integration tests first deploy the ",(0,r.jsx)(t.code,{children:"hello-near"})," contract. Then,\nthey test that the cross-contract call correctly sets and retrieves the message. You will find the integration tests\nin ",(0,r.jsx)(t.code,{children:"integration-tests/"}),"."]}),"\n",(0,r.jsx)(i.O2,{children:(0,r.jsx)(i.SQ,{value:"\ud83c\udf10 JavaScript",language:"rust",children:(0,r.jsx)(i.Ey,{fname:"main.test.js",url:"https://github.com/near-examples/cross-contract-hello-js/blob/master/integration-tests/src/main.ava.ts",start:"9",end:"59"})})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"moving-forward",children:"Moving Forward"}),"\n",(0,r.jsxs)(t.p,{children:["A nice way to learn is by trying to expand a contract. Modify the cross contract example to use the ",(0,r.jsx)(t.a,{href:"/zh-CN/tutorials/examples/guest-book",children:"guest-book"}),"\ncontract!. In this way, you can try to make a cross-contract call that attaches money. Remember to correctly ",(0,r.jsx)(t.a,{href:"/zh-CN/develop/contracts/crosscontract#callback-method",children:"handle the callback"}),",\nand to return the money to the user in case of error."]}),"\n",(0,r.jsx)(t.h3,{id:"advanced-cross-contract-calls",children:"Advanced Cross Contract Calls"}),"\n",(0,r.jsxs)(t.p,{children:["Your contract can perform multiple cross-contract calls in simultaneous, creating promises that execute in parallel, or as a batch transaction. Check the ",(0,r.jsx)(t.a,{href:"./advanced-xcc",children:"advanced cross contract calls\ntutorial"})," to learn more."]})]})}function g(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>l});n(67294);var r=n(36905);const a={tabItem:"tabItem_Ymn6"};var s=n(85893);function l(e){var t=e.children,n=e.hidden,l=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,l),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(67294),a=n(36905),s=n(12466),l=n(16550),i=n(20469),c=n(91980),o=n(67392),d=n(50012);function u(e){var t,n;return null!=(t=null==(n=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function h(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:function(e){return u(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,o.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function g(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,s=(0,l.k6)(),i=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:a});return[(0,c._X)(i),(0,r.useCallback)((function(e){if(i){var t=new URLSearchParams(s.location.search);t.set(i,e),s.replace(Object.assign({},s.location,{search:t.toString()}))}}),[i,s])]}function m(e){var t,n,a,s,l=e.defaultValue,c=e.queryString,o=void 0!==c&&c,u=e.groupId,m=h(e),x=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:l,tabValues:m})})),v=x[0],f=x[1],j=g({queryString:o,groupId:u}),b=j[0],y=j[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),n=(0,d.Nk)(t),a=n[0],s=n[1],[a,(0,r.useCallback)((function(e){t&&s.set(e)}),[t,s])]),C=w[0],k=w[1],N=function(){var e=null!=b?b:C;return p({value:e,tabValues:m})?e:null}();return(0,i.Z)((function(){N&&f(N)}),[N]),{selectedValue:v,selectValue:(0,r.useCallback)((function(e){if(!p({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);f(e),y(e),k(e)}),[y,k,m]),tabValues:m}}var x=n(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=n(85893);function j(e){var t=e.className,n=e.block,r=e.selectedValue,l=e.selectValue,i=e.tabValues,c=[],o=(0,s.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=c.indexOf(t),a=i[n].value;a!==r&&(o(t),l(a))},u=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var r,a=c.indexOf(e.currentTarget)+1;n=null!=(r=c[a])?r:c[0];break;case"ArrowLeft":var s,l=c.indexOf(e.currentTarget)-1;n=null!=(s=c[l])?s:c[c.length-1]}null==(t=n)||t.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:i.map((function(e){var t=e.value,n=e.label,s=e.attributes;return(0,f.jsx)("li",Object.assign({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:function(e){return c.push(e)},onKeyDown:u,onClick:d},s,{className:(0,a.Z)("tabs__item",v.tabItem,null==s?void 0:s.className,{"tabs__item--active":r===t}),children:null!=n?n:t}),t)}))})}function b(e){var t=e.lazy,n=e.children,a=e.selectedValue,s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var l=s.find((function(e){return e.props.value===a}));return l?(0,r.cloneElement)(l,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:s.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})}))})}function y(e){var t=m(e);return(0,f.jsxs)("div",{className:(0,a.Z)("tabs-container",v.tabList),children:[(0,f.jsx)(j,Object.assign({},e,t)),(0,f.jsx)(b,Object.assign({},e,t))]})}function w(e){var t=(0,x.Z)();return(0,f.jsx)(y,Object.assign({},e,{children:u(e.children)}),String(t))}},77229:(e,t,n)=>{n.d(t,{Ey:()=>d,O2:()=>c,SQ:()=>o});n(67294);var r=n(74866),a=n(85162),s=n(95665),l=n.n(s),i=n(85893);function c(e){var t=e.children;return Array.isArray(t)||(t=[t]),(0,i.jsx)(r.Z,{className:"language-tabs",groupId:"code-tabs",children:t.map((function(e,t){return(0,i.jsx)(a.Z,{value:e.props.value,label:e.props.value,children:e})}))})}function o(e){var t=e.children,n=e.language;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var n=e.props,r=(n.children,n.url),a=n.start,s=n.end,l=n.fname;if(e.type===d)return d({url:r,start:a,end:s,language:t,fname:l});return e}(e,n)})),1==t.length?(0,i.jsx)(a.Z,{value:0,label:t[0].props.fname,children:t[0]}):(0,i.jsx)(r.Z,{className:"file-tabs",children:t.map((function(e,t){return(0,i.jsx)(a.Z,{value:t,label:e.props.fname,children:e})}))})}function d(e){var t=e.url,n=e.start,r=e.end,a=e.language,s=e.fname,c=t+"#";return n&&r&&(c+="L"+n+"-L"+r+"#"),(0,i.jsx)(l(),{language:a,fname:s,children:c})}}}]);