import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  outputFileTracingRoot: path.join(__dirname),
  // Enable compression and modern output for Vercel
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;
