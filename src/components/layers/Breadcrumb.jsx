import React from 'react'
import { FaAngleRight } from "react-icons/fa6";
const Breadcrumb = () => {
  return (
    <p className='flex items-center gap-x-1 font-DM font-normal text-xs text-[#767676] mt-[11px] capitalize'>Home<FaAngleRight/><span>{window.location.pathname.split("/")[1]}</span> </p>
  )
}

export default Breadcrumb