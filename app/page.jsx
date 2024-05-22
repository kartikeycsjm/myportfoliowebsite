import React from 'react'
import Image from 'next/image'
import profile from '@/public/kartik.png'
import Recent from './_components/Recent'
import nextjs from '@/public/skillsimages/nextjs.png'
const page = () => {
  return (
    <div className='w-full min-h-screen flex justify-around items-center flex-col'>
      <div id="first" className='text-white w-full h-[90vh] flex justify-around items-center flex-col
      md:flex-row-reverse md:w-[90%]
      sm:w-[95%] sm:flex-row-reverse
      '>
        <Image src={profile} className='m-5 w-[200px] rounded-full
        md:w-[250px]
        sm:w-[240px]
        '/>
        <div className='w-full h-[50%] flex justify-around items-center flex-col
        md:items-start
        sm:items-start'>
          <p className='text-[23px] w-[80%]          
          md:text-[30px] md:text-left
          sm:text-[26px] sm:text-left
          '>Hey there! I'm 
          <span className='text-blue-700 text-[26px] font-cursive
          md:text-[40px]
          sm:text-[38px] 
          '> Kartikey Mishra</span>, a final year BTech Computer Science student passionate about web development and Problem Solving, specializing in Nextjs.</p>
          <button className='px-2 py-1 border-[1.4px] border-blue-700 rounded-full duration-200 hover:bg-[blue] hover:rounded-sm
          md:text-[30px] md:px-5
          sm:text-[26px] sm:px-3
          '>Download Resume</button>
        </div>
      </div>
      <div className='border-t border-gray-700 w-full min-h-[80vh] flex justify-around items-center flex-col
      md:w-[90%] md:min-h-[60vh]
      '>
        <h1 className='text-white text-[30px]
        md:text-[40px]'>Things Going on</h1>
        <div className='w-full min-h-[70vh] flex justify-around items-center flex-col
      md:flex-row md:w-[90%] md:min-h-[55vh]'>
          <Recent
            type={'proficiencies'}
            name={`I'm currently Learning`}
            image={nextjs}
            text={'Next.JS (A JavaScript Fullstack framework)'}
            ltext={'know more about Next.JS'}
            llink={`https://nextjs.org/`}
            all={`/proficiencies`}
          />
          <Recent
            type={`insights`}
            name={`My letest insight`}
            text={`Mutable and immutable Data Structures`}
            ltext={`read this insight`}
            llink={``}
            all={`/insights`}
          />
        </div>

      </div>
    </div>
  )
}
export default page