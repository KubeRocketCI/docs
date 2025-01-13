"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[16564],{97714:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>l,frontMatter:()=>r,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"user-guide/add-ai-assistant","title":"Add Gen AI Assistant","description":"The KubeRocketCI portal allows you to connect the platform with a third-party AI assistant, enabling its use within the platform. This integration assists by providing platform-related information and answering any questions in the chat. The assistant\'s configuration is performed via the Configuration tab in the Gen AI section.","source":"@site/docs/user-guide/add-ai-assistant.md","sourceDirName":"user-guide","slug":"/user-guide/add-ai-assistant","permalink":"/docs/next/user-guide/add-ai-assistant","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/user-guide/add-ai-assistant.md","tags":[],"version":"current","lastUpdatedBy":"Oleksandr_Stepanov@epam.com","lastUpdatedAt":1729773761000,"frontMatter":{},"sidebar":"userGuideSidebar","previous":{"title":"Change Container Registry","permalink":"/docs/next/user-guide/change-container-registry"},"next":{"title":"Platform Cleanup Guide","permalink":"/docs/next/user-guide/platform-cleanup-guide"}}');var i=n(74848),a=n(28453);const r={},o="Add Gen AI Assistant",d={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Set Up Integration",id:"set-up-integration",level:2},{value:"Verify Integration",id:"verify-integration",level:2}];function h(e){const t={a:"a",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"add-gen-ai-assistant",children:"Add Gen AI Assistant"})}),"\n",(0,i.jsx)(t.p,{children:"The KubeRocketCI portal allows you to connect the platform with a third-party AI assistant, enabling its use within the platform. This integration assists by providing platform-related information and answering any questions in the chat. The assistant's configuration is performed via the Configuration tab in the Gen AI section."}),"\n",(0,i.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(t.p,{children:["This option requires you to have your AI assistant configured on a dedicated instance first. Besides, assistant should be set up in the way it will have the ",(0,i.jsx)(t.a,{href:"https://github.com/KubeRocketCI/docs",children:"KubeRocketCI documentation"})," data indexed and added to the assistant's context. Therefore, before starting the integration procedure, ensure that your Gen AI instance is set up properly."]}),"\n",(0,i.jsx)(t.h2,{id:"set-up-integration",children:"Set Up Integration"}),"\n",(0,i.jsx)(t.p,{children:"To integrate the AI assistant, follow the steps below:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Navigate to ",(0,i.jsx)(t.strong,{children:"KubeRocketCI"})," -> ",(0,i.jsx)(t.strong,{children:"Configuration"})," -> ",(0,i.jsx)(t.strong,{children:"Gen AI"})," and click the ",(0,i.jsx)(t.strong,{children:"+ Add link"})," button:"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Add quick link",src:n(2828).A+"",title:"Add quick link",width:"1918",height:"1112"})}),"\n",(0,i.jsxs)(t.ol,{start:"2",children:["\n",(0,i.jsxs)(t.li,{children:["Fill in the fields and click ",(0,i.jsx)(t.strong,{children:"Create"}),":"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Set up quick link",src:n(57774).A+"",title:"Set up quick link",width:"1918",height:"1111"})}),"\n",(0,i.jsxs)(t.ol,{start:"3",children:["\n",(0,i.jsxs)(t.li,{children:["Navigate to ",(0,i.jsx)(t.strong,{children:"KubeRocketCI"})," -> ",(0,i.jsx)(t.strong,{children:"Configuration"})," -> ",(0,i.jsx)(t.strong,{children:"Gen AI"})," and click the ",(0,i.jsx)(t.strong,{children:"+ Add integration"})," button:"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Integrate Gen AI",src:n(12997).A+"",title:"Integrate Gen AI",width:"1919",height:"1111"})}),"\n",(0,i.jsxs)(t.ol,{start:"4",children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Fill in the required fields:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Quick Link URL"})," - This link will be attached to the quick links presented on the KubeRocketCI portal main page. It should lead to the Gen AI instance endpoint."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"API URL"})," - This is the URL address of the assistant's API server."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Assistant ID"})," - Enter the ID of a dedicated assistant that will be used to interact with you."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Token"})," - This token will be used to get authorized access to your Gen AI instance. Ensure that sufficient permissions are set so that the platform can interact with the assistant using this token."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Integrate Gen AI",src:n(1554).A+"",title:"Integrate Gen AI",width:"1916",height:"1109"})}),"\n",(0,i.jsxs)(t.ol,{start:"5",children:["\n",(0,i.jsxs)(t.li,{children:["Click the ",(0,i.jsx)(t.strong,{children:"Save"})," button."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"verify-integration",children:"Verify Integration"}),"\n",(0,i.jsx)(t.p,{children:"As soon as the integration procedure is completed, click the AI chat button at the bottom-right corner of the screen:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"AI chat window",src:n(8964).A+"",title:"AI chat window",width:"1919",height:"1112"})}),"\n",(0,i.jsx)(t.p,{children:"Type something in the chat to make sure the assistant works properly:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Ask assistant",src:n(79656).A+"",title:"Ask assistant",width:"1920",height:"1113"})}),"\n",(0,i.jsx)(t.p,{children:"When you close the chat and reopen it, a new chat begins. You can see the chat history by clicking the clock icon:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Chat history button",src:n(81105).A+"",title:"Chat history button",width:"1920",height:"1113"})}),"\n",(0,i.jsxs)(t.p,{children:["You can also create another chat by clicking the ",(0,i.jsx)(t.strong,{children:"+ New chat"})," button:"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Create new chat",src:n(96314).A+"",title:"Create new chat",width:"1922",height:"1114"})}),"\n",(0,i.jsx)(t.p,{children:"Depending on the assistant's settings, it will be able to provide platform-related guidance, such as how to onboard a library or deploy an application, and address any questions you may have."})]})}function l(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},57774:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/add-gen-ai-quick-link-7d211593a3de7f6770c9999a08368aed.png"},12997:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/add-gen-ai-9fd8856c601fc28d01882787f5e0347f.png"},2828:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/add-link-for-gen-ai-c4ba18be582b25b24fc7e84e973b9007.png"},8964:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/ai-chat-button-73c6e988e6f31b0fdffc163d48e2c16e.png"},96314:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/ai-chat-history-ed56b8bc5afbcf90cb1fd7235b939f0c.png"},79656:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/ask-assistant-d8ddfeb15843a623dacde6d2c199bbd4.png"},1554:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/gen-ai-integration-42c9b6d1e797b8c1b0afbbe379f3c090.png"},81105:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/history_button-4aefb46a847d7c86048ed84e34cce636.png"},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var s=n(96540);const i={},a=s.createContext(i);function r(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);