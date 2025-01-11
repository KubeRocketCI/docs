"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[28319],{80819:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"developer-guide/local-development","title":"Operator Development","description":"This page is intended for developers with the aim to share details on how to set up the local environment and start coding in Go language for KubeRocketCI.","source":"@site/versioned_docs/version-3.9/developer-guide/local-development.md","sourceDirName":"developer-guide","slug":"/developer-guide/local-development","permalink":"/docs/3.9/developer-guide/local-development","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/developer-guide/local-development.md","tags":[],"version":"3.9","lastUpdatedBy":"Sergiy Kulanov","lastUpdatedAt":1730106685000,"frontMatter":{},"sidebar":"developerGuideSidebar","previous":{"title":"KubeRocketCI Contribution","permalink":"/docs/3.9/developer-guide/edp-workflow"},"next":{"title":"Working With Documentation","permalink":"/docs/3.9/developer-guide/documentation-guide"}}');var s=i(74848),o=i(28453);const r={},l="Operator Development",d={},a=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Environment Setup",id:"environment-setup",level:2},{value:"Set Up Your IDE",id:"set-up-your-ide",level:3},{value:"Set Up Your Operator",id:"set-up-your-operator",level:4},{value:"Pre-commit Activities",id:"pre-commit-activities",level:2},{value:"Testing and Linting",id:"testing-and-linting",level:3},{value:"Observe Auto-Generated Docs, API and Manifests",id:"observe-auto-generated-docs-api-and-manifests",level:4},{value:"Related Articles",id:"related-articles",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"operator-development",children:"Operator Development"})}),"\n",(0,s.jsx)(n.p,{children:"This page is intended for developers with the aim to share details on how to set up the local environment and start coding in Go language for KubeRocketCI."}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/git-guides/install-git",children:"Git"})," is installed;"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["One of our ",(0,s.jsx)(n.a,{href:"https://github.com/epam/edp-install/blob/master/README.md#edp-repositories-description",children:"repositories"})," where you would like to contribute is cloned locally;"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://docs.docker.com/engine/install/",children:"Docker"})," is installed;"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://kubernetes.io/docs/setup/",children:"Kubectl"})," is set up;"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Local Kubernetes cluster (",(0,s.jsx)(n.a,{href:"https://kind.sigs.k8s.io/",children:"Kind"})," is recommended) is installed;"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://helm.sh/docs/intro/install/",children:"Helm"})," is installed;"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Any IDE (",(0,s.jsx)(n.a,{href:"https://www.jetbrains.com/go/",children:"GoLand"})," is used here as an example) is installed;"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://go.dev/dl/",children:"GoLang"})," stable version is installed."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"Make sure GOPATH and GOROOT environment variables are added in PATH."})}),"\n",(0,s.jsx)(n.h2,{id:"environment-setup",children:"Environment Setup"}),"\n",(0,s.jsx)(n.p,{children:"Set up your environment by following the steps below."}),"\n",(0,s.jsx)(n.h3,{id:"set-up-your-ide",children:"Set Up Your IDE"}),"\n",(0,s.jsx)(n.p,{children:"We recommend using  GoLand  and enabling the  Kubernetes  plugin. Before installing plugins, make sure to save your work because IDE may require restarting."}),"\n",(0,s.jsx)(n.h4,{id:"set-up-your-operator",children:"Set Up Your Operator"}),"\n",(0,s.jsx)(n.p,{children:"To set up the cloned operator, follow the three steps below:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Configure Go Build Option. Open folder in GoLand, click the ",(0,s.jsx)(n.img,{alt:"add_config_button",src:i(25906).A+"",title:"add_config_button",width:"167",height:"30"})," button and select the ",(0,s.jsx)(n.code,{children:"Go Build"})," option:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Add configuration",src:i(35229).A+"",title:"Add configuration",width:"1079",height:"686"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Fill in the variables in Configuration tab:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.code,{children:"Files"})," field, indicate the path to the main.go file;"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.code,{children:"Working directory"})," field, indicate the path to the operator;"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.code,{children:"Environment field"}),", specify the namespace to watch by setting ",(0,s.jsx)(n.code,{children:"WATCH_NAMESPACE"})," variable. It should equal ",(0,s.jsx)(n.code,{children:"default"})," but it can be any other if required by the cluster specifications."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.code,{children:"Environment field"}),", also specify the platform type by setting ",(0,s.jsx)(n.code,{children:"PLATFORM_TYPE"}),". It should equal either ",(0,s.jsx)(n.code,{children:"kubernetes"})," or ",(0,s.jsx)(n.code,{children:"openshift"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Build config",src:i(52186).A+"",title:"Build config",width:"1070",height:"676"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Check cluster connectivity and variables. Local development implies working within local Kubernetes clusters. ",(0,s.jsx)(n.a,{href:"https://kind.sigs.k8s.io/",children:"Kind"})," (Kubernetes in Docker) is recommended so set this or another environment first before running code."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"pre-commit-activities",children:"Pre-commit Activities"}),"\n",(0,s.jsx)(n.p,{children:"Before making commit and sending pull request, take care of precautionary measures to avoid crashing some other parts of the code."}),"\n",(0,s.jsx)(n.h3,{id:"testing-and-linting",children:"Testing and Linting"}),"\n",(0,s.jsxs)(n.p,{children:["Testing and linting must be used before every single commit with no exceptions. The instructions for the commands below are written ",(0,s.jsx)(n.a,{href:"https://github.com/epam/edp-keycloak-operator/blob/master/Makefile",children:"here"}),"."]}),"\n",(0,s.jsx)(n.p,{children:'It is mandatory to run test and lint to make sure the code passes the tests and meets acceptance criteria. Most operators are covered by tests so just run them by issuing the commands "make test" and "make lint":'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"make test\n"})}),"\n",(0,s.jsx)(n.p,{children:'The command "make test" should give the output similar to the following:'}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Tests directory for one of the operators",src:i(20214).A+"",width:"1541",height:"900"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"make lint\n"})}),"\n",(0,s.jsx)(n.p,{children:'The command "make lint" should give the output similar to the following:'}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Tests directory for one of the operators",src:i(10281).A+"",width:"1530",height:"903"})}),"\n",(0,s.jsx)(n.h4,{id:"observe-auto-generated-docs-api-and-manifests",children:"Observe Auto-Generated Docs, API and Manifests"}),"\n",(0,s.jsx)(n.p,{children:"The commands below are especially essential when making changes to API. The code is unsatisfactory if these commands fail."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Generate documentation in the .MD file format so the developer can read it:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"make api-docs\n"})}),"\n",(0,s.jsx)(n.p,{children:'The command "make api-docs" should give the output similar to the following:'}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"&quot;make api-docs&quot; command with the file contents",src:i(61335).A+"",width:"1547",height:"932"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"There are also manifests within the operator that generate zz_generated.deepcopy.go file in /api/v1 directory. This file is necessary for the platform to work but it's time-consuming to fill it by yourself so there is a mechanism that does it automatically. Update it using the following command and check if it looks properly:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"make generate\n"})}),"\n",(0,s.jsx)(n.p,{children:'The command "make generate" should give the output similar to the following:'}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"&quot;make generate&quot; command",src:i(52735).A+"",width:"1540",height:"932"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Refresh custom resource definitions for Kubernetes, thus allowing the cluster to know what resources it deals with."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"make manifests\n"})}),"\n",(0,s.jsx)(n.p,{children:'The command "make manifests" should give the output similar to the following:'}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"&quot;make manifests&quot; command",src:i(4326).A+"",width:"1537",height:"899"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"At the end of the procedure, you can push your code confidently to your branch and create a pull request."}),"\n",(0,s.jsx)(n.p,{children:"That's it, you're all set! Good luck in coding!"}),"\n",(0,s.jsx)(n.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/3.9/developer-guide/edp-workflow",children:"KubeRocketCI Project Rules. Working Process"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},25906:(e,n,i)=>{i.d(n,{A:()=>t});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKcAAAAeCAMAAAB+Df5jAAAAilBMVEU8P0H/gABRUVEyMjJ+VUA6PmyTuqa7u7s6VYBJnFSTa0CTurppPkBTPkA6a5RIllNTf6a6uqalupQ6PlelurpplLqlpoBGhU+6lGylf1c+SUN+pro+UUS6poClf4BHkFE9Q0Gluqa6upQ/WUZCakp+pqaToKawppR+f5REek1+a0C6lJRSVIBFSEqX3b4fAAABq0lEQVRYw+2WC1ODMAzHUWEFxksn8nDIgG2+v//XM4k1ihUOjt6NeeR2DTT/jN8S2s64PA8zFluswy5OaQvnKTkNjTb9yXlSluH8OfPScZ7z2XMS5vz7nieO4+z71XEqL6yVyQ5scy9E4f9KC0TxVpl9GDaER3JSNRG0T20/Hs2/OO1bF4aXdpa1drsBOHU0J1QzbEIA7VFHWZQpnFhNtwtEP2deho2xBdBk26XeHEz7zsfyiYeV+eXg/sbDMAWECwRPQmTWGgeW4ZWF7lh7sRAphlMZ5pxh72cDA4KG2w41QAIqNTS6NqX7nOdO2xUEUiOoPUkmZXyXkZLB2znDV/DeYVBFjU2PUsTCJ0jH9ZQ+diUBOZZ9T+ICEwzezhnOuUskqKqGVoHVnsIJ7+cITpRtDlM5GVRVB4VPTErfoUC03mEGIdqcUoa/JaAq4vfYFYdbOfxROLtAdypnnFHzU8DClSEdL6DCRwfgbc4f6leaxM0W97eY1pHMGc9JoGGj8zzCguk4j1TQRu+5GRe+bk7d5zsdqbDhzJ5zir3/2//zg23hXEyrXZ2HfQCDtiVggxCakAAAAABJRU5ErkJggg=="},35229:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/add_configuration-73084a36a24889648279e022ad54f3d8.png"},61335:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/api-docs-f1f83eb45e21191369e1283369ea842b.png"},52186:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/build_config-f5eb4e22b1cbdde4e9aba11e8e434f82.png"},52735:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/make_generate-bba6b07aa53c3537bd1aff4f172a08bf.png"},10281:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/make_lint-96bbbe0c9bc5e197ac68394ac3533973.png"},4326:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/make_manifests-0ecf1782cce6af526996d04b9c3c48dc.png"},20214:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/make_test-c6dfebc5ecef9abc4c69278ff4388a63.png"},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>l});var t=i(96540);const s={},o=t.createContext(s);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);