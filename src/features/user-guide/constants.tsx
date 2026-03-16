import { UserGuideItem } from './types';

export const userGuideList: UserGuideItem[] = [
  {
    title: 'Overview',
    icon: '/img/panels-top-left.svg',
    description: (
      <>
        The main dashboard of the KubeRocketCI portal: widgets, quick links, and navigation to the main platform
        sections.
      </>
    ),
    docPath: 'user-guide/overview',
  },
  {
    title: 'CI/CD Pipelines',
    icon: '/img/activity.svg',
    description: (
      <>
        Manage build, review, and deployment pipelines. View pipeline runs, history, and pipeline details in one
        place.
      </>
    ),
    docPath: 'user-guide/pipelines',
  },
  {
    title: 'Projects',
    icon: '/img/box.svg',
    description: (
      <>
        Applications, libraries, autotests, and infrastructures. Create and manage codebases and their
        onboarding strategies.
      </>
    ),
    docPath: 'user-guide/components',
  },
  {
    title: 'Deployments',
    icon: '/img/cloud-upload.svg',
    description: (
      <>
        Deployment flows, environments, and GitOps. Configure how applications are promoted and deployed to
        target environments.
      </>
    ),
    docPath: 'user-guide/add-cd-pipeline',
  },
  {
    title: 'Observability',
    icon: '/img/bot.svg',
    description: (
      <>
        Monitoring, logging, and visibility into pipeline runs, application statuses, and platform metrics.
      </>
    ),
    docPath: 'user-guide/observability',
  },
  {
    title: 'Security',
    icon: '/img/shield.svg',
    description: (
      <>
        Security settings, access control, secrets management, and protected resources in the platform.
      </>
    ),
    docPath: 'user-guide/security',
  },
  {
    title: 'Configuration',
    icon: '/img/settings.svg',
    description: (
      <>
        Integrations and features: container registries, Git servers, clusters, quick links, and other
        platform settings.
      </>
    ),
    docPath: 'user-guide/configuration-overview',
  },
];
