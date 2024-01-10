"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8267],{92206:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>h,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var n=s(85893),i=s(11151);const o=s.p+"assets/images/puzzle-frontrun-db0d8c3025880af973d7d609016c1c20.png",a=s.p+"assets/images/safe-with-access-key--soulless.near--ZeroSerotonin__-af26c6ef39073c0cdfee357ed9c9c682.png",r={sidebar_position:2,sidebar_label:"Solution as seed phrase",title:"Replacing the solution hash with an access key"},l="Replacing our solution hash",c={id:"tutorials/crosswords/intermediate/access-key-solution",title:"Replacing the solution hash with an access key",description:"So far in this tutorial, the user sends the plaintext solution to the crossword puzzle smart contract, where it's hashed and compared with the known answer.",source:"@site/../docs/3.tutorials/crosswords/03-intermediate/01-access-key-solution.md",sourceDirName:"3.tutorials/crosswords/03-intermediate",slug:"/tutorials/crosswords/intermediate/access-key-solution",permalink:"/ko/tutorials/crosswords/intermediate/access-key-solution",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/crosswords/03-intermediate/01-access-key-solution.md",tags:[],version:"current",lastUpdatedBy:"Dami\xe1n Parrino",lastUpdatedAt:1660048663,formattedLastUpdatedAt:"2022\ub144 8\uc6d4 9\uc77c",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Solution as seed phrase",title:"Replacing the solution hash with an access key"},sidebar:"contracts",previous:{title:"Overview",permalink:"/ko/tutorials/crosswords/intermediate/overview"},next:{title:"Seed phrase logic",permalink:"/ko/tutorials/crosswords/intermediate/use-seed-phrase"}},h={},d=[{value:"Why?",id:"why",level:2},{value:"How?",id:"how",level:2},{value:"Onboarding",id:"onboarding",level:2}];function u(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"replacing-our-solution-hash",children:"Replacing our solution hash"}),"\n",(0,n.jsx)(t.p,{children:"So far in this tutorial, the user sends the plaintext solution to the crossword puzzle smart contract, where it's hashed and compared with the known answer."}),"\n",(0,n.jsx)(t.p,{children:"This works, but we might want to be more careful and avoid sending the plaintext solution."}),"\n",(0,n.jsx)(t.h2,{id:"why",children:"Why?"}),"\n",(0,n.jsx)(t.p,{children:"Blockchains rely on many computers processing transactions. When you send a transaction to the blockchain, it doesn't immediately get processed. In some Layer 1 blockchains it can take minutes or longer. On NEAR transactions settle within a couple seconds, but nonetheless there's a small period of waiting time."}),"\n",(0,n.jsxs)(t.p,{children:["When we previously sent the crossword puzzle solution in plain text (via the parameter ",(0,n.jsx)(t.code,{children:"solution"})," to ",(0,n.jsx)(t.code,{children:"submit_solution"}),") it means it's visible to everyone before it gets processed."]}),"\n",(0,n.jsx)(t.p,{children:"At the time of this writing, there haven't been outstanding incidents of validators \"front-running\" transactions, but it's something to be aware of. Front-running is when a validator sees a transaction that might be profitable and does it themselves."}),"\n",(0,n.jsx)(t.p,{children:"There have been several incidents of this and it continues to be an issue."}),"\n",(0,n.jsxs)("figure",{children:[(0,n.jsx)("img",{src:o,alt:"Tweet talking about a puzzle where tens of thousands of dollars were taken because of a frontrun attack",width:"600"}),(0,n.jsxs)("figcaption",{children:["Real-life example of a puzzle being front-run.",(0,n.jsx)("br",{}),"Read ",(0,n.jsx)("a",{href:"https://twitter.com/_anishagnihotri/status/1444113372715356162",target:"_blank",children:"Anish Agnihotri's thread"})]})]}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(t.h2,{id:"how",children:"How?"}),"\n",(0,n.jsx)(t.p,{children:"We're doing to do something unique \u2014 and frankly unusual \u2014 with our crossword puzzle. We're going to use function-call access keys in a new way."}),"\n",(0,n.jsx)(t.p,{children:"Our crossword puzzle smart contract will add a function-call access key to itself. The private key is derived from the solution, used as a seed phrase."}),"\n",(0,n.jsxs)(t.admonition,{title:"What's a seed phrase, again?",type:"info",children:[(0,n.jsx)(t.p,{children:"A private key is essentially a very large number. So large that the number of possible private keys is approaching the estimated number of atoms in the known universe."}),(0,n.jsx)(t.p,{children:"It would be pretty long if we wrote it down, so it's often made human-readable with numbers and letters. However, even the human-readable version is hard to memorize and prone to mistakes."}),(0,n.jsxs)(t.p,{children:["A seed phrase is a series of words (usually 12 or 24 words) that create a private key. (There's actually a ",(0,n.jsx)(t.a,{href:"https://learnmeabitcoin.com/technical/mnemonic",children:"bit more to it"}),".)"]}),(0,n.jsxs)(t.p,{children:["Seed phrases typically use a ",(0,n.jsx)(t.a,{href:"https://github.com/bitcoin/bips/blob/master/bip-0039/bip-0039-wordlists.md",children:"BIP-30 wordlist"}),", but ",(0,n.jsx)(t.em,{children:"they do not need to"})," use a wordlist or have a certain number of words. As long as the words create entropy, a crossword puzzle solution can act as a deterministic seed phrase."]})]}),"\n",(0,n.jsxs)(t.p,{children:["So when we add a new puzzle, we'll use the ",(0,n.jsx)(t.code,{children:"AddKey"})," Action to add a limited, function-call access key can that ",(0,n.jsx)(t.em,{children:"only"})," call the ",(0,n.jsx)(t.code,{children:"submit_solution"})," method."]}),"\n",(0,n.jsx)(t.p,{children:'The first user to solve the puzzle will essentially "discover" the private key and call that method. Think of it like a safe that contains a function-call access key.'}),"\n",(0,n.jsxs)("figure",{children:[(0,n.jsx)("img",{src:a,alt:"A small safe with a padlock containing words to a seed phrase, and you can see through the safe, showing it holds a function-call access key. Art created by soulless.near."}),(0,n.jsxs)("figcaption",{className:"full-width",children:["Open the safe using answers to the puzzle, revealing the function-call access key.",(0,n.jsx)("br",{}),"Art by ",(0,n.jsx)("a",{href:"https://twitter.com/ZeroSerotonin__",target:"_blank",children:"soulless.near"})]})]}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsxs)(t.p,{children:["Our method ",(0,n.jsx)(t.code,{children:"submit_solution"})," no longer needs to hash the plaintext answer, but instead looks at the key that signed this transaction. Cool, huh!"]}),"\n",(0,n.jsx)(t.h2,{id:"onboarding",children:"Onboarding"}),"\n",(0,n.jsx)(t.p,{children:"In the previous chapter we implemented login to the crossword, but this requires a person to have a NEAR account."}),"\n",(0,n.jsx)(t.p,{children:"If the end user is discovering a key that exists on the crossword contract, they don't even need a NEAR account, right? Well, that's partly accurate, but we'll still need to send the prize in NEAR somewhere."}),"\n",(0,n.jsx)(t.p,{children:"What if we could make the winner an account on the fly? Is that possible? Yes, and that's what we're going to do in this chapter."})]})}function p(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>r,a:()=>a});var n=s(67294);const i={},o=n.createContext(i);function a(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);