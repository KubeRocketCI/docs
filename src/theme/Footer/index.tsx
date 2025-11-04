import React from 'react';
import Footer from '@theme-original/Footer';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function FooterWrapper(props) {
  return (
    <div className="footer-container">
      <Footer {...props} />
      <div className="footer-subfooter">
        <div className="container">
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
