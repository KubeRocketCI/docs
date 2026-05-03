import Heading from '@theme/Heading';
import styles from './styles.module.css';
import { featuresList } from '../../constants';
import clsx from 'clsx';
import Link from '@docusaurus/Link';

export const Features = () => {
  return (
    <main className={styles.sectionWrapper}>
      <div className="container">
        <Heading as="h2" className={styles.sectionHeading}>
          Platform Capabilities
        </Heading>
        <div className="row">
          {featuresList.map(({ link, title, description, Svg }, idx) => (
            <div key={`feature:${idx}`} className={clsx('col col--4', styles.gridItem)}>
              <Link href={link} className={styles.root}>
                <div className={styles.header}>
                  <Svg className={styles.icon} role="img" />
                  <Heading as="h3" className={styles.title}>
                    {title}
                  </Heading>
                </div>
                <div className={styles.description}>{description}</div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};
