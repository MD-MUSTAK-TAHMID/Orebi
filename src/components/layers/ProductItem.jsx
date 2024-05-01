import React from 'react'
import { FaHeart } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { FaShoppingCart } from "react-icons/fa";



const ProductItem = ({offer, overly_1, overly_2, overly_3, text, price, color, src, className}) => {
  return (
    <div className={`md:w-[370px] sm:w-60 w-[300px]  group  ${className}`}>
        <div className="Image w-full md:h-[370px] h-auto bg-slate-400 relative overflow-hidden">
            <img className='object-contain lg:h-full sm:h-auto w-full' src={src} alt="" />
            <button className={` bg-[#262626] text-white font-DM font-bold md:text-[14px] text-xs absolute left-5 top-5 ${offer ? "lg:h-[35px] md:h-[32px] sm:h-[30px] h-6":"h-0"}  ${offer ? "lg:w-[92px] md:w-[85px] sm:w-[80px] w-[75px]":"w-0"}`}>{offer}</button>
            <div className="overly bg-white absolute bottom-0 translate-y-[100%] left-0 group-hover:translate-y-0 transition-all duration-300 w-full">
                <ul className='lg:pr-[30px] md:pr-6 sm:pr-5 pr-4'>
                    <li className='flex items-center md:gap-[15px] sm:gap-3 gap-2 justify-end lg:pt-[25px] md:pt-5 sm:pt-4 pt-3 lg:pb-[21px] md:pb-[18px] sm:pb-[15px] pb-3  text-[#767676] font-DM font-normal md:text-[16px] sm:text-sm text-xs hover:font-bold hover:text-[#262626] transition-all duration-300 cursor-pointer '>{overly_1}<FaHeart className='text-black'/></li>
                    <li className='flex items-center md:gap-[15px] sm:gap-3 gap-2 justify-end lg:pb-[21px] md:pb-[18px] sm:pb-[15px] pb-3  text-[#767676] font-DM font-normal md:text-[16px] sm:text-sm text-xs hover:font-bold hover:text-[#262626] transition-all duration-300 cursor-pointer '>{overly_2}<TfiReload className='text-black' /></li>
                    <li className='flex items-center md:gap-[15px] sm:gap-3 gap-2 justify-end lg:pb-[26px] md:pb-[26px] sm:pb-[26px] pb-3 text-[#767676] font-DM font-normal md:text-[16px] sm:text-sm text-xs hover:font-bold hover:text-[#262626] transition-all duration-300 cursor-pointer '>{overly_3}<FaShoppingCart className='text-black' /></li>
                </ul>
            </div>
        </div>
        <div className="pt-6 pb-[15px]">
            <h2 className='flex justify-between text-[#262626] font-DM font-bold md:text-[20px] sm:text-lg text-base '>
                {text}<p className='text-[#767676] font-DM font-normal md:text-[16px] sm:text-sm text-xs'>{price}</p>
            </h2>
            <p className='text-[#767676] font-DM font-normal md:text-[16px] sm:text-sm text-xs md:leading-[30px] sm:leading-5 leading-4'>{color}</p>
            
        </div>
    </div>
  )
}

export default ProductItem