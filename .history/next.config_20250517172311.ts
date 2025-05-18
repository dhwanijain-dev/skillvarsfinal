import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpackDevMiddleware: config => {
    config.watchOptions = {
      poll: 1000,  // Check for changes every second
      aggregateTimeout: 300,
    };
    return config;
  },
};

export default nextConfig;
