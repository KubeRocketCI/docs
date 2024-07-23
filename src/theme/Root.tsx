import React from 'react';
import CookieConsent from 'react-cookie-consent';

export default function Root({ children }) {
  return (
    <>
      <CookieConsent
        location="bottom"
        buttonClasses="button button--secondary button--error margin-horiz--sm"
        disableButtonStyles
        buttonText="Accept"
        setDeclineCookie
        expires={150}
        style={{
          backgroundColor: 'var(--ifm-color-primary)',
          alignItems: 'center',
          padding: '1rem 2rem',
          width: '80%',
          left: '50%',
          transform: 'translateX(-50%)',
          borderRadius: '0.25rem',
          marginBottom: '20px',
        }}
      >
        We use cookies to recognize your repeated visits and preferences, as well as to measure the effectiveness of our
        documentation and whether users find what they're searching for. With your consent, you're helping us to make
        our documentation better.
      </CookieConsent>
      {children}
    </>
  );
}
