import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Basic Meta */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1a0a00" />
        <meta name="msapplication-TileColor" content="#fb923c" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Global SEO */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="notranslate" />
        <meta name="author" content="Nakamoto.lv" />
        <meta name="publisher" content="Nakamoto.lv" />
        <meta name="copyright" content="Nakamoto.lv" />
        
        {/* Language & Locale */}
        <meta httpEquiv="content-language" content="lv" />
        <link rel="alternate" hrefLang="lv" href="https://nakamoto.lv" />
        
        {/* Open Graph Global */}
        <meta property="og:site_name" content="Nakamoto.lv - Bitcoin Rīki Latvijai" />
        <meta property="og:locale" content="lv_LV" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Global */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@nakamotolv" />
        
        {/* Geo Tags for Latvia */}
        <meta name="geo.region" content="LV" />
        <meta name="geo.placename" content="Latvija" />
        
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://api.coingecko.com" />
      </Head>
      <style jsx global>{`
        *, *::before, *::after {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          border: 0;
        }
        html, body {
          margin: 0;
          padding: 0;
          background: #1a0a00;
          min-height: 100vh;
          overflow-x: hidden;
        }
        #__next {
          min-height: 100vh;
          background: #1a0a00;
        }
        a {
          color: inherit;
          text-decoration: none;
        }
        button {
          font-family: inherit;
          background: none;
          border: none;
          outline: none;
        }
        input {
          background: none;
          border: none;
          outline: none;
        }
        input[type="number"]::-webkit-outer-spin-button,
        input[type="number"]::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        input[type="number"] {
          -moz-appearance: textfield;
        }
        /* Recharts fix */
        .recharts-wrapper,
        .recharts-surface,
        .recharts-legend-wrapper {
          background: transparent !important;
        }
        .recharts-tooltip-wrapper {
          outline: none !important;
        }
        .recharts-default-tooltip {
          background: rgba(26, 10, 0, 0.95) !important;
          border: 1px solid rgba(251, 146, 60, 0.4) !important;
          border-radius: 8px !important;
        }
        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        ::-webkit-scrollbar-track {
          background: rgba(26, 10, 0, 0.5);
        }
        ::-webkit-scrollbar-thumb {
          background: rgba(251, 146, 60, 0.4);
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: rgba(251, 146, 60, 0.6);
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
