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
const page = () => {
    return (
        <div className='w-[90%] text-white min-h-screen flex justify-center items-center flex-col
        md:w-[90%]
        '>
            <div className='h-[60px] w-[180px] flex justify-around items-center
                md:w-[250px]'>
                <Image src={skill} alt='skill' className='w-[35px]
                    md:w-[40px]' />
                <h3 className='text-[20px]
                    md:text-[30px]'>Proficiencies</h3>
            </div>
            <div className='w-full m-5 min-h-[70vh] border-[1px] border-gray-800 rounded-lg flex justify-around items-center flex-col
                md:flex-row md:justify-between'>
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