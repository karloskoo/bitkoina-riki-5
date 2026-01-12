export default function ParBitcoin() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{
        fontSize: '24px',
        fontWeight: 700,
        color: '#fb923c',
        marginBottom: '24px',
        textAlign: 'center'
      }}>
        Kāpēc pasaule pērk bitkoinu?
      </h1>

      <div style={{
        background: 'rgba(251, 146, 60, 0.1)',
        border: '1px solid rgba(251, 146, 60, 0.3)',
        borderRadius: '12px',
        padding: '16px',
        marginBottom: '24px'
      }}>
        <p style={{ color: '#fef3c7', fontSize: '14px', lineHeight: 1.7, margin: 0 }}>
          Bitkoins pēdējos gados ir kļuvis par nopietnu finanšu instrumentu, ko iegādājas ne tikai individuālie investori, bet arī uzņēmumi un pat valstis. Aiz šīs intereses slēpas vairāki būtiski iemesli, kas atspoguļo mūsdienu ekonomikas izaicinājumus un tehnoloģiju attīstību.
        </p>
      </div>

      {/* Aizsardzība pret inflāciju */}
      <div className="card" style={{ marginBottom: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
          <span style={{ fontSize: '28px' }}>🛡️</span>
          <h2 style={{ color: '#fb923c', fontSize: '16px', fontWeight: 600, margin: 0 }}>
            Aizsardzība pret inflāciju
          </h2>
        </div>
        <p style={{ color: '#a3a3a3', fontSize: '14px', lineHeight: 1.7, margin: 0 }}>
          Bitkoins piedāvā aizsardzību pret tradicionālās naudas devalvāciju. Fiat valūtas nepārtraukti zaudē pirktspēju inflācijas dēļ – centrālās bankas turpina drukāt naudu, bet <strong style={{ color: '#22d3ee' }}>bitkoina daudzums ir stingri ierobežots līdz 21 miljonam vienību</strong>. Tas padara to par efektīvu vērtības saglabāšanas līdzekli gan laikā, gan telpā, līdzīgi zeltam, tikai digitālā formā.
        </p>
      </div>

      {/* Kapitāla brīvība */}
      <div className="card" style={{ marginBottom: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
          <span style={{ fontSize: '28px' }}>🌍</span>
          <h2 style={{ color: '#fb923c', fontSize: '16px', fontWeight: 600, margin: 0 }}>
            Kapitāla brīvība
          </h2>
        </div>
        <p style={{ color: '#a3a3a3', fontSize: '14px', lineHeight: 1.7, margin: 0 }}>
          Bitkoins ļauj izņemt kapitālu no autoritāru režīmu un nestabilu jurisdikciju kontroles. Valstīs ar vājām institūcijām vai politisku nestabilitāti cilvēki saskaras ar konta iesaldēšanas, kapitāla kontroles vai pat pilnīgas īpašuma konfiskācijas risku. Bitkoins piedāvā alternatīvu – <strong style={{ color: '#22d3ee' }}>naudu, ko nevar vienkārši atņemt vai bloķēt</strong>.
        </p>
      </div>

      {/* Nekonfiscējams īpašums */}
      <div className="card" style={{ marginBottom: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
          <span style={{ fontSize: '28px' }}>🔐</span>
          <h2 style={{ color: '#fb923c', fontSize: '16px', fontWeight: 600, margin: 0 }}>
            Nekonfiscējams īpašums
          </h2>
        </div>
        <p style={{ color: '#a3a3a3', fontSize: '14px', lineHeight: 1.7, margin: 0 }}>
          Šis nekonfiscējamais raksturs ir īpaši vērtīgs. Ja privātās atslēgas tiek pareizi glabātas, <strong style={{ color: '#22d3ee' }}>neviens – ne valdība, ne banka – nevar piekļūt jūsu līdzekļiem</strong> bez jūsu atļaujas. Tas ir fundamentāli jauns īpašumtiesību veids digitālajā laikmetā.
        </p>
      </div>

      {/* Digitālā nauda */}
      <div className="card" style={{ marginBottom: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
          <span style={{ fontSize: '28px' }}>💻</span>
          <h2 style={{ color: '#fb923c', fontSize: '16px', fontWeight: 600, margin: 0 }}>
            Patiesi digitāla nauda
          </h2>
        </div>
        <p style={{ color: '#a3a3a3', fontSize: '14px', lineHeight: 1.7, margin: 0 }}>
          Michael Saylor un citi domātāji uzsver naudas digitalizācijas neizbēgamību. Mēs jau dzīvojam digitālā pasaulē, un bitkoins ir <strong style={{ color: '#22d3ee' }}>pirmā patiesi digitālā nauda</strong> – nevis tikai skaitlis bankas datubāzē, bet matemātiski aizsargāts aktīvs.
        </p>
      </div>

      {/* Globāli maksājumi */}
      <div className="card" style={{ marginBottom: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
          <span style={{ fontSize: '28px' }}>⚡</span>
          <h2 style={{ color: '#fb923c', fontSize: '16px', fontWeight: 600, margin: 0 }}>
            Globāli maksājumi bez starpniekiem
          </h2>
        </div>
        <p style={{ color: '#a3a3a3', fontSize: '14px', lineHeight: 1.7, margin: 0 }}>
          Bitkoins ļauj veikt globālus maksājumus bez starpniekiem, bez kavēšanās un ar atvērtu tehnoloģiju. <strong style={{ color: '#22d3ee' }}>Nav nepieciešamas bankas, nav darba laika ierobežojumu, nav ģeogrāfisku barjeru.</strong>
        </p>
      </div>

      {/* Decentralizācija */}
      <div className="card" style={{ marginBottom: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
          <span style={{ fontSize: '28px' }}>🌐</span>
          <h2 style={{ color: '#fb923c', fontSize: '16px', fontWeight: 600, margin: 0 }}>
            Decentralizēts tīkls
          </h2>
        </div>
        <p style={{ color: '#a3a3a3', fontSize: '14px', lineHeight: 1.7, margin: 0 }}>
          Bitkoina tīkls <strong style={{ color: '#22d3ee' }}>nepieder vienai personai, grupai vai uzņēmumam</strong> – tas pieder visiem lietotājiem.
        </p>
      </div>

      {/* CTA */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(251, 146, 60, 0.2), rgba(234, 88, 12, 0.15))',
        border: '1px solid rgba(251, 146, 60, 0.4)',
        borderRadius: '16px',
        padding: '20px',
        textAlign: 'center'
      }}>
        <p style={{ color: '#fef3c7', fontSize: '14px', lineHeight: 1.7, marginBottom: '16px' }}>
          Ja kaut viens no šiem pielietojumiem šķiet vērtīgs, iesaku vairāk iedziļināties Bitkoina darbībā, principos un kā tas maina pasauli.
        </p>
        <p style={{ color: '#a3a3a3', fontSize: '14px', lineHeight: 1.7, marginBottom: '16px' }}>
          Vēl labāk – <strong style={{ color: '#fb923c' }}>iegādāties mazu daudzumu Bitkoinu</strong>, piemēram, 50 eiro vērtībā, un pārbaudīt uz savas ādas, kā tas strādā. Praktiska pieredze palīdzēs labāk izprast šīs tehnoloģijas potenciālu.
        </p>
        <div style={{
          background: 'rgba(34, 211, 238, 0.15)',
          border: '1px solid rgba(34, 211, 238, 0.3)',
          borderRadius: '10px',
          padding: '12px',
          marginTop: '16px'
        }}>
          <p style={{ color: '#22d3ee', fontSize: '14px', fontWeight: 600, margin: 0 }}>
            💡 Lai veicas jautājumu uzdošanā un atbilžu atrašanā!
          </p>
        </div>
      </div>

      {/* 21 million visualization */}
      <div className="card" style={{ marginTop: '24px' }}>
        <h3 style={{ color: '#fef3c7', fontSize: '14px', fontWeight: 600, marginBottom: '16px', textAlign: 'center' }}>
          ₿ 21 000 000 — tas ir viss, kas jebkad būs
        </h3>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(21, 1fr)', 
          gap: '4px',
          padding: '12px',
          background: 'rgba(0,0,0,0.3)',
          borderRadius: '8px'
        }}>
          {[...Array(21)].map((_, i) => (
            <div key={i} style={{
              aspectRatio: '1',
              background: i < 19 ? 'linear-gradient(135deg, #fb923c, #ea580c)' : 'rgba(251, 146, 60, 0.2)',
              borderRadius: '3px',
              boxShadow: i < 19 ? '0 0 8px rgba(251, 146, 60, 0.4)' : 'none'
            }} />
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px', fontSize: '11px' }}>
          <span style={{ color: '#fb923c' }}>≈19.6M jau ieguva</span>
          <span style={{ color: '#a3a3a3' }}>≈1.4M vēl jāiegūst</span>
        </div>
      </div>
    </div>
  );
}
