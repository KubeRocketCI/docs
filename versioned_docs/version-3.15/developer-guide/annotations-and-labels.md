---

title: "Annotations and Labels"
description: "Guide on the usage of labels and annotations in KubeRocketCI for resource interaction, monitoring, and governance within a Kubernetes cluster."
sidebar_label: "Annotations and Labels"

---
<!-- markdownlint-disable MD025 -->

# Annotations and Labels

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/docs/developer-guide/annotations-and-labels" />
</head>

KubeRocketCI uses labels to interact with various resources in a Kubernetes cluster. This guide details the resources, annotations, and labels used by the platform to streamline operations, enhance monitoring, and enforce governance.

## Annotations

The table below contains the key annotations used in KubeRocketCI:

| Annotation Key                  | Target Resources              | Possible Values      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| :------------------------------ | :----------------------------- | :-------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| app.edp.epam.com/service-account | Pipeline                       | `<service_account_name>`, e.g. `tekton` | Selects the ServiceAccount the resulting PipelineRuns run under. If unset, falls back to the `tekton.defaultServiceAccount` chart value, which defaults to the unprivileged `tekton-unprivileged` ServiceAccount. Library build pipelines ship annotated with `tekton` so they keep running under the privileged ServiceAccount; review pipelines fall back to `tekton-unprivileged` unless annotated otherwise.                                            |
| app.edp.epam.com/reporter-logs   | PipelineRun, GitServer         | `"true"`, `"false"`   | Overrides the chart-wide `reporter.logsReporting` value (default `false`) per PipelineRun or per GitServer, controlling whether the Tekton pipeline-run reporter republishes trailing log lines of failed steps in pull/merge request report comments. The PipelineRun annotation takes precedence over the GitServer one. The pass/fail status comment itself is always published regardless of this setting.                                             |
| app.edp.epam.com/queue-cancel-reason | PipelineRun                | `user-cancelled`, `superseded` | Set on a PipelineRun to record why it was gracefully cancelled: the portal writes `user-cancelled` when a user cancels a run, and the `tekton-pipeline-queue` operator writes `superseded` when a queued run is displaced by a newer commit in the same lane. Read via the Kubernetes downward API by the `github-set-status`, `gitlab-set-status`, and `bitbucket-set-status` finally tasks, which report a cancellation-specific commit status instead of a plain failure: GitHub uses the `error` state, GitLab uses `canceled`, and Bitbucket uses `STOPPED`, each described as "SUPERSEDED BY NEWER COMMIT" or "CANCELED" according to the recorded reason. Must be stripped when a PipelineRun is rerun, or a stale value will disguise a genuine failure as a cancellation.                                            |

## Labels

The table below contains all the labels used in KubeRocketCI:

