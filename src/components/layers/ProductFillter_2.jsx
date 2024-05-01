import React, { useState } from 'react'
import ListForCategory from "./ListForCategory"
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { GoTriangleRight } from "react-icons/go";
const ProductFillter_2 = () => {
  let [show,setshow] = useState(false)
  let [showHeading,setShowHeading] = useState(false)
  let [show2,setshow2] = useState(false)
  return (
    <div className="">
                      <h3 onClick={()=> setShowHeading(!showHeading) } className='cursor-pointer font-DM font-bold lg:text-[20px] md:text-lg sm:text-sm text-xs text-[#262626] mb-[14px] flex justify-between items-center'>Shop by Color
                        <GoTriangleRight className={`${showHeading?"rotate-90":""} transition-all duration-500 cursor-pointer`}/>
                      </h3>
                    {showHeading&&(
                        <ul>
                          <div className='flex items-center gap-x-[10px] !w-full border-b border-[#F0F0F0]'>
                            <div className="w-[11px] h-[11px] rounded-full bg-black"></div>
                            <ListForCategory text="Color 1"/>
                          </div>
                          <div className='flex items-center gap-x-[10px] !w-full border-b border-[#F0F0F0]'>
                            <div className="w-[11px] h-[11px] rounded-full bg-[#FF8686]"></div>
                            <ListForCategory text="Color 2"/>
                          </div>
                          <div className='flex items-center gap-x-[10px] !w-full border-b border-[#F0F0F0]'>
                            <div className="w-[11px] h-[11px] rounded-full bg-[#7ED321]"></div>
                            <ListForCategory text="Color 3"/>
                          </div>
                          <div className='flex items-center gap-x-[10px] !w-full border-b border-[#F0F0F0]'>
                            <div className="w-[11px] h-[11px] rounded-full bg-[#B6B6B6]"></div>
                            <ListForCategory text="Color 4"/>
                          </div>
                          <div className='flex items-center gap-x-[10px] !w-full border-b border-[#F0F0F0]'>
                            <div className="w-[11px] h-[11px] rounded-full bg-[#15CBA5]"></div>
                            <ListForCategory text="Color 5"/>
                          </div>
              </ul>
                    )}
    </div>
  )
}

export default ProductFillter_2