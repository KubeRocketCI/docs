"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[63782],{96974:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"user-guide/quick-links","title":"Manage Quick Links","description":"Guide to managing Quick Links in KubeRocketCI, enabling easy access to essential tools and resources directly from the Overview page.","source":"@site/docs/user-guide/quick-links.md","sourceDirName":"user-guide","slug":"/user-guide/quick-links","permalink":"/docs/next/user-guide/quick-links","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/user-guide/quick-links.md","tags":[],"version":"current","lastUpdatedBy":"Oleksandr_Stepanov@epam.com","lastUpdatedAt":1739954692000,"frontMatter":{"title":"Manage Quick Links","sidebar_label":"Manage Quick Links","description":"Guide to managing Quick Links in KubeRocketCI, enabling easy access to essential tools and resources directly from the Overview page."},"sidebar":"userGuideSidebar","previous":{"title":"Configuration Overview","permalink":"/docs/next/user-guide/configuration-overview"},"next":{"title":"Add Git Server","permalink":"/docs/next/user-guide/add-git-server"}}');var s=n(74848),r=n(28453);const c={title:"Manage Quick Links",sidebar_label:"Manage Quick Links",description:"Guide to managing Quick Links in KubeRocketCI, enabling easy access to essential tools and resources directly from the Overview page."},l="Manage Quick Links",d={},o=[{value:"Add Quick Link",id:"add-quick-link",level:2},{value:"Add Quick Link via KubeRocketCI Portal",id:"add-quick-link-via-kuberocketci-portal",level:3},{value:"Add Quick Link via Helm Chart",id:"add-quick-link-via-helm-chart",level:3},{value:"Edit Quick Link",id:"edit-quick-link",level:2},{value:"Delete Quick Link",id:"delete-quick-link",level:2},{value:"Related Articles",id:"related-articles",level:2}];function a(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{Head:t}=i;return t||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"manage-quick-links",children:"Manage Quick Links"})}),"\n",(0,s.jsx)(t,{children:(0,s.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/user-guide/quick-links/"})}),"\n",(0,s.jsxs)(i.p,{children:["The Links section is designed to store all external references in one place. These links are displayed directly on the ",(0,s.jsx)(i.a,{href:"/docs/next/user-guide/",children:"Overview"})," page of the KubeRocketCI portal. Additionally, some links are also shown on the Component and Environment sections."]}),"\n",(0,s.jsx)(i.h2,{id:"add-quick-link",children:"Add Quick Link"}),"\n",(0,s.jsx)(i.p,{children:"There are two methods to add Quick Links:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"#add-quick-link-via-kuberocketci-portal",children:"Add Quick Link via KubeRocketCI portal"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"#add-quick-link-via-helm-chart",children:"Add Quick Link via Helm chart"})}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"add-quick-link-via-kuberocketci-portal",children:"Add Quick Link via KubeRocketCI Portal"}),"\n",(0,s.jsx)(i.p,{children:"To add a Quick Link via the KubeRocketCI portal, follow the steps below:"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["Navigate to ",(0,s.jsx)(i.strong,{children:"Configuration"})," -> ",(0,s.jsx)(i.strong,{children:"Quick Access"})," -> ",(0,s.jsx)(i.strong,{children:"Links"})," and click the ",(0,s.jsx)(i.strong,{children:"+ Add Link"})," button:"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Links section",src:n(35e3).A+"",title:"Links section",width:"3334",height:"1660"})}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["In the appeared window, insert the link name, URL, and SVG icon in base 64 format. Click the checkbox if it should be displayed on the ",(0,s.jsx)(i.strong,{children:"Overview"})," page:"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Create reference menu",src:n(51465).A+"",title:"Create reference menu",width:"3364",height:"1660"})}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["If the ",(0,s.jsx)(i.strong,{children:"Show on Overview Page"})," option is selected, the link will be displayed on the ",(0,s.jsx)(i.strong,{children:"Overview"})," page:"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Added link",src:n(91309).A+"",title:"Added link",width:"3334",height:"1660"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"add-quick-link-via-helm-chart",children:"Add Quick Link via Helm Chart"}),"\n",(0,s.jsxs)(i.p,{children:["The Quick Links can be specified in the ",(0,s.jsx)(i.a,{href:"https://github.com/epam/edp-install",children:"edp-install"})," Helm chart during platform installation or upgrade process."]}),"\n",(0,s.jsxs)(i.p,{children:["For some components, the Quick Link section is already present in the ",(0,s.jsx)(i.code,{children:"values.yaml"})," file. In this case, it is enough to specify the necessary URL for the appropriate component."]}),"\n",(0,s.jsxs)(i.p,{children:["An example of the ",(0,s.jsx)(i.code,{children:"quickLinks"})," section in the ",(0,s.jsx)(i.code,{children:"values.yaml"})," file, with all supported components, provided below:"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-yaml",metastring:'title="values.yaml"',children:'quickLinks:\n  # Base URL value for the argocd Quick Link\n  argocd: ""\n  # Base URL value for the codemie Quick Link\n  codemie: ""\n  # Base URL value for the defectdojo Quick Link\n  defectdojo: ""\n  # Base URL value for the dependency track Quick Link\n  dependency_track: ""\n  # Base URL value for the container registry Quick Link (e.g. Nexus, DockerHub, ECR, etc.)\n  docker_registry: ""\n  # Configuration for the logging Quick Link\n  logging:\n    # -- Define the provider name for correct URL generation.\n    # Available providers: "opensearch", "datadog".\n    # If the provider name is not specified, the base URL will be used.\n    provider: ""\n    # Base URL value for the logging Quick Link\n    url: ""\n  # Configuration for the monitoring Quick Link\n  monitoring:\n    # -- Define the provider name for correct URL generation.\n    # Available providers: "grafana", "datadog".\n    # If the provider name is not specified, the base URL will be used.\n    provider: ""\n    # Base URL value for the monitoring Quick Link\n    url: ""\n  # Base URL value for the nexus Quick Link\n  nexus: ""\n  # Base URL value for the sonar Quick Link\n  sonar: ""\n'})}),"\n",(0,s.jsxs)(i.p,{children:["If the required component is not listed in the ",(0,s.jsx)(i.code,{children:"quickLinks"})," section, it is possible to add the Quick Link using the ",(0,s.jsx)(i.code,{children:"extraQuickLinks"})," section."]}),"\n",(0,s.jsxs)(i.p,{children:["An example of specifying the Quick Link through the ",(0,s.jsx)(i.code,{children:"extraQuickLinks"})," section in the ",(0,s.jsx)(i.code,{children:"values.yaml"})," file is provided below:"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-yaml",metastring:'title="values.yaml"',children:'extraQuickLinks:\n  # Name of the Quick Link\n  - documentation:\n      # Base URL value for the documentation Quick Link\n      url: "https://docs.kuberocketci.io/"\n      # Visibility option for the Quick Link on the Overview page.\n      visible: true\n      # SVG icon in base 64 format.\n      icon: PHN2ZyB4b...\n  # Name of the Quick Link\n  - jaeger:\n      # Base URL value for the jaeger Quick Link\n      url: "https://jaeger.example.com/"\n      # Visibility option for the Quick Link on the Overview page.\n      visible: true\n      # SVG icon in base 64 format.\n      icon: PHN2ZyBoZ...\n'})}),"\n",(0,s.jsxs)(i.p,{children:["After specifying the necessary Quick Links in the ",(0,s.jsx)(i.code,{children:"values.yaml"})," file, the Quick Links will be displayed on the ",(0,s.jsx)(i.strong,{children:"Overview"})," page after the platform installation."]}),"\n",(0,s.jsx)(i.h2,{id:"edit-quick-link",children:"Edit Quick Link"}),"\n",(0,s.jsx)(i.p,{children:"To edit a Quick Link, follow the steps below:"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["Navigate to ",(0,s.jsx)(i.strong,{children:"Configuration"})," -> ",(0,s.jsx)(i.strong,{children:"Quick Access"})," -> ",(0,s.jsx)(i.strong,{children:"Links"}),". Click the three-dot menu and select ",(0,s.jsx)(i.strong,{children:"Edit"}),":"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Edit link button",src:n(5848).A+"",title:"Edit link button",width:"3334",height:"1660"})}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["Edit the necessary fields and click ",(0,s.jsx)(i.strong,{children:"Apply"}),":"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Edit link menu",src:n(62821).A+"",title:"Edit link menu",width:"3364",height:"1660"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"delete-quick-link",children:"Delete Quick Link"}),"\n",(0,s.jsx)(i.admonition,{type:"note",children:(0,s.jsxs)(i.p,{children:["Quick Links of type ",(0,s.jsx)(i.strong,{children:"system"})," cannot be deleted as they are crucial for the platform's functionality."]})}),"\n",(0,s.jsx)(i.p,{children:"To delete a Quick Link, follow the steps below:"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["Navigate to ",(0,s.jsx)(i.strong,{children:"Configuration"})," -> ",(0,s.jsx)(i.strong,{children:"Quick Access"})," -> ",(0,s.jsx)(i.strong,{children:"Links"}),". Click the three-dot menu and select ",(0,s.jsx)(i.strong,{children:"Delete"}),":"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Delete link button",src:n(38069).A+"",title:"Delete link button",width:"3334",height:"1660"})}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["In the ",(0,s.jsx)(i.strong,{children:"Confirm deletion"})," window, enter the name of the link and click ",(0,s.jsx)(i.strong,{children:"Confirm"}),":"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Delete link menu",src:n(45836).A+"",title:"Delete link menu",width:"3364",height:"1660"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"/docs/next/user-guide/add-git-server",children:"Add Git Server"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"/docs/next/user-guide/add-cluster",children:"Add Cluster"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"/docs/next/user-guide/gitops",children:"Manage GitOps"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"/docs/next/user-guide/manage-container-registries",children:"Manage Registries"})}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},51465:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/create_link_menu-8f190c574b34f59c2b6c29c35f774cf8.png"},38069:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/delete_link_button-3a5be28a9f6d048a81a233339c7b9ab5.png"},45836:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/delete_link_menu-da3d3cecbc94bcf88ce8610252205b72.png"},5848:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/edit_link_button-dab05d178a2f4805f758d2315e15ae52.png"},62821:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/edit_link_menu-374049b4263f9952ea43f92b8444c967.png"},91309:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/links_on_the_overview-245b21906213bbf8a6e730889239451e.png"},35e3:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/links_section-e680a60d7ab2b1659b99ed7d044ae3ce.png"},28453:(e,i,n)=>{n.d(i,{R:()=>c,x:()=>l});var t=n(96540);const s={},r=t.createContext(s);function c(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);