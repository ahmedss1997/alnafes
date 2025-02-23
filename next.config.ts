import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export",
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true, // Ignore all ESLint warnings/errors during builds
  },
  typescript: {
    ignoreBuildErrors: true, // This will ignore TypeScript errors during the build
  },
};

export default nextConfig;
