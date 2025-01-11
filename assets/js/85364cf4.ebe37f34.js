"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[52672],{5812:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>n,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"operator-guide/ci/ci-pipeline-terraform","title":"CI Pipeline for Terraform","description":"KubeRocketCI ensures the implemented Terraform support by adding a separate component type called Infrastructure. The Infrastructure codebase type allows to work with Terraform code that is processed by means of stages in the Code-Review and Build pipelines.","source":"@site/versioned_docs/version-3.10/operator-guide/ci/ci-pipeline-terraform.md","sourceDirName":"operator-guide/ci","slug":"/operator-guide/ci/ci-pipeline-terraform","permalink":"/docs/operator-guide/ci/ci-pipeline-terraform","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/operator-guide/ci/ci-pipeline-terraform.md","tags":[],"version":"3.10","lastUpdatedBy":"Sergiy Kulanov","lastUpdatedAt":1730106685000,"frontMatter":{},"sidebar":"operatorGuideSidebar","previous":{"title":"Microsoft Teams Notification","permalink":"/docs/operator-guide/ci/notification-msteams"},"next":{"title":"Customize Deploy Pipeline","permalink":"/docs/operator-guide/cd/customize-deploy-pipeline"}}');var s=t(74848),o=t(28453);const n={},a="CI Pipeline for Terraform",c={},d=[{value:"Pipeline Stages for Terraform",id:"pipeline-stages-for-terraform",level:2},{value:"Related Articles",id:"related-articles",level:2}];function l(e){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"ci-pipeline-for-terraform",children:"CI Pipeline for Terraform"})}),"\n",(0,s.jsxs)(r.p,{children:["KubeRocketCI ensures the implemented Terraform support by adding a separate component type called ",(0,s.jsx)(r.strong,{children:"Infrastructure"}),". The ",(0,s.jsx)(r.strong,{children:"Infrastructure"})," codebase type allows to work with Terraform code that is processed by means of stages in the ",(0,s.jsx)(r.strong,{children:"Code-Review"})," and ",(0,s.jsx)(r.strong,{children:"Build"})," pipelines."]}),"\n",(0,s.jsx)(r.h2,{id:"pipeline-stages-for-terraform",children:"Pipeline Stages for Terraform"}),"\n",(0,s.jsxs)(r.p,{children:["Under the hood, Infrastructure codebase type, namely Terraform, looks quite similar to other codebase types. The distinguishing characteristic of the ",(0,s.jsx)(r.code,{children:"Infrastructure"})," codebase type is that there is a stage called ",(0,s.jsx)(r.strong,{children:"terraform-check"})," in both of ",(0,s.jsx)(r.strong,{children:"Code Review"})," and ",(0,s.jsx)(r.strong,{children:"Build"})," pipelines. This stage runs the pre-commit activities which in their turn run the following commands and tools:"]}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"https://developer.hashicorp.com/terraform/cli/commands/fmt",children:"Terraform fmt"})," - the first step of the stage is basically the ",(0,s.jsx)(r.code,{children:"terraform fmt"})," command. The ",(0,s.jsx)(r.code,{children:"terraform fmt"})," command automatically updates the formatting of Terraform configuration files to follow the standard conventions and make the code more readable and consistent."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"https://developer.hashicorp.com/terraform/tutorials/configuration-language/provider-versioning",children:"Lock provider versions"})," - locks the versions of the Terraform providers used in the project. This ensures that the project uses specific versions of the providers and prevents unexpected changes from impacting the infrastructure due to newer provider versions."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"https://developer.hashicorp.com/terraform/cli/commands/validate",children:"Terraform validate"})," - checks the syntax and validity of the Terraform configuration files. It scans the configuration files for all possible issues."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"https://github.com/terraform-docs/terraform-docs",children:"Terraform docs"})," - generates human-readable documentation for the Terraform project."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"https://github.com/terraform-linters/tflint",children:"Tflint"})," - additional validation step using the ",(0,s.jsx)(r.code,{children:"tflint"})," linter to provide more in-depth checks in addition to what the ",(0,s.jsx)(r.code,{children:"terraform validate"})," command does."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"https://github.com/bridgecrewio/checkov",children:"Checkov"})," - runs the ",(0,s.jsx)(r.code,{children:"checkov"})," command against the Terraform codebase to identify any security misconfigurations or compliance issues."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"https://github.com/aquasecurity/tfsec",children:"Tfsec"})," - another security-focused validation step using the ",(0,s.jsx)(r.code,{children:"tfsec"})," command. Tfsec is a security scanner for Terraform templates that detects potential security issues and insecure configurations in the Terraform code."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.admonition,{type:"note",children:(0,s.jsxs)(r.p,{children:["The commands and their attributes are displayed in the ",(0,s.jsx)(r.a,{href:"https://github.com/epmd-edp/hcl-terraform-terraform/blob/master/.pre-commit-config.yaml",children:(0,s.jsx)(r.strong,{children:".pre-commit-config.yaml"})})," file."]})}),"\n",(0,s.jsx)(r.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"/docs/user-guide/",children:"User Guide Overview"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"/docs/user-guide/add-infrastructure",children:"Add Infrastructure"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"/docs/user-guide/infrastructure",children:"Manage Infrastructures"})}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>n,x:()=>a});var i=t(96540);const s={},o=i.createContext(s);function n(e){const r=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),i.createElement(o.Provider,{value:r},e.children)}}}]);