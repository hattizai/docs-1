"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1769],{18852:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var i=t(85893),r=t(11151);const s={id:"nft-indexer",title:"Minted NFTs Indexer",sidebar_label:"NFTs Indexer"},a=void 0,o={id:"tutorials/near-components/indexer-tutorials/nft-indexer",title:"Minted NFTs Indexer",description:"NEAR QueryAPI is currently under development. Users who want to test-drive this solution need to be added to the allowlist before creating or forking QueryAPI indexers.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/3.tutorials/near-components/indexer-tutorials/nft-indexer.md",sourceDirName:"3.tutorials/near-components/indexer-tutorials",slug:"/tutorials/near-components/indexer-tutorials/nft-indexer",permalink:"/ko/tutorials/near-components/indexer-tutorials/nft-indexer",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/near-components/indexer-tutorials/nft-indexer.md",tags:[],version:"current",lastUpdatedBy:"gagdiez",lastUpdatedAt:1713353002e3,frontMatter:{id:"nft-indexer",title:"Minted NFTs Indexer",sidebar_label:"NFTs Indexer"},sidebar:"tutorials",previous:{title:"Hype \uc778\ub371\uc11c",permalink:"/ko/tutorials/near-components/indexer-tutorials/hype-indexer"},next:{title:"Social Feed Indexer",permalink:"/ko/tutorials/near-components/indexer-tutorials/feed-indexer"}},c={},d=[{value:"Overview",id:"overview",level:2},{value:"NFT Events",id:"nft-events",level:3},{value:"Defining the Database Schema",id:"defining-the-database-schema",level:2},{value:"Defining the indexing logic",id:"defining-the-indexing-logic",level:2},{value:"Filtering Blockchain transactions",id:"filtering-blockchain-transactions",level:3},{value:"Saving the data to the Database",id:"saving-the-data-to-the-database",level:3},{value:"NEAR Component",id:"near-component",level:2},{value:"Setup",id:"setup",level:3},{value:"Processing",id:"processing",level:3},{value:"Rendering",id:"rendering",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsx)(n.p,{children:"NEAR QueryAPI is currently under development. Users who want to test-drive this solution need to be added to the allowlist before creating or forking QueryAPI indexers."}),(0,i.jsxs)(n.p,{children:["You can request access through ",(0,i.jsx)(n.a,{href:"http://bit.ly/near-queryapi-beta",children:"this link"}),"."]})]}),"\n",(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsxs)(n.p,{children:["This tutorial creates a working NFT indexer using ",(0,i.jsx)(n.a,{href:"../../../2.build/6.data-infrastructure/queryapi/intro.md",children:"NEAR QueryAPI"}),", and builds a ",(0,i.jsx)(n.a,{href:"/ko/build/near-components/what-is",children:"NEAR component"})," that presents the data. The indexer is watching for ",(0,i.jsx)(n.code,{children:"nft_mint"})," ",(0,i.jsx)(n.a,{href:"https://nomicon.io/Standards/EventsFormat",children:"Events"})," and captures some relevant data:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"receiptId"})," of the ",(0,i.jsx)(n.a,{href:"https://docs.near.org/develop/lake/structures/receipt",children:"Receipt"})," where the mint has happened"]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"receiverId"})}),"\n",(0,i.jsx)(n.li,{children:"Marketplace"}),"\n",(0,i.jsx)(n.li,{children:"Links to the transaction on NEAR Explorer"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["In this tutorial you'll learn how you can listen to ",(0,i.jsx)(n.a,{href:"https://nomicon.io/Standards/EventsFormat",children:"Events"})," generated by smart contracts and how you can index them."]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["The indexer's source code can be found by ",(0,i.jsx)(n.a,{href:"https://near.org/dataplatform.near/widget/QueryApi.App?selectedIndexerPath=bucanero.near/nft_v4",children:"following this link"}),"."]})}),"\n",(0,i.jsx)(n.h3,{id:"nft-events",children:"NFT Events"}),"\n",(0,i.jsxs)(n.p,{children:["NEAR Protocol supports ",(0,i.jsx)(n.a,{href:"https://nomicon.io/Standards/EventsFormat",children:"Events"}),". These ",(0,i.jsx)(n.code,{children:"Events"})," allow a contract developer to add standardized logs to the ",(0,i.jsx)(n.a,{href:"https://docs.near.org/develop/lake/structures/execution-outcome",children:(0,i.jsx)(n.code,{children:"ExecutionOutcomes"})})," thus allowing themselves or other developers to read those logs in more convenient manner via API or indexers. Events have a field ",(0,i.jsx)(n.code,{children:"standard"})," which aligns with NEPs. In this tutorial we'll be talking about ",(0,i.jsx)(n.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Core",children:"NEP-171 Non-Fungible Token standard"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The indexer watches all the NFTs minted following the ",(0,i.jsx)(n.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Event",children:"NEP-171 Events"})," standard. It should detect every single NFT minted, and store a basic set of data like: in what Receipt it was minted, and which marketplace created it (for example, ",(0,i.jsx)(n.a,{href:"https://paras.id",children:"Paras"}),", ",(0,i.jsx)(n.a,{href:"https://shard.dog",children:"ShardDog"}),", and ",(0,i.jsx)(n.a,{href:"https://mintbase.io",children:"Mintbase"}),")."]}),"\n",(0,i.jsx)(n.h2,{id:"defining-the-database-schema",children:"Defining the Database Schema"}),"\n",(0,i.jsxs)(n.p,{children:["The first step to creating an indexer is to define the database schema. This is done by editing the ",(0,i.jsx)(n.code,{children:"schema.sql"})," file in the code editor. The schema for this indexer looks like this:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE\n  "nfts" (\n    "id" SERIAL NOT NULL,\n    "marketplace" TEXT,\n    "block_height" BIGINT,\n    "block_timestamp" BIGINT,\n    "receipt_id" TEXT,\n    "receiver_id" TEXT,\n    "nft_data" TEXT,\n    PRIMARY KEY ("id", "block_height", "block_timestamp")\n  );\n'})}),"\n",(0,i.jsxs)(n.p,{children:["This schema defines one table: ",(0,i.jsx)(n.code,{children:"nfts"}),". The table has these columns:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"id"}),": a unique identifier for each row in the table"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"marketplace"}),": the marketplace where the NFT was created"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"block_height"}),": the height of the block in which the NFT was created"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"block_timestamp"}),": the timestamp of the block in which the NFT was created"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"receipt_id"}),": the receipt ID of the transaction that created the NFT"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"receiver_id"}),": the receiver ID of the transaction that created the NFT"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"nft_data"}),": the content of the minted NFT"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"defining-the-indexing-logic",children:"Defining the indexing logic"}),"\n",(0,i.jsxs)(n.p,{children:["The next step is to define the indexing logic. This is done by editing the ",(0,i.jsx)(n.code,{children:"indexingLogic.js"})," file in the code editor. The logic for this indexer can be divided into two parts:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Filtering blockchain transactions for a specific type of transaction"}),"\n",(0,i.jsx)(n.li,{children:"Saving the data from the filtered transactions to the database"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"filtering-blockchain-transactions",children:"Filtering Blockchain transactions"}),"\n",(0,i.jsxs)(n.p,{children:["The first part of the logic is to filter blockchain transactions for a specific type of transaction, where the ",(0,i.jsx)(n.code,{children:"Event"})," is a ",(0,i.jsx)(n.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Core",children:"NEP-171"})," ",(0,i.jsx)(n.code,{children:"nft_mint"}),". This is done by using the ",(0,i.jsx)(n.code,{children:"getBlock"})," function. This function takes in a block and a context and returns a promise. The ",(0,i.jsx)(n.code,{children:"block"})," is a Near Protocol block, and the ",(0,i.jsx)(n.code,{children:"context"})," is a set of helper methods to retrieve and commit state. The ",(0,i.jsx)(n.code,{children:"getBlock"})," function is called for every block on the blockchain."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"getBlock"})," function for this NFT indexer looks like this:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'async function getBlock(block: Block) {\n  for (let ev of block.events()) {\n    const r = block.actionByReceiptId(ev.relatedReceiptId);\n    const createdOn = block.streamerMessage.block.header.timestamp;\n\n    try {\n      let event = ev.rawEvent;\n\n      if (event.standard === "nep171" && event.event === "nft_mint") {\n        console.log(event);\n\n        let marketplace = "unknown";\n        if (r.receiverId.endsWith(".paras.near")) marketplace = "Paras";\n        else if (r.receiverId.endsWith(".sharddog.near"))\n          marketplace = "ShardDog";\n        else if (r.receiverId.match(/\\.mintbase\\d+\\.near$/))\n          marketplace = "Mintbase";\n\n        const nftMintData = {\n          marketplace: marketplace,\n          block_height: block.header().height,\n          block_timestamp: createdOn,\n          receipt_id: r.receiptId,\n          receiver_id: r.receiverId,\n          nft_data: JSON.stringify(event.data),\n        };\n\n        await context.db.Nfts.insert(nftMintData);\n\n        console.log(`NFT by ${r.receiptId} has been added to the database`);\n      }\n    } catch (e) {\n      console.log(e);\n    }\n  }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["This indexer filters ",(0,i.jsx)(n.a,{href:"https://near.github.io/near-lake-framework-js/classes/_near_lake_primitives.block.Block.html",children:"Blocks"})," that have ",(0,i.jsx)(n.a,{href:"https://near.github.io/near-lake-framework-js/classes/_near_lake_primitives.events.Event.html",children:"Events"})," of type ",(0,i.jsx)(n.code,{children:"nft_mint"})," and standard ",(0,i.jsx)(n.code,{children:"nep171"}),". In addition, it stores the JSON event data and identifies the NFT marketplace."]}),"\n",(0,i.jsx)(n.h3,{id:"saving-the-data-to-the-database",children:"Saving the data to the Database"}),"\n",(0,i.jsxs)(n.p,{children:["The second part of the logic is to save the data from the filtered transactions to the database.\nThis is solved easily by using the ",(0,i.jsx)(n.a,{href:"../../queryapi/context.md#insert",children:(0,i.jsx)(n.code,{children:"context.db.Nfts.insert"})})," helper method:"]}),"\n",(0,i.jsx)(n.p,{children:"The logic for this looks like:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"const nftMintData = {\n  marketplace: marketplace,\n  block_height: h,\n  block_timestamp: createdOn,\n  receipt_id: r.receiptId,\n  receiver_id: r.receiverId,\n  nft_data: JSON.stringify(event.data),\n};\n\n// store result to the database\nawait context.db.Nfts.insert(nftMintData);\n"})}),"\n",(0,i.jsx)(n.h2,{id:"near-component",children:"NEAR Component"}),"\n",(0,i.jsxs)(n.p,{children:["The final step is querying the indexer using GraphQL from a ",(0,i.jsx)(n.a,{href:"../../tutorial/queryapi-ws.md",children:"NEAR component"})," with WebSockets."]}),"\n",(0,i.jsxs)(n.p,{children:["Here's a simple GraphQL query that gets the last ",(0,i.jsx)(n.code,{children:"${LIMIT}"})," minted NFTs:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",children:"IndexerQuery {\n    bucanero_near_nft_v4_nfts(order_by: {block_timestamp: desc}, limit: ${LIMIT}) {\n      block_height\n      block_timestamp\n      id\n      marketplace\n      nft_data\n      receipt_id\n      receiver_id\n    }\n"})}),"\n",(0,i.jsx)(n.h3,{id:"setup",children:"Setup"}),"\n",(0,i.jsxs)(n.p,{children:["Here's a code snippet that subscribes and processes the most recent activity (last 10 NFTs) from the ",(0,i.jsx)(n.a,{href:"#queryapi-indexer",children:"NFT indexer"}),":"]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["The code below is only a snippet. If you want the full source code to play around with the component, you can fork the ",(0,i.jsx)(n.a,{href:"https://near.org/near/widget/ComponentDetailsPage?src=bucanero.near/widget/query-api-nft-feed",children:"NFT Activity Feed source code"})," and build your own NEAR component."]})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'const GRAPHQL_ENDPOINT = "near-queryapi.api.pagoda.co";\n\nconst LIMIT = 10;\nconst accountId = props.accountId || "bucanero.near" || context.accountId;\n\nState.init({\n  widgetActivities: [],\n  widgetActivityCount: 0,\n  startWebSocketWidgetActivity: null,\n  initialFetch: false,\n});\n\nconst widgetActivitySubscription = `\n  subscription IndexerQuery {\n    bucanero_near_nft_v4_nfts(order_by: {block_timestamp: desc}, limit: ${LIMIT}) {\n      block_height\n      block_timestamp\n      id\n      marketplace\n      nft_data\n      receipt_id\n      receiver_id\n    }\n  }\n`;\n\nconst subscriptionWidgetActivity = {\n  type: "start",\n  id: "widgetNftActivity", // You can use any unique identifier\n  payload: {\n    operationName: "IndexerQuery",\n    query: widgetActivitySubscription,\n    variables: {},\n  },\n};\nfunction processWidgetActivity(activity) {\n  return { ...activity };\n}\nfunction startWebSocketWidgetActivity(processWidgetActivities) {\n  let ws = State.get().ws_widgetActivity;\n\n  if (ws) {\n    ws.close();\n    return;\n  }\n\n  ws = new WebSocket(`wss://${GRAPHQL_ENDPOINT}/v1/graphql`, "graphql-ws");\n\n  ws.onopen = () => {\n    console.log(`Connection to WS has been established`);\n    ws.send(\n      JSON.stringify({\n        type: "connection_init",\n        payload: {\n          headers: {\n            "Content-Type": "application/json",\n            "Hasura-Client-Name": "hasura-console",\n            "x-hasura-role": "bucanero_near",\n          },\n          lazy: true,\n        },\n      })\n    );\n\n    setTimeout(() => ws.send(JSON.stringify(subscriptionWidgetActivity)), 50);\n  };\n\n  ws.onclose = () => {\n    State.update({ ws_widgetActivity: null });\n    console.log(`WS Connection has been closed`);\n  };\n\n  ws.onmessage = (e) => {\n    const data = JSON.parse(e.data);\n    console.log("received data", data);\n    if (data.type === "data" && data.id === "widgetNftActivity") {\n      processWidgetActivities(data.payload.data);\n    }\n  };\n\n  ws.onerror = (err) => {\n    State.update({ ws_widgetActivity: null });\n    console.log("WebSocket error", err);\n  };\n\n  State.update({ ws_widgetActivity: ws });\n}\n'})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["Pay attention to the ",(0,i.jsx)(n.code,{children:"widgetActivitySubscription"})," GraphQL query and the ",(0,i.jsx)(n.code,{children:"subscriptionWidgetActivity"})," JSON payload."]})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"processing",children:"Processing"}),"\n",(0,i.jsx)(n.p,{children:"This is the JS function that process the incoming widget activities generated by the QueryAPI indexer, allowing the NEAR component to create a feed based on the blockchain's widget activity:"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["You can fork the ",(0,i.jsx)(n.a,{href:"https://near.org/near/widget/ComponentDetailsPage?src=bucanero.near/widget/query-api-nft-feed",children:"NFT Activity Feed source code"})," and build your own NEAR component."]})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"function processWidgetActivities(incoming_data) {\n  let incoming_widgetActivities =\n    incoming_data.bucanero_near_nft_v4_nfts.flatMap(processWidgetActivity);\n  const newActivities = [\n    ...incoming_widgetActivities.filter((activity) => {\n      return (\n        state.widgetActivities.length == 0 ||\n        activity.block_timestamp > state.widgetActivities[0].block_timestamp\n      );\n    }),\n  ];\n  if (newActivities.length > 0 && state.widgetActivities.length > 0) {\n  }\n  const prevActivities = state.prevActivities || [];\n  State.update({ widgetActivities: [...newActivities, ...prevActivities] });\n}\n\nif (state.ws_widgetActivity === undefined) {\n  State.update({\n    startWebSocketWidgetActivity: startWebSocketWidgetActivity,\n  });\n  state.startWebSocketWidgetActivity(processWidgetActivities);\n}\n"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"rendering",children:"Rendering"}),"\n",(0,i.jsxs)(n.p,{children:["Finally, rendering the activity feed on the NEAR component is straight-forward, by iterating through the ",(0,i.jsx)(n.code,{children:"state.widgetActivities"})," map:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'return (\n  <div>\n    <Title>\n      NFT Minting Activity Feed{" "}\n      <TextLink href="https://near.org/dataplatform.near/widget/QueryApi.App">\n        {" "}\n        Powered By QueryAPI{" "}\n      </TextLink>\n    </Title>\n    <RowContainer>\n      {state.widgetActivities.map((activity, i) => (\n        <Card>\n          <div>\n            <Widget\n              src="mob.near/widget/TimeAgo"\n              props={{ blockHeight: activity.block_height }}\n            />{" "}\n            ago\n          </div>\n          <CardBody>\n            <div key={i}>\n              <Text bold>NFT Marketplace: {activity.marketplace}</Text>\n              <TextLink\n                href={`https://nearblocks.io/address/${activity.receiver_id}`}\n              >\n                {activity.receiver_id}\n              </TextLink>\n              <Text bold>Receipt ID: {activity.receipt_id}</Text>\n            </div>\n          </CardBody>\n          <CardFooter>\n            <TextLink\n              href={`https://legacy.nearblocks.io/?query=${activity.receipt_id}`}\n            >\n              View details on NEAR Explorer\n            </TextLink>\n          </CardFooter>\n        </Card>\n      ))}\n    </RowContainer>\n  </div>\n);\n'})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>a});var i=t(67294);const r={},s=i.createContext(r);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);