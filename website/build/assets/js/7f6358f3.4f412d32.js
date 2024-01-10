"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6181],{84291:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var n=r(85893),a=r(11151),i=r(74866),l=r(85162);const o={id:"clipboard",title:"Clipboard"},s=void 0,u={id:"bos/api/clipboard",title:"Clipboard",description:"The VM implements a clipboard API that works like Mozilla's Clipboard, providing write access to the contents of the system clipboard. The Clipboard API can be used to implement cut, copy, and paste features within a web application.",source:"@site/../docs/bos/api/clipboard.md",sourceDirName:"bos/api",slug:"/bos/api/clipboard",permalink:"/bos/api/clipboard",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/bos/api/clipboard.md",tags:[],version:"current",lastUpdatedBy:"gagdiez",lastUpdatedAt:1702155614,formattedLastUpdatedAt:"Dec 9, 2023",frontMatter:{id:"clipboard",title:"Clipboard"},sidebar:"integrate",previous:{title:"Cache",permalink:"/bos/api/cache"},next:{title:"\u2b50 Quickstart",permalink:"/bos/tutorial/quickstart"}},c={},d=[{value:"writeText",id:"writetext",level:2},{value:"Examples",id:"examples",level:3}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["The VM implements a clipboard API that works like ",(0,n.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/writeText",children:"Mozilla's Clipboard"}),", providing write access to the contents of the system clipboard. The Clipboard API can be used to implement cut, copy, and paste features within a web application."]}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["For extra safety, the VM has ",(0,n.jsx)(t.code,{children:"isTrusted"})," as part of the stack. This allows to verify if the action was part of the stack originating from the ",(0,n.jsx)(t.code,{children:"isTrusted"})," user's event."]})}),"\n",(0,n.jsx)(t.h2,{id:"writetext",children:"writeText"}),"\n",(0,n.jsxs)(t.p,{children:["The Clipboard interface's ",(0,n.jsx)(t.code,{children:"writeText()"})," copies the specified text string to the system clipboard."]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"The event requires for the page to be in transient state (explicit user's click)."})}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"param"}),(0,n.jsx)(t.th,{children:"required"}),(0,n.jsx)(t.th,{children:"type"}),(0,n.jsx)(t.th,{children:"description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"text"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"required"})}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"data to be copied to the clipboard."})]})})]}),"\n",(0,n.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,n.jsxs)(i.Z,{children:[(0,n.jsx)(l.Z,{value:"request",label:"Request",default:!0,children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:'return (\n  <div>\n    <div>\n      <button\n        onClick={() => {\n          clipboard.writeText("HelloWorld!");\n        }}\n      >\n        Copy "HelloWorld!" to clipboard\n      </button>\n    </div>\n    <textarea className="form-control mt-2" placeholder="Test pasting here" />\n  </div>\n);\n'})})}),(0,n.jsx)(l.Z,{value:"response",label:"Response",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'// Copy "HelloWorld!" to clipboard\n'})})})]})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},85162:(e,t,r)=>{r.d(t,{Z:()=>l});r(67294);var n=r(36905);const a={tabItem:"tabItem_Ymn6"};var i=r(85893);function l(e){var t=e.children,r=e.hidden,l=e.className;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.Z)(a.tabItem,l),hidden:r,children:t})}},74866:(e,t,r)=>{r.d(t,{Z:()=>w});var n=r(67294),a=r(36905),i=r(12466),l=r(16550),o=r(20469),s=r(91980),u=r(67392),c=r(50012);function d(e){var t,r;return null!=(t=null==(r=n.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,n.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?t:[]}function p(e){var t=e.values,r=e.children;return(0,n.useMemo)((function(){var e=null!=t?t:function(e){return d(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(r);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,r])}function h(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function b(e){var t=e.queryString,r=void 0!==t&&t,a=e.groupId,i=(0,l.k6)(),o=function(e){var t=e.queryString,r=void 0!==t&&t,n=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:r,groupId:a});return[(0,s._X)(o),(0,n.useCallback)((function(e){if(o){var t=new URLSearchParams(i.location.search);t.set(o,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[o,i])]}function f(e){var t,r,a,i,l=e.defaultValue,s=e.queryString,u=void 0!==s&&s,d=e.groupId,f=p(e),v=(0,n.useState)((function(){return function(e){var t,r=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!h({value:r,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var a=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:l,tabValues:f})})),m=v[0],x=v[1],g=b({queryString:u,groupId:d}),j=g[0],y=g[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),r=(0,c.Nk)(t),a=r[0],i=r[1],[a,(0,n.useCallback)((function(e){t&&i.set(e)}),[t,i])]),k=w[0],T=w[1],C=function(){var e=null!=j?j:k;return h({value:e,tabValues:f})?e:null}();return(0,o.Z)((function(){C&&x(C)}),[C]),{selectedValue:m,selectValue:(0,n.useCallback)((function(e){if(!h({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);x(e),y(e),T(e)}),[y,T,f]),tabValues:f}}var v=r(72389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=r(85893);function g(e){var t=e.className,r=e.block,n=e.selectedValue,l=e.selectValue,o=e.tabValues,s=[],u=(0,i.o5)().blockElementScrollPositionUntilNextRender,c=function(e){var t=e.currentTarget,r=s.indexOf(t),a=o[r].value;a!==n&&(u(t),l(a))},d=function(e){var t,r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var n,a=s.indexOf(e.currentTarget)+1;r=null!=(n=s[a])?n:s[0];break;case"ArrowLeft":var i,l=s.indexOf(e.currentTarget)-1;r=null!=(i=s[l])?i:s[s.length-1]}null==(t=r)||t.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},t),children:o.map((function(e){var t=e.value,r=e.label,i=e.attributes;return(0,x.jsx)("li",Object.assign({role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:function(e){return s.push(e)},onKeyDown:d,onClick:c},i,{className:(0,a.Z)("tabs__item",m.tabItem,null==i?void 0:i.className,{"tabs__item--active":n===t}),children:null!=r?r:t}),t)}))})}function j(e){var t=e.lazy,r=e.children,a=e.selectedValue,i=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){var l=i.find((function(e){return e.props.value===a}));return l?(0,n.cloneElement)(l,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:i.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})}))})}function y(e){var t=f(e);return(0,x.jsxs)("div",{className:(0,a.Z)("tabs-container",m.tabList),children:[(0,x.jsx)(g,Object.assign({},e,t)),(0,x.jsx)(j,Object.assign({},e,t))]})}function w(e){var t=(0,v.Z)();return(0,x.jsx)(y,Object.assign({},e,{children:d(e.children)}),String(t))}},11151:(e,t,r)=>{r.d(t,{Z:()=>o,a:()=>l});var n=r(67294);const a={},i=n.createContext(a);function l(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);