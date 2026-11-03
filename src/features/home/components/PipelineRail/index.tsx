import { useEffect, useRef, useState, type CSSProperties } from 'react';
import RateReviewIcon from '@mui/icons-material/RateReview';
import BuildIcon from '@mui/icons-material/Build';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import shared from '../../shared.module.css';
import styles from './styles.module.css';

// Stage-to-tool mapping follows docs/about-platform.
const STAGES = [
  { Icon: RateReviewIcon, label: 'Review', tool: 'Tekton' },
  { Icon: BuildIcon, label: 'Build', tool: 'Kaniko' },
  { Icon: FactCheckIcon, label: 'Gate', tool: 'SonarQube' },
  { Icon: Inventory2Icon, label: 'Publish', tool: 'Nexus' },
  { Icon: RocketLaunchIcon, label: 'Deploy', tool: 'Argo CD' },
];

export const PipelineRail = () => {
  const pipelineRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  // The spark runs once, when the rail first scrolls into view.
  useEffect(() => {
    const node = pipelineRef.current;
    if (!node || typeof IntersectionObserver === 'undefined') return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.6 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={pipelineRef}
      className={styles.pipeline}
      data-run={inView || undefined}
      style={{ '--stage-count': STAGES.length } as CSSProperties}
    >
      <span className={styles.rail} aria-hidden="true" />
      <span className={styles.sparkTrack} aria-hidden="true" />
      <ol className={styles.stages} aria-label="Pipeline stages and the tools that run them">
        {STAGES.map(({ Icon, label, tool }) => (
          <li key={label} className={styles.node}>
            <span className={styles.nodeIcon} aria-hidden="true">
              <Icon className={styles.icon} />
            </span>
            <span className={styles.nodeLabel}>{label}</span>
            <span className={styles.nodeTool}>
              <span className={shared.visuallyHidden}>: </span>
              {tool}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
};
