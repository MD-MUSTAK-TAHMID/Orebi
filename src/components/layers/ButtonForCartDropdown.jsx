import React from 'react'

const ButtonForCartDropdown = ({text, className,onclick}) => {
  return (
    <button onClick={onclick} className={`w-[148px] text-center md:py-4 py-1 hover:bg-black bg-transparent lg:text-[14px] text-[10px] font-DM font-bold hover:text-white text-black border border-black duration-500 ${className}`}>
        {text}
    </button>
  )
}

export default ButtonForCartDropdown