import Heading from '@theme/Heading';
import styles from './styles.module.css';
import { userGuideList } from '../../constants';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import { useActiveVersion } from '@docusaurus/plugin-content-docs/client';

export const UserGuideCards = () => {
  const version = useActiveVersion('default');
  const versionPath = version?.path ?? 'next';

  return (
    <main className={styles.sectionWrapper}>
      <div className="container">
        <div className="row">
          {userGuideList.map(({ docPath, title, description, icon }, idx) => (
            <div key={`user-guide:${idx}`} className={clsx('col col--6', styles.gridItem)}>
              <Link to={`${versionPath}/${docPath}`} className={styles.root}>
                <div className={styles.header}>
                  <img src={icon} alt="" className={styles.icon} aria-hidden />
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
