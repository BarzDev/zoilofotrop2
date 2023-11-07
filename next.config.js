/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["flowbite.s3.amazonaws.com"], // Menambahkan domain dari mana gambar akan diambil
  },
};

module.exports = nextConfig;
