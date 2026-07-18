import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(process.cwd(), "../.."),
  reactStrictMode: true,
  transpilePackages: ["@niranjanans/ui", "@niranjanans/config", "@niranjanans/types"],
};

export default nextConfig;
