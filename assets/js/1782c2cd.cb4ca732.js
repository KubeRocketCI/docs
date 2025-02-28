"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[55771],{74246:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"operator-guide/advanced-installation/custom-certificates","title":"Custom Certificates","description":"Learn how to add custom certificates to KubeRocketCI and configure Keycloak for secure component communication and enhanced platform security.","source":"@site/versioned_docs/version-3.9/operator-guide/advanced-installation/custom-certificates.md","sourceDirName":"operator-guide/advanced-installation","slug":"/operator-guide/advanced-installation/custom-certificates","permalink":"/docs/3.9/operator-guide/advanced-installation/custom-certificates","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/operator-guide/advanced-installation/custom-certificates.md","tags":[],"version":"3.9","lastUpdatedBy":"Oleksandr_Stepanov@epam.com","lastUpdatedAt":1740746844000,"frontMatter":{"title":"Custom Certificates","description":"Learn how to add custom certificates to KubeRocketCI and configure Keycloak for secure component communication and enhanced platform security.","sidebar_label":"Custom Certificates"},"sidebar":"operatorGuideSidebar","previous":{"title":"Install Capsule","permalink":"/docs/3.9/operator-guide/advanced-installation/capsule"},"next":{"title":"Uninstall KubeRocketCI","permalink":"/docs/3.9/operator-guide/uninstall-kuberocketci"}}');var c=t(74848),r=t(28453);const i={title:"Custom Certificates",description:"Learn how to add custom certificates to KubeRocketCI and configure Keycloak for secure component communication and enhanced platform security.",sidebar_label:"Custom Certificates"},a="Custom Certificates",o={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Enable the SPI Truststore of Keycloak",id:"enable-the-spi-truststore-of-keycloak",level:2},{value:"Enable Custom Certificates in KubeRocketCI Components",id:"enable-custom-certificates-in-kuberocketci-components",level:2},{value:"Integrate Custom Certificates Into Jenkins Agents",id:"integrate-custom-certificates-into-jenkins-agents",level:2},{value:"Related Articles",id:"related-articles",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components},{Details:t,Head:s}=n;return t||u("Details",!0),s||u("Head",!0),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.header,{children:(0,c.jsx)(n.h1,{id:"custom-certificates",children:"Custom Certificates"})}),"\n",(0,c.jsx)(s,{children:(0,c.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/operator-guide/advanced-installation/custom-certificates/"})}),"\n",(0,c.jsx)(n.p,{children:"Familiarize yourself with the detailed instructions on adding certificates to KubeRocketCI resources as well as with the respective setup for Keycloak."}),"\n",(0,c.jsx)(n.p,{children:"KubeRocketCI components that support custom certificates can be found in the table below:"}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"Helm Chart"}),(0,c.jsx)(n.th,{children:"Sub Resources"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"gerrit-operator"}),(0,c.jsx)(n.td,{children:"edp-gerrit"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"sonar-operator"}),(0,c.jsx)(n.td,{children:"sonar-operator, edp-sonar"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"keycloak-operator"}),(0,c.jsx)(n.td,{children:"keycloak-operator"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"nexus-operator"}),(0,c.jsx)(n.td,{children:"oauth2-proxy"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"edp-install"}),(0,c.jsx)(n.td,{children:"oauth2-proxy"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"edp-headlamp"}),(0,c.jsx)(n.td,{children:"edp-headlamp"})]})]})]}),"\n",(0,c.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["The certificate in the ",(0,c.jsx)(n.code,{children:"*.crt"})," format is used;"]}),"\n",(0,c.jsxs)(n.li,{children:["Kubectl version 1.26.0+ is installed. Please refer to the ",(0,c.jsx)(n.a,{href:"https://kubernetes.io/releases/download/",children:"Kubernetes official website"})," for details."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.a,{href:"https://helm.sh",children:"Helm"})," version 3.14.0+ is installed. Please refer to the ",(0,c.jsx)(n.a,{href:"https://github.com/helm/helm/releases",children:"Helm page"})," on GitHub for details."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.a,{href:"https://www.oracle.com/in/java/technologies/downloads/",children:"Java"})," with the ",(0,c.jsx)(n.code,{children:"keytool"})," command inside;"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.a,{href:"https://stedolan.github.io/jq/",children:"jq"})," is installed."]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"enable-the-spi-truststore-of-keycloak",children:"Enable the SPI Truststore of Keycloak"}),"\n",(0,c.jsx)(n.p,{children:"To import custom certificates to Keycloak, follow the steps below:"}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["Generate the ",(0,c.jsx)(n.code,{children:"cacerts"})," local keystore and import the certificate there using the keytool tool:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"keytool -importcert -file CA.crt \\\n-alias CA.crt -keystore ./cacerts \\\n-storepass changeit -trustcacerts \\\n-noprompt\n"})}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["Create the ",(0,c.jsx)(n.code,{children:"custom-keycloak-keystore"})," keystore secret from the ",(0,c.jsx)(n.code,{children:"cacerts"})," file in the ",(0,c.jsx)(n.code,{children:"security"})," namespace:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"kubectl -n security create secret generic custom-keycloak-keystore \\\n--from-file=./cacerts\n"})}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["Create the ",(0,c.jsx)(n.code,{children:"spi-truststore-data"})," SPI truststore secret in the ",(0,c.jsx)(n.code,{children:"security"})," namespace:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"kubectl -n security create secret generic spi-truststore-data \\\n--from-literal=KC_SPI_TRUSTSTORE_FILE_FILE=/opt/keycloak/spi-certs/cacerts \\\n--from-literal=KC_SPI_TRUSTSTORE_FILE_PASSWORD=changeit\n"})}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["Update the Keycloak ",(0,c.jsx)(n.code,{children:"values.yaml"})," file from the ",(0,c.jsx)(n.a,{href:"/docs/3.9/operator-guide/auth/keycloak",children:"Install Keycloak"})," page."]}),"\n",(0,c.jsxs)(t,{children:[(0,c.jsx)("summary",{children:(0,c.jsx)("b",{children:"values.yaml"})}),(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-yaml",children:"...\nextraVolumeMounts: |\n  ...\n  # Use the Keycloak truststore for SPI connection over HTTPS/TLS\n  - name: spi-certificates\n    mountPath: /opt/keycloak/spi-certs\n    readOnly: true\n  ...\n\nextraVolumes: |\n  ...\n  # Use the Keycloak truststore for SPI connection over HTTPS/TLS\n  - name: spi-certificates\n    secret:\n      secretName: custom-keycloak-keystore\n      defaultMode: 420\n  ...\n\n...\nextraEnvFrom: |\n  - secretRef:\n      name: spi-truststore-data\n...\n"})})]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"enable-custom-certificates-in-kuberocketci-components",children:"Enable Custom Certificates in KubeRocketCI Components"}),"\n",(0,c.jsx)(n.p,{children:"Creating custom certificates is a necessary but not sufficient condition for applying, therefore, certificates should be enabled as well."}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["Create the ",(0,c.jsx)(n.code,{children:"custom-ca-certificates"})," secret in the platform namespace (e.g ",(0,c.jsx)(n.code,{children:"edp"}),")."]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"kubectl -n edp create secret generic custom-ca-certificates \\\n--from-file=CA.crt\n"})}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["Add the certificate by mounting the ",(0,c.jsx)(n.code,{children:"custom-ca-certificates"})," secret to the operator pod as a volume.",(0,c.jsx)("br",{})]}),"\n",(0,c.jsxs)(n.p,{children:["Example of specifying custom certificates for the ",(0,c.jsx)(n.code,{children:"keycloak-operator"}),":"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-yaml",children:"...\nkeycloak-operator:\n  enabled: true\n\n  # -- Additional volumes to be added to the pod\n  extraVolumes:\n    - name: custom-ca\n      secret:\n        defaultMode: 420\n        secretName: custom-ca-certificates\n\n  # -- Additional volumeMounts to be added to the container\n  extraVolumeMounts:\n    - name: custom-ca\n      mountPath: /etc/ssl/certs/CA.crt\n      readOnly: true\n      subPath: CA.crt\n...\n"})}),"\n",(0,c.jsx)(n.admonition,{type:"warning",children:(0,c.jsxs)(n.p,{children:["Before moving ahead, be aware that starting from version 3.3.0, our development team has officially deprecated the Jenkins deploy scenario. This means that as of version 3.3.0 and in all subsequent versions (3.3.x and above), the Jenkins deploy scenario is no longer supported.",(0,c.jsx)("br",{}),"\nFor users running versions 3.3.x and below, the Jenkins deploy scenario remains available. However, we encourage you to plan for the transition to a supported deployment method to ensure continued compatibility and access to the latest features and enhancements. To perform migration, please familiarize yourself with the ",(0,c.jsx)(n.a,{href:"/docs/3.9/operator-guide/upgrade/migrate-ci-pipelines-from-jenkins-to-tekton",children:"Migrate CI Pipelines From Jenkins to Tekton"}),".",(0,c.jsx)("br",{}),"\nFor those who still use EDP v3.3.x and below, the information below remains valid and applicable."]})}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["For Sonar, Jenkins and Gerrit, change the flag in the ",(0,c.jsx)(n.code,{children:"caCerts.enabled"})," field to ",(0,c.jsx)(n.code,{children:"true"}),". Also, change the name of the secret in the ",(0,c.jsx)(n.code,{children:"caCerts.secret"})," field to ",(0,c.jsx)(n.code,{children:"custom-ca-certificates"}),"."]}),"\n",(0,c.jsxs)(n.p,{children:["Example of specifying custom certificates for ",(0,c.jsx)(n.code,{children:"Gerrit"})," via the ",(0,c.jsx)(n.code,{children:"gerrit-operator"})," helm chart values:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-yaml",children:"...\ngerrit-operator:\n  enabled: true\n  gerrit:\n    caCerts:\n      # -- Flag for enabling additional CA certificates\n      enabled: true\n      # -- Change init CA certificates container image\n      image: adoptopenjdk/openjdk11:alpine\n      # -- Name of the secret containing additional CA certificates\n      secret: custom-ca-certificates\n...\n"})}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"integrate-custom-certificates-into-jenkins-agents",children:"Integrate Custom Certificates Into Jenkins Agents"}),"\n",(0,c.jsx)(n.p,{children:"This section describes how to add custom certificates to Jenkins agents to use them from Java applications."}),"\n",(0,c.jsx)(n.admonition,{type:"info",children:(0,c.jsxs)(n.p,{children:["For example, ",(0,c.jsx)(n.code,{children:"curl"})," doesn't use keystore files specified in this part of the documentation."]})}),"\n",(0,c.jsx)(n.p,{children:"Jenkins agents keep keystore files in two places:"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"/etc/ssl/certs/java"})," folder with the ",(0,c.jsx)(n.code,{children:"cacerts"})," file;"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"/opt/java/openjdk/lib/security"})," folder with the ",(0,c.jsx)(n.code,{children:"blocked.certs"}),", ",(0,c.jsx)(n.code,{children:"cacerts"}),", ",(0,c.jsx)(n.code,{children:"default.policy"})," and ",(0,c.jsx)(n.code,{children:"public_suffix_list.dat"})," files."]}),"\n"]}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["Copy the files in ",(0,c.jsx)(n.code,{children:"/etc/ssl/certs/java"})," and ",(0,c.jsx)(n.code,{children:"/opt/java/openjdk/lib/security"})," directories from Jenkins agent pod to the local ",(0,c.jsx)(n.code,{children:"tmp"})," folder.",(0,c.jsx)("br",{}),"\nThere is a ",(0,c.jsx)(n.code,{children:"copy_certs.sh"})," script below that can manage this. It copies the files in ",(0,c.jsx)(n.code,{children:"/etc/ssl/certs/java"})," and ",(0,c.jsx)(n.code,{children:"/opt/java/openjdk/lib/security"})," directories from Jenkins agent pod to the local ",(0,c.jsx)(n.code,{children:"tmp"})," folder\nand imports the custom certificate into the keystore files, after which it creates the\n",(0,c.jsx)(n.code,{children:"jenkins-agent-opt-java-openjdk-lib-security-cacerts"})," and ",(0,c.jsx)(n.code,{children:"jenkins-agent-etc-ssl-certs-java-cacerts"})," secrets from updated keystore files in KubeRocketCI namespace.\nAlso, the ",(0,c.jsx)(n.code,{children:"jenkins-agent-opt-java-openjdk-lib-security-cacerts"})," secret contains three additional files: ",(0,c.jsx)(n.code,{children:"blocked.certs"}),", ",(0,c.jsx)(n.code,{children:"default.policy"})," and ",(0,c.jsx)(n.code,{children:"public_suffix_list.dat"})," which managed by the ",(0,c.jsx)(n.code,{children:"copy_certs.sh"})," script as well. Expand the drop-down button below to see the contents of the ",(0,c.jsx)(n.code,{children:"copy_certs.sh"})," script."]}),"\n",(0,c.jsxs)(t,{children:[(0,c.jsx)("summary",{children:(0,c.jsx)("b",{children:"copy_certs.sh"})}),(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:'# Fill in the variables `ns` and `ca_file`\nns="edp-project"\nca_file="/tmp/CA.crt"\n\nimages=$(kubectl get -n "${ns}" cm jenkins-slaves -ojson | jq -r ".data[]" | grep image\\> | sed \'s/\\s*<.*>\\(.*\\)<.*>/\\1/\')\n\nimage=$(for i in ${images[@]}; do echo $i; done | grep maven-java8)\npod_name=$(echo "${image}" | tr \'.:/\' \'-\')\n\noverrides="{\\"apiVersion\\":\\"v1\\",\\"kind\\":\\"Pod\\",\\"metadata\\":{\\"name\\":\\"${pod_name}\\", \\"namespace\\": \\"${ns}\\"},\n\\"spec\\":{\\"containers\\":[{\\"name\\":\\"${pod_name}\\",\\"image\\":\\"${image}\\",\n\\"command\\":[\\"sh\\",\\"-c\\",\\"while true;do sleep 30;done;\\"]}]}}"\n\nkubectl run -n "${ns}" "${pod_name}" --image "${image}" --overrides="${overrides}"\n\nkubectl wait --for=condition=ready pod "${pod_name}" -n "${ns}"\n\ncacerts_location=$(kubectl exec -n "${ns}" "${pod_name}" \\\n  -- find / -name cacerts -exec ls -la "{}" \\; 2>/dev/null | grep -v ^l | awk \'{print $9}\')\n\nfor cacerts in ${cacerts_location[@]}; do echo $(dirname "${cacerts}"); kubectl exec -n "${ns}" "${pod_name}" -- ls $(dirname "${cacerts}"); done\n\nfor cacerts in ${cacerts_location[@]}; do \\\n    echo $(dirname "${cacerts}"); \\\n    mkdir -p "/tmp$(dirname "${cacerts}")"; \\\n    from_files=\'\'; \\\n    for file in $(kubectl exec -n "${ns}" "${pod_name}" -- ls $(dirname "${cacerts}")); do \\\n        kubectl exec -n "${ns}" "${pod_name}" -- cat "$(dirname "${cacerts}")/${file}" > "/tmp$(dirname "${cacerts}")/${file}"; \\\n        from_files="${from_files} --from-file=/tmp$(dirname "${cacerts}")/${file}"\n    done ; \\\n    keytool -import -storepass changeit -alias kubernetes -file ${ca_file} -noprompt -keystore "/tmp${cacerts}"; \\\n    kubectl -n "${ns}" create secret generic "jenkins-agent${cacerts//\\//-}" $from_files \\\ndone\n\nkubectl delete -n "${ns}" pod "${pod_name}" --force --grace-period=0\n'})})]}),"\n",(0,c.jsxs)(n.p,{children:["Before using the ",(0,c.jsx)(n.code,{children:"copy_certs.sh"})," script, keep in mind the following:"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["assign actual values to the variables ",(0,c.jsx)(n.code,{children:"ns"})," and ",(0,c.jsx)(n.code,{children:"ca_file"}),";"]}),"\n",(0,c.jsxs)(n.li,{children:["the script collects all the images from the ",(0,c.jsx)(n.code,{children:"jenkins-slaves"})," ConfigMap and uses the image of\nthe ",(0,c.jsx)(n.code,{children:"maven-java8"})," agent as the base image of the temporary pod to get the keystore files;"]}),"\n",(0,c.jsxs)(n.li,{children:["custom certificate is imported using the ",(0,c.jsx)(n.code,{children:"keytool"})," application;"]}),"\n",(0,c.jsxs)(n.li,{children:["the ",(0,c.jsx)(n.code,{children:"jenkins-agent-opt-java-openjdk-lib-security-cacerts"})," and ",(0,c.jsx)(n.code,{children:"jenkins-agent-etc-ssl-certs-java-cacerts"})," secrets will be created in the ",(0,c.jsx)(n.code,{children:"edp"})," namespace."]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["Run the ",(0,c.jsx)(n.code,{children:"copy_certs.sh"})," script from the previous point after the requirements are met."]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["Update manually the ",(0,c.jsx)(n.code,{children:"jenkins-slaves"})," ConfigMap."]}),"\n",(0,c.jsxs)(n.p,{children:["Add this block with the mount of secrets to the ",(0,c.jsx)(n.code,{children:"<volumes></volumes>"})," block of each Jenkins agent:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-xml",children:"...\n        <org.csanchez.jenkins.plugins.kubernetes.volumes.SecretVolume>\n          <mountPath>/etc/ssl/certs/java</mountPath>\n          <secretName>jenkins-agent-etc-ssl-certs-java-cacerts</secretName>\n        </org.csanchez.jenkins.plugins.kubernetes.volumes.SecretVolume>\n        <org.csanchez.jenkins.plugins.kubernetes.volumes.SecretVolume>\n          <mountPath>/opt/java/openjdk/lib/security</mountPath>\n          <secretName>jenkins-agent-opt-java-openjdk-lib-security-cacerts</secretName>\n        </org.csanchez.jenkins.plugins.kubernetes.volumes.SecretVolume>\n...\n"})}),"\n",(0,c.jsxs)(n.p,{children:["As an example, the template of ",(0,c.jsx)(n.code,{children:"gradle-java11-template"})," is shown below:",(0,c.jsx)("br",{})]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-xml",children:"...\n      </workspaceVolume>\n      <volumes>\n        <org.csanchez.jenkins.plugins.kubernetes.volumes.SecretVolume>\n          <mountPath>/etc/ssl/certs/java</mountPath>\n          <secretName>jenkins-agent-etc-ssl-certs-java-cacerts</secretName>\n        </org.csanchez.jenkins.plugins.kubernetes.volumes.SecretVolume>\n        <org.csanchez.jenkins.plugins.kubernetes.volumes.SecretVolume>\n          <mountPath>/opt/java/openjdk/lib/security</mountPath>\n          <secretName>jenkins-agent-opt-java-openjdk-lib-security-cacerts</secretName>\n        </org.csanchez.jenkins.plugins.kubernetes.volumes.SecretVolume>\n      </volumes>\n      <containers>\n...\n"})}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"Reload the Jenkins pod:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:'ns="edp"\nkubectl rollout restart -n "${ns}" deployment/jenkins\n'})}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"/docs/3.9/operator-guide/install-kuberocketci",children:"Install KubeRocketCI"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"/docs/3.9/operator-guide/auth/keycloak",children:"Install Keycloak"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}function u(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var s=t(96540);const c={},r=s.createContext(c);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);