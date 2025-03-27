"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[27502],{54223:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"api/tekton-custom-task","title":"Tekton Custom Task API Reference","description":"Packages:","source":"@site/versioned_docs/version-3.11/api/tekton-custom-task.md","sourceDirName":"api","slug":"/api/tekton-custom-task","permalink":"/docs/api/tekton-custom-task","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/api/tekton-custom-task.md","tags":[],"version":"3.11","lastUpdatedBy":"Mykola Serdiuk","lastUpdatedAt":1743077202000,"frontMatter":{},"sidebar":"apiSidebar","previous":{"title":"SonarQube Operator API","permalink":"/docs/api/sonarqube"}}');var n=r(74848),d=r(28453);const i={},c="Tekton Custom Task API Reference",a={},l=[{value:"edp.epam.com/v1alpha1",id:"edpepamcomv1alpha1",level:2},{value:"ApprovalTask",id:"approvaltask",level:2},{value:"ApprovalTask.spec",id:"approvaltaskspec",level:3},{value:"ApprovalTask.spec.approve",id:"approvaltaskspecapprove",level:3}];function h(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",ul:"ul",...(0,d.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"tekton-custom-task-api-reference",children:"Tekton Custom Task API Reference"})}),"\n",(0,n.jsx)(s.p,{children:"Packages:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"#edpepamcomv1alpha1",children:"edp.epam.com/v1alpha1"})}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"edpepamcomv1alpha1",children:"edp.epam.com/v1alpha1"}),"\n",(0,n.jsx)(s.p,{children:"Resource Types:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"#approvaltask",children:"ApprovalTask"})}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"approvaltask",children:"ApprovalTask"}),"\n",(0,n.jsx)("sup",{children:(0,n.jsx)("sup",{children:(0,n.jsx)(s.a,{href:"#edpepamcomv1alpha1",children:"\u21a9 Parent"})})}),"\n",(0,n.jsx)(s.p,{children:"ApprovalTask is the Schema for the approvaltasks API"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Name"}),(0,n.jsx)("th",{children:"Type"}),(0,n.jsx)("th",{children:"Description"}),(0,n.jsx)("th",{children:"Required"})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("b",{children:"apiVersion"})}),(0,n.jsx)("td",{children:"string"}),(0,n.jsx)("td",{children:"edp.epam.com/v1alpha1"}),(0,n.jsx)("td",{children:"true"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("b",{children:"kind"})}),(0,n.jsx)("td",{children:"string"}),(0,n.jsx)("td",{children:"ApprovalTask"}),(0,n.jsx)("td",{children:"true"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("b",{children:(0,n.jsx)("a",{href:"https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.27/#objectmeta-v1-meta",children:"metadata"})})}),(0,n.jsx)("td",{children:"object"}),(0,n.jsxs)("td",{children:["Refer to the Kubernetes API documentation for the fields of the ",(0,n.jsx)(s.code,{children:"metadata"})," field."]}),(0,n.jsx)("td",{children:"true"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("b",{children:(0,n.jsx)("a",{href:"#approvaltaskspec",children:"spec"})})}),(0,n.jsx)("td",{children:"object"}),(0,n.jsx)("td",{children:(0,n.jsxs)(s.p,{children:["ApprovalTaskSpec defines the desired state of ApprovalTask",(0,n.jsx)("br",{})]})}),(0,n.jsx)("td",{children:"false"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("b",{children:"status"})}),(0,n.jsx)("td",{children:"object"}),(0,n.jsx)("td",{children:(0,n.jsxs)(s.p,{children:["ApprovalTaskStatus defines the observed state of ApprovalTask",(0,n.jsx)("br",{})]})}),(0,n.jsx)("td",{children:"false"})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"approvaltaskspec",children:"ApprovalTask.spec"}),"\n",(0,n.jsx)("sup",{children:(0,n.jsx)("sup",{children:(0,n.jsx)(s.a,{href:"#approvaltask",children:"\u21a9 Parent"})})}),"\n",(0,n.jsx)(s.p,{children:"ApprovalTaskSpec defines the desired state of ApprovalTask"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Name"}),(0,n.jsx)("th",{children:"Type"}),(0,n.jsx)("th",{children:"Description"}),(0,n.jsx)("th",{children:"Required"})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("b",{children:"action"})}),(0,n.jsx)("td",{children:"enum"}),(0,n.jsxs)("td",{children:[(0,n.jsxs)(s.p,{children:["Action is the action to be taken on the task.",(0,n.jsx)("br",{})]}),(0,n.jsx)("br",{}),(0,n.jsxs)(s.p,{children:[(0,n.jsx)("i",{children:"Enum"}),": Pending, Approved, Rejected, Canceled",(0,n.jsx)("br",{}),"\n",(0,n.jsx)("i",{children:"Default"}),": Pending",(0,n.jsx)("br",{})]})]}),(0,n.jsx)("td",{children:"false"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("b",{children:(0,n.jsx)("a",{href:"#approvaltaskspecapprove",children:"approve"})})}),(0,n.jsx)("td",{children:"object"}),(0,n.jsx)("td",{children:(0,n.jsxs)(s.p,{children:["Approve is the approval information.",(0,n.jsx)("br",{})]})}),(0,n.jsx)("td",{children:"false"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("b",{children:"description"})}),(0,n.jsx)("td",{children:"string"}),(0,n.jsxs)("td",{children:[(0,n.jsxs)(s.p,{children:["Description that is shown to the user for the approval action.",(0,n.jsx)("br",{})]}),(0,n.jsx)("br",{}),(0,n.jsxs)(s.p,{children:[(0,n.jsx)("i",{children:"Default"}),": Proceed",(0,n.jsx)("br",{})]})]}),(0,n.jsx)("td",{children:"false"})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"approvaltaskspecapprove",children:"ApprovalTask.spec.approve"}),"\n",(0,n.jsx)("sup",{children:(0,n.jsx)("sup",{children:(0,n.jsx)(s.a,{href:"#approvaltaskspec",children:"\u21a9 Parent"})})}),"\n",(0,n.jsx)(s.p,{children:"Approve is the approval information."}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Name"}),(0,n.jsx)("th",{children:"Type"}),(0,n.jsx)("th",{children:"Description"}),(0,n.jsx)("th",{children:"Required"})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("b",{children:"approvedBy"})}),(0,n.jsx)("td",{children:"string"}),(0,n.jsx)("td",{children:(0,n.jsxs)(s.p,{children:["ApprovedBy is indicating the identity of the approver.",(0,n.jsx)("br",{})]})}),(0,n.jsx)("td",{children:"true"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("b",{children:"comment"})}),(0,n.jsx)("td",{children:"string"}),(0,n.jsx)("td",{children:(0,n.jsxs)(s.p,{children:["Comment is the comment provided by the approver.",(0,n.jsx)("br",{})]})}),(0,n.jsx)("td",{children:"false"})]})]})]})]})}function p(e={}){const{wrapper:s}={...(0,d.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,s,r)=>{r.d(s,{R:()=>i,x:()=>c});var t=r(96540);const n={},d=t.createContext(n);function i(e){const s=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),t.createElement(d.Provider,{value:s},e.children)}}}]);