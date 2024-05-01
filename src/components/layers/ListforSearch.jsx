import React from 'react'

const ListforSearch = ({text, className}) => {
  return (
    <li className={`lg:w-[263px] md:w-64 sm:w-56 w-48 md:py-4 py-3 lg:ps-[21px] md:ps-[18px] sm:ps-4 ps-3 bg-[#262626] text-[#bebebe]  md:text-[14px] text-xs font-DM font-normal hover:md:ps-[31px] hover:sm:ps-6 hover:ps-5 hover:text-white hover:font-bold duration-300 ${className}  border-b border-[#2d2d2d] `}> 
        {text}
    </li>
  )
}

export default ListforSearch