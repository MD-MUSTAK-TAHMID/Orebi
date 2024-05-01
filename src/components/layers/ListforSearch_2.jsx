import React from 'react'

const ListforSearch_2 = ({className, text}) => {
  return (
    <li className={`${className} lg:w-[200px] md:w-44 sm:w-40 w-36 text-center md:pt-[17px] sm:pt-[15px] pt-3 md:pb-[15px] sm:pb-[13px] pb-[10px] bg-[#2B2B2B] border border-[#2B2B2B] text-[#ffff]  md:text-[14px] sm:text-xs text-[11px] font-DM font-bold hover:font-normal hover:text-black hover:bg-white hover:border-[#F0F0F0] hover:border duration-500 `}>
        {text}
    </li>
  )
}

export default ListforSearch_2