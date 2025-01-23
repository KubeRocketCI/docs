"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[17640],{13213:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"operator-guide/uninstall-kuberocketci","title":"Uninstall KubeRocketCI","description":"This guide offers comprehensive steps for effectively removing the KubeRocketCI from your system.","source":"@site/docs/operator-guide/uninstall-kuberocketci.md","sourceDirName":"operator-guide","slug":"/operator-guide/uninstall-kuberocketci","permalink":"/docs/next/operator-guide/uninstall-kuberocketci","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/operator-guide/uninstall-kuberocketci.md","tags":[],"version":"current","lastUpdatedBy":"Sergiy Kulanov","lastUpdatedAt":1737662090000,"frontMatter":{},"sidebar":"operatorGuideSidebar","previous":{"title":"KrakenD Integration","permalink":"/docs/next/operator-guide/extensions/krakend"},"next":{"title":"Overview","permalink":"/docs/next/operator-guide/auth/platform-auth-model"}}');var o=t(74848),i=t(28453);const l={},s="Uninstall KubeRocketCI",c={},a=[{value:"Deletion Procedure",id:"deletion-procedure",level:2},{value:"Related Articles",id:"related-articles",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components},{Head:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"uninstall-kuberocketci",children:"Uninstall KubeRocketCI"})}),"\n",(0,o.jsx)(t,{children:(0,o.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/operator-guide/uninstall-kuberocketci/"})}),"\n",(0,o.jsx)(n.p,{children:"This guide offers comprehensive steps for effectively removing the KubeRocketCI from your system."}),"\n",(0,o.jsx)(n.h2,{id:"deletion-procedure",children:"Deletion Procedure"}),"\n",(0,o.jsx)(n.p,{children:"To uninstall platform, perform the following steps:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"It is highly recommended to delete all the resources created via Portal UI first, such as:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Applications;"}),"\n",(0,o.jsx)(n.li,{children:"Libraries;"}),"\n",(0,o.jsx)(n.li,{children:"Autotests;"}),"\n",(0,o.jsx)(n.li,{children:"Infrastructures;"}),"\n",(0,o.jsx)(n.li,{children:"CD Pipelines."}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["We advise removing them through the KubeRocketCI Portal interface. However, you can also eliminate all KubeRocketCI Portal resources by running the ",(0,o.jsx)(n.code,{children:"kubectl delete"})," command."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Uninstall KubeRocketCI:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"If you deployed KubeRocketCI via Helm, run the following command:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"helm uninstall edp-install -n <namespace>\n"})}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Replace ",(0,o.jsx)(n.code,{children:"<namespace>"})," with the namespace where KubeRocketCI was deployed."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"If you deployed platform via Argo Application, delete the Argo Application:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"kubectl delete application <platform-application-name> -n argo\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/docs/next/operator-guide/install-kuberocketci",children:"Install KubeRocketCI"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>s});var r=t(96540);const o={},i=r.createContext(o);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);