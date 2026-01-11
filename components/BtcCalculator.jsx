import { useState, useEffect, useCallback } from 'react';

export default function BtcCalculator({ btcPrice, priceSource, lastUpdated, loading, fetchPrice }) {
  const [eurAmount, setEurAmount] = useState('100');
  const [btcAmount, setBtcAmount] = useState('');
  const [satsAmount, setSatsAmount] = useState('');
  const [activeInput, setActiveInput] = useState('eur');
  const [manualPriceMode, setManualPriceMode] = useState(false);
  const [localBtcPrice, setLocalBtcPrice] = useState(btcPrice);

  // Sync with parent price
  useEffect(() => {
    if (!manualPriceMode) {
      setLocalBtcPrice(btcPrice);
    }
  }, [btcPrice, manualPriceMode]);

  const currentPrice = manualPriceMode ? localBtcPrice : btcPrice;

  // Convert from EUR
  const convertFromEur = useCallback((eur) => {
    const eurNum = parseFloat(eur) || 0;
    const btc = eurNum / currentPrice;
    const sats = btc * 100000000;
    setBtcAmount(btc > 0 ? btc.toFixed(8) : '');
    setSatsAmount(sats > 0 ? Math.round(sats).toLocaleString('de-DE') : '');
  }, [currentPrice]);

  // Convert from BTC
  const convertFromBtc = useCallback((btc) => {
    const btcNum = parseFloat(btc) || 0;
    const eur = btcNum * currentPrice;
    const sats = btcNum * 100000000;
    setEurAmount(eur > 0 ? eur.toFixed(2) : '');
    setSatsAmount(sats > 0 ? Math.round(sats).toLocaleString('de-DE') : '');
  }, [currentPrice]);

  // Convert from Satoshis
  const convertFromSats = useCallback((sats) => {
    const satsNum = parseFloat(sats.replace(/\s/g, '').replace(/,/g, '')) || 0;
    const btc = satsNum / 100000000;
    const eur = btc * currentPrice;
    setEurAmount(eur > 0 ? eur.toFixed(2) : '');
    setBtcAmount(btc > 0 ? btc.toFixed(8) : '');
  }, [currentPrice]);

  // Update conversions when price changes
  useEffect(() => {
    if (activeInput === 'eur') convertFromEur(eurAmount);
    else if (activeInput === 'btc') convertFromBtc(btcAmount);
    else if (activeInput === 'sats') convertFromSats(satsAmount);
  }, [currentPrice]);

  const handleEurChange = (e) => {
    const value = e.target.value;
    setEurAmount(value);
    setActiveInput('eur');
    convertFromEur(value);
  };

  const handleBtcChange = (e) => {
    const value = e.target.value;
    setBtcAmount(value);
    setActiveInput('btc');
    convertFromBtc(value);
  };

  const handleSatsChange = (e) => {
    const value = e.target.value;
    setSatsAmount(value);
    setActiveInput('sats');
    convertFromSats(value);
  };

  const formatPrice = (price) => {
    return price.toLocaleString('de-DE', { maximumFractionDigits: 0 });
  };

  return (
    <div style={{ maxWidth: '420px', margin: '0 auto' }}>
      {/* EUR Input */}
      <div className="input-group">
        <div className="input-label">
          <span className="currency-icon">💶</span>
          <span className="currency-name" style={{ color: '#a855f7' }}>Euro</span>
        </div>
        <input
          type="text"
          className="currency-input"
          value={eurAmount}
          onChange={handleEurChange}
          placeholder="0.00"
          inputMode="decimal"
        />
      </div>
      
      {/* Divider */}
      <div className="divider">
        <div className="divider-line" />
        <span className="divider-icon">⇅</span>
        <div className="divider-line" />
      </div>
      
      {/* BTC Input */}
      <div className="input-group">
        <div className="input-label">
          <span className="currency-icon">₿</span>
          <span className="currency-name" style={{ color: '#fb923c' }}>Bitcoin</span>
        </div>
        <input
          type="text"
          className="currency-input"
          value={btcAmount}
          onChange={handleBtcChange}
          placeholder="0.00000000"
          inputMode="decimal"
        />
      </div>
      
      {/* Divider */}
      <div className="divider">
        <div className="divider-line" />
        <span className="divider-icon">⇅</span>
        <div className="divider-line" />
      </div>
      
      {/* Satoshi Input */}
      <div className="input-group">
        <div className="input-label">
          <span className="currency-icon">⚡</span>
          <span className="currency-name" style={{ color: '#22d3ee' }}>Satoshi</span>
        </div>
        <input
          type="text"
          className="currency-input"
          value={satsAmount}
          onChange={handleSatsChange}
          placeholder="0"
          inputMode="numeric"
        />
      </div>
      
      {/* Current Price Display */}
      <div className="price-display">
        <div className="price-label">BTC/EUR cena</div>
        {manualPriceMode ? (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
            <span style={{ color: '#fb923c', fontSize: '20px' }}>€</span>
            <input
              type="number"
              value={localBtcPrice}
              onChange={(e) => setLocalBtcPrice(parseFloat(e.target.value) || 78000)}
              style={{
                background: 'rgba(251, 146, 60, 0.1)',
                border: '1px solid rgba(251, 146, 60, 0.4)',
                borderRadius: '8px',
                color: '#fb923c',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '20px',
                fontWeight: 700,
                padding: '8px 12px',
                width: '140px',
                textAlign: 'center',
                outline: 'none'
              }}
            />
          </div>
        ) : (
          <div className={`price-value ${loading ? 'loading' : ''}`}>
            €{formatPrice(currentPrice)}
          </div>
        )}
        <div className="last-updated">
          {manualPriceMode ? (
            <>
              <span style={{ color: '#a855f7' }}>Manuāli ievadīta</span>
              <button className="refresh-btn" onClick={() => setManualPriceMode(false)}>
                🔄 Auto
              </button>
            </>
          ) : priceSource?.includes('kļūda') ? (
            <>
              <span style={{ color: '#ef4444' }}>⚠️ {priceSource}</span>
              <button className="refresh-btn" onClick={() => setManualPriceMode(true)} style={{ borderColor: '#ef4444', color: '#ef4444' }}>
                ✏️ Manuāli
              </button>
            </>
          ) : lastUpdated ? (
            <>
              {priceSource} • {lastUpdated.toLocaleTimeString('lv-LV')}
              <button className="refresh-btn" onClick={fetchPrice}>🔄</button>
              <button className="refresh-btn" onClick={() => setManualPriceMode(true)}>✏️</button>
            </>
          ) : (
            <span>Ielādē...</span>
          )}
        </div>
      </div>
      
      {/* Quick info */}
      <div style={{
        marginTop: '20px',
        padding: '14px',
        background: 'rgba(34, 211, 238, 0.08)',
        border: '1px solid rgba(34, 211, 238, 0.2)',
        borderRadius: '10px'
      }}>
        <div style={{ color: '#22d3ee', fontSize: '11px', fontWeight: 600, marginBottom: '10px', textTransform: 'uppercase' }}>
          💡 Ātrā informācija
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', fontSize: '12px' }}>
          <div style={{ color: '#a3a3a3' }}>
            1 BTC = <span style={{ color: '#fb923c', fontFamily: "'JetBrains Mono'" }}>100M sats</span>
          </div>
          <div style={{ color: '#a3a3a3' }}>
            1 sat = <span style={{ color: '#22d3ee', fontFamily: "'JetBrains Mono'" }}>€{(currentPrice / 100000000).toFixed(6)}</span>
          </div>
          <div style={{ color: '#a3a3a3' }}>
            €1 = <span style={{ color: '#a855f7', fontFamily: "'JetBrains Mono'" }}>{Math.round(100000000 / currentPrice).toLocaleString('de-DE')} sats</span>
          </div>
          <div style={{ color: '#a3a3a3' }}>
            €100 = <span style={{ color: '#fb923c', fontFamily: "'JetBrains Mono'" }}>{(100 / currentPrice).toFixed(6)} BTC</span>
          </div>
        </div>
      </div>
    </div>
  );
}
