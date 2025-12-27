/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Soportar imágenes de Cloudinary y otros dominios externos
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
      // Agrega más dominios si necesitas
      // {
      //   protocol: 'https',
      //   hostname: 'otro-dominio.com',
      //   pathname: '/**',
      // },
    ],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Optimizaciones de rendimiento
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

module.exports = nextConfig