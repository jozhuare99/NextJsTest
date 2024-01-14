const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tailwindui.com',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
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