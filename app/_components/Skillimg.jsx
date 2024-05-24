import React from 'react'
import Image from 'next/image'
const Skillimg = ({link}) => {
  return (
    <div>
        <Image src={link} alt='link' className='w-[60px] duration-[1.4s] hover:rotate-[360deg] m-3'/>
    </div>
  )
}

export default Skillimg