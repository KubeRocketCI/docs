"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[58673],{98133:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"operator-guide/project-management-and-reporting/reportportal-tekton","title":"Tekton Integration","description":"Integrating ReportPortal with Tekton centralizes the management of all automation outcomes and reports, enabling the visualization of metrics and analytics. This integration facilitates team collaboration by associating statistical results, enhancing the overall efficiency and insight into the automation processes.","source":"@site/versioned_docs/version-3.10/operator-guide/project-management-and-reporting/reportportal-tekton.md","sourceDirName":"operator-guide/project-management-and-reporting","slug":"/operator-guide/project-management-and-reporting/reportportal-tekton","permalink":"/docs/operator-guide/project-management-and-reporting/reportportal-tekton","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/operator-guide/project-management-and-reporting/reportportal-tekton.md","tags":[],"version":"3.10","lastUpdatedBy":"Sergiy Kulanov","lastUpdatedAt":1737665576000,"frontMatter":{},"sidebar":"operatorGuideSidebar","previous":{"title":"Keycloak Integration","permalink":"/docs/operator-guide/project-management-and-reporting/reportportal-keycloak"},"next":{"title":"Install External Secrets Operator","permalink":"/docs/operator-guide/secrets-management/install-external-secrets-operator"}}');var s=n(74848),o=n(28453);const a={},i="Tekton Integration",l={},c=[{value:"Related Articles",id:"related-articles",level:2}];function p(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components},{Details:r,Head:a}=t;return r||h("Details",!0),a||h("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"tekton-integration",children:"Tekton Integration"})}),"\n",(0,s.jsx)(a,{children:(0,s.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/operator-guide/project-management-and-reporting/reportportal-tekton/"})}),"\n",(0,s.jsx)(t.p,{children:"Integrating ReportPortal with Tekton centralizes the management of all automation outcomes and reports, enabling the visualization of metrics and analytics. This integration facilitates team collaboration by associating statistical results, enhancing the overall efficiency and insight into the automation processes."}),"\n",(0,s.jsx)(t.p,{children:"For integration, take the following steps:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Log in to the ReportPortal console and navigate to the ",(0,s.jsx)(t.strong,{children:"User Profile"})," menu:"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"ReportPortal profile",src:n(84275).A+"",title:"ReportPortal profile",width:"1920",height:"902"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Copy the ",(0,s.jsx)(t.strong,{children:"Access token"})," and use it as a value while creating a kubernetes secret for the ReportPortal credentials:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:"apiVersion: v1\nkind: Secret\ntype: Opaque\nmetadata:\n  name: rp-credentials\n  namespace: edp\nstringData:\n  rp_uuid: <access-token>\n"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["In the ",(0,s.jsx)(t.strong,{children:"Configuration examples"})," section of the ReportPortal ",(0,s.jsx)(t.strong,{children:"User Profile"})," menu, copy the following ",(0,s.jsx)(t.code,{children:"REQUIRED"})," fields: ",(0,s.jsx)(t.code,{children:"rp.endpoint"}),", ",(0,s.jsx)(t.code,{children:"rp.launch"})," and ",(0,s.jsx)(t.code,{children:"rp.project"}),". Insert these fields to the ",(0,s.jsx)(t.code,{children:"pytest.ini"})," file in root directory of your project:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"[pytest]\naddopts = -rsxX -l --tb=short --junitxml test-report.xml\nrp_endpoint = <endpoint>\nrp_launch = <launch>\nrp_project = <project>\n"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["In root directory of the project create/update ",(0,s.jsx)(t.strong,{children:"requirements.txt"})," file and fill with following. It's mandatory to install report-portal python library (version may vary):"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"pytest-reportportal == 5.1.2\n"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Create a custom Tekton task:"}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:(0,s.jsx)("b",{children:"View: Custom Tekton task"})}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:"apiVersion: tekton.dev/v1beta1\nkind: Task\nmetadata:\n  labels:\n    app.kubernetes.io/version: '0.1'\n  name: pytest-reportportal\n  namespace: edp\nspec:\n  description: |-\n    This task can be used to run pytest integrated with report portal.\n  params:\n    - default: .\n      description: The path where package.json of the project is defined.\n      name: PATH_CONTEXT\n      type: string\n    - name: EXTRA_COMMANDS\n      type: string\n    - default: python:3.8-alpine3.16\n      description: The python image you want to use.\n      name: BASE_IMAGE\n      type: string\n    - default: rp-credentials\n      description: name of the secret holding the rp token\n      name: rp-secret\n      type: string\n  steps:\n    - env:\n        - name: HOME\n          value: $(workspaces.source.path)\n        - name: RP_UUID\n          valueFrom:\n            secretKeyRef:\n              key: rp_uuid\n              name: $(params.rp-secret)\n      image: $(params.BASE_IMAGE)\n      name: pytest\n      resources: {}\n      script: >\n        #!/usr/bin/env sh\n        set -e\n        export PATH=$PATH:$HOME/.local/bin\n        $(params.EXTRA_COMMANDS)\n        # tests are being run from ./test directory in the project\n        pytest ./tests --reportportal\n      workingDir: $(workspaces.source.path)/$(params.PATH_CONTEXT)\n  workspaces:\n    - name: source\n"})})]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Add this task ref to your Tekton pipeline after ",(0,s.jsx)(t.em,{children:"tasks"}),":"]}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:(0,s.jsx)("b",{children:"View: Tekton pipeline"})}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:"- name: pytest\n  params:\n    - name: BASE_IMAGE\n      value: $(params.image)\n    - name: EXTRA_COMMANDS\n      value: |\n        set -ex\n        pip3 install -r requirements.txt\n        [ -f run_service.py ] && python run_service.py &\n  runAfter:\n    - compile\n  taskRef:\n    kind: Task\n    name: pytest-reportportal\n  workspaces:\n    - name: source\n      workspace: shared-workspace\n"})})]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Launch your Tekton pipeline and check that the custom task has been successfully executed:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Tekton task successfully executed",src:n(23143).A+"",title:"Tekton task successfully executed",width:"1895",height:"499"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Test reports will be displayed in the ",(0,s.jsx)(t.strong,{children:"Launches"})," section of the ReportPortal:"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Test report results",src:n(96518).A+"",title:"Test report results",width:"1920",height:"713"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/docs/operator-guide/project-management-and-reporting/install-reportportal",children:"Install ReportPortal"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/docs/operator-guide/project-management-and-reporting/reportportal-keycloak",children:"Keycloak Integration"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/reportportal/agent-python-pytest",children:"Pytest Integration With ReportPortal"})}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}function h(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},84275:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/report-portal-profile-25c35992ffc6c51b6c5e5f992ac58834.png"},96518:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/report-portal-results-f89be226263cd3b5522ba3a983e5781b.png"},23143:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/tekton-task-success-b605d6f366f6a52bcf0cd64908f88e9b.png"},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>i});var r=n(96540);const s={},o=r.createContext(s);function a(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);