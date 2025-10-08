/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')

const nextConfig = {
  async redirects() {
    return [
      // www -> без www
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.bikelove.com.ua" }],
        destination: "https://bikelove.com.ua/:path*",
        permanent: false,
        statusCode: 301,
      },

      // http -> https
      {
        source: "/:path*",
        has: [{ type: "protocol", value: "http" }],
        destination: "https://bikelove.com.ua/:path*",
        permanent: false,
        statusCode: 301,
      },

      // убрать слэш в конце (кроме корня)
      {
        source: "/:path*/",
        destination: "/:path*",
        permanent: false,
        statusCode: 301,
      },
    ];
  },

  images: {
    domains: ["www.statebicycle.com", "storage.googleapis.com","res.cloudinary.com","s3-alpha-sig.figma.com","s3-alpha-sig.figma.com","img.youtube.com"],
  },
  i18n,
};

module.exports = nextConfig;