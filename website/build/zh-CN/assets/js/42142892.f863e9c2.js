"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9622],{83175:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var a=n(85893),s=n(11151);const r={id:"fetch",title:"Fetch"},o=void 0,c={id:"bos/api/fetch",title:"Fetch",description:"fetch is a global function that allows to fetch data from the URL. It acts like a hook. It's a wrapper around the fetch function from the browser behind the caching layer. It's useful for fetching data from the external APIs. It has the similar API as the browser's fetch function, but instead of a promise it returns a value. If the data is not cached, it returns null and fetches the data in the background. If the data is cached, it returns the cached value and then revalidates it.",source:"@site/../docs/bos/api/fetch.md",sourceDirName:"bos/api",slug:"/bos/api/fetch",permalink:"/zh-CN/bos/api/fetch",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/bos/api/fetch.md",tags:[],version:"current",lastUpdatedBy:"gagdiez",lastUpdatedAt:1696018523,formattedLastUpdatedAt:"2023\u5e749\u670829\u65e5",frontMatter:{id:"fetch",title:"Fetch"},sidebar:"integrate",previous:{title:"Social Notifications",permalink:"/zh-CN/bos/api/notifications"},next:{title:"Storage",permalink:"/zh-CN/bos/api/storage"}},i={},l=[{value:"asyncFetch",id:"asyncfetch",level:2},{value:"Implementation Details",id:"implementation-details",level:3},{value:"Example Usage",id:"example-usage",level:3}];function d(e){const t={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"fetch"})," is a global function that allows to fetch data from the URL. It acts like a hook. It's a wrapper around the ",(0,a.jsx)(t.code,{children:"fetch"})," function from the browser behind the caching layer. It's useful for fetching data from the external APIs. It has the similar API as the browser's ",(0,a.jsx)(t.code,{children:"fetch"})," function, but instead of a promise it returns a value. If the data is not cached, it returns ",(0,a.jsx)(t.code,{children:"null"})," and fetches the data in the background. If the data is cached, it returns the cached value and then revalidates it."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'const res = fetch("https://rpc.mainnet.near.org/status");\n\nreturn res.body;\n'})}),"\n",(0,a.jsx)(t.h2,{id:"asyncfetch",children:"asyncFetch"}),"\n",(0,a.jsxs)(t.p,{children:["To access the version that returns a promise, you can use ",(0,a.jsx)(t.code,{children:"asyncFetch"}),". It doesn't cache the value, so it should only be used within a function to avoid frequent requests on every render."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'function reportUptime() {\n  asyncFetch("https://rpc.mainnet.near.org/status").then((res) => {\n    const uptime = res.body.uptime_sec;\n    Near.call("uptime.near", "reportUptime", { uptime });\n  });\n}\n\nreturn <button onClick={reportUptime}>Report Uptime</button>;\n'})}),"\n",(0,a.jsx)(t.h3,{id:"implementation-details",children:"Implementation Details"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",metastring:"reference",children:"https://github.com/NearSocial/VM/blob/f4d2cc8d0a27aee743d20dedb5f2a2f940530b18/src/lib/data/cache.js#L225-L264\n"})}),"\n",(0,a.jsx)(t.h3,{id:"example-usage",children:"Example Usage"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'const computeResults = (term) => {\n  console.log("computeResults:", term);\n  fetchAlgoliaData(term).then((res) => {\n    const data = getCategoryResults(res.body);\n    State.update({\n      term,\n      post: postWidgets(data["post"], "post"),\n      comment: postWidgets(data["comment, post"], "comment"),\n      profile: profileWidgets(data["profile"]),\n    });\n  });\n};\n\nconst fetchAlgoliaData = (queryURI) => {\n  let search_params = `query=${queryURI}`;\n  return asyncFetch(API_URL, {\n    body: `{ "params": "${search_params}" }`,\n    headers: {\n      "Content-Type": "application/x-www-form-urlencoded",\n      "X-Algolia-Api-Key": `${SEARCH_API_KEY}`,\n      "X-Algolia-Application-Id": `${APPLICATION_ID}`,\n    },\n    method: "POST",\n  });\n};\n'})})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>o});var a=n(67294);const s={},r=a.createContext(s);function o(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);