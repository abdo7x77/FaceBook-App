import Image from 'next/image'; // تأكد من الاستيراد الصحيح
import React from 'react';

export default function StoryCard({ name, src, profile }) {
  return (
    <div className="relative h-14 w-14 md:w-20 md:h-20 lg:h-56 lg:w-32 cursor-pointer overflow-x p-3 transition duration-200 transform hover:scale-105 hover:animate-pulse">
      {/* صورة البروفايل */}
      <Image
        className="absolute opacity-0 lg:opacity-100 rounded-full z-50 top-10"
        src={profile}
        alt="hi"
        width={40}
        height={40}
        objectFit="cover"
      />
      {/* الصورة الأساسية */}
      <Image
        className="object-cover filter brightness-75 rounded-full lg:rounded-3xl"
        src={src}
        alt='hi'
        layout="fill"
        objectFit="cover"
      />
      <p className='absolute opacity-0 lg:opacity-100 bottom-4 w-5/6 text-white text-sm font-bold truncate'> { name}</p>
    </div>
  );
}
