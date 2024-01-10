"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7955],{44408:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var n=s(85893),r=s(11151);const o={id:"prerequisites",title:"Prerequisites"},i=void 0,a={id:"develop/prerequisites",title:"Prerequisites",description:"In order to develop smart contracts you will need Node.js for javascript, and the rust toolchain for Rust.",source:"@site/../docs/2.develop/prerequisites.md",sourceDirName:"2.develop",slug:"/develop/prerequisites",permalink:"/develop/prerequisites",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.develop/prerequisites.md",tags:[],version:"current",lastUpdatedBy:"gagdiez",lastUpdatedAt:1660065481,formattedLastUpdatedAt:"Aug 9, 2022",frontMatter:{id:"prerequisites",title:"Prerequisites"}},c={},d=[{value:"Developing Contracts in Rust",id:"developing-contracts-in-rust",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"In order to develop smart contracts you will need Node.js for javascript, and the rust toolchain for Rust."}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"developing-contracts-in-rust",children:"Developing Contracts in Rust"}),"\n",(0,n.jsxs)(t.p,{children:["Follow ",(0,n.jsx)(t.a,{href:"https://doc.rust-lang.org/book/ch01-01-installation.html",children:"these instructions"})," for setting up Rust. Then, add the ",(0,n.jsx)(t.code,{children:"wasm32-unknown-unknown"})," toolchain which enables compiling Rust to ",(0,n.jsx)(t.a,{href:"https://webassembly.org/",children:"Web Assembly (wasm)"}),", the low-level language used by the NEAR platform."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"# Get Rust in linux and MacOS\ncurl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh\nsource $HOME/.cargo/env\n\n# Add the wasm toolchain\nrustup target add wasm32-unknown-unknown\n"})}),"\n",(0,n.jsx)(t.hr,{})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>a,a:()=>i});var n=s(67294);const r={},o=n.createContext(r);function i(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);