"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8616],{20436:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>x,frontMatter:()=>o,metadata:()=>d,toc:()=>h});var a=n(85893),r=n(11151),s=n(71183),i=n(74866),c=n(85162);const o={id:"integration-test",title:"Integration Tests"},l=void 0,d={id:"build/smart-contracts/testing/integration-test",title:"Integration Tests",description:"\ud1b5\ud569 \ud14c\uc2a4\ud2b8\ub97c \uc0ac\uc6a9\ud558\uba74 NEAR testnet \ub610\ub294 \ub85c\uceec sandbox\uc5d0 \ucee8\ud2b8\ub799\ud2b8\ub97c \ubc30\ud3ec\ud558\uace0, \ucee8\ud2b8\ub799\ud2b8\uc640 \uc0c1\ud638 \uc791\uc6a9\ud560 \ud14c\uc2a4\ud2b8 \uc0ac\uc6a9\uc790\ub97c \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub7ec\ud55c \ubc29\uc2dd\uc73c\ub85c, \ud604\uc2e4\uc801\uc778 \ud658\uacbd\uc5d0\uc11c \ucee8\ud2b8\ub799\ud2b8\ub97c \ucca0\uc800\ud558\uac8c \ud14c\uc2a4\ud2b8\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/2.build/2.smart-contracts/testing/integration-test.md",sourceDirName:"2.build/2.smart-contracts/testing",slug:"/build/smart-contracts/testing/integration-test",permalink:"/ko/build/smart-contracts/testing/integration-test",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/2.smart-contracts/testing/integration-test.md",tags:[],version:"current",lastUpdatedBy:"gagdiez",lastUpdatedAt:1713353002e3,frontMatter:{id:"integration-test",title:"Integration Tests"},sidebar:"build",previous:{title:"\ub2e8\uc704 \ud14c\uc2a4\ud2b8(Unit Testing)",permalink:"/ko/build/smart-contracts/testing/unit-test"},next:{title:"\ub85c\uceec \uac1c\ubc1c \ud658\uacbd",permalink:"/ko/build/smart-contracts/testing/kurtosis-localnet"}},u={},h=[{value:"\uc2a4\ub2c8\ud3ab I: Hello NEAR \ud14c\uc2a4\ud2b8",id:"\uc2a4\ub2c8\ud3ab-i-hello-near-\ud14c\uc2a4\ud2b8",level:2},{value:"Snippet II: Testing Donations",id:"snippet-ii-testing-donations",level:2},{value:"Sandbox Testing",id:"sandbox-testing",level:2},{value:"Spooning Contracts",id:"spooning-contracts",level:3},{value:"\uc2e4\uc2dc\uac04 \uc0c1\ud0dc \ud328\uce58",id:"\uc2e4\uc2dc\uac04-\uc0c1\ud0dc-\ud328\uce58",level:3},{value:"\uc2dc\uac04 \uc774\ub3d9",id:"\uc2dc\uac04-\uc774\ub3d9",level:3},{value:"\ud14c\uc2a4\ud2b8\ub137 \uc0ac\uc6a9",id:"\ud14c\uc2a4\ud2b8\ub137-\uc0ac\uc6a9",level:2},{value:"\ucd94\uac00 \ubbf8\ub514\uc5b4 \uc790\ub8cc",id:"\ucd94\uac00-\ubbf8\ub514\uc5b4-\uc790\ub8cc",level:2},{value:"\uc791\uc5c5 \uacf5\uac04\uacfc AVA\ub97c \uc0ac\uc6a9\ud55c \ud14c\uc2a4\ud2b8 \uae30\ubc18 \uc124\uacc4",id:"test-driven-design",level:4}];function p(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["\ud1b5\ud569 \ud14c\uc2a4\ud2b8\ub97c \uc0ac\uc6a9\ud558\uba74 NEAR ",(0,a.jsx)(t.code,{children:"testnet"})," \ub610\ub294 \ub85c\uceec ",(0,a.jsx)(t.code,{children:"sandbox"}),"\uc5d0 \ucee8\ud2b8\ub799\ud2b8\ub97c \ubc30\ud3ec\ud558\uace0, \ucee8\ud2b8\ub799\ud2b8\uc640 \uc0c1\ud638 \uc791\uc6a9\ud560 \ud14c\uc2a4\ud2b8 \uc0ac\uc6a9\uc790\ub97c \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub7ec\ud55c \ubc29\uc2dd\uc73c\ub85c, \ud604\uc2e4\uc801\uc778 \ud658\uacbd\uc5d0\uc11c \ucee8\ud2b8\ub799\ud2b8\ub97c \ucca0\uc800\ud558\uac8c \ud14c\uc2a4\ud2b8\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,a.jsxs)(t.p,{children:["\ub610\ud55c \ub85c\uceec ",(0,a.jsx)(t.code,{children:"sandbox"}),"\uc744 \uc0ac\uc6a9\ud558\uba74 \ub124\ud2b8\uc6cc\ud06c\ub97c \uc644\uc804\ud788 \uc81c\uc5b4\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\ud14c\uc2a4\ud2b8 ",(0,a.jsx)(t.code,{children:"Accounts"}),"\ub97c \uc0dd\uc131\ud558\uace0 \uadf8\ub4e4\uc758 ",(0,a.jsx)(t.code,{children:"State"})," \ubc0f ",(0,a.jsx)(t.code,{children:"Balance"}),"\ub97c \ucc98\ub9ac\ud569\ub2c8\ub2e4."]}),"\n",(0,a.jsx)(t.li,{children:"\ucf5c\ubc31\uc5d0\uc11c \uc5d0\ub7ec\ub97c \uc2dc\ubbac\ub808\uc774\uc158\ud569\ub2c8\ub2e4."}),"\n",(0,a.jsx)(t.li,{children:"\uc2dc\uac04 \ud750\ub984\uc744 \uc81c\uc5b4\ud558\uace0, \ubbf8\ub798\ub85c \ube60\ub974\uac8c \uc774\ub3d9\ud569\ub2c8\ub2e4(Rust\uc5d0\uc11c\ub294 \uc900\ube44\ub41c \uae30\ub2a5\uc774\uace0, TS\uc5d0\uc11c\ub294 \ucd9c\uc2dc \uc608\uc815\uc785\ub2c8\ub2e4)."}),"\n"]}),"\n",(0,a.jsxs)(t.admonition,{title:"NEAR Workspaces",type:"tip",children:[(0,a.jsxs)(t.p,{children:["In NEAR, integration tests are implemented using a framework called ",(0,a.jsx)(t.strong,{children:"Workspaces"}),". \uc791\uc5c5 \uacf5\uac04\uc740 ",(0,a.jsx)(t.a,{href:"https://github.com/near/workspaces-rs",children:"\ud83e\udd80 Rust"})," \ubc0f ",(0,a.jsx)(t.a,{href:"https://github.com/near/workspaces-js",children:"\ud83c\udf10 Typescript"}),"\uc758 \ub450 \uac00\uc9c0 \uc720\ud615\uc73c\ub85c \uc81c\uacf5\ub429\ub2c8\ub2e4."]}),(0,a.jsxs)(t.p,{children:["All of our ",(0,a.jsx)(t.a,{href:"https://github.com/near-examples/docs-examples",children:"examples"})," come with integration testing."]})]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"\uc2a4\ub2c8\ud3ab-i-hello-near-\ud14c\uc2a4\ud2b8",children:"\uc2a4\ub2c8\ud3ab I: Hello NEAR \ud14c\uc2a4\ud2b8"}),"\n",(0,a.jsxs)(t.p,{children:["Lets take a look at the test of our ",(0,a.jsx)(t.a,{href:"/ko/build/smart-contracts/quickstart",children:"Quickstart Project"})," ",(0,a.jsx)(t.a,{href:"https://github.com/near-examples/hello-near-examples",children:"\ud83d\udc4b Hello NEAR"}),", where we deploy the contract on an account and test it correctly retrieves and sets the greeting."]}),"\n",(0,a.jsx)(s.O2,{children:(0,a.jsx)(s.SQ,{value:"js",language:"js",children:(0,a.jsx)(s.Ey,{fname:"main.ava.ts",url:"https://github.com/near-examples/hello-near-examples/blob/main/contract-ts/sandbox-ts/main.ava.ts",start:"8",end:"43"})})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"snippet-ii-testing-donations",children:"Snippet II: Testing Donations"}),"\n",(0,a.jsxs)(t.p,{children:["In most cases we will want to test complex methods involving multiple users and money transfers. A perfect example for this is our ",(0,a.jsx)(t.a,{href:"https://github.com/near-examples/donation-examples",children:"Donation Example"}),", which enables users to ",(0,a.jsx)(t.code,{children:"donate"})," money to a beneficiary. Lets see its integration tests"]}),"\n",(0,a.jsx)(s.O2,{children:(0,a.jsx)(s.SQ,{value:"js",language:"js",children:(0,a.jsx)(s.Ey,{fname:"main.ava.ts",url:"https://github.com/near-examples/donation-examples/blob/main/contract-ts/sandbox-ts/src/main.ava.ts",start:"50",end:"73"})})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"sandbox-testing",children:"Sandbox Testing"}),"\n",(0,a.jsxs)(t.p,{children:["NEAR Workspaces allows you to write tests once, and run them either on ",(0,a.jsx)(t.code,{children:"testnet"})," or a local ",(0,a.jsx)(t.code,{children:"Sandbox"}),". ",(0,a.jsx)(t.strong,{children:"\uae30\ubcf8\uc801\uc73c\ub85c"}),", \uc791\uc5c5 \uacf5\uac04\uc740 ",(0,a.jsx)(t.strong,{children:"\uc0cc\ub4dc\ubc15\uc2a4"}),"\ub97c \uc2dc\uc791\ud558\uace0, ",(0,a.jsx)(t.strong,{children:"\ub85c\uceec \ud658\uacbd\uc5d0\uc11c"})," \ud14c\uc2a4\ud2b8\ub97c \uc2e4\ud589\ud569\ub2c8\ub2e4. \uc774 \ud504\ub808\uc784\uc6cc\ud06c\uc758 \uae30\ub2a5\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uc544\ubcf4\uace0, \ud574\ub2f9 \ud504\ub808\uc784\uc6cc\ud06c\uac00 \uc5b4\ub5bb\uac8c \ub3c4\uc6c0\uc774 \ub418\ub294\uc9c0 \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."]}),"\n",(0,a.jsx)(t.h3,{id:"spooning-contracts",children:"Spooning Contracts"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://coinmarketcap.com/alexandria/glossary/spoon-blockchain",children:"\ube14\ub85d\uccb4\uc778\uc744 \uc2a4\ud478\ub2dd\ud558\ub294 \uac83"}),"\uc740 \ud55c \ub124\ud2b8\uc6cc\ud06c\uc5d0\uc11c \ub2e4\ub978 \ub124\ud2b8\uc6cc\ud06c\ub85c \ub370\uc774\ud130\ub97c \ubcf5\uc0ac\ud558\ub294 \uac83\uc785\ub2c8\ub2e4. NEAR \uc791\uc5c5 \uacf5\uac04\uc744 \uc0ac\uc6a9\ud558\uba74, Mainnet \ub610\ub294 Testnet \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c \ub85c\uceec \uc0cc\ub4dc\ubc15\uc2a4 \ud658\uacbd\uc73c\ub85c \ub370\uc774\ud130\ub97c \uc27d\uac8c \ubcf5\uc0ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,a.jsxs)(i.Z,{groupId:"code-tabs",children:[(0,a.jsxs)(c.Z,{value:"js",label:"\ud83c\udf10 JavaScript",default:!0,children:[(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"const refFinance = await root.importContract({\n  mainnetContract: 'v2.ref-finance.near',\n  blockId: 50_000_000,\n  withData: true,\n});\n"})}),(0,a.jsxs)(t.p,{children:["This would copy the Wasm bytes and contract state from ",(0,a.jsx)(t.a,{href:"https://nearblocks.io/address/v2.ref-finance.near",children:"v2.ref-finance.near"})," to your local blockchain as it existed at block ",(0,a.jsx)(t.code,{children:"50_000_000"}),". \ucd5c\uc0c1\uc704 \uacc4\uc815\uc774 \ub85c\uceec\uc5d0 \uc874\uc7ac\ud558\uc9c0 \uc54a\ub354\ub77c\ub3c4 \ucee8\ud2b8\ub799\ud2b8 \uc774\ub984\uc744 \ub3d9\uc77c\ud558\uac8c \uc720\uc9c0\ud558\uae30 \uc704\ud574, \uc5ec\uae30\uc11c\ub294 \uc0cc\ub4dc\ubc15\uc2a4\uc758 \ud2b9\uc218\ud55c ",(0,a.jsx)(t.a,{href:"#%EC%8B%A4%EC%8B%9C%EA%B0%84-%ED%8C%A8%EC%B9%98-%EC%83%81%ED%83%9C",children:"\ud328\uce58 \uc0c1\ud0dc"})," \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4 (\uc774\ub294 \uc0cc\ub4dc\ubc15\uc2a4 \ud14c\uc2a4\ud2b8 \ubaa8\ub4dc\uc5d0\uc11c\ub9cc \uc791\ub3d9\ud568\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4). \uc774\ub807\uac8c \ud558\uba74 \uac00\uae4c\uc6b4 \uc791\uc5c5 \uacf5\uac04\uc5d0\uc11c \uc0dd\uc131\ub41c \ub2e4\ub978 \ubaa8\ub4e0 \uacc4\uc815\uacfc \uc0c1\ud638 \uc791\uc6a9\ud558\ub294 \uac83\uacfc \ub3d9\uc77c\ud558\uac8c, \uacb0\uc815\ub860\uc801 \ubc29\uc2dd\uc73c\ub85c \ucee8\ud2b8\ub799\ud2b8\uc640 \uc0c1\ud638 \uc791\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"withData"})," will only work out-of-the-box if the contract's data is 50kB or less. \uc774\ub294 RPC \uc11c\ubc84\uc758 \uae30\ubcf8 \uad6c\uc131 \ub54c\ubb38\uc785\ub2c8\ub2e4."]})}),(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://github.com/near/workspaces-js/blob/main/__tests__/05.spoon-contract-to-sandbox.ava.ts",children:"\ucee8\ud2b8\ub799\ud2b8 \uc2a4\ud478\ub2dd\uc5d0 \ub300\ud55c TypeScript \uc608\uc81c"}),"\ub97c \ucc38\uc870\ud558\uc138\uc694."]})]}),(0,a.jsxs)(c.Z,{value:"rust",label:"\ud83e\udd80 Rust",children:[(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"testnet"}),"\uc5d0\uc11c \uac00\uc838\uc624\ub824\ub294 \ucee8\ud2b8\ub799\ud2b8 \uc774\ub984\uacfc, \ud2b9\uc815 \uc2dc\uac04\uc744 \ub2e4\uc2dc \ucc38\uc870\ud558\ub294 \ube14\ub85d ID\ub97c \uc9c0\uc815\ud558\uc138\uc694(\ucc38\uc870\ud558\ub294 \ucee8\ud2b8\ub799\ud2b8\uac00 \ubcc0\uacbd\ub418\uac70\ub098 \uc5c5\ub370\uc774\ud2b8\ub41c \uacbd\uc6b0). (Just in case the contract you're referencing has been changed or updated)"]}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-rust",children:'```rust\nconst CONTRACT_ACCOUNT: &str = "contract_account_name_on_testnet.testnet";\nconst BLOCK_HEIGHT: BlockHeight = 12345;\n'})}),(0,a.jsxs)(t.p,{children:["\uc774\uc5d0 \ub300\ud574\uc11c\ub294 ",(0,a.jsx)(t.a,{href:"/ko/api/rpc/contracts#view-contract-state-view-contract-state",children:'"\uc8fc\uc758" \uba54\ubaa8'}),"\ub97c \ucc38\uc870\ud558\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4. You'll have to re-initialize it with all the data to run tests."]}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-rust",children:"\uccb4\uc778 \ub0b4 \ucee8\ud2b8\ub799\ud2b8\uc758 `.wasm` \ud30c\uc77c\uc744 \uac00\uc838\uc624\ub294 `pull_contract` \ud568\uc218\ub97c \ub9cc\ub4ed\ub2c8\ub2e4. \ud14c\uc2a4\ud2b8\ub97c \uc2e4\ud589\ud558\ub824\uba74 \ubaa8\ub4e0 \ub370\uc774\ud130\ub97c \ub2e4\uc2dc \ucd08\uae30\ud654\ud574\uc57c \ud569\ub2c8\ub2e4.\n\n```rust\nasync fn pull_contract(owner: &Account, worker: &Worker<Sandbox>) -> anyhow::Result<Contract> {\n    let testnet = workspaces::testnet_archival();\n    let contract_id: AccountId = CONTRACT_ACCOUNT.parse()?;\n"})}),(0,a.jsx)(t.p,{children:"\uc774 \ub2e4\uc74c \uc904\uc740 \uc2e4\uc81c\ub85c testnet\uc5d0\uc11c \uad00\ub828 \ucee8\ud2b8\ub799\ud2b8\ub97c \ub04c\uc5b4\uc624\uace0, 1000 NEAR\ub85c \ucd08\uae30 \uc794\uace0\ub97c \uc124\uc815\ud569\ub2c8\ub2e4."}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-rust",children:'    let contract = worker\n        .import_contract(&contract_id, &testnet)\n        .initial_balance(parse_near!("1000 N"))\n        .block_height(BLOCK_HEIGHT)\n        .transact()\n        .await?;\n'})}),(0,a.jsx)(t.p,{children:"\uadf8\ub7f0 \ub2e4\uc74c \uba54\ud0c0\ub370\uc774\ud130\ub85c \ucee8\ud2b8\ub799\ud2b8\ub97c \ub2e4\uc2dc \ucd08\uae30\ud654\ud574\uc57c \ud569\ub2c8\ub2e4.\n\ucee8\ud2b8\ub799\ud2b8\uc758 \ub370\uc774\ud130\uac00 \ub108\ubb34 \ucee4\uc11c RPC \uc11c\ube44\uc2a4\uc5d0\uc11c \ub04c\uc5b4\uc62c \uc218 \uc5c6\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4. (\uc81c\ud55c\uc740 50Mb\ub85c \uc124\uc815\ub428)"}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-rust",children:'    owner\n        .call(&worker, contract.id(), "init_method_name")\n        .args_json(serde_json::json!({\n            "arg1": value1,\n            "arg2": value2,\n        }))?\n        .transact()\n        .await?;\n    Ok(contract)\n}\n'})})]})]}),"\n",(0,a.jsx)(t.h3,{id:"\uc2e4\uc2dc\uac04-\uc0c1\ud0dc-\ud328\uce58",children:"\uc2e4\uc2dc\uac04 \uc0c1\ud0dc \ud328\uce58"}),"\n",(0,a.jsxs)(t.p,{children:["\uc0cc\ub4dc\ubc15\uc2a4 \ubaa8\ub4dc\uc5d0\uc11c\ub294 \ucee8\ud2b8\ub799\ud2b8 \uc0c1\ud0dc, \ucee8\ud2b8\ub799\ud2b8 \ucf54\ub4dc, \uacc4\uc815 \ub610\ub294 \uc561\uc138\uc2a4 \ud0a4\ub97c ",(0,a.jsx)(t.code,{children:"patchState"}),"\ub85c \ucd94\uac00\ud558\uac70\ub098 \uc218\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"DeployContract"}),", ",(0,a.jsx)(t.code,{children:"CreateAccount"})," \ubc0f ",(0,a.jsx)(t.code,{children:"AddKey"})," ",(0,a.jsx)(t.a,{href:"https://nomicon.io/RuntimeSpec/Actions#addkeyaction",children:"\uc791\uc5c5(Action)"}),"\uc744 \ud1b5\ud574 \uc77c\ubc18 \ud2b8\ub79c\uc7ad\uc158\uc744 \uc0ac\uc6a9\ud558\uc5ec \ucee8\ud2b8\ub799\ud2b8 \ucf54\ub4dc, \uacc4\uc815 \ubc0f \uc561\uc138\uc2a4 \ud0a4\ub97c \ubcc0\uacbd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub7ec\ub098 \uc774\uac83\uc740 \uc790\uc2e0\uc758 \uacc4\uc815 \ub610\ub294 \ud558\uc704 \uacc4\uc815\uc744 \ubcc0\uacbd\ud558\ub294 \uac83\ub9cc\uc73c\ub85c \uc81c\ud55c\ub429\ub2c8\ub2e4. ",(0,a.jsx)(t.code,{children:"patchState"}),"\ub97c \ud1b5\ud574 \ubaa8\ub4e0 \uacc4\uc815\uc5d0\uc11c \uc774\ub7ec\ud55c \uc791\uc5c5\uc744 \uc218\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]})}),"\n",(0,a.jsxs)(t.p,{children:['\ud2b8\ub79c\uc7ad\uc158\uc740 \ucee8\ud2b8\ub799\ud2b8\uac00 \ud504\ub85c\uadf8\ub7a8\ub41c \ubc29\uc2dd\uc73c\ub85c \uc0c1\ud0dc\ub97c \ubcc0\uacbd\ud558\ub294 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c\ub9cc \ud3ec\ud568\ud560 \uc218 \uc788\uae30 \ub54c\ubb38\uc5d0, \ud2b8\ub79c\uc7ad\uc158\uc744 \ud1b5\ud574 \ucee8\ud2b8\ub799\ud2b8 \uc0c1\ud0dc\uc5d0 \ub300\ud574 \uc784\uc758\ub85c \ubcc0\uacbd\ud558\ub294 \uc791\uc5c5\uc744 \uc218\ud589\ud560 \uc218 \uc5c6\uc74c\uc744 \uba85\uc2ec\ud558\uc138\uc694. \uc608\ub97c \ub4e4\uc5b4 NFT \ucee8\ud2b8\ub799\ud2b8\ub97c \uc0ac\uc6a9\ud558\uba74 \uc18c\uc720\uad8c\uc744 \uac00\uc9c4 NFT\uc5d0 \ub300\ud574 \uc791\uc5c5\uc744 \uc218\ud589\ud560 \uc218\ub294 \uc788\uc9c0\ub9cc, \ub2e4\ub978 \uacc4\uc815\uc774 \uc18c\uc720\ud55c NFT\uc5d0 \ub300\ud574 \uc791\uc5c5\ud558\ub294 \uac83\uc740 \ubd88\uac00\ub2a5\ud569\ub2c8\ub2e4. \uc774\uac83\uc740 NFT \ucee8\ud2b8\ub799\ud2b8\uc758 \uc608\uc0c1\ub41c \uc791\ub3d9 \ubc29\uc2dd\uc785\ub2c8\ub2e4. \uadf8\ub7ec\ub098 \ud14c\uc2a4\ud2b8\ub97c \uc704\ud574 \ub2e4\ub978 \uc0ac\ub78c\uc758 NFT\ub97c \ubcc0\uacbd\ud558\uace0 \uc2f6\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub97c "\ucee8\ud2b8\ub799\ud2b8 \uc0c1\ud0dc\uc758 \uc784\uc758 \ubcc0\uacbd"\uc774\ub77c\uace0 \ud558\uba70, ',(0,a.jsx)(t.code,{children:"patchState"}),"\ub97c \ud1b5\ud574 \uc218\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,a.jsxs)(i.Z,{groupId:"code-tabs",children:[(0,a.jsxs)(c.Z,{value:"js",label:"\ud83c\udf10 JavaScript",children:[(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"    const {contract, ali} = t.context.accounts;\n    // Contract must have some state for viewState & patchState to work\n    await ali.call(contract, 'set_status', {message: 'hello'});\n    // Get state\n    const state = await contract.viewState();\n    // Get raw value\n    const statusMessage = state.get('STATE', {schema, type: StatusMessage});\n    // Update contract state\n    statusMessage.records.push(\n      new BorshRecord({k: 'alice.near', v: 'hello world'}),\n    );\n    // Serialize and patch state back to runtime\n    await contract.patchState(\n      'STATE',\n      borsh.serialize(schema, statusMessage),\n    );\n    // Check again that the update worked\n    const result = await contract.view('get_status', {\n      account_id: 'alice.near',\n    });\n    t.is(result, 'hello world');\n"})}),(0,a.jsxs)(t.p,{children:["\uc774\ub97c \uc218\ud589\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud55c \uc804\uccb4 \uc608\uc81c\ub97c \ubcf4\uace0 \uc2f6\ub2e4\uba74, ",(0,a.jsx)(t.a,{href:"https://github.com/near/workspaces-js/blob/main/__tests__/02.patch-state.ava.ts",children:"\uc0c1\ud0dc \ud328\uce58 \ud14c\uc2a4\ud2b8"}),"\ub97c \ucc38\uc870\ud558\uc138\uc694."]})]}),(0,a.jsx)(c.Z,{value:"rust",label:"\ud83e\udd80 Rust",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-rust",children:'    // Grab STATE from the testnet status_message contract. This contract contains the following data:\n    //   get_status(dev-20211013002148-59466083160385) => "hello from testnet"\n    let (testnet_contract_id, status_msg) = {\n        let worker = workspaces::testnet().await?;\n        let contract_id: AccountId = TESTNET_PREDEPLOYED_CONTRACT_ID\n            .parse()\n            .map_err(anyhow::Error::msg)?;\n        let mut state_items = worker.view_state(&contract_id, None).await?;\n        let state = state_items.remove(b"STATE".as_slice()).unwrap();\n        let status_msg = StatusMessage::try_from_slice(&state)?;\n        (contract_id, status_msg)\n    };\n    info!(target: "spooning", "Testnet: {:?}", status_msg);\n    // Create our sandboxed environment and grab a worker to do stuff in it:\n    let worker = workspaces::sandbox().await?;\n    // Deploy with the following status_message state: sandbox_contract_id => "hello from sandbox"\n    let sandbox_contract = deploy_status_contract(&worker, "hello from sandbox").await?;\n    // Patch our testnet STATE into our local sandbox:\n    worker\n        .patch_state(\n            sandbox_contract.id(),\n            "STATE".as_bytes(),\n            &status_msg.try_to_vec()?,\n        )\n        .await?;\n    // Now grab the state to see that it has indeed been patched:\n    let status: String = sandbox_contract\n        .view(\n            &worker,\n            "get_status",\n            serde_json::json!({\n                "account_id": testnet_contract_id,\n            })\n            .to_string()\n            .into_bytes(),\n        )\n        .await?\n        .json()?;\n    info!(target: "spooning", "New status patched: {:?}", status);\n    assert_eq!(&status, "hello from testnet");\n'})})})]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"patchState"})," \ub300\uc2e0, \ub178\ub4dc\ub97c \uc911\uc9c0\ud558\uace0 \uc81c\ub124\uc2dc\uc2a4\uc5d0\uc11c \uc0c1\ud0dc\ub97c \ub364\ud504\ud55c \ub2e4\uc74c, \uc81c\ub124\uc2dc\uc2a4\ub97c \ud3b8\uc9d1\ud558\uace0 \ub178\ub4dc\ub97c \ub2e4\uc2dc \uc2dc\uc791\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\uc774 \uc811\uadfc \ubc29\uc2dd\uc740 \uc218\ud589\ud558\uae30\uac00 \ub354 \ubcf5\uc7a1\ud558\uba70, \ub178\ub4dc\ub97c \ub2e4\uc2dc \uc2dc\uc791\ud558\uc9c0 \uc54a\uace0\uc11c\ub294 \uc218\ud589\ud560 \uc218\ub3c4 \uc5c6\uc2b5\ub2c8\ub2e4."]}),"\n",(0,a.jsx)(t.h3,{id:"\uc2dc\uac04-\uc774\ub3d9",children:"\uc2dc\uac04 \uc774\ub3d9"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"workspaces"})," offers support for forwarding the state of the blockchain to the future. \uc989, \uc2dc\uac04\uc5d0 \ubbfc\uac10\ud55c \ub370\uc774\ud130\uac00 \ud544\uc694\ud55c \ucee8\ud2b8\ub799\ud2b8\ub294 \uc0cc\ub4dc\ubc15\uc2a4\uc758 \ube14\ub85d\uc774 \uc0dd\uc131\ub420 \ub54c\uae4c\uc9c0 \uc549\uc544\uc11c \uae30\ub2e4\ub9b4 \ud544\uc694\uac00 \uc5c6\uc2b5\ub2c8\ub2e4. We can simply just call ",(0,a.jsx)(t.code,{children:"worker.fast_forward"})," to get us further in time:"]}),"\n",(0,a.jsxs)(i.Z,{groupId:"code-tabs",children:[(0,a.jsx)(c.Z,{value:"js",label:"\ud83c\udf10 JavaScript",default:!0,children:(0,a.jsx)(s.Ey,{fname:"fast-forward.ava.ts",language:"js",url:"https://github.com/near/near-workspaces-js/blob/main/__tests__/08.fast-forward.ava.ts",start:"34",end:"53"})}),(0,a.jsxs)(c.Z,{value:"rust",label:"\ud83e\udd80 Rust",children:[(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-rust",children:'#[tokio::test]\nasync fn test_contract() -> anyhow::Result<()> {\n    let worker = workspaces::sandbox().await?;\n    let contract = worker.dev_deploy(WASM_BYTES);\n    let blocks_to_advance = 10000;\n    worker.fast_forward(blocks_to_advance);\n    // Now, "do_something_with_time" will be in the future and can act on future time-related state.\n    contract.call(&worker, "do_something_with_time")\n        .transact()\n        .await?;\n}\n'})}),(0,a.jsx)(t.p,{children:(0,a.jsxs)(t.em,{children:[(0,a.jsx)(t.a,{href:"https://github.com/near/workspaces-rs/blob/main/examples/src/fast_forward.rs",children:"See the full example on Github"}),"."]})})]})]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"\ud14c\uc2a4\ud2b8\ub137-\uc0ac\uc6a9",children:"\ud14c\uc2a4\ud2b8\ub137 \uc0ac\uc6a9"}),"\n",(0,a.jsxs)(t.p,{children:["NEAR \uc791\uc5c5 \uacf5\uac04\uc740 \ud14c\uc2a4\ud2b8\ub97c \uc791\uc131\ud55c \ub4a4 \ub85c\uceec \uc0cc\ub4dc\ubc15\uc2a4 \ub178\ub4dc(\uae30\ubcf8 \ub3d9\uc791) \ub610\ub294 ",(0,a.jsx)(t.a,{href:"/ko/concepts/basics/networks",children:"NEAR TestNet"}),"\uc5d0 \ub300\ud574 \uc2e4\ud589\ud560 \uc218 \uc788\ub3c4\ub85d \uc124\uc815\ub429\ub2c8\ub2e4. \uc774\uac83\uc774 \ub3c4\uc6c0\uc774 \ub420 \uc218 \uc788\ub294 \uc774\uc720\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"\ucee8\ud2b8\ub799\ud2b8\uac00 \uc608\uc0c1\ub300\ub85c \uc791\ub3d9\ud55c\ub2e4\ub294 \ub192\uc740 \uc2e0\ub8b0\uc131 \uc81c\uacf5"}),"\n",(0,a.jsx)(t.li,{children:"\ubc30\ud3ec\ub41c \ud14c\uc2a4\ud2b8\ub137 \ucee8\ud2b8\ub799\ud2b8\uc5d0 \ub300\ud55c \ud14c\uc2a4\ud2b8 \uac00\ub2a5"}),"\n",(0,a.jsx)(t.li,{children:"\uc0cc\ub4dc\ubc15\uc2a4 \ubaa8\ub4dc\uc5d0\uc11c \ubb54\uac00 \uaebc\uc9c0\ub294 \uac83 \uac19\uc73c\uba74 \ud14c\uc2a4\ud2b8\ub137\uacfc \ube44\uad50 \uac00\ub2a5"}),"\n"]}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsxs)(t.p,{children:["\ud14c\uc2a4\ud2b8\ub137 \ubaa8\ub4dc\uc5d0\uc11c Workspaces\ub97c \uc0ac\uc6a9\ud558\ub824\uba74 ",(0,a.jsx)(t.code,{children:"testnet"})," \uacc4\uc815\uc774 \uc788\uc5b4\uc57c \ud569\ub2c8\ub2e4.\nYou can create one ",(0,a.jsx)(t.a,{href:"https://testnet.mynearwallet.com/",children:"here"}),"."]})}),"\n",(0,a.jsx)(t.p,{children:"\ub2e4\uc74c\uacfc \uac19\uc740 \uc138 \uac00\uc9c0 \ub2e8\uacc4\ub97c \ud1b5\ud574 \ud14c\uc2a4\ud2b8\ub137 \ubaa8\ub4dc\ub85c \uc804\ud658\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"testnet"}),"\uc5d0 \uc791\uc5c5\uc790 \uc124\uc815 \ub124\ud2b8\uc6cc\ud06c\ub97c \ub9cc\ub4e4\uace0 \ub9c8\uc2a4\ud130 \uacc4\uc815\uc744 \uc804\ub2ec\ud560 \ub54c"]}),"\n"]}),"\n",(0,a.jsxs)(i.Z,{groupId:"code-tabs",children:[(0,a.jsx)(c.Z,{value:"js",label:"\ud83c\udf10 JavaScript",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"const worker = await Worker.init({\n network: 'testnet',\n testnetMasterAccountId: '<yourAccountName>',\n})\n"})})}),(0,a.jsx)(c.Z,{value:"rust",label:"\ud83e\udd80 Rust",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-rust",children:"#[tokio::main]  // or whatever runtime we want\nasync fn main() -> anyhow::Result<()> {\n// Create a sandboxed environment.\n// NOTE: Each call will create a new sandboxed environment\nlet worker = workspaces::sandbox().await?;\n// or for testnet:\nlet worker = workspaces::testnet().await?;\n}\n"})})})]}),"\n",(0,a.jsxs)(t.ol,{start:"2",children:["\n",(0,a.jsxs)(t.li,{children:["\ud14c\uc2a4\ud2b8\ub97c \uc2e4\ud589\ud560 \ub54c, ",(0,a.jsx)(t.code,{children:"NEAR_WORKSPACES_NETWORK"})," \ubc0f ",(0,a.jsx)(t.code,{children:"TESTNET_MASTER_ACCOUNT_ID"})," \ud658\uacbd \ubcc0\uc218\ub97c \uc124\uc815"]}),"\n"]}),"\n",(0,a.jsx)(i.Z,{groupId:"code-tabs",children:(0,a.jsxs)(c.Z,{value:"js",label:"\ud83c\udf10 JavaScript",default:!0,children:[(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"NEAR_WORKSPACES_NETWORK=testnet TESTNET_MASTER_ACCOUNT_ID=<your master account Id> node test.js\n"})}),(0,a.jsxs)(t.p,{children:["\uc774 \ud658\uacbd \ubcc0\uc218\ub97c \uc124\uc815\ud558\uace0, ",(0,a.jsx)(t.code,{children:"{network: 'testnet', testnetMasterAccountId: <masterAccountId>}"}),"\ub97c ",(0,a.jsx)(t.code,{children:"Worker.init"}),"\uc5d0 \uc804\ub2ec\ud558\uba74 \uad6c\uc131 \uac1d\uccb4\uac00 \uc6b0\uc120\ud569\ub2c8\ub2e4."]})]})}),"\n",(0,a.jsxs)(t.ol,{start:"3",children:["\n",(0,a.jsxs)(t.li,{children:["AVA\ub97c \ud1b5\ud574 ",(0,a.jsx)(t.code,{children:"near-workspaces"}),"\ub97c \uc0ac\uc6a9\ud558\uace0 \uc788\ub2e4\uba74 \ucee4\uc2a4\ud140 \uad6c\uc131 \ud30c\uc77c\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub2e4\ub978 \ud14c\uc2a4\ud130\ub4e4\ub3c4 \uc720\uc0ac\ud55c \uad6c\uc131 \ud30c\uc77c\uc744 \ud5c8\uc6a9\ud569\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,a.jsx)(i.Z,{groupId:"code-tabs",children:(0,a.jsxs)(c.Z,{value:"js",label:"\ud83c\udf10 JavaScript",default:!0,children:[(0,a.jsxs)(t.p,{children:["\ub2e4\uc74c\uacfc \uac19\uc740 \ud615\ud0dc\ub85c ",(0,a.jsx)(t.code,{children:"ava.testnet.config.cjs"})," \ud30c\uc77c\uc744 ",(0,a.jsx)(t.code,{children:"package.json"}),"\uacfc \ub3d9\uc77c\ud55c \ub514\ub809\ud1a0\ub9ac\uc5d0 \ub9cc\ub4ed\ub2c8\ub2e4."]}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"module.exports = {\n ...require('near-workspaces/ava.testnet.config.cjs'),\n ...require('./ava.config.cjs'),\n};\nmodule.exports.environmentVariables = {\n    TESTNET_MASTER_ACCOUNT_ID: '<masterAccountId>',\n};\n"})}),(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://github.com/near/workspaces-js/blob/main/ava.testnet.config.cjs",children:"near-workspaces/ava.testnet.config.cjs"})," \uac00\uc838\uc624\uae30(import)\ub294 ",(0,a.jsx)(t.code,{children:"NEAR_WORKSPACES_NETWORK"})," \ud658\uacbd \ubcc0\uc218\ub97c \uc124\uc815\ud569\ub2c8\ub2e4. \uc774 \uc811\uadfc \ubc29\uc2dd\uc758 \uc774\uc810\uc740 \uc0cc\ub4dc\ubc15\uc2a4 \ubaa8\ub4dc\uc5d0\uc11c\ub9cc \uc2e4\ud589\ub418\uc5b4\uc57c \ud558\ub294 \ud30c\uc77c\uc744 \uc27d\uac8c \ubb34\uc2dc\ud560 \uc218 \uc788\ub2e4\ub294 \uac83\uc785\ub2c8\ub2e4."]}),(0,a.jsxs)(t.p,{children:["\uc774\uc81c ",(0,a.jsx)(t.code,{children:"package.json"}),"\uc758 ",(0,a.jsx)(t.code,{children:"scripts"})," \uc139\uc158\uc5d0 ",(0,a.jsx)(t.code,{children:"test:testnet"})," \uc2a4\ud06c\ub9bd\ud2b8\ub97c \ucd94\uac00\ud558\uace0 \uc2f6\ub2e4\uba74, \ub2e4\uc74c\uacfc \uac19\uc774 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-diff",children:'"scripts": {\n  "test": "ava",\n+  "test:testnet": "ava --config ./ava.testnet.config.cjs"\n}\n'})})]})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"\ucd94\uac00-\ubbf8\ub514\uc5b4-\uc790\ub8cc",children:"\ucd94\uac00 \ubbf8\ub514\uc5b4 \uc790\ub8cc"}),"\n",(0,a.jsx)(t.h4,{id:"test-driven-design",children:"\uc791\uc5c5 \uacf5\uac04\uacfc AVA\ub97c \uc0ac\uc6a9\ud55c \ud14c\uc2a4\ud2b8 \uae30\ubc18 \uc124\uacc4"}),"\n",(0,a.jsx)(t.p,{children:"\uc544\ub798 \ube44\ub514\uc624\ub294 \uac04\ub2e8\ud55c \ucee8\ud2b8\ub799\ud2b8\ub97c \uc704\ud574 TDD\uc5d0 \uc791\uc5c5 \uacf5\uac04 \ubc0f AVA\ub97c \uc801\uc6a9\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud574 \uc548\ub0b4\ud569\ub2c8\ub2e4."}),"\n",(0,a.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/LCu03IYwu1I",title:"TDD Using Workspaces",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})]})}function x(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>i});n(67294);var a=n(36905);const r={tabItem:"tabItem_Ymn6"};var s=n(85893);function i(e){var t=e.children,n=e.hidden,i=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,i),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>_});var a=n(67294),r=n(36905),s=n(12466),i=n(16550),c=n(20469),o=n(91980),l=n(67392),d=n(50012);function u(e){var t,n;return null!=(t=null==(n=a.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,a.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function h(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:function(e){return u(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,l.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function x(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,s=(0,i.k6)(),c=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:r});return[(0,o._X)(c),(0,a.useCallback)((function(e){if(c){var t=new URLSearchParams(s.location.search);t.set(c,e),s.replace(Object.assign({},s.location,{search:t.toString()}))}}),[c,s])]}function m(e){var t,n,r,s,i=e.defaultValue,o=e.queryString,l=void 0!==o&&o,u=e.groupId,m=h(e),j=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:m})})),g=j[0],f=j[1],b=x({queryString:l,groupId:u}),v=b[0],w=b[1],_=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),n=(0,d.Nk)(t),r=n[0],s=n[1],[r,(0,a.useCallback)((function(e){t&&s.set(e)}),[t,s])]),k=_[0],T=_[1],y=function(){var e=null!=v?v:k;return p({value:e,tabValues:m})?e:null}();return(0,c.Z)((function(){y&&f(y)}),[y]),{selectedValue:g,selectValue:(0,a.useCallback)((function(e){if(!p({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);f(e),w(e),T(e)}),[w,T,m]),tabValues:m}}var j=n(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=n(85893);function b(e){var t=e.className,n=e.block,a=e.selectedValue,i=e.selectValue,c=e.tabValues,o=[],l=(0,s.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=o.indexOf(t),r=c[n].value;r!==a&&(l(t),i(r))},u=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var a,r=o.indexOf(e.currentTarget)+1;n=null!=(a=o[r])?a:o[0];break;case"ArrowLeft":var s,i=o.indexOf(e.currentTarget)-1;n=null!=(s=o[i])?s:o[o.length-1]}null==(t=n)||t.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t),children:c.map((function(e){var t=e.value,n=e.label,s=e.attributes;return(0,f.jsx)("li",Object.assign({role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:function(e){return o.push(e)},onKeyDown:u,onClick:d},s,{className:(0,r.Z)("tabs__item",g.tabItem,null==s?void 0:s.className,{"tabs__item--active":a===t}),children:null!=n?n:t}),t)}))})}function v(e){var t=e.lazy,n=e.children,r=e.selectedValue,s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var i=s.find((function(e){return e.props.value===r}));return i?(0,a.cloneElement)(i,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:s.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})}))})}function w(e){var t=m(e);return(0,f.jsxs)("div",{className:(0,r.Z)("tabs-container",g.tabList),children:[(0,f.jsx)(b,Object.assign({},t,e)),(0,f.jsx)(v,Object.assign({},t,e))]})}function _(e){var t=(0,j.Z)();return(0,f.jsx)(w,Object.assign({},e,{children:u(e.children)}),String(t))}},71183:(e,t,n)=>{n.d(t,{O2:()=>x,Ey:()=>j,SQ:()=>m});var a=n(67294),r=n(74866),s=n(85162),i=n(74165),c=n(15861),o=n(1841),l=n.n(o),d=n(85893);function u(){return(u=(0,c.Z)((0,i.Z)().mark((function e(t,n,a){var r,s,c,o;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((s=localStorage.getItem(t+"-until"))&&s>Date.now())){e.next=5;break}r=localStorage.getItem(t),e.next=18;break;case 5:return e.prev=5,e.next=8,fetch(t);case 8:return e.next=10,e.sent.text();case 10:r=e.sent,localStorage.setItem(t,r),localStorage.setItem(t+"-until",Date.now()+6e4),e.next=18;break;case 15:return e.prev=15,e.t0=e.catch(5),e.abrupt("return","Error fetching code, please try reloading");case 18:return c=r.split("\n"),n=n?Number(n)-1:0,a=a?Number(a):c.length,c=c.slice(n,a),o=c.reduce((function(e,t){if(0===t.length)return e;var n=t.match(/^\s+/);return n?Math.min(e,n[0].length):0}),1/0),e.abrupt("return",c.map((function(e){return e.slice(o)})).join("\n"));case 24:case"end":return e.stop()}}),e,null,[[5,15]])})))).apply(this,arguments)}const h=function(e){var t=e.url,n=e.start,r=e.end,s=e.language,i=e.fname,c=e.metastring,o=(0,a.useState)("Loading..."),h=o[0],p=o[1];return(0,a.useEffect)((function(){var e=function(e){var t=e.slice(e.indexOf("https")).split("#"),n=t[0],a=(t[1],new URL(n).pathname.split("/").slice(1)),r=a[0],s=a[1];return a[2],"https://raw.githubusercontent.com/"+r+"/"+s+"/"+a[3]+"/"+a.slice(4).join("/")}(t),a=function(e,t,n){return u.apply(this,arguments)}(e,n,r);a.then((function(e){return p(e)}))})),(0,d.jsxs)("div",{fname:i,children:[(0,d.jsx)(l(),{language:s,metastring:c+" showLineNumbers",children:h}),(0,d.jsx)("div",{style:{fontSize:"0.9em",fontWeight:600,color:"rgb(14, 117, 221)",textAlign:"center",paddingBottom:"13px",textDecoration:"underline"},children:(0,d.jsx)("a",{href:t,target:"_blank",rel:"noreferrer noopener",children:"See full example on GitHub"})})]})};var p={rust:"\ud83e\udd80 Rust",js:"\ud83c\udf10 Javascript",ts:"\ud83c\udf10 Typescript"};function x(e){var t=e.children;return Array.isArray(t)||(t=[t]),(0,d.jsx)(r.Z,{className:"language-tabs",groupId:"code-tabs",children:t.map((function(e,t){return(0,d.jsx)(s.Z,{value:e.props.value,label:p[e.props.value],children:e})}))})}function m(e){var t=e.children,n=e.language;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var n=e.props,a=(n.children,n.url),r=n.start,s=n.end,i=n.fname;if(e.type===j)return j({url:a,start:r,end:s,language:t,fname:i});return e}(e,n)})),1==t.length?(0,d.jsx)(s.Z,{value:0,label:t[0].props.fname,children:t[0]}):(0,d.jsx)(r.Z,{className:"file-tabs",children:t.map((function(e,t){return(0,d.jsx)(s.Z,{value:t,label:e.props.fname,children:e})}))})}function j(e){var t=e.url,n=e.start,a=e.end,r=e.language,s=e.fname,i=e.metastring;return h({url:t,start:n,end:a,language:r,fname:s,metastring:i})}}}]);