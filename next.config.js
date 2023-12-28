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
      {
        protocol: 'https',
        hostname: 'cdn.bannerbuzz.com',
      },
    ],
  }
}

module.exports = nextConfig