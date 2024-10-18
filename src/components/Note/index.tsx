import { NoteAsterisk } from '../NoteAsterisk';
import styles from './styles.module.css';

export const Note = ({ children, asteriskAmount = 1 }: { children: React.ReactNode; asteriskAmount?: number }) => {
  return (
    <div className={styles.note}>
      <div className={styles.noteIcon}>
        {Array.from({ length: asteriskAmount }).map((_, index) => (
          <NoteAsterisk key={index} />
        ))}
      </div>
      {children}
    </div>
  );
};
