// This file sets a custom webpack configuration to use your Next.js app
// with Sentry.
// https://nextjs.org/docs/api-reference/next.config.js/introduction
// https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/
const { withSentryConfig } = require('@sentry/nextjs');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  webpack: (cfg) => {
    cfg.module.rules.push(
      {
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader'
      }
    )
    return cfg;
  },
  async headers() {
    return [{
      source: '/api/products', headers: [{
        key: 'Content-Type', value: 'application/json',
      }],
    }]
  }
}
module.exports = withSentryConfig(
  nextConfig,
  { silent: true },
  { hideSourceMaps: true },
);
