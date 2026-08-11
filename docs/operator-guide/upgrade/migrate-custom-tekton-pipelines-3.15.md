---
title: "Align Custom Tekton Pipelines with 3.15"
description: "Checklist for migrating custom Tekton pipeline libraries to KubeRocketCI 3.15: dedicated ServiceAccounts and RBAC, credential channels, trigger template parameter contract changes, and how to sequence the cutover without breaking the current release."
sidebar_label: "Align Custom Tekton Pipelines with 3.15"
---
<!-- markdownlint-disable MD025 -->

# Align Custom Tekton Pipelines with 3.15

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/docs/operator-guide/upgrade/migrate-custom-tekton-pipelines-3.15" />
</head>

This page applies if you maintain your own Tekton pipeline library — custom `Pipeline` resources referenced from `CodebaseBranch.spec.pipelines`, typically modeled on the platform's shipped pipelines (see [Create and Use Custom Tekton Pipelines](../../use-cases/custom-pipelines-flow.md)). The `edp-tekton` `0.27.0` chart shipped with 3.15 changes several contracts such pipelines rely on. Every item below can be applied **before** the platform upgrade — each change is compatible with both the 3.14 (`0.26`) and 3.15 (`0.27`) releases — so custom pipelines keep working through the upgrade instead of breaking with it.

## What Changed for Pipeline Authors

