"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[53306],{52072:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"operator-guide/infrastructure-providers/okd/deploy-okd-4.10","title":"Deploy OKD 4.10 Cluster","description":"This instruction provides detailed information on the OKD 4.10 cluster deployment in the AWS Cloud and contains the additional setup necessary for the managed infrastructure.","source":"@site/versioned_docs/version-3.9/operator-guide/infrastructure-providers/okd/deploy-okd-4.10.md","sourceDirName":"operator-guide/infrastructure-providers/okd","slug":"/operator-guide/infrastructure-providers/okd/deploy-okd-4.10","permalink":"/docs/3.9/operator-guide/infrastructure-providers/okd/deploy-okd-4.10","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/operator-guide/infrastructure-providers/okd/deploy-okd-4.10.md","tags":[],"version":"3.9","lastUpdatedBy":"Sergiy Kulanov","lastUpdatedAt":1737665242000,"frontMatter":{},"sidebar":"operatorGuideSidebar","previous":{"title":"Deploy OKD 4.9 Cluster","permalink":"/docs/3.9/operator-guide/infrastructure-providers/okd/deploy-okd-4.9"},"next":{"title":"Use Cert-Manager in OpenShift","permalink":"/docs/3.9/operator-guide/infrastructure-providers/okd/ssl-automation-okd"}}');var t=s(74848),i=s(28453);const o={},l="Deploy OKD 4.10 Cluster",a={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Required Tools",id:"required-tools",level:3},{value:"Prepare for the Deployment Process",id:"prepare-for-the-deployment-process",level:2},{value:"Create AWS Resources",id:"create-aws-resources",level:3},{value:"Create OKD Manifests",id:"create-okd-manifests",level:3},{value:"Deploy the Cluster",id:"deploy-the-cluster",level:2},{value:"Log Into the Cluster",id:"log-into-the-cluster",level:2},{value:"Manage OKD Cluster Without the Inbound Rules",id:"manage-okd-cluster-without-the-inbound-rules",level:2},{value:"Optimize Spot Instances Usage",id:"optimize-spot-instances-usage",level:2},{value:"Related Articles",id:"related-articles",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{Details:s,Head:r}=n;return s||p("Details",!0),r||p("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"deploy-okd-410-cluster",children:"Deploy OKD 4.10 Cluster"})}),"\n",(0,t.jsx)(r,{children:(0,t.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/operator-guide/infrastructure-providers/okd/deploy-okd-4.10/"})}),"\n",(0,t.jsx)(n.p,{children:"This instruction provides detailed information on the OKD 4.10 cluster deployment in the AWS Cloud and contains the additional setup necessary for the managed infrastructure."}),"\n",(0,t.jsxs)(n.p,{children:["A full description of the cluster deployment can be found in the ",(0,t.jsx)(n.a,{href:"https://docs.openshift.com/container-platform/4.10/authentication/managing_cloud_provider_credentials/cco-mode-sts.html",children:"official documentation"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(n.p,{children:"Before the OKD cluster deployment and configuration, make sure to check the prerequisites."}),"\n",(0,t.jsx)(n.h3,{id:"required-tools",children:"Required Tools"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Install the following tools listed below:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html",children:"AWS CLI"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.openshift.com/container-platform/4.10/cli_reference/openshift_cli/getting-started-cli.html",children:"OpenShift CLI"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Create the AWS IAM user with ",(0,t.jsx)(n.a,{href:"https://docs.okd.io/4.9/installing/installing_aws/installing-aws-account.html#installation-aws-permissions_installing-aws-account",children:"the required permissions"}),". Make sure the AWS account is active, and the user doesn't have a permission boundary. Remove any Service Control Policy (SCP) restrictions from the AWS account."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Generate a key pair for cluster node SSH access. Please perform the steps below:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Generate the SSH key. Specify the path and file name, such as ~/.ssh/id_ed25519, of the new SSH key. If there is an existing key pair, ensure that the public key is in the ~/.ssh directory."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"ssh-keygen -t ed25519 -N '' -f <path>/<file_name>\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Add the SSH private key identity to the SSH agent for a local user if it has not already been added."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'eval "$(ssh-agent -s)"\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Add the SSH private key to the ssh-agent:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"ssh-add <path>/<file_name>\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Build the ",(0,t.jsx)(n.code,{children:"ccoctl"})," tool:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Clone the ",(0,t.jsx)(n.code,{children:"cloud-credential-operator"})," repository."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/openshift/cloud-credential-operator.git\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Move to the ",(0,t.jsx)(n.code,{children:"cloud-credential-operator"})," folder and build the ",(0,t.jsx)(n.code,{children:"ccoctl"})," tool."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd cloud-credential-operator && git checkout release-4.10\nGO_PACKAGE='github.com/openshift/cloud-credential-operator'\ngo build -ldflags \"-X $GO_PACKAGE/pkg/version.versionFromGit=$(git describe --long --tags --abbrev=7 --match 'v[0-9]*')\" ./cmd/ccoctl\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"prepare-for-the-deployment-process",children:"Prepare for the Deployment Process"}),"\n",(0,t.jsx)(n.p,{children:"Before deploying the OKD cluster, please perform the steps below:"}),"\n",(0,t.jsx)(n.h3,{id:"create-aws-resources",children:"Create AWS Resources"}),"\n",(0,t.jsxs)(n.p,{children:["Create the AWS resources with the Cloud Credential Operator utility (the ",(0,t.jsx)(n.code,{children:"ccoctl"})," tool):"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Generate the public and private RSA key files that are used to set up the OpenID Connect identity provider for the cluster:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"./ccoctl aws create-key-pair\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Create an OpenID Connect identity provider and an S3 bucket on AWS:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"./ccoctl aws create-identity-provider \\\n--name=<NAME> \\\n--region=<AWS_REGION> \\\n--public-key-file=./serviceaccount-signer.public\n"})}),"\n",(0,t.jsx)(n.p,{children:"where:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"NAME - is the name used to tag any cloud resources created for tracking,"}),"\n",(0,t.jsx)(n.li,{children:"AWS_REGION - is the AWS region in which cloud resources will be created."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Create the IAM roles for each component in the cluster:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Extract the list of the ",(0,t.jsx)(n.code,{children:"CredentialsRequest"})," objects from the OpenShift Container Platform release image:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"oc adm release extract \\\n--credentials-requests \\\n--cloud=aws \\\n--to=./credrequests \\\n--quay.io/openshift-release-dev/ocp-release:4.10.25-x86_64\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["A version of the openshift-release-dev docker image can be found in the ",(0,t.jsx)(n.a,{href:"https://quay.io/repository/openshift-release-dev/ocp-release?tab=tags",children:"Quay registry"}),"."]})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Use the ",(0,t.jsx)(n.code,{children:"ccoctl"})," tool to process all ",(0,t.jsx)(n.code,{children:"CredentialsRequest"})," objects in the ",(0,t.jsx)(n.code,{children:"credrequests"})," directory:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"ccoctl aws create-iam-roles \\\n--name=<NAME> \\\n--region=<AWS_REGION> \\\n--credentials-requests-dir=./credrequests\n--identity-provider-arn=arn:aws:iam::<AWS_ACCOUNT_ID>:oidc-provider/<NAME>-oidc.s3.<AWS_REGION>.amazonaws.com\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"create-okd-manifests",children:"Create OKD Manifests"}),"\n",(0,t.jsx)(n.p,{children:"Before deploying the OKD cluster, please perform the steps below:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Download the ",(0,t.jsx)(n.a,{href:"https://github.com/openshift/okd/releases/tag/4.10.0-0.okd-2022-07-09-073606",children:"OKD installer"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Extract the installation program:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"tar -xvf openshift-install-linux.tar.gz\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Download the installation pull secret for any private registry. This pull secret allows to authenticate with the services that are provided by the authorities, including ",(0,t.jsx)(n.a,{href:"https://quay.io/",children:"Quay.io"}),", serving the container images for OKD components. For example, here is a pull secret for Docker Hub:"]}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)("b",{children:"The pull secret for the private registry"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "auths":{\n    "https://index.docker.io/v1/":{\n      "auth":"$TOKEN"\n    }\n  }\n}\n'})})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Create a deployment directory and the ",(0,t.jsx)(n.strong,{children:"install-config.yaml"})," file:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"mkdir okd-deployment\ntouch okd-deployment/install-config.yaml\n"})}),"\n",(0,t.jsxs)(n.p,{children:["To specify more details about the OKD cluster platform or to modify the values of the required parameters, customize the ",(0,t.jsx)(n.strong,{children:"install-config.yaml"})," file for the AWS. Please see below an example of the customized file:"]}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)("b",{children:"install-config.yaml - OKD cluster\u2019s platform installation configuration file"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"apiVersion: v1\nbaseDomain: <YOUR_DOMAIN>\ncredentialsMode: Manual\ncompute:\n- architecture: amd64\n  hyperthreading: Enabled\n  name: worker\n  platform:\n    aws:\n      rootVolume:\n        size: 30\n      zones:\n        - eu-central-1a\n      type: r5.large\n  replicas: 3\ncontrolPlane:\n  architecture: amd64\n  hyperthreading: Enabled\n  name: master\n  platform:\n    aws:\n      rootVolume:\n        size: 50\n      zones:\n        - eu-central-1a\n      type: m5.xlarge\n  replicas: 3\nmetadata:\n  creationTimestamp: null\n  name: 4-10-okd-sandbox\nnetworking:\n  clusterNetwork:\n  - cidr: 10.128.0.0/14\n    hostPrefix: 23\n  machineNetwork:\n  - cidr: 10.0.0.0/16\n  networkType: OVNKubernetes\n  serviceNetwork:\n  - 172.30.0.0/16\nplatform:\n  aws:\n    region: eu-central-1\n    userTags:\n      user:tag: 4-10-okd-sandbox\npublish: External\npullSecret: <PULL_SECRET>\nsshKey: |\n  <SSH_KEY>\n"})})]}),"\n",(0,t.jsx)(n.p,{children:"where:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"YOUR_DOMAIN - is a base domain,"}),"\n",(0,t.jsx)(n.li,{children:"PULL_SECRET - is a created pull secret for a private registry,"}),"\n",(0,t.jsx)(n.li,{children:"SSH_KEY - is a created SSH key."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Create the required OpenShift Container Platform installation manifests:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"./openshift-install create manifests --dir okd-deployment\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Copy the manifests generated by the ",(0,t.jsx)(n.code,{children:"ccoctl"})," tool to the ",(0,t.jsx)(n.code,{children:"manifests"})," directory created by the installation program:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cp ./manifests/* ./okd-deployment/manifests/\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Copy the private key generated in the ",(0,t.jsx)(n.code,{children:"tls"})," directory by the ",(0,t.jsx)(n.code,{children:"ccoctl"})," tool to the installation directory:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cp -a ./tls ./okd-deployment\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"deploy-the-cluster",children:"Deploy the Cluster"}),"\n",(0,t.jsx)(n.p,{children:"To initialize the cluster deployment, run the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"./openshift-install create cluster --dir okd-deployment --log-level=info\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"If the cloud provider account configured on the host does not have sufficient permissions to deploy the cluster, the installation process stops, and the missing permissions are displayed."})}),"\n",(0,t.jsxs)(n.p,{children:["When the cluster deployment is completed, directions for accessing the cluster are displayed in the terminal, including a link to the web console and credentials for the ",(0,t.jsx)(n.strong,{children:"kubeadmin"})," user. The ",(0,t.jsx)(n.code,{children:"kubeconfig"})," for the cluster will be located in ",(0,t.jsx)(n.strong,{children:"okd-deployment/auth/kubeconfig"}),"."]}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)("b",{children:"Example output"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"...\nINFO Install complete!\nINFO To access the cluster as the system:admin user when using 'oc', run 'export KUBECONFIG=/home/myuser/install_dir/auth/kubeconfig'\nINFO Access the OpenShift web-console here: https://console-openshift-console.apps.mycluster.example.com\nINFO Login to the console with the user: \"kubeadmin\", and password: \"4vYBz-Ee6gm-ymBZj-Wt5AL\"\nINFO Time elapsed: 36m22s:\n"})})]}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsxs)(n.p,{children:["The Ignition config files contain certificates that expire after 24 hours, which are then renewed at that time. Do not turn off the cluster for this time, or you will have to update the certificates manually. See ",(0,t.jsx)(n.a,{href:"https://docs.openshift.com/container-platform/4.10/installing/installing_aws/installing-aws-customizations.html#installation-launching-installer_installing-aws-customizations",children:"OpenShift Container Platform documentation"})," for more information."]})}),"\n",(0,t.jsx)(n.h2,{id:"log-into-the-cluster",children:"Log Into the Cluster"}),"\n",(0,t.jsxs)(n.p,{children:["To log into the cluster, export the ",(0,t.jsx)(n.code,{children:"kubeconfig"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"export KUBECONFIG=<installation_directory>/auth/kubeconfig\n"})}),"\n",(0,t.jsx)(n.h2,{id:"manage-okd-cluster-without-the-inbound-rules",children:"Manage OKD Cluster Without the Inbound Rules"}),"\n",(0,t.jsxs)(n.p,{children:["In order to manage the OKD cluster without the ",(0,t.jsx)(n.code,{children:"0.0.0.0/0"})," inbound rules, please perform the steps below:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Create a Security Group with a list of your external IPs:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"aws ec2 create-security-group --group-name <SECURITY_GROUP_NAME> --description \"<DESCRIPTION_OF_SECURITY_GROUP>\" --vpc-id <VPC_ID>\naws ec2 authorize-security-group-ingress \\\n--group-id '<SECURITY_GROUP_ID>' \\\n--ip-permissions 'IpProtocol=all,PrefixListIds=[{PrefixListId=<PREFIX_LIST_ID>}]'\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Manually attach this new Security Group to all master nodes of the cluster."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Create another Security Group with an Elastic IP of the Cluster VPC:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"aws ec2 create-security-group --group-name custom-okd-4-10 --description \"Cluster Ip to 80, 443\" --vpc-id <VPC_ID>\naws ec2 authorize-security-group-ingress \\\n--group-id '<SECURITY_GROUP_ID>' \\\n--protocol all \\\n--port 80 \\\n--cidr <ELASTIC_IP_OF_CLUSTER_VPC>\naws ec2 authorize-security-group-ingress \\\n--group-id '<SECURITY_GROUP_ID>' \\\n--protocol all \\\n--port 443 \\\n--cidr <ELASTIC_IP_OF_CLUSTER_VPC>\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Modify the cluster load balancer via the ",(0,t.jsx)(n.code,{children:"router-default"})," svc in the ",(0,t.jsx)(n.code,{children:"openshift-ingress"})," namespace, paste two Security Groups created on previous steps:"]}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)("b",{children:"The pull secret for the private registry"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'apiVersion: v1\nkind: Service\nmetadata:\n  name: router-default\n  namespace: openshift-ingress\n  annotations:\n    service.beta.kubernetes.io/aws-load-balancer-additional-resource-tags: "tag_name=some_value"\n    service.beta.kubernetes.io/aws-load-balancer-security-groups: "<SECURITY_GROUP_IDs>"\n    ...\n'})})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"optimize-spot-instances-usage",children:"Optimize Spot Instances Usage"}),"\n",(0,t.jsxs)(n.p,{children:["In order to optimize the usage of Spot Instances on the AWS, add the following line under the ",(0,t.jsx)(n.code,{children:"providerSpec"})," field in the MachineSet of Worker Nodes:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"providerSpec:\n  value:\n    spotMarketOptions: {}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/3.9/operator-guide/deploy-aws-eks",children:"Deploy AWS EKS Cluster"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/3.9/operator-guide/infrastructure-providers/aws/enable-irsa",children:"Associate IAM Roles With Service Accounts"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/3.9/operator-guide/infrastructure-providers/okd/deploy-okd-4.9",children:"Deploy OKD 4.9 Cluster"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}function p(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>l});var r=s(96540);const t={},i=r.createContext(t);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);