import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_BACK_END_POINT: process.env.NEXT_PUBLIC_BACK_END_POINT || "",
  },
};

export default nextConfig;
