import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './styles.module.css';

interface TerminalCardProps {
  href: string;
  /** Verb shown after the prompt, e.g. "open" or "read". */
  command: string;
  /** Id of the element that names the link; defaults to the card's full text. */
  labelledBy?: string;
  className?: string;
  children: ReactNode;
}

export const TerminalCard = ({ href, command, labelledBy, className, children }: TerminalCardProps) => (
  <Link href={href} className={clsx(styles.card, className)} aria-labelledby={labelledBy}>
    {children}
    <span className={styles.cmd} aria-hidden="true">
      <span className={styles.cmdPrompt} aria-hidden="true">
        ▸
      </span>
      <span className={styles.cmdText}>{command}</span>
      <span className={styles.caret} aria-hidden="true" />
    </span>
  </Link>
);
