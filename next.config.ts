/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "your-project-id.supabase.co", 
      "res.cloudinary.com",
      "firebasestorage.googleapis.com"
    ],
  },
};

module.exports = nextConfig;