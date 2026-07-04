// ponytail: basePath empty for custom domains, set GH_PAGES=true for GitHub Pages deploy
const basePath = process.env.GH_PAGES ? '/Simple-Portfolio-React' : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: { unoptimized: true },
};

module.exports = nextConfig;
