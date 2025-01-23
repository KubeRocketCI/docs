"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[71361],{89761:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"operator-guide/kubernetes-cluster-settings","title":"Set Up Kubernetes","description":"Make sure the cluster meets the following conditions:","source":"@site/versioned_docs/version-3.9/operator-guide/kubernetes-cluster-settings.md","sourceDirName":"operator-guide","slug":"/operator-guide/kubernetes-cluster-settings","permalink":"/docs/3.9/operator-guide/kubernetes-cluster-settings","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/operator-guide/kubernetes-cluster-settings.md","tags":[],"version":"3.9","lastUpdatedBy":"Sergiy Kulanov","lastUpdatedAt":1737665242000,"frontMatter":{},"sidebar":"operatorGuideSidebar","previous":{"title":"Overview","permalink":"/docs/3.9/operator-guide/prerequisites"},"next":{"title":"Set Up OpenShift","permalink":"/docs/3.9/operator-guide/openshift-cluster-settings"}}');var r=t(74848),a=t(28453),l=t(11470),i=t(19365);const o={},c="Set Up Kubernetes",u={},d=[{value:"Related Articles",id:"related-articles",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components},{Head:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"set-up-kubernetes",children:"Set Up Kubernetes"})}),"\n",(0,r.jsx)(t,{children:(0,r.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/operator-guide/kubernetes-cluster-settings/"})}),"\n",(0,r.jsx)(n.p,{children:"Make sure the cluster meets the following conditions:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Kubernetes cluster is installed with minimum 2 worker nodes with total capacity 8 Cores and 32Gb RAM."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Machine with ",(0,r.jsx)(n.a,{href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/",children:"kubectl"})," is installed with a cluster-admin access to the Kubernetes cluster."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Ingress controller is installed in a cluster, for example ",(0,r.jsx)(n.a,{href:"/docs/3.9/operator-guide/install-ingress-nginx",children:"ingress-nginx"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Ingress controller is configured with the disabled HTTP/2 protocol and header size of 64k support."}),"\n",(0,r.jsx)(n.p,{children:"Find below an example of the Config Map for the NGINX Ingress controller:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'kind: ConfigMap\napiVersion: v1\nmetadata:\n  name: nginx-configuration\n  namespace: ingress-nginx\n  labels:\n    app.kubernetes.io/name: ingress-nginx\n    app.kubernetes.io/part-of: ingress-nginx\ndata:\n  client-header-buffer-size: 64k\n  large-client-header-buffers: 4 64k\n  use-http2: "false"\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Load balancer (if any exists in front of the Ingress controller) is configured with session stickiness, disabled HTTP/2 protocol and header size of 32k support."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Keycloak instance is installed. To get accurate information on how to install Keycloak, please refer to the ",(0,r.jsx)(n.a,{href:"/docs/3.9/operator-guide/auth/keycloak",children:"Install Keycloak"})," instruction."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Helm 3.10 or higher is installed on the installation machine with the help of the ",(0,r.jsx)(n.a,{href:"https://v3.helm.sh/docs/intro/install/",children:"Installing Helm"})," instruction."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Storage classes are used with the ",(0,r.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/storage/persistent-volumes/#retain",children:"Retain Reclaim Policy"})," and ",(0,r.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/storage/persistent-volumes/#delete",children:"Delete Reclaim Policy"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["We recommended using our storage class as ",(0,r.jsx)(n.a,{href:"https://kubernetes.io/docs/tasks/administer-cluster/change-default-storage-class/#changing-the-default-storageclass",children:"default storage class"}),".",(0,r.jsx)("br",{})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsxs)(n.p,{children:["By default, KubeRocketCI uses the ",(0,r.jsx)(n.code,{children:"default Storage Class"})," in a cluster. We recommend using the following Storage Classes."]}),(0,r.jsx)(n.p,{children:"Storage class templates with the Retain and Delete Reclaim Policies:"}),(0,r.jsxs)(l.A,{defaultValue:"gp3",values:[{label:"ebs-sc",value:"ebs-sc"},{label:"gp3",value:"gp3"},{label:"gp3-retain",value:"gp3-retain"}],children:[(0,r.jsx)(i.A,{value:"ebs-sc",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"apiVersion: storage.k8s.io/v1\nkind: StorageClass\nmetadata:\n  name: ebs-sc\n  annotations:\n    storageclass.kubernetes.io/is-default-class: 'true'\nallowedTopologies: []\nmountOptions: []\nprovisioner: ebs.csi.aws.com\nreclaimPolicy: Retain\nvolumeBindingMode: Immediate\n"})})}),(0,r.jsx)(i.A,{value:"gp3",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"apiVersion: storage.k8s.io/v1\nkind: StorageClass\nmetadata:\n  name: gp3\n  annotations:\n    storageclass.kubernetes.io/is-default-class: 'true'\nallowedTopologies: []\nmountOptions: []\nprovisioner: ebs.csi.aws.com\nreclaimPolicy: Delete\nvolumeBindingMode: Immediate\nallowVolumeExpansion: true\n"})})}),(0,r.jsx)(i.A,{value:"gp3-retain",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"apiVersion: storage.k8s.io/v1\nkind: StorageClass\nmetadata:\n  name: gp3-retain\nallowedTopologies: []\nmountOptions: []\nprovisioner: ebs.csi.aws.com\nreclaimPolicy: Retain\nvolumeBindingMode: Immediate\nallowVolumeExpansion: true\n"})})})]})]}),"\n",(0,r.jsx)(n.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/3.9/operator-guide/infrastructure-providers/aws/ebs-csi-driver",children:"Install Amazon EBS CSI Driver"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/3.9/operator-guide/install-ingress-nginx",children:"Install NGINX Ingress Controller"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/3.9/operator-guide/auth/keycloak",children:"Install Keycloak"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>l});t(96540);var s=t(34164);const r={tabItem:"tabItem_Ymn6"};var a=t(74848);function l(e){let{children:n,hidden:t,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,l),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>w});var s=t(96540),r=t(34164),a=t(23104),l=t(56347),i=t(205),o=t(57485),c=t(31682),u=t(70679);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:r}}=e;return{value:n,label:t,attributes:s,default:r}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const r=(0,l.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(a),(0,s.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(r.location.search);n.set(a,e),r.replace({...r.location,search:n.toString()})}),[a,r])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,a=h(e),[l,o]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:a}))),[c,d]=m({queryString:t,groupId:r}),[g,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,a]=(0,u.Dv)(t);return[r,(0,s.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:r}),b=(()=>{const e=c??g;return p({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{b&&o(b)}),[b]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),f(e)}),[d,f,a]),tabValues:a}}var f=t(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(74848);function v(e){let{className:n,block:t,selectedValue:s,selectValue:l,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),u=e=>{const n=e.currentTarget,t=o.indexOf(n),r=i[t].value;r!==s&&(c(n),l(r))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>o.push(e),onKeyDown:d,onClick:u,...a,className:(0,r.A)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:a}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===a));return e?(0,s.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function k(e){const n=g(e);return(0,x.jsxs)("div",{className:(0,r.A)("tabs-container",b.tabList),children:[(0,x.jsx)(v,{...n,...e}),(0,x.jsx)(j,{...n,...e})]})}function w(e){const n=(0,f.A)();return(0,x.jsx)(k,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>i});var s=t(96540);const r={},a=s.createContext(r);function l(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);