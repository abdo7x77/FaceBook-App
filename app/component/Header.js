import Image from 'next/image';
import {
  BellIcon,
  ChartBarIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewColumnsIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from '@heroicons/react/24/solid';
import {
  FlagIcon,
  PlayIcon,
  ShoppingCartIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import HeaderIcon from './HeaderIcon';

export default function Header() {
  // حالة الاكتيف
  const activeIcon = "home"; // يمكن تغيير القيمة ديناميكيًا بناءً على الحالة الحالية

  return (
    <div className="sticky top-0 z-50 flex bg-white items-center p-2 lg:px-5 shadow-md">
      {/* Left Section */}
      <div className="flex items-center">
        <Image
          className="rounded-full cursor-pointer"
          src="https://imgs.search.brave.com/_ZXVeCXXBsGPbJeTBgVpe59RA75vprfGnhu7cP81NoM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9mcmVl/cG5nbG9nby5jb20v/aW1hZ2VzL2FsbF9p/bWcvZmFjZWJvb2st/bG9nby5wbmc"
          alt="Facebook Logo"
          width={40}
          height={40}
        />
        {/* Search Section */}
        <div className="hidden md:inline-flex  ml-2 items-center rounded-full bg-gray-100 p-2">
          <MagnifyingGlassIcon className="h-6 text-gray-600" />
          <input
            className="hidden md:inline-flex ml-2 bg-transparent outline-none placeholder-gray-500 text-sm"
            type="text"
            placeholder="Search Facebook"
          />
        </div>
      </div>

      {/* Center Section */}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          {/* تمرير حالة الاكتيف */}
          <HeaderIcon Icon={HomeIcon} active={activeIcon === "home"} className='sm:ml-2'  />
          <HeaderIcon Icon={FlagIcon} active={activeIcon === "flag"} />
          <HeaderIcon Icon={PlayIcon} active={activeIcon === "play"} />
          <HeaderIcon Icon={ShoppingCartIcon} active={activeIcon === "cart"} />
          <HeaderIcon Icon={UserGroupIcon} active={activeIcon === "group"} />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center sm:space-x-2 justify-end">
        <Image
          className="rounded-full cursor-pointer"
          src="https://scontent.fcai19-5.fna.fbcdn.net/v/t39.30808-6/466104779_940900997884465_6988365680746751153_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGtHpoU-eaIQNBVQXInz2zUxAH5Jl1pMerEAfkmXWkx6reQ5LCcaf-eydMdLKD1DnDz5ME4aOr5uhFn9M23N50E&_nc_ohc=KQTy9LG-e8MQ7kNvgF1lG9f&_nc_zt=23&_nc_ht=scontent.fcai19-5.fna&_nc_gid=ABmeraXJl90-rUlXta3tW7l&oh=00_AYDzHyxqJSFkts4wbUSV3NAEocWpxazYjRIOnwnq0MaBfA&oe=6755A5DB"
          alt="Profile Picture"
          width={40}
          height={40}
        />
        <p className="hidden lg:inline-flex text-sm whitespace-nowrap font-semibold pr-3">Abdo Ismail</p>
        <ViewColumnsIcon className="icon text-black" />
        <ChatBubbleOvalLeftEllipsisIcon className="icon text-black" />
        <BellIcon className="icon text-black" />
        <ChevronDownIcon className="icon text-black" />
      </div>
    </div>
  );
}
