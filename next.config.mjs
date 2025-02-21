/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "frame-ancestors 'self' https://pagesense.zoho.in https://pagesense-proxy.in;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
