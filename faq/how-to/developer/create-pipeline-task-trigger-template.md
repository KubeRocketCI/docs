# How Do I Create a New Pipeline/Task/Trigger Template on the Platform?

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/faq/how-to/developer/create-pipeline-task-trigger-template" />
</head>

Add the new resources to your pipelines repository, review the change, and synchronize it in the Argo CD application. This keeps a single, auditable source of truth for pipeline definitions. More details are provided in the [Use Case](/docs/use-cases/custom-pipelines-flow).

Starting with KubeRocketCI 3.16, developers have read-only access to Pipelines, Tasks, and Triggers in the platform namespace, so creating or editing them directly on the cluster, for example to test a change, requires administrator rights.
