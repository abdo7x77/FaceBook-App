import React from 'react'
import{signIn} from 'next-auth/client'
import next from 'next'

export default function Login() {
  return (
    <div className='grid place-items-center '>
        <image
         src="https://scontent.fcai19-5.fna.fbcdn.net/v/t39.30808-6/471665472_970124491628782_3667810226357143319_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=D52BHm_oI6IQ7kNvwH1t5sn&_nc_oc=Adn8TCqRxltCZtH1jGL7-DM3TNABKdPKO_tOp26OME0_xj2dAVrc2dAZi37JHguz4IA&_nc_zt=23&_nc_ht=scontent.fcai19-5.fna&_nc_gid=dL8EaadAeqTTWex7Z4YRnQ&oh=00_AfFL1k0dTcqufbBpxENGz3FsN70tPFLeqqFb4dy_cMB0cA&oe=680A534D"
         alt="Facebook Logo"
         width={400}
         height={400}
         objectFit="contain"
        />
        <h1 className='p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer' ></h1>
    </div>
  )
}
