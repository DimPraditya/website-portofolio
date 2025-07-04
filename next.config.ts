import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "kindredtoe-us.backendless.app",
      },
    ],
  },
};

export default nextConfig;
