import React from 'react'

const Box = ({lefttext,className,righttext}) => {
  return (
    <div className="flex">
    <h5 className='font-bold lg:text-base sm:text-sm text-xs text-[#262626] lg:leading-[23px] md:pt-4 sm:pt-3 pt-2 md:pb-4 sm:pb-3 pb-2 border border-[#F0F0F0] border-r-0 md:w-[320px] w-full md:px-5 sm:px-3 px-2'>{lefttext}</h5>
    <p className={`lg:text-base sm:text-sm text-xs text-[#767676] lg:leading-[23px] md:pt-4 sm:pt-3 pt-2 md:pb-4 sm:pb-3 pb-2 border border-[#F0F0F0] md:w-[320px] w-full md:px-5 sm:px-3 px-2 ${className}`}>{righttext}</p>
 </div>
  )
}

export default Box