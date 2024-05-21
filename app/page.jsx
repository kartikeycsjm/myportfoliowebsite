import React from 'react'
import Image from 'next/image'
import profile from '@/public/kartik.png'
const page = () => {
  return (
    <div className='w-full min-h-screen flex justify-around items-center flex-col'>
      <div id="first" className='text-white w-full h-screen flex justify-center items-center flex-col
      md:flex-row-reverse md:w-[90%]
      sm:w-[90%] sm:flex-row-reverse
      '>
        <Image src={profile} className='m-5 w-[200px] rounded-full
        md:w-[300px]
        sm:w-[250px]
        '/>
        <div className='flex justify-center items-center flex-col
        md:items-start'>
          <p className='m-5 text-[23px] w-[80%] text-justify          
          md:text-left md:text-[33px]
          sm:text-left sm:text-[30px]
          '>Hey there! I'm <span className='text-blue-700 text-[30px]
          md:text-[40px]
          sm:text-[38px]
          '>Kartikey Mishra</span>, a final year BTech Computer Science student passionate about web development and Problem Solving, specializing in Nextjs.</p>
          <button className='m-5 px-2 py-1 border-[1.4px] border-blue-700 rounded-full duration-200 hover:bg-[blue] hover:rounded-sm
          md:text-[30px] md:px-5
          sm:text-[28px] sm:px-4
          '>Download Resume</button>
        </div>
      </div>
    </div>
  )
}
export default page