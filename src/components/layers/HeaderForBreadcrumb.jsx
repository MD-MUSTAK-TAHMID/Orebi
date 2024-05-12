import React from 'react'
import Breadcrumb from '../layers/Breadcrumb';
const HeaderForBreadcrumb = ({text,className}) => {
  return (
    <div className={`px-3 lg:px-0 header lg:pt-[124px] md:pt-[90px] sm:pt-[75px] pt-[45px]  lg:pb-[130px] md:pb-[90px] sm:pb-[75px] pb-[45px] ${className}`}>
    <h2 className='font-DM font-bold lg:text-[49px] md:text-[40px] sm:text-[35px] text-[30px] text-[#262626] capitalize'>{text}</h2>
    <Breadcrumb/>
    </div>
  )
}

export default HeaderForBreadcrumb