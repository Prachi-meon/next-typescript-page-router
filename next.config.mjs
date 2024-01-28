/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/blogs/firstBlog',
        destination: '/',
        permanent: true,
      },
      // {
      //   source: '/old-blog/:path*',
      //   destination: '/blog/:path*',
      //   permanent: false
      // }
    ]
  },
};

export default nextConfig;
