import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import LogoMark from '@site/static/img/logo.svg';
import heroImage from '../../assets/hero-bg_1600x440.webp';
import heroVideo from '../../assets/hero-bg-video_1920x1080.mp4';
import { TESTBED_DURATION, useLatestDocsLinks } from '../../links';
import styles from './styles.module.css';
import clsx from 'clsx';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import { useRef, useState } from 'react';

export const Hero = () => {
  const { siteConfig } = useDocusaurusContext();
  const videoRef = useRef<HTMLVideoElement>(null);
  // Mirrors the element's play/pause events, so it never drifts from actual playback.
  const [isPlaying, setIsPlaying] = useState(false);
  const links = useLatestDocsLinks();

  const toggleVideo = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      // Rejects on load failure, autoplay policy (e.g. iOS Low Power Mode), or a pause() before playback starts.
      video.play().catch(() => setIsPlaying(false));
    } else {
      video.pause();
    }
  };

  return (
    <header>
      <div className={styles.heroBanner}>
        <div className={styles.heroBannerOverlay}></div>
        <video
          ref={videoRef}
          className={styles.heroBannerVideo}
          loop
          muted
          playsInline
          preload="none"
          poster={heroImage}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        >
          <source src={heroVideo} />
        </video>
        <div className={styles.heroBannerContent}>
          <div className={clsx('margin-bottom--md', styles.heroLogoFrame)}>
            <LogoMark className={styles.heroLogo} aria-hidden="true" focusable="false" />
          </div>
          <div className={styles.heroCopy}>
            <h1 className={styles.heroBannerTitle}>{siteConfig.title} Documentation</h1>
            <p className={styles.heroBannerSubtitle}>{siteConfig.tagline}</p>
            <p className={styles.heroBannerDescription}>
              An open-source CI/CD platform for Kubernetes teams: Tekton builds, Argo CD GitOps, quality gates, and
              security scans on one golden path for your engineers and their AI agents.
            </p>
          </div>
          <div className={styles.heroBannerButtons}>
            <div className={styles.heroPath}>
              <Link
                className={clsx('button button--lg', styles.heroBannerBtn, styles.heroBannerBtnContained)}
                to={links.quickStart}
                aria-describedby="hero-path-cluster"
              >
                Quick Start
              </Link>
              <span id="hero-path-cluster" className={styles.heroPathCaption}>
                Install on your own cluster
              </span>
            </div>
            <div className={styles.heroPath}>
              <Link
                className={clsx('button button--lg', styles.heroBannerBtn, styles.heroBannerBtnOutline)}
                to="#try-locally-heading"
                aria-describedby="hero-path-laptop"
              >
                Try it locally
              </Link>
              <span id="hero-path-laptop" className={styles.heroPathCaption}>
                Laptop evaluation, {TESTBED_DURATION}
              </span>
            </div>
            <Link className={styles.heroBannerLink} to={siteConfig.themeConfig.videoTeaser as string}>
              Watch teaser <YouTubeIcon fontSize="small" aria-hidden="true" />
            </Link>
          </div>
          <p className={styles.heroRelease}>
            <span>Latest release {links.releaseLabel}</span>
            <span className={styles.heroReleaseSep} aria-hidden="true">
              ·
            </span>
            <Link to={links.installOverview}>Install guide</Link>
            <span className={styles.heroReleaseSep} aria-hidden="true">
              ·
            </span>
            <Link to={links.upgradeGuide}>Upgrade guide</Link>
            <span className={styles.heroReleaseSep} aria-hidden="true">
              ·
            </span>
            <Link to={links.supportedVersions}>Supported versions</Link>
          </p>
        </div>
        <button
          type="button"
          className={styles.heroBannerVideoToggle}
          onClick={toggleVideo}
          aria-label={isPlaying ? 'Pause background video' : 'Play background video'}
        >
          {isPlaying ? (
            <PauseIcon fontSize="small" aria-hidden="true" />
          ) : (
            <PlayArrowIcon fontSize="small" aria-hidden="true" />
          )}
        </button>
      </div>
    </header>
  );
};