- **ServiceAccount resolution.** Webhook-triggered PipelineRuns no longer run as the privileged `tekton` ServiceAccount. The interceptor reads the `app.edp.epam.com/service-account` annotation from the Pipeline named in `CodebaseBranch.spec.pipelines.{build,review}` and passes it to the trigger templates; a missing annotation, a missing Pipeline, or any lookup error silently falls back to `tekton.defaultServiceAccount` (`tekton-unprivileged` — no role bindings and no mounted API token). See [Upgrade v3.14 to 3.15, Step 2](./upgrade-krci-3.15.md#step-2-required-review-tekton-pipeline-security-hardening-defaults-edp-tekton).
- **The `tekton` ServiceAccount's Role was narrowed.** It loses access to `configmaps`, `codebases` (broad reads), `cdpipelines`, `stages`, `applicationsets`, and `taskruns`; those capabilities moved to the new `tekton-cd` and `tekton-security` accounts bound only to the CD and security trigger templates. Annotating a custom pipeline with `tekton` therefore does **not** restore its pre-3.15 permissions.
- **Build trigger templates pass fewer parameters.** The `gitsha` parameter is no longer passed to build PipelineRuns (GitHub and Bitbucket), and the Jira parameters (`TICKET_NAME_PATTERN`, `JIRA_ISSUE_METADATA_PAYLOAD`, `JIRA_SERVER`) are no longer passed by any provider's build template. The `push-to-jira` Task was removed entirely.
- **Status voting was consolidated.** Shipped pipelines vote on `$(tasks.fetch-repository.results.commit)` — the commit the clone actually checked out — and report the final status through a single unguarded finally task driven by `PIPELINE_STATUS: $(tasks.status)`, which also reports cancelled and timed-out runs the legacy success/failure task pair silently missed.

## Migration Checklist

### 1. Annotate every custom Pipeline with a dedicated ServiceAccount

Create a ServiceAccount per pipeline family, scoped to what the pipelines actually need, and annotate both build and review Pipelines:

```yaml title="Custom pipeline with a dedicated ServiceAccount"
apiVersion: tekton.dev/v1
kind: Pipeline
metadata:
  name: my-app-build
  annotations:
    app.edp.epam.com/service-account: my-team-pipelines
```

The annotation is inert on `0.26` (trigger templates there hardcode `tekton`), so it can be merged ahead of the upgrade. Do not skip review pipelines whose tasks call the Kubernetes API — without the annotation they run as `tekton-unprivileged` after the upgrade and fail with authorization errors.

### 2. Audit the ServiceAccount's RBAC against real task API calls

Walk every task your pipelines reference and list its Kubernetes API calls (`kubectl` invocations including `--subresource`, `tkn`, client libraries), then grant exactly those. Typical needs for build pipelines modeled on the shipped ones: `codebasebranches` get and `codebasebranches/status` get/patch (version bumping), `codebaseimagestreams` get/list/patch (image stream tags), `taskruns` list (wait-style tasks). Do not point custom pipelines at `tekton` and assume parity — its Role no longer covers `configmaps`, `cdpipelines`, `stages`, `applicationsets`, or `taskruns`.

### 3. Carry the credential channels the `tekton` ServiceAccount provided

RBAC is not the only thing the old ServiceAccount carried. Mirror the relevant channels onto the dedicated account, or image pushes fail even with perfect RBAC:

```yaml title="Dedicated ServiceAccount with the tekton SA's credential channels"
apiVersion: v1
kind: ServiceAccount
metadata:
  name: my-team-pipelines
  annotations:
    # ECR via IRSA: same role as kaniko.roleArn in the pipelines-library values
    eks.amazonaws.com/role-arn: arn:aws:iam::<ACCOUNT_ID>:role/<KANIKO_ROLE>
secrets:
  # non-ECR registries: Tekton creds-init merges this into the step's docker config
  - name: kaniko-docker-config
imagePullSecrets:
  - name: <pull-secret-if-used>
```

On EKS, also extend the IAM role's trust policy with the new ServiceAccount (`system:serviceaccount:<namespace>:my-team-pipelines`) — the annotation alone does not authenticate.

### 4. Fix the trigger template parameter contract

Audit custom build pipelines for parameters the `0.27` templates no longer pass:

- A required `gitsha` parameter (no `default`) fails every build run at admission after the upgrade with `pipelineRun missing parameters: [gitsha]`. Migrate to the shipped pattern: remove the parameter and vote on `$(tasks.fetch-repository.results.commit)` in the status tasks. Consuming the clone's `commit` result also orders the status task after the clone and skips it structurally when nothing was cloned, replacing any manual `when` guards. Review pipelines keep `gitsha` — the review templates still pass it.
- Remove or default the Jira parameters (`TICKET_NAME_PATTERN`, `JIRA_ISSUE_METADATA_PAYLOAD`, `JIRA_SERVER`) and drop any `push-to-jira` task references — the Task no longer exists.

Both fixes are safe on `0.26`: Tekton explicitly ignores extra PipelineRun parameters, so templates still passing the old values do no harm.

### 5. Sequence the cutover

The two mechanisms activate at different times, and mixing them up breaks pipelines **before** the upgrade:

- `serviceAccountName` pinned in your **own** TriggerTemplates, CronJobs, or tasks that create PipelineRuns switches the moment your chart deploys — those ServiceAccounts and their RBAC must be complete on day one.
- The Pipeline **annotation** waits for the `0.27` interceptor — webhook-triggered build/review runs stay on `tekton` until the platform upgrade completes.

Consequently, if you move RoleBindings from `tekton` to the new account (for example a namespace-admin binding used by e2e tasks), keep `tekton` as a second subject until the upgrade lands, then remove it. Dropping it early revokes access from runs that still execute as `tekton`.

## Verification

- `CodebaseBranch.spec.pipelines.{build,review}` is populated for every codebase using custom pipelines — the interceptor resolves the annotation through that map, and an empty map silently downgrades runs to `tekton-unprivileged`.
- After the upgrade, a webhook-triggered run shows the dedicated account in `spec.taskRunTemplate.serviceAccountName`.
- A build run votes the commit status on the cloned commit and reports a final status even when cancelled.

## Related Articles

- [Upgrade KubeRocketCI v3.14 to 3.15](./upgrade-krci-3.15.md)
- [Create and Use Custom Tekton Pipelines](../../use-cases/custom-pipelines-flow.md)
- [Deploy Application With Custom Build Tool/Framework](../../use-cases/tekton-custom-pipelines.md)
