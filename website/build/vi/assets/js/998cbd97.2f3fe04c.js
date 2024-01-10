"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6084],{72329:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var s=n(85893),r=n(11151);const i={id:"skeleton",title:"Skeleton and Rust Architecture",sidebar_label:"Contract Architecture"},o=void 0,l={id:"tutorials/fts/skeleton",title:"Skeleton and Rust Architecture",description:"In this article, you'll learn about the basic architecture behind the FT contract that you'll develop while following this \"Zero to Hero\" series.",source:"@site/../docs/3.tutorials/fts/1-skeleton.md",sourceDirName:"3.tutorials/fts",slug:"/tutorials/fts/skeleton",permalink:"/vi/tutorials/fts/skeleton",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/fts/1-skeleton.md",tags:[],version:"current",lastUpdatedBy:"BenKurrek",lastUpdatedAt:1661365573,formattedLastUpdatedAt:"24 thg 8, 2022",sidebarPosition:1,frontMatter:{id:"skeleton",title:"Skeleton and Rust Architecture",sidebar_label:"Contract Architecture"},sidebar:"contracts",previous:{title:"Pre-deployed Contract",permalink:"/vi/tutorials/fts/predeployed-contract"},next:{title:"Defining Your Token",permalink:"/vi/tutorials/fts/defining-a-token"}},a={},c=[{value:"Introduction",id:"introduction",level:2},{value:"File structure",id:"file-structure",level:2},{value:"Source files",id:"source-files",level:3},{value:"<code>ft_core.rs</code>",id:"ft_corers",level:2},{value:"<code>lib.rs</code>",id:"librs",level:2},{value:"<code>metadata.rs</code>",id:"metadatars",level:2},{value:"<code>storage.rs</code>",id:"storagers",level:2},{value:"Building the skeleton",id:"building-the-skeleton",level:2},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["In this article, you'll learn about the basic architecture behind the FT contract that you'll develop while following this ",(0,s.jsx)(t.em,{children:'"Zero to Hero"'})," series.\nYou'll discover the contract's layout and you'll see how the Rust files are structured in order to build a feature-complete smart contract."]}),"\n"]}),"\n",(0,s.jsx)(t.admonition,{title:"New to Rust?",type:"info",children:(0,s.jsxs)(t.p,{children:["If you are new to Rust and want to dive into smart contract development, our ",(0,s.jsx)(t.a,{href:"/develop/quickstart-guide",children:"Quick-start guide"})," is a great place to start."]})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsx)(t.p,{children:"This tutorial presents the code skeleton for the FT smart contract and its file structure.\nYou'll find how all the functions are laid out as well as the missing Rust code that needs to be filled in.\nOnce every file and function has been covered, you'll go through the process of building the mock-up contract to confirm that your Rust toolchain works as expected."}),"\n",(0,s.jsx)(t.h2,{id:"file-structure",children:"File structure"}),"\n",(0,s.jsxs)(t.p,{children:["The repository comes with many different folders. Each folder represents a different milestone of this tutorial starting with the skeleton folder and ending with the finished contract folder. If you step into any of these folders, you'll find that they each follow a regular ",(0,s.jsx)(t.a,{href:"https://www.rust-lang.org/",children:"Rust"})," project. The file structure for these smart contracts have:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"Cargo.toml"})," file to define the code dependencies (similar to ",(0,s.jsx)(t.code,{children:"package.json"})," in JavaScript and node projects)"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"src"})," folder where all the Rust source files are stored"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"target"})," folder where the compiled ",(0,s.jsx)(t.code,{children:"wasm"})," will output to"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"build.sh"})," script that has been added to provide a convenient way to compile the source code"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"source-files",children:"Source files"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"File"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"#corers",children:"ft_core.rs"})}),(0,s.jsxs)(t.td,{children:["Contains the logic for transferring and controlling FTs. This file represents the implementation of the ",(0,s.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/FungibleToken/Core",children:"core"})," standard."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"#librs",children:"lib.rs"})}),(0,s.jsx)(t.td,{children:"Holds the smart contract initialization functions and dictates what information is kept on-chain."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"#metadatars",children:"metadata.rs"})}),(0,s.jsxs)(t.td,{children:["Defines the metadata structure. This file represents the implementation of the ",(0,s.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/FungibleToken/Metadata",children:"metadata"})," extension of the standard."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"#storagers",children:"storage.rs"})}),(0,s.jsxs)(t.td,{children:["Contains the logic for registration and storage.  This file represents the implementation of the ",(0,s.jsx)(t.a,{href:"https://nomicon.io/Standards/StorageManagement",children:"storage management"})," standard."]})]})]})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"skeleton\n\u251c\u2500\u2500 Cargo.lock\n\u251c\u2500\u2500 Cargo.toml\n\u251c\u2500\u2500 build.sh\n\u2514\u2500\u2500 src\n    \u251c\u2500\u2500 ft_core.rs\n    \u251c\u2500\u2500 lib.rs\n    \u251c\u2500\u2500 metadata.rs\n    \u2514\u2500\u2500 storage.rs\n"})}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["Explore the code in our ",(0,s.jsx)(t.a,{href:"https://github.com/near-examples/ft-tutorial/tree/main/1.skeleton",children:"GitHub repository"}),"."]})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"ft_corers",children:(0,s.jsx)(t.code,{children:"ft_core.rs"})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Core logic that allows you to transfer FTs between users and query for important information."}),"\n"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Method"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"ft_transfer"})}),(0,s.jsx)(t.td,{children:"Transfers a specified amount of FTs to a receiver ID."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"ft_transfer_call"})}),(0,s.jsxs)(t.td,{children:["Transfers a specified amount of FTs to a receiver and attempts to perform a cross-contract call on the receiver\u2019s contract to execute the ",(0,s.jsx)(t.code,{children:"ft_on_transfer"})," method. The implementation of this ",(0,s.jsx)(t.code,{children:"ft_on_transfer"})," method is up to the contract writer. You\u2019ll see an example implementation in the marketplace section of this tutorial. Once ",(0,s.jsx)(t.code,{children:"ft_on_transfer"})," finishes executing, ",(0,s.jsx)(t.code,{children:"ft_resolve_transfer"})," is called to check if things were successful or not."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"ft_total_supply"})}),(0,s.jsx)(t.td,{children:"Returns the total amount of fungible tokens in circulation on the contract."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"ft_balance_of"})}),(0,s.jsx)(t.td,{children:"Returns how many fungible tokens a specific user owns."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"ft_on_transfer"})}),(0,s.jsxs)(t.td,{children:["Method that lives on a receiver's contract. It is called when FTs are transferred to the receiver's contract account via the ",(0,s.jsx)(t.code,{children:"ft_transfer_call"})," method. It returns how many FTs should be refunded back to the sender."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"ft_resolve_transfer"})}),(0,s.jsxs)(t.td,{children:["Invoked after the ",(0,s.jsx)(t.code,{children:"ft_on_transfer"})," is finished executing. This function will refund any FTs not used by the receiver contract and will return the net number of FTs sent to the receiver after the refund (if any)."]})]})]})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near-examples/ft-tutorial/blob/main/1.skeleton/src/ft_core.rs#L61-L166\n"})}),"\n",(0,s.jsxs)(t.p,{children:["You'll learn more about these functions in the ",(0,s.jsx)(t.a,{href:"/tutorials/fts/circulating-supply",children:"circulating supply"})," and ",(0,s.jsx)(t.a,{href:"/tutorials/fts/transfers",children:"transfers"})," sections of the tutorial series."]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"librs",children:(0,s.jsx)(t.code,{children:"lib.rs"})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"This file outlines what information the contract stores and keeps track of."}),"\n"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Method"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"new_default_meta"})}),(0,s.jsxs)(t.td,{children:["Initializes the contract with default ",(0,s.jsx)(t.code,{children:"metadata"})," so the user doesn't have to provide any input. In addition, a total supply is passed in which is sent to the owner"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"new"})}),(0,s.jsxs)(t.td,{children:["Initializes the contract with the user-provided ",(0,s.jsx)(t.code,{children:"metadata"})," and total supply."]})]})]})]}),"\n",(0,s.jsx)(t.admonition,{title:"Keep in mind",type:"info",children:(0,s.jsxs)(t.p,{children:["The initialization functions (",(0,s.jsx)(t.code,{children:"new"}),", ",(0,s.jsx)(t.code,{children:"new_default_meta"}),") can only be called once."]})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near-examples/ft-tutorial/blob/main/1.skeleton/src/lib.rs#L34-L58\n"})}),"\n",(0,s.jsxs)(t.p,{children:["You'll learn more about these functions in the ",(0,s.jsx)(t.a,{href:"/vi/tutorials/fts/defining-a-token",children:"define a token"})," section of the tutorial series."]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"metadatars",children:(0,s.jsx)(t.code,{children:"metadata.rs"})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["This file is used to outline the metadata for the Fungible Token itself.\nIn addition, you can define a function to view the contract's metadata which is part of the standard's ",(0,s.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/FungibleToken/Metadata",children:"metadata"})," extension."]}),"\n"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"FungibleTokenMetadata"})}),(0,s.jsx)(t.td,{children:"This structure defines the metadata for the fungible token."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"ft_metadata"})}),(0,s.jsx)(t.td,{children:"This function allows users to query for the token's metadata"})]})]})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near-examples/ft-tutorial/blob/main/1.skeleton/src/metadata.rs#L10-L30\n"})}),"\n",(0,s.jsxs)(t.p,{children:["You'll learn more about these functions in the ",(0,s.jsx)(t.a,{href:"/vi/tutorials/fts/defining-a-token",children:"define a token"})," section of the tutorial series."]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"storagers",children:(0,s.jsx)(t.code,{children:"storage.rs"})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["Contains the registration logic as per the ",(0,s.jsx)(t.a,{href:"https://nomicon.io/Standards/StorageManagement",children:"storage management"})," standard."]}),"\n"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Method"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"storage_deposit"})}),(0,s.jsx)(t.td,{children:"Payable method that receives an attached deposit of \u24c3 for a given account. This will register the user on the contract."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"storage_balance_bounds"})}),(0,s.jsx)(t.td,{children:"Returns the minimum and maximum allowed storage deposit required to interact with the contract. In the FT contract's case, min = max."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"storage_balance_of"})}),(0,s.jsx)(t.td,{children:"Returns the total and available storage paid by a given user. In the FT contract's case, available is always 0 since it's used by the contract for registration and you can't overpay for storage."})]})]})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near-examples/ft-tutorial/blob/main/1.skeleton/src/storage.rs#L79-L106\n"})}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["You'll learn more about these functions in the ",(0,s.jsx)(t.a,{href:"/vi/tutorials/fts/registering-accounts",children:"storage"})," section of the tutorial series."]})}),"\n",(0,s.jsx)(t.h2,{id:"building-the-skeleton",children:"Building the skeleton"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"If you haven't cloned the main repository yet, open a terminal and run:"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"git clone https://github.com/near-examples/ft-tutorial/\n"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Next, build the skeleton contract with the build script found in the ",(0,s.jsx)(t.code,{children:"1.skeleton/build.sh"})," file."]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"cd ft-tutorial/1.skeleton\n./build.sh\ncd ..\n"})}),"\n",(0,s.jsx)(t.p,{children:"Since this source is just a skeleton you'll get many warnings about unused code, such as:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"   = note: `#[warn(dead_code)]` on by default\n\nwarning: constant is never used: `GAS_FOR_RESOLVE_TRANSFER`\n --\x3e src/ft_core.rs:5:1\n  |\n5 | const GAS_FOR_RESOLVE_TRANSFER: Gas = Gas(5_000_000_000_000);\n  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n\nwarning: constant is never used: `GAS_FOR_FT_TRANSFER_CALL`\n --\x3e src/ft_core.rs:6:1\n  |\n6 | const GAS_FOR_FT_TRANSFER_CALL: Gas = Gas(25_000_000_000_000 + GAS_FOR_RESOLVE_TRANSFER.0);\n  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n\nwarning: `fungible-token` (lib) generated 25 warnings\n    Finished release [optimized] target(s) in 1.93s\n\u2728  Done in 2.03s.\n"})}),"\n",(0,s.jsx)(t.p,{children:"Don't worry about these warnings, you're not going to deploy this contract yet.\nBuilding the skeleton is useful to validate that your Rust toolchain works properly and that you'll be able to compile improved versions of this FT contract in the upcoming tutorials."}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,s.jsxs)(t.p,{children:["You've seen the layout of this FT smart contract, and how all the functions are laid out across the different source files.\nUsing ",(0,s.jsx)(t.code,{children:"yarn"}),", you've been able to compile the contract, and you'll start fleshing out this skeleton in the next ",(0,s.jsx)(t.a,{href:"/tutorials/fts/circulating-supply",children:"section"})," of the tutorial."]}),"\n",(0,s.jsxs)(t.admonition,{title:"Versioning for this article",type:"note",children:[(0,s.jsx)(t.p,{children:"At the time of this writing, this example works with the following versions:"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["rustc: ",(0,s.jsx)(t.code,{children:"1.6.0"})]}),"\n",(0,s.jsxs)(t.li,{children:["near-sdk-rs: ",(0,s.jsx)(t.code,{children:"4.0.0"})]}),"\n"]})]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>o});var s=n(67294);const r={},i=s.createContext(r);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);