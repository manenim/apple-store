/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["rb.gy", "pngimg.com", "banner2.cleanpng.com", "cdn.sanity.io", "lh3.googleusercontent.com", "avatars.githubusercontent.com"]
  }
}

module.exports = nextConfig
