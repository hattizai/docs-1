"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7177],{10225:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var a=n(85893),o=n(11151);const s={sidebar_position:3,title:"Payable Methods"},r="Payable Methods",c={id:"sdk/js/contract-interface/payable-methods",title:"Payable Methods",description:"We can allow methods to accept a NEAR token transfer together with the function call. This is done so that contracts can define a fee in tokens that needs to be paid when they are used. By default the methods are not payable and they will throw an error if someone will attempt to attach tokens to them during the invocation. This is done for safety reasons, in case someone accidentally transfers tokens during the function call. This is done so that contracts can define a fee in tokens that needs to be paid when they are used. By default the methods are not payable and they will throw an error if someone will attempt to attach tokens to them during the invocation. This is done for safety reasons, in case someone accidentally transfers tokens during the function call.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sdk/js/contract-interface/payable-methods.md",sourceDirName:"sdk/js/contract-interface",slug:"/sdk/js/contract-interface/payable-methods",permalink:"/zh-CN/sdk/js/contract-interface/payable-methods",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/sdk/js/contract-interface/payable-methods.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1704996595e3,sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Payable Methods"},sidebar:"tools",previous:{title:"Private Methods",permalink:"/zh-CN/sdk/js/contract-interface/private-methods"},next:{title:"Callbacks",permalink:"/zh-CN/sdk/js/cross-contract/callbacks"}},i={},d=[];function l(e){const t={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"payable-methods",children:"Payable Methods"}),"\n",(0,a.jsx)(t.p,{children:"We can allow methods to accept a NEAR token transfer together with the function call. This is done so that contracts can define a fee in tokens that needs to be paid when they are used. By default the methods are not payable and they will throw an error if someone will attempt to attach tokens to them during the invocation. This is done for safety reasons, in case someone accidentally transfers tokens during the function call. This is done so that contracts can define a fee in tokens that needs to be paid when they are used. By default the methods are not payable and they will throw an error if someone will attempt to attach tokens to them during the invocation. This is done for safety reasons, in case someone accidentally transfers tokens during the function call."}),"\n",(0,a.jsxs)(t.p,{children:["To declare a method as payable, use the ",(0,a.jsx)(t.code,{children:"({ payableFunction: true })"})," decorator parameter within the ",(0,a.jsxs)(t.a,{href:"/zh-CN/sdk/js/contract-structure/near-bindgen",children:[(0,a.jsx)(t.code,{children:"NearBindgen"})," decorated contract class"]})," as follows:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"@call({ payableFunction: true })\nmy_method({}) {\n    // ...\n}\n}\n"})}),"\n",(0,a.jsxs)(t.p,{children:["This will allow the ",(0,a.jsx)(t.code,{children:"my_method"})," function to be called with NEAR Tokens attached to the call, transferring tokens to the contract."]}),"\n",(0,a.jsx)(t.p,{children:"Example:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'@NearBindgen({})\nexport class Contract {\n    @call({ payableFunction: true })\n    take_my_money({}) {\n        near.log("Thanks!");\n    }\n\n    @call({})\n    do_not_take_my_money({}) {\n        near.log("No thanks!");\n    }\n}\n'})}),"\n",(0,a.jsx)(t.p,{children:"is equivalent to:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'@NearBindgen({})\nexport class Contract {\n    @call({})\n    take_my_money({}) {\n        near.log("Thanks!");\n    }\n\n    @call({})\n    do_not_take_my_money({}) {\n        if (near.attachedDeposit() > BigInt(0)) {\n            throw new Error("Method do_not_take_my_money doesn\'t accept deposit");\n        }\n        near.log("No thanks!");\n    }\n}\n'})})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>r});var a=n(67294);const o={},s=a.createContext(o);function r(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);