| Label Key                           | Target Resources                    | Possible Values                                                                    | Description        |
| :---------------------------------- |:---------------------------------| :----------------------------------------------------------------------------------| :-------------------------------------------------------------------------- |
| app.edp.epam.com/secret-type        | Secrets                                     | `jira`, `nexus`, `sonar`, `defectdojo`, `dependency-track`,`repository` | Identifies the type of the secret.                                              |
| app.edp.epam.com/integration-secret | Secrets                                     | `true`                                                                  | Indicates if the secret is used for integration.                                         |
| app.edp.epam.com/integration        | Codebase                                    | `codemie`                                                              | Indicates that the codebase should be integrated with Codemie. When applied, the Codemie operator reconciles the codebase and creates a Codemie Application.                                        |
| app.edp.epam.com/codebase           | PipelineRun, CodebaseImageStream            | `<codebase_name>`                                                       | Identifies the codebase associated with the PipelineRun and CodebaseImageStream.                                 |
| app.edp.epam.com/codebasebranch     | PipelineRun, CodebaseImageStream            | `<codebasebranch_name>`                                                 | Identifies the codebase branch associated with the PipelineRun and CodebaseImageStream.                                 |
| app.edp.epam.com/pipeline           | PipelineRun, TaskRun                        | `<environment_name>`                                                    | Used by the KubeRocketCI to display autotests' status (on Deploy environment)                                         |
| app.edp.epam.com/triggertemplate    | Pipeline, PipelineRun                       | `<triggertemplate_name>`                                                | Allows to pull default parameters from the TriggerTemplate resource.                                            |
| app.edp.epam.com/pipelinetype       | Pipeline, PipelineRun, TaskRun              | `autotestRunner`, `build`, `review`, `deploy`, `clean`                  | Identifies the Pipeline type.                                                |
| app.edp.epam.com/parentPipelineRun  | PipelineRun                                 | `<cd-pipeline-autotest-runner-name>`                                    | Used by the KubeRocketCI to display autotests' status (on Deploy environment)                                         |
| app.edp.epam.com/stage              | PipelineRun, TaskRun                        | `<stage_name>`                                                          | Used by the KubeRocketCI to display autotests' status (on Deploy environment)                                         |
| app.edp.epam.com/branch             | PipelineRun                                 | `<branch_name>`                                                         | Identifies the branch associated with the PipelineRun.                                         |
| app.edp.epam.com/codebaseType       | Codebase                                    | `system`,`application`                                                  | Identifies the type of the codebase.                                            |
| app.edp.epam.com/systemType         | Codebase                                    | `gitops`                                                                | Identifies system repositories.                                        |
| app.edp.epam.com/gitServer          | Ingress, EventListener, Trigger             | `<gitServer_name>`                                                      | Identifies resources associated with the Git Server. On a Trigger, registers it with the Git Server's EventListener via its labelSelector. |
| app.edp.epam.com/cdpipeline         | PipelineRun, TaskRun                        | `<cdpipeline>`                                                          | Identifies Deployment Flow associated with the Pipeline Run.                                                 |
| app.edp.epam.com/cdstage            | PipelineRun, TaskRun                        | `<cd_stage_name>`                                                       | Identifies Environment associated with the Pipeline Run.                                                 |
| app.edp.epam.com/edit-protection    | Codebase, CodebaseBranch, CDPipeline, Stage | `delete-update`, `delete`, `update`                                     | When applied to a resource, protects a resource from deletion and/or modification.                                        |

### Labels Usage in Secrets

The table below shows what labels are used by specific secrets:

| Secret Name          | Labels                                                                                       |
| :------------------- | :------------------------------------------------------------------------------------------- |
| ci-argocd            | app.edp.epam.com/integration-secret=true<br /> app.edp.epam.com/secret-type=argocd           |
| ci-defectdojo        | app.edp.epam.com/integration-secret=true<br /> app.edp.epam.com/secret-type=defectdojo       |
| ci-dependency-track  | app.edp.epam.com/integration-secret=true<br /> app.edp.epam.com/secret-type=dependency-track |
| ci-jira              | app.edp.epam.com/secret-type=jira                                                            |
| ci-nexus             | app.edp.epam.com/integration-secret=true<br /> app.edp.epam.com/secret-type=nexus            |
| ci-sonarqube         | app.edp.epam.com/integration-secret=true<br /> app.edp.epam.com/secret-type=sonar            |
| gerrit-ciuser-sshkey | app.edp.epam.com/secret-type=repository                                                      |
| kaniko-docker-config | app.edp.epam.com/integration-secret=true<br /> app.edp.epam.com/secret-type=registry         |
| regcred              | app.edp.epam.com/integration-secret=true<br /> app.edp.epam.com/secret-type=registry         |

### Labels Usage in Tekton Pipeline Runs

The table below displays what labels are used in specific Tekton pipelines:

| PipelineRun              | Labels                                                                                                                                                                                                                                              |
| :----------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| review-pipeline          | app.edp.epam.com/codebase: `<codebase_name>` <br /> app.edp.epam.com/codebasebranch: `<codebase_name>`-`<branch_name>`<br /> app.edp.epam.com/pipelinetype: `review`                                                                                |
| build-pipeline           | app.edp.epam.com/codebase: `<codebase_name>` <br /> app.edp.epam.com/codebasebranch: `<codebase_name>`-`<branch_name>`<br /> app.edp.epam.com/pipelinetype: `build`                                                                                 |
| autotest-runner-pipeline | app.edp.epam.com/pipeline: `<pipeline_name>`<br /> app.edp.epam.com/pipelinetype: `autotestRunner` <br /> app.edp.epam.com/stage: `<stage>`                                                                                                         |
| autotest-pipeline        | app.edp.epam.com/branch: `<branch>`<br /> app.edp.epam.com/codebase: `<codebase_name>`<br /> app.edp.epam.com/parentPipelineRun: `<cd_pipeline>`-`<stage>`<br /> app.edp.epam.com/pipeline: `<cd_pipeline>`<br /> app.edp.epam.com/stage: `<stage>` |
| deploy                   | app.edp.epam.com/cdpipeline: `<cd_pipeline>`<br /> app.edp.epam.com/cdstage: `<cd_stage_name>`<br /> app.edp.epam.com/pipelinetype: `deploy`                                                                                                        |
| clean                    | app.edp.epam.com/cdpipeline: `<cd_pipeline>`<br /> app.edp.epam.com/cdstage: `<cd_stage_name>`<br /> app.edp.epam.com/pipelinetype: `clean`                                                                                                         |

