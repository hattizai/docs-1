"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1697],{78183:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>h});var s=n(85893),i=n(11151);const a=n.p+"assets/images/batch-of-actions--dobulyo.near--w_artsu-7b8cd24a4de7d4afad476d733ede7e97.jpg",o={sidebar_position:4,sidebar_label:"Hash the solution, unit tests, and an init method",title:"Introduction to basic hashing and adding unit tests"},r="Hash the solution, add basic unit tests",c={id:"tutorials/crosswords/basics/hashing-and-unit-tests",title:"Introduction to basic hashing and adding unit tests",description:"In the previous section, we stored the crossword solution as plain text as a String type on the smart contract. If we're trying to hide the solution from the users, this isn't a great approach as it'll be public to anyone looking at the state. Let's instead hash our crossword solution and store that instead. There are different ways to hash data, but let's use sha256 which is one of the hashing algorithms available in the Rust SDK.",source:"@site/../docs/3.tutorials/crosswords/01-basics/03-hashing-and-unit-tests.md",sourceDirName:"3.tutorials/crosswords/01-basics",slug:"/tutorials/crosswords/basics/hashing-and-unit-tests",permalink:"/tutorials/crosswords/basics/hashing-and-unit-tests",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/crosswords/01-basics/03-hashing-and-unit-tests.md",tags:[],version:"current",lastUpdatedBy:"gagdiez",lastUpdatedAt:1702155614,formattedLastUpdatedAt:"Dec 9, 2023",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Hash the solution, unit tests, and an init method",title:"Introduction to basic hashing and adding unit tests"},sidebar:"contracts",previous:{title:"Add basic code, create a subaccount, and call methods",permalink:"/tutorials/crosswords/basics/add-functions-call"},next:{title:"Add simple frontend",permalink:"/tutorials/crosswords/basics/simple-frontend"}},d={},h=[{value:"Helper unit test during rapid iteration",id:"helper-unit-test-during-rapid-iteration",level:2},{value:"Write a regular unit test",id:"write-a-regular-unit-test",level:2},{value:"Modifying <code>set_solution</code>",id:"modifying-set_solution",level:2},{value:"First use of Batch Actions",id:"first-use-of-batch-actions",level:2},{value:"Get ready for our frontend",id:"get-ready-for-our-frontend",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"hash-the-solution-add-basic-unit-tests",children:"Hash the solution, add basic unit tests"}),"\n",(0,s.jsxs)(t.p,{children:["In the previous section, we stored the crossword solution as plain text as a ",(0,s.jsx)(t.code,{children:"String"})," type on the smart contract. If we're trying to hide the solution from the users, this isn't a great approach as it'll be public to anyone looking at the state. Let's instead hash our crossword solution and store that instead. There are different ways to hash data, but let's use ",(0,s.jsx)(t.code,{children:"sha256"})," which is one of the hashing algorithms available in ",(0,s.jsx)(t.a,{href:"https://docs.rs/near-sdk/latest/near_sdk/env/fn.sha256.html",children:"the Rust SDK"}),"."]}),"\n",(0,s.jsxs)(t.admonition,{title:"Remind me about hashing",type:"info",children:[(0,s.jsx)(t.p,{children:'Without getting into much detail, hashing is a "one-way" function that will output a result from a given input. If you have input (in our case, the crossword puzzle solution) you can get a hash, but if you have a hash you cannot get the input. This basic idea is foundational to information theory and security.'}),(0,s.jsxs)(t.p,{children:["Later on in this tutorial, we'll switch from using ",(0,s.jsx)(t.code,{children:"sha256"})," to using cryptographic key pairs to illustrate additional NEAR concepts."]}),(0,s.jsxs)(t.p,{children:["Learn more about hashing from ",(0,s.jsx)(t.a,{href:"https://github.com/abacabadabacaba",children:"Evgeny Kapun"}),"'s presentation on the subject. You may find other NEAR-related videos from the channel linked in the screenshot below."]}),(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://youtu.be/PfabikgnD08",children:(0,s.jsx)(t.img,{alt:"Evgeny Kapun presents details on hashing",src:n(73574).Z+"",width:"3414",height:"1254"})})})]}),"\n",(0,s.jsx)(t.h2,{id:"helper-unit-test-during-rapid-iteration",children:"Helper unit test during rapid iteration"}),"\n",(0,s.jsxs)(t.p,{children:["As mentioned in the first section of this ",(0,s.jsx)(t.strong,{children:"Basics"}),' chapter, our smart contract is technically a library as defined in the manifest file. For our purposes, a consequence of writing a library in Rust is not having a "main" function that runs. You may find many online tutorials where the command ',(0,s.jsx)(t.code,{children:"cargo run"})," is used during development. We don't have this luxury, but we can use unit tests to interact with our smart contract. This is likely more convenient than building the contract, deploying to a blockchain network, and calling a method."]}),"\n",(0,s.jsxs)(t.p,{children:["We'll add a dependency to the ",(0,s.jsx)(t.a,{href:"https://crates.io/crates/hex",children:"hex crate"})," to make things easier. As you may remember, dependencies live in the manifest file."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near-examples/crossword-tutorial-chapter-1/blob/481a83f0c90398f3234ce8006af4e232d6c779d7/contract/Cargo.toml#L10-L12\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Let's write a unit test that acts as a helper during development. This unit test will sha256 hash the input ",(0,s.jsx)(t.strong,{children:'"near nomicon ref finance"'})," and print it in a human-readable, hex format. (We'll typically put unit tests at the bottom of the ",(0,s.jsx)(t.code,{children:"lib.rs"})," file.)"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:'#[cfg(test)]\nmod tests {\n    use super::*;\n    use near_sdk::test_utils::{get_logs, VMContextBuilder};\n    use near_sdk::{testing_env, AccountId};\n\n    #[test]\n    fn debug_get_hash() {\n        // Basic set up for a unit test\n        testing_env!(VMContextBuilder::new().build());\n\n        // Using a unit test to rapidly debug and iterate\n        let debug_solution = "near nomicon ref finance";\n        let debug_hash_bytes = env::sha256(debug_solution.as_bytes());\n        let debug_hash_string = hex::encode(debug_hash_bytes);\n        println!("Let\'s debug: {:?}", debug_hash_string);\n    }\n}\n'})}),"\n",(0,s.jsxs)(t.admonition,{type:"info",children:[(0,s.jsxs)(t.mdxAdmonitionTitle,{children:["What is that ",(0,s.jsx)(t.code,{children:"{:?}"})," thing?"]}),(0,s.jsxs)(t.p,{children:["Take a look at different formatting traits that are covered in the ",(0,s.jsxs)(t.a,{href:"https://doc.rust-lang.org/std/fmt/index.html#formatting-traits",children:[(0,s.jsx)(t.code,{children:"std"})," Rust docs"]})," regarding this. This is a ",(0,s.jsx)(t.code,{children:"Debug"})," formatting trait and can prove to be useful during development."]})]}),"\n",(0,s.jsx)(t.p,{children:"Run the unit tests with the command:"}),"\n",(0,s.jsx)(t.p,{children:"cargo test -- --nocapture"}),"\n",(0,s.jsx)(t.p,{children:"You'll see this output:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'\u2026\nrunning 1 test\nLet\'s debug: "69c2feb084439956193f4c21936025f14a5a5a78979d67ae34762e18a7206a0f"\ntest tests::debug_get_hash ... ok\n\ntest result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s\n'})}),"\n",(0,s.jsxs)(t.p,{children:['This means when you sha256 the input "near nomicon ref finance" it produces the hash:\n',(0,s.jsx)(t.code,{children:"69c2feb084439956193f4c21936025f14a5a5a78979d67ae34762e18a7206a0f"})]}),"\n",(0,s.jsxs)(t.admonition,{title:"Note on the test flags",type:"tip",children:[(0,s.jsx)(t.p,{children:"You may also run tests using:"}),(0,s.jsx)(t.p,{children:"cargo test"}),(0,s.jsxs)(t.p,{children:["Note that the test command we ran had additional flags. Those flags told Rust ",(0,s.jsx)(t.em,{children:"not to hide the output"})," from the tests. You can read more about this in ",(0,s.jsx)(t.a,{href:"https://doc.rust-lang.org/cargo/commands/cargo-test.html#display-options",children:"the cargo docs"}),". Go ahead and try running the tests using the command above, without the additional flags, and note that we won't see the debug message."]})]}),"\n",(0,s.jsx)(t.p,{children:"The unit test above is meant for debugging and quickly running snippets of code. Some may find this a useful technique when getting familiar with Rust and writing smart contracts. Next we'll write a real unit test that applies to this early version of our crossword puzzle contract."}),"\n",(0,s.jsx)(t.h2,{id:"write-a-regular-unit-test",children:"Write a regular unit test"}),"\n",(0,s.jsxs)(t.p,{children:["Let's add this unit test (inside the ",(0,s.jsx)(t.code,{children:"mod tests {}"})," block, under our previous unit test) and analyze it:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near-examples/crossword-tutorial-chapter-1/blob/d7699cf35092024fe11719b68788436c82fe82af/contract/src/lib.rs#L63-L93\n"})}),"\n",(0,s.jsxs)(t.p,{children:["The first few lines of code will be used commonly when writing unit tests. It uses the ",(0,s.jsx)(t.code,{children:"VMContextBuilder"})," to create some basic context for a transaction, then sets up the testing environment."]}),"\n",(0,s.jsxs)(t.p,{children:["Next, an object is created representing the contract and the ",(0,s.jsx)(t.code,{children:"set_solution"})," function is called. After that, the ",(0,s.jsx)(t.code,{children:"guess_solution"})," function is called twice: first with the incorrect solution and then the correct one. We can check the logs to determine that the function is acting as expected."]}),"\n",(0,s.jsx)(t.admonition,{title:"Note on assertions",type:"info",children:(0,s.jsxs)(t.p,{children:["This unit test uses the ",(0,s.jsx)(t.a,{href:"https://doc.rust-lang.org/std/macro.assert_eq.html",children:(0,s.jsx)(t.code,{children:"assert_eq!"})})," macro. Similar macros like ",(0,s.jsx)(t.a,{href:"https://doc.rust-lang.org/std/macro.assert.html",children:(0,s.jsx)(t.code,{children:"assert!"})})," and ",(0,s.jsx)(t.a,{href:"https://doc.rust-lang.org/std/macro.assert_ne.html",children:(0,s.jsx)(t.code,{children:"assert_ne!"})})," are commonly used in Rust. These are great to use in unit tests. However, these will add unnecessary overhead when added to contract logic, and it's recommended to use the ",(0,s.jsxs)(t.a,{href:"https://docs.rs/near-sdk/4.0.0-pre.2/near_sdk/macro.require.html",children:[(0,s.jsx)(t.code,{children:"require!"})," macro"]}),". See more information on this and ",(0,s.jsx)(t.a,{href:"/sdk/rust/contract-size",children:"other efficiency tips here"}),"."]})}),"\n",(0,s.jsx)(t.p,{children:"Again, we can run all the unit tests with:"}),"\n",(0,s.jsx)(t.p,{children:"cargo test -- --nocapture"}),"\n",(0,s.jsxs)(t.admonition,{title:"Run only one test",type:"tip",children:[(0,s.jsx)(t.p,{children:"To only run this latest test, use the command:"}),(0,s.jsx)(t.p,{children:"cargo test check_guess_solution -- --nocapture"})]}),"\n",(0,s.jsxs)(t.h2,{id:"modifying-set_solution",children:["Modifying ",(0,s.jsx)(t.code,{children:"set_solution"})]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.a,{href:"/tutorials/crosswords/basics/overview",children:"overview section"})," of this chapter tells us we want to have a single crossword puzzle and the user solving the puzzle should not be able to know the solution. Using a hash addresses this, and we can keep ",(0,s.jsx)(t.code,{children:"crossword_solution"}),"'s field type, as ",(0,s.jsx)(t.code,{children:"String"})," will work just fine. The overview also indicates we only want the author of the crossword puzzle to be able to set the solution. As it stands, our function ",(0,s.jsx)(t.code,{children:"set_solution"})," can be called by anyone with a full-access key. It's trivial for someone to create a NEAR account and call this function, changing the solution. Let's fix that."]}),"\n",(0,s.jsx)(t.p,{children:"Let's have the solution be set once, right after deploying the smart contract."}),"\n",(0,s.jsxs)(t.p,{children:["Here we'll use the ",(0,s.jsxs)(t.a,{href:"https://docs.rs/near-sdk/latest/near_sdk/attr.near_bindgen.html",children:[(0,s.jsx)(t.code,{children:"#[near_bindgen]"})," macro"]})," on a function called ",(0,s.jsx)(t.code,{children:"new"}),", which is a common pattern."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near-examples/crossword-tutorial-chapter-1/blob/94f42e75cf70ed2aafb9c29a1faa1e21f079a49e/contract/src/lib.rs#L10-L17\n"})}),"\n",(0,s.jsx)(t.p,{children:"Let's call this method on a fresh contract."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'# Build (for Windows it\'s build.bat)\n./build.sh\n\n# Create fresh account if you wish, which is good practice\nnear delete crossword.friend.testnet friend.testnet\nnear create-account crossword.friend.testnet --masterAccount friend.testnet\n\n# Deploy\nnear deploy crossword.friend.testnet --wasmFile res/my_crossword.wasm\n\n# Call the "new" method\nnear call crossword.friend.testnet new \'{"solution": "69c2feb084439956193f4c21936025f14a5a5a78979d67ae34762e18a7206a0f"}\' --accountId crossword.friend.testnet\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Now the crossword solution, as a hash, is stored instead. If you try calling the last command again, you'll get the error message, thanks to the ",(0,s.jsx)(t.code,{children:"#[init]"})," macro:\n",(0,s.jsx)(t.code,{children:"The contract has already been initialized"})]}),"\n",(0,s.jsx)(t.h2,{id:"first-use-of-batch-actions",children:"First use of Batch Actions"}),"\n",(0,s.jsxs)(t.p,{children:["This is close to what we want, but what if a person deploys their smart contract and ",(0,s.jsx)(t.strong,{children:"someone else"})," quickly calls the ",(0,s.jsx)(t.code,{children:"new"})," function before them? We want to make sure the same person who deployed the contract sets the solution, and we can do this using Batch Actions. Besides, why send two transactions when we can do it in one? (Technical details covered in the spec for a ",(0,s.jsx)(t.a,{href:"https://nomicon.io/RuntimeSpec/Transactions.html?highlight=batch#batched-transaction",children:"batch transaction here"}),".)"]}),"\n",(0,s.jsxs)("figure",{children:[(0,s.jsx)("img",{src:a,alt:"Cookie sheet representing a transaction, where cookies are Deploy and FunctionCall Actions. Art created by dobulyo.near."}),(0,s.jsxs)("figcaption",{className:"full-width",children:["Art by ",(0,s.jsx)("a",{href:"https://twitter.com/w_artsu",target:"_blank",children:"dobulyo.near"})]})]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(t.admonition,{title:"Batch Actions in use",type:"info",children:[(0,s.jsx)(t.p,{children:"Batch Actions are common in this instance, where we want to deploy and call an initialization function. They're also common when using a factory pattern, where a subaccount is created, a smart contract is deployed to it, a key is added, and a function is called."}),(0,s.jsx)(t.p,{children:"Here's a truncated snippet from a useful (though somewhat advanced) repository with a wealth of useful code:"}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near/core-contracts/blob/1720c0cfee238974ebeae8ad43076abeb951504f/staking-pool-factory/src/lib.rs#L172-L177\n"})}),(0,s.jsxs)(t.p,{children:["We'll get into Actions later in this tutorial, but in the meantime here's a handy ",(0,s.jsx)(t.a,{href:"https://nomicon.io/RuntimeSpec/Actions.html",children:"reference from the spec"}),"."]})]}),"\n",(0,s.jsxs)(t.p,{children:["As you can from the info bubble above, we can batch ",(0,s.jsx)(t.a,{href:"https://docs.rs/near-sdk/3.1.0/near_sdk/struct.Promise.html#method.deploy_contract",children:"Deploy"})," and ",(0,s.jsx)(t.a,{href:"https://docs.rs/near-sdk/3.1.0/near_sdk/struct.Promise.html#method.function_call",children:"FunctionCall"})," Actions. This is exactly what we want to do for our crossword puzzle, and luckily, NEAR CLI has a ",(0,s.jsx)(t.a,{href:"https://docs.near.org/tools/near-cli#near-deploy",children:"flag especially for this"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Let's run this again with the handy ",(0,s.jsx)(t.code,{children:"--initFunction"})," and ",(0,s.jsx)(t.code,{children:"--initArgs"})," flags:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"# Create fresh account if you wish, which is good practice\nnear delete crossword.friend.testnet friend.testnet\nnear create-account crossword.friend.testnet --masterAccount friend.testnet\n\n# Deploy\nnear deploy crossword.friend.testnet --wasmFile res/my_crossword.wasm \\\n  --initFunction 'new' \\\n  --initArgs '{\"solution\": \"69c2feb084439956193f4c21936025f14a5a5a78979d67ae34762e18a7206a0f\"}'\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Now that we're using Batch Actions, no one can call this ",(0,s.jsx)(t.code,{children:"new"})," method before us."]}),"\n",(0,s.jsx)(t.admonition,{title:"Batch action failures",type:"note",children:(0,s.jsx)(t.p,{children:"If one Action in a set of Batch Actions fails, the entire transaction is reverted. This is good to note because sharded, proof-of-stake systems do not work like proof-of-work where a complex transaction with multiple cross-contract calls reverts if one call fails. With NEAR, cross-contract calls use callbacks to ensure expected behavior, but we'll get to that later."})}),"\n",(0,s.jsx)(t.h2,{id:"get-ready-for-our-frontend",children:"Get ready for our frontend"}),"\n",(0,s.jsxs)(t.p,{children:["In the previous section we showed that we could use a ",(0,s.jsx)(t.code,{children:"curl"})," command to view the state of the contract without explicitly having a function that returns a value from state. Now that we've demonstrated that and hashed the solution, let's add a short view-only function ",(0,s.jsx)(t.code,{children:"get_solution"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["In the next section we'll add a simple frontend for our single, hardcoded crossword puzzle. We'll want to easily call a function to get the final solution hash. We can use this opportunity to remove the function ",(0,s.jsx)(t.code,{children:"get_puzzle_number"})," and the constant it returns, as these were use for informative purposes."]}),"\n",(0,s.jsxs)(t.p,{children:["We'll also modify our ",(0,s.jsx)(t.code,{children:"guess_solution"})," to return a boolean value, which will also make things easier for our frontend."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near-examples/crossword-tutorial-chapter-1/blob/94f42e75cf70ed2aafb9c29a1faa1e21f079a49e/contract/src/lib.rs#L19-L34\n"})}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"get_solution"})," method can be called with:"]}),"\n",(0,s.jsx)(t.p,{children:"near view crossword.friend.testnet get_solution"}),"\n",(0,s.jsx)(t.p,{children:"In the next section we'll add a simple frontend. Following chapters will illustrate more NEAR concepts built on top of this idea."})]})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},73574:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/kapun-hashing-8cb9a188869ce23ea8a6e0c0f9288c3c.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>o});var s=n(67294);const i={},a=s.createContext(i);function o(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);