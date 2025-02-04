/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "139.59.13.134",
        port: "8000",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "*",
        pathname: "/**",
      },
    ],
    // domains: ['desklib.com', 'sgp1.digitaloceanspaces.com', 'staging-ai.desklib.com'],
  },
};

export default nextConfig;
