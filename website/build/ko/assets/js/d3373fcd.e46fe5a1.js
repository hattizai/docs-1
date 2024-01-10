"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[859],{13031:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>a});var i=t(85893),c=t(11151);const r={id:"primitives",title:"NEAR Lake Primitive Types",sidebar_label:"Lake Primitive Types"},s="NEAR Lake Primitive Types",d={id:"develop/lake/primitives",title:"NEAR Lake Primitive Types",description:"This article contains the primitive types used by the NEAR Lake Framework package. These types are used to define the data structures used by the framework as well as provide some popular helper functions.",source:"@site/../docs/2.develop/lake/lake-primitives.md",sourceDirName:"2.develop/lake",slug:"/develop/lake/primitives",permalink:"/ko/develop/lake/primitives",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.develop/lake/lake-primitives.md",tags:[],version:"current",lastUpdatedBy:"gagdiez",lastUpdatedAt:1702155614,formattedLastUpdatedAt:"2023\ub144 12\uc6d4 9\uc77c",frontMatter:{id:"primitives",title:"NEAR Lake Primitive Types",sidebar_label:"Lake Primitive Types"},sidebar:"indexers",previous:{title:"Migrating to NEAR Lake framework",permalink:"/ko/tutorials/indexer/migrating-to-near-lake-framework"},next:{title:"JS basic tutorial",permalink:"/ko/tutorials/indexer/js-lake-indexer"}},o={},a=[{value:"<code>Block</code>",id:"block",level:2},{value:"<code>Block</code> Structure Definition",id:"block-structure-definition",level:3},{value:"<code>streamerMessage</code>",id:"streamermessage",level:4},{value:"<code>postponedReceipts</code>",id:"postponedreceipts",level:4},{value:"<code>transactions</code>",id:"transactions",level:4},{value:"<code>Block</code> Helper Methods",id:"block-helper-methods",level:3},{value:"<code>blockHash</code>",id:"blockhash",level:4},{value:"<code>prevBlockHash</code>",id:"prevblockhash",level:4},{value:"<code>blockHeight</code>",id:"blockheight",level:4},{value:"<code>header(): BlockHeader</code>",id:"header-blockheader",level:4},{value:"<code>receipts(): Receipt[]</code>",id:"receipts-receipt",level:4},{value:"<code>actions(): Action[]</code>",id:"actions-action",level:4},{value:"<code>events(): Event[]</code>",id:"events-event",level:4},{value:"<code>stateChanges(): StateChange[]</code>",id:"statechanges-statechange",level:4},{value:"<code>actionByReceiptId(receipt_id: string): Action | undefined</code>",id:"actionbyreceiptidreceipt_id-string-action--undefined",level:4},{value:"<code>eventsByReceiptId(receipt_id: string): Event[]</code>",id:"eventsbyreceiptidreceipt_id-string-event",level:4},{value:"<code>eventsByAccountId(account_id: string): Event[]</code>",id:"eventsbyaccountidaccount_id-string-event",level:4},{value:"<code>BlockHeader</code>",id:"blockheader",level:2},{value:"<code>BlockHeader</code> Structure Definition",id:"blockheader-structure-definition",level:3},{value:"<code>Receipt</code>",id:"receipt",level:2},{value:"<code>Receipt</code> Structure Definition",id:"receipt-structure-definition",level:3},{value:"<code>Receipt</code> Fields",id:"receipt-fields",level:3},{value:"<code>receiptKind</code>",id:"receiptkind",level:4},{value:"<code>receiptId</code>",id:"receiptid",level:4},{value:"<code>receiverId</code>",id:"receiverid",level:4},{value:"<code>predecessorId</code>",id:"predecessorid",level:4},{value:"<code>status</code>",id:"status",level:4},{value:"<code>executionOutcomeId</code>",id:"executionoutcomeid",level:4},{value:"<code>logs</code>",id:"logs",level:4},{value:"<code>Receipt</code> Helper Methods",id:"receipt-helper-methods",level:3},{value:"<code>Receipt.events(): Events[]</code>",id:"receiptevents-events",level:4},{value:"<code>Event</code>",id:"event",level:2},{value:"Interface for Capturing Data About an Event in <code>handleStreamerMessage()</code>",id:"interface-for-capturing-data-about-an-event-in-handlestreamermessage",level:3},{value:"<code>Event</code> Structure Definition",id:"event-structure-definition",level:3},{value:"<code>Event</code> Methods",id:"event-methods",level:3},{value:"<code>Transaction</code>",id:"transaction",level:2},{value:"<code>Transaction</code> Structure Definition",id:"transaction-structure-definition",level:3},{value:"<code>Transaction.transactionHash</code>",id:"transactiontransactionhash",level:4},{value:"<code>Transaction.signerId</code>",id:"transactionsignerid",level:4},{value:"<code>Transaction.signerPublicKey</code>",id:"transactionsignerpublickey",level:4},{value:"<code>Transaction.signature</code>",id:"transactionsignature",level:4},{value:"<code>Transaction.receiverId</code>",id:"transactionreceiverid",level:4},{value:"<code>Transaction.status</code>",id:"transactionstatus",level:4},{value:"<code>Transaction.executionOutcomeId</code>",id:"transactionexecutionoutcomeid",level:4},{value:"<code>Transaction.operations</code>",id:"transactionoperations",level:4},{value:"<code>StateChange</code>",id:"statechange",level:2},{value:"<code>StateChange</code> Structure Definition",id:"statechange-structure-definition",level:3},{value:"<code>StateChange.cause</code>",id:"statechangecause",level:4},{value:"<code>StateChange.value</code>",id:"statechangevalue",level:4},{value:"<code>StateChange.affectedAccountId(): string</code>",id:"statechangeaffectedaccountid-string",level:4},{value:"<code>StateChange.fromStateChangeView(stateChangeView: StateChangeWithCauseView): StateChange</code>",id:"statechangefromstatechangeviewstatechangeview-statechangewithcauseview-statechange",level:4}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"near-lake-primitive-types",children:"NEAR Lake Primitive Types"}),"\n",(0,i.jsxs)(n.p,{children:["This article contains the primitive types used by the ",(0,i.jsx)(n.a,{href:"https://www.npmjs.com/package/@near-lake/framework",children:"NEAR Lake Framework package"}),". These types are used to define the data structures used by the framework as well as provide some popular helper functions."]}),"\n",(0,i.jsx)(n.h2,{id:"block",children:(0,i.jsx)(n.code,{children:"Block"})}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsxs)(n.mdxAdmonitionTitle,{children:["Important Notes on ",(0,i.jsx)(n.code,{children:"Block"})]}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"All the entities located on different shards were merged into one single list without differentiation."}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Block"})," is not the fairest name for this structure either. NEAR Protocol is a sharded blockchain, so its block is actually an ephemeral structure that represents a collection of real blocks called chunks in NEAR Protocol."]}),"\n"]})]}),"\n",(0,i.jsxs)(n.h3,{id:"block-structure-definition",children:[(0,i.jsx)(n.code,{children:"Block"})," Structure Definition"]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"Block"})," type is used to represent a block in the NEAR Lake Framework. It is comprised by the following structure:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"export class Block {\n    constructor(\n        readonly streamerMessage: StreamerMessage,\n        private executedReceipts: Receipt[],\n        readonly postponedReceipts: Receipt[],\n        readonly transactions: Transaction[],\n        private _actions: Map<string, Action>,\n        private _events: Map<string, Event[]>,\n        private _stateChanges: StateChange[]) { \n\n        }\n    ... // helper methods and getters omitted for brevity\n}\n"})}),"\n",(0,i.jsx)(n.h4,{id:"streamermessage",children:(0,i.jsx)(n.code,{children:"streamerMessage"})}),"\n",(0,i.jsxs)(n.p,{children:["Low-level structure for backward compatibility. As implemented in previous versions of ",(0,i.jsx)(n.a,{href:"https://www.npmjs.com/package/near-lake-framework",children:(0,i.jsx)(n.code,{children:"near-lake-framework"})}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"postponedreceipts",children:(0,i.jsx)(n.code,{children:"postponedReceipts"})}),"\n",(0,i.jsxs)(n.p,{children:["Receipts included on the chain but not executed yet marked as \u201cpostponed\u201d: they are represented by the same structure ",(0,i.jsx)(n.code,{children:"Receipt"})," (see the corresponding section in this doc for more details)."]}),"\n",(0,i.jsx)(n.h4,{id:"transactions",children:(0,i.jsx)(n.code,{children:"transactions"})}),"\n",(0,i.jsxs)(n.p,{children:["List of included ",(0,i.jsx)(n.code,{children:"Transactions"}),", converted into ",(0,i.jsx)(n.code,{children:"Receipts"}),"."]}),"\n",(0,i.jsx)(n.admonition,{title:"Heads up!",type:"info",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note:"}),"  You might want to know about ",(0,i.jsx)(n.code,{children:"Transactions"})," to know where the action chain has begun. Unlike Ethereum, where a Transaction contains everything you may want to know about a particular interaction on  the Ethereum blockchain, Near Protocol because of its asynchronous nature converts a ",(0,i.jsx)(n.code,{children:"Transaction"})," into a ",(0,i.jsx)(n.code,{children:"Receipt"})," before executing it. Thus, On NEAR, ",(0,i.jsx)(n.code,{children:"Receipts"})," are more important for figuring out what happened on-chain as a result of a Transaction signed by a user. Read more about ",(0,i.jsx)(n.a,{href:"https://nomicon.io/RuntimeSpec/Transactions",children:"Transactions on Near"})," here."]})}),"\n",(0,i.jsxs)(n.h3,{id:"block-helper-methods",children:[(0,i.jsx)(n.code,{children:"Block"})," Helper Methods"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"export class Block {\n    ... // constructor omitted for brevity\n    get blockHash(): string {}\n    get prevBlockHash(): string {}\n    get blockHeight(): number {}\n\n    header(): BlockHeader {}\n    receipts(): Receipt[] {}\n    actions(): Action[] {}\n    events(): Event[] {}\n    stateChanges(): StateChange[] {}\n\n    actionByReceiptId(receipt_id: string): Action | undefined {}\n    eventsByReceiptId(receipt_id: string): Event[] {}\n    eventsByAccountId(account_id: string): Event[] {}\n\n    private buildActionsHashmap() {}\n    private buildEventsHashmap(): Map<string, Event[]> {}\n\n    static fromStreamerMessage(streamerMessage: StreamerMessage): Block {}\n}\n"})}),"\n",(0,i.jsx)(n.h4,{id:"blockhash",children:(0,i.jsx)(n.code,{children:"blockHash"})}),"\n",(0,i.jsx)(n.p,{children:"Returns the block hash. A shortcut to get the data from the block header."}),"\n",(0,i.jsx)(n.h4,{id:"prevblockhash",children:(0,i.jsx)(n.code,{children:"prevBlockHash"})}),"\n",(0,i.jsx)(n.p,{children:"Returns the previous block hash. A shortcut to get the data from the block header."}),"\n",(0,i.jsx)(n.h4,{id:"blockheight",children:(0,i.jsx)(n.code,{children:"blockHeight"})}),"\n",(0,i.jsx)(n.p,{children:"Returns the block height. A shortcut to get the data from the block header."}),"\n",(0,i.jsx)(n.h4,{id:"header-blockheader",children:(0,i.jsx)(n.code,{children:"header(): BlockHeader"})}),"\n",(0,i.jsxs)(n.p,{children:["Returns a ",(0,i.jsx)(n.code,{children:"BlockHeader"})," structure of the block"]}),"\n",(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.code,{children:"BlockHeader"})," structure sections for details."]}),"\n",(0,i.jsx)(n.h4,{id:"receipts-receipt",children:(0,i.jsx)(n.code,{children:"receipts(): Receipt[]"})}),"\n",(0,i.jsxs)(n.p,{children:["Returns a slice of ",(0,i.jsx)(n.code,{children:"Receipts"})," executed in the block."]}),"\n",(0,i.jsxs)(n.p,{children:["Basically is a getter for the ",(0,i.jsx)(n.code,{children:"executedReceipts"})," field."]}),"\n",(0,i.jsx)(n.h4,{id:"actions-action",children:(0,i.jsx)(n.code,{children:"actions(): Action[]"})}),"\n",(0,i.jsxs)(n.p,{children:["Returns an Array of ",(0,i.jsx)(n.code,{children:"Actions"})," executed in the block."]}),"\n",(0,i.jsx)(n.h4,{id:"events-event",children:(0,i.jsx)(n.code,{children:"events(): Event[]"})}),"\n",(0,i.jsxs)(n.p,{children:["Returns ",(0,i.jsx)(n.code,{children:"Events"})," emitted in the block."]}),"\n",(0,i.jsx)(n.h4,{id:"statechanges-statechange",children:(0,i.jsx)(n.code,{children:"stateChanges(): StateChange[]"})}),"\n",(0,i.jsxs)(n.p,{children:["Returns an Array of ",(0,i.jsx)(n.code,{children:"StateChange"})," occurred in the block."]}),"\n",(0,i.jsx)(n.h4,{id:"actionbyreceiptidreceipt_id-string-action--undefined",children:(0,i.jsx)(n.code,{children:"actionByReceiptId(receipt_id: string): Action | undefined"})}),"\n",(0,i.jsxs)(n.p,{children:["Returns ",(0,i.jsx)(n.code,{children:"Action"}),"s of the provided ",(0,i.jsx)(n.code,{children:"receipt_id"})," from the block if any. Returns ",(0,i.jsx)(n.code,{children:"undefined"})," if there is no corresponding ",(0,i.jsx)(n.code,{children:"Action"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["This method uses the internal ",(0,i.jsx)(n.code,{children:"Block"})," ",(0,i.jsx)(n.code,{children:"action"})," field which is empty by default and will be filled with the block\u2019s actions on the first call to optimize memory usage."]}),"\n",(0,i.jsxs)(n.p,{children:["The result is either ",(0,i.jsx)(n.code,{children:"Action | undefined"})," since there might be a request for an ",(0,i.jsx)(n.code,{children:"Action"})," by ",(0,i.jsx)(n.code,{children:"receipt_id"})," from another block, in which case this method will be unable to find the ",(0,i.jsx)(n.code,{children:"Action"})," in the current block. In the other case, the request might be for an ",(0,i.jsx)(n.code,{children:"Action"})," for a ",(0,i.jsx)(n.code,{children:"receipt_id"})," that belongs to a ",(0,i.jsx)(n.code,{children:"DataReceipt"})," where an action does not exist."]}),"\n",(0,i.jsx)(n.h4,{id:"eventsbyreceiptidreceipt_id-string-event",children:(0,i.jsx)(n.code,{children:"eventsByReceiptId(receipt_id: string): Event[]"})}),"\n",(0,i.jsxs)(n.p,{children:["Returns an Array of Events emitted by ",(0,i.jsx)(n.code,{children:"ExecutionOutcome"})," for the given ",(0,i.jsx)(n.code,{children:"receipt_id"}),". There might be more than one ",(0,i.jsx)(n.code,{children:"Event"})," for the ",(0,i.jsx)(n.code,{children:"Receipt"})," or there might be none of them. In the latter case, this method returns an empty Array."]}),"\n",(0,i.jsx)(n.h4,{id:"eventsbyaccountidaccount_id-string-event",children:(0,i.jsx)(n.code,{children:"eventsByAccountId(account_id: string): Event[]"})}),"\n",(0,i.jsxs)(n.p,{children:["Returns an Array of Events emitted by ",(0,i.jsx)(n.code,{children:"ExecutionOutcome"})," for the given ",(0,i.jsx)(n.code,{children:"account_id"}),". There might be more than one ",(0,i.jsx)(n.code,{children:"Event"})," for the ",(0,i.jsx)(n.code,{children:"Receipt"})," or there might be none of them. In the latter case, this method returns an empty Array."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"blockheader",children:(0,i.jsx)(n.code,{children:"BlockHeader"})}),"\n",(0,i.jsxs)(n.p,{children:["Replacement for ",(0,i.jsx)(n.code,{children:"BlockHeaderView"})," from ",(0,i.jsx)(n.code,{children:"near-primitives"}),". Shrunken and simplified."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["The original ",(0,i.jsx)(n.code,{children:"BlockHeaderView"})," is still accessible via the ",(0,i.jsx)(n.code,{children:".streamerMessage"})," attribute."]})}),"\n",(0,i.jsxs)(n.h3,{id:"blockheader-structure-definition",children:[(0,i.jsx)(n.code,{children:"BlockHeader"})," Structure Definition"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"export class BlockHeader {\n    constructor(\n        readonly height: number,\n        readonly hash: string,\n        readonly prevHash: string,\n        readonly author: string,\n        readonly timestampNanosec: string,\n        readonly epochId: string,\n        readonly nextEpochId: string,\n        readonly gasPrice: string,\n        readonly totalSupply: string,\n        readonly latestProtocolVersion: number,\n        readonly randomValue: string,\n        readonly chunksIncluded: number,\n        readonly validatorProposals: ValidatorStakeView[]) { \n        }\n    ... // helper method omitted for brevity\n}\n"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"receipt",children:(0,i.jsx)(n.code,{children:"Receipt"})}),"\n",(0,i.jsxs)(n.p,{children:["This field is a simplified representation of the ",(0,i.jsx)(n.code,{children:"ReceiptView"})," structure from ",(0,i.jsx)(n.code,{children:"near-primitives"}),"."]}),"\n",(0,i.jsxs)(n.h3,{id:"receipt-structure-definition",children:[(0,i.jsx)(n.code,{children:"Receipt"})," Structure Definition"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"export class Receipt implements Events {\n  constructor(\n    readonly receiptKind: ReceiptKind, \n    readonly receiptId: string, \n    readonly receiverId: string, \n    readonly predecessorId: string, \n    readonly status: ExecutionStatus, \n    readonly executionOutcomeId?: string | undefined, \n    readonly logs: string[] = []) {\n    }\n  ... // helper methods omitted for brevity\n}\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"receipt-fields",children:[(0,i.jsx)(n.code,{children:"Receipt"})," Fields"]}),"\n",(0,i.jsx)(n.h4,{id:"receiptkind",children:(0,i.jsx)(n.code,{children:"receiptKind"})}),"\n",(0,i.jsxs)(n.p,{children:["Defined the type of the ",(0,i.jsx)(n.code,{children:"Receipt"}),": ",(0,i.jsx)(n.code,{children:"Action"})," or ",(0,i.jsx)(n.code,{children:"Data"})," representing the ",(0,i.jsx)(n.code,{children:"ActionReceipt"})," and ",(0,i.jsx)(n.code,{children:"DataReceipt"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"receiptid",children:(0,i.jsx)(n.code,{children:"receiptId"})}),"\n",(0,i.jsxs)(n.p,{children:["The ID of the ",(0,i.jsx)(n.code,{children:"Receipt"})," of the ",(0,i.jsx)(n.code,{children:"CryptoHash"})," type."]}),"\n",(0,i.jsx)(n.h4,{id:"receiverid",children:(0,i.jsx)(n.code,{children:"receiverId"})}),"\n",(0,i.jsxs)(n.p,{children:["The receiver account id of the ",(0,i.jsx)(n.code,{children:"Receipt"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"predecessorid",children:(0,i.jsx)(n.code,{children:"predecessorId"})}),"\n",(0,i.jsxs)(n.p,{children:["The predecessor account id of the ",(0,i.jsx)(n.code,{children:"Receipt"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"status",children:(0,i.jsx)(n.code,{children:"status"})}),"\n",(0,i.jsxs)(n.p,{children:["Represents the status of ",(0,i.jsx)(n.code,{children:"ExecutionOutcome"})," of the ",(0,i.jsx)(n.code,{children:"Receipt"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["See the ",(0,i.jsx)(n.code,{children:"ExecutionStatus"})," enum section for the details."]}),"\n",(0,i.jsx)(n.h4,{id:"executionoutcomeid",children:(0,i.jsx)(n.code,{children:"executionOutcomeId"})}),"\n",(0,i.jsxs)(n.p,{children:["The id of the ",(0,i.jsx)(n.code,{children:"ExecutionOutcome"})," for the ",(0,i.jsx)(n.code,{children:"Receipt"}),". Returns ",(0,i.jsx)(n.code,{children:"null"})," if the ",(0,i.jsx)(n.code,{children:"Receipt"})," isn\u2019t executed yet and has a postponed status."]}),"\n",(0,i.jsx)(n.h4,{id:"logs",children:(0,i.jsx)(n.code,{children:"logs"})}),"\n",(0,i.jsxs)(n.p,{children:["The original logs of the corresponding ",(0,i.jsx)(n.code,{children:"ExecutionOutcome"})," of the ",(0,i.jsx)(n.code,{children:"Receipt"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Note: not all of the logs might be parsed as JSON Events (",(0,i.jsx)(n.code,{children:"Events"}),")."]}),"\n",(0,i.jsxs)(n.h3,{id:"receipt-helper-methods",children:[(0,i.jsx)(n.code,{children:"Receipt"})," Helper Methods"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"export class Receipt {\n    ... // constructor omitted for brevity\n    get events(): Event[] {}\n\n    static fromOutcomeWithReceipt(outcomeWithReceipt: OutcomeWithReceipt): Receipt {}\n}\n"})}),"\n",(0,i.jsx)(n.h4,{id:"receiptevents-events",children:(0,i.jsx)(n.code,{children:"Receipt.events(): Events[]"})}),"\n",(0,i.jsxs)(n.p,{children:["Returns an Array of ",(0,i.jsx)(n.code,{children:"Events"})," for the ",(0,i.jsx)(n.code,{children:"Receipt"}),", if any. This might be empty if the ",(0,i.jsx)(n.code,{children:"logs"})," field is empty or doesn\u2019t contain JSON Events compatible log records."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"event",children:(0,i.jsx)(n.code,{children:"Event"})}),"\n",(0,i.jsxs)(n.p,{children:["This structure is an ephemeral entity to provide access to the ",(0,i.jsx)(n.a,{href:"https://github.com/near/NEPs/blob/master/neps/nep-0297.md",children:"Events Standard"})," structure and keep data about the related ",(0,i.jsx)(n.code,{children:"Receipt"})," for convenience."]}),"\n",(0,i.jsxs)(n.h3,{id:"interface-for-capturing-data-about-an-event-in-handlestreamermessage",children:["Interface for Capturing Data About an Event in ",(0,i.jsx)(n.code,{children:"handleStreamerMessage()"})]}),"\n",(0,i.jsx)(n.p,{children:"The interface to capture data about an event has the following arguments:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"standard"}),": name of standard, e.g. nep171"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"version"}),": e.g. 1.0.0"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"event"}),": type of the event, e.g. nft_mint"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"data"}),": associate event data. Strictly typed for each set ",(0,i.jsx)(n.code,{children:"{standard, version, event}"})," inside corresponding NEP"]}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"event-structure-definition",children:[(0,i.jsx)(n.code,{children:"Event"})," Structure Definition"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"export class Event {\n    constructor(\n      readonly relatedReceiptId: string, \n      readonly rawEvent: RawEvent) {\n      }\n    ... // helper methods omitted for brevity\n}\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"event-methods",children:[(0,i.jsx)(n.code,{children:"Event"})," Methods"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"export class Event {\n    ... // constructor omitted for brevity\n    static fromLog(log: string): Event {}\n}\n"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"transaction",children:(0,i.jsx)(n.code,{children:"Transaction"})}),"\n",(0,i.jsxs)(n.p,{children:["A representation of the ",(0,i.jsx)(n.code,{children:"IndexerTransactionWithOutcome"})," from ",(0,i.jsx)(n.code,{children:"near-indexer-primitives"})," which is an ephemeral structure combining ",(0,i.jsx)(n.code,{children:"SignedTransactionView"})," from ",(0,i.jsx)(n.code,{children:"near-primitives"})," and ",(0,i.jsx)(n.code,{children:"IndexerExecutionOutcomeWithOptionalReceipt"})," from ",(0,i.jsx)(n.code,{children:"near-indexer-primitives"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["This structure is very similar to ",(0,i.jsx)(n.code,{children:"Receipt"}),". Unlike ",(0,i.jsx)(n.code,{children:"Receipt"}),", a ",(0,i.jsx)(n.code,{children:"Transaction"})," has a few additional fields like ",(0,i.jsx)(n.code,{children:"signerId"}),", ",(0,i.jsx)(n.code,{children:"signature"}),", and ",(0,i.jsx)(n.code,{children:"operations"}),"."]}),"\n",(0,i.jsxs)(n.h3,{id:"transaction-structure-definition",children:[(0,i.jsx)(n.code,{children:"Transaction"})," Structure Definition"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"export class Transaction {\n    constructor(\n      readonly transactionHash: string, \n      readonly signerId: string, \n      readonly signerPublicKey: string, \n      readonly signature: string, \n      readonly receiverId: string, \n      readonly status: ExecutionStatus, \n      readonly executionOutcomeId: string, \n      readonly operations: Operation[]) { \n      }\n}\n"})}),"\n",(0,i.jsx)(n.h4,{id:"transactiontransactionhash",children:(0,i.jsx)(n.code,{children:"Transaction.transactionHash"})}),"\n",(0,i.jsxs)(n.p,{children:["Returns the hash of the ",(0,i.jsx)(n.code,{children:"Transaction"})," in ",(0,i.jsx)(n.code,{children:"CryptoHash"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"transactionsignerid",children:(0,i.jsx)(n.code,{children:"Transaction.signerId"})}),"\n",(0,i.jsxs)(n.p,{children:["Returns the signer account id of the ",(0,i.jsx)(n.code,{children:"Transaction"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"transactionsignerpublickey",children:(0,i.jsx)(n.code,{children:"Transaction.signerPublicKey"})}),"\n",(0,i.jsxs)(n.p,{children:["Returns the ",(0,i.jsx)(n.code,{children:"PublicKey"})," of the signer of the ",(0,i.jsx)(n.code,{children:"Transaction"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"transactionsignature",children:(0,i.jsx)(n.code,{children:"Transaction.signature"})}),"\n",(0,i.jsxs)(n.p,{children:["Returns the ",(0,i.jsx)(n.code,{children:"Signature"})," the ",(0,i.jsx)(n.code,{children:"Transaction"})," was signed with."]}),"\n",(0,i.jsx)(n.h4,{id:"transactionreceiverid",children:(0,i.jsx)(n.code,{children:"Transaction.receiverId"})}),"\n",(0,i.jsxs)(n.p,{children:["Returns the receiver account id of the ",(0,i.jsx)(n.code,{children:"Transaction"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"transactionstatus",children:(0,i.jsx)(n.code,{children:"Transaction.status"})}),"\n",(0,i.jsxs)(n.p,{children:["Returns the status of the ",(0,i.jsx)(n.code,{children:"Transaction"})," as ",(0,i.jsx)(n.code,{children:"ExecutionStatus"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"transactionexecutionoutcomeid",children:(0,i.jsx)(n.code,{children:"Transaction.executionOutcomeId"})}),"\n",(0,i.jsxs)(n.p,{children:["Returns the id of the ",(0,i.jsx)(n.code,{children:"ExecutionOutcome"})," for the ",(0,i.jsx)(n.code,{children:"Transaction"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"transactionoperations",children:(0,i.jsx)(n.code,{children:"Transaction.operations"})}),"\n",(0,i.jsxs)(n.p,{children:["Returns an Array of ",(0,i.jsx)(n.code,{children:"Operation"})," for the ",(0,i.jsx)(n.code,{children:"Transaction"}),"."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"statechange",children:(0,i.jsx)(n.code,{children:"StateChange"})}),"\n",(0,i.jsxs)(n.p,{children:["This structure is almost an identical copy of the ",(0,i.jsx)(n.code,{children:"StateChangeWithCauseView"})," from ",(0,i.jsx)(n.code,{children:"near-primitives"})," with a propagated additional field ",(0,i.jsx)(n.code,{children:"affectedAccountId"}),"."]}),"\n",(0,i.jsxs)(n.h3,{id:"statechange-structure-definition",children:[(0,i.jsx)(n.code,{children:"StateChange"})," Structure Definition"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"export class StateChange {\n    constructor(\n      readonly cause: StateChangeCause, \n      readonly value: StateChangeValue\n    ) {}\n    \n    get affectedAccountId(): string {}\n\n    static fromStateChangeView(stateChangeView: StateChangeWithCauseView) {}\n}\n"})}),"\n",(0,i.jsx)(n.h4,{id:"statechangecause",children:(0,i.jsx)(n.code,{children:"StateChange.cause"})}),"\n",(0,i.jsxs)(n.p,{children:["Returns the ",(0,i.jsx)(n.code,{children:"cause"})," of the ",(0,i.jsx)(n.code,{children:"StateChange"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"statechangevalue",children:(0,i.jsx)(n.code,{children:"StateChange.value"})}),"\n",(0,i.jsxs)(n.p,{children:["Returns the ",(0,i.jsx)(n.code,{children:"value"})," of the ",(0,i.jsx)(n.code,{children:"StateChange"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"statechangeaffectedaccountid-string",children:(0,i.jsx)(n.code,{children:"StateChange.affectedAccountId(): string"})}),"\n",(0,i.jsxs)(n.p,{children:["Returns the account id of the ",(0,i.jsx)(n.code,{children:"StateChange"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"statechangefromstatechangeviewstatechangeview-statechangewithcauseview-statechange",children:(0,i.jsx)(n.code,{children:"StateChange.fromStateChangeView(stateChangeView: StateChangeWithCauseView): StateChange"})}),"\n",(0,i.jsxs)(n.p,{children:["Returns the ",(0,i.jsx)(n.code,{children:"StateChange"})," from the ",(0,i.jsx)(n.code,{children:"StateChangeWithCauseView"}),". Created for backward compatibility."]})]})}function h(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>s});var i=t(67294);const c={},r=i.createContext(c);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);