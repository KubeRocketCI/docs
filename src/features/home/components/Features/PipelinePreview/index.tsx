import CommitIcon from '@mui/icons-material/Commit';
import BuildIcon from '@mui/icons-material/Build';
import ScienceIcon from '@mui/icons-material/Science';
import ShieldIcon from '@mui/icons-material/Shield';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import styles from './styles.module.css';

// Generic CI/CD stages — always accurate regardless of toolset.
const STAGES = [
  { Icon: CommitIcon, label: 'Commit' },
  { Icon: BuildIcon, label: 'Build' },
  { Icon: ScienceIcon, label: 'Test' },
  { Icon: ShieldIcon, label: 'Scan' },
  { Icon: RocketLaunchIcon, label: 'Deploy' },
  { Icon: QueryStatsIcon, label: 'Monitor' },
];

// Real KubeRocketCI pipeline toolchain (per docs/about-platform + site config).
const TOOLS = ['Tekton', 'Kaniko', 'SonarQube', 'Nexus', 'Argo CD'];

export const PipelinePreview = () => {
  return (
    <div className={styles.preview} aria-hidden="true">
      <div className={styles.pipeline}>
        <span className={styles.rail} />
        <span className={styles.spark} />
        {STAGES.map(({ Icon, label }) => (
          <span key={label} className={styles.node}>
            <span className={styles.nodeIcon}>
              <Icon className={styles.icon} />
            </span>
            <span className={styles.nodeLabel}>{label}</span>
          </span>
        ))}
      </div>

      <div className={styles.tools}>
        <span className={styles.toolsLabel}>Built on</span>
        {TOOLS.map(tool => (
          <span key={tool} className={styles.toolChip}>
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
};
