// Vercel Serverless Function - /api/btc-price.js
// Šis fails jāievieto projekta /api mapē

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Cache-Control', 's-maxage=30, stale-while-revalidate=60');

  const errors = [];

  // 1. Try CoinGecko
  try {
    const response = await fetch(
      'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=eur'
    );
    if (response.ok) {
      const data = await response.json();
      if (data.bitcoin?.eur) {
        return res.status(200).json({
          price: data.bitcoin.eur,
          source: 'CoinGecko',
          timestamp: new Date().toISOString()
        });
      }
    }
    errors.push('CoinGecko: ' + response.status);
  } catch (e) {
    errors.push('CoinGecko: ' + e.message);
  }

  // 2. Try Kraken
  try {
    const response = await fetch(
      'https://api.kraken.com/0/public/Ticker?pair=XBTEUR'
    );
    if (response.ok) {
      const data = await response.json();
      if (data.result?.XXBTZEUR?.c?.[0]) {
        return res.status(200).json({
          price: parseFloat(data.result.XXBTZEUR.c[0]),
          source: 'Kraken',
          timestamp: new Date().toISOString()
        });
      }
    }
    errors.push('Kraken: ' + response.status);
  } catch (e) {
    errors.push('Kraken: ' + e.message);
  }

  // 3. Try Blockchain.info
  try {
    const response = await fetch('https://blockchain.info/ticker');
    if (response.ok) {
      const data = await response.json();
      if (data.EUR?.last) {
        return res.status(200).json({
          price: data.EUR.last,
          source: 'Blockchain.info',
          timestamp: new Date().toISOString()
        });
      }
    }
    errors.push('Blockchain.info: ' + response.status);
  } catch (e) {
    errors.push('Blockchain.info: ' + e.message);
  }

  // 4. Try Coinbase
  try {
    const response = await fetch(
      'https://api.coinbase.com/v2/prices/BTC-EUR/spot'
    );
    if (response.ok) {
      const data = await response.json();
      if (data.data?.amount) {
        return res.status(200).json({
          price: parseFloat(data.data.amount),
          source: 'Coinbase',
          timestamp: new Date().toISOString()
        });
      }
    }
    errors.push('Coinbase: ' + response.status);
  } catch (e) {
    errors.push('Coinbase: ' + e.message);
  }

  // All sources failed
  return res.status(500).json({
    error: 'Neizdevās iegūt BTC cenu',
    details: errors,
    timestamp: new Date().toISOString()
  });
}
