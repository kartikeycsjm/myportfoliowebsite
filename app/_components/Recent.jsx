import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import arrow from '@/public/icons/arrow.png'
const Recent = ({ type, name, text, image, ltext, llink, all }) => {
    return (
        <div className='m-5 text-white bg-[#000635] w-[80%] min-h-[130px] rounded-lg flex justify-around flex-col
        md:w-[500px]
        sm:w-[500px]'>
            <h3 className='text-[20px] font-bold pl-4'>{name}</h3>
            <Image src={image} className='p-3 w-[90px]' />
            <p className='px-5'>{text}</p>
            <Link className='px-5 text-blue-800 underline underline-offset-1' href={`${llink}`}>{ltext}</Link>
            <div className='w-full flex justify-end items-center relative bottom-0'>
                <Link className='rounded-xl w-[75px] flex justify-center items-center text-[15px]' href={`${all}`}>
                    <p>See All</p><Image className='w-[15px]' src={arrow} />
                </Link>
            </div>
        </div>
    )
}
export default Recent