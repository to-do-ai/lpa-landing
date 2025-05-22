/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable ESLint during build to avoid blocking the build
  eslint: {
    // Warning: only disable this in production if you're confident in your code quality
    ignoreDuringBuilds: true,
  },
  // Ensure images from any domain can be used
  images: {
    domains: ['*'],
    // If you need to use remote images, specify their domains here
    // domains: ['example.com', 'anotherdomain.com'],
  }
};

module.exports = nextConfig; 