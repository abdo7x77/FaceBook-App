import React from 'react'
import{signIn} from 'next-auth/client'
import next from 'next'

export default function Login() {
  return (
    <div className='grid place-items-center '>
        <image
         src="https://imgs.search.brave.com/_ZXVeCXXBsGPbJeTBgVpe59RA75vprfGnhu7cP81NoM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9mcmVl/cG5nbG9nby5jb20v/aW1hZ2VzL2FsbF9p/bWcvZmFjZWJvb2st/bG9nby5wbmc"
         alt="Facebook Logo"
         width={400}
         height={400}
         objectFit="contain"
        />
        <h1 className='p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer' ></h1>
    </div>
  )
}
