import React from 'react'
import Stories from './feed files/Stories'
import InputBox from './feed files/InputBox'
import Posts from './feed files/Posts'

export default function Feed() {
  return (
    <div className='flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto scrollbar-hide'>
        <div className=' mx-auto max-w-md md:max-w-lg lg:max-w-2xl '>
        <Stories/>
        <InputBox/>
        <Posts/>

        </div>
    </div>
  )
}
