"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5291],{50510:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>h});var t=r(74848),a=r(28453),s=r(11470),i=r(19365);const o={},l="Integrate Harbor With Tekton Pipelines",c={id:"operator-guide/artifacts-management/harbor-integration",title:"Integrate Harbor With Tekton Pipelines",description:"Harbor is an advanced, open-source cloud-native registry that securely manages container images and Helm charts, and also supports a wide range of OCI artifacts. It enforces policies and role-based access control, while ensuring all managed content, including container images and other artifacts, are scanned and certified free from vulnerabilities. For those looking to integrate Harbor into their workflow, the documentation provides comprehensive steps on creating projects and establishing robot accounts. These accounts facilitate automated and secure interactions with the registry, crucial for CI pipelines and enhancing overall security and efficiency in artifact management.",source:"@site/versioned_docs/version-3.9.0/operator-guide/artifacts-management/harbor-integration.md",sourceDirName:"operator-guide/artifacts-management",slug:"/operator-guide/artifacts-management/harbor-integration",permalink:"/docs/operator-guide/artifacts-management/harbor-integration",draft:!1,unlisted:!1,editUrl:"https://github.com/KubeRocketCI/docs/edit/main/docs/operator-guide/artifacts-management/harbor-integration.md",tags:[],version:"3.9.0",lastUpdatedBy:"Sergiy Kulanov",lastUpdatedAt:1719645984e3,frontMatter:{},sidebar:"operatorGuideSidebar",previous:{title:"Harbor OIDC Configuration",permalink:"/docs/operator-guide/artifacts-management/harbor-oidc"},next:{title:"SonarQube Integration",permalink:"/docs/operator-guide/code-quality/sonarqube"}},d={},h=[{value:"Overview",id:"overview",level:2},{value:"Integration Procedure",id:"integration-procedure",level:2},{value:"Create New Project",id:"create-new-project",level:3},{value:"Set Up Robot Account",id:"set-up-robot-account",level:3},{value:"Related Articles",id:"related-articles",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"integrate-harbor-with-tekton-pipelines",children:"Integrate Harbor With Tekton Pipelines"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://goharbor.io/",children:"Harbor"})," is an advanced, open-source cloud-native registry that securely manages container images and Helm charts, and also supports a wide range of OCI artifacts. It enforces policies and role-based access control, while ensuring all managed content, including container images and other artifacts, are scanned and certified free from vulnerabilities. For those looking to integrate Harbor into their workflow, the documentation provides comprehensive steps on ",(0,t.jsx)(n.a,{href:"https://goharbor.io/docs/2.0.0/working-with-projects/create-projects/",children:"creating projects"})," and establishing robot accounts. These accounts facilitate automated and secure interactions with the registry, crucial for CI pipelines and enhancing overall security and efficiency in artifact management."]}),"\n",(0,t.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(n.p,{children:"Harbor integration with Tekton enables the centralized storage of container images within the cluster,\neliminating the need for external services. By leveraging Harbor as the container registry, users can manage\nand store their automation results and reports in one place."}),"\n",(0,t.jsx)(n.h2,{id:"integration-procedure",children:"Integration Procedure"}),"\n",(0,t.jsx)(n.p,{children:"The integration process involves two steps:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Creating a project to store application images."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Creating two service accounts (robot account) with different permissions to push (read/write) and pull (read-only) project images."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"create-new-project",children:"Create New Project"}),"\n",(0,t.jsx)(n.p,{children:"The process of creating new projects is the following:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Log in to the Harbor console using your credentials."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Navigate to the ",(0,t.jsx)(n.strong,{children:"Projects"})," menu, click the ",(0,t.jsx)(n.strong,{children:"New Project"})," button:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Harbor Console",src:r(51210).A+"",title:"Projects menu",width:"2650",height:"1326"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["On the ",(0,t.jsx)(n.strong,{children:"New Project"})," menu, enter a project name that matches your platform namespace in the ",(0,t.jsx)(n.strong,{children:"Project Name"})," field. Keep other fields as default and click ",(0,t.jsx)(n.strong,{children:"OK"})," to continue:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"New Project",src:r(29524).A+"",title:"New Project menu",width:"1140",height:"800"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"set-up-robot-account",children:"Set Up Robot Account"}),"\n",(0,t.jsx)(n.p,{children:"To facilitate seamless interaction between KubeRocketCI and a Harbor project, it is crucial to establish a robot account. This process involves:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Navigate to your newly created project, select ",(0,t.jsx)(n.strong,{children:"Robot Accounts"})," menu and choose ",(0,t.jsx)(n.strong,{children:"New Robot Account"}),":"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"New Project",src:r(565).A+"",title:"Create Robot Account menu",width:"1423",height:"647"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"In the pop-up window, fill in the fields as follows:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Name"})," - ",(0,t.jsx)(n.code,{children:"edp-push"}),";"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Expiration time"})," -  set the value which is aligned with your organization policy;"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Description"})," - ",(0,t.jsx)(n.code,{children:"read/write permissions"}),";"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Permissions"})," - ",(0,t.jsx)(n.code,{children:"Pull Repository"})," and ",(0,t.jsx)(n.code,{children:"Push Repository"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["To proceed, click the ",(0,t.jsx)(n.strong,{children:"ADD"})," button:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"New Project",src:r(60321).A+"",title:"Robot Accounts menu",width:"575",height:"484"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In the appeared window, copy the robot account credentials or click the ",(0,t.jsx)(n.strong,{children:"Export to file"})," button to save the secret and account name locally:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"New Project",src:r(35234).A+"",title:"New credentials for Robot Account",width:"862",height:"342"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Provision the ",(0,t.jsx)(n.strong,{children:"kaniko-docker-config"})," secrets using kubectl, UI Portal or with the externalSecrets operator:"]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"auth"})," string can be generated by this command:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'echo -n "robot\\$edp-project+edp:secret" | base64\n'})}),"\n",(0,t.jsxs)(s.A,{defaultValue:"portal",values:[{label:"UI Portal",value:"portal"},{label:"Manifests",value:"manifests"},{label:"External Secrets Operator",value:"externalsecret"}],children:[(0,t.jsxs)(i.A,{value:"portal",children:[(0,t.jsxs)(n.p,{children:["Navigate to ",(0,t.jsx)(n.strong,{children:"EDP"})," -> ",(0,t.jsx)(n.strong,{children:"Configuration"})," -> ",(0,t.jsx)(n.strong,{children:"Registry"}),". Fill in the required fields and click ",(0,t.jsx)(n.code,{children:"Save"}),"."]}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Registry update manual secret",src:r(71836).A+"",title:"Registry update manual secret",width:"1922",height:"1060"})})]}),(0,t.jsx)(i.A,{value:"manifests",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'  apiVersion: v1\n  kind: Secret\n  metadata:\n    name: kaniko-docker-config\n    namespace: edp\n    labels:\n      app.edp.epam.com/secret-type: registry\n      app.edp.epam.com/integration-secret: "true"\n  type: kubernetes.io/dockerconfigjson\n  stringData:\n    .dockerconfigjson: |\n      {\n        "auths" : {\n          "harbor-registry.com":\n            {\n              "username":"registry-username",\n              "password":"registry-password",\n              "auth": "secret-string"\n            }\n        }\n      }\n'})})}),(0,t.jsxs)(i.A,{value:"externalsecret",children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'"kaniko-docker-config":\n  {"auths" : "harbor-registry.com":\n    {\n      "username":"registry-username",\n      "password":"registry-password",\n      "auth": "secret-string"\n    }\n  }\n'})}),(0,t.jsxs)(n.p,{children:["Navigate to ",(0,t.jsx)(n.strong,{children:"EDP"})," -> ",(0,t.jsx)(n.strong,{children:"Configuration"})," -> ",(0,t.jsx)(n.strong,{children:"Registry"}),". Here, you will observe the ",(0,t.jsx)(n.code,{children:"Managed by ExternalSecret"})," message:"]}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Registry managed by external secret operator",src:r(32057).A+"",title:"Registry managed by external secret operator",width:"1922",height:"1060"})}),(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["More details of External Secrets Operator Integration can be found in the ",(0,t.jsx)(n.a,{href:"/docs/operator-guide/secrets-management/external-secrets-operator-integration",children:"External Secrets Operator Integration"})," page."]})})]})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Repeat steps 2-3 with values below:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Name"})," - ",(0,t.jsx)(n.code,{children:"edp-pull"}),";"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Expiration time"})," -  set the value which is aligned with your organization policy;"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Description"})," - ",(0,t.jsx)(n.code,{children:"read-only permissions"}),";"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Permissions"})," - ",(0,t.jsx)(n.code,{children:"Pull Repository"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Provision the ",(0,t.jsx)(n.strong,{children:"regcred"})," secrets using kubectl, EDP Portal or with the externalSecrets operator:"]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"auth"})," string can be generated by this command:",(0,t.jsx)("br",{})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'echo -n "robot\\$edp-project+edp-push:secret" | base64\n'})}),"\n",(0,t.jsxs)(s.A,{defaultValue:"portal",values:[{label:"UI Portal",value:"portal"},{label:"Manifests",value:"manifests"},{label:"External Secrets Operator",value:"externalsecret"}],children:[(0,t.jsxs)(i.A,{value:"portal",children:[(0,t.jsxs)(n.p,{children:["Navigate to ",(0,t.jsx)(n.strong,{children:"EDP"})," -> ",(0,t.jsx)(n.strong,{children:"Configuration"})," -> ",(0,t.jsx)(n.strong,{children:"Registry"}),". Fill in the required fields and click ",(0,t.jsx)(n.code,{children:"Save"}),"."]}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Registry update manual secret",src:r(11249).A+"",title:"Registry update manual secret",width:"1922",height:"1060"})})]}),(0,t.jsx)(i.A,{value:"manifests",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'apiVersion: v1\nkind: Secret\nmetadata:\n  name: regcred\n  namespace: edp\n  labels:\n    app.edp.epam.com/secret-type: registry\n    app.edp.epam.com/integration-secret: "true"\ntype: kubernetes.io/dockerconfigjson\nstringData:\n  .dockerconfigjson: |\n    {\n      "auths" : {\n        "harbor-registry.com":\n          {\n            "username":"registry-username",\n            "password":"registry-password",\n            "auth": "secret-string"\n          }\n      }\n    }\n'})})}),(0,t.jsxs)(i.A,{value:"externalsecret",children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'"regcred":\n  {"auths" : "harbor-registry.com":\n    {\n      "username":"registry-username",\n      "password":"registry-password",\n      "auth": "secret-string"\n    }\n  }\n'})}),(0,t.jsxs)(n.p,{children:["Navigate to ",(0,t.jsx)(n.strong,{children:"EDP"})," -> ",(0,t.jsx)(n.strong,{children:"Configuration"})," -> ",(0,t.jsx)(n.strong,{children:"Registry"}),". Here, you will observe the ",(0,t.jsx)(n.code,{children:"Managed by ExternalSecret"})," message:"]}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Registry managed by external secret operator",src:r(39912).A+"",title:"Registry managed by external secret operator",width:"1922",height:"1060"})}),(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["More details of External Secrets Operator Integration can be found in the ",(0,t.jsx)(n.a,{href:"/docs/operator-guide/secrets-management/external-secrets-operator-integration",children:"External Secrets Operator Integration"})," page."]})})]})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.a,{href:"https://github.com/epam/edp-install/blob/master/deploy-templates/values.yaml",children:"values.yaml"})," file for the ",(0,t.jsx)(n.strong,{children:"edp-install"})," Helm chart, set the following values for the specified fields:"]}),"\n",(0,t.jsxs)(s.A,{defaultValue:"manifests",values:[{label:"Manifests",value:"manifests"},{label:"External Secrets Operator",value:"externalsecret"}],children:[(0,t.jsxs)(i.A,{value:"manifests",children:[(0,t.jsxs)(n.p,{children:["If the ",(0,t.jsx)(n.code,{children:"kaniko-docker-config"})," secret has been created manually:"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title="values.yaml"',children:'...\nkaniko:\n  existingDockerConfig: "kaniko-docker-config"\nglobal:\n  dockerRegistry:\n    url: harbor-registry.com\n    type: "harbor"\n...\n'})})]}),(0,t.jsxs)(i.A,{value:"externalsecret",children:[(0,t.jsxs)(n.p,{children:["If the ",(0,t.jsx)(n.code,{children:"kaniko-docker-config"})," secret has been created via External Secrets Operator:"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title="values.yaml"',children:'...\nkaniko:\n  existingDockerConfig: "kaniko-docker-config"\nexternalSecrets:\n  enabled: true\nglobal:\n  dockerRegistry:\n    url: harbor-registry.com\n    type: "harbor"\n...\n'})})]})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"(Optional) If you've already deployed the edp-install Helm chart, you can update it using the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"helm update --install edp epamedp/edp-install \\\n--values values.yaml \\\n--namespace edp\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"As a result, application images built in UI Portal will be stored in Harbor project and will be deployed from the harbor registry."}),"\n",(0,t.jsxs)(n.p,{children:["Harbor projects can be added and retained with a retention policy generated through the script in ",(0,t.jsx)(n.a,{href:"https://github.com/epam/edp-cluster-add-ons/tree/main/add-ons/harbor-ha/hack/harbor",children:"edp-cluster-add-ons"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/operator-guide/install-kuberocketci",children:"Install KubeRocketCI"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/operator-guide/artifacts-management/harbor-installation",children:"Install Harbor"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/operator-guide/project-management-and-reporting/jira-integration",children:"Adjust Jira Integration"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/operator-guide/code-quality/sonarqube",children:"Custom SonarQube Integration"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>i});r(96540);var t=r(34164);const a={tabItem:"tabItem_Ymn6"};var s=r(74848);function i(e){let{children:n,hidden:r,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.A)(a.tabItem,i),hidden:r,children:n})}},11470:(e,n,r)=>{r.d(n,{A:()=>w});var t=r(96540),a=r(34164),s=r(23104),i=r(56347),o=r(205),l=r(57485),c=r(31682),d=r(70679);function h(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:a}}=e;return{value:n,label:r,attributes:t,default:a}}))}(r);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:r}=e;const a=(0,i.W6)(),s=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,l.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function m(e){const{defaultValue:n,queryString:r=!1,groupId:a}=e,s=u(e),[i,l]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[c,h]=g({queryString:r,groupId:a}),[m,x]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,d.Dv)(r);return[a,(0,t.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:a}),j=(()=>{const e=c??m;return p({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{j&&l(j)}),[j]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),x(e)}),[h,x,s]),tabValues:s}}var x=r(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=r(74848);function f(e){let{className:n,block:r,selectedValue:t,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),d=e=>{const n=e.currentTarget,r=l.indexOf(n),a=o[r].value;a!==t&&(c(n),i(a))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;n=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;n=l[r]??l[l.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},n),children:o.map((e=>{let{value:n,label:r,attributes:s}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>l.push(e),onKeyDown:h,onClick:d,...s,className:(0,a.A)("tabs__item",j.tabItem,s?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function v(e){let{lazy:n,children:r,selectedValue:a}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function y(e){const n=m(e);return(0,b.jsxs)("div",{className:(0,a.A)("tabs-container",j.tabList),children:[(0,b.jsx)(f,{...n,...e}),(0,b.jsx)(v,{...n,...e})]})}function w(e){const n=(0,x.A)();return(0,b.jsx)(y,{...e,children:h(e.children)},String(n))}},51210:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/harbor-console-projects-003cf5f6e870e82acf5d7d738e1db740.png"},60321:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/harbor-create-robot-account-9ec69eac22a0325fb5fbd423d9c9e095.png"},35234:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/harbor-new-credentials-of-robot-account-0a117be16a72faf8839f47cd4531c94c.png"},29524:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/harbor-new-project-487f2858e58fd368c456e46e96103967.png"},565:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/harbor-robot-accounts-menu-e8a83f0ecf4de283f447fa9ffb9f9313.png"},39912:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/kaniko-externalsecret-53e5ffedd0e4b418d1dd5c9c101e1854.png"},32057:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/kaniko-secret-a6d757c7ca0bea626dbfad1d5db35334.png"},11249:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/regcred-externalsecret-b9be59a19bc3b286a17508331588b60f.png"},71836:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/regcred-secret-55bc6042bfa0686289d39492793f66a4.png"},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>o});var t=r(96540);const a={},s=t.createContext(a);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);