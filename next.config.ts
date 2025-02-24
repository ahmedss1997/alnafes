import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export",
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true, // Ignore all ESLint warnings/errors during builds
  },
};

export default nextConfig;
