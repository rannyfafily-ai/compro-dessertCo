import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    domains: ["randomuser.me"],
  },
};

export default nextConfig;
