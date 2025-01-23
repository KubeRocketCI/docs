"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[50544],{26505:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"faq/pipelines","title":"Pipelines Management","description":"A list of frequently asked questions about the CI/CD Pipelines Management in KubeRocketCI.","source":"@site/versioned_docs/version-3.10/faq/pipelines.md","sourceDirName":"faq","slug":"/faq/pipelines","permalink":"/docs/faq/pipelines","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/faq/pipelines.md","tags":[],"version":"3.10","lastUpdatedBy":"Sergiy Kulanov","lastUpdatedAt":1737665576000,"sidebarPosition":2,"frontMatter":{"title":"Pipelines Management","description":"A list of frequently asked questions about the CI/CD Pipelines Management in KubeRocketCI.","sidebar_label":"Pipelines Management","sidebar_position":2},"sidebar":"faqSidebar","previous":{"title":"Logging, Monitoring & Tracing","permalink":"/docs/faq/observability"}}');var r=i(74848),s=i(28453);const o={title:"Pipelines Management",description:"A list of frequently asked questions about the CI/CD Pipelines Management in KubeRocketCI.",sidebar_label:"Pipelines Management",sidebar_position:2},a=void 0,l={},c=[{value:"What Is a Pipeline in KubeRocketCI?",id:"what-is-a-pipeline-in-kuberocketci",level:3},{value:"Does KubeRocketCI Integrate with GitHub Actions, GitLab CI, or Azure Pipelines for CI/CD?",id:"does-kuberocketci-integrate-with-github-actions-gitlab-ci-or-azure-pipelines-for-cicd",level:3},{value:"How to Re-trigger a Pipeline in KubeRocketCI?",id:"how-to-re-trigger-a-pipeline-in-kuberocketci",level:3},{value:"What Are the Available Options for Triggering Pipelines in KubeRocketCI?",id:"what-are-the-available-options-for-triggering-pipelines-in-kuberocketci",level:3},{value:"How to Manage Trigger Owner Verification in Tekton?",id:"how-to-manage-trigger-owner-verification-in-tekton",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Details:i,Head:t}=n;return i||p("Details",!0),t||p("Head",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"This page contains a list of frequently asked questions related to the CI/CD Pipelines management in the KubeRocketCI."}),"\n",(0,r.jsx)(n.h3,{id:"what-is-a-pipeline-in-kuberocketci",children:"What Is a Pipeline in KubeRocketCI?"}),"\n",(0,r.jsx)(t,{children:(0,r.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/faq/pipelines/"})}),"\n",(0,r.jsxs)(n.p,{children:["A pipeline in KubeRocketCI is a sequence of tasks that define the steps required to build, test, and deploy an application. Pipelines are defined using the ",(0,r.jsx)(n.a,{href:"https://github.com/epam/edp-tekton/",children:"Tekton Pipelines framework"}),", which allows users to create custom pipelines using reusable tasks."]}),"\n",(0,r.jsxs)(n.p,{children:["Within the KubeRocketCI platform, there are ",(0,r.jsx)(n.strong,{children:"three primary types of pipelines"}),", each serving distinct purposes within the Continuous Integration/Continuous Deployment lifecycle:"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Review Pipeline"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The Review Pipeline is designed to automate the integration of code changes from multiple contributors into a single software project (codebase). It typically includes steps for compiling the code, running tests (unit tests, integration tests, etc.)."}),"\n",(0,r.jsx)(n.li,{children:"The primary goal is to detect integration errors as quickly as possible, which is achieved by triggering the pipeline on each code commit to a repository."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Build Pipeline"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The Build Pipeline takes center stage following the completion of the code review process. Its primary function is to automate the compilation, testing, and packaging of the code into a build artifact. This artifact can then be deployed to various environments for further testing and promotion to production."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Deploy Pipeline"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Focused on the deployment aspect, the Deploy Pipeline automates the process of deploying software to environments. This type of pipeline can be triggered manually or automatically, based on the project's deployment strategy."}),"\n",(0,r.jsx)(n.li,{children:"It often includes steps for provisioning infrastructure, deploying the application, and post-deployment tests to ensure the application runs correctly in the production environment."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"does-kuberocketci-integrate-with-github-actions-gitlab-ci-or-azure-pipelines-for-cicd",children:"Does KubeRocketCI Integrate with GitHub Actions, GitLab CI, or Azure Pipelines for CI/CD?"}),"\n",(0,r.jsxs)(n.p,{children:["KubeRocketCI is built upon ",(0,r.jsx)(n.a,{href:"/docs/operator-guide/ci/tekton-overview",children:"Tekton"})," and ",(0,r.jsx)(n.a,{href:"/docs/operator-guide/cd/argocd-integration",children:"Argo CD"})," for its CI/CD processes, emphasizing a Kubernetes-native strategy."]}),"\n",(0,r.jsx)(n.p,{children:"It does not integrate with GitHub Actions, GitLab CI, Azure Pipelines, or similar CI/CD tools."}),"\n",(0,r.jsxs)(n.p,{children:["This design choice ensures that KubeRocketCI remains ",(0,r.jsx)(n.code,{children:"vendor-neutral"})," and ",(0,r.jsx)(n.code,{children:"cloud-agnostic"}),", allowing it to operate effectively across any Kubernetes environment without reliance on specific CI services or cloud platforms."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"how-to-re-trigger-a-pipeline-in-kuberocketci",children:"How to Re-trigger a Pipeline in KubeRocketCI?"}),"\n",(0,r.jsx)(n.p,{children:"If you need to re-trigger a pipeline due to a failed run or to incorporate new changes, you have several options available:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"KubeRocketCI Portal"}),": Navigate to the ",(0,r.jsx)(n.strong,{children:"Pipelines"})," section or the ",(0,r.jsx)(n.strong,{children:"Component details"})," -> ",(0,r.jsx)(n.strong,{children:"Branches"})," section, identify the failed pipeline, and select the action ",(0,r.jsx)(n.strong,{children:"Run again"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Tekton Dashboard"}),": If Tekton Dashboard is integrated. In the KubeRocketCI Portal navigate ",(0,r.jsx)(n.strong,{children:"Overview"})," -> ",(0,r.jsx)(n.strong,{children:"Links"})," and click on ",(0,r.jsx)(n.strong,{children:"Tekton"}),". In the Tekton Dashboard navigate to the ",(0,r.jsx)(n.strong,{children:"PipelineRuns"})," section, identify the failed pipeline, and select the action ",(0,r.jsx)(n.strong,{children:"Rerun"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Through VCS (GitHub/GitLab)"}),": Add a comment with word ",(0,r.jsx)(n.code,{children:"/recheck"})," or ",(0,r.jsx)(n.code,{children:"/ok-to-test"})," to your Pull Request (PR) or Merge Request (MR), and the pipeline will be triggered automatically."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["Use comment approach with ",(0,r.jsx)(n.code,{children:"/recheck"})," or ",(0,r.jsx)(n.code,{children:"/ok-to-test"})," if the Pipeline is not available either on KubeRocketCI or Tekton Dashboard."]})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"what-are-the-available-options-for-triggering-pipelines-in-kuberocketci",children:"What Are the Available Options for Triggering Pipelines in KubeRocketCI?"}),"\n",(0,r.jsx)(n.p,{children:"Different pipelines within the KubeRocketCI platform are triggered by specific events,\nensuring that the appropriate actions are taken in response to changes in the codebase or the project environment."}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.a,{href:"#what-is-a-pipeline-in-kuberocketci",children:"three primary types"})," of pipelines in KubeRocketCI are triggered by the following events:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Review Pipeline"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Triggered by events related to pull requests and issue comments."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Configuration example from ",(0,r.jsx)(n.code,{children:"TektonTriggers"}),":"]}),"\n",(0,r.jsxs)(i,{children:[(0,r.jsx)("summary",{children:"GitHub Trigger Configuration"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'apiVersion: triggers.tekton.dev/v1beta1\nkind: Trigger\nmetadata:\n  name: github-review\nspec:\n  interceptors:\n    - ref:\n        name: "github"\n      params:\n        - name: "eventTypes"\n          value: ["pull_request", "issue_comment"]\n    - ref:\n        name: "cel"\n      params:\n        - name: "filter"\n          value: "body.action in [\'opened\', \'synchronize\', \'created\']"\n  bindings:\n    - ref: github-binding-review\n  template:\n    ref: github-review-template\n'})})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Build Pipeline"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Triggered when a pull request is closed and merged."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Configuration example from TektonTriggers:"}),"\n",(0,r.jsxs)(i,{children:[(0,r.jsx)("summary",{children:"GitHub Trigger Configuration"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'apiVersion: triggers.tekton.dev/v1beta1\nkind: Trigger\nmetadata:\n  name: github-build\nspec:\n  interceptors:\n    - ref:\n        name: "github"\n      params:\n        - name: "eventTypes"\n          value: ["pull_request"]\n    - ref:\n        name: "cel"\n      params:\n        - name: "filter"\n          value: "body.action in [\'closed\'] && body.pull_request.merged == true"\n  bindings:\n    - ref: github-binding-build\n  template:\n    ref: github-build-template\n'})})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsxs)(n.strong,{children:["Deploy Pipeline (in case of ",(0,r.jsx)(n.a,{href:"/docs/user-guide/add-cd-pipeline#the-environments-menu",children:"auto deploy"}),")"]}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Triggered when a new tag is added to a ",(0,r.jsx)(n.code,{children:"codebaseimagestream"}),", upon successful completion of the ",(0,r.jsx)(n.code,{children:"build pipeline"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"This pipeline is designed to automatically deploy the newly built images to the appropriate environments."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["For further details on configuring these triggers review the ",(0,r.jsx)(n.code,{children:"TektonTriggers"})," configuration available in the ",(0,r.jsx)(n.a,{href:"https://github.com/epam/edp-tekton/tree/master/charts/pipelines-library/templates/triggers",children:"Tekton repository"}),"."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"how-to-manage-trigger-owner-verification-in-tekton",children:"How to Manage Trigger Owner Verification in Tekton?"}),"\n",(0,r.jsxs)(n.p,{children:["Tekton provides a feature to control which commits can trigger Tekton pipelines, enhancing security by preventing the execution of potentially harmful scripts from unauthorized contributors. This is achieved through the use of Tekton Interceptors, which verify whether the individual initiating a pull request is an owner of the repository (i.e., has write access) before permitting pipeline execution. For more details consult official ",(0,r.jsx)(n.a,{href:"https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners",children:"GitHub documentation"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["This functionality is enabled by default. To disable it, you need to update the relevant flag in the ",(0,r.jsx)(n.a,{href:"https://github.com/epam/edp-tekton/blob/master/charts/pipelines-library/values.yaml#L64",children:"values.yaml"})," file during the installation of Tekton."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:'title="values.yaml"',children:"githubOwners:\n  enabled: false\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}function p(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>a});var t=i(96540);const r={},s=t.createContext(r);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);