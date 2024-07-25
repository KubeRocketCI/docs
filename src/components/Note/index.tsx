import { AsteriskIcon } from '../../icons/Asterisk';
import styles from './styles.module.css';

export const Note = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.note}>
      <div className={styles.noteIcon}>
        <AsteriskIcon width="2.5rem" height="2.5rem" sx={{ width: '2.5rem', height: '2.5rem' }} />
      </div>
      {children}
    </div>
  );
};
