import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  devIndicators: { appIsrStatus: true, buildActivity: true },
  experimental: {
    ppr: true,
    reactCompiler: true,
    serverMinification: true,
    authInterrupts: true,
    scrollRestoration: true
  },

  eslint: { ignoreDuringBuilds: true }
  // typescript: {ignoreBuildErrors: true},
};

export default nextConfig;
