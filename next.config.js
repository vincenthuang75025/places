/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.ctfassets.net",
      "io0-questions.s3.us-west-2.amazonaws.com",
    ],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
