/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '139.59.13.134',
        port: '8000',
        pathname: '/**',
      },
    ],
    // domains: ['desklib.com', 'sgp1.digitaloceanspaces.com', 'staging-ai.desklib.com'],
  }

};

export default nextConfig;
