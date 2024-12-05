/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    CLOUDINARY_URL: 'https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/image/upload', // تأكد من وضع رابط Cloudinary الصحيح هنا
  },
  images: {
    domains: [
      'imgs.search.brave.com',    // نطاق الصور Brave
      'links.papareact.com',       // نطاق papareact
      'res.cloudinary.com',        // نطاق Cloudinary
      'via.placeholder.com',       // نطاق Placeholder
      'cloudinary.com',            // نطاق إضافي لـ Cloudinary
      'example.com',               // نطاق إضافي
      'scontent.fcai19-5.fna.fbcdn.net', // نطاق إضافي لـ Facebook
    ],
  },
};

export default nextConfig;
