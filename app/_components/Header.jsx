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
        md:top-2 md:w-[90%] md:h-[70px]
        sm:w-[95%]
        '>
            <div id="links" className='w-[100%] text-white text-[11px] flex justify-around items-center
            md:text-[18px]
            sm:text-[15px]
            '>
                <Link className='w-[70px] h-[60px] flex justify-center items-center flex-col p-2 rounded-[30px]
                md:w-[100px] md:h-[70px] ' href={'/'}>
                    <Image src={home} className='w-[25px]
                    md:w-[45px]
                    sm:w-[35px]
                    '/>
                    <h6 className='text-[9px] hover:text-blue-300 hover:text-[10px] duration-100
                    md:text-[14px] md:hover:text-[17px]'>Home</h6>
                </Link>
                <Link className='w-[70px] h-[60px] flex justify-center items-center flex-col p-2 rounded-[30px]
                md:w-[100px] md:h-[70px] ' href={'/proficiencies'}>
                    <Image src={skill} className='w-[25px]
                    md:w-[45px]
                    sm:w-[35px]
                    '/>
                    <h6 className='text-[9px] hover:text-blue-300 hover:text-[10px] duration-100
                    md:text-[14px] md:hover:text-[17px]'>Proficiencies</h6>
                </Link>
                <Link className='w-[70px] h-[60px] flex justify-center items-center flex-col p-2 rounded-[30px]
                md:w-[100px] md:h-[70px] ' href={'/portfolio'}>
                    <Image src={portfolio} className='w-[25px]
                    md:w-[45px]
                    sm:w-[35px]
                    '/>
                    <h6 className='text-[9px] hover:text-blue-300 hover:text-[10px] duration-100
                    md:text-[14px] md:hover:text-[17px]'>My works</h6>
                </Link>

                <Link className='w-[70px] h-[60px] flex justify-center items-center flex-col p-2 rounded-[30px]
                md:w-[100px] md:h-[70px] ' href={'/insights'}>
                    <Image src={insights} className='w-[25px]
                    md:w-[45px]
                    sm:w-[35px]
                    '/>
                    <h6 className='text-[9px] hover:text-blue-300 hover:text-[10px] duration-100
                    md:text-[14px] md:hover:text-[17px]'>Insights</h6>
                </Link>
                <Link className='w-[70px] h-[60px] flex justify-center items-center flex-col p-2 rounded-[30px]
                md:w-[100px] md:h-[70px] ' href={'/contact'}>
                    <Image src={contact} className='w-[25px]
                    md:w-[45px]
                    sm:w-[35px]
                    '/>
                    <h6 className='text-[9px] hover:text-blue-300 hover:text-[10px] duration-100
                    md:text-[14px] md:hover:text-[17px]'>Contact</h6>
                </Link>
            </div>
        </div>
    )
}
export default Header