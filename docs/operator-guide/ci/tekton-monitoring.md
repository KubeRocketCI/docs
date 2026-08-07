---
title: "Tekton Pipeline Monitoring with Prometheus and Grafana"
description: "Monitor Tekton pipelines in KubeRocketCI using the tekton-monitoring add-on, which ships Prometheus ServiceMonitors and six ready-made Grafana dashboards."
sidebar_label: "Pipeline Monitoring"
---
<!-- markdownlint-disable MD025 -->

# Tekton Pipeline Monitoring with Prometheus and Grafana

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/docs/operator-guide/ci/tekton-monitoring" />
</head>

Tekton already exposes Prometheus metrics for pipeline runs, task runs, webhooks and its own
control plane. This page explains how to collect them and read them in Grafana using the
`tekton-monitoring` add-on, which ships the scrape configuration and the dashboards together so
neither has to be assembled by hand.

## Prerequisites

Ensure the following requirements are met before moving ahead:

- The [tekton](https://github.com/epam/edp-cluster-add-ons/tree/main/clusters/core/addons/tekton)
  add-on is deployed, so Tekton Pipelines, Triggers and Results are running.
- The **prometheus-operator** custom resource definitions are installed, since the add-on creates
  `ServiceMonitor` resources.
- [kube-prometheus-stack](https://prometheus-community.github.io/helm-charts) is installed with
  its Grafana sidecar enabled. The sidecar discovers dashboards in every namespace, so the
  add-on can ship them from `tekton-pipelines`.
- The legacy integration is not in use. If Tekton metrics were configured before this add-on was
  introduced, follow [Migrate From the Legacy Integration](#migrate-from-the-legacy-integration)
  first.

## Set the Prometheus Release Label

Prometheus picks up `ServiceMonitor` resources by release label: `kube-prometheus-stack` sets
`serviceMonitorSelectorNilUsesHelmValues: true` by default, which limits Prometheus to monitors
carrying its own release label. Set this value first, so the monitors are collected as soon as
the add-on is deployed.

Run `helm list -n monitoring` to get the release name of your `kube-prometheus-stack`
installation, then set it in `clusters/core/addons/tekton-monitoring/values.yaml`:

```yaml values.yaml
serviceMonitor:
  additionalLabels:
    release: kube-prometheus
```

If your Prometheus sets `serviceMonitorSelectorNilUsesHelmValues: false`, the label is not
required and the value can be cleared.

## Enable the Add-On

The add-on is disabled by default. Enable it in `clusters/core/apps/values.yaml`:

```yaml values.yaml
tekton-monitoring:
  createNamespace: false
  enable: true
  namespace: tekton-pipelines
```

Commit the change and let Argo CD synchronize the `tekton-monitoring` application. Because the
add-on deploys into the namespace owned by the `tekton` add-on, it never creates that namespace
itself.

Once the application is synchronized, the Tekton targets appear under **Status → Targets** in
Prometheus, and the six dashboards appear in Grafana under titles starting with `Tekton /`.

## What the Add-On Deploys

### Metrics Collection

Six `ServiceMonitor` resources point Prometheus at the endpoints Tekton already exposes:

| ServiceMonitor | Component | What it provides |
|:-|:-|:-|
| `tekton-pipelines-controller` | Pipelines controller | Pipeline and task run counts, durations, throttling, reconciler and workqueue health |
| `tekton-events-controller` | Events controller | CloudEvents emission |
| `tekton-triggers-controller` | Triggers controller | Reconciliation of `EventListener` and `Trigger` resources |
| `tekton-results-api` | Results API | gRPC server metrics |
| `tekton-results-watcher` | Results watcher | Archival and pruning of completed runs |
| `tekton-eventlisteners` | All EventListeners | Webhook volume, latency and triggered resources |

The EventListener monitor is deliberately cluster-wide: KubeRocketCI creates an `EventListener`
in each delivery namespace rather than in `tekton-pipelines`, and every one of them is labelled
by the EventListener controller, so a single monitor covers them all.

### Dashboards

Six dashboards are delivered as ConfigMaps and picked up by the Grafana sidecar:

| Dashboard | Answers |
|:-|:-|
| Pipeline Overview | How many pipelines ran, how many failed, and how long they took |
| Task Analytics | Which tasks are slowest and which fail most often |
| Queue and Scheduling | Whether runs are waiting on quota, node capacity or resolution |
| EventListener Traffic | Whether webhooks arrive and convert into pipeline runs |
| Platform Health | Whether the Tekton control plane itself is healthy |
| Resource Consumption | How much CPU and memory pipelines consume |

## Required Tekton Metrics Settings

Two panels depend on metric labels that Tekton omits by default. The `tekton` add-on already sets
both keys in its `config-observability` ConfigMap, so a standard installation needs no action.
Re-apply them if that manifest is re-vendored from an upstream Tekton release, or if Tekton was
installed from another source:

| Key | Value | Without it |
|:-|:-|:-|
| `metrics.count.enable-reason` | `true` | The `reason` label is absent, so **Timeouts** reads `0` permanently and **Failure reasons** collapses into a single unnamed slice |
| `metrics.running-pipelinerun.level` | `pipeline` | The running-pipelines gauge has no `pipeline` label, so **Running now** is empty once a pipeline filter is applied |

Both keys belong in the `data` block of the ConfigMap. The `_example` block lists the same keys
but is inert documentation, so values placed there have no effect.

## Reading the Dashboards

Two conventions are worth knowing before drawing conclusions from a panel:

- **Prefer p50 and p95 over the average.** A Tekton task that fails usually hangs until its
  timeout instead of failing fast, so a handful of failed runs pull the mean far above what a
  healthy run costs. A large gap between **Avg** and **p50** means the task hangs when it fails,
  not that it is slow.
- **Counts cover completed runs.** A run is counted when it finishes, so a pipeline still in
  flight appears under **Running now** rather than in the range totals.

## Migrate From the Legacy Integration

Earlier releases integrated Tekton metrics either by applying a single `ServiceMonitor` named
`tekton-overview` by hand and importing a community Grafana dashboard, or by setting
`edp-tekton.grafana.enabled` in the `edp-install` chart. Both approaches covered only the
pipelines controller and a single dashboard. The add-on replaces them.

:::warning
Do not run the add-on and the legacy integration at the same time. The `tekton-overview`
ServiceMonitor and the add-on's `tekton-pipelines-controller` ServiceMonitor select the **same**
Kubernetes Service, so Prometheus scrapes it twice and every panel that sums across targets
roughly doubles.
:::

To migrate:

1. Set `edp-tekton.grafana.enabled` to `false`, or remove the value, and apply the change.
2. Delete a hand-applied ServiceMonitor if one exists:
   `kubectl delete servicemonitor tekton-overview -n tekton-pipelines`.
3. Remove any manually imported Tekton dashboard from Grafana to avoid duplicates.
4. Enable the add-on as described above.

## Troubleshooting

| Symptom | Cause |
|:-|:-|
| All panels empty | The `release` label does not match the `kube-prometheus-stack` release name |
| Targets missing in Prometheus | The prometheus-operator CRDs are absent, or the add-on has not synchronized |
| Dashboards missing in Grafana | The Grafana sidecar is disabled or not searching all namespaces |
| **Timeouts** always `0` | `metrics.count.enable-reason` is not enabled |
| **Running now** empty when filtering by pipeline | `metrics.running-pipelinerun.level` is not set to `pipeline` |
| Counts roughly doubled | The legacy integration is still enabled alongside the add-on |

## Related Articles

* [Install Tekton](../install-tekton.md)
* [Add-Ons Overview](../add-ons-overview.md)
* [Install KubeRocketCI](../install-kuberocketci.md)
