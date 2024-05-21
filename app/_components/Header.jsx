import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import home from '@/public/icons/home.png'
import contact from '@/public/icons/contact.png'
import skill from '@/public/icons/skill.png'
import insights from '@/public/icons/insights.png'
import portfolio from '@/public/icons/portfolio.png'
const Header = () => {
    return (
        <div className='w-[98%] text-white h-[60px] bg-[#000650] rounded-[50px] flex justify-around items-center sticky top-[2px]
        md:top-2 md:w-[90%]
        sm:w-[90%]
        '>
            <div id="links" className='w-[100%] text-white text-[11px] flex justify-around items-center
            md:text-[18px]
            sm:text-[15px]
            '>
                <Link className='flex justify-center items-center flex-col p-2 rounded-[30px] ' href={'/'}>
                    <Image src={home} className='w-[25px]
                    md:w-[45px]
                    sm:w-[35px]
                    '/>
                    <h6 className='text-[9px] hover:text-blue-300'>Home</h6>
                </Link>
                <Link className='flex justify-center items-center flex-col p-2 rounded-[30px] ' href={'/'}>
                    <Image src={skill} className='w-[25px]
                    md:w-[45px]
                    sm:w-[35px]
                    '/>
                    <h6 className='text-[9px] hover:text-blue-300'>Proficiencies</h6>
                </Link>
                <Link className='flex justify-center items-center flex-col p-2 rounded-[30px] ' href={'/'}>
                    <Image src={portfolio} className='w-[25px]
                    md:w-[45px]
                    sm:w-[35px]
                    '/>
                    <h6 className='text-[9px] hover:text-blue-300'>My works</h6>
                </Link>

                <Link className='flex justify-center items-center flex-col p-2 rounded-[30px] ' href={'/'}>
                    <Image src={insights} className='w-[25px]
                    md:w-[45px]
                    sm:w-[35px]
                    '/>
                    <h6 className='text-[9px] hover:text-#f16-20075]'>Insights</h6>
                </Link>
                <Link className='flex justify-center items-center flex-col p-2 rounded-[30px] ' href={'/'}>
                    <Image src={contact} className='w-[25px]
                    md:w-[45px]
                    sm:w-[35px]
                    '/>
                    <h6 className='text-[9px] hover:text-blue-300'>Contact</h6>
                </Link>
            </div>
        </div>
    )
}
export default Header