### Pipeline Usage Example

To demonstrate label usage in the Tekton pipelines, find below some KubeRocketCI resource examples:

  ```yaml title="Codebase specification"
  metadata:
    ...
    name: demo
    ...
  spec:
    ...
    defaultBranch: main
    type: application
    framework: react
    lang: javascript
    ...
  ```

  ```yaml title="CD Pipeline specification"
  spec:
    ...
    applications:
      - demo
    inputDockerStreams:
      - demo-main
    name: mypipe
    ...
  ```

  ```yaml title="Stage specification"
  spec:
    ...
    cdPipeline: mypipe
    name: dev
    namespace: krci-delivery-ms-delivery-dev-mypipe-dev
    qualityGates:
      - autotestName: autotests
        branchName: master
        qualityGateType: autotests
        stepName: autotest
    ...
  ```

The table below shows all the pipelines associated with the `demo` codebase:

| Pipeline Name                      | Type   | Labels                                                                                                                                                                                                         |
| :--------------------------------- | :----- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| gerrit-npm-react-app-review        | Review | app.edp.epam.com/codebase: demo<br /> app.edp.epam.com/codebasebranch: demo-main<br /> app.edp.epam.com/pipelinetype: review                                                                                   |
| gerrit-npm-react-app-build-default | Build  | app.edp.epam.com/codebase: demo<br /> app.edp.epam.com/codebasebranch: demo-main<br /> app.edp.epam.com/pipelinetype: build                                                                                    |
| autotest-runner                    | Deploy | app.edp.epam.com/pipeline: mypipe<br /> app.edp.epam.com/pipelinetype: autotestRunner<br /> app.edp.epam.com/stage: dev                                                                                        |
| autotests-gradle, autotests-maven  | Deploy | app.edp.epam.com/branch: master<br /> app.edp.epam.com/codebase: autotests<br /> app.edp.epam.com/parentPipelineRun: mypipe-dev-hash<br /> app.edp.epam.com/pipeline: mypipe<br /> app.edp.epam.com/stage: dev |
| deploy                             | Deploy | app.edp.epam.com/cdpipeline: deploy<br />app.edp.epam.com/cdstage: deploy-dev<br /> app.edp.epam.com/pipelinetype: deploy<br />                                                                                |
| clean                              | Clean  | app.edp.epam.com/cdpipeline: deploy<br />app.edp.epam.com/cdstage: deploy-dev<br /> app.edp.epam.com/pipelinetype: clean<br />                                                                                 |

The list of all the tasks associated with the `demo` codebase is presented below:

| Task Name          | Labels                                                                                                                                                                                                         |
| :----------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| init-autotest      | app.edp.epam.com/pipeline: mypipe<br /> app.edp.epam.com/pipelinetype: autotestRunner<br /> app.edp.epam.com/stage: dev                                                                                        |
| run-autotest       | app.edp.epam.com/branch: master<br /> app.edp.epam.com/codebase: autotests<br /> app.edp.epam.com/parentPipelineRun: mypipe-dev-hash<br /> app.edp.epam.com/pipeline: mypipe<br /> app.edp.epam.com/stage: dev |
| wait-for-autotests | app.edp.epam.com/pipeline: mypipe<br /> app.edp.epam.com/pipelinetype: autotestRunner<br /> app.edp.epam.com/stage: dev                                                                                        |
| promote-images     | app.edp.epam.com/pipeline: mypipe<br /> app.edp.epam.com/pipelinetype: autotestRunner<br /> app.edp.epam.com/stage: dev                                                                                        |
