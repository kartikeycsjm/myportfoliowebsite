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
          <p className='m-5 text-[32px] w-[85%] text-center
          md:text-left md:text-[33px]
          sm:text-left sm:text-[30px]
          '>Hey there! I'm <span className='text-blue-700 text-[35px]
          md:text-[40px]
          sm:text-[38px]
          '>Kartikey Mishra</span>, a final year BTech Computer Science student passionate about web development and Problem Solving, specializing in Nextjs.</p>
          <button className='m-5 px-2 py-1 border-[1.4px] border-blue-700 rounded-full
          md:text-[30px] md:px-5
          sm:text-[28px] sm:px-4
          '>Download Resume</button>
        </div>
      </div>
      <Image src={cover} className='w-[70%] rounded-lg mt-4' />
      <div id='prof' className='w-full min-h-screen text-white flex justify-around items-center flex-col border-t-[1px] border-gray-800'>
        <div className='w-[50%] h-[60px] flex justify-around items-center'>
          <Image src={skill} className='w-[40px]' />
          <h3 className='text-[30px]'>Proficiencies</h3>
        </div>
        <Skill name={'Programming Languages'}>
          <Skillimg link={js} />
          <Skillimg link={java} />
        </Skill>
        <Skill name={'Basic Website Development Tools, Frameworks and Libraries'}>
          <Skillimg link={html} />
          <Skillimg link={css} />
          <Skillimg link={react} />
          <Skillimg link={nextjs} />
          <Skillimg link={tailwind} />
          <Skillimg link={sass} />
        </Skill>
        <Skill name={'Databases and Other Skills'}>
          <Skillimg link={mongo} />
          <Skillimg link={mysql} />
          <Skillimg link={github} />
          <Skillimg link={linux} />
        </Skill>
      </div>
      <div className='w-full h-screen'></div>
    </div>
  )
}

export default page