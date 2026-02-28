import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Path aliases are configured in tsconfig.json
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
