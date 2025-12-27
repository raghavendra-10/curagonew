/** @type {import('next').NextConfig} */
const nextConfig = {
  // Compression
  compress: true,

  // Remove console logs in production
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

export default nextConfig
