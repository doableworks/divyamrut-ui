/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["register.divyamrutnaturals.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", 
      },
    ],
  },
};

export default nextConfig;
