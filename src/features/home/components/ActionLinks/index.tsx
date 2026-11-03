import Link from '@docusaurus/Link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import styles from './styles.module.css';

export interface ActionLinkItem {
  label: string;
  to: string;
  /** Render a plain anchor: for build-time assets outside the router, such as llms.txt. */
  native?: boolean;
}

interface ActionLinksProps {
  links: ActionLinkItem[];
  /** `inverse` is for dark bands in both themes. */
  tone?: 'accent' | 'inverse';
}

export const ActionLinks = ({ links, tone = 'accent' }: ActionLinksProps) => (
  <div className={styles.actions} data-tone={tone}>
    {links.map(({ label, to, native }) => {
      const content = (
        <>
          {label} <ArrowForwardIcon fontSize="small" aria-hidden="true" />
        </>
      );
      return native ? (
        <a key={to} className={styles.actionLink} href={to}>
          {content}
        </a>
      ) : (
        <Link key={to} className={styles.actionLink} to={to}>
          {content}
        </Link>
      );
    })}
  </div>
);
