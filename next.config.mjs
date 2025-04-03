/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,
  rewrites: async () => {
    return [
      {
        source: "/sitemap.xml",
        destination: "https://app.ozassignments.com/sitemap.xml",
      },
    ];
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
  },

  // async redirects() {
  //   [
  //     {
  //       source: "",
  //       destination: "",
  //       permanent: "boolean",
  //     },
  //   ];
  // },
};

export default nextConfig;
