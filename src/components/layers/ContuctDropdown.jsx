import React, { useState } from 'react'
import ListForCategory from "../layers/ListForCategory"
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const contuctDropdown = ({text}) => {
    let [show,setshow] = useState(false)
  return (
            <div className="border-b border-[#F0F0F0] bg-white md:w-[451px] w-auto md:px-5 px-3">
        <div onClick={()=> setshow(!show)} className="relative overflow-hidden">
        <h3 className="flex justify-between items-center relative font-DM lg:text-base sm:text-sm text-xs font-bold text-[#262626] lg:py-[30px] md:py-[23px] sm:py-[18px] py-3">
            {text}
            <>
            <FaPlus className={` transition-all duration-500 bsolute top-1/2 right-0 translate-y-[-50%] ${show ?"opacity-0 invisible":"opacity-100 visible rotate-90"}`}/>
            <FaMinus className={`absolute top-1/2 right-0 translate-y-[-50%] ${show ?"opacity-100 visible":"opacity-0 invisible"}`}/>
            </>
        </h3>
              
        {
        <h5 className={`${show?"static pb-[20px]":"absolute translate-x-[-100%]"} transition-all duration-500`}>
                <ul className='flex flex-col gap-y-[11px]'>
                        <li className='font-DM lg:text-base sm:text-sm text-xs font-normal text-[#767676] lg:leading-[30px] md:leading-[20px] sm:leading-4 leading-3'>575 Crescent Ave. Quakertown, PA 18951</li>
                    <Link>
                        <li className='font-DM lg:text-base sm:text-sm text-xs font-normal text-[#767676] lg:leading-[30px] md:leading-[20px] sm:leading-4 leading-3'>+432 533 12 523</li>
                    </Link>
                    <Link>
                        <li className='ffont-DM lg:text-base sm:text-sm text-xs font-normal text-[#767676] lg:leading-[30px] md:leading-[20px] sm:leading-4 leading-3'>info@domain.com</li>
                    </Link>
                        <li className='font-DM lg:text-base sm:text-sm text-xs font-normal text-[#767676] lg:leading-[30px] md:leading-[20px] sm:leading-4 leading-3'>Mon - Fri: 9am - 6pm</li>
                </ul>
        </h5>
        }
        </div>
        </div>
  )
}

export default contuctDropdown