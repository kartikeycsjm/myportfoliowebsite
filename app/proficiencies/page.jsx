import React from 'react'
import Image from 'next/image'
import Skill from '@/app/_components/skill'
import Skillimg from '@/app/_components/Skillimg'
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
import cover from '@/public/c.jpg'
const page = () => {
    return (
        <div className='w-[95%] min-h-screen flex justify-between items-center flex-col
        md:w-[90%] md:flex-row
        '>
            <Image src={cover} className='w-[70%] rounded-lg mt-4
          md:w-[50%]'/>
            <div id='prof' className='w-[100%] min-h-screen text-white flex justify-around items-center flex-col'>
                <div className='w-[50%] h-[60px] flex justify-around items-center
          md:w-[250px]'>
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
        </div>
    )
}

export default page