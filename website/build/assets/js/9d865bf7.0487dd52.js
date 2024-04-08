"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[56129],{88027:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var o=t(85893),s=t(11151);const r={},a=void 0,i={id:"primitives/dex/bos/get-pools",title:"get-pools",description:"Example response",source:"@site/../docs/7.primitives/dex/bos/get-pools.md",sourceDirName:"7.primitives/dex/bos",slug:"/primitives/dex/bos/get-pools",permalink:"/primitives/dex/bos/get-pools",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/7.primitives/dex/bos/get-pools.md",tags:[],version:"current",lastUpdatedBy:"garikbesson",lastUpdatedAt:1706635251e3,frontMatter:{}},c={},d=[];function p(e){const n={code:"code",pre:"pre",...(0,s.a)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const ammContract = "v2.ref-finance.near";\nconst result = Near.view(\n  ammContract,\n  "get_pools",\n  {\n    from_index: 0,\n    limit: 1000\n  }\n);\n'})}),"\n",(0,o.jsxs)(t,{children:[(0,o.jsx)("summary",{children:"Example response"}),(0,o.jsx)("p",{children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"[\n  {\n    pool_kind: 'SIMPLE_POOL',\n    token_account_ids: [ 'token.skyward.near', 'wrap.near' ],\n    amounts: [ '51865812079751349630100', '6254162663147994789053210138' ],\n    total_fee: 30,\n    shares_total_supply: '1305338644973934698612124055',\n    amp: 0\n  },\n  {\n    pool_kind: 'SIMPLE_POOL',\n    token_account_ids: [\n      'c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2.factory.bridge.near',\n      'wrap.near'\n    ],\n    amounts: [ '783621938569399817', '1100232280852443291118200599' ],\n    total_fee: 30,\n    shares_total_supply: '33923015415693335344747628',\n    amp: 0\n  }\n]\n"})})})]})]})}function l(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>a});var o=t(67294);const s={},r=o.createContext(s);function a(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);