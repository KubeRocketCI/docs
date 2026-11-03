import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import clsx from 'clsx';
import TerminalIcon from '@mui/icons-material/Terminal';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import shared from '../../shared.module.css';
import styles from './styles.module.css';

type CopyState = 'idle' | 'copied' | 'failed';

const RESET_MS: Record<Exclude<CopyState, 'idle'>, number> = {
  copied: 2000,
  // Long enough to read the manual-copy hint.
  failed: 8000,
};

/** A command, or a command with the output lines printed after it. Output is not copied. */
export type TerminalCommand = string | { command: string; output: ReactNode[] };

interface TerminalBlockProps {
  /** Copied as newline-separated commands. */
  commands: TerminalCommand[];
  /** Accessible name of the scrollable terminal body. */
  label: string;
  /** Trailing shell comment, shown after the commands and excluded from the clipboard. */
  comment?: string;
  className?: string;
}

const commandOf = (entry: TerminalCommand) => (typeof entry === 'string' ? entry : entry.command);

export const TerminalBlock = ({ commands, label, comment, className }: TerminalBlockProps) => {
  const [copyState, setCopyState] = useState<CopyState>('idle');
  const [clipped, setClipped] = useState(false);
  const resetTimer = useRef<number | undefined>(undefined);
  // Incremented per copy attempt and on unmount; a settled attempt that is no longer current is dropped.
  const copyAttempt = useRef(0);
  const bodyRef = useRef<HTMLPreElement>(null);
  const commandLines = commands.map(commandOf);
  const plural = commandLines.length > 1;

  useEffect(
    () => () => {
      copyAttempt.current += 1;
      window.clearTimeout(resetTimer.current);
    },
    []
  );

  const updateClipped = useCallback(() => {
    const body = bodyRef.current;
    if (!body) return;
    setClipped(body.scrollWidth - body.clientWidth - body.scrollLeft > 1);
  }, []);

  useEffect(() => {
    const body = bodyRef.current;
    if (!body || typeof ResizeObserver === 'undefined') return undefined;
    const observer = new ResizeObserver(updateClipped);
    observer.observe(body);
    return () => observer.disconnect();
  }, [updateClipped]);

  // Content width changes with the content and with web-font swaps, neither of which resizes the box.
  useEffect(() => {
    updateClipped();
    let active = true;
    document.fonts?.ready.then(() => active && updateClipped());
    return () => {
      active = false;
    };
  }, [commands, comment, updateClipped]);

  const handleCopy = async () => {
    const attempt = ++copyAttempt.current;
    let result: Exclude<CopyState, 'idle'>;
    try {
      await navigator.clipboard.writeText(commandLines.join('\n'));
      result = 'copied';
    } catch {
      // Clipboard API is unavailable outside secure contexts or when permission is denied.
      result = 'failed';
    }
    if (attempt !== copyAttempt.current) return;
    window.clearTimeout(resetTimer.current);
    setCopyState(result);
    resetTimer.current = window.setTimeout(() => setCopyState('idle'), RESET_MS[result]);
  };

  return (
    <div className={clsx(styles.terminal, className)}>
      <div className={styles.bar}>
        <span className={styles.dot} data-variant="red" />
        <span className={styles.dot} data-variant="amber" />
        <span className={styles.dot} data-variant="green" />
        <span className={styles.title}>
          <TerminalIcon className={styles.titleIcon} aria-hidden="true" />
          bash
        </span>
        <button type="button" className={styles.copyBtn} data-state={copyState} onClick={handleCopy}>
          {copyState === 'copied' && <CheckIcon className={styles.copyIcon} aria-hidden="true" />}
          {copyState === 'failed' && <ErrorOutlineIcon className={styles.copyIcon} aria-hidden="true" />}
          {copyState === 'idle' && <ContentCopyIcon className={styles.copyIcon} aria-hidden="true" />}
          {copyState === 'copied' && 'Copied'}
          {copyState === 'failed' && 'Copy failed'}
          {copyState === 'idle' && (
            <>
              Copy<span className={shared.visuallyHidden}>{plural ? ' commands' : ' command'}</span>
            </>
          )}
        </button>
      </div>
      <div className={styles.bodyFrame} data-clipped={clipped || undefined}>
        {/* Focusable so keyboard users can scroll long commands; a named region so the focus stop is announced. */}
        <pre
          ref={bodyRef}
          className={styles.body}
          tabIndex={0}
          role="region"
          aria-label={label}
          onScroll={updateClipped}
        >
          {commands.map((entry, index) => {
            const command = commandOf(entry);
            return (
              <span key={`${index}:${command}`} className={styles.step}>
                <code className={styles.line}>
                  <span className={styles.prompt} aria-hidden="true">
                    $
                  </span>{' '}
                  {command}
                </code>
                {typeof entry !== 'string' &&
                  entry.output.map((line, index) => (
                    <samp key={index} className={styles.output}>
                      {line}
                    </samp>
                  ))}
              </span>
            );
          })}
          {comment && <code className={styles.comment}># {comment}</code>}
        </pre>
      </div>
      <p className={clsx(styles.status, copyState !== 'failed' && shared.visuallyHidden)} role="status">
        {copyState === 'copied' && (plural ? 'Commands copied to the clipboard.' : 'Command copied to the clipboard.')}
        {copyState === 'failed' && 'Copying is blocked in this browser. Select the commands above and copy them.'}
      </p>
    </div>
  );
};
