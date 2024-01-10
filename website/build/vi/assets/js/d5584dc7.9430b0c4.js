"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9015],{46605:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var n=o(85893),i=o(11151),s=o(42352);const r={id:"tooltip",title:"ToolTip Component",sidebar_label:"ToolTip"},a=void 0,l={id:"bos/components/tooltip",title:"ToolTip Component",description:"This special component displays a message once the mouse hovers over a particular DOM item. This component was imported into NEAR Social from React-Bootstrap and more info can be found here.",source:"@site/../docs/bos/components/tooltip.md",sourceDirName:"bos/components",slug:"/bos/components/tooltip",permalink:"/vi/bos/components/tooltip",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/bos/components/tooltip.md",tags:[],version:"current",lastUpdatedBy:"gagdiez",lastUpdatedAt:1702155614,formattedLastUpdatedAt:"9 thg 12, 2023",frontMatter:{id:"tooltip",title:"ToolTip Component",sidebar_label:"ToolTip"},sidebar:"integrate",previous:{title:"Styled",permalink:"/vi/bos/components/styled"},next:{title:"Introduction",permalink:"/vi/bos/api/home"}},c={},d=[{value:"Example",id:"example",level:3}];function p(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["This special component displays a message once the mouse hovers over a particular DOM item. This component was imported into NEAR Social from ",(0,n.jsx)(t.code,{children:"React-Bootstrap"})," and more info can be ",(0,n.jsx)(t.a,{href:"https://react-bootstrap.netlify.app/docs/components/overlays#tooltips",children:"found here"}),"."]}),"\n",(0,n.jsx)("hr",{class:"subsection"}),"\n",(0,n.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,n.jsxs)(t.p,{children:["The code has been adopted and modified from the ",(0,n.jsx)(t.code,{children:"react-bootstrap"})," documentation website. The snippet below demonstrates how to implement the message over a button and how to reposition it."]}),"\n",(0,n.jsx)(s.W,{id:"1",height:"120px",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:'return (\n  <>\n    {["top", "right", "bottom", "left"].map((placement) => (\n      <div style={{ margin: "2.5rem 1rem", float: "left" }}>\n        <OverlayTrigger\n          key={placement}\n          placement={placement}\n          overlay={\n            <Tooltip id={`tooltip-${placement}`}>\n              Tooltip on <strong>{placement}</strong>.\n            </Tooltip>\n          }\n        >\n          <button variant="secondary">Tooltip on {placement}</button>\n        </OverlayTrigger>\n      </div>\n    ))}\n  </>\n);\n'})})})]})}function m(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},42352:(e,t,o)=>{o.d(t,{W:()=>a});var n=o(67294),i=o(16729),s=o(91262),r=o(85893);function a(e){var t=e.children,a=e.id,l=void 0===a?1:a,c=e.height,d=void 0===c?"160px":c;return(0,r.jsx)(s.Z,{fallback:(0,r.jsx)("div",{children:" Loading... "}),children:function(){var e="";try{e=t.props.children.props.children}catch(g){}var s=o(58613),a=s.Widget,c=s.useInitNear,p=o(2302).ZP,m=(0,n.useState)(e),h=m[0],u=m[1],v=c().initNear,b=(0,i.O)().selector;return(0,n.useEffect)((function(){v&&b&&v({networkId:"mainnet",selector:b})}),[v,b]),(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{class:"monaco",children:(0,r.jsx)(p,{height:d,value:h,options:{minimap:{enabled:!1},wordWrap:"on",scrollBeyondLastLine:!1,fontSize:"14px",renderLineHighlight:!1,hideMargin:!0,glyphMargin:!1,folding:!1,lineNumbers:!1,lineDecorationsWidth:0,lineNumbersMinChars:0,scrollBars:!1},onChange:function(e,t){return u(e)}})}),(0,r.jsxs)("div",{class:"code_iframe",children:[(0,r.jsxs)("h4",{style:{fontWeight:0},children:[" Preview ",(0,r.jsx)("small",{children:" - Edit the code above! "})," "]}),(0,r.jsx)("hr",{class:"preview-border"}),(0,r.jsx)("div",{class:"bootstrap-scope",children:(0,r.jsx)("div",{class:"vm-widget",children:(0,r.jsx)(a,{code:h},l)})})]})]})}})}}}]);