"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4473],{18586:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var t=s(85893),r=s(11151);const i={id:"contract-size",title:"Reducing Contract Size"},a="Reducing a contract's size",o={id:"sdk/rust/contract-size",title:"Reducing Contract Size",description:"Advice & examples",source:"@site/../docs/sdk/rust/reduce-size.md",sourceDirName:"sdk/rust",slug:"/sdk/rust/contract-size",permalink:"/zh-CN/sdk/rust/contract-size",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/sdk/rust/reduce-size.md",tags:[],version:"current",lastUpdatedBy:"Dami\xe1n Parrino",lastUpdatedAt:1661363070,formattedLastUpdatedAt:"2022\u5e748\u670824\u65e5",frontMatter:{id:"contract-size",title:"Reducing Contract Size"},sidebar:"tools",previous:{title:"Best Practices",permalink:"/zh-CN/sdk/rust/best-practices"},next:{title:"About JS SDK",permalink:"/zh-CN/sdk/js/introduction"}},c={},l=[{value:"Advice &amp; examples",id:"advice--examples",level:2},{value:"Small wins",id:"small-wins",level:2},{value:"Using flags",id:"using-flags",level:3},{value:"Removing <code>rlib</code> from the manifest",id:"removing-rlib-from-the-manifest",level:3},{value:"Lower-level approach",id:"lower-level-approach",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"reducing-a-contracts-size",children:"Reducing a contract's size"}),"\n",(0,t.jsx)(n.h2,{id:"advice--examples",children:"Advice & examples"}),"\n",(0,t.jsx)(n.p,{children:"This page is made for developers familiar with lower-level concepts who wish to reduce their contract size significantly, perhaps at the expense of code readability."}),"\n",(0,t.jsx)(n.p,{children:"Some common scenarios where this approach may be helpful:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"contracts intended to be tied to one's account management"}),"\n",(0,t.jsx)(n.li,{children:"contracts deployed using a factory"}),"\n",(0,t.jsx)(n.li,{children:"future advancements similar to the EVM on NEAR"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"There have been a few items that may add unwanted bytes to a contract's size when compiled. Some of these may be more easily swapped for other approaches while others require more internal knowledge about system calls."}),"\n",(0,t.jsx)(n.h2,{id:"small-wins",children:"Small wins"}),"\n",(0,t.jsx)(n.h3,{id:"using-flags",children:"Using flags"}),"\n",(0,t.jsxs)(n.p,{children:["When compiling a contract make sure to pass flag ",(0,t.jsx)(n.code,{children:"-C link-arg=-s"})," to the rust compiler:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"RUSTFLAGS='-C link-arg=-s' cargo build --target wasm32-unknown-unknown --release\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Here is the parameters we use for the most examples in ",(0,t.jsx)(n.code,{children:"Cargo.toml"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-toml",children:'[profile.release]\ncodegen-units = 1\nopt-level = "s"\nlto = true\ndebug = false\npanic = "abort"\noverflow-checks = true\n'})}),"\n",(0,t.jsxs)(n.p,{children:["You may want to experiment with using ",(0,t.jsx)(n.code,{children:'opt-level = "z"'})," instead of ",(0,t.jsx)(n.code,{children:'opt-level = "s"'})," to see if generates a smaller binary. See more details on this in ",(0,t.jsx)(n.a,{href:"https://doc.rust-lang.org/cargo/reference/profiles.html#opt-level",children:"The Cargo Book Profiles section"}),". You may also reference this ",(0,t.jsx)(n.a,{href:"https://rustwasm.github.io/book/reference/code-size.html#tell-llvm-to-optimize-for-size-instead-of-speed",children:"Shrinking .wasm Size"})," resource."]}),"\n",(0,t.jsxs)(n.h3,{id:"removing-rlib-from-the-manifest",children:["Removing ",(0,t.jsx)(n.code,{children:"rlib"})," from the manifest"]}),"\n",(0,t.jsxs)(n.p,{children:["Ensure that your manifest (",(0,t.jsx)(n.code,{children:"Cargo.toml"}),") doesn't contain ",(0,t.jsx)(n.code,{children:"rlib"})," unless it needs to. Some NEAR examples have included this:"]}),"\n",(0,t.jsx)(n.admonition,{title:"Adds unnecessary bloat",type:"caution",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-toml",children:'[lib]\ncrate-type = ["cdylib", "rlib"]\n'})})}),"\n",(0,t.jsx)(n.p,{children:"when it could be:"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-toml",children:'[lib]\ncrate-type = ["cdylib"]\n'})})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsxs)(n.li,{children:["When using the Rust SDK, you may override the default JSON serialization to use ",(0,t.jsx)(n.a,{href:"https://borsh.io",children:"Borsh"})," instead. ",(0,t.jsx)(n.a,{href:"/zh-CN/sdk/rust/contract-interface/serialization-interface#overriding-serialization-protocol-default",children:"See this page"})," for more information and an example."]}),"\n",(0,t.jsxs)(n.li,{children:["When using assertions or guards, avoid using the standard ",(0,t.jsx)(n.code,{children:"assert"})," macros like ",(0,t.jsx)(n.a,{href:"https://doc.rust-lang.org/std/macro.assert.html",children:(0,t.jsx)(n.code,{children:"assert!"})}),", ",(0,t.jsx)(n.a,{href:"https://doc.rust-lang.org/std/macro.assert_eq.html",children:(0,t.jsx)(n.code,{children:"assert_eq!"})}),", or ",(0,t.jsx)(n.a,{href:"https://doc.rust-lang.org/std/macro.assert_ne.html",children:(0,t.jsx)(n.code,{children:"assert_ne!"})})," as these may add bloat for information regarding the line number of the error. There are similar issues with ",(0,t.jsx)(n.code,{children:"unwrap"}),", ",(0,t.jsx)(n.code,{children:"expect"}),", and Rust's ",(0,t.jsx)(n.code,{children:"panic!()"})," macro."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Example of a standard assertion:"}),"\n",(0,t.jsx)(n.admonition,{title:"Adds unnecessary bloat",type:"caution",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'assert_eq!(contract_owner, predecessor_account, "ERR_NOT_OWNER");\n'})})}),"\n",(0,t.jsx)(n.p,{children:"when it could be:"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'if contract_owner != predecessor_account {\n  env::panic(b"ERR_NOT_OWNER");\n}\n'})})}),"\n",(0,t.jsxs)(n.p,{children:["Example of removing ",(0,t.jsx)(n.code,{children:"expect"}),":"]}),"\n",(0,t.jsx)(n.admonition,{title:"Adds unnecessary bloat",type:"caution",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'let owner_id = self.owner_by_id.get(&token_id).expect("Token not found");\n'})})}),"\n",(0,t.jsx)(n.p,{children:"when it could be:"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'fn expect_token_found<T>(option: Option<T>) -> T {\n  option.unwrap_or_else(|| env::panic_str("Token not found"))\n}\nlet owner_id = expect_token_found(self.owner_by_id.get(&token_id));  \n'})})}),"\n",(0,t.jsxs)(n.p,{children:["Example of changing standard ",(0,t.jsx)(n.code,{children:"panic!()"}),":"]}),"\n",(0,t.jsx)(n.admonition,{title:"Adds unnecessary bloat",type:"caution",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'panic!("ERR_MSG_HERE"); \n'})})}),"\n",(0,t.jsx)(n.p,{children:"when it could be:"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'env::panic_str("ERR_MSG_HERE");  \n'})})}),"\n",(0,t.jsx)(n.h2,{id:"lower-level-approach",children:"Lower-level approach"}),"\n",(0,t.jsxs)(n.p,{children:["For a ",(0,t.jsx)(n.code,{children:"no_std"})," approach to minimal contracts, observe the following examples:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/near/nearcore/tree/1e7c6613f65c23f87adf2c92e3d877f4ffe666ea/runtime/near-test-contracts/tiny-contract-rs",children:"Tiny contract"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/ilblackdragon/near-eth-gateway/blob/master/proxy/src/lib.rs",children:"NEAR ETH Gateway"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://youtu.be/Hy4VBSCqnsE",children:"This YouTube video"})," where Eugene demonstrates a fungible token in ",(0,t.jsx)(n.code,{children:"no_std"})," mode. The code for this ",(0,t.jsx)(n.a,{href:"https://github.com/near/core-contracts/pull/88",children:"example lives here"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsxs)(n.a,{href:"https://github.com/austinabell/nesdie/tree/main/examples",children:["Examples using a project called ",(0,t.jsx)(n.code,{children:"nesdie"})]}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Note that Aurora has found success using ",(0,t.jsx)(n.a,{href:"https://crates.io/crates/rjson",children:"rjson"})," as a lightweight JSON serialization crate. It has a smaller footprint than ",(0,t.jsx)(n.a,{href:"https://crates.io/crates/serde",children:"serde"})," which is currently packaged with the Rust SDK. See ",(0,t.jsx)(n.a,{href:"https://github.com/aurora-is-near/aurora-engine/blob/65a1d11fcd16192cc1bda886c62005c603189a24/src/json.rs#L254",children:"this example of rjson"})," in an Aurora repository, although implementation details will have to be gleaned by the reader and won't be expanded upon here. ",(0,t.jsx)(n.a,{href:"https://github.com/austinabell/nesdie/blob/bb6beb77e32cd54077ac54bf028f262a9dfb6ad0/examples/multisig/src/utils/json/vector.rs#L26-L30",children:"This nesdie example"})," also uses the ",(0,t.jsx)(n.a,{href:"https://crates.io/crates/miniserde",children:"miniserde crate"}),", which is another option to consider for folks who choose to avoid using the Rust SDK."]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{title:"Information on system calls",type:"note",children:(0,t.jsxs)(s,{children:[(0,t.jsxs)("summary",{children:["Expand to see what's available from ",(0,t.jsx)("code",{children:"sys.rs"})]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near/near-sdk-rs/blob/master/near-sdk/src/environment/sys.rs\n"})})]})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>a});var t=s(67294);const r={},i=t.createContext(r);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);