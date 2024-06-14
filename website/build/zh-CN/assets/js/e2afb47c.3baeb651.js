"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3314],{16694:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var s=n(85893),i=n(11151);const o={sidebar_position:1},r="Unit Tests",a={id:"sdk/js/testing/unit-tests",title:"Unit Tests",description:"You can unit test abstracted logic implemented by smart contract functions like regular JavaScript functions with any testing library of your liking. A simple example would look as follows",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sdk/js/testing/unit-tests.md",sourceDirName:"sdk/js/testing",slug:"/sdk/js/testing/unit-tests",permalink:"/zh-CN/sdk/js/testing/unit-tests",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/sdk/js/testing/unit-tests.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1704996595e3,sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tools",previous:{title:"Integration Tests",permalink:"/zh-CN/sdk/js/testing/integration-tests"},next:{title:"NEAR CLI",permalink:"/zh-CN/tools/near-cli"}},l={},c=[{value:"Contract",id:"contract",level:4},{value:"Unit Test File",id:"unit-test-file",level:4}];function u(t){const e={a:"a",code:"code",h1:"h1",h4:"h4",p:"p",pre:"pre",...(0,i.a)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"unit-tests",children:"Unit Tests"}),"\n",(0,s.jsx)(e.p,{children:"You can unit test abstracted logic implemented by smart contract functions like regular JavaScript functions with any testing library of your liking. A simple example would look as follows: A simple example would look as follows:"}),"\n",(0,s.jsx)(e.h4,{id:"contract",children:"Contract"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:"@NearBindgen({})\nexport class Contract {\n  ...\n  doSomething(): string {\n    return callSomeFunction();\n  }\n}\n  doSomething(): string {\n    return callSomeFunction();\n  }\n}\n"})}),"\n",(0,s.jsx)(e.h4,{id:"unit-test-file",children:"Unit Test File"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:"describe('Contract', () => {\n  it('callSomeFunction should work', () => {\n    ...\n    results = callSomeFunction();\n    // then assert results are what you expect\n    ....\n  });\n});\n    results = callSomeFunction();\n    // then assert results are what you expect\n    ....\n  });\n});\n"})}),"\n",(0,s.jsxs)(e.p,{children:["As for testing the smart contract functions themselves, we recommend using ",(0,s.jsx)(e.a,{href:"/zh-CN/sdk/js/testing/integration-tests",children:"integration tests"})," instead as they fully replicate the environment on which that logic will run."]})]})}function d(t={}){const{wrapper:e}={...(0,i.a)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(u,{...t})}):u(t)}},11151:(t,e,n)=>{n.d(e,{Z:()=>a,a:()=>r});var s=n(67294);const i={},o=s.createContext(i);function r(t){const e=s.useContext(o);return s.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function a(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:r(t.components),s.createElement(o.Provider,{value:e},t.children)}}}]);