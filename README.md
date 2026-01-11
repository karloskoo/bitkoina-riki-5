# Nakamoto.lv - Bitcoin Rīki Latvijai

Bitcoin investīciju rīki Latvijas tirgum - pensiju fondu salīdzinājums ar Bitcoin un BTC/EUR kalkulators.

## 🌐 Live: [nakamoto.lv](https://nakamoto.lv)

## 📊 Funkcijas

### Pensiju Fondi vs Bitcoin (/)
- Latvijas pensiju fondu ienesīguma salīdzinājums ar Bitcoin (2020-2025)
- Interaktīvs perioda izvēles slīdnis
- FKTK oficiālie dati (CBL, Luminor, SEB, Swedbank, INDEXO)
- IIN atmaksas kalkulators (25.5% līdz €4000)

### BTC Kalkulators (/kalkulators)
- Reāllaika BTC/EUR/Satoshi konvertors
- Automātiska cenu atjaunināšana (CoinGecko/Kraken)
- Manuāla cenas pārrakstīšana

## 🚀 Uzstādīšana

```bash
# Instalē dependencies
npm install

# Palaid development serveri
npm run dev

# Būvē production versiju
npm run build

# Palaid production serveri
npm start
```

## 📁 Projekta struktūra

```
bitcoin-tools/
├── components/
│   ├── Layout.jsx          # Kopīgais layouts ar navigāciju
│   ├── PensionComparison.jsx # Pensiju salīdzinājuma komponents
│   └── BtcCalculator.jsx   # BTC kalkulatora komponents
├── pages/
│   ├── _app.jsx            # Globālais app ar SEO
│   ├── _document.jsx       # HTML dokumenta struktūra
│   ├── index.jsx           # Sākumlapa (pensijas)
│   ├── kalkulators.jsx     # BTC kalkulators
│   └── api/
│       └── btc-price.js    # BTC cenas API
├── public/
│   ├── robots.txt          # Meklētāju instrukcijas
│   ├── sitemap.xml         # Lapas karte
│   ├── site.webmanifest    # PWA manifests
│   └── favicon.svg         # Favicon
├── next.config.js          # Next.js konfigurācija
└── package.json
```

## 🔍 SEO Optimizācija

### Mērķa atslēgvārdi (Latvijā)
- `bitcoin latvija`
- `bitkoina cena`
- `btc eur`
- `bitcoin kalkulators`
- `pensiju fondi latvija`
- `pensiju fondu salīdzinājums`
- `nakamoto`
- `kriptovalūta latvija`

### Ieviestie SEO elementi
- ✅ Meta title & description katrai lapai
- ✅ Open Graph tagi (Facebook, LinkedIn)
- ✅ Twitter Card tagi
- ✅ Structured Data (JSON-LD)
- ✅ Canonical URLs
- ✅ Robots.txt
- ✅ Sitemap.xml
- ✅ Latvijas lokalizācija (lang="lv")
- ✅ Mobile-friendly dizains
- ✅ Ātras lapas ielādes laiks

### Nepieciešamie attēli (jāizveido)
Izveido šos attēlus un ievieto `/public/` mapē:

```
public/
├── favicon.ico          # 32x32 favicon
├── favicon-16x16.png    # 16x16
├── favicon-32x32.png    # 32x32
├── apple-touch-icon.png # 180x180 (iOS)
├── android-chrome-192x192.png
├── android-chrome-512x512.png
├── og-image.png         # 1200x630 (social sharing - sākumlapa)
└── og-calculator.png    # 1200x630 (social sharing - kalkulators)
```

**Favicon ģenerators:** https://realfavicongenerator.net/

**OG Image izmērs:** 1200x630px  
**Ieteicams:** Tumšs fons (#1a0a00), Bitcoin logo, teksts latviski

## 🌍 Deployment uz Vercel

### 1. GitHub repo
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/nakamoto-lv.git
git push -u origin main
```

### 2. Vercel
1. Ej uz [vercel.com](https://vercel.com)
2. "Import Project" → izvēlies savu GitHub repo
3. Framework: Next.js (automātiski noteiks)
4. Deploy!

### 3. Custom Domain
1. Vercel dashboardā: Settings → Domains
2. Pievieno `nakamoto.lv`
3. Konfigurē DNS:
   - A record: `76.76.19.19`
   - CNAME: `cname.vercel-dns.com`

## 📈 Google Search Console

Pēc deployment:
1. Ej uz [search.google.com/search-console](https://search.google.com/search-console)
2. Pievieno property: `nakamoto.lv`
3. Verificē ar DNS TXT record vai HTML file
4. Iesniedz sitemap: `https://nakamoto.lv/sitemap.xml`

## 📊 Datu avoti

- **Pensiju fondi:** FKTK (Finanšu un kapitāla tirgus komisija)
- **Bitcoin cenas:** CoinGecko API, Kraken API (fallback)
- **Vēsturiskās BTC cenas:** exchangerates.org.uk

## 📄 Licence

MIT License

---

**Autors:** [nakamoto.lv](https://nakamoto.lv)
