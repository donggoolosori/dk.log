/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com",
      "user-images.githubusercontent.com",
      "plus.unsplash.com",
    ],
  },
};

module.exports = nextConfig;
