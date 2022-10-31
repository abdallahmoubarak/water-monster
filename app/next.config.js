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
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = { nextConfig, pwa };
