# How to Define Deploy and Clean Pipelines for a Specific Environment?

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/faq/how-to/application-deployment/define-deploy-clean-pipelines" />
</head>

To define a custom deploy/clean pipeline, you need to create [TriggerTemplate](https://github.com/epam/edp-tekton/blob/master/charts/pipelines-library/templates/triggers/cd/clean.yaml), [Pipeline](https://github.com/epam/edp-tekton/blob/master/charts/pipelines-library/templates/pipelines/cd/clean.yaml), and [Task](https://github.com/epam/edp-tekton/blob/master/charts/pipelines-library/templates/tasks/cd/clean.yaml).

More details are provided in the [Customize Environment Cleanup](/docs/operator-guide/cd/customize-environment-deletion) and [Customize Deploy Pipeline](/docs/operator-guide/cd/customize-deploy-pipeline) pages.
