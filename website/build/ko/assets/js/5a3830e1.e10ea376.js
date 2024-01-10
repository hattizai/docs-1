"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[15],{93252:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var i=t(85893),o=t(11151);const s={id:"quickstart",title:"\u2b50 Quickstart"},r=void 0,a={id:"bos/tutorial/quickstart",title:"\u2b50 Quickstart",description:"NEAR allows you to quicky develop fullstack decentralized applications by publishing all of its source code on-chain.",source:"@site/../docs/bos/tutorial/quickstart.md",sourceDirName:"bos/tutorial",slug:"/bos/tutorial/quickstart",permalink:"/ko/bos/tutorial/quickstart",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/bos/tutorial/quickstart.md",tags:[],version:"current",lastUpdatedBy:"gagdiez",lastUpdatedAt:1704817578,formattedLastUpdatedAt:"2024\ub144 1\uc6d4 9\uc77c",frontMatter:{id:"quickstart",title:"\u2b50 Quickstart"},sidebar:"integrate",previous:{title:"Clipboard",permalink:"/ko/bos/api/clipboard"},next:{title:"BOS Loader",permalink:"/ko/bos/dev/bos-loader"}},c={},d=[{value:"Development Environment",id:"development-environment",level:2},{value:"Creating Your First Component",id:"creating-your-first-component",level:2},{value:"Create the Component",id:"create-the-component",level:3},{value:"Preview",id:"preview",level:3},{value:"Publish",id:"publish",level:3},{value:"Using Your dApp",id:"using-your-dapp",level:2},{value:"Composition",id:"composition",level:3},{value:"Embedded",id:"embedded",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"NEAR allows you to quicky develop fullstack decentralized applications by publishing all of its source code on-chain."}),"\n",(0,i.jsx)(n.p,{children:"In this quickstart tutorial we will create a simple application that takes a name as input and renders a friendly greeting."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"img",src:t(4937).Z+"",width:"1266",height:"312"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"development-environment",children:"Development Environment"}),"\n",(0,i.jsx)(n.p,{children:"There are two pathways to creating components & applications:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://near.org/sandbox",children:"Online IDE"})," - quickly get started w/ zero setup allowing you to instantly prototype & ship code"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://docs.near.org/bos/dev/intro",children:"Local IDE"})," - get serious and use our NEAR DevTools to setup your local dev environment"]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"creating-your-first-component",children:"Creating Your First Component"}),"\n",(0,i.jsxs)(n.p,{children:["To create a ",(0,i.jsx)(n.code,{children:"widget"})," you only need to write valid JSX code, i.e. a mixture of HTML and JS. Let's see how simple it is to create and preview your first component."]}),"\n",(0,i.jsx)("hr",{class:"subsection"}),"\n",(0,i.jsx)(n.h3,{id:"create-the-component",children:"Create the Component"}),"\n",(0,i.jsxs)(n.p,{children:["In any of the editors, create a new file (",(0,i.jsx)(n.code,{children:"Add"})," button in the web editors) and name it ",(0,i.jsx)(n.code,{children:"Greeter"}),", then, paste the following code on the editor:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:'let greeting = "Have a great day";\n\nreturn (\n  <>\n    <div class="container border border-info p-3 text-center">\n      <h1>Hello {props.name}</h1>\n\n      <p> {greeting} </p>\n    </div>\n  </>\n);\n'})}),"\n",(0,i.jsx)("hr",{class:"subsection"}),"\n",(0,i.jsx)(n.h3,{id:"preview",children:"Preview"}),"\n",(0,i.jsxs)(n.p,{children:["To preview how your component will work, go first to the ",(0,i.jsx)(n.code,{children:"props"})," tab on your editor (or edit the ",(0,i.jsx)(n.code,{children:"props.json"})," file if you are using Visual Studio Code) and add the following property:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{"name": "Anna"}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["After, simply press the ",(0,i.jsx)(n.code,{children:"Preview"})," button to render the preview of your component!"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{alt:"img",src:t(36767).Z+"",width:"2686",height:"1388"}),"\n",(0,i.jsxs)(n.em,{children:["Creating a Hello World component using the ",(0,i.jsx)(n.a,{href:"https://near.social/#/edit",children:"NEAR Social Editor"})]})]}),"\n",(0,i.jsx)("hr",{class:"subsection"}),"\n",(0,i.jsx)(n.h3,{id:"publish",children:"Publish"}),"\n",(0,i.jsxs)(n.p,{children:["Click on the ",(0,i.jsx)(n.code,{children:"Save Widget"})," button to store your application in the NEAR Blockchain. If the button is not available, make sure you have signed-in to your ",(0,i.jsx)(n.a,{href:"https://wallet.near.org",children:"NEAR wallet"})," using the ",(0,i.jsx)(n.code,{children:"Sign In"})," button of the editor."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{alt:"img",src:t(76055).Z+"",width:"2262",height:"1070"}),"\n",(0,i.jsx)(n.em,{children:"The NEAR Social Editor asking if we want to store the component"})]}),"\n",(0,i.jsx)(n.p,{children:"Accept the transaction in your NEAR Wallet, so the component gets stored in the NEAR blockchain."}),"\n",(0,i.jsx)("hr",{class:"subsection"}),"\n",(0,i.jsx)(n.h2,{id:"using-your-dapp",children:"Using Your dApp"}),"\n",(0,i.jsx)(n.p,{children:"Once your application is published, it will be ready to be combined with other components, or rendered as a standalone application  using the NEAR Viewer."}),"\n",(0,i.jsx)("hr",{class:"subsection"}),"\n",(0,i.jsx)(n.h3,{id:"composition",children:"Composition"}),"\n",(0,i.jsxs)(n.p,{children:["A NEAR application is simply a component that puts together multiple components; this outer component acts as the entry point to your application. To use your component inside of another, simply invoke it using a ",(0,i.jsx)(n.code,{children:"<Widget>"})," component. This will fetch the code from the NEAR blockchain, and include it inside of your new application."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:'const user = "gagdiez.near";\n\nreturn (\n  <>\n    <h3> Composition </h3>\n    <p> Components can be composed </p>\n    <hr />\n\n    <Widget src={`${user}/widget/Greetings`} props={props} />\n  </>\n);\n'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{alt:"img",src:t(52164).Z+"",width:"1252",height:"562"}),"\n",(0,i.jsx)(n.em,{children:"Rendering of the Composition"})]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["Notice that we are passing the input ",(0,i.jsx)(n.code,{children:"props"})," as an ",(0,i.jsx)(n.code,{children:"object"})," to the ",(0,i.jsx)(n.code,{children:"Greetings"})," component."]})}),"\n",(0,i.jsx)("hr",{class:"subsection"}),"\n",(0,i.jsx)(n.h3,{id:"embedded",children:"Embedded"}),"\n",(0,i.jsxs)(n.p,{children:["To render your component as a standalone application, go to ",(0,i.jsx)(n.code,{children:"https://near.social/#/<your-username>/widget/Greeter?name=Anna"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["You can also embed your component in other websites, for example, here we simply have an iframe which ",(0,i.jsx)(n.code,{children:"source"})," is ",(0,i.jsx)(n.code,{children:"https://near.social/#/embed/gagdiez.near/widget/Greeter?name=Anna"}),":"]}),"\n",(0,i.jsx)("iframe",{style:{width:"100%",height:"130px"},src:"https://near.social/#/embed/gagdiez.near/widget/Greeter?name=Anna"}),"\n",(0,i.jsxs)("em",{children:["This component is being rendered inside an ",(0,i.jsx)(n.code,{children:"iframe"})]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["Notice that we are passing the ",(0,i.jsx)(n.code,{children:"props.name"})," as a ",(0,i.jsx)(n.code,{children:"GET"})," parameter in the ",(0,i.jsx)(n.code,{children:"url"}),"."]})})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},4937:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/quickstart-1-7d652602424805914274f3a4244c5295.png"},52164:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/quickstart-composition-b6fd55a44680d975c08654daf267a714.png"},36767:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/quickstart-editor-6df28186deba5bb93443cb27241e442a.png"},76055:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/quickstart-save-2b8d137108f75bd701915801e0a8e58b.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>r});var i=t(67294);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);