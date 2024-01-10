"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1840],{10561:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var t=a(85893),s=a(11151);const i={id:"contract",title:"SocialDB",sidebar_label:"SocialDB"},o=void 0,c={id:"social/contract",title:"SocialDB",description:"SocialDB is a smart contract to store social data on NEAR protocol.",source:"@site/../docs/social/contract.md",sourceDirName:"social",slug:"/social/contract",permalink:"/social/contract",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/social/contract.md",tags:[],version:"current",lastUpdatedBy:"gagdiez",lastUpdatedAt:1702155614,formattedLastUpdatedAt:"Dec 9, 2023",frontMatter:{id:"contract",title:"SocialDB",sidebar_label:"SocialDB"}},r={},l=[{value:"Get API",id:"get-api",level:3},{value:"Reading a profile of account <code>self.social.near</code>",id:"reading-a-profile-of-account-selfsocialnear",level:5},{value:"Reading names of all account with profiles",id:"reading-names-of-all-account-with-profiles",level:5},{value:"Keys API",id:"keys-api",level:3},{value:"Getting a list of components of accounts <code>root.near</code>",id:"getting-a-list-of-components-of-accounts-rootnear",level:5},{value:"Getting a list of accounts that have components",id:"getting-a-list-of-accounts-that-have-components",level:5}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h3:"h3",h5:"h5",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"SocialDB is a smart contract to store social data on NEAR protocol."}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Source code: ",(0,t.jsx)(n.a,{href:"https://github.com/NearSocial/social-db",children:"https://github.com/NearSocial/social-db"})]}),"\n",(0,t.jsxs)(n.li,{children:["API: ",(0,t.jsx)(n.a,{href:"https://github.com/NearSocial/social-db#api",children:"https://github.com/NearSocial/social-db#api"})]}),"\n",(0,t.jsxs)(n.li,{children:["Testnet account ID: ",(0,t.jsx)(n.a,{href:"https://explorer.testnet.near.org/accounts/v1.social08.testnet",children:(0,t.jsx)(n.code,{children:"v1.social08.testnet"})})]}),"\n",(0,t.jsxs)(n.li,{children:["Mainnet account ID: ",(0,t.jsx)(n.a,{href:"https://nearblocks.io/address/social.near",children:(0,t.jsx)(n.code,{children:"social.near"})})]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"get-api",children:"Get API"}),"\n",(0,t.jsx)(n.p,{children:"Takes a list of keys and returns a joined JSON object with the matched data."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"pub fn get(self, keys: Vec<String>) -> Value;\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"keys"})," - an array of key patterns to return."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Returns the aggregated JSON object."}),"\n",(0,t.jsxs)(n.h5,{id:"reading-a-profile-of-account-selfsocialnear",children:["Reading a profile of account ",(0,t.jsx)(n.code,{children:"self.social.near"})]}),"\n",(0,t.jsxs)(n.p,{children:["To read all fields recursively for a given path add ",(0,t.jsx)(n.code,{children:"**"})," suffix."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'env NEAR_ENV=mainnet near view social.near get \'{"keys":["self.social.near/profile/**"]}\'\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "self.social.near": {\n    "profile": {\n      "name": "Near Social",\n      "image": {\n        "ipfs_cid": "bafkreiej5new6k7bzlaaapuc7fgjlwaoqqw2qgzvilbmdankmfxw7siw6q"\n      },\n      "linktree": {\n        "twitter": "NearSocial_",\n        "github": "NearSocial",\n        "telegram": "NearSocial",\n        "website": "near.social"\n      }\n    }\n  }\n}\n'})}),"\n",(0,t.jsx)(n.h5,{id:"reading-names-of-all-account-with-profiles",children:"Reading names of all account with profiles"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Note that this query iterates over all accounts and will not fit into the available view call gas in the future."})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'env NEAR_ENV=mainnet near view social.near get \'{"keys":["*/profile/name"]}\'\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "mob.near": {\n    "profile": {\n      "name": "Eugene The Dream"\n    }\n  },\n  "nearcondemo.near": {\n    "profile": {\n      "name": "Very Berry Demo Acc"\n    }\n  },\n  "zavodil.near": {\n    "profile": {\n      "name": "Vadim"\n    }\n  },\n\n  ................................\n  \n  "kuzu.near": {\n    "profile": {\n      "name": "Joinairdrops"\n    }\n  },\n  "goldich.near": {\n    "profile": {\n      "name": "MAG"\n    }\n  }\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"keys-api",children:"Keys API"}),"\n",(0,t.jsx)(n.p,{children:"Takes a list of keys and returns a joined JSON object with the keys matched the query."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"pub fn keys(self, keys: Vec<String>) -> Value;\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"keys"})," - an array of key patterns to return."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Returns the aggregated JSON object."}),"\n",(0,t.jsxs)(n.h5,{id:"getting-a-list-of-components-of-accounts-rootnear",children:["Getting a list of components of accounts ",(0,t.jsx)(n.code,{children:"root.near"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'env NEAR_ENV=mainnet near view social.near keys \'{"keys":["root.near/widget/*"]}\'\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "root.near": {\n    "widget": {\n      "AllProfilesWithGithub": true,\n      "Egg": true,\n      "TotalAccountsCount": true\n    }\n  }\n}\n'})}),"\n",(0,t.jsx)(n.h5,{id:"getting-a-list-of-accounts-that-have-components",children:"Getting a list of accounts that have components"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'env NEAR_ENV=mainnet near view social.near keys \'{"keys":["*/widget"]}\'\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Note that this query iterates over all accounts and will not fit into the available view call gas in the future."})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "mob.near": {\n    "widget": true\n  },\n  "nearcondemo.near": {\n    "widget": true\n  },\n  "zavodil.near": {\n    "widget": true\n  },\n  \n  ................................\n  \n  "elektromania.near": {\n    "widget": true\n  },\n  "kn00t.near": {\n    "widget": true\n  }\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,n,a)=>{a.d(n,{Z:()=>c,a:()=>o});var t=a(67294);const s={},i=t.createContext(s);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);