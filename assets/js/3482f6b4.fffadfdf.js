"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[43282],{56924:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>c,contentTitle:()=>t,default:()=>x,frontMatter:()=>n,metadata:()=>l,toc:()=>h});var i=r(74848),d=r(28453);const n={},t="CD Pipeline Operator API",l={id:"api/cd-pipeline",title:"CD Pipeline Operator API",description:"Packages:",source:"@site/versioned_docs/version-3.10/api/cd-pipeline.md",sourceDirName:"api",slug:"/api/cd-pipeline",permalink:"/docs/api/cd-pipeline",draft:!1,unlisted:!1,editUrl:"https://github.com/KubeRocketCI/docs/edit/main/docs/api/cd-pipeline.md",tags:[],version:"3.10",lastUpdatedBy:"Sergiy Kulanov",lastUpdatedAt:1730106685e3,frontMatter:{},sidebar:"apiSidebar",previous:{title:"Introduction",permalink:"/docs/api/overview"},next:{title:"Codebase Operator API",permalink:"/docs/api/codebase"}},c={},h=[{value:"CDPipeline",id:"cdpipeline",level:2},{value:"CDPipeline.spec",id:"cdpipelinespec",level:3},{value:"CDPipeline.status",id:"cdpipelinestatus",level:3},{value:"Stage",id:"stage",level:2},{value:"Stage.spec",id:"stagespec",level:3},{value:"Stage.spec.qualityGates[index]",id:"stagespecqualitygatesindex",level:3},{value:"Stage.spec.source",id:"stagespecsource",level:3},{value:"Stage.spec.source.library",id:"stagespecsourcelibrary",level:3},{value:"Stage.status",id:"stagestatus",level:3}];function j(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",ul:"ul",...(0,d.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"cd-pipeline-operator-api",children:"CD Pipeline Operator API"})}),"\n",(0,i.jsx)(s.p,{children:"Packages:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"#v2edpepamcomv1",children:"v2.edp.epam.com/v1"})}),"\n"]}),"\n",(0,i.jsx)(s.h1,{id:"v2edpepamcomv1",children:"v2.edp.epam.com/v1"}),"\n",(0,i.jsx)(s.p,{children:"Resource Types:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"#cdpipeline",children:"CDPipeline"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"#stage",children:"Stage"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"cdpipeline",children:"CDPipeline"}),"\n",(0,i.jsx)("sup",{children:(0,i.jsx)("sup",{children:(0,i.jsx)(s.a,{href:"#v2edpepamcomv1",children:"\u21a9 Parent"})})}),"\n",(0,i.jsx)(s.p,{children:"CDPipeline is the Schema for the cdpipelines API."}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Name"}),(0,i.jsx)("th",{children:"Type"}),(0,i.jsx)("th",{children:"Description"}),(0,i.jsx)("th",{children:"Required"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"apiVersion"})}),(0,i.jsx)("td",{children:"string"}),(0,i.jsx)("td",{children:"v2.edp.epam.com/v1"}),(0,i.jsx)("td",{children:"true"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"kind"})}),(0,i.jsx)("td",{children:"string"}),(0,i.jsx)("td",{children:"CDPipeline"}),(0,i.jsx)("td",{children:"true"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:(0,i.jsx)("a",{href:"https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.27/#objectmeta-v1-meta",children:"metadata"})})}),(0,i.jsx)("td",{children:"object"}),(0,i.jsxs)("td",{children:["Refer to the Kubernetes API documentation for the fields of the ",(0,i.jsx)(s.code,{children:"metadata"})," field."]}),(0,i.jsx)("td",{children:"true"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:(0,i.jsx)("a",{href:"#cdpipelinespec",children:"spec"})})}),(0,i.jsx)("td",{children:"object"}),(0,i.jsx)("td",{children:(0,i.jsxs)(s.p,{children:["CDPipelineSpec defines the desired state of CDPipeline.",(0,i.jsx)("br",{})]})}),(0,i.jsx)("td",{children:"false"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:(0,i.jsx)("a",{href:"#cdpipelinestatus",children:"status"})})}),(0,i.jsx)("td",{children:"object"}),(0,i.jsx)("td",{children:(0,i.jsxs)(s.p,{children:["CDPipelineStatus defines the observed state of CDPipeline.",(0,i.jsx)("br",{})]})}),(0,i.jsx)("td",{children:"false"})]})]})]}),"\n",(0,i.jsx)(s.h3,{id:"cdpipelinespec",children:"CDPipeline.spec"}),"\n",(0,i.jsx)("sup",{children:(0,i.jsx)("sup",{children:(0,i.jsx)(s.a,{href:"#cdpipeline",children:"\u21a9 Parent"})})}),"\n",(0,i.jsx)(s.p,{children:"CDPipelineSpec defines the desired state of CDPipeline."}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Name"}),(0,i.jsx)("th",{children:"Type"}),(0,i.jsx)("th",{children:"Description"}),(0,i.jsx)("th",{children:"Required"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"applications"})}),(0,i.jsx)("td",{children:"[]string"}),(0,i.jsx)("td",{children:(0,i.jsxs)(s.p,{children:["A list of applications included in CDPipeline.",(0,i.jsx)("br",{})]})}),(0,i.jsx)("td",{children:"true"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"deploymentType"})}),(0,i.jsx)("td",{children:"string"}),(0,i.jsx)("td",{children:(0,i.jsxs)(s.p,{children:["Which type of kind will be deployed e.g. Container, Custom",(0,i.jsx)("br",{})]})}),(0,i.jsx)("td",{children:"true"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"inputDockerStreams"})}),(0,i.jsx)("td",{children:"[]string"}),(0,i.jsx)("td",{children:(0,i.jsxs)(s.p,{children:["A list of docker streams",(0,i.jsx)("br",{})]})}),(0,i.jsx)("td",{children:"true"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"name"})}),(0,i.jsx)("td",{children:"string"}),(0,i.jsx)("td",{children:(0,i.jsxs)(s.p,{children:["Name of CD pipeline",(0,i.jsx)("br",{})]})}),(0,i.jsx)("td",{children:"true"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"applicationsToPromote"})}),(0,i.jsx)("td",{children:"[]string"}),(0,i.jsx)("td",{children:(0,i.jsxs)(s.p,{children:["A list of applications which will promote after successful release.",(0,i.jsx)("br",{})]})}),(0,i.jsx)("td",{children:"false"})]})]})]}),"\n",(0,i.jsx)(s.h3,{id:"cdpipelinestatus",children:"CDPipeline.status"}),"\n",(0,i.jsx)("sup",{children:(0,i.jsx)("sup",{children:(0,i.jsx)(s.a,{href:"#cdpipeline",children:"\u21a9 Parent"})})}),"\n",(0,i.jsx)(s.p,{children:"CDPipelineStatus defines the observed state of CDPipeline."}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Name"}),(0,i.jsx)("th",{children:"Type"}),(0,i.jsx)("th",{children:"Description"}),(0,i.jsx)("th",{children:"Required"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"action"})}),(0,i.jsx)("td",{children:"string"}),(0,i.jsx)("td",{children:(0,i.jsxs)(s.p,{children:["The last Action was performed.",(0,i.jsx)("br",{})]})}),(0,i.jsx)("td",{children:"true"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"available"})}),(0,i.jsx)("td",{children:"boolean"}),(0,i.jsx)("td",{children:(0,i.jsxs)(s.p,{children:["This flag indicates neither CDPipeline are initialized and ready to work. Defaults to false.",(0,i.jsx)("br",{})]})}),(0,i.jsx)("td",{children:"true"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"last_time_updated"})}),(0,i.jsx)("td",{children:"string"}),(0,i.jsxs)("td",{children:[(0,i.jsxs)(s.p,{children:["Information when the last time the action were performed.",(0,i.jsx)("br",{})]}),(0,i.jsx)("br",{}),(0,i.jsxs)(s.p,{children:[(0,i.jsx)("i",{children:"Format"}),": date-time",(0,i.jsx)("br",{})]})]}),(0,i.jsx)("td",{children:"true"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"result"})}),(0,i.jsx)("td",{children:"enum"}),(0,i.jsxs)("td",{children:[(0,i.jsx)(s.p,{children:"A result of an action which were performed."}),(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:'"success": action where performed successfully;'}),"\n",(0,i.jsxs)(s.li,{children:['"error": error has occurred;',(0,i.jsx)("br",{})]}),"\n"]}),(0,i.jsx)("br",{}),(0,i.jsxs)(s.p,{children:[(0,i.jsx)("i",{children:"Enum"}),": success, error",(0,i.jsx)("br",{})]})]}),(0,i.jsx)("td",{children:"true"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"status"})}),(0,i.jsx)("td",{children:"string"}),(0,i.jsx)("td",{children:(0,i.jsxs)(s.p,{children:["Specifies a current status of CDPipeline.",(0,i.jsx)("br",{})]})}),(0,i.jsx)("td",{children:"true"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"username"})}),(0,i.jsx)("td",{children:"string"}),(0,i.jsx)("td",{children:(0,i.jsxs)(s.p,{children:["Name of user who made a last change.",(0,i.jsx)("br",{})]})}),(0,i.jsx)("td",{children:"true"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"value"})}),(0,i.jsx)("td",{children:"string"}),(0,i.jsx)("td",{children:(0,i.jsxs)(s.p,{children:["Specifies a current state of CDPipeline.",(0,i.jsx)("br",{})]})}),(0,i.jsx)("td",{children:"true"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"detailed_message"})}),(0,i.jsx)("td",{children:"string"}),(0,i.jsx)("td",{children:(0,i.jsxs)(s.p,{children:["Detailed information regarding action result\nwhich were performed",(0,i.jsx)("br",{})]})}),(0,i.jsx)("td",{children:"false"})]})]})]}),"\n",(0,i.jsx)(s.h2,{id:"stage",children:"Stage"}),"\n",(0,i.jsx)("sup",{children:(0,i.jsx)("sup",{children:(0,i.jsx)(s.a,{href:"#v2edpepamcomv1",children:"\u21a9 Parent"})})}),"\n",(0,i.jsx)(s.p,{children:"Stage is the Schema for the stages API."}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Name"}),(0,i.jsx)("th",{children:"Type"}),(0,i.jsx)("th",{children:"Description"}),(0,i.jsx)("th",{children:"Required"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"apiVersion"})}),(0,i.jsx)("td",{children:"string"}),(0,i.jsx)("td",{children:"v2.edp.epam.com/v1"}),(0,i.jsx)("td",{children:"true"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"kind"})}),(0,i.jsx)("td",{children:"string"}),(0,i.jsx)("td",{children:"Stage"}),(0,i.jsx)("td",{children:"true"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:(0,i.jsx)("a",{href:"https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.27/#objectmeta-v1-meta",children:"metadata"})})}),(0,i.jsx)("td",{children:"object"}),(0,i.jsxs)("td",{children:["Refer to the Kubernetes API documentation for the fields of the ",(0,i.jsx)(s.code,{children:"metadata"})," field."]}),(0,i.jsx)("td",{children:"true"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:(0,i.jsx)("a",{href:"#stagespec",children:"spec"})})}),(0,i.jsx)("td",{children:"object"}),(0,i.jsx)("td",{children:(0,i.jsxs)(s.p,{children:["StageSpec defines the desired state of Stage.\nNOTE: for deleting the stage use stages order - delete only the latest stage.",(0,i.jsx)("br",{})]})}),(0,i.jsx)("td",{children:"false"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:(0,i.jsx)("a",{href:"#stagestatus",children:"status"})})}),(0,i.jsx)("td",{children:"object"}),(0,i.jsx)("td",{children:(0,i.jsxs)(s.p,{children:["StageStatus defines the observed state of Stage.",(0,i.jsx)("br",{})]})}),(0,i.jsx)("td",{children:"false"})]})]})]}),"\n",(0,i.jsx)(s.h3,{id:"stagespec",children:"Stage.spec"}),"\n",(0,i.jsx)("sup",{children:(0,i.jsx)("sup",{children:(0,i.jsx)(s.a,{href:"#stage",children:"\u21a9 Parent"})})}),"\n",(0,i.jsx)(s.p,{children:"StageSpec defines the desired state of Stage.\nNOTE: for deleting the stage use stages order - delete only the latest stage."}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Name"}),(0,i.jsx)("th",{children:"Type"}),(0,i.jsx)("th",{children:"Description"}),(0,i.jsx)("th",{children:"Required"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"cdPipeline"})}),(0,i.jsx)("td",{children:"string"}),(0,i.jsx)("td",{children:(0,i.jsxs)(s.p,{children:["Name of CD pipeline which this Stage will be linked to.",(0,i.jsx)("br",{})]})}),(0,i.jsx)("td",{children:"true"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"description"})}),(0,i.jsx)("td",{children:"string"}),(0,i.jsx)("td",{children:(0,i.jsxs)(s.p,{children:["A description of a stage.",(0,i.jsx)("br",{})]})}),(0,i.jsx)("td",{children:"true"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"name"})}),(0,i.jsx)("td",{children:"string"}),(0,i.jsx)("td",{children:(0,i.jsxs)(s.p,{children:["Name of a stage.",(0,i.jsx)("br",{})]})}),(0,i.jsx)("td",{children:"true"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"order"})}),(0,i.jsx)("td",{children:"integer"}),(0,i.jsx)("td",{children:(0,i.jsxs)(s.p,{children:["The order to lay out Stages.\nThe order should start from 0, and the next stages should use +1 for the order.",(0,i.jsx)("br",{})]})}),(0,i.jsx)("td",{children:"true"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:(0,i.jsx)("a",{href:"#stagespecqualitygatesindex",children:"qualityGates"})})}),(0,i.jsx)("td",{children:"[]object"}),(0,i.jsx)("td",{children:(0,i.jsxs)(s.p,{children:["A list of quality gates to be processed",(0,i.jsx)("br",{})]})}),(0,i.jsx)("td",{children:"true"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"triggerType"})}),(0,i.jsx)("td",{children:"string"}),(0,i.jsx)("td",{children:(0,i.jsxs)(s.p,{children:["Stage deployment trigger type. E.g. Manual, Auto",(0,i.jsx)("br",{})]})}),(0,i.jsx)("td",{children:"true"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"cleanTemplate"})}),(0,i.jsx)("td",{children:"string"}),(0,i.jsx)("td",{children:(0,i.jsxs)(s.p,{children:["CleanTemplate specifies a name of Tekton TriggerTemplate which will be used for cleaning resources.",(0,i.jsx)("br",{})]})}),(0,i.jsx)("td",{children:"false"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"clusterName"})}),(0,i.jsx)("td",{children:"string"}),(0,i.jsxs)("td",{children:[(0,i.jsxs)(s.p,{children:['Specifies a name of cluster where the application will be deployed.\nDefault value is "in-cluster" which means that application will be deployed in the same cluster where CD Pipeline is running.',(0,i.jsx)("br",{})]}),(0,i.jsx)("br",{}),(0,i.jsxs)(s.p,{children:[(0,i.jsx)("i",{children:"Default"}),": in-cluster",(0,i.jsx)("br",{})]})]}),(0,i.jsx)("td",{children:"false"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"namespace"})}),(0,i.jsx)("td",{children:"string"}),(0,i.jsx)("td",{children:(0,i.jsxs)(s.p,{children:["Namespace where the application will be deployed.",(0,i.jsx)("br",{})]})}),(0,i.jsx)("td",{children:"false"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:(0,i.jsx)("a",{href:"#stagespecsource",children:"source"})})}),(0,i.jsx)("td",{children:"object"}),(0,i.jsxs)("td",{children:[(0,i.jsxs)(s.p,{children:["Specifies a source of a pipeline library which will run release",(0,i.jsx)("br",{})]}),(0,i.jsx)("br",{}),(0,i.jsxs)(s.p,{children:[(0,i.jsx)("i",{children:"Default"}),": map[type",":default","]",(0,i.jsx)("br",{})]})]}),(0,i.jsx)("td",{children:"false"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"triggerTemplate"})}),(0,i.jsx)("td",{children:"string"}),(0,i.jsxs)("td",{children:[(0,i.jsxs)(s.p,{children:['Specifies a name of Tekton TriggerTemplate which will be used as a blueprint for deployment pipeline.\nDefault value is "deploy" which means that default TriggerTemplate will be used.\nThe default TriggerTemplate is delivered using edp-tekton helm chart.',(0,i.jsx)("br",{})]}),(0,i.jsx)("br",{}),(0,i.jsxs)(s.p,{children:[(0,i.jsx)("i",{children:"Default"}),": deploy",(0,i.jsx)("br",{})]})]}),(0,i.jsx)("td",{children:"false"})]})]})]}),"\n",(0,i.jsx)(s.h3,{id:"stagespecqualitygatesindex",children:"Stage.spec.qualityGates[index]"}),"\n",(0,i.jsx)("sup",{children:(0,i.jsx)("sup",{children:(0,i.jsx)(s.a,{href:"#stagespec",children:"\u21a9 Parent"})})}),"\n",(0,i.jsx)(s.p,{children:"QualityGate defines a single quality for a release."}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Name"}),(0,i.jsx)("th",{children:"Type"}),(0,i.jsx)("th",{children:"Description"}),(0,i.jsx)("th",{children:"Required"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"qualityGateType"})}),(0,i.jsx)("td",{children:"string"}),(0,i.jsx)("td",{children:(0,i.jsxs)(s.p,{children:['A type of quality gate, e.g. "Manual", "Autotests"',(0,i.jsx)("br",{})]})}),(0,i.jsx)("td",{children:"true"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"stepName"})}),(0,i.jsx)("td",{children:"string"}),(0,i.jsx)("td",{children:(0,i.jsxs)(s.p,{children:["Specifies a name of particular",(0,i.jsx)("br",{})]})}),(0,i.jsx)("td",{children:"true"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"autotestName"})}),(0,i.jsx)("td",{children:"string"}),(0,i.jsx)("td",{children:(0,i.jsxs)(s.p,{children:["A name of autotests to run with quality gate",(0,i.jsx)("br",{})]})}),(0,i.jsx)("td",{children:"false"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"branchName"})}),(0,i.jsx)("td",{children:"string"}),(0,i.jsx)("td",{children:(0,i.jsxs)(s.p,{children:["A branch name to use from autotests repository",(0,i.jsx)("br",{})]})}),(0,i.jsx)("td",{children:"false"})]})]})]}),"\n",(0,i.jsx)(s.h3,{id:"stagespecsource",children:"Stage.spec.source"}),"\n",(0,i.jsx)("sup",{children:(0,i.jsx)("sup",{children:(0,i.jsx)(s.a,{href:"#stagespec",children:"\u21a9 Parent"})})}),"\n",(0,i.jsx)(s.p,{children:"Specifies a source of a pipeline library which will run release"}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Name"}),(0,i.jsx)("th",{children:"Type"}),(0,i.jsx)("th",{children:"Description"}),(0,i.jsx)("th",{children:"Required"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:(0,i.jsx)("a",{href:"#stagespecsourcelibrary",children:"library"})})}),(0,i.jsx)("td",{children:"object"}),(0,i.jsx)("td",{children:(0,i.jsxs)(s.p,{children:["A reference to a non default source library",(0,i.jsx)("br",{})]})}),(0,i.jsx)("td",{children:"false"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"type"})}),(0,i.jsx)("td",{children:"string"}),(0,i.jsxs)("td",{children:[(0,i.jsxs)(s.p,{children:["Type of pipeline library, e.g. default, library",(0,i.jsx)("br",{})]}),(0,i.jsx)("br",{}),(0,i.jsxs)(s.p,{children:[(0,i.jsx)("i",{children:"Default"}),": default",(0,i.jsx)("br",{})]})]}),(0,i.jsx)("td",{children:"false"})]})]})]}),"\n",(0,i.jsx)(s.h3,{id:"stagespecsourcelibrary",children:"Stage.spec.source.library"}),"\n",(0,i.jsx)("sup",{children:(0,i.jsx)("sup",{children:(0,i.jsx)(s.a,{href:"#stagespecsource",children:"\u21a9 Parent"})})}),"\n",(0,i.jsx)(s.p,{children:"A reference to a non default source library"}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Name"}),(0,i.jsx)("th",{children:"Type"}),(0,i.jsx)("th",{children:"Description"}),(0,i.jsx)("th",{children:"Required"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"branch"})}),(0,i.jsx)("td",{children:"string"}),(0,i.jsx)("td",{children:(0,i.jsxs)(s.p,{children:["Branch which should be used for a library",(0,i.jsx)("br",{})]})}),(0,i.jsx)("td",{children:"false"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"name"})}),(0,i.jsx)("td",{children:"string"}),(0,i.jsx)("td",{children:(0,i.jsxs)(s.p,{children:["A name of a library",(0,i.jsx)("br",{})]})}),(0,i.jsx)("td",{children:"false"})]})]})]}),"\n",(0,i.jsx)(s.h3,{id:"stagestatus",children:"Stage.status"}),"\n",(0,i.jsx)("sup",{children:(0,i.jsx)("sup",{children:(0,i.jsx)(s.a,{href:"#stage",children:"\u21a9 Parent"})})}),"\n",(0,i.jsx)(s.p,{children:"StageStatus defines the observed state of Stage."}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Name"}),(0,i.jsx)("th",{children:"Type"}),(0,i.jsx)("th",{children:"Description"}),(0,i.jsx)("th",{children:"Required"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"action"})}),(0,i.jsx)("td",{children:"string"}),(0,i.jsx)("td",{children:(0,i.jsxs)(s.p,{children:["The last Action was performed.",(0,i.jsx)("br",{})]})}),(0,i.jsx)("td",{children:"true"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"available"})}),(0,i.jsx)("td",{children:"boolean"}),(0,i.jsx)("td",{children:(0,i.jsxs)(s.p,{children:["This flag indicates neither Stage are initialized and ready to work. Defaults to false.",(0,i.jsx)("br",{})]})}),(0,i.jsx)("td",{children:"true"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"last_time_updated"})}),(0,i.jsx)("td",{children:"string"}),(0,i.jsxs)("td",{children:[(0,i.jsxs)(s.p,{children:["Information when  the last time the action were performed.",(0,i.jsx)("br",{})]}),(0,i.jsx)("br",{}),(0,i.jsxs)(s.p,{children:[(0,i.jsx)("i",{children:"Format"}),": date-time",(0,i.jsx)("br",{})]})]}),(0,i.jsx)("td",{children:"true"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"result"})}),(0,i.jsx)("td",{children:"enum"}),(0,i.jsxs)("td",{children:[(0,i.jsx)(s.p,{children:"A result of an action which were performed."}),(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:'"success": action where performed successfully;'}),"\n",(0,i.jsxs)(s.li,{children:['"error": error has occurred;',(0,i.jsx)("br",{})]}),"\n"]}),(0,i.jsx)("br",{}),(0,i.jsxs)(s.p,{children:[(0,i.jsx)("i",{children:"Enum"}),": success, error",(0,i.jsx)("br",{})]})]}),(0,i.jsx)("td",{children:"true"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"status"})}),(0,i.jsx)("td",{children:"string"}),(0,i.jsx)("td",{children:(0,i.jsxs)(s.p,{children:["Specifies a current status of Stage.",(0,i.jsx)("br",{})]})}),(0,i.jsx)("td",{children:"true"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"username"})}),(0,i.jsx)("td",{children:"string"}),(0,i.jsx)("td",{children:(0,i.jsxs)(s.p,{children:["Name of user who made a last change.",(0,i.jsx)("br",{})]})}),(0,i.jsx)("td",{children:"true"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"value"})}),(0,i.jsx)("td",{children:"string"}),(0,i.jsx)("td",{children:(0,i.jsxs)(s.p,{children:["Specifies a current state of Stage.",(0,i.jsx)("br",{})]})}),(0,i.jsx)("td",{children:"true"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"detailed_message"})}),(0,i.jsx)("td",{children:"string"}),(0,i.jsx)("td",{children:(0,i.jsxs)(s.p,{children:["Detailed information regarding action result\nwhich were performed",(0,i.jsx)("br",{})]})}),(0,i.jsx)("td",{children:"false"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"shouldBeHandled"})}),(0,i.jsx)("td",{children:"boolean"}),(0,i.jsx)("td",{children:(0,i.jsxs)(s.p,{children:["Should update of status be handled. Defaults to false.",(0,i.jsx)("br",{})]})}),(0,i.jsx)("td",{children:"false"})]})]})]})]})}function x(e={}){const{wrapper:s}={...(0,d.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(j,{...e})}):j(e)}},28453:(e,s,r)=>{r.d(s,{R:()=>t,x:()=>l});var i=r(96540);const d={},n=i.createContext(d);function t(e){const s=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),i.createElement(n.Provider,{value:s},e.children)}}}]);