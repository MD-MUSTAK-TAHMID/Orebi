import React from 'react'

const InputFieldText = ({label,className,type,palceholder,id,classNameinput,classNameMain,onchange,value,children}) => {
  return (
    <div className={`flex max-w-[508px] flex-col relative w-full border-b border-[#F0F0F0]  ${classNameMain}`}>
    <label className={
        `font-DM lg:text-base sm:text-sm text-xs text-[#262626] lg:leading-[23px] md::leading-4 sm:leading-3 leading-2 ${className}`
    } htmlFor={id}>{label}</label>
    <input value={value} onChange={onchange} className={`lg:pt-[33px] md:pt-5 sm:pt-4 pt-3 md:pb-4 sm:pb-3 pb-2 lg:text-sm sm:text-xs text-[10px] font-DM text-[#767676] outline-none ${classNameinput}`} type={type} placeholder={palceholder} id={id}/>
    {children}
    </div>
  )
}

export default InputFieldText