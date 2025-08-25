import type { NextConfig } from "next";

const withAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const oneYear = 60 * 60 * 24 * 365;
const oneDay = 60 * 60 * 24;

const securityHeaders = [
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
  { key: 'X-Frame-Options', value: 'DENY' },
];

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'avatars.githubusercontent.com' },
      { protocol: 'https', hostname: 'images.pexels.com' },
      { protocol: 'https', hostname: 'media.licdn.com' },
      { protocol: 'https', hostname: 'dosya.kmu.edu.tr' },
    ],
  },
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },
  modularizeImports: {
    'lucide-react': {
      transform: 'lucide-react/dist/esm/icons/{{kebabCase member}}'
    },
    'date-fns': {
      transform: 'date-fns/{{member}}'
    },
  },
  
  async headers() {
    const cacheHeaders = [
      {
        source: '/(.*)\\.(?:avif|webp|png|jpg|jpeg|svg|ico)$',
        headers: [
          { key: 'Cache-Control', value: `public, max-age=${oneYear}, immutable` }
        ],
      },
      {
        source: '/fonts/(.*)',
        headers: [
          { key: 'Cache-Control', value: `public, max-age=${oneYear}, immutable` }
        ],
      },
      {
        source: '/cv.pdf',
        headers: [
          { key: 'Cache-Control', value: `public, max-age=${oneDay}` }
        ],
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          { key: 'Cache-Control', value: `public, max-age=${oneYear}, immutable` }
        ],
      },
    ];

    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
      ...cacheHeaders,
    ];
  },
};

export default withAnalyzer(nextConfig);