import { useState, useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine, Cell, Line, Area, ComposedChart } from 'recharts';

// Pension fund YTD data
const pensionYTDData = {
  2020: {
    Q1: { "CBL Sabalansētais": -7.23, "Luminor Sabalansētais": -9.96, "SEB Sabalansētais": -9.61, "Swedbank Stabilitāte+25": -6.04, "CBL Aktīvais": -11.0, "CBL Aktīvais USD": -9.29, "SEB Aktīvais": -13.3, "Luminor Progresīvais": -16.57, "Swedbank Dinamika USD": -14.71, "Swedbank Dinamika+60": -11.24, "Swedbank Dinamika+100": -19.0 },
    Q2: { "CBL Sabalansētais": -1.22, "Luminor Sabalansētais": -4.56, "SEB Sabalansētais": -3.57, "Swedbank Stabilitāte+25": -3.01, "CBL Aktīvais": -3.57, "CBL Aktīvais USD": -1.44, "SEB Aktīvais": -5.31, "Luminor Progresīvais": -8.05, "Swedbank Dinamika USD": -6.83, "Swedbank Dinamika+60": -5.42, "Swedbank Dinamika+100": -8.17 },
    Q3: { "CBL Sabalansētais": 0.63, "Luminor Sabalansētais": -3.84, "SEB Sabalansētais": -2.39, "Swedbank Stabilitāte+25": -1.52, "CBL Aktīvais": -1.24, "CBL Aktīvais USD": 1.56, "SEB Aktīvais": -3.74, "Luminor Progresīvais": -5.75, "Swedbank Dinamika USD": -2.67, "Swedbank Dinamika+60": -3.61, "Swedbank Dinamika+100": -4.52 },
    Q4: { "CBL Sabalansētais": 3.27, "Luminor Sabalansētais": -0.65, "SEB Sabalansētais": 1.5, "Swedbank Stabilitāte+25": 1.33, "CBL Aktīvais": 2.23, "CBL Aktīvais USD": 7.22, "SEB Aktīvais": 1.6, "Luminor Progresīvais": 1.02, "Swedbank Dinamika USD": 7.88, "Swedbank Dinamika+60": 1.23, "Swedbank Dinamika+100": 3.4 }
  },
  2021: {
    Q1: { "CBL Sabalansētais": 0.18, "Luminor Sabalansētais": 0.06, "SEB Sabalansētais": 0.91, "Swedbank Stabilitāte+25": -0.02, "CBL Aktīvais": 1.78, "CBL Aktīvais USD": 0.21, "SEB Aktīvais": 2.7, "Luminor Progresīvais": 4.24, "Swedbank Dinamika USD": 0.64, "Swedbank Dinamika+60": 3.03, "Swedbank Dinamika+100": 8.58 },
    Q2: { "CBL Sabalansētais": 2.36, "Luminor Sabalansētais": 2.02, "SEB Sabalansētais": 3.22, "Swedbank Stabilitāte+25": 0.58, "CBL Aktīvais": 4.37, "CBL Aktīvais USD": 3.56, "SEB Aktīvais": 6.26, "Luminor Progresīvais": 8.62, "Swedbank Dinamika USD": 7.21, "Swedbank Dinamika+60": 5.61, "Swedbank Dinamika+100": 14.96 },
    Q3: { "CBL Sabalansētais": 2.2, "Luminor Sabalansētais": 2.12, "SEB Sabalansētais": 3.36, "Swedbank Stabilitāte+25": 1.01, "CBL Aktīvais": 3.95, "CBL Aktīvais USD": 2.8, "SEB Aktīvais": 6.76, "Luminor Progresīvais": 9.26, "Swedbank Dinamika USD": 5.91, "Swedbank Dinamika+60": 6.9, "Swedbank Dinamika+100": 17.27 },
    Q4: { "CBL Sabalansētais": 3.0, "Luminor Sabalansētais": 3.18, "SEB Sabalansētais": 4.63, "Swedbank Stabilitāte+25": 1.24, "CBL Aktīvais": 6.56, "CBL Aktīvais USD": 5.04, "SEB Aktīvais": 10.17, "Luminor Progresīvais": 14.28, "Swedbank Dinamika USD": 10.39, "Swedbank Dinamika+60": 10.31, "Swedbank Dinamika+100": 27.02 }
  },
  2022: {
    Q1: { "CBL Sabalansētais": -7.01, "Luminor Sabalansētais": -5.88, "SEB Sabalansētais": -4.82, "Swedbank Stabilitāte+25": -5.39, "CBL Aktīvais": -6.9, "CBL Aktīvais USD": -6.89, "SEB Aktīvais": -4.87, "Luminor Progresīvais": -5.12, "Swedbank Dinamika USD": -8.08, "Swedbank Dinamika+60": -5.24, "SEB Indeksu": -2.77, "Luminor Indeksu": -4.8, "Swedbank Dinamika Indekss": -4.44, "Swedbank Dinamika+100": -4.99 },
    Q2: { "CBL Sabalansētais": -14.17, "Luminor Sabalansētais": -13.55, "SEB Sabalansētais": -11.77, "Swedbank Stabilitāte+25": -13.48, "CBL Aktīvais": -15.27, "CBL Aktīvais USD": -16.94, "SEB Aktīvais": -13.0, "Luminor Progresīvais": -13.69, "Swedbank Dinamika USD": -19.04, "Swedbank Dinamika+60": -14.44, "SEB Indeksu": -12.52, "Luminor Indeksu": -15.45, "Swedbank Dinamika Indekss": -16.16, "Swedbank Dinamika+100": -15.82 },
    Q3: { "INDEXO Obligāciju": -13.61, "CBL Sabalansētais": -17.12, "Luminor Sabalansētais": -16.08, "SEB Sabalansētais": -13.77, "Swedbank Stabilitāte+25": -15.71, "CBL Aktīvais": -17.79, "CBL Aktīvais USD": -21.08, "SEB Aktīvais": -14.57, "Luminor Progresīvais": -15.34, "Swedbank Dinamika USD": -22.27, "Swedbank Dinamika+60": -15.4, "INDEXO Akciju": -12.78, "Luminor Indeksu": -16.4, "SEB Indeksu": -13.18, "Swedbank Dinamika Indekss": -16.07, "Swedbank Dinamika+100": -16.35 },
    Q4: { "INDEXO Obligāciju": -13.34, "CBL Sabalansētais": -15.76, "Luminor Sabalansētais": -15.43, "SEB Sabalansētais": -12.7, "Swedbank Stabilitāte+25": -14.7, "CBL Aktīvais": -16.23, "CBL Aktīvais USD": -16.84, "SEB Aktīvais": -13.68, "Luminor Progresīvais": -15.1, "Swedbank Dinamika+60": -15.65, "INDEXO Akciju": -13.39, "Luminor Indeksu": -16.43, "SEB Klimata Indeksu": -13.0, "Swedbank Dinamika Indekss": -17.3, "Swedbank Dinamika+100": -16.08 }
  },
  2023: {
    Q1: { "INDEXO Obligāciju": 1.23, "CBL Sabalansētais": 2.47, "Luminor Sabalansētais": 1.47, "SEB Sabalansētais": 2.68, "Swedbank Stabilitāte+25": 1.11, "CBL Aktīvais": 2.7, "CBL Aktīvais USD": 2.86, "SEB Aktīvais": 2.0, "Luminor Progresīvais": 2.49, "Swedbank Dinamika+60": 2.97, "INDEXO Akciju": 4.69, "Luminor Indeksu": 5.05, "SEB Klimata Indeksu": 4.03, "Swedbank Dinamika Indekss": 6.3, "Swedbank Dinamika+100": 5.29 },
    Q2: { "INDEXO Obligāciju": 1.4, "CBL Sabalansētais": 3.86, "Luminor Sabalansētais": 3.31, "SEB Sabalansētais": 3.93, "Swedbank Stabilitāte+25": 2.24, "CBL Aktīvais": 5.33, "CBL Aktīvais USD": 5.24, "SEB Aktīvais": 5.97, "Luminor Progresīvais": 7.01, "Swedbank Dinamika+60": 5.99, "INDEXO Akciju": 11.94, "Luminor Indeksu": 10.74, "SEB Klimata Indeksu": 11.35, "Swedbank Dinamika Indekss": 12.58, "Swedbank Dinamika+100": 10.85 },
    Q3: { "INDEXO Obligāciju": 0.16, "CBL Sabalansētais": 3.09, "Luminor Sabalansētais": 2.48, "SEB Sabalansētais": 3.53, "Swedbank Stabilitāte+25": 1.78, "CBL Aktīvais": 4.57, "CBL Aktīvais USD": 2.42, "SEB Aktīvais": 5.72, "Luminor Progresīvais": 6.8, "Swedbank Dinamika+60": 5.06, "INDEXO Akciju": 12.06, "Luminor Indeksu": 8.69, "SEB Klimata Indeksu": 11.46, "Swedbank Dinamika Indekss": 11.53, "Swedbank Dinamika+100": 9.7 },
    Q4: { "INDEXO Obligāciju": 6.37, "CBL Sabalansētais": 8.42, "Luminor Sabalansētais": 8.38, "SEB Sabalansētais": 8.66, "Swedbank Stabilitāte+25": 7.01, "CBL Aktīvais": 10.25, "CBL Aktīvais USD": 10.29, "SEB Aktīvais": 11.27, "Luminor Progresīvais": 12.71, "Swedbank Dinamika+60": 11.73, "INDEXO Akciju": 18.6, "Luminor Indeksu": 15.38, "SEB Klimata Indeksu": 18.77, "Swedbank Dinamika Indekss": 19.05, "Swedbank Dinamika+100": 16.99 }
  },
  2024: {
    Q1: { "INDEXO Obligāciju": -0.33, "CBL Sabalansētais": 2.45, "Luminor Nākotne 55+": 2.46, "SEB Sabalansētais": 2.57, "Swedbank Stabilitāte+25": 1.10, "CBL Aktīvais": 4.06, "CBL Aktīvais USD": 3.09, "SEB Aktīvais": 4.80, "Luminor Nākotne 50-55": 7.51, "Swedbank Dinamika+60": 4.89, "CBL Indeksu": 9.18, "INDEXO Akciju": 11.25, "Luminor Ilgtspējīgā nākotne": 7.10, "SEB Klimata Indeksu": 10.45, "Swedbank Dinamika Indekss": 9.42, "Swedbank Dinamika+100": 9.27 },
    Q2: { "INDEXO Obligāciju": -0.78, "CBL Sabalansētais": 3.53, "Luminor Nākotne 55+": 3.42, "SEB Sabalansētais": 3.69, "Swedbank Stabilitāte+25": 0.97, "CBL Aktīvais": 5.33, "CBL Aktīvais USD": 3.68, "SEB Aktīvais": 6.96, "Luminor Nākotne 50-55": 10.64, "Swedbank Dinamika+60": 5.74, "CBL Indeksu": 13.53, "INDEXO Akciju": 15.53, "Luminor Ilgtspējīgā nākotne": 8.52, "SEB Klimata Indeksu": 15.75, "Swedbank Dinamika Indekss": 12.32, "Swedbank Dinamika+100": 12.11 },
    Q3: { "INDEXO Obligāciju": 1.95, "CBL Sabalansētais": 6.14, "Luminor Nākotne 55+": 6.62, "SEB Sabalansētais": 6.28, "Swedbank Stabilitāte+25": 3.77, "CBL Aktīvais": 7.81, "CBL Aktīvais USD": 8.25, "SEB Aktīvais": 9.19, "Luminor Nākotne 50-55": 12.77, "Swedbank Dinamika+60": 8.42, "CBL Indeksu": 16.00, "INDEXO Akciju": 16.82, "Luminor Ilgtspējīgā nākotne": 11.73, "SEB Klimata Indeksu": 17.36, "Swedbank Dinamika Indekss": 14.54, "Swedbank Dinamika+100": 14.07 },
    Q4: { "INDEXO Obligāciju": 2.34, "CBL Sabalansētais": 6.29, "Luminor Nākotne 55+": 8.55, "SEB Sabalansētais": 7.96, "Swedbank Stabilitāte+25": 4.78, "CBL Aktīvais": 8.41, "CBL Aktīvais USD": 5.27, "SEB Aktīvais": 12.77, "Luminor Nākotne 50-55": 18.57, "Swedbank Dinamika+60": 11.24, "CBL Indeksu": 21.21, "INDEXO Akciju": 25.10, "Luminor Ilgtspējīgā nākotne": 16.01, "SEB Klimata Indeksu": 25.09, "Swedbank Dinamika Indekss": 21.19, "Swedbank Dinamika+100": 18.85 }
  },
  2025: {
    Q1: { "INDEXO Obligāciju": -0.21, "CBL Sabalansētais": -0.71, "Luminor Nākotne 55+": -1.6, "SEB Sabalansētais": -1.01, "Swedbank Stabilitāte+25": -0.2, "CBL Aktīvais": -1.68, "CBL Aktīvais USD": 0.52, "SEB Aktīvais": -2.92, "Luminor Nākotne 50-55": -4.86, "Swedbank Dinamika+60": -3.56, "CBL Indeksu": -6.48, "INDEXO Akciju": -5.9, "Luminor Ilgtspējīgā nākotne": -7.54, "SEB Klimata Indeksu": -6.39, "Swedbank Dinamika Indekss": -7.75, "Swedbank Dinamika+100": -6.79 },
    Q2: { "INDEXO Obligāciju": 1.01, "CBL Sabalansētais": 0.45, "Luminor Nākotne 55+": 0.57, "SEB Sabalansētais": 0.74, "Swedbank Stabilitāte+25": 0.9, "CBL Aktīvais": 0.37, "CBL Aktīvais USD": 4.29, "SEB Aktīvais": -0.81, "Luminor Nākotne 50-55": -2.47, "Swedbank Dinamika+60": -1.61, "CBL Indeksu": -1.22, "INDEXO Akciju": -3.6, "Luminor Ilgtspējīgā nākotne": -4.83, "SEB Klimata Indeksu": -4.14, "Swedbank Dinamika Indekss": -5.13, "Swedbank Dinamika+100": -3.83 },
    Q3: { "INDEXO Obligāciju": 1.46, "CBL Sabalansētais": 2.88, "Luminor Nākotne 55+": 2.98, "SEB Sabalansētais": 3.06, "Swedbank Stabilitāte+25": 1.84, "CBL Aktīvais": 3.52, "CBL Aktīvais USD": 8.37, "SEB Aktīvais": 2.9, "Luminor Nākotne 50-55": 2.88, "Swedbank Dinamika+60": 1.73, "CBL Indeksu": 5.4, "INDEXO Akciju": 3.03, "Luminor Ilgtspējīgā nākotne": -1.18, "SEB Klimata Indeksu": 2.66, "Swedbank Dinamika Indekss": 0.99, "Swedbank Dinamika+100": 2.52 }
  }
};

const btcPricesEUR = {
  2020: { start: 6412.85, Q1: 5805.57, Q2: 8163.96, Q3: 9229.99, Q4: 23538.60 },
  2021: { start: 23538.60, Q1: 50044.00, Q2: 30225.00, Q3: 35846.00, Q4: 40712.54 },
  2022: { start: 40712.54, Q1: 41400.00, Q2: 18100.00, Q3: 19400.00, Q4: 15550.00 },
  2023: { start: 15550.00, Q1: 25987.45, Q2: 28008.52, Q3: 24800.00, Q4: 38859.31 },
  2024: { start: 38859.31, Q1: 65380.99, Q2: 57260.01, Q3: 57478.97, Q4: 90432.21 },
  2025: { start: 90432.21, Q1: 76084.00, Q2: 92416.00, Q3: 97169.10 }
};

const years = [2020, 2021, 2022, 2023, 2024, 2025];

const allQuarters = [];
years.forEach(year => {
  const quarters = year === 2025 ? ['Q1', 'Q2', 'Q3'] : ['Q1', 'Q2', 'Q3', 'Q4'];
  quarters.forEach(q => {
    allQuarters.push({ year, quarter: q, label: `${year} ${q}` });
  });
});

// Build index data
const buildIndexData = () => {
  let btcIndex = 100;
  let pensionIndices = {};
  const data = [{ period: '2020 Sāk.', btc: 100, avgPension: 100, bestPension: 100, worstPension: 100 }];
  
  years.forEach(year => {
    const prices = btcPricesEUR[year];
    const ytdData = pensionYTDData[year];
    let prevBtcPrice = prices.start;
    
    const quarters = year === 2025 ? ['Q1', 'Q2', 'Q3'] : ['Q1', 'Q2', 'Q3', 'Q4'];
    quarters.forEach((q, qi) => {
      const btcPrice = prices[q];
      if (!btcPrice) return;
      const btcQReturn = (btcPrice - prevBtcPrice) / prevBtcPrice;
      btcIndex = btcIndex * (1 + btcQReturn);
      prevBtcPrice = btcPrice;
      
      const qData = ytdData[q];
      if (!qData) return;
      const prevQ = qi === 0 ? null : quarters[qi - 1];
      const prevQData = prevQ ? ytdData[prevQ] : null;
      
      const qReturns = [];
      Object.keys(qData).forEach(fund => {
        let qReturn;
        if (prevQData && prevQData[fund] !== undefined) {
          qReturn = ((1 + qData[fund]/100) / (1 + prevQData[fund]/100)) - 1;
        } else {
          qReturn = qData[fund] / 100;
        }
        if (!pensionIndices[fund]) pensionIndices[fund] = 100;
        pensionIndices[fund] = pensionIndices[fund] * (1 + qReturn);
        qReturns.push(pensionIndices[fund]);
      });
      
      const avgIdx = qReturns.reduce((s, v) => s + v, 0) / qReturns.length;
      data.push({
        period: `${year} ${q}`,
        btc: btcIndex,
        avgPension: avgIdx,
        bestPension: Math.max(...qReturns),
        worstPension: Math.min(...qReturns),
        btcPrice: btcPrice
      });
    });
  });
  return data;
};

