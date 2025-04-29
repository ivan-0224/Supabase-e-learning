import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  
  /* config options here */
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nxvlyyawvemxtquqpmvf.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**',
      },
    ],
  },

};

export default nextConfig;
