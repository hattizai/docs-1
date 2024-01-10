"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8392],{50716:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>d,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var n=t(85893),s=t(11151);const i={id:"providers",title:"RPC Providers"},d=void 0,c={id:"api/rpc/providers",title:"RPC Providers",description:"There are multiple RPC providers from which you can choose from. These providers will work as intermediaries to help you interact with the NEAR network.",source:"@site/../docs/5.api/rpc/providers.md",sourceDirName:"5.api/rpc",slug:"/api/rpc/providers",permalink:"/ko/api/rpc/providers",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/5.api/rpc/providers.md",tags:[],version:"current",lastUpdatedBy:"Vladimir Grichina",lastUpdatedAt:1702011996,formattedLastUpdatedAt:"2023\ub144 12\uc6d4 8\uc77c",frontMatter:{id:"providers",title:"RPC Providers"},sidebar:"api",previous:{title:"Home",permalink:"/ko/api/rpc/introduction"},next:{title:"Setup",permalink:"/ko/api/rpc/setup"}},o={},h=[];function a(e){const r={a:"a",admonition:"admonition",code:"code",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"There are multiple RPC providers from which you can choose from. These providers will work as intermediaries to help you interact with the NEAR network.\nYou'll experience different latency levels depending on the provider's location. You can potentially use multiple providers for redundancy and\nbalancing."}),"\n",(0,n.jsx)(r.admonition,{type:"tip",children:(0,n.jsxs)(r.p,{children:["If you want to use a custom RPC provider with NEAR Wallet Selector, ",(0,n.jsx)(r.a,{href:"/ko/develop/integrate/frontend#setting-customs-rpc-endpoints",children:"check this example"}),"."]})}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Provider"}),(0,n.jsx)(r.th,{children:"Endpoint Root"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/ko/api/rpc/setup",children:"NEAR"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"https://rpc.mainnet.near.org"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://www.pagoda.co/console",children:"Pagoda"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"https://near-mainnet.api.pagoda.co/rpc/v1"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://docs.1rpc.io/overview/about-1rpc",children:"1RPC"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"https://1rpc.io/near"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://docs.allthatnode.com/protocols/near/",children:"All That Node"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"https://near-mainnet-rpc.allthatnode.com:3030"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://www.ankr.com/docs/rpc-service/chains/chains-list/#near",children:"ankr.com"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"https://rpc.ankr.com/near"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://chains.blockpi.io/#/near",children:"BlockPi"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"https://public-rpc.blockpi.io/http/near"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://chainstack.com/build-better-with-near/",children:"Chainstack"})}),(0,n.jsx)(r.td,{children:"-"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://github.com/vgrichina/fast-near",children:"fast-near"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"https://rpc.web4.near.page"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://gateway.fm/",children:"Gateway.fm"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"https://rpc.near.gateway.fm/"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://getblock.io/nodes/near/",children:"GetBlock"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"https://getblock.io/nodes/near/"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://docs.infura.io/infura/networks/near",children:"Infura"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"https://near-mainnet.infura.io/v3/"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://lavenderfive.com/",children:"Lavender.Five Nodes"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"https://near.lavenderfive.com/"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://nodereal.io",children:"NodeReal"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"https://nodereal.io/api-marketplace/near-rpc"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://nownodes.io/",children:"NOWNodes"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"https://near.nownodes.io/"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://omniatech.io",children:"OMNIA"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"https://endpoints.omniatech.io/v1/near/mainnet/public"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://www.quicknode.com/chains/near",children:"QuickNode"})}),(0,n.jsx)(r.td,{children:"-"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://docs.seracle.com/",children:"Seracle"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"https://api.seracle.com/saas/baas/rpc/near/mainnet/public/"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://www.zeeve.io/",children:"Zeeve"})}),(0,n.jsx)(r.td,{children:"``"})]})]})]})]})}function l(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},11151:(e,r,t)=>{t.d(r,{Z:()=>c,a:()=>d});var n=t(67294);const s={},i=n.createContext(s);function d(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);