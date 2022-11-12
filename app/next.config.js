/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");

const pwa = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
  },
});

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  experimental: { appDir: true },
  images: {
    domains: ["hello.com"],
  },
  webpack: (config) => {
    if (!config.experiments) {
      config.experiments = {};
    }
    config.experiments.topLevelAwait = true;
    return config;
  },
};

module.exports = nextConfig;
