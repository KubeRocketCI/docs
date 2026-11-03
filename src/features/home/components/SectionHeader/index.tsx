import type { ReactNode } from 'react';
import { SectionHeading } from '../SectionHeading';
import styles from './styles.module.css';

interface SectionHeaderProps {
  title: string;
  children: ReactNode;
}

export const SectionHeader = ({ title, children }: SectionHeaderProps) => (
  <>
    <SectionHeading className={styles.heading}>{title}</SectionHeading>
    <p className={styles.subheading}>{children}</p>
  </>
);