const indexData = buildIndexData();

// Calculate yearly returns
const calcYearlyReturns = (year) => {
  const ytdData = pensionYTDData[year];
  const lastQuarter = year === 2025 ? 'Q3' : 'Q4';
  const qData = ytdData[lastQuarter];
  if (!qData) return [];
  
  const results = Object.keys(qData).map(fund => ({ name: fund, return: qData[fund] }));
  const prices = btcPricesEUR[year];
  const btcReturn = ((prices[lastQuarter] - prices.start) / prices.start) * 100;
  results.push({ name: '₿ Bitcoin', return: btcReturn, isBitcoin: true });
  
  return results.sort((a, b) => b.return - a.return);
};

export default function PensionComparison() {
  const [rangeStart, setRangeStart] = useState(0);
  const [rangeEnd, setRangeEnd] = useState(allQuarters.length - 1);
  const [showBest, setShowBest] = useState(true);
  const [showWorst, setShowWorst] = useState(false);
  const [selectedYear, setSelectedYear] = useState(2024);

  const periodStats = useMemo(() => {
    const startIdx = rangeStart + 1;
    const endIdx = rangeEnd + 1;
    const startData = indexData[startIdx - 1] || indexData[0];
    const endData = indexData[endIdx] || indexData[indexData.length - 1];
    
    const btcReturn = ((endData.btc / startData.btc) - 1) * 100;
    const avgReturn = ((endData.avgPension / startData.avgPension) - 1) * 100;
    const bestReturn = ((endData.bestPension / startData.bestPension) - 1) * 100;
    const worstReturn = ((endData.worstPension / startData.worstPension) - 1) * 100;
    
    const startQ = allQuarters[rangeStart];
    const endQ = allQuarters[rangeEnd];
    const startPrice = rangeStart === 0 ? btcPricesEUR[startQ.year].start : btcPricesEUR[startQ.year][startQ.quarter];
    const endPrice = btcPricesEUR[endQ.year][endQ.quarter];
    
    return { btcReturn, avgReturn, bestReturn, worstReturn, startPrice, endPrice };
  }, [rangeStart, rangeEnd]);

  const chartData = useMemo(() => {
    return indexData.slice(Math.max(0, rangeStart), Math.min(indexData.length, rangeEnd + 2));
  }, [rangeStart, rangeEnd]);

  const yearlyReturns = useMemo(() => calcYearlyReturns(selectedYear), [selectedYear]);

  const startLabel = allQuarters[rangeStart]?.label || '2020 Q1';
  const endLabel = allQuarters[rangeEnd]?.label || '2025 Q3';
  const quarterCount = rangeEnd - rangeStart + 1;
  const yearCount = (quarterCount / 4).toFixed(1);

  const investmentAmount = 1000;
  const taxBenefit = 255;

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
      {/* Period Selector */}
      <div className="card" style={{ marginBottom: '16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '10px' }}>
          <h3 style={{ color: '#fef3c7', fontSize: '14px', fontWeight: 600, margin: 0 }}>📅 Periods</h3>
          <div style={{ background: 'rgba(251, 146, 60, 0.2)', padding: '6px 14px', borderRadius: '20px', border: '1px solid rgba(251, 146, 60, 0.4)' }}>
            <span style={{ color: '#fb923c', fontWeight: 600, fontSize: '13px' }}>{startLabel} → {endLabel}</span>
            <span style={{ color: '#a3a3a3', fontSize: '11px', marginLeft: '8px' }}>({quarterCount} cet. / ~{yearCount}g)</span>
          </div>
        </div>
        
        <div style={{ marginBottom: '12px' }}>
          <span style={{ color: '#a3a3a3', fontSize: '11px' }}>Sākums: <strong style={{ color: '#22d3ee' }}>{startLabel}</strong></span>
          <input type="range" className="range-slider" min={0} max={allQuarters.length - 1} value={rangeStart}
            onChange={(e) => { const val = parseInt(e.target.value); if (val < rangeEnd) setRangeStart(val); }} />
        </div>
        
        <div style={{ marginBottom: '12px' }}>
          <span style={{ color: '#a3a3a3', fontSize: '11px' }}>Beigas: <strong style={{ color: '#a855f7' }}>{endLabel}</strong></span>
          <input type="range" className="range-slider" min={0} max={allQuarters.length - 1} value={rangeEnd}
            onChange={(e) => { const val = parseInt(e.target.value); if (val > rangeStart) setRangeEnd(val); }} />
        </div>
        
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
          {years.map(y => (
            <button key={y} className="toggle-btn" onClick={() => { 
              const startIdx = (y - 2020) * 4;
              const endIdx = y === 2025 ? startIdx + 2 : startIdx + 3;
              setRangeStart(startIdx); setRangeEnd(endIdx);
            }}>{y}</button>
          ))}
          <button className="toggle-btn" onClick={() => { setRangeStart(0); setRangeEnd(allQuarters.length - 1); }}>Viss</button>
        </div>
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '10px', marginBottom: '20px' }}>
        <div className="stat-card bitcoin-card">
          <div style={{ color: '#fb923c', fontSize: '10px', marginBottom: '4px' }}>₿ BITCOIN</div>
          <div style={{ fontFamily: "'JetBrains Mono'", fontSize: '22px', fontWeight: 700, color: periodStats.btcReturn >= 0 ? '#fb923c' : '#ef4444' }}>
            {periodStats.btcReturn >= 0 ? '+' : ''}{periodStats.btcReturn.toFixed(1)}%
          </div>
        </div>
        <div className="stat-card">
          <div style={{ color: '#a3a3a3', fontSize: '10px', marginBottom: '4px' }}>📊 Vidējais fonds</div>
          <div style={{ fontFamily: "'JetBrains Mono'", fontSize: '22px', fontWeight: 700, color: periodStats.avgReturn >= 0 ? '#22d3ee' : '#ef4444' }}>
            {periodStats.avgReturn >= 0 ? '+' : ''}{periodStats.avgReturn.toFixed(1)}%
          </div>
        </div>
        <div className="stat-card">
          <div style={{ color: '#a3a3a3', fontSize: '10px', marginBottom: '4px' }}>🏆 Labākais</div>
          <div style={{ fontFamily: "'JetBrains Mono'", fontSize: '22px', fontWeight: 700, color: periodStats.bestReturn >= 0 ? '#a855f7' : '#ef4444' }}>
            {periodStats.bestReturn >= 0 ? '+' : ''}{periodStats.bestReturn.toFixed(1)}%
          </div>
        </div>
        <div className="stat-card">
          <div style={{ color: '#a3a3a3', fontSize: '10px', marginBottom: '4px' }}>⚡ BTC vs Vid.</div>
          <div style={{ fontFamily: "'JetBrains Mono'", fontSize: '22px', fontWeight: 700, color: (periodStats.btcReturn - periodStats.avgReturn) >= 0 ? '#fb923c' : '#22d3ee' }}>
            {(periodStats.btcReturn - periodStats.avgReturn) >= 0 ? '+' : ''}{(periodStats.btcReturn - periodStats.avgReturn).toFixed(0)}pp
          </div>
        </div>
      </div>

      {/* Index Chart */}
      <div className="card" style={{ marginBottom: '20px' }}>
        <div style={{ marginBottom: '12px' }}>
          <h3 style={{ color: '#fef3c7', fontSize: '13px', fontWeight: 600, margin: 0, marginBottom: '10px' }}>📈 Indekss (sākums = 100)</h3>
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            <button className={`toggle-btn ${showBest ? 'active' : ''}`} onClick={() => setShowBest(!showBest)}>🏆 Labākais</button>
            <button className={`toggle-btn ${showWorst ? 'active' : ''}`} onClick={() => setShowWorst(!showWorst)}>📉 Sliktākais</button>
          </div>
        </div>
        
        <div style={{ height: 280, marginLeft: '-10px', marginRight: '-5px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={chartData} margin={{ top: 10, right: 10, left: -5, bottom: 0 }}>
              <defs>
                <linearGradient id="btcFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#fb923c" stopOpacity={0.4}/>
                  <stop offset="95%" stopColor="#fb923c" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="pensionFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#22d3ee" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(251, 146, 60, 0.1)" />
              <XAxis dataKey="period" stroke="#78716c" tick={{ fill: '#a3a3a3', fontSize: 8 }} interval="preserveStartEnd" />
              <YAxis stroke="#78716c" tick={{ fill: '#a3a3a3', fontSize: 8 }} tickFormatter={(v) => v.toFixed(0)} width={35} />
              <Tooltip 
                contentStyle={{ background: 'rgba(26, 10, 0, 0.95)', border: '1px solid rgba(251, 146, 60, 0.4)', borderRadius: '8px', fontSize: '11px' }}
                labelStyle={{ color: '#fef3c7', fontWeight: 600, marginBottom: '4px' }}
                itemStyle={{ color: '#fef3c7' }}
                formatter={(value, name) => [value.toFixed(1), { btc: '₿ Bitcoin', avgPension: '📊 Vidējais', bestPension: '🏆 Labākais', worstPension: '📉 Sliktākais' }[name] || name]} />
              <ReferenceLine y={100} stroke="#78716c" strokeDasharray="5 5" />
              <Area type="monotone" dataKey="btc" stroke="#fb923c" fill="url(#btcFill)" strokeWidth={3} />
              <Area type="monotone" dataKey="avgPension" stroke="#22d3ee" fill="url(#pensionFill)" strokeWidth={2} />
              {showBest && <Line type="monotone" dataKey="bestPension" stroke="#a855f7" strokeWidth={2} dot={false} strokeDasharray="5 5" />}
              {showWorst && <Line type="monotone" dataKey="worstPension" stroke="#ef4444" strokeWidth={2} dot={false} strokeDasharray="5 5" />}
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Yearly Bar Chart */}
      <div className="card" style={{ marginBottom: '20px' }}>
        <div style={{ marginBottom: '12px' }}>
          <h3 style={{ color: '#fef3c7', fontSize: '13px', fontWeight: 600, margin: 0, marginBottom: '10px' }}>
            📊 Gada ienesīgums <span style={{ color: '#fb923c' }}>{selectedYear}{selectedYear === 2025 ? ' (YTD)' : ''}</span>
          </h3>
          <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
            {years.map(y => (
              <button key={y} className={`toggle-btn ${selectedYear === y ? 'active' : ''}`} onClick={() => setSelectedYear(y)} style={{ minWidth: '44px' }}>{y}</button>
            ))}
          </div>
        </div>
        
        <div style={{ height: 420, marginLeft: '-10px', marginRight: '-10px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={yearlyReturns} layout="vertical" margin={{ top: 5, right: 15, left: 5, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(251, 146, 60, 0.1)" />
              <XAxis type="number" stroke="#78716c" tick={{ fill: '#a3a3a3', fontSize: 9 }} tickFormatter={(v) => `${v.toFixed(0)}%`} />
              <YAxis type="category" dataKey="name" stroke="#78716c" tick={{ fill: '#a3a3a3', fontSize: 8 }} width={95} />
              <Tooltip 
                cursor={false} 
                contentStyle={{ background: '#1a0a00', border: '2px solid #fb923c', borderRadius: '8px', padding: '8px 12px' }}
                labelStyle={{ color: '#fb923c', fontWeight: 700, fontSize: '13px', marginBottom: '4px' }}
                itemStyle={{ color: '#22d3ee', fontWeight: 600, fontSize: '14px' }}
                formatter={(value) => [`${value >= 0 ? '+' : ''}${value.toFixed(2)}%`, null]} />
              <ReferenceLine x={0} stroke="#78716c" />
              <Bar dataKey="return" radius={[0, 4, 4, 0]}>
                {yearlyReturns.map((entry, index) => (
                  <Cell key={index} fill={entry.isBitcoin ? '#fb923c' : entry.return >= 0 ? '#22d3ee' : '#ef4444'} 
                    stroke={entry.isBitcoin ? '#ea580c' : 'none'} strokeWidth={entry.isBitcoin ? 2 : 0} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Investment Calculator */}
      <div className="card">
        <h3 style={{ color: '#fef3c7', fontSize: '13px', marginBottom: '12px', fontWeight: 600 }}>
          💡 €{investmentAmount} ieguldījums periodā
        </h3>
        
        <div style={{ background: 'rgba(34, 211, 238, 0.1)', border: '1px solid rgba(34, 211, 238, 0.3)', borderRadius: '10px', padding: '10px', marginBottom: '14px' }}>
          <div style={{ color: '#22d3ee', fontSize: '11px', fontWeight: 600, marginBottom: '4px' }}>🏦 IIN atmaksa (25.5%)</div>
          <div style={{ color: '#a3a3a3', fontSize: '10px' }}>
            Efektīvās izmaksas: €{investmentAmount} - €{taxBenefit} = <strong style={{ color: '#a855f7' }}>€{investmentAmount - taxBenefit}</strong>
          </div>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '10px' }}>
          <div style={{ textAlign: 'center', padding: '12px', background: 'rgba(251, 146, 60, 0.15)', borderRadius: '10px' }}>
            <div style={{ color: '#fb923c', fontSize: '10px', marginBottom: '2px' }}>₿ Bitcoin</div>
            <div style={{ color: '#fb923c', fontSize: '20px', fontWeight: 700, fontFamily: "'JetBrains Mono'" }}>
              €{(investmentAmount * (1 + periodStats.btcReturn / 100)).toLocaleString('de-DE', {maximumFractionDigits: 0})}
            </div>
          </div>
          <div style={{ textAlign: 'center', padding: '12px', background: 'rgba(34, 211, 238, 0.1)', borderRadius: '10px' }}>
            <div style={{ color: '#22d3ee', fontSize: '10px', marginBottom: '2px' }}>📊 Vid. fonds + IIN</div>
            <div style={{ color: '#22d3ee', fontSize: '20px', fontWeight: 700, fontFamily: "'JetBrains Mono'" }}>
              €{(investmentAmount * (1 + periodStats.avgReturn / 100) + taxBenefit).toLocaleString('de-DE', {maximumFractionDigits: 0})}
            </div>
          </div>
          <div style={{ textAlign: 'center', padding: '12px', background: 'rgba(168, 85, 247, 0.1)', borderRadius: '10px' }}>
            <div style={{ color: '#a855f7', fontSize: '10px', marginBottom: '2px' }}>🏆 Labākais + IIN</div>
            <div style={{ color: '#a855f7', fontSize: '20px', fontWeight: 700, fontFamily: "'JetBrains Mono'" }}>
              €{(investmentAmount * (1 + periodStats.bestReturn / 100) + taxBenefit).toLocaleString('de-DE', {maximumFractionDigits: 0})}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
