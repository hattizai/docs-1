"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6707],{34549:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>d,default:()=>g,frontMatter:()=>l,metadata:()=>h,toc:()=>p});var s=t(85893),r=t(11151);const i=t.p+"assets/images/crossword-actions-c5a7a08bac9abd41fa5fae029ce8aba4.png",o=t.p+"assets/images/transfer-brand-blue--qiqi04.near--blankworl-ae01b13e0567a25c47605ab4b0e72a94.png",c=t.p+"assets/images/yoctoNEAR-magnifying--jrbemint.near--JrbeMad-7664563cd1b1c33c5068ec24d30bb29a.jpg",a=t.p+"assets/images/predecessor-signer-current--yasuoarts.near--YasuoArt69-2c9b701d045112f7acb6214adb861da0.png",l={sidebar_position:4,sidebar_label:"Actions and sending NEAR",title:"There are several Actions an account can do, including sending the winner of the crossword puzzle NEAR using the Transfer Action"},d="Actions (including sending NEAR)",h={id:"tutorials/crosswords/beginner/actions",title:"There are several Actions an account can do, including sending the winner of the crossword puzzle NEAR using the Transfer Action",description:"We're going to introduce a new Action: Transfer. In this chapter, we'd like the first person to solve the crossword puzzle to earn some prize money, sent in NEAR.",source:"@site/../docs/3.tutorials/crosswords/02-beginner/03-actions.md",sourceDirName:"3.tutorials/crosswords/02-beginner",slug:"/tutorials/crosswords/beginner/actions",permalink:"/tutorials/crosswords/beginner/actions",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/crosswords/02-beginner/03-actions.md",tags:[],version:"current",lastUpdatedBy:"Dami\xe1n Parrino",lastUpdatedAt:1661444350,formattedLastUpdatedAt:"Aug 25, 2022",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Actions and sending NEAR",title:"There are several Actions an account can do, including sending the winner of the crossword puzzle NEAR using the Transfer Action"},sidebar:"contracts",previous:{title:"Using structs and enums",permalink:"/tutorials/crosswords/beginner/structs-enums"},next:{title:"Add a puzzle",permalink:"/tutorials/crosswords/beginner/adding-a-puzzle"}},u={},p=[{value:"Actions from within a contract",id:"actions-from-within-a-contract",level:2},{value:"Define the prize amount",id:"define-the-prize-amount",level:2},{value:"Adding <code>Transfer</code>",id:"adding-transfer",level:2},{value:"Predecessor, signer, and current account",id:"predecessor-signer-and-current-account",level:2}];function m(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"actions-including-sending-near",children:"Actions (including sending NEAR)"}),"\n",(0,s.jsxs)(n.p,{children:["We're going to introduce a new Action: ",(0,s.jsx)(n.code,{children:"Transfer"}),". In this chapter, we'd like the first person to solve the crossword puzzle to earn some prize money, sent in NEAR."]}),"\n",(0,s.jsxs)("figure",{children:[(0,s.jsx)("img",{src:o,alt:"Two hands exchanging a coin emblazoned with the NEAR Protocol logo. Art created by qiqi04.near",width:"400"}),(0,s.jsxs)("figcaption",{class:"small",children:["Art by ",(0,s.jsx)("a",{href:"https://twitter.com/blankworl",target:"_blank",children:"qiqi04.near"})]})]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(n.p,{children:["We've already used Actions in the ",(0,s.jsx)(n.a,{href:"/tutorials/crosswords/basics/hashing-and-unit-tests#using-batch-actions",children:"previous chapter"}),", when we deployed and initialized the contract, which used the ",(0,s.jsx)(n.code,{children:"DeployContract"})," and ",(0,s.jsx)(n.code,{children:"FunctionCall"})," Action, respectively."]}),"\n",(0,s.jsxs)(n.p,{children:["The full list of Actions are available at the ",(0,s.jsx)(n.a,{href:"https://nomicon.io/RuntimeSpec/Actions.html",children:"NEAR specification site"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"By the end of this entire tutorial we'll have used all the Actions highlighted below:"}),"\n",(0,s.jsx)("img",{src:i,alt:"All Actions that will be used when the entire crossword puzzle tutorial is complete",width:"600"}),"\n",(0,s.jsx)(n.h2,{id:"actions-from-within-a-contract",children:"Actions from within a contract"}),"\n",(0,s.jsx)(n.p,{children:"When we deployed and initialized the contract, we used NEAR CLI in our Terminal or Command Prompt app. At a high level, this might feel like we're lobbing a transaction into the blockchain, instructing it to do a couple actions."}),"\n",(0,s.jsxs)(n.p,{children:["It's important to note that you can also execute Actions inside a smart contract, which is what we'll be doing. In the sidebar on the left, you'll see a section called ",(0,s.jsx)(n.a,{href:"/sdk/rust/promises/intro",children:(0,s.jsx)(n.strong,{children:"Promises"})}),", which provides examples of this. Perhaps it's worth mentioning that for the Rust SDK, Promises and Actions are somewhat synonymous."]}),"\n",(0,s.jsxs)(n.admonition,{title:"Actions only effect the current contract",type:"note",children:[(0,s.jsxs)(n.p,{children:["A contract cannot use the ",(0,s.jsx)(n.code,{children:"AddKey"})," Action on another account, including the account that just called it. It can only add a key to ",(0,s.jsx)(n.em,{children:"itself"}),", if that makes sense."]}),(0,s.jsx)(n.p,{children:"The same idea applies for the other actions as well. You cannot deploy a contract to someone else's account, or delete a different account. (Thankfully \ud83d\ude05)"}),(0,s.jsxs)(n.p,{children:["Similarly, when we use the ",(0,s.jsx)(n.code,{children:"Transfer"})," Action to send the crossword puzzle winner their prize, the amount is being subtracted from the account balance of the account where the crossword contract is deployed."]}),(0,s.jsxs)(n.p,{children:["The only interesting wrinkle (and what may ",(0,s.jsx)(n.em,{children:"seem like"})," an exception) is when a subaccount is created using the ",(0,s.jsx)(n.code,{children:"CreateAccount"})," Action. During that transaction, you may use Batch Actions to do several things like deploy a contract, transfer NEAR, add a key, call a function, etc. This is common in smart contracts that use a factory pattern, and we'll get to this in future chapters of this tutorial."]})]}),"\n",(0,s.jsx)(n.h2,{id:"define-the-prize-amount",children:"Define the prize amount"}),"\n",(0,s.jsx)(n.p,{children:"Let's make it simple and hardcode the prize amount. This is how much NEAR will be given to the first person who solves the crossword puzzle, and will apply to all the crossword puzzles we add. We'll make this amount adjustable in future chapters."}),"\n",(0,s.jsxs)(n.p,{children:["At the top of the ",(0,s.jsx)(n.code,{children:"lib.rs"})," file we'll add this constant:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near-examples/crossword-tutorial-chapter-2/blob/1909630a10291081cb00b2780c1ae8889d98f620/contract/src/lib.rs#L10-L11\n"})}),"\n",(0,s.jsx)(n.p,{children:"As the code comment mentions, this is 5 NEAR, but look at all those zeroes in the code!"}),"\n",(0,s.jsx)(n.p,{children:"That's the value in yoctoNEAR. This concept is similar to other blockchains. Bitcoin's smallest unit is a satoshi and Ethereum's is a wei."}),"\n",(0,s.jsxs)("figure",{children:[(0,s.jsx)("img",{src:c,alt:"Depiction of bills of NEAR, coins for partial NEAR, and then a magnifying glass showing a tiny yoctoNEAR next to an ant. Art created by jrbemint.near"}),(0,s.jsxs)("figcaption",{class:"full-width",children:["Art by ",(0,s.jsx)("a",{href:"https://twitter.com/JrbeMad",target:"_blank",children:"jrbemint.near"})]})]}),"\n",(0,s.jsxs)(n.h2,{id:"adding-transfer",children:["Adding ",(0,s.jsx)(n.code,{children:"Transfer"})]}),"\n",(0,s.jsxs)(n.p,{children:["In the last chapter we had a simple function called ",(0,s.jsx)(n.code,{children:"guess_solution"})," that returned ",(0,s.jsx)(n.code,{children:"true"})," if the solution was correct, and ",(0,s.jsx)(n.code,{children:"false"})," otherwise. We'll be replacing that function with ",(0,s.jsx)(n.code,{children:"submit_solution"})," as shown below:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near-examples/crossword-tutorial-chapter-2/blob/83d4d8925e6d30e04e8e4cb5e9a0a6d3763fce40/contract/src/lib.rs#L92-L124\n"})}),"\n",(0,s.jsx)(n.p,{children:"Note the last line in this function, which sends NEAR to the predecessor."}),"\n",(0,s.jsxs)(n.admonition,{title:"Returning a Promise",type:"info",children:[(0,s.jsx)(n.p,{children:"The last line of the function above ends with a semicolon. If the semicolon were removed, that would tell Rust that we'd like to return this Promise object."}),(0,s.jsx)(n.p,{children:"It would be perfectly fine to write the function like this:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"pub fn submit_solution(&mut self, solution: String, memo: String) -> Promise {\n    // \u2026\n    // Transfer the prize money to the winner\n    Promise::new(env::predecessor_account_id()).transfer(PRIZE_AMOUNT)\n}\n"})})]}),"\n",(0,s.jsx)(n.h2,{id:"predecessor-signer-and-current-account",children:"Predecessor, signer, and current account"}),"\n",(0,s.jsxs)(n.p,{children:["When writing a smart contract you'll commonly want to use ",(0,s.jsx)(n.code,{children:"env"})," and the details it provides. We used this in the last chapter for:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["logging (ex: ",(0,s.jsx)(n.code,{children:'env::log_str("hello friend")'}),")"]}),"\n",(0,s.jsxs)(n.li,{children:["hashing using sha256 (ex: ",(0,s.jsx)(n.code,{children:"env::sha256(solution.as_bytes())"}),")"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["There are more functions detailed in the ",(0,s.jsx)(n.a,{href:"https://docs.rs/near-sdk/latest/near_sdk/env/index.html",children:"SDK reference docs"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Let's cover three commonly-used functions regarding accounts: predecessor, signer, and current account."}),"\n",(0,s.jsxs)("figure",{children:[(0,s.jsx)("img",{src:a,alt:"Illustration of Alice sending a transaction to a smart contract named Banana, which does a cross-contract call to the smart contract Cucumber. Art created by yasuoarts.near"}),(0,s.jsxs)("figcaption",{class:"full-width",children:["Alice sends a transaction to the contract on banana.near, which does a cross-contract call to cucumber.near.",(0,s.jsx)("br",{}),"From the perspective of a contract on cucumber.near, we see a list of the predecessor, signer, and current account.",(0,s.jsx)("br",{}),"Art by ",(0,s.jsx)("a",{href:"https://twitter.com/YasuoArt69",target:"_blank",children:"yasuoarts.near"})]})]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://docs.rs/near-sdk/latest/near_sdk/env/fn.predecessor_account_id.html",children:"predecessor account"})," \u2014 ",(0,s.jsx)(n.code,{children:"env::predecessor_account_id()"})]}),"\n",(0,s.jsxs)(n.p,{children:["This is the account that was the immediate caller to the smart contract. If this is a simple transaction (no cross-contract calls) from ",(0,s.jsx)(n.strong,{children:"alice.near"})," to ",(0,s.jsx)(n.strong,{children:"banana.near"}),", the smart contract at ",(0,s.jsx)(n.strong,{children:"banana.near"})," considers Alice the predecessor. In this case, Alice would ",(0,s.jsx)(n.em,{children:"also"})," be the signer."]}),"\n",(0,s.jsxs)(n.admonition,{title:"When in doubt, use predecessor",type:"tip",children:[(0,s.jsxs)(n.p,{children:["As we explore the differences between predecessor and signer, know that it's a more common ",(0,s.jsx)(n.strong,{children:"best practice to choose the predecessor"}),"."]}),(0,s.jsx)(n.p,{children:'Using the predecessor guards against a potentially malicious contract trying to "fool" another contract that only checks the signer.'})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://docs.rs/near-sdk/latest/near_sdk/env/fn.signer_account_id.html",children:"signer account"})," \u2014 ",(0,s.jsx)(n.code,{children:"env::signer_account_id()"})]}),"\n",(0,s.jsxs)(n.p,{children:["The signer is the account that originally ",(0,s.jsx)(n.em,{children:"signed"})," the transaction that began the blockchain activity, which may or may not include cross-contract calls. If a function calls results in several cross-contract calls, think of the signer as the account that pushed over the first domino in that chain reaction."]}),"\n",(0,s.jsxs)(n.admonition,{title:"Beware of middlemen",type:"caution",children:[(0,s.jsx)(n.p,{children:"If your smart contract is checking the ownership over some assets (fungible token, NFTs, etc.) it's probably a bad idea to use the signer account."}),(0,s.jsxs)(n.p,{children:["A confused or malicious contract might act as a middleman and cause unexpected behavior. If ",(0,s.jsx)(n.strong,{children:"alice.near"})," accidentally calls ",(0,s.jsx)(n.strong,{children:"evil.near"}),", the contract at that account might do a cross-contract call to ",(0,s.jsx)(n.strong,{children:"vulnerable-nft.near"}),", instructing it to transfer an NFT."]}),(0,s.jsxs)(n.p,{children:["If ",(0,s.jsx)(n.strong,{children:"vulnerable-nft.near"})," only checks the signer account to determine ownership of the NFT, it might unwittingly give away Alice's property. Checking the predecessor account eliminates this problem."]})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://docs.rs/near-sdk/latest/near_sdk/env/fn.current_account_id.html",children:"current account"})," \u2014 ",(0,s.jsx)(n.code,{children:"env::current_account_id()"})]}),"\n",(0,s.jsx)(n.p,{children:'The current account is "me" from the perspective of a smart contract.'}),"\n",(0,s.jsxs)(n.admonition,{title:"Why would I use that?",type:"tip",children:[(0,s.jsx)(n.p,{children:"There might be various reasons to use the current account, but a common use case is checking ownership or handling callbacks to cross-contract calls."}),(0,s.jsx)(n.p,{children:"Many smart contracts will want to implement some sort of permission system. A common, rudimentary permission allows certain functions to only be called by the contract owner, AKA the person who owns a private key to the account for this contract."}),(0,s.jsx)(n.p,{children:"The contract can check that the predecessor and current account are the same, and trust offer more permissions like changing contract settings, upgrading the contract, or other privileged modifications."})]}),"\n"]}),"\n"]})]})}function g(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>o});var s=t(67294);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);