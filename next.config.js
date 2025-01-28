/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      // Add your image domains here
      'your-storage-domain.com',
      'firebasestorage.googleapis.com',
    ],
  },
  webpack: (config) => {
    config.externals.push({
      'utf-8-validate': 'commonjs utf-8-validate',
      bufferutil: 'commonjs bufferutil',
    })
    return config
  },
}

module.exports = nextConfig
