# Install Grafana Loki

EDP configures the logging with the help of [Grafana Loki](https://grafana.com/oss/loki/) aggregation system.

## Installation

To install Loki, follow the steps below:

1. Create **logging** namespace:

    ```bash
    kubectl create namespace logging
    ```

    :::note
      On the OpenShift cluster, run the `oc` command instead of the `kubectl` command.
    :::

2. Add a chart repository:

    ```bash
    helm repo add grafana https://grafana.github.io/helm-charts
    helm repo update
    ```

    :::note
      It is possible to use Amazon Simple Storage Service [Amazon S3](https://aws.amazon.com/s3/) as an object storage for Loki.
      To configure access, please refer to the [IRSA for Loki](./loki-irsa.md) documentation.
    :::

3. Install **Loki v.2.6.0**:

    ```bash
    helm install loki grafana/loki \
      --version 2.6.0 \
      --values values.yaml \
      --namespace logging
    ```

    Check out the *values.yaml* file sample of the Loki customization:

    <details>
    <summary><b>View: values.yaml</b></summary>

    ```yaml
    image:
      repository: grafana/loki
      tag: 2.3.0
    config:
      auth_enabled: false
      schema_config:
        configs:
        - from: 2021-06-01
          store: boltdb-shipper
          object_store: s3
          schema: v11
          index:
            prefix: loki_index_
            period: 24h
      storage_config:
        aws:
          s3: s3://<AWS_REGION>/loki-<CLUSTER_NAME>
        boltdb_shipper:
          active_index_directory: /data/loki/index
          cache_location: /data/loki/boltdb-cache
          shared_store: s3
      chunk_store_config:
        max_look_back_period: 24h
    resources:
      limits:
        memory: "128Mi"
      requests:
        cpu: "50m"
        memory: "128Mi"
    serviceAccount:
      create: true
      name: edp-loki
      annotations:
        eks.amazonaws.com/role-arn: "arn:aws:iam::<AWS_ACCOUNT_ID>:role/AWSIRSA‹CLUSTER_NAME›‹LOKI_NAMESPACE›Loki
    persistence:
      enabled: false
    ```

    </details>

4. Configure [custom bucket policy](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lifecycle-mgmt.html) to delete the old data.
