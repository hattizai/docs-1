"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[45701],{97220:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var n=o(85893),c=o(11151);const s={sidebar_position:1,title:"Public Methods"},i="Public Method Types",r={id:"sdk/js/contract-interface/public-methods",title:"Public Methods",description:"Methods can be called externally by using the view({}) or call({}) decorators within the contract class which will expose the method in the compiled WASM bytecode to be called by any other NEAR Account. Whenever a method is declared in your contract class without these decorators and is called by another NEAR Account, a MethodNotFound error will be thrown.",source:"@site/../docs/sdk/js/contract-interface/public-methods.md",sourceDirName:"sdk/js/contract-interface",slug:"/sdk/js/contract-interface/public-methods",permalink:"/sdk/js/contract-interface/public-methods",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/sdk/js/contract-interface/public-methods.md",tags:[],version:"current",lastUpdatedBy:"Honza Smid",lastUpdatedAt:1704189386e3,sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Public Methods"},sidebar:"tools",previous:{title:"Collections",permalink:"/sdk/js/contract-structure/collections"},next:{title:"Private Methods",permalink:"/sdk/js/contract-interface/private-methods"}},a={},d=[];function l(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"public-method-types",children:"Public Method Types"}),"\n",(0,n.jsxs)(t.p,{children:["Methods can be called externally by using the ",(0,n.jsx)(t.code,{children:"view({})"})," or ",(0,n.jsx)(t.code,{children:"call({})"})," decorators within the contract class which will expose the method in the compiled WASM bytecode to be called by any other NEAR Account. Whenever a method is declared in your contract class without these decorators and is called by another NEAR Account, a ",(0,n.jsx)(t.code,{children:"MethodNotFound"})," error will be thrown."]}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["If you need a contract to call itself, you can mark the function with these decorators but add the ",(0,n.jsxs)(t.a,{href:"/sdk/js/contract-interface/private-methods",children:[(0,n.jsx)(t.code,{children:"({  privateFunction: true })"})," annotation in the decorator parameters"]})," so that it will panic if called from anything but the contract itself."]})}),"\n",(0,n.jsx)(t.p,{children:"A basic usage of this would look like the following:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"@NearBindgen({})\nexport class MyContractStructure {\n    @call({}) // or @view({})\n    some_method({ parameter_a, parameter_b }) {\n        // .. method logic here\n    }\n}\n"})}),"\n",(0,n.jsxs)(t.admonition,{type:"note",children:[(0,n.jsxs)(t.mdxAdmonitionTitle,{children:[(0,n.jsx)(t.code,{children:"snake_case"})," vs ",(0,n.jsx)(t.code,{children:"camelCase"})]}),(0,n.jsxs)(t.p,{children:["We recommend using ",(0,n.jsx)(t.code,{children:"snake_case"})," for method names, contrary to the ",(0,n.jsx)(t.code,{children:"camelCase"})," convention in JavaScript. This is because the method names for a majority of contracts in the NEAR ecosystem use ",(0,n.jsx)(t.code,{children:"snake_case"}),", and it is easier to use the same convention for all contracts."]})]}),"\n",(0,n.jsxs)(t.p,{children:["Where this would expose ",(0,n.jsx)(t.code,{children:"some_method"})," from the WASM binary and allow it to be called externally."]})]})}function h(e={}){const{wrapper:t}={...(0,c.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},11151:(e,t,o)=>{o.d(t,{Z:()=>r,a:()=>i});var n=o(67294);const c={},s=n.createContext(c);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);