/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { optimizePackageImports: ['react-native'] },
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      'react-native$': 'react-native-web',
    };
    return config;
  },
  transpilePackages: [],
};
export default nextConfig;
