import { useState, useEffect } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import BtcCalculator from '../components/BtcCalculator';

export default function Kalkulators() {
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

  // Structured Data for Calculator
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Bitcoin Kalkulators - BTC/EUR/Satoshi",
    "description": "Bezmaksas Bitcoin kalkulators. Konvertē BTC uz EUR un Satoshi ar reāllaika cenām.",
    "url": "https://nakamoto.lv/kalkulators",
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
        {/* Page Title */}
        <title>Bitcoin Kalkulators | BTC EUR Satoshi Konvertors | Nakamoto.lv</title>
        
        {/* Meta Description */}
        <meta name="description" content="Bezmaksas Bitcoin kalkulators latviešu valodā. Konvertē BTC uz EUR un Satoshi ar reāllaika cenām. Uzzini, cik maksā 1 Bitcoin eiro. Vienkāršs un ātrs BTC kalkulators." />
        
        {/* Keywords */}
        <meta name="keywords" content="bitcoin kalkulators, btc kalkulators, bitkoina cena, btc eur, bitcoin eiro, satoshi kalkulators, cik maksā bitcoin, btc konvertors, bitcoin cena šodien, kriptovalūtu kalkulators, bitcoin latvija" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://nakamoto.lv/kalkulators" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Bitcoin Kalkulators | BTC/EUR/Satoshi | Nakamoto.lv" />
        <meta property="og:description" content="Bezmaksas Bitcoin kalkulators. Konvertē BTC uz EUR un Satoshi ar reāllaika cenām." />
        <meta property="og:url" content="https://nakamoto.lv/kalkulators" />
        <meta property="og:image" content="https://nakamoto.lv/og-calculator.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter Card */}
        <meta name="twitter:title" content="Bitcoin Kalkulators | Nakamoto.lv" />
        <meta name="twitter:description" content="Konvertē BTC uz EUR un Satoshi ar reāllaika cenām." />
        <meta name="twitter:image" content="https://nakamoto.lv/og-calculator.png" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <Layout btcPrice={btcPrice} priceSource={priceSource} lastUpdated={lastUpdated}>
        <BtcCalculator 
          btcPrice={btcPrice} 
          priceSource={priceSource} 
          lastUpdated={lastUpdated} 
          loading={loading}
          fetchPrice={fetchPrice}
        />
      </Layout>
    </>
  );
}
