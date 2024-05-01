import React from 'react'
import { Link } from 'react-router-dom'

const ListForCategory = ({text,className,span,Children}) => {
  return (
    <li>
        <Link className={`w-full font-DM font-normal lg:text-base md:text-sm sm:text-xs text-[10px] text-[#767676] lg:py-5 md:py-4 sm:py-3 py-2 border-b border-[#F0F0F0] leading-[30px] block ${className}`}>
            {text}{span}  {Children}      
        </Link>
    </li>
  )
}

export default ListForCategory