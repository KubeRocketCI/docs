---
title: "Upgrade KubeRocketCI v3.16 to 3.17"
description: "Upgrade KubeRocketCI 3.16 to 3.17: the default Go build image moves to golang:1.27-trixie, so check the go directive of your Go codebases."
sidebar_label: "v3.16 to 3.17"
---
<!-- markdownlint-disable MD025 -->
<!--
Adding a 3.17 change to this guide:
- Add a `## Step N. (Classification) Title` step. Order steps by urgency: breaking changes first, after Step 1.
- Renumber steps contiguously. Step 1 stays Verify Prerequisites; the last three stay Breaking Changes and Deprecations, Upgrade, Post-Upgrade Verification.
- Update every `#step-N-...` anchor after renumbering.
- Breaking change: add a bullet to Breaking Changes and Deprecations linking to its step.
- Required step: add a Post-Upgrade Verification item linking to its step.
- Keep the front matter `description` within 160 characters: name a new topic only if it outranks one already listed.
- Run `npm run build` and check the log: broken anchors are reported as warnings, not errors.
- Link to this guide from other pages by page URL, not by step anchor.
-->

# Upgrade KubeRocketCI v3.16 to 3.17

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/docs/operator-guide/upgrade/upgrade-krci-3.17" />
</head>

Follow these steps to upgrade KubeRocketCI from version 3.16 to 3.17.

:::important
Before upgrading, back up the KubeRocketCI environment and review every `(Required)` step and the [Breaking Changes and Deprecations](#step-4-informational-breaking-changes-and-deprecations) summary.
:::

`<namespace>` is the platform namespace (`krci` in the installation guides). Values are `edp-install` values; with [edp-cluster-add-ons](https://github.com/epam/edp-cluster-add-ons), nest them under `edp-install:` in `clusters/core/addons/kuberocketci/values.yaml`.

## Step 1. (Required) Verify Prerequisites

Confirm that the platform runs **3.16.x**:

```bash title="Check the installed platform version"
kubectl get configmap krci-config -n <namespace> -o jsonpath='{.data.edp_version}'
```

## Step 2. (Required if applicable) Check the Go Version of Your Go Codebases (edp-tekton)

The library Go review and build pipelines and the `golang` task now run in `golang:1.27-trixie` by default; in 3.16, the image was `golang:1.25-trixie`. The official `golang` images set `GOTOOLCHAIN=local`, so Go never downloads a newer toolchain: a codebase whose `go.mod` has a `go` directive above 1.27, or a `toolchain` directive above 1.27, fails at the first Go step with an error such as `go.mod requires go >= 1.28 (running go 1.27.x; GOTOOLCHAIN=local)`. Codebases that build with Go 1.25 or later and have no such directive need no action. The platform's own Go version is not affected.

Before upgrading, list the `go` directives of your Go codebases, for example in the checkout of each repository:

```bash title="Show the Go version that a codebase requires"
grep -E '^(go|toolchain) ' go.mod
```

If a codebase requires a newer Go version than 1.27, either lower its `go` directive or use a different image. To use a different image, copy the library pipelines to a custom Tekton library repository and set the `image` parameter default there, as described in [Deliver Custom Tekton Pipelines to the Cluster](../../use-cases/custom-pipelines-flow.md#deliver-custom-tekton-pipelines-to-the-cluster).

:::note
In an air-gapped cluster or with a private registry, mirror `golang:1.27-trixie` before upgrading. The pipelines pull it from the registry that `edp-tekton` resolves for all library images.
:::

## Step 3. (Informational) Pipeline Behavior Changes (edp-tekton)

- **Default Go image.** `golang:1.27-trixie` replaces `golang:1.25-trixie` in all Go review and build pipelines (GitHub, GitLab, Gerrit, and Bitbucket) and in the `golang` task — see [Step 2](#step-2-required-if-applicable-check-the-go-version-of-your-go-codebases-edp-tekton).

## Step 4. (Informational) Breaking Changes and Deprecations

- Go codebases that require a Go version above 1.27 fail to build with the default image, because `GOTOOLCHAIN=local` — see [Step 2](#step-2-required-if-applicable-check-the-go-version-of-your-go-codebases-edp-tekton).

## Step 5. Upgrade

<!-- The upgrade commands below follow the 3.16 guide; set the final chart version when 3.17.0 is released. -->

For environments managed with [edp-cluster-add-ons](https://github.com/epam/edp-cluster-add-ons) and Argo CD, update the `edp-install` chart version in `clusters/core/addons/kuberocketci/Chart.yaml` and sync the `in-cluster-kuberocketci` Application. For environments managed directly with Helm:

```bash title="Run the Helm upgrade"
helm repo update

# Confirm the target chart version is available
helm search repo epamedp/edp-install --versions | grep 3.17.0

# Preview changes against your values
helm diff upgrade <release-name> epamedp/edp-install \
  --version 3.17.0 \
  -f values.yaml \
  -n <namespace>

# Run the upgrade
helm upgrade --install <release-name> epamedp/edp-install \
  --version 3.17.0 \
  -f values.yaml \
  -n <namespace> \
  --timeout 10m \
  --wait
```

Pass your values file as shown, not `--reuse-values`, so that Helm renders the 3.17 templates with the 3.17 chart defaults. Allow 3-5 minutes for all pods to reach the Running state.

## Step 6. Post-Upgrade Verification

```bash title="Verify pods"
# All pods should return to Running
kubectl get pods -n <namespace>

# The Go pipelines use the new default image: the command prints golang:1.27-trixie
kubectl get pipeline github-go-gin-app-review -n <namespace> \
  -o jsonpath='{.spec.params[?(@.name=="image")].default}{"\n"}'
```

Replace `github-go-gin-app-review` with a Go pipeline of your Git provider that exists in the cluster; the printed image is prefixed with your registry.

- [ ] (If you have Go codebases) a review and a build PipelineRun of a Go codebase pass (see [Step 2](#step-2-required-if-applicable-check-the-go-version-of-your-go-codebases-edp-tekton))
