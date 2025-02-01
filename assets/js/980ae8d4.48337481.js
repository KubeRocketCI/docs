"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[18190],{85429:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"developer-guide/index","title":"Overview","description":"The KubeRocketCI Developer Guide serves as a comprehensive technical resource specifically designed for developers. It offers detailed insights into expanding the functionalities of KubeRocketCI. This section focuses on explaining the development approach and fundamental architectural blueprints that form the basis of the platform\'s ecosystem.","source":"@site/versioned_docs/version-3.9/developer-guide/index.md","sourceDirName":"developer-guide","slug":"/developer-guide/","permalink":"/docs/3.9/developer-guide/","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/developer-guide/index.md","tags":[],"version":"3.9","lastUpdatedBy":"Daniil Nedostup","lastUpdatedAt":1738424881000,"frontMatter":{},"sidebar":"developerGuideSidebar","next":{"title":"Reference Architecture","permalink":"/docs/3.9/developer-guide/reference-architecture"}}');var n=t(74848),s=t(28453);const a={},i="Overview",l={},c=[{value:"Release Channels",id:"release-channels",level:2},{value:"Marketplaces",id:"marketplaces",level:3},{value:"OperatorHub",id:"operatorhub",level:3},{value:"GitHub Repositories",id:"github-repositories",level:2},{value:"Platform Components",id:"platform-components",level:3},{value:"Optional Components",id:"optional-components",level:3},{value:"Add-ons Repository",id:"add-ons-repository",level:3},{value:"Platform Test Data",id:"platform-test-data",level:3},{value:"Helm Charts",id:"helm-charts",level:3},{value:"DockerHub",id:"dockerhub",level:2},{value:"Social Media",id:"social-media",level:2}];function d(e){const r={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components},{Head:o}=r;return o||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"overview",children:"Overview"})}),"\n",(0,n.jsx)(o,{children:(0,n.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/developer-guide/"})}),"\n",(0,n.jsx)(r.p,{children:"The KubeRocketCI Developer Guide serves as a comprehensive technical resource specifically designed for developers. It offers detailed insights into expanding the functionalities of KubeRocketCI. This section focuses on explaining the development approach and fundamental architectural blueprints that form the basis of the platform's ecosystem."}),"\n",(0,n.jsx)(r.p,{children:"Within these pages, you'll find architectural diagrams, component schemas, and deployment strategies essential for grasping the structural elements of the platform. These technical illustrations serve as references, providing a detailed understanding of component interactions and deployment methodologies. Understanding the architecture of the KubeRocketCI and integrating third-party solutions into its established framework enables the creation of efficient, scalable, and customizable solutions within the KubeRocketCI."}),"\n",(0,n.jsx)(r.p,{children:"The KubeRocketCI platform consists of several key components. These components are interconnected, and their relationships are illustrated in the diagram below:"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{alt:"KubeRocketCI Components Diagram",src:t(58704).A+"",width:"981",height:"571"})}),"\n",(0,n.jsx)(r.p,{children:"Each component represents one of the following:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"A Helm chart with a Docker image."}),"\n",(0,n.jsx)(r.li,{children:"A standalone Helm chart."}),"\n",(0,n.jsx)(r.li,{children:"A standalone Docker image."}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"All components are regularly updated and released as part of the platform's development cycle."}),"\n",(0,n.jsxs)(r.p,{children:["Some components, such as keycloak-operator, nexus-operator, sonar-operator, and tekton-custom-task, are provided separately through the ",(0,n.jsx)(r.a,{href:"https://github.com/epam/edp-cluster-add-ons",children:"edp-cluster-add-ons"})," repository. These components are optional and can be installed independently of the main platform."]}),"\n",(0,n.jsx)(r.h2,{id:"release-channels",children:"Release Channels"}),"\n",(0,n.jsx)(r.p,{children:"As a publicly available product, the KubeRocketCI relies on various channels to share information, gather feedback, and distribute new releases effectively. This section outlines the diverse channels through which users can engage with our platform and stay informed about the latest developments and enhancements."}),"\n",(0,n.jsx)(r.h3,{id:"marketplaces",children:"Marketplaces"}),"\n",(0,n.jsx)(r.p,{children:"Our product is presented on AWS and Civo marketplaces. It's essential to ensure that the product information on these platforms is up-to-date and accurately reflects the latest version of our software:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://aws.amazon.com/marketplace/pp/prodview-u7xcz6pvwwwoa",children:"AWS Marketplace"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://www.civo.com/marketplace/edp",children:"CIVO Marketplace"})}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"operatorhub",children:"OperatorHub"}),"\n",(0,n.jsx)(r.p,{children:"Our product operators are showcased on OperatorHub, enabling seamless integration and management capabilities:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://operatorhub.io/operator/edp-keycloak-operator",children:"Keycloak Operator"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://operatorhub.io/operator/nexus-operator",children:"Nexus Operator"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://operatorhub.io/operator/sonar-operator",children:"Sonar Operator"})}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"github-repositories",children:"GitHub Repositories"}),"\n",(0,n.jsx)(r.p,{children:"Our platform components, optional enhancements, add-ons, and deployment resources are hosted on GitHub repositories. Explore the following repositories to access the source code of components."}),"\n",(0,n.jsx)(r.h3,{id:"platform-components",children:"Platform Components"}),"\n",(0,n.jsx)(r.p,{children:"Each platform component is available in its corresponding GitHub project:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://github.com/epam/edp-cd-pipeline-operator/releases",children:"CD Pipeline Operator"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://github.com/epam/edp-codebase-operator/releases",children:"Codebase Operator"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://github.com/epam/edp-gerrit",children:"EDP Gerrit"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://github.com/epam/edp-install/releases",children:"EDP Install"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://github.com/epam/edp-gerrit-operator/releases",children:"Gerrit Operator"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://github.com/epam/edp-headlamp/releases",children:"KubeRocketCI Portal"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://github.com/epam/edp-tekton/releases",children:"Tekton"})}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"optional-components",children:"Optional Components"}),"\n",(0,n.jsx)(r.p,{children:"These optional components enhance the platform's installation and configuration experience:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://github.com/epam/edp-keycloak-operator/releases",children:"Keycloak Operator"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://github.com/epam/edp-nexus-operator/releases",children:"Nexus Operator"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://github.com/epam/edp-sonar-operator/releases",children:"Sonar Operator"})}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"add-ons-repository",children:"Add-ons Repository"}),"\n",(0,n.jsx)(r.p,{children:"The Add-ons repository offers a streamlined deployment process. It includes additional components that can be integrated separately into the cluster:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://github.com/epam/edp-cluster-add-ons",children:"Cluster Add-Ons"})}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"platform-test-data",children:"Platform Test Data"}),"\n",(0,n.jsx)(r.p,{children:"Access test data from the 'Create' onboarding strategy:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://github.com/epmd-edp",children:"EPMD-EDP Project"})}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"helm-charts",children:"Helm Charts"}),"\n",(0,n.jsx)(r.p,{children:"Helm chart artifacts are available in repository:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://github.com/epam/edp-helm-charts",children:"Helm Charts"})}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"dockerhub",children:"DockerHub"}),"\n",(0,n.jsx)(r.p,{children:"Our DockerHub repository hosts Docker images for various platform components:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://hub.docker.com/repository/docker/epamedp/cd-pipeline-operator/",children:"CD Pipeline Operator"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://hub.docker.com/repository/docker/epamedp/codebase-operator/",children:"Codebase Operator"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://hub.docker.com/r/epamedp/edp-gerrit",children:"EDP Gerrit"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://hub.docker.com/repository/docker/epamedp/gerrit-operator",children:"Gerrit Operator"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://hub.docker.com/repository/docker/epamedp/keycloak-operator/",children:"Keycloak Operator"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://hub.docker.com/repository/docker/epamedp/edp-headlamp/",children:"KubeRocketCI Portal"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://hub.docker.com/repository/docker/epamedp/nexus-operator/",children:"Nexus Operator"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://hub.docker.com/repository/docker/epamedp/sonar-operator/",children:"Sonar Operator"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://hub.docker.com/repository/docker/epamedp/edp-tekton",children:"Tekton"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://hub.docker.com/repository/docker/epamedp/tekton-cache",children:"Tekton Cache"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://hub.docker.com/repository/docker/epamedp/tekton-custom-task",children:"Tekton Custom Task"})}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"social-media",children:"Social Media"}),"\n",(0,n.jsx)(r.p,{children:"To maintain an active presence on social media channels and share valuable content about our software releases, we continuously publish materials across the following media:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://solutionshub.epam.com/solution/epam-delivery-platform",children:"SolutionsHub"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://medium.com/epam-delivery-platform",children:"Medium"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://www.youtube.com/@theplatformteam",children:"YouTube"})}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},58704:(e,r,t)=>{t.d(r,{A:()=>o});const o=t.p+"assets/images/components-b75a9160b291530afe6742b1c8d48c36.svg"},28453:(e,r,t)=>{t.d(r,{R:()=>a,x:()=>i});var o=t(96540);const n={},s=o.createContext(n);function a(e){const r=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),o.createElement(s.Provider,{value:r},e.children)}}}]);