import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import heroImage from '../../assets/hero-bg_1600x440.png';
import heroVideo from '../../assets/hero-bg-video_1920x1080.mp4';
import styles from './styles.module.css';
import Lottie from 'react-lottie';
import logoAnimation from '../../assets/logo-animation.json';
import clsx from 'clsx';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import { useRef, useState } from 'react';

export const Hero = () => {
  const { siteConfig } = useDocusaurusContext();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleVideo = () => {
    const video = videoRef.current;
    if (!video) return;
    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.play();
      setIsPlaying(true);
    }
  };

  return (
    <header>
      <div className={styles.heroBanner}>
        <div className={styles.heroBannerOverlay}></div>
        <video ref={videoRef} className={styles.heroBannerVideo} loop muted playsInline preload="none" poster={heroImage}>
          <source src={heroVideo} />
        </video>
        <button
          className={styles.heroBannerVideoToggle}
          onClick={toggleVideo}
          aria-label={isPlaying ? 'Pause background video' : 'Play background video'}
        >
          {isPlaying ? <PauseIcon fontSize="small" /> : <PlayArrowIcon fontSize="small" />}
        </button>
        <div className={styles.heroBannerContent}>
          <div className="margin-bottom--md" aria-hidden="true">
            <Lottie
              height={101}
              width={101}
              ariaRole="presentation"
              ariaLabel="KubeRocketCI animated logo"
              isClickToPauseDisabled={true}
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
              <h1 className={styles.heroBannerTitle}>{siteConfig.title} Documentation</h1>
              <p className={styles.heroBannerSubtitle}>{siteConfig.tagline}</p>
            </div>
            <p className={styles.heroBannerDescription}>
              KubeRocketCI is an open-source CI/CD platform for Kubernetes teams.
              It gives you a full delivery pipeline — from code commit to live deploy.
            </p>
            <p className={styles.heroBannerDescription}>
              Get Tekton builds, Argo CD GitOps, and security scans ready to use.
              Browse the Quick&nbsp;Start guide or dive into the Operator and User guides.
            </p>
          </div>
          <div className={styles.heroBannerButtons}>
            <Link
              className={clsx('button button--lg', [styles.heroBannerBtn, styles.heroBannerBtnContained])}
              to={siteConfig.themeConfig.mailTo as string}
            >
              Request Demo
            </Link>
            <Link className={styles.heroBannerLink} to={siteConfig.themeConfig.videoTeaser as string}>
              Watch teaser <YouTubeIcon fontSize="small" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
