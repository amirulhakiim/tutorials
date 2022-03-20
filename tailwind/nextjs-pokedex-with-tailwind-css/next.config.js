/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['assets.pokemon.com'],
  },
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
}

module.exports = nextConfig

