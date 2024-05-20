import React, { useState } from 'react'

const CountDown = () => {
    let [text,settext] = useState(1);
  return (
    <div className='py-3 px-8 bg-transparent border border-[#F0F0F0] lg:max-w-[139px] md:max-w-28 sm:max-w-24 max-w-20 lg:text-base sm:text-sm text-xs text-[#767676] flex items-center lg:gap-[35px] md:gap-[30px] sm:gap-[25px] gap-5 justify-center '>
    <p className='cursor-pointer ' onClick={()=>{settext(text-1)}}>-</p>
    <h1>{text}</h1>
    <p className='cursor-pointer ' onClick={()=>{settext(text + 1)}}>+</p>
    </div>
  )
}

export default CountDown