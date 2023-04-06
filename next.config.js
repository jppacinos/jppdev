/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    // enable dangerous use of SVG images
    dangerouslyAllowSVG: true,

    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's.gravatar.com',
        port: '',
        pathname: '/avatar/**',
      },
      {
        protocol: 'https',
        hostname: 'github-readme-stats.vercel.app',
        port: '',
        pathname: '/api/**',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/github/explore/**',
      },
    ],
  },
}

module.exports = nextConfig
