import Heading from '@theme/Heading';
import styles from './styles.module.css';
import { useCasesList } from '../../constants';
import clsx from 'clsx';
import Link from '@docusaurus/Link';

export const UseCases = () => {
  return (
    <main className={styles.sectionWrapper}>
      <div className="container">
        <div className="row">
          {useCasesList.map(({ link, title, description, Svg }, idx) => (
            <div key={`feature:${idx}`} className={clsx('col col--6', styles.gridItem)}>
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
