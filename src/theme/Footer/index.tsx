import React from 'react';
import Footer from '@theme-original/Footer';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function FooterWrapper(props) {
  return (
    <div className="footer-container">
      <Footer {...props} />
      <div className="footer-subfooter">
        <div className="container">
          <p className="footer-solidarity">
            KubeRocketCI Team Supports Ukraine 🇺🇦. In solidarity, we ask that you consider financially supporting{' '}
            <a
              href="https://epamuafund.rengiving.com/causes/159bdd2f71854adf8ed5251fe26d2fe0"
              target="_blank"
              rel="noopener noreferrer"
            >
              EPAM’s Global Partners for the Ukraine Humanitarian Crisis
            </a>
            .
          </p>
          <div className="footer-subfooter-content">
            <a href="https://kuberocketci.io" target="_blank" className="footer-subfooter-link">
              <ArrowForwardIcon className="footer-subfooter-icon" />
              Visit Main Site
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
