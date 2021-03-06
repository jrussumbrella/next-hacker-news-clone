import Document, { Head, Main, NextScript } from "next/document";
import { GA_TRACKING_ID } from '../analytics/gtag';

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en-US">
        <Head>
        <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `
            }}
          />          
          <link rel="manifest" href="/static/manifest.json" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="application-name" content="Next Hacker News" />
          <meta name="apple-mobile-web-app-title" content="Next Hacker News" />
          <meta name="theme-color" content="#ef700b" />
          <meta name="msapplication-navbutton-color" content="#ef700b" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <link rel="icon" type="image/png" sizes="512x512" href="/static/icons/icon-512x512.png" />
          <link rel="apple-touch-icon" type="image/png" sizes="512x512" href="/static/icons/icon-512x512.png" />
          <link rel="icon" type="image/png" sizes="/static/icons/icons-192x192.png" href="/static/icons/icon-192x192.png" />
          <link rel="apple-touch-icon" type="image/png" sizes="/static/icons/icons-192x192.png" href="/static/icons/icon-192x192.png" /> 
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
