import React from 'react'
import { FaAngleRight, FaAnglesRight } from "react-icons/fa6";
const Breadcrumb = () => {
  return (
    <p className='flex items-center gap-x-1 font-DM font-normal lg:text-xs text-[10px] text-[#767676] lg:mt-[11px] mt-[7px] capitalize'>Home<FaAnglesRight/><span>{window.location.pathname.split("/")[1]}</span><span className='lowercase'>{window.location.pathname.split("/")[2]}</span></p>
  )
}

export default Breadcrumb