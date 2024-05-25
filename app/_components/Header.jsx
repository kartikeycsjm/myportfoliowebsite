'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import home from '@/public/icons/home.png'
import contact from '@/public/icons/contact.png'
import skill from '@/public/icons/skill.png'
import insights from '@/public/icons/insights.png'
import portfolio from '@/public/icons/portfolio.png'
import more from '@/public/icons/more2.png'
import cross from '@/public/icons/cross.png'
const Header = () => {
    const [clicked, setClicked] = useState(false)
    const [laptop, setLaptop] = useState(false)
    useEffect(() => {
        const handleResize = () => {
            setLaptop(window.innerWidth >= 768)
        }
        window.addEventListener('resize', handleResize)
        handleResize()
        return () => window.removeEventListener('resize', handleResize)
    }, [])
    return (
        <div className='z-50 w-[98%] text-white h-[70px] border-b bg-[#000625] border-gray-900 rounded-[50px] flex justify-around items-center sticky top-[0px]
        md:top-0 md:w-[90%] md:h-[70px]
        sm:w-[95%]
        '>
            {!laptop && < div className='w-[90%] h-[65px] flex justify-between items-center'>
                <h1 className='text-[25px]'>&lt;Kartikey Mishra/&gt;</h1>
                {
                    clicked ?
                        <Image
                            onClick={() => setClicked(!clicked)} src={cross}
                            className='w-[35px] cursor-pointer'
                        />
                        :
                        <Image
                            onClick={() => setClicked(!clicked)} src={more}
                            className='w-[35px] cursor-pointer'
                        />
                }
            </div>
            }
            {
                clicked &&
                <div id="links" className='absolute top-[70px] bg-[#000625] w-[100%] h-[95vh] text-white text-[11px] flex justify-center items-center flex-col
                md:text-[18px]
                sm:text-[15px]
                '>
                    <div className='h-[70%] flex justify-between items-center flex-col'>
                        <Link onClick={() => setClicked(false)} className='w-[110px]  9i h-[110px] flex justify-center items-center flex-col p-2 rounded-[30px]
                md:w-[100px] md:h-[70px] ' href={'/'}>
                            <Image alt='header' src={home} className='w-[55px]
                    md:w-[45px]
                    sm:w-[35px]
                    '/>
                            <h6 className='text-[15px] hover:text-blue-300 hover:text-[17px] duration-100
                    md:text-[14px] md:hover:text-[17px]'>Home</h6>
                        </Link>
                        <Link onClick={() => setClicked(false)} className='w-[110px]  9i h-[110px] flex justify-center items-center flex-col p-2 rounded-[30px]
                md:w-[100px] md:h-[70px] ' href={'/proficiencies'}>
                            <Image alt='header' src={skill} className='w-[55px]
                    md:w-[45px]
                    sm:w-[35px]
                    '/>
                            <h6 className='text-[15px] hover:text-blue-300 hover:text-[17px] duration-100
                    md:text-[14px] md:hover:text-[17px]'>Proficiencies</h6>
                        </Link>
                        <Link onClick={() => setClicked(false)} className='w-[110px]  9i h-[110px] flex justify-center items-center flex-col p-2 rounded-[30px]
                md:w-[100px] md:h-[70px] ' href={'/portfolio'}>
                            <Image alt='header' src={portfolio} className='w-[55px]
                    md:w-[45px]
                    sm:w-[35px]
                    '/>
                            <h6 className='text-[15px] hover:text-blue-300 hover:text-[17px] duration-100
                    md:text-[14px] md:hover:text-[17px]'>My works</h6>
                        </Link>
                        <Link onClick={() => setClicked(false)} className='w-[110px]  9i h-[110px] flex justify-center items-center flex-col p-2 rounded-[30px]
                md:w-[100px] md:h-[70px] ' href={'/insights'}>
                            <Image alt='header' src={insights} className='w-[55px]
                    md:w-[45px]
                    sm:w-[35px]
                    '/>
                            <h6 className='text-[15px] hover:text-blue-300 hover:text-[17px] duration-100
                    md:text-[14px] md:hover:text-[17px]'>Insights</h6>
                        </Link>
                        <Link onClick={() => setClicked(false)} className='w-[110px]  9i h-[110px] flex justify-center items-center flex-col p-2 rounded-[30px]
                md:w-[100px] md:h-[70px] ' href={'#contact'}>
                            <Image alt='header' src={contact} className='w-[55px]
                    md:w-[45px]
                    sm:w-[35px]
                    '/>
                            <h6 className='text-[15px] hover:text-blue-300 hover:text-[17px] duration-100
                    md:text-[14px] md:hover:text-[17px]'>Contact</h6>
                        </Link>
                    </div>
                </div>
            }
            {
                laptop &&
                <div id="links" className='sticky top-0 w-[100%] h-[65px] text-white text-[11px] flex justify-around items-center'>
                    <h1 className='text-[28px]'>&lt;Kartikey Mishra/&gt;</h1>
                    <div className='w-[65%] h-[65px] flex justify-between items-center'>
                        <Link onClick={() => setClicked(false)} className='w-[110px]  9i h-[110px] flex justify-center items-center flex-col p-2 rounded-[30px]' href={'/'}>
                            <Image alt='header' src={home} className='w-[35px]' />
                            <h6 className='text-[14px] hover:text-blue-300 hover:text-[17px] duration-100'>
                                Home</h6>
                        </Link>
                        <Link onClick={() => setClicked(false)} className='w-[110px] h-[110px] flex justify-center items-center flex-col p-2 rounded-[30px]'
                            href={'/proficiencies'}>
                            <Image alt='header' src={skill} className='w-[35px]' />
                            <h6 className='text-[14px] hover:text-blue-300 hover:text-[17px] duration-100'>
                                Proficiencies</h6>
                        </Link>
                        <Link onClick={() => setClicked(false)} className='w-[110px]  9i h-[110px] flex justify-center items-center flex-col p-2 rounded-[30px]' href={'/portfolio'}>
                            <Image alt='header' src={portfolio} className='w-[35px]' />
                            <h6 className='text-[14px] hover:text-blue-300 hover:text-[17px] duration-100'>My works</h6>
                        </Link>
                        <Link onClick={() => setClicked(false)} className='w-[110px]  9i h-[110px] flex justify-center items-center flex-col p-2 rounded-[30px]'
                            href={'/insights'}>
                            <Image alt='header' src={insights} className='w-[35px]' />
                            <h6 className='text-[14px] hover:text-blue-300 hover:text-[17px] duration-100'>
                                Insights</h6>
                        </Link>
                        <Link onClick={() => setClicked(false)} className='w-[110px]  9i h-[110px] flex justify-center items-center flex-col p-2 rounded-[30px] '
                            href={'#contact'}>
                            <Image alt='header' src={contact} className='w-[35px]' />
                            <h6 className='text-[14px] hover:text-blue-300 hover:text-[17px] duration-100'>
                                Contact</h6>
                        </Link>
                    </div>
                </div>

            }
        </div >
    )
}
export default Header