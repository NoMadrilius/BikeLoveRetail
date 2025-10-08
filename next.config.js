/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')

const nextConfig = {
  images: {
    domains: ["www.statebicycle.com", "storage.googleapis.com","res.cloudinary.com","s3-alpha-sig.figma.com","s3-alpha-sig.figma.com","img.youtube.com"],
  },
  i18n,
};

module.exports = nextConfig;