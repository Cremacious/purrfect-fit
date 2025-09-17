import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  serverActions: {
    bodySizeLimit: '4mb', 
  },
};

export default nextConfig;
