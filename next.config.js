/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "user-images.githubusercontent.com"],
  },
};

module.exports = nextConfig;
