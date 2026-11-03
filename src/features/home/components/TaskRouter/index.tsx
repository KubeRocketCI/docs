import type { ComponentType } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import TuneIcon from '@mui/icons-material/Tune';
import CodeIcon from '@mui/icons-material/Code';
import ExploreIcon from '@mui/icons-material/Explore';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useLatestDocsLinks } from '../../links';
import { SectionHeading } from '../SectionHeading';
import styles from './styles.module.css';

interface RouteLink {
  label: string;
  to: string;
}

interface RouteGroup {
  id: string;
  title: string;
  purpose: string;
  Icon: ComponentType<{ className?: string }>;
  links: RouteLink[];
}

const buildGroups = (links: ReturnType<typeof useLatestDocsLinks>, demoMailTo: string): RouteGroup[] => {
  const { docs } = links;
  return [
    {
      id: 'install',
      title: 'Install & upgrade',
      purpose: 'Set up the platform on your cluster and keep it current.',
      Icon: RocketLaunchIcon,
      links: [
        { label: 'Installation overview', to: links.installOverview },
        { label: 'Install KubeRocketCI', to: docs('operator-guide/install-kuberocketci') },
        { label: `Upgrade to ${links.releaseName}`, to: links.upgradeGuide },
        { label: 'Supported versions', to: links.supportedVersions },
      ],
    },
    {
      id: 'operate',
      title: 'Operate',
      purpose: 'Configure, secure, observe, and troubleshoot a running platform.',
      Icon: TuneIcon,
      links: [
        { label: 'Add-ons overview', to: docs('operator-guide/add-ons-overview') },
        { label: 'Authentication and SSO', to: docs('operator-guide/auth/platform-auth-model') },
        { label: 'Security and quality gates', to: docs('operator-guide/devsecops/overview') },
        { label: 'Logs and metrics', to: docs('operator-guide/monitoring-and-observability/multitenant-logging') },
        {
          label: 'Test reporting with ReportPortal',
          to: docs('operator-guide/project-management-and-reporting/install-reportportal'),
        },
        { label: 'Troubleshooting', to: docs('operator-guide/troubleshooting/overview') },
      ],
    },
    {
      id: 'build',
      title: 'Build and deploy apps',
      purpose: 'Onboard applications and ship them through pipelines.',
      Icon: CodeIcon,
      links: [
        { label: 'Quick Start', to: links.quickStart },
        { label: 'Add an application', to: docs('user-guide/add-application') },
        { label: 'Create a deployment flow', to: docs('user-guide/add-cd-pipeline') },
        { label: 'Use cases', to: docs('use-cases') },
      ],
    },
    {
      id: 'evaluate',
      title: 'Evaluate',
      purpose: 'See what the platform covers and how it compares.',
      Icon: ExploreIcon,
      links: [
        { label: 'About KubeRocketCI', to: docs('about-platform') },
        { label: 'KubeRocketCI vs GitLab CI', to: '/blog/kuberocketci-vs-gitlab-ci' },
        { label: 'FAQ', to: '/faq/general-questions' },
        { label: 'Request a demo (email)', to: demoMailTo },
      ],
    },
  ];
};

export const TaskRouter = () => {
  const { siteConfig } = useDocusaurusContext();
  const groups = buildGroups(useLatestDocsLinks(), siteConfig.themeConfig.mailTo as string);

  return (
    <section className={styles.section} aria-labelledby="task-router-heading">
      <div className="container">
        <SectionHeading id="task-router-heading" className={styles.heading}>
          Documentation by task
        </SectionHeading>
        <ul className={styles.rows}>
          {groups.map(({ id, title, purpose, Icon, links }) => (
            <li key={id} className={styles.row}>
              <div className={styles.groupInfo}>
                <span className={styles.iconWrap} aria-hidden="true">
                  <Icon className={styles.icon} />
                </span>
                <div>
                  <h3 id={`task-${id}`} className={styles.groupTitle}>
                    {title}
                  </h3>
                  <p className={styles.purpose}>{purpose}</p>
                </div>
              </div>
              <ul className={styles.links} aria-labelledby={`task-${id}`}>
                {links.map(({ label, to }) => {
                  const content = (
                    <>
                      <ArrowForwardIcon className={styles.arrow} aria-hidden="true" />
                      {label}
                    </>
                  );
                  return (
                    <li key={to}>
                      {/* Plain anchor: Link opens mailto: in a new blank tab. */}
                      {to.startsWith('mailto:') ? (
                        <a className={styles.link} href={to}>
                          {content}
                        </a>
                      ) : (
                        <Link className={styles.link} to={to}>
                          {content}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
