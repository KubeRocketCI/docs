"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[64653],{14532:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"operator-guide/infrastructure-providers/aws/waf-tf-configuration","title":"Configure AWS WAF With Terraform","description":"Secure your web applications by configuring AWS WAF using Terraform to prevent Host Header vulnerabilities and ensure secured traffic exposure.","source":"@site/versioned_docs/version-3.9/operator-guide/infrastructure-providers/aws/waf-tf-configuration.md","sourceDirName":"operator-guide/infrastructure-providers/aws","slug":"/operator-guide/infrastructure-providers/aws/waf-tf-configuration","permalink":"/docs/3.9/operator-guide/infrastructure-providers/aws/waf-tf-configuration","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/operator-guide/infrastructure-providers/aws/waf-tf-configuration.md","tags":[],"version":"3.9","lastUpdatedBy":"Oleksandr_Stepanov@epam.com","lastUpdatedAt":1740746844000,"frontMatter":{"title":"Configure AWS WAF With Terraform","description":"Secure your web applications by configuring AWS WAF using Terraform to prevent Host Header vulnerabilities and ensure secured traffic exposure.","sidebar_label":"Configure AWS WAF With Terraform"},"sidebar":"operatorGuideSidebar","previous":{"title":"Deploy AWS EKS Cluster","permalink":"/docs/3.9/operator-guide/deploy-aws-eks"},"next":{"title":"Amazon EBS CSI Driver","permalink":"/docs/3.9/operator-guide/infrastructure-providers/aws/ebs-csi-driver"}}');var s=r(74848),a=r(28453);const i={title:"Configure AWS WAF With Terraform",description:"Secure your web applications by configuring AWS WAF using Terraform to prevent Host Header vulnerabilities and ensure secured traffic exposure.",sidebar_label:"Configure AWS WAF With Terraform"},o="Configure AWS WAF With Terraform",l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Solution Overview",id:"solution-overview",level:2},{value:"WAF ACL Configuration",id:"waf-acl-configuration",level:2},{value:"Associate AWS Resource",id:"associate-aws-resource",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components},{Head:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"configure-aws-waf-with-terraform",children:"Configure AWS WAF With Terraform"})}),"\n",(0,s.jsx)(t,{children:(0,s.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/operator-guide/infrastructure-providers/aws/waf-tf-configuration/"})}),"\n",(0,s.jsxs)(n.p,{children:["This page contains accurate information on how to configure ",(0,s.jsx)(n.a,{href:"https://aws.amazon.com/waf/",children:"AWS WAF"})," using Terraform with the aim to have a secured traffic exposure and to prevent the Host Header vulnerabilities."]}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(n.p,{children:"To follow the instruction, check the following prerequisites:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Deployed infrastructure includes Nginx Ingress Controller"}),"\n",(0,s.jsx)(n.li,{children:"Deployed services for testing"}),"\n",(0,s.jsx)(n.li,{children:"Separate and exposed AWS ALB"}),"\n",(0,s.jsx)(n.li,{children:"terraform 0.14.10"}),"\n",(0,s.jsx)(n.li,{children:"hashicorp/aws = 4.8.0"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"solution-overview",children:"Solution Overview"}),"\n",(0,s.jsx)(n.p,{children:"The solution includes two parts:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Prerequisites (mostly the left part of the scheme) - AWS ALB, Compute Resources (EC2, EKS, etc.)."}),"\n",(0,s.jsx)(n.li,{children:"WAF configuration (the right part of the scheme)."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The WAF ACL resource is the main resource used for the configuration; The default web ACL option is Block."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Overview WAF Solution",src:r(50553).A+"",width:"981",height:"756"})}),"\n",(0,s.jsx)(n.p,{children:"The ACL includes three managed AWS rules that secure the exposed traffic:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"AWS-AWSManagedRulesCommonRuleSet"}),"\n",(0,s.jsx)(n.li,{children:"AWS-AWSManagedRulesLinuxRuleSet"}),"\n",(0,s.jsx)(n.li,{children:"AWS-AWSManagedRulesKnownBadInputsRuleSet"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["AWS provides a lot of rules such as baseline and use-case specific rules, for details, please refer to the ",(0,s.jsx)(n.a,{href:"https://docs.aws.amazon.com/waf/latest/developerguide/aws-managed-rule-groups-baseline.html",children:"Baseline rule groups"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["There is the ",(0,s.jsx)(n.em,{children:"PreventHostInjections"})," rule that prevents the Host Header vulnerabilities. This rule includes one statement that declares that the Host Header should match Regex Pattern Set, thus only in this case it will be passed."]}),"\n",(0,s.jsx)(n.p,{children:"The Regex Pattern Set is another resource that helps to organize regexes, in fact, is a set of regexes. All regexes added to the single set are matched by the OR statement, i.e. when exposing several URLs, it is necessary to add this statement to the set and refer to it in the rule."}),"\n",(0,s.jsx)(n.h2,{id:"waf-acl-configuration",children:"WAF ACL Configuration"}),"\n",(0,s.jsx)(n.p,{children:"To create the Regex Pattern Set, inspect the following code:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-terraform",children:'resource "aws_wafv2_regex_pattern_set" "common" {\n  name  = "Common"\n  scope = "REGIONAL"\n\n  regular_expression {\n    regex_string = "^.*(some-url).*((.example)+)\\\\.com$"\n  }\n\n  #  Add here additional regular expressions for other endpoints, they are merging with OR operator, e.g.\n\n  /*\n   regular_expression {\n      regex_string = "^.*(keycloak).*((.example)+)\\\\.com$"\n   }\n   */\n\n  tags = var.tags\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"It includes 'regex_string', for example: url - some-url.example.com,\nIn addition, it is possible to add other links to the same resource using the regular_expression element."}),"\n",(0,s.jsx)(n.p,{children:"There is the Terraform code for the aws_wafv2_web_acl resource:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-terraform",children:'resource "aws_wafv2_web_acl" "external" {\n  name  = "ExternalACL"\n  scope = "REGIONAL"\n\n  default_action {\n    block {}\n  }\n\n  rule {\n    name     = "AWS-AWSManagedRulesCommonRuleSet"\n    priority = 1\n\n    override_action {\n      none {}\n    }\n\n    statement {\n      managed_rule_group_statement {\n        name        = "AWSManagedRulesCommonRuleSet"\n        vendor_name = "AWS"\n      }\n    }\n\n    visibility_config {\n      cloudwatch_metrics_enabled = true\n      metric_name                = "AWS-AWSManagedRulesCommonRuleSet"\n      sampled_requests_enabled   = true\n    }\n  }\n\n  rule {\n    name     = "AWS-AWSManagedRulesLinuxRuleSet"\n    priority = 2\n\n    statement {\n      managed_rule_group_statement {\n        name        = "AWSManagedRulesLinuxRuleSet"\n        vendor_name = "AWS"\n      }\n    }\n\n    override_action {\n      none {}\n    }\n\n    visibility_config {\n      cloudwatch_metrics_enabled = true\n      metric_name                = "AWS-AWSManagedRulesLinuxRuleSet"\n      sampled_requests_enabled   = true\n    }\n  }\n\n  rule {\n    name     = "AWS-AWSManagedRulesKnownBadInputsRuleSet"\n    priority = 3\n\n    override_action {\n      none {}\n    }\n\n    statement {\n      managed_rule_group_statement {\n        name        = "AWSManagedRulesKnownBadInputsRuleSet"\n        vendor_name = "AWS"\n      }\n    }\n\n    visibility_config {\n      cloudwatch_metrics_enabled = true\n      metric_name                = "AWS-AWSManagedRulesKnownBadInputsRuleSet"\n      sampled_requests_enabled   = true\n    }\n  }\n\n  rule {\n    name     = "PreventHostInjections"\n    priority = 0\n\n    statement {\n      regex_pattern_set_reference_statement {\n        arn = aws_wafv2_regex_pattern_set.common.arn\n\n        field_to_match {\n          single_header {\n            name = "host"\n          }\n        }\n\n        text_transformation {\n          priority = 0\n          type     = "NONE"\n        }\n      }\n    }\n\n    action {\n      allow {}\n    }\n\n    visibility_config {\n      cloudwatch_metrics_enabled = true\n      metric_name                = "PreventHostInjections"\n      sampled_requests_enabled   = true\n    }\n  }\n\n  visibility_config {\n    cloudwatch_metrics_enabled = true\n    metric_name                = "ExternalACL"\n    sampled_requests_enabled   = true\n  }\n\n  tags = var.tags\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"As mentioned previously, ACL includes three managed AWS rules (group rules), for visibility, enabling sampling, and CloudWatch in the config.\nThe 'PreventHostInjections' custom rule refers to the created pattern set and declares the Host Header, as well as sets the 'Action' if matched to 'Allow'."}),"\n",(0,s.jsx)(n.h2,{id:"associate-aws-resource",children:"Associate AWS Resource"}),"\n",(0,s.jsx)(n.p,{children:"To have the created ACL working, it is necessary to associate an AWS resource with it, in this case, it is AWS ALB:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-terraform",children:'resource "aws_wafv2_web_acl_association" "waf_alb" {\n  resource_arn = aws_lb.<aws_alb_for_waf>.arn\n  web_acl_arn  = aws_wafv2_web_acl.external.arn\n}\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"AWS ALB can be created in the scope of this Terraform code or created previously. When creating ALB to expose links, the ALB should have a security group that allows some external traffic."})}),"\n",(0,s.jsx)(n.p,{children:"When ALB is associated with the WAF ACL, direct the traffic to the ALB by the Route53 CNAME record:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-terraform",children:'module "some_url_exposure" {\n  source  = "terraform-aws-modules/route53/aws//modules/records"\n  version = "2.0.0"\n\n  zone_name = "example.com"\n\n  records = [\n    {\n      name    = "some-url"\n      type    = "CNAME"\n      ttl     = 300\n      records = [aws_lb.<aws_alb_for_waf>.dns_name]\n    }\n  ]\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"In the sample above, the module is used, but it is also possible to use a Terraform resource."})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},50553:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/waf-configuration.drawio-19157aae4b78beb47f231a1233e94f8c.png"},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>o});var t=r(96540);const s={},a=t.createContext(s);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);