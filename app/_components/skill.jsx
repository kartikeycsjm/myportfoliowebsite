import React from 'react'

const Skill = ({ children,name }) => {
    return (
        <div className='w-[90%] m-5 bg-[#000635] min-h-[200px] rounded-lg flex justify-around items-center flex-col flex-wrap'>
            <h4 className='m-3 text-center'><strong>{name}</strong></h4>
            <div className='w-full flex justify-center items-center flex-wrap'>
                {children}
            </div>
        </div>
    )
}

export default Skill