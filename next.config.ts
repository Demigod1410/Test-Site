import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Disable React strict mode for cleaner HTML output
  reactStrictMode: false,
  // Optimize for static generation
  compress: true,
};

export default nextConfig;