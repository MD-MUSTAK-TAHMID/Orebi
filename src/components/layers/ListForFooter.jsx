import React from 'react'
import { Link } from 'react-router-dom'

const ListForFooter = ({to, className, text}) => {
  return (
    <li>
        <Link className={`font-normal !text-[#6D6D6D] lg:leading-[23px] sm:leading-3 leading-[8px] lg:text-sm md:text-xs sm:text-[10px] text-[8px] ${className}`} to={to}>
            {text}
        </Link>
    </li>
  )
}

export default ListForFooter