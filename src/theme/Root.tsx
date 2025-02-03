import React from 'react';
import Head from '@docusaurus/Head';

export default function Root({ children }) {
  return (
    <>
      <link rel="stylesheet" href="/css/cookie-consent.css" />
      <Head>
        <script
          type="text/javascript"
          src="https://cookie-cdn.cookiepro.com/consent/0194a78c-7932-70b9-abdc-9d8096b5f261/OtAutoBlock.js"
        ></script>
        <script
          src="https://cookie-cdn.cookiepro.com/scripttemplates/otSDKStub.js"
          type="text/javascript"
          charSet="UTF-8"
          data-domain-script="0194a78c-7932-70b9-abdc-9d8096b5f261"
        ></script>
        <script type="text/javascript">{`function OptanonWrapper() {}`}</script>
      </Head>
      {children}
    </>
  );
}
