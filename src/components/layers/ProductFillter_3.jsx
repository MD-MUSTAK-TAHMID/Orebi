import React, { useState } from 'react'
import ListForCategory from "./ListForCategory"
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { GoTriangleRight } from "react-icons/go";
const ProductFillter_3 = () => {
  let [show,setshow] = useState(false)
  let [showHeading,setShowHeading] = useState(false)
  let [show2,setshow2] = useState(false)
  return (
    <div className="">
                      <h3 onClick={()=> setShowHeading(!showHeading) } className='cursor-pointer font-DM font-bold lg:text-[20px] md:text-lg sm:text-sm text-xs text-[#262626] mb-[14px] flex justify-between items-center'>Shop by Brand
                        <GoTriangleRight className={`${showHeading?"rotate-90":""} transition-all duration-500 cursor-pointer`}/>
                      </h3>
                    {showHeading&&(
                        <ul>
                  <ListForCategory text="Brand 1"/>
                  <ListForCategory text="Brand 2" />                  
                  <ListForCategory text="Brand 3"/>
                  <ListForCategory text="Brand 4" />
                  <ListForCategory text="Brand 5" />
              </ul>
                    )}
    </div>
  )
}

export default ProductFillter_3