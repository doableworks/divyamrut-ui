/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "register.nityanava.com",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "register.nityanava.com",
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
