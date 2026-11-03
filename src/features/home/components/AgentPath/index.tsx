import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { useLatestDocsLinks } from '../../links';
import { ActionLinks } from '../ActionLinks';
import { PipelineRail } from '../PipelineRail';
import { SectionHeading } from '../SectionHeading';
import { TerminalBlock, type TerminalCommand } from '../TerminalBlock';
import styles from './styles.module.css';

// Command, flags, and the {schemaVersion, data} JSON envelope verified against KubeRocketCI/cli:
// pkg/cmd/sonar/gate, internal/portal/sonar.go, pkg/cmd/internal/render/envelope.go. Values are sample data.
const ERROR = <span className={styles.gateError}>&quot;ERROR&quot;</span>;

const AGENT_COMMANDS: TerminalCommand[] = [
  {
    command: "krci sonar gate my-app --pr 42 -o json | jq '.data.projectStatus'",
    output: [
      '{',
      <>
        {'  "status": '}
        {ERROR},
      </>,
      '  "conditions": [',
      '    {',
      '      "metricKey": "new_coverage",',
      '      "comparator": "LT",',
      '      "errorThreshold": "80",',
      '      "actualValue": "64.2",',
      <>
        {'      "status": '}
        {ERROR}
      </>,
      '    }',
      '  ]',
      '}',
    ],
  },
];

export const AgentPath = () => {
  const { docs } = useLatestDocsLinks();
  // llms.txt is emitted by docusaurus-plugin-llms at build time; it exists only in built output.
  const llmsTxt = useBaseUrl('/llms.txt');

  return (
    <section className={styles.section} aria-labelledby="agent-path-heading">
      <div className={clsx('container', styles.inner)}>
        <div className={styles.copyColumn}>
          <SectionHeading id="agent-path-heading" className={styles.heading}>
            One golden path for engineers and AI agents
          </SectionHeading>
          <p className={styles.lead}>
            Agent-authored pull requests run the same review pipeline, quality gates, and RBAC as your engineers&apos;
            changes. Agents read the results through the krci CLI as JSON.
          </p>
          <PipelineRail />
          <ActionLinks
            links={[
              { label: 'krci CLI docs', to: docs('operator-guide/advanced-installation/krci-cli') },
              { label: 'Daily ops with AI agents', to: '/blog/krci-cli-daily-use' },
              { label: 'llms.txt', to: llmsTxt, native: true },
            ]}
          />
        </div>

        <TerminalBlock
          commands={AGENT_COMMANDS}
          comment="the same gate result a human pull request gets"
          label="krci CLI quality gate example with JSON output"
        />
      </div>
    </section>
  );
};
