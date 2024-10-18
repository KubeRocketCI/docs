import CheckIcon from '@mui/icons-material/Check';
import styles from './styles.module.css';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import { PricingCardProps } from './types';

export const PricingCard = ({
  title,
  price,
  description,
  features,
  moreFeatures,
  color,
  label,
  link,
}: PricingCardProps) => {
  return (
    <div className={styles.root} style={{ borderLeft: `4px solid ${color}` }}>
      <div className={styles.content}>
        <div className={styles.name}>
          {title}{' '}
          {label && (
            <div className={styles.label} style={{ backgroundColor: label.color }}>
              {label.text}
            </div>
          )}
        </div>
        <div className={styles.price}>
          {price ? <span>$</span> : null} {price ? price : 'Free'} {price ? <span>/month</span> : null}
        </div>
        <div className={styles.description}>{description}</div>
        <ul className={styles.features}>
          {features.map((feature, idx) => (
            <li key={`feature:${idx}`} className={styles.feature}>
              <span className={clsx('twemoji', styles.featureMarker)}>
                <CheckIcon sx={{ color: 'rgba(0, 148, 255, 1)' }} />
              </span>
              {feature}
            </li>
          ))}
        </ul>
        {moreFeatures ? (
          <>
            <div className={styles.featuresDivider}>more</div>

            <ul className={styles.features}>
              {moreFeatures.features.map((feature, idx) => (
                <li className={styles.feature} key={`more-feature:${idx}`}>
                  <span className={clsx('twemoji', styles.featureMarker)}>
                    <CheckIcon sx={{ color: 'rgba(0, 148, 255, 1)' }} />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </>
        ) : null}
      </div>
      <div className={styles.footer}>
        <Link href={link.href} className={clsx('button button--primary button--md', styles.mainButton)}>
          {link.label}
        </Link>
      </div>
    </div>
  );
};
