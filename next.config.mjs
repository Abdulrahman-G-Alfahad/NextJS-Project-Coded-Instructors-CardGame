/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.joincoded.com",
      },

      {
        protocol: "https",
        hostname: "www.troublefreepool.com",
      },
      {
        protocol: "https",
        hostname: "i0.wp.com",
      },
      {
        protocol: "https",
        hostname: "your-gif-url.com",
      },
    ],
  },
};

export default nextConfig;
