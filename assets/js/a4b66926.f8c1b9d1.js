"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[25727],{41533:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"quick-start/integrate-container-registry","title":"Integrate DockerHub","description":"KubeRocketCI utilizes container registries for storing and distributing application images. This page provides instructions on integrating your platform with DockerHub.","source":"@site/docs/quick-start/integrate-container-registry.md","sourceDirName":"quick-start","slug":"/quick-start/integrate-container-registry","permalink":"/docs/next/quick-start/integrate-container-registry","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/quick-start/integrate-container-registry.md","tags":[],"version":"current","lastUpdatedBy":"Mykola Serdiuk","lastUpdatedAt":1720114520000,"frontMatter":{},"sidebar":"quickStartSidebar","previous":{"title":"Integrate GitHub","permalink":"/docs/next/quick-start/integrate-github"},"next":{"title":"Create Application","permalink":"/docs/next/quick-start/create-application"}}');var r=n(74848),s=n(28453);const c={},o="Integrate DockerHub",a={},l=[{value:"Integration Procedure",id:"integration-procedure",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"integrate-dockerhub",children:"Integrate DockerHub"})}),"\n",(0,r.jsx)(t.p,{children:"KubeRocketCI utilizes container registries for storing and distributing application images. This page provides instructions on integrating your platform with DockerHub."}),"\n",(0,r.jsx)(t.h2,{id:"integration-procedure",children:"Integration Procedure"}),"\n",(0,r.jsx)(t.p,{children:"To integrate KubeRocketCI with DockerHub, follow the steps below:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Log in to your DockerHub account."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["In the DockerHub main page, click your user icon at the top right corner and select ",(0,r.jsx)(t.strong,{children:"Account Settings"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["In the ",(0,r.jsx)(t.strong,{children:"Account Settings"})," page, select the ",(0,r.jsx)(t.strong,{children:"Security"})," tab and click ",(0,r.jsx)(t.strong,{children:"New Access Token"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Enter the token description, select the ",(0,r.jsx)(t.strong,{children:"Read, Write, Delete"})," permission and click ",(0,r.jsx)(t.strong,{children:"Generate"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Copy the generated token:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"DockerHub token",src:n(2235).A+"",title:"DockerHub token",width:"1901",height:"864"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["In the UI Portal, navigate to ",(0,r.jsx)(t.strong,{children:"Configuration"})," -> ",(0,r.jsx)(t.strong,{children:"Registry"})," and click the ",(0,r.jsx)(t.strong,{children:"Add Registry"})," button."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["In the ",(0,r.jsx)(t.strong,{children:"Registry Provider"})," field, select ",(0,r.jsx)(t.strong,{children:"DockerHub"}),". Define the following values and click ",(0,r.jsx)(t.strong,{children:"Save"}),":"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Registry Endpoint: ",(0,r.jsx)(t.code,{children:"https://docker.io"})]}),"\n",(0,r.jsxs)(t.li,{children:["Registry Space: ",(0,r.jsx)(t.code,{children:"DockerHub account name"})]}),"\n",(0,r.jsxs)(t.li,{children:["User: ",(0,r.jsx)(t.code,{children:"DockerHub account name"})]}),"\n",(0,r.jsxs)(t.li,{children:["Password/Token: ",(0,r.jsx)(t.code,{children:"Your generated access token"})]}),"\n",(0,r.jsxs)(t.li,{children:["Use the Push Account's credentials: ",(0,r.jsx)(t.code,{children:"check"})]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"DockerHub integration",src:n(5318).A+"",title:"DockerHub integration",width:"1919",height:"1112"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["In the DockerHub context, the ",(0,r.jsx)(t.strong,{children:"Registry Space"})," field is equivalent to the account/organization name."]})}),"\n",(0,r.jsxs)(t.p,{children:["With all integrations in place, let's proceed to the ",(0,r.jsx)(t.a,{href:"/docs/next/quick-start/create-application",children:"Create Application"})," page for further instructions on how to create applications using KubeRocketCI."]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},2235:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/dockerhub_token-273b251e7c45e2c8762e10a2cd263e93.png"},5318:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/integrate_docker-3a11363b15497e9b745f9357957b583c.png"},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>o});var i=n(96540);const r={},s=i.createContext(r);function c(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);