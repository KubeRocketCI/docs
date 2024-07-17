import Heading from '@theme/Heading';
import styles from './styles.module.css';
import { featuresList } from '../../constants';
import clsx from 'clsx';
import Link from '@docusaurus/Link';

export const Features = () => {
  return (
    <main className={styles.sectionWrapper}>
      <div className="container">
        <div className="row">
          {featuresList.map(({ link, title, description, Svg }, idx) => (
            <div key={`feature:${idx}`} className={clsx('col col--4', styles.featuresGridItem)}>
              <Link href={link} className={styles.feature}>
                <div className={styles.featureHeader}>
                  <Svg className={styles.featureIcon} role="img" />
                  <Heading as="h3" className={styles.featureTitle}>
                    {title}
                  </Heading>
                </div>
                <div className={styles.featureDescription}>{description}</div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};
