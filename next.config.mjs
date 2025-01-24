/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["register.divyamrutnaturals.com", "139.59.13.134"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "139.59.13.134",
        port: "8000",
        pathname: "/media/uploads/**",
      },
    ],
  },
};

export default nextConfig;
