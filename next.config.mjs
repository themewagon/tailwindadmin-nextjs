/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/tailwindadmin-nextjs',
    trailingSlash: true,
    reactStrictMode: false,
    images: { unoptimized: true }
};

export default nextConfig;
