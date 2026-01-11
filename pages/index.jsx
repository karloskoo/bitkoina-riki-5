import { useState, useEffect } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import PensionComparison from '../components/PensionComparison';

export default function Home() {
  const [btcPrice, setBtcPrice] = useState(94000);
  const [priceSource, setPriceSource] = useState('');
  const [lastUpdated, setLastUpdated] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchPrice = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/btc-price');
      const data = await res.json();
      if (data.price) {
        setBtcPrice(data.price);
        setPriceSource(data.source);
        setLastUpdated(new Date());
      }
    } catch (err) {
      setPriceSource('Cenas kļūda');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPrice();
    const interval = setInterval(fetchPrice, 60000);
    return () => clearInterval(interval);
  }, []);

  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Nakamoto.lv - Pensiju Fondi vs Bitcoin",
    "description": "Salīdzini Latvijas pensiju fondu ienesīgumu ar Bitcoin. Interaktīvs rīks ar FKTK datiem no 2020-2025.",
    "url": "https://nakamoto.lv",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR"
    },
    "author": {
      "@type": "Organization",
      "name": "Nakamoto.lv",
      "url": "https://nakamoto.lv"
    },
    "inLanguage": "lv",
    "isAccessibleForFree": true
  };

  return (
    <>
      <Head>
        {/* Page Title - Important for SEO */}
        <title>Pensiju Fondi vs Bitcoin Latvijā 2020-2025 | Nakamoto.lv</title>
        
        {/* Meta Description - Shows in search results */}
        <meta name="description" content="Salīdzini Latvijas pensiju fondu (CBL, Luminor, SEB, Swedbank, INDEXO) ienesīgumu ar Bitcoin. Interaktīvs kalkulators ar reāliem FKTK datiem 2020-2025. Uzzini, cik būtu nopelnīts!" />
        
        {/* Keywords - Less important now but still useful */}
        <meta name="keywords" content="pensiju fondi latvija, bitcoin latvija, btc eur, bitkoina cena, pensiju fondu salīdzinājums, nakamoto, bitcoin investīcijas, 3 pensiju līmenis, IIN atmaksa, INDEXO, Swedbank pensija, SEB pensija, CBL pensija, Luminor pensija, kriptovalūta latvija" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://nakamoto.lv" />
        
        {/* Open Graph for Social Sharing */}
        <meta property="og:title" content="Pensiju Fondi vs Bitcoin Latvijā | Nakamoto.lv" />
        <meta property="og:description" content="Salīdzini Latvijas pensiju fondu ienesīgumu ar Bitcoin. Interaktīvs rīks ar FKTK datiem 2020-2025." />
        <meta property="og:url" content="https://nakamoto.lv" />
        <meta property="og:image" content="https://nakamoto.lv/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Pensiju Fondi vs Bitcoin salīdzinājums" />
        
        {/* Twitter Card */}
        <meta name="twitter:title" content="Pensiju Fondi vs Bitcoin Latvijā | Nakamoto.lv" />
        <meta name="twitter:description" content="Salīdzini Latvijas pensiju fondu ienesīgumu ar Bitcoin. Interaktīvs rīks ar FKTK datiem." />
        <meta name="twitter:image" content="https://nakamoto.lv/og-image.png" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <Layout btcPrice={btcPrice} priceSource={priceSource} lastUpdated={lastUpdated}>
        <PensionComparison />
      </Layout>
    </>
  );
}
