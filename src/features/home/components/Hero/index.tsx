import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import heroImage from '../../assets/hero-bg_1600x440.png';
import heroVideo from '../../assets/hero-bg-video_1920x1080.mp4';
import styles from './styles.module.css';
import Lottie from 'react-lottie';
import logoAnimation from '../../assets/logo-animation.json';
import clsx from 'clsx';
import YouTubeIcon from '@mui/icons-material/YouTube';

export const Hero = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header>
      <div className={styles.heroBanner}>
        <div className={styles.heroBannerOverlay}></div>
        <video className={styles.heroBannerVideo} autoPlay loop muted poster={heroImage}>
          <source src={heroVideo} />
        </video>
        <div className={styles.heroBannerContent}>
          <div className="margin-bottom--md">
            <Lottie
              height={101}
              width={101}
              options={{
                animationData: logoAnimation,
                rendererSettings: {
                  preserveAspectRatio: 'xMidYMid slice',
                },
              }}
            />
          </div>
          <div className="margin-bottom--lg">
            <div className="margin-bottom--md">
              <div className={styles.heroBannerTitle}>{siteConfig.title}</div>
              <div className={styles.heroBannerSubtitle}>{siteConfig.tagline}</div>
            </div>
            <div className={styles.heroBannerDescription}>{siteConfig.themeConfig.description as string}</div>
          </div>
          <div className={clsx('row margin-bottom--sm', styles.heroBannerButtons)}>
            <div className="margin-horiz--sm">
              <Link
                className={clsx('button button--outline button--lg', [
                  styles.heroBannerBtn,
                  styles.heroBannerBtnOutlined,
                ])}
                to="/docs/about-platform"
              >
                Getting Started
              </Link>
            </div>
            <div className="margin-horiz--sm">
              <Link
                className={clsx('button  button--lg', [styles.heroBannerBtn, styles.heroBannerBtnContained])}
                to={siteConfig.themeConfig.mailTo as string}
              >
                Request Demo
              </Link>
            </div>
            <div className="margin-horiz--sm">
              <Link
                className={clsx('button button--outline button--lg', [
                  styles.heroBannerBtn,
                  styles.heroBannerBtnWithIcon,
                ])}
                to={siteConfig.themeConfig.videoTeaser as string}
              >
                Watch teaser <YouTubeIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
