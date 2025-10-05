/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // domains: ['cdn-icons-png.flaticon.com'],
    domains: ['images.unsplash.com'],
  },
  turbopack: {
    root: './', // বর্তমান project folder কে root হিসেবে সেট করা
  },
};

export default nextConfig;
