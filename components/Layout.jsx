import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Layout({ children }) {
  const router = useRouter();
  
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #1a0a00 0%, #2d1810 30%, #1a0a00 100%)',
      padding: '20px 16px',
      fontFamily: "'Space Grotesk', system-ui, sans-serif"
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap');
        
        .card {
          background: rgba(45, 25, 15, 0.6);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(251, 146, 60, 0.15);
          border-radius: 16px;
          padding: 20px;
          outline: none;
          overflow: hidden;
        }
        
        @media (max-width: 480px) {
          .card {
            padding: 14px;
            border-radius: 12px;
          }
          .toggle-btn {
            padding: 5px 10px;
            font-size: 10px;
          }
          .stat-card {
            padding: 10px;
          }
        }
        
        .stat-card {
          background: rgba(45, 25, 15, 0.7);
          border: 1px solid rgba(251, 146, 60, 0.25);
          border-radius: 12px;
          padding: 14px;
          transition: all 0.3s ease;
        }
        .stat-card:hover { 
          border-color: rgba(251, 146, 60, 0.5); 
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(251, 146, 60, 0.15);
        }
        .bitcoin-card { 
          background: linear-gradient(135deg, rgba(251, 146, 60, 0.2), rgba(234, 88, 12, 0.15)); 
          border-color: rgba(251, 146, 60, 0.5); 
        }
        
        .input-group {
          background: rgba(45, 25, 15, 0.6);
          border: 1px solid rgba(251, 146, 60, 0.15);
          border-radius: 14px;
          padding: 14px 18px;
          margin-bottom: 10px;
          transition: all 0.3s ease;
          outline: none;
        }
        .input-group:hover { border-color: rgba(251, 146, 60, 0.3); }
        .input-group:focus-within { 
          border-color: rgba(251, 146, 60, 0.5); 
          box-shadow: 0 0 24px rgba(251, 146, 60, 0.15);
          background: rgba(55, 30, 18, 0.7);
        }
        
        .input-label { display: flex; align-items: center; gap: 8px; margin-bottom: 6px; }
        .currency-icon { font-size: 16px; }
        .currency-name { font-size: 11px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px; }
        
        .currency-input {
          background: transparent; border: none; color: #fef3c7;
          font-family: 'JetBrains Mono', monospace; font-size: 26px; font-weight: 600;
          width: 100%; outline: none;
        }
        .currency-input::placeholder { color: #57534e; }
        
        .divider { display: flex; align-items: center; justify-content: center; margin: 12px 0; }
        .divider-line { flex: 1; height: 1px; background: linear-gradient(90deg, transparent, rgba(251, 146, 60, 0.25), transparent); }
        .divider-icon { color: #fb923c; font-size: 18px; margin: 0 10px; opacity: 0.8; }
        
        .price-display {
          background: linear-gradient(135deg, rgba(251, 146, 60, 0.12), rgba(234, 88, 12, 0.08));
          border: 1px solid rgba(251, 146, 60, 0.25); 
          border-radius: 12px;
          padding: 14px; 
          text-align: center; 
          margin-top: 16px;
        }
        .price-label { color: #a3a3a3; font-size: 10px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; }
        .price-value { color: #fb923c; font-family: 'JetBrains Mono', monospace; font-size: 22px; font-weight: 700; }
        .last-updated { color: #57534e; font-size: 9px; margin-top: 6px; }
        
        .refresh-btn {
          background: transparent; 
          border: 1px solid rgba(251, 146, 60, 0.25); 
          color: #fb923c;
          padding: 4px 10px; 
          border-radius: 6px; 
          font-size: 10px; 
          cursor: pointer; 
          transition: all 0.2s; 
          margin-left: 6px;
        }
        .refresh-btn:hover { 
          background: rgba(251, 146, 60, 0.1); 
          border-color: rgba(251, 146, 60, 0.5); 
        }
        
        .range-slider {
          -webkit-appearance: none; 
          width: 100%; 
          height: 6px; 
          border-radius: 3px;
          background: linear-gradient(to right, #2d1810, #4a2c1a); 
          outline: none; 
          margin: 8px 0;
        }
        .range-slider::-webkit-slider-thumb {
          -webkit-appearance: none; 
          width: 20px; 
          height: 20px; 
          border-radius: 50%;
          background: linear-gradient(135deg, #fb923c, #ea580c); 
          cursor: pointer;
          border: 3px solid #1a0a00; 
          box-shadow: 0 0 12px rgba(251, 146, 60, 0.5);
          transition: box-shadow 0.2s;
        }
        .range-slider::-webkit-slider-thumb:hover {
          box-shadow: 0 0 20px rgba(251, 146, 60, 0.7);
        }
        .range-slider::-moz-range-thumb {
          width: 20px; 
          height: 20px; 
          border-radius: 50%;
          background: linear-gradient(135deg, #fb923c, #ea580c); 
          cursor: pointer;
          border: 3px solid #1a0a00;
        }
        
        .toggle-btn {
          padding: 6px 12px; 
          border: 1px solid rgba(251, 146, 60, 0.25); 
          border-radius: 8px;
          background: rgba(45, 25, 15, 0.6); 
          color: #a3a3a3; 
          font-size: 11px; 
          cursor: pointer; 
          transition: all 0.2s;
          outline: none;
        }
        .toggle-btn.active { 
          border-color: rgba(251, 146, 60, 0.6); 
          background: rgba(251, 146, 60, 0.2); 
          color: #fef3c7;
          box-shadow: 0 0 12px rgba(251, 146, 60, 0.15);
        }
        .toggle-btn:hover:not(.active) { 
          border-color: rgba(251, 146, 60, 0.4); 
          color: #d6d3d1;
          background: rgba(251, 146, 60, 0.1);
        }
        
        .tab-link {
          display: inline-block;
          padding: 12px 24px; 
          border: none; 
          border-radius: 12px;
          background: rgba(45, 25, 15, 0.5); 
          color: #a3a3a3; 
          font-size: 14px; 
          font-weight: 600;
          cursor: pointer; 
          transition: all 0.3s ease; 
          text-decoration: none;
          margin: 0 4px;
          outline: none;
        }
        .tab-link.active {
          background: rgba(251, 146, 60, 0.2); 
          color: #fb923c;
          box-shadow: 0 0 20px rgba(251, 146, 60, 0.2);
        }
        .tab-link:hover:not(.active) { 
          background: rgba(251, 146, 60, 0.1); 
          color: #d6d3d1; 
        }
        
        .content-area {
          background: rgba(35, 20, 12, 0.5);
          border-radius: 20px;
          padding: 24px;
          min-height: 500px;
          border: 1px solid rgba(251, 146, 60, 0.12);
          margin-top: 16px;
          overflow-x: hidden;
        }
        
        @media (max-width: 480px) {
          .content-area {
            padding: 14px;
            border-radius: 14px;
            margin-top: 12px;
          }
          .tab-link {
            padding: 10px 16px;
            font-size: 12px;
          }
        }
        
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
        .loading { animation: pulse 1.5s infinite; }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(251, 146, 60, 0.1); }
          50% { box-shadow: 0 0 30px rgba(251, 146, 60, 0.2); }
        }
      `}</style>

      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <h1 style={{
            fontSize: '32px', 
            fontWeight: 700,
            background: 'linear-gradient(135deg, #fb923c 0%, #f97316 50%, #ea580c 100%)',
            WebkitBackgroundClip: 'text', 
            WebkitTextFillColor: 'transparent',
            marginBottom: '8px', 
            letterSpacing: '-0.5px',
            textShadow: '0 0 40px rgba(251, 146, 60, 0.3)'
          }}>
            ₿ Bitcoin Rīki
          </h1>
          <p style={{ color: '#a3a3a3', fontSize: '13px', letterSpacing: '0.5px' }}>
            Pensiju fondu salīdzinājums • BTC Kalkulators • Izglītība
          </p>
        </div>

        {/* Navigation Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '4px' }}>
          <Link href="/" className={`tab-link ${router.pathname === '/' ? 'active' : ''}`}>
            📊 Pensijas vs BTC
          </Link>
          <Link href="/kalkulators" className={`tab-link ${router.pathname === '/kalkulators' ? 'active' : ''}`}>
            💱 Kalkulators
          </Link>
          <Link href="/par-bitcoin" className={`tab-link ${router.pathname === '/par-bitcoin' ? 'active' : ''}`}>
            ₿ Par Bitcoin
          </Link>
        </div>

        {/* Content */}
        <div className="content-area">
          {children}
        </div>

        {/* Footer */}
        <div style={{ 
          marginTop: '20px', 
          textAlign: 'center', 
          color: '#a8a29e', 
          fontSize: '10px',
          letterSpacing: '0.3px'
        }}>
          Pensiju dati: FKTK • BTC/EUR: CoinGecko/Kraken • IIN atmaksa: 25.5% līdz €4000/gadā
        </div>
      </div>
    </div>
  );
}
