import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/civickit',
  transpilePackages: ['@civickit/ui'],
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
