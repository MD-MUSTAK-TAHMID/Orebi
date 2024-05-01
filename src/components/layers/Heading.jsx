import React from 'react'

const Heading = ({text , className}) => {
  return (
    <h2 className={`font-DM font-bold text-[#262626] lg:text-[39px] text-2xl md:text-4xl px-3 md:px-0 ${className}`}>
        {text}
    </h2>
  )
}

export default Heading