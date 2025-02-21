"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[19650],{70742:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>t,toc:()=>h});const t=JSON.parse('{"id":"operator-guide/artifacts-management/harbor-integration","title":"Integrate Harbor With Tekton Pipelines","description":"Harbor is an advanced, open-source cloud-native registry that securely manages container images and Helm charts, and also supports a wide range of OCI artifacts. It enforces policies and role-based access control, while ensuring all managed content, including container images and other artifacts, are scanned and certified free from vulnerabilities. For those looking to integrate Harbor into their workflow, the documentation provides comprehensive steps on creating projects and establishing robot accounts. These accounts facilitate automated and secure interactions with the registry, crucial for CI pipelines and enhancing overall security and efficiency in artifact management.","source":"@site/versioned_docs/version-3.10/operator-guide/artifacts-management/harbor-integration.md","sourceDirName":"operator-guide/artifacts-management","slug":"/operator-guide/artifacts-management/harbor-integration","permalink":"/docs/operator-guide/artifacts-management/harbor-integration","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/operator-guide/artifacts-management/harbor-integration.md","tags":[],"version":"3.10","lastUpdatedBy":"Sergiy Kulanov","lastUpdatedAt":1737665576000,"frontMatter":{},"sidebar":"operatorGuideSidebar","previous":{"title":"Harbor OIDC Configuration","permalink":"/docs/operator-guide/artifacts-management/harbor-oidc"},"next":{"title":"Nexus Image Registry","permalink":"/docs/operator-guide/artifacts-management/nexus-image-registry"}}');var a=n(74848),s=n(28453),i=n(65537),o=n(79329);const c={},l="Integrate Harbor With Tekton Pipelines",d={},h=[{value:"Overview",id:"overview",level:2},{value:"Integration Procedure",id:"integration-procedure",level:2},{value:"Create New Project",id:"create-new-project",level:3},{value:"Set Up Robot Account",id:"set-up-robot-account",level:3},{value:"Related Articles",id:"related-articles",level:2}];function u(e){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Head:t}=r;return t||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.header,{children:(0,a.jsx)(r.h1,{id:"integrate-harbor-with-tekton-pipelines",children:"Integrate Harbor With Tekton Pipelines"})}),"\n",(0,a.jsx)(t,{children:(0,a.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/operator-guide/artifacts-management/harbor-integration/"})}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.a,{href:"https://goharbor.io/",children:"Harbor"})," is an advanced, open-source cloud-native registry that securely manages container images and Helm charts, and also supports a wide range of OCI artifacts. It enforces policies and role-based access control, while ensuring all managed content, including container images and other artifacts, are scanned and certified free from vulnerabilities. For those looking to integrate Harbor into their workflow, the documentation provides comprehensive steps on ",(0,a.jsx)(r.a,{href:"https://goharbor.io/docs/2.0.0/working-with-projects/create-projects/",children:"creating projects"})," and establishing robot accounts. These accounts facilitate automated and secure interactions with the registry, crucial for CI pipelines and enhancing overall security and efficiency in artifact management."]}),"\n",(0,a.jsx)(r.h2,{id:"overview",children:"Overview"}),"\n",(0,a.jsx)(r.p,{children:"Harbor integration with Tekton enables the centralized storage of container images within the cluster,\neliminating the need for external services. By leveraging Harbor as the container registry, users can manage\nand store their automation results and reports in one place."}),"\n",(0,a.jsx)(r.h2,{id:"integration-procedure",children:"Integration Procedure"}),"\n",(0,a.jsx)(r.p,{children:"The integration process involves two steps:"}),"\n",(0,a.jsxs)(r.ol,{children:["\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsx)(r.p,{children:"Creating a project to store application images."}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsx)(r.p,{children:"Creating two service accounts (robot account) with different permissions to push (read/write) and pull (read-only) project images."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(r.h3,{id:"create-new-project",children:"Create New Project"}),"\n",(0,a.jsx)(r.p,{children:"The process of creating new projects is the following:"}),"\n",(0,a.jsxs)(r.ol,{children:["\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsx)(r.p,{children:"Log in to the Harbor console using your credentials."}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsxs)(r.p,{children:["Navigate to the ",(0,a.jsx)(r.strong,{children:"Projects"})," menu, click the ",(0,a.jsx)(r.strong,{children:"New Project"})," button:"]}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.img,{alt:"Harbor Console",src:n(23948).A+"",title:"Projects menu",width:"2650",height:"1326"})}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsxs)(r.p,{children:["On the ",(0,a.jsx)(r.strong,{children:"New Project"})," menu, enter a project name that matches your platform namespace in the ",(0,a.jsx)(r.strong,{children:"Project Name"})," field. Keep other fields as default and click ",(0,a.jsx)(r.strong,{children:"OK"})," to continue:"]}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.img,{alt:"New Project",src:n(85386).A+"",title:"New Project menu",width:"1140",height:"800"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(r.h3,{id:"set-up-robot-account",children:"Set Up Robot Account"}),"\n",(0,a.jsx)(r.p,{children:"To facilitate seamless interaction between KubeRocketCI and a Harbor project, it is crucial to establish a robot account. This process involves:"}),"\n",(0,a.jsxs)(r.ol,{children:["\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsxs)(r.p,{children:["Navigate to your newly created project, select ",(0,a.jsx)(r.strong,{children:"Robot Accounts"})," menu and choose ",(0,a.jsx)(r.strong,{children:"New Robot Account"}),":"]}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.img,{alt:"New Project",src:n(8803).A+"",title:"Create Robot Account menu",width:"1423",height:"647"})}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsx)(r.p,{children:"In the pop-up window, fill in the fields as follows:"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.strong,{children:"Name"})," - ",(0,a.jsx)(r.code,{children:"edp-push"}),";"]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.strong,{children:"Expiration time"})," -  set the value which is aligned with your organization policy;"]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.strong,{children:"Description"})," - ",(0,a.jsx)(r.code,{children:"read/write permissions"}),";"]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.strong,{children:"Permissions"})," - ",(0,a.jsx)(r.code,{children:"Pull Repository"})," and ",(0,a.jsx)(r.code,{children:"Push Repository"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(r.p,{children:["To proceed, click the ",(0,a.jsx)(r.strong,{children:"ADD"})," button:"]}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.img,{alt:"New Project",src:n(8019).A+"",title:"Robot Accounts menu",width:"575",height:"484"})}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsxs)(r.p,{children:["In the appeared window, copy the robot account credentials or click the ",(0,a.jsx)(r.strong,{children:"Export to file"})," button to save the secret and account name locally:"]}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.img,{alt:"New Project",src:n(43172).A+"",title:"New credentials for Robot Account",width:"862",height:"342"})}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsxs)(r.p,{children:["Provision the ",(0,a.jsx)(r.strong,{children:"kaniko-docker-config"})," secrets using kubectl, UI Portal or with the externalSecrets operator:"]}),"\n",(0,a.jsxs)(r.p,{children:["The ",(0,a.jsx)(r.code,{children:"auth"})," string can be generated by this command:"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:'echo -n "robot\\$edp-project+edp:secret" | base64\n'})}),"\n",(0,a.jsxs)(i.A,{defaultValue:"portal",values:[{label:"UI Portal",value:"portal"},{label:"Manifests",value:"manifests"},{label:"External Secrets Operator",value:"externalsecret"}],children:[(0,a.jsxs)(o.A,{value:"portal",children:[(0,a.jsxs)(r.p,{children:["Navigate to ",(0,a.jsx)(r.strong,{children:"Portal"})," -> ",(0,a.jsx)(r.strong,{children:"Configuration"})," -> ",(0,a.jsx)(r.strong,{children:"ARTIFACTS STORAGE"})," -> ",(0,a.jsx)(r.strong,{children:"Registry"}),". Update or click ",(0,a.jsx)(r.strong,{children:"+ ADD INTEGRATION"})," fill in the required fields and click ",(0,a.jsx)(r.code,{children:"Save"}),"."]}),(0,a.jsx)(r.p,{children:(0,a.jsx)(r.img,{alt:"Registry update manual secret",src:n(71286).A+"",title:"Registry update manual secret",width:"3584",height:"2016"})})]}),(0,a.jsx)(o.A,{value:"manifests",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-yaml",children:'  apiVersion: v1\n  kind: Secret\n  metadata:\n    name: kaniko-docker-config\n    namespace: edp\n    labels:\n      app.edp.epam.com/secret-type: registry\n      app.edp.epam.com/integration-secret: "true"\n  type: kubernetes.io/dockerconfigjson\n  stringData:\n    .dockerconfigjson: |\n      {\n        "auths" : {\n          "harbor-registry.com":\n            {\n              "username":"registry-username",\n              "password":"registry-password",\n              "auth": "secret-string"\n            }\n        }\n      }\n'})})}),(0,a.jsxs)(o.A,{value:"externalsecret",children:[(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-json",children:'"kaniko-docker-config":\n  {"auths" : "harbor-registry.com":\n    {\n      "username":"registry-username",\n      "password":"registry-password",\n      "auth": "secret-string"\n    }\n  }\n'})}),(0,a.jsxs)(r.p,{children:["Navigate to ",(0,a.jsx)(r.strong,{children:"Portal"})," -> ",(0,a.jsx)(r.strong,{children:"Configuration"})," -> ",(0,a.jsx)(r.strong,{children:"ARTIFACTS STORAGE"})," -> ",(0,a.jsx)(r.strong,{children:"Registry"}),". Here, you will observe the ",(0,a.jsx)(r.code,{children:"Managed by ExternalSecret"})," message:"]}),(0,a.jsx)(r.p,{children:(0,a.jsx)(r.img,{alt:"Registry managed by external secret operator",src:n(95351).A+"",title:"Registry managed by external secret operator",width:"3584",height:"2016"})}),(0,a.jsx)(r.admonition,{type:"note",children:(0,a.jsxs)(r.p,{children:["More details of External Secrets Operator Integration can be found in the ",(0,a.jsx)(r.a,{href:"/docs/operator-guide/secrets-management/external-secrets-operator-integration",children:"External Secrets Operator Integration"})," page."]})})]})]}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsx)(r.p,{children:"Repeat steps 2-3 with values below:"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.strong,{children:"Name"})," - ",(0,a.jsx)(r.code,{children:"edp-pull"}),";"]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.strong,{children:"Expiration time"})," -  set the value which is aligned with your organization policy;"]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.strong,{children:"Description"})," - ",(0,a.jsx)(r.code,{children:"read-only permissions"}),";"]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.strong,{children:"Permissions"})," - ",(0,a.jsx)(r.code,{children:"Pull Repository"}),"."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsxs)(r.p,{children:["Provision the ",(0,a.jsx)(r.strong,{children:"regcred"})," secrets using kubectl, EDP Portal or with the externalSecrets operator:"]}),"\n",(0,a.jsxs)(r.p,{children:["The ",(0,a.jsx)(r.code,{children:"auth"})," string can be generated by this command:",(0,a.jsx)("br",{})]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:'echo -n "robot\\$edp-project+edp-push:secret" | base64\n'})}),"\n",(0,a.jsxs)(i.A,{defaultValue:"portal",values:[{label:"UI Portal",value:"portal"},{label:"Manifests",value:"manifests"},{label:"External Secrets Operator",value:"externalsecret"}],children:[(0,a.jsxs)(o.A,{value:"portal",children:[(0,a.jsxs)(r.p,{children:["Navigate to ",(0,a.jsx)(r.strong,{children:"Portal"})," -> ",(0,a.jsx)(r.strong,{children:"Configuration"})," -> ",(0,a.jsx)(r.strong,{children:"ARTIFACTS STORAGE"})," -> ",(0,a.jsx)(r.strong,{children:"Registry"}),". Update or click ",(0,a.jsx)(r.strong,{children:"+ ADD INTEGRATION"})," fill in the required fields and click ",(0,a.jsx)(r.code,{children:"Save"}),"."]}),(0,a.jsx)(r.p,{children:(0,a.jsx)(r.img,{alt:"Registry update manual secret",src:n(85707).A+"",title:"Registry update manual secret",width:"3584",height:"2432"})})]}),(0,a.jsx)(o.A,{value:"manifests",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-yaml",children:'apiVersion: v1\nkind: Secret\nmetadata:\n  name: regcred\n  namespace: edp\n  labels:\n    app.edp.epam.com/secret-type: registry\n    app.edp.epam.com/integration-secret: "true"\ntype: kubernetes.io/dockerconfigjson\nstringData:\n  .dockerconfigjson: |\n    {\n      "auths" : {\n        "harbor-registry.com":\n          {\n            "username":"registry-username",\n            "password":"registry-password",\n            "auth": "secret-string"\n          }\n      }\n    }\n'})})}),(0,a.jsxs)(o.A,{value:"externalsecret",children:[(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-json",children:'"regcred":\n  {"auths" : "harbor-registry.com":\n    {\n      "username":"registry-username",\n      "password":"registry-password",\n      "auth": "secret-string"\n    }\n  }\n'})}),(0,a.jsxs)(r.p,{children:["Navigate to ",(0,a.jsx)(r.strong,{children:"Portal"})," -> ",(0,a.jsx)(r.strong,{children:"Configuration"})," -> ",(0,a.jsx)(r.strong,{children:"ARTIFACTS STORAGE"})," -> ",(0,a.jsx)(r.strong,{children:"Registry"}),". Here, you will observe the ",(0,a.jsx)(r.code,{children:"Managed by ExternalSecret"})," message:"]}),(0,a.jsx)(r.p,{children:(0,a.jsx)(r.img,{alt:"Registry managed by external secret operator",src:n(14822).A+"",title:"Registry managed by external secret operator",width:"3584",height:"2432"})}),(0,a.jsx)(r.admonition,{type:"note",children:(0,a.jsxs)(r.p,{children:["More details of External Secrets Operator Integration can be found in the ",(0,a.jsx)(r.a,{href:"/docs/operator-guide/secrets-management/external-secrets-operator-integration",children:"External Secrets Operator Integration"})," page."]})})]})]}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsxs)(r.p,{children:["In the ",(0,a.jsx)(r.a,{href:"https://github.com/epam/edp-install/blob/master/deploy-templates/values.yaml",children:"values.yaml"})," file for the ",(0,a.jsx)(r.strong,{children:"edp-install"})," Helm chart, set the following values for the specified fields:"]}),"\n",(0,a.jsxs)(i.A,{defaultValue:"manifests",values:[{label:"Manifests",value:"manifests"},{label:"External Secrets Operator",value:"externalsecret"}],children:[(0,a.jsxs)(o.A,{value:"manifests",children:[(0,a.jsxs)(r.p,{children:["If the ",(0,a.jsx)(r.code,{children:"kaniko-docker-config"})," secret has been created manually:"]}),(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-yaml",metastring:'title="values.yaml"',children:'...\nkaniko:\n  existingDockerConfig: "kaniko-docker-config"\nglobal:\n  dockerRegistry:\n    url: harbor-registry.com\n    type: "harbor"\n...\n'})})]}),(0,a.jsxs)(o.A,{value:"externalsecret",children:[(0,a.jsxs)(r.p,{children:["If the ",(0,a.jsx)(r.code,{children:"kaniko-docker-config"})," secret has been created via External Secrets Operator:"]}),(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-yaml",metastring:'title="values.yaml"',children:'...\nkaniko:\n  existingDockerConfig: "kaniko-docker-config"\nexternalSecrets:\n  enabled: true\nglobal:\n  dockerRegistry:\n    url: harbor-registry.com\n    type: "harbor"\n...\n'})})]})]}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsx)(r.p,{children:"(Optional) If you've already deployed the edp-install Helm chart, you can update it using the following command:"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"helm update --install edp epamedp/edp-install \\\n--values values.yaml \\\n--namespace edp\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(r.p,{children:"As a result, application images built in UI Portal will be stored in Harbor project and will be deployed from the harbor registry."}),"\n",(0,a.jsxs)(r.p,{children:["Harbor projects can be added and retained with a retention policy generated through the script in ",(0,a.jsx)(r.a,{href:"https://github.com/epam/edp-cluster-add-ons/tree/main/clusters/core/addons/harbor-ha/hack/harbor",children:"edp-cluster-add-ons"}),"."]}),"\n",(0,a.jsx)(r.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/docs/operator-guide/install-kuberocketci",children:"Install KubeRocketCI"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/docs/operator-guide/artifacts-management/harbor-installation",children:"Install Harbor"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/docs/operator-guide/project-management-and-reporting/jira-integration",children:"Adjust Jira Integration"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/docs/operator-guide/code-quality/sonarqube",children:"Custom SonarQube Integration"})}),"\n"]})]})}function p(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},79329:(e,r,n)=>{n.d(r,{A:()=>i});n(96540);var t=n(34164);const a={tabItem:"tabItem_Ymn6"};var s=n(74848);function i(e){let{children:r,hidden:n,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.A)(a.tabItem,i),hidden:n,children:r})}},65537:(e,r,n)=>{n.d(r,{A:()=>y});var t=n(96540),a=n(34164),s=n(65627),i=n(56347),o=n(50372),c=n(30604),l=n(11861),d=n(78749);function h(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:r,children:n}=e;return(0,t.useMemo)((()=>{const e=r??function(e){return h(e).map((e=>{let{props:{value:r,label:n,attributes:t,default:a}}=e;return{value:r,label:n,attributes:t,default:a}}))}(n);return function(e){const r=(0,l.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,n])}function p(e){let{value:r,tabValues:n}=e;return n.some((e=>e.value===r))}function g(e){let{queryString:r=!1,groupId:n}=e;const a=(0,i.W6)(),s=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n});return[(0,c.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const r=new URLSearchParams(a.location.search);r.set(s,e),a.replace({...a.location,search:r.toString()})}),[s,a])]}function A(e){const{defaultValue:r,queryString:n=!1,groupId:a}=e,s=u(e),[i,c]=(0,t.useState)((()=>function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:r,tabValues:s}))),[l,h]=g({queryString:n,groupId:a}),[A,x]=function(e){let{groupId:r}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(r),[a,s]=(0,d.Dv)(n);return[a,(0,t.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),m=(()=>{const e=l??A;return p({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{m&&c(m)}),[m]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),x(e)}),[h,x,s]),tabValues:s}}var x=n(9136);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=n(74848);function f(e){let{className:r,block:n,selectedValue:t,selectValue:i,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,s.a_)(),d=e=>{const r=e.currentTarget,n=c.indexOf(r),a=o[n].value;a!==t&&(l(r),i(a))},h=e=>{let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;r=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;r=c[n]??c[c.length-1];break}}r?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},r),children:o.map((e=>{let{value:r,label:n,attributes:s}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:e=>{c.push(e)},onKeyDown:h,onClick:d,...s,className:(0,a.A)("tabs__item",m.tabItem,s?.className,{"tabs__item--active":t===r}),children:n??r},r)}))})}function b(e){let{lazy:r,children:n,selectedValue:s}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){const e=i.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:i.map(((e,r)=>(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==s})))})}function v(e){const r=A(e);return(0,j.jsxs)("div",{className:(0,a.A)("tabs-container",m.tabList),children:[(0,j.jsx)(f,{...r,...e}),(0,j.jsx)(b,{...r,...e})]})}function y(e){const r=(0,x.A)();return(0,j.jsx)(v,{...e,children:h(e.children)},String(r))}},23948:(e,r,n)=>{n.d(r,{A:()=>t});const t=n.p+"assets/images/harbor-console-projects-9bc4e33feacff72466c44b639bdc8089.png"},8019:(e,r,n)=>{n.d(r,{A:()=>t});const t=n.p+"assets/images/harbor-create-robot-account-25545cc9fa5625a85a86e3c30805958f.png"},43172:(e,r,n)=>{n.d(r,{A:()=>t});const t="data:image/png;base64,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"},85386:(e,r,n)=>{n.d(r,{A:()=>t});const t=n.p+"assets/images/harbor-new-project-228ba3ee919a9ec162515102c506c5d6.png"},8803:(e,r,n)=>{n.d(r,{A:()=>t});const t=n.p+"assets/images/harbor-robot-accounts-menu-c5736f71db8a80f09d81a85ba29d63f2.png"},14822:(e,r,n)=>{n.d(r,{A:()=>t});const t=n.p+"assets/images/kaniko-externalsecret-9338e0b1e84e84369435929600fb92c6.png"},95351:(e,r,n)=>{n.d(r,{A:()=>t});const t=n.p+"assets/images/kaniko-secret-1c7962cff260b9bb6119127c5406231e.png"},85707:(e,r,n)=>{n.d(r,{A:()=>t});const t=n.p+"assets/images/regcred-externalsecret-fe7bad400f0437f102356c0e3d132643.png"},71286:(e,r,n)=>{n.d(r,{A:()=>t});const t=n.p+"assets/images/regcred-secret-72e25a968f692f2c739596adc856c987.png"},28453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>o});var t=n(96540);const a={},s=t.createContext(a);function i(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);