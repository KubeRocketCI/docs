---

title: "Associate IAM Roles With Service Accounts"
description: "Step-by-step guide on associating IAM roles with Kubernetes service accounts in AWS EKS, including IAM role creation, pod identity webhook setup, and service account annotation."
sidebar_label: "Associate IAM Roles With Service Accounts"

---
<!-- markdownlint-disable MD025 -->

# Associate IAM Roles With Service Accounts

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/docs/operator-guide/infrastructure-providers/aws/enable-irsa/" />
</head>

This page contains information on how to associate an IAM role with the service account (IRSA).

Get acquainted with the [AWS Official Documentation](https://docs.aws.amazon.com/eks/latest/userguide/iam-roles-for-service-accounts-technical-overview.html) on the subject before proceeding.

## Common Configuration of IAM Roles With Service Accounts

To successfully associate the IAM role with the service account, follow the steps below:

1. Create an IAM role that will further be associated with the service account. This role must have the following trust policy:

   **IAM Role**

      ```bash
      {
        "Version": "2012-10-17",
        "Statement": [
          {
            "Effect": "Allow",
            "Principal": {
              "Federated": "arn:aws:iam::<AWS_ACCOUNT_ID>:oidc-provider/<OIDC_PROVIDER>"
            },
            "Action": "sts:AssumeRoleWithWebIdentity",
            "Condition": {
              "StringEquals": {
                "<OIDC_PROVIDER>:sub": "system:serviceaccount:<SERVICE_ACCOUNT_NAMESPACE>:<SERVICE_ACCOUNT_NAME>"
              }
            }
          }
        ]
      }
      ```

    View cluster's `<OIDC_PROVIDER>` URL.

      ```bash
        aws eks describe-cluster --name <CLUSTER_NAME> --query "cluster.identity.oidc.issuer" --output text
      ```

    Example output:

      ```bash
      https://oidc.eks.us-west-2.amazonaws.com/id/EXAMPLED539D4633E53DE1B716D3041E
      ```

    `<OIDC_PROVIDER>` in this example will be:

      ```bash
      oidc.eks.us-west-2.amazonaws.com/id/EXAMPLED539D4633E53DE1B716D3041E
      ```

2. Deploy the [amazon-eks-pod-identity-webhook](https://github.com/aws/amazon-eks-pod-identity-webhook/tree/master) v0.2.0.

    :::note
      The [amazon-eks-pod-identity-webhook](https://github.com/aws/amazon-eks-pod-identity-webhook/tree/master) functionality is provided out of the box in EKS v1.21 and higher. This does not apply if the cluster has been upgraded from older versions. Therefore, skip step 2 and continue from step 3 in this documentation.
    :::

    2.1. Provide the [stable](https://hub.docker.com/r/amazon/amazon-eks-pod-identity-webhook)(ed8c41f) version of the Docker image in the _deploy/deployment-base.yaml_ file.

    2.2. Provide `${CA_BUNDLE}` in the _deploy/mutatingwebhook.yaml_ file:

      ```bash
      secret_name=$(kubectl -n default get sa default -o jsonpath='{.secrets[0].name}') \
      CA_BUNDLE=$(kubectl -n default get secret/$secret_name -o jsonpath='{.data.ca\.crt}' | tr -d '\n')
      ```

    2.3. Deploy the Webhook:

      ```bash
      kubectl apply -f deploy/
      ```

    2.4. Approve the _csr_:

      ```bash
      csr_name=$(kubectl get csr -o jsonpath='{.items[?(@.spec.username=="system:serviceaccount:default:pod-identity-webhook")].metadata.name}')
      kubectl certificate approve $csr_name
      ```

3. Annotate the created service account with the IAM role:

    **Service Account**

      ```yaml
      apiVersion: v1
      kind: ServiceAccount
      metadata:
        name: <SERVICE_ACCOUNT_NAME>
        namespace: <NAMESPACE>
        annotations:
          eks.amazonaws.com/role-arn: "arn:aws:iam::<AWS_ACCOUNT_ID>:role/<IAM_ROLE_NAME>"
      ```

4. All newly launched pods with this service account will be modified and then use the associated IAM role. Find below the pod specification template:

   **Pod Template**

      ```yaml
      apiVersion: v1
      kind: Pod
      metadata:
        name: irsa-test
        namespace: <POD_NAMESPACE>
      spec:
        serviceAccountName: <SERVICE_ACCOUNT_NAME>
        securityContext:
          fsGroup: 65534
        containers:
        - name: terraform
          image: epamedp/edp-jenkins-terraform-agent:3.0.9
          command: ['sh', '-c', 'aws sts "get-caller-identity" && sleep 3600']
      ```

5. Check the logs of the created pod from the template above.

    Example output:

      ```json
      {
      "UserId": "XXXXXXXXXXXXXXXXXXXXX:botocore-session-XXXXXXXXXX",
      "Account": "XXXXXXXXXXXX",
      "Arn": "arn:aws:sts::XXXXXXXXXXXX:assumed-role/AWSIRSATestRole/botocore-session-XXXXXXXXXX"
      }
      ```

   As a result, it is possible to perform actions in AWS under the **AWSIRSATestRole** role.
