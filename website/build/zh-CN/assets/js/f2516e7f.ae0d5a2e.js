"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7141],{29577:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>r});var n=i(85893),s=i(11151);const l={id:"minecraft-nfts",title:"Create NFTs in Minecraft",sidebar_label:"Minecraft NFTs"},a=void 0,o={id:"tutorials/nfts/minecraft-nfts",title:"Create NFTs in Minecraft",description:"In this tutorial you'll learn how to take your custom Minecraft creations and mint the schematics into NFTs on the NEAR blockchain!",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/3.tutorials/nfts/minecraft-nfts.md",sourceDirName:"3.tutorials/nfts",slug:"/tutorials/nfts/minecraft-nfts",permalink:"/zh-CN/tutorials/nfts/minecraft-nfts",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/nfts/minecraft-nfts.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1704996595e3,frontMatter:{id:"minecraft-nfts",title:"Create NFTs in Minecraft",sidebar_label:"Minecraft NFTs"},sidebar:"tutorials",previous:{title:"Minting Front-end",permalink:"/zh-CN/tutorials/nfts/minting-nft-frontend"},next:{title:"Introduction",permalink:"/zh-CN/tutorials/nfts/js/introduction"}},c={},r=[{value:"Overview",id:"overview",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Creating a Schematic",id:"creating-a-schematic",level:2},{value:"Setup",id:"setup",level:3},{value:"Sanity Check",id:"sanity-check",level:3},{value:"Creating the Schematics File",id:"creating-the-schematics-file",level:3},{value:"Minting the Schematic",id:"minting-the-schematic",level:2},{value:"Uploading the schematic",id:"uploading-the-schematic",level:3},{value:"Steps",id:"steps",level:4},{value:"Interacting With the Contract",id:"interacting-with-the-contract",level:3},{value:"Using the Village Schematic",id:"using-the-village-schematic",level:2},{value:"Getting the Schematics File",id:"getting-the-schematics-file",level:3},{value:"Loading the Schematics File in Minecraft",id:"loading-the-schematics-file-in-minecraft",level:3},{value:"Versioning for this article",id:"versioning-for-this-article",level:2}];function h(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components},{Details:l}=t;return l||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"In this tutorial you'll learn how to take your custom Minecraft creations and mint the schematics into NFTs on the NEAR blockchain!"}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsxs)(t.p,{children:["This tutorial will run you through minting Minecraft structures of any size onto the NEAR blockchain. It will allow you to copy and paste the designs into your own worlds. For this, we will be using WorldEdit to download and read the schematics and we'll put them on-chain using ",(0,n.jsx)(t.a,{href:"https://ipfs.io/",children:"IPFS"}),". It will allow you to copy and paste the designs into your own worlds. For this, we will be using WorldEdit to download and read the schematics and we'll put them on-chain using ",(0,n.jsx)(t.a,{href:"https://ipfs.io/",children:"IPFS"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsxs)(t.admonition,{type:"info",children:[(0,n.jsxs)(t.mdxAdmonitionTitle,{children:["It is recommended that you first complete the introductory ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:"/tutorials/nfts/minting-nfts",children:"minting NFTs tutorial"})})," :::"]}),(0,n.jsx)(t.p,{children:"To complete this tutorial successfully, you'll need:"}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://www.minecraft.net/",children:"A Minecraft account"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://worldedit.enginehub.org/en/latest/install/",children:"WorldEdit installed"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#wallet",children:"A NEAR account"})}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/tools/near-cli#setup",children:"NEAR command-line interface"})," (",(0,n.jsx)(t.code,{children:"near-cli"}),")"]}),"\n"]}),(0,n.jsx)(t.h2,{id:"creating-a-schematic",children:"Creating a Schematic"}),(0,n.jsx)(t.p,{children:"In this section, we'll be creating the Minecraft schematic to put on chain."}),(0,n.jsx)(t.h3,{id:"setup",children:"Setup"}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Once you have ",(0,n.jsx)(t.a,{href:"https://worldedit.enginehub.org/en/latest/install/",children:"WorldEdit"})," installed and Minecraft loaded up, let's check if WorldEdit is working properly by running:"]}),"\n"]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"//pos1\n"})}),(0,n.jsxs)(t.p,{children:["If WorldEdit is properly installed, it should output ",(0,n.jsx)(t.code,{children:"First position set to (X, Y, Z)."})," where X, Y, and Z are coordinates."]}),(0,n.jsx)(t.p,{children:"For this tutorial, we will be minting a small village house. For this tutorial, we will be minting a small village house. To follow along, choose any structure that you'd like to mint as shown below:"}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Village House Minecraft",src:i(63038).Z+"",width:"684",height:"721"})}),(0,n.jsx)(t.p,{children:"You'll then want to choose the boundaries of the structure that you'd like to copy. You'll then want to choose the boundaries of the structure that you'd like to copy. We will turn these into schematics which will be placed on chain for you or others to download and paste in your own worlds."}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"To do this, we'll need to outline the boundaries of the build using WorldEdit. Stand in the bottom left corner of your build and run: Stand in the bottom left corner of your build and run:"}),"\n"]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"//pos1\n"})}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"You can then move to the top right corner and run:"}),"\n"]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"//pos2\n"})}),(0,n.jsx)(t.p,{children:"Setting these two positions has now created a cube around your build."}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"We can now copy the contents of that build by running:"}),"\n"]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"//copy\n"})}),(0,n.jsx)(t.p,{children:"The output should look something like this:"}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Copy Chat Message",src:i(34165).Z+"",width:"907",height:"186"})}),(0,n.jsxs)(t.admonition,{title:"TIP",type:"info",children:[(0,n.jsx)(t.p,{children:"Remember to note the position of your player when copying. :::info TIP\nRemember to note the position of your player when copying. If you copy the build and lets say you're standing on the roof, when you paste the build it will paste the build in a way that will result in you standing on the roof.\n::: :::"}),(0,n.jsx)(t.h3,{id:"sanity-check",children:"Sanity Check"}),(0,n.jsx)(t.p,{children:"We can check and see if our build is fine by pasting what we just copied elsewhere in our world."}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Go to a location that you would like to paste the build and run:"}),"\n"]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"//paste\n"})}),(0,n.jsx)(t.p,{children:"In the example below, we pasted the village house floating above a coral reef biome. You should also see a response notifying you that the clipboard has been pasted. (See example below) You should also see a response notifying you that the clipboard has been pasted. (See example below)"}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Pasted Minecraft House",src:i(6953).Z+"",width:"1312",height:"691"})}),(0,n.jsx)(t.h3,{id:"creating-the-schematics-file",children:"Creating the Schematics File"}),(0,n.jsx)(t.p,{children:"When you're happy with the build you've just copied and pasted, it's time to create the schematic file that we'll mint into an NFT. To do this we'll run a WorldEdit command that will save the schematic file on our local machine. To do this we'll run a WorldEdit command that will save the schematic file on our local machine."}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["To do this, run the command ",(0,n.jsx)(t.code,{children:"schematic save FILE_NAME"})," replacing ",(0,n.jsx)(t.code,{children:"FILE_NAME"})," with a name of your choosing."]}),"\n"]}),(0,n.jsxs)(t.p,{children:["This will save the file to your Minecraft folder with under ",(0,n.jsx)(t.code,{children:"minecraft/config/worldedit/schematics"})," witha ",(0,n.jsx)(t.code,{children:".schem"})," extension."]}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Now test your file by loading the schematic we just saved using ",(0,n.jsx)(t.code,{children:"schematic load FILE_NAME"}),"."]}),"\n"]}),(0,n.jsx)(t.p,{children:"This will load the schematic to our clipboard and we're free to paste it in our world."}),(0,n.jsx)(t.h2,{id:"minting-the-schematic",children:"Minting the Schematic"}),(0,n.jsxs)(t.p,{children:["In this section, we'll mint the schematics file, we've just created and put it on the blockchain using IPFS and web3.storage. In order to proceed, you need to locate the ",(0,n.jsx)(t.code,{children:"FILE_NAME.schem"})," we created in the last section. This file can be found in your Minecraft folder under ",(0,n.jsx)(t.code,{children:"minecraft/config/worldedit/schematics"}),". The location of your minecraft folder differs depending on your OS."]}),(0,n.jsx)(t.h3,{id:"uploading-the-schematic",children:"Uploading the schematic"}),(0,n.jsxs)(t.p,{children:["To upload the schematic, we are going to use the free ",(0,n.jsx)(t.a,{href:"https://web3.storage/",children:"web3.storage"})," service built for storing off-chain data. Web3.storage offers free decentralized storage and bandwidth on ",(0,n.jsx)(t.a,{href:"https://ipfs.io/",children:"IPFS"})," and ",(0,n.jsx)(t.a,{href:"https://filecoin.io/",children:"Filecoin"}),". Web3.storage offers free decentralized storage and bandwidth on ",(0,n.jsx)(t.a,{href:"https://ipfs.io/",children:"IPFS"})," and ",(0,n.jsx)(t.a,{href:"https://filecoin.io/",children:"Filecoin"}),"."]}),(0,n.jsx)(t.h4,{id:"steps",children:"Steps"}),(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Register an account and log in to ",(0,n.jsx)(t.a,{href:"https://web3.storage/",children:"web3.storage"})," either via email or your GitHub."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Go to the ",(0,n.jsx)(t.a,{href:"https://web3.storage/",children:"Files"})," section, and click on the ",(0,n.jsx)(t.a,{href:"https://web3.storage/",children:"Upload more Files"})," button."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"web3.storage",src:i(4755).Z+"",width:"1310",height:"1386"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Once you have uploaded your file, you'll get a unique ",(0,n.jsx)(t.code,{children:"CID"})," for your content, and a URL similar to:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"https://bafybeidadhfilezx23dcdaueo3bjuafqeehokw33vyepkjtppigorrhbpy.ipfs.dweb.link/\n"})}),"\n"]}),"\n"]}),(0,n.jsxs)(t.admonition,{type:"info",children:[(0,n.jsxs)(t.mdxAdmonitionTitle,{children:["See the ",(0,n.jsx)(t.a,{href:"https://docs.web3.storage/",children:"web3.storage docs"})," for information on uploading multiple files and available API endpoints. :::"]}),(0,n.jsx)(t.h3,{id:"interacting-with-the-contract",children:"Interacting With the Contract"}),(0,n.jsxs)(t.p,{children:["NEAR has already deployed a contract to the account ",(0,n.jsx)(t.code,{children:"nft.examples.testnet"})," which allows users to freely mint tokens. This is the account we'll be interacting with to mint our NFTs. Alternatively, if you've deployed a contract when following the original tutorial, you can use that as well. This is the account we'll be interacting with to mint our NFTs. Alternatively, if you've deployed a contract when following the original tutorial, you can use that as well."]}),(0,n.jsxs)(t.admonition,{type:"info",children:[(0,n.jsxs)(t.mdxAdmonitionTitle,{children:["We'll be using the IPFS link we got in step three of the uploading process above as the media value when calling ",(0,n.jsx)(t.code,{children:"nft_mint"}),". ::: :::"]}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Run the following command and replace the ",(0,n.jsx)(t.code,{children:"receiver_id"})," field and the ",(0,n.jsx)(t.code,{children:"--accountId"})," flag with the account ID you're ",(0,n.jsx)(t.a,{href:"/tools/near-cli#near-login",children:"logged into"})," with NEAR CLI:"]}),"\n"]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'near call nft.examples.testnet nft_mint \'{"token_id": "my-token-unique-id", "receiver_id": "YOUR_ACCOUNT", "metadata": { "title": "YOUR NFT TITLE", "description": "YOUR NFT DESCRIPTION", "media": "https://bafybeidadhfilezx23dcdaueo3bjuafqeehokw33vyepkjtppigorrhbpy.ipfs.dweb.link/", "copies": 1}}\' --accountId YOUR_ACCOUNT --deposit 0.1\n'})}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Be sure to replace the title, description and media URL with your own."}),"\n"]}),(0,n.jsxs)(l,{children:[(0,n.jsx)("summary",{children:"Example response: "}),(0,n.jsx)("p",{children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "token_id": "0",\n  "owner_id": "YOUR_ACCOUNT",\n  "metadata": {\n    "title": "My awesome Minecraft NFT",\n    "description": "Custom log cabin",\n    "media": "https://bafybeidadhfilezx23dcdaueo3bjuafqeehokw33vyepkjtppigorrhbpy.ipfs.dweb.link/",\n    "media_hash": null,\n    "copies": 1,\n    "issued_at": null,\n    "expires_at": null,\n    "starts_at": null,\n    "updated_at": null,\n    "extra": null,\n    "reference": null,\n    "reference_hash": null\n  },\n  "approved_account_ids": {}\n}\n'})})})]}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["To view tokens owned by an account on the ",(0,n.jsx)(t.code,{children:"example-nft"})," contract, you can call the contract with the following ",(0,n.jsx)(t.code,{children:"near-cli"})," command:"]}),"\n"]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'near view nft.examples.testnet nft_tokens_for_owner \'{"account_id": "YOUR_ACCOUNT"}\'\n'})}),(0,n.jsxs)(l,{children:[(0,n.jsx)("summary",{children:"Example response: "}),(0,n.jsx)("p",{children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'[\n  {\n    "token_id": "0",\n    "owner_id": "YOUR_ACCOUNT",\n    "metadata": {\n      "title": "Some Art",\n      "description": "My NFT media",\n      "media": "https://bafybeidadhfilezx23dcdaueo3bjuafqeehokw33vyepkjtppigorrhbpy.ipfs.dweb.link/",\n      "media_hash": null,\n      "copies": 1,\n      "issued_at": null,\n      "expires_at": null,\n      "starts_at": null,\n      "updated_at": null,\n      "extra": null,\n      "reference": null,\n      "reference_hash": null\n    },\n    "approved_account_ids": {}\n  }\n]\n'})})})]}),(0,n.jsx)(t.h2,{id:"using-the-village-schematic",children:"Using the Village Schematic"}),(0,n.jsxs)(t.p,{children:["Now that you've uploaded your schematic to the blockchain, all someone would need to do to paste it in their own world would be to download the ",(0,n.jsx)(t.code,{children:"*.schem"})," file associated with the IPFS link we minted the NFT with and place it in their schematics folder."]}),(0,n.jsx)(t.p,{children:"As a test, we've minted an NFT that contains the village schematic we've been working with so that you can download it and paste it in your world."}),(0,n.jsx)(t.h3,{id:"getting-the-schematics-file",children:"Getting the Schematics File"}),(0,n.jsxs)(t.p,{children:["The first thing you'll need to do is view the metadata for the token we've minted that contains the IPFS link to the village schematic. We've minted a token with the ID ",(0,n.jsx)(t.code,{children:"village-schematic"})," under the account ",(0,n.jsx)(t.code,{children:"village-schematic.testnet"}),". We've minted a token with the ID ",(0,n.jsx)(t.code,{children:"village-schematic"})," under the account ",(0,n.jsx)(t.code,{children:"village-schematic.testnet"}),"."]}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"To get the media link, run the following command:"}),"\n"]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'near view nft.examples.testnet nft_tokens_for_owner \'{"account_id": "village-schematic.testnet"}\'\n'})}),(0,n.jsxs)(l,{children:[(0,n.jsx)("summary",{children:"Expected response: "}),(0,n.jsx)("p",{children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"[\n  {\n    token_id: 'village-schematic',\n    owner_id: 'village-schematic.testnet',\n    metadata: {\n      title: 'Village Schematic',\n      description: 'Blockcraft Village Schematic Tutorial NFT',\n      media: 'https://bafybeidadhfilezx23dcdaueo3bjuafqeehokw33vyepkjtppigorrhbpy.ipfs.dweb.link/',\n      media_hash: null,\n      copies: 1,\n      issued_at: null,\n      expires_at: null,\n      starts_at: null,\n      updated_at: null,\n      extra: null,\n      reference: null,\n      reference_hash: null\n    },\n    approved_account_ids: {}\n  }\n]\n"})})})]}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"You can then take the media link and paste it into your browser. It should send you to a page that looks similar to this: It should send you to a page that looks similar to this:"}),"\n"]}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"IPFS Village Schem",src:i(39954).Z+"",width:"1791",height:"246"})}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["If you click on the file called ",(0,n.jsx)(t.code,{children:"village-house.schem"}),", it will download the file."]}),"\n",(0,n.jsxs)(t.li,{children:["You can then copy the schematics file and paste it into your ",(0,n.jsx)(t.code,{children:"minecraft/config/worldedit/schematics"})," folder."]}),"\n"]}),(0,n.jsx)(t.h3,{id:"loading-the-schematics-file-in-minecraft",children:"Loading the Schematics File in Minecraft"}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["After you've pasted the schematics file into the ",(0,n.jsx)(t.code,{children:"minecraft/config/worldedit/schematics"})," folder, you can then load the schematic into your clipboard by running the following command in your minecraft world:"]}),"\n"]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"//schematics load village-house\n"})}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["You can now paste the file anywhere in your world by simply using the ",(0,n.jsx)(t.code,{children:"//paste"})," command and voila! You should see something similar to this: You should see something similar to this:"]}),"\n"]}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Final Village Pasting",src:i(96242).Z+"",width:"1591",height:"725"})}),(0,n.jsx)(t.p,{children:"Congratulations! Congratulations! You've just learned how to mint a Mincraft schematic NFT and load it into your world!"}),(0,n.jsx)(t.h2,{id:"versioning-for-this-article",children:"Versioning for this article"}),(0,n.jsx)(t.p,{children:"At the time of this writing, this example works with the following versions:"}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["near-cli: ",(0,n.jsx)(t.code,{children:"2.1.1"})]}),"\n"]})]})]})]})]})]})}function d(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},39954:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/IPFS-village-schem-11088526ea0780cbf5087de6040a8200.png"},34165:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/copy-chat-message-minecraft-442184b9b6df91847fd479ee28d348b0.png"},96242:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/final-village-pasting-25b903313ab6ed3ad823166f4feafb18.png"},6953:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/pasted-minecraft-house-3a2281606809f2b014baea4ce3abfd12.png"},63038:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/village-house-minecraft-763c254984a6508a8a2aed8e91d4d8b2.png"},4755:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/web3-storage-upload-7506057b35a2070c280fa77848fcfc78.png"},11151:(e,t,i)=>{i.d(t,{Z:()=>o,a:()=>a});var n=i(67294);const s={},l=n.createContext(s);function a(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);