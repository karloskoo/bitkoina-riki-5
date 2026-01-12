import Head from 'next/head';
import ParBitcoin from '../components/ParBitcoin';

export default function ParBitcoinPage() {
  return (
    <>
      <Head>
        <title>Kas ir Bitcoin? | Kāpēc pasaule pērk bitkoinu | Nakamoto.lv</title>
        <meta name="description" content="Uzzini, kāpēc Bitcoin kļuvis par nopietnu finanšu instrumentu. Aizsardzība pret inflāciju, kapitāla brīvība, nekonfiscējams īpašums un digitālā nauda." />
        <meta name="keywords" content="kas ir bitcoin, bitcoin latvija, bitkoins, kriptovalūta, digitālā nauda, bitcoin ieguldījumi, bitcoin priekšrocības, 21 miljons bitcoin" />
        <link rel="canonical" href="https://nakamoto.lv/par-bitcoin" />
        
        <meta property="og:title" content="Kas ir Bitcoin? | Nakamoto.lv" />
        <meta property="og:description" content="Uzzini, kāpēc uzņēmumi un valstis pērk Bitcoin. Aizsardzība pret inflāciju, kapitāla brīvība un nekonfiscējams digitāls īpašums." />
        <meta property="og:url" content="https://nakamoto.lv/par-bitcoin" />
        <meta property="og:type" content="article" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Kāpēc pasaule pērk bitkoinu?",
              "description": "Uzzini, kāpēc Bitcoin kļuvis par nopietnu finanšu instrumentu - aizsardzība pret inflāciju, kapitāla brīvība un nekonfiscējams īpašums.",
              "author": {
                "@type": "Organization",
                "name": "Nakamoto.lv"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Nakamoto.lv",
                "url": "https://nakamoto.lv"
              },
              "mainEntityOfPage": "https://nakamoto.lv/par-bitcoin",
              "inLanguage": "lv"
            })
          }}
        />
      </Head>
      <ParBitcoin />
    </>
  );
}
