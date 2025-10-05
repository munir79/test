/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn-icons-png.flaticon.com'], // এখানে আমাদের ইমেজ সার্ভার লিখতে হবে
  },
};

export default nextConfig;
