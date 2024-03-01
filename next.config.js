/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: '',
        port: '',
        pathname: '/img/**',
      },
    ],
  },
};

module.exports = nextConfig;
