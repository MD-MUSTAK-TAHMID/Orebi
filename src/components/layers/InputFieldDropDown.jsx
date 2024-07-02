

const InputFieldDropDown = ({type,placeholder,id,label,className,Option1,Option2,Option3,Option4,Option5,classNameMain,children,onchange,value}) => {
  return (
    <div className={`flex max-w-[508px] flex-col relative w-full border-b border-[#F0F0F0]  ${classNameMain}`}>
    <label className={
        `font-DM lg:text-base sm:text-sm text-xs text-[#262626] lg:leading-[23px] md:leading-4 sm:leading-3 leading-2} ${className}`
    } htmlFor={id}>{label}</label>
     <select value={value} onChange={onchange} name="" id={id} className={`lg:pt-[33px] md:pt-5 sm:pt-4 pt-3 md:pb-4 sm:pb-3 pb-2 lg:text-sm sm:text-xs text-[10px] font-DM text-[#767676] outline-none bg-transparent `} type={type} placeholder={placeholder}>
        <option value={Option1}>{Option1}</option>
        <option value={Option2}>{Option2}</option>
        <option value={Option3}>{Option3}</option>
        <option value={Option4}>{Option4}</option>
        <option value={Option5}>{Option5}</option>
     </select>
     {children}
    </div>
  )
}

export default InputFieldDropDown