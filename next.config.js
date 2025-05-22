/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow image domains
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    unoptimized: true,
  },
  // Temporarily disable TypeScript and ESLint checking during build
  typescript: {
    // This will allow production builds to complete even with type errors
    ignoreBuildErrors: true,
  },
  eslint: {
    // This will allow production builds to complete even with ESLint errors
    ignoreDuringBuilds: true,
  },
  // Enable static HTML export for hosting on CDN/static hosting
  output: 'export',
};

module.exports = nextConfig; 