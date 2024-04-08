"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[52165],{83769:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var t=a(85893),o=a(11151),r=a(74866),s=a(85162);const i={id:"dao",sidebar_label:"Autonomous Organizations (DAO)",title:"Decentralized Autonomous Organizations"},l=void 0,c={id:"develop/relevant-contracts/dao",title:"Decentralized Autonomous Organizations",description:"Decentralized Autonomous Organizations (DAOs) are self-organized groups that form around common purposes. Membership, decision making,",source:"@site/../docs/2.develop/relevant-contracts/dao.md",sourceDirName:"2.develop/relevant-contracts",slug:"/develop/relevant-contracts/dao",permalink:"/develop/relevant-contracts/dao",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.develop/relevant-contracts/dao.md",tags:[],version:"current",lastUpdatedBy:"gagdiez",lastUpdatedAt:170750554e4,frontMatter:{id:"dao",sidebar_label:"Autonomous Organizations (DAO)",title:"Decentralized Autonomous Organizations"}},u={},d=[{value:"Creating a DAO",id:"creating-a-dao",level:2},{value:"Voting policy",id:"voting-policy",level:3},{value:"Adding a Proposal",id:"adding-a-proposal",level:2},{value:"Acting on a Proposal",id:"acting-on-a-proposal",level:2}];function p(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Decentralized Autonomous Organizations (DAOs) are self-organized groups that form around common purposes. Membership, decision making,\nand funding are coordinated by publicly voting on proposals through a smart contract."}),"\n",(0,t.jsxs)(n.p,{children:["In contrast with ",(0,t.jsx)(n.a,{href:"/develop/relevant-contracts/ft",children:"FT"})," and ",(0,t.jsx)(n.a,{href:"/develop/relevant-contracts/nft",children:"NFT"}),", DAO contract's are not standardized. Because of this, in this page we will use as\nreference the ",(0,t.jsx)(n.a,{href:"https://github.com/near-daos/sputnik-dao-contract",children:"sputnik dao implementation"}),". The main concepts covered here should\neasily generalizable to other DAO implementations."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"creating-a-dao",children:"Creating a DAO"}),"\n",(0,t.jsxs)(n.p,{children:["To create a DAO you first need to deploy the ",(0,t.jsx)(n.a,{href:"https://github.com/near-daos/sputnik-dao-contract#setup",children:"DAO contract factory"}),", and initialize it."]}),"\n",(0,t.jsxs)(n.p,{children:["Once deployed and initialized, you can ask the factory to ",(0,t.jsx)(n.code,{children:"create"})," a new DAO for you. On creation, you will define parameters such as the DAO's name, its purpose, and its council. Defining the right council is important since its members are the ",(0,t.jsx)(n.strong,{children:"only"})," accounts allowed to vote on proposals."]}),"\n",(0,t.jsx)(r.Z,{className:"language-tabs",groupId:"code-tabs",children:(0,t.jsx)(s.Z,{value:"cli",label:"NEAR CLI",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'# 1. Deploy the contract in a testnet account\nnear create-account <factory-account> --useFaucet\nnear deploy <factory-account> <sputnikdao-wasm> --accountId <your-account>\n\n# 2. Initialize factory contract\nnear call <factory-account> new --accountId  <your-account> --gas 100000000000000\n\n# 3. Define a council and create DAO\nexport COUNCIL=\'["<council-member-1>", "<council-member-2>"]\'\nexport ARGS=`echo \'{"config": {"name": "<name>", "purpose": "<purpose>", "metadata":"<metadata>"}, "policy": \'$COUNCIL\'}\' | base64`\n\nnear call  <factory-account> create "{\\"name\\": \\"<name>\\", \\"args\\": \\"$ARGS\\"}" --accountId <your-account> --amount 10 --gas 150000000000000\n'})})})}),"\n",(0,t.jsx)(n.h3,{id:"voting-policy",children:"Voting policy"}),"\n",(0,t.jsxs)(n.p,{children:["Currently, the DAO supports two different types of ",(0,t.jsx)(n.a,{href:"https://github.com/near-daos/sputnik-dao-contract#voting-policy",children:"voting policies"}),": ",(0,t.jsx)(n.code,{children:"TokenWeight"}),", and ",(0,t.jsx)(n.code,{children:"RoleWeight"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["When the vote policy is ",(0,t.jsx)(n.code,{children:"TokenWeight"}),", the council votes using ",(0,t.jsx)(n.a,{href:"/develop/relevant-contracts/ft",children:"tokens"}),". The weigh of a vote is the proportion of tokens used for voting over the token's total supply."]}),"\n",(0,t.jsxs)(n.p,{children:["When the vote policy is ",(0,t.jsx)(n.code,{children:"RoleWeight(role)"}),', the vote weigh is computed as "one over the total number of people with the role".']}),"\n",(0,t.jsx)(n.p,{children:'Both voting policies further include a "threshold" for passing a proposal, which can be a ratio or a fixed number. The ratio indicates that you need a proportion of people/tokens to approve the proposal (e.g. half the people need to vote, and to vote positively). A fixed number indicated that you need a specific number of votes/tokens to pass the proposal (e.g. 3 people/tokens are enough to approve the proposal).'}),"\n",(0,t.jsx)("hr",{className:"subsection"}),"\n",(0,t.jsx)(n.h2,{id:"adding-a-proposal",children:"Adding a Proposal"}),"\n",(0,t.jsxs)(n.p,{children:["By default, anyone can add a proposal to the DAO, but a minimum of 1\u24c3 needs to be attached as a bond. This however can be changed by ",(0,t.jsx)(n.a,{href:"https://github.com/near-daos/sputnik-dao-contract#roles-and-permissions",children:"setting roles in the DAO"}),". The type of proposals that can be added ",(0,t.jsx)(n.a,{href:"https://github.com/near-daos/sputnik-dao-contract#proposal-types",children:"is predefined"}),", and include actions such as:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Adding a member to the council."}),"\n",(0,t.jsx)(n.li,{children:"Calling a method in a smart contract."}),"\n",(0,t.jsx)(n.li,{children:"Transferring NEAR or a FT to some account."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Each action has its own kind of arguments. The complete list of actions can be ",(0,t.jsx)(n.a,{href:"https://github.com/near-daos/sputnik-dao-contract#proposal-types",children:"found here"}),"."]}),"\n",(0,t.jsx)(r.Z,{className:"language-tabs",groupId:"code-tabs",children:(0,t.jsx)(s.Z,{value:"cli",label:"NEAR CLI",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'near call <dao-account> add_proposal \\\n\'{"proposal": {"description": "<description>", "kind": {"<proposalKind>": {"<argument>": "<value>", "<argument>": "<value>"}}}}\' \\\n--accountId proposer.testnet \\\n--amount 1\n\n'})})})}),"\n",(0,t.jsx)("hr",{className:"subsection"}),"\n",(0,t.jsx)(n.h2,{id:"acting-on-a-proposal",children:"Acting on a Proposal"}),"\n",(0,t.jsxs)(n.p,{children:["Once a proposal is added, ",(0,t.jsx)(n.strong,{children:"council members"})," can act on them calling the ",(0,t.jsx)(n.code,{children:"act_proposal"})," method. The available actions are one of the following: AddProposal, RemoveProposal, VoteApprove, VoteReject, VoteRemove, Finalize, or MoveToHub."]}),"\n",(0,t.jsx)(r.Z,{className:"language-tabs",groupId:"code-tabs",children:(0,t.jsx)(s.Z,{value:"cli",label:"NEAR CLI",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'near call <dao-account> act_proposal \'{"id": <proposal-id>, "action": "<action>"}\' --accountId <a-council-account-id>\n'})})})}),"\n",(0,t.jsx)(n.p,{children:"Each time somebody acts on the proposal, the DAO checks if the proposal has enough votes to be approved. If the proposal is approve, then the DAO executes the proposal (for example, adding a new member to the council)."})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},85162:(e,n,a)=>{a.d(n,{Z:()=>s});a(67294);var t=a(36905);const o={tabItem:"tabItem_Ymn6"};var r=a(85893);function s(e){var n=e.children,a=e.hidden,s=e.className;return(0,r.jsx)("div",{role:"tabpanel",className:(0,t.Z)(o.tabItem,s),hidden:a,children:n})}},74866:(e,n,a)=>{a.d(n,{Z:()=>A});var t=a(67294),o=a(36905),r=a(12466),s=a(16550),i=a(20469),l=a(91980),c=a(67392),u=a(50012);function d(e){var n,a;return null!=(n=null==(a=t.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,t.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:a.filter(Boolean))?n:[]}function p(e){var n=e.values,a=e.children;return(0,t.useMemo)((function(){var e=null!=n?n:function(e){return d(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(a);return function(e){var n=(0,c.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,a])}function h(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function f(e){var n=e.queryString,a=void 0!==n&&n,o=e.groupId,r=(0,s.k6)(),i=function(e){var n=e.queryString,a=void 0!==n&&n,t=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:a,groupId:o});return[(0,l._X)(i),(0,t.useCallback)((function(e){if(i){var n=new URLSearchParams(r.location.search);n.set(i,e),r.replace(Object.assign({},r.location,{search:n.toString()}))}}),[i,r])]}function m(e){var n,a,o,r,s=e.defaultValue,l=e.queryString,c=void 0!==l&&l,d=e.groupId,m=p(e),v=(0,t.useState)((function(){return function(e){var n,a=e.defaultValue,t=e.tabValues;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!h({value:a,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+t.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var o=null!=(n=t.find((function(e){return e.default})))?n:t[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:s,tabValues:m})})),g=v[0],b=v[1],x=f({queryString:c,groupId:d}),j=x[0],y=x[1],A=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),a=(0,u.Nk)(n),o=a[0],r=a[1],[o,(0,t.useCallback)((function(e){n&&r.set(e)}),[n,r])]),w=A[0],k=A[1],O=function(){var e=null!=j?j:w;return h({value:e,tabValues:m})?e:null}();return(0,i.Z)((function(){O&&b(O)}),[O]),{selectedValue:g,selectValue:(0,t.useCallback)((function(e){if(!h({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);b(e),y(e),k(e)}),[y,k,m]),tabValues:m}}var v=a(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=a(85893);function x(e){var n=e.className,a=e.block,t=e.selectedValue,s=e.selectValue,i=e.tabValues,l=[],c=(0,r.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var n=e.currentTarget,a=l.indexOf(n),o=i[a].value;o!==t&&(c(n),s(o))},d=function(e){var n,a=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var t,o=l.indexOf(e.currentTarget)+1;a=null!=(t=l[o])?t:l[0];break;case"ArrowLeft":var r,s=l.indexOf(e.currentTarget)-1;a=null!=(r=l[s])?r:l[l.length-1]}null==(n=a)||n.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},n),children:i.map((function(e){var n=e.value,a=e.label,r=e.attributes;return(0,b.jsx)("li",Object.assign({role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:function(e){return l.push(e)},onKeyDown:d,onClick:u},r,{className:(0,o.Z)("tabs__item",g.tabItem,null==r?void 0:r.className,{"tabs__item--active":t===n}),children:null!=a?a:n}),n)}))})}function j(e){var n=e.lazy,a=e.children,o=e.selectedValue,r=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){var s=r.find((function(e){return e.props.value===o}));return s?(0,t.cloneElement)(s,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:r.map((function(e,n){return(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==o})}))})}function y(e){var n=m(e);return(0,b.jsxs)("div",{className:(0,o.Z)("tabs-container",g.tabList),children:[(0,b.jsx)(x,Object.assign({},e,n)),(0,b.jsx)(j,Object.assign({},e,n))]})}function A(e){var n=(0,v.Z)();return(0,b.jsx)(y,Object.assign({},e,{children:d(e.children)}),String(n))}},11151:(e,n,a)=>{a.d(n,{Z:()=>i,a:()=>s});var t=a(67294);const o={},r=t.createContext(o);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);