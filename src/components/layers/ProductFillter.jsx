import React, { useState } from 'react'
import ListForCategory from "../layers/ListForCategory"
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { GoTriangleRight } from "react-icons/go";
const ProductFillter = () => {
  let [show,setshow] = useState(false)
  let [showHeading,setShowHeading] = useState(false)
  let [show2,setshow2] = useState(false)
  return (
    <div className="">
                      <h3 onClick={()=> setShowHeading(!showHeading) } className='cursor-pointer font-DM font-bold lg:text-[20px] md:text-lg sm:text-sm text-xs text-[#262626] mb-[14px] flex justify-between items-center'>Shop by Category
                        <GoTriangleRight className={`${showHeading?"rotate-90":""} transition-all duration-500 cursor-pointer`}/>
                      </h3>
                    {showHeading&&(
                        <ul>
                  <div onClick={()=> setshow(!show)} className="relative overflow-hidden">
                    <ListForCategory span={<><FaPlus className={` transition-all duration-500 bsolute top-1/2 right-0 translate-y-[-50%] ${show ?"opacity-0 invisible":"opacity-100 visible rotate-90"}`}/><FaMinus className={`absolute top-1/2 right-0 translate-y-[-50%] ${show ?"opacity-100 visible":"opacity-0 invisible"}`}/></>} text="Category 1" className="flex justify-between items-center relative"/>
                    {
                  <ul className={`${show?"static":"absolute translate-x-[-100%]"} transition-all duration-500`}>
                  <ListForCategory text="Category 1/1" className="ml-5 lg:text-sm md:text-xs sm:text-[10px] text-[8px] lg:py-3 md:py-2 sm:py-1 py-[2px] font-light" />
                  <ListForCategory text="Category 1/2" className="ml-5 lg:text-sm md:text-xs sm:text-[10px] text-[8px] lg:py-3 md:py-2 sm:py-1 py-[2px] font-light" />
                  <ListForCategory text="Category 1/3" className="ml-5 lg:text-sm md:text-xs sm:text-[10px] text-[8px] lg:py-3 md:py-2 sm:py-1 py-[2px] font-light" />
                  <ListForCategory text="Category 1/4" className="ml-5 lg:text-sm md:text-xs sm:text-[10px] text-[8px] lg:py-3 md:py-2 sm:py-1 py-[2px] font-light" />
                  <ListForCategory text="Category 1/5" className="ml-5 lg:text-sm md:text-xs sm:text-[10px] text-[8px] lg:py-3 md:py-2 sm:py-1 py-[2px] font-light" />
                </ul>
              }
                  </div>
                  <ListForCategory text="Category 2"/>
                  <div onClick={()=> setshow2(!show2)} className="relative overflow-hidden">
                    <ListForCategory span={<><FaPlus className={` transition-all duration-500 bsolute top-1/2 right-0 translate-y-[-50%] ${show2 ?"opacity-0 invisible":"opacity-100 visible rotate-90"}`}/><FaMinus className={`absolute top-1/2 right-0 translate-y-[-50%] ${show2 ?"opacity-100 visible":"opacity-0 invisible"}`}/></>} text="Category 3" className="flex justify-between items-center relative"/>
                    {
                  <ul className={`${show2?"static":"absolute   translate-x-[-100%]"} transition-all duration-500`}>
                  <ListForCategory text="Category 3/1" className="ml-5 lg:text-sm md:text-xs sm:text-[10px] text-[8px] lg:py-3 md:py-2 sm:py-1 py-[2px] font-light" />
                  <ListForCategory text="Category 3/2" className="ml-5 lg:text-sm md:text-xs sm:text-[10px] text-[8px] lg:py-3 md:py-2 sm:py-1 py-[2px] font-light" />
                  <ListForCategory text="Category 3/3" className="ml-5 lg:text-sm md:text-xs sm:text-[10px] text-[8px] lg:py-3 md:py-2 sm:py-1 py-[2px] font-light" />
                  <ListForCategory text="Category 3/4" className="ml-5 lg:text-sm md:text-xs sm:text-[10px] text-[8px] lg:py-3 md:py-2 sm:py-1 py-[2px] font-light" />
                  <ListForCategory text="Category 3/5" className="ml-5 lg:text-sm md:text-xs sm:text-[10px] text-[8px] lg:py-3 md:py-2 sm:py-1 py-[2px] font-light" />
                </ul>
              }
                  </div>
                  <ListForCategory text="Category 4"/>
                  <ListForCategory text="Category 5" />
              </ul>
                    )}
    </div>
  )
}

export default ProductFillter