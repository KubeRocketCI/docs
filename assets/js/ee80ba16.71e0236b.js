"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[16564],{8189:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>l,frontMatter:()=>r,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"user-guide/add-ai-assistant","title":"Add Gen AI Assistant","description":"Integrate a third-party AI assistant within KubeRocketCI to enhance platform navigation and obtain instant answers to queries directly in chat.","source":"@site/docs/user-guide/add-ai-assistant.md","sourceDirName":"user-guide","slug":"/user-guide/add-ai-assistant","permalink":"/docs/next/user-guide/add-ai-assistant","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/user-guide/add-ai-assistant.md","tags":[],"version":"current","lastUpdatedBy":"Sergiy Kulanov","lastUpdatedAt":1740847812000,"frontMatter":{"title":"Add Gen AI Assistant","sidebar_label":"Add Gen AI Assistant","description":"Integrate a third-party AI assistant within KubeRocketCI to enhance platform navigation and obtain instant answers to queries directly in chat."},"sidebar":"userGuideSidebar","previous":{"title":"Change Container Registry","permalink":"/docs/next/user-guide/change-container-registry"},"next":{"title":"KubeRocketCI Widgets","permalink":"/docs/next/user-guide/widgets"}}');var i=n(74848),a=n(28453);const r={title:"Add Gen AI Assistant",sidebar_label:"Add Gen AI Assistant",description:"Integrate a third-party AI assistant within KubeRocketCI to enhance platform navigation and obtain instant answers to queries directly in chat."},o="Add Gen AI Assistant",d={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Set Up Integration",id:"set-up-integration",level:2},{value:"Verify Integration",id:"verify-integration",level:2}];function h(t){const e={a:"a",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...t.components},{Head:s}=e;return s||function(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"add-gen-ai-assistant",children:"Add Gen AI Assistant"})}),"\n",(0,i.jsx)(s,{children:(0,i.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/user-guide/add-ai-assistant"})}),"\n",(0,i.jsx)(e.p,{children:"The KubeRocketCI portal allows you to connect the platform with a third-party AI assistant, enabling its use within the platform. This integration assists by providing platform-related information and answering any questions in the chat. The assistant's configuration is performed via the Configuration tab in the Gen AI section."}),"\n",(0,i.jsx)(e.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(e.p,{children:["This option requires you to have your AI assistant configured on a dedicated instance first. Besides, assistant should be set up in the way it will have the ",(0,i.jsx)(e.a,{href:"https://github.com/KubeRocketCI/docs",children:"KubeRocketCI documentation"})," data indexed and added to the assistant's context. Therefore, before starting the integration procedure, ensure that your Gen AI instance is set up properly."]}),"\n",(0,i.jsx)(e.h2,{id:"set-up-integration",children:"Set Up Integration"}),"\n",(0,i.jsx)(e.p,{children:"To integrate the AI assistant, follow the steps below:"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["Navigate to ",(0,i.jsx)(e.strong,{children:"KubeRocketCI"})," -> ",(0,i.jsx)(e.strong,{children:"Configuration"})," -> ",(0,i.jsx)(e.strong,{children:"Gen AI"})," and click the ",(0,i.jsx)(e.strong,{children:"+ Add link"})," button:"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"Add quick link",src:n(39931).A+"",title:"Add quick link",width:"1918",height:"1112"})}),"\n",(0,i.jsxs)(e.ol,{start:"2",children:["\n",(0,i.jsxs)(e.li,{children:["Fill in the fields and click ",(0,i.jsx)(e.strong,{children:"Create"}),":"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"Set up quick link",src:n(34925).A+"",title:"Set up quick link",width:"1918",height:"1111"})}),"\n",(0,i.jsxs)(e.ol,{start:"3",children:["\n",(0,i.jsxs)(e.li,{children:["Navigate to ",(0,i.jsx)(e.strong,{children:"KubeRocketCI"})," -> ",(0,i.jsx)(e.strong,{children:"Configuration"})," -> ",(0,i.jsx)(e.strong,{children:"Gen AI"})," and click the ",(0,i.jsx)(e.strong,{children:"+ Add integration"})," button:"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"Integrate Gen AI",src:n(20680).A+"",title:"Integrate Gen AI",width:"1919",height:"1111"})}),"\n",(0,i.jsxs)(e.ol,{start:"4",children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Fill in the required fields:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Quick Link URL"})," - This link will be attached to the quick links presented on the KubeRocketCI portal main page. It should lead to the Gen AI instance endpoint."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"API URL"})," - This is the URL address of the assistant's API server."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Assistant ID"})," - Enter the ID of a dedicated assistant that will be used to interact with you."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Token"})," - This token will be used to get authorized access to your Gen AI instance. Ensure that sufficient permissions are set so that the platform can interact with the assistant using this token."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"Integrate Gen AI",src:n(1747).A+"",title:"Integrate Gen AI",width:"1916",height:"1109"})}),"\n",(0,i.jsxs)(e.ol,{start:"5",children:["\n",(0,i.jsxs)(e.li,{children:["Click the ",(0,i.jsx)(e.strong,{children:"Save"})," button."]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"verify-integration",children:"Verify Integration"}),"\n",(0,i.jsx)(e.p,{children:"As soon as the integration procedure is completed, click the AI chat button at the bottom-right corner of the screen:"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"AI chat window",src:n(22593).A+"",title:"AI chat window",width:"1919",height:"1112"})}),"\n",(0,i.jsx)(e.p,{children:"Type something in the chat to make sure the assistant works properly:"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"Ask assistant",src:n(85767).A+"",title:"Ask assistant",width:"1920",height:"1113"})}),"\n",(0,i.jsx)(e.p,{children:"When you close the chat and reopen it, a new chat begins. You can see the chat history by clicking the clock icon:"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"Chat history button",src:n(37435).A+"",title:"Chat history button",width:"1920",height:"1113"})}),"\n",(0,i.jsxs)(e.p,{children:["You can also create another chat by clicking the ",(0,i.jsx)(e.strong,{children:"+ New chat"})," button:"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"Create new chat",src:n(72297).A+"",title:"Create new chat",width:"1922",height:"1114"})}),"\n",(0,i.jsx)(e.p,{children:"Depending on the assistant's settings, it will be able to provide platform-related guidance, such as how to onboard a library or deploy an application, and address any questions you may have."})]})}function l(t={}){const{wrapper:e}={...(0,a.R)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(h,{...t})}):h(t)}},34925:(t,e,n)=>{n.d(e,{A:()=>s});const s=n.p+"assets/images/add-gen-ai-quick-link-7d211593a3de7f6770c9999a08368aed.png"},20680:(t,e,n)=>{n.d(e,{A:()=>s});const s=n.p+"assets/images/add-gen-ai-9fd8856c601fc28d01882787f5e0347f.png"},39931:(t,e,n)=>{n.d(e,{A:()=>s});const s=n.p+"assets/images/add-link-for-gen-ai-c4ba18be582b25b24fc7e84e973b9007.png"},22593:(t,e,n)=>{n.d(e,{A:()=>s});const s=n.p+"assets/images/ai-chat-button-73c6e988e6f31b0fdffc163d48e2c16e.png"},72297:(t,e,n)=>{n.d(e,{A:()=>s});const s=n.p+"assets/images/ai-chat-history-ed56b8bc5afbcf90cb1fd7235b939f0c.png"},85767:(t,e,n)=>{n.d(e,{A:()=>s});const s=n.p+"assets/images/ask-assistant-d8ddfeb15843a623dacde6d2c199bbd4.png"},1747:(t,e,n)=>{n.d(e,{A:()=>s});const s=n.p+"assets/images/gen-ai-integration-42c9b6d1e797b8c1b0afbbe379f3c090.png"},37435:(t,e,n)=>{n.d(e,{A:()=>s});const s=n.p+"assets/images/history_button-4aefb46a847d7c86048ed84e34cce636.png"},28453:(t,e,n)=>{n.d(e,{R:()=>r,x:()=>o});var s=n(96540);const i={},a=s.createContext(i);function r(t){const e=s.useContext(a);return s.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function o(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:r(t.components),s.createElement(a.Provider,{value:e},t.children)}}}]);