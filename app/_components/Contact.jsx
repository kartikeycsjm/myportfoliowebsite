import React from 'react'
import Image from 'next/image'
import contact from '@/public/contact.jpg'
import Profile from '@/public/kartik.png'
const Contact = () => {
  return (
    <div id='reachout' className='w-full h-screen'>
        <Image src={contact}/>
    </div>
  )
}

export default Contact