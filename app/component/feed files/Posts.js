import React from 'react'

export default function Posts({name,message,email,postImage,image,timestamp}) {
  return (
    <div className='flex flex-col'>

        <div>
            <div>
                <img className='rounded-full'
                src={image}
                width={40}
                height={40}
                alt=''
                />
                <div>
                    <p>{name}</p>
                    <p className=' text-xs text-gray-400'></p>
                </div>
                
                
            </div>
        </div>
    </div>
  )
}
