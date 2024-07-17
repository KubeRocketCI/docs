import CheckIcon from '@mui/icons-material/Check';
import styles from './styles.module.css';
import clsx from 'clsx';
import Link from '@docusaurus/Link';

export const PricingCard = ({ title, price, description, features, link }) => {
  const hasPrice = price && typeof price === 'number';

  return (
    <div className={styles.pricingCard}>
      <div className={styles.pricingCardContent}>
        <div className={styles.pricingCardName}>{title}</div>
        <div className={styles.pricingCardPrice}>
          {hasPrice ? price : 'Free'} {price && <span>/month</span>}
        </div>
        <div className={styles.pricingCardDescription}>{description}</div>
        <ul className={styles.pricingCardFeatures}>
          {features.map((feature, idx) => (
            <li key={`feature:${idx}`} className={styles.pricingCardFeature}>
              <span className={clsx('twemoji', styles.pricingCardFeatureMarker)}>
                <CheckIcon />
              </span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.pricingCardFooter}>
        <Link href={link} className="button">
          start
        </Link>
      </div>
    </div>
  );
};
