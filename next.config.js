/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  devIndicators: {
    buildActivity: true,
    autoPrerender: true,
  },
    images: {
        
      domains: ['encrypted-tbn0.gstatic.com','pics.craiyon.com','media.tenor.com','static.vecteezy.com','fakestoreapi.com','cdn.britannica.com','freesvg.org', 'i.imgur.com'],
      },
}

module.exports = nextConfig
