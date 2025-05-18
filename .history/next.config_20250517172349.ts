import type { NextConfig } from 'next'
import { NextConfig as NextJsConfig } from 'next'

const nextConfig: NextJsConfig = {
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000, // check for changes every second
      aggregateTimeout: 300,
    };
    return config;
  },
};

export default nextConfig;
