"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[94303],{23257:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"operator-guide/infrastructure-providers/okd/deploy-okd-4.9","title":"Deploy OKD 4.9 Cluster","description":"This instruction provides detailed information on the OKD 4.9 cluster deployment in the AWS Cloud and contains the additional setup necessary for the managed infrastructure.","source":"@site/docs/operator-guide/infrastructure-providers/okd/deploy-okd-4.9.md","sourceDirName":"operator-guide/infrastructure-providers/okd","slug":"/operator-guide/infrastructure-providers/okd/deploy-okd-4.9","permalink":"/docs/next/operator-guide/infrastructure-providers/okd/deploy-okd-4.9","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/operator-guide/infrastructure-providers/okd/deploy-okd-4.9.md","tags":[],"version":"current","lastUpdatedBy":"Sergiy Kulanov","lastUpdatedAt":1737662090000,"frontMatter":{},"sidebar":"operatorGuideSidebar","previous":{"title":"IAM Roles for Kaniko Service Accounts","permalink":"/docs/next/operator-guide/infrastructure-providers/aws/kaniko-irsa"},"next":{"title":"Deploy OKD 4.10 Cluster","permalink":"/docs/next/operator-guide/infrastructure-providers/okd/deploy-okd-4.10"}}');var r=t(74848),i=t(28453);const o={},l="Deploy OKD 4.9 Cluster",a={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Required Tools",id:"required-tools",level:3},{value:"Prepare for the Deployment Process",id:"prepare-for-the-deployment-process",level:2},{value:"Deploy the Cluster",id:"deploy-the-cluster",level:2},{value:"Log Into the Cluster",id:"log-into-the-cluster",level:2},{value:"Related Articles",id:"related-articles",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{Details:t,Head:s}=n;return t||u("Details",!0),s||u("Head",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"deploy-okd-49-cluster",children:"Deploy OKD 4.9 Cluster"})}),"\n",(0,r.jsx)(s,{children:(0,r.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/operator-guide/infrastructure-providers/okd/deploy-okd-4.9/"})}),"\n",(0,r.jsx)(n.p,{children:"This instruction provides detailed information on the OKD 4.9 cluster deployment in the AWS Cloud and contains the additional setup necessary for the managed infrastructure."}),"\n",(0,r.jsxs)(n.p,{children:["A full description of the cluster deployment can be found in the ",(0,r.jsx)(n.a,{href:"https://docs.okd.io/4.9/installing/installing_aws/installing-aws-customizations.html",children:"official documentation"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsx)(n.p,{children:"Before the OKD cluster deployment and configuration, make sure to check the prerequisites."}),"\n",(0,r.jsx)(n.h3,{id:"required-tools",children:"Required Tools"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Install the following tools listed below:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html",children:"AWS CLI"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://docs.openshift.com/container-platform/4.9/cli_reference/openshift_cli/getting-started-cli.html",children:"OpenShift CLI"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Create the AWS IAM user with ",(0,r.jsx)(n.a,{href:"https://docs.okd.io/4.9/installing/installing_aws/installing-aws-account.html#installation-aws-permissions_installing-aws-account",children:"the required permissions"}),". Make sure the AWS account is active, and the user doesn't have a permission boundary. Remove any Service Control Policy (SCP) restrictions from the AWS account."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Generate a key pair for cluster node SSH access. Please perform the steps below:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Generate the SSH key. Specify the path and file name, such as ~/.ssh/id_ed25519, of the new SSH key. If there is an existing key pair, ensure that the public key is in the ~/.ssh directory."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"ssh-keygen -t ed25519 -N '' -f <path>/<file_name>\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Add the SSH private key identity to the SSH agent for a local user if it has not already been added."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'eval "$(ssh-agent -s)"\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Add the SSH private key to the ssh-agent:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"ssh-add <path>/<file_name>\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"prepare-for-the-deployment-process",children:"Prepare for the Deployment Process"}),"\n",(0,r.jsx)(n.p,{children:"Before deploying the OKD cluster, please perform the steps below:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Download the ",(0,r.jsx)(n.a,{href:"https://github.com/openshift/okd/releases/tag/4.9.0-0.okd-2022-02-12-140851",children:"OKD installer"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Extract the installation program:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"tar -xvf openshift-install-linux.tar.gz\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Download the installation pull secret for any private registry."}),"\n",(0,r.jsxs)(n.p,{children:["This pull secret allows to authenticate with the services that are provided by the included authorities, including ",(0,r.jsx)(n.a,{href:"https://quay.io/",children:"Quay.io"})," serving container images for OKD components. For example, here is a pull secret for Docker Hub:"]}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)("b",{children:"The pull secret for the private registry"})}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "auths":{\n    "https://index.docker.io/v1/":{\n      "auth":"$TOKEN"\n    }\n  }\n}\n'})})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Create the deployment directory and the ",(0,r.jsx)(n.strong,{children:"install-config.yaml"})," file:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"mkdir okd-deployment\ntouch okd-deployment/install-config.yaml\n"})}),"\n",(0,r.jsxs)(n.p,{children:["To specify more details about the OKD cluster platform or to modify the values of the required parameters, customize the ",(0,r.jsx)(n.strong,{children:"install-config.yaml"})," file for AWS. Please see an example of the customized file below:"]}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)("b",{children:"install-config.yaml - OKD cluster\u2019s platform installation configuration file"})}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"apiVersion: v1\nbaseDomain: <YOUR_DOMAIN>\ncompute:\n- architecture: amd64\n  hyperthreading: Enabled\n  name: worker\n  platform:\n    aws:\n      zones:\n        - eu-central-1a\n      rootVolume:\n        size: 50\n      type: r5.large\n  replicas: 3\ncontrolPlane:\n  architecture: amd64\n  hyperthreading: Enabled\n  name: master\n  platform:\n    aws:\n      rootVolume:\n        size: 50\n      zones:\n        - eu-central-1a\n      type: m5.xlarge\n  replicas: 3\nmetadata:\n  creationTimestamp: null\n  name: 4-9-okd-sandbox\nplatform:\n  aws:\n    region: eu-central-1\n    userTags:\n      user:tag: 4-9-okd-sandbox\npublish: External\npullSecret: <PULL_SECRET>\nsshKey: |\n  <SSH_KEY>\n"})})]}),"\n",(0,r.jsx)(n.p,{children:"where:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"YOUR_DOMAIN - is a base domain,"}),"\n",(0,r.jsx)(n.li,{children:"PULL_SECRET - is a created pull secret for a private registry,"}),"\n",(0,r.jsx)(n.li,{children:"SSH_KEY - is a created SSH key."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"deploy-the-cluster",children:"Deploy the Cluster"}),"\n",(0,r.jsx)(n.p,{children:"To initialize the cluster deployment, run the following command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"./openshift-install create cluster --dir <installation_directory> --log-level=info\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"If the cloud provider account configured on the host does not have sufficient permissions to deploy the cluster, the installation process stops, and the missing permissions are displayed."})}),"\n",(0,r.jsxs)(n.p,{children:["When the cluster deployment is completed, directions for accessing the cluster are displayed in the terminal, including a link to the web console and credentials for the ",(0,r.jsx)(n.strong,{children:"kubeadmin"})," user. The ",(0,r.jsx)(n.code,{children:"kubeconfig"})," for the cluster will be located in ",(0,r.jsx)(n.strong,{children:"okd-deployment/auth/kubeconfig"}),"."]}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)("b",{children:"Example output"})}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"...\nINFO Install complete!\nINFO To access the cluster as the system:admin user when using 'oc', run 'export KUBECONFIG=/home/myuser/install_dir/auth/kubeconfig'\nINFO Access the OpenShift web-console here: https://console-openshift-console.apps.mycluster.example.com\nINFO Login to the console with the user: \"kubeadmin\", and password: \"4vYBz-Ee6gm-ymBZj-Wt5AL\"\nINFO Time elapsed: 36m22s:\n"})})]}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.p,{children:["The Ignition config files contain certificates that expire after 24 hours, which are then renewed at that time. Do not turn off the cluster for this time, or you will have to update the certificates manually. See ",(0,r.jsx)(n.a,{href:"https://docs.openshift.com/container-platform/4.9/installing/installing_aws/installing-aws-customizations.html#installation-launching-installer_installing-aws-customizations",children:"OpenShift Container Platform documentation"})," for more information."]})}),"\n",(0,r.jsx)(n.h2,{id:"log-into-the-cluster",children:"Log Into the Cluster"}),"\n",(0,r.jsxs)(n.p,{children:["To log into the cluster, export the ",(0,r.jsx)(n.code,{children:"kubeconfig"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"export KUBECONFIG=<installation_directory>/auth/kubeconfig\n"})}),"\n",(0,r.jsx)(n.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/next/operator-guide/deploy-aws-eks",children:"Deploy AWS EKS Cluster"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/next/operator-guide/infrastructure-providers/okd/deploy-okd-4.10",children:"Deploy OKD 4.10 Cluster"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}function u(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var s=t(96540);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);