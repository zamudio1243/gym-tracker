import type { NextConfig } from "next";
import { paraglideWebpackPlugin } from "@inlang/paraglide-js";

const nextConfig: NextConfig = {
  turbopack: {},
  webpack: (config) => {
    config.plugins.push(
      paraglideWebpackPlugin({
        outdir: "./paraglide",
        project: "./project.inlang",
        strategy: ["url", "cookie", "baseLocale"],
      }),
    );

    return config;
  },
};

export default nextConfig;
