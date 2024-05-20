import React from 'react'
import { Link } from 'react-router-dom'

const ListForCategory = ({text,className,span,Children}) => {
  return (
    <li>
        <Link className={`w-full font-DM font-normal lg:text-base md:text-sm sm:text-xs text-[10px] text-[#767676] lg:py-5 md:py-4 sm:py-3 py-2 border-b md:border-[#F0F0F0] border-[#ababab]  lg:leading-[30px] md:leading-5 sm:leading-4 leading-3 block ${className}`}>
            {text}{span}  {Children}      
        </Link>
    </li>
  )
}

export default ListForCategory