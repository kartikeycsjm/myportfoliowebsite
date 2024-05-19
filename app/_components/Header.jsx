import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import home from '@/public/icons/home.png'
import contact from '@/public/icons/contact.png'
const Header = () => {
    return (
        <div className='w-[98%] text-white h-[60px] bg-[#000650] rounded-[50px] flex justify-around items-center sticky top-[2px]
        md:top-2 md:w-[90%]
        sm:w-[90%]
        '>
            <div id="links" className='w-[70%] text-white text-[11px] flex justify-around items-center
            md:text-[18px]
            sm:text-[15px]
            '>
                <Link className='p-2 rounded-[30px] border border-[#000640] hover:border-blue-500 duration-[0.5s]' href={'/'}>
                    <Image src={home} className='w-[30px]
                    md:w-[45px]
                    sm:w-[35px]
                    ' />
                </Link>
                <Link className='px-2 rounded-[30px] border border-[#000640] hover:border-blue-500 duration-[0.5s]' href={'#reachout'}>
                    Reach out
                </Link>
                <a className='px-2 rounded-[30px] border border-[#000640] hover:border-blue-500 duration-[0.5s]' href={'/#prof'}>Proficiencies</a>
                <Link className='px-2 rounded-[30px] border border-[#000640] hover:border-blue-500 duration-[0.5s]' href={'/portfolio'}>Portfolio</Link>
                <Link className='px-2 rounded-[30px] border border-[#000640] hover:border-blue-500 duration-[0.5s]' href={'/insights'}>Insights</Link>
                
            </div>
            {/* <Link href={'https://github.com/kartikeycsjm'} id='n' className='px-2 rounded-[30px] border border-[#000640] hover:border-blue-500 duration-[0.5s] text-[15px]
            md:text-[30px]
            sm:text-[25px]
            '
            >&lt;Kartikey/&gt;</Link> */}
        </div>
    )
}
export default Header