/** @type {import('next').NextConfig} */
const nextConfig = {
    // Your custom configurations go here
 
    // Example: Setting a custom build directory
    distDir: 'out',
  
    // Example: Adding environment variables
    env: {
      API_URL: process.env.API_URL,
    },
 
    // Example: Configuring the webpack build
    webpack: (config, { dev, isServer }) => {
      // Additional webpack configurations
      return config;
    },
     
    // Example: Adding custom headers to the server response
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: [
            {
              key: 'X-Frame-Options',
              value: 'DENY',
            },
          ],
        },
      ];
    },
  };
  
  module.exports = nextConfig;
  