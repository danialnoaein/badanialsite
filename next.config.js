/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["news-cdn.varzesh3.com"],
  },
};

module.exports = nextConfig;
