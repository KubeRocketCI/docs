"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[12121],{57088:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"operator-guide/upgrade/upgrade-edp-3.8","title":"Upgrade KubeRocketCI v3.7 to 3.8","description":"We suggest backing up the KubeRocketCI environment before starting the upgrade procedure.","source":"@site/versioned_docs/version-3.9/operator-guide/upgrade/upgrade-edp-3.8.md","sourceDirName":"operator-guide/upgrade","slug":"/operator-guide/upgrade/upgrade-edp-3.8","permalink":"/docs/3.9/operator-guide/upgrade/upgrade-edp-3.8","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/operator-guide/upgrade/upgrade-edp-3.8.md","tags":[],"version":"3.9","lastUpdatedBy":"Sergiy Kulanov","lastUpdatedAt":1737665242000,"frontMatter":{},"sidebar":"operatorGuideSidebar","previous":{"title":"Upgrade KubeRocketCI v3.8 to 3.9","permalink":"/docs/3.9/operator-guide/upgrade/upgrade-edp-3.9"},"next":{"title":"Upgrade EDP v3.6 to 3.7","permalink":"/docs/3.9/operator-guide/upgrade/upgrade-edp-3.7"}}');var a=t(74848),s=t(28453),l=t(11470),o=t(19365);const i={},c="Upgrade KubeRocketCI v3.7 to 3.8",d={},u=[];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components},{Head:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"upgrade-kuberocketci-v37-to-38",children:"Upgrade KubeRocketCI v3.7 to 3.8"})}),"\n",(0,a.jsx)(r,{children:(0,a.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/operator-guide/upgrade/upgrade-edp-3.8/"})}),"\n",(0,a.jsx)(n.admonition,{type:"warning",children:(0,a.jsx)(n.p,{children:"We suggest backing up the KubeRocketCI environment before starting the upgrade procedure."})}),"\n",(0,a.jsx)(n.p,{children:"This section provides detailed instructions for upgrading the KubeRocketCI to the 3.8.1 version. Follow the steps and requirements outlined below:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Delete the following resources:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"kubectl -n edp delete ingress edp-headlamp\nkubectl -n edp delete ingress edp-tekton-dashboard\nkubectl -n edp delete ingress el-github-listener\n\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Delete the following Custom Resource Definitions (CRDs):"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"kubectl delete CustomResourceDefinition edpcomponents.v1.edp.epam.com\n"})}),"\n",(0,a.jsxs)(n.admonition,{type:"info",children:[(0,a.jsx)(n.p,{children:"Prior to deleting CRDs, please remove all the complementing resources:"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'kubectl -n edp get edpcomponent -o custom-columns=":metadata.name" | xargs -I {} kubectl -n edp delete edpcomponent {}\n'})})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"In Keycloak, update the KubeRocketCI portal URL:"}),"\n",(0,a.jsxs)(n.p,{children:["Navigate to the Keycloak realm with the ",(0,a.jsx)(n.code,{children:"Portal"})," client. Update the ",(0,a.jsx)(n.code,{children:"Valid redirect URIs"})," field:"]}),"\n",(0,a.jsx)(n.p,{children:"Old value:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"https://edp-headlamp-edp.<dns_wildcard>/*\n"})}),"\n",(0,a.jsx)(n.p,{children:"New value:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"https://portal-edp.<dns_wildcard>/*\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Keycloak client",src:t(78957).A+"",title:"Keycloak client",width:"2354",height:"1294"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Remove all the Argo CD applications:"}),"\n",(0,a.jsxs)(n.admonition,{type:"warning",children:[(0,a.jsx)(n.p,{children:"This command will delete all the deployments."}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"kubectl -n edp get application -o custom-columns=\":metadata.name\" | xargs -I {} kubectl -n edp get application {} -o json | jq 'del(.metadata.finalizers)' | kubectl replace -f -\n"})})]}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["Beginning from version 3.8.x, KubeRocketCI uses Argo CD application set instead applications to manage deploy environments, please ensure to upgrade your Argo CD instance to v2.10.3 and higher to work with this kind of resource. An example of how to install it is provided in the ",(0,a.jsx)(n.a,{href:"https://github.com/epam/edp-cluster-add-ons/blob/main/clusters/core/addons/argo-cd/values.yaml#L30",children:"edp-cluster-addons"})," repository."]})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Familiarize yourself with the updated file structure of the ",(0,a.jsx)(n.a,{href:"https://raw.githubusercontent.com/epam/edp-install/v3.8.1/deploy-templates/values.yaml",children:"values.yaml"})," file and adjust your values.yaml file accordingly:"]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Starting from the version 3.8.x, KubeRocketCI supports multiple Git servers, so the ",(0,a.jsx)(n.code,{children:"global.gitProvider"})," value was renamed:"]}),"\n",(0,a.jsx)(n.p,{children:"Old format:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"global:\n  gitProvider: github\n"})}),"\n",(0,a.jsx)(n.p,{children:"New format:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:'global:\n  gitProviders:\n    - github\n    # - gitlab\n    # - gerrit\n...\nedp-tekton:\n  gitServers:\n    github:\n      gitProvider: github\n      host: github.com\n      webhook:\n        skipWebhookSSLVerification: false\n      eventListener:\n        enabled: true\n        resources:\n          requests:\n              memory: "64Mi"\n              cpu: "50m"\n          limits:\n              memory: "128Mi"\n              cpu: "500m"\n          ingress:\n            enabled: true\n'})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"EDP-components"})," custom resources migrated to the ",(0,a.jsx)(n.code,{children:"quick-links"})," section:"]}),"\n",(0,a.jsx)(n.p,{children:"Old format:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"EDPComponents:\n  - prometheus:\n      url: https://ingress-prometheus.example.com\n      visible: true\n      icon: icon_in_base64\n  - kibana:\n      url: https://ingress-kibana.example.com\n      visible: false\n      icon: icon_in_base64\n  - another_tool:\n      url: https://ingress-anothertool.example.com\n      visible: true\n      icon: icon_in_base64\n"})}),"\n",(0,a.jsx)(n.p,{children:"New format for default components:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:'quickLinks:\n  argocd: "https://argocd.example.com"\n  defectdojo: "https://defectdojo.example.com"\n  dependency_track: "https://dependency_track.example.com"\n  docker_registry: "https://docker_registry.example.com"\n  grafana: "https://grafana.example.com"\n  kibana: "https://kibana.example.com"\n  nexus: "https://nexus.example.com"\n  sonar: "https://sonar.example.com"\n'})}),"\n",(0,a.jsx)(n.p,{children:"New format for extra components:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"extraQuickLinks:\n  - prometheus:\n      url: https://ingress-prometheus.example.com\n      visible: true\n      icon: icon_in_base64\n  - another_tool:\n      url: https://ingress-anothertool.example.com\n      visible: true\n      icon: icon_in_base64\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"To upgrade KubeRocketCI to the v3.8.1, run the following command:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"helm upgrade edp epamedp/edp-install -n edp --values values.yaml --version=3.8.1\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["To verify the installation, test the deployment before applying it to the cluster using the ",(0,a.jsx)(n.code,{children:"--dry-run"})," tag:",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(n.code,{children:"helm upgrade edp epamedp/edp-install -n edp --values values.yaml --version=3.8.1 --dry-run"})]})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Update webhooks for Github and GitLab:"}),"\n",(0,a.jsxs)(l.A,{defaultValue:"command",values:[{label:"Command",value:"command"},{label:"Manual",value:"manual"}],children:[(0,a.jsx)(o.A,{value:"command",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'kubectl -n edp get codebases -o custom-columns=":metadata.name" | xargs -I {} kubectl patch codebases -n edp {} --subresource=status --type=json -p \'[{"op": "remove", "path": "/status/webHookID"}]\'\nkubectl delete pod -l name=codebase-operator\n'})})}),(0,a.jsx)(o.A,{value:"manual",children:(0,a.jsxs)(l.A,{defaultValue:"github",values:[{label:"GitHub",value:"github"},{label:"GitLab",value:"gitlab"}],children:[(0,a.jsxs)(o.A,{value:"github",children:[(0,a.jsxs)(n.p,{children:["Open repository in Github, navigate to ",(0,a.jsx)(n.strong,{children:"Settings"})," -> ",(0,a.jsx)(n.strong,{children:"Webhooks"})," -> Select exist webhook and click ",(0,a.jsx)(n.code,{children:"edit"}),".\nChange Payload URL:"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"Old value: https://el-github-listener-edp.<dns_wildcard>\n\nNew value: https://el-github-edp.<dns_wildcard>\n"})})]}),(0,a.jsxs)(o.A,{value:"gitlab",children:[(0,a.jsxs)(n.p,{children:["Open repository in Github, navigate to ",(0,a.jsx)(n.strong,{children:"Settings"})," -> ",(0,a.jsx)(n.strong,{children:"Webhooks"})," -> Select exist webhook and click ",(0,a.jsx)(n.code,{children:"edit"}),".\nChange Payload URL:"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"Old value: https://el-gitlab-listener-edp.<dns_wildcard>\n\nNew value: https://el-gitlab-edp.<dns_wildcard>\n"})})]})]})})]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>l});t(96540);var r=t(34164);const a={tabItem:"tabItem_Ymn6"};var s=t(74848);function l(e){let{children:n,hidden:t,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,l),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>y});var r=t(96540),a=t(34164),s=t(23104),l=t(56347),o=t(205),i=t(57485),c=t(31682),d=t(70679);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const a=(0,l.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=p(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[c,u]=m({queryString:t,groupId:a}),[g,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,d.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),x=(()=>{const e=c??g;return h({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{x&&i(x)}),[x]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),b(e)}),[u,b,s]),tabValues:s}}var b=t(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(74848);function j(e){let{className:n,block:t,selectedValue:r,selectValue:l,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),d=e=>{const n=e.currentTarget,t=i.indexOf(n),a=o[t].value;a!==r&&(c(n),l(a))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>i.push(e),onKeyDown:u,onClick:d,...s,className:(0,a.A)("tabs__item",x.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:s}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function k(e){const n=g(e);return(0,f.jsxs)("div",{className:(0,a.A)("tabs-container",x.tabList),children:[(0,f.jsx)(j,{...n,...e}),(0,f.jsx)(v,{...n,...e})]})}function y(e){const n=(0,b.A)();return(0,f.jsx)(k,{...e,children:u(e.children)},String(n))}},78957:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/portal-keycloak-4836fe05362e07e94be81eb9ada19f33.png"},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var r=t(96540);const a={},s=r.createContext(a);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);