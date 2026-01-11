/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // SEO: Trailing slashes for cleaner URLs
  trailingSlash: false,
  
  // Optimize images
  images: {
    domains: [],
    formats: ['image/webp'],
  },
  
  // Security headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ],
      },
    ];
  },
  
  // Redirects for SEO
  async redirects() {
    return [
      // Redirect common misspellings
      {
        source: '/calculator',
        destination: '/kalkulators',
        permanent: true,
      },
      {
        source: '/calc',
        destination: '/kalkulators',
        permanent: true,
      },
      {
        source: '/pensija',
        destination: '/',
        permanent: true,
      },
      {
        source: '/pensijas',
        destination: '/',
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig
