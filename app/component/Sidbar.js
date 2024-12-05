import React from 'react'
import {
    BellIcon,
    ChartBarIcon,
    ChevronDownIcon,
    ShoppingBagIcon,
    UserGroupIcon,
    ViewColumnsIcon,
    ChatBubbleOvalLeftEllipsisIcon, // Chat Icon
  } from '@heroicons/react/24/solid';
  import {
    ClockIcon,
    CalendarIcon,
    ComputerDesktopIcon,
    MagnifyingGlassIcon,
    UserIcon,
  } from '@heroicons/react/24/outline';
  import SidebarRow from './SidebarRow';

export default function 
() {
  return (
    <div className='p-2 mt-5 max-w-[600px] xl:min-w-[300px]'>
        <SidebarRow src="https://scontent.fcai19-5.fna.fbcdn.net/v/t39.30808-6/466104779_940900997884465_6988365680746751153_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGtHpoU-eaIQNBVQXInz2zUxAH5Jl1pMerEAfkmXWkx6reQ5LCcaf-eydMdLKD1DnDz5ME4aOr5uhFn9M23N50E&_nc_ohc=KQTy9LG-e8MQ7kNvgF1lG9f&_nc_zt=23&_nc_ht=scontent.fcai19-5.fna&_nc_gid=ABmeraXJl90-rUlXta3tW7l&oh=00_AYDzHyxqJSFkts4wbUSV3NAEocWpxazYjRIOnwnq0MaBfA&oe=6755A5DB" title='Abdo Ismail'/>
        <SidebarRow Icon={UserIcon} title='Freinds'/>
        <SidebarRow Icon={UserGroupIcon} title='Groups'/>
        <SidebarRow Icon={ShoppingBagIcon} title='Market Place'/>
        <SidebarRow Icon={ComputerDesktopIcon} title='Watch'/>
        <SidebarRow Icon={CalendarIcon} title='Events'/>
        <SidebarRow Icon={ClockIcon} title='Momeries'/>
        < SidebarRow Icon={ChevronDownIcon} title='See more'/>

    </div>
  )
}
