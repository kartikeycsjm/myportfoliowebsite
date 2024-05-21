import React from 'react'
import Image from 'next/image'
import profile from '@/public/kartik.png'
import Skill from '@/app/_components/skill'
import Skillimg from './_components/Skillimg'
import js from '@/public/skillsimages/js.png'
import java from '@/public/skillsimages/java.png'
import react from '@/public/skillsimages/react.png'
import nextjs from '@/public/skillsimages/nextjs.png'
import tailwind from '@/public/skillsimages/tailwind.png'
import html from '@/public/skillsimages/html.png'
import css from '@/public/skillsimages/css.png'
import mongo from '@/public/skillsimages/mongo.png'
import mysql from '@/public/skillsimages/mysql.png'
import skill from '@/public/icons/skill.png'
import github from '@/public/skillsimages/github.png'
import linux from '@/public/skillsimages/linux.png'
import sass from '@/public/skillsimages/sass.png'
import Social from './_components/Social'
import Reachout from './_components/Contact'
import cover from '@/public/c.jpg'
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
          <p className='m-5 text-[25px] w-[95%] text-center
          md:text-left md:text-[33px]
          sm:text-left sm:text-[30px]
          '>Hey there! I'm <span className='text-blue-700 text-[30px]
          md:text-[40px]
          sm:text-[38px]
          '>Kartikey Mishra</span>, a final year BTech Computer Science student passionate about web development and Problem Solving, specializing in Nextjs.</p>
          <button className='m-5 px-2 py-1 border-[1.4px] border-blue-700 rounded-full
          md:text-[30px] md:px-5
          sm:text-[28px] sm:px-4
          '>Download Resume</button>
        </div>
      </div>
      
    </div>
  )
}

export default page