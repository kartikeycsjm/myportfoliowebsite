import React from 'react'
import Image from 'next/image'
import cover from '@/public/c.jpg'
import profile from '@/public/kartik.png'
import Recent from './_components/Recent'
import nextjs from '@/public/skillsimages/nextjs.png'
import diary from '@/public/icons/diary.png'
import { SocialIcon } from 'react-social-icons'
const page = () => {
  return (
    <div className='w-full min-h-screen flex justify-around items-center flex-col'>
      <div id="first" className='text-white w-full h-[85vh] flex justify-between items-center flex-col
        md:flex-row-reverse md:w-[90%]
        sm:w-[95%] sm:flex-row-reverse
      '>
        <div className='w-[350px] h-[300px] flex justify-around items-center flex-col
          md:w-[500px] md:justify-center md:h-[90%]
          sm:h-[90%] sm:justify-center
        '>
          <Image src={profile} alt='Kartikey Mishra' className='m-5 w-[200px] rounded-full border-[1px] border-[#cecccc] duration-[1s] hover:border-[#000680] hover:rounded-xl
            md:w-[250px]
            sm:w-[230px]
        '/>
        </div>
        <div className='w-[90%] h-[70%] flex justify-around items-center flex-col
          md:items-start md:h-[70%] md:w-[60%]
          sm:items-start sm:h-[70%] sm:w-[50%]'>
          <div className='w-[270px] h-[100px] flex justify-around
            md:items-center
            sm:items-center'>
            <SocialIcon href="https://github.com/kartikeycsjm" url='github.com' style={{ height: 45, width: 45, zIndex: 10 }} bgColor="#000640" fgColor='white' />
            <SocialIcon href="https://linkedin.com/in/kartikey-mishra-637a442b5" url='linkedin.com' style={{ height: 45, width: 45 }} bgColor="#000640" fgColor='white' />
            <SocialIcon href="https://x.com/myself_kartik_" url='twitter.com' style={{ height: 45, width: 45 }} bgColor="#000640" fgColor='white' />
            <SocialIcon href="https://instagram.com/myselfkartikey" url='instagram.com' style={{ height: 45, width: 45 }} bgColor="#000640" fgColor='white' />
          </div>
          <p className=' text-xl p-4        
            md:text-3xl md:text-left
            sm:text-2xl sm:text-left
          '>Hey there! I'm
            <span className='text-blue-700 text-2xl font-cursive
              md:text-4xl
              sm:text-3xl
              '> Kartikey Mishra</span>, a final year B.Tech. Computer Science student, passionate about web development and Problem Solving, specializing in Nextjs.</p>
          <button className='text-lg px-3 py-2 m-5 border-[1.4px] border-blue-700 rounded duration-200 hover:bg-[blue] hover:rounded-sm
            md:text-3xl md:px-5
            sm:text-2xl sm:px-3
          '>Download Resume</button>
        </div>
      </div>
      <div className='w-full min-h-[80vh] flex justify-around items-center flex-col
        md:w-[90%] md:min-h-[60vh]
      '>
        <div className='w-full min-h-screen flex justify-center items-center flex-col
          md:flex-row-reverse'>
          <Image src={cover} alt='my image' className='m-6 w-[80%] rounded-sm
            md:w-[40%]
            sm:w-[60%]'/>
          <div className='w-[90%] min-h-[80vh] flex justify-around items-center flex-col
            md:w-[50%]'>
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
            <Recent
              type={`Project`}
              name={`My new Project`}
              image={diary}
              text={`Diary Application`}
              ltext={`Live link`}
              llink={`https://diary1.vercel.app`}
              all={`/portfolio`}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default page