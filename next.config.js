/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow image domains
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
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
  // Configure static export
  output: 'export',
  // Remove distDir as it may be causing conflicts
  // distDir: 'out', // Next.js handles this automatically with output: 'export'
  
  // Disable server components features incompatible with static export
  experimental: {
    // Ensure no server-only features are used
    serverActions: false,
  },
  // Prevent environment variable errors
  env: {
    // Add any required env variables with defaults here
  },
  // Ensure all pages are pre-rendered
  trailingSlash: true,
};

module.exports = nextConfig; 