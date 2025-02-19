"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[5889],{94005:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"user-guide/cluster","title":"Manage Clusters","description":"Learn how to manage Kubernetes clusters within KubeRocketCI Portal, including viewing authentication data and deleting clusters for streamlined infrastructure management.","source":"@site/docs/user-guide/cluster.md","sourceDirName":"user-guide","slug":"/user-guide/cluster","permalink":"/docs/next/user-guide/cluster","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/user-guide/cluster.md","tags":[],"version":"current","lastUpdatedBy":"Oleksandr_Stepanov@epam.com","lastUpdatedAt":1739954692000,"frontMatter":{"title":"Manage Clusters","description":"Learn how to manage Kubernetes clusters within KubeRocketCI Portal, including viewing authentication data and deleting clusters for streamlined infrastructure management.","sidebar_label":"Manage Clusters"},"sidebar":"userGuideSidebar","previous":{"title":"Add Cluster","permalink":"/docs/next/user-guide/add-cluster"},"next":{"title":"Manage Clusters","permalink":"/docs/next/user-guide/gitops"}}');var r=s(74848),i=s(28453);const l={title:"Manage Clusters",description:"Learn how to manage Kubernetes clusters within KubeRocketCI Portal, including viewing authentication data and deleting clusters for streamlined infrastructure management.",sidebar_label:"Manage Clusters"},c="Manage Clusters",a={},d=[{value:"View Authentication Data",id:"view-authentication-data",level:2},{value:"Delete Cluster",id:"delete-cluster",level:2},{value:"Related Articles",id:"related-articles",level:2}];function o(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{Head:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"manage-clusters",children:"Manage Clusters"})}),"\n",(0,r.jsx)(n,{children:(0,r.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/user-guide/cluster/"})}),"\n",(0,r.jsx)(t.p,{children:"This section describes the subsequent possible actions that can be performed with the newly added or existing clusters."}),"\n",(0,r.jsx)(t.p,{children:"In a nutshell, cluster in KubeRocketCI Portal is a Kubernetes secret that stores credentials and endpoint to connect to the another cluster. Adding new clusters allows users to deploy applications in several clusters, thus improving flexibility of your infrastructure."}),"\n",(0,r.jsx)(t.p,{children:"The added cluster will be listed in the clusters list allowing you to do the following:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Clusters list",src:s(92743).A+"",title:"Clusters list",width:"2882",height:"1300"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Open documentation"})," - opens the cluster related documentation page."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Add a new cluster"})," - displays the cluster creation form."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Cluster properties"})," - shows the specified cluster properties."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Delete cluster"})," - remove cluster by clicking the recycle bin icon."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Undo/Save changes"})," - these buttons apply or revert changes made to the cluster configuration."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"view-authentication-data",children:"View Authentication Data"}),"\n",(0,r.jsxs)(t.p,{children:["To view authentication data that is used to log in to the cluster, run the ",(0,r.jsx)(t.code,{children:"kubectl describe"})," command:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"kubectl describe secret cluster_name -n edp\n"})}),"\n",(0,r.jsx)(t.h2,{id:"delete-cluster",children:"Delete Cluster"}),"\n",(0,r.jsxs)(t.p,{children:["To delete cluster, use the ",(0,r.jsx)(t.code,{children:"kubectl delete"})," command as follows:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"kubectl delete secret cluster_name -n edp\n"})}),"\n",(0,r.jsx)(t.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/docs/next/user-guide/add-cluster",children:"Add Cluster"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/docs/next/user-guide/add-application",children:"Add Application"})}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},92743:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/krci-portal-cluster-overview-448fa4ccadc9374b7479fa50621b7bb3.png"},28453:(e,t,s)=>{s.d(t,{R:()=>l,x:()=>c});var n=s(96540);const r={},i=n.createContext(r);function l(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);