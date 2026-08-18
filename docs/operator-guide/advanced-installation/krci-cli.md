---
title: "krci CLI"
description: "Install and authenticate the krci CLI, a terminal client for the KubeRocketCI Portal that also gives AI agents a tool surface to inspect the platform."
sidebar_label: "krci CLI"
---
<!-- markdownlint-disable MD025 -->

# krci CLI

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/docs/operator-guide/advanced-installation/krci-cli" />
</head>

The [krci CLI](https://github.com/KubeRocketCI/cli) is a terminal client for the KubeRocketCI Portal's API. It exposes the same
projects, deployments, environments, and security findings the Portal shows in the browser, as
structured output a script can consume. Because it is a plain terminal command, the same invocation also runs
unchanged inside a Tekton task, a GitLab CI job, a cron schedule, or the shell session of an AI coding
agent such as Claude Code, without any custom API client or protocol on top of it.

This page covers installing the CLI and authenticating it against your Portal. For the full list of
commands, run `krci --help` or `krci <command> --help` after installing; the command groups are also
summarized below.

## Prerequisites

The CLI itself has no dependency beyond your platform, it talks only to the Portal's API, never
directly to the Kubernetes API server. Before installing it, make sure the following are already in
place:

- A running [KubeRocketCI](../install-kuberocketci.md) instance.
- An OIDC provider integrated with the platform, such as [Keycloak](../auth/keycloak.md).
- A dedicated public [OIDC client](../auth/krci-cli-client-for-keycloak.md) for the CLI, registered in that provider.

## Install

Install via Homebrew:

```bash
brew tap kuberocketci/tap
brew install krci
```

Alternatively, download a prebuilt binary for your platform from the
[releases page](https://github.com/KubeRocketCI/cli/releases) and place it on your `PATH`.

## Authenticate

The CLI signs in through the same OpenID Connect provider your Portal already uses, there is no
separate credential to create or manage:

```bash
krci auth login --portal-url https://<your-portal-domain>
```

This opens a browser for a standard OIDC login. Once it redirects back, the CLI stores the session
locally, and every other command reuses it. Check the session at any time with:

```bash
krci auth status
```

or clear it with `krci auth logout`.

:::info
  `krci auth login` fails until the OIDC client from [Prerequisites](#prerequisites) is registered in
  your identity provider.
:::

## Command groups

Every command group follows the same shape, `list` and `get`, sometimes a third verb, so learning one
group carries over to the next:

| Group | Purpose |
|:-|:-|
| `auth` | Log in, check session status, log out. |
| `project` | Inspect registered codebases (applications, libraries, autotests, infrastructures). |
| `deployment` | Inspect CD pipelines (CDPipelines) and their deployed state. |
| `env` | Inspect environments (Stages): health, sync status, quality gates. |
| `pipelinerun` | Inspect pipeline run history, or start one with `pipelinerun start`. |
| `sca` | Inspect Dependency-Track projects, components, and vulnerability findings. |
| `sonar` | Inspect SonarQube projects, quality gates, and issues. |
| `version` | Print the CLI's own version. |

Almost every command in the CLI is read-only. The one exception is `krci pipelinerun start`, which
triggers a Tekton pipeline by name, everything else (creating a codebase, editing a CDPipeline, and
similar) remains the Portal's job.

Every data-producing command accepts `-o json` in addition to the default table, so the same output a
person reads at a glance is also what a script or an AI agent can parse without a separate parser.

## Why use it alongside the Portal

The Portal and the CLI cover different parts of the same job: the Portal is the better interface for
browsing, comparing, and approving changes, while the CLI is the better interface for scripting a
recurring check, gating a pipeline on live platform state, or handing a question to an AI agent with
shell access. See [krci CLI: Daily Platform Ops from Terminal to AI Agents](/blog/krci-cli-daily-use)
for a walkthrough of that last case.

## Related Articles

* [Install KubeRocketCI](../install-kuberocketci.md)
* [Install Keycloak](../auth/keycloak.md)
* [KubeRocketCI CLI Keycloak Client](../auth/krci-cli-client-for-keycloak.md)
* [krci CLI: Daily Platform Ops from Terminal to AI Agents](/blog/krci-cli-daily-use)
