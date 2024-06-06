/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  /*
  images: {
    remotePatterns: [
      {
        hostname: '',
        port: '',
        pathname: '/img/**',
      },
    ],
  },

   */
  images: {
    domains: ["www.statebicycle.com", "storage.googleapis.com","res.cloudinary.com","s3-alpha-sig.figma.com"],
  },
};

module.exports = nextConfig;