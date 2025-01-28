import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // ⚠️ This will completely disable TypeScript checks during build
    ignoreBuildErrors: true,
  },
  output: 'export',
  // If you're using images, you might need this
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
