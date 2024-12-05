import React from 'react';
import { SunIcon, ShareIcon } from '@heroicons/react/24/outline';
import { VideoCameraIcon, EllipsisHorizontalIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import Contact from './Contact';
const contacts = [
  { src: "https://imgs.search.brave.com/12kYpZ-rSCA-UM0pl8LSHe23IIp2_pMxy_atHAAxRV8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzUxL2Yy/L2VkLzUxZjJlZDc4/YjVhYzVhMDk3YjJi/MWQxNGEzNGM4NTQ5/LmpwZw", name: "Spider Man" },
  { src: "https://links.papareact.com/kxk", name: "Elon Musk" },
  { src: "https://links.papareact.com/zvy", name: "Bill Gates" },
  { src: "https://links.papareact.com/snf", name: "Mark Zuckerberg" },
  { src: "https://imgs.search.brave.com/ZGWuipgYpGOO68J1qjm-EkSh1OWVUuB5ZJ2189r3JcE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2MxLzE5/L2FkL2MxMTlhZGE2/MTU5OGU3ODgzODhh/OGQ0NTNiNmY2ZGE3/LmpwZw", name: "Harry Potter" },
  { src: "https://imgs.search.brave.com/nlIOwq3RJmKdmT5vfHXUE2CqVsj85twC6BpOdukaBLU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2ZhLzhh/LzVlL2ZhOGE1ZTk2/Yjg5YTdjMTBmYWM4/Nzk2NTg2OTRlYWM3/LmpwZw", name: "Dead Pool" },
  { src: "https://links.papareact.com/r57", name: "James Bond" },
];

export default function Widgets() {
  return (
    <div className='hidden lg:flex flex-col w-60 mt-5 p-2'>
        <div className='flex justify-between items-center text-gray-500 mb-5'>
          <h2 className='text-xl'>Contacts</h2>
          <div className='flex space-x-2'>
            <VideoCameraIcon className='h-6' />
            <MagnifyingGlassIcon className='h-6' />
            <EllipsisHorizontalIcon className='h-6' />
          </div>
        </div>

        {contacts.map((contact) => (
        <Contact key={contact.src} src={contact.src} name={contact.name} />
      ))}
      
    </div>
  );
}
