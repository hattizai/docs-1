"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4155],{2606:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=r(85893),s=r(11151),a=r(71183);const l={id:"skeleton",title:"\ubf08\ub300 \ubc0f Rust \uc544\ud0a4\ud14d\ucc98",sidebar_label:"\ucee8\ud2b8\ub799\ud2b8 \uc544\ud0a4\ud14d\ucc98"},i=void 0,o={id:"tutorials/fts/skeleton",title:"\ubf08\ub300 \ubc0f Rust \uc544\ud0a4\ud14d\ucc98",description:"In this article, you'll learn about the basic architecture behind the FT contract that you'll develop while following this \"Zero to Hero\" series. You'll discover the contract's layout and you'll see how the Rust files are structured in order to build a feature-complete smart contract.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/3.tutorials/fts/1-skeleton.md",sourceDirName:"3.tutorials/fts",slug:"/tutorials/fts/skeleton",permalink:"/ko/tutorials/fts/skeleton",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/fts/1-skeleton.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1712954223e3,sidebarPosition:1,frontMatter:{id:"skeleton",title:"\ubf08\ub300 \ubc0f Rust \uc544\ud0a4\ud14d\ucc98",sidebar_label:"\ucee8\ud2b8\ub799\ud2b8 \uc544\ud0a4\ud14d\ucc98"},sidebar:"tutorials",previous:{title:"\uc0ac\uc804 \ubc30\ud3ec\ub41c \ucee8\ud2b8\ub799\ud2b8",permalink:"/ko/tutorials/fts/predeployed-contract"},next:{title:"\ud1a0\ud070 \uc815\uc758",permalink:"/ko/tutorials/fts/defining-a-token"}},c={},d=[{value:"\uc18c\uac1c",id:"\uc18c\uac1c",level:2},{value:"Files structure",id:"files-structure",level:2},{value:"\uc18c\uc2a4 \ud30c\uc77c",id:"\uc18c\uc2a4-\ud30c\uc77c",level:3},{value:"<code>ft_core.rs</code>",id:"ft_corers",level:2},{value:"<code>lib.rs</code>",id:"librs",level:2},{value:"<code>metadata.rs</code>",id:"metadatars",level:2},{value:"<code>storage.rs</code>",id:"storagers",level:2},{value:"\ubf08\ub300 \ub9cc\ub4e4\uae30",id:"\ubf08\ub300-\ub9cc\ub4e4\uae30",level:2},{value:"\uacb0\ub860",id:"\uacb0\ub860",level:2}];function u(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["In this article, you'll learn about the basic architecture behind the FT contract that you'll develop while following this ",(0,n.jsx)(t.em,{children:'"Zero to Hero"'})," series. You'll discover the contract's layout and you'll see how the Rust files are structured in order to build a feature-complete smart contract."]}),"\n",(0,n.jsx)(t.admonition,{title:"New to Rust?",type:"info",children:(0,n.jsxs)(t.p,{children:["If you are new to Rust and want to dive into smart contract development, our ",(0,n.jsx)(t.a,{href:"/ko/build/smart-contracts/quickstart",children:"Quick-start guide"})," is a great place to start."]})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"\uc18c\uac1c",children:"\uc18c\uac1c"}),"\n",(0,n.jsx)(t.p,{children:"This tutorial presents the code skeleton for the FT smart contract and its file structure. You'll find how all the functions are laid out as well as the missing Rust code that needs to be filled in. Once every file and function has been covered, you'll go through the process of building the mock-up contract to confirm that your Rust toolchain works as expected."}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"files-structure",children:"Files structure"}),"\n",(0,n.jsxs)(t.p,{children:["The repository comes with many different folders. Each folder represents a different milestone of this tutorial starting with the skeleton folder and ending with the finished contract folder. If you step into any of these folders, you'll find that they each follow a regular ",(0,n.jsx)(t.a,{href:"https://www.rust-lang.org/",children:"Rust"})," project. The file structure for these smart contracts have:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Cargo.toml"}),": \ucf54\ub4dc \uc758\uc874\uc131(dependency)\uc744 \uc815\uc758\ud558\uae30 \uc704\ud55c \ud30c\uc77c(Javascript\ub098 node \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c\uc758 ",(0,n.jsx)(t.code,{children:"package.json"}),"\uacfc \uc720\uc0ac)"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"src"}),": \ubaa8\ub4e0 Rust \uc18c\uc2a4 \ud30c\uc77c\uc774 \uc800\uc7a5\ub418\ub294 \ud3f4\ub354\uc785\ub2c8\ub2e4."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"target"})," folder where the compiled ",(0,n.jsx)(t.code,{children:"wasm"})," will output to."]}),"\n"]}),"\n",(0,n.jsx)("hr",{className:"subsection"}),"\n",(0,n.jsx)(t.h3,{id:"\uc18c\uc2a4-\ud30c\uc77c",children:"\uc18c\uc2a4 \ud30c\uc77c"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"\ud30c\uc77c"}),(0,n.jsx)(t.th,{children:"\uc124\uba85"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"#corers",children:"ft_core.rs"})}),(0,n.jsxs)(t.td,{children:["\ub300\uccb4 \uac00\ub2a5\ud55c \ud1a0\ud070(FT)\uc758 \uc561\uc138\uc2a4 \ubc0f \uc804\uc1a1\uc744 \uc81c\uc5b4\ud558\ub294 \ub85c\uc9c1\uc774 \uc874\uc7ac\ud569\ub2c8\ub2e4. \uc774 \ud30c\uc77c\uc740 ",(0,n.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/FungibleToken/Core",children:"\ud575\uc2ec"})," \ud45c\uc900\uc758 \uad6c\ud604\uc744 \ub098\ud0c0\ub0c5\ub2c8\ub2e4."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"#librs",children:"lib.rs"})}),(0,n.jsx)(t.td,{children:"\uacf5\uac1c\ub41c \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 \ud568\uc218\ub4e4\uc744 \uac00\uc9c0\uace0 \uc788\uace0, \uc5b4\ub5a4 \uc815\ubcf4\uac00 \uc628\uccb4\uc778\uc5d0 \uc800\uc7a5\ub420\uc9c0 \uc9c0\uc2dc\ud569\ub2c8\ub2e4."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"#metadatars",children:"metadata.rs"})}),(0,n.jsxs)(t.td,{children:["\ud1a0\ud070 \ubc0f \uba54\ud0c0\ub370\uc774\ud130 \uad6c\uc870\ub97c \uc815\uc758\ud569\ub2c8\ub2e4. \uc774 \ud30c\uc77c\uc740 \ud45c\uc900\uc758 ",(0,n.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/FungibleToken/Metadata",children:"\uba54\ud0c0\ub370\uc774\ud130"})," \ud655\uc7a5 \uad6c\ud604\uc744 \ub098\ud0c0\ub0c5\ub2c8\ub2e4."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"#storagers",children:"storage.rs"})}),(0,n.jsxs)(t.td,{children:["\ub4f1\ub85d \ubc0f \uc800\uc7a5\uc744 \uc704\ud55c \ub85c\uc9c1\uc744 \ud3ec\ud568\ud569\ub2c8\ub2e4.  \uc774 \ud30c\uc77c\uc740 ",(0,n.jsx)(t.a,{href:"https://nomicon.io/Standards/StorageManagement",children:"\uc2a4\ud1a0\ub9ac\uc9c0 \uad00\ub9ac"})," \ud45c\uc900\uc758 \uad6c\ud604\uc744 \ub098\ud0c0\ub0c5\ub2c8\ub2e4."]})]})]})]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"skeleton\n\u251c\u2500\u2500 Cargo.lock\n\u251c\u2500\u2500 Cargo.toml\n\u2514\u2500\u2500 src\n    \u251c\u2500\u2500 ft_core.rs\n    \u251c\u2500\u2500 lib.rs\n    \u251c\u2500\u2500 metadata.rs\n    \u2514\u2500\u2500 storage.rs\n"})}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://github.com/near-examples/ft-tutorial/tree/main/1.skeleton",children:"GitHub \ub808\ud37c\uc9c0\ud1a0\ub9ac"}),"\uc5d0\uc11c \ucf54\ub4dc\ub97c \uc0b4\ud3b4\ubcf4\uc138\uc694."]})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"ft_corers",children:(0,n.jsx)(t.code,{children:"ft_core.rs"})}),"\n",(0,n.jsx)(t.p,{children:"\uc0ac\uc6a9\uc790 \uac04\uc5d0 FT\ub97c \uc804\uc1a1\ud558\uace0 \uc911\uc694\ud55c \uc815\ubcf4\ub97c \ucffc\ub9ac\ud560 \uc218 \uc788\ub294 \ud575\uc2ec \ub85c\uc9c1\uc785\ub2c8\ub2e4."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"\uba54\uc11c\ub4dc"}),(0,n.jsx)(t.th,{children:"\uc124\uba85"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"ft_transfer"})}),(0,n.jsx)(t.td,{children:"\uc9c0\uc815\ub41c \uc591\uc758 FT\ub97c \uc218\uc2e0\uc790 ID\ub85c \uc804\uc1a1\ud569\ub2c8\ub2e4."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"ft_transfer_call"})}),(0,n.jsxs)(t.td,{children:["\uc9c0\uc815\ub41c \uc591\uc758 FT\ub97c \uc218\uc2e0\uc790\uc5d0\uac8c \uc804\uc1a1\ud558\uace0, \uc218\uc2e0\uc790\uc758 \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c \uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c(cross-contract call)\uc744 \uc218\ud589\ud558\uc5ec ",(0,n.jsx)(t.code,{children:"ft_on_transfer"})," \uba54\uc11c\ub4dc\ub97c \uc2e4\ud589\ud558\ub824\uace0 \uc2dc\ub3c4\ud569\ub2c8\ub2e4. \uc774 ",(0,n.jsx)(t.code,{children:"ft_on_transfer"})," \uba54\uc11c\ub4dc\uc758 \uad6c\ud604\uc740 \ucee8\ud2b8\ub799\ud2b8 \uc791\uc131\uc790\uc5d0\uac8c \ub2ec\ub824 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \ud29c\ud1a0\ub9ac\uc5bc\uc758 \ub9c8\ucf13\ud50c\ub808\uc774\uc2a4 \uc139\uc158\uc5d0\uc11c \uc608\uc81c \uad6c\ud604\uc744 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4. ",(0,n.jsx)(t.code,{children:"ft_on_transfer"}),"\uc758 \uc2e4\ud589\uc774 \ub05d\ub098\uba74, ",(0,n.jsx)(t.code,{children:"ft_resolve_transfer"}),"\ub294 \ud638\ucd9c\ub418\uc5b4\uc11c \uc131\uacf5\uc801\uc73c\ub85c \uc218\ud589\ub418\uc5c8\ub294\uc9c0 \ud655\uc778\ub429\ub2c8\ub2e4."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"ft_total_supply"})}),(0,n.jsx)(t.td,{children:"\ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c \uc720\ud1b5\ub418\ub294 \ub300\uccb4 \uac00\ub2a5\ud55c \ud1a0\ud070\uc758 \ucd1d\ub7c9\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"ft_balance_of"})}),(0,n.jsx)(t.td,{children:"\ud2b9\uc815 \uc0ac\uc6a9\uc790\uac00 \uc18c\uc720\ud55c \ub300\uccb4 \uac00\ub2a5\ud55c \ud1a0\ud070 \uc218\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"ft_on_transfer"})}),(0,n.jsxs)(t.td,{children:["\uc218\uc2e0\uc790\uc758 \ucee8\ud2b8\ub799\ud2b8\uc5d0 \ub530\ub77c \uc9c4\ud589\ub418\ub294 \uba54\uc11c\ub4dc\uc785\ub2c8\ub2e4. ",(0,n.jsx)(t.code,{children:"ft_transfer_call"})," \uba54\uc11c\ub4dc\ub97c \ud1b5\ud574 FT\uac00 \uc218\uc2e0\uc790\uc758 \ucee8\ud2b8\ub799\ud2b8 \uacc4\uc815\uc73c\ub85c \uc804\uc1a1\ub420 \ub54c \ud638\ucd9c\ub429\ub2c8\ub2e4. \uc774\ub294 \ubcf4\ub0b8 \uc0ac\ub78c\uc5d0\uac8c \ub2e4\uc2dc \ud658\ubd88\ud574\uc57c \ud558\ub294 FT \uc218\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"ft_resolve_transfer"})}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"ft_on_transfer"})," \uc2e4\ud589\uc774 \uc644\ub8cc\ub41c \ud6c4 \ud638\ucd9c\ub429\ub2c8\ub2e4. \uc774 \ud568\uc218\ub294 \uc218\uc2e0\uc790 \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uc740 FT\ub97c \ud658\ubd88\ud558\uace0 \ud658\ubd88 \ud6c4 \uc218\uc2e0\uc790\uc5d0\uac8c \uc804\uc1a1\ub41c \uc21c FT \uc218\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4(\uc788\ub294 \uacbd\uc6b0)."]})]})]})]}),"\n",(0,n.jsx)(a.Ey,{language:"rust",start:"61",end:"167",url:"https://github.com/near-examples/ft-tutorial/blob/main/1.skeleton/src/ft_core.rs"}),"\n",(0,n.jsxs)(t.p,{children:["You'll learn more about these functions in the ",(0,n.jsx)(t.a,{href:"/tutorials/fts/circulating-supply",children:"circulating supply"})," and ",(0,n.jsx)(t.a,{href:"/tutorials/fts/transfers",children:"transfers"})," sections of the tutorial series."]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"librs",children:(0,n.jsx)(t.code,{children:"lib.rs"})}),"\n",(0,n.jsx)(t.p,{children:"\uc774 \ud30c\uc77c\uc740 \ucee8\ud2b8\ub799\ud2b8\uac00 \uc800\uc7a5\ud558\uace0 \ucd94\uc801\ud558\ub294 \uc815\ubcf4\ub97c \uac04\ub7b5\ud558\uac8c \uc124\uba85\ud569\ub2c8\ub2e4."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"\uba54\uc11c\ub4dc"}),(0,n.jsx)(t.th,{children:"\uc124\uba85"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"new_default_meta"})}),(0,n.jsxs)(t.td,{children:["\uae30\ubcf8 ",(0,n.jsx)(t.code,{children:"metadata"}),"\ub97c \uc774\uc6a9\ud574 \ucee8\ud2b8\ub799\ud2b8\ub97c \ucd08\uae30\ud654\ud574, \uc0ac\uc6a9\uc790\uac00 \uc785\ub825\uac12\uc744 \uc81c\uacf5\ud558\uc9c0 \uc54a\uc544\ub3c4 \ub418\ub3c4\ub85d \ud569\ub2c8\ub2e4. In addition, a total supply is passed in which is sent to the owner."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"new"})}),(0,n.jsxs)(t.td,{children:["\uc0ac\uc6a9\uc790\uac00 \uc81c\uacf5\ud55c ",(0,n.jsx)(t.code,{children:"metadata"}),"\uc640 \ucd1d \uacf5\uae09\ub7c9\uc73c\ub85c \ucee8\ud2b8\ub799\ud2b8\ub97c \ucd08\uae30\ud654\ud569\ub2c8\ub2e4."]})]})]})]}),"\n",(0,n.jsx)(t.admonition,{title:"Keep in mind",type:"info",children:(0,n.jsxs)(t.p,{children:["The initialization functions (",(0,n.jsx)(t.code,{children:"new"}),", ",(0,n.jsx)(t.code,{children:"new_default_meta"}),") can only be called once."]})}),"\n",(0,n.jsx)(a.Ey,{language:"rust",start:"36",end:"60",url:"https://github.com/near-examples/ft-tutorial/blob/main/1.skeleton/src/lib.rs"}),"\n",(0,n.jsxs)(t.p,{children:["\ud29c\ud1a0\ub9ac\uc5bc \uc2dc\ub9ac\uc988\uc758 ",(0,n.jsx)(t.a,{href:"/ko/tutorials/fts/defining-a-token",children:"\ud1a0\ud070 \uc815\uc758"}),"\uc5d0\uc11c \uc774\ub7ec\ud55c \uae30\ub2a5\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uc544\ubcfc \uac83\uc785\ub2c8\ub2e4."]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"metadatars",children:(0,n.jsx)(t.code,{children:"metadata.rs"})}),"\n",(0,n.jsxs)(t.p,{children:["\uc774 \ud30c\uc77c\uc740 \ud1a0\ud070 \ubc0f \uba54\ud0c0\ub370\uc774\ud130\uc5d0 \ub300\ud574 \uc800\uc7a5\ud560 \uc815\ubcf4\ub97c \ucd94\uc801\ud558\ub294 \ub370 \uc0ac\uc6a9\ub429\ub2c8\ub2e4. \ub610\ud55c \ud45c\uc900 \uba54\ud0c0\ub370\uc774\ud130 \ud655\uc7a5\uc758 \uc77c\ubd80\uc778 \ucee8\ud2b8\ub799\ud2b8\uc758 ",(0,n.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/FungibleToken/Metadata",children:"\uba54\ud0c0\ub370\uc774\ud130"}),"\ub97c \ubcf4\ub294 \uae30\ub2a5\uc744 \uc815\uc758\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"\uc774\ub984"}),(0,n.jsx)(t.th,{children:"\uc124\uba85"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"FungibleTokenMetadata"})}),(0,n.jsx)(t.td,{children:"\uc774 \uad6c\uc870\ub294 \ub300\uccb4 \uac00\ub2a5\ud55c \ud1a0\ud070\uc758 \uba54\ud0c0\ub370\uc774\ud130\ub97c \uc815\uc758\ud569\ub2c8\ub2e4."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"ft_metadata"})}),(0,n.jsx)(t.td,{children:"This function allows users to query for the token's metadata."})]})]})]}),"\n",(0,n.jsx)(a.Ey,{language:"rust",start:"11",end:"30",url:"https://github.com/near-examples/ft-tutorial/blob/main/1.skeleton/src/metadata.rs"}),"\n",(0,n.jsxs)(t.p,{children:["\ud29c\ud1a0\ub9ac\uc5bc \uc2dc\ub9ac\uc988\uc758 ",(0,n.jsx)(t.a,{href:"/ko/tutorials/fts/defining-a-token",children:"\ud1a0\ud070 \uc815\uc758"}),"\uc5d0\uc11c \uc774\ub7ec\ud55c \uae30\ub2a5\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uc544\ubcfc \uac83\uc785\ub2c8\ub2e4."]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"storagers",children:(0,n.jsx)(t.code,{children:"storage.rs"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://nomicon.io/Standards/StorageManagement",children:"\uc2a4\ud1a0\ub9ac\uc9c0 \uad00\ub9ac"})," \ud45c\uc900\uc5d0 \ub530\ub978 \ub4f1\ub85d \ub85c\uc9c1\uc744 \ud3ec\ud568\ud569\ub2c8\ub2e4."]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"\uba54\uc11c\ub4dc"}),(0,n.jsx)(t.th,{children:"\uc124\uba85"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"storage_deposit"})}),(0,n.jsx)(t.td,{children:"\uc8fc\uc5b4\uc9c4 \uacc4\uc815\uc5d0 \ub300\ud574 \u24c3\uc758 \uc785\uae08\uc744 \ubc1b\ub294 \uc9c0\uae09 \uba54\uc11c\ub4dc\uc785\ub2c8\ub2e4. \uc774\ub807\uac8c \ud558\uba74 \ucee8\ud2b8\ub799\ud2b8 \uc0ac\uc6a9\uc790\uac00 \ub4f1\ub85d\ub429\ub2c8\ub2e4."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"storage_balance_bounds"})}),(0,n.jsx)(t.td,{children:"\ucee8\ud2b8\ub799\ud2b8\uc640 \uc0c1\ud638 \uc791\uc6a9\ud558\ub294 \ub370 \ud544\uc694\ud55c \ucd5c\uc18c \ubc0f \ucd5c\ub300 \ud5c8\uc6a9 \uc2a4\ud1a0\ub9ac\uc9c0 \uae08\uc561\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4. FT \ucee8\ud2b8\ub799\ud2b8\uc758 \uacbd\uc6b0 \ucd5c\uc18c\uac12 = \ucd5c\ub300\uac12\uc785\ub2c8\ub2e4."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"storage_balance_of"})}),(0,n.jsx)(t.td,{children:"\uc9c0\uc815\ub41c \uc0ac\uc6a9\uc790\uac00 \uc9c0\ubd88\ud55c \ucd1d \uc2a4\ud1a0\ub9ac\uc9c0 \ubc0f \uc0ac\uc6a9 \uac00\ub2a5\ud55c \uc2a4\ud1a0\ub9ac\uc9c0\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4. FT \ucee8\ud2b8\ub799\ud2b8\uc758 \uacbd\uc6b0 \ub4f1\ub85d\uc744 \uc704\ud574 \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c \uc0ac\uc6a9\ud558\uace0 \uc2a4\ud1a0\ub9ac\uc9c0\uc5d0 \ub300\ud574 \ucd08\uacfc \uc9c0\ubd88\ud560 \uc218 \uc5c6\uae30 \ub54c\ubb38\uc5d0, \uc0ac\uc6a9 \uac00\ub2a5\ud55c \uc2a4\ud1a0\ub9ac\uc9c0\ub294 \ud56d\uc0c1 0\uc785\ub2c8\ub2e4."})]})]})]}),"\n",(0,n.jsx)(a.Ey,{language:"rust",start:"81",end:"108",url:"https://github.com/near-examples/ft-tutorial/blob/main/1.skeleton/src/storage.rs"}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["\ud29c\ud1a0\ub9ac\uc5bc \uc2dc\ub9ac\uc988\uc758 ",(0,n.jsx)(t.a,{href:"/ko/tutorials/fts/registering-accounts",children:"\uc2a4\ud1a0\ub9ac\uc9c0"}),"\uc5d0\uc11c \uc774\ub7ec\ud55c \uae30\ub2a5\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uc544\ubcfc \uac83\uc785\ub2c8\ub2e4."]})}),"\n",(0,n.jsx)(t.h2,{id:"\ubf08\ub300-\ub9cc\ub4e4\uae30",children:"\ubf08\ub300 \ub9cc\ub4e4\uae30"}),"\n",(0,n.jsx)(t.p,{children:"\uc544\uc9c1 \uae30\ubcf8 \ub808\ud37c\uc9c0\ud1a0\ub9ac\ub97c \ubcf5\uc81c\ud558\uc9c0 \uc54a\uc740 \uacbd\uc6b0 \ud130\ubbf8\ub110\uc744 \uc5f4\uace0 \ub2e4\uc74c\uc744 \uc2e4\ud589\ud569\ub2c8\ub2e4."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:"git clone https://github.com/near-examples/ft-tutorial/\n"})}),"\n",(0,n.jsxs)(t.p,{children:["\ub2e4\uc74c\uc73c\ub85c ",(0,n.jsx)(t.code,{children:"1.skeleton/build.sh"})," \ud30c\uc77c \ub0b4\uc5d0 \uc788\ub294 \ube4c\ub4dc \uc2a4\ud06c\ub9bd\ud2b8\ub97c \uc0ac\uc6a9\ud558\uc5ec \ubf08\ub300 \ucee8\ud2b8\ub799\ud2b8\ub97c \ube4c\ub4dc\ud569\ub2c8\ub2e4."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:"cd ft-tutorial/1.skeleton\ncargo near build\n"})}),"\n",(0,n.jsx)(t.p,{children:"\uc774 \uc18c\uc2a4\ub294 \ubf08\ub300\uc77c \ubfd0\uc774\ubbc0\ub85c \ub2e4\uc74c\uacfc \uac19\uc774 \uc0ac\uc6a9\ud558\uc9c0 \uc54a\ub294 \ucf54\ub4dc\uc5d0 \ub300\ud55c \ub9ce\uc740 \uacbd\uace0\ub97c \ubc1b\uac8c \ub429\ub2c8\ub2e4."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"   = note: `#[warn(dead_code)]` on by default\n\nwarning: constant is never used: `GAS_FOR_RESOLVE_TRANSFER`\n --\x3e src/ft_core.rs:5:1\n  |\n5 | const GAS_FOR_RESOLVE_TRANSFER: Gas = Gas(5_000_000_000_000);\n  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n\nwarning: constant is never used: `GAS_FOR_FT_TRANSFER_CALL`\n --\x3e src/ft_core.rs:6:1\n  |\n6 | const GAS_FOR_FT_TRANSFER_CALL: Gas = Gas(25_000_000_000_000 + GAS_FOR_RESOLVE_TRANSFER.0);\n  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n\nwarning: `fungible-token` (lib) generated 25 warnings\n    Finished release [optimized] target(s) in 1.93s\n\u2728  Done in 2.03s.\n"})}),"\n",(0,n.jsx)(t.p,{children:"\uc774\ub7ec\ud55c \uacbd\uace0\uc5d0 \ub300\ud574 \uac71\uc815\ud558\uc9c0 \ub9c8\uc138\uc694. \uc544\uc9c1 \uc774 \ucee8\ud2b8\ub799\ud2b8\ub97c \ubc30\ud3ec\ud558\uc9c0 \uc54a\uc744 \uac83\uc785\ub2c8\ub2e4. \ubf08\ub300 \uad6c\ucd95\ud558\ub294 \uac83\uc740 Rust \ud234\uccb4\uc778\uc774 \uc81c\ub300\ub85c \uc791\ub3d9\ud558\ub294\uc9c0 \ud655\uc778\ud558\ub294 \uac83\uc774\uace0, \uc774\ub294 \ub2e4\uc74c \ud29c\ud1a0\ub9ac\uc5bc\uc5d0\uc11c \uc774 NFT \ucee8\ud2b8\ub799\ud2b8\uc758 \uac1c\uc120\ub41c \ubc84\uc804\uc744 \ucef4\ud30c\uc77c\ud560 \uc218 \uc788\ub294\uc9c0 \ud655\uc778\ud558\ub294 \ub370 \uc720\uc6a9\ud569\ub2c8\ub2e4."}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"\uacb0\ub860",children:"\uacb0\ub860"}),"\n",(0,n.jsxs)(t.p,{children:["\uc774 NFT \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\uc758 \ub808\uc774\uc544\uc6c3\uacfc \ub2e4\uc591\ud55c \uc18c\uc2a4 \ud30c\uc77c\uc5d0 \ubaa8\ub4e0 \ud568\uc218\uac00 \uc5b4\ub5bb\uac8c \ubc30\uce58\ub418\uc5b4 \uc788\ub294\uc9c0 \ud655\uc778\ud588\uc2b5\ub2c8\ub2e4. ",(0,n.jsx)(t.code,{children:"yarn"}),"\uc744 \uc0ac\uc6a9\ud558\uc5ec \ucee8\ud2b8\ub799\ud2b8\ub97c \ucef4\ud30c\uc77c\ud560 \uc218 \uc788\uc5c8\uace0, \ud29c\ud1a0\ub9ac\uc5bc\uc758 \ub2e4\uc74c ",(0,n.jsx)(t.a,{href:"/tutorials/fts/circulating-supply",children:"\uc139\uc158"}),"\uc5d0\uc11c \uc774 \ubf08\ub300\ub97c \uad6c\uccb4\ud654\ud558\uae30 \uc2dc\uc791\ud560 \uac83\uc785\ub2c8\ub2e4."]}),"\n",(0,n.jsxs)(t.admonition,{title:"\ubb38\uc11c\uc758 \ubc84\uc804 \uad00\ub9ac",type:"note",children:[(0,n.jsx)(t.p,{children:"\uc774 \uae00\uc744 \uc4f0\ub294 \uc2dc\uc810\uc5d0\uc11c \uc774 \uc608\uc81c\ub294 \ub2e4\uc74c \ubc84\uc804\uc5d0\uc11c \uc791\ub3d9\ud569\ub2c8\ub2e4."}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["rustc: ",(0,n.jsx)(t.code,{children:"1.76.0"})]}),"\n",(0,n.jsxs)(t.li,{children:["near-sdk-rs: ",(0,n.jsx)(t.code,{children:"5.1.0"})," (with enabled ",(0,n.jsx)(t.code,{children:"legacy"})," feature)"]}),"\n",(0,n.jsxs)(t.li,{children:["cargo-near: ",(0,n.jsx)(t.code,{children:"0.6.1"})]}),"\n"]})]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},85162:(e,t,r)=>{r.d(t,{Z:()=>l});r(67294);var n=r(36905);const s={tabItem:"tabItem_Ymn6"};var a=r(85893);function l(e){var t=e.children,r=e.hidden,l=e.className;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.Z)(s.tabItem,l),hidden:r,children:t})}},74866:(e,t,r)=>{r.d(t,{Z:()=>_});var n=r(67294),s=r(36905),a=r(12466),l=r(16550),i=r(20469),o=r(91980),c=r(67392),d=r(50012);function u(e){var t,r;return null!=(t=null==(r=n.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,n.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?t:[]}function h(e){var t=e.values,r=e.children;return(0,n.useMemo)((function(){var e=null!=t?t:function(e){return u(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(r);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,r])}function f(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function x(e){var t=e.queryString,r=void 0!==t&&t,s=e.groupId,a=(0,l.k6)(),i=function(e){var t=e.queryString,r=void 0!==t&&t,n=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:r,groupId:s});return[(0,o._X)(i),(0,n.useCallback)((function(e){if(i){var t=new URLSearchParams(a.location.search);t.set(i,e),a.replace(Object.assign({},a.location,{search:t.toString()}))}}),[i,a])]}function j(e){var t,r,s,a,l=e.defaultValue,o=e.queryString,c=void 0!==o&&o,u=e.groupId,j=h(e),p=(0,n.useState)((function(){return function(e){var t,r=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!f({value:r,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var s=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:l,tabValues:j})})),g=p[0],m=p[1],b=x({queryString:c,groupId:u}),v=b[0],y=b[1],_=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),r=(0,d.Nk)(t),s=r[0],a=r[1],[s,(0,n.useCallback)((function(e){t&&a.set(e)}),[t,a])]),k=_[0],w=_[1],T=function(){var e=null!=v?v:k;return f({value:e,tabValues:j})?e:null}();return(0,i.Z)((function(){T&&m(T)}),[T]),{selectedValue:g,selectValue:(0,n.useCallback)((function(e){if(!f({value:e,tabValues:j}))throw new Error("Can't select invalid tab value="+e);m(e),y(e),w(e)}),[y,w,j]),tabValues:j}}var p=r(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=r(85893);function b(e){var t=e.className,r=e.block,n=e.selectedValue,l=e.selectValue,i=e.tabValues,o=[],c=(0,a.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,r=o.indexOf(t),s=i[r].value;s!==n&&(c(t),l(s))},u=function(e){var t,r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var n,s=o.indexOf(e.currentTarget)+1;r=null!=(n=o[s])?n:o[0];break;case"ArrowLeft":var a,l=o.indexOf(e.currentTarget)-1;r=null!=(a=o[l])?a:o[o.length-1]}null==(t=r)||t.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},t),children:i.map((function(e){var t=e.value,r=e.label,a=e.attributes;return(0,m.jsx)("li",Object.assign({role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:function(e){return o.push(e)},onKeyDown:u,onClick:d},a,{className:(0,s.Z)("tabs__item",g.tabItem,null==a?void 0:a.className,{"tabs__item--active":n===t}),children:null!=r?r:t}),t)}))})}function v(e){var t=e.lazy,r=e.children,s=e.selectedValue,a=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){var l=a.find((function(e){return e.props.value===s}));return l?(0,n.cloneElement)(l,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:a.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})}))})}function y(e){var t=j(e);return(0,m.jsxs)("div",{className:(0,s.Z)("tabs-container",g.tabList),children:[(0,m.jsx)(b,Object.assign({},t,e)),(0,m.jsx)(v,Object.assign({},t,e))]})}function _(e){var t=(0,p.Z)();return(0,m.jsx)(y,Object.assign({},e,{children:u(e.children)}),String(t))}},71183:(e,t,r)=>{r.d(t,{O2:()=>x,Ey:()=>p,SQ:()=>j});var n=r(67294),s=r(74866),a=r(85162),l=r(74165),i=r(15861),o=r(1841),c=r.n(o),d=r(85893);function u(){return(u=(0,i.Z)((0,l.Z)().mark((function e(t,r,n){var s,a,i,o;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((a=localStorage.getItem(t+"-until"))&&a>Date.now())){e.next=5;break}s=localStorage.getItem(t),e.next=18;break;case 5:return e.prev=5,e.next=8,fetch(t);case 8:return e.next=10,e.sent.text();case 10:s=e.sent,localStorage.setItem(t,s),localStorage.setItem(t+"-until",Date.now()+6e4),e.next=18;break;case 15:return e.prev=15,e.t0=e.catch(5),e.abrupt("return","Error fetching code, please try reloading");case 18:return i=s.split("\n"),r=r?Number(r)-1:0,n=n?Number(n):i.length,i=i.slice(r,n),o=i.reduce((function(e,t){if(0===t.length)return e;var r=t.match(/^\s+/);return r?Math.min(e,r[0].length):0}),1/0),e.abrupt("return",i.map((function(e){return e.slice(o)})).join("\n"));case 24:case"end":return e.stop()}}),e,null,[[5,15]])})))).apply(this,arguments)}const h=function(e){var t=e.url,r=e.start,s=e.end,a=e.language,l=e.fname,i=e.metastring,o=(0,n.useState)("Loading..."),h=o[0],f=o[1];return(0,n.useEffect)((function(){var e=function(e){var t=e.slice(e.indexOf("https")).split("#"),r=t[0],n=(t[1],new URL(r).pathname.split("/").slice(1)),s=n[0],a=n[1];return n[2],"https://raw.githubusercontent.com/"+s+"/"+a+"/"+n[3]+"/"+n.slice(4).join("/")}(t),n=function(e,t,r){return u.apply(this,arguments)}(e,r,s);n.then((function(e){return f(e)}))})),(0,d.jsxs)("div",{fname:l,children:[(0,d.jsx)(c(),{language:a,metastring:i+" showLineNumbers",children:h}),(0,d.jsx)("div",{style:{fontSize:"0.9em",fontWeight:600,color:"rgb(14, 117, 221)",textAlign:"center",paddingBottom:"13px",textDecoration:"underline"},children:(0,d.jsx)("a",{href:t,target:"_blank",rel:"noreferrer noopener",children:"See full example on GitHub"})})]})};var f={rust:"\ud83e\udd80 Rust",js:"\ud83c\udf10 Javascript",ts:"\ud83c\udf10 Typescript"};function x(e){var t=e.children;return Array.isArray(t)||(t=[t]),(0,d.jsx)(s.Z,{className:"language-tabs",groupId:"code-tabs",children:t.map((function(e,t){return(0,d.jsx)(a.Z,{value:e.props.value,label:f[e.props.value],children:e})}))})}function j(e){var t=e.children,r=e.language;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var r=e.props,n=(r.children,r.url),s=r.start,a=r.end,l=r.fname;if(e.type===p)return p({url:n,start:s,end:a,language:t,fname:l});return e}(e,r)})),1==t.length?(0,d.jsx)(a.Z,{value:0,label:t[0].props.fname,children:t[0]}):(0,d.jsx)(s.Z,{className:"file-tabs",children:t.map((function(e,t){return(0,d.jsx)(a.Z,{value:t,label:e.props.fname,children:e})}))})}function p(e){var t=e.url,r=e.start,n=e.end,s=e.language,a=e.fname,l=e.metastring;return h({url:t,start:r,end:n,language:s,fname:a,metastring:l})}}}]);