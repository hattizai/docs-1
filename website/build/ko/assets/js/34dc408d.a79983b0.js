"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7392],{41659:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>x,frontMatter:()=>s,metadata:()=>c,toc:()=>h});var r=t(85893),a=t(11151),i=t(74866),l=t(85162);const s={id:"near",title:"Near"},o=void 0,c={id:"bos/api/near",title:"Near",description:"VM provides a convenient API to interact with the NEAR blockchain. There are three methods:",source:"@site/../docs/bos/api/near.md",sourceDirName:"bos/api",slug:"/bos/api/near",permalink:"/ko/bos/api/near",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/bos/api/near.md",tags:[],version:"current",lastUpdatedBy:"gagdiez",lastUpdatedAt:1702155614,formattedLastUpdatedAt:"2023\ub144 12\uc6d4 9\uc77c",frontMatter:{id:"near",title:"Near"},sidebar:"integrate",previous:{title:"State",permalink:"/ko/bos/api/state"},next:{title:"Overview",permalink:"/ko/bos/api/social"}},d={},h=[{value:"Near.block",id:"nearblock",level:2},{value:"Example",id:"example",level:3},{value:"Near.call",id:"nearcall",level:2},{value:"Example",id:"example-1",level:3},{value:"Near.view",id:"nearview",level:2},{value:"Call and View Example",id:"call-and-view-example",level:3}];function u(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"VM provides a convenient API to interact with the NEAR blockchain. There are three methods:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#nearblock",children:(0,r.jsx)(n.code,{children:"Near.block"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#nearcall",children:(0,r.jsx)(n.code,{children:"Near.call"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#nearview",children:(0,r.jsx)(n.code,{children:"Near.view"})})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"nearblock",children:"Near.block"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"param"}),(0,r.jsx)(n.th,{children:"required"}),(0,r.jsx)(n.th,{children:"type"}),(0,r.jsx)(n.th,{children:"description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"blockHeightOrFinality"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:"optional"})}),(0,r.jsx)(n.td,{children:"any"}),(0,r.jsxs)(n.td,{children:["The block height or finality level to use for the blockchain query (desired block height, or one of the following strings: ",(0,r.jsx)(n.code,{children:"optimistic"}),", ",(0,r.jsx)(n.code,{children:"final"}),")"]})]})})]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"desired block height: The height of the specific block to query, expressed as a positive integer"}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"optimistic"}),": Uses the latest block recorded on the node that responded to your query (< 1 second delay)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"final"}),": a block that has been validated on at least 66% of the nodes in the network (approx. 2s)"]}),"\n"]})}),"\n",(0,r.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(l.Z,{value:"request",label:"Request",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'return Near.block("optimistic");\n'})})}),(0,r.jsx)(l.Z,{value:"response",label:"Response",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "author": "cryptium.poolv1.near",\n  "chunks": [\n    {\n      "balance_burnt": "1401758302520100000000",\n      "chunk_hash": "2a43V7ovicNbSsLEDL3yp1WJWa3bUWvHv5xz52vWqaSL",\n      "encoded_length": 1898,\n      "encoded_merkle_root": "8i97jVjroXatbDq12CXw8dfkQaX49cWgitD7Pdj61AFR",\n      "gas_limit": 1000000000000000,\n      "gas_used": 15913198926319,\n      "height_created": 85885463,\n      "height_included": 85885463,\n      "outcome_root": "3M7Tx68bNtHvPLaavGEP7FovdULhppHFBavPCNjkgD5r",\n      "outgoing_receipts_root": "FnKFqjSFfcFZ45k1ftG6tmnGD3uoV5VTmkAUYHbaBRRK",\n      "prev_block_hash": "5YSsd2iwtwTLETkJvPVef5XbpER8NzJ6JUCuXLTnfPcm",\n      "prev_state_root": "3UwJpoQKhuCAqbNFdNRQuNLPBNT5kQxwVy5CHNjLdcQi",\n      "rent_paid": "0",\n      "shard_id": 0,\n      "signature": "ed25519:3MJhP6r3pyX1TaUWyW6KrWNdSWrzrR5VctP3MqLphzUFWTiNux9kXXnUAqmjLiYbDZ9w3QqVXPTUZDYiynGPTfab",\n      "tx_root": "DHZ2oaett6NBGWoPb5SrB7gdQFaXEBapFXA2FAdHHi5r",\n      "validator_proposals": [],\n      "validator_reward": "0"\n    },\n    {\n      "balance_burnt": "0",\n      "chunk_hash": "4XHDgq6LL9TzYXDcK4vfnVyFM186RVzjgebZH5gbuzkK",\n      "encoded_length": 8,\n      "encoded_merkle_root": "9zYue7drR1rhfzEEoc4WUXzaYRnRNihvRoGt1BgK7Lkk",\n      "gas_limit": 1000000000000000,\n      "gas_used": 0,\n      "height_created": 85885463,\n      "height_included": 85885463,\n      "outcome_root": "11111111111111111111111111111111",\n      "outgoing_receipts_root": "8s41rye686T2ronWmFE38ji19vgeb6uPxjYMPt8y8pSV",\n      "prev_block_hash": "5YSsd2iwtwTLETkJvPVef5XbpER8NzJ6JUCuXLTnfPcm",\n      "prev_state_root": "2rXZaz7jwGb4ro6XhsQ7a1ZZnXqbx3QMjuKsViQUvJBV",\n      "rent_paid": "0",\n      "shard_id": 1,\n      "signature": "ed25519:Sz7m5JsWR29EP7V1GBzYgkYah3Tw5Zitrq81WpLibrJWiD6RQFWc6BDh3Z2fWwz9FtFqpSy85nvSmZ4UDPZciMC",\n      "tx_root": "11111111111111111111111111111111",\n      "validator_proposals": [],\n      "validator_reward": "0"\n    }\n  ],\n}\n'})})})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"nearcall",children:"Near.call"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"param"}),(0,r.jsx)(n.th,{children:"required"}),(0,r.jsx)(n.th,{children:"type"}),(0,r.jsx)(n.th,{children:"description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"contractName"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"required"})}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Name of the smart contract to call"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"methodName"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"required"})}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Name of the method to call on the smart contract"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"args"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:"optional"})}),(0,r.jsx)(n.td,{children:"object instance"}),(0,r.jsx)(n.td,{children:"Arguments to pass to the smart contract method as an object instance"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"gas"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:"optional"})}),(0,r.jsx)(n.td,{children:"string / number"}),(0,r.jsx)(n.td,{children:"Maximum amount of gas to be used for the transaction (default 300Tg)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"deposit"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:"optional"})}),(0,r.jsx)(n.td,{children:"string / number"}),(0,r.jsx)(n.td,{children:"Amount of NEAR tokens to attach to the call as deposit (in yoctoNEAR units)"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"This will conduct a call to a smart contract that will store a message onchain."}),"\n",(0,r.jsx)(n.h3,{id:"example-1",children:"Example"}),"\n",(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(l.Z,{value:"request",label:"Request",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'return Near.call("nearsocialexamples.near", "set_greeting", {\n  message: "Hi Near Social",\n});\n'})})}),(0,r.jsxs)(l.Z,{value:"response",label:"Response",children:[(0,r.jsxs)(n.p,{children:["Upon hitting the ",(0,r.jsx)(n.code,{children:"Render"})," button in ",(0,r.jsx)(n.code,{children:"Widget Editor"})," you should see this:"]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://i.imgur.com/Lft2rtR.png",alt:"result"})}),(0,r.jsxs)(n.p,{children:["Please take a look at ",(0,r.jsx)(n.a,{href:"https://nearblocks.io/txns/8PyDVdbizhNj81LxfwdZ1WidKZyS8HVZp8udPKgzFiNi",children:"this Explorer link"})," to see the details related to this ",(0,r.jsx)(n.code,{children:"Near.call"})," method."]})]})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"nearview",children:"Near.view"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"param"}),(0,r.jsx)(n.th,{children:"required"}),(0,r.jsx)(n.th,{children:"type"}),(0,r.jsx)(n.th,{children:"description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"contractName"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"required"})}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Name of the smart contract"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"methodName"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"required"})}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Name of the method to call"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"args"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:"optional"})}),(0,r.jsx)(n.td,{children:"object instance"}),(0,r.jsx)(n.td,{children:"Arguments to pass to the method"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"blockId/finality"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:"optional"})}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Block ID or finality of the transaction"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"subscribe"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:"optional"})}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"This feature allows users to subscribe to a query, which automatically refreshes the data for all subscribers every 5 seconds."})]})]})]}),"\n",(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(l.Z,{value:"request",label:"Request",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'return Near.view("nearsocialexamples.near", "get_greeting", `{}`);\n'})})}),(0,r.jsxs)(l.Z,{value:"response",label:"Response",children:[(0,r.jsxs)(n.p,{children:["Upon hitting the ",(0,r.jsx)(n.code,{children:"Render"})," button in ",(0,r.jsx)(n.code,{children:"Widget Editor"})," you should see this:"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'"Hi Near Social";\n'})})]})]}),"\n",(0,r.jsx)(n.h3,{id:"call-and-view-example",children:"Call and View Example"}),"\n",(0,r.jsxs)(n.p,{children:["Below is an example of how to conduct a Call and View Method within ",(0,r.jsx)(n.code,{children:"near.social"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'State.init({\n  value: "value to update",\n});\n\nconsole.log(Near.view("nearsocialexamples.near", "get_greeting"));\n\nconst testCall = () => {\n  return Near.call("nearsocialexamples.near", "set_greeting", {\n    message: "Hi Near Social",\n  });\n};\n\nconst testView = () => {\n  State.update({\n    value: Near.view("nearsocialexamples.near", "get_greeting"),\n  });\n};\n\nreturn (\n  <div>\n    <button onClick={testCall}>test call</button>\n    <button onClick={testView}>test view</button>\n\n    <div>{state.value}</div>\n  </div>\n);\n'})})]})}function x(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>l});t(67294);var r=t(36905);const a={tabItem:"tabItem_Ymn6"};var i=t(85893);function l(e){var n=e.children,t=e.hidden,l=e.className;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,l),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>N});var r=t(67294),a=t(36905),i=t(12466),l=t(16550),s=t(20469),o=t(91980),c=t(67392),d=t(50012);function h(e){var n,t;return null!=(n=null==(t=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function u(e){var n=e.values,t=e.children;return(0,r.useMemo)((function(){var e=null!=n?n:function(e){return h(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,c.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function x(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function j(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId,i=(0,l.k6)(),s=function(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:t,groupId:a});return[(0,o._X)(s),(0,r.useCallback)((function(e){if(s){var n=new URLSearchParams(i.location.search);n.set(s,e),i.replace(Object.assign({},i.location,{search:n.toString()}))}}),[s,i])]}function p(e){var n,t,a,i,l=e.defaultValue,o=e.queryString,c=void 0!==o&&o,h=e.groupId,p=u(e),m=(0,r.useState)((function(){return function(e){var n,t=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!x({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var a=null!=(n=r.find((function(e){return e.default})))?n:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:l,tabValues:p})})),b=m[0],v=m[1],f=j({queryString:c,groupId:h}),g=f[0],k=f[1],N=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:h}.groupId),t=(0,d.Nk)(n),a=t[0],i=t[1],[a,(0,r.useCallback)((function(e){n&&i.set(e)}),[n,i])]),w=N[0],y=N[1],_=function(){var e=null!=g?g:w;return x({value:e,tabValues:p})?e:null}();return(0,s.Z)((function(){_&&v(_)}),[_]),{selectedValue:b,selectValue:(0,r.useCallback)((function(e){if(!x({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);v(e),k(e),y(e)}),[k,y,p]),tabValues:p}}var m=t(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(85893);function f(e){var n=e.className,t=e.block,r=e.selectedValue,l=e.selectValue,s=e.tabValues,o=[],c=(0,i.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var n=e.currentTarget,t=o.indexOf(n),a=s[t].value;a!==r&&(c(n),l(a))},h=function(e){var n,t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var r,a=o.indexOf(e.currentTarget)+1;t=null!=(r=o[a])?r:o[0];break;case"ArrowLeft":var i,l=o.indexOf(e.currentTarget)-1;t=null!=(i=o[l])?i:o[o.length-1]}null==(n=t)||n.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:s.map((function(e){var n=e.value,t=e.label,i=e.attributes;return(0,v.jsx)("li",Object.assign({role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:function(e){return o.push(e)},onKeyDown:h,onClick:d},i,{className:(0,a.Z)("tabs__item",b.tabItem,null==i?void 0:i.className,{"tabs__item--active":r===n}),children:null!=t?t:n}),n)}))})}function g(e){var n=e.lazy,t=e.children,a=e.selectedValue,i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var l=i.find((function(e){return e.props.value===a}));return l?(0,r.cloneElement)(l,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:i.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})}))})}function k(e){var n=p(e);return(0,v.jsxs)("div",{className:(0,a.Z)("tabs-container",b.tabList),children:[(0,v.jsx)(f,Object.assign({},e,n)),(0,v.jsx)(g,Object.assign({},e,n))]})}function N(e){var n=(0,m.Z)();return(0,v.jsx)(k,Object.assign({},e,{children:h(e.children)}),String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>l});var r=t(67294);const a={},i=r.createContext(a);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);