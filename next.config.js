/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // This ensures static export mode
  distDir: 'out',  // Explicitly sets the output directory
  images: { unoptimized: true },  // Fixes image issues in Cloudflare
  trailingSlash: true,  // Ensures URLs work properly
};

module.exports = nextConfig;
