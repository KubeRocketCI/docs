---
title: "Add Custom Tekton Triggers"
sidebar_label: Custom Tekton Triggers
description: "Run custom Tekton pipelines on webhook events: attach labeled Triggers to the platform EventListener or run a dedicated EventListener with a manual webhook."
---

# Add Custom Tekton Triggers

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/docs/user-guide/customize-ci-triggers" />
</head>

To run a custom pipeline on a webhook event, you have two options: attach a labeled
Tekton Trigger to the platform-managed EventListener of your Git server, or run a
dedicated EventListener with its own webhook. The first option needs no webhook
management at all; the second gives you full control over which events your Git provider
sends.

## Choose an Approach

| | Option 1: Platform EventListener | Option 2: Dedicated EventListener |
|---|---|---|
| Webhook | Managed by the platform — nothing to create | Created manually in the Git provider |
| Available events | Only the event types the platform webhook subscribes to (merge request, comment, push) | Any events the Git provider offers — you pick them in the webhook |
| Setup effort | Label one Trigger | EventListener + Ingress + webhook |
| Isolation | Shares the Git server's EventListener | Fully separate pipeline entry point |

Pick option 1 when your pipeline reacts to the standard code-review events. Pick option 2
when you need other event types (tags, releases, pipeline events) or want your custom CI
fully isolated from the platform flow.

## Option 1: Attach to the Platform EventListener

:::note
Declarative trigger registration requires codebase-operator v2.35.0 or later. On earlier
versions, custom Triggers must be added to the EventListener `spec.triggers` list
manually — see [Legacy approach](#legacy-approach).
:::

For every [Git server](add-git-server.md), KubeRocketCI creates an EventListener named
`edp-<gitserver>` that receives all webhook events for that VCS. The EventListener serves
the union of two sources:

* the built-in `spec.triggers` list — the stock review and build triggers;
* any Trigger in the namespace matching `spec.labelSelector` — your custom triggers.

```yaml
# Managed by codebase-operator — shown for reference, do not edit
spec:
  labelSelector:
    matchLabels:
      app.edp.epam.com/gitServer: gitlab   # value = GitServer resource name
  triggers:
    - triggerRef: gitlab-build
    - triggerRef: gitlab-review
```

The label selector is reconciled by the operator: existing EventListeners gain it
automatically on operator upgrade, and it is restored if removed.

### Create a Custom Trigger

The example below runs a pipeline when a Merge Request comment contains `/deploy-preview`
(GitLab). Adapt the interceptors to your VCS and event type.

```yaml
apiVersion: triggers.tekton.dev/v1beta1
kind: Trigger
metadata:
  name: gitlab-deploy-preview
  labels:
    app.edp.epam.com/gitServer: gitlab # registers this Trigger with EventListener edp-gitlab
spec:
  interceptors:
    - ref:
        name: "gitlab"
        kind: ClusterInterceptor
      params:
        - name: "secretRef"
          value:
            secretName: ci-gitlab
            secretKey: secretString
        - name: "eventTypes"
          value: ["Note Hook"]
    - ref:
        name: "cel"
        kind: ClusterInterceptor
      params:
        - name: "filter"
          value: "body.object_attributes.note.startsWith('/deploy-preview')"
  bindings:
    - ref: gitlab-binding-preview
  template:
    ref: gitlab-deploy-preview-template
```

The label **value must be the GitServer resource name** (`kubectl get gitservers`), which
matches the provider name on default installations.

### Verify the Trigger Is Registered

The EventListener evaluates the same label query on every incoming event, so you can
preview exactly what it will serve:

```bash
kubectl get triggers -l app.edp.epam.com/gitServer=gitlab -n <namespace>
```

If your Trigger is listed, it is registered. After sending a matching event, confirm the
fired pipeline:

```bash
kubectl get pipelineruns -l triggers.tekton.dev/trigger=gitlab-deploy-preview -n <namespace>
```

### View the Label Selector in the Portal

The same information is available in the KubeRocketCI portal, without `kubectl`:

* On **Configuration** -> **Webhook Triggers** -> **Event Listeners**, the list has a
  **Label Selector** column that renders each EventListener's `spec.labelSelector.matchLabels`
  as `key=value` badges.
* Opening an EventListener's details page shows a **Triggers configured** count for the
  explicit `spec.triggers` list, plus a **+ N matched via label selector** line when Triggers
  are also selected by label. The topology diagram draws label-matched Triggers with a dashed
  edge and a **via label** badge (hover it to see the matched `key=value` terms); a Trigger
  that is both listed and label-matched is flagged with a red **fires twice** badge, since the
  EventListener serves the union of both sources and would trigger two PipelineRuns per event.

## Option 2: Run a Dedicated EventListener

A dedicated EventListener runs alongside the platform one and is not touched by the
operator, so you own its full lifecycle: the listener, its exposure, and the webhook.

### Create the EventListener

Use your own label key so the listener serves only your triggers:

```yaml
apiVersion: triggers.tekton.dev/v1beta1
kind: EventListener
metadata:
  name: my-custom-el
spec:
  serviceAccountName: tekton-triggers-sa-<namespace>
  labelSelector:
    matchLabels:
      app.edp.epam.com/eventlistener: my-custom-el
```

Label your Triggers with the same key/value (`app.edp.epam.com/eventlistener: my-custom-el`)
to register them — same mechanism as option 1, but against your own listener.

### Expose the EventListener

Tekton creates a Service named `el-my-custom-el` on port `8080`. Publish it with an
Ingress (or Route on OpenShift):

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: my-custom-el
spec:
  rules:
    - host: el-my-custom-el.<dns-wildcard>
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: el-my-custom-el
                port:
                  number: 8080
```

### Create the Webhook Manually

In your Git provider, add a webhook on the repository (or group/organization):

1. **URL**: the Ingress host, e.g. `https://el-my-custom-el.<dns-wildcard>`.
2. **Secret token**: the value your Trigger's interceptor validates (for the platform
   secrets: `secretString` key of the `ci-gitlab` / `ci-github` secret, or a secret you
   create yourself).
3. **Events**: select exactly the event types your pipeline needs — this is the main
   advantage of a dedicated listener: tag pushes, releases, or any other events the
   platform webhook does not subscribe to.

For GitLab: **Settings → Webhooks**; for GitHub: **Settings → Webhooks → Add webhook**
(content type `application/json`).

### Verify

Send a matching event (or use the provider's webhook test button) and check the listener
pod and the fired pipeline:

```bash
kubectl logs deploy/el-my-custom-el -n <namespace>
kubectl get pipelineruns -l triggers.tekton.dev/eventlistener=my-custom-el -n <namespace>
```

## Legacy Approach

Before declarative registration, custom Triggers were added by patching the EventListener
`spec.triggers` list directly. This still works — the operator never modifies that list —
but patched entries are lost if the EventListener is recreated. Prefer labels for anything
permanent.

:::warning
Do not combine both mechanisms for the same Trigger. A Trigger that is listed in
`spec.triggers` **and** carries the label is served twice, producing two PipelineRuns per
event.
:::

## Related Articles

* [KubeRocketCI: Tekton Overview](tekton-pipelines.md)
* [Add Git Server](add-git-server.md)
* [Annotations and Labels](../developer-guide/annotations-and-labels.md)
