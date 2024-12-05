import React from 'react';
import StoryCard from './StoryCard';

const stories = [
  {
    name: "Abdo Ismail",
    src: "https://scontent.fcai19-5.fna.fbcdn.net/v/t39.30808-6/466104779_940900997884465_6988365680746751153_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGtHpoU-eaIQNBVQXInz2zUxAH5Jl1pMerEAfkmXWkx6reQ5LCcaf-eydMdLKD1DnDz5ME4aOr5uhFn9M23N50E&_nc_ohc=KQTy9LG-e8MQ7kNvgF1lG9f&_nc_zt=23&_nc_ht=scontent.fcai19-5.fna&_nc_gid=ABmeraXJl90-rUlXta3tW7l&oh=00_AYDzHyxqJSFkts4wbUSV3NAEocWpxazYjRIOnwnq0MaBfA&oe=6755A5DB",
    profile: "https://scontent.fcai19-5.fna.fbcdn.net/v/t39.30808-6/466104779_940900997884465_6988365680746751153_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGtHpoU-eaIQNBVQXInz2zUxAH5Jl1pMerEAfkmXWkx6reQ5LCcaf-eydMdLKD1DnDz5ME4aOr5uhFn9M23N50E&_nc_ohc=KQTy9LG-e8MQ7kNvgF1lG9f&_nc_zt=23&_nc_ht=scontent.fcai19-5.fna&_nc_gid=ABmeraXJl90-rUlXta3tW7l&oh=00_AYDzHyxqJSFkts4wbUSV3NAEocWpxazYjRIOnwnq0MaBfA&oe=6755A5DB",
  },
  {
    name: "Elon Musk",
    src: "https://links.papareact.com/4zn",
    profile: "https://links.papareact.com/kxk",
  },
  {
    name: "Jeff Bezoz",
    src: "https://links.papareact.com/k2j",
    profile: "https://imgs.search.brave.com/n2Kl07vafaXFQM8g6jLLq-r2xIZ-Qkcc1XWQFW155_A/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTEw/NDI5NDcvcGhvdG8v/amVmZi1iZXpvcy1m/b3VuZGVyLWNlby1v/Zi1hbWF6b24tY29t/LXBvc2VzLWZvci1w/b3J0cmFpdC1qYW51/YXJ5LTEtMTk5Ny1p/bi1zZWF0dGxlLXdh/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1PTWxwTHVxeFR3/b1BxQU1RS0dHLU8z/dHJsN011X05ZclRm/WTdNbnljbDdNPQ",
  },
  {
    name: "Mark Zuckerberg",
    src: "https://links.papareact.com/xql",
    profile: "https://links.papareact.com/snf",
  },
  {
    name: "Bill Gates",
    src: "https://links.papareact.com/4u4",
    profile: "https://links.papareact.com/zvy",
  },
];

export default function Stories() {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map((story) => (
        <StoryCard 
          key={story.src} // التصحيح هنا
          name={story.name} 
          src={story.src} 
          profile={story.profile} 
        />
      ))}
    </div>
  );
}
