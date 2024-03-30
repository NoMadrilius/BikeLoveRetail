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
    domains: ["www.statebicycle.com"],
  },
};

module.exports = nextConfig;
