"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3295],{35507:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var s=n(85893),i=n(11151);const a={sidebar_position:1,sidebar_label:"Setup"},o="Setup Alerts & Triggers",l={id:"pagoda/alerts/setup",title:"Setup Alerts & Triggers",description:"Please be advised that these tools and services will be discontinued soon.",source:"@site/../docs/pagoda/alerts/setup.md",sourceDirName:"pagoda/alerts",slug:"/pagoda/alerts/setup",permalink:"/zh-CN/pagoda/alerts/setup",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/pagoda/alerts/setup.md",tags:[],version:"current",lastUpdatedBy:"Dami\xe1n Parrino",lastUpdatedAt:1712614736e3,sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Setup"},sidebar:"pagoda",previous:{title:"Introduction",permalink:"/zh-CN/pagoda/alerts/intro"},next:{title:"Webhooks Example",permalink:"/zh-CN/pagoda/alerts/webhooks"}},r={},d=[{value:"Setting up E-mail alerts",id:"setting-up-e-mail-alerts",level:2},{value:"Setting up Telegram alerts",id:"setting-up-telegram-alerts",level:2},{value:"Private Message Alerts",id:"private-message-alerts",level:3},{value:"Group message alerts",id:"group-message-alerts",level:3},{value:"Setting up Event Log Alerts",id:"setting-up-event-log-alerts",level:2},{value:"Setting up Function Call Specific Alerts",id:"setting-up-function-call-specific-alerts",level:2}];function c(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"setup-alerts--triggers",children:"Setup Alerts & Triggers"}),"\n",(0,s.jsx)(t.admonition,{type:"warning",children:(0,s.jsx)(t.p,{children:"Please be advised that these tools and services will be discontinued soon."})}),"\n",(0,s.jsx)(t.h2,{id:"setting-up-e-mail-alerts",children:"Setting up E-mail alerts"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Navigate to ",(0,s.jsx)(t.a,{href:"https://console.pagoda.co",children:"console.pagoda.co"})," and log-in"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Navigate to the ",(0,s.jsx)("kbd",{children:"Alerts"})," tab"]}),"\n",(0,s.jsx)("img",{width:"20%",src:"/docs/pagoda/setup1.png"}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Select a target address for the alert to listen to"}),"\n",(0,s.jsx)("img",{width:"60%",src:"/docs/pagoda/setup2.png"}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Select one of the following conditions to listen for"}),"\n",(0,s.jsx)("img",{width:"60%",src:"/docs/pagoda/setup3.png"}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Select email as the destination to send alerts to and enter an email address to send the alert to"}),"\n",(0,s.jsx)("img",{width:"60%",src:"/docs/pagoda/setup4.png"}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"This email address will need to be verified before it can be used as a valid alert destination."}),"\n",(0,s.jsx)("img",{width:"60%",src:"/docs/pagoda/setup5.png"}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:'Be sure that the email destination is toggled on as shown below and click "Create Alert" to finish setting up your email alert'}),"\n",(0,s.jsx)("img",{width:"60%",src:"/docs/pagoda/setup6.png"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"setting-up-telegram-alerts",children:"Setting up Telegram alerts"}),"\n",(0,s.jsx)(t.p,{children:"Follow the steps above to begin setting-up telegram alerts. When selecting the destination select Telegram and follow these steps to authorize Alerts"}),"\n",(0,s.jsx)("img",{width:"60%",src:"/docs/pagoda/setup7.png"}),"\n",(0,s.jsx)(t.h3,{id:"private-message-alerts",children:"Private Message Alerts"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:'On the device that is logged into the telegram aclick "Open Telegram" or scan the QR code.'}),"\n",(0,s.jsx)("img",{width:"60%",src:"/docs/pagoda/setup8.png"}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:'by Telegram. Hit "Send Message" to continue'}),"\n",(0,s.jsx)("img",{width:"40%",src:"/docs/pagoda/setup9.png"}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:'Once inside the chat, hit "Start" to begin receiving alerts at this destination'}),"\n",(0,s.jsx)("img",{width:"60%",src:"/docs/pagoda/setup10.png"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"group-message-alerts",children:"Group message alerts"}),"\n",(0,s.jsxs)(t.p,{children:["For group chats, add ",(0,s.jsx)(t.code,{children:"PagodaDevConsoleBot"})," and copy the message you see in your on-screen modal and send it in the chat that includes",(0,s.jsx)(t.code,{children:"PagodaDevConsoleBot"})," to authorize the group chat destination"]}),"\n",(0,s.jsx)("img",{width:"70%",src:"/docs/pagoda/setup11.png"}),"\n",(0,s.jsx)(t.h2,{id:"setting-up-event-log-alerts",children:"Setting up Event Log Alerts"}),"\n",(0,s.jsxs)(t.p,{children:["You can listen to on-chain events occurring to contracts that follow NEPs standards like NEP-171 (NFTs), NEP-141 (fungible tokens), or NEP-145 (storage management). All NEAR NEPs can be found on the ",(0,s.jsx)(t.a,{href:"https://nomicon.io/Standards/",children:"Nomicon NEAR site"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["To set-up an alert for an event, for example ",(0,s.jsx)(t.code,{children:"nft_transfer"})," from ",(0,s.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Core",children:"NEP-171 version 1.1.0"}),":"]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Follow the steps above to begin setting up an alert."}),"\n",(0,s.jsx)(t.li,{children:'Select the "Event Logged" condition,'}),"\n",(0,s.jsxs)(t.li,{children:["Type the event name ",(0,s.jsx)(t.code,{children:"nft_transfer"}),","]}),"\n",(0,s.jsxs)(t.li,{children:["The standard ",(0,s.jsx)(t.code,{children:"nep171"}),", and"]}),"\n",(0,s.jsxs)(t.li,{children:["Add the version ",(0,s.jsx)(t.code,{children:"1.1.0"})," as seen below"]}),"\n"]}),"\n",(0,s.jsx)("img",{width:"80%",src:"/docs/pagoda/setup12.png"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["Note that input fields are case sensitive, and the standards field must be written in the format ",(0,s.jsx)(t.code,{children:"nep123"})," not ",(0,s.jsx)(t.code,{children:"NEP-123"})]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"setting-up-function-call-specific-alerts",children:"Setting up Function Call Specific Alerts"}),"\n",(0,s.jsxs)(t.p,{children:['More generally, Pagoda Console makes it easy to generate alerts based on specific function calls. Simply follow the steps above, select the "Function Called" condition, and type the method name ',(0,s.jsx)(t.strong,{children:"exactly"})," as it appears in the contract code or the contract's ",(0,s.jsx)(t.a,{href:"https://github.com/near/abi",children:"ABI"})]}),"\n",(0,s.jsx)("img",{width:"80%",src:"/docs/pagoda/setup13.png"})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>o});var s=n(67294);const i={},a=s.createContext(i);function o(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);