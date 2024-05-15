/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'unpkg.com/pokeapi-sprites@2.0.2',
        port: '',
        pathname: '/sprites/pokemon/other/dream-world/**',
      },
    ],
  },
};

export default nextConfig;
