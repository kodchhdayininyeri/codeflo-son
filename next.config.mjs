/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimize heavy 3D libraries - only import what's used
  experimental: {
    optimizePackageImports: ['three', '@react-three/fiber', '@react-three/drei', '@react-three/postprocessing']
  },

  // Aggressive tree shaking to remove unused code
  webpack: (config) => {
    config.optimization = {
      ...config.optimization,
      usedExports: true,
      sideEffects: false,
    };
    return config;
  }
};

export default nextConfig;
