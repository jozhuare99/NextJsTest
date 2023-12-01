

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "tailwindui.com",
      "res.cloudinary.com"
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tecdn.b-cdn.net',
      },
    ],
  },
  experimental: {
    serverActions: true,
  },
}

module.exports = nextConfig