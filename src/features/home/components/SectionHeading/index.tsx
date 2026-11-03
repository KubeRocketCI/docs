import type { ReactNode } from 'react';
import clsx from 'clsx';
import useBrokenLinks from '@docusaurus/useBrokenLinks';
import styles from './styles.module.css';

interface SectionHeadingProps {
  id?: string;
  /** Sets margin and color; the base style sets neither. */
  className?: string;
  children: ReactNode;
}

// Plain h2: Docusaurus Heading appends a hash link whose label leaks into aria-labelledby names.
export const SectionHeading = ({ id, className, children }: SectionHeadingProps) => {
  // Registers the id with the build's broken-anchor check, as Heading does.
  useBrokenLinks().collectAnchor(id);

  return (
    <h2 id={id} className={clsx(styles.heading, className)}>
      {children}
    </h2>
  );
};
