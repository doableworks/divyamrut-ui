/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
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
