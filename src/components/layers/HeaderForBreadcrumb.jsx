import React from 'react'
import Breadcrumb from '../layers/Breadcrumb';
const HeaderForBreadcrumb = () => {
  return (
    <div className="header pt-[124px] pb-[130px]">
    <h2 className='font-DM font-bold text-[49px] text-[#262626] capitalize'>{window.location.pathname.split("/")[1]}</h2>
    <Breadcrumb/>
    </div>
  )
}

export default HeaderForBreadcrumb