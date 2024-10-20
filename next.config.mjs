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
    ],
  },
};

export default nextConfig;
