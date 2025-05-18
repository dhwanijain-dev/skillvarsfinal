import type { NextConfig } from 'next'
import { NextConfig as NextJsConfig } from 'next'

const nextConfig = {
  webpackDevMiddleware: (config: any) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };
    return config;
  },
};

export default nextConfig;
