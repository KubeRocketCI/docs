import clsx from 'clsx';
import { TESTBED_DURATION, useLatestDocsLinks } from '../../links';
import { ActionLinks } from '../ActionLinks';
import { SectionHeading } from '../SectionHeading';
import { TerminalBlock } from '../TerminalBlock';
import styles from './styles.module.css';

const TESTBED_COMMANDS = [
  'git clone https://github.com/KubeRocketCI/try-kuberocketci',
  'cd try-kuberocketci',
  'make testbed',
];

// Requirements follow blog/2026-06-06/try-kuberocketci-locally.md.
export const GetStarted = () => {
  const { quickStart } = useLatestDocsLinks();

  return (
    <section className={styles.band} aria-labelledby="try-locally-heading">
      <div className={clsx('container', styles.inner)}>
        <div className={styles.copyColumn}>
          <SectionHeading id="try-locally-heading" className={styles.heading}>
            Try the whole platform locally
          </SectionHeading>
          <p className={styles.lead}>
            Run the full platform on a local kind cluster with three commands: KubeRocketCI Portal, Tekton, Argo CD,
            SonarQube, self-hosted GitLab, and Prometheus with Grafana. No cloud account needed.
          </p>
          <h3 className={styles.requirementsHeading}>What you need</h3>
          <ul className={styles.requirements}>
            <li>Docker Desktop with 12&nbsp;GB of RAM for the full stack (8&nbsp;GB runs the core only)</li>
            <li>kind, Helm, kubectl, and make</li>
            <li>macOS (Apple Silicon or Intel), Linux, or Windows with WSL2</li>
          </ul>
          <ActionLinks
            tone="inverse"
            links={[
              { label: 'Read the walkthrough', to: '/blog/try-kuberocketci-locally' },
              { label: 'try-kuberocketci on GitHub', to: 'https://github.com/KubeRocketCI/try-kuberocketci' },
              { label: 'Install on your own cluster', to: quickStart },
            ]}
          />
        </div>

        <TerminalBlock
          commands={TESTBED_COMMANDS}
          comment={`full stack ready in ${TESTBED_DURATION}`}
          label="Commands to start the local testbed"
        />
      </div>
    </section>
  );
};
