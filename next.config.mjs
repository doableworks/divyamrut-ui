/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  trailingSlash: true,
  rewrites: async () => {
    return [
      {
        source: "/sitemap.xml",
        destination: "https://register.nityanava.com/sitemap.xml",
      },
      {
        source: "/sitemap-static.xml",
        destination: "https://register.nityanava.com/sitemap-static.xml",
      },
      {
        source: "/sitemap-products.xml",
        destination: "https://register.nityanava.com/sitemap-products.xml",
      },
      {
        source: "/sitemap-therapies.xml",
        destination: "http://register.nityanava.com/sitemap-therapies.xml",
      },
      {
        source: "/sitemap-blogs.xml",
        destination: "http://register.nityanava.com/sitemap-blogs.xml",
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
};

export default nextConfig;
