import bundleAnalyzer from '@next/bundle-analyzer'

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimize heavy 3D libraries - only import what's used
  experimental: {
    optimizePackageImports: ['three', '@react-three/fiber', '@react-three/drei', '@react-three/postprocessing']
  },

  // Allow external images from Unsplash
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },

  // Let Next.js handle optimization automatically
  webpack: (config) => {
    // Next.js already optimizes webpack, no manual config needed
    return config;
  }
};

export default withBundleAnalyzer(nextConfig);
