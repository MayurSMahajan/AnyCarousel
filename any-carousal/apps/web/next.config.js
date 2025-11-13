/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    output: 'export', // Required for static export
    images: {
        unoptimized: true, // GitHub Pages doesn’t support Next.js image optimization
    },
    basePath: isProd ? '/AnyCarousel' : '',
    assetPrefix: isProd ? '/AnyCarousel/' : '',
};

export default nextConfig;