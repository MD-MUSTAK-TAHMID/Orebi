import React from 'react'

const ButtonForCartDropdown = ({text, className}) => {
  return (
    <button className={`w-[148px] text-center md:py-4 py-1 bg-black hover:bg-transparent lg:text-[14px] text-[10px] font-DM font-bold text-white hover:text-black border border-black duration-500 ${className}`}>
        {text}
    </button>
  )
}

export default ButtonForCartDropdown