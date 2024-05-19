import React from 'react'

const HeadingForPages = ({text,className}) => {
  return (
    <h3 className={`lg:text-[39px] md:text-[30px] sm:text-[25px] text-[20px] font-bold font-DM text-[#262626] lg:pb-[42px] md:pb-[30px] sm:pb-[20px] pb-[15px] ${className}`}>
    {text}
    </h3>
  )
}

export default HeadingForPages