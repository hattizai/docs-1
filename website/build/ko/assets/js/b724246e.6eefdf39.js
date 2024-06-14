"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6124],{41268:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var r=t(85893),a=t(11151),l=t(71183);t(74866),t(85162);const s={id:"integrate-contracts",title:"Integrating Contracts"},i=void 0,o={id:"build/web3-apps/integrate-contracts",title:"Integrating Contracts",description:"To integrate NEAR to your frontend, you will leverage two tools:",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/2.build/4.web3-apps/integrate-contracts.md",sourceDirName:"2.build/4.web3-apps",slug:"/build/web3-apps/integrate-contracts",permalink:"/ko/build/web3-apps/integrate-contracts",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/4.web3-apps/integrate-contracts.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1712954223e3,frontMatter:{id:"integrate-contracts",title:"Integrating Contracts"},sidebar:"build",previous:{title:"\u2b50 Quickstart a WebApp",permalink:"/ko/build/web3-apps/quickstart"},next:{title:"Integrating Components",permalink:"/ko/build/web3-apps/integrate-components"}},c={},d=[{value:"NEAR API JS \ubc0f Wallet Selector \ucd94\uac00",id:"near-api-js-\ubc0f-wallet-selector-\ucd94\uac00",level:2},{value:"Create a Wallet Object",id:"create-a-wallet-object",level:2},{value:"Function Call Key",id:"function-call-key",level:4},{value:"Calling View Methods",id:"calling-view-methods",level:2},{value:"\uc0ac\uc6a9\uc790 \ub85c\uadf8\uc778/\ub85c\uadf8\uc544\uc6c3",id:"\uc0ac\uc6a9\uc790-\ub85c\uadf8\uc778\ub85c\uadf8\uc544\uc6c3",level:2},{value:"Function Call Key",id:"function-call-key-1",level:3},{value:"\ubcc0\uacbd \uba54\uc11c\ub4dc \ud638\ucd9c",id:"\ubcc0\uacbd-\uba54\uc11c\ub4dc-\ud638\ucd9c",level:2},{value:"\uc9c0\uac11 \ub9ac\ub514\ub809\uc158",id:"\uc9c0\uac11-\ub9ac\ub514\ub809\uc158",level:3},{value:"Handling Data Types",id:"handling-data-types",level:2},{value:"Time",id:"time",level:5},{value:"\uc790\uae08",id:"\uc790\uae08",level:5},{value:"NEAR API JS \uc774\uc6a9",id:"near-api-js-\uc774\uc6a9",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"To integrate NEAR to your frontend, you will leverage two tools:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Wallet Selector"}),": Enables the user to select their preferred NEAR wallet in your dApp."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"NEAR API JS"}),": NEAR RPC\uc640 \uc0c1\ud638 \uc791\uc6a9\ud558\ub294 \ub3c4\uad6c \uc138\ud2b8\uc785\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\uc774\ub7ec\ud55c \ub3c4\uad6c\ub97c \uc0ac\uc6a9\ud558\uc5ec \ub2e4\uc74c \ud750\ub984\uc744 \uad6c\ud604\ud569\ub2c8\ub2e4."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["wallet selector\ub97c ",(0,r.jsx)(n.strong,{children:"\uc124\uc815\ud569\ub2c8\ub2e4"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\uc2dc\uc791\ud560 \ub54c"})," wallet selector\ub97c \ub85c\ub4dc\ud569\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(n.li,{children:["\uc0ac\uc6a9\uc790\uc5d0\uac8c NEAR \uc9c0\uac11\uc744 \uc0ac\uc6a9\ud558\uc5ec ",(0,r.jsx)(n.strong,{children:"\ub85c\uadf8\uc778"}),"\ud558\ub3c4\ub85d \uc694\uccad\ud569\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Call methods"})," in the contract."]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"near-api-js-\ubc0f-wallet-selector-\ucd94\uac00",children:"NEAR API JS \ubc0f Wallet Selector \ucd94\uac00"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"near-api-js"})," \ubc0f ",(0,r.jsx)(n.code,{children:"wallet-selector"}),"\ub97c \uc0ac\uc6a9\ud558\ub824\uba74, \uba3c\uc800 \ud504\ub85c\uc81d\ud2b8\uc5d0 \uc774\ub97c \ucd94\uac00\ud574\uc57c \ud569\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://github.com/near/wallet-selector#installation-and-usage",children:"\ud574\ub2f9 \uc6f9\uc0ac\uc774\ud2b8"}),"\ub97c \ud655\uc778\ud574 \ubcf4\uc138\uc694."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm install \\\n  near-api-js \\\n  @near-wallet-selector/core \\\n  @near-wallet-selector/my-near-wallet \\\n  @near-wallet-selector/ledger \\\n  @near-wallet-selector/modal-ui\n"})}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsxs)("summary",{children:["Using ",(0,r.jsx)(n.code,{children:"near-api-js"})," in plain HTML"]}),(0,r.jsxs)(n.p,{children:["You can add ",(0,r.jsx)(n.code,{children:"near-api-js"})," as a script tag in your html."]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'<script src=" https://cdn.jsdelivr.net/npm/near-api-js@3.0.4/lib/browser-index.min.js "><\/script>\n'})})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"create-a-wallet-object",children:"Create a Wallet Object"}),"\n",(0,r.jsxs)(n.p,{children:["In our examples we implement a ",(0,r.jsx)(n.a,{href:"https://github.com/near-examples/hello-near-examples/blob/main/frontend/src/wallets/near-wallet.js",children:(0,r.jsx)(n.code,{children:"./near-wallet.js"})})," module, where we abstracted the ",(0,r.jsx)(n.code,{children:"wallet selector"})," into a ",(0,r.jsx)(n.code,{children:"Wallet"})," object to simplify using it."]}),"\n",(0,r.jsxs)(n.p,{children:["To create a wallet, simply import the ",(0,r.jsx)(n.code,{children:"Wallet"})," object from the module and initialize it. This ",(0,r.jsx)(n.code,{children:"wallet"})," will later allows the user to call any contract in NEAR."]}),"\n",(0,r.jsx)(l.O2,{children:(0,r.jsxs)(l.SQ,{value:"js",language:"ts",children:[(0,r.jsx)(l.Ey,{fname:"index.js",url:"https://github.com/near-examples/hello-near-examples/blob/main/frontend/src/layout.js",start:"18",end:"25"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'<Github fname="near-wallet.js"\n    url="https://github.com/near-examples/hello-near-examples/blob/main/frontend/src/wallets/near-wallet.js"\n    start="35" end="56" />\n'})})]})}),"\n",(0,r.jsxs)(n.p,{children:["Under the hood (check the ",(0,r.jsx)(n.code,{children:"near-wallet"})," tab) you can see that we are actually setting up the wallet selector, and asking it if the user logged-in already. During the setup, we pass a hook to the wallet selector, which will be called each time a user logs in or out."]}),"\n",(0,r.jsxs)(t,{markdown:"1",children:[(0,r.jsx)("summary",{children:" Setting customs RPC endpoints "}),(0,r.jsxs)(n.p,{children:["If you want to use a user-defined RPC endpoint with the Wallet Selector, you need to setup a ",(0,r.jsx)(n.a,{href:"https://github.com/near/wallet-selector/tree/main/packages/core#options",children:"network options"})," object with the custom URLs.\nFor example:"]}),(0,r.jsx)(l.O2,{children:(0,r.jsx)(l.SQ,{value:"js",language:"ts",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="index.js"',children:'const CONTRACT_ADDRESS = process.env.CONTRACT_NAME;\n\nconst my_network = {\n    networkId: "my-custom-network",\n    nodeUrl: "https://rpc.custom-rpc.com",\n    helperUrl: "https://helper.custom-helper.com",\n    explorerUrl: "https://custom-explorer.com",\n    indexerUrl: "https://api.custom-indexer.com",\n  };\n\nconst wallet = new Wallet({ createAccessKeyFor: CONTRACT_ADDRESS, network: my_network });\n'})})})}),(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["You can find the entire Wallet Selector ",(0,r.jsx)(n.a,{href:"https://github.com/near/wallet-selector/blob/main/packages/core/docs/api/selector.md",children:"API reference here"}),"."]})})]}),"\n",(0,r.jsx)(n.h4,{id:"function-call-key",children:"Function Call Key"}),"\n",(0,r.jsxs)(n.p,{children:["When instantiating the wallet you can choose if you want to ",(0,r.jsxs)(n.strong,{children:["create a ",(0,r.jsx)(n.a,{href:"/ko/concepts/protocol/access-keys#function-call-keys-function-call-keys",children:"FunctionCall Key"})]}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["If you create the key, then your dApp will be able to ",(0,r.jsx)(n.strong,{children:"automatically sign non-payable transactions"})," for the user on the specified contract."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"calling-view-methods",children:"Calling View Methods"}),"\n",(0,r.jsx)(n.p,{children:"Once the wallet is up we can start calling view methods, i.e. the methods that perform read-only operations."}),"\n",(0,r.jsxs)(n.p,{children:["Because of their read-only nature, view methods are ",(0,r.jsx)(n.strong,{children:"free"})," to call, and do ",(0,r.jsx)(n.strong,{children:"not require"})," the user to be ",(0,r.jsx)(n.strong,{children:"logged in"}),"."]}),"\n",(0,r.jsx)(l.O2,{children:(0,r.jsxs)(l.SQ,{value:"js",language:"ts",children:[(0,r.jsx)(l.Ey,{fname:"index.js",url:"https://github.com/near-examples/hello-near-examples/blob/main/frontend/src/pages/hello-near/index.js",start:"12",end:"25"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'<Github fname="near-wallet.js"\n    url="https://github.com/near-examples/hello-near-examples/blob/main/frontend/src/wallets/near-wallet.js"\n    start="81" end="94" />\n'})})]})}),"\n",(0,r.jsxs)(n.p,{children:["\uc704\uc758 \uc2a4\ub2c8\ud3ab\uc740 view \uba54\uc11c\ub4dc\ub97c \ud638\ucd9c\ud558\ub294 \ubc29\ubc95\uc744 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4. \uc2e4\uc81c\ub85c ",(0,r.jsx)(n.code,{children:"near-api-js"}),"\ub97c \uc0ac\uc6a9\ud558\uc5ec RPC\ub97c ",(0,r.jsx)(n.strong,{children:"\uc9c1\uc811 \ud638\ucd9c"}),"\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"View methods have by default 200 TGAS for execution"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"\uc0ac\uc6a9\uc790-\ub85c\uadf8\uc778\ub85c\uadf8\uc544\uc6c3",children:"\uc0ac\uc6a9\uc790 \ub85c\uadf8\uc778/\ub85c\uadf8\uc544\uc6c3"}),"\n",(0,r.jsx)(n.p,{children:"non-view \uba54\uc11c\ub4dc\uc640 \uc0c1\ud638 \uc791\uc6a9\ud558\ub824\uba74, \uc0ac\uc6a9\uc790\ub294 \uba3c\uc800 NEAR \uc9c0\uac11\uc744 \uc0ac\uc6a9\ud558\uc5ec \ub85c\uadf8\uc778\ud574\uc57c \ud569\ub2c8\ub2e4."}),"\n",(0,r.jsxs)(n.p,{children:["\ub85c\uadf8\uc778\uc740 ",(0,r.jsx)(n.code,{children:"wallet"})," \uac1d\uccb4\uc5d0 ",(0,r.jsx)(n.code,{children:"signIn"}),"\uc744 \uc694\uccad\ud558\ub294 \uac83\ub9cc\ud07c \uac04\ub2e8\ud558\uba70, \ub85c\uadf8\uc544\uc6c3\uc5d0\ub3c4 \ub3d9\uc77c\ud558\uac8c \uac04\ub2e8\ud569\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(l.O2,{children:(0,r.jsxs)(l.SQ,{value:"js",language:"js",children:[(0,r.jsx)(l.Ey,{fname:"index.js",url:"https://github.com/near-examples/hello-near-examples/blob/main/frontend/src/components/navigation.js",start:"9",end:"23"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'<Github fname="near-wallet.js"\n        url="https://github.com/near-examples/hello-near-examples/blob/main/frontend/src/wallets/near-wallet.js"\n        start="58" end="72" />\n'})})]})}),"\n",(0,r.jsx)(n.p,{children:"When the user clicks in the button, it will be asked to select a wallet and use it to login."}),"\n",(0,r.jsx)("hr",{className:"subsection"}),"\n",(0,r.jsx)(n.h3,{id:"function-call-key-1",children:"Function Call Key"}),"\n",(0,r.jsxs)(n.p,{children:["If you instantiated the ",(0,r.jsx)(n.code,{children:"Wallet"})," passing an account for the ",(0,r.jsx)(n.code,{children:"createAccessKeyFor"})," parameter, then the wallet will create a ",(0,r.jsx)(n.a,{href:"/ko/concepts/protocol/access-keys#function-call-keys-function-call-keys",children:"FunctionCall Key"})," and store it in the web's local storage."]}),"\n",(0,r.jsx)(l.O2,{children:(0,r.jsx)(l.SQ,{value:"js",language:"js",children:(0,r.jsx)(l.Ey,{fname:"index.js",url:"https://github.com/near-examples/hello-near-examples/blob/main/frontend/src/layout.js",start:"22",end:"22"})})}),"\n",(0,r.jsxs)(n.p,{children:["\uae30\ubcf8\uc801\uc73c\ub85c, \uc774\ub7ec\ud55c \ud0a4\ub97c \uc0ac\uc6a9\ud558\uba74 \uc0ac\uc6a9\uc790\uc5d0\uac8c \uc11c\uba85\ud558\ub77c\ub294 \uba54\uc138\uc9c0\ub97c ",(0,r.jsx)(n.strong,{children:"\ud45c\uc2dc\ud558\uc9c0 \uc54a\uc544\ub3c4"})," ",(0,r.jsx)(n.strong,{children:"\uc9c0\uc815\ub41c"})," \ucee8\ud2b8\ub799\ud2b8 \uc5d0\uc11c \ucd5c\ub300 ",(0,r.jsx)(n.code,{children:"0.25\u24c3"}),"\uc758 \uac00\uc2a4\ub97c \uc18c\ubaa8\ud558\ub294 \ud638\ucd9c \uba54\uc11c\ub4dc\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(n.p,{children:["\ubc18\ub300\ub85c, \ub9cc\uc57d \uc561\uc138\uc2a4 \ud0a4\ub97c \uc0dd\uc131\ud558\uc9c0 \uc54a\ub294\ub2e4\uba74, \uc0ac\uc6a9\uc790\ub294 \ubaa8\ub4e0 \ud2b8\ub79c\uc7ad\uc158\uc5d0 \uc11c\uba85\ud558\ub77c\ub294 \uba54\uc2dc\uc9c0\ub97c \ubc1b\uac8c \ub429\ub2c8\ub2e4(",(0,r.jsx)(n.code,{children:"view methods"}),"\ub294 \ud56d\uc0c1 \ubb34\ub8cc\uc774\ubbc0\ub85c \uc774\uc5d0 \ub300\ud55c \ud638\ucd9c\uc740 \uc81c\uc678)."]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["Please notice that this only applies for ",(0,r.jsx)(n.strong,{children:"non-payable"})," methods, if you attach money to any call the user will ",(0,r.jsx)(n.strong,{children:"always"})," be redirected to the wallet to confirm the transaction."]})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"\ubcc0\uacbd-\uba54\uc11c\ub4dc-\ud638\ucd9c",children:"\ubcc0\uacbd \uba54\uc11c\ub4dc \ud638\ucd9c"}),"\n",(0,r.jsx)(n.p,{children:"\uc0ac\uc6a9\uc790\uac00 \ub85c\uadf8\uc778\ud558\uba74 \ubcc0\uacbd \uba54\uc11c\ub4dc \ud638\ucd9c\uc744 \uc2dc\uc791\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud504\ub85c\uadf8\ub798\ubc0d \ubc29\uc2dd\uc73c\ub85c \ubcc0\uacbd \uba54\uc11c\ub4dc\ub97c \ud638\ucd9c\ud558\ub294 \uac83\uc740 view \uba54\uc11c\ub4dc\ub97c \ud638\ucd9c\ud558\ub294 \uac83\uacfc \ube44\uc2b7\ud558\uc9c0\ub9cc, \uc774\uc81c \ud638\ucd9c\uc5d0 \ub3c8\uc744 \ucca8\ubd80\ud558\uace0 \uc0ac\uc6a9\ud560 \uac00\uc2a4\uc758 \uc591\uc744 \uc9c0\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.p,{children:"\ud638\ucd9c\uc5d0 \ub3c8\uc744 \ucca8\ubd80\ud558\ub3c4\ub85d \uc694\uccad\ud558\uba74, \uc0ac\uc6a9\uc790\uac00 \ud2b8\ub79c\uc7ad\uc158\uc744 \uc218\ub77d\ud558\uae30 \uc704\ud574 NEAR \uc9c0\uac11\uc73c\ub85c \ub9ac\ub514\ub809\uc158\ub41c\ub2e4\ub294 \uc810\uc5d0 \uc720\uc758\ud574\uc57c \ud569\ub2c8\ub2e4."}),"\n",(0,r.jsx)(l.O2,{children:(0,r.jsxs)(l.SQ,{value:"js",language:"js",children:[(0,r.jsx)(l.Ey,{fname:"index.js",url:"https://github.com/near-examples/hello-near-examples/blob/main/frontend/src/pages/hello-near/index.js",start:"33",end:"33"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'<Github fname="near-wallet.js"\n    url="https://github.com/near-examples/hello-near-examples/blob/main/frontend/src/wallets/near-wallet.js"\n    start="106" end="122" />\n'})})]})}),"\n",(0,r.jsxs)(n.p,{children:["\ub0b4\ubd80\uc801\uc73c\ub85c(",(0,r.jsx)(n.code,{children:"near-wallet"})," \ud0ed \u200b\u200b\ucc38\uc870), ",(0,r.jsx)(n.strong,{children:"\uc9c0\uac11"}),"\uc5d0\uac8c ",(0,r.jsx)(n.strong,{children:"\ud568\uc218 \ud638\ucd9c \ud2b8\ub79c\uc7ad\uc158\uc5d0 \uc11c\uba85"}),"\ud558\ub3c4\ub85d \uc694\uccad\ud558\uace0 \uc788\uc74c\uc744 \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["Remember that you can use the ",(0,r.jsx)(n.code,{children:"wallet"})," to call methods in ",(0,r.jsx)(n.strong,{children:"any"})," contract. \ud568\uc218 \ud0a4 \uc0dd\uc131\uc744 \uc694\uccad\ud558\uc9c0 \uc54a\uc740 \uacbd\uc6b0, \uc0ac\uc6a9\uc790\uc5d0\uac8c\ub294 \ud2b8\ub79c\uc7ad\uc158\uc744 \ud655\uc778\ud558\ub77c\ub294 \uba54\uc2dc\uc9c0\ub9cc \ud45c\uc2dc\ub429\ub2c8\ub2e4."]})}),"\n",(0,r.jsx)("hr",{className:"subsection"}),"\n",(0,r.jsx)(n.h3,{id:"\uc9c0\uac11-\ub9ac\ub514\ub809\uc158",children:"\uc9c0\uac11 \ub9ac\ub514\ub809\uc158"}),"\n",(0,r.jsx)(n.p,{children:"\ubcc0\uacbd \ud638\ucd9c\uc5d0 \ub3c8\uc744 \ucca8\ubd80\ud558\uba74, \uc0ac\uc6a9\uc790\ub294 \ud2b8\ub79c\uc7ad\uc158\uc744 \uc218\ub77d\ud558\uae30 \uc704\ud574 \uc9c0\uac11\uc73c\ub85c \ub9ac\ub514\ub809\uc158\ub429\ub2c8\ub2e4. \uc218\ub77d \ud6c4 \uc0ac\uc6a9\uc790\ub294 \uadc0\ud558\uc758 \uc6f9\uc0ac\uc774\ud2b8\ub85c \ub3cc\uc544\uac00\uace0, \uacb0\uacfc\ub85c \ub098\uc624\ub294 \ud2b8\ub79c\uc7ad\uc158 \ud574\uc2dc\ub294 URL\uc758 \uc77c\ubd80\ub85c \uc804\ub2ec\ub429\ub2c8\ub2e4(\uc608: ``your-website.com/?transactionHashes=...\\`)."}),"\n",(0,r.jsxs)(n.p,{children:["\ud638\ucd9c\ub41c \uba54\uc11c\ub4dc\uac00 \uacb0\uacfc\ub97c \ubc18\ud658\ud55c \uacbd\uc6b0, \ud2b8\ub79c\uc7ad\uc158 \ud574\uc2dc\ub97c \uc0ac\uc6a9\ud558\uc5ec \ub124\ud2b8\uc6cc\ud06c\uc5d0\uc11c \uacb0\uacfc\ub97c \uac80\uc0c9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. ",(0,r.jsx)(n.a,{href:"#connecting-to-a-contract",children:"\uc704\uc758 \uc608\uc2dc"}),"\uc5d0\uc11c\uc640 \uac19\uc774 ",(0,r.jsx)(n.code,{children:"near"})," \uac1d\uccb4\ub97c \ub9cc\ub4e4\uc5c8\ub2e4\uace0 \uac00\uc815\ud558\uba74, \ub2e4\uc74c\uacfc \uac19\uc740 \uc791\uc5c5\uc744 \uc218\ud589\ud558\uc5ec \uacb0\uacfc\ub97c \uc870\ud68c\ud569\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(l.O2,{children:(0,r.jsx)(l.SQ,{value:"js",language:"js",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'<Github fname="utils.js"\n        url="https://github.com/near-examples/hello-near-examples/blob/main/frontend/src/wallets/near-wallet.js"\n        start="132" end="140" />\n'})})})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"handling-data-types",children:"Handling Data Types"}),"\n",(0,r.jsx)(n.p,{children:"When calling methods in a contract, or receiving results from them, you will need to correctly encode/decode parameters. For this, it is important to know how the contracts encode timestamps (u64) and money amounts (u128)."}),"\n",(0,r.jsx)(n.h5,{id:"time",children:"Time"}),"\n",(0,r.jsxs)(n.p,{children:["The block timestamp in a smart contract is encoded using nanoseconds (i.e. 19 digits: ",(0,r.jsx)(n.code,{children:"1655373910837593990"}),"). \ubc18\ub300\ub85c Javascript\uc758 ",(0,r.jsx)(n.code,{children:"Date.now()"}),"\ub294 \ubc00\ub9ac\ucd08 \ub2e8\uc704\uc758 \ud0c0\uc784\uc2a4\ud0ec\ud504\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4(\uc608: 13\uc790\ub9ac - ",(0,r.jsx)(n.code,{children:"1655373910837"}),"). \uc2dc\uac04 \ubcc0\uc218\ub97c \uc801\uc808\ud558\uac8c \ucc98\ub9ac\ud558\ub824\uba74 \ubc00\ub9ac\ucd08\uc640 \ub098\ub178\ucd08 \uac04 \ubcc0\ud658\uc774 \uc62c\ubc14\ub974\uac8c \uc774\ub8e8\uc5b4\uc838\uc57c \ud569\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(n.h5,{id:"\uc790\uae08",children:"\uc790\uae08"}),"\n",(0,r.jsxs)(n.p,{children:["\uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\ub294 \ud56d\uc0c1 yocto NEAR(1\u24c3 = 10^24yocto) \ub2e8\uc704\ub85c \uc774\uc57c\uae30\ud558\uace0, \ud574\ub2f9 \uac12\uc740 ",(0,r.jsx)(n.code,{children:"string"}),"\uc73c\ub85c \uc778\ucf54\ub529\ub429\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"near-api-js.utils.format.parseNearAmount(amount.toString())"}),"\ub97c \uc0ac\uc6a9\ud558\uc5ec \ucee8\ud2b8\ub799\ud2b8\ub85c \ub3c8\uc744 \ubcf4\ub0b4\uae30 \uc804\uc5d0 NEAR\ub97c yocto\ub85c \ubcc0\ud658\ud569\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"near-api-js.utils.format.formatNearAmount(amount)"}),"\ub97c \uc0ac\uc6a9\ud558\uc5ec yoctoNEAR \ud615\ud0dc\uc758 \uc751\ub2f5 \uacb0\uacfc\ub97c NEAR \ub2e8\uc704\ub85c \ubcc0\ud658\ud569\ub2c8\ub2e4"]}),"\n"]}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsxs)(n.p,{children:["If the contract returns a ",(0,r.jsx)(n.code,{children:"Balance"})," instead of a ",(0,r.jsx)(n.code,{children:"U128"}),', you will get a "scientific notation" ',(0,r.jsx)(n.code,{children:"number"})," instead of a ",(0,r.jsx)(n.code,{children:"string"})," (e.g. ",(0,r.jsx)(n.code,{children:"10^6"})," instead of ",(0,r.jsx)(n.code,{children:'"1000000"'}),"). \uc774 \uacbd\uc6b0, \ub2e4\uc74c\uacfc \uac19\uc774 \uac12\uc744 NEAR\ub85c \ubcc0\ud658\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"function formatAmount(amount) {\n  let formatted = amount.toLocaleString('fullwide', { useGrouping: false })\n  formatted = utils.format.formatNearAmount(formatted)\n  return Math.floor(formatted * 100) / 100\n}\n"})})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"near-api-js-\uc774\uc6a9",children:"NEAR API JS \uc774\uc6a9"}),"\n",(0,r.jsx)(n.p,{children:"NEAR API JS\ub294 \ub2e8\uc21c\ud788 \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c \uba54\uc11c\ub4dc\ub97c \ud638\ucd9c\ud558\ub294 \uc791\uc5c5\ub9cc\uc73c\ub85c \uc81c\ud55c\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uc0ac\uc2e4, \uc774\ub97c \ud1b5\ud574 \uc6f9 \uc571\uc5d0\uc11c \ub354 \ud48d\ubd80\ud55c \uc0ac\uc6a9\uc790 \uacbd\ud5d8\uc744 \uc81c\uacf5\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub7ec\ud55c \uc8fc\uc81c\ub97c \uae4a\uc774 \ub2e4\ub8e8\uc9c0\ub294 \uc54a\uaca0\uc9c0\ub9cc, NEAR API JS\ub97c \uc0ac\uc6a9\ud558\uba74 \ub2e4\uc74c\uacfc \uac19\uc740 \uc791\uc5c5\ub3c4 \uac00\ub2a5\ud558\ub2e4\ub294 \uc0ac\uc2e4\uc744 \uc544\ub294 \uac83\uc774 \uc911\uc694\ud569\ub2c8\ub2e4."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"https://github.com/near/near-api-js/blob/master/packages/cookbook/utils/verify-signature.js",children:"\uba54\uc138\uc9c0 \uc11c\uba85 \ubc0f \uac80\uc99d"})}),": \uba54\uc2dc\uc9c0\uac00 \uc0ac\uc6a9\uc790\uc5d0 \uc758\ud574 \uc0dd\uc131\ub418\uc5c8\uc74c\uc744 \uc99d\uba85\ud558\ub294 \ub370 \ub9e4\uc6b0 \uc720\uc6a9\ud569\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"https://github.com/near/near-api-js/tree/master/packages/cookbook/transactions/batch-transactions.js",children:"Create batch transactions"})}),": this enables to link multiple ",(0,r.jsx)(n.a,{href:"/develop/contracts/actions",children:"actions"})," (e.g. multiple function calls). If one of the transactions fails, then they are all reverted."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"https://github.com/near/near-api-js/tree/master/packages/cookbook/accounts/create-testnet-account.js",children:"\uacc4\uc815 \uc0dd\uc131"})}),": \uc0ac\uc6a9\uc790\ub97c \uc704\ud55c \uacc4\uc815\uc744 \ubc30\ud3ec\ud558\uc138\uc694!"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\uc6f9\uc571\uc744 \uac15\ud654\ud558\ub294 \ubc29\ubc95\uc744 \uc54c\uc544\ubcf4\ub824\uba74 ",(0,r.jsx)(n.a,{href:"/tools/near-api-js/cookbook",children:"\uc124\uba85\uc11c"}),"\ub97c \ud655\uc778\ud558\uc138\uc694 ."]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>s});t(67294);var r=t(36905);const a={tabItem:"tabItem_Ymn6"};var l=t(85893);function s(e){var n=e.children,t=e.hidden,s=e.className;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,s),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>y});var r=t(67294),a=t(36905),l=t(12466),s=t(16550),i=t(20469),o=t(91980),c=t(67392),d=t(50012);function u(e){var n,t;return null!=(n=null==(t=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function h(e){var n=e.values,t=e.children;return(0,r.useMemo)((function(){var e=null!=n?n:function(e){return u(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,c.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function p(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function j(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId,l=(0,s.k6)(),i=function(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:t,groupId:a});return[(0,o._X)(i),(0,r.useCallback)((function(e){if(i){var n=new URLSearchParams(l.location.search);n.set(i,e),l.replace(Object.assign({},l.location,{search:n.toString()}))}}),[i,l])]}function m(e){var n,t,a,l,s=e.defaultValue,o=e.queryString,c=void 0!==o&&o,u=e.groupId,m=h(e),x=(0,r.useState)((function(){return function(e){var n,t=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var a=null!=(n=r.find((function(e){return e.default})))?n:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:s,tabValues:m})})),f=x[0],g=x[1],b=j({queryString:c,groupId:u}),v=b[0],w=b[1],y=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),t=(0,d.Nk)(n),a=t[0],l=t[1],[a,(0,r.useCallback)((function(e){n&&l.set(e)}),[n,l])]),k=y[0],A=y[1],N=function(){var e=null!=v?v:k;return p({value:e,tabValues:m})?e:null}();return(0,i.Z)((function(){N&&g(N)}),[N]),{selectedValue:f,selectValue:(0,r.useCallback)((function(e){if(!p({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);g(e),w(e),A(e)}),[w,A,m]),tabValues:m}}var x=t(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(85893);function b(e){var n=e.className,t=e.block,r=e.selectedValue,s=e.selectValue,i=e.tabValues,o=[],c=(0,l.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var n=e.currentTarget,t=o.indexOf(n),a=i[t].value;a!==r&&(c(n),s(a))},u=function(e){var n,t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var r,a=o.indexOf(e.currentTarget)+1;t=null!=(r=o[a])?r:o[0];break;case"ArrowLeft":var l,s=o.indexOf(e.currentTarget)-1;t=null!=(l=o[s])?l:o[o.length-1]}null==(n=t)||n.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:i.map((function(e){var n=e.value,t=e.label,l=e.attributes;return(0,g.jsx)("li",Object.assign({role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:function(e){return o.push(e)},onKeyDown:u,onClick:d},l,{className:(0,a.Z)("tabs__item",f.tabItem,null==l?void 0:l.className,{"tabs__item--active":r===n}),children:null!=t?t:n}),n)}))})}function v(e){var n=e.lazy,t=e.children,a=e.selectedValue,l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var s=l.find((function(e){return e.props.value===a}));return s?(0,r.cloneElement)(s,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})}))})}function w(e){var n=m(e);return(0,g.jsxs)("div",{className:(0,a.Z)("tabs-container",f.tabList),children:[(0,g.jsx)(b,Object.assign({},n,e)),(0,g.jsx)(v,Object.assign({},n,e))]})}function y(e){var n=(0,x.Z)();return(0,g.jsx)(w,Object.assign({},e,{children:u(e.children)}),String(n))}},71183:(e,n,t)=>{t.d(n,{O2:()=>j,Ey:()=>x,SQ:()=>m});var r=t(67294),a=t(74866),l=t(85162),s=t(74165),i=t(15861),o=t(1841),c=t.n(o),d=t(85893);function u(){return(u=(0,i.Z)((0,s.Z)().mark((function e(n,t,r){var a,l,i,o;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((l=localStorage.getItem(n+"-until"))&&l>Date.now())){e.next=5;break}a=localStorage.getItem(n),e.next=18;break;case 5:return e.prev=5,e.next=8,fetch(n);case 8:return e.next=10,e.sent.text();case 10:a=e.sent,localStorage.setItem(n,a),localStorage.setItem(n+"-until",Date.now()+6e4),e.next=18;break;case 15:return e.prev=15,e.t0=e.catch(5),e.abrupt("return","Error fetching code, please try reloading");case 18:return i=a.split("\n"),t=t?Number(t)-1:0,r=r?Number(r):i.length,i=i.slice(t,r),o=i.reduce((function(e,n){if(0===n.length)return e;var t=n.match(/^\s+/);return t?Math.min(e,t[0].length):0}),1/0),e.abrupt("return",i.map((function(e){return e.slice(o)})).join("\n"));case 24:case"end":return e.stop()}}),e,null,[[5,15]])})))).apply(this,arguments)}const h=function(e){var n=e.url,t=e.start,a=e.end,l=e.language,s=e.fname,i=e.metastring,o=(0,r.useState)("Loading..."),h=o[0],p=o[1];return(0,r.useEffect)((function(){var e=function(e){var n=e.slice(e.indexOf("https")).split("#"),t=n[0],r=(n[1],new URL(t).pathname.split("/").slice(1)),a=r[0],l=r[1];return r[2],"https://raw.githubusercontent.com/"+a+"/"+l+"/"+r[3]+"/"+r.slice(4).join("/")}(n),r=function(e,n,t){return u.apply(this,arguments)}(e,t,a);r.then((function(e){return p(e)}))})),(0,d.jsxs)("div",{fname:s,children:[(0,d.jsx)(c(),{language:l,metastring:i+" showLineNumbers",children:h}),(0,d.jsx)("div",{style:{fontSize:"0.9em",fontWeight:600,color:"rgb(14, 117, 221)",textAlign:"center",paddingBottom:"13px",textDecoration:"underline"},children:(0,d.jsx)("a",{href:n,target:"_blank",rel:"noreferrer noopener",children:"See full example on GitHub"})})]})};var p={rust:"\ud83e\udd80 Rust",js:"\ud83c\udf10 Javascript",ts:"\ud83c\udf10 Typescript"};function j(e){var n=e.children;return Array.isArray(n)||(n=[n]),(0,d.jsx)(a.Z,{className:"language-tabs",groupId:"code-tabs",children:n.map((function(e,n){return(0,d.jsx)(l.Z,{value:e.props.value,label:p[e.props.value],children:e})}))})}function m(e){var n=e.children,t=e.language;return Array.isArray(n)||(n=[n]),n=n.map((function(e){return function(e,n){var t=e.props,r=(t.children,t.url),a=t.start,l=t.end,s=t.fname;if(e.type===x)return x({url:r,start:a,end:l,language:n,fname:s});return e}(e,t)})),1==n.length?(0,d.jsx)(l.Z,{value:0,label:n[0].props.fname,children:n[0]}):(0,d.jsx)(a.Z,{className:"file-tabs",children:n.map((function(e,n){return(0,d.jsx)(l.Z,{value:n,label:e.props.fname,children:e})}))})}function x(e){var n=e.url,t=e.start,r=e.end,a=e.language,l=e.fname,s=e.metastring;return h({url:n,start:t,end:r,language:a,fname:l,metastring:s})}}}]);