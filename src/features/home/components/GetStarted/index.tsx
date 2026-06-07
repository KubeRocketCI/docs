import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import TerminalIcon from '@mui/icons-material/Terminal';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import styles from './styles.module.css';

const COMMAND_LINES = [
  'git clone https://github.com/KubeRocketCI/try-kuberocketci',
  'cd try-kuberocketci',
  'make testbed',
];
const CLIPBOARD_TEXT = COMMAND_LINES.join('\n');

export const GetStarted = () => {
  const [copied, setCopied] = useState(false);
  const resetTimer = useRef<number | undefined>(undefined);

  // Cancel a pending reset if the user navigates away within the 2s window.
  useEffect(() => () => window.clearTimeout(resetTimer.current), []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(CLIPBOARD_TEXT);
      setCopied(true);
      window.clearTimeout(resetTimer.current);
      resetTimer.current = window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable (e.g. non-secure context) — fail silently.
    }
  };

  return (
    <section className={styles.band}>
      <div className={clsx('container', styles.inner)}>
        <div className={styles.copyColumn}>
          <span className={styles.eyebrow}>Quick start</span>
          <Heading as="h2" className={styles.heading}>
            Try the whole platform locally
          </Heading>
          <p className={styles.lead}>
            Spin up a full CI/CD stack — Tekton, Argo CD, SonarQube and more — on a local kind cluster in two commands.
            No cloud account needed.
          </p>
          <div className={styles.actions}>
            <Link className={styles.actionLink} to="/blog/try-kuberocketci-locally">
              Read the walkthrough <ArrowForwardIcon fontSize="small" />
            </Link>
            <Link className={styles.actionLink} to="/docs/quick-start/quick-start-overview">
              Quick Start guide <ArrowForwardIcon fontSize="small" />
            </Link>
          </div>
        </div>

        <div className={styles.terminal}>
          <div className={styles.terminalBar}>
            <span className={styles.dot} data-variant="red" />
            <span className={styles.dot} data-variant="amber" />
            <span className={styles.dot} data-variant="green" />
            <span className={styles.terminalTitle}>
              <TerminalIcon className={styles.terminalTitleIcon} />
              bash
            </span>
            <button
              type="button"
              className={styles.copyBtn}
              onClick={handleCopy}
              aria-label={copied ? 'Commands copied' : 'Copy commands'}
            >
              {copied ? <CheckIcon className={styles.copyIcon} /> : <ContentCopyIcon className={styles.copyIcon} />}
              {copied ? 'Copied' : 'Copy'}
            </button>
          </div>
          <pre className={styles.terminalBody}>
            {COMMAND_LINES.map((line, idx) => (
              <code key={`cmd:${idx}`} className={styles.line}>
                <span className={styles.prompt}>$</span> {line}
              </code>
            ))}
            <code className={styles.comment}># full stack ready in ~18–20 min</code>
          </pre>
        </div>
      </div>
    </section>
  );
};
