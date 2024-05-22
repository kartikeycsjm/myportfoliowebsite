import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import arrow from '@/public/icons/arrow.png'
const Recent = ({ type, name, text, image, ltext, llink, all }) => {
    return (
        <div className='m-5 text-white bg-[#000630] w-[80%] min-h-[130px] border border-gray-700 rounded-lg flex justify-around items-center flex-col
        md:w-[500px]
        sm:w-[500px]'>
            <h3 className='text-[20px] font-bold p-2'>{name}</h3>
            <Image src={image} />
            <p className='p-3 text-justify'>{text}</p>
            <Link className='text-blue-800 underline underline-offset-1' href={`${llink}`}>{ltext}</Link>
            <div className='w-full flex justify-end items-center pr-1 relative bottom-0'>
                <Link className='rounded-xl w-[75px] flex justify-center items-center text-[15px]' href={`${all}`}>
                    <p>See All</p><Image className='w-[15px]' src={arrow} />
                </Link>
            </div>
        </div>
    )
}
export default Recent