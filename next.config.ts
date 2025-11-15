import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Enable Turbopack (default in Next.js 16)
  experimental: {
    turbo: {},
    // Enable Cache Components for explicit caching
    cacheComponents: true,
    // Enable Partial Pre-Rendering
    ppr: true,
    // Enable React Compiler for automatic memoization
    reactCompiler: true,
    // Enable typed routes for type-safe navigation
    typedRoutes: true,
    // Enable typed environment variables
    typedEnv: true,
  },
  // TypeScript configuration
  typescript: {
    // Fail builds on type errors
    ignoreBuildErrors: false,
  },
  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
  },
};

export default nextConfig;
